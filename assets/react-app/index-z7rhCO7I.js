function Im(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var yp, vp, gp = { exports: {} }, Nl = {}, bp, wp, pt = (vp || (vp = 1, gp.exports = function() {
  if (yp) return Nl;
  yp = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function f(s, y, v) {
    var E = null;
    if (v !== void 0 && (E = "" + v), y.key !== void 0 && (E = "" + y.key), "key" in y) for (var b in v = {}, y) b !== "key" && (v[b] = y[b]);
    else v = y;
    return y = v.ref, { $$typeof: o, type: s, key: E, ref: y !== void 0 ? y : null, props: v };
  }
  return Nl.Fragment = c, Nl.jsx = f, Nl.jsxs = f, Nl;
}()), gp.exports), kp = { exports: {} }, Ee = {};
function Hm() {
  if (bp) return Ee;
  bp = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), E = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), C = Symbol.iterator, O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, U = {};
  function te(m, T, I) {
    this.props = m, this.context = T, this.refs = U, this.updater = I || O;
  }
  function Q() {
  }
  function Y(m, T, I) {
    this.props = m, this.context = T, this.refs = U, this.updater = I || O;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(m, T) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, T, "setState");
  }, te.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  }, Q.prototype = te.prototype;
  var F = Y.prototype = new Q();
  F.constructor = Y, q(F, te.prototype), F.isPureReactComponent = !0;
  var j = Array.isArray, B = { H: null, A: null, T: null, S: null, V: null }, re = Object.prototype.hasOwnProperty;
  function H(m, T, I, W, J, ne) {
    return I = ne.ref, { $$typeof: o, type: m, key: T, ref: I !== void 0 ? I : null, props: ne };
  }
  function V(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  var x = /\/+/g;
  function ue(m, T) {
    return typeof m == "object" && m !== null && m.key != null ? (I = "" + m.key, W = { "=": "=0", ":": "=2" }, "$" + I.replace(/[=:]/g, function(J) {
      return W[J];
    })) : T.toString(36);
    var I, W;
  }
  function we() {
  }
  function fe(m, T, I, W, J) {
    var ne = typeof m;
    ne !== "undefined" && ne !== "boolean" || (m = null);
    var le, be, ve = !1;
    if (m === null) ve = !0;
    else switch (ne) {
      case "bigint":
      case "string":
      case "number":
        ve = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case o:
          case c:
            ve = !0;
            break;
          case P:
            return fe((ve = m._init)(m._payload), T, I, W, J);
        }
    }
    if (ve) return J = J(m), ve = W === "" ? "." + ue(m, 0) : W, j(J) ? (I = "", ve != null && (I = ve.replace(x, "$&/") + "/"), fe(J, T, I, "", function(De) {
      return De;
    })) : J != null && (V(J) && (le = J, be = I + (J.key == null || m && m.key === J.key ? "" : ("" + J.key).replace(x, "$&/") + "/") + ve, J = H(le.type, be, void 0, 0, 0, le.props)), T.push(J)), 1;
    ve = 0;
    var Ve, Ot = W === "" ? "." : W + ":";
    if (j(m)) for (var We = 0; We < m.length; We++) ve += fe(W = m[We], T, I, ne = Ot + ue(W, We), J);
    else if (typeof (We = (Ve = m) === null || typeof Ve != "object" ? null : typeof (Ve = C && Ve[C] || Ve["@@iterator"]) == "function" ? Ve : null) == "function") for (m = We.call(m), We = 0; !(W = m.next()).done; ) ve += fe(W = W.value, T, I, ne = Ot + ue(W, We++), J);
    else if (ne === "object") {
      if (typeof m.then == "function") return fe(function(De) {
        switch (De.status) {
          case "fulfilled":
            return De.value;
          case "rejected":
            throw De.reason;
          default:
            switch (typeof De.status == "string" ? De.then(we, we) : (De.status = "pending", De.then(function(Mt) {
              De.status === "pending" && (De.status = "fulfilled", De.value = Mt);
            }, function(Mt) {
              De.status === "pending" && (De.status = "rejected", De.reason = Mt);
            })), De.status) {
              case "fulfilled":
                return De.value;
              case "rejected":
                throw De.reason;
            }
        }
        throw De;
      }(m), T, I, W, J);
      throw T = String(m), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ve;
  }
  function he(m, T, I) {
    if (m == null) return m;
    var W = [], J = 0;
    return fe(m, W, "", "", function(ne) {
      return T.call(I, ne, J++);
    }), W;
  }
  function je(m) {
    if (m._status === -1) {
      var T = m._result;
      (T = T()).then(function(I) {
        m._status !== 0 && m._status !== -1 || (m._status = 1, m._result = I);
      }, function(I) {
        m._status !== 0 && m._status !== -1 || (m._status = 2, m._result = I);
      }), m._status === -1 && (m._status = 0, m._result = T);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var me = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m), error: m });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") return void process.emit("uncaughtException", m);
    console.error(m);
  };
  function K() {
  }
  return Ee.Children = { map: he, forEach: function(m, T, I) {
    he(m, function() {
      T.apply(this, arguments);
    }, I);
  }, count: function(m) {
    var T = 0;
    return he(m, function() {
      T++;
    }), T;
  }, toArray: function(m) {
    return he(m, function(T) {
      return T;
    }) || [];
  }, only: function(m) {
    if (!V(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, Ee.Component = te, Ee.Fragment = f, Ee.Profiler = y, Ee.PureComponent = Y, Ee.StrictMode = s, Ee.Suspense = p, Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, Ee.__COMPILER_RUNTIME = { __proto__: null, c: function(m) {
    return B.H.useMemoCache(m);
  } }, Ee.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, Ee.cloneElement = function(m, T, I) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var W = q({}, m.props), J = m.key;
    if (T != null) for (ne in T.ref, T.key !== void 0 && (J = "" + T.key), T) !re.call(T, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && T.ref === void 0 || (W[ne] = T[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) W.children = I;
    else if (1 < ne) {
      for (var le = Array(ne), be = 0; be < ne; be++) le[be] = arguments[be + 2];
      W.children = le;
    }
    return H(m.type, J, void 0, 0, 0, W);
  }, Ee.createContext = function(m) {
    return (m = { $$typeof: E, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null }).Provider = m, m.Consumer = { $$typeof: v, _context: m }, m;
  }, Ee.createElement = function(m, T, I) {
    var W, J = {}, ne = null;
    if (T != null) for (W in T.key !== void 0 && (ne = "" + T.key), T) re.call(T, W) && W !== "key" && W !== "__self" && W !== "__source" && (J[W] = T[W]);
    var le = arguments.length - 2;
    if (le === 1) J.children = I;
    else if (1 < le) {
      for (var be = Array(le), ve = 0; ve < le; ve++) be[ve] = arguments[ve + 2];
      J.children = be;
    }
    if (m && m.defaultProps) for (W in le = m.defaultProps) J[W] === void 0 && (J[W] = le[W]);
    return H(m, ne, void 0, 0, 0, J);
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(m) {
    return { $$typeof: b, render: m };
  }, Ee.isValidElement = V, Ee.lazy = function(m) {
    return { $$typeof: P, _payload: { _status: -1, _result: m }, _init: je };
  }, Ee.memo = function(m, T) {
    return { $$typeof: g, type: m, compare: T === void 0 ? null : T };
  }, Ee.startTransition = function(m) {
    var T = B.T, I = {};
    B.T = I;
    try {
      var W = m(), J = B.S;
      J !== null && J(I, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(K, me);
    } catch (ne) {
      me(ne);
    } finally {
      B.T = T;
    }
  }, Ee.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, Ee.use = function(m) {
    return B.H.use(m);
  }, Ee.useActionState = function(m, T, I) {
    return B.H.useActionState(m, T, I);
  }, Ee.useCallback = function(m, T) {
    return B.H.useCallback(m, T);
  }, Ee.useContext = function(m) {
    return B.H.useContext(m);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(m, T) {
    return B.H.useDeferredValue(m, T);
  }, Ee.useEffect = function(m, T, I) {
    var W = B.H;
    if (typeof I == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return W.useEffect(m, T);
  }, Ee.useId = function() {
    return B.H.useId();
  }, Ee.useImperativeHandle = function(m, T, I) {
    return B.H.useImperativeHandle(m, T, I);
  }, Ee.useInsertionEffect = function(m, T) {
    return B.H.useInsertionEffect(m, T);
  }, Ee.useLayoutEffect = function(m, T) {
    return B.H.useLayoutEffect(m, T);
  }, Ee.useMemo = function(m, T) {
    return B.H.useMemo(m, T);
  }, Ee.useOptimistic = function(m, T) {
    return B.H.useOptimistic(m, T);
  }, Ee.useReducer = function(m, T, I) {
    return B.H.useReducer(m, T, I);
  }, Ee.useRef = function(m) {
    return B.H.useRef(m);
  }, Ee.useState = function(m) {
    return B.H.useState(m);
  }, Ee.useSyncExternalStore = function(m, T, I) {
    return B.H.useSyncExternalStore(m, T, I);
  }, Ee.useTransition = function() {
    return B.H.useTransition();
  }, Ee.version = "19.1.0", Ee;
}
function Ls() {
  return wp || (wp = 1, kp.exports = Hm()), kp.exports;
}
var A = Ls();
const uh = Im(A);
var Sp, Ep, xp = { exports: {} }, Dl = {}, Cp = { exports: {} }, Pp = {};
function Bm() {
  return Ep || (Ep = 1, Cp.exports = (Sp || (Sp = 1, function(o) {
    function c(m, T) {
      var I = m.length;
      m.push(T);
      e: for (; 0 < I; ) {
        var W = I - 1 >>> 1, J = m[W];
        if (!(0 < y(J, T))) break e;
        m[W] = T, m[I] = J, I = W;
      }
    }
    function f(m) {
      return m.length === 0 ? null : m[0];
    }
    function s(m) {
      if (m.length === 0) return null;
      var T = m[0], I = m.pop();
      if (I !== T) {
        m[0] = I;
        e: for (var W = 0, J = m.length, ne = J >>> 1; W < ne; ) {
          var le = 2 * (W + 1) - 1, be = m[le], ve = le + 1, Ve = m[ve];
          if (0 > y(be, I)) ve < J && 0 > y(Ve, be) ? (m[W] = Ve, m[ve] = I, W = ve) : (m[W] = be, m[le] = I, W = le);
          else {
            if (!(ve < J && 0 > y(Ve, I))) break e;
            m[W] = Ve, m[ve] = I, W = ve;
          }
        }
      }
      return T;
    }
    function y(m, T) {
      var I = m.sortIndex - T.sortIndex;
      return I !== 0 ? I : m.id - T.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      o.unstable_now = function() {
        return v.now();
      };
    } else {
      var E = Date, b = E.now();
      o.unstable_now = function() {
        return E.now() - b;
      };
    }
    var p = [], g = [], P = 1, C = null, O = 3, q = !1, U = !1, te = !1, Q = !1, Y = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function B(m) {
      for (var T = f(g); T !== null; ) {
        if (T.callback === null) s(g);
        else {
          if (!(T.startTime <= m)) break;
          s(g), T.sortIndex = T.expirationTime, c(p, T);
        }
        T = f(g);
      }
    }
    function re(m) {
      if (te = !1, B(m), !U) if (f(p) !== null) U = !0, V || (V = !0, H());
      else {
        var T = f(g);
        T !== null && K(re, T.startTime - m);
      }
    }
    var H, V = !1, x = -1, ue = 5, we = -1;
    function fe() {
      return !(!Q && o.unstable_now() - we < ue);
    }
    function he() {
      if (Q = !1, V) {
        var m = o.unstable_now();
        we = m;
        var T = !0;
        try {
          e: {
            U = !1, te && (te = !1, F(x), x = -1), q = !0;
            var I = O;
            try {
              t: {
                for (B(m), C = f(p); C !== null && !(C.expirationTime > m && fe()); ) {
                  var W = C.callback;
                  if (typeof W == "function") {
                    C.callback = null, O = C.priorityLevel;
                    var J = W(C.expirationTime <= m);
                    if (m = o.unstable_now(), typeof J == "function") {
                      C.callback = J, B(m), T = !0;
                      break t;
                    }
                    C === f(p) && s(p), B(m);
                  } else s(p);
                  C = f(p);
                }
                if (C !== null) T = !0;
                else {
                  var ne = f(g);
                  ne !== null && K(re, ne.startTime - m), T = !1;
                }
              }
              break e;
            } finally {
              C = null, O = I, q = !1;
            }
            T = void 0;
          }
        } finally {
          T ? H() : V = !1;
        }
      }
    }
    if (typeof j == "function") H = function() {
      j(he);
    };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), me = je.port2;
      je.port1.onmessage = he, H = function() {
        me.postMessage(null);
      };
    } else H = function() {
      Y(he, 0);
    };
    function K(m, T) {
      x = Y(function() {
        m(o.unstable_now());
      }, T);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(m) {
      m.callback = null;
    }, o.unstable_forceFrameRate = function(m) {
      0 > m || 125 < m ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ue = 0 < m ? Math.floor(1e3 / m) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, o.unstable_next = function(m) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = O;
      }
      var I = O;
      O = T;
      try {
        return m();
      } finally {
        O = I;
      }
    }, o.unstable_requestPaint = function() {
      Q = !0;
    }, o.unstable_runWithPriority = function(m, T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          m = 3;
      }
      var I = O;
      O = m;
      try {
        return T();
      } finally {
        O = I;
      }
    }, o.unstable_scheduleCallback = function(m, T, I) {
      var W = o.unstable_now();
      switch (I = typeof I == "object" && I !== null && typeof (I = I.delay) == "number" && 0 < I ? W + I : W, m) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return m = { id: P++, callback: T, priorityLevel: m, startTime: I, expirationTime: J = I + J, sortIndex: -1 }, I > W ? (m.sortIndex = I, c(g, m), f(p) === null && m === f(g) && (te ? (F(x), x = -1) : te = !0, K(re, I - W))) : (m.sortIndex = J, c(p, m), U || q || (U = !0, V || (V = !0, H()))), m;
    }, o.unstable_shouldYield = fe, o.unstable_wrapCallback = function(m) {
      var T = O;
      return function() {
        var I = O;
        O = T;
        try {
          return m.apply(this, arguments);
        } finally {
          O = I;
        }
      };
    };
  }(Pp)), Pp)), Cp.exports;
}
var Rp, Lp, Tp, _p, vs = { exports: {} }, Dt = {};
function Vm() {
  if (Rp) return Dt;
  Rp = 1;
  var o = Ls();
  function c(b) {
    var p = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + b + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var s = { d: { f, r: function() {
    throw Error(c(522));
  }, D: f, C: f, L: f, m: f, X: f, S: f, M: f }, p: 0, findDOMNode: null }, y = Symbol.for("react.portal"), v = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(b, p) {
    return b === "font" ? "" : typeof p == "string" ? p === "use-credentials" ? p : "" : void 0;
  }
  return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Dt.createPortal = function(b, p) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(c(299));
    return function(P, C, O) {
      var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: y, key: q == null ? null : "" + q, children: P, containerInfo: C, implementation: O };
    }(b, p, null, g);
  }, Dt.flushSync = function(b) {
    var p = v.T, g = s.p;
    try {
      if (v.T = null, s.p = 2, b) return b();
    } finally {
      v.T = p, s.p = g, s.d.f();
    }
  }, Dt.preconnect = function(b, p) {
    typeof b == "string" && (p ? p = typeof (p = p.crossOrigin) == "string" ? p === "use-credentials" ? p : "" : void 0 : p = null, s.d.C(b, p));
  }, Dt.prefetchDNS = function(b) {
    typeof b == "string" && s.d.D(b);
  }, Dt.preinit = function(b, p) {
    if (typeof b == "string" && p && typeof p.as == "string") {
      var g = p.as, P = E(g, p.crossOrigin), C = typeof p.integrity == "string" ? p.integrity : void 0, O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      g === "style" ? s.d.S(b, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: P, integrity: C, fetchPriority: O }) : g === "script" && s.d.X(b, { crossOrigin: P, integrity: C, fetchPriority: O, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
    }
  }, Dt.preinitModule = function(b, p) {
    if (typeof b == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var g = E(p.as, p.crossOrigin);
        s.d.M(b, { crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
      }
    } else p == null && s.d.M(b);
  }, Dt.preload = function(b, p) {
    if (typeof b == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var g = p.as, P = E(g, p.crossOrigin);
      s.d.L(b, g, { crossOrigin: P, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 });
    }
  }, Dt.preloadModule = function(b, p) {
    if (typeof b == "string") if (p) {
      var g = E(p.as, p.crossOrigin);
      s.d.m(b, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0 });
    } else s.d.m(b);
  }, Dt.requestFormReset = function(b) {
    s.d.r(b);
  }, Dt.unstable_batchedUpdates = function(b, p) {
    return b(p);
  }, Dt.useFormState = function(b, p, g) {
    return v.H.useFormState(b, p, g);
  }, Dt.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, Dt.version = "19.1.0", Dt;
}
function sh() {
  return Lp || (Lp = 1, function o() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (c) {
      console.error(c);
    }
  }(), vs.exports = Vm()), vs.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Wm() {
  if (Tp) return Dl;
  Tp = 1;
  var o = Bm(), c = Ls(), f = sh();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function v(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        4098 & (t = e).flags && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function E(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate) !== null && (t = e.memoizedState), t !== null) return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (v(e) !== e) throw Error(s(188));
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if ((t = p(e)) !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, P = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), Y = Symbol.for("react.consumer"), F = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), ue = Symbol.for("react.memo_cache_sentinel"), we = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : typeof (e = we && e[we] || e["@@iterator"]) == "function" ? e : null;
  }
  var he = Symbol.for("react.client.reference");
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case te:
        return "Profiler";
      case U:
        return "StrictMode";
      case B:
        return "Suspense";
      case re:
        return "SuspenseList";
      case x:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case O:
        return "Portal";
      case F:
        return (e.displayName || "Context") + ".Provider";
      case Y:
        return (e._context.displayName || "Context") + ".Consumer";
      case j:
        var t = e.render;
        return (e = e.displayName) || (e = (e = t.displayName || t.name || "") !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return (t = e.displayName || null) !== null ? t : je(e.type) || "Memo";
      case V:
        t = e._payload, e = e._init;
        try {
          return je(e(t));
        } catch {
        }
    }
    return null;
  }
  var me = Array.isArray, K = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, m = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = { pending: !1, data: null, method: null, action: null }, I = [], W = -1;
  function J(e) {
    return { current: e };
  }
  function ne(e) {
    0 > W || (e.current = I[W], I[W] = null, W--);
  }
  function le(e, t) {
    W++, I[W] = e.current, e.current = t;
  }
  var be = J(null), ve = J(null), Ve = J(null), Ot = J(null);
  function We(e, t) {
    switch (le(Ve, t), le(ve, e), le(be, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Bf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) e = Vf(t = Bf(t), e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    ne(be), le(be, e);
  }
  function De() {
    ne(be), ne(ve), ne(Ve);
  }
  function Mt(e) {
    e.memoizedState !== null && le(Ot, e);
    var t = be.current, n = Vf(t, e.type);
    t !== n && (le(ve, e), le(be, n));
  }
  function Tr(e) {
    ve.current === e && (ne(be), ne(ve)), Ot.current === e && (ne(Ot), Pl._currentValue = T);
  }
  var yn = Object.prototype.hasOwnProperty, Mn = o.unstable_scheduleCallback, Gr = o.unstable_cancelCallback, ja = o.unstable_shouldYield, Cn = o.unstable_requestPaint, ht = o.unstable_now, Bl = o.unstable_getCurrentPriorityLevel, Jr = o.unstable_ImmediatePriority, vn = o.unstable_UserBlockingPriority, Zr = o.unstable_NormalPriority, Vl = o.unstable_LowPriority, $a = o.unstable_IdlePriority, Wl = o.log, ea = o.unstable_setDisableYieldValue, Gn = null, Ct = null;
  function gn(e) {
    if (typeof Wl == "function" && ea(e), Ct && typeof Ct.setStrictMode == "function") try {
      Ct.setStrictMode(Gn, e);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : function(e) {
    return (e >>>= 0) === 0 ? 32 : 31 - (ta(e) / na | 0) | 0;
  }, ta = Math.log, na = Math.LN2, z = 256, M = 4194304;
  function _(e) {
    var t = 42 & e;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return 4194048 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return 62914560 & e;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Z(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var a = 0, l = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var i = 134217727 & r;
    return i !== 0 ? (r = i & ~l) !== 0 ? a = _(r) : (u &= i) !== 0 ? a = _(u) : n || (n = i & ~e) !== 0 && (a = _(n)) : (i = r & ~l) !== 0 ? a = _(i) : u !== 0 ? a = _(u) : n || (n = r & ~e) !== 0 && (a = _(n)), a === 0 ? 0 : t !== 0 && t !== a && !(t & l) && ((l = a & -a) >= (n = t & -t) || l === 32 && 4194048 & n) ? t : a;
  }
  function oe(e, t) {
    return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
  }
  function ce(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
      default:
        return -1;
    }
  }
  function se() {
    var e = z;
    return !(4194048 & (z <<= 1)) && (z = 256), e;
  }
  function pe() {
    var e = M;
    return !(62914560 & (M <<= 1)) && (M = 4194304), e;
  }
  function Ce(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Oe(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ke(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - Tt(t);
    e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194090 & n;
  }
  function Ge(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Tt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  function _t(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function gt(e) {
    return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2;
  }
  function Ze() {
    var e = m.p;
    return e !== 0 ? e : (e = window.event) === void 0 ? 32 : sp(e.type);
  }
  var X = Math.random().toString(36).slice(2), de = "__reactFiber$" + X, ye = "__reactProps$" + X, lt = "__reactContainer$" + X, rt = "__reactEvents$" + X, $t = "__reactListeners$" + X, bn = "__reactHandles$" + X, At = "__reactResources$" + X, st = "__reactMarker$" + X;
  function qe(e) {
    delete e[de], delete e[ye], delete e[rt], delete e[$t], delete e[bn];
  }
  function kt(e) {
    var t = e[de];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[lt] || n[de]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yf(e); e !== null; ) {
          if (n = e[de]) return n;
          e = Yf(e);
        }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function $e(e) {
    if (e = e[de] || e[lt]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function ke(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ue(e) {
    var t = e[At];
    return t || (t = e[At] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ie(e) {
    e[st] = !0;
  }
  var Pn = /* @__PURE__ */ new Set(), Qt = {};
  function Me(e, t) {
    tn(e, t), tn(e + "Capture", t);
  }
  function tn(e, t) {
    for (Qt[e] = t, e = 0; e < t.length; e++) Pn.add(t[e]);
  }
  var wn, Jn, Ut = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zn = {}, er = {};
  function tr(e, t, n) {
    if (a = t, yn.call(er, a) || !yn.call(Zn, a) && (Ut.test(a) ? er[a] = !0 : (Zn[a] = !0, 0))) if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          return void e.removeAttribute(t);
        case "boolean":
          var r = t.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") return void e.removeAttribute(t);
      }
      e.setAttribute(t, "" + n);
    }
    var a;
  }
  function nn(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          return void e.removeAttribute(t);
      }
      e.setAttribute(t, "" + n);
    }
  }
  function It(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          return void e.removeAttribute(n);
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  function ze(e) {
    if (wn === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wn = t && t[1] || "", Jn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + wn + e + Jn;
  }
  var St = !1;
  function Ft(e, t) {
    if (!e || St) return "";
    St = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var L = function() {
              throw Error();
            };
            if (Object.defineProperty(L.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(L, []);
              } catch (D) {
                var N = D;
              }
              Reflect.construct(e, [], L);
            } else {
              try {
                L.call();
              } catch (D) {
                N = D;
              }
              e.call(L.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (D) {
              N = D;
            }
            (L = e()) && typeof L.catch == "function" && L.catch(function() {
            });
          }
        } catch (D) {
          if (D && N && typeof D.stack == "string") return [D.stack, N.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var l = r.DetermineComponentFrameRoot(), u = l[0], i = l[1];
      if (u && i) {
        var d = u.split(`
`), h = i.split(`
`);
        for (a = r = 0; r < d.length && !d[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); ) a++;
        if (r === d.length || a === h.length) for (r = d.length - 1, a = h.length - 1; 1 <= r && 0 <= a && d[r] !== h[a]; ) a--;
        for (; 1 <= r && 0 <= a; r--, a--) if (d[r] !== h[a]) {
          if (r !== 1 || a !== 1) do
            if (r--, 0 > --a || d[r] !== h[a]) {
              var R = `
` + d[r].replace(" at new ", " at ");
              return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
            }
          while (1 <= r && 0 <= a);
          break;
        }
      }
    } finally {
      St = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ze(n) : "";
  }
  function An(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ze(e.type);
      case 16:
        return ze("Lazy");
      case 13:
        return ze("Suspense");
      case 19:
        return ze("SuspenseList");
      case 0:
      case 15:
        return Ft(e.type, !1);
      case 11:
        return Ft(e.type.render, !1);
      case 1:
        return Ft(e.type, !0);
      case 31:
        return ze("Activity");
      default:
        return "";
    }
  }
  function nr(e) {
    try {
      var t = "";
      do
        t += An(e), e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function xe(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function rn(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rr(e) {
    e._valueTracker || (e._valueTracker = function(t) {
      var n = rn(t) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n), a = "" + t[n];
      if (!t.hasOwnProperty(n) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
        var l = r.get, u = r.set;
        return Object.defineProperty(t, n, { configurable: !0, get: function() {
          return l.call(this);
        }, set: function(i) {
          a = "" + i, u.call(this, i);
        } }), Object.defineProperty(t, n, { enumerable: r.enumerable }), { getValue: function() {
          return a;
        }, setValue: function(i) {
          a = "" + i;
        }, stopTracking: function() {
          t._valueTracker = null, delete t[n];
        } };
      }
    }(e));
  }
  function ql(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = rn(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
  }
  function Ql(e) {
    if ((e = e || (typeof document < "u" ? document : void 0)) === void 0) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Th = /[\n"\\]/g;
  function kn(e) {
    return e.replace(Th, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function hi(e, t, n, r, a, l, u, i) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xe(t)) : e.value !== "" + xe(t) && (e.value = "" + xe(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? mi(e, u, xe(t)) : n != null ? mi(e, u, xe(n)) : r != null && e.removeAttribute("value"), a == null && l != null && (e.defaultChecked = !!l), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.name = "" + xe(i) : e.removeAttribute("name");
  }
  function $s(e, t, n, r, a, l, u, i) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l), t != null || n != null) {
      if ((l === "submit" || l === "reset") && t == null) return;
      n = n != null ? "" + xe(n) : "", t = t != null ? "" + xe(t) : n, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = typeof (r = r ?? a) != "function" && typeof r != "symbol" && !!r, e.checked = i ? e.checked : !!r, e.defaultChecked = !!r, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u);
  }
  function mi(e, t, n) {
    t === "number" && Ql(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ra(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Us(e, t, n) {
    t == null || ((t = "" + xe(t)) !== e.value && (e.value = t), n != null) ? e.defaultValue = n != null ? "" + xe(n) : "" : e.defaultValue !== t && (e.defaultValue = t);
  }
  function Is(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(s(92));
        if (me(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), t = n;
    }
    n = xe(t), e.defaultValue = n, (r = e.textContent) === n && r !== "" && r !== null && (e.value = r);
  }
  function aa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var _h = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Hs(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || _h.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Bs(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (e = e.style, n != null) {
      for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Hs(e, a, r);
    } else for (var l in t) t.hasOwnProperty(l) && Hs(e, l, t[l]);
  }
  function yi(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var zh = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Nh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yl(e) {
    return Nh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var vi = null;
  function gi(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var la = null, oa = null;
  function Vs(e) {
    var t = $e(e);
    if (t && (e = t.stateNode)) {
      var n = e[ye] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (hi(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + kn("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var a = r[ye] || null;
                if (!a) throw Error(s(90));
                hi(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ql(r);
          }
          break e;
        case "textarea":
          Us(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value) != null && ra(e, !!n.multiple, t, !1);
      }
    }
  }
  var bi = !1;
  function Ws(e, t, n) {
    if (bi) return e(t, n);
    bi = !0;
    try {
      return e(t);
    } finally {
      if (bi = !1, (la !== null || oa !== null) && (Oo(), la && (t = la, e = oa, oa = la = null, Vs(t), e))) for (t = 0; t < e.length; t++) Vs(e[t]);
    }
  }
  function Ua(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[ye] || null;
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
        (r = !r.disabled) || (r = !((e = e.type) === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Fn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), wi = !1;
  if (Fn) try {
    var Ia = {};
    Object.defineProperty(Ia, "passive", { get: function() {
      wi = !0;
    } }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    wi = !1;
  }
  var _r = null, ki = null, Kl = null;
  function qs() {
    if (Kl) return Kl;
    var e, t, n = ki, r = n.length, a = "value" in _r ? _r.value : _r.textContent, l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++) ;
    var u = r - e;
    for (t = 1; t <= u && n[r - t] === a[l - t]; t++) ;
    return Kl = a.slice(e, 1 < t ? 1 - t : void 0);
  }
  function Xl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode) === 0 && t === 13 && (e = 13) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Gl() {
    return !0;
  }
  function Qs() {
    return !1;
  }
  function Ht(e) {
    function t(n, r, a, l, u) {
      for (var i in this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = l, this.target = u, this.currentTarget = null, e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(l) : l[i]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Gl : Qs, this.isPropagationStopped = Qs, this;
    }
    return g(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gl);
    }, persist: function() {
    }, isPersistent: Gl }), t;
  }
  var Si, Ei, Ha, zr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Jl = Ht(zr), Ba = g({}, zr, { view: 0, detail: 0 }), Dh = Ht(Ba), Zl = g({}, Ba, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ci, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ha && (Ha && e.type === "mousemove" ? (Si = e.screenX - Ha.screenX, Ei = e.screenY - Ha.screenY) : Ei = Si = 0, Ha = e), Si);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ei;
  } }), Ys = Ht(Zl), Oh = Ht(g({}, Zl, { dataTransfer: 0 })), xi = Ht(g({}, Ba, { relatedTarget: 0 })), Mh = Ht(g({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Ah = Ht(g({}, zr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), Ks = Ht(g({}, zr, { data: 0 })), Fh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, jh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, $h = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Uh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = $h[e]) && !!t[e];
  }
  function Ci() {
    return Uh;
  }
  var Ih = Ht(g({}, Ba, { key: function(e) {
    if (e.key) {
      var t = Fh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Xl(e)) === 13 ? "Enter" : String.fromCharCode(e) : e.type === "keydown" || e.type === "keyup" ? jh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ci, charCode: function(e) {
    return e.type === "keypress" ? Xl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } })), Xs = Ht(g({}, Zl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Hh = Ht(g({}, Ba, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ci })), Bh = Ht(g({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Vh = Ht(g({}, Zl, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), Wh = Ht(g({}, zr, { newState: 0, oldState: 0 })), qh = [9, 13, 27, 32], Pi = Fn && "CompositionEvent" in window, Va = null;
  Fn && "documentMode" in document && (Va = document.documentMode);
  var Qh = Fn && "TextEvent" in window && !Va, Gs = Fn && (!Pi || Va && 8 < Va && 11 >= Va), Js = " ", Zs = !1;
  function ec(e, t) {
    switch (e) {
      case "keyup":
        return qh.indexOf(t.keyCode) !== -1;
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
  function tc(e) {
    return typeof (e = e.detail) == "object" && "data" in e ? e.data : null;
  }
  var ia = !1, Yh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yh[e.type] : t === "textarea";
  }
  function rc(e, t, n, r) {
    la ? oa ? oa.push(r) : oa = [r] : la = r, 0 < (t = Uo(t, "onChange")).length && (n = new Jl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var eo = null, Wa = null;
  function Kh(e) {
    jf(e, 0);
  }
  function to(e) {
    if (ql(ke(e))) return e;
  }
  function ac(e, t) {
    if (e === "change") return t;
  }
  var lc = !1;
  if (Fn) {
    var Ri;
    if (Fn) {
      var Li = "oninput" in document;
      if (!Li) {
        var oc = document.createElement("div");
        oc.setAttribute("oninput", "return;"), Li = typeof oc.oninput == "function";
      }
      Ri = Li;
    } else Ri = !1;
    lc = Ri && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    eo && (eo.detachEvent("onpropertychange", uc), Wa = eo = null);
  }
  function uc(e) {
    if (e.propertyName === "value" && to(Wa)) {
      var t = [];
      rc(t, Wa, e, gi(e)), Ws(Kh, t);
    }
  }
  function Xh(e, t, n) {
    e === "focusin" ? (ic(), Wa = n, (eo = t).attachEvent("onpropertychange", uc)) : e === "focusout" && ic();
  }
  function Gh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return to(Wa);
  }
  function Jh(e, t) {
    if (e === "click") return to(t);
  }
  function Zh(e, t) {
    if (e === "input" || e === "change") return to(t);
  }
  var Yt = typeof Object.is == "function" ? Object.is : function(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  function qa(e, t) {
    if (Yt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!yn.call(t, a) || !Yt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function sc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cc(e, t) {
    var n, r = sc(e);
    for (e = 0; r; ) {
      if (r.nodeType === 3) {
        if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
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
      r = sc(r);
    }
  }
  function dc(e, t) {
    return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? dc(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
  }
  function fc(e) {
    for (var t = Ql((e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (!n) break;
      t = Ql((e = t.contentWindow).document);
    }
    return t;
  }
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var em = Fn && "documentMode" in document && 11 >= document.documentMode, ua = null, _i = null, Qa = null, zi = !1;
  function pc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zi || ua == null || ua !== Ql(r) || ("selectionStart" in (r = ua) && Ti(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, Qa && qa(Qa, r) || (Qa = r, 0 < (r = Uo(_i, "onSelect")).length && (t = new Jl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ua)));
  }
  function Nr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var sa = { animationend: Nr("Animation", "AnimationEnd"), animationiteration: Nr("Animation", "AnimationIteration"), animationstart: Nr("Animation", "AnimationStart"), transitionrun: Nr("Transition", "TransitionRun"), transitionstart: Nr("Transition", "TransitionStart"), transitioncancel: Nr("Transition", "TransitionCancel"), transitionend: Nr("Transition", "TransitionEnd") }, Ni = {}, hc = {};
  function Dr(e) {
    if (Ni[e]) return Ni[e];
    if (!sa[e]) return e;
    var t, n = sa[e];
    for (t in n) if (n.hasOwnProperty(t) && t in hc) return Ni[e] = n[t];
    return e;
  }
  Fn && (hc = document.createElement("div").style, "AnimationEvent" in window || (delete sa.animationend.animation, delete sa.animationiteration.animation, delete sa.animationstart.animation), "TransitionEvent" in window || delete sa.transitionend.transition);
  var mc = Dr("animationend"), yc = Dr("animationiteration"), vc = Dr("animationstart"), tm = Dr("transitionrun"), nm = Dr("transitionstart"), rm = Dr("transitioncancel"), gc = Dr("transitionend"), bc = /* @__PURE__ */ new Map(), Di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Sn(e, t) {
    bc.set(e, t), Me(t, [e]);
  }
  Di.push("scrollEnd");
  var wc = /* @__PURE__ */ new WeakMap();
  function an(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = wc.get(e);
      return n !== void 0 ? n : (t = { value: e, source: t, stack: nr(t) }, wc.set(e, t), t);
    }
    return { value: e, source: t, stack: nr(t) };
  }
  var ln = [], ca = 0, Oi = 0;
  function no() {
    for (var e = ca, t = Oi = ca = 0; t < e; ) {
      var n = ln[t];
      ln[t++] = null;
      var r = ln[t];
      ln[t++] = null;
      var a = ln[t];
      ln[t++] = null;
      var l = ln[t];
      if (ln[t++] = null, r !== null && a !== null) {
        var u = r.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), r.pending = a;
      }
      l !== 0 && kc(n, a, l);
    }
  }
  function ro(e, t, n, r) {
    ln[ca++] = e, ln[ca++] = t, ln[ca++] = n, ln[ca++] = r, Oi |= r, e.lanes |= r, (e = e.alternate) !== null && (e.lanes |= r);
  }
  function Mi(e, t, n, r) {
    return ro(e, t, n, r), ao(e);
  }
  function da(e, t) {
    return ro(e, null, null, t), ao(e);
  }
  function kc(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var a = !1, l = e.return; l !== null; ) l.childLanes |= n, (r = l.alternate) !== null && (r.childLanes |= n), l.tag === 22 && ((e = l.stateNode) === null || 1 & e._visibility || (a = !0)), e = l, l = l.return;
    return e.tag === 3 ? (l = e.stateNode, a && t !== null && (a = 31 - Tt(n), (r = (e = l.hiddenUpdates)[a]) === null ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), l) : null;
  }
  function ao(e) {
    if (50 < gl) throw gl = 0, Iu = null, Error(s(185));
    for (var t = e.return; t !== null; ) t = (e = t).return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function am(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, n, r) {
    return new am(e, t, n, r);
  }
  function Ai(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function jn(e, t) {
    var n = e.alternate;
    return n === null ? ((n = Kt(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Sc(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function lo(e, t, n, r, a, l) {
    var u = 0;
    if (r = e, typeof e == "function") Ai(e) && (u = 1);
    else if (typeof e == "string") u = function(i, d, h) {
      if (h === 1 || d.itemProp != null) return !1;
      switch (i) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof d.precedence != "string" || typeof d.href != "string" || d.href === "") break;
          return !0;
        case "link":
          if (typeof d.rel != "string" || typeof d.href != "string" || d.href === "" || d.onLoad || d.onError) break;
          return d.rel !== "stylesheet" || (i = d.disabled, typeof d.precedence == "string" && i == null);
        case "script":
          if (d.async && typeof d.async != "function" && typeof d.async != "symbol" && !d.onLoad && !d.onError && d.src && typeof d.src == "string") return !0;
      }
      return !1;
    }(e, n, be.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case x:
        return (e = Kt(31, n, t, a)).elementType = x, e.lanes = l, e;
      case q:
        return Or(n.children, a, l, t);
      case U:
        u = 8, a |= 24;
        break;
      case te:
        return (e = Kt(12, n, t, 2 | a)).elementType = te, e.lanes = l, e;
      case B:
        return (e = Kt(13, n, t, a)).elementType = B, e.lanes = l, e;
      case re:
        return (e = Kt(19, n, t, a)).elementType = re, e.lanes = l, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Q:
          case F:
            u = 10;
            break e;
          case Y:
            u = 9;
            break e;
          case j:
            u = 11;
            break e;
          case H:
            u = 14;
            break e;
          case V:
            u = 16, r = null;
            break e;
        }
        u = 29, n = Error(s(130, e === null ? "null" : typeof e, "")), r = null;
    }
    return (t = Kt(u, n, t, a)).elementType = e, t.type = r, t.lanes = l, t;
  }
  function Or(e, t, n, r) {
    return (e = Kt(7, e, r, t)).lanes = n, e;
  }
  function Fi(e, t, n) {
    return (e = Kt(6, e, null, t)).lanes = n, e;
  }
  function ji(e, t, n) {
    return (t = Kt(4, e.children !== null ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var pa = [], ha = 0, oo = null, io = 0, on = [], un = 0, Mr = null, Rn = 1, $n = "";
  function Ar(e, t) {
    pa[ha++] = io, pa[ha++] = oo, oo = e, io = t;
  }
  function Ec(e, t, n) {
    on[un++] = Rn, on[un++] = $n, on[un++] = Mr, Mr = e;
    var r = Rn;
    e = $n;
    var a = 32 - Tt(r) - 1;
    r &= ~(1 << a), n += 1;
    var l = 32 - Tt(t) + a;
    if (30 < l) {
      var u = a - a % 5;
      l = (r & (1 << u) - 1).toString(32), r >>= u, a -= u, Rn = 1 << 32 - Tt(t) + a | n << a | r, $n = l + e;
    } else Rn = 1 << l | n << a | r, $n = e;
  }
  function $i(e) {
    e.return !== null && (Ar(e, 1), Ec(e, 1, 0));
  }
  function Ui(e) {
    for (; e === oo; ) oo = pa[--ha], pa[ha] = null, io = pa[--ha], pa[ha] = null;
    for (; e === Mr; ) Mr = on[--un], on[un] = null, $n = on[--un], on[un] = null, Rn = on[--un], on[un] = null;
  }
  var jt = null, ot = null, He = !1, Fr = null, Ln = !1, Ii = Error(s(519));
  function jr(e) {
    throw Xa(an(Error(s(418, "")), e)), Ii;
  }
  function xc(e) {
    var t = e.stateNode, n = e.type, r = e.memoizedProps;
    switch (t[de] = e, t[ye] = r, n) {
      case "dialog":
        Le("cancel", t), Le("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < wl.length; n++) Le(wl[n], t);
        break;
      case "source":
        Le("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", t), Le("load", t);
        break;
      case "details":
        Le("toggle", t);
        break;
      case "input":
        Le("invalid", t), $s(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), rr(t);
        break;
      case "select":
        Le("invalid", t);
        break;
      case "textarea":
        Le("invalid", t), Is(t, r.value, r.defaultValue, r.children), rr(t);
    }
    typeof (n = r.children) != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || r.suppressHydrationWarning === !0 || Hf(t.textContent, n) ? (r.popover != null && (Le("beforetoggle", t), Le("toggle", t)), r.onScroll != null && Le("scroll", t), r.onScrollEnd != null && Le("scrollend", t), r.onClick != null && (t.onclick = Io), t = !0) : t = !1, t || jr(e);
  }
  function Cc(e) {
    for (jt = e.return; jt; ) switch (jt.tag) {
      case 5:
      case 13:
        return void (Ln = !1);
      case 27:
      case 3:
        return void (Ln = !0);
      default:
        jt = jt.return;
    }
  }
  function Ya(e) {
    if (e !== jt) return !1;
    if (!He) return Cc(e), He = !0, !1;
    var t, n = e.tag;
    if ((t = n !== 3 && n !== 27) && ((t = n === 5) && (t = !((t = e.type) !== "form" && t !== "button") || rs(e.type, e.memoizedProps)), t = !t), t && ot && jr(e), Cc(e), n === 13) {
      if (!(e = (e = e.memoizedState) !== null ? e.dehydrated : null)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) if ((t = e.data) === "/$") {
            if (n === 0) {
              ot = xn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          e = e.nextSibling;
        }
        ot = null;
      }
    } else n === 27 ? (n = ot, wr(e.type) ? (e = is, is = null, ot = e) : ot = n) : ot = jt ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ka() {
    ot = jt = null, He = !1;
  }
  function Pc() {
    var e = Fr;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(Wt, e), Fr = null), e;
  }
  function Xa(e) {
    Fr === null ? Fr = [e] : Fr.push(e);
  }
  var Hi = J(null), $r = null, Un = null;
  function ar(e, t, n) {
    le(Hi, t._currentValue), t._currentValue = n;
  }
  function In(e) {
    e._currentValue = Hi.current, ne(Hi);
  }
  function Bi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Vi(e, t, n, r) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var l = a.dependencies;
      if (l !== null) {
        var u = a.child;
        l = l.firstContext;
        e: for (; l !== null; ) {
          var i = l;
          l = a;
          for (var d = 0; d < t.length; d++) if (i.context === t[d]) {
            l.lanes |= n, (i = l.alternate) !== null && (i.lanes |= n), Bi(l.return, n, e), r || (u = null);
            break e;
          }
          l = i.next;
        }
      } else if (a.tag === 18) {
        if ((u = a.return) === null) throw Error(s(341));
        u.lanes |= n, (l = u.alternate) !== null && (l.lanes |= n), Bi(u, n, e), u = null;
      } else u = a.child;
      if (u !== null) u.return = a;
      else for (u = a; u !== null; ) {
        if (u === e) {
          u = null;
          break;
        }
        if ((a = u.sibling) !== null) {
          a.return = u.return, u = a;
          break;
        }
        u = u.return;
      }
      a = u;
    }
  }
  function Ga(e, t, n, r) {
    e = null;
    for (var a = t, l = !1; a !== null; ) {
      if (!l) {
        if (524288 & a.flags) l = !0;
        else if (262144 & a.flags) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(s(387));
        if ((u = u.memoizedProps) !== null) {
          var i = a.type;
          Yt(a.pendingProps.value, u.value) || (e !== null ? e.push(i) : e = [i]);
        }
      } else if (a === Ot.current) {
        if ((u = a.alternate) === null) throw Error(s(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Pl) : e = [Pl]);
      }
      a = a.return;
    }
    e !== null && Vi(t, e, n, r), t.flags |= 262144;
  }
  function uo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ur(e) {
    $r = e, Un = null, (e = e.dependencies) !== null && (e.firstContext = null);
  }
  function zt(e) {
    return Rc($r, e);
  }
  function so(e, t) {
    return $r === null && Ur(e), Rc(e, t);
  }
  function Rc(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Un === null) {
      if (e === null) throw Error(s(308));
      Un = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Un = Un.next = t;
    return n;
  }
  var lm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: !1, addEventListener: function(n, r) {
      e.push(r);
    } };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, om = o.unstable_scheduleCallback, im = o.unstable_NormalPriority, bt = { $$typeof: F, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Wi() {
    return { controller: new lm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Ja(e) {
    e.refCount--, e.refCount === 0 && om(im, function() {
      e.controller.abort();
    });
  }
  var Za = null, qi = 0, Ir = 0, Hr = null;
  function Lc() {
    if (--qi == 0 && Za !== null) {
      Hr !== null && (Hr.status = "fulfilled");
      var e = Za;
      Za = null, Ir = 0, Hr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  var Tc = K.S;
  K.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && function(n, r) {
      if (Za === null) {
        var a = Za = [];
        qi = 0, Ir = Yu(), Hr = { status: "pending", value: void 0, then: function(l) {
          a.push(l);
        } };
      }
      qi++, r.then(Lc, Lc);
    }(0, t), Tc !== null && Tc(e, t);
  };
  var ma = J(null);
  function Qi() {
    var e = ma.current;
    return e !== null ? e : et.pooledCache;
  }
  function co(e, t) {
    le(ma, t === null ? ma.current : t.pool);
  }
  function _c() {
    var e = Qi();
    return e === null ? null : { parent: bt._currentValue, pool: e };
  }
  var el = Error(s(460)), zc = Error(s(474)), fo = Error(s(542)), Yi = { then: function() {
  } };
  function Nc(e) {
    return (e = e.status) === "fulfilled" || e === "rejected";
  }
  function po() {
  }
  function Dc(e, t, n) {
    switch ((n = e[n]) === void 0 ? e.push(t) : n !== t && (t.then(po, po), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw Mc(e = t.reason), e;
      default:
        if (typeof t.status == "string") t.then(po, po);
        else {
          if ((e = et) !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
          (e = t).status = "pending", e.then(function(r) {
            if (t.status === "pending") {
              var a = t;
              a.status = "fulfilled", a.value = r;
            }
          }, function(r) {
            if (t.status === "pending") {
              var a = t;
              a.status = "rejected", a.reason = r;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw Mc(e = t.reason), e;
        }
        throw tl = t, el;
    }
  }
  var tl = null;
  function Oc() {
    if (tl === null) throw Error(s(459));
    var e = tl;
    return tl = null, e;
  }
  function Mc(e) {
    if (e === el || e === fo) throw Error(s(483));
  }
  var lr = !1;
  function Ki(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Xi(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function or(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ir(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, 2 & Qe) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = ao(e), kc(e, null, n), t;
    }
    return ro(e, r, t, n), ao(e);
  }
  function nl(e, t, n) {
    if ((t = t.updateQueue) !== null && (t = t.shared, 4194048 & n)) {
      var r = t.lanes;
      n |= r &= e.pendingLanes, t.lanes = n, Ge(e, n);
    }
  }
  function Gi(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && n === (r = r.updateQueue)) {
      var a = null, l = null;
      if ((n = n.firstBaseUpdate) !== null) {
        do {
          var u = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          l === null ? a = l = u : l = l.next = u, n = n.next;
        } while (n !== null);
        l === null ? a = l = t : l = l.next = t;
      } else a = l = t;
      return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, callbacks: r.callbacks }, void (e.updateQueue = n);
    }
    (e = n.lastBaseUpdate) === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Ji = !1;
  function rl() {
    if (Ji && Hr !== null)
      throw Hr;
  }
  function al(e, t, n, r) {
    Ji = !1;
    var a = e.updateQueue;
    lr = !1;
    var l = a.firstBaseUpdate, u = a.lastBaseUpdate, i = a.shared.pending;
    if (i !== null) {
      a.shared.pending = null;
      var d = i, h = d.next;
      d.next = null, u === null ? l = h : u.next = h, u = d;
      var R = e.alternate;
      R !== null && (i = (R = R.updateQueue).lastBaseUpdate) !== u && (i === null ? R.firstBaseUpdate = h : i.next = h, R.lastBaseUpdate = d);
    }
    if (l !== null) {
      var L = a.baseState;
      for (u = 0, R = h = d = null, i = l; ; ) {
        var N = -536870913 & i.lane, D = N !== i.lane;
        if (D ? (Ne & N) === N : (r & N) === N) {
          N !== 0 && N === Ir && (Ji = !0), R !== null && (R = R.next = { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null });
          e: {
            var G = e, k = i;
            N = t;
            var w = n;
            switch (k.tag) {
              case 1:
                if (typeof (G = k.payload) == "function") {
                  L = G.call(w, L, N);
                  break e;
                }
                L = G;
                break e;
              case 3:
                G.flags = -65537 & G.flags | 128;
              case 0:
                if ((N = typeof (G = k.payload) == "function" ? G.call(w, L, N) : G) == null) break e;
                L = g({}, L, N);
                break e;
              case 2:
                lr = !0;
            }
          }
          (N = i.callback) !== null && (e.flags |= 64, D && (e.flags |= 8192), (D = a.callbacks) === null ? a.callbacks = [N] : D.push(N));
        } else D = { lane: N, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, R === null ? (h = R = D, d = L) : R = R.next = D, u |= N;
        if ((i = i.next) === null) {
          if ((i = a.shared.pending) === null) break;
          i = (D = i).next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
        }
      }
      R === null && (d = L), a.baseState = d, a.firstBaseUpdate = h, a.lastBaseUpdate = R, l === null && (a.shared.lanes = 0), yr |= u, e.lanes = u, e.memoizedState = L;
    }
  }
  function Ac(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function Fc(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ac(n[e], t);
  }
  var ya = J(null), ho = J(0);
  function jc(e, t) {
    le(ho, e = Kn), le(ya, t), Kn = e | t.baseLanes;
  }
  function Zi() {
    le(ho, Kn), le(ya, ya.current);
  }
  function eu() {
    Kn = ho.current, ne(ya), ne(ho);
  }
  var ur = 0, Pe = null, tt = null, mt = null, mo = !1, va = !1, Br = !1, yo = 0, ll = 0, ga = null, um = 0;
  function ct() {
    throw Error(s(321));
  }
  function tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Yt(e[n], t[n])) return !1;
    return !0;
  }
  function nu(e, t, n, r, a, l) {
    return ur = l, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, K.H = e === null || e.memoizedState === null ? kd : Sd, Br = !1, l = n(r, a), Br = !1, va && (l = Uc(t, n, r, a)), $c(e), l;
  }
  function $c(e) {
    K.H = ko;
    var t = tt !== null && tt.next !== null;
    if (ur = 0, mt = tt = Pe = null, mo = !1, ll = 0, ga = null, t) throw Error(s(300));
    e === null || Et || (e = e.dependencies) !== null && uo(e) && (Et = !0);
  }
  function Uc(e, t, n, r) {
    Pe = e;
    var a = 0;
    do {
      if (va && (ga = null), ll = 0, va = !1, 25 <= a) throw Error(s(301));
      if (a += 1, mt = tt = null, e.updateQueue != null) {
        var l = e.updateQueue;
        l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
      }
      K.H = mm, l = t(n, r);
    } while (va);
    return l;
  }
  function sm() {
    var e = K.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ol(t) : t, e = e.useState()[0], (tt !== null ? tt.memoizedState : null) !== e && (Pe.flags |= 1024), t;
  }
  function ru() {
    var e = yo !== 0;
    return yo = 0, e;
  }
  function au(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function lu(e) {
    if (mo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mo = !1;
    }
    ur = 0, mt = tt = Pe = null, va = !1, ll = yo = 0, ga = null;
  }
  function Bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Pe.memoizedState = mt = e : mt = mt.next = e, mt;
  }
  function yt() {
    if (tt === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = mt === null ? Pe.memoizedState : mt.next;
    if (t !== null) mt = t, tt = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      e = { memoizedState: (tt = e).memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, mt === null ? Pe.memoizedState = mt = e : mt = mt.next = e;
    }
    return mt;
  }
  function ol(e) {
    var t = ll;
    return ll += 1, ga === null && (ga = []), e = Dc(ga, e, t), t = Pe, (mt === null ? t.memoizedState : mt.next) === null && (t = t.alternate, K.H = t === null || t.memoizedState === null ? kd : Sd), e;
  }
  function vo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ol(e);
      if (e.$$typeof === F) return zt(e);
    }
    throw Error(s(438, String(e)));
  }
  function ou(e) {
    var t = null, n = Pe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var r = Pe.alternate;
      r !== null && (r = r.updateQueue) !== null && (r = r.memoCache) != null && (t = { data: r.data.map(function(a) {
        return a.slice();
      }), index: 0 });
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = { lastEffect: null, events: null, stores: null, memoCache: null }, Pe.updateQueue = n), n.memoCache = t, (n = t.data[t.index]) === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ue;
    return t.index++, n;
  }
  function Hn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function go(e) {
    return iu(yt(), tt, e);
  }
  function iu(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = n;
    var a = e.baseQueue, l = r.pending;
    if (l !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = l.next, l.next = u;
      }
      t.baseQueue = a = l, r.pending = null;
    }
    if (l = e.baseState, a === null) e.memoizedState = l;
    else {
      var i = u = null, d = null, h = t = a.next, R = !1;
      do {
        var L = -536870913 & h.lane;
        if (L !== h.lane ? (Ne & L) === L : (ur & L) === L) {
          var N = h.revertLane;
          if (N === 0) d !== null && (d = d.next = { lane: 0, revertLane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), L === Ir && (R = !0);
          else {
            if ((ur & N) === N) {
              h = h.next, N === Ir && (R = !0);
              continue;
            }
            L = { lane: 0, revertLane: h.revertLane, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, d === null ? (i = d = L, u = l) : d = d.next = L, Pe.lanes |= N, yr |= N;
          }
          L = h.action, Br && n(l, L), l = h.hasEagerState ? h.eagerState : n(l, L);
        } else N = { lane: L, revertLane: h.revertLane, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, d === null ? (i = d = N, u = l) : d = d.next = N, Pe.lanes |= L, yr |= L;
        h = h.next;
      } while (h !== null && h !== t);
      if (d === null ? u = l : d.next = i, !Yt(l, e.memoizedState) && (Et = !0, R && (n = Hr) !== null)) throw n;
      e.memoizedState = l, e.baseState = u, e.baseQueue = d, r.lastRenderedState = l;
    }
    return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function uu(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, l = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        l = e(l, u.action), u = u.next;
      while (u !== a);
      Yt(l, t.memoizedState) || (Et = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Ic(e, t, n) {
    var r = Pe, a = yt(), l = He;
    if (l) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var u = !Yt((tt || a).memoizedState, n);
    if (u && (a.memoizedState = n, Et = !0), a = a.queue, il(2048, 8, Vc.bind(null, r, a, e), [e]), a.getSnapshot !== t || u || mt !== null && 1 & mt.memoizedState.tag) {
      if (r.flags |= 2048, ba(9, { destroy: void 0, resource: void 0 }, Bc.bind(null, r, a, n, t), null), et === null) throw Error(s(349));
      l || 124 & ur || Hc(r, t, n);
    }
    return n;
  }
  function Hc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, (t = Pe.updateQueue) === null ? (t = { lastEffect: null, events: null, stores: null, memoCache: null }, Pe.updateQueue = t, t.stores = [e]) : (n = t.stores) === null ? t.stores = [e] : n.push(e);
  }
  function Bc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Wc(t) && qc(e);
  }
  function Vc(e, t, n) {
    return n(function() {
      Wc(t) && qc(e);
    });
  }
  function Wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Yt(e, n);
    } catch {
      return !0;
    }
  }
  function qc(e) {
    var t = da(e, 2);
    t !== null && Jt(t, e, 2);
  }
  function su(e) {
    var t = Bt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Br) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Hn, lastRenderedState: e }, t;
  }
  function Qc(e, t, n, r) {
    return e.baseState = n, iu(e, tt, typeof r == "function" ? r : Hn);
  }
  function cm(e, t, n, r, a) {
    if (wo(e)) throw Error(s(485));
    if ((e = t.action) !== null) {
      var l = { payload: a, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function(u) {
        l.listeners.push(u);
      } };
      K.T !== null ? n(!0) : l.isTransition = !1, r(l), (n = t.pending) === null ? (l.next = t.pending = l, Yc(t, l)) : (l.next = n.next, t.pending = n.next = l);
    }
  }
  function Yc(e, t) {
    var n = t.action, r = t.payload, a = e.state;
    if (t.isTransition) {
      var l = K.T, u = {};
      K.T = u;
      try {
        var i = n(a, r), d = K.S;
        d !== null && d(u, i), Kc(e, t, i);
      } catch (h) {
        cu(e, t, h);
      } finally {
        K.T = l;
      }
    } else try {
      Kc(e, t, l = n(a, r));
    } catch (h) {
      cu(e, t, h);
    }
  }
  function Kc(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(r) {
      Xc(e, t, r);
    }, function(r) {
      return cu(e, t, r);
    }) : Xc(e, t, n);
  }
  function Xc(e, t, n) {
    t.status = "fulfilled", t.value = n, Gc(t), e.state = n, (t = e.pending) !== null && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, Yc(e, n)));
  }
  function cu(e, t, n) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = n, Gc(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function Gc(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Jc(e, t) {
    return t;
  }
  function Zc(e, t) {
    if (He) {
      var n = et.formState;
      if (n !== null) {
        e: {
          var r = Pe;
          if (He) {
            if (ot) {
              t: {
                for (var a = ot, l = Ln; a.nodeType !== 8; ) {
                  if (!l) {
                    a = null;
                    break t;
                  }
                  if ((a = xn(a.nextSibling)) === null) {
                    a = null;
                    break t;
                  }
                }
                a = (l = a.data) === "F!" || l === "F" ? a : null;
              }
              if (a) {
                ot = xn(a.nextSibling), r = a.data === "F!";
                break e;
              }
            }
            jr(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return (n = Bt()).memoizedState = n.baseState = t, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Jc, lastRenderedState: t }, n.queue = r, n = gd.bind(null, Pe, r), r.dispatch = n, r = su(!1), l = mu.bind(null, Pe, !1, r.queue), a = { state: t, dispatch: null, action: e, pending: null }, (r = Bt()).queue = a, n = cm.bind(null, Pe, a, l, n), a.dispatch = n, r.memoizedState = e, [t, n, !1];
  }
  function ed(e) {
    return td(yt(), tt, e);
  }
  function td(e, t, n) {
    if (t = iu(e, t, Jc)[0], e = go(Hn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var r = ol(t);
    } catch (u) {
      throw u === el ? fo : u;
    }
    else r = t;
    var a = (t = yt()).queue, l = a.dispatch;
    return n !== t.memoizedState && (Pe.flags |= 2048, ba(9, { destroy: void 0, resource: void 0 }, dm.bind(null, a, n), null)), [r, l, e];
  }
  function dm(e, t) {
    e.action = t;
  }
  function nd(e) {
    var t = yt(), n = tt;
    if (n !== null) return td(t, n, e);
    yt(), t = t.memoizedState;
    var r = (n = yt()).queue.dispatch;
    return n.memoizedState = e, [t, r, !1];
  }
  function ba(e, t, n, r) {
    return e = { tag: e, create: n, deps: r, inst: t, next: null }, (t = Pe.updateQueue) === null && (t = { lastEffect: null, events: null, stores: null, memoCache: null }, Pe.updateQueue = t), (n = t.lastEffect) === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
  }
  function rd() {
    return yt().memoizedState;
  }
  function bo(e, t, n, r) {
    var a = Bt();
    r = r === void 0 ? null : r, Pe.flags |= e, a.memoizedState = ba(1 | t, { destroy: void 0, resource: void 0 }, n, r);
  }
  function il(e, t, n, r) {
    var a = yt();
    r = r === void 0 ? null : r;
    var l = a.memoizedState.inst;
    tt !== null && r !== null && tu(r, tt.memoizedState.deps) ? a.memoizedState = ba(t, l, n, r) : (Pe.flags |= e, a.memoizedState = ba(1 | t, l, n, r));
  }
  function ad(e, t) {
    bo(8390656, 8, e, t);
  }
  function ld(e, t) {
    il(2048, 8, e, t);
  }
  function od(e, t) {
    return il(4, 2, e, t);
  }
  function id(e, t) {
    return il(4, 4, e, t);
  }
  function ud(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function sd(e, t, n) {
    n = n != null ? n.concat([e]) : null, il(4, 4, ud.bind(null, t, e), n);
  }
  function du() {
  }
  function cd(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && tu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function dd(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && tu(t, r[1])) return r[0];
    if (r = e(), Br) {
      gn(!0);
      try {
        e();
      } finally {
        gn(!1);
      }
    }
    return n.memoizedState = [r, t], r;
  }
  function fu(e, t, n) {
    return n === void 0 || 1073741824 & ur ? e.memoizedState = t : (e.memoizedState = n, e = mf(), Pe.lanes |= e, yr |= e, n);
  }
  function fd(e, t, n, r) {
    return Yt(n, t) ? n : ya.current !== null ? (e = fu(e, n, r), Yt(e, t) || (Et = !0), e) : 42 & ur ? (e = mf(), Pe.lanes |= e, yr |= e, t) : (Et = !0, e.memoizedState = n);
  }
  function pd(e, t, n, r, a) {
    var l = m.p;
    m.p = l !== 0 && 8 > l ? l : 8;
    var u, i, d, h = K.T, R = {};
    K.T = R, mu(e, !1, t, n);
    try {
      var L = a(), N = K.S;
      N !== null && N(R, L), L !== null && typeof L == "object" && typeof L.then == "function" ? ul(e, t, (u = r, i = [], d = { status: "pending", value: null, reason: null, then: function(D) {
        i.push(D);
      } }, L.then(function() {
        d.status = "fulfilled", d.value = u;
        for (var D = 0; D < i.length; D++) (0, i[D])(u);
      }, function(D) {
        for (d.status = "rejected", d.reason = D, D = 0; D < i.length; D++) (0, i[D])(void 0);
      }), d), Gt()) : ul(e, t, r, Gt());
    } catch (D) {
      ul(e, t, { then: function() {
      }, status: "rejected", reason: D }, Gt());
    } finally {
      m.p = l, K.T = h;
    }
  }
  function fm() {
  }
  function pu(e, t, n, r) {
    if (e.tag !== 5) throw Error(s(476));
    var a = hd(e).queue;
    pd(e, a, t, T, n === null ? fm : function() {
      return md(e), n(r);
    });
  }
  function hd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    var n = {};
    return (t = { memoizedState: T, baseState: T, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Hn, lastRenderedState: T }, next: null }).next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Hn, lastRenderedState: n }, next: null }, e.memoizedState = t, (e = e.alternate) !== null && (e.memoizedState = t), t;
  }
  function md(e) {
    ul(e, hd(e).next.queue, {}, Gt());
  }
  function hu() {
    return zt(Pl);
  }
  function yd() {
    return yt().memoizedState;
  }
  function vd() {
    return yt().memoizedState;
  }
  function pm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt(), r = ir(t, e = or(n), n);
          return r !== null && (Jt(r, t, n), nl(r, t, n)), t = { cache: Wi() }, void (e.payload = t);
      }
      t = t.return;
    }
  }
  function hm(e, t, n) {
    var r = Gt();
    n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }, wo(e) ? bd(t, n) : (n = Mi(e, t, n, r)) !== null && (Jt(n, e, r), wd(n, t, r));
  }
  function gd(e, t, n) {
    ul(e, t, n, Gt());
  }
  function ul(e, t, n, r) {
    var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (wo(e)) bd(t, a);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer) !== null) try {
        var u = t.lastRenderedState, i = l(u, n);
        if (a.hasEagerState = !0, a.eagerState = i, Yt(i, u)) return ro(e, t, a, 0), et === null && no(), !1;
      } catch {
      }
      if ((n = Mi(e, t, a, r)) !== null) return Jt(n, e, r), wd(n, t, r), !0;
    }
    return !1;
  }
  function mu(e, t, n, r) {
    if (r = { lane: 2, revertLane: Yu(), action: r, hasEagerState: !1, eagerState: null, next: null }, wo(e)) {
      if (t) throw Error(s(479));
    } else (t = Mi(e, n, r, 2)) !== null && Jt(t, e, 2);
  }
  function wo(e) {
    var t = e.alternate;
    return e === Pe || t !== null && t === Pe;
  }
  function bd(e, t) {
    va = mo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function wd(e, t, n) {
    if (4194048 & n) {
      var r = t.lanes;
      n |= r &= e.pendingLanes, t.lanes = n, Ge(e, n);
    }
  }
  var ko = { readContext: zt, use: vo, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useLayoutEffect: ct, useInsertionEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useSyncExternalStore: ct, useId: ct, useHostTransitionStatus: ct, useFormState: ct, useActionState: ct, useOptimistic: ct, useMemoCache: ct, useCacheRefresh: ct }, kd = { readContext: zt, use: vo, useCallback: function(e, t) {
    return Bt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: zt, useEffect: ad, useImperativeHandle: function(e, t, n) {
    n = n != null ? n.concat([e]) : null, bo(4194308, 4, ud.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return bo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    bo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Bt();
    t = t === void 0 ? null : t;
    var r = e();
    if (Br) {
      gn(!0);
      try {
        e();
      } finally {
        gn(!1);
      }
    }
    return n.memoizedState = [r, t], r;
  }, useReducer: function(e, t, n) {
    var r = Bt();
    if (n !== void 0) {
      var a = n(t);
      if (Br) {
        gn(!0);
        try {
          n(t);
        } finally {
          gn(!1);
        }
      }
    } else a = t;
    return r.memoizedState = r.baseState = a, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }, r.queue = e, e = e.dispatch = hm.bind(null, Pe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    return e = { current: e }, Bt().memoizedState = e;
  }, useState: function(e) {
    var t = (e = su(e)).queue, n = gd.bind(null, Pe, t);
    return t.dispatch = n, [e.memoizedState, n];
  }, useDebugValue: du, useDeferredValue: function(e, t) {
    return fu(Bt(), e, t);
  }, useTransition: function() {
    var e = su(!1);
    return e = pd.bind(null, Pe, e.queue, !0, !1), Bt().memoizedState = e, [!1, e];
  }, useSyncExternalStore: function(e, t, n) {
    var r = Pe, a = Bt();
    if (He) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), et === null) throw Error(s(349));
      124 & Ne || Hc(r, t, n);
    }
    a.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return a.queue = l, ad(Vc.bind(null, r, l, e), [e]), r.flags |= 2048, ba(9, { destroy: void 0, resource: void 0 }, Bc.bind(null, r, l, n, t), null), n;
  }, useId: function() {
    var e = Bt(), t = et.identifierPrefix;
    if (He) {
      var n = $n;
      t = "«" + t + "R" + (n = (Rn & ~(1 << 32 - Tt(Rn) - 1)).toString(32) + n), 0 < (n = yo++) && (t += "H" + n.toString(32)), t += "»";
    } else t = "«" + t + "r" + (n = um++).toString(32) + "»";
    return e.memoizedState = t;
  }, useHostTransitionStatus: hu, useFormState: Zc, useActionState: Zc, useOptimistic: function(e) {
    var t = Bt();
    t.memoizedState = t.baseState = e;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = n, t = mu.bind(null, Pe, !0, n), n.dispatch = t, [e, t];
  }, useMemoCache: ou, useCacheRefresh: function() {
    return Bt().memoizedState = pm.bind(null, Pe);
  } }, Sd = { readContext: zt, use: vo, useCallback: cd, useContext: zt, useEffect: ld, useImperativeHandle: sd, useInsertionEffect: od, useLayoutEffect: id, useMemo: dd, useReducer: go, useRef: rd, useState: function() {
    return go(Hn);
  }, useDebugValue: du, useDeferredValue: function(e, t) {
    return fd(yt(), tt.memoizedState, e, t);
  }, useTransition: function() {
    var e = go(Hn)[0], t = yt().memoizedState;
    return [typeof e == "boolean" ? e : ol(e), t];
  }, useSyncExternalStore: Ic, useId: yd, useHostTransitionStatus: hu, useFormState: ed, useActionState: ed, useOptimistic: function(e, t) {
    return Qc(yt(), 0, e, t);
  }, useMemoCache: ou, useCacheRefresh: vd }, mm = { readContext: zt, use: vo, useCallback: cd, useContext: zt, useEffect: ld, useImperativeHandle: sd, useInsertionEffect: od, useLayoutEffect: id, useMemo: dd, useReducer: uu, useRef: rd, useState: function() {
    return uu(Hn);
  }, useDebugValue: du, useDeferredValue: function(e, t) {
    var n = yt();
    return tt === null ? fu(n, e, t) : fd(n, tt.memoizedState, e, t);
  }, useTransition: function() {
    var e = uu(Hn)[0], t = yt().memoizedState;
    return [typeof e == "boolean" ? e : ol(e), t];
  }, useSyncExternalStore: Ic, useId: yd, useHostTransitionStatus: hu, useFormState: nd, useActionState: nd, useOptimistic: function(e, t) {
    var n = yt();
    return tt !== null ? Qc(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
  }, useMemoCache: ou, useCacheRefresh: vd }, wa = null, sl = 0;
  function So(e) {
    var t = sl;
    return sl += 1, wa === null && (wa = []), Dc(wa, e, t);
  }
  function cl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Eo(e, t) {
    throw t.$$typeof === P ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Ed(e) {
    return (0, e._init)(e._payload);
  }
  function xd(e) {
    function t(k, w) {
      if (e) {
        var S = k.deletions;
        S === null ? (k.deletions = [w], k.flags |= 16) : S.push(w);
      }
    }
    function n(k, w) {
      if (!e) return null;
      for (; w !== null; ) t(k, w), w = w.sibling;
      return null;
    }
    function r(k) {
      for (var w = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? w.set(k.key, k) : w.set(k.index, k), k = k.sibling;
      return w;
    }
    function a(k, w) {
      return (k = jn(k, w)).index = 0, k.sibling = null, k;
    }
    function l(k, w, S) {
      return k.index = S, e ? (S = k.alternate) !== null ? (S = S.index) < w ? (k.flags |= 67108866, w) : S : (k.flags |= 67108866, w) : (k.flags |= 1048576, w);
    }
    function u(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function i(k, w, S, $) {
      return w === null || w.tag !== 6 ? ((w = Fi(S, k.mode, $)).return = k, w) : ((w = a(w, S)).return = k, w);
    }
    function d(k, w, S, $) {
      var ee = S.type;
      return ee === q ? R(k, w, S.props.children, $, S.key) : w !== null && (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === V && Ed(ee) === w.type) ? (cl(w = a(w, S.props), S), w.return = k, w) : (cl(w = lo(S.type, S.key, S.props, null, k.mode, $), S), w.return = k, w);
    }
    function h(k, w, S, $) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== S.containerInfo || w.stateNode.implementation !== S.implementation ? ((w = ji(S, k.mode, $)).return = k, w) : ((w = a(w, S.children || [])).return = k, w);
    }
    function R(k, w, S, $, ee) {
      return w === null || w.tag !== 7 ? ((w = Or(S, k.mode, $, ee)).return = k, w) : ((w = a(w, S)).return = k, w);
    }
    function L(k, w, S) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return (w = Fi("" + w, k.mode, S)).return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case C:
            return cl(S = lo(w.type, w.key, w.props, null, k.mode, S), w), S.return = k, S;
          case O:
            return (w = ji(w, k.mode, S)).return = k, w;
          case V:
            return L(k, w = (0, w._init)(w._payload), S);
        }
        if (me(w) || fe(w)) return (w = Or(w, k.mode, S, null)).return = k, w;
        if (typeof w.then == "function") return L(k, So(w), S);
        if (w.$$typeof === F) return L(k, so(k, w), S);
        Eo(k, w);
      }
      return null;
    }
    function N(k, w, S, $) {
      var ee = w !== null ? w.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return ee !== null ? null : i(k, w, "" + S, $);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case C:
            return S.key === ee ? d(k, w, S, $) : null;
          case O:
            return S.key === ee ? h(k, w, S, $) : null;
          case V:
            return N(k, w, S = (ee = S._init)(S._payload), $);
        }
        if (me(S) || fe(S)) return ee !== null ? null : R(k, w, S, $, null);
        if (typeof S.then == "function") return N(k, w, So(S), $);
        if (S.$$typeof === F) return N(k, w, so(k, S), $);
        Eo(k, S);
      }
      return null;
    }
    function D(k, w, S, $, ee) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint") return i(w, k = k.get(S) || null, "" + $, ee);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case C:
            return d(w, k = k.get($.key === null ? S : $.key) || null, $, ee);
          case O:
            return h(w, k = k.get($.key === null ? S : $.key) || null, $, ee);
          case V:
            return D(k, w, S, $ = (0, $._init)($._payload), ee);
        }
        if (me($) || fe($)) return R(w, k = k.get(S) || null, $, ee, null);
        if (typeof $.then == "function") return D(k, w, S, So($), ee);
        if ($.$$typeof === F) return D(k, w, S, so(w, $), ee);
        Eo(w, $);
      }
      return null;
    }
    function G(k, w, S, $) {
      if (typeof S == "object" && S !== null && S.type === q && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case C:
            e: {
              for (var ee = S.key; w !== null; ) {
                if (w.key === ee) {
                  if ((ee = S.type) === q) {
                    if (w.tag === 7) {
                      n(k, w.sibling), ($ = a(w, S.props.children)).return = k, k = $;
                      break e;
                    }
                  } else if (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === V && Ed(ee) === w.type) {
                    n(k, w.sibling), cl($ = a(w, S.props), S), $.return = k, k = $;
                    break e;
                  }
                  n(k, w);
                  break;
                }
                t(k, w), w = w.sibling;
              }
              S.type === q ? (($ = Or(S.props.children, k.mode, $, S.key)).return = k, k = $) : (cl($ = lo(S.type, S.key, S.props, null, k.mode, $), S), $.return = k, k = $);
            }
            return u(k);
          case O:
            e: {
              for (ee = S.key; w !== null; ) {
                if (w.key === ee) {
                  if (w.tag === 4 && w.stateNode.containerInfo === S.containerInfo && w.stateNode.implementation === S.implementation) {
                    n(k, w.sibling), ($ = a(w, S.children || [])).return = k, k = $;
                    break e;
                  }
                  n(k, w);
                  break;
                }
                t(k, w), w = w.sibling;
              }
              ($ = ji(S, k.mode, $)).return = k, k = $;
            }
            return u(k);
          case V:
            return G(k, w, S = (ee = S._init)(S._payload), $);
        }
        if (me(S)) return function(ae, ge, Ae, Lt) {
          for (var Fe = null, Be = null, ie = ge, Te = ge = 0, ft = null; ie !== null && Te < Ae.length; Te++) {
            ie.index > Te ? (ft = ie, ie = null) : ft = ie.sibling;
            var Se = N(ae, ie, Ae[Te], Lt);
            if (Se === null) {
              ie === null && (ie = ft);
              break;
            }
            e && ie && Se.alternate === null && t(ae, ie), ge = l(Se, ge, Te), Be === null ? Fe = Se : Be.sibling = Se, Be = Se, ie = ft;
          }
          if (Te === Ae.length) return n(ae, ie), He && Ar(ae, Te), Fe;
          if (ie === null) {
            for (; Te < Ae.length; Te++) (ie = L(ae, Ae[Te], Lt)) !== null && (ge = l(ie, ge, Te), Be === null ? Fe = ie : Be.sibling = ie, Be = ie);
            return He && Ar(ae, Te), Fe;
          }
          for (ie = r(ie); Te < Ae.length; Te++) (ft = D(ie, ae, Te, Ae[Te], Lt)) !== null && (e && ft.alternate !== null && ie.delete(ft.key === null ? Te : ft.key), ge = l(ft, ge, Te), Be === null ? Fe = ft : Be.sibling = ft, Be = ft);
          return e && ie.forEach(function(qt) {
            return t(ae, qt);
          }), He && Ar(ae, Te), Fe;
        }(k, w, S, $);
        if (fe(S)) {
          if (typeof (ee = fe(S)) != "function") throw Error(s(150));
          return function(ae, ge, Ae, Lt) {
            if (Ae == null) throw Error(s(151));
            for (var Fe = null, Be = null, ie = ge, Te = ge = 0, ft = null, Se = Ae.next(); ie !== null && !Se.done; Te++, Se = Ae.next()) {
              ie.index > Te ? (ft = ie, ie = null) : ft = ie.sibling;
              var qt = N(ae, ie, Se.value, Lt);
              if (qt === null) {
                ie === null && (ie = ft);
                break;
              }
              e && ie && qt.alternate === null && t(ae, ie), ge = l(qt, ge, Te), Be === null ? Fe = qt : Be.sibling = qt, Be = qt, ie = ft;
            }
            if (Se.done) return n(ae, ie), He && Ar(ae, Te), Fe;
            if (ie === null) {
              for (; !Se.done; Te++, Se = Ae.next()) (Se = L(ae, Se.value, Lt)) !== null && (ge = l(Se, ge, Te), Be === null ? Fe = Se : Be.sibling = Se, Be = Se);
              return He && Ar(ae, Te), Fe;
            }
            for (ie = r(ie); !Se.done; Te++, Se = Ae.next()) (Se = D(ie, ae, Te, Se.value, Lt)) !== null && (e && Se.alternate !== null && ie.delete(Se.key === null ? Te : Se.key), ge = l(Se, ge, Te), Be === null ? Fe = Se : Be.sibling = Se, Be = Se);
            return e && ie.forEach(function(zn) {
              return t(ae, zn);
            }), He && Ar(ae, Te), Fe;
          }(k, w, S = ee.call(S), $);
        }
        if (typeof S.then == "function") return G(k, w, So(S), $);
        if (S.$$typeof === F) return G(k, w, so(k, S), $);
        Eo(k, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, w !== null && w.tag === 6 ? (n(k, w.sibling), ($ = a(w, S)).return = k, k = $) : (n(k, w), ($ = Fi(S, k.mode, $)).return = k, k = $), u(k)) : n(k, w);
    }
    return function(k, w, S, $) {
      try {
        sl = 0;
        var ee = G(k, w, S, $);
        return wa = null, ee;
      } catch (ge) {
        if (ge === el || ge === fo) throw ge;
        var ae = Kt(29, ge, null, k.mode);
        return ae.lanes = $, ae.return = k, ae;
      }
    };
  }
  var ka = xd(!0), Cd = xd(!1), sn = J(null), Bn = null;
  function sr(e) {
    var t = e.alternate;
    le(wt, 1 & wt.current), le(sn, e), Bn === null && (t === null || ya.current !== null || t.memoizedState !== null) && (Bn = e);
  }
  function Pd(e) {
    if (e.tag === 22) {
      if (le(wt, wt.current), le(sn, e), Bn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Bn = e);
      }
    } else cr();
  }
  function cr() {
    le(wt, wt.current), le(sn, sn.current);
  }
  function Vn(e) {
    ne(sn), Bn === e && (Bn = null), ne(wt);
  }
  var wt = J(0);
  function xo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated) === null || n.data === "$?" || os(n))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (128 & t.flags) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function yu(e, t, n, r) {
    n = (n = n(r, t = e.memoizedState)) == null ? t : g({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vu = { enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Gt(), a = or(r);
    a.payload = t, n != null && (a.callback = n), (t = ir(e, a, r)) !== null && (Jt(t, e, r), nl(t, e, r));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Gt(), a = or(r);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), (t = ir(e, a, r)) !== null && (Jt(t, e, r), nl(t, e, r));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Gt(), r = or(n);
    r.tag = 2, t != null && (r.callback = t), (t = ir(e, r, n)) !== null && (Jt(t, e, n), nl(t, e, n));
  } };
  function Rd(e, t, n, r, a, l, u) {
    return typeof (e = e.stateNode).shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, u) : !t.prototype || !t.prototype.isPureReactComponent || !qa(n, r) || !qa(a, l);
  }
  function Ld(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vu.enqueueReplaceState(t, t.state, null);
  }
  function Vr(e, t) {
    var n = t;
    if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
    if (e = e.defaultProps) for (var a in n === t && (n = g({}, n)), e) n[a] === void 0 && (n[a] = e[a]);
    return n;
  }
  var Co = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") return void process.emit("uncaughtException", e);
    console.error(e);
  };
  function Td(e) {
    Co(e);
  }
  function _d(e) {
    console.error(e);
  }
  function zd(e) {
    Co(e);
  }
  function Po(e, t) {
    try {
      (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Nd(e, t, n) {
    try {
      (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function gu(e, t, n) {
    return (n = or(n)).tag = 3, n.payload = { element: null }, n.callback = function() {
      Po(e, t);
    }, n;
  }
  function Dd(e) {
    return (e = or(e)).tag = 3, e;
  }
  function Od(e, t, n, r) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = r.value;
      e.payload = function() {
        return a(l);
      }, e.callback = function() {
        Nd(t, n, r);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Nd(t, n, r), typeof a != "function" && (vr === null ? vr = /* @__PURE__ */ new Set([this]) : vr.add(this));
      var i = r.stack;
      this.componentDidCatch(r.value, { componentStack: i !== null ? i : "" });
    });
  }
  var Md = Error(s(461)), Et = !1;
  function Nt(e, t, n, r) {
    t.child = e === null ? Cd(t, null, n, r) : ka(t, e.child, n, r);
  }
  function Ad(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    if ("ref" in r) {
      var u = {};
      for (var i in r) i !== "ref" && (u[i] = r[i]);
    } else u = r;
    return Ur(t), r = nu(e, t, n, u, l, a), i = ru(), e === null || Et ? (He && i && $i(t), t.flags |= 1, Nt(e, t, r, a), t.child) : (au(e, t, a), Wn(e, t, a));
  }
  function Fd(e, t, n, r, a) {
    if (e === null) {
      var l = n.type;
      return typeof l != "function" || Ai(l) || l.defaultProps !== void 0 || n.compare !== null ? ((e = lo(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, jd(e, t, l, r, a));
    }
    if (l = e.child, !Pu(e, a)) {
      var u = l.memoizedProps;
      if ((n = (n = n.compare) !== null ? n : qa)(u, r) && e.ref === t.ref) return Wn(e, t, a);
    }
    return t.flags |= 1, (e = jn(l, r)).ref = t.ref, e.return = t, t.child = e;
  }
  function jd(e, t, n, r, a) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (qa(l, r) && e.ref === t.ref) {
        if (Et = !1, t.pendingProps = r = l, !Pu(e, a)) return t.lanes = e.lanes, Wn(e, t, a);
        131072 & e.flags && (Et = !0);
      }
    }
    return bu(e, t, n, r, a);
  }
  function $d(e, t, n) {
    var r = t.pendingProps, a = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if (128 & t.flags) {
        if (r = l !== null ? l.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; ) l = l | a.lanes | a.childLanes, a = a.sibling;
          t.childLanes = l & ~r;
        } else t.childLanes = 0, t.child = null;
        return Ud(e, t, r, n);
      }
      if (!(536870912 & n)) return t.lanes = t.childLanes = 536870912, Ud(e, t, l !== null ? l.baseLanes | n : n, n);
      t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && co(0, l !== null ? l.cachePool : null), l !== null ? jc(t, l) : Zi(), Pd(t);
    } else l !== null ? (co(0, l.cachePool), jc(t, l), cr(), t.memoizedState = null) : (e !== null && co(0, null), Zi(), cr());
    return Nt(e, t, a, n), t.child;
  }
  function Ud(e, t, n, r) {
    var a = Qi();
    return a = a === null ? null : { parent: bt._currentValue, pool: a }, t.memoizedState = { baseLanes: n, cachePool: a }, e !== null && co(0, null), Zi(), Pd(t), e !== null && Ga(e, t, r, !0), null;
  }
  function Ro(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      e !== null && e.ref === n || (t.flags |= 4194816);
    }
  }
  function bu(e, t, n, r, a) {
    return Ur(t), n = nu(e, t, n, r, void 0, a), r = ru(), e === null || Et ? (He && r && $i(t), t.flags |= 1, Nt(e, t, n, a), t.child) : (au(e, t, a), Wn(e, t, a));
  }
  function Id(e, t, n, r, a, l) {
    return Ur(t), t.updateQueue = null, n = Uc(t, r, n, a), $c(e), r = ru(), e === null || Et ? (He && r && $i(t), t.flags |= 1, Nt(e, t, n, l), t.child) : (au(e, t, l), Wn(e, t, l));
  }
  function Hd(e, t, n, r, a) {
    if (Ur(t), t.stateNode === null) {
      var l = fa, u = n.contextType;
      typeof u == "object" && u !== null && (l = zt(u)), l = new n(r, l), t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = vu, t.stateNode = l, l._reactInternals = t, (l = t.stateNode).props = r, l.state = t.memoizedState, l.refs = {}, Ki(t), u = n.contextType, l.context = typeof u == "object" && u !== null ? zt(u) : fa, l.state = t.memoizedState, typeof (u = n.getDerivedStateFromProps) == "function" && (yu(t, n, u, r), l.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (u = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), u !== l.state && vu.enqueueReplaceState(l, l.state, null), al(t, r, l, a), rl(), l.state = t.memoizedState), typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      l = t.stateNode;
      var i = t.memoizedProps, d = Vr(n, i);
      l.props = d;
      var h = l.context, R = n.contextType;
      u = fa, typeof R == "object" && R !== null && (u = zt(R));
      var L = n.getDerivedStateFromProps;
      R = typeof L == "function" || typeof l.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, R || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (i || h !== u) && Ld(t, l, r, u), lr = !1;
      var N = t.memoizedState;
      l.state = N, al(t, r, l, a), rl(), h = t.memoizedState, i || N !== h || lr ? (typeof L == "function" && (yu(t, n, L, r), h = t.memoizedState), (d = lr || Rd(t, n, d, r, N, h, u)) ? (R || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = u, r = d) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      l = t.stateNode, Xi(e, t), R = Vr(n, u = t.memoizedProps), l.props = R, L = t.pendingProps, N = l.context, h = n.contextType, d = fa, typeof h == "object" && h !== null && (d = zt(h)), (h = typeof (i = n.getDerivedStateFromProps) == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== L || N !== d) && Ld(t, l, r, d), lr = !1, N = t.memoizedState, l.state = N, al(t, r, l, a), rl();
      var D = t.memoizedState;
      u !== L || N !== D || lr || e !== null && e.dependencies !== null && uo(e.dependencies) ? (typeof i == "function" && (yu(t, n, i, r), D = t.memoizedState), (R = lr || Rd(t, n, R, r, N, D, d) || e !== null && e.dependencies !== null && uo(e.dependencies)) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, D, d), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, D, d)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = D), l.props = r, l.state = D, l.context = d, r = R) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return l = r, Ro(e, t), r = !!(128 & t.flags), l || r ? (l = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : l.render(), t.flags |= 1, e !== null && r ? (t.child = ka(t, e.child, null, a), t.child = ka(t, null, n, a)) : Nt(e, t, n, a), t.memoizedState = l.state, e = t.child) : e = Wn(e, t, a), e;
  }
  function Bd(e, t, n, r) {
    return Ka(), t.flags |= 256, Nt(e, t, n, r), t.child;
  }
  var wu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ku(e) {
    return { baseLanes: e, cachePool: _c() };
  }
  function Su(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= fn), e;
  }
  function Vd(e, t, n) {
    var r, a = t.pendingProps, l = !1, u = !!(128 & t.flags);
    if ((r = u) || (r = (e === null || e.memoizedState !== null) && !!(2 & wt.current)), r && (l = !0, t.flags &= -129), r = !!(32 & t.flags), t.flags &= -33, e === null) {
      if (He) {
        if (l ? sr(t) : cr(), He) {
          var i, d = ot;
          if (i = d) {
            e: {
              for (i = d, d = Ln; i.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if ((i = xn(i.nextSibling)) === null) {
                  d = null;
                  break e;
                }
              }
              d = i;
            }
            d !== null ? (t.memoizedState = { dehydrated: d, treeContext: Mr !== null ? { id: Rn, overflow: $n } : null, retryLane: 536870912, hydrationErrors: null }, (i = Kt(18, null, null, 0)).stateNode = d, i.return = t, t.child = i, jt = t, ot = null, i = !0) : i = !1;
          }
          i || jr(t);
        }
        if ((d = t.memoizedState) !== null && (d = d.dehydrated) !== null) return os(d) ? t.lanes = 32 : t.lanes = 536870912, null;
        Vn(t);
      }
      return d = a.children, a = a.fallback, l ? (cr(), d = Lo({ mode: "hidden", children: d }, l = t.mode), a = Or(a, l, n, null), d.return = t, a.return = t, d.sibling = a, t.child = d, (l = t.child).memoizedState = ku(n), l.childLanes = Su(e, r, n), t.memoizedState = wu, a) : (sr(t), Eu(t, d));
    }
    if ((i = e.memoizedState) !== null && (d = i.dehydrated) !== null) {
      if (u) 256 & t.flags ? (sr(t), t.flags &= -257, t = xu(e, t, n)) : t.memoizedState !== null ? (cr(), t.child = e.child, t.flags |= 128, t = null) : (cr(), l = a.fallback, d = t.mode, a = Lo({ mode: "visible", children: a.children }, d), (l = Or(l, d, n, null)).flags |= 2, a.return = t, l.return = t, a.sibling = l, t.child = a, ka(t, e.child, null, n), (a = t.child).memoizedState = ku(n), a.childLanes = Su(e, r, n), t.memoizedState = wu, t = l);
      else if (sr(t), os(d)) {
        if (r = d.nextSibling && d.nextSibling.dataset) var h = r.dgst;
        r = h, (a = Error(s(419))).stack = "", a.digest = r, Xa({ value: a, source: null, stack: null }), t = xu(e, t, n);
      } else if (Et || Ga(e, t, n, !1), r = !!(n & e.childLanes), Et || r) {
        if ((r = et) !== null && (a = (a = 42 & (a = n & -n) ? 1 : _t(a)) & (r.suspendedLanes | n) ? 0 : a) !== 0 && a !== i.retryLane) throw i.retryLane = a, da(e, a), Jt(r, e, a), Md;
        d.data === "$?" || Bu(), t = xu(e, t, n);
      } else d.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = i.treeContext, ot = xn(d.nextSibling), jt = t, He = !0, Fr = null, Ln = !1, e !== null && (on[un++] = Rn, on[un++] = $n, on[un++] = Mr, Rn = e.id, $n = e.overflow, Mr = t), (t = Eu(t, a.children)).flags |= 4096);
      return t;
    }
    return l ? (cr(), l = a.fallback, d = t.mode, h = (i = e.child).sibling, (a = jn(i, { mode: "hidden", children: a.children })).subtreeFlags = 65011712 & i.subtreeFlags, h !== null ? l = jn(h, l) : (l = Or(l, d, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, (d = e.child.memoizedState) === null ? d = ku(n) : ((i = d.cachePool) !== null ? (h = bt._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = _c(), d = { baseLanes: d.baseLanes | n, cachePool: i }), l.memoizedState = d, l.childLanes = Su(e, r, n), t.memoizedState = wu, a) : (sr(t), e = (n = e.child).sibling, (n = jn(n, { mode: "visible", children: a.children })).return = t, n.sibling = null, e !== null && ((r = t.deletions) === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Eu(e, t) {
    return (t = Lo({ mode: "visible", children: t }, e.mode)).return = e, e.child = t;
  }
  function Lo(e, t) {
    return (e = Kt(22, e, null, t)).lanes = 0, e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, e;
  }
  function xu(e, t, n) {
    return ka(t, e.child, null, n), (e = Eu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e;
  }
  function Wd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Bi(e.return, t, n);
  }
  function Cu(e, t, n, r, a) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a);
  }
  function qd(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, l = r.tail;
    if (Nt(e, t, r.children, n), 2 & (r = wt.current)) r = 1 & r | 2, t.flags |= 128;
    else {
      if (e !== null && 128 & e.flags) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wd(e, n, t);
        else if (e.tag === 19) Wd(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    switch (le(wt, r), a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) (e = n.alternate) !== null && xo(e) === null && (a = n), n = n.sibling;
        (n = a) === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Cu(t, !1, a, n, l);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if ((e = a.alternate) !== null && xo(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Cu(t, !0, n, null, l);
        break;
      case "together":
        Cu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), yr |= t.lanes, !(n & t.childLanes) && (e === null || (Ga(e, t, n, !1), !(n & t.childLanes))))
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (n = jn(e = t.child, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, (n = n.sibling = jn(e, e.pendingProps)).return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Pu(e, t) {
    return !!(e.lanes & t) || !((e = e.dependencies) === null || !uo(e));
  }
  function Qd(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) Et = !0;
    else {
      if (!(Pu(e, n) || 128 & t.flags)) return Et = !1, function(i, d, h) {
        switch (d.tag) {
          case 3:
            We(d, d.stateNode.containerInfo), ar(0, bt, i.memoizedState.cache), Ka();
            break;
          case 27:
          case 5:
            Mt(d);
            break;
          case 4:
            We(d, d.stateNode.containerInfo);
            break;
          case 10:
            ar(0, d.type, d.memoizedProps.value);
            break;
          case 13:
            var R = d.memoizedState;
            if (R !== null) return R.dehydrated !== null ? (sr(d), d.flags |= 128, null) : h & d.child.childLanes ? Vd(i, d, h) : (sr(d), (i = Wn(i, d, h)) !== null ? i.sibling : null);
            sr(d);
            break;
          case 19:
            var L = !!(128 & i.flags);
            if ((R = !!(h & d.childLanes)) || (Ga(i, d, h, !1), R = !!(h & d.childLanes)), L) {
              if (R) return qd(i, d, h);
              d.flags |= 128;
            }
            if ((L = d.memoizedState) !== null && (L.rendering = null, L.tail = null, L.lastEffect = null), le(wt, wt.current), R) break;
            return null;
          case 22:
          case 23:
            return d.lanes = 0, $d(i, d, h);
          case 24:
            ar(0, bt, i.memoizedState.cache);
        }
        return Wn(i, d, h);
      }(e, t, n);
      Et = !!(131072 & e.flags);
    }
    else Et = !1, He && 1048576 & t.flags && Ec(t, io, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType, a = r._init;
          if (r = a(r._payload), t.type = r, typeof r != "function") {
            if (r != null) {
              if ((a = r.$$typeof) === j) {
                t.tag = 11, t = Ad(null, t, r, e, n);
                break e;
              }
              if (a === H) {
                t.tag = 14, t = Fd(null, t, r, e, n);
                break e;
              }
            }
            throw t = je(r) || r, Error(s(306, t, ""));
          }
          Ai(r) ? (e = Vr(r, e), t.tag = 1, t = Hd(null, t, r, e, n)) : (t.tag = 0, t = bu(null, t, r, e, n));
        }
        return t;
      case 0:
        return bu(e, t, t.type, t.pendingProps, n);
      case 1:
        return Hd(e, t, r = t.type, a = Vr(r, t.pendingProps), n);
      case 3:
        e: {
          if (We(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
          r = t.pendingProps;
          var l = t.memoizedState;
          a = l.element, Xi(e, t), al(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.cache, ar(0, bt, r), r !== l.cache && Vi(t, [bt], n, !0), rl(), r = u.element, l.isDehydrated) {
            if (l = { element: r, isDehydrated: !1, cache: u.cache }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
              t = Bd(e, t, r, n);
              break e;
            }
            if (r !== a) {
              Xa(a = an(Error(s(424)), t)), t = Bd(e, t, r, n);
              break e;
            }
            for ((e = t.stateNode.containerInfo).nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = xn(e.firstChild), jt = t, He = !0, Fr = null, Ln = !0, n = Cd(t, null, r, n), t.child = n; n; ) n.flags = -3 & n.flags | 4096, n = n.sibling;
          } else {
            if (Ka(), r === a) {
              t = Wn(e, t, n);
              break e;
            }
            Nt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ro(e, t), e === null ? (n = Jf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : He || (n = t.type, e = t.pendingProps, (r = Ho(Ve.current).createElement(n))[de] = t, r[ye] = e, Rt(r, n, e), Ie(r), t.stateNode = r) : t.memoizedState = Jf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Mt(t), e === null && He && (r = t.stateNode = Kf(t.type, t.pendingProps, Ve.current), jt = t, Ln = !0, a = ot, wr(t.type) ? (is = a, ot = xn(r.firstChild)) : ot = a), Nt(e, t, t.pendingProps.children, n), Ro(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((a = r = ot) && ((r = function(i, d, h, R) {
          for (; i.nodeType === 1; ) {
            var L = h;
            if (i.nodeName.toLowerCase() !== d.toLowerCase()) {
              if (!R && (i.nodeName !== "INPUT" || i.type !== "hidden")) break;
            } else if (R) {
              if (!i[st]) switch (d) {
                case "meta":
                  if (!i.hasAttribute("itemprop")) break;
                  return i;
                case "link":
                  if ((N = i.getAttribute("rel")) === "stylesheet" && i.hasAttribute("data-precedence") || N !== L.rel || i.getAttribute("href") !== (L.href == null || L.href === "" ? null : L.href) || i.getAttribute("crossorigin") !== (L.crossOrigin == null ? null : L.crossOrigin) || i.getAttribute("title") !== (L.title == null ? null : L.title)) break;
                  return i;
                case "style":
                  if (i.hasAttribute("data-precedence")) break;
                  return i;
                case "script":
                  if (((N = i.getAttribute("src")) !== (L.src == null ? null : L.src) || i.getAttribute("type") !== (L.type == null ? null : L.type) || i.getAttribute("crossorigin") !== (L.crossOrigin == null ? null : L.crossOrigin)) && N && i.hasAttribute("async") && !i.hasAttribute("itemprop")) break;
                  return i;
                default:
                  return i;
              }
            } else {
              if (d !== "input" || i.type !== "hidden") return i;
              var N = L.name == null ? null : "" + L.name;
              if (L.type === "hidden" && i.getAttribute("name") === N) return i;
            }
            if ((i = xn(i.nextSibling)) === null) break;
          }
          return null;
        }(r, t.type, t.pendingProps, Ln)) !== null ? (t.stateNode = r, jt = t, ot = xn(r.firstChild), Ln = !1, a = !0) : a = !1), a || jr(t)), Mt(t), a = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, r = l.children, rs(a, l) ? r = null : u !== null && rs(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = nu(e, t, sm, null, null, n), Pl._currentValue = a), Ro(e, t), Nt(e, t, r, n), t.child;
      case 6:
        return e === null && He && ((e = n = ot) && ((n = function(i, d, h) {
          if (d === "") return null;
          for (; i.nodeType !== 3; )
            if ((i.nodeType !== 1 || i.nodeName !== "INPUT" || i.type !== "hidden") && !h || (i = xn(i.nextSibling)) === null) return null;
          return i;
        }(n, t.pendingProps, Ln)) !== null ? (t.stateNode = n, jt = t, ot = null, e = !0) : e = !1), e || jr(t)), null;
      case 13:
        return Vd(e, t, n);
      case 4:
        return We(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ka(t, null, r, n) : Nt(e, t, r, n), t.child;
      case 11:
        return Ad(e, t, t.type, t.pendingProps, n);
      case 7:
        return Nt(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return Nt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return r = t.pendingProps, ar(0, t.type, r.value), Nt(e, t, r.children, n), t.child;
      case 9:
        return a = t.type._context, r = t.pendingProps.children, Ur(t), r = r(a = zt(a)), t.flags |= 1, Nt(e, t, r, n), t.child;
      case 14:
        return Fd(e, t, t.type, t.pendingProps, n);
      case 15:
        return jd(e, t, t.type, t.pendingProps, n);
      case 19:
        return qd(e, t, n);
      case 31:
        return r = t.pendingProps, n = t.mode, r = { mode: r.mode, children: r.children }, e === null ? ((n = Lo(r, n)).ref = t.ref, t.child = n, n.return = t, t = n) : ((n = jn(e.child, r)).ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return $d(e, t, n);
      case 24:
        return Ur(t), r = zt(bt), e === null ? ((a = Qi()) === null && (a = et, l = Wi(), a.pooledCache = l, l.refCount++, l !== null && (a.pooledCacheLanes |= n), a = l), t.memoizedState = { parent: r, cache: a }, Ki(t), ar(0, bt, a)) : (e.lanes & n && (Xi(e, t), al(t, null, null, n), rl()), a = e.memoizedState, l = t.memoizedState, a.parent !== r ? (a = { parent: r, cache: r }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ar(0, bt, r)) : (r = l.cache, ar(0, bt, r), r !== a.cache && Vi(t, [bt], n, !0))), Nt(e, t, t.pendingProps.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function qn(e) {
    e.flags |= 4;
  }
  function Yd(e, t) {
    if (t.type !== "stylesheet" || 4 & t.state.loading) e.flags &= -16777217;
    else if (e.flags |= 16777216, !rp(t)) {
      if ((t = sn.current) !== null && ((4194048 & Ne) === Ne ? Bn !== null : (62914560 & Ne) !== Ne && !(536870912 & Ne) || t !== Bn)) throw tl = Yi, zc;
      e.flags |= 8192;
    }
  }
  function To(e, t) {
    t !== null && (e.flags |= 4), 16384 & e.flags && (t = e.tag !== 22 ? pe() : 536870912, e.lanes |= t, Ca |= t);
  }
  function dl(e, t) {
    if (!He) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function ym(e, t, n) {
    var r = t.pendingProps;
    switch (Ui(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
      case 1:
        return it(t), null;
      case 3:
        return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), In(bt), De(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), e !== null && e.child !== null || (Ya(t) ? qn(t) : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, Pc())), it(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (qn(t), n !== null ? (it(t), Yd(t, n)) : (it(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (qn(t), it(t), Yd(t, n)) : (it(t), t.flags &= -16777217) : (e.memoizedProps !== r && qn(t), it(t), t.flags &= -16777217), null;
      case 27:
        Tr(t), n = Ve.current;
        var a = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== r && qn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return it(t), null;
          }
          e = be.current, Ya(t) ? xc(t) : (e = Kf(a, r, n), t.stateNode = e, qn(t));
        }
        return it(t), null;
      case 5:
        if (Tr(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && qn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return it(t), null;
          }
          if (e = be.current, Ya(t)) xc(t);
          else {
            switch (a = Ho(Ve.current), e) {
              case 1:
                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = a.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    (e = a.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof r.is == "string" ? a.createElement("select", { is: r.is }) : a.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                    break;
                  default:
                    e = typeof r.is == "string" ? a.createElement(n, { is: r.is }) : a.createElement(n);
                }
            }
            e[de] = t, e[ye] = r;
            e: for (a = t.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === t) break e;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === t) break e;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
            t.stateNode = e;
            e: switch (Rt(e, n, r), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && qn(t);
          }
        }
        return it(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && qn(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (e = Ve.current, Ya(t)) {
            if (e = t.stateNode, n = t.memoizedProps, r = null, (a = jt) !== null) switch (a.tag) {
              case 27:
              case 5:
                r = a.memoizedProps;
            }
            e[de] = t, (e = !!(e.nodeValue === n || r !== null && r.suppressHydrationWarning === !0 || Hf(e.nodeValue, n))) || jr(t);
          } else (e = Ho(e).createTextNode(r))[de] = t, t.stateNode = e;
        }
        return it(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Ya(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (!(a = (a = t.memoizedState) !== null ? a.dehydrated : null)) throw Error(s(317));
              a[de] = t;
            } else Ka(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
            it(t), a = !1;
          } else a = Pc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a) return 256 & t.flags ? (Vn(t), t) : (Vn(t), null);
        }
        if (Vn(t), 128 & t.flags) return t.lanes = n, t;
        if (n = r !== null, e = e !== null && e.memoizedState !== null, n) {
          a = null, (r = t.child).alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool);
          var l = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), To(t, t.updateQueue), it(t), null;
      case 4:
        return De(), e === null && Ju(t.stateNode.containerInfo), it(t), null;
      case 10:
        return In(t.type), it(t), null;
      case 19:
        if (ne(wt), (a = t.memoizedState) === null) return it(t), null;
        if (r = !!(128 & t.flags), (l = a.rendering) === null) if (r) dl(a, !1);
        else {
          if (ut !== 0 || e !== null && 128 & e.flags) for (e = t.child; e !== null; ) {
            if ((l = xo(e)) !== null) {
              for (t.flags |= 128, dl(a, !1), e = l.updateQueue, t.updateQueue = e, To(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) Sc(n, e), n = n.sibling;
              return le(wt, 1 & wt.current | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && ht() > No && (t.flags |= 128, r = !0, dl(a, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if ((e = xo(l)) !== null) {
            if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, To(t, e), dl(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !He) return it(t), null;
          } else 2 * ht() - a.renderingStartTime > No && n !== 536870912 && (t.flags |= 128, r = !0, dl(a, !1), t.lanes = 4194304);
          a.isBackwards ? (l.sibling = t.child, t.child = l) : ((e = a.last) !== null ? e.sibling = l : t.child = l, a.last = l);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ht(), t.sibling = null, e = wt.current, le(wt, r ? 1 & e | 2 : 1 & e), t) : (it(t), null);
      case 22:
      case 23:
        return Vn(t), eu(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 536870912 & n && !(128 & t.flags) && (it(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : it(t), (n = t.updateQueue) !== null && To(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && ne(ma), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), In(bt), it(t), null;
      case 25:
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function vm(e, t) {
    switch (Ui(t), t.tag) {
      case 1:
        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
      case 3:
        return In(bt), De(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Tr(t), null;
      case 13:
        if (Vn(t), (e = t.memoizedState) !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Ka();
        }
        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
      case 19:
        return ne(wt), null;
      case 4:
        return De(), null;
      case 10:
        return In(t.type), null;
      case 22:
      case 23:
        return Vn(t), eu(), e !== null && ne(ma), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
      case 24:
        return In(bt), null;
      default:
        return null;
    }
  }
  function Kd(e, t) {
    switch (Ui(t), t.tag) {
      case 3:
        In(bt), De();
        break;
      case 26:
      case 27:
      case 5:
        Tr(t);
        break;
      case 4:
        De();
        break;
      case 13:
        Vn(t);
        break;
      case 19:
        ne(wt);
        break;
      case 10:
        In(t.type);
        break;
      case 22:
      case 23:
        Vn(t), eu(), e !== null && ne(ma);
        break;
      case 24:
        In(bt);
    }
  }
  function fl(e, t) {
    try {
      var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var a = r.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var l = n.create, u = n.inst;
            r = l(), u.destroy = r;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (i) {
      Je(t, t.return, i);
    }
  }
  function dr(e, t, n) {
    try {
      var r = t.updateQueue, a = r !== null ? r.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        r = l;
        do {
          if ((r.tag & e) === e) {
            var u = r.inst, i = u.destroy;
            if (i !== void 0) {
              u.destroy = void 0, a = t;
              var d = n, h = i;
              try {
                h();
              } catch (R) {
                Je(a, d, R);
              }
            }
          }
          r = r.next;
        } while (r !== l);
      }
    } catch (R) {
      Je(t, t.return, R);
    }
  }
  function Xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Fc(t, n);
      } catch (r) {
        Je(e, e.return, r);
      }
    }
  }
  function Gd(e, t, n) {
    n.props = Vr(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (r) {
      Je(e, t, r);
    }
  }
  function pl(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
      }
    } catch (a) {
      Je(e, t, a);
    }
  }
  function Tn(e, t) {
    var n = e.ref, r = e.refCleanup;
    if (n !== null) if (typeof r == "function") try {
      r();
    } catch (a) {
      Je(e, t, a);
    } finally {
      e.refCleanup = null, (e = e.alternate) != null && (e.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (a) {
      Je(e, t, a);
    }
    else n.current = null;
  }
  function Jd(e) {
    var t = e.type, n = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (a) {
      Je(e, e.return, a);
    }
  }
  function Ru(e, t, n) {
    try {
      var r = e.stateNode;
      (function(a, l, u, i) {
        switch (l) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "input":
            var d = null, h = null, R = null, L = null, N = null, D = null, G = null;
            for (S in u) {
              var k = u[S];
              if (u.hasOwnProperty(S) && k != null) switch (S) {
                case "checked":
                case "value":
                  break;
                case "defaultValue":
                  N = k;
                default:
                  i.hasOwnProperty(S) || Xe(a, l, S, null, i, k);
              }
            }
            for (var w in i) {
              var S = i[w];
              if (k = u[w], i.hasOwnProperty(w) && (S != null || k != null)) switch (w) {
                case "type":
                  h = S;
                  break;
                case "name":
                  d = S;
                  break;
                case "checked":
                  D = S;
                  break;
                case "defaultChecked":
                  G = S;
                  break;
                case "value":
                  R = S;
                  break;
                case "defaultValue":
                  L = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(s(137, l));
                  break;
                default:
                  S !== k && Xe(a, l, w, S, i, k);
              }
            }
            return void hi(a, R, L, N, D, G, h, d);
          case "select":
            for (h in S = R = L = w = null, u) if (N = u[h], u.hasOwnProperty(h) && N != null) switch (h) {
              case "value":
                break;
              case "multiple":
                S = N;
              default:
                i.hasOwnProperty(h) || Xe(a, l, h, null, i, N);
            }
            for (d in i) if (h = i[d], N = u[d], i.hasOwnProperty(d) && (h != null || N != null)) switch (d) {
              case "value":
                w = h;
                break;
              case "defaultValue":
                L = h;
                break;
              case "multiple":
                R = h;
              default:
                h !== N && Xe(a, l, d, h, i, N);
            }
            return l = L, u = R, i = S, void (w != null ? ra(a, !!u, w, !1) : !!i != !!u && (l != null ? ra(a, !!u, l, !0) : ra(a, !!u, u ? [] : "", !1)));
          case "textarea":
            for (L in S = w = null, u) if (d = u[L], u.hasOwnProperty(L) && d != null && !i.hasOwnProperty(L)) switch (L) {
              case "value":
              case "children":
                break;
              default:
                Xe(a, l, L, null, i, d);
            }
            for (R in i) if (d = i[R], h = u[R], i.hasOwnProperty(R) && (d != null || h != null)) switch (R) {
              case "value":
                w = d;
                break;
              case "defaultValue":
                S = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(s(91));
                break;
              default:
                d !== h && Xe(a, l, R, d, i, h);
            }
            return void Us(a, w, S);
          case "option":
            for (var $ in u) w = u[$], u.hasOwnProperty($) && w != null && !i.hasOwnProperty($) && ($ === "selected" ? a.selected = !1 : Xe(a, l, $, null, i, w));
            for (N in i) w = i[N], S = u[N], i.hasOwnProperty(N) && w !== S && (w != null || S != null) && (N === "selected" ? a.selected = w && typeof w != "function" && typeof w != "symbol" : Xe(a, l, N, w, i, S));
            return;
          case "img":
          case "link":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
          case "menuitem":
            for (var ee in u) w = u[ee], u.hasOwnProperty(ee) && w != null && !i.hasOwnProperty(ee) && Xe(a, l, ee, null, i, w);
            for (D in i) if (w = i[D], S = u[D], i.hasOwnProperty(D) && w !== S && (w != null || S != null)) switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(137, l));
                break;
              default:
                Xe(a, l, D, w, i, S);
            }
            return;
          default:
            if (yi(l)) {
              for (var ae in u) w = u[ae], u.hasOwnProperty(ae) && w !== void 0 && !i.hasOwnProperty(ae) && es(a, l, ae, void 0, i, w);
              for (G in i) w = i[G], S = u[G], !i.hasOwnProperty(G) || w === S || w === void 0 && S === void 0 || es(a, l, G, w, i, S);
              return;
            }
        }
        for (var ge in u) w = u[ge], u.hasOwnProperty(ge) && w != null && !i.hasOwnProperty(ge) && Xe(a, l, ge, null, i, w);
        for (k in i) w = i[k], S = u[k], !i.hasOwnProperty(k) || w === S || w == null && S == null || Xe(a, l, k, w, i, S);
      })(r, e.type, n, t), r[ye] = t;
    } catch (a) {
      Je(e, e.return, a);
    }
  }
  function Zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wr(e.type) || e.tag === 4;
  }
  function Lu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && wr(e.type) || 2 & e.flags || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function Tu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).appendChild(e), (n = n._reactRootContainer) != null || t.onclick !== null || (t.onclick = Io));
    else if (r !== 4 && (r === 27 && wr(e.type) && (n = e.stateNode, t = null), (e = e.child) !== null)) for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), e = e.sibling;
  }
  function _o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (r === 27 && wr(e.type) && (n = e.stateNode), (e = e.child) !== null)) for (_o(e, t, n), e = e.sibling; e !== null; ) _o(e, t, n), e = e.sibling;
  }
  function ef(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      Rt(t, r, n), t[de] = e, t[ye] = n;
    } catch (l) {
      Je(e, e.return, l);
    }
  }
  var Qn = !1, dt = !1, _u = !1, tf = typeof WeakSet == "function" ? WeakSet : Set, xt = null;
  function nf(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fr(e, n), 4 & r && fl(5, n);
        break;
      case 1:
        if (fr(e, n), 4 & r) if (e = n.stateNode, t === null) try {
          e.componentDidMount();
        } catch (u) {
          Je(n, n.return, u);
        }
        else {
          var a = Vr(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (u) {
            Je(n, n.return, u);
          }
        }
        64 & r && Xd(n), 512 & r && pl(n, n.return);
        break;
      case 3:
        if (fr(e, n), 64 & r && (e = n.updateQueue) !== null) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
            case 1:
              t = n.child.stateNode;
          }
          try {
            Fc(e, t);
          } catch (u) {
            Je(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && 4 & r && ef(n);
      case 26:
      case 5:
        fr(e, n), t === null && 4 & r && Jd(n), 512 & r && pl(n, n.return);
        break;
      case 12:
        fr(e, n);
        break;
      case 13:
        fr(e, n), 4 & r && lf(e, n), 64 & r && (e = n.memoizedState) !== null && (e = e.dehydrated) !== null && function(u, i) {
          var d = u.ownerDocument;
          if (u.data !== "$?" || d.readyState === "complete") i();
          else {
            var h = function() {
              i(), d.removeEventListener("DOMContentLoaded", h);
            };
            d.addEventListener("DOMContentLoaded", h), u._reactRetry = h;
          }
        }(e, n = xm.bind(null, n));
        break;
      case 22:
        if (!(r = n.memoizedState !== null || Qn)) {
          t = t !== null && t.memoizedState !== null || dt, a = Qn;
          var l = dt;
          Qn = r, (dt = t) && !l ? pr(e, n, !!(8772 & n.subtreeFlags)) : fr(e, n), Qn = a, dt = l;
        }
        break;
      case 30:
        break;
      default:
        fr(e, n);
    }
  }
  function rf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, rf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode) !== null && qe(t), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, Vt = !1;
  function Yn(e, t, n) {
    for (n = n.child; n !== null; ) af(e, t, n), n = n.sibling;
  }
  function af(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
      Ct.onCommitFiberUnmount(Gn, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        dt || Tn(n, t), Yn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
        break;
      case 27:
        dt || Tn(n, t);
        var r = at, a = Vt;
        wr(n.type) && (at = n.stateNode, Vt = !1), Yn(e, t, n), Sl(n.stateNode), at = r, Vt = a;
        break;
      case 5:
        dt || Tn(n, t);
      case 6:
        if (r = at, a = Vt, at = null, Yn(e, t, n), Vt = a, (at = r) !== null) if (Vt) try {
          (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(n.stateNode);
        } catch (l) {
          Je(n, t, l);
        }
        else try {
          at.removeChild(n.stateNode);
        } catch (l) {
          Je(n, t, l);
        }
        break;
      case 18:
        at !== null && (Vt ? (Qf((e = at).nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), _l(e)) : Qf(at, n.stateNode));
        break;
      case 4:
        r = at, a = Vt, at = n.stateNode.containerInfo, Vt = !0, Yn(e, t, n), at = r, Vt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        dt || dr(2, n, t), dt || dr(4, n, t), Yn(e, t, n);
        break;
      case 1:
        dt || (Tn(n, t), typeof (r = n.stateNode).componentWillUnmount == "function" && Gd(n, t, r)), Yn(e, t, n);
        break;
      case 21:
        Yn(e, t, n);
        break;
      case 22:
        dt = (r = dt) || n.memoizedState !== null, Yn(e, t, n), dt = r;
        break;
      default:
        Yn(e, t, n);
    }
  }
  function lf(e, t) {
    if (t.memoizedState === null && (e = t.alternate) !== null && (e = e.memoizedState) !== null && (e = e.dehydrated) !== null) try {
      _l(e);
    } catch (n) {
      Je(t, t.return, n);
    }
  }
  function zu(e, t) {
    var n = function(r) {
      switch (r.tag) {
        case 13:
        case 19:
          var a = r.stateNode;
          return a === null && (a = r.stateNode = new tf()), a;
        case 22:
          return (a = (r = r.stateNode)._retryCache) === null && (a = r._retryCache = new tf()), a;
        default:
          throw Error(s(435, r.tag));
      }
    }(e);
    t.forEach(function(r) {
      var a = Cm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
  function cn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r], l = e, u = t, i = u;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (wr(i.type)) {
              at = i.stateNode, Vt = !1;
              break e;
            }
            break;
          case 5:
            at = i.stateNode, Vt = !1;
            break e;
          case 3:
          case 4:
            at = i.stateNode.containerInfo, Vt = !0;
            break e;
        }
        i = i.return;
      }
      if (at === null) throw Error(s(160));
      af(l, u, a), at = null, Vt = !1, (l = a.alternate) !== null && (l.return = null), a.return = null;
    }
    if (13878 & t.subtreeFlags) for (t = t.child; t !== null; ) of(t, e), t = t.sibling;
  }
  var En = null;
  function of(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(t, e), dn(e), 4 & r && (dr(3, e, e.return), fl(3, e), dr(5, e, e.return));
        break;
      case 1:
        cn(t, e), dn(e), 512 & r && (dt || n === null || Tn(n, n.return)), 64 & r && Qn && (e = e.updateQueue) !== null && (r = e.callbacks) !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r));
        break;
      case 26:
        var a = En;
        if (cn(t, e), dn(e), 512 & r && (dt || n === null || Tn(n, n.return)), 4 & r) {
          var l = n !== null ? n.memoizedState : null;
          if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
            e: {
              r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
              t: switch (r) {
                case "title":
                  (!(l = a.getElementsByTagName("title")[0]) || l[st] || l[de] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = a.createElement(r), a.head.insertBefore(l, a.querySelector("head > title"))), Rt(l, r, n), l[de] = e, Ie(l), r = l;
                  break e;
                case "link":
                  var u = tp("link", "href", a).get(r + (n.href || ""));
                  if (u) {
                    for (var i = 0; i < u.length; i++) if ((l = u[i]).getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      u.splice(i, 1);
                      break t;
                    }
                  }
                  Rt(l = a.createElement(r), r, n), a.head.appendChild(l);
                  break;
                case "meta":
                  if (u = tp("meta", "content", a).get(r + (n.content || ""))) {
                    for (i = 0; i < u.length; i++) if ((l = u[i]).getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      u.splice(i, 1);
                      break t;
                    }
                  }
                  Rt(l = a.createElement(r), r, n), a.head.appendChild(l);
                  break;
                default:
                  throw Error(s(468, r));
              }
              l[de] = e, Ie(l), r = l;
            }
            e.stateNode = r;
          } else np(a, e.type, e.stateNode);
          else e.stateNode = ep(a, r, e.memoizedProps);
          else l !== r ? (l === null ? n.stateNode !== null && (n = n.stateNode).parentNode.removeChild(n) : l.count--, r === null ? np(a, e.type, e.stateNode) : ep(a, r, e.memoizedProps)) : r === null && e.stateNode !== null && Ru(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        cn(t, e), dn(e), 512 & r && (dt || n === null || Tn(n, n.return)), n !== null && 4 & r && Ru(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (cn(t, e), dn(e), 512 & r && (dt || n === null || Tn(n, n.return)), 32 & e.flags) {
          a = e.stateNode;
          try {
            aa(a, "");
          } catch (D) {
            Je(e, e.return, D);
          }
        }
        4 & r && e.stateNode != null && Ru(e, a = e.memoizedProps, n !== null ? n.memoizedProps : a), 1024 & r && (_u = !0);
        break;
      case 6:
        if (cn(t, e), dn(e), 4 & r) {
          if (e.stateNode === null) throw Error(s(162));
          r = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = r;
          } catch (D) {
            Je(e, e.return, D);
          }
        }
        break;
      case 3:
        if (Wo = null, a = En, En = Bo(t.containerInfo), cn(t, e), En = a, dn(e), 4 & r && n !== null && n.memoizedState.isDehydrated) try {
          _l(t.containerInfo);
        } catch (D) {
          Je(e, e.return, D);
        }
        _u && (_u = !1, uf(e));
        break;
      case 4:
        r = En, En = Bo(e.stateNode.containerInfo), cn(t, e), dn(e), En = r;
        break;
      case 12:
      default:
        cn(t, e), dn(e);
        break;
      case 13:
        cn(t, e), dn(e), 8192 & e.child.flags && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ju = ht()), 4 & r && (r = e.updateQueue) !== null && (e.updateQueue = null, zu(e, r));
        break;
      case 22:
        a = e.memoizedState !== null;
        var d = n !== null && n.memoizedState !== null, h = Qn, R = dt;
        if (Qn = h || a, dt = R || d, cn(t, e), dt = R, Qn = h, dn(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (n === null || d || Qn || dt || Sa(e)), n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              d = n = t;
              try {
                if (l = d.stateNode, a) typeof (u = l.style).setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                else {
                  i = d.stateNode;
                  var L = d.memoizedProps.style, N = L != null && L.hasOwnProperty("display") ? L.display : null;
                  i.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                }
              } catch (D) {
                Je(d, d.return, D);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              d = t;
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (D) {
                Je(d, d.return, D);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            n === t && (n = null), t = t.return;
          }
          n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
        }
        4 & r && (r = e.updateQueue) !== null && (n = r.retryQueue) !== null && (r.retryQueue = null, zu(e, n));
        break;
      case 19:
        cn(t, e), dn(e), 4 & r && (r = e.updateQueue) !== null && (e.updateQueue = null, zu(e, r));
      case 30:
      case 21:
    }
  }
  function dn(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (Zd(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode;
            _o(e, Lu(e), a);
            break;
          case 5:
            var l = n.stateNode;
            32 & n.flags && (aa(l, ""), n.flags &= -33), _o(e, Lu(e), l);
            break;
          case 3:
          case 4:
            var u = n.stateNode.containerInfo;
            Tu(e, Lu(e), u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (i) {
        Je(e, e.return, i);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function uf(e) {
    if (1024 & e.subtreeFlags) for (e = e.child; e !== null; ) {
      var t = e;
      uf(t), t.tag === 5 && 1024 & t.flags && t.stateNode.reset(), e = e.sibling;
    }
  }
  function fr(e, t) {
    if (8772 & t.subtreeFlags) for (t = t.child; t !== null; ) nf(e, t.alternate, t), t = t.sibling;
  }
  function Sa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dr(4, t, t.return), Sa(t);
          break;
        case 1:
          Tn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Gd(t, t.return, n), Sa(t);
          break;
        case 27:
          Sl(t.stateNode);
        case 26:
        case 5:
          Tn(t, t.return), Sa(t);
          break;
        case 22:
          t.memoizedState === null && Sa(t);
          break;
        default:
          Sa(t);
      }
      e = e.sibling;
    }
  }
  function pr(e, t, n) {
    for (n = n && !!(8772 & t.subtreeFlags), t = t.child; t !== null; ) {
      var r = t.alternate, a = e, l = t, u = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pr(a, l, n), fl(4, l);
          break;
        case 1:
          if (pr(a, l, n), typeof (a = (r = l).stateNode).componentDidMount == "function") try {
            a.componentDidMount();
          } catch (h) {
            Je(r, r.return, h);
          }
          if ((a = (r = l).updateQueue) !== null) {
            var i = r.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++) Ac(d[a], i);
            } catch (h) {
              Je(r, r.return, h);
            }
          }
          n && 64 & u && Xd(l), pl(l, l.return);
          break;
        case 27:
          ef(l);
        case 26:
        case 5:
          pr(a, l, n), n && r === null && 4 & u && Jd(l), pl(l, l.return);
          break;
        case 12:
          pr(a, l, n);
          break;
        case 13:
          pr(a, l, n), n && 4 & u && lf(a, l);
          break;
        case 22:
          l.memoizedState === null && pr(a, l, n), pl(l, l.return);
          break;
        case 30:
          break;
        default:
          pr(a, l, n);
      }
      t = t.sibling;
    }
  }
  function Nu(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ja(n));
  }
  function Du(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, e != null && Ja(e));
  }
  function hr(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; t !== null; ) sf(e, t, n, r), t = t.sibling;
  }
  function sf(e, t, n, r) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hr(e, t, n, r), 2048 & a && fl(9, t);
        break;
      case 1:
      case 13:
      default:
        hr(e, t, n, r);
        break;
      case 3:
        hr(e, t, n, r), 2048 & a && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, e != null && Ja(e)));
        break;
      case 12:
        if (2048 & a) {
          hr(e, t, n, r), e = t.stateNode;
          try {
            var l = t.memoizedProps, u = l.id, i = l.onPostCommit;
            typeof i == "function" && i(u, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (d) {
            Je(t, t.return, d);
          }
        } else hr(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        l = t.stateNode, u = t.alternate, t.memoizedState !== null ? 2 & l._visibility ? hr(e, t, n, r) : hl(e, t) : 2 & l._visibility ? hr(e, t, n, r) : (l._visibility |= 2, Ea(e, t, n, r, !!(10256 & t.subtreeFlags))), 2048 & a && Nu(u, t);
        break;
      case 24:
        hr(e, t, n, r), 2048 & a && Du(t.alternate, t);
    }
  }
  function Ea(e, t, n, r, a) {
    for (a = a && !!(10256 & t.subtreeFlags), t = t.child; t !== null; ) {
      var l = e, u = t, i = n, d = r, h = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ea(l, u, i, d, a), fl(8, u);
          break;
        case 23:
          break;
        case 22:
          var R = u.stateNode;
          u.memoizedState !== null ? 2 & R._visibility ? Ea(l, u, i, d, a) : hl(l, u) : (R._visibility |= 2, Ea(l, u, i, d, a)), a && 2048 & h && Nu(u.alternate, u);
          break;
        case 24:
          Ea(l, u, i, d, a), a && 2048 & h && Du(u.alternate, u);
          break;
        default:
          Ea(l, u, i, d, a);
      }
      t = t.sibling;
    }
  }
  function hl(e, t) {
    if (10256 & t.subtreeFlags) for (t = t.child; t !== null; ) {
      var n = e, r = t, a = r.flags;
      switch (r.tag) {
        case 22:
          hl(n, r), 2048 & a && Nu(r.alternate, r);
          break;
        case 24:
          hl(n, r), 2048 & a && Du(r.alternate, r);
          break;
        default:
          hl(n, r);
      }
      t = t.sibling;
    }
  }
  var ml = 8192;
  function yl(e) {
    if (e.subtreeFlags & ml) for (e = e.child; e !== null; ) cf(e), e = e.sibling;
  }
  function cf(e) {
    switch (e.tag) {
      case 26:
        yl(e), e.flags & ml && e.memoizedState !== null && function(n, r, a) {
          if (Cl === null) throw Error(s(475));
          var l = Cl;
          if (!(r.type !== "stylesheet" || typeof a.media == "string" && matchMedia(a.media).matches === !1 || 4 & r.state.loading)) {
            if (r.instance === null) {
              var u = Da(a.href), i = n.querySelector(El(u));
              if (i) return (n = i._p) !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = qo.bind(l), n.then(l, l)), r.state.loading |= 4, r.instance = i, void Ie(i);
              i = n.ownerDocument || n, a = Zf(a), (u = pn.get(u)) && us(a, u), Ie(i = i.createElement("link"));
              var d = i;
              d._p = new Promise(function(h, R) {
                d.onload = h, d.onerror = R;
              }), Rt(i, "link", a), r.instance = i;
            }
            l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(r, n), (n = r.state.preload) && !(3 & r.state.loading) && (l.count++, r = qo.bind(l), n.addEventListener("load", r), n.addEventListener("error", r));
          }
        }(En, e.memoizedState, e.memoizedProps);
        break;
      case 5:
      default:
        yl(e);
        break;
      case 3:
      case 4:
        var t = En;
        En = Bo(e.stateNode.containerInfo), yl(e), En = t;
        break;
      case 22:
        e.memoizedState === null && ((t = e.alternate) !== null && t.memoizedState !== null ? (t = ml, ml = 16777216, yl(e), ml = t) : yl(e));
    }
  }
  function df(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child) !== null) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ou(e) {
    var t = e.deletions;
    if (16 & e.flags) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var r = t[n];
        xt = r, pf(r, e);
      }
      df(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; e !== null; ) ff(e), e = e.sibling;
  }
  function ff(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ou(e), 2048 & e.flags && dr(9, e, e.return);
        break;
      case 3:
      case 12:
      default:
        Ou(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && 2 & t._visibility && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zo(e)) : Ou(e);
    }
  }
  function zo(e) {
    var t = e.deletions;
    if (16 & e.flags) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var r = t[n];
        xt = r, pf(r, e);
      }
      df(e);
    }
    for (e = e.child; e !== null; ) {
      switch ((t = e).tag) {
        case 0:
        case 11:
        case 15:
          dr(8, t, t.return), zo(t);
          break;
        case 22:
          2 & (n = t.stateNode)._visibility && (n._visibility &= -3, zo(t));
          break;
        default:
          zo(t);
      }
      e = e.sibling;
    }
  }
  function pf(e, t) {
    for (; xt !== null; ) {
      var n = xt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          dr(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Ja(n.memoizedState.cache);
      }
      if ((r = n.child) !== null) r.return = n, xt = r;
      else e: for (n = e; xt !== null; ) {
        var a = (r = xt).sibling, l = r.return;
        if (rf(r), r === n) {
          xt = null;
          break e;
        }
        if (a !== null) {
          a.return = l, xt = a;
          break e;
        }
        xt = l;
      }
    }
  }
  var gm = { getCacheForType: function(e) {
    var t = zt(bt), n = t.data.get(e);
    return n === void 0 && (n = e(), t.data.set(e, n)), n;
  } }, bm = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, et = null, Re = null, Ne = 0, Ye = 0, Xt = null, mr = !1, xa = !1, Mu = !1, Kn = 0, ut = 0, yr = 0, Wr = 0, Au = 0, fn = 0, Ca = 0, vl = null, Wt = null, Fu = !1, ju = 0, No = 1 / 0, Do = null, vr = null, Pt = 0, gr = null, Pa = null, Ra = 0, $u = 0, Uu = null, hf = null, gl = 0, Iu = null;
  function Gt() {
    return 2 & Qe && Ne !== 0 ? Ne & -Ne : K.T !== null ? Ir !== 0 ? Ir : Yu() : Ze();
  }
  function mf() {
    fn === 0 && (fn = 536870912 & Ne && !He ? 536870912 : se());
    var e = sn.current;
    return e !== null && (e.flags |= 32), fn;
  }
  function Jt(e, t, n) {
    (e !== et || Ye !== 2 && Ye !== 9) && e.cancelPendingCommit === null || (La(e, 0), br(e, Ne, fn, !1)), Oe(e, n), 2 & Qe && e === et || (e === et && (!(2 & Qe) && (Wr |= n), ut === 4 && br(e, Ne, fn, !1)), _n(e));
  }
  function yf(e, t, n) {
    if (6 & Qe) throw Error(s(327));
    for (var r = !n && !(124 & t) && !(t & e.expiredLanes) || oe(e, t), a = r ? function(h, R) {
      var L = Qe;
      Qe |= 2;
      var N = bf(), D = wf();
      et !== h || Ne !== R ? (Do = null, No = ht() + 500, La(h, R)) : xa = oe(h, R);
      e: for (; ; ) try {
        if (Ye !== 0 && Re !== null) {
          R = Re;
          var G = Xt;
          t: switch (Ye) {
            case 1:
              Ye = 0, Xt = null, Ta(h, R, G, 1);
              break;
            case 2:
            case 9:
              if (Nc(G)) {
                Ye = 0, Xt = null, Sf(R);
                break;
              }
              R = function() {
                Ye !== 2 && Ye !== 9 || et !== h || (Ye = 7), _n(h);
              }, G.then(R, R);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              Nc(G) ? (Ye = 0, Xt = null, Sf(R)) : (Ye = 0, Xt = null, Ta(h, R, G, 7));
              break;
            case 5:
              var k = null;
              switch (Re.tag) {
                case 26:
                  k = Re.memoizedState;
                case 5:
                case 27:
                  var w = Re;
                  if (!k || rp(k)) {
                    Ye = 0, Xt = null;
                    var S = w.sibling;
                    if (S !== null) Re = S;
                    else {
                      var $ = w.return;
                      $ !== null ? (Re = $, Mo($)) : Re = null;
                    }
                    break t;
                  }
              }
              Ye = 0, Xt = null, Ta(h, R, G, 5);
              break;
            case 6:
              Ye = 0, Xt = null, Ta(h, R, G, 6);
              break;
            case 8:
              Hu(), ut = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Sm();
        break;
      } catch (ee) {
        gf(h, ee);
      }
      return Un = $r = null, K.H = N, K.A = D, Qe = L, Re !== null ? 0 : (et = null, Ne = 0, no(), ut);
    }(e, t) : Vu(e, t, !0), l = r; ; ) {
      if (a === 0) {
        xa && !r && br(e, t, 0, !1);
        break;
      }
      if (n = e.current.alternate, !l || wm(n)) {
        if (a === 2) {
          if (l = t, e.errorRecoveryDisabledLanes & l) var u = 0;
          else u = (u = -536870913 & e.pendingLanes) !== 0 ? u : 536870912 & u ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var i = e;
              a = vl;
              var d = i.current.memoizedState.isDehydrated;
              if (d && (La(i, u).flags |= 256), (u = Vu(i, u, !1)) !== 2) {
                if (Mu && !d) {
                  i.errorRecoveryDisabledLanes |= l, Wr |= l, a = 4;
                  break e;
                }
                l = Wt, Wt = a, l !== null && (Wt === null ? Wt = l : Wt.push.apply(Wt, l));
              }
              a = u;
            }
            if (l = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          La(e, 0), br(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, l = a) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((4194048 & t) !== t) break;
            case 6:
              br(r, t, fn, !mr);
              break e;
            case 2:
              Wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((62914560 & t) === t && 10 < (a = ju + 300 - ht())) {
            if (br(r, t, fn, !mr), Z(r, 0, !0) !== 0) break e;
            r.timeoutHandle = Wf(vf.bind(null, r, n, Wt, Do, Fu, t, fn, Wr, Ca, mr, l, 2, -0, 0), a);
          } else vf(r, n, Wt, Do, Fu, t, fn, Wr, Ca, mr, l, 0, -0, 0);
        }
        break;
      }
      a = Vu(e, t, !1), l = !1;
    }
    _n(e);
  }
  function vf(e, t, n, r, a, l, u, i, d, h, R, L, N, D) {
    if (e.timeoutHandle = -1, (8192 & (L = t.subtreeFlags) || !(16785408 & ~L)) && (Cl = { stylesheets: null, count: 0, unsuspend: Dm }, cf(t), (L = function() {
      if (Cl === null) throw Error(s(475));
      var G = Cl;
      return G.stylesheets && G.count === 0 && cs(G, G.stylesheets), 0 < G.count ? function(k) {
        var w = setTimeout(function() {
          if (G.stylesheets && cs(G, G.stylesheets), G.unsuspend) {
            var S = G.unsuspend;
            G.unsuspend = null, S();
          }
        }, 6e4);
        return G.unsuspend = k, function() {
          G.unsuspend = null, clearTimeout(w);
        };
      } : null;
    }()) !== null)) return e.cancelPendingCommit = L(xf.bind(null, e, t, l, n, r, a, u, i, d, R, 1, N, D)), void br(e, l, u, !h);
    xf(e, t, l, n, r, a, u, i, d);
  }
  function wm(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && 16384 & t.flags && (n = t.updateQueue) !== null && (n = n.stores) !== null) for (var r = 0; r < n.length; r++) {
        var a = n[r], l = a.getSnapshot;
        a = a.value;
        try {
          if (!Yt(l(), a)) return !1;
        } catch {
          return !1;
        }
      }
      if (n = t.child, 16384 & t.subtreeFlags && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function br(e, t, n, r) {
    t &= ~Au, t &= ~Wr, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var l = 31 - Tt(a), u = 1 << l;
      r[l] = -1, a &= ~u;
    }
    n !== 0 && Ke(e, n, t);
  }
  function Oo() {
    return !!(6 & Qe) || (bl(0), !1);
  }
  function Hu() {
    if (Re !== null) {
      if (Ye === 0) var e = Re.return;
      else Un = $r = null, lu(e = Re), wa = null, sl = 0, e = Re;
      for (; e !== null; ) Kd(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function La(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, _m(n)), (n = e.cancelPendingCommit) !== null && (e.cancelPendingCommit = null, n()), Hu(), et = e, Re = n = jn(e.current, null), Ne = t, Ye = 0, Xt = null, mr = !1, xa = oe(e, t), Mu = !1, Ca = fn = Au = Wr = yr = ut = 0, Wt = vl = null, Fu = !1, 8 & t && (t |= 32 & t);
    var r = e.entangledLanes;
    if (r !== 0) for (e = e.entanglements, r &= t; 0 < r; ) {
      var a = 31 - Tt(r), l = 1 << a;
      t |= e[a], r &= ~l;
    }
    return Kn = t, no(), n;
  }
  function gf(e, t) {
    Pe = null, K.H = ko, t === el || t === fo ? (t = Oc(), Ye = 3) : t === zc ? (t = Oc(), Ye = 4) : Ye = t === Md ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Xt = t, Re === null && (ut = 1, Po(e, an(t, e.current)));
  }
  function bf() {
    var e = K.H;
    return K.H = ko, e === null ? ko : e;
  }
  function wf() {
    var e = K.A;
    return K.A = gm, e;
  }
  function Bu() {
    ut = 4, mr || (4194048 & Ne) !== Ne && sn.current !== null || (xa = !0), !(134217727 & yr) && !(134217727 & Wr) || et === null || br(et, Ne, fn, !1);
  }
  function Vu(e, t, n) {
    var r = Qe;
    Qe |= 2;
    var a = bf(), l = wf();
    et === e && Ne === t || (Do = null, La(e, t)), t = !1;
    var u = ut;
    e: for (; ; ) try {
      if (Ye !== 0 && Re !== null) {
        var i = Re, d = Xt;
        switch (Ye) {
          case 8:
            Hu(), u = 6;
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            sn.current === null && (t = !0);
            var h = Ye;
            if (Ye = 0, Xt = null, Ta(e, i, d, h), n && xa) {
              u = 0;
              break e;
            }
            break;
          default:
            h = Ye, Ye = 0, Xt = null, Ta(e, i, d, h);
        }
      }
      km(), u = ut;
      break;
    } catch (R) {
      gf(e, R);
    }
    return t && e.shellSuspendCounter++, Un = $r = null, Qe = r, K.H = a, K.A = l, Re === null && (et = null, Ne = 0, no()), u;
  }
  function km() {
    for (; Re !== null; ) kf(Re);
  }
  function Sm() {
    for (; Re !== null && !ja(); ) kf(Re);
  }
  function kf(e) {
    var t = Qd(e.alternate, e, Kn);
    e.memoizedProps = e.pendingProps, t === null ? Mo(e) : Re = t;
  }
  function Sf(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Id(n, t, t.pendingProps, t.type, void 0, Ne);
        break;
      case 11:
        t = Id(n, t, t.pendingProps, t.type.render, t.ref, Ne);
        break;
      case 5:
        lu(t);
      default:
        Kd(n, t), t = Qd(n, t = Re = Sc(t, Kn), Kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Mo(e) : Re = t;
  }
  function Ta(e, t, n, r) {
    Un = $r = null, lu(t), wa = null, sl = 0;
    var a = t.return;
    try {
      if (function(l, u, i, d, h) {
        if (i.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
          if ((u = i.alternate) !== null && Ga(u, i, h, !0), (i = sn.current) !== null) {
            switch (i.tag) {
              case 13:
                return Bn === null ? Bu() : i.alternate === null && ut === 0 && (ut = 3), i.flags &= -257, i.flags |= 65536, i.lanes = h, d === Yi ? i.flags |= 16384 : ((u = i.updateQueue) === null ? i.updateQueue = /* @__PURE__ */ new Set([d]) : u.add(d), Wu(l, d, h)), !1;
              case 22:
                return i.flags |= 65536, d === Yi ? i.flags |= 16384 : ((u = i.updateQueue) === null ? (u = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([d]) }, i.updateQueue = u) : (i = u.retryQueue) === null ? u.retryQueue = /* @__PURE__ */ new Set([d]) : i.add(d), Wu(l, d, h)), !1;
            }
            throw Error(s(435, i.tag));
          }
          return Wu(l, d, h), Bu(), !1;
        }
        if (He) return (u = sn.current) !== null ? (!(65536 & u.flags) && (u.flags |= 256), u.flags |= 65536, u.lanes = h, d !== Ii && Xa(an(l = Error(s(422), { cause: d }), i))) : (d !== Ii && Xa(an(u = Error(s(423), { cause: d }), i)), (l = l.current.alternate).flags |= 65536, h &= -h, l.lanes |= h, d = an(d, i), Gi(l, h = gu(l.stateNode, d, h)), ut !== 4 && (ut = 2)), !1;
        var R = Error(s(520), { cause: d });
        if (R = an(R, i), vl === null ? vl = [R] : vl.push(R), ut !== 4 && (ut = 2), u === null) return !0;
        d = an(d, i), i = u;
        do {
          switch (i.tag) {
            case 3:
              return i.flags |= 65536, l = h & -h, i.lanes |= l, Gi(i, l = gu(i.stateNode, d, l)), !1;
            case 1:
              if (u = i.type, R = i.stateNode, !(128 & i.flags || typeof u.getDerivedStateFromError != "function" && (R === null || typeof R.componentDidCatch != "function" || vr !== null && vr.has(R)))) return i.flags |= 65536, h &= -h, i.lanes |= h, Od(h = Dd(h), l, i, d), Gi(i, h), !1;
          }
          i = i.return;
        } while (i !== null);
        return !1;
      }(e, a, t, n, Ne)) return ut = 1, Po(e, an(n, e.current)), void (Re = null);
    } catch (l) {
      if (a !== null) throw Re = a, l;
      return ut = 1, Po(e, an(n, e.current)), void (Re = null);
    }
    32768 & t.flags ? (He || r === 1 ? e = !0 : xa || 536870912 & Ne ? e = !1 : (mr = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = sn.current) !== null && r.tag === 13 && (r.flags |= 16384)), Ef(t, e)) : Mo(t);
  }
  function Mo(e) {
    var t = e;
    do {
      if (32768 & t.flags) return void Ef(t, mr);
      e = t.return;
      var n = ym(t.alternate, t, Kn);
      if (n !== null) return void (Re = n);
      if ((t = t.sibling) !== null) return void (Re = t);
      Re = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function Ef(e, t) {
    do {
      var n = vm(e.alternate, e);
      if (n !== null) return n.flags &= 32767, void (Re = n);
      if ((n = e.return) !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling) !== null) return void (Re = e);
      Re = e = n;
    } while (e !== null);
    ut = 6, Re = null;
  }
  function xf(e, t, n, r, a, l, u, i, d) {
    e.cancelPendingCommit = null;
    do
      Ao();
    while (Pt !== 0);
    if (6 & Qe) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (l = t.lanes | t.childLanes, function(h, R, L, N, D, G) {
        var k = h.pendingLanes;
        h.pendingLanes = L, h.suspendedLanes = 0, h.pingedLanes = 0, h.warmLanes = 0, h.expiredLanes &= L, h.entangledLanes &= L, h.errorRecoveryDisabledLanes &= L, h.shellSuspendCounter = 0;
        var w = h.entanglements, S = h.expirationTimes, $ = h.hiddenUpdates;
        for (L = k & ~L; 0 < L; ) {
          var ee = 31 - Tt(L), ae = 1 << ee;
          w[ee] = 0, S[ee] = -1;
          var ge = $[ee];
          if (ge !== null) for ($[ee] = null, ee = 0; ee < ge.length; ee++) {
            var Ae = ge[ee];
            Ae !== null && (Ae.lane &= -536870913);
          }
          L &= ~ae;
        }
        N !== 0 && Ke(h, N, 0), G !== 0 && D === 0 && h.tag !== 0 && (h.suspendedLanes |= G & ~(k & ~R));
      }(e, n, l |= Oi, u, i, d), e === et && (Re = et = null, Ne = 0), Pa = t, gr = e, Ra = n, $u = l, Uu = a, hf = r, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, Mn(Zr, function() {
        return Tf(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(13878 & t.flags), 13878 & t.subtreeFlags || r) {
        r = K.T, K.T = null, a = m.p, m.p = 2, u = Qe, Qe |= 4;
        try {
          (function(h, R) {
            if (h = h.containerInfo, ts = Yo, Ti(h = fc(h))) {
              if ("selectionStart" in h) var L = { start: h.selectionStart, end: h.selectionEnd };
              else e: {
                var N = (L = (L = h.ownerDocument) && L.defaultView || window).getSelection && L.getSelection();
                if (N && N.rangeCount !== 0) {
                  L = N.anchorNode;
                  var D = N.anchorOffset, G = N.focusNode;
                  N = N.focusOffset;
                  try {
                    L.nodeType, G.nodeType;
                  } catch {
                    L = null;
                    break e;
                  }
                  var k = 0, w = -1, S = -1, $ = 0, ee = 0, ae = h, ge = null;
                  t: for (; ; ) {
                    for (var Ae; ae !== L || D !== 0 && ae.nodeType !== 3 || (w = k + D), ae !== G || N !== 0 && ae.nodeType !== 3 || (S = k + N), ae.nodeType === 3 && (k += ae.nodeValue.length), (Ae = ae.firstChild) !== null; ) ge = ae, ae = Ae;
                    for (; ; ) {
                      if (ae === h) break t;
                      if (ge === L && ++$ === D && (w = k), ge === G && ++ee === N && (S = k), (Ae = ae.nextSibling) !== null) break;
                      ge = (ae = ge).parentNode;
                    }
                    ae = Ae;
                  }
                  L = w === -1 || S === -1 ? null : { start: w, end: S };
                } else L = null;
              }
              L = L || { start: 0, end: 0 };
            } else L = null;
            for (ns = { focusedElem: h, selectionRange: L }, Yo = !1, xt = R; xt !== null; ) if (h = (R = xt).child, 1024 & R.subtreeFlags && h !== null) h.return = R, xt = h;
            else for (; xt !== null; ) {
              switch (G = (R = xt).alternate, h = R.flags, R.tag) {
                case 0:
                case 11:
                case 15:
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                case 1:
                  if (1024 & h && G !== null) {
                    h = void 0, L = R, D = G.memoizedProps, G = G.memoizedState, N = L.stateNode;
                    try {
                      var Lt = Vr(L.type, D, (L.elementType, L.type));
                      h = N.getSnapshotBeforeUpdate(Lt, G), N.__reactInternalSnapshotBeforeUpdate = h;
                    } catch (Fe) {
                      Je(L, L.return, Fe);
                    }
                  }
                  break;
                case 3:
                  if (1024 & h) {
                    if ((L = (h = R.stateNode.containerInfo).nodeType) === 9) ls(h);
                    else if (L === 1) switch (h.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        ls(h);
                        break;
                      default:
                        h.textContent = "";
                    }
                  }
                  break;
                default:
                  if (1024 & h) throw Error(s(163));
              }
              if ((h = R.sibling) !== null) {
                h.return = R.return, xt = h;
                break;
              }
              xt = R.return;
            }
          })(e, t);
        } finally {
          Qe = u, m.p = a, K.T = r;
        }
      }
      Pt = 1, Cf(), Pf(), Rf();
    }
  }
  function Cf() {
    if (Pt === 1) {
      Pt = 0;
      var e = gr, t = Pa, n = !!(13878 & t.flags);
      if (13878 & t.subtreeFlags || n) {
        n = K.T, K.T = null;
        var r = m.p;
        m.p = 2;
        var a = Qe;
        Qe |= 4;
        try {
          of(t, e);
          var l = ns, u = fc(e.containerInfo), i = l.focusedElem, d = l.selectionRange;
          if (u !== i && i && i.ownerDocument && dc(i.ownerDocument.documentElement, i)) {
            if (d !== null && Ti(i)) {
              var h = d.start, R = d.end;
              if (R === void 0 && (R = h), "selectionStart" in i) i.selectionStart = h, i.selectionEnd = Math.min(R, i.value.length);
              else {
                var L = i.ownerDocument || document, N = L && L.defaultView || window;
                if (N.getSelection) {
                  var D = N.getSelection(), G = i.textContent.length, k = Math.min(d.start, G), w = d.end === void 0 ? k : Math.min(d.end, G);
                  !D.extend && k > w && (u = w, w = k, k = u);
                  var S = cc(i, k), $ = cc(i, w);
                  if (S && $ && (D.rangeCount !== 1 || D.anchorNode !== S.node || D.anchorOffset !== S.offset || D.focusNode !== $.node || D.focusOffset !== $.offset)) {
                    var ee = L.createRange();
                    ee.setStart(S.node, S.offset), D.removeAllRanges(), k > w ? (D.addRange(ee), D.extend($.node, $.offset)) : (ee.setEnd($.node, $.offset), D.addRange(ee));
                  }
                }
              }
            }
            for (L = [], D = i; D = D.parentNode; ) D.nodeType === 1 && L.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < L.length; i++) {
              var ae = L[i];
              ae.element.scrollLeft = ae.left, ae.element.scrollTop = ae.top;
            }
          }
          Yo = !!ts, ns = ts = null;
        } finally {
          Qe = a, m.p = r, K.T = n;
        }
      }
      e.current = t, Pt = 2;
    }
  }
  function Pf() {
    if (Pt === 2) {
      Pt = 0;
      var e = gr, t = Pa, n = !!(8772 & t.flags);
      if (8772 & t.subtreeFlags || n) {
        n = K.T, K.T = null;
        var r = m.p;
        m.p = 2;
        var a = Qe;
        Qe |= 4;
        try {
          nf(e, t.alternate, t);
        } finally {
          Qe = a, m.p = r, K.T = n;
        }
      }
      Pt = 3;
    }
  }
  function Rf() {
    if (Pt === 4 || Pt === 3) {
      Pt = 0, Cn();
      var e = gr, t = Pa, n = Ra, r = hf;
      10256 & t.subtreeFlags || 10256 & t.flags ? Pt = 5 : (Pt = 0, Pa = gr = null, Lf(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (vr = null), gt(n), t = t.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function") try {
        Ct.onCommitFiberRoot(Gn, t, void 0, !(128 & ~t.current.flags));
      } catch {
      }
      if (r !== null) {
        t = K.T, a = m.p, m.p = 2, K.T = null;
        try {
          for (var l = e.onRecoverableError, u = 0; u < r.length; u++) {
            var i = r[u];
            l(i.value, { componentStack: i.stack });
          }
        } finally {
          K.T = t, m.p = a;
        }
      }
      3 & Ra && Ao(), _n(e), a = e.pendingLanes, 4194090 & n && 42 & a ? e === Iu ? gl++ : (gl = 0, Iu = e) : gl = 0, bl(0);
    }
  }
  function Lf(e, t) {
    (e.pooledCacheLanes &= t) == 0 && (t = e.pooledCache) != null && (e.pooledCache = null, Ja(t));
  }
  function Ao(e) {
    return Cf(), Pf(), Rf(), Tf();
  }
  function Tf() {
    if (Pt !== 5) return !1;
    var e = gr, t = $u;
    $u = 0;
    var n = gt(Ra), r = K.T, a = m.p;
    try {
      m.p = 32 > n ? 32 : n, K.T = null, n = Uu, Uu = null;
      var l = gr, u = Ra;
      if (Pt = 0, Pa = gr = null, Ra = 0, 6 & Qe) throw Error(s(331));
      var i = Qe;
      if (Qe |= 4, ff(l.current), sf(l, l.current, u, n), Qe = i, bl(0, !1), Ct && typeof Ct.onPostCommitFiberRoot == "function") try {
        Ct.onPostCommitFiberRoot(Gn, l);
      } catch {
      }
      return !0;
    } finally {
      m.p = a, K.T = r, Lf(e, t);
    }
  }
  function _f(e, t, n) {
    t = an(n, t), (e = ir(e, t = gu(e.stateNode, t, 2), 2)) !== null && (Oe(e, 2), _n(e));
  }
  function Je(e, t, n) {
    if (e.tag === 3) _f(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        _f(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vr === null || !vr.has(r))) {
          e = an(n, e), (r = ir(t, n = Dd(2), 2)) !== null && (Od(n, r, t, e), Oe(r, 2), _n(r));
          break;
        }
      }
      t = t.return;
    }
  }
  function Wu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else (a = r.get(t)) === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (Mu = !0, a.add(n), e = Em.bind(null, e, t, n), t.then(e, e));
  }
  function Em(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, et === e && (Ne & n) === n && (ut === 4 || ut === 3 && (62914560 & Ne) === Ne && 300 > ht() - ju ? !(2 & Qe) && La(e, 0) : Au |= n, Ca === Ne && (Ca = 0)), _n(e);
  }
  function zf(e, t) {
    t === 0 && (t = pe()), (e = da(e, t)) !== null && (Oe(e, t), _n(e));
  }
  function xm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), zf(e, n);
  }
  function Cm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), zf(e, n);
  }
  var Fo = null, _a = null, qu = !1, jo = !1, Qu = !1, qr = 0;
  function _n(e) {
    e !== _a && e.next === null && (_a === null ? Fo = _a = e : _a = _a.next = e), jo = !0, qu || (qu = !0, zm(function() {
      6 & Qe ? Mn(Jr, Pm) : Nf();
    }));
  }
  function bl(e, t) {
    if (!Qu && jo) {
      Qu = !0;
      do
        for (var n = !1, r = Fo; r !== null; ) {
          if (e !== 0) {
            var a = r.pendingLanes;
            if (a === 0) var l = 0;
            else {
              var u = r.suspendedLanes, i = r.pingedLanes;
              l = (1 << 31 - Tt(42 | e) + 1) - 1, l = 201326741 & (l &= a & ~(u & ~i)) ? 201326741 & l | 1 : l ? 2 | l : 0;
            }
            l !== 0 && (n = !0, Mf(r, l));
          } else l = Ne, !(3 & (l = Z(r, r === et ? l : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1))) || oe(r, l) || (n = !0, Mf(r, l));
          r = r.next;
        }
      while (n);
      Qu = !1;
    }
  }
  function Pm() {
    Nf();
  }
  function Nf() {
    jo = qu = !1;
    var e = 0;
    qr !== 0 && (function() {
      var u = window.event;
      return u && u.type === "popstate" ? u !== as && (as = u, !0) : (as = null, !1);
    }() && (e = qr), qr = 0);
    for (var t = ht(), n = null, r = Fo; r !== null; ) {
      var a = r.next, l = Df(r, t);
      l === 0 ? (r.next = null, n === null ? Fo = a : n.next = a, a === null && (_a = n)) : (n = r, (e !== 0 || 3 & l) && (jo = !0)), r = a;
    }
    bl(e);
  }
  function Df(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l; ) {
      var u = 31 - Tt(l), i = 1 << u, d = a[u];
      d === -1 ? i & n && !(i & r) || (a[u] = ce(i, t)) : d <= t && (e.expiredLanes |= i), l &= ~i;
    }
    if (n = Ne, n = Z(e, e === (t = et) ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Gr(r), e.callbackNode = null, e.callbackPriority = 0;
    if (!(3 & n) || oe(e, n)) {
      if ((t = n & -n) === e.callbackPriority) return t;
      switch (r !== null && Gr(r), gt(n)) {
        case 2:
        case 8:
          n = vn;
          break;
        case 32:
        default:
          n = Zr;
          break;
        case 268435456:
          n = $a;
      }
      return r = Of.bind(null, e), n = Mn(n, r), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return r !== null && r !== null && Gr(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Of(e, t) {
    if (Pt !== 0 && Pt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ao() && e.callbackNode !== n) return null;
    var r = Ne;
    return (r = Z(e, e === et ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)) === 0 ? null : (yf(e, r, t), Df(e, ht()), e.callbackNode != null && e.callbackNode === n ? Of.bind(null, e) : null);
  }
  function Mf(e, t) {
    if (Ao()) return null;
    yf(e, t, !0);
  }
  function Yu() {
    return qr === 0 && (qr = se()), qr;
  }
  function Af(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Yl("" + e);
  }
  function Ff(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  for (var Ku = 0; Ku < Di.length; Ku++) {
    var Xu = Di[Ku];
    Sn(Xu.toLowerCase(), "on" + (Xu[0].toUpperCase() + Xu.slice(1)));
  }
  Sn(mc, "onAnimationEnd"), Sn(yc, "onAnimationIteration"), Sn(vc, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(tm, "onTransitionRun"), Sn(nm, "onTransitionStart"), Sn(rm, "onTransitionCancel"), Sn(gc, "onTransitionEnd"), tn("onMouseEnter", ["mouseout", "mouseover"]), tn("onMouseLeave", ["mouseout", "mouseover"]), tn("onPointerEnter", ["pointerout", "pointerover"]), tn("onPointerLeave", ["pointerout", "pointerover"]), Me("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Me("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Me("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var wl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));
  function jf(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], d = i.instance, h = i.currentTarget;
          if (i = i.listener, d !== l && a.isPropagationStopped()) break e;
          l = i, a.currentTarget = h;
          try {
            l(a);
          } catch (R) {
            Co(R);
          }
          a.currentTarget = null, l = d;
        }
        else for (u = 0; u < r.length; u++) {
          if (d = (i = r[u]).instance, h = i.currentTarget, i = i.listener, d !== l && a.isPropagationStopped()) break e;
          l = i, a.currentTarget = h;
          try {
            l(a);
          } catch (R) {
            Co(R);
          }
          a.currentTarget = null, l = d;
        }
      }
    }
  }
  function Le(e, t) {
    var n = t[rt];
    n === void 0 && (n = t[rt] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || ($f(t, e, 2, !1), n.add(r));
  }
  function Gu(e, t, n) {
    var r = 0;
    t && (r |= 4), $f(n, e, r, t);
  }
  var $o = "_reactListening" + Math.random().toString(36).slice(2);
  function Ju(e) {
    if (!e[$o]) {
      e[$o] = !0, Pn.forEach(function(n) {
        n !== "selectionchange" && (Rm.has(n) || Gu(n, !1, e), Gu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$o] || (t[$o] = !0, Gu("selectionchange", !1, t));
    }
  }
  function $f(e, t, n, r) {
    switch (sp(t)) {
      case 2:
        var a = Am;
        break;
      case 8:
        a = Fm;
        break;
      default:
        a = fs;
    }
    n = a.bind(null, t, n, e), a = void 0, !wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Zu(e, t, n, r, a) {
    var l = r;
    if (!(1 & t || 2 & t || r === null)) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === a) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var d = u.tag;
          if ((d === 3 || d === 4) && u.stateNode.containerInfo === a) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if ((u = kt(i)) === null) return;
          if ((d = u.tag) === 5 || d === 6 || d === 26 || d === 27) {
            r = l = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Ws(function() {
      var h = l, R = gi(n), L = [];
      e: {
        var N = bc.get(e);
        if (N !== void 0) {
          var D = Jl, G = e;
          switch (e) {
            case "keypress":
              if (Xl(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = Ih;
              break;
            case "focusin":
              G = "focus", D = xi;
              break;
            case "focusout":
              G = "blur", D = xi;
              break;
            case "beforeblur":
            case "afterblur":
              D = xi;
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
              D = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Oh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Hh;
              break;
            case mc:
            case yc:
            case vc:
              D = Mh;
              break;
            case gc:
              D = Bh;
              break;
            case "scroll":
            case "scrollend":
              D = Dh;
              break;
            case "wheel":
              D = Vh;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Ah;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Xs;
              break;
            case "toggle":
            case "beforetoggle":
              D = Wh;
          }
          var k = !!(4 & t), w = !k && (e === "scroll" || e === "scrollend"), S = k ? N !== null ? N + "Capture" : null : N;
          k = [];
          for (var $, ee = h; ee !== null; ) {
            var ae = ee;
            if ($ = ae.stateNode, (ae = ae.tag) !== 5 && ae !== 26 && ae !== 27 || $ === null || S === null || (ae = Ua(ee, S)) != null && k.push(kl(ee, ae, $)), w) break;
            ee = ee.return;
          }
          0 < k.length && (N = new D(N, G, null, n, R), L.push({ event: N, listeners: k }));
        }
      }
      if (!(7 & t)) {
        if (D = e === "mouseout" || e === "pointerout", (!(N = e === "mouseover" || e === "pointerover") || n === vi || !(G = n.relatedTarget || n.fromElement) || !kt(G) && !G[lt]) && (D || N) && (N = R.window === R ? R : (N = R.ownerDocument) ? N.defaultView || N.parentWindow : window, D ? (D = h, (G = (G = n.relatedTarget || n.toElement) ? kt(G) : null) !== null && (w = v(G), k = G.tag, G !== w || k !== 5 && k !== 27 && k !== 6) && (G = null)) : (D = null, G = h), D !== G)) {
          if (k = Ys, ae = "onMouseLeave", S = "onMouseEnter", ee = "mouse", e !== "pointerout" && e !== "pointerover" || (k = Xs, ae = "onPointerLeave", S = "onPointerEnter", ee = "pointer"), w = D == null ? N : ke(D), $ = G == null ? N : ke(G), (N = new k(ae, ee + "leave", D, n, R)).target = w, N.relatedTarget = $, ae = null, kt(R) === h && ((k = new k(S, ee + "enter", G, n, R)).target = $, k.relatedTarget = w, ae = k), w = ae, D && G) e: {
            for (S = G, ee = 0, $ = k = D; $; $ = za($)) ee++;
            for ($ = 0, ae = S; ae; ae = za(ae)) $++;
            for (; 0 < ee - $; ) k = za(k), ee--;
            for (; 0 < $ - ee; ) S = za(S), $--;
            for (; ee--; ) {
              if (k === S || S !== null && k === S.alternate) break e;
              k = za(k), S = za(S);
            }
            k = null;
          }
          else k = null;
          D !== null && Uf(L, N, D, k, !1), G !== null && w !== null && Uf(L, w, G, k, !0);
        }
        if ((D = (N = h ? ke(h) : window).nodeName && N.nodeName.toLowerCase()) === "select" || D === "input" && N.type === "file") var ge = ac;
        else if (nc(N)) if (lc) ge = Zh;
        else {
          ge = Gh;
          var Ae = Xh;
        }
        else !(D = N.nodeName) || D.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? h && yi(h.elementType) && (ge = ac) : ge = Jh;
        switch (ge && (ge = ge(e, h)) ? rc(L, ge, n, R) : (Ae && Ae(e, N, h), e === "focusout" && h && N.type === "number" && h.memoizedProps.value != null && mi(N, "number", N.value)), Ae = h ? ke(h) : window, e) {
          case "focusin":
            (nc(Ae) || Ae.contentEditable === "true") && (ua = Ae, _i = h, Qa = null);
            break;
          case "focusout":
            Qa = _i = ua = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zi = !1, pc(L, n, R);
            break;
          case "selectionchange":
            if (em) break;
          case "keydown":
          case "keyup":
            pc(L, n, R);
        }
        var Lt;
        if (Pi) e: {
          switch (e) {
            case "compositionstart":
              var Fe = "onCompositionStart";
              break e;
            case "compositionend":
              Fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Fe = "onCompositionUpdate";
              break e;
          }
          Fe = void 0;
        }
        else ia ? ec(e, n) && (Fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Fe = "onCompositionStart");
        Fe && (Gs && n.locale !== "ko" && (ia || Fe !== "onCompositionStart" ? Fe === "onCompositionEnd" && ia && (Lt = qs()) : (ki = "value" in (_r = R) ? _r.value : _r.textContent, ia = !0)), 0 < (Ae = Uo(h, Fe)).length && (Fe = new Ks(Fe, e, null, n, R), L.push({ event: Fe, listeners: Ae }), (Lt || (Lt = tc(n)) !== null) && (Fe.data = Lt))), (Lt = Qh ? function(Be, ie) {
          switch (Be) {
            case "compositionend":
              return tc(ie);
            case "keypress":
              return ie.which !== 32 ? null : (Zs = !0, Js);
            case "textInput":
              return (Be = ie.data) === Js && Zs ? null : Be;
            default:
              return null;
          }
        }(e, n) : function(Be, ie) {
          if (ia) return Be === "compositionend" || !Pi && ec(Be, ie) ? (Be = qs(), Kl = ki = _r = null, ia = !1, Be) : null;
          switch (Be) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!(ie.ctrlKey || ie.altKey || ie.metaKey) || ie.ctrlKey && ie.altKey) {
                if (ie.char && 1 < ie.char.length) return ie.char;
                if (ie.which) return String.fromCharCode(ie.which);
              }
              return null;
            case "compositionend":
              return Gs && ie.locale !== "ko" ? null : ie.data;
          }
        }(e, n)) && 0 < (Fe = Uo(h, "onBeforeInput")).length && (Ae = new Ks("onBeforeInput", "beforeinput", null, n, R), L.push({ event: Ae, listeners: Fe }), Ae.data = Lt), function(Be, ie, Te, ft, Se) {
          if (ie === "submit" && Te && Te.stateNode === Se) {
            var qt = Af((Se[ye] || null).action), zn = ft.submitter;
            zn && (ie = (ie = zn[ye] || null) ? Af(ie.formAction) : zn.getAttribute("formAction")) !== null && (qt = ie, zn = null);
            var mp = new Jl("action", "action", null, ft, Se);
            Be.push({ event: mp, listeners: [{ instance: null, listener: function() {
              if (ft.defaultPrevented) {
                if (qr !== 0) {
                  var zl = zn ? Ff(Se, zn) : new FormData(Se);
                  pu(Te, { pending: !0, data: zl, method: Se.method, action: qt }, null, zl);
                }
              } else typeof qt == "function" && (mp.preventDefault(), zl = zn ? Ff(Se, zn) : new FormData(Se), pu(Te, { pending: !0, data: zl, method: Se.method, action: qt }, qt, zl));
            }, currentTarget: Se }] });
          }
        }(L, e, h, n, R);
      }
      jf(L, t);
    });
  }
  function kl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Uo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, l = a.stateNode;
      if ((a = a.tag) !== 5 && a !== 26 && a !== 27 || l === null || ((a = Ua(e, n)) != null && r.unshift(kl(e, a, l)), (a = Ua(e, t)) != null && r.push(kl(e, a, l))), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function za(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Uf(e, t, n, r, a) {
    for (var l = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n, d = i.alternate, h = i.stateNode;
      if (i = i.tag, d !== null && d === r) break;
      i !== 5 && i !== 26 && i !== 27 || h === null || (d = h, a ? (h = Ua(n, l)) != null && u.unshift(kl(n, h, d)) : a || (h = Ua(n, l)) != null && u.push(kl(n, h, d))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Lm = /\r\n?/g, Tm = /\u0000|\uFFFD/g;
  function If(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lm, `
`).replace(Tm, "");
  }
  function Hf(e, t) {
    return t = If(t), If(e) === t;
  }
  function Io() {
  }
  function Xe(e, t, n, r, a, l) {
    switch (n) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || aa(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && aa(e, "" + r);
        break;
      case "className":
        nn(e, "class", r);
        break;
      case "tabIndex":
        nn(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nn(e, n, r);
        break;
      case "style":
        Bs(e, r, l);
        break;
      case "data":
        if (t !== "object") {
          nn(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Yl("" + r), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        }
        if (typeof l == "function" && (n === "formAction" ? (t !== "input" && Xe(e, t, "name", a.name, a, null), Xe(e, t, "formEncType", a.formEncType, a, null), Xe(e, t, "formMethod", a.formMethod, a, null), Xe(e, t, "formTarget", a.formTarget, a, null)) : (Xe(e, t, "encType", a.encType, a, null), Xe(e, t, "method", a.method, a, null), Xe(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Yl("" + r), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = Io);
        break;
      case "onScroll":
        r != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Le("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
          if ((n = r.__html) != null) {
            if (a.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Yl("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(n, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
        break;
      case "popover":
        Le("beforetoggle", e), Le("toggle", e), tr(e, "popover", r);
        break;
      case "xlinkActuate":
        It(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        It(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        It(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        It(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        It(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        It(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        It(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        It(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        It(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        tr(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && tr(e, n = zh.get(n) || n, r);
    }
  }
  function es(e, t, n, r, a, l) {
    switch (n) {
      case "style":
        Bs(e, r, l);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
          if ((n = r.__html) != null) {
            if (a.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string" ? aa(e, r) : (typeof r == "number" || typeof r == "bigint") && aa(e, "" + r);
        break;
      case "onScroll":
        r != null && Le("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Le("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Io);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
      case "innerText":
      case "textContent":
        break;
      default:
        Qt.hasOwnProperty(n) || (n[0] !== "o" || n[1] !== "n" || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), typeof (l = (l = e[ye] || null) != null ? l[n] : null) == "function" && e.removeEventListener(t, l, a), typeof r != "function") ? n in e ? e[n] = r : r === !0 ? e.setAttribute(n, "") : tr(e, n, r) : (typeof l != "function" && l !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)));
    }
  }
  function Rt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Le("error", e), Le("load", e);
        var r, a = !1, l = !1;
        for (r in n) if (n.hasOwnProperty(r)) {
          var u = n[r];
          if (u != null) switch (r) {
            case "src":
              a = !0;
              break;
            case "srcSet":
              l = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, t));
            default:
              Xe(e, t, r, u, n, null);
          }
        }
        return l && Xe(e, t, "srcSet", n.srcSet, n, null), void (a && Xe(e, t, "src", n.src, n, null));
      case "input":
        Le("invalid", e);
        var i = r = u = l = null, d = null, h = null;
        for (a in n) if (n.hasOwnProperty(a)) {
          var R = n[a];
          if (R != null) switch (a) {
            case "name":
              l = R;
              break;
            case "type":
              u = R;
              break;
            case "checked":
              d = R;
              break;
            case "defaultChecked":
              h = R;
              break;
            case "value":
              r = R;
              break;
            case "defaultValue":
              i = R;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (R != null) throw Error(s(137, t));
              break;
            default:
              Xe(e, t, a, R, n, null);
          }
        }
        return $s(e, r, i, d, h, u, l, !1), void rr(e);
      case "select":
        for (l in Le("invalid", e), a = u = r = null, n) if (n.hasOwnProperty(l) && (i = n[l]) != null) switch (l) {
          case "value":
            r = i;
            break;
          case "defaultValue":
            u = i;
            break;
          case "multiple":
            a = i;
          default:
            Xe(e, t, l, i, n, null);
        }
        return t = r, n = u, e.multiple = !!a, void (t != null ? ra(e, !!a, t, !1) : n != null && ra(e, !!a, n, !0));
      case "textarea":
        for (u in Le("invalid", e), r = l = a = null, n) if (n.hasOwnProperty(u) && (i = n[u]) != null) switch (u) {
          case "value":
            a = i;
            break;
          case "defaultValue":
            l = i;
            break;
          case "children":
            r = i;
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(s(91));
            break;
          default:
            Xe(e, t, u, i, n, null);
        }
        return Is(e, a, l, r), void rr(e);
      case "option":
        for (d in n) n.hasOwnProperty(d) && (a = n[d]) != null && (d === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Xe(e, t, d, a, n, null));
        return;
      case "dialog":
        Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
        break;
      case "iframe":
      case "object":
        Le("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < wl.length; a++) Le(wl[a], e);
        break;
      case "image":
        Le("error", e), Le("load", e);
        break;
      case "details":
        Le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", e), Le("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in n) if (n.hasOwnProperty(h) && (a = n[h]) != null) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, t));
          default:
            Xe(e, t, h, a, n, null);
        }
        return;
      default:
        if (yi(t)) {
          for (R in n) n.hasOwnProperty(R) && (a = n[R]) !== void 0 && es(e, t, R, a, n, void 0);
          return;
        }
    }
    for (i in n) n.hasOwnProperty(i) && (a = n[i]) != null && Xe(e, t, i, a, n, null);
  }
  var ts = null, ns = null;
  function Ho(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Bf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vf(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function rs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var as = null, Wf = typeof setTimeout == "function" ? setTimeout : void 0, _m = typeof clearTimeout == "function" ? clearTimeout : void 0, qf = typeof Promise == "function" ? Promise : void 0, zm = typeof queueMicrotask == "function" ? queueMicrotask : qf !== void 0 ? function(e) {
    return qf.resolve(null).then(e).catch(Nm);
  } : Wf;
  function Nm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wr(e) {
    return e === "head";
  }
  function Qf(e, t) {
    var n = t, r = 0, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if ((n = l.data) === "/$") {
        if (0 < r && 8 > r) {
          n = r;
          var u = e.ownerDocument;
          if (1 & n && Sl(u.documentElement), 2 & n && Sl(u.body), 4 & n) for (Sl(n = u.head), u = n.firstChild; u; ) {
            var i = u.nextSibling, d = u.nodeName;
            u[st] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = i;
          }
        }
        if (a === 0) return e.removeChild(l), void _l(t);
        a--;
      } else n === "$" || n === "$?" || n === "$!" ? a++ : r = n.charCodeAt(0) - 48;
      else r = 0;
      n = l;
    } while (n);
    _l(t);
  }
  function ls(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ls(n), qe(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function os(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if ((t = e.data) === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var is = null;
  function Yf(e) {
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
  function Kf(e, t, n) {
    switch (t = Ho(n), e) {
      case "html":
        if (!(e = t.documentElement)) throw Error(s(452));
        return e;
      case "head":
        if (!(e = t.head)) throw Error(s(453));
        return e;
      case "body":
        if (!(e = t.body)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Sl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    qe(e);
  }
  var pn = /* @__PURE__ */ new Map(), Xf = /* @__PURE__ */ new Set();
  function Bo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Xn = m.d;
  m.d = { f: function() {
    var e = Xn.f(), t = Oo();
    return e || t;
  }, r: function(e) {
    var t = $e(e);
    t !== null && t.tag === 5 && t.type === "form" ? md(t) : Xn.r(e);
  }, D: function(e) {
    Xn.D(e), Gf("dns-prefetch", e, null);
  }, C: function(e, t) {
    Xn.C(e, t), Gf("preconnect", e, t);
  }, L: function(e, t, n) {
    Xn.L(e, t, n);
    var r = Na;
    if (r && e && t) {
      var a = 'link[rel="preload"][as="' + kn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + kn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + kn(n.imageSizes) + '"]')) : a += '[href="' + kn(e) + '"]';
      var l = a;
      switch (t) {
        case "style":
          l = Da(e);
          break;
        case "script":
          l = Oa(e);
      }
      pn.has(l) || (e = g({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), pn.set(l, e), r.querySelector(a) !== null || t === "style" && r.querySelector(El(l)) || t === "script" && r.querySelector(xl(l)) || (Rt(t = r.createElement("link"), "link", e), Ie(t), r.head.appendChild(t)));
    }
  }, m: function(e, t) {
    Xn.m(e, t);
    var n = Na;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + kn(r) + '"][href="' + kn(e) + '"]', l = a;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = Oa(e);
      }
      if (!pn.has(l) && (e = g({ rel: "modulepreload", href: e }, t), pn.set(l, e), n.querySelector(a) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(xl(l))) return;
        }
        Rt(r = n.createElement("link"), "link", e), Ie(r), n.head.appendChild(r);
      }
    }
  }, X: function(e, t) {
    Xn.X(e, t);
    var n = Na;
    if (n && e) {
      var r = Ue(n).hoistableScripts, a = Oa(e), l = r.get(a);
      l || ((l = n.querySelector(xl(a))) || (e = g({ src: e, async: !0 }, t), (t = pn.get(a)) && ss(e, t), Ie(l = n.createElement("script")), Rt(l, "link", e), n.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
    }
  }, S: function(e, t, n) {
    Xn.S(e, t, n);
    var r = Na;
    if (r && e) {
      var a = Ue(r).hoistableStyles, l = Da(e);
      t = t || "default";
      var u = a.get(l);
      if (!u) {
        var i = { loading: 0, preload: null };
        if (u = r.querySelector(El(l))) i.loading = 5;
        else {
          e = g({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = pn.get(l)) && us(e, n);
          var d = u = r.createElement("link");
          Ie(d), Rt(d, "link", e), d._p = new Promise(function(h, R) {
            d.onload = h, d.onerror = R;
          }), d.addEventListener("load", function() {
            i.loading |= 1;
          }), d.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Vo(u, t, r);
        }
        u = { type: "stylesheet", instance: u, count: 1, state: i }, a.set(l, u);
      }
    }
  }, M: function(e, t) {
    Xn.M(e, t);
    var n = Na;
    if (n && e) {
      var r = Ue(n).hoistableScripts, a = Oa(e), l = r.get(a);
      l || ((l = n.querySelector(xl(a))) || (e = g({ src: e, async: !0, type: "module" }, t), (t = pn.get(a)) && ss(e, t), Ie(l = n.createElement("script")), Rt(l, "link", e), n.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
    }
  } };
  var Na = typeof document > "u" ? null : document;
  function Gf(e, t, n) {
    var r = Na;
    if (r && typeof t == "string" && t) {
      var a = kn(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Xf.has(a) || (Xf.add(a), e = { rel: e, crossOrigin: n, href: t }, r.querySelector(a) === null && (Rt(t = r.createElement("link"), "link", e), Ie(t), r.head.appendChild(t)));
    }
  }
  function Jf(e, t, n, r) {
    var a, l, u, i, d = (d = Ve.current) ? Bo(d) : null;
    if (!d) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Da(n.href), (r = (n = Ue(d).hoistableStyles).get(t)) || (r = { type: "style", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Da(n.href);
          var h = Ue(d).hoistableStyles, R = h.get(e);
          if (R || (d = d.ownerDocument || d, R = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, h.set(e, R), (h = d.querySelector(El(e))) && !h._p && (R.instance = h, R.state.loading = 5), pn.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, pn.set(e, n), h || (a = d, l = e, u = n, i = R.state, a.querySelector('link[rel="preload"][as="style"][' + l + "]") ? i.loading = 1 : (l = a.createElement("link"), i.preload = l, l.addEventListener("load", function() {
            return i.loading |= 1;
          }), l.addEventListener("error", function() {
            return i.loading |= 2;
          }), Rt(l, "link", u), Ie(l), a.head.appendChild(l))))), t && r === null) throw Error(s(528, ""));
          return R;
        }
        if (t && r !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, typeof (n = n.src) == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(n), (r = (n = Ue(d).hoistableScripts).get(t)) || (r = { type: "script", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Da(e) {
    return 'href="' + kn(e) + '"';
  }
  function El(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zf(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Oa(e) {
    return '[src="' + kn(e) + '"]';
  }
  function xl(e) {
    return "script[async]" + e;
  }
  function ep(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var r = e.querySelector('style[data-href~="' + kn(n.href) + '"]');
        if (r) return t.instance = r, Ie(r), r;
        var a = g({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return Ie(r = (e.ownerDocument || e).createElement("style")), Rt(r, "style", a), Vo(r, n.precedence, e), t.instance = r;
      case "stylesheet":
        a = Da(n.href);
        var l = e.querySelector(El(a));
        if (l) return t.state.loading |= 4, t.instance = l, Ie(l), l;
        r = Zf(n), (a = pn.get(a)) && us(r, a), Ie(l = (e.ownerDocument || e).createElement("link"));
        var u = l;
        return u._p = new Promise(function(i, d) {
          u.onload = i, u.onerror = d;
        }), Rt(l, "link", r), t.state.loading |= 4, Vo(l, n.precedence, e), t.instance = l;
      case "script":
        return l = Oa(n.src), (a = e.querySelector(xl(l))) ? (t.instance = a, Ie(a), a) : (r = n, (a = pn.get(l)) && ss(r = g({}, n), a), Ie(a = (e = e.ownerDocument || e).createElement("script")), Rt(a, "link", r), e.head.appendChild(a), t.instance = a);
      case "void":
        return null;
      default:
        throw Error(s(443, t.type));
    }
    else t.type === "stylesheet" && !(4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Vo(r, n.precedence, e));
    return t.instance;
  }
  function Vo(e, t, n) {
    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, u = 0; u < r.length; u++) {
      var i = r[u];
      if (i.dataset.precedence === t) l = i;
      else if (l !== a) break;
    }
    l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = n.nodeType === 9 ? n.head : n).insertBefore(e, t.firstChild);
  }
  function us(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ss(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Wo = null;
  function tp(e, t, n) {
    if (Wo === null) {
      var r = /* @__PURE__ */ new Map(), a = Wo = /* @__PURE__ */ new Map();
      a.set(n, r);
    } else (r = (a = Wo).get(n)) || (r = /* @__PURE__ */ new Map(), a.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var l = n[a];
      if (!(l[st] || l[de] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = l.getAttribute(t) || "";
        u = e + u;
        var i = r.get(u);
        i ? i.push(l) : r.set(u, [l]);
      }
    }
    return r;
  }
  function np(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function rp(e) {
    return !!(e.type !== "stylesheet" || 3 & e.state.loading);
  }
  var Cl = null;
  function Dm() {
  }
  function qo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) cs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Qo = null;
  function cs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Qo = /* @__PURE__ */ new Map(), t.forEach(Om, e), Qo = null, qo.call(e));
  }
  function Om(e, t) {
    if (!(4 & t.state.loading)) {
      var n = Qo.get(e);
      if (n) var r = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Qo.set(e, n);
        for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
          var u = a[l];
          u.nodeName !== "LINK" && u.getAttribute("media") === "not all" || (n.set(u.dataset.precedence, u), r = u);
        }
        r && n.set(null, r);
      }
      u = (a = t.instance).getAttribute("data-precedence"), (l = n.get(u) || r) === r && n.set(null, a), n.set(u, a), this.count++, r = qo.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4;
    }
  }
  var Pl = { $$typeof: F, Provider: null, Consumer: null, _currentValue: T, _currentValue2: T, _threadCount: 0 };
  function Mm(e, t, n, r, a, l, u, i) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ce(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ce(0), this.hiddenUpdates = Ce(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ap(e, t, n, r, a, l, u, i, d, h, R, L) {
    return e = new Mm(e, t, n, u, i, d, h, L), t = 1, l === !0 && (t |= 24), l = Kt(3, null, null, t), e.current = l, l.stateNode = e, (t = Wi()).refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = { element: r, isDehydrated: n, cache: t }, Ki(l), e;
  }
  function lp(e) {
    return e ? e = fa : fa;
  }
  function op(e, t, n, r, a, l) {
    a = lp(a), r.context === null ? r.context = a : r.pendingContext = a, (r = or(t)).payload = { element: n }, (l = l === void 0 ? null : l) !== null && (r.callback = l), (n = ir(e, r, t)) !== null && (Jt(n, 0, t), nl(n, e, t));
  }
  function ip(e, t) {
    if ((e = e.memoizedState) !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ds(e, t) {
    ip(e, t), (e = e.alternate) && ip(e, t);
  }
  function up(e) {
    if (e.tag === 13) {
      var t = da(e, 67108864);
      t !== null && Jt(t, 0, 67108864), ds(e, 67108864);
    }
  }
  var Yo = !0;
  function Am(e, t, n, r) {
    var a = K.T;
    K.T = null;
    var l = m.p;
    try {
      m.p = 2, fs(e, t, n, r);
    } finally {
      m.p = l, K.T = a;
    }
  }
  function Fm(e, t, n, r) {
    var a = K.T;
    K.T = null;
    var l = m.p;
    try {
      m.p = 8, fs(e, t, n, r);
    } finally {
      m.p = l, K.T = a;
    }
  }
  function fs(e, t, n, r) {
    if (Yo) {
      var a = ps(r);
      if (a === null) Zu(e, t, r, Ko, n), cp(e, r);
      else if (function(h, R, L, N, D) {
        switch (R) {
          case "focusin":
            return kr = Tl(kr, h, R, L, N, D), !0;
          case "dragenter":
            return Sr = Tl(Sr, h, R, L, N, D), !0;
          case "mouseover":
            return Er = Tl(Er, h, R, L, N, D), !0;
          case "pointerover":
            var G = D.pointerId;
            return Rl.set(G, Tl(Rl.get(G) || null, h, R, L, N, D)), !0;
          case "gotpointercapture":
            return G = D.pointerId, Ll.set(G, Tl(Ll.get(G) || null, h, R, L, N, D)), !0;
        }
        return !1;
      }(a, e, t, n, r)) r.stopPropagation();
      else if (cp(e, r), 4 & t && -1 < jm.indexOf(e)) {
        for (; a !== null; ) {
          var l = $e(a);
          if (l !== null) switch (l.tag) {
            case 3:
              if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                var u = _(l.pendingLanes);
                if (u !== 0) {
                  var i = l;
                  for (i.pendingLanes |= 2, i.entangledLanes |= 2; u; ) {
                    var d = 1 << 31 - Tt(u);
                    i.entanglements[1] |= d, u &= ~d;
                  }
                  _n(l), !(6 & Qe) && (No = ht() + 500, bl(0));
                }
              }
              break;
            case 13:
              (i = da(l, 2)) !== null && Jt(i, 0, 2), Oo(), ds(l, 2);
          }
          if ((l = ps(r)) === null && Zu(e, t, r, Ko, n), l === a) break;
          a = l;
        }
        a !== null && r.stopPropagation();
      } else Zu(e, t, r, null, n);
    }
  }
  function ps(e) {
    return hs(e = gi(e));
  }
  var Ko = null;
  function hs(e) {
    if (Ko = null, (e = kt(e)) !== null) {
      var t = v(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if ((e = E(t)) !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ko = e, null;
  }
  function sp(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bl()) {
          case Jr:
            return 2;
          case vn:
            return 8;
          case Zr:
          case Vl:
            return 32;
          case $a:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ms = !1, kr = null, Sr = null, Er = null, Rl = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Map(), xr = [], jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function cp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Sr = null;
        break;
      case "mouseover":
      case "mouseout":
        Er = null;
        break;
      case "pointerover":
      case "pointerout":
        Rl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ll.delete(t.pointerId);
    }
  }
  function Tl(e, t, n, r, a, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, t !== null && (t = $e(t)) !== null && up(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function dp(e) {
    var t = kt(e.target);
    if (t !== null) {
      var n = v(t);
      if (n !== null) {
        if ((t = n.tag) === 13) {
          if ((t = E(n)) !== null) return e.blockedOn = t, void function(r, a) {
            var l = m.p;
            try {
              return m.p = r, a();
            } finally {
              m.p = l;
            }
          }(e.priority, function() {
            if (n.tag === 13) {
              var r = Gt();
              r = _t(r);
              var a = da(n, r);
              a !== null && Jt(a, 0, r), ds(n, r);
            }
          });
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null);
      }
    }
    e.blockedOn = null;
  }
  function Xo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ps(e.nativeEvent);
      if (n !== null) return (t = $e(n)) !== null && up(t), e.blockedOn = n, !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      vi = r, n.target.dispatchEvent(r), vi = null, t.shift();
    }
    return !0;
  }
  function fp(e, t, n) {
    Xo(e) && n.delete(t);
  }
  function $m() {
    ms = !1, kr !== null && Xo(kr) && (kr = null), Sr !== null && Xo(Sr) && (Sr = null), Er !== null && Xo(Er) && (Er = null), Rl.forEach(fp), Ll.forEach(fp);
  }
  function Go(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ms || (ms = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, $m)));
  }
  var Jo = null;
  function pp(e) {
    Jo !== e && (Jo = e, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      Jo === e && (Jo = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], r = e[t + 1], a = e[t + 2];
        if (typeof r != "function") {
          if (hs(r || n) === null) continue;
          break;
        }
        var l = $e(n);
        l !== null && (e.splice(t, 3), t -= 3, pu(l, { pending: !0, data: a, method: n.method, action: r }, r, a));
      }
    }));
  }
  function _l(e) {
    function t(d) {
      return Go(d, e);
    }
    kr !== null && Go(kr, e), Sr !== null && Go(Sr, e), Er !== null && Go(Er, e), Rl.forEach(t), Ll.forEach(t);
    for (var n = 0; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < xr.length && (n = xr[0]).blockedOn === null; ) dp(n), n.blockedOn === null && xr.shift();
    if ((n = (e.ownerDocument || e).$$reactFormReplay) != null) for (r = 0; r < n.length; r += 3) {
      var a = n[r], l = n[r + 1], u = a[ye] || null;
      if (typeof l == "function") u || pp(n);
      else if (u) {
        var i = null;
        if (l && l.hasAttribute("formAction")) {
          if (a = l, u = l[ye] || null) i = u.formAction;
          else if (hs(a) !== null) continue;
        } else i = u.action;
        typeof i == "function" ? n[r + 1] = i : (n.splice(r, 3), r -= 3), pp(n);
      }
    }
  }
  function ys(e) {
    this._internalRoot = e;
  }
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.render = ys.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    op(t.current, Gt(), e, t, null, null);
  }, Zo.prototype.unmount = ys.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      op(e.current, 2, null, e, null, null), Oo(), t[lt] = null;
    }
  }, Zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ze();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xr.length && t !== 0 && t < xr[n].priority; n++) ;
      xr.splice(n, 0, e), n === 0 && dp(e);
    }
  };
  var hp = c.version;
  if (hp !== "19.1.0") throw Error(s(527, hp, "19.1.0"));
  m.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = function(n) {
      var r = n.alternate;
      if (!r) {
        if ((r = v(n)) === null) throw Error(s(188));
        return r !== n ? null : n;
      }
      for (var a = n, l = r; ; ) {
        var u = a.return;
        if (u === null) break;
        var i = u.alternate;
        if (i === null) {
          if ((l = u.return) !== null) {
            a = l;
            continue;
          }
          break;
        }
        if (u.child === i.child) {
          for (i = u.child; i; ) {
            if (i === a) return b(u), n;
            if (i === l) return b(u), r;
            i = i.sibling;
          }
          throw Error(s(188));
        }
        if (a.return !== l.return) a = u, l = i;
        else {
          for (var d = !1, h = u.child; h; ) {
            if (h === a) {
              d = !0, a = u, l = i;
              break;
            }
            if (h === l) {
              d = !0, l = u, a = i;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = i.child; h; ) {
              if (h === a) {
                d = !0, a = i, l = u;
                break;
              }
              if (h === l) {
                d = !0, l = i, a = u;
                break;
              }
              h = h.sibling;
            }
            if (!d) throw Error(s(189));
          }
        }
        if (a.alternate !== l) throw Error(s(190));
      }
      if (a.tag !== 3) throw Error(s(188));
      return a.stateNode.current === a ? n : r;
    }(t), e = (e = e !== null ? p(e) : null) === null ? null : e.stateNode;
  };
  var Um = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: K, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ei.isDisabled && ei.supportsFiber) try {
      Gn = ei.inject(Um), Ct = ei;
    } catch {
    }
  }
  return Dl.createRoot = function(e, t) {
    if (!y(e)) throw Error(s(299));
    var n = !1, r = "", a = Td, l = _d, u = zd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (l = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && t.unstable_transitionCallbacks), t = ap(e, 1, !1, null, 0, n, r, a, l, u, 0, null), e[lt] = t.current, Ju(e), new ys(t);
  }, Dl.hydrateRoot = function(e, t, n) {
    if (!y(e)) throw Error(s(299));
    var r = !1, a = "", l = Td, u = _d, i = zd, d = null;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (l = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (i = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && n.unstable_transitionCallbacks, n.formState !== void 0 && (d = n.formState)), (t = ap(e, 1, !0, t, 0, r, a, l, u, i, 0, d)).context = lp(null), n = t.current, (a = or(r = _t(r = Gt()))).callback = null, ir(n, a, r), n = r, t.current.lanes = n, Oe(t, n), _n(t), e[lt] = t.current, Ju(e), new Zo(t);
  }, Dl.version = "19.1.0", Dl;
}
var zp, qm = (_p || (_p = 1, function o() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
  } catch (c) {
    console.error(c);
  }
}(), xp.exports = Wm()), xp.exports), ti = {};
(function() {
  if (zp) return ti;
  zp = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.parse = function(g, P) {
    const C = new v(), O = g.length;
    if (O < 2) return C;
    const q = (P == null ? void 0 : P.decode) || p;
    let U = 0;
    do {
      const te = g.indexOf("=", U);
      if (te === -1) break;
      const Q = g.indexOf(";", U), Y = Q === -1 ? O : Q;
      if (te > Y) {
        U = g.lastIndexOf(";", te - 1) + 1;
        continue;
      }
      const F = E(g, U, te), j = b(g, te, F), B = g.slice(F, j);
      if (C[B] === void 0) {
        let re = E(g, te + 1, Y), H = b(g, Y, re);
        const V = q(g.slice(re, H));
        C[B] = V;
      }
      U = Y + 1;
    } while (U < O);
    return C;
  }, ti.serialize = function(g, P, C) {
    const O = (C == null ? void 0 : C.encode) || encodeURIComponent;
    if (!o.test(g)) throw new TypeError(`argument name is invalid: ${g}`);
    const q = O(P);
    if (!c.test(q)) throw new TypeError(`argument val is invalid: ${P}`);
    let U = g + "=" + q;
    if (!C) return U;
    if (C.maxAge !== void 0) {
      if (!Number.isInteger(C.maxAge)) throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
      U += "; Max-Age=" + C.maxAge;
    }
    if (C.domain) {
      if (!f.test(C.domain)) throw new TypeError(`option domain is invalid: ${C.domain}`);
      U += "; Domain=" + C.domain;
    }
    if (C.path) {
      if (!s.test(C.path)) throw new TypeError(`option path is invalid: ${C.path}`);
      U += "; Path=" + C.path;
    }
    if (C.expires) {
      if (!function(te) {
        return y.call(te) === "[object Date]";
      }(C.expires) || !Number.isFinite(C.expires.valueOf())) throw new TypeError(`option expires is invalid: ${C.expires}`);
      U += "; Expires=" + C.expires.toUTCString();
    }
    if (C.httpOnly && (U += "; HttpOnly"), C.secure && (U += "; Secure"), C.partitioned && (U += "; Partitioned"), C.priority)
      switch (typeof C.priority == "string" ? C.priority.toLowerCase() : void 0) {
        case "low":
          U += "; Priority=Low";
          break;
        case "medium":
          U += "; Priority=Medium";
          break;
        case "high":
          U += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${C.priority}`);
      }
    if (C.sameSite)
      switch (typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite) {
        case !0:
        case "strict":
          U += "; SameSite=Strict";
          break;
        case "lax":
          U += "; SameSite=Lax";
          break;
        case "none":
          U += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
      }
    return U;
  };
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, c = /^[\u0021-\u003A\u003C-\u007E]*$/, f = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s = /^[\u0020-\u003A\u003D-\u007E]*$/, y = Object.prototype.toString, v = (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function E(g, P, C) {
    do {
      const O = g.charCodeAt(P);
      if (O !== 32 && O !== 9) return P;
    } while (++P < C);
    return C;
  }
  function b(g, P, C) {
    for (; P > C; ) {
      const O = g.charCodeAt(--P);
      if (O !== 32 && O !== 9) return P + 1;
    }
    return C;
  }
  function p(g) {
    if (g.indexOf("%") === -1) return g;
    try {
      return decodeURIComponent(g);
    } catch {
      return g;
    }
  }
})();
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Fl, ch = (o) => {
  throw TypeError(o);
}, gs = (o, c, f) => (((s, y, v) => {
  y.has(s) || ch("Cannot " + v);
})(o, c, "read from private field"), f ? f.call(o) : c.get(o)), Np = "popstate";
function Qm(o = {}) {
  return function(c, f, s, y = {}) {
    let { window: v = document.defaultView, v5Compat: E = !1 } = y, b = v.history, p = "POP", g = null, P = C();
    P == null && (P = 0, b.replaceState({ ...b.state, idx: P }, ""));
    function C() {
      return (b.state || { idx: null }).idx;
    }
    function O() {
      p = "POP";
      let Y = C(), F = Y == null ? null : Y - P;
      P = Y, g && g({ action: p, location: Q.location, delta: F });
    }
    function q(Y, F) {
      p = "PUSH";
      let j = $l(Q.location, Y, F);
      P = C() + 1;
      let B = Dp(j, P), re = Q.createHref(j);
      try {
        b.pushState(B, "", re);
      } catch (H) {
        if (H instanceof DOMException && H.name === "DataCloneError") throw H;
        v.location.assign(re);
      }
      E && g && g({ action: p, location: Q.location, delta: 1 });
    }
    function U(Y, F) {
      p = "REPLACE";
      let j = $l(Q.location, Y, F);
      P = C();
      let B = Dp(j, P), re = Q.createHref(j);
      b.replaceState(B, "", re), E && g && g({ action: p, location: Q.location, delta: 0 });
    }
    function te(Y) {
      return dh(Y);
    }
    let Q = { get action() {
      return p;
    }, get location() {
      return c(v, b);
    }, listen(Y) {
      if (g) throw new Error("A history only accepts one active listener");
      return v.addEventListener(Np, O), g = Y, () => {
        v.removeEventListener(Np, O), g = null;
      };
    }, createHref: (Y) => f(v, Y), createURL: te, encodeLocation(Y) {
      let F = te(Y);
      return { pathname: F.pathname, search: F.search, hash: F.hash };
    }, push: q, replace: U, go: (Y) => b.go(Y) };
    return Q;
  }(function(c, f) {
    let { pathname: s, search: y, hash: v } = c.location;
    return $l("", { pathname: s, search: y, hash: v }, f.state && f.state.usr || null, f.state && f.state.key || "default");
  }, function(c, f) {
    return typeof f == "string" ? f : Rr(f);
  }, 0, o);
}
function _e(o, c) {
  if (o === !1 || o == null) throw new Error(c);
}
function vt(o, c) {
  if (!o) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {
    }
  }
}
function Dp(o, c) {
  return { usr: o.state, key: o.key, idx: c };
}
function $l(o, c, f = null, s) {
  return { pathname: typeof o == "string" ? o : o.pathname, search: "", hash: "", ...typeof c == "string" ? Lr(c) : c, state: f, key: c && c.key || s || Math.random().toString(36).substring(2, 10) };
}
function Rr({ pathname: o = "/", search: c = "", hash: f = "" }) {
  return c && c !== "?" && (o += c.charAt(0) === "?" ? c : "?" + c), f && f !== "#" && (o += f.charAt(0) === "#" ? f : "#" + f), o;
}
function Lr(o) {
  let c = {};
  if (o) {
    let f = o.indexOf("#");
    f >= 0 && (c.hash = o.substring(f), o = o.substring(0, f));
    let s = o.indexOf("?");
    s >= 0 && (c.search = o.substring(s), o = o.substring(0, s)), o && (c.pathname = o);
  }
  return c;
}
function dh(o, c = !1) {
  let f = "http://localhost";
  typeof window < "u" && (f = window.location.origin !== "null" ? window.location.origin : window.location.href), _e(f, "No window.location.(origin|href) available to create URL");
  let s = typeof o == "string" ? o : Rr(o);
  return s = s.replace(/ $/, "%20"), !c && s.startsWith("//") && (s = f + s), new URL(s, f);
}
var Op = class {
  constructor(o) {
    var c, f, s;
    if (c = this, f = Fl, s = /* @__PURE__ */ new Map(), f.has(c) ? ch("Cannot add the same private member more than once") : f instanceof WeakSet ? f.add(c) : f.set(c, s), o) for (let [y, v] of o) this.set(y, v);
  }
  get(o) {
    if (gs(this, Fl).has(o)) return gs(this, Fl).get(o);
    if (o.defaultValue !== void 0) return o.defaultValue;
    throw new Error("No value found for context");
  }
  set(o, c) {
    gs(this, Fl).set(o, c);
  }
};
Fl = /* @__PURE__ */ new WeakMap();
var Ym = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]), Km = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "unstable_middleware", "children"]);
function si(o, c, f = [], s = {}) {
  return o.map((y, v) => {
    let E = [...f, String(v)], b = typeof y.id == "string" ? y.id : E.join("-");
    if (_e(y.index !== !0 || !y.children, "Cannot specify children on an index route"), _e(!s[b], `Found a route id collision on id "${b}".  Route id's must be globally unique within Data Router usages`), function(p) {
      return p.index === !0;
    }(y)) {
      let p = { ...y, ...c(y), id: b };
      return s[b] = p, p;
    }
    {
      let p = { ...y, ...c(y), id: b, children: void 0 };
      return s[b] = p, y.children && (p.children = si(y.children, c, E, s)), p;
    }
  });
}
function Pr(o, c, f = "/") {
  return li(o, c, f, !1);
}
function li(o, c, f, s) {
  let y = mn((typeof c == "string" ? Lr(c) : c).pathname || "/", f);
  if (y == null) return null;
  let v = fh(o);
  (function(b) {
    b.sort((p, g) => p.score !== g.score ? g.score - p.score : function(P, C) {
      return P.length === C.length && P.slice(0, -1).every((q, U) => q === C[U]) ? P[P.length - 1] - C[C.length - 1] : 0;
    }(p.routesMeta.map((P) => P.childrenIndex), g.routesMeta.map((P) => P.childrenIndex)));
  })(v);
  let E = null;
  for (let b = 0; E == null && b < v.length; ++b) {
    let p = ay(y);
    E = ry(v[b], p, s);
  }
  return E;
}
function fh(o, c = [], f = [], s = "") {
  let y = (v, E, b) => {
    let p = { relativePath: b === void 0 ? v.path || "" : b, caseSensitive: v.caseSensitive === !0, childrenIndex: E, route: v };
    p.relativePath.startsWith("/") && (_e(p.relativePath.startsWith(s), `Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(s.length));
    let g = Nn([s, p.relativePath]), P = f.concat(p);
    v.children && v.children.length > 0 && (_e(v.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`), fh(v.children, c, P, g)), (v.path != null || v.index) && c.push({ path: g, score: ny(g, v.index), routesMeta: P });
  };
  return o.forEach((v, E) => {
    var b;
    if (v.path !== "" && ((b = v.path) != null && b.includes("?"))) for (let p of ph(v.path)) y(v, E, p);
    else y(v, E);
  }), c;
}
function ph(o) {
  let c = o.split("/");
  if (c.length === 0) return [];
  let [f, ...s] = c, y = f.endsWith("?"), v = f.replace(/\?$/, "");
  if (s.length === 0) return y ? [v, ""] : [v];
  let E = ph(s.join("/")), b = [];
  return b.push(...E.map((p) => p === "" ? v : [v, p].join("/"))), y && b.push(...E), b.map((p) => o.startsWith("/") && p === "" ? "/" : p);
}
var Xm = /^:[\w-]+$/, Gm = 3, Jm = 2, Zm = 1, ey = 10, ty = -2, Mp = (o) => o === "*";
function ny(o, c) {
  let f = o.split("/"), s = f.length;
  return f.some(Mp) && (s += ty), c && (s += Jm), f.filter((y) => !Mp(y)).reduce((y, v) => y + (Xm.test(v) ? Gm : v === "" ? Zm : ey), s);
}
function ry(o, c, f = !1) {
  let { routesMeta: s } = o, y = {}, v = "/", E = [];
  for (let b = 0; b < s.length; ++b) {
    let p = s[b], g = b === s.length - 1, P = v === "/" ? c : c.slice(v.length) || "/", C = ci({ path: p.relativePath, caseSensitive: p.caseSensitive, end: g }, P), O = p.route;
    if (!C && g && f && !s[s.length - 1].route.index && (C = ci({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, P)), !C) return null;
    Object.assign(y, C.params), E.push({ params: y, pathname: Nn([v, C.pathname]), pathnameBase: ly(Nn([v, C.pathnameBase])), route: O }), C.pathnameBase !== "/" && (v = Nn([v, C.pathnameBase]));
  }
  return E;
}
function ci(o, c) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [f, s] = function(p, g = !1, P = !0) {
    vt(p === "*" || !p.endsWith("*") || p.endsWith("/*"), `Route path "${p}" will be treated as if it were "${p.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${p.replace(/\*$/, "/*")}".`);
    let C = [], O = "^" + p.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (U, te, Q) => (C.push({ paramName: te, isOptional: Q != null }), Q ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return p.endsWith("*") ? (C.push({ paramName: "*" }), O += p === "*" || p === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : P ? O += "\\/*$" : p !== "" && p !== "/" && (O += "(?:(?=\\/|$))"), [new RegExp(O, g ? void 0 : "i"), C];
  }(o.path, o.caseSensitive, o.end), y = c.match(f);
  if (!y) return null;
  let v = y[0], E = v.replace(/(.)\/+$/, "$1"), b = y.slice(1);
  return { params: s.reduce((p, { paramName: g, isOptional: P }, C) => {
    if (g === "*") {
      let q = b[C] || "";
      E = v.slice(0, v.length - q.length).replace(/(.)\/+$/, "$1");
    }
    const O = b[C];
    return p[g] = P && !O ? void 0 : (O || "").replace(/%2F/g, "/"), p;
  }, {}), pathname: v, pathnameBase: E, pattern: o };
}
function ay(o) {
  try {
    return o.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return vt(!1, `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`), o;
  }
}
function mn(o, c) {
  if (c === "/") return o;
  if (!o.toLowerCase().startsWith(c.toLowerCase())) return null;
  let f = c.endsWith("/") ? c.length - 1 : c.length, s = o.charAt(f);
  return s && s !== "/" ? null : o.slice(f) || "/";
}
function bs(o, c, f, s) {
  return `Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function hh(o) {
  return o.filter((c, f) => f === 0 || c.route.path && c.route.path.length > 0);
}
function Ts(o) {
  let c = hh(o);
  return c.map((f, s) => s === c.length - 1 ? f.pathname : f.pathnameBase);
}
function _s(o, c, f, s = !1) {
  let y;
  typeof o == "string" ? y = Lr(o) : (y = { ...o }, _e(!y.pathname || !y.pathname.includes("?"), bs("?", "pathname", "search", y)), _e(!y.pathname || !y.pathname.includes("#"), bs("#", "pathname", "hash", y)), _e(!y.search || !y.search.includes("#"), bs("#", "search", "hash", y)));
  let v, E = o === "" || y.pathname === "", b = E ? "/" : y.pathname;
  if (b == null) v = f;
  else {
    let C = c.length - 1;
    if (!s && b.startsWith("..")) {
      let O = b.split("/");
      for (; O[0] === ".."; ) O.shift(), C -= 1;
      y.pathname = O.join("/");
    }
    v = C >= 0 ? c[C] : "/";
  }
  let p = function(C, O = "/") {
    let { pathname: q, search: U = "", hash: te = "" } = typeof C == "string" ? Lr(C) : C;
    return { pathname: q ? q.startsWith("/") ? q : function(Y, F) {
      let j = F.replace(/\/+$/, "").split("/");
      return Y.split("/").forEach((B) => {
        B === ".." ? j.length > 1 && j.pop() : B !== "." && j.push(B);
      }), j.length > 1 ? j.join("/") : "/";
    }(q, O) : O, search: oy(U), hash: iy(te) };
  }(y, v), g = b && b !== "/" && b.endsWith("/"), P = (E || b === ".") && f.endsWith("/");
  return p.pathname.endsWith("/") || !g && !P || (p.pathname += "/"), p;
}
var Nn = (o) => o.join("/").replace(/\/\/+/g, "/"), ly = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), oy = (o) => o && o !== "?" ? o.startsWith("?") ? o : "?" + o : "", iy = (o) => o && o !== "#" ? o.startsWith("#") ? o : "#" + o : "", di = class {
  constructor(o, c, f, s = !1) {
    this.status = o, this.statusText = c || "", this.internal = s, f instanceof Error ? (this.data = f.toString(), this.error = f) : this.data = f;
  }
};
function Fa(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
var mh = ["POST", "PUT", "PATCH", "DELETE"], uy = new Set(mh), sy = ["GET", ...mh], cy = new Set(sy), dy = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), fy = /* @__PURE__ */ new Set([307, 308]), ws = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, py = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Ol = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, zs = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, hy = (o) => ({ hasErrorBoundary: !!o.hasErrorBoundary }), Ap = "remix-router-transitions", yh = Symbol("ResetLoaderData");
function my(o) {
  const c = o.window ? o.window : typeof window < "u" ? window : void 0, f = c !== void 0 && c.document !== void 0 && c.document.createElement !== void 0;
  _e(o.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let s, y, v, E = o.hydrationRouteProperties || [], b = o.mapRouteProperties || hy, p = {}, g = si(o.routes, b, void 0, p), P = o.basename || "/", C = o.dataStrategy || yy, O = { unstable_middleware: !1, ...o.future }, q = null, U = /* @__PURE__ */ new Set(), te = null, Q = null, Y = null, F = o.hydrationData != null, j = Pr(g, o.history.location, P), B = !1, re = null;
  if (j != null || o.patchRoutesOnNavigation)
    if (j && !o.hydrationData && ta(j, g, o.history.location.pathname).active && (j = null), j) if (j.some((z) => z.route.lazy)) y = !1;
    else if (j.some((z) => z.route.loader)) {
      let z = o.hydrationData ? o.hydrationData.loaderData : null, M = o.hydrationData ? o.hydrationData.errors : null;
      if (M) {
        let _ = j.findIndex((Z) => M[Z.route.id] !== void 0);
        y = j.slice(0, _ + 1).every((Z) => !xs(Z.route, z, M));
      } else y = j.every((_) => !xs(_.route, z, M));
    } else y = !0;
    else {
      y = !1, j = [];
      let z = ta(null, g, o.history.location.pathname);
      z.active && z.matches && (B = !0, j = z.matches);
    }
  else {
    let z = hn(404, { pathname: o.history.location.pathname }), { matches: M, route: _ } = Kp(g);
    y = !0, j = M, re = { [_.id]: z };
  }
  let H, V, x = { historyAction: o.history.action, location: o.history.location, matches: j, initialized: y, navigation: ws, restoreScrollPosition: o.hydrationData == null && null, preventScrollReset: !1, revalidation: "idle", loaderData: o.hydrationData && o.hydrationData.loaderData || {}, actionData: o.hydrationData && o.hydrationData.actionData || null, errors: o.hydrationData && o.hydrationData.errors || re, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, ue = "POP", we = !1, fe = !1, he = /* @__PURE__ */ new Map(), je = null, me = !1, K = !1, m = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map(), I = 0, W = -1, J = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Map(), Ot = null;
  function We(z, M = {}) {
    x = { ...x, ...z };
    let _ = [], Z = [];
    x.fetchers.forEach((oe, ce) => {
      oe.state === "idle" && (ve.has(ce) ? _.push(ce) : Z.push(ce));
    }), ve.forEach((oe) => {
      x.fetchers.has(oe) || T.has(oe) || _.push(oe);
    }), [...U].forEach((oe) => oe(x, { deletedFetchers: _, viewTransitionOpts: M.viewTransitionOpts, flushSync: M.flushSync === !0 })), _.forEach((oe) => Jr(oe)), Z.forEach((oe) => x.fetchers.delete(oe));
  }
  function De(z, M, { flushSync: _ } = {}) {
    var Oe, Ke;
    let Z, oe = x.actionData != null && x.navigation.formMethod != null && en(x.navigation.formMethod) && x.navigation.state === "loading" && ((Oe = z.state) == null ? void 0 : Oe._isRedirect) !== !0;
    Z = M.actionData ? Object.keys(M.actionData).length > 0 ? M.actionData : null : oe ? x.actionData : null;
    let ce = M.loaderData ? Qp(x.loaderData, M.loaderData, M.matches || [], M.errors) : x.loaderData, se = x.blockers;
    se.size > 0 && (se = new Map(se), se.forEach((Ge, _t) => se.set(_t, Ol)));
    let pe, Ce = we === !0 || x.navigation.formMethod != null && en(x.navigation.formMethod) && ((Ke = z.state) == null ? void 0 : Ke._isRedirect) !== !0;
    if (s && (g = s, s = void 0), me || ue === "POP" || (ue === "PUSH" ? o.history.push(z, z.state) : ue === "REPLACE" && o.history.replace(z, z.state)), ue === "POP") {
      let Ge = he.get(x.location.pathname);
      Ge && Ge.has(z.pathname) ? pe = { currentLocation: x.location, nextLocation: z } : he.has(z.pathname) && (pe = { currentLocation: z, nextLocation: x.location });
    } else if (fe) {
      let Ge = he.get(x.location.pathname);
      Ge ? Ge.add(z.pathname) : (Ge = /* @__PURE__ */ new Set([z.pathname]), he.set(x.location.pathname, Ge)), pe = { currentLocation: x.location, nextLocation: z };
    }
    We({ ...M, actionData: Z, loaderData: ce, historyAction: ue, location: z, initialized: !0, navigation: ws, revalidation: "idle", restoreScrollPosition: Tt(z, M.matches || x.matches), preventScrollReset: Ce, blockers: se }, { viewTransitionOpts: pe, flushSync: _ === !0 }), ue = "POP", we = !1, fe = !1, me = !1, K = !1, Ot == null || Ot.resolve(), Ot = null;
  }
  async function Mt(z, M, _) {
    H && H.abort(), H = null, ue = z, me = (_ && _.startUninterruptedRevalidation) === !0, function(X, de) {
      if (te && Y) {
        let ye = gn(X, de);
        te[ye] = Y();
      }
    }(x.location, x.matches), we = (_ && _.preventScrollReset) === !0, fe = (_ && _.enableViewTransition) === !0;
    let Z = s || g, oe = _ && _.overrideNavigation, ce = _ != null && _.initialHydration && x.matches && x.matches.length > 0 && !B ? x.matches : Pr(Z, M, P), se = (_ && _.flushSync) === !0;
    if (ce && x.initialized && !K && function(X, de) {
      return X.pathname !== de.pathname || X.search !== de.search ? !1 : X.hash === "" ? de.hash !== "" : X.hash === de.hash || de.hash !== "";
    }(x.location, M) && !(_ && _.submission && en(_.submission.formMethod))) return void De(M, { matches: ce }, { flushSync: se });
    let pe = ta(ce, Z, M.pathname);
    if (pe.active && pe.matches && (ce = pe.matches), !ce) {
      let { error: X, notFoundMatches: de, route: ye } = Ct(M.pathname);
      return void De(M, { matches: de, loaderData: {}, errors: { [ye.id]: X } }, { flushSync: se });
    }
    H = new AbortController();
    let Ce, Oe = Ma(o.history, M, H.signal, _ && _.submission), Ke = new Op(o.unstable_getContext ? await o.unstable_getContext() : void 0);
    if (_ && _.pendingError) Ce = [Qr(ce).route.id, { type: "error", error: _.pendingError }];
    else if (_ && _.submission && en(_.submission.formMethod)) {
      let X = await async function(de, ye, lt, rt, $t, bn, At, st = {}) {
        ja();
        let qe, kt = function(ke, Ue) {
          return { state: "submitting", location: ke, formMethod: Ue.formMethod, formAction: Ue.formAction, formEncType: Ue.formEncType, formData: Ue.formData, json: Ue.json, text: Ue.text };
        }(ye, lt);
        if (We({ navigation: kt }, { flushSync: st.flushSync === !0 }), bn) {
          let ke = await na(rt, ye.pathname, de.signal);
          if (ke.type === "aborted") return { shortCircuited: !0 };
          if (ke.type === "error") {
            let Ue = Qr(ke.partialMatches).route.id;
            return { matches: ke.partialMatches, pendingActionResult: [Ue, { type: "error", error: ke.error }] };
          }
          if (!ke.matches) {
            let { notFoundMatches: Ue, error: Ie, route: Pn } = Ct(ye.pathname);
            return { matches: Ue, pendingActionResult: [Pn.id, { type: "error", error: Ie }] };
          }
          rt = ke.matches;
        }
        let $e = jl(rt, ye);
        if ($e.route.action || $e.route.lazy) {
          let ke = Aa(b, p, de, rt, $e, At ? [] : E, $t), Ue = await Mn(de, ke, $t, null);
          if (qe = Ue[$e.route.id], !qe) {
            for (let Ie of rt) if (Ue[Ie.route.id]) {
              qe = Ue[Ie.route.id];
              break;
            }
          }
          if (de.signal.aborted) return { shortCircuited: !0 };
        } else qe = { type: "error", error: hn(405, { method: de.method, pathname: ye.pathname, routeId: $e.route.id }) };
        if (Yr(qe)) {
          let ke;
          return st && st.replace != null ? ke = st.replace : ke = Vp(qe.response.headers.get("Location"), new URL(de.url), P) === x.location.pathname + x.location.search, await yn(de, qe, !0, { submission: lt, replace: ke }), { shortCircuited: !0 };
        }
        if (Zt(qe)) {
          let ke = Qr(rt, $e.route.id);
          return (st && st.replace) !== !0 && (ue = "PUSH"), { matches: rt, pendingActionResult: [ke.route.id, qe, $e.route.id] };
        }
        return { matches: rt, pendingActionResult: [$e.route.id, qe] };
      }(Oe, M, _.submission, ce, Ke, pe.active, _ && _.initialHydration === !0, { replace: _.replace, flushSync: se });
      if (X.shortCircuited) return;
      if (X.pendingActionResult) {
        let [de, ye] = X.pendingActionResult;
        if (Zt(ye) && Fa(ye.error) && ye.error.status === 404) return H = null, void De(M, { matches: X.matches, loaderData: {}, errors: { [de]: ye.error } });
      }
      ce = X.matches || ce, Ce = X.pendingActionResult, oe = ks(M, _.submission), se = !1, pe.active = !1, Oe = Ma(o.history, Oe.url, Oe.signal);
    }
    let { shortCircuited: Ge, matches: _t, loaderData: gt, errors: Ze } = await async function(X, de, ye, lt, rt, $t, bn, At, st, qe, kt, $e) {
      let ke = $t || ks(de, bn), Ue = bn || At || Gp(ke), Ie = !me && !qe;
      if (rt) {
        if (Ie) {
          let St = Tr($e);
          We({ navigation: ke, ...St !== void 0 ? { actionData: St } : {} }, { flushSync: kt });
        }
        let ze = await na(ye, de.pathname, X.signal);
        if (ze.type === "aborted") return { shortCircuited: !0 };
        if (ze.type === "error") {
          let St = Qr(ze.partialMatches).route.id;
          return { matches: ze.partialMatches, loaderData: {}, errors: { [St]: ze.error } };
        }
        if (!ze.matches) {
          let { error: St, notFoundMatches: Ft, route: An } = Ct(de.pathname);
          return { matches: Ft, loaderData: {}, errors: { [An.id]: St } };
        }
        ye = ze.matches;
      }
      let Pn = s || g, { dsMatches: Qt, revalidatingFetchers: Me } = jp(X, lt, b, p, o.history, x, ye, Ue, de, qe ? [] : E, qe === !0, K, m, ve, le, ne, Pn, P, o.patchRoutesOnNavigation != null, $e);
      if (W = ++I, !o.dataStrategy && !Qt.some((ze) => ze.shouldLoad) && Me.length === 0) {
        let ze = Vl();
        return De(de, { matches: ye, loaderData: {}, errors: $e && Zt($e[1]) ? { [$e[0]]: $e[1].error } : null, ...Yp($e), ...ze ? { fetchers: new Map(x.fetchers) } : {} }, { flushSync: kt }), { shortCircuited: !0 };
      }
      if (Ie) {
        let ze = {};
        if (!rt) {
          ze.navigation = ke;
          let St = Tr($e);
          St !== void 0 && (ze.actionData = St);
        }
        Me.length > 0 && (ze.fetchers = function(St) {
          return St.forEach((Ft) => {
            let An = x.fetchers.get(Ft.key), nr = Ml(void 0, An ? An.data : void 0);
            x.fetchers.set(Ft.key, nr);
          }), new Map(x.fetchers);
        }(Me)), We(ze, { flushSync: kt });
      }
      Me.forEach((ze) => {
        vn(ze.key), ze.controller && T.set(ze.key, ze.controller);
      });
      let tn = () => Me.forEach((ze) => vn(ze.key));
      H && H.signal.addEventListener("abort", tn);
      let { loaderResults: wn, fetcherResults: Jn } = await Gr(Qt, Me, X, lt);
      if (X.signal.aborted) return { shortCircuited: !0 };
      H && H.signal.removeEventListener("abort", tn), Me.forEach((ze) => T.delete(ze.key));
      let Ut = ni(wn);
      if (Ut) return await yn(X, Ut.result, !0, { replace: st }), { shortCircuited: !0 };
      if (Ut = ni(Jn), Ut) return ne.add(Ut.key), await yn(X, Ut.result, !0, { replace: st }), { shortCircuited: !0 };
      let { loaderData: Zn, errors: er } = qp(x, ye, wn, $e, Me, Jn);
      qe && x.errors && (er = { ...x.errors, ...er });
      let tr = Vl(), nn = $a(W), It = tr || nn || Me.length > 0;
      return { matches: ye, loaderData: Zn, errors: er, ...It ? { fetchers: new Map(x.fetchers) } : {} };
    }(Oe, M, ce, Ke, pe.active, oe, _ && _.submission, _ && _.fetcherSubmission, _ && _.replace, _ && _.initialHydration === !0, se, Ce);
    Ge || (H = null, De(M, { matches: _t || ce, ...Yp(Ce), loaderData: gt, errors: Ze }));
  }
  function Tr(z) {
    return z && !Zt(z[1]) ? { [z[0]]: z[1].data } : x.actionData ? Object.keys(x.actionData).length === 0 ? null : x.actionData : void 0;
  }
  async function yn(z, M, _, { submission: Z, fetcherSubmission: oe, preventScrollReset: ce, replace: se } = {}) {
    M.response.headers.has("X-Remix-Revalidate") && (K = !0);
    let pe = M.response.headers.get("Location");
    _e(pe, "Expected a Location header on the redirect Response"), pe = Vp(pe, new URL(z.url), P);
    let Ce = $l(x.location, pe, { _isRedirect: !0 });
    if (f) {
      let Ze = !1;
      if (M.response.headers.has("X-Remix-Reload-Document")) Ze = !0;
      else if (zs.test(pe)) {
        const X = dh(pe, !0);
        Ze = X.origin !== c.location.origin || mn(X.pathname, P) == null;
      }
      if (Ze) return void (se ? c.location.replace(pe) : c.location.assign(pe));
    }
    H = null;
    let Oe = se === !0 || M.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: Ke, formAction: Ge, formEncType: _t } = x.navigation;
    !Z && !oe && Ke && Ge && _t && (Z = Gp(x.navigation));
    let gt = Z || oe;
    if (fy.has(M.response.status) && gt && en(gt.formMethod)) await Mt(Oe, Ce, { submission: { ...gt, formAction: pe }, preventScrollReset: ce || we, enableViewTransition: _ ? fe : void 0 });
    else {
      let Ze = ks(Ce, Z);
      await Mt(Oe, Ce, { overrideNavigation: Ze, fetcherSubmission: oe, preventScrollReset: ce || we, enableViewTransition: _ ? fe : void 0 });
    }
  }
  async function Mn(z, M, _, Z) {
    let oe, ce = {};
    try {
      oe = await async function(se, pe, Ce, Oe, Ke) {
        Ce.some((Ze) => {
          var X;
          return (X = Ze._lazyPromises) == null ? void 0 : X.middleware;
        }) && await Promise.all(Ce.map((Ze) => {
          var X;
          return (X = Ze._lazyPromises) == null ? void 0 : X.middleware;
        }));
        let Ge = { request: pe, params: Ce[0].params, context: Ke, matches: Ce }, _t = (Ze) => {
          let X = Ge;
          return gh(X, !1, () => Ze({ ...X, fetcherKey: Oe, unstable_runClientMiddleware: () => {
            throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler");
          } }), (de, ye) => ({ [ye]: { type: "error", result: de } }));
        }, gt = await se({ ...Ge, fetcherKey: Oe, unstable_runClientMiddleware: _t });
        try {
          await Promise.all(Ce.flatMap((Ze) => {
            var X, de;
            return [(X = Ze._lazyPromises) == null ? void 0 : X.handler, (de = Ze._lazyPromises) == null ? void 0 : de.route];
          }));
        } catch {
        }
        return gt;
      }(C, z, M, Z, _);
    } catch (se) {
      return M.filter((pe) => pe.shouldLoad).forEach((pe) => {
        ce[pe.route.id] = { type: "error", error: se };
      }), ce;
    }
    if (z.signal.aborted) return ce;
    for (let [se, pe] of Object.entries(oe)) if (by(pe)) {
      let Ce = pe.result;
      ce[se] = { type: "redirect", response: gy(Ce, z, se, M, P) };
    } else ce[se] = await vy(pe);
    return ce;
  }
  async function Gr(z, M, _, Z) {
    let oe = Mn(_, z, Z, null), ce = Promise.all(M.map(async (se) => {
      if (se.matches && se.match && se.request && se.controller) {
        let pe = (await Mn(se.request, se.matches, Z, se.key))[se.match.route.id];
        return { [se.key]: pe };
      }
      return Promise.resolve({ [se.key]: { type: "error", error: hn(404, { pathname: se.path }) } });
    }));
    return { loaderResults: await oe, fetcherResults: (await ce).reduce((se, pe) => Object.assign(se, pe), {}) };
  }
  function ja() {
    K = !0, le.forEach((z, M) => {
      T.has(M) && m.add(M), vn(M);
    });
  }
  function Cn(z, M, _ = {}) {
    x.fetchers.set(z, M), We({ fetchers: new Map(x.fetchers) }, { flushSync: (_ && _.flushSync) === !0 });
  }
  function ht(z, M, _, Z = {}) {
    let oe = Qr(x.matches, M);
    Jr(z), We({ errors: { [oe.route.id]: _ }, fetchers: new Map(x.fetchers) }, { flushSync: (Z && Z.flushSync) === !0 });
  }
  function Bl(z) {
    return be.set(z, (be.get(z) || 0) + 1), ve.has(z) && ve.delete(z), x.fetchers.get(z) || py;
  }
  function Jr(z) {
    let M = x.fetchers.get(z);
    !T.has(z) || M && M.state === "loading" && J.has(z) || vn(z), le.delete(z), J.delete(z), ne.delete(z), ve.delete(z), m.delete(z), x.fetchers.delete(z);
  }
  function vn(z) {
    let M = T.get(z);
    M && (M.abort(), T.delete(z));
  }
  function Zr(z) {
    for (let M of z) {
      let _ = Cr(Bl(M).data);
      x.fetchers.set(M, _);
    }
  }
  function Vl() {
    let z = [], M = !1;
    for (let _ of ne) {
      let Z = x.fetchers.get(_);
      _e(Z, `Expected fetcher: ${_}`), Z.state === "loading" && (ne.delete(_), z.push(_), M = !0);
    }
    return Zr(z), M;
  }
  function $a(z) {
    let M = [];
    for (let [_, Z] of J) if (Z < z) {
      let oe = x.fetchers.get(_);
      _e(oe, `Expected fetcher: ${_}`), oe.state === "loading" && (vn(_), J.delete(_), M.push(_));
    }
    return Zr(M), M.length > 0;
  }
  function Wl(z) {
    x.blockers.delete(z), Ve.delete(z);
  }
  function ea(z, M) {
    let _ = x.blockers.get(z) || Ol;
    _e(_.state === "unblocked" && M.state === "blocked" || _.state === "blocked" && M.state === "blocked" || _.state === "blocked" && M.state === "proceeding" || _.state === "blocked" && M.state === "unblocked" || _.state === "proceeding" && M.state === "unblocked", `Invalid blocker state transition: ${_.state} -> ${M.state}`);
    let Z = new Map(x.blockers);
    Z.set(z, M), We({ blockers: Z });
  }
  function Gn({ currentLocation: z, nextLocation: M, historyAction: _ }) {
    if (Ve.size === 0) return;
    Ve.size > 1 && vt(!1, "A router only supports one blocker at a time");
    let Z = Array.from(Ve.entries()), [oe, ce] = Z[Z.length - 1], se = x.blockers.get(oe);
    return se && se.state === "proceeding" ? void 0 : ce({ currentLocation: z, nextLocation: M, historyAction: _ }) ? oe : void 0;
  }
  function Ct(z) {
    let M = hn(404, { pathname: z }), _ = s || g, { matches: Z, route: oe } = Kp(_);
    return { notFoundMatches: Z, route: oe, error: M };
  }
  function gn(z, M) {
    return Q && Q(z, M.map((_) => function(Z, oe) {
      let { route: ce, pathname: se, params: pe } = Z;
      return { id: ce.id, pathname: se, params: pe, data: oe[ce.id], handle: ce.handle };
    }(_, x.loaderData))) || z.key;
  }
  function Tt(z, M) {
    if (te) {
      let _ = gn(z, M), Z = te[_];
      if (typeof Z == "number") return Z;
    }
    return null;
  }
  function ta(z, M, _) {
    if (o.patchRoutesOnNavigation) {
      if (!z)
        return { active: !0, matches: li(M, _, P, !0) || [] };
      if (Object.keys(z[0].params).length > 0)
        return { active: !0, matches: li(M, _, P, !0) };
    }
    return { active: !1, matches: null };
  }
  async function na(z, M, _, Z) {
    if (!o.patchRoutesOnNavigation) return { type: "success", matches: z };
    let oe = z;
    for (; ; ) {
      let ce = s == null, se = s || g, pe = p;
      try {
        await o.patchRoutesOnNavigation({ signal: _, path: M, matches: oe, fetcherKey: Z, patch: (Ke, Ge) => {
          _.aborted || $p(Ke, Ge, se, pe, b);
        } });
      } catch (Ke) {
        return { type: "error", error: Ke, partialMatches: oe };
      } finally {
        ce && !_.aborted && (g = [...g]);
      }
      if (_.aborted) return { type: "aborted" };
      let Ce = Pr(se, M, P);
      if (Ce) return { type: "success", matches: Ce };
      let Oe = li(se, M, P, !0);
      if (!Oe || oe.length === Oe.length && oe.every((Ke, Ge) => Ke.route.id === Oe[Ge].route.id)) return { type: "success", matches: null };
      oe = Oe;
    }
  }
  return v = { get basename() {
    return P;
  }, get future() {
    return O;
  }, get state() {
    return x;
  }, get routes() {
    return g;
  }, get window() {
    return c;
  }, initialize: function() {
    if (q = o.history.listen(({ action: z, location: M, delta: _ }) => {
      if (V) return V(), void (V = void 0);
      vt(Ve.size === 0 || _ != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let Z = Gn({ currentLocation: x.location, nextLocation: M, historyAction: z });
      if (Z && _ != null) {
        let oe = new Promise((ce) => {
          V = ce;
        });
        return o.history.go(-1 * _), void ea(Z, { state: "blocked", location: M, proceed() {
          ea(Z, { state: "proceeding", proceed: void 0, reset: void 0, location: M }), oe.then(() => o.history.go(_));
        }, reset() {
          let ce = new Map(x.blockers);
          ce.set(Z, Ol), We({ blockers: ce });
        } });
      }
      return Mt(z, M);
    }), f) {
      (function(M, _) {
        try {
          let Z = M.sessionStorage.getItem(Ap);
          if (Z) {
            let oe = JSON.parse(Z);
            for (let [ce, se] of Object.entries(oe || {})) se && Array.isArray(se) && _.set(ce, new Set(se || []));
          }
        } catch {
        }
      })(c, he);
      let z = () => function(M, _) {
        if (_.size > 0) {
          let Z = {};
          for (let [oe, ce] of _) Z[oe] = [...ce];
          try {
            M.sessionStorage.setItem(Ap, JSON.stringify(Z));
          } catch (oe) {
            vt(!1, `Failed to save applied view transitions in sessionStorage (${oe}).`);
          }
        }
      }(c, he);
      c.addEventListener("pagehide", z), je = () => c.removeEventListener("pagehide", z);
    }
    return x.initialized || Mt("POP", x.location, { initialHydration: !0 }), v;
  }, subscribe: function(z) {
    return U.add(z), () => U.delete(z);
  }, enableScrollRestoration: function(z, M, _) {
    if (te = z, Y = M, Q = _ || null, !F && x.navigation === ws) {
      F = !0;
      let Z = Tt(x.location, x.matches);
      Z != null && We({ restoreScrollPosition: Z });
    }
    return () => {
      te = null, Y = null, Q = null;
    };
  }, navigate: async function z(M, _) {
    if (typeof M == "number") return void o.history.go(M);
    let Z = Es(x.location, x.matches, P, M, _ == null ? void 0 : _.fromRouteId, _ == null ? void 0 : _.relative), { path: oe, submission: ce, error: se } = Fp(!1, Z, _), pe = x.location, Ce = $l(x.location, oe, _ && _.state);
    Ce = { ...Ce, ...o.history.encodeLocation(Ce) };
    let Oe = _ && _.replace != null ? _.replace : void 0, Ke = "PUSH";
    Oe === !0 ? Ke = "REPLACE" : Oe === !1 || ce != null && en(ce.formMethod) && ce.formAction === x.location.pathname + x.location.search && (Ke = "REPLACE");
    let Ge = _ && "preventScrollReset" in _ ? _.preventScrollReset === !0 : void 0, _t = (_ && _.flushSync) === !0, gt = Gn({ currentLocation: pe, nextLocation: Ce, historyAction: Ke });
    gt ? ea(gt, { state: "blocked", location: Ce, proceed() {
      ea(gt, { state: "proceeding", proceed: void 0, reset: void 0, location: Ce }), z(M, _);
    }, reset() {
      let Ze = new Map(x.blockers);
      Ze.set(gt, Ol), We({ blockers: Ze });
    } }) : await Mt(Ke, Ce, { submission: ce, pendingError: se, preventScrollReset: Ge, replace: _ && _.replace, enableViewTransition: _ && _.viewTransition, flushSync: _t });
  }, fetch: async function(z, M, _, Z) {
    vn(z);
    let oe = (Z && Z.flushSync) === !0, ce = s || g, se = Es(x.location, x.matches, P, _, M, Z == null ? void 0 : Z.relative), pe = Pr(ce, se, P), Ce = ta(pe, ce, se);
    if (Ce.active && Ce.matches && (pe = Ce.matches), !pe) return void ht(z, M, hn(404, { pathname: se }), { flushSync: oe });
    let { path: Oe, submission: Ke, error: Ge } = Fp(!0, se, Z);
    if (Ge) return void ht(z, M, Ge, { flushSync: oe });
    let _t = jl(pe, Oe), gt = new Op(o.unstable_getContext ? await o.unstable_getContext() : void 0), Ze = (Z && Z.preventScrollReset) === !0;
    Ke && en(Ke.formMethod) ? await async function(X, de, ye, lt, rt, $t, bn, At, st, qe) {
      function kt(xe) {
        if (!xe.route.action && !xe.route.lazy) {
          let rn = hn(405, { method: qe.formMethod, pathname: ye, routeId: de });
          return ht(X, de, rn, { flushSync: At }), !0;
        }
        return !1;
      }
      if (ja(), le.delete(X), !bn && kt(lt)) return;
      let $e = x.fetchers.get(X);
      Cn(X, function(xe, rn) {
        return { state: "submitting", formMethod: xe.formMethod, formAction: xe.formAction, formEncType: xe.formEncType, formData: xe.formData, json: xe.json, text: xe.text, data: rn ? rn.data : void 0 };
      }(qe, $e), { flushSync: At });
      let ke = new AbortController(), Ue = Ma(o.history, ye, ke.signal, qe);
      if (bn) {
        let xe = await na(rt, ye, Ue.signal, X);
        if (xe.type === "aborted") return;
        if (xe.type === "error") return void ht(X, de, xe.error, { flushSync: At });
        if (!xe.matches) return void ht(X, de, hn(404, { pathname: ye }), { flushSync: At });
        if (kt(lt = jl(rt = xe.matches, ye))) return;
      }
      T.set(X, ke);
      let Ie = I, Pn = Aa(b, p, Ue, rt, lt, E, $t), Qt = await Mn(Ue, Pn, $t, X), Me = Qt[lt.route.id];
      if (Ue.signal.aborted) return void (T.get(X) === ke && T.delete(X));
      if (ve.has(X)) {
        if (Yr(Me) || Zt(Me)) return void Cn(X, Cr(void 0));
      } else {
        if (Yr(Me)) return T.delete(X), W > Ie ? void Cn(X, Cr(void 0)) : (ne.add(X), Cn(X, Ml(qe)), yn(Ue, Me, !1, { fetcherSubmission: qe, preventScrollReset: st }));
        if (Zt(Me)) return void ht(X, de, Me.error);
      }
      let tn = x.navigation.location || x.location, wn = Ma(o.history, tn, ke.signal), Jn = s || g, Ut = x.navigation.state !== "idle" ? Pr(Jn, x.navigation.location, P) : x.matches;
      _e(Ut, "Didn't find any matches after fetcher action");
      let Zn = ++I;
      J.set(X, Zn);
      let er = Ml(qe, Me.data);
      x.fetchers.set(X, er);
      let { dsMatches: tr, revalidatingFetchers: nn } = jp(wn, $t, b, p, o.history, x, Ut, qe, tn, E, !1, K, m, ve, le, ne, Jn, P, o.patchRoutesOnNavigation != null, [lt.route.id, Me]);
      nn.filter((xe) => xe.key !== X).forEach((xe) => {
        let rn = xe.key, rr = x.fetchers.get(rn), ql = Ml(void 0, rr ? rr.data : void 0);
        x.fetchers.set(rn, ql), vn(rn), xe.controller && T.set(rn, xe.controller);
      }), We({ fetchers: new Map(x.fetchers) });
      let It = () => nn.forEach((xe) => vn(xe.key));
      ke.signal.addEventListener("abort", It);
      let { loaderResults: ze, fetcherResults: St } = await Gr(tr, nn, wn, $t);
      if (ke.signal.aborted) return;
      if (ke.signal.removeEventListener("abort", It), J.delete(X), T.delete(X), nn.forEach((xe) => T.delete(xe.key)), x.fetchers.has(X)) {
        let xe = Cr(Me.data);
        x.fetchers.set(X, xe);
      }
      let Ft = ni(ze);
      if (Ft) return yn(wn, Ft.result, !1, { preventScrollReset: st });
      if (Ft = ni(St), Ft) return ne.add(Ft.key), yn(wn, Ft.result, !1, { preventScrollReset: st });
      let { loaderData: An, errors: nr } = qp(x, Ut, ze, void 0, nn, St);
      $a(Zn), x.navigation.state === "loading" && Zn > W ? (_e(ue, "Expected pending action"), H && H.abort(), De(x.navigation.location, { matches: Ut, loaderData: An, errors: nr, fetchers: new Map(x.fetchers) })) : (We({ errors: nr, loaderData: Qp(x.loaderData, An, Ut, nr), fetchers: new Map(x.fetchers) }), K = !1);
    }(z, M, Oe, _t, pe, gt, Ce.active, oe, Ze, Ke) : (le.set(z, { routeId: M, path: Oe }), await async function(X, de, ye, lt, rt, $t, bn, At, st, qe) {
      let kt = x.fetchers.get(X);
      Cn(X, Ml(qe, kt ? kt.data : void 0), { flushSync: At });
      let $e = new AbortController(), ke = Ma(o.history, ye, $e.signal);
      if (bn) {
        let Me = await na(rt, ye, ke.signal, X);
        if (Me.type === "aborted") return;
        if (Me.type === "error") return void ht(X, de, Me.error, { flushSync: At });
        if (!Me.matches) return void ht(X, de, hn(404, { pathname: ye }), { flushSync: At });
        lt = jl(rt = Me.matches, ye);
      }
      T.set(X, $e);
      let Ue = I, Ie = Aa(b, p, ke, rt, lt, E, $t), Pn = await Mn(ke, Ie, $t, X), Qt = Pn[lt.route.id];
      if (T.get(X) === $e && T.delete(X), !ke.signal.aborted) {
        if (ve.has(X)) return void Cn(X, Cr(void 0));
        if (Yr(Qt)) return W > Ue ? void Cn(X, Cr(void 0)) : (ne.add(X), void await yn(ke, Qt, !1, { preventScrollReset: st }));
        if (Zt(Qt)) return void ht(X, de, Qt.error);
        Cn(X, Cr(Qt.data));
      }
    }(z, M, Oe, _t, pe, gt, Ce.active, oe, Ze, Ke));
  }, revalidate: function() {
    Ot || (Ot = function() {
      let M, _, Z = new Promise((oe, ce) => {
        M = async (se) => {
          oe(se);
          try {
            await Z;
          } catch {
          }
        }, _ = async (se) => {
          ce(se);
          try {
            await Z;
          } catch {
          }
        };
      });
      return { promise: Z, resolve: M, reject: _ };
    }()), ja(), We({ revalidation: "loading" });
    let z = Ot.promise;
    return x.navigation.state === "submitting" ? z : x.navigation.state === "idle" ? (Mt(x.historyAction, x.location, { startUninterruptedRevalidation: !0 }), z) : (Mt(ue || x.historyAction, x.navigation.location, { overrideNavigation: x.navigation, enableViewTransition: fe === !0 }), z);
  }, createHref: (z) => o.history.createHref(z), encodeLocation: (z) => o.history.encodeLocation(z), getFetcher: Bl, deleteFetcher: function(z) {
    let M = (be.get(z) || 0) - 1;
    M <= 0 ? (be.delete(z), ve.add(z)) : be.set(z, M), We({ fetchers: new Map(x.fetchers) });
  }, dispose: function() {
    q && q(), je && je(), U.clear(), H && H.abort(), x.fetchers.forEach((z, M) => Jr(M)), x.blockers.forEach((z, M) => Wl(M));
  }, getBlocker: function(z, M) {
    let _ = x.blockers.get(z) || Ol;
    return Ve.get(z) !== M && Ve.set(z, M), _;
  }, deleteBlocker: Wl, patchRoutes: function(z, M) {
    let _ = s == null;
    $p(z, M, s || g, p, b), _ && (g = [...g], We({}));
  }, _internalFetchControllers: T, _internalSetRoutes: function(z) {
    p = {}, s = si(z, b, void 0, p);
  } }, v;
}
function Es(o, c, f, s, y, v) {
  let E, b;
  if (y) {
    E = [];
    for (let g of c) if (E.push(g), g.route.id === y) {
      b = g;
      break;
    }
  } else E = c, b = c[c.length - 1];
  let p = _s(s || ".", Ts(E), mn(o.pathname, f) || o.pathname, v === "path");
  if (s == null && (p.search = o.search, p.hash = o.hash), (s == null || s === "" || s === ".") && b) {
    let g = Ns(p.search);
    if (b.route.index && !g) p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index";
    else if (!b.route.index && g) {
      let P = new URLSearchParams(p.search), C = P.getAll("index");
      P.delete("index"), C.filter((q) => q).forEach((q) => P.append("index", q));
      let O = P.toString();
      p.search = O ? `?${O}` : "";
    }
  }
  return f !== "/" && (p.pathname = p.pathname === "/" ? f : Nn([f, p.pathname])), Rr(p);
}
function Fp(o, c, f) {
  if (!f || !function(C) {
    return C != null && ("formData" in C && C.formData != null || "body" in C && C.body !== void 0);
  }(f)) return { path: c };
  if (f.formMethod && (s = f.formMethod, !cy.has(s.toUpperCase()))) return { path: c, error: hn(405, { method: f.formMethod }) };
  var s;
  let y, v, E = () => ({ path: c, error: hn(400, { type: "invalid-body" }) }), b = (f.formMethod || "get").toUpperCase(), p = kh(c);
  if (f.body !== void 0) {
    if (f.formEncType === "text/plain") {
      if (!en(b)) return E();
      let C = typeof f.body == "string" ? f.body : f.body instanceof FormData || f.body instanceof URLSearchParams ? Array.from(f.body.entries()).reduce((O, [q, U]) => `${O}${q}=${U}
`, "") : String(f.body);
      return { path: c, submission: { formMethod: b, formAction: p, formEncType: f.formEncType, formData: void 0, json: void 0, text: C } };
    }
    if (f.formEncType === "application/json") {
      if (!en(b)) return E();
      try {
        let C = typeof f.body == "string" ? JSON.parse(f.body) : f.body;
        return { path: c, submission: { formMethod: b, formAction: p, formEncType: f.formEncType, formData: void 0, json: C, text: void 0 } };
      } catch {
        return E();
      }
    }
  }
  if (_e(typeof FormData == "function", "FormData is not available in this environment"), f.formData) y = Rs(f.formData), v = f.formData;
  else if (f.body instanceof FormData) y = Rs(f.body), v = f.body;
  else if (f.body instanceof URLSearchParams) y = f.body, v = Wp(y);
  else if (f.body == null) y = new URLSearchParams(), v = new FormData();
  else try {
    y = new URLSearchParams(f.body), v = Wp(y);
  } catch {
    return E();
  }
  let g = { formMethod: b, formAction: p, formEncType: f && f.formEncType || "application/x-www-form-urlencoded", formData: v, json: void 0, text: void 0 };
  if (en(g.formMethod)) return { path: c, submission: g };
  let P = Lr(c);
  return o && P.search && Ns(P.search) && y.append("index", ""), P.search = `?${y}`, { path: Rr(P), submission: g };
}
function jp(o, c, f, s, y, v, E, b, p, g, P, C, O, q, U, te, Q, Y, F, j) {
  var je;
  let B, re = j ? Zt(j[1]) ? j[1].error : j[1].data : void 0, H = y.createURL(v.location), V = y.createURL(p);
  if (P && v.errors) {
    let me = Object.keys(v.errors)[0];
    B = E.findIndex((K) => K.route.id === me);
  } else if (j && Zt(j[1])) {
    let me = j[0];
    B = E.findIndex((K) => K.route.id === me) - 1;
  }
  let x = j ? j[1].statusCode : void 0, ue = x && x >= 400, we = { currentUrl: H, currentParams: ((je = v.matches[0]) == null ? void 0 : je.params) || {}, nextUrl: V, nextParams: E[0].params, ...b, actionResult: re, actionStatus: x }, fe = E.map((me, K) => {
    let { route: m } = me, T = null;
    if (B != null && K > B ? T = !1 : m.lazy ? T = !0 : m.loader == null ? T = !1 : P ? T = xs(m, v.loaderData, v.errors) : function(ne, le, be) {
      let ve = !le || be.route.id !== le.route.id, Ve = !ne.hasOwnProperty(be.route.id);
      return ve || Ve;
    }(v.loaderData, v.matches[K], me) && (T = !0), T !== null) return Ps(f, s, o, me, g, c, T);
    let I = !ue && (C || H.pathname + H.search === V.pathname + V.search || H.search !== V.search || function(ne, le) {
      let be = ne.route.path;
      return ne.pathname !== le.pathname || be != null && be.endsWith("*") && ne.params["*"] !== le.params["*"];
    }(v.matches[K], me)), W = { ...we, defaultShouldRevalidate: I }, J = Cs(me, W);
    return Ps(f, s, o, me, g, c, J, W);
  }), he = [];
  return U.forEach((me, K) => {
    if (P || !E.some((be) => be.route.id === me.routeId) || q.has(K)) return;
    let m = v.fetchers.get(K), T = m && m.state !== "idle" && m.data === void 0, I = Pr(Q, me.path, Y);
    if (!I)
      return F && T ? void 0 : void he.push({ key: K, routeId: me.routeId, path: me.path, matches: null, match: null, request: null, controller: null });
    if (te.has(K)) return;
    let W = jl(I, me.path), J = new AbortController(), ne = Ma(y, me.path, J.signal), le = null;
    if (O.has(K)) O.delete(K), le = Aa(f, s, ne, I, W, g, c);
    else if (T) C && (le = Aa(f, s, ne, I, W, g, c));
    else {
      let be = { ...we, defaultShouldRevalidate: !ue && C };
      Cs(W, be) && (le = Aa(f, s, ne, I, W, g, c, be));
    }
    le && he.push({ key: K, routeId: me.routeId, path: me.path, matches: le, match: W, request: ne, controller: J });
  }), { dsMatches: fe, revalidatingFetchers: he };
}
function xs(o, c, f) {
  if (o.lazy) return !0;
  if (!o.loader) return !1;
  let s = c != null && o.id in c, y = f != null && f[o.id] !== void 0;
  return !(!s && y) && (typeof o.loader == "function" && o.loader.hydrate === !0 || !s && !y);
}
function Cs(o, c) {
  if (o.route.shouldRevalidate) {
    let f = o.route.shouldRevalidate(c);
    if (typeof f == "boolean") return f;
  }
  return c.defaultShouldRevalidate;
}
function $p(o, c, f, s, y) {
  let v;
  if (o) {
    let b = s[o];
    _e(b, `No route found to patch children into: routeId = ${o}`), b.children || (b.children = []), v = b.children;
  } else v = f;
  let E = si(c.filter((b) => !v.some((p) => vh(b, p))), y, [o || "_", "patch", String((v == null ? void 0 : v.length) || "0")], s);
  v.push(...E);
}
function vh(o, c) {
  return "id" in o && "id" in c && o.id === c.id || o.index === c.index && o.path === c.path && o.caseSensitive === c.caseSensitive && (!(o.children && o.children.length !== 0 || c.children && c.children.length !== 0) || o.children.every((f, s) => {
    var y;
    return (y = c.children) == null ? void 0 : y.some((v) => vh(f, v));
  }));
}
var Up = /* @__PURE__ */ new WeakMap(), Ip = ({ key: o, route: c, manifest: f, mapRouteProperties: s }) => {
  let y = f[c.id];
  if (_e(y, "No route found in manifest"), !y.lazy || typeof y.lazy != "object") return;
  let v = y.lazy[o];
  if (!v) return;
  let E = Up.get(y);
  E || (E = {}, Up.set(y, E));
  let b = E[o];
  if (b) return b;
  let p = (async () => {
    let g = function(C) {
      return Ym.has(C);
    }(o), P = y[o] !== void 0 && o !== "hasErrorBoundary";
    if (g) vt(!g, "Route property " + o + " is not a supported lazy route property. This property will be ignored."), E[o] = Promise.resolve();
    else if (P) vt(!1, `Route "${y.id}" has a static property "${o}" defined. The lazy property will be ignored.`);
    else {
      let C = await v();
      C != null && (Object.assign(y, { [o]: C }), Object.assign(y, s(y)));
    }
    typeof y.lazy == "object" && (y.lazy[o] = void 0, Object.values(y.lazy).every((C) => C === void 0) && (y.lazy = void 0));
  })();
  return E[o] = p, p;
}, Hp = /* @__PURE__ */ new WeakMap();
async function Bp(o) {
  let c = o.matches.filter((s) => s.shouldLoad), f = {};
  return (await Promise.all(c.map((s) => s.resolve()))).forEach((s, y) => {
    f[c[y].route.id] = s;
  }), f;
}
async function yy(o) {
  return o.matches.some((c) => c.route.unstable_middleware) ? gh(o, !1, () => Bp(o), (c, f) => ({ [f]: { type: "error", result: c } })) : Bp(o);
}
async function gh(o, c, f, s) {
  let { matches: y, request: v, params: E, context: b } = o, p = { handlerResult: void 0 };
  try {
    let g = y.flatMap((C) => C.route.unstable_middleware ? C.route.unstable_middleware.map((O) => [C.route.id, O]) : []), P = await bh({ request: v, params: E, context: b }, g, c, p, f);
    return c ? P : p.handlerResult;
  } catch (g) {
    if (!p.middlewareError) throw g;
    let P = await s(p.middlewareError.error, p.middlewareError.routeId);
    return p.handlerResult ? Object.assign(p.handlerResult, P) : P;
  }
}
async function bh(o, c, f, s, y, v = 0) {
  let { request: E } = o;
  if (E.signal.aborted)
    throw E.signal.reason ? E.signal.reason : new Error(`Request aborted without an \`AbortSignal.reason\`: ${E.method} ${E.url}`);
  let b = c[v];
  if (!b) return s.handlerResult = await y(), s.handlerResult;
  let p, [g, P] = b, C = !1, O = async () => {
    if (C) throw new Error("You may only call `next()` once per middleware");
    C = !0, await bh(o, c, f, s, y, v + 1);
  };
  try {
    let q = await P({ request: o.request, params: o.params, context: o.context }, O);
    return C ? q === void 0 ? p : q : O();
  } catch (q) {
    throw s.middlewareError ? s.middlewareError.error !== q && (s.middlewareError = { routeId: g, error: q }) : s.middlewareError = { routeId: g, error: q }, q;
  }
}
function wh(o, c, f, s, y) {
  let v = Ip({ key: "unstable_middleware", route: s.route, manifest: c, mapRouteProperties: o }), E = function(b, p, g, P, C) {
    let O = g[b.id];
    if (_e(O, "No route found in manifest"), !b.lazy) return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
    if (typeof b.lazy == "function") {
      let Y = Hp.get(O);
      if (Y) return { lazyRoutePromise: Y, lazyHandlerPromise: Y };
      let F = (async () => {
        _e(typeof b.lazy == "function", "No lazy route function found");
        let j = await b.lazy(), B = {};
        for (let H in j) {
          let V = j[H];
          if (V === void 0) continue;
          let x = (re = H, Km.has(re)), ue = O[H] !== void 0 && H !== "hasErrorBoundary";
          x ? vt(!x, "Route property " + H + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : ue ? vt(!ue, `Route "${O.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`) : B[H] = V;
        }
        var re;
        Object.assign(O, B), Object.assign(O, { ...P(O), lazy: void 0 });
      })();
      return Hp.set(O, F), F.catch(() => {
      }), { lazyRoutePromise: F, lazyHandlerPromise: F };
    }
    let q, U = Object.keys(b.lazy), te = [];
    for (let Y of U) {
      if (C && C.includes(Y)) continue;
      let F = Ip({ key: Y, route: b, manifest: g, mapRouteProperties: P });
      F && (te.push(F), Y === p && (q = F));
    }
    let Q = te.length > 0 ? Promise.all(te).then(() => {
    }) : void 0;
    return Q == null || Q.catch(() => {
    }), q == null || q.catch(() => {
    }), { lazyRoutePromise: Q, lazyHandlerPromise: q };
  }(s.route, en(f.method) ? "action" : "loader", c, o, y);
  return { middleware: v, route: E.lazyRoutePromise, handler: E.lazyHandlerPromise };
}
function Ps(o, c, f, s, y, v, E, b = null) {
  let p = !1, g = wh(o, c, f, s, y);
  return { ...s, _lazyPromises: g, shouldLoad: E, unstable_shouldRevalidateArgs: b, unstable_shouldCallHandler: (P) => (p = !0, b ? Cs(s, typeof P == "boolean" ? { ...b, defaultShouldRevalidate: P } : b) : E), resolve: (P) => p || E || P && f.method === "GET" && (s.route.lazy || s.route.loader) ? async function({ request: C, match: O, lazyHandlerPromise: q, lazyRoutePromise: U, handlerOverride: te, scopedContext: Q }) {
    let Y, F, j = en(C.method), B = j ? "action" : "loader", re = (H) => {
      let V, x = new Promise((fe, he) => V = he);
      F = () => V(), C.signal.addEventListener("abort", F);
      let ue = (fe) => typeof H != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${B}" [routeId: ${O.route.id}]`)) : H({ request: C, params: O.params, context: Q }, ...fe !== void 0 ? [fe] : []), we = (async () => {
        try {
          return { type: "data", result: await (te ? te((fe) => ue(fe)) : ue()) };
        } catch (fe) {
          return { type: "error", result: fe };
        }
      })();
      return Promise.race([we, x]);
    };
    try {
      let H = j ? O.route.action : O.route.loader;
      if (q || U) if (H) {
        let V, [x] = await Promise.all([re(H).catch((ue) => {
          V = ue;
        }), q, U]);
        if (V !== void 0) throw V;
        Y = x;
      } else {
        await q;
        let V = j ? O.route.action : O.route.loader;
        if (!V) {
          if (B === "action") {
            let x = new URL(C.url), ue = x.pathname + x.search;
            throw hn(405, { method: C.method, pathname: ue, routeId: O.route.id });
          }
          return { type: "data", result: void 0 };
        }
        [Y] = await Promise.all([re(V), U]);
      }
      else {
        if (!H) {
          let V = new URL(C.url);
          throw hn(404, { pathname: V.pathname + V.search });
        }
        Y = await re(H);
      }
    } catch (H) {
      return { type: "error", result: H };
    } finally {
      F && C.signal.removeEventListener("abort", F);
    }
    return Y;
  }({ request: f, match: s, lazyHandlerPromise: g == null ? void 0 : g.handler, lazyRoutePromise: g == null ? void 0 : g.route, handlerOverride: P, scopedContext: v }) : Promise.resolve({ type: "data", result: void 0 }) };
}
function Aa(o, c, f, s, y, v, E, b = null) {
  return s.map((p) => p.route.id !== y.route.id ? { ...p, shouldLoad: !1, unstable_shouldRevalidateArgs: b, unstable_shouldCallHandler: () => !1, _lazyPromises: wh(o, c, f, p, v), resolve: () => Promise.resolve({ type: "data", result: void 0 }) } : Ps(o, c, f, p, v, E, !0, b));
}
async function vy(o) {
  var s, y, v, E, b, p;
  let { result: c, type: f } = o;
  if (Sh(c)) {
    let g;
    try {
      let P = c.headers.get("Content-Type");
      g = P && /\bapplication\/json\b/.test(P) ? c.body == null ? null : await c.json() : await c.text();
    } catch (P) {
      return { type: "error", error: P };
    }
    return f === "error" ? { type: "error", error: new di(c.status, c.statusText, g), statusCode: c.status, headers: c.headers } : { type: "data", data: g, statusCode: c.status, headers: c.headers };
  }
  return f === "error" ? Xp(c) ? c.data instanceof Error ? { type: "error", error: c.data, statusCode: (s = c.init) == null ? void 0 : s.status, headers: (y = c.init) != null && y.headers ? new Headers(c.init.headers) : void 0 } : { type: "error", error: new di(((v = c.init) == null ? void 0 : v.status) || 500, void 0, c.data), statusCode: Fa(c) ? c.status : void 0, headers: (E = c.init) != null && E.headers ? new Headers(c.init.headers) : void 0 } : { type: "error", error: c, statusCode: Fa(c) ? c.status : void 0 } : Xp(c) ? { type: "data", data: c.data, statusCode: (b = c.init) == null ? void 0 : b.status, headers: (p = c.init) != null && p.headers ? new Headers(c.init.headers) : void 0 } : { type: "data", data: c };
}
function gy(o, c, f, s, y) {
  let v = o.headers.get("Location");
  if (_e(v, "Redirects returned/thrown from loaders/actions must have a Location header"), !zs.test(v)) {
    let E = s.slice(0, s.findIndex((b) => b.route.id === f) + 1);
    v = Es(new URL(c.url), E, y, v), o.headers.set("Location", v);
  }
  return o;
}
function Vp(o, c, f) {
  if (zs.test(o)) {
    let s = o, y = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s), v = mn(y.pathname, f) != null;
    if (y.origin === c.origin && v) return y.pathname + y.search + y.hash;
  }
  return o;
}
function Ma(o, c, f, s) {
  let y = o.createURL(kh(c)).toString(), v = { signal: f };
  if (s && en(s.formMethod)) {
    let { formMethod: E, formEncType: b } = s;
    v.method = E.toUpperCase(), b === "application/json" ? (v.headers = new Headers({ "Content-Type": b }), v.body = JSON.stringify(s.json)) : b === "text/plain" ? v.body = s.text : b === "application/x-www-form-urlencoded" && s.formData ? v.body = Rs(s.formData) : v.body = s.formData;
  }
  return new Request(y, v);
}
function Rs(o) {
  let c = new URLSearchParams();
  for (let [f, s] of o.entries()) c.append(f, typeof s == "string" ? s : s.name);
  return c;
}
function Wp(o) {
  let c = new FormData();
  for (let [f, s] of o.entries()) c.append(f, s);
  return c;
}
function qp(o, c, f, s, y, v) {
  let { loaderData: E, errors: b } = function(p, g, P, C = !1, O = !1) {
    let q, U = {}, te = null, Q = !1, Y = {}, F = P && Zt(P[1]) ? P[1].error : void 0;
    return p.forEach((j) => {
      if (!(j.route.id in g)) return;
      let B = j.route.id, re = g[B];
      if (_e(!Yr(re), "Cannot handle redirect results in processLoaderData"), Zt(re)) {
        let H = re.error;
        if (F !== void 0 && (H = F, F = void 0), te = te || {}, O) te[B] = H;
        else {
          let V = Qr(p, B);
          te[V.route.id] == null && (te[V.route.id] = H);
        }
        C || (U[B] = yh), Q || (Q = !0, q = Fa(re.error) ? re.error.status : 500), re.headers && (Y[B] = re.headers);
      } else U[B] = re.data, re.statusCode && re.statusCode !== 200 && !Q && (q = re.statusCode), re.headers && (Y[B] = re.headers);
    }), F !== void 0 && P && (te = { [P[0]]: F }, P[2] && (U[P[2]] = void 0)), { loaderData: U, errors: te, statusCode: q || 200, loaderHeaders: Y };
  }(c, f, s);
  return y.filter((p) => !p.matches || p.matches.some((g) => g.shouldLoad)).forEach((p) => {
    let { key: g, match: P, controller: C } = p, O = v[g];
    if (_e(O, "Did not find corresponding fetcher result"), !C || !C.signal.aborted) if (Zt(O)) {
      let q = Qr(o.matches, P == null ? void 0 : P.route.id);
      b && b[q.route.id] || (b = { ...b, [q.route.id]: O.error }), o.fetchers.delete(g);
    } else if (Yr(O)) _e(!1, "Unhandled fetcher revalidation redirect");
    else {
      let q = Cr(O.data);
      o.fetchers.set(g, q);
    }
  }), { loaderData: E, errors: b };
}
function Qp(o, c, f, s) {
  let y = Object.entries(c).filter(([, v]) => v !== yh).reduce((v, [E, b]) => (v[E] = b, v), {});
  for (let v of f) {
    let E = v.route.id;
    if (!c.hasOwnProperty(E) && o.hasOwnProperty(E) && v.route.loader && (y[E] = o[E]), s && s.hasOwnProperty(E)) break;
  }
  return y;
}
function Yp(o) {
  return o ? Zt(o[1]) ? { actionData: {} } : { actionData: { [o[0]]: o[1].data } } : {};
}
function Qr(o, c) {
  return (c ? o.slice(0, o.findIndex((f) => f.route.id === c) + 1) : [...o]).reverse().find((f) => f.route.hasErrorBoundary === !0) || o[0];
}
function Kp(o) {
  let c = o.length === 1 ? o[0] : o.find((f) => f.index || !f.path || f.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: c }], route: c };
}
function hn(o, { pathname: c, routeId: f, method: s, type: y, message: v } = {}) {
  let E = "Unknown Server Error", b = "Unknown @remix-run/router error";
  return o === 400 ? (E = "Bad Request", s && c && f ? b = `You made a ${s} request to "${c}" but did not provide a \`loader\` for route "${f}", so there is no way to handle the request.` : y === "invalid-body" && (b = "Unable to encode submission body")) : o === 403 ? (E = "Forbidden", b = `Route "${f}" does not match URL "${c}"`) : o === 404 ? (E = "Not Found", b = `No route matches URL "${c}"`) : o === 405 && (E = "Method Not Allowed", s && c && f ? b = `You made a ${s.toUpperCase()} request to "${c}" but did not provide an \`action\` for route "${f}", so there is no way to handle the request.` : s && (b = `Invalid request method "${s.toUpperCase()}"`)), new di(o || 500, E, new Error(b), !0);
}
function ni(o) {
  let c = Object.entries(o);
  for (let f = c.length - 1; f >= 0; f--) {
    let [s, y] = c[f];
    if (Yr(y)) return { key: s, result: y };
  }
}
function kh(o) {
  return Rr({ ...typeof o == "string" ? Lr(o) : o, hash: "" });
}
function by(o) {
  return Sh(o.result) && dy.has(o.result.status);
}
function Zt(o) {
  return o.type === "error";
}
function Yr(o) {
  return (o && o.type) === "redirect";
}
function Xp(o) {
  return typeof o == "object" && o != null && "type" in o && "data" in o && "init" in o && o.type === "DataWithResponseInit";
}
function Sh(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.headers == "object" && o.body !== void 0;
}
function en(o) {
  return uy.has(o.toUpperCase());
}
function Ns(o) {
  return new URLSearchParams(o).getAll("index").some((c) => c === "");
}
function jl(o, c) {
  let f = typeof c == "string" ? Lr(c).search : c.search;
  if (o[o.length - 1].route.index && Ns(f || "")) return o[o.length - 1];
  let s = hh(o);
  return s[s.length - 1];
}
function Gp(o) {
  let { formMethod: c, formAction: f, formEncType: s, text: y, formData: v, json: E } = o;
  if (c && f && s) return y != null ? { formMethod: c, formAction: f, formEncType: s, formData: void 0, json: void 0, text: y } : v != null ? { formMethod: c, formAction: f, formEncType: s, formData: v, json: void 0, text: void 0 } : E !== void 0 ? { formMethod: c, formAction: f, formEncType: s, formData: void 0, json: E, text: void 0 } : void 0;
}
function ks(o, c) {
  return c ? { state: "loading", location: o, formMethod: c.formMethod, formAction: c.formAction, formEncType: c.formEncType, formData: c.formData, json: c.json, text: c.text } : { state: "loading", location: o, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function Ml(o, c) {
  return o ? { state: "loading", formMethod: o.formMethod, formAction: o.formAction, formEncType: o.formEncType, formData: o.formData, json: o.json, text: o.text, data: c } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: c };
}
function Cr(o) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: o };
}
var Kr = A.createContext(null);
Kr.displayName = "DataRouter";
var Il = A.createContext(null);
Il.displayName = "DataRouterState";
var Ds = A.createContext({ isTransitioning: !1 });
Ds.displayName = "ViewTransition";
var Eh = A.createContext(/* @__PURE__ */ new Map());
Eh.displayName = "Fetchers", A.createContext(null).displayName = "Await";
var Dn = A.createContext(null);
Dn.displayName = "Navigation";
var pi = A.createContext(null);
pi.displayName = "Location";
var On = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
On.displayName = "Route";
var Os = A.createContext(null);
function Hl() {
  return A.useContext(pi) != null;
}
function Xr() {
  return _e(Hl(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(pi).location;
}
Os.displayName = "RouteError";
var Jp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zp(o) {
  A.useContext(Dn).static || A.useLayoutEffect(o);
}
function wy() {
  let { isDataRoute: o } = A.useContext(On);
  return o ? function() {
    let { router: c } = function(v) {
      let E = A.useContext(Kr);
      return _e(E, Ms(v)), E;
    }("useNavigate"), f = As("useNavigate"), s = A.useRef(!1);
    return Zp(() => {
      s.current = !0;
    }), A.useCallback(async (v, E = {}) => {
      vt(s.current, Jp), s.current && (typeof v == "number" ? c.navigate(v) : await c.navigate(v, { fromRouteId: f, ...E }));
    }, [c, f]);
  }() : function() {
    _e(Hl(), "useNavigate() may be used only in the context of a <Router> component.");
    let c = A.useContext(Kr), { basename: f, navigator: s } = A.useContext(Dn), { matches: y } = A.useContext(On), { pathname: v } = Xr(), E = JSON.stringify(Ts(y)), b = A.useRef(!1);
    return Zp(() => {
      b.current = !0;
    }), A.useCallback((p, g = {}) => {
      if (vt(b.current, Jp), !b.current) return;
      if (typeof p == "number") return void s.go(p);
      let P = _s(p, JSON.parse(E), v, g.relative === "path");
      c == null && f !== "/" && (P.pathname = P.pathname === "/" ? f : Nn([f, P.pathname])), (g.replace ? s.replace : s.push)(P, g.state, g);
    }, [f, s, E, v, c]);
  }();
}
var ky = A.createContext(null);
function Ul(o, { relative: c } = {}) {
  let { matches: f } = A.useContext(On), { pathname: s } = Xr(), y = JSON.stringify(Ts(f));
  return A.useMemo(() => _s(o, JSON.parse(y), s, c === "path"), [o, y, s, c]);
}
function Sy(o, c, f, s) {
  _e(Hl(), "useRoutes() may be used only in the context of a <Router> component.");
  let y, { navigator: v } = A.useContext(Dn), { matches: E } = A.useContext(On), b = E[E.length - 1], p = b ? b.params : {}, g = b ? b.pathname : "/", P = b ? b.pathnameBase : "/", C = b && b.route;
  {
    let Q = C && C.path || "";
    th(g, !C || Q.endsWith("*") || Q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`);
  }
  y = Xr();
  let O = y.pathname || "/", q = O;
  if (P !== "/") {
    let Q = P.replace(/^\//, "").split("/");
    q = "/" + O.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let U = Pr(o, { pathname: q });
  return vt(C || U != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `), vt(U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0, `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), function(Q, Y = [], F = null) {
    if (Q == null) {
      if (!F) return null;
      if (F.errors) Q = F.matches;
      else {
        if (Y.length !== 0 || F.initialized || !(F.matches.length > 0)) return null;
        Q = F.matches;
      }
    }
    let j = Q, B = F == null ? void 0 : F.errors;
    if (B != null) {
      let V = j.findIndex((x) => x.route.id && (B == null ? void 0 : B[x.route.id]) !== void 0);
      _e(V >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(B).join(",")}`), j = j.slice(0, Math.min(j.length, V + 1));
    }
    let re = !1, H = -1;
    if (F) for (let V = 0; V < j.length; V++) {
      let x = j[V];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (H = V), x.route.id) {
        let { loaderData: ue, errors: we } = F, fe = x.route.loader && !ue.hasOwnProperty(x.route.id) && (!we || we[x.route.id] === void 0);
        if (x.route.lazy || fe) {
          re = !0, j = H >= 0 ? j.slice(0, H + 1) : [j[0]];
          break;
        }
      }
    }
    return j.reduceRight((V, x, ue) => {
      let we, fe = !1, he = null, je = null;
      F && (we = B && x.route.id ? B[x.route.id] : void 0, he = x.route.errorElement || xy, re && (H < 0 && ue === 0 ? (th("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), fe = !0, je = null) : H === ue && (fe = !0, je = x.route.hydrateFallbackElement || null)));
      let me = Y.concat(j.slice(0, ue + 1)), K = () => {
        let m;
        return m = we ? he : fe ? je : x.route.Component ? A.createElement(x.route.Component, null) : x.route.element ? x.route.element : V, A.createElement(Py, { match: x, routeContext: { outlet: V, matches: me, isDataRoute: F != null }, children: m });
      };
      return F && (x.route.ErrorBoundary || x.route.errorElement || ue === 0) ? A.createElement(Cy, { location: F.location, revalidation: F.revalidation, component: he, error: we, children: K(), routeContext: { outlet: null, matches: me, isDataRoute: !0 } }) : K();
    }, null);
  }(U && U.map((Q) => Object.assign({}, Q, { params: Object.assign({}, p, Q.params), pathname: Nn([P, v.encodeLocation ? v.encodeLocation(Q.pathname).pathname : Q.pathname]), pathnameBase: Q.pathnameBase === "/" ? P : Nn([P, v.encodeLocation ? v.encodeLocation(Q.pathnameBase).pathname : Q.pathnameBase]) })), E, f, s);
}
function Ey() {
  let o = xh(), c = Fa(o) ? `${o.status} ${o.statusText}` : o instanceof Error ? o.message : JSON.stringify(o), f = o instanceof Error ? o.stack : null, s = "rgba(200,200,200, 0.5)", y = { padding: "0.5rem", backgroundColor: s }, v = { padding: "2px 4px", backgroundColor: s }, E = null;
  return console.error("Error handled by React Router default ErrorBoundary:", o), E = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", { style: v }, "ErrorBoundary"), " or", " ", A.createElement("code", { style: v }, "errorElement"), " prop on your route.")), A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", { style: { fontStyle: "italic" } }, c), f ? A.createElement("pre", { style: y }, f) : null, E);
}
var xy = A.createElement(Ey, null), Cy = class extends A.Component {
  constructor(o) {
    super(o), this.state = { location: o.location, revalidation: o.revalidation, error: o.error };
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, c) {
    return c.location !== o.location || c.revalidation !== "idle" && o.revalidation === "idle" ? { error: o.error, location: o.location, revalidation: o.revalidation } : { error: o.error !== void 0 ? o.error : c.error, location: c.location, revalidation: o.revalidation || c.revalidation };
  }
  componentDidCatch(o, c) {
    console.error("React Router caught the following error during render", o, c);
  }
  render() {
    return this.state.error !== void 0 ? A.createElement(On.Provider, { value: this.props.routeContext }, A.createElement(Os.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function Py({ routeContext: o, match: c, children: f }) {
  let s = A.useContext(Kr);
  return s && s.static && s.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = c.route.id), A.createElement(On.Provider, { value: o }, f);
}
function Ms(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function As(o) {
  let c = function(s) {
    let y = A.useContext(On);
    return _e(y, Ms(s)), y;
  }(o), f = c.matches[c.matches.length - 1];
  return _e(f.route.id, `${o} can only be used on routes that contain a unique "id"`), f.route.id;
}
function xh() {
  var s;
  let o = A.useContext(Os), c = function(y) {
    let v = A.useContext(Il);
    return _e(v, Ms(y)), v;
  }("useRouteError"), f = As("useRouteError");
  return o !== void 0 ? o : (s = c.errors) == null ? void 0 : s[f];
}
var eh = {};
function th(o, c, f) {
  c || eh[o] || (eh[o] = !0, vt(!1, f));
}
var nh = {};
function rh(o, c) {
  o || nh[c] || (nh[c] = !0, console.warn(c));
}
function Ry(o) {
  let c = { hasErrorBoundary: o.hasErrorBoundary || o.ErrorBoundary != null || o.errorElement != null };
  return o.Component && (o.element && vt(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(c, { element: A.createElement(o.Component), Component: void 0 })), o.HydrateFallback && (o.hydrateFallbackElement && vt(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(c, { hydrateFallbackElement: A.createElement(o.HydrateFallback), HydrateFallback: void 0 })), o.ErrorBoundary && (o.errorElement && vt(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(c, { errorElement: A.createElement(o.ErrorBoundary), ErrorBoundary: void 0 })), c;
}
var Ly = ["HydrateFallback", "hydrateFallbackElement"], Ty = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((o, c) => {
      this.resolve = (f) => {
        this.status === "pending" && (this.status = "resolved", o(f));
      }, this.reject = (f) => {
        this.status === "pending" && (this.status = "rejected", c(f));
      };
    });
  }
};
function _y({ router: o, flushSync: c }) {
  let [f, s] = A.useState(o.state), [y, v] = A.useState(), [E, b] = A.useState({ isTransitioning: !1 }), [p, g] = A.useState(), [P, C] = A.useState(), [O, q] = A.useState(), U = A.useRef(/* @__PURE__ */ new Map()), te = A.useCallback((j, { deletedFetchers: B, flushSync: re, viewTransitionOpts: H }) => {
    j.fetchers.forEach((x, ue) => {
      x.data !== void 0 && U.current.set(ue, x.data);
    }), B.forEach((x) => U.current.delete(x)), rh(re === !1 || c != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
    let V = o.window != null && o.window.document != null && typeof o.window.document.startViewTransition == "function";
    if (rh(H == null || V, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), H && V) {
      if (c && re) {
        c(() => {
          P && (p && p.resolve(), P.skipTransition()), b({ isTransitioning: !0, flushSync: !0, currentLocation: H.currentLocation, nextLocation: H.nextLocation });
        });
        let x = o.window.document.startViewTransition(() => {
          c(() => s(j));
        });
        return x.finished.finally(() => {
          c(() => {
            g(void 0), C(void 0), v(void 0), b({ isTransitioning: !1 });
          });
        }), void c(() => C(x));
      }
      P ? (p && p.resolve(), P.skipTransition(), q({ state: j, currentLocation: H.currentLocation, nextLocation: H.nextLocation })) : (v(j), b({ isTransitioning: !0, flushSync: !1, currentLocation: H.currentLocation, nextLocation: H.nextLocation }));
    } else c && re ? c(() => s(j)) : A.startTransition(() => s(j));
  }, [o.window, c, P, p]);
  A.useLayoutEffect(() => o.subscribe(te), [o, te]), A.useEffect(() => {
    E.isTransitioning && !E.flushSync && g(new Ty());
  }, [E]), A.useEffect(() => {
    if (p && y && o.window) {
      let j = y, B = p.promise, re = o.window.document.startViewTransition(async () => {
        A.startTransition(() => s(j)), await B;
      });
      re.finished.finally(() => {
        g(void 0), C(void 0), v(void 0), b({ isTransitioning: !1 });
      }), C(re);
    }
  }, [y, p, o.window]), A.useEffect(() => {
    p && y && f.location.key === y.location.key && p.resolve();
  }, [p, P, f.location, y]), A.useEffect(() => {
    !E.isTransitioning && O && (v(O.state), b({ isTransitioning: !0, flushSync: !1, currentLocation: O.currentLocation, nextLocation: O.nextLocation }), q(void 0));
  }, [E.isTransitioning, O]);
  let Q = A.useMemo(() => ({ createHref: o.createHref, encodeLocation: o.encodeLocation, go: (j) => o.navigate(j), push: (j, B, re) => o.navigate(j, { state: B, preventScrollReset: re == null ? void 0 : re.preventScrollReset }), replace: (j, B, re) => o.navigate(j, { replace: !0, state: B, preventScrollReset: re == null ? void 0 : re.preventScrollReset }) }), [o]), Y = o.basename || "/", F = A.useMemo(() => ({ router: o, navigator: Q, static: !1, basename: Y }), [o, Q, Y]);
  return A.createElement(A.Fragment, null, A.createElement(Kr.Provider, { value: F }, A.createElement(Il.Provider, { value: f }, A.createElement(Eh.Provider, { value: U.current }, A.createElement(Ds.Provider, { value: E }, A.createElement(Dy, { basename: Y, location: f.location, navigationType: f.historyAction, navigator: Q }, A.createElement(zy, { routes: o.routes, future: o.future, state: f })))))), null);
}
var zy = A.memo(function({ routes: o, future: c, state: f }) {
  return Sy(o, 0, f, c);
});
function Ny(o) {
  return function(c) {
    let f = A.useContext(On).outlet;
    return f && A.createElement(ky.Provider, { value: c }, f);
  }(o.context);
}
function Dy({ basename: o = "/", children: c = null, location: f, navigationType: s = "POP", navigator: y, static: v = !1 }) {
  _e(!Hl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let E = o.replace(/^\/*/, "/"), b = A.useMemo(() => ({ basename: E, navigator: y, static: v, future: {} }), [E, y, v]);
  typeof f == "string" && (f = Lr(f));
  let { pathname: p = "/", search: g = "", hash: P = "", state: C = null, key: O = "default" } = f, q = A.useMemo(() => {
    let U = mn(p, E);
    return U == null ? null : { location: { pathname: U, search: g, hash: P, state: C, key: O }, navigationType: s };
  }, [E, p, g, P, C, O, s]);
  return vt(q != null, `<Router basename="${E}"> is not able to match the URL "${p}${g}${P}" because it does not start with the basename, so the <Router> won't render anything.`), q == null ? null : A.createElement(Dn.Provider, { value: b }, A.createElement(pi.Provider, { children: c, value: q }));
}
var oi = "get", ii = "application/x-www-form-urlencoded";
function ri(o) {
  return o != null && typeof o.tagName == "string";
}
var ai = null, Oy = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ss(o) {
  return o == null || Oy.has(o) ? o : (vt(!1, `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`), null);
}
function My(o, c) {
  let f, s, y, v, E;
  if (ri(b = o) && b.tagName.toLowerCase() === "form") {
    let p = o.getAttribute("action");
    s = p ? mn(p, c) : null, f = o.getAttribute("method") || oi, y = Ss(o.getAttribute("enctype")) || ii, v = new FormData(o);
  } else if (function(p) {
    return ri(p) && p.tagName.toLowerCase() === "button";
  }(o) || function(p) {
    return ri(p) && p.tagName.toLowerCase() === "input";
  }(o) && (o.type === "submit" || o.type === "image")) {
    let p = o.form;
    if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let g = o.getAttribute("formaction") || p.getAttribute("action");
    if (s = g ? mn(g, c) : null, f = o.getAttribute("formmethod") || p.getAttribute("method") || oi, y = Ss(o.getAttribute("formenctype")) || Ss(p.getAttribute("enctype")) || ii, v = new FormData(p, o), !function() {
      if (ai === null) try {
        new FormData(document.createElement("form"), 0), ai = !1;
      } catch {
        ai = !0;
      }
      return ai;
    }()) {
      let { name: P, type: C, value: O } = o;
      if (C === "image") {
        let q = P ? `${P}.` : "";
        v.append(`${q}x`, "0"), v.append(`${q}y`, "0");
      } else P && v.append(P, O);
    }
  } else {
    if (ri(o)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    f = oi, s = null, y = ii, E = o;
  }
  var b;
  return v && y === "text/plain" && (E = v, v = void 0), { action: s, method: f.toLowerCase(), encType: y, formData: v, body: E };
}
function Fs(o, c) {
  if (o === !1 || o == null) throw new Error(c);
}
function Ay(o) {
  return o != null && (o.href == null ? o.rel === "preload" && typeof o.imageSrcSet == "string" && typeof o.imageSizes == "string" : typeof o.rel == "string" && typeof o.href == "string");
}
async function Fy(o, c, f) {
  return function(s, y) {
    let v = /* @__PURE__ */ new Set();
    return new Set(y), s.reduce((E, b) => {
      let p = JSON.stringify(function(g) {
        let P = {}, C = Object.keys(g).sort();
        for (let O of C) P[O] = g[O];
        return P;
      }(b));
      return v.has(p) || (v.add(p), E.push({ key: p, link: b })), E;
    }, []);
  }((await Promise.all(o.map(async (s) => {
    let y = c.routes[s.route.id];
    if (y) {
      let v = await async function(E, b) {
        if (E.id in b) return b[E.id];
        try {
          let p = await import(E.module);
          return b[E.id] = p, p;
        } catch (p) {
          return console.error(`Error loading route module \`${E.module}\`, reloading page...`), console.error(p), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
          });
        }
      }(y, f);
      return v.links ? v.links() : [];
    }
    return [];
  }))).flat(1).filter(Ay).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map((s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }));
}
function ah(o, c, f, s, y, v) {
  let E = (p, g) => !f[g] || p.route.id !== f[g].route.id, b = (p, g) => {
    var P;
    return f[g].pathname !== p.pathname || ((P = f[g].route.path) == null ? void 0 : P.endsWith("*")) && f[g].params["*"] !== p.params["*"];
  };
  return v === "assets" ? c.filter((p, g) => E(p, g) || b(p, g)) : v === "data" ? c.filter((p, g) => {
    var C;
    let P = s.routes[p.route.id];
    if (!P || !P.hasLoader) return !1;
    if (E(p, g) || b(p, g)) return !0;
    if (p.route.shouldRevalidate) {
      let O = p.route.shouldRevalidate({ currentUrl: new URL(y.pathname + y.search + y.hash, window.origin), currentParams: ((C = f[0]) == null ? void 0 : C.params) || {}, nextUrl: new URL(o, window.origin), nextParams: p.params, defaultShouldRevalidate: !0 });
      if (typeof O == "boolean") return O;
    }
    return !0;
  }) : [];
}
function jy(o, c, { includeHydrateFallback: f } = {}) {
  return s = o.map((y) => {
    let v = c.routes[y.route.id];
    if (!v) return [];
    let E = [v.module];
    return v.clientActionModule && (E = E.concat(v.clientActionModule)), v.clientLoaderModule && (E = E.concat(v.clientLoaderModule)), f && v.hydrateFallbackModule && (E = E.concat(v.hydrateFallbackModule)), v.imports && (E = E.concat(v.imports)), E;
  }).flat(1), [...new Set(s)];
  var s;
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ch() {
  let o = A.useContext(Kr);
  return Fs(o, "You must render this element inside a <DataRouterContext.Provider> element"), o;
}
var js = A.createContext(void 0);
function lh() {
  let o = A.useContext(js);
  return Fs(o, "You must render this element inside a <HydratedRouter> element"), o;
}
function Al(o, c) {
  return (f) => {
    o && o(f), f.defaultPrevented || c(f);
  };
}
function $y({ page: o, ...c }) {
  let { router: f } = Ch(), s = A.useMemo(() => Pr(f.routes, o, f.basename), [f.routes, o, f.basename]);
  return s ? A.createElement(Uy, { page: o, matches: s, ...c }) : null;
}
function Uy({ page: o, matches: c, ...f }) {
  let s = Xr(), { manifest: y, routeModules: v } = lh(), { basename: E } = Ch(), { loaderData: b, matches: p } = function() {
    let U = A.useContext(Il);
    return Fs(U, "You must render this element inside a <DataRouterStateContext.Provider> element"), U;
  }(), g = A.useMemo(() => ah(o, c, p, y, s, "data"), [o, c, p, y, s]), P = A.useMemo(() => ah(o, c, p, y, s, "assets"), [o, c, p, y, s]), C = A.useMemo(() => {
    if (o === s.pathname + s.search + s.hash) return [];
    let U = /* @__PURE__ */ new Set(), te = !1;
    if (c.forEach((Y) => {
      var j;
      let F = y.routes[Y.route.id];
      F && F.hasLoader && (!g.some((B) => B.route.id === Y.route.id) && Y.route.id in b && ((j = v[Y.route.id]) != null && j.shouldRevalidate) || F.hasClientLoader ? te = !0 : U.add(Y.route.id));
    }), U.size === 0) return [];
    let Q = function(Y, F) {
      let j = typeof Y == "string" ? new URL(Y, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : Y;
      return j.pathname === "/" ? j.pathname = "_root.data" : F && mn(j.pathname, F) === "/" ? j.pathname = `${F.replace(/\/$/, "")}/_root.data` : j.pathname = `${j.pathname.replace(/\/$/, "")}.data`, j;
    }(o, E);
    return te && U.size > 0 && Q.searchParams.set("_routes", c.filter((Y) => U.has(Y.route.id)).map((Y) => Y.route.id).join(",")), [Q.pathname + Q.search];
  }, [E, b, s, y, g, c, o, v]), O = A.useMemo(() => jy(P, y), [P, y]), q = function(U) {
    let { manifest: te, routeModules: Q } = lh(), [Y, F] = A.useState([]);
    return A.useEffect(() => {
      let j = !1;
      return Fy(U, te, Q).then((B) => {
        j || F(B);
      }), () => {
        j = !0;
      };
    }, [U, te, Q]), Y;
  }(P);
  return A.createElement(A.Fragment, null, C.map((U) => A.createElement("link", { key: U, rel: "prefetch", as: "fetch", href: U, ...f })), O.map((U) => A.createElement("link", { key: U, rel: "modulepreload", href: U, ...f })), q.map(({ key: U, link: te }) => A.createElement("link", { key: U, ...te })));
}
function Iy(...o) {
  return (c) => {
    o.forEach((f) => {
      typeof f == "function" ? f(c) : f != null && (f.current = c);
    });
  };
}
js.displayName = "FrameworkContext";
var Ph = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
  Ph && (window.__reactRouterVersion = "7.6.1");
} catch {
}
function Hy() {
  let o = window == null ? void 0 : window.__staticRouterHydrationData;
  return o && o.errors && (o = { ...o, errors: By(o.errors) }), o;
}
function By(o) {
  if (!o) return null;
  let c = Object.entries(o), f = {};
  for (let [s, y] of c) if (y && y.__type === "RouteErrorResponse") f[s] = new di(y.status, y.statusText, y.data, y.internal === !0);
  else if (y && y.__type === "Error") {
    if (y.__subType) {
      let v = window[y.__subType];
      if (typeof v == "function") try {
        let E = new v(y.message);
        E.stack = "", f[s] = E;
      } catch {
      }
    }
    if (f[s] == null) {
      let v = new Error(y.message);
      v.stack = "", f[s] = v;
    }
  } else f[s] = y;
  return f;
}
var Rh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, fi = A.forwardRef(function({ onClick: o, discover: c = "render", prefetch: f = "none", relative: s, reloadDocument: y, replace: v, state: E, target: b, to: p, preventScrollReset: g, viewTransition: P, ...C }, O) {
  let q, { basename: U } = A.useContext(Dn), te = typeof p == "string" && Rh.test(p), Q = !1;
  if (typeof p == "string" && te && (q = p, Ph)) try {
    let V = new URL(window.location.href), x = p.startsWith("//") ? new URL(V.protocol + p) : new URL(p), ue = mn(x.pathname, U);
    x.origin === V.origin && ue != null ? p = ue + x.search + x.hash : Q = !0;
  } catch {
    vt(!1, `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let Y = function(V, { relative: x } = {}) {
    _e(Hl(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: ue, navigator: we } = A.useContext(Dn), { hash: fe, pathname: he, search: je } = Ul(V, { relative: x }), me = he;
    return ue !== "/" && (me = he === "/" ? ue : Nn([ue, he])), we.createHref({ pathname: me, search: je, hash: fe });
  }(p, { relative: s }), [F, j, B] = function(V, x) {
    let ue = A.useContext(js), [we, fe] = A.useState(!1), [he, je] = A.useState(!1), { onFocus: me, onBlur: K, onMouseEnter: m, onMouseLeave: T, onTouchStart: I } = x, W = A.useRef(null);
    A.useEffect(() => {
      if (V === "render" && je(!0), V === "viewport") {
        let le = new IntersectionObserver((be) => {
          be.forEach((ve) => {
            je(ve.isIntersecting);
          });
        }, { threshold: 0.5 });
        return W.current && le.observe(W.current), () => {
          le.disconnect();
        };
      }
    }, [V]), A.useEffect(() => {
      if (we) {
        let le = setTimeout(() => {
          je(!0);
        }, 100);
        return () => {
          clearTimeout(le);
        };
      }
    }, [we]);
    let J = () => {
      fe(!0);
    }, ne = () => {
      fe(!1), je(!1);
    };
    return ue ? V !== "intent" ? [he, W, {}] : [he, W, { onFocus: Al(me, J), onBlur: Al(K, ne), onMouseEnter: Al(m, J), onMouseLeave: Al(T, ne), onTouchStart: Al(I, J) }] : [!1, W, {}];
  }(f, C), re = function(V, { target: x, replace: ue, state: we, preventScrollReset: fe, relative: he, viewTransition: je } = {}) {
    let me = wy(), K = Xr(), m = Ul(V, { relative: he });
    return A.useCallback((T) => {
      if (function(I, W) {
        return !(I.button !== 0 || W && W !== "_self" || function(J) {
          return !!(J.metaKey || J.altKey || J.ctrlKey || J.shiftKey);
        }(I));
      }(T, x)) {
        T.preventDefault();
        let I = ue !== void 0 ? ue : Rr(K) === Rr(m);
        me(V, { replace: I, state: we, preventScrollReset: fe, relative: he, viewTransition: je });
      }
    }, [K, me, m, ue, we, x, V, fe, he, je]);
  }(p, { replace: v, state: E, target: b, preventScrollReset: g, relative: s, viewTransition: P }), H = A.createElement("a", { ...C, ...B, href: q || Y, onClick: Q || y ? o : function(V) {
    o && o(V), V.defaultPrevented || re(V);
  }, ref: Iy(O, j), target: b, "data-discover": te || c !== "render" ? void 0 : "true" });
  return F && !te ? A.createElement(A.Fragment, null, H, A.createElement($y, { page: Y })) : H;
});
fi.displayName = "Link";
var Vy = A.forwardRef(function({ "aria-current": o = "page", caseSensitive: c = !1, className: f = "", end: s = !1, style: y, to: v, viewTransition: E, children: b, ...p }, g) {
  let P = Ul(v, { relative: p.relative }), C = Xr(), O = A.useContext(Il), { navigator: q, basename: U } = A.useContext(Dn), te = O != null && function(we, fe = {}) {
    let he = A.useContext(Ds);
    _e(he != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: je } = Lh("useViewTransitionState"), me = Ul(we, { relative: fe.relative });
    if (!he.isTransitioning) return !1;
    let K = mn(he.currentLocation.pathname, je) || he.currentLocation.pathname, m = mn(he.nextLocation.pathname, je) || he.nextLocation.pathname;
    return ci(me.pathname, m) != null || ci(me.pathname, K) != null;
  }(P) && E === !0, Q = q.encodeLocation ? q.encodeLocation(P).pathname : P.pathname, Y = C.pathname, F = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
  c || (Y = Y.toLowerCase(), F = F ? F.toLowerCase() : null, Q = Q.toLowerCase()), F && U && (F = mn(F, U) || F);
  const j = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
  let B, re = Y === Q || !s && Y.startsWith(Q) && Y.charAt(j) === "/", H = F != null && (F === Q || !s && F.startsWith(Q) && F.charAt(Q.length) === "/"), V = { isActive: re, isPending: H, isTransitioning: te }, x = re ? o : void 0;
  B = typeof f == "function" ? f(V) : [f, re ? "active" : null, H ? "pending" : null, te ? "transitioning" : null].filter(Boolean).join(" ");
  let ue = typeof y == "function" ? y(V) : y;
  return A.createElement(fi, { ...p, "aria-current": x, className: B, ref: g, style: ue, to: v, viewTransition: E }, typeof b == "function" ? b(V) : b);
});
Vy.displayName = "NavLink";
var Wy = A.forwardRef(({ discover: o = "render", fetcherKey: c, navigate: f, reloadDocument: s, replace: y, state: v, method: E = oi, action: b, onSubmit: p, relative: g, preventScrollReset: P, viewTransition: C, ...O }, q) => {
  let U = function() {
    let { router: F } = Lh("useSubmit"), { basename: j } = A.useContext(Dn), B = As("useRouteId");
    return A.useCallback(async (re, H = {}) => {
      let { action: V, method: x, encType: ue, formData: we, body: fe } = My(re, j);
      if (H.navigate === !1) {
        let he = H.fetcherKey || Qy();
        await F.fetch(he, B, H.action || V, { preventScrollReset: H.preventScrollReset, formData: we, body: fe, formMethod: H.method || x, formEncType: H.encType || ue, flushSync: H.flushSync });
      } else await F.navigate(H.action || V, { preventScrollReset: H.preventScrollReset, formData: we, body: fe, formMethod: H.method || x, formEncType: H.encType || ue, replace: H.replace, state: H.state, fromRouteId: B, flushSync: H.flushSync, viewTransition: H.viewTransition });
    }, [F, j, B]);
  }(), te = function(F, { relative: j } = {}) {
    let { basename: B } = A.useContext(Dn), re = A.useContext(On);
    _e(re, "useFormAction must be used inside a RouteContext");
    let [H] = re.matches.slice(-1), V = { ...Ul(F || ".", { relative: j }) }, x = Xr();
    if (F == null) {
      V.search = x.search;
      let ue = new URLSearchParams(V.search), we = ue.getAll("index");
      if (we.some((fe) => fe === "")) {
        ue.delete("index"), we.filter((he) => he).forEach((he) => ue.append("index", he));
        let fe = ue.toString();
        V.search = fe ? `?${fe}` : "";
      }
    }
    return F && F !== "." || !H.route.index || (V.search = V.search ? V.search.replace(/^\?/, "?index&") : "?index"), B !== "/" && (V.pathname = V.pathname === "/" ? B : Nn([B, V.pathname])), Rr(V);
  }(b, { relative: g }), Q = E.toLowerCase() === "get" ? "get" : "post", Y = typeof b == "string" && Rh.test(b);
  return A.createElement("form", { ref: q, method: Q, action: te, onSubmit: s ? p : (F) => {
    if (p && p(F), F.defaultPrevented) return;
    F.preventDefault();
    let j = F.nativeEvent.submitter, B = (j == null ? void 0 : j.getAttribute("formmethod")) || E;
    U(j || F.currentTarget, { fetcherKey: c, method: B, navigate: f, replace: y, state: v, relative: g, preventScrollReset: P, viewTransition: C });
  }, ...O, "data-discover": Y || o !== "render" ? void 0 : "true" });
});
function Lh(o) {
  let c = A.useContext(Kr);
  return _e(c, function(f) {
    return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }(o)), c;
}
Wy.displayName = "Form";
var qy = 0, Qy = () => `__${String(++qy)}__`, Yy = sh();
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ky(o) {
  return A.createElement(_y, { flushSync: Yy.flushSync, ...o });
}
function Xy() {
  return pt.jsxs("div", { children: [pt.jsxs("ul", { className: "flex flex-row items-left p-7 rounded-2xl", children: [pt.jsx("li", { className: "flex pr-4", children: pt.jsx(fi, { className: "text-blue-500 hover:underline", to: "/tool1", children: "Tool 1" }) }), pt.jsx("li", { className: "flex", children: pt.jsx(fi, { className: "text-blue-500 hover:underline", to: "/tool2", children: "Tool 2" }) })] }), pt.jsx(A.Suspense, { fallback: pt.jsx("p", { children: "Loading..." }), children: pt.jsx(Ny, {}) })] });
}
function Gy() {
  const o = xh();
  let c;
  return console.error(o), Fa(o) ? c = o.statusText : o instanceof Error ? c = o.message : typeof o == "string" ? c = o : (console.error(o), c = "Unknown error"), pt.jsxs("div", { id: "error-page", children: [pt.jsx("h1", { children: "Oops!" }), pt.jsx("p", { children: "Sorry, an unexpected error has occurred." }), pt.jsx("p", { children: pt.jsx("i", { children: c }) })] });
}
const oh = uh.lazy(() => import("./tool1Page-TrJxZFKW.js")), Jy = uh.lazy(() => import("./tool2Page-CAXvtMTm.js")), Zy = (ih = [{ path: "/", element: pt.jsx(Xy, {}), errorElement: pt.jsx(Gy, {}), children: [{ path: "/", element: pt.jsx(oh, { num: 1 }) }, { path: "/tool1", element: pt.jsx(oh, { num: 1 }) }, { path: "/tool2", element: pt.jsx(Jy, { num: 2 }) }] }], nt = { basename: "/react" }, my({ basename: nt == null ? void 0 : nt.basename, unstable_getContext: nt == null ? void 0 : nt.unstable_getContext, future: nt == null ? void 0 : nt.future, history: Qm({ window: nt == null ? void 0 : nt.window }), hydrationData: (nt == null ? void 0 : nt.hydrationData) || Hy(), routes: ih, mapRouteProperties: Ry, hydrationRouteProperties: Ly, dataStrategy: nt == null ? void 0 : nt.dataStrategy, patchRoutesOnNavigation: nt == null ? void 0 : nt.patchRoutesOnNavigation, window: nt == null ? void 0 : nt.window }).initialize());
var ih, nt, ui = document.getElementById("root");
ui || ((ui = document.createElement("div")).setAttribute("id", "root"), document.body.appendChild(ui));
qm.createRoot(ui).render(pt.jsx(A.StrictMode, { children: pt.jsx(Ky, { router: Zy }) }));
export {
  pt as j,
  A as r
};
