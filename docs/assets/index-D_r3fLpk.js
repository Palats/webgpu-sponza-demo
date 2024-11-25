var Hs = Object.defineProperty;
var $s = (re, Kt, $) =>
	Kt in re
		? Hs(re, Kt, { enumerable: !0, configurable: !0, writable: !0, value: $ })
		: (re[Kt] = $);
var mn = (re, Kt, $) => $s(re, typeof Kt != "symbol" ? Kt + "" : Kt, $);
(async () => {
	(function () {
		const i = document.createElement("link").relList;
		if (i && i.supports && i.supports("modulepreload")) return;
		for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
			e(r);
		new MutationObserver((r) => {
			for (const h of r)
				if (h.type === "childList")
					for (const g of h.addedNodes)
						g.tagName === "LINK" && g.rel === "modulepreload" && e(g);
		}).observe(document, { childList: !0, subtree: !0 });
		function t(r) {
			const h = {};
			return (
				r.integrity && (h.integrity = r.integrity),
				r.referrerPolicy && (h.referrerPolicy = r.referrerPolicy),
				r.crossOrigin === "use-credentials"
					? (h.credentials = "include")
					: r.crossOrigin === "anonymous"
					? (h.credentials = "omit")
					: (h.credentials = "same-origin"),
				h
			);
		}
		function e(r) {
			if (r.ep) return;
			r.ep = !0;
			const h = t(r);
			fetch(r.href, h);
		}
	})();
	function re(i, t) {
		return class extends i {
			constructor(...e) {
				super(...e), t(this);
			}
		};
	}
	const Kt = re(Array, (i) => i.fill(0));
	let $ = 1e-6;
	function pr(i) {
		function t(n = 0, l = 0) {
			const s = new i(2);
			return n !== void 0 && ((s[0] = n), l !== void 0 && (s[1] = l)), s;
		}
		const e = t;
		function r(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n), (o[1] = l), o;
		}
		function h(n, l) {
			const s = l ?? new i(2);
			return (s[0] = Math.ceil(n[0])), (s[1] = Math.ceil(n[1])), s;
		}
		function g(n, l) {
			const s = l ?? new i(2);
			return (s[0] = Math.floor(n[0])), (s[1] = Math.floor(n[1])), s;
		}
		function k(n, l) {
			const s = l ?? new i(2);
			return (s[0] = Math.round(n[0])), (s[1] = Math.round(n[1])), s;
		}
		function T(n, l = 0, s = 1, o) {
			const f = o ?? new i(2);
			return (
				(f[0] = Math.min(s, Math.max(l, n[0]))),
				(f[1] = Math.min(s, Math.max(l, n[1]))),
				f
			);
		}
		function I(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] + l[0]), (o[1] = n[1] + l[1]), o;
		}
		function B(n, l, s, o) {
			const f = o ?? new i(2);
			return (f[0] = n[0] + l[0] * s), (f[1] = n[1] + l[1] * s), f;
		}
		function z(n, l) {
			const s = n[0],
				o = n[1],
				f = l[0],
				v = l[1],
				U = Math.sqrt(s * s + o * o),
				d = Math.sqrt(f * f + v * v),
				_ = U * d,
				x = _ && ht(n, l) / _;
			return Math.acos(x);
		}
		function V(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] - l[0]), (o[1] = n[1] - l[1]), o;
		}
		const Y = V;
		function tt(n, l) {
			return Math.abs(n[0] - l[0]) < $ && Math.abs(n[1] - l[1]) < $;
		}
		function st(n, l) {
			return n[0] === l[0] && n[1] === l[1];
		}
		function L(n, l, s, o) {
			const f = o ?? new i(2);
			return (
				(f[0] = n[0] + s * (l[0] - n[0])), (f[1] = n[1] + s * (l[1] - n[1])), f
			);
		}
		function F(n, l, s, o) {
			const f = o ?? new i(2);
			return (
				(f[0] = n[0] + s[0] * (l[0] - n[0])),
				(f[1] = n[1] + s[1] * (l[1] - n[1])),
				f
			);
		}
		function Q(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = Math.max(n[0], l[0])), (o[1] = Math.max(n[1], l[1])), o;
		}
		function et(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = Math.min(n[0], l[0])), (o[1] = Math.min(n[1], l[1])), o;
		}
		function O(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] * l), (o[1] = n[1] * l), o;
		}
		const W = O;
		function ot(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] / l), (o[1] = n[1] / l), o;
		}
		function pt(n, l) {
			const s = l ?? new i(2);
			return (s[0] = 1 / n[0]), (s[1] = 1 / n[1]), s;
		}
		const it = pt;
		function ut(n, l, s) {
			const o = s ?? new i(3),
				f = n[0] * l[1] - n[1] * l[0];
			return (o[0] = 0), (o[1] = 0), (o[2] = f), o;
		}
		function ht(n, l) {
			return n[0] * l[0] + n[1] * l[1];
		}
		function at(n) {
			const l = n[0],
				s = n[1];
			return Math.sqrt(l * l + s * s);
		}
		const kt = at;
		function K(n) {
			const l = n[0],
				s = n[1];
			return l * l + s * s;
		}
		const j = K;
		function D(n, l) {
			const s = n[0] - l[0],
				o = n[1] - l[1];
			return Math.sqrt(s * s + o * o);
		}
		const gt = D;
		function mt(n, l) {
			const s = n[0] - l[0],
				o = n[1] - l[1];
			return s * s + o * o;
		}
		const St = mt;
		function bt(n, l) {
			const s = l ?? new i(2),
				o = n[0],
				f = n[1],
				v = Math.sqrt(o * o + f * f);
			return (
				v > 1e-5 ? ((s[0] = o / v), (s[1] = f / v)) : ((s[0] = 0), (s[1] = 0)),
				s
			);
		}
		function Ct(n, l) {
			const s = l ?? new i(2);
			return (s[0] = -n[0]), (s[1] = -n[1]), s;
		}
		function lt(n, l) {
			const s = l ?? new i(2);
			return (s[0] = n[0]), (s[1] = n[1]), s;
		}
		const Wt = lt;
		function qt(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] * l[0]), (o[1] = n[1] * l[1]), o;
		}
		const jt = qt;
		function Nt(n, l, s) {
			const o = s ?? new i(2);
			return (o[0] = n[0] / l[0]), (o[1] = n[1] / l[1]), o;
		}
		const $t = Nt;
		function Dt(n = 1, l) {
			const s = l ?? new i(2),
				o = Math.random() * 2 * Math.PI;
			return (s[0] = Math.cos(o) * n), (s[1] = Math.sin(o) * n), s;
		}
		function u(n) {
			const l = n ?? new i(2);
			return (l[0] = 0), (l[1] = 0), l;
		}
		function y(n, l, s) {
			const o = s ?? new i(2),
				f = n[0],
				v = n[1];
			return (
				(o[0] = f * l[0] + v * l[4] + l[12]),
				(o[1] = f * l[1] + v * l[5] + l[13]),
				o
			);
		}
		function a(n, l, s) {
			const o = s ?? new i(2),
				f = n[0],
				v = n[1];
			return (
				(o[0] = l[0] * f + l[4] * v + l[8]),
				(o[1] = l[1] * f + l[5] * v + l[9]),
				o
			);
		}
		function c(n, l, s, o) {
			const f = o ?? new i(2),
				v = n[0] - l[0],
				U = n[1] - l[1],
				d = Math.sin(s),
				_ = Math.cos(s);
			return (f[0] = v * _ - U * d + l[0]), (f[1] = v * d + U * _ + l[1]), f;
		}
		function m(n, l, s) {
			const o = s ?? new i(2);
			return bt(n, o), O(o, l, o);
		}
		function w(n, l, s) {
			const o = s ?? new i(2);
			return at(n) > l ? m(n, l, o) : lt(n, o);
		}
		function P(n, l, s) {
			const o = s ?? new i(2);
			return L(n, l, 0.5, o);
		}
		return {
			create: t,
			fromValues: e,
			set: r,
			ceil: h,
			floor: g,
			round: k,
			clamp: T,
			add: I,
			addScaled: B,
			angle: z,
			subtract: V,
			sub: Y,
			equalsApproximately: tt,
			equals: st,
			lerp: L,
			lerpV: F,
			max: Q,
			min: et,
			mulScalar: O,
			scale: W,
			divScalar: ot,
			inverse: pt,
			invert: it,
			cross: ut,
			dot: ht,
			length: at,
			len: kt,
			lengthSq: K,
			lenSq: j,
			distance: D,
			dist: gt,
			distanceSq: mt,
			distSq: St,
			normalize: bt,
			negate: Ct,
			copy: lt,
			clone: Wt,
			multiply: qt,
			mul: jt,
			divide: Nt,
			div: $t,
			random: Dt,
			zero: u,
			transformMat4: y,
			transformMat3: a,
			rotate: c,
			setLength: m,
			truncate: w,
			midpoint: P,
		};
	}
	const gn = new Map();
	function yn(i) {
		let t = gn.get(i);
		return t || ((t = pr(i)), gn.set(i, t)), t;
	}
	function fr(i) {
		function t(d, _, x) {
			const b = new i(3);
			return (
				d !== void 0 &&
					((b[0] = d),
					_ !== void 0 && ((b[1] = _), x !== void 0 && (b[2] = x))),
				b
			);
		}
		const e = t;
		function r(d, _, x, b) {
			const A = b ?? new i(3);
			return (A[0] = d), (A[1] = _), (A[2] = x), A;
		}
		function h(d, _) {
			const x = _ ?? new i(3);
			return (
				(x[0] = Math.ceil(d[0])),
				(x[1] = Math.ceil(d[1])),
				(x[2] = Math.ceil(d[2])),
				x
			);
		}
		function g(d, _) {
			const x = _ ?? new i(3);
			return (
				(x[0] = Math.floor(d[0])),
				(x[1] = Math.floor(d[1])),
				(x[2] = Math.floor(d[2])),
				x
			);
		}
		function k(d, _) {
			const x = _ ?? new i(3);
			return (
				(x[0] = Math.round(d[0])),
				(x[1] = Math.round(d[1])),
				(x[2] = Math.round(d[2])),
				x
			);
		}
		function T(d, _ = 0, x = 1, b) {
			const A = b ?? new i(3);
			return (
				(A[0] = Math.min(x, Math.max(_, d[0]))),
				(A[1] = Math.min(x, Math.max(_, d[1]))),
				(A[2] = Math.min(x, Math.max(_, d[2]))),
				A
			);
		}
		function I(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = d[0] + _[0]), (b[1] = d[1] + _[1]), (b[2] = d[2] + _[2]), b
			);
		}
		function B(d, _, x, b) {
			const A = b ?? new i(3);
			return (
				(A[0] = d[0] + _[0] * x),
				(A[1] = d[1] + _[1] * x),
				(A[2] = d[2] + _[2] * x),
				A
			);
		}
		function z(d, _) {
			const x = d[0],
				b = d[1],
				A = d[2],
				G = _[0],
				R = _[1],
				q = _[2],
				H = Math.sqrt(x * x + b * b + A * A),
				C = Math.sqrt(G * G + R * R + q * q),
				N = H * C,
				J = N && ht(d, _) / N;
			return Math.acos(J);
		}
		function V(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = d[0] - _[0]), (b[1] = d[1] - _[1]), (b[2] = d[2] - _[2]), b
			);
		}
		const Y = V;
		function tt(d, _) {
			return (
				Math.abs(d[0] - _[0]) < $ &&
				Math.abs(d[1] - _[1]) < $ &&
				Math.abs(d[2] - _[2]) < $
			);
		}
		function st(d, _) {
			return d[0] === _[0] && d[1] === _[1] && d[2] === _[2];
		}
		function L(d, _, x, b) {
			const A = b ?? new i(3);
			return (
				(A[0] = d[0] + x * (_[0] - d[0])),
				(A[1] = d[1] + x * (_[1] - d[1])),
				(A[2] = d[2] + x * (_[2] - d[2])),
				A
			);
		}
		function F(d, _, x, b) {
			const A = b ?? new i(3);
			return (
				(A[0] = d[0] + x[0] * (_[0] - d[0])),
				(A[1] = d[1] + x[1] * (_[1] - d[1])),
				(A[2] = d[2] + x[2] * (_[2] - d[2])),
				A
			);
		}
		function Q(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = Math.max(d[0], _[0])),
				(b[1] = Math.max(d[1], _[1])),
				(b[2] = Math.max(d[2], _[2])),
				b
			);
		}
		function et(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = Math.min(d[0], _[0])),
				(b[1] = Math.min(d[1], _[1])),
				(b[2] = Math.min(d[2], _[2])),
				b
			);
		}
		function O(d, _, x) {
			const b = x ?? new i(3);
			return (b[0] = d[0] * _), (b[1] = d[1] * _), (b[2] = d[2] * _), b;
		}
		const W = O;
		function ot(d, _, x) {
			const b = x ?? new i(3);
			return (b[0] = d[0] / _), (b[1] = d[1] / _), (b[2] = d[2] / _), b;
		}
		function pt(d, _) {
			const x = _ ?? new i(3);
			return (x[0] = 1 / d[0]), (x[1] = 1 / d[1]), (x[2] = 1 / d[2]), x;
		}
		const it = pt;
		function ut(d, _, x) {
			const b = x ?? new i(3),
				A = d[2] * _[0] - d[0] * _[2],
				G = d[0] * _[1] - d[1] * _[0];
			return (b[0] = d[1] * _[2] - d[2] * _[1]), (b[1] = A), (b[2] = G), b;
		}
		function ht(d, _) {
			return d[0] * _[0] + d[1] * _[1] + d[2] * _[2];
		}
		function at(d) {
			const _ = d[0],
				x = d[1],
				b = d[2];
			return Math.sqrt(_ * _ + x * x + b * b);
		}
		const kt = at;
		function K(d) {
			const _ = d[0],
				x = d[1],
				b = d[2];
			return _ * _ + x * x + b * b;
		}
		const j = K;
		function D(d, _) {
			const x = d[0] - _[0],
				b = d[1] - _[1],
				A = d[2] - _[2];
			return Math.sqrt(x * x + b * b + A * A);
		}
		const gt = D;
		function mt(d, _) {
			const x = d[0] - _[0],
				b = d[1] - _[1],
				A = d[2] - _[2];
			return x * x + b * b + A * A;
		}
		const St = mt;
		function bt(d, _) {
			const x = _ ?? new i(3),
				b = d[0],
				A = d[1],
				G = d[2],
				R = Math.sqrt(b * b + A * A + G * G);
			return (
				R > 1e-5
					? ((x[0] = b / R), (x[1] = A / R), (x[2] = G / R))
					: ((x[0] = 0), (x[1] = 0), (x[2] = 0)),
				x
			);
		}
		function Ct(d, _) {
			const x = _ ?? new i(3);
			return (x[0] = -d[0]), (x[1] = -d[1]), (x[2] = -d[2]), x;
		}
		function lt(d, _) {
			const x = _ ?? new i(3);
			return (x[0] = d[0]), (x[1] = d[1]), (x[2] = d[2]), x;
		}
		const Wt = lt;
		function qt(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = d[0] * _[0]), (b[1] = d[1] * _[1]), (b[2] = d[2] * _[2]), b
			);
		}
		const jt = qt;
		function Nt(d, _, x) {
			const b = x ?? new i(3);
			return (
				(b[0] = d[0] / _[0]), (b[1] = d[1] / _[1]), (b[2] = d[2] / _[2]), b
			);
		}
		const $t = Nt;
		function Dt(d = 1, _) {
			const x = _ ?? new i(3),
				b = Math.random() * 2 * Math.PI,
				A = Math.random() * 2 - 1,
				G = Math.sqrt(1 - A * A) * d;
			return (
				(x[0] = Math.cos(b) * G), (x[1] = Math.sin(b) * G), (x[2] = A * d), x
			);
		}
		function u(d) {
			const _ = d ?? new i(3);
			return (_[0] = 0), (_[1] = 0), (_[2] = 0), _;
		}
		function y(d, _, x) {
			const b = x ?? new i(3),
				A = d[0],
				G = d[1],
				R = d[2],
				q = _[3] * A + _[7] * G + _[11] * R + _[15] || 1;
			return (
				(b[0] = (_[0] * A + _[4] * G + _[8] * R + _[12]) / q),
				(b[1] = (_[1] * A + _[5] * G + _[9] * R + _[13]) / q),
				(b[2] = (_[2] * A + _[6] * G + _[10] * R + _[14]) / q),
				b
			);
		}
		function a(d, _, x) {
			const b = x ?? new i(3),
				A = d[0],
				G = d[1],
				R = d[2];
			return (
				(b[0] = A * _[0 * 4 + 0] + G * _[1 * 4 + 0] + R * _[2 * 4 + 0]),
				(b[1] = A * _[0 * 4 + 1] + G * _[1 * 4 + 1] + R * _[2 * 4 + 1]),
				(b[2] = A * _[0 * 4 + 2] + G * _[1 * 4 + 2] + R * _[2 * 4 + 2]),
				b
			);
		}
		function c(d, _, x) {
			const b = x ?? new i(3),
				A = d[0],
				G = d[1],
				R = d[2];
			return (
				(b[0] = A * _[0] + G * _[4] + R * _[8]),
				(b[1] = A * _[1] + G * _[5] + R * _[9]),
				(b[2] = A * _[2] + G * _[6] + R * _[10]),
				b
			);
		}
		function m(d, _, x) {
			const b = x ?? new i(3),
				A = _[0],
				G = _[1],
				R = _[2],
				q = _[3] * 2,
				H = d[0],
				C = d[1],
				N = d[2],
				J = G * N - R * C,
				nt = R * H - A * N,
				ft = A * C - G * H;
			return (
				(b[0] = H + J * q + (G * ft - R * nt) * 2),
				(b[1] = C + nt * q + (R * J - A * ft) * 2),
				(b[2] = N + ft * q + (A * nt - G * J) * 2),
				b
			);
		}
		function w(d, _) {
			const x = _ ?? new i(3);
			return (x[0] = d[12]), (x[1] = d[13]), (x[2] = d[14]), x;
		}
		function P(d, _, x) {
			const b = x ?? new i(3),
				A = _ * 4;
			return (b[0] = d[A + 0]), (b[1] = d[A + 1]), (b[2] = d[A + 2]), b;
		}
		function n(d, _) {
			const x = _ ?? new i(3),
				b = d[0],
				A = d[1],
				G = d[2],
				R = d[4],
				q = d[5],
				H = d[6],
				C = d[8],
				N = d[9],
				J = d[10];
			return (
				(x[0] = Math.sqrt(b * b + A * A + G * G)),
				(x[1] = Math.sqrt(R * R + q * q + H * H)),
				(x[2] = Math.sqrt(C * C + N * N + J * J)),
				x
			);
		}
		function l(d, _, x, b) {
			const A = b ?? new i(3),
				G = [],
				R = [];
			return (
				(G[0] = d[0] - _[0]),
				(G[1] = d[1] - _[1]),
				(G[2] = d[2] - _[2]),
				(R[0] = G[0]),
				(R[1] = G[1] * Math.cos(x) - G[2] * Math.sin(x)),
				(R[2] = G[1] * Math.sin(x) + G[2] * Math.cos(x)),
				(A[0] = R[0] + _[0]),
				(A[1] = R[1] + _[1]),
				(A[2] = R[2] + _[2]),
				A
			);
		}
		function s(d, _, x, b) {
			const A = b ?? new i(3),
				G = [],
				R = [];
			return (
				(G[0] = d[0] - _[0]),
				(G[1] = d[1] - _[1]),
				(G[2] = d[2] - _[2]),
				(R[0] = G[2] * Math.sin(x) + G[0] * Math.cos(x)),
				(R[1] = G[1]),
				(R[2] = G[2] * Math.cos(x) - G[0] * Math.sin(x)),
				(A[0] = R[0] + _[0]),
				(A[1] = R[1] + _[1]),
				(A[2] = R[2] + _[2]),
				A
			);
		}
		function o(d, _, x, b) {
			const A = b ?? new i(3),
				G = [],
				R = [];
			return (
				(G[0] = d[0] - _[0]),
				(G[1] = d[1] - _[1]),
				(G[2] = d[2] - _[2]),
				(R[0] = G[0] * Math.cos(x) - G[1] * Math.sin(x)),
				(R[1] = G[0] * Math.sin(x) + G[1] * Math.cos(x)),
				(R[2] = G[2]),
				(A[0] = R[0] + _[0]),
				(A[1] = R[1] + _[1]),
				(A[2] = R[2] + _[2]),
				A
			);
		}
		function f(d, _, x) {
			const b = x ?? new i(3);
			return bt(d, b), O(b, _, b);
		}
		function v(d, _, x) {
			const b = x ?? new i(3);
			return at(d) > _ ? f(d, _, b) : lt(d, b);
		}
		function U(d, _, x) {
			const b = x ?? new i(3);
			return L(d, _, 0.5, b);
		}
		return {
			create: t,
			fromValues: e,
			set: r,
			ceil: h,
			floor: g,
			round: k,
			clamp: T,
			add: I,
			addScaled: B,
			angle: z,
			subtract: V,
			sub: Y,
			equalsApproximately: tt,
			equals: st,
			lerp: L,
			lerpV: F,
			max: Q,
			min: et,
			mulScalar: O,
			scale: W,
			divScalar: ot,
			inverse: pt,
			invert: it,
			cross: ut,
			dot: ht,
			length: at,
			len: kt,
			lengthSq: K,
			lenSq: j,
			distance: D,
			dist: gt,
			distanceSq: mt,
			distSq: St,
			normalize: bt,
			negate: Ct,
			copy: lt,
			clone: Wt,
			multiply: qt,
			mul: jt,
			divide: Nt,
			div: $t,
			random: Dt,
			zero: u,
			transformMat4: y,
			transformMat4Upper3x3: a,
			transformMat3: c,
			transformQuat: m,
			getTranslation: w,
			getAxis: P,
			getScaling: n,
			rotateX: l,
			rotateY: s,
			rotateZ: o,
			setLength: f,
			truncate: v,
			midpoint: U,
		};
	}
	const wn = new Map();
	function we(i) {
		let t = wn.get(i);
		return t || ((t = fr(i)), wn.set(i, t)), t;
	}
	function _r(i) {
		const t = yn(i),
			e = we(i);
		function r(u, y, a, c, m, w, P, n, l) {
			const s = new i(12);
			return (
				(s[3] = 0),
				(s[7] = 0),
				(s[11] = 0),
				u !== void 0 &&
					((s[0] = u),
					y !== void 0 &&
						((s[1] = y),
						a !== void 0 &&
							((s[2] = a),
							c !== void 0 &&
								((s[4] = c),
								m !== void 0 &&
									((s[5] = m),
									w !== void 0 &&
										((s[6] = w),
										P !== void 0 &&
											((s[8] = P),
											n !== void 0 &&
												((s[9] = n), l !== void 0 && (s[10] = l))))))))),
				s
			);
		}
		function h(u, y, a, c, m, w, P, n, l, s) {
			const o = s ?? new i(12);
			return (
				(o[0] = u),
				(o[1] = y),
				(o[2] = a),
				(o[3] = 0),
				(o[4] = c),
				(o[5] = m),
				(o[6] = w),
				(o[7] = 0),
				(o[8] = P),
				(o[9] = n),
				(o[10] = l),
				(o[11] = 0),
				o
			);
		}
		function g(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u[0]),
				(a[1] = u[1]),
				(a[2] = u[2]),
				(a[3] = 0),
				(a[4] = u[4]),
				(a[5] = u[5]),
				(a[6] = u[6]),
				(a[7] = 0),
				(a[8] = u[8]),
				(a[9] = u[9]),
				(a[10] = u[10]),
				(a[11] = 0),
				a
			);
		}
		function k(u, y) {
			const a = y ?? new i(12),
				c = u[0],
				m = u[1],
				w = u[2],
				P = u[3],
				n = c + c,
				l = m + m,
				s = w + w,
				o = c * n,
				f = m * n,
				v = m * l,
				U = w * n,
				d = w * l,
				_ = w * s,
				x = P * n,
				b = P * l,
				A = P * s;
			return (
				(a[0] = 1 - v - _),
				(a[1] = f + A),
				(a[2] = U - b),
				(a[3] = 0),
				(a[4] = f - A),
				(a[5] = 1 - o - _),
				(a[6] = d + x),
				(a[7] = 0),
				(a[8] = U + b),
				(a[9] = d - x),
				(a[10] = 1 - o - v),
				(a[11] = 0),
				a
			);
		}
		function T(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = -u[0]),
				(a[1] = -u[1]),
				(a[2] = -u[2]),
				(a[4] = -u[4]),
				(a[5] = -u[5]),
				(a[6] = -u[6]),
				(a[8] = -u[8]),
				(a[9] = -u[9]),
				(a[10] = -u[10]),
				a
			);
		}
		function I(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u[0]),
				(a[1] = u[1]),
				(a[2] = u[2]),
				(a[4] = u[4]),
				(a[5] = u[5]),
				(a[6] = u[6]),
				(a[8] = u[8]),
				(a[9] = u[9]),
				(a[10] = u[10]),
				a
			);
		}
		const B = I;
		function z(u, y) {
			return (
				Math.abs(u[0] - y[0]) < $ &&
				Math.abs(u[1] - y[1]) < $ &&
				Math.abs(u[2] - y[2]) < $ &&
				Math.abs(u[4] - y[4]) < $ &&
				Math.abs(u[5] - y[5]) < $ &&
				Math.abs(u[6] - y[6]) < $ &&
				Math.abs(u[8] - y[8]) < $ &&
				Math.abs(u[9] - y[9]) < $ &&
				Math.abs(u[10] - y[10]) < $
			);
		}
		function V(u, y) {
			return (
				u[0] === y[0] &&
				u[1] === y[1] &&
				u[2] === y[2] &&
				u[4] === y[4] &&
				u[5] === y[5] &&
				u[6] === y[6] &&
				u[8] === y[8] &&
				u[9] === y[9] &&
				u[10] === y[10]
			);
		}
		function Y(u) {
			const y = u ?? new i(12);
			return (
				(y[0] = 1),
				(y[1] = 0),
				(y[2] = 0),
				(y[4] = 0),
				(y[5] = 1),
				(y[6] = 0),
				(y[8] = 0),
				(y[9] = 0),
				(y[10] = 1),
				y
			);
		}
		function tt(u, y) {
			const a = y ?? new i(12);
			if (a === u) {
				let v;
				return (
					(v = u[1]),
					(u[1] = u[4]),
					(u[4] = v),
					(v = u[2]),
					(u[2] = u[8]),
					(u[8] = v),
					(v = u[6]),
					(u[6] = u[9]),
					(u[9] = v),
					a
				);
			}
			const c = u[0 * 4 + 0],
				m = u[0 * 4 + 1],
				w = u[0 * 4 + 2],
				P = u[1 * 4 + 0],
				n = u[1 * 4 + 1],
				l = u[1 * 4 + 2],
				s = u[2 * 4 + 0],
				o = u[2 * 4 + 1],
				f = u[2 * 4 + 2];
			return (
				(a[0] = c),
				(a[1] = P),
				(a[2] = s),
				(a[4] = m),
				(a[5] = n),
				(a[6] = o),
				(a[8] = w),
				(a[9] = l),
				(a[10] = f),
				a
			);
		}
		function st(u, y) {
			const a = y ?? new i(12),
				c = u[0 * 4 + 0],
				m = u[0 * 4 + 1],
				w = u[0 * 4 + 2],
				P = u[1 * 4 + 0],
				n = u[1 * 4 + 1],
				l = u[1 * 4 + 2],
				s = u[2 * 4 + 0],
				o = u[2 * 4 + 1],
				f = u[2 * 4 + 2],
				v = f * n - l * o,
				U = -f * P + l * s,
				d = o * P - n * s,
				_ = 1 / (c * v + m * U + w * d);
			return (
				(a[0] = v * _),
				(a[1] = (-f * m + w * o) * _),
				(a[2] = (l * m - w * n) * _),
				(a[4] = U * _),
				(a[5] = (f * c - w * s) * _),
				(a[6] = (-l * c + w * P) * _),
				(a[8] = d * _),
				(a[9] = (-o * c + m * s) * _),
				(a[10] = (n * c - m * P) * _),
				a
			);
		}
		function L(u) {
			const y = u[0],
				a = u[0 * 4 + 1],
				c = u[0 * 4 + 2],
				m = u[1 * 4 + 0],
				w = u[1 * 4 + 1],
				P = u[1 * 4 + 2],
				n = u[2 * 4 + 0],
				l = u[2 * 4 + 1],
				s = u[2 * 4 + 2];
			return y * (w * s - l * P) - m * (a * s - l * c) + n * (a * P - w * c);
		}
		const F = st;
		function Q(u, y, a) {
			const c = a ?? new i(12),
				m = u[0],
				w = u[1],
				P = u[2],
				n = u[4],
				l = u[5],
				s = u[6],
				o = u[8],
				f = u[9],
				v = u[10],
				U = y[0],
				d = y[1],
				_ = y[2],
				x = y[4],
				b = y[5],
				A = y[6],
				G = y[8],
				R = y[9],
				q = y[10];
			return (
				(c[0] = m * U + n * d + o * _),
				(c[1] = w * U + l * d + f * _),
				(c[2] = P * U + s * d + v * _),
				(c[4] = m * x + n * b + o * A),
				(c[5] = w * x + l * b + f * A),
				(c[6] = P * x + s * b + v * A),
				(c[8] = m * G + n * R + o * q),
				(c[9] = w * G + l * R + f * q),
				(c[10] = P * G + s * R + v * q),
				c
			);
		}
		const et = Q;
		function O(u, y, a) {
			const c = a ?? Y();
			return (
				u !== c &&
					((c[0] = u[0]),
					(c[1] = u[1]),
					(c[2] = u[2]),
					(c[4] = u[4]),
					(c[5] = u[5]),
					(c[6] = u[6])),
				(c[8] = y[0]),
				(c[9] = y[1]),
				(c[10] = 1),
				c
			);
		}
		function W(u, y) {
			const a = y ?? t.create();
			return (a[0] = u[8]), (a[1] = u[9]), a;
		}
		function ot(u, y, a) {
			const c = a ?? t.create(),
				m = y * 4;
			return (c[0] = u[m + 0]), (c[1] = u[m + 1]), c;
		}
		function pt(u, y, a, c) {
			const m = c === u ? u : I(u, c),
				w = a * 4;
			return (m[w + 0] = y[0]), (m[w + 1] = y[1]), m;
		}
		function it(u, y) {
			const a = y ?? t.create(),
				c = u[0],
				m = u[1],
				w = u[4],
				P = u[5];
			return (
				(a[0] = Math.sqrt(c * c + m * m)), (a[1] = Math.sqrt(w * w + P * P)), a
			);
		}
		function ut(u, y) {
			const a = y ?? e.create(),
				c = u[0],
				m = u[1],
				w = u[2],
				P = u[4],
				n = u[5],
				l = u[6],
				s = u[8],
				o = u[9],
				f = u[10];
			return (
				(a[0] = Math.sqrt(c * c + m * m + w * w)),
				(a[1] = Math.sqrt(P * P + n * n + l * l)),
				(a[2] = Math.sqrt(s * s + o * o + f * f)),
				a
			);
		}
		function ht(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = 1),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = 1),
				(a[6] = 0),
				(a[8] = u[0]),
				(a[9] = u[1]),
				(a[10] = 1),
				a
			);
		}
		function at(u, y, a) {
			const c = a ?? new i(12),
				m = y[0],
				w = y[1],
				P = u[0],
				n = u[1],
				l = u[2],
				s = u[1 * 4 + 0],
				o = u[1 * 4 + 1],
				f = u[1 * 4 + 2],
				v = u[2 * 4 + 0],
				U = u[2 * 4 + 1],
				d = u[2 * 4 + 2];
			return (
				u !== c &&
					((c[0] = P),
					(c[1] = n),
					(c[2] = l),
					(c[4] = s),
					(c[5] = o),
					(c[6] = f)),
				(c[8] = P * m + s * w + v),
				(c[9] = n * m + o * w + U),
				(c[10] = l * m + f * w + d),
				c
			);
		}
		function kt(u, y) {
			const a = y ?? new i(12),
				c = Math.cos(u),
				m = Math.sin(u);
			return (
				(a[0] = c),
				(a[1] = m),
				(a[2] = 0),
				(a[4] = -m),
				(a[5] = c),
				(a[6] = 0),
				(a[8] = 0),
				(a[9] = 0),
				(a[10] = 1),
				a
			);
		}
		function K(u, y, a) {
			const c = a ?? new i(12),
				m = u[0 * 4 + 0],
				w = u[0 * 4 + 1],
				P = u[0 * 4 + 2],
				n = u[1 * 4 + 0],
				l = u[1 * 4 + 1],
				s = u[1 * 4 + 2],
				o = Math.cos(y),
				f = Math.sin(y);
			return (
				(c[0] = o * m + f * n),
				(c[1] = o * w + f * l),
				(c[2] = o * P + f * s),
				(c[4] = o * n - f * m),
				(c[5] = o * l - f * w),
				(c[6] = o * s - f * P),
				u !== c && ((c[8] = u[8]), (c[9] = u[9]), (c[10] = u[10])),
				c
			);
		}
		function j(u, y) {
			const a = y ?? new i(12),
				c = Math.cos(u),
				m = Math.sin(u);
			return (
				(a[0] = 1),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = c),
				(a[6] = m),
				(a[8] = 0),
				(a[9] = -m),
				(a[10] = c),
				a
			);
		}
		function D(u, y, a) {
			const c = a ?? new i(12),
				m = u[4],
				w = u[5],
				P = u[6],
				n = u[8],
				l = u[9],
				s = u[10],
				o = Math.cos(y),
				f = Math.sin(y);
			return (
				(c[4] = o * m + f * n),
				(c[5] = o * w + f * l),
				(c[6] = o * P + f * s),
				(c[8] = o * n - f * m),
				(c[9] = o * l - f * w),
				(c[10] = o * s - f * P),
				u !== c && ((c[0] = u[0]), (c[1] = u[1]), (c[2] = u[2])),
				c
			);
		}
		function gt(u, y) {
			const a = y ?? new i(12),
				c = Math.cos(u),
				m = Math.sin(u);
			return (
				(a[0] = c),
				(a[1] = 0),
				(a[2] = -m),
				(a[4] = 0),
				(a[5] = 1),
				(a[6] = 0),
				(a[8] = m),
				(a[9] = 0),
				(a[10] = c),
				a
			);
		}
		function mt(u, y, a) {
			const c = a ?? new i(12),
				m = u[0 * 4 + 0],
				w = u[0 * 4 + 1],
				P = u[0 * 4 + 2],
				n = u[2 * 4 + 0],
				l = u[2 * 4 + 1],
				s = u[2 * 4 + 2],
				o = Math.cos(y),
				f = Math.sin(y);
			return (
				(c[0] = o * m - f * n),
				(c[1] = o * w - f * l),
				(c[2] = o * P - f * s),
				(c[8] = o * n + f * m),
				(c[9] = o * l + f * w),
				(c[10] = o * s + f * P),
				u !== c && ((c[4] = u[4]), (c[5] = u[5]), (c[6] = u[6])),
				c
			);
		}
		const St = kt,
			bt = K;
		function Ct(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u[0]),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = u[1]),
				(a[6] = 0),
				(a[8] = 0),
				(a[9] = 0),
				(a[10] = 1),
				a
			);
		}
		function lt(u, y, a) {
			const c = a ?? new i(12),
				m = y[0],
				w = y[1];
			return (
				(c[0] = m * u[0 * 4 + 0]),
				(c[1] = m * u[0 * 4 + 1]),
				(c[2] = m * u[0 * 4 + 2]),
				(c[4] = w * u[1 * 4 + 0]),
				(c[5] = w * u[1 * 4 + 1]),
				(c[6] = w * u[1 * 4 + 2]),
				u !== c && ((c[8] = u[8]), (c[9] = u[9]), (c[10] = u[10])),
				c
			);
		}
		function Wt(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u[0]),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = u[1]),
				(a[6] = 0),
				(a[8] = 0),
				(a[9] = 0),
				(a[10] = u[2]),
				a
			);
		}
		function qt(u, y, a) {
			const c = a ?? new i(12),
				m = y[0],
				w = y[1],
				P = y[2];
			return (
				(c[0] = m * u[0 * 4 + 0]),
				(c[1] = m * u[0 * 4 + 1]),
				(c[2] = m * u[0 * 4 + 2]),
				(c[4] = w * u[1 * 4 + 0]),
				(c[5] = w * u[1 * 4 + 1]),
				(c[6] = w * u[1 * 4 + 2]),
				(c[8] = P * u[2 * 4 + 0]),
				(c[9] = P * u[2 * 4 + 1]),
				(c[10] = P * u[2 * 4 + 2]),
				c
			);
		}
		function jt(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = u),
				(a[6] = 0),
				(a[8] = 0),
				(a[9] = 0),
				(a[10] = 1),
				a
			);
		}
		function Nt(u, y, a) {
			const c = a ?? new i(12);
			return (
				(c[0] = y * u[0 * 4 + 0]),
				(c[1] = y * u[0 * 4 + 1]),
				(c[2] = y * u[0 * 4 + 2]),
				(c[4] = y * u[1 * 4 + 0]),
				(c[5] = y * u[1 * 4 + 1]),
				(c[6] = y * u[1 * 4 + 2]),
				u !== c && ((c[8] = u[8]), (c[9] = u[9]), (c[10] = u[10])),
				c
			);
		}
		function $t(u, y) {
			const a = y ?? new i(12);
			return (
				(a[0] = u),
				(a[1] = 0),
				(a[2] = 0),
				(a[4] = 0),
				(a[5] = u),
				(a[6] = 0),
				(a[8] = 0),
				(a[9] = 0),
				(a[10] = u),
				a
			);
		}
		function Dt(u, y, a) {
			const c = a ?? new i(12);
			return (
				(c[0] = y * u[0 * 4 + 0]),
				(c[1] = y * u[0 * 4 + 1]),
				(c[2] = y * u[0 * 4 + 2]),
				(c[4] = y * u[1 * 4 + 0]),
				(c[5] = y * u[1 * 4 + 1]),
				(c[6] = y * u[1 * 4 + 2]),
				(c[8] = y * u[2 * 4 + 0]),
				(c[9] = y * u[2 * 4 + 1]),
				(c[10] = y * u[2 * 4 + 2]),
				c
			);
		}
		return {
			clone: B,
			create: r,
			set: h,
			fromMat4: g,
			fromQuat: k,
			negate: T,
			copy: I,
			equalsApproximately: z,
			equals: V,
			identity: Y,
			transpose: tt,
			inverse: st,
			invert: F,
			determinant: L,
			mul: et,
			multiply: Q,
			setTranslation: O,
			getTranslation: W,
			getAxis: ot,
			setAxis: pt,
			getScaling: it,
			get3DScaling: ut,
			translation: ht,
			translate: at,
			rotation: kt,
			rotate: K,
			rotationX: j,
			rotateX: D,
			rotationY: gt,
			rotateY: mt,
			rotationZ: St,
			rotateZ: bt,
			scaling: Ct,
			scale: lt,
			uniformScaling: jt,
			uniformScale: Nt,
			scaling3D: Wt,
			scale3D: qt,
			uniformScaling3D: $t,
			uniformScale3D: Dt,
		};
	}
	const xn = new Map();
	function mr(i) {
		let t = xn.get(i);
		return t || ((t = _r(i)), xn.set(i, t)), t;
	}
	function gr(i) {
		const t = we(i);
		function e(n, l, s, o, f, v, U, d, _, x, b, A, G, R, q, H) {
			const C = new i(16);
			return (
				n !== void 0 &&
					((C[0] = n),
					l !== void 0 &&
						((C[1] = l),
						s !== void 0 &&
							((C[2] = s),
							o !== void 0 &&
								((C[3] = o),
								f !== void 0 &&
									((C[4] = f),
									v !== void 0 &&
										((C[5] = v),
										U !== void 0 &&
											((C[6] = U),
											d !== void 0 &&
												((C[7] = d),
												_ !== void 0 &&
													((C[8] = _),
													x !== void 0 &&
														((C[9] = x),
														b !== void 0 &&
															((C[10] = b),
															A !== void 0 &&
																((C[11] = A),
																G !== void 0 &&
																	((C[12] = G),
																	R !== void 0 &&
																		((C[13] = R),
																		q !== void 0 &&
																			((C[14] = q),
																			H !== void 0 &&
																				(C[15] = H)))))))))))))))),
				C
			);
		}
		function r(n, l, s, o, f, v, U, d, _, x, b, A, G, R, q, H, C) {
			const N = C ?? new i(16);
			return (
				(N[0] = n),
				(N[1] = l),
				(N[2] = s),
				(N[3] = o),
				(N[4] = f),
				(N[5] = v),
				(N[6] = U),
				(N[7] = d),
				(N[8] = _),
				(N[9] = x),
				(N[10] = b),
				(N[11] = A),
				(N[12] = G),
				(N[13] = R),
				(N[14] = q),
				(N[15] = H),
				N
			);
		}
		function h(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = n[0]),
				(s[1] = n[1]),
				(s[2] = n[2]),
				(s[3] = 0),
				(s[4] = n[4]),
				(s[5] = n[5]),
				(s[6] = n[6]),
				(s[7] = 0),
				(s[8] = n[8]),
				(s[9] = n[9]),
				(s[10] = n[10]),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function g(n, l) {
			const s = l ?? new i(16),
				o = n[0],
				f = n[1],
				v = n[2],
				U = n[3],
				d = o + o,
				_ = f + f,
				x = v + v,
				b = o * d,
				A = f * d,
				G = f * _,
				R = v * d,
				q = v * _,
				H = v * x,
				C = U * d,
				N = U * _,
				J = U * x;
			return (
				(s[0] = 1 - G - H),
				(s[1] = A + J),
				(s[2] = R - N),
				(s[3] = 0),
				(s[4] = A - J),
				(s[5] = 1 - b - H),
				(s[6] = q + C),
				(s[7] = 0),
				(s[8] = R + N),
				(s[9] = q - C),
				(s[10] = 1 - b - G),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function k(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = -n[0]),
				(s[1] = -n[1]),
				(s[2] = -n[2]),
				(s[3] = -n[3]),
				(s[4] = -n[4]),
				(s[5] = -n[5]),
				(s[6] = -n[6]),
				(s[7] = -n[7]),
				(s[8] = -n[8]),
				(s[9] = -n[9]),
				(s[10] = -n[10]),
				(s[11] = -n[11]),
				(s[12] = -n[12]),
				(s[13] = -n[13]),
				(s[14] = -n[14]),
				(s[15] = -n[15]),
				s
			);
		}
		function T(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = n[0]),
				(s[1] = n[1]),
				(s[2] = n[2]),
				(s[3] = n[3]),
				(s[4] = n[4]),
				(s[5] = n[5]),
				(s[6] = n[6]),
				(s[7] = n[7]),
				(s[8] = n[8]),
				(s[9] = n[9]),
				(s[10] = n[10]),
				(s[11] = n[11]),
				(s[12] = n[12]),
				(s[13] = n[13]),
				(s[14] = n[14]),
				(s[15] = n[15]),
				s
			);
		}
		const I = T;
		function B(n, l) {
			return (
				Math.abs(n[0] - l[0]) < $ &&
				Math.abs(n[1] - l[1]) < $ &&
				Math.abs(n[2] - l[2]) < $ &&
				Math.abs(n[3] - l[3]) < $ &&
				Math.abs(n[4] - l[4]) < $ &&
				Math.abs(n[5] - l[5]) < $ &&
				Math.abs(n[6] - l[6]) < $ &&
				Math.abs(n[7] - l[7]) < $ &&
				Math.abs(n[8] - l[8]) < $ &&
				Math.abs(n[9] - l[9]) < $ &&
				Math.abs(n[10] - l[10]) < $ &&
				Math.abs(n[11] - l[11]) < $ &&
				Math.abs(n[12] - l[12]) < $ &&
				Math.abs(n[13] - l[13]) < $ &&
				Math.abs(n[14] - l[14]) < $ &&
				Math.abs(n[15] - l[15]) < $
			);
		}
		function z(n, l) {
			return (
				n[0] === l[0] &&
				n[1] === l[1] &&
				n[2] === l[2] &&
				n[3] === l[3] &&
				n[4] === l[4] &&
				n[5] === l[5] &&
				n[6] === l[6] &&
				n[7] === l[7] &&
				n[8] === l[8] &&
				n[9] === l[9] &&
				n[10] === l[10] &&
				n[11] === l[11] &&
				n[12] === l[12] &&
				n[13] === l[13] &&
				n[14] === l[14] &&
				n[15] === l[15]
			);
		}
		function V(n) {
			const l = n ?? new i(16);
			return (
				(l[0] = 1),
				(l[1] = 0),
				(l[2] = 0),
				(l[3] = 0),
				(l[4] = 0),
				(l[5] = 1),
				(l[6] = 0),
				(l[7] = 0),
				(l[8] = 0),
				(l[9] = 0),
				(l[10] = 1),
				(l[11] = 0),
				(l[12] = 0),
				(l[13] = 0),
				(l[14] = 0),
				(l[15] = 1),
				l
			);
		}
		function Y(n, l) {
			const s = l ?? new i(16);
			if (s === n) {
				let nt;
				return (
					(nt = n[1]),
					(n[1] = n[4]),
					(n[4] = nt),
					(nt = n[2]),
					(n[2] = n[8]),
					(n[8] = nt),
					(nt = n[3]),
					(n[3] = n[12]),
					(n[12] = nt),
					(nt = n[6]),
					(n[6] = n[9]),
					(n[9] = nt),
					(nt = n[7]),
					(n[7] = n[13]),
					(n[13] = nt),
					(nt = n[11]),
					(n[11] = n[14]),
					(n[14] = nt),
					s
				);
			}
			const o = n[0 * 4 + 0],
				f = n[0 * 4 + 1],
				v = n[0 * 4 + 2],
				U = n[0 * 4 + 3],
				d = n[1 * 4 + 0],
				_ = n[1 * 4 + 1],
				x = n[1 * 4 + 2],
				b = n[1 * 4 + 3],
				A = n[2 * 4 + 0],
				G = n[2 * 4 + 1],
				R = n[2 * 4 + 2],
				q = n[2 * 4 + 3],
				H = n[3 * 4 + 0],
				C = n[3 * 4 + 1],
				N = n[3 * 4 + 2],
				J = n[3 * 4 + 3];
			return (
				(s[0] = o),
				(s[1] = d),
				(s[2] = A),
				(s[3] = H),
				(s[4] = f),
				(s[5] = _),
				(s[6] = G),
				(s[7] = C),
				(s[8] = v),
				(s[9] = x),
				(s[10] = R),
				(s[11] = N),
				(s[12] = U),
				(s[13] = b),
				(s[14] = q),
				(s[15] = J),
				s
			);
		}
		function tt(n, l) {
			const s = l ?? new i(16),
				o = n[0 * 4 + 0],
				f = n[0 * 4 + 1],
				v = n[0 * 4 + 2],
				U = n[0 * 4 + 3],
				d = n[1 * 4 + 0],
				_ = n[1 * 4 + 1],
				x = n[1 * 4 + 2],
				b = n[1 * 4 + 3],
				A = n[2 * 4 + 0],
				G = n[2 * 4 + 1],
				R = n[2 * 4 + 2],
				q = n[2 * 4 + 3],
				H = n[3 * 4 + 0],
				C = n[3 * 4 + 1],
				N = n[3 * 4 + 2],
				J = n[3 * 4 + 3],
				nt = R * J,
				ft = N * q,
				yt = x * J,
				wt = N * b,
				Mt = x * q,
				Et = R * b,
				Tt = v * J,
				At = N * U,
				Pt = v * q,
				Ut = R * U,
				Rt = v * b,
				zt = x * U,
				Bt = A * C,
				Vt = H * G,
				Ft = d * C,
				Lt = H * _,
				Ot = d * G,
				qe = A * _,
				Ne = o * C,
				De = H * f,
				Fe = o * G,
				Le = A * f,
				Oe = o * _,
				He = d * f,
				cr = nt * _ + wt * G + Mt * C - (ft * _ + yt * G + Et * C),
				hr = ft * f + Tt * G + Ut * C - (nt * f + At * G + Pt * C),
				lr = yt * f + At * _ + Rt * C - (wt * f + Tt * _ + zt * C),
				dr = Et * f + Pt * _ + zt * G - (Mt * f + Ut * _ + Rt * G),
				Gt = 1 / (o * cr + d * hr + A * lr + H * dr);
			return (
				(s[0] = Gt * cr),
				(s[1] = Gt * hr),
				(s[2] = Gt * lr),
				(s[3] = Gt * dr),
				(s[4] = Gt * (ft * d + yt * A + Et * H - (nt * d + wt * A + Mt * H))),
				(s[5] = Gt * (nt * o + At * A + Pt * H - (ft * o + Tt * A + Ut * H))),
				(s[6] = Gt * (wt * o + Tt * d + zt * H - (yt * o + At * d + Rt * H))),
				(s[7] = Gt * (Mt * o + Ut * d + Rt * A - (Et * o + Pt * d + zt * A))),
				(s[8] = Gt * (Bt * b + Lt * q + Ot * J - (Vt * b + Ft * q + qe * J))),
				(s[9] = Gt * (Vt * U + Ne * q + Le * J - (Bt * U + De * q + Fe * J))),
				(s[10] = Gt * (Ft * U + De * b + Oe * J - (Lt * U + Ne * b + He * J))),
				(s[11] = Gt * (qe * U + Fe * b + He * q - (Ot * U + Le * b + Oe * q))),
				(s[12] = Gt * (Ft * R + qe * N + Vt * x - (Ot * N + Bt * x + Lt * R))),
				(s[13] = Gt * (Fe * N + Bt * v + De * R - (Ne * R + Le * N + Vt * v))),
				(s[14] = Gt * (Ne * x + He * N + Lt * v - (Oe * N + Ft * v + De * x))),
				(s[15] = Gt * (Oe * R + Ot * v + Le * x - (Fe * x + He * R + qe * v))),
				s
			);
		}
		function st(n) {
			const l = n[0],
				s = n[0 * 4 + 1],
				o = n[0 * 4 + 2],
				f = n[0 * 4 + 3],
				v = n[1 * 4 + 0],
				U = n[1 * 4 + 1],
				d = n[1 * 4 + 2],
				_ = n[1 * 4 + 3],
				x = n[2 * 4 + 0],
				b = n[2 * 4 + 1],
				A = n[2 * 4 + 2],
				G = n[2 * 4 + 3],
				R = n[3 * 4 + 0],
				q = n[3 * 4 + 1],
				H = n[3 * 4 + 2],
				C = n[3 * 4 + 3],
				N = A * C,
				J = H * G,
				nt = d * C,
				ft = H * _,
				yt = d * G,
				wt = A * _,
				Mt = o * C,
				Et = H * f,
				Tt = o * G,
				At = A * f,
				Pt = o * _,
				Ut = d * f,
				Rt = N * U + ft * b + yt * q - (J * U + nt * b + wt * q),
				zt = J * s + Mt * b + At * q - (N * s + Et * b + Tt * q),
				Bt = nt * s + Et * U + Pt * q - (ft * s + Mt * U + Ut * q),
				Vt = wt * s + Tt * U + Ut * b - (yt * s + At * U + Pt * b);
			return l * Rt + v * zt + x * Bt + R * Vt;
		}
		const L = tt;
		function F(n, l, s) {
			const o = s ?? new i(16),
				f = n[0],
				v = n[1],
				U = n[2],
				d = n[3],
				_ = n[4],
				x = n[5],
				b = n[6],
				A = n[7],
				G = n[8],
				R = n[9],
				q = n[10],
				H = n[11],
				C = n[12],
				N = n[13],
				J = n[14],
				nt = n[15],
				ft = l[0],
				yt = l[1],
				wt = l[2],
				Mt = l[3],
				Et = l[4],
				Tt = l[5],
				At = l[6],
				Pt = l[7],
				Ut = l[8],
				Rt = l[9],
				zt = l[10],
				Bt = l[11],
				Vt = l[12],
				Ft = l[13],
				Lt = l[14],
				Ot = l[15];
			return (
				(o[0] = f * ft + _ * yt + G * wt + C * Mt),
				(o[1] = v * ft + x * yt + R * wt + N * Mt),
				(o[2] = U * ft + b * yt + q * wt + J * Mt),
				(o[3] = d * ft + A * yt + H * wt + nt * Mt),
				(o[4] = f * Et + _ * Tt + G * At + C * Pt),
				(o[5] = v * Et + x * Tt + R * At + N * Pt),
				(o[6] = U * Et + b * Tt + q * At + J * Pt),
				(o[7] = d * Et + A * Tt + H * At + nt * Pt),
				(o[8] = f * Ut + _ * Rt + G * zt + C * Bt),
				(o[9] = v * Ut + x * Rt + R * zt + N * Bt),
				(o[10] = U * Ut + b * Rt + q * zt + J * Bt),
				(o[11] = d * Ut + A * Rt + H * zt + nt * Bt),
				(o[12] = f * Vt + _ * Ft + G * Lt + C * Ot),
				(o[13] = v * Vt + x * Ft + R * Lt + N * Ot),
				(o[14] = U * Vt + b * Ft + q * Lt + J * Ot),
				(o[15] = d * Vt + A * Ft + H * Lt + nt * Ot),
				o
			);
		}
		const Q = F;
		function et(n, l, s) {
			const o = s ?? V();
			return (
				n !== o &&
					((o[0] = n[0]),
					(o[1] = n[1]),
					(o[2] = n[2]),
					(o[3] = n[3]),
					(o[4] = n[4]),
					(o[5] = n[5]),
					(o[6] = n[6]),
					(o[7] = n[7]),
					(o[8] = n[8]),
					(o[9] = n[9]),
					(o[10] = n[10]),
					(o[11] = n[11])),
				(o[12] = l[0]),
				(o[13] = l[1]),
				(o[14] = l[2]),
				(o[15] = 1),
				o
			);
		}
		function O(n, l) {
			const s = l ?? t.create();
			return (s[0] = n[12]), (s[1] = n[13]), (s[2] = n[14]), s;
		}
		function W(n, l, s) {
			const o = s ?? t.create(),
				f = l * 4;
			return (o[0] = n[f + 0]), (o[1] = n[f + 1]), (o[2] = n[f + 2]), o;
		}
		function ot(n, l, s, o) {
			const f = o === n ? o : T(n, o),
				v = s * 4;
			return (f[v + 0] = l[0]), (f[v + 1] = l[1]), (f[v + 2] = l[2]), f;
		}
		function pt(n, l) {
			const s = l ?? t.create(),
				o = n[0],
				f = n[1],
				v = n[2],
				U = n[4],
				d = n[5],
				_ = n[6],
				x = n[8],
				b = n[9],
				A = n[10];
			return (
				(s[0] = Math.sqrt(o * o + f * f + v * v)),
				(s[1] = Math.sqrt(U * U + d * d + _ * _)),
				(s[2] = Math.sqrt(x * x + b * b + A * A)),
				s
			);
		}
		function it(n, l, s, o, f) {
			const v = f ?? new i(16),
				U = Math.tan(Math.PI * 0.5 - 0.5 * n);
			if (
				((v[0] = U / l),
				(v[1] = 0),
				(v[2] = 0),
				(v[3] = 0),
				(v[4] = 0),
				(v[5] = U),
				(v[6] = 0),
				(v[7] = 0),
				(v[8] = 0),
				(v[9] = 0),
				(v[11] = -1),
				(v[12] = 0),
				(v[13] = 0),
				(v[15] = 0),
				Number.isFinite(o))
			) {
				const d = 1 / (s - o);
				(v[10] = o * d), (v[14] = o * s * d);
			} else (v[10] = -1), (v[14] = -s);
			return v;
		}
		function ut(n, l, s, o = 1 / 0, f) {
			const v = f ?? new i(16),
				U = 1 / Math.tan(n * 0.5);
			if (
				((v[0] = U / l),
				(v[1] = 0),
				(v[2] = 0),
				(v[3] = 0),
				(v[4] = 0),
				(v[5] = U),
				(v[6] = 0),
				(v[7] = 0),
				(v[8] = 0),
				(v[9] = 0),
				(v[11] = -1),
				(v[12] = 0),
				(v[13] = 0),
				(v[15] = 0),
				o === 1 / 0)
			)
				(v[10] = 0), (v[14] = s);
			else {
				const d = 1 / (o - s);
				(v[10] = s * d), (v[14] = o * s * d);
			}
			return v;
		}
		function ht(n, l, s, o, f, v, U) {
			const d = U ?? new i(16);
			return (
				(d[0] = 2 / (l - n)),
				(d[1] = 0),
				(d[2] = 0),
				(d[3] = 0),
				(d[4] = 0),
				(d[5] = 2 / (o - s)),
				(d[6] = 0),
				(d[7] = 0),
				(d[8] = 0),
				(d[9] = 0),
				(d[10] = 1 / (f - v)),
				(d[11] = 0),
				(d[12] = (l + n) / (n - l)),
				(d[13] = (o + s) / (s - o)),
				(d[14] = f / (f - v)),
				(d[15] = 1),
				d
			);
		}
		function at(n, l, s, o, f, v, U) {
			const d = U ?? new i(16),
				_ = l - n,
				x = o - s,
				b = f - v;
			return (
				(d[0] = (2 * f) / _),
				(d[1] = 0),
				(d[2] = 0),
				(d[3] = 0),
				(d[4] = 0),
				(d[5] = (2 * f) / x),
				(d[6] = 0),
				(d[7] = 0),
				(d[8] = (n + l) / _),
				(d[9] = (o + s) / x),
				(d[10] = v / b),
				(d[11] = -1),
				(d[12] = 0),
				(d[13] = 0),
				(d[14] = (f * v) / b),
				(d[15] = 0),
				d
			);
		}
		function kt(n, l, s, o, f, v = 1 / 0, U) {
			const d = U ?? new i(16),
				_ = l - n,
				x = o - s;
			if (
				((d[0] = (2 * f) / _),
				(d[1] = 0),
				(d[2] = 0),
				(d[3] = 0),
				(d[4] = 0),
				(d[5] = (2 * f) / x),
				(d[6] = 0),
				(d[7] = 0),
				(d[8] = (n + l) / _),
				(d[9] = (o + s) / x),
				(d[11] = -1),
				(d[12] = 0),
				(d[13] = 0),
				(d[15] = 0),
				v === 1 / 0)
			)
				(d[10] = 0), (d[14] = f);
			else {
				const b = 1 / (v - f);
				(d[10] = f * b), (d[14] = v * f * b);
			}
			return d;
		}
		const K = t.create(),
			j = t.create(),
			D = t.create();
		function gt(n, l, s, o) {
			const f = o ?? new i(16);
			return (
				t.normalize(t.subtract(l, n, D), D),
				t.normalize(t.cross(s, D, K), K),
				t.normalize(t.cross(D, K, j), j),
				(f[0] = K[0]),
				(f[1] = K[1]),
				(f[2] = K[2]),
				(f[3] = 0),
				(f[4] = j[0]),
				(f[5] = j[1]),
				(f[6] = j[2]),
				(f[7] = 0),
				(f[8] = D[0]),
				(f[9] = D[1]),
				(f[10] = D[2]),
				(f[11] = 0),
				(f[12] = n[0]),
				(f[13] = n[1]),
				(f[14] = n[2]),
				(f[15] = 1),
				f
			);
		}
		function mt(n, l, s, o) {
			const f = o ?? new i(16);
			return (
				t.normalize(t.subtract(n, l, D), D),
				t.normalize(t.cross(s, D, K), K),
				t.normalize(t.cross(D, K, j), j),
				(f[0] = K[0]),
				(f[1] = K[1]),
				(f[2] = K[2]),
				(f[3] = 0),
				(f[4] = j[0]),
				(f[5] = j[1]),
				(f[6] = j[2]),
				(f[7] = 0),
				(f[8] = D[0]),
				(f[9] = D[1]),
				(f[10] = D[2]),
				(f[11] = 0),
				(f[12] = n[0]),
				(f[13] = n[1]),
				(f[14] = n[2]),
				(f[15] = 1),
				f
			);
		}
		function St(n, l, s, o) {
			const f = o ?? new i(16);
			return (
				t.normalize(t.subtract(n, l, D), D),
				t.normalize(t.cross(s, D, K), K),
				t.normalize(t.cross(D, K, j), j),
				(f[0] = K[0]),
				(f[1] = j[0]),
				(f[2] = D[0]),
				(f[3] = 0),
				(f[4] = K[1]),
				(f[5] = j[1]),
				(f[6] = D[1]),
				(f[7] = 0),
				(f[8] = K[2]),
				(f[9] = j[2]),
				(f[10] = D[2]),
				(f[11] = 0),
				(f[12] = -(K[0] * n[0] + K[1] * n[1] + K[2] * n[2])),
				(f[13] = -(j[0] * n[0] + j[1] * n[1] + j[2] * n[2])),
				(f[14] = -(D[0] * n[0] + D[1] * n[1] + D[2] * n[2])),
				(f[15] = 1),
				f
			);
		}
		function bt(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = 1),
				(s[1] = 0),
				(s[2] = 0),
				(s[3] = 0),
				(s[4] = 0),
				(s[5] = 1),
				(s[6] = 0),
				(s[7] = 0),
				(s[8] = 0),
				(s[9] = 0),
				(s[10] = 1),
				(s[11] = 0),
				(s[12] = n[0]),
				(s[13] = n[1]),
				(s[14] = n[2]),
				(s[15] = 1),
				s
			);
		}
		function Ct(n, l, s) {
			const o = s ?? new i(16),
				f = l[0],
				v = l[1],
				U = l[2],
				d = n[0],
				_ = n[1],
				x = n[2],
				b = n[3],
				A = n[1 * 4 + 0],
				G = n[1 * 4 + 1],
				R = n[1 * 4 + 2],
				q = n[1 * 4 + 3],
				H = n[2 * 4 + 0],
				C = n[2 * 4 + 1],
				N = n[2 * 4 + 2],
				J = n[2 * 4 + 3],
				nt = n[3 * 4 + 0],
				ft = n[3 * 4 + 1],
				yt = n[3 * 4 + 2],
				wt = n[3 * 4 + 3];
			return (
				n !== o &&
					((o[0] = d),
					(o[1] = _),
					(o[2] = x),
					(o[3] = b),
					(o[4] = A),
					(o[5] = G),
					(o[6] = R),
					(o[7] = q),
					(o[8] = H),
					(o[9] = C),
					(o[10] = N),
					(o[11] = J)),
				(o[12] = d * f + A * v + H * U + nt),
				(o[13] = _ * f + G * v + C * U + ft),
				(o[14] = x * f + R * v + N * U + yt),
				(o[15] = b * f + q * v + J * U + wt),
				o
			);
		}
		function lt(n, l) {
			const s = l ?? new i(16),
				o = Math.cos(n),
				f = Math.sin(n);
			return (
				(s[0] = 1),
				(s[1] = 0),
				(s[2] = 0),
				(s[3] = 0),
				(s[4] = 0),
				(s[5] = o),
				(s[6] = f),
				(s[7] = 0),
				(s[8] = 0),
				(s[9] = -f),
				(s[10] = o),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function Wt(n, l, s) {
			const o = s ?? new i(16),
				f = n[4],
				v = n[5],
				U = n[6],
				d = n[7],
				_ = n[8],
				x = n[9],
				b = n[10],
				A = n[11],
				G = Math.cos(l),
				R = Math.sin(l);
			return (
				(o[4] = G * f + R * _),
				(o[5] = G * v + R * x),
				(o[6] = G * U + R * b),
				(o[7] = G * d + R * A),
				(o[8] = G * _ - R * f),
				(o[9] = G * x - R * v),
				(o[10] = G * b - R * U),
				(o[11] = G * A - R * d),
				n !== o &&
					((o[0] = n[0]),
					(o[1] = n[1]),
					(o[2] = n[2]),
					(o[3] = n[3]),
					(o[12] = n[12]),
					(o[13] = n[13]),
					(o[14] = n[14]),
					(o[15] = n[15])),
				o
			);
		}
		function qt(n, l) {
			const s = l ?? new i(16),
				o = Math.cos(n),
				f = Math.sin(n);
			return (
				(s[0] = o),
				(s[1] = 0),
				(s[2] = -f),
				(s[3] = 0),
				(s[4] = 0),
				(s[5] = 1),
				(s[6] = 0),
				(s[7] = 0),
				(s[8] = f),
				(s[9] = 0),
				(s[10] = o),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function jt(n, l, s) {
			const o = s ?? new i(16),
				f = n[0 * 4 + 0],
				v = n[0 * 4 + 1],
				U = n[0 * 4 + 2],
				d = n[0 * 4 + 3],
				_ = n[2 * 4 + 0],
				x = n[2 * 4 + 1],
				b = n[2 * 4 + 2],
				A = n[2 * 4 + 3],
				G = Math.cos(l),
				R = Math.sin(l);
			return (
				(o[0] = G * f - R * _),
				(o[1] = G * v - R * x),
				(o[2] = G * U - R * b),
				(o[3] = G * d - R * A),
				(o[8] = G * _ + R * f),
				(o[9] = G * x + R * v),
				(o[10] = G * b + R * U),
				(o[11] = G * A + R * d),
				n !== o &&
					((o[4] = n[4]),
					(o[5] = n[5]),
					(o[6] = n[6]),
					(o[7] = n[7]),
					(o[12] = n[12]),
					(o[13] = n[13]),
					(o[14] = n[14]),
					(o[15] = n[15])),
				o
			);
		}
		function Nt(n, l) {
			const s = l ?? new i(16),
				o = Math.cos(n),
				f = Math.sin(n);
			return (
				(s[0] = o),
				(s[1] = f),
				(s[2] = 0),
				(s[3] = 0),
				(s[4] = -f),
				(s[5] = o),
				(s[6] = 0),
				(s[7] = 0),
				(s[8] = 0),
				(s[9] = 0),
				(s[10] = 1),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function $t(n, l, s) {
			const o = s ?? new i(16),
				f = n[0 * 4 + 0],
				v = n[0 * 4 + 1],
				U = n[0 * 4 + 2],
				d = n[0 * 4 + 3],
				_ = n[1 * 4 + 0],
				x = n[1 * 4 + 1],
				b = n[1 * 4 + 2],
				A = n[1 * 4 + 3],
				G = Math.cos(l),
				R = Math.sin(l);
			return (
				(o[0] = G * f + R * _),
				(o[1] = G * v + R * x),
				(o[2] = G * U + R * b),
				(o[3] = G * d + R * A),
				(o[4] = G * _ - R * f),
				(o[5] = G * x - R * v),
				(o[6] = G * b - R * U),
				(o[7] = G * A - R * d),
				n !== o &&
					((o[8] = n[8]),
					(o[9] = n[9]),
					(o[10] = n[10]),
					(o[11] = n[11]),
					(o[12] = n[12]),
					(o[13] = n[13]),
					(o[14] = n[14]),
					(o[15] = n[15])),
				o
			);
		}
		function Dt(n, l, s) {
			const o = s ?? new i(16);
			let f = n[0],
				v = n[1],
				U = n[2];
			const d = Math.sqrt(f * f + v * v + U * U);
			(f /= d), (v /= d), (U /= d);
			const _ = f * f,
				x = v * v,
				b = U * U,
				A = Math.cos(l),
				G = Math.sin(l),
				R = 1 - A;
			return (
				(o[0] = _ + (1 - _) * A),
				(o[1] = f * v * R + U * G),
				(o[2] = f * U * R - v * G),
				(o[3] = 0),
				(o[4] = f * v * R - U * G),
				(o[5] = x + (1 - x) * A),
				(o[6] = v * U * R + f * G),
				(o[7] = 0),
				(o[8] = f * U * R + v * G),
				(o[9] = v * U * R - f * G),
				(o[10] = b + (1 - b) * A),
				(o[11] = 0),
				(o[12] = 0),
				(o[13] = 0),
				(o[14] = 0),
				(o[15] = 1),
				o
			);
		}
		const u = Dt;
		function y(n, l, s, o) {
			const f = o ?? new i(16);
			let v = l[0],
				U = l[1],
				d = l[2];
			const _ = Math.sqrt(v * v + U * U + d * d);
			(v /= _), (U /= _), (d /= _);
			const x = v * v,
				b = U * U,
				A = d * d,
				G = Math.cos(s),
				R = Math.sin(s),
				q = 1 - G,
				H = x + (1 - x) * G,
				C = v * U * q + d * R,
				N = v * d * q - U * R,
				J = v * U * q - d * R,
				nt = b + (1 - b) * G,
				ft = U * d * q + v * R,
				yt = v * d * q + U * R,
				wt = U * d * q - v * R,
				Mt = A + (1 - A) * G,
				Et = n[0],
				Tt = n[1],
				At = n[2],
				Pt = n[3],
				Ut = n[4],
				Rt = n[5],
				zt = n[6],
				Bt = n[7],
				Vt = n[8],
				Ft = n[9],
				Lt = n[10],
				Ot = n[11];
			return (
				(f[0] = H * Et + C * Ut + N * Vt),
				(f[1] = H * Tt + C * Rt + N * Ft),
				(f[2] = H * At + C * zt + N * Lt),
				(f[3] = H * Pt + C * Bt + N * Ot),
				(f[4] = J * Et + nt * Ut + ft * Vt),
				(f[5] = J * Tt + nt * Rt + ft * Ft),
				(f[6] = J * At + nt * zt + ft * Lt),
				(f[7] = J * Pt + nt * Bt + ft * Ot),
				(f[8] = yt * Et + wt * Ut + Mt * Vt),
				(f[9] = yt * Tt + wt * Rt + Mt * Ft),
				(f[10] = yt * At + wt * zt + Mt * Lt),
				(f[11] = yt * Pt + wt * Bt + Mt * Ot),
				n !== f &&
					((f[12] = n[12]), (f[13] = n[13]), (f[14] = n[14]), (f[15] = n[15])),
				f
			);
		}
		const a = y;
		function c(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = n[0]),
				(s[1] = 0),
				(s[2] = 0),
				(s[3] = 0),
				(s[4] = 0),
				(s[5] = n[1]),
				(s[6] = 0),
				(s[7] = 0),
				(s[8] = 0),
				(s[9] = 0),
				(s[10] = n[2]),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function m(n, l, s) {
			const o = s ?? new i(16),
				f = l[0],
				v = l[1],
				U = l[2];
			return (
				(o[0] = f * n[0 * 4 + 0]),
				(o[1] = f * n[0 * 4 + 1]),
				(o[2] = f * n[0 * 4 + 2]),
				(o[3] = f * n[0 * 4 + 3]),
				(o[4] = v * n[1 * 4 + 0]),
				(o[5] = v * n[1 * 4 + 1]),
				(o[6] = v * n[1 * 4 + 2]),
				(o[7] = v * n[1 * 4 + 3]),
				(o[8] = U * n[2 * 4 + 0]),
				(o[9] = U * n[2 * 4 + 1]),
				(o[10] = U * n[2 * 4 + 2]),
				(o[11] = U * n[2 * 4 + 3]),
				n !== o &&
					((o[12] = n[12]), (o[13] = n[13]), (o[14] = n[14]), (o[15] = n[15])),
				o
			);
		}
		function w(n, l) {
			const s = l ?? new i(16);
			return (
				(s[0] = n),
				(s[1] = 0),
				(s[2] = 0),
				(s[3] = 0),
				(s[4] = 0),
				(s[5] = n),
				(s[6] = 0),
				(s[7] = 0),
				(s[8] = 0),
				(s[9] = 0),
				(s[10] = n),
				(s[11] = 0),
				(s[12] = 0),
				(s[13] = 0),
				(s[14] = 0),
				(s[15] = 1),
				s
			);
		}
		function P(n, l, s) {
			const o = s ?? new i(16);
			return (
				(o[0] = l * n[0 * 4 + 0]),
				(o[1] = l * n[0 * 4 + 1]),
				(o[2] = l * n[0 * 4 + 2]),
				(o[3] = l * n[0 * 4 + 3]),
				(o[4] = l * n[1 * 4 + 0]),
				(o[5] = l * n[1 * 4 + 1]),
				(o[6] = l * n[1 * 4 + 2]),
				(o[7] = l * n[1 * 4 + 3]),
				(o[8] = l * n[2 * 4 + 0]),
				(o[9] = l * n[2 * 4 + 1]),
				(o[10] = l * n[2 * 4 + 2]),
				(o[11] = l * n[2 * 4 + 3]),
				n !== o &&
					((o[12] = n[12]), (o[13] = n[13]), (o[14] = n[14]), (o[15] = n[15])),
				o
			);
		}
		return {
			create: e,
			set: r,
			fromMat3: h,
			fromQuat: g,
			negate: k,
			copy: T,
			clone: I,
			equalsApproximately: B,
			equals: z,
			identity: V,
			transpose: Y,
			inverse: tt,
			determinant: st,
			invert: L,
			multiply: F,
			mul: Q,
			setTranslation: et,
			getTranslation: O,
			getAxis: W,
			setAxis: ot,
			getScaling: pt,
			perspective: it,
			perspectiveReverseZ: ut,
			ortho: ht,
			frustum: at,
			frustumReverseZ: kt,
			aim: gt,
			cameraAim: mt,
			lookAt: St,
			translation: bt,
			translate: Ct,
			rotationX: lt,
			rotateX: Wt,
			rotationY: qt,
			rotateY: jt,
			rotationZ: Nt,
			rotateZ: $t,
			axisRotation: Dt,
			rotation: u,
			axisRotate: y,
			rotate: a,
			scaling: c,
			scale: m,
			uniformScaling: w,
			uniformScale: P,
		};
	}
	const vn = new Map();
	function yr(i) {
		let t = vn.get(i);
		return t || ((t = gr(i)), vn.set(i, t)), t;
	}
	function wr(i) {
		const t = we(i);
		function e(u, y, a, c) {
			const m = new i(4);
			return (
				u !== void 0 &&
					((m[0] = u),
					y !== void 0 &&
						((m[1] = y),
						a !== void 0 && ((m[2] = a), c !== void 0 && (m[3] = c)))),
				m
			);
		}
		const r = e;
		function h(u, y, a, c, m) {
			const w = m ?? new i(4);
			return (w[0] = u), (w[1] = y), (w[2] = a), (w[3] = c), w;
		}
		function g(u, y, a) {
			const c = a ?? new i(4),
				m = y * 0.5,
				w = Math.sin(m);
			return (
				(c[0] = w * u[0]),
				(c[1] = w * u[1]),
				(c[2] = w * u[2]),
				(c[3] = Math.cos(m)),
				c
			);
		}
		function k(u, y) {
			const a = y ?? t.create(3),
				c = Math.acos(u[3]) * 2,
				m = Math.sin(c * 0.5);
			return (
				m > $
					? ((a[0] = u[0] / m), (a[1] = u[1] / m), (a[2] = u[2] / m))
					: ((a[0] = 1), (a[1] = 0), (a[2] = 0)),
				{ angle: c, axis: a }
			);
		}
		function T(u, y) {
			const a = at(u, y);
			return Math.acos(2 * a * a - 1);
		}
		function I(u, y, a) {
			const c = a ?? new i(4),
				m = u[0],
				w = u[1],
				P = u[2],
				n = u[3],
				l = y[0],
				s = y[1],
				o = y[2],
				f = y[3];
			return (
				(c[0] = m * f + n * l + w * o - P * s),
				(c[1] = w * f + n * s + P * l - m * o),
				(c[2] = P * f + n * o + m * s - w * l),
				(c[3] = n * f - m * l - w * s - P * o),
				c
			);
		}
		const B = I;
		function z(u, y, a) {
			const c = a ?? new i(4),
				m = y * 0.5,
				w = u[0],
				P = u[1],
				n = u[2],
				l = u[3],
				s = Math.sin(m),
				o = Math.cos(m);
			return (
				(c[0] = w * o + l * s),
				(c[1] = P * o + n * s),
				(c[2] = n * o - P * s),
				(c[3] = l * o - w * s),
				c
			);
		}
		function V(u, y, a) {
			const c = a ?? new i(4),
				m = y * 0.5,
				w = u[0],
				P = u[1],
				n = u[2],
				l = u[3],
				s = Math.sin(m),
				o = Math.cos(m);
			return (
				(c[0] = w * o - n * s),
				(c[1] = P * o + l * s),
				(c[2] = n * o + w * s),
				(c[3] = l * o - P * s),
				c
			);
		}
		function Y(u, y, a) {
			const c = a ?? new i(4),
				m = y * 0.5,
				w = u[0],
				P = u[1],
				n = u[2],
				l = u[3],
				s = Math.sin(m),
				o = Math.cos(m);
			return (
				(c[0] = w * o + P * s),
				(c[1] = P * o - w * s),
				(c[2] = n * o + l * s),
				(c[3] = l * o - n * s),
				c
			);
		}
		function tt(u, y, a, c) {
			const m = c ?? new i(4),
				w = u[0],
				P = u[1],
				n = u[2],
				l = u[3];
			let s = y[0],
				o = y[1],
				f = y[2],
				v = y[3],
				U = w * s + P * o + n * f + l * v;
			U < 0 && ((U = -U), (s = -s), (o = -o), (f = -f), (v = -v));
			let d, _;
			if (1 - U > $) {
				const x = Math.acos(U),
					b = Math.sin(x);
				(d = Math.sin((1 - a) * x) / b), (_ = Math.sin(a * x) / b);
			} else (d = 1 - a), (_ = a);
			return (
				(m[0] = d * w + _ * s),
				(m[1] = d * P + _ * o),
				(m[2] = d * n + _ * f),
				(m[3] = d * l + _ * v),
				m
			);
		}
		function st(u, y) {
			const a = y ?? new i(4),
				c = u[0],
				m = u[1],
				w = u[2],
				P = u[3],
				n = c * c + m * m + w * w + P * P,
				l = n ? 1 / n : 0;
			return (
				(a[0] = -c * l), (a[1] = -m * l), (a[2] = -w * l), (a[3] = P * l), a
			);
		}
		function L(u, y) {
			const a = y ?? new i(4);
			return (a[0] = -u[0]), (a[1] = -u[1]), (a[2] = -u[2]), (a[3] = u[3]), a;
		}
		function F(u, y) {
			const a = y ?? new i(4),
				c = u[0] + u[5] + u[10];
			if (c > 0) {
				const m = Math.sqrt(c + 1);
				a[3] = 0.5 * m;
				const w = 0.5 / m;
				(a[0] = (u[6] - u[9]) * w),
					(a[1] = (u[8] - u[2]) * w),
					(a[2] = (u[1] - u[4]) * w);
			} else {
				let m = 0;
				u[5] > u[0] && (m = 1), u[10] > u[m * 4 + m] && (m = 2);
				const w = (m + 1) % 3,
					P = (m + 2) % 3,
					n = Math.sqrt(u[m * 4 + m] - u[w * 4 + w] - u[P * 4 + P] + 1);
				a[m] = 0.5 * n;
				const l = 0.5 / n;
				(a[3] = (u[w * 4 + P] - u[P * 4 + w]) * l),
					(a[w] = (u[w * 4 + m] + u[m * 4 + w]) * l),
					(a[P] = (u[P * 4 + m] + u[m * 4 + P]) * l);
			}
			return a;
		}
		function Q(u, y, a, c, m) {
			const w = m ?? new i(4),
				P = u * 0.5,
				n = y * 0.5,
				l = a * 0.5,
				s = Math.sin(P),
				o = Math.cos(P),
				f = Math.sin(n),
				v = Math.cos(n),
				U = Math.sin(l),
				d = Math.cos(l);
			switch (c) {
				case "xyz":
					(w[0] = s * v * d + o * f * U),
						(w[1] = o * f * d - s * v * U),
						(w[2] = o * v * U + s * f * d),
						(w[3] = o * v * d - s * f * U);
					break;
				case "xzy":
					(w[0] = s * v * d - o * f * U),
						(w[1] = o * f * d - s * v * U),
						(w[2] = o * v * U + s * f * d),
						(w[3] = o * v * d + s * f * U);
					break;
				case "yxz":
					(w[0] = s * v * d + o * f * U),
						(w[1] = o * f * d - s * v * U),
						(w[2] = o * v * U - s * f * d),
						(w[3] = o * v * d + s * f * U);
					break;
				case "yzx":
					(w[0] = s * v * d + o * f * U),
						(w[1] = o * f * d + s * v * U),
						(w[2] = o * v * U - s * f * d),
						(w[3] = o * v * d - s * f * U);
					break;
				case "zxy":
					(w[0] = s * v * d - o * f * U),
						(w[1] = o * f * d + s * v * U),
						(w[2] = o * v * U + s * f * d),
						(w[3] = o * v * d - s * f * U);
					break;
				case "zyx":
					(w[0] = s * v * d - o * f * U),
						(w[1] = o * f * d + s * v * U),
						(w[2] = o * v * U - s * f * d),
						(w[3] = o * v * d + s * f * U);
					break;
				default:
					throw new Error(`Unknown rotation order: ${c}`);
			}
			return w;
		}
		function et(u, y) {
			const a = y ?? new i(4);
			return (a[0] = u[0]), (a[1] = u[1]), (a[2] = u[2]), (a[3] = u[3]), a;
		}
		const O = et;
		function W(u, y, a) {
			const c = a ?? new i(4);
			return (
				(c[0] = u[0] + y[0]),
				(c[1] = u[1] + y[1]),
				(c[2] = u[2] + y[2]),
				(c[3] = u[3] + y[3]),
				c
			);
		}
		function ot(u, y, a) {
			const c = a ?? new i(4);
			return (
				(c[0] = u[0] - y[0]),
				(c[1] = u[1] - y[1]),
				(c[2] = u[2] - y[2]),
				(c[3] = u[3] - y[3]),
				c
			);
		}
		const pt = ot;
		function it(u, y, a) {
			const c = a ?? new i(4);
			return (
				(c[0] = u[0] * y),
				(c[1] = u[1] * y),
				(c[2] = u[2] * y),
				(c[3] = u[3] * y),
				c
			);
		}
		const ut = it;
		function ht(u, y, a) {
			const c = a ?? new i(4);
			return (
				(c[0] = u[0] / y),
				(c[1] = u[1] / y),
				(c[2] = u[2] / y),
				(c[3] = u[3] / y),
				c
			);
		}
		function at(u, y) {
			return u[0] * y[0] + u[1] * y[1] + u[2] * y[2] + u[3] * y[3];
		}
		function kt(u, y, a, c) {
			const m = c ?? new i(4);
			return (
				(m[0] = u[0] + a * (y[0] - u[0])),
				(m[1] = u[1] + a * (y[1] - u[1])),
				(m[2] = u[2] + a * (y[2] - u[2])),
				(m[3] = u[3] + a * (y[3] - u[3])),
				m
			);
		}
		function K(u) {
			const y = u[0],
				a = u[1],
				c = u[2],
				m = u[3];
			return Math.sqrt(y * y + a * a + c * c + m * m);
		}
		const j = K;
		function D(u) {
			const y = u[0],
				a = u[1],
				c = u[2],
				m = u[3];
			return y * y + a * a + c * c + m * m;
		}
		const gt = D;
		function mt(u, y) {
			const a = y ?? new i(4),
				c = u[0],
				m = u[1],
				w = u[2],
				P = u[3],
				n = Math.sqrt(c * c + m * m + w * w + P * P);
			return (
				n > 1e-5
					? ((a[0] = c / n), (a[1] = m / n), (a[2] = w / n), (a[3] = P / n))
					: ((a[0] = 0), (a[1] = 0), (a[2] = 0), (a[3] = 1)),
				a
			);
		}
		function St(u, y) {
			return (
				Math.abs(u[0] - y[0]) < $ &&
				Math.abs(u[1] - y[1]) < $ &&
				Math.abs(u[2] - y[2]) < $ &&
				Math.abs(u[3] - y[3]) < $
			);
		}
		function bt(u, y) {
			return u[0] === y[0] && u[1] === y[1] && u[2] === y[2] && u[3] === y[3];
		}
		function Ct(u) {
			const y = u ?? new i(4);
			return (y[0] = 0), (y[1] = 0), (y[2] = 0), (y[3] = 1), y;
		}
		const lt = t.create(),
			Wt = t.create(),
			qt = t.create();
		function jt(u, y, a) {
			const c = a ?? new i(4),
				m = t.dot(u, y);
			return m < -0.999999
				? (t.cross(Wt, u, lt),
				  t.len(lt) < 1e-6 && t.cross(qt, u, lt),
				  t.normalize(lt, lt),
				  g(lt, Math.PI, c),
				  c)
				: m > 0.999999
				? ((c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 1), c)
				: (t.cross(u, y, lt),
				  (c[0] = lt[0]),
				  (c[1] = lt[1]),
				  (c[2] = lt[2]),
				  (c[3] = 1 + m),
				  mt(c, c));
		}
		const Nt = new i(4),
			$t = new i(4);
		function Dt(u, y, a, c, m, w) {
			const P = w ?? new i(4);
			return (
				tt(u, c, m, Nt), tt(y, a, m, $t), tt(Nt, $t, 2 * m * (1 - m), P), P
			);
		}
		return {
			create: e,
			fromValues: r,
			set: h,
			fromAxisAngle: g,
			toAxisAngle: k,
			angle: T,
			multiply: I,
			mul: B,
			rotateX: z,
			rotateY: V,
			rotateZ: Y,
			slerp: tt,
			inverse: st,
			conjugate: L,
			fromMat: F,
			fromEuler: Q,
			copy: et,
			clone: O,
			add: W,
			subtract: ot,
			sub: pt,
			mulScalar: it,
			scale: ut,
			divScalar: ht,
			dot: at,
			lerp: kt,
			length: K,
			len: j,
			lengthSq: D,
			lenSq: gt,
			normalize: mt,
			equalsApproximately: St,
			equals: bt,
			identity: Ct,
			rotationTo: jt,
			sqlerp: Dt,
		};
	}
	const kn = new Map();
	function xr(i) {
		let t = kn.get(i);
		return t || ((t = wr(i)), kn.set(i, t)), t;
	}
	function vr(i) {
		function t(a, c, m, w) {
			const P = new i(4);
			return (
				a !== void 0 &&
					((P[0] = a),
					c !== void 0 &&
						((P[1] = c),
						m !== void 0 && ((P[2] = m), w !== void 0 && (P[3] = w)))),
				P
			);
		}
		const e = t;
		function r(a, c, m, w, P) {
			const n = P ?? new i(4);
			return (n[0] = a), (n[1] = c), (n[2] = m), (n[3] = w), n;
		}
		function h(a, c) {
			const m = c ?? new i(4);
			return (
				(m[0] = Math.ceil(a[0])),
				(m[1] = Math.ceil(a[1])),
				(m[2] = Math.ceil(a[2])),
				(m[3] = Math.ceil(a[3])),
				m
			);
		}
		function g(a, c) {
			const m = c ?? new i(4);
			return (
				(m[0] = Math.floor(a[0])),
				(m[1] = Math.floor(a[1])),
				(m[2] = Math.floor(a[2])),
				(m[3] = Math.floor(a[3])),
				m
			);
		}
		function k(a, c) {
			const m = c ?? new i(4);
			return (
				(m[0] = Math.round(a[0])),
				(m[1] = Math.round(a[1])),
				(m[2] = Math.round(a[2])),
				(m[3] = Math.round(a[3])),
				m
			);
		}
		function T(a, c = 0, m = 1, w) {
			const P = w ?? new i(4);
			return (
				(P[0] = Math.min(m, Math.max(c, a[0]))),
				(P[1] = Math.min(m, Math.max(c, a[1]))),
				(P[2] = Math.min(m, Math.max(c, a[2]))),
				(P[3] = Math.min(m, Math.max(c, a[3]))),
				P
			);
		}
		function I(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] + c[0]),
				(w[1] = a[1] + c[1]),
				(w[2] = a[2] + c[2]),
				(w[3] = a[3] + c[3]),
				w
			);
		}
		function B(a, c, m, w) {
			const P = w ?? new i(4);
			return (
				(P[0] = a[0] + c[0] * m),
				(P[1] = a[1] + c[1] * m),
				(P[2] = a[2] + c[2] * m),
				(P[3] = a[3] + c[3] * m),
				P
			);
		}
		function z(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] - c[0]),
				(w[1] = a[1] - c[1]),
				(w[2] = a[2] - c[2]),
				(w[3] = a[3] - c[3]),
				w
			);
		}
		const V = z;
		function Y(a, c) {
			return (
				Math.abs(a[0] - c[0]) < $ &&
				Math.abs(a[1] - c[1]) < $ &&
				Math.abs(a[2] - c[2]) < $ &&
				Math.abs(a[3] - c[3]) < $
			);
		}
		function tt(a, c) {
			return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3];
		}
		function st(a, c, m, w) {
			const P = w ?? new i(4);
			return (
				(P[0] = a[0] + m * (c[0] - a[0])),
				(P[1] = a[1] + m * (c[1] - a[1])),
				(P[2] = a[2] + m * (c[2] - a[2])),
				(P[3] = a[3] + m * (c[3] - a[3])),
				P
			);
		}
		function L(a, c, m, w) {
			const P = w ?? new i(4);
			return (
				(P[0] = a[0] + m[0] * (c[0] - a[0])),
				(P[1] = a[1] + m[1] * (c[1] - a[1])),
				(P[2] = a[2] + m[2] * (c[2] - a[2])),
				(P[3] = a[3] + m[3] * (c[3] - a[3])),
				P
			);
		}
		function F(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = Math.max(a[0], c[0])),
				(w[1] = Math.max(a[1], c[1])),
				(w[2] = Math.max(a[2], c[2])),
				(w[3] = Math.max(a[3], c[3])),
				w
			);
		}
		function Q(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = Math.min(a[0], c[0])),
				(w[1] = Math.min(a[1], c[1])),
				(w[2] = Math.min(a[2], c[2])),
				(w[3] = Math.min(a[3], c[3])),
				w
			);
		}
		function et(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] * c),
				(w[1] = a[1] * c),
				(w[2] = a[2] * c),
				(w[3] = a[3] * c),
				w
			);
		}
		const O = et;
		function W(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] / c),
				(w[1] = a[1] / c),
				(w[2] = a[2] / c),
				(w[3] = a[3] / c),
				w
			);
		}
		function ot(a, c) {
			const m = c ?? new i(4);
			return (
				(m[0] = 1 / a[0]),
				(m[1] = 1 / a[1]),
				(m[2] = 1 / a[2]),
				(m[3] = 1 / a[3]),
				m
			);
		}
		const pt = ot;
		function it(a, c) {
			return a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3];
		}
		function ut(a) {
			const c = a[0],
				m = a[1],
				w = a[2],
				P = a[3];
			return Math.sqrt(c * c + m * m + w * w + P * P);
		}
		const ht = ut;
		function at(a) {
			const c = a[0],
				m = a[1],
				w = a[2],
				P = a[3];
			return c * c + m * m + w * w + P * P;
		}
		const kt = at;
		function K(a, c) {
			const m = a[0] - c[0],
				w = a[1] - c[1],
				P = a[2] - c[2],
				n = a[3] - c[3];
			return Math.sqrt(m * m + w * w + P * P + n * n);
		}
		const j = K;
		function D(a, c) {
			const m = a[0] - c[0],
				w = a[1] - c[1],
				P = a[2] - c[2],
				n = a[3] - c[3];
			return m * m + w * w + P * P + n * n;
		}
		const gt = D;
		function mt(a, c) {
			const m = c ?? new i(4),
				w = a[0],
				P = a[1],
				n = a[2],
				l = a[3],
				s = Math.sqrt(w * w + P * P + n * n + l * l);
			return (
				s > 1e-5
					? ((m[0] = w / s), (m[1] = P / s), (m[2] = n / s), (m[3] = l / s))
					: ((m[0] = 0), (m[1] = 0), (m[2] = 0), (m[3] = 0)),
				m
			);
		}
		function St(a, c) {
			const m = c ?? new i(4);
			return (m[0] = -a[0]), (m[1] = -a[1]), (m[2] = -a[2]), (m[3] = -a[3]), m;
		}
		function bt(a, c) {
			const m = c ?? new i(4);
			return (m[0] = a[0]), (m[1] = a[1]), (m[2] = a[2]), (m[3] = a[3]), m;
		}
		const Ct = bt;
		function lt(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] * c[0]),
				(w[1] = a[1] * c[1]),
				(w[2] = a[2] * c[2]),
				(w[3] = a[3] * c[3]),
				w
			);
		}
		const Wt = lt;
		function qt(a, c, m) {
			const w = m ?? new i(4);
			return (
				(w[0] = a[0] / c[0]),
				(w[1] = a[1] / c[1]),
				(w[2] = a[2] / c[2]),
				(w[3] = a[3] / c[3]),
				w
			);
		}
		const jt = qt;
		function Nt(a) {
			const c = a ?? new i(4);
			return (c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0), c;
		}
		function $t(a, c, m) {
			const w = m ?? new i(4),
				P = a[0],
				n = a[1],
				l = a[2],
				s = a[3];
			return (
				(w[0] = c[0] * P + c[4] * n + c[8] * l + c[12] * s),
				(w[1] = c[1] * P + c[5] * n + c[9] * l + c[13] * s),
				(w[2] = c[2] * P + c[6] * n + c[10] * l + c[14] * s),
				(w[3] = c[3] * P + c[7] * n + c[11] * l + c[15] * s),
				w
			);
		}
		function Dt(a, c, m) {
			const w = m ?? new i(4);
			return mt(a, w), et(w, c, w);
		}
		function u(a, c, m) {
			const w = m ?? new i(4);
			return ut(a) > c ? Dt(a, c, w) : bt(a, w);
		}
		function y(a, c, m) {
			const w = m ?? new i(4);
			return st(a, c, 0.5, w);
		}
		return {
			create: t,
			fromValues: e,
			set: r,
			ceil: h,
			floor: g,
			round: k,
			clamp: T,
			add: I,
			addScaled: B,
			subtract: z,
			sub: V,
			equalsApproximately: Y,
			equals: tt,
			lerp: st,
			lerpV: L,
			max: F,
			min: Q,
			mulScalar: et,
			scale: O,
			divScalar: W,
			inverse: ot,
			invert: pt,
			dot: it,
			length: ut,
			len: ht,
			lengthSq: at,
			lenSq: kt,
			distance: K,
			dist: j,
			distanceSq: D,
			distSq: gt,
			normalize: mt,
			negate: St,
			copy: bt,
			clone: Ct,
			multiply: lt,
			mul: Wt,
			divide: qt,
			div: jt,
			zero: Nt,
			transformMat4: $t,
			setLength: Dt,
			truncate: u,
			midpoint: y,
		};
	}
	const bn = new Map();
	function kr(i) {
		let t = bn.get(i);
		return t || ((t = vr(i)), bn.set(i, t)), t;
	}
	function $e(i, t, e, r, h, g) {
		return {
			mat3: mr(i),
			mat4: yr(t),
			quat: xr(e),
			vec2: yn(r),
			vec3: we(h),
			vec4: kr(g),
		};
	}
	const {
		mat3: xe,
		mat4: Z,
		quat: ve,
		vec2: br,
		vec3: ct,
		vec4: Xs,
	} = $e(
		Float32Array,
		Float32Array,
		Float32Array,
		Float32Array,
		Float32Array,
		Float32Array,
	);
	$e(
		Float64Array,
		Float64Array,
		Float64Array,
		Float64Array,
		Float64Array,
		Float64Array,
	),
		$e(Kt, Array, Array, Array, Array, Array);
	const Mn = (i, t, e) => Math.min(Math.max(i, t), e),
		Mr = (i) => (i * Math.PI) / 180,
		Sr = Z.identity(),
		Xe = "xyz";
	class ue {
		constructor() {
			(this.value = 0), (this.damping = 0.5);
		}
		addForce(t) {
			this.value += t;
		}
		update() {
			return (
				this.value * this.value > 1e-6
					? (this.value *= this.damping)
					: this.stop(),
				this.value
			);
		}
		stop() {
			this.value = 0;
		}
	}
	class Er {
		constructor(t, e = document.body, r = !1, h = 1) {
			(this.target = ct.create()),
				(this.minDistance = 0),
				(this.maxDistance = 1 / 0),
				(this.isEnabled = !0),
				(this.targetXDampedAction = new ue()),
				(this.targetYDampedAction = new ue()),
				(this.targetZDampedAction = new ue()),
				(this.targetThetaDampedAction = new ue()),
				(this.targetPhiDampedAction = new ue()),
				(this.targetRadiusDampedAction = new ue()),
				(this._isShiftDown = !1),
				(this._rotateStart = { x: 9999, y: 9999 }),
				(this._rotateEnd = { x: 9999, y: 9999 }),
				(this._roatteDelta = { x: 9999, y: 9999 }),
				(this._zoomDistanceEnd = 0),
				(this._zoomDistance = 0),
				(this.state = ""),
				(this.loopId = 0),
				(this._panStart = { x: 0, y: 0 }),
				(this._panDelta = { x: 0, y: 0 }),
				(this._panEnd = { x: 0, y: 0 }),
				(this._paused = !1),
				(this._isDebug = !1),
				(this.mouseWheelForce = 1),
				(this.mouseWheelForce = h),
				t || console.error("camera is undefined"),
				(this.camera = t),
				(this.domElement = e),
				(this.isDamping = !1),
				(this.dampingFactor = 0.25),
				(this.isZoom = !0),
				(this.zoomSpeed = 1),
				(this.isRotate = !0),
				(this.rotateSpeed = 1),
				(this.isPan = !0),
				(this.keyPanSpeed = 7),
				(this.enableKeys = !0),
				(this.keys = {
					LEFT: "37",
					UP: "38",
					RIGHT: "39",
					BOTTOM: "40",
					SHIFT: "16",
				}),
				(this.originTarget = ct.create()),
				(this.originPosition = ct.create()),
				(this.originPosition[0] = t.position[0]),
				(this.originPosition[1] = t.position[0]),
				(this.originPosition[2] = t.position[0]);
			const g = this.camera.position[0],
				k = this.camera.position[1],
				T = this.camera.position[2],
				I = Math.sqrt(g * g + k * k + T * T),
				B = Math.atan2(this.camera.position[0], this.camera.position[2]),
				z = Math.acos(Mn(this.camera.position[1] / I, -1, 1));
			(this._spherical = { radius: I, theta: B, phi: z }),
				this._bindEvens(),
				this.setEventHandler(),
				this.startTick(),
				(this._isDebug = r),
				r &&
					((this._outputEl = document.createElement("div")),
					this._outputEl.setAttribute(
						"style",
						`
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 999;
      font-family: monospace;
      font-size: 14px;
      user-select: none;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      padding: 3px 6px;
    `,
					),
					document.body.appendChild(this._outputEl));
		}
		lookAt([t, e, r]) {
			return ct.set(this.target, t, e, r), this;
		}
		setEventHandler() {
			this.domElement.addEventListener(
				"contextmenu",
				this._contextMenuHandler,
				!1,
			),
				this.domElement.addEventListener(
					"mousedown",
					this._mouseDownHandler,
					!1,
				),
				this.domElement.addEventListener("wheel", this._mouseWheelHandler, !1),
				this.domElement.addEventListener(
					"touchstart",
					this._touchStartHandler,
					!1,
				),
				this.domElement.addEventListener(
					"touchmove",
					this._touchMoveHandler,
					!1,
				),
				window.addEventListener("keydown", this._onKeyDownHandler, !1),
				window.addEventListener("keyup", this._onKeyUpHandler, !1);
		}
		removeEventHandler() {
			this.domElement.removeEventListener(
				"contextmenu",
				this._contextMenuHandler,
				!1,
			),
				this.domElement.removeEventListener(
					"mousedown",
					this._mouseDownHandler,
					!1,
				),
				this.domElement.removeEventListener(
					"wheel",
					this._mouseWheelHandler,
					!1,
				),
				this.domElement.removeEventListener(
					"mousemove",
					this._mouseMoveHandler,
					!1,
				),
				window.removeEventListener("mouseup", this._mouseUpHandler, !1),
				this.domElement.removeEventListener(
					"touchstart",
					this._touchStartHandler,
					!1,
				),
				this.domElement.removeEventListener(
					"touchmove",
					this._touchMoveHandler,
					!1,
				),
				window.removeEventListener("keydown", this._onKeyDownHandler, !1),
				window.removeEventListener("keydown", this._onKeyUpHandler, !1);
		}
		startTick() {
			this.loopId = requestAnimationFrame(this.tick);
		}
		pause() {
			this._paused = !0;
		}
		start() {
			this._paused = !1;
		}
		tick() {
			if (
				!this._paused &&
				(this.updateDampedAction(), this.updateCamera(), this._isDebug)
			) {
				const t = Math.round(this.camera.position[0] * 100) / 100,
					e = Math.round(this.camera.position[1] * 100) / 100,
					r = Math.round(this.camera.position[2] * 100) / 100;
				this._outputEl.textContent = `x: ${t} y: ${e} z: ${r}`;
			}
			this.loopId = requestAnimationFrame(this.tick);
		}
		updateDampedAction() {
			(this.target[0] += this.targetXDampedAction.update()),
				(this.target[1] += this.targetYDampedAction.update()),
				(this.target[2] += this.targetZDampedAction.update()),
				(this._spherical.theta += this.targetThetaDampedAction.update()),
				(this._spherical.phi += this.targetPhiDampedAction.update()),
				(this._spherical.radius += this.targetRadiusDampedAction.update());
		}
		updateCamera() {
			const t = this._spherical,
				e = Math.sin(t.phi) * t.radius;
			(this.camera.position[0] = e * Math.sin(t.theta) + this.target[0]),
				(this.camera.position[1] = Math.cos(t.phi) * t.radius + this.target[1]),
				(this.camera.position[2] = e * Math.cos(t.theta) + this.target[2]),
				(this.camera.lookAt[0] = this.target[0]),
				(this.camera.lookAt[1] = this.target[1]),
				(this.camera.lookAt[2] = this.target[2]),
				this.camera.updateViewMatrix();
		}
		_bindEvens() {
			(this.tick = this.tick.bind(this)),
				(this._contextMenuHandler = this._contextMenuHandler.bind(this)),
				(this._mouseDownHandler = this._mouseDownHandler.bind(this)),
				(this._mouseWheelHandler = this._mouseWheelHandler.bind(this)),
				(this._mouseMoveHandler = this._mouseMoveHandler.bind(this)),
				(this._mouseUpHandler = this._mouseUpHandler.bind(this)),
				(this._touchStartHandler = this._touchStartHandler.bind(this)),
				(this._touchMoveHandler = this._touchMoveHandler.bind(this)),
				(this._onKeyDownHandler = this._onKeyDownHandler.bind(this)),
				(this._onKeyUpHandler = this._onKeyUpHandler.bind(this));
		}
		_contextMenuHandler(t) {
			this.isEnabled && t.preventDefault();
		}
		_mouseDownHandler(t) {
			this.isEnabled &&
				(t.button === 0
					? ((this.state = "rotate"),
					  (this._rotateStart = { x: t.clientX, y: t.clientY }))
					: ((this.state = "pan"),
					  (this._panStart = { x: t.clientX, y: t.clientY })),
				this.domElement.addEventListener(
					"mousemove",
					this._mouseMoveHandler,
					!1,
				),
				window.addEventListener("mouseup", this._mouseUpHandler, !1));
		}
		_mouseUpHandler() {
			this.domElement.removeEventListener(
				"mousemove",
				this._mouseMoveHandler,
				!1,
			),
				window.removeEventListener("mouseup", this._mouseUpHandler, !1);
		}
		_mouseMoveHandler(t) {
			this.isEnabled &&
				(this.state === "rotate"
					? ((this._rotateEnd = { x: t.clientX, y: t.clientY }),
					  (this._roatteDelta = {
							x: this._rotateEnd.x - this._rotateStart.x,
							y: this._rotateEnd.y - this._rotateStart.y,
					  }),
					  this._updateRotateHandler(),
					  (this._rotateStart = {
							x: this._rotateEnd.x,
							y: this._rotateEnd.y,
					  }))
					: this.state === "pan" &&
					  ((this._panEnd = { x: t.clientX, y: t.clientY }),
					  (this._panDelta = {
							x: -0.5 * (this._panEnd.x - this._panStart.x),
							y: 0.5 * (this._panEnd.y - this._panStart.y),
					  }),
					  this._updatePanHandler(),
					  (this._panStart = { x: this._panEnd.x, y: this._panEnd.y })));
		}
		_mouseWheelHandler(t) {
			const e = this.mouseWheelForce;
			t.deltaY > 0
				? this.targetRadiusDampedAction.addForce(e)
				: this.targetRadiusDampedAction.addForce(-e);
		}
		_touchStartHandler(t) {
			let e, r;
			switch (t.touches.length) {
				case 1:
					(this.state = "rotate"),
						(this._rotateStart = {
							x: t.touches[0].clientX,
							y: t.touches[0].clientY,
						});
					break;
				case 2:
					(this.state = "zoom"),
						(e = t.touches[1].clientX - t.touches[0].clientX),
						(r = t.touches[1].clientY - t.touches[0].clientY),
						(this._zoomDistance = Math.sqrt(e * e + r * r));
					break;
				case 3:
					(this.state = "pan"),
						(this._panStart = {
							x:
								(t.touches[0].clientX +
									t.touches[1].clientX +
									t.touches[2].clientX) /
								3,
							y:
								(t.touches[0].clientY +
									t.touches[1].clientY +
									t.touches[2].clientY) /
								3,
						});
					break;
			}
		}
		_touchMoveHandler(t) {
			let e, r, h;
			switch ((t.preventDefault(), t.touches.length)) {
				case 1:
					if (this.state !== "rotate") return;
					(this._rotateEnd = {
						x: t.touches[0].clientX,
						y: t.touches[0].clientY,
					}),
						(this._roatteDelta = {
							x: (this._rotateEnd.x - this._rotateStart.x) * 0.5,
							y: (this._rotateEnd.y - this._rotateStart.y) * 0.5,
						}),
						this._updateRotateHandler(),
						(this._rotateStart = {
							x: this._rotateEnd.x,
							y: this._rotateEnd.y,
						});
					break;
				case 2:
					if (this.state !== "zoom") return;
					(e = t.touches[1].clientX - t.touches[0].clientX),
						(r = t.touches[1].clientY - t.touches[0].clientY),
						(this._zoomDistanceEnd = Math.sqrt(e * e + r * r)),
						(h = this._zoomDistanceEnd - this._zoomDistance),
						(h *= 1.5);
					let g = this._spherical.radius - h;
					(g = Mn(g, this.minDistance, this.maxDistance)),
						(this._zoomDistance = this._zoomDistanceEnd),
						(this._spherical.radius = g);
					break;
				case 3:
					(this._panEnd = {
						x:
							(t.touches[0].clientX +
								t.touches[1].clientX +
								t.touches[2].clientX) /
							3,
						y:
							(t.touches[0].clientY +
								t.touches[1].clientY +
								t.touches[2].clientY) /
							3,
					}),
						(this._panDelta = {
							x: this._panEnd.x - this._panStart.x,
							y: this._panEnd.y - this._panStart.y,
						}),
						(this._panDelta.x *= -1),
						this._updatePanHandler(),
						(this._panStart = { x: this._panEnd.x, y: this._panEnd.y });
					break;
			}
		}
		_onKeyDownHandler(t) {
			let e = 0,
				r = 0;
			switch (t.key) {
				case this.keys.SHIFT:
					this._isShiftDown = !0;
					break;
				case this.keys.LEFT:
					e = -10;
					break;
				case this.keys.RIGHT:
					e = 10;
					break;
				case this.keys.UP:
					r = 10;
					break;
				case this.keys.BOTTOM:
					r = -10;
					break;
			}
			this._isShiftDown
				? ((this._roatteDelta = { x: -e, y: r }), this._updateRotateHandler())
				: ((this._panDelta = { x: e, y: r }), this._updatePanHandler());
		}
		_onKeyUpHandler(t) {
			switch (t.key) {
				case this.keys.SHIFT:
					this._isShiftDown = !1;
					break;
			}
		}
		_updatePanHandler() {
			const t = ct.create(),
				e = ct.create(),
				r = ct.create();
			(r[0] = this.target[0] - this.camera.position[0]),
				(r[1] = this.target[1] - this.camera.position[1]),
				(r[2] = this.target[2] - this.camera.position[2]),
				ct.normalize(r, r),
				ct.cross(t, r, [0, 1, 0]),
				ct.cross(e, t, r);
			const h = Math.max(this._spherical.radius / 2e3, 0.001);
			this.targetXDampedAction.addForce(
				(t[0] * this._panDelta.x + e[0] * this._panDelta.y) * h,
			),
				this.targetYDampedAction.addForce(
					(t[1] * this._panDelta.x + e[1] * this._panDelta.y) * h,
				),
				this.targetZDampedAction.addForce(
					(t[2] * this._panDelta.x + e[2] * this._panDelta.y) * h,
				);
		}
		_updateRotateHandler() {
			this.targetThetaDampedAction.addForce(
				-this._roatteDelta.x / this.domElement.clientWidth,
			),
				this.targetPhiDampedAction.addForce(
					-this._roatteDelta.y / this.domElement.clientHeight,
				);
		}
	}
	const Ye = (i, t) => (((i + t - 1) / t) | 0) * t;
	function Tr(i) {
		return Object.keys(i);
	}
	function Ar(i, t) {
		return new Array(i).fill(0).map((e, r) => t(r));
	}
	const Sn = (i) =>
			i &&
			typeof i.length == "number" &&
			i.buffer instanceof ArrayBuffer &&
			typeof i.byteLength == "number",
		En = (i) => i,
		rt = En({
			i32: { numElements: 1, align: 4, size: 4, type: "i32", View: Int32Array },
			u32: {
				numElements: 1,
				align: 4,
				size: 4,
				type: "u32",
				View: Uint32Array,
			},
			f32: {
				numElements: 1,
				align: 4,
				size: 4,
				type: "f32",
				View: Float32Array,
			},
			f16: {
				numElements: 1,
				align: 2,
				size: 2,
				type: "u16",
				View: Uint16Array,
			},
			vec2f: {
				numElements: 2,
				align: 8,
				size: 8,
				type: "f32",
				View: Float32Array,
			},
			vec2i: {
				numElements: 2,
				align: 8,
				size: 8,
				type: "i32",
				View: Int32Array,
			},
			vec2u: {
				numElements: 2,
				align: 8,
				size: 8,
				type: "u32",
				View: Uint32Array,
			},
			vec2h: {
				numElements: 2,
				align: 4,
				size: 4,
				type: "u16",
				View: Uint16Array,
			},
			vec3i: {
				numElements: 3,
				align: 16,
				size: 12,
				type: "i32",
				View: Int32Array,
			},
			vec3u: {
				numElements: 3,
				align: 16,
				size: 12,
				type: "u32",
				View: Uint32Array,
			},
			vec3f: {
				numElements: 3,
				align: 16,
				size: 12,
				type: "f32",
				View: Float32Array,
			},
			vec3h: {
				numElements: 3,
				align: 8,
				size: 6,
				type: "u16",
				View: Uint16Array,
			},
			vec4i: {
				numElements: 4,
				align: 16,
				size: 16,
				type: "i32",
				View: Int32Array,
			},
			vec4u: {
				numElements: 4,
				align: 16,
				size: 16,
				type: "u32",
				View: Uint32Array,
			},
			vec4f: {
				numElements: 4,
				align: 16,
				size: 16,
				type: "f32",
				View: Float32Array,
			},
			vec4h: {
				numElements: 4,
				align: 8,
				size: 8,
				type: "u16",
				View: Uint16Array,
			},
			mat2x2f: {
				numElements: 4,
				align: 8,
				size: 16,
				type: "f32",
				View: Float32Array,
			},
			mat2x2h: {
				numElements: 4,
				align: 4,
				size: 8,
				type: "u16",
				View: Uint16Array,
			},
			mat3x2f: {
				numElements: 6,
				align: 8,
				size: 24,
				type: "f32",
				View: Float32Array,
			},
			mat3x2h: {
				numElements: 6,
				align: 4,
				size: 12,
				type: "u16",
				View: Uint16Array,
			},
			mat4x2f: {
				numElements: 8,
				align: 8,
				size: 32,
				type: "f32",
				View: Float32Array,
			},
			mat4x2h: {
				numElements: 8,
				align: 4,
				size: 16,
				type: "u16",
				View: Uint16Array,
			},
			mat2x3f: {
				numElements: 8,
				align: 16,
				size: 32,
				pad: [3, 1],
				type: "f32",
				View: Float32Array,
			},
			mat2x3h: {
				numElements: 8,
				align: 8,
				size: 16,
				pad: [3, 1],
				type: "u16",
				View: Uint16Array,
			},
			mat3x3f: {
				numElements: 12,
				align: 16,
				size: 48,
				pad: [3, 1],
				type: "f32",
				View: Float32Array,
			},
			mat3x3h: {
				numElements: 12,
				align: 8,
				size: 24,
				pad: [3, 1],
				type: "u16",
				View: Uint16Array,
			},
			mat4x3f: {
				numElements: 16,
				align: 16,
				size: 64,
				pad: [3, 1],
				type: "f32",
				View: Float32Array,
			},
			mat4x3h: {
				numElements: 16,
				align: 8,
				size: 32,
				pad: [3, 1],
				type: "u16",
				View: Uint16Array,
			},
			mat2x4f: {
				numElements: 8,
				align: 16,
				size: 32,
				type: "f32",
				View: Float32Array,
			},
			mat2x4h: {
				numElements: 8,
				align: 8,
				size: 16,
				type: "u16",
				View: Uint16Array,
			},
			mat3x4f: {
				numElements: 12,
				align: 16,
				size: 48,
				pad: [3, 1],
				type: "f32",
				View: Float32Array,
			},
			mat3x4h: {
				numElements: 12,
				align: 8,
				size: 24,
				pad: [3, 1],
				type: "u16",
				View: Uint16Array,
			},
			mat4x4f: {
				numElements: 16,
				align: 16,
				size: 64,
				type: "f32",
				View: Float32Array,
			},
			mat4x4h: {
				numElements: 16,
				align: 8,
				size: 32,
				type: "u16",
				View: Uint16Array,
			},
			bool: {
				numElements: 0,
				align: 1,
				size: 0,
				type: "bool",
				View: Uint32Array,
			},
		}),
		ce = En({
			...rt,
			"atomic<i32>": rt.i32,
			"atomic<u32>": rt.u32,
			"vec2<i32>": rt.vec2i,
			"vec2<u32>": rt.vec2u,
			"vec2<f32>": rt.vec2f,
			"vec2<f16>": rt.vec2h,
			"vec3<i32>": rt.vec3i,
			"vec3<u32>": rt.vec3u,
			"vec3<f32>": rt.vec3f,
			"vec3<f16>": rt.vec3h,
			"vec4<i32>": rt.vec4i,
			"vec4<u32>": rt.vec4u,
			"vec4<f32>": rt.vec4f,
			"vec4<f16>": rt.vec4h,
			"mat2x2<f32>": rt.mat2x2f,
			"mat2x2<f16>": rt.mat2x2h,
			"mat3x2<f32>": rt.mat3x2f,
			"mat3x2<f16>": rt.mat3x2h,
			"mat4x2<f32>": rt.mat4x2f,
			"mat4x2<f16>": rt.mat4x2h,
			"mat2x3<f32>": rt.mat2x3f,
			"mat2x3<f16>": rt.mat2x3h,
			"mat3x3<f32>": rt.mat3x3f,
			"mat3x3<f16>": rt.mat3x3h,
			"mat4x3<f32>": rt.mat4x3f,
			"mat4x3<f16>": rt.mat4x3h,
			"mat2x4<f32>": rt.mat2x4f,
			"mat2x4<f16>": rt.mat2x4h,
			"mat3x4<f32>": rt.mat3x4f,
			"mat3x4<f16>": rt.mat3x4h,
			"mat4x4<f32>": rt.mat4x4f,
			"mat4x4<f16>": rt.mat4x4h,
		}),
		Pr = Tr(ce);
	function Ur(i = [], t) {
		const e = new Set();
		for (const r of Pr) {
			const h = ce[r];
			e.has(h) || (e.add(h), (h.flatten = i.includes(r) ? t : !t));
		}
	}
	Ur();
	function Gr(i) {
		const t = i;
		if (t.elementType) return t.size;
		{
			const e = i,
				r = t.numElements || 1;
			if (e.fields) return i.size * r;
			{
				const h = i,
					{ align: g } = ce[h.type];
				return r > 1 ? Ye(i.size, g) * r : i.size;
			}
		}
	}
	function Tn(i, t, e, r) {
		const { size: h, type: g } = i;
		try {
			const { View: k, align: T } = ce[g],
				I = r !== void 0,
				B = I ? Ye(h, T) : h,
				z = B / k.BYTES_PER_ELEMENT,
				V = I ? (r === 0 ? (t.byteLength - e) / B : r) : 1;
			return new k(t, e, z * V);
		} catch {
			throw new Error(`unknown type: ${g}`);
		}
	}
	function Ir(i) {
		return !i.fields && !i.elementType;
	}
	function Rr(i, t, e) {
		const r = e || 0,
			h = new ArrayBuffer(Gr(i)),
			g = (k, T) => {
				const I = k,
					B = I.elementType;
				if (B) {
					if (Ir(B) && ce[B.type].flatten) return Tn(B, h, T, I.numElements);
					{
						const { size: z } = Pn(k),
							V = I.numElements === 0 ? (h.byteLength - T) / z : I.numElements;
						return Ar(V, (Y) => g(B, T + z * Y));
					}
				} else {
					if (typeof k == "string") throw Error("unreachable");
					{
						const z = k.fields;
						if (z) {
							const V = {};
							for (const [Y, { type: tt, offset: st }] of Object.entries(z))
								V[Y] = g(tt, T + st);
							return V;
						} else return Tn(k, h, T);
					}
				}
			};
		return { views: g(i, r), arrayBuffer: h };
	}
	function We(i, t) {
		if (i !== void 0)
			if (Sn(t)) {
				const e = t;
				if (e.length === 1 && typeof i == "number") e[0] = i;
				else if (Array.isArray(i[0]) || Sn(i[0])) {
					const r = i[0].length,
						h = r === 3 ? 4 : r;
					for (let g = 0; g < i.length; ++g) {
						const k = g * h;
						e.set(i[g], k);
					}
				} else e.set(i);
			} else if (Array.isArray(t)) {
				const e = t;
				i.forEach((r, h) => {
					We(r, e[h]);
				});
			} else {
				const e = t;
				for (const [r, h] of Object.entries(i)) {
					const g = e[r];
					g && We(h, g);
				}
			}
	}
	function An(i, t, e = 0) {
		const r = i,
			h = r.group === void 0 ? i : r.typeDefinition,
			g = Rr(h, t, e);
		return {
			...g,
			set(k) {
				We(k, g.views);
			},
		};
	}
	function je(i) {
		const t = i.elementType;
		if (t) return je(t);
		const e = i.fields;
		if (e)
			return Object.values(e).reduce((g, { type: k }) => Math.max(g, je(k)), 0);
		const { type: r } = i,
			{ align: h } = ce[r];
		return h;
	}
	function Pn(i) {
		const t = i.elementType;
		if (t) {
			const r = t.size,
				h = je(t);
			return { unalignedSize: r, align: h, size: Ye(r, h) };
		}
		const e = i.fields;
		if (e) {
			const r = Object.values(e).pop();
			if (r.type.size === 0) return Pn(r.type);
		}
		return { size: 0, unalignedSize: 0, align: 1 };
	}
	class zr {
		constructor() {
			(this.constants = new Map()),
				(this.aliases = new Map()),
				(this.structs = new Map());
		}
	}
	class Jt {
		constructor() {}
		get isAstNode() {
			return !0;
		}
		get astNodeType() {
			return "";
		}
		evaluate(t) {
			throw new Error("Cannot evaluate node");
		}
		evaluateString(t) {
			return this.evaluate(t).toString();
		}
		search(t) {}
		searchBlock(t, e) {
			if (t) {
				e(ke.instance);
				for (const r of t)
					r instanceof Array ? this.searchBlock(r, e) : r.search(e);
				e(be.instance);
			}
		}
	}
	class ke extends Jt {}
	ke.instance = new ke();
	class be extends Jt {}
	be.instance = new be();
	class dt extends Jt {
		constructor() {
			super();
		}
	}
	class Ze extends dt {
		constructor(t, e, r, h, g, k) {
			super(),
				(this.calls = new Set()),
				(this.name = t),
				(this.args = e),
				(this.returnType = r),
				(this.body = h),
				(this.startLine = g),
				(this.endLine = k);
		}
		get astNodeType() {
			return "function";
		}
		search(t) {
			this.searchBlock(this.body, t);
		}
	}
	class Br extends dt {
		constructor(t) {
			super(), (this.expression = t);
		}
		get astNodeType() {
			return "staticAssert";
		}
		search(t) {
			this.expression.search(t);
		}
	}
	class Vr extends dt {
		constructor(t, e) {
			super(), (this.condition = t), (this.body = e);
		}
		get astNodeType() {
			return "while";
		}
		search(t) {
			this.condition.search(t), this.searchBlock(this.body, t);
		}
	}
	class Cr extends dt {
		constructor(t) {
			super(), (this.body = t);
		}
		get astNodeType() {
			return "continuing";
		}
		search(t) {
			this.searchBlock(this.body, t);
		}
	}
	class qr extends dt {
		constructor(t, e, r, h) {
			super(),
				(this.init = t),
				(this.condition = e),
				(this.increment = r),
				(this.body = h);
		}
		get astNodeType() {
			return "for";
		}
		search(t) {
			var e, r, h;
			(e = this.init) === null || e === void 0 || e.search(t),
				(r = this.condition) === null || r === void 0 || r.search(t),
				(h = this.increment) === null || h === void 0 || h.search(t),
				this.searchBlock(this.body, t);
		}
	}
	class se extends dt {
		constructor(t, e, r, h, g) {
			super(),
				(this.name = t),
				(this.type = e),
				(this.storage = r),
				(this.access = h),
				(this.value = g);
		}
		get astNodeType() {
			return "var";
		}
		search(t) {
			var e;
			t(this), (e = this.value) === null || e === void 0 || e.search(t);
		}
	}
	class Un extends dt {
		constructor(t, e, r) {
			super(), (this.name = t), (this.type = e), (this.value = r);
		}
		get astNodeType() {
			return "override";
		}
		search(t) {
			var e;
			(e = this.value) === null || e === void 0 || e.search(t);
		}
	}
	class Ke extends dt {
		constructor(t, e, r, h, g) {
			super(),
				(this.name = t),
				(this.type = e),
				(this.storage = r),
				(this.access = h),
				(this.value = g);
		}
		get astNodeType() {
			return "let";
		}
		search(t) {
			var e;
			t(this), (e = this.value) === null || e === void 0 || e.search(t);
		}
	}
	class Gn extends dt {
		constructor(t, e, r, h, g) {
			super(),
				(this.name = t),
				(this.type = e),
				(this.storage = r),
				(this.access = h),
				(this.value = g);
		}
		get astNodeType() {
			return "const";
		}
		evaluate(t) {
			return this.value.evaluate(t);
		}
		search(t) {
			var e;
			t(this), (e = this.value) === null || e === void 0 || e.search(t);
		}
	}
	var he;
	(function (i) {
		(i.increment = "++"), (i.decrement = "--");
	})(he || (he = {})),
		(function (i) {
			function t(e) {
				const r = e;
				if (r == "parse")
					throw new Error("Invalid value for IncrementOperator");
				return i[r];
			}
			i.parse = t;
		})(he || (he = {}));
	class Nr extends dt {
		constructor(t, e) {
			super(), (this.operator = t), (this.variable = e);
		}
		get astNodeType() {
			return "increment";
		}
		search(t) {
			this.variable.search(t);
		}
	}
	var _e;
	(function (i) {
		(i.assign = "="),
			(i.addAssign = "+="),
			(i.subtractAssin = "-="),
			(i.multiplyAssign = "*="),
			(i.divideAssign = "/="),
			(i.moduloAssign = "%="),
			(i.andAssign = "&="),
			(i.orAssign = "|="),
			(i.xorAssign = "^="),
			(i.shiftLeftAssign = "<<="),
			(i.shiftRightAssign = ">>=");
	})(_e || (_e = {})),
		(function (i) {
			function t(e) {
				const r = e;
				if (r == "parse") throw new Error("Invalid value for AssignOperator");
				return r;
			}
			i.parse = t;
		})(_e || (_e = {}));
	class Dr extends dt {
		constructor(t, e, r) {
			super(), (this.operator = t), (this.variable = e), (this.value = r);
		}
		get astNodeType() {
			return "assign";
		}
		search(t) {
			this.variable.search(t), this.value.search(t);
		}
	}
	class In extends dt {
		constructor(t, e) {
			super(), (this.name = t), (this.args = e);
		}
		get astNodeType() {
			return "call";
		}
		search(t) {
			for (const e of this.args) e.search(t);
			t(this);
		}
	}
	class Fr extends dt {
		constructor(t, e) {
			super(), (this.body = t), (this.continuing = e);
		}
		get astNodeType() {
			return "loop";
		}
	}
	class Lr extends dt {
		constructor(t, e) {
			super(), (this.condition = t), (this.body = e);
		}
		get astNodeType() {
			return "body";
		}
	}
	class Or extends dt {
		constructor(t, e, r, h) {
			super(),
				(this.condition = t),
				(this.body = e),
				(this.elseif = r),
				(this.else = h);
		}
		get astNodeType() {
			return "if";
		}
		search(t) {
			this.condition.search(t),
				this.searchBlock(this.body, t),
				this.searchBlock(this.elseif, t),
				this.searchBlock(this.else, t);
		}
	}
	class Hr extends dt {
		constructor(t) {
			super(), (this.value = t);
		}
		get astNodeType() {
			return "return";
		}
		search(t) {
			var e;
			(e = this.value) === null || e === void 0 || e.search(t);
		}
	}
	class $r extends dt {
		constructor(t) {
			super(), (this.name = t);
		}
		get astNodeType() {
			return "enable";
		}
	}
	class Xr extends dt {
		constructor(t) {
			super(), (this.extensions = t);
		}
		get astNodeType() {
			return "requires";
		}
	}
	class Yr extends dt {
		constructor(t, e) {
			super(), (this.severity = t), (this.rule = e);
		}
		get astNodeType() {
			return "diagnostic";
		}
	}
	class Rn extends dt {
		constructor(t, e) {
			super(), (this.name = t), (this.type = e);
		}
		get astNodeType() {
			return "alias";
		}
	}
	class Wr extends dt {
		constructor() {
			super();
		}
		get astNodeType() {
			return "discard";
		}
	}
	class jr extends dt {
		constructor() {
			super();
		}
		get astNodeType() {
			return "break";
		}
	}
	class Zr extends dt {
		constructor() {
			super();
		}
		get astNodeType() {
			return "continue";
		}
	}
	class ie extends dt {
		constructor(t) {
			super(), (this.name = t);
		}
		get astNodeType() {
			return "type";
		}
		get isStruct() {
			return !1;
		}
		get isArray() {
			return !1;
		}
	}
	class ae extends ie {
		constructor(t, e, r, h) {
			super(t), (this.members = e), (this.startLine = r), (this.endLine = h);
		}
		get astNodeType() {
			return "struct";
		}
		get isStruct() {
			return !0;
		}
		getMemberIndex(t) {
			for (let e = 0; e < this.members.length; e++)
				if (this.members[e].name == t) return e;
			return -1;
		}
	}
	class zn extends ie {
		constructor(t, e, r) {
			super(t), (this.format = e), (this.access = r);
		}
		get astNodeType() {
			return "template";
		}
	}
	class Kr extends ie {
		constructor(t, e, r, h) {
			super(t), (this.storage = e), (this.type = r), (this.access = h);
		}
		get astNodeType() {
			return "pointer";
		}
	}
	class Bn extends ie {
		constructor(t, e, r, h) {
			super(t), (this.attributes = e), (this.format = r), (this.count = h);
		}
		get astNodeType() {
			return "array";
		}
		get isArray() {
			return !0;
		}
	}
	class me extends ie {
		constructor(t, e, r) {
			super(t), (this.format = e), (this.access = r);
		}
		get astNodeType() {
			return "sampler";
		}
	}
	class Xt extends Jt {
		constructor() {
			super();
		}
	}
	class Vn extends Xt {
		constructor(t) {
			super(), (this.value = t);
		}
		get astNodeType() {
			return "stringExpr";
		}
		toString() {
			return this.value;
		}
		evaluateString() {
			return this.value;
		}
	}
	class le extends Xt {
		constructor(t, e) {
			super(), (this.type = t), (this.args = e);
		}
		get astNodeType() {
			return "createExpr";
		}
		search(t) {
			t(this);
			for (const e of this.args) e.search(t);
		}
	}
	class Cn extends Xt {
		constructor(t, e) {
			super(), (this.name = t), (this.args = e);
		}
		get astNodeType() {
			return "callExpr";
		}
		evaluate(t) {
			switch (this.name) {
				case "abs":
					return Math.abs(this.args[0].evaluate(t));
				case "acos":
					return Math.acos(this.args[0].evaluate(t));
				case "acosh":
					return Math.acosh(this.args[0].evaluate(t));
				case "asin":
					return Math.asin(this.args[0].evaluate(t));
				case "asinh":
					return Math.asinh(this.args[0].evaluate(t));
				case "atan":
					return Math.atan(this.args[0].evaluate(t));
				case "atan2":
					return Math.atan2(this.args[0].evaluate(t), this.args[1].evaluate(t));
				case "atanh":
					return Math.atanh(this.args[0].evaluate(t));
				case "ceil":
					return Math.ceil(this.args[0].evaluate(t));
				case "clamp":
					return Math.min(
						Math.max(this.args[0].evaluate(t), this.args[1].evaluate(t)),
						this.args[2].evaluate(t),
					);
				case "cos":
					return Math.cos(this.args[0].evaluate(t));
				case "degrees":
					return (this.args[0].evaluate(t) * 180) / Math.PI;
				case "distance":
					return Math.sqrt(
						Math.pow(this.args[0].evaluate(t) - this.args[1].evaluate(t), 2),
					);
				case "dot":
				case "exp":
					return Math.exp(this.args[0].evaluate(t));
				case "exp2":
					return Math.pow(2, this.args[0].evaluate(t));
				case "floor":
					return Math.floor(this.args[0].evaluate(t));
				case "fma":
					return (
						this.args[0].evaluate(t) * this.args[1].evaluate(t) +
						this.args[2].evaluate(t)
					);
				case "fract":
					return (
						this.args[0].evaluate(t) - Math.floor(this.args[0].evaluate(t))
					);
				case "inverseSqrt":
					return 1 / Math.sqrt(this.args[0].evaluate(t));
				case "log":
					return Math.log(this.args[0].evaluate(t));
				case "log2":
					return Math.log2(this.args[0].evaluate(t));
				case "max":
					return Math.max(this.args[0].evaluate(t), this.args[1].evaluate(t));
				case "min":
					return Math.min(this.args[0].evaluate(t), this.args[1].evaluate(t));
				case "mix":
					return (
						this.args[0].evaluate(t) * (1 - this.args[2].evaluate(t)) +
						this.args[1].evaluate(t) * this.args[2].evaluate(t)
					);
				case "modf":
					return (
						this.args[0].evaluate(t) - Math.floor(this.args[0].evaluate(t))
					);
				case "pow":
					return Math.pow(this.args[0].evaluate(t), this.args[1].evaluate(t));
				case "radians":
					return (this.args[0].evaluate(t) * Math.PI) / 180;
				case "round":
					return Math.round(this.args[0].evaluate(t));
				case "sign":
					return Math.sign(this.args[0].evaluate(t));
				case "sin":
					return Math.sin(this.args[0].evaluate(t));
				case "sinh":
					return Math.sinh(this.args[0].evaluate(t));
				case "saturate":
					return Math.min(Math.max(this.args[0].evaluate(t), 0), 1);
				case "smoothstep":
					return (
						this.args[0].evaluate(t) *
						this.args[0].evaluate(t) *
						(3 - 2 * this.args[0].evaluate(t))
					);
				case "sqrt":
					return Math.sqrt(this.args[0].evaluate(t));
				case "step":
					return this.args[0].evaluate(t) < this.args[1].evaluate(t) ? 0 : 1;
				case "tan":
					return Math.tan(this.args[0].evaluate(t));
				case "tanh":
					return Math.tanh(this.args[0].evaluate(t));
				case "trunc":
					return Math.trunc(this.args[0].evaluate(t));
				default:
					throw new Error("Non const function: " + this.name);
			}
		}
		search(t) {
			for (const e of this.args) e.search(t);
			t(this);
		}
	}
	class Je extends Xt {
		constructor(t) {
			super(), (this.name = t);
		}
		get astNodeType() {
			return "varExpr";
		}
		search(t) {
			t(this), this.postfix && this.postfix.search(t);
		}
		evaluate(t) {
			const e = t.constants.get(this.name);
			if (!e) throw new Error("Cannot evaluate node");
			return e.evaluate(t);
		}
	}
	class qn extends Xt {
		constructor(t, e) {
			super(), (this.name = t), (this.initializer = e);
		}
		get astNodeType() {
			return "constExpr";
		}
		evaluate(t) {
			var e, r;
			if (this.initializer instanceof le) {
				const h =
						(e = this.postfix) === null || e === void 0
							? void 0
							: e.evaluateString(t),
					g =
						(r = this.initializer.type) === null || r === void 0
							? void 0
							: r.name,
					k = t.structs.get(g),
					T = k == null ? void 0 : k.getMemberIndex(h);
				if (T != -1) return this.initializer.args[T].evaluate(t);
				console.log(T);
			}
			return this.initializer.evaluate(t);
		}
		search(t) {
			this.initializer.search(t);
		}
	}
	class Nn extends Xt {
		constructor(t) {
			super(), (this.value = t);
		}
		get astNodeType() {
			return "literalExpr";
		}
		evaluate() {
			return this.value;
		}
	}
	class Jr extends Xt {
		constructor(t, e) {
			super(), (this.type = t), (this.value = e);
		}
		get astNodeType() {
			return "bitcastExpr";
		}
		search(t) {
			this.value.search(t);
		}
	}
	class Qr extends Xt {
		constructor(t, e) {
			super(), (this.type = t), (this.args = e);
		}
		get astNodeType() {
			return "typecastExpr";
		}
		evaluate(t) {
			return this.args[0].evaluate(t);
		}
		search(t) {
			this.searchBlock(this.args, t);
		}
	}
	class Dn extends Xt {
		constructor(t) {
			super(), (this.contents = t);
		}
		get astNodeType() {
			return "groupExpr";
		}
		evaluate(t) {
			return this.contents[0].evaluate(t);
		}
		search(t) {
			this.searchBlock(this.contents, t);
		}
	}
	class ts extends Xt {
		constructor(t) {
			super(), (this.index = t);
		}
		search(t) {
			this.index.search(t);
		}
	}
	class Fn extends Xt {
		constructor() {
			super();
		}
	}
	class es extends Fn {
		constructor(t, e) {
			super(), (this.operator = t), (this.right = e);
		}
		get astNodeType() {
			return "unaryOp";
		}
		evaluate(t) {
			switch (this.operator) {
				case "+":
					return this.right.evaluate(t);
				case "-":
					return -this.right.evaluate(t);
				case "!":
					return this.right.evaluate(t) ? 0 : 1;
				case "~":
					return ~this.right.evaluate(t);
				default:
					throw new Error("Unknown unary operator: " + this.operator);
			}
		}
		search(t) {
			this.right.search(t);
		}
	}
	class Zt extends Fn {
		constructor(t, e, r) {
			super(), (this.operator = t), (this.left = e), (this.right = r);
		}
		get astNodeType() {
			return "binaryOp";
		}
		evaluate(t) {
			switch (this.operator) {
				case "+":
					return this.left.evaluate(t) + this.right.evaluate(t);
				case "-":
					return this.left.evaluate(t) - this.right.evaluate(t);
				case "*":
					return this.left.evaluate(t) * this.right.evaluate(t);
				case "/":
					return this.left.evaluate(t) / this.right.evaluate(t);
				case "%":
					return this.left.evaluate(t) % this.right.evaluate(t);
				case "==":
					return this.left.evaluate(t) == this.right.evaluate(t) ? 1 : 0;
				case "!=":
					return this.left.evaluate(t) != this.right.evaluate(t) ? 1 : 0;
				case "<":
					return this.left.evaluate(t) < this.right.evaluate(t) ? 1 : 0;
				case ">":
					return this.left.evaluate(t) > this.right.evaluate(t) ? 1 : 0;
				case "<=":
					return this.left.evaluate(t) <= this.right.evaluate(t) ? 1 : 0;
				case ">=":
					return this.left.evaluate(t) >= this.right.evaluate(t) ? 1 : 0;
				case "&&":
					return this.left.evaluate(t) && this.right.evaluate(t) ? 1 : 0;
				case "||":
					return this.left.evaluate(t) || this.right.evaluate(t) ? 1 : 0;
				default:
					throw new Error(`Unknown operator ${this.operator}`);
			}
		}
		search(t) {
			this.left.search(t), this.right.search(t);
		}
	}
	class Ln extends Jt {
		constructor() {
			super();
		}
	}
	class ns extends Ln {
		constructor(t, e) {
			super(), (this.selector = t), (this.body = e);
		}
		get astNodeType() {
			return "case";
		}
		search(t) {
			this.searchBlock(this.body, t);
		}
	}
	class rs extends Ln {
		constructor(t) {
			super(), (this.body = t);
		}
		get astNodeType() {
			return "default";
		}
		search(t) {
			this.searchBlock(this.body, t);
		}
	}
	class ss extends Jt {
		constructor(t, e, r) {
			super(), (this.name = t), (this.type = e), (this.attributes = r);
		}
		get astNodeType() {
			return "argument";
		}
	}
	class is extends Jt {
		constructor(t, e) {
			super(), (this.condition = t), (this.body = e);
		}
		get astNodeType() {
			return "elseif";
		}
		search(t) {
			this.condition.search(t), this.searchBlock(this.body, t);
		}
	}
	class as extends Jt {
		constructor(t, e, r) {
			super(), (this.name = t), (this.type = e), (this.attributes = r);
		}
		get astNodeType() {
			return "member";
		}
	}
	class On extends Jt {
		constructor(t, e) {
			super(), (this.name = t), (this.value = e);
		}
		get astNodeType() {
			return "attribute";
		}
	}
	var E, M;
	(function (i) {
		(i[(i.token = 0)] = "token"),
			(i[(i.keyword = 1)] = "keyword"),
			(i[(i.reserved = 2)] = "reserved");
	})(M || (M = {}));
	class S {
		constructor(t, e, r) {
			(this.name = t), (this.type = e), (this.rule = r);
		}
		toString() {
			return this.name;
		}
	}
	class p {}
	(E = p),
		(p.none = new S("", M.reserved, "")),
		(p.eof = new S("EOF", M.token, "")),
		(p.reserved = {
			asm: new S("asm", M.reserved, "asm"),
			bf16: new S("bf16", M.reserved, "bf16"),
			do: new S("do", M.reserved, "do"),
			enum: new S("enum", M.reserved, "enum"),
			f16: new S("f16", M.reserved, "f16"),
			f64: new S("f64", M.reserved, "f64"),
			handle: new S("handle", M.reserved, "handle"),
			i8: new S("i8", M.reserved, "i8"),
			i16: new S("i16", M.reserved, "i16"),
			i64: new S("i64", M.reserved, "i64"),
			mat: new S("mat", M.reserved, "mat"),
			premerge: new S("premerge", M.reserved, "premerge"),
			regardless: new S("regardless", M.reserved, "regardless"),
			typedef: new S("typedef", M.reserved, "typedef"),
			u8: new S("u8", M.reserved, "u8"),
			u16: new S("u16", M.reserved, "u16"),
			u64: new S("u64", M.reserved, "u64"),
			unless: new S("unless", M.reserved, "unless"),
			using: new S("using", M.reserved, "using"),
			vec: new S("vec", M.reserved, "vec"),
			void: new S("void", M.reserved, "void"),
		}),
		(p.keywords = {
			array: new S("array", M.keyword, "array"),
			atomic: new S("atomic", M.keyword, "atomic"),
			bool: new S("bool", M.keyword, "bool"),
			f32: new S("f32", M.keyword, "f32"),
			i32: new S("i32", M.keyword, "i32"),
			mat2x2: new S("mat2x2", M.keyword, "mat2x2"),
			mat2x3: new S("mat2x3", M.keyword, "mat2x3"),
			mat2x4: new S("mat2x4", M.keyword, "mat2x4"),
			mat3x2: new S("mat3x2", M.keyword, "mat3x2"),
			mat3x3: new S("mat3x3", M.keyword, "mat3x3"),
			mat3x4: new S("mat3x4", M.keyword, "mat3x4"),
			mat4x2: new S("mat4x2", M.keyword, "mat4x2"),
			mat4x3: new S("mat4x3", M.keyword, "mat4x3"),
			mat4x4: new S("mat4x4", M.keyword, "mat4x4"),
			ptr: new S("ptr", M.keyword, "ptr"),
			sampler: new S("sampler", M.keyword, "sampler"),
			sampler_comparison: new S(
				"sampler_comparison",
				M.keyword,
				"sampler_comparison",
			),
			struct: new S("struct", M.keyword, "struct"),
			texture_1d: new S("texture_1d", M.keyword, "texture_1d"),
			texture_2d: new S("texture_2d", M.keyword, "texture_2d"),
			texture_2d_array: new S(
				"texture_2d_array",
				M.keyword,
				"texture_2d_array",
			),
			texture_3d: new S("texture_3d", M.keyword, "texture_3d"),
			texture_cube: new S("texture_cube", M.keyword, "texture_cube"),
			texture_cube_array: new S(
				"texture_cube_array",
				M.keyword,
				"texture_cube_array",
			),
			texture_multisampled_2d: new S(
				"texture_multisampled_2d",
				M.keyword,
				"texture_multisampled_2d",
			),
			texture_storage_1d: new S(
				"texture_storage_1d",
				M.keyword,
				"texture_storage_1d",
			),
			texture_storage_2d: new S(
				"texture_storage_2d",
				M.keyword,
				"texture_storage_2d",
			),
			texture_storage_2d_array: new S(
				"texture_storage_2d_array",
				M.keyword,
				"texture_storage_2d_array",
			),
			texture_storage_3d: new S(
				"texture_storage_3d",
				M.keyword,
				"texture_storage_3d",
			),
			texture_depth_2d: new S(
				"texture_depth_2d",
				M.keyword,
				"texture_depth_2d",
			),
			texture_depth_2d_array: new S(
				"texture_depth_2d_array",
				M.keyword,
				"texture_depth_2d_array",
			),
			texture_depth_cube: new S(
				"texture_depth_cube",
				M.keyword,
				"texture_depth_cube",
			),
			texture_depth_cube_array: new S(
				"texture_depth_cube_array",
				M.keyword,
				"texture_depth_cube_array",
			),
			texture_depth_multisampled_2d: new S(
				"texture_depth_multisampled_2d",
				M.keyword,
				"texture_depth_multisampled_2d",
			),
			texture_external: new S(
				"texture_external",
				M.keyword,
				"texture_external",
			),
			u32: new S("u32", M.keyword, "u32"),
			vec2: new S("vec2", M.keyword, "vec2"),
			vec3: new S("vec3", M.keyword, "vec3"),
			vec4: new S("vec4", M.keyword, "vec4"),
			bitcast: new S("bitcast", M.keyword, "bitcast"),
			block: new S("block", M.keyword, "block"),
			break: new S("break", M.keyword, "break"),
			case: new S("case", M.keyword, "case"),
			continue: new S("continue", M.keyword, "continue"),
			continuing: new S("continuing", M.keyword, "continuing"),
			default: new S("default", M.keyword, "default"),
			diagnostic: new S("diagnostic", M.keyword, "diagnostic"),
			discard: new S("discard", M.keyword, "discard"),
			else: new S("else", M.keyword, "else"),
			enable: new S("enable", M.keyword, "enable"),
			fallthrough: new S("fallthrough", M.keyword, "fallthrough"),
			false: new S("false", M.keyword, "false"),
			fn: new S("fn", M.keyword, "fn"),
			for: new S("for", M.keyword, "for"),
			function: new S("function", M.keyword, "function"),
			if: new S("if", M.keyword, "if"),
			let: new S("let", M.keyword, "let"),
			const: new S("const", M.keyword, "const"),
			loop: new S("loop", M.keyword, "loop"),
			while: new S("while", M.keyword, "while"),
			private: new S("private", M.keyword, "private"),
			read: new S("read", M.keyword, "read"),
			read_write: new S("read_write", M.keyword, "read_write"),
			return: new S("return", M.keyword, "return"),
			requires: new S("requires", M.keyword, "requires"),
			storage: new S("storage", M.keyword, "storage"),
			switch: new S("switch", M.keyword, "switch"),
			true: new S("true", M.keyword, "true"),
			alias: new S("alias", M.keyword, "alias"),
			type: new S("type", M.keyword, "type"),
			uniform: new S("uniform", M.keyword, "uniform"),
			var: new S("var", M.keyword, "var"),
			override: new S("override", M.keyword, "override"),
			workgroup: new S("workgroup", M.keyword, "workgroup"),
			write: new S("write", M.keyword, "write"),
			r8unorm: new S("r8unorm", M.keyword, "r8unorm"),
			r8snorm: new S("r8snorm", M.keyword, "r8snorm"),
			r8uint: new S("r8uint", M.keyword, "r8uint"),
			r8sint: new S("r8sint", M.keyword, "r8sint"),
			r16uint: new S("r16uint", M.keyword, "r16uint"),
			r16sint: new S("r16sint", M.keyword, "r16sint"),
			r16float: new S("r16float", M.keyword, "r16float"),
			rg8unorm: new S("rg8unorm", M.keyword, "rg8unorm"),
			rg8snorm: new S("rg8snorm", M.keyword, "rg8snorm"),
			rg8uint: new S("rg8uint", M.keyword, "rg8uint"),
			rg8sint: new S("rg8sint", M.keyword, "rg8sint"),
			r32uint: new S("r32uint", M.keyword, "r32uint"),
			r32sint: new S("r32sint", M.keyword, "r32sint"),
			r32float: new S("r32float", M.keyword, "r32float"),
			rg16uint: new S("rg16uint", M.keyword, "rg16uint"),
			rg16sint: new S("rg16sint", M.keyword, "rg16sint"),
			rg16float: new S("rg16float", M.keyword, "rg16float"),
			rgba8unorm: new S("rgba8unorm", M.keyword, "rgba8unorm"),
			rgba8unorm_srgb: new S("rgba8unorm_srgb", M.keyword, "rgba8unorm_srgb"),
			rgba8snorm: new S("rgba8snorm", M.keyword, "rgba8snorm"),
			rgba8uint: new S("rgba8uint", M.keyword, "rgba8uint"),
			rgba8sint: new S("rgba8sint", M.keyword, "rgba8sint"),
			bgra8unorm: new S("bgra8unorm", M.keyword, "bgra8unorm"),
			bgra8unorm_srgb: new S("bgra8unorm_srgb", M.keyword, "bgra8unorm_srgb"),
			rgb10a2unorm: new S("rgb10a2unorm", M.keyword, "rgb10a2unorm"),
			rg11b10float: new S("rg11b10float", M.keyword, "rg11b10float"),
			rg32uint: new S("rg32uint", M.keyword, "rg32uint"),
			rg32sint: new S("rg32sint", M.keyword, "rg32sint"),
			rg32float: new S("rg32float", M.keyword, "rg32float"),
			rgba16uint: new S("rgba16uint", M.keyword, "rgba16uint"),
			rgba16sint: new S("rgba16sint", M.keyword, "rgba16sint"),
			rgba16float: new S("rgba16float", M.keyword, "rgba16float"),
			rgba32uint: new S("rgba32uint", M.keyword, "rgba32uint"),
			rgba32sint: new S("rgba32sint", M.keyword, "rgba32sint"),
			rgba32float: new S("rgba32float", M.keyword, "rgba32float"),
			static_assert: new S("static_assert", M.keyword, "static_assert"),
		}),
		(p.tokens = {
			decimal_float_literal: new S(
				"decimal_float_literal",
				M.token,
				/((-?[0-9]*\.[0-9]+|-?[0-9]+\.[0-9]*)((e|E)(\+|-)?[0-9]+)?f?)|(-?[0-9]+(e|E)(\+|-)?[0-9]+f?)|([0-9]+f)/,
			),
			hex_float_literal: new S(
				"hex_float_literal",
				M.token,
				/-?0x((([0-9a-fA-F]*\.[0-9a-fA-F]+|[0-9a-fA-F]+\.[0-9a-fA-F]*)((p|P)(\+|-)?[0-9]+f?)?)|([0-9a-fA-F]+(p|P)(\+|-)?[0-9]+f?))/,
			),
			int_literal: new S(
				"int_literal",
				M.token,
				/-?0x[0-9a-fA-F]+|0i?|-?[1-9][0-9]*i?/,
			),
			uint_literal: new S(
				"uint_literal",
				M.token,
				/0x[0-9a-fA-F]+u|0u|[1-9][0-9]*u/,
			),
			ident: new S("ident", M.token, /[_a-zA-Z][0-9a-zA-Z_]*/),
			and: new S("and", M.token, "&"),
			and_and: new S("and_and", M.token, "&&"),
			arrow: new S("arrow ", M.token, "->"),
			attr: new S("attr", M.token, "@"),
			attr_left: new S("attr_left", M.token, "[["),
			attr_right: new S("attr_right", M.token, "]]"),
			forward_slash: new S("forward_slash", M.token, "/"),
			bang: new S("bang", M.token, "!"),
			bracket_left: new S("bracket_left", M.token, "["),
			bracket_right: new S("bracket_right", M.token, "]"),
			brace_left: new S("brace_left", M.token, "{"),
			brace_right: new S("brace_right", M.token, "}"),
			colon: new S("colon", M.token, ":"),
			comma: new S("comma", M.token, ","),
			equal: new S("equal", M.token, "="),
			equal_equal: new S("equal_equal", M.token, "=="),
			not_equal: new S("not_equal", M.token, "!="),
			greater_than: new S("greater_than", M.token, ">"),
			greater_than_equal: new S("greater_than_equal", M.token, ">="),
			shift_right: new S("shift_right", M.token, ">>"),
			less_than: new S("less_than", M.token, "<"),
			less_than_equal: new S("less_than_equal", M.token, "<="),
			shift_left: new S("shift_left", M.token, "<<"),
			modulo: new S("modulo", M.token, "%"),
			minus: new S("minus", M.token, "-"),
			minus_minus: new S("minus_minus", M.token, "--"),
			period: new S("period", M.token, "."),
			plus: new S("plus", M.token, "+"),
			plus_plus: new S("plus_plus", M.token, "++"),
			or: new S("or", M.token, "|"),
			or_or: new S("or_or", M.token, "||"),
			paren_left: new S("paren_left", M.token, "("),
			paren_right: new S("paren_right", M.token, ")"),
			semicolon: new S("semicolon", M.token, ";"),
			star: new S("star", M.token, "*"),
			tilde: new S("tilde", M.token, "~"),
			underscore: new S("underscore", M.token, "_"),
			xor: new S("xor", M.token, "^"),
			plus_equal: new S("plus_equal", M.token, "+="),
			minus_equal: new S("minus_equal", M.token, "-="),
			times_equal: new S("times_equal", M.token, "*="),
			division_equal: new S("division_equal", M.token, "/="),
			modulo_equal: new S("modulo_equal", M.token, "%="),
			and_equal: new S("and_equal", M.token, "&="),
			or_equal: new S("or_equal", M.token, "|="),
			xor_equal: new S("xor_equal", M.token, "^="),
			shift_right_equal: new S("shift_right_equal", M.token, ">>="),
			shift_left_equal: new S("shift_left_equal", M.token, "<<="),
		}),
		(p.simpleTokens = {
			"@": E.tokens.attr,
			"{": E.tokens.brace_left,
			"}": E.tokens.brace_right,
			":": E.tokens.colon,
			",": E.tokens.comma,
			"(": E.tokens.paren_left,
			")": E.tokens.paren_right,
			";": E.tokens.semicolon,
		}),
		(p.literalTokens = {
			"&": E.tokens.and,
			"&&": E.tokens.and_and,
			"->": E.tokens.arrow,
			"[[": E.tokens.attr_left,
			"]]": E.tokens.attr_right,
			"/": E.tokens.forward_slash,
			"!": E.tokens.bang,
			"[": E.tokens.bracket_left,
			"]": E.tokens.bracket_right,
			"=": E.tokens.equal,
			"==": E.tokens.equal_equal,
			"!=": E.tokens.not_equal,
			">": E.tokens.greater_than,
			">=": E.tokens.greater_than_equal,
			">>": E.tokens.shift_right,
			"<": E.tokens.less_than,
			"<=": E.tokens.less_than_equal,
			"<<": E.tokens.shift_left,
			"%": E.tokens.modulo,
			"-": E.tokens.minus,
			"--": E.tokens.minus_minus,
			".": E.tokens.period,
			"+": E.tokens.plus,
			"++": E.tokens.plus_plus,
			"|": E.tokens.or,
			"||": E.tokens.or_or,
			"*": E.tokens.star,
			"~": E.tokens.tilde,
			_: E.tokens.underscore,
			"^": E.tokens.xor,
			"+=": E.tokens.plus_equal,
			"-=": E.tokens.minus_equal,
			"*=": E.tokens.times_equal,
			"/=": E.tokens.division_equal,
			"%=": E.tokens.modulo_equal,
			"&=": E.tokens.and_equal,
			"|=": E.tokens.or_equal,
			"^=": E.tokens.xor_equal,
			">>=": E.tokens.shift_right_equal,
			"<<=": E.tokens.shift_left_equal,
		}),
		(p.regexTokens = {
			decimal_float_literal: E.tokens.decimal_float_literal,
			hex_float_literal: E.tokens.hex_float_literal,
			int_literal: E.tokens.int_literal,
			uint_literal: E.tokens.uint_literal,
			ident: E.tokens.ident,
		}),
		(p.storage_class = [
			E.keywords.function,
			E.keywords.private,
			E.keywords.workgroup,
			E.keywords.uniform,
			E.keywords.storage,
		]),
		(p.access_mode = [
			E.keywords.read,
			E.keywords.write,
			E.keywords.read_write,
		]),
		(p.sampler_type = [E.keywords.sampler, E.keywords.sampler_comparison]),
		(p.sampled_texture_type = [
			E.keywords.texture_1d,
			E.keywords.texture_2d,
			E.keywords.texture_2d_array,
			E.keywords.texture_3d,
			E.keywords.texture_cube,
			E.keywords.texture_cube_array,
		]),
		(p.multisampled_texture_type = [E.keywords.texture_multisampled_2d]),
		(p.storage_texture_type = [
			E.keywords.texture_storage_1d,
			E.keywords.texture_storage_2d,
			E.keywords.texture_storage_2d_array,
			E.keywords.texture_storage_3d,
		]),
		(p.depth_texture_type = [
			E.keywords.texture_depth_2d,
			E.keywords.texture_depth_2d_array,
			E.keywords.texture_depth_cube,
			E.keywords.texture_depth_cube_array,
			E.keywords.texture_depth_multisampled_2d,
		]),
		(p.texture_external_type = [E.keywords.texture_external]),
		(p.any_texture_type = [
			...E.sampled_texture_type,
			...E.multisampled_texture_type,
			...E.storage_texture_type,
			...E.depth_texture_type,
			...E.texture_external_type,
		]),
		(p.texel_format = [
			E.keywords.r8unorm,
			E.keywords.r8snorm,
			E.keywords.r8uint,
			E.keywords.r8sint,
			E.keywords.r16uint,
			E.keywords.r16sint,
			E.keywords.r16float,
			E.keywords.rg8unorm,
			E.keywords.rg8snorm,
			E.keywords.rg8uint,
			E.keywords.rg8sint,
			E.keywords.r32uint,
			E.keywords.r32sint,
			E.keywords.r32float,
			E.keywords.rg16uint,
			E.keywords.rg16sint,
			E.keywords.rg16float,
			E.keywords.rgba8unorm,
			E.keywords.rgba8unorm_srgb,
			E.keywords.rgba8snorm,
			E.keywords.rgba8uint,
			E.keywords.rgba8sint,
			E.keywords.bgra8unorm,
			E.keywords.bgra8unorm_srgb,
			E.keywords.rgb10a2unorm,
			E.keywords.rg11b10float,
			E.keywords.rg32uint,
			E.keywords.rg32sint,
			E.keywords.rg32float,
			E.keywords.rgba16uint,
			E.keywords.rgba16sint,
			E.keywords.rgba16float,
			E.keywords.rgba32uint,
			E.keywords.rgba32sint,
			E.keywords.rgba32float,
		]),
		(p.const_literal = [
			E.tokens.int_literal,
			E.tokens.uint_literal,
			E.tokens.decimal_float_literal,
			E.tokens.hex_float_literal,
			E.keywords.true,
			E.keywords.false,
		]),
		(p.literal_or_ident = [
			E.tokens.ident,
			E.tokens.int_literal,
			E.tokens.uint_literal,
			E.tokens.decimal_float_literal,
			E.tokens.hex_float_literal,
		]),
		(p.element_count_expression = [
			E.tokens.int_literal,
			E.tokens.uint_literal,
			E.tokens.ident,
		]),
		(p.template_types = [
			E.keywords.vec2,
			E.keywords.vec3,
			E.keywords.vec4,
			E.keywords.mat2x2,
			E.keywords.mat2x3,
			E.keywords.mat2x4,
			E.keywords.mat3x2,
			E.keywords.mat3x3,
			E.keywords.mat3x4,
			E.keywords.mat4x2,
			E.keywords.mat4x3,
			E.keywords.mat4x4,
			E.keywords.atomic,
			E.keywords.bitcast,
			...E.any_texture_type,
		]),
		(p.attribute_name = [
			E.tokens.ident,
			E.keywords.block,
			E.keywords.diagnostic,
		]),
		(p.assignment_operators = [
			E.tokens.equal,
			E.tokens.plus_equal,
			E.tokens.minus_equal,
			E.tokens.times_equal,
			E.tokens.division_equal,
			E.tokens.modulo_equal,
			E.tokens.and_equal,
			E.tokens.or_equal,
			E.tokens.xor_equal,
			E.tokens.shift_right_equal,
			E.tokens.shift_left_equal,
		]),
		(p.increment_operators = [E.tokens.plus_plus, E.tokens.minus_minus]);
	class Hn {
		constructor(t, e, r) {
			(this.type = t), (this.lexeme = e), (this.line = r);
		}
		toString() {
			return this.lexeme;
		}
		isTemplateType() {
			return p.template_types.indexOf(this.type) != -1;
		}
		isArrayType() {
			return this.type == p.keywords.array;
		}
		isArrayOrTemplateType() {
			return this.isArrayType() || this.isTemplateType();
		}
	}
	class os {
		constructor(t) {
			(this._tokens = []),
				(this._start = 0),
				(this._current = 0),
				(this._line = 1),
				(this._source = t ?? "");
		}
		scanTokens() {
			for (; !this._isAtEnd(); )
				if (((this._start = this._current), !this.scanToken()))
					throw `Invalid syntax at line ${this._line}`;
			return this._tokens.push(new Hn(p.eof, "", this._line)), this._tokens;
		}
		scanToken() {
			let t = this._advance();
			if (
				t ==
				`
`
			)
				return this._line++, !0;
			if (this._isWhitespace(t)) return !0;
			if (t == "/") {
				if (this._peekAhead() == "/") {
					for (
						;
						t !=
						`
`;

					) {
						if (this._isAtEnd()) return !0;
						t = this._advance();
					}
					return this._line++, !0;
				} else if (this._peekAhead() == "*") {
					this._advance();
					let k = 1;
					for (; k > 0; ) {
						if (this._isAtEnd()) return !0;
						if (
							((t = this._advance()),
							t ==
								`
`)
						)
							this._line++;
						else if (t == "*") {
							if (this._peekAhead() == "/" && (this._advance(), k--, k == 0))
								return !0;
						} else
							t == "/" && this._peekAhead() == "*" && (this._advance(), k++);
					}
					return !0;
				}
			}
			const e = p.simpleTokens[t];
			if (e) return this._addToken(e), !0;
			let r = p.none;
			const h = this._isAlpha(t),
				g = t === "_";
			if (this._isAlphaNumeric(t)) {
				let k = this._peekAhead();
				for (; this._isAlphaNumeric(k); )
					(t += this._advance()), (k = this._peekAhead());
			}
			if (h) {
				const k = p.keywords[t];
				if (k) return this._addToken(k), !0;
			}
			if (h || g) return this._addToken(p.tokens.ident), !0;
			for (;;) {
				let k = this._findType(t);
				const T = this._peekAhead();
				if (t == ">" && (T == ">" || T == "=")) {
					let I = !1,
						B = this._tokens.length - 1;
					for (let z = 0; z < 5 && B >= 0; ++z, --B)
						if (this._tokens[B].type === p.tokens.less_than) {
							B > 0 && this._tokens[B - 1].isArrayOrTemplateType() && (I = !0);
							break;
						}
					if (I) return this._addToken(k), !0;
				}
				if (k === p.none) {
					let I = t,
						B = 0;
					const z = 2;
					for (let V = 0; V < z; ++V)
						if (
							((I += this._peekAhead(V)), (k = this._findType(I)), k !== p.none)
						) {
							B = V;
							break;
						}
					if (k === p.none)
						return r === p.none ? !1 : (this._current--, this._addToken(r), !0);
					(t = I), (this._current += B + 1);
				}
				if (((r = k), this._isAtEnd())) break;
				t += this._advance();
			}
			return r === p.none ? !1 : (this._addToken(r), !0);
		}
		_findType(t) {
			for (const r in p.regexTokens) {
				const h = p.regexTokens[r];
				if (this._match(t, h.rule)) return h;
			}
			return p.literalTokens[t] || p.none;
		}
		_match(t, e) {
			const r = e.exec(t);
			return r && r.index == 0 && r[0] == t;
		}
		_isAtEnd() {
			return this._current >= this._source.length;
		}
		_isAlpha(t) {
			return (t >= "a" && t <= "z") || (t >= "A" && t <= "Z");
		}
		_isAlphaNumeric(t) {
			return (
				(t >= "a" && t <= "z") ||
				(t >= "A" && t <= "Z") ||
				t == "_" ||
				(t >= "0" && t <= "9")
			);
		}
		_isWhitespace(t) {
			return t == " " || t == "	" || t == "\r";
		}
		_advance(t = 0) {
			let e = this._source[this._current];
			return (t = t || 0), t++, (this._current += t), e;
		}
		_peekAhead(t = 0) {
			return (
				(t = t || 0),
				this._current + t >= this._source.length
					? "\0"
					: this._source[this._current + t]
			);
		}
		_addToken(t) {
			const e = this._source.substring(this._start, this._current);
			this._tokens.push(new Hn(t, e, this._line));
		}
	}
	class us {
		constructor() {
			(this._tokens = []),
				(this._current = 0),
				(this._currentLine = 0),
				(this._context = new zr()),
				(this._deferArrayCountEval = []);
		}
		parse(t) {
			this._initialize(t), (this._deferArrayCountEval.length = 0);
			const e = [];
			for (; !this._isAtEnd(); ) {
				const r = this._global_decl_or_directive();
				if (!r) break;
				e.push(r);
			}
			if (this._deferArrayCountEval.length > 0) {
				for (const r of this._deferArrayCountEval) {
					const h = r.arrayType,
						g = r.countNode;
					if (g instanceof Je) {
						const k = g.name,
							T = this._context.constants.get(k);
						if (T)
							try {
								const I = T.evaluate(this._context);
								h.count = I;
							} catch {}
					}
				}
				this._deferArrayCountEval.length = 0;
			}
			return e;
		}
		_initialize(t) {
			if (t)
				if (typeof t == "string") {
					const e = new os(t);
					this._tokens = e.scanTokens();
				} else this._tokens = t;
			else this._tokens = [];
			this._current = 0;
		}
		_error(t, e) {
			return {
				token: t,
				message: e,
				toString: function () {
					return `${e}`;
				},
			};
		}
		_isAtEnd() {
			return this._current >= this._tokens.length || this._peek().type == p.eof;
		}
		_match(t) {
			if (t instanceof S) return this._check(t) ? (this._advance(), !0) : !1;
			for (let e = 0, r = t.length; e < r; ++e) {
				const h = t[e];
				if (this._check(h)) return this._advance(), !0;
			}
			return !1;
		}
		_consume(t, e) {
			if (this._check(t)) return this._advance();
			throw this._error(this._peek(), e);
		}
		_check(t) {
			if (this._isAtEnd()) return !1;
			const e = this._peek();
			if (t instanceof Array) {
				const r = e.type;
				return t.indexOf(r) != -1;
			}
			return e.type == t;
		}
		_advance() {
			var t, e;
			return (
				(this._currentLine =
					(e =
						(t = this._peek()) === null || t === void 0 ? void 0 : t.line) !==
						null && e !== void 0
						? e
						: -1),
				this._isAtEnd() || this._current++,
				this._previous()
			);
		}
		_peek() {
			return this._tokens[this._current];
		}
		_previous() {
			return this._tokens[this._current - 1];
		}
		_global_decl_or_directive() {
			for (; this._match(p.tokens.semicolon) && !this._isAtEnd(); );
			if (this._match(p.keywords.alias)) {
				const e = this._type_alias();
				return this._consume(p.tokens.semicolon, "Expected ';'"), e;
			}
			if (this._match(p.keywords.diagnostic)) {
				const e = this._diagnostic();
				return this._consume(p.tokens.semicolon, "Expected ';'"), e;
			}
			if (this._match(p.keywords.requires)) {
				const e = this._requires_directive();
				return this._consume(p.tokens.semicolon, "Expected ';'"), e;
			}
			if (this._match(p.keywords.enable)) {
				const e = this._enable_directive();
				return this._consume(p.tokens.semicolon, "Expected ';'"), e;
			}
			const t = this._attribute();
			if (this._check(p.keywords.var)) {
				const e = this._global_variable_decl();
				return (
					e != null && (e.attributes = t),
					this._consume(p.tokens.semicolon, "Expected ';'."),
					e
				);
			}
			if (this._check(p.keywords.override)) {
				const e = this._override_variable_decl();
				return (
					e != null && (e.attributes = t),
					this._consume(p.tokens.semicolon, "Expected ';'."),
					e
				);
			}
			if (this._check(p.keywords.let)) {
				const e = this._global_let_decl();
				return (
					e != null && (e.attributes = t),
					this._consume(p.tokens.semicolon, "Expected ';'."),
					e
				);
			}
			if (this._check(p.keywords.const)) {
				const e = this._global_const_decl();
				return (
					e != null && (e.attributes = t),
					this._consume(p.tokens.semicolon, "Expected ';'."),
					e
				);
			}
			if (this._check(p.keywords.struct)) {
				const e = this._struct_decl();
				return e != null && (e.attributes = t), e;
			}
			if (this._check(p.keywords.fn)) {
				const e = this._function_decl();
				return e != null && (e.attributes = t), e;
			}
			return null;
		}
		_function_decl() {
			if (!this._match(p.keywords.fn)) return null;
			const t = this._currentLine,
				e = this._consume(p.tokens.ident, "Expected function name.").toString();
			this._consume(
				p.tokens.paren_left,
				"Expected '(' for function arguments.",
			);
			const r = [];
			if (!this._check(p.tokens.paren_right))
				do {
					if (this._check(p.tokens.paren_right)) break;
					const T = this._attribute(),
						I = this._consume(
							p.tokens.ident,
							"Expected argument name.",
						).toString();
					this._consume(p.tokens.colon, "Expected ':' for argument type.");
					const B = this._attribute(),
						z = this._type_decl();
					z != null && ((z.attributes = B), r.push(new ss(I, z, T)));
				} while (this._match(p.tokens.comma));
			this._consume(
				p.tokens.paren_right,
				"Expected ')' after function arguments.",
			);
			let h = null;
			if (this._match(p.tokens.arrow)) {
				const T = this._attribute();
				(h = this._type_decl()), h != null && (h.attributes = T);
			}
			const g = this._compound_statement(),
				k = this._currentLine;
			return new Ze(e, r, h, g, t, k);
		}
		_compound_statement() {
			const t = [];
			for (
				this._consume(p.tokens.brace_left, "Expected '{' for block.");
				!this._check(p.tokens.brace_right);

			) {
				const e = this._statement();
				e !== null && t.push(e);
			}
			return this._consume(p.tokens.brace_right, "Expected '}' for block."), t;
		}
		_statement() {
			for (; this._match(p.tokens.semicolon) && !this._isAtEnd(); );
			if (
				(this._check(p.tokens.attr) && this._attribute(),
				this._check(p.keywords.if))
			)
				return this._if_statement();
			if (this._check(p.keywords.switch)) return this._switch_statement();
			if (this._check(p.keywords.loop)) return this._loop_statement();
			if (this._check(p.keywords.for)) return this._for_statement();
			if (this._check(p.keywords.while)) return this._while_statement();
			if (this._check(p.keywords.continuing))
				return this._continuing_statement();
			if (this._check(p.keywords.static_assert))
				return this._static_assert_statement();
			if (this._check(p.tokens.brace_left)) return this._compound_statement();
			let t = null;
			return (
				this._check(p.keywords.return)
					? (t = this._return_statement())
					: this._check([p.keywords.var, p.keywords.let, p.keywords.const])
					? (t = this._variable_statement())
					: this._match(p.keywords.discard)
					? (t = new Wr())
					: this._match(p.keywords.break)
					? (t = new jr())
					: this._match(p.keywords.continue)
					? (t = new Zr())
					: (t =
							this._increment_decrement_statement() ||
							this._func_call_statement() ||
							this._assignment_statement()),
				t != null &&
					this._consume(p.tokens.semicolon, "Expected ';' after statement."),
				t
			);
		}
		_static_assert_statement() {
			if (!this._match(p.keywords.static_assert)) return null;
			const t = this._optional_paren_expression();
			return new Br(t);
		}
		_while_statement() {
			if (!this._match(p.keywords.while)) return null;
			const t = this._optional_paren_expression();
			this._check(p.tokens.attr) && this._attribute();
			const e = this._compound_statement();
			return new Vr(t, e);
		}
		_continuing_statement() {
			if (!this._match(p.keywords.continuing)) return null;
			const t = this._compound_statement();
			return new Cr(t);
		}
		_for_statement() {
			if (!this._match(p.keywords.for)) return null;
			this._consume(p.tokens.paren_left, "Expected '('.");
			const t = this._check(p.tokens.semicolon) ? null : this._for_init();
			this._consume(p.tokens.semicolon, "Expected ';'.");
			const e = this._check(p.tokens.semicolon)
				? null
				: this._short_circuit_or_expression();
			this._consume(p.tokens.semicolon, "Expected ';'.");
			const r = this._check(p.tokens.paren_right)
				? null
				: this._for_increment();
			this._consume(p.tokens.paren_right, "Expected ')'."),
				this._check(p.tokens.attr) && this._attribute();
			const h = this._compound_statement();
			return new qr(t, e, r, h);
		}
		_for_init() {
			return (
				this._variable_statement() ||
				this._func_call_statement() ||
				this._assignment_statement()
			);
		}
		_for_increment() {
			return (
				this._func_call_statement() ||
				this._increment_decrement_statement() ||
				this._assignment_statement()
			);
		}
		_variable_statement() {
			if (this._check(p.keywords.var)) {
				const t = this._variable_decl();
				if (t === null)
					throw this._error(this._peek(), "Variable declaration expected.");
				let e = null;
				return (
					this._match(p.tokens.equal) &&
						(e = this._short_circuit_or_expression()),
					new se(t.name, t.type, t.storage, t.access, e)
				);
			}
			if (this._match(p.keywords.let)) {
				const t = this._consume(
					p.tokens.ident,
					"Expected name for let.",
				).toString();
				let e = null;
				if (this._match(p.tokens.colon)) {
					const h = this._attribute();
					(e = this._type_decl()), e != null && (e.attributes = h);
				}
				this._consume(p.tokens.equal, "Expected '=' for let.");
				const r = this._short_circuit_or_expression();
				return new Ke(t, e, null, null, r);
			}
			if (this._match(p.keywords.const)) {
				const t = this._consume(
					p.tokens.ident,
					"Expected name for const.",
				).toString();
				let e = null;
				if (this._match(p.tokens.colon)) {
					const h = this._attribute();
					(e = this._type_decl()), e != null && (e.attributes = h);
				}
				this._consume(p.tokens.equal, "Expected '=' for const.");
				const r = this._short_circuit_or_expression();
				return new Gn(t, e, null, null, r);
			}
			return null;
		}
		_increment_decrement_statement() {
			const t = this._current,
				e = this._unary_expression();
			if (e == null) return null;
			if (!this._check(p.increment_operators)) return (this._current = t), null;
			const r = this._consume(
				p.increment_operators,
				"Expected increment operator",
			);
			return new Nr(
				r.type === p.tokens.plus_plus ? he.increment : he.decrement,
				e,
			);
		}
		_assignment_statement() {
			let t = null;
			if (this._check(p.tokens.brace_right)) return null;
			let e = this._match(p.tokens.underscore);
			if ((e || (t = this._unary_expression()), !e && t == null)) return null;
			const r = this._consume(
					p.assignment_operators,
					"Expected assignment operator.",
				),
				h = this._short_circuit_or_expression();
			return new Dr(_e.parse(r.lexeme), t, h);
		}
		_func_call_statement() {
			if (!this._check(p.tokens.ident)) return null;
			const t = this._current,
				e = this._consume(p.tokens.ident, "Expected function name."),
				r = this._argument_expression_list();
			return r === null ? ((this._current = t), null) : new In(e.lexeme, r);
		}
		_loop_statement() {
			if (!this._match(p.keywords.loop)) return null;
			this._check(p.tokens.attr) && this._attribute(),
				this._consume(p.tokens.brace_left, "Expected '{' for loop.");
			const t = [];
			let e = this._statement();
			for (; e !== null; ) {
				if (Array.isArray(e)) for (let h of e) t.push(h);
				else t.push(e);
				e = this._statement();
			}
			let r = null;
			return (
				this._match(p.keywords.continuing) && (r = this._compound_statement()),
				this._consume(p.tokens.brace_right, "Expected '}' for loop."),
				new Fr(t, r)
			);
		}
		_switch_statement() {
			if (!this._match(p.keywords.switch)) return null;
			const t = this._optional_paren_expression();
			this._check(p.tokens.attr) && this._attribute(),
				this._consume(p.tokens.brace_left, "Expected '{' for switch.");
			const e = this._switch_body();
			if (e == null || e.length == 0)
				throw this._error(this._previous(), "Expected 'case' or 'default'.");
			return (
				this._consume(p.tokens.brace_right, "Expected '}' for switch."),
				new Lr(t, e)
			);
		}
		_switch_body() {
			const t = [];
			if (this._match(p.keywords.case)) {
				const e = this._case_selectors();
				this._match(p.tokens.colon),
					this._check(p.tokens.attr) && this._attribute(),
					this._consume(p.tokens.brace_left, "Exected '{' for switch case.");
				const r = this._case_body();
				this._consume(p.tokens.brace_right, "Exected '}' for switch case."),
					t.push(new ns(e, r));
			}
			if (this._match(p.keywords.default)) {
				this._match(p.tokens.colon),
					this._check(p.tokens.attr) && this._attribute(),
					this._consume(p.tokens.brace_left, "Exected '{' for switch default.");
				const e = this._case_body();
				this._consume(p.tokens.brace_right, "Exected '}' for switch default."),
					t.push(new rs(e));
			}
			if (this._check([p.keywords.default, p.keywords.case])) {
				const e = this._switch_body();
				t.push(e[0]);
			}
			return t;
		}
		_case_selectors() {
			const t = [this._shift_expression()];
			for (; this._match(p.tokens.comma); ) t.push(this._shift_expression());
			return t;
		}
		_case_body() {
			if (this._match(p.keywords.fallthrough))
				return this._consume(p.tokens.semicolon, "Expected ';'"), [];
			let t = this._statement();
			if (t == null) return [];
			t instanceof Array || (t = [t]);
			const e = this._case_body();
			return e.length == 0 ? t : [...t, e[0]];
		}
		_if_statement() {
			if (!this._match(p.keywords.if)) return null;
			const t = this._optional_paren_expression();
			this._check(p.tokens.attr) && this._attribute();
			const e = this._compound_statement();
			let r = [];
			this._match_elseif() &&
				(this._check(p.tokens.attr) && this._attribute(),
				(r = this._elseif_statement(r)));
			let h = null;
			return (
				this._match(p.keywords.else) &&
					(this._check(p.tokens.attr) && this._attribute(),
					(h = this._compound_statement())),
				new Or(t, e, r, h)
			);
		}
		_match_elseif() {
			return this._tokens[this._current].type === p.keywords.else &&
				this._tokens[this._current + 1].type === p.keywords.if
				? (this._advance(), this._advance(), !0)
				: !1;
		}
		_elseif_statement(t = []) {
			const e = this._optional_paren_expression(),
				r = this._compound_statement();
			return (
				t.push(new is(e, r)),
				this._match_elseif() &&
					(this._check(p.tokens.attr) && this._attribute(),
					this._elseif_statement(t)),
				t
			);
		}
		_return_statement() {
			if (!this._match(p.keywords.return)) return null;
			const t = this._short_circuit_or_expression();
			return new Hr(t);
		}
		_short_circuit_or_expression() {
			let t = this._short_circuit_and_expr();
			for (; this._match(p.tokens.or_or); )
				t = new Zt(
					this._previous().toString(),
					t,
					this._short_circuit_and_expr(),
				);
			return t;
		}
		_short_circuit_and_expr() {
			let t = this._inclusive_or_expression();
			for (; this._match(p.tokens.and_and); )
				t = new Zt(
					this._previous().toString(),
					t,
					this._inclusive_or_expression(),
				);
			return t;
		}
		_inclusive_or_expression() {
			let t = this._exclusive_or_expression();
			for (; this._match(p.tokens.or); )
				t = new Zt(
					this._previous().toString(),
					t,
					this._exclusive_or_expression(),
				);
			return t;
		}
		_exclusive_or_expression() {
			let t = this._and_expression();
			for (; this._match(p.tokens.xor); )
				t = new Zt(this._previous().toString(), t, this._and_expression());
			return t;
		}
		_and_expression() {
			let t = this._equality_expression();
			for (; this._match(p.tokens.and); )
				t = new Zt(this._previous().toString(), t, this._equality_expression());
			return t;
		}
		_equality_expression() {
			const t = this._relational_expression();
			return this._match([p.tokens.equal_equal, p.tokens.not_equal])
				? new Zt(this._previous().toString(), t, this._relational_expression())
				: t;
		}
		_relational_expression() {
			let t = this._shift_expression();
			for (
				;
				this._match([
					p.tokens.less_than,
					p.tokens.greater_than,
					p.tokens.less_than_equal,
					p.tokens.greater_than_equal,
				]);

			)
				t = new Zt(this._previous().toString(), t, this._shift_expression());
			return t;
		}
		_shift_expression() {
			let t = this._additive_expression();
			for (; this._match([p.tokens.shift_left, p.tokens.shift_right]); )
				t = new Zt(this._previous().toString(), t, this._additive_expression());
			return t;
		}
		_additive_expression() {
			let t = this._multiplicative_expression();
			for (; this._match([p.tokens.plus, p.tokens.minus]); )
				t = new Zt(
					this._previous().toString(),
					t,
					this._multiplicative_expression(),
				);
			return t;
		}
		_multiplicative_expression() {
			let t = this._unary_expression();
			for (
				;
				this._match([p.tokens.star, p.tokens.forward_slash, p.tokens.modulo]);

			)
				t = new Zt(this._previous().toString(), t, this._unary_expression());
			return t;
		}
		_unary_expression() {
			return this._match([
				p.tokens.minus,
				p.tokens.bang,
				p.tokens.tilde,
				p.tokens.star,
				p.tokens.and,
			])
				? new es(this._previous().toString(), this._unary_expression())
				: this._singular_expression();
		}
		_singular_expression() {
			const t = this._primary_expression(),
				e = this._postfix_expression();
			return e && (t.postfix = e), t;
		}
		_postfix_expression() {
			if (this._match(p.tokens.bracket_left)) {
				const t = this._short_circuit_or_expression();
				this._consume(p.tokens.bracket_right, "Expected ']'.");
				const e = new ts(t),
					r = this._postfix_expression();
				return r && (e.postfix = r), e;
			}
			if (this._match(p.tokens.period)) {
				const t = this._consume(p.tokens.ident, "Expected member name."),
					e = this._postfix_expression(),
					r = new Vn(t.lexeme);
				return e && (r.postfix = e), r;
			}
			return null;
		}
		_getStruct(t) {
			return this._context.aliases.has(t)
				? this._context.aliases.get(t).type
				: this._context.structs.has(t)
				? this._context.structs.get(t)
				: null;
		}
		_primary_expression() {
			if (this._match(p.tokens.ident)) {
				const r = this._previous().toString();
				if (this._check(p.tokens.paren_left)) {
					const h = this._argument_expression_list(),
						g = this._getStruct(r);
					return g != null ? new le(g, h) : new Cn(r, h);
				}
				if (this._context.constants.has(r)) {
					const h = this._context.constants.get(r);
					return new qn(r, h.value);
				}
				return new Je(r);
			}
			if (this._match(p.const_literal))
				return new Nn(parseFloat(this._previous().toString()));
			if (this._check(p.tokens.paren_left)) return this._paren_expression();
			if (this._match(p.keywords.bitcast)) {
				this._consume(p.tokens.less_than, "Expected '<'.");
				const r = this._type_decl();
				this._consume(p.tokens.greater_than, "Expected '>'.");
				const h = this._paren_expression();
				return new Jr(r, h);
			}
			const t = this._type_decl(),
				e = this._argument_expression_list();
			return new Qr(t, e);
		}
		_argument_expression_list() {
			if (!this._match(p.tokens.paren_left)) return null;
			const t = [];
			do {
				if (this._check(p.tokens.paren_right)) break;
				const e = this._short_circuit_or_expression();
				t.push(e);
			} while (this._match(p.tokens.comma));
			return (
				this._consume(p.tokens.paren_right, "Expected ')' for agument list"), t
			);
		}
		_optional_paren_expression() {
			this._match(p.tokens.paren_left);
			const t = this._short_circuit_or_expression();
			return this._match(p.tokens.paren_right), new Dn([t]);
		}
		_paren_expression() {
			this._consume(p.tokens.paren_left, "Expected '('.");
			const t = this._short_circuit_or_expression();
			return this._consume(p.tokens.paren_right, "Expected ')'."), new Dn([t]);
		}
		_struct_decl() {
			if (!this._match(p.keywords.struct)) return null;
			const t = this._currentLine,
				e = this._consume(
					p.tokens.ident,
					"Expected name for struct.",
				).toString();
			this._consume(p.tokens.brace_left, "Expected '{' for struct body.");
			const r = [];
			for (; !this._check(p.tokens.brace_right); ) {
				const k = this._attribute(),
					T = this._consume(
						p.tokens.ident,
						"Expected variable name.",
					).toString();
				this._consume(p.tokens.colon, "Expected ':' for struct member type.");
				const I = this._attribute(),
					B = this._type_decl();
				B != null && (B.attributes = I),
					this._check(p.tokens.brace_right)
						? this._match(p.tokens.comma)
						: this._consume(p.tokens.comma, "Expected ',' for struct member."),
					r.push(new as(T, B, k));
			}
			this._consume(p.tokens.brace_right, "Expected '}' after struct body.");
			const h = this._currentLine,
				g = new ae(e, r, t, h);
			return this._context.structs.set(e, g), g;
		}
		_global_variable_decl() {
			const t = this._variable_decl();
			return (
				t &&
					this._match(p.tokens.equal) &&
					(t.value = this._const_expression()),
				t
			);
		}
		_override_variable_decl() {
			const t = this._override_decl();
			return (
				t &&
					this._match(p.tokens.equal) &&
					(t.value = this._const_expression()),
				t
			);
		}
		_global_const_decl() {
			if (!this._match(p.keywords.const)) return null;
			const t = this._consume(p.tokens.ident, "Expected variable name");
			let e = null;
			if (this._match(p.tokens.colon)) {
				const g = this._attribute();
				(e = this._type_decl()), e != null && (e.attributes = g);
			}
			let r = null;
			if (this._match(p.tokens.equal)) {
				const g = this._short_circuit_or_expression();
				if (g instanceof le) r = g;
				else if (g instanceof qn && g.initializer instanceof le)
					r = g.initializer;
				else
					try {
						const k = g.evaluate(this._context);
						r = new Nn(k);
					} catch {
						r = g;
					}
			}
			const h = new Gn(t.toString(), e, "", "", r);
			return this._context.constants.set(h.name, h), h;
		}
		_global_let_decl() {
			if (!this._match(p.keywords.let)) return null;
			const t = this._consume(p.tokens.ident, "Expected variable name");
			let e = null;
			if (this._match(p.tokens.colon)) {
				const h = this._attribute();
				(e = this._type_decl()), e != null && (e.attributes = h);
			}
			let r = null;
			return (
				this._match(p.tokens.equal) && (r = this._const_expression()),
				new Ke(t.toString(), e, "", "", r)
			);
		}
		_const_expression() {
			if (this._match(p.const_literal))
				return new Vn(this._previous().toString());
			const t = this._type_decl();
			this._consume(p.tokens.paren_left, "Expected '('.");
			let e = [];
			for (
				;
				!this._check(p.tokens.paren_right) &&
				(e.push(this._const_expression()), !!this._check(p.tokens.comma));

			)
				this._advance();
			return this._consume(p.tokens.paren_right, "Expected ')'."), new le(t, e);
		}
		_variable_decl() {
			if (!this._match(p.keywords.var)) return null;
			let t = "",
				e = "";
			this._match(p.tokens.less_than) &&
				((t = this._consume(
					p.storage_class,
					"Expected storage_class.",
				).toString()),
				this._match(p.tokens.comma) &&
					(e = this._consume(
						p.access_mode,
						"Expected access_mode.",
					).toString()),
				this._consume(p.tokens.greater_than, "Expected '>'."));
			const r = this._consume(p.tokens.ident, "Expected variable name");
			let h = null;
			if (this._match(p.tokens.colon)) {
				const g = this._attribute();
				(h = this._type_decl()), h != null && (h.attributes = g);
			}
			return new se(r.toString(), h, t, e, null);
		}
		_override_decl() {
			if (!this._match(p.keywords.override)) return null;
			const t = this._consume(p.tokens.ident, "Expected variable name");
			let e = null;
			if (this._match(p.tokens.colon)) {
				const r = this._attribute();
				(e = this._type_decl()), e != null && (e.attributes = r);
			}
			return new Un(t.toString(), e, null);
		}
		_diagnostic() {
			this._consume(p.tokens.paren_left, "Expected '('");
			const t = this._consume(
				p.tokens.ident,
				"Expected severity control name.",
			);
			this._consume(p.tokens.comma, "Expected ','");
			const e = this._consume(p.tokens.ident, "Expected diagnostic rule name.");
			return (
				this._consume(p.tokens.paren_right, "Expected ')'"),
				new Yr(t.toString(), e.toString())
			);
		}
		_enable_directive() {
			const t = this._consume(p.tokens.ident, "identity expected.");
			return new $r(t.toString());
		}
		_requires_directive() {
			const t = [
				this._consume(p.tokens.ident, "identity expected.").toString(),
			];
			for (; this._match(p.tokens.comma); ) {
				const e = this._consume(p.tokens.ident, "identity expected.");
				t.push(e.toString());
			}
			return new Xr(t);
		}
		_type_alias() {
			const t = this._consume(p.tokens.ident, "identity expected.");
			this._consume(p.tokens.equal, "Expected '=' for type alias.");
			let e = this._type_decl();
			if (e === null)
				throw this._error(this._peek(), "Expected Type for Alias.");
			this._context.aliases.has(e.name) &&
				(e = this._context.aliases.get(e.name).type);
			const r = new Rn(t.toString(), e);
			return this._context.aliases.set(r.name, r), r;
		}
		_type_decl() {
			if (
				this._check([
					p.tokens.ident,
					...p.texel_format,
					p.keywords.bool,
					p.keywords.f32,
					p.keywords.i32,
					p.keywords.u32,
				])
			) {
				const r = this._advance(),
					h = r.toString();
				return this._context.structs.has(h)
					? this._context.structs.get(h)
					: this._context.aliases.has(h)
					? this._context.aliases.get(h).type
					: new ie(r.toString());
			}
			let t = this._texture_sampler_types();
			if (t) return t;
			if (this._check(p.template_types)) {
				let r = this._advance().toString(),
					h = null,
					g = null;
				return (
					this._match(p.tokens.less_than) &&
						((h = this._type_decl()),
						(g = null),
						this._match(p.tokens.comma) &&
							(g = this._consume(
								p.access_mode,
								"Expected access_mode for pointer",
							).toString()),
						this._consume(p.tokens.greater_than, "Expected '>' for type.")),
					new zn(r, h, g)
				);
			}
			if (this._match(p.keywords.ptr)) {
				let r = this._previous().toString();
				this._consume(p.tokens.less_than, "Expected '<' for pointer.");
				const h = this._consume(
					p.storage_class,
					"Expected storage_class for pointer",
				);
				this._consume(p.tokens.comma, "Expected ',' for pointer.");
				const g = this._type_decl();
				let k = null;
				return (
					this._match(p.tokens.comma) &&
						(k = this._consume(
							p.access_mode,
							"Expected access_mode for pointer",
						).toString()),
					this._consume(p.tokens.greater_than, "Expected '>' for pointer."),
					new Kr(r, h.toString(), g, k)
				);
			}
			const e = this._attribute();
			if (this._match(p.keywords.array)) {
				let r = null,
					h = -1;
				const g = this._previous();
				let k = null;
				if (this._match(p.tokens.less_than)) {
					(r = this._type_decl()),
						this._context.aliases.has(r.name) &&
							(r = this._context.aliases.get(r.name).type);
					let I = "";
					if (this._match(p.tokens.comma)) {
						k = this._shift_expression();
						try {
							(I = k.evaluate(this._context).toString()), (k = null);
						} catch {
							I = "1";
						}
					}
					this._consume(p.tokens.greater_than, "Expected '>' for array."),
						(h = I ? parseInt(I) : 0);
				}
				const T = new Bn(g.toString(), e, r, h);
				return (
					k && this._deferArrayCountEval.push({ arrayType: T, countNode: k }), T
				);
			}
			return null;
		}
		_texture_sampler_types() {
			if (this._match(p.sampler_type))
				return new me(this._previous().toString(), null, null);
			if (this._match(p.depth_texture_type))
				return new me(this._previous().toString(), null, null);
			if (
				this._match(p.sampled_texture_type) ||
				this._match(p.multisampled_texture_type)
			) {
				const t = this._previous();
				this._consume(p.tokens.less_than, "Expected '<' for sampler type.");
				const e = this._type_decl();
				return (
					this._consume(
						p.tokens.greater_than,
						"Expected '>' for sampler type.",
					),
					new me(t.toString(), e, null)
				);
			}
			if (this._match(p.storage_texture_type)) {
				const t = this._previous();
				this._consume(p.tokens.less_than, "Expected '<' for sampler type.");
				const e = this._consume(
					p.texel_format,
					"Invalid texel format.",
				).toString();
				this._consume(p.tokens.comma, "Expected ',' after texel format.");
				const r = this._consume(
					p.access_mode,
					"Expected access mode for storage texture type.",
				).toString();
				return (
					this._consume(
						p.tokens.greater_than,
						"Expected '>' for sampler type.",
					),
					new me(t.toString(), e, r)
				);
			}
			return null;
		}
		_attribute() {
			let t = [];
			for (; this._match(p.tokens.attr); ) {
				const e = this._consume(p.attribute_name, "Expected attribute name"),
					r = new On(e.toString(), null);
				if (this._match(p.tokens.paren_left)) {
					if (
						((r.value = this._consume(
							p.literal_or_ident,
							"Expected attribute value",
						).toString()),
						this._check(p.tokens.comma))
					) {
						this._advance();
						do {
							const h = this._consume(
								p.literal_or_ident,
								"Expected attribute value",
							).toString();
							r.value instanceof Array || (r.value = [r.value]),
								r.value.push(h);
						} while (this._match(p.tokens.comma));
					}
					this._consume(p.tokens.paren_right, "Expected ')'");
				}
				t.push(r);
			}
			for (; this._match(p.tokens.attr_left); ) {
				if (!this._check(p.tokens.attr_right))
					do {
						const e = this._consume(
								p.attribute_name,
								"Expected attribute name",
							),
							r = new On(e.toString(), null);
						if (this._match(p.tokens.paren_left)) {
							if (
								((r.value = [
									this._consume(
										p.literal_or_ident,
										"Expected attribute value",
									).toString(),
								]),
								this._check(p.tokens.comma))
							) {
								this._advance();
								do {
									const h = this._consume(
										p.literal_or_ident,
										"Expected attribute value",
									).toString();
									r.value.push(h);
								} while (this._match(p.tokens.comma));
							}
							this._consume(p.tokens.paren_right, "Expected ')'");
						}
						t.push(r);
					} while (this._match(p.tokens.comma));
				this._consume(
					p.tokens.attr_right,
					"Expected ']]' after attribute declarations",
				);
			}
			return t.length == 0 ? null : t;
		}
	}
	class de {
		constructor(t, e) {
			(this.name = t), (this.attributes = e), (this.size = 0);
		}
		get isArray() {
			return !1;
		}
		get isStruct() {
			return !1;
		}
		get isTemplate() {
			return !1;
		}
	}
	class $n {
		constructor(t, e, r) {
			(this.name = t),
				(this.type = e),
				(this.attributes = r),
				(this.offset = 0),
				(this.size = 0);
		}
		get isArray() {
			return this.type.isArray;
		}
		get isStruct() {
			return this.type.isStruct;
		}
		get isTemplate() {
			return this.type.isTemplate;
		}
		get align() {
			return this.type.isStruct ? this.type.align : 0;
		}
		get members() {
			return this.type.isStruct ? this.type.members : null;
		}
		get format() {
			return this.type.isArray
				? this.type.format
				: this.type.isTemplate
				? this.type.format
				: null;
		}
		get count() {
			return this.type.isArray ? this.type.count : 0;
		}
		get stride() {
			return this.type.isArray ? this.type.stride : this.size;
		}
	}
	class Me extends de {
		constructor(t, e) {
			super(t, e),
				(this.members = []),
				(this.align = 0),
				(this.startLine = -1),
				(this.endLine = -1),
				(this.inUse = !1);
		}
		get isStruct() {
			return !0;
		}
	}
	class Qe extends de {
		constructor(t, e) {
			super(t, e), (this.count = 0), (this.stride = 0);
		}
		get isArray() {
			return !0;
		}
	}
	class Xn extends de {
		constructor(t, e, r, h) {
			super(t, r), (this.format = e), (this.access = h);
		}
		get isTemplate() {
			return !0;
		}
	}
	var xt;
	(function (i) {
		(i[(i.Uniform = 0)] = "Uniform"),
			(i[(i.Storage = 1)] = "Storage"),
			(i[(i.Texture = 2)] = "Texture"),
			(i[(i.Sampler = 3)] = "Sampler"),
			(i[(i.StorageTexture = 4)] = "StorageTexture");
	})(xt || (xt = {}));
	class Se {
		constructor(t, e, r, h, g, k, T) {
			(this.name = t),
				(this.type = e),
				(this.group = r),
				(this.binding = h),
				(this.attributes = g),
				(this.resourceType = k),
				(this.access = T);
		}
		get isArray() {
			return this.type.isArray;
		}
		get isStruct() {
			return this.type.isStruct;
		}
		get isTemplate() {
			return this.type.isTemplate;
		}
		get size() {
			return this.type.size;
		}
		get align() {
			return this.type.isStruct ? this.type.align : 0;
		}
		get members() {
			return this.type.isStruct ? this.type.members : null;
		}
		get format() {
			return this.type.isArray
				? this.type.format
				: this.type.isTemplate
				? this.type.format
				: null;
		}
		get count() {
			return this.type.isArray ? this.type.count : 0;
		}
		get stride() {
			return this.type.isArray ? this.type.stride : this.size;
		}
	}
	class cs {
		constructor(t, e) {
			(this.name = t), (this.type = e);
		}
	}
	class Ee {
		constructor(t, e) {
			(this.align = t), (this.size = e);
		}
	}
	class hs {
		constructor(t, e, r, h) {
			(this.name = t),
				(this.type = e),
				(this.locationType = r),
				(this.location = h),
				(this.interpolation = null);
		}
	}
	class Yn {
		constructor(t, e, r, h) {
			(this.name = t),
				(this.type = e),
				(this.locationType = r),
				(this.location = h);
		}
	}
	class ls {
		constructor(t, e = null) {
			(this.stage = null),
				(this.inputs = []),
				(this.outputs = []),
				(this.resources = []),
				(this.startLine = -1),
				(this.endLine = -1),
				(this.inUse = !1),
				(this.calls = new Set()),
				(this.name = t),
				(this.stage = e);
		}
	}
	class ds {
		constructor() {
			(this.vertex = []), (this.fragment = []), (this.compute = []);
		}
	}
	class ps {
		constructor(t, e, r, h) {
			(this.name = t), (this.type = e), (this.attributes = r), (this.id = h);
		}
	}
	class fs {
		constructor(t) {
			(this.resources = null),
				(this.inUse = !1),
				(this.info = null),
				(this.node = t);
		}
	}
	class Qt {
		constructor(t) {
			(this.uniforms = []),
				(this.storage = []),
				(this.textures = []),
				(this.samplers = []),
				(this.aliases = []),
				(this.overrides = []),
				(this.structs = []),
				(this.entry = new ds()),
				(this.functions = []),
				(this._types = new Map()),
				(this._functions = new Map()),
				t && this.update(t);
		}
		_isStorageTexture(t) {
			return (
				t.name == "texture_storage_1d" ||
				t.name == "texture_storage_2d" ||
				t.name == "texture_storage_2d_array" ||
				t.name == "texture_storage_3d"
			);
		}
		update(t) {
			const e = new us().parse(t);
			for (const r of e)
				r instanceof Ze && this._functions.set(r.name, new fs(r));
			for (const r of e)
				if (r instanceof ae) {
					const h = this._getTypeInfo(r, null);
					h instanceof Me && this.structs.push(h);
				}
			for (const r of e) {
				if (r instanceof Rn) {
					this.aliases.push(this._getAliasInfo(r));
					continue;
				}
				if (r instanceof Un) {
					const h = r,
						g = this._getAttributeNum(h.attributes, "id", 0),
						k = h.type != null ? this._getTypeInfo(h.type, h.attributes) : null;
					this.overrides.push(new ps(h.name, k, h.attributes, g));
					continue;
				}
				if (this._isUniformVar(r)) {
					const h = r,
						g = this._getAttributeNum(h.attributes, "group", 0),
						k = this._getAttributeNum(h.attributes, "binding", 0),
						T = this._getTypeInfo(h.type, h.attributes),
						I = new Se(h.name, T, g, k, h.attributes, xt.Uniform, h.access);
					this.uniforms.push(I);
					continue;
				}
				if (this._isStorageVar(r)) {
					const h = r,
						g = this._getAttributeNum(h.attributes, "group", 0),
						k = this._getAttributeNum(h.attributes, "binding", 0),
						T = this._getTypeInfo(h.type, h.attributes),
						I = this._isStorageTexture(T),
						B = new Se(
							h.name,
							T,
							g,
							k,
							h.attributes,
							I ? xt.StorageTexture : xt.Storage,
							h.access,
						);
					this.storage.push(B);
					continue;
				}
				if (this._isTextureVar(r)) {
					const h = r,
						g = this._getAttributeNum(h.attributes, "group", 0),
						k = this._getAttributeNum(h.attributes, "binding", 0),
						T = this._getTypeInfo(h.type, h.attributes),
						I = this._isStorageTexture(T),
						B = new Se(
							h.name,
							T,
							g,
							k,
							h.attributes,
							I ? xt.StorageTexture : xt.Texture,
							h.access,
						);
					I ? this.storage.push(B) : this.textures.push(B);
					continue;
				}
				if (this._isSamplerVar(r)) {
					const h = r,
						g = this._getAttributeNum(h.attributes, "group", 0),
						k = this._getAttributeNum(h.attributes, "binding", 0),
						T = this._getTypeInfo(h.type, h.attributes),
						I = new Se(h.name, T, g, k, h.attributes, xt.Sampler, h.access);
					this.samplers.push(I);
					continue;
				}
				if (r instanceof Ze) {
					const h = this._getAttribute(r, "vertex"),
						g = this._getAttribute(r, "fragment"),
						k = this._getAttribute(r, "compute"),
						T = h || g || k,
						I = new ls(r.name, T == null ? void 0 : T.name);
					(I.startLine = r.startLine),
						(I.endLine = r.endLine),
						this.functions.push(I),
						(this._functions.get(r.name).info = I),
						T &&
							((this._functions.get(r.name).inUse = !0),
							(I.inUse = !0),
							(I.resources = this._findResources(r, !!T)),
							(I.inputs = this._getInputs(r.args)),
							(I.outputs = this._getOutputs(r.returnType)),
							this.entry[T.name].push(I));
					continue;
				}
			}
			for (const r of this._functions.values())
				r.info &&
					((r.info.inUse = r.inUse), this._addCalls(r.node, r.info.calls));
			for (const r of this.uniforms) this._markStructsInUse(r.type);
			for (const r of this.storage) this._markStructsInUse(r.type);
		}
		_markStructsInUse(t) {
			if (t.isStruct) {
				t.inUse = !0;
				for (const e of t.members) this._markStructsInUse(e.type);
			} else if (t.isArray) this._markStructsInUse(t.format);
			else if (t.isTemplate) this._markStructsInUse(t.format);
			else {
				const e = this._getAlias(t.name);
				e && this._markStructsInUse(e);
			}
		}
		_addCalls(t, e) {
			var r;
			for (const h of t.calls) {
				const g =
					(r = this._functions.get(h.name)) === null || r === void 0
						? void 0
						: r.info;
				g && e.add(g);
			}
		}
		findResource(t, e) {
			for (const r of this.uniforms)
				if (r.group == t && r.binding == e) return r;
			for (const r of this.storage)
				if (r.group == t && r.binding == e) return r;
			for (const r of this.textures)
				if (r.group == t && r.binding == e) return r;
			for (const r of this.samplers)
				if (r.group == t && r.binding == e) return r;
			return null;
		}
		_findResource(t) {
			for (const e of this.uniforms) if (e.name == t) return e;
			for (const e of this.storage) if (e.name == t) return e;
			for (const e of this.textures) if (e.name == t) return e;
			for (const e of this.samplers) if (e.name == t) return e;
			return null;
		}
		_markStructsFromAST(t) {
			const e = this._getTypeInfo(t, null);
			this._markStructsInUse(e);
		}
		_findResources(t, e) {
			const r = [],
				h = this,
				g = [];
			return (
				t.search((k) => {
					if (k instanceof ke) g.push({});
					else if (k instanceof be) g.pop();
					else if (k instanceof se) {
						const T = k;
						e && T.type !== null && this._markStructsFromAST(T.type),
							g.length > 0 && (g[g.length - 1][T.name] = T);
					} else if (k instanceof le) {
						const T = k;
						e && T.type !== null && this._markStructsFromAST(T.type);
					} else if (k instanceof Ke) {
						const T = k;
						e && T.type !== null && this._markStructsFromAST(T.type),
							g.length > 0 && (g[g.length - 1][T.name] = T);
					} else if (k instanceof Je) {
						const T = k;
						if (g.length > 0 && g[g.length - 1][T.name]) return;
						const I = h._findResource(T.name);
						I && r.push(I);
					} else if (k instanceof Cn) {
						const T = k,
							I = h._functions.get(T.name);
						I &&
							(e && (I.inUse = !0),
							t.calls.add(I.node),
							I.resources === null &&
								(I.resources = h._findResources(I.node, e)),
							r.push(...I.resources));
					} else if (k instanceof In) {
						const T = k,
							I = h._functions.get(T.name);
						I &&
							(e && (I.inUse = !0),
							t.calls.add(I.node),
							I.resources === null &&
								(I.resources = h._findResources(I.node, e)),
							r.push(...I.resources));
					}
				}),
				[...new Map(r.map((k) => [k.name, k])).values()]
			);
		}
		getBindGroups() {
			const t = [];
			function e(r, h) {
				r >= t.length && (t.length = r + 1),
					t[r] === void 0 && (t[r] = []),
					h >= t[r].length && (t[r].length = h + 1);
			}
			for (const r of this.uniforms) {
				e(r.group, r.binding);
				const h = t[r.group];
				h[r.binding] = r;
			}
			for (const r of this.storage) {
				e(r.group, r.binding);
				const h = t[r.group];
				h[r.binding] = r;
			}
			for (const r of this.textures) {
				e(r.group, r.binding);
				const h = t[r.group];
				h[r.binding] = r;
			}
			for (const r of this.samplers) {
				e(r.group, r.binding);
				const h = t[r.group];
				h[r.binding] = r;
			}
			return t;
		}
		_getOutputs(t, e = void 0) {
			if ((e === void 0 && (e = []), t instanceof ae))
				this._getStructOutputs(t, e);
			else {
				const r = this._getOutputInfo(t);
				r !== null && e.push(r);
			}
			return e;
		}
		_getStructOutputs(t, e) {
			for (const r of t.members)
				if (r.type instanceof ae) this._getStructOutputs(r.type, e);
				else {
					const h =
						this._getAttribute(r, "location") ||
						this._getAttribute(r, "builtin");
					if (h !== null) {
						const g = this._getTypeInfo(r.type, r.type.attributes),
							k = this._parseInt(h.value),
							T = new Yn(r.name, g, h.name, k);
						e.push(T);
					}
				}
		}
		_getOutputInfo(t) {
			const e =
				this._getAttribute(t, "location") || this._getAttribute(t, "builtin");
			if (e !== null) {
				const r = this._getTypeInfo(t, t.attributes),
					h = this._parseInt(e.value);
				return new Yn("", r, e.name, h);
			}
			return null;
		}
		_getInputs(t, e = void 0) {
			e === void 0 && (e = []);
			for (const r of t)
				if (r.type instanceof ae) this._getStructInputs(r.type, e);
				else {
					const h = this._getInputInfo(r);
					h !== null && e.push(h);
				}
			return e;
		}
		_getStructInputs(t, e) {
			for (const r of t.members)
				if (r.type instanceof ae) this._getStructInputs(r.type, e);
				else {
					const h = this._getInputInfo(r);
					h !== null && e.push(h);
				}
		}
		_getInputInfo(t) {
			const e =
				this._getAttribute(t, "location") || this._getAttribute(t, "builtin");
			if (e !== null) {
				const r = this._getAttribute(t, "interpolation"),
					h = this._getTypeInfo(t.type, t.attributes),
					g = this._parseInt(e.value),
					k = new hs(t.name, h, e.name, g);
				return r !== null && (k.interpolation = this._parseString(r.value)), k;
			}
			return null;
		}
		_parseString(t) {
			return t instanceof Array && (t = t[0]), t;
		}
		_parseInt(t) {
			t instanceof Array && (t = t[0]);
			const e = parseInt(t);
			return isNaN(e) ? t : e;
		}
		_getAlias(t) {
			for (const e of this.aliases) if (e.name == t) return e.type;
			return null;
		}
		_getAliasInfo(t) {
			return new cs(t.name, this._getTypeInfo(t.type, null));
		}
		_getTypeInfo(t, e) {
			if (this._types.has(t)) return this._types.get(t);
			if (t instanceof Bn) {
				const h = t,
					g = this._getTypeInfo(h.format, h.attributes),
					k = new Qe(h.name, e);
				return (
					(k.format = g),
					(k.count = h.count),
					this._types.set(t, k),
					this._updateTypeInfo(k),
					k
				);
			}
			if (t instanceof ae) {
				const h = t,
					g = new Me(h.name, e);
				(g.startLine = h.startLine), (g.endLine = h.endLine);
				for (const k of h.members) {
					const T = this._getTypeInfo(k.type, k.attributes);
					g.members.push(new $n(k.name, T, k.attributes));
				}
				return this._types.set(t, g), this._updateTypeInfo(g), g;
			}
			if (t instanceof me) {
				const h = t,
					g = h.format instanceof ie,
					k = h.format
						? g
							? this._getTypeInfo(h.format, null)
							: new de(h.format, null)
						: null,
					T = new Xn(h.name, k, e, h.access);
				return this._types.set(t, T), this._updateTypeInfo(T), T;
			}
			if (t instanceof zn) {
				const h = t,
					g = h.format ? this._getTypeInfo(h.format, null) : null,
					k = new Xn(h.name, g, e, h.access);
				return this._types.set(t, k), this._updateTypeInfo(k), k;
			}
			const r = new de(t.name, e);
			return this._types.set(t, r), this._updateTypeInfo(r), r;
		}
		_updateTypeInfo(t) {
			var e, r;
			const h = this._getTypeSize(t);
			if (
				((t.size =
					(e = h == null ? void 0 : h.size) !== null && e !== void 0 ? e : 0),
				t instanceof Qe)
			) {
				const g = this._getTypeSize(t.format);
				(t.stride =
					(r = g == null ? void 0 : g.size) !== null && r !== void 0 ? r : 0),
					this._updateTypeInfo(t.format);
			}
			t instanceof Me && this._updateStructInfo(t);
		}
		_updateStructInfo(t) {
			var e;
			let r = 0,
				h = 0,
				g = 0,
				k = 0;
			for (let T = 0, I = t.members.length; T < I; ++T) {
				const B = t.members[T],
					z = this._getTypeSize(B);
				if (!z) continue;
				((e = this._getAlias(B.type.name)) !== null && e !== void 0) || B.type;
				const V = z.align,
					Y = z.size;
				(r = this._roundUp(V, r + h)),
					(h = Y),
					(g = r),
					(k = Math.max(k, V)),
					(B.offset = r),
					(B.size = Y),
					this._updateTypeInfo(B.type);
			}
			(t.size = this._roundUp(k, g + h)), (t.align = k);
		}
		_getTypeSize(t) {
			var e;
			if (t == null) return null;
			const r = this._getAttributeNum(t.attributes, "size", 0),
				h = this._getAttributeNum(t.attributes, "align", 0);
			if ((t instanceof $n && (t = t.type), t instanceof de)) {
				const g = this._getAlias(t.name);
				g !== null && (t = g);
			}
			{
				const g = Qt._typeInfo[t.name];
				if (g !== void 0) {
					const k = t.format === "f16" ? 2 : 1;
					return new Ee(Math.max(h, g.align / k), Math.max(r, g.size / k));
				}
			}
			{
				const g = Qt._typeInfo[t.name.substring(0, t.name.length - 1)];
				if (g) {
					const k = t.name[t.name.length - 1] === "h" ? 2 : 1;
					return new Ee(Math.max(h, g.align / k), Math.max(r, g.size / k));
				}
			}
			if (t instanceof Qe) {
				let g = t,
					k = 8,
					T = 8;
				const I = this._getTypeSize(g.format);
				I !== null && ((T = I.size), (k = I.align));
				const B = g.count,
					z = this._getAttributeNum(
						(e = t == null ? void 0 : t.attributes) !== null && e !== void 0
							? e
							: null,
						"stride",
						this._roundUp(k, T),
					);
				return (
					(T = B * z), r && (T = r), new Ee(Math.max(h, k), Math.max(r, T))
				);
			}
			if (t instanceof Me) {
				let g = 0,
					k = 0,
					T = 0,
					I = 0,
					B = 0;
				for (const z of t.members) {
					const V = this._getTypeSize(z.type);
					V !== null &&
						((g = Math.max(V.align, g)),
						(T = this._roundUp(V.align, T + I)),
						(I = V.size),
						(B = T));
				}
				return (
					(k = this._roundUp(g, B + I)), new Ee(Math.max(h, g), Math.max(r, k))
				);
			}
			return null;
		}
		_isUniformVar(t) {
			return t instanceof se && t.storage == "uniform";
		}
		_isStorageVar(t) {
			return t instanceof se && t.storage == "storage";
		}
		_isTextureVar(t) {
			return (
				t instanceof se &&
				t.type !== null &&
				Qt._textureTypes.indexOf(t.type.name) != -1
			);
		}
		_isSamplerVar(t) {
			return (
				t instanceof se &&
				t.type !== null &&
				Qt._samplerTypes.indexOf(t.type.name) != -1
			);
		}
		_getAttribute(t, e) {
			const r = t;
			if (!r || !r.attributes) return null;
			const h = r.attributes;
			for (let g of h) if (g.name == e) return g;
			return null;
		}
		_getAttributeNum(t, e, r) {
			if (t === null) return r;
			for (let h of t)
				if (h.name == e) {
					let g = h !== null && h.value !== null ? h.value : r;
					return (
						g instanceof Array && (g = g[0]),
						typeof g == "number" ? g : typeof g == "string" ? parseInt(g) : r
					);
				}
			return r;
		}
		_roundUp(t, e) {
			return Math.ceil(e / t) * t;
		}
	}
	(Qt._typeInfo = {
		f16: { align: 2, size: 2 },
		i32: { align: 4, size: 4 },
		u32: { align: 4, size: 4 },
		f32: { align: 4, size: 4 },
		atomic: { align: 4, size: 4 },
		vec2: { align: 8, size: 8 },
		vec3: { align: 16, size: 12 },
		vec4: { align: 16, size: 16 },
		mat2x2: { align: 8, size: 16 },
		mat3x2: { align: 8, size: 24 },
		mat4x2: { align: 8, size: 32 },
		mat2x3: { align: 16, size: 32 },
		mat3x3: { align: 16, size: 48 },
		mat4x3: { align: 16, size: 64 },
		mat2x4: { align: 16, size: 32 },
		mat3x4: { align: 16, size: 48 },
		mat4x4: { align: 16, size: 64 },
	}),
		(Qt._textureTypes = p.any_texture_type.map((i) => i.name)),
		(Qt._samplerTypes = p.sampler_type.map((i) => i.name));
	function pe(i, t) {
		return Object.fromEntries(
			t.map((e) => {
				const r = ws(i, e, 0);
				return [
					e.name,
					{
						typeDefinition: r,
						group: e.group,
						binding: e.binding,
						size: r.size,
					},
				];
			}),
		);
	}
	function Wn(i, t, e) {
		return {
			fields: Object.fromEntries(
				t.members.map((r) => [
					r.name,
					{ offset: r.offset, type: nn(i, r.type, 0) },
				]),
			),
			size: t.size,
			offset: e,
		};
	}
	function _s(i) {
		var t;
		if (i.name.includes("depth")) return "depth";
		switch ((t = i.format) == null ? void 0 : t.name) {
			case "f32":
				return "float";
			case "i32":
				return "sint";
			case "u32":
				return "uint";
			default:
				throw new Error("unknown texture sample type");
		}
	}
	function jn(i) {
		return i.name.includes("2d_array")
			? "2d-array"
			: i.name.includes("cube_array")
			? "cube-array"
			: i.name.includes("3d")
			? "3d"
			: i.name.includes("1d")
			? "1d"
			: i.name.includes("cube")
			? "cube"
			: "2d";
	}
	function ms(i) {
		switch (i.access) {
			case "read":
				return "read-only";
			case "write":
				return "write-only";
			case "read_write":
				return "read-write";
			default:
				throw new Error("unknonw storage texture access");
		}
	}
	function gs(i) {
		return i.name.endsWith("_comparison") ? "comparison" : "filtering";
	}
	function ys(i, t) {
		const { binding: e, access: r, type: h } = i;
		switch (i.resourceType) {
			case xt.Uniform:
				return {
					binding: e,
					visibility: t,
					buffer: { ...(i.size && { minBindingSize: i.size }) },
				};
			case xt.Storage:
				return {
					binding: e,
					visibility: t,
					buffer: {
						type: r === "" || r === "read" ? "read-only-storage" : "storage",
						...(i.size && { minBindingSize: i.size }),
					},
				};
			case xt.Texture: {
				if (h.name === "texture_external")
					return { binding: e, visibility: t, externalTexture: {} };
				const g = h.name.includes("multisampled");
				return {
					binding: e,
					visibility: t,
					texture: { sampleType: _s(h), viewDimension: jn(h), multisampled: g },
				};
			}
			case xt.Sampler:
				return { binding: e, visibility: t, sampler: { type: gs(h) } };
			case xt.StorageTexture:
				return {
					binding: e,
					visibility: t,
					storageTexture: {
						access: ms(h),
						format: h.format.name,
						viewDimension: jn(h),
					},
				};
			default:
				throw new Error("unknown resource type");
		}
	}
	function tn(i, t) {
		const e = {};
		for (const r of i)
			e[r.name] = {
				stage: t,
				resources: r.resources.map((h) => {
					const { name: g, group: k } = h;
					return { name: g, group: k, entry: ys(h, t) };
				}),
			};
		return e;
	}
	function Zn(i) {
		const t = new Qt(i),
			e = Object.fromEntries(t.structs.map((z) => [z.name, Wn(t, z, 0)])),
			r = pe(t, t.uniforms),
			h = pe(
				t,
				t.storage.filter((z) => z.resourceType === xt.Storage),
			),
			g = pe(
				t,
				t.storage.filter((z) => z.resourceType === xt.StorageTexture),
			),
			k = pe(
				t,
				t.textures.filter((z) => z.type.name !== "texture_external"),
			),
			T = pe(
				t,
				t.textures.filter((z) => z.type.name === "texture_external"),
			),
			I = pe(t, t.samplers),
			B = {
				...tn(t.entry.vertex, GPUShaderStage.VERTEX),
				...tn(t.entry.fragment, GPUShaderStage.FRAGMENT),
				...tn(t.entry.compute, GPUShaderStage.COMPUTE),
			};
		return {
			externalTextures: T,
			samplers: I,
			structs: e,
			storages: h,
			storageTextures: g,
			textures: k,
			uniforms: r,
			entryPoints: B,
		};
	}
	function en(i, t = "") {
		if (!i) throw new Error(t);
	}
	function ws(i, t, e) {
		switch (t.resourceType) {
			case xt.Uniform:
			case xt.Storage:
			case xt.StorageTexture:
				return nn(i, t.type, e);
			default:
				return { size: 0, type: t.type.name };
		}
	}
	function nn(i, t, e) {
		if (t.isArray) {
			en(!t.isStruct, "struct array is invalid"),
				en(!t.isStruct, "template array is invalid");
			const r = t;
			return {
				size: r.size,
				elementType: nn(i, r.format, e),
				numElements: r.count,
			};
		} else {
			if (t.isStruct)
				return en(!t.isTemplate, "template struct is invalid"), Wn(i, t, e);
			{
				const r = t,
					h = t.isTemplate ? `${r.name}<${r.format.name}>` : t.name;
				return { size: t.size, type: h };
			}
		}
	}
	const xs = new Map([
		[Int8Array, { formats: ["sint8", "snorm8"], defaultForType: 1 }],
		[Uint8Array, { formats: ["uint8", "unorm8"], defaultForType: 1 }],
		[Int16Array, { formats: ["sint16", "snorm16"], defaultForType: 1 }],
		[Uint16Array, { formats: ["uint16", "unorm16"], defaultForType: 1 }],
		[Int32Array, { formats: ["sint32", "snorm32"], defaultForType: 0 }],
		[Uint32Array, { formats: ["uint32", "unorm32"], defaultForType: 0 }],
		[Float32Array, { formats: ["float32", "float32"], defaultForType: 0 }],
	]);
	new Map(
		[...xs.entries()]
			.map(
				([
					i,
					{
						formats: [t, e],
					},
				]) => [
					[t, i],
					[e, i],
				],
			)
			.flat(),
	);
	const vs = 0.1,
		ks = 100,
		bs = 0.1,
		Ms = 1,
		ge = 15,
		fe = {
			get Position() {
				return 0;
			},
			get Normal() {
				return 1;
			},
			get TexCoord() {
				return 2;
			},
		},
		te = {
			get Camera() {
				return 0;
			},
			get Model() {
				return 1;
			},
			get InstanceMatrices() {
				return 2;
			},
		},
		rn = {
			get NormalReflectance() {
				return 0;
			},
			get Color() {
				return 1;
			},
			get Velocity() {
				return 2;
			},
		},
		Ht = {
			get VertexInput() {
				return `

      struct VertexInput {
        @location(${fe.Position}) position: vec4f,
        @location(${fe.Normal}) normal: vec3f,
        @location(${fe.TexCoord}) uv: vec2f,
      };

    `;
			},
			get VertexOutput() {
				return `
    
      struct VertexOutput {
        @builtin(position) position: vec4f,
        @location(0) normal: vec3f,
        @location(1) uv: vec2f,
        @location(2) currFrameClipPos: vec4f,
        @location(3) prevFrameClipPos: vec4f,
      };

    `;
			},
			get ModelUniform() {
				return `

      struct ModelUniform {
        worldMatrix: mat4x4f,
        prevFrameWorldMatrix: mat4x4f,
        normalMatrix: mat3x3f,
        baseColor: vec3f,
        isReflective: u32,
      };

    `;
			},
			get CameraUniform() {
				return `

      struct CameraUniform {
        projectionMatrix: mat4x4f,
        viewMatrix: mat4x4f,
        projectionViewMatrix: mat4x4f,
        prevFrameProjectionViewMatrix: mat4x4f
      };

    `;
			},
			get GBufferOutput() {
				return `

      struct GBufferOutput {
        @location(${rn.NormalReflectance}) normalReflectance: vec4f,
        @location(${rn.Color}) color: vec4f,
        @location(${rn.Velocity}) velocity: vec4f,
      };
      
    `;
			},
		},
		Ve = class Ve {
			constructor() {
				(this.position = ct.fromValues(0, 0, 0)),
					(this.lookAt = ct.fromValues(0, 0, 0)),
					(this.projectionMatrix = Z.create()),
					(this.viewMatrix = Z.create()),
					(this.viewMatrixInverse = Z.create()),
					(this.projectionViewMatrix = Z.create()),
					(this.prevFrameProjectionViewMatrix = Z.create()),
					(this.needsUploadToGPU = !0);
				const t = Zn(Ht.CameraUniform);
				(this.bufferUniformValues = An(t.structs.CameraUniform)),
					this.bufferUniformValues.set({
						viewMatrix: this.viewMatrix,
						projectionMatrix: this.projectionMatrix,
						projectionViewMatrix: this.projectionViewMatrix,
					}),
					(this.gpuBuffer = X.device.createBuffer({
						size: this.bufferUniformValues.arrayBuffer.byteLength,
						usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
						label: "Camera GPUBuffer",
					}));
			}
			set x(t) {
				this.position[0] = t;
			}
			get x() {
				return this.position[0];
			}
			set y(t) {
				this.position[1] = t;
			}
			get y() {
				return this.position[1];
			}
			set z(t) {
				this.position[2] = t;
			}
			get z() {
				return this.position[2];
			}
			setPosition(t, e, r) {
				(this.position[0] = t), (this.position[1] = e), (this.position[2] = r);
			}
			setLookAt(t, e, r) {
				(this.lookAt[0] = t), (this.lookAt[1] = e), (this.lookAt[2] = r);
			}
			update() {
				this.needsUploadToGPU &&
					(X.device.queue.writeBuffer(
						this.gpuBuffer,
						0,
						this.bufferUniformValues.arrayBuffer,
					),
					(this.needsUploadToGPU = !1));
			}
			updateViewMatrix() {
				return (
					Z.lookAt(this.position, this.lookAt, Ve.UP_VECTOR, this.viewMatrix),
					this.bufferUniformValues.set({ viewMatrix: this.viewMatrix }),
					(this.needsUploadToGPU = !0),
					this.updateProjectionViewMatrix(),
					this
				);
			}
			updateProjectionMatrix() {
				return (
					this.bufferUniformValues.set({
						projectionMatrix: this.projectionMatrix,
					}),
					this
				);
			}
			updateProjectionViewMatrix() {
				return (
					Z.mul(
						this.projectionMatrix,
						this.viewMatrix,
						this.projectionViewMatrix,
					),
					this.bufferUniformValues.set({
						projectionViewMatrix: this.projectionViewMatrix,
						prevFrameProjectionViewMatrix: this.prevFrameProjectionViewMatrix,
					}),
					(this.needsUploadToGPU = !0),
					this
				);
			}
			onFrameEnd() {
				Z.copy(this.projectionViewMatrix, this.prevFrameProjectionViewMatrix);
			}
		};
	Ve.UP_VECTOR = ct.fromValues(0, 1, 0);
	let Te = Ve;
	class Ss extends Te {
		constructor(t, e, r, h) {
			super(),
				(this.fieldOfView = Mr(t)),
				(this.aspect = e),
				(this.near = r),
				(this.far = h),
				this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			return (
				Z.perspective(
					this.fieldOfView,
					this.aspect,
					this.near,
					this.far,
					this.projectionMatrix,
				),
				super.updateProjectionMatrix(),
				this.updateProjectionViewMatrix(),
				this
			);
		}
	}
	class Es {
		constructor() {
			(this.isReflective = !0), (this.baseColor = ct.create());
		}
	}
	let Ae, Pe, Ue;
	const _t = {
		get defaultCameraBindGroupLayout() {
			if (Ae) return Ae;
			const i = [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
					buffer: {},
				},
			];
			return (
				(Ae = X.device.createBindGroupLayout({
					label: "Camera GPUBindGroupLayout",
					entries: i,
				})),
				Ae
			);
		},
		get defaultModelBindGroupLayout() {
			if (Pe) return Pe;
			const i = [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
					buffer: {},
				},
			];
			return (
				(Pe = X.device.createBindGroupLayout({
					label: "Model GPUBindGroupLayout",
					entries: i,
				})),
				Pe
			);
		},
		get instanceMatricesBindGroupLayout() {
			if (Ue) return Ue;
			const i = [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX,
					buffer: { type: "read-only-storage" },
				},
			];
			return (
				(Ue = X.device.createBindGroupLayout({
					label: "Instance Models GPUBindGroupLayout",
					entries: i,
				})),
				Ue
			);
		},
		createShaderModule: (i) => X.device.createShaderModule({ code: i }),
		createRenderPipeline: (i) => X.device.createRenderPipeline(i),
		createComputePipeline: (i) => X.device.createComputePipeline(i),
	};
	class sn {
		constructor() {
			(this._position = ct.fromValues(0, 0, 0)),
				(this._rotation = ct.fromValues(0, 0, 0)),
				(this._scale = ct.fromValues(1, 1, 1)),
				(this.translateMatrix = Z.identity()),
				(this.scaleMatrix = Z.identity()),
				(this.rotationMatrix = Z.identity()),
				(this.quaterion = ve.create()),
				(this.cachedMatrix = Z.create()),
				(this.worldMatrix = Z.create()),
				(this.normalMatrix = xe.create()),
				(this.matrixNeedsUpdate = !0),
				(this.id = self.crypto.randomUUID()),
				(this.label = "Object"),
				(this.visible = !0),
				(this.children = []);
		}
		get modelMatrix() {
			return this.worldMatrix;
		}
		updateNormalMatrix() {
			xe.fromMat4(this.worldMatrix, this.normalMatrix),
				xe.inverse(this.normalMatrix, this.normalMatrix),
				xe.transpose(this.normalMatrix, this.normalMatrix);
		}
		updateWorldMatrix() {
			var e;
			const t = ((e = this.parent) == null ? void 0 : e.worldMatrix) ?? Sr;
			return this.matrixNeedsUpdate
				? (Z.identity(this.scaleMatrix),
				  Z.scale(this.scaleMatrix, this.scale, this.scaleMatrix),
				  (this.quaterion = ve.fromEuler(
						this.rotation[0],
						this.rotation[1],
						this.rotation[2],
						Xe,
				  )),
				  Z.fromQuat(this.quaterion, this.rotationMatrix),
				  Z.identity(this.translateMatrix),
				  Z.translate(
						this.translateMatrix,
						this.position,
						this.translateMatrix,
				  ),
				  Z.mul(this.scaleMatrix, this.rotationMatrix, this.cachedMatrix),
				  Z.mul(this.translateMatrix, this.cachedMatrix, this.cachedMatrix),
				  Z.mul(t, this.cachedMatrix, this.worldMatrix),
				  this.updateNormalMatrix(),
				  (this.matrixNeedsUpdate = !1),
				  !0)
				: (Z.mul(t, this.cachedMatrix, this.worldMatrix),
				  this.updateNormalMatrix(),
				  !1);
		}
		addChild(t) {
			(t.parent = this), this.children.push(t);
		}
		removeChild(t) {
			(this.children = this.children.filter(({ id: e }) => e != t.id)),
				(t.parent = null);
		}
		traverse(t, e = !0) {
			if ((t(this), e)) for (let r of this.children) r.traverse(t, e);
		}
		preRender(t) {}
		onRender(t) {}
		postRender(t) {}
		render(t) {
			this.visible && (this.preRender(t), this.onRender(t), this.postRender(t));
		}
		getWorldPosition() {
			return (
				(this._worldPosition[0] = this.worldMatrix[12]),
				(this._worldPosition[1] = this.worldMatrix[13]),
				(this._worldPosition[2] = this.worldMatrix[14]),
				this._worldPosition
			);
		}
		setPosition(t, e, r) {
			return (
				(this._position[0] = t),
				(this._position[1] = e),
				(this._position[2] = r),
				(this.matrixNeedsUpdate = !0),
				this
			);
		}
		setPositionX(t) {
			return (this._position[0] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setPositionY(t) {
			return (this._position[1] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setPositionZ(t) {
			return (this._position[2] = t), (this.matrixNeedsUpdate = !0), this;
		}
		get position() {
			return this.getPosition();
		}
		getPosition() {
			return this._position;
		}
		getPositionX() {
			return this._position[0];
		}
		getPositionY() {
			return this._position[1];
		}
		getPositionZ() {
			return this._position[2];
		}
		setRotation(t, e, r) {
			return (
				(this._rotation[0] = t),
				(this._rotation[1] = e),
				(this._rotation[2] = r),
				(this.matrixNeedsUpdate = !0),
				this
			);
		}
		setRotationX(t) {
			return (this._rotation[0] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setRotationY(t) {
			return (this._rotation[1] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setRotationZ(t) {
			return (this._rotation[2] = t), (this.matrixNeedsUpdate = !0), this;
		}
		get rotation() {
			return this.getRotation();
		}
		getRotation() {
			return this._rotation;
		}
		getRotationX() {
			return this._rotation[0];
		}
		getRotationY() {
			return this._rotation[1];
		}
		getRotationZ() {
			return this._rotation[2];
		}
		setScale(t, e, r) {
			return (
				(this._scale[0] = t),
				(this._scale[1] = e),
				(this._scale[2] = r),
				(this.matrixNeedsUpdate = !0),
				this
			);
		}
		setScaleX(t) {
			return (this._scale[0] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setScaleY(t) {
			return (this._scale[1] = t), (this.matrixNeedsUpdate = !0), this;
		}
		setScaleZ(t) {
			return (this._scale[2] = t), (this.matrixNeedsUpdate = !0), this;
		}
		get scale() {
			return this.getScale();
		}
		getScale() {
			return this._scale;
		}
		getScaleX() {
			return this._scale[0];
		}
		getScaleY() {
			return this._scale[1];
		}
		getScaleZ() {
			return this._scale[2];
		}
	}
	const Ce = class Ce extends sn {
		constructor(t) {
			super(),
				(this.materialProps = new Es()),
				(this.firstIndex = 0),
				(this.baseVertex = 0),
				(this.firstInstance = 0),
				(this.instanceCount = 1),
				(this.uploadModelBufferToGPU = !0),
				(this.prevFrameModelMatrix = Z.create()),
				(this.geometry = t);
			const e = Zn(Ht.ModelUniform);
			(this.bufferUniformValues = An(e.structs.ModelUniform)),
				(this.modelBuffer = X.device.createBuffer({
					label: `${this.label} Model GPUBuffer`,
					size: this.bufferUniformValues.arrayBuffer.byteLength,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
				}));
			const r = [{ binding: 0, resource: { buffer: this.modelBuffer } }];
			this.modelBindGroup = X.device.createBindGroup({
				layout: _t.defaultModelBindGroupLayout,
				entries: r,
			});
		}
		updateWorldMatrix() {
			const t = super.updateWorldMatrix();
			return (this.uploadModelBufferToGPU = t), t;
		}
		preRender(t) {
			t.pushDebugGroup(`Render Object ${this.label}`),
				this.uploadModelBufferToGPU &&
					(this.bufferUniformValues.set({
						worldMatrix: this.modelMatrix,
						prevFrameWorldMatrix: this.prevFrameModelMatrix,
						normalMatrix: this.normalMatrix,
						isReflective: this.materialProps.isReflective ? 1 : 0,
						baseColor: this.materialProps.baseColor,
					}),
					X.device.queue.writeBuffer(
						this.modelBuffer,
						0,
						this.bufferUniformValues.arrayBuffer,
					),
					(this.uploadModelBufferToGPU = !1)),
				t.setVertexBuffer(0, this.geometry.vertexBuffer),
				t.setIndexBuffer(this.geometry.indexBuffer, Ce.INDEX_FORMAT),
				t.setBindGroup(te.Model, this.modelBindGroup);
		}
		onRender(t) {
			this.material.bind(t),
				t.drawIndexed(
					this.geometry.vertexCount,
					this.instanceCount,
					this.firstIndex,
					this.baseVertex,
					this.firstInstance,
				);
		}
		postRender(t) {
			t.popDebugGroup(),
				Z.copy(this.modelMatrix, this.prevFrameModelMatrix),
				(this.uploadModelBufferToGPU = !0);
		}
	};
	Ce.INDEX_FORMAT = "uint16";
	let oe = Ce;
	class Ts extends Te {
		constructor(t, e, r, h, g, k) {
			super(),
				(this.left = t),
				(this.right = e),
				(this.top = r),
				(this.bottom = h),
				(this.near = g),
				(this.far = k),
				this.updateProjectionMatrix();
		}
		updateProjectionMatrix() {
			return (
				Z.ortho(
					this.left,
					this.right,
					this.bottom,
					this.top,
					this.near,
					this.far,
					this.projectionMatrix,
				),
				super.updateProjectionMatrix(),
				this.updateProjectionViewMatrix(),
				this
			);
		}
	}
	let Ge;
	const As = {
		get defaultLayout() {
			if (Ge) return Ge;
			const i = [
				{ shaderLocation: fe.Position, offset: 0, format: "float32x3" },
				{
					shaderLocation: fe.Normal,
					offset: 3 * Float32Array.BYTES_PER_ELEMENT,
					format: "float32x3",
				},
				{
					shaderLocation: fe.TexCoord,
					offset: 6 * Float32Array.BYTES_PER_ELEMENT,
					format: "float32x2",
				},
			];
			return (
				(Ge = {
					arrayStride: 8 * Float32Array.BYTES_PER_ELEMENT,
					attributes: i,
				}),
				Ge
			);
		},
	};
	class an {
		constructor({
			vertexShaderSrc: t,
			vertexShaderEntryFn: e,
			vertexBuffers: r = [As.defaultLayout],
			fragmentShaderSrc: h,
			fragmentShaderEntryFn: g,
			bindGroupLayouts: k = [
				_t.defaultCameraBindGroupLayout,
				_t.defaultModelBindGroupLayout,
			],
			targets: T = [],
			depthStencilFormat: I = X.depthStencilFormat,
			hasDepthStencilState: B = !0,
			depthWriteEnabled: z = !0,
			depthCompareFn: V = "less",
			topology: Y = "triangle-list",
			debugLabel: tt,
		}) {
			const st = _t.createShaderModule(t),
				L = _t.createShaderModule(h),
				F = {
					label: tt,
					layout: X.device.createPipelineLayout({ bindGroupLayouts: k }),
					vertex: { module: st, entryPoint: e, buffers: r },
					fragment: { module: L, entryPoint: g, targets: T },
					primitive: { topology: Y, cullMode: "none" },
				};
			B &&
				(F.depthStencil = { format: I, depthWriteEnabled: z, depthCompare: V }),
				(this.renderPSO = _t.createRenderPipeline(F));
		}
		bind(t) {
			t.setPipeline(this.renderPSO);
		}
	}
	const Ps = /#([^\s]*)(\s*)/gm;
	class Kn {
		constructor(t) {
			mn(this, "elseIsValid", !0);
			mn(this, "branches", []);
			this.pushBranch("if", t);
		}
		pushBranch(t, e) {
			if (!this.elseIsValid)
				throw new Error(`#${t} not preceeded by an #if or #elif`);
			(this.elseIsValid = t === "if" || t === "elif"),
				this.branches.push({ expression: !!e, string: "" });
		}
		appendStringToCurrentBranch(...t) {
			for (const e of t) this.branches[this.branches.length - 1].string += e;
		}
		resolve() {
			for (const t of this.branches) if (t.expression) return t.string;
			return "";
		}
	}
	function on(i, ...t) {
		const e = [];
		let r = new Kn(!0);
		r.elseIsValid = !1;
		const h = (g, k) => {
			if (g.index + g[0].length != k.length)
				throw new Error(
					`#${g[1]} must be immediately followed by a template expression (ie: \${value})`,
				);
		};
		for (let g = 0; g < i.length; ++g) {
			const k = i[g],
				T = k.matchAll(Ps);
			let I = 0,
				B = !1;
			for (const z of T) {
				switch (
					(r.appendStringToCurrentBranch(k.substring(I, z.index)), z[1])
				) {
					case "if":
						h(z, k), (B = !0), e.push(r), (r = new Kn(t[g]));
						break;
					case "elif":
						h(z, k), (B = !0), r.pushBranch(z[1], t[g]);
						break;
					case "else":
						r.pushBranch(z[1], !0), r.appendStringToCurrentBranch(z[2]);
						break;
					case "endif":
						if (!e.length) throw new Error(`#${z[1]} not preceeded by an #if`);
						const V = r.resolve();
						(r = e.pop()), r.appendStringToCurrentBranch(V, z[2]);
						break;
					default:
						r.appendStringToCurrentBranch(z[0]);
						break;
				}
				I = z.index + z[0].length;
			}
			I != k.length && r.appendStringToCurrentBranch(k.substring(I, k.length)),
				!B && t.length > g && r.appendStringToCurrentBranch(t[g]);
		}
		if (e.length) throw new Error("Mismatched #if/#endif count");
		return r.resolve();
	}
	const un = "fragmentMainTexCoords",
		Jn = on`
${Ht.CameraUniform}
  ${Ht.VertexOutput}
  ${Ht.GBufferOutput}
  ${Ht.ModelUniform}

  @group(${te.Camera}) @binding(0) var<uniform> camera: CameraUniform;
  @group(${te.Model}) @binding(0) var<uniform> model: ModelUniform;

  @fragment
  fn ${un}(in: VertexOutput) -> GBufferOutput  {
    // return vec4<f32>(in.uv, 0.0, 1.0);
    var uv = in.uv;
    var out: GBufferOutput;
    out.normalReflectance = vec4f(normalize(in.normal), f32(model.isReflective));
    out.color = vec4f(model.baseColor, 1.0);

    var oldPos = in.prevFrameClipPos;
    var newPos = in.currFrameClipPos;
    
    oldPos /= oldPos.w;
    oldPos.x = (oldPos.x+1)/2.0;
    oldPos.y = (oldPos.y+1)/2.0;
    oldPos.y = 1 - oldPos.y;
    
    newPos /= newPos.w;
    newPos.x = (newPos.x+1)/2.0;
    newPos.y = (newPos.y+1)/2.0;
    newPos.y = 1 - newPos.y;

    out.velocity = vec4f((newPos - oldPos).xy, 0, 1);
  

    return out;
  }
`,
		Qn = "fragmentShaderDebugTexture",
		Us = (i) => on`
  ${Ht.VertexOutput}

  @group(2) @binding(0) var mySampler: sampler;

  #if ${i === Yt.Depth}
    @group(2) @binding(1) var myTexture: texture_depth_2d;
  #else
    @group(2) @binding(1) var myTexture: texture_2d<f32>;
  #endif

  @fragment
  fn ${Qn}(in: VertexOutput) -> @location(0) vec4<f32> {
    var uv = in.uv;
    uv.y = 1.0 - uv.y;
    var color: vec4f;
    #if ${i === Yt.Normal}
    color = vec4f(textureSample(myTexture, mySampler, uv).rgb, 1.0);
    #elif ${i === Yt.Reflectance}
    color = vec4f(textureSample(myTexture, mySampler, uv).a, 0.0, 0.0, 1.0);
    #elif ${i === Yt.Depth}
    var depth = textureSample(myTexture, mySampler, uv);

    let near: f32 = 0.1; // Example near plane
    let far: f32 = 10.0; // Example far plane

    // Linearize the depth (from clip space depth to linear depth)
    let depth_linear = near * far / (far - depth * (far - near));

    // Normalize the linear depth to [0, 1] (NDC space)
    let depth_ndc = (depth_linear - near) / (far - near);


    color = vec4f(vec3f(depth_ndc), 1);
    #elif ${i === Yt.Velocity}
    color = vec4f(textureSample(myTexture, mySampler, uv).rg * 100, 0, 1);
    #else
    color = textureSample(myTexture, mySampler, uv);
    #endif
    return color;
  }
`;
	class Ie {
		constructor() {
			this.vertexCount = 0;
		}
		createBuffers({ vertexCount: t, interleavedVertexArr: e, indicesArr: r }) {
			(this.vertexCount = t),
				(this.vertexBuffer = X.device.createBuffer({
					mappedAtCreation: !0,
					size: t * 8 * Float32Array.BYTES_PER_ELEMENT,
					usage: GPUBufferUsage.VERTEX,
					label: "Mesh Interleaved Vertex GPUBuffer",
				})),
				new Float32Array(this.vertexBuffer.getMappedRange()).set(e, 0),
				this.vertexBuffer.unmap(),
				(this.indexBuffer = X.device.createBuffer({
					mappedAtCreation: !0,
					size: Uint16Array.BYTES_PER_ELEMENT * r.length,
					usage: GPUBufferUsage.INDEX,
					label: "Mesh Index GPUBuffer",
				})),
				new Uint16Array(this.indexBuffer.getMappedRange()).set(r),
				this.indexBuffer.unmap();
		}
	}
	class Gs extends Ie {
		constructor(t = 1, e = 1, r = 1, h = 1) {
			super(),
				(this.width = t),
				(this.height = e),
				(this.widthSegments = r),
				(this.heightSegments = h);
			const g = t * 0.5,
				k = e * 0.5,
				T = r + 1,
				I = h + 1,
				B = Math.floor(r),
				z = Math.floor(h),
				V = t / r,
				Y = e / h,
				tt = [],
				st = [];
			for (let L = 0; L < I; L++) {
				const F = L * Y - k;
				for (let Q = 0; Q < T; Q++) {
					const et = Q * V - g;
					st.push(et, -F, 0),
						st.push(0, 0, 1),
						st.push(Q / B),
						st.push(1 - L / z);
				}
			}
			for (let L = 0; L < z; L++)
				for (let F = 0; F < B; F++) {
					const Q = F + T * L,
						et = F + T * (L + 1),
						O = F + 1 + T * (L + 1),
						W = F + 1 + T * L;
					tt.push(Q, et, W), tt.push(et, O, W);
				}
			this.createBuffers({
				vertexCount: tt.length,
				interleavedVertexArr: new Float32Array(st),
				indicesArr: new Uint16Array(tt),
			});
		}
	}
	let cn;
	const tr = {
			get defaultPlaneGeometry() {
				return cn || ((cn = new Gs()), cn);
			},
		},
		Re = "vertexMain",
		hn = ({ isInstanced: i } = { isInstanced: !1 }) => on`
  ${Ht.VertexInput}
  ${Ht.VertexOutput}
  ${Ht.ModelUniform}
  ${Ht.CameraUniform}

  @group(${te.Camera}) @binding(0) var<uniform> camera: CameraUniform;
  @group(${te.Model}) @binding(0) var<uniform> model: ModelUniform;

  #if ${i}
  @group(${te.InstanceMatrices}) @binding(0) var<storage> instanceMatrices: array<mat4x4f>;
  #endif

  @vertex
  fn ${Re}(
    @builtin(instance_index) instanceId: u32,
    in: VertexInput
  ) -> VertexOutput {
    var position = in.position;

    var worldMatrix: mat4x4f;
    var prevWorldMatrix: mat4x4f;

    #if ${i}
      worldMatrix = instanceMatrices[instanceId] * model.worldMatrix;
      prevWorldMatrix = instanceMatrices[instanceId] * model.prevFrameWorldMatrix;
    #else
      worldMatrix = model.worldMatrix;
      prevWorldMatrix = model.prevFrameWorldMatrix;
    #endif

    var out: VertexOutput;
    out.position = camera.projectionViewMatrix * worldMatrix * in.position;
    out.currFrameClipPos = out.position;
    out.prevFrameClipPos = camera.prevFrameProjectionViewMatrix * prevWorldMatrix * in.position;
    out.uv = in.uv;
    out.normal = model.normalMatrix * in.normal;
    return out;
  }
`;
	var Yt = ((i) => (
		(i[(i.Normal = 0)] = "Normal"),
		(i[(i.Reflectance = 1)] = "Reflectance"),
		(i[(i.Albedo = 2)] = "Albedo"),
		(i[(i.Depth = 3)] = "Depth"),
		(i[(i.Velocity = 4)] = "Velocity"),
		i
	))(Yt || {});
	class ee extends oe {
		constructor(t, e) {
			super(tr.defaultPlaneGeometry),
				ee.sampler ||
					(ee.sampler = X.device.createSampler({
						magFilter: "nearest",
						minFilter: "nearest",
					}));
			const r = [
					{
						binding: 0,
						visibility: GPUShaderStage.FRAGMENT,
						sampler: { type: "filtering" },
					},
					{
						binding: 1,
						visibility: GPUShaderStage.FRAGMENT,
						texture: { sampleType: t === 3 ? "depth" : "float" },
					},
				],
				h = X.device.createBindGroupLayout({
					label: "TextureDebugMesh Sampler + Texture GPUBindGroupLayout",
					entries: r,
				}),
				g = [
					{ binding: 0, resource: ee.sampler },
					{ binding: 1, resource: e },
				];
			(this.samplerTextureBindGroup = X.device.createBindGroup({
				layout: h,
				entries: g,
			})),
				(this.material = new an({
					debugLabel: "Debug Material",
					vertexShaderSrc: hn(),
					vertexShaderEntryFn: Re,
					fragmentShaderSrc: Us(t),
					fragmentShaderEntryFn: Qn,
					bindGroupLayouts: [
						_t.defaultCameraBindGroupLayout,
						_t.defaultModelBindGroupLayout,
						h,
					],
					targets: [{ format: X.pixelFormat }],
					hasDepthStencilState: !1,
					depthCompareFn: "always",
					depthWriteEnabled: !1,
				}));
		}
		preRender(t) {
			super.preRender(t), t.setBindGroup(2, this.samplerTextureBindGroup);
		}
	}
	class ze {
		constructor() {}
		createRenderPassDescriptor() {
			throw new Error("Needs implementation");
		}
		setCamera(t) {
			(this.camera = t),
				(this.cameraBindGroup = X.device.createBindGroup({
					label: "Main Camera Bind Group",
					layout: _t.defaultCameraBindGroupLayout,
					entries: [{ binding: 0, resource: { buffer: t.gpuBuffer } }],
				}));
		}
		resize(t, e) {}
		render(t, e) {
			const r = this.createRenderPassDescriptor(),
				h = t.beginRenderPass(r);
			this.cameraBindGroup && h.setBindGroup(te.Camera, this.cameraBindGroup),
				e.traverse((g) => {
					g.render(h);
				}),
				h.end();
		}
	}
	class Is extends ze {
		resize(t, e) {
			this.colorTexture && this.colorTexture.destroy(),
				(this.colorTexture = X.device.createTexture({
					dimension: "2d",
					format: "bgra8unorm",
					mipLevelCount: 1,
					sampleCount: 1,
					size: { width: t, height: e, depthOrArrayLayers: 1 },
					usage:
						GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
					label: "Color GBuffer Texture",
				})),
				(this.colorTextureView = this.colorTexture.createView()),
				this.velocityTexture && this.velocityTexture.destroy(),
				(this.velocityTexture = X.device.createTexture({
					dimension: "2d",
					format: "rg16float",
					mipLevelCount: 1,
					sampleCount: 1,
					size: { width: t, height: e, depthOrArrayLayers: 1 },
					usage:
						GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
					label: "Velocity GBuffer Texture",
				})),
				(this.velocityTextureView = this.velocityTexture.createView()),
				this.normalReflectanceTexture &&
					this.normalReflectanceTexture.destroy(),
				(this.normalReflectanceTexture = X.device.createTexture({
					dimension: "2d",
					format: "rgba16float",
					mipLevelCount: 1,
					sampleCount: 1,
					size: { width: t, height: e, depthOrArrayLayers: 1 },
					usage:
						GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
					label: "Normal + Reflectance GBuffer Texture",
				})),
				(this.normalReflectanceTextureView =
					this.normalReflectanceTexture.createView()),
				this.depthTexture && this.depthTexture.destroy(),
				(this.depthTexture = X.device.createTexture({
					dimension: "2d",
					format: X.depthStencilFormat,
					mipLevelCount: 1,
					sampleCount: 1,
					size: { width: t, height: e, depthOrArrayLayers: 1 },
					usage:
						GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
					label: "Depth GBuffer Texture",
				})),
				(this.depthTextureView = this.depthTexture.createView());
		}
		createRenderPassDescriptor() {
			return {
				colorAttachments: [
					{
						view: this.normalReflectanceTextureView,
						loadOp: "clear",
						clearValue: [0.1, 0.1, 0.1, 1],
						storeOp: "store",
					},
					{
						view: this.colorTextureView,
						loadOp: "clear",
						clearValue: [0.1, 0.1, 0.1, 1],
						storeOp: "store",
					},
					{
						view: this.velocityTextureView,
						loadOp: "clear",
						clearValue: [0, 0, 0, 0],
						storeOp: "store",
					},
				],
				depthStencilAttachment: {
					view: this.depthTextureView,
					depthLoadOp: "clear",
					depthStoreOp: "store",
					depthClearValue: 1,
				},
				label: "GBuffer Render Pass",
			};
		}
	}
	const ln = "gbufferVertexShader",
		er = `
  ${Ht.VertexOutput}

  @vertex
  fn ${ln}(@builtin(vertex_index) VertexIndex : u32) -> VertexOutput {
    const pos = array(
      vec2(-1.0, -1.0), vec2(3, -1.0), vec2(-1.0, 3),
    );
  
    var out: VertexOutput;
    out.position = vec4f(pos[VertexIndex], 0.0, 1.0);
    return out;
  }
`,
		nr = "gbufferFragmentShader",
		Rs = `
  @group(0) @binding(0) var normalTexture: texture_2d<f32>;
  @group(0) @binding(1) var colorTexture: texture_2d<f32>;

  @fragment
  fn ${nr}(@builtin(position) coord : vec4f) -> @location(0) vec4f {
    let normal = textureLoad(normalTexture, vec2i(floor(coord.xy)), 0).xyz;
    return vec4f(normal, 1.0);
  }
`;
	class zs extends ze {
		constructor(t, e) {
			super();
			const r = _t.createShaderModule(er),
				h = _t.createShaderModule(Rs),
				g = [{ format: "rgba16float" }],
				k = [
					{ binding: 0, visibility: GPUShaderStage.FRAGMENT, texture: {} },
					{ binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: {} },
				],
				T = X.device.createBindGroupLayout({
					label: "GBuffer Textures Bind Group",
					entries: k,
				}),
				I = [
					{ binding: 0, resource: t },
					{ binding: 1, resource: e },
				],
				B = {
					layout: X.device.createPipelineLayout({ bindGroupLayouts: [T] }),
					vertex: { module: r, entryPoint: ln },
					fragment: { module: h, entryPoint: nr, targets: g },
					primitive: { topology: "triangle-list", cullMode: "back" },
				};
			(this.renderPSO = _t.createRenderPipeline(B)),
				(this.gbufferTexturesBindGroup = X.device.createBindGroup({
					layout: T,
					entries: I,
				}));
		}
		resize(t, e) {
			this.outTexture && this.outTexture.destroy(),
				(this.outTexture = X.device.createTexture({
					dimension: "2d",
					format: "rgba16float",
					mipLevelCount: 1,
					sampleCount: 1,
					size: { width: t, height: e, depthOrArrayLayers: 1 },
					usage:
						GPUTextureUsage.STORAGE_BINDING |
						GPUTextureUsage.RENDER_ATTACHMENT |
						GPUTextureUsage.TEXTURE_BINDING,
					label: "GBuffer Result Texture",
				})),
				(this.outTextureView = this.outTexture.createView());
		}
		createRenderPassDescriptor() {
			return {
				colorAttachments: [
					{
						view: this.outTextureView,
						loadOp: "load",
						clearValue: [0.1, 0.1, 0.1, 1],
						storeOp: "store",
					},
				],
				label: "GBuffer Integrate Pass",
			};
		}
		render(t) {
			const e = this.createRenderPassDescriptor(),
				r = t.beginRenderPass(e);
			r.setPipeline(this.renderPSO),
				r.setBindGroup(0, this.gbufferTexturesBindGroup),
				r.draw(3),
				r.end();
		}
	}
	class Bs extends Ie {
		constructor(
			t = 1,
			e = 1,
			r = 1,
			h = 32,
			g = 1,
			k = !1,
			T = 0,
			I = Math.PI * 2,
		) {
			super(),
				(this.radiusTop = t),
				(this.radiusBottom = e),
				(this.height = r),
				(this.radialSegments = h),
				(this.heightSegments = g),
				(this.openEnded = k),
				(this.thetaStart = T),
				(this.thetaLength = I),
				(h = Math.floor(h)),
				(g = Math.floor(g));
			const B = [],
				z = [];
			let V = 0;
			const Y = [],
				tt = r / 2;
			st(),
				k === !1 && (t > 0 && L(!0), e > 0 && L(!1)),
				this.createBuffers({
					vertexCount: B.length,
					interleavedVertexArr: new Float32Array(z),
					indicesArr: new Uint16Array(B),
				});
			function st() {
				const F = ct.create(),
					Q = ct.create(),
					et = (e - t) / r;
				for (let O = 0; O <= g; O++) {
					const W = [],
						ot = O / g,
						pt = ot * (e - t) + t;
					for (let it = 0; it <= h; it++) {
						const ut = it / h,
							ht = ut * I + T,
							at = Math.sin(ht),
							kt = Math.cos(ht);
						(Q[0] = pt * at),
							(Q[1] = -ot * r + tt),
							(Q[2] = pt * kt),
							z.push(Q[0], Q[1], Q[2]),
							(F[0] = at),
							(F[1] = et),
							(F[2] = kt),
							ct.normalize(F),
							z.push(F[0], F[1], F[2]),
							z.push(ut, 1 - ot),
							W.push(V++);
					}
					Y.push(W);
				}
				for (let O = 0; O < h; O++)
					for (let W = 0; W < g; W++) {
						const ot = Y[W][O],
							pt = Y[W + 1][O],
							it = Y[W + 1][O + 1],
							ut = Y[W][O + 1];
						(t > 0 || W !== 0) && B.push(ot, pt, ut),
							(e > 0 || W !== g - 1) && B.push(pt, it, ut);
					}
			}
			function L(F) {
				const Q = V,
					et = br.create(),
					O = ct.create(),
					W = F === !0 ? t : e,
					ot = F === !0 ? 1 : -1;
				for (let it = 1; it <= h; it++)
					z.push(0, tt * ot, 0), z.push(0, ot, 0), z.push(0.5, 0.5), V++;
				const pt = V;
				for (let it = 0; it <= h; it++) {
					const ut = (it / h) * I + T,
						ht = Math.cos(ut),
						at = Math.sin(ut);
					(O[0] = W * at),
						(O[1] = tt * ot),
						(O[2] = W * ht),
						z.push(O[0], O[1], O[2]),
						z.push(0, ot, 0),
						(et[0] = ht * 0.5 + 0.5),
						(et[1] = at * 0.5 * ot + 0.5),
						z.push(et[0], et[1]),
						V++;
				}
				for (let it = 0; it < h; it++) {
					const ut = Q + it,
						ht = pt + it;
					F === !0 ? B.push(ht, ht + 1, ut) : B.push(ht + 1, ht, ut);
				}
			}
		}
	}
	class Vs extends oe {
		constructor(t, e) {
			super(t),
				(this.instanceMatrices = []),
				(this.instanceCount = e),
				(this.uploadMatricesToGPUArr = new Float32Array(e * 16));
			for (let r = 0; r < e; r++) this.instanceMatrices.push(Z.create());
		}
		setMatrixAt(t, e) {
			if (t > this.instanceMatrices.length)
				throw new Error(
					"Setting instanced matrix at index outside of array boundary",
				);
			this.instanceMatrices[t] = e;
		}
		updateInstances() {
			if (!this.instanceBuffer) {
				this.instanceBuffer = X.device.createBuffer({
					label: "Drawable Instances GPUBuffer",
					size: this.instanceCount * 16 * Float32Array.BYTES_PER_ELEMENT,
					usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
				});
				const t = [{ binding: 0, resource: { buffer: this.instanceBuffer } }];
				this.instanceMatricesBindGroup = X.device.createBindGroup({
					layout: _t.instanceMatricesBindGroupLayout,
					entries: t,
				});
			}
			for (let t = 0; t < this.instanceCount; t++)
				this.uploadMatricesToGPUArr.set(this.instanceMatrices[t], t * 16);
			X.device.queue.writeBuffer(
				this.instanceBuffer,
				0,
				this.uploadMatricesToGPUArr,
			);
		}
		preRender(t) {
			super.preRender(t),
				t.setBindGroup(te.InstanceMatrices, this.instanceMatricesBindGroup);
		}
	}
	let dn, pn;
	const Be = {
			get defaultDeferredMaterial() {
				return (
					dn ||
					((dn = new an({
						debugLabel: "Material",
						vertexShaderSrc: hn(),
						vertexShaderEntryFn: Re,
						fragmentShaderSrc: Jn,
						fragmentShaderEntryFn: un,
						targets: [
							{ format: "rgba16float" },
							{ format: "bgra8unorm" },
							{ format: "rg16float" },
						],
					})),
					dn)
				);
			},
			get defaultDeferredInstancedMaterial() {
				return (
					pn ||
					((pn = new an({
						debugLabel: "Material",
						vertexShaderSrc: hn({ isInstanced: !0 }),
						vertexShaderEntryFn: Re,
						fragmentShaderSrc: Jn,
						fragmentShaderEntryFn: un,
						bindGroupLayouts: [
							_t.defaultCameraBindGroupLayout,
							_t.defaultModelBindGroupLayout,
							_t.instanceMatricesBindGroupLayout,
						],
						targets: [
							{ format: "rgba16float" },
							{ format: "bgra8unorm" },
							{ format: "rg16float" },
						],
					})),
					pn)
				);
			},
		},
		It = class It extends Vs {
			constructor() {
				let t = new Bs(It.PIPE_RADIUS, It.PIPE_RADIUS, ge),
					e = It.PIPES_PER_AXIS * 2 + 2;
				super(t, e), (this.material = Be.defaultDeferredInstancedMaterial);
				let r = 0,
					h = Z.create(),
					g = Z.fromQuat(ve.fromEuler(0, 0, Math.PI * 0.5, Xe));
				for (let I = 0; I < It.PIPES_PER_AXIS; I++) {
					Z.translation(
						new Float32Array([0, 0, I * It.PIPES_SPACING - 7.5]),
						h,
					);
					let B = Z.mul(h, g);
					this.setMatrixAt(r, B), r++;
				}
				Z.translation(new Float32Array([0, 0, 6 * It.PIPES_SPACING - 10.5]), h);
				let k = Z.mul(h, g);
				this.setMatrixAt(r, k), r++;
				let T = Z.fromQuat(ve.fromEuler(Math.PI * 0.5, 0, 0, Xe));
				for (let I = 0; I < It.PIPES_PER_AXIS; I++) {
					Z.translation(
						new Float32Array([I * It.PIPES_SPACING - 7.5, 0, 0]),
						h,
					);
					let B = Z.mul(h, T);
					this.setMatrixAt(r, B), r++;
				}
				Z.translation(new Float32Array([6 * It.PIPES_SPACING - 10.5, 0, 0]), h),
					(k = Z.mul(h, T)),
					this.setMatrixAt(r, k),
					this.updateInstances(),
					this.updateWorldMatrix();
			}
		};
	(It.PIPE_RADIUS = 0.009),
		(It.PIPES_PER_AXIS = 5),
		(It.PIPES_SPACING = ge / It.PIPES_PER_AXIS);
	let fn = It;
	class Cs extends oe {
		constructor() {
			let t = tr.defaultPlaneGeometry;
			super(t),
				(this.material = Be.defaultDeferredMaterial),
				(this.materialProps.isReflective = !0),
				this.setRotationX(Math.PI * -0.5)
					.setPositionY(0)
					.setScale(ge, ge, ge),
				this.updateWorldMatrix();
		}
	}
	class qs extends sn {
		constructor() {
			super(),
				(this.plane = new Cs()),
				(this.pipes = new fn()),
				this.addChild(this.plane),
				this.addChild(this.pipes);
		}
	}
	class Ns extends Ie {
		constructor(t = 1, e = 1, r = 1, h = 1, g = 1, k = 1) {
			super(),
				(this.width = t),
				(this.height = e),
				(this.depth = r),
				(this.widthSegments = h),
				(this.heightSegments = g),
				(this.depthSegments = k),
				(h = Math.floor(h)),
				(g = Math.floor(g)),
				(k = Math.floor(k));
			const T = [],
				I = [];
			let B = 0;
			z(2, 1, 0, -1, -1, r, e, t, k, g),
				z(2, 1, 0, 1, -1, r, e, -t, k, g),
				z(0, 2, 1, 1, 1, t, r, e, h, k),
				z(0, 2, 1, 1, -1, t, r, -e, h, k),
				z(0, 1, 2, 1, -1, t, e, r, h, g),
				z(0, 1, 2, -1, -1, t, e, -r, h, g),
				this.createBuffers({
					vertexCount: T.length,
					interleavedVertexArr: new Float32Array(I),
					indicesArr: new Uint16Array(T),
				});
			function z(V, Y, tt, st, L, F, Q, et, O, W) {
				const ot = F / O,
					pt = Q / W,
					it = F / 2,
					ut = Q / 2,
					ht = et / 2,
					at = O + 1,
					kt = W + 1;
				let K = 0;
				const j = ct.create();
				for (let D = 0; D < kt; D++) {
					const gt = D * pt - ut;
					for (let mt = 0; mt < at; mt++) {
						const St = mt * ot - it;
						(j[V] = St * st),
							(j[Y] = gt * L),
							(j[tt] = ht),
							I.push(j[0], j[1], j[2]),
							(j[V] = 0),
							(j[Y] = 0),
							(j[tt] = et > 0 ? 1 : -1),
							I.push(j[0], j[1], j[2]),
							I.push(mt / O),
							I.push(1 - D / W),
							(K += 1);
					}
				}
				for (let D = 0; D < W; D++)
					for (let gt = 0; gt < O; gt++) {
						const mt = B + gt + at * D,
							St = B + gt + at * (D + 1),
							bt = B + (gt + 1) + at * (D + 1),
							Ct = B + (gt + 1) + at * D;
						T.push(mt, St, Ct), T.push(St, bt, Ct);
					}
				B += K;
			}
		}
	}
	const rr = "main",
		Ds = (i) => `
  @group(0) @binding(0) var sceneTexture: texture_2d<f32>;
  @group(0) @binding(1) var outTexture: texture_storage_2d<${i}, write>;
  @group(0) @binding(2) var<storage> texSize: vec2u;

  override WORKGROUP_SIZE_X: u32;
  override WORKGROUP_SIZE_Y: u32;

  @compute @workgroup_size(WORKGROUP_SIZE_X, WORKGROUP_SIZE_Y)
  fn ${rr}(@builtin(global_invocation_id) globalInvocationId : vec3<u32>,) {
    let pos = globalInvocationId.xy;

    if (all(pos > texSize)) {
      return;
    }
    let color = textureLoad(sceneTexture, pos, 0);

    textureStore(outTexture, pos, color);
    
  }
`,
		ne = class ne extends ze {
			constructor(t) {
				super(),
					(this.texture = t),
					(this.settingsGpuBuffer = X.device.createBuffer({
						label: "Reflection Pass Settings GPUBuffer",
						size: 4 * Uint32Array.BYTES_PER_ELEMENT,
						usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
					}));
				const e = [
					{ binding: 0, visibility: GPUShaderStage.COMPUTE, texture: {} },
					{
						binding: 1,
						visibility: GPUShaderStage.COMPUTE,
						storageTexture: {
							access: "write-only",
							format: X.pixelFormat,
							viewDimension: "2d",
						},
					},
					{
						binding: 2,
						visibility: GPUShaderStage.COMPUTE,
						buffer: { type: "read-only-storage" },
					},
				];
				(this.computePSOBindGroupLayout = X.device.createBindGroupLayout({
					label: "Reflection Pass ComputePSO Bind Group Layout",
					entries: e,
				})),
					(this.computePSO = _t.createComputePipeline({
						label: "Reflection Pass Compute PSO",
						layout: X.device.createPipelineLayout({
							label: "Reflection PASS ComputePSO Layout",
							bindGroupLayouts: [this.computePSOBindGroupLayout],
						}),
						compute: {
							entryPoint: rr,
							module: _t.createShaderModule(Ds(X.pixelFormat)),
							constants: {
								WORKGROUP_SIZE_X: ne.COMPUTE_WORKGROUP_SIZE_X,
								WORKGROUP_SIZE_Y: ne.COMPUTE_WORKGROUP_SIZE_X,
							},
						},
					}));
			}
			resize(t, e) {
				X.device.queue.writeBuffer(
					this.settingsGpuBuffer,
					0,
					new Uint32Array([t, e]),
				);
			}
			computeReflections(t, e) {
				const r = [
						{ binding: 0, resource: this.texture.createView() },
						{ binding: 1, resource: e },
						{
							binding: 2,
							resource: {
								label: "Settings GPU Buffer Bind Group Entry",
								buffer: this.settingsGpuBuffer,
							},
						},
					],
					h = X.device.createBindGroup({
						label: "Textures Bind Group",
						layout: this.computePSOBindGroupLayout,
						entries: r,
					}),
					g = t.beginComputePass();
				g.setPipeline(this.computePSO),
					g.setBindGroup(0, h),
					g.dispatchWorkgroups(
						Math.ceil(this.texture.width / ne.COMPUTE_WORKGROUP_SIZE_X),
						Math.ceil(this.texture.width / ne.COMPUTE_WORKGROUP_SIZE_Y),
						1,
					),
					g.end();
			}
		};
	(ne.COMPUTE_WORKGROUP_SIZE_X = 16), (ne.COMPUTE_WORKGROUP_SIZE_Y = 16);
	let _n = ne;
	const sr = "blit",
		Fs = `
  @group(0) @binding(0) var sceneTexture: texture_2d<f32>;

  @fragment
  fn ${sr}(@builtin(position) coord : vec4f) -> @location(0) vec4f {
    let color = textureLoad(sceneTexture, vec2i(floor(coord.xy)), 0).xyz;
    return vec4f(color, 1.0);
  }
`;
	class Ls extends ze {
		constructor(t) {
			super(), (this.textureToBlit = t);
			const e = _t.createShaderModule(er),
				r = _t.createShaderModule(Fs),
				h = [{ format: "bgra8unorm" }],
				g = [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, texture: {} }],
				k = X.device.createBindGroupLayout({
					label: "GBuffer Textures Bind Group",
					entries: g,
				}),
				T = [{ binding: 0, resource: t.createView() }],
				I = {
					layout: X.device.createPipelineLayout({ bindGroupLayouts: [k] }),
					vertex: { module: e, entryPoint: ln },
					fragment: { module: r, entryPoint: sr, targets: h },
					primitive: { topology: "triangle-list", cullMode: "back" },
				};
			(this.renderPSO = _t.createRenderPipeline(I)),
				(this.textureBindGroup = X.device.createBindGroup({
					layout: k,
					entries: T,
				}));
		}
		renderFrame(t, e) {
			const r = {
					colorAttachments: [{ view: e, loadOp: "load", storeOp: "store" }],
					label: "Blit Pass",
				},
				h = t.beginRenderPass(r);
			h.setPipeline(this.renderPSO),
				h.setBindGroup(0, this.textureBindGroup),
				h.draw(6),
				h.end();
		}
	}
	class Os extends Ie {
		constructor(
			t = 1,
			e = 32,
			r = 16,
			h = 0,
			g = Math.PI * 2,
			k = 0,
			T = Math.PI,
		) {
			super(),
				(this.radius = t),
				(this.widthSegments = e),
				(this.heightSegments = r),
				(this.phiStart = h),
				(this.phiLength = g),
				(this.thetaStart = k),
				(this.thetaLength = T),
				(e = Math.max(3, Math.floor(e))),
				(r = Math.max(2, Math.floor(r)));
			const I = Math.min(k + T, Math.PI);
			let B = 0;
			const z = [],
				V = ct.create(),
				Y = ct.create(),
				tt = [],
				st = [];
			for (let L = 0; L <= r; L++) {
				const F = [],
					Q = L / r;
				let et = 0;
				L === 0 && k === 0
					? (et = 0.5 / e)
					: L === r && I === Math.PI && (et = -0.5 / e);
				for (let O = 0; O <= e; O++) {
					const W = O / e;
					(V[0] = -t * Math.cos(h + W * g) * Math.sin(k + Q * T)),
						(V[1] = t * Math.cos(k + Q * T)),
						(V[2] = t * Math.sin(h + W * g) * Math.sin(k + Q * T)),
						tt.push(V[0], V[1], V[2]),
						ct.copy(V, Y),
						ct.normalize(Y, Y),
						tt.push(Y[0], Y[1], Y[2]),
						tt.push(W + et, 1 - Q),
						F.push(B++);
				}
				z.push(F);
			}
			for (let L = 0; L < r; L++)
				for (let F = 0; F < e; F++) {
					const Q = z[L][F + 1],
						et = z[L][F],
						O = z[L + 1][F],
						W = z[L + 1][F + 1];
					(L !== 0 || k > 0) && st.push(Q, et, W),
						(L !== r - 1 || I < Math.PI) && st.push(et, O, W);
				}
			this.createBuffers({
				vertexCount: st.length,
				interleavedVertexArr: new Float32Array(tt),
				indicesArr: new Uint16Array(st),
			});
		}
	}
	const vt = class vt {
		constructor() {
			(this.rootTransform = new sn()),
				(this.mainCamera = new Ss(45, 1, vs, ks)),
				this.mainCamera.setPosition(0, 2, 4),
				this.mainCamera.setLookAt(0, 0, 0),
				this.mainCamera.updateViewMatrix(),
				(this.mainCameraCtrl = new Er(this.mainCamera, vt.$canvas, !0)),
				this.mainCameraCtrl.startTick(),
				(this.orthoCamera = new Ts(0, 1, 1, 0, bs, Ms)),
				this.orthoCamera.setPosition(0, 0, 1),
				this.orthoCamera.setLookAt(0, 0, 0),
				this.orthoCamera.updateViewMatrix(),
				(this.orthoCameraBindGroup = vt.device.createBindGroup({
					label: "Ortho Camera Bind Group",
					layout: _t.defaultCameraBindGroupLayout,
					entries: [
						{ binding: 0, resource: { buffer: this.orthoCamera.gpuBuffer } },
					],
				})),
				this.rootTransform.updateWorldMatrix(),
				(this.ground = new qs()),
				this.rootTransform.addChild(this.ground),
				(this.cube = new oe(new Ns(1, 1, 1))),
				(this.cube.material = Be.defaultDeferredMaterial),
				(this.cube.materialProps.isReflective = !1),
				(this.cube.materialProps.baseColor[1] = 1),
				(this.sphere = new oe(new Os())),
				(this.sphere.material = Be.defaultDeferredMaterial),
				(this.sphere.materialProps.baseColor[0] = 1),
				this.sphere
					.setScale(0.5, 0.5, 0.5)
					.setPositionX(2)
					.setPositionZ(1.2)
					.updateWorldMatrix(),
				this.rootTransform.addChild(this.cube),
				this.rootTransform.addChild(this.sphere);
		}
		resize(t, e) {
			const r = t / e;
			(this.mainCamera.aspect = r),
				this.mainCamera.updateProjectionMatrix(),
				(this.orthoCamera.left = 0),
				(this.orthoCamera.right = t),
				(this.orthoCamera.top = e),
				(this.orthoCamera.bottom = 0),
				this.orthoCamera.updateProjectionMatrix(),
				this.gbufferRenderPass ||
					((this.gbufferRenderPass = new Is()),
					this.gbufferRenderPass.setCamera(this.mainCamera)),
				this.gbufferRenderPass.resize(t, e),
				this.gbufferIntegratePass ||
					(this.gbufferIntegratePass = new zs(
						this.gbufferRenderPass.normalReflectanceTextureView,
						this.gbufferRenderPass.colorTextureView,
					)),
				this.gbufferIntegratePass.resize(t, e),
				this.reflectionComputePass ||
					(this.reflectionComputePass = new _n(
						this.gbufferIntegratePass.outTexture,
					)),
				this.reflectionComputePass.resize(t, e),
				this.blitRenderPass ||
					(this.blitRenderPass = new Ls(this.reflectionComputePass.texture)),
				(this.debugReflectanceTextureMesh = new ee(
					Yt.Reflectance,
					this.gbufferRenderPass.normalReflectanceTextureView,
				)),
				(this.debugNormalTextureMesh = new ee(
					Yt.Normal,
					this.gbufferRenderPass.normalReflectanceTextureView,
				)),
				(this.debugColorTextureMesh = new ee(
					Yt.Albedo,
					this.gbufferRenderPass.colorTextureView,
				)),
				(this.debugDepthTextureMesh = new ee(
					Yt.Depth,
					this.gbufferRenderPass.depthTextureView,
				)),
				(this.debugVelocityTextureMesh = new ee(
					Yt.Velocity,
					this.gbufferRenderPass.velocityTextureView,
				));
			const h = t * 0.175,
				g = e * 0.175;
			var k = h * 0.5 + 10;
			const T = [
				this.debugNormalTextureMesh,
				this.debugReflectanceTextureMesh,
				this.debugColorTextureMesh,
				this.debugDepthTextureMesh,
				this.debugVelocityTextureMesh,
			];
			for (const I of T)
				I.setPosition(k, g * 0.5 + 10, 0)
					.setScale(h, g, 1)
					.updateWorldMatrix(),
					(k += h);
		}
		renderFrame(t, e) {
			var I, B, z, V, Y;
			const r = vt.device;
			this.mainCamera.update(),
				this.orthoCamera.update(),
				this.cube
					.setPositionY(0.5)
					.setRotationX(t * 2)
					.updateWorldMatrix(),
				this.sphere
					.setScale(0.5, 0.5, 0.5)
					.setPositionX(Math.cos(t) * 2)
					.setPositionZ(Math.sin(t) * 2)
					.updateWorldMatrix();
			const h = r.createCommandEncoder(),
				g = vt.canvasContext.getCurrentTexture().createView();
			this.gbufferRenderPass.render(h, this.rootTransform),
				this.gbufferIntegratePass.render(h),
				this.reflectionComputePass.computeReflections(h, g);
			const k = {
					colorAttachments: [{ view: g, loadOp: "load", storeOp: "store" }],
					depthStencilAttachment: void 0,
					label: "HUD Render Pass",
				},
				T = h.beginRenderPass(k);
			T.setBindGroup(te.Camera, this.orthoCameraBindGroup),
				(I = this.debugNormalTextureMesh) == null || I.render(T),
				(B = this.debugColorTextureMesh) == null || B.render(T),
				(z = this.debugReflectanceTextureMesh) == null || z.render(T),
				(V = this.debugDepthTextureMesh) == null || V.render(T),
				(Y = this.debugVelocityTextureMesh) == null || Y.render(T),
				T.end(),
				r.queue.submit([h.finish()]),
				this.mainCamera.onFrameEnd(),
				this.orthoCamera.onFrameEnd();
		}
	};
	(vt.depthStencilFormat = "depth32float"),
		(vt.initialize = async (t) => {
			const e = await navigator.gpu.requestAdapter();
			(vt.$canvas = t),
				(vt.canvasContext = t.getContext("webgpu")),
				(vt.pixelFormat = e.features.has("bgra8unorm-storage")
					? navigator.gpu.getPreferredCanvasFormat()
					: "rgba8unorm");
			const r = "bgra8unorm-storage";
			return (
				(vt.device = await e.requestDevice({
					requiredFeatures: vt.pixelFormat === "bgra8unorm" ? [r] : [],
				})),
				vt.canvasContext.configure({
					device: vt.device,
					format: vt.pixelFormat,
					usage:
						GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.STORAGE_BINDING,
				}),
				new vt()
			);
		});
	let X = vt;
	const ye = document.getElementById("c"),
		ir = await X.initialize(ye);
	let ar = 0;
	requestAnimationFrame(or), window.addEventListener("resize", ur), ur();
	function or() {
		const i = performance.now() * 0.001,
			t = i - ar;
		(ar = i), requestAnimationFrame(or), ir.renderFrame(i, t);
	}
	function ur() {
		const i = innerWidth,
			t = innerHeight;
		(ye.width = i),
			(ye.height = t),
			ye.style.setProperty("width", `${i}px`),
			ye.style.setProperty("height", `${t}px`),
			ir.resize(i, t);
	}
})();