var fs = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, s; n < a; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
};
function ps(e) {
  return e;
}
function W(e, t, r, n, a, s, o, c, l) {
  switch (arguments.length) {
    case 1:
      return e;
    case 2:
      return function() {
        return t(e.apply(this, arguments));
      };
    case 3:
      return function() {
        return r(t(e.apply(this, arguments)));
      };
    case 4:
      return function() {
        return n(r(t(e.apply(this, arguments))));
      };
    case 5:
      return function() {
        return a(n(r(t(e.apply(this, arguments)))));
      };
    case 6:
      return function() {
        return s(a(n(r(t(e.apply(this, arguments))))));
      };
    case 7:
      return function() {
        return o(s(a(n(r(t(e.apply(this, arguments)))))));
      };
    case 8:
      return function() {
        return c(o(s(a(n(r(t(e.apply(this, arguments))))))));
      };
    case 9:
      return function() {
        return l(c(o(s(a(n(r(t(e.apply(this, arguments)))))))));
      };
  }
}
function g(e, t, r, n, a, s, o, c, l) {
  switch (arguments.length) {
    case 1:
      return e;
    case 2:
      return t(e);
    case 3:
      return r(t(e));
    case 4:
      return n(r(t(e)));
    case 5:
      return a(n(r(t(e))));
    case 6:
      return s(a(n(r(t(e)))));
    case 7:
      return o(s(a(n(r(t(e))))));
    case 8:
      return c(o(s(a(n(r(t(e)))))));
    case 9:
      return l(c(o(s(a(n(r(t(e))))))));
    default: {
      for (var u = arguments[0], h = 1; h < arguments.length; h++)
        u = arguments[h](u);
      return u;
    }
  }
}
var hs = function(e, t) {
  var r = typeof e == "number" ? function(n) {
    return n.length >= e;
  } : e;
  return function() {
    var n = Array.from(arguments);
    return r(arguments) ? t.apply(this, n) : function(a) {
      return t.apply(void 0, fs([a], n, !1));
    };
  };
}, vs = function(e) {
  return {
    equals: function(t, r) {
      return t === r || e(t, r);
    }
  };
}, ys = function(e) {
  return vs(function(t, r) {
    for (var n in e)
      if (!e[n].equals(t[n], r[n]))
        return !1;
    return !0;
  });
};
globalThis && globalThis.__spreadArray;
var Nn = function(e) {
  return e._tag === "Some";
}, Pn = { _tag: "None" }, Ln = function(e) {
  return { _tag: "Some", value: e };
}, gs = function(e) {
  return e._tag === "Left";
}, ms = function(e) {
  return e._tag === "Right";
}, _s = function(e) {
  return { _tag: "Left", left: e };
}, bs = function(e) {
  return { _tag: "Right", right: e };
}, Ts = function(e) {
  return [e];
}, $s = [], As = Object.prototype.hasOwnProperty, Ss = function(e) {
  return function(t) {
    return function(r) {
      return r.reduce(function(n, a) {
        return e.concat(n, a);
      }, t);
    };
  };
}, ws = function(e) {
  return {
    concat: function() {
      return e;
    }
  };
}, xs = function(e) {
  return {
    concat: function(t, r) {
      var n = {};
      for (var a in e)
        As.call(e, a) && (n[a] = e[a].concat(t[a], r[a]));
      return n;
    }
  };
}, Bt = function() {
  return { concat: ps };
}, Es = function() {
  return { concat: function(e, t) {
    return t;
  } };
}, Os = Ss, js = ws(void 0), Dr = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, s; n < a; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, ks = $s, Cs = function(e, t) {
  return e < 0 || e >= t.length;
}, Rs = function(e) {
  return function(t) {
    return Dr(Dr([], t, !0), [e], !1);
  };
}, Is = Rs, Ns = Ts, F = {
  equals: function(e, t) {
    return e === t;
  }
}, Ps = {
  concat: function(e, t) {
    return e + t;
  }
}, Ls = "", ur = {
  concat: Ps.concat,
  empty: Ls
};
F.equals;
var Mn = function(e) {
  return e.trim();
}, Vn = function(e) {
  return e.length === 0;
}, Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ms() {
  this.__data__ = [], this.size = 0;
}
var Vs = Ms;
function Zs(e, t) {
  return e === t || e !== e && t !== t;
}
var lr = Zs, Ds = lr;
function Us(e, t) {
  for (var r = e.length; r--; )
    if (Ds(e[r][0], t))
      return r;
  return -1;
}
var _t = Us, qs = _t, Hs = Array.prototype, Bs = Hs.splice;
function Gs(e) {
  var t = this.__data__, r = qs(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Bs.call(t, r, 1), --this.size, !0;
}
var zs = Gs, Ks = _t;
function Fs(e) {
  var t = this.__data__, r = Ks(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Qs = Fs, Ws = _t;
function Js(e) {
  return Ws(this.__data__, e) > -1;
}
var Ys = Js, Xs = _t;
function ei(e, t) {
  var r = this.__data__, n = Xs(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ti = ei, ri = Vs, ni = zs, ai = Qs, si = Ys, ii = ti;
function be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = ri;
be.prototype.delete = ni;
be.prototype.get = ai;
be.prototype.has = si;
be.prototype.set = ii;
var bt = be, oi = bt;
function ci() {
  this.__data__ = new oi(), this.size = 0;
}
var ui = ci;
function li(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var di = li;
function fi(e) {
  return this.__data__.get(e);
}
var pi = fi;
function hi(e) {
  return this.__data__.has(e);
}
var vi = hi, yi = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, Dn = yi, gi = Dn, mi = typeof self == "object" && self && self.Object === Object && self, _i = gi || mi || Function("return this")(), G = _i, bi = G, Ti = bi.Symbol, Tt = Ti, Ur = Tt, Un = Object.prototype, $i = Un.hasOwnProperty, Ai = Un.toString, xe = Ur ? Ur.toStringTag : void 0;
function Si(e) {
  var t = $i.call(e, xe), r = e[xe];
  try {
    e[xe] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ai.call(e);
  return n && (t ? e[xe] = r : delete e[xe]), a;
}
var wi = Si, xi = Object.prototype, Ei = xi.toString;
function Oi(e) {
  return Ei.call(e);
}
var ji = Oi, qr = Tt, ki = wi, Ci = ji, Ri = "[object Null]", Ii = "[object Undefined]", Hr = qr ? qr.toStringTag : void 0;
function Ni(e) {
  return e == null ? e === void 0 ? Ii : Ri : Hr && Hr in Object(e) ? ki(e) : Ci(e);
}
var $t = Ni;
function Pi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ue = Pi, Li = $t, Mi = Ue, Vi = "[object AsyncFunction]", Zi = "[object Function]", Di = "[object GeneratorFunction]", Ui = "[object Proxy]";
function qi(e) {
  if (!Mi(e))
    return !1;
  var t = Li(e);
  return t == Zi || t == Di || t == Vi || t == Ui;
}
var qn = qi, Hi = G, Bi = Hi["__core-js_shared__"], Gi = Bi, Gt = Gi, Br = function() {
  var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zi(e) {
  return !!Br && Br in e;
}
var Ki = zi, Fi = Function.prototype, Qi = Fi.toString;
function Wi(e) {
  if (e != null) {
    try {
      return Qi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Hn = Wi, Ji = qn, Yi = Ki, Xi = Ue, eo = Hn, to = /[\\^$.*+?()[\]{}|]/g, ro = /^\[object .+?Constructor\]$/, no = Function.prototype, ao = Object.prototype, so = no.toString, io = ao.hasOwnProperty, oo = RegExp(
  "^" + so.call(io).replace(to, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function co(e) {
  if (!Xi(e) || Yi(e))
    return !1;
  var t = Ji(e) ? oo : ro;
  return t.test(eo(e));
}
var uo = co;
function lo(e, t) {
  return e == null ? void 0 : e[t];
}
var fo = lo, po = uo, ho = fo;
function vo(e, t) {
  var r = ho(e, t);
  return po(r) ? r : void 0;
}
var ue = vo, yo = ue, go = G, mo = yo(go, "Map"), dr = mo, _o = ue, bo = _o(Object, "create"), At = bo, Gr = At;
function To() {
  this.__data__ = Gr ? Gr(null) : {}, this.size = 0;
}
var $o = To;
function Ao(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var So = Ao, wo = At, xo = "__lodash_hash_undefined__", Eo = Object.prototype, Oo = Eo.hasOwnProperty;
function jo(e) {
  var t = this.__data__;
  if (wo) {
    var r = t[e];
    return r === xo ? void 0 : r;
  }
  return Oo.call(t, e) ? t[e] : void 0;
}
var ko = jo, Co = At, Ro = Object.prototype, Io = Ro.hasOwnProperty;
function No(e) {
  var t = this.__data__;
  return Co ? t[e] !== void 0 : Io.call(t, e);
}
var Po = No, Lo = At, Mo = "__lodash_hash_undefined__";
function Vo(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Lo && t === void 0 ? Mo : t, this;
}
var Zo = Vo, Do = $o, Uo = So, qo = ko, Ho = Po, Bo = Zo;
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = Do;
Te.prototype.delete = Uo;
Te.prototype.get = qo;
Te.prototype.has = Ho;
Te.prototype.set = Bo;
var Go = Te, zr = Go, zo = bt, Ko = dr;
function Fo() {
  this.size = 0, this.__data__ = {
    hash: new zr(),
    map: new (Ko || zo)(),
    string: new zr()
  };
}
var Qo = Fo;
function Wo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Jo = Wo, Yo = Jo;
function Xo(e, t) {
  var r = e.__data__;
  return Yo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var St = Xo, ec = St;
function tc(e) {
  var t = ec(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var rc = tc, nc = St;
function ac(e) {
  return nc(this, e).get(e);
}
var sc = ac, ic = St;
function oc(e) {
  return ic(this, e).has(e);
}
var cc = oc, uc = St;
function lc(e, t) {
  var r = uc(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var dc = lc, fc = Qo, pc = rc, hc = sc, vc = cc, yc = dc;
function $e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$e.prototype.clear = fc;
$e.prototype.delete = pc;
$e.prototype.get = hc;
$e.prototype.has = vc;
$e.prototype.set = yc;
var Bn = $e, gc = bt, mc = dr, _c = Bn, bc = 200;
function Tc(e, t) {
  var r = this.__data__;
  if (r instanceof gc) {
    var n = r.__data__;
    if (!mc || n.length < bc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new _c(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var $c = Tc, Ac = bt, Sc = ui, wc = di, xc = pi, Ec = vi, Oc = $c;
function Ae(e) {
  var t = this.__data__ = new Ac(e);
  this.size = t.size;
}
Ae.prototype.clear = Sc;
Ae.prototype.delete = wc;
Ae.prototype.get = xc;
Ae.prototype.has = Ec;
Ae.prototype.set = Oc;
var Gn = Ae;
function jc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var kc = jc, Cc = ue, Rc = function() {
  try {
    var e = Cc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ic = Rc, Kr = Ic;
function Nc(e, t, r) {
  t == "__proto__" && Kr ? Kr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var zn = Nc, Pc = zn, Lc = lr, Mc = Object.prototype, Vc = Mc.hasOwnProperty;
function Zc(e, t, r) {
  var n = e[t];
  (!(Vc.call(e, t) && Lc(n, r)) || r === void 0 && !(t in e)) && Pc(e, t, r);
}
var Kn = Zc, Dc = Kn, Uc = zn;
function qc(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], l = n ? n(r[c], e[c], c, r, e) : void 0;
    l === void 0 && (l = e[c]), a ? Uc(r, c, l) : Dc(r, c, l);
  }
  return r;
}
var wt = qc;
function Hc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Bc = Hc;
function Gc(e) {
  return e != null && typeof e == "object";
}
var Se = Gc, zc = $t, Kc = Se, Fc = "[object Arguments]";
function Qc(e) {
  return Kc(e) && zc(e) == Fc;
}
var Wc = Qc, Fr = Wc, Jc = Se, Fn = Object.prototype, Yc = Fn.hasOwnProperty, Xc = Fn.propertyIsEnumerable, eu = Fr(function() {
  return arguments;
}()) ? Fr : function(e) {
  return Jc(e) && Yc.call(e, "callee") && !Xc.call(e, "callee");
}, tu = eu, ru = Array.isArray, xt = ru, rt = { exports: {} };
function nu() {
  return !1;
}
var au = nu;
rt.exports;
(function(e, t) {
  var r = G, n = au, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, c = o ? r.Buffer : void 0, l = c ? c.isBuffer : void 0, u = l || n;
  e.exports = u;
})(rt, rt.exports);
var fr = rt.exports, su = 9007199254740991, iu = /^(?:0|[1-9]\d*)$/;
function ou(e, t) {
  var r = typeof e;
  return t = t ?? su, !!t && (r == "number" || r != "symbol" && iu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var cu = ou, uu = 9007199254740991;
function lu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uu;
}
var Qn = lu, du = $t, fu = Qn, pu = Se, hu = "[object Arguments]", vu = "[object Array]", yu = "[object Boolean]", gu = "[object Date]", mu = "[object Error]", _u = "[object Function]", bu = "[object Map]", Tu = "[object Number]", $u = "[object Object]", Au = "[object RegExp]", Su = "[object Set]", wu = "[object String]", xu = "[object WeakMap]", Eu = "[object ArrayBuffer]", Ou = "[object DataView]", ju = "[object Float32Array]", ku = "[object Float64Array]", Cu = "[object Int8Array]", Ru = "[object Int16Array]", Iu = "[object Int32Array]", Nu = "[object Uint8Array]", Pu = "[object Uint8ClampedArray]", Lu = "[object Uint16Array]", Mu = "[object Uint32Array]", w = {};
w[ju] = w[ku] = w[Cu] = w[Ru] = w[Iu] = w[Nu] = w[Pu] = w[Lu] = w[Mu] = !0;
w[hu] = w[vu] = w[Eu] = w[yu] = w[Ou] = w[gu] = w[mu] = w[_u] = w[bu] = w[Tu] = w[$u] = w[Au] = w[Su] = w[wu] = w[xu] = !1;
function Vu(e) {
  return pu(e) && fu(e.length) && !!w[du(e)];
}
var Zu = Vu;
function Du(e) {
  return function(t) {
    return e(t);
  };
}
var pr = Du, nt = { exports: {} };
nt.exports;
(function(e, t) {
  var r = Dn, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s && r.process, c = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(nt, nt.exports);
var hr = nt.exports, Uu = Zu, qu = pr, Qr = hr, Wr = Qr && Qr.isTypedArray, Hu = Wr ? qu(Wr) : Uu, Wn = Hu, Bu = Bc, Gu = tu, zu = xt, Ku = fr, Fu = cu, Qu = Wn, Wu = Object.prototype, Ju = Wu.hasOwnProperty;
function Yu(e, t) {
  var r = zu(e), n = !r && Gu(e), a = !r && !n && Ku(e), s = !r && !n && !a && Qu(e), o = r || n || a || s, c = o ? Bu(e.length, String) : [], l = c.length;
  for (var u in e)
    (t || Ju.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Fu(u, l))) && c.push(u);
  return c;
}
var Jn = Yu, Xu = Object.prototype;
function el(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xu;
  return e === r;
}
var vr = el;
function tl(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Yn = tl, rl = Yn, nl = rl(Object.keys, Object), al = nl, sl = vr, il = al, ol = Object.prototype, cl = ol.hasOwnProperty;
function ul(e) {
  if (!sl(e))
    return il(e);
  var t = [];
  for (var r in Object(e))
    cl.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ll = ul, dl = qn, fl = Qn;
function pl(e) {
  return e != null && fl(e.length) && !dl(e);
}
var Xn = pl, hl = Jn, vl = ll, yl = Xn;
function gl(e) {
  return yl(e) ? hl(e) : vl(e);
}
var yr = gl, ml = wt, _l = yr;
function bl(e, t) {
  return e && ml(t, _l(t), e);
}
var Tl = bl;
function $l(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Al = $l, Sl = Ue, wl = vr, xl = Al, El = Object.prototype, Ol = El.hasOwnProperty;
function jl(e) {
  if (!Sl(e))
    return xl(e);
  var t = wl(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ol.call(e, n)) || r.push(n);
  return r;
}
var kl = jl, Cl = Jn, Rl = kl, Il = Xn;
function Nl(e) {
  return Il(e) ? Cl(e, !0) : Rl(e);
}
var gr = Nl, Pl = wt, Ll = gr;
function Ml(e, t) {
  return e && Pl(t, Ll(t), e);
}
var Vl = Ml, at = { exports: {} };
at.exports;
(function(e, t) {
  var r = G, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, s = a && a.exports === n, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function l(u, h) {
    if (h)
      return u.slice();
    var T = u.length, A = c ? c(T) : new u.constructor(T);
    return u.copy(A), A;
  }
  e.exports = l;
})(at, at.exports);
var Zl = at.exports;
function Dl(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ul = Dl;
function ql(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[a++] = o);
  }
  return s;
}
var Hl = ql;
function Bl() {
  return [];
}
var ea = Bl, Gl = Hl, zl = ea, Kl = Object.prototype, Fl = Kl.propertyIsEnumerable, Jr = Object.getOwnPropertySymbols, Ql = Jr ? function(e) {
  return e == null ? [] : (e = Object(e), Gl(Jr(e), function(t) {
    return Fl.call(e, t);
  }));
} : zl, mr = Ql, Wl = wt, Jl = mr;
function Yl(e, t) {
  return Wl(e, Jl(e), t);
}
var Xl = Yl;
function ed(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ta = ed, td = Yn, rd = td(Object.getPrototypeOf, Object), ra = rd, nd = ta, ad = ra, sd = mr, id = ea, od = Object.getOwnPropertySymbols, cd = od ? function(e) {
  for (var t = []; e; )
    nd(t, sd(e)), e = ad(e);
  return t;
} : id, na = cd, ud = wt, ld = na;
function dd(e, t) {
  return ud(e, ld(e), t);
}
var fd = dd, pd = ta, hd = xt;
function vd(e, t, r) {
  var n = t(e);
  return hd(e) ? n : pd(n, r(e));
}
var aa = vd, yd = aa, gd = mr, md = yr;
function _d(e) {
  return yd(e, md, gd);
}
var sa = _d, bd = aa, Td = na, $d = gr;
function Ad(e) {
  return bd(e, $d, Td);
}
var Sd = Ad, wd = ue, xd = G, Ed = wd(xd, "DataView"), Od = Ed, jd = ue, kd = G, Cd = jd(kd, "Promise"), Rd = Cd, Id = ue, Nd = G, Pd = Id(Nd, "Set"), Ld = Pd, Md = ue, Vd = G, Zd = Md(Vd, "WeakMap"), Dd = Zd, Wt = Od, Jt = dr, Yt = Rd, Xt = Ld, er = Dd, ia = $t, we = Hn, Yr = "[object Map]", Ud = "[object Object]", Xr = "[object Promise]", en = "[object Set]", tn = "[object WeakMap]", rn = "[object DataView]", qd = we(Wt), Hd = we(Jt), Bd = we(Yt), Gd = we(Xt), zd = we(er), ae = ia;
(Wt && ae(new Wt(new ArrayBuffer(1))) != rn || Jt && ae(new Jt()) != Yr || Yt && ae(Yt.resolve()) != Xr || Xt && ae(new Xt()) != en || er && ae(new er()) != tn) && (ae = function(e) {
  var t = ia(e), r = t == Ud ? e.constructor : void 0, n = r ? we(r) : "";
  if (n)
    switch (n) {
      case qd:
        return rn;
      case Hd:
        return Yr;
      case Bd:
        return Xr;
      case Gd:
        return en;
      case zd:
        return tn;
    }
  return t;
});
var Et = ae, Kd = Object.prototype, Fd = Kd.hasOwnProperty;
function Qd(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Fd.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Wd = Qd, Jd = G, Yd = Jd.Uint8Array, oa = Yd, nn = oa;
function Xd(e) {
  var t = new e.constructor(e.byteLength);
  return new nn(t).set(new nn(e)), t;
}
var _r = Xd, ef = _r;
function tf(e, t) {
  var r = t ? ef(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var rf = tf, nf = /\w*$/;
function af(e) {
  var t = new e.constructor(e.source, nf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var sf = af, an = Tt, sn = an ? an.prototype : void 0, on = sn ? sn.valueOf : void 0;
function of(e) {
  return on ? Object(on.call(e)) : {};
}
var cf = of, uf = _r;
function lf(e, t) {
  var r = t ? uf(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var df = lf, ff = _r, pf = rf, hf = sf, vf = cf, yf = df, gf = "[object Boolean]", mf = "[object Date]", _f = "[object Map]", bf = "[object Number]", Tf = "[object RegExp]", $f = "[object Set]", Af = "[object String]", Sf = "[object Symbol]", wf = "[object ArrayBuffer]", xf = "[object DataView]", Ef = "[object Float32Array]", Of = "[object Float64Array]", jf = "[object Int8Array]", kf = "[object Int16Array]", Cf = "[object Int32Array]", Rf = "[object Uint8Array]", If = "[object Uint8ClampedArray]", Nf = "[object Uint16Array]", Pf = "[object Uint32Array]";
function Lf(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case wf:
      return ff(e);
    case gf:
    case mf:
      return new n(+e);
    case xf:
      return pf(e, r);
    case Ef:
    case Of:
    case jf:
    case kf:
    case Cf:
    case Rf:
    case If:
    case Nf:
    case Pf:
      return yf(e, r);
    case _f:
      return new n();
    case bf:
    case Af:
      return new n(e);
    case Tf:
      return hf(e);
    case $f:
      return new n();
    case Sf:
      return vf(e);
  }
}
var Mf = Lf, Vf = Ue, cn = Object.create, Zf = function() {
  function e() {
  }
  return function(t) {
    if (!Vf(t))
      return {};
    if (cn)
      return cn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Df = Zf, Uf = Df, qf = ra, Hf = vr;
function Bf(e) {
  return typeof e.constructor == "function" && !Hf(e) ? Uf(qf(e)) : {};
}
var Gf = Bf, zf = Et, Kf = Se, Ff = "[object Map]";
function Qf(e) {
  return Kf(e) && zf(e) == Ff;
}
var Wf = Qf, Jf = Wf, Yf = pr, un = hr, ln = un && un.isMap, Xf = ln ? Yf(ln) : Jf, ep = Xf, tp = Et, rp = Se, np = "[object Set]";
function ap(e) {
  return rp(e) && tp(e) == np;
}
var sp = ap, ip = sp, op = pr, dn = hr, fn = dn && dn.isSet, cp = fn ? op(fn) : ip, up = cp, lp = Gn, dp = kc, fp = Kn, pp = Tl, hp = Vl, vp = Zl, yp = Ul, gp = Xl, mp = fd, _p = sa, bp = Sd, Tp = Et, $p = Wd, Ap = Mf, Sp = Gf, wp = xt, xp = fr, Ep = ep, Op = Ue, jp = up, kp = yr, Cp = gr, Rp = 1, Ip = 2, Np = 4, ca = "[object Arguments]", Pp = "[object Array]", Lp = "[object Boolean]", Mp = "[object Date]", Vp = "[object Error]", ua = "[object Function]", Zp = "[object GeneratorFunction]", Dp = "[object Map]", Up = "[object Number]", la = "[object Object]", qp = "[object RegExp]", Hp = "[object Set]", Bp = "[object String]", Gp = "[object Symbol]", zp = "[object WeakMap]", Kp = "[object ArrayBuffer]", Fp = "[object DataView]", Qp = "[object Float32Array]", Wp = "[object Float64Array]", Jp = "[object Int8Array]", Yp = "[object Int16Array]", Xp = "[object Int32Array]", eh = "[object Uint8Array]", th = "[object Uint8ClampedArray]", rh = "[object Uint16Array]", nh = "[object Uint32Array]", S = {};
S[ca] = S[Pp] = S[Kp] = S[Fp] = S[Lp] = S[Mp] = S[Qp] = S[Wp] = S[Jp] = S[Yp] = S[Xp] = S[Dp] = S[Up] = S[la] = S[qp] = S[Hp] = S[Bp] = S[Gp] = S[eh] = S[th] = S[rh] = S[nh] = !0;
S[Vp] = S[ua] = S[zp] = !1;
function et(e, t, r, n, a, s) {
  var o, c = t & Rp, l = t & Ip, u = t & Np;
  if (r && (o = a ? r(e, n, a, s) : r(e)), o !== void 0)
    return o;
  if (!Op(e))
    return e;
  var h = wp(e);
  if (h) {
    if (o = $p(e), !c)
      return yp(e, o);
  } else {
    var T = Tp(e), A = T == ua || T == Zp;
    if (xp(e))
      return vp(e, c);
    if (T == la || T == ca || A && !a) {
      if (o = l || A ? {} : Sp(e), !c)
        return l ? mp(e, hp(o, e)) : gp(e, pp(o, e));
    } else {
      if (!S[T])
        return a ? e : {};
      o = Ap(e, T, c);
    }
  }
  s || (s = new lp());
  var C = s.get(e);
  if (C)
    return C;
  s.set(e, o), jp(e) ? e.forEach(function(k) {
    o.add(et(k, t, r, k, e, s));
  }) : Ep(e) && e.forEach(function(k, I) {
    o.set(I, et(k, t, r, I, e, s));
  });
  var L = u ? l ? bp : _p : l ? Cp : kp, M = h ? void 0 : L(e);
  return dp(M || e, function(k, I) {
    M && (I = k, k = e[I]), fp(o, I, et(k, t, r, I, e, s));
  }), o;
}
var ah = et, sh = ah, ih = 1, oh = 4;
function ch(e) {
  return sh(e, ih | oh);
}
var uh = ch;
const lh = /* @__PURE__ */ Zn(uh);
var $;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function r(a) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (a) => {
    const s = {};
    for (const o of a)
      s[o] = o;
    return s;
  }, e.getValidEnumValues = (a) => {
    const s = e.objectKeys(a).filter((c) => typeof a[a[c]] != "number"), o = {};
    for (const c of s)
      o[c] = a[c];
    return e.objectValues(o);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(s) {
    return a[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const s = [];
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && s.push(o);
    return s;
  }, e.find = (a, s) => {
    for (const o of a)
      if (s(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function n(a, s = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (a, s) => typeof s == "bigint" ? s.toString() : s;
})($ || ($ = {}));
var tr;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(tr || (tr = {}));
const f = $.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Q = (e) => {
  switch (typeof e) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return isNaN(e) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(e) ? f.array : e === null ? f.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? f.promise : typeof Map < "u" && e instanceof Map ? f.map : typeof Set < "u" && e instanceof Set ? f.set : typeof Date < "u" && e instanceof Date ? f.date : f.object;
    default:
      return f.unknown;
  }
}, d = $.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), dh = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Z extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r = t || function(s) {
      return s.message;
    }, n = { _errors: [] }, a = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(a);
        else if (o.code === "invalid_return_type")
          a(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          a(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let c = n, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (c[u] = c[u] || { _errors: [] }, c[u]._errors.push(r(o))) : c[u] = c[u] || { _errors: [] }, c = c[u], l++;
          }
        }
    };
    return a(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const a of this.issues)
      a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(t(a))) : n.push(t(a));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Z.create = (e) => new Z(e);
const Oe = (e, t) => {
  let r;
  switch (e.code) {
    case d.invalid_type:
      e.received === f.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case d.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, $.jsonStringifyReplacer)}`;
      break;
    case d.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${$.joinValues(e.keys, ", ")}`;
      break;
    case d.invalid_union:
      r = "Invalid input";
      break;
    case d.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${$.joinValues(e.options)}`;
      break;
    case d.invalid_enum_value:
      r = `Invalid enum value. Expected ${$.joinValues(e.options)}, received '${e.received}'`;
      break;
    case d.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case d.invalid_return_type:
      r = "Invalid function return type";
      break;
    case d.invalid_date:
      r = "Invalid date";
      break;
    case d.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : $.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case d.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case d.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case d.custom:
      r = "Invalid input";
      break;
    case d.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case d.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case d.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, $.assertNever(e);
  }
  return { message: r };
};
let da = Oe;
function fh(e) {
  da = e;
}
function st() {
  return da;
}
const it = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: a } = e, s = [...r, ...a.path || []], o = {
    ...a,
    path: s
  };
  let c = "";
  const l = n.filter((u) => !!u).slice().reverse();
  for (const u of l)
    c = u(o, { data: t, defaultError: c }).message;
  return {
    ...a,
    path: s,
    message: a.message || c
  };
}, ph = [];
function p(e, t) {
  const r = it({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      st(),
      Oe
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class R {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const a of r) {
      if (a.status === "aborted")
        return m;
      a.status === "dirty" && t.dirty(), n.push(a.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const a of r)
      n.push({
        key: await a.key,
        value: await a.value
      });
    return R.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: s, value: o } = a;
      if (s.status === "aborted" || o.status === "aborted")
        return m;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (n[s.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const m = Object.freeze({
  status: "aborted"
}), fa = (e) => ({ status: "dirty", value: e }), N = (e) => ({ status: "valid", value: e }), rr = (e) => e.status === "aborted", nr = (e) => e.status === "dirty", je = (e) => e.status === "valid", ot = (e) => typeof Promise < "u" && e instanceof Promise;
var v;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(v || (v = {}));
class q {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const pn = (e, t) => {
  if (je(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Z(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function _(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (o, c) => o.code !== "invalid_type" ? { message: c.defaultError } : typeof c.data > "u" ? { message: n ?? c.defaultError } : { message: r ?? c.defaultError }, description: a };
}
class b {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Q(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Q(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new R(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Q(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (ot(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const a = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Q(t)
    }, s = this._parseSync({ data: t, path: a.path, parent: a });
    return pn(a, s);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Q(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), s = await (ot(a) ? a : Promise.resolve(a));
    return pn(n, s);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, s) => {
      const o = t(a), c = () => s.addIssue({
        code: d.custom,
        ...n(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (c(), !1)) : o ? !0 : (c(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new U({
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return z.create(this, this._def);
  }
  nullable() {
    return ce.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return D.create(this, this._def);
  }
  promise() {
    return ve.create(this, this._def);
  }
  or(t) {
    return Ie.create([this, t], this._def);
  }
  and(t) {
    return Ne.create(this, t, this._def);
  }
  transform(t) {
    return new U({
      ..._(this._def),
      schema: this,
      typeName: y.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ze({
      ..._(this._def),
      innerType: this,
      defaultValue: r,
      typeName: y.ZodDefault
    });
  }
  brand() {
    return new ha({
      typeName: y.ZodBranded,
      type: this,
      ..._(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new dt({
      ..._(this._def),
      innerType: this,
      catchValue: r,
      typeName: y.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return qe.create(this, t);
  }
  readonly() {
    return pt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const hh = /^c[^\s-]{8,}$/i, vh = /^[a-z][a-z0-9]*$/, yh = /^[0-9A-HJKMNP-TV-Z]{26}$/, gh = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, mh = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _h = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let zt;
const bh = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Th = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, $h = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Ah(e, t) {
  return !!((t === "v4" || !t) && bh.test(e) || (t === "v6" || !t) && Th.test(e));
}
class V extends b {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== f.string) {
      const s = this._getOrReturnCtx(t);
      return p(
        s,
        {
          code: d.invalid_type,
          expected: f.string,
          received: s.parsedType
        }
        //
      ), m;
    }
    const n = new R();
    let a;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, c = t.data.length < s.value;
        (o || c) && (a = this._getOrReturnCtx(t, a), o ? p(a, {
          code: d.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : c && p(a, {
          code: d.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        mh.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "email",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        zt || (zt = new RegExp(_h, "u")), zt.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "emoji",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        gh.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "uuid",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        hh.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "cuid",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        vh.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "cuid2",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        yh.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "ulid",
          code: d.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), p(a, {
            validation: "url",
            code: d.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "regex",
          code: d.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? $h(s).test(t.data) || (a = this._getOrReturnCtx(t, a), p(a, {
          code: d.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? Ah(t.data, s.version) || (a = this._getOrReturnCtx(t, a), p(a, {
          validation: "ip",
          code: d.invalid_string,
          message: s.message
        }), n.dirty()) : $.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: d.invalid_string,
      ...v.errToObj(n)
    });
  }
  _addCheck(t) {
    return new V({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...v.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...v.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...v.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...v.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...v.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...v.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...v.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...v.errToObj(t) });
  }
  datetime(t) {
    var r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
      ...v.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...v.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...v.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...v.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...v.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...v.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...v.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...v.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, v.errToObj(t));
  }
  trim() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new V({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
V.create = (e) => {
  var t;
  return new V({
    checks: [],
    typeName: y.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ..._(e)
  });
};
function Sh(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, s = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return s % o / Math.pow(10, a);
}
class J extends b {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== f.number) {
      const s = this._getOrReturnCtx(t);
      return p(s, {
        code: d.invalid_type,
        expected: f.number,
        received: s.parsedType
      }), m;
    }
    let n;
    const a = new R();
    for (const s of this._def.checks)
      s.kind === "int" ? $.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? Sh(t.data, s.value) !== 0 && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.not_finite,
        message: s.message
      }), a.dirty()) : $.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, v.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, v.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, v.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, v.toString(r));
  }
  setLimit(t, r, n, a) {
    return new J({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: v.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new J({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: v.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: v.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: v.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: v.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: v.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: v.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: v.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: v.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: v.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && $.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
J.create = (e) => new J({
  checks: [],
  typeName: y.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ..._(e)
});
class Y extends b {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== f.bigint) {
      const s = this._getOrReturnCtx(t);
      return p(s, {
        code: d.invalid_type,
        expected: f.bigint,
        received: s.parsedType
      }), m;
    }
    let n;
    const a = new R();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), p(n, {
        code: d.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty()) : $.assertNever(s);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, v.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, v.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, v.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, v.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Y({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: v.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: v.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: v.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: v.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Y.create = (e) => {
  var t;
  return new Y({
    checks: [],
    typeName: y.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ..._(e)
  });
};
class ke extends b {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== f.boolean) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.boolean,
        received: n.parsedType
      }), m;
    }
    return N(t.data);
  }
}
ke.create = (e) => new ke({
  typeName: y.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ..._(e)
});
class ie extends b {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== f.date) {
      const s = this._getOrReturnCtx(t);
      return p(s, {
        code: d.invalid_type,
        expected: f.date,
        received: s.parsedType
      }), m;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return p(s, {
        code: d.invalid_date
      }), m;
    }
    const n = new R();
    let a;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (a = this._getOrReturnCtx(t, a), p(a, {
        code: d.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (a = this._getOrReturnCtx(t, a), p(a, {
        code: d.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : $.assertNever(s);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ie({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: v.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: v.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
ie.create = (e) => new ie({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: y.ZodDate,
  ..._(e)
});
class ct extends b {
  _parse(t) {
    if (this._getType(t) !== f.symbol) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.symbol,
        received: n.parsedType
      }), m;
    }
    return N(t.data);
  }
}
ct.create = (e) => new ct({
  typeName: y.ZodSymbol,
  ..._(e)
});
class Ce extends b {
  _parse(t) {
    if (this._getType(t) !== f.undefined) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.undefined,
        received: n.parsedType
      }), m;
    }
    return N(t.data);
  }
}
Ce.create = (e) => new Ce({
  typeName: y.ZodUndefined,
  ..._(e)
});
class Re extends b {
  _parse(t) {
    if (this._getType(t) !== f.null) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.null,
        received: n.parsedType
      }), m;
    }
    return N(t.data);
  }
}
Re.create = (e) => new Re({
  typeName: y.ZodNull,
  ..._(e)
});
class he extends b {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return N(t.data);
  }
}
he.create = (e) => new he({
  typeName: y.ZodAny,
  ..._(e)
});
class se extends b {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return N(t.data);
  }
}
se.create = (e) => new se({
  typeName: y.ZodUnknown,
  ..._(e)
});
class K extends b {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return p(r, {
      code: d.invalid_type,
      expected: f.never,
      received: r.parsedType
    }), m;
  }
}
K.create = (e) => new K({
  typeName: y.ZodNever,
  ..._(e)
});
class ut extends b {
  _parse(t) {
    if (this._getType(t) !== f.undefined) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.void,
        received: n.parsedType
      }), m;
    }
    return N(t.data);
  }
}
ut.create = (e) => new ut({
  typeName: y.ZodVoid,
  ..._(e)
});
class D extends b {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== f.array)
      return p(r, {
        code: d.invalid_type,
        expected: f.array,
        received: r.parsedType
      }), m;
    if (a.exactLength !== null) {
      const o = r.data.length > a.exactLength.value, c = r.data.length < a.exactLength.value;
      (o || c) && (p(r, {
        code: o ? d.too_big : d.too_small,
        minimum: c ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (p(r, {
      code: d.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (p(r, {
      code: d.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, c) => a.type._parseAsync(new q(r, o, r.path, c)))).then((o) => R.mergeArray(n, o));
    const s = [...r.data].map((o, c) => a.type._parseSync(new q(r, o, r.path, c)));
    return R.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new D({
      ...this._def,
      minLength: { value: t, message: v.toString(r) }
    });
  }
  max(t, r) {
    return new D({
      ...this._def,
      maxLength: { value: t, message: v.toString(r) }
    });
  }
  length(t, r) {
    return new D({
      ...this._def,
      exactLength: { value: t, message: v.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
D.create = (e, t) => new D({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: y.ZodArray,
  ..._(t)
});
function fe(e) {
  if (e instanceof x) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = z.create(fe(n));
    }
    return new x({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof D ? new D({
      ...e._def,
      type: fe(e.element)
    }) : e instanceof z ? z.create(fe(e.unwrap())) : e instanceof ce ? ce.create(fe(e.unwrap())) : e instanceof H ? H.create(e.items.map((t) => fe(t))) : e;
}
class x extends b {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = $.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== f.object) {
      const u = this._getOrReturnCtx(t);
      return p(u, {
        code: d.invalid_type,
        expected: f.object,
        received: u.parsedType
      }), m;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), c = [];
    if (!(this._def.catchall instanceof K && this._def.unknownKeys === "strip"))
      for (const u in a.data)
        o.includes(u) || c.push(u);
    const l = [];
    for (const u of o) {
      const h = s[u], T = a.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: h._parse(new q(a, T, a.path, u)),
        alwaysSet: u in a.data
      });
    }
    if (this._def.catchall instanceof K) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const h of c)
          l.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: a.data[h] }
          });
      else if (u === "strict")
        c.length > 0 && (p(a, {
          code: d.unrecognized_keys,
          keys: c
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const h of c) {
        const T = a.data[h];
        l.push({
          key: { status: "valid", value: h },
          value: u._parse(
            new q(a, T, a.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const h of l) {
        const T = await h.key;
        u.push({
          key: T,
          value: await h.value,
          alwaysSet: h.alwaysSet
        });
      }
      return u;
    }).then((u) => R.mergeObjectSync(n, u)) : R.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return v.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, s, o, c;
          const l = (o = (s = (a = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(a, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (c = v.errToObj(t).message) !== null && c !== void 0 ? c : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new x({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new x({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: y.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new x({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return $.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return fe(this);
  }
  partial(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return $.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof z; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return pa($.objectKeys(this.shape));
  }
}
x.create = (e, t) => new x({
  shape: () => e,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: y.ZodObject,
  ..._(t)
});
x.strictCreate = (e, t) => new x({
  shape: () => e,
  unknownKeys: "strict",
  catchall: K.create(),
  typeName: y.ZodObject,
  ..._(t)
});
x.lazycreate = (e, t) => new x({
  shape: e,
  unknownKeys: "strip",
  catchall: K.create(),
  typeName: y.ZodObject,
  ..._(t)
});
class Ie extends b {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(s) {
      for (const c of s)
        if (c.result.status === "valid")
          return c.result;
      for (const c of s)
        if (c.result.status === "dirty")
          return r.common.issues.push(...c.ctx.common.issues), c.result;
      const o = s.map((c) => new Z(c.ctx.common.issues));
      return p(r, {
        code: d.invalid_union,
        unionErrors: o
      }), m;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(a);
    {
      let s;
      const o = [];
      for (const l of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, h = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !s && (s = { result: h, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const c = o.map((l) => new Z(l));
      return p(r, {
        code: d.invalid_union,
        unionErrors: c
      }), m;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ie.create = (e, t) => new Ie({
  options: e,
  typeName: y.ZodUnion,
  ..._(t)
});
const tt = (e) => e instanceof Le ? tt(e.schema) : e instanceof U ? tt(e.innerType()) : e instanceof Me ? [e.value] : e instanceof X ? e.options : e instanceof Ve ? Object.keys(e.enum) : e instanceof Ze ? tt(e._def.innerType) : e instanceof Ce ? [void 0] : e instanceof Re ? [null] : null;
class Ot extends b {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.object)
      return p(r, {
        code: d.invalid_type,
        expected: f.object,
        received: r.parsedType
      }), m;
    const n = this.discriminator, a = r.data[n], s = this.optionsMap.get(a);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (p(r, {
      code: d.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), m);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, r, n) {
    const a = /* @__PURE__ */ new Map();
    for (const s of r) {
      const o = tt(s.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const c of o) {
        if (a.has(c))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(c)}`);
        a.set(c, s);
      }
    }
    return new Ot({
      typeName: y.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ..._(n)
    });
  }
}
function ar(e, t) {
  const r = Q(e), n = Q(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === f.object && n === f.object) {
    const a = $.objectKeys(t), s = $.objectKeys(e).filter((c) => a.indexOf(c) !== -1), o = { ...e, ...t };
    for (const c of s) {
      const l = ar(e[c], t[c]);
      if (!l.valid)
        return { valid: !1 };
      o[c] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === f.array && n === f.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], c = t[s], l = ar(o, c);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else
    return r === f.date && n === f.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ne extends b {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (s, o) => {
      if (rr(s) || rr(o))
        return m;
      const c = ar(s.value, o.value);
      return c.valid ? ((nr(s) || nr(o)) && r.dirty(), { status: r.value, value: c.data }) : (p(n, {
        code: d.invalid_intersection_types
      }), m);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, o]) => a(s, o)) : a(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Ne.create = (e, t, r) => new Ne({
  left: e,
  right: t,
  typeName: y.ZodIntersection,
  ..._(r)
});
class H extends b {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.array)
      return p(n, {
        code: d.invalid_type,
        expected: f.array,
        received: n.parsedType
      }), m;
    if (n.data.length < this._def.items.length)
      return p(n, {
        code: d.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), m;
    !this._def.rest && n.data.length > this._def.items.length && (p(n, {
      code: d.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((o, c) => {
      const l = this._def.items[c] || this._def.rest;
      return l ? l._parse(new q(n, o, n.path, c)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(s).then((o) => R.mergeArray(r, o)) : R.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new H({
      ...this._def,
      rest: t
    });
  }
}
H.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new H({
    items: e,
    typeName: y.ZodTuple,
    rest: null,
    ..._(t)
  });
};
class Pe extends b {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.object)
      return p(n, {
        code: d.invalid_type,
        expected: f.object,
        received: n.parsedType
      }), m;
    const a = [], s = this._def.keyType, o = this._def.valueType;
    for (const c in n.data)
      a.push({
        key: s._parse(new q(n, c, n.path, c)),
        value: o._parse(new q(n, n.data[c], n.path, c))
      });
    return n.common.async ? R.mergeObjectAsync(r, a) : R.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof b ? new Pe({
      keyType: t,
      valueType: r,
      typeName: y.ZodRecord,
      ..._(n)
    }) : new Pe({
      keyType: V.create(),
      valueType: t,
      typeName: y.ZodRecord,
      ..._(r)
    });
  }
}
class lt extends b {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.map)
      return p(n, {
        code: d.invalid_type,
        expected: f.map,
        received: n.parsedType
      }), m;
    const a = this._def.keyType, s = this._def.valueType, o = [...n.data.entries()].map(([c, l], u) => ({
      key: a._parse(new q(n, c, n.path, [u, "key"])),
      value: s._parse(new q(n, l, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, h = await l.value;
          if (u.status === "aborted" || h.status === "aborted")
            return m;
          (u.status === "dirty" || h.status === "dirty") && r.dirty(), c.set(u.value, h.value);
        }
        return { status: r.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, h = l.value;
        if (u.status === "aborted" || h.status === "aborted")
          return m;
        (u.status === "dirty" || h.status === "dirty") && r.dirty(), c.set(u.value, h.value);
      }
      return { status: r.value, value: c };
    }
  }
}
lt.create = (e, t, r) => new lt({
  valueType: t,
  keyType: e,
  typeName: y.ZodMap,
  ..._(r)
});
class oe extends b {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== f.set)
      return p(n, {
        code: d.invalid_type,
        expected: f.set,
        received: n.parsedType
      }), m;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (p(n, {
      code: d.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (p(n, {
      code: d.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const h of l) {
        if (h.status === "aborted")
          return m;
        h.status === "dirty" && r.dirty(), u.add(h.value);
      }
      return { status: r.value, value: u };
    }
    const c = [...n.data.values()].map((l, u) => s._parse(new q(n, l, n.path, u)));
    return n.common.async ? Promise.all(c).then((l) => o(l)) : o(c);
  }
  min(t, r) {
    return new oe({
      ...this._def,
      minSize: { value: t, message: v.toString(r) }
    });
  }
  max(t, r) {
    return new oe({
      ...this._def,
      maxSize: { value: t, message: v.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
oe.create = (e, t) => new oe({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: y.ZodSet,
  ..._(t)
});
class pe extends b {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.function)
      return p(r, {
        code: d.invalid_type,
        expected: f.function,
        received: r.parsedType
      }), m;
    function n(c, l) {
      return it({
        data: c,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          st(),
          Oe
        ].filter((u) => !!u),
        issueData: {
          code: d.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function a(c, l) {
      return it({
        data: c,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          st(),
          Oe
        ].filter((u) => !!u),
        issueData: {
          code: d.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof ve) {
      const c = this;
      return N(async function(...l) {
        const u = new Z([]), h = await c._def.args.parseAsync(l, s).catch((C) => {
          throw u.addIssue(n(l, C)), u;
        }), T = await Reflect.apply(o, this, h);
        return await c._def.returns._def.type.parseAsync(T, s).catch((C) => {
          throw u.addIssue(a(T, C)), u;
        });
      });
    } else {
      const c = this;
      return N(function(...l) {
        const u = c._def.args.safeParse(l, s);
        if (!u.success)
          throw new Z([n(l, u.error)]);
        const h = Reflect.apply(o, this, u.data), T = c._def.returns.safeParse(h, s);
        if (!T.success)
          throw new Z([a(h, T.error)]);
        return T.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new pe({
      ...this._def,
      args: H.create(t).rest(se.create())
    });
  }
  returns(t) {
    return new pe({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new pe({
      args: t || H.create([]).rest(se.create()),
      returns: r || se.create(),
      typeName: y.ZodFunction,
      ..._(n)
    });
  }
}
class Le extends b {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Le.create = (e, t) => new Le({
  getter: e,
  typeName: y.ZodLazy,
  ..._(t)
});
class Me extends b {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return p(r, {
        received: r.data,
        code: d.invalid_literal,
        expected: this._def.value
      }), m;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Me.create = (e, t) => new Me({
  value: e,
  typeName: y.ZodLiteral,
  ..._(t)
});
function pa(e, t) {
  return new X({
    values: e,
    typeName: y.ZodEnum,
    ..._(t)
  });
}
class X extends b {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return p(r, {
        expected: $.joinValues(n),
        received: r.parsedType,
        code: d.invalid_type
      }), m;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return p(r, {
        received: r.data,
        code: d.invalid_enum_value,
        options: n
      }), m;
    }
    return N(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t) {
    return X.create(t);
  }
  exclude(t) {
    return X.create(this.options.filter((r) => !t.includes(r)));
  }
}
X.create = pa;
class Ve extends b {
  _parse(t) {
    const r = $.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== f.string && n.parsedType !== f.number) {
      const a = $.objectValues(r);
      return p(n, {
        expected: $.joinValues(a),
        received: n.parsedType,
        code: d.invalid_type
      }), m;
    }
    if (r.indexOf(t.data) === -1) {
      const a = $.objectValues(r);
      return p(n, {
        received: n.data,
        code: d.invalid_enum_value,
        options: a
      }), m;
    }
    return N(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ve.create = (e, t) => new Ve({
  values: e,
  typeName: y.ZodNativeEnum,
  ..._(t)
});
class ve extends b {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== f.promise && r.common.async === !1)
      return p(r, {
        code: d.invalid_type,
        expected: f.promise,
        received: r.parsedType
      }), m;
    const n = r.parsedType === f.promise ? r.data : Promise.resolve(r.data);
    return N(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ve.create = (e, t) => new ve({
  type: e,
  typeName: y.ZodPromise,
  ..._(t)
});
class U extends b {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, s = {
      addIssue: (o) => {
        p(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      const o = a.transform(n.data, s);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(o).then((c) => this._def.schema._parseAsync({
        data: c,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
    }
    if (a.type === "refinement") {
      const o = (c) => {
        const l = a.refinement(c, s);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (n.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return c.status === "aborted" ? m : (c.status === "dirty" && r.dirty(), o(c.value), { status: r.value, value: c.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((c) => c.status === "aborted" ? m : (c.status === "dirty" && r.dirty(), o(c.value).then(() => ({ status: r.value, value: c.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!je(o))
          return o;
        const c = a.transform(o.value, s);
        if (c instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: c };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => je(o) ? Promise.resolve(a.transform(o.value, s)).then((c) => ({ status: r.value, value: c })) : o);
    $.assertNever(a);
  }
}
U.create = (e, t, r) => new U({
  schema: e,
  typeName: y.ZodEffects,
  effect: t,
  ..._(r)
});
U.createWithPreprocess = (e, t, r) => new U({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: y.ZodEffects,
  ..._(r)
});
class z extends b {
  _parse(t) {
    return this._getType(t) === f.undefined ? N(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
z.create = (e, t) => new z({
  innerType: e,
  typeName: y.ZodOptional,
  ..._(t)
});
class ce extends b {
  _parse(t) {
    return this._getType(t) === f.null ? N(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ce.create = (e, t) => new ce({
  innerType: e,
  typeName: y.ZodNullable,
  ..._(t)
});
class Ze extends b {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === f.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ze.create = (e, t) => new Ze({
  innerType: e,
  typeName: y.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ..._(t)
});
class dt extends b {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return ot(a) ? a.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Z(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
dt.create = (e, t) => new dt({
  innerType: e,
  typeName: y.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ..._(t)
});
class ft extends b {
  _parse(t) {
    if (this._getType(t) !== f.nan) {
      const n = this._getOrReturnCtx(t);
      return p(n, {
        code: d.invalid_type,
        expected: f.nan,
        received: n.parsedType
      }), m;
    }
    return { status: "valid", value: t.data };
  }
}
ft.create = (e) => new ft({
  typeName: y.ZodNaN,
  ..._(e)
});
const wh = Symbol("zod_brand");
class ha extends b {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class qe extends b {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? m : s.status === "dirty" ? (r.dirty(), fa(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return a.status === "aborted" ? m : a.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new qe({
      in: t,
      out: r,
      typeName: y.ZodPipeline
    });
  }
}
class pt extends b {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return je(r) && (r.value = Object.freeze(r.value)), r;
  }
}
pt.create = (e, t) => new pt({
  innerType: e,
  typeName: y.ZodReadonly,
  ..._(t)
});
const va = (e, t = {}, r) => e ? he.create().superRefine((n, a) => {
  var s, o;
  if (!e(n)) {
    const c = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, l = (o = (s = c.fatal) !== null && s !== void 0 ? s : r) !== null && o !== void 0 ? o : !0, u = typeof c == "string" ? { message: c } : c;
    a.addIssue({ code: "custom", ...u, fatal: l });
  }
}) : he.create(), xh = {
  object: x.lazycreate
};
var y;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(y || (y = {}));
const Eh = (e, t = {
  message: `Input not instance of ${e.name}`
}) => va((r) => r instanceof e, t), ya = V.create, ga = J.create, Oh = ft.create, jh = Y.create, ma = ke.create, kh = ie.create, Ch = ct.create, Rh = Ce.create, Ih = Re.create, Nh = he.create, Ph = se.create, Lh = K.create, Mh = ut.create, Vh = D.create, Zh = x.create, Dh = x.strictCreate, Uh = Ie.create, qh = Ot.create, Hh = Ne.create, Bh = H.create, Gh = Pe.create, zh = lt.create, Kh = oe.create, Fh = pe.create, Qh = Le.create, Wh = Me.create, Jh = X.create, Yh = Ve.create, Xh = ve.create, hn = U.create, ev = z.create, tv = ce.create, rv = U.createWithPreprocess, nv = qe.create, av = () => ya().optional(), sv = () => ga().optional(), iv = () => ma().optional(), ov = {
  string: (e) => V.create({ ...e, coerce: !0 }),
  number: (e) => J.create({ ...e, coerce: !0 }),
  boolean: (e) => ke.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Y.create({ ...e, coerce: !0 }),
  date: (e) => ie.create({ ...e, coerce: !0 })
}, cv = m;
var i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Oe,
  setErrorMap: fh,
  getErrorMap: st,
  makeIssue: it,
  EMPTY_PATH: ph,
  addIssueToContext: p,
  ParseStatus: R,
  INVALID: m,
  DIRTY: fa,
  OK: N,
  isAborted: rr,
  isDirty: nr,
  isValid: je,
  isAsync: ot,
  get util() {
    return $;
  },
  get objectUtil() {
    return tr;
  },
  ZodParsedType: f,
  getParsedType: Q,
  ZodType: b,
  ZodString: V,
  ZodNumber: J,
  ZodBigInt: Y,
  ZodBoolean: ke,
  ZodDate: ie,
  ZodSymbol: ct,
  ZodUndefined: Ce,
  ZodNull: Re,
  ZodAny: he,
  ZodUnknown: se,
  ZodNever: K,
  ZodVoid: ut,
  ZodArray: D,
  ZodObject: x,
  ZodUnion: Ie,
  ZodDiscriminatedUnion: Ot,
  ZodIntersection: Ne,
  ZodTuple: H,
  ZodRecord: Pe,
  ZodMap: lt,
  ZodSet: oe,
  ZodFunction: pe,
  ZodLazy: Le,
  ZodLiteral: Me,
  ZodEnum: X,
  ZodNativeEnum: Ve,
  ZodPromise: ve,
  ZodEffects: U,
  ZodTransformer: U,
  ZodOptional: z,
  ZodNullable: ce,
  ZodDefault: Ze,
  ZodCatch: dt,
  ZodNaN: ft,
  BRAND: wh,
  ZodBranded: ha,
  ZodPipeline: qe,
  ZodReadonly: pt,
  custom: va,
  Schema: b,
  ZodSchema: b,
  late: xh,
  get ZodFirstPartyTypeKind() {
    return y;
  },
  coerce: ov,
  any: Nh,
  array: Vh,
  bigint: jh,
  boolean: ma,
  date: kh,
  discriminatedUnion: qh,
  effect: hn,
  enum: Jh,
  function: Fh,
  instanceof: Eh,
  intersection: Hh,
  lazy: Qh,
  literal: Wh,
  map: zh,
  nan: Oh,
  nativeEnum: Yh,
  never: Lh,
  null: Ih,
  nullable: tv,
  number: ga,
  object: Zh,
  oboolean: iv,
  onumber: sv,
  optional: ev,
  ostring: av,
  pipeline: nv,
  preprocess: rv,
  promise: Xh,
  record: Gh,
  set: Kh,
  strictObject: Dh,
  string: ya,
  symbol: Ch,
  transformer: hn,
  tuple: Bh,
  undefined: Rh,
  union: Uh,
  unknown: Ph,
  void: Mh,
  NEVER: cv,
  ZodIssueCode: d,
  quotelessJson: dh,
  ZodError: Z
}), P = (e) => e, uv = class {
  /**
   * @package
   */
  constructor(e, t, r) {
    this.versionMap = e, this.latestVersion = t, this.getVersion = r;
  }
  /**
   * Returns whether the given data is a valid entity of any version of the entity.
   * @param data The data to check
   * @returns Whether the given data is a valid entity of any version of the entity.
   */
  is(e) {
    let t = this.getVersion(e);
    if (t === null)
      return !1;
    const r = this.versionMap[t];
    return r ? r.schema.safeParse(e).success : !1;
  }
  /**
   * Returns whether the given data is a valid entity of the latest version of the entity.
   * @param data The data to check
   * @returns Whether the given data is a valid entity of the latest version of the entity.
   */
  isLatest(e) {
    return this.versionMap[this.latestVersion].schema.safeParse(e).success;
  }
  /**
   * Similar to Zod's `safeParse` method, but also migrates the data to the latest version.
   * @param data The data to parse
   * @returns The result from parsing data, if successful, older versions are migrated to the latest version
   */
  safeParse(e) {
    const t = this.getVersion(e);
    if (t === null)
      return { type: "err", error: { type: "VER_CHECK_FAIL" } };
    const r = this.versionMap[t];
    if (!r)
      return { type: "err", error: { type: "INVALID_VER" } };
    const n = r.schema.safeParse(e);
    if (!n.success)
      return {
        type: "err",
        error: {
          type: "GIVEN_VER_VALIDATION_FAIL",
          version: t,
          versionDef: r,
          error: n.error
        }
      };
    let a = e;
    for (let s = t + 1; s <= this.latestVersion; s++) {
      const o = this.versionMap[s];
      if (!o)
        return {
          type: "err",
          error: { type: "BUG_NO_INTERMEDIATE_FOUND", missingVer: s }
        };
      if (o.initial)
        return {
          type: "err",
          error: { type: "BUG_INTERMEDIATE_MARKED_INITIAL", ver: s }
        };
      a = o.up(a);
    }
    return { type: "ok", value: a };
  }
};
function jt(e) {
  return new uv(e.versionMap, e.latestVersion, e.getVersion);
}
function ht(e) {
  return i.custom((t) => e.is(t)).transform((t) => {
    const r = e.safeParse(t);
    if (r.type !== "ok")
      throw new Error(
        "Invalid entity definition. `entity.is` returned success, safeParse failed."
      );
    return r.value;
  });
}
const lv = i.object({
  id: i.optional(i.string()),
  // Firebase Firestore ID
  url: i.string(),
  path: i.string(),
  headers: i.array(
    i.object({
      key: i.string(),
      value: i.string(),
      active: i.boolean()
    })
  ),
  params: i.array(
    i.object({
      key: i.string(),
      value: i.string(),
      active: i.boolean()
    })
  ),
  name: i.string(),
  method: i.string(),
  preRequestScript: i.string(),
  testScript: i.string(),
  contentType: i.string(),
  body: i.string(),
  rawParams: i.optional(i.string()),
  auth: i.optional(i.string()),
  httpUser: i.optional(i.string()),
  httpPassword: i.optional(i.string()),
  bearerToken: i.optional(i.string())
}), vn = P({
  initial: !0,
  schema: lv
}), _a = i.object({
  key: i.string(),
  active: i.boolean()
}).and(
  i.union([
    i.object({
      isFile: i.literal(!0),
      value: i.array(i.instanceof(Blob).nullable())
    }),
    i.object({
      isFile: i.literal(!1),
      value: i.string()
    })
  ])
), Tm = i.object({
  contentType: i.literal("multipart/form-data"),
  body: i.array(_a)
}), ba = i.union([
  i.object({
    contentType: i.literal(null),
    body: i.literal(null).catch(null)
  }),
  i.object({
    contentType: i.literal("multipart/form-data"),
    body: i.array(_a).catch([])
  }),
  i.object({
    contentType: i.union([
      i.literal("application/json"),
      i.literal("application/ld+json"),
      i.literal("application/hal+json"),
      i.literal("application/vnd.api+json"),
      i.literal("application/xml"),
      i.literal("application/x-www-form-urlencoded"),
      i.literal("text/html"),
      i.literal("text/plain")
    ]),
    body: i.string().catch("")
  })
]), kt = i.object({
  authType: i.literal("none")
}), Ct = i.object({
  authType: i.literal("basic"),
  username: i.string().catch(""),
  password: i.string().catch("")
}), Rt = i.object({
  authType: i.literal("bearer"),
  token: i.string().catch("")
}), dv = i.object({
  authType: i.literal("oauth-2"),
  token: i.string().catch(""),
  oidcDiscoveryURL: i.string().catch(""),
  authURL: i.string().catch(""),
  accessTokenURL: i.string().catch(""),
  clientID: i.string().catch(""),
  scope: i.string().catch("")
}), br = i.object({
  authType: i.literal("api-key"),
  key: i.string().catch(""),
  value: i.string().catch(""),
  addTo: i.string().catch("Headers")
}), It = i.object({
  authType: i.literal("inherit")
}), fv = i.discriminatedUnion("authType", [
  kt,
  It,
  Ct,
  Rt,
  dv,
  br
]).and(
  i.object({
    authActive: i.boolean()
  })
), Ta = i.array(
  i.object({
    key: i.string().catch(""),
    value: i.string().catch(""),
    active: i.boolean().catch(!0)
  })
), Tr = i.array(
  i.object({
    key: i.string().catch(""),
    value: i.string().catch(""),
    active: i.boolean().catch(!0)
  })
), $a = i.object({
  v: i.literal("1"),
  id: i.optional(i.string()),
  // Firebase Firestore ID
  name: i.string(),
  method: i.string(),
  endpoint: i.string(),
  params: Ta,
  headers: Tr,
  preRequestScript: i.string().catch(""),
  testScript: i.string().catch(""),
  auth: fv,
  body: ba
});
function pv(e) {
  return {
    contentType: "application/json",
    body: e.contentType === "application/json" ? e.rawParams ?? "" : ""
  };
}
function hv(e) {
  return !e.auth || e.auth === "None" ? {
    authType: "none",
    authActive: !0
  } : e.auth === "Basic Auth" ? {
    authType: "basic",
    authActive: !0,
    username: e.httpUser ?? "",
    password: e.httpPassword ?? ""
  } : e.auth === "Bearer Token" ? {
    authType: "bearer",
    authActive: !0,
    token: e.bearerToken ?? ""
  } : { authType: "none", authActive: !0 };
}
const vv = P({
  initial: !1,
  schema: $a,
  up(e) {
    const {
      url: t,
      path: r,
      headers: n,
      params: a,
      name: s,
      method: o,
      preRequestScript: c,
      testScript: l
    } = e, u = `${t}${r}`, h = pv(e), T = hv(e), A = {
      v: "1",
      endpoint: u,
      headers: n,
      params: a,
      name: s,
      method: o,
      preRequestScript: c,
      testScript: l,
      body: h,
      auth: T
    };
    return e.id && (A.id = e.id), A;
  }
}), Aa = i.array(
  i.object({
    key: i.string().catch(""),
    value: i.string().catch(""),
    active: i.boolean().catch(!0)
  })
), Sa = $a.extend({
  v: i.literal("2"),
  requestVariables: Aa
}), yv = P({
  initial: !1,
  schema: Sa,
  up(e) {
    return {
      ...e,
      v: "2",
      requestVariables: []
    };
  }
}), wa = i.object({
  grantType: i.literal("AUTHORIZATION_CODE"),
  authEndpoint: i.string().trim(),
  tokenEndpoint: i.string().trim(),
  clientID: i.string().trim(),
  clientSecret: i.string().trim(),
  scopes: i.string().trim().optional(),
  token: i.string().catch(""),
  isPKCE: i.boolean(),
  codeVerifierMethod: i.union([i.literal("plain"), i.literal("S256")]).optional()
}), xa = i.object({
  grantType: i.literal("CLIENT_CREDENTIALS"),
  authEndpoint: i.string().trim(),
  clientID: i.string().trim(),
  clientSecret: i.string().trim(),
  scopes: i.string().trim().optional(),
  token: i.string().catch("")
}), Ea = i.object({
  grantType: i.literal("PASSWORD"),
  authEndpoint: i.string().trim(),
  clientID: i.string().trim(),
  clientSecret: i.string().trim(),
  scopes: i.string().trim().optional(),
  username: i.string().trim(),
  password: i.string().trim(),
  token: i.string().catch("")
}), Oa = i.object({
  grantType: i.literal("IMPLICIT"),
  authEndpoint: i.string().trim(),
  clientID: i.string().trim(),
  scopes: i.string().trim().optional(),
  token: i.string().catch("")
}), $r = i.object({
  authType: i.literal("oauth-2"),
  grantTypeInfo: i.discriminatedUnion("grantType", [
    wa,
    xa,
    Ea,
    Oa
  ]),
  addTo: i.enum(["HEADERS", "QUERY_PARAMS"]).catch("HEADERS")
}), gv = i.discriminatedUnion("authType", [
  kt,
  It,
  Ct,
  Rt,
  $r,
  br
]).and(
  i.object({
    authActive: i.boolean()
  })
), ja = Sa.extend({
  v: i.literal("3"),
  auth: gv
}), mv = P({
  initial: !1,
  schema: ja,
  up(e) {
    if (e.auth.authType === "oauth-2") {
      const { token: t, accessTokenURL: r, scope: n, clientID: a, authURL: s } = e.auth;
      return {
        ...e,
        v: "3",
        auth: {
          ...e.auth,
          authType: "oauth-2",
          grantTypeInfo: {
            grantType: "AUTHORIZATION_CODE",
            authEndpoint: s,
            tokenEndpoint: r,
            clientID: a,
            clientSecret: "",
            scopes: n,
            isPKCE: !1,
            token: t
          },
          addTo: "HEADERS"
        }
      };
    }
    return {
      ...e,
      v: "3",
      auth: {
        ...e.auth
      }
    };
  }
}), ka = br.extend({
  addTo: i.enum(["HEADERS", "QUERY_PARAMS"]).catch("HEADERS")
}), _v = i.discriminatedUnion("authType", [
  kt,
  It,
  Ct,
  Rt,
  $r,
  ka
]).and(
  i.object({
    authActive: i.boolean()
  })
), Ca = ja.extend({
  v: i.literal("4"),
  auth: _v
}), bv = P({
  schema: Ca,
  initial: !1,
  up(e) {
    return e.auth.authType === "api-key" ? {
      ...e,
      v: "4",
      auth: {
        ...e.auth,
        addTo: e.auth.addTo === "Query params" ? "QUERY_PARAMS" : "HEADERS"
      }
    } : {
      ...e,
      auth: {
        ...e.auth
      },
      v: "4"
    };
  }
}), Tv = wa.extend({
  clientSecret: i.string().optional()
}), Nt = $r.extend({
  grantTypeInfo: i.discriminatedUnion("grantType", [
    Tv,
    xa,
    Ea,
    Oa
  ])
}), Ar = i.discriminatedUnion("authType", [
  kt,
  It,
  Ct,
  Rt,
  Nt,
  ka
]).and(
  i.object({
    authActive: i.boolean()
  })
), $v = Ca.extend({
  v: i.literal("5"),
  auth: Ar
}), Av = P({
  schema: $v,
  initial: !1,
  up(e) {
    return {
      ...e,
      v: "5"
    };
  }
});
var Sv = "__lodash_hash_undefined__";
function wv(e) {
  return this.__data__.set(e, Sv), this;
}
var xv = wv;
function Ev(e) {
  return this.__data__.has(e);
}
var Ov = Ev, jv = Bn, kv = xv, Cv = Ov;
function vt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new jv(); ++t < r; )
    this.add(e[t]);
}
vt.prototype.add = vt.prototype.push = kv;
vt.prototype.has = Cv;
var Rv = vt;
function Iv(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Nv = Iv;
function Pv(e, t) {
  return e.has(t);
}
var Lv = Pv, Mv = Rv, Vv = Nv, Zv = Lv, Dv = 1, Uv = 2;
function qv(e, t, r, n, a, s) {
  var o = r & Dv, c = e.length, l = t.length;
  if (c != l && !(o && l > c))
    return !1;
  var u = s.get(e), h = s.get(t);
  if (u && h)
    return u == t && h == e;
  var T = -1, A = !0, C = r & Uv ? new Mv() : void 0;
  for (s.set(e, t), s.set(t, e); ++T < c; ) {
    var L = e[T], M = t[T];
    if (n)
      var k = o ? n(M, L, T, t, e, s) : n(L, M, T, e, t, s);
    if (k !== void 0) {
      if (k)
        continue;
      A = !1;
      break;
    }
    if (C) {
      if (!Vv(t, function(I, ne) {
        if (!Zv(C, ne) && (L === I || a(L, I, r, n, s)))
          return C.push(ne);
      })) {
        A = !1;
        break;
      }
    } else if (!(L === M || a(L, M, r, n, s))) {
      A = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), A;
}
var Ra = qv;
function Hv(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var Bv = Hv;
function Gv(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var zv = Gv, yn = Tt, gn = oa, Kv = lr, Fv = Ra, Qv = Bv, Wv = zv, Jv = 1, Yv = 2, Xv = "[object Boolean]", ey = "[object Date]", ty = "[object Error]", ry = "[object Map]", ny = "[object Number]", ay = "[object RegExp]", sy = "[object Set]", iy = "[object String]", oy = "[object Symbol]", cy = "[object ArrayBuffer]", uy = "[object DataView]", mn = yn ? yn.prototype : void 0, Kt = mn ? mn.valueOf : void 0;
function ly(e, t, r, n, a, s, o) {
  switch (r) {
    case uy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case cy:
      return !(e.byteLength != t.byteLength || !s(new gn(e), new gn(t)));
    case Xv:
    case ey:
    case ny:
      return Kv(+e, +t);
    case ty:
      return e.name == t.name && e.message == t.message;
    case ay:
    case iy:
      return e == t + "";
    case ry:
      var c = Qv;
    case sy:
      var l = n & Jv;
      if (c || (c = Wv), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Yv, o.set(e, t);
      var h = Fv(c(e), c(t), n, a, s, o);
      return o.delete(e), h;
    case oy:
      if (Kt)
        return Kt.call(e) == Kt.call(t);
  }
  return !1;
}
var dy = ly, _n = sa, fy = 1, py = Object.prototype, hy = py.hasOwnProperty;
function vy(e, t, r, n, a, s) {
  var o = r & fy, c = _n(e), l = c.length, u = _n(t), h = u.length;
  if (l != h && !o)
    return !1;
  for (var T = l; T--; ) {
    var A = c[T];
    if (!(o ? A in t : hy.call(t, A)))
      return !1;
  }
  var C = s.get(e), L = s.get(t);
  if (C && L)
    return C == t && L == e;
  var M = !0;
  s.set(e, t), s.set(t, e);
  for (var k = o; ++T < l; ) {
    A = c[T];
    var I = e[A], ne = t[A];
    if (n)
      var Zr = o ? n(ne, I, A, t, e, s) : n(I, ne, A, e, t, s);
    if (!(Zr === void 0 ? I === ne || a(I, ne, r, n, s) : Zr)) {
      M = !1;
      break;
    }
    k || (k = A == "constructor");
  }
  if (M && !k) {
    var We = e.constructor, Je = t.constructor;
    We != Je && "constructor" in e && "constructor" in t && !(typeof We == "function" && We instanceof We && typeof Je == "function" && Je instanceof Je) && (M = !1);
  }
  return s.delete(e), s.delete(t), M;
}
var yy = vy, Ft = Gn, gy = Ra, my = dy, _y = yy, bn = Et, Tn = xt, $n = fr, by = Wn, Ty = 1, An = "[object Arguments]", Sn = "[object Array]", Xe = "[object Object]", $y = Object.prototype, wn = $y.hasOwnProperty;
function Ay(e, t, r, n, a, s) {
  var o = Tn(e), c = Tn(t), l = o ? Sn : bn(e), u = c ? Sn : bn(t);
  l = l == An ? Xe : l, u = u == An ? Xe : u;
  var h = l == Xe, T = u == Xe, A = l == u;
  if (A && $n(e)) {
    if (!$n(t))
      return !1;
    o = !0, h = !1;
  }
  if (A && !h)
    return s || (s = new Ft()), o || by(e) ? gy(e, t, r, n, a, s) : my(e, t, l, r, n, a, s);
  if (!(r & Ty)) {
    var C = h && wn.call(e, "__wrapped__"), L = T && wn.call(t, "__wrapped__");
    if (C || L) {
      var M = C ? e.value() : e, k = L ? t.value() : t;
      return s || (s = new Ft()), a(M, k, r, n, s);
    }
  }
  return A ? (s || (s = new Ft()), _y(e, t, r, n, a, s)) : !1;
}
var Sy = Ay, wy = Sy, xn = Se;
function Ia(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !xn(e) && !xn(t) ? e !== e && t !== t : wy(e, t, r, n, Ia, a);
}
var xy = Ia, Ey = xy;
function Oy(e, t) {
  return Ey(e, t);
}
var jy = Oy;
const ky = /* @__PURE__ */ Zn(jy), Cy = (e) => ({
  equals(t, r) {
    return t !== void 0 && r !== void 0 ? e.equals(t, r) : t === void 0 && r === void 0;
  }
}), Qt = (e, t) => ({
  equals(r, n) {
    return t.equals(e(r), e(n));
  }
}), Ee = {
  equals(e, t) {
    return ky(e, t);
  }
}, Ry = {
  "application/json": "json",
  "application/ld+json": "json",
  "application/hal+json": "json",
  "application/vnd.api+json": "json",
  "application/xml": "xml",
  "application/x-www-form-urlencoded": "multipart",
  "multipart/form-data": "multipart",
  "text/html": "html",
  "text/plain": "plain"
}, $m = Object.keys(Ry), Iy = i.object({
  // v is a stringified number
  v: i.string().regex(/^\d+$/).transform(Number)
}), Pt = jt({
  latestVersion: 5,
  versionMap: {
    0: vn,
    1: vv,
    2: yv,
    3: mv,
    4: bv,
    5: Av
  },
  getVersion(e) {
    const t = Iy.safeParse(e);
    return t.success ? t.data.v : vn.schema.safeParse(e).success ? 0 : null;
  }
}), Ny = ys({
  id: Cy(F),
  v: F,
  auth: Ee,
  body: Ee,
  endpoint: F,
  headers: Qt(
    (e) => e.filter((t) => t.key !== "" && t.value !== ""),
    Ee
  ),
  params: Qt(
    (e) => e.filter((t) => t.key !== "" && t.value !== ""),
    Ee
  ),
  method: F,
  name: F,
  preRequestScript: F,
  testScript: F,
  requestVariables: Qt(
    (e) => e.filter((t) => t.key !== "" && t.value !== ""),
    Ee
  )
}), Py = "5", Am = Ny.equals;
function Sm(e, t) {
  const r = lh(t);
  if (e && typeof e == "object") {
    if ("id" in e && typeof e.id == "string" && (r.id = e.id), "name" in e && typeof e.name == "string" && (r.name = e.name), "method" in e && typeof e.method == "string" && (r.method = e.method), "endpoint" in e && typeof e.endpoint == "string" && (r.endpoint = e.endpoint), "preRequestScript" in e && typeof e.preRequestScript == "string" && (r.preRequestScript = e.preRequestScript), "testScript" in e && typeof e.testScript == "string" && (r.testScript = e.testScript), "body" in e) {
      const n = ba.safeParse(e.body);
      n.success && (r.body = n.data);
    }
    if ("auth" in e) {
      const n = Ar.safeParse(e.auth);
      n.success && (r.auth = n.data);
    }
    if ("params" in e) {
      const n = Ta.safeParse(e.params);
      n.success && (r.params = n.data);
    }
    if ("headers" in e) {
      const n = Tr.safeParse(e.headers);
      n.success && (r.headers = n.data);
    }
    if ("requestVariables" in e) {
      const n = Aa.safeParse(e.requestVariables);
      n.success && (r.requestVariables = n.data);
    }
  }
  return r;
}
function wm(e) {
  return {
    v: Py,
    ...e
  };
}
function Ly() {
  return {
    v: "5",
    endpoint: "https://echo.hoppscotch.io",
    name: "Untitled",
    params: [],
    headers: [],
    method: "GET",
    auth: {
      authType: "inherit",
      authActive: !0
    },
    preRequestScript: "",
    testScript: "",
    body: {
      contentType: null,
      body: null
    },
    requestVariables: []
  };
}
function xm(e) {
  return Pt.isLatest(e);
}
function My(e) {
  const t = Pt.safeParse(e);
  return t.type === "ok" ? t.value : Ly();
}
const Sr = i.object({
  key: i.string().catch(""),
  value: i.string().catch(""),
  active: i.boolean().catch(!0)
}), Vy = i.object({
  v: i.literal(1),
  name: i.string(),
  url: i.string(),
  headers: i.array(Sr).catch([]),
  query: i.string(),
  variables: i.string()
}), Zy = P({
  initial: !0,
  schema: Vy
}), Lt = i.object({
  authType: i.literal("none")
}), Mt = i.object({
  authType: i.literal("basic"),
  username: i.string().catch(""),
  password: i.string().catch("")
}), Vt = i.object({
  authType: i.literal("bearer"),
  token: i.string().catch("")
}), Dy = i.object({
  authType: i.literal("oauth-2"),
  token: i.string().catch(""),
  oidcDiscoveryURL: i.string().catch(""),
  authURL: i.string().catch(""),
  accessTokenURL: i.string().catch(""),
  clientID: i.string().catch(""),
  scope: i.string().catch("")
}), wr = i.object({
  authType: i.literal("api-key"),
  key: i.string().catch(""),
  value: i.string().catch(""),
  addTo: i.string().catch("Headers")
}), Zt = i.object({
  authType: i.literal("inherit")
}), Uy = i.discriminatedUnion("authType", [
  Lt,
  Mt,
  Vt,
  Dy,
  wr,
  Zt
]).and(
  i.object({
    authActive: i.boolean()
  })
), Na = i.object({
  id: i.optional(i.string()),
  v: i.literal(2),
  name: i.string(),
  url: i.string(),
  headers: i.array(Sr).catch([]),
  query: i.string(),
  variables: i.string(),
  auth: Uy
}), qy = P({
  initial: !1,
  schema: Na,
  up(e) {
    return {
      ...e,
      v: 2,
      auth: {
        authActive: !0,
        authType: "none"
      }
    };
  }
}), Hy = i.discriminatedUnion("authType", [
  Lt,
  Zt,
  Mt,
  Vt,
  wr,
  Nt
  // both rest and gql have the same auth type for oauth2
]).and(
  i.object({
    authActive: i.boolean()
  })
), Pa = Na.extend({
  v: i.literal(3),
  auth: Hy
}), By = P({
  initial: !1,
  schema: Pa,
  up(e) {
    if (e.auth.authType === "oauth-2") {
      const { token: t, accessTokenURL: r, scope: n, clientID: a, authURL: s } = e.auth;
      return {
        ...e,
        v: 3,
        auth: {
          ...e.auth,
          authType: "oauth-2",
          grantTypeInfo: {
            grantType: "AUTHORIZATION_CODE",
            authEndpoint: s,
            tokenEndpoint: r,
            clientID: a,
            clientSecret: "",
            scopes: n,
            isPKCE: !1,
            token: t
          },
          addTo: "HEADERS"
        }
      };
    }
    return {
      ...e,
      v: 3,
      auth: {
        ...e.auth
      }
    };
  }
}), La = wr.extend({
  addTo: i.enum(["HEADERS", "QUERY_PARAMS"]).catch("HEADERS")
}), Gy = i.discriminatedUnion("authType", [
  Lt,
  Zt,
  Mt,
  Vt,
  La,
  Nt
  // both rest and gql have the same auth type for oauth2
]).and(
  i.object({
    authActive: i.boolean()
  })
), Ma = Pa.extend({
  v: i.literal(4),
  auth: Gy
}), zy = P({
  initial: !1,
  schema: Ma,
  up(e) {
    return e.auth.authType === "api-key" ? {
      ...e,
      v: 4,
      auth: {
        ...e.auth,
        addTo: e.auth.addTo === "Query params" ? "QUERY_PARAMS" : "HEADERS"
      }
    } : {
      ...e,
      v: 4,
      auth: {
        ...e.auth
      }
    };
  }
}), Va = i.discriminatedUnion("authType", [
  Lt,
  Zt,
  Mt,
  Vt,
  La,
  Nt
  // both rest and gql have the same auth type for oauth2
]).and(
  i.object({
    authActive: i.boolean()
  })
), Ky = Ma.extend({
  v: i.literal(5),
  auth: Va
}), Fy = P({
  initial: !1,
  schema: Ky,
  up(e) {
    return {
      ...e,
      v: 5
    };
  }
}), Za = 5, Qy = i.object({
  v: i.number()
}), xr = jt({
  latestVersion: 5,
  versionMap: {
    1: Zy,
    2: qy,
    3: By,
    4: zy,
    5: Fy
  },
  getVersion(e) {
    const t = Qy.safeParse(e);
    return t.success ? t.data.v : null;
  }
}), Wy = `
query Request {
  method
  url
  headers {
    key
    value
  }
}`.trim();
function Jy() {
  return {
    v: Za,
    name: "Untitled",
    url: "https://echo.hoppscotch.io/graphql",
    headers: [],
    variables: `
{
  "id": "1"
}`.trim(),
    query: Wy,
    auth: {
      authType: "inherit",
      authActive: !0
    }
  };
}
function Yy(e) {
  const t = xr.safeParse(e);
  return t.type === "ok" ? t.value : Jy();
}
function Em(e) {
  return {
    v: Za,
    ...e
  };
}
const Xy = i.object({
  v: i.literal(1),
  id: i.optional(i.string()),
  // For Firestore ID data
  name: i.string(),
  requests: i.array(
    i.lazy(
      () => i.union([
        ht(Pt),
        ht(xr)
      ])
    )
  )
}), Da = Xy.extend({
  folders: i.lazy(() => i.array(Da))
}), En = P({
  initial: !0,
  schema: Da
}), eg = i.object({
  v: i.literal(2),
  id: i.optional(i.string()),
  // For Firestore ID data
  name: i.string(),
  requests: i.array(
    i.lazy(
      () => i.union([
        ht(Pt),
        ht(xr)
      ])
    )
  ),
  auth: i.union([Ar, Va]),
  headers: i.union([Tr, i.array(Sr)])
}), Ua = eg.extend({
  folders: i.lazy(() => i.array(Ua))
}), tg = P({
  initial: !1,
  schema: Ua,
  up(e) {
    const t = {
      ...e,
      v: 2,
      auth: {
        authActive: !0,
        authType: "inherit"
      },
      headers: []
    };
    return e.id && (t.id = e.id), t;
  }
}), rg = i.object({
  v: i.number()
}), Om = jt({
  latestVersion: 2,
  versionMap: {
    1: En,
    2: tg
  },
  getVersion(e) {
    const t = rg.safeParse(e);
    return t.success ? t.data.v : En.schema.safeParse(e).success ? 1 : null;
  }
}), ng = 2;
function qa(e) {
  return {
    v: ng,
    ...e
  };
}
function ag(e) {
  const t = e.name ?? "Untitled", r = (e.folders ?? []).map(ag), n = (e.requests ?? []).map(My), a = e.auth ?? { authType: "inherit", authActive: !0 }, s = e.headers ?? [], o = qa({
    name: t,
    folders: r,
    requests: n,
    auth: a,
    headers: s
  });
  return e.id && (o.id = e.id), o;
}
function sg(e) {
  const t = e.name ?? "Untitled", r = (e.folders ?? []).map(sg), n = (e.requests ?? []).map(Yy), a = e.auth ?? { authType: "inherit", authActive: !0 }, s = e.headers ?? [], o = qa({
    name: t,
    folders: r,
    requests: n,
    auth: a,
    headers: s
  });
  return e.id && (o.id = e.id), o;
}
var te = function(e) {
  return function(t) {
    return !e(t);
  };
};
globalThis && globalThis.__spreadArray;
var ig = Is, og = Cs;
function Ha(e, t) {
  return t === void 0 ? function(r) {
    return Ha(e, r);
  } : og(e, t) ? Pn : Ln(t[e]);
}
var Ba = function(e) {
  return function(t) {
    return t.map(function(r) {
      return e(r);
    });
  };
}, cg = function(e) {
  return function(t) {
    for (var r = [], n = 0; n < t.length; n++) {
      var a = e(n, t[n]);
      Nn(a) && r.push(a.value);
    }
    return r;
  };
}, ug = function(e) {
  return cg(function(t, r) {
    return e(r);
  });
}, Ga = function(e) {
  return e.slice();
}, lg = ks, On = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, s; n < a; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, dg = function(e) {
  return function(t) {
    return On(On([], t, !0), [e], !1);
  };
}, fg = dg, pg = function(e) {
  return [e];
}, hg = fg, vg = Ha, yg = function(e) {
  return function(t) {
    return t.map(function(r) {
      return e(r);
    });
  };
}, gg = function() {
  return {
    concat: function(e, t) {
      return e.concat(t);
    }
  };
}, mg = function() {
  return {
    concat: gg().concat,
    empty: []
  };
}, Dt = Pn, He = Ln;
function za(e) {
  return function(t) {
    return e(t) ? He(t) : Dt;
  };
}
var sr = function(e) {
  return function(t) {
    return Ka(t) ? Dt : He(e(t.value));
  };
}, _g = Nn, Ka = function(e) {
  return e._tag === "None";
}, bg = function(e, t) {
  return function(r) {
    return Ka(r) ? e() : t(r.value);
  };
}, Tg = bg, Er = Tg, $g = function(e, t) {
  for (var r = t(e); r._tag === "Left"; )
    r = t(r.left);
  return r.right;
}, re = _s, B = bs, Ag = /* @__PURE__ */ hs(2, function(e, t) {
  return ye(e) ? e : t(e.right);
}), Be = function(e) {
  return function(t) {
    return ye(t) ? t : B(e(t.right));
  };
}, Ut = function(e) {
  return function(t) {
    return ye(t) ? re(e(t.left)) : t;
  };
}, ye = gs, Sg = ms, wg = function(e) {
  return function(t) {
    return ye(t) ? e(t.left) : t.right;
  };
}, Or = wg, jn = Ag, yt = globalThis && globalThis.__assign || function() {
  return yt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, yt.apply(this, arguments);
}, Ge = function(e, t, r) {
  return B({
    value: e,
    next: t,
    start: r
  });
}, ze = function(e, t, r) {
  return t === void 0 && (t = []), r === void 0 && (r = !1), re({
    input: e,
    expected: t,
    fatal: r
  });
}, xg = function(e, t) {
  return yt(yt({}, e), { expected: t });
}, Eg = function(e, t) {
  return Og().concat(e, t);
}, Og = function() {
  return {
    concat: function(e, t) {
      return e.input.cursor < t.input.cursor ? Es().concat(e, t) : e.input.cursor > t.input.cursor ? Bt().concat(e, t) : xs({
        input: Bt(),
        fatal: Bt(),
        expected: mg()
      }).concat(e, t);
    }
  };
}, jg = function(e, t) {
  return t === void 0 && (t = 0), {
    buffer: e,
    cursor: t
  };
}, kg = function(e) {
  return vg(e.cursor, e.buffer);
}, Cg = function(e) {
  return e.cursor >= e.buffer.length;
}, Rg = function(e) {
  return g(kg(e), sr(function(t) {
    return { value: t, next: { buffer: e.buffer, cursor: e.cursor + 1 } };
  }));
}, ee = globalThis && globalThis.__assign || function() {
  return ee = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ee.apply(this, arguments);
}, jr = function(e) {
  return function(t) {
    return Ge(e, t, t);
  };
}, Ig = function() {
  return function(e) {
    return ze(e);
  };
}, Ng = function(e) {
  return function() {
    return ze(e);
  };
}, j = function(e) {
  return g(Mg(Pg()), le(function(t) {
    var r = t[0], n = t[1];
    return e(r) ? ge(r) : Ng(n);
  }));
}, O = function(e, t) {
  return function(r) {
    return g(e(r), Ut(function(n) {
      return xg(n, [t]);
    }));
  };
}, Pg = function() {
  return function(e) {
    return g(Rg(e), Er(function() {
      return ze(e);
    }, function(t) {
      var r = t.value, n = t.next;
      return Ge(r, n, e);
    }));
  };
}, Lg = function(e, t) {
  return function(r) {
    return g(e(r), jn(function(n) {
      return g(t(n.value)(n.next), jn(function(a) {
        return Ge(a.value, a.next, r);
      }));
    }));
  };
}, qt = function(e, t) {
  return function(r) {
    var n = e(r);
    return Sg(n) || n.left.fatal ? n : g(t()(r), Ut(function(a) {
      return Eg(n.left, a);
    }));
  };
}, Mg = function(e) {
  return function(t) {
    return g(e(t), Be(function(r) {
      return ee(ee({}, r), { value: [r.value, t] });
    }));
  };
}, Fa = function(e) {
  return de(function() {
    return ge(e.empty);
  });
}, kr = function() {
  return O(function(e) {
    return Cg(e) ? Ge(void 0, e, e) : ze(e);
  }, "end of file");
}, Vg = function(e) {
  return g(Cr(e), de(function() {
    return ge([]);
  }));
}, Cr = function(e) {
  return g(e, le(function(t) {
    return Ir(pg(t), function(r) {
      return g(e, E(function(n) {
        return re(hg(n)(r));
      }), de(function() {
        return ge(B(r));
      }));
    });
  }));
}, Zg = function(e, t) {
  return function(r) {
    return g(e, le(function() {
      return r;
    }), Nr(function() {
      return t;
    }));
  };
}, Qa = function(e) {
  return Zg(e, e);
}, Dg = function(e) {
  return Vg(j(te(e)));
}, Rr = function(e, t) {
  return g(t, E(function() {
    return lg;
  }), de(function() {
    return Ug(e, t);
  }));
}, Ug = function(e, t) {
  return g(e, le(function(r) {
    return Ir(Ns(r), function(n) {
      return g(t, E(function() {
        return B(n);
      }), de(function() {
        return g(e, E(function(a) {
          return re(ig(a)(n));
        }));
      }));
    });
  }));
}, Ke = function(e, t) {
  return function(r) {
    return g(e(r), Be(function(n) {
      return ee(ee({}, n), { value: t(n.value) });
    }));
  };
}, Wa = function(e, t) {
  return Ht(e, function(r) {
    return Ke(t, r);
  });
}, Ht = function(e, t) {
  return Lg(e, t);
}, Ir = function(e, t) {
  var r = function(n) {
    return function(a) {
      return ye(a.value) ? re({ value: a.value.left, stream: a.next }) : B(Ge(a.value.right, a.next, n));
    };
  };
  return function(n) {
    return $g({ value: e, stream: n }, function(a) {
      var s = t(a.value)(a.stream);
      return ye(s) ? B(ze(a.stream, s.left.expected, s.left.fatal)) : r(n)(s.right);
    });
  };
}, qg = function(e, t) {
  return qt(e, t);
}, E = function(e) {
  return function(t) {
    return Ke(t, e);
  };
}, ge = jr, le = function(e) {
  return function(t) {
    return Ht(t, e);
  };
}, Nr = function(e) {
  return function(t) {
    return Ht(t, function(r) {
      return Ke(e(r), function() {
        return r;
      });
    });
  };
}, de = function(e) {
  return function(t) {
    return qg(t, e);
  };
}, Hg = "Parser", Bg = function(e) {
  return {
    concat: function(t, r) {
      return Wa(Ke(t, function(n) {
        return function(a) {
          return e.concat(n, a);
        };
      }), r);
    }
  };
}, Gg = function(e) {
  return ee(ee({}, Bg(e)), { empty: jr(e.empty) });
}, zg = {
  URI: Hg,
  map: Ke,
  ap: Wa,
  chain: Ht,
  chainRec: Ir
}, Ja = function(e, t, r) {
  var n;
  return Object.assign({}, e, (n = {}, n[t] = r, n));
}, Ya = function(e) {
  return function(t) {
    return g(t, E(function(r) {
      return Ja({}, e, r);
    }));
  };
}, ir = function(e, t) {
  return function(r) {
    return g(r, le(function(n) {
      return g(t(n), E(function(a) {
        return Ja(n, e, a);
      }));
    }));
  };
}, Kg = function(e) {
  return Os(e)(e.empty);
};
js.concat;
var Fg = Fa(ur), me = function(e) {
  return O(j(function(t) {
    return t === e;
  }), '"'.concat(e, '"'));
}, Qg = function(e) {
  return O(j(function(t) {
    return t !== e;
  }), 'anything but "'.concat(e, '"'));
}, Pr = function(e) {
  return Fg(Fe(e));
}, Fe = function(e) {
  return g(Cr(e), E(function(t) {
    return t.join("");
  }));
}, Lr = function(e) {
  return "0123456789".indexOf(e) !== -1;
}, or = O(j(Lr), "a digit"), Wg = /^\s$/, Xa = function(e) {
  return Wg.test(e);
}, es = O(j(Xa), "a whitespace"), Jg = function(e) {
  return e === "_";
}, Qe = function(e) {
  return /[a-z]/.test(e.toLowerCase());
}, ts = function(e) {
  return Qe(e) || Lr(e) || Jg(e);
};
O(j(ts), "a word character");
O(j(Qe), "a letter");
var Yg = function(e) {
  return e.toLowerCase() !== e.toUpperCase();
};
O(j(Yg), "an unicode letter");
var rs = function(e) {
  return Qe(e) && e === e.toUpperCase();
};
O(j(rs), "an upper case letter");
var ns = function(e) {
  return Qe(e) && e === e.toLowerCase();
};
O(j(ns), "a lower case letter");
O(j(te(Lr)), "a non-digit");
var as = O(j(te(Xa)), "a non-whitespace character");
O(j(te(ts)), "a non-word character");
O(j(te(Qe)), "a non-letter character");
O(j(te(rs)), "anything but an upper case letter");
O(j(te(ns)), "anything but a lower case letter");
var ss = function(e) {
  return O(zg.chainRec(e, function(t) {
    return g(tm(0, t), Er(function() {
      return ge(B(e));
    }, function(r) {
      return g(me(r), le(function() {
        return ge(re(t.slice(1)));
      }));
    }));
  }), JSON.stringify(e));
}, cr = Kg(Gg(ur)), De = Fa(ur), Xg = function(e) {
  return De(em(e));
}, em = function(e) {
  return g(Cr(e), E(function(t) {
    return t.join("");
  }));
}, tm = function(e, t) {
  return e >= 0 && e < t.length ? He(t.charAt(e)) : Dt;
}, rm = Pr(es);
Fe(es);
Pr(as);
Fe(as);
var nm = function(e) {
  var t = +e;
  return isNaN(t) || e === "" ? Dt : He(t);
};
O(g(cr([De(me("-")), Fe(or)]), E(function(e) {
  return +e;
})), "an integer");
O(g(cr([De(me("-")), Pr(or), De(cr([me("."), Fe(or)]))]), le(function(e) {
  return g(nm(e), Er(function() {
    return Ig();
  }, jr));
})), "a float");
var am = Qa(me('"'))(Xg(qt(ss('\\"'), function() {
  return Qg('"');
})));
function is(e) {
  return function(t) {
    return t(jg(e.split("")));
  };
}
const kn = (e, t) => (r) => ({
  ...r,
  [e]: t(r[e])
}), sm = ["#", ":"], _e = Qa(rm), Mr = (e) => (t) => t.join(e), Vr = (e) => g(
  Dg((t) => e.includes(t)),
  E(Mr(""))
), im = W(
  Vr,
  Nr(() => j(() => !0))
), os = g(
  am,
  E((e) => JSON.parse(`"${e}"`))
), om = g(
  _e(os),
  de(
    () => g(
      Vr([":", `
`]),
      E(Mn)
    )
  )
), cm = g(
  _e(os),
  de(
    () => g(
      Vr([`
`]),
      E(Mn)
    )
  )
), cs = g(
  De(ss("#")),
  E(te(Vn))
), us = g(
  _e(cs),
  Ya("commented"),
  ir("key", () => _e(om)),
  Nr(() => me(":")),
  ir("value", () => cm)
), um = g(
  _e(cs),
  Ya("commented"),
  ir("key", () => qt(
    im([`
`]),
    () => g(
      Rr(j((e) => !0), kr()),
      E(W(
        Ga,
        Mr("")
      ))
    )
  )),
  E(W(
    za(({ key: e }) => !Vn(e))
  ))
), lm = g(
  Rr(_e(us), kr())
), dm = g(
  Rr(
    qt(
      g(us, E(He)),
      () => g(
        um,
        E(W(
          sr((e) => ({ ...e, value: "" }))
        ))
      )
    ),
    kr()
  ),
  E(W(
    ug(W(
      za(_g),
      sr((e) => e.value)
    ))
  ))
), fm = (e) => {
  if (sm.some((n) => e.includes(n)))
    return !0;
  const t = JSON.stringify(e);
  return t.substring(1, t.length - 1).trim() !== e;
}, Cn = (e) => fm(e) ? JSON.stringify(e) : e, jm = (e) => g(
  e,
  yg(
    W(
      kn("key", Cn),
      kn("value", Cn),
      ({ key: t, value: r, active: n }) => n ? `${t}: ${r}` : `# ${t}: ${r}`
    )
  ),
  Mr(`
`)
), pm = (e) => g(
  dm,
  is(e),
  Ut((t) => ({
    message: `Expected ${t.expected.map((r) => `'${r}'`).join(", ")}`,
    expected: t.expected,
    pos: t.input.cursor
  })),
  Be(
    ({ value: t }) => g(
      t,
      Ba(
        ({ key: r, value: n, commented: a }) => ({
          active: !a,
          key: r,
          value: n
        })
      )
    )
  )
), km = (e) => g(
  lm,
  is(e),
  Ut((t) => ({
    message: `Expected ${t.expected.map((r) => `'${r}'`).join(", ")}`,
    expected: t.expected,
    pos: t.input.cursor
  })),
  Be(
    ({ value: t }) => g(
      t,
      Ba(
        ({ key: r, value: n, commented: a }) => ({
          active: !a,
          key: r,
          value: n
        })
      )
    )
  )
), Cm = W(
  pm,
  Be(Ga),
  Or(() => [])
), hm = i.object({
  id: i.optional(i.string()),
  name: i.string(),
  variables: i.array(
    i.object({
      key: i.string(),
      value: i.string()
    })
  )
}), Rn = P({
  initial: !0,
  schema: hm
}), ls = () => Math.random().toString(36).substring(2, 16), vm = i.object({
  v: i.literal(1),
  id: i.string(),
  name: i.string(),
  variables: i.array(
    i.union([
      i.object({
        key: i.string(),
        secret: i.literal(!0)
      }),
      i.object({
        key: i.string(),
        value: i.string(),
        secret: i.literal(!1).catch(!1)
      })
    ])
  )
}), ym = P({
  initial: !1,
  schema: vm,
  up(e) {
    return {
      ...e,
      v: 1,
      id: e.id || ls(),
      variables: e.variables.map((r) => ({
        ...r,
        secret: !1
      }))
    };
  }
}), gm = i.object({
  v: i.number()
}), Rm = jt({
  latestVersion: 1,
  versionMap: {
    0: Rn,
    1: ym
  },
  getVersion(e) {
    const t = gm.safeParse(e);
    return t.success ? t.data.v : Rn.schema.safeParse(e).success ? 0 : null;
  }
}), gt = /<<([^>]*)>>/g, mt = 10, ds = "ENV_EXPAND_LOOP", In = 1;
function mm(e, t) {
  let r = e, n = 0;
  for (; r.match(gt) != null && n <= mt; )
    r = r.replace(gt, (a) => {
      const s = t.find(
        (o) => o.key === a.replace(/[<>]/g, "")
      );
      return s && "value" in s ? s.value : a;
    }), n++;
  return n > mt ? re(ds) : B(r);
}
const Im = (e, t) => g(
  mm(e, t),
  Or(() => e)
);
function _m(e, t, r = !1) {
  if (!t || !e)
    return B(e);
  let n = e, a = 0;
  for (; n.match(gt) != null && a <= mt; )
    n = decodeURI(encodeURI(n)).replace(gt, (s, o) => {
      const c = t.find((l) => l && l.key === o);
      return c && "value" in c ? c.secret && r ? "*".repeat(
        c.value.length
      ) : c.value : "";
    }), a++;
  return a > mt ? re(ds) : B(n);
}
const Nm = (e, t, r = !1) => g(
  _m(e, t, r),
  Or(() => e)
), bm = (e) => ({
  key: e.key,
  value: e.value,
  secret: !1
}), Pm = (e) => {
  if (e.v && e.v === In)
    return e;
  const t = e.id || ls(), r = e.name ?? "Untitled", n = (e.variables ?? []).map(bm);
  return {
    v: In,
    id: t,
    name: r,
    variables: n
  };
};
export {
  Tv as AuthCodeGrantTypeParams,
  xa as ClientCredentialsGrantTypeParams,
  ng as CollectionSchemaVersion,
  Rm as Environment,
  In as EnvironmentSchemaVersion,
  _a as FormDataKeyValue,
  Sr as GQLHeader,
  Za as GQL_REQ_SCHEMA_VERSION,
  Om as HoppCollection,
  Va as HoppGQLAuth,
  La as HoppGQLAuthAPIKey,
  Mt as HoppGQLAuthBasic,
  Vt as HoppGQLAuthBearer,
  Zt as HoppGQLAuthInherit,
  Lt as HoppGQLAuthNone,
  Nt as HoppGQLAuthOAuth2,
  xr as HoppGQLRequest,
  Ar as HoppRESTAuth,
  ka as HoppRESTAuthAPIKey,
  Ct as HoppRESTAuthBasic,
  Rt as HoppRESTAuthBearer,
  It as HoppRESTAuthInherit,
  kt as HoppRESTAuthNone,
  Nt as HoppRESTAuthOAuth2,
  Tr as HoppRESTHeaders,
  ba as HoppRESTReqBody,
  Tm as HoppRESTReqBodyFormData,
  Pt as HoppRESTRequest,
  Aa as HoppRESTRequestVariables,
  Oa as ImplicitOauthFlowParams,
  Ea as PasswordGrantTypeParams,
  Py as RESTReqSchemaVersion,
  $m as ValidContentTypesList,
  Jy as getDefaultGQLRequest,
  Ly as getDefaultRESTRequest,
  Am as isEqualHoppRESTRequest,
  xm as isHoppRESTRequest,
  Ry as knownContentTypes,
  qa as makeCollection,
  Em as makeGQLRequest,
  wm as makeRESTRequest,
  Im as parseBodyEnvVariables,
  mm as parseBodyEnvVariablesE,
  Cm as parseRawKeyValueEntries,
  pm as parseRawKeyValueEntriesE,
  Nm as parseTemplateString,
  _m as parseTemplateStringE,
  jm as rawKeyValueEntriesToString,
  Sm as safelyExtractRESTRequest,
  km as strictParseRawKeyValueEntriesE,
  Yy as translateToGQLRequest,
  Pm as translateToNewEnvironment,
  bm as translateToNewEnvironmentVariables,
  sg as translateToNewGQLCollection,
  ag as translateToNewRESTCollection,
  My as translateToNewRequest
};
