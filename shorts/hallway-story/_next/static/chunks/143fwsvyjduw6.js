(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33620,
  (t) => {
    "use strict";
    var e = t.i(9735),
      r = t.i(7744);
    function i(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function n(t, e) {
      ((t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e));
    }
    var s,
      o,
      a,
      l,
      c,
      u,
      h,
      f,
      d,
      p,
      g,
      m,
      x,
      y,
      v,
      _,
      w,
      b,
      k,
      j,
      T,
      M,
      O,
      C,
      A,
      S,
      N = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      D = { duration: 0.5, overwrite: !1, delay: 0 },
      E = 2 * Math.PI,
      P = E / 4,
      R = 0,
      z = Math.sqrt,
      L = Math.cos,
      W = Math.sin,
      F = function (t) {
        return "string" == typeof t;
      },
      B = function (t) {
        return "function" == typeof t;
      },
      I = function (t) {
        return "number" == typeof t;
      },
      Y = function (t) {
        return void 0 === t;
      },
      X = function (t) {
        return "object" == typeof t;
      },
      U = function (t) {
        return !1 !== t;
      },
      q = function () {
        return "u" > typeof window;
      },
      $ = function (t) {
        return B(t) || F(t);
      },
      V =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      H = Array.isArray,
      G = /random\([^)]+\)/g,
      Q = /,\s*/g,
      Z = /(?:-?\.?\d|\.)+/gi,
      K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      te = /[+-]=-?[.\d]+/,
      tr = /[^,'"\[\]\s]+/gi,
      ti = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      tn = {},
      ts = {},
      to = function (t) {
        return (ts = tz(t, tn)) && rC;
      },
      ta = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      tl = function (t, e) {
        return !e && console.warn(t);
      },
      tc = function (t, e) {
        return (t && (tn[t] = e) && ts && (ts[t] = e)) || tn;
      },
      tu = function () {
        return 0;
      },
      th = { suppressEvents: !0, isStart: !0, kill: !1 },
      tf = { suppressEvents: !0, kill: !1 },
      td = { suppressEvents: !0 },
      tp = {},
      tg = [],
      tm = {},
      tx = {},
      ty = {},
      tv = 30,
      t_ = [],
      tw = "",
      tb = function (t) {
        var e,
          r,
          i = t[0];
        if ((X(i) || B(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
          for (r = t_.length; r-- && !t_[r].targetTest(i); );
          e = t_[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new eU(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      tk = function (t) {
        return t._gsap || tb(eo(t))[0]._gsap;
      },
      tj = function (t, e, r) {
        return (r = t[e]) && B(r)
          ? t[e]()
          : (Y(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      tT = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      tM = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      tO = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      tC = function (t, e) {
        var r = e.charAt(0),
          i = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        );
      },
      tA = function (t, e) {
        for (var r = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < r; );
        return i < r;
      },
      tS = function () {
        var t,
          e,
          r = tg.length,
          i = tg.slice(0);
        for (t = 0, tm = {}, tg.length = 0; t < r; t++)
          (e = i[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      tN = function (t) {
        return !!(t._initted || t._startAt || t.add);
      },
      tD = function (t, e, r, i) {
        (tg.length && !w && tS(),
          t.render(e, r, i || !!(w && e < 0 && tN(t))),
          tg.length && !w && tS());
      },
      tE = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(tr).length < 2
          ? e
          : F(t)
            ? t.trim()
            : t;
      },
      tP = function (t) {
        return t;
      },
      tR = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      tz = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      tL = function t(e, r) {
        for (var i in r)
          "__proto__" !== i &&
            "constructor" !== i &&
            "prototype" !== i &&
            (e[i] = X(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
        return e;
      },
      tW = function (t, e) {
        var r,
          i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i;
      },
      tF = function (t) {
        var e,
          r = t.parent || k,
          i = t.keyframes
            ? ((e = H(t.keyframes)),
              function (t, r) {
                for (var i in r)
                  i in t ||
                    ("duration" === i && e) ||
                    "ease" === i ||
                    (t[i] = r[i]);
              })
            : tR;
        if (U(t.inherit))
          for (; r; ) (i(t, r.vars.defaults), (r = r.parent || r._dp));
        return t;
      },
      tB = function (t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
        return r < 0;
      },
      tI = function (t, e, r, i, n) {
        (void 0 === r && (r = "_first"), void 0 === i && (i = "_last"));
        var s,
          o = t[i];
        if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
        return (
          o
            ? ((e._next = o._next), (o._next = e))
            : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = o),
          (e.parent = e._dp = t),
          e
        );
      },
      tY = function (t, e, r, i) {
        (void 0 === r && (r = "_first"), void 0 === i && (i = "_last"));
        var n = e._prev,
          s = e._next;
        (n ? (n._next = s) : t[r] === e && (t[r] = s),
          s ? (s._prev = n) : t[i] === e && (t[i] = n),
          (e._next = e._prev = e.parent = null));
      },
      tX = function (t, e) {
        (t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0));
      },
      tU = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) ((r._dirty = 1), (r = r.parent));
        return t;
      },
      tq = function (t) {
        for (var e = t.parent; e && e.parent; )
          ((e._dirty = 1), e.totalDuration(), (e = e.parent));
        return t;
      },
      t$ = function (t, e, r, i) {
        return (
          t._startAt &&
          (w
            ? t._startAt.revert(tf)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(e, !0, i))
        );
      },
      tV = function (t) {
        return t._repeat ? tH(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      tH = function (t, e) {
        var r = Math.floor((t = tO(t / e)));
        return t && r === t ? r - 1 : r;
      },
      tG = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      tQ = function (t) {
        return (t._end = tO(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0),
        ));
      },
      tZ = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = tO(
              r._time -
                (t._ts > 0
                  ? e / t._ts
                  : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts)),
            )),
            tQ(t),
            r._dirty || tU(r, t)),
          t
        );
      },
      tK = function (t, e) {
        var r;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((r = tG(t.rawTime(), e)),
            (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
              e.render(r, !0)),
          tU(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
          t._zTime = -1e-8;
        }
      },
      tJ = function (t, e, r, i) {
        return (
          e.parent && tX(e),
          (e._start = tO(
            (I(r) ? r : r || t !== k ? t9(t, r, e) : t._time) + e._delay,
          )),
          (e._end = tO(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          tI(t, e, "_first", "_last", t._sort ? "_start" : 0),
          t5(e) || (t._recent = e),
          i || tK(t, e),
          t._ts < 0 && tZ(t, t._tTime),
          t
        );
      },
      t0 = function (t, e) {
        return (
          (tn.ScrollTrigger || ta("scrollTrigger", e)) &&
          tn.ScrollTrigger.create(e, t)
        );
      },
      t1 = function (t, e, r, i, n) {
        return (e5(t, e, n), t._initted)
          ? !r &&
            t._pt &&
            !w &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            C !== eA.frame
            ? (tg.push(t), (t._lazy = [n, i]), 1)
            : void 0
          : 1;
      },
      t2 = function t(e) {
        var r = e.parent;
        return (
          r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
        );
      },
      t5 = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      t3 = function (t, e, r, i) {
        var n,
          s,
          o,
          a = t.ratio,
          l =
            e < 0 ||
            (!e &&
              ((!t._start && t2(t) && !(!t._initted && t5(t))) ||
                ((t._ts < 0 || t._dp._ts < 0) && !t5(t))))
              ? 0
              : 1,
          c = t._rDelay,
          u = 0;
        if (
          (c &&
            t._repeat &&
            ((s = tH((u = er(0, t._tDur, e)), c)),
            t._yoyo && 1 & s && (l = 1 - l),
            s !== tH(t._tTime, c) &&
              ((a = 1 - l),
              t.vars.repeatRefresh && t._initted && t.invalidate())),
          l !== a || w || i || 1e-8 === t._zTime || (!e && t._zTime))
        ) {
          if (!t._initted && t1(t, e, i, r, u)) return;
          for (
            o = t._zTime,
              t._zTime = e || 1e-8 * !!r,
              r || (r = e && !o),
              t.ratio = l,
              t._from && (l = 1 - l),
              t._time = 0,
              t._tTime = u,
              n = t._pt;
            n;
          )
            (n.r(l, n.d), (n = n._next));
          (e < 0 && t$(t, e, r, !0),
            t._onUpdate && !r && ex(t, "onUpdate"),
            u && t._repeat && !r && t.parent && ex(t, "onRepeat"),
            (e >= t._tDur || e < 0) &&
              t.ratio === l &&
              (l && tX(t, 1),
              r ||
                w ||
                (ex(t, l ? "onComplete" : "onReverseComplete", !0),
                t._prom && t._prom())));
        } else t._zTime || (t._zTime = e);
      },
      t4 = function (t, e, r) {
        var i;
        if (r > e)
          for (i = t._first; i && i._start <= r; ) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          }
        else
          for (i = t._last; i && i._start >= r; ) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
      },
      t8 = function (t, e, r, i) {
        var n = t._repeat,
          s = tO(e) || 0,
          o = t._tTime / t._tDur;
        return (
          o && !i && (t._time *= s / t._dur),
          (t._dur = s),
          (t._tDur = n ? (n < 0 ? 1e10 : tO(s * (n + 1) + t._rDelay * n)) : s),
          o > 0 && !i && tZ(t, (t._tTime = t._tDur * o)),
          t.parent && tQ(t),
          r || tU(t.parent, t),
          t
        );
      },
      t6 = function (t) {
        return t instanceof e$ ? tU(t) : t8(t, t._dur);
      },
      t7 = { _start: 0, endTime: tu, totalDuration: tu },
      t9 = function t(e, r, i) {
        var n,
          s,
          o,
          a = e.labels,
          l = e._recent || t7,
          c = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
        return F(r) && (isNaN(r) || r in a)
          ? ((s = r.charAt(0)),
            (o = "%" === r.substr(-1)),
            (n = r.indexOf("=")),
            "<" === s || ">" === s)
            ? (n >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (n < 0 ? l : i).totalDuration() / 100 : 1))
            : n < 0
              ? (r in a || (a[r] = c), a[r])
              : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                o && i && (s = (s / 100) * (H(i) ? i[0] : i).totalDuration()),
                n > 1 ? t(e, r.substr(0, n - 1), i) + s : c + s)
          : null == r
            ? c
            : +r;
      },
      et = function (t, e, r) {
        var i,
          n,
          s = I(e[1]),
          o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[o];
        if ((s && (a.duration = e[1]), (a.parent = r), t)) {
          for (i = a, n = r; n && !("immediateRender" in i); )
            ((i = n.vars.defaults || {}), (n = U(n.vars.inherit) && n.parent));
          ((a.immediateRender = U(i.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]));
        }
        return new rt(e[0], a, e[o + 1]);
      },
      ee = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      er = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      ei = function (t, e) {
        return F(t) && (e = ti.exec(t)) ? e[1] : "";
      },
      en = [].slice,
      es = function (t, e) {
        return (
          t &&
          X(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && X(t[0]))) &&
          !t.nodeType &&
          t !== j
        );
      },
      eo = function (t, e, r) {
        var i;
        return b && !e && b.selector
          ? b.selector(t)
          : F(t) && !r && (T || !eS())
            ? en.call((e || M).querySelectorAll(t), 0)
            : H(t)
              ? (void 0 === i && (i = []),
                t.forEach(function (t) {
                  var e;
                  return (F(t) && !r) || es(t, 1)
                    ? (e = i).push.apply(e, eo(t))
                    : i.push(t);
                }) || i)
              : es(t)
                ? en.call(t, 0)
                : t
                  ? [t]
                  : [];
      },
      ea = function (t) {
        return (
          (t = eo(t)[0] || tl("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return eo(
              e,
              r.querySelectorAll
                ? r
                : r === t
                  ? tl("Invalid scope") || M.createElement("div")
                  : t,
            );
          }
        );
      },
      el = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ec = function (t) {
        if (B(t)) return t;
        var e = X(t) ? t : { each: t },
          r = eF(e.ease),
          i = e.from || 0,
          n = parseFloat(e.base) || 0,
          s = {},
          o = i > 0 && i < 1,
          a = isNaN(i) || o,
          l = e.axis,
          c = i,
          u = i;
        return (
          F(i)
            ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
            : !o && a && ((c = i[0]), (u = i[1])),
          function (t, o, h) {
            var f,
              d,
              p,
              g,
              m,
              x,
              y,
              v,
              _,
              w = (h || e).length,
              b = s[w];
            if (!b) {
              if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                for (
                  y = -1e8;
                  y < (y = h[_++].getBoundingClientRect().left) && _ < w;
                );
                _ < w && _--;
              }
              for (
                x = 0,
                  b = s[w] = [],
                  f = a ? Math.min(_, w) * c - 0.5 : i % _,
                  d = 1e8 === _ ? 0 : a ? (w * u) / _ - 0.5 : (i / _) | 0,
                  y = 0,
                  v = 1e8;
                x < w;
                x++
              )
                ((p = (x % _) - f),
                  (g = d - ((x / _) | 0)),
                  (b[x] = m =
                    l ? Math.abs("y" === l ? g : p) : z(p * p + g * g)),
                  m > y && (y = m),
                  m < v && (v = m));
              ("random" === i && el(b),
                (b.max = y - v),
                (b.min = v),
                (b.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (_ > w
                        ? w - 1
                        : l
                          ? "y" === l
                            ? w / _
                            : _
                          : Math.max(_, w / _)) ||
                    0) * ("edges" === i ? -1 : 1)),
                (b.b = w < 0 ? n - w : n),
                (b.u = ei(e.amount || e.each) || 0),
                (r = r && w < 0 ? eL(r) : r));
            }
            return (
              (w = (b[t] - b.min) / b.max || 0),
              tO(b.b + (r ? r(w) : w) * b.v) + b.u
            );
          }
        );
      },
      eu = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
          var i = tO(Math.round(parseFloat(r) / t) * t * e);
          return (i - (i % 1)) / e + (I(r) ? 0 : ei(r));
        };
      },
      eh = function (t, e) {
        var r,
          i,
          n = H(t);
        return (
          !n &&
            X(t) &&
            ((r = n = t.radius || 1e8),
            t.values
              ? (i = !I((t = eo(t.values))[0])) && (r *= r)
              : (t = eu(t.increment))),
          ee(
            e,
            n
              ? B(t)
                ? function (e) {
                    return Math.abs((i = t(e)) - e) <= r ? i : e;
                  }
                : function (e) {
                    for (
                      var n,
                        s,
                        o = parseFloat(i ? e.x : e),
                        a = parseFloat(i ? e.y : 0),
                        l = 1e8,
                        c = 0,
                        u = t.length;
                      u--;
                    )
                      (n = i
                        ? (n = t[u].x - o) * n + (s = t[u].y - a) * s
                        : Math.abs(t[u] - o)) < l && ((l = n), (c = u));
                    return (
                      (c = !r || l <= r ? t[c] : e),
                      i || c === e || I(e) ? c : c + ei(e)
                    );
                  }
              : eu(t),
          )
        );
      },
      ef = function (t, e, r, i) {
        return ee(H(t) ? !e : !0 === r ? ((r = 0), !1) : !i, function () {
          return H(t)
            ? t[~~(Math.random() * t.length)]
            : (i =
                (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r,
                  ) *
                    r *
                    i,
                ) / i;
        });
      },
      ed = function (t, e, r) {
        return ee(r, function (r) {
          return t[~~e(r)];
        });
      },
      ep = function (t) {
        return t.replace(G, function (t) {
          var e = t.indexOf("[") + 1,
            r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(Q);
          return ef(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
        });
      },
      eg = function (t, e, r, i, n) {
        var s = e - t,
          o = i - r;
        return ee(n, function (e) {
          return r + (((e - t) / s) * o || 0);
        });
      },
      em = function (t, e, r) {
        var i,
          n,
          s,
          o = t.labels,
          a = 1e8;
        for (i in o)
          (n = o[i] - e) < 0 == !!r &&
            n &&
            a > (n = Math.abs(n)) &&
            ((s = i), (a = n));
        return s;
      },
      ex = function (t, e, r) {
        var i,
          n,
          s,
          o = t.vars,
          a = o[e],
          l = b,
          c = t._ctx;
        if (a)
          return (
            (i = o[e + "Params"]),
            (n = o.callbackScope || t),
            r && tg.length && tS(),
            c && (b = c),
            (s = i ? a.apply(n, i) : a.call(n)),
            (b = l),
            s
          );
      },
      ey = function (t) {
        return (
          tX(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!w),
          1 > t.progress() && ex(t, "onInterrupt"),
          t
        );
      },
      ev = [],
      e_ = function (t) {
        if (t)
          if (((t = (!t.name && t.default) || t), q() || t.headless)) {
            var e = t.name,
              r = B(t),
              i =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              n = {
                init: tu,
                render: rc,
                add: e0,
                kill: rh,
                modifier: ru,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: rs,
                aliases: {},
                register: 0,
              };
            if ((eS(), t !== i)) {
              if (tx[e]) return;
              (tR(i, tR(tW(t, n), s)),
                tz(i.prototype, tz(n, tW(t, s))),
                (tx[(i.prop = e)] = i),
                t.targetTest && (t_.push(i), (tp[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"));
            }
            (tc(e, i), t.register && t.register(rC, i, rp));
          } else ev.push(t);
      },
      ew = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      eb = function (t, e, r) {
        return (
          ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
              ? r
              : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
            255 +
            0.5) |
          0
        );
      },
      ek = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d = t ? (I(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : ew.black;
        if (!d) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ew[t]))
            d = ew[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((i = t.charAt(1)),
                (t =
                  "#" +
                  i +
                  i +
                  (n = t.charAt(2)) +
                  n +
                  (s = t.charAt(3)) +
                  s +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (d = parseInt(t.substr(1, 6), 16)) >> 16,
                (d >> 8) & 255,
                255 & d,
                parseInt(t.substr(7), 16) / 255,
              ];
            d = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & 255,
              255 & t,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((d = f = t.match(Z)), e)) {
              if (~t.indexOf("="))
                return ((d = t.match(K)), r && d.length < 4 && (d[3] = 1), d);
            } else
              ((o = (d[0] % 360) / 360),
                (a = d[1] / 100),
                (n = (l = d[2] / 100) <= 0.5 ? l * (a + 1) : l + a - l * a),
                (i = 2 * l - n),
                d.length > 3 && (d[3] *= 1),
                (d[0] = eb(o + 1 / 3, i, n)),
                (d[1] = eb(o, i, n)),
                (d[2] = eb(o - 1 / 3, i, n)));
          else d = t.match(Z) || ew.transparent;
          d = d.map(Number);
        }
        return (
          e &&
            !f &&
            ((i = d[0] / 255),
            (l =
              ((c = Math.max(i, (n = d[1] / 255), (s = d[2] / 255))) +
                (u = Math.min(i, n, s))) /
              2),
            c === u
              ? (o = a = 0)
              : ((h = c - u),
                (a = l > 0.5 ? h / (2 - c - u) : h / (c + u)),
                (o =
                  (c === i
                    ? (n - s) / h + 6 * (n < s)
                    : c === n
                      ? (s - i) / h + 2
                      : (i - n) / h + 4) * 60)),
            (d[0] = ~~(o + 0.5)),
            (d[1] = ~~(100 * a + 0.5)),
            (d[2] = ~~(100 * l + 0.5))),
          r && d.length < 4 && (d[3] = 1),
          d
        );
      },
      ej = function (t) {
        var e = [],
          r = [],
          i = -1;
        return (
          t.split(eM).forEach(function (t) {
            var n = t.match(J) || [];
            (e.push.apply(e, n), r.push((i += n.length + 1)));
          }),
          (e.c = r),
          e
        );
      },
      eT = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a = "",
          l = (t + a).match(eM),
          c = e ? "hsla(" : "rgba(",
          u = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = ek(t, e, 1)) &&
              c +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((s = ej(t)), (i = r.c).join(a) !== s.c.join(a)))
        )
          for (o = (n = t.replace(eM, "1").split(J)).length - 1; u < o; u++)
            a +=
              n[u] +
              (~i.indexOf(u)
                ? l.shift() || c + "0,0,0,0)"
                : (s.length ? s : l.length ? l : r).shift());
        if (!n)
          for (o = (n = t.split(eM)).length - 1; u < o; u++) a += n[u] + l[u];
        return a + n[o];
      },
      eM = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ew) e += "|" + t + "\\b";
        return RegExp(e + ")", "gi");
      })(),
      eO = /hsl[a]?\(/,
      eC = function (t) {
        var e,
          r = t.join(" ");
        if (((eM.lastIndex = 0), eM.test(r)))
          return (
            (e = eO.test(r)),
            (t[1] = eT(t[1], e)),
            (t[0] = eT(t[0], e, ej(t[1]))),
            !0
          );
      },
      eA =
        ((h = Date.now),
        (f = 500),
        (d = 33),
        (g = p = h()),
        (m = 1e3 / 240),
        (x = 1e3 / 240),
        (y = []),
        (v = function t(e) {
          var r,
            i,
            n,
            a,
            v = h() - g,
            _ = !0 === e;
          if (
            ((v > f || v < 0) && (p += v - d),
            (g += v),
            ((r = (n = g - p) - x) > 0 || _) &&
              ((a = ++l.frame),
              (c = n - 1e3 * l.time),
              (l.time = n /= 1e3),
              (x += r + (r >= m ? 4 : m - r)),
              (i = 1)),
            _ || (s = o(t)),
            i)
          )
            for (u = 0; u < y.length; u++) y[u](n, c, a, e);
        }),
        (l = {
          time: 0,
          frame: 0,
          tick: function () {
            v(!0);
          },
          deltaRatio: function (t) {
            return c / (1e3 / (t || 60));
          },
          wake: function () {
            O &&
              (!T &&
                q() &&
                ((M = (j = T = window).document || {}),
                (tn.gsap = rC),
                (j.gsapVersions || (j.gsapVersions = [])).push(rC.version),
                to(ts || j.GreenSockGlobals || (!j.gsap && j) || {}),
                ev.forEach(e_)),
              (a = "u" > typeof requestAnimationFrame && requestAnimationFrame),
              s && l.sleep(),
              (o =
                a ||
                function (t) {
                  return setTimeout(t, (x - 1e3 * l.time + 1) | 0);
                }),
              (S = 1),
              v(2));
          },
          sleep: function () {
            ((a ? cancelAnimationFrame : clearTimeout)(s), (S = 0), (o = tu));
          },
          lagSmoothing: function (t, e) {
            d = Math.min(e || 33, (f = t || 1 / 0));
          },
          fps: function (t) {
            ((m = 1e3 / (t || 240)), (x = 1e3 * l.time + m));
          },
          add: function (t, e, r) {
            var i = e
              ? function (e, r, n, s) {
                  (t(e, r, n, s), l.remove(i));
                }
              : t;
            return (l.remove(t), y[r ? "unshift" : "push"](i), eS(), i);
          },
          remove: function (t, e) {
            ~(e = y.indexOf(t)) && y.splice(e, 1) && u >= e && u--;
          },
          _listeners: y,
        })),
      eS = function () {
        return !S && eA.wake();
      },
      eN = {},
      eD = /^[\d.\-M][\d.\-,\s]/,
      eE = /["']/g,
      eP = function (t) {
        for (
          var e,
            r,
            i,
            n = {},
            s = t.substr(1, t.length - 3).split(":"),
            o = s[0],
            a = 1,
            l = s.length;
          a < l;
          a++
        )
          ((r = s[a]),
            (e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
            (i = r.substr(0, e)),
            (n[o] = isNaN(i) ? i.replace(eE, "").trim() : +i),
            (o = r.substr(e + 1).trim()));
        return n;
      },
      eR = function (t) {
        var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
        return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
      },
      ez = function (t) {
        var e = (t + "").split("("),
          r = eN[e[0]];
        return r && e.length > 1 && r.config
          ? r.config.apply(
              null,
              ~t.indexOf("{") ? [eP(e[1])] : eR(t).split(",").map(tE),
            )
          : eN._CE && eD.test(t)
            ? eN._CE("", t)
            : r;
      },
      eL = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      eW = function t(e, r) {
        for (var i, n = e._first; n; )
          (n instanceof e$
            ? t(n, r)
            : !n.vars.yoyoEase ||
              (n._yoyo && n._repeat) ||
              n._yoyo === r ||
              (n.timeline
                ? t(n.timeline, r)
                : ((i = n._ease),
                  (n._ease = n._yEase),
                  (n._yEase = i),
                  (n._yoyo = r))),
            (n = n._next));
      },
      eF = function (t, e) {
        return (t && (B(t) ? t : eN[t] || ez(t))) || e;
      },
      eB = function (t, e, r, i) {
        (void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === i &&
            (i = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
            }));
        var n,
          s = { easeIn: e, easeOut: r, easeInOut: i };
        return (
          tT(t, function (t) {
            for (var e in ((eN[t] = tn[t] = s),
            (eN[(n = t.toLowerCase())] = r),
            s))
              eN[
                n +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = eN[t + "." + e] = s[e];
          }),
          s
        );
      },
      eI = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
        };
      },
      eY = function t(e, r, i) {
        var n = r >= 1 ? r : 1,
          s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          o = (s / E) * (Math.asin(1 / n) || 0),
          a = function (t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * W((t - o) * s) + 1;
          },
          l =
            "out" === e
              ? a
              : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : eI(a);
        return (
          (s = E / s),
          (l.config = function (r, i) {
            return t(e, r, i);
          }),
          l
        );
      },
      eX = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var i = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          n =
            "out" === e
              ? i
              : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : eI(i);
        return (
          (n.config = function (r) {
            return t(e, r);
          }),
          n
        );
      };
    (tT("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      eB(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow((1 - t) * 2, r) / 2;
        },
      );
    }),
      (eN.Linear.easeNone = eN.none = eN.Linear.easeIn),
      eB("Elastic", eY("in"), eY("out"), eY()),
      (eH = 2 * (eV = 1 / 2.75)),
      (eG = 2.5 * eV),
      eB(
        "Bounce",
        function (t) {
          return 1 - eQ(1 - t);
        },
        (eQ = function (t) {
          return t < eV
            ? 7.5625 * t * t
            : t < eH
              ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
              : t < eG
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
        }),
      ),
      eB("Expo", function (t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
      }),
      eB("Circ", function (t) {
        return -(z(1 - t * t) - 1);
      }),
      eB("Sine", function (t) {
        return 1 === t ? 1 : -L(t * P) + 1;
      }),
      eB("Back", eX("in"), eX("out"), eX()),
      (eN.SteppedEase =
        eN.steps =
        tn.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                i = t + +!e,
                n = +!!e,
                s = 0.99999999;
              return function (t) {
                return (((i * er(0, s, t)) | 0) + n) * r;
              };
            },
          }),
      (D.ease = eN["quad.out"]),
      tT(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (tw += t + "," + t + "Params,");
        },
      ));
    var eU = function (t, e) {
        ((this.id = R++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : tj),
          (this.set = e ? e.getSetter : rs));
      },
      eq = (function () {
        function t(t) {
          ((this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            t8(this, +t.duration, 1, 1),
            (this.data = t.data),
            b && ((this._ctx = b), b.data.push(this)),
            S || eA.wake());
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                t8(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((eS(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (
                tZ(this, t), !r._dp || r.parent || tK(r, this);
                r && r.parent;
              )
                (r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : -((r.totalDuration() - r._tTime) / r._ts)) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                tJ(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!this._initted && this._dur && t) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), tD(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + tV(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                  ? 1
                  : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                    tV(this),
                  e,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : +(this.rawTime() > 0);
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
                ? tH(this._tTime, r) + 1
                : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r =
              this.parent && this._ts
                ? tG(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                er(-Math.abs(this._delay), this.totalDuration(), r),
                !1 !== e,
              ),
              tQ(this),
              tq(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (eS(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = tO(t);
              var e = this.parent || this._dp;
              return (
                e &&
                  (e._sort || !this.parent) &&
                  tJ(e, this, this._start - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (U(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && 1 > this.totalProgress()))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? tG(e.rawTime(t), this)
                  : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = td);
            var e = w;
            return (
              (w = t),
              tN(this) &&
                (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (w = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              ((r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp));
            return !this.parent && this._sat ? this._sat.globalTime(t) : r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), t6(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return ((this._rDelay = t), t6(this), e ? this.time(e) : this);
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(t9(this, t), U(e));
          }),
          (e.restart = function (t, e) {
            return (
              this.play().totalTime(t ? -this._delay : 0, U(e)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (e.play = function (t, e) {
            return (null != t && this.seek(t, e), this.reversed(!1).paused(!1));
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return (null != t && this.seek(t, e), this.paused(!0));
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (
              (this._initted = this._act = 0),
              (this._zTime = -1e-8),
              this
            );
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !!(
              !e ||
              (this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - 1e-8)
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var i = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((i[t] = e),
                    r && (i[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete i[t],
                this)
              : i[t];
          }),
          (e.then = function (t) {
            var e = this,
              r = e._prom;
            return new Promise(function (i) {
              var n = B(t) ? t : tP,
                s = function () {
                  var t = e.then;
                  ((e.then = null),
                    r && r(),
                    B(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    i(n),
                    (e.then = t));
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? s()
                : (e._prom = s);
            });
          }),
          (e.kill = function () {
            ey(this);
          }),
          t
        );
      })();
    tR(eq.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var e$ = (function (t) {
      function e(e, r) {
        var n;
        return (
          void 0 === e && (e = {}),
          ((n = t.call(this, e) || this).labels = {}),
          (n.smoothChildTiming = !!e.smoothChildTiming),
          (n.autoRemoveChildren = !!e.autoRemoveChildren),
          (n._sort = U(e.sortChildren)),
          k && tJ(e.parent || k, i(n), r),
          e.reversed && n.reverse(),
          e.paused && n.paused(!0),
          e.scrollTrigger && t0(i(n), e.scrollTrigger),
          n
        );
      }
      n(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return (et(0, arguments, this), this);
        }),
        (r.from = function (t, e, r) {
          return (et(1, arguments, this), this);
        }),
        (r.fromTo = function (t, e, r, i) {
          return (et(2, arguments, this), this);
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            tF(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new rt(t, e, t9(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return tJ(this, rt.delayedCall(0, t, e), r);
        }),
        (r.staggerTo = function (t, e, r, i, n, s, o) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || i),
            (r.onComplete = s),
            (r.onCompleteParams = o),
            (r.parent = this),
            new rt(t, r, t9(this, n)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, i, n, s, o) {
          return (
            (r.runBackwards = 1),
            (tF(r).immediateRender = U(r.immediateRender)),
            this.staggerTo(t, e, r, i, n, s, o)
          );
        }),
        (r.staggerFromTo = function (t, e, r, i, n, s, o, a) {
          return (
            (i.startAt = r),
            (tF(i).immediateRender = U(i.immediateRender)),
            this.staggerTo(t, e, i, n, s, o, a)
          );
        }),
        (r.render = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            c,
            u,
            h,
            f,
            d,
            p,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            x = this._dur,
            y = t <= 0 ? 0 : tO(t),
            v = this._zTime < 0 != t < 0 && (this._initted || !x);
          if (
            (this !== k && y > m && t >= 0 && (y = m),
            y !== this._tTime || r || v)
          ) {
            if (
              (g !== this._time &&
                x &&
                ((y += this._time - g), (t += this._time - g)),
              (i = y),
              (h = this._start),
              (l = !(u = this._ts)),
              v && (x || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((d = this._yoyo),
                (a = x + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, r);
              if (
                ((i = tO(y % a)),
                y === m
                  ? ((o = this._repeat), (i = x))
                  : ((o = ~~(f = tO(y / a))) && o === f && ((i = x), o--),
                    i > x && (i = x)),
                (f = tH(this._tTime, a)),
                !g &&
                  this._tTime &&
                  f !== o &&
                  this._tTime - f * a - this._dur <= 0 &&
                  (f = o),
                d && 1 & o && ((i = x - i), (p = 1)),
                o !== f && !this._lock)
              ) {
                var _ = d && 1 & f,
                  b = _ === (d && 1 & o);
                if (
                  (o < f && (_ = !_),
                  (g = _ ? 0 : y % x ? x : y),
                  (this._lock = 1),
                  (this.render(g || (p ? 0 : tO(o * a)), e, !x)._lock = 0),
                  (this._tTime = y),
                  !e && this.parent && ex(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !p &&
                    ((this.invalidate()._lock = 1), (f = o)),
                  (g && g !== this._time) ||
                    !this._ts !== l ||
                    (this.vars.onRepeat && !this.parent && !this._act) ||
                    ((x = this._dur),
                    (m = this._tDur),
                    b &&
                      ((this._lock = 2),
                      (g = _ ? x : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !p && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l))
                )
                  return this;
                eW(this, p);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (c = t4(this, tO(g), tO(i))) &&
                (y -= i - (i = c._start)),
              (this._tTime = y),
              (this._time = i),
              (this._act = !u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (g = 0)),
              !g &&
                y &&
                x &&
                !e &&
                !f &&
                (ex(this, "onStart"), this._tTime !== y))
            )
              return this;
            if (i >= g && t >= 0)
              for (n = this._first; n; ) {
                if (
                  ((s = n._next), (n._act || i >= n._start) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (i - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (i - n._start) * n._ts,
                      e,
                      r,
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    ((c = 0), s && (y += this._zTime = -1e-8));
                    break;
                  }
                }
                n = s;
              }
            else {
              n = this._last;
              for (var j = t < 0 ? t : i; n; ) {
                if (
                  ((s = n._prev), (n._act || j <= n._end) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (j - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (j - n._start) * n._ts,
                      e,
                      r || (w && tN(n)),
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    ((c = 0), s && (y += this._zTime = j ? -1e-8 : 1e-8));
                    break;
                  }
                }
                n = s;
              }
            }
            if (
              c &&
              !e &&
              (this.pause(),
              (c.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
              this._ts)
            )
              return ((this._start = h), tQ(this), this.render(t, e, r));
            (this._onUpdate && !e && ex(this, "onUpdate", !0),
              ((y === m && this._tTime >= this.totalDuration()) || (!y && g)) &&
                (h === this._start || Math.abs(u) !== Math.abs(this._ts)) &&
                !this._lock &&
                ((t || !x) &&
                  ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                  tX(this, 1),
                e ||
                  (t < 0 && !g) ||
                  (!y && !g && m) ||
                  (ex(
                    this,
                    y === m && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0,
                  ),
                  this._prom &&
                    !(y < m && this.timeScale() > 0) &&
                    this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((I(e) || (e = t9(this, e, t)), !(t instanceof eq))) {
            if (H(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (F(t)) return this.addLabel(t, e);
            if (!B(t)) return this;
            t = rt.delayedCall(0, t);
          }
          return this !== t ? tJ(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, i) {
          (void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -1e8));
          for (var n = [], s = this._first; s; )
            (s._start >= i &&
              (s instanceof rt
                ? e && n.push(s)
                : (r && n.push(s),
                  t && n.push.apply(n, s.getChildren(!0, e, r)))),
              (s = s._next));
          return n;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return F(t)
            ? this.removeLabel(t)
            : B(t)
              ? this.killTweensOf(t)
              : (t.parent === this && tY(this, t),
                t === this._recent && (this._recent = this._last),
                tU(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = tO(
                  eA.time -
                    (this._ts > 0
                      ? e / this._ts
                      : -((this.totalDuration() - e) / this._ts)),
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return ((this.labels[t] = t9(this, e)), this);
        }),
        (r.removeLabel = function (t) {
          return (delete this.labels[t], this);
        }),
        (r.addPause = function (t, e, r) {
          var i = rt.delayedCall(0, e || tu, r);
          return (
            (i.data = "isPause"),
            (this._hasPause = 1),
            tJ(this, i, t9(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = t9(this, t); e; )
            (e._start === t && "isPause" === e.data && tX(e), (e = e._next));
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--; )
            eZ !== i[n] && i[n].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, i = [], n = eo(t), s = this._first, o = I(e); s; )
            (s instanceof rt
              ? tA(s._targets, n) &&
                (o
                  ? (!eZ || (s._initted && s._ts)) &&
                    s.globalTime(0) <= e &&
                    s.globalTime(s.totalDuration()) > e
                  : !e || s.isActive()) &&
                i.push(s)
              : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
              (s = s._next));
          return i;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r,
            i = this,
            n = t9(i, t),
            s = e,
            o = s.startAt,
            a = s.onStart,
            l = s.onStartParams,
            c = s.immediateRender,
            u = rt.to(
              i,
              tR(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: n,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (n - (o && "time" in o ? o.time : i._time)) /
                        i.timeScale(),
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((i.pause(), !r)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (n - (o && "time" in o ? o.time : i._time)) /
                            i.timeScale(),
                        );
                      (u._dur !== t && t8(u, t, 0, 1).render(u._time, !0, !0),
                        (r = 1));
                    }
                    a && a.apply(u, l || []);
                  },
                },
                e,
              ),
            );
          return c ? u.render(0) : u;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, tR({ startAt: { time: t9(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return (void 0 === t && (t = this._time), em(this, t9(this, t)));
        }),
        (r.previousLabel = function (t) {
          return (void 0 === t && (t = this._time), em(this, t9(this, t), 1));
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          var i,
            n = this._first,
            s = this.labels;
          for (t = tO(t); n; )
            (n._start >= r && ((n._start += t), (n._end += t)), (n = n._next));
          if (e) for (i in s) s[i] >= r && (s[i] += t);
          return tU(this);
        }),
        (r.invalidate = function (e) {
          var r = this._first;
          for (this._lock = 0; r; ) (r.invalidate(e), (r = r._next));
          return t.prototype.invalidate.call(this, e);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            ((e = r._next), this.remove(r), (r = e));
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            tU(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            i,
            n = 0,
            s = this._last,
            o = 1e8;
          if (arguments.length)
            return this.timeScale(
              (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                (this.reversed() ? -t : t),
            );
          if (this._dirty) {
            for (i = this.parent; s; )
              ((e = s._prev),
                s._dirty && s.totalDuration(),
                (r = s._start) > o && this._sort && s._ts && !this._lock
                  ? ((this._lock = 1), (tJ(this, s, r - s._delay, 1)._lock = 0))
                  : (o = r),
                r < 0 &&
                  s._ts &&
                  ((n -= r),
                  ((!i && !this._dp) || (i && i.smoothChildTiming)) &&
                    ((this._start += tO(r / this._ts)),
                    (this._time -= r),
                    (this._tTime -= r)),
                  this.shiftChildren(-r, !1, -Infinity),
                  (o = 0)),
                s._end > n && s._ts && (n = s._end),
                (s = e));
            (t8(this, this === k && this._time > n ? this._time : n, 1, 1),
              (this._dirty = 0));
          }
          return this._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((k._ts && (tD(k, tG(t, k)), (C = eA.frame)), eA.frame >= tv)) {
            tv += N.autoSleep || 120;
            var e = k._first;
            if ((!e || !e._ts) && N.autoSleep && eA._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || eA.sleep();
            }
          }
        }),
        e
      );
    })(eq);
    tR(e$.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var eV,
      eH,
      eG,
      eQ,
      eZ,
      eK,
      eJ = function (t, e, r, i, n, s, o) {
        var a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          g = new rp(this._pt, t, e, 0, 1, rl, null, n),
          m = 0,
          x = 0;
        for (
          g.b = r,
            g.e = i,
            r += "",
            i += "",
            (d = ~i.indexOf("random(")) && (i = ep(i)),
            s && (s((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
            l = r.match(tt) || [];
          (a = tt.exec(i));
        )
          ((u = a[0]),
            (h = i.substring(m, a.index)),
            c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
            u !== l[x++] &&
              ((f = parseFloat(l[x - 1]) || 0),
              (g._pt = {
                _next: g._pt,
                p: h || 1 === x ? h : ",",
                s: f,
                c: "=" === u.charAt(1) ? tC(f, u) - f : parseFloat(u) - f,
                m: c && c < 4 ? Math.round : 0,
              }),
              (m = tt.lastIndex)));
        return (
          (g.c = m < i.length ? i.substring(m, i.length) : ""),
          (g.fp = o),
          (te.test(i) || d) && (g.e = 0),
          (this._pt = g),
          g
        );
      },
      e0 = function (t, e, r, i, n, s, o, a, l, c) {
        B(i) && (i = i(n || 0, t, s));
        var u,
          h = t[e],
          f =
            "get" !== r
              ? r
              : B(h)
                ? l
                  ? t[
                      e.indexOf("set") || !B(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](l)
                  : t[e]()
                : h,
          d = B(h) ? (l ? ri : rr) : re;
        if (
          (F(i) &&
            (~i.indexOf("random(") && (i = ep(i)),
            "=" === i.charAt(1) &&
              ((u = tC(f, i) + (ei(f) || 0)) || 0 === u) &&
              (i = u)),
          !c || f !== i || eK)
        )
          return isNaN(f * i) || "" === i
            ? (h || e in t || ta(e, i),
              eJ.call(this, t, e, f, i, d, a || N.stringFilter, l))
            : ((u = new rp(
                this._pt,
                t,
                e,
                +f || 0,
                i - (f || 0),
                "boolean" == typeof h ? ra : ro,
                0,
                d,
              )),
              l && (u.fp = l),
              o && u.modifier(o, this, t),
              (this._pt = u));
      },
      e1 = function (t, e, r, i, n) {
        if (
          (B(t) && (t = e6(t, n, e, r, i)),
          !X(t) || (t.style && t.nodeType) || H(t) || V(t))
        )
          return F(t) ? e6(t, n, e, r, i) : t;
        var s,
          o = {};
        for (s in t) o[s] = e6(t[s], n, e, r, i);
        return o;
      },
      e2 = function (t, e, r, i, n, s) {
        var o, a, l, c;
        if (
          tx[t] &&
          !1 !==
            (o = new tx[t]()).init(
              n,
              o.rawVars ? e[t] : e1(e[t], i, n, s, r),
              r,
              i,
              s,
            ) &&
          ((r._pt = a = new rp(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
          r !== A)
        )
          for (
            l = r._ptLookup[r._targets.indexOf(n)], c = o._props.length;
            c--;
          )
            l[o._props[c]] = a;
        return o;
      },
      e5 = function t(e, r, i) {
        var n,
          s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          g,
          m,
          x = e.vars,
          y = x.ease,
          v = x.startAt,
          b = x.immediateRender,
          j = x.lazy,
          T = x.onUpdate,
          M = x.runBackwards,
          O = x.yoyoEase,
          C = x.keyframes,
          A = x.autoRevert,
          S = e._dur,
          N = e._startAt,
          E = e._targets,
          P = e.parent,
          R = P && "nested" === P.data ? P.vars.targets : E,
          z = "auto" === e._overwrite && !_,
          L = e.timeline;
        if (
          (!L || (C && y) || (y = "none"),
          (e._ease = eF(y, D.ease)),
          (e._yEase = O ? eL(eF(!0 === O ? y : O, D.ease)) : 0),
          O &&
            e._yoyo &&
            !e._repeat &&
            ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
          (e._from = !L && !!x.runBackwards),
          !L || (C && !x.stagger))
        ) {
          if (
            ((g = (h = E[0] ? tk(E[0]).harness : 0) && x[h.prop]),
            (n = tW(x, tp)),
            N &&
              (N._zTime < 0 && N.progress(1),
              r < 0 && M && b && !A
                ? N.render(-1, !0)
                : N.revert(M && S ? tf : th),
              (N._lazy = 0)),
            v)
          ) {
            if (
              (tX(
                (e._startAt = rt.set(
                  E,
                  tR(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: P,
                      immediateRender: !0,
                      lazy: !N && U(j),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        T &&
                        function () {
                          return ex(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    v,
                  ),
                )),
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (w || (!b && !A)) && e._startAt.revert(tf),
              b && S && r <= 0 && i <= 0)
            ) {
              r && (e._zTime = r);
              return;
            }
          } else if (M && S && !N)
            if (
              (r && (b = !1),
              (o = tR(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !N && U(j),
                  immediateRender: b,
                  stagger: 0,
                  parent: P,
                },
                n,
              )),
              g && (o[h.prop] = g),
              tX((e._startAt = rt.set(E, o))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (w ? e._startAt.revert(tf) : e._startAt.render(-1, !0)),
              (e._zTime = r),
              b)
            ) {
              if (!r) return;
            } else t(e._startAt, 1e-8, 1e-8);
          for (
            s = 0, e._pt = e._ptCache = 0, j = (S && U(j)) || (j && !S);
            s < E.length;
            s++
          ) {
            if (
              ((u = (l = E[s])._gsap || tb(E)[s]._gsap),
              (e._ptLookup[s] = d = {}),
              tm[u.id] && tg.length && tS(),
              (p = R === E ? s : R.indexOf(l)),
              h &&
                !1 !== (f = new h()).init(l, g || n, e, p, R) &&
                ((e._pt = a =
                  new rp(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  d[t] = a;
                }),
                f.priority && (c = 1)),
              !h || g)
            )
              for (o in n)
                tx[o] && (f = e2(o, n, e, p, l, R))
                  ? f.priority && (c = 1)
                  : (d[o] = a =
                      e0.call(e, l, o, "get", n[o], p, R, 0, x.stringFilter));
            (e._op && e._op[s] && e.kill(l, e._op[s]),
              z &&
                e._pt &&
                ((eZ = e),
                k.killTweensOf(l, d, e.globalTime(r)),
                (m = !e.parent),
                (eZ = 0)),
              e._pt && j && (tm[u.id] = 1));
          }
          (c && rd(e), e._onInit && e._onInit(e));
        }
        ((e._onUpdate = T),
          (e._initted = (!e._op || e._pt) && !m),
          C && r <= 0 && L.render(1e8, !0, !0));
      },
      e3 = function (t, e, r, i, n, s, o, a) {
        var l,
          c,
          u,
          h,
          f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
        if (!f)
          for (
            f = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length;
            h--;
          ) {
            if ((l = u[h][e]) && l.d && l.d._pt)
              for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
            if (!l)
              return (
                (eK = 1),
                (t.vars[e] = "+=0"),
                e5(t, o),
                (eK = 0),
                a ? tl(e + " not eligible for reset") : 1
              );
            f.push(l);
          }
        for (h = f.length; h--; )
          (((l = (c = f[h])._pt || c).s =
            (i || 0 === i) && !n ? i : l.s + (i || 0) + s * l.c),
            (l.c = r - l.s),
            c.e && (c.e = tM(r) + ei(c.e)),
            c.b && (c.b = l.s + ei(c.b)));
      },
      e4 = function (t, e) {
        var r,
          i,
          n,
          s,
          o = t[0] ? tk(t[0]).harness : 0,
          a = o && o.aliases;
        if (!a) return e;
        for (i in ((r = tz({}, e)), a))
          if (i in r)
            for (n = (s = a[i].split(",")).length; n--; ) r[s[n]] = r[i];
        return r;
      },
      e8 = function (t, e, r, i) {
        var n,
          s,
          o = e.ease || i || "power1.inOut";
        if (H(e))
          ((s = r[t] || (r[t] = [])),
            e.forEach(function (t, r) {
              return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
            }));
        else
          for (n in e)
            ((s = r[n] || (r[n] = [])),
              "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: o }));
      },
      e6 = function (t, e, r, i, n) {
        return B(t)
          ? t.call(e, r, i, n)
          : F(t) && ~t.indexOf("random(")
            ? ep(t)
            : t;
      },
      e7 = tw + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      e9 = {};
    tT(e7 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (e9[t] = 1);
    });
    var rt = (function (t) {
      function e(e, r, n, s) {
        "number" == typeof r && ((n.duration = r), (r = n), (n = null));
        var o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p = t.call(this, s ? r : tF(r)) || this,
          g = p.vars,
          m = g.duration,
          x = g.delay,
          y = g.immediateRender,
          v = g.stagger,
          w = g.overwrite,
          b = g.keyframes,
          j = g.defaults,
          T = g.scrollTrigger,
          M = g.yoyoEase,
          O = r.parent || k,
          C = (H(e) || V(e) ? I(e[0]) : "length" in r) ? [e] : eo(e);
        if (
          ((p._targets = C.length
            ? tb(C)
            : tl(
                "GSAP target " + e + " not found. https://gsap.com",
                !N.nullTargetWarn,
              ) || []),
          (p._ptLookup = []),
          (p._overwrite = w),
          b || v || $(m) || $(x))
        ) {
          if (
            ((r = p.vars),
            (o = p.timeline =
              new e$({
                data: "nested",
                defaults: j || {},
                targets: O && "nested" === O.data ? O.vars.targets : C,
              })).kill(),
            (o.parent = o._dp = i(p)),
            (o._start = 0),
            v || $(m) || $(x))
          ) {
            if (((c = C.length), (f = v && ec(v)), X(v)))
              for (u in v) ~e7.indexOf(u) && (d || (d = {}), (d[u] = v[u]));
            for (a = 0; a < c; a++)
              (((l = tW(r, e9)).stagger = 0),
                M && (l.yoyoEase = M),
                d && tz(l, d),
                (h = C[a]),
                (l.duration = +e6(m, i(p), a, h, C)),
                (l.delay = (+e6(x, i(p), a, h, C) || 0) - p._delay),
                !v &&
                  1 === c &&
                  l.delay &&
                  ((p._delay = x = l.delay), (p._start += x), (l.delay = 0)),
                o.to(h, l, f ? f(a, h, C) : 0),
                (o._ease = eN.none));
            o.duration() ? (m = x = 0) : (p.timeline = 0);
          } else if (b) {
            (tF(tR(o.vars.defaults, { ease: "none" })),
              (o._ease = eF(b.ease || r.ease || "none")));
            var A,
              S,
              D,
              E = 0;
            if (H(b))
              (b.forEach(function (t) {
                return o.to(C, t, ">");
              }),
                o.duration());
            else {
              for (u in ((l = {}), b))
                "ease" === u || "easeEach" === u || e8(u, b[u], l, b.easeEach);
              for (u in l)
                for (
                  a = 0,
                    A = l[u].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                    E = 0;
                  a < A.length;
                  a++
                )
                  (((D = {
                    ease: (S = A[a]).e,
                    duration: ((S.t - (a ? A[a - 1].t : 0)) / 100) * m,
                  })[u] = S.v),
                    o.to(C, D, E),
                    (E += D.duration));
              o.duration() < m && o.to({}, { duration: m - o.duration() });
            }
          }
          m || p.duration((m = o.duration()));
        } else p.timeline = 0;
        return (
          !0 !== w || _ || ((eZ = i(p)), k.killTweensOf(C), (eZ = 0)),
          tJ(O, i(p), n),
          r.reversed && p.reverse(),
          r.paused && p.paused(!0),
          (y ||
            (!m &&
              !b &&
              p._start === tO(O._time) &&
              U(y) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(i(p)) &&
              "nested" !== O.data)) &&
            ((p._tTime = -1e-8), p.render(Math.max(0, -x) || 0)),
          T && t0(i(p), T),
          p
        );
      }
      n(e, t);
      var r = e.prototype;
      return (
        (r.render = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            c,
            u,
            h,
            f = this._time,
            d = this._tDur,
            p = this._dur,
            g = t < 0,
            m = t > d - 1e-8 && !g ? d : t < 1e-8 ? 0 : t;
          if (p) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== g) ||
              this._lazy
            ) {
              if (((i = m), (u = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && g))
                  return this.totalTime(100 * o + t, e, r);
                if (
                  ((i = tO(m % o)),
                  m === d
                    ? ((s = this._repeat), (i = p))
                    : (s = ~~(a = tO(m / o))) && s === a
                      ? ((i = p), s--)
                      : i > p && (i = p),
                  (l = this._yoyo && 1 & s) && ((h = this._yEase), (i = p - i)),
                  (a = tH(this._tTime, o)),
                  i === f && !r && this._initted && s === a)
                )
                  return ((this._tTime = m), this);
                s !== a &&
                  (u && this._yEase && eW(u, l),
                  this.vars.repeatRefresh &&
                    !l &&
                    !this._lock &&
                    i !== o &&
                    this._initted &&
                    ((this._lock = r = 1),
                    (this.render(tO(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (t1(this, g ? t : i, r, e, m))
                  return ((this._tTime = 0), this);
                if (
                  f !== this._time &&
                  !(r && this.vars.repeatRefresh && s !== a)
                )
                  return this;
                if (p !== this._dur) return this.render(t, e, r);
              }
              if (
                ((this._tTime = m),
                (this._time = i),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = c = (h || this._ease)(i / p)),
                this._from && (this.ratio = c = 1 - c),
                !f && m && !e && !a && (ex(this, "onStart"), this._tTime !== m))
              )
                return this;
              for (n = this._pt; n; ) (n.r(c, n.d), (n = n._next));
              ((u &&
                u.render(t < 0 ? t : u._dur * u._ease(i / this._dur), e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (g && t$(this, t, e, r), ex(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  ex(this, "onRepeat"),
                (m === this._tDur || !m) &&
                  this._tTime === m &&
                  (g && !this._onUpdate && t$(this, t, !0, !0),
                  (t || !p) &&
                    ((m === this._tDur && this._ts > 0) ||
                      (!m && this._ts < 0)) &&
                    tX(this, 1),
                  !e &&
                    !(g && !f) &&
                    (m || f || l) &&
                    (ex(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(m < d && this.timeScale() > 0) &&
                      this._prom())));
            }
          } else t3(this, t, e, r);
          return this;
        }),
        (r.targets = function () {
          return this._targets;
        }),
        (r.invalidate = function (e) {
          return (
            (e && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (r.resetTo = function (t, e, r, i, n) {
          (S || eA.wake(), this._ts || this.play());
          var s = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (this._initted || e5(this, s),
          e3(this, t, e, r, i, this._ease(s / this._dur), s, n))
            ? this.resetTo(t, e, r, i, 1)
            : (tZ(this, 0),
              this.parent ||
                tI(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0,
                ),
              this.render(0));
        }),
        (r.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? ey(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!w),
              this
            );
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, eZ && !0 !== eZ.vars.overwrite)
                ._first || ey(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                t8(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            n,
            s,
            o,
            a,
            l,
            c,
            u = this._targets,
            h = t ? eo(t) : u,
            f = this._ptLookup,
            d = this._pt;
          if ((!e || "all" === e) && tB(u, h))
            return ("all" === e && (this._pt = 0), ey(this));
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (F(e) &&
                  ((a = {}),
                  tT(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = e4(u, e))),
              c = u.length;
            c--;
          )
            if (~h.indexOf(u[c]))
              for (a in ((n = f[c]),
              "all" === e
                ? ((i[c] = e), (o = n), (s = {}))
                : ((s = i[c] = i[c] || {}), (o = e)),
              o))
                ((l = n && n[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || tY(this, l, "_pt"),
                  delete n[a]),
                  "all" !== s && (s[a] = 1));
          return (this._initted && !this._pt && d && ey(this), this);
        }),
        (e.to = function (t, r) {
          return new e(t, r, arguments[2]);
        }),
        (e.from = function (t, e) {
          return et(1, arguments);
        }),
        (e.delayedCall = function (t, r, i, n) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n,
          });
        }),
        (e.fromTo = function (t, e, r) {
          return et(2, arguments);
        }),
        (e.set = function (t, r) {
          return (
            (r.duration = 0),
            r.repeatDelay || (r.repeat = 0),
            new e(t, r)
          );
        }),
        (e.killTweensOf = function (t, e, r) {
          return k.killTweensOf(t, e, r);
        }),
        e
      );
    })(eq);
    (tR(rt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      tT("staggerTo,staggerFrom,staggerFromTo", function (t) {
        rt[t] = function () {
          var e = new e$(),
            r = en.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
          );
        };
      }));
    var re = function (t, e, r) {
        return (t[e] = r);
      },
      rr = function (t, e, r) {
        return t[e](r);
      },
      ri = function (t, e, r, i) {
        return t[e](i.fp, r);
      },
      rn = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      rs = function (t, e) {
        return B(t[e]) ? rr : Y(t[e]) && t.setAttribute ? rn : re;
      },
      ro = function (t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
      },
      ra = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      rl = function (t, e) {
        var r = e._pt,
          i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
          for (; r; )
            ((i =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
              i),
              (r = r._next));
          i += e.c;
        }
        e.set(e.t, e.p, i, e);
      },
      rc = function (t, e) {
        for (var r = e._pt; r; ) (r.r(t, r.d), (r = r._next));
      },
      ru = function (t, e, r, i) {
        for (var n, s = this._pt; s; )
          ((n = s._next), s.p === i && s.modifier(t, e, r), (s = n));
      },
      rh = function (t) {
        for (var e, r, i = this._pt; i; )
          ((r = i._next),
            (i.p !== t || i.op) && i.op !== t
              ? i.dep || (e = 1)
              : tY(this, i, "_pt"),
            (i = r));
        return !e;
      },
      rf = function (t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
      },
      rd = function (t) {
        for (var e, r, i, n, s = t._pt; s; ) {
          for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
          ((s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
            (s._next = r) ? (r._prev = s) : (n = s),
            (s = e));
        }
        t._pt = i;
      },
      rp = (function () {
        function t(t, e, r, i, n, s, o, a, l) {
          ((this.t = e),
            (this.s = i),
            (this.c = n),
            (this.p = r),
            (this.r = s || ro),
            (this.d = o || this),
            (this.set = a || re),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this));
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            ((this.mSet = this.mSet || this.set),
              (this.set = rf),
              (this.m = t),
              (this.mt = r),
              (this.tween = e));
          }),
          t
        );
      })();
    (tT(
      tw +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (tp[t] = 1);
      },
    ),
      (tn.TweenMax = tn.TweenLite = rt),
      (tn.TimelineLite = tn.TimelineMax = e$),
      (k = new e$({
        sortChildren: !1,
        defaults: D,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (N.stringFilter = eC));
    var rg = [],
      rm = {},
      rx = [],
      ry = 0,
      rv = 0,
      r_ = function (t) {
        return (rm[t] || rx).map(function (t) {
          return t();
        });
      },
      rw = function () {
        var t = Date.now(),
          e = [];
        t - ry > 2 &&
          (r_("matchMediaInit"),
          rg.forEach(function (t) {
            var r,
              i,
              n,
              s,
              o = t.queries,
              a = t.conditions;
            for (i in o)
              ((r = j.matchMedia(o[i]).matches) && (n = 1),
                r !== a[i] && ((a[i] = r), (s = 1)));
            s && (t.revert(), n && e.push(t));
          }),
          r_("matchMediaRevert"),
          e.forEach(function (t) {
            return t.onMatch(t, function (e) {
              return t.add(null, e);
            });
          }),
          (ry = t),
          r_("matchMedia"));
      },
      rb = (function () {
        function t(t, e) {
          ((this.selector = e && ea(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = rv++),
            t && this.add(t));
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            B(t) && ((r = e), (e = t), (t = B));
            var i = this,
              n = function () {
                var t,
                  n = b,
                  s = i.selector;
                return (
                  n && n !== i && n.data.push(i),
                  r && (i.selector = ea(r)),
                  (b = i),
                  (t = e.apply(i, arguments)),
                  B(t) && i._r.push(t),
                  (b = n),
                  (i.selector = s),
                  (i.isReverted = !1),
                  t
                );
              };
            return (
              (i.last = n),
              t === B
                ? n(i, function (t) {
                    return i.add(null, t);
                  })
                : t
                  ? (i[t] = n)
                  : n
            );
          }),
          (e.ignore = function (t) {
            var e = b;
            ((b = null), t(this), (b = e));
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof t
                  ? e.push.apply(e, r.getTweens())
                  : r instanceof rt &&
                      !(r.parent && "nested" === r.parent.data) &&
                      e.push(r);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var r = this;
            if (t) {
              for (var i, n = r.getTweens(), s = r.data.length; s--; )
                "isFlip" === (i = r.data[s]).data &&
                  (i.revert(),
                  i.getChildren(!0, !0, !1).forEach(function (t) {
                    return n.splice(n.indexOf(t), 1);
                  }));
              for (
                n
                  .map(function (t) {
                    return {
                      g:
                        t._dur ||
                        t._delay ||
                        (t._sat && !t._sat.vars.immediateRender)
                          ? t.globalTime(0)
                          : -1 / 0,
                      t: t,
                    };
                  })
                  .sort(function (t, e) {
                    return e.g - t.g || -1 / 0;
                  })
                  .forEach(function (e) {
                    return e.t.revert(t);
                  }),
                  s = r.data.length;
                s--;
              )
                (i = r.data[s]) instanceof e$
                  ? "nested" !== i.data &&
                    (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                  : i instanceof rt || !i.revert || i.revert(t);
              (r._r.forEach(function (e) {
                return e(t, r);
              }),
                (r.isReverted = !0));
            } else
              this.data.forEach(function (t) {
                return t.kill && t.kill();
              });
            if ((this.clear(), e))
              for (var o = rg.length; o--; )
                rg[o].id === this.id && rg.splice(o, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      rk = (function () {
        function t(t) {
          ((this.contexts = []), (this.scope = t), b && b.data.push(this));
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            X(t) || (t = { matches: t });
            var i,
              n,
              s,
              o = new rb(0, r || this.scope),
              a = (o.conditions = {});
            for (n in (b && !o.selector && (o.selector = b.selector),
            this.contexts.push(o),
            (e = o.add("onMatch", e)),
            (o.queries = t),
            t))
              "all" === n
                ? (s = 1)
                : (i = j.matchMedia(t[n])) &&
                  (0 > rg.indexOf(o) && rg.push(o),
                  (a[n] = i.matches) && (s = 1),
                  i.addListener
                    ? i.addListener(rw)
                    : i.addEventListener("change", rw));
            return (
              s &&
                e(o, function (t) {
                  return o.add(null, t);
                }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      rj = {
        registerPlugin: function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return e_(t);
          });
        },
        timeline: function (t) {
          return new e$(t);
        },
        getTweensOf: function (t, e) {
          return k.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          F(t) && (t = eo(t)[0]);
          var n = tk(t || {}).get,
            s = r ? tP : tE;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((tx[e] && tx[e].get) || n)(t, e, r, i))
                : function (e, r, i) {
                    return s(((tx[e] && tx[e].get) || n)(t, e, r, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = eo(t)).length > 1) {
            var i = t.map(function (t) {
                return rC.quickSetter(t, e, r);
              }),
              n = i.length;
            return function (t) {
              for (var e = n; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var s = tx[e],
            o = tk(t),
            a = (o.harness && (o.harness.aliases || {})[e]) || e,
            l = s
              ? function (e) {
                  var i = new s();
                  ((A._pt = 0),
                    i.init(t, r ? e + r : e, A, 0, [t]),
                    i.render(1, i),
                    A._pt && rc(1, A));
                }
              : o.set(t, a);
          return s
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, o, 1);
              };
        },
        quickTo: function (t, e, r) {
          var i,
            n = rC.to(
              t,
              tR(
                (((i = {})[e] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
                r || {},
              ),
            ),
            s = function (t, r, i) {
              return n.resetTo(e, t, r, i);
            };
          return ((s.tween = n), s);
        },
        isTweening: function (t) {
          return k.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return (t && t.ease && (t.ease = eF(t.ease, D.ease)), tL(D, t || {}));
        },
        config: function (t) {
          return tL(N, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          ((i || "").split(",").forEach(function (t) {
            return (
              t &&
              !tx[t] &&
              !tn[t] &&
              tl(e + " effect requires " + t + " plugin.")
            );
          }),
            (ty[e] = function (t, e, i) {
              return r(eo(t), tR(e || {}, n), i);
            }),
            s &&
              (e$.prototype[e] = function (t, r, i) {
                return this.add(ty[e](t, X(r) ? r : (i = r) && {}, this), i);
              }));
        },
        registerEase: function (t, e) {
          eN[t] = eF(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? eF(t, e) : eN;
        },
        getById: function (t) {
          return k.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            i,
            n = new e$(t);
          for (
            n.smoothChildTiming = U(t.smoothChildTiming),
              k.remove(n),
              n._dp = 0,
              n._time = n._tTime = k._time,
              r = k._first;
            r;
          )
            ((i = r._next),
              (e ||
                !(
                  !r._dur &&
                  r instanceof rt &&
                  r.vars.onComplete === r._targets[0]
                )) &&
                tJ(n, r, r._start - r._delay),
              (r = i));
          return (tJ(k, n, 0), n);
        },
        context: function (t, e) {
          return t ? new rb(t, e) : b;
        },
        matchMedia: function (t) {
          return new rk(t);
        },
        matchMediaRefresh: function () {
          return (
            rg.forEach(function (t) {
              var e,
                r,
                i = t.conditions;
              for (r in i) i[r] && ((i[r] = !1), (e = 1));
              e && t.revert();
            }) || rw()
          );
        },
        addEventListener: function (t, e) {
          var r = rm[t] || (rm[t] = []);
          ~r.indexOf(e) || r.push(e);
        },
        removeEventListener: function (t, e) {
          var r = rm[t],
            i = r && r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return H(e)
              ? ed(e, t(0, e.length), r)
              : ee(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return H(e)
              ? ed(e, t(0, e.length - 1), r)
              : ee(i, function (t) {
                  return (
                    (t = (s + ((t - e) % s)) % s || 0),
                    e + (t > n ? s - t : t)
                  );
                });
          },
          distribute: ec,
          random: ef,
          snap: eh,
          normalize: function (t, e, r) {
            return eg(t, e, 0, 1, r);
          },
          getUnit: ei,
          clamp: function (t, e, r) {
            return ee(r, function (r) {
              return er(t, e, r);
            });
          },
          splitColor: ek,
          toArray: eo,
          selector: ea,
          mapRange: eg,
          pipe: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || ei(r));
            };
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                l,
                c,
                u,
                h = F(e),
                f = {};
              if ((!0 === i && (n = 1) && (i = null), h))
                ((e = { p: e }), (r = { p: r }));
              else if (H(e) && !H(r)) {
                for (a = 1, l = [], u = (c = e.length) - 2; a < c; a++)
                  l.push(t(e[a - 1], e[a]));
                (c--,
                  (s = function (t) {
                    var e = Math.min(u, ~~(t *= c));
                    return l[e](t - e);
                  }),
                  (i = r));
              } else n || (e = tz(H(e) ? [] : {}, e));
              if (!l) {
                for (o in r) e0.call(f, e, o, "get", r[o]);
                s = function (t) {
                  return rc(t, f) || (h ? e.p : e);
                };
              }
            }
            return ee(i, s);
          },
          shuffle: el,
        },
        install: to,
        effects: ty,
        ticker: eA,
        updateRoot: e$.updateRoot,
        plugins: tx,
        globalTimeline: k,
        core: {
          PropTween: rp,
          globals: tc,
          Tween: rt,
          Timeline: e$,
          Animation: eq,
          getCache: tk,
          _removeLinkedListItem: tY,
          reverting: function () {
            return w;
          },
          context: function (t) {
            return (t && b && (b.data.push(t), (t._ctx = b)), b);
          },
          suppressOverwrites: function (t) {
            return (_ = t);
          },
        },
      };
    (tT("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (rj[t] = rt[t]);
    }),
      eA.add(e$.updateRoot),
      (A = rj.to({}, { duration: 0 })));
    var rT = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      rM = function (t, e) {
        var r,
          i,
          n,
          s = t._targets;
        for (r in e)
          for (i = s.length; i--; )
            (n = t._ptLookup[i][r]) &&
              (n = n.d) &&
              (n._pt && (n = rT(n, r)),
              n && n.modifier && n.modifier(e[r], t, s[i], r));
      },
      rO = function (t, e) {
        return {
          name: t,
          headless: 1,
          rawVars: 1,
          init: function (t, r, i) {
            i._onInit = function (t) {
              var i, n;
              if (
                (F(r) &&
                  ((i = {}),
                  tT(r, function (t) {
                    return (i[t] = 1);
                  }),
                  (r = i)),
                e)
              ) {
                for (n in ((i = {}), r)) i[n] = e(r[n]);
                r = i;
              }
              rM(t, r);
            };
          },
        };
      },
      rC =
        rj.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, i, n) {
              var s, o, a;
              for (s in ((this.tween = r), e))
                ((a = t.getAttribute(s) || ""),
                  ((o = this.add(
                    t,
                    "setAttribute",
                    (a || 0) + "",
                    e[s],
                    i,
                    n,
                    0,
                    0,
                    s,
                  )).op = s),
                  (o.b = a),
                  this._props.push(s));
            },
            render: function (t, e) {
              for (var r = e._pt; r; )
                (w ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next));
            },
          },
          {
            name: "endArray",
            headless: 1,
            init: function (t, e) {
              for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
            },
          },
          rO("roundProps", eu),
          rO("modifiers"),
          rO("snap", eh),
        ) || rj;
    ((rt.version = e$.version = rC.version = "3.14.2"),
      (O = 1),
      q() && eS(),
      eN.Power0,
      eN.Power1,
      eN.Power2,
      eN.Power3,
      eN.Power4,
      eN.Linear,
      eN.Quad,
      eN.Cubic,
      eN.Quart,
      eN.Quint,
      eN.Strong,
      eN.Elastic,
      eN.Back,
      eN.SteppedEase,
      eN.Bounce,
      eN.Sine,
      eN.Expo,
      eN.Circ);
    var rA,
      rS,
      rN,
      rD,
      rE,
      rP,
      rR,
      rz = {},
      rL = 180 / Math.PI,
      rW = Math.PI / 180,
      rF = Math.atan2,
      rB = /([A-Z])/g,
      rI = /(left|right|width|margin|padding|x)/i,
      rY = /[\s,\(]\S/,
      rX = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      rU = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
          e,
        );
      },
      rq = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
          e,
        );
      },
      r$ = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
          e,
        );
      },
      rV = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t
            ? e.e
            : t
              ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u
              : e.b,
          e,
        );
      },
      rH = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      rG = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      rQ = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      rZ = function (t, e, r) {
        return (t.style[e] = r);
      },
      rK = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      rJ = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      r0 = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      r1 = function (t, e, r, i, n) {
        var s = t._gsap;
        ((s.scaleX = s.scaleY = r), s.renderTransform(n, s));
      },
      r2 = function (t, e, r, i, n) {
        var s = t._gsap;
        ((s[e] = r), s.renderTransform(n, s));
      },
      r5 = "transform",
      r3 = r5 + "Origin",
      r4 = function t(e, r) {
        var i = this,
          n = this.target,
          s = n.style,
          o = n._gsap;
        if (e in rz && s) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return rX.transform.split(",").forEach(function (e) {
              return t.call(i, e, r);
            });
          if (
            (~(e = rX[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                  return (i.tfm[t] = ig(n, t));
                })
              : (this.tfm[e] = o.x ? o[e] : ig(n, e)),
            e === r3 && (this.tfm.zOrigin = o.zOrigin),
            this.props.indexOf(r5) >= 0)
          )
            return;
          (o.svg &&
            ((this.svgo = n.getAttribute("data-svg-origin")),
            this.props.push(r3, r, "")),
            (e = r5));
        }
        (s || r) && this.props.push(e, r, s[e]);
      },
      r8 = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      r6 = function () {
        var t,
          e,
          r = this.props,
          i = this.target,
          n = i.style,
          s = i._gsap;
        for (t = 0; t < r.length; t += 3)
          r[t + 1]
            ? 2 === r[t + 1]
              ? i[r[t]](r[t + 2])
              : (i[r[t]] = r[t + 2])
            : r[t + 2]
              ? (n[r[t]] = r[t + 2])
              : n.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(rB, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (e in this.tfm) s[e] = this.tfm[e];
          (s.svg &&
            (s.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = rP()) && t.isStart) ||
              n[r5] ||
              (r8(n),
              s.zOrigin &&
                n[r3] &&
                ((n[r3] += " " + s.zOrigin + "px"),
                (s.zOrigin = 0),
                s.renderTransform()),
              (s.uncache = 1)));
        }
      },
      r7 = function (t, e) {
        var r = { target: t, props: [], revert: r6, save: r4 };
        return (
          t._gsap || rC.core.getCache(t),
          e &&
            t.style &&
            t.nodeType &&
            e.split(",").forEach(function (t) {
              return r.save(t);
            }),
          r
        );
      },
      r9 = function (t, e) {
        var r = rA.createElementNS
          ? rA.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : rA.createElement(t);
        return r && r.style ? r : rA.createElement(t);
      },
      it = function t(e, r, i) {
        var n = getComputedStyle(e);
        return (
          n[r] ||
          n.getPropertyValue(r.replace(rB, "-$1").toLowerCase()) ||
          n.getPropertyValue(r) ||
          (!i && t(e, ir(r) || r, 1)) ||
          ""
        );
      },
      ie = "O,Moz,ms,Ms,Webkit".split(","),
      ir = function (t, e, r) {
        var i = (e || rD).style,
          n = 5;
        if (t in i && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          n-- && !(ie[n] + t in i);
        );
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? ie[n] : "") + t;
      },
      ii = function () {
        "u" > typeof window &&
          window.document &&
          ((rS = (rA = window.document).documentElement),
          (rD = r9("div") || { style: {} }),
          r9("div"),
          (r3 = (r5 = ir(r5)) + "Origin"),
          (rD.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (rR = !!ir("perspective")),
          (rP = rC.core.reverting),
          (rN = 1));
      },
      is = function (t) {
        var e,
          r = t.ownerSVGElement,
          i = r9(
            "svg",
            (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
          ),
          n = t.cloneNode(!0);
        ((n.style.display = "block"), i.appendChild(n), rS.appendChild(i));
        try {
          e = n.getBBox();
        } catch (t) {}
        return (i.removeChild(n), rS.removeChild(i), e);
      },
      io = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      ia = function (t) {
        var e, r;
        try {
          e = t.getBBox();
        } catch (i) {
          ((e = is(t)), (r = 1));
        }
        return (
          (e && (e.width || e.height)) || r || (e = is(t)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +io(t, ["x", "cx", "x1"]) || 0,
                y: +io(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      il = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ia(t));
      },
      ic = function (t, e) {
        if (e) {
          var r,
            i = t.style;
          (e in rz && e !== r3 && (e = r5),
            i.removeProperty
              ? (("ms" === (r = e.substr(0, 2)) ||
                  "webkit" === e.substr(0, 6)) &&
                  (e = "-" + e),
                i.removeProperty(
                  "--" === r ? e : e.replace(rB, "-$1").toLowerCase(),
                ))
              : i.removeAttribute(e));
        }
      },
      iu = function (t, e, r, i, n, s) {
        var o = new rp(t._pt, e, r, 0, 1, s ? rQ : rG);
        return ((t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o);
      },
      ih = { deg: 1, rad: 1, turn: 1 },
      id = { grid: 1, flex: 1 },
      ip = function t(e, r, i, n) {
        var s,
          o,
          a,
          l,
          c = parseFloat(i) || 0,
          u = (i + "").trim().substr((c + "").length) || "px",
          h = rD.style,
          f = rI.test(r),
          d = "svg" === e.tagName.toLowerCase(),
          p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
          g = "px" === n,
          m = "%" === n;
        if (n === u || !c || ih[n] || ih[u]) return c;
        if (
          ("px" === u || g || (c = t(e, r, i, "px")),
          (l = e.getCTM && il(e)),
          (m || "%" === u) && (rz[r] || ~r.indexOf("adius")))
        )
          return (
            (s = l ? e.getBBox()[f ? "width" : "height"] : e[p]),
            tM(m ? (c / s) * 100 : (c / 100) * s)
          );
        if (
          ((h[f ? "width" : "height"] = 100 + (g ? u : n)),
          (o =
            ("rem" !== n && ~r.indexOf("adius")) ||
            ("em" === n && e.appendChild && !d)
              ? e
              : e.parentNode),
          l && (o = (e.ownerSVGElement || {}).parentNode),
          (o && o !== rA && o.appendChild) || (o = rA.body),
          (a = o._gsap) &&
            m &&
            a.width &&
            f &&
            a.time === eA.time &&
            !a.uncache)
        )
          return tM((c / a.width) * 100);
        if (m && ("height" === r || "width" === r)) {
          var x = e.style[r];
          ((e.style[r] = 100 + n), (s = e[p]), x ? (e.style[r] = x) : ic(e, r));
        } else
          ((m || "%" === u) &&
            !id[it(o, "display")] &&
            (h.position = it(e, "position")),
            o === e && (h.position = "static"),
            o.appendChild(rD),
            (s = rD[p]),
            o.removeChild(rD),
            (h.position = "absolute"));
        return (
          f && m && (((a = tk(o)).time = eA.time), (a.width = o[p])),
          tM(g ? (s * c) / 100 : s && c ? (100 / s) * c : 0)
        );
      },
      ig = function (t, e, r, i) {
        var n;
        return (
          rN || ii(),
          e in rX &&
            "transform" !== e &&
            ~(e = rX[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          rz[e] && "transform" !== e
            ? ((n = iO(t, i)),
              (n =
                "transformOrigin" !== e
                  ? n[e]
                  : n.svg
                    ? n.origin
                    : iC(it(t, r3)) + " " + n.zOrigin + "px"))
            : (!(n = t.style[e]) ||
                "auto" === n ||
                i ||
                ~(n + "").indexOf("calc(")) &&
              (n =
                (i_[e] && i_[e](t, e, r)) ||
                it(t, e) ||
                tj(t, e) ||
                +("opacity" === e)),
          r && !~(n + "").trim().indexOf(" ") ? ip(t, e, n, r) + r : n
        );
      },
      im = function (t, e, r, i) {
        if (!r || "none" === r) {
          var n = ir(e, t, 1),
            s = n && it(t, n, 1);
          s && s !== r
            ? ((e = n), (r = s))
            : "borderColor" === e && (r = it(t, "borderTopColor"));
        }
        var o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          g,
          m,
          x = new rp(this._pt, t.style, e, 0, 1, rl),
          y = 0,
          v = 0;
        if (
          ((x.b = r),
          (x.e = i),
          (r += ""),
          "var(--" === (i += "").substring(0, 6) &&
            (i = it(t, i.substring(4, i.indexOf(")")))),
          "auto" === i &&
            ((h = t.style[e]),
            (t.style[e] = i),
            (i = it(t, e) || i),
            h ? (t.style[e] = h) : ic(t, e)),
          eC((o = [r, i])),
          (r = o[0]),
          (i = o[1]),
          (l = r.match(J) || []),
          (i.match(J) || []).length)
        ) {
          for (; (a = J.exec(i)); )
            ((f = a[0]),
              (p = i.substring(y, a.index)),
              u
                ? (u = (u + 1) % 5)
                : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) &&
                  (u = 1),
              f !== (h = l[v++] || "") &&
                ((c = parseFloat(h) || 0),
                (m = h.substr((c + "").length)),
                "=" === f.charAt(1) && (f = tC(c, f) + m),
                (d = parseFloat(f)),
                (g = f.substr((d + "").length)),
                (y = J.lastIndex - g.length),
                g ||
                  ((g = g || N.units[e] || m),
                  y === i.length && ((i += g), (x.e += g))),
                m !== g && (c = ip(t, e, h, g) || 0),
                (x._pt = {
                  _next: x._pt,
                  p: p || 1 === v ? p : ",",
                  s: c,
                  c: d - c,
                  m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
                })));
          x.c = y < i.length ? i.substring(y, i.length) : "";
        } else x.r = "display" === e && "none" === i ? rQ : rG;
        return (te.test(i) && (x.e = 0), (this._pt = x), x);
      },
      ix = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      iy = function (t) {
        var e = t.split(" "),
          r = e[0],
          i = e[1] || "50%";
        return (
          ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
            ((t = r), (r = i), (i = t)),
          (e[0] = ix[r] || r),
          (e[1] = ix[i] || i),
          e.join(" ")
        );
      },
      iv = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            i,
            n,
            s = e.t,
            o = s.style,
            a = e.u,
            l = s._gsap;
          if ("all" === a || !0 === a) ((o.cssText = ""), (i = 1));
          else
            for (n = (a = a.split(",")).length; --n > -1; )
              (rz[(r = a[n])] &&
                ((i = 1), (r = "transformOrigin" === r ? r3 : r5)),
                ic(s, r));
          i &&
            (ic(s, r5),
            l &&
              (l.svg && s.removeAttribute("transform"),
              (o.scale = o.rotate = o.translate = "none"),
              iO(s, 1),
              (l.uncache = 1),
              r8(o)));
        }
      },
      i_ = {
        clearProps: function (t, e, r, i, n) {
          if ("isFromStart" !== n.data) {
            var s = (t._pt = new rp(t._pt, e, r, 0, 0, iv));
            return (
              (s.u = i),
              (s.pr = -10),
              (s.tween = n),
              t._props.push(r),
              1
            );
          }
        },
      },
      iw = [1, 0, 0, 1, 0, 0],
      ib = {},
      ik = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      ij = function (t) {
        var e = it(t, r5);
        return ik(e) ? iw : e.substr(7).match(K).map(tM);
      },
      iT = function (t, e) {
        var r,
          i,
          n,
          s,
          o = t._gsap || tk(t),
          a = t.style,
          l = ij(t);
        return o.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (n = t.transform.baseVal.consolidate().matrix).a,
              n.b,
              n.c,
              n.d,
              n.e,
              n.f,
            ]).join(",")
            ? iw
            : l
          : (l !== iw ||
              t.offsetParent ||
              t === rS ||
              o.svg ||
              ((n = a.display),
              (a.display = "block"),
              ((r = t.parentNode) &&
                (t.offsetParent || t.getBoundingClientRect().width)) ||
                ((s = 1), (i = t.nextElementSibling), rS.appendChild(t)),
              (l = ij(t)),
              n ? (a.display = n) : ic(t, "display"),
              s &&
                (i
                  ? r.insertBefore(t, i)
                  : r
                    ? r.appendChild(t)
                    : rS.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      iM = function (t, e, r, i, n, s) {
        var o,
          a,
          l,
          c,
          u = t._gsap,
          h = n || iT(t, !0),
          f = u.xOrigin || 0,
          d = u.yOrigin || 0,
          p = u.xOffset || 0,
          g = u.yOffset || 0,
          m = h[0],
          x = h[1],
          y = h[2],
          v = h[3],
          _ = h[4],
          w = h[5],
          b = e.split(" "),
          k = parseFloat(b[0]) || 0,
          j = parseFloat(b[1]) || 0;
        (r
          ? h !== iw &&
            (a = m * v - x * y) &&
            ((l = (v / a) * k + (-y / a) * j + (y * w - v * _) / a),
            (c = (-x / a) * k + (m / a) * j - (m * w - x * _) / a),
            (k = l),
            (j = c))
          : ((k =
              (o = ia(t)).x + (~b[0].indexOf("%") ? (k / 100) * o.width : k)),
            (j =
              o.y + (~(b[1] || b[0]).indexOf("%") ? (j / 100) * o.height : j))),
          i || (!1 !== i && u.smooth)
            ? ((u.xOffset = p + ((_ = k - f) * m + (w = j - d) * y) - _),
              (u.yOffset = g + (_ * x + w * v) - w))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = k),
          (u.yOrigin = j),
          (u.smooth = !!i),
          (u.origin = e),
          (u.originIsAbsolute = !!r),
          (t.style[r3] = "0px 0px"),
          s &&
            (iu(s, u, "xOrigin", f, k),
            iu(s, u, "yOrigin", d, j),
            iu(s, u, "xOffset", p, u.xOffset),
            iu(s, u, "yOffset", g, u.yOffset)),
          t.setAttribute("data-svg-origin", k + " " + j));
      },
      iO = function (t, e) {
        var r = t._gsap || new eU(t);
        if ("x" in r && !e && !r.uncache) return r;
        var i,
          n,
          s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          g,
          m,
          x,
          y,
          v,
          _,
          w,
          b,
          k,
          j,
          T,
          M,
          O,
          C,
          A,
          S,
          D,
          E,
          P,
          R,
          z = t.style,
          L = r.scaleX < 0,
          W = getComputedStyle(t),
          F = it(t, r3) || "0";
        return (
          (i = n = s = l = c = u = h = f = d = 0),
          (o = a = 1),
          (r.svg = !!(t.getCTM && il(t))),
          W.translate &&
            (("none" !== W.translate ||
              "none" !== W.scale ||
              "none" !== W.rotate) &&
              (z[r5] =
                ("none" !== W.translate
                  ? "translate3d(" +
                    (W.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== W.rotate ? "rotate(" + W.rotate + ") " : "") +
                ("none" !== W.scale
                  ? "scale(" + W.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== W[r5] ? W[r5] : "")),
            (z.scale = z.rotate = z.translate = "none")),
          (m = iT(t, r.svg)),
          r.svg &&
            (r.uncache
              ? ((O = t.getBBox()),
                (F = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px"),
                (M = ""))
              : (M = !e && t.getAttribute("data-svg-origin")),
            iM(t, M || F, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
          (p = r.xOrigin || 0),
          (g = r.yOrigin || 0),
          m !== iw &&
            ((_ = m[0]),
            (w = m[1]),
            (b = m[2]),
            (k = m[3]),
            (i = j = m[4]),
            (n = T = m[5]),
            6 === m.length
              ? ((o = Math.sqrt(_ * _ + w * w)),
                (a = Math.sqrt(k * k + b * b)),
                (l = _ || w ? rF(w, _) * rL : 0),
                (h = b || k ? rF(b, k) * rL + l : 0) &&
                  (a *= Math.abs(Math.cos(h * rW))),
                r.svg &&
                  ((i -= p - (p * _ + g * b)), (n -= g - (p * w + g * k))))
              : ((R = m[6]),
                (E = m[7]),
                (A = m[8]),
                (S = m[9]),
                (D = m[10]),
                (P = m[11]),
                (i = m[12]),
                (n = m[13]),
                (s = m[14]),
                (c = (x = rF(R, D)) * rL),
                x &&
                  ((M = j * (y = Math.cos(-x)) + A * (v = Math.sin(-x))),
                  (O = T * y + S * v),
                  (C = R * y + D * v),
                  (A = -(j * v) + A * y),
                  (S = -(T * v) + S * y),
                  (D = -(R * v) + D * y),
                  (P = -(E * v) + P * y),
                  (j = M),
                  (T = O),
                  (R = C)),
                (u = (x = rF(-b, D)) * rL),
                x &&
                  ((M = _ * (y = Math.cos(-x)) - A * (v = Math.sin(-x))),
                  (O = w * y - S * v),
                  (C = b * y - D * v),
                  (P = k * v + P * y),
                  (_ = M),
                  (w = O),
                  (b = C)),
                (l = (x = rF(w, _)) * rL),
                x &&
                  ((M = _ * (y = Math.cos(x)) + w * (v = Math.sin(x))),
                  (O = j * y + T * v),
                  (w = w * y - _ * v),
                  (T = T * y - j * v),
                  (_ = M),
                  (j = O)),
                c &&
                  Math.abs(c) + Math.abs(l) > 359.9 &&
                  ((c = l = 0), (u = 180 - u)),
                (o = tM(Math.sqrt(_ * _ + w * w + b * b))),
                (a = tM(Math.sqrt(T * T + R * R))),
                (h = Math.abs((x = rF(j, T))) > 2e-4 ? x * rL : 0),
                (d = P ? 1 / (P < 0 ? -P : P) : 0)),
            r.svg &&
              ((M = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !ik(it(t, r5))),
              M && t.setAttribute("transform", M))),
          Math.abs(h) > 90 &&
            270 > Math.abs(h) &&
            (L
              ? ((o *= -1),
                (h += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (h += h <= 0 ? 180 : -180))),
          (e = e || r.uncache),
          (r.x =
            i -
            ((r.xPercent =
              i &&
              ((!e && r.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetWidth * r.xPercent) / 100
              : 0) +
            "px"),
          (r.y =
            n -
            ((r.yPercent =
              n &&
              ((!e && r.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetHeight * r.yPercent) / 100
              : 0) +
            "px"),
          (r.z = s + "px"),
          (r.scaleX = tM(o)),
          (r.scaleY = tM(a)),
          (r.rotation = tM(l) + "deg"),
          (r.rotationX = tM(c) + "deg"),
          (r.rotationY = tM(u) + "deg"),
          (r.skewX = h + "deg"),
          (r.skewY = f + "deg"),
          (r.transformPerspective = d + "px"),
          (r.zOrigin = parseFloat(F.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
            (z[r3] = iC(F)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = N.force3D),
          (r.renderTransform = r.svg ? iE : rR ? iD : iS),
          (r.uncache = 0),
          r
        );
      },
      iC = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      iA = function (t, e, r) {
        var i = ei(e);
        return tM(parseFloat(e) + parseFloat(ip(t, "x", r + "px", i))) + i;
      },
      iS = function (t, e) {
        ((e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          iD(t, e));
      },
      iN = "0deg",
      iD = function (t, e) {
        var r = e || this,
          i = r.xPercent,
          n = r.yPercent,
          s = r.x,
          o = r.y,
          a = r.z,
          l = r.rotation,
          c = r.rotationY,
          u = r.rotationX,
          h = r.skewX,
          f = r.skewY,
          d = r.scaleX,
          p = r.scaleY,
          g = r.transformPerspective,
          m = r.force3D,
          x = r.target,
          y = r.zOrigin,
          v = "",
          _ = ("auto" === m && t && 1 !== t) || !0 === m;
        if (y && (u !== iN || c !== iN)) {
          var w,
            b = parseFloat(c) * rW,
            k = Math.sin(b),
            j = Math.cos(b);
          ((s = iA(x, s, -(k * (w = Math.cos((b = parseFloat(u) * rW))) * y))),
            (o = iA(x, o, -(-Math.sin(b) * y))),
            (a = iA(x, a, -(j * w * y) + y)));
        }
        ("0px" !== g && (v += "perspective(" + g + ") "),
          (i || n) && (v += "translate(" + i + "%, " + n + "%) "),
          (_ || "0px" !== s || "0px" !== o || "0px" !== a) &&
            (v +=
              "0px" !== a || _
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + ") "),
          l !== iN && (v += "rotate(" + l + ") "),
          c !== iN && (v += "rotateY(" + c + ") "),
          u !== iN && (v += "rotateX(" + u + ") "),
          (h !== iN || f !== iN) && (v += "skew(" + h + ", " + f + ") "),
          (1 !== d || 1 !== p) && (v += "scale(" + d + ", " + p + ") "),
          (x.style[r5] = v || "translate(0, 0)"));
      },
      iE = function (t, e) {
        var r,
          i,
          n,
          s,
          o,
          a = e || this,
          l = a.xPercent,
          c = a.yPercent,
          u = a.x,
          h = a.y,
          f = a.rotation,
          d = a.skewX,
          p = a.skewY,
          g = a.scaleX,
          m = a.scaleY,
          x = a.target,
          y = a.xOrigin,
          v = a.yOrigin,
          _ = a.xOffset,
          w = a.yOffset,
          b = a.forceCSS,
          k = parseFloat(u),
          j = parseFloat(h);
        ((f = parseFloat(f)),
          (d = parseFloat(d)),
          (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
          f || d
            ? ((f *= rW),
              (d *= rW),
              (r = Math.cos(f) * g),
              (i = Math.sin(f) * g),
              (n = -(Math.sin(f - d) * m)),
              (s = Math.cos(f - d) * m),
              d &&
                ((p *= rW),
                (n *= o = Math.sqrt(1 + (o = Math.tan(d - p)) * o)),
                (s *= o),
                p &&
                  ((r *= o = Math.sqrt(1 + (o = Math.tan(p)) * o)), (i *= o))),
              (r = tM(r)),
              (i = tM(i)),
              (n = tM(n)),
              (s = tM(s)))
            : ((r = g), (s = m), (i = n = 0)),
          ((k && !~(u + "").indexOf("px")) ||
            (j && !~(h + "").indexOf("px"))) &&
            ((k = ip(x, "x", u, "px")), (j = ip(x, "y", h, "px"))),
          (y || v || _ || w) &&
            ((k = tM(k + y - (y * r + v * n) + _)),
            (j = tM(j + v - (y * i + v * s) + w))),
          (l || c) &&
            ((k = tM(k + (l / 100) * (o = x.getBBox()).width)),
            (j = tM(j + (c / 100) * o.height))),
          (o =
            "matrix(" +
            r +
            "," +
            i +
            "," +
            n +
            "," +
            s +
            "," +
            k +
            "," +
            j +
            ")"),
          x.setAttribute("transform", o),
          b && (x.style[r5] = o));
      },
      iP = function (t, e, r, i, n) {
        var s,
          o,
          a = F(n),
          l = parseFloat(n) * (a && ~n.indexOf("rad") ? rL : 1) - i,
          c = i + l + "deg";
        return (
          a &&
            ("short" === (s = n.split("_")[1]) &&
              (l %= 360) != l % 180 &&
              (l += l < 0 ? 360 : -360),
            "cw" === s && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : "ccw" === s &&
                l > 0 &&
                (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (t._pt = o = new rp(t._pt, e, r, i, l, rq)),
          (o.e = c),
          (o.u = "deg"),
          t._props.push(r),
          o
        );
      },
      iR = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      iz = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a,
          l,
          c,
          u = iR({}, r._gsap),
          h = r.style;
        for (n in (u.svg
          ? ((s = r.getAttribute("transform")),
            r.setAttribute("transform", ""),
            (h[r5] = e),
            (i = iO(r, 1)),
            ic(r, r5),
            r.setAttribute("transform", s))
          : ((s = getComputedStyle(r)[r5]),
            (h[r5] = e),
            (i = iO(r, 1)),
            (h[r5] = s)),
        rz))
          (s = u[n]) !== (o = i[n]) &&
            0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) &&
            ((a = ei(s) !== (c = ei(o)) ? ip(r, n, s, c) : parseFloat(s)),
            (l = parseFloat(o)),
            (t._pt = new rp(t._pt, i, n, a, l - a, rU)),
            (t._pt.u = c || 0),
            t._props.push(n));
        iR(i, u);
      };
    tT("padding,margin,Width,Radius", function (t, e) {
      var r = "Right",
        i = "Bottom",
        n = "Left",
        s = (
          e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]
        ).map(function (r) {
          return e < 2 ? t + r : "border" + r + t;
        });
      i_[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
        var o, a;
        if (arguments.length < 4)
          return 5 ===
            (a = (o = s.map(function (e) {
              return ig(t, e, r);
            })).join(" ")).split(o[0]).length
            ? o[0]
            : a;
        ((o = (i + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, n));
      };
    });
    var iL = {
      name: "css",
      register: ii,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, i, n) {
        var s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          g,
          m,
          x,
          y,
          v,
          _,
          w,
          b = this._props,
          k = t.style,
          j = r.vars.startAt;
        for (h in (rN || ii(),
        (this.styles = this.styles || r7(t)),
        (_ = this.styles.props),
        (this.tween = r),
        e))
          if (
            "autoRound" !== h &&
            ((o = e[h]), !(tx[h] && e2(h, e, r, i, t, n)))
          ) {
            if (
              ((c = typeof o),
              (u = i_[h]),
              "function" === c && (c = typeof (o = o.call(r, i, t, n))),
              "string" === c && ~o.indexOf("random(") && (o = ep(o)),
              u)
            )
              u(this, t, h, o, r) && (v = 1);
            else if ("--" === h.substr(0, 2))
              ((s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (o += ""),
                (eM.lastIndex = 0),
                !eM.test(s) &&
                  ((f = ei(s)),
                  (d = ei(o))
                    ? f !== d && (s = ip(t, h, s, d) + d)
                    : f && (o += f)),
                this.add(k, "setProperty", s, o, i, n, 0, 0, h),
                b.push(h),
                _.push(h, 0, k[h]));
            else if ("undefined" !== c) {
              if (
                (j && h in j
                  ? (F(
                      (s =
                        "function" == typeof j[h]
                          ? j[h].call(r, i, t, n)
                          : j[h]),
                    ) &&
                      ~s.indexOf("random(") &&
                      (s = ep(s)),
                    ei(s + "") ||
                      "auto" === s ||
                      (s += N.units[h] || ei(ig(t, h)) || ""),
                    "=" === (s + "").charAt(1) && (s = ig(t, h)))
                  : (s = ig(t, h)),
                (l = parseFloat(s)),
                (p = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (a = parseFloat(o)),
                h in rX &&
                  ("autoAlpha" === h &&
                    (1 === l &&
                      "hidden" === ig(t, "visibility") &&
                      a &&
                      (l = 0),
                    _.push("visibility", 0, k.visibility),
                    iu(
                      this,
                      k,
                      "visibility",
                      l ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a,
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = rX[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                (g = h in rz))
              ) {
                if (
                  (this.styles.save(h),
                  (w = o),
                  "string" === c && "var(--" === o.substring(0, 6))
                ) {
                  if (
                    "calc(" ===
                    (o = it(t, o.substring(4, o.indexOf(")")))).substring(0, 5)
                  ) {
                    var T = t.style.perspective;
                    ((t.style.perspective = o),
                      (o = it(t, "perspective")),
                      T ? (t.style.perspective = T) : ic(t, "perspective"));
                  }
                  a = parseFloat(o);
                }
                if (
                  (m ||
                    (((x = t._gsap).renderTransform && !e.parseTransform) ||
                      iO(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && x.smooth),
                    ((m = this._pt =
                      new rp(
                        this._pt,
                        k,
                        r5,
                        0,
                        1,
                        x.renderTransform,
                        x,
                        0,
                        -1,
                      )).dep = 1)),
                  "scale" === h)
                )
                  ((this._pt = new rp(
                    this._pt,
                    x,
                    "scaleY",
                    x.scaleY,
                    (p ? tC(x.scaleY, p + a) : a) - x.scaleY || 0,
                    rU,
                  )),
                    (this._pt.u = 0),
                    b.push("scaleY", h),
                    (h += "X"));
                else if ("transformOrigin" === h) {
                  (_.push(r3, 0, k[r3]),
                    (o = iy(o)),
                    x.svg
                      ? iM(t, o, 0, y, 0, this)
                      : ((d = parseFloat(o.split(" ")[2]) || 0) !== x.zOrigin &&
                          iu(this, x, "zOrigin", x.zOrigin, d),
                        iu(this, k, h, iC(s), iC(o))));
                  continue;
                } else if ("svgOrigin" === h) {
                  iM(t, o, 1, y, 0, this);
                  continue;
                } else if (h in ib) {
                  iP(this, x, h, l, p ? tC(l, p + o) : o);
                  continue;
                } else if ("smoothOrigin" === h) {
                  iu(this, x, "smooth", x.smooth, o);
                  continue;
                } else if ("force3D" === h) {
                  x[h] = o;
                  continue;
                } else if ("transform" === h) {
                  iz(this, o, t);
                  continue;
                }
              } else h in k || (h = ir(h) || h);
              if (
                g ||
                ((a || 0 === a) && (l || 0 === l) && !rY.test(o) && h in k)
              )
                ((f = (s + "").substr((l + "").length)),
                  a || (a = 0),
                  (d = ei(o) || (h in N.units ? N.units[h] : f)),
                  f !== d && (l = ip(t, h, s, d)),
                  (this._pt = new rp(
                    this._pt,
                    g ? x : k,
                    h,
                    l,
                    (p ? tC(l, p + a) : a) - l,
                    !g && ("px" === d || "zIndex" === h) && !1 !== e.autoRound
                      ? rH
                      : rU,
                  )),
                  (this._pt.u = d || 0),
                  g && w !== o
                    ? ((this._pt.b = s), (this._pt.e = w), (this._pt.r = rV))
                    : f !== d &&
                      "%" !== d &&
                      ((this._pt.b = s), (this._pt.r = r$)));
              else if (h in k) im.call(this, t, h, s, p ? p + o : o);
              else if (h in t) this.add(t, h, s || t[h], p ? p + o : o, i, n);
              else if ("parseTransform" !== h) {
                ta(h, o);
                continue;
              }
              (g ||
                (h in k
                  ? _.push(h, 0, k[h])
                  : "function" == typeof t[h]
                    ? _.push(h, 2, t[h]())
                    : _.push(h, 1, s || t[h])),
                b.push(h));
            }
          }
        v && rd(this);
      },
      render: function (t, e) {
        if (e.tween._time || !rP())
          for (var r = e._pt; r; ) (r.r(t, r.d), (r = r._next));
        else e.styles.revert();
      },
      get: ig,
      aliases: rX,
      getSetter: function (t, e, r) {
        var i = rX[e];
        return (
          i && 0 > i.indexOf(",") && (e = i),
          e in rz && e !== r3 && (t._gsap.x || ig(t, "x"))
            ? r && rE === r
              ? "scale" === e
                ? r0
                : rJ
              : ((rE = r || {}), "scale" === e ? r1 : r2)
            : t.style && !Y(t.style[e])
              ? rZ
              : ~e.indexOf("-")
                ? rK
                : rs(t, e)
        );
      },
      core: { _removeProperty: ic, _getMatrix: iT },
    };
    ((rC.utils.checkPrefix = ir),
      (rC.core.getStyleSaver = r7),
      (iB = tT(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (iF = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          rz[t] = 1;
        },
      )),
      tT(iF, function (t) {
        ((N.units[t] = "deg"), (ib[t] = 1));
      }),
      (rX[iB[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + iF),
      tT(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          rX[e[1]] = iB[e[0]];
        },
      ),
      tT(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          N.units[t] = "px";
        },
      ),
      rC.registerPlugin(iL));
    var iW = rC.registerPlugin(iL) || rC;
    iW.core.Tween;
    var iF,
      iB,
      iI,
      iY,
      iX,
      iU,
      iq,
      i$,
      iV,
      iH,
      iG,
      iQ,
      iZ,
      iK,
      iJ,
      i0 = function () {
        return (
          iI ||
          ("u" > typeof window && (iI = window.gsap) && iI.registerPlugin && iI)
        );
      },
      i1 = 1,
      i2 = [],
      i5 = [],
      i3 = [],
      i4 = Date.now,
      i8 = function (t, e) {
        return e;
      },
      i6 = function () {
        var t = iG.core,
          e = t.bridge || {},
          r = t._scrollers,
          i = t._proxies;
        (r.push.apply(r, i5),
          i.push.apply(i, i3),
          (i5 = r),
          (i3 = i),
          (i8 = function (t, r) {
            return e[t](r);
          }));
      },
      i7 = function (t, e) {
        return ~i3.indexOf(t) && i3[i3.indexOf(t) + 1][e];
      },
      i9 = function (t) {
        return !!~iQ.indexOf(t);
      },
      nt = function (t, e, r, i, n) {
        return t.addEventListener(e, r, { passive: !1 !== i, capture: !!n });
      },
      ne = function (t, e, r, i) {
        return t.removeEventListener(e, r, !!i);
      },
      nr = "scrollLeft",
      ni = "scrollTop",
      nn = function () {
        return (iZ && iZ.isPressed) || i5.cache++;
      },
      ns = function (t, e) {
        var r = function r(i) {
          if (i || 0 === i) {
            i1 && (iX.history.scrollRestoration = "manual");
            var n = iZ && iZ.isPressed;
            (t((i = r.v = Math.round(i) || (iZ && iZ.iOS ? 1 : 0))),
              (r.cacheID = i5.cache),
              n && i8("ss", i));
          } else
            (e || i5.cache !== r.cacheID || i8("ref")) &&
              ((r.cacheID = i5.cache), (r.v = t()));
          return r.v + r.offset;
        };
        return ((r.offset = 0), t && r);
      },
      no = {
        s: nr,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ns(function (t) {
          return arguments.length
            ? iX.scrollTo(t, na.sc())
            : iX.pageXOffset || iU[nr] || iq[nr] || i$[nr] || 0;
        }),
      },
      na = {
        s: ni,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: no,
        sc: ns(function (t) {
          return arguments.length
            ? iX.scrollTo(no.sc(), t)
            : iX.pageYOffset || iU[ni] || iq[ni] || i$[ni] || 0;
        }),
      },
      nl = function (t, e) {
        return (
          ((e && e._ctx && e._ctx.selector) || iI.utils.toArray)(t)[0] ||
          ("string" == typeof t && !1 !== iI.config().nullTargetWarn
            ? console.warn("Element not found:", t)
            : null)
        );
      },
      nc = function (t, e) {
        for (var r = e.length; r--; )
          if (e[r] === t || e[r].contains(t)) return !0;
        return !1;
      },
      nu = function (t, e) {
        var r = e.s,
          i = e.sc;
        i9(t) && (t = iU.scrollingElement || iq);
        var n = i5.indexOf(t),
          s = i === na.sc ? 1 : 2;
        (~n || (n = i5.push(t) - 1), i5[n + s] || nt(t, "scroll", nn));
        var o = i5[n + s],
          a =
            o ||
            (i5[n + s] =
              ns(i7(t, r), !0) ||
              (i9(t)
                ? i
                : ns(function (e) {
                    return arguments.length ? (t[r] = e) : t[r];
                  })));
        return (
          (a.target = t),
          o || (a.smooth = "smooth" === iI.getProperty(t, "scrollBehavior")),
          a
        );
      },
      nh = function (t, e, r) {
        var i = t,
          n = t,
          s = i4(),
          o = s,
          a = e || 50,
          l = Math.max(500, 3 * a),
          c = function (t, e) {
            var l = i4();
            e || l - s > a
              ? ((n = i), (i = t), (o = s), (s = l))
              : r
                ? (i += t)
                : (i = n + ((t - n) / (l - o)) * (s - o));
          };
        return {
          update: c,
          reset: function () {
            ((n = i = r ? 0 : i), (o = s = 0));
          },
          getVelocity: function (t) {
            var e = o,
              a = n,
              u = i4();
            return (
              (t || 0 === t) && t !== i && c(t),
              s === o || u - o > l
                ? 0
                : ((i + (r ? a : -a)) / ((r ? u : s) - e)) * 1e3
            );
          },
        };
      },
      nf = function (t, e) {
        return (
          e && !t._gsapAllow && t.preventDefault(),
          t.changedTouches ? t.changedTouches[0] : t
        );
      },
      nd = function (t) {
        var e = Math.max.apply(Math, t),
          r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r;
      },
      np = function () {
        (iG = iI.core.globals().ScrollTrigger) && iG.core && i6();
      },
      ng = function (t) {
        return (
          (iI = t || i0()),
          !iY &&
            iI &&
            "u" > typeof document &&
            document.body &&
            ((iX = window),
            (iq = (iU = document).documentElement),
            (i$ = iU.body),
            (iQ = [iX, iU, iq, i$]),
            iI.utils.clamp,
            (iJ = iI.core.context || function () {}),
            (iH = "onpointerenter" in i$ ? "pointer" : "mouse"),
            (iV = nm.isTouch =
              iX.matchMedia &&
              iX.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : 2 *
                  ("ontouchstart" in iX ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0)),
            (iK = nm.eventTypes =
              (
                "ontouchstart" in iq
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : !("onpointerdown" in iq)
                    ? "mousedown,mousemove,mouseup,mouseup"
                    : "pointerdown,pointermove,pointercancel,pointerup"
              ).split(",")),
            setTimeout(function () {
              return (i1 = 0);
            }, 500),
            np(),
            (iY = 1)),
          iY
        );
      };
    ((no.op = na), (i5.cache = 0));
    var nm = (function () {
      var t;
      function e(t) {
        this.init(t);
      }
      return (
        (e.prototype.init = function (t) {
          (iY || ng(iI) || console.warn("Please gsap.registerPlugin(Observer)"),
            iG || np());
          var e = t.tolerance,
            r = t.dragMinimum,
            i = t.type,
            n = t.target,
            s = t.lineHeight,
            o = t.debounce,
            a = t.preventDefault,
            l = t.onStop,
            c = t.onStopDelay,
            u = t.ignore,
            h = t.wheelSpeed,
            f = t.event,
            d = t.onDragStart,
            p = t.onDragEnd,
            g = t.onDrag,
            m = t.onPress,
            x = t.onRelease,
            y = t.onRight,
            v = t.onLeft,
            _ = t.onUp,
            w = t.onDown,
            b = t.onChangeX,
            k = t.onChangeY,
            j = t.onChange,
            T = t.onToggleX,
            M = t.onToggleY,
            O = t.onHover,
            C = t.onHoverEnd,
            A = t.onMove,
            S = t.ignoreCheck,
            N = t.isNormalizer,
            D = t.onGestureStart,
            E = t.onGestureEnd,
            P = t.onWheel,
            R = t.onEnable,
            z = t.onDisable,
            L = t.onClick,
            W = t.scrollSpeed,
            F = t.capture,
            B = t.allowClicks,
            I = t.lockAxis,
            Y = t.onLockAxis;
          ((this.target = n = nl(n) || iq),
            (this.vars = t),
            u && (u = iI.utils.toArray(u)),
            (e = e || 1e-9),
            (r = r || 0),
            (h = h || 1),
            (W = W || 1),
            (i = i || "wheel,touch,pointer"),
            (o = !1 !== o),
            s || (s = parseFloat(iX.getComputedStyle(i$).lineHeight) || 22));
          var X,
            U,
            q,
            $,
            V,
            H,
            G,
            Q = this,
            Z = 0,
            K = 0,
            J = t.passive || (!a && !1 !== t.passive),
            tt = nu(n, no),
            te = nu(n, na),
            tr = tt(),
            ti = te(),
            tn =
              ~i.indexOf("touch") &&
              !~i.indexOf("pointer") &&
              "pointerdown" === iK[0],
            ts = i9(n),
            to = n.ownerDocument || iU,
            ta = [0, 0, 0],
            tl = [0, 0, 0],
            tc = 0,
            tu = function () {
              return (tc = i4());
            },
            th = function (t, e) {
              return (
                ((Q.event = t) && u && nc(t.target, u)) ||
                (e && tn && "touch" !== t.pointerType) ||
                (S && S(t, e))
              );
            },
            tf = function () {
              var t = (Q.deltaX = nd(ta)),
                r = (Q.deltaY = nd(tl)),
                i = Math.abs(t) >= e,
                n = Math.abs(r) >= e;
              (j && (i || n) && j(Q, t, r, ta, tl),
                i &&
                  (y && Q.deltaX > 0 && y(Q),
                  v && Q.deltaX < 0 && v(Q),
                  b && b(Q),
                  T && Q.deltaX < 0 != Z < 0 && T(Q),
                  (Z = Q.deltaX),
                  (ta[0] = ta[1] = ta[2] = 0)),
                n &&
                  (w && Q.deltaY > 0 && w(Q),
                  _ && Q.deltaY < 0 && _(Q),
                  k && k(Q),
                  M && Q.deltaY < 0 != K < 0 && M(Q),
                  (K = Q.deltaY),
                  (tl[0] = tl[1] = tl[2] = 0)),
                ($ || q) &&
                  (A && A(Q),
                  q && (d && 1 === q && d(Q), g && g(Q), (q = 0)),
                  ($ = !1)),
                H && ((H = !1), 1) && Y && Y(Q),
                V && (P(Q), (V = !1)),
                (X = 0));
            },
            td = function (t, e, r) {
              ((ta[r] += t),
                (tl[r] += e),
                Q._vx.update(t),
                Q._vy.update(e),
                o ? X || (X = requestAnimationFrame(tf)) : tf());
            },
            tp = function (t, e) {
              (I &&
                !G &&
                ((Q.axis = G = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                (H = !0)),
                "y" !== G && ((ta[2] += t), Q._vx.update(t, !0)),
                "x" !== G && ((tl[2] += e), Q._vy.update(e, !0)),
                o ? X || (X = requestAnimationFrame(tf)) : tf());
            },
            tg = function (t) {
              if (!th(t, 1)) {
                var e = (t = nf(t, a)).clientX,
                  i = t.clientY,
                  n = e - Q.x,
                  s = i - Q.y,
                  o = Q.isDragging;
                ((Q.x = e),
                  (Q.y = i),
                  (o ||
                    ((n || s) &&
                      (Math.abs(Q.startX - e) >= r ||
                        Math.abs(Q.startY - i) >= r))) &&
                    (q || (q = o ? 2 : 1), o || (Q.isDragging = !0), tp(n, s)));
              }
            },
            tm = (Q.onPress = function (t) {
              th(t, 1) ||
                (t && t.button) ||
                ((Q.axis = G = null),
                U.pause(),
                (Q.isPressed = !0),
                (t = nf(t)),
                (Z = K = 0),
                (Q.startX = Q.x = t.clientX),
                (Q.startY = Q.y = t.clientY),
                Q._vx.reset(),
                Q._vy.reset(),
                nt(N ? n : to, iK[1], tg, J, !0),
                (Q.deltaX = Q.deltaY = 0),
                m && m(Q));
            }),
            tx = (Q.onRelease = function (t) {
              if (!th(t, 1)) {
                ne(N ? n : to, iK[1], tg, !0);
                var e = !isNaN(Q.y - Q.startY),
                  r = Q.isDragging,
                  i =
                    r &&
                    (Math.abs(Q.x - Q.startX) > 3 ||
                      Math.abs(Q.y - Q.startY) > 3),
                  s = nf(t);
                (!i &&
                  e &&
                  (Q._vx.reset(),
                  Q._vy.reset(),
                  a &&
                    B &&
                    iI.delayedCall(0.08, function () {
                      if (i4() - tc > 300 && !t.defaultPrevented) {
                        if (t.target.click) t.target.click();
                        else if (to.createEvent) {
                          var e = to.createEvent("MouseEvents");
                          (e.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            iX,
                            1,
                            s.screenX,
                            s.screenY,
                            s.clientX,
                            s.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            t.target.dispatchEvent(e));
                        }
                      }
                    })),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                  l && r && !N && U.restart(!0),
                  q && tf(),
                  p && r && p(Q),
                  x && x(Q, i));
              }
            }),
            ty = function (t) {
              return (
                t.touches &&
                t.touches.length > 1 &&
                (Q.isGesturing = !0) &&
                D(t, Q.isDragging)
              );
            },
            tv = function () {
              return ((Q.isGesturing = !1), E(Q));
            },
            t_ = function (t) {
              if (!th(t)) {
                var e = tt(),
                  r = te();
                (td((e - tr) * W, (r - ti) * W, 1),
                  (tr = e),
                  (ti = r),
                  l && U.restart(!0));
              }
            },
            tw = function (t) {
              if (!th(t)) {
                ((t = nf(t, a)), P && (V = !0));
                var e =
                  (1 === t.deltaMode
                    ? s
                    : 2 === t.deltaMode
                      ? iX.innerHeight
                      : 1) * h;
                (td(t.deltaX * e, t.deltaY * e, 0), l && !N && U.restart(!0));
              }
            },
            tb = function (t) {
              if (!th(t)) {
                var e = t.clientX,
                  r = t.clientY,
                  i = e - Q.x,
                  n = r - Q.y;
                ((Q.x = e),
                  (Q.y = r),
                  ($ = !0),
                  l && U.restart(!0),
                  (i || n) && tp(i, n));
              }
            },
            tk = function (t) {
              ((Q.event = t), O(Q));
            },
            tj = function (t) {
              ((Q.event = t), C(Q));
            },
            tT = function (t) {
              return th(t) || (nf(t, a) && L(Q));
            };
          ((U = Q._dc =
            iI
              .delayedCall(c || 0.25, function () {
                (Q._vx.reset(), Q._vy.reset(), U.pause(), l && l(Q));
              })
              .pause()),
            (Q.deltaX = Q.deltaY = 0),
            (Q._vx = nh(0, 50, !0)),
            (Q._vy = nh(0, 50, !0)),
            (Q.scrollX = tt),
            (Q.scrollY = te),
            (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
            iJ(this),
            (Q.enable = function (t) {
              return (
                !Q.isEnabled &&
                  (nt(ts ? to : n, "scroll", nn),
                  i.indexOf("scroll") >= 0 &&
                    nt(ts ? to : n, "scroll", t_, J, F),
                  i.indexOf("wheel") >= 0 && nt(n, "wheel", tw, J, F),
                  ((i.indexOf("touch") >= 0 && iV) ||
                    i.indexOf("pointer") >= 0) &&
                    (nt(n, iK[0], tm, J, F),
                    nt(to, iK[2], tx),
                    nt(to, iK[3], tx),
                    B && nt(n, "click", tu, !0, !0),
                    L && nt(n, "click", tT),
                    D && nt(to, "gesturestart", ty),
                    E && nt(to, "gestureend", tv),
                    O && nt(n, iH + "enter", tk),
                    C && nt(n, iH + "leave", tj),
                    A && nt(n, iH + "move", tb)),
                  (Q.isEnabled = !0),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = $ = q = !1),
                  Q._vx.reset(),
                  Q._vy.reset(),
                  (tr = tt()),
                  (ti = te()),
                  t && t.type && tm(t),
                  R && R(Q)),
                Q
              );
            }),
            (Q.disable = function () {
              Q.isEnabled &&
                (i2.filter(function (t) {
                  return t !== Q && i9(t.target);
                }).length || ne(ts ? to : n, "scroll", nn),
                Q.isPressed &&
                  (Q._vx.reset(), Q._vy.reset(), ne(N ? n : to, iK[1], tg, !0)),
                ne(ts ? to : n, "scroll", t_, F),
                ne(n, "wheel", tw, F),
                ne(n, iK[0], tm, F),
                ne(to, iK[2], tx),
                ne(to, iK[3], tx),
                ne(n, "click", tu, !0),
                ne(n, "click", tT),
                ne(to, "gesturestart", ty),
                ne(to, "gestureend", tv),
                ne(n, iH + "enter", tk),
                ne(n, iH + "leave", tj),
                ne(n, iH + "move", tb),
                (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                z && z(Q));
            }),
            (Q.kill = Q.revert =
              function () {
                Q.disable();
                var t = i2.indexOf(Q);
                (t >= 0 && i2.splice(t, 1), iZ === Q && (iZ = 0));
              }),
            i2.push(Q),
            N && i9(n) && (iZ = Q),
            Q.enable(f));
        }),
        (t = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i));
          }
        })(e.prototype, t),
        e
      );
    })();
    ((nm.version = "3.14.2"),
      (nm.create = function (t) {
        return new nm(t);
      }),
      (nm.register = ng),
      (nm.getAll = function () {
        return i2.slice();
      }),
      (nm.getById = function (t) {
        return i2.filter(function (e) {
          return e.vars.id === t;
        })[0];
      }),
      i0() && iI.registerPlugin(nm));
    var nx,
      ny,
      nv,
      n_,
      nw,
      nb,
      nk,
      nj,
      nT,
      nM,
      nO,
      nC,
      nA,
      nS,
      nN,
      nD,
      nE,
      nP,
      nR,
      nz,
      nL,
      nW,
      nF,
      nB,
      nI,
      nY,
      nX,
      nU,
      nq,
      n$,
      nV,
      nH,
      nG,
      nQ,
      nZ,
      nK,
      nJ,
      n0,
      n1 = 1,
      n2 = Date.now,
      n5 = n2(),
      n3 = 0,
      n4 = 0,
      n8 = function (t, e, r) {
        var i = su(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return ((r["_" + e + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t);
      },
      n6 = function (t, e) {
        return e && (!su(t) || "clamp(" !== t.substr(0, 6))
          ? "clamp(" + t + ")"
          : t;
      },
      n7 = function () {
        return (nS = 1);
      },
      n9 = function () {
        return (nS = 0);
      },
      st = function (t) {
        return t;
      },
      se = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      sr = function () {
        return "u" > typeof window;
      },
      si = function () {
        return nx || (sr() && (nx = window.gsap) && nx.registerPlugin && nx);
      },
      sn = function (t) {
        return !!~nk.indexOf(t);
      },
      ss = function (t) {
        return (
          ("Height" === t ? nV : nv["inner" + t]) ||
          nw["client" + t] ||
          nb["client" + t]
        );
      },
      so = function (t) {
        return (
          i7(t, "getBoundingClientRect") ||
          (sn(t)
            ? function () {
                return ((od.width = nv.innerWidth), (od.height = nV), od);
              }
            : function () {
                return sD(t);
              })
        );
      },
      sa = function (t, e, r) {
        var i = r.d,
          n = r.d2,
          s = r.a;
        return (s = i7(t, "getBoundingClientRect"))
          ? function () {
              return s()[i];
            }
          : function () {
              return (e ? ss(n) : t["client" + n]) || 0;
            };
      },
      sl = function (t, e) {
        var r = e.s,
          i = e.d2,
          n = e.d,
          s = e.a;
        return Math.max(
          0,
          (s = i7(t, (r = "scroll" + i)))
            ? s() - so(t)()[n]
            : sn(t)
              ? (nw[r] || nb[r]) - ss(i)
              : t[r] - t["offset" + i],
        );
      },
      sc = function (t, e) {
        for (var r = 0; r < nR.length; r += 3)
          (!e || ~e.indexOf(nR[r + 1])) && t(nR[r], nR[r + 1], nR[r + 2]);
      },
      su = function (t) {
        return "string" == typeof t;
      },
      sh = function (t) {
        return "function" == typeof t;
      },
      sf = function (t) {
        return "number" == typeof t;
      },
      sd = function (t) {
        return "object" == typeof t;
      },
      sp = function (t, e, r) {
        return t && t.progress(+!e) && r && t.pause();
      },
      sg = function (t, e) {
        if (t.enabled) {
          var r = t._ctx
            ? t._ctx.add(function () {
                return e(t);
              })
            : e(t);
          r && r.totalTime && (t.callbackAnimation = r);
        }
      },
      sm = Math.abs,
      sx = "left",
      sy = "right",
      sv = "bottom",
      s_ = "width",
      sw = "height",
      sb = "Right",
      sk = "Left",
      sj = "Bottom",
      sT = "padding",
      sM = "margin",
      sO = "Width",
      sC = "Height",
      sA = function (t) {
        return nv.getComputedStyle(t);
      },
      sS = function (t) {
        var e = sA(t).position;
        t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
      },
      sN = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      sD = function (t, e) {
        var r =
            e &&
            "matrix(1, 0, 0, 1, 0, 0)" !== sA(t)[nN] &&
            nx
              .to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          i = t.getBoundingClientRect();
        return (r && r.progress(0).kill(), i);
      },
      sE = function (t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0;
      },
      sP = function (t) {
        var e,
          r = [],
          i = t.labels,
          n = t.duration();
        for (e in i) r.push(i[e] / n);
        return r;
      },
      sR = function (t) {
        var e = nx.utils.snap(t),
          r =
            Array.isArray(t) &&
            t.slice(0).sort(function (t, e) {
              return t - e;
            });
        return r
          ? function (t, i, n) {
              var s;
              if ((void 0 === n && (n = 0.001), !i)) return e(t);
              if (i > 0) {
                for (t -= n, s = 0; s < r.length; s++)
                  if (r[s] >= t) return r[s];
                return r[s - 1];
              }
              for (s = r.length, t += n; s--; ) if (r[s] <= t) return r[s];
              return r[0];
            }
          : function (r, i, n) {
              void 0 === n && (n = 0.001);
              var s = e(r);
              return !i || Math.abs(s - r) < n || s - r < 0 == i < 0
                ? s
                : e(i < 0 ? r - t : r + t);
            };
      },
      sz = function (t, e, r, i) {
        return r.split(",").forEach(function (r) {
          return t(e, r, i);
        });
      },
      sL = function (t, e, r, i, n) {
        return t.addEventListener(e, r, { passive: !i, capture: !!n });
      },
      sW = function (t, e, r, i) {
        return t.removeEventListener(e, r, !!i);
      },
      sF = function (t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
      },
      sB = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      sI = { toggleActions: "play", anticipatePin: 0 },
      sY = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      sX = function (t, e) {
        if (su(t)) {
          var r = t.indexOf("="),
            i = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
          (~r &&
            (t.indexOf("%") > r && (i *= e / 100), (t = t.substr(0, r - 1))),
            (t =
              i +
              (t in sY
                ? sY[t] * e
                : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0)));
        }
        return t;
      },
      sU = function (t, e, r, i, n, s, o, a) {
        var l = n.startColor,
          c = n.endColor,
          u = n.fontSize,
          h = n.indent,
          f = n.fontWeight,
          d = n_.createElement("div"),
          p = sn(r) || "fixed" === i7(r, "pinType"),
          g = -1 !== t.indexOf("scroller"),
          m = p ? nb : r,
          x = -1 !== t.indexOf("start"),
          y = x ? l : c,
          v =
            "border-color:" +
            y +
            ";font-size:" +
            u +
            ";color:" +
            y +
            ";font-weight:" +
            f +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (v += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
          (g || a || !p) &&
            (v += (i === na ? sy : sv) + ":" + (s + parseFloat(h)) + "px;"),
          o &&
            (v +=
              "box-sizing:border-box;text-align:left;width:" +
              o.offsetWidth +
              "px;"),
          (d._isStart = x),
          d.setAttribute(
            "class",
            "gsap-marker-" + t + (e ? " marker-" + e : ""),
          ),
          (d.style.cssText = v),
          (d.innerText = e || 0 === e ? t + "-" + e : t),
          m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d),
          (d._offset = d["offset" + i.op.d2]),
          sq(d, 0, i, x),
          d
        );
      },
      sq = function (t, e, r, i) {
        var n = { display: "block" },
          s = r[i ? "os2" : "p2"],
          o = r[i ? "p2" : "os2"];
        ((t._isFlipped = i),
          (n[r.a + "Percent"] = i ? -100 : 0),
          (n[r.a] = i ? "1px" : 0),
          (n["border" + s + sO] = 1),
          (n["border" + o + sO] = 0),
          (n[r.p] = e + "px"),
          nx.set(t, n));
      },
      s$ = [],
      sV = {},
      sH = function () {
        return n2() - n3 > 34 && (nZ || (nZ = requestAnimationFrame(on)));
      },
      sG = function () {
        (nF && nF.isPressed && !(nF.startX > nb.clientWidth)) ||
          (i5.cache++,
          nF ? nZ || (nZ = requestAnimationFrame(on)) : on(),
          n3 || s1("scrollStart"),
          (n3 = n2()));
      },
      sQ = function () {
        ((nY = nv.innerWidth), (nI = nv.innerHeight));
      },
      sZ = function (t) {
        (i5.cache++,
          (!0 === t ||
            (!nA &&
              !nW &&
              !n_.fullscreenElement &&
              !n_.webkitFullscreenElement &&
              (!nB ||
                nY !== nv.innerWidth ||
                Math.abs(nv.innerHeight - nI) > 0.25 * nv.innerHeight))) &&
            nj.restart(!0));
      },
      sK = {},
      sJ = [],
      s0 = function t() {
        return sW(o_, "scrollEnd", t) || oe(!0);
      },
      s1 = function (t) {
        return (
          (sK[t] &&
            sK[t].map(function (t) {
              return t();
            })) ||
          sJ
        );
      },
      s2 = [],
      s5 = function (t) {
        for (var e = 0; e < s2.length; e += 5)
          (!t || (s2[e + 4] && s2[e + 4].query === t)) &&
            ((s2[e].style.cssText = s2[e + 1]),
            s2[e].getBBox && s2[e].setAttribute("transform", s2[e + 2] || ""),
            (s2[e + 3].uncache = 1));
      },
      s3 = function () {
        return i5.forEach(function (t) {
          return sh(t) && ++t.cacheID && (t.rec = t());
        });
      },
      s4 = function (t, e) {
        var r;
        for (nD = 0; nD < s$.length; nD++)
          (r = s$[nD]) &&
            (!e || r._ctx === e) &&
            (t ? r.kill(1) : r.revert(!0, !0));
        ((nH = !0), e && s5(e), e || s1("revert"));
      },
      s8 = function (t, e) {
        (i5.cache++,
          (e || !nK) &&
            i5.forEach(function (t) {
              return sh(t) && t.cacheID++ && (t.rec = 0);
            }),
          su(t) && (nv.history.scrollRestoration = nq = t));
      },
      s6 = 0,
      s7 = function () {
        if (nJ !== s6) {
          var t = (nJ = s6);
          requestAnimationFrame(function () {
            return t === s6 && oe(!0);
          });
        }
      },
      s9 = function () {
        (nb.appendChild(n$),
          (nV = (!nF && n$.offsetHeight) || nv.innerHeight),
          nb.removeChild(n$));
      },
      ot = function (t) {
        return nT(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (e) {
          return (e.style.display = t ? "none" : "block");
        });
      },
      oe = function (t, e) {
        if (
          ((nw = n_.documentElement),
          (nb = n_.body),
          (nk = [nv, n_, nw, nb]),
          n3 && !t && !nH)
        )
          return void sL(o_, "scrollEnd", s0);
        (s9(), (nK = o_.isRefreshing = !0), nH || s3());
        var r = s1("refreshInit");
        (nz && o_.sort(),
          e || s4(),
          i5.forEach(function (t) {
            sh(t) &&
              (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
          }),
          s$.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          (nH = !1),
          s$.forEach(function (t) {
            if (t._subPinOffset && t.pin) {
              var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = t.pin[e];
              (t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh());
            }
          }),
          (nG = 1),
          ot(!0),
          s$.forEach(function (t) {
            var e = sl(t.scroller, t._dir),
              r = "max" === t.vars.end || (t._endClamp && t.end > e),
              i = t._startClamp && t.start >= e;
            (r || i) &&
              t.setPositions(
                i ? e - 1 : t.start,
                r ? Math.max(i ? e : t.start + 1, e) : t.end,
                !0,
              );
          }),
          ot(!1),
          (nG = 0),
          r.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          i5.forEach(function (t) {
            sh(t) &&
              (t.smooth &&
                requestAnimationFrame(function () {
                  return (t.target.style.scrollBehavior = "smooth");
                }),
              t.rec && t(t.rec));
          }),
          s8(nq, 1),
          nj.pause(),
          s6++,
          (nK = 2),
          on(2),
          s$.forEach(function (t) {
            return sh(t.vars.onRefresh) && t.vars.onRefresh(t);
          }),
          (nK = o_.isRefreshing = !1),
          s1("refresh"));
      },
      or = 0,
      oi = 1,
      on = function (t) {
        if (2 === t || (!nK && !nH)) {
          ((o_.isUpdating = !0), n0 && n0.update(0));
          var e = s$.length,
            r = n2(),
            i = r - n5 >= 50,
            n = e && s$[0].scroll();
          if (
            ((oi = or > n ? -1 : 1),
            nK || (or = n),
            i &&
              (n3 && !nS && r - n3 > 200 && ((n3 = 0), s1("scrollEnd")),
              (nO = n5),
              (n5 = r)),
            oi < 0)
          ) {
            for (nD = e; nD-- > 0; ) s$[nD] && s$[nD].update(0, i);
            oi = 1;
          } else for (nD = 0; nD < e; nD++) s$[nD] && s$[nD].update(0, i);
          o_.isUpdating = !1;
        }
        nZ = 0;
      },
      os = [
        sx,
        "top",
        sv,
        sy,
        sM + sj,
        sM + sb,
        sM + "Top",
        sM + sk,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      oo = os.concat([
        s_,
        sw,
        "boxSizing",
        "max" + sO,
        "max" + sC,
        "position",
        sM,
        sT,
        sT + "Top",
        sT + sb,
        sT + sj,
        sT + sk,
      ]),
      oa = function (t, e, r) {
        ou(r);
        var i = t._gsap;
        if (i.spacerIsNative) ou(i.spacerState);
        else if (t._gsap.swappedIn) {
          var n = e.parentNode;
          n && (n.insertBefore(t, e), n.removeChild(e));
        }
        t._gsap.swappedIn = !1;
      },
      ol = function (t, e, r, i) {
        if (!t._gsap.swappedIn) {
          for (var n, s = os.length, o = e.style, a = t.style; s--; )
            o[(n = os[s])] = r[n];
          ((o.position = "absolute" === r.position ? "absolute" : "relative"),
            "inline" === r.display && (o.display = "inline-block"),
            (a[sv] = a[sy] = "auto"),
            (o.flexBasis = r.flexBasis || "auto"),
            (o.overflow = "visible"),
            (o.boxSizing = "border-box"),
            (o[s_] = sE(t, no) + "px"),
            (o[sw] = sE(t, na) + "px"),
            (o[sT] = a[sM] = a.top = a[sx] = "0"),
            ou(i),
            (a[s_] = a["max" + sO] = r[s_]),
            (a[sw] = a["max" + sC] = r[sw]),
            (a[sT] = r[sT]),
            t.parentNode !== e &&
              (t.parentNode.insertBefore(e, t), e.appendChild(t)),
            (t._gsap.swappedIn = !0));
        }
      },
      oc = /([A-Z])/g,
      ou = function (t) {
        if (t) {
          var e,
            r,
            i = t.t.style,
            n = t.length,
            s = 0;
          for ((t.t._gsap || nx.core.getCache(t.t)).uncache = 1; s < n; s += 2)
            ((r = t[s + 1]),
              (e = t[s]),
              r
                ? (i[e] = r)
                : i[e] && i.removeProperty(e.replace(oc, "-$1").toLowerCase()));
        }
      },
      oh = function (t) {
        for (var e = oo.length, r = t.style, i = [], n = 0; n < e; n++)
          i.push(oo[n], r[oo[n]]);
        return ((i.t = t), i);
      },
      of = function (t, e, r) {
        for (var i, n = [], s = t.length, o = 8 * !!r; o < s; o += 2)
          ((i = t[o]), n.push(i, i in e ? e[i] : t[o + 1]));
        return ((n.t = t.t), n);
      },
      od = { left: 0, top: 0 },
      op = function (t, e, r, i, n, s, o, a, l, c, u, h, f, d) {
        (sh(t) && (t = t(a)),
          su(t) &&
            "max" === t.substr(0, 3) &&
            (t = h + ("=" === t.charAt(4) ? sX("0" + t.substr(3), r) : 0)));
        var p,
          g,
          m,
          x = f ? f.time() : 0;
        if ((f && f.seek(0), isNaN(t) || (t *= 1), sf(t)))
          (f &&
            (t = nx.utils.mapRange(
              f.scrollTrigger.start,
              f.scrollTrigger.end,
              0,
              h,
              t,
            )),
            o && sq(o, r, i, !0));
        else {
          sh(e) && (e = e(a));
          var y,
            v,
            _,
            w,
            b = (t || "0").split(" ");
          ((y = sD((m = nl(e, a) || nb)) || {}).left ||
            y.top ||
            "none" !== sA(m).display ||
            ((w = m.style.display),
            (m.style.display = "block"),
            (y = sD(m)),
            w ? (m.style.display = w) : m.style.removeProperty("display")),
            (v = sX(b[0], y[i.d])),
            (_ = sX(b[1] || "0", r)),
            (t = y[i.p] - l[i.p] - c + v + n - _),
            o && sq(o, _, i, r - _ < 20 || (o._isStart && _ > 20)),
            (r -= r - _));
        }
        if ((d && ((a[d] = t || -0.001), t < 0 && (t = 0)), s)) {
          var k = t + r,
            j = s._isStart;
          ((p = "scroll" + i.d2),
            sq(
              s,
              k,
              i,
              (j && k > 20) ||
                (!j && (u ? Math.max(nb[p], nw[p]) : s.parentNode[p]) <= k + 1),
            ),
            u &&
              ((l = sD(o)),
              u && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + "px")));
        }
        return (
          f &&
            m &&
            ((p = sD(m)),
            f.seek(h),
            (g = sD(m)),
            (f._caScrollDist = p[i.p] - g[i.p]),
            (t = (t / f._caScrollDist) * h)),
          f && f.seek(x),
          f ? t : Math.round(t)
        );
      },
      og = /(webkit|moz|length|cssText|inset)/i,
      om = function (t, e, r, i) {
        if (t.parentNode !== e) {
          var n,
            s,
            o = t.style;
          if (e === nb) {
            for (n in ((t._stOrig = o.cssText), (s = sA(t))))
              +n ||
                og.test(n) ||
                !s[n] ||
                "string" != typeof o[n] ||
                "0" === n ||
                (o[n] = s[n]);
            ((o.top = r), (o.left = i));
          } else o.cssText = t._stOrig;
          ((nx.core.getCache(t).uncache = 1), e.appendChild(t));
        }
      },
      ox = function (t, e, r) {
        var i = e,
          n = i;
        return function (e) {
          var s = Math.round(t());
          return (
            s !== i &&
              s !== n &&
              Math.abs(s - i) > 3 &&
              Math.abs(s - n) > 3 &&
              ((e = s), r && r()),
            (n = i),
            (i = Math.round(e))
          );
        };
      },
      oy = function (t, e, r) {
        var i = {};
        ((i[e.p] = "+=" + r), nx.set(t, i));
      },
      ov = function (t, e) {
        var r = nu(t, e),
          i = "_scroll" + e.p2,
          n = function e(n, s, o, a, l) {
            var c = e.tween,
              u = s.onComplete,
              h = {};
            o = o || r();
            var f = ox(r, o, function () {
              (c.kill(), (e.tween = 0));
            });
            return (
              (l = (a && l) || 0),
              (a = a || n - o),
              c && c.kill(),
              (s[i] = n),
              (s.inherit = !1),
              (s.modifiers = h),
              (h[i] = function () {
                return f(o + a * c.ratio + l * c.ratio * c.ratio);
              }),
              (s.onUpdate = function () {
                (i5.cache++, e.tween && on());
              }),
              (s.onComplete = function () {
                ((e.tween = 0), u && u.call(c));
              }),
              (c = e.tween = nx.to(t, s))
            );
          };
        return (
          (t[i] = r),
          (r.wheelHandler = function () {
            return n.tween && n.tween.kill() && (n.tween = 0);
          }),
          sL(t, "wheel", r.wheelHandler),
          o_.isTouch && sL(t, "touchmove", r.wheelHandler),
          n
        );
      },
      o_ = (function () {
        function t(e, r) {
          (ny ||
            t.register(nx) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            nU(this),
            this.init(e, r));
        }
        return (
          (t.prototype.init = function (e, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !n4)
            ) {
              this.update = this.refresh = this.kill = st;
              return;
            }
            var i,
              n,
              s,
              o,
              a,
              l,
              c,
              u,
              h,
              f,
              d,
              p,
              g,
              m,
              x,
              y,
              v,
              _,
              w,
              b,
              k,
              j,
              T,
              M,
              O,
              C,
              A,
              S,
              N,
              D,
              E,
              P,
              R,
              z,
              L,
              W,
              F,
              B,
              I,
              Y,
              X,
              U = (e = sN(
                su(e) || sf(e) || e.nodeType ? { trigger: e } : e,
                sI,
              )),
              q = U.onUpdate,
              $ = U.toggleClass,
              V = U.id,
              H = U.onToggle,
              G = U.onRefresh,
              Q = U.scrub,
              Z = U.trigger,
              K = U.pin,
              J = U.pinSpacing,
              tt = U.invalidateOnRefresh,
              te = U.anticipatePin,
              tr = U.onScrubComplete,
              ti = U.onSnapComplete,
              tn = U.once,
              ts = U.snap,
              to = U.pinReparent,
              ta = U.pinSpacer,
              tl = U.containerAnimation,
              tc = U.fastScrollEnd,
              tu = U.preventOverlaps,
              th =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? no
                  : na,
              tf = !Q && 0 !== Q,
              td = nl(e.scroller || nv),
              tp = nx.core.getCache(td),
              tg = sn(td),
              tm =
                ("pinType" in e
                  ? e.pinType
                  : i7(td, "pinType") || (tg && "fixed")) === "fixed",
              tx = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              ty = tf && e.toggleActions.split(" "),
              tv = "markers" in e ? e.markers : sI.markers,
              t_ = tg ? 0 : parseFloat(sA(td)["border" + th.p2 + sO]) || 0,
              tw = this,
              tb =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(tw);
                },
              tk = sa(td, tg, th),
              tj =
                !tg || ~i3.indexOf(td)
                  ? so(td)
                  : function () {
                      return od;
                    },
              tT = 0,
              tM = 0,
              tO = 0,
              tC = nu(td, th);
            if (
              ((tw._startClamp = tw._endClamp = !1),
              (tw._dir = th),
              (te *= 45),
              (tw.scroller = td),
              (tw.scroll = tl ? tl.time.bind(tl) : tC),
              (l = tC()),
              (tw.vars = e),
              (r = r || e.animation),
              "refreshPriority" in e &&
                ((nz = 1), -9999 === e.refreshPriority && (n0 = tw)),
              (tp.tweenScroll = tp.tweenScroll || {
                top: ov(td, na),
                left: ov(td, no),
              }),
              (tw.tweenTo = s = tp.tweenScroll[th.p]),
              (tw.scrubDuration = function (t) {
                (L = sf(t) && t)
                  ? z
                    ? z.duration(t)
                    : (z = nx.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: L,
                        paused: !0,
                        onComplete: function () {
                          return tr && tr(tw);
                        },
                      }))
                  : (z && z.progress(1).kill(), (z = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !tw.isReverted) ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (tw.animation = r.pause()),
                (r.scrollTrigger = tw),
                tw.scrubDuration(Q),
                (P = 0),
                V || (V = r.vars.id)),
              ts &&
                ((!sd(ts) || ts.push) && (ts = { snapTo: ts }),
                "scrollBehavior" in nb.style &&
                  nx.set(tg ? [nb, nw] : td, { scrollBehavior: "auto" }),
                i5.forEach(function (t) {
                  return (
                    sh(t) &&
                    t.target === (tg ? n_.scrollingElement || nw : td) &&
                    (t.smooth = !1)
                  );
                }),
                (a = sh(ts.snapTo)
                  ? ts.snapTo
                  : "labels" === ts.snapTo
                    ? ((i = r),
                      function (t) {
                        return nx.utils.snap(sP(i), t);
                      })
                    : "labelsDirectional" === ts.snapTo
                      ? ((n = r),
                        function (t, e) {
                          return sR(sP(n))(t, e.direction);
                        })
                      : !1 !== ts.directional
                        ? function (t, e) {
                            return sR(ts.snapTo)(
                              t,
                              n2() - tM < 500 ? 0 : e.direction,
                            );
                          }
                        : nx.utils.snap(ts.snapTo)),
                (W = sd((W = ts.duration || { min: 0.1, max: 2 }))
                  ? nM(W.min, W.max)
                  : nM(W, W)),
                (F = nx
                  .delayedCall(ts.delay || L / 2 || 0.1, function () {
                    var t = tC(),
                      e = n2() - tM < 500,
                      i = s.tween;
                    if (
                      (e || 10 > Math.abs(tw.getVelocity())) &&
                      !i &&
                      !nS &&
                      tT !== t
                    ) {
                      var n,
                        o,
                        l = (t - u) / y,
                        c = r && !tf ? r.totalProgress() : l,
                        f = e ? 0 : ((c - R) / (n2() - nO)) * 1e3 || 0,
                        d = nx.utils.clamp(-l, 1 - l, (sm(f / 2) * f) / 0.185),
                        p = l + (!1 === ts.inertia ? 0 : d),
                        g = ts,
                        m = g.onStart,
                        x = g.onInterrupt,
                        v = g.onComplete;
                      if (
                        (sf((n = a(p, tw))) || (n = p),
                        (o = Math.max(0, Math.round(u + n * y))),
                        t <= h && t >= u && o !== t)
                      ) {
                        if (i && !i._initted && i.data <= sm(o - t)) return;
                        (!1 === ts.inertia && (d = n - l),
                          s(
                            o,
                            {
                              duration: W(
                                sm(
                                  (0.185 * Math.max(sm(p - c), sm(n - c))) /
                                    f /
                                    0.05 || 0,
                                ),
                              ),
                              ease: ts.ease || "power3",
                              data: sm(o - t),
                              onInterrupt: function () {
                                return F.restart(!0) && x && x(tw);
                              },
                              onComplete: function () {
                                (tw.update(),
                                  (tT = tC()),
                                  r &&
                                    !tf &&
                                    (z
                                      ? z.resetTo(
                                          "totalProgress",
                                          n,
                                          r._tTime / r._tDur,
                                        )
                                      : r.progress(n)),
                                  (P = R =
                                    r && !tf ? r.totalProgress() : tw.progress),
                                  ti && ti(tw),
                                  v && v(tw));
                              },
                            },
                            t,
                            d * y,
                            o - t - d * y,
                          ),
                          m && m(tw, s.tween));
                      }
                    } else tw.isActive && tT !== t && F.restart(!0);
                  })
                  .pause())),
              V && (sV[V] = tw),
              (X =
                (Z = tw.trigger = nl(Z || (!0 !== K && K))) &&
                Z._gsap &&
                Z._gsap.stRevert) && (X = X(tw)),
              (K = !0 === K ? Z : nl(K)),
              su($) && ($ = { targets: Z, className: $ }),
              K &&
                (!1 === J ||
                  J === sM ||
                  (J =
                    (!!J ||
                      !K.parentNode ||
                      !K.parentNode.style ||
                      "flex" !== sA(K.parentNode).display) &&
                    sT),
                (tw.pin = K),
                (o = nx.core.getCache(K)).spacer
                  ? (v = o.pinState)
                  : (ta &&
                      ((ta = nl(ta)) &&
                        !ta.nodeType &&
                        (ta = ta.current || ta.nativeElement),
                      (o.spacerIsNative = !!ta),
                      ta && (o.spacerState = oh(ta))),
                    (o.spacer = b = ta || n_.createElement("div")),
                    b.classList.add("pin-spacer"),
                    V && b.classList.add("pin-spacer-" + V),
                    (o.pinState = v = oh(K))),
                !1 !== e.force3D && nx.set(K, { force3D: !0 }),
                (tw.spacer = b = o.spacer),
                (C = (E = sA(K))[J + th.os2]),
                (j = nx.getProperty(K)),
                (T = nx.quickSetter(K, th.a, "px")),
                ol(K, b, E),
                (w = oh(K))),
              tv)
            ) {
              ((m = sd(tv) ? sN(tv, sB) : sB),
                (p = sU("scroller-start", V, td, th, m, 0)),
                (g = sU("scroller-end", V, td, th, m, 0, p)),
                (k = p["offset" + th.op.d2]));
              var tA = nl(i7(td, "content") || td);
              ((f = this.markerStart = sU("start", V, tA, th, m, k, 0, tl)),
                (d = this.markerEnd = sU("end", V, tA, th, m, k, 0, tl)),
                tl && (Y = nx.quickSetter([f, d], th.a, "px")),
                tm ||
                  (i3.length && !0 === i7(td, "fixedMarkers")) ||
                  (sS(tg ? nb : td),
                  nx.set([p, g], { force3D: !0 }),
                  (S = nx.quickSetter(p, th.a, "px")),
                  (D = nx.quickSetter(g, th.a, "px"))));
            }
            if (tl) {
              var tS = tl.vars.onUpdate,
                tN = tl.vars.onUpdateParams;
              tl.eventCallback("onUpdate", function () {
                (tw.update(0, 0, 1), tS && tS.apply(tl, tN || []));
              });
            }
            if (
              ((tw.previous = function () {
                return s$[s$.indexOf(tw) - 1];
              }),
              (tw.next = function () {
                return s$[s$.indexOf(tw) + 1];
              }),
              (tw.revert = function (t, e) {
                if (!e) return tw.kill(!0);
                var i = !1 !== t || !tw.enabled,
                  n = nA;
                i !== tw.isReverted &&
                  (i &&
                    ((B = Math.max(tC(), tw.scroll.rec || 0)),
                    (tO = tw.progress),
                    (I = r && r.progress())),
                  f &&
                    [f, d, p, g].forEach(function (t) {
                      return (t.style.display = i ? "none" : "block");
                    }),
                  i && ((nA = tw), tw.update(i)),
                  !K ||
                    (to && tw.isActive) ||
                    (i ? oa(K, b, v) : ol(K, b, sA(K), A)),
                  i || tw.update(i),
                  (nA = n),
                  (tw.isReverted = i));
              }),
              (tw.refresh = function (i, n, o, a) {
                if ((!nA && tw.enabled) || n) {
                  if (K && i && n3) return void sL(t, "scrollEnd", s0);
                  (!nK && tb && tb(tw),
                    (nA = tw),
                    s.tween && !o && (s.tween.kill(), (s.tween = 0)),
                    z && z.pause(),
                    tt &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren
                        ? r.getChildren(!0, !0, !1).forEach(function (t) {
                            return (
                              t.vars.immediateRender && t.render(0, !0, !0)
                            );
                          })
                        : r.vars.immediateRender && r.render(0, !0, !0)),
                    tw.isReverted || tw.revert(!0, !0),
                    (tw._subPinOffset = !1));
                  var m,
                    k,
                    T,
                    C,
                    S,
                    D,
                    E,
                    P,
                    R,
                    L,
                    W,
                    Y,
                    X,
                    U = tk(),
                    q = tj(),
                    $ = tl ? tl.duration() : sl(td, th),
                    V = y <= 0.01 || !y,
                    H = 0,
                    Q = a || 0,
                    te = sd(o) ? o.end : e.end,
                    tr = e.endTrigger || Z,
                    ti = sd(o)
                      ? o.start
                      : e.start ||
                        (0 !== e.start && Z ? (K ? "0 0" : "0 100%") : 0),
                    tn = (tw.pinnedContainer =
                      e.pinnedContainer && nl(e.pinnedContainer, tw)),
                    ts = (Z && Math.max(0, s$.indexOf(tw))) || 0,
                    ta = ts;
                  for (
                    tv &&
                    sd(o) &&
                    ((Y = nx.getProperty(p, th.p)),
                    (X = nx.getProperty(g, th.p)));
                    ta-- > 0;
                  )
                    ((D = s$[ta]).end || D.refresh(0, 1) || (nA = tw),
                      (E = D.pin) &&
                        (E === Z || E === K || E === tn) &&
                        !D.isReverted &&
                        (L || (L = []), L.unshift(D), D.revert(!0, !0)),
                      D !== s$[ta] && (ts--, ta--));
                  for (
                    sh(ti) && (ti = ti(tw)),
                      u =
                        op(
                          (ti = n8(ti, "start", tw)),
                          Z,
                          U,
                          th,
                          tC(),
                          f,
                          p,
                          tw,
                          q,
                          t_,
                          tm,
                          $,
                          tl,
                          tw._startClamp && "_startClamp",
                        ) || (K ? -0.001 : 0),
                      sh(te) && (te = te(tw)),
                      su(te) &&
                        !te.indexOf("+=") &&
                        (~te.indexOf(" ")
                          ? (te = (su(ti) ? ti.split(" ")[0] : "") + te)
                          : ((H = sX(te.substr(2), U)),
                            (te = su(ti)
                              ? ti
                              : (tl
                                  ? nx.utils.mapRange(
                                      0,
                                      tl.duration(),
                                      tl.scrollTrigger.start,
                                      tl.scrollTrigger.end,
                                      u,
                                    )
                                  : u) + H),
                            (tr = Z))),
                      te = n8(te, "end", tw),
                      h =
                        Math.max(
                          u,
                          op(
                            te || (tr ? "100% 0" : $),
                            tr,
                            U,
                            th,
                            tC() + H,
                            d,
                            g,
                            tw,
                            q,
                            t_,
                            tm,
                            $,
                            tl,
                            tw._endClamp && "_endClamp",
                          ),
                        ) || -0.001,
                      H = 0,
                      ta = ts;
                    ta--;
                  )
                    (E = (D = s$[ta] || {}).pin) &&
                      D.start - D._pinPush <= u &&
                      !tl &&
                      D.end > 0 &&
                      ((m =
                        D.end -
                        (tw._startClamp ? Math.max(0, D.start) : D.start)),
                      ((E === Z && D.start - D._pinPush < u) || E === tn) &&
                        isNaN(ti) &&
                        (H += m * (1 - D.progress)),
                      E === K && (Q += m));
                  if (
                    ((u += H),
                    (h += H),
                    tw._startClamp && (tw._startClamp += H),
                    tw._endClamp &&
                      !nK &&
                      ((tw._endClamp = h || -0.001),
                      (h = Math.min(h, sl(td, th)))),
                    (y = h - u || ((u -= 0.01) && 0.001)),
                    V &&
                      (tO = nx.utils.clamp(0, 1, nx.utils.normalize(u, h, B))),
                    (tw._pinPush = Q),
                    f &&
                      H &&
                      (((m = {})[th.a] = "+=" + H),
                      tn && (m[th.p] = "-=" + tC()),
                      nx.set([f, d], m)),
                    K && !(nG && tw.end >= sl(td, th)))
                  )
                    ((m = sA(K)),
                      (C = th === na),
                      (T = tC()),
                      (M = parseFloat(j(th.a)) + Q),
                      !$ &&
                        h > 1 &&
                        ((W = {
                          style: (W = (tg ? n_.scrollingElement || nw : td)
                            .style),
                          value: W["overflow" + th.a.toUpperCase()],
                        }),
                        tg &&
                          "scroll" !==
                            sA(nb)["overflow" + th.a.toUpperCase()] &&
                          (W.style["overflow" + th.a.toUpperCase()] =
                            "scroll")),
                      ol(K, b, m),
                      (w = oh(K)),
                      (k = sD(K, !0)),
                      (P = tm && nu(td, C ? no : na)()),
                      J
                        ? (((A = [J + th.os2, y + Q + "px"]).t = b),
                          (ta = J === sT ? sE(K, th) + y + Q : 0) &&
                            (A.push(th.d, ta + "px"),
                            "auto" !== b.style.flexBasis &&
                              (b.style.flexBasis = ta + "px")),
                          ou(A),
                          tn &&
                            s$.forEach(function (t) {
                              t.pin === tn &&
                                !1 !== t.vars.pinSpacing &&
                                (t._subPinOffset = !0);
                            }),
                          tm && tC(B))
                        : (ta = sE(K, th)) &&
                          "auto" !== b.style.flexBasis &&
                          (b.style.flexBasis = ta + "px"),
                      tm &&
                        (((S = {
                          top: k.top + (C ? T - u : P) + "px",
                          left: k.left + (C ? P : T - u) + "px",
                          boxSizing: "border-box",
                          position: "fixed",
                        })[s_] = S["max" + sO] =
                          Math.ceil(k.width) + "px"),
                        (S[sw] = S["max" + sC] = Math.ceil(k.height) + "px"),
                        (S[sM] =
                          S[sM + "Top"] =
                          S[sM + sb] =
                          S[sM + sj] =
                          S[sM + sk] =
                            "0"),
                        (S[sT] = m[sT]),
                        (S[sT + "Top"] = m[sT + "Top"]),
                        (S[sT + sb] = m[sT + sb]),
                        (S[sT + sj] = m[sT + sj]),
                        (S[sT + sk] = m[sT + sk]),
                        (_ = of(v, S, to)),
                        nK && tC(0)),
                      r
                        ? ((R = r._initted),
                          nL(1),
                          r.render(r.duration(), !0, !0),
                          (O = j(th.a) - M + y + Q),
                          (N = Math.abs(y - O) > 1),
                          tm && N && _.splice(_.length - 2, 2),
                          r.render(0, !0, !0),
                          R || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          nL(0))
                        : (O = y),
                      W &&
                        (W.value
                          ? (W.style["overflow" + th.a.toUpperCase()] = W.value)
                          : W.style.removeProperty("overflow-" + th.a)));
                  else if (Z && tC() && !tl)
                    for (k = Z.parentNode; k && k !== nb; )
                      (k._pinOffset &&
                        ((u -= k._pinOffset), (h -= k._pinOffset)),
                        (k = k.parentNode));
                  (L &&
                    L.forEach(function (t) {
                      return t.revert(!1, !0);
                    }),
                    (tw.start = u),
                    (tw.end = h),
                    (l = c = nK ? B : tC()),
                    tl || nK || (l < B && tC(B), (tw.scroll.rec = 0)),
                    tw.revert(!1, !0),
                    (tM = n2()),
                    F && ((tT = -1), F.restart(!0)),
                    (nA = 0),
                    r &&
                      tf &&
                      (r._initted || I) &&
                      r.progress() !== I &&
                      r.progress(I || 0, !0).render(r.time(), !0, !0),
                    (V ||
                      tO !== tw.progress ||
                      tl ||
                      tt ||
                      (r && !r._initted)) &&
                      (r &&
                        !tf &&
                        (r._initted || tO || !1 !== r.vars.immediateRender) &&
                        r.totalProgress(
                          tl && u < -0.001 && !tO
                            ? nx.utils.normalize(u, h, 0)
                            : tO,
                          !0,
                        ),
                      (tw.progress = V || (l - u) / y === tO ? 0 : tO)),
                    K && J && (b._pinOffset = Math.round(tw.progress * O)),
                    z && z.invalidate(),
                    isNaN(Y) ||
                      ((Y -= nx.getProperty(p, th.p)),
                      (X -= nx.getProperty(g, th.p)),
                      oy(p, th, Y),
                      oy(f, th, Y - (a || 0)),
                      oy(g, th, X),
                      oy(d, th, X - (a || 0))),
                    V && !nK && tw.update(),
                    !G || nK || x || ((x = !0), G(tw), (x = !1)));
                }
              }),
              (tw.getVelocity = function () {
                return ((tC() - c) / (n2() - nO)) * 1e3 || 0;
              }),
              (tw.endAnimation = function () {
                (sp(tw.callbackAnimation),
                  r &&
                    (z
                      ? z.progress(1)
                      : r.paused()
                        ? tf || sp(r, tw.direction < 0, 1)
                        : sp(r, r.reversed())));
              }),
              (tw.labelToScroll = function (t) {
                return (
                  (r &&
                    r.labels &&
                    (u || tw.refresh() || u) +
                      (r.labels[t] / r.duration()) * y) ||
                  0
                );
              }),
              (tw.getTrailing = function (t) {
                var e = s$.indexOf(tw),
                  r =
                    tw.direction > 0
                      ? s$.slice(0, e).reverse()
                      : s$.slice(e + 1);
                return (
                  su(t)
                    ? r.filter(function (e) {
                        return e.vars.preventOverlaps === t;
                      })
                    : r
                ).filter(function (t) {
                  return tw.direction > 0 ? t.end <= u : t.start >= h;
                });
              }),
              (tw.update = function (t, e, i) {
                if (!tl || i || t) {
                  var n,
                    o,
                    a,
                    f,
                    d,
                    g,
                    m,
                    x = !0 === nK ? B : tw.scroll(),
                    v = t ? 0 : (x - u) / y,
                    k = v < 0 ? 0 : v > 1 ? 1 : v || 0,
                    j = tw.progress;
                  if (
                    (e &&
                      ((c = l),
                      (l = tl ? tC() : x),
                      ts && ((R = P), (P = r && !tf ? r.totalProgress() : k))),
                    te &&
                      K &&
                      !nA &&
                      !n1 &&
                      n3 &&
                      (!k && u < x + ((x - c) / (n2() - nO)) * te
                        ? (k = 1e-4)
                        : 1 === k &&
                          h > x + ((x - c) / (n2() - nO)) * te &&
                          (k = 0.9999)),
                    k !== j && tw.enabled)
                  ) {
                    if (
                      ((f =
                        (d =
                          (n = tw.isActive = !!k && k < 1) != (!!j && j < 1)) ||
                        !!k != !!j),
                      (tw.direction = k > j ? 1 : -1),
                      (tw.progress = k),
                      f &&
                        !nA &&
                        ((o = k && !j ? 0 : 1 === k ? 1 : 1 === j ? 2 : 3),
                        tf &&
                          ((a =
                            (!d && "none" !== ty[o + 1] && ty[o + 1]) || ty[o]),
                          (m =
                            r &&
                            ("complete" === a || "reset" === a || a in r)))),
                      tu &&
                        (d || m) &&
                        (m || Q || !r) &&
                        (sh(tu)
                          ? tu(tw)
                          : tw.getTrailing(tu).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      !tf &&
                        (!z || nA || n1
                          ? r && r.totalProgress(k, !!(nA && (tM || t)))
                          : (z._dp._time - z._start !== z._time &&
                              z.render(z._dp._time - z._start),
                            z.resetTo
                              ? z.resetTo(
                                  "totalProgress",
                                  k,
                                  r._tTime / r._tDur,
                                )
                              : ((z.vars.totalProgress = k),
                                z.invalidate().restart()))),
                      K)
                    )
                      if ((t && J && (b.style[J + th.os2] = C), tm)) {
                        if (f) {
                          if (
                            ((g =
                              !t && k > j && h + 1 > x && x + 1 >= sl(td, th)),
                            to)
                          )
                            if (!t && (n || g)) {
                              var A = sD(K, !0),
                                E = x - u;
                              om(
                                K,
                                nb,
                                A.top + (th === na ? E : 0) + "px",
                                A.left + (th === na ? 0 : E) + "px",
                              );
                            } else om(K, b);
                          (ou(n || g ? _ : w),
                            (N && k < 1 && n) || T(M + (1 !== k || g ? 0 : O)));
                        }
                      } else T(se(M + O * k));
                    (!ts || s.tween || nA || n1 || F.restart(!0),
                      $ &&
                        (d || (tn && k && (k < 1 || !nQ))) &&
                        nT($.targets).forEach(function (t) {
                          return t.classList[n || tn ? "add" : "remove"](
                            $.className,
                          );
                        }),
                      !q || tf || t || q(tw),
                      f && !nA
                        ? (tf &&
                            (m &&
                              ("complete" === a
                                ? r.pause().totalProgress(1)
                                : "reset" === a
                                  ? r.restart(!0).pause()
                                  : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                            q && q(tw)),
                          (d || !nQ) &&
                            (H && d && sg(tw, H),
                            tx[o] && sg(tw, tx[o]),
                            tn && (1 === k ? tw.kill(!1, 1) : (tx[o] = 0)),
                            !d && tx[(o = 1 === k ? 1 : 3)] && sg(tw, tx[o])),
                          tc &&
                            !n &&
                            Math.abs(tw.getVelocity()) > (sf(tc) ? tc : 2500) &&
                            (sp(tw.callbackAnimation),
                            z
                              ? z.progress(1)
                              : sp(r, "reverse" === a ? 1 : !k, 1)))
                        : tf && q && !nA && q(tw));
                  }
                  if (D) {
                    var L = tl
                      ? (x / tl.duration()) * (tl._caScrollDist || 0)
                      : x;
                    (S(L + +!!p._isFlipped), D(L));
                  }
                  Y && Y((-x / tl.duration()) * (tl._caScrollDist || 0));
                }
              }),
              (tw.enable = function (e, r) {
                tw.enabled ||
                  ((tw.enabled = !0),
                  sL(td, "resize", sZ),
                  tg || sL(td, "scroll", sG),
                  tb && sL(t, "refreshInit", tb),
                  !1 !== e && ((tw.progress = tO = 0), (l = c = tT = tC())),
                  !1 !== r && tw.refresh());
              }),
              (tw.getTween = function (t) {
                return t && s ? s.tween : z;
              }),
              (tw.setPositions = function (t, e, r, i) {
                if (tl) {
                  var n = tl.scrollTrigger,
                    s = tl.duration(),
                    o = n.end - n.start;
                  ((t = n.start + (o * t) / s), (e = n.start + (o * e) / s));
                }
                (tw.refresh(
                  !1,
                  !1,
                  {
                    start: n6(t, r && !!tw._startClamp),
                    end: n6(e, r && !!tw._endClamp),
                  },
                  i,
                ),
                  tw.update());
              }),
              (tw.adjustPinSpacing = function (t) {
                if (A && t) {
                  var e = A.indexOf(th.d) + 1;
                  ((A[e] = parseFloat(A[e]) + t + "px"),
                    (A[1] = parseFloat(A[1]) + t + "px"),
                    ou(A));
                }
              }),
              (tw.disable = function (e, r) {
                if (
                  (!1 !== e && tw.revert(!0, !0),
                  tw.enabled &&
                    ((tw.enabled = tw.isActive = !1),
                    r || (z && z.pause()),
                    (B = 0),
                    o && (o.uncache = 1),
                    tb && sW(t, "refreshInit", tb),
                    F &&
                      (F.pause(), s.tween && s.tween.kill() && (s.tween = 0)),
                    !tg))
                ) {
                  for (var i = s$.length; i--; )
                    if (s$[i].scroller === td && s$[i] !== tw) return;
                  (sW(td, "resize", sZ), tg || sW(td, "scroll", sG));
                }
              }),
              (tw.kill = function (t, i) {
                (tw.disable(t, i), z && !i && z.kill(), V && delete sV[V]);
                var n = s$.indexOf(tw);
                (n >= 0 && s$.splice(n, 1),
                  n === nD && oi > 0 && nD--,
                  (n = 0),
                  s$.forEach(function (t) {
                    return t.scroller === tw.scroller && (n = 1);
                  }),
                  n || nK || (tw.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    t && r.revert({ kill: !1 }),
                    i || r.kill()),
                  f &&
                    [f, d, p, g].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  n0 === tw && (n0 = 0),
                  K &&
                    (o && (o.uncache = 1),
                    (n = 0),
                    s$.forEach(function (t) {
                      return t.pin === K && n++;
                    }),
                    n || (o.spacer = 0)),
                  e.onKill && e.onKill(tw));
              }),
              s$.push(tw),
              tw.enable(!1, !1),
              X && X(tw),
              r && r.add && !y)
            ) {
              var tD = tw.update;
              ((tw.update = function () {
                ((tw.update = tD), i5.cache++, u || h || tw.refresh());
              }),
                nx.delayedCall(0.01, tw.update),
                (y = 0.01),
                (u = h = 0));
            } else tw.refresh();
            K && s7();
          }),
          (t.register = function (e) {
            return (
              ny ||
                ((nx = e || si()),
                sr() && window.document && t.enable(),
                (ny = n4)),
              ny
            );
          }),
          (t.defaults = function (t) {
            if (t) for (var e in t) sI[e] = t[e];
            return sI;
          }),
          (t.disable = function (t, e) {
            ((n4 = 0),
              s$.forEach(function (r) {
                return r[e ? "kill" : "disable"](t);
              }),
              sW(nv, "wheel", sG),
              sW(n_, "scroll", sG),
              clearInterval(nC),
              sW(n_, "touchcancel", st),
              sW(nb, "touchstart", st),
              sz(sW, n_, "pointerdown,touchstart,mousedown", n7),
              sz(sW, n_, "pointerup,touchend,mouseup", n9),
              nj.kill(),
              sc(sW));
            for (var r = 0; r < i5.length; r += 3)
              (sF(sW, i5[r], i5[r + 1]), sF(sW, i5[r], i5[r + 2]));
          }),
          (t.enable = function () {
            if (
              ((nv = window),
              (nw = (n_ = document).documentElement),
              (nb = n_.body),
              nx &&
                ((nT = nx.utils.toArray),
                (nM = nx.utils.clamp),
                (nU = nx.core.context || st),
                (nL = nx.core.suppressOverwrites || st),
                (nq = nv.history.scrollRestoration || "auto"),
                (or = nv.pageYOffset || 0),
                nx.core.globals("ScrollTrigger", t),
                nb))
            ) {
              ((n4 = 1),
                ((n$ = document.createElement("div")).style.height = "100vh"),
                (n$.style.position = "absolute"),
                s9(),
                (function t() {
                  return n4 && requestAnimationFrame(t);
                })(),
                nm.register(nx),
                (t.isTouch = nm.isTouch),
                (nX =
                  nm.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (nB = 1 === nm.isTouch),
                sL(nv, "wheel", sG),
                (nk = [nv, n_, nw, nb]),
                nx.matchMedia
                  ? ((t.matchMedia = function (t) {
                      var e,
                        r = nx.matchMedia();
                      for (e in t) r.add(e, t[e]);
                      return r;
                    }),
                    nx.addEventListener("matchMediaInit", function () {
                      (s3(), s4());
                    }),
                    nx.addEventListener("matchMediaRevert", function () {
                      return s5();
                    }),
                    nx.addEventListener("matchMedia", function () {
                      (oe(0, 1), s1("matchMedia"));
                    }),
                    nx.matchMedia().add("(orientation: portrait)", function () {
                      return (sQ(), sQ);
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                sQ(),
                sL(n_, "scroll", sG));
              var e,
                r,
                i = nb.hasAttribute("style"),
                n = nb.style,
                s = n.borderTopStyle,
                o = nx.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  n.borderTopStyle = "solid",
                  na.m = Math.round((e = sD(nb)).top + na.sc()) || 0,
                  no.m = Math.round(e.left + no.sc()) || 0,
                  s
                    ? (n.borderTopStyle = s)
                    : n.removeProperty("border-top-style"),
                  i ||
                    (nb.setAttribute("style", ""), nb.removeAttribute("style")),
                  nC = setInterval(sH, 250),
                  nx.delayedCall(0.5, function () {
                    return (n1 = 0);
                  }),
                  sL(n_, "touchcancel", st),
                  sL(nb, "touchstart", st),
                  sz(sL, n_, "pointerdown,touchstart,mousedown", n7),
                  sz(sL, n_, "pointerup,touchend,mouseup", n9),
                  nN = nx.utils.checkPrefix("transform"),
                  oo.push(nN),
                  ny = n2(),
                  nj = nx.delayedCall(0.2, oe).pause(),
                  nR = [
                    n_,
                    "visibilitychange",
                    function () {
                      var t = nv.innerWidth,
                        e = nv.innerHeight;
                      n_.hidden
                        ? ((nE = t), (nP = e))
                        : (nE !== t || nP !== e) && sZ();
                    },
                    n_,
                    "DOMContentLoaded",
                    oe,
                    nv,
                    "load",
                    oe,
                    nv,
                    "resize",
                    sZ,
                  ],
                  sc(sL),
                  s$.forEach(function (t) {
                    return t.enable(0, 1);
                  }),
                  r = 0;
                r < i5.length;
                r += 3
              )
                (sF(sW, i5[r], i5[r + 1]), sF(sW, i5[r], i5[r + 2]));
            }
          }),
          (t.config = function (e) {
            "limitCallbacks" in e && (nQ = !!e.limitCallbacks);
            var r = e.syncInterval;
            ((r && clearInterval(nC)) || ((nC = r) && setInterval(sH, r)),
              "ignoreMobileResize" in e &&
                (nB = 1 === t.isTouch && e.ignoreMobileResize),
              "autoRefreshEvents" in e &&
                (sc(sW) || sc(sL, e.autoRefreshEvents || "none"),
                (nW = -1 === (e.autoRefreshEvents + "").indexOf("resize"))));
          }),
          (t.scrollerProxy = function (t, e) {
            var r = nl(t),
              i = i5.indexOf(r),
              n = sn(r);
            (~i && i5.splice(i, n ? 6 : 2),
              e && (n ? i3.unshift(nv, e, nb, e, nw, e) : i3.unshift(r, e)));
          }),
          (t.clearMatchMedia = function (t) {
            s$.forEach(function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
            });
          }),
          (t.isInViewport = function (t, e, r) {
            var i = (su(t) ? nl(t) : t).getBoundingClientRect(),
              n = i[r ? s_ : sw] * e || 0;
            return r
              ? i.right - n > 0 && i.left + n < nv.innerWidth
              : i.bottom - n > 0 && i.top + n < nv.innerHeight;
          }),
          (t.positionInViewport = function (t, e, r) {
            su(t) && (t = nl(t));
            var i = t.getBoundingClientRect(),
              n = i[r ? s_ : sw],
              s =
                null == e
                  ? n / 2
                  : e in sY
                    ? sY[e] * n
                    : ~e.indexOf("%")
                      ? (parseFloat(e) * n) / 100
                      : parseFloat(e) || 0;
            return r
              ? (i.left + s) / nv.innerWidth
              : (i.top + s) / nv.innerHeight;
          }),
          (t.killAll = function (t) {
            if (
              (s$.slice(0).forEach(function (t) {
                return "ScrollSmoother" !== t.vars.id && t.kill();
              }),
              !0 !== t)
            ) {
              var e = sK.killAll || [];
              ((sK = {}),
                e.forEach(function (t) {
                  return t();
                }));
            }
          }),
          t
        );
      })();
    ((o_.version = "3.14.2"),
      (o_.saveStyles = function (t) {
        return t
          ? nT(t).forEach(function (t) {
              if (t && t.style) {
                var e = s2.indexOf(t);
                (e >= 0 && s2.splice(e, 5),
                  s2.push(
                    t,
                    t.style.cssText,
                    t.getBBox && t.getAttribute("transform"),
                    nx.core.getCache(t),
                    nU(),
                  ));
              }
            })
          : s2;
      }),
      (o_.revert = function (t, e) {
        return s4(!t, e);
      }),
      (o_.create = function (t, e) {
        return new o_(t, e);
      }),
      (o_.refresh = function (t) {
        return t ? sZ(!0) : (ny || o_.register()) && oe(!0);
      }),
      (o_.update = function (t) {
        return ++i5.cache && on(2 * (!0 === t));
      }),
      (o_.clearScrollMemory = s8),
      (o_.maxScroll = function (t, e) {
        return sl(t, e ? no : na);
      }),
      (o_.getScrollFunc = function (t, e) {
        return nu(nl(t), e ? no : na);
      }),
      (o_.getById = function (t) {
        return sV[t];
      }),
      (o_.getAll = function () {
        return s$.filter(function (t) {
          return "ScrollSmoother" !== t.vars.id;
        });
      }),
      (o_.isScrolling = function () {
        return !!n3;
      }),
      (o_.snapDirectional = sR),
      (o_.addEventListener = function (t, e) {
        var r = sK[t] || (sK[t] = []);
        ~r.indexOf(e) || r.push(e);
      }),
      (o_.removeEventListener = function (t, e) {
        var r = sK[t],
          i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1);
      }),
      (o_.batch = function (t, e) {
        var r,
          i = [],
          n = {},
          s = e.interval || 0.016,
          o = e.batchMax || 1e9,
          a = function (t, e) {
            var r = [],
              i = [],
              n = nx
                .delayedCall(s, function () {
                  (e(r, i), (r = []), (i = []));
                })
                .pause();
            return function (t) {
              (r.length || n.restart(!0),
                r.push(t.trigger),
                i.push(t),
                o <= r.length && n.progress(1));
            };
          };
        for (r in e)
          n[r] =
            "on" === r.substr(0, 2) && sh(e[r]) && "onRefreshInit" !== r
              ? a(r, e[r])
              : e[r];
        return (
          sh(o) &&
            ((o = o()),
            sL(o_, "refresh", function () {
              return (o = e.batchMax());
            })),
          nT(t).forEach(function (t) {
            var e = {};
            for (r in n) e[r] = n[r];
            ((e.trigger = t), i.push(o_.create(e)));
          }),
          i
        );
      }));
    var ow,
      ob = function (t, e, r, i) {
        return (
          e > i ? t(i) : e < 0 && t(0),
          r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
        );
      },
      ok = function t(e, r) {
        (!0 === r
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              !0 === r
                ? "auto"
                : r
                  ? "pan-" + r + (nm.isTouch ? " pinch-zoom" : "")
                  : "none"),
          e === nw && t(nb, r));
      },
      oj = { auto: 1, scroll: 1 },
      oT = function (t) {
        var e,
          r = t.event,
          i = t.target,
          n = t.axis,
          s = (r.changedTouches ? r.changedTouches[0] : r).target,
          o = s._gsap || nx.core.getCache(s),
          a = n2();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
          for (
            ;
            s &&
            s !== nb &&
            ((s.scrollHeight <= s.clientHeight &&
              s.scrollWidth <= s.clientWidth) ||
              !(oj[(e = sA(s)).overflowY] || oj[e.overflowX]));
          )
            s = s.parentNode;
          ((o._isScroll =
            s &&
            s !== i &&
            !sn(s) &&
            (oj[(e = sA(s)).overflowY] || oj[e.overflowX])),
            (o._isScrollT = a));
        }
        (o._isScroll || "x" === n) &&
          (r.stopPropagation(), (r._gsapAllow = !0));
      },
      oM = function (t, e, r, i) {
        return nm.create({
          target: t,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: e,
          onWheel: (i = i && oT),
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function () {
            return r && sL(n_, nm.eventTypes[0], oC, !1, !0);
          },
          onDisable: function () {
            return sW(n_, nm.eventTypes[0], oC, !0);
          },
        });
      },
      oO = /(input|label|select|textarea)/i,
      oC = function (t) {
        var e = oO.test(t.target.tagName);
        (e || ow) && ((t._gsapAllow = !0), (ow = e));
      },
      oA = function (t) {
        (sd(t) || (t = {}),
          (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
          t.type || (t.type = "wheel,touch"),
          (t.debounce = !!t.debounce),
          (t.id = t.id || "normalizer"));
        var e,
          r,
          i,
          n,
          s,
          o,
          a,
          l,
          c = t,
          u = c.normalizeScrollX,
          h = c.momentum,
          f = c.allowNestedScroll,
          d = c.onRelease,
          p = nl(t.target) || nw,
          g = nx.core.globals().ScrollSmoother,
          m = g && g.get(),
          x =
            nX &&
            ((t.content && nl(t.content)) ||
              (m && !1 !== t.content && !m.smooth() && m.content())),
          y = nu(p, na),
          v = nu(p, no),
          _ = 1,
          w =
            (nm.isTouch && nv.visualViewport
              ? nv.visualViewport.scale * nv.visualViewport.width
              : nv.outerWidth) / nv.innerWidth,
          b = 0,
          k = sh(h)
            ? function () {
                return h(e);
              }
            : function () {
                return h || 2.8;
              },
          j = oM(p, t.type, !0, f),
          T = function () {
            return (n = !1);
          },
          M = st,
          O = st,
          C = function () {
            ((r = sl(p, na)),
              (O = nM(+!!nX, r)),
              u && (M = nM(0, sl(p, no))),
              (i = s6));
          },
          A = function () {
            ((x._gsap.y = se(parseFloat(x._gsap.y) + y.offset) + "px"),
              (x.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(x._gsap.y) +
                ", 0, 1)"),
              (y.offset = y.cacheID = 0));
          },
          S = function () {
            if (n) {
              requestAnimationFrame(T);
              var t = se(e.deltaY / 2),
                r = O(y.v - t);
              if (x && r !== y.v + y.offset) {
                y.offset = r - y.v;
                var i = se((parseFloat(x && x._gsap.y) || 0) - y.offset);
                ((x.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  i +
                  ", 0, 1)"),
                  (x._gsap.y = i + "px"),
                  (y.cacheID = i5.cache),
                  on());
              }
              return !0;
            }
            (y.offset && A(), (n = !0));
          },
          N = function () {
            (C(),
              s.isActive() &&
                s.vars.scrollY > r &&
                (y() > r ? s.progress(1) && y(r) : s.resetTo("scrollY", r)));
          };
        return (
          x && nx.set(x, { y: "+=0" }),
          (t.ignoreCheck = function (t) {
            return (
              (nX && "touchmove" === t.type && S(t)) ||
              (_ > 1.05 && "touchstart" !== t.type) ||
              e.isGesturing ||
              (t.touches && t.touches.length > 1)
            );
          }),
          (t.onPress = function () {
            n = !1;
            var t = _;
            ((_ = se(
              ((nv.visualViewport && nv.visualViewport.scale) || 1) / w,
            )),
              s.pause(),
              t !== _ && ok(p, _ > 1.01 || (!u && "x")),
              (o = v()),
              (a = y()),
              C(),
              (i = s6));
          }),
          (t.onRelease = t.onGestureStart =
            function (t, e) {
              if ((y.offset && A(), e)) {
                i5.cache++;
                var i,
                  n,
                  o = k();
                (u &&
                  ((n = (i = v()) + -(0.05 * o * t.velocityX) / 0.227),
                  (o *= ob(v, i, n, sl(p, no))),
                  (s.vars.scrollX = M(n))),
                  (n = (i = y()) + -(0.05 * o * t.velocityY) / 0.227),
                  (o *= ob(y, i, n, sl(p, na))),
                  (s.vars.scrollY = O(n)),
                  s.invalidate().duration(o).play(0.01),
                  ((nX && s.vars.scrollY >= r) || i >= r - 1) &&
                    nx.to({}, { onUpdate: N, duration: o }));
              } else l.restart(!0);
              d && d(t);
            }),
          (t.onWheel = function () {
            (s._ts && s.pause(), n2() - b > 1e3 && ((i = 0), (b = n2())));
          }),
          (t.onChange = function (t, e, r, n, s) {
            if (
              (s6 !== i && C(),
              e &&
                u &&
                v(M(n[2] === e ? o + (t.startX - t.x) : v() + e - n[1])),
              r)
            ) {
              y.offset && A();
              var l = s[2] === r,
                c = l ? a + t.startY - t.y : y() + r - s[1],
                h = O(c);
              (l && c !== h && (a += h - c), y(h));
            }
            (r || e) && on();
          }),
          (t.onEnable = function () {
            (ok(p, !u && "x"),
              o_.addEventListener("refresh", N),
              sL(nv, "resize", N),
              y.smooth &&
                ((y.target.style.scrollBehavior = "auto"),
                (y.smooth = v.smooth = !1)),
              j.enable());
          }),
          (t.onDisable = function () {
            (ok(p, !0),
              sW(nv, "resize", N),
              o_.removeEventListener("refresh", N),
              j.kill());
          }),
          (t.lockAxis = !1 !== t.lockAxis),
          ((e = new nm(t)).iOS = nX),
          nX && !y() && y(1),
          nX && nx.ticker.add(st),
          (l = e._dc),
          (s = nx.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ox(y, y(), function () {
                return s.pause();
              }),
            },
            onUpdate: on,
            onComplete: l.vars.onComplete,
          })),
          e
        );
      };
    ((o_.sort = function (t) {
      if (sh(t)) return s$.sort(t);
      var e = nv.pageYOffset || 0;
      return (
        o_.getAll().forEach(function (t) {
          return (t._sortY = t.trigger
            ? e + t.trigger.getBoundingClientRect().top
            : t.start + nv.innerHeight);
        }),
        s$.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                (t.vars.containerAnimation ? 1e6 : t._sortY) -
                ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                  -1e6 * (e.vars.refreshPriority || 0))
              );
            },
        )
      );
    }),
      (o_.observe = function (t) {
        return new nm(t);
      }),
      (o_.normalizeScroll = function (t) {
        if (void 0 === t) return nF;
        if (!0 === t && nF) return nF.enable();
        if (!1 === t) {
          (nF && nF.kill(), (nF = t));
          return;
        }
        var e = t instanceof nm ? t : oA(t);
        return (
          nF && nF.target === e.target && nF.kill(),
          sn(e.target) && (nF = e),
          e
        );
      }),
      (o_.core = {
        _getVelocityProp: nh,
        _inputObserver: oM,
        _scrollers: i5,
        _proxies: i3,
        bridge: {
          ss: function () {
            (n3 || s1("scrollStart"), (n3 = n2()));
          },
          ref: function () {
            return nA;
          },
        },
      }),
      si() && nx.registerPlugin(o_));
    let oS = "u" > typeof document ? r.useLayoutEffect : r.useEffect,
      oN = (t) => t && !Array.isArray(t) && "object" == typeof t,
      oD = [],
      oE = {},
      oP = iW,
      oR = (t, e = oD) => {
        let i = oE;
        (oN(t)
          ? ((i = t),
            (t = null),
            (e = "dependencies" in i ? i.dependencies : oD))
          : oN(e) && (e = "dependencies" in (i = e) ? i.dependencies : oD),
          t &&
            "function" != typeof t &&
            console.warn(
              "First parameter must be a function or config object",
            ));
        let { scope: n, revertOnUpdate: s } = i,
          o = (0, r.useRef)(!1),
          a = (0, r.useRef)(oP.context(() => {}, n)),
          l = (0, r.useRef)((t) => a.current.add(null, t)),
          c = e && e.length && !s;
        return (
          c && oS(() => ((o.current = !0), () => a.current.revert()), oD),
          oS(() => {
            if ((t && a.current.add(t, n), !c || !o.current))
              return () => a.current.revert();
          }, e),
          { context: a.current, contextSafe: l.current }
        );
      };
    ((oR.register = (t) => {
      oP = t;
    }),
      (oR.headless = !0));
    let oz = "#1a2740",
      oL = "#3a4e6b",
      oW = "#ff8a6e",
      oF = "#e57148",
      oB = "#faf7f2",
      oI = "#1a1a1a",
      oY = "#4a4a4a",
      oX = [
        "Research",
        "UX Design",
        "Build",
        "MVP1",
        "Client Feedback",
        "Rework",
        "MVP2",
      ],
      oU = ["Research", "Design", "Client Discovery", "Build"],
      oq = (0, r.forwardRef)(function (t, r) {
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6",
          style: { background: oB },
          children: [
            (0, e.jsxs)("div", {
              className: "text-center max-w-3xl",
              children: [
                (0, e.jsx)("p", {
                  className:
                    "panel0-eyebrow text-xs uppercase font-semibold mb-8",
                  style: { color: oF, letterSpacing: "0.18em" },
                  children: "A Wizwit Short · No. 2",
                }),
                (0, e.jsx)("h1", {
                  className: "panel0-title leading-[0.95] tracking-tight",
                  style: {
                    color: oI,
                    fontFamily: "var(--font-heading), serif",
                    fontWeight: 900,
                    fontSize: "clamp(3.5rem, 9vw, 7rem)",
                    fontVariationSettings: '"opsz" 144',
                  },
                  children: "The new doorway",
                }),
                (0, e.jsx)("p", {
                  className:
                    "panel0-tagline mt-8 text-base md:text-lg leading-relaxed mx-auto max-w-xl",
                  style: { color: oY },
                  children:
                    "About the doors AI is opening, and what's possible when we walk through.",
                }),
                (0, e.jsx)("svg", {
                  viewBox: "0 0 280 60",
                  className: "panel0-doors mx-auto mt-12 w-64",
                  children: [0, 1, 2, 3, 4].map((t) => {
                    let r = 2 === t;
                    return (0, e.jsxs)(
                      "g",
                      {
                        transform: `translate(${56 * t}, 0)`,
                        children: [
                          (0, e.jsx)("rect", {
                            x: "8",
                            y: "8",
                            width: "32",
                            height: "44",
                            rx: "2",
                            fill: "none",
                            stroke: r ? oF : "#d4d2cd",
                            strokeWidth: r ? 2 : 1.4,
                            strokeLinejoin: "round",
                          }),
                          (0, e.jsx)("circle", {
                            cx: "34",
                            cy: "30",
                            r: "1.8",
                            fill: r ? oF : "#d4d2cd",
                          }),
                        ],
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
            (0, e.jsx)("div", {
              className:
                "absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase animate-bounce",
              style: { color: oY, letterSpacing: "0.18em" },
              children: "Scroll",
            }),
          ],
        });
      }),
      o$ = "#1A1A1A";
    function oV({ shirt: t, hair: r = o$, scale: i = 1.35, smile: n = !1 }) {
      return (0, e.jsxs)("g", {
        transform: `scale(${i}) translate(-2 -4)`,
        children: [
          (0, e.jsx)("ellipse", {
            cx: "9",
            cy: "36",
            rx: "3",
            ry: "1",
            fill: o$,
            opacity: "0.25",
          }),
          (0, e.jsx)("ellipse", {
            cx: "15",
            cy: "36",
            rx: "3",
            ry: "1",
            fill: o$,
            opacity: "0.25",
          }),
          (0, e.jsx)("rect", {
            x: "7",
            y: "22",
            width: "4",
            height: "13",
            rx: "2",
            fill: t,
            stroke: o$,
            strokeWidth: "1",
          }),
          (0, e.jsx)("rect", {
            x: "13",
            y: "22",
            width: "4",
            height: "13",
            rx: "2",
            fill: t,
            stroke: o$,
            strokeWidth: "1",
          }),
          (0, e.jsx)("rect", {
            x: "4",
            y: "8",
            width: "16",
            height: "17",
            rx: "5",
            fill: t,
            stroke: o$,
            strokeWidth: "1.2",
          }),
          (0, e.jsx)("circle", {
            cx: "12",
            cy: "2",
            r: "6.5",
            fill: "#D9A584",
            stroke: o$,
            strokeWidth: "1.2",
          }),
          (0, e.jsx)("path", {
            d: "M 6 1 Q 7 -5 12 -5 Q 17 -5 18 1 Q 16 -1 12 -1 Q 8 -1 6 1 Z",
            fill: r,
          }),
          (0, e.jsx)("circle", { cx: "10", cy: "2", r: "0.9", fill: o$ }),
          (0, e.jsx)("circle", { cx: "14", cy: "2", r: "0.9", fill: o$ }),
          n
            ? (0, e.jsx)("path", {
                d: "M 10 4.5 Q 12 6.4 14 4.5",
                fill: "none",
                stroke: o$,
                strokeWidth: "1",
                strokeLinecap: "round",
              })
            : (0, e.jsx)("line", {
                x1: "10.5",
                y1: "5",
                x2: "13.5",
                y2: "5",
                stroke: o$,
                strokeWidth: "1",
                strokeLinecap: "round",
              }),
        ],
      });
    }
    let oH = (0, r.forwardRef)(function (t, r) {
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden",
          style: { background: oB },
          children: [
            (0, e.jsx)("h2", {
              className:
                "panel1-title absolute top-12 left-1/2 -translate-x-1/2 text-2xl md:text-3xl tracking-tight z-10",
              style: { color: oI },
              children: "The familiar path to building software",
            }),
            (0, e.jsxs)("svg", {
              viewBox: "0 0 1200 500",
              className: "w-full max-w-[90vw] px-4",
              style: { overflow: "visible" },
              children: [
                (0, e.jsx)("defs", {
                  children: (0, e.jsx)("pattern", {
                    id: "grid",
                    width: "20",
                    height: "20",
                    patternUnits: "userSpaceOnUse",
                    children: (0, e.jsx)("path", {
                      d: "M 20 0 L 0 0 0 20",
                      fill: "none",
                      stroke: oL,
                      strokeWidth: "0.3",
                      opacity: "0.25",
                    }),
                  }),
                }),
                (0, e.jsx)("rect", {
                  width: "1200",
                  height: "500",
                  fill: "url(#grid)",
                  opacity: "0.5",
                }),
                (0, e.jsxs)("g", {
                  className: "hallway-walls",
                  children: [
                    (0, e.jsx)("line", {
                      x1: "40",
                      y1: 340,
                      x2: "1100",
                      y2: 340,
                      stroke: o$,
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                      strokeDasharray: "1200",
                      strokeDashoffset: "0",
                    }),
                    (0, e.jsx)("line", {
                      x1: "40",
                      y1: 160,
                      x2: "1100",
                      y2: 160,
                      stroke: o$,
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                      strokeDasharray: "1200",
                      strokeDashoffset: "0",
                    }),
                    (0, e.jsx)("line", {
                      x1: "1100",
                      y1: 160,
                      x2: "1100",
                      y2: 340,
                      stroke: o$,
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                      strokeDasharray: "200",
                      strokeDashoffset: "0",
                    }),
                    (0, e.jsx)("line", {
                      x1: "40",
                      y1: 160,
                      x2: "40",
                      y2: 340,
                      stroke: oL,
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeDasharray: "200",
                      strokeDashoffset: "0",
                      opacity: "0.6",
                    }),
                  ],
                }),
                oX.map((t, r) => {
                  let i = 80 + 140 * r;
                  return (0, e.jsxs)(
                    "g",
                    {
                      className: "door-group",
                      children: [
                        (0, e.jsx)("rect", {
                          x: i,
                          y: 220,
                          width: 50,
                          height: 120,
                          fill: oB,
                          stroke: o$,
                          strokeWidth: "1.8",
                          strokeLinejoin: "round",
                          rx: "2",
                        }),
                        (0, e.jsx)("rect", {
                          x: i + 5,
                          y: 228,
                          width: 40,
                          height: 90,
                          fill: "none",
                          stroke: o$,
                          strokeWidth: "1",
                          strokeLinejoin: "round",
                          rx: "1",
                          opacity: "0.5",
                        }),
                        (0, e.jsx)("circle", {
                          cx: i + 50 - 10,
                          cy: 280,
                          r: "2.5",
                          fill: o$,
                        }),
                        (0, e.jsx)("text", {
                          x: i + 25,
                          y: 208,
                          textAnchor: "middle",
                          fill: o$,
                          fontSize: "11",
                          fontFamily: "inherit",
                          fontWeight: "500",
                          children: t,
                        }),
                      ],
                    },
                    t,
                  );
                }),
                (0, e.jsx)("path", {
                  className: "route-path",
                  d: `M 105 360 ${oX.map((t, e) => `L ${80 + 140 * e + 25} 360`).join(" ")}`,
                  fill: "none",
                  stroke: o$,
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeDasharray: "6 4",
                  opacity: "0.55",
                  style: { strokeDashoffset: 0 },
                }),
                oX.slice(0, -1).map((t, r) => {
                  let i = (80 + 140 * r + 25 + (80 + (r + 1) * 140 + 25)) / 2;
                  return (0, e.jsx)(
                    "polygon",
                    {
                      className: "route-path",
                      points: `${i - 4},356 ${i + 4},360 ${i - 4},364`,
                      fill: o$,
                      opacity: "0.5",
                    },
                    `arrow-${r}`,
                  );
                }),
                (0, e.jsxs)("g", {
                  className: "rework-loop",
                  children: [
                    (0, e.jsx)("path", {
                      d: `M 665 375
                C 725 420,
                  745 420,
                  805 375`,
                      fill: "none",
                      stroke: oF,
                      strokeWidth: "3.6",
                      strokeLinecap: "round",
                      strokeDasharray: "8 5",
                      opacity: "0.95",
                      children: (0, e.jsx)("animate", {
                        attributeName: "stroke-dashoffset",
                        from: "0",
                        to: "-26",
                        dur: "0.8s",
                        repeatCount: "indefinite",
                      }),
                    }),
                    (0, e.jsx)("polygon", {
                      points: "797,368 809,378 797,384",
                      fill: oF,
                    }),
                    (0, e.jsx)("path", {
                      d: `M 805 390
                C 745 435,
                  725 435,
                  665 390`,
                      fill: "none",
                      stroke: oF,
                      strokeWidth: "3.2",
                      strokeLinecap: "round",
                      strokeDasharray: "8 5",
                      opacity: "0.7",
                      children: (0, e.jsx)("animate", {
                        attributeName: "stroke-dashoffset",
                        from: "0",
                        to: "-26",
                        dur: "0.8s",
                        repeatCount: "indefinite",
                      }),
                    }),
                    (0, e.jsx)("polygon", {
                      points: "673,382 661,392 673,398",
                      fill: oF,
                      opacity: "0.7",
                    }),
                    (0, e.jsx)("text", {
                      x: 735,
                      y: 450,
                      textAnchor: "middle",
                      fill: oF,
                      fontSize: "11",
                      fontStyle: "italic",
                      opacity: "0.85",
                      children: "cycle repeats...",
                    }),
                  ],
                }),
                [
                  { door: 0, label: "PO", shirt: "#3a4e6b", hair: "#2a2a2a" },
                  { door: 1, label: "UX", shirt: "#8a9a7b", hair: "#5a3a2a" },
                  { door: 2, label: "Dev", shirt: "#c8a04a", hair: "#1A1A1A" },
                  { door: 3, label: "Dev", shirt: "#c8a04a", hair: "#3a2a1a" },
                  { door: 5, label: "Dev", shirt: "#c8a04a", hair: "#1A1A1A" },
                ].map(({ door: t, label: r, shirt: i, hair: n }) =>
                  (0, e.jsxs)(
                    "g",
                    {
                      className: "team-figure",
                      transform: `translate(${80 + 140 * t + 25 - 12}, 290)`,
                      children: [
                        (0, e.jsx)(oV, { shirt: i, hair: n }),
                        (0, e.jsx)("text", {
                          x: "12",
                          y: "62",
                          textAnchor: "middle",
                          fill: o$,
                          fontSize: "8",
                          opacity: "0.85",
                          children: r,
                        }),
                      ],
                    },
                    `team-${t}`,
                  ),
                ),
                [0, 1, 2, 3].map((t) => {
                  let r = 80 + (t + 1) * 140 + 25 - 14;
                  return (0, e.jsxs)(
                    "g",
                    {
                      className: "team-figure",
                      opacity: "0.4",
                      children: [
                        (0, e.jsx)("line", {
                          x1: 80 + 140 * t + 25 + 14,
                          y1: 310,
                          x2: r - 6,
                          y2: 310,
                          stroke: o$,
                          strokeWidth: "1",
                          strokeLinecap: "round",
                          strokeDasharray: "3 2",
                        }),
                        (0, e.jsx)("polygon", {
                          points: `${r - 8},${307} ${r},310 ${r - 8},${313}`,
                          fill: o$,
                        }),
                      ],
                    },
                    `handoff-${t}`,
                  );
                }),
                (0, e.jsx)("g", {
                  className: "client-in-door",
                  transform: "translate(653, 290)",
                  opacity: "0",
                  children: (0, e.jsx)(oV, {
                    shirt: oF,
                    hair: "#3a2a1a",
                    scale: 1.1,
                  }),
                }),
                (0, e.jsx)("g", {
                  className: "po-figure",
                  transform: "translate(93, 290)",
                  opacity: "0",
                  children: (0, e.jsx)(oV, {
                    shirt: "#3a4e6b",
                    hair: "#2a2a2a",
                  }),
                }),
                (0, e.jsxs)("g", {
                  className: "client-figure",
                  transform: "translate(933, 290)",
                  opacity: "0.5",
                  children: [
                    (0, e.jsx)(oV, { shirt: oF, hair: "#3a2a1a" }),
                    (0, e.jsx)("text", {
                      x: "12",
                      y: "48",
                      textAnchor: "middle",
                      fill: oF,
                      fontSize: "8",
                      opacity: "0.85",
                      fontWeight: "500",
                      children: "Client",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
      oG = (0, r.forwardRef)(function (t, r) {
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden",
          style: { background: oB },
          children: [
            (0, e.jsx)("div", {
              className:
                "absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 max-w-2xl px-6",
              children: (0, e.jsx)("h2", {
                className: "text-2xl md:text-3xl tracking-tight",
                style: { color: oI },
                children: "A new door",
              }),
            }),
            (0, e.jsx)("div", {
              className:
                "hallway-viewport-2 w-full flex items-center justify-center",
              children: (0, e.jsxs)("svg", {
                viewBox: "100 40 800 520",
                className: "w-full max-w-[90vw] px-4",
                style: { overflow: "visible" },
                children: [
                  (0, e.jsxs)("defs", {
                    children: [
                      (0, e.jsxs)("filter", {
                        id: "amber-glow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                          (0, e.jsx)("feGaussianBlur", {
                            stdDeviation: "14",
                            result: "blur",
                          }),
                          (0, e.jsx)("feFlood", {
                            floodColor: oF,
                            floodOpacity: "0.55",
                          }),
                          (0, e.jsx)("feComposite", {
                            in2: "blur",
                            operator: "in",
                          }),
                          (0, e.jsxs)("feMerge", {
                            children: [
                              (0, e.jsx)("feMergeNode", {}),
                              (0, e.jsx)("feMergeNode", {
                                in: "SourceGraphic",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("radialGradient", {
                        id: "light-gradient",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        children: [
                          (0, e.jsx)("stop", {
                            offset: "0%",
                            stopColor: oF,
                            stopOpacity: "0.55",
                          }),
                          (0, e.jsx)("stop", {
                            offset: "100%",
                            stopColor: oF,
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("g", {
                    className: "hallway-walls",
                    children: (0, e.jsx)("line", {
                      x1: "100",
                      y1: 400,
                      x2: "900",
                      y2: 400,
                      stroke: o$,
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                    }),
                  }),
                  (0, e.jsxs)("g", {
                    className: "door-group",
                    opacity: "0.35",
                    children: [
                      (0, e.jsx)("rect", {
                        x: 170,
                        y: 200,
                        width: 100,
                        height: 200,
                        fill: oB,
                        stroke: o$,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round",
                        rx: "3",
                      }),
                      (0, e.jsx)("rect", {
                        x: 176,
                        y: 210,
                        width: 88,
                        height: 164,
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1",
                        strokeLinejoin: "round",
                        rx: "2",
                        opacity: "0.6",
                      }),
                      (0, e.jsx)("circle", {
                        cx: 256,
                        cy: 300,
                        r: "3",
                        fill: o$,
                      }),
                      (0, e.jsx)("text", {
                        x: 220,
                        y: 184,
                        textAnchor: "middle",
                        fill: o$,
                        fontSize: "14",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        children: "UX Design",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("g", {
                    className: "door-group",
                    opacity: "0.35",
                    children: [
                      (0, e.jsx)("rect", {
                        x: 730,
                        y: 200,
                        width: 100,
                        height: 200,
                        fill: oB,
                        stroke: o$,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round",
                        rx: "3",
                      }),
                      (0, e.jsx)("rect", {
                        x: 736,
                        y: 210,
                        width: 88,
                        height: 164,
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1",
                        strokeLinejoin: "round",
                        rx: "2",
                        opacity: "0.6",
                      }),
                      (0, e.jsx)("circle", {
                        cx: 816,
                        cy: 300,
                        r: "3",
                        fill: o$,
                      }),
                      (0, e.jsx)("text", {
                        x: 780,
                        y: 184,
                        textAnchor: "middle",
                        fill: o$,
                        fontSize: "14",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        children: "Build",
                      }),
                    ],
                  }),
                  (0, e.jsx)("rect", {
                    className: "wall-left-piece",
                    x: 455,
                    y: 170,
                    width: "45",
                    height: 230,
                    fill: oB,
                    stroke: o$,
                    strokeWidth: "0.8",
                    opacity: "0.85",
                    rx: "2",
                  }),
                  (0, e.jsx)("rect", {
                    className: "wall-right-piece",
                    x: 500,
                    y: 170,
                    width: "45",
                    height: 230,
                    fill: oB,
                    stroke: o$,
                    strokeWidth: "0.8",
                    opacity: "0.85",
                    rx: "2",
                  }),
                  (0, e.jsx)("line", {
                    className: "wall-crack",
                    x1: 500,
                    y1: 175,
                    x2: 500,
                    y2: 390,
                    stroke: oF,
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    opacity: "0.9",
                    style: { transformOrigin: "500px 300px" },
                  }),
                  (0, e.jsx)("ellipse", {
                    className: "light-bleed",
                    cx: 500,
                    cy: 300,
                    rx: "120",
                    ry: "140",
                    fill: "url(#light-gradient)",
                    style: { transformOrigin: "500px 300px" },
                  }),
                  (0, e.jsxs)("g", {
                    className: "new-door",
                    children: [
                      (0, e.jsx)("rect", {
                        className: "door-glow",
                        x: 436,
                        y: 186,
                        width: 128,
                        height: 228,
                        fill: oF,
                        opacity: "0.25",
                        rx: "6",
                        filter: "url(#amber-glow)",
                      }),
                      (0, e.jsx)("rect", {
                        x: 450,
                        y: 200,
                        width: 100,
                        height: 200,
                        fill: oF,
                        stroke: o$,
                        strokeWidth: "2.2",
                        strokeLinejoin: "round",
                        rx: "4",
                      }),
                      (0, e.jsx)("rect", {
                        x: 458,
                        y: 212,
                        width: 84,
                        height: 150,
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1.4",
                        strokeLinejoin: "round",
                        rx: "2",
                        opacity: "0.55",
                      }),
                      (0, e.jsx)("rect", {
                        className: "new-door-panel",
                        x: 450,
                        y: 200,
                        width: 100,
                        height: 200,
                        fill: oF,
                        stroke: o$,
                        strokeWidth: "2.2",
                        strokeLinejoin: "round",
                        rx: "4",
                        style: { transformOrigin: "450px 300px" },
                      }),
                      (0, e.jsx)("circle", {
                        cx: 534,
                        cy: 320,
                        r: "4",
                        fill: o$,
                      }),
                      (0, e.jsxs)("g", {
                        className: "new-door-plaque",
                        children: [
                          (0, e.jsx)("rect", {
                            x: 444,
                            y: 144,
                            width: "112",
                            height: "34",
                            rx: "3",
                            fill: oB,
                            stroke: o$,
                            strokeWidth: "1.6",
                            strokeLinejoin: "round",
                          }),
                          (0, e.jsx)("circle", {
                            cx: 450,
                            cy: 150,
                            r: "1.4",
                            fill: o$,
                          }),
                          (0, e.jsx)("circle", {
                            cx: 550,
                            cy: 150,
                            r: "1.4",
                            fill: o$,
                          }),
                          (0, e.jsx)("text", {
                            x: 500,
                            y: 168,
                            textAnchor: "middle",
                            fill: o$,
                            fontSize: "16",
                            fontWeight: "700",
                            fontFamily: "var(--font-heading), serif",
                            children: [..."Figma Make"].map((t, r) =>
                              (0, e.jsx)("tspan", { children: t }, `${t}-${r}`),
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("g", {
                        className: "door-sparkles",
                        opacity: "0.85",
                        children: [
                          (0, e.jsx)("path", {
                            d: `M 422 230
                      l 4 0 m -2 -2 l 0 4`,
                            stroke: oF,
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                          }),
                          (0, e.jsx)("path", {
                            d: `M 572 260
                      l 5 0 m -2.5 -2.5 l 0 5`,
                            stroke: oF,
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                          }),
                          (0, e.jsx)("path", {
                            d: `M 418 340
                      l 4 0 m -2 -2 l 0 4`,
                            stroke: oF,
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("g", {
                    className: "client-through-door",
                    opacity: "0",
                    transform: "translate(462, 276)",
                    children: [
                      (0, e.jsx)("rect", {
                        x: "30",
                        y: "0",
                        width: "40",
                        height: "28",
                        rx: "3",
                        fill: oB,
                        stroke: o$,
                        strokeWidth: "1.4",
                      }),
                      (0, e.jsx)("rect", {
                        x: "35",
                        y: "4",
                        width: "22",
                        height: "3",
                        rx: "1",
                        fill: oF,
                        opacity: "0.75",
                      }),
                      (0, e.jsx)("rect", {
                        x: "35",
                        y: "11",
                        width: "30",
                        height: "2",
                        rx: "1",
                        fill: o$,
                        opacity: "0.4",
                      }),
                      (0, e.jsx)("rect", {
                        x: "35",
                        y: "17",
                        width: "24",
                        height: "2",
                        rx: "1",
                        fill: o$,
                        opacity: "0.4",
                      }),
                      (0, e.jsx)("g", {
                        transform: "translate(-6, 28)",
                        children: (0, e.jsx)(oV, {
                          shirt: oF,
                          hair: "#3a2a1a",
                          scale: 0.9,
                          smile: !0,
                        }),
                      }),
                      (0, e.jsx)("g", {
                        transform: "translate(20, 28)",
                        children: (0, e.jsx)(oV, {
                          shirt: "#8a9a7b",
                          hair: "#5a3a2a",
                          scale: 0.9,
                          smile: !0,
                        }),
                      }),
                      (0, e.jsx)("g", {
                        transform: "translate(46, 28)",
                        children: (0, e.jsx)(oV, {
                          shirt: "#3a4e6b",
                          hair: "#2a2a2a",
                          scale: 0.9,
                          smile: !0,
                        }),
                      }),
                      (0, e.jsx)("g", {
                        transform: "translate(72, 28)",
                        children: (0, e.jsx)(oV, {
                          shirt: "#c8a04a",
                          hair: "#1A1A1A",
                          scale: 0.9,
                          smile: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }),
      oQ = (0, r.forwardRef)(function (t, r) {
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden",
          style: { background: oB },
          children: [
            (0, e.jsxs)("div", {
              className:
                "absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 max-w-2xl px-6",
              children: [
                (0, e.jsx)("h2", {
                  className: "text-2xl md:text-3xl tracking-tight",
                  style: { color: oI },
                  children: "Through the door",
                }),
                (0, e.jsx)("p", {
                  className: "mt-2 text-sm md:text-base",
                  style: { color: oY },
                  children:
                    "Pilot with clients, before code. Walk the prototype with them, iterate live, no sprint, no rework.",
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className:
                "room-scene w-full max-w-6xl px-8 flex gap-20 items-center justify-center mt-8",
              children: [
                (0, e.jsxs)("div", {
                  className: "flex flex-col gap-8 max-w-md pt-8",
                  children: [
                    (0, e.jsx)("p", {
                      className:
                        "beat-1-text text-xs uppercase tracking-widest",
                      style: { color: oF, letterSpacing: "0.16em" },
                      children: "Client feedback session in Figma Make",
                    }),
                    (0, e.jsxs)("div", {
                      className: "beat-1-text flex flex-col gap-2",
                      children: [
                        (0, e.jsxs)("div", {
                          className: "flex items-start gap-3",
                          children: [
                            (0, e.jsx)("svg", {
                              width: "56",
                              height: "78",
                              viewBox: "-2 -14 28 52",
                              className: "shrink-0",
                              children: (0, e.jsx)(oV, {
                                shirt: oF,
                                hair: "#3a2a1a",
                                scale: 1,
                              }),
                            }),
                            (0, e.jsx)("p", {
                              className: "text-lg md:text-xl italic",
                              style: {
                                color: oI,
                                fontFamily: "var(--font-heading), serif",
                              },
                              children: "“What if this was over here?”",
                            }),
                          ],
                        }),
                        (0, e.jsx)("p", {
                          className: "text-sm ml-12",
                          style: { color: oY },
                          children: "Updated in the prototype instantly.",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: "beat-2-text flex flex-col gap-2",
                      children: [
                        (0, e.jsxs)("div", {
                          className: "flex items-start gap-3",
                          children: [
                            (0, e.jsx)("svg", {
                              width: "56",
                              height: "78",
                              viewBox: "-2 -14 28 52",
                              className: "shrink-0",
                              children: (0, e.jsx)(oV, {
                                shirt: "#3a4e6b",
                                hair: "#1A1A1A",
                                scale: 1,
                              }),
                            }),
                            (0, e.jsx)("p", {
                              className: "text-lg md:text-xl italic",
                              style: {
                                color: oI,
                                fontFamily: "var(--font-heading), serif",
                              },
                              children: "“Can we add a field for this?”",
                            }),
                          ],
                        }),
                        (0, e.jsx)("p", {
                          className: "text-sm ml-12",
                          style: { color: oY },
                          children:
                            "Added to the prototype. Client sees it live.",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: "beat-3-text flex flex-col gap-2",
                      children: [
                        (0, e.jsxs)("div", {
                          className: "flex items-start gap-3",
                          children: [
                            (0, e.jsx)("svg", {
                              width: "56",
                              height: "78",
                              viewBox: "-2 -14 28 52",
                              className: "shrink-0",
                              children: (0, e.jsx)(oV, {
                                shirt: "#8a9a7b",
                                hair: "#5a3a2a",
                                scale: 1,
                              }),
                            }),
                            (0, e.jsx)("p", {
                              className: "text-lg md:text-xl italic",
                              style: {
                                color: oI,
                                fontFamily: "var(--font-heading), serif",
                              },
                              children:
                                "“I don't need this section.”              ",
                            }),
                          ],
                        }),
                        (0, e.jsx)("p", {
                          className: "text-sm ml-12",
                          style: { color: oY },
                          children: "Removed. No rework. No sprint.",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: "satisfaction flex items-center gap-3 mt-2",
                      children: [
                        (0, e.jsx)("div", {
                          className:
                            "checkmark flex items-center justify-center w-8 h-8 rounded-full",
                          style: {
                            background: oF,
                            border: `1.5px solid ${o$}`,
                          },
                          children: (0, e.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: (0, e.jsx)("path", {
                              d: "M3 8L6.5 11.5L13 4.5",
                              stroke: oB,
                              strokeWidth: "2.2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, e.jsx)("p", {
                          className: "text-sm font-medium",
                          style: { color: oI },
                          children:
                            "Client-validated before a single line of code.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: "shrink-0 pt-4",
                  children: (0, e.jsxs)("svg", {
                    viewBox: "0 0 320 400",
                    className: "w-full max-w-md",
                    children: [
                      (0, e.jsx)("rect", {
                        x: "10",
                        y: "10",
                        width: "300",
                        height: "380",
                        rx: "14",
                        fill: oB,
                        stroke: o$,
                        strokeWidth: "2.2",
                        strokeLinejoin: "round",
                      }),
                      (0, e.jsx)("rect", {
                        x: "140",
                        y: "14",
                        width: "40",
                        height: "6",
                        rx: "3",
                        fill: o$,
                        opacity: "0.85",
                      }),
                      (0, e.jsx)("rect", {
                        x: "22",
                        y: "36",
                        width: "276",
                        height: "28",
                        rx: "4",
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1.4",
                      }),
                      (0, e.jsx)("rect", {
                        x: "32",
                        y: "46",
                        width: "80",
                        height: "8",
                        rx: "2",
                        fill: o$,
                        opacity: "0.55",
                      }),
                      (0, e.jsx)("rect", {
                        x: "22",
                        y: "78",
                        width: "276",
                        height: "40",
                        rx: "4",
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1.2",
                      }),
                      (0, e.jsx)("rect", {
                        x: "32",
                        y: "88",
                        width: "140",
                        height: "6",
                        rx: "2",
                        fill: o$,
                        opacity: "0.5",
                      }),
                      (0, e.jsx)("rect", {
                        x: "32",
                        y: "100",
                        width: "100",
                        height: "6",
                        rx: "2",
                        fill: o$,
                        opacity: "0.35",
                      }),
                      (0, e.jsx)("rect", {
                        className: "moveable-element",
                        x: "22",
                        y: "132",
                        width: "120",
                        height: "36",
                        rx: "6",
                        fill: oF,
                        stroke: o$,
                        strokeWidth: "1.6",
                        strokeLinejoin: "round",
                      }),
                      (0, e.jsx)("rect", {
                        x: "32",
                        y: "146",
                        width: "60",
                        height: "8",
                        rx: "2",
                        fill: oB,
                        className: "moveable-element",
                        opacity: "0.95",
                      }),
                      (0, e.jsxs)("g", {
                        className: "addable-field",
                        children: [
                          (0, e.jsx)("rect", {
                            x: "22",
                            y: "184",
                            width: "276",
                            height: "36",
                            rx: "4",
                            fill: "none",
                            stroke: oF,
                            strokeWidth: "1.6",
                            strokeDasharray: "4 3",
                          }),
                          (0, e.jsx)("text", {
                            x: "160",
                            y: "207",
                            textAnchor: "middle",
                            fill: oF,
                            fontSize: "12",
                            fontWeight: "500",
                            children: "+ new email field",
                          }),
                        ],
                      }),
                      (0, e.jsxs)("g", {
                        className: "addable-field-validated",
                        opacity: "0",
                        children: [
                          (0, e.jsx)("rect", {
                            x: "22",
                            y: "184",
                            width: "276",
                            height: "36",
                            rx: "4",
                            fill: oB,
                            stroke: oF,
                            strokeWidth: "1.8",
                          }),
                          (0, e.jsx)("text", {
                            x: "32",
                            y: "207",
                            fill: oF,
                            fontSize: "12",
                            fontWeight: "500",
                            children: "email@example.com",
                          }),
                        ],
                      }),
                      (0, e.jsxs)("g", {
                        className: "removable-section",
                        children: [
                          (0, e.jsx)("rect", {
                            x: "22",
                            y: "234",
                            width: "276",
                            height: "80",
                            rx: "4",
                            fill: "none",
                            stroke: o$,
                            strokeWidth: "1.2",
                            opacity: "0.4",
                          }),
                          (0, e.jsx)("rect", {
                            x: "32",
                            y: "246",
                            width: "180",
                            height: "6",
                            rx: "2",
                            fill: o$,
                            opacity: "0.3",
                          }),
                          (0, e.jsx)("rect", {
                            x: "32",
                            y: "260",
                            width: "120",
                            height: "6",
                            rx: "2",
                            fill: o$,
                            opacity: "0.3",
                          }),
                          (0, e.jsx)("rect", {
                            x: "32",
                            y: "274",
                            width: "150",
                            height: "6",
                            rx: "2",
                            fill: o$,
                            opacity: "0.3",
                          }),
                          (0, e.jsx)("rect", {
                            x: "32",
                            y: "288",
                            width: "90",
                            height: "6",
                            rx: "2",
                            fill: o$,
                            opacity: "0.3",
                          }),
                        ],
                      }),
                      (0, e.jsx)("rect", {
                        x: "22",
                        y: "338",
                        width: "276",
                        height: "40",
                        rx: "4",
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1.4",
                      }),
                      (0, e.jsx)("circle", {
                        cx: "80",
                        cy: "358",
                        r: "6",
                        fill: o$,
                        opacity: "0.7",
                      }),
                      (0, e.jsx)("circle", {
                        cx: "160",
                        cy: "358",
                        r: "6",
                        fill: o$,
                        opacity: "0.7",
                      }),
                      (0, e.jsx)("circle", {
                        cx: "240",
                        cy: "358",
                        r: "6",
                        fill: o$,
                        opacity: "0.7",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }),
      oZ = (0, r.forwardRef)(function (t, r) {
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden",
          style: { background: oB },
          children: [
            (0, e.jsxs)("div", {
              className:
                "absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 max-w-2xl px-6",
              children: [
                (0, e.jsx)("h2", {
                  className: "text-2xl md:text-3xl tracking-tight",
                  style: { color: oI },
                  children: "Then Claude Code builds it",
                }),
                (0, e.jsx)("p", {
                  className: "mt-2 text-sm md:text-base",
                  style: { color: oY },
                  children:
                    "Reading the validated Figma Make prototype, building the real product directly from what the client already approved.",
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className:
                "code-build-scene w-full max-w-6xl px-6 flex gap-10 items-center justify-center mt-4",
              children: [
                (0, e.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 shrink-0",
                  children: [
                    (0, e.jsx)("p", {
                      className:
                        "figma-label text-xs uppercase tracking-widest",
                      style: { color: oF, letterSpacing: "0.16em" },
                      children: "Figma Make",
                    }),
                    (0, e.jsxs)("svg", {
                      viewBox: "0 0 260 320",
                      className: "w-full max-w-[340px]",
                      children: [
                        (0, e.jsx)("rect", {
                          className: "figma-frame",
                          x: "5",
                          y: "5",
                          width: "250",
                          height: "310",
                          rx: "14",
                          fill: oB,
                          stroke: o$,
                          strokeWidth: "2.2",
                          strokeLinejoin: "round",
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "20",
                          width: "230",
                          height: "28",
                          rx: "4",
                          fill: "none",
                          stroke: o$,
                          strokeWidth: "1.4",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "30",
                          width: "70",
                          height: "8",
                          rx: "2",
                          fill: oF,
                          opacity: "0.85",
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "60",
                          width: "230",
                          height: "36",
                          rx: "4",
                          fill: "none",
                          stroke: o$,
                          strokeWidth: "1.2",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "70",
                          width: "120",
                          height: "6",
                          rx: "2",
                          fill: o$,
                          opacity: "0.5",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "82",
                          width: "80",
                          height: "6",
                          rx: "2",
                          fill: o$,
                          opacity: "0.35",
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "106",
                          width: "100",
                          height: "30",
                          rx: "6",
                          fill: oF,
                          stroke: o$,
                          strokeWidth: "1.4",
                          strokeLinejoin: "round",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "118",
                          width: "50",
                          height: "7",
                          rx: "2",
                          fill: oB,
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "148",
                          width: "230",
                          height: "30",
                          rx: "4",
                          fill: "none",
                          stroke: oF,
                          strokeWidth: "1.6",
                        }),
                        (0, e.jsx)("text", {
                          x: "25",
                          y: "168",
                          fill: oF,
                          fontSize: "11",
                          children: "email@example.com",
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "192",
                          width: "230",
                          height: "50",
                          rx: "4",
                          fill: "none",
                          stroke: o$,
                          strokeWidth: "1.2",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "204",
                          width: "140",
                          height: "6",
                          rx: "2",
                          fill: o$,
                          opacity: "0.4",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "215",
                          width: "100",
                          height: "6",
                          rx: "2",
                          fill: o$,
                          opacity: "0.4",
                        }),
                        (0, e.jsx)("rect", {
                          x: "25",
                          y: "226",
                          width: "120",
                          height: "6",
                          rx: "2",
                          fill: o$,
                          opacity: "0.4",
                        }),
                        (0, e.jsx)("rect", {
                          x: "15",
                          y: "256",
                          width: "230",
                          height: "35",
                          rx: "4",
                          fill: "none",
                          stroke: o$,
                          strokeWidth: "1.4",
                        }),
                        (0, e.jsx)("circle", {
                          cx: "75",
                          cy: "274",
                          r: "6",
                          fill: o$,
                          opacity: "0.7",
                        }),
                        (0, e.jsx)("circle", {
                          cx: "130",
                          cy: "274",
                          r: "6",
                          fill: o$,
                          opacity: "0.7",
                        }),
                        (0, e.jsx)("circle", {
                          cx: "185",
                          cy: "274",
                          r: "6",
                          fill: o$,
                          opacity: "0.7",
                        }),
                        (0, e.jsx)("circle", {
                          className: "figma-check",
                          cx: "230",
                          cy: "25",
                          r: "13",
                          fill: oF,
                          stroke: o$,
                          strokeWidth: "1.6",
                        }),
                        (0, e.jsx)("path", {
                          className: "figma-check",
                          d: "M223 25L228 30L237 20",
                          fill: "none",
                          stroke: oB,
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className: "figma-validated text-xs font-medium",
                      style: { color: oI },
                      children: "Client-validated prototype",
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: "flex flex-col items-center gap-3 px-4",
                  children: [
                    (0, e.jsxs)("svg", {
                      viewBox: "0 0 120 60",
                      className: "connection-arrow w-28",
                      children: [
                        (0, e.jsx)("line", {
                          x1: "10",
                          y1: "30",
                          x2: "92",
                          y2: "30",
                          stroke: o$,
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeDasharray: "6 4",
                          children: (0, e.jsx)("animate", {
                            attributeName: "stroke-dashoffset",
                            from: "0",
                            to: "-20",
                            dur: "0.6s",
                            repeatCount: "indefinite",
                          }),
                        }),
                        (0, e.jsx)("polygon", {
                          points: "88,24 102,30 88,36",
                          fill: o$,
                        }),
                        (0, e.jsx)("path", {
                          d: "M 56 18 l 4 0 m -2 -2 l 0 4",
                          stroke: oF,
                          strokeWidth: "1.6",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className:
                        "connection-label text-xs text-center font-medium",
                      style: { color: oI },
                      children: "Connected",
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 shrink-0",
                  children: [
                    (0, e.jsx)("p", {
                      className: "code-label text-xs uppercase tracking-widest",
                      style: { color: oY, letterSpacing: "0.16em" },
                      children: "Claude Code",
                    }),
                    (0, e.jsxs)("div", {
                      className:
                        "code-editor w-full max-w-[420px] rounded-lg overflow-hidden",
                      style: { background: oz, border: `2px solid ${o$}` },
                      children: [
                        (0, e.jsxs)("div", {
                          className: "flex items-center gap-2 px-3 py-2",
                          style: {
                            background: "#0e1830",
                            borderBottom: `1px solid ${oL}`,
                          },
                          children: [
                            (0, e.jsx)("div", {
                              className: "w-2.5 h-2.5 rounded-full",
                              style: { background: "#ef4444" },
                            }),
                            (0, e.jsx)("div", {
                              className: "w-2.5 h-2.5 rounded-full",
                              style: { background: "#eab308" },
                            }),
                            (0, e.jsx)("div", {
                              className: "w-2.5 h-2.5 rounded-full",
                              style: { background: "#22c55e" },
                            }),
                            (0, e.jsx)("span", {
                              className: "text-xs ml-2",
                              style: { color: "#a3b3cc" },
                              children: "claude-code",
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className:
                            "px-5 py-4 font-mono text-sm leading-relaxed space-y-2",
                          children: [
                            (0, e.jsxs)("div", {
                              className: "code-line-1",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: oF },
                                  children: "$",
                                }),
                                " Reading Figma Make prototype...",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-2",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: "#22c55e" },
                                  children: "✓",
                                }),
                                " Components extracted",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-3",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: "#22c55e" },
                                  children: "✓",
                                }),
                                " Layout structure mapped",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-4",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: "#22c55e" },
                                  children: "✓",
                                }),
                                " Email field added",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-5",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: "#22c55e" },
                                  children: "✓",
                                }),
                                " Button repositioned",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-6",
                              style: { color: "#cdd9eb" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: "#22c55e" },
                                  children: "✓",
                                }),
                                " Routes generated",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-7 mt-2",
                              style: { color: oF },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: oW },
                                  children: "●",
                                }),
                                " ",
                                "Building to production...",
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: "code-line-8 mt-1",
                              style: { color: "#fff5ef" },
                              children: [
                                (0, e.jsx)("span", {
                                  style: { color: oF },
                                  children: "✓",
                                }),
                                " ",
                                "Ready. Built from what was approved.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: "build-result flex items-center gap-2",
                      children: [
                        (0, e.jsx)("div", {
                          className:
                            "flex items-center justify-center w-7 h-7 rounded-full",
                          style: {
                            background: oF,
                            border: `1.5px solid ${o$}`,
                          },
                          children: (0, e.jsx)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: (0, e.jsx)("path", {
                              d: "M3 8L6.5 11.5L13 4.5",
                              stroke: oB,
                              strokeWidth: "2.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, e.jsx)("p", {
                          className: "text-sm font-medium",
                          style: { color: oI },
                          children: "Built exactly what was validated.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
      oK = (0, r.forwardRef)(function (t, r) {
        let i = 80 + (oX.length - 1) * 140 + 50,
          n = ["#3a4e6b", oF, oF, "#8a9a7b"];
        return (0, e.jsxs)("section", {
          ref: r,
          className:
            "h-screen w-full flex flex-col items-center justify-center relative overflow-hidden",
          style: { background: oB },
          children: [
            (0, e.jsx)("div", {
              className:
                "absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 max-w-2xl px-6",
              children: (0, e.jsx)("h2", {
                className: "text-3xl md:text-4xl tracking-tight",
                style: {
                  color: oI,
                  fontFamily: "var(--font-heading), serif",
                  fontWeight: 700,
                },
                children: "A better path",
              }),
            }),
            (0, e.jsxs)("svg", {
              viewBox: "0 170 1200 320",
              className: "w-full max-w-[95vw] px-4 max-h-[65vh]",
              preserveAspectRatio: "xMidYMid meet",
              style: { overflow: "visible" },
              children: [
                (0, e.jsxs)("g", {
                  className: "ghost-doors",
                  opacity: "0",
                  children: [
                    (0, e.jsx)("line", {
                      x1: "40",
                      y1: 340,
                      x2: "1100",
                      y2: 340,
                      stroke: o$,
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      opacity: "0.4",
                    }),
                    oX.map((t, r) => {
                      let i = 80 + 140 * r;
                      return (0, e.jsxs)(
                        "g",
                        {
                          opacity: "0.45",
                          children: [
                            (0, e.jsx)("rect", {
                              x: i,
                              y: 220,
                              width: 50,
                              height: 120,
                              fill: "none",
                              stroke: o$,
                              strokeWidth: "1",
                              strokeDasharray: "4 3",
                              rx: "2",
                            }),
                            (0, e.jsx)("text", {
                              x: i + 25,
                              y: 208,
                              textAnchor: "middle",
                              fill: o$,
                              fontSize: "10",
                              opacity: "0.7",
                              children: t,
                            }),
                          ],
                        },
                        `ghost-${t}`,
                      );
                    }),
                  ],
                }),
                (0, e.jsx)("g", {
                  className: "redrawn-hallway",
                  children: (0, e.jsxs)("g", {
                    className: "compressed-hallway",
                    style: { transformOrigin: "center center" },
                    children: [
                      (0, e.jsx)("line", {
                        x1: 260,
                        y1: 340,
                        x2: 300 + (oU.length - 1) * 160 + 50 + 40,
                        y2: 340,
                        stroke: o$,
                        strokeWidth: "2.2",
                        strokeLinecap: "round",
                      }),
                      oU.map((t, r) => {
                        let i = 300 + 160 * r,
                          s = "Client Discovery" === t,
                          o = n[r];
                        return (0, e.jsxs)(
                          "g",
                          {
                            className: "new-door-label",
                            children: [
                              (0, e.jsx)("rect", {
                                x: i - 6,
                                y: 214,
                                width: 62,
                                height: 132,
                                rx: "5",
                                fill: o,
                                opacity: s ? "0.22" : "0.1",
                              }),
                              (0, e.jsx)("rect", {
                                x: i,
                                y: 220,
                                width: 50,
                                height: 120,
                                fill: s ? o : oB,
                                stroke: o,
                                strokeWidth: "2.4",
                                strokeLinejoin: "round",
                                rx: "3",
                              }),
                              (0, e.jsx)("rect", {
                                x: i + 5,
                                y: 228,
                                width: 40,
                                height: 90,
                                fill: "none",
                                stroke: o,
                                strokeWidth: "1.2",
                                strokeLinejoin: "round",
                                rx: "1.5",
                                opacity: "0.7",
                              }),
                              (0, e.jsx)("circle", {
                                cx: i + 50 - 10,
                                cy: 280,
                                r: "2.8",
                                fill: o,
                                stroke: o$,
                                strokeWidth: "1",
                              }),
                              (0, e.jsx)("text", {
                                x: i + 25,
                                y: 208,
                                textAnchor: "middle",
                                fill: o$,
                                fontSize: "11",
                                fontWeight: s ? "700" : "500",
                                children: t,
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                      (0, e.jsx)("path", {
                        d: `M 325 385 ${oU.map((t, e) => `L ${300 + 160 * e + 25} 385`).join(" ")}`,
                        fill: "none",
                        stroke: o$,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeDasharray: "6 4",
                        opacity: "0.55",
                      }),
                      oU.slice(0, -1).map((t, r) => {
                        let i =
                          (300 + 160 * r + 25 + (300 + (r + 1) * 160 + 25)) / 2;
                        return (0, e.jsx)(
                          "polygon",
                          {
                            points: `${i - 4},381 ${i + 4},385 ${i - 4},389`,
                            fill: o$,
                            opacity: "0.55",
                          },
                          `new-arrow-${r}`,
                        );
                      }),
                      (0, e.jsx)("g", {
                        className: "figures-together",
                        transform: "translate(240, 290)",
                        children: [
                          {
                            x: 0,
                            label: "PO",
                            shirt: "#3a4e6b",
                            hair: "#2a2a2a",
                          },
                          {
                            x: 60,
                            label: "Dev",
                            shirt: "#c8a04a",
                            hair: "#1A1A1A",
                          },
                          {
                            x: 120,
                            label: "UX",
                            shirt: "#8a9a7b",
                            hair: "#5a3a2a",
                          },
                          {
                            x: 180,
                            label: "Client",
                            shirt: oF,
                            hair: "#3a2a1a",
                          },
                        ].map(({ x: t, label: r, shirt: i, hair: n }) =>
                          (0, e.jsxs)(
                            "g",
                            {
                              transform: `translate(${t}, 0)`,
                              children: [
                                (0, e.jsx)(oV, {
                                  shirt: i,
                                  hair: n,
                                  scale: 1.7,
                                  smile: !0,
                                }),
                                (0, e.jsx)("text", {
                                  x: "12",
                                  y: "74",
                                  textAnchor: "middle",
                                  fill: o$,
                                  fontSize: "9",
                                  fontWeight: "600",
                                  opacity: "0.9",
                                  children: r,
                                }),
                              ],
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsxs)("g", {
                  className: "bracket-old",
                  opacity: "0.4",
                  children: [
                    (0, e.jsx)("line", {
                      x1: 80,
                      y1: 400,
                      x2: i,
                      y2: 400,
                      stroke: o$,
                      strokeWidth: "1",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("line", {
                      x1: 80,
                      y1: 395,
                      x2: 80,
                      y2: 405,
                      stroke: o$,
                      strokeWidth: "1",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("line", {
                      x1: i,
                      y1: 395,
                      x2: i,
                      y2: 405,
                      stroke: o$,
                      strokeWidth: "1",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("text", {
                      x: (80 + i) / 2,
                      y: 418,
                      textAnchor: "middle",
                      fill: o$,
                      fontSize: "10",
                      opacity: "0.7",
                      children: "weeks of rework",
                    }),
                  ],
                }),
                (0, e.jsxs)("g", {
                  className: "bracket-new",
                  children: [
                    (0, e.jsx)("line", {
                      x1: 300,
                      y1: 430,
                      x2: 300 + (oU.length - 1) * 160 + 50,
                      y2: 430,
                      stroke: oF,
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("line", {
                      x1: 300,
                      y1: 425,
                      x2: 300,
                      y2: 435,
                      stroke: oF,
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("line", {
                      x1: 300 + (oU.length - 1) * 160 + 50,
                      y1: 425,
                      x2: 300 + (oU.length - 1) * 160 + 50,
                      y2: 435,
                      stroke: oF,
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                    }),
                    (0, e.jsx)("text", {
                      x: (600 + (oU.length - 1) * 160 + 50) / 2,
                      y: 448,
                      textAnchor: "middle",
                      fill: oF,
                      fontSize: "11",
                      fontWeight: "600",
                      children: "days of work",
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: "final-text text-center mt-6 px-6 max-w-2xl mx-auto",
              children: [
                (0, e.jsx)("p", {
                  className: "text-3xl md:text-4xl tracking-tight",
                  style: {
                    color: oI,
                    fontFamily: "var(--font-heading), serif",
                    fontWeight: 700,
                  },
                  children: "In an AI world, anything is possible.",
                }),
                (0, e.jsx)("p", {
                  className: "text-base md:text-lg mt-5 leading-relaxed",
                  style: { color: oY },
                  children:
                    "AI is opening doors in every part of how we build. Designers, engineers, clients, all on the same side of the screen. Less handoff. Less rework. Better outcomes.",
                }),
              ],
            }),
          ],
        });
      });
    (iW.registerPlugin(o_),
      t.s(
        [
          "StoryContainer",
          0,
          function () {
            let t = (0, r.useRef)(null),
              i = (0, r.useRef)(null),
              n = (0, r.useRef)(null),
              s = (0, r.useRef)(null),
              o = (0, r.useRef)(null),
              a = (0, r.useRef)(null),
              l = (0, r.useRef)(null);
            return (
              oR(
                () => {
                  if (
                    (i.current &&
                      iW.to(i.current, {
                        scaleX: 1,
                        ease: "none",
                        scrollTrigger: {
                          trigger: t.current,
                          start: "top top",
                          end: "bottom bottom",
                          scrub: 0.3,
                        },
                      }),
                    n.current)
                  ) {
                    let t = iW.timeline({
                      scrollTrigger: {
                        trigger: n.current,
                        start: "top top",
                        end: "+=600%",
                        pin: !0,
                        scrub: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                    (t.from(
                      ".hallway-walls path, .hallway-walls line, .hallway-walls rect",
                      { strokeDashoffset: 1e3, duration: 0.15, stagger: 0.03 },
                      0,
                    ),
                      t.from(
                        ".panel1-title",
                        { opacity: 0, y: 20, duration: 0.08 },
                        0.05,
                      ),
                      t.from(
                        ".door-group",
                        { opacity: 0, y: 10, duration: 0.05, stagger: 0.04 },
                        0.12,
                      ),
                      t.from(
                        ".route-path",
                        { strokeDashoffset: 2e3, duration: 0.15 },
                        0.25,
                      ),
                      t.from(
                        ".team-figure",
                        { opacity: 0, y: 15, duration: 0.06, stagger: 0.03 },
                        0.32,
                      ),
                      t.from(
                        ".client-figure",
                        { opacity: 0, duration: 0.05 },
                        0.38,
                      ),
                      t.to(
                        ".po-figure",
                        { opacity: 0.8, duration: 0.04 },
                        0.42,
                      ),
                      t.to(
                        ".po-figure",
                        { x: 661, duration: 0.3, ease: "power1.inOut" },
                        0.46,
                      ),
                      t.to(
                        ".client-in-door",
                        { opacity: 0.85, duration: 0.04 },
                        0.72,
                      ),
                      t.to(
                        ".po-figure",
                        {
                          opacity: 0,
                          scale: 0.55,
                          transformOrigin: "center bottom",
                          duration: 0.04,
                        },
                        0.8,
                      ),
                      t.to(
                        ".client-in-door",
                        { opacity: 0, duration: 0.03 },
                        0.86,
                      ),
                      t.to(
                        ".po-figure",
                        { opacity: 0.8, scale: 1, duration: 0.04 },
                        0.88,
                      ),
                      t.to(
                        ".po-figure",
                        { x: 765, duration: 0.06, ease: "power1.inOut" },
                        0.92,
                      ),
                      t.to(
                        ".po-figure",
                        { x: 653, duration: 0.1, ease: "power1.inOut" },
                        1.04,
                      ),
                      t.to(
                        ".client-in-door",
                        { opacity: 0.85, duration: 0.04 },
                        1.14,
                      ),
                      t.to(
                        ".client-in-door",
                        { opacity: 0, duration: 0.04 },
                        1.24,
                      ),
                      t.to(
                        ".po-figure",
                        { x: 261, duration: 0.16, ease: "power1.inOut" },
                        1.28,
                      ),
                      t.to(
                        ".po-figure",
                        { x: 765, duration: 0.2, ease: "power1.inOut" },
                        1.48,
                      ),
                      t.to(".rework-loop", { opacity: 1, duration: 0.7 }, 1),
                      t.from(
                        ".rework-loop",
                        { opacity: 0, duration: 0.06 },
                        0.7,
                      ),
                      t.to(
                        ".rework-loop",
                        { opacity: 1, duration: 0.24 },
                        0.76,
                      ));
                  }
                  if (s.current) {
                    let t = iW.timeline({
                      scrollTrigger: {
                        trigger: s.current,
                        start: "top top",
                        end: "+=320%",
                        pin: !0,
                        scrub: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                    (t.from(".wall-crack", { scaleY: 0, duration: 0.15 }, 0.15),
                      t.from(
                        ".light-bleed",
                        { opacity: 0, scaleX: 0, duration: 0.15 },
                        0.25,
                      ),
                      t.to(
                        ".wall-left-piece",
                        { x: -30, duration: 0.15 },
                        0.35,
                      ),
                      t.to(
                        ".wall-right-piece",
                        { x: 30, duration: 0.15 },
                        0.35,
                      ),
                      t.from(
                        ".new-door",
                        { opacity: 0, scale: 0.9, duration: 0.15 },
                        0.4,
                      ),
                      t.from(".door-glow", { opacity: 0, duration: 0.1 }, 0.5),
                      t.from(
                        ".new-door-plaque span",
                        { opacity: 0, duration: 0.02, stagger: 0.02 },
                        0.55,
                      ),
                      t.to(
                        ".new-door-panel",
                        {
                          rotation: -95,
                          opacity: 0,
                          transformOrigin: "left center",
                          duration: 0.18,
                        },
                        0.7,
                      ),
                      t.to(
                        ".client-through-door",
                        { opacity: 1, duration: 0.1 },
                        0.75,
                      ),
                      o_.create({
                        trigger: s.current,
                        start: "top center",
                        onEnter: () => {
                          iW.to(".door-glow", {
                            opacity: 0.8,
                            duration: 1.5,
                            repeat: -1,
                            yoyo: !0,
                            ease: "sine.inOut",
                          });
                        },
                        onLeaveBack: () => {
                          iW.killTweensOf(".door-glow");
                        },
                      }));
                  }
                  if (o.current) {
                    let t = iW.timeline({
                      scrollTrigger: {
                        trigger: o.current,
                        start: "top top",
                        end: "+=320%",
                        pin: !0,
                        scrub: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                    (t.from(
                      ".room-scene",
                      { opacity: 0, scale: 0.8, duration: 0.15 },
                      0,
                    ),
                      t.from(
                        ".beat-1-text",
                        { opacity: 0, x: -20, duration: 0.08 },
                        0.15,
                      ),
                      t.to(
                        ".moveable-element",
                        { y: -30, duration: 0.1, ease: "back.out(1.4)" },
                        0.2,
                      ),
                      t.from(
                        ".beat-2-text",
                        { opacity: 0, x: -20, duration: 0.08 },
                        0.35,
                      ),
                      t.from(
                        ".addable-field",
                        {
                          opacity: 0,
                          scale: 0,
                          duration: 0.1,
                          ease: "back.out(1.7)",
                        },
                        0.4,
                      ),
                      t.from(
                        ".beat-3-text",
                        { opacity: 0, x: -20, duration: 0.08 },
                        0.55,
                      ),
                      t.to(
                        ".removable-section",
                        {
                          opacity: 0,
                          height: 0,
                          duration: 0.1,
                          ease: "power2.in",
                        },
                        0.6,
                      ),
                      t.to(
                        ".addable-field",
                        { opacity: 0, duration: 0.06 },
                        0.7,
                      ),
                      t.to(
                        ".addable-field-validated",
                        { opacity: 1, duration: 0.06 },
                        0.72,
                      ),
                      t.from(
                        ".checkmark",
                        {
                          opacity: 0,
                          scale: 0,
                          duration: 0.1,
                          ease: "back.out(2)",
                        },
                        0.8,
                      ),
                      t.from(
                        ".satisfaction",
                        { opacity: 0, y: 10, duration: 0.15 },
                        0.85,
                      ));
                  }
                  if (a.current) {
                    let t = iW.timeline({
                      scrollTrigger: {
                        trigger: a.current,
                        start: "top top",
                        end: "+=320%",
                        pin: !0,
                        scrub: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                    (t.from(
                      ".code-build-scene",
                      { opacity: 0, scale: 0.95, duration: 0.1 },
                      0,
                    ),
                      t.from(
                        ".figma-label",
                        { opacity: 0, y: 10, duration: 0.06 },
                        0.05,
                      ),
                      t.from(
                        ".figma-frame",
                        { opacity: 0, duration: 0.08 },
                        0.08,
                      ),
                      t.from(
                        ".figma-check",
                        {
                          opacity: 0,
                          scale: 0,
                          duration: 0.06,
                          ease: "back.out(2)",
                        },
                        0.15,
                      ),
                      t.from(
                        ".figma-validated",
                        { opacity: 0, duration: 0.05 },
                        0.18,
                      ),
                      t.from(
                        ".connection-arrow",
                        {
                          opacity: 0,
                          scaleX: 0,
                          transformOrigin: "left center",
                          duration: 0.1,
                        },
                        0.22,
                      ),
                      t.from(
                        ".connection-label",
                        { opacity: 0, duration: 0.05 },
                        0.28,
                      ),
                      t.from(
                        ".code-label",
                        { opacity: 0, y: 10, duration: 0.06 },
                        0.3,
                      ),
                      t.from(
                        ".code-editor",
                        { opacity: 0, x: 30, duration: 0.1 },
                        0.32,
                      ),
                      t.from(
                        ".code-line-1",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.4,
                      ),
                      t.from(
                        ".code-line-2",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.46,
                      ),
                      t.from(
                        ".code-line-3",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.52,
                      ),
                      t.from(
                        ".code-line-4",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.58,
                      ),
                      t.from(
                        ".code-line-5",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.64,
                      ),
                      t.from(
                        ".code-line-6",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.7,
                      ),
                      t.from(
                        ".code-line-7",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.76,
                      ),
                      t.from(
                        ".code-line-8",
                        { opacity: 0, x: 10, duration: 0.04 },
                        0.82,
                      ),
                      t.from(
                        ".build-result",
                        {
                          opacity: 0,
                          y: 10,
                          duration: 0.08,
                          ease: "back.out(1.4)",
                        },
                        0.88,
                      ));
                  }
                  if (l.current) {
                    let t = iW.timeline({
                      scrollTrigger: {
                        trigger: l.current,
                        start: "top top",
                        end: "+=320%",
                        pin: !0,
                        scrub: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                    (t.from(
                      ".redrawn-hallway",
                      { opacity: 0, scale: 0.9, duration: 0.2 },
                      0,
                    ),
                      t.fromTo(
                        ".ghost-doors",
                        { opacity: 0 },
                        { opacity: 0.08, duration: 0.08 },
                        0.15,
                      ),
                      t.to(
                        ".ghost-doors",
                        { opacity: 0, duration: 0.15 },
                        0.25,
                      ),
                      t.from(
                        ".compressed-hallway",
                        { scaleX: 1.8, duration: 0.2, ease: "power2.inOut" },
                        0.3,
                      ),
                      t.from(
                        ".new-door-label",
                        { opacity: 0, y: 10, duration: 0.08, stagger: 0.06 },
                        0.45,
                      ),
                      t.from(
                        ".bracket-old",
                        {
                          scaleX: 0,
                          transformOrigin: "left center",
                          duration: 0.15,
                        },
                        0.55,
                      ),
                      t.from(
                        ".bracket-new",
                        {
                          scaleX: 0,
                          transformOrigin: "left center",
                          duration: 0.15,
                        },
                        0.6,
                      ),
                      t.from(".final-text", { opacity: 0, duration: 0.2 }, 0.7),
                      t.from(
                        ".figures-together",
                        { opacity: 0, y: 10, duration: 0.08 },
                        0.75,
                      ),
                      t.to(
                        ".figures-together",
                        { x: 520, duration: 0.18, ease: "power1.inOut" },
                        0.83,
                      ));
                  }
                  document.fonts.ready.then(() => {
                    o_.refresh();
                  });
                },
                { scope: t },
              ),
              (0, e.jsxs)("div", {
                ref: t,
                children: [
                  (0, e.jsx)("div", {
                    ref: i,
                    className: "scroll-progress",
                    style: { transform: "scaleX(0)" },
                  }),
                  (0, e.jsx)(oq, {}),
                  (0, e.jsx)(oH, { ref: n }),
                  (0, e.jsx)(oG, { ref: s }),
                  (0, e.jsx)(oQ, { ref: o }),
                  (0, e.jsx)(oZ, { ref: a }),
                  (0, e.jsx)(oK, { ref: l }),
                ],
              })
            );
          },
        ],
        33620,
      ));
  },
]);
