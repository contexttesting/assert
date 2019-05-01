             
let DEPACK_EXPORT;
const assert = require('assert');
const os = require('os');             
const {deepStrictEqual:r} = assert;
/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const t = {black:30, red:31, green:32, yellow:33, blue:34, magenta:35, cyan:36, white:37, grey:90};
function u(a, b) {
  return (b = t[b]) ? `\x1b[${b}m${a}\x1b[0m` : a;
}
;const w = (...a) => {
  let b = -1;
  return "%s%s".replace(/%s/g, () => {
    b++;
    return a[b];
  });
};
function x(a, b) {
  let f = 0;
  const h = (c, d = void 0) => {
    const g = " ".repeat(2 * f);
    d = void 0 !== d ? u("+ " + z(d), "green") : null;
    c = void 0 !== c ? u("- " + z(c), "red") : null;
    const l = [];
    c && l.push(w(g, c));
    d && l.push(w(g, d));
    return l.join("\n");
  }, e = c => {
    const d = " ".repeat(2 * f);
    return w(d, c);
  }, k = (c, d) => {
    if (c instanceof Date && d instanceof Date) {
      var g = c.getTime() != d.getTime() ? !1 : void 0;
      return g ? "" : h(c, d);
    }
    if (c instanceof Date && !(d instanceof Date) || !(c instanceof Date) && d instanceof Date || Array.isArray(c) && !Array.isArray(d) || !Array.isArray(c) && Array.isArray(d)) {
      return h(c, d);
    }
    if (A(c) && A(d) || !A(c) && A(d) || A(c) && !A(d)) {
      return c != d ? h(c, d) : "";
    }
    if (c.constructor && !d.constructor) {
      return h(c.constructor.name, d);
    }
    if (!c.constructor && d.constructor) {
      return h(c, d.constructor.name);
    }
    if (c.constructor && d.constructor) {
      if (c.constructor.name != d.constructor.name) {
        return h(c.constructor.name, d.constructor.name);
      }
      g = c.valueOf();
      var l = d.valueOf();
      if (A(g) && A(l) && g != l) {
        return h(g, l);
      }
    }
    if (Array.isArray(c) && Array.isArray(d)) {
      let p;
      g = c.map((m, q) => {
        p = q;
        (m = k(m, d[q])) && (m = `${e(`[${q}]`)}\n${m}`);
        return m;
      }).filter(Boolean);
      l = d.slice(p + 1).map((m, q) => `${e(`[${p + q + 1}]`)}\n${h(void 0, m)}`);
      return [...g, ...l].join("\n");
    }
    if ("object" == typeof c && "object" == typeof d) {
      const p = [], m = [], q = [];
      Object.keys(c).forEach(n => {
        n in d ? q.push(n) : m.push(n);
      });
      Object.keys(d).forEach(n => {
        n in c || p.push(n);
      });
      g = m.map(n => h(`${n}${`: ${z(c[n])}`}`));
      l = p.map(n => h(void 0, `${n}: ${z(d[n])}`));
      const J = q.map(n => {
        f++;
        const y = k(c[n], d[n]);
        let v = "";
        y && (v += e(Array.isArray(c[n]) && Array.isArray(d[n]) ? `${n}.Array` : n), v += "\n" + y);
        f--;
        return v;
      }).filter(Boolean);
      return [...g, ...l, ...J].join("\n");
    }
    console.error("Could not compare two values: %s %s. Please file a bug with differently.", c, d);
  };
  return k(a, b);
}
const A = a => null === a ? !0 : "string number boolean symbol null undefined".split(" ").includes(typeof a), z = a => Array.isArray(a) ? `Array[${a.toString()}]` : a && a.toString ? a.toString() : `${a}`;
function B(a, b, f) {
  let h = a[a.length - 1];
  h && h.b === b && h.f === f ? a[a.length - 1] = {count:h.count + 1, b, f} : a.push({count:1, b, f});
}
function C(a, b, f, h, e) {
  let k = f.length, c = h.length, d = b.a;
  e = d - e;
  let g = 0;
  for (; d + 1 < k && e + 1 < c && a.equals(f[d + 1], h[e + 1]);) {
    d++, e++, g++;
  }
  g && b.c.push({count:g});
  b.a = d;
  return e;
}
function D(a) {
  let b = [];
  for (let f = 0; f < a.length; f++) {
    a[f] && b.push(a[f]);
  }
  return b;
}
function E(a, b) {
  var f = new F;
  a = D(a.split(""));
  b = D(b.split(""));
  let h = b.length, e = a.length, k = 1, c = h + e, d = [{a:-1, c:[]}];
  var g = C(f, d[0], b, a, 0);
  if (d[0].a + 1 >= h && g + 1 >= e) {
    return [{value:f.join(b), count:b.length}];
  }
  for (; k <= c;) {
    a: {
      for (g = -1 * k; g <= k; g += 2) {
        var l = d[g - 1];
        let m = d[g + 1];
        var p = (m ? m.a : 0) - g;
        l && (d[g - 1] = void 0);
        let q = l && l.a + 1 < h;
        p = m && 0 <= p && p < e;
        if (q || p) {
          !q || p && l.a < m.a ? (l = {a:m.a, c:m.c.slice(0)}, B(l.c, void 0, !0)) : (l.a++, B(l.c, !0, void 0));
          p = C(f, l, b, a, g);
          if (l.a + 1 >= h && p + 1 >= e) {
            g = G(f, l.c, b, a);
            break a;
          }
          d[g] = l;
        } else {
          d[g] = void 0;
        }
      }
      k++;
      g = void 0;
    }
    if (g) {
      return g;
    }
  }
}
class F {
  equals(a, b) {
    return a === b;
  }
  join(a) {
    return a.join("");
  }
}
function G(a, b, f, h) {
  let e = 0, k = b.length, c = 0, d = 0;
  for (; e < k; e++) {
    var g = b[e];
    if (g.f) {
      g.value = a.join(h.slice(d, d + g.count)), d += g.count, e && b[e - 1].b && (g = b[e - 1], b[e - 1] = b[e], b[e] = g);
    } else {
      if (g.b) {
        g.value = a.join(f.slice(c, c + g.count));
      } else {
        let l = f.slice(c, c + g.count);
        l = l.map(function(p, m) {
          m = h[d + m];
          return m.length > p.length ? m : p;
        });
        g.value = a.join(l);
      }
      c += g.count;
      g.b || (d += g.count);
    }
  }
  f = b[k - 1];
  1 < k && "string" === typeof f.value && (f.b || f.f) && a.equals("", f.value) && (b[k - 2].value += f.value, b.pop());
  return b;
}
;const H = {black:30, red:31, green:32, yellow:33, blue:34, magenta:35, cyan:36, white:37, grey:90}, I = {black:40, red:41, green:42, yellow:43, blue:44, magenta:45, cyan:46, white:47};
function K(a, b) {
  return (b = H[b]) ? `\x1b[${b}m${a}\x1b[0m` : a;
}
function L(a) {
  return (a = I[a]) ? `\x1b[${a}m${" "}\x1b[0m` : " ";
}
function M(a, b) {
  return E(a, b).map(({b:f, f:h, value:e}) => {
    const k = e.split(" ");
    return f ? k.map(c => c.replace(/\n$/mg, "\u23ce\n")).map(c => K(c, "green")).join(L("green")) : h ? k.map(c => c.replace(/\n$/mg, "\u23ce\n")).map(c => K(c, "red")).join(L("red")) : K(e, "grey");
  }).join("");
}
;const N = (a, b = 0, f = !1) => {
  if (0 === b && !f) {
    return a;
  }
  a = a.split("\n", f ? b + 1 : void 0);
  return f ? a[a.length - 1] : a.slice(b).join("\n");
}, O = (a, b = !1) => N(a, 2 + (b ? 1 : 0)), P = a => {
  ({callee:{caller:a}} = a);
  return a;
};
const {homedir:Q} = os;
const R = /\s+at.*(?:\(|\s)(.*)\)?/, S = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/, T = Q(), U = a => {
  const {pretty:b = !1, ignoredModules:f = ["pirates"]} = {}, h = new RegExp(S.source.replace("IGNORED_MODULES", f.join("|")));
  return a.replace(/\\/g, "/").split("\n").filter(e => {
    e = e.match(R);
    if (null === e || !e[1]) {
      return !0;
    }
    e = e[1];
    return e.includes(".app/Contents/Resources/electron.asar") || e.includes(".app/Contents/Resources/default_app.asar") ? !1 : !h.test(e);
  }).filter(e => e.trim()).map(e => b ? e.replace(R, (k, c) => k.replace(c, c.replace(T, "~"))) : e).join("\n");
};
function V(a, b, f = !1) {
  return function(h) {
    var e = P(arguments), {stack:k} = Error();
    const c = N(k, 2, !0), d = (k = h instanceof Error) ? h.message : h;
    e = [`Error: ${d}`, ...null !== e && a === e || f ? [b] : [c, b]].join("\n");
    e = U(e);
    return Object.assign(k ? h : Error(), {message:d, stack:e});
  };
}
;function W(a) {
  var {stack:b} = Error();
  const f = P(arguments);
  b = O(b, a);
  return V(f, b, a);
}
;const X = async(a, b) => {
  await b(a);
}, Y = async(a, b) => {
  if (b instanceof RegExp) {
    if (!b.test(a)) {
      throw Error(`${a} does not match regular expression ${b}`);
    }
  } else {
    if ("function" == typeof b) {
      await X(a, b);
    } else {
      if (b && a != b) {
        const f = M(`${a}`, `${b}`);
        throw Error(`${f}\n${`${a} != ${b}`}`);
      }
    }
  }
}, Z = async(a, b, f, h, e) => {
  const k = Error();
  try {
    throw b ? await a.call(b, ...f) : await a(...f), k;
  } catch (c) {
    if (c === k) {
      throw Error(`Function ${a.name && "fn" !== a.name ? `${a.name} ` : ""}should have thrown.`);
    }
    if (h && h !== c) {
      throw Error(`${c} is not strict equal to ${h}.`);
    }
    await Object.keys(e).reduce(async(d, g) => {
      await d;
      await Y(c[g], e[g]);
    }, {});
    return c;
  }
};
DEPACK_EXPORT = {deepEqual:function(a, b, f) {
  try {
    r(a, b, f);
  } catch (h) {
    throw a = x(b, a), h.message = [h.message, a].filter(Boolean).join("\n"), h;
  }
}, throws:async function(a) {
  if (!a) {
    throw Error("Config expected.");
  }
  const b = W(!0);
  var f = Object.assign({}, a);
  const h = a.fn;
  var e = void 0 === a.args ? [] : a.args;
  const k = a.context;
  a = a.error;
  f = (delete f.fn, delete f.args, delete f.context, delete f.error, f);
  if ("function" != typeof h) {
    throw Error("Function expected.");
  }
  e = Array.isArray(e) ? e : [e];
  try {
    return await Z(h, k, e, a, f);
  } catch (c) {
    throw b(c);
  }
}};


module.exports = DEPACK_EXPORT
//# sourceMappingURL=depack.js.map