(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }

  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var mu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};

function ve(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var X1 = {
    exports: {},
  },
  js = {},
  Y1 = {
    exports: {},
  },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nu = Symbol.for("react.element"),
  L_ = Symbol.for("react.portal"),
  R_ = Symbol.for("react.fragment"),
  B_ = Symbol.for("react.strict_mode"),
  z_ = Symbol.for("react.profiler"),
  F_ = Symbol.for("react.provider"),
  U_ = Symbol.for("react.context"),
  W_ = Symbol.for("react.forward_ref"),
  H_ = Symbol.for("react.suspense"),
  V_ = Symbol.for("react.memo"),
  K_ = Symbol.for("react.lazy"),
  Zv = Symbol.iterator;

function G_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zv && e[Zv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Z1 = Object.assign,
  J1 = {};

function ra(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = J1),
    (this.updater = r || Q1);
}
ra.prototype.isReactComponent = {};
ra.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ra.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};

function eb() {}
eb.prototype = ra.prototype;

function Jd(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = J1),
    (this.updater = r || Q1);
}
var eh = (Jd.prototype = new eb());
eh.constructor = Jd;
Z1(eh, ra.prototype);
eh.isPureReactComponent = !0;
var Jv = Array.isArray,
  tb = Object.prototype.hasOwnProperty,
  th = {
    current: null,
  },
  rb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };

function nb(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      tb.call(t, n) && !rb.hasOwnProperty(n) && (i[n] = t[n]);
  var u = arguments.length - 2;
  if (u === 1) i.children = r;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((u = e.defaultProps), u)) i[n] === void 0 && (i[n] = u[n]);
  return {
    $$typeof: nu,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: th.current,
  };
}

function q_(e, t) {
  return {
    $$typeof: nu,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}

function rh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nu;
}

function X_(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var ey = /\/+/g;

function Lc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? X_("" + e.key)
    : t.toString(36);
}

function Xu(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nu:
          case L_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + Lc(o, 0) : n),
      Jv(i)
        ? ((r = ""),
          e != null && (r = e.replace(ey, "$&/") + "/"),
          Xu(i, t, r, "", function (s) {
            return s;
          }))
        : i != null &&
          (rh(i) &&
            (i = q_(
              i,
              r +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ey, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), Jv(e)))
    for (var u = 0; u < e.length; u++) {
      a = e[u];
      var l = n + Lc(a, u);
      o += Xu(a, t, r, l, i);
    }
  else if (((l = G_(e)), typeof l == "function"))
    for (e = l.call(e), u = 0; !(a = e.next()).done; )
      (a = a.value), (l = n + Lc(a, u++)), (o += Xu(a, t, r, l, i));
  else if (a === "object")
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

function gu(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Xu(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}

function Y_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ut = {
    current: null,
  },
  Yu = {
    transition: null,
  },
  Q_ = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: Yu,
    ReactCurrentOwner: th,
  };

function ib() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: gu,
  forEach: function (e, t, r) {
    gu(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!rh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ee.Component = ra;
ee.Fragment = R_;
ee.Profiler = z_;
ee.PureComponent = Jd;
ee.StrictMode = B_;
ee.Suspense = H_;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q_;
ee.act = ib;
ee.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = Z1({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = th.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (l in t)
      tb.call(t, l) &&
        !rb.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++) u[s] = arguments[s + 2];
    n.children = u;
  }
  return {
    $$typeof: nu,
    type: e.type,
    key: i,
    ref: a,
    props: n,
    _owner: o,
  };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: U_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: F_,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
ee.createElement = nb;
ee.createFactory = function (e) {
  var t = nb.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return {
    current: null,
  };
};
ee.forwardRef = function (e) {
  return {
    $$typeof: W_,
    render: e,
  };
};
ee.isValidElement = rh;
ee.lazy = function (e) {
  return {
    $$typeof: K_,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: Y_,
  };
};
ee.memo = function (e, t) {
  return {
    $$typeof: V_,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
ee.startTransition = function (e) {
  var t = Yu.transition;
  Yu.transition = {};
  try {
    e();
  } finally {
    Yu.transition = t;
  }
};
ee.unstable_act = ib;
ee.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return ut.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
ee.useId = function () {
  return ut.current.useId();
};
ee.useImperativeHandle = function (e, t, r) {
  return ut.current.useImperativeHandle(e, t, r);
};
ee.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
ee.useReducer = function (e, t, r) {
  return ut.current.useReducer(e, t, r);
};
ee.useRef = function (e) {
  return ut.current.useRef(e);
};
ee.useState = function (e) {
  return ut.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, r) {
  return ut.current.useSyncExternalStore(e, t, r);
};
ee.useTransition = function () {
  return ut.current.useTransition();
};
ee.version = "18.3.1";
Y1.exports = ee;
var F = Y1.exports;
const A = ve(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z_ = F,
  J_ = Symbol.for("react.element"),
  eP = Symbol.for("react.fragment"),
  tP = Object.prototype.hasOwnProperty,
  rP = Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nP = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };

function ab(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) tP.call(t, n) && !nP.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: J_,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: rP.current,
  };
}
js.Fragment = eP;
js.jsx = ab;
js.jsxs = ab;
X1.exports = js;
var X = X1.exports,
  ob = {
    exports: {},
  },
  At = {},
  ub = {
    exports: {},
  },
  lb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(T, N) {
    var B = T.length;
    T.push(N);
    e: for (; 0 < B; ) {
      var H = (B - 1) >>> 1,
        U = T[H];
      if (0 < i(U, N)) (T[H] = N), (T[B] = U), (B = H);
      else break e;
    }
  }

  function r(T) {
    return T.length === 0 ? null : T[0];
  }

  function n(T) {
    if (T.length === 0) return null;
    var N = T[0],
      B = T.pop();
    if (B !== N) {
      T[0] = B;
      e: for (var H = 0, U = T.length, q = U >>> 1; H < q; ) {
        var ie = 2 * (H + 1) - 1,
          we = T[ie],
          je = ie + 1,
          $t = T[je];
        if (0 > i(we, B))
          je < U && 0 > i($t, we)
            ? ((T[H] = $t), (T[je] = B), (H = je))
            : ((T[H] = we), (T[ie] = B), (H = ie));
        else if (je < U && 0 > i($t, B)) (T[H] = $t), (T[je] = B), (H = je);
        else break e;
      }
    }
    return N;
  }

  function i(T, N) {
    var B = T.sortIndex - N.sortIndex;
    return B !== 0 ? B : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var l = [],
    s = [],
    f = 1,
    c = null,
    p = 3,
    d = !1,
    y = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function m(T) {
    for (var N = r(s); N !== null; ) {
      if (N.callback === null) n(s);
      else if (N.startTime <= T)
        n(s), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = r(s);
    }
  }

  function S(T) {
    if (((g = !1), m(T), !y))
      if (r(l) !== null) (y = !0), D(b);
      else {
        var N = r(s);
        N !== null && L(S, N.startTime - T);
      }
  }

  function b(T, N) {
    (y = !1), g && ((g = !1), v(_), (_ = -1)), (d = !0);
    var B = p;
    try {
      for (
        m(N), c = r(l);
        c !== null && (!(c.expirationTime > N) || (T && !E()));

      ) {
        var H = c.callback;
        if (typeof H == "function") {
          (c.callback = null), (p = c.priorityLevel);
          var U = H(c.expirationTime <= N);
          (N = e.unstable_now()),
            typeof U == "function" ? (c.callback = U) : c === r(l) && n(l),
            m(N);
        } else n(l);
        c = r(l);
      }
      if (c !== null) var q = !0;
      else {
        var ie = r(s);
        ie !== null && L(S, ie.startTime - N), (q = !1);
      }
      return q;
    } finally {
      (c = null), (p = B), (d = !1);
    }
  }
  var x = !1,
    O = null,
    _ = -1,
    P = 5,
    $ = -1;

  function E() {
    return !(e.unstable_now() - $ < P);
  }

  function j() {
    if (O !== null) {
      var T = e.unstable_now();
      $ = T;
      var N = !0;
      try {
        N = O(!0, T);
      } finally {
        N ? k() : ((x = !1), (O = null));
      }
    } else x = !1;
  }
  var k;
  if (typeof h == "function")
    k = function () {
      h(j);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      M = I.port2;
    (I.port1.onmessage = j),
      (k = function () {
        M.postMessage(null);
      });
  } else
    k = function () {
      w(j, 0);
    };

  function D(T) {
    (O = T), x || ((x = !0), k());
  }

  function L(T, N) {
    _ = w(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || d || ((y = !0), D(b));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var B = p;
      p = N;
      try {
        return T();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var B = p;
      p = T;
      try {
        return N();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, B) {
      var H = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? H + B : H))
          : (B = H),
        T)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = B + U),
        (T = {
          id: f++,
          callback: N,
          priorityLevel: T,
          startTime: B,
          expirationTime: U,
          sortIndex: -1,
        }),
        B > H
          ? ((T.sortIndex = B),
            t(s, T),
            r(l) === null &&
              T === r(s) &&
              (g ? (v(_), (_ = -1)) : (g = !0), L(S, B - H)))
          : ((T.sortIndex = U), t(l, T), y || d || ((y = !0), D(b))),
        T
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (T) {
      var N = p;
      return function () {
        var B = p;
        p = N;
        try {
          return T.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(lb);
ub.exports = lb;
var iP = ub.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aP = F,
  _t = iP;

function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sb = new Set(),
  ro = {};

function Kn(e, t) {
  Ei(e, t), Ei(e + "Capture", t);
}

function Ei(e, t) {
  for (ro[e] = t, e = 0; e < t.length; e++) sb.add(t[e]);
}
var Ar = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Rf = Object.prototype.hasOwnProperty,
  oP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ty = {},
  ry = {};

function uP(e) {
  return Rf.call(ry, e)
    ? !0
    : Rf.call(ty, e)
      ? !1
      : oP.test(e)
        ? (ry[e] = !0)
        : ((ty[e] = !0), !1);
}

function lP(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}

function sP(e, t, r, n) {
  if (t === null || typeof t > "u" || lP(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
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

function lt(e, t, r, n, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var Ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ye[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ye[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ye[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ye[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ye[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ye[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ye[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ye[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nh = /[\-:]([a-z])/g;

function ih(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nh, ih);
    Ye[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nh, ih);
    Ye[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nh, ih);
  Ye[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ye[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ye.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ye[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});

function ah(e, t, r, n) {
  var i = Ye.hasOwnProperty(t) ? Ye[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sP(t, r, i, n) && (r = null),
    n || i === null
      ? uP(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Nr = aP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bu = Symbol.for("react.element"),
  ri = Symbol.for("react.portal"),
  ni = Symbol.for("react.fragment"),
  oh = Symbol.for("react.strict_mode"),
  Bf = Symbol.for("react.profiler"),
  cb = Symbol.for("react.provider"),
  fb = Symbol.for("react.context"),
  uh = Symbol.for("react.forward_ref"),
  zf = Symbol.for("react.suspense"),
  Ff = Symbol.for("react.suspense_list"),
  lh = Symbol.for("react.memo"),
  Fr = Symbol.for("react.lazy"),
  pb = Symbol.for("react.offscreen"),
  ny = Symbol.iterator;

function ba(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ny && e[ny]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ae = Object.assign,
  Rc;

function La(e) {
  if (Rc === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Rc = (t && t[1]) || "";
    }
  return (
    `
` +
    Rc +
    e
  );
}
var Bc = !1;

function zc(e, t) {
  if (!e || Bc) return "";
  Bc = !0;
  var r = Error.prepareStackTrace;
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
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          a = n.stack.split(`
`),
          o = i.length - 1,
          u = a.length - 1;
        1 <= o && 0 <= u && i[o] !== a[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (i[o] !== a[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || i[o] !== a[u])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Bc = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? La(e) : "";
}

function cP(e) {
  switch (e.tag) {
    case 5:
      return La(e.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zc(e.type, !1)), e;
    case 11:
      return (e = zc(e.type.render, !1)), e;
    case 1:
      return (e = zc(e.type, !0)), e;
    default:
      return "";
  }
}

function Uf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ni:
      return "Fragment";
    case ri:
      return "Portal";
    case Bf:
      return "Profiler";
    case oh:
      return "StrictMode";
    case zf:
      return "Suspense";
    case Ff:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fb:
        return (e.displayName || "Context") + ".Consumer";
      case cb:
        return (e._context.displayName || "Context") + ".Provider";
      case uh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lh:
        return (
          (t = e.displayName || null), t !== null ? t : Uf(e.type) || "Memo"
        );
      case Fr:
        (t = e._payload), (e = e._init);
        try {
          return Uf(e(t));
        } catch {}
    }
  return null;
}

function fP(e) {
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
      return Uf(t);
    case 8:
      return t === oh ? "StrictMode" : "Mode";
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

function un(e) {
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

function db(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}

function pP(e) {
  var t = db(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (n = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: r.enumerable,
      }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}

function wu(e) {
  e._valueTracker || (e._valueTracker = pP(e));
}

function hb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = db(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}

function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}

function Wf(e, t) {
  var r = t.checked;
  return Ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}

function iy(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = un(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}

function vb(e, t) {
  (t = t.checked), t != null && ah(e, "checked", t, !1);
}

function Hf(e, t) {
  vb(e, t);
  var r = un(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vf(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Vf(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}

function ay(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}

function Vf(e, t, r) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ra = Array.isArray;

function mi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + un(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}

function Kf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}

function oy(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (Ra(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = {
    initialValue: un(r),
  };
}

function yb(e, t) {
  var r = un(t.value),
    n = un(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}

function uy(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}

function mb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function Gf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var xu,
  gb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xu = xu || document.createElement("div"),
          xu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xu.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });

function no(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ua = {
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
  dP = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ua).forEach(function (e) {
  dP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ua[t] = Ua[e]);
  });
});

function bb(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Ua.hasOwnProperty(e) && Ua[e])
      ? ("" + t).trim()
      : t + "px";
}

function wb(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = bb(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var hP = Ae(
  {
    menuitem: !0,
  },
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

function qf(e, t) {
  if (t) {
    if (hP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}

function Xf(e, t) {
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
var Yf = null;

function sh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qf = null,
  gi = null,
  bi = null;

function ly(e) {
  if ((e = ou(e))) {
    if (typeof Qf != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = Is(t)), Qf(e.stateNode, e.type, t));
  }
}

function xb(e) {
  gi ? (bi ? bi.push(e) : (bi = [e])) : (gi = e);
}

function Sb() {
  if (gi) {
    var e = gi,
      t = bi;
    if (((bi = gi = null), ly(e), t)) for (e = 0; e < t.length; e++) ly(t[e]);
  }
}

function Ob(e, t) {
  return e(t);
}

function _b() {}
var Fc = !1;

function Pb(e, t, r) {
  if (Fc) return e(t, r);
  Fc = !0;
  try {
    return Ob(e, t, r);
  } finally {
    (Fc = !1), (gi !== null || bi !== null) && (_b(), Sb());
  }
}

function io(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Is(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var Zf = !1;
if (Ar)
  try {
    var wa = {};
    Object.defineProperty(wa, "passive", {
      get: function () {
        Zf = !0;
      },
    }),
      window.addEventListener("test", wa, wa),
      window.removeEventListener("test", wa, wa);
  } catch {
    Zf = !1;
  }

function vP(e, t, r, n, i, a, o, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (f) {
    this.onError(f);
  }
}
var Wa = !1,
  ll = null,
  sl = !1,
  Jf = null,
  yP = {
    onError: function (e) {
      (Wa = !0), (ll = e);
    },
  };

function mP(e, t, r, n, i, a, o, u, l) {
  (Wa = !1), (ll = null), vP.apply(yP, arguments);
}

function gP(e, t, r, n, i, a, o, u, l) {
  if ((mP.apply(this, arguments), Wa)) {
    if (Wa) {
      var s = ll;
      (Wa = !1), (ll = null);
    } else throw Error(z(198));
    sl || ((sl = !0), (Jf = s));
  }
}

function Gn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}

function Ab(e) {
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

function sy(e) {
  if (Gn(e) !== e) throw Error(z(188));
}

function bP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gn(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return sy(i), e;
        if (a === n) return sy(i), t;
        a = a.sibling;
      }
      throw Error(z(188));
    }
    if (r.return !== n.return) (r = i), (n = a);
    else {
      for (var o = !1, u = i.child; u; ) {
        if (u === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        if (u === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = a.child; u; ) {
          if (u === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          if (u === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(z(189));
      }
    }
    if (r.alternate !== n) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}

function Eb(e) {
  return (e = bP(e)), e !== null ? $b(e) : null;
}

function $b(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $b(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tb = _t.unstable_scheduleCallback,
  cy = _t.unstable_cancelCallback,
  wP = _t.unstable_shouldYield,
  xP = _t.unstable_requestPaint,
  Ce = _t.unstable_now,
  SP = _t.unstable_getCurrentPriorityLevel,
  ch = _t.unstable_ImmediatePriority,
  jb = _t.unstable_UserBlockingPriority,
  cl = _t.unstable_NormalPriority,
  OP = _t.unstable_LowPriority,
  Cb = _t.unstable_IdlePriority,
  Cs = null,
  sr = null;

function _P(e) {
  if (sr && typeof sr.onCommitFiberRoot == "function")
    try {
      sr.onCommitFiberRoot(Cs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : EP,
  PP = Math.log,
  AP = Math.LN2;

function EP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((PP(e) / AP) | 0)) | 0;
}
var Su = 64,
  Ou = 4194304;

function Ba(e) {
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

function fl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var u = o & ~i;
    u !== 0 ? (n = Ba(u)) : ((a &= o), a !== 0 && (n = Ba(a)));
  } else (o = r & ~i), o !== 0 ? (n = Ba(o)) : a !== 0 && (n = Ba(a));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Zt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}

function $P(e, t) {
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

function TP(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Zt(a),
      u = 1 << o,
      l = i[o];
    l === -1
      ? (!(u & r) || u & n) && (i[o] = $P(u, t))
      : l <= t && (e.expiredLanes |= u),
      (a &= ~u);
  }
}

function ep(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}

function kb() {
  var e = Su;
  return (Su <<= 1), !(Su & 4194240) && (Su = 64), e;
}

function Uc(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}

function iu(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Zt(t)),
    (e[t] = r);
}

function jP(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - Zt(r),
      a = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a);
  }
}

function fh(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Zt(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var se = 0;

function Mb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nb,
  ph,
  Ib,
  Db,
  Lb,
  tp = !1,
  _u = [],
  Yr = null,
  Qr = null,
  Zr = null,
  ao = new Map(),
  oo = new Map(),
  Hr = [],
  CP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );

function fy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yr = null;
      break;
    case "dragenter":
    case "dragleave":
      Qr = null;
      break;
    case "mouseover":
    case "mouseout":
      Zr = null;
      break;
    case "pointerover":
    case "pointerout":
      ao.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oo.delete(t.pointerId);
  }
}

function xa(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = ou(t)), t !== null && ph(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}

function kP(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (Yr = xa(Yr, e, t, r, n, i)), !0;
    case "dragenter":
      return (Qr = xa(Qr, e, t, r, n, i)), !0;
    case "mouseover":
      return (Zr = xa(Zr, e, t, r, n, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return ao.set(a, xa(ao.get(a) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), oo.set(a, xa(oo.get(a) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}

function Rb(e) {
  var t = Pn(e.target);
  if (t !== null) {
    var r = Gn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Ab(r)), t !== null)) {
          (e.blockedOn = t),
            Lb(e.priority, function () {
              Ib(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}

function Qu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = rp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Yf = n), r.target.dispatchEvent(n), (Yf = null);
    } else return (t = ou(r)), t !== null && ph(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}

function py(e, t, r) {
  Qu(e) && r.delete(t);
}

function MP() {
  (tp = !1),
    Yr !== null && Qu(Yr) && (Yr = null),
    Qr !== null && Qu(Qr) && (Qr = null),
    Zr !== null && Qu(Zr) && (Zr = null),
    ao.forEach(py),
    oo.forEach(py);
}

function Sa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tp ||
      ((tp = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, MP)));
}

function uo(e) {
  function t(i) {
    return Sa(i, e);
  }
  if (0 < _u.length) {
    Sa(_u[0], e);
    for (var r = 1; r < _u.length; r++) {
      var n = _u[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Yr !== null && Sa(Yr, e),
      Qr !== null && Sa(Qr, e),
      Zr !== null && Sa(Zr, e),
      ao.forEach(t),
      oo.forEach(t),
      r = 0;
    r < Hr.length;
    r++
  )
    (n = Hr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Hr.length && ((r = Hr[0]), r.blockedOn === null); )
    Rb(r), r.blockedOn === null && Hr.shift();
}
var wi = Nr.ReactCurrentBatchConfig,
  pl = !0;

function NP(e, t, r, n) {
  var i = se,
    a = wi.transition;
  wi.transition = null;
  try {
    (se = 1), dh(e, t, r, n);
  } finally {
    (se = i), (wi.transition = a);
  }
}

function IP(e, t, r, n) {
  var i = se,
    a = wi.transition;
  wi.transition = null;
  try {
    (se = 4), dh(e, t, r, n);
  } finally {
    (se = i), (wi.transition = a);
  }
}

function dh(e, t, r, n) {
  if (pl) {
    var i = rp(e, t, r, n);
    if (i === null) Zc(e, t, n, dl, r), fy(e, n);
    else if (kP(i, e, t, r, n)) n.stopPropagation();
    else if ((fy(e, n), t & 4 && -1 < CP.indexOf(e))) {
      for (; i !== null; ) {
        var a = ou(i);
        if (
          (a !== null && Nb(a),
          (a = rp(e, t, r, n)),
          a === null && Zc(e, t, n, dl, r),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else Zc(e, t, n, null, r);
  }
}
var dl = null;

function rp(e, t, r, n) {
  if (((dl = null), (e = sh(n)), (e = Pn(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Ab(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (dl = e), null;
}

function Bb(e) {
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
      switch (SP()) {
        case ch:
          return 1;
        case jb:
          return 4;
        case cl:
        case OP:
          return 16;
        case Cb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null,
  hh = null,
  Zu = null;

function zb() {
  if (Zu) return Zu;
  var e,
    t = hh,
    r = t.length,
    n,
    i = "value" in Kr ? Kr.value : Kr.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
  return (Zu = i.slice(e, 1 < n ? 1 - n : void 0));
}

function Ju(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}

function Pu() {
  return !0;
}

function dy() {
  return !1;
}

function Et(e) {
  function t(r, n, i, a, o) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(a) : a[u]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Pu
        : dy),
      (this.isPropagationStopped = dy),
      this
    );
  }
  return (
    Ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Pu));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Pu));
      },
      persist: function () {},
      isPersistent: Pu,
    }),
    t
  );
}
var na = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vh = Et(na),
  au = Ae({}, na, {
    view: 0,
    detail: 0,
  }),
  DP = Et(au),
  Wc,
  Hc,
  Oa,
  ks = Ae({}, au, {
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
    getModifierState: yh,
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
        : (e !== Oa &&
            (Oa && e.type === "mousemove"
              ? ((Wc = e.screenX - Oa.screenX), (Hc = e.screenY - Oa.screenY))
              : (Hc = Wc = 0),
            (Oa = e)),
          Wc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hc;
    },
  }),
  hy = Et(ks),
  LP = Ae({}, ks, {
    dataTransfer: 0,
  }),
  RP = Et(LP),
  BP = Ae({}, au, {
    relatedTarget: 0,
  }),
  Vc = Et(BP),
  zP = Ae({}, na, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  FP = Et(zP),
  UP = Ae({}, na, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  WP = Et(UP),
  HP = Ae({}, na, {
    data: 0,
  }),
  vy = Et(HP),
  VP = {
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
  KP = {
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
  GP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };

function qP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = GP[e]) ? !!t[e] : !1;
}

function yh() {
  return qP;
}
var XP = Ae({}, au, {
    key: function (e) {
      if (e.key) {
        var t = VP[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ju(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? KP[e.keyCode] || "Unidentified"
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
    getModifierState: yh,
    charCode: function (e) {
      return e.type === "keypress" ? Ju(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ju(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  YP = Et(XP),
  QP = Ae({}, ks, {
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
  yy = Et(QP),
  ZP = Ae({}, au, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yh,
  }),
  JP = Et(ZP),
  eA = Ae({}, na, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  tA = Et(eA),
  rA = Ae({}, ks, {
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
  nA = Et(rA),
  iA = [9, 13, 27, 32],
  mh = Ar && "CompositionEvent" in window,
  Ha = null;
Ar && "documentMode" in document && (Ha = document.documentMode);
var aA = Ar && "TextEvent" in window && !Ha,
  Fb = Ar && (!mh || (Ha && 8 < Ha && 11 >= Ha)),
  my = " ",
  gy = !1;

function Ub(e, t) {
  switch (e) {
    case "keyup":
      return iA.indexOf(t.keyCode) !== -1;
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

function Wb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ii = !1;

function oA(e, t) {
  switch (e) {
    case "compositionend":
      return Wb(t);
    case "keypress":
      return t.which !== 32 ? null : ((gy = !0), my);
    case "textInput":
      return (e = t.data), e === my && gy ? null : e;
    default:
      return null;
  }
}

function uA(e, t) {
  if (ii)
    return e === "compositionend" || (!mh && Ub(e, t))
      ? ((e = zb()), (Zu = hh = Kr = null), (ii = !1), e)
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
      return Fb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lA = {
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

function by(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lA[e.type] : t === "textarea";
}

function Hb(e, t, r, n) {
  xb(n),
    (t = hl(t, "onChange")),
    0 < t.length &&
      ((r = new vh("onChange", "change", null, r, n)),
      e.push({
        event: r,
        listeners: t,
      }));
}
var Va = null,
  lo = null;

function sA(e) {
  tw(e, 0);
}

function Ms(e) {
  var t = ui(e);
  if (hb(t)) return e;
}

function cA(e, t) {
  if (e === "change") return t;
}
var Vb = !1;
if (Ar) {
  var Kc;
  if (Ar) {
    var Gc = "oninput" in document;
    if (!Gc) {
      var wy = document.createElement("div");
      wy.setAttribute("oninput", "return;"),
        (Gc = typeof wy.oninput == "function");
    }
    Kc = Gc;
  } else Kc = !1;
  Vb = Kc && (!document.documentMode || 9 < document.documentMode);
}

function xy() {
  Va && (Va.detachEvent("onpropertychange", Kb), (lo = Va = null));
}

function Kb(e) {
  if (e.propertyName === "value" && Ms(lo)) {
    var t = [];
    Hb(t, lo, e, sh(e)), Pb(sA, t);
  }
}

function fA(e, t, r) {
  e === "focusin"
    ? (xy(), (Va = t), (lo = r), Va.attachEvent("onpropertychange", Kb))
    : e === "focusout" && xy();
}

function pA(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ms(lo);
}

function dA(e, t) {
  if (e === "click") return Ms(t);
}

function hA(e, t) {
  if (e === "input" || e === "change") return Ms(t);
}

function vA(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tr = typeof Object.is == "function" ? Object.is : vA;

function so(e, t) {
  if (tr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Rf.call(t, i) || !tr(e[i], t[i])) return !1;
  }
  return !0;
}

function Sy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}

function Oy(e, t) {
  var r = Sy(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return {
          node: r,
          offset: t - e,
        };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Sy(r);
  }
}

function Gb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gb(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}

function qb() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}

function gh(e) {
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

function yA(e) {
  var t = qb(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Gb(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && gh(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        (n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = Oy(r, a));
        var o = Oy(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mA = Ar && "documentMode" in document && 11 >= document.documentMode,
  ai = null,
  np = null,
  Ka = null,
  ip = !1;

function _y(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ip ||
    ai == null ||
    ai !== ul(n) ||
    ((n = ai),
    "selectionStart" in n && gh(n)
      ? (n = {
          start: n.selectionStart,
          end: n.selectionEnd,
        })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Ka && so(Ka, n)) ||
      ((Ka = n),
      (n = hl(np, "onSelect")),
      0 < n.length &&
        ((t = new vh("onSelect", "select", null, t, r)),
        e.push({
          event: t,
          listeners: n,
        }),
        (t.target = ai))));
}

function Au(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var oi = {
    animationend: Au("Animation", "AnimationEnd"),
    animationiteration: Au("Animation", "AnimationIteration"),
    animationstart: Au("Animation", "AnimationStart"),
    transitionend: Au("Transition", "TransitionEnd"),
  },
  qc = {},
  Xb = {};
Ar &&
  ((Xb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete oi.animationend.animation,
    delete oi.animationiteration.animation,
    delete oi.animationstart.animation),
  "TransitionEvent" in window || delete oi.transitionend.transition);

function Ns(e) {
  if (qc[e]) return qc[e];
  if (!oi[e]) return e;
  var t = oi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Xb) return (qc[e] = t[r]);
  return e;
}
var Yb = Ns("animationend"),
  Qb = Ns("animationiteration"),
  Zb = Ns("animationstart"),
  Jb = Ns("transitionend"),
  ew = new Map(),
  Py =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );

function sn(e, t) {
  ew.set(e, t), Kn(t, [e]);
}
for (var Xc = 0; Xc < Py.length; Xc++) {
  var Yc = Py[Xc],
    gA = Yc.toLowerCase(),
    bA = Yc[0].toUpperCase() + Yc.slice(1);
  sn(gA, "on" + bA);
}
sn(Yb, "onAnimationEnd");
sn(Qb, "onAnimationIteration");
sn(Zb, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(Jb, "onTransitionEnd");
Ei("onMouseEnter", ["mouseout", "mouseover"]);
Ei("onMouseLeave", ["mouseout", "mouseover"]);
Ei("onPointerEnter", ["pointerout", "pointerover"]);
Ei("onPointerLeave", ["pointerout", "pointerover"]);
Kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var za =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  wA = new Set("cancel close invalid load scroll toggle".split(" ").concat(za));

function Ay(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), gP(n, t, void 0, e), (e.currentTarget = null);
}

function tw(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var u = n[o],
            l = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), l !== a && i.isPropagationStopped())) break e;
          Ay(i, u, s), (a = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((u = n[o]),
            (l = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            l !== a && i.isPropagationStopped())
          )
            break e;
          Ay(i, u, s), (a = l);
        }
    }
  }
  if (sl) throw ((e = Jf), (sl = !1), (Jf = null), e);
}

function ye(e, t) {
  var r = t[sp];
  r === void 0 && (r = t[sp] = new Set());
  var n = e + "__bubble";
  r.has(n) || (rw(t, e, 2, !1), r.add(n));
}

function Qc(e, t, r) {
  var n = 0;
  t && (n |= 4), rw(r, e, n, t);
}
var Eu = "_reactListening" + Math.random().toString(36).slice(2);

function co(e) {
  if (!e[Eu]) {
    (e[Eu] = !0),
      sb.forEach(function (r) {
        r !== "selectionchange" && (wA.has(r) || Qc(r, !1, e), Qc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eu] || ((t[Eu] = !0), Qc("selectionchange", !1, t));
  }
}

function rw(e, t, r, n) {
  switch (Bb(t)) {
    case 1:
      var i = NP;
      break;
    case 4:
      i = IP;
      break;
    default:
      i = dh;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Zf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, {
            capture: !0,
            passive: i,
          })
        : e.addEventListener(t, r, !0)
      : i !== void 0
        ? e.addEventListener(t, r, {
            passive: i,
          })
        : e.addEventListener(t, r, !1);
}

function Zc(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var u = n.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Pn(u)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = a = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      n = n.return;
    }
  Pb(function () {
    var s = a,
      f = sh(r),
      c = [];
    e: {
      var p = ew.get(e);
      if (p !== void 0) {
        var d = vh,
          y = e;
        switch (e) {
          case "keypress":
            if (Ju(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = YP;
            break;
          case "focusin":
            (y = "focus"), (d = Vc);
            break;
          case "focusout":
            (y = "blur"), (d = Vc);
            break;
          case "beforeblur":
          case "afterblur":
            d = Vc;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = hy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = RP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = JP;
            break;
          case Yb:
          case Qb:
          case Zb:
            d = FP;
            break;
          case Jb:
            d = tA;
            break;
          case "scroll":
            d = DP;
            break;
          case "wheel":
            d = nA;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = WP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = yy;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          v = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var h = s, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              v !== null && ((S = io(h, v)), S != null && g.push(fo(h, S, m)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((p = new d(p, y, null, r, f)),
          c.push({
            event: p,
            listeners: g,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          p &&
            r !== Yf &&
            (y = r.relatedTarget || r.fromElement) &&
            (Pn(y) || y[Er]))
        )
          break e;
        if (
          (d || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          d
            ? ((y = r.relatedTarget || r.toElement),
              (d = s),
              (y = y ? Pn(y) : null),
              y !== null &&
                ((w = Gn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((d = null), (y = s)),
          d !== y)
        ) {
          if (
            ((g = hy),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = yy),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (h = "pointer")),
            (w = d == null ? p : ui(d)),
            (m = y == null ? p : ui(y)),
            (p = new g(S, h + "leave", d, r, f)),
            (p.target = w),
            (p.relatedTarget = m),
            (S = null),
            Pn(f) === s &&
              ((g = new g(v, h + "enter", y, r, f)),
              (g.target = m),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            d && y)
          )
            t: {
              for (g = d, v = y, h = 0, m = g; m; m = Zn(m)) h++;
              for (m = 0, S = v; S; S = Zn(S)) m++;
              for (; 0 < h - m; ) (g = Zn(g)), h--;
              for (; 0 < m - h; ) (v = Zn(v)), m--;
              for (; h--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = Zn(g)), (v = Zn(v));
              }
              g = null;
            }
          else g = null;
          d !== null && Ey(c, p, d, g, !1),
            y !== null && w !== null && Ey(c, w, y, g, !0);
        }
      }
      e: {
        if (
          ((p = s ? ui(s) : window),
          (d = p.nodeName && p.nodeName.toLowerCase()),
          d === "select" || (d === "input" && p.type === "file"))
        )
          var b = cA;
        else if (by(p))
          if (Vb) b = hA;
          else {
            b = pA;
            var x = fA;
          }
        else
          (d = p.nodeName) &&
            d.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (b = dA);
        if (b && (b = b(e, s))) {
          Hb(c, b, r, f);
          break e;
        }
        x && x(e, p, s),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            Vf(p, "number", p.value);
      }
      switch (((x = s ? ui(s) : window), e)) {
        case "focusin":
          (by(x) || x.contentEditable === "true") &&
            ((ai = x), (np = s), (Ka = null));
          break;
        case "focusout":
          Ka = np = ai = null;
          break;
        case "mousedown":
          ip = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ip = !1), _y(c, r, f);
          break;
        case "selectionchange":
          if (mA) break;
        case "keydown":
        case "keyup":
          _y(c, r, f);
      }
      var O;
      if (mh)
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
        ii
          ? Ub(e, r) && (_ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Fb &&
          r.locale !== "ko" &&
          (ii || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && ii && (O = zb())
            : ((Kr = f),
              (hh = "value" in Kr ? Kr.value : Kr.textContent),
              (ii = !0))),
        (x = hl(s, _)),
        0 < x.length &&
          ((_ = new vy(_, e, null, r, f)),
          c.push({
            event: _,
            listeners: x,
          }),
          O ? (_.data = O) : ((O = Wb(r)), O !== null && (_.data = O)))),
        (O = aA ? oA(e, r) : uA(e, r)) &&
          ((s = hl(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new vy("onBeforeInput", "beforeinput", null, r, f)),
            c.push({
              event: f,
              listeners: s,
            }),
            (f.data = O)));
    }
    tw(c, t);
  });
}

function fo(e, t, r) {
  return {
    instance: e,
    listener: t,
    currentTarget: r,
  };
}

function hl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = io(e, r)),
      a != null && n.unshift(fo(e, a, i)),
      (a = io(e, t)),
      a != null && n.push(fo(e, a, i))),
      (e = e.return);
  }
  return n;
}

function Zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}

function Ey(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var u = r,
      l = u.alternate,
      s = u.stateNode;
    if (l !== null && l === n) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      i
        ? ((l = io(r, a)), l != null && o.unshift(fo(r, l, u)))
        : i || ((l = io(r, a)), l != null && o.push(fo(r, l, u)))),
      (r = r.return);
  }
  o.length !== 0 &&
    e.push({
      event: t,
      listeners: o,
    });
}
var xA = /\r\n?/g,
  SA = /\u0000|\uFFFD/g;

function $y(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xA,
      `
`,
    )
    .replace(SA, "");
}

function $u(e, t, r) {
  if (((t = $y(t)), $y(e) !== t && r)) throw Error(z(425));
}

function vl() {}
var ap = null,
  op = null;

function up(e, t) {
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
var lp = typeof setTimeout == "function" ? setTimeout : void 0,
  OA = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ty = typeof Promise == "function" ? Promise : void 0,
  _A =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ty < "u"
        ? function (e) {
            return Ty.resolve(null).then(e).catch(PA);
          }
        : lp;

function PA(e) {
  setTimeout(function () {
    throw e;
  });
}

function Jc(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), uo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  uo(t);
}

function Jr(e) {
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

function jy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ia = Math.random().toString(36).slice(2),
  or = "__reactFiber$" + ia,
  po = "__reactProps$" + ia,
  Er = "__reactContainer$" + ia,
  sp = "__reactEvents$" + ia,
  AA = "__reactListeners$" + ia,
  EA = "__reactHandles$" + ia;

function Pn(e) {
  var t = e[or];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Er] || r[or])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = jy(e); e !== null; ) {
          if ((r = e[or])) return r;
          e = jy(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}

function ou(e) {
  return (
    (e = e[or] || e[Er]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}

function ui(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}

function Is(e) {
  return e[po] || null;
}
var cp = [],
  li = -1;

function cn(e) {
  return {
    current: e,
  };
}

function be(e) {
  0 > li || ((e.current = cp[li]), (cp[li] = null), li--);
}

function he(e, t) {
  li++, (cp[li] = e.current), (e.current = t);
}
var ln = {},
  rt = cn(ln),
  ht = cn(!1),
  Rn = ln;

function $i(e, t) {
  var r = e.type.contextTypes;
  if (!r) return ln;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}

function vt(e) {
  return (e = e.childContextTypes), e != null;
}

function yl() {
  be(ht), be(rt);
}

function Cy(e, t, r) {
  if (rt.current !== ln) throw Error(z(168));
  he(rt, t), he(ht, r);
}

function nw(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(z(108, fP(e) || "Unknown", i));
  return Ae({}, r, n);
}

function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (Rn = rt.current),
    he(rt, e),
    he(ht, ht.current),
    !0
  );
}

function ky(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(z(169));
  r
    ? ((e = nw(e, t, Rn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      be(ht),
      be(rt),
      he(rt, e))
    : be(ht),
    he(ht, r);
}
var mr = null,
  Ds = !1,
  ef = !1;

function iw(e) {
  mr === null ? (mr = [e]) : mr.push(e);
}

function $A(e) {
  (Ds = !0), iw(e);
}

function fn() {
  if (!ef && mr !== null) {
    ef = !0;
    var e = 0,
      t = se;
    try {
      var r = mr;
      for (se = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (mr = null), (Ds = !1);
    } catch (i) {
      throw (mr !== null && (mr = mr.slice(e + 1)), Tb(ch, fn), i);
    } finally {
      (se = t), (ef = !1);
    }
  }
  return null;
}
var si = [],
  ci = 0,
  gl = null,
  bl = 0,
  kt = [],
  Mt = 0,
  Bn = null,
  gr = 1,
  br = "";

function wn(e, t) {
  (si[ci++] = bl), (si[ci++] = gl), (gl = e), (bl = t);
}

function aw(e, t, r) {
  (kt[Mt++] = gr), (kt[Mt++] = br), (kt[Mt++] = Bn), (Bn = e);
  var n = gr;
  e = br;
  var i = 32 - Zt(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var a = 32 - Zt(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (gr = (1 << (32 - Zt(t) + i)) | (r << i) | n),
      (br = a + e);
  } else (gr = (1 << a) | (r << i) | n), (br = e);
}

function bh(e) {
  e.return !== null && (wn(e, 1), aw(e, 1, 0));
}

function wh(e) {
  for (; e === gl; )
    (gl = si[--ci]), (si[ci] = null), (bl = si[--ci]), (si[ci] = null);
  for (; e === Bn; )
    (Bn = kt[--Mt]),
      (kt[Mt] = null),
      (br = kt[--Mt]),
      (kt[Mt] = null),
      (gr = kt[--Mt]),
      (kt[Mt] = null);
}
var Ot = null,
  St = null,
  xe = !1,
  Xt = null;

function ow(e, t) {
  var r = It(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}

function My(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (St = Jr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (St = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r =
              Bn !== null
                ? {
                    id: gr,
                    overflow: br,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = It(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ot = e),
            (St = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}

function fp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}

function pp(e) {
  if (xe) {
    var t = St;
    if (t) {
      var r = t;
      if (!My(e, t)) {
        if (fp(e)) throw Error(z(418));
        t = Jr(r.nextSibling);
        var n = Ot;
        t && My(e, t)
          ? ow(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (Ot = e));
      }
    } else {
      if (fp(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (Ot = e);
    }
  }
}

function Ny(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}

function Tu(e) {
  if (e !== Ot) return !1;
  if (!xe) return Ny(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !up(e.type, e.memoizedProps))),
    t && (t = St))
  ) {
    if (fp(e)) throw (uw(), Error(z(418)));
    for (; t; ) ow(e, t), (t = Jr(t.nextSibling));
  }
  if ((Ny(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              St = Jr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else St = Ot ? Jr(e.stateNode.nextSibling) : null;
  return !0;
}

function uw() {
  for (var e = St; e; ) e = Jr(e.nextSibling);
}

function Ti() {
  (St = Ot = null), (xe = !1);
}

function xh(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
var TA = Nr.ReactCurrentBatchConfig;

function _a(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(z(147, e));
      var i = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var u = i.refs;
            o === null ? delete u[a] : (u[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}

function ju(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}

function Iy(e) {
  var t = e._init;
  return t(e._payload);
}

function lw(e) {
  function t(v, h) {
    if (e) {
      var m = v.deletions;
      m === null ? ((v.deletions = [h]), (v.flags |= 16)) : m.push(h);
    }
  }

  function r(v, h) {
    if (!e) return null;
    for (; h !== null; ) t(v, h), (h = h.sibling);
    return null;
  }

  function n(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
    return v;
  }

  function i(v, h) {
    return (v = nn(v, h)), (v.index = 0), (v.sibling = null), v;
  }

  function a(v, h, m) {
    return (
      (v.index = m),
      e
        ? ((m = v.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((v.flags |= 2), h) : m)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    );
  }

  function o(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }

  function u(v, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = lf(m, v.mode, S)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h);
  }

  function l(v, h, m, S) {
    var b = m.type;
    return b === ni
      ? f(v, h, m.props.children, S, m.key)
      : h !== null &&
          (h.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Fr &&
              Iy(b) === h.type))
        ? ((S = i(h, m.props)), (S.ref = _a(v, h, m)), (S.return = v), S)
        : ((S = ol(m.type, m.key, m.props, null, v.mode, S)),
          (S.ref = _a(v, h, m)),
          (S.return = v),
          S);
  }

  function s(v, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = sf(m, v.mode, S)), (h.return = v), h)
      : ((h = i(h, m.children || [])), (h.return = v), h);
  }

  function f(v, h, m, S, b) {
    return h === null || h.tag !== 7
      ? ((h = Nn(m, v.mode, S, b)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h);
  }

  function c(v, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = lf("" + h, v.mode, m)), (h.return = v), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case bu:
          return (
            (m = ol(h.type, h.key, h.props, null, v.mode, m)),
            (m.ref = _a(v, null, h)),
            (m.return = v),
            m
          );
        case ri:
          return (h = sf(h, v.mode, m)), (h.return = v), h;
        case Fr:
          var S = h._init;
          return c(v, S(h._payload), m);
      }
      if (Ra(h) || ba(h))
        return (h = Nn(h, v.mode, m, null)), (h.return = v), h;
      ju(v, h);
    }
    return null;
  }

  function p(v, h, m, S) {
    var b = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return b !== null ? null : u(v, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case bu:
          return m.key === b ? l(v, h, m, S) : null;
        case ri:
          return m.key === b ? s(v, h, m, S) : null;
        case Fr:
          return (b = m._init), p(v, h, b(m._payload), S);
      }
      if (Ra(m) || ba(m)) return b !== null ? null : f(v, h, m, S, null);
      ju(v, m);
    }
    return null;
  }

  function d(v, h, m, S, b) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(m) || null), u(h, v, "" + S, b);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case bu:
          return (v = v.get(S.key === null ? m : S.key) || null), l(h, v, S, b);
        case ri:
          return (v = v.get(S.key === null ? m : S.key) || null), s(h, v, S, b);
        case Fr:
          var x = S._init;
          return d(v, h, m, x(S._payload), b);
      }
      if (Ra(S) || ba(S)) return (v = v.get(m) || null), f(h, v, S, b, null);
      ju(h, S);
    }
    return null;
  }

  function y(v, h, m, S) {
    for (
      var b = null, x = null, O = h, _ = (h = 0), P = null;
      O !== null && _ < m.length;
      _++
    ) {
      O.index > _ ? ((P = O), (O = null)) : (P = O.sibling);
      var $ = p(v, O, m[_], S);
      if ($ === null) {
        O === null && (O = P);
        break;
      }
      e && O && $.alternate === null && t(v, O),
        (h = a($, h, _)),
        x === null ? (b = $) : (x.sibling = $),
        (x = $),
        (O = P);
    }
    if (_ === m.length) return r(v, O), xe && wn(v, _), b;
    if (O === null) {
      for (; _ < m.length; _++)
        (O = c(v, m[_], S)),
          O !== null &&
            ((h = a(O, h, _)), x === null ? (b = O) : (x.sibling = O), (x = O));
      return xe && wn(v, _), b;
    }
    for (O = n(v, O); _ < m.length; _++)
      (P = d(O, v, _, m[_], S)),
        P !== null &&
          (e && P.alternate !== null && O.delete(P.key === null ? _ : P.key),
          (h = a(P, h, _)),
          x === null ? (b = P) : (x.sibling = P),
          (x = P));
    return (
      e &&
        O.forEach(function (E) {
          return t(v, E);
        }),
      xe && wn(v, _),
      b
    );
  }

  function g(v, h, m, S) {
    var b = ba(m);
    if (typeof b != "function") throw Error(z(150));
    if (((m = b.call(m)), m == null)) throw Error(z(151));
    for (
      var x = (b = null), O = h, _ = (h = 0), P = null, $ = m.next();
      O !== null && !$.done;
      _++, $ = m.next()
    ) {
      O.index > _ ? ((P = O), (O = null)) : (P = O.sibling);
      var E = p(v, O, $.value, S);
      if (E === null) {
        O === null && (O = P);
        break;
      }
      e && O && E.alternate === null && t(v, O),
        (h = a(E, h, _)),
        x === null ? (b = E) : (x.sibling = E),
        (x = E),
        (O = P);
    }
    if ($.done) return r(v, O), xe && wn(v, _), b;
    if (O === null) {
      for (; !$.done; _++, $ = m.next())
        ($ = c(v, $.value, S)),
          $ !== null &&
            ((h = a($, h, _)), x === null ? (b = $) : (x.sibling = $), (x = $));
      return xe && wn(v, _), b;
    }
    for (O = n(v, O); !$.done; _++, $ = m.next())
      ($ = d(O, v, _, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? _ : $.key),
          (h = a($, h, _)),
          x === null ? (b = $) : (x.sibling = $),
          (x = $));
    return (
      e &&
        O.forEach(function (j) {
          return t(v, j);
        }),
      xe && wn(v, _),
      b
    );
  }

  function w(v, h, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === ni &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case bu:
          e: {
            for (var b = m.key, x = h; x !== null; ) {
              if (x.key === b) {
                if (((b = m.type), b === ni)) {
                  if (x.tag === 7) {
                    r(v, x.sibling),
                      (h = i(x, m.props.children)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                } else if (
                  x.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Fr &&
                    Iy(b) === x.type)
                ) {
                  r(v, x.sibling),
                    (h = i(x, m.props)),
                    (h.ref = _a(v, x, m)),
                    (h.return = v),
                    (v = h);
                  break e;
                }
                r(v, x);
                break;
              } else t(v, x);
              x = x.sibling;
            }
            m.type === ni
              ? ((h = Nn(m.props.children, v.mode, S, m.key)),
                (h.return = v),
                (v = h))
              : ((S = ol(m.type, m.key, m.props, null, v.mode, S)),
                (S.ref = _a(v, h, m)),
                (S.return = v),
                (v = S));
          }
          return o(v);
        case ri:
          e: {
            for (x = m.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  r(v, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = v),
                    (v = h);
                  break e;
                } else {
                  r(v, h);
                  break;
                }
              else t(v, h);
              h = h.sibling;
            }
            (h = sf(m, v.mode, S)), (h.return = v), (v = h);
          }
          return o(v);
        case Fr:
          return (x = m._init), w(v, h, x(m._payload), S);
      }
      if (Ra(m)) return y(v, h, m, S);
      if (ba(m)) return g(v, h, m, S);
      ju(v, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (r(v, h.sibling), (h = i(h, m)), (h.return = v), (v = h))
          : (r(v, h), (h = lf(m, v.mode, S)), (h.return = v), (v = h)),
        o(v))
      : r(v, h);
  }
  return w;
}
var ji = lw(!0),
  sw = lw(!1),
  wl = cn(null),
  xl = null,
  fi = null,
  Sh = null;

function Oh() {
  Sh = fi = xl = null;
}

function _h(e) {
  var t = wl.current;
  be(wl), (e._currentValue = t);
}

function dp(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}

function xi(e, t) {
  (xl = e),
    (Sh = fi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pt = !0), (e.firstContext = null));
}

function Bt(e) {
  var t = e._currentValue;
  if (Sh !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      fi === null)
    ) {
      if (xl === null) throw Error(z(308));
      (fi = e),
        (xl.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else fi = fi.next = e;
  return t;
}
var An = null;

function Ph(e) {
  An === null ? (An = [e]) : An.push(e);
}

function cw(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), Ph(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    $r(e, n)
  );
}

function $r(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Ur = !1;

function Ah(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}

function fw(e, t) {
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

function Sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}

function en(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), oe & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      $r(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Ph(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    $r(e, r)
  );
}

function el(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), fh(e, r);
  }
}

function Dy(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (r = r.next);
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}

function Sl(e, t, r, n) {
  var i = e.updateQueue;
  Ur = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var l = u,
      s = l.next;
    (l.next = null), o === null ? (a = s) : (o.next = s), (o = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== o &&
        (u === null ? (f.firstBaseUpdate = s) : (u.next = s),
        (f.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var c = i.baseState;
    (o = 0), (f = s = l = null), (u = a);
    do {
      var p = u.lane,
        d = u.eventTime;
      if ((n & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: d,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
          switch (((p = t), (d = r), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                c = y.call(d, c, p);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (p = typeof y == "function" ? y.call(d, c, p) : y),
                p == null)
              )
                break e;
              c = Ae({}, c, p);
              break e;
            case 2:
              Ur = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [u]) : p.push(u));
      } else
        (d = {
          eventTime: d,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((s = f = d), (l = c)) : (f = f.next = d),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = c),
      (i.baseState = l),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Fn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}

function Ly(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(z(191, i));
        i.call(n);
      }
    }
}
var uu = {},
  cr = cn(uu),
  ho = cn(uu),
  vo = cn(uu);

function En(e) {
  if (e === uu) throw Error(z(174));
  return e;
}

function Eh(e, t) {
  switch ((he(vo, t), he(ho, e), he(cr, uu), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gf(t, e));
  }
  be(cr), he(cr, t);
}

function Ci() {
  be(cr), be(ho), be(vo);
}

function pw(e) {
  En(vo.current);
  var t = En(cr.current),
    r = Gf(t, e.type);
  t !== r && (he(ho, e), he(cr, r));
}

function $h(e) {
  ho.current === e && (be(cr), be(ho));
}
var Oe = cn(0);

function Ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
var tf = [];

function Th() {
  for (var e = 0; e < tf.length; e++)
    tf[e]._workInProgressVersionPrimary = null;
  tf.length = 0;
}
var tl = Nr.ReactCurrentDispatcher,
  rf = Nr.ReactCurrentBatchConfig,
  zn = 0,
  Pe = null,
  Re = null,
  We = null,
  _l = !1,
  Ga = !1,
  yo = 0,
  jA = 0;

function Qe() {
  throw Error(z(321));
}

function jh(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!tr(e[r], t[r])) return !1;
  return !0;
}

function Ch(e, t, r, n, i, a) {
  if (
    ((zn = a),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? NA : IA),
    (e = r(n, i)),
    Ga)
  ) {
    a = 0;
    do {
      if (((Ga = !1), (yo = 0), 25 <= a)) throw Error(z(301));
      (a += 1),
        (We = Re = null),
        (t.updateQueue = null),
        (tl.current = DA),
        (e = r(n, i));
    } while (Ga);
  }
  if (
    ((tl.current = Pl),
    (t = Re !== null && Re.next !== null),
    (zn = 0),
    (We = Re = Pe = null),
    (_l = !1),
    t)
  )
    throw Error(z(300));
  return e;
}

function kh() {
  var e = yo !== 0;
  return (yo = 0), e;
}

function ir() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return We === null ? (Pe.memoizedState = We = e) : (We = We.next = e), We;
}

function zt() {
  if (Re === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = We === null ? Pe.memoizedState : We.next;
  if (t !== null) (We = t), (Re = e);
  else {
    if (e === null) throw Error(z(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      We === null ? (Pe.memoizedState = We = e) : (We = We.next = e);
  }
  return We;
}

function mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}

function nf(e) {
  var t = zt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = Re,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (n.baseQueue = i = a), (r.pending = null);
  }
  if (i !== null) {
    (a = i.next), (n = n.baseState);
    var u = (o = null),
      l = null,
      s = a;
    do {
      var f = s.lane;
      if ((zn & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.hasEagerState ? s.eagerState : e(n, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        l === null ? ((u = l = c), (o = n)) : (l = l.next = c),
          (Pe.lanes |= f),
          (Fn |= f);
      }
      s = s.next;
    } while (s !== null && s !== a);
    l === null ? (o = n) : (l.next = u),
      tr(n, t.memoizedState) || (pt = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Pe.lanes |= a), (Fn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}

function af(e) {
  var t = zt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    tr(a, t.memoizedState) || (pt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}

function dw() {}

function hw(e, t) {
  var r = Pe,
    n = zt(),
    i = t(),
    a = !tr(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (pt = !0)),
    (n = n.queue),
    Mh(mw.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      go(9, yw.bind(null, r, n, i, t), void 0, null),
      He === null)
    )
      throw Error(z(349));
    zn & 30 || vw(r, t, i);
  }
  return i;
}

function vw(e, t, r) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: r,
    }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}

function yw(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), gw(t) && bw(e);
}

function mw(e, t, r) {
  return r(function () {
    gw(t) && bw(e);
  });
}

function gw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !tr(e, r);
  } catch {
    return !0;
  }
}

function bw(e) {
  var t = $r(e, 1);
  t !== null && Jt(t, e, 1, -1);
}

function Ry(e) {
  var t = ir();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = MA.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}

function go(e, t, r, n) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: r,
      deps: n,
      next: null,
    }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}

function ww() {
  return zt().memoizedState;
}

function rl(e, t, r, n) {
  var i = ir();
  (Pe.flags |= e),
    (i.memoizedState = go(1 | t, r, void 0, n === void 0 ? null : n));
}

function Ls(e, t, r, n) {
  var i = zt();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (Re !== null) {
    var o = Re.memoizedState;
    if (((a = o.destroy), n !== null && jh(n, o.deps))) {
      i.memoizedState = go(t, r, a, n);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = go(1 | t, r, a, n));
}

function By(e, t) {
  return rl(8390656, 8, e, t);
}

function Mh(e, t) {
  return Ls(2048, 8, e, t);
}

function xw(e, t) {
  return Ls(4, 2, e, t);
}

function Sw(e, t) {
  return Ls(4, 4, e, t);
}

function Ow(e, t) {
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

function _w(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Ls(4, 4, Ow.bind(null, t, e), r)
  );
}

function Nh() {}

function Pw(e, t) {
  var r = zt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jh(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}

function Aw(e, t) {
  var r = zt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jh(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}

function Ew(e, t, r) {
  return zn & 21
    ? (tr(r, t) || ((r = kb()), (Pe.lanes |= r), (Fn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = r));
}

function CA(e, t) {
  var r = se;
  (se = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = rf.transition;
  rf.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = r), (rf.transition = n);
  }
}

function $w() {
  return zt().memoizedState;
}

function kA(e, t, r) {
  var n = rn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Tw(e))
  )
    jw(t, r);
  else if (((r = cw(e, t, r, n)), r !== null)) {
    var i = ot();
    Jt(r, e, n, i), Cw(r, t, n);
  }
}

function MA(e, t, r) {
  var n = rn(e),
    i = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Tw(e)) jw(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = a(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = u), tr(u, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Ph(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = cw(e, t, i, n)),
      r !== null && ((i = ot()), Jt(r, e, n, i), Cw(r, t, n));
  }
}

function Tw(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}

function jw(e, t) {
  Ga = _l = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}

function Cw(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), fh(e, r);
  }
}
var Pl = {
    readContext: Bt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  NA = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (ir().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: By,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        rl(4194308, 4, Ow.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = ir();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = ir();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = kA.bind(null, Pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ir();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: Ry,
    useDebugValue: Nh,
    useDeferredValue: function (e) {
      return (ir().memoizedState = e);
    },
    useTransition: function () {
      var e = Ry(!1),
        t = e[0];
      return (e = CA.bind(null, e[1])), (ir().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Pe,
        i = ir();
      if (xe) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), He === null)) throw Error(z(349));
        zn & 30 || vw(n, t, r);
      }
      i.memoizedState = r;
      var a = {
        value: r,
        getSnapshot: t,
      };
      return (
        (i.queue = a),
        By(mw.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        go(9, yw.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = ir(),
        t = He.identifierPrefix;
      if (xe) {
        var r = br,
          n = gr;
        (r = (n & ~(1 << (32 - Zt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = yo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = jA++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  IA = {
    readContext: Bt,
    useCallback: Pw,
    useContext: Bt,
    useEffect: Mh,
    useImperativeHandle: _w,
    useInsertionEffect: xw,
    useLayoutEffect: Sw,
    useMemo: Aw,
    useReducer: nf,
    useRef: ww,
    useState: function () {
      return nf(mo);
    },
    useDebugValue: Nh,
    useDeferredValue: function (e) {
      var t = zt();
      return Ew(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = nf(mo)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: dw,
    useSyncExternalStore: hw,
    useId: $w,
    unstable_isNewReconciler: !1,
  },
  DA = {
    readContext: Bt,
    useCallback: Pw,
    useContext: Bt,
    useEffect: Mh,
    useImperativeHandle: _w,
    useInsertionEffect: xw,
    useLayoutEffect: Sw,
    useMemo: Aw,
    useReducer: af,
    useRef: ww,
    useState: function () {
      return af(mo);
    },
    useDebugValue: Nh,
    useDeferredValue: function (e) {
      var t = zt();
      return Re === null ? (t.memoizedState = e) : Ew(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = af(mo)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: dw,
    useSyncExternalStore: hw,
    useId: $w,
    unstable_isNewReconciler: !1,
  };

function Kt(e, t) {
  if (e && e.defaultProps) {
    (t = Ae({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}

function hp(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Ae({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Rs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = ot(),
      i = rn(e),
      a = Sr(n, i);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = en(e, a, i)),
      t !== null && (Jt(t, e, i, n), el(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = ot(),
      i = rn(e),
      a = Sr(n, i);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = en(e, a, i)),
      t !== null && (Jt(t, e, i, n), el(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = ot(),
      n = rn(e),
      i = Sr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = en(e, i, n)),
      t !== null && (Jt(t, e, n, r), el(t, e, n));
  },
};

function zy(e, t, r, n, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !so(r, n) || !so(i, a)
        : !0
  );
}

function kw(e, t, r) {
  var n = !1,
    i = ln,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Bt(a))
      : ((i = vt(t) ? Rn : rt.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? $i(e, i) : ln)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}

function Fy(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}

function vp(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), Ah(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Bt(a))
    : ((a = vt(t) ? Rn : rt.current), (i.context = $i(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (hp(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Rs.enqueueReplaceState(i, i.state, null),
      Sl(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}

function ki(e, t) {
  try {
    var r = "",
      n = t;
    do (r += cP(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return {
    value: e,
    source: t,
    stack: i,
    digest: null,
  };
}

function of(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r ?? null,
    digest: t ?? null,
  };
}

function yp(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var LA = typeof WeakMap == "function" ? WeakMap : Map;

function Mw(e, t, r) {
  (r = Sr(-1, r)),
    (r.tag = 3),
    (r.payload = {
      element: null,
    });
  var n = t.value;
  return (
    (r.callback = function () {
      El || ((El = !0), (Ap = n)), yp(e, t);
    }),
    r
  );
}

function Nw(e, t, r) {
  (r = Sr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        yp(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        yp(e, t),
          typeof n != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}

function Uy(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new LA();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = QA.bind(null, e, t, r)), t.then(e, e));
}

function Wy(e) {
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

function Hy(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Sr(-1, 1)), (t.tag = 2), en(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var RA = Nr.ReactCurrentOwner,
  pt = !1;

function it(e, t, r, n) {
  t.child = e === null ? sw(t, null, r, n) : ji(t, e.child, r, n);
}

function Vy(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    xi(t, i),
    (n = Ch(e, t, r, n, a, i)),
    (r = kh()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tr(e, t, i))
      : (xe && r && bh(t), (t.flags |= 1), it(e, t, n, i), t.child)
  );
}

function Ky(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !Uh(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Iw(e, t, a, n, i))
      : ((e = ol(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : so), r(o, n) && e.ref === t.ref)
    )
      return Tr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = nn(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}

function Iw(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (so(a, n) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = n = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), Tr(e, t, i);
  }
  return mp(e, t, r, n, i);
}

function Dw(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        he(di, bt),
        (bt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          he(di, bt),
          (bt |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (n = a !== null ? a.baseLanes : r),
        he(di, bt),
        (bt |= n);
    }
  else
    a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      he(di, bt),
      (bt |= n);
  return it(e, t, i, r), t.child;
}

function Lw(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}

function mp(e, t, r, n, i) {
  var a = vt(r) ? Rn : rt.current;
  return (
    (a = $i(t, a)),
    xi(t, i),
    (r = Ch(e, t, r, n, a, i)),
    (n = kh()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tr(e, t, i))
      : (xe && n && bh(t), (t.flags |= 1), it(e, t, r, i), t.child)
  );
}

function Gy(e, t, r, n, i) {
  if (vt(r)) {
    var a = !0;
    ml(t);
  } else a = !1;
  if ((xi(t, i), t.stateNode === null))
    nl(e, t), kw(t, r, n), vp(t, r, n, i), (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var l = o.context,
      s = r.contextType;
    typeof s == "object" && s !== null
      ? (s = Bt(s))
      : ((s = vt(r) ? Rn : rt.current), (s = $i(t, s)));
    var f = r.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== n || l !== s) && Fy(t, o, n, s)),
      (Ur = !1);
    var p = t.memoizedState;
    (o.state = p),
      Sl(t, n, o, i),
      (l = t.memoizedState),
      u !== n || p !== l || ht.current || Ur
        ? (typeof f == "function" && (hp(t, r, f, n), (l = t.memoizedState)),
          (u = Ur || zy(t, r, u, n, p, l, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = s),
          (n = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (o = t.stateNode),
      fw(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Kt(t.type, u)),
      (o.props = s),
      (c = t.pendingProps),
      (p = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Bt(l))
        : ((l = vt(r) ? Rn : rt.current), (l = $i(t, l)));
    var d = r.getDerivedStateFromProps;
    (f =
      typeof d == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== c || p !== l) && Fy(t, o, n, l)),
      (Ur = !1),
      (p = t.memoizedState),
      (o.state = p),
      Sl(t, n, o, i);
    var y = t.memoizedState;
    u !== c || p !== y || ht.current || Ur
      ? (typeof d == "function" && (hp(t, r, d, n), (y = t.memoizedState)),
        (s = Ur || zy(t, r, s, n, p, y, l) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (o.props = n),
        (o.state = y),
        (o.context = l),
        (n = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return gp(e, t, r, n, a, i);
}

function gp(e, t, r, n, i, a) {
  Lw(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && ky(t, r, !1), Tr(e, t, a);
  (n = t.stateNode), (RA.current = t);
  var u =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ji(t, e.child, null, a)), (t.child = ji(t, null, u, a)))
      : it(e, t, u, a),
    (t.memoizedState = n.state),
    i && ky(t, r, !0),
    t.child
  );
}

function Rw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cy(e, t.context, !1),
    Eh(e, t.containerInfo);
}

function qy(e, t, r, n, i) {
  return Ti(), xh(i), (t.flags |= 256), it(e, t, r, n), t.child;
}
var bp = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};

function wp(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}

function Bw(e, t, r) {
  var n = t.pendingProps,
    i = Oe.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    he(Oe, i & 1),
    e === null)
  )
    return (
      pp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (o = {
                mode: "hidden",
                children: o,
              }),
              !(n & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = Fs(o, n, 0, null)),
              (e = Nn(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = wp(r)),
              (t.memoizedState = bp),
              e)
            : Ih(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return BA(e, t, o, n, u, i, r);
  if (a) {
    (a = n.fallback), (o = t.mode), (i = e.child), (u = i.sibling);
    var l = {
      mode: "hidden",
      children: n.children,
    };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = nn(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (a = nn(u, a)) : ((a = Nn(a, o, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? wp(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = bp),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = nn(a, {
      mode: "visible",
      children: n.children,
    })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}

function Ih(e, t) {
  return (
    (t = Fs(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null,
    )),
    (t.return = e),
    (e.child = t)
  );
}

function Cu(e, t, r, n) {
  return (
    n !== null && xh(n),
    ji(t, e.child, null, r),
    (e = Ih(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}

function BA(e, t, r, n, i, a, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = of(Error(z(422)))), Cu(e, t, o, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = n.fallback),
          (i = t.mode),
          (n = Fs(
            {
              mode: "visible",
              children: n.children,
            },
            i,
            0,
            null,
          )),
          (a = Nn(a, i, o, null)),
          (a.flags |= 2),
          (n.return = t),
          (a.return = t),
          (n.sibling = a),
          (t.child = n),
          t.mode & 1 && ji(t, e.child, null, o),
          (t.child.memoizedState = wp(o)),
          (t.memoizedState = bp),
          a);
  if (!(t.mode & 1)) return Cu(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var u = n.dgst;
    return (n = u), (a = Error(z(419))), (n = of(a, n, void 0)), Cu(e, t, o, n);
  }
  if (((u = (o & e.childLanes) !== 0), pt || u)) {
    if (((n = He), n !== null)) {
      switch (o & -o) {
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
      (i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), $r(e, i), Jt(n, e, i, -1));
    }
    return Fh(), (n = of(Error(z(421)))), Cu(e, t, o, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ZA.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (St = Jr(i.nextSibling)),
      (Ot = t),
      (xe = !0),
      (Xt = null),
      e !== null &&
        ((kt[Mt++] = gr),
        (kt[Mt++] = br),
        (kt[Mt++] = Bn),
        (gr = e.id),
        (br = e.overflow),
        (Bn = t)),
      (t = Ih(t, n.children)),
      (t.flags |= 4096),
      t);
}

function Xy(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), dp(e.return, t, r);
}

function uf(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}

function zw(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((it(e, t, n.children, r), (n = Oe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xy(e, r, t);
        else if (e.tag === 19) Xy(e, r, t);
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
    n &= 1;
  }
  if ((he(Oe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Ol(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          uf(t, !1, i, r, a);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ol(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        uf(t, !0, r, null, a);
        break;
      case "together":
        uf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}

function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}

function Tr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = nn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = nn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}

function zA(e, t, r) {
  switch (t.tag) {
    case 3:
      Rw(t), Ti();
      break;
    case 5:
      pw(t);
      break;
    case 1:
      vt(t.type) && ml(t);
      break;
    case 4:
      Eh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      he(wl, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (he(Oe, Oe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? Bw(e, t, r)
            : (he(Oe, Oe.current & 1),
              (e = Tr(e, t, r)),
              e !== null ? e.sibling : null);
      he(Oe, Oe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return zw(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        he(Oe, Oe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Dw(e, t, r);
  }
  return Tr(e, t, r);
}
var Fw, xp, Uw, Ww;
Fw = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
xp = function () {};
Uw = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), En(cr.current);
    var a = null;
    switch (r) {
      case "input":
        (i = Wf(e, i)), (n = Wf(e, n)), (a = []);
        break;
      case "select":
        (i = Ae({}, i, {
          value: void 0,
        })),
          (n = Ae({}, n, {
            value: void 0,
          })),
          (a = []);
        break;
      case "textarea":
        (i = Kf(e, i)), (n = Kf(e, n)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = vl);
    }
    qf(r, n);
    var o;
    r = null;
    for (s in i)
      if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var u = i[s];
          for (o in u) u.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (ro.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in n) {
      var l = n[s];
      if (
        ((u = i != null ? i[s] : void 0),
        n.hasOwnProperty(s) && l !== u && (l != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                u[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else r || (a || (a = []), a.push(s, r)), (r = l);
        else
          s === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (u = u ? u.__html : void 0),
              l != null && u !== l && (a = a || []).push(s, l))
            : s === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (a = a || []).push(s, "" + l)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (ro.hasOwnProperty(s)
                  ? (l != null && s === "onScroll" && ye("scroll", e),
                    a || u === l || (a = []))
                  : (a = a || []).push(s, l));
    }
    r && (a = a || []).push("style", r);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ww = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};

function Pa(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}

function Ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}

function FA(e, t, r) {
  var n = t.pendingProps;
  switch ((wh(t), t.tag)) {
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
      return Ze(t), null;
    case 1:
      return vt(t.type) && yl(), Ze(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Ci(),
        be(ht),
        be(rt),
        Th(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xt !== null && (Tp(Xt), (Xt = null)))),
        xp(e, t),
        Ze(t),
        null
      );
    case 5:
      $h(t);
      var i = En(vo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Uw(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(z(166));
          return Ze(t), null;
        }
        if (((e = En(cr.current)), Tu(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[or] = t), (n[po] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ye("cancel", n), ye("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < za.length; i++) ye(za[i], n);
              break;
            case "source":
              ye("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", n), ye("load", n);
              break;
            case "details":
              ye("toggle", n);
              break;
            case "input":
              iy(n, a), ye("invalid", n);
              break;
            case "select":
              (n._wrapperState = {
                wasMultiple: !!a.multiple,
              }),
                ye("invalid", n);
              break;
            case "textarea":
              oy(n, a), ye("invalid", n);
          }
          qf(r, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "children"
                ? typeof u == "string"
                  ? n.textContent !== u &&
                    (a.suppressHydrationWarning !== !0 &&
                      $u(n.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    n.textContent !== "" + u &&
                    (a.suppressHydrationWarning !== !0 &&
                      $u(n.textContent, u, e),
                    (i = ["children", "" + u]))
                : ro.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  ye("scroll", n);
            }
          switch (r) {
            case "input":
              wu(n), ay(n, a, !0);
              break;
            case "textarea":
              wu(n), uy(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = vl);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mb(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = o.createElement(r, {
                      is: n.is,
                    }))
                  : ((e = o.createElement(r)),
                    r === "select" &&
                      ((o = e),
                      n.multiple
                        ? (o.multiple = !0)
                        : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[or] = t),
            (e[po] = n),
            Fw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Xf(r, n)), r)) {
              case "dialog":
                ye("cancel", e), ye("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < za.length; i++) ye(za[i], e);
                i = n;
                break;
              case "source":
                ye("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", e), ye("load", e), (i = n);
                break;
              case "details":
                ye("toggle", e), (i = n);
                break;
              case "input":
                iy(e, n), (i = Wf(e, n)), ye("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!n.multiple,
                }),
                  (i = Ae({}, n, {
                    value: void 0,
                  })),
                  ye("invalid", e);
                break;
              case "textarea":
                oy(e, n), (i = Kf(e, n)), ye("invalid", e);
                break;
              default:
                i = n;
            }
            qf(r, i), (u = i);
            for (a in u)
              if (u.hasOwnProperty(a)) {
                var l = u[a];
                a === "style"
                  ? wb(e, l)
                  : a === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && gb(e, l))
                    : a === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && no(e, l)
                        : typeof l == "number" && no(e, "" + l)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (ro.hasOwnProperty(a)
                          ? l != null && a === "onScroll" && ye("scroll", e)
                          : l != null && ah(e, a, l, o));
              }
            switch (r) {
              case "input":
                wu(e), ay(e, n, !1);
                break;
              case "textarea":
                wu(e), uy(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + un(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? mi(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      mi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ze(t), null;
    case 6:
      if (e && t.stateNode != null) Ww(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = En(vo.current)), En(cr.current), Tu(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[or] = t),
            (a = n.nodeValue !== r) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                $u(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $u(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[or] = t),
            (t.stateNode = n);
      }
      return Ze(t), null;
    case 13:
      if (
        (be(Oe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && St !== null && t.mode & 1 && !(t.flags & 128))
          uw(), Ti(), (t.flags |= 98560), (a = !1);
        else if (((a = Tu(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(z(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(z(317));
            a[or] = t;
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ze(t), (a = !1);
        } else Xt !== null && (Tp(Xt), (Xt = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Be === 0 && (Be = 3) : Fh())),
          t.updateQueue !== null && (t.flags |= 4),
          Ze(t),
          null);
    case 4:
      return (
        Ci(), xp(e, t), e === null && co(t.stateNode.containerInfo), Ze(t), null
      );
    case 10:
      return _h(t.type._context), Ze(t), null;
    case 17:
      return vt(t.type) && yl(), Ze(t), null;
    case 19:
      if ((be(Oe), (a = t.memoizedState), a === null)) return Ze(t), null;
      if (((n = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (n) Pa(a, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ol(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pa(a, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return he(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ce() > Mi &&
            ((t.flags |= 128), (n = !0), Pa(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Ol(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Pa(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe)
            )
              return Ze(t), null;
          } else
            2 * Ce() - a.renderingStartTime > Mi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Pa(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = a.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ce()),
          (t.sibling = null),
          (r = Oe.current),
          he(Oe, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ze(t), null);
    case 22:
    case 23:
      return (
        zh(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? bt & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}

function UA(e, t) {
  switch ((wh(t), t.tag)) {
    case 1:
      return (
        vt(t.type) && yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ci(),
        be(ht),
        be(rt),
        Th(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $h(t), null;
    case 13:
      if (
        (be(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Ti();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return be(Oe), null;
    case 4:
      return Ci(), null;
    case 10:
      return _h(t.type._context), null;
    case 22:
    case 23:
      return zh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ku = !1,
  et = !1,
  WA = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;

function pi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        $e(e, t, n);
      }
    else r.current = null;
}

function Sp(e, t, r) {
  try {
    r();
  } catch (n) {
    $e(e, t, n);
  }
}
var Yy = !1;

function HA(e, t) {
  if (((ap = pl), (e = qb()), gh(e))) {
    if ("selectionStart" in e)
      var r = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            u = -1,
            l = -1,
            s = 0,
            f = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var d;
              c !== r || (i !== 0 && c.nodeType !== 3) || (u = o + i),
                c !== a || (n !== 0 && c.nodeType !== 3) || (l = o + n),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (d = c.firstChild) !== null;

            )
              (p = c), (c = d);
            for (;;) {
              if (c === e) break t;
              if (
                (p === r && ++s === i && (u = o),
                p === a && ++f === n && (l = o),
                (d = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = d;
          }
          r =
            u === -1 || l === -1
              ? null
              : {
                  start: u,
                  end: l,
                };
        } else r = null;
      }
    r = r || {
      start: 0,
      end: 0,
    };
  } else r = null;
  for (
    op = {
      focusedElem: e,
      selectionRange: r,
    },
      pl = !1,
      K = t;
    K !== null;

  )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
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
                  var g = y.memoizedProps,
                    w = y.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Kt(t.type, g),
                      w,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = h;
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
                throw Error(z(163));
            }
        } catch (S) {
          $e(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (y = Yy), (Yy = !1), y;
}

function qa(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Sp(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}

function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}

function Op(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}

function Hw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[or], delete t[po], delete t[sp], delete t[AA], delete t[EA])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}

function Vw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}

function Qy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vw(e.return)) return null;
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

function _p(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = vl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (_p(e, t, r), e = e.sibling; e !== null; ) _p(e, t, r), (e = e.sibling);
}

function Pp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Pp(e, t, r), e = e.sibling; e !== null; ) Pp(e, t, r), (e = e.sibling);
}
var Ge = null,
  Gt = !1;

function Br(e, t, r) {
  for (r = r.child; r !== null; ) Kw(e, t, r), (r = r.sibling);
}

function Kw(e, t, r) {
  if (sr && typeof sr.onCommitFiberUnmount == "function")
    try {
      sr.onCommitFiberUnmount(Cs, r);
    } catch {}
  switch (r.tag) {
    case 5:
      et || pi(r, t);
    case 6:
      var n = Ge,
        i = Gt;
      (Ge = null),
        Br(e, t, r),
        (Ge = n),
        (Gt = i),
        Ge !== null &&
          (Gt
            ? ((e = Ge),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ge.removeChild(r.stateNode));
      break;
    case 18:
      Ge !== null &&
        (Gt
          ? ((e = Ge),
            (r = r.stateNode),
            e.nodeType === 8
              ? Jc(e.parentNode, r)
              : e.nodeType === 1 && Jc(e, r),
            uo(e))
          : Jc(Ge, r.stateNode));
      break;
    case 4:
      (n = Ge),
        (i = Gt),
        (Ge = r.stateNode.containerInfo),
        (Gt = !0),
        Br(e, t, r),
        (Ge = n),
        (Gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !et &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Sp(r, t, o),
            (i = i.next);
        } while (i !== n);
      }
      Br(e, t, r);
      break;
    case 1:
      if (
        !et &&
        (pi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (u) {
          $e(r, t, u);
        }
      Br(e, t, r);
      break;
    case 21:
      Br(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((et = (n = et) || r.memoizedState !== null), Br(e, t, r), (et = n))
        : Br(e, t, r);
      break;
    default:
      Br(e, t, r);
  }
}

function Zy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new WA()),
      t.forEach(function (n) {
        var i = JA.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}

function Ht(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ge = u.stateNode), (Gt = !1);
              break e;
            case 3:
              (Ge = u.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (Ge = u.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          u = u.return;
        }
        if (Ge === null) throw Error(z(160));
        Kw(a, o, i), (Ge = null), (Gt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (s) {
        $e(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gw(t, e), (t = t.sibling);
}

function Gw(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ht(t, e), nr(e), n & 4)) {
        try {
          qa(3, e, e.return), Bs(3, e);
        } catch (g) {
          $e(e, e.return, g);
        }
        try {
          qa(5, e, e.return);
        } catch (g) {
          $e(e, e.return, g);
        }
      }
      break;
    case 1:
      Ht(t, e), nr(e), n & 512 && r !== null && pi(r, r.return);
      break;
    case 5:
      if (
        (Ht(t, e),
        nr(e),
        n & 512 && r !== null && pi(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          no(i, "");
        } catch (g) {
          $e(e, e.return, g);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = r !== null ? r.memoizedProps : a,
          u = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            u === "input" && a.type === "radio" && a.name != null && vb(i, a),
              Xf(u, o);
            var s = Xf(u, a);
            for (o = 0; o < l.length; o += 2) {
              var f = l[o],
                c = l[o + 1];
              f === "style"
                ? wb(i, c)
                : f === "dangerouslySetInnerHTML"
                  ? gb(i, c)
                  : f === "children"
                    ? no(i, c)
                    : ah(i, f, c, s);
            }
            switch (u) {
              case "input":
                Hf(i, a);
                break;
              case "textarea":
                yb(i, a);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var d = a.value;
                d != null
                  ? mi(i, !!a.multiple, d, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? mi(i, !!a.multiple, a.defaultValue, !0)
                      : mi(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[po] = a;
          } catch (g) {
            $e(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ht(t, e), nr(e), n & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (g) {
          $e(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ht(t, e), nr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          uo(t.containerInfo);
        } catch (g) {
          $e(e, e.return, g);
        }
      break;
    case 4:
      Ht(t, e), nr(e);
      break;
    case 13:
      Ht(t, e),
        nr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rh = Ce())),
        n & 4 && Zy(e);
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((et = (s = et) || f), Ht(t, e), (et = s)) : Ht(t, e),
        nr(e),
        n & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (K = e, f = e.child; f !== null; ) {
            for (c = K = f; K !== null; ) {
              switch (((p = K), (d = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qa(4, p, p.return);
                  break;
                case 1:
                  pi(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = p), (r = p.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      $e(n, r, g);
                    }
                  }
                  break;
                case 5:
                  pi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    em(c);
                    continue;
                  }
              }
              d !== null ? ((d.return = p), (K = d)) : em(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (i = c.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((u = c.stateNode),
                      (l = c.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (u.style.display = bb("display", o)));
              } catch (g) {
                $e(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? "" : c.memoizedProps;
              } catch (g) {
                $e(e, e.return, g);
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
      Ht(t, e), nr(e), n & 4 && Zy(e);
      break;
    case 21:
      break;
    default:
      Ht(t, e), nr(e);
  }
}

function nr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Vw(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (no(i, ""), (n.flags &= -33));
          var a = Qy(e);
          Pp(e, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            u = Qy(e);
          _p(e, u, o);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      $e(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}

function VA(e, t, r) {
  (K = e), qw(e);
}

function qw(e, t, r) {
  for (var n = (e.mode & 1) !== 0; K !== null; ) {
    var i = K,
      a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || ku;
      if (!o) {
        var u = i.alternate,
          l = (u !== null && u.memoizedState !== null) || et;
        u = ku;
        var s = et;
        if (((ku = o), (et = l) && !s))
          for (K = i; K !== null; )
            (o = K),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? tm(i)
                : l !== null
                  ? ((l.return = o), (K = l))
                  : tm(i);
        for (; a !== null; ) (K = a), qw(a), (a = a.sibling);
        (K = i), (ku = u), (et = s);
      }
      Jy(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (K = a)) : Jy(e);
  }
}

function Jy(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              et || Bs(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !et)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Kt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && Ly(t, a, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Ly(t, o, r);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (r === null && t.flags & 4) {
                r = u;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && uo(c);
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
              throw Error(z(163));
          }
        et || (t.flags & 512 && Op(t));
      } catch (p) {
        $e(t, t.return, p);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (K = r);
      break;
    }
    K = t.return;
  }
}

function em(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (K = r);
      break;
    }
    K = t.return;
  }
}

function tm(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Bs(4, t);
          } catch (l) {
            $e(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              $e(t, i, l);
            }
          }
          var a = t.return;
          try {
            Op(t);
          } catch (l) {
            $e(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Op(t);
          } catch (l) {
            $e(t, o, l);
          }
      }
    } catch (l) {
      $e(t, t.return, l);
    }
    if (t === e) {
      K = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (K = u);
      break;
    }
    K = t.return;
  }
}
var KA = Math.ceil,
  Al = Nr.ReactCurrentDispatcher,
  Dh = Nr.ReactCurrentOwner,
  Lt = Nr.ReactCurrentBatchConfig,
  oe = 0,
  He = null,
  Me = null,
  Xe = 0,
  bt = 0,
  di = cn(0),
  Be = 0,
  bo = null,
  Fn = 0,
  zs = 0,
  Lh = 0,
  Xa = null,
  ft = null,
  Rh = 0,
  Mi = 1 / 0,
  yr = null,
  El = !1,
  Ap = null,
  tn = null,
  Mu = !1,
  Gr = null,
  $l = 0,
  Ya = 0,
  Ep = null,
  il = -1,
  al = 0;

function ot() {
  return oe & 6 ? Ce() : il !== -1 ? il : (il = Ce());
}

function rn(e) {
  return e.mode & 1
    ? oe & 2 && Xe !== 0
      ? Xe & -Xe
      : TA.transition !== null
        ? (al === 0 && (al = kb()), al)
        : ((e = se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bb(e.type))),
          e)
    : 1;
}

function Jt(e, t, r, n) {
  if (50 < Ya) throw ((Ya = 0), (Ep = null), Error(z(185)));
  iu(e, r, n),
    (!(oe & 2) || e !== He) &&
      (e === He && (!(oe & 2) && (zs |= r), Be === 4 && Vr(e, Xe)),
      yt(e, n),
      r === 1 && oe === 0 && !(t.mode & 1) && ((Mi = Ce() + 500), Ds && fn()));
}

function yt(e, t) {
  var r = e.callbackNode;
  TP(e, t);
  var n = fl(e, e === He ? Xe : 0);
  if (n === 0)
    r !== null && cy(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && cy(r), t === 1))
      e.tag === 0 ? $A(rm.bind(null, e)) : iw(rm.bind(null, e)),
        _A(function () {
          !(oe & 6) && fn();
        }),
        (r = null);
    else {
      switch (Mb(n)) {
        case 1:
          r = ch;
          break;
        case 4:
          r = jb;
          break;
        case 16:
          r = cl;
          break;
        case 536870912:
          r = Cb;
          break;
        default:
          r = cl;
      }
      r = rx(r, Xw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}

function Xw(e, t) {
  if (((il = -1), (al = 0), oe & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (Si() && e.callbackNode !== r) return null;
  var n = fl(e, e === He ? Xe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Tl(e, n);
  else {
    t = n;
    var i = oe;
    oe |= 2;
    var a = Qw();
    (He !== e || Xe !== t) && ((yr = null), (Mi = Ce() + 500), Mn(e, t));
    do
      try {
        XA();
        break;
      } catch (u) {
        Yw(e, u);
      }
    while (!0);
    Oh(),
      (Al.current = a),
      (oe = i),
      Me !== null ? (t = 0) : ((He = null), (Xe = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ep(e)), i !== 0 && ((n = i), (t = $p(e, i)))), t === 1)
    )
      throw ((r = bo), Mn(e, 0), Vr(e, n), yt(e, Ce()), r);
    if (t === 6) Vr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !GA(i) &&
          ((t = Tl(e, n)),
          t === 2 && ((a = ep(e)), a !== 0 && ((n = a), (t = $p(e, a)))),
          t === 1))
      )
        throw ((r = bo), Mn(e, 0), Vr(e, n), yt(e, Ce()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          xn(e, ft, yr);
          break;
        case 3:
          if (
            (Vr(e, n), (n & 130023424) === n && ((t = Rh + 500 - Ce()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = lp(xn.bind(null, e, ft, yr), t);
            break;
          }
          xn(e, ft, yr);
          break;
        case 4:
          if ((Vr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - Zt(n);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~a);
          }
          if (
            ((n = i),
            (n = Ce() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * KA(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = lp(xn.bind(null, e, ft, yr), n);
            break;
          }
          xn(e, ft, yr);
          break;
        case 5:
          xn(e, ft, yr);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return yt(e, Ce()), e.callbackNode === r ? Xw.bind(null, e) : null;
}

function $p(e, t) {
  var r = Xa;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = Tl(e, t)),
    e !== 2 && ((t = ft), (ft = r), t !== null && Tp(t)),
    e
  );
}

function Tp(e) {
  ft === null ? (ft = e) : ft.push.apply(ft, e);
}

function GA(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!tr(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
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

function Vr(e, t) {
  for (
    t &= ~Lh,
      t &= ~zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Zt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}

function rm(e) {
  if (oe & 6) throw Error(z(327));
  Si();
  var t = fl(e, 0);
  if (!(t & 1)) return yt(e, Ce()), null;
  var r = Tl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = ep(e);
    n !== 0 && ((t = n), (r = $p(e, n)));
  }
  if (r === 1) throw ((r = bo), Mn(e, 0), Vr(e, t), yt(e, Ce()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, ft, yr),
    yt(e, Ce()),
    null
  );
}

function Bh(e, t) {
  var r = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = r), oe === 0 && ((Mi = Ce() + 500), Ds && fn());
  }
}

function Un(e) {
  Gr !== null && Gr.tag === 0 && !(oe & 6) && Si();
  var t = oe;
  oe |= 1;
  var r = Lt.transition,
    n = se;
  try {
    if (((Lt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = n), (Lt.transition = r), (oe = t), !(oe & 6) && fn();
  }
}

function zh() {
  (bt = di.current), be(di);
}

function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), OA(r)), Me !== null))
    for (r = Me.return; r !== null; ) {
      var n = r;
      switch ((wh(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && yl();
          break;
        case 3:
          Ci(), be(ht), be(rt), Th();
          break;
        case 5:
          $h(n);
          break;
        case 4:
          Ci();
          break;
        case 13:
          be(Oe);
          break;
        case 19:
          be(Oe);
          break;
        case 10:
          _h(n.type._context);
          break;
        case 22:
        case 23:
          zh();
      }
      r = r.return;
    }
  if (
    ((He = e),
    (Me = e = nn(e.current, null)),
    (Xe = bt = t),
    (Be = 0),
    (bo = null),
    (Lh = zs = Fn = 0),
    (ft = Xa = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((r = An[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (n.next = o);
        }
        r.pending = n;
      }
    An = null;
  }
  return e;
}

function Yw(e, t) {
  do {
    var r = Me;
    try {
      if ((Oh(), (tl.current = Pl), _l)) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        _l = !1;
      }
      if (
        ((zn = 0),
        (We = Re = Pe = null),
        (Ga = !1),
        (yo = 0),
        (Dh.current = null),
        r === null || r.return === null)
      ) {
        (Be = 1), (bo = t), (Me = null);
        break;
      }
      e: {
        var a = e,
          o = r.return,
          u = r,
          l = t;
        if (
          ((t = Xe),
          (u.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var s = l,
            f = u,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var d = Wy(o);
          if (d !== null) {
            (d.flags &= -257),
              Hy(d, o, u, a, t),
              d.mode & 1 && Uy(a, s, t),
              (t = d),
              (l = s);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Uy(a, s, t), Fh();
              break e;
            }
            l = Error(z(426));
          }
        } else if (xe && u.mode & 1) {
          var w = Wy(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Hy(w, o, u, a, t),
              xh(ki(l, u));
            break e;
          }
        }
        (a = l = ki(l, u)),
          Be !== 4 && (Be = 2),
          Xa === null ? (Xa = [a]) : Xa.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var v = Mw(a, l, t);
              Dy(a, v);
              break e;
            case 1:
              u = l;
              var h = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (tn === null || !tn.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var S = Nw(a, u, t);
                Dy(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Jw(r);
    } catch (b) {
      (t = b), Me === r && r !== null && (Me = r = r.return);
      continue;
    }
    break;
  } while (!0);
}

function Qw() {
  var e = Al.current;
  return (Al.current = Pl), e === null ? Pl : e;
}

function Fh() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    He === null || (!(Fn & 268435455) && !(zs & 268435455)) || Vr(He, Xe);
}

function Tl(e, t) {
  var r = oe;
  oe |= 2;
  var n = Qw();
  (He !== e || Xe !== t) && ((yr = null), Mn(e, t));
  do
    try {
      qA();
      break;
    } catch (i) {
      Yw(e, i);
    }
  while (!0);
  if ((Oh(), (oe = r), (Al.current = n), Me !== null)) throw Error(z(261));
  return (He = null), (Xe = 0), Be;
}

function qA() {
  for (; Me !== null; ) Zw(Me);
}

function XA() {
  for (; Me !== null && !wP(); ) Zw(Me);
}

function Zw(e) {
  var t = tx(e.alternate, e, bt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jw(e) : (Me = t),
    (Dh.current = null);
}

function Jw(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = UA(r, t)), r !== null)) {
        (r.flags &= 32767), (Me = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (Me = null);
        return;
      }
    } else if (((r = FA(r, t, bt)), r !== null)) {
      Me = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}

function xn(e, t, r) {
  var n = se,
    i = Lt.transition;
  try {
    (Lt.transition = null), (se = 1), YA(e, t, r, n);
  } finally {
    (Lt.transition = i), (se = n);
  }
  return null;
}

function YA(e, t, r, n) {
  do Si();
  while (Gr !== null);
  if (oe & 6) throw Error(z(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (jP(e, a),
    e === He && ((Me = He = null), (Xe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Mu ||
      ((Mu = !0),
      rx(cl, function () {
        return Si(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Lt.transition), (Lt.transition = null);
    var o = se;
    se = 1;
    var u = oe;
    (oe |= 4),
      (Dh.current = null),
      HA(e, r),
      Gw(r, e),
      yA(op),
      (pl = !!ap),
      (op = ap = null),
      (e.current = r),
      VA(r),
      xP(),
      (oe = u),
      (se = o),
      (Lt.transition = a);
  } else e.current = r;
  if (
    (Mu && ((Mu = !1), (Gr = e), ($l = i)),
    (a = e.pendingLanes),
    a === 0 && (tn = null),
    _P(r.stateNode),
    yt(e, Ce()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]),
        n(i.value, {
          componentStack: i.stack,
          digest: i.digest,
        });
  if (El) throw ((El = !1), (e = Ap), (Ap = null), e);
  return (
    $l & 1 && e.tag !== 0 && Si(),
    (a = e.pendingLanes),
    a & 1 ? (e === Ep ? Ya++ : ((Ya = 0), (Ep = e))) : (Ya = 0),
    fn(),
    null
  );
}

function Si() {
  if (Gr !== null) {
    var e = Mb($l),
      t = Lt.transition,
      r = se;
    try {
      if (((Lt.transition = null), (se = 16 > e ? 16 : e), Gr === null))
        var n = !1;
      else {
        if (((e = Gr), (Gr = null), ($l = 0), oe & 6)) throw Error(z(331));
        var i = oe;
        for (oe |= 4, K = e.current; K !== null; ) {
          var a = K,
            o = a.child;
          if (K.flags & 16) {
            var u = a.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (K = s; K !== null; ) {
                  var f = K;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qa(8, f, a);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (K = c);
                  else
                    for (; K !== null; ) {
                      f = K;
                      var p = f.sibling,
                        d = f.return;
                      if ((Hw(f), f === s)) {
                        K = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = d), (K = p);
                        break;
                      }
                      K = d;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              K = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (K = o);
          else
            e: for (; K !== null; ) {
              if (((a = K), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qa(9, a, a.return);
                }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (K = v);
                break e;
              }
              K = a.return;
            }
        }
        var h = e.current;
        for (K = h; K !== null; ) {
          o = K;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (K = m);
          else
            e: for (o = h; K !== null; ) {
              if (((u = K), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, u);
                  }
                } catch (b) {
                  $e(u, u.return, b);
                }
              if (u === o) {
                K = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (K = S);
                break e;
              }
              K = u.return;
            }
        }
        if (
          ((oe = i), fn(), sr && typeof sr.onPostCommitFiberRoot == "function")
        )
          try {
            sr.onPostCommitFiberRoot(Cs, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (se = r), (Lt.transition = t);
    }
  }
  return !1;
}

function nm(e, t, r) {
  (t = ki(r, t)),
    (t = Mw(e, t, 1)),
    (e = en(e, t, 1)),
    (t = ot()),
    e !== null && (iu(e, 1, t), yt(e, t));
}

function $e(e, t, r) {
  if (e.tag === 3) nm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (tn === null || !tn.has(n)))
        ) {
          (e = ki(r, e)),
            (e = Nw(t, e, 1)),
            (t = en(t, e, 1)),
            (e = ot()),
            t !== null && (iu(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}

function QA(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & r),
    He === e &&
      (Xe & r) === r &&
      (Be === 4 || (Be === 3 && (Xe & 130023424) === Xe && 500 > Ce() - Rh)
        ? Mn(e, 0)
        : (Lh |= r)),
    yt(e, t);
}

function ex(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ou), (Ou <<= 1), !(Ou & 130023424) && (Ou = 4194304))
      : (t = 1));
  var r = ot();
  (e = $r(e, t)), e !== null && (iu(e, t, r), yt(e, r));
}

function ZA(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), ex(e, r);
}

function JA(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  n !== null && n.delete(t), ex(e, r);
}
var tx;
tx = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) pt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (pt = !1), zA(e, t, r);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), xe && t.flags & 1048576 && aw(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      nl(e, t), (e = t.pendingProps);
      var i = $i(t, rt.current);
      xi(t, r), (i = Ch(null, t, n, e, i, r));
      var a = kh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            vt(n) ? ((a = !0), ml(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ah(t),
            (i.updater = Rs),
            (t.stateNode = i),
            (i._reactInternals = t),
            vp(t, n, e, r),
            (t = gp(null, t, n, !0, a, r)))
          : ((t.tag = 0), xe && a && bh(t), it(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = tE(n)),
          (e = Kt(n, e)),
          i)
        ) {
          case 0:
            t = mp(null, t, n, e, r);
            break e;
          case 1:
            t = Gy(null, t, n, e, r);
            break e;
          case 11:
            t = Vy(null, t, n, e, r);
            break e;
          case 14:
            t = Ky(null, t, n, Kt(n.type, e), r);
            break e;
        }
        throw Error(z(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Kt(n, i)),
        mp(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Kt(n, i)),
        Gy(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Rw(t), e === null)) throw Error(z(387));
        (n = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          fw(e, t),
          Sl(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = ki(Error(z(423)), t)), (t = qy(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = ki(Error(z(424)), t)), (t = qy(e, t, n, r, i));
            break e;
          } else
            for (
              St = Jr(t.stateNode.containerInfo.firstChild),
                Ot = t,
                xe = !0,
                Xt = null,
                r = sw(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Ti(), n === i)) {
            t = Tr(e, t, r);
            break e;
          }
          it(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pw(t),
        e === null && pp(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        up(n, i) ? (o = null) : a !== null && up(n, a) && (t.flags |= 32),
        Lw(e, t),
        it(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && pp(t), null;
    case 13:
      return Bw(e, t, r);
    case 4:
      return (
        Eh(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ji(t, null, n, r)) : it(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Kt(n, i)),
        Vy(e, t, n, i, r)
      );
    case 7:
      return it(e, t, t.pendingProps, r), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          he(wl, n._currentValue),
          (n._currentValue = o),
          a !== null)
        )
          if (tr(a.value, o)) {
            if (a.children === i.children && !ht.current) {
              t = Tr(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var u = a.dependencies;
              if (u !== null) {
                o = a.child;
                for (var l = u.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (a.tag === 1) {
                      (l = Sr(-1, r & -r)), (l.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (s.pending = l);
                      }
                    }
                    (a.lanes |= r),
                      (l = a.alternate),
                      l !== null && (l.lanes |= r),
                      dp(a.return, r, t),
                      (u.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(z(341));
                (o.lanes |= r),
                  (u = o.alternate),
                  u !== null && (u.lanes |= r),
                  dp(o, r, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        it(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        xi(t, r),
        (i = Bt(i)),
        (n = n(i)),
        (t.flags |= 1),
        it(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Kt(n, t.pendingProps)),
        (i = Kt(n.type, i)),
        Ky(e, t, n, i, r)
      );
    case 15:
      return Iw(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Kt(n, i)),
        nl(e, t),
        (t.tag = 1),
        vt(n) ? ((e = !0), ml(t)) : (e = !1),
        xi(t, r),
        kw(t, n, i),
        vp(t, n, i, r),
        gp(null, t, n, !0, e, r)
      );
    case 19:
      return zw(e, t, r);
    case 22:
      return Dw(e, t, r);
  }
  throw Error(z(156, t.tag));
};

function rx(e, t) {
  return Tb(e, t);
}

function eE(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}

function It(e, t, r, n) {
  return new eE(e, t, r, n);
}

function Uh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}

function tE(e) {
  if (typeof e == "function") return Uh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uh)) return 11;
    if (e === lh) return 14;
  }
  return 2;
}

function nn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = It(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}

function ol(e, t, r, n, i, a) {
  var o = 2;
  if (((n = e), typeof e == "function")) Uh(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ni:
        return Nn(r.children, i, a, t);
      case oh:
        (o = 8), (i |= 8);
        break;
      case Bf:
        return (
          (e = It(12, r, t, i | 2)), (e.elementType = Bf), (e.lanes = a), e
        );
      case zf:
        return (e = It(13, r, t, i)), (e.elementType = zf), (e.lanes = a), e;
      case Ff:
        return (e = It(19, r, t, i)), (e.elementType = Ff), (e.lanes = a), e;
      case pb:
        return Fs(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cb:
              o = 10;
              break e;
            case fb:
              o = 9;
              break e;
            case uh:
              o = 11;
              break e;
            case lh:
              o = 14;
              break e;
            case Fr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = It(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = a), t
  );
}

function Nn(e, t, r, n) {
  return (e = It(7, e, n, t)), (e.lanes = r), e;
}

function Fs(e, t, r, n) {
  return (
    (e = It(22, e, n, t)),
    (e.elementType = pb),
    (e.lanes = r),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}

function lf(e, t, r) {
  return (e = It(6, e, null, t)), (e.lanes = r), e;
}

function sf(e, t, r) {
  return (
    (t = It(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}

function rE(e, t, r, n, i) {
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
    (this.eventTimes = Uc(0)),
    (this.expirationTimes = Uc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uc(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}

function Wh(e, t, r, n, i, a, o, u, l) {
  return (
    (e = new rE(e, t, r, u, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = It(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ah(a),
    e
  );
}

function nE(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ri,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}

function nx(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (vt(r)) return nw(e, r, t);
  }
  return t;
}

function ix(e, t, r, n, i, a, o, u, l) {
  return (
    (e = Wh(r, n, !0, e, i, a, o, u, l)),
    (e.context = nx(null)),
    (r = e.current),
    (n = ot()),
    (i = rn(r)),
    (a = Sr(n, i)),
    (a.callback = t ?? null),
    en(r, a, i),
    (e.current.lanes = i),
    iu(e, i, n),
    yt(e, n),
    e
  );
}

function Us(e, t, r, n) {
  var i = t.current,
    a = ot(),
    o = rn(i);
  return (
    (r = nx(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Sr(a, o)),
    (t.payload = {
      element: e,
    }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = en(i, t, o)),
    e !== null && (Jt(e, i, o, a), el(e, i, o)),
    o
  );
}

function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}

function im(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}

function Hh(e, t) {
  im(e, t), (e = e.alternate) && im(e, t);
}

function iE() {
  return null;
}
var ax =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };

function Vh(e) {
  this._internalRoot = e;
}
Ws.prototype.render = Vh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Us(e, t, null, null);
};
Ws.prototype.unmount = Vh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      Us(null, e, null, null);
    }),
      (t[Er] = null);
  }
};

function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Db();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var r = 0; r < Hr.length && t !== 0 && t < Hr[r].priority; r++);
    Hr.splice(r, 0, e), r === 0 && Rb(e);
  }
};

function Kh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}

function Hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}

function am() {}

function aE(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var s = jl(o);
        a.call(s);
      };
    }
    var o = ix(t, n, e, 0, null, !1, !1, "", am);
    return (
      (e._reactRootContainer = o),
      (e[Er] = o.current),
      co(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var u = n;
    n = function () {
      var s = jl(l);
      u.call(s);
    };
  }
  var l = Wh(e, 0, !1, null, null, !1, !1, "", am);
  return (
    (e._reactRootContainer = l),
    (e[Er] = l.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      Us(t, l, r, n);
    }),
    l
  );
}

function Vs(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var l = jl(o);
        u.call(l);
      };
    }
    Us(t, o, e, i);
  } else o = aE(r, t, e, i, n);
  return jl(o);
}
Nb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Ba(t.pendingLanes);
        r !== 0 &&
          (fh(t, r | 1), yt(t, Ce()), !(oe & 6) && ((Mi = Ce() + 500), fn()));
      }
      break;
    case 13:
      Un(function () {
        var n = $r(e, 1);
        if (n !== null) {
          var i = ot();
          Jt(n, e, 1, i);
        }
      }),
        Hh(e, 1);
  }
};
ph = function (e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var r = ot();
      Jt(t, e, 134217728, r);
    }
    Hh(e, 134217728);
  }
};
Ib = function (e) {
  if (e.tag === 13) {
    var t = rn(e),
      r = $r(e, t);
    if (r !== null) {
      var n = ot();
      Jt(r, e, t, n);
    }
    Hh(e, t);
  }
};
Db = function () {
  return se;
};
Lb = function (e, t) {
  var r = se;
  try {
    return (se = e), t();
  } finally {
    se = r;
  }
};
Qf = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Hf(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Is(n);
            if (!i) throw Error(z(90));
            hb(n), Hf(n, i);
          }
        }
      }
      break;
    case "textarea":
      yb(e, r);
      break;
    case "select":
      (t = r.value), t != null && mi(e, !!r.multiple, t, !1);
  }
};
Ob = Bh;
_b = Un;
var oE = {
    usingClientEntryPoint: !1,
    Events: [ou, ui, Is, xb, Sb, Bh],
  },
  Aa = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  uE = {
    bundleType: Aa.bundleType,
    version: Aa.version,
    rendererPackageName: Aa.rendererPackageName,
    rendererConfig: Aa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Eb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Aa.findFiberByHostInstance || iE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nu.isDisabled && Nu.supportsFiber)
    try {
      (Cs = Nu.inject(uE)), (sr = Nu);
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oE;
At.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kh(t)) throw Error(z(200));
  return nE(e, t, null, r);
};
At.createRoot = function (e, t) {
  if (!Kh(e)) throw Error(z(299));
  var r = !1,
    n = "",
    i = ax;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Wh(e, 1, !1, null, null, r, !1, n, i)),
    (e[Er] = t.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    new Vh(t)
  );
};
At.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Eb(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
  return Un(e);
};
At.hydrate = function (e, t, r) {
  if (!Hs(t)) throw Error(z(200));
  return Vs(null, e, t, !0, r);
};
At.hydrateRoot = function (e, t, r) {
  if (!Kh(e)) throw Error(z(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    o = ax;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = ix(t, null, e, 1, r ?? null, i, !1, a, o)),
    (e[Er] = t.current),
    co(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Ws(t);
};
At.render = function (e, t, r) {
  if (!Hs(t)) throw Error(z(200));
  return Vs(null, e, t, !1, r);
};
At.unmountComponentAtNode = function (e) {
  if (!Hs(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Un(function () {
        Vs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Er] = null);
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = Bh;
At.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Hs(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Vs(e, t, r, !1, n);
};
At.version = "18.3.1-next-f1338f8080-20240426";

function ox() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ox);
    } catch (e) {
      console.error(e);
    }
}
ox(), (ob.exports = At);
var lE = ob.exports,
  ux,
  om = lE;
(ux = om.createRoot), om.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sE = {
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
 */
const cE = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ks = (e, t) => {
    const r = F.forwardRef(
      (
        {
          color: n = "currentColor",
          size: i = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: o,
          className: u = "",
          children: l,
          ...s
        },
        f,
      ) =>
        F.createElement(
          "svg",
          {
            ref: f,
            ...sE,
            width: i,
            height: i,
            stroke: n,
            strokeWidth: o ? (Number(a) * 24) / Number(i) : a,
            className: ["lucide", `lucide-${cE(e)}`, u].join(" "),
            ...s,
          },
          [
            ...t.map(([c, p]) => F.createElement(c, p)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    );
    return (r.displayName = `${e}`), r;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = Ks("Coins", [
  [
    "circle",
    {
      cx: "8",
      cy: "8",
      r: "6",
      key: "3yglwk",
    },
  ],
  [
    "path",
    {
      d: "M18.09 10.37A6 6 0 1 1 10.34 18",
      key: "t5s6rm",
    },
  ],
  [
    "path",
    {
      d: "M7 6h1v4",
      key: "1obek4",
    },
  ],
  [
    "path",
    {
      d: "m16.71 13.88.7.71-2.82 2.82",
      key: "1rbuyh",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = Ks("Search", [
  [
    "circle",
    {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u",
    },
  ],
  [
    "path",
    {
      d: "m21 21-4.3-4.3",
      key: "1qie3q",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dE = Ks("TrendingDown", [
  [
    "polyline",
    {
      points: "22 17 13.5 8.5 8.5 13.5 2 7",
      key: "1r2t7k",
    },
  ],
  [
    "polyline",
    {
      points: "16 17 22 17 22 11",
      key: "11uiuu",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = Ks("TrendingUp", [
    [
      "polyline",
      {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90",
      },
    ],
    [
      "polyline",
      {
        points: "16 7 22 7 22 13",
        key: "kwv8wd",
      },
    ],
  ]),
  wo = (e) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(e),
  vE = (e) => `${e.toFixed(2)}%`,
  yE = (e) =>
    e >= 1e12
      ? `$${(e / 1e12).toFixed(2)}T`
      : e >= 1e9
        ? `$${(e / 1e9).toFixed(2)}B`
        : e >= 1e6
          ? `$${(e / 1e6).toFixed(2)}M`
          : wo(e);

function mE({ coin: e, onClick: t, isSelected: r }) {
  const n = e.price_change_percentage_24h,
    i = n >= 0;
  return X.jsx("div", {
    onClick: t,
    className: `p-4 rounded-xl transition-all cursor-pointer ${r ? "bg-indigo-100 border-2 border-indigo-500" : "bg-white hover:shadow-lg border-2 border-transparent"}`,
    children: X.jsxs("div", {
      className: "flex items-center gap-3",
      children: [
        X.jsx("img", {
          src: e.image,
          alt: e.name,
          className: "w-8 h-8",
        }),
        X.jsxs("div", {
          className: "flex-1",
          children: [
            X.jsx("h3", {
              className: "font-semibold",
              children: e.name,
            }),
            X.jsx("p", {
              className: "text-sm text-gray-500 uppercase",
              children: e.symbol,
            }),
          ],
        }),
        X.jsxs("div", {
          className: "text-right",
          children: [
            X.jsx("p", {
              className: "font-medium",
              children: wo(e.current_price),
            }),
            X.jsxs("p", {
              className: `text-sm flex items-center gap-1 ${i ? "text-green-600" : "text-red-600"}`,
              children: [
                i
                  ? X.jsx(hE, {
                      className: "w-4 h-4",
                    })
                  : X.jsx(dE, {
                      className: "w-4 h-4",
                    }),
                vE(n),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

function lx(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = lx(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}

function ue() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = lx(e)) && (n && (n += " "), (n += t));
  return n;
}
var gE = Array.isArray,
  mt = gE,
  bE = typeof mu == "object" && mu && mu.Object === Object && mu,
  sx = bE,
  wE = sx,
  xE = typeof self == "object" && self && self.Object === Object && self,
  SE = wE || xE || Function("return this")(),
  hr = SE,
  OE = hr,
  _E = OE.Symbol,
  lu = _E,
  um = lu,
  cx = Object.prototype,
  PE = cx.hasOwnProperty,
  AE = cx.toString,
  Ea = um ? um.toStringTag : void 0;

function EE(e) {
  var t = PE.call(e, Ea),
    r = e[Ea];
  try {
    e[Ea] = void 0;
    var n = !0;
  } catch {}
  var i = AE.call(e);
  return n && (t ? (e[Ea] = r) : delete e[Ea]), i;
}
var $E = EE,
  TE = Object.prototype,
  jE = TE.toString;

function CE(e) {
  return jE.call(e);
}
var kE = CE,
  lm = lu,
  ME = $E,
  NE = kE,
  IE = "[object Null]",
  DE = "[object Undefined]",
  sm = lm ? lm.toStringTag : void 0;

function LE(e) {
  return e == null
    ? e === void 0
      ? DE
      : IE
    : sm && sm in Object(e)
      ? ME(e)
      : NE(e);
}
var Ir = LE;

function RE(e) {
  return e != null && typeof e == "object";
}
var Dr = RE,
  BE = Ir,
  zE = Dr,
  FE = "[object Symbol]";

function UE(e) {
  return typeof e == "symbol" || (zE(e) && BE(e) == FE);
}
var aa = UE,
  WE = mt,
  HE = aa,
  VE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  KE = /^\w*$/;

function GE(e, t) {
  if (WE(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || HE(e)
    ? !0
    : KE.test(e) || !VE.test(e) || (t != null && e in Object(t));
}
var Gh = GE;

function qE(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var pn = qE;
const oa = ve(pn);
var XE = Ir,
  YE = pn,
  QE = "[object AsyncFunction]",
  ZE = "[object Function]",
  JE = "[object GeneratorFunction]",
  e$ = "[object Proxy]";

function t$(e) {
  if (!YE(e)) return !1;
  var t = XE(e);
  return t == ZE || t == JE || t == QE || t == e$;
}
var qh = t$;
const te = ve(qh);
var r$ = hr,
  n$ = r$["__core-js_shared__"],
  i$ = n$,
  cf = i$,
  cm = (function () {
    var e = /[^.]+$/.exec((cf && cf.keys && cf.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();

function a$(e) {
  return !!cm && cm in e;
}
var o$ = a$,
  u$ = Function.prototype,
  l$ = u$.toString;

function s$(e) {
  if (e != null) {
    try {
      return l$.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var fx = s$,
  c$ = qh,
  f$ = o$,
  p$ = pn,
  d$ = fx,
  h$ = /[\\^$.*+?()[\]{}|]/g,
  v$ = /^\[object .+?Constructor\]$/,
  y$ = Function.prototype,
  m$ = Object.prototype,
  g$ = y$.toString,
  b$ = m$.hasOwnProperty,
  w$ = RegExp(
    "^" +
      g$
        .call(b$)
        .replace(h$, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );

function x$(e) {
  if (!p$(e) || f$(e)) return !1;
  var t = c$(e) ? w$ : v$;
  return t.test(d$(e));
}
var S$ = x$;

function O$(e, t) {
  return e == null ? void 0 : e[t];
}
var _$ = O$,
  P$ = S$,
  A$ = _$;

function E$(e, t) {
  var r = A$(e, t);
  return P$(r) ? r : void 0;
}
var qn = E$,
  $$ = qn,
  T$ = $$(Object, "create"),
  Gs = T$,
  fm = Gs;

function j$() {
  (this.__data__ = fm ? fm(null) : {}), (this.size = 0);
}
var C$ = j$;

function k$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var M$ = k$,
  N$ = Gs,
  I$ = "__lodash_hash_undefined__",
  D$ = Object.prototype,
  L$ = D$.hasOwnProperty;

function R$(e) {
  var t = this.__data__;
  if (N$) {
    var r = t[e];
    return r === I$ ? void 0 : r;
  }
  return L$.call(t, e) ? t[e] : void 0;
}
var B$ = R$,
  z$ = Gs,
  F$ = Object.prototype,
  U$ = F$.hasOwnProperty;

function W$(e) {
  var t = this.__data__;
  return z$ ? t[e] !== void 0 : U$.call(t, e);
}
var H$ = W$,
  V$ = Gs,
  K$ = "__lodash_hash_undefined__";

function G$(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = V$ && t === void 0 ? K$ : t),
    this
  );
}
var q$ = G$,
  X$ = C$,
  Y$ = M$,
  Q$ = B$,
  Z$ = H$,
  J$ = q$;

function ua(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ua.prototype.clear = X$;
ua.prototype.delete = Y$;
ua.prototype.get = Q$;
ua.prototype.has = Z$;
ua.prototype.set = J$;
var eT = ua;

function tT() {
  (this.__data__ = []), (this.size = 0);
}
var rT = tT;

function nT(e, t) {
  return e === t || (e !== e && t !== t);
}
var Xh = nT,
  iT = Xh;

function aT(e, t) {
  for (var r = e.length; r--; ) if (iT(e[r][0], t)) return r;
  return -1;
}
var qs = aT,
  oT = qs,
  uT = Array.prototype,
  lT = uT.splice;

function sT(e) {
  var t = this.__data__,
    r = oT(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : lT.call(t, r, 1), --this.size, !0;
}
var cT = sT,
  fT = qs;

function pT(e) {
  var t = this.__data__,
    r = fT(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var dT = pT,
  hT = qs;

function vT(e) {
  return hT(this.__data__, e) > -1;
}
var yT = vT,
  mT = qs;

function gT(e, t) {
  var r = this.__data__,
    n = mT(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var bT = gT,
  wT = rT,
  xT = cT,
  ST = dT,
  OT = yT,
  _T = bT;

function la(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
la.prototype.clear = wT;
la.prototype.delete = xT;
la.prototype.get = ST;
la.prototype.has = OT;
la.prototype.set = _T;
var Xs = la,
  PT = qn,
  AT = hr,
  ET = PT(AT, "Map"),
  Yh = ET,
  pm = eT,
  $T = Xs,
  TT = Yh;

function jT() {
  (this.size = 0),
    (this.__data__ = {
      hash: new pm(),
      map: new (TT || $T)(),
      string: new pm(),
    });
}
var CT = jT;

function kT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var MT = kT,
  NT = MT;

function IT(e, t) {
  var r = e.__data__;
  return NT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ys = IT,
  DT = Ys;

function LT(e) {
  var t = DT(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var RT = LT,
  BT = Ys;

function zT(e) {
  return BT(this, e).get(e);
}
var FT = zT,
  UT = Ys;

function WT(e) {
  return UT(this, e).has(e);
}
var HT = WT,
  VT = Ys;

function KT(e, t) {
  var r = VT(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var GT = KT,
  qT = CT,
  XT = RT,
  YT = FT,
  QT = HT,
  ZT = GT;

function sa(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
sa.prototype.clear = qT;
sa.prototype.delete = XT;
sa.prototype.get = YT;
sa.prototype.has = QT;
sa.prototype.set = ZT;
var Qh = sa,
  px = Qh,
  JT = "Expected a function";

function Zh(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(JT);
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, n);
    return (r.cache = a.set(i, o) || a), o;
  };
  return (r.cache = new (Zh.Cache || px)()), r;
}
Zh.Cache = px;
var dx = Zh;
const ej = ve(dx);
var tj = dx,
  rj = 500;

function nj(e) {
  var t = tj(e, function (n) {
      return r.size === rj && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var ij = nj,
  aj = ij,
  oj =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  uj = /\\(\\)?/g,
  lj = aj(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(oj, function (r, n, i, a) {
        t.push(i ? a.replace(uj, "$1") : n || r);
      }),
      t
    );
  }),
  sj = lj;

function cj(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Jh = cj,
  dm = lu,
  fj = Jh,
  pj = mt,
  dj = aa,
  hj = 1 / 0,
  hm = dm ? dm.prototype : void 0,
  vm = hm ? hm.toString : void 0;

function hx(e) {
  if (typeof e == "string") return e;
  if (pj(e)) return fj(e, hx) + "";
  if (dj(e)) return vm ? vm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hj ? "-0" : t;
}
var vj = hx,
  yj = vj;

function mj(e) {
  return e == null ? "" : yj(e);
}
var vx = mj,
  gj = mt,
  bj = Gh,
  wj = sj,
  xj = vx;

function Sj(e, t) {
  return gj(e) ? e : bj(e, t) ? [e] : wj(xj(e));
}
var yx = Sj,
  Oj = aa,
  _j = 1 / 0;

function Pj(e) {
  if (typeof e == "string" || Oj(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -_j ? "-0" : t;
}
var Qs = Pj,
  Aj = yx,
  Ej = Qs;

function $j(e, t) {
  t = Aj(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[Ej(t[r++])];
  return r && r == n ? e : void 0;
}
var ev = $j,
  Tj = ev;

function jj(e, t, r) {
  var n = e == null ? void 0 : Tj(e, t);
  return n === void 0 ? r : n;
}
var mx = jj;
const Rt = ve(mx);

function Cj(e) {
  return e == null;
}
var kj = Cj;
const ne = ve(kj);
var Mj = Ir,
  Nj = mt,
  Ij = Dr,
  Dj = "[object String]";

function Lj(e) {
  return typeof e == "string" || (!Nj(e) && Ij(e) && Mj(e) == Dj);
}
var Rj = Lj;
const su = ve(Rj);
var gx = {
    exports: {},
  },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv = Symbol.for("react.element"),
  rv = Symbol.for("react.portal"),
  Zs = Symbol.for("react.fragment"),
  Js = Symbol.for("react.strict_mode"),
  ec = Symbol.for("react.profiler"),
  tc = Symbol.for("react.provider"),
  rc = Symbol.for("react.context"),
  Bj = Symbol.for("react.server_context"),
  nc = Symbol.for("react.forward_ref"),
  ic = Symbol.for("react.suspense"),
  ac = Symbol.for("react.suspense_list"),
  oc = Symbol.for("react.memo"),
  uc = Symbol.for("react.lazy"),
  zj = Symbol.for("react.offscreen"),
  bx;
bx = Symbol.for("react.module.reference");

function Ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case tv:
        switch (((e = e.type), e)) {
          case Zs:
          case ec:
          case Js:
          case ic:
          case ac:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Bj:
              case rc:
              case nc:
              case uc:
              case oc:
              case tc:
                return e;
              default:
                return t;
            }
        }
      case rv:
        return t;
    }
  }
}
ce.ContextConsumer = rc;
ce.ContextProvider = tc;
ce.Element = tv;
ce.ForwardRef = nc;
ce.Fragment = Zs;
ce.Lazy = uc;
ce.Memo = oc;
ce.Portal = rv;
ce.Profiler = ec;
ce.StrictMode = Js;
ce.Suspense = ic;
ce.SuspenseList = ac;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return Ut(e) === rc;
};
ce.isContextProvider = function (e) {
  return Ut(e) === tc;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === tv;
};
ce.isForwardRef = function (e) {
  return Ut(e) === nc;
};
ce.isFragment = function (e) {
  return Ut(e) === Zs;
};
ce.isLazy = function (e) {
  return Ut(e) === uc;
};
ce.isMemo = function (e) {
  return Ut(e) === oc;
};
ce.isPortal = function (e) {
  return Ut(e) === rv;
};
ce.isProfiler = function (e) {
  return Ut(e) === ec;
};
ce.isStrictMode = function (e) {
  return Ut(e) === Js;
};
ce.isSuspense = function (e) {
  return Ut(e) === ic;
};
ce.isSuspenseList = function (e) {
  return Ut(e) === ac;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Zs ||
    e === ec ||
    e === Js ||
    e === ic ||
    e === ac ||
    e === zj ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === uc ||
        e.$$typeof === oc ||
        e.$$typeof === tc ||
        e.$$typeof === rc ||
        e.$$typeof === nc ||
        e.$$typeof === bx ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = Ut;
gx.exports = ce;
var wx = gx.exports,
  Fj = Ir,
  Uj = Dr,
  Wj = "[object Number]";

function Hj(e) {
  return typeof e == "number" || (Uj(e) && Fj(e) == Wj);
}
var xx = Hj;
const Vj = ve(xx);
var Kj = xx;

function Gj(e) {
  return Kj(e) && e != +e;
}
var qj = Gj;
const ca = ve(qj);
var Qt = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  $n = function (t) {
    return su(t) && t.indexOf("%") === t.length - 1;
  },
  W = function (t) {
    return Vj(t) && !ca(t);
  },
  ze = function (t) {
    return W(t) || su(t);
  },
  Xj = 0,
  cu = function (t) {
    var r = ++Xj;
    return "".concat(t || "").concat(r);
  },
  Wn = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!W(t) && !su(t)) return n;
    var a;
    if ($n(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return ca(a) && (a = n), i && a > r && (a = r), a;
  },
  ti = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  Yj = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  Nt = function (t, r) {
    return W(t) && W(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };

function Cl(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : Rt(n, t)) === r;
      });
}

function Oi(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}

function jp(e) {
  "@babel/helpers - typeof";
  return (
    (jp =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jp(e)
  );
}
var Qj = ["viewBox", "children"],
  Zj = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  ym = ["points", "pathLength"],
  ff = {
    svg: Qj,
    polygon: ym,
    polyline: ym,
  },
  nv = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  kl = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((F.isValidElement(t) && (n = t.props), !oa(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        nv.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  Jj = function (t, r, n) {
    return function (i) {
      return t(r, n, i), null;
    };
  },
  Ml = function (t, r, n) {
    if (!oa(t) || jp(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        nv.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = Jj(o, r, n)));
      }),
      i
    );
  },
  e2 = ["children"],
  t2 = ["children"];

function mm(e, t) {
  if (e == null) return {};
  var r = r2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function r2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function Cp(e) {
  "@babel/helpers - typeof";
  return (
    (Cp =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cp(e)
  );
}
var gm = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
  },
  Or = function (t) {
    return typeof t == "string"
      ? t
      : t
        ? t.displayName || t.name || "Component"
        : "";
  },
  bm = null,
  pf = null,
  iv = function e(t) {
    if (t === bm && Array.isArray(pf)) return pf;
    var r = [];
    return (
      F.Children.forEach(t, function (n) {
        ne(n) ||
          (wx.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (pf = r),
      (bm = t),
      r
    );
  };

function er(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return Or(i);
        }))
      : (n = [Or(t)]),
    iv(e).forEach(function (i) {
      var a = Rt(i, "type.displayName") || Rt(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}

function wt(e, t) {
  var r = er(e, t);
  return r && r[0];
}
var wm = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!W(n) || n <= 0 || !W(i) || i <= 0);
  },
  n2 = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  i2 = function (t) {
    return t && t.type && su(t.type) && n2.indexOf(t.type) >= 0;
  },
  a2 = function (t) {
    return t && Cp(t) === "object" && "clipDot" in t;
  },
  o2 = function (t, r, n, i) {
    var a,
      o = (a = ff == null ? void 0 : ff[i]) !== null && a !== void 0 ? a : [];
    return (
      (!te(t) && ((i && o.includes(r)) || Zj.includes(r))) ||
      (n && nv.includes(r))
    );
  },
  re = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((F.isValidElement(t) && (i = t.props), !oa(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        o2((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  kp = function e(t, r) {
    if (t === r) return !0;
    var n = F.Children.count(t);
    if (n !== F.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return xm(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!xm(a, o)) return !1;
    }
    return !0;
  },
  xm = function (t, r) {
    if (ne(t) && ne(r)) return !0;
    if (!ne(t) && !ne(r)) {
      var n = t.props || {},
        i = n.children,
        a = mm(n, e2),
        o = r.props || {},
        u = o.children,
        l = mm(o, t2);
      return i && u ? Oi(a, l) && kp(i, u) : !i && !u ? Oi(a, l) : !1;
    }
    return !1;
  },
  Sm = function (t, r) {
    var n = [],
      i = {};
    return (
      iv(t).forEach(function (a, o) {
        if (i2(a)) n.push(a);
        else if (a) {
          var u = Or(a.type),
            l = r[u] || {},
            s = l.handler,
            f = l.once;
          if (s && (!f || !i[u])) {
            var c = s(a, u, o);
            n.push(c), (i[u] = !0);
          }
        }
      }),
      n
    );
  },
  u2 = function (t) {
    var r = t && t.type;
    return r && gm[r] ? gm[r] : null;
  },
  l2 = function (t, r) {
    return iv(r).indexOf(t);
  },
  s2 = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];

function Mp() {
  return (
    (Mp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Mp.apply(this, arguments)
  );
}

function c2(e, t) {
  if (e == null) return {};
  var r = f2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function f2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function Np(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    l = e.desc,
    s = c2(e, s2),
    f = i || {
      width: r,
      height: n,
      x: 0,
      y: 0,
    },
    c = ue("recharts-surface", a);
  return A.createElement(
    "svg",
    Mp({}, re(s, !0, "svg"), {
      className: c,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    A.createElement("title", null, u),
    A.createElement("desc", null, l),
    t,
  );
}
var p2 = ["children", "className"];

function Ip() {
  return (
    (Ip = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ip.apply(this, arguments)
  );
}

function d2(e, t) {
  if (e == null) return {};
  var r = h2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function h2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var _e = A.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = d2(e, p2),
      a = ue("recharts-layer", n);
    return A.createElement(
      "g",
      Ip(
        {
          className: a,
        },
        re(i, !0),
        {
          ref: t,
        },
      ),
      r,
    );
  }),
  In = function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      i[a - 2] = arguments[a];
  };

function v2(e, t, r) {
  var n = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var y2 = v2,
  m2 = y2;

function g2(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : m2(e, t, r);
}
var b2 = g2,
  w2 = "\\ud800-\\udfff",
  x2 = "\\u0300-\\u036f",
  S2 = "\\ufe20-\\ufe2f",
  O2 = "\\u20d0-\\u20ff",
  _2 = x2 + S2 + O2,
  P2 = "\\ufe0e\\ufe0f",
  A2 = "\\u200d",
  E2 = RegExp("[" + A2 + w2 + _2 + P2 + "]");

function $2(e) {
  return E2.test(e);
}
var Sx = $2;

function T2(e) {
  return e.split("");
}
var j2 = T2,
  Ox = "\\ud800-\\udfff",
  C2 = "\\u0300-\\u036f",
  k2 = "\\ufe20-\\ufe2f",
  M2 = "\\u20d0-\\u20ff",
  N2 = C2 + k2 + M2,
  I2 = "\\ufe0e\\ufe0f",
  D2 = "[" + Ox + "]",
  Dp = "[" + N2 + "]",
  Lp = "\\ud83c[\\udffb-\\udfff]",
  L2 = "(?:" + Dp + "|" + Lp + ")",
  _x = "[^" + Ox + "]",
  Px = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Ax = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  R2 = "\\u200d",
  Ex = L2 + "?",
  $x = "[" + I2 + "]?",
  B2 = "(?:" + R2 + "(?:" + [_x, Px, Ax].join("|") + ")" + $x + Ex + ")*",
  z2 = $x + Ex + B2,
  F2 = "(?:" + [_x + Dp + "?", Dp, Px, Ax, D2].join("|") + ")",
  U2 = RegExp(Lp + "(?=" + Lp + ")|" + F2 + z2, "g");

function W2(e) {
  return e.match(U2) || [];
}
var H2 = W2,
  V2 = j2,
  K2 = Sx,
  G2 = H2;

function q2(e) {
  return K2(e) ? G2(e) : V2(e);
}
var X2 = q2,
  Y2 = b2,
  Q2 = Sx,
  Z2 = X2,
  J2 = vx;

function eC(e) {
  return function (t) {
    t = J2(t);
    var r = Q2(t) ? Z2(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? Y2(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var tC = eC,
  rC = tC,
  nC = rC("toUpperCase"),
  iC = nC;
const lc = ve(iC);

function de(e) {
  return function () {
    return e;
  };
}
const Tx = Math.cos,
  Nl = Math.sin,
  rr = Math.sqrt,
  Il = Math.PI,
  sc = 2 * Il,
  Rp = Math.PI,
  Bp = 2 * Rp,
  Sn = 1e-6,
  aC = Bp - Sn;

function jx(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}

function oC(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return jx;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class uC {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? jx : oC(t));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      l = n - t,
      s = i - r,
      f = o - t,
      c = u - r,
      p = f * f + c * c;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (p > Sn)
      if (!(Math.abs(c * l - s * f) > Sn) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let d = n - o,
          y = i - u,
          g = l * l + s * s,
          w = d * d + y * y,
          v = Math.sqrt(g),
          h = Math.sqrt(p),
          m = a * Math.tan((Rp - Math.acos((g + p - w) / (2 * v * h))) / 2),
          S = m / h,
          b = m / v;
        Math.abs(S - 1) > Sn && this._append`L${t + S * f},${r + S * c}`,
          this
            ._append`A${a},${a},0,0,${+(c * d > f * y)},${(this._x1 = t + b * l)},${(this._y1 = r + b * s)}`;
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      l = n * Math.sin(i),
      s = t + u,
      f = r + l,
      c = 1 ^ o,
      p = o ? i - a : a - i;
    this._x1 === null
      ? this._append`M${s},${f}`
      : (Math.abs(this._x1 - s) > Sn || Math.abs(this._y1 - f) > Sn) &&
        this._append`L${s},${f}`,
      n &&
        (p < 0 && (p = (p % Bp) + Bp),
        p > aC
          ? this
              ._append`A${n},${n},0,1,${c},${t - u},${r - l}A${n},${n},0,1,${c},${(this._x1 = s)},${(this._y1 = f)}`
          : p > Sn &&
            this
              ._append`A${n},${n},0,${+(p >= Rp)},${c},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`);
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}

function av(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new uC(t)
  );
}

function ov(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}

function Cx(e) {
  this._context = e;
}
Cx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};

function cc(e) {
  return new Cx(e);
}

function kx(e) {
  return e[0];
}

function Mx(e) {
  return e[1];
}

function Nx(e, t) {
  var r = de(!0),
    n = null,
    i = cc,
    a = null,
    o = av(u);
  (e = typeof e == "function" ? e : e === void 0 ? kx : de(e)),
    (t = typeof t == "function" ? t : t === void 0 ? Mx : de(t));

  function u(l) {
    var s,
      f = (l = ov(l)).length,
      c,
      p = !1,
      d;
    for (n == null && (a = i((d = o()))), s = 0; s <= f; ++s)
      !(s < f && r((c = l[s]), s, l)) === p &&
        ((p = !p) ? a.lineStart() : a.lineEnd()),
        p && a.point(+e(c, s, l), +t(c, s, l));
    if (d) return (a = null), d + "" || null;
  }
  return (
    (u.x = function (l) {
      return arguments.length
        ? ((e = typeof l == "function" ? l : de(+l)), u)
        : e;
    }),
    (u.y = function (l) {
      return arguments.length
        ? ((t = typeof l == "function" ? l : de(+l)), u)
        : t;
    }),
    (u.defined = function (l) {
      return arguments.length
        ? ((r = typeof l == "function" ? l : de(!!l)), u)
        : r;
    }),
    (u.curve = function (l) {
      return arguments.length ? ((i = l), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (l) {
      return arguments.length
        ? (l == null ? (n = a = null) : (a = i((n = l))), u)
        : n;
    }),
    u
  );
}

function Iu(e, t, r) {
  var n = null,
    i = de(!0),
    a = null,
    o = cc,
    u = null,
    l = av(s);
  (e = typeof e == "function" ? e : e === void 0 ? kx : de(+e)),
    (t = typeof t == "function" ? t : de(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? Mx : de(+r));

  function s(c) {
    var p,
      d,
      y,
      g = (c = ov(c)).length,
      w,
      v = !1,
      h,
      m = new Array(g),
      S = new Array(g);
    for (a == null && (u = o((h = l()))), p = 0; p <= g; ++p) {
      if (!(p < g && i((w = c[p]), p, c)) === v)
        if ((v = !v)) (d = p), u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = p - 1; y >= d; --y)
            u.point(m[y], S[y]);
          u.lineEnd(), u.areaEnd();
        }
      v &&
        ((m[p] = +e(w, p, c)),
        (S[p] = +t(w, p, c)),
        u.point(n ? +n(w, p, c) : m[p], r ? +r(w, p, c) : S[p]));
    }
    if (h) return (u = null), h + "" || null;
  }

  function f() {
    return Nx().defined(i).curve(o).context(a);
  }
  return (
    (s.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : de(+c)), (n = null), s)
        : e;
    }),
    (s.x0 = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : de(+c)), s)
        : e;
    }),
    (s.x1 = function (c) {
      return arguments.length
        ? ((n = c == null ? null : typeof c == "function" ? c : de(+c)), s)
        : n;
    }),
    (s.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : de(+c)), (r = null), s)
        : t;
    }),
    (s.y0 = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : de(+c)), s)
        : t;
    }),
    (s.y1 = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == "function" ? c : de(+c)), s)
        : r;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (s.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (s.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : de(!!c)), s)
        : i;
    }),
    (s.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (u = o(a)), s) : o;
    }),
    (s.context = function (c) {
      return arguments.length
        ? (c == null ? (a = u = null) : (u = o((a = c))), s)
        : a;
    }),
    s
  );
}
class Ix {
  constructor(t, r) {
    (this._context = t), (this._x = r);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    (this._x0 = t), (this._y0 = r);
  }
}

function lC(e) {
  return new Ix(e, !0);
}

function sC(e) {
  return new Ix(e, !1);
}
const uv = {
    draw(e, t) {
      const r = rr(t / Il);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, sc);
    },
  },
  cC = {
    draw(e, t) {
      const r = rr(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  },
  Dx = rr(1 / 3),
  fC = Dx * 2,
  pC = {
    draw(e, t) {
      const r = rr(t / fC),
        n = r * Dx;
      e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath();
    },
  },
  dC = {
    draw(e, t) {
      const r = rr(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  hC = 0.8908130915292852,
  Lx = Nl(Il / 10) / Nl((7 * Il) / 10),
  vC = Nl(sc / 10) * Lx,
  yC = -Tx(sc / 10) * Lx,
  mC = {
    draw(e, t) {
      const r = rr(t * hC),
        n = vC * r,
        i = yC * r;
      e.moveTo(0, -r), e.lineTo(n, i);
      for (let a = 1; a < 5; ++a) {
        const o = (sc * a) / 5,
          u = Tx(o),
          l = Nl(o);
        e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i);
      }
      e.closePath();
    },
  },
  df = rr(3),
  gC = {
    draw(e, t) {
      const r = -rr(t / (df * 3));
      e.moveTo(0, r * 2),
        e.lineTo(-df * r, -r),
        e.lineTo(df * r, -r),
        e.closePath();
    },
  },
  Tt = -0.5,
  jt = rr(3) / 2,
  zp = 1 / rr(12),
  bC = (zp / 2 + 1) * 3,
  wC = {
    draw(e, t) {
      const r = rr(t / bC),
        n = r / 2,
        i = r * zp,
        a = n,
        o = r * zp + r,
        u = -a,
        l = o;
      e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, l),
        e.lineTo(Tt * n - jt * i, jt * n + Tt * i),
        e.lineTo(Tt * a - jt * o, jt * a + Tt * o),
        e.lineTo(Tt * u - jt * l, jt * u + Tt * l),
        e.lineTo(Tt * n + jt * i, Tt * i - jt * n),
        e.lineTo(Tt * a + jt * o, Tt * o - jt * a),
        e.lineTo(Tt * u + jt * l, Tt * l - jt * u),
        e.closePath();
    },
  };

function xC(e, t) {
  let r = null,
    n = av(i);
  (e = typeof e == "function" ? e : de(e || uv)),
    (t = typeof t == "function" ? t : de(t === void 0 ? 64 : +t));

  function i() {
    let a;
    if (
      (r || (r = a = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return (r = null), a + "" || null;
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : de(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : de(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}

function Dl() {}

function Ll(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}

function Rx(e) {
  this._context = e;
}
Rx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Ll(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        Ll(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};

function SC(e) {
  return new Rx(e);
}

function Bx(e) {
  this._context = e;
}
Bx.prototype = {
  areaStart: Dl,
  areaEnd: Dl,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          );
        break;
      default:
        Ll(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};

function OC(e) {
  return new Bx(e);
}

function zx(e) {
  this._context = e;
}
zx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ll(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};

function _C(e) {
  return new zx(e);
}

function Fx(e) {
  this._context = e;
}
Fx.prototype = {
  areaStart: Dl,
  areaEnd: Dl,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};

function PC(e) {
  return new Fx(e);
}

function Om(e) {
  return e < 0 ? -1 : 1;
}

function _m(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (
    (Om(a) + Om(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
  );
}

function Pm(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}

function hf(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}

function Rl(e) {
  this._context = e;
}
Rl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        hf(this, this._t0, Pm(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), hf(this, Pm(this, (r = _m(this, e, t))), r);
          break;
        default:
          hf(this, this._t0, (r = _m(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};

function Ux(e) {
  this._context = new Wx(e);
}
(Ux.prototype = Object.create(Rl.prototype)).point = function (e, t) {
  Rl.prototype.point.call(this, t, e);
};

function Wx(e) {
  this._context = e;
}
Wx.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};

function AC(e) {
  return new Rl(e);
}

function EC(e) {
  return new Ux(e);
}

function Hx(e) {
  this._context = e;
}
Hx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Am(e), i = Am(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};

function Am(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}

function $C(e) {
  return new Hx(e);
}

function fc(e, t) {
  (this._context = e), (this._t = t);
}
fc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};

function TC(e) {
  return new fc(e, 0.5);
}

function jC(e) {
  return new fc(e, 0);
}

function CC(e) {
  return new fc(e, 1);
}

function Ni(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}

function Fp(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}

function kC(e, t) {
  return e[t];
}

function MC(e) {
  const t = [];
  return (t.key = e), t;
}

function NC() {
  var e = de([]),
    t = Fp,
    r = Ni,
    n = kC;

  function i(a) {
    var o = Array.from(e.apply(this, arguments), MC),
      u,
      l = o.length,
      s = -1,
      f;
    for (const c of a)
      for (u = 0, ++s; u < l; ++u)
        (o[u][s] = [0, +n(c, o[u].key, s, a)]).data = c;
    for (u = 0, f = ov(t(o)); u < l; ++u) o[f[u]].index = u;
    return r(o, f), o;
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : de(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : de(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? Fp : typeof a == "function" ? a : de(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Ni), i) : r;
    }),
    i
  );
}

function IC(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ni(e, t);
  }
}

function DC(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Ni(e, t);
  }
}

function LC(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, s = 0; u < o; ++u) {
        for (
          var f = e[t[u]],
            c = f[n][1] || 0,
            p = f[n - 1][1] || 0,
            d = (c - p) / 2,
            y = 0;
          y < u;
          ++y
        ) {
          var g = e[t[y]],
            w = g[n][1] || 0,
            v = g[n - 1][1] || 0;
          d += w - v;
        }
        (l += c), (s += d * c);
      }
      (i[n - 1][1] += i[n - 1][0] = r), l && (r -= s / l);
    }
    (i[n - 1][1] += i[n - 1][0] = r), Ni(e, t);
  }
}

function xo(e) {
  "@babel/helpers - typeof";
  return (
    (xo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xo(e)
  );
}
var RC = ["type", "size", "sizeType"];

function Up() {
  return (
    (Up = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Up.apply(this, arguments)
  );
}

function Em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function $m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Em(Object(r), !0).forEach(function (n) {
          BC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Em(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function BC(e, t, r) {
  return (
    (t = zC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function zC(e) {
  var t = FC(e, "string");
  return xo(t) == "symbol" ? t : t + "";
}

function FC(e, t) {
  if (xo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function UC(e, t) {
  if (e == null) return {};
  var r = WC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function WC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Vx = {
    symbolCircle: uv,
    symbolCross: cC,
    symbolDiamond: pC,
    symbolSquare: dC,
    symbolStar: mC,
    symbolTriangle: gC,
    symbolWye: wC,
  },
  HC = Math.PI / 180,
  VC = function (t) {
    var r = "symbol".concat(lc(t));
    return Vx[r] || uv;
  },
  KC = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * HC;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  GC = function (t, r) {
    Vx["symbol".concat(lc(t))] = r;
  },
  lv = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      l = UC(t, RC),
      s = $m(
        $m({}, l),
        {},
        {
          type: n,
          size: a,
          sizeType: u,
        },
      ),
      f = function () {
        var w = VC(n),
          v = xC()
            .type(w)
            .size(KC(a, u, n));
        return v();
      },
      c = s.className,
      p = s.cx,
      d = s.cy,
      y = re(s, !0);
    return p === +p && d === +d && a === +a
      ? A.createElement(
          "path",
          Up({}, y, {
            className: ue("recharts-symbols", c),
            transform: "translate(".concat(p, ", ").concat(d, ")"),
            d: f(),
          }),
        )
      : null;
  };
lv.registerSymbol = GC;

function Ii(e) {
  "@babel/helpers - typeof";
  return (
    (Ii =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ii(e)
  );
}

function Wp() {
  return (
    (Wp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wp.apply(this, arguments)
  );
}

function Tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function qC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tm(Object(r), !0).forEach(function (n) {
          So(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function XC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function YC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Gx(n.key), n);
  }
}

function QC(e, t, r) {
  return (
    t && YC(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function ZC(e, t, r) {
  return (
    (t = Bl(t)),
    JC(
      e,
      Kx() ? Reflect.construct(t, r || [], Bl(e).constructor) : t.apply(e, r),
    )
  );
}

function JC(e, t) {
  if (t && (Ii(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return ek(e);
}

function ek(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function Kx() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Kx = function () {
    return !!e;
  })();
}

function Bl(e) {
  return (
    (Bl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bl(e)
  );
}

function tk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Hp(e, t);
}

function Hp(e, t) {
  return (
    (Hp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Hp(e, t)
  );
}

function So(e, t, r) {
  return (
    (t = Gx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function Gx(e) {
  var t = rk(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}

function rk(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ct = 32,
  sv = (function (e) {
    function t() {
      return XC(this, t), ZC(this, t, arguments);
    }
    return (
      tk(t, e),
      QC(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = Ct / 2,
              o = Ct / 6,
              u = Ct / 3,
              l = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return A.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: Ct,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return A.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: l,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(Ct, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return A.createElement("path", {
                stroke: "none",
                fill: l,
                d: "M0,"
                  .concat(Ct / 8, "h")
                  .concat(Ct, "v")
                  .concat((Ct * 3) / 4, "h")
                  .concat(-Ct, "z"),
                className: "recharts-legend-icon",
              });
            if (A.isValidElement(n.legendIcon)) {
              var s = qC({}, n);
              return delete s.legendIcon, A.cloneElement(n.legendIcon, s);
            }
            return A.createElement(lv, {
              fill: l,
              cx: a,
              cy: a,
              size: Ct,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              l = i.formatter,
              s = i.inactiveColor,
              f = {
                x: 0,
                y: 0,
                width: Ct,
                height: Ct,
              },
              c = {
                display: u === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              p = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (d, y) {
              var g = d.formatter || l,
                w = ue(
                  So(
                    So(
                      {
                        "recharts-legend-item": !0,
                      },
                      "legend-item-".concat(y),
                      !0,
                    ),
                    "inactive",
                    d.inactive,
                  ),
                );
              if (d.type === "none") return null;
              var v = te(d.value) ? null : d.value;
              In(
                !te(d.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var h = d.inactive ? s : d.color;
              return A.createElement(
                "li",
                Wp(
                  {
                    className: w,
                    style: c,
                    key: "legend-item-".concat(y),
                  },
                  Ml(n.props, d, y),
                ),
                A.createElement(
                  Np,
                  {
                    width: o,
                    height: o,
                    viewBox: f,
                    style: p,
                  },
                  n.renderIcon(d),
                ),
                A.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: {
                      color: h,
                    },
                  },
                  g ? g(v, d, y) : v,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return A.createElement(
              "ul",
              {
                className: "recharts-default-legend",
                style: u,
              },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(F.PureComponent);
So(sv, "displayName", "Legend");
So(sv, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var nk = Xs;

function ik() {
  (this.__data__ = new nk()), (this.size = 0);
}
var ak = ik;

function ok(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var uk = ok;

function lk(e) {
  return this.__data__.get(e);
}
var sk = lk;

function ck(e) {
  return this.__data__.has(e);
}
var fk = ck,
  pk = Xs,
  dk = Yh,
  hk = Qh,
  vk = 200;

function yk(e, t) {
  var r = this.__data__;
  if (r instanceof pk) {
    var n = r.__data__;
    if (!dk || n.length < vk - 1)
      return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new hk(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var mk = yk,
  gk = Xs,
  bk = ak,
  wk = uk,
  xk = sk,
  Sk = fk,
  Ok = mk;

function fa(e) {
  var t = (this.__data__ = new gk(e));
  this.size = t.size;
}
fa.prototype.clear = bk;
fa.prototype.delete = wk;
fa.prototype.get = xk;
fa.prototype.has = Sk;
fa.prototype.set = Ok;
var qx = fa,
  _k = "__lodash_hash_undefined__";

function Pk(e) {
  return this.__data__.set(e, _k), this;
}
var Ak = Pk;

function Ek(e) {
  return this.__data__.has(e);
}
var $k = Ek,
  Tk = Qh,
  jk = Ak,
  Ck = $k;

function zl(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new Tk(); ++t < r; ) this.add(e[t]);
}
zl.prototype.add = zl.prototype.push = jk;
zl.prototype.has = Ck;
var Xx = zl;

function kk(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var Yx = kk;

function Mk(e, t) {
  return e.has(t);
}
var Qx = Mk,
  Nk = Xx,
  Ik = Yx,
  Dk = Qx,
  Lk = 1,
  Rk = 2;

function Bk(e, t, r, n, i, a) {
  var o = r & Lk,
    u = e.length,
    l = t.length;
  if (u != l && !(o && l > u)) return !1;
  var s = a.get(e),
    f = a.get(t);
  if (s && f) return s == t && f == e;
  var c = -1,
    p = !0,
    d = r & Rk ? new Nk() : void 0;
  for (a.set(e, t), a.set(t, e); ++c < u; ) {
    var y = e[c],
      g = t[c];
    if (n) var w = o ? n(g, y, c, t, e, a) : n(y, g, c, e, t, a);
    if (w !== void 0) {
      if (w) continue;
      p = !1;
      break;
    }
    if (d) {
      if (
        !Ik(t, function (v, h) {
          if (!Dk(d, h) && (y === v || i(y, v, r, n, a))) return d.push(h);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(y === g || i(y, g, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Zx = Bk,
  zk = hr,
  Fk = zk.Uint8Array,
  Uk = Fk;

function Wk(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var Hk = Wk;

function Vk(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var cv = Vk,
  jm = lu,
  Cm = Uk,
  Kk = Xh,
  Gk = Zx,
  qk = Hk,
  Xk = cv,
  Yk = 1,
  Qk = 2,
  Zk = "[object Boolean]",
  Jk = "[object Date]",
  eM = "[object Error]",
  tM = "[object Map]",
  rM = "[object Number]",
  nM = "[object RegExp]",
  iM = "[object Set]",
  aM = "[object String]",
  oM = "[object Symbol]",
  uM = "[object ArrayBuffer]",
  lM = "[object DataView]",
  km = jm ? jm.prototype : void 0,
  vf = km ? km.valueOf : void 0;

function sM(e, t, r, n, i, a, o) {
  switch (r) {
    case lM:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case uM:
      return !(e.byteLength != t.byteLength || !a(new Cm(e), new Cm(t)));
    case Zk:
    case Jk:
    case rM:
      return Kk(+e, +t);
    case eM:
      return e.name == t.name && e.message == t.message;
    case nM:
    case aM:
      return e == t + "";
    case tM:
      var u = qk;
    case iM:
      var l = n & Yk;
      if ((u || (u = Xk), e.size != t.size && !l)) return !1;
      var s = o.get(e);
      if (s) return s == t;
      (n |= Qk), o.set(e, t);
      var f = Gk(u(e), u(t), n, i, a, o);
      return o.delete(e), f;
    case oM:
      if (vf) return vf.call(e) == vf.call(t);
  }
  return !1;
}
var cM = sM;

function fM(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var Jx = fM,
  pM = Jx,
  dM = mt;

function hM(e, t, r) {
  var n = t(e);
  return dM(e) ? n : pM(n, r(e));
}
var vM = hM;

function yM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var mM = yM;

function gM() {
  return [];
}
var bM = gM,
  wM = mM,
  xM = bM,
  SM = Object.prototype,
  OM = SM.propertyIsEnumerable,
  Mm = Object.getOwnPropertySymbols,
  _M = Mm
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            wM(Mm(e), function (t) {
              return OM.call(e, t);
            }));
      }
    : xM,
  PM = _M;

function AM(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var EM = AM,
  $M = Ir,
  TM = Dr,
  jM = "[object Arguments]";

function CM(e) {
  return TM(e) && $M(e) == jM;
}
var kM = CM,
  Nm = kM,
  MM = Dr,
  eS = Object.prototype,
  NM = eS.hasOwnProperty,
  IM = eS.propertyIsEnumerable,
  DM = Nm(
    (function () {
      return arguments;
    })(),
  )
    ? Nm
    : function (e) {
        return MM(e) && NM.call(e, "callee") && !IM.call(e, "callee");
      },
  fv = DM,
  Fl = {
    exports: {},
  };

function LM() {
  return !1;
}
var RM = LM;
Fl.exports;
(function (e, t) {
  var r = hr,
    n = RM,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    l = u ? u.isBuffer : void 0,
    s = l || n;
  e.exports = s;
})(Fl, Fl.exports);
var tS = Fl.exports,
  BM = 9007199254740991,
  zM = /^(?:0|[1-9]\d*)$/;

function FM(e, t) {
  var r = typeof e;
  return (
    (t = t ?? BM),
    !!t &&
      (r == "number" || (r != "symbol" && zM.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var pv = FM,
  UM = 9007199254740991;

function WM(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UM;
}
var dv = WM,
  HM = Ir,
  VM = dv,
  KM = Dr,
  GM = "[object Arguments]",
  qM = "[object Array]",
  XM = "[object Boolean]",
  YM = "[object Date]",
  QM = "[object Error]",
  ZM = "[object Function]",
  JM = "[object Map]",
  eN = "[object Number]",
  tN = "[object Object]",
  rN = "[object RegExp]",
  nN = "[object Set]",
  iN = "[object String]",
  aN = "[object WeakMap]",
  oN = "[object ArrayBuffer]",
  uN = "[object DataView]",
  lN = "[object Float32Array]",
  sN = "[object Float64Array]",
  cN = "[object Int8Array]",
  fN = "[object Int16Array]",
  pN = "[object Int32Array]",
  dN = "[object Uint8Array]",
  hN = "[object Uint8ClampedArray]",
  vN = "[object Uint16Array]",
  yN = "[object Uint32Array]",
  me = {};
me[lN] =
  me[sN] =
  me[cN] =
  me[fN] =
  me[pN] =
  me[dN] =
  me[hN] =
  me[vN] =
  me[yN] =
    !0;
me[GM] =
  me[qM] =
  me[oN] =
  me[XM] =
  me[uN] =
  me[YM] =
  me[QM] =
  me[ZM] =
  me[JM] =
  me[eN] =
  me[tN] =
  me[rN] =
  me[nN] =
  me[iN] =
  me[aN] =
    !1;

function mN(e) {
  return KM(e) && VM(e.length) && !!me[HM(e)];
}
var gN = mN;

function bN(e) {
  return function (t) {
    return e(t);
  };
}
var rS = bN,
  Ul = {
    exports: {},
  };
Ul.exports;
(function (e, t) {
  var r = sx,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var l = i && i.require && i.require("util").types;
        return l || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = u;
})(Ul, Ul.exports);
var wN = Ul.exports,
  xN = gN,
  SN = rS,
  Im = wN,
  Dm = Im && Im.isTypedArray,
  ON = Dm ? SN(Dm) : xN,
  nS = ON,
  _N = EM,
  PN = fv,
  AN = mt,
  EN = tS,
  $N = pv,
  TN = nS,
  jN = Object.prototype,
  CN = jN.hasOwnProperty;

function kN(e, t) {
  var r = AN(e),
    n = !r && PN(e),
    i = !r && !n && EN(e),
    a = !r && !n && !i && TN(e),
    o = r || n || i || a,
    u = o ? _N(e.length, String) : [],
    l = u.length;
  for (var s in e)
    (t || CN.call(e, s)) &&
      !(
        o &&
        (s == "length" ||
          (i && (s == "offset" || s == "parent")) ||
          (a && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          $N(s, l))
      ) &&
      u.push(s);
  return u;
}
var MN = kN,
  NN = Object.prototype;

function IN(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || NN;
  return e === r;
}
var DN = IN;

function LN(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var iS = LN,
  RN = iS,
  BN = RN(Object.keys, Object),
  zN = BN,
  FN = DN,
  UN = zN,
  WN = Object.prototype,
  HN = WN.hasOwnProperty;

function VN(e) {
  if (!FN(e)) return UN(e);
  var t = [];
  for (var r in Object(e)) HN.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var KN = VN,
  GN = qh,
  qN = dv;

function XN(e) {
  return e != null && qN(e.length) && !GN(e);
}
var pc = XN,
  YN = MN,
  QN = KN,
  ZN = pc;

function JN(e) {
  return ZN(e) ? YN(e) : QN(e);
}
var hv = JN,
  eI = vM,
  tI = PM,
  rI = hv;

function nI(e) {
  return eI(e, rI, tI);
}
var iI = nI,
  Lm = iI,
  aI = 1,
  oI = Object.prototype,
  uI = oI.hasOwnProperty;

function lI(e, t, r, n, i, a) {
  var o = r & aI,
    u = Lm(e),
    l = u.length,
    s = Lm(t),
    f = s.length;
  if (l != f && !o) return !1;
  for (var c = l; c--; ) {
    var p = u[c];
    if (!(o ? p in t : uI.call(t, p))) return !1;
  }
  var d = a.get(e),
    y = a.get(t);
  if (d && y) return d == t && y == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var w = o; ++c < l; ) {
    p = u[c];
    var v = e[p],
      h = t[p];
    if (n) var m = o ? n(h, v, p, t, e, a) : n(v, h, p, e, t, a);
    if (!(m === void 0 ? v === h || i(v, h, r, n, a) : m)) {
      g = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (g && !w) {
    var S = e.constructor,
      b = t.constructor;
    S != b &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof S == "function" &&
        S instanceof S &&
        typeof b == "function" &&
        b instanceof b
      ) &&
      (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var sI = lI,
  cI = qn,
  fI = hr,
  pI = cI(fI, "DataView"),
  dI = pI,
  hI = qn,
  vI = hr,
  yI = hI(vI, "Promise"),
  mI = yI,
  gI = qn,
  bI = hr,
  wI = gI(bI, "Set"),
  aS = wI,
  xI = qn,
  SI = hr,
  OI = xI(SI, "WeakMap"),
  _I = OI,
  Vp = dI,
  Kp = Yh,
  Gp = mI,
  qp = aS,
  Xp = _I,
  oS = Ir,
  pa = fx,
  Rm = "[object Map]",
  PI = "[object Object]",
  Bm = "[object Promise]",
  zm = "[object Set]",
  Fm = "[object WeakMap]",
  Um = "[object DataView]",
  AI = pa(Vp),
  EI = pa(Kp),
  $I = pa(Gp),
  TI = pa(qp),
  jI = pa(Xp),
  On = oS;
((Vp && On(new Vp(new ArrayBuffer(1))) != Um) ||
  (Kp && On(new Kp()) != Rm) ||
  (Gp && On(Gp.resolve()) != Bm) ||
  (qp && On(new qp()) != zm) ||
  (Xp && On(new Xp()) != Fm)) &&
  (On = function (e) {
    var t = oS(e),
      r = t == PI ? e.constructor : void 0,
      n = r ? pa(r) : "";
    if (n)
      switch (n) {
        case AI:
          return Um;
        case EI:
          return Rm;
        case $I:
          return Bm;
        case TI:
          return zm;
        case jI:
          return Fm;
      }
    return t;
  });
var CI = On,
  yf = qx,
  kI = Zx,
  MI = cM,
  NI = sI,
  Wm = CI,
  Hm = mt,
  Vm = tS,
  II = nS,
  DI = 1,
  Km = "[object Arguments]",
  Gm = "[object Array]",
  Du = "[object Object]",
  LI = Object.prototype,
  qm = LI.hasOwnProperty;

function RI(e, t, r, n, i, a) {
  var o = Hm(e),
    u = Hm(t),
    l = o ? Gm : Wm(e),
    s = u ? Gm : Wm(t);
  (l = l == Km ? Du : l), (s = s == Km ? Du : s);
  var f = l == Du,
    c = s == Du,
    p = l == s;
  if (p && Vm(e)) {
    if (!Vm(t)) return !1;
    (o = !0), (f = !1);
  }
  if (p && !f)
    return (
      a || (a = new yf()),
      o || II(e) ? kI(e, t, r, n, i, a) : MI(e, t, l, r, n, i, a)
    );
  if (!(r & DI)) {
    var d = f && qm.call(e, "__wrapped__"),
      y = c && qm.call(t, "__wrapped__");
    if (d || y) {
      var g = d ? e.value() : e,
        w = y ? t.value() : t;
      return a || (a = new yf()), i(g, w, r, n, a);
    }
  }
  return p ? (a || (a = new yf()), NI(e, t, r, n, i, a)) : !1;
}
var BI = RI,
  zI = BI,
  Xm = Dr;

function uS(e, t, r, n, i) {
  return e === t
    ? !0
    : e == null || t == null || (!Xm(e) && !Xm(t))
      ? e !== e && t !== t
      : zI(e, t, r, n, uS, i);
}
var vv = uS,
  FI = qx,
  UI = vv,
  WI = 1,
  HI = 2;

function VI(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var l = u[0],
      s = e[l],
      f = u[1];
    if (o && u[2]) {
      if (s === void 0 && !(l in e)) return !1;
    } else {
      var c = new FI();
      if (n) var p = n(s, f, l, e, t, c);
      if (!(p === void 0 ? UI(f, s, WI | HI, n, c) : p)) return !1;
    }
  }
  return !0;
}
var KI = VI,
  GI = pn;

function qI(e) {
  return e === e && !GI(e);
}
var lS = qI,
  XI = lS,
  YI = hv;

function QI(e) {
  for (var t = YI(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, XI(i)];
  }
  return t;
}
var ZI = QI;

function JI(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var sS = JI,
  eD = KI,
  tD = ZI,
  rD = sS;

function nD(e) {
  var t = tD(e);
  return t.length == 1 && t[0][2]
    ? rD(t[0][0], t[0][1])
    : function (r) {
        return r === e || eD(r, e, t);
      };
}
var iD = nD;

function aD(e, t) {
  return e != null && t in Object(e);
}
var oD = aD,
  uD = yx,
  lD = fv,
  sD = mt,
  cD = pv,
  fD = dv,
  pD = Qs;

function dD(e, t, r) {
  t = uD(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = pD(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && fD(i) && cD(o, i) && (sD(e) || lD(e)));
}
var hD = dD,
  vD = oD,
  yD = hD;

function mD(e, t) {
  return e != null && yD(e, t, vD);
}
var gD = mD,
  bD = vv,
  wD = mx,
  xD = gD,
  SD = Gh,
  OD = lS,
  _D = sS,
  PD = Qs,
  AD = 1,
  ED = 2;

function $D(e, t) {
  return SD(e) && OD(t)
    ? _D(PD(e), t)
    : function (r) {
        var n = wD(r, e);
        return n === void 0 && n === t ? xD(r, e) : bD(t, n, AD | ED);
      };
}
var TD = $D;

function jD(e) {
  return e;
}
var da = jD;

function CD(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var kD = CD,
  MD = ev;

function ND(e) {
  return function (t) {
    return MD(t, e);
  };
}
var ID = ND,
  DD = kD,
  LD = ID,
  RD = Gh,
  BD = Qs;

function zD(e) {
  return RD(e) ? DD(BD(e)) : LD(e);
}
var FD = zD,
  UD = iD,
  WD = TD,
  HD = da,
  VD = mt,
  KD = FD;

function GD(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? HD
      : typeof e == "object"
        ? VD(e)
          ? WD(e[0], e[1])
          : UD(e)
        : KD(e);
}
var ha = GD;

function qD(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var XD = qD;

function YD(e) {
  return e !== e;
}
var QD = YD;

function ZD(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var JD = ZD,
  eL = XD,
  tL = QD,
  rL = JD;

function nL(e, t, r) {
  return t === t ? rL(e, t, r) : eL(e, tL, r);
}
var iL = nL,
  aL = iL;

function oL(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && aL(e, t, 0) > -1;
}
var uL = oL;

function lL(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n])) return !0;
  return !1;
}
var sL = lL;

function cL() {}
var fL = cL,
  mf = aS,
  pL = fL,
  dL = cv,
  hL = 1 / 0,
  vL =
    mf && 1 / dL(new mf([, -0]))[1] == hL
      ? function (e) {
          return new mf(e);
        }
      : pL,
  yL = vL,
  mL = Xx,
  gL = uL,
  bL = sL,
  wL = Qx,
  xL = yL,
  SL = cv,
  OL = 200;

function _L(e, t, r) {
  var n = -1,
    i = gL,
    a = e.length,
    o = !0,
    u = [],
    l = u;
  if (r) (o = !1), (i = bL);
  else if (a >= OL) {
    var s = t ? null : xL(e);
    if (s) return SL(s);
    (o = !1), (i = wL), (l = new mL());
  } else l = t ? [] : u;
  e: for (; ++n < a; ) {
    var f = e[n],
      c = t ? t(f) : f;
    if (((f = r || f !== 0 ? f : 0), o && c === c)) {
      for (var p = l.length; p--; ) if (l[p] === c) continue e;
      t && l.push(c), u.push(f);
    } else i(l, c, r) || (l !== u && l.push(c), u.push(f));
  }
  return u;
}
var PL = _L,
  AL = ha,
  EL = PL;

function $L(e, t) {
  return e && e.length ? EL(e, AL(t)) : [];
}
var TL = $L;
const Ym = ve(TL);

function cS(e, t, r) {
  return t === !0 ? Ym(e, r) : te(t) ? Ym(e, t) : e;
}

function Di(e) {
  "@babel/helpers - typeof";
  return (
    (Di =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Di(e)
  );
}
var jL = ["ref"];

function Qm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qm(Object(r), !0).forEach(function (n) {
          dc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function CL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function Zm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pS(n.key), n);
  }
}

function kL(e, t, r) {
  return (
    t && Zm(e.prototype, t),
    r && Zm(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function ML(e, t, r) {
  return (
    (t = Wl(t)),
    NL(
      e,
      fS() ? Reflect.construct(t, r || [], Wl(e).constructor) : t.apply(e, r),
    )
  );
}

function NL(e, t) {
  if (t && (Di(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return IL(e);
}

function IL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function fS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (fS = function () {
    return !!e;
  })();
}

function Wl(e) {
  return (
    (Wl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Wl(e)
  );
}

function DL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Yp(e, t);
}

function Yp(e, t) {
  return (
    (Yp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Yp(e, t)
  );
}

function dc(e, t, r) {
  return (
    (t = pS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function pS(e) {
  var t = LL(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}

function LL(e, t) {
  if (Di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function RL(e, t) {
  if (e == null) return {};
  var r = BL(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function BL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function zL(e) {
  return e.value;
}

function FL(e, t) {
  if (A.isValidElement(e)) return A.cloneElement(e, t);
  if (typeof e == "function") return A.createElement(e, t);
  t.ref;
  var r = RL(t, jL);
  return A.createElement(sv, r);
}
var Jm = 1,
  _i = (function (e) {
    function t() {
      var r;
      CL(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = ML(this, t, [].concat(i))),
        dc(r, "lastBoundingBox", {
          width: -1,
          height: -1,
        }),
        r
      );
    }
    return (
      DL(t, e),
      kL(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Jm ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Jm) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? vr({}, this.lastBoundingBox)
                : {
                    width: 0,
                    height: 0,
                  };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                l = i.margin,
                s = i.chartWidth,
                f = i.chartHeight,
                c,
                p;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var d = this.getBBoxSnapshot();
                  c = {
                    left: ((s || 0) - d.width) / 2,
                  };
                } else
                  c =
                    o === "right"
                      ? {
                          right: (l && l.right) || 0,
                        }
                      : {
                          left: (l && l.left) || 0,
                        };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var y = this.getBBoxSnapshot();
                  p = {
                    top: ((f || 0) - y.height) / 2,
                  };
                } else
                  p =
                    u === "bottom"
                      ? {
                          bottom: (l && l.bottom) || 0,
                        }
                      : {
                          top: (l && l.top) || 0,
                        };
              return vr(vr({}, c), p);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                l = i.wrapperStyle,
                s = i.payloadUniqBy,
                f = i.payload,
                c = vr(
                  vr(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: u || "auto",
                    },
                    this.getDefaultPosition(l),
                  ),
                  l,
                );
              return A.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: c,
                  ref: function (d) {
                    n.wrapperNode = d;
                  },
                },
                FL(
                  a,
                  vr(
                    vr({}, this.props),
                    {},
                    {
                      payload: cS(f, s, zL),
                    },
                  ),
                ),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = vr(vr({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && W(n.props.height)
                ? {
                    height: n.props.height,
                  }
                : o === "horizontal"
                  ? {
                      width: n.props.width || i,
                    }
                  : null;
            },
          },
        ],
      )
    );
  })(F.PureComponent);
dc(_i, "displayName", "Legend");
dc(_i, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var eg = lu,
  UL = fv,
  WL = mt,
  tg = eg ? eg.isConcatSpreadable : void 0;

function HL(e) {
  return WL(e) || UL(e) || !!(tg && e && e[tg]);
}
var VL = HL,
  KL = Jx,
  GL = VL;

function dS(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = GL), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u)
      ? t > 1
        ? dS(u, t - 1, r, n, i)
        : KL(i, u)
      : n || (i[i.length] = u);
  }
  return i;
}
var hS = dS;

function qL(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var l = o[e ? u : ++i];
      if (r(a[l], l, a) === !1) break;
    }
    return t;
  };
}
var XL = qL,
  YL = XL,
  QL = YL(),
  ZL = QL,
  JL = ZL,
  eR = hv;

function tR(e, t) {
  return e && JL(e, t, eR);
}
var vS = tR,
  rR = pc;

function nR(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!rR(r)) return e(r, n);
    for (
      var i = r.length, a = t ? i : -1, o = Object(r);
      (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;

    );
    return r;
  };
}
var iR = nR,
  aR = vS,
  oR = iR,
  uR = oR(aR),
  yv = uR,
  lR = yv,
  sR = pc;

function cR(e, t) {
  var r = -1,
    n = sR(e) ? Array(e.length) : [];
  return (
    lR(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var yS = cR;

function fR(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var pR = fR,
  rg = aa;

function dR(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = rg(e),
      o = t !== void 0,
      u = t === null,
      l = t === t,
      s = rg(t);
    if (
      (!u && !s && !a && e > t) ||
      (a && o && l && !u && !s) ||
      (n && o && l) ||
      (!r && l) ||
      !i
    )
      return 1;
    if (
      (!n && !a && !s && e < t) ||
      (s && r && i && !n && !a) ||
      (u && r && i) ||
      (!o && i) ||
      !l
    )
      return -1;
  }
  return 0;
}
var hR = dR,
  vR = hR;

function yR(e, t, r) {
  for (
    var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length;
    ++n < o;

  ) {
    var l = vR(i[n], a[n]);
    if (l) {
      if (n >= u) return l;
      var s = r[n];
      return l * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var mR = yR,
  gf = Jh,
  gR = ev,
  bR = ha,
  wR = yS,
  xR = pR,
  SR = rS,
  OR = mR,
  _R = da,
  PR = mt;

function AR(e, t, r) {
  t.length
    ? (t = gf(t, function (a) {
        return PR(a)
          ? function (o) {
              return gR(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [_R]);
  var n = -1;
  t = gf(t, SR(bR));
  var i = wR(e, function (a, o, u) {
    var l = gf(t, function (s) {
      return s(a);
    });
    return {
      criteria: l,
      index: ++n,
      value: a,
    };
  });
  return xR(i, function (a, o) {
    return OR(a, o, r);
  });
}
var ER = AR;

function $R(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var TR = $R,
  jR = TR,
  ng = Math.max;

function CR(e, t, r) {
  return (
    (t = ng(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, i = -1, a = ng(n.length - t, 0), o = Array(a);
        ++i < a;

      )
        o[i] = n[t + i];
      i = -1;
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
      return (u[t] = r(o)), jR(e, this, u);
    }
  );
}
var kR = CR;

function MR(e) {
  return function () {
    return e;
  };
}
var NR = MR,
  IR = qn,
  DR = (function () {
    try {
      var e = IR(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  mS = DR,
  LR = NR,
  ig = mS,
  RR = da,
  BR = ig
    ? function (e, t) {
        return ig(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: LR(t),
          writable: !0,
        });
      }
    : RR,
  zR = BR,
  FR = 800,
  UR = 16,
  WR = Date.now;

function HR(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = WR(),
      i = UR - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= FR) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var VR = HR,
  KR = zR,
  GR = VR,
  qR = GR(KR),
  XR = qR,
  YR = da,
  QR = kR,
  ZR = XR;

function JR(e, t) {
  return ZR(QR(e, t, YR), e + "");
}
var e3 = JR,
  t3 = Xh,
  r3 = pc,
  n3 = pv,
  i3 = pn;

function a3(e, t, r) {
  if (!i3(r)) return !1;
  var n = typeof t;
  return (n == "number" ? r3(r) && n3(t, r.length) : n == "string" && t in r)
    ? t3(r[t], e)
    : !1;
}
var hc = a3,
  o3 = hS,
  u3 = ER,
  l3 = e3,
  ag = hc,
  s3 = l3(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && ag(e, t[0], t[1])
        ? (t = [])
        : r > 2 && ag(t[0], t[1], t[2]) && (t = [t[0]]),
      u3(e, o3(t, 1), [])
    );
  }),
  c3 = s3;
const mv = ve(c3);

function Oo(e) {
  "@babel/helpers - typeof";
  return (
    (Oo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Oo(e)
  );
}

function Qp() {
  return (
    (Qp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qp.apply(this, arguments)
  );
}

function f3(e, t) {
  return v3(e) || h3(e, t) || d3(e, t) || p3();
}

function p3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function d3(e, t) {
  if (e) {
    if (typeof e == "string") return og(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return og(e, t);
  }
}

function og(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function h3(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function v3(e) {
  if (Array.isArray(e)) return e;
}

function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ug(Object(r), !0).forEach(function (n) {
          y3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ug(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function y3(e, t, r) {
  return (
    (t = m3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function m3(e) {
  var t = g3(e, "string");
  return Oo(t) == "symbol" ? t : t + "";
}

function g3(e, t) {
  if (Oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function b3(e) {
  return Array.isArray(e) && ze(e[0]) && ze(e[1]) ? e.join(" ~ ") : e;
}
var w3 = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    l = t.labelStyle,
    s = l === void 0 ? {} : l,
    f = t.payload,
    c = t.formatter,
    p = t.itemSorter,
    d = t.wrapperClassName,
    y = t.labelClassName,
    g = t.label,
    w = t.labelFormatter,
    v = t.accessibilityLayer,
    h = v === void 0 ? !1 : v,
    m = function () {
      if (f && f.length) {
        var j = {
            padding: 0,
            margin: 0,
          },
          k = (p ? mv(f, p) : f).map(function (I, M) {
            if (I.type === "none") return null;
            var D = bf(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: I.color || "#000",
                },
                u,
              ),
              L = I.formatter || c || b3,
              T = I.value,
              N = I.name,
              B = T,
              H = N;
            if (L && B != null && H != null) {
              var U = L(T, N, I, M, f);
              if (Array.isArray(U)) {
                var q = f3(U, 2);
                (B = q[0]), (H = q[1]);
              } else B = U;
            }
            return A.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(M),
                style: D,
              },
              ze(H)
                ? A.createElement(
                    "span",
                    {
                      className: "recharts-tooltip-item-name",
                    },
                    H,
                  )
                : null,
              ze(H)
                ? A.createElement(
                    "span",
                    {
                      className: "recharts-tooltip-item-separator",
                    },
                    n,
                  )
                : null,
              A.createElement(
                "span",
                {
                  className: "recharts-tooltip-item-value",
                },
                B,
              ),
              A.createElement(
                "span",
                {
                  className: "recharts-tooltip-item-unit",
                },
                I.unit || "",
              ),
            );
          });
        return A.createElement(
          "ul",
          {
            className: "recharts-tooltip-item-list",
            style: j,
          },
          k,
        );
      }
      return null;
    },
    S = bf(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    b = bf(
      {
        margin: 0,
      },
      s,
    ),
    x = !ne(g),
    O = x ? g : "",
    _ = ue("recharts-default-tooltip", d),
    P = ue("recharts-tooltip-label", y);
  x && w && f !== void 0 && f !== null && (O = w(g, f));
  var $ = h
    ? {
        role: "status",
        "aria-live": "assertive",
      }
    : {};
  return A.createElement(
    "div",
    Qp(
      {
        className: _,
        style: S,
      },
      $,
    ),
    A.createElement(
      "p",
      {
        className: P,
        style: b,
      },
      A.isValidElement(O) ? O : "".concat(O),
    ),
    m(),
  );
};

function _o(e) {
  "@babel/helpers - typeof";
  return (
    (_o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _o(e)
  );
}

function Lu(e, t, r) {
  return (
    (t = x3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function x3(e) {
  var t = S3(e, "string");
  return _o(t) == "symbol" ? t : t + "";
}

function S3(e, t) {
  if (_o(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $a = "recharts-tooltip-wrapper",
  O3 = {
    visibility: "hidden",
  };

function _3(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return ue(
    $a,
    Lu(
      Lu(
        Lu(
          Lu({}, "".concat($a, "-right"), W(r) && t && W(t.x) && r >= t.x),
          "".concat($a, "-left"),
          W(r) && t && W(t.x) && r < t.x,
        ),
        "".concat($a, "-bottom"),
        W(n) && t && W(t.y) && n >= t.y,
      ),
      "".concat($a, "-top"),
      W(n) && t && W(t.y) && n < t.y,
    ),
  );
}

function lg(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    l = e.viewBox,
    s = e.viewBoxDimension;
  if (a && W(a[n])) return a[n];
  var f = r[n] - u - i,
    c = r[n] + i;
  if (t[n]) return o[n] ? f : c;
  if (o[n]) {
    var p = f,
      d = l[n];
    return p < d ? Math.max(c, l[n]) : Math.max(f, l[n]);
  }
  var y = c + u,
    g = l[n] + s;
  return y > g ? Math.max(f, l[n]) : Math.max(c, l[n]);
}

function P3(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}

function A3(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    l = e.viewBox,
    s,
    f,
    c;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = lg({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: l,
          viewBoxDimension: l.width,
        })),
        (c = lg({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: l,
          viewBoxDimension: l.height,
        })),
        (s = P3({
          translateX: f,
          translateY: c,
          useTranslate3d: u,
        })))
      : (s = O3),
    {
      cssProperties: s,
      cssClasses: _3({
        translateX: f,
        translateY: c,
        coordinate: r,
      }),
    }
  );
}

function Li(e) {
  "@babel/helpers - typeof";
  return (
    (Li =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Li(e)
  );
}

function sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sg(Object(r), !0).forEach(function (n) {
          Jp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function E3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function $3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, bS(n.key), n);
  }
}

function T3(e, t, r) {
  return (
    t && $3(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function j3(e, t, r) {
  return (
    (t = Hl(t)),
    C3(
      e,
      gS() ? Reflect.construct(t, r || [], Hl(e).constructor) : t.apply(e, r),
    )
  );
}

function C3(e, t) {
  if (t && (Li(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return k3(e);
}

function k3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function gS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (gS = function () {
    return !!e;
  })();
}

function Hl(e) {
  return (
    (Hl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Hl(e)
  );
}

function M3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Zp(e, t);
}

function Zp(e, t) {
  return (
    (Zp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Zp(e, t)
  );
}

function Jp(e, t, r) {
  return (
    (t = bS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function bS(e) {
  var t = N3(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}

function N3(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fg = 1,
  I3 = (function (e) {
    function t() {
      var r;
      E3(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = j3(this, t, [].concat(i))),
        Jp(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: {
            x: 0,
            y: 0,
          },
          lastBoundingBox: {
            width: -1,
            height: -1,
          },
        }),
        Jp(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, l, s, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u =
                    (l = r.props.coordinate) === null || l === void 0
                      ? void 0
                      : l.x) !== null && u !== void 0
                    ? u
                    : 0,
                y:
                  (s =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      M3(t, e),
      T3(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > fg ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > fg) &&
                this.setState({
                  lastBoundingBox: {
                    width: n.width,
                    height: n.height,
                  },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({
                  lastBoundingBox: {
                    width: -1,
                    height: -1,
                  },
                });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              l = i.animationEasing,
              s = i.children,
              f = i.coordinate,
              c = i.hasPayload,
              p = i.isAnimationActive,
              d = i.offset,
              y = i.position,
              g = i.reverseDirection,
              w = i.useTranslate3d,
              v = i.viewBox,
              h = i.wrapperStyle,
              m = A3({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: d,
                position: y,
                reverseDirection: g,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: w,
                viewBox: v,
              }),
              S = m.cssClasses,
              b = m.cssProperties,
              x = cg(
                cg(
                  {
                    transition:
                      p && a ? "transform ".concat(u, "ms ").concat(l) : void 0,
                  },
                  b,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && c ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                h,
              );
            return A.createElement(
              "div",
              {
                tabIndex: -1,
                className: S,
                style: x,
                ref: function (_) {
                  n.wrapperNode = _;
                },
              },
              s,
            );
          },
        },
      ])
    );
  })(F.PureComponent),
  D3 = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  _r = {
    isSsr: D3(),
    get: function (t) {
      return _r[t];
    },
    set: function (t, r) {
      if (typeof t == "string") _r[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (i) {
            _r[i] = t[i];
          });
      }
    },
  };

function Ri(e) {
  "@babel/helpers - typeof";
  return (
    (Ri =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ri(e)
  );
}

function pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function dg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pg(Object(r), !0).forEach(function (n) {
          gv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function L3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function R3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xS(n.key), n);
  }
}

function B3(e, t, r) {
  return (
    t && R3(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function z3(e, t, r) {
  return (
    (t = Vl(t)),
    F3(
      e,
      wS() ? Reflect.construct(t, r || [], Vl(e).constructor) : t.apply(e, r),
    )
  );
}

function F3(e, t) {
  if (t && (Ri(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return U3(e);
}

function U3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function wS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (wS = function () {
    return !!e;
  })();
}

function Vl(e) {
  return (
    (Vl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vl(e)
  );
}

function W3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && ed(e, t);
}

function ed(e, t) {
  return (
    (ed = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    ed(e, t)
  );
}

function gv(e, t, r) {
  return (
    (t = xS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function xS(e) {
  var t = H3(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}

function H3(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function V3(e) {
  return e.dataKey;
}

function K3(e, t) {
  return A.isValidElement(e)
    ? A.cloneElement(e, t)
    : typeof e == "function"
      ? A.createElement(e, t)
      : A.createElement(w3, t);
}
var ar = (function (e) {
  function t() {
    return L3(this, t), z3(this, t, arguments);
  }
  return (
    W3(t, e),
    B3(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            l = i.animationEasing,
            s = i.content,
            f = i.coordinate,
            c = i.filterNull,
            p = i.isAnimationActive,
            d = i.offset,
            y = i.payload,
            g = i.payloadUniqBy,
            w = i.position,
            v = i.reverseDirection,
            h = i.useTranslate3d,
            m = i.viewBox,
            S = i.wrapperStyle,
            b = y ?? [];
          c &&
            b.length &&
            (b = cS(
              y.filter(function (O) {
                return (
                  O.value != null && (O.hide !== !0 || n.props.includeHidden)
                );
              }),
              g,
              V3,
            ));
          var x = b.length > 0;
          return A.createElement(
            I3,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: l,
              isAnimationActive: p,
              active: a,
              coordinate: f,
              hasPayload: x,
              offset: d,
              position: w,
              reverseDirection: v,
              useTranslate3d: h,
              viewBox: m,
              wrapperStyle: S,
            },
            K3(
              s,
              dg(
                dg({}, this.props),
                {},
                {
                  payload: b,
                },
              ),
            ),
          );
        },
      },
    ])
  );
})(F.PureComponent);
gv(ar, "displayName", "Tooltip");
gv(ar, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1,
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0,
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !_r.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1,
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  },
  wrapperStyle: {},
});
var G3 = hr,
  q3 = function () {
    return G3.Date.now();
  },
  X3 = q3,
  Y3 = /\s/;

function Q3(e) {
  for (var t = e.length; t-- && Y3.test(e.charAt(t)); );
  return t;
}
var Z3 = Q3,
  J3 = Z3,
  eB = /^\s+/;

function tB(e) {
  return e && e.slice(0, J3(e) + 1).replace(eB, "");
}
var rB = tB,
  nB = rB,
  hg = pn,
  iB = aa,
  vg = NaN,
  aB = /^[-+]0x[0-9a-f]+$/i,
  oB = /^0b[01]+$/i,
  uB = /^0o[0-7]+$/i,
  lB = parseInt;

function sB(e) {
  if (typeof e == "number") return e;
  if (iB(e)) return vg;
  if (hg(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hg(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = nB(e);
  var r = oB.test(e);
  return r || uB.test(e) ? lB(e.slice(2), r ? 2 : 8) : aB.test(e) ? vg : +e;
}
var SS = sB,
  cB = pn,
  wf = X3,
  yg = SS,
  fB = "Expected a function",
  pB = Math.max,
  dB = Math.min;

function hB(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    l,
    s = 0,
    f = !1,
    c = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(fB);
  (t = yg(t) || 0),
    cB(r) &&
      ((f = !!r.leading),
      (c = "maxWait" in r),
      (a = c ? pB(yg(r.maxWait) || 0, t) : a),
      (p = "trailing" in r ? !!r.trailing : p));

  function d(x) {
    var O = n,
      _ = i;
    return (n = i = void 0), (s = x), (o = e.apply(_, O)), o;
  }

  function y(x) {
    return (s = x), (u = setTimeout(v, t)), f ? d(x) : o;
  }

  function g(x) {
    var O = x - l,
      _ = x - s,
      P = t - O;
    return c ? dB(P, a - _) : P;
  }

  function w(x) {
    var O = x - l,
      _ = x - s;
    return l === void 0 || O >= t || O < 0 || (c && _ >= a);
  }

  function v() {
    var x = wf();
    if (w(x)) return h(x);
    u = setTimeout(v, g(x));
  }

  function h(x) {
    return (u = void 0), p && n ? d(x) : ((n = i = void 0), o);
  }

  function m() {
    u !== void 0 && clearTimeout(u), (s = 0), (n = l = i = u = void 0);
  }

  function S() {
    return u === void 0 ? o : h(wf());
  }

  function b() {
    var x = wf(),
      O = w(x);
    if (((n = arguments), (i = this), (l = x), O)) {
      if (u === void 0) return y(l);
      if (c) return clearTimeout(u), (u = setTimeout(v, t)), d(l);
    }
    return u === void 0 && (u = setTimeout(v, t)), o;
  }
  return (b.cancel = m), (b.flush = S), b;
}
var vB = hB,
  yB = vB,
  mB = pn,
  gB = "Expected a function";

function bB(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(gB);
  return (
    mB(r) &&
      ((n = "leading" in r ? !!r.leading : n),
      (i = "trailing" in r ? !!r.trailing : i)),
    yB(e, t, {
      leading: n,
      maxWait: t,
      trailing: i,
    })
  );
}
var wB = bB;
const OS = ve(wB);

function Po(e) {
  "@babel/helpers - typeof";
  return (
    (Po =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Po(e)
  );
}

function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Ru(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mg(Object(r), !0).forEach(function (n) {
          xB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function xB(e, t, r) {
  return (
    (t = SB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function SB(e) {
  var t = OB(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}

function OB(e, t) {
  if (Po(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function _B(e, t) {
  return $B(e) || EB(e, t) || AB(e, t) || PB();
}

function PB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function AB(e, t) {
  if (e) {
    if (typeof e == "string") return gg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gg(e, t);
  }
}

function gg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function EB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function $B(e) {
  if (Array.isArray(e)) return e;
}
var TB = F.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i =
        n === void 0
          ? {
              width: -1,
              height: -1,
            }
          : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      u = e.height,
      l = u === void 0 ? "100%" : u,
      s = e.minWidth,
      f = s === void 0 ? 0 : s,
      c = e.minHeight,
      p = e.maxHeight,
      d = e.children,
      y = e.debounce,
      g = y === void 0 ? 0 : y,
      w = e.id,
      v = e.className,
      h = e.onResize,
      m = e.style,
      S = m === void 0 ? {} : m,
      b = F.useRef(null),
      x = F.useRef();
    (x.current = h),
      F.useImperativeHandle(t, function () {
        return Object.defineProperty(b.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              b.current
            );
          },
          configurable: !0,
        });
      });
    var O = F.useState({
        containerWidth: i.width,
        containerHeight: i.height,
      }),
      _ = _B(O, 2),
      P = _[0],
      $ = _[1],
      E = F.useCallback(function (k, I) {
        $(function (M) {
          var D = Math.round(k),
            L = Math.round(I);
          return M.containerWidth === D && M.containerHeight === L
            ? M
            : {
                containerWidth: D,
                containerHeight: L,
              };
        });
      }, []);
    F.useEffect(
      function () {
        var k = function (N) {
          var B,
            H = N[0].contentRect,
            U = H.width,
            q = H.height;
          E(U, q), (B = x.current) === null || B === void 0 || B.call(x, U, q);
        };
        g > 0 &&
          (k = OS(k, g, {
            trailing: !0,
            leading: !1,
          }));
        var I = new ResizeObserver(k),
          M = b.current.getBoundingClientRect(),
          D = M.width,
          L = M.height;
        return (
          E(D, L),
          I.observe(b.current),
          function () {
            I.disconnect();
          }
        );
      },
      [E, g],
    );
    var j = F.useMemo(
      function () {
        var k = P.containerWidth,
          I = P.containerHeight;
        if (k < 0 || I < 0) return null;
        In(
          $n(o) || $n(l),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          l,
        ),
          In(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var M = $n(o) ? k : o,
          D = $n(l) ? I : l;
        r &&
          r > 0 &&
          (M ? (D = M / r) : D && (M = D * r), p && D > p && (D = p)),
          In(
            M > 0 || D > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            M,
            D,
            o,
            l,
            f,
            c,
            r,
          );
        var L = !Array.isArray(d) && Or(d.type).endsWith("Chart");
        return A.Children.map(d, function (T) {
          return wx.isElement(T)
            ? F.cloneElement(
                T,
                Ru(
                  {
                    width: M,
                    height: D,
                  },
                  L
                    ? {
                        style: Ru(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: D,
                            maxWidth: M,
                          },
                          T.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : T;
        });
      },
      [r, d, l, p, c, f, P, o],
    );
    return A.createElement(
      "div",
      {
        id: w ? "".concat(w) : void 0,
        className: ue("recharts-responsive-container", v),
        style: Ru(
          Ru({}, S),
          {},
          {
            width: o,
            height: l,
            minWidth: f,
            minHeight: c,
            maxHeight: p,
          },
        ),
        ref: b,
      },
      j,
    );
  }),
  _S = function (t) {
    return null;
  };
_S.displayName = "Cell";

function Ao(e) {
  "@babel/helpers - typeof";
  return (
    (Ao =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ao(e)
  );
}

function bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bg(Object(r), !0).forEach(function (n) {
          jB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function jB(e, t, r) {
  return (
    (t = CB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function CB(e) {
  var t = kB(e, "string");
  return Ao(t) == "symbol" ? t : t + "";
}

function kB(e, t) {
  if (Ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jn = {
    widthCache: {},
    cacheCount: 0,
  },
  MB = 2e3,
  NB = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  wg = "recharts_measurement_span";

function IB(e) {
  var t = td({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var Qa = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || _r.isSsr)
      return {
        width: 0,
        height: 0,
      };
    var n = IB(r),
      i = JSON.stringify({
        text: t,
        copyStyle: n,
      });
    if (Jn.widthCache[i]) return Jn.widthCache[i];
    try {
      var a = document.getElementById(wg);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", wg),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = td(td({}, NB), n);
      Object.assign(a.style, o), (a.textContent = "".concat(t));
      var u = a.getBoundingClientRect(),
        l = {
          width: u.width,
          height: u.height,
        };
      return (
        (Jn.widthCache[i] = l),
        ++Jn.cacheCount > MB && ((Jn.cacheCount = 0), (Jn.widthCache = {})),
        l
      );
    } catch {
      return {
        width: 0,
        height: 0,
      };
    }
  },
  DB = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };

function Eo(e) {
  "@babel/helpers - typeof";
  return (
    (Eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Eo(e)
  );
}

function Kl(e, t) {
  return zB(e) || BB(e, t) || RB(e, t) || LB();
}

function LB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function RB(e, t) {
  if (e) {
    if (typeof e == "string") return xg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return xg(e, t);
  }
}

function xg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function BB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function zB(e) {
  if (Array.isArray(e)) return e;
}

function FB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function Sg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, WB(n.key), n);
  }
}

function UB(e, t, r) {
  return (
    t && Sg(e.prototype, t),
    r && Sg(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function WB(e) {
  var t = HB(e, "string");
  return Eo(t) == "symbol" ? t : t + "";
}

function HB(e, t) {
  if (Eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Og = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  _g = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  VB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  KB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  PS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  GB = Object.keys(PS),
  hi = "NaN";

function qB(e, t) {
  return e * PS[t];
}
var Bu = (function () {
  function e(t, r) {
    FB(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !VB.test(r) && ((this.num = NaN), (this.unit = "")),
      GB.includes(r) && ((this.num = qB(t, r)), (this.unit = "px"));
  }
  return UB(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = KB.exec(r)) !== null && n !== void 0 ? n : [],
            a = Kl(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();

function AS(e) {
  if (e.includes(hi)) return hi;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = Og.exec(t)) !== null && r !== void 0 ? r : [],
      i = Kl(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      l = Bu.parse(a ?? ""),
      s = Bu.parse(u ?? ""),
      f = o === "*" ? l.multiply(s) : l.divide(s);
    if (f.isNaN()) return hi;
    t = t.replace(Og, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c,
      p = (c = _g.exec(t)) !== null && c !== void 0 ? c : [],
      d = Kl(p, 4),
      y = d[1],
      g = d[2],
      w = d[3],
      v = Bu.parse(y ?? ""),
      h = Bu.parse(w ?? ""),
      m = g === "+" ? v.add(h) : v.subtract(h);
    if (m.isNaN()) return hi;
    t = t.replace(_g, m.toString());
  }
  return t;
}
var Pg = /\(([^()]*)\)/;

function XB(e) {
  for (var t = e; t.includes("("); ) {
    var r = Pg.exec(t),
      n = Kl(r, 2),
      i = n[1];
    t = t.replace(Pg, AS(i));
  }
  return t;
}

function YB(e) {
  var t = e.replace(/\s+/g, "");
  return (t = XB(t)), (t = AS(t)), t;
}

function QB(e) {
  try {
    return YB(e);
  } catch {
    return hi;
  }
}

function xf(e) {
  var t = QB(e.slice(5, -1));
  return t === hi ? "" : t;
}
var ZB = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  JB = ["dx", "dy", "angle", "className", "breakAll"];

function rd() {
  return (
    (rd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rd.apply(this, arguments)
  );
}

function Ag(e, t) {
  if (e == null) return {};
  var r = e4(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function e4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function Eg(e, t) {
  return i4(e) || n4(e, t) || r4(e, t) || t4();
}

function t4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function r4(e, t) {
  if (e) {
    if (typeof e == "string") return $g(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $g(e, t);
  }
}

function $g(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function n4(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function i4(e) {
  if (Array.isArray(e)) return e;
}
var ES = /[ \f\n\r\t\v\u2028\u2029]+/,
  $S = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      ne(r) ||
        (n ? (a = r.toString().split("")) : (a = r.toString().split(ES)));
      var o = a.map(function (l) {
          return {
            word: l,
            width: Qa(l, i).width,
          };
        }),
        u = n ? 0 : Qa(" ", i).width;
      return {
        wordsWithComputedWidth: o,
        spaceWidth: u,
      };
    } catch {
      return null;
    }
  },
  a4 = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      l = t.style,
      s = t.breakAll,
      f = W(o),
      c = u,
      p = function () {
        var M =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return M.reduce(function (D, L) {
          var T = L.word,
            N = L.width,
            B = D[D.length - 1];
          if (B && (i == null || a || B.width + N + n < Number(i)))
            B.words.push(T), (B.width += N + n);
          else {
            var H = {
              words: [T],
              width: N,
            };
            D.push(H);
          }
          return D;
        }, []);
      },
      d = p(r),
      y = function (M) {
        return M.reduce(function (D, L) {
          return D.width > L.width ? D : L;
        });
      };
    if (!f) return d;
    for (
      var g = "…",
        w = function (M) {
          var D = c.slice(0, M),
            L = $S({
              breakAll: s,
              style: l,
              children: D + g,
            }).wordsWithComputedWidth,
            T = p(L),
            N = T.length > o || y(T).width > Number(i);
          return [N, T];
        },
        v = 0,
        h = c.length - 1,
        m = 0,
        S;
      v <= h && m <= c.length - 1;

    ) {
      var b = Math.floor((v + h) / 2),
        x = b - 1,
        O = w(x),
        _ = Eg(O, 2),
        P = _[0],
        $ = _[1],
        E = w(b),
        j = Eg(E, 1),
        k = j[0];
      if ((!P && !k && (v = b + 1), P && k && (h = b - 1), !P && k)) {
        S = $;
        break;
      }
      m++;
    }
    return S || d;
  },
  Tg = function (t) {
    var r = ne(t) ? [] : t.toString().split(ES);
    return [
      {
        words: r,
      },
    ];
  },
  o4 = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !_r.isSsr) {
      var l,
        s,
        f = $S({
          breakAll: o,
          children: i,
          style: a,
        });
      if (f) {
        var c = f.wordsWithComputedWidth,
          p = f.spaceWidth;
        (l = c), (s = p);
      } else return Tg(i);
      return a4(
        {
          breakAll: o,
          children: i,
          maxLines: u,
          style: a,
        },
        l,
        s,
        r,
        n,
      );
    }
    return Tg(i);
  },
  jg = "#808080",
  Gl = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      l = t.capHeight,
      s = l === void 0 ? "0.71em" : l,
      f = t.scaleToFit,
      c = f === void 0 ? !1 : f,
      p = t.textAnchor,
      d = p === void 0 ? "start" : p,
      y = t.verticalAnchor,
      g = y === void 0 ? "end" : y,
      w = t.fill,
      v = w === void 0 ? jg : w,
      h = Ag(t, ZB),
      m = F.useMemo(
        function () {
          return o4({
            breakAll: h.breakAll,
            children: h.children,
            maxLines: h.maxLines,
            scaleToFit: c,
            style: h.style,
            width: h.width,
          });
        },
        [h.breakAll, h.children, h.maxLines, c, h.style, h.width],
      ),
      S = h.dx,
      b = h.dy,
      x = h.angle,
      O = h.className,
      _ = h.breakAll,
      P = Ag(h, JB);
    if (!ze(n) || !ze(a)) return null;
    var $ = n + (W(S) ? S : 0),
      E = a + (W(b) ? b : 0),
      j;
    switch (g) {
      case "start":
        j = xf("calc(".concat(s, ")"));
        break;
      case "middle":
        j = xf(
          "calc("
            .concat((m.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(s, " / 2))"),
        );
        break;
      default:
        j = xf("calc(".concat(m.length - 1, " * -").concat(u, ")"));
        break;
    }
    var k = [];
    if (c) {
      var I = m[0].width,
        M = h.width;
      k.push("scale(".concat((W(M) ? M / I : 1) / I, ")"));
    }
    return (
      x && k.push("rotate(".concat(x, ", ").concat($, ", ").concat(E, ")")),
      k.length && (P.transform = k.join(" ")),
      A.createElement(
        "text",
        rd({}, re(P, !0), {
          x: $,
          y: E,
          className: ue("recharts-text", O),
          textAnchor: d,
          fill: v.includes("url") ? jg : v,
        }),
        m.map(function (D, L) {
          var T = D.words.join(_ ? "" : " ");
          return A.createElement(
            "tspan",
            {
              x: $,
              dy: L === 0 ? j : u,
              key: "".concat(T, "-").concat(L),
            },
            T,
          );
        }),
      )
    );
  };

function an(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}

function u4(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}

function bv(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = an), (r = (u, l) => an(e(u), l)), (n = (u, l) => e(u) - l))
    : ((t = e === an || e === u4 ? e : l4), (r = e), (n = e));

  function i(u, l, s = 0, f = u.length) {
    if (s < f) {
      if (t(l, l) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        r(u[c], l) < 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }

  function a(u, l, s = 0, f = u.length) {
    if (s < f) {
      if (t(l, l) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        r(u[c], l) <= 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }

  function o(u, l, s = 0, f = u.length) {
    const c = i(u, l, s, f - 1);
    return c > s && n(u[c - 1], l) > -n(u[c], l) ? c - 1 : c;
  }
  return {
    left: i,
    center: o,
    right: a,
  };
}

function l4() {
  return 0;
}

function TS(e) {
  return e === null ? NaN : +e;
}

function* s4(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const c4 = bv(an),
  fu = c4.right;
bv(TS).center;
class Cg extends Map {
  constructor(t, r = d4) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: {
          value: new Map(),
        },
        _key: {
          value: r,
        },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(kg(this, t));
  }
  has(t) {
    return super.has(kg(this, t));
  }
  set(t, r) {
    return super.set(f4(this, t), r);
  }
  delete(t) {
    return super.delete(p4(this, t));
  }
}

function kg({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}

function f4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}

function p4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
}

function d4(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}

function h4(e = an) {
  if (e === an) return jS;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}

function jS(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const v4 = Math.sqrt(50),
  y4 = Math.sqrt(10),
  m4 = Math.sqrt(2);

function ql(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= v4 ? 10 : a >= y4 ? 5 : a >= m4 ? 2 : 1;
  let u, l, s;
  return (
    i < 0
      ? ((s = Math.pow(10, -i) / o),
        (u = Math.round(e * s)),
        (l = Math.round(t * s)),
        u / s < e && ++u,
        l / s > t && --l,
        (s = -s))
      : ((s = Math.pow(10, i) * o),
        (u = Math.round(e / s)),
        (l = Math.round(t / s)),
        u * s < e && ++u,
        l * s > t && --l),
    l < u && 0.5 <= r && r < 2 ? ql(e, t, r * 2) : [u, l, s]
  );
}

function nd(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? ql(t, e, r) : ql(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    l = new Array(u);
  if (n)
    if (o < 0) for (let s = 0; s < u; ++s) l[s] = (a - s) / -o;
    else for (let s = 0; s < u; ++s) l[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * o;
  return l;
}

function id(e, t, r) {
  return (t = +t), (e = +e), (r = +r), ql(e, t, r)[2];
}

function ad(e, t, r) {
  (t = +t), (e = +e), (r = +r);
  const n = t < e,
    i = n ? id(t, e, r) : id(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}

function Mg(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}

function Ng(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}

function CS(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? jS : h4(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1,
        s = t - r + 1,
        f = Math.log(l),
        c = 0.5 * Math.exp((2 * f) / 3),
        p = 0.5 * Math.sqrt((f * c * (l - c)) / l) * (s - l / 2 < 0 ? -1 : 1),
        d = Math.max(r, Math.floor(t - (s * c) / l + p)),
        y = Math.min(n, Math.floor(t + ((l - s) * c) / l + p));
      CS(e, t, d, y, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (Ta(e, r, t), i(e[n], a) > 0 && Ta(e, r, n); o < u; ) {
      for (Ta(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Ta(e, r, u) : (++u, Ta(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1);
  }
  return e;
}

function Ta(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}

function g4(e, t, r) {
  if (((e = Float64Array.from(s4(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return Ng(e);
    if (t >= 1) return Mg(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Mg(CS(e, a).subarray(0, a + 1)),
      u = Ng(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}

function b4(e, t, r = TS) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}

function w4(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r);
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;

  )
    a[n] = e + n * r;
  return a;
}

function Wt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}

function Lr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const od = Symbol("implicit");

function wv() {
  var e = new Cg(),
    t = [],
    r = [],
    n = od;

  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== od) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Cg());
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return wv(t, r).unknown(n);
    }),
    Wt.apply(i, arguments),
    i
  );
}

function $o() {
  var e = wv().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    l = 0,
    s = 0,
    f = 0.5;
  delete e.unknown;

  function c() {
    var p = t().length,
      d = i < n,
      y = d ? i : n,
      g = d ? n : i;
    (a = (g - y) / Math.max(1, p - l + s * 2)),
      u && (a = Math.floor(a)),
      (y += (g - y - a * (p - l)) * f),
      (o = a * (1 - l)),
      u && ((y = Math.round(y)), (o = Math.round(o)));
    var w = w4(p).map(function (v) {
      return y + a * v;
    });
    return r(d ? w.reverse() : w);
  }
  return (
    (e.domain = function (p) {
      return arguments.length ? (t(p), c()) : t();
    }),
    (e.range = function (p) {
      return arguments.length
        ? (([n, i] = p), (n = +n), (i = +i), c())
        : [n, i];
    }),
    (e.rangeRound = function (p) {
      return ([n, i] = p), (n = +n), (i = +i), (u = !0), c();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (p) {
      return arguments.length ? ((u = !!p), c()) : u;
    }),
    (e.padding = function (p) {
      return arguments.length ? ((l = Math.min(1, (s = +p))), c()) : l;
    }),
    (e.paddingInner = function (p) {
      return arguments.length ? ((l = Math.min(1, p)), c()) : l;
    }),
    (e.paddingOuter = function (p) {
      return arguments.length ? ((s = +p), c()) : s;
    }),
    (e.align = function (p) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, p))), c()) : f;
    }),
    (e.copy = function () {
      return $o(t(), [n, i]).round(u).paddingInner(l).paddingOuter(s).align(f);
    }),
    Wt.apply(c(), arguments)
  );
}

function kS(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return kS(t());
    }),
    e
  );
}

function Za() {
  return kS($o.apply(null, arguments).paddingInner(1));
}

function xv(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}

function MS(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}

function pu() {}
var To = 0.7,
  Xl = 1 / To,
  Pi = "\\s*([+-]?\\d+)\\s*",
  jo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  fr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  x4 = /^#([0-9a-f]{3,8})$/,
  S4 = new RegExp(`^rgb\\(${Pi},${Pi},${Pi}\\)$`),
  O4 = new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),
  _4 = new RegExp(`^rgba\\(${Pi},${Pi},${Pi},${jo}\\)$`),
  P4 = new RegExp(`^rgba\\(${fr},${fr},${fr},${jo}\\)$`),
  A4 = new RegExp(`^hsl\\(${jo},${fr},${fr}\\)$`),
  E4 = new RegExp(`^hsla\\(${jo},${fr},${fr},${jo}\\)$`),
  Ig = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
xv(pu, Co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dg,
  formatHex: Dg,
  formatHex8: $4,
  formatHsl: T4,
  formatRgb: Lg,
  toString: Lg,
});

function Dg() {
  return this.rgb().formatHex();
}

function $4() {
  return this.rgb().formatHex8();
}

function T4() {
  return NS(this).formatHsl();
}

function Lg() {
  return this.rgb().formatRgb();
}

function Co(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = x4.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Rg(t)
          : r === 3
            ? new dt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? zu(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? zu(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = S4.exec(e))
        ? new dt(t[1], t[2], t[3], 1)
        : (t = O4.exec(e))
          ? new dt(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = _4.exec(e))
            ? zu(t[1], t[2], t[3], t[4])
            : (t = P4.exec(e))
              ? zu(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = A4.exec(e))
                ? Fg(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = E4.exec(e))
                  ? Fg(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Ig.hasOwnProperty(e)
                    ? Rg(Ig[e])
                    : e === "transparent"
                      ? new dt(NaN, NaN, NaN, 0)
                      : null
  );
}

function Rg(e) {
  return new dt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}

function zu(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new dt(e, t, r, n);
}

function j4(e) {
  return (
    e instanceof pu || (e = Co(e)),
    e ? ((e = e.rgb()), new dt(e.r, e.g, e.b, e.opacity)) : new dt()
  );
}

function ud(e, t, r, n) {
  return arguments.length === 1 ? j4(e) : new dt(e, t, r, n ?? 1);
}

function dt(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
xv(
  dt,
  ud,
  MS(pu, {
    brighter(e) {
      return (
        (e = e == null ? Xl : Math.pow(Xl, e)),
        new dt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? To : Math.pow(To, e)),
        new dt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new dt(Dn(this.r), Dn(this.g), Dn(this.b), Yl(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Bg,
    formatHex: Bg,
    formatHex8: C4,
    formatRgb: zg,
    toString: zg,
  }),
);

function Bg() {
  return `#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}`;
}

function C4() {
  return `#${Tn(this.r)}${Tn(this.g)}${Tn(this.b)}${Tn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function zg() {
  const e = Yl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dn(this.r)}, ${Dn(this.g)}, ${Dn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}

function Yl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}

function Dn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}

function Tn(e) {
  return (e = Dn(e)), (e < 16 ? "0" : "") + e.toString(16);
}

function Fg(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Yt(e, t, r, n)
  );
}

function NS(e) {
  if (e instanceof Yt) return new Yt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof pu || (e = Co(e)), !e)) return new Yt();
  if (e instanceof Yt) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    l = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= l < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = l > 0 && l < 1 ? 0 : o),
    new Yt(o, u, l, e.opacity)
  );
}

function k4(e, t, r, n) {
  return arguments.length === 1 ? NS(e) : new Yt(e, t, r, n ?? 1);
}

function Yt(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
xv(
  Yt,
  k4,
  MS(pu, {
    brighter(e) {
      return (
        (e = e == null ? Xl : Math.pow(Xl, e)),
        new Yt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? To : Math.pow(To, e)),
        new Yt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new dt(
        Sf(e >= 240 ? e - 240 : e + 120, i, n),
        Sf(e, i, n),
        Sf(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new Yt(Ug(this.h), Fu(this.s), Fu(this.l), Yl(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Yl(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Ug(this.h)}, ${Fu(this.s) * 100}%, ${Fu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);

function Ug(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}

function Fu(e) {
  return Math.max(0, Math.min(1, e || 0));
}

function Sf(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Sv = (e) => () => e;

function M4(e, t) {
  return function (r) {
    return e + r * t;
  };
}

function N4(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}

function I4(e) {
  return (e = +e) == 1
    ? IS
    : function (t, r) {
        return r - t ? N4(t, r, e) : Sv(isNaN(t) ? r : t);
      };
}

function IS(e, t) {
  var r = t - e;
  return r ? M4(e, r) : Sv(isNaN(e) ? t : e);
}
const Wg = (function e(t) {
  var r = I4(t);

  function n(i, a) {
    var o = r((i = ud(i)).r, (a = ud(a)).r),
      u = r(i.g, a.g),
      l = r(i.b, a.b),
      s = IS(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)), (i.g = u(f)), (i.b = l(f)), (i.opacity = s(f)), i + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);

function D4(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}

function L4(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}

function R4(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = va(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}

function B4(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}

function Ql(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}

function z4(e, t) {
  var r = {},
    n = {},
    i;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (r[i] = va(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var ld = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Of = new RegExp(ld.source, "g");

function F4(e) {
  return function () {
    return e;
  };
}

function U4(e) {
  return function (t) {
    return e(t) + "";
  };
}

function W4(e, t) {
  var r = (ld.lastIndex = Of.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    l = [];
  for (e = e + "", t = t + ""; (n = ld.exec(e)) && (i = Of.exec(t)); )
    (a = i.index) > r &&
      ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null),
          l.push({
            i: o,
            x: Ql(n, i),
          })),
      (r = Of.lastIndex);
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? l[0]
        ? U4(l[0].x)
        : F4(t)
      : ((t = l.length),
        function (s) {
          for (var f = 0, c; f < t; ++f) u[(c = l[f]).i] = c.x(s);
          return u.join("");
        })
  );
}

function va(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Sv(t)
    : (r === "number"
        ? Ql
        : r === "string"
          ? (n = Co(t))
            ? ((t = n), Wg)
            : W4
          : t instanceof Co
            ? Wg
            : t instanceof Date
              ? B4
              : L4(t)
                ? D4
                : Array.isArray(t)
                  ? R4
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? z4
                    : Ql)(e, t);
}

function Ov(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}

function H4(e, t) {
  t === void 0 && ((t = e), (e = va));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;

  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}

function V4(e) {
  return function () {
    return e;
  };
}

function Zl(e) {
  return +e;
}
var Hg = [0, 1];

function at(e) {
  return e;
}

function sd(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : V4(isNaN(t) ? NaN : 0.5);
}

function K4(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}

function G4(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = sd(i, n)), (a = r(o, a))) : ((n = sd(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}

function q4(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    (i[o] = sd(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
  return function (u) {
    var l = fu(e, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}

function du(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}

function vc() {
  var e = Hg,
    t = Hg,
    r = va,
    n,
    i,
    a,
    o = at,
    u,
    l,
    s;

  function f() {
    var p = Math.min(e.length, t.length);
    return (
      o !== at && (o = K4(e[0], e[p - 1])),
      (u = p > 2 ? q4 : G4),
      (l = s = null),
      c
    );
  }

  function c(p) {
    return p == null || isNaN((p = +p))
      ? a
      : (l || (l = u(e.map(n), t, r)))(n(o(p)));
  }
  return (
    (c.invert = function (p) {
      return o(i((s || (s = u(t, e.map(n), Ql)))(p)));
    }),
    (c.domain = function (p) {
      return arguments.length ? ((e = Array.from(p, Zl)), f()) : e.slice();
    }),
    (c.range = function (p) {
      return arguments.length ? ((t = Array.from(p)), f()) : t.slice();
    }),
    (c.rangeRound = function (p) {
      return (t = Array.from(p)), (r = Ov), f();
    }),
    (c.clamp = function (p) {
      return arguments.length ? ((o = p ? !0 : at), f()) : o !== at;
    }),
    (c.interpolate = function (p) {
      return arguments.length ? ((r = p), f()) : r;
    }),
    (c.unknown = function (p) {
      return arguments.length ? ((a = p), c) : a;
    }),
    function (p, d) {
      return (n = p), (i = d), f();
    }
  );
}

function _v() {
  return vc()(at, at);
}

function X4(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}

function Jl(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}

function Bi(e) {
  return (e = Jl(Math.abs(e))), e ? e[1] : NaN;
}

function Y4(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], l = 0;
      i > 0 &&
      u > 0 &&
      (l + u + 1 > n && (u = Math.max(1, n - l)),
      a.push(r.substring((i -= u), i + u)),
      !((l += u + 1) > n));

    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}

function Q4(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var Z4 =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function ko(e) {
  if (!(t = Z4.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Pv({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
ko.prototype = Pv.prototype;

function Pv(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
Pv.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};

function J4(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), (i = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var DS;

function e8(e, t) {
  var r = Jl(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (DS = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Jl(e, Math.max(0, t + a - 1))[0];
}

function Vg(e, t) {
  var r = Jl(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const Kg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: X4,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Vg(e * 100, t),
  r: Vg,
  s: e8,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};

function Gg(e) {
  return e;
}
var qg = Array.prototype.map,
  Xg = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];

function t8(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Gg
        : Y4(qg.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? Gg : Q4(qg.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    l = e.nan === void 0 ? "NaN" : e.nan + "";

  function s(c) {
    c = ko(c);
    var p = c.fill,
      d = c.align,
      y = c.sign,
      g = c.symbol,
      w = c.zero,
      v = c.width,
      h = c.comma,
      m = c.precision,
      S = c.trim,
      b = c.type;
    b === "n"
      ? ((h = !0), (b = "g"))
      : Kg[b] || (m === void 0 && (m = 12), (S = !0), (b = "g")),
      (w || (p === "0" && d === "=")) && ((w = !0), (p = "0"), (d = "="));
    var x =
        g === "$"
          ? r
          : g === "#" && /[boxX]/.test(b)
            ? "0" + b.toLowerCase()
            : "",
      O = g === "$" ? n : /[%p]/.test(b) ? o : "",
      _ = Kg[b],
      P = /[defgprs%]/.test(b);
    m =
      m === void 0
        ? 6
        : /[gprs]/.test(b)
          ? Math.max(1, Math.min(21, m))
          : Math.max(0, Math.min(20, m));

    function $(E) {
      var j = x,
        k = O,
        I,
        M,
        D;
      if (b === "c") (k = _(E) + k), (E = "");
      else {
        E = +E;
        var L = E < 0 || 1 / E < 0;
        if (
          ((E = isNaN(E) ? l : _(Math.abs(E), m)),
          S && (E = J4(E)),
          L && +E == 0 && y !== "+" && (L = !1),
          (j = (L ? (y === "(" ? y : u) : y === "-" || y === "(" ? "" : y) + j),
          (k =
            (b === "s" ? Xg[8 + DS / 3] : "") +
            k +
            (L && y === "(" ? ")" : "")),
          P)
        ) {
          for (I = -1, M = E.length; ++I < M; )
            if (((D = E.charCodeAt(I)), 48 > D || D > 57)) {
              (k = (D === 46 ? i + E.slice(I + 1) : E.slice(I)) + k),
                (E = E.slice(0, I));
              break;
            }
        }
      }
      h && !w && (E = t(E, 1 / 0));
      var T = j.length + E.length + k.length,
        N = T < v ? new Array(v - T + 1).join(p) : "";
      switch (
        (h && w && ((E = t(N + E, N.length ? v - k.length : 1 / 0)), (N = "")),
        d)
      ) {
        case "<":
          E = j + E + k + N;
          break;
        case "=":
          E = j + N + E + k;
          break;
        case "^":
          E = N.slice(0, (T = N.length >> 1)) + j + E + k + N.slice(T);
          break;
        default:
          E = N + j + E + k;
          break;
      }
      return a(E);
    }
    return (
      ($.toString = function () {
        return c + "";
      }),
      $
    );
  }

  function f(c, p) {
    var d = s(((c = ko(c)), (c.type = "f"), c)),
      y = Math.max(-8, Math.min(8, Math.floor(Bi(p) / 3))) * 3,
      g = Math.pow(10, -y),
      w = Xg[8 + y / 3];
    return function (v) {
      return d(g * v) + w;
    };
  }
  return {
    format: s,
    formatPrefix: f,
  };
}
var Uu, Av, LS;
r8({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
});

function r8(e) {
  return (Uu = t8(e)), (Av = Uu.format), (LS = Uu.formatPrefix), Uu;
}

function n8(e) {
  return Math.max(0, -Bi(Math.abs(e)));
}

function i8(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Bi(t) / 3))) * 3 - Bi(Math.abs(e)),
  );
}

function a8(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Bi(t) - Bi(e)) + 1
  );
}

function RS(e, t, r, n) {
  var i = ad(e, t, r),
    a;
  switch (((n = ko(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = i8(i, o))) && (n.precision = a),
        LS(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = a8(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = n8(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Av(n);
}

function dn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return nd(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return RS(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        l,
        s,
        f = 10;
      for (
        u < o && ((s = o), (o = u), (u = s), (s = i), (i = a), (a = s));
        f-- > 0;

      ) {
        if (((s = id(o, u, r)), s === l)) return (n[i] = o), (n[a] = u), t(n);
        if (s > 0) (o = Math.floor(o / s) * s), (u = Math.ceil(u / s) * s);
        else if (s < 0) (o = Math.ceil(o * s) / s), (u = Math.floor(u * s) / s);
        else break;
        l = s;
      }
      return e;
    }),
    e
  );
}

function es() {
  var e = _v();
  return (
    (e.copy = function () {
      return du(e, es());
    }),
    Wt.apply(e, arguments),
    dn(e)
  );
}

function BS(e) {
  var t;

  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Zl)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return BS(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Zl) : [0, 1]),
    dn(r)
  );
}

function zS(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}

function Yg(e) {
  return Math.log(e);
}

function Qg(e) {
  return Math.exp(e);
}

function o8(e) {
  return -Math.log(-e);
}

function u8(e) {
  return -Math.exp(-e);
}

function l8(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}

function s8(e) {
  return e === 10 ? l8 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}

function c8(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}

function Zg(e) {
  return (t, r) => -e(-t, r);
}

function Ev(e) {
  const t = e(Yg, Qg),
    r = t.domain;
  let n = 10,
    i,
    a;

  function o() {
    return (
      (i = c8(n)),
      (a = s8(n)),
      r()[0] < 0 ? ((i = Zg(i)), (a = Zg(a)), e(o8, u8)) : e(Yg, Qg),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const l = r();
      let s = l[0],
        f = l[l.length - 1];
      const c = f < s;
      c && ([s, f] = [f, s]);
      let p = i(s),
        d = i(f),
        y,
        g;
      const w = u == null ? 10 : +u;
      let v = [];
      if (!(n % 1) && d - p < w) {
        if (((p = Math.floor(p)), (d = Math.ceil(d)), s > 0)) {
          for (; p <= d; ++p)
            for (y = 1; y < n; ++y)
              if (((g = p < 0 ? y / a(-p) : y * a(p)), !(g < s))) {
                if (g > f) break;
                v.push(g);
              }
        } else
          for (; p <= d; ++p)
            for (y = n - 1; y >= 1; --y)
              if (((g = p > 0 ? y / a(-p) : y * a(p)), !(g < s))) {
                if (g > f) break;
                v.push(g);
              }
        v.length * 2 < w && (v = nd(s, f, w));
      } else v = nd(p, d, Math.min(d - p, w)).map(a);
      return c ? v.reverse() : v;
    }),
    (t.tickFormat = (u, l) => {
      if (
        (u == null && (u = 10),
        l == null && (l = n === 10 ? "s" : ","),
        typeof l != "function" &&
          (!(n % 1) && (l = ko(l)).precision == null && (l.trim = !0),
          (l = Av(l))),
        u === 1 / 0)
      )
        return l;
      const s = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let c = f / a(Math.round(i(f)));
        return c * n < n - 0.5 && (c *= n), c <= s ? l(f) : "";
      };
    }),
    (t.nice = () =>
      r(
        zS(r(), {
          floor: (u) => a(Math.floor(i(u))),
          ceil: (u) => a(Math.ceil(i(u))),
        }),
      )),
    t
  );
}

function FS() {
  const e = Ev(vc()).domain([1, 10]);
  return (e.copy = () => du(e, FS()).base(e.base())), Wt.apply(e, arguments), e;
}

function Jg(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}

function e0(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}

function $v(e) {
  var t = 1,
    r = e(Jg(t), e0(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(Jg((t = +n)), e0(t)) : t;
    }),
    dn(r)
  );
}

function US() {
  var e = $v(vc());
  return (
    (e.copy = function () {
      return du(e, US()).constant(e.constant());
    }),
    Wt.apply(e, arguments)
  );
}

function t0(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}

function f8(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}

function p8(e) {
  return e < 0 ? -e * e : e * e;
}

function Tv(e) {
  var t = e(at, at),
    r = 1;

  function n() {
    return r === 1 ? e(at, at) : r === 0.5 ? e(f8, p8) : e(t0(r), t0(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    dn(t)
  );
}

function jv() {
  var e = Tv(vc());
  return (
    (e.copy = function () {
      return du(e, jv()).exponent(e.exponent());
    }),
    Wt.apply(e, arguments),
    e
  );
}

function d8() {
  return jv.apply(null, arguments).exponent(0.5);
}

function r0(e) {
  return Math.sign(e) * e * e;
}

function h8(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}

function WS() {
  var e = _v(),
    t = [0, 1],
    r = !1,
    n;

  function i(a) {
    var o = h8(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(r0(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, Zl)).map(r0)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return WS(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Wt.apply(i, arguments),
    dn(i)
  );
}

function HS() {
  var e = [],
    t = [],
    r = [],
    n;

  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = b4(e, o / u);
    return a;
  }

  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[fu(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0
        ? [NaN, NaN]
        : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return e.sort(an), i();
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return HS().domain(e).range(t).unknown(n);
    }),
    Wt.apply(a, arguments)
  );
}

function VS() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;

  function o(l) {
    return l != null && l <= l ? i[fu(n, l, 0, r)] : a;
  }

  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; )
      n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (l) {
      return arguments.length
        ? (([e, t] = l), (e = +e), (t = +t), u())
        : [e, t];
    }),
    (o.range = function (l) {
      return arguments.length
        ? ((r = (i = Array.from(l)).length - 1), u())
        : i.slice();
    }),
    (o.invertExtent = function (l) {
      var s = i.indexOf(l);
      return s < 0
        ? [NaN, NaN]
        : s < 1
          ? [e, n[0]]
          : s >= r
            ? [n[r - 1], t]
            : [n[s - 1], n[s]];
    }),
    (o.unknown = function (l) {
      return arguments.length && (a = l), o;
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return VS().domain([e, t]).range(i).unknown(a);
    }),
    Wt.apply(dn(o), arguments)
  );
}

function KS() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;

  function i(a) {
    return a != null && a <= a ? t[fu(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return KS().domain(e).range(t).unknown(r);
    }),
    Wt.apply(i, arguments)
  );
}
const _f = new Date(),
  Pf = new Date();

function Fe(e, t, r, n) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a
    )),
    (i.range = (a, o, u) => {
      const l = [];
      if (
        ((a = i.ceil(a)),
        (u = u == null ? 1 : Math.floor(u)),
        !(a < o) || !(u > 0))
      )
        return l;
      let s;
      do l.push((s = new Date(+a))), t(a, u), e(a);
      while (s < a && a < o);
      return l;
    }),
    (i.filter = (a) =>
      Fe(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        _f.setTime(+a), Pf.setTime(+o), e(_f), e(Pf), Math.floor(r(_f, Pf))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const ts = Fe(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
ts.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Fe(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : ts
);
ts.range;
const wr = 1e3,
  Dt = wr * 60,
  xr = Dt * 60,
  jr = xr * 24,
  Cv = jr * 7,
  n0 = jr * 30,
  Af = jr * 365,
  jn = Fe(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * wr);
    },
    (e, t) => (t - e) / wr,
    (e) => e.getUTCSeconds(),
  );
jn.range;
const kv = Fe(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * wr);
  },
  (e, t) => {
    e.setTime(+e + t * Dt);
  },
  (e, t) => (t - e) / Dt,
  (e) => e.getMinutes(),
);
kv.range;
const Mv = Fe(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Dt);
  },
  (e, t) => (t - e) / Dt,
  (e) => e.getUTCMinutes(),
);
Mv.range;
const Nv = Fe(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * wr - e.getMinutes() * Dt,
    );
  },
  (e, t) => {
    e.setTime(+e + t * xr);
  },
  (e, t) => (t - e) / xr,
  (e) => e.getHours(),
);
Nv.range;
const Iv = Fe(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * xr);
  },
  (e, t) => (t - e) / xr,
  (e) => e.getUTCHours(),
);
Iv.range;
const hu = Fe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Dt) / jr,
  (e) => e.getDate() - 1,
);
hu.range;
const yc = Fe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => e.getUTCDate() - 1,
);
yc.range;
const GS = Fe(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => Math.floor(e / jr),
);
GS.range;

function Xn(e) {
  return Fe(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Dt) / Cv,
  );
}
const mc = Xn(0),
  rs = Xn(1),
  v8 = Xn(2),
  y8 = Xn(3),
  zi = Xn(4),
  m8 = Xn(5),
  g8 = Xn(6);
mc.range;
rs.range;
v8.range;
y8.range;
zi.range;
m8.range;
g8.range;

function Yn(e) {
  return Fe(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / Cv,
  );
}
const gc = Yn(0),
  ns = Yn(1),
  b8 = Yn(2),
  w8 = Yn(3),
  Fi = Yn(4),
  x8 = Yn(5),
  S8 = Yn(6);
gc.range;
ns.range;
b8.range;
w8.range;
Fi.range;
x8.range;
S8.range;
const Dv = Fe(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Dv.range;
const Lv = Fe(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Lv.range;
const Cr = Fe(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Cr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Fe(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
Cr.range;
const kr = Fe(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
kr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Fe(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
kr.range;

function qS(e, t, r, n, i, a) {
  const o = [
    [jn, 1, wr],
    [jn, 5, 5 * wr],
    [jn, 15, 15 * wr],
    [jn, 30, 30 * wr],
    [a, 1, Dt],
    [a, 5, 5 * Dt],
    [a, 15, 15 * Dt],
    [a, 30, 30 * Dt],
    [i, 1, xr],
    [i, 3, 3 * xr],
    [i, 6, 6 * xr],
    [i, 12, 12 * xr],
    [n, 1, jr],
    [n, 2, 2 * jr],
    [r, 1, Cv],
    [t, 1, n0],
    [t, 3, 3 * n0],
    [e, 1, Af],
  ];

  function u(s, f, c) {
    const p = f < s;
    p && ([s, f] = [f, s]);
    const d = c && typeof c.range == "function" ? c : l(s, f, c),
      y = d ? d.range(s, +f + 1) : [];
    return p ? y.reverse() : y;
  }

  function l(s, f, c) {
    const p = Math.abs(f - s) / c,
      d = bv(([, , w]) => w).right(o, p);
    if (d === o.length) return e.every(ad(s / Af, f / Af, c));
    if (d === 0) return ts.every(Math.max(ad(s, f, c), 1));
    const [y, g] = o[p / o[d - 1][2] < o[d][2] / p ? d - 1 : d];
    return y.every(g);
  }
  return [u, l];
}
const [O8, _8] = qS(kr, Lv, gc, GS, Iv, Mv),
  [P8, A8] = qS(Cr, Dv, mc, hu, Nv, kv);

function Ef(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}

function $f(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}

function ja(e, t, r) {
  return {
    y: e,
    m: t,
    d: r,
    H: 0,
    M: 0,
    S: 0,
    L: 0,
  };
}

function E8(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    l = e.shortMonths,
    s = Ca(i),
    f = ka(i),
    c = Ca(a),
    p = ka(a),
    d = Ca(o),
    y = ka(o),
    g = Ca(u),
    w = ka(u),
    v = Ca(l),
    h = ka(l),
    m = {
      a: L,
      A: T,
      b: N,
      B,
      c: null,
      d: s0,
      e: s0,
      f: Y8,
      g: oz,
      G: lz,
      H: G8,
      I: q8,
      j: X8,
      L: XS,
      m: Q8,
      M: Z8,
      p: H,
      q: U,
      Q: p0,
      s: d0,
      S: J8,
      u: ez,
      U: tz,
      V: rz,
      w: nz,
      W: iz,
      x: null,
      X: null,
      y: az,
      Y: uz,
      Z: sz,
      "%": f0,
    },
    S = {
      a: q,
      A: ie,
      b: we,
      B: je,
      c: null,
      d: c0,
      e: c0,
      f: dz,
      g: Oz,
      G: Pz,
      H: cz,
      I: fz,
      j: pz,
      L: QS,
      m: hz,
      M: vz,
      p: $t,
      q: st,
      Q: p0,
      s: d0,
      S: yz,
      u: mz,
      U: gz,
      V: bz,
      w: wz,
      W: xz,
      x: null,
      X: null,
      y: Sz,
      Y: _z,
      Z: Az,
      "%": f0,
    },
    b = {
      a: $,
      A: E,
      b: j,
      B: k,
      c: I,
      d: u0,
      e: u0,
      f: W8,
      g: o0,
      G: a0,
      H: l0,
      I: l0,
      j: B8,
      L: U8,
      m: R8,
      M: z8,
      p: P,
      q: L8,
      Q: V8,
      s: K8,
      S: F8,
      u: k8,
      U: M8,
      V: N8,
      w: C8,
      W: I8,
      x: M,
      X: D,
      y: o0,
      Y: a0,
      Z: D8,
      "%": H8,
    };
  (m.x = x(r, m)),
    (m.X = x(n, m)),
    (m.c = x(t, m)),
    (S.x = x(r, S)),
    (S.X = x(n, S)),
    (S.c = x(t, S));

  function x(V, Q) {
    return function (J) {
      var R = [],
        Ee = -1,
        ae = 0,
        Ie = V.length,
        De,
        ct,
        Rr;
      for (J instanceof Date || (J = new Date(+J)); ++Ee < Ie; )
        V.charCodeAt(Ee) === 37 &&
          (R.push(V.slice(ae, Ee)),
          (ct = i0[(De = V.charAt(++Ee))]) != null
            ? (De = V.charAt(++Ee))
            : (ct = De === "e" ? " " : "0"),
          (Rr = Q[De]) && (De = Rr(J, ct)),
          R.push(De),
          (ae = Ee + 1));
      return R.push(V.slice(ae, Ee)), R.join("");
    };
  }

  function O(V, Q) {
    return function (J) {
      var R = ja(1900, void 0, 1),
        Ee = _(R, V, (J += ""), 0),
        ae,
        Ie;
      if (Ee != J.length) return null;
      if ("Q" in R) return new Date(R.Q);
      if ("s" in R) return new Date(R.s * 1e3 + ("L" in R ? R.L : 0));
      if (
        (Q && !("Z" in R) && (R.Z = 0),
        "p" in R && (R.H = (R.H % 12) + R.p * 12),
        R.m === void 0 && (R.m = "q" in R ? R.q : 0),
        "V" in R)
      ) {
        if (R.V < 1 || R.V > 53) return null;
        "w" in R || (R.w = 1),
          "Z" in R
            ? ((ae = $f(ja(R.y, 0, 1))),
              (Ie = ae.getUTCDay()),
              (ae = Ie > 4 || Ie === 0 ? ns.ceil(ae) : ns(ae)),
              (ae = yc.offset(ae, (R.V - 1) * 7)),
              (R.y = ae.getUTCFullYear()),
              (R.m = ae.getUTCMonth()),
              (R.d = ae.getUTCDate() + ((R.w + 6) % 7)))
            : ((ae = Ef(ja(R.y, 0, 1))),
              (Ie = ae.getDay()),
              (ae = Ie > 4 || Ie === 0 ? rs.ceil(ae) : rs(ae)),
              (ae = hu.offset(ae, (R.V - 1) * 7)),
              (R.y = ae.getFullYear()),
              (R.m = ae.getMonth()),
              (R.d = ae.getDate() + ((R.w + 6) % 7)));
      } else
        ("W" in R || "U" in R) &&
          ("w" in R || (R.w = "u" in R ? R.u % 7 : "W" in R ? 1 : 0),
          (Ie =
            "Z" in R
              ? $f(ja(R.y, 0, 1)).getUTCDay()
              : Ef(ja(R.y, 0, 1)).getDay()),
          (R.m = 0),
          (R.d =
            "W" in R
              ? ((R.w + 6) % 7) + R.W * 7 - ((Ie + 5) % 7)
              : R.w + R.U * 7 - ((Ie + 6) % 7)));
      return "Z" in R
        ? ((R.H += (R.Z / 100) | 0), (R.M += R.Z % 100), $f(R))
        : Ef(R);
    };
  }

  function _(V, Q, J, R) {
    for (var Ee = 0, ae = Q.length, Ie = J.length, De, ct; Ee < ae; ) {
      if (R >= Ie) return -1;
      if (((De = Q.charCodeAt(Ee++)), De === 37)) {
        if (
          ((De = Q.charAt(Ee++)),
          (ct = b[De in i0 ? Q.charAt(Ee++) : De]),
          !ct || (R = ct(V, J, R)) < 0)
        )
          return -1;
      } else if (De != J.charCodeAt(R++)) return -1;
    }
    return R;
  }

  function P(V, Q, J) {
    var R = s.exec(Q.slice(J));
    return R ? ((V.p = f.get(R[0].toLowerCase())), J + R[0].length) : -1;
  }

  function $(V, Q, J) {
    var R = d.exec(Q.slice(J));
    return R ? ((V.w = y.get(R[0].toLowerCase())), J + R[0].length) : -1;
  }

  function E(V, Q, J) {
    var R = c.exec(Q.slice(J));
    return R ? ((V.w = p.get(R[0].toLowerCase())), J + R[0].length) : -1;
  }

  function j(V, Q, J) {
    var R = v.exec(Q.slice(J));
    return R ? ((V.m = h.get(R[0].toLowerCase())), J + R[0].length) : -1;
  }

  function k(V, Q, J) {
    var R = g.exec(Q.slice(J));
    return R ? ((V.m = w.get(R[0].toLowerCase())), J + R[0].length) : -1;
  }

  function I(V, Q, J) {
    return _(V, t, Q, J);
  }

  function M(V, Q, J) {
    return _(V, r, Q, J);
  }

  function D(V, Q, J) {
    return _(V, n, Q, J);
  }

  function L(V) {
    return o[V.getDay()];
  }

  function T(V) {
    return a[V.getDay()];
  }

  function N(V) {
    return l[V.getMonth()];
  }

  function B(V) {
    return u[V.getMonth()];
  }

  function H(V) {
    return i[+(V.getHours() >= 12)];
  }

  function U(V) {
    return 1 + ~~(V.getMonth() / 3);
  }

  function q(V) {
    return o[V.getUTCDay()];
  }

  function ie(V) {
    return a[V.getUTCDay()];
  }

  function we(V) {
    return l[V.getUTCMonth()];
  }

  function je(V) {
    return u[V.getUTCMonth()];
  }

  function $t(V) {
    return i[+(V.getUTCHours() >= 12)];
  }

  function st(V) {
    return 1 + ~~(V.getUTCMonth() / 3);
  }
  return {
    format: function (V) {
      var Q = x((V += ""), m);
      return (
        (Q.toString = function () {
          return V;
        }),
        Q
      );
    },
    parse: function (V) {
      var Q = O((V += ""), !1);
      return (
        (Q.toString = function () {
          return V;
        }),
        Q
      );
    },
    utcFormat: function (V) {
      var Q = x((V += ""), S);
      return (
        (Q.toString = function () {
          return V;
        }),
        Q
      );
    },
    utcParse: function (V) {
      var Q = O((V += ""), !0);
      return (
        (Q.toString = function () {
          return V;
        }),
        Q
      );
    },
  };
}
var i0 = {
    "-": "",
    _: " ",
    0: "0",
  },
  Ve = /^\s*\d+/,
  $8 = /^%/,
  T8 = /[\\^$*+?|[\]().{}]/g;

function le(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}

function j8(e) {
  return e.replace(T8, "\\$&");
}

function Ca(e) {
  return new RegExp("^(?:" + e.map(j8).join("|") + ")", "i");
}

function ka(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}

function C8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}

function k8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}

function M8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}

function N8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}

function I8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}

function a0(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}

function o0(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}

function D8(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}

function L8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}

function R8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}

function u0(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}

function B8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}

function l0(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}

function z8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}

function F8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}

function U8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}

function W8(e, t, r) {
  var n = Ve.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}

function H8(e, t, r) {
  var n = $8.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}

function V8(e, t, r) {
  var n = Ve.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}

function K8(e, t, r) {
  var n = Ve.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}

function s0(e, t) {
  return le(e.getDate(), t, 2);
}

function G8(e, t) {
  return le(e.getHours(), t, 2);
}

function q8(e, t) {
  return le(e.getHours() % 12 || 12, t, 2);
}

function X8(e, t) {
  return le(1 + hu.count(Cr(e), e), t, 3);
}

function XS(e, t) {
  return le(e.getMilliseconds(), t, 3);
}

function Y8(e, t) {
  return XS(e, t) + "000";
}

function Q8(e, t) {
  return le(e.getMonth() + 1, t, 2);
}

function Z8(e, t) {
  return le(e.getMinutes(), t, 2);
}

function J8(e, t) {
  return le(e.getSeconds(), t, 2);
}

function ez(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}

function tz(e, t) {
  return le(mc.count(Cr(e) - 1, e), t, 2);
}

function YS(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? zi(e) : zi.ceil(e);
}

function rz(e, t) {
  return (e = YS(e)), le(zi.count(Cr(e), e) + (Cr(e).getDay() === 4), t, 2);
}

function nz(e) {
  return e.getDay();
}

function iz(e, t) {
  return le(rs.count(Cr(e) - 1, e), t, 2);
}

function az(e, t) {
  return le(e.getFullYear() % 100, t, 2);
}

function oz(e, t) {
  return (e = YS(e)), le(e.getFullYear() % 100, t, 2);
}

function uz(e, t) {
  return le(e.getFullYear() % 1e4, t, 4);
}

function lz(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? zi(e) : zi.ceil(e)),
    le(e.getFullYear() % 1e4, t, 4)
  );
}

function sz(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    le((t / 60) | 0, "0", 2) +
    le(t % 60, "0", 2)
  );
}

function c0(e, t) {
  return le(e.getUTCDate(), t, 2);
}

function cz(e, t) {
  return le(e.getUTCHours(), t, 2);
}

function fz(e, t) {
  return le(e.getUTCHours() % 12 || 12, t, 2);
}

function pz(e, t) {
  return le(1 + yc.count(kr(e), e), t, 3);
}

function QS(e, t) {
  return le(e.getUTCMilliseconds(), t, 3);
}

function dz(e, t) {
  return QS(e, t) + "000";
}

function hz(e, t) {
  return le(e.getUTCMonth() + 1, t, 2);
}

function vz(e, t) {
  return le(e.getUTCMinutes(), t, 2);
}

function yz(e, t) {
  return le(e.getUTCSeconds(), t, 2);
}

function mz(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}

function gz(e, t) {
  return le(gc.count(kr(e) - 1, e), t, 2);
}

function ZS(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Fi(e) : Fi.ceil(e);
}

function bz(e, t) {
  return (e = ZS(e)), le(Fi.count(kr(e), e) + (kr(e).getUTCDay() === 4), t, 2);
}

function wz(e) {
  return e.getUTCDay();
}

function xz(e, t) {
  return le(ns.count(kr(e) - 1, e), t, 2);
}

function Sz(e, t) {
  return le(e.getUTCFullYear() % 100, t, 2);
}

function Oz(e, t) {
  return (e = ZS(e)), le(e.getUTCFullYear() % 100, t, 2);
}

function _z(e, t) {
  return le(e.getUTCFullYear() % 1e4, t, 4);
}

function Pz(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Fi(e) : Fi.ceil(e)),
    le(e.getUTCFullYear() % 1e4, t, 4)
  );
}

function Az() {
  return "+0000";
}

function f0() {
  return "%";
}

function p0(e) {
  return +e;
}

function d0(e) {
  return Math.floor(+e / 1e3);
}
var ei, JS, eO;
Ez({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});

function Ez(e) {
  return (
    (ei = E8(e)),
    (JS = ei.format),
    ei.parse,
    (eO = ei.utcFormat),
    ei.utcParse,
    ei
  );
}

function $z(e) {
  return new Date(e);
}

function Tz(e) {
  return e instanceof Date ? +e : +new Date(+e);
}

function Rv(e, t, r, n, i, a, o, u, l, s) {
  var f = _v(),
    c = f.invert,
    p = f.domain,
    d = s(".%L"),
    y = s(":%S"),
    g = s("%I:%M"),
    w = s("%I %p"),
    v = s("%a %d"),
    h = s("%b %d"),
    m = s("%B"),
    S = s("%Y");

  function b(x) {
    return (
      l(x) < x
        ? d
        : u(x) < x
          ? y
          : o(x) < x
            ? g
            : a(x) < x
              ? w
              : n(x) < x
                ? i(x) < x
                  ? v
                  : h
                : r(x) < x
                  ? m
                  : S
    )(x);
  }
  return (
    (f.invert = function (x) {
      return new Date(c(x));
    }),
    (f.domain = function (x) {
      return arguments.length ? p(Array.from(x, Tz)) : p().map($z);
    }),
    (f.ticks = function (x) {
      var O = p();
      return e(O[0], O[O.length - 1], x ?? 10);
    }),
    (f.tickFormat = function (x, O) {
      return O == null ? b : s(O);
    }),
    (f.nice = function (x) {
      var O = p();
      return (
        (!x || typeof x.range != "function") &&
          (x = t(O[0], O[O.length - 1], x ?? 10)),
        x ? p(zS(O, x)) : f
      );
    }),
    (f.copy = function () {
      return du(f, Rv(e, t, r, n, i, a, o, u, l, s));
    }),
    f
  );
}

function jz() {
  return Wt.apply(
    Rv(P8, A8, Cr, Dv, mc, hu, Nv, kv, jn, JS).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}

function Cz() {
  return Wt.apply(
    Rv(O8, _8, kr, Lv, gc, yc, Iv, Mv, jn, eO).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}

function bc() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = at,
    u = !1,
    l;

  function s(c) {
    return c == null || isNaN((c = +c))
      ? l
      : o(
          i === 0
            ? 0.5
            : ((c = (a(c) - r) * i), u ? Math.max(0, Math.min(1, c)) : c),
        );
  }
  (s.domain = function (c) {
    return arguments.length
      ? (([e, t] = c),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        s)
      : [e, t];
  }),
    (s.clamp = function (c) {
      return arguments.length ? ((u = !!c), s) : u;
    }),
    (s.interpolator = function (c) {
      return arguments.length ? ((o = c), s) : o;
    });

  function f(c) {
    return function (p) {
      var d, y;
      return arguments.length ? (([d, y] = p), (o = c(d, y)), s) : [o(0), o(1)];
    };
  }
  return (
    (s.range = f(va)),
    (s.rangeRound = f(Ov)),
    (s.unknown = function (c) {
      return arguments.length ? ((l = c), s) : l;
    }),
    function (c) {
      return (
        (a = c), (r = c(e)), (n = c(t)), (i = r === n ? 0 : 1 / (n - r)), s
      );
    }
  );
}

function hn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}

function tO() {
  var e = dn(bc()(at));
  return (
    (e.copy = function () {
      return hn(e, tO());
    }),
    Lr.apply(e, arguments)
  );
}

function rO() {
  var e = Ev(bc()).domain([1, 10]);
  return (
    (e.copy = function () {
      return hn(e, rO()).base(e.base());
    }),
    Lr.apply(e, arguments)
  );
}

function nO() {
  var e = $v(bc());
  return (
    (e.copy = function () {
      return hn(e, nO()).constant(e.constant());
    }),
    Lr.apply(e, arguments)
  );
}

function Bv() {
  var e = Tv(bc());
  return (
    (e.copy = function () {
      return hn(e, Bv()).exponent(e.exponent());
    }),
    Lr.apply(e, arguments)
  );
}

function kz() {
  return Bv.apply(null, arguments).exponent(0.5);
}

function iO() {
  var e = [],
    t = at;

  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((fu(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return e.sort(an), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from(
        {
          length: n + 1,
        },
        (i, a) => g4(e, a / n),
      );
    }),
    (r.copy = function () {
      return iO(t).domain(e);
    }),
    Lr.apply(r, arguments)
  );
}

function wc() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    l,
    s = at,
    f,
    c = !1,
    p;

  function d(g) {
    return isNaN((g = +g))
      ? p
      : ((g = 0.5 + ((g = +f(g)) - a) * (n * g < n * a ? u : l)),
        s(c ? Math.max(0, Math.min(1, g)) : g));
  }
  (d.domain = function (g) {
    return arguments.length
      ? (([e, t, r] = g),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d)
      : [e, t, r];
  }),
    (d.clamp = function (g) {
      return arguments.length ? ((c = !!g), d) : c;
    }),
    (d.interpolator = function (g) {
      return arguments.length ? ((s = g), d) : s;
    });

  function y(g) {
    return function (w) {
      var v, h, m;
      return arguments.length
        ? (([v, h, m] = w), (s = H4(g, [v, h, m])), d)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (d.range = y(va)),
    (d.rangeRound = y(Ov)),
    (d.unknown = function (g) {
      return arguments.length ? ((p = g), d) : p;
    }),
    function (g) {
      return (
        (f = g),
        (i = g(e)),
        (a = g(t)),
        (o = g(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        d
      );
    }
  );
}

function aO() {
  var e = dn(wc()(at));
  return (
    (e.copy = function () {
      return hn(e, aO());
    }),
    Lr.apply(e, arguments)
  );
}

function oO() {
  var e = Ev(wc()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return hn(e, oO()).base(e.base());
    }),
    Lr.apply(e, arguments)
  );
}

function uO() {
  var e = $v(wc());
  return (
    (e.copy = function () {
      return hn(e, uO()).constant(e.constant());
    }),
    Lr.apply(e, arguments)
  );
}

function zv() {
  var e = Tv(wc());
  return (
    (e.copy = function () {
      return hn(e, zv()).exponent(e.exponent());
    }),
    Lr.apply(e, arguments)
  );
}

function Mz() {
  return zv.apply(null, arguments).exponent(0.5);
}
const h0 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: $o,
      scaleDiverging: aO,
      scaleDivergingLog: oO,
      scaleDivergingPow: zv,
      scaleDivergingSqrt: Mz,
      scaleDivergingSymlog: uO,
      scaleIdentity: BS,
      scaleImplicit: od,
      scaleLinear: es,
      scaleLog: FS,
      scaleOrdinal: wv,
      scalePoint: Za,
      scalePow: jv,
      scaleQuantile: HS,
      scaleQuantize: VS,
      scaleRadial: WS,
      scaleSequential: tO,
      scaleSequentialLog: rO,
      scaleSequentialPow: Bv,
      scaleSequentialQuantile: iO,
      scaleSequentialSqrt: kz,
      scaleSequentialSymlog: nO,
      scaleSqrt: d8,
      scaleSymlog: US,
      scaleThreshold: KS,
      scaleTime: jz,
      scaleUtc: Cz,
      tickFormat: RS,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
var Nz = aa;

function Iz(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (u === void 0 ? o === o && !Nz(o) : r(o, u)))
      var u = o,
        l = a;
  }
  return l;
}
var lO = Iz;

function Dz(e, t) {
  return e > t;
}
var Lz = Dz,
  Rz = lO,
  Bz = Lz,
  zz = da;

function Fz(e) {
  return e && e.length ? Rz(e, zz, Bz) : void 0;
}
var Uz = Fz;
const qr = ve(Uz);

function Wz(e, t) {
  return e < t;
}
var Hz = Wz,
  Vz = lO,
  Kz = Hz,
  Gz = da;

function qz(e) {
  return e && e.length ? Vz(e, Gz, Kz) : void 0;
}
var Xz = qz;
const xc = ve(Xz);
var Yz = Jh,
  Qz = ha,
  Zz = yS,
  Jz = mt;

function e5(e, t) {
  var r = Jz(e) ? Yz : Zz;
  return r(e, Qz(t));
}
var t5 = e5,
  r5 = hS,
  n5 = t5;

function i5(e, t) {
  return r5(n5(e, t), 1);
}
var a5 = i5;
const o5 = ve(a5);
var u5 = vv;

function l5(e, t) {
  return u5(e, t);
}
var s5 = l5;
const Mo = ve(s5);
var ya = 1e9,
  c5 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Uv,
  Se = !0,
  Ft = "[DecimalError] ",
  Ln = Ft + "Invalid argument: ",
  Fv = Ft + "Exponent out of range: ",
  ma = Math.floor,
  _n = Math.pow,
  f5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  xt,
  Ue = 1e7,
  ge = 7,
  sO = 9007199254740991,
  is = ma(sO / ge),
  G = {};
G.absoluteValue = G.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
G.comparedTo = G.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
G.decimalPlaces = G.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * ge;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
G.dividedBy = G.div = function (e) {
  return Pr(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return pe(Pr(t, new r(e), 0, 1), r.precision);
};
G.equals = G.eq = function (e) {
  return !this.cmp(e);
};
G.exponent = function () {
  return Ne(this);
};
G.greaterThan = G.gt = function (e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function (e) {
  return this.cmp(e) >= 0;
};
G.isInteger = G.isint = function () {
  return this.e > this.d.length - 2;
};
G.isNegative = G.isneg = function () {
  return this.s < 0;
};
G.isPositive = G.ispos = function () {
  return this.s > 0;
};
G.isZero = function () {
  return this.s === 0;
};
G.lessThan = G.lt = function (e) {
  return this.cmp(e) < 0;
};
G.lessThanOrEqualTo = G.lte = function (e) {
  return this.cmp(e) < 1;
};
G.logarithm = G.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(xt))) throw Error(Ft + "NaN");
  if (r.s < 1) throw Error(Ft + (r.s ? "NaN" : "-Infinity"));
  return r.eq(xt)
    ? new n(0)
    : ((Se = !1), (t = Pr(No(r, a), No(e, a), a)), (Se = !0), pe(t, i));
};
G.minus = G.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? pO(t, e) : cO(t, ((e.s = -e.s), e))
  );
};
G.modulo = G.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Ft + "NaN");
  return r.s
    ? ((Se = !1), (t = Pr(r, e, 0, 1).times(e)), (Se = !0), r.minus(t))
    : pe(new n(r), i);
};
G.naturalExponential = G.exp = function () {
  return fO(this);
};
G.naturalLogarithm = G.ln = function () {
  return No(this);
};
G.negated = G.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
G.plus = G.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? cO(t, e) : pO(t, ((e.s = -e.s), e))
  );
};
G.precision = G.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ln + e);
  if (
    ((t = Ne(i) + 1), (n = i.d.length - 1), (r = n * ge + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
G.squareRoot = G.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(Ft + "NaN");
  }
  for (
    e = Ne(u),
      Se = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = ur(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = ma((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new l(t)))
        : (n = new l(i.toString())),
      r = l.precision,
      i = o = r + 3;
    ;

  )
    if (
      ((a = n),
      (n = a.plus(Pr(u, a, o + 2)).times(0.5)),
      ur(a.d).slice(0, o) === (t = ur(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((pe(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return (Se = !0), pe(n, r);
};
G.times = G.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    f = this,
    c = f.constructor,
    p = f.d,
    d = (e = new c(e)).d;
  if (!f.s || !e.s) return new c(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      l = p.length,
      s = d.length,
      l < s && ((a = p), (p = d), (d = a), (o = l), (l = s), (s = o)),
      a = [],
      o = l + s,
      n = o;
    n--;

  )
    a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (u = a[i] + d[n] * p[i - n - 1] + t),
        (a[i--] = u % Ue | 0),
        (t = (u / Ue) | 0);
    a[i] = (a[i] + t) % Ue | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), (e.d = a), (e.e = r), Se ? pe(e, c.precision) : e;
};
G.toDecimalPlaces = G.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (dr(e, 0, ya),
        t === void 0 ? (t = n.rounding) : dr(t, 0, 8),
        pe(r, e + Ne(r) + 1, t))
  );
};
G.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Hn(n, !0))
      : (dr(e, 0, ya),
        t === void 0 ? (t = i.rounding) : dr(t, 0, 8),
        (n = pe(new i(n), e + 1, t)),
        (r = Hn(n, !0, e + 1))),
    r
  );
};
G.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Hn(i)
    : (dr(e, 0, ya),
      t === void 0 ? (t = a.rounding) : dr(t, 0, 8),
      (n = pe(new a(i), e + Ne(i) + 1, t)),
      (r = Hn(n.abs(), !1, e + Ne(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
G.toInteger = G.toint = function () {
  var e = this,
    t = e.constructor;
  return pe(new t(e), Ne(e) + 1, t.rounding);
};
G.toNumber = function () {
  return +this;
};
G.toPower = G.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor,
    s = 12,
    f = +(e = new l(e));
  if (!e.s) return new l(xt);
  if (((u = new l(u)), !u.s)) {
    if (e.s < 1) throw Error(Ft + "Infinity");
    return u;
  }
  if (u.eq(xt)) return u;
  if (((n = l.precision), e.eq(xt))) return pe(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= sO) {
      for (
        i = new l(xt), t = Math.ceil(n / ge + 4), Se = !1;
        r % 2 && ((i = i.times(u)), y0(i.d, t)), (r = ma(r / 2)), r !== 0;

      )
        (u = u.times(u)), y0(u.d, t);
      return (Se = !0), e.s < 0 ? new l(xt).div(i) : pe(i, n);
    }
  } else if (a < 0) throw Error(Ft + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (Se = !1),
    (i = e.times(No(u, n + s))),
    (Se = !0),
    (i = fO(i)),
    (i.s = a),
    i
  );
};
G.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Ne(i)), (n = Hn(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (dr(e, 1, ya),
        t === void 0 ? (t = a.rounding) : dr(t, 0, 8),
        (i = pe(new a(i), e, t)),
        (r = Ne(i)),
        (n = Hn(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
G.toSignificantDigits = G.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (dr(e, 1, ya), t === void 0 ? (t = n.rounding) : dr(t, 0, 8)),
    pe(new n(r), e, t)
  );
};
G.toString =
  G.valueOf =
  G.val =
  G.toJSON =
  G[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Ne(e),
        r = e.constructor;
      return Hn(e, t <= r.toExpNeg || t >= r.toExpPos);
    };

function cO(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    f = e.constructor,
    c = f.precision;
  if (!e.s || !t.s) return t.s || (t = new f(e)), Se ? pe(t, c) : t;
  if (
    ((l = e.d),
    (s = t.d),
    (o = e.e),
    (i = t.e),
    (l = l.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = l), (a = -a), (u = s.length))
        : ((n = s), (i = o), (u = l.length)),
        o = Math.ceil(c / ge),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    u = l.length,
      a = s.length,
      u - a < 0 && ((a = u), (n = s), (s = l), (l = n)),
      r = 0;
    a;

  )
    (r = ((l[--a] = l[a] + s[a] + r) / Ue) | 0), (l[a] %= Ue);
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return (t.d = l), (t.e = i), Se ? pe(t, c) : t;
}

function dr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Ln + e);
}

function ur(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      (n = e[t] + ""), (r = ge - n.length), r && (a += Wr(r)), (a += n);
    (o = e[t]), (n = o + ""), (r = ge - n.length), r && (a += Wr(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Pr = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (a = n[u] * i + o), (n[u] = a % Ue | 0), (o = (a / Ue) | 0);
    return o && n.unshift(o), n;
  }

  function t(n, i, a, o) {
    var u, l;
    if (a != o) l = a > o ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }

  function r(n, i, a) {
    for (var o = 0; a--; )
      (n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Ue + n[a] - i[a]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      l,
      s,
      f,
      c,
      p,
      d,
      y,
      g,
      w,
      v,
      h,
      m,
      S,
      b,
      x,
      O,
      _,
      P = n.constructor,
      $ = n.s == i.s ? 1 : -1,
      E = n.d,
      j = i.d;
    if (!n.s) return new P(n);
    if (!i.s) throw Error(Ft + "Division by zero");
    for (
      l = n.e - i.e,
        O = j.length,
        b = E.length,
        d = new P($),
        y = d.d = [],
        s = 0;
      j[s] == (E[s] || 0);

    )
      ++s;
    if (
      (j[s] > (E[s] || 0) && --l,
      a == null
        ? (h = a = P.precision)
        : o
          ? (h = a + (Ne(n) - Ne(i)) + 1)
          : (h = a),
      h < 0)
    )
      return new P(0);
    if (((h = (h / ge + 2) | 0), (s = 0), O == 1))
      for (f = 0, j = j[0], h++; (s < b || f) && h--; s++)
        (m = f * Ue + (E[s] || 0)), (y[s] = (m / j) | 0), (f = m % j | 0);
    else {
      for (
        f = (Ue / (j[0] + 1)) | 0,
          f > 1 &&
            ((j = e(j, f)), (E = e(E, f)), (O = j.length), (b = E.length)),
          S = O,
          g = E.slice(0, O),
          w = g.length;
        w < O;

      )
        g[w++] = 0;
      (_ = j.slice()), _.unshift(0), (x = j[0]), j[1] >= Ue / 2 && ++x;
      do
        (f = 0),
          (u = t(j, g, O, w)),
          u < 0
            ? ((v = g[0]),
              O != w && (v = v * Ue + (g[1] || 0)),
              (f = (v / x) | 0),
              f > 1
                ? (f >= Ue && (f = Ue - 1),
                  (c = e(j, f)),
                  (p = c.length),
                  (w = g.length),
                  (u = t(c, g, p, w)),
                  u == 1 && (f--, r(c, O < p ? _ : j, p)))
                : (f == 0 && (u = f = 1), (c = j.slice())),
              (p = c.length),
              p < w && c.unshift(0),
              r(g, c, w),
              u == -1 &&
                ((w = g.length),
                (u = t(j, g, O, w)),
                u < 1 && (f++, r(g, O < w ? _ : j, w))),
              (w = g.length))
            : u === 0 && (f++, (g = [0])),
          (y[s++] = f),
          u && g[0] ? (g[w++] = E[S] || 0) : ((g = [E[S]]), (w = 1));
      while ((S++ < b || g[0] !== void 0) && h--);
    }
    return y[0] || y.shift(), (d.e = l), pe(d, o ? a + Ne(d) + 1 : a);
  };
})();

function fO(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l = 0,
    s = 0,
    f = e.constructor,
    c = f.precision;
  if (Ne(e) > 16) throw Error(Fv + Ne(e));
  if (!e.s) return new f(xt);
  for (
    t == null ? ((Se = !1), (u = c)) : (u = t), o = new f(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(o)), (s += 5);
  for (
    n = ((Math.log(_n(2, s)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(xt),
      f.precision = u;
    ;

  ) {
    if (
      ((i = pe(i.times(e), u)),
      (r = r.times(++l)),
      (o = a.plus(Pr(i, r, u))),
      ur(o.d).slice(0, u) === ur(a.d).slice(0, u))
    ) {
      for (; s--; ) a = pe(a.times(a), u);
      return (f.precision = c), t == null ? ((Se = !0), pe(a, c)) : a;
    }
    a = o;
  }
}

function Ne(e) {
  for (var t = e.e * ge, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}

function Tf(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((Se = !0),
      r && (e.precision = r),
      Error(Ft + "LN10 precision limit exceeded"))
    );
  return pe(new e(e.LN10), t);
}

function Wr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}

function No(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    f,
    c = 1,
    p = 10,
    d = e,
    y = d.d,
    g = d.constructor,
    w = g.precision;
  if (d.s < 1) throw Error(Ft + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(xt)) return new g(0);
  if ((t == null ? ((Se = !1), (s = w)) : (s = t), d.eq(10)))
    return t == null && (Se = !0), Tf(g, s);
  if (
    ((s += p),
    (g.precision = s),
    (r = ur(y)),
    (n = r.charAt(0)),
    (a = Ne(d)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (d = d.times(e)), (r = ur(d.d)), (n = r.charAt(0)), c++;
    (a = Ne(d)),
      n > 1 ? ((d = new g("0." + r)), a++) : (d = new g(n + "." + r.slice(1)));
  } else
    return (
      (l = Tf(g, s + 2, w).times(a + "")),
      (d = No(new g(n + "." + r.slice(1)), s - p).plus(l)),
      (g.precision = w),
      t == null ? ((Se = !0), pe(d, w)) : d
    );
  for (
    u = o = d = Pr(d.minus(xt), d.plus(xt), s), f = pe(d.times(d), s), i = 3;
    ;

  ) {
    if (
      ((o = pe(o.times(f), s)),
      (l = u.plus(Pr(o, new g(i), s))),
      ur(l.d).slice(0, s) === ur(u.d).slice(0, s))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(Tf(g, s + 2, w).times(a + ""))),
        (u = Pr(u, new g(c), s)),
        (g.precision = w),
        t == null ? ((Se = !0), pe(u, w)) : u
      );
    (u = l), (i += 2);
  }
}

function v0(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = ma(r / ge)),
      (e.d = []),
      (n = (r + 1) % ge),
      r < 0 && (n += ge),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= ge; n < i; )
        e.d.push(+t.slice(n, (n += ge)));
      (t = t.slice(n)), (n = ge - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), Se && (e.e > is || e.e < -is))) throw Error(Fv + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}

function pe(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    l,
    s,
    f,
    c = e.d;
  for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) (n += ge), (i = t), (s = c[(f = 0)]);
  else {
    if (((f = Math.ceil((n + 1) / ge)), (a = c.length), f >= a)) return e;
    for (s = a = c[f], o = 1; a >= 10; a /= 10) o++;
    (n %= ge), (i = n - ge + o);
  }
  if (
    (r !== void 0 &&
      ((a = _n(10, o - i - 1)),
      (u = (s / a) % 10 | 0),
      (l = t < 0 || c[f + 1] !== void 0 || s % a),
      (l =
        r < 4
          ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                l ||
                (r == 6 &&
                  (n > 0 ? (i > 0 ? s / _n(10, o - i) : 0) : c[f - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !c[0])
  )
    return (
      l
        ? ((a = Ne(e)),
          (c.length = 1),
          (t = t - a - 1),
          (c[0] = _n(10, (ge - (t % ge)) % ge)),
          (e.e = ma(-t / ge) || 0))
        : ((c.length = 1), (c[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((c.length = f), (a = 1), f--)
      : ((c.length = f + 1),
        (a = _n(10, ge - n)),
        (c[f] = i > 0 ? ((s / _n(10, o - i)) % _n(10, i) | 0) * a : 0)),
    l)
  )
    for (;;)
      if (f == 0) {
        (c[0] += a) == Ue && ((c[0] = 1), ++e.e);
        break;
      } else {
        if (((c[f] += a), c[f] != Ue)) break;
        (c[f--] = 0), (a = 1);
      }
  for (n = c.length; c[--n] === 0; ) c.pop();
  if (Se && (e.e > is || e.e < -is)) throw Error(Fv + Ne(e));
  return e;
}

function pO(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    f,
    c,
    p = e.constructor,
    d = p.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new p(e)), Se ? pe(t, d) : t;
  if (
    ((l = e.d),
    (c = t.d),
    (n = t.e),
    (s = e.e),
    (l = l.slice()),
    (o = s - n),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((r = l), (o = -o), (u = c.length))
          : ((r = c), (n = s), (u = l.length)),
        i = Math.max(Math.ceil(d / ge), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = c.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (l[i] != c[i]) {
        f = l[i] < c[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((r = l), (l = c), (c = r), (t.s = -t.s)),
      u = l.length,
      i = c.length - u;
    i > 0;
    --i
  )
    l[u++] = 0;
  for (i = c.length; i > o; ) {
    if (l[--i] < c[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Ue - 1;
      --l[a], (l[i] += Ue);
    }
    l[i] -= c[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? ((t.d = l), (t.e = n), Se ? pe(t, d) : t) : new p(0);
}

function Hn(e, t, r) {
  var n,
    i = Ne(e),
    a = ur(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Wr(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + Wr(-i - 1) + a), r && (n = r - o) > 0 && (a += Wr(n)))
        : i >= o
          ? ((a += Wr(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + Wr(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += Wr(n)))),
    e.s < 0 ? "-" + a : a
  );
}

function y0(e, t) {
  if (e.length > t) return (e.length = t), !0;
}

function dO(e) {
  var t, r, n;

  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Ln + a);
      if (a > 0) o.s = 1;
      else if (a < 0) (a = -a), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (a === ~~a && a < 1e7) {
        (o.e = 0), (o.d = [a]);
        return;
      }
      return v0(o, a.toString());
    } else if (typeof a != "string") throw Error(Ln + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      f5.test(a))
    )
      v0(o, a);
    else throw Error(Ln + a);
  }
  if (
    ((i.prototype = G),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = dO),
    (i.config = i.set = p5),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}

function p5(e) {
  if (!e || typeof e != "object") throw Error(Ft + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      ya,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (ma(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ln + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ln + r + ": " + n);
  return this;
}
var Uv = dO(c5);
xt = new Uv(1);
const fe = Uv;

function d5(e) {
  return m5(e) || y5(e) || v5(e) || h5();
}

function h5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function v5(e, t) {
  if (e) {
    if (typeof e == "string") return cd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cd(e, t);
  }
}

function y5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}

function m5(e) {
  if (Array.isArray(e)) return cd(e);
}

function cd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var g5 = function (t) {
    return t;
  },
  hO = {
    "@@functional/placeholder": !0,
  },
  vO = function (t) {
    return t === hO;
  },
  m0 = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          vO(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  b5 = function e(t, r) {
    return t === 1
      ? r
      : m0(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== hO;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                m0(function () {
                  for (
                    var u = arguments.length, l = new Array(u), s = 0;
                    s < u;
                    s++
                  )
                    l[s] = arguments[s];
                  var f = i.map(function (c) {
                    return vO(c) ? l.shift() : c;
                  });
                  return r.apply(void 0, d5(f).concat(l));
                }),
              );
        });
  },
  Sc = function (t) {
    return b5(t.length, t);
  },
  fd = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  w5 = Sc(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  x5 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return g5;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, l) {
          return l(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  pd = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  yO = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, l) {
            return u === r[l];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };

function S5(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new fe(e).abs().log(10).toNumber()) + 1),
    t
  );
}

function O5(e, t, r) {
  for (var n = new fe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), (n = n.add(r)), i++;
  return a;
}
var _5 = Sc(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  P5 = Sc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  A5 = Sc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const Oc = {
  rangeStep: O5,
  getDigitCount: S5,
  interpolateNumber: _5,
  uninterpolateNumber: P5,
  uninterpolateTruncation: A5,
};

function dd(e) {
  return T5(e) || $5(e) || mO(e) || E5();
}

function E5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function $5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}

function T5(e) {
  if (Array.isArray(e)) return hd(e);
}

function Io(e, t) {
  return k5(e) || C5(e, t) || mO(e, t) || j5();
}

function j5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function mO(e, t) {
  if (e) {
    if (typeof e == "string") return hd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hd(e, t);
  }
}

function hd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function C5(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}

function k5(e) {
  if (Array.isArray(e)) return e;
}

function gO(e) {
  var t = Io(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return r > n && ((i = n), (a = r)), [i, a];
}

function bO(e, t, r) {
  if (e.lte(0)) return new fe(0);
  var n = Oc.getDigitCount(e.toNumber()),
    i = new fe(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new fe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    l = u.mul(i);
  return t ? l : new fe(Math.ceil(l));
}

function M5(e, t, r) {
  var n = 1,
    i = new fe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new fe(10).pow(Oc.getDigitCount(e) - 1)),
        (i = new fe(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new fe(Math.floor(e)));
  } else
    e === 0
      ? (i = new fe(Math.floor((t - 1) / 2)))
      : r || (i = new fe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = x5(
      w5(function (l) {
        return i.add(new fe(l - o).mul(n)).toNumber();
      }),
      fd,
    );
  return u(0, t);
}

function wO(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new fe(0),
      tickMin: new fe(0),
      tickMax: new fe(0),
    };
  var a = bO(new fe(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new fe(0))
    : ((o = new fe(e).add(t).div(2)), (o = o.sub(new fe(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    l = Math.ceil(new fe(t).sub(o).div(a).toNumber()),
    s = u + l + 1;
  return s > r
    ? wO(e, t, r, n, i + 1)
    : (s < r && ((l = t > 0 ? l + (r - s) : l), (u = t > 0 ? u : u + (r - s))),
      {
        step: a,
        tickMin: o.sub(new fe(u).mul(a)),
        tickMax: o.add(new fe(l).mul(a)),
      });
}

function N5(e) {
  var t = Io(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = gO([r, n]),
    l = Io(u, 2),
    s = l[0],
    f = l[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var c =
      f === 1 / 0
        ? [s].concat(
            dd(
              fd(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            dd(
              fd(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? pd(c) : c;
  }
  if (s === f) return M5(s, i, a);
  var p = wO(s, f, o, a),
    d = p.step,
    y = p.tickMin,
    g = p.tickMax,
    w = Oc.rangeStep(y, g.add(new fe(0.1).mul(d)), d);
  return r > n ? pd(w) : w;
}

function I5(e, t) {
  var r = Io(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = gO([n, i]),
    u = Io(o, 2),
    l = u[0],
    s = u[1];
  if (l === -1 / 0 || s === 1 / 0) return [n, i];
  if (l === s) return [l];
  var f = Math.max(t, 2),
    c = bO(new fe(s).sub(l).div(f - 1), a, 0),
    p = [].concat(
      dd(Oc.rangeStep(new fe(l), new fe(s).sub(new fe(0.99).mul(c)), c)),
      [s],
    );
  return n > i ? pd(p) : p;
}
var D5 = yO(N5),
  L5 = yO(I5),
  R5 = "Invariant failed";

function Vn(e, t) {
  throw new Error(R5);
}
var B5 = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];

function Ui(e) {
  "@babel/helpers - typeof";
  return (
    (Ui =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ui(e)
  );
}

function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}

function z5(e, t) {
  return H5(e) || W5(e, t) || U5(e, t) || F5();
}

function F5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function U5(e, t) {
  if (e) {
    if (typeof e == "string") return g0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return g0(e, t);
  }
}

function g0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function W5(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function H5(e) {
  if (Array.isArray(e)) return e;
}

function V5(e, t) {
  if (e == null) return {};
  var r = K5(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function K5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function G5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function q5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, OO(n.key), n);
  }
}

function X5(e, t, r) {
  return (
    t && q5(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function Y5(e, t, r) {
  return (
    (t = os(t)),
    Q5(
      e,
      xO() ? Reflect.construct(t, r || [], os(e).constructor) : t.apply(e, r),
    )
  );
}

function Q5(e, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Z5(e);
}

function Z5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function xO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (xO = function () {
    return !!e;
  })();
}

function os(e) {
  return (
    (os = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    os(e)
  );
}

function J5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && vd(e, t);
}

function vd(e, t) {
  return (
    (vd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    vd(e, t)
  );
}

function SO(e, t, r) {
  return (
    (t = OO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function OO(e) {
  var t = eF(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}

function eF(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _c = (function (e) {
  function t() {
    return G5(this, t), Y5(this, t, arguments);
  }
  return (
    J5(t, e),
    X5(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            l = n.data,
            s = n.dataPointFormatter,
            f = n.xAxis,
            c = n.yAxis,
            p = V5(n, B5),
            d = re(p, !1);
          this.props.direction === "x" && f.type !== "number" && Vn();
          var y = l.map(function (g) {
            var w = s(g, u),
              v = w.x,
              h = w.y,
              m = w.value,
              S = w.errorVal;
            if (!S) return null;
            var b = [],
              x,
              O;
            if (Array.isArray(S)) {
              var _ = z5(S, 2);
              (x = _[0]), (O = _[1]);
            } else x = O = S;
            if (a === "vertical") {
              var P = f.scale,
                $ = h + i,
                E = $ + o,
                j = $ - o,
                k = P(m - x),
                I = P(m + O);
              b.push({
                x1: I,
                y1: E,
                x2: I,
                y2: j,
              }),
                b.push({
                  x1: k,
                  y1: $,
                  x2: I,
                  y2: $,
                }),
                b.push({
                  x1: k,
                  y1: E,
                  x2: k,
                  y2: j,
                });
            } else if (a === "horizontal") {
              var M = c.scale,
                D = v + i,
                L = D - o,
                T = D + o,
                N = M(m - x),
                B = M(m + O);
              b.push({
                x1: L,
                y1: B,
                x2: T,
                y2: B,
              }),
                b.push({
                  x1: D,
                  y1: N,
                  x2: D,
                  y2: B,
                }),
                b.push({
                  x1: L,
                  y1: N,
                  x2: T,
                  y2: N,
                });
            }
            return A.createElement(
              _e,
              as(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    b.map(function (H) {
                      return ""
                        .concat(H.x1, "-")
                        .concat(H.x2, "-")
                        .concat(H.y1, "-")
                        .concat(H.y2);
                    }),
                  ),
                },
                d,
              ),
              b.map(function (H) {
                return A.createElement(
                  "line",
                  as({}, H, {
                    key: "line-"
                      .concat(H.x1, "-")
                      .concat(H.x2, "-")
                      .concat(H.y1, "-")
                      .concat(H.y2),
                  }),
                );
              }),
            );
          });
          return A.createElement(
            _e,
            {
              className: "recharts-errorBars",
            },
            y,
          );
        },
      },
    ])
  );
})(A.Component);
SO(_c, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
SO(_c, "displayName", "ErrorBar");

function Do(e) {
  "@babel/helpers - typeof";
  return (
    (Do =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Do(e)
  );
}

function b0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? b0(Object(r), !0).forEach(function (n) {
          tF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : b0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function tF(e, t, r) {
  return (
    (t = rF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function rF(e) {
  var t = nF(e, "string");
  return Do(t) == "symbol" ? t : t + "";
}

function nF(e, t) {
  if (Do(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Do(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _O = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = wt(r, _i);
  if (!o) return null;
  var u = _i.defaultProps,
    l = u !== void 0 ? bn(bn({}, u), o.props) : {},
    s;
  return (
    o.props && o.props.payload
      ? (s = o.props && o.props.payload)
      : a === "children"
        ? (s = (n || []).reduce(function (f, c) {
            var p = c.item,
              d = c.props,
              y = d.sectors || d.data || [];
            return f.concat(
              y.map(function (g) {
                return {
                  type: o.props.iconType || p.props.legendType,
                  value: g.name,
                  color: g.fill,
                  payload: g,
                };
              }),
            );
          }, []))
        : (s = (n || []).map(function (f) {
            var c = f.item,
              p = c.type.defaultProps,
              d = p !== void 0 ? bn(bn({}, p), c.props) : {},
              y = d.dataKey,
              g = d.name,
              w = d.legendType,
              v = d.hide;
            return {
              inactive: v,
              dataKey: y,
              type: l.iconType || w || "square",
              color: Wv(c),
              value: g || y,
              payload: d,
            };
          })),
    bn(
      bn(bn({}, l), _i.getWithHeight(o, i)),
      {},
      {
        payload: s,
        item: o,
      },
    )
  );
};

function Lo(e) {
  "@babel/helpers - typeof";
  return (
    (Lo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lo(e)
  );
}

function w0(e) {
  return uF(e) || oF(e) || aF(e) || iF();
}

function iF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function aF(e, t) {
  if (e) {
    if (typeof e == "string") return yd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yd(e, t);
  }
}

function oF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function uF(e) {
  if (Array.isArray(e)) return yd(e);
}

function yd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function x0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? x0(Object(r), !0).forEach(function (n) {
          Ai(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : x0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Ai(e, t, r) {
  return (
    (t = lF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function lF(e) {
  var t = sF(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}

function sF(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function Pt(e, t, r) {
  return ne(e) || ne(t) ? r : ze(t) ? Rt(e, t, r) : te(t) ? t(e) : r;
}

function Ja(e, t, r, n) {
  var i = o5(e, function (u) {
    return Pt(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return W(u) || parseFloat(u);
    });
    return a.length ? [xc(a), qr(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !ne(u);
      })
    : i;
  return o.map(function (u) {
    return ze(u) || u instanceof Date ? u : "";
  });
}
var cF = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var l = a.range, s = 0; s < u; s++) {
        var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
          c = i[s].coordinate,
          p = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
          d = void 0;
        if (Qt(c - f) !== Qt(p - c)) {
          var y = [];
          if (Qt(p - c) === Qt(l[1] - l[0])) {
            d = p;
            var g = c + l[1] - l[0];
            (y[0] = Math.min(g, (g + f) / 2)),
              (y[1] = Math.max(g, (g + f) / 2));
          } else {
            d = f;
            var w = p + l[1] - l[0];
            (y[0] = Math.min(c, (w + c) / 2)),
              (y[1] = Math.max(c, (w + c) / 2));
          }
          var v = [Math.min(c, (d + c) / 2), Math.max(c, (d + c) / 2)];
          if ((t > v[0] && t <= v[1]) || (t >= y[0] && t <= y[1])) {
            o = i[s].index;
            break;
          }
        } else {
          var h = Math.min(f, p),
            m = Math.max(f, p);
          if (t > (h + c) / 2 && t <= (m + c) / 2) {
            o = i[s].index;
            break;
          }
        }
      }
    else
      for (var S = 0; S < u; S++)
        if (
          (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2) ||
          (S > 0 &&
            S < u - 1 &&
            t > (n[S].coordinate + n[S - 1].coordinate) / 2 &&
            t <= (n[S].coordinate + n[S + 1].coordinate) / 2) ||
          (S === u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2)
        ) {
          o = n[S].index;
          break;
        }
    return o;
  },
  Wv = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? Te(Te({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      l;
    switch (i) {
      case "Line":
        l = o;
        break;
      case "Area":
      case "Radar":
        l = o && o !== "none" ? o : u;
        break;
      default:
        l = u;
        break;
    }
    return l;
  },
  fF = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), l = 0, s = u.length; l < s; l++)
      for (
        var f = a[u[l]].stackGroups, c = Object.keys(f), p = 0, d = c.length;
        p < d;
        p++
      ) {
        var y = f[c[p]],
          g = y.items,
          w = y.cateAxisId,
          v = g.filter(function (O) {
            return Or(O.type).indexOf("Bar") >= 0;
          });
        if (v && v.length) {
          var h = v[0].type.defaultProps,
            m = h !== void 0 ? Te(Te({}, h), v[0].props) : v[0].props,
            S = m.barSize,
            b = m[w];
          o[b] || (o[b] = []);
          var x = ne(S) ? r : S;
          o[b].push({
            item: v[0],
            stackList: v.slice(1),
            barSize: ne(x) ? void 0 : Wn(x, n, 0),
          });
        }
      }
    return o;
  },
  pF = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var s = Wn(r, i, 0, !0),
      f,
      c = [];
    if (o[0].barSize === +o[0].barSize) {
      var p = !1,
        d = i / l,
        y = o.reduce(function (S, b) {
          return S + b.barSize || 0;
        }, 0);
      (y += (l - 1) * s),
        y >= i && ((y -= (l - 1) * s), (s = 0)),
        y >= i && d > 0 && ((p = !0), (d *= 0.9), (y = l * d));
      var g = ((i - y) / 2) >> 0,
        w = {
          offset: g - s,
          size: 0,
        };
      f = o.reduce(function (S, b) {
        var x = {
            item: b.item,
            position: {
              offset: w.offset + w.size + s,
              size: p ? d : b.barSize,
            },
          },
          O = [].concat(w0(S), [x]);
        return (
          (w = O[O.length - 1].position),
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (_) {
              O.push({
                item: _,
                position: w,
              });
            }),
          O
        );
      }, c);
    } else {
      var v = Wn(n, i, 0, !0);
      i - 2 * v - (l - 1) * s <= 0 && (s = 0);
      var h = (i - 2 * v - (l - 1) * s) / l;
      h > 1 && (h >>= 0);
      var m = u === +u ? Math.min(h, u) : h;
      f = o.reduce(function (S, b, x) {
        var O = [].concat(w0(S), [
          {
            item: b.item,
            position: {
              offset: v + (h + s) * x + (h - m) / 2,
              size: m,
            },
          },
        ]);
        return (
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (_) {
              O.push({
                item: _,
                position: O[O.length - 1].position,
              });
            }),
          O
        );
      }, c);
    }
    return f;
  },
  dF = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      l = o - (u.left || 0) - (u.right || 0),
      s = _O({
        children: a,
        legendWidth: l,
      });
    if (s) {
      var f = i || {},
        c = f.width,
        p = f.height,
        d = s.align,
        y = s.verticalAlign,
        g = s.layout;
      if (
        (g === "vertical" || (g === "horizontal" && y === "middle")) &&
        d !== "center" &&
        W(t[d])
      )
        return Te(Te({}, t), {}, Ai({}, d, t[d] + (c || 0)));
      if (
        (g === "horizontal" || (g === "vertical" && d === "center")) &&
        y !== "middle" &&
        W(t[y])
      )
        return Te(Te({}, t), {}, Ai({}, y, t[y] + (p || 0)));
    }
    return t;
  },
  hF = function (t, r, n) {
    return ne(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  PO = function (t, r, n, i, a) {
    var o = r.props.children,
      u = er(o, _c).filter(function (s) {
        return hF(i, a, s.props.direction);
      });
    if (u && u.length) {
      var l = u.map(function (s) {
        return s.props.dataKey;
      });
      return t.reduce(
        function (s, f) {
          var c = Pt(f, n);
          if (ne(c)) return s;
          var p = Array.isArray(c) ? [xc(c), qr(c)] : [c, c],
            d = l.reduce(
              function (y, g) {
                var w = Pt(f, g, 0),
                  v = p[0] - Math.abs(Array.isArray(w) ? w[0] : w),
                  h = p[1] + Math.abs(Array.isArray(w) ? w[1] : w);
                return [Math.min(v, y[0]), Math.max(h, y[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(d[0], s[0]), Math.max(d[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  vF = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return PO(t, u, n, a, i);
      })
      .filter(function (u) {
        return !ne(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, l) {
            return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  AO = function (t, r, n, i, a) {
    var o = r.map(function (l) {
      var s = l.props.dataKey;
      return (n === "number" && s && PO(t, l, s, i)) || Ja(t, s, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (l, s) {
          return [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (l, s) {
      for (var f = 0, c = s.length; f < c; f++)
        u[s[f]] || ((u[s[f]] = !0), l.push(s[f]));
      return l;
    }, []);
  },
  EO = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  Cn = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
    if (
      ((s =
        t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2
          ? Qt(u[0] - u[1]) * 2 * s
          : s),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (c) {
        var p = a ? a.indexOf(c) : c;
        return {
          coordinate: i(p) + s,
          value: c,
          offset: s,
        };
      });
      return f.filter(function (c) {
        return !ca(c.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (c, p) {
          return {
            coordinate: i(c) + s,
            value: c,
            index: p,
            offset: s,
          };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (c) {
            return {
              coordinate: i(c) + s,
              value: c,
              offset: s,
            };
          })
        : i.domain().map(function (c, p) {
            return {
              coordinate: i(c) + s,
              value: a ? a[c] : c,
              index: p,
              offset: s,
            };
          });
  },
  jf = new WeakMap(),
  Wu = function (t, r) {
    if (typeof r != "function") return t;
    jf.has(t) || jf.set(t, new WeakMap());
    var n = jf.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      t.apply(void 0, arguments), r.apply(void 0, arguments);
    };
    return n.set(r, i), i;
  },
  yF = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? {
            scale: $o(),
            realScaleType: "band",
          }
        : o === "radial" && u === "angleAxis"
          ? {
              scale: es(),
              realScaleType: "linear",
            }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? {
                scale: Za(),
                realScaleType: "point",
              }
            : a === "category"
              ? {
                  scale: $o(),
                  realScaleType: "band",
                }
              : {
                  scale: es(),
                  realScaleType: "linear",
                };
    if (su(i)) {
      var l = "scale".concat(lc(i));
      return {
        scale: (h0[l] || Za)(),
        realScaleType: h0[l] ? l : "point",
      };
    }
    return te(i)
      ? {
          scale: i,
        }
      : {
          scale: Za(),
          realScaleType: "point",
        };
  },
  S0 = 1e-4,
  mF = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - S0,
        o = Math.max(i[0], i[1]) + S0,
        u = t(r[0]),
        l = t(r[n - 1]);
      (u < a || u > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  gF = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  bF = function (t, r) {
    if (!r || r.length !== 2 || !W(r[0]) || !W(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!W(t[0]) || t[0] < n) && (a[0] = n),
      (!W(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  wF = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var l = ca(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          l >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + l), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + l), (o = t[u][n][1]));
        }
  },
  xF = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = ca(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  SF = {
    sign: wF,
    expand: IC,
    none: Ni,
    silhouette: DC,
    wiggle: LC,
    positive: xF,
  },
  OF = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = SF[n],
      o = NC()
        .keys(i)
        .value(function (u, l) {
          return +Pt(u, l, 0);
        })
        .order(Fp)
        .offset(a);
    return o(t);
  },
  _F = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      l = {},
      s = u.reduce(function (c, p) {
        var d,
          y =
            (d = p.type) !== null && d !== void 0 && d.defaultProps
              ? Te(Te({}, p.type.defaultProps), p.props)
              : p.props,
          g = y.stackId,
          w = y.hide;
        if (w) return c;
        var v = y[n],
          h = c[v] || {
            hasStack: !1,
            stackGroups: {},
          };
        if (ze(g)) {
          var m = h.stackGroups[g] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          m.items.push(p), (h.hasStack = !0), (h.stackGroups[g] = m);
        } else
          h.stackGroups[cu("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: i,
            items: [p],
          };
        return Te(Te({}, c), {}, Ai({}, v, h));
      }, l),
      f = {};
    return Object.keys(s).reduce(function (c, p) {
      var d = s[p];
      if (d.hasStack) {
        var y = {};
        d.stackGroups = Object.keys(d.stackGroups).reduce(function (g, w) {
          var v = d.stackGroups[w];
          return Te(
            Te({}, g),
            {},
            Ai({}, w, {
              numericAxisId: n,
              cateAxisId: i,
              items: v.items,
              stackedData: OF(t, v.items, a),
            }),
          );
        }, y);
      }
      return Te(Te({}, c), {}, Ai({}, p, d));
    }, f);
  },
  PF = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      l = n || r.scale;
    if (l !== "auto" && l !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = t.domain();
      if (!s.length) return null;
      var f = D5(s, a, u);
      return (
        t.domain([xc(f), qr(f)]),
        {
          niceTicks: f,
        }
      );
    }
    if (a && i === "number") {
      var c = t.domain(),
        p = L5(c, a, u);
      return {
        niceTicks: p,
      };
    }
    return null;
  };

function O0(e) {
  var t = e.axis,
    r = e.ticks,
    n = e.bandSize,
    i = e.entry,
    a = e.index,
    o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ne(i[t.dataKey])) {
      var u = Cl(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = Pt(i, ne(o) ? t.dataKey : o);
  return ne(l) ? null : t.scale(l);
}
var _0 = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var l = Pt(o, r.dataKey, r.domain[u]);
    return ne(l) ? null : r.scale(l) - a / 2 + i;
  },
  AF = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  EF = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? Te(Te({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (ze(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  $F = function (t) {
    return t.reduce(
      function (r, n) {
        return [xc(n.concat([r[0]]).filter(W)), qr(n.concat([r[1]]).filter(W))];
      },
      [1 / 0, -1 / 0],
    );
  },
  $O = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            l = u.reduce(
              function (s, f) {
                var c = $F(f.slice(r, n + 1));
                return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  P0 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  A0 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  md = function (t, r, n) {
    if (te(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (W(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (P0.test(t[0])) {
      var a = +P0.exec(t[0])[1];
      i[0] = r[0] - a;
    } else te(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (W(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (A0.test(t[1])) {
      var o = +A0.exec(t[1])[1];
      i[1] = r[1] + o;
    } else te(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  us = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = mv(r, function (c) {
            return c.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          l = a.length;
        u < l;
        u++
      ) {
        var s = a[u],
          f = a[u - 1];
        o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  E0 = function (t, r, n) {
    return !t || !t.length || Mo(t, Rt(n, "type.defaultProps.domain")) ? r : t;
  },
  TO = function (t, r) {
    var n = t.type.defaultProps
        ? Te(Te({}, t.type.defaultProps), t.props)
        : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      l = n.tooltipType,
      s = n.chartType,
      f = n.hide;
    return Te(
      Te({}, re(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Wv(t),
        value: Pt(r, i),
        type: l,
        payload: r,
        chartType: s,
        hide: f,
      },
    );
  };

function Ro(e) {
  "@babel/helpers - typeof";
  return (
    (Ro =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ro(e)
  );
}

function $0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function T0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $0(Object(r), !0).forEach(function (n) {
          TF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function TF(e, t, r) {
  return (
    (t = jF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function jF(e) {
  var t = CF(e, "string");
  return Ro(t) == "symbol" ? t : t + "";
}

function CF(e, t) {
  if (Ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ls = Math.PI / 180,
  kF = function (t) {
    return (t * 180) / Math.PI;
  },
  qe = function (t, r, n, i) {
    return {
      x: t + Math.cos(-ls * i) * n,
      y: r + Math.sin(-ls * i) * n,
    };
  },
  MF = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  NF = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = MF(
        {
          x: n,
          y: i,
        },
        {
          x: a,
          y: o,
        },
      );
    if (u <= 0)
      return {
        radius: u,
      };
    var l = (n - a) / u,
      s = Math.acos(l);
    return (
      i > o && (s = 2 * Math.PI - s),
      {
        radius: u,
        angle: kF(s),
        angleInRadian: s,
      }
    );
  },
  IF = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return {
      startAngle: r - o * 360,
      endAngle: n - o * 360,
    };
  },
  DF = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  j0 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = NF(
        {
          x: n,
          y: i,
        },
        r,
      ),
      o = a.radius,
      u = a.angle,
      l = r.innerRadius,
      s = r.outerRadius;
    if (o < l || o > s) return !1;
    if (o === 0) return !0;
    var f = IF(r),
      c = f.startAngle,
      p = f.endAngle,
      d = u,
      y;
    if (c <= p) {
      for (; d > p; ) d -= 360;
      for (; d < c; ) d += 360;
      y = d >= c && d <= p;
    } else {
      for (; d > c; ) d -= 360;
      for (; d < p; ) d += 360;
      y = d >= p && d <= c;
    }
    return y
      ? T0(
          T0({}, r),
          {},
          {
            radius: o,
            angle: DF(d, r),
          },
        )
      : null;
  };

function Bo(e) {
  "@babel/helpers - typeof";
  return (
    (Bo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bo(e)
  );
}
var LF = ["offset"];

function RF(e) {
  return UF(e) || FF(e) || zF(e) || BF();
}

function BF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function zF(e, t) {
  if (e) {
    if (typeof e == "string") return gd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gd(e, t);
  }
}

function FF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function UF(e) {
  if (Array.isArray(e)) return gd(e);
}

function gd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function WF(e, t) {
  if (e == null) return {};
  var r = HF(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function HF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function C0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? C0(Object(r), !0).forEach(function (n) {
          VF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : C0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function VF(e, t, r) {
  return (
    (t = KF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function KF(e) {
  var t = GF(e, "string");
  return Bo(t) == "symbol" ? t : t + "";
}

function GF(e, t) {
  if (Bo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function zo() {
  return (
    (zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zo.apply(this, arguments)
  );
}
var qF = function (t) {
    var r = t.value,
      n = t.formatter,
      i = ne(t.children) ? r : t.children;
    return te(n) ? n(i) : i;
  },
  XF = function (t, r) {
    var n = Qt(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  YF = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      l = a,
      s = l.cx,
      f = l.cy,
      c = l.innerRadius,
      p = l.outerRadius,
      d = l.startAngle,
      y = l.endAngle,
      g = l.clockWise,
      w = (c + p) / 2,
      v = XF(d, y),
      h = v >= 0 ? 1 : -1,
      m,
      S;
    i === "insideStart"
      ? ((m = d + h * o), (S = g))
      : i === "insideEnd"
        ? ((m = y - h * o), (S = !g))
        : i === "end" && ((m = y + h * o), (S = g)),
      (S = v <= 0 ? S : !S);
    var b = qe(s, f, w, m),
      x = qe(s, f, w, m + (S ? 1 : -1) * 359),
      O = "M"
        .concat(b.x, ",")
        .concat(
          b.y,
          `
    A`,
        )
        .concat(w, ",")
        .concat(w, ",0,1,")
        .concat(
          S ? 0 : 1,
          `,
    `,
        )
        .concat(x.x, ",")
        .concat(x.y),
      _ = ne(t.id) ? cu("recharts-radial-line-") : t.id;
    return A.createElement(
      "text",
      zo({}, n, {
        dominantBaseline: "central",
        className: ue("recharts-radial-bar-label", u),
      }),
      A.createElement(
        "defs",
        null,
        A.createElement("path", {
          id: _,
          d: O,
        }),
      ),
      A.createElement(
        "textPath",
        {
          xlinkHref: "#".concat(_),
        },
        r,
      ),
    );
  },
  QF = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      l = a.innerRadius,
      s = a.outerRadius,
      f = a.startAngle,
      c = a.endAngle,
      p = (f + c) / 2;
    if (i === "outside") {
      var d = qe(o, u, s + n, p),
        y = d.x,
        g = d.y;
      return {
        x: y,
        y: g,
        textAnchor: y >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return {
        x: o,
        y: u,
        textAnchor: "middle",
        verticalAnchor: "middle",
      };
    if (i === "centerTop")
      return {
        x: o,
        y: u,
        textAnchor: "middle",
        verticalAnchor: "start",
      };
    if (i === "centerBottom")
      return {
        x: o,
        y: u,
        textAnchor: "middle",
        verticalAnchor: "end",
      };
    var w = (l + s) / 2,
      v = qe(o, u, w, p),
      h = v.x,
      m = v.y;
    return {
      x: h,
      y: m,
      textAnchor: "middle",
      verticalAnchor: "middle",
    };
  },
  ZF = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      l = o.y,
      s = o.width,
      f = o.height,
      c = f >= 0 ? 1 : -1,
      p = c * i,
      d = c > 0 ? "end" : "start",
      y = c > 0 ? "start" : "end",
      g = s >= 0 ? 1 : -1,
      w = g * i,
      v = g > 0 ? "end" : "start",
      h = g > 0 ? "start" : "end";
    if (a === "top") {
      var m = {
        x: u + s / 2,
        y: l - c * i,
        textAnchor: "middle",
        verticalAnchor: d,
      };
      return Le(
        Le({}, m),
        n
          ? {
              height: Math.max(l - n.y, 0),
              width: s,
            }
          : {},
      );
    }
    if (a === "bottom") {
      var S = {
        x: u + s / 2,
        y: l + f + p,
        textAnchor: "middle",
        verticalAnchor: y,
      };
      return Le(
        Le({}, S),
        n
          ? {
              height: Math.max(n.y + n.height - (l + f), 0),
              width: s,
            }
          : {},
      );
    }
    if (a === "left") {
      var b = {
        x: u - w,
        y: l + f / 2,
        textAnchor: v,
        verticalAnchor: "middle",
      };
      return Le(
        Le({}, b),
        n
          ? {
              width: Math.max(b.x - n.x, 0),
              height: f,
            }
          : {},
      );
    }
    if (a === "right") {
      var x = {
        x: u + s + w,
        y: l + f / 2,
        textAnchor: h,
        verticalAnchor: "middle",
      };
      return Le(
        Le({}, x),
        n
          ? {
              width: Math.max(n.x + n.width - x.x, 0),
              height: f,
            }
          : {},
      );
    }
    var O = n
      ? {
          width: s,
          height: f,
        }
      : {};
    return a === "insideLeft"
      ? Le(
          {
            x: u + w,
            y: l + f / 2,
            textAnchor: h,
            verticalAnchor: "middle",
          },
          O,
        )
      : a === "insideRight"
        ? Le(
            {
              x: u + s - w,
              y: l + f / 2,
              textAnchor: v,
              verticalAnchor: "middle",
            },
            O,
          )
        : a === "insideTop"
          ? Le(
              {
                x: u + s / 2,
                y: l + p,
                textAnchor: "middle",
                verticalAnchor: y,
              },
              O,
            )
          : a === "insideBottom"
            ? Le(
                {
                  x: u + s / 2,
                  y: l + f - p,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                O,
              )
            : a === "insideTopLeft"
              ? Le(
                  {
                    x: u + w,
                    y: l + p,
                    textAnchor: h,
                    verticalAnchor: y,
                  },
                  O,
                )
              : a === "insideTopRight"
                ? Le(
                    {
                      x: u + s - w,
                      y: l + p,
                      textAnchor: v,
                      verticalAnchor: y,
                    },
                    O,
                  )
                : a === "insideBottomLeft"
                  ? Le(
                      {
                        x: u + w,
                        y: l + f - p,
                        textAnchor: h,
                        verticalAnchor: d,
                      },
                      O,
                    )
                  : a === "insideBottomRight"
                    ? Le(
                        {
                          x: u + s - w,
                          y: l + f - p,
                          textAnchor: v,
                          verticalAnchor: d,
                        },
                        O,
                      )
                    : oa(a) && (W(a.x) || $n(a.x)) && (W(a.y) || $n(a.y))
                      ? Le(
                          {
                            x: u + Wn(a.x, s),
                            y: l + Wn(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          O,
                        )
                      : Le(
                          {
                            x: u + s / 2,
                            y: l + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          O,
                        );
  },
  JF = function (t) {
    return "cx" in t && W(t.cx);
  };

function tt(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = WF(e, LF),
    i = Le(
      {
        offset: r,
      },
      n,
    ),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    l = i.children,
    s = i.content,
    f = i.className,
    c = f === void 0 ? "" : f,
    p = i.textBreakAll;
  if (!a || (ne(u) && ne(l) && !F.isValidElement(s) && !te(s))) return null;
  if (F.isValidElement(s)) return F.cloneElement(s, i);
  var d;
  if (te(s)) {
    if (((d = F.createElement(s, i)), F.isValidElement(d))) return d;
  } else d = qF(i);
  var y = JF(a),
    g = re(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return YF(i, d, g);
  var w = y ? QF(i) : ZF(i);
  return A.createElement(
    Gl,
    zo(
      {
        className: ue("recharts-label", c),
      },
      g,
      w,
      {
        breakAll: p,
      },
    ),
    d,
  );
}
tt.displayName = "Label";
var jO = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      l = t.radius,
      s = t.innerRadius,
      f = t.outerRadius,
      c = t.x,
      p = t.y,
      d = t.top,
      y = t.left,
      g = t.width,
      w = t.height,
      v = t.clockWise,
      h = t.labelViewBox;
    if (h) return h;
    if (W(g) && W(w)) {
      if (W(c) && W(p))
        return {
          x: c,
          y: p,
          width: g,
          height: w,
        };
      if (W(d) && W(y))
        return {
          x: d,
          y,
          width: g,
          height: w,
        };
    }
    return W(c) && W(p)
      ? {
          x: c,
          y: p,
          width: 0,
          height: 0,
        }
      : W(r) && W(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: s || 0,
            outerRadius: f || l || u || 0,
            clockWise: v,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  e6 = function (t, r) {
    return t
      ? t === !0
        ? A.createElement(tt, {
            key: "label-implicit",
            viewBox: r,
          })
        : ze(t)
          ? A.createElement(tt, {
              key: "label-implicit",
              viewBox: r,
              value: t,
            })
          : F.isValidElement(t)
            ? t.type === tt
              ? F.cloneElement(t, {
                  key: "label-implicit",
                  viewBox: r,
                })
              : A.createElement(tt, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
            : te(t)
              ? A.createElement(tt, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
              : oa(t)
                ? A.createElement(
                    tt,
                    zo(
                      {
                        viewBox: r,
                      },
                      t,
                      {
                        key: "label-implicit",
                      },
                    ),
                  )
                : null
      : null;
  },
  t6 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = jO(t),
      o = er(i, tt).map(function (l, s) {
        return F.cloneElement(l, {
          viewBox: r || a,
          key: "label-".concat(s),
        });
      });
    if (!n) return o;
    var u = e6(t.label, r || a);
    return [u].concat(RF(o));
  };
tt.parseViewBox = jO;
tt.renderCallByParent = t6;

function r6(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var n6 = r6;
const i6 = ve(n6);

function Fo(e) {
  "@babel/helpers - typeof";
  return (
    (Fo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fo(e)
  );
}
var a6 = ["valueAccessor"],
  o6 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

function u6(e) {
  return f6(e) || c6(e) || s6(e) || l6();
}

function l6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function s6(e, t) {
  if (e) {
    if (typeof e == "string") return bd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bd(e, t);
  }
}

function c6(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function f6(e) {
  if (Array.isArray(e)) return bd(e);
}

function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ss.apply(this, arguments)
  );
}

function k0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function M0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? k0(Object(r), !0).forEach(function (n) {
          p6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : k0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function p6(e, t, r) {
  return (
    (t = d6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function d6(e) {
  var t = h6(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}

function h6(e, t) {
  if (Fo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function N0(e, t) {
  if (e == null) return {};
  var r = v6(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function v6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var y6 = function (t) {
  return Array.isArray(t.value) ? i6(t.value) : t.value;
};

function on(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? y6 : t,
    n = N0(e, a6),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    l = n.textBreakAll,
    s = N0(n, o6);
  return !i || !i.length
    ? null
    : A.createElement(
        _e,
        {
          className: "recharts-label-list",
        },
        i.map(function (f, c) {
          var p = ne(a) ? r(f, c) : Pt(f && f.payload, a),
            d = ne(u)
              ? {}
              : {
                  id: "".concat(u, "-").concat(c),
                };
          return A.createElement(
            tt,
            ss({}, re(f, !0), s, d, {
              parentViewBox: f.parentViewBox,
              value: p,
              textBreakAll: l,
              viewBox: tt.parseViewBox(
                ne(o)
                  ? f
                  : M0(
                      M0({}, f),
                      {},
                      {
                        clockWise: o,
                      },
                    ),
              ),
              key: "label-".concat(c),
              index: c,
            }),
          );
        }),
      );
}
on.displayName = "LabelList";

function m6(e, t) {
  return e
    ? e === !0
      ? A.createElement(on, {
          key: "labelList-implicit",
          data: t,
        })
      : A.isValidElement(e) || te(e)
        ? A.createElement(on, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : oa(e)
          ? A.createElement(
              on,
              ss(
                {
                  data: t,
                },
                e,
                {
                  key: "labelList-implicit",
                },
              ),
            )
          : null
    : null;
}

function g6(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = er(n, on).map(function (o, u) {
      return F.cloneElement(o, {
        data: t,
        key: "labelList-".concat(u),
      });
    });
  if (!r) return i;
  var a = m6(e.label, t);
  return [a].concat(u6(i));
}
on.renderCallByParent = g6;

function Uo(e) {
  "@babel/helpers - typeof";
  return (
    (Uo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Uo(e)
  );
}

function wd() {
  return (
    (wd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    wd.apply(this, arguments)
  );
}

function I0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function D0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? I0(Object(r), !0).forEach(function (n) {
          b6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : I0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function b6(e, t, r) {
  return (
    (t = w6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function w6(e) {
  var t = x6(e, "string");
  return Uo(t) == "symbol" ? t : t + "";
}

function x6(e, t) {
  if (Uo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var S6 = function (t, r) {
    var n = Qt(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  Hu = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      l = t.cornerRadius,
      s = t.cornerIsExternal,
      f = l * (u ? 1 : -1) + i,
      c = Math.asin(l / f) / ls,
      p = s ? a : a + o * c,
      d = qe(r, n, f, p),
      y = qe(r, n, i, p),
      g = s ? a - o * c : a,
      w = qe(r, n, f * Math.cos(c * ls), g);
    return {
      center: d,
      circleTangency: y,
      lineTangency: w,
      theta: c,
    };
  },
  CO = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      l = S6(o, u),
      s = o + l,
      f = qe(r, n, a, o),
      c = qe(r, n, a, s),
      p = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o > s),
          `,
    `,
        )
        .concat(c.x, ",")
        .concat(
          c.y,
          `
  `,
        );
    if (i > 0) {
      var d = qe(r, n, i, o),
        y = qe(r, n, i, s);
      p += "L "
        .concat(y.x, ",")
        .concat(
          y.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `,
        )
        .concat(d.x, ",")
        .concat(d.y, " Z");
    } else p += "L ".concat(r, ",").concat(n, " Z");
    return p;
  },
  O6 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      l = t.cornerIsExternal,
      s = t.startAngle,
      f = t.endAngle,
      c = Qt(f - s),
      p = Hu({
        cx: r,
        cy: n,
        radius: a,
        angle: s,
        sign: c,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      d = p.circleTangency,
      y = p.lineTangency,
      g = p.theta,
      w = Hu({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -c,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      v = w.circleTangency,
      h = w.lineTangency,
      m = w.theta,
      S = l ? Math.abs(s - f) : Math.abs(s - f) - g - m;
    if (S < 0)
      return u
        ? "M "
            .concat(y.x, ",")
            .concat(
              y.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : CO({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f,
          });
    var b = "M "
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(d.x, ",")
      .concat(
        d.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(S > 180), ",")
      .concat(+(c < 0), ",")
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(h.x, ",")
      .concat(
        h.y,
        `
  `,
      );
    if (i > 0) {
      var x = Hu({
          cx: r,
          cy: n,
          radius: i,
          angle: s,
          sign: c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        O = x.circleTangency,
        _ = x.lineTangency,
        P = x.theta,
        $ = Hu({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        E = $.circleTangency,
        j = $.lineTangency,
        k = $.theta,
        I = l ? Math.abs(s - f) : Math.abs(s - f) - P - k;
      if (I < 0 && o === 0)
        return "".concat(b, "L").concat(r, ",").concat(n, "Z");
      b += "L"
        .concat(j.x, ",")
        .concat(
          j.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(E.x, ",")
        .concat(
          E.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(I > 180), ",")
        .concat(+(c > 0), ",")
        .concat(O.x, ",")
        .concat(
          O.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(_.x, ",")
        .concat(_.y, "Z");
    } else b += "L".concat(r, ",").concat(n, "Z");
    return b;
  },
  _6 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  kO = function (t) {
    var r = D0(D0({}, _6), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      l = r.forceCornerRadius,
      s = r.cornerIsExternal,
      f = r.startAngle,
      c = r.endAngle,
      p = r.className;
    if (o < a || f === c) return null;
    var d = ue("recharts-sector", p),
      y = o - a,
      g = Wn(u, y, 0, !0),
      w;
    return (
      g > 0 && Math.abs(f - c) < 360
        ? (w = O6({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(g, y / 2),
            forceCornerRadius: l,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: c,
          }))
        : (w = CO({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: c,
          })),
      A.createElement(
        "path",
        wd({}, re(r, !0), {
          className: d,
          d: w,
          role: "img",
        }),
      )
    );
  };

function Wo(e) {
  "@babel/helpers - typeof";
  return (
    (Wo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wo(e)
  );
}

function xd() {
  return (
    (xd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xd.apply(this, arguments)
  );
}

function L0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function R0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? L0(Object(r), !0).forEach(function (n) {
          P6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : L0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function P6(e, t, r) {
  return (
    (t = A6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function A6(e) {
  var t = E6(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}

function E6(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B0 = {
    curveBasisClosed: OC,
    curveBasisOpen: _C,
    curveBasis: SC,
    curveBumpX: lC,
    curveBumpY: sC,
    curveLinearClosed: PC,
    curveLinear: cc,
    curveMonotoneX: AC,
    curveMonotoneY: EC,
    curveNatural: $C,
    curveStep: TC,
    curveStepAfter: CC,
    curveStepBefore: jC,
  },
  Vu = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Ma = function (t) {
    return t.x;
  },
  Na = function (t) {
    return t.y;
  },
  $6 = function (t, r) {
    if (te(t)) return t;
    var n = "curve".concat(lc(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? B0["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : B0[n] || cc;
  },
  T6 = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      l = t.connectNulls,
      s = l === void 0 ? !1 : l,
      f = $6(n, u),
      c = s
        ? a.filter(function (g) {
            return Vu(g);
          })
        : a,
      p;
    if (Array.isArray(o)) {
      var d = s
          ? o.filter(function (g) {
              return Vu(g);
            })
          : o,
        y = c.map(function (g, w) {
          return R0(
            R0({}, g),
            {},
            {
              base: d[w],
            },
          );
        });
      return (
        u === "vertical"
          ? (p = Iu()
              .y(Na)
              .x1(Ma)
              .x0(function (g) {
                return g.base.x;
              }))
          : (p = Iu()
              .x(Ma)
              .y1(Na)
              .y0(function (g) {
                return g.base.y;
              })),
        p.defined(Vu).curve(f),
        p(y)
      );
    }
    return (
      u === "vertical" && W(o)
        ? (p = Iu().y(Na).x1(Ma).x0(o))
        : W(o)
          ? (p = Iu().x(Ma).y1(Na).y0(o))
          : (p = Nx().x(Ma).y(Na)),
      p.defined(Vu).curve(f),
      p(c)
    );
  },
  eo = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? T6(t) : i;
    return A.createElement(
      "path",
      xd({}, re(t, !1), kl(t), {
        className: ue("recharts-curve", r),
        d: o,
        ref: a,
      }),
    );
  },
  MO = {
    exports: {},
  },
  j6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  C6 = j6,
  k6 = C6;

function NO() {}

function IO() {}
IO.resetWarningCache = NO;
var M6 = function () {
  function e(n, i, a, o, u, l) {
    if (l !== k6) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;

  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: IO,
    resetWarningCache: NO,
  };
  return (r.PropTypes = r), r;
};
MO.exports = M6();
var N6 = MO.exports;
const Z = ve(N6);
var I6 = Object.getOwnPropertyNames,
  D6 = Object.getOwnPropertySymbols,
  L6 = Object.prototype.hasOwnProperty;

function z0(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}

function Ku(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}

function F0(e) {
  return I6(e).concat(D6(e));
}
var DO =
  Object.hasOwn ||
  function (e, t) {
    return L6.call(e, t);
  };

function ga(e, t) {
  return e || t ? e === t : e === t || (e !== e && t !== t);
}
var LO = "_owner",
  U0 = Object.getOwnPropertyDescriptor,
  W0 = Object.keys;

function R6(e, t, r) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}

function B6(e, t) {
  return ga(e.getTime(), t.getTime());
}

function H0(e, t, r) {
  if (e.size !== t.size) return !1;
  for (var n = {}, i = e.entries(), a = 0, o, u; (o = i.next()) && !o.done; ) {
    for (var l = t.entries(), s = !1, f = 0; (u = l.next()) && !u.done; ) {
      var c = o.value,
        p = c[0],
        d = c[1],
        y = u.value,
        g = y[0],
        w = y[1];
      !s &&
        !n[f] &&
        (s = r.equals(p, g, a, f, e, t, r) && r.equals(d, w, p, g, e, t, r)) &&
        (n[f] = !0),
        f++;
    }
    if (!s) return !1;
    a++;
  }
  return !0;
}

function z6(e, t, r) {
  var n = W0(e),
    i = n.length;
  if (W0(t).length !== i) return !1;
  for (var a; i-- > 0; )
    if (
      ((a = n[i]),
      (a === LO && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !DO(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r))
    )
      return !1;
  return !0;
}

function Ia(e, t, r) {
  var n = F0(e),
    i = n.length;
  if (F0(t).length !== i) return !1;
  for (var a, o, u; i-- > 0; )
    if (
      ((a = n[i]),
      (a === LO && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !DO(t, a) ||
        !r.equals(e[a], t[a], a, a, e, t, r) ||
        ((o = U0(e, a)),
        (u = U0(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}

function F6(e, t) {
  return ga(e.valueOf(), t.valueOf());
}

function U6(e, t) {
  return e.source === t.source && e.flags === t.flags;
}

function V0(e, t, r) {
  if (e.size !== t.size) return !1;
  for (var n = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var u = t.values(), l = !1, s = 0; (o = u.next()) && !o.done; )
      !l &&
        !n[s] &&
        (l = r.equals(a.value, o.value, a.value, o.value, e, t, r)) &&
        (n[s] = !0),
        s++;
    if (!l) return !1;
  }
  return !0;
}

function W6(e, t) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
var H6 = "[object Arguments]",
  V6 = "[object Boolean]",
  K6 = "[object Date]",
  G6 = "[object Map]",
  q6 = "[object Number]",
  X6 = "[object Object]",
  Y6 = "[object RegExp]",
  Q6 = "[object Set]",
  Z6 = "[object String]",
  J6 = Array.isArray,
  K0 =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  G0 = Object.assign,
  eU = Object.prototype.toString.call.bind(Object.prototype.toString);

function tU(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areMapsEqual,
    i = e.areObjectsEqual,
    a = e.arePrimitiveWrappersEqual,
    o = e.areRegExpsEqual,
    u = e.areSetsEqual,
    l = e.areTypedArraysEqual;
  return function (f, c, p) {
    if (f === c) return !0;
    if (f == null || c == null || typeof f != "object" || typeof c != "object")
      return f !== f && c !== c;
    var d = f.constructor;
    if (d !== c.constructor) return !1;
    if (d === Object) return i(f, c, p);
    if (J6(f)) return t(f, c, p);
    if (K0 != null && K0(f)) return l(f, c, p);
    if (d === Date) return r(f, c, p);
    if (d === RegExp) return o(f, c, p);
    if (d === Map) return n(f, c, p);
    if (d === Set) return u(f, c, p);
    var y = eU(f);
    return y === K6
      ? r(f, c, p)
      : y === Y6
        ? o(f, c, p)
        : y === G6
          ? n(f, c, p)
          : y === Q6
            ? u(f, c, p)
            : y === X6
              ? typeof f.then != "function" &&
                typeof c.then != "function" &&
                i(f, c, p)
              : y === H6
                ? i(f, c, p)
                : y === V6 || y === q6 || y === Z6
                  ? a(f, c, p)
                  : !1;
  };
}

function rU(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    i = {
      areArraysEqual: n ? Ia : R6,
      areDatesEqual: B6,
      areMapsEqual: n ? z0(H0, Ia) : H0,
      areObjectsEqual: n ? Ia : z6,
      arePrimitiveWrappersEqual: F6,
      areRegExpsEqual: U6,
      areSetsEqual: n ? z0(V0, Ia) : V0,
      areTypedArraysEqual: n ? Ia : W6,
    };
  if ((r && (i = G0({}, i, r(i))), t)) {
    var a = Ku(i.areArraysEqual),
      o = Ku(i.areMapsEqual),
      u = Ku(i.areObjectsEqual),
      l = Ku(i.areSetsEqual);
    i = G0({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: l,
    });
  }
  return i;
}

function nU(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}

function iU(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    i = e.equals,
    a = e.strict;
  if (n)
    return function (l, s) {
      var f = n(),
        c = f.cache,
        p = c === void 0 ? (t ? new WeakMap() : void 0) : c,
        d = f.meta;
      return r(l, s, {
        cache: p,
        equals: i,
        meta: d,
        strict: a,
      });
    };
  if (t)
    return function (l, s) {
      return r(l, s, {
        cache: new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a,
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a,
  };
  return function (l, s) {
    return r(l, s, o);
  };
}
var aU = vn();
vn({
  strict: !0,
});
vn({
  circular: !0,
});
vn({
  circular: !0,
  strict: !0,
});
vn({
  createInternalComparator: function () {
    return ga;
  },
});
vn({
  strict: !0,
  createInternalComparator: function () {
    return ga;
  },
});
vn({
  circular: !0,
  createInternalComparator: function () {
    return ga;
  },
});
vn({
  circular: !0,
  createInternalComparator: function () {
    return ga;
  },
  strict: !0,
});

function vn(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    u = rU(e),
    l = tU(u),
    s = n ? n(l) : nU(l);
  return iU({
    circular: r,
    comparator: l,
    createState: i,
    equals: s,
    strict: o,
  });
}

function oU(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}

function q0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : oU(i);
    };
  requestAnimationFrame(n);
}

function Sd(e) {
  "@babel/helpers - typeof";
  return (
    (Sd =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sd(e)
  );
}

function uU(e) {
  return fU(e) || cU(e) || sU(e) || lU();
}

function lU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function sU(e, t) {
  if (e) {
    if (typeof e == "string") return X0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return X0(e, t);
  }
}

function X0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function cU(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function fU(e) {
  if (Array.isArray(e)) return e;
}

function pU() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = uU(o),
            l = u[0],
            s = u.slice(1);
          if (typeof l == "number") {
            q0(i.bind(null, s), l);
            return;
          }
          i(l), q0(i.bind(null, s));
          return;
        }
        Sd(a) === "object" && ((e = a), t(e)), typeof a == "function" && a();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      (r = !1), n(a);
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}

function Ho(e) {
  "@babel/helpers - typeof";
  return (
    (Ho =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ho(e)
  );
}

function Y0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Q0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Y0(Object(r), !0).forEach(function (n) {
          RO(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Y0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function RO(e, t, r) {
  return (
    (t = dU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function dU(e) {
  var t = hU(e, "string");
  return Ho(t) === "symbol" ? t : String(t);
}

function hU(e, t) {
  if (Ho(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ho(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vU = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  yU = function (t) {
    return t;
  },
  mU = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  to = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Q0(Q0({}, n), {}, RO({}, i, t(i, r[i])));
    }, {});
  },
  Z0 = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(mU(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };

function gU(e, t) {
  return xU(e) || wU(e, t) || BO(e, t) || bU();
}

function bU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function wU(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function xU(e) {
  if (Array.isArray(e)) return e;
}

function SU(e) {
  return PU(e) || _U(e) || BO(e) || OU();
}

function OU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function BO(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Od(e, t);
  }
}

function _U(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function PU(e) {
  if (Array.isArray(e)) return Od(e);
}

function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var cs = 1e-4,
  zO = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  FO = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  J0 = function (t, r) {
    return function (n) {
      var i = zO(t, r);
      return FO(i, n);
    };
  },
  AU = function (t, r) {
    return function (n) {
      var i = zO(t, r),
        a = [].concat(
          SU(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return FO(a, n);
    };
  },
  e1 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          (i = 0), (a = 0), (o = 1), (u = 1);
          break;
        case "ease":
          (i = 0.25), (a = 0.1), (o = 0.25), (u = 1);
          break;
        case "ease-in":
          (i = 0.42), (a = 0), (o = 1), (u = 1);
          break;
        case "ease-out":
          (i = 0.42), (a = 0), (o = 0.58), (u = 1);
          break;
        case "ease-in-out":
          (i = 0), (a = 0), (o = 0.58), (u = 1);
          break;
        default: {
          var l = r[0].split("(");
          if (
            l[0] === "cubic-bezier" &&
            l[1].split(")")[0].split(",").length === 4
          ) {
            var s = l[1]
                .split(")")[0]
                .split(",")
                .map(function (w) {
                  return parseFloat(w);
                }),
              f = gU(s, 4);
            (i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]);
          }
        }
      }
    var c = J0(i, o),
      p = J0(a, u),
      d = AU(i, o),
      y = function (v) {
        return v > 1 ? 1 : v < 0 ? 0 : v;
      },
      g = function (v) {
        for (var h = v > 1 ? 1 : v, m = h, S = 0; S < 8; ++S) {
          var b = c(m) - h,
            x = d(m);
          if (Math.abs(b - h) < cs || x < cs) return p(m);
          m = y(m - b / x);
        }
        return p(m);
      };
    return (g.isStepper = !1), g;
  },
  EU = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      l = function (f, c, p) {
        var d = -(f - c) * n,
          y = p * a,
          g = p + ((d - y) * u) / 1e3,
          w = (p * u) / 1e3 + f;
        return Math.abs(w - c) < cs && Math.abs(g) < cs ? [c, 0] : [w, g];
      };
    return (l.isStepper = !0), (l.dt = u), l;
  },
  $U = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return e1(i);
        case "spring":
          return EU();
        default:
          if (i.split("(")[0] === "cubic-bezier") return e1(i);
      }
    return typeof i == "function" ? i : null;
  };

function Vo(e) {
  "@babel/helpers - typeof";
  return (
    (Vo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vo(e)
  );
}

function t1(e) {
  return CU(e) || jU(e) || UO(e) || TU();
}

function TU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function jU(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function CU(e) {
  if (Array.isArray(e)) return Pd(e);
}

function r1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? r1(Object(r), !0).forEach(function (n) {
          _d(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : r1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function _d(e, t, r) {
  return (
    (t = kU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function kU(e) {
  var t = MU(e, "string");
  return Vo(t) === "symbol" ? t : String(t);
}

function MU(e, t) {
  if (Vo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function NU(e, t) {
  return LU(e) || DU(e, t) || UO(e, t) || IU();
}

function IU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function UO(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pd(e, t);
  }
}

function Pd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function DU(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function LU(e) {
  if (Array.isArray(e)) return e;
}
var fs = function (t, r, n) {
    return t + (r - t) * n;
  },
  Ad = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  RU = function e(t, r, n) {
    var i = to(function (a, o) {
      if (Ad(o)) {
        var u = t(o.from, o.to, o.velocity),
          l = NU(u, 2),
          s = l[0],
          f = l[1];
        return Ke(
          Ke({}, o),
          {},
          {
            from: s,
            velocity: f,
          },
        );
      }
      return o;
    }, r);
    return n < 1
      ? to(function (a, o) {
          return Ad(o)
            ? Ke(
                Ke({}, o),
                {},
                {
                  velocity: fs(o.velocity, i[a].velocity, n),
                  from: fs(o.from, i[a].from, n),
                },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const BU = function (e, t, r, n, i) {
  var a = vU(e, t),
    o = a.reduce(function (w, v) {
      return Ke(Ke({}, w), {}, _d({}, v, [e[v], t[v]]));
    }, {}),
    u = a.reduce(function (w, v) {
      return Ke(
        Ke({}, w),
        {},
        _d({}, v, {
          from: e[v],
          velocity: 0,
          to: t[v],
        }),
      );
    }, {}),
    l = -1,
    s,
    f,
    c = function () {
      return null;
    },
    p = function () {
      return to(function (v, h) {
        return h.from;
      }, u);
    },
    d = function () {
      return !Object.values(u).filter(Ad).length;
    },
    y = function (v) {
      s || (s = v);
      var h = v - s,
        m = h / r.dt;
      (u = RU(r, u, m)),
        i(Ke(Ke(Ke({}, e), t), p())),
        (s = v),
        d() || (l = requestAnimationFrame(c));
    },
    g = function (v) {
      f || (f = v);
      var h = (v - f) / n,
        m = to(function (b, x) {
          return fs.apply(void 0, t1(x).concat([r(h)]));
        }, o);
      if ((i(Ke(Ke(Ke({}, e), t), m)), h < 1)) l = requestAnimationFrame(c);
      else {
        var S = to(function (b, x) {
          return fs.apply(void 0, t1(x).concat([r(1)]));
        }, o);
        i(Ke(Ke(Ke({}, e), t), S));
      }
    };
  return (
    (c = r.isStepper ? y : g),
    function () {
      return (
        requestAnimationFrame(c),
        function () {
          cancelAnimationFrame(l);
        }
      );
    }
  );
};

function Wi(e) {
  "@babel/helpers - typeof";
  return (
    (Wi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wi(e)
  );
}
var zU = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];

function FU(e, t) {
  if (e == null) return {};
  var r = UU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function UU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}

function Cf(e) {
  return KU(e) || VU(e) || HU(e) || WU();
}

function WU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function HU(e, t) {
  if (e) {
    if (typeof e == "string") return Ed(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ed(e, t);
  }
}

function VU(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function KU(e) {
  if (Array.isArray(e)) return Ed(e);
}

function Ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function n1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? n1(Object(r), !0).forEach(function (n) {
          Fa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : n1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Fa(e, t, r) {
  return (
    (t = WO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function GU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function qU(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, WO(n.key), n);
  }
}

function XU(e, t, r) {
  return (
    t && qU(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function WO(e) {
  var t = YU(e, "string");
  return Wi(t) === "symbol" ? t : String(t);
}

function YU(e, t) {
  if (Wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function QU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && $d(e, t);
}

function $d(e, t) {
  return (
    ($d = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    $d(e, t)
  );
}

function ZU(e) {
  var t = JU();
  return function () {
    var n = ps(e),
      i;
    if (t) {
      var a = ps(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Td(this, i);
  };
}

function Td(e, t) {
  if (t && (Wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return jd(e);
}

function jd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function JU() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}

function ps(e) {
  return (
    (ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ps(e)
  );
}
var Mr = (function (e) {
  QU(r, e);
  var t = ZU(r);

  function r(n, i) {
    var a;
    GU(this, r), (a = t.call(this, n, i));
    var o = a.props,
      u = o.isActive,
      l = o.attributeName,
      s = o.from,
      f = o.to,
      c = o.steps,
      p = o.children,
      d = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(jd(a))),
      (a.changeStyle = a.changeStyle.bind(jd(a))),
      !u || d <= 0)
    )
      return (
        (a.state = {
          style: {},
        }),
        typeof p == "function" &&
          (a.state = {
            style: f,
          }),
        Td(a)
      );
    if (c && c.length)
      a.state = {
        style: c[0].style,
      };
    else if (s) {
      if (typeof p == "function")
        return (
          (a.state = {
            style: s,
          }),
          Td(a)
        );
      a.state = {
        style: l ? Fa({}, l, s) : s,
      };
    } else
      a.state = {
        style: {},
      };
    return a;
  }
  return (
    XU(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          (this.mounted = !0), !(!a || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            l = a.attributeName,
            s = a.shouldReAnimate,
            f = a.to,
            c = a.from,
            p = this.state.style;
          if (u) {
            if (!o) {
              var d = {
                style: l ? Fa({}, l, f) : f,
              };
              this.state &&
                p &&
                ((l && p[l] !== f) || (!l && p !== f)) &&
                this.setState(d);
              return;
            }
            if (!(aU(i.to, f) && i.canBegin && i.isActive)) {
              var y = !i.canBegin || !i.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var g = y || s ? c : i.to;
              if (this.state && p) {
                var w = {
                  style: l ? Fa({}, l, g) : g,
                };
                ((l && p[l] !== g) || (!l && p !== g)) && this.setState(w);
              }
              this.runAnimation(
                Vt(
                  Vt({}, this.props),
                  {},
                  {
                    from: g,
                    begin: 0,
                  },
                ),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i();
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted &&
            this.setState({
              style: i,
            });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            l = i.duration,
            s = i.easing,
            f = i.begin,
            c = i.onAnimationEnd,
            p = i.onAnimationStart,
            d = BU(o, u, $U(s), l, this.changeStyle),
            y = function () {
              a.stopJSAnimation = d();
            };
          this.manager.start([p, f, y, l, c]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            l = i.onAnimationStart,
            s = o[0],
            f = s.style,
            c = s.duration,
            p = c === void 0 ? 0 : c,
            d = function (g, w, v) {
              if (v === 0) return g;
              var h = w.duration,
                m = w.easing,
                S = m === void 0 ? "ease" : m,
                b = w.style,
                x = w.properties,
                O = w.onAnimationEnd,
                _ = v > 0 ? o[v - 1] : w,
                P = x || Object.keys(b);
              if (typeof S == "function" || S === "spring")
                return [].concat(Cf(g), [
                  a.runJSAnimation.bind(a, {
                    from: _.style,
                    to: b,
                    duration: h,
                    easing: S,
                  }),
                  h,
                ]);
              var $ = Z0(P, h, S),
                E = Vt(
                  Vt(Vt({}, _.style), b),
                  {},
                  {
                    transition: $,
                  },
                );
              return [].concat(Cf(g), [E, h, O]).filter(yU);
            };
          return this.manager.start(
            [l].concat(Cf(o.reduce(d, [f, Math.max(p, u)])), [
              i.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = pU());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            l = i.to,
            s = i.easing,
            f = i.onAnimationStart,
            c = i.onAnimationEnd,
            p = i.steps,
            d = i.children,
            y = this.manager;
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof s == "function" || typeof d == "function" || s === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (p.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var g = u ? Fa({}, u, l) : l,
            w = Z0(Object.keys(g), o, s);
          y.start([
            f,
            a,
            Vt(
              Vt({}, g),
              {},
              {
                transition: w,
              },
            ),
            o,
            c,
          ]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          i.attributeName, i.easing;
          var u = i.isActive;
          i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart;
          var l = FU(i, zU),
            s = F.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || s === 0 || o <= 0) return a;
          var c = function (d) {
            var y = d.props,
              g = y.style,
              w = g === void 0 ? {} : g,
              v = y.className,
              h = F.cloneElement(
                d,
                Vt(
                  Vt({}, l),
                  {},
                  {
                    style: Vt(Vt({}, w), f),
                    className: v,
                  },
                ),
              );
            return h;
          };
          return s === 1
            ? c(F.Children.only(a))
            : A.createElement(
                "div",
                null,
                F.Children.map(a, function (p) {
                  return c(p);
                }),
              );
        },
      },
    ]),
    r
  );
})(F.PureComponent);
Mr.displayName = "Animate";
Mr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
Mr.propTypes = {
  from: Z.oneOfType([Z.object, Z.string]),
  to: Z.oneOfType([Z.object, Z.string]),
  attributeName: Z.string,
  duration: Z.number,
  begin: Z.number,
  easing: Z.oneOfType([Z.string, Z.func]),
  steps: Z.arrayOf(
    Z.shape({
      duration: Z.number.isRequired,
      style: Z.object.isRequired,
      easing: Z.oneOfType([
        Z.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        Z.func,
      ]),
      properties: Z.arrayOf("string"),
      onAnimationEnd: Z.func,
    }),
  ),
  children: Z.oneOfType([Z.node, Z.func]),
  isActive: Z.bool,
  canBegin: Z.bool,
  onAnimationEnd: Z.func,
  shouldReAnimate: Z.bool,
  onAnimationStart: Z.func,
  onAnimationReStart: Z.func,
};
Z.object, Z.object, Z.object, Z.element;
Z.object, Z.object, Z.object, Z.oneOfType([Z.array, Z.element]), Z.any;

function Ko(e) {
  "@babel/helpers - typeof";
  return (
    (Ko =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ko(e)
  );
}

function ds() {
  return (
    (ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ds.apply(this, arguments)
  );
}

function eW(e, t) {
  return iW(e) || nW(e, t) || rW(e, t) || tW();
}

function tW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function rW(e, t) {
  if (e) {
    if (typeof e == "string") return i1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return i1(e, t);
  }
}

function i1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function nW(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function iW(e) {
  if (Array.isArray(e)) return e;
}

function a1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function o1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? a1(Object(r), !0).forEach(function (n) {
          aW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : a1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function aW(e, t, r) {
  return (
    (t = oW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function oW(e) {
  var t = uW(e, "string");
  return Ko(t) == "symbol" ? t : t + "";
}

function uW(e, t) {
  if (Ko(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var u1 = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      l = n >= 0 ? 1 : -1,
      s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var c = [0, 0, 0, 0], p = 0, d = 4; p < d; p++)
        c[p] = a[p] > o ? o : a[p];
      (f = "M".concat(t, ",").concat(r + u * c[0])),
        c[0] > 0 &&
          (f += "A "
            .concat(c[0], ",")
            .concat(c[0], ",0,0,")
            .concat(s, ",")
            .concat(t + l * c[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - l * c[1], ",").concat(r)),
        c[1] > 0 &&
          (f += "A "
            .concat(c[1], ",")
            .concat(c[1], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * c[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * c[2])),
        c[2] > 0 &&
          (f += "A "
            .concat(c[2], ",")
            .concat(c[2], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n - l * c[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + l * c[3], ",").concat(r + i)),
        c[3] > 0 &&
          (f += "A "
            .concat(c[3], ",")
            .concat(c[3], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * c[3])),
        (f += "Z");
    } else if (o > 0 && a === +a && a > 0) {
      var y = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(s, ",")
        .concat(t + l * y, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - l * y, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(s, ",")
        .concat(t + n, ",")
        .concat(
          r + u * y,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(s, ",")
        .concat(t + n - l * y, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + l * y, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(s, ",")
        .concat(t, ",")
        .concat(r + i - u * y, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return f;
  },
  lW = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      l = r.height;
    if (Math.abs(u) > 0 && Math.abs(l) > 0) {
      var s = Math.min(a, a + u),
        f = Math.max(a, a + u),
        c = Math.min(o, o + l),
        p = Math.max(o, o + l);
      return n >= s && n <= f && i >= c && i <= p;
    }
    return !1;
  },
  sW = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Hv = function (t) {
    var r = o1(o1({}, sW), t),
      n = F.useRef(),
      i = F.useState(-1),
      a = eW(i, 2),
      o = a[0],
      u = a[1];
    F.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var S = n.current.getTotalLength();
          S && u(S);
        } catch {}
    }, []);
    var l = r.x,
      s = r.y,
      f = r.width,
      c = r.height,
      p = r.radius,
      d = r.className,
      y = r.animationEasing,
      g = r.animationDuration,
      w = r.animationBegin,
      v = r.isAnimationActive,
      h = r.isUpdateAnimationActive;
    if (l !== +l || s !== +s || f !== +f || c !== +c || f === 0 || c === 0)
      return null;
    var m = ue("recharts-rectangle", d);
    return h
      ? A.createElement(
          Mr,
          {
            canBegin: o > 0,
            from: {
              width: f,
              height: c,
              x: l,
              y: s,
            },
            to: {
              width: f,
              height: c,
              x: l,
              y: s,
            },
            duration: g,
            animationEasing: y,
            isActive: h,
          },
          function (S) {
            var b = S.width,
              x = S.height,
              O = S.x,
              _ = S.y;
            return A.createElement(
              Mr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: w,
                duration: g,
                isActive: v,
                easing: y,
              },
              A.createElement(
                "path",
                ds({}, re(r, !0), {
                  className: m,
                  d: u1(O, _, b, x, p),
                  ref: n,
                }),
              ),
            );
          },
        )
      : A.createElement(
          "path",
          ds({}, re(r, !0), {
            className: m,
            d: u1(l, s, f, c, p),
          }),
        );
  };

function Cd() {
  return (
    (Cd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Cd.apply(this, arguments)
  );
}
var Vv = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = ue("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? A.createElement(
        "circle",
        Cd({}, re(t, !1), kl(t), {
          className: o,
          cx: r,
          cy: n,
          r: i,
        }),
      )
    : null;
};

function Go(e) {
  "@babel/helpers - typeof";
  return (
    (Go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Go(e)
  );
}
var cW = ["x", "y", "top", "left", "width", "height", "className"];

function kd() {
  return (
    (kd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    kd.apply(this, arguments)
  );
}

function l1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function fW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? l1(Object(r), !0).forEach(function (n) {
          pW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function pW(e, t, r) {
  return (
    (t = dW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function dW(e) {
  var t = hW(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}

function hW(e, t) {
  if (Go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function vW(e, t) {
  if (e == null) return {};
  var r = yW(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function yW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var mW = function (t, r, n, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  gW = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      l = t.left,
      s = l === void 0 ? 0 : l,
      f = t.width,
      c = f === void 0 ? 0 : f,
      p = t.height,
      d = p === void 0 ? 0 : p,
      y = t.className,
      g = vW(t, cW),
      w = fW(
        {
          x: n,
          y: a,
          top: u,
          left: s,
          width: c,
          height: d,
        },
        g,
      );
    return !W(n) || !W(a) || !W(c) || !W(d) || !W(u) || !W(s)
      ? null
      : A.createElement(
          "path",
          kd({}, re(w, !0), {
            className: ue("recharts-cross", y),
            d: mW(n, a, c, d, u, s),
          }),
        );
  },
  bW = iS,
  wW = bW(Object.getPrototypeOf, Object),
  xW = wW,
  SW = Ir,
  OW = xW,
  _W = Dr,
  PW = "[object Object]",
  AW = Function.prototype,
  EW = Object.prototype,
  HO = AW.toString,
  $W = EW.hasOwnProperty,
  TW = HO.call(Object);

function jW(e) {
  if (!_W(e) || SW(e) != PW) return !1;
  var t = OW(e);
  if (t === null) return !0;
  var r = $W.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && HO.call(r) == TW;
}
var CW = jW;
const kW = ve(CW);
var MW = Ir,
  NW = Dr,
  IW = "[object Boolean]";

function DW(e) {
  return e === !0 || e === !1 || (NW(e) && MW(e) == IW);
}
var LW = DW;
const RW = ve(LW);

function qo(e) {
  "@babel/helpers - typeof";
  return (
    (qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qo(e)
  );
}

function hs() {
  return (
    (hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    hs.apply(this, arguments)
  );
}

function BW(e, t) {
  return WW(e) || UW(e, t) || FW(e, t) || zW();
}

function zW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function FW(e, t) {
  if (e) {
    if (typeof e == "string") return s1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return s1(e, t);
  }
}

function s1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function UW(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function WW(e) {
  if (Array.isArray(e)) return e;
}

function c1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function f1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? c1(Object(r), !0).forEach(function (n) {
          HW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : c1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function HW(e, t, r) {
  return (
    (t = VW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function VW(e) {
  var t = KW(e, "string");
  return qo(t) == "symbol" ? t : t + "";
}

function KW(e, t) {
  if (qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var p1 = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  GW = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  qW = function (t) {
    var r = f1(f1({}, GW), t),
      n = F.useRef(),
      i = F.useState(-1),
      a = BW(i, 2),
      o = a[0],
      u = a[1];
    F.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var m = n.current.getTotalLength();
          m && u(m);
        } catch {}
    }, []);
    var l = r.x,
      s = r.y,
      f = r.upperWidth,
      c = r.lowerWidth,
      p = r.height,
      d = r.className,
      y = r.animationEasing,
      g = r.animationDuration,
      w = r.animationBegin,
      v = r.isUpdateAnimationActive;
    if (
      l !== +l ||
      s !== +s ||
      f !== +f ||
      c !== +c ||
      p !== +p ||
      (f === 0 && c === 0) ||
      p === 0
    )
      return null;
    var h = ue("recharts-trapezoid", d);
    return v
      ? A.createElement(
          Mr,
          {
            canBegin: o > 0,
            from: {
              upperWidth: 0,
              lowerWidth: 0,
              height: p,
              x: l,
              y: s,
            },
            to: {
              upperWidth: f,
              lowerWidth: c,
              height: p,
              x: l,
              y: s,
            },
            duration: g,
            animationEasing: y,
            isActive: v,
          },
          function (m) {
            var S = m.upperWidth,
              b = m.lowerWidth,
              x = m.height,
              O = m.x,
              _ = m.y;
            return A.createElement(
              Mr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: w,
                duration: g,
                easing: y,
              },
              A.createElement(
                "path",
                hs({}, re(r, !0), {
                  className: h,
                  d: p1(O, _, S, b, x),
                  ref: n,
                }),
              ),
            );
          },
        )
      : A.createElement(
          "g",
          null,
          A.createElement(
            "path",
            hs({}, re(r, !0), {
              className: h,
              d: p1(l, s, f, c, p),
            }),
          ),
        );
  },
  XW = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];

function Xo(e) {
  "@babel/helpers - typeof";
  return (
    (Xo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xo(e)
  );
}

function YW(e, t) {
  if (e == null) return {};
  var r = QW(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function QW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function d1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? d1(Object(r), !0).forEach(function (n) {
          ZW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function ZW(e, t, r) {
  return (
    (t = JW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function JW(e) {
  var t = e9(e, "string");
  return Xo(t) == "symbol" ? t : t + "";
}

function e9(e, t) {
  if (Xo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function t9(e, t) {
  return vs(vs({}, t), e);
}

function r9(e, t) {
  return e === "symbols";
}

function h1(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(Hv, r);
    case "trapezoid":
      return A.createElement(qW, r);
    case "sector":
      return A.createElement(kO, r);
    case "symbols":
      if (r9(t)) return A.createElement(lv, r);
      break;
    default:
      return null;
  }
}

function n9(e) {
  return F.isValidElement(e) ? e.props : e;
}

function i9(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? t9 : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    l = YW(e, XW),
    s;
  if (F.isValidElement(t)) s = F.cloneElement(t, vs(vs({}, l), n9(t)));
  else if (te(t)) s = t(l);
  else if (kW(t) && !RW(t)) {
    var f = i(t, l);
    s = A.createElement(h1, {
      shapeType: r,
      elementProps: f,
    });
  } else {
    var c = l;
    s = A.createElement(h1, {
      shapeType: r,
      elementProps: c,
    });
  }
  return u
    ? A.createElement(
        _e,
        {
          className: o,
        },
        s,
      )
    : s;
}

function Pc(e, t) {
  return t != null && "trapezoids" in e.props;
}

function Ac(e, t) {
  return t != null && "sectors" in e.props;
}

function Yo(e, t) {
  return t != null && "points" in e.props;
}

function a9(e, t) {
  var r,
    n,
    i =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return i && a;
}

function o9(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}

function u9(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}

function l9(e, t) {
  var r;
  return Pc(e, t) ? (r = a9) : Ac(e, t) ? (r = o9) : Yo(e, t) && (r = u9), r;
}

function s9(e, t) {
  var r;
  return (
    Pc(e, t)
      ? (r = "trapezoids")
      : Ac(e, t)
        ? (r = "sectors")
        : Yo(e, t) && (r = "points"),
    r
  );
}

function c9(e, t) {
  if (Pc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Ac(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Yo(e, t) ? t.payload : {};
}

function f9(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = s9(r, t),
    a = c9(r, t),
    o = n.filter(function (l, s) {
      var f = Mo(a, l),
        c = r.props[i].filter(function (y) {
          var g = l9(r, t);
          return g(y, t);
        }),
        p = r.props[i].indexOf(c[c.length - 1]),
        d = s === p;
      return f && d;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var p9 = Math.ceil,
  d9 = Math.max;

function h9(e, t, r, n) {
  for (var i = -1, a = d9(p9((t - e) / (r || 1)), 0), o = Array(a); a--; )
    (o[n ? a : ++i] = e), (e += r);
  return o;
}
var v9 = h9,
  y9 = SS,
  v1 = 1 / 0,
  m9 = 17976931348623157e292;

function g9(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = y9(e)), e === v1 || e === -v1)) {
    var t = e < 0 ? -1 : 1;
    return t * m9;
  }
  return e === e ? e : 0;
}
var b9 = g9,
  w9 = v9,
  x9 = hc,
  kf = b9;

function S9(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && x9(t, r, n) && (r = n = void 0),
      (t = kf(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = kf(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : kf(n)),
      w9(t, r, n, e)
    );
  };
}
var O9 = S9,
  _9 = O9,
  P9 = _9(),
  A9 = P9;
const ys = ve(A9);

function Qo(e) {
  "@babel/helpers - typeof";
  return (
    (Qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qo(e)
  );
}

function y1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function m1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? y1(Object(r), !0).forEach(function (n) {
          VO(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : y1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function VO(e, t, r) {
  return (
    (t = E9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function E9(e) {
  var t = $9(e, "string");
  return Qo(t) == "symbol" ? t : t + "";
}

function $9(e, t) {
  if (Qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var T9 = ["Webkit", "Moz", "O", "ms"],
  j9 = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = T9.reduce(function (a, o) {
        return m1(m1({}, a), {}, VO({}, o + n, r));
      }, {});
    return (i[t] = r), i;
  };

function Hi(e) {
  "@babel/helpers - typeof";
  return (
    (Hi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hi(e)
  );
}

function ms() {
  return (
    (ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ms.apply(this, arguments)
  );
}

function g1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g1(Object(r), !0).forEach(function (n) {
          gt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : g1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function C9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function b1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, GO(n.key), n);
  }
}

function k9(e, t, r) {
  return (
    t && b1(e.prototype, t),
    r && b1(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function M9(e, t, r) {
  return (
    (t = gs(t)),
    N9(
      e,
      KO() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r),
    )
  );
}

function N9(e, t) {
  if (t && (Hi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return I9(e);
}

function I9(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function KO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (KO = function () {
    return !!e;
  })();
}

function gs(e) {
  return (
    (gs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    gs(e)
  );
}

function D9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Md(e, t);
}

function Md(e, t) {
  return (
    (Md = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Md(e, t)
  );
}

function gt(e, t, r) {
  return (
    (t = GO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function GO(e) {
  var t = L9(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}

function L9(e, t) {
  if (Hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var R9 = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      s = Za()
        .domain(ys(0, l))
        .range([a, a + o - u]),
      f = s.domain().map(function (c) {
        return s(c);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(n),
      endX: s(i),
      scale: s,
      scaleValues: f,
    };
  },
  w1 = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Vi = (function (e) {
    function t(r) {
      var n;
      return (
        C9(this, t),
        (n = M9(this, t, [r])),
        gt(n, "handleDrag", function (i) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i);
        }),
        gt(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        gt(n, "handleDragEnd", function () {
          n.setState(
            {
              isTravellerMoving: !1,
              isSlideMoving: !1,
            },
            function () {
              var i = n.props,
                a = i.endIndex,
                o = i.onDragEnd,
                u = i.startIndex;
              o == null ||
                o({
                  endIndex: a,
                  startIndex: u,
                });
            },
          ),
            n.detachDragEndListener();
        }),
        gt(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        gt(n, "handleEnterSlideOrTraveller", function () {
          n.setState({
            isTextActive: !0,
          });
        }),
        gt(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({
            isTextActive: !1,
          });
        }),
        gt(n, "handleSlideDragStart", function (i) {
          var a = w1(i) ? i.changedTouches[0] : i;
          n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            n.attachDragEndListener();
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      D9(t, e),
      k9(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                l = u.gap,
                s = u.data,
                f = s.length - 1,
                c = Math.min(i, a),
                p = Math.max(i, a),
                d = t.getIndexInRange(o, c),
                y = t.getIndexInRange(o, p);
              return {
                startIndex: d - (d % l),
                endIndex: y === f ? f : y - (y % l),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                l = Pt(a[n], u, n);
              return te(o) ? o(l, n) : l;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                l = this.props,
                s = l.x,
                f = l.width,
                c = l.travellerWidth,
                p = l.startIndex,
                d = l.endIndex,
                y = l.onChange,
                g = n.pageX - a;
              g > 0
                ? (g = Math.min(g, s + f - c - u, s + f - c - o))
                : g < 0 && (g = Math.max(g, s - o, s - u));
              var w = this.getIndex({
                startX: o + g,
                endX: u + g,
              });
              (w.startIndex !== p || w.endIndex !== d) && y && y(w),
                this.setState({
                  startX: o + g,
                  endX: u + g,
                  slideMoveStartX: n.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = w1(i) ? i.changedTouches[0] : i;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                l = i.startX,
                s = this.state[o],
                f = this.props,
                c = f.x,
                p = f.width,
                d = f.travellerWidth,
                y = f.onChange,
                g = f.gap,
                w = f.data,
                v = {
                  startX: this.state.startX,
                  endX: this.state.endX,
                },
                h = n.pageX - a;
              h > 0
                ? (h = Math.min(h, c + p - d - s))
                : h < 0 && (h = Math.max(h, c - s)),
                (v[o] = s + h);
              var m = this.getIndex(v),
                S = m.startIndex,
                b = m.endIndex,
                x = function () {
                  var _ = w.length - 1;
                  return (
                    (o === "startX" && (u > l ? S % g === 0 : b % g === 0)) ||
                    (u < l && b === _) ||
                    (o === "endX" && (u > l ? b % g === 0 : S % g === 0)) ||
                    (u > l && b === _)
                  );
                };
              this.setState(
                gt(gt({}, o, s + h), "brushMoveStartX", n.pageX),
                function () {
                  y && x() && y(m);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                l = o.startX,
                s = o.endX,
                f = this.state[i],
                c = u.indexOf(f);
              if (c !== -1) {
                var p = c + n;
                if (!(p === -1 || p >= u.length)) {
                  var d = u[p];
                  (i === "startX" && d >= s) ||
                    (i === "endX" && d <= l) ||
                    this.setState(gt({}, i, d), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.fill,
                s = n.stroke;
              return A.createElement("rect", {
                stroke: s,
                fill: l,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.data,
                s = n.children,
                f = n.padding,
                c = F.Children.only(s);
              return c
                ? A.cloneElement(c, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: l,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                l = this.props,
                s = l.y,
                f = l.travellerWidth,
                c = l.height,
                p = l.traveller,
                d = l.ariaLabel,
                y = l.data,
                g = l.startIndex,
                w = l.endIndex,
                v = Math.max(n, this.props.x),
                h = Mf(
                  Mf({}, re(this.props, !1)),
                  {},
                  {
                    x: v,
                    y: s,
                    width: f,
                    height: c,
                  },
                ),
                m =
                  d ||
                  "Min value: "
                    .concat(
                      (a = y[g]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = y[w]) === null || o === void 0 ? void 0 : o.name,
                    );
              return A.createElement(
                _e,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": m,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (b) {
                    ["ArrowLeft", "ArrowRight"].includes(b.key) &&
                      (b.preventDefault(),
                      b.stopPropagation(),
                      u.handleTravellerMoveKeyboard(
                        b.key === "ArrowRight" ? 1 : -1,
                        i,
                      ));
                  },
                  onFocus: function () {
                    u.setState({
                      isTravellerFocused: !0,
                    });
                  },
                  onBlur: function () {
                    u.setState({
                      isTravellerFocused: !1,
                    });
                  },
                  style: {
                    cursor: "col-resize",
                  },
                },
                t.renderTraveller(p, h),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                l = a.stroke,
                s = a.travellerWidth,
                f = Math.min(n, i) + s,
                c = Math.max(Math.abs(i - n) - s, 0);
              return A.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: {
                  cursor: "move",
                },
                stroke: "none",
                fill: l,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: c,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                l = n.travellerWidth,
                s = n.stroke,
                f = this.state,
                c = f.startX,
                p = f.endX,
                d = 5,
                y = {
                  pointerEvents: "none",
                  fill: s,
                };
              return A.createElement(
                _e,
                {
                  className: "recharts-brush-texts",
                },
                A.createElement(
                  Gl,
                  ms(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(c, p) - d,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(i),
                ),
                A.createElement(
                  Gl,
                  ms(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(c, p) + l + d,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                l = n.y,
                s = n.width,
                f = n.height,
                c = n.alwaysShowText,
                p = this.state,
                d = p.startX,
                y = p.endX,
                g = p.isTextActive,
                w = p.isSlideMoving,
                v = p.isTravellerMoving,
                h = p.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !W(u) ||
                !W(l) ||
                !W(s) ||
                !W(f) ||
                s <= 0 ||
                f <= 0
              )
                return null;
              var m = ue("recharts-brush", a),
                S = A.Children.count(o) === 1,
                b = j9("userSelect", "none");
              return A.createElement(
                _e,
                {
                  className: m,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: b,
                },
                this.renderBackground(),
                S && this.renderPanorama(),
                this.renderSlide(d, y),
                this.renderTravellerLayer(d, "startX"),
                this.renderTravellerLayer(y, "endX"),
                (g || w || v || h || c) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                l = n.stroke,
                s = Math.floor(a + u / 2) - 1;
              return A.createElement(
                A.Fragment,
                null,
                A.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: l,
                  stroke: "none",
                }),
                A.createElement("line", {
                  x1: i + 1,
                  y1: s,
                  x2: i + o - 1,
                  y2: s,
                  fill: "none",
                  stroke: "#fff",
                }),
                A.createElement("line", {
                  x1: i + 1,
                  y1: s + 2,
                  x2: i + o - 1,
                  y2: s + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                A.isValidElement(n)
                  ? (a = A.cloneElement(n, i))
                  : te(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                l = n.travellerWidth,
                s = n.updateId,
                f = n.startIndex,
                c = n.endIndex;
              if (a !== i.prevData || s !== i.prevUpdateId)
                return Mf(
                  {
                    prevData: a,
                    prevTravellerWidth: l,
                    prevUpdateId: s,
                    prevX: u,
                    prevWidth: o,
                  },
                  a && a.length
                    ? R9({
                        data: a,
                        width: o,
                        x: u,
                        travellerWidth: l,
                        startIndex: f,
                        endIndex: c,
                      })
                    : {
                        scale: null,
                        scaleValues: null,
                      },
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  u !== i.prevX ||
                  l !== i.prevTravellerWidth)
              ) {
                i.scale.range([u, u + o - l]);
                var p = i.scale.domain().map(function (d) {
                  return i.scale(d);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: l,
                  prevUpdateId: s,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: p,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var l = Math.floor((o + u) / 2);
                n[l] > i ? (u = l) : (o = l);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(F.PureComponent);
gt(Vi, "displayName", "Brush");
gt(Vi, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var B9 = yv;

function z9(e, t) {
  var r;
  return (
    B9(e, function (n, i, a) {
      return (r = t(n, i, a)), !r;
    }),
    !!r
  );
}
var F9 = z9,
  U9 = Yx,
  W9 = ha,
  H9 = F9,
  V9 = mt,
  K9 = hc;

function G9(e, t, r) {
  var n = V9(e) ? U9 : H9;
  return r && K9(e, t, r) && (t = void 0), n(e, W9(t));
}
var q9 = G9;
const X9 = ve(q9);
var pr = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return n && (i = "extendDomain"), i === r;
  },
  x1 = mS;

function Y9(e, t, r) {
  t == "__proto__" && x1
    ? x1(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0,
      })
    : (e[t] = r);
}
var Q9 = Y9,
  Z9 = Q9,
  J9 = vS,
  eH = ha;

function tH(e, t) {
  var r = {};
  return (
    (t = eH(t)),
    J9(e, function (n, i, a) {
      Z9(r, i, t(n, i, a));
    }),
    r
  );
}
var rH = tH;
const nH = ve(rH);

function iH(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var aH = iH,
  oH = yv;

function uH(e, t) {
  var r = !0;
  return (
    oH(e, function (n, i, a) {
      return (r = !!t(n, i, a)), r;
    }),
    r
  );
}
var lH = uH,
  sH = aH,
  cH = lH,
  fH = ha,
  pH = mt,
  dH = hc;

function hH(e, t, r) {
  var n = pH(e) ? sH : cH;
  return r && dH(e, t, r) && (t = void 0), n(e, fH(t));
}
var vH = hH;
const yH = ve(vH);
var mH = ["x", "y"];

function Zo(e) {
  "@babel/helpers - typeof";
  return (
    (Zo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zo(e)
  );
}

function Nd() {
  return (
    (Nd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Nd.apply(this, arguments)
  );
}

function S1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? S1(Object(r), !0).forEach(function (n) {
          gH(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : S1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function gH(e, t, r) {
  return (
    (t = bH(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function bH(e) {
  var t = wH(e, "string");
  return Zo(t) == "symbol" ? t : t + "";
}

function wH(e, t) {
  if (Zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function xH(e, t) {
  if (e == null) return {};
  var r = SH(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function SH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function OH(e, t) {
  var r = e.x,
    n = e.y,
    i = xH(e, mH),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    l = parseInt(u, 10),
    s = "".concat(t.height || i.height),
    f = parseInt(s, 10),
    c = "".concat(t.width || i.width),
    p = parseInt(c, 10);
  return Da(
    Da(
      Da(
        Da(Da({}, t), i),
        o
          ? {
              x: o,
            }
          : {},
      ),
      l
        ? {
            y: l,
          }
        : {},
    ),
    {},
    {
      height: f,
      width: p,
      name: t.name,
      radius: t.radius,
    },
  );
}

function O1(e) {
  return A.createElement(
    i9,
    Nd(
      {
        shapeType: "rectangle",
        propTransformer: OH,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var _H = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = typeof n == "number";
      return a ? t(n, i) : (a || Vn(), r);
    };
  },
  PH = ["value", "background"],
  qO;

function Ki(e) {
  "@babel/helpers - typeof";
  return (
    (Ki =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ki(e)
  );
}

function AH(e, t) {
  if (e == null) return {};
  var r = EH(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function EH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    bs.apply(this, arguments)
  );
}

function _1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _1(Object(r), !0).forEach(function (n) {
          Xr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function $H(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function P1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, YO(n.key), n);
  }
}

function TH(e, t, r) {
  return (
    t && P1(e.prototype, t),
    r && P1(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function jH(e, t, r) {
  return (
    (t = ws(t)),
    CH(
      e,
      XO() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r),
    )
  );
}

function CH(e, t) {
  if (t && (Ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return kH(e);
}

function kH(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function XO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (XO = function () {
    return !!e;
  })();
}

function ws(e) {
  return (
    (ws = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ws(e)
  );
}

function MH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Id(e, t);
}

function Id(e, t) {
  return (
    (Id = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Id(e, t)
  );
}

function Xr(e, t, r) {
  return (
    (t = YO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function YO(e) {
  var t = NH(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}

function NH(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vu = (function (e) {
  function t() {
    var r;
    $H(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = jH(this, t, [].concat(i))),
      Xr(r, "state", {
        isAnimationFinished: !1,
      }),
      Xr(r, "id", cu("recharts-bar-")),
      Xr(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        r.setState({
          isAnimationFinished: !0,
        }),
          o && o();
      }),
      Xr(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        r.setState({
          isAnimationFinished: !1,
        }),
          o && o();
      }),
      r
    );
  }
  return (
    MH(t, e),
    TH(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              l = a.activeIndex,
              s = a.activeBar,
              f = re(this.props, !1);
            return (
              n &&
              n.map(function (c, p) {
                var d = p === l,
                  y = d ? s : o,
                  g = ke(
                    ke(ke({}, f), c),
                    {},
                    {
                      isActive: d,
                      option: y,
                      index: p,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return A.createElement(
                  _e,
                  bs(
                    {
                      className: "recharts-bar-rectangle",
                    },
                    Ml(i.props, c, p),
                    {
                      key: "rectangle-"
                        .concat(c == null ? void 0 : c.x, "-")
                        .concat(c == null ? void 0 : c.y, "-")
                        .concat(c == null ? void 0 : c.value),
                    },
                  ),
                  A.createElement(O1, g),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              l = i.animationBegin,
              s = i.animationDuration,
              f = i.animationEasing,
              c = i.animationId,
              p = this.state.prevData;
            return A.createElement(
              Mr,
              {
                begin: l,
                duration: s,
                isActive: u,
                easing: f,
                from: {
                  t: 0,
                },
                to: {
                  t: 1,
                },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (d) {
                var y = d.t,
                  g = a.map(function (w, v) {
                    var h = p && p[v];
                    if (h) {
                      var m = Nt(h.x, w.x),
                        S = Nt(h.y, w.y),
                        b = Nt(h.width, w.width),
                        x = Nt(h.height, w.height);
                      return ke(
                        ke({}, w),
                        {},
                        {
                          x: m(y),
                          y: S(y),
                          width: b(y),
                          height: x(y),
                        },
                      );
                    }
                    if (o === "horizontal") {
                      var O = Nt(0, w.height),
                        _ = O(y);
                      return ke(
                        ke({}, w),
                        {},
                        {
                          y: w.y + w.height - _,
                          height: _,
                        },
                      );
                    }
                    var P = Nt(0, w.width),
                      $ = P(y);
                    return ke(
                      ke({}, w),
                      {},
                      {
                        width: $,
                      },
                    );
                  });
                return A.createElement(
                  _e,
                  null,
                  n.renderRectanglesStatically(g),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Mo(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              l = re(this.props.background, !1);
            return a.map(function (s, f) {
              s.value;
              var c = s.background,
                p = AH(s, PH);
              if (!c) return null;
              var d = ke(
                ke(
                  ke(
                    ke(
                      ke({}, p),
                      {},
                      {
                        fill: "#eee",
                      },
                      c,
                    ),
                    l,
                  ),
                  Ml(n.props, s, f),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return A.createElement(
                O1,
                bs(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  d,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              l = a.yAxis,
              s = a.layout,
              f = a.children,
              c = er(f, _c);
            if (!c) return null;
            var p = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
              d = function (w, v) {
                var h = Array.isArray(w.value) ? w.value[1] : w.value;
                return {
                  x: w.x,
                  y: w.y,
                  value: h,
                  errorVal: Pt(w, v),
                };
              },
              y = {
                clipPath: n ? "url(#clipPath-".concat(i, ")") : null,
              };
            return A.createElement(
              _e,
              y,
              c.map(function (g) {
                return A.cloneElement(g, {
                  key: "error-bar-".concat(i, "-").concat(g.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: l,
                  layout: s,
                  offset: p,
                  dataPointFormatter: d,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              l = n.yAxis,
              s = n.left,
              f = n.top,
              c = n.width,
              p = n.height,
              d = n.isAnimationActive,
              y = n.background,
              g = n.id;
            if (i || !a || !a.length) return null;
            var w = this.state.isAnimationFinished,
              v = ue("recharts-bar", o),
              h = u && u.allowDataOverflow,
              m = l && l.allowDataOverflow,
              S = h || m,
              b = ne(g) ? this.id : g;
            return A.createElement(
              _e,
              {
                className: v,
              },
              h || m
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      {
                        id: "clipPath-".concat(b),
                      },
                      A.createElement("rect", {
                        x: h ? s : s - c / 2,
                        y: m ? f : f - p / 2,
                        width: h ? c : c * 2,
                        height: m ? p : p * 2,
                      }),
                    ),
                  )
                : null,
              A.createElement(
                _e,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: S ? "url(#clipPath-".concat(b, ")") : null,
                },
                y ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(S, b),
              (!d || w) && on.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: i.curData,
                }
              : n.data !== i.curData
                ? {
                    curData: n.data,
                  }
                : null;
          },
        },
      ],
    )
  );
})(F.PureComponent);
qO = vu;
Xr(vu, "displayName", "Bar");
Xr(vu, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !_r.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
Xr(vu, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    l = e.yAxisTicks,
    s = e.stackedData,
    f = e.dataStartIndex,
    c = e.displayedData,
    p = e.offset,
    d = gF(n, r);
  if (!d) return null;
  var y = t.layout,
    g = r.type.defaultProps,
    w = g !== void 0 ? ke(ke({}, g), r.props) : r.props,
    v = w.dataKey,
    h = w.children,
    m = w.minPointSize,
    S = y === "horizontal" ? o : a,
    b = s ? S.scale.domain() : null,
    x = AF({
      numericAxis: S,
    }),
    O = er(h, _S),
    _ = c.map(function (P, $) {
      var E, j, k, I, M, D;
      s
        ? (E = bF(s[f + $], b))
        : ((E = Pt(P, v)), Array.isArray(E) || (E = [x, E]));
      var L = _H(m, qO.defaultProps.minPointSize)(E[1], $);
      if (y === "horizontal") {
        var T,
          N = [o.scale(E[0]), o.scale(E[1])],
          B = N[0],
          H = N[1];
        (j = _0({
          axis: a,
          ticks: u,
          bandSize: i,
          offset: d.offset,
          entry: P,
          index: $,
        })),
          (k = (T = H ?? B) !== null && T !== void 0 ? T : void 0),
          (I = d.size);
        var U = B - H;
        if (
          ((M = Number.isNaN(U) ? 0 : U),
          (D = {
            x: j,
            y: o.y,
            width: I,
            height: o.height,
          }),
          Math.abs(L) > 0 && Math.abs(M) < Math.abs(L))
        ) {
          var q = Qt(M || L) * (Math.abs(L) - Math.abs(M));
          (k -= q), (M += q);
        }
      } else {
        var ie = [a.scale(E[0]), a.scale(E[1])],
          we = ie[0],
          je = ie[1];
        if (
          ((j = we),
          (k = _0({
            axis: o,
            ticks: l,
            bandSize: i,
            offset: d.offset,
            entry: P,
            index: $,
          })),
          (I = je - we),
          (M = d.size),
          (D = {
            x: a.x,
            y: k,
            width: a.width,
            height: M,
          }),
          Math.abs(L) > 0 && Math.abs(I) < Math.abs(L))
        ) {
          var $t = Qt(I || L) * (Math.abs(L) - Math.abs(I));
          I += $t;
        }
      }
      return ke(
        ke(
          ke({}, P),
          {},
          {
            x: j,
            y: k,
            width: I,
            height: M,
            value: s ? E : E[1],
            payload: P,
            background: D,
          },
          O && O[$] && O[$].props,
        ),
        {},
        {
          tooltipPayload: [TO(r, P)],
          tooltipPosition: {
            x: j + I / 2,
            y: k + M / 2,
          },
        },
      );
    });
  return ke(
    {
      data: _,
      layout: y,
    },
    p,
  );
});

function Jo(e) {
  "@babel/helpers - typeof";
  return (
    (Jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jo(e)
  );
}

function IH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function A1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, QO(n.key), n);
  }
}

function DH(e, t, r) {
  return (
    t && A1(e.prototype, t),
    r && A1(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function E1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? E1(Object(r), !0).forEach(function (n) {
          Ec(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : E1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Ec(e, t, r) {
  return (
    (t = QO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function QO(e) {
  var t = LH(e, "string");
  return Jo(t) == "symbol" ? t : t + "";
}

function LH(e, t) {
  if (Jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RH = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      l = t.layout,
      s = t.children,
      f = Object.keys(r),
      c = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      p = !!wt(s, vu);
    return f.reduce(function (d, y) {
      var g = r[y],
        w = g.orientation,
        v = g.domain,
        h = g.padding,
        m = h === void 0 ? {} : h,
        S = g.mirror,
        b = g.reversed,
        x = "".concat(w).concat(S ? "Mirror" : ""),
        O,
        _,
        P,
        $,
        E;
      if (
        g.type === "number" &&
        (g.padding === "gap" || g.padding === "no-gap")
      ) {
        var j = v[1] - v[0],
          k = 1 / 0,
          I = g.categoricalDomain.sort();
        if (
          (I.forEach(function (ie, we) {
            we > 0 && (k = Math.min((ie || 0) - (I[we - 1] || 0), k));
          }),
          Number.isFinite(k))
        ) {
          var M = k / j,
            D = g.layout === "vertical" ? n.height : n.width;
          if (
            (g.padding === "gap" && (O = (M * D) / 2), g.padding === "no-gap")
          ) {
            var L = Wn(t.barCategoryGap, M * D),
              T = (M * D) / 2;
            O = T - L - ((T - L) / D) * L;
          }
        }
      }
      i === "xAxis"
        ? (_ = [
            n.left + (m.left || 0) + (O || 0),
            n.left + n.width - (m.right || 0) - (O || 0),
          ])
        : i === "yAxis"
          ? (_ =
              l === "horizontal"
                ? [n.top + n.height - (m.bottom || 0), n.top + (m.top || 0)]
                : [
                    n.top + (m.top || 0) + (O || 0),
                    n.top + n.height - (m.bottom || 0) - (O || 0),
                  ])
          : (_ = g.range),
        b && (_ = [_[1], _[0]]);
      var N = yF(g, a, p),
        B = N.scale,
        H = N.realScaleType;
      B.domain(v).range(_), mF(B);
      var U = PF(
        B,
        qt(
          qt({}, g),
          {},
          {
            realScaleType: H,
          },
        ),
      );
      i === "xAxis"
        ? ((E = (w === "top" && !S) || (w === "bottom" && S)),
          (P = n.left),
          ($ = c[x] - E * g.height))
        : i === "yAxis" &&
          ((E = (w === "left" && !S) || (w === "right" && S)),
          (P = c[x] - E * g.width),
          ($ = n.top));
      var q = qt(
        qt(qt({}, g), U),
        {},
        {
          realScaleType: H,
          x: P,
          y: $,
          scale: B,
          width: i === "xAxis" ? n.width : g.width,
          height: i === "yAxis" ? n.height : g.height,
        },
      );
      return (
        (q.bandSize = us(q, U)),
        !g.hide && i === "xAxis"
          ? (c[x] += (E ? -1 : 1) * q.height)
          : g.hide || (c[x] += (E ? -1 : 1) * q.width),
        qt(qt({}, d), {}, Ec({}, y, q))
      );
    }, {});
  },
  ZO = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  BH = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return ZO(
      {
        x: r,
        y: n,
      },
      {
        x: i,
        y: a,
      },
    );
  },
  JO = (function () {
    function e(t) {
      IH(this, e), (this.scale = t);
    }
    return DH(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + l;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Ec(JO, "EPS", 1e-4);
var Kv = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return qt(qt({}, n), {}, Ec({}, i, JO.create(t[i])));
  }, {});
  return qt(
    qt({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return nH(i, function (l, s) {
          return r[s].apply(l, {
            bandAware: o,
            position: u,
          });
        });
      },
      isInRange: function (i) {
        return yH(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};

function zH(e) {
  return ((e % 180) + 180) % 180;
}
var FH = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = zH(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(l);
  },
  UH = ej(
    function (e) {
      return {
        x: e.left,
        y: e.top,
        width: e.width,
        height: e.height,
      };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  e_ = F.createContext(void 0),
  t_ = F.createContext(void 0),
  r_ = F.createContext(void 0),
  WH = F.createContext({}),
  n_ = F.createContext(void 0),
  i_ = F.createContext(0),
  a_ = F.createContext(0),
  $1 = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      l = t.width,
      s = t.height,
      f = UH(a);
    return A.createElement(
      e_.Provider,
      {
        value: n,
      },
      A.createElement(
        t_.Provider,
        {
          value: i,
        },
        A.createElement(
          WH.Provider,
          {
            value: a,
          },
          A.createElement(
            r_.Provider,
            {
              value: f,
            },
            A.createElement(
              n_.Provider,
              {
                value: o,
              },
              A.createElement(
                i_.Provider,
                {
                  value: s,
                },
                A.createElement(
                  a_.Provider,
                  {
                    value: l,
                  },
                  u,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  },
  HH = function () {
    return F.useContext(n_);
  },
  o_ = function (t) {
    var r = F.useContext(e_);
    r == null && Vn();
    var n = r[t];
    return n == null && Vn(), n;
  },
  u_ = function (t) {
    var r = F.useContext(t_);
    r == null && Vn();
    var n = r[t];
    return n == null && Vn(), n;
  },
  VH = function () {
    var t = F.useContext(r_);
    return t;
  },
  l_ = function () {
    return F.useContext(a_);
  },
  s_ = function () {
    return F.useContext(i_);
  };

function Gi(e) {
  "@babel/helpers - typeof";
  return (
    (Gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gi(e)
  );
}

function KH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function GH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, f_(n.key), n);
  }
}

function qH(e, t, r) {
  return (
    t && GH(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function XH(e, t, r) {
  return (
    (t = xs(t)),
    YH(
      e,
      c_() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r),
    )
  );
}

function YH(e, t) {
  if (t && (Gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return QH(e);
}

function QH(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function c_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (c_ = function () {
    return !!e;
  })();
}

function xs(e) {
  return (
    (xs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    xs(e)
  );
}

function ZH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Dd(e, t);
}

function Dd(e, t) {
  return (
    (Dd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Dd(e, t)
  );
}

function T1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function j1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T1(Object(r), !0).forEach(function (n) {
          Gv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : T1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Gv(e, t, r) {
  return (
    (t = f_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function f_(e) {
  var t = JH(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}

function JH(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function e7(e, t) {
  return i7(e) || n7(e, t) || r7(e, t) || t7();
}

function t7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function r7(e, t) {
  if (e) {
    if (typeof e == "string") return C1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return C1(e, t);
  }
}

function C1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function n7(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function i7(e) {
  if (Array.isArray(e)) return e;
}

function Ld() {
  return (
    (Ld = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ld.apply(this, arguments)
  );
}
var a7 = function (t, r) {
    var n;
    return (
      A.isValidElement(t)
        ? (n = A.cloneElement(t, r))
        : te(t)
          ? (n = t(r))
          : (n = A.createElement(
              "line",
              Ld({}, r, {
                className: "recharts-reference-line-line",
              }),
            )),
      n
    );
  },
  o7 = function (t, r, n, i, a, o, u, l, s) {
    var f = a.x,
      c = a.y,
      p = a.width,
      d = a.height;
    if (n) {
      var y = s.y,
        g = t.y.apply(y, {
          position: o,
        });
      if (pr(s, "discard") && !t.y.isInRange(g)) return null;
      var w = [
        {
          x: f + p,
          y: g,
        },
        {
          x: f,
          y: g,
        },
      ];
      return l === "left" ? w.reverse() : w;
    }
    if (r) {
      var v = s.x,
        h = t.x.apply(v, {
          position: o,
        });
      if (pr(s, "discard") && !t.x.isInRange(h)) return null;
      var m = [
        {
          x: h,
          y: c + d,
        },
        {
          x: h,
          y: c,
        },
      ];
      return u === "top" ? m.reverse() : m;
    }
    if (i) {
      var S = s.segment,
        b = S.map(function (x) {
          return t.apply(x, {
            position: o,
          });
        });
      return pr(s, "discard") &&
        X9(b, function (x) {
          return !t.isInRange(x);
        })
        ? null
        : b;
    }
    return null;
  };

function u7(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    l = e.alwaysShow,
    s = HH(),
    f = o_(i),
    c = u_(a),
    p = VH();
  if (!s || !p) return null;
  In(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var d = Kv({
      x: f.scale,
      y: c.scale,
    }),
    y = ze(t),
    g = ze(r),
    w = n && n.length === 2,
    v = o7(d, y, g, w, p, e.position, f.orientation, c.orientation, e);
  if (!v) return null;
  var h = e7(v, 2),
    m = h[0],
    S = m.x,
    b = m.y,
    x = h[1],
    O = x.x,
    _ = x.y,
    P = pr(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    $ = j1(
      j1(
        {
          clipPath: P,
        },
        re(e, !0),
      ),
      {},
      {
        x1: S,
        y1: b,
        x2: O,
        y2: _,
      },
    );
  return A.createElement(
    _e,
    {
      className: ue("recharts-reference-line", u),
    },
    a7(o, $),
    tt.renderCallByParent(
      e,
      BH({
        x1: S,
        y1: b,
        x2: O,
        y2: _,
      }),
    ),
  );
}
var qv = (function (e) {
  function t() {
    return KH(this, t), XH(this, t, arguments);
  }
  return (
    ZH(t, e),
    qH(t, [
      {
        key: "render",
        value: function () {
          return A.createElement(u7, this.props);
        },
      },
    ])
  );
})(A.Component);
Gv(qv, "displayName", "ReferenceLine");
Gv(qv, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});

function Rd() {
  return (
    (Rd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Rd.apply(this, arguments)
  );
}

function qi(e) {
  "@babel/helpers - typeof";
  return (
    (qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qi(e)
  );
}

function k1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function M1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? k1(Object(r), !0).forEach(function (n) {
          $c(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : k1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function l7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function s7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, d_(n.key), n);
  }
}

function c7(e, t, r) {
  return (
    t && s7(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function f7(e, t, r) {
  return (
    (t = Ss(t)),
    p7(
      e,
      p_() ? Reflect.construct(t, r || [], Ss(e).constructor) : t.apply(e, r),
    )
  );
}

function p7(e, t) {
  if (t && (qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return d7(e);
}

function d7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function p_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (p_ = function () {
    return !!e;
  })();
}

function Ss(e) {
  return (
    (Ss = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ss(e)
  );
}

function h7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Bd(e, t);
}

function Bd(e, t) {
  return (
    (Bd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Bd(e, t)
  );
}

function $c(e, t, r) {
  return (
    (t = d_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function d_(e) {
  var t = v7(e, "string");
  return qi(t) == "symbol" ? t : t + "";
}

function v7(e, t) {
  if (qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var y7 = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = Kv({
        x: i.scale,
        y: a.scale,
      }),
      u = o.apply(
        {
          x: r,
          y: n,
        },
        {
          bandAware: !0,
        },
      );
    return pr(t, "discard") && !o.isInRange(u) ? null : u;
  },
  Tc = (function (e) {
    function t() {
      return l7(this, t), f7(this, t, arguments);
    }
    return (
      h7(t, e),
      c7(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              l = n.clipPathId,
              s = ze(i),
              f = ze(a);
            if (
              (In(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !s || !f)
            )
              return null;
            var c = y7(this.props);
            if (!c) return null;
            var p = c.x,
              d = c.y,
              y = this.props,
              g = y.shape,
              w = y.className,
              v = pr(this.props, "hidden") ? "url(#".concat(l, ")") : void 0,
              h = M1(
                M1(
                  {
                    clipPath: v,
                  },
                  re(this.props, !0),
                ),
                {},
                {
                  cx: p,
                  cy: d,
                },
              );
            return A.createElement(
              _e,
              {
                className: ue("recharts-reference-dot", w),
              },
              t.renderDot(g, h),
              tt.renderCallByParent(this.props, {
                x: p - o,
                y: d - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(A.Component);
$c(Tc, "displayName", "ReferenceDot");
$c(Tc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
$c(Tc, "renderDot", function (e, t) {
  var r;
  return (
    A.isValidElement(e)
      ? (r = A.cloneElement(e, t))
      : te(e)
        ? (r = e(t))
        : (r = A.createElement(
            Vv,
            Rd({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
});

function zd() {
  return (
    (zd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zd.apply(this, arguments)
  );
}

function Xi(e) {
  "@babel/helpers - typeof";
  return (
    (Xi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xi(e)
  );
}

function N1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function I1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? N1(Object(r), !0).forEach(function (n) {
          jc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : N1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function m7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function g7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, v_(n.key), n);
  }
}

function b7(e, t, r) {
  return (
    t && g7(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function w7(e, t, r) {
  return (
    (t = Os(t)),
    x7(
      e,
      h_() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r),
    )
  );
}

function x7(e, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return S7(e);
}

function S7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function h_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (h_ = function () {
    return !!e;
  })();
}

function Os(e) {
  return (
    (Os = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Os(e)
  );
}

function O7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Fd(e, t);
}

function Fd(e, t) {
  return (
    (Fd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Fd(e, t)
  );
}

function jc(e, t, r) {
  return (
    (t = v_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function v_(e) {
  var t = _7(e, "string");
  return Xi(t) == "symbol" ? t : t + "";
}

function _7(e, t) {
  if (Xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var P7 = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      l = a.y1,
      s = a.y2,
      f = a.xAxis,
      c = a.yAxis;
    if (!f || !c) return null;
    var p = Kv({
        x: f.scale,
        y: c.scale,
      }),
      d = {
        x: t
          ? p.x.apply(o, {
              position: "start",
            })
          : p.x.rangeMin,
        y: n
          ? p.y.apply(l, {
              position: "start",
            })
          : p.y.rangeMin,
      },
      y = {
        x: r
          ? p.x.apply(u, {
              position: "end",
            })
          : p.x.rangeMax,
        y: i
          ? p.y.apply(s, {
              position: "end",
            })
          : p.y.rangeMax,
      };
    return pr(a, "discard") && (!p.isInRange(d) || !p.isInRange(y))
      ? null
      : ZO(d, y);
  },
  Cc = (function (e) {
    function t() {
      return m7(this, t), w7(this, t, arguments);
    }
    return (
      O7(t, e),
      b7(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              l = n.className,
              s = n.alwaysShow,
              f = n.clipPathId;
            In(
              s === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var c = ze(i),
              p = ze(a),
              d = ze(o),
              y = ze(u),
              g = this.props.shape;
            if (!c && !p && !d && !y && !g) return null;
            var w = P7(c, p, d, y, this.props);
            if (!w && !g) return null;
            var v = pr(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return A.createElement(
              _e,
              {
                className: ue("recharts-reference-area", l),
              },
              t.renderRect(
                g,
                I1(
                  I1(
                    {
                      clipPath: v,
                    },
                    re(this.props, !0),
                  ),
                  w,
                ),
              ),
              tt.renderCallByParent(this.props, w),
            );
          },
        },
      ])
    );
  })(A.Component);
jc(Cc, "displayName", "ReferenceArea");
jc(Cc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
jc(Cc, "renderRect", function (e, t) {
  var r;
  return (
    A.isValidElement(e)
      ? (r = A.cloneElement(e, t))
      : te(e)
        ? (r = e(t))
        : (r = A.createElement(
            Hv,
            zd({}, t, {
              className: "recharts-reference-area-rect",
            }),
          )),
    r
  );
});

function y_(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}

function A7(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height,
  };
  return FH(n, r);
}

function E7(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height;
  return t === 1
    ? {
        start: n ? i : a,
        end: n ? i + o : a + u,
      }
    : {
        start: n ? i + o : a + u,
        end: n ? i : a,
      };
}

function _s(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}

function $7(e, t) {
  return y_(e, t + 1);
}

function T7(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      l = 0,
      s = 1,
      f = o,
      c = function () {
        var y = n == null ? void 0 : n[l];
        if (y === void 0)
          return {
            v: y_(n, s),
          };
        var g = l,
          w,
          v = function () {
            return w === void 0 && (w = r(y, g)), w;
          },
          h = y.coordinate,
          m = l === 0 || _s(e, h, v, f, u);
        m || ((l = 0), (f = o), (s += 1)),
          m && ((f = h + e * (v() / 2 + i)), (l += s));
      },
      p;
    s <= a.length;

  )
    if (((p = c()), p)) return p.v;
  return [];
}

function eu(e) {
  "@babel/helpers - typeof";
  return (
    (eu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    eu(e)
  );
}

function D1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D1(Object(r), !0).forEach(function (n) {
          j7(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : D1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function j7(e, t, r) {
  return (
    (t = C7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function C7(e) {
  var t = k7(e, "string");
  return eu(t) == "symbol" ? t : t + "";
}

function k7(e, t) {
  if (eu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function M7(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      l = t.end,
      s = function (p) {
        var d = a[p],
          y,
          g = function () {
            return y === void 0 && (y = r(d, p)), y;
          };
        if (p === o - 1) {
          var w = e * (d.coordinate + (e * g()) / 2 - l);
          a[p] = d = Je(
            Je({}, d),
            {},
            {
              tickCoord: w > 0 ? d.coordinate - w * e : d.coordinate,
            },
          );
        } else
          a[p] = d = Je(
            Je({}, d),
            {},
            {
              tickCoord: d.coordinate,
            },
          );
        var v = _s(e, d.tickCoord, g, u, l);
        v &&
          ((l = d.tickCoord - e * (g() / 2 + i)),
          (a[p] = Je(
            Je({}, d),
            {},
            {
              isShow: !0,
            },
          )));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    s(f);
  return a;
}

function N7(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    l = t.start,
    s = t.end;
  if (a) {
    var f = n[u - 1],
      c = r(f, u - 1),
      p = e * (f.coordinate + (e * c) / 2 - s);
    o[u - 1] = f = Je(
      Je({}, f),
      {},
      {
        tickCoord: p > 0 ? f.coordinate - p * e : f.coordinate,
      },
    );
    var d = _s(
      e,
      f.tickCoord,
      function () {
        return c;
      },
      l,
      s,
    );
    d &&
      ((s = f.tickCoord - e * (c / 2 + i)),
      (o[u - 1] = Je(
        Je({}, f),
        {},
        {
          isShow: !0,
        },
      )));
  }
  for (
    var y = a ? u - 1 : u,
      g = function (h) {
        var m = o[h],
          S,
          b = function () {
            return S === void 0 && (S = r(m, h)), S;
          };
        if (h === 0) {
          var x = e * (m.coordinate - (e * b()) / 2 - l);
          o[h] = m = Je(
            Je({}, m),
            {},
            {
              tickCoord: x < 0 ? m.coordinate - x * e : m.coordinate,
            },
          );
        } else
          o[h] = m = Je(
            Je({}, m),
            {},
            {
              tickCoord: m.coordinate,
            },
          );
        var O = _s(e, m.tickCoord, b, l, s);
        O &&
          ((l = m.tickCoord + e * (b() / 2 + i)),
          (o[h] = Je(
            Je({}, m),
            {},
            {
              isShow: !0,
            },
          )));
      },
      w = 0;
    w < y;
    w++
  )
    g(w);
  return o;
}

function I7(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    l = e.interval,
    s = e.tickFormatter,
    f = e.unit,
    c = e.angle;
  if (!i || !i.length || !n) return [];
  if (W(l) || _r.isSsr) return $7(i, typeof l == "number" && W(l) ? l : 0);
  var p = [],
    d = u === "top" || u === "bottom" ? "width" : "height",
    y =
      f && d === "width"
        ? Qa(f, {
            fontSize: t,
            letterSpacing: r,
          })
        : {
            width: 0,
            height: 0,
          },
    g = function (m, S) {
      var b = te(s) ? s(m.value, S) : m.value;
      return d === "width"
        ? A7(
            Qa(b, {
              fontSize: t,
              letterSpacing: r,
            }),
            y,
            c,
          )
        : Qa(b, {
            fontSize: t,
            letterSpacing: r,
          })[d];
    },
    w = i.length >= 2 ? Qt(i[1].coordinate - i[0].coordinate) : 1,
    v = E7(a, w, d);
  return l === "equidistantPreserveStart"
    ? T7(w, v, g, i, o)
    : (l === "preserveStart" || l === "preserveStartEnd"
        ? (p = N7(w, v, g, i, o, l === "preserveStartEnd"))
        : (p = M7(w, v, g, i, o)),
      p.filter(function (h) {
        return h.isShow;
      }));
}
var D7 = ["viewBox"],
  L7 = ["viewBox"],
  R7 = ["ticks"];

function Yi(e) {
  "@babel/helpers - typeof";
  return (
    (Yi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yi(e)
  );
}

function vi() {
  return (
    (vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vi.apply(this, arguments)
  );
}

function L1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? L1(Object(r), !0).forEach(function (n) {
          Xv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : L1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Nf(e, t) {
  if (e == null) return {};
  var r = B7(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function B7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function z7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function R1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, g_(n.key), n);
  }
}

function F7(e, t, r) {
  return (
    t && R1(e.prototype, t),
    r && R1(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function U7(e, t, r) {
  return (
    (t = Ps(t)),
    W7(
      e,
      m_() ? Reflect.construct(t, r || [], Ps(e).constructor) : t.apply(e, r),
    )
  );
}

function W7(e, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return H7(e);
}

function H7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function m_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (m_ = function () {
    return !!e;
  })();
}

function Ps(e) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ps(e)
  );
}

function V7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Ud(e, t);
}

function Ud(e, t) {
  return (
    (Ud = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Ud(e, t)
  );
}

function Xv(e, t, r) {
  return (
    (t = g_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function g_(e) {
  var t = K7(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}

function K7(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kc = (function (e) {
  function t(r) {
    var n;
    return (
      z7(this, t),
      (n = U7(this, t, [r])),
      (n.state = {
        fontSize: "",
        letterSpacing: "",
      }),
      n
    );
  }
  return (
    V7(t, e),
    F7(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = Nf(n, D7),
              u = this.props,
              l = u.viewBox,
              s = Nf(u, L7);
            return !Oi(a, l) || !Oi(o, s) || !Oi(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              l = i.height,
              s = i.orientation,
              f = i.tickSize,
              c = i.mirror,
              p = i.tickMargin,
              d,
              y,
              g,
              w,
              v,
              h,
              m = c ? -1 : 1,
              S = n.tickSize || f,
              b = W(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (s) {
              case "top":
                (d = y = n.coordinate),
                  (w = o + +!c * l),
                  (g = w - m * S),
                  (h = g - m * p),
                  (v = b);
                break;
              case "left":
                (g = w = n.coordinate),
                  (y = a + +!c * u),
                  (d = y - m * S),
                  (v = d - m * p),
                  (h = b);
                break;
              case "right":
                (g = w = n.coordinate),
                  (y = a + +c * u),
                  (d = y + m * S),
                  (v = d + m * p),
                  (h = b);
                break;
              default:
                (d = y = n.coordinate),
                  (w = o + +c * l),
                  (g = w + m * S),
                  (h = g + m * p),
                  (v = b);
                break;
            }
            return {
              line: {
                x1: d,
                y1: g,
                x2: y,
                y2: w,
              },
              tick: {
                x: v,
                y: h,
              },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              l = n.orientation,
              s = n.mirror,
              f = n.axisLine,
              c = nt(
                nt(nt({}, re(this.props, !1)), re(f, !1)),
                {},
                {
                  fill: "none",
                },
              );
            if (l === "top" || l === "bottom") {
              var p = +((l === "top" && !s) || (l === "bottom" && s));
              c = nt(
                nt({}, c),
                {},
                {
                  x1: i,
                  y1: a + p * u,
                  x2: i + o,
                  y2: a + p * u,
                },
              );
            } else {
              var d = +((l === "left" && !s) || (l === "right" && s));
              c = nt(
                nt({}, c),
                {},
                {
                  x1: i + d * o,
                  y1: a,
                  x2: i + d * o,
                  y2: a + u,
                },
              );
            }
            return A.createElement(
              "line",
              vi({}, c, {
                className: ue(
                  "recharts-cartesian-axis-line",
                  Rt(f, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              l = u.tickLine,
              s = u.stroke,
              f = u.tick,
              c = u.tickFormatter,
              p = u.unit,
              d = I7(
                nt(
                  nt({}, this.props),
                  {},
                  {
                    ticks: n,
                  },
                ),
                i,
                a,
              ),
              y = this.getTickTextAnchor(),
              g = this.getTickVerticalAnchor(),
              w = re(this.props, !1),
              v = re(f, !1),
              h = nt(
                nt({}, w),
                {},
                {
                  fill: "none",
                },
                re(l, !1),
              ),
              m = d.map(function (S, b) {
                var x = o.getTickLineCoord(S),
                  O = x.line,
                  _ = x.tick,
                  P = nt(
                    nt(
                      nt(
                        nt(
                          {
                            textAnchor: y,
                            verticalAnchor: g,
                          },
                          w,
                        ),
                        {},
                        {
                          stroke: "none",
                          fill: s,
                        },
                        v,
                      ),
                      _,
                    ),
                    {},
                    {
                      index: b,
                      payload: S,
                      visibleTicksCount: d.length,
                      tickFormatter: c,
                    },
                  );
                return A.createElement(
                  _e,
                  vi(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(S.value, "-")
                        .concat(S.coordinate, "-")
                        .concat(S.tickCoord),
                    },
                    Ml(o.props, S, b),
                  ),
                  l &&
                    A.createElement(
                      "line",
                      vi({}, h, O, {
                        className: ue(
                          "recharts-cartesian-axis-tick-line",
                          Rt(l, "className"),
                        ),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      P,
                      ""
                        .concat(te(c) ? c(S.value, b) : S.value)
                        .concat(p || ""),
                    ),
                );
              });
            return A.createElement(
              "g",
              {
                className: "recharts-cartesian-axis-ticks",
              },
              m,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              l = i.ticksGenerator,
              s = i.className,
              f = i.hide;
            if (f) return null;
            var c = this.props,
              p = c.ticks,
              d = Nf(c, R7),
              y = p;
            return (
              te(l) && (y = p && p.length > 0 ? l(this.props) : l(d)),
              o <= 0 || u <= 0 || !y || !y.length
                ? null
                : A.createElement(
                    _e,
                    {
                      className: ue("recharts-cartesian-axis", s),
                      ref: function (w) {
                        n.layerReference = w;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(
                      y,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    tt.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o;
            return (
              A.isValidElement(n)
                ? (o = A.cloneElement(n, i))
                : te(n)
                  ? (o = n(i))
                  : (o = A.createElement(
                      Gl,
                      vi({}, i, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(F.Component);
Xv(kc, "displayName", "CartesianAxis");
Xv(kc, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var G7 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  q7 = ["key"],
  b_;

function Qi(e) {
  "@babel/helpers - typeof";
  return (
    (Qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qi(e)
  );
}

function w_(e, t) {
  if (e == null) return {};
  var r = X7(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function X7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function kn() {
  return (
    (kn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    kn.apply(this, arguments)
  );
}

function B1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? B1(Object(r), !0).forEach(function (n) {
          lr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : B1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Y7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function z1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, S_(n.key), n);
  }
}

function Q7(e, t, r) {
  return (
    t && z1(e.prototype, t),
    r && z1(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function Z7(e, t, r) {
  return (
    (t = As(t)),
    J7(
      e,
      x_() ? Reflect.construct(t, r || [], As(e).constructor) : t.apply(e, r),
    )
  );
}

function J7(e, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return eV(e);
}

function eV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function x_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (x_ = function () {
    return !!e;
  })();
}

function As(e) {
  return (
    (As = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    As(e)
  );
}

function tV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Wd(e, t);
}

function Wd(e, t) {
  return (
    (Wd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Wd(e, t)
  );
}

function lr(e, t, r) {
  return (
    (t = S_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function S_(e) {
  var t = rV(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}

function rV(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yn = (function (e) {
  function t() {
    var r;
    Y7(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = Z7(this, t, [].concat(i))),
      lr(r, "state", {
        isAnimationFinished: !0,
      }),
      lr(r, "id", cu("recharts-area-")),
      lr(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        r.setState({
          isAnimationFinished: !0,
        }),
          te(o) && o();
      }),
      lr(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        r.setState({
          isAnimationFinished: !1,
        }),
          te(o) && o();
      }),
      r
    );
  }
  return (
    tV(t, e),
    Q7(
      t,
      [
        {
          key: "renderDots",
          value: function (n, i, a) {
            var o = this.props.isAnimationActive,
              u = this.state.isAnimationFinished;
            if (o && !u) return null;
            var l = this.props,
              s = l.dot,
              f = l.points,
              c = l.dataKey,
              p = re(this.props, !1),
              d = re(s, !0),
              y = f.map(function (w, v) {
                var h = zr(
                  zr(
                    zr(
                      {
                        key: "dot-".concat(v),
                        r: 3,
                      },
                      p,
                    ),
                    d,
                  ),
                  {},
                  {
                    index: v,
                    cx: w.x,
                    cy: w.y,
                    dataKey: c,
                    value: w.value,
                    payload: w.payload,
                    points: f,
                  },
                );
                return t.renderDotItem(s, h);
              }),
              g = {
                clipPath: n
                  ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")")
                  : null,
              };
            return A.createElement(
              _e,
              kn(
                {
                  className: "recharts-area-dots",
                },
                g,
              ),
              y,
            );
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (n) {
            var i = this.props,
              a = i.baseLine,
              o = i.points,
              u = i.strokeWidth,
              l = o[0].x,
              s = o[o.length - 1].x,
              f = n * Math.abs(l - s),
              c = qr(
                o.map(function (p) {
                  return p.y || 0;
                }),
              );
            return (
              W(a) && typeof a == "number"
                ? (c = Math.max(a, c))
                : a &&
                  Array.isArray(a) &&
                  a.length &&
                  (c = Math.max(
                    qr(
                      a.map(function (p) {
                        return p.y || 0;
                      }),
                    ),
                    c,
                  )),
              W(c)
                ? A.createElement("rect", {
                    x: l < s ? l : l - f,
                    y: 0,
                    width: f,
                    height: Math.floor(
                      c + (u ? parseInt("".concat(u), 10) : 1),
                    ),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (n) {
            var i = this.props,
              a = i.baseLine,
              o = i.points,
              u = i.strokeWidth,
              l = o[0].y,
              s = o[o.length - 1].y,
              f = n * Math.abs(l - s),
              c = qr(
                o.map(function (p) {
                  return p.x || 0;
                }),
              );
            return (
              W(a) && typeof a == "number"
                ? (c = Math.max(a, c))
                : a &&
                  Array.isArray(a) &&
                  a.length &&
                  (c = Math.max(
                    qr(
                      a.map(function (p) {
                        return p.x || 0;
                      }),
                    ),
                    c,
                  )),
              W(c)
                ? A.createElement("rect", {
                    x: 0,
                    y: l < s ? l : l - f,
                    width: c + (u ? parseInt("".concat(u), 10) : 1),
                    height: Math.floor(f),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (n) {
            var i = this.props.layout;
            return i === "vertical"
              ? this.renderVerticalRect(n)
              : this.renderHorizontalRect(n);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (n, i, a, o) {
            var u = this.props,
              l = u.layout,
              s = u.type,
              f = u.stroke,
              c = u.connectNulls,
              p = u.isRange;
            u.ref;
            var d = w_(u, G7);
            return A.createElement(
              _e,
              {
                clipPath: a ? "url(#clipPath-".concat(o, ")") : null,
              },
              A.createElement(
                eo,
                kn({}, re(d, !0), {
                  points: n,
                  connectNulls: c,
                  type: s,
                  baseLine: i,
                  layout: l,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              f !== "none" &&
                A.createElement(
                  eo,
                  kn({}, re(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: s,
                    connectNulls: c,
                    fill: "none",
                    points: n,
                  }),
                ),
              f !== "none" &&
                p &&
                A.createElement(
                  eo,
                  kn({}, re(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: l,
                    type: s,
                    connectNulls: c,
                    fill: "none",
                    points: i,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (n, i) {
            var a = this,
              o = this.props,
              u = o.points,
              l = o.baseLine,
              s = o.isAnimationActive,
              f = o.animationBegin,
              c = o.animationDuration,
              p = o.animationEasing,
              d = o.animationId,
              y = this.state,
              g = y.prevPoints,
              w = y.prevBaseLine;
            return A.createElement(
              Mr,
              {
                begin: f,
                duration: c,
                isActive: s,
                easing: p,
                from: {
                  t: 0,
                },
                to: {
                  t: 1,
                },
                key: "area-".concat(d),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (v) {
                var h = v.t;
                if (g) {
                  var m = g.length / u.length,
                    S = u.map(function (_, P) {
                      var $ = Math.floor(P * m);
                      if (g[$]) {
                        var E = g[$],
                          j = Nt(E.x, _.x),
                          k = Nt(E.y, _.y);
                        return zr(
                          zr({}, _),
                          {},
                          {
                            x: j(h),
                            y: k(h),
                          },
                        );
                      }
                      return _;
                    }),
                    b;
                  if (W(l) && typeof l == "number") {
                    var x = Nt(w, l);
                    b = x(h);
                  } else if (ne(l) || ca(l)) {
                    var O = Nt(w, 0);
                    b = O(h);
                  } else
                    b = l.map(function (_, P) {
                      var $ = Math.floor(P * m);
                      if (w[$]) {
                        var E = w[$],
                          j = Nt(E.x, _.x),
                          k = Nt(E.y, _.y);
                        return zr(
                          zr({}, _),
                          {},
                          {
                            x: j(h),
                            y: k(h),
                          },
                        );
                      }
                      return _;
                    });
                  return a.renderAreaStatically(S, b, n, i);
                }
                return A.createElement(
                  _e,
                  null,
                  A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      {
                        id: "animationClipPath-".concat(i),
                      },
                      a.renderClipRect(h),
                    ),
                  ),
                  A.createElement(
                    _e,
                    {
                      clipPath: "url(#animationClipPath-".concat(i, ")"),
                    },
                    a.renderAreaStatically(u, l, n, i),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (n, i) {
            var a = this.props,
              o = a.points,
              u = a.baseLine,
              l = a.isAnimationActive,
              s = this.state,
              f = s.prevPoints,
              c = s.prevBaseLine,
              p = s.totalLength;
            return l &&
              o &&
              o.length &&
              ((!f && p > 0) || !Mo(f, o) || !Mo(c, u))
              ? this.renderAreaWithAnimation(n, i)
              : this.renderAreaStatically(o, u, n, i);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              i = this.props,
              a = i.hide,
              o = i.dot,
              u = i.points,
              l = i.className,
              s = i.top,
              f = i.left,
              c = i.xAxis,
              p = i.yAxis,
              d = i.width,
              y = i.height,
              g = i.isAnimationActive,
              w = i.id;
            if (a || !u || !u.length) return null;
            var v = this.state.isAnimationFinished,
              h = u.length === 1,
              m = ue("recharts-area", l),
              S = c && c.allowDataOverflow,
              b = p && p.allowDataOverflow,
              x = S || b,
              O = ne(w) ? this.id : w,
              _ =
                (n = re(o, !1)) !== null && n !== void 0
                  ? n
                  : {
                      r: 3,
                      strokeWidth: 2,
                    },
              P = _.r,
              $ = P === void 0 ? 3 : P,
              E = _.strokeWidth,
              j = E === void 0 ? 2 : E,
              k = a2(o) ? o : {},
              I = k.clipDot,
              M = I === void 0 ? !0 : I,
              D = $ * 2 + j;
            return A.createElement(
              _e,
              {
                className: m,
              },
              S || b
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      {
                        id: "clipPath-".concat(O),
                      },
                      A.createElement("rect", {
                        x: S ? f : f - d / 2,
                        y: b ? s : s - y / 2,
                        width: S ? d : d * 2,
                        height: b ? y : y * 2,
                      }),
                    ),
                    !M &&
                      A.createElement(
                        "clipPath",
                        {
                          id: "clipPath-dots-".concat(O),
                        },
                        A.createElement("rect", {
                          x: f - D / 2,
                          y: s - D / 2,
                          width: d + D,
                          height: y + D,
                        }),
                      ),
                  )
                : null,
              h ? null : this.renderArea(x, O),
              (o || h) && this.renderDots(x, M, O),
              (!g || v) && on.renderCallByParent(this.props, u),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  curBaseLine: n.baseLine,
                  prevPoints: i.curPoints,
                  prevBaseLine: i.curBaseLine,
                }
              : n.points !== i.curPoints || n.baseLine !== i.curBaseLine
                ? {
                    curPoints: n.points,
                    curBaseLine: n.baseLine,
                  }
                : null;
          },
        },
      ],
    )
  );
})(F.PureComponent);
b_ = yn;
lr(yn, "displayName", "Area");
lr(yn, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !_r.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
});
lr(yn, "getBaseValue", function (e, t, r, n) {
  var i = e.layout,
    a = e.baseValue,
    o = t.props.baseValue,
    u = o ?? a;
  if (W(u) && typeof u == "number") return u;
  var l = i === "horizontal" ? n : r,
    s = l.scale.domain();
  if (l.type === "number") {
    var f = Math.max(s[0], s[1]),
      c = Math.min(s[0], s[1]);
    return u === "dataMin"
      ? c
      : u === "dataMax" || f < 0
        ? f
        : Math.max(Math.min(s[0], s[1]), 0);
  }
  return u === "dataMin" ? s[0] : u === "dataMax" ? s[1] : s[0];
});
lr(yn, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.xAxis,
    i = e.yAxis,
    a = e.xAxisTicks,
    o = e.yAxisTicks,
    u = e.bandSize,
    l = e.dataKey,
    s = e.stackedData,
    f = e.dataStartIndex,
    c = e.displayedData,
    p = e.offset,
    d = t.layout,
    y = s && s.length,
    g = b_.getBaseValue(t, r, n, i),
    w = d === "horizontal",
    v = !1,
    h = c.map(function (S, b) {
      var x;
      y
        ? (x = s[f + b])
        : ((x = Pt(S, l)), Array.isArray(x) ? (v = !0) : (x = [g, x]));
      var O = x[1] == null || (y && Pt(S, l) == null);
      return w
        ? {
            x: O0({
              axis: n,
              ticks: a,
              bandSize: u,
              entry: S,
              index: b,
            }),
            y: O ? null : i.scale(x[1]),
            value: x,
            payload: S,
          }
        : {
            x: O ? null : n.scale(x[1]),
            y: O0({
              axis: i,
              ticks: o,
              bandSize: u,
              entry: S,
              index: b,
            }),
            value: x,
            payload: S,
          };
    }),
    m;
  return (
    y || v
      ? (m = h.map(function (S) {
          var b = Array.isArray(S.value) ? S.value[0] : null;
          return w
            ? {
                x: S.x,
                y: b != null && S.y != null ? i.scale(b) : null,
              }
            : {
                x: b != null ? n.scale(b) : null,
                y: S.y,
              };
        }))
      : (m = w ? i.scale(g) : n.scale(g)),
    zr(
      {
        points: h,
        baseLine: m,
        layout: d,
        isRange: v,
      },
      p,
    )
  );
});
lr(yn, "renderDotItem", function (e, t) {
  var r;
  if (A.isValidElement(e)) r = A.cloneElement(e, t);
  else if (te(e)) r = e(t);
  else {
    var n = ue("recharts-area-dot", typeof e != "boolean" ? e.className : ""),
      i = t.key,
      a = w_(t, q7);
    r = A.createElement(
      Vv,
      kn({}, a, {
        key: i,
        className: n,
      }),
    );
  }
  return r;
});

function Zi(e) {
  "@babel/helpers - typeof";
  return (
    (Zi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zi(e)
  );
}

function nV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function iV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, P_(n.key), n);
  }
}

function aV(e, t, r) {
  return (
    t && iV(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function oV(e, t, r) {
  return (
    (t = Es(t)),
    uV(
      e,
      O_() ? Reflect.construct(t, r || [], Es(e).constructor) : t.apply(e, r),
    )
  );
}

function uV(e, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return lV(e);
}

function lV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function O_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (O_ = function () {
    return !!e;
  })();
}

function Es(e) {
  return (
    (Es = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Es(e)
  );
}

function sV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Hd(e, t);
}

function Hd(e, t) {
  return (
    (Hd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Hd(e, t)
  );
}

function __(e, t, r) {
  return (
    (t = P_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function P_(e) {
  var t = cV(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}

function cV(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function Vd() {
  return (
    (Vd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vd.apply(this, arguments)
  );
}

function fV(e) {
  var t = e.xAxisId,
    r = l_(),
    n = s_(),
    i = o_(t);
  return i == null
    ? null
    : A.createElement(
        kc,
        Vd({}, i, {
          className: ue(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: {
            x: 0,
            y: 0,
            width: r,
            height: n,
          },
          ticksGenerator: function (o) {
            return Cn(o, !0);
          },
        }),
      );
}
var Mc = (function (e) {
  function t() {
    return nV(this, t), oV(this, t, arguments);
  }
  return (
    sV(t, e),
    aV(t, [
      {
        key: "render",
        value: function () {
          return A.createElement(fV, this.props);
        },
      },
    ])
  );
})(A.Component);
__(Mc, "displayName", "XAxis");
__(Mc, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0,
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});

function Ji(e) {
  "@babel/helpers - typeof";
  return (
    (Ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ji(e)
  );
}

function pV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function dV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $_(n.key), n);
  }
}

function hV(e, t, r) {
  return (
    t && dV(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function vV(e, t, r) {
  return (
    (t = $s(t)),
    yV(
      e,
      A_() ? Reflect.construct(t, r || [], $s(e).constructor) : t.apply(e, r),
    )
  );
}

function yV(e, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return mV(e);
}

function mV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function A_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (A_ = function () {
    return !!e;
  })();
}

function $s(e) {
  return (
    ($s = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    $s(e)
  );
}

function gV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Kd(e, t);
}

function Kd(e, t) {
  return (
    (Kd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Kd(e, t)
  );
}

function E_(e, t, r) {
  return (
    (t = $_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function $_(e) {
  var t = bV(e, "string");
  return Ji(t) == "symbol" ? t : t + "";
}

function bV(e, t) {
  if (Ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function Gd() {
  return (
    (Gd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gd.apply(this, arguments)
  );
}
var wV = function (t) {
    var r = t.yAxisId,
      n = l_(),
      i = s_(),
      a = u_(r);
    return a == null
      ? null
      : A.createElement(
          kc,
          Gd({}, a, {
            className: ue(
              "recharts-".concat(a.axisType, " ").concat(a.axisType),
              a.className,
            ),
            viewBox: {
              x: 0,
              y: 0,
              width: n,
              height: i,
            },
            ticksGenerator: function (u) {
              return Cn(u, !0);
            },
          }),
        );
  },
  Nc = (function (e) {
    function t() {
      return pV(this, t), vV(this, t, arguments);
    }
    return (
      gV(t, e),
      hV(t, [
        {
          key: "render",
          value: function () {
            return A.createElement(wV, this.props);
          },
        },
      ])
    );
  })(A.Component);
E_(Nc, "displayName", "YAxis");
E_(Nc, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0,
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});

function F1(e) {
  return _V(e) || OV(e) || SV(e) || xV();
}

function xV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function SV(e, t) {
  if (e) {
    if (typeof e == "string") return qd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qd(e, t);
  }
}

function OV(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function _V(e) {
  if (Array.isArray(e)) return qd(e);
}

function qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Xd = function (t, r, n, i, a) {
    var o = er(t, qv),
      u = er(t, Tc),
      l = [].concat(F1(o), F1(u)),
      s = er(t, Cc),
      f = "".concat(i, "Id"),
      c = i[0],
      p = r;
    if (
      (l.length &&
        (p = l.reduce(function (g, w) {
          if (
            w.props[f] === n &&
            pr(w.props, "extendDomain") &&
            W(w.props[c])
          ) {
            var v = w.props[c];
            return [Math.min(g[0], v), Math.max(g[1], v)];
          }
          return g;
        }, p)),
      s.length)
    ) {
      var d = "".concat(c, "1"),
        y = "".concat(c, "2");
      p = s.reduce(function (g, w) {
        if (
          w.props[f] === n &&
          pr(w.props, "extendDomain") &&
          W(w.props[d]) &&
          W(w.props[y])
        ) {
          var v = w.props[d],
            h = w.props[y];
          return [Math.min(g[0], v, h), Math.max(g[1], v, h)];
        }
        return g;
      }, p);
    }
    return (
      a &&
        a.length &&
        (p = a.reduce(function (g, w) {
          return W(w) ? [Math.min(g[0], w), Math.max(g[1], w)] : g;
        }, p)),
      p
    );
  },
  T_ = {
    exports: {},
  };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";

  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));

  function i(l, s, f) {
    (this.fn = l), (this.context = s), (this.once = f || !1);
  }

  function a(l, s, f, c, p) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var d = new i(f, c || l, p),
      y = r ? r + s : s;
    return (
      l._events[y]
        ? l._events[y].fn
          ? (l._events[y] = [l._events[y], d])
          : l._events[y].push(d)
        : ((l._events[y] = d), l._eventsCount++),
      l
    );
  }

  function o(l, s) {
    --l._eventsCount === 0 ? (l._events = new n()) : delete l._events[s];
  }

  function u() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (u.prototype.eventNames = function () {
    var s = [],
      f,
      c;
    if (this._eventsCount === 0) return s;
    for (c in (f = this._events)) t.call(f, c) && s.push(r ? c.slice(1) : c);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(f))
      : s;
  }),
    (u.prototype.listeners = function (s) {
      var f = r ? r + s : s,
        c = this._events[f];
      if (!c) return [];
      if (c.fn) return [c.fn];
      for (var p = 0, d = c.length, y = new Array(d); p < d; p++)
        y[p] = c[p].fn;
      return y;
    }),
    (u.prototype.listenerCount = function (s) {
      var f = r ? r + s : s,
        c = this._events[f];
      return c ? (c.fn ? 1 : c.length) : 0;
    }),
    (u.prototype.emit = function (s, f, c, p, d, y) {
      var g = r ? r + s : s;
      if (!this._events[g]) return !1;
      var w = this._events[g],
        v = arguments.length,
        h,
        m;
      if (w.fn) {
        switch ((w.once && this.removeListener(s, w.fn, void 0, !0), v)) {
          case 1:
            return w.fn.call(w.context), !0;
          case 2:
            return w.fn.call(w.context, f), !0;
          case 3:
            return w.fn.call(w.context, f, c), !0;
          case 4:
            return w.fn.call(w.context, f, c, p), !0;
          case 5:
            return w.fn.call(w.context, f, c, p, d), !0;
          case 6:
            return w.fn.call(w.context, f, c, p, d, y), !0;
        }
        for (m = 1, h = new Array(v - 1); m < v; m++) h[m - 1] = arguments[m];
        w.fn.apply(w.context, h);
      } else {
        var S = w.length,
          b;
        for (m = 0; m < S; m++)
          switch (
            (w[m].once && this.removeListener(s, w[m].fn, void 0, !0), v)
          ) {
            case 1:
              w[m].fn.call(w[m].context);
              break;
            case 2:
              w[m].fn.call(w[m].context, f);
              break;
            case 3:
              w[m].fn.call(w[m].context, f, c);
              break;
            case 4:
              w[m].fn.call(w[m].context, f, c, p);
              break;
            default:
              if (!h)
                for (b = 1, h = new Array(v - 1); b < v; b++)
                  h[b - 1] = arguments[b];
              w[m].fn.apply(w[m].context, h);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (s, f, c) {
      return a(this, s, f, c, !1);
    }),
    (u.prototype.once = function (s, f, c) {
      return a(this, s, f, c, !0);
    }),
    (u.prototype.removeListener = function (s, f, c, p) {
      var d = r ? r + s : s;
      if (!this._events[d]) return this;
      if (!f) return o(this, d), this;
      var y = this._events[d];
      if (y.fn)
        y.fn === f && (!p || y.once) && (!c || y.context === c) && o(this, d);
      else {
        for (var g = 0, w = [], v = y.length; g < v; g++)
          (y[g].fn !== f || (p && !y[g].once) || (c && y[g].context !== c)) &&
            w.push(y[g]);
        w.length ? (this._events[d] = w.length === 1 ? w[0] : w) : o(this, d);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (s) {
      var f;
      return (
        s
          ? ((f = r ? r + s : s), this._events[f] && o(this, f))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u);
})(T_);
var PV = T_.exports;
const AV = ve(PV);
var If = new AV(),
  Df = "recharts.syncMouseEvents";

function tu(e) {
  "@babel/helpers - typeof";
  return (
    (tu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tu(e)
  );
}

function EV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function $V(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, j_(n.key), n);
  }
}

function TV(e, t, r) {
  return (
    t && $V(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function Lf(e, t, r) {
  return (
    (t = j_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function j_(e) {
  var t = jV(e, "string");
  return tu(t) == "symbol" ? t : t + "";
}

function jV(e, t) {
  if (tu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var CV = (function () {
  function e() {
    EV(this, e),
      Lf(this, "activeIndex", 0),
      Lf(this, "coordinateList", []),
      Lf(this, "layout", "horizontal");
  }
  return TV(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          l = r.layout,
          s = l === void 0 ? null : l,
          f = r.offset,
          c = f === void 0 ? null : f,
          p = r.mouseHandlerCallback,
          d = p === void 0 ? null : p;
        (this.coordinateList =
          (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = s ?? this.layout),
          (this.offset = c ?? this.offset),
          (this.mouseHandlerCallback = d ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          ));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse();
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse();
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            l = this.coordinateList[this.activeIndex].coordinate,
            s =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            c = a + l + s,
            p = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({
            pageX: c,
            pageY: p,
          });
        }
      },
    },
  ]);
})();

function kV(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (n && i && W(n) && W(i)) return !0;
  }
  return !1;
}

function MV(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}

function C_(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = qe(t, r, n, i),
    u = qe(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}

function NV(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    (n = t.x), (a = n), (i = r.top), (o = r.top + r.height);
  else if (e === "vertical")
    (i = t.y), (o = i), (n = r.left), (a = r.left + r.width);
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        l = t.cy,
        s = t.innerRadius,
        f = t.outerRadius,
        c = t.angle,
        p = qe(u, l, s, c),
        d = qe(u, l, f, c);
      (n = p.x), (i = p.y), (a = d.x), (o = d.y);
    } else return C_(t);
  return [
    {
      x: n,
      y: i,
    },
    {
      x: a,
      y: o,
    },
  ];
}

function ru(e) {
  "@babel/helpers - typeof";
  return (
    (ru =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ru(e)
  );
}

function U1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function Gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? U1(Object(r), !0).forEach(function (n) {
          IV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : U1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function IV(e, t, r) {
  return (
    (t = DV(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function DV(e) {
  var t = LV(e, "string");
  return ru(t) == "symbol" ? t : t + "";
}

function LV(e, t) {
  if (ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}

function RV(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    l = e.offset,
    s = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    c = e.layout,
    p = e.chartName,
    d =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !d || !a || !o || (p !== "ScatterChart" && i !== "axis"))
    return null;
  var y,
    g = eo;
  if (p === "ScatterChart") (y = o), (g = gW);
  else if (p === "BarChart") (y = MV(c, o, l, f)), (g = Hv);
  else if (c === "radial") {
    var w = C_(o),
      v = w.cx,
      h = w.cy,
      m = w.radius,
      S = w.startAngle,
      b = w.endAngle;
    (y = {
      cx: v,
      cy: h,
      startAngle: S,
      endAngle: b,
      innerRadius: m,
      outerRadius: m,
    }),
      (g = kO);
  } else
    (y = {
      points: NV(c, o, l),
    }),
      (g = eo);
  var x = Gu(
    Gu(
      Gu(
        Gu(
          {
            stroke: "#ccc",
            pointerEvents: "none",
          },
          l,
        ),
        y,
      ),
      re(d, !1),
    ),
    {},
    {
      payload: u,
      payloadIndex: s,
      className: ue("recharts-tooltip-cursor", d.className),
    },
  );
  return F.isValidElement(d) ? F.cloneElement(d, x) : F.createElement(g, x);
}
var BV = ["item"],
  zV = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];

function ea(e) {
  "@babel/helpers - typeof";
  return (
    (ea =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ea(e)
  );
}

function yi() {
  return (
    (yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    yi.apply(this, arguments)
  );
}

function W1(e, t) {
  return WV(e) || UV(e, t) || M_(e, t) || FV();
}

function FV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function UV(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          l = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}

function WV(e) {
  if (Array.isArray(e)) return e;
}

function H1(e, t) {
  if (e == null) return {};
  var r = HV(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}

function HV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}

function VV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}

function KV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, N_(n.key), n);
  }
}

function GV(e, t, r) {
  return (
    t && KV(e.prototype, t),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    e
  );
}

function qV(e, t, r) {
  return (
    (t = Ts(t)),
    XV(
      e,
      k_() ? Reflect.construct(t, r || [], Ts(e).constructor) : t.apply(e, r),
    )
  );
}

function XV(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return YV(e);
}

function YV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}

function k_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (k_ = function () {
    return !!e;
  })();
}

function Ts(e) {
  return (
    (Ts = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ts(e)
  );
}

function QV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(e, "prototype", {
      writable: !1,
    }),
    t && Yd(e, t);
}

function Yd(e, t) {
  return (
    (Yd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Yd(e, t)
  );
}

function ta(e) {
  return eK(e) || JV(e) || M_(e) || ZV();
}

function ZV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}

function M_(e, t) {
  if (e) {
    if (typeof e == "string") return Qd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qd(e, t);
  }
}

function JV(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}

function eK(e) {
  if (Array.isArray(e)) return Qd(e);
}

function Qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function V1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? V1(Object(r), !0).forEach(function (n) {
          Y(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : V1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}

function Y(e, t, r) {
  return (
    (t = N_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}

function N_(e) {
  var t = tK(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}

function tK(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rK = {
    xAxis: ["bottom", "top"],
    yAxis: ["left", "right"],
  },
  nK = {
    width: "100%",
    height: "100%",
  },
  I_ = {
    x: 0,
    y: 0,
  };

function qu(e) {
  return e;
}
var iK = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
        ? t.y
        : r === "centric"
          ? t.angle
          : t.radius;
  },
  aK = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal")
        return {
          x: a.coordinate,
          y: i.y,
        };
      if (t === "vertical")
        return {
          x: i.x,
          y: a.coordinate,
        };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return C(
          C(C({}, i), qe(i.cx, i.cy, u, o)),
          {},
          {
            angle: o,
            radius: u,
          },
        );
      }
      var l = a.coordinate,
        s = i.angle;
      return C(
        C(C({}, i), qe(i.cx, i.cy, l, s)),
        {},
        {
          angle: s,
          radius: l,
        },
      );
    }
    return I_;
  },
  Ic = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, l) {
        var s = l.props.data;
        return s && s.length ? [].concat(ta(u), ta(s)) : u;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && W(i) && W(a)
        ? t.slice(i, a + 1)
        : [];
  };

function D_(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Zd = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = Ic(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (l, s) {
          var f,
            c = (f = s.props.data) !== null && f !== void 0 ? f : r;
          c &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var p;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var d = c === void 0 ? u : c;
            p = Cl(d, o.dataKey, i);
          } else p = (c && c[n]) || u[n];
          return p ? [].concat(ta(l), [TO(s, p)]) : l;
        }, []);
  },
  K1 = function (t, r, n, i) {
    var a = i || {
        x: t.chartX,
        y: t.chartY,
      },
      o = iK(a, n),
      u = t.orderedTooltipTicks,
      l = t.tooltipAxis,
      s = t.tooltipTicks,
      f = cF(o, u, s, l);
    if (f >= 0 && s) {
      var c = s[f] && s[f].value,
        p = Zd(t, r, f, c),
        d = aK(n, u, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: c,
        activePayload: p,
        activeCoordinate: d,
      };
    }
    return null;
  },
  oK = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      p = t.stackOffset,
      d = EO(f, a);
    return n.reduce(function (y, g) {
      var w,
        v =
          g.type.defaultProps !== void 0
            ? C(C({}, g.type.defaultProps), g.props)
            : g.props,
        h = v.type,
        m = v.dataKey,
        S = v.allowDataOverflow,
        b = v.allowDuplicatedCategory,
        x = v.scale,
        O = v.ticks,
        _ = v.includeHidden,
        P = v[o];
      if (y[P]) return y;
      var $ = Ic(t.data, {
          graphicalItems: i.filter(function (U) {
            var q,
              ie =
                o in U.props
                  ? U.props[o]
                  : (q = U.type.defaultProps) === null || q === void 0
                    ? void 0
                    : q[o];
            return ie === P;
          }),
          dataStartIndex: l,
          dataEndIndex: s,
        }),
        E = $.length,
        j,
        k,
        I;
      kV(v.domain, S, h) &&
        ((j = md(v.domain, null, S)),
        d && (h === "number" || x !== "auto") && (I = Ja($, m, "category")));
      var M = D_(h);
      if (!j || j.length === 0) {
        var D,
          L = (D = v.domain) !== null && D !== void 0 ? D : M;
        if (m) {
          if (((j = Ja($, m, h)), h === "category" && d)) {
            var T = Yj(j);
            b && T
              ? ((k = j), (j = ys(0, E)))
              : b ||
                (j = E0(L, j, g).reduce(function (U, q) {
                  return U.indexOf(q) >= 0 ? U : [].concat(ta(U), [q]);
                }, []));
          } else if (h === "category")
            b
              ? (j = j.filter(function (U) {
                  return U !== "" && !ne(U);
                }))
              : (j = E0(L, j, g).reduce(function (U, q) {
                  return U.indexOf(q) >= 0 || q === "" || ne(q)
                    ? U
                    : [].concat(ta(U), [q]);
                }, []));
          else if (h === "number") {
            var N = vF(
              $,
              i.filter(function (U) {
                var q,
                  ie,
                  we =
                    o in U.props
                      ? U.props[o]
                      : (q = U.type.defaultProps) === null || q === void 0
                        ? void 0
                        : q[o],
                  je =
                    "hide" in U.props
                      ? U.props.hide
                      : (ie = U.type.defaultProps) === null || ie === void 0
                        ? void 0
                        : ie.hide;
                return we === P && (_ || !je);
              }),
              m,
              a,
              f,
            );
            N && (j = N);
          }
          d && (h === "number" || x !== "auto") && (I = Ja($, m, "category"));
        } else
          d
            ? (j = ys(0, E))
            : u && u[P] && u[P].hasStack && h === "number"
              ? (j = p === "expand" ? [0, 1] : $O(u[P].stackGroups, l, s))
              : (j = AO(
                  $,
                  i.filter(function (U) {
                    var q = o in U.props ? U.props[o] : U.type.defaultProps[o],
                      ie =
                        "hide" in U.props
                          ? U.props.hide
                          : U.type.defaultProps.hide;
                    return q === P && (_ || !ie);
                  }),
                  h,
                  f,
                  !0,
                ));
        if (h === "number") (j = Xd(c, j, P, a, O)), L && (j = md(L, j, S));
        else if (h === "category" && L) {
          var B = L,
            H = j.every(function (U) {
              return B.indexOf(U) >= 0;
            });
          H && (j = B);
        }
      }
      return C(
        C({}, y),
        {},
        Y(
          {},
          P,
          C(
            C({}, v),
            {},
            {
              axisType: a,
              domain: j,
              categoricalDomain: I,
              duplicateDomain: k,
              originalDomain: (w = v.domain) !== null && w !== void 0 ? w : M,
              isCategorical: d,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  uK = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      p = Ic(t.data, {
        graphicalItems: n,
        dataStartIndex: l,
        dataEndIndex: s,
      }),
      d = p.length,
      y = EO(f, a),
      g = -1;
    return n.reduce(function (w, v) {
      var h =
          v.type.defaultProps !== void 0
            ? C(C({}, v.type.defaultProps), v.props)
            : v.props,
        m = h[o],
        S = D_("number");
      if (!w[m]) {
        g++;
        var b;
        return (
          y
            ? (b = ys(0, d))
            : u && u[m] && u[m].hasStack
              ? ((b = $O(u[m].stackGroups, l, s)), (b = Xd(c, b, m, a)))
              : ((b = md(
                  S,
                  AO(
                    p,
                    n.filter(function (x) {
                      var O,
                        _,
                        P =
                          o in x.props
                            ? x.props[o]
                            : (O = x.type.defaultProps) === null || O === void 0
                              ? void 0
                              : O[o],
                        $ =
                          "hide" in x.props
                            ? x.props.hide
                            : (_ = x.type.defaultProps) === null || _ === void 0
                              ? void 0
                              : _.hide;
                      return P === m && !$;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (b = Xd(c, b, m, a))),
          C(
            C({}, w),
            {},
            Y(
              {},
              m,
              C(
                C(
                  {
                    axisType: a,
                  },
                  i.defaultProps,
                ),
                {},
                {
                  hide: !0,
                  orientation: Rt(rK, "".concat(a, ".").concat(g % 2), null),
                  domain: b,
                  originalDomain: S,
                  isCategorical: y,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return w;
    }, {});
  },
  lK = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.children,
      c = "".concat(i, "Id"),
      p = er(f, a),
      d = {};
    return (
      p && p.length
        ? (d = oK(t, {
            axes: p,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (d = uK(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s,
          })),
      d
    );
  },
  sK = function (t) {
    var r = ti(t),
      n = Cn(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: mv(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: us(r, n),
    };
  },
  G1 = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = wt(r, Vi),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  cK = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = Or(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  q1 = function (t) {
    return t === "horizontal"
      ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis",
        }
      : t === "vertical"
        ? {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis",
          }
        : t === "centric"
          ? {
              numericAxisName: "radiusAxis",
              cateAxisName: "angleAxis",
            }
          : {
              numericAxisName: "angleAxis",
              cateAxisName: "radiusAxis",
            };
  },
  fK = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      l = u === void 0 ? {} : u,
      s = n.width,
      f = n.height,
      c = n.children,
      p = n.margin || {},
      d = wt(c, Vi),
      y = wt(c, _i),
      g = Object.keys(l).reduce(
        function (b, x) {
          var O = l[x],
            _ = O.orientation;
          return !O.mirror && !O.hide
            ? C(C({}, b), {}, Y({}, _, b[_] + O.width))
            : b;
        },
        {
          left: p.left || 0,
          right: p.right || 0,
        },
      ),
      w = Object.keys(o).reduce(
        function (b, x) {
          var O = o[x],
            _ = O.orientation;
          return !O.mirror && !O.hide
            ? C(C({}, b), {}, Y({}, _, Rt(b, "".concat(_)) + O.height))
            : b;
        },
        {
          top: p.top || 0,
          bottom: p.bottom || 0,
        },
      ),
      v = C(C({}, w), g),
      h = v.bottom;
    d && (v.bottom += d.props.height || Vi.defaultProps.height),
      y && r && (v = dF(v, i, n, r));
    var m = s - v.left - v.right,
      S = f - v.top - v.bottom;
    return C(
      C(
        {
          brushBottom: h,
        },
        v,
      ),
      {},
      {
        width: Math.max(m, 0),
        height: Math.max(S, 0),
      },
    );
  },
  pK = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  dK = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      l = t.axisComponents,
      s = t.legendContent,
      f = t.formatAxisMap,
      c = t.defaultProps,
      p = function (v, h) {
        var m = h.graphicalItems,
          S = h.stackGroups,
          b = h.offset,
          x = h.updateId,
          O = h.dataStartIndex,
          _ = h.dataEndIndex,
          P = v.barSize,
          $ = v.layout,
          E = v.barGap,
          j = v.barCategoryGap,
          k = v.maxBarSize,
          I = q1($),
          M = I.numericAxisName,
          D = I.cateAxisName,
          L = cK(m),
          T = [];
        return (
          m.forEach(function (N, B) {
            var H = Ic(v.data, {
                graphicalItems: [N],
                dataStartIndex: O,
                dataEndIndex: _,
              }),
              U =
                N.type.defaultProps !== void 0
                  ? C(C({}, N.type.defaultProps), N.props)
                  : N.props,
              q = U.dataKey,
              ie = U.maxBarSize,
              we = U["".concat(M, "Id")],
              je = U["".concat(D, "Id")],
              $t = {},
              st = l.reduce(function (mn, gn) {
                var Dc = h["".concat(gn.axisType, "Map")],
                  Yv = U["".concat(gn.axisType, "Id")];
                (Dc && Dc[Yv]) || gn.axisType === "zAxis" || Vn();
                var Qv = Dc[Yv];
                return C(
                  C({}, mn),
                  {},
                  Y(
                    Y({}, gn.axisType, Qv),
                    "".concat(gn.axisType, "Ticks"),
                    Cn(Qv),
                  ),
                );
              }, $t),
              V = st[D],
              Q = st["".concat(D, "Ticks")],
              J = S && S[we] && S[we].hasStack && EF(N, S[we].stackGroups),
              R = Or(N.type).indexOf("Bar") >= 0,
              Ee = us(V, Q),
              ae = [],
              Ie =
                L &&
                fF({
                  barSize: P,
                  stackGroups: S,
                  totalSize: pK(st, D),
                });
            if (R) {
              var De,
                ct,
                Rr = ne(ie) ? k : ie,
                Qn =
                  (De =
                    (ct = us(V, Q, !0)) !== null && ct !== void 0 ? ct : Rr) !==
                    null && De !== void 0
                    ? De
                    : 0;
              (ae = pF({
                barGap: E,
                barCategoryGap: j,
                bandSize: Qn !== Ee ? Qn : Ee,
                sizeList: Ie[je],
                maxBarSize: Rr,
              })),
                Qn !== Ee &&
                  (ae = ae.map(function (mn) {
                    return C(
                      C({}, mn),
                      {},
                      {
                        position: C(
                          C({}, mn.position),
                          {},
                          {
                            offset: mn.position.offset - Qn / 2,
                          },
                        ),
                      },
                    );
                  }));
            }
            var yu = N && N.type && N.type.getComposedData;
            yu &&
              T.push({
                props: C(
                  C(
                    {},
                    yu(
                      C(
                        C({}, st),
                        {},
                        {
                          displayedData: H,
                          props: v,
                          dataKey: q,
                          item: N,
                          bandSize: Ee,
                          barPosition: ae,
                          offset: b,
                          stackedData: J,
                          layout: $,
                          dataStartIndex: O,
                          dataEndIndex: _,
                        },
                      ),
                    ),
                  ),
                  {},
                  Y(
                    Y(
                      Y(
                        {
                          key: N.key || "item-".concat(B),
                        },
                        M,
                        st[M],
                      ),
                      D,
                      st[D],
                    ),
                    "animationId",
                    x,
                  ),
                ),
                childIndex: l2(N, v.children),
                item: N,
              });
          }),
          T
        );
      },
      d = function (v, h) {
        var m = v.props,
          S = v.dataStartIndex,
          b = v.dataEndIndex,
          x = v.updateId;
        if (
          !wm({
            props: m,
          })
        )
          return null;
        var O = m.children,
          _ = m.layout,
          P = m.stackOffset,
          $ = m.data,
          E = m.reverseStackOrder,
          j = q1(_),
          k = j.numericAxisName,
          I = j.cateAxisName,
          M = er(O, n),
          D = _F($, M, "".concat(k, "Id"), "".concat(I, "Id"), P, E),
          L = l.reduce(function (U, q) {
            var ie = "".concat(q.axisType, "Map");
            return C(
              C({}, U),
              {},
              Y(
                {},
                ie,
                lK(
                  m,
                  C(
                    C({}, q),
                    {},
                    {
                      graphicalItems: M,
                      stackGroups: q.axisType === k && D,
                      dataStartIndex: S,
                      dataEndIndex: b,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          T = fK(
            C(
              C({}, L),
              {},
              {
                props: m,
                graphicalItems: M,
              },
            ),
            h == null ? void 0 : h.legendBBox,
          );
        Object.keys(L).forEach(function (U) {
          L[U] = f(m, L[U], T, U.replace("Map", ""), r);
        });
        var N = L["".concat(I, "Map")],
          B = sK(N),
          H = p(
            m,
            C(
              C({}, L),
              {},
              {
                dataStartIndex: S,
                dataEndIndex: b,
                updateId: x,
                graphicalItems: M,
                stackGroups: D,
                offset: T,
              },
            ),
          );
        return C(
          C(
            {
              formattedGraphicalItems: H,
              graphicalItems: M,
              offset: T,
              stackGroups: D,
            },
            B,
          ),
          L,
        );
      },
      y = (function (w) {
        function v(h) {
          var m, S, b;
          return (
            VV(this, v),
            (b = qV(this, v, [h])),
            Y(b, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            Y(b, "accessibilityManager", new CV()),
            Y(b, "handleLegendBBoxUpdate", function (x) {
              if (x) {
                var O = b.state,
                  _ = O.dataStartIndex,
                  P = O.dataEndIndex,
                  $ = O.updateId;
                b.setState(
                  C(
                    {
                      legendBBox: x,
                    },
                    d(
                      {
                        props: b.props,
                        dataStartIndex: _,
                        dataEndIndex: P,
                        updateId: $,
                      },
                      C(
                        C({}, b.state),
                        {},
                        {
                          legendBBox: x,
                        },
                      ),
                    ),
                  ),
                );
              }
            }),
            Y(b, "handleReceiveSyncEvent", function (x, O, _) {
              if (b.props.syncId === x) {
                if (
                  _ === b.eventEmitterSymbol &&
                  typeof b.props.syncMethod != "function"
                )
                  return;
                b.applySyncEvent(O);
              }
            }),
            Y(b, "handleBrushChange", function (x) {
              var O = x.startIndex,
                _ = x.endIndex;
              if (O !== b.state.dataStartIndex || _ !== b.state.dataEndIndex) {
                var P = b.state.updateId;
                b.setState(function () {
                  return C(
                    {
                      dataStartIndex: O,
                      dataEndIndex: _,
                    },
                    d(
                      {
                        props: b.props,
                        dataStartIndex: O,
                        dataEndIndex: _,
                        updateId: P,
                      },
                      b.state,
                    ),
                  );
                }),
                  b.triggerSyncEvent({
                    dataStartIndex: O,
                    dataEndIndex: _,
                  });
              }
            }),
            Y(b, "handleMouseEnter", function (x) {
              var O = b.getMouseInfo(x);
              if (O) {
                var _ = C(
                  C({}, O),
                  {},
                  {
                    isTooltipActive: !0,
                  },
                );
                b.setState(_), b.triggerSyncEvent(_);
                var P = b.props.onMouseEnter;
                te(P) && P(_, x);
              }
            }),
            Y(b, "triggeredAfterMouseMove", function (x) {
              var O = b.getMouseInfo(x),
                _ = O
                  ? C(
                      C({}, O),
                      {},
                      {
                        isTooltipActive: !0,
                      },
                    )
                  : {
                      isTooltipActive: !1,
                    };
              b.setState(_), b.triggerSyncEvent(_);
              var P = b.props.onMouseMove;
              te(P) && P(_, x);
            }),
            Y(b, "handleItemMouseEnter", function (x) {
              b.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: x,
                  activePayload: x.tooltipPayload,
                  activeCoordinate: x.tooltipPosition || {
                    x: x.cx,
                    y: x.cy,
                  },
                };
              });
            }),
            Y(b, "handleItemMouseLeave", function () {
              b.setState(function () {
                return {
                  isTooltipActive: !1,
                };
              });
            }),
            Y(b, "handleMouseMove", function (x) {
              x.persist(), b.throttleTriggeredAfterMouseMove(x);
            }),
            Y(b, "handleMouseLeave", function (x) {
              b.throttleTriggeredAfterMouseMove.cancel();
              var O = {
                isTooltipActive: !1,
              };
              b.setState(O), b.triggerSyncEvent(O);
              var _ = b.props.onMouseLeave;
              te(_) && _(O, x);
            }),
            Y(b, "handleOuterEvent", function (x) {
              var O = u2(x),
                _ = Rt(b.props, "".concat(O));
              if (O && te(_)) {
                var P, $;
                /.*touch.*/i.test(O)
                  ? ($ = b.getMouseInfo(x.changedTouches[0]))
                  : ($ = b.getMouseInfo(x)),
                  _((P = $) !== null && P !== void 0 ? P : {}, x);
              }
            }),
            Y(b, "handleClick", function (x) {
              var O = b.getMouseInfo(x);
              if (O) {
                var _ = C(
                  C({}, O),
                  {},
                  {
                    isTooltipActive: !0,
                  },
                );
                b.setState(_), b.triggerSyncEvent(_);
                var P = b.props.onClick;
                te(P) && P(_, x);
              }
            }),
            Y(b, "handleMouseDown", function (x) {
              var O = b.props.onMouseDown;
              if (te(O)) {
                var _ = b.getMouseInfo(x);
                O(_, x);
              }
            }),
            Y(b, "handleMouseUp", function (x) {
              var O = b.props.onMouseUp;
              if (te(O)) {
                var _ = b.getMouseInfo(x);
                O(_, x);
              }
            }),
            Y(b, "handleTouchMove", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                b.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
            }),
            Y(b, "handleTouchStart", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                b.handleMouseDown(x.changedTouches[0]);
            }),
            Y(b, "handleTouchEnd", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                b.handleMouseUp(x.changedTouches[0]);
            }),
            Y(b, "triggerSyncEvent", function (x) {
              b.props.syncId !== void 0 &&
                If.emit(Df, b.props.syncId, x, b.eventEmitterSymbol);
            }),
            Y(b, "applySyncEvent", function (x) {
              var O = b.props,
                _ = O.layout,
                P = O.syncMethod,
                $ = b.state.updateId,
                E = x.dataStartIndex,
                j = x.dataEndIndex;
              if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
                b.setState(
                  C(
                    {
                      dataStartIndex: E,
                      dataEndIndex: j,
                    },
                    d(
                      {
                        props: b.props,
                        dataStartIndex: E,
                        dataEndIndex: j,
                        updateId: $,
                      },
                      b.state,
                    ),
                  ),
                );
              else if (x.activeTooltipIndex !== void 0) {
                var k = x.chartX,
                  I = x.chartY,
                  M = x.activeTooltipIndex,
                  D = b.state,
                  L = D.offset,
                  T = D.tooltipTicks;
                if (!L) return;
                if (typeof P == "function") M = P(T, x);
                else if (P === "value") {
                  M = -1;
                  for (var N = 0; N < T.length; N++)
                    if (T[N].value === x.activeLabel) {
                      M = N;
                      break;
                    }
                }
                var B = C(
                    C({}, L),
                    {},
                    {
                      x: L.left,
                      y: L.top,
                    },
                  ),
                  H = Math.min(k, B.x + B.width),
                  U = Math.min(I, B.y + B.height),
                  q = T[M] && T[M].value,
                  ie = Zd(b.state, b.props.data, M),
                  we = T[M]
                    ? {
                        x: _ === "horizontal" ? T[M].coordinate : H,
                        y: _ === "horizontal" ? U : T[M].coordinate,
                      }
                    : I_;
                b.setState(
                  C(
                    C({}, x),
                    {},
                    {
                      activeLabel: q,
                      activeCoordinate: we,
                      activePayload: ie,
                      activeTooltipIndex: M,
                    },
                  ),
                );
              } else b.setState(x);
            }),
            Y(b, "renderCursor", function (x) {
              var O,
                _ = b.state,
                P = _.isTooltipActive,
                $ = _.activeCoordinate,
                E = _.activePayload,
                j = _.offset,
                k = _.activeTooltipIndex,
                I = _.tooltipAxisBandSize,
                M = b.getTooltipEventType(),
                D = (O = x.props.active) !== null && O !== void 0 ? O : P,
                L = b.props.layout,
                T = x.key || "_recharts-cursor";
              return A.createElement(RV, {
                key: T,
                activeCoordinate: $,
                activePayload: E,
                activeTooltipIndex: k,
                chartName: r,
                element: x,
                isActive: D,
                layout: L,
                offset: j,
                tooltipAxisBandSize: I,
                tooltipEventType: M,
              });
            }),
            Y(b, "renderPolarAxis", function (x, O, _) {
              var P = Rt(x, "type.axisType"),
                $ = Rt(b.state, "".concat(P, "Map")),
                E = x.type.defaultProps,
                j = E !== void 0 ? C(C({}, E), x.props) : x.props,
                k = $ && $[j["".concat(P, "Id")]];
              return F.cloneElement(
                x,
                C(
                  C({}, k),
                  {},
                  {
                    className: ue(P, k.className),
                    key: x.key || "".concat(O, "-").concat(_),
                    ticks: Cn(k, !0),
                  },
                ),
              );
            }),
            Y(b, "renderPolarGrid", function (x) {
              var O = x.props,
                _ = O.radialLines,
                P = O.polarAngles,
                $ = O.polarRadius,
                E = b.state,
                j = E.radiusAxisMap,
                k = E.angleAxisMap,
                I = ti(j),
                M = ti(k),
                D = M.cx,
                L = M.cy,
                T = M.innerRadius,
                N = M.outerRadius;
              return F.cloneElement(x, {
                polarAngles: Array.isArray(P)
                  ? P
                  : Cn(M, !0).map(function (B) {
                      return B.coordinate;
                    }),
                polarRadius: Array.isArray($)
                  ? $
                  : Cn(I, !0).map(function (B) {
                      return B.coordinate;
                    }),
                cx: D,
                cy: L,
                innerRadius: T,
                outerRadius: N,
                key: x.key || "polar-grid",
                radialLines: _,
              });
            }),
            Y(b, "renderLegend", function () {
              var x = b.state.formattedGraphicalItems,
                O = b.props,
                _ = O.children,
                P = O.width,
                $ = O.height,
                E = b.props.margin || {},
                j = P - (E.left || 0) - (E.right || 0),
                k = _O({
                  children: _,
                  formattedGraphicalItems: x,
                  legendWidth: j,
                  legendContent: s,
                });
              if (!k) return null;
              var I = k.item,
                M = H1(k, BV);
              return F.cloneElement(
                I,
                C(
                  C({}, M),
                  {},
                  {
                    chartWidth: P,
                    chartHeight: $,
                    margin: E,
                    onBBoxUpdate: b.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            Y(b, "renderTooltip", function () {
              var x,
                O = b.props,
                _ = O.children,
                P = O.accessibilityLayer,
                $ = wt(_, ar);
              if (!$) return null;
              var E = b.state,
                j = E.isTooltipActive,
                k = E.activeCoordinate,
                I = E.activePayload,
                M = E.activeLabel,
                D = E.offset,
                L = (x = $.props.active) !== null && x !== void 0 ? x : j;
              return F.cloneElement($, {
                viewBox: C(
                  C({}, D),
                  {},
                  {
                    x: D.left,
                    y: D.top,
                  },
                ),
                active: L,
                label: M,
                payload: L ? I : [],
                coordinate: k,
                accessibilityLayer: P,
              });
            }),
            Y(b, "renderBrush", function (x) {
              var O = b.props,
                _ = O.margin,
                P = O.data,
                $ = b.state,
                E = $.offset,
                j = $.dataStartIndex,
                k = $.dataEndIndex,
                I = $.updateId;
              return F.cloneElement(x, {
                key: x.key || "_recharts-brush",
                onChange: Wu(b.handleBrushChange, x.props.onChange),
                data: P,
                x: W(x.props.x) ? x.props.x : E.left,
                y: W(x.props.y)
                  ? x.props.y
                  : E.top + E.height + E.brushBottom - (_.bottom || 0),
                width: W(x.props.width) ? x.props.width : E.width,
                startIndex: j,
                endIndex: k,
                updateId: "brush-".concat(I),
              });
            }),
            Y(b, "renderReferenceElement", function (x, O, _) {
              if (!x) return null;
              var P = b,
                $ = P.clipPathId,
                E = b.state,
                j = E.xAxisMap,
                k = E.yAxisMap,
                I = E.offset,
                M = x.type.defaultProps || {},
                D = x.props,
                L = D.xAxisId,
                T = L === void 0 ? M.xAxisId : L,
                N = D.yAxisId,
                B = N === void 0 ? M.yAxisId : N;
              return F.cloneElement(x, {
                key: x.key || "".concat(O, "-").concat(_),
                xAxis: j[T],
                yAxis: k[B],
                viewBox: {
                  x: I.left,
                  y: I.top,
                  width: I.width,
                  height: I.height,
                },
                clipPathId: $,
              });
            }),
            Y(b, "renderActivePoints", function (x) {
              var O = x.item,
                _ = x.activePoint,
                P = x.basePoint,
                $ = x.childIndex,
                E = x.isRange,
                j = [],
                k = O.props.key,
                I =
                  O.item.type.defaultProps !== void 0
                    ? C(C({}, O.item.type.defaultProps), O.item.props)
                    : O.item.props,
                M = I.activeDot,
                D = I.dataKey,
                L = C(
                  C(
                    {
                      index: $,
                      dataKey: D,
                      cx: _.x,
                      cy: _.y,
                      r: 4,
                      fill: Wv(O.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: _.payload,
                      value: _.value,
                    },
                    re(M, !1),
                  ),
                  kl(M),
                );
              return (
                j.push(
                  v.renderActiveDot(
                    M,
                    L,
                    "".concat(k, "-activePoint-").concat($),
                  ),
                ),
                P
                  ? j.push(
                      v.renderActiveDot(
                        M,
                        C(
                          C({}, L),
                          {},
                          {
                            cx: P.x,
                            cy: P.y,
                          },
                        ),
                        "".concat(k, "-basePoint-").concat($),
                      ),
                    )
                  : E && j.push(null),
                j
              );
            }),
            Y(b, "renderGraphicChild", function (x, O, _) {
              var P = b.filterFormatItem(x, O, _);
              if (!P) return null;
              var $ = b.getTooltipEventType(),
                E = b.state,
                j = E.isTooltipActive,
                k = E.tooltipAxis,
                I = E.activeTooltipIndex,
                M = E.activeLabel,
                D = b.props.children,
                L = wt(D, ar),
                T = P.props,
                N = T.points,
                B = T.isRange,
                H = T.baseLine,
                U =
                  P.item.type.defaultProps !== void 0
                    ? C(C({}, P.item.type.defaultProps), P.item.props)
                    : P.item.props,
                q = U.activeDot,
                ie = U.hide,
                we = U.activeBar,
                je = U.activeShape,
                $t = !!(!ie && j && L && (q || we || je)),
                st = {};
              $ !== "axis" && L && L.props.trigger === "click"
                ? (st = {
                    onClick: Wu(b.handleItemMouseEnter, x.props.onClick),
                  })
                : $ !== "axis" &&
                  (st = {
                    onMouseLeave: Wu(
                      b.handleItemMouseLeave,
                      x.props.onMouseLeave,
                    ),
                    onMouseEnter: Wu(
                      b.handleItemMouseEnter,
                      x.props.onMouseEnter,
                    ),
                  });
              var V = F.cloneElement(x, C(C({}, P.props), st));

              function Q(gn) {
                return typeof k.dataKey == "function"
                  ? k.dataKey(gn.payload)
                  : null;
              }
              if ($t)
                if (I >= 0) {
                  var J, R;
                  if (k.dataKey && !k.allowDuplicatedCategory) {
                    var Ee =
                      typeof k.dataKey == "function"
                        ? Q
                        : "payload.".concat(k.dataKey.toString());
                    (J = Cl(N, Ee, M)), (R = B && H && Cl(H, Ee, M));
                  } else (J = N == null ? void 0 : N[I]), (R = B && H && H[I]);
                  if (je || we) {
                    var ae =
                      x.props.activeIndex !== void 0 ? x.props.activeIndex : I;
                    return [
                      F.cloneElement(
                        x,
                        C(
                          C(C({}, P.props), st),
                          {},
                          {
                            activeIndex: ae,
                          },
                        ),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!ne(J))
                    return [V].concat(
                      ta(
                        b.renderActivePoints({
                          item: P,
                          activePoint: J,
                          basePoint: R,
                          childIndex: I,
                          isRange: B,
                        }),
                      ),
                    );
                } else {
                  var Ie,
                    De =
                      (Ie = b.getItemByXY(b.state.activeCoordinate)) !== null &&
                      Ie !== void 0
                        ? Ie
                        : {
                            graphicalItem: V,
                          },
                    ct = De.graphicalItem,
                    Rr = ct.item,
                    Qn = Rr === void 0 ? x : Rr,
                    yu = ct.childIndex,
                    mn = C(
                      C(C({}, P.props), st),
                      {},
                      {
                        activeIndex: yu,
                      },
                    );
                  return [F.cloneElement(Qn, mn), null, null];
                }
              return B ? [V, null, null] : [V, null];
            }),
            Y(b, "renderCustomized", function (x, O, _) {
              return F.cloneElement(
                x,
                C(
                  C(
                    {
                      key: "recharts-customized-".concat(_),
                    },
                    b.props,
                  ),
                  b.state,
                ),
              );
            }),
            Y(b, "renderMap", {
              CartesianGrid: {
                handler: qu,
                once: !0,
              },
              ReferenceArea: {
                handler: b.renderReferenceElement,
              },
              ReferenceLine: {
                handler: qu,
              },
              ReferenceDot: {
                handler: b.renderReferenceElement,
              },
              XAxis: {
                handler: qu,
              },
              YAxis: {
                handler: qu,
              },
              Brush: {
                handler: b.renderBrush,
                once: !0,
              },
              Bar: {
                handler: b.renderGraphicChild,
              },
              Line: {
                handler: b.renderGraphicChild,
              },
              Area: {
                handler: b.renderGraphicChild,
              },
              Radar: {
                handler: b.renderGraphicChild,
              },
              RadialBar: {
                handler: b.renderGraphicChild,
              },
              Scatter: {
                handler: b.renderGraphicChild,
              },
              Pie: {
                handler: b.renderGraphicChild,
              },
              Funnel: {
                handler: b.renderGraphicChild,
              },
              Tooltip: {
                handler: b.renderCursor,
                once: !0,
              },
              PolarGrid: {
                handler: b.renderPolarGrid,
                once: !0,
              },
              PolarAngleAxis: {
                handler: b.renderPolarAxis,
              },
              PolarRadiusAxis: {
                handler: b.renderPolarAxis,
              },
              Customized: {
                handler: b.renderCustomized,
              },
            }),
            (b.clipPathId = "".concat(
              (m = h.id) !== null && m !== void 0 ? m : cu("recharts"),
              "-clip",
            )),
            (b.throttleTriggeredAfterMouseMove = OS(
              b.triggeredAfterMouseMove,
              (S = h.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60,
            )),
            (b.state = {}),
            b
          );
        }
        return (
          QV(v, w),
          GV(v, [
            {
              key: "componentDidMount",
              value: function () {
                var m, S;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (m = this.props.margin.left) !== null && m !== void 0
                          ? m
                          : 0,
                      top:
                        (S = this.props.margin.top) !== null && S !== void 0
                          ? S
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var m = this.props,
                  S = m.children,
                  b = m.data,
                  x = m.height,
                  O = m.layout,
                  _ = wt(S, ar);
                if (_) {
                  var P = _.props.defaultIndex;
                  if (
                    !(
                      typeof P != "number" ||
                      P < 0 ||
                      P > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var $ =
                        this.state.tooltipTicks[P] &&
                        this.state.tooltipTicks[P].value,
                      E = Zd(this.state, b, P, $),
                      j = this.state.tooltipTicks[P].coordinate,
                      k = (this.state.offset.top + x) / 2,
                      I = O === "horizontal",
                      M = I
                        ? {
                            x: j,
                            y: k,
                          }
                        : {
                            y: j,
                            x: k,
                          },
                      D = this.state.formattedGraphicalItems.find(function (T) {
                        var N = T.item;
                        return N.type.name === "Scatter";
                      });
                    D &&
                      ((M = C(C({}, M), D.props.points[P].tooltipPosition)),
                      (E = D.props.points[P].tooltipPayload));
                    var L = {
                      activeTooltipIndex: P,
                      isTooltipActive: !0,
                      activeLabel: $,
                      activePayload: E,
                      activeCoordinate: M,
                    };
                    this.setState(L),
                      this.renderCursor(_),
                      this.accessibilityManager.setIndex(P);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (m, S) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== S.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== m.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== m.margin)
                ) {
                  var b, x;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (b = this.props.margin.left) !== null && b !== void 0
                          ? b
                          : 0,
                      top:
                        (x = this.props.margin.top) !== null && x !== void 0
                          ? x
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (m) {
                kp([wt(m.children, ar)], [wt(this.props.children, ar)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var m = wt(this.props.children, ar);
                if (m && typeof m.props.shared == "boolean") {
                  var S = m.props.shared ? "axis" : "item";
                  return u.indexOf(S) >= 0 ? S : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (m) {
                if (!this.container) return null;
                var S = this.container,
                  b = S.getBoundingClientRect(),
                  x = DB(b),
                  O = {
                    chartX: Math.round(m.pageX - x.left),
                    chartY: Math.round(m.pageY - x.top),
                  },
                  _ = b.width / S.offsetWidth || 1,
                  P = this.inRange(O.chartX, O.chartY, _);
                if (!P) return null;
                var $ = this.state,
                  E = $.xAxisMap,
                  j = $.yAxisMap,
                  k = this.getTooltipEventType();
                if (k !== "axis" && E && j) {
                  var I = ti(E).scale,
                    M = ti(j).scale,
                    D = I && I.invert ? I.invert(O.chartX) : null,
                    L = M && M.invert ? M.invert(O.chartY) : null;
                  return C(
                    C({}, O),
                    {},
                    {
                      xValue: D,
                      yValue: L,
                    },
                  );
                }
                var T = K1(this.state, this.props.data, this.props.layout, P);
                return T ? C(C({}, O), T) : null;
              },
            },
            {
              key: "inRange",
              value: function (m, S) {
                var b =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  x = this.props.layout,
                  O = m / b,
                  _ = S / b;
                if (x === "horizontal" || x === "vertical") {
                  var P = this.state.offset,
                    $ =
                      O >= P.left &&
                      O <= P.left + P.width &&
                      _ >= P.top &&
                      _ <= P.top + P.height;
                  return $
                    ? {
                        x: O,
                        y: _,
                      }
                    : null;
                }
                var E = this.state,
                  j = E.angleAxisMap,
                  k = E.radiusAxisMap;
                if (j && k) {
                  var I = ti(j);
                  return j0(
                    {
                      x: O,
                      y: _,
                    },
                    I,
                  );
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var m = this.props.children,
                  S = this.getTooltipEventType(),
                  b = wt(m, ar),
                  x = {};
                b &&
                  S === "axis" &&
                  (b.props.trigger === "click"
                    ? (x = {
                        onClick: this.handleClick,
                      })
                    : (x = {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                      }));
                var O = kl(this.props, this.handleOuterEvent);
                return C(C({}, O), x);
              },
            },
            {
              key: "addListener",
              value: function () {
                If.on(Df, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                If.removeListener(Df, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (m, S, b) {
                for (
                  var x = this.state.formattedGraphicalItems,
                    O = 0,
                    _ = x.length;
                  O < _;
                  O++
                ) {
                  var P = x[O];
                  if (
                    P.item === m ||
                    P.props.key === m.key ||
                    (S === Or(P.item.type) && b === P.childIndex)
                  )
                    return P;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var m = this.clipPathId,
                  S = this.state.offset,
                  b = S.left,
                  x = S.top,
                  O = S.height,
                  _ = S.width;
                return A.createElement(
                  "defs",
                  null,
                  A.createElement(
                    "clipPath",
                    {
                      id: m,
                    },
                    A.createElement("rect", {
                      x: b,
                      y: x,
                      height: O,
                      width: _,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var m = this.state.xAxisMap;
                return m
                  ? Object.entries(m).reduce(function (S, b) {
                      var x = W1(b, 2),
                        O = x[0],
                        _ = x[1];
                      return C(C({}, S), {}, Y({}, O, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var m = this.state.yAxisMap;
                return m
                  ? Object.entries(m).reduce(function (S, b) {
                      var x = W1(b, 2),
                        O = x[0],
                        _ = x[1];
                      return C(C({}, S), {}, Y({}, O, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (m) {
                var S;
                return (S = this.state.xAxisMap) === null ||
                  S === void 0 ||
                  (S = S[m]) === null ||
                  S === void 0
                  ? void 0
                  : S.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (m) {
                var S;
                return (S = this.state.yAxisMap) === null ||
                  S === void 0 ||
                  (S = S[m]) === null ||
                  S === void 0
                  ? void 0
                  : S.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (m) {
                var S = this.state,
                  b = S.formattedGraphicalItems,
                  x = S.activeItem;
                if (b && b.length)
                  for (var O = 0, _ = b.length; O < _; O++) {
                    var P = b[O],
                      $ = P.props,
                      E = P.item,
                      j =
                        E.type.defaultProps !== void 0
                          ? C(C({}, E.type.defaultProps), E.props)
                          : E.props,
                      k = Or(E.type);
                    if (k === "Bar") {
                      var I = ($.data || []).find(function (T) {
                        return lW(m, T);
                      });
                      if (I)
                        return {
                          graphicalItem: P,
                          payload: I,
                        };
                    } else if (k === "RadialBar") {
                      var M = ($.data || []).find(function (T) {
                        return j0(m, T);
                      });
                      if (M)
                        return {
                          graphicalItem: P,
                          payload: M,
                        };
                    } else if (Pc(P, x) || Ac(P, x) || Yo(P, x)) {
                      var D = f9({
                          graphicalItem: P,
                          activeTooltipItem: x,
                          itemData: j.data,
                        }),
                        L = j.activeIndex === void 0 ? D : j.activeIndex;
                      return {
                        graphicalItem: C(
                          C({}, P),
                          {},
                          {
                            childIndex: L,
                          },
                        ),
                        payload: Yo(P, x) ? j.data[D] : P.props.data[D],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var m = this;
                if (!wm(this)) return null;
                var S = this.props,
                  b = S.children,
                  x = S.className,
                  O = S.width,
                  _ = S.height,
                  P = S.style,
                  $ = S.compact,
                  E = S.title,
                  j = S.desc,
                  k = H1(S, zV),
                  I = re(k, !1);
                if ($)
                  return A.createElement(
                    $1,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    A.createElement(
                      Np,
                      yi({}, I, {
                        width: O,
                        height: _,
                        title: E,
                        desc: j,
                      }),
                      this.renderClipPath(),
                      Sm(b, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var M, D;
                  (I.tabIndex =
                    (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0),
                    (I.role =
                      (D = this.props.role) !== null && D !== void 0
                        ? D
                        : "application"),
                    (I.onKeyDown = function (T) {
                      m.accessibilityManager.keyboardEvent(T);
                    }),
                    (I.onFocus = function () {
                      m.accessibilityManager.focus();
                    });
                }
                var L = this.parseEventsOfWrapper();
                return A.createElement(
                  $1,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  A.createElement(
                    "div",
                    yi(
                      {
                        className: ue("recharts-wrapper", x),
                        style: C(
                          {
                            position: "relative",
                            cursor: "default",
                            width: O,
                            height: _,
                          },
                          P,
                        ),
                      },
                      L,
                      {
                        ref: function (N) {
                          m.container = N;
                        },
                      },
                    ),
                    A.createElement(
                      Np,
                      yi({}, I, {
                        width: O,
                        height: _,
                        title: E,
                        desc: j,
                        style: nK,
                      }),
                      this.renderClipPath(),
                      Sm(b, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(F.Component);
    Y(y, "displayName", r),
      Y(
        y,
        "defaultProps",
        C(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: {
              top: 5,
              right: 5,
              bottom: 5,
              left: 5,
            },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          c,
        ),
      ),
      Y(y, "getDerivedStateFromProps", function (w, v) {
        var h = w.dataKey,
          m = w.data,
          S = w.children,
          b = w.width,
          x = w.height,
          O = w.layout,
          _ = w.stackOffset,
          P = w.margin,
          $ = v.dataStartIndex,
          E = v.dataEndIndex;
        if (v.updateId === void 0) {
          var j = G1(w);
          return C(
            C(
              C({}, j),
              {},
              {
                updateId: 0,
              },
              d(
                C(
                  C(
                    {
                      props: w,
                    },
                    j,
                  ),
                  {},
                  {
                    updateId: 0,
                  },
                ),
                v,
              ),
            ),
            {},
            {
              prevDataKey: h,
              prevData: m,
              prevWidth: b,
              prevHeight: x,
              prevLayout: O,
              prevStackOffset: _,
              prevMargin: P,
              prevChildren: S,
            },
          );
        }
        if (
          h !== v.prevDataKey ||
          m !== v.prevData ||
          b !== v.prevWidth ||
          x !== v.prevHeight ||
          O !== v.prevLayout ||
          _ !== v.prevStackOffset ||
          !Oi(P, v.prevMargin)
        ) {
          var k = G1(w),
            I = {
              chartX: v.chartX,
              chartY: v.chartY,
              isTooltipActive: v.isTooltipActive,
            },
            M = C(
              C({}, K1(v, m, O)),
              {},
              {
                updateId: v.updateId + 1,
              },
            ),
            D = C(C(C({}, k), I), M);
          return C(
            C(
              C({}, D),
              d(
                C(
                  {
                    props: w,
                  },
                  D,
                ),
                v,
              ),
            ),
            {},
            {
              prevDataKey: h,
              prevData: m,
              prevWidth: b,
              prevHeight: x,
              prevLayout: O,
              prevStackOffset: _,
              prevMargin: P,
              prevChildren: S,
            },
          );
        }
        if (!kp(S, v.prevChildren)) {
          var L,
            T,
            N,
            B,
            H = wt(S, Vi),
            U =
              H &&
              (L =
                (T = H.props) === null || T === void 0
                  ? void 0
                  : T.startIndex) !== null &&
              L !== void 0
                ? L
                : $,
            q =
              H &&
              (N =
                (B = H.props) === null || B === void 0
                  ? void 0
                  : B.endIndex) !== null &&
              N !== void 0
                ? N
                : E,
            ie = U !== $ || q !== E,
            we = !ne(m),
            je = we && !ie ? v.updateId : v.updateId + 1;
          return C(
            C(
              {
                updateId: je,
              },
              d(
                C(
                  C(
                    {
                      props: w,
                    },
                    v,
                  ),
                  {},
                  {
                    updateId: je,
                    dataStartIndex: U,
                    dataEndIndex: q,
                  },
                ),
                v,
              ),
            ),
            {},
            {
              prevChildren: S,
              dataStartIndex: U,
              dataEndIndex: q,
            },
          );
        }
        return null;
      }),
      Y(y, "renderActiveDot", function (w, v, h) {
        var m;
        return (
          F.isValidElement(w)
            ? (m = F.cloneElement(w, v))
            : te(w)
              ? (m = w(v))
              : (m = A.createElement(Vv, v)),
          A.createElement(
            _e,
            {
              className: "recharts-active-dot",
              key: h,
            },
            m,
          )
        );
      });
    var g = F.forwardRef(function (v, h) {
      return A.createElement(
        y,
        yi({}, v, {
          ref: h,
        }),
      );
    });
    return (g.displayName = y.displayName), g;
  },
  hK = dK({
    chartName: "AreaChart",
    GraphicalChild: yn,
    axisComponents: [
      {
        axisType: "xAxis",
        AxisComp: Mc,
      },
      {
        axisType: "yAxis",
        AxisComp: Nc,
      },
    ],
    formatAxisMap: RH,
  });

function vK({ data: e, color: t }) {
  return X.jsx("div", {
    className: "h-[400px] w-full",
    children: X.jsx(TB, {
      width: "100%",
      height: "100%",
      children: X.jsxs(hK, {
        data: e,
        children: [
          X.jsx("defs", {
            children: X.jsxs("linearGradient", {
              id: "colorPrice",
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                X.jsx("stop", {
                  offset: "5%",
                  stopColor: t,
                  stopOpacity: 0.3,
                }),
                X.jsx("stop", {
                  offset: "95%",
                  stopColor: t,
                  stopOpacity: 0,
                }),
              ],
            }),
          }),
          X.jsx(Mc, {
            dataKey: "timestamp",
            tickFormatter: (r) => new Date(r).toLocaleDateString(),
            stroke: "#94a3b8",
          }),
          X.jsx(Nc, {
            tickFormatter: (r) => wo(r),
            stroke: "#94a3b8",
          }),
          X.jsx(ar, {
            content: ({ active: r, payload: n }) =>
              r && n && n.length
                ? X.jsxs("div", {
                    className: "bg-white p-4 rounded-lg shadow-lg border",
                    children: [
                      X.jsx("p", {
                        className: "font-medium",
                        children: new Date(
                          n[0].payload.timestamp,
                        ).toLocaleDateString(),
                      }),
                      X.jsx("p", {
                        className: "text-lg font-semibold text-indigo-600",
                        children: wo(n[0].value),
                      }),
                    ],
                  })
                : null,
          }),
          X.jsx(yn, {
            type: "monotone",
            dataKey: "price",
            stroke: t,
            fillOpacity: 1,
            fill: "url(#colorPrice)",
          }),
        ],
      }),
    }),
  });
}

function yK() {
  const [e, t] = F.useState([]),
    [r, n] = F.useState(null),
    [i, a] = F.useState(""),
    [o, u] = F.useState([]);
  F.useEffect(() => {
    const s = async () => {
      try {
        const p = await (
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true",
          )
        ).json();
        t(p), !r && p.length > 0 && n(p[0]);
      } catch (c) {
        console.error("Error fetching coins:", c);
      }
    };
    s();
    const f = setInterval(s, 6e4);
    return () => clearInterval(f);
  }, []),
    F.useEffect(() => {
      if (r) {
        const s = r.sparkline_in_7d.price,
          f = s.map((p, d) => {
            const y = new Date();
            return y.setHours(y.getHours() - (168 - d)), y.getTime();
          }),
          c = s.map((p, d) => ({
            timestamp: f[d],
            price: p,
          }));
        u(c);
      }
    }, [r]);
  const l = e.filter(
    (s) =>
      s.name.toLowerCase().includes(i.toLowerCase()) ||
      s.symbol.toLowerCase().includes(i.toLowerCase()),
  );
  return X.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      X.jsx("nav", {
        className: "bg-white border-b",
        children: X.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: X.jsx("div", {
            className: "flex items-center justify-between h-16",
            children: X.jsxs("div", {
              className: "flex items-center",
              children: [
                X.jsx(fE, {
                  className: "h-8 w-8 text-indigo-600",
                }),
                X.jsx("span", {
                  className: "ml-2 text-xl font-bold text-gray-900",
                  children: "Crypto Price Tracker",
                }),
              ],
            }),
          }),
        }),
      }),
      X.jsx("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: X.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
          children: [
            X.jsx("div", {
              className: "lg:col-span-2",
              children:
                r &&
                X.jsxs("div", {
                  className: "bg-white rounded-xl p-6 shadow-sm",
                  children: [
                    X.jsxs("div", {
                      className: "flex items-center gap-4 mb-6",
                      children: [
                        X.jsx("img", {
                          src: r.image,
                          alt: r.name,
                          className: "w-12 h-12",
                        }),
                        X.jsxs("div", {
                          children: [
                            X.jsx("h2", {
                              className: "text-2xl font-bold",
                              children: r.name,
                            }),
                            X.jsx("p", {
                              className: "text-gray-500 uppercase",
                              children: r.symbol,
                            }),
                          ],
                        }),
                        X.jsxs("div", {
                          className: "ml-auto text-right",
                          children: [
                            X.jsx("p", {
                              className: "text-2xl font-bold",
                              children: wo(r.current_price),
                            }),
                            X.jsxs("p", {
                              className: "text-gray-500",
                              children: ["Market Cap: ", yE(r.market_cap)],
                            }),
                          ],
                        }),
                      ],
                    }),
                    X.jsx(vK, {
                      data: o,
                      color: "#4f46e5",
                    }),
                  ],
                }),
            }),
            X.jsxs("div", {
              className: "space-y-4",
              children: [
                X.jsxs("div", {
                  className: "relative",
                  children: [
                    X.jsx(pE, {
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                    }),
                    X.jsx("input", {
                      type: "text",
                      placeholder: "Search cryptocurrencies...",
                      value: i,
                      onChange: (s) => a(s.target.value),
                      className:
                        "w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                    }),
                  ],
                }),
                X.jsx("div", {
                  className:
                    "bg-gray-100 rounded-xl p-4 space-y-2 max-h-[600px] overflow-y-auto",
                  children: l.map((s) =>
                    X.jsx(
                      mE,
                      {
                        coin: s,
                        onClick: () => n(s),
                        isSelected: (r == null ? void 0 : r.id) === s.id,
                      },
                      s.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
ux(document.getElementById("root")).render(
  X.jsx(F.StrictMode, {
    children: X.jsx(yK, {}),
  }),
);
