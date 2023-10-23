/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const REVISION = '148',
	MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
	TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
	CullFaceNone = 0,
	CullFaceBack = 1,
	CullFaceFront = 2,
	PCFShadowMap = 1,
	PCFSoftShadowMap = 2,
	VSMShadowMap = 3,
	FrontSide = 0,
	BackSide = 1,
	DoubleSide = 2,
	TwoPassDoubleSide = 3,
	NoBlending = 0,
	NormalBlending = 1,
	AdditiveBlending = 2,
	SubtractiveBlending = 3,
	MultiplyBlending = 4,
	CustomBlending = 5,
	AddEquation = 100,
	SubtractEquation = 101,
	ReverseSubtractEquation = 102,
	MinEquation = 103,
	MaxEquation = 104,
	ZeroFactor = 200,
	OneFactor = 201,
	SrcColorFactor = 202,
	OneMinusSrcColorFactor = 203,
	SrcAlphaFactor = 204,
	OneMinusSrcAlphaFactor = 205,
	DstAlphaFactor = 206,
	OneMinusDstAlphaFactor = 207,
	DstColorFactor = 208,
	OneMinusDstColorFactor = 209,
	SrcAlphaSaturateFactor = 210,
	NeverDepth = 0,
	AlwaysDepth = 1,
	LessDepth = 2,
	LessEqualDepth = 3,
	EqualDepth = 4,
	GreaterEqualDepth = 5,
	GreaterDepth = 6,
	NotEqualDepth = 7,
	MultiplyOperation = 0,
	MixOperation = 1,
	AddOperation = 2,
	NoToneMapping = 0,
	LinearToneMapping = 1,
	ReinhardToneMapping = 2,
	CineonToneMapping = 3,
	ACESFilmicToneMapping = 4,
	CustomToneMapping = 5,
	UVMapping = 300,
	CubeReflectionMapping = 301,
	CubeRefractionMapping = 302,
	EquirectangularReflectionMapping = 303,
	EquirectangularRefractionMapping = 304,
	CubeUVReflectionMapping = 306,
	RepeatWrapping = 1e3,
	ClampToEdgeWrapping = 1001,
	MirroredRepeatWrapping = 1002,
	NearestFilter = 1003,
	NearestMipmapNearestFilter = 1004,
	NearestMipMapNearestFilter = 1004,
	NearestMipmapLinearFilter = 1005,
	NearestMipMapLinearFilter = 1005,
	LinearFilter = 1006,
	LinearMipmapNearestFilter = 1007,
	LinearMipMapNearestFilter = 1007,
	LinearMipmapLinearFilter = 1008,
	LinearMipMapLinearFilter = 1008,
	UnsignedByteType = 1009,
	ByteType = 1010,
	ShortType = 1011,
	UnsignedShortType = 1012,
	IntType = 1013,
	UnsignedIntType = 1014,
	FloatType = 1015,
	HalfFloatType = 1016,
	UnsignedShort4444Type = 1017,
	UnsignedShort5551Type = 1018,
	UnsignedInt248Type = 1020,
	AlphaFormat = 1021,
	RGBFormat = 1022,
	RGBAFormat = 1023,
	LuminanceFormat = 1024,
	LuminanceAlphaFormat = 1025,
	DepthFormat = 1026,
	DepthStencilFormat = 1027,
	RedFormat = 1028,
	RedIntegerFormat = 1029,
	RGFormat = 1030,
	RGIntegerFormat = 1031,
	RGBAIntegerFormat = 1033,
	RGB_S3TC_DXT1_Format = 33776,
	RGBA_S3TC_DXT1_Format = 33777,
	RGBA_S3TC_DXT3_Format = 33778,
	RGBA_S3TC_DXT5_Format = 33779,
	RGB_PVRTC_4BPPV1_Format = 35840,
	RGB_PVRTC_2BPPV1_Format = 35841,
	RGBA_PVRTC_4BPPV1_Format = 35842,
	RGBA_PVRTC_2BPPV1_Format = 35843,
	RGB_ETC1_Format = 36196,
	RGB_ETC2_Format = 37492,
	RGBA_ETC2_EAC_Format = 37496,
	RGBA_ASTC_4x4_Format = 37808,
	RGBA_ASTC_5x4_Format = 37809,
	RGBA_ASTC_5x5_Format = 37810,
	RGBA_ASTC_6x5_Format = 37811,
	RGBA_ASTC_6x6_Format = 37812,
	RGBA_ASTC_8x5_Format = 37813,
	RGBA_ASTC_8x6_Format = 37814,
	RGBA_ASTC_8x8_Format = 37815,
	RGBA_ASTC_10x5_Format = 37816,
	RGBA_ASTC_10x6_Format = 37817,
	RGBA_ASTC_10x8_Format = 37818,
	RGBA_ASTC_10x10_Format = 37819,
	RGBA_ASTC_12x10_Format = 37820,
	RGBA_ASTC_12x12_Format = 37821,
	RGBA_BPTC_Format = 36492,
	LinearEncoding = 3e3,
	sRGBEncoding = 3001,
	BasicDepthPacking = 3200,
	RGBADepthPacking = 3201,
	TangentSpaceNormalMap = 0,
	ObjectSpaceNormalMap = 1,
	SRGBColorSpace = 'srgb',
	LinearSRGBColorSpace = 'srgb-linear',
	KeepStencilOp = 7680,
	AlwaysStencilFunc = 519,
	StaticDrawUsage = 35044,
	GLSL3 = '300 es',
	_SRGBAFormat = 1035;
class EventDispatcher {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		const i = this._listeners;
		i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
	}
	hasEventListener(e, t) {
		if (this._listeners === void 0) return !1;
		const i = this._listeners;
		return i[e] !== void 0 && i[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		if (this._listeners === void 0) return;
		const n = this._listeners[e];
		if (n !== void 0) {
			const r = n.indexOf(t);
			r !== -1 && n.splice(r, 1);
		}
	}
	dispatchEvent(e) {
		if (this._listeners === void 0) return;
		const i = this._listeners[e.type];
		if (i !== void 0) {
			e.target = this;
			const n = i.slice(0);
			for (let r = 0, o = n.length; r < o; r++) n[r].call(this, e);
			e.target = null;
		}
	}
}
const _lut = [
	'00',
	'01',
	'02',
	'03',
	'04',
	'05',
	'06',
	'07',
	'08',
	'09',
	'0a',
	'0b',
	'0c',
	'0d',
	'0e',
	'0f',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'1a',
	'1b',
	'1c',
	'1d',
	'1e',
	'1f',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'2a',
	'2b',
	'2c',
	'2d',
	'2e',
	'2f',
	'30',
	'31',
	'32',
	'33',
	'34',
	'35',
	'36',
	'37',
	'38',
	'39',
	'3a',
	'3b',
	'3c',
	'3d',
	'3e',
	'3f',
	'40',
	'41',
	'42',
	'43',
	'44',
	'45',
	'46',
	'47',
	'48',
	'49',
	'4a',
	'4b',
	'4c',
	'4d',
	'4e',
	'4f',
	'50',
	'51',
	'52',
	'53',
	'54',
	'55',
	'56',
	'57',
	'58',
	'59',
	'5a',
	'5b',
	'5c',
	'5d',
	'5e',
	'5f',
	'60',
	'61',
	'62',
	'63',
	'64',
	'65',
	'66',
	'67',
	'68',
	'69',
	'6a',
	'6b',
	'6c',
	'6d',
	'6e',
	'6f',
	'70',
	'71',
	'72',
	'73',
	'74',
	'75',
	'76',
	'77',
	'78',
	'79',
	'7a',
	'7b',
	'7c',
	'7d',
	'7e',
	'7f',
	'80',
	'81',
	'82',
	'83',
	'84',
	'85',
	'86',
	'87',
	'88',
	'89',
	'8a',
	'8b',
	'8c',
	'8d',
	'8e',
	'8f',
	'90',
	'91',
	'92',
	'93',
	'94',
	'95',
	'96',
	'97',
	'98',
	'99',
	'9a',
	'9b',
	'9c',
	'9d',
	'9e',
	'9f',
	'a0',
	'a1',
	'a2',
	'a3',
	'a4',
	'a5',
	'a6',
	'a7',
	'a8',
	'a9',
	'aa',
	'ab',
	'ac',
	'ad',
	'ae',
	'af',
	'b0',
	'b1',
	'b2',
	'b3',
	'b4',
	'b5',
	'b6',
	'b7',
	'b8',
	'b9',
	'ba',
	'bb',
	'bc',
	'bd',
	'be',
	'bf',
	'c0',
	'c1',
	'c2',
	'c3',
	'c4',
	'c5',
	'c6',
	'c7',
	'c8',
	'c9',
	'ca',
	'cb',
	'cc',
	'cd',
	'ce',
	'cf',
	'd0',
	'd1',
	'd2',
	'd3',
	'd4',
	'd5',
	'd6',
	'd7',
	'd8',
	'd9',
	'da',
	'db',
	'dc',
	'dd',
	'de',
	'df',
	'e0',
	'e1',
	'e2',
	'e3',
	'e4',
	'e5',
	'e6',
	'e7',
	'e8',
	'e9',
	'ea',
	'eb',
	'ec',
	'ed',
	'ee',
	'ef',
	'f0',
	'f1',
	'f2',
	'f3',
	'f4',
	'f5',
	'f6',
	'f7',
	'f8',
	'f9',
	'fa',
	'fb',
	'fc',
	'fd',
	'fe',
	'ff',
];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180,
	RAD2DEG = 180 / Math.PI;
function generateUUID() {
	const s = (Math.random() * 4294967295) | 0,
		e = (Math.random() * 4294967295) | 0,
		t = (Math.random() * 4294967295) | 0,
		i = (Math.random() * 4294967295) | 0;
	return (_lut[s & 255] + _lut[(s >> 8) & 255] + _lut[(s >> 16) & 255] + _lut[(s >> 24) & 255] + '-' + _lut[e & 255] + _lut[(e >> 8) & 255] + '-' + _lut[((e >> 16) & 15) | 64] + _lut[(e >> 24) & 255] + '-' + _lut[(t & 63) | 128] + _lut[(t >> 8) & 255] + '-' + _lut[(t >> 16) & 255] + _lut[(t >> 24) & 255] + _lut[i & 255] + _lut[(i >> 8) & 255] + _lut[(i >> 16) & 255] + _lut[(i >> 24) & 255]).toLowerCase();
}
function clamp(s, e, t) {
	return Math.max(e, Math.min(t, s));
}
function euclideanModulo(s, e) {
	return ((s % e) + e) % e;
}
function mapLinear(s, e, t, i, n) {
	return i + ((s - e) * (n - i)) / (t - e);
}
function inverseLerp(s, e, t) {
	return s !== e ? (t - s) / (e - s) : 0;
}
function lerp(s, e, t) {
	return (1 - t) * s + t * e;
}
function damp(s, e, t, i) {
	return lerp(s, e, 1 - Math.exp(-t * i));
}
function pingpong(s, e = 1) {
	return e - Math.abs(euclideanModulo(s, e * 2) - e);
}
function smoothstep(s, e, t) {
	return s <= e ? 0 : s >= t ? 1 : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function smootherstep(s, e, t) {
	return s <= e ? 0 : s >= t ? 1 : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function randInt(s, e) {
	return s + Math.floor(Math.random() * (e - s + 1));
}
function randFloat(s, e) {
	return s + Math.random() * (e - s);
}
function randFloatSpread(s) {
	return s * (0.5 - Math.random());
}
function seededRandom(s) {
	s !== void 0 && (_seed = s);
	let e = (_seed += 1831565813);
	return (e = Math.imul(e ^ (e >>> 15), e | 1)), (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)), ((e ^ (e >>> 14)) >>> 0) / 4294967296;
}
function degToRad(s) {
	return s * DEG2RAD;
}
function radToDeg(s) {
	return s * RAD2DEG;
}
function isPowerOfTwo(s) {
	return (s & (s - 1)) === 0 && s !== 0;
}
function ceilPowerOfTwo(s) {
	return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function floorPowerOfTwo(s) {
	return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function setQuaternionFromProperEuler(s, e, t, i, n) {
	const r = Math.cos,
		o = Math.sin,
		a = r(t / 2),
		c = o(t / 2),
		l = r((e + i) / 2),
		u = o((e + i) / 2),
		h = r((e - i) / 2),
		d = o((e - i) / 2),
		m = r((i - e) / 2),
		g = o((i - e) / 2);
	switch (n) {
		case 'XYX':
			s.set(a * u, c * h, c * d, a * l);
			break;
		case 'YZY':
			s.set(c * d, a * u, c * h, a * l);
			break;
		case 'ZXZ':
			s.set(c * h, c * d, a * u, a * l);
			break;
		case 'XZX':
			s.set(a * u, c * g, c * m, a * l);
			break;
		case 'YXY':
			s.set(c * m, a * u, c * g, a * l);
			break;
		case 'ZYZ':
			s.set(c * g, c * m, a * u, a * l);
			break;
		default:
			console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + n);
	}
}
function denormalize(s, e) {
	switch (e.constructor) {
		case Float32Array:
			return s;
		case Uint16Array:
			return s / 65535;
		case Uint8Array:
			return s / 255;
		case Int16Array:
			return Math.max(s / 32767, -1);
		case Int8Array:
			return Math.max(s / 127, -1);
		default:
			throw new Error('Invalid component type.');
	}
}
function normalize(s, e) {
	switch (e.constructor) {
		case Float32Array:
			return s;
		case Uint16Array:
			return Math.round(s * 65535);
		case Uint8Array:
			return Math.round(s * 255);
		case Int16Array:
			return Math.round(s * 32767);
		case Int8Array:
			return Math.round(s * 127);
		default:
			throw new Error('Invalid component type.');
	}
}
var MathUtils$1 = Object.freeze({ __proto__: null, DEG2RAD, RAD2DEG, generateUUID, clamp, euclideanModulo, mapLinear, inverseLerp, lerp, damp, pingpong, smoothstep, smootherstep, randInt, randFloat, randFloatSpread, seededRandom, degToRad, radToDeg, isPowerOfTwo, ceilPowerOfTwo, floorPowerOfTwo, setQuaternionFromProperEuler, normalize, denormalize });
class Vector2 {
	constructor(e = 0, t = 0) {
		(Vector2.prototype.isVector2 = !0), (this.x = e), (this.y = t);
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return (this.x = e), (this.y = t), this;
	}
	setScalar(e) {
		return (this.x = e), (this.y = e), this;
	}
	setX(e) {
		return (this.x = e), this;
	}
	setY(e) {
		return (this.y = e), this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			default:
				throw new Error('index is out of range: ' + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return (this.x = e.x), (this.y = e.y), this;
	}
	add(e) {
		return (this.x += e.x), (this.y += e.y), this;
	}
	addScalar(e) {
		return (this.x += e), (this.y += e), this;
	}
	addVectors(e, t) {
		return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
	}
	addScaledVector(e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), this;
	}
	sub(e) {
		return (this.x -= e.x), (this.y -= e.y), this;
	}
	subScalar(e) {
		return (this.x -= e), (this.y -= e), this;
	}
	subVectors(e, t) {
		return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
	}
	multiply(e) {
		return (this.x *= e.x), (this.y *= e.y), this;
	}
	multiplyScalar(e) {
		return (this.x *= e), (this.y *= e), this;
	}
	divide(e) {
		return (this.x /= e.x), (this.y /= e.y), this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		const t = this.x,
			i = this.y,
			n = e.elements;
		return (this.x = n[0] * t + n[3] * i + n[6]), (this.y = n[1] * t + n[4] * i + n[7]), this;
	}
	min(e) {
		return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
	}
	max(e) {
		return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
	}
	clamp(e, t) {
		return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), this;
	}
	clampScalar(e, t) {
		return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this;
	}
	clampLength(e, t) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
	}
	floor() {
		return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
	}
	ceil() {
		return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
	}
	round() {
		return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
	}
	roundToZero() {
		return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
	}
	negate() {
		return (this.x = -this.x), (this.y = -this.y), this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		const t = this.x - e.x,
			i = this.y - e.y;
		return t * t + i * i;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
	}
	lerpVectors(e, t, i) {
		return (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return (this.x = e[t]), (this.y = e[t + 1]), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this.x), (e[t + 1] = this.y), e;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
	}
	rotateAround(e, t) {
		const i = Math.cos(t),
			n = Math.sin(t),
			r = this.x - e.x,
			o = this.y - e.y;
		return (this.x = r * i - o * n + e.x), (this.y = r * n + o * i + e.y), this;
	}
	random() {
		return (this.x = Math.random()), (this.y = Math.random()), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}
class Matrix3 {
	constructor() {
		(Matrix3.prototype.isMatrix3 = !0), (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
	}
	set(e, t, i, n, r, o, a, c, l) {
		const u = this.elements;
		return (u[0] = e), (u[1] = n), (u[2] = a), (u[3] = t), (u[4] = r), (u[5] = c), (u[6] = i), (u[7] = o), (u[8] = l), this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		const t = this.elements,
			i = e.elements;
		return (t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), (t[3] = i[3]), (t[4] = i[4]), (t[5] = i[5]), (t[6] = i[6]), (t[7] = i[7]), (t[8] = i[8]), this;
	}
	extractBasis(e, t, i) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		const t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		const i = e.elements,
			n = t.elements,
			r = this.elements,
			o = i[0],
			a = i[3],
			c = i[6],
			l = i[1],
			u = i[4],
			h = i[7],
			d = i[2],
			m = i[5],
			g = i[8],
			p = n[0],
			f = n[3],
			_ = n[6],
			T = n[1],
			x = n[4],
			S = n[7],
			b = n[2],
			E = n[5],
			A = n[8];
		return (r[0] = o * p + a * T + c * b), (r[3] = o * f + a * x + c * E), (r[6] = o * _ + a * S + c * A), (r[1] = l * p + u * T + h * b), (r[4] = l * f + u * x + h * E), (r[7] = l * _ + u * S + h * A), (r[2] = d * p + m * T + g * b), (r[5] = d * f + m * x + g * E), (r[8] = d * _ + m * S + g * A), this;
	}
	multiplyScalar(e) {
		const t = this.elements;
		return (t[0] *= e), (t[3] *= e), (t[6] *= e), (t[1] *= e), (t[4] *= e), (t[7] *= e), (t[2] *= e), (t[5] *= e), (t[8] *= e), this;
	}
	determinant() {
		const e = this.elements,
			t = e[0],
			i = e[1],
			n = e[2],
			r = e[3],
			o = e[4],
			a = e[5],
			c = e[6],
			l = e[7],
			u = e[8];
		return t * o * u - t * a * l - i * r * u + i * a * c + n * r * l - n * o * c;
	}
	invert() {
		const e = this.elements,
			t = e[0],
			i = e[1],
			n = e[2],
			r = e[3],
			o = e[4],
			a = e[5],
			c = e[6],
			l = e[7],
			u = e[8],
			h = u * o - a * l,
			d = a * c - u * r,
			m = l * r - o * c,
			g = t * h + i * d + n * m;
		if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const p = 1 / g;
		return (e[0] = h * p), (e[1] = (n * l - u * i) * p), (e[2] = (a * i - n * o) * p), (e[3] = d * p), (e[4] = (u * t - n * c) * p), (e[5] = (n * r - a * t) * p), (e[6] = m * p), (e[7] = (i * c - l * t) * p), (e[8] = (o * t - i * r) * p), this;
	}
	transpose() {
		let e;
		const t = this.elements;
		return (e = t[1]), (t[1] = t[3]), (t[3] = e), (e = t[2]), (t[2] = t[6]), (t[6] = e), (e = t[5]), (t[5] = t[7]), (t[7] = e), this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		const t = this.elements;
		return (e[0] = t[0]), (e[1] = t[3]), (e[2] = t[6]), (e[3] = t[1]), (e[4] = t[4]), (e[5] = t[7]), (e[6] = t[2]), (e[7] = t[5]), (e[8] = t[8]), this;
	}
	setUvTransform(e, t, i, n, r, o, a) {
		const c = Math.cos(r),
			l = Math.sin(r);
		return this.set(i * c, i * l, -i * (c * o + l * a) + o + e, -n * l, n * c, -n * (-l * o + c * a) + a + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(_m3.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(_m3.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(_m3.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		const t = Math.cos(e),
			i = Math.sin(e);
		return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		const t = this.elements,
			i = e.elements;
		for (let n = 0; n < 9; n++) if (t[n] !== i[n]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
		return this;
	}
	toArray(e = [], t = 0) {
		const i = this.elements;
		return (e[t] = i[0]), (e[t + 1] = i[1]), (e[t + 2] = i[2]), (e[t + 3] = i[3]), (e[t + 4] = i[4]), (e[t + 5] = i[5]), (e[t + 6] = i[6]), (e[t + 7] = i[7]), (e[t + 8] = i[8]), e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}
const _m3 = new Matrix3();
function arrayNeedsUint32(s) {
	for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
	return !1;
}
function createElementNS(s) {
	return document.createElementNS('http://www.w3.org/1999/xhtml', s);
}
function SRGBToLinear(s) {
	return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(s) {
	return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const FN = { [SRGBColorSpace]: { [LinearSRGBColorSpace]: SRGBToLinear }, [LinearSRGBColorSpace]: { [SRGBColorSpace]: LinearToSRGB } },
	ColorManagement = {
		legacyMode: !0,
		get workingColorSpace() {
			return LinearSRGBColorSpace;
		},
		set workingColorSpace(s) {
			console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
		},
		convert: function (s, e, t) {
			if (this.legacyMode || e === t || !e || !t) return s;
			if (FN[e] && FN[e][t] !== void 0) {
				const i = FN[e][t];
				return (s.r = i(s.r)), (s.g = i(s.g)), (s.b = i(s.b)), s;
			}
			throw new Error('Unsupported color space conversion.');
		},
		fromWorkingColorSpace: function (s, e) {
			return this.convert(s, this.workingColorSpace, e);
		},
		toWorkingColorSpace: function (s, e) {
			return this.convert(s, e, this.workingColorSpace);
		},
	},
	_colorKeywords = {
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
	},
	_rgb$1 = { r: 0, g: 0, b: 0 },
	_hslA = { h: 0, s: 0, l: 0 },
	_hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(s, e, t) {
	return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
function toComponents(s, e) {
	return (e.r = s.r), (e.g = s.g), (e.b = s.b), e;
}
class Color {
	constructor(e, t, i) {
		return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), t === void 0 && i === void 0 ? this.set(e) : this.setRGB(e, t, i);
	}
	set(e) {
		return e && e.isColor ? this.copy(e) : typeof e == 'number' ? this.setHex(e) : typeof e == 'string' && this.setStyle(e), this;
	}
	setScalar(e) {
		return (this.r = e), (this.g = e), (this.b = e), this;
	}
	setHex(e, t = SRGBColorSpace) {
		return (e = Math.floor(e)), (this.r = ((e >> 16) & 255) / 255), (this.g = ((e >> 8) & 255) / 255), (this.b = (e & 255) / 255), ColorManagement.toWorkingColorSpace(this, t), this;
	}
	setRGB(e, t, i, n = ColorManagement.workingColorSpace) {
		return (this.r = e), (this.g = t), (this.b = i), ColorManagement.toWorkingColorSpace(this, n), this;
	}
	setHSL(e, t, i, n = ColorManagement.workingColorSpace) {
		if (((e = euclideanModulo(e, 1)), (t = clamp(t, 0, 1)), (i = clamp(i, 0, 1)), t === 0)) this.r = this.g = this.b = i;
		else {
			const r = i <= 0.5 ? i * (1 + t) : i + t - i * t,
				o = 2 * i - r;
			(this.r = hue2rgb(o, r, e + 1 / 3)), (this.g = hue2rgb(o, r, e)), (this.b = hue2rgb(o, r, e - 1 / 3));
		}
		return ColorManagement.toWorkingColorSpace(this, n), this;
	}
	setStyle(e, t = SRGBColorSpace) {
		function i(r) {
			r !== void 0 && parseFloat(r) < 1 && console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.');
		}
		let n;
		if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
			let r;
			const o = n[1],
				a = n[2];
			switch (o) {
				case 'rgb':
				case 'rgba':
					if ((r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) return (this.r = Math.min(255, parseInt(r[1], 10)) / 255), (this.g = Math.min(255, parseInt(r[2], 10)) / 255), (this.b = Math.min(255, parseInt(r[3], 10)) / 255), ColorManagement.toWorkingColorSpace(this, t), i(r[4]), this;
					if ((r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) return (this.r = Math.min(100, parseInt(r[1], 10)) / 100), (this.g = Math.min(100, parseInt(r[2], 10)) / 100), (this.b = Math.min(100, parseInt(r[3], 10)) / 100), ColorManagement.toWorkingColorSpace(this, t), i(r[4]), this;
					break;
				case 'hsl':
				case 'hsla':
					if ((r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))) {
						const c = parseFloat(r[1]) / 360,
							l = parseFloat(r[2]) / 100,
							u = parseFloat(r[3]) / 100;
						return i(r[4]), this.setHSL(c, l, u, t);
					}
					break;
			}
		} else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
			const r = n[1],
				o = r.length;
			if (o === 3) return (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255), (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255), (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255), ColorManagement.toWorkingColorSpace(this, t), this;
			if (o === 6) return (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255), (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255), (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255), ColorManagement.toWorkingColorSpace(this, t), this;
		}
		return e && e.length > 0 ? this.setColorName(e, t) : this;
	}
	setColorName(e, t = SRGBColorSpace) {
		const i = _colorKeywords[e.toLowerCase()];
		return i !== void 0 ? this.setHex(i, t) : console.warn('THREE.Color: Unknown color ' + e), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
	}
	copySRGBToLinear(e) {
		return (this.r = SRGBToLinear(e.r)), (this.g = SRGBToLinear(e.g)), (this.b = SRGBToLinear(e.b)), this;
	}
	copyLinearToSRGB(e) {
		return (this.r = LinearToSRGB(e.r)), (this.g = LinearToSRGB(e.g)), (this.b = LinearToSRGB(e.b)), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = SRGBColorSpace) {
		return ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb$1), e), (clamp(_rgb$1.r * 255, 0, 255) << 16) ^ (clamp(_rgb$1.g * 255, 0, 255) << 8) ^ (clamp(_rgb$1.b * 255, 0, 255) << 0);
	}
	getHexString(e = SRGBColorSpace) {
		return ('000000' + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = ColorManagement.workingColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb$1), t);
		const i = _rgb$1.r,
			n = _rgb$1.g,
			r = _rgb$1.b,
			o = Math.max(i, n, r),
			a = Math.min(i, n, r);
		let c, l;
		const u = (a + o) / 2;
		if (a === o) (c = 0), (l = 0);
		else {
			const h = o - a;
			switch (((l = u <= 0.5 ? h / (o + a) : h / (2 - o - a)), o)) {
				case i:
					c = (n - r) / h + (n < r ? 6 : 0);
					break;
				case n:
					c = (r - i) / h + 2;
					break;
				case r:
					c = (i - n) / h + 4;
					break;
			}
			c /= 6;
		}
		return (e.h = c), (e.s = l), (e.l = u), e;
	}
	getRGB(e, t = ColorManagement.workingColorSpace) {
		return ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb$1), t), (e.r = _rgb$1.r), (e.g = _rgb$1.g), (e.b = _rgb$1.b), e;
	}
	getStyle(e = SRGBColorSpace) {
		return ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb$1), e), e !== SRGBColorSpace ? `color(${e} ${_rgb$1.r} ${_rgb$1.g} ${_rgb$1.b})` : `rgb(${(_rgb$1.r * 255) | 0},${(_rgb$1.g * 255) | 0},${(_rgb$1.b * 255) | 0})`;
	}
	offsetHSL(e, t, i) {
		return this.getHSL(_hslA), (_hslA.h += e), (_hslA.s += t), (_hslA.l += i), this.setHSL(_hslA.h, _hslA.s, _hslA.l), this;
	}
	add(e) {
		return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
	}
	addColors(e, t) {
		return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
	}
	addScalar(e) {
		return (this.r += e), (this.g += e), (this.b += e), this;
	}
	sub(e) {
		return (this.r = Math.max(0, this.r - e.r)), (this.g = Math.max(0, this.g - e.g)), (this.b = Math.max(0, this.b - e.b)), this;
	}
	multiply(e) {
		return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
	}
	multiplyScalar(e) {
		return (this.r *= e), (this.g *= e), (this.b *= e), this;
	}
	lerp(e, t) {
		return (this.r += (e.r - this.r) * t), (this.g += (e.g - this.g) * t), (this.b += (e.b - this.b) * t), this;
	}
	lerpColors(e, t, i) {
		return (this.r = e.r + (t.r - e.r) * i), (this.g = e.g + (t.g - e.g) * i), (this.b = e.b + (t.b - e.b) * i), this;
	}
	lerpHSL(e, t) {
		this.getHSL(_hslA), e.getHSL(_hslB);
		const i = lerp(_hslA.h, _hslB.h, t),
			n = lerp(_hslA.s, _hslB.s, t),
			r = lerp(_hslA.l, _hslB.l, t);
		return this.setHSL(i, n, r), this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
	}
	fromBufferAttribute(e, t) {
		return (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}
Color.NAMES = _colorKeywords;
let _canvas;
class ImageUtils {
	static getDataURL(e) {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
		let t;
		if (e instanceof HTMLCanvasElement) t = e;
		else {
			_canvas === void 0 && (_canvas = createElementNS('canvas')), (_canvas.width = e.width), (_canvas.height = e.height);
			const i = _canvas.getContext('2d');
			e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), (t = _canvas);
		}
		return t.width > 2048 || t.height > 2048 ? (console.warn('THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', e), t.toDataURL('image/jpeg', 0.6)) : t.toDataURL('image/png');
	}
	static sRGBToLinear(e) {
		if ((typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) || (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) || (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)) {
			const t = createElementNS('canvas');
			(t.width = e.width), (t.height = e.height);
			const i = t.getContext('2d');
			i.drawImage(e, 0, 0, e.width, e.height);
			const n = i.getImageData(0, 0, e.width, e.height),
				r = n.data;
			for (let o = 0; o < r.length; o++) r[o] = SRGBToLinear(r[o] / 255) * 255;
			return i.putImageData(n, 0, 0), t;
		} else if (e.data) {
			const t = e.data.slice(0);
			for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? (t[i] = Math.floor(SRGBToLinear(t[i] / 255) * 255)) : (t[i] = SRGBToLinear(t[i]));
			return { data: t, width: e.width, height: e.height };
		} else return console.warn('THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'), e;
	}
}
class Source {
	constructor(e = null) {
		(this.isSource = !0), (this.uuid = generateUUID()), (this.data = e), (this.version = 0);
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == 'string';
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		const i = { uuid: this.uuid, url: '' },
			n = this.data;
		if (n !== null) {
			let r;
			if (Array.isArray(n)) {
				r = [];
				for (let o = 0, a = n.length; o < a; o++) n[o].isDataTexture ? r.push(serializeImage(n[o].image)) : r.push(serializeImage(n[o]));
			} else r = serializeImage(n);
			i.url = r;
		}
		return t || (e.images[this.uuid] = i), i;
	}
}
function serializeImage(s) {
	return (typeof HTMLImageElement < 'u' && s instanceof HTMLImageElement) || (typeof HTMLCanvasElement < 'u' && s instanceof HTMLCanvasElement) || (typeof ImageBitmap < 'u' && s instanceof ImageBitmap) ? ImageUtils.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let textureId = 0;
class Texture extends EventDispatcher {
	constructor(e = Texture.DEFAULT_IMAGE, t = Texture.DEFAULT_MAPPING, i = ClampToEdgeWrapping, n = ClampToEdgeWrapping, r = LinearFilter, o = LinearMipmapLinearFilter, a = RGBAFormat, c = UnsignedByteType, l = Texture.DEFAULT_ANISOTROPY, u = LinearEncoding) {
		super(), (this.isTexture = !0), Object.defineProperty(this, 'id', { value: textureId++ }), (this.uuid = generateUUID()), (this.name = ''), (this.source = new Source(e)), (this.mipmaps = []), (this.mapping = t), (this.wrapS = i), (this.wrapT = n), (this.magFilter = r), (this.minFilter = o), (this.anisotropy = l), (this.format = a), (this.internalFormat = null), (this.type = c), (this.offset = new Vector2(0, 0)), (this.repeat = new Vector2(1, 1)), (this.center = new Vector2(0, 0)), (this.rotation = 0), (this.matrixAutoUpdate = !0), (this.matrix = new Matrix3()), (this.generateMipmaps = !0), (this.premultiplyAlpha = !1), (this.flipY = !0), (this.unpackAlignment = 4), (this.encoding = u), (this.userData = {}), (this.version = 0), (this.onUpdate = null), (this.isRenderTargetTexture = !1), (this.needsPMREMUpdate = !1);
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return (this.name = e.name), (this.source = e.source), (this.mipmaps = e.mipmaps.slice(0)), (this.mapping = e.mapping), (this.wrapS = e.wrapS), (this.wrapT = e.wrapT), (this.magFilter = e.magFilter), (this.minFilter = e.minFilter), (this.anisotropy = e.anisotropy), (this.format = e.format), (this.internalFormat = e.internalFormat), (this.type = e.type), this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), (this.rotation = e.rotation), (this.matrixAutoUpdate = e.matrixAutoUpdate), this.matrix.copy(e.matrix), (this.generateMipmaps = e.generateMipmaps), (this.premultiplyAlpha = e.premultiplyAlpha), (this.flipY = e.flipY), (this.unpackAlignment = e.unpackAlignment), (this.encoding = e.encoding), (this.userData = JSON.parse(JSON.stringify(e.userData))), (this.needsUpdate = !0), this;
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == 'string';
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		const i = { metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
		return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
	}
	dispose() {
		this.dispatchEvent({ type: 'dispose' });
	}
	transformUv(e) {
		if (this.mapping !== UVMapping) return e;
		if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
			switch (this.wrapS) {
				case RepeatWrapping:
					e.x = e.x - Math.floor(e.x);
					break;
				case ClampToEdgeWrapping:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case MirroredRepeatWrapping:
					Math.abs(Math.floor(e.x) % 2) === 1 ? (e.x = Math.ceil(e.x) - e.x) : (e.x = e.x - Math.floor(e.x));
					break;
			}
		if (e.y < 0 || e.y > 1)
			switch (this.wrapT) {
				case RepeatWrapping:
					e.y = e.y - Math.floor(e.y);
					break;
				case ClampToEdgeWrapping:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case MirroredRepeatWrapping:
					Math.abs(Math.floor(e.y) % 2) === 1 ? (e.y = Math.ceil(e.y) - e.y) : (e.y = e.y - Math.floor(e.y));
					break;
			}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, (this.source.needsUpdate = !0));
	}
}
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
class Vector4 {
	constructor(e = 0, t = 0, i = 0, n = 1) {
		(Vector4.prototype.isVector4 = !0), (this.x = e), (this.y = t), (this.z = i), (this.w = n);
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, i, n) {
		return (this.x = e), (this.y = t), (this.z = i), (this.w = n), this;
	}
	setScalar(e) {
		return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
	}
	setX(e) {
		return (this.x = e), this;
	}
	setY(e) {
		return (this.y = e), this;
	}
	setZ(e) {
		return (this.z = e), this;
	}
	setW(e) {
		return (this.w = e), this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			case 3:
				return this.w;
			default:
				throw new Error('index is out of range: ' + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this;
	}
	add(e) {
		return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
	}
	addScalar(e) {
		return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
	}
	addVectors(e, t) {
		return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this;
	}
	addScaledVector(e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
	}
	sub(e) {
		return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
	}
	subScalar(e) {
		return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
	}
	subVectors(e, t) {
		return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this;
	}
	multiply(e) {
		return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
	}
	multiplyScalar(e) {
		return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
	}
	applyMatrix4(e) {
		const t = this.x,
			i = this.y,
			n = this.z,
			r = this.w,
			o = e.elements;
		return (this.x = o[0] * t + o[4] * i + o[8] * n + o[12] * r), (this.y = o[1] * t + o[5] * i + o[9] * n + o[13] * r), (this.z = o[2] * t + o[6] * i + o[10] * n + o[14] * r), (this.w = o[3] * t + o[7] * i + o[11] * n + o[15] * r), this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		const t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? ((this.x = 1), (this.y = 0), (this.z = 0)) : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, i, n, r;
		const c = e.elements,
			l = c[0],
			u = c[4],
			h = c[8],
			d = c[1],
			m = c[5],
			g = c[9],
			p = c[2],
			f = c[6],
			_ = c[10];
		if (Math.abs(u - d) < 0.01 && Math.abs(h - p) < 0.01 && Math.abs(g - f) < 0.01) {
			if (Math.abs(u + d) < 0.1 && Math.abs(h + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + m + _ - 3) < 0.1) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			const x = (l + 1) / 2,
				S = (m + 1) / 2,
				b = (_ + 1) / 2,
				E = (u + d) / 4,
				A = (h + p) / 4,
				v = (g + f) / 4;
			return x > S && x > b ? (x < 0.01 ? ((i = 0), (n = 0.707106781), (r = 0.707106781)) : ((i = Math.sqrt(x)), (n = E / i), (r = A / i))) : S > b ? (S < 0.01 ? ((i = 0.707106781), (n = 0), (r = 0.707106781)) : ((n = Math.sqrt(S)), (i = E / n), (r = v / n))) : b < 0.01 ? ((i = 0.707106781), (n = 0.707106781), (r = 0)) : ((r = Math.sqrt(b)), (i = A / r), (n = v / r)), this.set(i, n, r, t), this;
		}
		let T = Math.sqrt((f - g) * (f - g) + (h - p) * (h - p) + (d - u) * (d - u));
		return Math.abs(T) < 0.001 && (T = 1), (this.x = (f - g) / T), (this.y = (h - p) / T), (this.z = (d - u) / T), (this.w = Math.acos((l + m + _ - 1) / 2)), this;
	}
	min(e) {
		return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), (this.w = Math.min(this.w, e.w)), this;
	}
	max(e) {
		return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), (this.w = Math.max(this.w, e.w)), this;
	}
	clamp(e, t) {
		return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), (this.z = Math.max(e.z, Math.min(t.z, this.z))), (this.w = Math.max(e.w, Math.min(t.w, this.w))), this;
	}
	clampScalar(e, t) {
		return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), (this.w = Math.max(e, Math.min(t, this.w))), this;
	}
	clampLength(e, t) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
	}
	floor() {
		return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), (this.w = Math.floor(this.w)), this;
	}
	ceil() {
		return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), (this.w = Math.ceil(this.w)), this;
	}
	round() {
		return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), (this.w = Math.round(this.w)), this;
	}
	roundToZero() {
		return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)), (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)), this;
	}
	negate() {
		return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), (this.w += (e.w - this.w) * t), this;
	}
	lerpVectors(e, t, i) {
		return (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), (this.z = e.z + (t.z - e.z) * i), (this.w = e.w + (t.w - e.w) * i), this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
	}
	random() {
		return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}
class WebGLRenderTarget extends EventDispatcher {
	constructor(e = 1, t = 1, i = {}) {
		super(), (this.isWebGLRenderTarget = !0), (this.width = e), (this.height = t), (this.depth = 1), (this.scissor = new Vector4(0, 0, e, t)), (this.scissorTest = !1), (this.viewport = new Vector4(0, 0, e, t));
		const n = { width: e, height: t, depth: 1 };
		(this.texture = new Texture(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding)), (this.texture.isRenderTargetTexture = !0), (this.texture.flipY = !1), (this.texture.generateMipmaps = i.generateMipmaps !== void 0 ? i.generateMipmaps : !1), (this.texture.internalFormat = i.internalFormat !== void 0 ? i.internalFormat : null), (this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : LinearFilter), (this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0), (this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1), (this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null), (this.samples = i.samples !== void 0 ? i.samples : 0);
	}
	setSize(e, t, i = 1) {
		(this.width !== e || this.height !== t || this.depth !== i) && ((this.width = e), (this.height = t), (this.depth = i), (this.texture.image.width = e), (this.texture.image.height = t), (this.texture.image.depth = i), this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		(this.width = e.width), (this.height = e.height), (this.depth = e.depth), this.viewport.copy(e.viewport), (this.texture = e.texture.clone()), (this.texture.isRenderTargetTexture = !0);
		const t = Object.assign({}, e.texture.image);
		return (this.texture.source = new Source(t)), (this.depthBuffer = e.depthBuffer), (this.stencilBuffer = e.stencilBuffer), e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), (this.samples = e.samples), this;
	}
	dispose() {
		this.dispatchEvent({ type: 'dispose' });
	}
}
class DataArrayTexture extends Texture {
	constructor(e = null, t = 1, i = 1, n = 1) {
		super(null), (this.isDataArrayTexture = !0), (this.image = { data: e, width: t, height: i, depth: n }), (this.magFilter = NearestFilter), (this.minFilter = NearestFilter), (this.wrapR = ClampToEdgeWrapping), (this.generateMipmaps = !1), (this.flipY = !1), (this.unpackAlignment = 1);
	}
}
class Data3DTexture extends Texture {
	constructor(e = null, t = 1, i = 1, n = 1) {
		super(null), (this.isData3DTexture = !0), (this.image = { data: e, width: t, height: i, depth: n }), (this.magFilter = NearestFilter), (this.minFilter = NearestFilter), (this.wrapR = ClampToEdgeWrapping), (this.generateMipmaps = !1), (this.flipY = !1), (this.unpackAlignment = 1);
	}
}
class Quaternion {
	constructor(e = 0, t = 0, i = 0, n = 1) {
		(this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = i), (this._w = n);
	}
	static slerpFlat(e, t, i, n, r, o, a) {
		let c = i[n + 0],
			l = i[n + 1],
			u = i[n + 2],
			h = i[n + 3];
		const d = r[o + 0],
			m = r[o + 1],
			g = r[o + 2],
			p = r[o + 3];
		if (a === 0) {
			(e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
			return;
		}
		if (a === 1) {
			(e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = p);
			return;
		}
		if (h !== p || c !== d || l !== m || u !== g) {
			let f = 1 - a;
			const _ = c * d + l * m + u * g + h * p,
				T = _ >= 0 ? 1 : -1,
				x = 1 - _ * _;
			if (x > Number.EPSILON) {
				const b = Math.sqrt(x),
					E = Math.atan2(b, _ * T);
				(f = Math.sin(f * E) / b), (a = Math.sin(a * E) / b);
			}
			const S = a * T;
			if (((c = c * f + d * S), (l = l * f + m * S), (u = u * f + g * S), (h = h * f + p * S), f === 1 - a)) {
				const b = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
				(c *= b), (l *= b), (u *= b), (h *= b);
			}
		}
		(e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
	}
	static multiplyQuaternionsFlat(e, t, i, n, r, o) {
		const a = i[n],
			c = i[n + 1],
			l = i[n + 2],
			u = i[n + 3],
			h = r[o],
			d = r[o + 1],
			m = r[o + 2],
			g = r[o + 3];
		return (e[t] = a * g + u * h + c * m - l * d), (e[t + 1] = c * g + u * d + l * h - a * m), (e[t + 2] = l * g + u * m + a * d - c * h), (e[t + 3] = u * g - a * h - c * d - l * m), e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		(this._x = e), this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		(this._y = e), this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		(this._z = e), this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		(this._w = e), this._onChangeCallback();
	}
	set(e, t, i, n) {
		return (this._x = e), (this._y = t), (this._z = i), (this._w = n), this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return (this._x = e.x), (this._y = e.y), (this._z = e.z), (this._w = e.w), this._onChangeCallback(), this;
	}
	setFromEuler(e, t) {
		const i = e._x,
			n = e._y,
			r = e._z,
			o = e._order,
			a = Math.cos,
			c = Math.sin,
			l = a(i / 2),
			u = a(n / 2),
			h = a(r / 2),
			d = c(i / 2),
			m = c(n / 2),
			g = c(r / 2);
		switch (o) {
			case 'XYZ':
				(this._x = d * u * h + l * m * g), (this._y = l * m * h - d * u * g), (this._z = l * u * g + d * m * h), (this._w = l * u * h - d * m * g);
				break;
			case 'YXZ':
				(this._x = d * u * h + l * m * g), (this._y = l * m * h - d * u * g), (this._z = l * u * g - d * m * h), (this._w = l * u * h + d * m * g);
				break;
			case 'ZXY':
				(this._x = d * u * h - l * m * g), (this._y = l * m * h + d * u * g), (this._z = l * u * g + d * m * h), (this._w = l * u * h - d * m * g);
				break;
			case 'ZYX':
				(this._x = d * u * h - l * m * g), (this._y = l * m * h + d * u * g), (this._z = l * u * g - d * m * h), (this._w = l * u * h + d * m * g);
				break;
			case 'YZX':
				(this._x = d * u * h + l * m * g), (this._y = l * m * h + d * u * g), (this._z = l * u * g - d * m * h), (this._w = l * u * h - d * m * g);
				break;
			case 'XZY':
				(this._x = d * u * h - l * m * g), (this._y = l * m * h - d * u * g), (this._z = l * u * g + d * m * h), (this._w = l * u * h + d * m * g);
				break;
			default:
				console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + o);
		}
		return t !== !1 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		const i = t / 2,
			n = Math.sin(i);
		return (this._x = e.x * n), (this._y = e.y * n), (this._z = e.z * n), (this._w = Math.cos(i)), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		const t = e.elements,
			i = t[0],
			n = t[4],
			r = t[8],
			o = t[1],
			a = t[5],
			c = t[9],
			l = t[2],
			u = t[6],
			h = t[10],
			d = i + a + h;
		if (d > 0) {
			const m = 0.5 / Math.sqrt(d + 1);
			(this._w = 0.25 / m), (this._x = (u - c) * m), (this._y = (r - l) * m), (this._z = (o - n) * m);
		} else if (i > a && i > h) {
			const m = 2 * Math.sqrt(1 + i - a - h);
			(this._w = (u - c) / m), (this._x = 0.25 * m), (this._y = (n + o) / m), (this._z = (r + l) / m);
		} else if (a > h) {
			const m = 2 * Math.sqrt(1 + a - i - h);
			(this._w = (r - l) / m), (this._x = (n + o) / m), (this._y = 0.25 * m), (this._z = (c + u) / m);
		} else {
			const m = 2 * Math.sqrt(1 + h - i - a);
			(this._w = (o - n) / m), (this._x = (r + l) / m), (this._y = (c + u) / m), (this._z = 0.25 * m);
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let i = e.dot(t) + 1;
		return i < Number.EPSILON ? ((i = 0), Math.abs(e.x) > Math.abs(e.z) ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i)) : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i))) : ((this._x = e.y * t.z - e.z * t.y), (this._y = e.z * t.x - e.x * t.z), (this._z = e.x * t.y - e.y * t.x), (this._w = i)), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(clamp(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		const i = this.angleTo(e);
		if (i === 0) return this;
		const n = Math.min(1, t / i);
		return this.slerp(e, n), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1)) : ((e = 1 / e), (this._x = this._x * e), (this._y = this._y * e), (this._z = this._z * e), (this._w = this._w * e)), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		const i = e._x,
			n = e._y,
			r = e._z,
			o = e._w,
			a = t._x,
			c = t._y,
			l = t._z,
			u = t._w;
		return (this._x = i * u + o * a + n * l - r * c), (this._y = n * u + o * c + r * a - i * l), (this._z = r * u + o * l + i * c - n * a), (this._w = o * u - i * a - n * c - r * l), this._onChangeCallback(), this;
	}
	slerp(e, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(e);
		const i = this._x,
			n = this._y,
			r = this._z,
			o = this._w;
		let a = o * e._w + i * e._x + n * e._y + r * e._z;
		if ((a < 0 ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (a = -a)) : this.copy(e), a >= 1)) return (this._w = o), (this._x = i), (this._y = n), (this._z = r), this;
		const c = 1 - a * a;
		if (c <= Number.EPSILON) {
			const m = 1 - t;
			return (this._w = m * o + t * this._w), (this._x = m * i + t * this._x), (this._y = m * n + t * this._y), (this._z = m * r + t * this._z), this.normalize(), this._onChangeCallback(), this;
		}
		const l = Math.sqrt(c),
			u = Math.atan2(l, a),
			h = Math.sin((1 - t) * u) / l,
			d = Math.sin(t * u) / l;
		return (this._w = o * h + this._w * d), (this._x = i * h + this._x * d), (this._y = n * h + this._y * d), (this._z = r * h + this._z * d), this._onChangeCallback(), this;
	}
	slerpQuaternions(e, t, i) {
		return this.copy(e).slerp(t, i);
	}
	random() {
		const e = Math.random(),
			t = Math.sqrt(1 - e),
			i = Math.sqrt(e),
			n = 2 * Math.PI * Math.random(),
			r = 2 * Math.PI * Math.random();
		return this.set(t * Math.cos(n), i * Math.sin(r), i * Math.cos(r), t * Math.sin(n));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return (this._x = e[t]), (this._y = e[t + 1]), (this._z = e[t + 2]), (this._w = e[t + 3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._w), e;
	}
	fromBufferAttribute(e, t) {
		return (this._x = e.getX(t)), (this._y = e.getY(t)), (this._z = e.getZ(t)), (this._w = e.getW(t)), this;
	}
	_onChange(e) {
		return (this._onChangeCallback = e), this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}
class Vector3 {
	constructor(e = 0, t = 0, i = 0) {
		(Vector3.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
	}
	set(e, t, i) {
		return i === void 0 && (i = this.z), (this.x = e), (this.y = t), (this.z = i), this;
	}
	setScalar(e) {
		return (this.x = e), (this.y = e), (this.z = e), this;
	}
	setX(e) {
		return (this.x = e), this;
	}
	setY(e) {
		return (this.y = e), this;
	}
	setZ(e) {
		return (this.z = e), this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default:
				throw new Error('index is out of range: ' + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			default:
				throw new Error('index is out of range: ' + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
	}
	add(e) {
		return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
	}
	addScalar(e) {
		return (this.x += e), (this.y += e), (this.z += e), this;
	}
	addVectors(e, t) {
		return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
	}
	addScaledVector(e, t) {
		return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
	}
	sub(e) {
		return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
	}
	subScalar(e) {
		return (this.x -= e), (this.y -= e), (this.z -= e), this;
	}
	subVectors(e, t) {
		return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
	}
	multiply(e) {
		return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
	}
	multiplyScalar(e) {
		return (this.x *= e), (this.y *= e), (this.z *= e), this;
	}
	multiplyVectors(e, t) {
		return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
	}
	applyEuler(e) {
		return this.applyQuaternion(_quaternion$4.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		const t = this.x,
			i = this.y,
			n = this.z,
			r = e.elements;
		return (this.x = r[0] * t + r[3] * i + r[6] * n), (this.y = r[1] * t + r[4] * i + r[7] * n), (this.z = r[2] * t + r[5] * i + r[8] * n), this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		const t = this.x,
			i = this.y,
			n = this.z,
			r = e.elements,
			o = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
		return (this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * o), (this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * o), (this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * o), this;
	}
	applyQuaternion(e) {
		const t = this.x,
			i = this.y,
			n = this.z,
			r = e.x,
			o = e.y,
			a = e.z,
			c = e.w,
			l = c * t + o * n - a * i,
			u = c * i + a * t - r * n,
			h = c * n + r * i - o * t,
			d = -r * t - o * i - a * n;
		return (this.x = l * c + d * -r + u * -a - h * -o), (this.y = u * c + d * -o + h * -r - l * -a), (this.z = h * c + d * -a + l * -o - u * -r), this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		const t = this.x,
			i = this.y,
			n = this.z,
			r = e.elements;
		return (this.x = r[0] * t + r[4] * i + r[8] * n), (this.y = r[1] * t + r[5] * i + r[9] * n), (this.z = r[2] * t + r[6] * i + r[10] * n), this.normalize();
	}
	divide(e) {
		return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), this;
	}
	max(e) {
		return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), this;
	}
	clamp(e, t) {
		return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), (this.z = Math.max(e.z, Math.min(t.z, this.z))), this;
	}
	clampScalar(e, t) {
		return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), (this.z = Math.max(e, Math.min(t, this.z))), this;
	}
	clampLength(e, t) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
	}
	floor() {
		return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
	}
	ceil() {
		return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
	}
	round() {
		return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
	}
	roundToZero() {
		return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)), this;
	}
	negate() {
		return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), this;
	}
	lerpVectors(e, t, i) {
		return (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), (this.z = e.z + (t.z - e.z) * i), this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		const i = e.x,
			n = e.y,
			r = e.z,
			o = t.x,
			a = t.y,
			c = t.z;
		return (this.x = n * c - r * a), (this.y = r * o - i * c), (this.z = i * a - n * o), this;
	}
	projectOnVector(e) {
		const t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		const i = e.dot(this) / t;
		return this.copy(e).multiplyScalar(i);
	}
	projectOnPlane(e) {
		return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
	}
	reflect(e) {
		return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		const t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		const i = this.dot(e) / t;
		return Math.acos(clamp(i, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		const t = this.x - e.x,
			i = this.y - e.y,
			n = this.z - e.z;
		return t * t + i * i + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, i) {
		const n = Math.sin(t) * e;
		return (this.x = n * Math.sin(i)), (this.y = Math.cos(t) * e), (this.z = n * Math.cos(i)), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, i) {
		return (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this;
	}
	setFromMatrixPosition(e) {
		const t = e.elements;
		return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
	}
	setFromMatrixScale(e) {
		const t = this.setFromMatrixColumn(e, 0).length(),
			i = this.setFromMatrixColumn(e, 1).length(),
			n = this.setFromMatrixColumn(e, 2).length();
		return (this.x = t), (this.y = i), (this.z = n), this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
	}
	fromBufferAttribute(e, t) {
		return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
	}
	random() {
		return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
	}
	randomDirection() {
		const e = (Math.random() - 0.5) * 2,
			t = Math.random() * Math.PI * 2,
			i = Math.sqrt(1 - e ** 2);
		return (this.x = i * Math.cos(t)), (this.y = i * Math.sin(t)), (this.z = e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}
const _vector$c = new Vector3(),
	_quaternion$4 = new Quaternion();
class Box3 {
	constructor(e = new Vector3(1 / 0, 1 / 0, 1 / 0), t = new Vector3(-1 / 0, -1 / 0, -1 / 0)) {
		(this.isBox3 = !0), (this.min = e), (this.max = t);
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		let t = 1 / 0,
			i = 1 / 0,
			n = 1 / 0,
			r = -1 / 0,
			o = -1 / 0,
			a = -1 / 0;
		for (let c = 0, l = e.length; c < l; c += 3) {
			const u = e[c],
				h = e[c + 1],
				d = e[c + 2];
			u < t && (t = u), h < i && (i = h), d < n && (n = d), u > r && (r = u), h > o && (o = h), d > a && (a = d);
		}
		return this.min.set(t, i, n), this.max.set(r, o, a), this;
	}
	setFromBufferAttribute(e) {
		let t = 1 / 0,
			i = 1 / 0,
			n = 1 / 0,
			r = -1 / 0,
			o = -1 / 0,
			a = -1 / 0;
		for (let c = 0, l = e.count; c < l; c++) {
			const u = e.getX(c),
				h = e.getY(c),
				d = e.getZ(c);
			u < t && (t = u), h < i && (i = h), d < n && (n = d), u > r && (r = u), h > o && (o = h), d > a && (a = d);
		}
		return this.min.set(t, i, n), this.max.set(r, o, a), this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		const i = _vector$b.copy(t).multiplyScalar(0.5);
		return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		const i = e.geometry;
		if (i !== void 0)
			if (t && i.attributes != null && i.attributes.position !== void 0) {
				const r = i.attributes.position;
				for (let o = 0, a = r.count; o < a; o++) _vector$b.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(_vector$b);
			} else i.boundingBox === null && i.computeBoundingBox(), _box$3.copy(i.boundingBox), _box$3.applyMatrix4(e.matrixWorld), this.union(_box$3);
		const n = e.children;
		for (let r = 0, o = n.length; r < o; r++) this.expandByObject(n[r], t);
		return this;
	}
	containsPoint(e) {
		return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, _vector$b), _vector$b.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, i;
		return e.normal.x > 0 ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x)) : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)), e.normal.y > 0 ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y)) : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)), e.normal.z > 0 ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z)) : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)), t <= -e.constant && i >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(_center), _extents.subVectors(this.max, _center), _v0$2.subVectors(e.a, _center), _v1$7.subVectors(e.b, _center), _v2$4.subVectors(e.c, _center), _f0.subVectors(_v1$7, _v0$2), _f1.subVectors(_v2$4, _v1$7), _f2.subVectors(_v0$2, _v2$4);
		let t = [0, -_f0.z, _f0.y, 0, -_f1.z, _f1.y, 0, -_f2.z, _f2.y, _f0.z, 0, -_f0.x, _f1.z, 0, -_f1.x, _f2.z, 0, -_f2.x, -_f0.y, _f0.x, 0, -_f1.y, _f1.x, 0, -_f2.y, _f2.x, 0];
		return !satForAxes(t, _v0$2, _v1$7, _v2$4, _extents) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !satForAxes(t, _v0$2, _v1$7, _v2$4, _extents)) ? !1 : (_triangleNormal.crossVectors(_f0, _f1), (t = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z]), satForAxes(t, _v0$2, _v1$7, _v2$4, _extents));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return _vector$b.copy(e).clamp(this.min, this.max).sub(e).length();
	}
	getBoundingSphere(e) {
		return this.getCenter(e.center), (e.radius = this.getSize(_vector$b).length() * 0.5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(_points), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}
const _points = [new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3()],
	_vector$b = new Vector3(),
	_box$3 = new Box3(),
	_v0$2 = new Vector3(),
	_v1$7 = new Vector3(),
	_v2$4 = new Vector3(),
	_f0 = new Vector3(),
	_f1 = new Vector3(),
	_f2 = new Vector3(),
	_center = new Vector3(),
	_extents = new Vector3(),
	_triangleNormal = new Vector3(),
	_testAxis = new Vector3();
function satForAxes(s, e, t, i, n) {
	for (let r = 0, o = s.length - 3; r <= o; r += 3) {
		_testAxis.fromArray(s, r);
		const a = n.x * Math.abs(_testAxis.x) + n.y * Math.abs(_testAxis.y) + n.z * Math.abs(_testAxis.z),
			c = e.dot(_testAxis),
			l = t.dot(_testAxis),
			u = i.dot(_testAxis);
		if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a) return !1;
	}
	return !0;
}
const _box$2 = new Box3(),
	_v1$6 = new Vector3(),
	_v2$3 = new Vector3();
class Sphere {
	constructor(e = new Vector3(), t = -1) {
		(this.center = e), (this.radius = t);
	}
	set(e, t) {
		return this.center.copy(e), (this.radius = t), this;
	}
	setFromPoints(e, t) {
		const i = this.center;
		t !== void 0 ? i.copy(t) : _box$2.setFromPoints(e).getCenter(i);
		let n = 0;
		for (let r = 0, o = e.length; r < o; r++) n = Math.max(n, i.distanceToSquared(e[r]));
		return (this.radius = Math.sqrt(n)), this;
	}
	copy(e) {
		return this.center.copy(e.center), (this.radius = e.radius), this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), (this.radius = -1), this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		const t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		const i = this.center.distanceToSquared(e);
		return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
		_v1$6.subVectors(e, this.center);
		const t = _v1$6.lengthSq();
		if (t > this.radius * this.radius) {
			const i = Math.sqrt(t),
				n = (i - this.radius) * 0.5;
			this.center.addScaledVector(_v1$6, n / i), (this.radius += n);
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? (this.radius = Math.max(this.radius, e.radius)) : (_v2$3.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)), this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
const _vector$a = new Vector3(),
	_segCenter = new Vector3(),
	_segDir = new Vector3(),
	_diff = new Vector3(),
	_edge1 = new Vector3(),
	_edge2 = new Vector3(),
	_normal$1 = new Vector3();
class Ray {
	constructor(e = new Vector3(), t = new Vector3(0, 0, -1)) {
		(this.origin = e), (this.direction = t);
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.direction).multiplyScalar(e).add(this.origin);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, _vector$a)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		const i = t.dot(this.direction);
		return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		const t = _vector$a.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin), _vector$a.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, i, n) {
		_segCenter.copy(e).add(t).multiplyScalar(0.5), _segDir.copy(t).sub(e).normalize(), _diff.copy(this.origin).sub(_segCenter);
		const r = e.distanceTo(t) * 0.5,
			o = -this.direction.dot(_segDir),
			a = _diff.dot(this.direction),
			c = -_diff.dot(_segDir),
			l = _diff.lengthSq(),
			u = Math.abs(1 - o * o);
		let h, d, m, g;
		if (u > 0)
			if (((h = o * c - a), (d = o * a - c), (g = r * u), h >= 0))
				if (d >= -g)
					if (d <= g) {
						const p = 1 / u;
						(h *= p), (d *= p), (m = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * c) + l);
					} else (d = r), (h = Math.max(0, -(o * d + a))), (m = -h * h + d * (d + 2 * c) + l);
				else (d = -r), (h = Math.max(0, -(o * d + a))), (m = -h * h + d * (d + 2 * c) + l);
			else d <= -g ? ((h = Math.max(0, -(-o * r + a))), (d = h > 0 ? -r : Math.min(Math.max(-r, -c), r)), (m = -h * h + d * (d + 2 * c) + l)) : d <= g ? ((h = 0), (d = Math.min(Math.max(-r, -c), r)), (m = d * (d + 2 * c) + l)) : ((h = Math.max(0, -(o * r + a))), (d = h > 0 ? r : Math.min(Math.max(-r, -c), r)), (m = -h * h + d * (d + 2 * c) + l));
		else (d = o > 0 ? -r : r), (h = Math.max(0, -(o * d + a))), (m = -h * h + d * (d + 2 * c) + l);
		return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(_segDir).multiplyScalar(d).add(_segCenter), m;
	}
	intersectSphere(e, t) {
		_vector$a.subVectors(e.center, this.origin);
		const i = _vector$a.dot(this.direction),
			n = _vector$a.dot(_vector$a) - i * i,
			r = e.radius * e.radius;
		if (n > r) return null;
		const o = Math.sqrt(r - n),
			a = i - o,
			c = i + o;
		return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
	}
	intersectsSphere(e) {
		return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		const t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		const i = -(this.origin.dot(e.normal) + e.constant) / t;
		return i >= 0 ? i : null;
	}
	intersectPlane(e, t) {
		const i = this.distanceToPlane(e);
		return i === null ? null : this.at(i, t);
	}
	intersectsPlane(e) {
		const t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let i, n, r, o, a, c;
		const l = 1 / this.direction.x,
			u = 1 / this.direction.y,
			h = 1 / this.direction.z,
			d = this.origin;
		return l >= 0 ? ((i = (e.min.x - d.x) * l), (n = (e.max.x - d.x) * l)) : ((i = (e.max.x - d.x) * l), (n = (e.min.x - d.x) * l)), u >= 0 ? ((r = (e.min.y - d.y) * u), (o = (e.max.y - d.y) * u)) : ((r = (e.max.y - d.y) * u), (o = (e.min.y - d.y) * u)), i > o || r > n || ((r > i || isNaN(i)) && (i = r), (o < n || isNaN(n)) && (n = o), h >= 0 ? ((a = (e.min.z - d.z) * h), (c = (e.max.z - d.z) * h)) : ((a = (e.max.z - d.z) * h), (c = (e.min.z - d.z) * h)), i > c || a > n) || ((a > i || i !== i) && (i = a), (c < n || n !== n) && (n = c), n < 0) ? null : this.at(i >= 0 ? i : n, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, _vector$a) !== null;
	}
	intersectTriangle(e, t, i, n, r) {
		_edge1.subVectors(t, e), _edge2.subVectors(i, e), _normal$1.crossVectors(_edge1, _edge2);
		let o = this.direction.dot(_normal$1),
			a;
		if (o > 0) {
			if (n) return null;
			a = 1;
		} else if (o < 0) (a = -1), (o = -o);
		else return null;
		_diff.subVectors(this.origin, e);
		const c = a * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
		if (c < 0) return null;
		const l = a * this.direction.dot(_edge1.cross(_diff));
		if (l < 0 || c + l > o) return null;
		const u = -a * _diff.dot(_normal$1);
		return u < 0 ? null : this.at(u / o, r);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
class Matrix4 {
	constructor() {
		(Matrix4.prototype.isMatrix4 = !0), (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	}
	set(e, t, i, n, r, o, a, c, l, u, h, d, m, g, p, f) {
		const _ = this.elements;
		return (_[0] = e), (_[4] = t), (_[8] = i), (_[12] = n), (_[1] = r), (_[5] = o), (_[9] = a), (_[13] = c), (_[2] = l), (_[6] = u), (_[10] = h), (_[14] = d), (_[3] = m), (_[7] = g), (_[11] = p), (_[15] = f), this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new Matrix4().fromArray(this.elements);
	}
	copy(e) {
		const t = this.elements,
			i = e.elements;
		return (t[0] = i[0]), (t[1] = i[1]), (t[2] = i[2]), (t[3] = i[3]), (t[4] = i[4]), (t[5] = i[5]), (t[6] = i[6]), (t[7] = i[7]), (t[8] = i[8]), (t[9] = i[9]), (t[10] = i[10]), (t[11] = i[11]), (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), (t[15] = i[15]), this;
	}
	copyPosition(e) {
		const t = this.elements,
			i = e.elements;
		return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
	}
	setFromMatrix3(e) {
		const t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, i) {
		return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
	}
	makeBasis(e, t, i) {
		return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		const t = this.elements,
			i = e.elements,
			n = 1 / _v1$5.setFromMatrixColumn(e, 0).length(),
			r = 1 / _v1$5.setFromMatrixColumn(e, 1).length(),
			o = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
		return (t[0] = i[0] * n), (t[1] = i[1] * n), (t[2] = i[2] * n), (t[3] = 0), (t[4] = i[4] * r), (t[5] = i[5] * r), (t[6] = i[6] * r), (t[7] = 0), (t[8] = i[8] * o), (t[9] = i[9] * o), (t[10] = i[10] * o), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
	}
	makeRotationFromEuler(e) {
		const t = this.elements,
			i = e.x,
			n = e.y,
			r = e.z,
			o = Math.cos(i),
			a = Math.sin(i),
			c = Math.cos(n),
			l = Math.sin(n),
			u = Math.cos(r),
			h = Math.sin(r);
		if (e.order === 'XYZ') {
			const d = o * u,
				m = o * h,
				g = a * u,
				p = a * h;
			(t[0] = c * u), (t[4] = -c * h), (t[8] = l), (t[1] = m + g * l), (t[5] = d - p * l), (t[9] = -a * c), (t[2] = p - d * l), (t[6] = g + m * l), (t[10] = o * c);
		} else if (e.order === 'YXZ') {
			const d = c * u,
				m = c * h,
				g = l * u,
				p = l * h;
			(t[0] = d + p * a), (t[4] = g * a - m), (t[8] = o * l), (t[1] = o * h), (t[5] = o * u), (t[9] = -a), (t[2] = m * a - g), (t[6] = p + d * a), (t[10] = o * c);
		} else if (e.order === 'ZXY') {
			const d = c * u,
				m = c * h,
				g = l * u,
				p = l * h;
			(t[0] = d - p * a), (t[4] = -o * h), (t[8] = g + m * a), (t[1] = m + g * a), (t[5] = o * u), (t[9] = p - d * a), (t[2] = -o * l), (t[6] = a), (t[10] = o * c);
		} else if (e.order === 'ZYX') {
			const d = o * u,
				m = o * h,
				g = a * u,
				p = a * h;
			(t[0] = c * u), (t[4] = g * l - m), (t[8] = d * l + p), (t[1] = c * h), (t[5] = p * l + d), (t[9] = m * l - g), (t[2] = -l), (t[6] = a * c), (t[10] = o * c);
		} else if (e.order === 'YZX') {
			const d = o * c,
				m = o * l,
				g = a * c,
				p = a * l;
			(t[0] = c * u), (t[4] = p - d * h), (t[8] = g * h + m), (t[1] = h), (t[5] = o * u), (t[9] = -a * u), (t[2] = -l * u), (t[6] = m * h + g), (t[10] = d - p * h);
		} else if (e.order === 'XZY') {
			const d = o * c,
				m = o * l,
				g = a * c,
				p = a * l;
			(t[0] = c * u), (t[4] = -h), (t[8] = l * u), (t[1] = d * h + p), (t[5] = o * u), (t[9] = m * h - g), (t[2] = g * h - m), (t[6] = a * u), (t[10] = p * h + d);
		}
		return (t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(_zero, e, _one);
	}
	lookAt(e, t, i) {
		const n = this.elements;
		return _z.subVectors(e, t), _z.lengthSq() === 0 && (_z.z = 1), _z.normalize(), _x.crossVectors(i, _z), _x.lengthSq() === 0 && (Math.abs(i.z) === 1 ? (_z.x += 1e-4) : (_z.z += 1e-4), _z.normalize(), _x.crossVectors(i, _z)), _x.normalize(), _y.crossVectors(_z, _x), (n[0] = _x.x), (n[4] = _y.x), (n[8] = _z.x), (n[1] = _x.y), (n[5] = _y.y), (n[9] = _z.y), (n[2] = _x.z), (n[6] = _y.z), (n[10] = _z.z), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		const i = e.elements,
			n = t.elements,
			r = this.elements,
			o = i[0],
			a = i[4],
			c = i[8],
			l = i[12],
			u = i[1],
			h = i[5],
			d = i[9],
			m = i[13],
			g = i[2],
			p = i[6],
			f = i[10],
			_ = i[14],
			T = i[3],
			x = i[7],
			S = i[11],
			b = i[15],
			E = n[0],
			A = n[4],
			v = n[8],
			C = n[12],
			P = n[1],
			z = n[5],
			Y = n[9],
			D = n[13],
			I = n[2],
			N = n[6],
			j = n[10],
			K = n[14],
			q = n[3],
			ie = n[7],
			ee = n[11],
			B = n[15];
		return (r[0] = o * E + a * P + c * I + l * q), (r[4] = o * A + a * z + c * N + l * ie), (r[8] = o * v + a * Y + c * j + l * ee), (r[12] = o * C + a * D + c * K + l * B), (r[1] = u * E + h * P + d * I + m * q), (r[5] = u * A + h * z + d * N + m * ie), (r[9] = u * v + h * Y + d * j + m * ee), (r[13] = u * C + h * D + d * K + m * B), (r[2] = g * E + p * P + f * I + _ * q), (r[6] = g * A + p * z + f * N + _ * ie), (r[10] = g * v + p * Y + f * j + _ * ee), (r[14] = g * C + p * D + f * K + _ * B), (r[3] = T * E + x * P + S * I + b * q), (r[7] = T * A + x * z + S * N + b * ie), (r[11] = T * v + x * Y + S * j + b * ee), (r[15] = T * C + x * D + S * K + b * B), this;
	}
	multiplyScalar(e) {
		const t = this.elements;
		return (t[0] *= e), (t[4] *= e), (t[8] *= e), (t[12] *= e), (t[1] *= e), (t[5] *= e), (t[9] *= e), (t[13] *= e), (t[2] *= e), (t[6] *= e), (t[10] *= e), (t[14] *= e), (t[3] *= e), (t[7] *= e), (t[11] *= e), (t[15] *= e), this;
	}
	determinant() {
		const e = this.elements,
			t = e[0],
			i = e[4],
			n = e[8],
			r = e[12],
			o = e[1],
			a = e[5],
			c = e[9],
			l = e[13],
			u = e[2],
			h = e[6],
			d = e[10],
			m = e[14],
			g = e[3],
			p = e[7],
			f = e[11],
			_ = e[15];
		return g * (+r * c * h - n * l * h - r * a * d + i * l * d + n * a * m - i * c * m) + p * (+t * c * m - t * l * d + r * o * d - n * o * m + n * l * u - r * c * u) + f * (+t * l * h - t * a * m - r * o * h + i * o * m + r * a * u - i * l * u) + _ * (-n * a * u - t * c * h + t * a * d + n * o * h - i * o * d + i * c * u);
	}
	transpose() {
		const e = this.elements;
		let t;
		return (t = e[1]), (e[1] = e[4]), (e[4] = t), (t = e[2]), (e[2] = e[8]), (e[8] = t), (t = e[6]), (e[6] = e[9]), (e[9] = t), (t = e[3]), (e[3] = e[12]), (e[12] = t), (t = e[7]), (e[7] = e[13]), (e[13] = t), (t = e[11]), (e[11] = e[14]), (e[14] = t), this;
	}
	setPosition(e, t, i) {
		const n = this.elements;
		return e.isVector3 ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z)) : ((n[12] = e), (n[13] = t), (n[14] = i)), this;
	}
	invert() {
		const e = this.elements,
			t = e[0],
			i = e[1],
			n = e[2],
			r = e[3],
			o = e[4],
			a = e[5],
			c = e[6],
			l = e[7],
			u = e[8],
			h = e[9],
			d = e[10],
			m = e[11],
			g = e[12],
			p = e[13],
			f = e[14],
			_ = e[15],
			T = h * f * l - p * d * l + p * c * m - a * f * m - h * c * _ + a * d * _,
			x = g * d * l - u * f * l - g * c * m + o * f * m + u * c * _ - o * d * _,
			S = u * p * l - g * h * l + g * a * m - o * p * m - u * a * _ + o * h * _,
			b = g * h * c - u * p * c - g * a * d + o * p * d + u * a * f - o * h * f,
			E = t * T + i * x + n * S + r * b;
		if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const A = 1 / E;
		return (
			(e[0] = T * A),
			(e[1] = (p * d * r - h * f * r - p * n * m + i * f * m + h * n * _ - i * d * _) * A),
			(e[2] = (a * f * r - p * c * r + p * n * l - i * f * l - a * n * _ + i * c * _) * A),
			(e[3] = (h * c * r - a * d * r - h * n * l + i * d * l + a * n * m - i * c * m) * A),
			(e[4] = x * A),
			(e[5] = (u * f * r - g * d * r + g * n * m - t * f * m - u * n * _ + t * d * _) * A),
			(e[6] = (g * c * r - o * f * r - g * n * l + t * f * l + o * n * _ - t * c * _) * A),
			(e[7] = (o * d * r - u * c * r + u * n * l - t * d * l - o * n * m + t * c * m) * A),
			(e[8] = S * A),
			(e[9] = (g * h * r - u * p * r - g * i * m + t * p * m + u * i * _ - t * h * _) * A),
			(e[10] = (o * p * r - g * a * r + g * i * l - t * p * l - o * i * _ + t * a * _) * A),
			(e[11] = (u * a * r - o * h * r - u * i * l + t * h * l + o * i * m - t * a * m) * A),
			(e[12] = b * A),
			(e[13] = (u * p * n - g * h * n + g * i * d - t * p * d - u * i * f + t * h * f) * A),
			(e[14] = (g * a * n - o * p * n - g * i * c + t * p * c + o * i * f - t * a * f) * A),
			(e[15] = (o * h * n - u * a * n + u * i * c - t * h * c - o * i * d + t * a * d) * A),
			this
		);
	}
	scale(e) {
		const t = this.elements,
			i = e.x,
			n = e.y,
			r = e.z;
		return (t[0] *= i), (t[4] *= n), (t[8] *= r), (t[1] *= i), (t[5] *= n), (t[9] *= r), (t[2] *= i), (t[6] *= n), (t[10] *= r), (t[3] *= i), (t[7] *= n), (t[11] *= r), this;
	}
	getMaxScaleOnAxis() {
		const e = this.elements,
			t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
			i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
			n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, i, n));
	}
	makeTranslation(e, t, i) {
		return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		const t = Math.cos(e),
			i = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		const t = Math.cos(e),
			i = Math.sin(e);
		return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		const t = Math.cos(e),
			i = Math.sin(e);
		return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		const i = Math.cos(t),
			n = Math.sin(t),
			r = 1 - i,
			o = e.x,
			a = e.y,
			c = e.z,
			l = r * o,
			u = r * a;
		return this.set(l * o + i, l * a - n * c, l * c + n * a, 0, l * a + n * c, u * a + i, u * c - n * o, 0, l * c - n * a, u * c + n * o, r * c * c + i, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, i) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, i, n, r, o) {
		return this.set(1, i, r, 0, e, 1, o, 0, t, n, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, i) {
		const n = this.elements,
			r = t._x,
			o = t._y,
			a = t._z,
			c = t._w,
			l = r + r,
			u = o + o,
			h = a + a,
			d = r * l,
			m = r * u,
			g = r * h,
			p = o * u,
			f = o * h,
			_ = a * h,
			T = c * l,
			x = c * u,
			S = c * h,
			b = i.x,
			E = i.y,
			A = i.z;
		return (n[0] = (1 - (p + _)) * b), (n[1] = (m + S) * b), (n[2] = (g - x) * b), (n[3] = 0), (n[4] = (m - S) * E), (n[5] = (1 - (d + _)) * E), (n[6] = (f + T) * E), (n[7] = 0), (n[8] = (g + x) * A), (n[9] = (f - T) * A), (n[10] = (1 - (d + p)) * A), (n[11] = 0), (n[12] = e.x), (n[13] = e.y), (n[14] = e.z), (n[15] = 1), this;
	}
	decompose(e, t, i) {
		const n = this.elements;
		let r = _v1$5.set(n[0], n[1], n[2]).length();
		const o = _v1$5.set(n[4], n[5], n[6]).length(),
			a = _v1$5.set(n[8], n[9], n[10]).length();
		this.determinant() < 0 && (r = -r), (e.x = n[12]), (e.y = n[13]), (e.z = n[14]), _m1$2.copy(this);
		const l = 1 / r,
			u = 1 / o,
			h = 1 / a;
		return (_m1$2.elements[0] *= l), (_m1$2.elements[1] *= l), (_m1$2.elements[2] *= l), (_m1$2.elements[4] *= u), (_m1$2.elements[5] *= u), (_m1$2.elements[6] *= u), (_m1$2.elements[8] *= h), (_m1$2.elements[9] *= h), (_m1$2.elements[10] *= h), t.setFromRotationMatrix(_m1$2), (i.x = r), (i.y = o), (i.z = a), this;
	}
	makePerspective(e, t, i, n, r, o) {
		const a = this.elements,
			c = (2 * r) / (t - e),
			l = (2 * r) / (i - n),
			u = (t + e) / (t - e),
			h = (i + n) / (i - n),
			d = -(o + r) / (o - r),
			m = (-2 * o * r) / (o - r);
		return (a[0] = c), (a[4] = 0), (a[8] = u), (a[12] = 0), (a[1] = 0), (a[5] = l), (a[9] = h), (a[13] = 0), (a[2] = 0), (a[6] = 0), (a[10] = d), (a[14] = m), (a[3] = 0), (a[7] = 0), (a[11] = -1), (a[15] = 0), this;
	}
	makeOrthographic(e, t, i, n, r, o) {
		const a = this.elements,
			c = 1 / (t - e),
			l = 1 / (i - n),
			u = 1 / (o - r),
			h = (t + e) * c,
			d = (i + n) * l,
			m = (o + r) * u;
		return (a[0] = 2 * c), (a[4] = 0), (a[8] = 0), (a[12] = -h), (a[1] = 0), (a[5] = 2 * l), (a[9] = 0), (a[13] = -d), (a[2] = 0), (a[6] = 0), (a[10] = -2 * u), (a[14] = -m), (a[3] = 0), (a[7] = 0), (a[11] = 0), (a[15] = 1), this;
	}
	equals(e) {
		const t = this.elements,
			i = e.elements;
		for (let n = 0; n < 16; n++) if (t[n] !== i[n]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
		return this;
	}
	toArray(e = [], t = 0) {
		const i = this.elements;
		return (e[t] = i[0]), (e[t + 1] = i[1]), (e[t + 2] = i[2]), (e[t + 3] = i[3]), (e[t + 4] = i[4]), (e[t + 5] = i[5]), (e[t + 6] = i[6]), (e[t + 7] = i[7]), (e[t + 8] = i[8]), (e[t + 9] = i[9]), (e[t + 10] = i[10]), (e[t + 11] = i[11]), (e[t + 12] = i[12]), (e[t + 13] = i[13]), (e[t + 14] = i[14]), (e[t + 15] = i[15]), e;
	}
}
const _v1$5 = new Vector3(),
	_m1$2 = new Matrix4(),
	_zero = new Vector3(0, 0, 0),
	_one = new Vector3(1, 1, 1),
	_x = new Vector3(),
	_y = new Vector3(),
	_z = new Vector3(),
	_matrix$1 = new Matrix4(),
	_quaternion$3 = new Quaternion();
class Euler {
	constructor(e = 0, t = 0, i = 0, n = Euler.DefaultOrder) {
		(this.isEuler = !0), (this._x = e), (this._y = t), (this._z = i), (this._order = n);
	}
	get x() {
		return this._x;
	}
	set x(e) {
		(this._x = e), this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		(this._y = e), this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		(this._z = e), this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		(this._order = e), this._onChangeCallback();
	}
	set(e, t, i, n = this._order) {
		return (this._x = e), (this._y = t), (this._z = i), (this._order = n), this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return (this._x = e._x), (this._y = e._y), (this._z = e._z), (this._order = e._order), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, i = !0) {
		const n = e.elements,
			r = n[0],
			o = n[4],
			a = n[8],
			c = n[1],
			l = n[5],
			u = n[9],
			h = n[2],
			d = n[6],
			m = n[10];
		switch (t) {
			case 'XYZ':
				(this._y = Math.asin(clamp(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, r))) : ((this._x = Math.atan2(d, l)), (this._z = 0));
				break;
			case 'YXZ':
				(this._x = Math.asin(-clamp(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(c, l))) : ((this._y = Math.atan2(-h, r)), (this._z = 0));
				break;
			case 'ZXY':
				(this._x = Math.asin(clamp(d, -1, 1))), Math.abs(d) < 0.9999999 ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-o, l))) : ((this._y = 0), (this._z = Math.atan2(c, r)));
				break;
			case 'ZYX':
				(this._y = Math.asin(-clamp(h, -1, 1))), Math.abs(h) < 0.9999999 ? ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(c, r))) : ((this._x = 0), (this._z = Math.atan2(-o, l)));
				break;
			case 'YZX':
				(this._z = Math.asin(clamp(c, -1, 1))), Math.abs(c) < 0.9999999 ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-h, r))) : ((this._x = 0), (this._y = Math.atan2(a, m)));
				break;
			case 'XZY':
				(this._z = Math.asin(-clamp(o, -1, 1))), Math.abs(o) < 0.9999999 ? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(a, r))) : ((this._x = Math.atan2(-u, m)), (this._y = 0));
				break;
			default:
				console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + t);
		}
		return (this._order = t), i === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, i) {
		return _matrix$1.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_matrix$1, t, i);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return (this._x = e[0]), (this._y = e[1]), (this._z = e[2]), e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._order), e;
	}
	_onChange(e) {
		return (this._onChangeCallback = e), this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
	toVector3() {
		console.error('THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead');
	}
}
Euler.DefaultOrder = 'XYZ';
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
class Layers {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = ((1 << e) | 0) >>> 0;
	}
	enable(e) {
		this.mask |= (1 << e) | 0;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= (1 << e) | 0;
	}
	disable(e) {
		this.mask &= ~((1 << e) | 0);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return (this.mask & ((1 << e) | 0)) !== 0;
	}
}
let _object3DId = 0;
const _v1$4 = new Vector3(),
	_q1 = new Quaternion(),
	_m1$1 = new Matrix4(),
	_target = new Vector3(),
	_position$3 = new Vector3(),
	_scale$2 = new Vector3(),
	_quaternion$2 = new Quaternion(),
	_xAxis = new Vector3(1, 0, 0),
	_yAxis = new Vector3(0, 1, 0),
	_zAxis = new Vector3(0, 0, 1),
	_addedEvent = { type: 'added' },
	_removedEvent = { type: 'removed' };
class Object3D extends EventDispatcher {
	constructor() {
		super(), (this.isObject3D = !0), Object.defineProperty(this, 'id', { value: _object3DId++ }), (this.uuid = generateUUID()), (this.name = ''), (this.type = 'Object3D'), (this.parent = null), (this.children = []), (this.up = Object3D.DefaultUp.clone());
		const e = new Vector3(),
			t = new Euler(),
			i = new Quaternion(),
			n = new Vector3(1, 1, 1);
		function r() {
			i.setFromEuler(t, !1);
		}
		function o() {
			t.setFromQuaternion(i, void 0, !1);
		}
		t._onChange(r), i._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: i }, scale: { configurable: !0, enumerable: !0, value: n }, modelViewMatrix: { value: new Matrix4() }, normalMatrix: { value: new Matrix3() } }), (this.matrix = new Matrix4()), (this.matrixWorld = new Matrix4()), (this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate), (this.matrixWorldNeedsUpdate = !1), (this.matrixWorldAutoUpdate = Object3D.DefaultMatrixWorldAutoUpdate), (this.layers = new Layers()), (this.visible = !0), (this.castShadow = !1), (this.receiveShadow = !1), (this.frustumCulled = !0), (this.renderOrder = 0), (this.animations = []), (this.userData = {});
	}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return _q1.setFromAxisAngle(e, t), this.quaternion.multiply(_q1), this;
	}
	rotateOnWorldAxis(e, t) {
		return _q1.setFromAxisAngle(e, t), this.quaternion.premultiply(_q1), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(_xAxis, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(_yAxis, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(_zAxis, e);
	}
	translateOnAxis(e, t) {
		return _v1$4.copy(e).applyQuaternion(this.quaternion), this.position.add(_v1$4.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(_xAxis, e);
	}
	translateY(e) {
		return this.translateOnAxis(_yAxis, e);
	}
	translateZ(e) {
		return this.translateOnAxis(_zAxis, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, i) {
		e.isVector3 ? _target.copy(e) : _target.set(e, t, i);
		const n = this.parent;
		this.updateWorldMatrix(!0, !1), _position$3.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _m1$1.lookAt(_position$3, _target, this.up) : _m1$1.lookAt(_target, _position$3, this.up), this.quaternion.setFromRotationMatrix(_m1$1), n && (_m1$1.extractRotation(n.matrixWorld), _q1.setFromRotationMatrix(_m1$1), this.quaternion.premultiply(_q1.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
			return this;
		}
		return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), (e.parent = this), this.children.push(e), e.dispatchEvent(_addedEvent)) : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
			return this;
		}
		const t = this.children.indexOf(e);
		return t !== -1 && ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(_removedEvent)), this;
	}
	removeFromParent() {
		const e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		for (let e = 0; e < this.children.length; e++) {
			const t = this.children[e];
			(t.parent = null), t.dispatchEvent(_removedEvent);
		}
		return (this.children.length = 0), this;
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), _m1$1.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), _m1$1.multiply(e.parent.matrixWorld)), e.applyMatrix4(_m1$1), this.add(e), e.updateWorldMatrix(!1, !0), this;
	}
	getObjectById(e) {
		return this.getObjectByProperty('id', e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty('name', e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let i = 0, n = this.children.length; i < n; i++) {
			const o = this.children[i].getObjectByProperty(e, t);
			if (o !== void 0) return o;
		}
	}
	getObjectsByProperty(e, t) {
		let i = [];
		this[e] === t && i.push(this);
		for (let n = 0, r = this.children.length; n < r; n++) {
			const o = this.children[n].getObjectsByProperty(e, t);
			o.length > 0 && (i = i.concat(o));
		}
		return i;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, e, _scale$2), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, _quaternion$2, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		const t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		const t = this.children;
		for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		const t = this.children;
		for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
	}
	traverseAncestors(e) {
		const t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), (this.matrixWorldNeedsUpdate = !1), (e = !0));
		const t = this.children;
		for (let i = 0, n = t.length; i < n; i++) {
			const r = t[i];
			(r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
		}
	}
	updateWorldMatrix(e, t) {
		const i = this.parent;
		if ((e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)) {
			const n = this.children;
			for (let r = 0, o = n.length; r < o; r++) {
				const a = n[r];
				a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
			}
		}
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == 'string',
			i = {};
		t && ((e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }), (i.metadata = { version: 4.5, type: 'Object', generator: 'Object3D.toJSON' }));
		const n = {};
		(n.uuid = this.uuid), (n.type = this.type), this.name !== '' && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), (n.layers = this.layers.mask), (n.matrix = this.matrix.toArray()), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.isInstancedMesh && ((n.type = 'InstancedMesh'), (n.count = this.count), (n.instanceMatrix = this.instanceMatrix.toJSON()), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON()));
		function r(a, c) {
			return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? (n.background = this.background.toJSON()) : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			n.geometry = r(e.geometries, this.geometry);
			const a = this.geometry.parameters;
			if (a !== void 0 && a.shapes !== void 0) {
				const c = a.shapes;
				if (Array.isArray(c))
					for (let l = 0, u = c.length; l < u; l++) {
						const h = c[l];
						r(e.shapes, h);
					}
				else r(e.shapes, c);
			}
		}
		if ((this.isSkinnedMesh && ((n.bindMode = this.bindMode), (n.bindMatrix = this.bindMatrix.toArray()), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))), this.material !== void 0))
			if (Array.isArray(this.material)) {
				const a = [];
				for (let c = 0, l = this.material.length; c < l; c++) a.push(r(e.materials, this.material[c]));
				n.material = a;
			} else n.material = r(e.materials, this.material);
		if (this.children.length > 0) {
			n.children = [];
			for (let a = 0; a < this.children.length; a++) n.children.push(this.children[a].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			n.animations = [];
			for (let a = 0; a < this.animations.length; a++) {
				const c = this.animations[a];
				n.animations.push(r(e.animations, c));
			}
		}
		if (t) {
			const a = o(e.geometries),
				c = o(e.materials),
				l = o(e.textures),
				u = o(e.images),
				h = o(e.shapes),
				d = o(e.skeletons),
				m = o(e.animations),
				g = o(e.nodes);
			a.length > 0 && (i.geometries = a), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), u.length > 0 && (i.images = u), h.length > 0 && (i.shapes = h), d.length > 0 && (i.skeletons = d), m.length > 0 && (i.animations = m), g.length > 0 && (i.nodes = g);
		}
		return (i.object = n), i;
		function o(a) {
			const c = [];
			for (const l in a) {
				const u = a[l];
				delete u.metadata, c.push(u);
			}
			return c;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (((this.name = e.name), this.up.copy(e.up), this.position.copy(e.position), (this.rotation.order = e.rotation.order), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), (this.matrixAutoUpdate = e.matrixAutoUpdate), (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate), (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate), (this.layers.mask = e.layers.mask), (this.visible = e.visible), (this.castShadow = e.castShadow), (this.receiveShadow = e.receiveShadow), (this.frustumCulled = e.frustumCulled), (this.renderOrder = e.renderOrder), (this.userData = JSON.parse(JSON.stringify(e.userData))), t === !0))
			for (let i = 0; i < e.children.length; i++) {
				const n = e.children[i];
				this.add(n.clone());
			}
		return this;
	}
}
Object3D.DefaultUp = new Vector3(0, 1, 0);
Object3D.DefaultMatrixAutoUpdate = !0;
Object3D.DefaultMatrixWorldAutoUpdate = !0;
const _v0$1 = new Vector3(),
	_v1$3 = new Vector3(),
	_v2$2 = new Vector3(),
	_v3$1 = new Vector3(),
	_vab = new Vector3(),
	_vac = new Vector3(),
	_vbc = new Vector3(),
	_vap = new Vector3(),
	_vbp = new Vector3(),
	_vcp = new Vector3();
class Triangle {
	constructor(e = new Vector3(), t = new Vector3(), i = new Vector3()) {
		(this.a = e), (this.b = t), (this.c = i);
	}
	static getNormal(e, t, i, n) {
		n.subVectors(i, t), _v0$1.subVectors(e, t), n.cross(_v0$1);
		const r = n.lengthSq();
		return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
	}
	static getBarycoord(e, t, i, n, r) {
		_v0$1.subVectors(n, t), _v1$3.subVectors(i, t), _v2$2.subVectors(e, t);
		const o = _v0$1.dot(_v0$1),
			a = _v0$1.dot(_v1$3),
			c = _v0$1.dot(_v2$2),
			l = _v1$3.dot(_v1$3),
			u = _v1$3.dot(_v2$2),
			h = o * l - a * a;
		if (h === 0) return r.set(-2, -1, -1);
		const d = 1 / h,
			m = (l * c - a * u) * d,
			g = (o * u - a * c) * d;
		return r.set(1 - m - g, g, m);
	}
	static containsPoint(e, t, i, n) {
		return this.getBarycoord(e, t, i, n, _v3$1), _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1;
	}
	static getUV(e, t, i, n, r, o, a, c) {
		return this.getBarycoord(e, t, i, n, _v3$1), c.set(0, 0), c.addScaledVector(r, _v3$1.x), c.addScaledVector(o, _v3$1.y), c.addScaledVector(a, _v3$1.z), c;
	}
	static isFrontFacing(e, t, i, n) {
		return _v0$1.subVectors(i, t), _v1$3.subVectors(e, t), _v0$1.cross(_v1$3).dot(n) < 0;
	}
	set(e, t, i) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
	}
	setFromPointsAndIndices(e, t, i, n) {
		return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
	}
	setFromAttributeAndIndices(e, t, i, n) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return _v0$1.subVectors(this.c, this.b), _v1$3.subVectors(this.a, this.b), _v0$1.cross(_v1$3).length() * 0.5;
	}
	getMidpoint(e) {
		return e
			.addVectors(this.a, this.b)
			.add(this.c)
			.multiplyScalar(1 / 3);
	}
	getNormal(e) {
		return Triangle.getNormal(this.a, this.b, this.c, e);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(e, t) {
		return Triangle.getBarycoord(e, this.a, this.b, this.c, t);
	}
	getUV(e, t, i, n, r) {
		return Triangle.getUV(e, this.a, this.b, this.c, t, i, n, r);
	}
	containsPoint(e) {
		return Triangle.containsPoint(e, this.a, this.b, this.c);
	}
	isFrontFacing(e) {
		return Triangle.isFrontFacing(this.a, this.b, this.c, e);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		const i = this.a,
			n = this.b,
			r = this.c;
		let o, a;
		_vab.subVectors(n, i), _vac.subVectors(r, i), _vap.subVectors(e, i);
		const c = _vab.dot(_vap),
			l = _vac.dot(_vap);
		if (c <= 0 && l <= 0) return t.copy(i);
		_vbp.subVectors(e, n);
		const u = _vab.dot(_vbp),
			h = _vac.dot(_vbp);
		if (u >= 0 && h <= u) return t.copy(n);
		const d = c * h - u * l;
		if (d <= 0 && c >= 0 && u <= 0) return (o = c / (c - u)), t.copy(i).addScaledVector(_vab, o);
		_vcp.subVectors(e, r);
		const m = _vab.dot(_vcp),
			g = _vac.dot(_vcp);
		if (g >= 0 && m <= g) return t.copy(r);
		const p = m * l - c * g;
		if (p <= 0 && l >= 0 && g <= 0) return (a = l / (l - g)), t.copy(i).addScaledVector(_vac, a);
		const f = u * g - m * h;
		if (f <= 0 && h - u >= 0 && m - g >= 0) return _vbc.subVectors(r, n), (a = (h - u) / (h - u + (m - g))), t.copy(n).addScaledVector(_vbc, a);
		const _ = 1 / (f + p + d);
		return (o = p * _), (a = d * _), t.copy(i).addScaledVector(_vab, o).addScaledVector(_vac, a);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}
let materialId = 0;
class Material extends EventDispatcher {
	constructor() {
		super(),
			(this.isMaterial = !0),
			Object.defineProperty(this, 'id', { value: materialId++ }),
			(this.uuid = generateUUID()),
			(this.name = ''),
			(this.type = 'Material'),
			(this.blending = NormalBlending),
			(this.side = FrontSide),
			(this.vertexColors = !1),
			(this.opacity = 1),
			(this.transparent = !1),
			(this.blendSrc = SrcAlphaFactor),
			(this.blendDst = OneMinusSrcAlphaFactor),
			(this.blendEquation = AddEquation),
			(this.blendSrcAlpha = null),
			(this.blendDstAlpha = null),
			(this.blendEquationAlpha = null),
			(this.depthFunc = LessEqualDepth),
			(this.depthTest = !0),
			(this.depthWrite = !0),
			(this.stencilWriteMask = 255),
			(this.stencilFunc = AlwaysStencilFunc),
			(this.stencilRef = 0),
			(this.stencilFuncMask = 255),
			(this.stencilFail = KeepStencilOp),
			(this.stencilZFail = KeepStencilOp),
			(this.stencilZPass = KeepStencilOp),
			(this.stencilWrite = !1),
			(this.clippingPlanes = null),
			(this.clipIntersection = !1),
			(this.clipShadows = !1),
			(this.shadowSide = null),
			(this.colorWrite = !0),
			(this.precision = null),
			(this.polygonOffset = !1),
			(this.polygonOffsetFactor = 0),
			(this.polygonOffsetUnits = 0),
			(this.dithering = !1),
			(this.alphaToCoverage = !1),
			(this.premultipliedAlpha = !1),
			(this.visible = !0),
			(this.toneMapped = !0),
			(this.userData = {}),
			(this.version = 0),
			(this._alphaTest = 0);
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
	}
	onBuild() {}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0)
			for (const t in e) {
				const i = e[t];
				if (i === void 0) {
					console.warn("THREE.Material: '" + t + "' parameter is undefined.");
					continue;
				}
				const n = this[t];
				if (n === void 0) {
					console.warn('THREE.' + this.type + ": '" + t + "' is not a property of this material.");
					continue;
				}
				n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : (this[t] = i);
			}
	}
	toJSON(e) {
		const t = e === void 0 || typeof e == 'string';
		t && (e = { textures: {}, images: {} });
		const i = { metadata: { version: 4.5, type: 'Material', generator: 'Material.toJSON' } };
		(i.uuid = this.uuid),
			(i.type = this.type),
			this.name !== '' && (i.name = this.name),
			this.color && this.color.isColor && (i.color = this.color.getHex()),
			this.roughness !== void 0 && (i.roughness = this.roughness),
			this.metalness !== void 0 && (i.metalness = this.metalness),
			this.sheen !== void 0 && (i.sheen = this.sheen),
			this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
			this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
			this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
			this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity),
			this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
			this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
			this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
			this.shininess !== void 0 && (i.shininess = this.shininess),
			this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
			this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
			this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
			this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
			this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid), (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
			this.iridescence !== void 0 && (i.iridescence = this.iridescence),
			this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
			this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
			this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
			this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
			this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
			this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid),
			this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid),
			this.lightMap && this.lightMap.isTexture && ((i.lightMap = this.lightMap.toJSON(e).uuid), (i.lightMapIntensity = this.lightMapIntensity)),
			this.aoMap && this.aoMap.isTexture && ((i.aoMap = this.aoMap.toJSON(e).uuid), (i.aoMapIntensity = this.aoMapIntensity)),
			this.bumpMap && this.bumpMap.isTexture && ((i.bumpMap = this.bumpMap.toJSON(e).uuid), (i.bumpScale = this.bumpScale)),
			this.normalMap && this.normalMap.isTexture && ((i.normalMap = this.normalMap.toJSON(e).uuid), (i.normalMapType = this.normalMapType), (i.normalScale = this.normalScale.toArray())),
			this.displacementMap && this.displacementMap.isTexture && ((i.displacementMap = this.displacementMap.toJSON(e).uuid), (i.displacementScale = this.displacementScale), (i.displacementBias = this.displacementBias)),
			this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
			this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
			this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
			this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid),
			this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
			this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
			this.envMap && this.envMap.isTexture && ((i.envMap = this.envMap.toJSON(e).uuid), this.combine !== void 0 && (i.combine = this.combine)),
			this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
			this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
			this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
			this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid),
			this.transmission !== void 0 && (i.transmission = this.transmission),
			this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
			this.thickness !== void 0 && (i.thickness = this.thickness),
			this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
			this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance),
			this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
			this.size !== void 0 && (i.size = this.size),
			this.shadowSide !== null && (i.shadowSide = this.shadowSide),
			this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
			this.blending !== NormalBlending && (i.blending = this.blending),
			this.side !== FrontSide && (i.side = this.side),
			this.vertexColors && (i.vertexColors = !0),
			this.opacity < 1 && (i.opacity = this.opacity),
			this.transparent === !0 && (i.transparent = this.transparent),
			(i.depthFunc = this.depthFunc),
			(i.depthTest = this.depthTest),
			(i.depthWrite = this.depthWrite),
			(i.colorWrite = this.colorWrite),
			(i.stencilWrite = this.stencilWrite),
			(i.stencilWriteMask = this.stencilWriteMask),
			(i.stencilFunc = this.stencilFunc),
			(i.stencilRef = this.stencilRef),
			(i.stencilFuncMask = this.stencilFuncMask),
			(i.stencilFail = this.stencilFail),
			(i.stencilZFail = this.stencilZFail),
			(i.stencilZPass = this.stencilZPass),
			this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation),
			this.polygonOffset === !0 && (i.polygonOffset = !0),
			this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor),
			this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits),
			this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth),
			this.dashSize !== void 0 && (i.dashSize = this.dashSize),
			this.gapSize !== void 0 && (i.gapSize = this.gapSize),
			this.scale !== void 0 && (i.scale = this.scale),
			this.dithering === !0 && (i.dithering = !0),
			this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
			this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage),
			this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha),
			this.wireframe === !0 && (i.wireframe = this.wireframe),
			this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
			this.wireframeLinecap !== 'round' && (i.wireframeLinecap = this.wireframeLinecap),
			this.wireframeLinejoin !== 'round' && (i.wireframeLinejoin = this.wireframeLinejoin),
			this.flatShading === !0 && (i.flatShading = this.flatShading),
			this.visible === !1 && (i.visible = !1),
			this.toneMapped === !1 && (i.toneMapped = !1),
			this.fog === !1 && (i.fog = !1),
			Object.keys(this.userData).length > 0 && (i.userData = this.userData);
		function n(r) {
			const o = [];
			for (const a in r) {
				const c = r[a];
				delete c.metadata, o.push(c);
			}
			return o;
		}
		if (t) {
			const r = n(e.textures),
				o = n(e.images);
			r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o);
		}
		return i;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		(this.name = e.name), (this.blending = e.blending), (this.side = e.side), (this.vertexColors = e.vertexColors), (this.opacity = e.opacity), (this.transparent = e.transparent), (this.blendSrc = e.blendSrc), (this.blendDst = e.blendDst), (this.blendEquation = e.blendEquation), (this.blendSrcAlpha = e.blendSrcAlpha), (this.blendDstAlpha = e.blendDstAlpha), (this.blendEquationAlpha = e.blendEquationAlpha), (this.depthFunc = e.depthFunc), (this.depthTest = e.depthTest), (this.depthWrite = e.depthWrite), (this.stencilWriteMask = e.stencilWriteMask), (this.stencilFunc = e.stencilFunc), (this.stencilRef = e.stencilRef), (this.stencilFuncMask = e.stencilFuncMask), (this.stencilFail = e.stencilFail), (this.stencilZFail = e.stencilZFail), (this.stencilZPass = e.stencilZPass), (this.stencilWrite = e.stencilWrite);
		const t = e.clippingPlanes;
		let i = null;
		if (t !== null) {
			const n = t.length;
			i = new Array(n);
			for (let r = 0; r !== n; ++r) i[r] = t[r].clone();
		}
		return (this.clippingPlanes = i), (this.clipIntersection = e.clipIntersection), (this.clipShadows = e.clipShadows), (this.shadowSide = e.shadowSide), (this.colorWrite = e.colorWrite), (this.precision = e.precision), (this.polygonOffset = e.polygonOffset), (this.polygonOffsetFactor = e.polygonOffsetFactor), (this.polygonOffsetUnits = e.polygonOffsetUnits), (this.dithering = e.dithering), (this.alphaTest = e.alphaTest), (this.alphaToCoverage = e.alphaToCoverage), (this.premultipliedAlpha = e.premultipliedAlpha), (this.visible = e.visible), (this.toneMapped = e.toneMapped), (this.userData = JSON.parse(JSON.stringify(e.userData))), this;
	}
	dispose() {
		this.dispatchEvent({ type: 'dispose' });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}
class MeshBasicMaterial extends Material {
	constructor(e) {
		super(), (this.isMeshBasicMaterial = !0), (this.type = 'MeshBasicMaterial'), (this.color = new Color(16777215)), (this.map = null), (this.lightMap = null), (this.lightMapIntensity = 1), (this.aoMap = null), (this.aoMapIntensity = 1), (this.specularMap = null), (this.alphaMap = null), (this.envMap = null), (this.combine = MultiplyOperation), (this.reflectivity = 1), (this.refractionRatio = 0.98), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.wireframeLinecap = 'round'), (this.wireframeLinejoin = 'round'), (this.fog = !0), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), (this.map = e.map), (this.lightMap = e.lightMap), (this.lightMapIntensity = e.lightMapIntensity), (this.aoMap = e.aoMap), (this.aoMapIntensity = e.aoMapIntensity), (this.specularMap = e.specularMap), (this.alphaMap = e.alphaMap), (this.envMap = e.envMap), (this.combine = e.combine), (this.reflectivity = e.reflectivity), (this.refractionRatio = e.refractionRatio), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.wireframeLinecap = e.wireframeLinecap), (this.wireframeLinejoin = e.wireframeLinejoin), (this.fog = e.fog), this;
	}
}
const _vector$9 = new Vector3(),
	_vector2$1 = new Vector2();
class BufferAttribute {
	constructor(e, t, i = !1) {
		if (Array.isArray(e)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
		(this.isBufferAttribute = !0), (this.name = ''), (this.array = e), (this.itemSize = t), (this.count = e !== void 0 ? e.length / t : 0), (this.normalized = i), (this.usage = StaticDrawUsage), (this.updateRange = { offset: 0, count: -1 }), (this.version = 0);
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return (this.usage = e), this;
	}
	copy(e) {
		return (this.name = e.name), (this.array = new e.array.constructor(e.array)), (this.itemSize = e.itemSize), (this.count = e.count), (this.normalized = e.normalized), (this.usage = e.usage), this;
	}
	copyAt(e, t, i) {
		(e *= this.itemSize), (i *= t.itemSize);
		for (let n = 0, r = this.itemSize; n < r; n++) this.array[e + n] = t.array[i + n];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) _vector2$1.fromBufferAttribute(this, t), _vector2$1.applyMatrix3(e), this.setXY(t, _vector2$1.x, _vector2$1.y);
		else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) _vector$9.fromBufferAttribute(this, t), _vector$9.applyMatrix3(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, i = this.count; t < i; t++) _vector$9.fromBufferAttribute(this, t), _vector$9.applyMatrix4(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, i = this.count; t < i; t++) _vector$9.fromBufferAttribute(this, t), _vector$9.applyNormalMatrix(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, i = this.count; t < i; t++) _vector$9.fromBufferAttribute(this, t), _vector$9.transformDirection(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = normalize(t, this.array)), (this.array[e * this.itemSize] = t), this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = normalize(t, this.array)), (this.array[e * this.itemSize + 1] = t), this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = normalize(t, this.array)), (this.array[e * this.itemSize + 2] = t), this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = normalize(t, this.array)), (this.array[e * this.itemSize + 3] = t), this;
	}
	setXY(e, t, i) {
		return (e *= this.itemSize), this.normalized && ((t = normalize(t, this.array)), (i = normalize(i, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = i), this;
	}
	setXYZ(e, t, i, n) {
		return (e *= this.itemSize), this.normalized && ((t = normalize(t, this.array)), (i = normalize(i, this.array)), (n = normalize(n, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = i), (this.array[e + 2] = n), this;
	}
	setXYZW(e, t, i, n, r) {
		return (e *= this.itemSize), this.normalized && ((t = normalize(t, this.array)), (i = normalize(i, this.array)), (n = normalize(n, this.array)), (r = normalize(r, this.array))), (this.array[e + 0] = t), (this.array[e + 1] = i), (this.array[e + 2] = n), (this.array[e + 3] = r), this;
	}
	onUpload(e) {
		return (this.onUploadCallback = e), this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
		return this.name !== '' && (e.name = this.name), this.usage !== StaticDrawUsage && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
	}
	copyColorsArray() {
		console.error('THREE.BufferAttribute: copyColorsArray() was removed in r144.');
	}
	copyVector2sArray() {
		console.error('THREE.BufferAttribute: copyVector2sArray() was removed in r144.');
	}
	copyVector3sArray() {
		console.error('THREE.BufferAttribute: copyVector3sArray() was removed in r144.');
	}
	copyVector4sArray() {
		console.error('THREE.BufferAttribute: copyVector4sArray() was removed in r144.');
	}
}
class Uint16BufferAttribute extends BufferAttribute {
	constructor(e, t, i) {
		super(new Uint16Array(e), t, i);
	}
}
class Uint32BufferAttribute extends BufferAttribute {
	constructor(e, t, i) {
		super(new Uint32Array(e), t, i);
	}
}
class Float32BufferAttribute extends BufferAttribute {
	constructor(e, t, i) {
		super(new Float32Array(e), t, i);
	}
}
let _id$1 = 0;
const _m1 = new Matrix4(),
	_obj = new Object3D(),
	_offset = new Vector3(),
	_box$1 = new Box3(),
	_boxMorphTargets = new Box3(),
	_vector$8 = new Vector3();
class BufferGeometry extends EventDispatcher {
	constructor() {
		super(), (this.isBufferGeometry = !0), Object.defineProperty(this, 'id', { value: _id$1++ }), (this.uuid = generateUUID()), (this.name = ''), (this.type = 'BufferGeometry'), (this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.morphTargetsRelative = !1), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null), (this.drawRange = { start: 0, count: 1 / 0 }), (this.userData = {});
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? (this.index = new (arrayNeedsUint32(e) ? Uint32BufferAttribute : Uint16BufferAttribute)(e, 1)) : (this.index = e), this;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return (this.attributes[e] = t), this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, i = 0) {
		this.groups.push({ start: e, count: t, materialIndex: i });
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		(this.drawRange.start = e), (this.drawRange.count = t);
	}
	applyMatrix4(e) {
		const t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
		const i = this.attributes.normal;
		if (i !== void 0) {
			const r = new Matrix3().getNormalMatrix(e);
			i.applyNormalMatrix(r), (i.needsUpdate = !0);
		}
		const n = this.attributes.tangent;
		return n !== void 0 && (n.transformDirection(e), (n.needsUpdate = !0)), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return _m1.makeRotationFromQuaternion(e), this.applyMatrix4(_m1), this;
	}
	rotateX(e) {
		return _m1.makeRotationX(e), this.applyMatrix4(_m1), this;
	}
	rotateY(e) {
		return _m1.makeRotationY(e), this.applyMatrix4(_m1), this;
	}
	rotateZ(e) {
		return _m1.makeRotationZ(e), this.applyMatrix4(_m1), this;
	}
	translate(e, t, i) {
		return _m1.makeTranslation(e, t, i), this.applyMatrix4(_m1), this;
	}
	scale(e, t, i) {
		return _m1.makeScale(e, t, i), this.applyMatrix4(_m1), this;
	}
	lookAt(e) {
		return _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(_offset).negate(), this.translate(_offset.x, _offset.y, _offset.z), this;
	}
	setFromPoints(e) {
		const t = [];
		for (let i = 0, n = e.length; i < n; i++) {
			const r = e[i];
			t.push(r.x, r.y, r.z || 0);
		}
		return this.setAttribute('position', new Float32BufferAttribute(t, 3)), this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Box3());
		const e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new Vector3(-1 / 0, -1 / 0, -1 / 0), new Vector3(1 / 0, 1 / 0, 1 / 0));
			return;
		}
		if (e !== void 0) {
			if ((this.boundingBox.setFromBufferAttribute(e), t))
				for (let i = 0, n = t.length; i < n; i++) {
					const r = t[i];
					_box$1.setFromBufferAttribute(r), this.morphTargetsRelative ? (_vector$8.addVectors(this.boundingBox.min, _box$1.min), this.boundingBox.expandByPoint(_vector$8), _vector$8.addVectors(this.boundingBox.max, _box$1.max), this.boundingBox.expandByPoint(_vector$8)) : (this.boundingBox.expandByPoint(_box$1.min), this.boundingBox.expandByPoint(_box$1.max));
				}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Sphere());
		const e = this.attributes.position,
			t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new Vector3(), 1 / 0);
			return;
		}
		if (e) {
			const i = this.boundingSphere.center;
			if ((_box$1.setFromBufferAttribute(e), t))
				for (let r = 0, o = t.length; r < o; r++) {
					const a = t[r];
					_boxMorphTargets.setFromBufferAttribute(a), this.morphTargetsRelative ? (_vector$8.addVectors(_box$1.min, _boxMorphTargets.min), _box$1.expandByPoint(_vector$8), _vector$8.addVectors(_box$1.max, _boxMorphTargets.max), _box$1.expandByPoint(_vector$8)) : (_box$1.expandByPoint(_boxMorphTargets.min), _box$1.expandByPoint(_boxMorphTargets.max));
				}
			_box$1.getCenter(i);
			let n = 0;
			for (let r = 0, o = e.count; r < o; r++) _vector$8.fromBufferAttribute(e, r), (n = Math.max(n, i.distanceToSquared(_vector$8)));
			if (t)
				for (let r = 0, o = t.length; r < o; r++) {
					const a = t[r],
						c = this.morphTargetsRelative;
					for (let l = 0, u = a.count; l < u; l++) _vector$8.fromBufferAttribute(a, l), c && (_offset.fromBufferAttribute(e, l), _vector$8.add(_offset)), (n = Math.max(n, i.distanceToSquared(_vector$8)));
				}
			(this.boundingSphere.radius = Math.sqrt(n)), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
		}
	}
	computeTangents() {
		const e = this.index,
			t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			console.error('THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)');
			return;
		}
		const i = e.array,
			n = t.position.array,
			r = t.normal.array,
			o = t.uv.array,
			a = n.length / 3;
		this.hasAttribute('tangent') === !1 && this.setAttribute('tangent', new BufferAttribute(new Float32Array(4 * a), 4));
		const c = this.getAttribute('tangent').array,
			l = [],
			u = [];
		for (let P = 0; P < a; P++) (l[P] = new Vector3()), (u[P] = new Vector3());
		const h = new Vector3(),
			d = new Vector3(),
			m = new Vector3(),
			g = new Vector2(),
			p = new Vector2(),
			f = new Vector2(),
			_ = new Vector3(),
			T = new Vector3();
		function x(P, z, Y) {
			h.fromArray(n, P * 3), d.fromArray(n, z * 3), m.fromArray(n, Y * 3), g.fromArray(o, P * 2), p.fromArray(o, z * 2), f.fromArray(o, Y * 2), d.sub(h), m.sub(h), p.sub(g), f.sub(g);
			const D = 1 / (p.x * f.y - f.x * p.y);
			isFinite(D) && (_.copy(d).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(D), T.copy(m).multiplyScalar(p.x).addScaledVector(d, -f.x).multiplyScalar(D), l[P].add(_), l[z].add(_), l[Y].add(_), u[P].add(T), u[z].add(T), u[Y].add(T));
		}
		let S = this.groups;
		S.length === 0 && (S = [{ start: 0, count: i.length }]);
		for (let P = 0, z = S.length; P < z; ++P) {
			const Y = S[P],
				D = Y.start,
				I = Y.count;
			for (let N = D, j = D + I; N < j; N += 3) x(i[N + 0], i[N + 1], i[N + 2]);
		}
		const b = new Vector3(),
			E = new Vector3(),
			A = new Vector3(),
			v = new Vector3();
		function C(P) {
			A.fromArray(r, P * 3), v.copy(A);
			const z = l[P];
			b.copy(z), b.sub(A.multiplyScalar(A.dot(z))).normalize(), E.crossVectors(v, z);
			const D = E.dot(u[P]) < 0 ? -1 : 1;
			(c[P * 4] = b.x), (c[P * 4 + 1] = b.y), (c[P * 4 + 2] = b.z), (c[P * 4 + 3] = D);
		}
		for (let P = 0, z = S.length; P < z; ++P) {
			const Y = S[P],
				D = Y.start,
				I = Y.count;
			for (let N = D, j = D + I; N < j; N += 3) C(i[N + 0]), C(i[N + 1]), C(i[N + 2]);
		}
	}
	computeVertexNormals() {
		const e = this.index,
			t = this.getAttribute('position');
		if (t !== void 0) {
			let i = this.getAttribute('normal');
			if (i === void 0) (i = new BufferAttribute(new Float32Array(t.count * 3), 3)), this.setAttribute('normal', i);
			else for (let d = 0, m = i.count; d < m; d++) i.setXYZ(d, 0, 0, 0);
			const n = new Vector3(),
				r = new Vector3(),
				o = new Vector3(),
				a = new Vector3(),
				c = new Vector3(),
				l = new Vector3(),
				u = new Vector3(),
				h = new Vector3();
			if (e)
				for (let d = 0, m = e.count; d < m; d += 3) {
					const g = e.getX(d + 0),
						p = e.getX(d + 1),
						f = e.getX(d + 2);
					n.fromBufferAttribute(t, g), r.fromBufferAttribute(t, p), o.fromBufferAttribute(t, f), u.subVectors(o, r), h.subVectors(n, r), u.cross(h), a.fromBufferAttribute(i, g), c.fromBufferAttribute(i, p), l.fromBufferAttribute(i, f), a.add(u), c.add(u), l.add(u), i.setXYZ(g, a.x, a.y, a.z), i.setXYZ(p, c.x, c.y, c.z), i.setXYZ(f, l.x, l.y, l.z);
				}
			else for (let d = 0, m = t.count; d < m; d += 3) n.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, r), h.subVectors(n, r), u.cross(h), i.setXYZ(d + 0, u.x, u.y, u.z), i.setXYZ(d + 1, u.x, u.y, u.z), i.setXYZ(d + 2, u.x, u.y, u.z);
			this.normalizeNormals(), (i.needsUpdate = !0);
		}
	}
	merge() {
		return console.error('THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead.'), this;
	}
	normalizeNormals() {
		const e = this.attributes.normal;
		for (let t = 0, i = e.count; t < i; t++) _vector$8.fromBufferAttribute(e, t), _vector$8.normalize(), e.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z);
	}
	toNonIndexed() {
		function e(a, c) {
			const l = a.array,
				u = a.itemSize,
				h = a.normalized,
				d = new l.constructor(c.length * u);
			let m = 0,
				g = 0;
			for (let p = 0, f = c.length; p < f; p++) {
				a.isInterleavedBufferAttribute ? (m = c[p] * a.data.stride + a.offset) : (m = c[p] * u);
				for (let _ = 0; _ < u; _++) d[g++] = l[m++];
			}
			return new BufferAttribute(d, u, h);
		}
		if (this.index === null) return console.warn('THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'), this;
		const t = new BufferGeometry(),
			i = this.index.array,
			n = this.attributes;
		for (const a in n) {
			const c = n[a],
				l = e(c, i);
			t.setAttribute(a, l);
		}
		const r = this.morphAttributes;
		for (const a in r) {
			const c = [],
				l = r[a];
			for (let u = 0, h = l.length; u < h; u++) {
				const d = l[u],
					m = e(d, i);
				c.push(m);
			}
			t.morphAttributes[a] = c;
		}
		t.morphTargetsRelative = this.morphTargetsRelative;
		const o = this.groups;
		for (let a = 0, c = o.length; a < c; a++) {
			const l = o[a];
			t.addGroup(l.start, l.count, l.materialIndex);
		}
		return t;
	}
	toJSON() {
		const e = { metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } };
		if (((e.uuid = this.uuid), (e.type = this.type), this.name !== '' && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0)) {
			const c = this.parameters;
			for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
			return e;
		}
		e.data = { attributes: {} };
		const t = this.index;
		t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
		const i = this.attributes;
		for (const c in i) {
			const l = i[c];
			e.data.attributes[c] = l.toJSON(e.data);
		}
		const n = {};
		let r = !1;
		for (const c in this.morphAttributes) {
			const l = this.morphAttributes[c],
				u = [];
			for (let h = 0, d = l.length; h < d; h++) {
				const m = l[h];
				u.push(m.toJSON(e.data));
			}
			u.length > 0 && ((n[c] = u), (r = !0));
		}
		r && ((e.data.morphAttributes = n), (e.data.morphTargetsRelative = this.morphTargetsRelative));
		const o = this.groups;
		o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
		const a = this.boundingSphere;
		return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		(this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null);
		const t = {};
		this.name = e.name;
		const i = e.index;
		i !== null && this.setIndex(i.clone(t));
		const n = e.attributes;
		for (const l in n) {
			const u = n[l];
			this.setAttribute(l, u.clone(t));
		}
		const r = e.morphAttributes;
		for (const l in r) {
			const u = [],
				h = r[l];
			for (let d = 0, m = h.length; d < m; d++) u.push(h[d].clone(t));
			this.morphAttributes[l] = u;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		const o = e.groups;
		for (let l = 0, u = o.length; l < u; l++) {
			const h = o[l];
			this.addGroup(h.start, h.count, h.materialIndex);
		}
		const a = e.boundingBox;
		a !== null && (this.boundingBox = a.clone());
		const c = e.boundingSphere;
		return c !== null && (this.boundingSphere = c.clone()), (this.drawRange.start = e.drawRange.start), (this.drawRange.count = e.drawRange.count), (this.userData = e.userData), e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
	}
	dispose() {
		this.dispatchEvent({ type: 'dispose' });
	}
}
const _inverseMatrix$2 = new Matrix4(),
	_ray$2 = new Ray(),
	_sphere$3 = new Sphere(),
	_vA$1 = new Vector3(),
	_vB$1 = new Vector3(),
	_vC$1 = new Vector3(),
	_tempA = new Vector3(),
	_morphA = new Vector3(),
	_uvA$1 = new Vector2(),
	_uvB$1 = new Vector2(),
	_uvC$1 = new Vector2(),
	_intersectionPoint = new Vector3(),
	_intersectionPointWorld = new Vector3();
class Mesh extends Object3D {
	constructor(e = new BufferGeometry(), t = new MeshBasicMaterial()) {
		super(), (this.isMesh = !0), (this.type = 'Mesh'), (this.geometry = e), (this.material = t), this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), (this.material = e.material), (this.geometry = e.geometry), this;
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			i = Object.keys(t);
		if (i.length > 0) {
			const n = t[i[0]];
			if (n !== void 0) {
				(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
				for (let r = 0, o = n.length; r < o; r++) {
					const a = n[r].name || String(r);
					this.morphTargetInfluences.push(0), (this.morphTargetDictionary[a] = r);
				}
			}
		}
	}
	getVertexPosition(e, t) {
		const i = this.geometry,
			n = i.attributes.position,
			r = i.morphAttributes.position,
			o = i.morphTargetsRelative;
		t.fromBufferAttribute(n, e);
		const a = this.morphTargetInfluences;
		if (r && a) {
			_morphA.set(0, 0, 0);
			for (let c = 0, l = r.length; c < l; c++) {
				const u = a[c],
					h = r[c];
				u !== 0 && (_tempA.fromBufferAttribute(h, e), o ? _morphA.addScaledVector(_tempA, u) : _morphA.addScaledVector(_tempA.sub(t), u));
			}
			t.add(_morphA);
		}
		return this.isSkinnedMesh && this.boneTransform(e, t), t;
	}
	raycast(e, t) {
		const i = this.geometry,
			n = this.material,
			r = this.matrixWorld;
		if (n === void 0 || (i.boundingSphere === null && i.computeBoundingSphere(), _sphere$3.copy(i.boundingSphere), _sphere$3.applyMatrix4(r), e.ray.intersectsSphere(_sphere$3) === !1) || (_inverseMatrix$2.copy(r).invert(), _ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2), i.boundingBox !== null && _ray$2.intersectsBox(i.boundingBox) === !1)) return;
		let o;
		const a = i.index,
			c = i.attributes.position,
			l = i.attributes.uv,
			u = i.attributes.uv2,
			h = i.groups,
			d = i.drawRange;
		if (a !== null)
			if (Array.isArray(n))
				for (let m = 0, g = h.length; m < g; m++) {
					const p = h[m],
						f = n[p.materialIndex],
						_ = Math.max(p.start, d.start),
						T = Math.min(a.count, Math.min(p.start + p.count, d.start + d.count));
					for (let x = _, S = T; x < S; x += 3) {
						const b = a.getX(x),
							E = a.getX(x + 1),
							A = a.getX(x + 2);
						(o = checkBufferGeometryIntersection(this, f, e, _ray$2, l, u, b, E, A)), o && ((o.faceIndex = Math.floor(x / 3)), (o.face.materialIndex = p.materialIndex), t.push(o));
					}
				}
			else {
				const m = Math.max(0, d.start),
					g = Math.min(a.count, d.start + d.count);
				for (let p = m, f = g; p < f; p += 3) {
					const _ = a.getX(p),
						T = a.getX(p + 1),
						x = a.getX(p + 2);
					(o = checkBufferGeometryIntersection(this, n, e, _ray$2, l, u, _, T, x)), o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
				}
			}
		else if (c !== void 0)
			if (Array.isArray(n))
				for (let m = 0, g = h.length; m < g; m++) {
					const p = h[m],
						f = n[p.materialIndex],
						_ = Math.max(p.start, d.start),
						T = Math.min(c.count, Math.min(p.start + p.count, d.start + d.count));
					for (let x = _, S = T; x < S; x += 3) {
						const b = x,
							E = x + 1,
							A = x + 2;
						(o = checkBufferGeometryIntersection(this, f, e, _ray$2, l, u, b, E, A)), o && ((o.faceIndex = Math.floor(x / 3)), (o.face.materialIndex = p.materialIndex), t.push(o));
					}
				}
			else {
				const m = Math.max(0, d.start),
					g = Math.min(c.count, d.start + d.count);
				for (let p = m, f = g; p < f; p += 3) {
					const _ = p,
						T = p + 1,
						x = p + 2;
					(o = checkBufferGeometryIntersection(this, n, e, _ray$2, l, u, _, T, x)), o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
				}
			}
	}
}
function checkIntersection(s, e, t, i, n, r, o, a) {
	let c;
	if ((e.side === BackSide ? (c = i.intersectTriangle(o, r, n, !0, a)) : (c = i.intersectTriangle(n, r, o, e.side === FrontSide, a)), c === null)) return null;
	_intersectionPointWorld.copy(a), _intersectionPointWorld.applyMatrix4(s.matrixWorld);
	const l = t.ray.origin.distanceTo(_intersectionPointWorld);
	return l < t.near || l > t.far ? null : { distance: l, point: _intersectionPointWorld.clone(), object: s };
}
function checkBufferGeometryIntersection(s, e, t, i, n, r, o, a, c) {
	s.getVertexPosition(o, _vA$1), s.getVertexPosition(a, _vB$1), s.getVertexPosition(c, _vC$1);
	const l = checkIntersection(s, e, t, i, _vA$1, _vB$1, _vC$1, _intersectionPoint);
	if (l) {
		n && (_uvA$1.fromBufferAttribute(n, o), _uvB$1.fromBufferAttribute(n, a), _uvC$1.fromBufferAttribute(n, c), (l.uv = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2()))), r && (_uvA$1.fromBufferAttribute(r, o), _uvB$1.fromBufferAttribute(r, a), _uvC$1.fromBufferAttribute(r, c), (l.uv2 = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2())));
		const u = { a: o, b: a, c, normal: new Vector3(), materialIndex: 0 };
		Triangle.getNormal(_vA$1, _vB$1, _vC$1, u.normal), (l.face = u);
	}
	return l;
}
class BoxGeometry extends BufferGeometry {
	constructor(e = 1, t = 1, i = 1, n = 1, r = 1, o = 1) {
		super(), (this.type = 'BoxGeometry'), (this.parameters = { width: e, height: t, depth: i, widthSegments: n, heightSegments: r, depthSegments: o });
		const a = this;
		(n = Math.floor(n)), (r = Math.floor(r)), (o = Math.floor(o));
		const c = [],
			l = [],
			u = [],
			h = [];
		let d = 0,
			m = 0;
		g('z', 'y', 'x', -1, -1, i, t, e, o, r, 0), g('z', 'y', 'x', 1, -1, i, t, -e, o, r, 1), g('x', 'z', 'y', 1, 1, e, i, t, n, o, 2), g('x', 'z', 'y', 1, -1, e, i, -t, n, o, 3), g('x', 'y', 'z', 1, -1, e, t, i, n, r, 4), g('x', 'y', 'z', -1, -1, e, t, -i, n, r, 5), this.setIndex(c), this.setAttribute('position', new Float32BufferAttribute(l, 3)), this.setAttribute('normal', new Float32BufferAttribute(u, 3)), this.setAttribute('uv', new Float32BufferAttribute(h, 2));
		function g(p, f, _, T, x, S, b, E, A, v, C) {
			const P = S / A,
				z = b / v,
				Y = S / 2,
				D = b / 2,
				I = E / 2,
				N = A + 1,
				j = v + 1;
			let K = 0,
				q = 0;
			const ie = new Vector3();
			for (let ee = 0; ee < j; ee++) {
				const B = ee * z - D;
				for (let H = 0; H < N; H++) {
					const Z = H * P - Y;
					(ie[p] = Z * T), (ie[f] = B * x), (ie[_] = I), l.push(ie.x, ie.y, ie.z), (ie[p] = 0), (ie[f] = 0), (ie[_] = E > 0 ? 1 : -1), u.push(ie.x, ie.y, ie.z), h.push(H / A), h.push(1 - ee / v), (K += 1);
				}
			}
			for (let ee = 0; ee < v; ee++)
				for (let B = 0; B < A; B++) {
					const H = d + B + N * ee,
						Z = d + B + N * (ee + 1),
						te = d + (B + 1) + N * (ee + 1),
						re = d + (B + 1) + N * ee;
					c.push(H, Z, re), c.push(Z, te, re), (q += 6);
				}
			a.addGroup(m, q, C), (m += q), (d += K);
		}
	}
	static fromJSON(e) {
		return new BoxGeometry(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
	}
}
function cloneUniforms(s) {
	const e = {};
	for (const t in s) {
		e[t] = {};
		for (const i in s[t]) {
			const n = s[t][i];
			n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion) ? (e[t][i] = n.clone()) : Array.isArray(n) ? (e[t][i] = n.slice()) : (e[t][i] = n);
		}
	}
	return e;
}
function mergeUniforms(s) {
	const e = {};
	for (let t = 0; t < s.length; t++) {
		const i = cloneUniforms(s[t]);
		for (const n in i) e[n] = i[n];
	}
	return e;
}
function cloneUniformsGroups(s) {
	const e = [];
	for (let t = 0; t < s.length; t++) e.push(s[t].clone());
	return e;
}
function getUnlitUniformColorSpace(s) {
	return s.getRenderTarget() === null && s.outputEncoding === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
	default_fragment = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ShaderMaterial extends Material {
	constructor(e) {
		super(), (this.isShaderMaterial = !0), (this.type = 'ShaderMaterial'), (this.defines = {}), (this.uniforms = {}), (this.uniformsGroups = []), (this.vertexShader = default_vertex), (this.fragmentShader = default_fragment), (this.linewidth = 1), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.fog = !1), (this.lights = !1), (this.clipping = !1), (this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }), (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }), (this.index0AttributeName = void 0), (this.uniformsNeedUpdate = !1), (this.glslVersion = null), e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), (this.fragmentShader = e.fragmentShader), (this.vertexShader = e.vertexShader), (this.uniforms = cloneUniforms(e.uniforms)), (this.uniformsGroups = cloneUniformsGroups(e.uniformsGroups)), (this.defines = Object.assign({}, e.defines)), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.fog = e.fog), (this.lights = e.lights), (this.clipping = e.clipping), (this.extensions = Object.assign({}, e.extensions)), (this.glslVersion = e.glslVersion), this;
	}
	toJSON(e) {
		const t = super.toJSON(e);
		(t.glslVersion = this.glslVersion), (t.uniforms = {});
		for (const n in this.uniforms) {
			const o = this.uniforms[n].value;
			o && o.isTexture ? (t.uniforms[n] = { type: 't', value: o.toJSON(e).uuid }) : o && o.isColor ? (t.uniforms[n] = { type: 'c', value: o.getHex() }) : o && o.isVector2 ? (t.uniforms[n] = { type: 'v2', value: o.toArray() }) : o && o.isVector3 ? (t.uniforms[n] = { type: 'v3', value: o.toArray() }) : o && o.isVector4 ? (t.uniforms[n] = { type: 'v4', value: o.toArray() }) : o && o.isMatrix3 ? (t.uniforms[n] = { type: 'm3', value: o.toArray() }) : o && o.isMatrix4 ? (t.uniforms[n] = { type: 'm4', value: o.toArray() }) : (t.uniforms[n] = { value: o });
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), (t.vertexShader = this.vertexShader), (t.fragmentShader = this.fragmentShader);
		const i = {};
		for (const n in this.extensions) this.extensions[n] === !0 && (i[n] = !0);
		return Object.keys(i).length > 0 && (t.extensions = i), t;
	}
}
class Camera extends Object3D {
	constructor() {
		super(), (this.isCamera = !0), (this.type = 'Camera'), (this.matrixWorldInverse = new Matrix4()), (this.projectionMatrix = new Matrix4()), (this.projectionMatrixInverse = new Matrix4());
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		const t = this.matrixWorld.elements;
		return e.set(-t[8], -t[9], -t[10]).normalize();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
class PerspectiveCamera extends Camera {
	constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
		super(), (this.isPerspectiveCamera = !0), (this.type = 'PerspectiveCamera'), (this.fov = e), (this.zoom = 1), (this.near = i), (this.far = n), (this.focus = 10), (this.aspect = t), (this.view = null), (this.filmGauge = 35), (this.filmOffset = 0), this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), (this.fov = e.fov), (this.zoom = e.zoom), (this.near = e.near), (this.far = e.far), (this.focus = e.focus), (this.aspect = e.aspect), (this.view = e.view === null ? null : Object.assign({}, e.view)), (this.filmGauge = e.filmGauge), (this.filmOffset = e.filmOffset), this;
	}
	setFocalLength(e) {
		const t = (0.5 * this.getFilmHeight()) / e;
		(this.fov = RAD2DEG * 2 * Math.atan(t)), this.updateProjectionMatrix();
	}
	getFocalLength() {
		const e = Math.tan(DEG2RAD * 0.5 * this.fov);
		return (0.5 * this.getFilmHeight()) / e;
	}
	getEffectiveFOV() {
		return RAD2DEG * 2 * Math.atan(Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	setViewOffset(e, t, i, n, r, o) {
		(this.aspect = e / t), this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), (this.view.enabled = !0), (this.view.fullWidth = e), (this.view.fullHeight = t), (this.view.offsetX = i), (this.view.offsetY = n), (this.view.width = r), (this.view.height = o), this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		const e = this.near;
		let t = (e * Math.tan(DEG2RAD * 0.5 * this.fov)) / this.zoom,
			i = 2 * t,
			n = this.aspect * i,
			r = -0.5 * n;
		const o = this.view;
		if (this.view !== null && this.view.enabled) {
			const c = o.fullWidth,
				l = o.fullHeight;
			(r += (o.offsetX * n) / c), (t -= (o.offsetY * i) / l), (n *= o.width / c), (i *= o.height / l);
		}
		const a = this.filmOffset;
		a !== 0 && (r += (e * a) / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return (t.object.fov = this.fov), (t.object.zoom = this.zoom), (t.object.near = this.near), (t.object.far = this.far), (t.object.focus = this.focus), (t.object.aspect = this.aspect), this.view !== null && (t.object.view = Object.assign({}, this.view)), (t.object.filmGauge = this.filmGauge), (t.object.filmOffset = this.filmOffset), t;
	}
}
const fov = -90,
	aspect = 1;
class CubeCamera extends Object3D {
	constructor(e, t, i) {
		super(), (this.type = 'CubeCamera'), (this.renderTarget = i);
		const n = new PerspectiveCamera(fov, aspect, e, t);
		(n.layers = this.layers), n.up.set(0, 1, 0), n.lookAt(1, 0, 0), this.add(n);
		const r = new PerspectiveCamera(fov, aspect, e, t);
		(r.layers = this.layers), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
		const o = new PerspectiveCamera(fov, aspect, e, t);
		(o.layers = this.layers), o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
		const a = new PerspectiveCamera(fov, aspect, e, t);
		(a.layers = this.layers), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
		const c = new PerspectiveCamera(fov, aspect, e, t);
		(c.layers = this.layers), c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
		const l = new PerspectiveCamera(fov, aspect, e, t);
		(l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		const i = this.renderTarget,
			[n, r, o, a, c, l] = this.children,
			u = e.getRenderTarget(),
			h = e.toneMapping,
			d = e.xr.enabled;
		(e.toneMapping = NoToneMapping), (e.xr.enabled = !1);
		const m = i.texture.generateMipmaps;
		(i.texture.generateMipmaps = !1), e.setRenderTarget(i, 0), e.render(t, n), e.setRenderTarget(i, 1), e.render(t, r), e.setRenderTarget(i, 2), e.render(t, o), e.setRenderTarget(i, 3), e.render(t, a), e.setRenderTarget(i, 4), e.render(t, c), (i.texture.generateMipmaps = m), e.setRenderTarget(i, 5), e.render(t, l), e.setRenderTarget(u), (e.toneMapping = h), (e.xr.enabled = d), (i.texture.needsPMREMUpdate = !0);
	}
}
class CubeTexture extends Texture {
	constructor(e, t, i, n, r, o, a, c, l, u) {
		(e = e !== void 0 ? e : []), (t = t !== void 0 ? t : CubeReflectionMapping), super(e, t, i, n, r, o, a, c, l, u), (this.isCubeTexture = !0), (this.flipY = !1);
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}
class WebGLCubeRenderTarget extends WebGLRenderTarget {
	constructor(e = 1, t = {}) {
		super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
		const i = { width: e, height: e, depth: 1 },
			n = [i, i, i, i, i, i];
		(this.texture = new CubeTexture(n, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding)), (this.texture.isRenderTargetTexture = !0), (this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1), (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : LinearFilter);
	}
	fromEquirectangularTexture(e, t) {
		(this.texture.type = t.type), (this.texture.encoding = t.encoding), (this.texture.generateMipmaps = t.generateMipmaps), (this.texture.minFilter = t.minFilter), (this.texture.magFilter = t.magFilter);
		const i = {
				uniforms: { tEquirect: { value: null } },
				vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
				fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
			},
			n = new BoxGeometry(5, 5, 5),
			r = new ShaderMaterial({ name: 'CubemapFromEquirect', uniforms: cloneUniforms(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: BackSide, blending: NoBlending });
		r.uniforms.tEquirect.value = t;
		const o = new Mesh(n, r),
			a = t.minFilter;
		return t.minFilter === LinearMipmapLinearFilter && (t.minFilter = LinearFilter), new CubeCamera(1, 10, this).update(e, o), (t.minFilter = a), o.geometry.dispose(), o.material.dispose(), this;
	}
	clear(e, t, i, n) {
		const r = e.getRenderTarget();
		for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, i, n);
		e.setRenderTarget(r);
	}
}
const _vector1 = new Vector3(),
	_vector2 = new Vector3(),
	_normalMatrix = new Matrix3();
class Plane {
	constructor(e = new Vector3(1, 0, 0), t = 0) {
		(this.isPlane = !0), (this.normal = e), (this.constant = t);
	}
	set(e, t) {
		return this.normal.copy(e), (this.constant = t), this;
	}
	setComponents(e, t, i, n) {
		return this.normal.set(e, t, i), (this.constant = n), this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
	}
	setFromCoplanarPoints(e, t, i) {
		const n = _vector1.subVectors(i, t).cross(_vector2.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(n, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), (this.constant = e.constant), this;
	}
	normalize() {
		const e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), (this.constant *= e), this;
	}
	negate() {
		return (this.constant *= -1), this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
	}
	intersectLine(e, t) {
		const i = e.delta(_vector1),
			n = this.normal.dot(i);
		if (n === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		const r = -(e.start.dot(this.normal) + this.constant) / n;
		return r < 0 || r > 1 ? null : t.copy(i).multiplyScalar(r).add(e.start);
	}
	intersectsLine(e) {
		const t = this.distanceToPoint(e.start),
			i = this.distanceToPoint(e.end);
		return (t < 0 && i > 0) || (i < 0 && t > 0);
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		const i = t || _normalMatrix.getNormalMatrix(e),
			n = this.coplanarPoint(_vector1).applyMatrix4(e),
			r = this.normal.applyMatrix3(i).normalize();
		return (this.constant = -n.dot(r)), this;
	}
	translate(e) {
		return (this.constant -= e.dot(this.normal)), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
const _sphere$2 = new Sphere(),
	_vector$7 = new Vector3();
class Frustum {
	constructor(e = new Plane(), t = new Plane(), i = new Plane(), n = new Plane(), r = new Plane(), o = new Plane()) {
		this.planes = [e, t, i, n, r, o];
	}
	set(e, t, i, n, r, o) {
		const a = this.planes;
		return a[0].copy(e), a[1].copy(t), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(o), this;
	}
	copy(e) {
		const t = this.planes;
		for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
		return this;
	}
	setFromProjectionMatrix(e) {
		const t = this.planes,
			i = e.elements,
			n = i[0],
			r = i[1],
			o = i[2],
			a = i[3],
			c = i[4],
			l = i[5],
			u = i[6],
			h = i[7],
			d = i[8],
			m = i[9],
			g = i[10],
			p = i[11],
			f = i[12],
			_ = i[13],
			T = i[14],
			x = i[15];
		return t[0].setComponents(a - n, h - c, p - d, x - f).normalize(), t[1].setComponents(a + n, h + c, p + d, x + f).normalize(), t[2].setComponents(a + r, h + l, p + m, x + _).normalize(), t[3].setComponents(a - r, h - l, p - m, x - _).normalize(), t[4].setComponents(a - o, h - u, p - g, x - T).normalize(), t[5].setComponents(a + o, h + u, p + g, x + T).normalize(), this;
	}
	intersectsObject(e) {
		const t = e.geometry;
		return t.boundingSphere === null && t.computeBoundingSphere(), _sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(_sphere$2);
	}
	intersectsSprite(e) {
		return _sphere$2.center.set(0, 0, 0), (_sphere$2.radius = 0.7071067811865476), _sphere$2.applyMatrix4(e.matrixWorld), this.intersectsSphere(_sphere$2);
	}
	intersectsSphere(e) {
		const t = this.planes,
			i = e.center,
			n = -e.radius;
		for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < n) return !1;
		return !0;
	}
	intersectsBox(e) {
		const t = this.planes;
		for (let i = 0; i < 6; i++) {
			const n = t[i];
			if (((_vector$7.x = n.normal.x > 0 ? e.max.x : e.min.x), (_vector$7.y = n.normal.y > 0 ? e.max.y : e.min.y), (_vector$7.z = n.normal.z > 0 ? e.max.z : e.min.z), n.distanceToPoint(_vector$7) < 0)) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		const t = this.planes;
		for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
function WebGLAnimation() {
	let s = null,
		e = !1,
		t = null,
		i = null;
	function n(r, o) {
		t(r, o), (i = s.requestAnimationFrame(n));
	}
	return {
		start: function () {
			e !== !0 && t !== null && ((i = s.requestAnimationFrame(n)), (e = !0));
		},
		stop: function () {
			s.cancelAnimationFrame(i), (e = !1);
		},
		setAnimationLoop: function (r) {
			t = r;
		},
		setContext: function (r) {
			s = r;
		},
	};
}
function WebGLAttributes(s, e) {
	const t = e.isWebGL2,
		i = new WeakMap();
	function n(l, u) {
		const h = l.array,
			d = l.usage,
			m = s.createBuffer();
		s.bindBuffer(u, m), s.bufferData(u, h, d), l.onUploadCallback();
		let g;
		if (h instanceof Float32Array) g = 5126;
		else if (h instanceof Uint16Array)
			if (l.isFloat16BufferAttribute)
				if (t) g = 5131;
				else throw new Error('THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.');
			else g = 5123;
		else if (h instanceof Int16Array) g = 5122;
		else if (h instanceof Uint32Array) g = 5125;
		else if (h instanceof Int32Array) g = 5124;
		else if (h instanceof Int8Array) g = 5120;
		else if (h instanceof Uint8Array) g = 5121;
		else if (h instanceof Uint8ClampedArray) g = 5121;
		else throw new Error('THREE.WebGLAttributes: Unsupported buffer data format: ' + h);
		return { buffer: m, type: g, bytesPerElement: h.BYTES_PER_ELEMENT, version: l.version };
	}
	function r(l, u, h) {
		const d = u.array,
			m = u.updateRange;
		s.bindBuffer(h, l), m.count === -1 ? s.bufferSubData(h, 0, d) : (t ? s.bufferSubData(h, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count) : s.bufferSubData(h, m.offset * d.BYTES_PER_ELEMENT, d.subarray(m.offset, m.offset + m.count)), (m.count = -1)), u.onUploadCallback();
	}
	function o(l) {
		return l.isInterleavedBufferAttribute && (l = l.data), i.get(l);
	}
	function a(l) {
		l.isInterleavedBufferAttribute && (l = l.data);
		const u = i.get(l);
		u && (s.deleteBuffer(u.buffer), i.delete(l));
	}
	function c(l, u) {
		if (l.isGLBufferAttribute) {
			const d = i.get(l);
			(!d || d.version < l.version) && i.set(l, { buffer: l.buffer, type: l.type, bytesPerElement: l.elementSize, version: l.version });
			return;
		}
		l.isInterleavedBufferAttribute && (l = l.data);
		const h = i.get(l);
		h === void 0 ? i.set(l, n(l, u)) : h.version < l.version && (r(h.buffer, l, u), (h.version = l.version));
	}
	return { get: o, remove: a, update: c };
}
class PlaneGeometry extends BufferGeometry {
	constructor(e = 1, t = 1, i = 1, n = 1) {
		super(), (this.type = 'PlaneGeometry'), (this.parameters = { width: e, height: t, widthSegments: i, heightSegments: n });
		const r = e / 2,
			o = t / 2,
			a = Math.floor(i),
			c = Math.floor(n),
			l = a + 1,
			u = c + 1,
			h = e / a,
			d = t / c,
			m = [],
			g = [],
			p = [],
			f = [];
		for (let _ = 0; _ < u; _++) {
			const T = _ * d - o;
			for (let x = 0; x < l; x++) {
				const S = x * h - r;
				g.push(S, -T, 0), p.push(0, 0, 1), f.push(x / a), f.push(1 - _ / c);
			}
		}
		for (let _ = 0; _ < c; _++)
			for (let T = 0; T < a; T++) {
				const x = T + l * _,
					S = T + l * (_ + 1),
					b = T + 1 + l * (_ + 1),
					E = T + 1 + l * _;
				m.push(x, S, E), m.push(S, b, E);
			}
		this.setIndex(m), this.setAttribute('position', new Float32BufferAttribute(g, 3)), this.setAttribute('normal', new Float32BufferAttribute(p, 3)), this.setAttribute('uv', new Float32BufferAttribute(f, 2));
	}
	static fromJSON(e) {
		return new PlaneGeometry(e.width, e.height, e.widthSegments, e.heightSegments);
	}
}
var alphamap_fragment = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
	alphamap_pars_fragment = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
	alphatest_fragment = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
	alphatest_pars_fragment = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
	aomap_fragment = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
	aomap_pars_fragment = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
	begin_vertex = 'vec3 transformed = vec3( position );',
	beginnormal_vertex = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
	bsdfs = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
	iridescence_fragment = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
	bumpmap_pars_fragment = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
	clipping_planes_fragment = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
	clipping_planes_pars_fragment = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
	clipping_planes_pars_vertex = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
	clipping_planes_vertex = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
	color_fragment = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
	color_pars_fragment = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
	color_pars_vertex = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
	color_vertex = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
	common = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
	cube_uv_reflection_fragment = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
	defaultnormal_vertex = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
	displacementmap_pars_vertex = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
	displacementmap_vertex = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
	emissivemap_fragment = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
	emissivemap_pars_fragment = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
	encodings_fragment = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
	encodings_pars_fragment = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
	envmap_fragment = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
	envmap_common_pars_fragment = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,
	envmap_pars_fragment = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
	envmap_pars_vertex = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
	envmap_vertex = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
	fog_vertex = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
	fog_pars_vertex = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
	fog_fragment = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
	fog_pars_fragment = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
	gradientmap_pars_fragment = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
	lightmap_fragment = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
	lightmap_pars_fragment = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
	lights_lambert_fragment = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
	lights_lambert_pars_fragment = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
	lights_pars_begin = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
	envmap_physical_pars_fragment = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
	lights_toon_fragment = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
	lights_toon_pars_fragment = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
	lights_phong_fragment = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
	lights_phong_pars_fragment = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
	lights_physical_fragment = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
	lights_physical_pars_fragment = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
	lights_fragment_begin = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
	lights_fragment_maps = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
	lights_fragment_end = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
	logdepthbuf_fragment = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
	logdepthbuf_pars_fragment = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
	logdepthbuf_pars_vertex = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
	logdepthbuf_vertex = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
	map_fragment = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
	map_pars_fragment = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
	map_particle_fragment = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
	map_particle_pars_fragment = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
	metalnessmap_fragment = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
	metalnessmap_pars_fragment = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
	morphcolor_vertex = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
	morphnormal_vertex = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
	morphtarget_pars_vertex = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
	morphtarget_vertex = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
	normal_fragment_begin = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
	normal_fragment_maps = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
	normal_pars_fragment = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
	normal_pars_vertex = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
	normal_vertex = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
	normalmap_pars_fragment = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
	clearcoat_normal_fragment_begin = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
	clearcoat_normal_fragment_maps = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
	clearcoat_pars_fragment = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
	iridescence_pars_fragment = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
	output_fragment = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
	packing = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
	premultiplied_alpha_fragment = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
	project_vertex = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
	dithering_fragment = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
	dithering_pars_fragment = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
	roughnessmap_fragment = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
	roughnessmap_pars_fragment = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
	shadowmap_pars_fragment = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
	shadowmap_pars_vertex = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
	shadowmap_vertex = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
	shadowmask_pars_fragment = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
	skinbase_vertex = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
	skinning_pars_vertex = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
	skinning_vertex = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
	skinnormal_vertex = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
	specularmap_fragment = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
	specularmap_pars_fragment = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
	tonemapping_fragment = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
	tonemapping_pars_fragment = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
	transmission_fragment = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
	transmission_pars_fragment = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
	uv_pars_fragment = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
	uv_pars_vertex = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
	uv_vertex = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
	uv2_pars_fragment = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
	uv2_pars_vertex = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
	uv2_vertex = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
	worldpos_vertex = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vertex$h = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
	fragment$h = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	vertex$g = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
	fragment$g = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	vertex$f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
	fragment$f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	vertex$e = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
	fragment$e = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
	vertex$d = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
	fragment$d = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
	vertex$c = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
	fragment$c = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
	vertex$b = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	fragment$b = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
	vertex$a = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
	fragment$a = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$9 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	fragment$9 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$8 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
	fragment$8 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$7 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
	fragment$7 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
	vertex$6 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	fragment$6 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$5 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
	fragment$5 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$4 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	fragment$4 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
	vertex$3 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
	fragment$3 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
	vertex$2 = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
	fragment$2 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	vertex$1 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
	fragment$1 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
	ShaderChunk = {
		alphamap_fragment,
		alphamap_pars_fragment,
		alphatest_fragment,
		alphatest_pars_fragment,
		aomap_fragment,
		aomap_pars_fragment,
		begin_vertex,
		beginnormal_vertex,
		bsdfs,
		iridescence_fragment,
		bumpmap_pars_fragment,
		clipping_planes_fragment,
		clipping_planes_pars_fragment,
		clipping_planes_pars_vertex,
		clipping_planes_vertex,
		color_fragment,
		color_pars_fragment,
		color_pars_vertex,
		color_vertex,
		common,
		cube_uv_reflection_fragment,
		defaultnormal_vertex,
		displacementmap_pars_vertex,
		displacementmap_vertex,
		emissivemap_fragment,
		emissivemap_pars_fragment,
		encodings_fragment,
		encodings_pars_fragment,
		envmap_fragment,
		envmap_common_pars_fragment,
		envmap_pars_fragment,
		envmap_pars_vertex,
		envmap_physical_pars_fragment,
		envmap_vertex,
		fog_vertex,
		fog_pars_vertex,
		fog_fragment,
		fog_pars_fragment,
		gradientmap_pars_fragment,
		lightmap_fragment,
		lightmap_pars_fragment,
		lights_lambert_fragment,
		lights_lambert_pars_fragment,
		lights_pars_begin,
		lights_toon_fragment,
		lights_toon_pars_fragment,
		lights_phong_fragment,
		lights_phong_pars_fragment,
		lights_physical_fragment,
		lights_physical_pars_fragment,
		lights_fragment_begin,
		lights_fragment_maps,
		lights_fragment_end,
		logdepthbuf_fragment,
		logdepthbuf_pars_fragment,
		logdepthbuf_pars_vertex,
		logdepthbuf_vertex,
		map_fragment,
		map_pars_fragment,
		map_particle_fragment,
		map_particle_pars_fragment,
		metalnessmap_fragment,
		metalnessmap_pars_fragment,
		morphcolor_vertex,
		morphnormal_vertex,
		morphtarget_pars_vertex,
		morphtarget_vertex,
		normal_fragment_begin,
		normal_fragment_maps,
		normal_pars_fragment,
		normal_pars_vertex,
		normal_vertex,
		normalmap_pars_fragment,
		clearcoat_normal_fragment_begin,
		clearcoat_normal_fragment_maps,
		clearcoat_pars_fragment,
		iridescence_pars_fragment,
		output_fragment,
		packing,
		premultiplied_alpha_fragment,
		project_vertex,
		dithering_fragment,
		dithering_pars_fragment,
		roughnessmap_fragment,
		roughnessmap_pars_fragment,
		shadowmap_pars_fragment,
		shadowmap_pars_vertex,
		shadowmap_vertex,
		shadowmask_pars_fragment,
		skinbase_vertex,
		skinning_pars_vertex,
		skinning_vertex,
		skinnormal_vertex,
		specularmap_fragment,
		specularmap_pars_fragment,
		tonemapping_fragment,
		tonemapping_pars_fragment,
		transmission_fragment,
		transmission_pars_fragment,
		uv_pars_fragment,
		uv_pars_vertex,
		uv_vertex,
		uv2_pars_fragment,
		uv2_pars_vertex,
		uv2_vertex,
		worldpos_vertex,
		background_vert: vertex$h,
		background_frag: fragment$h,
		backgroundCube_vert: vertex$g,
		backgroundCube_frag: fragment$g,
		cube_vert: vertex$f,
		cube_frag: fragment$f,
		depth_vert: vertex$e,
		depth_frag: fragment$e,
		distanceRGBA_vert: vertex$d,
		distanceRGBA_frag: fragment$d,
		equirect_vert: vertex$c,
		equirect_frag: fragment$c,
		linedashed_vert: vertex$b,
		linedashed_frag: fragment$b,
		meshbasic_vert: vertex$a,
		meshbasic_frag: fragment$a,
		meshlambert_vert: vertex$9,
		meshlambert_frag: fragment$9,
		meshmatcap_vert: vertex$8,
		meshmatcap_frag: fragment$8,
		meshnormal_vert: vertex$7,
		meshnormal_frag: fragment$7,
		meshphong_vert: vertex$6,
		meshphong_frag: fragment$6,
		meshphysical_vert: vertex$5,
		meshphysical_frag: fragment$5,
		meshtoon_vert: vertex$4,
		meshtoon_frag: fragment$4,
		points_vert: vertex$3,
		points_frag: fragment$3,
		shadow_vert: vertex$2,
		shadow_frag: fragment$2,
		sprite_vert: vertex$1,
		sprite_frag: fragment$1,
	},
	UniformsLib = {
		common: { diffuse: { value: new Color(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new Matrix3() }, uv2Transform: { value: new Matrix3() }, alphaMap: { value: null }, alphaTest: { value: 0 } },
		specularmap: { specularMap: { value: null } },
		envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } },
		aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
		lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
		emissivemap: { emissiveMap: { value: null } },
		bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
		normalmap: { normalMap: { value: null }, normalScale: { value: new Vector2(1, 1) } },
		displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } },
		roughnessmap: { roughnessMap: { value: null } },
		metalnessmap: { metalnessMap: { value: null } },
		gradientmap: { gradientMap: { value: null } },
		fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Color(16777215) } },
		lights: {
			ambientLightColor: { value: [] },
			lightProbe: { value: [] },
			directionalLights: { value: [], properties: { direction: {}, color: {} } },
			directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
			directionalShadowMap: { value: [] },
			directionalShadowMatrix: { value: [] },
			spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } },
			spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
			spotLightMap: { value: [] },
			spotShadowMap: { value: [] },
			spotLightMatrix: { value: [] },
			pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
			pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } },
			pointShadowMap: { value: [] },
			pointShadowMatrix: { value: [] },
			hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
			rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
			ltc_1: { value: null },
			ltc_2: { value: null },
		},
		points: { diffuse: { value: new Color(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Matrix3() } },
		sprite: { diffuse: { value: new Color(16777215) }, opacity: { value: 1 }, center: { value: new Vector2(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Matrix3() } },
	},
	ShaderLib = {
		basic: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.fog]), vertexShader: ShaderChunk.meshbasic_vert, fragmentShader: ShaderChunk.meshbasic_frag },
		lambert: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.fog, UniformsLib.lights, { emissive: { value: new Color(0) } }]), vertexShader: ShaderChunk.meshlambert_vert, fragmentShader: ShaderChunk.meshlambert_frag },
		phong: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.fog, UniformsLib.lights, { emissive: { value: new Color(0) }, specular: { value: new Color(1118481) }, shininess: { value: 30 } }]), vertexShader: ShaderChunk.meshphong_vert, fragmentShader: ShaderChunk.meshphong_frag },
		standard: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.roughnessmap, UniformsLib.metalnessmap, UniformsLib.fog, UniformsLib.lights, { emissive: { value: new Color(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ShaderChunk.meshphysical_vert, fragmentShader: ShaderChunk.meshphysical_frag },
		toon: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.gradientmap, UniformsLib.fog, UniformsLib.lights, { emissive: { value: new Color(0) } }]), vertexShader: ShaderChunk.meshtoon_vert, fragmentShader: ShaderChunk.meshtoon_frag },
		matcap: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.fog, { matcap: { value: null } }]), vertexShader: ShaderChunk.meshmatcap_vert, fragmentShader: ShaderChunk.meshmatcap_frag },
		points: { uniforms: mergeUniforms([UniformsLib.points, UniformsLib.fog]), vertexShader: ShaderChunk.points_vert, fragmentShader: ShaderChunk.points_frag },
		dashed: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ShaderChunk.linedashed_vert, fragmentShader: ShaderChunk.linedashed_frag },
		depth: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.displacementmap]), vertexShader: ShaderChunk.depth_vert, fragmentShader: ShaderChunk.depth_frag },
		normal: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, { opacity: { value: 1 } }]), vertexShader: ShaderChunk.meshnormal_vert, fragmentShader: ShaderChunk.meshnormal_frag },
		sprite: { uniforms: mergeUniforms([UniformsLib.sprite, UniformsLib.fog]), vertexShader: ShaderChunk.sprite_vert, fragmentShader: ShaderChunk.sprite_frag },
		background: { uniforms: { uvTransform: { value: new Matrix3() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ShaderChunk.background_vert, fragmentShader: ShaderChunk.background_frag },
		backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: ShaderChunk.backgroundCube_vert, fragmentShader: ShaderChunk.backgroundCube_frag },
		cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ShaderChunk.cube_vert, fragmentShader: ShaderChunk.cube_frag },
		equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ShaderChunk.equirect_vert, fragmentShader: ShaderChunk.equirect_frag },
		distanceRGBA: { uniforms: mergeUniforms([UniformsLib.common, UniformsLib.displacementmap, { referencePosition: { value: new Vector3() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ShaderChunk.distanceRGBA_vert, fragmentShader: ShaderChunk.distanceRGBA_frag },
		shadow: { uniforms: mergeUniforms([UniformsLib.lights, UniformsLib.fog, { color: { value: new Color(0) }, opacity: { value: 1 } }]), vertexShader: ShaderChunk.shadow_vert, fragmentShader: ShaderChunk.shadow_frag },
	};
ShaderLib.physical = {
	uniforms: mergeUniforms([
		ShaderLib.standard.uniforms,
		{
			clearcoat: { value: 0 },
			clearcoatMap: { value: null },
			clearcoatRoughness: { value: 0 },
			clearcoatRoughnessMap: { value: null },
			clearcoatNormalScale: { value: new Vector2(1, 1) },
			clearcoatNormalMap: { value: null },
			iridescence: { value: 0 },
			iridescenceMap: { value: null },
			iridescenceIOR: { value: 1.3 },
			iridescenceThicknessMinimum: { value: 100 },
			iridescenceThicknessMaximum: { value: 400 },
			iridescenceThicknessMap: { value: null },
			sheen: { value: 0 },
			sheenColor: { value: new Color(0) },
			sheenColorMap: { value: null },
			sheenRoughness: { value: 1 },
			sheenRoughnessMap: { value: null },
			transmission: { value: 0 },
			transmissionMap: { value: null },
			transmissionSamplerSize: { value: new Vector2() },
			transmissionSamplerMap: { value: null },
			thickness: { value: 0 },
			thicknessMap: { value: null },
			attenuationDistance: { value: 0 },
			attenuationColor: { value: new Color(0) },
			specularIntensity: { value: 1 },
			specularIntensityMap: { value: null },
			specularColor: { value: new Color(1, 1, 1) },
			specularColorMap: { value: null },
		},
	]),
	vertexShader: ShaderChunk.meshphysical_vert,
	fragmentShader: ShaderChunk.meshphysical_frag,
};
const _rgb = { r: 0, b: 0, g: 0 };
function WebGLBackground(s, e, t, i, n, r, o) {
	const a = new Color(0);
	let c = r === !0 ? 0 : 1,
		l,
		u,
		h = null,
		d = 0,
		m = null;
	function g(f, _) {
		let T = !1,
			x = _.isScene === !0 ? _.background : null;
		x && x.isTexture && (x = (_.backgroundBlurriness > 0 ? t : e).get(x));
		const S = s.xr,
			b = S.getSession && S.getSession();
		b && b.environmentBlendMode === 'additive' && (x = null),
			x === null ? p(a, c) : x && x.isColor && (p(x, 1), (T = !0)),
			(s.autoClear || T) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
			x && (x.isCubeTexture || x.mapping === CubeUVReflectionMapping)
				? (u === void 0 &&
						((u = new Mesh(new BoxGeometry(1, 1, 1), new ShaderMaterial({ name: 'BackgroundCubeMaterial', uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms), vertexShader: ShaderLib.backgroundCube.vertexShader, fragmentShader: ShaderLib.backgroundCube.fragmentShader, side: BackSide, depthTest: !1, depthWrite: !1, fog: !1 }))),
						u.geometry.deleteAttribute('normal'),
						u.geometry.deleteAttribute('uv'),
						(u.onBeforeRender = function (E, A, v) {
							this.matrixWorld.copyPosition(v.matrixWorld);
						}),
						Object.defineProperty(u.material, 'envMap', {
							get: function () {
								return this.uniforms.envMap.value;
							},
						}),
						n.update(u)),
				  (u.material.uniforms.envMap.value = x),
				  (u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
				  (u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness),
				  (u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
				  (u.material.toneMapped = x.encoding !== sRGBEncoding),
				  (h !== x || d !== x.version || m !== s.toneMapping) && ((u.material.needsUpdate = !0), (h = x), (d = x.version), (m = s.toneMapping)),
				  u.layers.enableAll(),
				  f.unshift(u, u.geometry, u.material, 0, 0, null))
				: x &&
				  x.isTexture &&
				  (l === void 0 &&
						((l = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ name: 'BackgroundMaterial', uniforms: cloneUniforms(ShaderLib.background.uniforms), vertexShader: ShaderLib.background.vertexShader, fragmentShader: ShaderLib.background.fragmentShader, side: FrontSide, depthTest: !1, depthWrite: !1, fog: !1 }))),
						l.geometry.deleteAttribute('normal'),
						Object.defineProperty(l.material, 'map', {
							get: function () {
								return this.uniforms.t2D.value;
							},
						}),
						n.update(l)),
				  (l.material.uniforms.t2D.value = x),
				  (l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
				  (l.material.toneMapped = x.encoding !== sRGBEncoding),
				  x.matrixAutoUpdate === !0 && x.updateMatrix(),
				  l.material.uniforms.uvTransform.value.copy(x.matrix),
				  (h !== x || d !== x.version || m !== s.toneMapping) && ((l.material.needsUpdate = !0), (h = x), (d = x.version), (m = s.toneMapping)),
				  l.layers.enableAll(),
				  f.unshift(l, l.geometry, l.material, 0, 0, null));
	}
	function p(f, _) {
		f.getRGB(_rgb, getUnlitUniformColorSpace(s)), i.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, _, o);
	}
	return {
		getClearColor: function () {
			return a;
		},
		setClearColor: function (f, _ = 1) {
			a.set(f), (c = _), p(a, c);
		},
		getClearAlpha: function () {
			return c;
		},
		setClearAlpha: function (f) {
			(c = f), p(a, c);
		},
		render: g,
	};
}
function WebGLBindingStates(s, e, t, i) {
	const n = s.getParameter(34921),
		r = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
		o = i.isWebGL2 || r !== null,
		a = {},
		c = f(null);
	let l = c,
		u = !1;
	function h(I, N, j, K, q) {
		let ie = !1;
		if (o) {
			const ee = p(K, j, N);
			l !== ee && ((l = ee), m(l.object)), (ie = _(I, K, j, q)), ie && T(I, K, j, q);
		} else {
			const ee = N.wireframe === !0;
			(l.geometry !== K.id || l.program !== j.id || l.wireframe !== ee) && ((l.geometry = K.id), (l.program = j.id), (l.wireframe = ee), (ie = !0));
		}
		q !== null && t.update(q, 34963), (ie || u) && ((u = !1), v(I, N, j, K), q !== null && s.bindBuffer(34963, t.get(q).buffer));
	}
	function d() {
		return i.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
	}
	function m(I) {
		return i.isWebGL2 ? s.bindVertexArray(I) : r.bindVertexArrayOES(I);
	}
	function g(I) {
		return i.isWebGL2 ? s.deleteVertexArray(I) : r.deleteVertexArrayOES(I);
	}
	function p(I, N, j) {
		const K = j.wireframe === !0;
		let q = a[I.id];
		q === void 0 && ((q = {}), (a[I.id] = q));
		let ie = q[N.id];
		ie === void 0 && ((ie = {}), (q[N.id] = ie));
		let ee = ie[K];
		return ee === void 0 && ((ee = f(d())), (ie[K] = ee)), ee;
	}
	function f(I) {
		const N = [],
			j = [],
			K = [];
		for (let q = 0; q < n; q++) (N[q] = 0), (j[q] = 0), (K[q] = 0);
		return { geometry: null, program: null, wireframe: !1, newAttributes: N, enabledAttributes: j, attributeDivisors: K, object: I, attributes: {}, index: null };
	}
	function _(I, N, j, K) {
		const q = l.attributes,
			ie = N.attributes;
		let ee = 0;
		const B = j.getAttributes();
		for (const H in B)
			if (B[H].location >= 0) {
				const te = q[H];
				let re = ie[H];
				if ((re === void 0 && (H === 'instanceMatrix' && I.instanceMatrix && (re = I.instanceMatrix), H === 'instanceColor' && I.instanceColor && (re = I.instanceColor)), te === void 0 || te.attribute !== re || (re && te.data !== re.data))) return !0;
				ee++;
			}
		return l.attributesNum !== ee || l.index !== K;
	}
	function T(I, N, j, K) {
		const q = {},
			ie = N.attributes;
		let ee = 0;
		const B = j.getAttributes();
		for (const H in B)
			if (B[H].location >= 0) {
				let te = ie[H];
				te === void 0 && (H === 'instanceMatrix' && I.instanceMatrix && (te = I.instanceMatrix), H === 'instanceColor' && I.instanceColor && (te = I.instanceColor));
				const re = {};
				(re.attribute = te), te && te.data && (re.data = te.data), (q[H] = re), ee++;
			}
		(l.attributes = q), (l.attributesNum = ee), (l.index = K);
	}
	function x() {
		const I = l.newAttributes;
		for (let N = 0, j = I.length; N < j; N++) I[N] = 0;
	}
	function S(I) {
		b(I, 0);
	}
	function b(I, N) {
		const j = l.newAttributes,
			K = l.enabledAttributes,
			q = l.attributeDivisors;
		(j[I] = 1), K[I] === 0 && (s.enableVertexAttribArray(I), (K[I] = 1)), q[I] !== N && ((i.isWebGL2 ? s : e.get('ANGLE_instanced_arrays'))[i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](I, N), (q[I] = N));
	}
	function E() {
		const I = l.newAttributes,
			N = l.enabledAttributes;
		for (let j = 0, K = N.length; j < K; j++) N[j] !== I[j] && (s.disableVertexAttribArray(j), (N[j] = 0));
	}
	function A(I, N, j, K, q, ie) {
		i.isWebGL2 === !0 && (j === 5124 || j === 5125) ? s.vertexAttribIPointer(I, N, j, q, ie) : s.vertexAttribPointer(I, N, j, K, q, ie);
	}
	function v(I, N, j, K) {
		if (i.isWebGL2 === !1 && (I.isInstancedMesh || K.isInstancedBufferGeometry) && e.get('ANGLE_instanced_arrays') === null) return;
		x();
		const q = K.attributes,
			ie = j.getAttributes(),
			ee = N.defaultAttributeValues;
		for (const B in ie) {
			const H = ie[B];
			if (H.location >= 0) {
				let Z = q[B];
				if ((Z === void 0 && (B === 'instanceMatrix' && I.instanceMatrix && (Z = I.instanceMatrix), B === 'instanceColor' && I.instanceColor && (Z = I.instanceColor)), Z !== void 0)) {
					const te = Z.normalized,
						re = Z.itemSize,
						$ = t.get(Z);
					if ($ === void 0) continue;
					const Te = $.buffer,
						ue = $.type,
						ve = $.bytesPerElement;
					if (Z.isInterleavedBufferAttribute) {
						const ce = Z.data,
							Pe = ce.stride,
							ye = Z.offset;
						if (ce.isInstancedInterleavedBuffer) {
							for (let ge = 0; ge < H.locationSize; ge++) b(H.location + ge, ce.meshPerAttribute);
							I.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = ce.meshPerAttribute * ce.count);
						} else for (let ge = 0; ge < H.locationSize; ge++) S(H.location + ge);
						s.bindBuffer(34962, Te);
						for (let ge = 0; ge < H.locationSize; ge++) A(H.location + ge, re / H.locationSize, ue, te, Pe * ve, (ye + (re / H.locationSize) * ge) * ve);
					} else {
						if (Z.isInstancedBufferAttribute) {
							for (let ce = 0; ce < H.locationSize; ce++) b(H.location + ce, Z.meshPerAttribute);
							I.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = Z.meshPerAttribute * Z.count);
						} else for (let ce = 0; ce < H.locationSize; ce++) S(H.location + ce);
						s.bindBuffer(34962, Te);
						for (let ce = 0; ce < H.locationSize; ce++) A(H.location + ce, re / H.locationSize, ue, te, re * ve, (re / H.locationSize) * ce * ve);
					}
				} else if (ee !== void 0) {
					const te = ee[B];
					if (te !== void 0)
						switch (te.length) {
							case 2:
								s.vertexAttrib2fv(H.location, te);
								break;
							case 3:
								s.vertexAttrib3fv(H.location, te);
								break;
							case 4:
								s.vertexAttrib4fv(H.location, te);
								break;
							default:
								s.vertexAttrib1fv(H.location, te);
						}
				}
			}
		}
		E();
	}
	function C() {
		Y();
		for (const I in a) {
			const N = a[I];
			for (const j in N) {
				const K = N[j];
				for (const q in K) g(K[q].object), delete K[q];
				delete N[j];
			}
			delete a[I];
		}
	}
	function P(I) {
		if (a[I.id] === void 0) return;
		const N = a[I.id];
		for (const j in N) {
			const K = N[j];
			for (const q in K) g(K[q].object), delete K[q];
			delete N[j];
		}
		delete a[I.id];
	}
	function z(I) {
		for (const N in a) {
			const j = a[N];
			if (j[I.id] === void 0) continue;
			const K = j[I.id];
			for (const q in K) g(K[q].object), delete K[q];
			delete j[I.id];
		}
	}
	function Y() {
		D(), (u = !0), l !== c && ((l = c), m(l.object));
	}
	function D() {
		(c.geometry = null), (c.program = null), (c.wireframe = !1);
	}
	return { setup: h, reset: Y, resetDefaultState: D, dispose: C, releaseStatesOfGeometry: P, releaseStatesOfProgram: z, initAttributes: x, enableAttribute: S, disableUnusedAttributes: E };
}
function WebGLBufferRenderer(s, e, t, i) {
	const n = i.isWebGL2;
	let r;
	function o(l) {
		r = l;
	}
	function a(l, u) {
		s.drawArrays(r, l, u), t.update(u, r, 1);
	}
	function c(l, u, h) {
		if (h === 0) return;
		let d, m;
		if (n) (d = s), (m = 'drawArraysInstanced');
		else if (((d = e.get('ANGLE_instanced_arrays')), (m = 'drawArraysInstancedANGLE'), d === null)) {
			console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
			return;
		}
		d[m](r, l, u, h), t.update(u, r, h);
	}
	(this.setMode = o), (this.render = a), (this.renderInstances = c);
}
function WebGLCapabilities(s, e, t) {
	let i;
	function n() {
		if (i !== void 0) return i;
		if (e.has('EXT_texture_filter_anisotropic') === !0) {
			const A = e.get('EXT_texture_filter_anisotropic');
			i = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function r(A) {
		if (A === 'highp') {
			if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0) return 'highp';
			A = 'mediump';
		}
		return A === 'mediump' && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? 'mediump' : 'lowp';
	}
	const o = (typeof WebGL2RenderingContext < 'u' && s instanceof WebGL2RenderingContext) || (typeof WebGL2ComputeRenderingContext < 'u' && s instanceof WebGL2ComputeRenderingContext);
	let a = t.precision !== void 0 ? t.precision : 'highp';
	const c = r(a);
	c !== a && (console.warn('THREE.WebGLRenderer:', a, 'not supported, using', c, 'instead.'), (a = c));
	const l = o || e.has('WEBGL_draw_buffers'),
		u = t.logarithmicDepthBuffer === !0,
		h = s.getParameter(34930),
		d = s.getParameter(35660),
		m = s.getParameter(3379),
		g = s.getParameter(34076),
		p = s.getParameter(34921),
		f = s.getParameter(36347),
		_ = s.getParameter(36348),
		T = s.getParameter(36349),
		x = d > 0,
		S = o || e.has('OES_texture_float'),
		b = x && S,
		E = o ? s.getParameter(36183) : 0;
	return { isWebGL2: o, drawBuffers: l, getMaxAnisotropy: n, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: u, maxTextures: h, maxVertexTextures: d, maxTextureSize: m, maxCubemapSize: g, maxAttributes: p, maxVertexUniforms: f, maxVaryings: _, maxFragmentUniforms: T, vertexTextures: x, floatFragmentTextures: S, floatVertexTextures: b, maxSamples: E };
}
function WebGLClipping(s) {
	const e = this;
	let t = null,
		i = 0,
		n = !1,
		r = !1;
	const o = new Plane(),
		a = new Matrix3(),
		c = { value: null, needsUpdate: !1 };
	(this.uniform = c),
		(this.numPlanes = 0),
		(this.numIntersection = 0),
		(this.init = function (h, d, m) {
			const g = h.length !== 0 || d || i !== 0 || n;
			return (n = d), (t = u(h, m, 0)), (i = h.length), g;
		}),
		(this.beginShadows = function () {
			(r = !0), u(null);
		}),
		(this.endShadows = function () {
			(r = !1), l();
		}),
		(this.setState = function (h, d, m) {
			const g = h.clippingPlanes,
				p = h.clipIntersection,
				f = h.clipShadows,
				_ = s.get(h);
			if (!n || g === null || g.length === 0 || (r && !f)) r ? u(null) : l();
			else {
				const T = r ? 0 : i,
					x = T * 4;
				let S = _.clippingState || null;
				(c.value = S), (S = u(g, d, x, m));
				for (let b = 0; b !== x; ++b) S[b] = t[b];
				(_.clippingState = S), (this.numIntersection = p ? this.numPlanes : 0), (this.numPlanes += T);
			}
		});
	function l() {
		c.value !== t && ((c.value = t), (c.needsUpdate = i > 0)), (e.numPlanes = i), (e.numIntersection = 0);
	}
	function u(h, d, m, g) {
		const p = h !== null ? h.length : 0;
		let f = null;
		if (p !== 0) {
			if (((f = c.value), g !== !0 || f === null)) {
				const _ = m + p * 4,
					T = d.matrixWorldInverse;
				a.getNormalMatrix(T), (f === null || f.length < _) && (f = new Float32Array(_));
				for (let x = 0, S = m; x !== p; ++x, S += 4) o.copy(h[x]).applyMatrix4(T, a), o.normal.toArray(f, S), (f[S + 3] = o.constant);
			}
			(c.value = f), (c.needsUpdate = !0);
		}
		return (e.numPlanes = p), (e.numIntersection = 0), f;
	}
}
function WebGLCubeMaps(s) {
	let e = new WeakMap();
	function t(o, a) {
		return a === EquirectangularReflectionMapping ? (o.mapping = CubeReflectionMapping) : a === EquirectangularRefractionMapping && (o.mapping = CubeRefractionMapping), o;
	}
	function i(o) {
		if (o && o.isTexture && o.isRenderTargetTexture === !1) {
			const a = o.mapping;
			if (a === EquirectangularReflectionMapping || a === EquirectangularRefractionMapping)
				if (e.has(o)) {
					const c = e.get(o).texture;
					return t(c, o.mapping);
				} else {
					const c = o.image;
					if (c && c.height > 0) {
						const l = new WebGLCubeRenderTarget(c.height / 2);
						return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener('dispose', n), t(l.texture, o.mapping);
					} else return null;
				}
		}
		return o;
	}
	function n(o) {
		const a = o.target;
		a.removeEventListener('dispose', n);
		const c = e.get(a);
		c !== void 0 && (e.delete(a), c.dispose());
	}
	function r() {
		e = new WeakMap();
	}
	return { get: i, dispose: r };
}
class OrthographicCamera extends Camera {
	constructor(e = -1, t = 1, i = 1, n = -1, r = 0.1, o = 2e3) {
		super(), (this.isOrthographicCamera = !0), (this.type = 'OrthographicCamera'), (this.zoom = 1), (this.view = null), (this.left = e), (this.right = t), (this.top = i), (this.bottom = n), (this.near = r), (this.far = o), this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), (this.left = e.left), (this.right = e.right), (this.top = e.top), (this.bottom = e.bottom), (this.near = e.near), (this.far = e.far), (this.zoom = e.zoom), (this.view = e.view === null ? null : Object.assign({}, e.view)), this;
	}
	setViewOffset(e, t, i, n, r, o) {
		this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), (this.view.enabled = !0), (this.view.fullWidth = e), (this.view.fullHeight = t), (this.view.offsetX = i), (this.view.offsetY = n), (this.view.width = r), (this.view.height = o), this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		const e = (this.right - this.left) / (2 * this.zoom),
			t = (this.top - this.bottom) / (2 * this.zoom),
			i = (this.right + this.left) / 2,
			n = (this.top + this.bottom) / 2;
		let r = i - e,
			o = i + e,
			a = n + t,
			c = n - t;
		if (this.view !== null && this.view.enabled) {
			const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
				u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			(r += l * this.view.offsetX), (o = r + l * this.view.width), (a -= u * this.view.offsetY), (c = a - u * this.view.height);
		}
		this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return (t.object.zoom = this.zoom), (t.object.left = this.left), (t.object.right = this.right), (t.object.top = this.top), (t.object.bottom = this.bottom), (t.object.near = this.near), (t.object.far = this.far), this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}
const LOD_MIN = 4,
	EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
	MAX_SAMPLES = 20,
	_flatCamera = new OrthographicCamera(),
	_clearColor = new Color();
let _oldTarget = null;
const PHI = (1 + Math.sqrt(5)) / 2,
	INV_PHI = 1 / PHI,
	_axisDirections = [new Vector3(1, 1, 1), new Vector3(-1, 1, 1), new Vector3(1, 1, -1), new Vector3(-1, 1, -1), new Vector3(0, PHI, INV_PHI), new Vector3(0, PHI, -INV_PHI), new Vector3(INV_PHI, 0, PHI), new Vector3(-INV_PHI, 0, PHI), new Vector3(PHI, INV_PHI, 0), new Vector3(-PHI, INV_PHI, 0)];
class PMREMGenerator {
	constructor(e) {
		(this._renderer = e), (this._pingPongRenderTarget = null), (this._lodMax = 0), (this._cubeSize = 0), (this._lodPlanes = []), (this._sizeLods = []), (this._sigmas = []), (this._blurMaterial = null), (this._cubemapMaterial = null), (this._equirectMaterial = null), this._compileMaterial(this._blurMaterial);
	}
	fromScene(e, t = 0, i = 0.1, n = 100) {
		(_oldTarget = this._renderer.getRenderTarget()), this._setSize(256);
		const r = this._allocateTargets();
		return (r.depthBuffer = !0), this._sceneToCubeUV(e, i, n, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && ((this._cubemapMaterial = _getCubemapMaterial()), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && ((this._equirectMaterial = _getEquirectMaterial()), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
	}
	_setSize(e) {
		(this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(_oldTarget), (e.scissorTest = !1), _setViewport(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === CubeReflectionMapping || e.mapping === CubeRefractionMapping ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), (_oldTarget = this._renderer.getRenderTarget());
		const i = t || this._allocateTargets();
		return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
	}
	_allocateTargets() {
		const e = 3 * Math.max(this._cubeSize, 112),
			t = 4 * this._cubeSize,
			i = { magFilter: LinearFilter, minFilter: LinearFilter, generateMipmaps: !1, type: HalfFloatType, format: RGBAFormat, encoding: LinearEncoding, depthBuffer: !1 },
			n = _createRenderTarget(e, t, i);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
			this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = _createRenderTarget(e, t, i));
			const { _lodMax: r } = this;
			({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _createPlanes(r)), (this._blurMaterial = _getBlurShader(r, e, t));
		}
		return n;
	}
	_compileMaterial(e) {
		const t = new Mesh(this._lodPlanes[0], e);
		this._renderer.compile(t, _flatCamera);
	}
	_sceneToCubeUV(e, t, i, n) {
		const a = new PerspectiveCamera(90, 1, t, i),
			c = [1, -1, 1, 1, 1, 1],
			l = [1, 1, 1, -1, -1, -1],
			u = this._renderer,
			h = u.autoClear,
			d = u.toneMapping;
		u.getClearColor(_clearColor), (u.toneMapping = NoToneMapping), (u.autoClear = !1);
		const m = new MeshBasicMaterial({ name: 'PMREM.Background', side: BackSide, depthWrite: !1, depthTest: !1 }),
			g = new Mesh(new BoxGeometry(), m);
		let p = !1;
		const f = e.background;
		f ? f.isColor && (m.color.copy(f), (e.background = null), (p = !0)) : (m.color.copy(_clearColor), (p = !0));
		for (let _ = 0; _ < 6; _++) {
			const T = _ % 3;
			T === 0 ? (a.up.set(0, c[_], 0), a.lookAt(l[_], 0, 0)) : T === 1 ? (a.up.set(0, 0, c[_]), a.lookAt(0, l[_], 0)) : (a.up.set(0, c[_], 0), a.lookAt(0, 0, l[_]));
			const x = this._cubeSize;
			_setViewport(n, T * x, _ > 2 ? x : 0, x, x), u.setRenderTarget(n), p && u.render(g, a), u.render(e, a);
		}
		g.geometry.dispose(), g.material.dispose(), (u.toneMapping = d), (u.autoClear = h), (e.background = f);
	}
	_textureToCubeUV(e, t) {
		const i = this._renderer,
			n = e.mapping === CubeReflectionMapping || e.mapping === CubeRefractionMapping;
		n ? (this._cubemapMaterial === null && (this._cubemapMaterial = _getCubemapMaterial()), (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1)) : this._equirectMaterial === null && (this._equirectMaterial = _getEquirectMaterial());
		const r = n ? this._cubemapMaterial : this._equirectMaterial,
			o = new Mesh(this._lodPlanes[0], r),
			a = r.uniforms;
		a.envMap.value = e;
		const c = this._cubeSize;
		_setViewport(t, 0, 0, 3 * c, 2 * c), i.setRenderTarget(t), i.render(o, _flatCamera);
	}
	_applyPMREM(e) {
		const t = this._renderer,
			i = t.autoClear;
		t.autoClear = !1;
		for (let n = 1; n < this._lodPlanes.length; n++) {
			const r = Math.sqrt(this._sigmas[n] * this._sigmas[n] - this._sigmas[n - 1] * this._sigmas[n - 1]),
				o = _axisDirections[(n - 1) % _axisDirections.length];
			this._blur(e, n - 1, n, r, o);
		}
		t.autoClear = i;
	}
	_blur(e, t, i, n, r) {
		const o = this._pingPongRenderTarget;
		this._halfBlur(e, o, t, i, n, 'latitudinal', r), this._halfBlur(o, e, i, i, n, 'longitudinal', r);
	}
	_halfBlur(e, t, i, n, r, o, a) {
		const c = this._renderer,
			l = this._blurMaterial;
		o !== 'latitudinal' && o !== 'longitudinal' && console.error('blur direction must be either latitudinal or longitudinal!');
		const u = 3,
			h = new Mesh(this._lodPlanes[n], l),
			d = l.uniforms,
			m = this._sizeLods[i] - 1,
			g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * MAX_SAMPLES - 1),
			p = r / g,
			f = isFinite(r) ? 1 + Math.floor(u * p) : MAX_SAMPLES;
		f > MAX_SAMPLES && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${MAX_SAMPLES}`);
		const _ = [];
		let T = 0;
		for (let A = 0; A < MAX_SAMPLES; ++A) {
			const v = A / p,
				C = Math.exp((-v * v) / 2);
			_.push(C), A === 0 ? (T += C) : A < f && (T += 2 * C);
		}
		for (let A = 0; A < _.length; A++) _[A] = _[A] / T;
		(d.envMap.value = e.texture), (d.samples.value = f), (d.weights.value = _), (d.latitudinal.value = o === 'latitudinal'), a && (d.poleAxis.value = a);
		const { _lodMax: x } = this;
		(d.dTheta.value = g), (d.mipInt.value = x - i);
		const S = this._sizeLods[n],
			b = 3 * S * (n > x - LOD_MIN ? n - x + LOD_MIN : 0),
			E = 4 * (this._cubeSize - S);
		_setViewport(t, b, E, 3 * S, 2 * S), c.setRenderTarget(t), c.render(h, _flatCamera);
	}
}
function _createPlanes(s) {
	const e = [],
		t = [],
		i = [];
	let n = s;
	const r = s - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
	for (let o = 0; o < r; o++) {
		const a = Math.pow(2, n);
		t.push(a);
		let c = 1 / a;
		o > s - LOD_MIN ? (c = EXTRA_LOD_SIGMA[o - s + LOD_MIN - 1]) : o === 0 && (c = 0), i.push(c);
		const l = 1 / (a - 2),
			u = -l,
			h = 1 + l,
			d = [u, u, h, u, h, h, u, u, h, h, u, h],
			m = 6,
			g = 6,
			p = 3,
			f = 2,
			_ = 1,
			T = new Float32Array(p * g * m),
			x = new Float32Array(f * g * m),
			S = new Float32Array(_ * g * m);
		for (let E = 0; E < m; E++) {
			const A = ((E % 3) * 2) / 3 - 1,
				v = E > 2 ? 0 : -1,
				C = [A, v, 0, A + 2 / 3, v, 0, A + 2 / 3, v + 1, 0, A, v, 0, A + 2 / 3, v + 1, 0, A, v + 1, 0];
			T.set(C, p * g * E), x.set(d, f * g * E);
			const P = [E, E, E, E, E, E];
			S.set(P, _ * g * E);
		}
		const b = new BufferGeometry();
		b.setAttribute('position', new BufferAttribute(T, p)), b.setAttribute('uv', new BufferAttribute(x, f)), b.setAttribute('faceIndex', new BufferAttribute(S, _)), e.push(b), n > LOD_MIN && n--;
	}
	return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function _createRenderTarget(s, e, t) {
	const i = new WebGLRenderTarget(s, e, t);
	return (i.texture.mapping = CubeUVReflectionMapping), (i.texture.name = 'PMREM.cubeUv'), (i.scissorTest = !0), i;
}
function _setViewport(s, e, t, i, n) {
	s.viewport.set(e, t, i, n), s.scissor.set(e, t, i, n);
}
function _getBlurShader(s, e, t) {
	const i = new Float32Array(MAX_SAMPLES),
		n = new Vector3(0, 1, 0);
	return new ShaderMaterial({
		name: 'SphericalGaussianBlur',
		defines: { n: MAX_SAMPLES, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` },
		uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: n } },
		vertexShader: _getCommonVertexShader(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
		blending: NoBlending,
		depthTest: !1,
		depthWrite: !1,
	});
}
function _getEquirectMaterial() {
	return new ShaderMaterial({
		name: 'EquirectangularToCubeUV',
		uniforms: { envMap: { value: null } },
		vertexShader: _getCommonVertexShader(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
		blending: NoBlending,
		depthTest: !1,
		depthWrite: !1,
	});
}
function _getCubemapMaterial() {
	return new ShaderMaterial({
		name: 'CubemapToCubeUV',
		uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
		vertexShader: _getCommonVertexShader(),
		fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
		blending: NoBlending,
		depthTest: !1,
		depthWrite: !1,
	});
}
function _getCommonVertexShader() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function WebGLCubeUVMaps(s) {
	let e = new WeakMap(),
		t = null;
	function i(a) {
		if (a && a.isTexture) {
			const c = a.mapping,
				l = c === EquirectangularReflectionMapping || c === EquirectangularRefractionMapping,
				u = c === CubeReflectionMapping || c === CubeRefractionMapping;
			if (l || u)
				if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
					a.needsPMREMUpdate = !1;
					let h = e.get(a);
					return t === null && (t = new PMREMGenerator(s)), (h = l ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h)), e.set(a, h), h.texture;
				} else {
					if (e.has(a)) return e.get(a).texture;
					{
						const h = a.image;
						if ((l && h && h.height > 0) || (u && h && n(h))) {
							t === null && (t = new PMREMGenerator(s));
							const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
							return e.set(a, d), a.addEventListener('dispose', r), d.texture;
						} else return null;
					}
				}
		}
		return a;
	}
	function n(a) {
		let c = 0;
		const l = 6;
		for (let u = 0; u < l; u++) a[u] !== void 0 && c++;
		return c === l;
	}
	function r(a) {
		const c = a.target;
		c.removeEventListener('dispose', r);
		const l = e.get(c);
		l !== void 0 && (e.delete(c), l.dispose());
	}
	function o() {
		(e = new WeakMap()), t !== null && (t.dispose(), (t = null));
	}
	return { get: i, dispose: o };
}
function WebGLExtensions(s) {
	const e = {};
	function t(i) {
		if (e[i] !== void 0) return e[i];
		let n;
		switch (i) {
			case 'WEBGL_depth_texture':
				n = s.getExtension('WEBGL_depth_texture') || s.getExtension('MOZ_WEBGL_depth_texture') || s.getExtension('WEBKIT_WEBGL_depth_texture');
				break;
			case 'EXT_texture_filter_anisotropic':
				n = s.getExtension('EXT_texture_filter_anisotropic') || s.getExtension('MOZ_EXT_texture_filter_anisotropic') || s.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
				break;
			case 'WEBGL_compressed_texture_s3tc':
				n = s.getExtension('WEBGL_compressed_texture_s3tc') || s.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || s.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
				break;
			case 'WEBGL_compressed_texture_pvrtc':
				n = s.getExtension('WEBGL_compressed_texture_pvrtc') || s.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
				break;
			default:
				n = s.getExtension(i);
		}
		return (e[i] = n), n;
	}
	return {
		has: function (i) {
			return t(i) !== null;
		},
		init: function (i) {
			i.isWebGL2 ? t('EXT_color_buffer_float') : (t('WEBGL_depth_texture'), t('OES_texture_float'), t('OES_texture_half_float'), t('OES_texture_half_float_linear'), t('OES_standard_derivatives'), t('OES_element_index_uint'), t('OES_vertex_array_object'), t('ANGLE_instanced_arrays')), t('OES_texture_float_linear'), t('EXT_color_buffer_half_float'), t('WEBGL_multisampled_render_to_texture');
		},
		get: function (i) {
			const n = t(i);
			return n === null && console.warn('THREE.WebGLRenderer: ' + i + ' extension not supported.'), n;
		},
	};
}
function WebGLGeometries(s, e, t, i) {
	const n = {},
		r = new WeakMap();
	function o(h) {
		const d = h.target;
		d.index !== null && e.remove(d.index);
		for (const g in d.attributes) e.remove(d.attributes[g]);
		d.removeEventListener('dispose', o), delete n[d.id];
		const m = r.get(d);
		m && (e.remove(m), r.delete(d)), i.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
	}
	function a(h, d) {
		return n[d.id] === !0 || (d.addEventListener('dispose', o), (n[d.id] = !0), t.memory.geometries++), d;
	}
	function c(h) {
		const d = h.attributes;
		for (const g in d) e.update(d[g], 34962);
		const m = h.morphAttributes;
		for (const g in m) {
			const p = m[g];
			for (let f = 0, _ = p.length; f < _; f++) e.update(p[f], 34962);
		}
	}
	function l(h) {
		const d = [],
			m = h.index,
			g = h.attributes.position;
		let p = 0;
		if (m !== null) {
			const T = m.array;
			p = m.version;
			for (let x = 0, S = T.length; x < S; x += 3) {
				const b = T[x + 0],
					E = T[x + 1],
					A = T[x + 2];
				d.push(b, E, E, A, A, b);
			}
		} else {
			const T = g.array;
			p = g.version;
			for (let x = 0, S = T.length / 3 - 1; x < S; x += 3) {
				const b = x + 0,
					E = x + 1,
					A = x + 2;
				d.push(b, E, E, A, A, b);
			}
		}
		const f = new (arrayNeedsUint32(d) ? Uint32BufferAttribute : Uint16BufferAttribute)(d, 1);
		f.version = p;
		const _ = r.get(h);
		_ && e.remove(_), r.set(h, f);
	}
	function u(h) {
		const d = r.get(h);
		if (d) {
			const m = h.index;
			m !== null && d.version < m.version && l(h);
		} else l(h);
		return r.get(h);
	}
	return { get: a, update: c, getWireframeAttribute: u };
}
function WebGLIndexedBufferRenderer(s, e, t, i) {
	const n = i.isWebGL2;
	let r;
	function o(d) {
		r = d;
	}
	let a, c;
	function l(d) {
		(a = d.type), (c = d.bytesPerElement);
	}
	function u(d, m) {
		s.drawElements(r, m, a, d * c), t.update(m, r, 1);
	}
	function h(d, m, g) {
		if (g === 0) return;
		let p, f;
		if (n) (p = s), (f = 'drawElementsInstanced');
		else if (((p = e.get('ANGLE_instanced_arrays')), (f = 'drawElementsInstancedANGLE'), p === null)) {
			console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
			return;
		}
		p[f](r, m, a, d * c, g), t.update(m, r, g);
	}
	(this.setMode = o), (this.setIndex = l), (this.render = u), (this.renderInstances = h);
}
function WebGLInfo(s) {
	const e = { geometries: 0, textures: 0 },
		t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
	function i(r, o, a) {
		switch ((t.calls++, o)) {
			case 4:
				t.triangles += a * (r / 3);
				break;
			case 1:
				t.lines += a * (r / 2);
				break;
			case 3:
				t.lines += a * (r - 1);
				break;
			case 2:
				t.lines += a * r;
				break;
			case 0:
				t.points += a * r;
				break;
			default:
				console.error('THREE.WebGLInfo: Unknown draw mode:', o);
				break;
		}
	}
	function n() {
		t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
	}
	return { memory: e, render: t, programs: null, autoReset: !0, reset: n, update: i };
}
function numericalSort(s, e) {
	return s[0] - e[0];
}
function absNumericalSort(s, e) {
	return Math.abs(e[1]) - Math.abs(s[1]);
}
function WebGLMorphtargets(s, e, t) {
	const i = {},
		n = new Float32Array(8),
		r = new WeakMap(),
		o = new Vector4(),
		a = [];
	for (let l = 0; l < 8; l++) a[l] = [l, 0];
	function c(l, u, h, d) {
		const m = l.morphTargetInfluences;
		if (e.isWebGL2 === !0) {
			const p = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color,
				f = p !== void 0 ? p.length : 0;
			let _ = r.get(u);
			if (_ === void 0 || _.count !== f) {
				let j = function () {
					I.dispose(), r.delete(u), u.removeEventListener('dispose', j);
				};
				var g = j;
				_ !== void 0 && _.texture.dispose();
				const S = u.morphAttributes.position !== void 0,
					b = u.morphAttributes.normal !== void 0,
					E = u.morphAttributes.color !== void 0,
					A = u.morphAttributes.position || [],
					v = u.morphAttributes.normal || [],
					C = u.morphAttributes.color || [];
				let P = 0;
				S === !0 && (P = 1), b === !0 && (P = 2), E === !0 && (P = 3);
				let z = u.attributes.position.count * P,
					Y = 1;
				z > e.maxTextureSize && ((Y = Math.ceil(z / e.maxTextureSize)), (z = e.maxTextureSize));
				const D = new Float32Array(z * Y * 4 * f),
					I = new DataArrayTexture(D, z, Y, f);
				(I.type = FloatType), (I.needsUpdate = !0);
				const N = P * 4;
				for (let K = 0; K < f; K++) {
					const q = A[K],
						ie = v[K],
						ee = C[K],
						B = z * Y * 4 * K;
					for (let H = 0; H < q.count; H++) {
						const Z = H * N;
						S === !0 && (o.fromBufferAttribute(q, H), (D[B + Z + 0] = o.x), (D[B + Z + 1] = o.y), (D[B + Z + 2] = o.z), (D[B + Z + 3] = 0)), b === !0 && (o.fromBufferAttribute(ie, H), (D[B + Z + 4] = o.x), (D[B + Z + 5] = o.y), (D[B + Z + 6] = o.z), (D[B + Z + 7] = 0)), E === !0 && (o.fromBufferAttribute(ee, H), (D[B + Z + 8] = o.x), (D[B + Z + 9] = o.y), (D[B + Z + 10] = o.z), (D[B + Z + 11] = ee.itemSize === 4 ? o.w : 1));
					}
				}
				(_ = { count: f, texture: I, size: new Vector2(z, Y) }), r.set(u, _), u.addEventListener('dispose', j);
			}
			let T = 0;
			for (let S = 0; S < m.length; S++) T += m[S];
			const x = u.morphTargetsRelative ? 1 : 1 - T;
			d.getUniforms().setValue(s, 'morphTargetBaseInfluence', x), d.getUniforms().setValue(s, 'morphTargetInfluences', m), d.getUniforms().setValue(s, 'morphTargetsTexture', _.texture, t), d.getUniforms().setValue(s, 'morphTargetsTextureSize', _.size);
		} else {
			const p = m === void 0 ? 0 : m.length;
			let f = i[u.id];
			if (f === void 0 || f.length !== p) {
				f = [];
				for (let b = 0; b < p; b++) f[b] = [b, 0];
				i[u.id] = f;
			}
			for (let b = 0; b < p; b++) {
				const E = f[b];
				(E[0] = b), (E[1] = m[b]);
			}
			f.sort(absNumericalSort);
			for (let b = 0; b < 8; b++) b < p && f[b][1] ? ((a[b][0] = f[b][0]), (a[b][1] = f[b][1])) : ((a[b][0] = Number.MAX_SAFE_INTEGER), (a[b][1] = 0));
			a.sort(numericalSort);
			const _ = u.morphAttributes.position,
				T = u.morphAttributes.normal;
			let x = 0;
			for (let b = 0; b < 8; b++) {
				const E = a[b],
					A = E[0],
					v = E[1];
				A !== Number.MAX_SAFE_INTEGER && v ? (_ && u.getAttribute('morphTarget' + b) !== _[A] && u.setAttribute('morphTarget' + b, _[A]), T && u.getAttribute('morphNormal' + b) !== T[A] && u.setAttribute('morphNormal' + b, T[A]), (n[b] = v), (x += v)) : (_ && u.hasAttribute('morphTarget' + b) === !0 && u.deleteAttribute('morphTarget' + b), T && u.hasAttribute('morphNormal' + b) === !0 && u.deleteAttribute('morphNormal' + b), (n[b] = 0));
			}
			const S = u.morphTargetsRelative ? 1 : 1 - x;
			d.getUniforms().setValue(s, 'morphTargetBaseInfluence', S), d.getUniforms().setValue(s, 'morphTargetInfluences', n);
		}
	}
	return { update: c };
}
function WebGLObjects(s, e, t, i) {
	let n = new WeakMap();
	function r(c) {
		const l = i.render.frame,
			u = c.geometry,
			h = e.get(c, u);
		return n.get(h) !== l && (e.update(h), n.set(h, l)), c.isInstancedMesh && (c.hasEventListener('dispose', a) === !1 && c.addEventListener('dispose', a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), h;
	}
	function o() {
		n = new WeakMap();
	}
	function a(c) {
		const l = c.target;
		l.removeEventListener('dispose', a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
	}
	return { update: r, dispose: o };
}
const emptyTexture = new Texture(),
	emptyArrayTexture = new DataArrayTexture(),
	empty3dTexture = new Data3DTexture(),
	emptyCubeTexture = new CubeTexture(),
	arrayCacheF32 = [],
	arrayCacheI32 = [],
	mat4array = new Float32Array(16),
	mat3array = new Float32Array(9),
	mat2array = new Float32Array(4);
function flatten(s, e, t) {
	const i = s[0];
	if (i <= 0 || i > 0) return s;
	const n = e * t;
	let r = arrayCacheF32[n];
	if ((r === void 0 && ((r = new Float32Array(n)), (arrayCacheF32[n] = r)), e !== 0)) {
		i.toArray(r, 0);
		for (let o = 1, a = 0; o !== e; ++o) (a += t), s[o].toArray(r, a);
	}
	return r;
}
function arraysEqual(s, e) {
	if (s.length !== e.length) return !1;
	for (let t = 0, i = s.length; t < i; t++) if (s[t] !== e[t]) return !1;
	return !0;
}
function copyArray(s, e) {
	for (let t = 0, i = e.length; t < i; t++) s[t] = e[t];
}
function allocTexUnits(s, e) {
	let t = arrayCacheI32[e];
	t === void 0 && ((t = new Int32Array(e)), (arrayCacheI32[e] = t));
	for (let i = 0; i !== e; ++i) t[i] = s.allocateTextureUnit();
	return t;
}
function setValueV1f(s, e) {
	const t = this.cache;
	t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function setValueV2f(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform2fv(this.addr, e), copyArray(t, e);
	}
}
function setValueV3f(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
	else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), (t[0] = e.r), (t[1] = e.g), (t[2] = e.b));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform3fv(this.addr, e), copyArray(t, e);
	}
}
function setValueV4f(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform4fv(this.addr, e), copyArray(t, e);
	}
}
function setValueM2(s, e) {
	const t = this.cache,
		i = e.elements;
	if (i === void 0) {
		if (arraysEqual(t, e)) return;
		s.uniformMatrix2fv(this.addr, !1, e), copyArray(t, e);
	} else {
		if (arraysEqual(t, i)) return;
		mat2array.set(i), s.uniformMatrix2fv(this.addr, !1, mat2array), copyArray(t, i);
	}
}
function setValueM3(s, e) {
	const t = this.cache,
		i = e.elements;
	if (i === void 0) {
		if (arraysEqual(t, e)) return;
		s.uniformMatrix3fv(this.addr, !1, e), copyArray(t, e);
	} else {
		if (arraysEqual(t, i)) return;
		mat3array.set(i), s.uniformMatrix3fv(this.addr, !1, mat3array), copyArray(t, i);
	}
}
function setValueM4(s, e) {
	const t = this.cache,
		i = e.elements;
	if (i === void 0) {
		if (arraysEqual(t, e)) return;
		s.uniformMatrix4fv(this.addr, !1, e), copyArray(t, e);
	} else {
		if (arraysEqual(t, i)) return;
		mat4array.set(i), s.uniformMatrix4fv(this.addr, !1, mat4array), copyArray(t, i);
	}
}
function setValueV1i(s, e) {
	const t = this.cache;
	t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function setValueV2i(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform2iv(this.addr, e), copyArray(t, e);
	}
}
function setValueV3i(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform3iv(this.addr, e), copyArray(t, e);
	}
}
function setValueV4i(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform4iv(this.addr, e), copyArray(t, e);
	}
}
function setValueV1ui(s, e) {
	const t = this.cache;
	t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function setValueV2ui(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform2uiv(this.addr, e), copyArray(t, e);
	}
}
function setValueV3ui(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform3uiv(this.addr, e), copyArray(t, e);
	}
}
function setValueV4ui(s, e) {
	const t = this.cache;
	if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
	else {
		if (arraysEqual(t, e)) return;
		s.uniform4uiv(this.addr, e), copyArray(t, e);
	}
}
function setValueT1(s, e, t) {
	const i = this.cache,
		n = t.allocateTextureUnit();
	i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)), t.setTexture2D(e || emptyTexture, n);
}
function setValueT3D1(s, e, t) {
	const i = this.cache,
		n = t.allocateTextureUnit();
	i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)), t.setTexture3D(e || empty3dTexture, n);
}
function setValueT6(s, e, t) {
	const i = this.cache,
		n = t.allocateTextureUnit();
	i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)), t.setTextureCube(e || emptyCubeTexture, n);
}
function setValueT2DArray1(s, e, t) {
	const i = this.cache,
		n = t.allocateTextureUnit();
	i[0] !== n && (s.uniform1i(this.addr, n), (i[0] = n)), t.setTexture2DArray(e || emptyArrayTexture, n);
}
function getSingularSetter(s) {
	switch (s) {
		case 5126:
			return setValueV1f;
		case 35664:
			return setValueV2f;
		case 35665:
			return setValueV3f;
		case 35666:
			return setValueV4f;
		case 35674:
			return setValueM2;
		case 35675:
			return setValueM3;
		case 35676:
			return setValueM4;
		case 5124:
		case 35670:
			return setValueV1i;
		case 35667:
		case 35671:
			return setValueV2i;
		case 35668:
		case 35672:
			return setValueV3i;
		case 35669:
		case 35673:
			return setValueV4i;
		case 5125:
			return setValueV1ui;
		case 36294:
			return setValueV2ui;
		case 36295:
			return setValueV3ui;
		case 36296:
			return setValueV4ui;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682:
			return setValueT1;
		case 35679:
		case 36299:
		case 36307:
			return setValueT3D1;
		case 35680:
		case 36300:
		case 36308:
		case 36293:
			return setValueT6;
		case 36289:
		case 36303:
		case 36311:
		case 36292:
			return setValueT2DArray1;
	}
}
function setValueV1fArray(s, e) {
	s.uniform1fv(this.addr, e);
}
function setValueV2fArray(s, e) {
	const t = flatten(e, this.size, 2);
	s.uniform2fv(this.addr, t);
}
function setValueV3fArray(s, e) {
	const t = flatten(e, this.size, 3);
	s.uniform3fv(this.addr, t);
}
function setValueV4fArray(s, e) {
	const t = flatten(e, this.size, 4);
	s.uniform4fv(this.addr, t);
}
function setValueM2Array(s, e) {
	const t = flatten(e, this.size, 4);
	s.uniformMatrix2fv(this.addr, !1, t);
}
function setValueM3Array(s, e) {
	const t = flatten(e, this.size, 9);
	s.uniformMatrix3fv(this.addr, !1, t);
}
function setValueM4Array(s, e) {
	const t = flatten(e, this.size, 16);
	s.uniformMatrix4fv(this.addr, !1, t);
}
function setValueV1iArray(s, e) {
	s.uniform1iv(this.addr, e);
}
function setValueV2iArray(s, e) {
	s.uniform2iv(this.addr, e);
}
function setValueV3iArray(s, e) {
	s.uniform3iv(this.addr, e);
}
function setValueV4iArray(s, e) {
	s.uniform4iv(this.addr, e);
}
function setValueV1uiArray(s, e) {
	s.uniform1uiv(this.addr, e);
}
function setValueV2uiArray(s, e) {
	s.uniform2uiv(this.addr, e);
}
function setValueV3uiArray(s, e) {
	s.uniform3uiv(this.addr, e);
}
function setValueV4uiArray(s, e) {
	s.uniform4uiv(this.addr, e);
}
function setValueT1Array(s, e, t) {
	const i = this.cache,
		n = e.length,
		r = allocTexUnits(t, n);
	arraysEqual(i, r) || (s.uniform1iv(this.addr, r), copyArray(i, r));
	for (let o = 0; o !== n; ++o) t.setTexture2D(e[o] || emptyTexture, r[o]);
}
function setValueT3DArray(s, e, t) {
	const i = this.cache,
		n = e.length,
		r = allocTexUnits(t, n);
	arraysEqual(i, r) || (s.uniform1iv(this.addr, r), copyArray(i, r));
	for (let o = 0; o !== n; ++o) t.setTexture3D(e[o] || empty3dTexture, r[o]);
}
function setValueT6Array(s, e, t) {
	const i = this.cache,
		n = e.length,
		r = allocTexUnits(t, n);
	arraysEqual(i, r) || (s.uniform1iv(this.addr, r), copyArray(i, r));
	for (let o = 0; o !== n; ++o) t.setTextureCube(e[o] || emptyCubeTexture, r[o]);
}
function setValueT2DArrayArray(s, e, t) {
	const i = this.cache,
		n = e.length,
		r = allocTexUnits(t, n);
	arraysEqual(i, r) || (s.uniform1iv(this.addr, r), copyArray(i, r));
	for (let o = 0; o !== n; ++o) t.setTexture2DArray(e[o] || emptyArrayTexture, r[o]);
}
function getPureArraySetter(s) {
	switch (s) {
		case 5126:
			return setValueV1fArray;
		case 35664:
			return setValueV2fArray;
		case 35665:
			return setValueV3fArray;
		case 35666:
			return setValueV4fArray;
		case 35674:
			return setValueM2Array;
		case 35675:
			return setValueM3Array;
		case 35676:
			return setValueM4Array;
		case 5124:
		case 35670:
			return setValueV1iArray;
		case 35667:
		case 35671:
			return setValueV2iArray;
		case 35668:
		case 35672:
			return setValueV3iArray;
		case 35669:
		case 35673:
			return setValueV4iArray;
		case 5125:
			return setValueV1uiArray;
		case 36294:
			return setValueV2uiArray;
		case 36295:
			return setValueV3uiArray;
		case 36296:
			return setValueV4uiArray;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682:
			return setValueT1Array;
		case 35679:
		case 36299:
		case 36307:
			return setValueT3DArray;
		case 35680:
		case 36300:
		case 36308:
		case 36293:
			return setValueT6Array;
		case 36289:
		case 36303:
		case 36311:
		case 36292:
			return setValueT2DArrayArray;
	}
}
class SingleUniform {
	constructor(e, t, i) {
		(this.id = e), (this.addr = i), (this.cache = []), (this.setValue = getSingularSetter(t.type));
	}
}
class PureArrayUniform {
	constructor(e, t, i) {
		(this.id = e), (this.addr = i), (this.cache = []), (this.size = t.size), (this.setValue = getPureArraySetter(t.type));
	}
}
class StructuredUniform {
	constructor(e) {
		(this.id = e), (this.seq = []), (this.map = {});
	}
	setValue(e, t, i) {
		const n = this.seq;
		for (let r = 0, o = n.length; r !== o; ++r) {
			const a = n[r];
			a.setValue(e, t[a.id], i);
		}
	}
}
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(s, e) {
	s.seq.push(e), (s.map[e.id] = e);
}
function parseUniform(s, e, t) {
	const i = s.name,
		n = i.length;
	for (RePathPart.lastIndex = 0; ; ) {
		const r = RePathPart.exec(i),
			o = RePathPart.lastIndex;
		let a = r[1];
		const c = r[2] === ']',
			l = r[3];
		if ((c && (a = a | 0), l === void 0 || (l === '[' && o + 2 === n))) {
			addUniform(t, l === void 0 ? new SingleUniform(a, s, e) : new PureArrayUniform(a, s, e));
			break;
		} else {
			let h = t.map[a];
			h === void 0 && ((h = new StructuredUniform(a)), addUniform(t, h)), (t = h);
		}
	}
}
class WebGLUniforms {
	constructor(e, t) {
		(this.seq = []), (this.map = {});
		const i = e.getProgramParameter(t, 35718);
		for (let n = 0; n < i; ++n) {
			const r = e.getActiveUniform(t, n),
				o = e.getUniformLocation(t, r.name);
			parseUniform(r, o, this);
		}
	}
	setValue(e, t, i, n) {
		const r = this.map[t];
		r !== void 0 && r.setValue(e, i, n);
	}
	setOptional(e, t, i) {
		const n = t[i];
		n !== void 0 && this.setValue(e, i, n);
	}
	static upload(e, t, i, n) {
		for (let r = 0, o = t.length; r !== o; ++r) {
			const a = t[r],
				c = i[a.id];
			c.needsUpdate !== !1 && a.setValue(e, c.value, n);
		}
	}
	static seqWithValue(e, t) {
		const i = [];
		for (let n = 0, r = e.length; n !== r; ++n) {
			const o = e[n];
			o.id in t && i.push(o);
		}
		return i;
	}
}
function WebGLShader(s, e, t) {
	const i = s.createShader(e);
	return s.shaderSource(i, t), s.compileShader(i), i;
}
let programIdCount = 0;
function handleSource(s, e) {
	const t = s.split(`
`),
		i = [],
		n = Math.max(e - 6, 0),
		r = Math.min(e + 6, t.length);
	for (let o = n; o < r; o++) {
		const a = o + 1;
		i.push(`${a === e ? '>' : ' '} ${a}: ${t[o]}`);
	}
	return i.join(`
`);
}
function getEncodingComponents(s) {
	switch (s) {
		case LinearEncoding:
			return ['Linear', '( value )'];
		case sRGBEncoding:
			return ['sRGB', '( value )'];
		default:
			return console.warn('THREE.WebGLProgram: Unsupported encoding:', s), ['Linear', '( value )'];
	}
}
function getShaderErrors(s, e, t) {
	const i = s.getShaderParameter(e, 35713),
		n = s.getShaderInfoLog(e).trim();
	if (i && n === '') return '';
	const r = /ERROR: 0:(\d+)/.exec(n);
	if (r) {
		const o = parseInt(r[1]);
		return (
			t.toUpperCase() +
			`

` +
			n +
			`

` +
			handleSource(s.getShaderSource(e), o)
		);
	} else return n;
}
function getTexelEncodingFunction(s, e) {
	const t = getEncodingComponents(e);
	return 'vec4 ' + s + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function getToneMappingFunction(s, e) {
	let t;
	switch (e) {
		case LinearToneMapping:
			t = 'Linear';
			break;
		case ReinhardToneMapping:
			t = 'Reinhard';
			break;
		case CineonToneMapping:
			t = 'OptimizedCineon';
			break;
		case ACESFilmicToneMapping:
			t = 'ACESFilmic';
			break;
		case CustomToneMapping:
			t = 'Custom';
			break;
		default:
			console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e), (t = 'Linear');
	}
	return 'vec3 ' + s + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }';
}
function generateExtensions(s) {
	return [s.extensionDerivatives || s.envMapCubeUVHeight || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === 'physical' ? '#extension GL_OES_standard_derivatives : enable' : '', (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '', s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '', (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : ''].filter(filterEmptyLine).join(`
`);
}
function generateDefines(s) {
	const e = [];
	for (const t in s) {
		const i = s[t];
		i !== !1 && e.push('#define ' + t + ' ' + i);
	}
	return e.join(`
`);
}
function fetchAttributeLocations(s, e) {
	const t = {},
		i = s.getProgramParameter(e, 35721);
	for (let n = 0; n < i; n++) {
		const r = s.getActiveAttrib(e, n),
			o = r.name;
		let a = 1;
		r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), (t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a });
	}
	return t;
}
function filterEmptyLine(s) {
	return s !== '';
}
function replaceLightNums(s, e) {
	const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
	return s
		.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
		.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
		.replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
		.replace(/NUM_SPOT_LIGHT_COORDS/g, t)
		.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
		.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
		.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
		.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
		.replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
		.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
		.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function replaceClippingPlaneNums(s, e) {
	return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(s) {
	return s.replace(includePattern, includeReplacer);
}
function includeReplacer(s, e) {
	const t = ShaderChunk[e];
	if (t === void 0) throw new Error('Can not resolve #include <' + e + '>');
	return resolveIncludes(t);
}
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(s) {
	return s.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(s, e, t, i) {
	let n = '';
	for (let r = parseInt(e); r < parseInt(t); r++) n += i.replace(/\[\s*i\s*\]/g, '[ ' + r + ' ]').replace(/UNROLLED_LOOP_INDEX/g, r);
	return n;
}
function generatePrecision(s) {
	let e =
		'precision ' +
		s.precision +
		` float;
precision ` +
		s.precision +
		' int;';
	return (
		s.precision === 'highp'
			? (e += `
#define HIGH_PRECISION`)
			: s.precision === 'mediump'
			? (e += `
#define MEDIUM_PRECISION`)
			: s.precision === 'lowp' &&
			  (e += `
#define LOW_PRECISION`),
		e
	);
}
function generateShadowMapTypeDefine(s) {
	let e = 'SHADOWMAP_TYPE_BASIC';
	return s.shadowMapType === PCFShadowMap ? (e = 'SHADOWMAP_TYPE_PCF') : s.shadowMapType === PCFSoftShadowMap ? (e = 'SHADOWMAP_TYPE_PCF_SOFT') : s.shadowMapType === VSMShadowMap && (e = 'SHADOWMAP_TYPE_VSM'), e;
}
function generateEnvMapTypeDefine(s) {
	let e = 'ENVMAP_TYPE_CUBE';
	if (s.envMap)
		switch (s.envMapMode) {
			case CubeReflectionMapping:
			case CubeRefractionMapping:
				e = 'ENVMAP_TYPE_CUBE';
				break;
			case CubeUVReflectionMapping:
				e = 'ENVMAP_TYPE_CUBE_UV';
				break;
		}
	return e;
}
function generateEnvMapModeDefine(s) {
	let e = 'ENVMAP_MODE_REFLECTION';
	if (s.envMap)
		switch (s.envMapMode) {
			case CubeRefractionMapping:
				e = 'ENVMAP_MODE_REFRACTION';
				break;
		}
	return e;
}
function generateEnvMapBlendingDefine(s) {
	let e = 'ENVMAP_BLENDING_NONE';
	if (s.envMap)
		switch (s.combine) {
			case MultiplyOperation:
				e = 'ENVMAP_BLENDING_MULTIPLY';
				break;
			case MixOperation:
				e = 'ENVMAP_BLENDING_MIX';
				break;
			case AddOperation:
				e = 'ENVMAP_BLENDING_ADD';
				break;
		}
	return e;
}
function generateCubeUVSize(s) {
	const e = s.envMapCubeUVHeight;
	if (e === null) return null;
	const t = Math.log2(e) - 2,
		i = 1 / e;
	return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function WebGLProgram(s, e, t, i) {
	const n = s.getContext(),
		r = t.defines;
	let o = t.vertexShader,
		a = t.fragmentShader;
	const c = generateShadowMapTypeDefine(t),
		l = generateEnvMapTypeDefine(t),
		u = generateEnvMapModeDefine(t),
		h = generateEnvMapBlendingDefine(t),
		d = generateCubeUVSize(t),
		m = t.isWebGL2 ? '' : generateExtensions(t),
		g = generateDefines(r),
		p = n.createProgram();
	let f,
		_,
		T = t.glslVersion
			? '#version ' +
			  t.glslVersion +
			  `
`
			: '';
	t.isRawShaderMaterial
		? ((f = [g].filter(filterEmptyLine).join(`
`)),
		  f.length > 0 &&
				(f += `
`),
		  (_ = [m, g].filter(filterEmptyLine).join(`
`)),
		  _.length > 0 &&
				(_ += `
`))
		: ((f = [
				generatePrecision(t),
				'#define SHADER_NAME ' + t.shaderName,
				g,
				t.instancing ? '#define USE_INSTANCING' : '',
				t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
				t.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
				t.useFog && t.fog ? '#define USE_FOG' : '',
				t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
				t.map ? '#define USE_MAP' : '',
				t.envMap ? '#define USE_ENVMAP' : '',
				t.envMap ? '#define ' + u : '',
				t.lightMap ? '#define USE_LIGHTMAP' : '',
				t.aoMap ? '#define USE_AOMAP' : '',
				t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
				t.bumpMap ? '#define USE_BUMPMAP' : '',
				t.normalMap ? '#define USE_NORMALMAP' : '',
				t.normalMap && t.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
				t.normalMap && t.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
				t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
				t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
				t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
				t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
				t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
				t.displacementMap && t.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
				t.specularMap ? '#define USE_SPECULARMAP' : '',
				t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
				t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
				t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
				t.metalnessMap ? '#define USE_METALNESSMAP' : '',
				t.alphaMap ? '#define USE_ALPHAMAP' : '',
				t.transmission ? '#define USE_TRANSMISSION' : '',
				t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
				t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
				t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
				t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
				t.vertexTangents ? '#define USE_TANGENT' : '',
				t.vertexColors ? '#define USE_COLOR' : '',
				t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
				t.vertexUvs ? '#define USE_UV' : '',
				t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
				t.flatShading ? '#define FLAT_SHADED' : '',
				t.skinning ? '#define USE_SKINNING' : '',
				t.morphTargets ? '#define USE_MORPHTARGETS' : '',
				t.morphNormals && t.flatShading === !1 ? '#define USE_MORPHNORMALS' : '',
				t.morphColors && t.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
				t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE' : '',
				t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride : '',
				t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount : '',
				t.doubleSided ? '#define DOUBLE_SIDED' : '',
				t.flipSided ? '#define FLIP_SIDED' : '',
				t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
				t.shadowMapEnabled ? '#define ' + c : '',
				t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
				t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
				t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
				'uniform mat4 modelMatrix;',
				'uniform mat4 modelViewMatrix;',
				'uniform mat4 projectionMatrix;',
				'uniform mat4 viewMatrix;',
				'uniform mat3 normalMatrix;',
				'uniform vec3 cameraPosition;',
				'uniform bool isOrthographic;',
				'#ifdef USE_INSTANCING',
				'	attribute mat4 instanceMatrix;',
				'#endif',
				'#ifdef USE_INSTANCING_COLOR',
				'	attribute vec3 instanceColor;',
				'#endif',
				'attribute vec3 position;',
				'attribute vec3 normal;',
				'attribute vec2 uv;',
				'#ifdef USE_TANGENT',
				'	attribute vec4 tangent;',
				'#endif',
				'#if defined( USE_COLOR_ALPHA )',
				'	attribute vec4 color;',
				'#elif defined( USE_COLOR )',
				'	attribute vec3 color;',
				'#endif',
				'#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
				'	attribute vec3 morphTarget0;',
				'	attribute vec3 morphTarget1;',
				'	attribute vec3 morphTarget2;',
				'	attribute vec3 morphTarget3;',
				'	#ifdef USE_MORPHNORMALS',
				'		attribute vec3 morphNormal0;',
				'		attribute vec3 morphNormal1;',
				'		attribute vec3 morphNormal2;',
				'		attribute vec3 morphNormal3;',
				'	#else',
				'		attribute vec3 morphTarget4;',
				'		attribute vec3 morphTarget5;',
				'		attribute vec3 morphTarget6;',
				'		attribute vec3 morphTarget7;',
				'	#endif',
				'#endif',
				'#ifdef USE_SKINNING',
				'	attribute vec4 skinIndex;',
				'	attribute vec4 skinWeight;',
				'#endif',
				`
`,
		  ].filter(filterEmptyLine).join(`
`)),
		  (_ = [
				m,
				generatePrecision(t),
				'#define SHADER_NAME ' + t.shaderName,
				g,
				t.useFog && t.fog ? '#define USE_FOG' : '',
				t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
				t.map ? '#define USE_MAP' : '',
				t.matcap ? '#define USE_MATCAP' : '',
				t.envMap ? '#define USE_ENVMAP' : '',
				t.envMap ? '#define ' + l : '',
				t.envMap ? '#define ' + u : '',
				t.envMap ? '#define ' + h : '',
				d ? '#define CUBEUV_TEXEL_WIDTH ' + d.texelWidth : '',
				d ? '#define CUBEUV_TEXEL_HEIGHT ' + d.texelHeight : '',
				d ? '#define CUBEUV_MAX_MIP ' + d.maxMip + '.0' : '',
				t.lightMap ? '#define USE_LIGHTMAP' : '',
				t.aoMap ? '#define USE_AOMAP' : '',
				t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
				t.bumpMap ? '#define USE_BUMPMAP' : '',
				t.normalMap ? '#define USE_NORMALMAP' : '',
				t.normalMap && t.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
				t.normalMap && t.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
				t.clearcoat ? '#define USE_CLEARCOAT' : '',
				t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
				t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
				t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
				t.iridescence ? '#define USE_IRIDESCENCE' : '',
				t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
				t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
				t.specularMap ? '#define USE_SPECULARMAP' : '',
				t.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '',
				t.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '',
				t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
				t.metalnessMap ? '#define USE_METALNESSMAP' : '',
				t.alphaMap ? '#define USE_ALPHAMAP' : '',
				t.alphaTest ? '#define USE_ALPHATEST' : '',
				t.sheen ? '#define USE_SHEEN' : '',
				t.sheenColorMap ? '#define USE_SHEENCOLORMAP' : '',
				t.sheenRoughnessMap ? '#define USE_SHEENROUGHNESSMAP' : '',
				t.transmission ? '#define USE_TRANSMISSION' : '',
				t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
				t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
				t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
				t.vertexTangents ? '#define USE_TANGENT' : '',
				t.vertexColors || t.instancingColor ? '#define USE_COLOR' : '',
				t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
				t.vertexUvs ? '#define USE_UV' : '',
				t.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
				t.gradientMap ? '#define USE_GRADIENTMAP' : '',
				t.flatShading ? '#define FLAT_SHADED' : '',
				t.doubleSided ? '#define DOUBLE_SIDED' : '',
				t.flipSided ? '#define FLIP_SIDED' : '',
				t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
				t.shadowMapEnabled ? '#define ' + c : '',
				t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
				t.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
				t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
				t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
				'uniform mat4 viewMatrix;',
				'uniform vec3 cameraPosition;',
				'uniform bool isOrthographic;',
				t.toneMapping !== NoToneMapping ? '#define TONE_MAPPING' : '',
				t.toneMapping !== NoToneMapping ? ShaderChunk.tonemapping_pars_fragment : '',
				t.toneMapping !== NoToneMapping ? getToneMappingFunction('toneMapping', t.toneMapping) : '',
				t.dithering ? '#define DITHERING' : '',
				t.opaque ? '#define OPAQUE' : '',
				ShaderChunk.encodings_pars_fragment,
				getTexelEncodingFunction('linearToOutputTexel', t.outputEncoding),
				t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
				`
`,
		  ].filter(filterEmptyLine).join(`
`))),
		(o = resolveIncludes(o)),
		(o = replaceLightNums(o, t)),
		(o = replaceClippingPlaneNums(o, t)),
		(a = resolveIncludes(a)),
		(a = replaceLightNums(a, t)),
		(a = replaceClippingPlaneNums(a, t)),
		(o = unrollLoops(o)),
		(a = unrollLoops(a)),
		t.isWebGL2 &&
			t.isRawShaderMaterial !== !0 &&
			((T = `#version 300 es
`),
			(f =
				['precision mediump sampler2DArray;', '#define attribute in', '#define varying out', '#define texture2D texture'].join(`
`) +
				`
` +
				f),
			(_ =
				['#define varying in', t.glslVersion === GLSL3 ? '' : 'layout(location = 0) out highp vec4 pc_fragColor;', t.glslVersion === GLSL3 ? '' : '#define gl_FragColor pc_fragColor', '#define gl_FragDepthEXT gl_FragDepth', '#define texture2D texture', '#define textureCube texture', '#define texture2DProj textureProj', '#define texture2DLodEXT textureLod', '#define texture2DProjLodEXT textureProjLod', '#define textureCubeLodEXT textureLod', '#define texture2DGradEXT textureGrad', '#define texture2DProjGradEXT textureProjGrad', '#define textureCubeGradEXT textureGrad'].join(`
`) +
				`
` +
				_));
	const x = T + f + o,
		S = T + _ + a,
		b = WebGLShader(n, 35633, x),
		E = WebGLShader(n, 35632, S);
	if ((n.attachShader(p, b), n.attachShader(p, E), t.index0AttributeName !== void 0 ? n.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && n.bindAttribLocation(p, 0, 'position'), n.linkProgram(p), s.debug.checkShaderErrors)) {
		const C = n.getProgramInfoLog(p).trim(),
			P = n.getShaderInfoLog(b).trim(),
			z = n.getShaderInfoLog(E).trim();
		let Y = !0,
			D = !0;
		if (n.getProgramParameter(p, 35714) === !1) {
			Y = !1;
			const I = getShaderErrors(n, b, 'vertex'),
				N = getShaderErrors(n, E, 'fragment');
			console.error(
				'THREE.WebGLProgram: Shader Error ' +
					n.getError() +
					' - VALIDATE_STATUS ' +
					n.getProgramParameter(p, 35715) +
					`

Program Info Log: ` +
					C +
					`
` +
					I +
					`
` +
					N,
			);
		} else C !== '' ? console.warn('THREE.WebGLProgram: Program Info Log:', C) : (P === '' || z === '') && (D = !1);
		D && (this.diagnostics = { runnable: Y, programLog: C, vertexShader: { log: P, prefix: f }, fragmentShader: { log: z, prefix: _ } });
	}
	n.deleteShader(b), n.deleteShader(E);
	let A;
	this.getUniforms = function () {
		return A === void 0 && (A = new WebGLUniforms(n, p)), A;
	};
	let v;
	return (
		(this.getAttributes = function () {
			return v === void 0 && (v = fetchAttributeLocations(n, p)), v;
		}),
		(this.destroy = function () {
			i.releaseStatesOfProgram(this), n.deleteProgram(p), (this.program = void 0);
		}),
		(this.name = t.shaderName),
		(this.id = programIdCount++),
		(this.cacheKey = e),
		(this.usedTimes = 1),
		(this.program = p),
		(this.vertexShader = b),
		(this.fragmentShader = E),
		this
	);
}
let _id = 0;
class WebGLShaderCache {
	constructor() {
		(this.shaderCache = new Map()), (this.materialCache = new Map());
	}
	update(e) {
		const t = e.vertexShader,
			i = e.fragmentShader,
			n = this._getShaderStage(t),
			r = this._getShaderStage(i),
			o = this._getShaderCacheForMaterial(e);
		return o.has(n) === !1 && (o.add(n), n.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
	}
	remove(e) {
		const t = this.materialCache.get(e);
		for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id;
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		const t = this.materialCache;
		let i = t.get(e);
		return i === void 0 && ((i = new Set()), t.set(e, i)), i;
	}
	_getShaderStage(e) {
		const t = this.shaderCache;
		let i = t.get(e);
		return i === void 0 && ((i = new WebGLShaderStage(e)), t.set(e, i)), i;
	}
}
class WebGLShaderStage {
	constructor(e) {
		(this.id = _id++), (this.code = e), (this.usedTimes = 0);
	}
}
function WebGLPrograms(s, e, t, i, n, r, o) {
	const a = new Layers(),
		c = new WebGLShaderCache(),
		l = [],
		u = n.isWebGL2,
		h = n.logarithmicDepthBuffer,
		d = n.vertexTextures;
	let m = n.precision;
	const g = { MeshDepthMaterial: 'depth', MeshDistanceMaterial: 'distanceRGBA', MeshNormalMaterial: 'normal', MeshBasicMaterial: 'basic', MeshLambertMaterial: 'lambert', MeshPhongMaterial: 'phong', MeshToonMaterial: 'toon', MeshStandardMaterial: 'physical', MeshPhysicalMaterial: 'physical', MeshMatcapMaterial: 'matcap', LineBasicMaterial: 'basic', LineDashedMaterial: 'dashed', PointsMaterial: 'points', ShadowMaterial: 'shadow', SpriteMaterial: 'sprite' };
	function p(v, C, P, z, Y) {
		const D = z.fog,
			I = Y.geometry,
			N = v.isMeshStandardMaterial ? z.environment : null,
			j = (v.isMeshStandardMaterial ? t : e).get(v.envMap || N),
			K = j && j.mapping === CubeUVReflectionMapping ? j.image.height : null,
			q = g[v.type];
		v.precision !== null && ((m = n.getMaxPrecision(v.precision)), m !== v.precision && console.warn('THREE.WebGLProgram.getParameters:', v.precision, 'not supported, using', m, 'instead.'));
		const ie = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color,
			ee = ie !== void 0 ? ie.length : 0;
		let B = 0;
		I.morphAttributes.position !== void 0 && (B = 1), I.morphAttributes.normal !== void 0 && (B = 2), I.morphAttributes.color !== void 0 && (B = 3);
		let H, Z, te, re;
		if (q) {
			const Pe = ShaderLib[q];
			(H = Pe.vertexShader), (Z = Pe.fragmentShader);
		} else (H = v.vertexShader), (Z = v.fragmentShader), c.update(v), (te = c.getVertexShaderID(v)), (re = c.getFragmentShaderID(v));
		const $ = s.getRenderTarget(),
			Te = v.alphaTest > 0,
			ue = v.clearcoat > 0,
			ve = v.iridescence > 0;
		return {
			isWebGL2: u,
			shaderID: q,
			shaderName: v.type,
			vertexShader: H,
			fragmentShader: Z,
			defines: v.defines,
			customVertexShaderID: te,
			customFragmentShaderID: re,
			isRawShaderMaterial: v.isRawShaderMaterial === !0,
			glslVersion: v.glslVersion,
			precision: m,
			instancing: Y.isInstancedMesh === !0,
			instancingColor: Y.isInstancedMesh === !0 && Y.instanceColor !== null,
			supportsVertexTextures: d,
			outputEncoding: $ === null ? s.outputEncoding : $.isXRRenderTarget === !0 ? $.texture.encoding : LinearEncoding,
			map: !!v.map,
			matcap: !!v.matcap,
			envMap: !!j,
			envMapMode: j && j.mapping,
			envMapCubeUVHeight: K,
			lightMap: !!v.lightMap,
			aoMap: !!v.aoMap,
			emissiveMap: !!v.emissiveMap,
			bumpMap: !!v.bumpMap,
			normalMap: !!v.normalMap,
			objectSpaceNormalMap: v.normalMapType === ObjectSpaceNormalMap,
			tangentSpaceNormalMap: v.normalMapType === TangentSpaceNormalMap,
			decodeVideoTexture: !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === sRGBEncoding,
			clearcoat: ue,
			clearcoatMap: ue && !!v.clearcoatMap,
			clearcoatRoughnessMap: ue && !!v.clearcoatRoughnessMap,
			clearcoatNormalMap: ue && !!v.clearcoatNormalMap,
			iridescence: ve,
			iridescenceMap: ve && !!v.iridescenceMap,
			iridescenceThicknessMap: ve && !!v.iridescenceThicknessMap,
			displacementMap: !!v.displacementMap,
			roughnessMap: !!v.roughnessMap,
			metalnessMap: !!v.metalnessMap,
			specularMap: !!v.specularMap,
			specularIntensityMap: !!v.specularIntensityMap,
			specularColorMap: !!v.specularColorMap,
			opaque: v.transparent === !1 && v.blending === NormalBlending,
			alphaMap: !!v.alphaMap,
			alphaTest: Te,
			gradientMap: !!v.gradientMap,
			sheen: v.sheen > 0,
			sheenColorMap: !!v.sheenColorMap,
			sheenRoughnessMap: !!v.sheenRoughnessMap,
			transmission: v.transmission > 0,
			transmissionMap: !!v.transmissionMap,
			thicknessMap: !!v.thicknessMap,
			combine: v.combine,
			vertexTangents: !!v.normalMap && !!I.attributes.tangent,
			vertexColors: v.vertexColors,
			vertexAlphas: v.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
			vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.iridescenceMap || !!v.iridescenceThicknessMap || !!v.displacementMap || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || !!v.sheenColorMap || !!v.sheenRoughnessMap,
			uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap || v.iridescenceMap || v.iridescenceThicknessMap || v.transmission > 0 || v.transmissionMap || v.thicknessMap || v.specularIntensityMap || v.specularColorMap || v.sheen > 0 || v.sheenColorMap || v.sheenRoughnessMap) && !!v.displacementMap,
			fog: !!D,
			useFog: v.fog === !0,
			fogExp2: D && D.isFogExp2,
			flatShading: !!v.flatShading,
			sizeAttenuation: v.sizeAttenuation,
			logarithmicDepthBuffer: h,
			skinning: Y.isSkinnedMesh === !0,
			morphTargets: I.morphAttributes.position !== void 0,
			morphNormals: I.morphAttributes.normal !== void 0,
			morphColors: I.morphAttributes.color !== void 0,
			morphTargetsCount: ee,
			morphTextureStride: B,
			numDirLights: C.directional.length,
			numPointLights: C.point.length,
			numSpotLights: C.spot.length,
			numSpotLightMaps: C.spotLightMap.length,
			numRectAreaLights: C.rectArea.length,
			numHemiLights: C.hemi.length,
			numDirLightShadows: C.directionalShadowMap.length,
			numPointLightShadows: C.pointShadowMap.length,
			numSpotLightShadows: C.spotShadowMap.length,
			numSpotLightShadowsWithMaps: C.numSpotLightShadowsWithMaps,
			numClippingPlanes: o.numPlanes,
			numClipIntersection: o.numIntersection,
			dithering: v.dithering,
			shadowMapEnabled: s.shadowMap.enabled && P.length > 0,
			shadowMapType: s.shadowMap.type,
			toneMapping: v.toneMapped ? s.toneMapping : NoToneMapping,
			physicallyCorrectLights: s.physicallyCorrectLights,
			premultipliedAlpha: v.premultipliedAlpha,
			doubleSided: v.side === DoubleSide,
			flipSided: v.side === BackSide,
			useDepthPacking: !!v.depthPacking,
			depthPacking: v.depthPacking || 0,
			index0AttributeName: v.index0AttributeName,
			extensionDerivatives: v.extensions && v.extensions.derivatives,
			extensionFragDepth: v.extensions && v.extensions.fragDepth,
			extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
			extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
			rendererExtensionFragDepth: u || i.has('EXT_frag_depth'),
			rendererExtensionDrawBuffers: u || i.has('WEBGL_draw_buffers'),
			rendererExtensionShaderTextureLod: u || i.has('EXT_shader_texture_lod'),
			customProgramCacheKey: v.customProgramCacheKey(),
		};
	}
	function f(v) {
		const C = [];
		if ((v.shaderID ? C.push(v.shaderID) : (C.push(v.customVertexShaderID), C.push(v.customFragmentShaderID)), v.defines !== void 0)) for (const P in v.defines) C.push(P), C.push(v.defines[P]);
		return v.isRawShaderMaterial === !1 && (_(C, v), T(C, v), C.push(s.outputEncoding)), C.push(v.customProgramCacheKey), C.join();
	}
	function _(v, C) {
		v.push(C.precision), v.push(C.outputEncoding), v.push(C.envMapMode), v.push(C.envMapCubeUVHeight), v.push(C.combine), v.push(C.vertexUvs), v.push(C.fogExp2), v.push(C.sizeAttenuation), v.push(C.morphTargetsCount), v.push(C.morphAttributeCount), v.push(C.numDirLights), v.push(C.numPointLights), v.push(C.numSpotLights), v.push(C.numSpotLightMaps), v.push(C.numHemiLights), v.push(C.numRectAreaLights), v.push(C.numDirLightShadows), v.push(C.numPointLightShadows), v.push(C.numSpotLightShadows), v.push(C.numSpotLightShadowsWithMaps), v.push(C.shadowMapType), v.push(C.toneMapping), v.push(C.numClippingPlanes), v.push(C.numClipIntersection), v.push(C.depthPacking);
	}
	function T(v, C) {
		a.disableAll(),
			C.isWebGL2 && a.enable(0),
			C.supportsVertexTextures && a.enable(1),
			C.instancing && a.enable(2),
			C.instancingColor && a.enable(3),
			C.map && a.enable(4),
			C.matcap && a.enable(5),
			C.envMap && a.enable(6),
			C.lightMap && a.enable(7),
			C.aoMap && a.enable(8),
			C.emissiveMap && a.enable(9),
			C.bumpMap && a.enable(10),
			C.normalMap && a.enable(11),
			C.objectSpaceNormalMap && a.enable(12),
			C.tangentSpaceNormalMap && a.enable(13),
			C.clearcoat && a.enable(14),
			C.clearcoatMap && a.enable(15),
			C.clearcoatRoughnessMap && a.enable(16),
			C.clearcoatNormalMap && a.enable(17),
			C.iridescence && a.enable(18),
			C.iridescenceMap && a.enable(19),
			C.iridescenceThicknessMap && a.enable(20),
			C.displacementMap && a.enable(21),
			C.specularMap && a.enable(22),
			C.roughnessMap && a.enable(23),
			C.metalnessMap && a.enable(24),
			C.gradientMap && a.enable(25),
			C.alphaMap && a.enable(26),
			C.alphaTest && a.enable(27),
			C.vertexColors && a.enable(28),
			C.vertexAlphas && a.enable(29),
			C.vertexUvs && a.enable(30),
			C.vertexTangents && a.enable(31),
			C.uvsVertexOnly && a.enable(32),
			v.push(a.mask),
			a.disableAll(),
			C.fog && a.enable(0),
			C.useFog && a.enable(1),
			C.flatShading && a.enable(2),
			C.logarithmicDepthBuffer && a.enable(3),
			C.skinning && a.enable(4),
			C.morphTargets && a.enable(5),
			C.morphNormals && a.enable(6),
			C.morphColors && a.enable(7),
			C.premultipliedAlpha && a.enable(8),
			C.shadowMapEnabled && a.enable(9),
			C.physicallyCorrectLights && a.enable(10),
			C.doubleSided && a.enable(11),
			C.flipSided && a.enable(12),
			C.useDepthPacking && a.enable(13),
			C.dithering && a.enable(14),
			C.specularIntensityMap && a.enable(15),
			C.specularColorMap && a.enable(16),
			C.transmission && a.enable(17),
			C.transmissionMap && a.enable(18),
			C.thicknessMap && a.enable(19),
			C.sheen && a.enable(20),
			C.sheenColorMap && a.enable(21),
			C.sheenRoughnessMap && a.enable(22),
			C.decodeVideoTexture && a.enable(23),
			C.opaque && a.enable(24),
			v.push(a.mask);
	}
	function x(v) {
		const C = g[v.type];
		let P;
		if (C) {
			const z = ShaderLib[C];
			P = UniformsUtils.clone(z.uniforms);
		} else P = v.uniforms;
		return P;
	}
	function S(v, C) {
		let P;
		for (let z = 0, Y = l.length; z < Y; z++) {
			const D = l[z];
			if (D.cacheKey === C) {
				(P = D), ++P.usedTimes;
				break;
			}
		}
		return P === void 0 && ((P = new WebGLProgram(s, C, v, r)), l.push(P)), P;
	}
	function b(v) {
		if (--v.usedTimes === 0) {
			const C = l.indexOf(v);
			(l[C] = l[l.length - 1]), l.pop(), v.destroy();
		}
	}
	function E(v) {
		c.remove(v);
	}
	function A() {
		c.dispose();
	}
	return { getParameters: p, getProgramCacheKey: f, getUniforms: x, acquireProgram: S, releaseProgram: b, releaseShaderCache: E, programs: l, dispose: A };
}
function WebGLProperties() {
	let s = new WeakMap();
	function e(r) {
		let o = s.get(r);
		return o === void 0 && ((o = {}), s.set(r, o)), o;
	}
	function t(r) {
		s.delete(r);
	}
	function i(r, o, a) {
		s.get(r)[o] = a;
	}
	function n() {
		s = new WeakMap();
	}
	return { get: e, remove: t, update: i, dispose: n };
}
function painterSortStable(s, e) {
	return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function reversePainterSortStable(s, e) {
	return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function WebGLRenderList() {
	const s = [];
	let e = 0;
	const t = [],
		i = [],
		n = [];
	function r() {
		(e = 0), (t.length = 0), (i.length = 0), (n.length = 0);
	}
	function o(h, d, m, g, p, f) {
		let _ = s[e];
		return _ === void 0 ? ((_ = { id: h.id, object: h, geometry: d, material: m, groupOrder: g, renderOrder: h.renderOrder, z: p, group: f }), (s[e] = _)) : ((_.id = h.id), (_.object = h), (_.geometry = d), (_.material = m), (_.groupOrder = g), (_.renderOrder = h.renderOrder), (_.z = p), (_.group = f)), e++, _;
	}
	function a(h, d, m, g, p, f) {
		const _ = o(h, d, m, g, p, f);
		m.transmission > 0 ? i.push(_) : m.transparent === !0 ? n.push(_) : t.push(_);
	}
	function c(h, d, m, g, p, f) {
		const _ = o(h, d, m, g, p, f);
		m.transmission > 0 ? i.unshift(_) : m.transparent === !0 ? n.unshift(_) : t.unshift(_);
	}
	function l(h, d) {
		t.length > 1 && t.sort(h || painterSortStable), i.length > 1 && i.sort(d || reversePainterSortStable), n.length > 1 && n.sort(d || reversePainterSortStable);
	}
	function u() {
		for (let h = e, d = s.length; h < d; h++) {
			const m = s[h];
			if (m.id === null) break;
			(m.id = null), (m.object = null), (m.geometry = null), (m.material = null), (m.group = null);
		}
	}
	return { opaque: t, transmissive: i, transparent: n, init: r, push: a, unshift: c, finish: u, sort: l };
}
function WebGLRenderLists() {
	let s = new WeakMap();
	function e(i, n) {
		const r = s.get(i);
		let o;
		return r === void 0 ? ((o = new WebGLRenderList()), s.set(i, [o])) : n >= r.length ? ((o = new WebGLRenderList()), r.push(o)) : (o = r[n]), o;
	}
	function t() {
		s = new WeakMap();
	}
	return { get: e, dispose: t };
}
function UniformsCache() {
	const s = {};
	return {
		get: function (e) {
			if (s[e.id] !== void 0) return s[e.id];
			let t;
			switch (e.type) {
				case 'DirectionalLight':
					t = { direction: new Vector3(), color: new Color() };
					break;
				case 'SpotLight':
					t = { position: new Vector3(), direction: new Vector3(), color: new Color(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
					break;
				case 'PointLight':
					t = { position: new Vector3(), color: new Color(), distance: 0, decay: 0 };
					break;
				case 'HemisphereLight':
					t = { direction: new Vector3(), skyColor: new Color(), groundColor: new Color() };
					break;
				case 'RectAreaLight':
					t = { color: new Color(), position: new Vector3(), halfWidth: new Vector3(), halfHeight: new Vector3() };
					break;
			}
			return (s[e.id] = t), t;
		},
	};
}
function ShadowUniformsCache() {
	const s = {};
	return {
		get: function (e) {
			if (s[e.id] !== void 0) return s[e.id];
			let t;
			switch (e.type) {
				case 'DirectionalLight':
					t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Vector2() };
					break;
				case 'SpotLight':
					t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Vector2() };
					break;
				case 'PointLight':
					t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Vector2(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
					break;
			}
			return (s[e.id] = t), t;
		},
	};
}
let nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(s, e) {
	return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function WebGLLights(s, e) {
	const t = new UniformsCache(),
		i = ShadowUniformsCache(),
		n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 };
	for (let u = 0; u < 9; u++) n.probe.push(new Vector3());
	const r = new Vector3(),
		o = new Matrix4(),
		a = new Matrix4();
	function c(u, h) {
		let d = 0,
			m = 0,
			g = 0;
		for (let z = 0; z < 9; z++) n.probe[z].set(0, 0, 0);
		let p = 0,
			f = 0,
			_ = 0,
			T = 0,
			x = 0,
			S = 0,
			b = 0,
			E = 0,
			A = 0,
			v = 0;
		u.sort(shadowCastingAndTexturingLightsFirst);
		const C = h !== !0 ? Math.PI : 1;
		for (let z = 0, Y = u.length; z < Y; z++) {
			const D = u[z],
				I = D.color,
				N = D.intensity,
				j = D.distance,
				K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
			if (D.isAmbientLight) (d += I.r * N * C), (m += I.g * N * C), (g += I.b * N * C);
			else if (D.isLightProbe) for (let q = 0; q < 9; q++) n.probe[q].addScaledVector(D.sh.coefficients[q], N);
			else if (D.isDirectionalLight) {
				const q = t.get(D);
				if ((q.color.copy(D.color).multiplyScalar(D.intensity * C), D.castShadow)) {
					const ie = D.shadow,
						ee = i.get(D);
					(ee.shadowBias = ie.bias), (ee.shadowNormalBias = ie.normalBias), (ee.shadowRadius = ie.radius), (ee.shadowMapSize = ie.mapSize), (n.directionalShadow[p] = ee), (n.directionalShadowMap[p] = K), (n.directionalShadowMatrix[p] = D.shadow.matrix), S++;
				}
				(n.directional[p] = q), p++;
			} else if (D.isSpotLight) {
				const q = t.get(D);
				q.position.setFromMatrixPosition(D.matrixWorld), q.color.copy(I).multiplyScalar(N * C), (q.distance = j), (q.coneCos = Math.cos(D.angle)), (q.penumbraCos = Math.cos(D.angle * (1 - D.penumbra))), (q.decay = D.decay), (n.spot[_] = q);
				const ie = D.shadow;
				if ((D.map && ((n.spotLightMap[A] = D.map), A++, ie.updateMatrices(D), D.castShadow && v++), (n.spotLightMatrix[_] = ie.matrix), D.castShadow)) {
					const ee = i.get(D);
					(ee.shadowBias = ie.bias), (ee.shadowNormalBias = ie.normalBias), (ee.shadowRadius = ie.radius), (ee.shadowMapSize = ie.mapSize), (n.spotShadow[_] = ee), (n.spotShadowMap[_] = K), E++;
				}
				_++;
			} else if (D.isRectAreaLight) {
				const q = t.get(D);
				q.color.copy(I).multiplyScalar(N), q.halfWidth.set(D.width * 0.5, 0, 0), q.halfHeight.set(0, D.height * 0.5, 0), (n.rectArea[T] = q), T++;
			} else if (D.isPointLight) {
				const q = t.get(D);
				if ((q.color.copy(D.color).multiplyScalar(D.intensity * C), (q.distance = D.distance), (q.decay = D.decay), D.castShadow)) {
					const ie = D.shadow,
						ee = i.get(D);
					(ee.shadowBias = ie.bias), (ee.shadowNormalBias = ie.normalBias), (ee.shadowRadius = ie.radius), (ee.shadowMapSize = ie.mapSize), (ee.shadowCameraNear = ie.camera.near), (ee.shadowCameraFar = ie.camera.far), (n.pointShadow[f] = ee), (n.pointShadowMap[f] = K), (n.pointShadowMatrix[f] = D.shadow.matrix), b++;
				}
				(n.point[f] = q), f++;
			} else if (D.isHemisphereLight) {
				const q = t.get(D);
				q.skyColor.copy(D.color).multiplyScalar(N * C), q.groundColor.copy(D.groundColor).multiplyScalar(N * C), (n.hemi[x] = q), x++;
			}
		}
		T > 0 && (e.isWebGL2 || s.has('OES_texture_float_linear') === !0 ? ((n.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1), (n.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2)) : s.has('OES_texture_half_float_linear') === !0 ? ((n.rectAreaLTC1 = UniformsLib.LTC_HALF_1), (n.rectAreaLTC2 = UniformsLib.LTC_HALF_2)) : console.error('THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.')), (n.ambient[0] = d), (n.ambient[1] = m), (n.ambient[2] = g);
		const P = n.hash;
		(P.directionalLength !== p || P.pointLength !== f || P.spotLength !== _ || P.rectAreaLength !== T || P.hemiLength !== x || P.numDirectionalShadows !== S || P.numPointShadows !== b || P.numSpotShadows !== E || P.numSpotMaps !== A) && ((n.directional.length = p), (n.spot.length = _), (n.rectArea.length = T), (n.point.length = f), (n.hemi.length = x), (n.directionalShadow.length = S), (n.directionalShadowMap.length = S), (n.pointShadow.length = b), (n.pointShadowMap.length = b), (n.spotShadow.length = E), (n.spotShadowMap.length = E), (n.directionalShadowMatrix.length = S), (n.pointShadowMatrix.length = b), (n.spotLightMatrix.length = E + A - v), (n.spotLightMap.length = A), (n.numSpotLightShadowsWithMaps = v), (P.directionalLength = p), (P.pointLength = f), (P.spotLength = _), (P.rectAreaLength = T), (P.hemiLength = x), (P.numDirectionalShadows = S), (P.numPointShadows = b), (P.numSpotShadows = E), (P.numSpotMaps = A), (n.version = nextVersion++));
	}
	function l(u, h) {
		let d = 0,
			m = 0,
			g = 0,
			p = 0,
			f = 0;
		const _ = h.matrixWorldInverse;
		for (let T = 0, x = u.length; T < x; T++) {
			const S = u[T];
			if (S.isDirectionalLight) {
				const b = n.directional[d];
				b.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), d++;
			} else if (S.isSpotLight) {
				const b = n.spot[g];
				b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), b.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), g++;
			} else if (S.isRectAreaLight) {
				const b = n.rectArea[p];
				b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), a.identity(), o.copy(S.matrixWorld), o.premultiply(_), a.extractRotation(o), b.halfWidth.set(S.width * 0.5, 0, 0), b.halfHeight.set(0, S.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), p++;
			} else if (S.isPointLight) {
				const b = n.point[m];
				b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), m++;
			} else if (S.isHemisphereLight) {
				const b = n.hemi[f];
				b.direction.setFromMatrixPosition(S.matrixWorld), b.direction.transformDirection(_), f++;
			}
		}
	}
	return { setup: c, setupView: l, state: n };
}
function WebGLRenderState(s, e) {
	const t = new WebGLLights(s, e),
		i = [],
		n = [];
	function r() {
		(i.length = 0), (n.length = 0);
	}
	function o(h) {
		i.push(h);
	}
	function a(h) {
		n.push(h);
	}
	function c(h) {
		t.setup(i, h);
	}
	function l(h) {
		t.setupView(i, h);
	}
	return { init: r, state: { lightsArray: i, shadowsArray: n, lights: t }, setupLights: c, setupLightsView: l, pushLight: o, pushShadow: a };
}
function WebGLRenderStates(s, e) {
	let t = new WeakMap();
	function i(r, o = 0) {
		const a = t.get(r);
		let c;
		return a === void 0 ? ((c = new WebGLRenderState(s, e)), t.set(r, [c])) : o >= a.length ? ((c = new WebGLRenderState(s, e)), a.push(c)) : (c = a[o]), c;
	}
	function n() {
		t = new WeakMap();
	}
	return { get: i, dispose: n };
}
class MeshDepthMaterial extends Material {
	constructor(e) {
		super(), (this.isMeshDepthMaterial = !0), (this.type = 'MeshDepthMaterial'), (this.depthPacking = BasicDepthPacking), (this.map = null), (this.alphaMap = null), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), (this.wireframe = !1), (this.wireframeLinewidth = 1), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), (this.depthPacking = e.depthPacking), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), this;
	}
}
class MeshDistanceMaterial extends Material {
	constructor(e) {
		super(), (this.isMeshDistanceMaterial = !0), (this.type = 'MeshDistanceMaterial'), (this.referencePosition = new Vector3()), (this.nearDistance = 1), (this.farDistance = 1e3), (this.map = null), (this.alphaMap = null), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.referencePosition.copy(e.referencePosition), (this.nearDistance = e.nearDistance), (this.farDistance = e.farDistance), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), this;
	}
}
const vertex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
	fragment = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function WebGLShadowMap(s, e, t) {
	let i = new Frustum();
	const n = new Vector2(),
		r = new Vector2(),
		o = new Vector4(),
		a = new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
		c = new MeshDistanceMaterial(),
		l = {},
		u = t.maxTextureSize,
		h = { 0: BackSide, 1: FrontSide, 2: DoubleSide },
		d = new ShaderMaterial({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Vector2() }, radius: { value: 4 } }, vertexShader: vertex, fragmentShader: fragment }),
		m = d.clone();
	m.defines.HORIZONTAL_PASS = 1;
	const g = new BufferGeometry();
	g.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
	const p = new Mesh(g, d),
		f = this;
	(this.enabled = !1),
		(this.autoUpdate = !0),
		(this.needsUpdate = !1),
		(this.type = PCFShadowMap),
		(this.render = function (S, b, E) {
			if (f.enabled === !1 || (f.autoUpdate === !1 && f.needsUpdate === !1) || S.length === 0) return;
			const A = s.getRenderTarget(),
				v = s.getActiveCubeFace(),
				C = s.getActiveMipmapLevel(),
				P = s.state;
			P.setBlending(NoBlending), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
			for (let z = 0, Y = S.length; z < Y; z++) {
				const D = S[z],
					I = D.shadow;
				if (I === void 0) {
					console.warn('THREE.WebGLShadowMap:', D, 'has no shadow.');
					continue;
				}
				if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
				n.copy(I.mapSize);
				const N = I.getFrameExtents();
				if ((n.multiply(N), r.copy(I.mapSize), (n.x > u || n.y > u) && (n.x > u && ((r.x = Math.floor(u / N.x)), (n.x = r.x * N.x), (I.mapSize.x = r.x)), n.y > u && ((r.y = Math.floor(u / N.y)), (n.y = r.y * N.y), (I.mapSize.y = r.y))), I.map === null)) {
					const K = this.type !== VSMShadowMap ? { minFilter: NearestFilter, magFilter: NearestFilter } : {};
					(I.map = new WebGLRenderTarget(n.x, n.y, K)), (I.map.texture.name = D.name + '.shadowMap'), I.camera.updateProjectionMatrix();
				}
				s.setRenderTarget(I.map), s.clear();
				const j = I.getViewportCount();
				for (let K = 0; K < j; K++) {
					const q = I.getViewport(K);
					o.set(r.x * q.x, r.y * q.y, r.x * q.z, r.y * q.w), P.viewport(o), I.updateMatrices(D, K), (i = I.getFrustum()), x(b, E, I.camera, D, this.type);
				}
				I.isPointLightShadow !== !0 && this.type === VSMShadowMap && _(I, E), (I.needsUpdate = !1);
			}
			(f.needsUpdate = !1), s.setRenderTarget(A, v, C);
		});
	function _(S, b) {
		const E = e.update(p);
		d.defines.VSM_SAMPLES !== S.blurSamples && ((d.defines.VSM_SAMPLES = S.blurSamples), (m.defines.VSM_SAMPLES = S.blurSamples), (d.needsUpdate = !0), (m.needsUpdate = !0)), S.mapPass === null && (S.mapPass = new WebGLRenderTarget(n.x, n.y)), (d.uniforms.shadow_pass.value = S.map.texture), (d.uniforms.resolution.value = S.mapSize), (d.uniforms.radius.value = S.radius), s.setRenderTarget(S.mapPass), s.clear(), s.renderBufferDirect(b, null, E, d, p, null), (m.uniforms.shadow_pass.value = S.mapPass.texture), (m.uniforms.resolution.value = S.mapSize), (m.uniforms.radius.value = S.radius), s.setRenderTarget(S.map), s.clear(), s.renderBufferDirect(b, null, E, m, p, null);
	}
	function T(S, b, E, A, v, C) {
		let P = null;
		const z = E.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
		if (z !== void 0) P = z;
		else if (((P = E.isPointLight === !0 ? c : a), (s.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0) || (b.displacementMap && b.displacementScale !== 0) || (b.alphaMap && b.alphaTest > 0) || (b.map && b.alphaTest > 0))) {
			const Y = P.uuid,
				D = b.uuid;
			let I = l[Y];
			I === void 0 && ((I = {}), (l[Y] = I));
			let N = I[D];
			N === void 0 && ((N = P.clone()), (I[D] = N)), (P = N);
		}
		return (P.visible = b.visible), (P.wireframe = b.wireframe), C === VSMShadowMap ? (P.side = b.shadowSide !== null ? b.shadowSide : b.side) : (P.side = b.shadowSide !== null ? b.shadowSide : h[b.side]), (P.alphaMap = b.alphaMap), (P.alphaTest = b.alphaTest), (P.map = b.map), (P.clipShadows = b.clipShadows), (P.clippingPlanes = b.clippingPlanes), (P.clipIntersection = b.clipIntersection), (P.displacementMap = b.displacementMap), (P.displacementScale = b.displacementScale), (P.displacementBias = b.displacementBias), (P.wireframeLinewidth = b.wireframeLinewidth), (P.linewidth = b.linewidth), E.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(E.matrixWorld), (P.nearDistance = A), (P.farDistance = v)), P;
	}
	function x(S, b, E, A, v) {
		if (S.visible === !1) return;
		if (S.layers.test(b.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || (S.receiveShadow && v === VSMShadowMap)) && (!S.frustumCulled || i.intersectsObject(S))) {
			S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, S.matrixWorld);
			const z = e.update(S),
				Y = S.material;
			if (Array.isArray(Y)) {
				const D = z.groups;
				for (let I = 0, N = D.length; I < N; I++) {
					const j = D[I],
						K = Y[j.materialIndex];
					if (K && K.visible) {
						const q = T(S, K, A, E.near, E.far, v);
						s.renderBufferDirect(E, null, z, q, S, j);
					}
				}
			} else if (Y.visible) {
				const D = T(S, Y, A, E.near, E.far, v);
				s.renderBufferDirect(E, null, z, D, S, null);
			}
		}
		const P = S.children;
		for (let z = 0, Y = P.length; z < Y; z++) x(P[z], b, E, A, v);
	}
}
function WebGLState(s, e, t) {
	const i = t.isWebGL2;
	function n() {
		let R = !1;
		const V = new Vector4();
		let J = null;
		const ae = new Vector4(0, 0, 0, 0);
		return {
			setMask: function (fe) {
				J !== fe && !R && (s.colorMask(fe, fe, fe, fe), (J = fe));
			},
			setLocked: function (fe) {
				R = fe;
			},
			setClear: function (fe, De, Ve, He, Qe) {
				Qe === !0 && ((fe *= He), (De *= He), (Ve *= He)), V.set(fe, De, Ve, He), ae.equals(V) === !1 && (s.clearColor(fe, De, Ve, He), ae.copy(V));
			},
			reset: function () {
				(R = !1), (J = null), ae.set(-1, 0, 0, 0);
			},
		};
	}
	function r() {
		let R = !1,
			V = null,
			J = null,
			ae = null;
		return {
			setTest: function (fe) {
				fe ? Te(2929) : ue(2929);
			},
			setMask: function (fe) {
				V !== fe && !R && (s.depthMask(fe), (V = fe));
			},
			setFunc: function (fe) {
				if (J !== fe) {
					switch (fe) {
						case NeverDepth:
							s.depthFunc(512);
							break;
						case AlwaysDepth:
							s.depthFunc(519);
							break;
						case LessDepth:
							s.depthFunc(513);
							break;
						case LessEqualDepth:
							s.depthFunc(515);
							break;
						case EqualDepth:
							s.depthFunc(514);
							break;
						case GreaterEqualDepth:
							s.depthFunc(518);
							break;
						case GreaterDepth:
							s.depthFunc(516);
							break;
						case NotEqualDepth:
							s.depthFunc(517);
							break;
						default:
							s.depthFunc(515);
					}
					J = fe;
				}
			},
			setLocked: function (fe) {
				R = fe;
			},
			setClear: function (fe) {
				ae !== fe && (s.clearDepth(fe), (ae = fe));
			},
			reset: function () {
				(R = !1), (V = null), (J = null), (ae = null);
			},
		};
	}
	function o() {
		let R = !1,
			V = null,
			J = null,
			ae = null,
			fe = null,
			De = null,
			Ve = null,
			He = null,
			Qe = null;
		return {
			setTest: function (Ie) {
				R || (Ie ? Te(2960) : ue(2960));
			},
			setMask: function (Ie) {
				V !== Ie && !R && (s.stencilMask(Ie), (V = Ie));
			},
			setFunc: function (Ie, Ze, Ke) {
				(J !== Ie || ae !== Ze || fe !== Ke) && (s.stencilFunc(Ie, Ze, Ke), (J = Ie), (ae = Ze), (fe = Ke));
			},
			setOp: function (Ie, Ze, Ke) {
				(De !== Ie || Ve !== Ze || He !== Ke) && (s.stencilOp(Ie, Ze, Ke), (De = Ie), (Ve = Ze), (He = Ke));
			},
			setLocked: function (Ie) {
				R = Ie;
			},
			setClear: function (Ie) {
				Qe !== Ie && (s.clearStencil(Ie), (Qe = Ie));
			},
			reset: function () {
				(R = !1), (V = null), (J = null), (ae = null), (fe = null), (De = null), (Ve = null), (He = null), (Qe = null);
			},
		};
	}
	const a = new n(),
		c = new r(),
		l = new o(),
		u = new WeakMap(),
		h = new WeakMap();
	let d = {},
		m = {},
		g = new WeakMap(),
		p = [],
		f = null,
		_ = !1,
		T = null,
		x = null,
		S = null,
		b = null,
		E = null,
		A = null,
		v = null,
		C = !1,
		P = null,
		z = null,
		Y = null,
		D = null,
		I = null;
	const N = s.getParameter(35661);
	let j = !1,
		K = 0;
	const q = s.getParameter(7938);
	q.indexOf('WebGL') !== -1 ? ((K = parseFloat(/^WebGL (\d)/.exec(q)[1])), (j = K >= 1)) : q.indexOf('OpenGL ES') !== -1 && ((K = parseFloat(/^OpenGL ES (\d)/.exec(q)[1])), (j = K >= 2));
	let ie = null,
		ee = {};
	const B = s.getParameter(3088),
		H = s.getParameter(2978),
		Z = new Vector4().fromArray(B),
		te = new Vector4().fromArray(H);
	function re(R, V, J) {
		const ae = new Uint8Array(4),
			fe = s.createTexture();
		s.bindTexture(R, fe), s.texParameteri(R, 10241, 9728), s.texParameteri(R, 10240, 9728);
		for (let De = 0; De < J; De++) s.texImage2D(V + De, 0, 6408, 1, 1, 0, 6408, 5121, ae);
		return fe;
	}
	const $ = {};
	($[3553] = re(3553, 3553, 1)), ($[34067] = re(34067, 34069, 6)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Te(2929), c.setFunc(LessEqualDepth), ke(!1), $e(CullFaceBack), Te(2884), ze(NoBlending);
	function Te(R) {
		d[R] !== !0 && (s.enable(R), (d[R] = !0));
	}
	function ue(R) {
		d[R] !== !1 && (s.disable(R), (d[R] = !1));
	}
	function ve(R, V) {
		return m[R] !== V ? (s.bindFramebuffer(R, V), (m[R] = V), i && (R === 36009 && (m[36160] = V), R === 36160 && (m[36009] = V)), !0) : !1;
	}
	function ce(R, V) {
		let J = p,
			ae = !1;
		if (R)
			if (((J = g.get(V)), J === void 0 && ((J = []), g.set(V, J)), R.isWebGLMultipleRenderTargets)) {
				const fe = R.texture;
				if (J.length !== fe.length || J[0] !== 36064) {
					for (let De = 0, Ve = fe.length; De < Ve; De++) J[De] = 36064 + De;
					(J.length = fe.length), (ae = !0);
				}
			} else J[0] !== 36064 && ((J[0] = 36064), (ae = !0));
		else J[0] !== 1029 && ((J[0] = 1029), (ae = !0));
		ae && (t.isWebGL2 ? s.drawBuffers(J) : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(J));
	}
	function Pe(R) {
		return f !== R ? (s.useProgram(R), (f = R), !0) : !1;
	}
	const ye = { [AddEquation]: 32774, [SubtractEquation]: 32778, [ReverseSubtractEquation]: 32779 };
	if (i) (ye[MinEquation] = 32775), (ye[MaxEquation] = 32776);
	else {
		const R = e.get('EXT_blend_minmax');
		R !== null && ((ye[MinEquation] = R.MIN_EXT), (ye[MaxEquation] = R.MAX_EXT));
	}
	const ge = { [ZeroFactor]: 0, [OneFactor]: 1, [SrcColorFactor]: 768, [SrcAlphaFactor]: 770, [SrcAlphaSaturateFactor]: 776, [DstColorFactor]: 774, [DstAlphaFactor]: 772, [OneMinusSrcColorFactor]: 769, [OneMinusSrcAlphaFactor]: 771, [OneMinusDstColorFactor]: 775, [OneMinusDstAlphaFactor]: 773 };
	function ze(R, V, J, ae, fe, De, Ve, He) {
		if (R === NoBlending) {
			_ === !0 && (ue(3042), (_ = !1));
			return;
		}
		if ((_ === !1 && (Te(3042), (_ = !0)), R !== CustomBlending)) {
			if (R !== T || He !== C) {
				if (((x !== AddEquation || E !== AddEquation) && (s.blendEquation(32774), (x = AddEquation), (E = AddEquation)), He))
					switch (R) {
						case NormalBlending:
							s.blendFuncSeparate(1, 771, 1, 771);
							break;
						case AdditiveBlending:
							s.blendFunc(1, 1);
							break;
						case SubtractiveBlending:
							s.blendFuncSeparate(0, 769, 0, 1);
							break;
						case MultiplyBlending:
							s.blendFuncSeparate(0, 768, 0, 770);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', R);
							break;
					}
				else
					switch (R) {
						case NormalBlending:
							s.blendFuncSeparate(770, 771, 1, 771);
							break;
						case AdditiveBlending:
							s.blendFunc(770, 1);
							break;
						case SubtractiveBlending:
							s.blendFuncSeparate(0, 769, 0, 1);
							break;
						case MultiplyBlending:
							s.blendFunc(0, 768);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', R);
							break;
					}
				(S = null), (b = null), (A = null), (v = null), (T = R), (C = He);
			}
			return;
		}
		(fe = fe || V), (De = De || J), (Ve = Ve || ae), (V !== x || fe !== E) && (s.blendEquationSeparate(ye[V], ye[fe]), (x = V), (E = fe)), (J !== S || ae !== b || De !== A || Ve !== v) && (s.blendFuncSeparate(ge[J], ge[ae], ge[De], ge[Ve]), (S = J), (b = ae), (A = De), (v = Ve)), (T = R), (C = !1);
	}
	function Be(R, V) {
		R.side === DoubleSide ? ue(2884) : Te(2884);
		let J = R.side === BackSide;
		V && (J = !J), ke(J), R.blending === NormalBlending && R.transparent === !1 ? ze(NoBlending) : ze(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.premultipliedAlpha), c.setFunc(R.depthFunc), c.setTest(R.depthTest), c.setMask(R.depthWrite), a.setMask(R.colorWrite);
		const ae = R.stencilWrite;
		l.setTest(ae), ae && (l.setMask(R.stencilWriteMask), l.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), l.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), Re(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? Te(32926) : ue(32926);
	}
	function ke(R) {
		P !== R && (R ? s.frontFace(2304) : s.frontFace(2305), (P = R));
	}
	function $e(R) {
		R !== CullFaceNone ? (Te(2884), R !== z && (R === CullFaceBack ? s.cullFace(1029) : R === CullFaceFront ? s.cullFace(1028) : s.cullFace(1032))) : ue(2884), (z = R);
	}
	function Fe(R) {
		R !== Y && (j && s.lineWidth(R), (Y = R));
	}
	function Re(R, V, J) {
		R ? (Te(32823), (D !== V || I !== J) && (s.polygonOffset(V, J), (D = V), (I = J))) : ue(32823);
	}
	function je(R) {
		R ? Te(3089) : ue(3089);
	}
	function Xe(R) {
		R === void 0 && (R = 33984 + N - 1), ie !== R && (s.activeTexture(R), (ie = R));
	}
	function w(R, V, J) {
		J === void 0 && (ie === null ? (J = 33984 + N - 1) : (J = ie));
		let ae = ee[J];
		ae === void 0 && ((ae = { type: void 0, texture: void 0 }), (ee[J] = ae)), (ae.type !== R || ae.texture !== V) && (ie !== J && (s.activeTexture(J), (ie = J)), s.bindTexture(R, V || $[R]), (ae.type = R), (ae.texture = V));
	}
	function y() {
		const R = ee[ie];
		R !== void 0 && R.type !== void 0 && (s.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
	}
	function k() {
		try {
			s.compressedTexImage2D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function Q() {
		try {
			s.compressedTexImage3D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function ne() {
		try {
			s.texSubImage2D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function se() {
		try {
			s.texSubImage3D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function L() {
		try {
			s.compressedTexSubImage2D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function W() {
		try {
			s.compressedTexSubImage3D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function U() {
		try {
			s.texStorage2D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function oe() {
		try {
			s.texStorage3D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function he() {
		try {
			s.texImage2D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function le() {
		try {
			s.texImage3D.apply(s, arguments);
		} catch (R) {
			console.error('THREE.WebGLState:', R);
		}
	}
	function pe(R) {
		Z.equals(R) === !1 && (s.scissor(R.x, R.y, R.z, R.w), Z.copy(R));
	}
	function de(R) {
		te.equals(R) === !1 && (s.viewport(R.x, R.y, R.z, R.w), te.copy(R));
	}
	function Se(R, V) {
		let J = h.get(V);
		J === void 0 && ((J = new WeakMap()), h.set(V, J));
		let ae = J.get(R);
		ae === void 0 && ((ae = s.getUniformBlockIndex(V, R.name)), J.set(R, ae));
	}
	function we(R, V) {
		const ae = h.get(V).get(R);
		u.get(V) !== ae && (s.uniformBlockBinding(V, ae, R.__bindingPointIndex), u.set(V, ae));
	}
	function Oe() {
		s.disable(3042),
			s.disable(2884),
			s.disable(2929),
			s.disable(32823),
			s.disable(3089),
			s.disable(2960),
			s.disable(32926),
			s.blendEquation(32774),
			s.blendFunc(1, 0),
			s.blendFuncSeparate(1, 0, 1, 0),
			s.colorMask(!0, !0, !0, !0),
			s.clearColor(0, 0, 0, 0),
			s.depthMask(!0),
			s.depthFunc(513),
			s.clearDepth(1),
			s.stencilMask(4294967295),
			s.stencilFunc(519, 0, 4294967295),
			s.stencilOp(7680, 7680, 7680),
			s.clearStencil(0),
			s.cullFace(1029),
			s.frontFace(2305),
			s.polygonOffset(0, 0),
			s.activeTexture(33984),
			s.bindFramebuffer(36160, null),
			i === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
			s.useProgram(null),
			s.lineWidth(1),
			s.scissor(0, 0, s.canvas.width, s.canvas.height),
			s.viewport(0, 0, s.canvas.width, s.canvas.height),
			(d = {}),
			(ie = null),
			(ee = {}),
			(m = {}),
			(g = new WeakMap()),
			(p = []),
			(f = null),
			(_ = !1),
			(T = null),
			(x = null),
			(S = null),
			(b = null),
			(E = null),
			(A = null),
			(v = null),
			(C = !1),
			(P = null),
			(z = null),
			(Y = null),
			(D = null),
			(I = null),
			Z.set(0, 0, s.canvas.width, s.canvas.height),
			te.set(0, 0, s.canvas.width, s.canvas.height),
			a.reset(),
			c.reset(),
			l.reset();
	}
	return { buffers: { color: a, depth: c, stencil: l }, enable: Te, disable: ue, bindFramebuffer: ve, drawBuffers: ce, useProgram: Pe, setBlending: ze, setMaterial: Be, setFlipSided: ke, setCullFace: $e, setLineWidth: Fe, setPolygonOffset: Re, setScissorTest: je, activeTexture: Xe, bindTexture: w, unbindTexture: y, compressedTexImage2D: k, compressedTexImage3D: Q, texImage2D: he, texImage3D: le, updateUBOMapping: Se, uniformBlockBinding: we, texStorage2D: U, texStorage3D: oe, texSubImage2D: ne, texSubImage3D: se, compressedTexSubImage2D: L, compressedTexSubImage3D: W, scissor: pe, viewport: de, reset: Oe };
}
function WebGLTextures(s, e, t, i, n, r, o) {
	const a = n.isWebGL2,
		c = n.maxTextures,
		l = n.maxCubemapSize,
		u = n.maxTextureSize,
		h = n.maxSamples,
		d = e.has('WEBGL_multisampled_render_to_texture') ? e.get('WEBGL_multisampled_render_to_texture') : null,
		m = typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
		g = new WeakMap();
	let p;
	const f = new WeakMap();
	let _ = !1;
	try {
		_ = typeof OffscreenCanvas < 'u' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
	} catch {}
	function T(w, y) {
		return _ ? new OffscreenCanvas(w, y) : createElementNS('canvas');
	}
	function x(w, y, k, Q) {
		let ne = 1;
		if (((w.width > Q || w.height > Q) && (ne = Q / Math.max(w.width, w.height)), ne < 1 || y === !0))
			if ((typeof HTMLImageElement < 'u' && w instanceof HTMLImageElement) || (typeof HTMLCanvasElement < 'u' && w instanceof HTMLCanvasElement) || (typeof ImageBitmap < 'u' && w instanceof ImageBitmap)) {
				const se = y ? floorPowerOfTwo : Math.floor,
					L = se(ne * w.width),
					W = se(ne * w.height);
				p === void 0 && (p = T(L, W));
				const U = k ? T(L, W) : p;
				return (U.width = L), (U.height = W), U.getContext('2d').drawImage(w, 0, 0, L, W), console.warn('THREE.WebGLRenderer: Texture has been resized from (' + w.width + 'x' + w.height + ') to (' + L + 'x' + W + ').'), U;
			} else return 'data' in w && console.warn('THREE.WebGLRenderer: Image in DataTexture is too big (' + w.width + 'x' + w.height + ').'), w;
		return w;
	}
	function S(w) {
		return isPowerOfTwo(w.width) && isPowerOfTwo(w.height);
	}
	function b(w) {
		return a ? !1 : w.wrapS !== ClampToEdgeWrapping || w.wrapT !== ClampToEdgeWrapping || (w.minFilter !== NearestFilter && w.minFilter !== LinearFilter);
	}
	function E(w, y) {
		return w.generateMipmaps && y && w.minFilter !== NearestFilter && w.minFilter !== LinearFilter;
	}
	function A(w) {
		s.generateMipmap(w);
	}
	function v(w, y, k, Q, ne = !1) {
		if (a === !1) return y;
		if (w !== null) {
			if (s[w] !== void 0) return s[w];
			console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
		}
		let se = y;
		return y === 6403 && (k === 5126 && (se = 33326), k === 5131 && (se = 33325), k === 5121 && (se = 33321)), y === 33319 && (k === 5126 && (se = 33328), k === 5131 && (se = 33327), k === 5121 && (se = 33323)), y === 6408 && (k === 5126 && (se = 34836), k === 5131 && (se = 34842), k === 5121 && (se = Q === sRGBEncoding && ne === !1 ? 35907 : 32856), k === 32819 && (se = 32854), k === 32820 && (se = 32855)), (se === 33325 || se === 33326 || se === 33327 || se === 33328 || se === 34842 || se === 34836) && e.get('EXT_color_buffer_float'), se;
	}
	function C(w, y, k) {
		return E(w, k) === !0 || (w.isFramebufferTexture && w.minFilter !== NearestFilter && w.minFilter !== LinearFilter) ? Math.log2(Math.max(y.width, y.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? y.mipmaps.length : 1;
	}
	function P(w) {
		return w === NearestFilter || w === NearestMipmapNearestFilter || w === NearestMipmapLinearFilter ? 9728 : 9729;
	}
	function z(w) {
		const y = w.target;
		y.removeEventListener('dispose', z), D(y), y.isVideoTexture && g.delete(y);
	}
	function Y(w) {
		const y = w.target;
		y.removeEventListener('dispose', Y), N(y);
	}
	function D(w) {
		const y = i.get(w);
		if (y.__webglInit === void 0) return;
		const k = w.source,
			Q = f.get(k);
		if (Q) {
			const ne = Q[y.__cacheKey];
			ne.usedTimes--, ne.usedTimes === 0 && I(w), Object.keys(Q).length === 0 && f.delete(k);
		}
		i.remove(w);
	}
	function I(w) {
		const y = i.get(w);
		s.deleteTexture(y.__webglTexture);
		const k = w.source,
			Q = f.get(k);
		delete Q[y.__cacheKey], o.memory.textures--;
	}
	function N(w) {
		const y = w.texture,
			k = i.get(w),
			Q = i.get(y);
		if ((Q.__webglTexture !== void 0 && (s.deleteTexture(Q.__webglTexture), o.memory.textures--), w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)) for (let ne = 0; ne < 6; ne++) s.deleteFramebuffer(k.__webglFramebuffer[ne]), k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer[ne]);
		else {
			if ((s.deleteFramebuffer(k.__webglFramebuffer), k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer), k.__webglMultisampledFramebuffer && s.deleteFramebuffer(k.__webglMultisampledFramebuffer), k.__webglColorRenderbuffer)) for (let ne = 0; ne < k.__webglColorRenderbuffer.length; ne++) k.__webglColorRenderbuffer[ne] && s.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);
			k.__webglDepthRenderbuffer && s.deleteRenderbuffer(k.__webglDepthRenderbuffer);
		}
		if (w.isWebGLMultipleRenderTargets)
			for (let ne = 0, se = y.length; ne < se; ne++) {
				const L = i.get(y[ne]);
				L.__webglTexture && (s.deleteTexture(L.__webglTexture), o.memory.textures--), i.remove(y[ne]);
			}
		i.remove(y), i.remove(w);
	}
	let j = 0;
	function K() {
		j = 0;
	}
	function q() {
		const w = j;
		return w >= c && console.warn('THREE.WebGLTextures: Trying to use ' + w + ' texture units while this GPU supports only ' + c), (j += 1), w;
	}
	function ie(w) {
		const y = [];
		return y.push(w.wrapS), y.push(w.wrapT), y.push(w.wrapR || 0), y.push(w.magFilter), y.push(w.minFilter), y.push(w.anisotropy), y.push(w.internalFormat), y.push(w.format), y.push(w.type), y.push(w.generateMipmaps), y.push(w.premultiplyAlpha), y.push(w.flipY), y.push(w.unpackAlignment), y.push(w.encoding), y.join();
	}
	function ee(w, y) {
		const k = i.get(w);
		if ((w.isVideoTexture && je(w), w.isRenderTargetTexture === !1 && w.version > 0 && k.__version !== w.version)) {
			const Q = w.image;
			if (Q === null) console.warn('THREE.WebGLRenderer: Texture marked for update but no image data found.');
			else if (Q.complete === !1) console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
			else {
				ue(k, w, y);
				return;
			}
		}
		t.bindTexture(3553, k.__webglTexture, 33984 + y);
	}
	function B(w, y) {
		const k = i.get(w);
		if (w.version > 0 && k.__version !== w.version) {
			ue(k, w, y);
			return;
		}
		t.bindTexture(35866, k.__webglTexture, 33984 + y);
	}
	function H(w, y) {
		const k = i.get(w);
		if (w.version > 0 && k.__version !== w.version) {
			ue(k, w, y);
			return;
		}
		t.bindTexture(32879, k.__webglTexture, 33984 + y);
	}
	function Z(w, y) {
		const k = i.get(w);
		if (w.version > 0 && k.__version !== w.version) {
			ve(k, w, y);
			return;
		}
		t.bindTexture(34067, k.__webglTexture, 33984 + y);
	}
	const te = { [RepeatWrapping]: 10497, [ClampToEdgeWrapping]: 33071, [MirroredRepeatWrapping]: 33648 },
		re = { [NearestFilter]: 9728, [NearestMipmapNearestFilter]: 9984, [NearestMipmapLinearFilter]: 9986, [LinearFilter]: 9729, [LinearMipmapNearestFilter]: 9985, [LinearMipmapLinearFilter]: 9987 };
	function $(w, y, k) {
		if ((k ? (s.texParameteri(w, 10242, te[y.wrapS]), s.texParameteri(w, 10243, te[y.wrapT]), (w === 32879 || w === 35866) && s.texParameteri(w, 32882, te[y.wrapR]), s.texParameteri(w, 10240, re[y.magFilter]), s.texParameteri(w, 10241, re[y.minFilter])) : (s.texParameteri(w, 10242, 33071), s.texParameteri(w, 10243, 33071), (w === 32879 || w === 35866) && s.texParameteri(w, 32882, 33071), (y.wrapS !== ClampToEdgeWrapping || y.wrapT !== ClampToEdgeWrapping) && console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'), s.texParameteri(w, 10240, P(y.magFilter)), s.texParameteri(w, 10241, P(y.minFilter)), y.minFilter !== NearestFilter && y.minFilter !== LinearFilter && console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.')), e.has('EXT_texture_filter_anisotropic') === !0)) {
			const Q = e.get('EXT_texture_filter_anisotropic');
			if (y.magFilter === NearestFilter || (y.minFilter !== NearestMipmapLinearFilter && y.minFilter !== LinearMipmapLinearFilter) || (y.type === FloatType && e.has('OES_texture_float_linear') === !1) || (a === !1 && y.type === HalfFloatType && e.has('OES_texture_half_float_linear') === !1)) return;
			(y.anisotropy > 1 || i.get(y).__currentAnisotropy) && (s.texParameterf(w, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, n.getMaxAnisotropy())), (i.get(y).__currentAnisotropy = y.anisotropy));
		}
	}
	function Te(w, y) {
		let k = !1;
		w.__webglInit === void 0 && ((w.__webglInit = !0), y.addEventListener('dispose', z));
		const Q = y.source;
		let ne = f.get(Q);
		ne === void 0 && ((ne = {}), f.set(Q, ne));
		const se = ie(y);
		if (se !== w.__cacheKey) {
			ne[se] === void 0 && ((ne[se] = { texture: s.createTexture(), usedTimes: 0 }), o.memory.textures++, (k = !0)), ne[se].usedTimes++;
			const L = ne[w.__cacheKey];
			L !== void 0 && (ne[w.__cacheKey].usedTimes--, L.usedTimes === 0 && I(y)), (w.__cacheKey = se), (w.__webglTexture = ne[se].texture);
		}
		return k;
	}
	function ue(w, y, k) {
		let Q = 3553;
		(y.isDataArrayTexture || y.isCompressedArrayTexture) && (Q = 35866), y.isData3DTexture && (Q = 32879);
		const ne = Te(w, y),
			se = y.source;
		t.bindTexture(Q, w.__webglTexture, 33984 + k);
		const L = i.get(se);
		if (se.version !== L.__version || ne === !0) {
			t.activeTexture(33984 + k), s.pixelStorei(37440, y.flipY), s.pixelStorei(37441, y.premultiplyAlpha), s.pixelStorei(3317, y.unpackAlignment), s.pixelStorei(37443, 0);
			const W = b(y) && S(y.image) === !1;
			let U = x(y.image, W, !1, u);
			U = Xe(y, U);
			const oe = S(U) || a,
				he = r.convert(y.format, y.encoding);
			let le = r.convert(y.type),
				pe = v(y.internalFormat, he, le, y.encoding, y.isVideoTexture);
			$(Q, y, oe);
			let de;
			const Se = y.mipmaps,
				we = a && y.isVideoTexture !== !0,
				Oe = L.__version === void 0 || ne === !0,
				R = C(y, U, oe);
			if (y.isDepthTexture) (pe = 6402), a ? (y.type === FloatType ? (pe = 36012) : y.type === UnsignedIntType ? (pe = 33190) : y.type === UnsignedInt248Type ? (pe = 35056) : (pe = 33189)) : y.type === FloatType && console.error('WebGLRenderer: Floating point depth texture requires WebGL2.'), y.format === DepthFormat && pe === 6402 && y.type !== UnsignedShortType && y.type !== UnsignedIntType && (console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'), (y.type = UnsignedIntType), (le = r.convert(y.type))), y.format === DepthStencilFormat && pe === 6402 && ((pe = 34041), y.type !== UnsignedInt248Type && (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'), (y.type = UnsignedInt248Type), (le = r.convert(y.type)))), Oe && (we ? t.texStorage2D(3553, 1, pe, U.width, U.height) : t.texImage2D(3553, 0, pe, U.width, U.height, 0, he, le, null));
			else if (y.isDataTexture)
				if (Se.length > 0 && oe) {
					we && Oe && t.texStorage2D(3553, R, pe, Se[0].width, Se[0].height);
					for (let V = 0, J = Se.length; V < J; V++) (de = Se[V]), we ? t.texSubImage2D(3553, V, 0, 0, de.width, de.height, he, le, de.data) : t.texImage2D(3553, V, pe, de.width, de.height, 0, he, le, de.data);
					y.generateMipmaps = !1;
				} else we ? (Oe && t.texStorage2D(3553, R, pe, U.width, U.height), t.texSubImage2D(3553, 0, 0, 0, U.width, U.height, he, le, U.data)) : t.texImage2D(3553, 0, pe, U.width, U.height, 0, he, le, U.data);
			else if (y.isCompressedTexture)
				if (y.isCompressedArrayTexture) {
					we && Oe && t.texStorage3D(35866, R, pe, Se[0].width, Se[0].height, U.depth);
					for (let V = 0, J = Se.length; V < J; V++) (de = Se[V]), y.format !== RGBAFormat ? (he !== null ? (we ? t.compressedTexSubImage3D(35866, V, 0, 0, 0, de.width, de.height, U.depth, he, de.data, 0, 0) : t.compressedTexImage3D(35866, V, pe, de.width, de.height, U.depth, 0, de.data, 0, 0)) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()')) : we ? t.texSubImage3D(35866, V, 0, 0, 0, de.width, de.height, U.depth, he, le, de.data) : t.texImage3D(35866, V, pe, de.width, de.height, U.depth, 0, he, le, de.data);
				} else {
					we && Oe && t.texStorage2D(3553, R, pe, Se[0].width, Se[0].height);
					for (let V = 0, J = Se.length; V < J; V++) (de = Se[V]), y.format !== RGBAFormat ? (he !== null ? (we ? t.compressedTexSubImage2D(3553, V, 0, 0, de.width, de.height, he, de.data) : t.compressedTexImage2D(3553, V, pe, de.width, de.height, 0, de.data)) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()')) : we ? t.texSubImage2D(3553, V, 0, 0, de.width, de.height, he, le, de.data) : t.texImage2D(3553, V, pe, de.width, de.height, 0, he, le, de.data);
				}
			else if (y.isDataArrayTexture) we ? (Oe && t.texStorage3D(35866, R, pe, U.width, U.height, U.depth), t.texSubImage3D(35866, 0, 0, 0, 0, U.width, U.height, U.depth, he, le, U.data)) : t.texImage3D(35866, 0, pe, U.width, U.height, U.depth, 0, he, le, U.data);
			else if (y.isData3DTexture) we ? (Oe && t.texStorage3D(32879, R, pe, U.width, U.height, U.depth), t.texSubImage3D(32879, 0, 0, 0, 0, U.width, U.height, U.depth, he, le, U.data)) : t.texImage3D(32879, 0, pe, U.width, U.height, U.depth, 0, he, le, U.data);
			else if (y.isFramebufferTexture) {
				if (Oe)
					if (we) t.texStorage2D(3553, R, pe, U.width, U.height);
					else {
						let V = U.width,
							J = U.height;
						for (let ae = 0; ae < R; ae++) t.texImage2D(3553, ae, pe, V, J, 0, he, le, null), (V >>= 1), (J >>= 1);
					}
			} else if (Se.length > 0 && oe) {
				we && Oe && t.texStorage2D(3553, R, pe, Se[0].width, Se[0].height);
				for (let V = 0, J = Se.length; V < J; V++) (de = Se[V]), we ? t.texSubImage2D(3553, V, 0, 0, he, le, de) : t.texImage2D(3553, V, pe, he, le, de);
				y.generateMipmaps = !1;
			} else we ? (Oe && t.texStorage2D(3553, R, pe, U.width, U.height), t.texSubImage2D(3553, 0, 0, 0, he, le, U)) : t.texImage2D(3553, 0, pe, he, le, U);
			E(y, oe) && A(Q), (L.__version = se.version), y.onUpdate && y.onUpdate(y);
		}
		w.__version = y.version;
	}
	function ve(w, y, k) {
		if (y.image.length !== 6) return;
		const Q = Te(w, y),
			ne = y.source;
		t.bindTexture(34067, w.__webglTexture, 33984 + k);
		const se = i.get(ne);
		if (ne.version !== se.__version || Q === !0) {
			t.activeTexture(33984 + k), s.pixelStorei(37440, y.flipY), s.pixelStorei(37441, y.premultiplyAlpha), s.pixelStorei(3317, y.unpackAlignment), s.pixelStorei(37443, 0);
			const L = y.isCompressedTexture || y.image[0].isCompressedTexture,
				W = y.image[0] && y.image[0].isDataTexture,
				U = [];
			for (let V = 0; V < 6; V++) !L && !W ? (U[V] = x(y.image[V], !1, !0, l)) : (U[V] = W ? y.image[V].image : y.image[V]), (U[V] = Xe(y, U[V]));
			const oe = U[0],
				he = S(oe) || a,
				le = r.convert(y.format, y.encoding),
				pe = r.convert(y.type),
				de = v(y.internalFormat, le, pe, y.encoding),
				Se = a && y.isVideoTexture !== !0,
				we = se.__version === void 0 || Q === !0;
			let Oe = C(y, oe, he);
			$(34067, y, he);
			let R;
			if (L) {
				Se && we && t.texStorage2D(34067, Oe, de, oe.width, oe.height);
				for (let V = 0; V < 6; V++) {
					R = U[V].mipmaps;
					for (let J = 0; J < R.length; J++) {
						const ae = R[J];
						y.format !== RGBAFormat ? (le !== null ? (Se ? t.compressedTexSubImage2D(34069 + V, J, 0, 0, ae.width, ae.height, le, ae.data) : t.compressedTexImage2D(34069 + V, J, de, ae.width, ae.height, 0, ae.data)) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()')) : Se ? t.texSubImage2D(34069 + V, J, 0, 0, ae.width, ae.height, le, pe, ae.data) : t.texImage2D(34069 + V, J, de, ae.width, ae.height, 0, le, pe, ae.data);
					}
				}
			} else {
				(R = y.mipmaps), Se && we && (R.length > 0 && Oe++, t.texStorage2D(34067, Oe, de, U[0].width, U[0].height));
				for (let V = 0; V < 6; V++)
					if (W) {
						Se ? t.texSubImage2D(34069 + V, 0, 0, 0, U[V].width, U[V].height, le, pe, U[V].data) : t.texImage2D(34069 + V, 0, de, U[V].width, U[V].height, 0, le, pe, U[V].data);
						for (let J = 0; J < R.length; J++) {
							const fe = R[J].image[V].image;
							Se ? t.texSubImage2D(34069 + V, J + 1, 0, 0, fe.width, fe.height, le, pe, fe.data) : t.texImage2D(34069 + V, J + 1, de, fe.width, fe.height, 0, le, pe, fe.data);
						}
					} else {
						Se ? t.texSubImage2D(34069 + V, 0, 0, 0, le, pe, U[V]) : t.texImage2D(34069 + V, 0, de, le, pe, U[V]);
						for (let J = 0; J < R.length; J++) {
							const ae = R[J];
							Se ? t.texSubImage2D(34069 + V, J + 1, 0, 0, le, pe, ae.image[V]) : t.texImage2D(34069 + V, J + 1, de, le, pe, ae.image[V]);
						}
					}
			}
			E(y, he) && A(34067), (se.__version = ne.version), y.onUpdate && y.onUpdate(y);
		}
		w.__version = y.version;
	}
	function ce(w, y, k, Q, ne) {
		const se = r.convert(k.format, k.encoding),
			L = r.convert(k.type),
			W = v(k.internalFormat, se, L, k.encoding);
		i.get(y).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, W, y.width, y.height, y.depth, 0, se, L, null) : t.texImage2D(ne, 0, W, y.width, y.height, 0, se, L, null)), t.bindFramebuffer(36160, w), Re(y) ? d.framebufferTexture2DMultisampleEXT(36160, Q, ne, i.get(k).__webglTexture, 0, Fe(y)) : (ne === 3553 || (ne >= 34069 && ne <= 34074)) && s.framebufferTexture2D(36160, Q, ne, i.get(k).__webglTexture, 0), t.bindFramebuffer(36160, null);
	}
	function Pe(w, y, k) {
		if ((s.bindRenderbuffer(36161, w), y.depthBuffer && !y.stencilBuffer)) {
			let Q = 33189;
			if (k || Re(y)) {
				const ne = y.depthTexture;
				ne && ne.isDepthTexture && (ne.type === FloatType ? (Q = 36012) : ne.type === UnsignedIntType && (Q = 33190));
				const se = Fe(y);
				Re(y) ? d.renderbufferStorageMultisampleEXT(36161, se, Q, y.width, y.height) : s.renderbufferStorageMultisample(36161, se, Q, y.width, y.height);
			} else s.renderbufferStorage(36161, Q, y.width, y.height);
			s.framebufferRenderbuffer(36160, 36096, 36161, w);
		} else if (y.depthBuffer && y.stencilBuffer) {
			const Q = Fe(y);
			k && Re(y) === !1 ? s.renderbufferStorageMultisample(36161, Q, 35056, y.width, y.height) : Re(y) ? d.renderbufferStorageMultisampleEXT(36161, Q, 35056, y.width, y.height) : s.renderbufferStorage(36161, 34041, y.width, y.height), s.framebufferRenderbuffer(36160, 33306, 36161, w);
		} else {
			const Q = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
			for (let ne = 0; ne < Q.length; ne++) {
				const se = Q[ne],
					L = r.convert(se.format, se.encoding),
					W = r.convert(se.type),
					U = v(se.internalFormat, L, W, se.encoding),
					oe = Fe(y);
				k && Re(y) === !1 ? s.renderbufferStorageMultisample(36161, oe, U, y.width, y.height) : Re(y) ? d.renderbufferStorageMultisampleEXT(36161, oe, U, y.width, y.height) : s.renderbufferStorage(36161, U, y.width, y.height);
			}
		}
		s.bindRenderbuffer(36161, null);
	}
	function ye(w, y) {
		if (y && y.isWebGLCubeRenderTarget) throw new Error('Depth Texture with cube render targets is not supported');
		if ((t.bindFramebuffer(36160, w), !(y.depthTexture && y.depthTexture.isDepthTexture))) throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
		(!i.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && ((y.depthTexture.image.width = y.width), (y.depthTexture.image.height = y.height), (y.depthTexture.needsUpdate = !0)), ee(y.depthTexture, 0);
		const Q = i.get(y.depthTexture).__webglTexture,
			ne = Fe(y);
		if (y.depthTexture.format === DepthFormat) Re(y) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, ne) : s.framebufferTexture2D(36160, 36096, 3553, Q, 0);
		else if (y.depthTexture.format === DepthStencilFormat) Re(y) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, ne) : s.framebufferTexture2D(36160, 33306, 3553, Q, 0);
		else throw new Error('Unknown depthTexture format');
	}
	function ge(w) {
		const y = i.get(w),
			k = w.isWebGLCubeRenderTarget === !0;
		if (w.depthTexture && !y.__autoAllocateDepthBuffer) {
			if (k) throw new Error('target.depthTexture not supported in Cube render targets');
			ye(y.__webglFramebuffer, w);
		} else if (k) {
			y.__webglDepthbuffer = [];
			for (let Q = 0; Q < 6; Q++) t.bindFramebuffer(36160, y.__webglFramebuffer[Q]), (y.__webglDepthbuffer[Q] = s.createRenderbuffer()), Pe(y.__webglDepthbuffer[Q], w, !1);
		} else t.bindFramebuffer(36160, y.__webglFramebuffer), (y.__webglDepthbuffer = s.createRenderbuffer()), Pe(y.__webglDepthbuffer, w, !1);
		t.bindFramebuffer(36160, null);
	}
	function ze(w, y, k) {
		const Q = i.get(w);
		y !== void 0 && ce(Q.__webglFramebuffer, w, w.texture, 36064, 3553), k !== void 0 && ge(w);
	}
	function Be(w) {
		const y = w.texture,
			k = i.get(w),
			Q = i.get(y);
		w.addEventListener('dispose', Y), w.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = s.createTexture()), (Q.__version = y.version), o.memory.textures++);
		const ne = w.isWebGLCubeRenderTarget === !0,
			se = w.isWebGLMultipleRenderTargets === !0,
			L = S(w) || a;
		if (ne) {
			k.__webglFramebuffer = [];
			for (let W = 0; W < 6; W++) k.__webglFramebuffer[W] = s.createFramebuffer();
		} else {
			if (((k.__webglFramebuffer = s.createFramebuffer()), se))
				if (n.drawBuffers) {
					const W = w.texture;
					for (let U = 0, oe = W.length; U < oe; U++) {
						const he = i.get(W[U]);
						he.__webglTexture === void 0 && ((he.__webglTexture = s.createTexture()), o.memory.textures++);
					}
				} else console.warn('THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.');
			if (a && w.samples > 0 && Re(w) === !1) {
				const W = se ? y : [y];
				(k.__webglMultisampledFramebuffer = s.createFramebuffer()), (k.__webglColorRenderbuffer = []), t.bindFramebuffer(36160, k.__webglMultisampledFramebuffer);
				for (let U = 0; U < W.length; U++) {
					const oe = W[U];
					(k.__webglColorRenderbuffer[U] = s.createRenderbuffer()), s.bindRenderbuffer(36161, k.__webglColorRenderbuffer[U]);
					const he = r.convert(oe.format, oe.encoding),
						le = r.convert(oe.type),
						pe = v(oe.internalFormat, he, le, oe.encoding, w.isXRRenderTarget === !0),
						de = Fe(w);
					s.renderbufferStorageMultisample(36161, de, pe, w.width, w.height), s.framebufferRenderbuffer(36160, 36064 + U, 36161, k.__webglColorRenderbuffer[U]);
				}
				s.bindRenderbuffer(36161, null), w.depthBuffer && ((k.__webglDepthRenderbuffer = s.createRenderbuffer()), Pe(k.__webglDepthRenderbuffer, w, !0)), t.bindFramebuffer(36160, null);
			}
		}
		if (ne) {
			t.bindTexture(34067, Q.__webglTexture), $(34067, y, L);
			for (let W = 0; W < 6; W++) ce(k.__webglFramebuffer[W], w, y, 36064, 34069 + W);
			E(y, L) && A(34067), t.unbindTexture();
		} else if (se) {
			const W = w.texture;
			for (let U = 0, oe = W.length; U < oe; U++) {
				const he = W[U],
					le = i.get(he);
				t.bindTexture(3553, le.__webglTexture), $(3553, he, L), ce(k.__webglFramebuffer, w, he, 36064 + U, 3553), E(he, L) && A(3553);
			}
			t.unbindTexture();
		} else {
			let W = 3553;
			(w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (a ? (W = w.isWebGL3DRenderTarget ? 32879 : 35866) : console.error('THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.')), t.bindTexture(W, Q.__webglTexture), $(W, y, L), ce(k.__webglFramebuffer, w, y, 36064, W), E(y, L) && A(W), t.unbindTexture();
		}
		w.depthBuffer && ge(w);
	}
	function ke(w) {
		const y = S(w) || a,
			k = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
		for (let Q = 0, ne = k.length; Q < ne; Q++) {
			const se = k[Q];
			if (E(se, y)) {
				const L = w.isWebGLCubeRenderTarget ? 34067 : 3553,
					W = i.get(se).__webglTexture;
				t.bindTexture(L, W), A(L), t.unbindTexture();
			}
		}
	}
	function $e(w) {
		if (a && w.samples > 0 && Re(w) === !1) {
			const y = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture],
				k = w.width,
				Q = w.height;
			let ne = 16384;
			const se = [],
				L = w.stencilBuffer ? 33306 : 36096,
				W = i.get(w),
				U = w.isWebGLMultipleRenderTargets === !0;
			if (U) for (let oe = 0; oe < y.length; oe++) t.bindFramebuffer(36160, W.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + oe, 36161, null), t.bindFramebuffer(36160, W.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + oe, 3553, null, 0);
			t.bindFramebuffer(36008, W.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, W.__webglFramebuffer);
			for (let oe = 0; oe < y.length; oe++) {
				se.push(36064 + oe), w.depthBuffer && se.push(L);
				const he = W.__ignoreDepthValues !== void 0 ? W.__ignoreDepthValues : !1;
				if ((he === !1 && (w.depthBuffer && (ne |= 256), w.stencilBuffer && (ne |= 1024)), U && s.framebufferRenderbuffer(36008, 36064, 36161, W.__webglColorRenderbuffer[oe]), he === !0 && (s.invalidateFramebuffer(36008, [L]), s.invalidateFramebuffer(36009, [L])), U)) {
					const le = i.get(y[oe]).__webglTexture;
					s.framebufferTexture2D(36009, 36064, 3553, le, 0);
				}
				s.blitFramebuffer(0, 0, k, Q, 0, 0, k, Q, ne, 9728), m && s.invalidateFramebuffer(36008, se);
			}
			if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), U))
				for (let oe = 0; oe < y.length; oe++) {
					t.bindFramebuffer(36160, W.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + oe, 36161, W.__webglColorRenderbuffer[oe]);
					const he = i.get(y[oe]).__webglTexture;
					t.bindFramebuffer(36160, W.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + oe, 3553, he, 0);
				}
			t.bindFramebuffer(36009, W.__webglMultisampledFramebuffer);
		}
	}
	function Fe(w) {
		return Math.min(h, w.samples);
	}
	function Re(w) {
		const y = i.get(w);
		return a && w.samples > 0 && e.has('WEBGL_multisampled_render_to_texture') === !0 && y.__useRenderToTexture !== !1;
	}
	function je(w) {
		const y = o.render.frame;
		g.get(w) !== y && (g.set(w, y), w.update());
	}
	function Xe(w, y) {
		const k = w.encoding,
			Q = w.format,
			ne = w.type;
		return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || w.format === _SRGBAFormat || (k !== LinearEncoding && (k === sRGBEncoding ? (a === !1 ? (e.has('EXT_sRGB') === !0 && Q === RGBAFormat ? ((w.format = _SRGBAFormat), (w.minFilter = LinearFilter), (w.generateMipmaps = !1)) : (y = ImageUtils.sRGBToLinear(y))) : (Q !== RGBAFormat || ne !== UnsignedByteType) && console.warn('THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.')) : console.error('THREE.WebGLTextures: Unsupported texture encoding:', k))), y;
	}
	(this.allocateTextureUnit = q), (this.resetTextureUnits = K), (this.setTexture2D = ee), (this.setTexture2DArray = B), (this.setTexture3D = H), (this.setTextureCube = Z), (this.rebindTextures = ze), (this.setupRenderTarget = Be), (this.updateRenderTargetMipmap = ke), (this.updateMultisampleRenderTarget = $e), (this.setupDepthRenderbuffer = ge), (this.setupFrameBufferTexture = ce), (this.useMultisampledRTT = Re);
}
function WebGLUtils(s, e, t) {
	const i = t.isWebGL2;
	function n(r, o = null) {
		let a;
		if (r === UnsignedByteType) return 5121;
		if (r === UnsignedShort4444Type) return 32819;
		if (r === UnsignedShort5551Type) return 32820;
		if (r === ByteType) return 5120;
		if (r === ShortType) return 5122;
		if (r === UnsignedShortType) return 5123;
		if (r === IntType) return 5124;
		if (r === UnsignedIntType) return 5125;
		if (r === FloatType) return 5126;
		if (r === HalfFloatType) return i ? 5131 : ((a = e.get('OES_texture_half_float')), a !== null ? a.HALF_FLOAT_OES : null);
		if (r === AlphaFormat) return 6406;
		if (r === RGBAFormat) return 6408;
		if (r === LuminanceFormat) return 6409;
		if (r === LuminanceAlphaFormat) return 6410;
		if (r === DepthFormat) return 6402;
		if (r === DepthStencilFormat) return 34041;
		if (r === RGBFormat) return console.warn('THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228'), 6408;
		if (r === _SRGBAFormat) return (a = e.get('EXT_sRGB')), a !== null ? a.SRGB_ALPHA_EXT : null;
		if (r === RedFormat) return 6403;
		if (r === RedIntegerFormat) return 36244;
		if (r === RGFormat) return 33319;
		if (r === RGIntegerFormat) return 33320;
		if (r === RGBAIntegerFormat) return 36249;
		if (r === RGB_S3TC_DXT1_Format || r === RGBA_S3TC_DXT1_Format || r === RGBA_S3TC_DXT3_Format || r === RGBA_S3TC_DXT5_Format)
			if (o === sRGBEncoding)
				if (((a = e.get('WEBGL_compressed_texture_s3tc_srgb')), a !== null)) {
					if (r === RGB_S3TC_DXT1_Format) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (r === RGBA_S3TC_DXT1_Format) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (r === RGBA_S3TC_DXT3_Format) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (r === RGBA_S3TC_DXT5_Format) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			else if (((a = e.get('WEBGL_compressed_texture_s3tc')), a !== null)) {
				if (r === RGB_S3TC_DXT1_Format) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (r === RGBA_S3TC_DXT1_Format) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (r === RGBA_S3TC_DXT3_Format) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (r === RGBA_S3TC_DXT5_Format) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		if (r === RGB_PVRTC_4BPPV1_Format || r === RGB_PVRTC_2BPPV1_Format || r === RGBA_PVRTC_4BPPV1_Format || r === RGBA_PVRTC_2BPPV1_Format)
			if (((a = e.get('WEBGL_compressed_texture_pvrtc')), a !== null)) {
				if (r === RGB_PVRTC_4BPPV1_Format) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (r === RGB_PVRTC_2BPPV1_Format) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (r === RGBA_PVRTC_4BPPV1_Format) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (r === RGBA_PVRTC_2BPPV1_Format) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		if (r === RGB_ETC1_Format) return (a = e.get('WEBGL_compressed_texture_etc1')), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
		if (r === RGB_ETC2_Format || r === RGBA_ETC2_EAC_Format)
			if (((a = e.get('WEBGL_compressed_texture_etc')), a !== null)) {
				if (r === RGB_ETC2_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
				if (r === RGBA_ETC2_EAC_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
			} else return null;
		if (r === RGBA_ASTC_4x4_Format || r === RGBA_ASTC_5x4_Format || r === RGBA_ASTC_5x5_Format || r === RGBA_ASTC_6x5_Format || r === RGBA_ASTC_6x6_Format || r === RGBA_ASTC_8x5_Format || r === RGBA_ASTC_8x6_Format || r === RGBA_ASTC_8x8_Format || r === RGBA_ASTC_10x5_Format || r === RGBA_ASTC_10x6_Format || r === RGBA_ASTC_10x8_Format || r === RGBA_ASTC_10x10_Format || r === RGBA_ASTC_12x10_Format || r === RGBA_ASTC_12x12_Format)
			if (((a = e.get('WEBGL_compressed_texture_astc')), a !== null)) {
				if (r === RGBA_ASTC_4x4_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (r === RGBA_ASTC_5x4_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (r === RGBA_ASTC_5x5_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (r === RGBA_ASTC_6x5_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (r === RGBA_ASTC_6x6_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (r === RGBA_ASTC_8x5_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (r === RGBA_ASTC_8x6_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (r === RGBA_ASTC_8x8_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (r === RGBA_ASTC_10x5_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (r === RGBA_ASTC_10x6_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (r === RGBA_ASTC_10x8_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (r === RGBA_ASTC_10x10_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (r === RGBA_ASTC_12x10_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (r === RGBA_ASTC_12x12_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		if (r === RGBA_BPTC_Format)
			if (((a = e.get('EXT_texture_compression_bptc')), a !== null)) {
				if (r === RGBA_BPTC_Format) return o === sRGBEncoding ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			} else return null;
		return r === UnsignedInt248Type ? (i ? 34042 : ((a = e.get('WEBGL_depth_texture')), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)) : s[r] !== void 0 ? s[r] : null;
	}
	return { convert: n };
}
class ArrayCamera extends PerspectiveCamera {
	constructor(e = []) {
		super(), (this.isArrayCamera = !0), (this.cameras = e);
	}
}
class Group extends Object3D {
	constructor() {
		super(), (this.isGroup = !0), (this.type = 'Group');
	}
}
const _moveEvent = { type: 'move' };
class WebXRController {
	constructor() {
		(this._targetRay = null), (this._grip = null), (this._hand = null);
	}
	getHandSpace() {
		return this._hand === null && ((this._hand = new Group()), (this._hand.matrixAutoUpdate = !1), (this._hand.visible = !1), (this._hand.joints = {}), (this._hand.inputState = { pinching: !1 })), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && ((this._targetRay = new Group()), (this._targetRay.matrixAutoUpdate = !1), (this._targetRay.visible = !1), (this._targetRay.hasLinearVelocity = !1), (this._targetRay.linearVelocity = new Vector3()), (this._targetRay.hasAngularVelocity = !1), (this._targetRay.angularVelocity = new Vector3())), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && ((this._grip = new Group()), (this._grip.matrixAutoUpdate = !1), (this._grip.visible = !1), (this._grip.hasLinearVelocity = !1), (this._grip.linearVelocity = new Vector3()), (this._grip.hasAngularVelocity = !1), (this._grip.angularVelocity = new Vector3())), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			const t = this._hand;
			if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
		}
		return this.dispatchEvent({ type: 'connected', data: e }), this;
	}
	disconnect(e) {
		return this.dispatchEvent({ type: 'disconnected', data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, i) {
		let n = null,
			r = null,
			o = null;
		const a = this._targetRay,
			c = this._grip,
			l = this._hand;
		if (e && t.session.visibilityState !== 'visible-blurred') {
			if (l && e.hand) {
				o = !0;
				for (const p of e.hand.values()) {
					const f = t.getJointPose(p, i),
						_ = this._getHandJoint(l, p);
					f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), (_.jointRadius = f.radius)), (_.visible = f !== null);
				}
				const u = l.joints['index-finger-tip'],
					h = l.joints['thumb-tip'],
					d = u.position.distanceTo(h.position),
					m = 0.02,
					g = 0.005;
				l.inputState.pinching && d > m + g ? ((l.inputState.pinching = !1), this.dispatchEvent({ type: 'pinchend', handedness: e.handedness, target: this })) : !l.inputState.pinching && d <= m - g && ((l.inputState.pinching = !0), this.dispatchEvent({ type: 'pinchstart', handedness: e.handedness, target: this }));
			} else c !== null && e.gripSpace && ((r = t.getPose(e.gripSpace, i)), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), r.linearVelocity ? ((c.hasLinearVelocity = !0), c.linearVelocity.copy(r.linearVelocity)) : (c.hasLinearVelocity = !1), r.angularVelocity ? ((c.hasAngularVelocity = !0), c.angularVelocity.copy(r.angularVelocity)) : (c.hasAngularVelocity = !1)));
			a !== null && ((n = t.getPose(e.targetRaySpace, i)), n === null && r !== null && (n = r), n !== null && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? ((a.hasLinearVelocity = !0), a.linearVelocity.copy(n.linearVelocity)) : (a.hasLinearVelocity = !1), n.angularVelocity ? ((a.hasAngularVelocity = !0), a.angularVelocity.copy(n.angularVelocity)) : (a.hasAngularVelocity = !1), this.dispatchEvent(_moveEvent)));
		}
		return a !== null && (a.visible = n !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			const i = new Group();
			(i.matrixAutoUpdate = !1), (i.visible = !1), (e.joints[t.jointName] = i), e.add(i);
		}
		return e.joints[t.jointName];
	}
}
class DepthTexture extends Texture {
	constructor(e, t, i, n, r, o, a, c, l, u) {
		if (((u = u !== void 0 ? u : DepthFormat), u !== DepthFormat && u !== DepthStencilFormat)) throw new Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
		i === void 0 && u === DepthFormat && (i = UnsignedIntType), i === void 0 && u === DepthStencilFormat && (i = UnsignedInt248Type), super(null, n, r, o, a, c, u, i, l), (this.isDepthTexture = !0), (this.image = { width: e, height: t }), (this.magFilter = a !== void 0 ? a : NearestFilter), (this.minFilter = c !== void 0 ? c : NearestFilter), (this.flipY = !1), (this.generateMipmaps = !1);
	}
}
class WebXRManager extends EventDispatcher {
	constructor(e, t) {
		super();
		const i = this;
		let n = null,
			r = 1,
			o = null,
			a = 'local-floor',
			c = null,
			l = null,
			u = null,
			h = null,
			d = null,
			m = null;
		const g = t.getContextAttributes();
		let p = null,
			f = null;
		const _ = [],
			T = [],
			x = new Set(),
			S = new Map(),
			b = new PerspectiveCamera();
		b.layers.enable(1), (b.viewport = new Vector4());
		const E = new PerspectiveCamera();
		E.layers.enable(2), (E.viewport = new Vector4());
		const A = [b, E],
			v = new ArrayCamera();
		v.layers.enable(1), v.layers.enable(2);
		let C = null,
			P = null;
		(this.cameraAutoUpdate = !0),
			(this.enabled = !1),
			(this.isPresenting = !1),
			(this.getController = function (B) {
				let H = _[B];
				return H === void 0 && ((H = new WebXRController()), (_[B] = H)), H.getTargetRaySpace();
			}),
			(this.getControllerGrip = function (B) {
				let H = _[B];
				return H === void 0 && ((H = new WebXRController()), (_[B] = H)), H.getGripSpace();
			}),
			(this.getHand = function (B) {
				let H = _[B];
				return H === void 0 && ((H = new WebXRController()), (_[B] = H)), H.getHandSpace();
			});
		function z(B) {
			const H = T.indexOf(B.inputSource);
			if (H === -1) return;
			const Z = _[H];
			Z !== void 0 && Z.dispatchEvent({ type: B.type, data: B.inputSource });
		}
		function Y() {
			n.removeEventListener('select', z), n.removeEventListener('selectstart', z), n.removeEventListener('selectend', z), n.removeEventListener('squeeze', z), n.removeEventListener('squeezestart', z), n.removeEventListener('squeezeend', z), n.removeEventListener('end', Y), n.removeEventListener('inputsourceschange', D);
			for (let B = 0; B < _.length; B++) {
				const H = T[B];
				H !== null && ((T[B] = null), _[B].disconnect(H));
			}
			(C = null), (P = null), e.setRenderTarget(p), (d = null), (h = null), (u = null), (n = null), (f = null), ee.stop(), (i.isPresenting = !1), i.dispatchEvent({ type: 'sessionend' });
		}
		(this.setFramebufferScaleFactor = function (B) {
			(r = B), i.isPresenting === !0 && console.warn('THREE.WebXRManager: Cannot change framebuffer scale while presenting.');
		}),
			(this.setReferenceSpaceType = function (B) {
				(a = B), i.isPresenting === !0 && console.warn('THREE.WebXRManager: Cannot change reference space type while presenting.');
			}),
			(this.getReferenceSpace = function () {
				return c || o;
			}),
			(this.setReferenceSpace = function (B) {
				c = B;
			}),
			(this.getBaseLayer = function () {
				return h !== null ? h : d;
			}),
			(this.getBinding = function () {
				return u;
			}),
			(this.getFrame = function () {
				return m;
			}),
			(this.getSession = function () {
				return n;
			}),
			(this.setSession = async function (B) {
				if (((n = B), n !== null)) {
					if (((p = e.getRenderTarget()), n.addEventListener('select', z), n.addEventListener('selectstart', z), n.addEventListener('selectend', z), n.addEventListener('squeeze', z), n.addEventListener('squeezestart', z), n.addEventListener('squeezeend', z), n.addEventListener('end', Y), n.addEventListener('inputsourceschange', D), g.xrCompatible !== !0 && (await t.makeXRCompatible()), n.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)) {
						const H = { antialias: n.renderState.layers === void 0 ? g.antialias : !0, alpha: g.alpha, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r };
						(d = new XRWebGLLayer(n, t, H)), n.updateRenderState({ baseLayer: d }), (f = new WebGLRenderTarget(d.framebufferWidth, d.framebufferHeight, { format: RGBAFormat, type: UnsignedByteType, encoding: e.outputEncoding, stencilBuffer: g.stencil }));
					} else {
						let H = null,
							Z = null,
							te = null;
						g.depth && ((te = g.stencil ? 35056 : 33190), (H = g.stencil ? DepthStencilFormat : DepthFormat), (Z = g.stencil ? UnsignedInt248Type : UnsignedIntType));
						const re = { colorFormat: 32856, depthFormat: te, scaleFactor: r };
						(u = new XRWebGLBinding(n, t)), (h = u.createProjectionLayer(re)), n.updateRenderState({ layers: [h] }), (f = new WebGLRenderTarget(h.textureWidth, h.textureHeight, { format: RGBAFormat, type: UnsignedByteType, depthTexture: new DepthTexture(h.textureWidth, h.textureHeight, Z, void 0, void 0, void 0, void 0, void 0, void 0, H), stencilBuffer: g.stencil, encoding: e.outputEncoding, samples: g.antialias ? 4 : 0 }));
						const $ = e.properties.get(f);
						$.__ignoreDepthValues = h.ignoreDepthValues;
					}
					(f.isXRRenderTarget = !0), this.setFoveation(1), (c = null), (o = await n.requestReferenceSpace(a)), ee.setContext(n), ee.start(), (i.isPresenting = !0), i.dispatchEvent({ type: 'sessionstart' });
				}
			});
		function D(B) {
			for (let H = 0; H < B.removed.length; H++) {
				const Z = B.removed[H],
					te = T.indexOf(Z);
				te >= 0 && ((T[te] = null), _[te].disconnect(Z));
			}
			for (let H = 0; H < B.added.length; H++) {
				const Z = B.added[H];
				let te = T.indexOf(Z);
				if (te === -1) {
					for (let $ = 0; $ < _.length; $++)
						if ($ >= T.length) {
							T.push(Z), (te = $);
							break;
						} else if (T[$] === null) {
							(T[$] = Z), (te = $);
							break;
						}
					if (te === -1) break;
				}
				const re = _[te];
				re && re.connect(Z);
			}
		}
		const I = new Vector3(),
			N = new Vector3();
		function j(B, H, Z) {
			I.setFromMatrixPosition(H.matrixWorld), N.setFromMatrixPosition(Z.matrixWorld);
			const te = I.distanceTo(N),
				re = H.projectionMatrix.elements,
				$ = Z.projectionMatrix.elements,
				Te = re[14] / (re[10] - 1),
				ue = re[14] / (re[10] + 1),
				ve = (re[9] + 1) / re[5],
				ce = (re[9] - 1) / re[5],
				Pe = (re[8] - 1) / re[0],
				ye = ($[8] + 1) / $[0],
				ge = Te * Pe,
				ze = Te * ye,
				Be = te / (-Pe + ye),
				ke = Be * -Pe;
			H.matrixWorld.decompose(B.position, B.quaternion, B.scale), B.translateX(ke), B.translateZ(Be), B.matrixWorld.compose(B.position, B.quaternion, B.scale), B.matrixWorldInverse.copy(B.matrixWorld).invert();
			const $e = Te + Be,
				Fe = ue + Be,
				Re = ge - ke,
				je = ze + (te - ke),
				Xe = ((ve * ue) / Fe) * $e,
				w = ((ce * ue) / Fe) * $e;
			B.projectionMatrix.makePerspective(Re, je, Xe, w, $e, Fe);
		}
		function K(B, H) {
			H === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices(H.matrixWorld, B.matrix), B.matrixWorldInverse.copy(B.matrixWorld).invert();
		}
		(this.updateCamera = function (B) {
			if (n === null) return;
			(v.near = E.near = b.near = B.near), (v.far = E.far = b.far = B.far), (C !== v.near || P !== v.far) && (n.updateRenderState({ depthNear: v.near, depthFar: v.far }), (C = v.near), (P = v.far));
			const H = B.parent,
				Z = v.cameras;
			K(v, H);
			for (let re = 0; re < Z.length; re++) K(Z[re], H);
			v.matrixWorld.decompose(v.position, v.quaternion, v.scale), B.matrix.copy(v.matrix), B.matrix.decompose(B.position, B.quaternion, B.scale);
			const te = B.children;
			for (let re = 0, $ = te.length; re < $; re++) te[re].updateMatrixWorld(!0);
			Z.length === 2 ? j(v, b, E) : v.projectionMatrix.copy(b.projectionMatrix);
		}),
			(this.getCamera = function () {
				return v;
			}),
			(this.getFoveation = function () {
				if (h !== null) return h.fixedFoveation;
				if (d !== null) return d.fixedFoveation;
			}),
			(this.setFoveation = function (B) {
				h !== null && (h.fixedFoveation = B), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = B);
			}),
			(this.getPlanes = function () {
				return x;
			});
		let q = null;
		function ie(B, H) {
			if (((l = H.getViewerPose(c || o)), (m = H), l !== null)) {
				const Z = l.views;
				d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
				let te = !1;
				Z.length !== v.cameras.length && ((v.cameras.length = 0), (te = !0));
				for (let re = 0; re < Z.length; re++) {
					const $ = Z[re];
					let Te = null;
					if (d !== null) Te = d.getViewport($);
					else {
						const ve = u.getViewSubImage(h, $);
						(Te = ve.viewport), re === 0 && (e.setRenderTargetTextures(f, ve.colorTexture, h.ignoreDepthValues ? void 0 : ve.depthStencilTexture), e.setRenderTarget(f));
					}
					let ue = A[re];
					ue === void 0 && ((ue = new PerspectiveCamera()), ue.layers.enable(re), (ue.viewport = new Vector4()), (A[re] = ue)), ue.matrix.fromArray($.transform.matrix), ue.projectionMatrix.fromArray($.projectionMatrix), ue.viewport.set(Te.x, Te.y, Te.width, Te.height), re === 0 && v.matrix.copy(ue.matrix), te === !0 && v.cameras.push(ue);
				}
			}
			for (let Z = 0; Z < _.length; Z++) {
				const te = T[Z],
					re = _[Z];
				te !== null && re !== void 0 && re.update(te, H, c || o);
			}
			if ((q && q(B, H), H.detectedPlanes)) {
				i.dispatchEvent({ type: 'planesdetected', data: H.detectedPlanes });
				let Z = null;
				for (const te of x) H.detectedPlanes.has(te) || (Z === null && (Z = []), Z.push(te));
				if (Z !== null) for (const te of Z) x.delete(te), S.delete(te), i.dispatchEvent({ type: 'planeremoved', data: te });
				for (const te of H.detectedPlanes)
					if (!x.has(te)) x.add(te), S.set(te, H.lastChangedTime), i.dispatchEvent({ type: 'planeadded', data: te });
					else {
						const re = S.get(te);
						te.lastChangedTime > re && (S.set(te, te.lastChangedTime), i.dispatchEvent({ type: 'planechanged', data: te }));
					}
			}
			m = null;
		}
		const ee = new WebGLAnimation();
		ee.setAnimationLoop(ie),
			(this.setAnimationLoop = function (B) {
				q = B;
			}),
			(this.dispose = function () {});
	}
}
function WebGLMaterials(s, e) {
	function t(p, f) {
		f.color.getRGB(p.fogColor.value, getUnlitUniformColorSpace(s)), f.isFog ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far)) : f.isFogExp2 && (p.fogDensity.value = f.density);
	}
	function i(p, f, _, T, x) {
		f.isMeshBasicMaterial || f.isMeshLambertMaterial ? n(p, f) : f.isMeshToonMaterial ? (n(p, f), u(p, f)) : f.isMeshPhongMaterial ? (n(p, f), l(p, f)) : f.isMeshStandardMaterial ? (n(p, f), h(p, f), f.isMeshPhysicalMaterial && d(p, f, x)) : f.isMeshMatcapMaterial ? (n(p, f), m(p, f)) : f.isMeshDepthMaterial ? n(p, f) : f.isMeshDistanceMaterial ? (n(p, f), g(p, f)) : f.isMeshNormalMaterial ? n(p, f) : f.isLineBasicMaterial ? (r(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? a(p, f, _, T) : f.isSpriteMaterial ? c(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity)) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
	}
	function n(p, f) {
		(p.opacity.value = f.opacity), f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && ((p.bumpMap.value = f.bumpMap), (p.bumpScale.value = f.bumpScale), f.side === BackSide && (p.bumpScale.value *= -1)), f.displacementMap && ((p.displacementMap.value = f.displacementMap), (p.displacementScale.value = f.displacementScale), (p.displacementBias.value = f.displacementBias)), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && ((p.normalMap.value = f.normalMap), p.normalScale.value.copy(f.normalScale), f.side === BackSide && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
		const _ = e.get(f).envMap;
		if ((_ && ((p.envMap.value = _), (p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1), (p.reflectivity.value = f.reflectivity), (p.ior.value = f.ior), (p.refractionRatio.value = f.refractionRatio)), f.lightMap)) {
			p.lightMap.value = f.lightMap;
			const S = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
			p.lightMapIntensity.value = f.lightMapIntensity * S;
		}
		f.aoMap && ((p.aoMap.value = f.aoMap), (p.aoMapIntensity.value = f.aoMapIntensity));
		let T;
		f.map ? (T = f.map) : f.specularMap ? (T = f.specularMap) : f.displacementMap ? (T = f.displacementMap) : f.normalMap ? (T = f.normalMap) : f.bumpMap ? (T = f.bumpMap) : f.roughnessMap ? (T = f.roughnessMap) : f.metalnessMap ? (T = f.metalnessMap) : f.alphaMap ? (T = f.alphaMap) : f.emissiveMap ? (T = f.emissiveMap) : f.clearcoatMap ? (T = f.clearcoatMap) : f.clearcoatNormalMap ? (T = f.clearcoatNormalMap) : f.clearcoatRoughnessMap ? (T = f.clearcoatRoughnessMap) : f.iridescenceMap ? (T = f.iridescenceMap) : f.iridescenceThicknessMap ? (T = f.iridescenceThicknessMap) : f.specularIntensityMap ? (T = f.specularIntensityMap) : f.specularColorMap ? (T = f.specularColorMap) : f.transmissionMap ? (T = f.transmissionMap) : f.thicknessMap ? (T = f.thicknessMap) : f.sheenColorMap ? (T = f.sheenColorMap) : f.sheenRoughnessMap && (T = f.sheenRoughnessMap),
			T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), p.uvTransform.value.copy(T.matrix));
		let x;
		f.aoMap ? (x = f.aoMap) : f.lightMap && (x = f.lightMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uv2Transform.value.copy(x.matrix));
	}
	function r(p, f) {
		p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity);
	}
	function o(p, f) {
		(p.dashSize.value = f.dashSize), (p.totalSize.value = f.dashSize + f.gapSize), (p.scale.value = f.scale);
	}
	function a(p, f, _, T) {
		p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity), (p.size.value = f.size * _), (p.scale.value = T * 0.5), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
		let x;
		f.map ? (x = f.map) : f.alphaMap && (x = f.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uvTransform.value.copy(x.matrix));
	}
	function c(p, f) {
		p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity), (p.rotation.value = f.rotation), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
		let _;
		f.map ? (_ = f.map) : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
	}
	function l(p, f) {
		p.specular.value.copy(f.specular), (p.shininess.value = Math.max(f.shininess, 1e-4));
	}
	function u(p, f) {
		f.gradientMap && (p.gradientMap.value = f.gradientMap);
	}
	function h(p, f) {
		(p.roughness.value = f.roughness), (p.metalness.value = f.metalness), f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
	}
	function d(p, f, _) {
		(p.ior.value = f.ior),
			f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), (p.sheenRoughness.value = f.sheenRoughness), f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)),
			f.clearcoat > 0 && ((p.clearcoat.value = f.clearcoat), (p.clearcoatRoughness.value = f.clearcoatRoughness), f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), (p.clearcoatNormalMap.value = f.clearcoatNormalMap), f.side === BackSide && p.clearcoatNormalScale.value.negate())),
			f.iridescence > 0 && ((p.iridescence.value = f.iridescence), (p.iridescenceIOR.value = f.iridescenceIOR), (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]), (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]), f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)),
			f.transmission > 0 && ((p.transmission.value = f.transmission), (p.transmissionSamplerMap.value = _.texture), p.transmissionSamplerSize.value.set(_.width, _.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), (p.thickness.value = f.thickness), f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), (p.attenuationDistance.value = f.attenuationDistance), p.attenuationColor.value.copy(f.attenuationColor)),
			(p.specularIntensity.value = f.specularIntensity),
			p.specularColor.value.copy(f.specularColor),
			f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap),
			f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
	}
	function m(p, f) {
		f.matcap && (p.matcap.value = f.matcap);
	}
	function g(p, f) {
		p.referencePosition.value.copy(f.referencePosition), (p.nearDistance.value = f.nearDistance), (p.farDistance.value = f.farDistance);
	}
	return { refreshFogUniforms: t, refreshMaterialUniforms: i };
}
function WebGLUniformsGroups(s, e, t, i) {
	let n = {},
		r = {},
		o = [];
	const a = t.isWebGL2 ? s.getParameter(35375) : 0;
	function c(T, x) {
		const S = x.program;
		i.uniformBlockBinding(T, S);
	}
	function l(T, x) {
		let S = n[T.id];
		S === void 0 && (g(T), (S = u(T)), (n[T.id] = S), T.addEventListener('dispose', f));
		const b = x.program;
		i.updateUBOMapping(T, b);
		const E = e.render.frame;
		r[T.id] !== E && (d(T), (r[T.id] = E));
	}
	function u(T) {
		const x = h();
		T.__bindingPointIndex = x;
		const S = s.createBuffer(),
			b = T.__size,
			E = T.usage;
		return s.bindBuffer(35345, S), s.bufferData(35345, b, E), s.bindBuffer(35345, null), s.bindBufferBase(35345, x, S), S;
	}
	function h() {
		for (let T = 0; T < a; T++) if (o.indexOf(T) === -1) return o.push(T), T;
		return console.error('THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'), 0;
	}
	function d(T) {
		const x = n[T.id],
			S = T.uniforms,
			b = T.__cache;
		s.bindBuffer(35345, x);
		for (let E = 0, A = S.length; E < A; E++) {
			const v = S[E];
			if (m(v, E, b) === !0) {
				const C = v.__offset,
					P = Array.isArray(v.value) ? v.value : [v.value];
				let z = 0;
				for (let Y = 0; Y < P.length; Y++) {
					const D = P[Y],
						I = p(D);
					typeof D == 'number' ? ((v.__data[0] = D), s.bufferSubData(35345, C + z, v.__data)) : D.isMatrix3 ? ((v.__data[0] = D.elements[0]), (v.__data[1] = D.elements[1]), (v.__data[2] = D.elements[2]), (v.__data[3] = D.elements[0]), (v.__data[4] = D.elements[3]), (v.__data[5] = D.elements[4]), (v.__data[6] = D.elements[5]), (v.__data[7] = D.elements[0]), (v.__data[8] = D.elements[6]), (v.__data[9] = D.elements[7]), (v.__data[10] = D.elements[8]), (v.__data[11] = D.elements[0])) : (D.toArray(v.__data, z), (z += I.storage / Float32Array.BYTES_PER_ELEMENT));
				}
				s.bufferSubData(35345, C, v.__data);
			}
		}
		s.bindBuffer(35345, null);
	}
	function m(T, x, S) {
		const b = T.value;
		if (S[x] === void 0) {
			if (typeof b == 'number') S[x] = b;
			else {
				const E = Array.isArray(b) ? b : [b],
					A = [];
				for (let v = 0; v < E.length; v++) A.push(E[v].clone());
				S[x] = A;
			}
			return !0;
		} else if (typeof b == 'number') {
			if (S[x] !== b) return (S[x] = b), !0;
		} else {
			const E = Array.isArray(S[x]) ? S[x] : [S[x]],
				A = Array.isArray(b) ? b : [b];
			for (let v = 0; v < E.length; v++) {
				const C = E[v];
				if (C.equals(A[v]) === !1) return C.copy(A[v]), !0;
			}
		}
		return !1;
	}
	function g(T) {
		const x = T.uniforms;
		let S = 0;
		const b = 16;
		let E = 0;
		for (let A = 0, v = x.length; A < v; A++) {
			const C = x[A],
				P = { boundary: 0, storage: 0 },
				z = Array.isArray(C.value) ? C.value : [C.value];
			for (let Y = 0, D = z.length; Y < D; Y++) {
				const I = z[Y],
					N = p(I);
				(P.boundary += N.boundary), (P.storage += N.storage);
			}
			if (((C.__data = new Float32Array(P.storage / Float32Array.BYTES_PER_ELEMENT)), (C.__offset = S), A > 0)) {
				E = S % b;
				const Y = b - E;
				E !== 0 && Y - P.boundary < 0 && ((S += b - E), (C.__offset = S));
			}
			S += P.storage;
		}
		return (E = S % b), E > 0 && (S += b - E), (T.__size = S), (T.__cache = {}), this;
	}
	function p(T) {
		const x = { boundary: 0, storage: 0 };
		return typeof T == 'number' ? ((x.boundary = 4), (x.storage = 4)) : T.isVector2 ? ((x.boundary = 8), (x.storage = 8)) : T.isVector3 || T.isColor ? ((x.boundary = 16), (x.storage = 12)) : T.isVector4 ? ((x.boundary = 16), (x.storage = 16)) : T.isMatrix3 ? ((x.boundary = 48), (x.storage = 48)) : T.isMatrix4 ? ((x.boundary = 64), (x.storage = 64)) : T.isTexture ? console.warn('THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.') : console.warn('THREE.WebGLRenderer: Unsupported uniform value type.', T), x;
	}
	function f(T) {
		const x = T.target;
		x.removeEventListener('dispose', f);
		const S = o.indexOf(x.__bindingPointIndex);
		o.splice(S, 1), s.deleteBuffer(n[x.id]), delete n[x.id], delete r[x.id];
	}
	function _() {
		for (const T in n) s.deleteBuffer(n[T]);
		(o = []), (n = {}), (r = {});
	}
	return { bind: c, update: l, dispose: _ };
}
function createCanvasElement() {
	const s = createElementNS('canvas');
	return (s.style.display = 'block'), s;
}
function WebGLRenderer(s = {}) {
	this.isWebGLRenderer = !0;
	const e = s.canvas !== void 0 ? s.canvas : createCanvasElement(),
		t = s.context !== void 0 ? s.context : null,
		i = s.depth !== void 0 ? s.depth : !0,
		n = s.stencil !== void 0 ? s.stencil : !0,
		r = s.antialias !== void 0 ? s.antialias : !1,
		o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
		a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
		c = s.powerPreference !== void 0 ? s.powerPreference : 'default',
		l = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1;
	let u;
	t !== null ? (u = t.getContextAttributes().alpha) : (u = s.alpha !== void 0 ? s.alpha : !1);
	let h = null,
		d = null;
	const m = [],
		g = [];
	(this.domElement = e), (this.debug = { checkShaderErrors: !0 }), (this.autoClear = !0), (this.autoClearColor = !0), (this.autoClearDepth = !0), (this.autoClearStencil = !0), (this.sortObjects = !0), (this.clippingPlanes = []), (this.localClippingEnabled = !1), (this.outputEncoding = LinearEncoding), (this.physicallyCorrectLights = !1), (this.toneMapping = NoToneMapping), (this.toneMappingExposure = 1);
	const p = this;
	let f = !1,
		_ = 0,
		T = 0,
		x = null,
		S = -1,
		b = null;
	const E = new Vector4(),
		A = new Vector4();
	let v = null,
		C = e.width,
		P = e.height,
		z = 1,
		Y = null,
		D = null;
	const I = new Vector4(0, 0, C, P),
		N = new Vector4(0, 0, C, P);
	let j = !1;
	const K = new Frustum();
	let q = !1,
		ie = !1,
		ee = null;
	const B = new Matrix4(),
		H = new Vector2(),
		Z = new Vector3(),
		te = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
	function re() {
		return x === null ? z : 1;
	}
	let $ = t;
	function Te(M, O) {
		for (let G = 0; G < M.length; G++) {
			const F = M[G],
				X = e.getContext(F, O);
			if (X !== null) return X;
		}
		return null;
	}
	try {
		const M = { alpha: !0, depth: i, stencil: n, antialias: r, premultipliedAlpha: o, preserveDrawingBuffer: a, powerPreference: c, failIfMajorPerformanceCaveat: l };
		if (('setAttribute' in e && e.setAttribute('data-engine', `three.js r${REVISION}`), e.addEventListener('webglcontextlost', pe, !1), e.addEventListener('webglcontextrestored', de, !1), e.addEventListener('webglcontextcreationerror', Se, !1), $ === null)) {
			const O = ['webgl2', 'webgl', 'experimental-webgl'];
			if ((p.isWebGL1Renderer === !0 && O.shift(), ($ = Te(O, M)), $ === null)) throw Te(O) ? new Error('Error creating WebGL context with your selected attributes.') : new Error('Error creating WebGL context.');
		}
		$.getShaderPrecisionFormat === void 0 &&
			($.getShaderPrecisionFormat = function () {
				return { rangeMin: 1, rangeMax: 1, precision: 1 };
			});
	} catch (M) {
		throw (console.error('THREE.WebGLRenderer: ' + M.message), M);
	}
	let ue, ve, ce, Pe, ye, ge, ze, Be, ke, $e, Fe, Re, je, Xe, w, y, k, Q, ne, se, L, W, U, oe;
	function he() {
		(ue = new WebGLExtensions($)),
			(ve = new WebGLCapabilities($, ue, s)),
			ue.init(ve),
			(W = new WebGLUtils($, ue, ve)),
			(ce = new WebGLState($, ue, ve)),
			(Pe = new WebGLInfo()),
			(ye = new WebGLProperties()),
			(ge = new WebGLTextures($, ue, ce, ye, ve, W, Pe)),
			(ze = new WebGLCubeMaps(p)),
			(Be = new WebGLCubeUVMaps(p)),
			(ke = new WebGLAttributes($, ve)),
			(U = new WebGLBindingStates($, ue, ke, ve)),
			($e = new WebGLGeometries($, ke, Pe, U)),
			(Fe = new WebGLObjects($, $e, ke, Pe)),
			(ne = new WebGLMorphtargets($, ve, ge)),
			(y = new WebGLClipping(ye)),
			(Re = new WebGLPrograms(p, ze, Be, ue, ve, U, y)),
			(je = new WebGLMaterials(p, ye)),
			(Xe = new WebGLRenderLists()),
			(w = new WebGLRenderStates(ue, ve)),
			(Q = new WebGLBackground(p, ze, Be, ce, Fe, u, o)),
			(k = new WebGLShadowMap(p, Fe, ve)),
			(oe = new WebGLUniformsGroups($, Pe, ve, ce)),
			(se = new WebGLBufferRenderer($, ue, Pe, ve)),
			(L = new WebGLIndexedBufferRenderer($, ue, Pe, ve)),
			(Pe.programs = Re.programs),
			(p.capabilities = ve),
			(p.extensions = ue),
			(p.properties = ye),
			(p.renderLists = Xe),
			(p.shadowMap = k),
			(p.state = ce),
			(p.info = Pe);
	}
	he();
	const le = new WebXRManager(p, $);
	(this.xr = le),
		(this.getContext = function () {
			return $;
		}),
		(this.getContextAttributes = function () {
			return $.getContextAttributes();
		}),
		(this.forceContextLoss = function () {
			const M = ue.get('WEBGL_lose_context');
			M && M.loseContext();
		}),
		(this.forceContextRestore = function () {
			const M = ue.get('WEBGL_lose_context');
			M && M.restoreContext();
		}),
		(this.getPixelRatio = function () {
			return z;
		}),
		(this.setPixelRatio = function (M) {
			M !== void 0 && ((z = M), this.setSize(C, P, !1));
		}),
		(this.getSize = function (M) {
			return M.set(C, P);
		}),
		(this.setSize = function (M, O, G) {
			if (le.isPresenting) {
				console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			(C = M), (P = O), (e.width = Math.floor(M * z)), (e.height = Math.floor(O * z)), G !== !1 && ((e.style.width = M + 'px'), (e.style.height = O + 'px')), this.setViewport(0, 0, M, O);
		}),
		(this.getDrawingBufferSize = function (M) {
			return M.set(C * z, P * z).floor();
		}),
		(this.setDrawingBufferSize = function (M, O, G) {
			(C = M), (P = O), (z = G), (e.width = Math.floor(M * G)), (e.height = Math.floor(O * G)), this.setViewport(0, 0, M, O);
		}),
		(this.getCurrentViewport = function (M) {
			return M.copy(E);
		}),
		(this.getViewport = function (M) {
			return M.copy(I);
		}),
		(this.setViewport = function (M, O, G, F) {
			M.isVector4 ? I.set(M.x, M.y, M.z, M.w) : I.set(M, O, G, F), ce.viewport(E.copy(I).multiplyScalar(z).floor());
		}),
		(this.getScissor = function (M) {
			return M.copy(N);
		}),
		(this.setScissor = function (M, O, G, F) {
			M.isVector4 ? N.set(M.x, M.y, M.z, M.w) : N.set(M, O, G, F), ce.scissor(A.copy(N).multiplyScalar(z).floor());
		}),
		(this.getScissorTest = function () {
			return j;
		}),
		(this.setScissorTest = function (M) {
			ce.setScissorTest((j = M));
		}),
		(this.setOpaqueSort = function (M) {
			Y = M;
		}),
		(this.setTransparentSort = function (M) {
			D = M;
		}),
		(this.getClearColor = function (M) {
			return M.copy(Q.getClearColor());
		}),
		(this.setClearColor = function () {
			Q.setClearColor.apply(Q, arguments);
		}),
		(this.getClearAlpha = function () {
			return Q.getClearAlpha();
		}),
		(this.setClearAlpha = function () {
			Q.setClearAlpha.apply(Q, arguments);
		}),
		(this.clear = function (M = !0, O = !0, G = !0) {
			let F = 0;
			M && (F |= 16384), O && (F |= 256), G && (F |= 1024), $.clear(F);
		}),
		(this.clearColor = function () {
			this.clear(!0, !1, !1);
		}),
		(this.clearDepth = function () {
			this.clear(!1, !0, !1);
		}),
		(this.clearStencil = function () {
			this.clear(!1, !1, !0);
		}),
		(this.dispose = function () {
			e.removeEventListener('webglcontextlost', pe, !1), e.removeEventListener('webglcontextrestored', de, !1), e.removeEventListener('webglcontextcreationerror', Se, !1), Xe.dispose(), w.dispose(), ye.dispose(), ze.dispose(), Be.dispose(), Fe.dispose(), U.dispose(), oe.dispose(), Re.dispose(), le.dispose(), le.removeEventListener('sessionstart', ae), le.removeEventListener('sessionend', fe), ee && (ee.dispose(), (ee = null)), De.stop();
		});
	function pe(M) {
		M.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (f = !0);
	}
	function de() {
		console.log('THREE.WebGLRenderer: Context Restored.'), (f = !1);
		const M = Pe.autoReset,
			O = k.enabled,
			G = k.autoUpdate,
			F = k.needsUpdate,
			X = k.type;
		he(), (Pe.autoReset = M), (k.enabled = O), (k.autoUpdate = G), (k.needsUpdate = F), (k.type = X);
	}
	function Se(M) {
		console.error('THREE.WebGLRenderer: A WebGL context could not be created. Reason: ', M.statusMessage);
	}
	function we(M) {
		const O = M.target;
		O.removeEventListener('dispose', we), Oe(O);
	}
	function Oe(M) {
		R(M), ye.remove(M);
	}
	function R(M) {
		const O = ye.get(M).programs;
		O !== void 0 &&
			(O.forEach(function (G) {
				Re.releaseProgram(G);
			}),
			M.isShaderMaterial && Re.releaseShaderCache(M));
	}
	(this.renderBufferDirect = function (M, O, G, F, X, me) {
		O === null && (O = te);
		const xe = X.isMesh && X.matrixWorld.determinant() < 0,
			be = ht(M, O, G, F, X);
		ce.setMaterial(F, xe);
		let Me = G.index,
			Le = 1;
		F.wireframe === !0 && ((Me = $e.getWireframeAttribute(G)), (Le = 2));
		const Ce = G.drawRange,
			Ee = G.attributes.position;
		let Ue = Ce.start * Le,
			qe = (Ce.start + Ce.count) * Le;
		me !== null && ((Ue = Math.max(Ue, me.start * Le)), (qe = Math.min(qe, (me.start + me.count) * Le))), Me !== null ? ((Ue = Math.max(Ue, 0)), (qe = Math.min(qe, Me.count))) : Ee != null && ((Ue = Math.max(Ue, 0)), (qe = Math.min(qe, Ee.count)));
		const Je = qe - Ue;
		if (Je < 0 || Je === 1 / 0) return;
		U.setup(X, F, be, G, Me);
		let et,
			Ne = se;
		if ((Me !== null && ((et = ke.get(Me)), (Ne = L), Ne.setIndex(et)), X.isMesh)) F.wireframe === !0 ? (ce.setLineWidth(F.wireframeLinewidth * re()), Ne.setMode(1)) : Ne.setMode(4);
		else if (X.isLine) {
			let Ae = F.linewidth;
			Ae === void 0 && (Ae = 1), ce.setLineWidth(Ae * re()), X.isLineSegments ? Ne.setMode(1) : X.isLineLoop ? Ne.setMode(2) : Ne.setMode(3);
		} else X.isPoints ? Ne.setMode(0) : X.isSprite && Ne.setMode(4);
		if (X.isInstancedMesh) Ne.renderInstances(Ue, Je, X.count);
		else if (G.isInstancedBufferGeometry) {
			const Ae = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0,
				rt = Math.min(G.instanceCount, Ae);
			Ne.renderInstances(Ue, Je, rt);
		} else Ne.render(Ue, Je);
	}),
		(this.compile = function (M, O) {
			function G(F, X, me) {
				F.transparent === !0 && F.side === TwoPassDoubleSide ? ((F.side = BackSide), (F.needsUpdate = !0), Ke(F, X, me), (F.side = FrontSide), (F.needsUpdate = !0), Ke(F, X, me), (F.side = TwoPassDoubleSide)) : Ke(F, X, me);
			}
			(d = w.get(M)),
				d.init(),
				g.push(d),
				M.traverseVisible(function (F) {
					F.isLight && F.layers.test(O.layers) && (d.pushLight(F), F.castShadow && d.pushShadow(F));
				}),
				d.setupLights(p.physicallyCorrectLights),
				M.traverse(function (F) {
					const X = F.material;
					if (X)
						if (Array.isArray(X))
							for (let me = 0; me < X.length; me++) {
								const xe = X[me];
								G(xe, M, F);
							}
						else G(X, M, F);
				}),
				g.pop(),
				(d = null);
		});
	let V = null;
	function J(M) {
		V && V(M);
	}
	function ae() {
		De.stop();
	}
	function fe() {
		De.start();
	}
	const De = new WebGLAnimation();
	De.setAnimationLoop(J),
		typeof self < 'u' && De.setContext(self),
		(this.setAnimationLoop = function (M) {
			(V = M), le.setAnimationLoop(M), M === null ? De.stop() : De.start();
		}),
		le.addEventListener('sessionstart', ae),
		le.addEventListener('sessionend', fe),
		(this.render = function (M, O) {
			if (O !== void 0 && O.isCamera !== !0) {
				console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
				return;
			}
			if (f === !0) return;
			M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), le.enabled === !0 && le.isPresenting === !0 && (le.cameraAutoUpdate === !0 && le.updateCamera(O), (O = le.getCamera())), M.isScene === !0 && M.onBeforeRender(p, M, O, x), (d = w.get(M, g.length)), d.init(), g.push(d), B.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), K.setFromProjectionMatrix(B), (ie = this.localClippingEnabled), (q = y.init(this.clippingPlanes, ie, O)), (h = Xe.get(M, m.length)), h.init(), m.push(h), Ve(M, O, 0, p.sortObjects), h.finish(), p.sortObjects === !0 && h.sort(Y, D), q === !0 && y.beginShadows();
			const G = d.state.shadowsArray;
			if ((k.render(G, M, O), q === !0 && y.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(h, M), d.setupLights(p.physicallyCorrectLights), O.isArrayCamera)) {
				const F = O.cameras;
				for (let X = 0, me = F.length; X < me; X++) {
					const xe = F[X];
					He(h, M, xe, xe.viewport);
				}
			} else He(h, M, O);
			x !== null && (ge.updateMultisampleRenderTarget(x), ge.updateRenderTargetMipmap(x)), M.isScene === !0 && M.onAfterRender(p, M, O), U.resetDefaultState(), (S = -1), (b = null), g.pop(), g.length > 0 ? (d = g[g.length - 1]) : (d = null), m.pop(), m.length > 0 ? (h = m[m.length - 1]) : (h = null);
		});
	function Ve(M, O, G, F) {
		if (M.visible === !1) return;
		if (M.layers.test(O.layers)) {
			if (M.isGroup) G = M.renderOrder;
			else if (M.isLOD) M.autoUpdate === !0 && M.update(O);
			else if (M.isLight) d.pushLight(M), M.castShadow && d.pushShadow(M);
			else if (M.isSprite) {
				if (!M.frustumCulled || K.intersectsSprite(M)) {
					F && Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);
					const xe = Fe.update(M),
						be = M.material;
					be.visible && h.push(M, xe, be, G, Z.z, null);
				}
			} else if ((M.isMesh || M.isLine || M.isPoints) && (M.isSkinnedMesh && M.skeleton.frame !== Pe.render.frame && (M.skeleton.update(), (M.skeleton.frame = Pe.render.frame)), !M.frustumCulled || K.intersectsObject(M))) {
				F && Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);
				const xe = Fe.update(M),
					be = M.material;
				if (Array.isArray(be)) {
					const Me = xe.groups;
					for (let Le = 0, Ce = Me.length; Le < Ce; Le++) {
						const Ee = Me[Le],
							Ue = be[Ee.materialIndex];
						Ue && Ue.visible && h.push(M, xe, Ue, G, Z.z, Ee);
					}
				} else be.visible && h.push(M, xe, be, G, Z.z, null);
			}
		}
		const me = M.children;
		for (let xe = 0, be = me.length; xe < be; xe++) Ve(me[xe], O, G, F);
	}
	function He(M, O, G, F) {
		const X = M.opaque,
			me = M.transmissive,
			xe = M.transparent;
		d.setupLightsView(G), me.length > 0 && Qe(X, O, G), F && ce.viewport(E.copy(F)), X.length > 0 && Ie(X, O, G), me.length > 0 && Ie(me, O, G), xe.length > 0 && Ie(xe, O, G), ce.buffers.depth.setTest(!0), ce.buffers.depth.setMask(!0), ce.buffers.color.setMask(!0), ce.setPolygonOffset(!1);
	}
	function Qe(M, O, G) {
		const F = ve.isWebGL2;
		ee === null && (ee = new WebGLRenderTarget(1, 1, { generateMipmaps: !0, type: ue.has('EXT_color_buffer_half_float') ? HalfFloatType : UnsignedByteType, minFilter: LinearMipmapLinearFilter, samples: F && r === !0 ? 4 : 0 })), p.getDrawingBufferSize(H), F ? ee.setSize(H.x, H.y) : ee.setSize(floorPowerOfTwo(H.x), floorPowerOfTwo(H.y));
		const X = p.getRenderTarget();
		p.setRenderTarget(ee), p.clear();
		const me = p.toneMapping;
		(p.toneMapping = NoToneMapping), Ie(M, O, G), (p.toneMapping = me), ge.updateMultisampleRenderTarget(ee), ge.updateRenderTargetMipmap(ee), p.setRenderTarget(X);
	}
	function Ie(M, O, G) {
		const F = O.isScene === !0 ? O.overrideMaterial : null;
		for (let X = 0, me = M.length; X < me; X++) {
			const xe = M[X],
				be = xe.object,
				Me = xe.geometry,
				Le = F === null ? xe.material : F,
				Ce = xe.group;
			be.layers.test(G.layers) && Ze(be, O, G, Me, Le, Ce);
		}
	}
	function Ze(M, O, G, F, X, me) {
		M.onBeforeRender(p, O, G, F, X, me), M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), X.onBeforeRender(p, O, G, F, M, me), X.transparent === !0 && X.side === TwoPassDoubleSide ? ((X.side = BackSide), (X.needsUpdate = !0), p.renderBufferDirect(G, O, F, X, M, me), (X.side = FrontSide), (X.needsUpdate = !0), p.renderBufferDirect(G, O, F, X, M, me), (X.side = TwoPassDoubleSide)) : p.renderBufferDirect(G, O, F, X, M, me), M.onAfterRender(p, O, G, F, X, me);
	}
	function Ke(M, O, G) {
		O.isScene !== !0 && (O = te);
		const F = ye.get(M),
			X = d.state.lights,
			me = d.state.shadowsArray,
			xe = X.state.version,
			be = Re.getParameters(M, X.state, me, O, G),
			Me = Re.getProgramCacheKey(be);
		let Le = F.programs;
		(F.environment = M.isMeshStandardMaterial ? O.environment : null), (F.fog = O.fog), (F.envMap = (M.isMeshStandardMaterial ? Be : ze).get(M.envMap || F.environment)), Le === void 0 && (M.addEventListener('dispose', we), (Le = new Map()), (F.programs = Le));
		let Ce = Le.get(Me);
		if (Ce !== void 0) {
			if (F.currentProgram === Ce && F.lightsStateVersion === xe) return lt(M, be), Ce;
		} else (be.uniforms = Re.getUniforms(M)), M.onBuild(G, be, p), M.onBeforeCompile(be, p), (Ce = Re.acquireProgram(be, Me)), Le.set(Me, Ce), (F.uniforms = be.uniforms);
		const Ee = F.uniforms;
		((!M.isShaderMaterial && !M.isRawShaderMaterial) || M.clipping === !0) && (Ee.clippingPlanes = y.uniform),
			lt(M, be),
			(F.needsLights = ft(M)),
			(F.lightsStateVersion = xe),
			F.needsLights && ((Ee.ambientLightColor.value = X.state.ambient), (Ee.lightProbe.value = X.state.probe), (Ee.directionalLights.value = X.state.directional), (Ee.directionalLightShadows.value = X.state.directionalShadow), (Ee.spotLights.value = X.state.spot), (Ee.spotLightShadows.value = X.state.spotShadow), (Ee.rectAreaLights.value = X.state.rectArea), (Ee.ltc_1.value = X.state.rectAreaLTC1), (Ee.ltc_2.value = X.state.rectAreaLTC2), (Ee.pointLights.value = X.state.point), (Ee.pointLightShadows.value = X.state.pointShadow), (Ee.hemisphereLights.value = X.state.hemi), (Ee.directionalShadowMap.value = X.state.directionalShadowMap), (Ee.directionalShadowMatrix.value = X.state.directionalShadowMatrix), (Ee.spotShadowMap.value = X.state.spotShadowMap), (Ee.spotLightMatrix.value = X.state.spotLightMatrix), (Ee.spotLightMap.value = X.state.spotLightMap), (Ee.pointShadowMap.value = X.state.pointShadowMap), (Ee.pointShadowMatrix.value = X.state.pointShadowMatrix));
		const Ue = Ce.getUniforms(),
			qe = WebGLUniforms.seqWithValue(Ue.seq, Ee);
		return (F.currentProgram = Ce), (F.uniformsList = qe), Ce;
	}
	function lt(M, O) {
		const G = ye.get(M);
		(G.outputEncoding = O.outputEncoding), (G.instancing = O.instancing), (G.skinning = O.skinning), (G.morphTargets = O.morphTargets), (G.morphNormals = O.morphNormals), (G.morphColors = O.morphColors), (G.morphTargetsCount = O.morphTargetsCount), (G.numClippingPlanes = O.numClippingPlanes), (G.numIntersection = O.numClipIntersection), (G.vertexAlphas = O.vertexAlphas), (G.vertexTangents = O.vertexTangents), (G.toneMapping = O.toneMapping);
	}
	function ht(M, O, G, F, X) {
		O.isScene !== !0 && (O = te), ge.resetTextureUnits();
		const me = O.fog,
			xe = F.isMeshStandardMaterial ? O.environment : null,
			be = x === null ? p.outputEncoding : x.isXRRenderTarget === !0 ? x.texture.encoding : LinearEncoding,
			Me = (F.isMeshStandardMaterial ? Be : ze).get(F.envMap || xe),
			Le = F.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
			Ce = !!F.normalMap && !!G.attributes.tangent,
			Ee = !!G.morphAttributes.position,
			Ue = !!G.morphAttributes.normal,
			qe = !!G.morphAttributes.color,
			Je = F.toneMapped ? p.toneMapping : NoToneMapping,
			et = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color,
			Ne = et !== void 0 ? et.length : 0,
			Ae = ye.get(F),
			rt = d.state.lights;
		if (q === !0 && (ie === !0 || M !== b)) {
			const Ye = M === b && F.id === S;
			y.setState(F, M, Ye);
		}
		let Ge = !1;
		F.version === Ae.__version ? ((Ae.needsLights && Ae.lightsStateVersion !== rt.state.version) || Ae.outputEncoding !== be || (X.isInstancedMesh && Ae.instancing === !1) || (!X.isInstancedMesh && Ae.instancing === !0) || (X.isSkinnedMesh && Ae.skinning === !1) || (!X.isSkinnedMesh && Ae.skinning === !0) || Ae.envMap !== Me || (F.fog === !0 && Ae.fog !== me) || (Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== y.numPlanes || Ae.numIntersection !== y.numIntersection)) || Ae.vertexAlphas !== Le || Ae.vertexTangents !== Ce || Ae.morphTargets !== Ee || Ae.morphNormals !== Ue || Ae.morphColors !== qe || Ae.toneMapping !== Je || (ve.isWebGL2 === !0 && Ae.morphTargetsCount !== Ne)) && (Ge = !0) : ((Ge = !0), (Ae.__version = F.version));
		let tt = Ae.currentProgram;
		Ge === !0 && (tt = Ke(F, O, X));
		let ct = !1,
			nt = !1,
			st = !1;
		const We = tt.getUniforms(),
			it = Ae.uniforms;
		if ((ce.useProgram(tt.program) && ((ct = !0), (nt = !0), (st = !0)), F.id !== S && ((S = F.id), (nt = !0)), ct || b !== M)) {
			if ((We.setValue($, 'projectionMatrix', M.projectionMatrix), ve.logarithmicDepthBuffer && We.setValue($, 'logDepthBufFC', 2 / (Math.log(M.far + 1) / Math.LN2)), b !== M && ((b = M), (nt = !0), (st = !0)), F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap)) {
				const Ye = We.map.cameraPosition;
				Ye !== void 0 && Ye.setValue($, Z.setFromMatrixPosition(M.matrixWorld));
			}
			(F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && We.setValue($, 'isOrthographic', M.isOrthographicCamera === !0), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial || F.isShadowMaterial || X.isSkinnedMesh) && We.setValue($, 'viewMatrix', M.matrixWorldInverse);
		}
		if (X.isSkinnedMesh) {
			We.setOptional($, X, 'bindMatrix'), We.setOptional($, X, 'bindMatrixInverse');
			const Ye = X.skeleton;
			Ye && (ve.floatVertexTextures ? (Ye.boneTexture === null && Ye.computeBoneTexture(), We.setValue($, 'boneTexture', Ye.boneTexture, ge), We.setValue($, 'boneTextureSize', Ye.boneTextureSize)) : console.warn('THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'));
		}
		const ot = G.morphAttributes;
		if (
			((ot.position !== void 0 || ot.normal !== void 0 || (ot.color !== void 0 && ve.isWebGL2 === !0)) && ne.update(X, G, F, tt),
			(nt || Ae.receiveShadow !== X.receiveShadow) && ((Ae.receiveShadow = X.receiveShadow), We.setValue($, 'receiveShadow', X.receiveShadow)),
			F.isMeshGouraudMaterial && F.envMap !== null && ((it.envMap.value = Me), (it.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === !1 ? -1 : 1)),
			nt && (We.setValue($, 'toneMappingExposure', p.toneMappingExposure), Ae.needsLights && dt(it, st), me && F.fog === !0 && je.refreshFogUniforms(it, me), je.refreshMaterialUniforms(it, F, z, P, ee), WebGLUniforms.upload($, Ae.uniformsList, it, ge)),
			F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (WebGLUniforms.upload($, Ae.uniformsList, it, ge), (F.uniformsNeedUpdate = !1)),
			F.isSpriteMaterial && We.setValue($, 'center', X.center),
			We.setValue($, 'modelViewMatrix', X.modelViewMatrix),
			We.setValue($, 'normalMatrix', X.normalMatrix),
			We.setValue($, 'modelMatrix', X.matrixWorld),
			F.isShaderMaterial || F.isRawShaderMaterial)
		) {
			const Ye = F.uniformsGroups;
			for (let at = 0, pt = Ye.length; at < pt; at++)
				if (ve.isWebGL2) {
					const ut = Ye[at];
					oe.update(ut, tt), oe.bind(ut, tt);
				} else console.warn('THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.');
		}
		return tt;
	}
	function dt(M, O) {
		(M.ambientLightColor.needsUpdate = O), (M.lightProbe.needsUpdate = O), (M.directionalLights.needsUpdate = O), (M.directionalLightShadows.needsUpdate = O), (M.pointLights.needsUpdate = O), (M.pointLightShadows.needsUpdate = O), (M.spotLights.needsUpdate = O), (M.spotLightShadows.needsUpdate = O), (M.rectAreaLights.needsUpdate = O), (M.hemisphereLights.needsUpdate = O);
	}
	function ft(M) {
		return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || (M.isShaderMaterial && M.lights === !0);
	}
	(this.getActiveCubeFace = function () {
		return _;
	}),
		(this.getActiveMipmapLevel = function () {
			return T;
		}),
		(this.getRenderTarget = function () {
			return x;
		}),
		(this.setRenderTargetTextures = function (M, O, G) {
			(ye.get(M.texture).__webglTexture = O), (ye.get(M.depthTexture).__webglTexture = G);
			const F = ye.get(M);
			(F.__hasExternalTextures = !0), F.__hasExternalTextures && ((F.__autoAllocateDepthBuffer = G === void 0), F.__autoAllocateDepthBuffer || (ue.has('WEBGL_multisampled_render_to_texture') === !0 && (console.warn('THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'), (F.__useRenderToTexture = !1))));
		}),
		(this.setRenderTargetFramebuffer = function (M, O) {
			const G = ye.get(M);
			(G.__webglFramebuffer = O), (G.__useDefaultFramebuffer = O === void 0);
		}),
		(this.setRenderTarget = function (M, O = 0, G = 0) {
			(x = M), (_ = O), (T = G);
			let F = !0,
				X = null,
				me = !1,
				xe = !1;
			if (M) {
				const Me = ye.get(M);
				Me.__useDefaultFramebuffer !== void 0 ? (ce.bindFramebuffer(36160, null), (F = !1)) : Me.__webglFramebuffer === void 0 ? ge.setupRenderTarget(M) : Me.__hasExternalTextures && ge.rebindTextures(M, ye.get(M.texture).__webglTexture, ye.get(M.depthTexture).__webglTexture);
				const Le = M.texture;
				(Le.isData3DTexture || Le.isDataArrayTexture || Le.isCompressedArrayTexture) && (xe = !0);
				const Ce = ye.get(M).__webglFramebuffer;
				M.isWebGLCubeRenderTarget ? ((X = Ce[O]), (me = !0)) : ve.isWebGL2 && M.samples > 0 && ge.useMultisampledRTT(M) === !1 ? (X = ye.get(M).__webglMultisampledFramebuffer) : (X = Ce), E.copy(M.viewport), A.copy(M.scissor), (v = M.scissorTest);
			} else E.copy(I).multiplyScalar(z).floor(), A.copy(N).multiplyScalar(z).floor(), (v = j);
			if ((ce.bindFramebuffer(36160, X) && ve.drawBuffers && F && ce.drawBuffers(M, X), ce.viewport(E), ce.scissor(A), ce.setScissorTest(v), me)) {
				const Me = ye.get(M.texture);
				$.framebufferTexture2D(36160, 36064, 34069 + O, Me.__webglTexture, G);
			} else if (xe) {
				const Me = ye.get(M.texture),
					Le = O || 0;
				$.framebufferTextureLayer(36160, 36064, Me.__webglTexture, G || 0, Le);
			}
			S = -1;
		}),
		(this.readRenderTargetPixels = function (M, O, G, F, X, me, xe) {
			if (!(M && M.isWebGLRenderTarget)) {
				console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
				return;
			}
			let be = ye.get(M).__webglFramebuffer;
			if ((M.isWebGLCubeRenderTarget && xe !== void 0 && (be = be[xe]), be)) {
				ce.bindFramebuffer(36160, be);
				try {
					const Me = M.texture,
						Le = Me.format,
						Ce = Me.type;
					if (Le !== RGBAFormat && W.convert(Le) !== $.getParameter(35739)) {
						console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');
						return;
					}
					const Ee = Ce === HalfFloatType && (ue.has('EXT_color_buffer_half_float') || (ve.isWebGL2 && ue.has('EXT_color_buffer_float')));
					if (Ce !== UnsignedByteType && W.convert(Ce) !== $.getParameter(35738) && !(Ce === FloatType && (ve.isWebGL2 || ue.has('OES_texture_float') || ue.has('WEBGL_color_buffer_float'))) && !Ee) {
						console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');
						return;
					}
					O >= 0 && O <= M.width - F && G >= 0 && G <= M.height - X && $.readPixels(O, G, F, X, W.convert(Le), W.convert(Ce), me);
				} finally {
					const Me = x !== null ? ye.get(x).__webglFramebuffer : null;
					ce.bindFramebuffer(36160, Me);
				}
			}
		}),
		(this.copyFramebufferToTexture = function (M, O, G = 0) {
			const F = Math.pow(2, -G),
				X = Math.floor(O.image.width * F),
				me = Math.floor(O.image.height * F);
			ge.setTexture2D(O, 0), $.copyTexSubImage2D(3553, G, 0, 0, M.x, M.y, X, me), ce.unbindTexture();
		}),
		(this.copyTextureToTexture = function (M, O, G, F = 0) {
			const X = O.image.width,
				me = O.image.height,
				xe = W.convert(G.format),
				be = W.convert(G.type);
			ge.setTexture2D(G, 0), $.pixelStorei(37440, G.flipY), $.pixelStorei(37441, G.premultiplyAlpha), $.pixelStorei(3317, G.unpackAlignment), O.isDataTexture ? $.texSubImage2D(3553, F, M.x, M.y, X, me, xe, be, O.image.data) : O.isCompressedTexture ? $.compressedTexSubImage2D(3553, F, M.x, M.y, O.mipmaps[0].width, O.mipmaps[0].height, xe, O.mipmaps[0].data) : $.texSubImage2D(3553, F, M.x, M.y, xe, be, O.image), F === 0 && G.generateMipmaps && $.generateMipmap(3553), ce.unbindTexture();
		}),
		(this.copyTextureToTexture3D = function (M, O, G, F, X = 0) {
			if (p.isWebGL1Renderer) {
				console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.');
				return;
			}
			const me = M.max.x - M.min.x + 1,
				xe = M.max.y - M.min.y + 1,
				be = M.max.z - M.min.z + 1,
				Me = W.convert(F.format),
				Le = W.convert(F.type);
			let Ce;
			if (F.isData3DTexture) ge.setTexture3D(F, 0), (Ce = 32879);
			else if (F.isDataArrayTexture) ge.setTexture2DArray(F, 0), (Ce = 35866);
			else {
				console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.');
				return;
			}
			$.pixelStorei(37440, F.flipY), $.pixelStorei(37441, F.premultiplyAlpha), $.pixelStorei(3317, F.unpackAlignment);
			const Ee = $.getParameter(3314),
				Ue = $.getParameter(32878),
				qe = $.getParameter(3316),
				Je = $.getParameter(3315),
				et = $.getParameter(32877),
				Ne = G.isCompressedTexture ? G.mipmaps[0] : G.image;
			$.pixelStorei(3314, Ne.width), $.pixelStorei(32878, Ne.height), $.pixelStorei(3316, M.min.x), $.pixelStorei(3315, M.min.y), $.pixelStorei(32877, M.min.z), G.isDataTexture || G.isData3DTexture ? $.texSubImage3D(Ce, X, O.x, O.y, O.z, me, xe, be, Me, Le, Ne.data) : G.isCompressedArrayTexture ? (console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'), $.compressedTexSubImage3D(Ce, X, O.x, O.y, O.z, me, xe, be, Me, Ne.data)) : $.texSubImage3D(Ce, X, O.x, O.y, O.z, me, xe, be, Me, Le, Ne), $.pixelStorei(3314, Ee), $.pixelStorei(32878, Ue), $.pixelStorei(3316, qe), $.pixelStorei(3315, Je), $.pixelStorei(32877, et), X === 0 && F.generateMipmaps && $.generateMipmap(Ce), ce.unbindTexture();
		}),
		(this.initTexture = function (M) {
			M.isCubeTexture ? ge.setTextureCube(M, 0) : M.isData3DTexture ? ge.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? ge.setTexture2DArray(M, 0) : ge.setTexture2D(M, 0), ce.unbindTexture();
		}),
		(this.resetState = function () {
			(_ = 0), (T = 0), (x = null), ce.reset(), U.reset();
		}),
		typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
}
class WebGL1Renderer extends WebGLRenderer {}
WebGL1Renderer.prototype.isWebGL1Renderer = !0;
class Scene extends Object3D {
	constructor() {
		super(), (this.isScene = !0), (this.type = 'Scene'), (this.background = null), (this.environment = null), (this.fog = null), (this.backgroundBlurriness = 0), (this.backgroundIntensity = 1), (this.overrideMaterial = null), typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), (this.backgroundBlurriness = e.backgroundBlurriness), (this.backgroundIntensity = e.backgroundIntensity), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), (this.matrixAutoUpdate = e.matrixAutoUpdate), this;
	}
	toJSON(e) {
		const t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
	}
	get autoUpdate() {
		return console.warn('THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'), this.matrixWorldAutoUpdate;
	}
	set autoUpdate(e) {
		console.warn('THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144.'), (this.matrixWorldAutoUpdate = e);
	}
}
class DataTexture extends Texture {
	constructor(e = null, t = 1, i = 1, n, r, o, a, c, l = NearestFilter, u = NearestFilter, h, d) {
		super(null, o, a, c, l, u, n, r, h, d), (this.isDataTexture = !0), (this.image = { data: e, width: t, height: i }), (this.generateMipmaps = !1), (this.flipY = !1), (this.unpackAlignment = 1);
	}
}
class InstancedBufferAttribute extends BufferAttribute {
	constructor(e, t, i, n = 1) {
		super(e, t, i), (this.isInstancedBufferAttribute = !0), (this.meshPerAttribute = n);
	}
	copy(e) {
		return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.meshPerAttribute = this.meshPerAttribute), (e.isInstancedBufferAttribute = !0), e;
	}
}
class LineBasicMaterial extends Material {
	constructor(e) {
		super(), (this.isLineBasicMaterial = !0), (this.type = 'LineBasicMaterial'), (this.color = new Color(16777215)), (this.linewidth = 1), (this.linecap = 'round'), (this.linejoin = 'round'), (this.fog = !0), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), (this.linewidth = e.linewidth), (this.linecap = e.linecap), (this.linejoin = e.linejoin), (this.fog = e.fog), this;
	}
}
const _start$1 = new Vector3(),
	_end$1 = new Vector3(),
	_inverseMatrix$1 = new Matrix4(),
	_ray$1 = new Ray(),
	_sphere$1 = new Sphere();
class Line extends Object3D {
	constructor(e = new BufferGeometry(), t = new LineBasicMaterial()) {
		super(), (this.isLine = !0), (this.type = 'Line'), (this.geometry = e), (this.material = t), this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), (this.material = e.material), (this.geometry = e.geometry), this;
	}
	computeLineDistances() {
		const e = this.geometry;
		if (e.index === null) {
			const t = e.attributes.position,
				i = [0];
			for (let n = 1, r = t.count; n < r; n++) _start$1.fromBufferAttribute(t, n - 1), _end$1.fromBufferAttribute(t, n), (i[n] = i[n - 1]), (i[n] += _start$1.distanceTo(_end$1));
			e.setAttribute('lineDistance', new Float32BufferAttribute(i, 1));
		} else console.warn('THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
		return this;
	}
	raycast(e, t) {
		const i = this.geometry,
			n = this.matrixWorld,
			r = e.params.Line.threshold,
			o = i.drawRange;
		if ((i.boundingSphere === null && i.computeBoundingSphere(), _sphere$1.copy(i.boundingSphere), _sphere$1.applyMatrix4(n), (_sphere$1.radius += r), e.ray.intersectsSphere(_sphere$1) === !1)) return;
		_inverseMatrix$1.copy(n).invert(), _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
		const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			c = a * a,
			l = new Vector3(),
			u = new Vector3(),
			h = new Vector3(),
			d = new Vector3(),
			m = this.isLineSegments ? 2 : 1,
			g = i.index,
			f = i.attributes.position;
		if (g !== null) {
			const _ = Math.max(0, o.start),
				T = Math.min(g.count, o.start + o.count);
			for (let x = _, S = T - 1; x < S; x += m) {
				const b = g.getX(x),
					E = g.getX(x + 1);
				if ((l.fromBufferAttribute(f, b), u.fromBufferAttribute(f, E), _ray$1.distanceSqToSegment(l, u, d, h) > c)) continue;
				d.applyMatrix4(this.matrixWorld);
				const v = e.ray.origin.distanceTo(d);
				v < e.near || v > e.far || t.push({ distance: v, point: h.clone().applyMatrix4(this.matrixWorld), index: x, face: null, faceIndex: null, object: this });
			}
		} else {
			const _ = Math.max(0, o.start),
				T = Math.min(f.count, o.start + o.count);
			for (let x = _, S = T - 1; x < S; x += m) {
				if ((l.fromBufferAttribute(f, x), u.fromBufferAttribute(f, x + 1), _ray$1.distanceSqToSegment(l, u, d, h) > c)) continue;
				d.applyMatrix4(this.matrixWorld);
				const E = e.ray.origin.distanceTo(d);
				E < e.near || E > e.far || t.push({ distance: E, point: h.clone().applyMatrix4(this.matrixWorld), index: x, face: null, faceIndex: null, object: this });
			}
		}
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			i = Object.keys(t);
		if (i.length > 0) {
			const n = t[i[0]];
			if (n !== void 0) {
				(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
				for (let r = 0, o = n.length; r < o; r++) {
					const a = n[r].name || String(r);
					this.morphTargetInfluences.push(0), (this.morphTargetDictionary[a] = r);
				}
			}
		}
	}
}
const _start = new Vector3(),
	_end = new Vector3();
class LineSegments extends Line {
	constructor(e, t) {
		super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
	}
	computeLineDistances() {
		const e = this.geometry;
		if (e.index === null) {
			const t = e.attributes.position,
				i = [];
			for (let n = 0, r = t.count; n < r; n += 2) _start.fromBufferAttribute(t, n), _end.fromBufferAttribute(t, n + 1), (i[n] = n === 0 ? 0 : i[n - 1]), (i[n + 1] = i[n] + _start.distanceTo(_end));
			e.setAttribute('lineDistance', new Float32BufferAttribute(i, 1));
		} else console.warn('THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
		return this;
	}
}
class PointsMaterial extends Material {
	constructor(e) {
		super(), (this.isPointsMaterial = !0), (this.type = 'PointsMaterial'), (this.color = new Color(16777215)), (this.map = null), (this.alphaMap = null), (this.size = 1), (this.sizeAttenuation = !0), (this.fog = !0), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), (this.map = e.map), (this.alphaMap = e.alphaMap), (this.size = e.size), (this.sizeAttenuation = e.sizeAttenuation), (this.fog = e.fog), this;
	}
}
const _inverseMatrix = new Matrix4(),
	_ray = new Ray(),
	_sphere = new Sphere(),
	_position$2 = new Vector3();
class Points extends Object3D {
	constructor(e = new BufferGeometry(), t = new PointsMaterial()) {
		super(), (this.isPoints = !0), (this.type = 'Points'), (this.geometry = e), (this.material = t), this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), (this.material = e.material), (this.geometry = e.geometry), this;
	}
	raycast(e, t) {
		const i = this.geometry,
			n = this.matrixWorld,
			r = e.params.Points.threshold,
			o = i.drawRange;
		if ((i.boundingSphere === null && i.computeBoundingSphere(), _sphere.copy(i.boundingSphere), _sphere.applyMatrix4(n), (_sphere.radius += r), e.ray.intersectsSphere(_sphere) === !1)) return;
		_inverseMatrix.copy(n).invert(), _ray.copy(e.ray).applyMatrix4(_inverseMatrix);
		const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			c = a * a,
			l = i.index,
			h = i.attributes.position;
		if (l !== null) {
			const d = Math.max(0, o.start),
				m = Math.min(l.count, o.start + o.count);
			for (let g = d, p = m; g < p; g++) {
				const f = l.getX(g);
				_position$2.fromBufferAttribute(h, f), testPoint(_position$2, f, c, n, e, t, this);
			}
		} else {
			const d = Math.max(0, o.start),
				m = Math.min(h.count, o.start + o.count);
			for (let g = d, p = m; g < p; g++) _position$2.fromBufferAttribute(h, g), testPoint(_position$2, g, c, n, e, t, this);
		}
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			i = Object.keys(t);
		if (i.length > 0) {
			const n = t[i[0]];
			if (n !== void 0) {
				(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
				for (let r = 0, o = n.length; r < o; r++) {
					const a = n[r].name || String(r);
					this.morphTargetInfluences.push(0), (this.morphTargetDictionary[a] = r);
				}
			}
		}
	}
}
function testPoint(s, e, t, i, n, r, o) {
	const a = _ray.distanceSqToPoint(s);
	if (a < t) {
		const c = new Vector3();
		_ray.closestPointToPoint(s, c), c.applyMatrix4(i);
		const l = n.ray.origin.distanceTo(c);
		if (l < n.near || l > n.far) return;
		r.push({ distance: l, distanceToRay: Math.sqrt(a), point: c, index: e, face: null, object: o });
	}
}
class Curve {
	constructor() {
		(this.type = 'Curve'), (this.arcLengthDivisions = 200);
	}
	getPoint() {
		return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
	}
	getPointAt(e, t) {
		const i = this.getUtoTmapping(e);
		return this.getPoint(i, t);
	}
	getPoints(e = 5) {
		const t = [];
		for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		const t = [];
		for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
		return t;
	}
	getLength() {
		const e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		const t = [];
		let i,
			n = this.getPoint(0),
			r = 0;
		t.push(0);
		for (let o = 1; o <= e; o++) (i = this.getPoint(o / e)), (r += i.distanceTo(n)), t.push(r), (n = i);
		return (this.cacheArcLengths = t), t;
	}
	updateArcLengths() {
		(this.needsUpdate = !0), this.getLengths();
	}
	getUtoTmapping(e, t) {
		const i = this.getLengths();
		let n = 0;
		const r = i.length;
		let o;
		t ? (o = t) : (o = e * i[r - 1]);
		let a = 0,
			c = r - 1,
			l;
		for (; a <= c; )
			if (((n = Math.floor(a + (c - a) / 2)), (l = i[n] - o), l < 0)) a = n + 1;
			else if (l > 0) c = n - 1;
			else {
				c = n;
				break;
			}
		if (((n = c), i[n] === o)) return n / (r - 1);
		const u = i[n],
			d = i[n + 1] - u,
			m = (o - u) / d;
		return (n + m) / (r - 1);
	}
	getTangent(e, t) {
		let n = e - 1e-4,
			r = e + 1e-4;
		n < 0 && (n = 0), r > 1 && (r = 1);
		const o = this.getPoint(n),
			a = this.getPoint(r),
			c = t || (o.isVector2 ? new Vector2() : new Vector3());
		return c.copy(a).sub(o).normalize(), c;
	}
	getTangentAt(e, t) {
		const i = this.getUtoTmapping(e);
		return this.getTangent(i, t);
	}
	computeFrenetFrames(e, t) {
		const i = new Vector3(),
			n = [],
			r = [],
			o = [],
			a = new Vector3(),
			c = new Matrix4();
		for (let m = 0; m <= e; m++) {
			const g = m / e;
			n[m] = this.getTangentAt(g, new Vector3());
		}
		(r[0] = new Vector3()), (o[0] = new Vector3());
		let l = Number.MAX_VALUE;
		const u = Math.abs(n[0].x),
			h = Math.abs(n[0].y),
			d = Math.abs(n[0].z);
		u <= l && ((l = u), i.set(1, 0, 0)), h <= l && ((l = h), i.set(0, 1, 0)), d <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), o[0].crossVectors(n[0], r[0]);
		for (let m = 1; m <= e; m++) {
			if (((r[m] = r[m - 1].clone()), (o[m] = o[m - 1].clone()), a.crossVectors(n[m - 1], n[m]), a.length() > Number.EPSILON)) {
				a.normalize();
				const g = Math.acos(clamp(n[m - 1].dot(n[m]), -1, 1));
				r[m].applyMatrix4(c.makeRotationAxis(a, g));
			}
			o[m].crossVectors(n[m], r[m]);
		}
		if (t === !0) {
			let m = Math.acos(clamp(r[0].dot(r[e]), -1, 1));
			(m /= e), n[0].dot(a.crossVectors(r[0], r[e])) > 0 && (m = -m);
			for (let g = 1; g <= e; g++) r[g].applyMatrix4(c.makeRotationAxis(n[g], m * g)), o[g].crossVectors(n[g], r[g]);
		}
		return { tangents: n, normals: r, binormals: o };
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return (this.arcLengthDivisions = e.arcLengthDivisions), this;
	}
	toJSON() {
		const e = { metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' } };
		return (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e;
	}
	fromJSON(e) {
		return (this.arcLengthDivisions = e.arcLengthDivisions), this;
	}
}
class EllipseCurve extends Curve {
	constructor(e = 0, t = 0, i = 1, n = 1, r = 0, o = Math.PI * 2, a = !1, c = 0) {
		super(), (this.isEllipseCurve = !0), (this.type = 'EllipseCurve'), (this.aX = e), (this.aY = t), (this.xRadius = i), (this.yRadius = n), (this.aStartAngle = r), (this.aEndAngle = o), (this.aClockwise = a), (this.aRotation = c);
	}
	getPoint(e, t) {
		const i = t || new Vector2(),
			n = Math.PI * 2;
		let r = this.aEndAngle - this.aStartAngle;
		const o = Math.abs(r) < Number.EPSILON;
		for (; r < 0; ) r += n;
		for (; r > n; ) r -= n;
		r < Number.EPSILON && (o ? (r = 0) : (r = n)), this.aClockwise === !0 && !o && (r === n ? (r = -n) : (r = r - n));
		const a = this.aStartAngle + e * r;
		let c = this.aX + this.xRadius * Math.cos(a),
			l = this.aY + this.yRadius * Math.sin(a);
		if (this.aRotation !== 0) {
			const u = Math.cos(this.aRotation),
				h = Math.sin(this.aRotation),
				d = c - this.aX,
				m = l - this.aY;
			(c = d * u - m * h + this.aX), (l = d * h + m * u + this.aY);
		}
		return i.set(c, l);
	}
	copy(e) {
		return super.copy(e), (this.aX = e.aX), (this.aY = e.aY), (this.xRadius = e.xRadius), (this.yRadius = e.yRadius), (this.aStartAngle = e.aStartAngle), (this.aEndAngle = e.aEndAngle), (this.aClockwise = e.aClockwise), (this.aRotation = e.aRotation), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.aX = this.aX), (e.aY = this.aY), (e.xRadius = this.xRadius), (e.yRadius = this.yRadius), (e.aStartAngle = this.aStartAngle), (e.aEndAngle = this.aEndAngle), (e.aClockwise = this.aClockwise), (e.aRotation = this.aRotation), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), (this.aX = e.aX), (this.aY = e.aY), (this.xRadius = e.xRadius), (this.yRadius = e.yRadius), (this.aStartAngle = e.aStartAngle), (this.aEndAngle = e.aEndAngle), (this.aClockwise = e.aClockwise), (this.aRotation = e.aRotation), this;
	}
}
class ArcCurve extends EllipseCurve {
	constructor(e, t, i, n, r, o) {
		super(e, t, i, i, n, r, o), (this.isArcCurve = !0), (this.type = 'ArcCurve');
	}
}
function CubicPoly() {
	let s = 0,
		e = 0,
		t = 0,
		i = 0;
	function n(r, o, a, c) {
		(s = r), (e = a), (t = -3 * r + 3 * o - 2 * a - c), (i = 2 * r - 2 * o + a + c);
	}
	return {
		initCatmullRom: function (r, o, a, c, l) {
			n(o, a, l * (a - r), l * (c - o));
		},
		initNonuniformCatmullRom: function (r, o, a, c, l, u, h) {
			let d = (o - r) / l - (a - r) / (l + u) + (a - o) / u,
				m = (a - o) / u - (c - o) / (u + h) + (c - a) / h;
			(d *= u), (m *= u), n(o, a, d, m);
		},
		calc: function (r) {
			const o = r * r,
				a = o * r;
			return s + e * r + t * o + i * a;
		},
	};
}
const tmp = new Vector3(),
	px = new CubicPoly(),
	py = new CubicPoly(),
	pz = new CubicPoly();
class CatmullRomCurve3 extends Curve {
	constructor(e = [], t = !1, i = 'centripetal', n = 0.5) {
		super(), (this.isCatmullRomCurve3 = !0), (this.type = 'CatmullRomCurve3'), (this.points = e), (this.closed = t), (this.curveType = i), (this.tension = n);
	}
	getPoint(e, t = new Vector3()) {
		const i = t,
			n = this.points,
			r = n.length,
			o = (r - (this.closed ? 0 : 1)) * e;
		let a = Math.floor(o),
			c = o - a;
		this.closed ? (a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r) : c === 0 && a === r - 1 && ((a = r - 2), (c = 1));
		let l, u;
		this.closed || a > 0 ? (l = n[(a - 1) % r]) : (tmp.subVectors(n[0], n[1]).add(n[0]), (l = tmp));
		const h = n[a % r],
			d = n[(a + 1) % r];
		if ((this.closed || a + 2 < r ? (u = n[(a + 2) % r]) : (tmp.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), (u = tmp)), this.curveType === 'centripetal' || this.curveType === 'chordal')) {
			const m = this.curveType === 'chordal' ? 0.5 : 0.25;
			let g = Math.pow(l.distanceToSquared(h), m),
				p = Math.pow(h.distanceToSquared(d), m),
				f = Math.pow(d.distanceToSquared(u), m);
			p < 1e-4 && (p = 1), g < 1e-4 && (g = p), f < 1e-4 && (f = p), px.initNonuniformCatmullRom(l.x, h.x, d.x, u.x, g, p, f), py.initNonuniformCatmullRom(l.y, h.y, d.y, u.y, g, p, f), pz.initNonuniformCatmullRom(l.z, h.z, d.z, u.z, g, p, f);
		} else this.curveType === 'catmullrom' && (px.initCatmullRom(l.x, h.x, d.x, u.x, this.tension), py.initCatmullRom(l.y, h.y, d.y, u.y, this.tension), pz.initCatmullRom(l.z, h.z, d.z, u.z, this.tension));
		return i.set(px.calc(c), py.calc(c), pz.calc(c)), i;
	}
	copy(e) {
		super.copy(e), (this.points = []);
		for (let t = 0, i = e.points.length; t < i; t++) {
			const n = e.points[t];
			this.points.push(n.clone());
		}
		return (this.closed = e.closed), (this.curveType = e.curveType), (this.tension = e.tension), this;
	}
	toJSON() {
		const e = super.toJSON();
		e.points = [];
		for (let t = 0, i = this.points.length; t < i; t++) {
			const n = this.points[t];
			e.points.push(n.toArray());
		}
		return (e.closed = this.closed), (e.curveType = this.curveType), (e.tension = this.tension), e;
	}
	fromJSON(e) {
		super.fromJSON(e), (this.points = []);
		for (let t = 0, i = e.points.length; t < i; t++) {
			const n = e.points[t];
			this.points.push(new Vector3().fromArray(n));
		}
		return (this.closed = e.closed), (this.curveType = e.curveType), (this.tension = e.tension), this;
	}
}
function CatmullRom(s, e, t, i, n) {
	const r = (i - e) * 0.5,
		o = (n - t) * 0.5,
		a = s * s,
		c = s * a;
	return (2 * t - 2 * i + r + o) * c + (-3 * t + 3 * i - 2 * r - o) * a + r * s + t;
}
function QuadraticBezierP0(s, e) {
	const t = 1 - s;
	return t * t * e;
}
function QuadraticBezierP1(s, e) {
	return 2 * (1 - s) * s * e;
}
function QuadraticBezierP2(s, e) {
	return s * s * e;
}
function QuadraticBezier(s, e, t, i) {
	return QuadraticBezierP0(s, e) + QuadraticBezierP1(s, t) + QuadraticBezierP2(s, i);
}
function CubicBezierP0(s, e) {
	const t = 1 - s;
	return t * t * t * e;
}
function CubicBezierP1(s, e) {
	const t = 1 - s;
	return 3 * t * t * s * e;
}
function CubicBezierP2(s, e) {
	return 3 * (1 - s) * s * s * e;
}
function CubicBezierP3(s, e) {
	return s * s * s * e;
}
function CubicBezier(s, e, t, i, n) {
	return CubicBezierP0(s, e) + CubicBezierP1(s, t) + CubicBezierP2(s, i) + CubicBezierP3(s, n);
}
class CubicBezierCurve extends Curve {
	constructor(e = new Vector2(), t = new Vector2(), i = new Vector2(), n = new Vector2()) {
		super(), (this.isCubicBezierCurve = !0), (this.type = 'CubicBezierCurve'), (this.v0 = e), (this.v1 = t), (this.v2 = i), (this.v3 = n);
	}
	getPoint(e, t = new Vector2()) {
		const i = t,
			n = this.v0,
			r = this.v1,
			o = this.v2,
			a = this.v3;
		return i.set(CubicBezier(e, n.x, r.x, o.x, a.x), CubicBezier(e, n.y, r.y, o.y, a.y)), i;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), (e.v3 = this.v3.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}
class CubicBezierCurve3 extends Curve {
	constructor(e = new Vector3(), t = new Vector3(), i = new Vector3(), n = new Vector3()) {
		super(), (this.isCubicBezierCurve3 = !0), (this.type = 'CubicBezierCurve3'), (this.v0 = e), (this.v1 = t), (this.v2 = i), (this.v3 = n);
	}
	getPoint(e, t = new Vector3()) {
		const i = t,
			n = this.v0,
			r = this.v1,
			o = this.v2,
			a = this.v3;
		return i.set(CubicBezier(e, n.x, r.x, o.x, a.x), CubicBezier(e, n.y, r.y, o.y, a.y), CubicBezier(e, n.z, r.z, o.z, a.z)), i;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), (e.v3 = this.v3.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}
class LineCurve extends Curve {
	constructor(e = new Vector2(), t = new Vector2()) {
		super(), (this.isLineCurve = !0), (this.type = 'LineCurve'), (this.v1 = e), (this.v2 = t);
	}
	getPoint(e, t = new Vector2()) {
		const i = t;
		return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t) {
		const i = t || new Vector2();
		return i.copy(this.v2).sub(this.v1).normalize(), i;
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}
class LineCurve3 extends Curve {
	constructor(e = new Vector3(), t = new Vector3()) {
		super(), (this.isLineCurve3 = !0), (this.type = 'LineCurve3'), (this.v1 = e), (this.v2 = t);
	}
	getPoint(e, t = new Vector3()) {
		const i = t;
		return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}
class QuadraticBezierCurve extends Curve {
	constructor(e = new Vector2(), t = new Vector2(), i = new Vector2()) {
		super(), (this.isQuadraticBezierCurve = !0), (this.type = 'QuadraticBezierCurve'), (this.v0 = e), (this.v1 = t), (this.v2 = i);
	}
	getPoint(e, t = new Vector2()) {
		const i = t,
			n = this.v0,
			r = this.v1,
			o = this.v2;
		return i.set(QuadraticBezier(e, n.x, r.x, o.x), QuadraticBezier(e, n.y, r.y, o.y)), i;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}
class QuadraticBezierCurve3 extends Curve {
	constructor(e = new Vector3(), t = new Vector3(), i = new Vector3()) {
		super(), (this.isQuadraticBezierCurve3 = !0), (this.type = 'QuadraticBezierCurve3'), (this.v0 = e), (this.v1 = t), (this.v2 = i);
	}
	getPoint(e, t = new Vector3()) {
		const i = t,
			n = this.v0,
			r = this.v1,
			o = this.v2;
		return i.set(QuadraticBezier(e, n.x, r.x, o.x), QuadraticBezier(e, n.y, r.y, o.y), QuadraticBezier(e, n.z, r.z, o.z)), i;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.v0 = this.v0.toArray()), (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}
class SplineCurve extends Curve {
	constructor(e = []) {
		super(), (this.isSplineCurve = !0), (this.type = 'SplineCurve'), (this.points = e);
	}
	getPoint(e, t = new Vector2()) {
		const i = t,
			n = this.points,
			r = (n.length - 1) * e,
			o = Math.floor(r),
			a = r - o,
			c = n[o === 0 ? o : o - 1],
			l = n[o],
			u = n[o > n.length - 2 ? n.length - 1 : o + 1],
			h = n[o > n.length - 3 ? n.length - 1 : o + 2];
		return i.set(CatmullRom(a, c.x, l.x, u.x, h.x), CatmullRom(a, c.y, l.y, u.y, h.y)), i;
	}
	copy(e) {
		super.copy(e), (this.points = []);
		for (let t = 0, i = e.points.length; t < i; t++) {
			const n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		const e = super.toJSON();
		e.points = [];
		for (let t = 0, i = this.points.length; t < i; t++) {
			const n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), (this.points = []);
		for (let t = 0, i = e.points.length; t < i; t++) {
			const n = e.points[t];
			this.points.push(new Vector2().fromArray(n));
		}
		return this;
	}
}
var Curves = Object.freeze({ __proto__: null, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve });
class CurvePath extends Curve {
	constructor() {
		super(), (this.type = 'CurvePath'), (this.curves = []), (this.autoClose = !1);
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		const e = this.curves[0].getPoint(0),
			t = this.curves[this.curves.length - 1].getPoint(1);
		e.equals(t) || this.curves.push(new LineCurve(t, e));
	}
	getPoint(e, t) {
		const i = e * this.getLength(),
			n = this.getCurveLengths();
		let r = 0;
		for (; r < n.length; ) {
			if (n[r] >= i) {
				const o = n[r] - i,
					a = this.curves[r],
					c = a.getLength(),
					l = c === 0 ? 0 : 1 - o / c;
				return a.getPointAt(l, t);
			}
			r++;
		}
		return null;
	}
	getLength() {
		const e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		(this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		const e = [];
		let t = 0;
		for (let i = 0, n = this.curves.length; i < n; i++) (t += this.curves[i].getLength()), e.push(t);
		return (this.cacheLengths = e), e;
	}
	getSpacedPoints(e = 40) {
		const t = [];
		for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		const t = [];
		let i;
		for (let n = 0, r = this.curves; n < r.length; n++) {
			const o = r[n],
				a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e,
				c = o.getPoints(a);
			for (let l = 0; l < c.length; l++) {
				const u = c[l];
				(i && i.equals(u)) || (t.push(u), (i = u));
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), (this.curves = []);
		for (let t = 0, i = e.curves.length; t < i; t++) {
			const n = e.curves[t];
			this.curves.push(n.clone());
		}
		return (this.autoClose = e.autoClose), this;
	}
	toJSON() {
		const e = super.toJSON();
		(e.autoClose = this.autoClose), (e.curves = []);
		for (let t = 0, i = this.curves.length; t < i; t++) {
			const n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
		for (let t = 0, i = e.curves.length; t < i; t++) {
			const n = e.curves[t];
			this.curves.push(new Curves[n.type]().fromJSON(n));
		}
		return this;
	}
}
class Path extends CurvePath {
	constructor(e) {
		super(), (this.type = 'Path'), (this.currentPoint = new Vector2()), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		const i = new LineCurve(this.currentPoint.clone(), new Vector2(e, t));
		return this.curves.push(i), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, i, n) {
		const r = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(e, t), new Vector2(i, n));
		return this.curves.push(r), this.currentPoint.set(i, n), this;
	}
	bezierCurveTo(e, t, i, n, r, o) {
		const a = new CubicBezierCurve(this.currentPoint.clone(), new Vector2(e, t), new Vector2(i, n), new Vector2(r, o));
		return this.curves.push(a), this.currentPoint.set(r, o), this;
	}
	splineThru(e) {
		const t = [this.currentPoint.clone()].concat(e),
			i = new SplineCurve(t);
		return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, i, n, r, o) {
		const a = this.currentPoint.x,
			c = this.currentPoint.y;
		return this.absarc(e + a, t + c, i, n, r, o), this;
	}
	absarc(e, t, i, n, r, o) {
		return this.absellipse(e, t, i, i, n, r, o), this;
	}
	ellipse(e, t, i, n, r, o, a, c) {
		const l = this.currentPoint.x,
			u = this.currentPoint.y;
		return this.absellipse(e + l, t + u, i, n, r, o, a, c), this;
	}
	absellipse(e, t, i, n, r, o, a, c) {
		const l = new EllipseCurve(e, t, i, n, r, o, a, c);
		if (this.curves.length > 0) {
			const h = l.getPoint(0);
			h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
		}
		this.curves.push(l);
		const u = l.getPoint(1);
		return this.currentPoint.copy(u), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.currentPoint = this.currentPoint.toArray()), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}
class CircleGeometry extends BufferGeometry {
	constructor(e = 1, t = 32, i = 0, n = Math.PI * 2) {
		super(), (this.type = 'CircleGeometry'), (this.parameters = { radius: e, segments: t, thetaStart: i, thetaLength: n }), (t = Math.max(3, t));
		const r = [],
			o = [],
			a = [],
			c = [],
			l = new Vector3(),
			u = new Vector2();
		o.push(0, 0, 0), a.push(0, 0, 1), c.push(0.5, 0.5);
		for (let h = 0, d = 3; h <= t; h++, d += 3) {
			const m = i + (h / t) * n;
			(l.x = e * Math.cos(m)), (l.y = e * Math.sin(m)), o.push(l.x, l.y, l.z), a.push(0, 0, 1), (u.x = (o[d] / e + 1) / 2), (u.y = (o[d + 1] / e + 1) / 2), c.push(u.x, u.y);
		}
		for (let h = 1; h <= t; h++) r.push(h, h + 1, 0);
		this.setIndex(r), this.setAttribute('position', new Float32BufferAttribute(o, 3)), this.setAttribute('normal', new Float32BufferAttribute(a, 3)), this.setAttribute('uv', new Float32BufferAttribute(c, 2));
	}
	static fromJSON(e) {
		return new CircleGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength);
	}
}
class CylinderGeometry extends BufferGeometry {
	constructor(e = 1, t = 1, i = 1, n = 32, r = 1, o = !1, a = 0, c = Math.PI * 2) {
		super(), (this.type = 'CylinderGeometry'), (this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: n, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: c });
		const l = this;
		(n = Math.floor(n)), (r = Math.floor(r));
		const u = [],
			h = [],
			d = [],
			m = [];
		let g = 0;
		const p = [],
			f = i / 2;
		let _ = 0;
		T(), o === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(u), this.setAttribute('position', new Float32BufferAttribute(h, 3)), this.setAttribute('normal', new Float32BufferAttribute(d, 3)), this.setAttribute('uv', new Float32BufferAttribute(m, 2));
		function T() {
			const S = new Vector3(),
				b = new Vector3();
			let E = 0;
			const A = (t - e) / i;
			for (let v = 0; v <= r; v++) {
				const C = [],
					P = v / r,
					z = P * (t - e) + e;
				for (let Y = 0; Y <= n; Y++) {
					const D = Y / n,
						I = D * c + a,
						N = Math.sin(I),
						j = Math.cos(I);
					(b.x = z * N), (b.y = -P * i + f), (b.z = z * j), h.push(b.x, b.y, b.z), S.set(N, A, j).normalize(), d.push(S.x, S.y, S.z), m.push(D, 1 - P), C.push(g++);
				}
				p.push(C);
			}
			for (let v = 0; v < n; v++)
				for (let C = 0; C < r; C++) {
					const P = p[C][v],
						z = p[C + 1][v],
						Y = p[C + 1][v + 1],
						D = p[C][v + 1];
					u.push(P, z, D), u.push(z, Y, D), (E += 6);
				}
			l.addGroup(_, E, 0), (_ += E);
		}
		function x(S) {
			const b = g,
				E = new Vector2(),
				A = new Vector3();
			let v = 0;
			const C = S === !0 ? e : t,
				P = S === !0 ? 1 : -1;
			for (let Y = 1; Y <= n; Y++) h.push(0, f * P, 0), d.push(0, P, 0), m.push(0.5, 0.5), g++;
			const z = g;
			for (let Y = 0; Y <= n; Y++) {
				const I = (Y / n) * c + a,
					N = Math.cos(I),
					j = Math.sin(I);
				(A.x = C * j), (A.y = f * P), (A.z = C * N), h.push(A.x, A.y, A.z), d.push(0, P, 0), (E.x = N * 0.5 + 0.5), (E.y = j * 0.5 * P + 0.5), m.push(E.x, E.y), g++;
			}
			for (let Y = 0; Y < n; Y++) {
				const D = b + Y,
					I = z + Y;
				S === !0 ? u.push(I, I + 1, D) : u.push(I + 1, I, D), (v += 3);
			}
			l.addGroup(_, v, S === !0 ? 1 : 2), (_ += v);
		}
	}
	static fromJSON(e) {
		return new CylinderGeometry(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
	}
}
class Shape extends Path {
	constructor(e) {
		super(e), (this.uuid = generateUUID()), (this.type = 'Shape'), (this.holes = []);
	}
	getPointsHoles(e) {
		const t = [];
		for (let i = 0, n = this.holes.length; i < n; i++) t[i] = this.holes[i].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
	}
	copy(e) {
		super.copy(e), (this.holes = []);
		for (let t = 0, i = e.holes.length; t < i; t++) {
			const n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		const e = super.toJSON();
		(e.uuid = this.uuid), (e.holes = []);
		for (let t = 0, i = this.holes.length; t < i; t++) {
			const n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
		for (let t = 0, i = e.holes.length; t < i; t++) {
			const n = e.holes[t];
			this.holes.push(new Path().fromJSON(n));
		}
		return this;
	}
}
const Earcut = {
	triangulate: function (s, e, t = 2) {
		const i = e && e.length,
			n = i ? e[0] * t : s.length;
		let r = linkedList(s, 0, n, t, !0);
		const o = [];
		if (!r || r.next === r.prev) return o;
		let a, c, l, u, h, d, m;
		if ((i && (r = eliminateHoles(s, e, r, t)), s.length > 80 * t)) {
			(a = l = s[0]), (c = u = s[1]);
			for (let g = t; g < n; g += t) (h = s[g]), (d = s[g + 1]), h < a && (a = h), d < c && (c = d), h > l && (l = h), d > u && (u = d);
			(m = Math.max(l - a, u - c)), (m = m !== 0 ? 32767 / m : 0);
		}
		return earcutLinked(r, o, t, a, c, m, 0), o;
	},
};
function linkedList(s, e, t, i, n) {
	let r, o;
	if (n === signedArea(s, e, t, i) > 0) for (r = e; r < t; r += i) o = insertNode(r, s[r], s[r + 1], o);
	else for (r = t - i; r >= e; r -= i) o = insertNode(r, s[r], s[r + 1], o);
	return o && equals(o, o.next) && (removeNode(o), (o = o.next)), o;
}
function filterPoints(s, e) {
	if (!s) return s;
	e || (e = s);
	let t = s,
		i;
	do
		if (((i = !1), !t.steiner && (equals(t, t.next) || area(t.prev, t, t.next) === 0))) {
			if ((removeNode(t), (t = e = t.prev), t === t.next)) break;
			i = !0;
		} else t = t.next;
	while (i || t !== e);
	return e;
}
function earcutLinked(s, e, t, i, n, r, o) {
	if (!s) return;
	!o && r && indexCurve(s, i, n, r);
	let a = s,
		c,
		l;
	for (; s.prev !== s.next; ) {
		if (((c = s.prev), (l = s.next), r ? isEarHashed(s, i, n, r) : isEar(s))) {
			e.push((c.i / t) | 0), e.push((s.i / t) | 0), e.push((l.i / t) | 0), removeNode(s), (s = l.next), (a = l.next);
			continue;
		}
		if (((s = l), s === a)) {
			o ? (o === 1 ? ((s = cureLocalIntersections(filterPoints(s), e, t)), earcutLinked(s, e, t, i, n, r, 2)) : o === 2 && splitEarcut(s, e, t, i, n, r)) : earcutLinked(filterPoints(s), e, t, i, n, r, 1);
			break;
		}
	}
}
function isEar(s) {
	const e = s.prev,
		t = s,
		i = s.next;
	if (area(e, t, i) >= 0) return !1;
	const n = e.x,
		r = t.x,
		o = i.x,
		a = e.y,
		c = t.y,
		l = i.y,
		u = n < r ? (n < o ? n : o) : r < o ? r : o,
		h = a < c ? (a < l ? a : l) : c < l ? c : l,
		d = n > r ? (n > o ? n : o) : r > o ? r : o,
		m = a > c ? (a > l ? a : l) : c > l ? c : l;
	let g = i.next;
	for (; g !== e; ) {
		if (g.x >= u && g.x <= d && g.y >= h && g.y <= m && pointInTriangle(n, a, r, c, o, l, g.x, g.y) && area(g.prev, g, g.next) >= 0) return !1;
		g = g.next;
	}
	return !0;
}
function isEarHashed(s, e, t, i) {
	const n = s.prev,
		r = s,
		o = s.next;
	if (area(n, r, o) >= 0) return !1;
	const a = n.x,
		c = r.x,
		l = o.x,
		u = n.y,
		h = r.y,
		d = o.y,
		m = a < c ? (a < l ? a : l) : c < l ? c : l,
		g = u < h ? (u < d ? u : d) : h < d ? h : d,
		p = a > c ? (a > l ? a : l) : c > l ? c : l,
		f = u > h ? (u > d ? u : d) : h > d ? h : d,
		_ = zOrder(m, g, e, t, i),
		T = zOrder(p, f, e, t, i);
	let x = s.prevZ,
		S = s.nextZ;
	for (; x && x.z >= _ && S && S.z <= T; ) {
		if ((x.x >= m && x.x <= p && x.y >= g && x.y <= f && x !== n && x !== o && pointInTriangle(a, u, c, h, l, d, x.x, x.y) && area(x.prev, x, x.next) >= 0) || ((x = x.prevZ), S.x >= m && S.x <= p && S.y >= g && S.y <= f && S !== n && S !== o && pointInTriangle(a, u, c, h, l, d, S.x, S.y) && area(S.prev, S, S.next) >= 0)) return !1;
		S = S.nextZ;
	}
	for (; x && x.z >= _; ) {
		if (x.x >= m && x.x <= p && x.y >= g && x.y <= f && x !== n && x !== o && pointInTriangle(a, u, c, h, l, d, x.x, x.y) && area(x.prev, x, x.next) >= 0) return !1;
		x = x.prevZ;
	}
	for (; S && S.z <= T; ) {
		if (S.x >= m && S.x <= p && S.y >= g && S.y <= f && S !== n && S !== o && pointInTriangle(a, u, c, h, l, d, S.x, S.y) && area(S.prev, S, S.next) >= 0) return !1;
		S = S.nextZ;
	}
	return !0;
}
function cureLocalIntersections(s, e, t) {
	let i = s;
	do {
		const n = i.prev,
			r = i.next.next;
		!equals(n, r) && intersects(n, i, i.next, r) && locallyInside(n, r) && locallyInside(r, n) && (e.push((n.i / t) | 0), e.push((i.i / t) | 0), e.push((r.i / t) | 0), removeNode(i), removeNode(i.next), (i = s = r)), (i = i.next);
	} while (i !== s);
	return filterPoints(i);
}
function splitEarcut(s, e, t, i, n, r) {
	let o = s;
	do {
		let a = o.next.next;
		for (; a !== o.prev; ) {
			if (o.i !== a.i && isValidDiagonal(o, a)) {
				let c = splitPolygon(o, a);
				(o = filterPoints(o, o.next)), (c = filterPoints(c, c.next)), earcutLinked(o, e, t, i, n, r, 0), earcutLinked(c, e, t, i, n, r, 0);
				return;
			}
			a = a.next;
		}
		o = o.next;
	} while (o !== s);
}
function eliminateHoles(s, e, t, i) {
	const n = [];
	let r, o, a, c, l;
	for (r = 0, o = e.length; r < o; r++) (a = e[r] * i), (c = r < o - 1 ? e[r + 1] * i : s.length), (l = linkedList(s, a, c, i, !1)), l === l.next && (l.steiner = !0), n.push(getLeftmost(l));
	for (n.sort(compareX), r = 0; r < n.length; r++) t = eliminateHole(n[r], t);
	return t;
}
function compareX(s, e) {
	return s.x - e.x;
}
function eliminateHole(s, e) {
	const t = findHoleBridge(s, e);
	if (!t) return e;
	const i = splitPolygon(t, s);
	return filterPoints(i, i.next), filterPoints(t, t.next);
}
function findHoleBridge(s, e) {
	let t = e,
		i = -1 / 0,
		n;
	const r = s.x,
		o = s.y;
	do {
		if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
			const d = t.x + ((o - t.y) * (t.next.x - t.x)) / (t.next.y - t.y);
			if (d <= r && d > i && ((i = d), (n = t.x < t.next.x ? t : t.next), d === r)) return n;
		}
		t = t.next;
	} while (t !== e);
	if (!n) return null;
	const a = n,
		c = n.x,
		l = n.y;
	let u = 1 / 0,
		h;
	t = n;
	do r >= t.x && t.x >= c && r !== t.x && pointInTriangle(o < l ? r : i, o, c, l, o < l ? i : r, o, t.x, t.y) && ((h = Math.abs(o - t.y) / (r - t.x)), locallyInside(t, s) && (h < u || (h === u && (t.x > n.x || (t.x === n.x && sectorContainsSector(n, t))))) && ((n = t), (u = h))), (t = t.next);
	while (t !== a);
	return n;
}
function sectorContainsSector(s, e) {
	return area(s.prev, s, e.prev) < 0 && area(e.next, s, s.next) < 0;
}
function indexCurve(s, e, t, i) {
	let n = s;
	do n.z === 0 && (n.z = zOrder(n.x, n.y, e, t, i)), (n.prevZ = n.prev), (n.nextZ = n.next), (n = n.next);
	while (n !== s);
	(n.prevZ.nextZ = null), (n.prevZ = null), sortLinked(n);
}
function sortLinked(s) {
	let e,
		t,
		i,
		n,
		r,
		o,
		a,
		c,
		l = 1;
	do {
		for (t = s, s = null, r = null, o = 0; t; ) {
			for (o++, i = t, a = 0, e = 0; e < l && (a++, (i = i.nextZ), !!i); e++);
			for (c = l; a > 0 || (c > 0 && i); ) a !== 0 && (c === 0 || !i || t.z <= i.z) ? ((n = t), (t = t.nextZ), a--) : ((n = i), (i = i.nextZ), c--), r ? (r.nextZ = n) : (s = n), (n.prevZ = r), (r = n);
			t = i;
		}
		(r.nextZ = null), (l *= 2);
	} while (o > 1);
	return s;
}
function zOrder(s, e, t, i, n) {
	return (s = ((s - t) * n) | 0), (e = ((e - i) * n) | 0), (s = (s | (s << 8)) & 16711935), (s = (s | (s << 4)) & 252645135), (s = (s | (s << 2)) & 858993459), (s = (s | (s << 1)) & 1431655765), (e = (e | (e << 8)) & 16711935), (e = (e | (e << 4)) & 252645135), (e = (e | (e << 2)) & 858993459), (e = (e | (e << 1)) & 1431655765), s | (e << 1);
}
function getLeftmost(s) {
	let e = s,
		t = s;
	do (e.x < t.x || (e.x === t.x && e.y < t.y)) && (t = e), (e = e.next);
	while (e !== s);
	return t;
}
function pointInTriangle(s, e, t, i, n, r, o, a) {
	return (n - o) * (e - a) >= (s - o) * (r - a) && (s - o) * (i - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (n - o) * (i - a);
}
function isValidDiagonal(s, e) {
	return s.next.i !== e.i && s.prev.i !== e.i && !intersectsPolygon(s, e) && ((locallyInside(s, e) && locallyInside(e, s) && middleInside(s, e) && (area(s.prev, s, e.prev) || area(s, e.prev, e))) || (equals(s, e) && area(s.prev, s, s.next) > 0 && area(e.prev, e, e.next) > 0));
}
function area(s, e, t) {
	return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y);
}
function equals(s, e) {
	return s.x === e.x && s.y === e.y;
}
function intersects(s, e, t, i) {
	const n = sign(area(s, e, t)),
		r = sign(area(s, e, i)),
		o = sign(area(t, i, s)),
		a = sign(area(t, i, e));
	return !!((n !== r && o !== a) || (n === 0 && onSegment(s, t, e)) || (r === 0 && onSegment(s, i, e)) || (o === 0 && onSegment(t, s, i)) || (a === 0 && onSegment(t, e, i)));
}
function onSegment(s, e, t) {
	return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y);
}
function sign(s) {
	return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function intersectsPolygon(s, e) {
	let t = s;
	do {
		if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && intersects(t, t.next, s, e)) return !0;
		t = t.next;
	} while (t !== s);
	return !1;
}
function locallyInside(s, e) {
	return area(s.prev, s, s.next) < 0 ? area(s, e, s.next) >= 0 && area(s, s.prev, e) >= 0 : area(s, e, s.prev) < 0 || area(s, s.next, e) < 0;
}
function middleInside(s, e) {
	let t = s,
		i = !1;
	const n = (s.x + e.x) / 2,
		r = (s.y + e.y) / 2;
	do t.y > r != t.next.y > r && t.next.y !== t.y && n < ((t.next.x - t.x) * (r - t.y)) / (t.next.y - t.y) + t.x && (i = !i), (t = t.next);
	while (t !== s);
	return i;
}
function splitPolygon(s, e) {
	const t = new Node(s.i, s.x, s.y),
		i = new Node(e.i, e.x, e.y),
		n = s.next,
		r = e.prev;
	return (s.next = e), (e.prev = s), (t.next = n), (n.prev = t), (i.next = t), (t.prev = i), (r.next = i), (i.prev = r), i;
}
function insertNode(s, e, t, i) {
	const n = new Node(s, e, t);
	return i ? ((n.next = i.next), (n.prev = i), (i.next.prev = n), (i.next = n)) : ((n.prev = n), (n.next = n)), n;
}
function removeNode(s) {
	(s.next.prev = s.prev), (s.prev.next = s.next), s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function Node(s, e, t) {
	(this.i = s), (this.x = e), (this.y = t), (this.prev = null), (this.next = null), (this.z = 0), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
}
function signedArea(s, e, t, i) {
	let n = 0;
	for (let r = e, o = t - i; r < t; r += i) (n += (s[o] - s[r]) * (s[r + 1] + s[o + 1])), (o = r);
	return n;
}
class ShapeUtils {
	static area(e) {
		const t = e.length;
		let i = 0;
		for (let n = t - 1, r = 0; r < t; n = r++) i += e[n].x * e[r].y - e[r].x * e[n].y;
		return i * 0.5;
	}
	static isClockWise(e) {
		return ShapeUtils.area(e) < 0;
	}
	static triangulateShape(e, t) {
		const i = [],
			n = [],
			r = [];
		removeDupEndPts(e), addContour(i, e);
		let o = e.length;
		t.forEach(removeDupEndPts);
		for (let c = 0; c < t.length; c++) n.push(o), (o += t[c].length), addContour(i, t[c]);
		const a = Earcut.triangulate(i, n);
		for (let c = 0; c < a.length; c += 3) r.push(a.slice(c, c + 3));
		return r;
	}
}
function removeDupEndPts(s) {
	const e = s.length;
	e > 2 && s[e - 1].equals(s[0]) && s.pop();
}
function addContour(s, e) {
	for (let t = 0; t < e.length; t++) s.push(e[t].x), s.push(e[t].y);
}
class RawShaderMaterial extends ShaderMaterial {
	constructor(e) {
		super(e), (this.isRawShaderMaterial = !0), (this.type = 'RawShaderMaterial');
	}
}
class MeshNormalMaterial extends Material {
	constructor(e) {
		super(), (this.isMeshNormalMaterial = !0), (this.type = 'MeshNormalMaterial'), (this.bumpMap = null), (this.bumpScale = 1), (this.normalMap = null), (this.normalMapType = TangentSpaceNormalMap), (this.normalScale = new Vector2(1, 1)), (this.displacementMap = null), (this.displacementScale = 1), (this.displacementBias = 0), (this.wireframe = !1), (this.wireframeLinewidth = 1), (this.flatShading = !1), this.setValues(e);
	}
	copy(e) {
		return super.copy(e), (this.bumpMap = e.bumpMap), (this.bumpScale = e.bumpScale), (this.normalMap = e.normalMap), (this.normalMapType = e.normalMapType), this.normalScale.copy(e.normalScale), (this.displacementMap = e.displacementMap), (this.displacementScale = e.displacementScale), (this.displacementBias = e.displacementBias), (this.wireframe = e.wireframe), (this.wireframeLinewidth = e.wireframeLinewidth), (this.flatShading = e.flatShading), this;
	}
}
const Cache = {
	enabled: !1,
	files: {},
	add: function (s, e) {
		this.enabled !== !1 && (this.files[s] = e);
	},
	get: function (s) {
		if (this.enabled !== !1) return this.files[s];
	},
	remove: function (s) {
		delete this.files[s];
	},
	clear: function () {
		this.files = {};
	},
};
class LoadingManager {
	constructor(e, t, i) {
		const n = this;
		let r = !1,
			o = 0,
			a = 0,
			c;
		const l = [];
		(this.onStart = void 0),
			(this.onLoad = e),
			(this.onProgress = t),
			(this.onError = i),
			(this.itemStart = function (u) {
				a++, r === !1 && n.onStart !== void 0 && n.onStart(u, o, a), (r = !0);
			}),
			(this.itemEnd = function (u) {
				o++, n.onProgress !== void 0 && n.onProgress(u, o, a), o === a && ((r = !1), n.onLoad !== void 0 && n.onLoad());
			}),
			(this.itemError = function (u) {
				n.onError !== void 0 && n.onError(u);
			}),
			(this.resolveURL = function (u) {
				return c ? c(u) : u;
			}),
			(this.setURLModifier = function (u) {
				return (c = u), this;
			}),
			(this.addHandler = function (u, h) {
				return l.push(u, h), this;
			}),
			(this.removeHandler = function (u) {
				const h = l.indexOf(u);
				return h !== -1 && l.splice(h, 2), this;
			}),
			(this.getHandler = function (u) {
				for (let h = 0, d = l.length; h < d; h += 2) {
					const m = l[h],
						g = l[h + 1];
					if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
				}
				return null;
			});
	}
}
const DefaultLoadingManager = new LoadingManager();
class Loader {
	constructor(e) {
		(this.manager = e !== void 0 ? e : DefaultLoadingManager), (this.crossOrigin = 'anonymous'), (this.withCredentials = !1), (this.path = ''), (this.resourcePath = ''), (this.requestHeader = {});
	}
	load() {}
	loadAsync(e, t) {
		const i = this;
		return new Promise(function (n, r) {
			i.load(e, n, t, r);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return (this.crossOrigin = e), this;
	}
	setWithCredentials(e) {
		return (this.withCredentials = e), this;
	}
	setPath(e) {
		return (this.path = e), this;
	}
	setResourcePath(e) {
		return (this.resourcePath = e), this;
	}
	setRequestHeader(e) {
		return (this.requestHeader = e), this;
	}
}
const loading = {};
class HttpError extends Error {
	constructor(e, t) {
		super(e), (this.response = t);
	}
}
class FileLoader extends Loader {
	constructor(e) {
		super(e);
	}
	load(e, t, i, n) {
		e === void 0 && (e = ''), this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
		const r = Cache.get(e);
		if (r !== void 0)
			return (
				this.manager.itemStart(e),
				setTimeout(() => {
					t && t(r), this.manager.itemEnd(e);
				}, 0),
				r
			);
		if (loading[e] !== void 0) {
			loading[e].push({ onLoad: t, onProgress: i, onError: n });
			return;
		}
		(loading[e] = []), loading[e].push({ onLoad: t, onProgress: i, onError: n });
		const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? 'include' : 'same-origin' }),
			a = this.mimeType,
			c = this.responseType;
		fetch(o)
			.then((l) => {
				if (l.status === 200 || l.status === 0) {
					if ((l.status === 0 && console.warn('THREE.FileLoader: HTTP Status 0 received.'), typeof ReadableStream > 'u' || l.body === void 0 || l.body.getReader === void 0)) return l;
					const u = loading[e],
						h = l.body.getReader(),
						d = l.headers.get('Content-Length') || l.headers.get('X-File-Size'),
						m = d ? parseInt(d) : 0,
						g = m !== 0;
					let p = 0;
					const f = new ReadableStream({
						start(_) {
							T();
							function T() {
								h.read().then(({ done: x, value: S }) => {
									if (x) _.close();
									else {
										p += S.byteLength;
										const b = new ProgressEvent('progress', { lengthComputable: g, loaded: p, total: m });
										for (let E = 0, A = u.length; E < A; E++) {
											const v = u[E];
											v.onProgress && v.onProgress(b);
										}
										_.enqueue(S), T();
									}
								});
							}
						},
					});
					return new Response(f);
				} else throw new HttpError(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
			})
			.then((l) => {
				switch (c) {
					case 'arraybuffer':
						return l.arrayBuffer();
					case 'blob':
						return l.blob();
					case 'document':
						return l.text().then((u) => new DOMParser().parseFromString(u, a));
					case 'json':
						return l.json();
					default:
						if (a === void 0) return l.text();
						{
							const h = /charset="?([^;"\s]*)"?/i.exec(a),
								d = h && h[1] ? h[1].toLowerCase() : void 0,
								m = new TextDecoder(d);
							return l.arrayBuffer().then((g) => m.decode(g));
						}
				}
			})
			.then((l) => {
				Cache.add(e, l);
				const u = loading[e];
				delete loading[e];
				for (let h = 0, d = u.length; h < d; h++) {
					const m = u[h];
					m.onLoad && m.onLoad(l);
				}
			})
			.catch((l) => {
				const u = loading[e];
				if (u === void 0) throw (this.manager.itemError(e), l);
				delete loading[e];
				for (let h = 0, d = u.length; h < d; h++) {
					const m = u[h];
					m.onError && m.onError(l);
				}
				this.manager.itemError(e);
			})
			.finally(() => {
				this.manager.itemEnd(e);
			}),
			this.manager.itemStart(e);
	}
	setResponseType(e) {
		return (this.responseType = e), this;
	}
	setMimeType(e) {
		return (this.mimeType = e), this;
	}
}
class InstancedBufferGeometry extends BufferGeometry {
	constructor() {
		super(), (this.isInstancedBufferGeometry = !0), (this.type = 'InstancedBufferGeometry'), (this.instanceCount = 1 / 0);
	}
	copy(e) {
		return super.copy(e), (this.instanceCount = e.instanceCount), this;
	}
	toJSON() {
		const e = super.toJSON();
		return (e.instanceCount = this.instanceCount), (e.isInstancedBufferGeometry = !0), e;
	}
}
class Spherical {
	constructor(e = 1, t = 0, i = 0) {
		return (this.radius = e), (this.phi = t), (this.theta = i), this;
	}
	set(e, t, i) {
		return (this.radius = e), (this.phi = t), (this.theta = i), this;
	}
	copy(e) {
		return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
	}
	makeSafe() {
		return (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, i) {
		return (this.radius = Math.sqrt(e * e + t * t + i * i)), this.radius === 0 ? ((this.theta = 0), (this.phi = 0)) : ((this.theta = Math.atan2(e, i)), (this.phi = Math.acos(clamp(t / this.radius, -1, 1)))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}
class ShapePath {
	constructor() {
		(this.type = 'ShapePath'), (this.color = new Color()), (this.subPaths = []), (this.currentPath = null);
	}
	moveTo(e, t) {
		return (this.currentPath = new Path()), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
	}
	lineTo(e, t) {
		return this.currentPath.lineTo(e, t), this;
	}
	quadraticCurveTo(e, t, i, n) {
		return this.currentPath.quadraticCurveTo(e, t, i, n), this;
	}
	bezierCurveTo(e, t, i, n, r, o) {
		return this.currentPath.bezierCurveTo(e, t, i, n, r, o), this;
	}
	splineThru(e) {
		return this.currentPath.splineThru(e), this;
	}
	toShapes(e) {
		function t(_) {
			const T = [];
			for (let x = 0, S = _.length; x < S; x++) {
				const b = _[x],
					E = new Shape();
				(E.curves = b.curves), T.push(E);
			}
			return T;
		}
		function i(_, T) {
			const x = T.length;
			let S = !1;
			for (let b = x - 1, E = 0; E < x; b = E++) {
				let A = T[b],
					v = T[E],
					C = v.x - A.x,
					P = v.y - A.y;
				if (Math.abs(P) > Number.EPSILON) {
					if ((P < 0 && ((A = T[E]), (C = -C), (v = T[b]), (P = -P)), _.y < A.y || _.y > v.y)) continue;
					if (_.y === A.y) {
						if (_.x === A.x) return !0;
					} else {
						const z = P * (_.x - A.x) - C * (_.y - A.y);
						if (z === 0) return !0;
						if (z < 0) continue;
						S = !S;
					}
				} else {
					if (_.y !== A.y) continue;
					if ((v.x <= _.x && _.x <= A.x) || (A.x <= _.x && _.x <= v.x)) return !0;
				}
			}
			return S;
		}
		const n = ShapeUtils.isClockWise,
			r = this.subPaths;
		if (r.length === 0) return [];
		let o, a, c;
		const l = [];
		if (r.length === 1) return (a = r[0]), (c = new Shape()), (c.curves = a.curves), l.push(c), l;
		let u = !n(r[0].getPoints());
		u = e ? !u : u;
		const h = [],
			d = [];
		let m = [],
			g = 0,
			p;
		(d[g] = void 0), (m[g] = []);
		for (let _ = 0, T = r.length; _ < T; _++) (a = r[_]), (p = a.getPoints()), (o = n(p)), (o = e ? !o : o), o ? (!u && d[g] && g++, (d[g] = { s: new Shape(), p }), (d[g].s.curves = a.curves), u && g++, (m[g] = [])) : m[g].push({ h: a, p: p[0] });
		if (!d[0]) return t(r);
		if (d.length > 1) {
			let _ = !1,
				T = 0;
			for (let x = 0, S = d.length; x < S; x++) h[x] = [];
			for (let x = 0, S = d.length; x < S; x++) {
				const b = m[x];
				for (let E = 0; E < b.length; E++) {
					const A = b[E];
					let v = !0;
					for (let C = 0; C < d.length; C++) i(A.p, d[C].p) && (x !== C && T++, v ? ((v = !1), h[C].push(A)) : (_ = !0));
					v && h[x].push(A);
				}
			}
			T > 0 && _ === !1 && (m = h);
		}
		let f;
		for (let _ = 0, T = d.length; _ < T; _++) {
			(c = d[_].s), l.push(c), (f = m[_]);
			for (let x = 0, S = f.length; x < S; x++) c.holes.push(f[x].h);
		}
		return l;
	}
}
typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: REVISION } }));
typeof window < 'u' && (window.__THREE__ ? console.warn('WARNING: Multiple instances of Three.js being imported.') : (window.__THREE__ = REVISION));
var isSSR = typeof window > 'u',
	DetectUA = (function () {
		function s(e) {
			(this.userAgent = e || (!isSSR && window.navigator ? window.navigator.userAgent : '')), (this.isAndroidDevice = !/like android/i.test(this.userAgent) && /android/i.test(this.userAgent)), (this.iOSDevice = this.match(1, /(iphone|ipod|ipad)/i).toLowerCase()), !isSSR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 2 && !window.MSStream && (this.iOSDevice = 'ipad');
		}
		return (
			(s.prototype.match = function (e, t) {
				var i = this.userAgent.match(t);
				return (i && i.length > 1 && i[e]) || '';
			}),
			Object.defineProperty(s.prototype, 'isMobile', {
				get: function () {
					return !this.isTablet && (/[^-]mobi/i.test(this.userAgent) || this.iOSDevice === 'iphone' || this.iOSDevice === 'ipod' || this.isAndroidDevice || /nexus\s*[0-6]\s*/i.test(this.userAgent));
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isTablet', {
				get: function () {
					return (/tablet/i.test(this.userAgent) && !/tablet pc/i.test(this.userAgent)) || this.iOSDevice === 'ipad' || (this.isAndroidDevice && !/[^-]mobi/i.test(this.userAgent)) || (!/nexus\s*[0-6]\s*/i.test(this.userAgent) && /nexus\s*[0-9]+/i.test(this.userAgent));
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isDesktop', {
				get: function () {
					return !this.isMobile && !this.isTablet;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isMacOS', {
				get: function () {
					return (
						/macintosh/i.test(this.userAgent) && {
							version: this.match(1, /mac os x (\d+(\.?_?\d+)+)/i)
								.replace(/[_\s]/g, '.')
								.split('.')
								.map(function (e) {
									return e;
								})[1],
						}
					);
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isWindows', {
				get: function () {
					return /windows /i.test(this.userAgent) && { version: this.match(1, /Windows ((NT|XP)( \d\d?.\d)?)/i) };
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isiOS', {
				get: function () {
					return !!this.iOSDevice && { version: this.match(1, /os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g, '.') || this.match(1, /version\/(\d+(\.\d+)?)/i) };
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'isAndroid', {
				get: function () {
					return this.isAndroidDevice && { version: this.match(1, /android[ \/-](\d+(\.\d+)*)/i) };
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(s.prototype, 'browser', {
				get: function () {
					var e = this.match(1, /version\/(\d+(\.\d+)?)/i);
					return /opera/i.test(this.userAgent)
						? { name: 'Opera', version: e || this.match(1, /(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i) }
						: /opr\/|opios/i.test(this.userAgent)
						? { name: 'Opera', version: this.match(1, /(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || e }
						: /SamsungBrowser/i.test(this.userAgent)
						? { name: 'Samsung Internet for Android', version: e || this.match(1, /(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i) }
						: /yabrowser/i.test(this.userAgent)
						? { name: 'Yandex Browser', version: e || this.match(1, /(?:yabrowser)[\s\/](\d+(\.\d+)?)/i) }
						: /ucbrowser/i.test(this.userAgent)
						? { name: 'UC Browser', version: this.match(1, /(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i) }
						: /msie|trident/i.test(this.userAgent)
						? { name: 'Internet Explorer', version: this.match(1, /(?:msie |rv:)(\d+(\.\d+)?)/i) }
						: /(edge|edgios|edga|edg)/i.test(this.userAgent)
						? { name: 'Microsoft Edge', version: this.match(2, /(edge|edgios|edga|edg)\/(\d+(\.\d+)?)/i) }
						: /firefox|iceweasel|fxios/i.test(this.userAgent)
						? { name: 'Firefox', version: this.match(1, /(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i) }
						: /chromium/i.test(this.userAgent)
						? { name: 'Chromium', version: this.match(1, /(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || e }
						: /chrome|crios|crmo/i.test(this.userAgent)
						? { name: 'Chrome', version: this.match(1, /(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) }
						: /safari|applewebkit/i.test(this.userAgent)
						? { name: 'Safari', version: e }
						: { name: this.match(1, /^(.*)\/(.*) /), version: this.match(2, /^(.*)\/(.*) /) };
				},
				enumerable: !1,
				configurable: !0,
			}),
			s
		);
	})();
const detectUA = new DetectUA(),
	userAgent = (navigator.userAgent || navigator.vendor).toLowerCase(),
	browserName = detectUA.browser.name;
class Browser {
	isMobile = detectUA.isMobile || detectUA.isTablet;
	isDesktop = detectUA.isDesktop;
	device = this.isMobile ? 'mobile' : 'desktop';
	isAndroid = !!detectUA.isAndroid;
	isIOS = !!detectUA.isiOS;
	isMacOS = !!detectUA.isMacOS;
	isWindows = detectUA.isWindows.version !== null;
	isLinux = userAgent.indexOf('linux') != -1;
	ua = userAgent;
	isEdge = browserName === 'Microsoft Edge';
	isIE = browserName === 'Internet Explorer';
	isFirefox = browserName === 'Firefox';
	isChrome = browserName === 'Chrome';
	isOpera = browserName === 'Opera';
	isSafari = browserName === 'Safari';
	isSupportMSAA = !userAgent.match('version/15.4 ');
	isRetina = window.devicePixelRatio && window.devicePixelRatio >= 1.5;
	devicePixelRatio = window.devicePixelRatio || 1;
	cpuCoreCount = navigator.hardwareConcurrency || 1;
	baseUrl = document.location.origin;
	isIFrame = window.self !== window.top;
	constructor() {}
}
const browser = new Browser();
class Settings {
	ASSETS_DOMAIN = 'assets/';
	MODEL_PATH = 'models/';
	IMAGE_PATH = 'images/';
	TEXTURE_PATH = 'textures/';
	AUDIO_PATH = 'audios/';
	FONT_PATH = 'fonts/';
	RENDER_TARGET_FLOAT_TYPE = null;
	DATA_FLOAT_TYPE = null;
	USE_FLOAT_PACKING = !1;
	USE_WEBGL2 = !0;
	DPR = Math.min(1.5, browser.devicePixelRatio) || 1;
	USE_PIXEL_LIMIT = !0;
	MAX_PIXEL_COUNT = 2560 * 1440;
	UP_SCALE = 1;
	JUMP_SECTION = '';
	CROSS_ORIGINS = { 'https://localhost:3000/': 'anonymous', 'https://1090-gi-2d.webflow.io/': 'anonymous', 'https://cdn.jsdelivr.net/': 'anonymous' };
	IS_DEV = !1;
	IS_WEBFLOW = !1;
	LOG = !1;
	SKIP_ANIMATION = !1;
	LOOK_DEV_MODE = !1;
	DISABLE_PLAYER_INPUT = !1;
	ACTIVE_PROJECT = 'home';
	constructor() {
		if (window.URLSearchParams) {
			const t = ((i) => [...i].reduce((n, [r, o]) => ((n[r] = o === '' ? !0 : o), n), {}))(new URLSearchParams(window.location.search));
			this.override(t);
		}
		(this.IS_WEBFLOW = !!document.documentElement.dataset.wfSite), this.IS_WEBFLOW && (this.ASSETS_DOMAIN = this.IS_DEV ? 'https://localhost:3000/assets/' : 'https://cdn.jsdelivr.net/gh/emmelleppi/webflow-assets-test/'), (this.ASSETS_DOMAIN = 'https://cdn.jsdelivr.net/gh/emmelleppi/webflow-assets-test/'), (this.MODEL_PATH = this.ASSETS_DOMAIN + this.MODEL_PATH), (this.IMAGE_PATH = this.ASSETS_DOMAIN + this.IMAGE_PATH), (this.TEXTURE_PATH = this.ASSETS_DOMAIN + this.TEXTURE_PATH), (this.AUDIO_PATH = this.ASSETS_DOMAIN + this.AUDIO_PATH), (this.FONT_PATH = this.ASSETS_DOMAIN + this.FONT_PATH);
	}
	override(e) {
		for (const t in e)
			if (this[t] !== void 0) {
				const i = e[t].toString();
				typeof this[t] == 'boolean' ? (this[t] = !(i === '0' || i === !1)) : typeof this[t] == 'number' ? (this[t] = parseFloat(i)) : typeof this[t] == 'string' && (this[t] = i);
			}
	}
}
const settings = new Settings();
function getDefaultExportFromCjs(s) {
	return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var minSignal$1 = { exports: {} };
(function (s) {
	(function (e) {
		function t() {
			(this._listeners = []), (this.dispatchCount = 0);
		}
		var i = t.prototype;
		(i.add = a), (i.addOnce = c), (i.remove = l), (i.dispatch = u);
		var n = 'Callback function is missing!',
			r = Array.prototype.slice;
		function o(h) {
			h.sort(function (d, m) {
				return (d = d.p), (m = m.p), m < d ? 1 : m > d ? -1 : 0;
			});
		}
		function a(h, d, m, g) {
			if (!h) throw n;
			m = m || 0;
			for (var p = this._listeners, f, _, T, x = p.length; x--; ) if (((f = p[x]), f.f === h && f.c === d)) return !1;
			typeof m == 'function' && ((_ = m), (m = g), (T = 4)), p.unshift({ f: h, c: d, p: m, r: _ || h, a: r.call(arguments, T || 3), j: 0 }), o(p);
		}
		function c(h, d, m, g) {
			if (!h) throw n;
			var p = this,
				f = function () {
					return p.remove.call(p, h, d), h.apply(d, r.call(arguments, 0));
				};
			(g = r.call(arguments, 0)), g.length === 1 && g.push(e), g.splice(2, 0, f), a.apply(p, g);
		}
		function l(h, d) {
			if (!h) return (this._listeners.length = 0), !0;
			for (var m = this._listeners, g, p = m.length; p--; ) if (((g = m[p]), g.f === h && (!d || g.c === d))) return (g.j = 0), m.splice(p, 1), !0;
			return !1;
		}
		function u(h) {
			(h = r.call(arguments, 0)), this.dispatchCount++;
			for (var d = this.dispatchCount, m = this._listeners, g, p, f = m.length; f--; )
				if (((g = m[f]), g && g.j < d && ((g.j = d), g.r.apply(g.c, g.a.concat(h)) === !1))) {
					p = g;
					break;
				}
			for (m = this._listeners, f = m.length; f--; ) m[f].j = 0;
			return p;
		}
		s.exports = t;
	})();
})(minSignal$1);
var minSignalExports$1 = minSignal$1.exports;
const MinSignal$2 = getDefaultExportFromCjs(minSignalExports$1);
var quickLoader$b = { exports: {} },
	minSignal = { exports: {} };
(function (s) {
	(function (e) {
		function t() {
			(this._listeners = []), (this.dispatchCount = 0);
		}
		var i = t.prototype;
		(i.add = a), (i.addOnce = c), (i.remove = l), (i.dispatch = u);
		var n = 'Callback function is missing!',
			r = Array.prototype.slice;
		function o(h) {
			h.sort(function (d, m) {
				return (d = d.p), (m = m.p), m < d ? 1 : d > m ? -1 : 0;
			});
		}
		function a(h, d, m, g) {
			if (!h) throw n;
			m = m || 0;
			for (var p = this._listeners, f, _, T, x = p.length; x--; ) if (((f = p[x]), f.f === h && f.c === d)) return !1;
			typeof m == 'function' && ((_ = m), (m = g), (T = 4)), p.unshift({ f: h, c: d, p: m, r: _ || h, a: r.call(arguments, T || 3), j: 0 }), o(p);
		}
		function c(h, d, m, g) {
			if (!h) throw n;
			var p = this,
				f = function () {
					return p.remove.call(p, h, d), h.apply(d, r.call(arguments, 0));
				};
			(g = r.call(arguments, 0)), g.length === 1 && g.push(e), g.splice(2, 0, f), a.apply(p, g);
		}
		function l(h, d) {
			if (!h) return (this._listeners.length = 0), !0;
			for (var m = this._listeners, g, p = m.length; p--; ) if (((g = m[p]), g.f === h && (!d || g.c === d))) return (g.j = 0), m.splice(p, 1), !0;
			return !1;
		}
		function u(h) {
			(h = r.call(arguments, 0)), this.dispatchCount++;
			for (var d = this.dispatchCount, m = this._listeners, g, p, f = m.length; f--; )
				if (((g = m[f]), g && g.j < d && ((g.j = d), g.r.apply(g.c, g.a.concat(h)) === !1))) {
					p = g;
					break;
				}
			for (m = this._listeners, f = m.length; f--; ) m[f].j = 0;
			return p;
		}
		s.exports = t;
	})();
})(minSignal);
var minSignalExports = minSignal.exports,
	MinSignal$1 = minSignalExports,
	undef$3;
function QuickLoader() {
	(this.isLoading = !1), (this.totalWeight = 0), (this.loadedWeight = 0), (this.itemUrls = {}), (this.itemList = []), (this.loadingSignal = new MinSignal$1()), (this.crossOriginMap = {}), (this.queue = []), (this.activeItems = []), (this.maxActiveItems = 4);
}
var _p$9 = QuickLoader.prototype;
_p$9.addChunk = addChunk;
_p$9.setCrossOrigin = setCrossOrigin;
_p$9.add = add;
_p$9.load = load$7;
_p$9.start = start$1;
_p$9.loadNext = loadNext;
_p$9._createItem = _createItem;
_p$9._onLoading = _onLoading$1;
_p$9.VERSION = '0.1.17';
_p$9.register = register;
_p$9.retrieveAll = retrieveAll;
_p$9.retrieve = retrieve;
_p$9.testExtensions = testExtensions;
_p$9.create = create;
_p$9.check = check;
var addedItems = (_p$9.addedItems = {}),
	loadedItems = (_p$9.loadedItems = {}),
	ITEM_CLASS_LIST = (_p$9.ITEM_CLASS_LIST = []),
	ITEM_CLASSES = (_p$9.ITEM_CLASSES = {});
quickLoader$b.exports = create();
function setCrossOrigin(s, e) {
	this.crossOriginMap[s] = e;
}
function addChunk(s, e) {
	var t,
		i,
		n,
		r,
		o,
		a = retrieveAll(s, e);
	for (t = 0, n = a.length; t < n; t++) for (o = a[t], i = 0, r = o.items.length; i < r; i++) this.add(o.items[i], { type: o.type });
	return a;
}
function add(s, e) {
	var t = addedItems[s];
	return t || (t = this._createItem(s, e && e.type ? e.type : retrieve(s).type, e)), e && e.onLoad && t.onLoaded.addOnce(e.onLoad), this.itemUrls[s] || ((this.itemUrls[s] = t), this.itemList.push(t), (this.totalWeight += t.weight)), t;
}
function load$7(s, e) {
	var t = addedItems[s];
	return t || (t = this._createItem(s, e && e.type ? e.type : retrieve(s).type, e)), e && e.onLoad && t.onLoaded.addOnce(e.onLoad), loadedItems[s] ? t.dispatch() : t.isStartLoaded || t.load(), t;
}
function start$1(s) {
	s && this.loadingSignal.add(s), (this.isLoading = !0);
	var e = this.itemList.length;
	if (e) {
		var t = this.itemList.splice(0, this.itemList.length),
			i;
		for (var n in this.itemUrls) delete this.itemUrls[n];
		for (var r = 0; r < e; r++) {
			i = t[r];
			var o = !!loadedItems[i.url];
			i.onLoaded.addOnce(_onItemLoad, this, -1024, i, t, o), i.hasLoading && i.loadingSignal.add(_onLoading$1, this, -1024, i, t, undef$3), o ? i.dispatch(_onItemLoad) : i.isStartLoaded || this.queue.push(i);
		}
		this.queue.length && this.loadNext();
	} else _onItemLoad.call(this, undef$3, this.itemList);
}
function loadNext() {
	if (this.queue.length && this.activeItems.length < this.maxActiveItems) {
		var s = this.queue.shift();
		this.activeItems.push(s), this.loadNext(), s.load();
	}
}
function _onLoading$1(s, e, t, i, n) {
	(s && !s.isLoaded && s.getCombinedPercent(i) === 1) || (n === undef$3 && ((this.loadedWeight = _getLoadedWeight(e)), (n = this.loadedWeight / this.totalWeight)), (t = t || this.loadingSignal), t.dispatch(n, s));
}
function _getLoadedWeight(s) {
	for (var e = 0, t = 0, i = s.length; t < i; t++) e += s[t].loadedWeight;
	return e;
}
function _onItemLoad(s, e, t) {
	if (((this.loadedWeight = _getLoadedWeight(e)), !t)) {
		for (var i = this.activeItems, n = i.length; n--; )
			if (i[n] === s) {
				i.splice(n, 1);
				break;
			}
	}
	var r = this.loadingSignal;
	this.loadedWeight === this.totalWeight ? ((this.isLoading = !1), (this.loadedWeight = 0), (this.totalWeight = 0), (this.loadingSignal = new MinSignal$1()), this._onLoading(s, e, r, 1, 1), s && s.noCache && _removeItemCache(s)) : (this._onLoading(s, e, r, 1, this.loadedWeight / this.totalWeight), s && s.noCache && _removeItemCache(s), t || this.loadNext());
}
function _removeItemCache(s) {
	var e = s.url;
	(s.content = undef$3), (addedItems[e] = undef$3), (loadedItems[e] = undef$3);
}
function _createItem(s, e, t) {
	if (((t = t || {}), !t.crossOrigin)) {
		for (var i in this.crossOriginMap)
			if (s.indexOf(i) === 0) {
				t.crossOrigin = this.crossOriginMap[i];
				break;
			}
	}
	return new ITEM_CLASSES[e](s, t);
}
function register(s) {
	ITEM_CLASSES[s.type] || (ITEM_CLASS_LIST.push(s), (ITEM_CLASSES[s.type] = s));
}
function retrieveAll(s, e) {
	var t,
		i,
		n = s.length,
		r = [];
	if (n && typeof s != 'string') for (t = 0; t < n; t++) (i = retrieve(s[t], e)), i && (r = r.concat(i));
	else (i = retrieve(s, e)), i && (r = r.concat(i));
	return r;
}
function retrieve(s, e) {
	var t, i, n, r, o;
	if (e) (r = ITEM_CLASSES[e]), (n = r.retrieve(s));
	else
		for (t = 0, i = ITEM_CLASS_LIST.length; t < i; t++) {
			if (((r = ITEM_CLASS_LIST[t]), (o = r.type), typeof s == 'string')) {
				if (testExtensions(s, r)) {
					n = [s];
					break;
				}
			} else if (((n = r.retrieve(s)), n && n.length && typeof n[0] == 'string' && testExtensions(n[0], r))) break;
			(n = undef$3), (o = undef$3);
		}
	if (n) return { type: e || o, items: n };
}
function testExtensions(s, e) {
	if (s) {
		for (var t = _getExtension(s), i = e.extensions, n = i.length; n--; ) if (t === i[n]) return !0;
		return !1;
	}
}
function _getExtension(s) {
	return s.split('.').pop().split(/#|\?/)[0];
}
function create() {
	return new QuickLoader();
}
function check() {
	var s = [],
		e = [];
	for (var t in addedItems) s.push(t), loadedItems[t] || e.push(addedItems[t]);
	console.log({ added: s, notLoaded: e });
}
var quickLoaderExports = quickLoader$b.exports,
	MinSignal = minSignalExports,
	quickLoader$a = quickLoaderExports;
function AbstractItem$6(s, e) {
	if (s) {
		(this.url = s), (this.loadedWeight = 0), (this.weight = 1), (this.postPercent = 0);
		for (var t in e) this[t] = e[t];
		this.type || (this.type = this.constructor.type), this.hasLoading && ((this.loadingSignal = new MinSignal()), this.loadingSignal.add(_onLoading, this), this.onLoading && this.loadingSignal.add(this.onLoading)), this.onPost ? ((this.onPostLoadingSignal = new MinSignal()), this.onPostLoadingSignal.add(this._onPostLoading, this), (this.postWeightRatio = this.postWeightRatio || 0.1)) : (this.postWeightRatio = 0);
		var i = this;
		(this.boundOnLoad = function () {
			i._onLoad();
		}),
			(this.onLoaded = new MinSignal()),
			(quickLoader$a.addedItems[s] = this);
	}
}
var AbstractItem_1 = AbstractItem$6,
	_p$8 = AbstractItem$6.prototype;
_p$8.load = load$6;
_p$8._onLoad = _onLoad$6;
_p$8._onLoading = _onLoading;
_p$8._onPostLoading = _onPostLoading;
_p$8._onLoadComplete = _onLoadComplete;
_p$8.getCombinedPercent = getCombinedPercent;
_p$8.dispatch = dispatch;
AbstractItem$6.extensions = [];
AbstractItem$6.retrieve = function () {
	return !1;
};
function load$6() {
	this.isStartLoaded = !0;
}
function _onLoad$6() {
	this.onPost ? this.onPost.call(this, this.content, this.onPostLoadingSignal) : this._onLoadComplete();
}
function _onPostLoading(s) {
	(this.postPercent = s), this.hasLoading && this.loadingSignal.dispatch(1), s === 1 && this._onLoadComplete();
}
function _onLoadComplete() {
	(this.isLoaded = !0), (this.loadedWeight = this.weight), (quickLoader$a.loadedItems[this.url] = this), this.onLoaded.dispatch(this.content);
}
function getCombinedPercent(s) {
	return s * (1 - this.postWeightRatio) + this.postWeightRatio * this.postPercent;
}
function _onLoading(s) {
	this.loadedWeight = this.weight * this.getCombinedPercent(s);
}
function dispatch() {
	this.hasLoading && this.loadingSignal.remove(), this.onLoaded.dispatch(this.content);
}
var AbstractItem$5 = AbstractItem_1,
	quickLoader$9 = quickLoaderExports;
function __generateFuncName() {
	return '_jsonp' + new Date().getTime() + ~~(Math.random() * 1e8);
}
function JSONPItem(s) {
	s && _super$7.constructor.apply(this, arguments);
}
JSONPItem.type = 'jsonp';
JSONPItem.extensions = [];
quickLoader$9.register(JSONPItem);
JSONPItem.retrieve = function (s) {
	return typeof s == 'string' && s.indexOf('=') > -1 ? [s] : !1;
};
var _super$7 = AbstractItem$5.prototype,
	_p$7 = (JSONPItem.prototype = new AbstractItem$5());
_p$7.constructor = JSONPItem;
_p$7.load = load$5;
function load$5(s) {
	_super$7.load.apply(this, arguments);
	var e = this,
		t = this.url.lastIndexOf('=') + 1,
		i = this.url.substr(0, t),
		n = this.url.substr(t);
	n.length === 0 ? ((n = __generateFuncName()), (this.jsonpCallback = s)) : (this.jsonpCallback = this.jsonpCallback || window[n]),
		(window[n] = function (o) {
			r.parentNode && r.parentNode.removeChild(r), (e.content = o), e._onLoad();
		});
	var r = document.createElement('script');
	(r.type = 'text/javascript'), (r.src = i + n), document.getElementsByTagName('head')[0].appendChild(r);
}
var AbstractItem$4 = AbstractItem_1,
	quickLoader$8 = quickLoaderExports,
	undef$2,
	IS_SUPPORT_XML_HTTP_REQUEST = !!window.XMLHttpRequest;
function XHRItem$2(s) {
	s && (_super$6.constructor.apply(this, arguments), (this.responseType = this.responseType || ''), (this.method = this.method || 'GET'));
}
var XHRItem_1 = XHRItem$2;
XHRItem$2.type = 'xhr';
XHRItem$2.extensions = [];
quickLoader$8.register(XHRItem$2);
XHRItem$2.retrieve = function () {
	return !1;
};
var _super$6 = AbstractItem$4.prototype,
	_p$6 = (XHRItem$2.prototype = new AbstractItem$4());
_p$6.constructor = XHRItem$2;
_p$6.load = load$4;
_p$6._onXmlHttpChange = _onXmlHttpChange;
_p$6._onXmlHttpProgress = _onXmlHttpProgress;
_p$6._onLoad = _onLoad$5;
function load$4() {
	_super$6.load.apply(this, arguments);
	var s = this,
		e;
	IS_SUPPORT_XML_HTTP_REQUEST ? (e = this.xmlhttp = new XMLHttpRequest()) : (e = this.xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')),
		this.hasLoading &&
			(e.onprogress = function (t) {
				s._onXmlHttpProgress(t);
			}),
		(e.onreadystatechange = function () {
			s._onXmlHttpChange();
		}),
		e.open(this.method, this.url, !0),
		(this.xmlhttp.responseType = this.responseType),
		IS_SUPPORT_XML_HTTP_REQUEST ? e.send(null) : e.send();
}
function _onXmlHttpProgress(s) {
	this.loadingSignal.dispatch(s.loaded / s.total);
}
function _onXmlHttpChange() {
	this.xmlhttp.readyState === 4 && this.xmlhttp.status === 200 && this._onLoad(this.xmlhttp);
}
function _onLoad$5() {
	this.content || (this.content = this.xmlhttp.response), (this.xmlhttp = undef$2), _super$6._onLoad.call(this);
}
var XHRItem$1 = XHRItem_1,
	quickLoader$7 = quickLoaderExports;
function TextItem$1(s, e) {
	s && ((e.responseType = 'text'), _super$5.constructor.apply(this, arguments));
}
var TextItem_1 = TextItem$1;
TextItem$1.type = 'text';
TextItem$1.extensions = ['html', 'txt', 'svg'];
quickLoader$7.register(TextItem$1);
TextItem$1.retrieve = function () {
	return !1;
};
var _super$5 = XHRItem$1.prototype,
	_p$5 = (TextItem$1.prototype = new XHRItem$1());
_p$5.constructor = TextItem$1;
_p$5._onLoad = _onLoad$4;
function _onLoad$4() {
	this.content || (this.content = this.xmlhttp.responseText), _super$5._onLoad.apply(this, arguments);
}
var TextItem = TextItem_1,
	quickLoader$6 = quickLoaderExports;
function JSONItem(s) {
	s && _super$4.constructor.apply(this, arguments);
}
JSONItem.type = 'json';
JSONItem.extensions = ['json'];
quickLoader$6.register(JSONItem);
JSONItem.retrieve = function () {
	return !1;
};
var _super$4 = TextItem.prototype,
	_p$4 = (JSONItem.prototype = new TextItem());
_p$4.constructor = JSONItem;
_p$4._onLoad = _onLoad$3;
function _onLoad$3() {
	this.content || (this.content = window.JSON && window.JSON.parse ? JSON.parse(this.xmlhttp.responseText.toString()) : eval(this.xmlhttp.responseText.toString())), _super$4._onLoad.call(this);
}
var AbstractItem$3 = AbstractItem_1,
	quickLoader$5 = quickLoaderExports,
	undef$1;
function AudioItem(s, e) {
	if (s) {
		(this.loadThrough = !e || e.loadThrough === undef$1 ? !0 : e.loadThrough), _super$3.constructor.apply(this, arguments);
		try {
			this.content = this.content || new Audio();
		} catch {
			this.content = this.content || document.createElement('audio');
		}
		this.crossOrigin && (this.content.crossOrigin = this.crossOrigin);
	}
}
AudioItem.type = 'audio';
AudioItem.extensions = ['mp3', 'ogg'];
quickLoader$5.register(AudioItem);
AudioItem.retrieve = function (s) {
	return !1;
};
var _super$3 = AbstractItem$3.prototype,
	_p$3 = (AudioItem.prototype = new AbstractItem$3());
_p$3.constructor = AudioItem;
_p$3.load = load$3;
_p$3._onLoad = _onLoad$2;
function load$3() {
	_super$3.load.apply(this, arguments);
	var s = this,
		e = s.content;
	(e.src = this.url), this.loadThrough ? e.addEventListener('canplaythrough', this.boundOnLoad, !1) : e.addEventListener('canplay', this.boundOnLoad, !1), e.load();
}
function _onLoad$2() {
	this.content.removeEventListener('canplaythrough', this.boundOnLoad, !1), this.content.removeEventListener('canplay', this.boundOnLoad, !1), !this.isLoaded && _super$3._onLoad.call(this);
}
var AbstractItem$2 = AbstractItem_1,
	quickLoader$4 = quickLoaderExports,
	undef;
function VideoItem(s, e) {
	if (s) {
		(this.loadThrough = !e || e.loadThrough === undef ? !0 : e.loadThrough), _super$2.constructor.apply(this, arguments);
		try {
			this.content = this.content || new Video();
		} catch {
			this.content = this.content || document.createElement('video');
		}
		this.crossOrigin && (this.content.crossOrigin = this.crossOrigin);
	}
}
VideoItem.type = 'video';
VideoItem.extensions = ['mp4', 'webm', 'ogv'];
quickLoader$4.register(VideoItem);
VideoItem.retrieve = function (s) {
	return !1;
};
var _super$2 = AbstractItem$2.prototype,
	_p$2 = (VideoItem.prototype = new AbstractItem$2());
_p$2.constructor = VideoItem;
_p$2.load = load$2;
_p$2._onLoad = _onLoad$1;
function load$2() {
	_super$2.load.apply(this, arguments);
	var s = this.content;
	(s.preload = 'auto'), (s.src = this.url), this.loadThrough ? s.addEventListener('canplaythrough', this.boundOnLoad, !1) : s.addEventListener('canplay', this.boundOnLoad, !1), s.load();
}
function _onLoad$1() {
	this.content.removeEventListener('canplaythrough', this.boundOnLoad), this.content.removeEventListener('canplay', this.boundOnLoad), !this.isLoaded && _super$2._onLoad.call(this);
}
var AbstractItem$1 = AbstractItem_1,
	quickLoader$3 = quickLoaderExports;
function AnyItem$3(s, e) {
	s && (_super$1.constructor.call(this, s, e), !this.loadFunc && console && console[console.error || console.log]('require loadFunc in the config object.'));
}
AnyItem$3.type = 'any';
AnyItem$3.extensions = [];
quickLoader$3.register(AnyItem$3);
AnyItem$3.retrieve = function () {
	return !1;
};
var _super$1 = AbstractItem$1.prototype,
	_p$1 = (AnyItem$3.prototype = new AbstractItem$1());
_p$1.constructor = AnyItem$3;
_p$1.load = load$1;
function load$1() {
	var s = this;
	this.loadFunc(
		this.url,
		function (e) {
			(s.content = e), _super$1._onLoad.call(s);
		},
		this.loadingSignal,
	);
}
function computedStyle$1(s, e, t, i) {
	if (((t = window.getComputedStyle), (i = t ? t(s) : s.currentStyle), i))
		return i[
			e.replace(/-(\w)/gi, function (n, r) {
				return r.toUpperCase();
			})
		];
}
var computedStyle_commonjs = computedStyle$1,
	AbstractItem = AbstractItem_1,
	computedStyle = computedStyle_commonjs,
	quickLoader$2 = quickLoaderExports;
function ImageItem$1(s, e) {
	s && (_super.constructor.apply(this, arguments), (this.content = this.content || new Image()), this.crossOrigin && (this.content.crossOrigin = this.crossOrigin));
}
var _super = AbstractItem.prototype,
	_p = (ImageItem$1.prototype = new AbstractItem());
_p.constructor = ImageItem$1;
_p.load = load;
_p._onLoad = _onLoad;
ImageItem$1.retrieve = function (s) {
	if (s.nodeType && s.style) {
		var e = [];
		s.nodeName.toLowerCase() === 'img' && s.src.indexOf(';') < 0 && e.push(s.src),
			computedStyle(s, 'background-image').replace(/s?url\(\s*?['"]?([^;]*?)['"]?\s*?\)/g, function (i, n) {
				e.push(n);
			});
		for (var t = e.length; t--; ) _isNotData(e[t]) || e.splice(t, 1);
		return e.length ? e : !1;
	} else return typeof s == 'string' ? [s] : !1;
};
ImageItem$1.type = 'image';
ImageItem$1.extensions = ['jpg', 'gif', 'png'];
quickLoader$2.register(ImageItem$1);
function load() {
	_super.load.apply(this, arguments);
	var s = this.content;
	(s.onload = this.boundOnLoad), (s.src = this.url);
}
function _onLoad() {
	delete this.content.onload, (this.width = this.content.width), (this.height = this.content.height), _super._onLoad.call(this);
}
function _isNotData(s) {
	return s.indexOf('data:') !== 0;
}
var quickLoader = quickLoaderExports;
const quickLoader$1 = getDefaultExportFromCjs(quickLoader);
class Properties {
	win = window;
	isSecureConnection = window.location.protocol === 'https:';
	loader = quickLoader$1.create();
	percent = 0;
	easedPercent = 0;
	_isSupportedDevice = !1;
	_isSupportedBrowser = !1;
	_isSupportedWebGL = !1;
	_isSupportedMobileOrientation = !1;
	_isSupported = !1;
	time = 0;
	deltaTime = 0;
	hasInitialized = !1;
	hasStarted = !1;
	startTime = 0;
	viewportWidth = 0;
	viewportHeight = 0;
	width = 0;
	height = 0;
	renderer = null;
	scene = null;
	camera = null;
	postprocessing = null;
	resolution = new Vector2();
	viewportResolution = new Vector2();
	bgColor = new Color();
	canvas = null;
	gl = null;
	webglOpts = { antialias: !1, alpha: !1, xrCompatible: !0 };
	sharedUniforms = { u_cameraDirection: { value: this.cameraDirection }, u_time: { value: 0 }, u_deltaTime: { value: 1 }, u_resolution: { value: this.resolution }, u_viewportResolution: { value: this.viewportResolution }, u_bgColor: { value: this.bgColor } };
	initCallFuncList = [];
	changeCamera = new MinSignal$2();
	cameraLookX = 0;
	cameraLookY = 0;
	cameraDistance = 5;
	cameraLookStrength = 0;
	cameraLookEaseDamp = 0.1;
	cameraShakePositionStrength = 0.5;
	cameraShakePositionSpeed = 0.15;
	cameraShakeRotationStrength = 0.003;
	cameraShakeRotationSpeed = 0.3;
	cameraDollyZoomFovOffset = 0;
	smaa = null;
	fxaa = null;
	cameraMotionBlur = null;
	gtao = null;
	bokeh = null;
	bloom = null;
	screenPaintDistortion = null;
	final = null;
	bgColorHex = '#000000';
	opacity = 1;
	bloomAmount = 0;
	bloomRadius = 0.25;
	bloomThreshold = 0.2;
	bloomSmoothWidth = 0.75;
	haloWidth = 0.75;
	haloRGBShift = 0.03;
	haloStrength = 0.18;
	haloMaskInner = 0.3;
	haloMaskOuter = 0.5;
	vignetteFrom = 0.6;
	vignetteTo = 1.6;
	vignetteColorHex = '#000000';
	saturation = 1;
	contrast = 0;
	brightness = 1;
	tintColorHex = '#0044ef';
	tintOpacity = 0;
	bokehAmount = 0;
	bokehFNumber = 0.181;
	bokehFocusDistance = 4.5;
	bokehFocalLength = 0.344;
	bokehKFilmHeight = 19.26;
	screenPaintNeedsMouseDown = !1;
	screenPaintMinRadius = 0;
	screenPaintMaxRadius = 100;
	screenPaintRadiusDistanceRange = 100;
	screenPaintPushStrength = 25;
	screenPaintVelocityDissipation = 0.975;
	screenPaintWeight1Dissipation = 0.95;
	screenPaintWeight2Dissipation = 0.8;
	screenPaintUseNoise = !0;
	screenPaintCurlScale = 0.03;
	screenPaintCurlStrength = 3;
	screenPaintDistortionAmount = 20;
	screenPaintDistortionRGBShift = 0.5;
	screenPaintDistortionColorMultiplier = 10;
	screenPaintDistortionMultiplier = 5;
	upscalerSharpness = 1;
	exporterSignal = new MinSignal$2();
	onFirstClicked = new MinSignal$2();
	isPreloaderFinished = !1;
	startProjectChange = new MinSignal$2();
	changeProject = new MinSignal$2();
	activeProjectID = 'home';
	home = {};
	pong = {
		isVertical: !1,
		pongRingHeight: 0,
		activePlayer: 0,
		isBallInIdleState: !0,
		playerScore: 0,
		computerScore: 0,
		COLORS: [
			['#0051ff', '#ff0677'],
			['#51FF00', '#ae00ff'],
			['#D1FF00', '#2e00ff'],
			['#FF71CE', '#71ffa2'],
			['#01CDFE', '#fe3201'],
			['#05FFA1', '#ff0563'],
			['#B967FF', '#adff67'],
			['#FFFB96', '#969aff'],
			['#00B8FF', '#ff4700'],
			['#001EFF', '#ffe100'],
			['#BD00FF', '#42ff00'],
		],
		PLAYER_COLOR: '',
		COMPUTER_COLOR: '',
		showCommands: !0,
		isFirstRound: !0,
		isGameStarted: !1,
		isGameFinished: !1,
		showResult: !1,
		lastOneToScore: -1,
		winner: -1,
	};
	squareJump = { gameStartedSignal: new MinSignal$2(), gameEndedSignal: new MinSignal$2(), isGameStarted: !1, isGameEnded: !1 };
	playableArea = { height: 0, left: 0, right: 0, top: 0, bottom: 0 };
	isLightOn = !1;
	constructor() {}
}
const properties = new Properties(),
	blitVert = `#define GLSLIFY 1
attribute vec2 position;varying vec2 v_uv;void main(){v_uv=position*0.5+0.5;gl_Position=vec4(position,0.0,1.0);}`,
	blitFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_texture,v_uv);}`,
	uvBlitVert = `#define GLSLIFY 1
attribute vec2 position;attribute vec2 uv;varying vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position,0.0,1.0);}`,
	clearFrag = `#define GLSLIFY 1
uniform vec4 u_color;varying vec2 v_uv;void main(){gl_FragColor=u_color;}`,
	debugVert = `#define GLSLIFY 1
attribute vec3 position;attribute vec2 uv;uniform vec4 u_transform;varying vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position.xy*u_transform.zw+u_transform.xy,0.0,1.0);}`;
class FboHelper {
	isWebGL2;
	renderer;
	quadGeom;
	triGeom;
	floatType;
	precisionPrefix;
	precisionPrefix2;
	vertexShader;
	_scene;
	_camera;
	_tri;
	copyMaterial;
	uvCopyMaterial;
	clearMaterial;
	_debugScene;
	_debugMesh;
	_debugMaterial;
	init(e, t) {
		(this.renderer = e),
			(this.floatType = t),
			(this.isWebGL2 = this.renderer.capabilities.isWebGL2),
			(this._scene = new Scene()),
			(this._camera = new Camera()),
			(this._camera.position.z = 1),
			(this.triGeom = new BufferGeometry()),
			this.triGeom.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)),
			(this.quadGeom = new PlaneGeometry(2, 2)),
			(this._tri = new Mesh(this.triGeom)),
			(this._tri.frustumCulled = !1),
			this._scene.add(this._tri),
			(this.precisionPrefix = `precision ${this.renderer.capabilities.precision} float;
`),
			(this.precisionPrefix2 = `#version 300 es
			precision ${this.renderer.capabilities.precision} float;
			precision ${this.renderer.capabilities.precision} int;
			#define IS_WEBGL2 true
		`),
			this.isWebGL2
				? ((this.vertexPrefix = `${this.precisionPrefix2}
				precision mediump sampler2DArray;
				#define attribute in
				#define varying out
				#define texture2D texture
			`),
				  (this.fragmentPrefix = `${this.precisionPrefix2}
				#define varying in
				out highp vec4 pc_fragColor;
				#define gl_FragColor pc_fragColor
				#define gl_FragDepthEXT gl_FragDepth
				#define texture2D texture
				#define textureCube texture
				#define texture2DProj textureProj
				#define texture2DLodEXT textureLod
				#define texture2DProjLodEXT textureProjLod
				#define textureCubeLodEXT textureLod
				#define texture2DGradEXT textureGrad
				#define texture2DProjGradEXT textureProjGrad
				#define textureCubeGradEXT textureGrad
			`))
				: ((this.vertexPrefix = this.precisionPrefix), (this.fragmentPrefix = this.precisionPrefix)),
			this.renderer.getContext().getExtension('OES_standard_derivatives'),
			(this.vertexShader = this.precisionPrefix + blitVert),
			(this.copyMaterial = new RawShaderMaterial({ uniforms: { u_texture: { value: null } }, vertexShader: this.vertexShader, fragmentShader: this.precisionPrefix + blitFrag, depthTest: !1, depthWrite: !1, blending: NoBlending })),
			(this.uvCopyMaterial = new RawShaderMaterial({ uniforms: { u_texture: { value: null } }, vertexShader: this.precisionPrefix + uvBlitVert, fragmentShader: this.precisionPrefix + blitFrag, depthTest: !1, depthWrite: !1, blending: NoBlending })),
			(this.clearMaterial = new RawShaderMaterial({ uniforms: { u_color: { value: new Vector4(1, 1, 1, 1) } }, vertexShader: this.vertexShader, fragmentShader: this.precisionPrefix + clearFrag, depthTest: !1, depthWrite: !1, blending: NoBlending }));
		const i = new PlaneGeometry(1, 1);
		i.translate(0.5, -0.5, 0), (this._debugMaterial = new RawShaderMaterial({ uniforms: { u_texture: { value: null }, u_transform: { value: new Vector4(0, 0, 1, 1) } }, vertexShader: this.precisionPrefix + debugVert, fragmentShader: this.precisionPrefix + blitFrag, depthTest: !1, depthWrite: !1, blending: NoBlending })), (this._debugMesh = new Mesh(i, this._debugMaterial)), (this._debugScene = new Scene()), (this._debugScene.frustumCulled = !1), this._debugScene.add(this._debugMesh);
	}
	copy(e, t) {
		const i = this.copyMaterial;
		i && ((i.uniforms.u_texture.value = e), this.render(i, t));
	}
	uvCopy(e, t) {
		const i = this.uvCopyMaterial;
		i && ((i.uniforms.u_texture.value = e), this.render(i, t));
	}
	render(e, t) {
		this._tri && this.renderer && this._scene && this._camera && ((this._tri.material = e), t && this.renderer.setRenderTarget(t), this.renderer.render(this._scene, this._camera), t && this.renderer.setRenderTarget(null));
	}
	renderGeometry(e, t, i) {
		this._tri && this.triGeom && ((this._tri.geometry = e), this.render(t, i), (this._tri.geometry = this.triGeom));
	}
	renderMesh(e, t, i = this._camera) {
		this._tri && this.renderer && this._scene && i && ((this._tri.visible = !1), this._scene.add(e), t && this.renderer.setRenderTarget(t || null), this.renderer.render(this._scene, i), t && this.renderer.setRenderTarget(null), this._scene.remove(e), (this._tri.visible = !0));
	}
	debugTo(e, t, i, n, r) {
		if (!(this.renderer && this._debugMaterial && this._debugScene && this._camera)) return;
		(t = t || e.width || e.image.width), (i = i || e.height || e.image.height), (n = n || 0), (r = r || 0);
		const o = this.renderer.getSize(new Vector2());
		(n = (n / o.width) * 2 - 1), (r = 1 - (r / o.height) * 2), (t = (t / o.width) * 2), (i = (i / o.height) * 2), (this._debugMaterial.uniforms.u_texture.value = e), this._debugMaterial.uniforms.u_transform.value.set(n, r, t, i);
		const a = this.getColorState();
		(this.renderer.autoClearColor = !1), this.renderer.setRenderTarget(null), this.renderer.render(this._debugScene, this._camera), this.setColorState(a);
	}
	parseDefines(e) {
		let t = '';
		for (const i in e) {
			const n = e[i];
			n === !0
				? (t += `#define ${i}
`)
				: (t += `#define ${i} ${n}
`);
		}
		return t;
	}
	clearColor(e, t, i, n, r) {
		this.clearMaterial && (this.clearMaterial.uniforms.u_color.value.set(e, t, i, n), this.render(this.clearMaterial, r));
	}
	getColorState() {
		if (!this.renderer) return { autoClear: !0, autoClearColor: !0, autoClearStencil: !0, autoClearDepth: !0, clearColor: 0, clearAlpha: 1 };
		const e = new Color();
		return this.renderer.getClearColor(e), { autoClear: this.renderer.autoClear, autoClearColor: this.renderer.autoClearColor, autoClearStencil: this.renderer.autoClearStencil, autoClearDepth: this.renderer.autoClearDepth, clearColor: e.getHex(), clearAlpha: this.renderer.getClearAlpha() };
	}
	setColorState(e) {
		this.renderer && (this.renderer.setClearColor(e.clearColor, e.clearAlpha), (this.renderer.autoClear = e.autoClear), (this.renderer.autoClearColor = e.autoClearColor), (this.renderer.autoClearStencil = e.autoClearStencil), (this.renderer.autoClearDepth = e.autoClearDepth));
	}
	createRawShaderMaterial(e) {
		return (e = Object.assign({ depthTest: !1, depthWrite: !1, blending: NoBlending, vertexShader: blitVert, fragmentShader: blitFrag, derivatives: !1 }, e)), (e.vertexShader = (e.vertexShaderPrefix ? e.vertexShaderPrefix : e.derivatives ? this.vertexPrefix : this.precisionPrefix) + e.vertexShader), (e.fragmentShader = (e.fragmentShaderPrefix ? e.fragmentShaderPrefix : e.derivatives ? this.fragmentPrefix : this.precisionPrefix) + e.fragmentShader), delete e.vertexShaderPrefix, delete e.fragmentShaderPrefix, delete e.derivatives, new RawShaderMaterial(e);
	}
	createDataTexture(e, t, i, n = !1, r = !0) {
		let o = new DataTexture(e, t, i, RGBAFormat, n ? FloatType : UnsignedByteType, UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, r ? NearestFilter : LinearFilter, r ? NearestFilter : LinearFilter, 0);
		return (o.needsUpdate = !0), o;
	}
	createRenderTarget(e, t, i = !1, n = !1, r = 0) {
		return new WebGLRenderTarget(e, t, { wrapS: ClampToEdgeWrapping, wrapT: ClampToEdgeWrapping, magFilter: i ? NearestFilter : LinearFilter, minFilter: i ? NearestFilter : LinearFilter, type: n ? this.floatType : UnsignedByteType, anisotropy: 0, encoding: LinearEncoding, depthBuffer: !1, stencilBuffer: !1, samples: browser.isSupportMSAA ? r : 0 });
	}
	createMultisampleRenderTarget(e, t, i = !1, n = !1, r = 8) {
		return !(this.renderer && this.isWebGL2) || !browser.isSupportMSAA || r <= 1 ? this.createRenderTarget(e, t, i, n) : new WebGLRenderTarget(e, t, { wrapS: ClampToEdgeWrapping, wrapT: ClampToEdgeWrapping, magFilter: i ? NearestFilter : LinearFilter, minFilter: i ? NearestFilter : LinearFilter, type: n ? this.floatType : UnsignedByteType, anisotropy: 0, encoding: LinearEncoding, depthBuffer: !1, stencilBuffer: !1, samples: r });
	}
	clearMultisampleRenderTargetState(e) {
		if (((e = e || this.renderer.getRenderTarget()), e && e.samples > 0)) {
			const t = this.renderer.properties.get(e);
			let i = this.renderer.getContext();
			i.bindFramebuffer(i.READ_FRAMEBUFFER, t.__webglMultisampledFramebuffer), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, t.__webglFramebuffer);
			const n = e.width,
				r = e.height;
			let o = i.COLOR_BUFFER_BIT;
			e.depthBuffer && (o |= i.DEPTH_BUFFER_BIT), e.stencilBuffer && (o |= i.STENCIL_BUFFER_BIT), i.blitFramebuffer(0, 0, n, r, 0, 0, n, r, o, i.NEAREST), i.bindFramebuffer(i.FRAMEBUFFER, t.__webglMultisampledFramebuffer);
		}
	}
}
const fboHelper = new FboHelper();
let _geom;
class Postprocessing {
	width = 1;
	height = 1;
	scene = null;
	camera = null;
	resolution = new Vector2(0, 0);
	texelSize = new Vector2(0, 0);
	aspect = new Vector2(1, 1);
	onBeforeSceneRendered = new MinSignal$2();
	onAfterSceneRendered = new MinSignal$2();
	onAfterRendered = new MinSignal$2();
	sceneRenderTarget = null;
	fromRenderTarget = null;
	toRenderTarget = null;
	useDepthTexture = !0;
	depthTexture = null;
	fromTexture = null;
	toTexture = null;
	sceneTexture = null;
	mesh = null;
	queue = [];
	sharedUniforms = {};
	geom;
	hasSizeChanged = !0;
	init(e) {
		if (
			(Object.assign(this, e),
			_geom ? (this.geom = _geom) : ((this.geom = _geom = new BufferGeometry()), this.geom.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)), this.geom.setAttribute('a_uvClamp', new BufferAttribute(new Float32Array([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]), 4))),
			(this.sceneRenderTarget = fboHelper.createMultisampleRenderTarget(1, 1)),
			(this.sceneRenderTarget.depthBuffer = !0),
			(this.fromRenderTarget = fboHelper.createRenderTarget(1, 1)),
			(this.toRenderTarget = this.fromRenderTarget.clone()),
			(this.useDepthTexture = !!this.useDepthTexture && fboHelper.renderer && (fboHelper.renderer.capabilities.isWebGL2 || fboHelper.renderer.extensions.get('WEBGL_depth_texture'))),
			(this.fromTexture = this.fromRenderTarget.texture),
			(this.toTexture = this.toRenderTarget.texture),
			(this.sceneTexture = this.sceneRenderTarget.texture),
			(this.mesh = new Mesh()),
			(this.sharedUniforms = Object.assign(this.sharedUniforms, { u_sceneTexture: { value: this.sceneRenderTarget.texture }, u_fromTexture: { value: null }, u_toTexture: { value: null }, u_sceneDepthTexture: { value: null }, u_cameraNear: { value: 0 }, u_cameraFar: { value: 1 }, u_cameraFovRad: { value: 1 }, u_resolution: { value: this.resolution }, u_texelSize: { value: this.texelSize }, u_aspect: { value: this.aspect } })),
			this.useDepthTexture && fboHelper.renderer)
		) {
			const t = new DepthTexture(this.resolution.width, this.resolution.height);
			fboHelper.renderer.capabilities.isWebGL2 ? (t.type = UnsignedIntType) : ((t.format = DepthStencilFormat), (t.type = UnsignedInt248Type)), (t.minFilter = NearestFilter), (t.magFilter = NearestFilter), (this.sceneRenderTarget.depthTexture = t), (this.depthTexture = this.sharedUniforms.u_sceneDepthTexture.value = t);
		}
	}
	swap() {
		const e = this.fromRenderTarget;
		(this.fromRenderTarget = this.toRenderTarget), (this.toRenderTarget = e), (this.fromTexture = this.fromRenderTarget.texture), (this.toTexture = this.toRenderTarget.texture), (this.sharedUniforms.u_fromTexture.value = this.fromTexture), (this.sharedUniforms.u_toTexture.value = this.toTexture);
	}
	setSize(e, t) {
		if (this.width !== e || this.height !== t) {
			(this.hasSizeChanged = !0), (this.width = e), (this.height = t), this.resolution.set(e, t), this.texelSize.set(1 / e, 1 / t);
			const i = (t / Math.sqrt(e * e + t * t)) * 2;
			this.aspect.set((e / t) * i, i), this.sceneRenderTarget.setSize(e, t), this.fromRenderTarget.setSize(e, t), this.toRenderTarget.setSize(e, t);
		}
	}
	dispose() {
		this.fromRenderTarget && this.fromRenderTarget.dispose(), this.toRenderTarget && this.toRenderTarget.dispose(), this.sceneRenderTarget && this.sceneRenderTarget.dispose();
	}
	_filterQueue(e) {
		return e.enabled && e.needsRender();
	}
	renderMaterial(e, t) {
		(this.mesh.material = e), fboHelper.renderMesh(this.mesh, t);
	}
	render(e, t, i) {
		if (!fboHelper.renderer) return;
		(this.scene = e), (this.camera = t), (this.mesh.geometry = this.geom);
		const n = this.queue.filter(this._filterQueue),
			r = this.sharedUniforms;
		if ((n.sort((o, a) => (o.renderOrder == a.renderOrder ? 0 : o.renderOrder - a.renderOrder)), (r.u_sceneTexture.value = this.sceneRenderTarget.texture), (r.u_cameraNear.value = t.near), (r.u_cameraFar.value = t.far), (r.u_cameraFovRad.value = (t.fov / 180) * Math.PI), this.onBeforeSceneRendered.dispatch(), n.length)) {
			fboHelper.renderer.setRenderTarget(this.sceneRenderTarget), fboHelper.renderer.render(e, t), fboHelper.renderer.setRenderTarget(null), fboHelper.copy(this.sceneRenderTarget.texture, this.fromRenderTarget), this.onAfterSceneRendered.dispatch(this.sceneRenderTarget);
			const o = fboHelper.getColorState();
			fboHelper.renderer.autoClear = !1;
			for (let a = 0, c = n.length; a < c; a++) {
				const l = a === c - 1 && i,
					u = n[a];
				u.setPostprocessing(this), u.render(this, l);
			}
			fboHelper.setColorState(o);
		} else fboHelper.renderer.render(e, t), this.onAfterSceneRendered.dispatch();
		this.onAfterRendered.dispatch(), (this.hasSizeChanged = !1);
	}
}
class PostEffect {
	sharedUniforms = {};
	enabled = !0;
	material = null;
	renderOrder = 0;
	_hasShownWarning = !1;
	init(e) {
		Object.assign(this, e);
	}
	needsRender() {
		return !0;
	}
	warn(e) {
		this._hasShownWarning || (console.warn(e), (this._hasShownWarning = !0));
	}
	setPostprocessing(e) {}
	render(e, t = !1) {
		this.material.uniforms.u_texture && (this.material.uniforms.u_texture.value = e.fromTexture), fboHelper.render(this.material, t ? null : e.toRenderTarget), e.swap();
	}
}
const smaaBlendVert = `#define GLSLIFY 1
attribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[2];void SMAANeighborhoodBlendingVS(vec2 texcoord){v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-1.0,0.0,0.0,1.0);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(1.0,0.0,0.0,-1.0);}void main(){v_uv=position.xy*0.5+0.5;SMAANeighborhoodBlendingVS(v_uv);gl_Position=vec4(position,1.0);}`,
	smaaBlendFrag = `#define GLSLIFY 1
uniform sampler2D u_weightsTexture;uniform sampler2D u_texture;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[2];vec4 SMAANeighborhoodBlendingPS(vec2 texcoord,vec4 offset[2],sampler2D colorTex,sampler2D blendTex){vec4 a;a.xz=texture2D(blendTex,texcoord).xz;a.y=texture2D(blendTex,offset[1].zw).g;a.w=texture2D(blendTex,offset[1].xy).a;if(dot(a,vec4(1.0,1.0,1.0,1.0))<1e-5){return texture2D(colorTex,texcoord,0.0);}else{vec2 offset;offset.x=a.a>a.b ? a.a :-a.b;offset.y=a.g>a.r ?-a.g : a.r;if(abs(offset.x)>abs(offset.y)){offset.y=0.0;}else{offset.x=0.0;}vec4 C=texture2D(colorTex,texcoord,0.0);texcoord+=sign(offset)*u_texelSize;vec4 Cop=texture2D(colorTex,texcoord,0.0);float s=abs(offset.x)>abs(offset.y)? abs(offset.x): abs(offset.y);C.xyz=pow(abs(C.xyz),vec3(2.2));Cop.xyz=pow(abs(Cop.xyz),vec3(2.2));vec4 mixed=mix(C,Cop,s);mixed.xyz=pow(abs(mixed.xyz),vec3(1.0/2.2));return mixed;}}void main(){gl_FragColor=SMAANeighborhoodBlendingPS(v_uv,v_offsets,u_texture,u_weightsTexture);}`,
	smaaEdgesVert = `#define GLSLIFY 1
attribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];void SMAAEdgeDetectionVS(vec2 texcoord){v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-1.0,0.0,0.0,1.0);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(1.0,0.0,0.0,-1.0);v_offsets[2]=texcoord.xyxy+u_texelSize.xyxy*vec4(-2.0,0.0,0.0,2.0);}void main(){v_uv=position.xy*0.5+0.5;SMAAEdgeDetectionVS(v_uv);gl_Position=vec4(position,1.0);}`,
	smaaEdgesFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;varying vec2 v_uv;varying vec4 v_offsets[3];vec4 SMAAColorEdgeDetectionPS(vec2 texcoord,vec4 offset[3],sampler2D colorTex){vec2 threshold=vec2(SMAA_THRESHOLD,SMAA_THRESHOLD);vec4 delta;vec3 C=texture2D(colorTex,texcoord).rgb;vec3 Cleft=texture2D(colorTex,offset[0].xy).rgb;vec3 t=abs(C-Cleft);delta.x=max(max(t.r,t.g),t.b);vec3 Ctop=texture2D(colorTex,offset[0].zw).rgb;t=abs(C-Ctop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0,1.0))==0.0)discard;vec3 Cright=texture2D(colorTex,offset[1].xy).rgb;t=abs(C-Cright);delta.z=max(max(t.r,t.g),t.b);vec3 Cbottom=texture2D(colorTex,offset[1].zw).rgb;t=abs(C-Cbottom);delta.w=max(max(t.r,t.g),t.b);float maxDelta=max(max(max(delta.x,delta.y),delta.z),delta.w);vec3 Cleftleft=texture2D(colorTex,offset[2].xy).rgb;t=abs(C-Cleftleft);delta.z=max(max(t.r,t.g),t.b);vec3 Ctoptop=texture2D(colorTex,offset[2].zw).rgb;t=abs(C-Ctoptop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(max(maxDelta,delta.z),delta.w);edges.xy*=step(0.5*maxDelta,delta.xy);return vec4(edges,0.0,0.0);}void main(){gl_FragColor=SMAAColorEdgeDetectionPS(v_uv,v_offsets,u_texture);}`,
	smaaWeightsVert = `#define GLSLIFY 1
attribute vec3 position;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];varying vec2 v_pixcoord;void SMAABlendingWeightCalculationVS(vec2 texcoord){v_pixcoord=texcoord/u_texelSize;v_offsets[0]=texcoord.xyxy+u_texelSize.xyxy*vec4(-0.25,0.125,1.25,0.125);v_offsets[1]=texcoord.xyxy+u_texelSize.xyxy*vec4(-0.125,0.25,-0.125,-1.25);v_offsets[2]=vec4(v_offsets[0].xz,v_offsets[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*u_texelSize.xxyy*float(SMAA_MAX_SEARCH_STEPS);}void main(){v_uv=position.xy*0.5+0.5;SMAABlendingWeightCalculationVS(v_uv);gl_Position=vec4(position,1.0);}`,
	smaaWeightsFrag = `#define GLSLIFY 1
#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * u_texelSize, 0.0 )
uniform sampler2D u_edgesTexture;uniform sampler2D u_areaTexture;uniform sampler2D u_searchTexture;uniform vec2 u_texelSize;varying vec2 v_uv;varying vec4 v_offsets[3];varying vec2 v_pixcoord;vec2 round(vec2 x){return sign(x)*floor(abs(x)+0.5);}float SMAASearchLength(sampler2D searchTex,vec2 e,float bias,float scale){e.r=bias+e.r*scale;return 255.0*texture2D(searchTex,e,0.0).r;}float SMAASearchXLeft(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(2.0,0.0)*u_texelSize;if(!(texcoord.x>end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x+=0.25*u_texelSize.x;texcoord.x+=u_texelSize.x;texcoord.x+=2.0*u_texelSize.x;texcoord.x-=u_texelSize.x*SMAASearchLength(searchTex,e,0.0,0.5);return texcoord.x;}float SMAASearchXRight(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(2.0,0.0)*u_texelSize;if(!(texcoord.x<end&&e.g>0.8281&&e.r==0.0))break;}texcoord.x-=0.25*u_texelSize.x;texcoord.x-=u_texelSize.x;texcoord.x-=2.0*u_texelSize.x;texcoord.x+=u_texelSize.x*SMAASearchLength(searchTex,e,0.5,0.5);return texcoord.x;}float SMAASearchYUp(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord+=vec2(0.0,2.0)*u_texelSize;if(!(texcoord.y>end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y-=0.25*u_texelSize.y;texcoord.y-=u_texelSize.y;texcoord.y-=2.0*u_texelSize.y;texcoord.y+=u_texelSize.y*SMAASearchLength(searchTex,e.gr,0.0,0.5);return texcoord.y;}float SMAASearchYDown(sampler2D edgesTex,sampler2D searchTex,vec2 texcoord,float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<SMAA_MAX_SEARCH_STEPS;i++){e=texture2D(edgesTex,texcoord,0.0).rg;texcoord-=vec2(0.0,2.0)*u_texelSize;if(!(texcoord.y<end&&e.r>0.8281&&e.g==0.0))break;}texcoord.y+=0.25*u_texelSize.y;texcoord.y+=u_texelSize.y;texcoord.y+=2.0*u_texelSize.y;texcoord.y-=u_texelSize.y*SMAASearchLength(searchTex,e.gr,0.5,0.5);return texcoord.y;}vec2 SMAAArea(sampler2D areaTex,vec2 dist,float e1,float e2,float offset){vec2 texcoord=float(SMAA_AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texcoord=SMAA_AREATEX_PIXEL_SIZE*texcoord+(0.5*SMAA_AREATEX_PIXEL_SIZE);texcoord.y+=SMAA_AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTex,texcoord,0.0).rg;}vec4 SMAABlendingWeightCalculationPS(vec2 texcoord,vec2 pixcoord,vec4 offset[3],sampler2D edgesTex,sampler2D areaTex,sampler2D searchTex,ivec4 subsampleIndices){vec4 weights=vec4(0.0,0.0,0.0,0.0);vec2 e=texture2D(edgesTex,texcoord).rg;if(e.g>0.0){vec2 d;vec2 coords;coords.x=SMAASearchXLeft(edgesTex,searchTex,offset[0].xy,offset[2].x);coords.y=offset[1].y;d.x=coords.x;float e1=texture2D(edgesTex,coords,0.0).r;coords.x=SMAASearchXRight(edgesTex,searchTex,offset[0].zw,offset[2].y);d.y=coords.x;d=d/u_texelSize.x-pixcoord.x;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*u_texelSize.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(1,0)).r;weights.rg=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.y));}if(e.r>0.0){vec2 d;vec2 coords;coords.y=SMAASearchYUp(edgesTex,searchTex,offset[1].xy,offset[2].z);coords.x=offset[0].x;d.x=coords.y;float e1=texture2D(edgesTex,coords,0.0).g;coords.y=SMAASearchYDown(edgesTex,searchTex,offset[1].zw,offset[2].w);d.y=coords.y;d=d/u_texelSize.y-pixcoord.y;vec2 sqrt_d=sqrt(abs(d));coords.y-=1.0*u_texelSize.y;float e2=SMAASampleLevelZeroOffset(edgesTex,coords,ivec2(0,1)).g;weights.ba=SMAAArea(areaTex,sqrt_d,e1,e2,float(subsampleIndices.x));}return weights;}void main(){gl_FragColor=SMAABlendingWeightCalculationPS(v_uv,v_pixcoord,v_offsets,u_edgesTexture,u_areaTexture,u_searchTexture,ivec4(0.0));}`;
class Smaa extends PostEffect {
	edgesRenderTarget = null;
	weightsRenderTarget = null;
	edgesMaterial = null;
	weightsMaterial = null;
	init(e) {
		Object.assign(this, { sharedUniforms: { u_areaTexture: { value: null }, u_searchTexture: { value: null } } }, e),
			super.init(),
			(this.weightsRenderTarget = fboHelper.createRenderTarget(1, 1)),
			(this.edgesRenderTarget = fboHelper.createRenderTarget(1, 1)),
			(this.edgesMaterial = new RawShaderMaterial({ uniforms: { u_texture: { value: null }, u_texelSize: null }, vertexShader: fboHelper.precisionPrefix + smaaEdgesVert, fragmentShader: fboHelper.precisionPrefix + smaaEdgesFrag, defines: { SMAA_THRESHOLD: '0.1' }, blending: NoBlending, depthTest: !1, depthWrite: !1 })),
			(this.weightsMaterial = new RawShaderMaterial({ uniforms: { u_edgesTexture: { value: this.edgesRenderTarget.texture }, u_areaTexture: this.sharedUniforms.u_areaTexture, u_searchTexture: this.sharedUniforms.u_searchTexture, u_texelSize: null }, vertexShader: fboHelper.precisionPrefix + smaaWeightsVert, fragmentShader: fboHelper.precisionPrefix + smaaWeightsFrag, defines: { SMAA_MAX_SEARCH_STEPS: '8', SMAA_AREATEX_MAX_DISTANCE: '16', SMAA_AREATEX_PIXEL_SIZE: '( 1.0 / vec2( 160.0, 560.0 ) )', SMAA_AREATEX_SUBTEX_SIZE: '( 1.0 / 7.0 )' }, transparent: !0, blending: NoBlending, depthTest: !1, depthWrite: !1 })),
			(this.material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_weightsTexture: { value: this.weightsRenderTarget.texture }, u_texelSize: null }, vertexShader: fboHelper.precisionPrefix + smaaBlendVert, fragmentShader: fboHelper.precisionPrefix + smaaBlendFrag }));
	}
	setTextures(e, t) {
		const i = (this.sharedUniforms.u_areaTexture.value = this._createTexture(e));
		i.minFilter = LinearFilter;
		const n = (this.sharedUniforms.u_searchTexture.value = this._createTexture(t));
		(n.magFilter = NearestFilter), (n.minFilter = NearestFilter);
	}
	updateTextures() {
		(this.sharedUniforms.u_areaTexture.value.needsUpdate = !0), (this.sharedUniforms.u_searchTexture.value.needsUpdate = !0);
	}
	setPostprocessing(e) {
		super.setPostprocessing(e);
		const t = e.width,
			i = e.height;
		this.edgesRenderTarget.setSize(t, i), this.weightsRenderTarget.setSize(t, i);
	}
	dispose() {
		this.edgesRenderTarget && this.edgesRenderTarget.dispose(), this.weightsRenderTarget && this.weightsRenderTarget.dispose();
	}
	needsRender() {
		return !this.sharedUniforms.u_areaTexture.value.needsUpdate && properties.isSmaaEnabled;
	}
	render(e, t) {
		const i = fboHelper.getColorState();
		this.sharedUniforms.u_searchTexture.value || console.warn('You need to use Smaa.setImages() to set the smaa textures manually and assign to this class.');
		const n = fboHelper.renderer;
		n && ((n.autoClear = !0), n.setClearColor(0, 0)), (this.edgesMaterial.uniforms.u_texelSize = this.weightsMaterial.uniforms.u_texelSize = this.material.uniforms.u_texelSize = e.sharedUniforms.u_texelSize), (this.edgesMaterial.uniforms.u_texture.value = e.fromTexture), e.renderMaterial(this.edgesMaterial, this.edgesRenderTarget), e.renderMaterial(this.weightsMaterial, this.weightsRenderTarget), fboHelper.setColorState(i), (this.material.uniforms.u_texture.value = e.fromTexture), super.render(e, t);
	}
	_createTexture(e) {
		const t = new Texture(e);
		return (t.generateMipmaps = !1), (t.flipY = !1), t;
	}
}
const frag$9 = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_blurTexture0;
#if ITERATION > 1
uniform sampler2D u_blurTexture1;
#endif
#if ITERATION > 2
uniform sampler2D u_blurTexture2;
#endif
#if ITERATION > 3
uniform sampler2D u_blurTexture3;
#endif
#if ITERATION > 4
uniform sampler2D u_blurTexture4;
#endif
uniform float u_bloomWeights[ITERATION];
#include <common>
vec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}void main(){vec4 c=texture2D(u_texture,v_uv);gl_FragColor=c+(u_bloomWeights[0]*texture2D(u_blurTexture0,v_uv)
#if ITERATION > 1
+u_bloomWeights[1]*texture2D(u_blurTexture1,v_uv)
#endif
#if ITERATION > 2
+u_bloomWeights[2]*texture2D(u_blurTexture2,v_uv)
#endif
#if ITERATION > 3
+u_bloomWeights[3]*texture2D(u_blurTexture3,v_uv)
#endif
#if ITERATION > 4
+u_bloomWeights[4]*texture2D(u_blurTexture4,v_uv)
#endif
);gl_FragColor.rgb=dithering(gl_FragColor.rgb);gl_FragColor.a=1.0;}`,
	highPassFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform float u_luminosityThreshold;uniform float u_smoothWidth;
#ifdef USE_HALO
uniform vec2 u_texelSize;uniform vec2 u_aspect;uniform float u_haloWidth;uniform float u_haloRGBShift;uniform float u_haloStrength;uniform float u_haloMaskInner;uniform float u_haloMaskOuter;
#ifdef USE_LENS_DIRT
uniform sampler2D u_dirtTexture;uniform vec2 u_dirtAspect;
#endif
#endif
#ifdef USE_CONVOLUTION
uniform float u_convolutionBuffer;
#endif
varying vec2 v_uv;void main(){vec2 uv=v_uv;
#ifdef USE_CONVOLUTION
uv=(uv-0.5)*(1.0+u_convolutionBuffer)+0.5;
#endif
vec4 texel=texture2D(u_texture,uv);vec3 luma=vec3(0.299,0.587,0.114);float v=dot(texel.xyz,luma);vec4 outputColor=vec4(0.0,0.0,0.0,1.0);float alpha=smoothstep(u_luminosityThreshold,u_luminosityThreshold+u_smoothWidth,v);outputColor=mix(outputColor,texel,alpha);gl_FragColor=vec4(outputColor.rgb,1.0);
#ifdef USE_HALO
vec2 toCenter=(uv-0.5)*u_aspect;vec2 ghostUv=1.0-(toCenter+0.5);vec2 ghostVec=(vec2(0.5)-ghostUv);vec2 direction=normalize(ghostVec);vec2 haloVec=direction*u_haloWidth;float weight=length(vec2(0.5)-fract(ghostUv+haloVec));weight=pow(1.0-weight,3.0);vec3 distortion=vec3(-u_texelSize.x,0.0,u_texelSize.x)*u_haloRGBShift;float zoomBlurRatio=fract(atan(toCenter.y,toCenter.x)*40.0)*0.05+0.95;ghostUv*=zoomBlurRatio;vec2 haloUv=ghostUv+haloVec;vec3 halo=vec3(texture2D(u_texture,haloUv+direction*distortion.r).r,texture2D(u_texture,haloUv+direction*distortion.g).g,texture2D(u_texture,haloUv+direction*distortion.b).b)*u_haloStrength*smoothstep(u_haloMaskInner,u_haloMaskOuter,length(toCenter));
#ifdef USE_LENS_DIRT
vec2 dirtUv=(uv-0.5)*u_dirtAspect+0.5;vec3 dirt=texture2D(u_dirtTexture,dirtUv).rgb;gl_FragColor.rgb+=(halo+alpha+0.05*dirt)*dirt;
#else
gl_FragColor.rgb+=halo;
#endif
#endif
#ifdef USE_CONVOLUTION
gl_FragColor.rgb*=max(abs(uv.x-0.5),abs(uv.y-0.5))>0.5 ? 0. : 1.;
#endif
}`,
	blurFrag = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform vec2 u_resolution;uniform vec2 u_direction;float gaussianPdf(in float x,in float sigma){return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;}void main(){vec2 invSize=1.0/u_resolution;float fSigma=float(SIGMA);float weightSum=gaussianPdf(0.0,fSigma);vec3 diffuseSum=texture2D(u_texture,v_uv).rgb*weightSum;for(int i=1;i<KERNEL_RADIUS;i++){float x=float(i);float w=gaussianPdf(x,fSigma);vec2 uvOffset=u_direction*invSize*x;vec3 sample1=texture2D(u_texture,v_uv+uvOffset).rgb;vec3 sample2=texture2D(u_texture,v_uv-uvOffset).rgb;diffuseSum+=(sample1+sample2)*w;weightSum+=2.0*w;}gl_FragColor=vec4(diffuseSum/weightSum,1.0);}`,
	fftFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec2 u_texelSize;uniform float u_subtransformSize,u_normalization;uniform bool u_isHorizontal,u_isForward;const float TWOPI=6.283185307179586;void main(){float index=(u_isHorizontal ? gl_FragCoord.x : gl_FragCoord.y)-0.5;float evenIndex=floor(index/u_subtransformSize)*(u_subtransformSize*0.5)+mod(index,u_subtransformSize*0.5)+0.5;vec2 evenPos=(u_isHorizontal ? vec2(evenIndex,gl_FragCoord.y): vec2(gl_FragCoord.x,evenIndex))*u_texelSize;vec2 oddPos=evenPos+vec2(u_isHorizontal,!u_isHorizontal)*.5;vec4 even=texture2D(u_texture,evenPos);vec4 odd=texture2D(u_texture,oddPos);float twiddleArgument=(u_isForward ? TWOPI :-TWOPI)*(index/u_subtransformSize);vec2 twiddle=vec2(cos(twiddleArgument),sin(twiddleArgument));gl_FragColor=(even.rgba+vec4(twiddle.x*odd.xz-twiddle.y*odd.yw,twiddle.y*odd.xz+twiddle.x*odd.yw).xzyw)*u_normalization;}`,
	convolutionSrcFrag = `#define GLSLIFY 1
uniform vec2 u_aspect;varying vec2 v_uv;void main(){vec2 toCenter=(fract(v_uv+0.5)-0.5)*0.35*u_aspect;vec2 rotToCenter=mat2(0.7071067811865476,-0.7071067811865476,0.7071067811865476,0.7071067811865476)*toCenter;float res=exp(-length(toCenter)*2.0)*0.02+exp(-length(toCenter)*15.0)*0.5+exp(-length(toCenter)*50.0)*3.+exp(-length(rotToCenter*vec2(1.0,8.0))*75.0)*8.+exp(-length(rotToCenter*vec2(8.0,1.0))*75.0)*8.+exp(-length(rotToCenter*vec2(1.0,20.0))*150.0)*40.+exp(-length(rotToCenter*vec2(20.0,1.0))*150.0)*40.+exp(-length(toCenter*vec2(1.0,10.0))*60.0)*8.+exp(-length(toCenter*vec2(10.0,1.0))*60.0)*8.+exp(-length(toCenter*vec2(1.0,20.0))*120.0)*75.+exp(-length(toCenter*vec2(20.0,1.0))*120.0)*75.;gl_FragColor=vec4(res,0.0,res,0.0);}`,
	convolutionMixFrag = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_kernelTexture;void main(){vec4 a=texture2D(u_texture,v_uv);vec4 b=texture2D(u_kernelTexture,v_uv);gl_FragColor=vec4(a.xz*b.xz-a.yw*b.yw,a.xz*b.yw+a.yw*b.xz).xzyw;}`,
	convolutionCacheFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform float u_amount;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_texture,v_uv)*u_amount;}`,
	convolutionFrag = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_bloomTexture;uniform float u_convolutionBuffer;
#include <common>
vec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}void main(){vec4 c=texture2D(u_texture,v_uv);vec2 bloomUv=(v_uv-0.5)*(1.0-u_convolutionBuffer)+0.5;gl_FragColor=c+texture2D(u_bloomTexture,bloomUv);gl_FragColor.rgb=dithering(gl_FragColor.rgb);gl_FragColor.a=1.0;}`;
class MathUtils {
	PI = Math.PI;
	PI2 = this.PI * 2;
	HALF_PI = this.PI * 0.5;
	DEG2RAD = this.PI / 180;
	RAD2DEG = 180 / this.PI;
	step(e, t) {
		return t < e ? 0 : 1;
	}
	clamp(e, t, i) {
		return e < t ? t : e > i ? i : e;
	}
	mix(e, t, i) {
		return e + (t - e) * i;
	}
	cMix(e, t, i) {
		return e + (t - e) * this.clamp(i, 0, 1);
	}
	unMix(e, t, i) {
		return (i - e) / (t - e);
	}
	cUnMix(e, t, i) {
		return this.clamp((i - e) / (t - e), 0, 1);
	}
	saturate(e) {
		return this.clamp(e, 0, 1);
	}
	lerp(e, t, i) {
		return (i = i < 0 ? 0 : i), (i = i > 1 ? 1 : i), e + (t - e) * i;
	}
	fit(e, t, i, n, r, o) {
		return (e = this.cUnMix(t, i, e)), o && (e = o(e)), n + e * (r - n);
	}
	unClampedFit(e, t, i, n, r, o) {
		return (e = this.unMix(t, i, e)), o && (e = o(e)), n + e * (r - n);
	}
	loop(e, t, i) {
		return (e -= t), (i -= t), (e < 0 ? (i - (Math.abs(e) % i)) % i : e % i) + t;
	}
	normalize(e, t, i) {
		return Math.max(0, Math.min(1, e - t / i - t));
	}
	smoothstep(e, t, i) {
		return (i = this.cUnMix(e, t, i)), i * i * (3 - i * 2);
	}
	fract(e) {
		return e - Math.floor(e);
	}
	hash(e) {
		return this.fract(Math.sin(e) * 43758.5453123);
	}
	hash2(e, t) {
		return this.fract(Math.sin(e * 12.9898 + t * 4.1414) * 43758.5453);
	}
	sign(e) {
		return e ? (e < 0 ? -1 : 1) : 0;
	}
	isPowerOfTwo(e) {
		return (e & -e) === e;
	}
	powerTwoCeilingBase(e) {
		return Math.ceil(Math.log(e) / Math.log(2));
	}
	powerTwoCeiling(e) {
		return this.isPowerOfTwo(e) ? e : 1 << this.powerTwoCeilingBase(e);
	}
	powerTwoFloorBase(e) {
		return Math.floor(Math.log(e) / Math.log(2));
	}
	powerTwoFloor(e) {
		return this.isPowerOfTwo(e) ? e : 1 << this.powerTwoFloorBase(e);
	}
	latLngBearing(e, t, i, n) {
		let r = Math.sin(n - t) * Math.cos(i),
			o = Math.cos(e) * Math.sin(i) - Math.sin(e) * Math.cos(i) * Math.cos(n - t);
		return Math.atan2(r, o);
	}
	distanceTo(e, t) {
		return Math.sqrt(e * e + t * t);
	}
	distanceSqrTo(e, t) {
		return e * e + t * t;
	}
	distanceTo3(e, t, i) {
		return Math.sqrt(e * e + t * t + i * i);
	}
	distanceSqrTo3(e, t, i) {
		return e * e + t * t + i * i;
	}
	latLngDistance(e, t, i, n) {
		let r = Math.sin((i - e) / 2),
			o = Math.sin((n - t) / 2),
			a = r * r + Math.cos(e) * Math.cos(i) * o * o;
		return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	}
	cubicBezier(e, t, i, n, r) {
		let o = (t - e) * 3,
			a = (i - t) * 3 - o,
			c = n - e - o - a,
			l = r * r,
			u = l * r;
		return c * u + a * l + o * r + e;
	}
	cubicBezierFn(e, t, i, n) {
		let r = (t - e) * 3,
			o = (i - t) * 3 - r,
			a = n - e - r - o;
		return (c) => {
			let l = c * c,
				u = l * c;
			return a * u + o * l + r * c + e;
		};
	}
	normalizeAngle(e) {
		return (e += this.PI), (e = e < 0 ? this.PI2 - Math.abs(e % PI2) : e % this.PI2), (e -= this.PI), e;
	}
	closestAngleTo(e, t) {
		return e + this.normalizeAngle(t - e);
	}
	randomRange(e, t) {
		return e + Math.random() * (t - e);
	}
	randomRangeInt(e, t) {
		return Math.floor(this.randomRange(e, t + 1));
	}
	padZero(e, t) {
		return e.toString().length >= t ? e : (Math.pow(10, t) + Math.floor(e)).toString().substring(1);
	}
	getSeedRandomFn(e) {
		let t = 1779033703,
			i = 3144134277,
			n = 1013904242,
			r = 2773480762;
		for (let o = 0, a; o < e.length; o++) (a = e.charCodeAt(o)), (t = i ^ Math.imul(t ^ a, 597399067)), (i = n ^ Math.imul(i ^ a, 2869860233)), (n = r ^ Math.imul(n ^ a, 951274213)), (r = t ^ Math.imul(r ^ a, 2716044179));
		return _sfc32(Math.imul(n ^ (t >>> 18), 597399067), Math.imul(r ^ (i >>> 22), 2869860233), Math.imul(t ^ (n >>> 17), 951274213), Math.imul(i ^ (r >>> 19), 2716044179));
	}
}
function _sfc32(s, e, t, i) {
	return function () {
		(s |= 0), (e |= 0), (t |= 0), (i |= 0);
		var n = (((s + e) | 0) + i) | 0;
		return (i = (i + 1) | 0), (s = e ^ (e >>> 9)), (e = (t + (t << 3)) | 0), (t = (t << 21) | (t >>> 11)), (t = (t + n) | 0), (n >>> 0) / 4294967296;
	};
}
const math = new MathUtils();
class Bloom extends PostEffect {
	ITERATION = 5;
	USE_CONVOLUTION = !0;
	USE_HD = !0;
	USE_LENS_DIRT = !1;
	amount = 1;
	radius = 0;
	threshold = 0.1;
	smoothWidth = 1;
	haloWidth = 0.8;
	haloRGBShift = 0.03;
	haloStrength = 0.21;
	haloMaskInner = 0.3;
	haloMaskOuter = 0.5;
	highPassMaterial;
	highPassRenderTarget;
	fftMaterial;
	srcMaterial;
	convolutionSrcFrag = convolutionSrcFrag;
	srcSize = 256;
	srcRT;
	fftCacheRT1;
	fftCacheRT2;
	fftSrcRT;
	fftBloomOutCacheMaterial;
	fftBloomOutCacheRT;
	convolutionMixMaterial;
	convolutionMixDownScale = 1;
	convolutionBuffer = 0.1;
	renderTargetsHorizontal = [];
	renderTargetsVertical = [];
	blurMaterials = [];
	directionX = new Vector2(1, 0);
	directionY = new Vector2(0, 1);
	init(e) {
		Object.assign(this, e), super.init();
		let t = this.USE_HD ? HalfFloatType : !1;
		if (((this.highPassRenderTarget = fboHelper.createRenderTarget(1, 1, !this.USE_HD, t)), (this.highPassMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_luminosityThreshold: { value: 1 }, u_smoothWidth: { value: 1 }, u_haloWidth: { value: 1 }, u_haloRGBShift: { value: 1 }, u_haloStrength: { value: 1 }, u_haloMaskInner: { value: 1 }, u_haloMaskOuter: { value: 1 }, u_texelSize: null, u_aspect: { value: new Vector2() }, u_dirtTexture: { value: null }, u_dirtAspect: { value: new Vector2() } }, fragmentShader: highPassFrag })), (this.highPassMaterial.defines.USE_LENS_DIRT = this.USE_LENS_DIRT), this.USE_CONVOLUTION))
			(this.highPassMaterial.defines.USE_CONVOLUTION = !0),
				(this.highPassMaterial.uniforms.u_convolutionBuffer = { value: 0.15 }),
				(this.fftSrcRT = fboHelper.createRenderTarget(1, 1, !0, t)),
				(this.fftCacheRT1 = fboHelper.createRenderTarget(1, 1, !0, t)),
				(this.fftCacheRT2 = this.fftCacheRT1.clone()),
				(this.fftBloomOutCacheRT = fboHelper.createRenderTarget(1, 1)),
				(this.srcMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_aspect: { value: new Vector2() } }, fragmentShader: this.convolutionSrcFrag })),
				(this.fftMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_texelSize: { value: new Vector2() }, u_subtransformSize: { value: 0 }, u_normalization: { value: 0 }, u_isHorizontal: { value: 0 }, u_isForward: { value: 0 } }, fragmentShader: fftFrag })),
				(this.convolutionMixMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_kernelTexture: { value: this.fftSrcRT.texture } }, fragmentShader: convolutionMixFrag })),
				(this.fftBloomOutCacheMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_amount: { value: 0 } }, fragmentShader: convolutionCacheFrag })),
				(this.material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_bloomTexture: { value: this.fftBloomOutCacheRT.texture }, u_convolutionBuffer: this.highPassMaterial.uniforms.u_convolutionBuffer }, fragmentShader: convolutionFrag, blending: NoBlending }));
		else {
			for (let i = 0; i < this.ITERATION; i++) {
				this.renderTargetsHorizontal.push(fboHelper.createRenderTarget(1, 1, !1, t)), this.renderTargetsVertical.push(fboHelper.createRenderTarget(1, 1, !1, t));
				const n = 3 + i * 2;
				this.blurMaterials[i] = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_resolution: { value: new Vector2() }, u_direction: { value: null } }, fragmentShader: blurFrag, defines: { KERNEL_RADIUS: n, SIGMA: n } });
			}
			this.material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_bloomStrength: { value: 1 }, u_bloomWeights: { value: [] } }, fragmentShader: frag$9, blending: NoBlending, defines: { ITERATION: this.ITERATION } });
			for (let i = 0; i < this.ITERATION; i++) this.material.uniforms['u_blurTexture' + i] = { value: this.renderTargetsVertical[i].texture };
		}
	}
	setDirtTexture(e) {
		this.highPassMaterial.uniforms.u_dirtTexture.value = e;
	}
	setPostprocessing(e) {
		const t = e.width,
			i = e.height;
		if (this.USE_CONVOLUTION) {
			let n = math.powerTwoCeiling(t / 2) >> this.convolutionMixDownScale,
				r = math.powerTwoCeiling(i / 2) >> this.convolutionMixDownScale;
			if ((this.highPassRenderTarget.setSize(n, r), n !== this.fftCacheRT1.width || r !== this.fftCacheRT1.height)) {
				this.fftSrcRT.setSize(n, r), this.fftCacheRT1.setSize(n, r), this.fftCacheRT2.setSize(n, r), this.fftBloomOutCacheRT.setSize(n, r);
				let o = i / Math.max(t, i);
				this.srcMaterial.uniforms.u_aspect.value.set((t / i) * o, o), fboHelper.render(this.srcMaterial, this.fftCacheRT1), this.renderFFT(this.fftCacheRT1, this.fftSrcRT, !0);
			}
		} else {
			let n = Math.ceil(t / 2),
				r = Math.ceil(i / 2);
			this.highPassRenderTarget.setSize(n, r), super.setPostprocessing(e);
			for (let o = 0; o < this.ITERATION; o++) this.renderTargetsHorizontal[o].setSize(n, r), this.renderTargetsVertical[o].setSize(n, r), this.blurMaterials[o].uniforms.u_resolution.value.set(n, r), (n = Math.ceil(n / 2)), (r = Math.ceil(r / 2));
		}
	}
	dispose() {
		if (!this.USE_CONVOLUTION) {
			this.highPassRenderTarget && this.highPassRenderTarget.dispose();
			for (let e = 0; e < this.ITERATION; e++) this.renderTargetsHorizontal[e] && this.renderTargetsHorizontal[e].dispose(), this.renderTargetsVertical[e] && this.renderTargetsVertical[e].dispose();
		}
	}
	needsRender() {
		return !!this.amount;
	}
	renderFFT(e, t, i) {
		let n = e.width,
			r = e.height,
			o = Math.round(Math.log(n) / Math.log(2)),
			a = Math.round(Math.log(r) / Math.log(2)),
			c = o + a,
			l = c % 2 === 0,
			u = this.fftMaterial,
			h = u.uniforms;
		for (let d = 0; d < c; d++) {
			let m = d < o;
			(h.u_texture.value = e.texture), (h.u_normalization.value = d === 0 ? 1 / Math.sqrt(n * r) : 1), (h.u_isHorizontal.value = !!m), (h.u_isForward.value = !!i), h.u_texelSize.value.set(1 / n, 1 / r), (h.u_subtransformSize.value = Math.pow(2, (m ? d : d - o) + 1)), fboHelper.render(u, t);
			let g = e;
			(e = t), (t = g);
		}
		l && fboHelper.copy(e.texture, t);
	}
	render(e, t = !1) {
		let i = properties.postprocessing.width,
			n = properties.postprocessing.height;
		(this.highPassMaterial.uniforms.u_texture.value = e.fromTexture), (this.highPassMaterial.uniforms.u_luminosityThreshold.value = this.threshold), (this.highPassMaterial.uniforms.u_smoothWidth.value = this.smoothWidth), (this.highPassMaterial.uniforms.u_haloWidth.value = this.haloWidth), (this.highPassMaterial.uniforms.u_haloRGBShift.value = this.haloRGBShift * i), (this.highPassMaterial.uniforms.u_haloStrength.value = this.haloStrength), (this.highPassMaterial.uniforms.u_haloMaskInner.value = this.haloMaskInner), (this.highPassMaterial.uniforms.u_haloMaskOuter.value = this.haloMaskOuter), (this.highPassMaterial.uniforms.u_texelSize = e.sharedUniforms.u_texelSize), (this.highPassMaterial.uniforms.u_aspect = e.sharedUniforms.u_aspect);
		let r = this.haloStrength > 0,
			o = (n / Math.sqrt(i * i + n * n)) * 2;
		if ((this.highPassMaterial.uniforms.u_aspect.value.set((i / n) * o, o), (o = n / Math.max(i, n)), this.highPassMaterial.uniforms.u_dirtAspect.value.set((i / n) * o, o), this.highPassMaterial.defines.USE_HALO !== r && ((this.highPassMaterial.defines.USE_HALO = r), (this.highPassMaterial.needsUpdate = !0)), this.USE_CONVOLUTION && (this.highPassMaterial.uniforms.u_convolutionBuffer.value = this.convolutionBuffer), e.renderMaterial(this.highPassMaterial, this.highPassRenderTarget), this.USE_CONVOLUTION)) {
			fboHelper.copy(this.highPassRenderTarget.texture, this.fftCacheRT1), this.renderFFT(this.fftCacheRT1, this.fftCacheRT2, !0), (this.convolutionMixMaterial.uniforms.u_texture.value = this.fftCacheRT2.texture), fboHelper.render(this.convolutionMixMaterial, this.fftCacheRT1), this.renderFFT(this.fftCacheRT1, this.fftCacheRT2, !1);
			let a = this.amount * 1024;
			(a /= Math.pow(math.powerTwoCeilingBase(this.fftCacheRT1.width * this.fftCacheRT1.height), 4)), (this.fftBloomOutCacheMaterial.uniforms.u_amount.value = a), (this.fftBloomOutCacheMaterial.uniforms.u_texture.value = this.fftCacheRT2.texture), e.renderMaterial(this.fftBloomOutCacheMaterial, this.fftBloomOutCacheRT), super.render(e, t);
		} else {
			let a = this.highPassRenderTarget;
			for (let c = 0; c < this.ITERATION; c++) {
				const l = this.blurMaterials[c];
				(l.uniforms.u_texture.value = a.texture), (l.uniforms.u_direction.value = this.directionX), e.renderMaterial(l, this.renderTargetsHorizontal[c]), (l.uniforms.u_texture.value = this.renderTargetsHorizontal[c].texture), (l.uniforms.u_direction.value = this.directionY), e.renderMaterial(l, this.renderTargetsVertical[c]), (a = this.renderTargetsVertical[c]);
			}
			this.material.uniforms.u_texture.value = e.fromTexture;
			for (let c = 0; c < this.ITERATION; c++) {
				const l = (this.ITERATION - c) / this.ITERATION;
				this.material.uniforms.u_bloomWeights.value[c] = (this.amount * (l + (1.2 - l * 2) * this.radius)) / Math.pow(2, this.ITERATION - c - 1);
			}
			super.render(e, t);
		}
	}
}
const bokehCocShader = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform sampler2D u_depthTexture;uniform vec2 u_texelSize;uniform float u_focusDistance;uniform float u_lensCoeff;uniform float u_maxCoC;uniform float u_rcpMaxCoC;uniform float u_cameraNear;uniform float u_cameraFar;varying vec2 v_uv;float max3(vec3 xyz){return max(xyz.x,max(xyz.y,xyz.z));}
#ifndef USE_FLOAT
uniform float u_hashNoise;float hash13(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}
#endif
float getViewZ(vec2 uv){float depth=texture2D(u_depthTexture,uv).r*2.0-1.0;return 2.0*u_cameraNear*u_cameraFar/(u_cameraFar+u_cameraNear-depth*(u_cameraFar-u_cameraNear));}void main(){vec3 duv=u_texelSize.xyx*vec3(0.5,0.5,-0.5);vec3 c0=texture2D(u_texture,v_uv-duv.xy).rgb;vec3 c1=texture2D(u_texture,v_uv-duv.zy).rgb;vec3 c2=texture2D(u_texture,v_uv+duv.zy).rgb;vec3 c3=texture2D(u_texture,v_uv+duv.xy).rgb;vec2 uvAlt=v_uv;float d0=getViewZ(uvAlt-duv.xy);float d1=getViewZ(uvAlt-duv.zy);float d2=getViewZ(uvAlt+duv.zy);float d3=getViewZ(uvAlt+duv.xy);vec4 depths=vec4(d0,d1,d2,d3);float focusDistance=u_focusDistance;vec4 cocs=(depths-focusDistance)*u_lensCoeff/depths;cocs=clamp(cocs,-u_maxCoC,u_maxCoC);vec4 weights=clamp(abs(cocs)*u_rcpMaxCoC,vec4(0.0),vec4(1.0));weights.x*=1.0/(max3(c0)+1.0);weights.y*=1.0/(max3(c1)+1.0);weights.z*=1.0/(max3(c2)+1.0);weights.w*=1.0/(max3(c3)+1.0);vec3 avg=c0*weights.x+c1*weights.y+c2*weights.z+c3*weights.w;avg/=dot(weights,vec4(1.0));float coc=dot(cocs,vec4(0.25));avg*=smoothstep(0.0,u_texelSize.y*2.0,abs(coc));gl_FragColor=vec4(avg,coc);
#ifndef USE_FLOAT
gl_FragColor=sign(gl_FragColor)*sqrt(abs(gl_FragColor));gl_FragColor=gl_FragColor*0.5+0.5+hash13(vec3(gl_FragCoord.xy,u_hashNoise))/255.0;
#endif
}`,
	bokehSimShader = `#define GLSLIFY 1
#if QUALITY == 0
const int kSampleCount=16;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.54545456,0.0);kDiskKernel[2]=vec2(0.16855472,0.5187581);kDiskKernel[3]=vec2(-0.44128203,0.3206101);kDiskKernel[4]=vec2(-0.44128197,-0.3206102);kDiskKernel[5]=vec2(0.1685548,-0.5187581);kDiskKernel[6]=vec2(1.0,0.0);kDiskKernel[7]=vec2(0.809017,0.58778524);kDiskKernel[8]=vec2(0.30901697,0.95105654);kDiskKernel[9]=vec2(-0.30901703,0.9510565);kDiskKernel[10]=vec2(-0.80901706,0.5877852);kDiskKernel[11]=vec2(-1.0,0.0);kDiskKernel[12]=vec2(-0.80901694,-0.58778536);kDiskKernel[13]=vec2(-0.30901664,-0.9510566);kDiskKernel[14]=vec2(0.30901712,-0.9510565);kDiskKernel[15]=vec2(0.80901694,-0.5877853);}
#endif
#if QUALITY == 1
const int kSampleCount=22;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.53333336,0.0);kDiskKernel[2]=vec2(0.3325279,0.4169768);kDiskKernel[3]=vec2(-0.11867785,0.5199616);kDiskKernel[4]=vec2(-0.48051673,0.2314047);kDiskKernel[5]=vec2(-0.48051673,-0.23140468);kDiskKernel[6]=vec2(-0.11867763,-0.51996166);kDiskKernel[7]=vec2(0.33252785,-0.4169769);kDiskKernel[8]=vec2(1.0,0.0);kDiskKernel[9]=vec2(0.90096885,0.43388376);kDiskKernel[10]=vec2(0.6234898,0.7818315);kDiskKernel[11]=vec2(0.22252098,0.9749279);kDiskKernel[12]=vec2(-0.22252095,0.9749279);kDiskKernel[13]=vec2(-0.62349,0.7818314);kDiskKernel[14]=vec2(-0.90096885,0.43388382);kDiskKernel[15]=vec2(-1.0,0.0);kDiskKernel[16]=vec2(-0.90096885,-0.43388376);kDiskKernel[17]=vec2(-0.6234896,-0.7818316);kDiskKernel[18]=vec2(-0.22252055,-0.974928);kDiskKernel[19]=vec2(0.2225215,-0.9749278);kDiskKernel[20]=vec2(0.6234897,-0.7818316);kDiskKernel[21]=vec2(0.90096885,-0.43388376);}
#endif
#if QUALITY == 2
const int kSampleCount=43;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0.0,0.0);kDiskKernel[1]=vec2(0.36363637,0.0);kDiskKernel[2]=vec2(0.22672357,0.28430238);kDiskKernel[3]=vec2(-0.08091671,0.35451925);kDiskKernel[4]=vec2(-0.32762504,0.15777594);kDiskKernel[5]=vec2(-0.32762504,-0.15777591);kDiskKernel[6]=vec2(-0.08091656,-0.35451928);kDiskKernel[7]=vec2(0.22672352,-0.2843024);kDiskKernel[8]=vec2(0.6818182,0.0);kDiskKernel[9]=vec2(0.614297,0.29582983);kDiskKernel[10]=vec2(0.42510667,0.5330669);kDiskKernel[11]=vec2(0.15171885,0.6647236);kDiskKernel[12]=vec2(-0.15171883,0.6647236);kDiskKernel[13]=vec2(-0.4251068,0.53306687);kDiskKernel[14]=vec2(-0.614297,0.29582986);kDiskKernel[15]=vec2(-0.6818182,0);kDiskKernel[16]=vec2(-0.614297,-0.29582983);kDiskKernel[17]=vec2(-0.42510656,-0.53306705);kDiskKernel[18]=vec2(-0.15171856,-0.66472363);kDiskKernel[19]=vec2(0.1517192,-0.6647235);kDiskKernel[20]=vec2(0.4251066,-0.53306705);kDiskKernel[21]=vec2(0.614297,-0.29582983);kDiskKernel[22]=vec2(1.0,0.0);kDiskKernel[23]=vec2(0.9555728,0.2947552);kDiskKernel[24]=vec2(0.82623875,0.5633201);kDiskKernel[25]=vec2(0.6234898,0.7818315);kDiskKernel[26]=vec2(0.36534098,0.93087375);kDiskKernel[27]=vec2(0.07473,0.9972038);kDiskKernel[28]=vec2(-0.22252095,0.9749279);kDiskKernel[29]=vec2(-0.50000006,0.8660254);kDiskKernel[30]=vec2(-0.73305196,0.6801727);kDiskKernel[31]=vec2(-0.90096885,0.43388382);kDiskKernel[32]=vec2(-0.98883086,0.14904208);kDiskKernel[33]=vec2(-0.9888308,-0.14904249);kDiskKernel[34]=vec2(-0.90096885,-0.43388376);kDiskKernel[35]=vec2(-0.73305184,-0.6801728);kDiskKernel[36]=vec2(-0.4999999,-0.86602545);kDiskKernel[37]=vec2(-0.222521,-0.9749279);kDiskKernel[38]=vec2(0.07473029,-0.99720377);kDiskKernel[39]=vec2(0.36534148,-0.9308736);kDiskKernel[40]=vec2(0.6234897,-0.7818316);kDiskKernel[41]=vec2(0.8262388,-0.56332);kDiskKernel[42]=vec2(0.9555729,-0.29475483);}
#endif
#if QUALITY == 3
const int kSampleCount=71;vec2 kDiskKernel[kSampleCount];void initKernel(){kDiskKernel[0]=vec2(0,0);kDiskKernel[1]=vec2(0.2758621,0.0);kDiskKernel[2]=vec2(0.1719972,0.21567768);kDiskKernel[3]=vec2(-0.061385095,0.26894566);kDiskKernel[4]=vec2(-0.24854316,0.1196921);kDiskKernel[5]=vec2(-0.24854316,-0.11969208);kDiskKernel[6]=vec2(-0.061384983,-0.2689457);kDiskKernel[7]=vec2(0.17199717,-0.21567771);kDiskKernel[8]=vec2(0.51724136,0.0);kDiskKernel[9]=vec2(0.46601835,0.22442262);kDiskKernel[10]=vec2(0.32249472,0.40439558);kDiskKernel[11]=vec2(0.11509705,0.50427306);kDiskKernel[12]=vec2(-0.11509704,0.50427306);kDiskKernel[13]=vec2(-0.3224948,0.40439552);kDiskKernel[14]=vec2(-0.46601835,0.22442265);kDiskKernel[15]=vec2(-0.51724136,0.0);kDiskKernel[16]=vec2(-0.46601835,-0.22442262);kDiskKernel[17]=vec2(-0.32249463,-0.40439564);kDiskKernel[18]=vec2(-0.11509683,-0.5042731);kDiskKernel[19]=vec2(0.11509732,-0.504273);kDiskKernel[20]=vec2(0.32249466,-0.40439564);kDiskKernel[21]=vec2(0.46601835,-0.22442262);kDiskKernel[22]=vec2(0.7586207,0.0);kDiskKernel[23]=vec2(0.7249173,0.22360738);kDiskKernel[24]=vec2(0.6268018,0.4273463);kDiskKernel[25]=vec2(0.47299224,0.59311354);kDiskKernel[26]=vec2(0.27715522,0.7061801);kDiskKernel[27]=vec2(0.056691725,0.75649947);kDiskKernel[28]=vec2(-0.168809,0.7396005);kDiskKernel[29]=vec2(-0.3793104,0.65698475);kDiskKernel[30]=vec2(-0.55610836,0.51599306);kDiskKernel[31]=vec2(-0.6834936,0.32915324);kDiskKernel[32]=vec2(-0.7501475,0.113066405);kDiskKernel[33]=vec2(-0.7501475,-0.11306671);kDiskKernel[34]=vec2(-0.6834936,-0.32915318);kDiskKernel[35]=vec2(-0.5561083,-0.5159932);kDiskKernel[36]=vec2(-0.37931028,-0.6569848);kDiskKernel[37]=vec2(-0.16880904,-0.7396005);kDiskKernel[38]=vec2(0.056691945,-0.7564994);kDiskKernel[39]=vec2(0.2771556,-0.7061799);kDiskKernel[40]=vec2(0.47299215,-0.59311366);kDiskKernel[41]=vec2(0.62680185,-0.4273462);kDiskKernel[42]=vec2(0.72491735,-0.22360711);kDiskKernel[43]=vec2(1.0,0.0);kDiskKernel[44]=vec2(0.9749279,0.22252093);kDiskKernel[45]=vec2(0.90096885,0.43388376);kDiskKernel[46]=vec2(0.7818315,0.6234898);kDiskKernel[47]=vec2(0.6234898,0.7818315);kDiskKernel[48]=vec2(0.43388364,0.9009689);kDiskKernel[49]=vec2(0.22252098,0.9749279);kDiskKernel[50]=vec2(0.0,1.0);kDiskKernel[51]=vec2(-0.22252095,0.9749279);kDiskKernel[52]=vec2(-0.43388385,0.90096885);kDiskKernel[53]=vec2(-0.62349,0.7818314);kDiskKernel[54]=vec2(-0.7818317,0.62348956);kDiskKernel[55]=vec2(-0.90096885,0.43388382);kDiskKernel[56]=vec2(-0.9749279,0.22252093);kDiskKernel[57]=vec2(-1.0,0.0);kDiskKernel[58]=vec2(-0.9749279,-0.22252087);kDiskKernel[59]=vec2(-0.90096885,-0.43388376);kDiskKernel[60]=vec2(-0.7818314,-0.6234899);kDiskKernel[61]=vec2(-0.6234896,-0.7818316);kDiskKernel[62]=vec2(-0.43388346,-0.900969);kDiskKernel[63]=vec2(-0.22252055,-0.974928);kDiskKernel[64]=vec2(0.0,-1.0);kDiskKernel[65]=vec2(0.2225215,-0.9749278);kDiskKernel[66]=vec2(0.4338835,-0.90096897);kDiskKernel[67]=vec2(0.6234897,-0.7818316);kDiskKernel[68]=vec2(0.78183144,-0.62348986);kDiskKernel[69]=vec2(0.90096885,-0.43388376);kDiskKernel[70]=vec2(0.9749279,-0.22252086);}
#endif
uniform sampler2D u_cocTexture;uniform vec2 u_cocTexelSize;uniform float u_rcpAspect;uniform float u_maxCoC;varying vec2 v_uv;void main(){initKernel();vec4 samp0=texture2D(u_cocTexture,v_uv);
#ifndef USE_FLOAT
samp0=samp0*2.0-1.0;samp0=sign(samp0)*samp0*samp0;
#endif
vec4 bgAcc=vec4(0.0);vec4 fgAcc=vec4(0.0);for(int si=0;si<kSampleCount;si++){vec2 disp=kDiskKernel[si]*u_maxCoC;float dist=length(disp);vec2 duv=vec2(disp.x*u_rcpAspect,disp.y);vec4 samp=texture2D(u_cocTexture,v_uv+duv);
#ifndef USE_FLOAT
samp=samp*2.0-1.0;samp=sign(samp)*samp*samp;
#endif
float bgCoC=max(min(samp0.a,samp.a),0.0);float margin=u_cocTexelSize.y*2.0;float bgWeight=clamp((bgCoC-dist+margin)/margin,0.0,1.0);float fgWeight=clamp((-samp.a-dist+margin)/margin,0.0,1.0);fgWeight*=step(u_cocTexelSize.y,-samp.a);bgAcc+=vec4(samp.rgb,1.0)*bgWeight;fgAcc+=vec4(samp.rgb,1.0)*fgWeight;}bgAcc.rgb/=bgAcc.a+step(bgAcc.a,0.0);fgAcc.rgb/=fgAcc.a+step(fgAcc.a,0.0);bgAcc.a=smoothstep(u_cocTexelSize.y,u_cocTexelSize.y*2.0,samp0.a);fgAcc.a*=3.14159265359/float(kSampleCount);vec3 rgb=vec3(0.0);rgb=mix(rgb,bgAcc.rgb,clamp(bgAcc.a,0.0,1.0));rgb=mix(rgb,fgAcc.rgb,clamp(fgAcc.a,0.0,1.0));float alpha=(1.0-clamp(bgAcc.a,0.0,1.0))*(1.0-clamp(fgAcc.a,0.0,1.0));gl_FragColor=vec4(rgb,alpha);}`,
	bokehBlurShader = `#define GLSLIFY 1
uniform sampler2D u_bokehTexture;uniform vec2 u_bokehTexelSize;varying vec2 v_uv;void main(){vec4 duv=u_bokehTexelSize.xyxy*vec4(1.0,1.0,-1.0,0.0);vec4 acc;acc=texture2D(u_bokehTexture,v_uv-duv.xy);acc+=texture2D(u_bokehTexture,v_uv-duv.wy)*2.0;acc+=texture2D(u_bokehTexture,v_uv-duv.zy);acc+=texture2D(u_bokehTexture,v_uv+duv.zw)*2.0;acc+=texture2D(u_bokehTexture,v_uv)*4.0;acc+=texture2D(u_bokehTexture,v_uv+duv.xw)*2.0;acc+=texture2D(u_bokehTexture,v_uv+duv.zy);acc+=texture2D(u_bokehTexture,v_uv+duv.wy)*2.0;acc+=texture2D(u_bokehTexture,v_uv+duv.xy);gl_FragColor=acc*0.0625;}`,
	bokehFragmentShader = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_blurTexture;uniform float u_amount;void main(){vec4 cs=texture2D(u_texture,v_uv);vec4 cb=texture2D(u_blurTexture,v_uv);vec3 rgb=cs.rgb*cb.a+cb.rgb;gl_FragColor=mix(cs,vec4(rgb,cs.a),u_amount);}`;
class Bokeh extends PostEffect {
	amount = 1;
	fNumber = 0.07;
	focusDistance = 5;
	useCameraFov = !1;
	focalLength = 0.463;
	kFilmHeight = 36;
	quality = 1;
	_prevQuality = -1;
	useFloatTexture = !1;
	_prevUseFloatTexture = null;
	useAdditionalBlur = !0;
	_halfWidth = 0;
	_halfHeight = 0;
	init(e) {
		Object.assign(this, { sharedUniforms: { u_depthTexture: { value: null }, u_texelSize: { value: null }, u_focusDistance: { value: 0 }, u_fNumber: { value: 0 }, u_lensCoeff: { value: 0 }, u_maxCoC: { value: 0 }, u_rcpMaxCoC: { value: 0 }, u_rcpAspect: { value: 0 }, u_cameraNear: { value: 0 }, u_cameraFar: { value: 0 }, u_amount: { value: 0 }, u_halfTexelSize: { value: new Vector2() } } }, e),
			super.init(),
			(this.rt2 = fboHelper.createRenderTarget(1, 1)),
			(this.rt3 = fboHelper.createRenderTarget(1, 1)),
			(this.cocMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_hashNoise: { value: 0 }, u_depthTexture: this.sharedUniforms.u_depthTexture, u_texelSize: this.sharedUniforms.u_texelSize, u_focusDistance: this.sharedUniforms.u_focusDistance, u_lensCoeff: this.sharedUniforms.u_lensCoeff, u_maxCoC: this.sharedUniforms.u_maxCoC, u_rcpMaxCoC: this.sharedUniforms.u_rcpMaxCoC, u_cameraNear: this.sharedUniforms.u_cameraNear, u_cameraFar: this.sharedUniforms.u_cameraFar }, fragmentShader: bokehCocShader })),
			(this.simMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_cocTexture: { value: null }, u_cocTexelSize: this.sharedUniforms.u_halfTexelSize, u_rcpAspect: this.sharedUniforms.u_rcpAspect, u_maxCoC: this.sharedUniforms.u_maxCoC }, fragmentShader: bokehSimShader })),
			(this.blurMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_bokehTexture: { value: null }, u_bokehTexelSize: this.sharedUniforms.u_halfTexelSize }, fragmentShader: bokehBlurShader })),
			(this.material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_blurTexture: { value: null }, u_amount: this.sharedUniforms.u_amount }, fragmentShader: fboHelper.precisionPrefix + bokehFragmentShader }));
	}
	dispose() {
		this.rt1 && this.rt1.dispose(), this.rt2.dispose(), this.rt3.dispose();
	}
	needsRender() {
		return this.amount > 0;
	}
	_calculateFocalLength(e, t) {
		return (0.5 * t) / Math.tan(0.5 * e);
	}
	_calculateMaxCoCRadius(e, t) {
		let i = t * 4 + 6;
		return Math.min(0.05, i / e);
	}
	setPostprocessing(e) {
		super.setPostprocessing.call(this, e);
		let t = e.width,
			i = e.height,
			n = Math.ceil(t / 2),
			r = Math.ceil(i / 2);
		(this._halfWidth = n), (this._halfHeight = r), this.rt1 && this.rt1.setSize(n, r), this.rt2.setSize(n, r), this.rt3.setSize(n, r), this.sharedUniforms.u_halfTexelSize.value.set(1 / n, 1 / r);
	}
	render(e, t = !1) {
		let i = this._prevQuality !== this.quality,
			n = this._prevUseFloatTexture !== this.useFloatTexture,
			r = this.useCameraFov ? this._calculateFocalLength(e.sharedUniforms.u_cameraFovRad.value, e.camera.getFilmHeight()) : this.focalLength,
			o = this.focusDistance,
			a = this.fNumber,
			c = (r * r) / (a * (o - r) * this.kFilmHeight * 2),
			l = this._calculateMaxCoCRadius(e.height, this.quality);
		(this.sharedUniforms.u_amount.value = this.amount),
			(this.sharedUniforms.u_texelSize.value = e.sharedUniforms.u_texelSize.value),
			(this.sharedUniforms.u_depthTexture.value = e.sharedUniforms.u_sceneDepthTexture.value),
			(this.sharedUniforms.u_cameraNear.value = e.sharedUniforms.u_cameraNear.value),
			(this.sharedUniforms.u_cameraFar.value = e.sharedUniforms.u_cameraFar.value),
			(this.sharedUniforms.u_focusDistance.value = o),
			(this.sharedUniforms.u_fNumber.value = a),
			(this.sharedUniforms.u_lensCoeff.value = c),
			(this.sharedUniforms.u_maxCoC.value = l),
			(this.sharedUniforms.u_rcpMaxCoC.value = 1 / l),
			(this.sharedUniforms.u_rcpAspect.value = e.height / e.width),
			n && (this.rt1 && this.rt1.dispose(), (this.rt1 = fboHelper.createRenderTarget(this._halfWidth, this._halfHeight, !1, this.useFloatTexture))),
			(e.fromTexture.minFilter = e.fromTexture.magFilter = NearestFilter),
			n && ((this.cocMaterial.defines.USE_FLOAT = this.useFloatTexture), (this.cocMaterial.needsUpdate = !0)),
			(this.cocMaterial.uniforms.u_hashNoise.value = (this.cocMaterial.uniforms.u_hashNoise.value + 1.2415) % 100),
			(this.cocMaterial.uniforms.u_texture.value = e.fromTexture),
			e.renderMaterial(this.cocMaterial, this.rt1),
			(e.fromTexture.minFilter = e.fromTexture.magFilter = LinearFilter),
			(this.simMaterial.defines.QUALITY = this.quality),
			(this.simMaterial.uniforms.u_cocTexture.value = this.rt1.texture),
			i && (this.simMaterial.needsUpdate = !0),
			n && ((this.simMaterial.defines.USE_FLOAT = this.useFloatTexture), (this.simMaterial.needsUpdate = !0)),
			e.renderMaterial(this.simMaterial, this.rt2),
			this.useAdditionalBlur && ((this.blurMaterial.uniforms.u_bokehTexture.value = this.rt2.texture), e.renderMaterial(this.blurMaterial, this.rt3)),
			(this.material.uniforms.u_blurTexture.value = this.useAdditionalBlur ? this.rt3.texture : this.rt2.texture),
			(this._prevQuality = this.quality),
			(this._prevUseFloatTexture = this.useFloatTexture),
			super.render.call(this, e, t, e.fromTexture);
	}
}
class ShaderHelper {
	glslifyStrip(e) {
		return e.replace(/#define\sGLSLIFY\s./, '');
	}
	addChunk(e, t) {
		ShaderChunk[e] = this.glslifyStrip(t);
	}
	_wrapInclude(e) {
		return '#include <' + e + '>';
	}
	insertBefore(e, t, i, n) {
		const r = n ? this._wrapInclude(t) : t;
		return e.replace(
			t,
			this.glslifyStrip(i) +
				`
` +
				r,
		);
	}
	insertAfter(e, t, i, n) {
		const r = n ? this._wrapInclude(t) : t;
		return e.replace(
			r,
			r +
				`
` +
				this.glslifyStrip(i) +
				`
`,
		);
	}
	replace(e, t, i, n) {
		const r = n ? this._wrapInclude(t) : t;
		return e.replace(
			r,
			`
` +
				this.glslifyStrip(i) +
				`
`,
		);
	}
}
const shaderHelper = new ShaderHelper(),
	getBlueNoiseShader = `#define GLSLIFY 1
uniform sampler2D u_blueNoiseTexture;uniform vec2 u_blueNoiseTexelSize;uniform vec2 u_blueNoiseCoordOffset;vec3 getBlueNoise(vec2 coord){return texture2D(u_blueNoiseTexture,coord*u_blueNoiseTexelSize+u_blueNoiseCoordOffset).rgb;}vec3 getStaticBlueNoise(vec2 coord){return texture2D(u_blueNoiseTexture,coord*u_blueNoiseTexelSize).rgb;}`;
class BlueNoise {
	sharedUniforms = { u_blueNoiseTexture: { value: null }, u_blueNoiseLinearTexture: { value: null }, u_blueNoiseTexelSize: { value: null }, u_blueNoiseCoordOffset: { value: new Vector2() } };
	TEXTURE_SIZE = 128;
	preInit() {
		let e = new Texture();
		(e.generateMipmaps = !1), (e.minFilter = e.magFilter = LinearFilter), (e.wrapS = e.wrapT = RepeatWrapping);
		let t = new Texture(
			properties.loader.add(settings.TEXTURE_PATH + 'LDR_RGB1_0.png', {
				weight: 55,
				onLoad: function () {
					(t.needsUpdate = !0), (e.needsUpdate = !0);
				},
			}).content,
		);
		(e.image = t.image), (t.generateMipmaps = !1), (t.minFilter = t.magFilter = NearestFilter), (t.wrapS = t.wrapT = RepeatWrapping), (this.sharedUniforms.u_blueNoiseTexture.value = t), (this.sharedUniforms.u_blueNoiseLinearTexture.value = e), (this.sharedUniforms.u_blueNoiseTexelSize.value = new Vector2(1 / this.TEXTURE_SIZE, 1 / this.TEXTURE_SIZE)), shaderHelper.addChunk('getBlueNoise', getBlueNoiseShader);
	}
	update(e) {
		this.sharedUniforms.u_blueNoiseCoordOffset.value.set(Math.random(), Math.random());
	}
}
const blueNoise = new BlueNoise(),
	frag$8 = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform sampler2D u_screenPaintTexture;uniform vec2 u_screenPaintTexelSize;uniform float u_amount;uniform float u_rgbShift;uniform float u_multiplier;uniform float u_colorMultiplier;uniform float u_shade;varying vec2 v_uv;
#include <getBlueNoise>
void main(){vec3 bnoise=getBlueNoise(gl_FragCoord.xy+vec2(17.,29.));vec4 data=texture2D(u_screenPaintTexture,v_uv);float weight=(data.z+data.w)*0.5;vec2 vel=(0.5-data.xy-0.001)*2.*weight;vec4 color=vec4(0.0);vec2 velocity=vel*u_amount/4.0*u_screenPaintTexelSize*u_multiplier;vec2 uv=v_uv+bnoise.xy*velocity;for(int i=0;i<9;i++){color+=texture2D(u_texture,uv);uv+=velocity;}color/=9.;color.rgb+=sin(vec3(vel.x+vel.y)*40.0+vec3(0.0,2.0,4.0)*u_rgbShift)*smoothstep(0.4,-0.9,weight)*u_shade*max(abs(vel.x),abs(vel.y))*u_colorMultiplier;gl_FragColor=color;}`;
class ScreenPaintDistortion extends PostEffect {
	screenPaint = null;
	amount = 20;
	rgbShift = 1;
	multiplier = 1.25;
	colorMultiplier = 1;
	shade = 1.25;
	renderOrder = 10;
	init(e) {
		if ((Object.assign(this, e), super.init(), !this.screenPaint)) throw new Error('screenPaint is required');
		this.material = fboHelper.createRawShaderMaterial({ uniforms: Object.assign({ u_texture: { value: null }, u_screenPaintTexture: this.screenPaint.sharedUniforms.u_currPaintTexture, u_screenPaintTexelSize: this.screenPaint.sharedUniforms.u_paintTexelSize, u_amount: { value: 0 }, u_rgbShift: { value: 0 }, u_multiplier: { value: 0 }, u_colorMultiplier: { value: 0 }, u_shade: { value: 0 } }, blueNoise.sharedUniforms), fragmentShader: frag$8 });
	}
	needsRender(e) {
		return this.amount > 0;
	}
	syncCamera(e) {
		(this.needsSync = !0), e && (e.matrixWorldInverse.decompose(this._position, this._quaternion, this._scale), this.projectionViewMatrix.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this.projectionViewInverseMatrix.copy(this.projectionViewMatrix).invert()), this.prevProjectionViewMatrix.copy(this.projectionViewMatrix);
	}
	render(e, t = !1) {
		(this.material.uniforms.u_amount.value = this.amount), (this.material.uniforms.u_rgbShift.value = this.rgbShift), (this.material.uniforms.u_multiplier.value = this.multiplier), (this.material.uniforms.u_colorMultiplier.value = this.colorMultiplier), (this.material.uniforms.u_shade.value = this.shade), super.render(e, t);
	}
}
class Ease {
	quadIn(e) {
		return e * e;
	}
	quadOut(e) {
		return e * (2 - e);
	}
	quadInOut(e) {
		return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
	}
	cubicIn(e) {
		return e * e * e;
	}
	cubicOut(e) {
		return --e * e * e + 1;
	}
	cubicInOut(e) {
		return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
	}
	quartIn(e) {
		return e * e * e * e;
	}
	quartOut(e) {
		return 1 - --e * e * e * e;
	}
	quartInOut(e) {
		return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
	}
	quintIn(e) {
		return e * e * e * e * e;
	}
	quintOut(e) {
		return --e * e * e * e * e + 1;
	}
	quintInOut(e) {
		return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
	}
	sineIn(e) {
		return 1 - Math.cos((e * Math.PI) / 2);
	}
	sineOut(e) {
		return Math.sin((e * Math.PI) / 2);
	}
	sineInOut(e) {
		return 0.5 * (1 - Math.cos(Math.PI * e));
	}
	expoIn(e) {
		return e === 0 ? 0 : Math.pow(1024, e - 1);
	}
	expoOut(e) {
		return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
	}
	expoInOut(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
	}
	circIn(e) {
		return 1 - Math.sqrt(1 - e * e);
	}
	circOut(e) {
		return Math.sqrt(1 - --e * e);
	}
	circInOut(e) {
		return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
	}
	elasticIn(e) {
		let t,
			i = 0.1,
			n = 0.4;
		return e === 0 ? 0 : e === 1 ? 1 : (!i || i < 1 ? ((i = 1), (t = n / 4)) : (t = (n * Math.asin(1 / i)) / (2 * Math.PI)), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * 2 * Math.PI) / n)));
	}
	elasticOut(e) {
		let t,
			i = 0.1,
			n = 0.4;
		return e === 0 ? 0 : e === 1 ? 1 : (!i || i < 1 ? ((i = 1), (t = n / 4)) : (t = (n * Math.asin(1 / i)) / (2 * Math.PI)), i * Math.pow(2, -10 * e) * Math.sin(((e - t) * 2 * Math.PI) / n) + 1);
	}
	elasticInOut(e) {
		let t,
			i = 0.1,
			n = 0.4;
		return e === 0 ? 0 : e === 1 ? 1 : (!i || i < 1 ? ((i = 1), (t = n / 4)) : (t = (n * Math.asin(1 / i)) / (2 * Math.PI)), (e *= 2) < 1 ? -0.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * 2 * Math.PI) / n) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * 2 * Math.PI) / n) * 0.5 + 1);
	}
	backIn(e) {
		let t = 1.70158;
		return e * e * ((t + 1) * e - t);
	}
	backOut(e) {
		let t = 1.70158;
		return --e * e * ((t + 1) * e + t) + 1;
	}
	backInOut(e) {
		let t = 2.5949095;
		return (e *= 2) < 1 ? 0.5 * e * e * ((t + 1) * e - t) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
	}
	bounceIn(e) {
		return 1 - this.bounceOut(1 - e);
	}
	bounceOut(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
	}
	bounceInOut(e) {
		return e < 0.5 ? this.bounceIn(e * 2) * 0.5 : this.bounceOut(e * 2 - 1) * 0.5 + 0.5;
	}
	cubicBezier(e, t, i, n, r) {
		if (e <= 0) return 0;
		if (e >= 1) return 1;
		if (t === i && n === r) return e;
		const o = (D, I, N, j) => 1 / (3 * I * D * D + 2 * N * D + j),
			a = (D, I, N, j, K) => I * (D * D * D) + N * (D * D) + j * D + K,
			c = (D, I, N, j, K) => {
				let q = D * D;
				return I * (q * D) + N * q + j * D + K;
			};
		let l = 0,
			u = 0,
			h = t,
			d = i,
			m = n,
			g = r,
			p = 1,
			f = 1,
			_ = p - 3 * m + 3 * h - l,
			T = 3 * m - 6 * h + 3 * l,
			x = 3 * h - 3 * l,
			S = l,
			b = f - 3 * g + 3 * d - u,
			E = 3 * g - 6 * d + 3 * u,
			A = 3 * d - 3 * u,
			v = u,
			C = e,
			P,
			z,
			Y;
		for (P = 0; P < 100; P++) (z = a(C, _, T, x, S)), (Y = o(C, _, T, x)), Y === 1 / 0 && (Y = e), (C -= (z - e) * Y), (C = Math.min(Math.max(C, 0), 1));
		return c(C, b, E, A, v);
	}
}
const ease = new Ease(),
	fragmentShader = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform vec3 u_bgColor;uniform float u_opacity;uniform float u_vignetteFrom;uniform float u_vignetteTo;uniform vec2 u_vignetteAspect;uniform vec3 u_vignetteColor;uniform float u_saturation;uniform float u_contrast;uniform float u_brightness;uniform vec3 u_tintColor;uniform float u_tintOpacity;uniform float u_ditherSeed;float hash13(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}vec3 screen(vec3 cb,vec3 cs){return cb+cs-(cb*cs);}vec3 colorDodge(vec3 cb,vec3 cs){return mix(min(vec3(1.0),cb/(1.0-cs)),vec3(1.0),step(vec3(1.0),cs));}void main(){vec2 uv=v_uv;vec3 color=texture2D(u_texture,uv).rgb;float luma=dot(color,vec3(0.299,0.587,0.114));color=mix(vec3(luma),color,1.0+u_saturation);color=0.5+(1.0+u_contrast)*(color-0.5);color+=u_brightness;color=mix(color,screen(colorDodge(color,u_tintColor),u_tintColor),u_tintOpacity);float d=length((uv-0.5)*u_vignetteAspect)*2.0;color=mix(color,u_vignetteColor,smoothstep(u_vignetteFrom,u_vignetteTo,d));gl_FragColor=vec4(mix(u_bgColor,color,u_opacity)+hash13(vec3(gl_FragCoord.xy,u_ditherSeed))/255.0,1.0);}`,
	transitionFragmentShader = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform sampler2D u_cacheTexture;uniform vec2 u_aspect;uniform float u_transitionRatio;void main(){vec2 uv=v_uv-0.5;float transitionRatioInverse=1.0-u_transitionRatio;uv*=u_aspect;float d=length(uv);float oriDist=d;float distortedDist=d*3.1415926*2.5*transitionRatioInverse;float distortion=cos(distortedDist*distortedDist);uv*=mix(1.0,distortion*distortion,u_transitionRatio);uv/=u_aspect;vec4 color=texture2D(u_texture,uv+0.5);vec4 sceneColor=texture2D(u_cacheTexture,uv*(1.0-u_transitionRatio*0.75)+0.5);float blend=smoothstep(0.4,0.6,transitionRatioInverse);color=mix(color,sceneColor,blend);gl_FragColor=color;}`;
class Final extends PostEffect {
	vignetteFrom = 0.6;
	vignetteTo = 1.6;
	vignetteAspect = new Vector2();
	vignetteColor = new Color();
	saturation = 1;
	contrast = 0;
	brightness = 1;
	tintColor = new Color();
	tintOpacity = 1;
	bgColor = new Color();
	opacity = 1;
	transitionRatio = 1;
	cacheRenderTarget = null;
	init(e) {
		Object.assign(this, e), super.init(), (this.material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_vignetteFrom: { value: 0 }, u_vignetteTo: { value: 0 }, u_vignetteAspect: { value: this.vignetteAspect }, u_vignetteColor: { value: this.vignetteColor }, u_saturation: { value: 0 }, u_contrast: { value: 0 }, u_brightness: { value: 0 }, u_tintColor: { value: this.tintColor }, u_tintOpacity: { value: 0 }, u_bgColor: { value: this.bgColor }, u_opacity: { value: 0 }, u_ditherSeed: { value: 0 } }, fragmentShader })), (this.cacheRenderTarget = fboHelper.createRenderTarget(1, 1)), (this.transitionMaterial = fboHelper.createRawShaderMaterial({ uniforms: Object.assign({ u_texture: { value: null }, u_cacheTexture: { value: this.cacheRenderTarget.texture }, u_transitionRatio: { value: 0 }, u_aspect: { value: new Vector2() } }, blueNoise.sharedUniforms), fragmentShader: transitionFragmentShader }));
	}
	startTransition(e) {
		let t = e.width,
			i = e.height;
		this.cacheRenderTarget.setSize(t, i), fboHelper.copy(e.fromRenderTarget.texture, this.cacheRenderTarget), e.swap(), (this.transitionRatio = 0);
	}
	render(e, t = !1) {
		const i = e.width,
			n = e.height;
		let r = this.material.uniforms;
		(r.u_vignetteFrom.value = this.vignetteFrom), (r.u_vignetteTo.value = this.vignetteTo);
		const o = n / Math.sqrt(i * i + n * n);
		this.vignetteAspect.set((i / n) * o, o), (r.u_saturation.value = this.saturation - 1), (r.u_contrast.value = this.contrast), (r.u_brightness.value = this.brightness - 1), (r.u_tintOpacity.value = this.tintOpacity), (r.u_opacity.value = this.opacity), (r.u_ditherSeed.value = Math.random() * 1e3);
		let a = this.transitionRatio,
			c = a < 1;
		(this.material.uniforms.u_texture.value = e.fromTexture), c ? (e.renderMaterial(this.material, e.toRenderTarget), e.swap(), (this.transitionMaterial.uniforms.u_texture.value = e.fromTexture), (this.transitionMaterial.uniforms.u_transitionRatio.value = a), this.transitionMaterial.uniforms.u_aspect.value.copy(this.vignetteAspect), e.renderMaterial(this.transitionMaterial, t ? null : e.toRenderTarget)) : (e.renderMaterial(this.material, t ? null : e.toRenderTarget), e.swap());
	}
}
const easuFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec2 u_inResolution;uniform vec2 u_outResolution;vec3 FsrEasuCF(vec2 p){return texture2D(u_texture,p).rgb;}void FsrEasuCon(out vec4 con0,out vec4 con1,out vec4 con2,out vec4 con3,vec2 inputViewportInPixels,vec2 inputSizeInPixels,vec2 outputSizeInPixels){con0=vec4(inputViewportInPixels.x/outputSizeInPixels.x,inputViewportInPixels.y/outputSizeInPixels.y,.5*inputViewportInPixels.x/outputSizeInPixels.x-.5,.5*inputViewportInPixels.y/outputSizeInPixels.y-.5);con1=vec4(1,1,1,-1)/inputSizeInPixels.xyxy;con2=vec4(-1,2,1,2)/inputSizeInPixels.xyxy;con3=vec4(0,4,0,0)/inputSizeInPixels.xyxy;}void FsrEasuTapF(inout vec3 aC,inout float aW,vec2 off,vec2 dir,vec2 len,float lob,float clp,vec3 c){vec2 v=vec2(dot(off,dir),dot(off,vec2(-dir.y,dir.x)));v*=len;float d2=min(dot(v,v),clp);float wB=.4*d2-1.;float wA=lob*d2-1.;wB*=wB;wA*=wA;wB=1.5625*wB-.5625;float w=wB*wA;aC+=c*w;aW+=w;}void FsrEasuSetF(inout vec2 dir,inout float len,float w,float lA,float lB,float lC,float lD,float lE){float lenX=max(abs(lD-lC),abs(lC-lB));float dirX=lD-lB;dir.x+=dirX*w;lenX=clamp(abs(dirX)/lenX,0.,1.);lenX*=lenX;len+=lenX*w;float lenY=max(abs(lE-lC),abs(lC-lA));float dirY=lE-lA;dir.y+=dirY*w;lenY=clamp(abs(dirY)/lenY,0.,1.);lenY*=lenY;len+=lenY*w;}void FsrEasuF(out vec3 pix,vec2 ip,vec4 con0,vec4 con1,vec4 con2,vec4 con3){vec2 pp=ip*con0.xy+con0.zw;vec2 fp=floor(pp);pp-=fp;vec2 p0=fp*con1.xy+con1.zw;vec2 p1=p0+con2.xy;vec2 p2=p0+con2.zw;vec2 p3=p0+con3.xy;vec4 off=vec4(-.5,.5,-.5,.5)*con1.xxyy;vec3 bC=FsrEasuCF(p0+off.xw);float bL=bC.g+0.5*(bC.r+bC.b);vec3 cC=FsrEasuCF(p0+off.yw);float cL=cC.g+0.5*(cC.r+cC.b);vec3 iC=FsrEasuCF(p1+off.xw);float iL=iC.g+0.5*(iC.r+iC.b);vec3 jC=FsrEasuCF(p1+off.yw);float jL=jC.g+0.5*(jC.r+jC.b);vec3 fC=FsrEasuCF(p1+off.yz);float fL=fC.g+0.5*(fC.r+fC.b);vec3 eC=FsrEasuCF(p1+off.xz);float eL=eC.g+0.5*(eC.r+eC.b);vec3 kC=FsrEasuCF(p2+off.xw);float kL=kC.g+0.5*(kC.r+kC.b);vec3 lC=FsrEasuCF(p2+off.yw);float lL=lC.g+0.5*(lC.r+lC.b);vec3 hC=FsrEasuCF(p2+off.yz);float hL=hC.g+0.5*(hC.r+hC.b);vec3 gC=FsrEasuCF(p2+off.xz);float gL=gC.g+0.5*(gC.r+gC.b);vec3 oC=FsrEasuCF(p3+off.yz);float oL=oC.g+0.5*(oC.r+oC.b);vec3 nC=FsrEasuCF(p3+off.xz);float nL=nC.g+0.5*(nC.r+nC.b);vec2 dir=vec2(0.);float len=0.;FsrEasuSetF(dir,len,(1.-pp.x)*(1.-pp.y),bL,eL,fL,gL,jL);FsrEasuSetF(dir,len,pp.x*(1.-pp.y),cL,fL,gL,hL,kL);FsrEasuSetF(dir,len,(1.-pp.x)*pp.y,fL,iL,jL,kL,nL);FsrEasuSetF(dir,len,pp.x*pp.y,gL,jL,kL,lL,oL);vec2 dir2=dir*dir;float dirR=dir2.x+dir2.y;bool zro=dirR<(1./32768.);dirR=inversesqrt(dirR);dirR=zro ? 1. : dirR;dir.x=zro ? 1. : dir.x;dir*=vec2(dirR);len=len*.5;len*=len;float stretch=dot(dir,dir)/(max(abs(dir.x),abs(dir.y)));vec2 len2=vec2(1.+(stretch-1.0)*len,1.-.5*len);float lob=.5-.29*len;float clp=1./lob;vec3 min4=min(min(fC,gC),min(jC,kC));vec3 max4=max(max(fC,gC),max(jC,kC));vec3 aC=vec3(0);float aW=0.;FsrEasuTapF(aC,aW,vec2(0.,-1.)-pp,dir,len2,lob,clp,bC);FsrEasuTapF(aC,aW,vec2(1.,-1.)-pp,dir,len2,lob,clp,cC);FsrEasuTapF(aC,aW,vec2(-1.,1.)-pp,dir,len2,lob,clp,iC);FsrEasuTapF(aC,aW,vec2(0.,1.)-pp,dir,len2,lob,clp,jC);FsrEasuTapF(aC,aW,vec2(0.,0.)-pp,dir,len2,lob,clp,fC);FsrEasuTapF(aC,aW,vec2(-1.,0.)-pp,dir,len2,lob,clp,eC);FsrEasuTapF(aC,aW,vec2(1.,1.)-pp,dir,len2,lob,clp,kC);FsrEasuTapF(aC,aW,vec2(2.,1.)-pp,dir,len2,lob,clp,lC);FsrEasuTapF(aC,aW,vec2(2.,0.)-pp,dir,len2,lob,clp,hC);FsrEasuTapF(aC,aW,vec2(1.,0.)-pp,dir,len2,lob,clp,gC);FsrEasuTapF(aC,aW,vec2(1.,2.)-pp,dir,len2,lob,clp,oC);FsrEasuTapF(aC,aW,vec2(0.,2.)-pp,dir,len2,lob,clp,nC);pix=min(max4,max(min4,aC/aW));}void main(){vec3 c;vec4 con0,con1,con2,con3;FsrEasuCon(con0,con1,con2,con3,u_inResolution,u_inResolution,u_outResolution);FsrEasuF(c,gl_FragCoord.xy,con0,con1,con2,con3);gl_FragColor=vec4(c.xyz,1);}`,
	frag$7 = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec2 u_outResolution;uniform float u_sharpness;
#define FSR_RCAS_LIMIT (0.25-(1.0/16.0))
vec4 FsrRcasLoadF(vec2 p);void FsrRcasCon(out float con,float sharpness){con=exp2(-sharpness);}vec3 FsrRcasF(vec2 ip,float con){vec2 sp=vec2(ip);vec3 b=FsrRcasLoadF(sp+vec2(0,-1)).rgb;vec3 d=FsrRcasLoadF(sp+vec2(-1,0)).rgb;vec3 e=FsrRcasLoadF(sp).rgb;vec3 f=FsrRcasLoadF(sp+vec2(1,0)).rgb;vec3 h=FsrRcasLoadF(sp+vec2(0,1)).rgb;float bL=b.g+.5*(b.b+b.r);float dL=d.g+.5*(d.b+d.r);float eL=e.g+.5*(e.b+e.r);float fL=f.g+.5*(f.b+f.r);float hL=h.g+.5*(h.b+h.r);float nz=.25*(bL+dL+fL+hL)-eL;nz=clamp(abs(nz)/(max(max(bL,dL),max(eL,max(fL,hL)))-min(min(bL,dL),min(eL,min(fL,hL)))),0.,1.);nz=1.-.5*nz;vec3 mn4=min(b,min(f,h));vec3 mx4=max(b,max(f,h));vec2 peakC=vec2(1.,-4.);vec3 hitMin=mn4/(4.*mx4);vec3 hitMax=(peakC.x-mx4)/(4.*mn4+peakC.y);vec3 lobeRGB=max(-hitMin,hitMax);float lobe=max(-FSR_RCAS_LIMIT,min(max(lobeRGB.r,max(lobeRGB.g,lobeRGB.b)),0.))*con;
#ifdef FSR_RCAS_DENOISE
lobe*=nz;
#endif
return(lobe*(b+d+h+f)+e)/(4.*lobe+1.);}vec4 FsrRcasLoadF(vec2 p){return texture2D(u_texture,p/u_outResolution.xy);}void main(){vec2 uv=gl_FragCoord.xy/u_outResolution.xy;float con;FsrRcasCon(con,u_sharpness);vec3 col=FsrRcasF(gl_FragCoord.xy,con);gl_FragColor=vec4(col,1.);}`;
let Fsr$1 = class {
	sharpness = 1;
	_easuMaterial;
	_material;
	_inResolution = new Vector2();
	_outResolution = new Vector2();
	_cacheRenderTarget = null;
	constructor() {
		(this._cacheRenderTarget = fboHelper.createRenderTarget(1, 1)), (this._easuMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: null }, u_inResolution: { value: this._inResolution }, u_outResolution: { value: this._outResolution } }, fragmentShader: easuFrag })), (this._material = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: { value: this._cacheRenderTarget.texture }, u_outResolution: this._easuMaterial.uniforms.u_outResolution, u_sharpness: { value: 0 } }, fragmentShader: frag$7 }));
	}
	render(e, t) {
		let i = e.image.width,
			n = e.image.height;
		(this._material.uniforms.u_sharpness.value = this.sharpness), (this._inResolution.width !== i || this._inResolution.height !== n) && this._inResolution.set(i, n);
		let r, o;
		t ? ((r = t.width), (o = t.height)) : ((r = fboHelper.renderer.domElement.width), (o = fboHelper.renderer.domElement.height)), (this._outResolution.width !== r || this._outResolution.height !== o) && (this._outResolution.set(r, o), this._cacheRenderTarget.setSize(r, o)), (this._easuMaterial.uniforms.u_texture.value = e), fboHelper.render(this._easuMaterial, this._cacheRenderTarget), t || (fboHelper.renderer.setRenderTarget(null), fboHelper.renderer.setViewport(0, 0, this._outResolution.x, this._outResolution.y)), fboHelper.render(this._material, t);
	}
};
class Fsr extends PostEffect {
	sharpness = 1;
	fsr;
	renderOrder = 100;
	init(e) {
		Object.assign(this, e), super.init(), (this.fsr = new Fsr$1());
	}
	render(e, t = !1) {
		(this.fsr.sharpness = this.sharpness), this.fsr.render(e.fromTexture, t ? null : e.toRenderTarget), e.swap();
	}
}
const channelMixerFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec4 u_channelMixerR;uniform vec4 u_channelMixerG;uniform vec4 u_channelMixerB;uniform vec4 u_channelMixerA;varying vec2 v_uv;void main(){vec4 color=texture2D(u_texture,v_uv);gl_FragColor=vec4(dot(color,u_channelMixerR),dot(color,u_channelMixerG),dot(color,u_channelMixerB),dot(color,u_channelMixerA));}`;
class TextureHelper {
	blackTexture;
	whiteTexture;
	transparentTexture;
	channelMixerMaterial;
	init() {
		(this.blackTexture = this._createPixelTexture([0, 0, 0, 255])), (this.whiteTexture = this._createPixelTexture([255, 255, 255, 255])), (this.transparentTexture = this._createPixelTexture([0, 0, 0, 0]));
	}
	_createPixelTexture(e) {
		return fboHelper.createDataTexture(new Uint8Array(e), 1, 1, !1, !0);
	}
	mixChannels(e, t, i = -1, n = -1, r = -1, o = -1) {
		this.channelMixerMaterial || (this.channelMixerMaterial = new RawShaderMaterial({ uniforms: { u_texture: { value: null }, u_channelMixerR: { value: new Vector4() }, u_channelMixerG: { value: new Vector4() }, u_channelMixerB: { value: new Vector4() }, u_channelMixerA: { value: new Vector4() } }, vertexShader: fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + channelMixerFrag, blending: CustomBlending, blendEquation: AddEquation, blendDst: OneFactor, blendSrc: OneFactor, blendEquationAlpha: AddEquation, blendDstAlpha: OneFactor, blendSrcAlpha: OneFactor })),
			(this.channelMixerMaterial.uniforms.u_texture.value = e),
			this.channelMixerMaterial.uniforms.u_channelMixerR.value.set(+(i % 4 == 0), +(i % 4 == 1), +(i % 4 == 2), +(i % 4 == 3)).multiplyScalar(i < 0 ? 0 : 1),
			this.channelMixerMaterial.uniforms.u_channelMixerG.value.set(+(n % 4 == 0), +(n % 4 == 1), +(n % 4 == 2), +(n % 4 == 3)).multiplyScalar(n < 0 ? 0 : 1),
			this.channelMixerMaterial.uniforms.u_channelMixerB.value.set(+(r % 4 == 0), +(r % 4 == 1), +(r % 4 == 2), +(r % 4 == 3)).multiplyScalar(r < 0 ? 0 : 1),
			this.channelMixerMaterial.uniforms.u_channelMixerA.value.set(+(o % 4 == 0), +(o % 4 == 1), +(o % 4 == 2), +(o % 4 == 3)).multiplyScalar(o < 0 ? 0 : 1);
		let a = fboHelper.getColorState();
		(fboHelper.renderer.autoClear = !1), fboHelper.render(this.channelMixerMaterial, t), fboHelper.setColorState(a);
	}
}
const textureHelper = new TextureHelper(),
	XHRItem = properties.loader.ITEM_CLASSES.xhr;
class BufItem extends XHRItem {
	constructor(e, t) {
		super(e, { ...t, responseType: 'arraybuffer' });
	}
	retrieve() {
		return !1;
	}
	_onLoad() {
		if (!this.content) {
			const e = this.xmlhttp.response;
			let t = new Uint32Array(e, 0, 1)[0],
				i = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(e, 4, t))),
				n = i.vertexCount,
				r = i.indexCount,
				o = 4 + t,
				a = new BufferGeometry(),
				c = i.attributes,
				l = !1,
				u = {};
			for (let m = 0, g = c.length; m < g; m++) {
				let p = c[m],
					f = p.id,
					_ = f === 'indices' ? r : n,
					T = p.componentSize,
					x = window[p.storageType],
					S = new x(e, o, _ * T),
					b = x.BYTES_PER_ELEMENT,
					E;
				if (p.needsPack) {
					let A = p.packedComponents,
						v = A.length,
						C = p.storageType.indexOf('Int') === 0,
						P = 1 << (b * 8),
						z = C ? P * 0.5 : 0,
						Y = 1 / P;
					E = new Float32Array(_ * T);
					for (let D = 0, I = 0; D < _; D++)
						for (let N = 0; N < v; N++) {
							let j = A[N];
							(E[I] = (S[I] + z) * Y * j.delta + j.from), I++;
						}
				} else (u[f] = o), (E = S);
				f === 'normal' && (l = !0), f === 'indices' ? a.setIndex(new BufferAttribute(E, 1)) : a.setAttribute(f, new BufferAttribute(E, T)), (o += _ * T * b);
			}
			let h = i.meshType,
				d = [];
			if (i.sceneData) {
				let m = i.sceneData,
					g = new Object3D(),
					p = [],
					f = h === 'Mesh' ? 3 : h === 'LineSegments' ? 2 : 1;
				for (let _ = 0, T = m.length; _ < T; _++) {
					let x = m[_],
						S;
					if (x.vertexCount == 0) S = new Object3D();
					else {
						let b = new BufferGeometry(),
							E = a.index,
							A = E.array,
							v = A.constructor,
							C = v.BYTES_PER_ELEMENT;
						b.setIndex(new BufferAttribute(new A.constructor(A.buffer, x.faceIndex * E.itemSize * C * f + (u.indices || 0), x.faceCount * E.itemSize * f), E.itemSize));
						for (let P = 0, z = b.index.array.length; P < z; P++) b.index.array[P] -= x.vertexIndex;
						for (let P in a.attributes) (E = a.attributes[P]), (A = E.array), (v = A.constructor), (C = v.BYTES_PER_ELEMENT), b.setAttribute(P, new BufferAttribute(new A.constructor(A.buffer, x.vertexIndex * E.itemSize * C + (u[P] || 0), x.vertexCount * E.itemSize), E.itemSize));
						h === 'Mesh' ? (S = new Mesh(b, new MeshNormalMaterial({ flatShading: !l }))) : h === 'LineSegments' ? (S = new LineSegments(b, new LineBasicMaterial())) : (S = new Points(b, new PointsMaterial({ sizeAttenuation: !1, size: 2 }))), p.push(S);
					}
					x.parentIndex > -1 ? d[x.parentIndex].add(S) : g.add(S), S.position.fromArray(x.position), S.quaternion.fromArray(x.quaternion), S.scale.fromArray(x.scale), (S.name = x.name), (S.userData.material = x.material), (d[_] = S);
				}
				(a.userData.meshList = p), (a.userData.sceneObject = g);
			}
			this.content = a;
		}
		(this.xmlhttp = void 0), super._onLoad(this);
	}
}
BufItem.type = 'buf';
BufItem.extensions = ['buf'];
BufItem.responseType = 'arraybuffer';
const ImageItem = properties.loader.ITEM_CLASSES.image;
class TextureItem extends ImageItem {
	constructor(e, t) {
		let i = t.content || new Texture(new Image());
		switch (((t.content = i.image), (i.minFilter = t.minFilter || LinearMipMapLinearFilter), (i.magFilter = t.magFilter || LinearFilter), i.minFilter)) {
			case NearestMipMapNearestFilter:
			case NearestMipMapLinearFilter:
			case LinearMipMapNearestFilter:
			case LinearMipMapLinearFilter:
				(i.generateMipmaps = !0), (i.anisotropy = t.anisotropy || properties.renderer.capabilities.getMaxAnisotropy());
				break;
			default:
				i.generateMipmaps = !1;
		}
		(i.flipY = t.flipY === void 0 ? !0 : t.flipY), t.wrap ? (i.wrapS = i.wrapT = t.wrap) : (t.wrapS && (i.wrapS = t.wrapS), t.wrapT && (i.wrapT = t.wrapT)), super(e, t), (this.content = i);
	}
	retrieve() {
		return !1;
	}
	load() {
		this.isStartLoaded = !0;
		let e = this.content.image;
		(e.onload = this.boundOnLoad), (e.src = this.url);
	}
	_onLoad() {
		delete this.content.image.onload, (this.width = this.content.image.width), (this.height = this.content.image.height), (this.content.needsUpdate = !0), this.onPost ? this.onPost.call(this, this.content, this.onPostLoadingSignal) : this._onLoadComplete();
	}
}
TextureItem.type = 'texture';
TextureItem.extensions = [];
const AnyItem$2 = properties.loader.ITEM_CLASSES.any;
class ThreeLoaderItem extends AnyItem$2 {
	constructor(e, t) {
		(t.loadFunc = () => {}), (t.hasLoading = t.hasLoading === void 0 ? !0 : t.hasLoading), super(e, t), !t.loader && console && (console.error || console.log)('loader is required.'), (this.loadFunc = this._loadFunc.bind(this));
	}
	_loadFunc(e, t, i) {
		this.loader.load(e, this._onLoaderLoad.bind(this, t), this._onLoaderLoading.bind(this, i));
	}
	_onLoaderLoad(e, t) {
		(this.content = t), e(t);
	}
	_onLoaderLoading(e, t) {
		e.dispatch(t.loaded / t.total);
	}
}
ThreeLoaderItem.type = 'three-loader';
ThreeLoaderItem.extensions = [];
class FontLoader extends Loader {
	constructor(e) {
		super(e);
	}
	load(e, t, i, n) {
		const r = this,
			o = new FileLoader(this.manager);
		o.setPath(this.path),
			o.setRequestHeader(this.requestHeader),
			o.setWithCredentials(this.withCredentials),
			o.load(
				e,
				function (a) {
					const c = r.parse(JSON.parse(a));
					t && t(c);
				},
				i,
				n,
			);
	}
	parse(e) {
		return new Font(e);
	}
}
class Font {
	constructor(e) {
		(this.isFont = !0), (this.type = 'Font'), (this.data = e);
	}
	generateShapes(e, t = 100) {
		const i = [],
			n = createPaths(e, t, this.data);
		for (let r = 0, o = n.length; r < o; r++) i.push(...n[r].toShapes());
		return i;
	}
}
function createPaths(s, e, t) {
	const i = Array.from(s),
		n = e / t.resolution,
		r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * n,
		o = [];
	let a = 0,
		c = 0;
	for (let l = 0; l < i.length; l++) {
		const u = i[l];
		if (
			u ===
			`
`
		)
			(a = 0), (c -= r);
		else {
			const h = createPath(u, n, a, c, t);
			(a += h.offsetX), o.push(h.path);
		}
	}
	return o;
}
function createPath(s, e, t, i, n) {
	const r = n.glyphs[s] || n.glyphs['?'];
	if (!r) {
		console.error('THREE.Font: character "' + s + '" does not exists in font family ' + n.familyName + '.');
		return;
	}
	const o = new ShapePath();
	let a, c, l, u, h, d, m, g;
	if (r.o) {
		const p = r._cachedOutline || (r._cachedOutline = r.o.split(' '));
		for (let f = 0, _ = p.length; f < _; )
			switch (p[f++]) {
				case 'm':
					(a = p[f++] * e + t), (c = p[f++] * e + i), o.moveTo(a, c);
					break;
				case 'l':
					(a = p[f++] * e + t), (c = p[f++] * e + i), o.lineTo(a, c);
					break;
				case 'q':
					(l = p[f++] * e + t), (u = p[f++] * e + i), (h = p[f++] * e + t), (d = p[f++] * e + i), o.quadraticCurveTo(h, d, l, u);
					break;
				case 'b':
					(l = p[f++] * e + t), (u = p[f++] * e + i), (h = p[f++] * e + t), (d = p[f++] * e + i), (m = p[f++] * e + t), (g = p[f++] * e + i), o.bezierCurveTo(h, d, m, g, l, u);
					break;
			}
	}
	return { offsetX: r.ha * e, path: o };
}
const AnyItem$1 = properties.loader.ITEM_CLASSES.any;
class MSDFItem extends AnyItem$1 {
	constructor(e, t) {
		super(e, { ...t, responseType: 'type' }), (this.FontLoader = new FontLoader());
	}
	retrieve() {
		return !1;
	}
	_onLoad(e) {
		(this.content = e), super._onLoad(this);
	}
	loadFunc() {
		this.FontLoader.load(this.url, this._onLoad.bind(this), this._onMSDFLoading.bind(this));
	}
	_onMSDFLoading(e) {
		this.hasLoading && this.loadingSignal.dispatch(e.loaded / e.total);
	}
}
MSDFItem.type = 'fnt';
MSDFItem.extensions = ['fnt'];
const shader = `#define GLSLIFY 1
uniform vec2 u_glPositionOffset;vec4 glPositionOffset(vec4 glPosition){return glPosition+vec4(u_glPositionOffset*glPosition.w,0.0,0.0);}`;
class GlPositionOffset {
	offset = new Vector2();
	sharedUniforms = { u_glPositionOffset: { value: null } };
	init() {
		(this.sharedUniforms.u_glPositionOffset.value = this.offset), shaderHelper.addChunk('glPositionOffset', shader);
	}
	setOffset(e, t) {
		return this.offset.set(e, t);
	}
}
const glPositionOffset = new GlPositionOffset();
var _populated = !1,
	_ie,
	_firefox,
	_opera,
	_webkit,
	_chrome,
	_ie_real_version,
	_osx,
	_windows,
	_linux,
	_android,
	_win64,
	_iphone,
	_ipad,
	_native,
	_mobile;
function _populate() {
	if (!_populated) {
		_populated = !0;
		var s = navigator.userAgent,
			e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(s),
			t = /(Mac OS X)|(Windows)|(Linux)/.exec(s);
		if (((_iphone = /\b(iPhone|iP[ao]d)/.exec(s)), (_ipad = /\b(iP[ao]d)/.exec(s)), (_android = /Android/i.exec(s)), (_native = /FBAN\/\w+;/i.exec(s)), (_mobile = /Mobile/i.exec(s)), (_win64 = !!/Win64/.exec(s)), e)) {
			(_ie = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN), _ie && document && document.documentMode && (_ie = document.documentMode);
			var i = /(?:Trident\/(\d+.\d+))/.exec(s);
			(_ie_real_version = i ? parseFloat(i[1]) + 4 : _ie), (_firefox = e[2] ? parseFloat(e[2]) : NaN), (_opera = e[3] ? parseFloat(e[3]) : NaN), (_webkit = e[4] ? parseFloat(e[4]) : NaN), _webkit ? ((e = /(?:Chrome\/(\d+\.\d+))/.exec(s)), (_chrome = e && e[1] ? parseFloat(e[1]) : NaN)) : (_chrome = NaN);
		} else _ie = _firefox = _opera = _chrome = _webkit = NaN;
		if (t) {
			if (t[1]) {
				var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(s);
				_osx = n ? parseFloat(n[1].replace('_', '.')) : !0;
			} else _osx = !1;
			(_windows = !!t[2]), (_linux = !!t[3]);
		} else _osx = _windows = _linux = !1;
	}
}
var UserAgent_DEPRECATED$1 = {
		ie: function () {
			return _populate() || _ie;
		},
		ieCompatibilityMode: function () {
			return _populate() || _ie_real_version > _ie;
		},
		ie64: function () {
			return UserAgent_DEPRECATED$1.ie() && _win64;
		},
		firefox: function () {
			return _populate() || _firefox;
		},
		opera: function () {
			return _populate() || _opera;
		},
		webkit: function () {
			return _populate() || _webkit;
		},
		safari: function () {
			return UserAgent_DEPRECATED$1.webkit();
		},
		chrome: function () {
			return _populate() || _chrome;
		},
		windows: function () {
			return _populate() || _windows;
		},
		osx: function () {
			return _populate() || _osx;
		},
		linux: function () {
			return _populate() || _linux;
		},
		iphone: function () {
			return _populate() || _iphone;
		},
		mobile: function () {
			return _populate() || _iphone || _ipad || _android || _mobile;
		},
		nativeApp: function () {
			return _populate() || _native;
		},
		android: function () {
			return _populate() || _android;
		},
		ipad: function () {
			return _populate() || _ipad;
		},
	},
	UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED$1,
	canUseDOM = !!(typeof window < 'u' && window.document && window.document.createElement),
	ExecutionEnvironment$1 = { canUseDOM, canUseWorkers: typeof Worker < 'u', canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent), canUseViewport: canUseDOM && !!window.screen, isInWorker: !canUseDOM },
	ExecutionEnvironment_1 = ExecutionEnvironment$1,
	ExecutionEnvironment = ExecutionEnvironment_1,
	useHasFeature;
ExecutionEnvironment.canUseDOM && (useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ function isEventSupported$1(s, e) {
	if (!ExecutionEnvironment.canUseDOM || (e && !('addEventListener' in document))) return !1;
	var t = 'on' + s,
		i = t in document;
	if (!i) {
		var n = document.createElement('div');
		n.setAttribute(t, 'return;'), (i = typeof n[t] == 'function');
	}
	return !i && useHasFeature && s === 'wheel' && (i = document.implementation.hasFeature('Events.wheel', '3.0')), i;
}
var isEventSupported_1 = isEventSupported$1,
	UserAgent_DEPRECATED = UserAgent_DEPRECATED_1,
	isEventSupported = isEventSupported_1,
	PIXEL_STEP = 10,
	LINE_HEIGHT = 40,
	PAGE_HEIGHT = 800;
function normalizeWheel$2(s) {
	var e = 0,
		t = 0,
		i = 0,
		n = 0;
	return 'detail' in s && (t = s.detail), 'wheelDelta' in s && (t = -s.wheelDelta / 120), 'wheelDeltaY' in s && (t = -s.wheelDeltaY / 120), 'wheelDeltaX' in s && (e = -s.wheelDeltaX / 120), 'axis' in s && s.axis === s.HORIZONTAL_AXIS && ((e = t), (t = 0)), (i = e * PIXEL_STEP), (n = t * PIXEL_STEP), 'deltaY' in s && (n = s.deltaY), 'deltaX' in s && (i = s.deltaX), (i || n) && s.deltaMode && (s.deltaMode == 1 ? ((i *= LINE_HEIGHT), (n *= LINE_HEIGHT)) : ((i *= PAGE_HEIGHT), (n *= PAGE_HEIGHT))), i && !e && (e = i < 1 ? -1 : 1), n && !t && (t = n < 1 ? -1 : 1), { spinX: e, spinY: t, pixelX: i, pixelY: n };
}
normalizeWheel$2.getEventType = function () {
	return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
};
var normalizeWheel_1 = normalizeWheel$2,
	normalizeWheel = normalizeWheel_1;
const normalizeWheel$1 = getDefaultExportFromCjs(normalizeWheel);
class SecondOrderDynamics {
	target0 = null;
	target = null;
	prevTarget = null;
	value = null;
	valueVel = null;
	k1;
	k2;
	k3;
	_f;
	_z;
	_r;
	_w;
	_z;
	_d;
	_targetVelCache;
	_cache1;
	_cache2;
	_k1Stable;
	_k2Stable;
	isVector = null;
	isRobust = null;
	constructor(e, t = 1.5, i = 0.8, n = 2, r = !0) {
		(this.isRobust = r), (this.isVector = typeof e == 'object'), this.setFZR(t, i, n), this.isVector ? ((this.target = e), (this.target0 = e.clone()), (this.prevTarget = e.clone()), (this.value = e.clone()), (this.valueVel = e.clone().setScalar(0)), (this._targetVelCache = this.valueVel.clone()), (this._cache1 = this.valueVel.clone()), (this._cache2 = this.valueVel.clone()), (this.update = this._updateVector), (this.reset = this._resetVector)) : ((this.target0 = e), (this.prevTarget = e), (this.value = e), (this.valueVel = 0), (this.update = this._updateNumber), (this.reset = this._resetNumber)), (this.computeStableCoefficients = r ? this._computeRobustStableCoefficients : this._computeStableCoefficients);
	}
	update(e, t = 0) {}
	reset(e = null) {}
	_resetVector(e = this.target0) {
		this.valueVel.setScalar(0), this.prevTarget.copy(e), this.target.copy(e), this.value.copy(e);
	}
	_resetNumber(e = this.target0) {
		(this.valueVel = 0), (this.prevTarget = e), (this.target = e), (this.value = e);
	}
	setFZR(e = this._f, t = this._z, i = this._r) {
		let n = Math.PI * 2 * e;
		this.isRobust && ((this._w = n), (this._z = t), (this._d = this._w * Math.sqrt(Math.abs(this._z * this._z - 1)))), (this.k1 = t / (Math.PI * e)), (this.k2 = 1 / (n * n)), (this.k3 = (i * t) / n);
	}
	_computeStableCoefficients(e) {
		(this._k1Stable = this.k1), (this._k2Stable = Math.max(this.k2, (1.1 * e * e) / 4 + (e * this.k1) / 2));
	}
	_computeRobustStableCoefficients(e) {
		if (this._w * e < this._z) (this._k1Stable = this.k1), (this._k2Stable = Math.max(this.k2, (e * e) / 2 + (e * this.k1) / 2, e * this.k1));
		else {
			let t = Math.exp(-this._z * this._w * e),
				i = 2 * t * (this._z <= 1 ? Math.cos(e * this._d) : Math.cosh(e * this._d)),
				n = t * t,
				r = e / (1 + n - i);
			(this._k1Stable = (1 - n) * r), (this._k2Stable = e * r);
		}
	}
	_updateVector(e) {
		e > 0 &&
			(this._targetVelCache.copy(this.target).sub(this.prevTarget).divideScalar(e),
			this.prevTarget.copy(this.target),
			this.computeStableCoefficients(e),
			this.value.add(this._cache1.copy(this.valueVel).multiplyScalar(e)),
			this._cache1
				.copy(this.target)
				.add(this._targetVelCache.multiplyScalar(this.k3))
				.sub(this.value)
				.sub(this._cache2.copy(this.valueVel).multiplyScalar(this._k1Stable))
				.multiplyScalar(e / this._k2Stable),
			this.valueVel.add(this._cache1));
	}
	_updateNumber(e, t = this.target) {
		if (e > 0) {
			let i = (t - this.prevTarget) / e;
			(this.prevTarget = t), this.computeStableCoefficients(e), (this.value += this.valueVel * e), (this.valueVel += (t + this.k3 * i - this.value - this._k1Stable * this.valueVel) * (e / this._k2Stable));
		}
	}
}
class Input {
	onDowned = new MinSignal$2();
	onMoved = new MinSignal$2();
	onUped = new MinSignal$2();
	onClicked = new MinSignal$2();
	onWheeled = new MinSignal$2();
	onXScrolled = new MinSignal$2();
	onYScrolled = new MinSignal$2();
	onKeyDowned = new MinSignal$2();
	onKeyPressed = new MinSignal$2();
	onKeyUpped = new MinSignal$2();
	wasDown = !1;
	isDown = !1;
	downTime = 0;
	hasClicked = !1;
	hasMoved = !1;
	hadMoved = !1;
	justClicked = !1;
	startPressTime = 0;
	deltaPressTime = 0;
	mouseXY = new Vector2();
	_prevMouseXY = new Vector2();
	prevMouseXY = new Vector2();
	mousePixelXY = new Vector2();
	_prevMousePixelXY = new Vector2();
	prevMousePixelXY = new Vector2();
	downXY = new Vector2();
	downPixelXY = new Vector2();
	deltaXY = new Vector2();
	deltaPixelXY = new Vector2();
	deltaDownXY = new Vector2();
	deltaDownPixelXY = new Vector2();
	deltaDownPixelDistance = 0;
	deltaWheel = 0;
	deltaDragScrollX = 0;
	deltaScrollX = 0;
	deltaDragScrollY = 0;
	deltaScrollY = 0;
	isDragScrollingX = !1;
	isDragScrollingY = !1;
	isWheelScrolling = !1;
	dragScrollXMomentum = 0;
	dragScrollYMomentum = 0;
	dragScrollMomentumMultiplier = 10;
	canDesktopDragScroll = !1;
	needsCheckDragScrollDirection = !1;
	lastScrollXDirection = 0;
	lastScrollYDirection = 0;
	easedMouseDynamics = {};
	dragScrollDynamic;
	downThroughElems = [];
	currThroughElems = [];
	prevThroughElems = [];
	clickThroughElems = [];
	preInit() {
		const e = document;
		e.addEventListener('mousedown', this._onDown.bind(this)),
			e.addEventListener('touchstart', this._getTouchBound(this, this._onDown)),
			e.addEventListener('mousemove', this._onMove.bind(this)),
			e.addEventListener('touchmove', this._getTouchBound(this, this._onMove)),
			e.addEventListener('mouseup', this._onUp.bind(this)),
			e.addEventListener('touchend', this._getTouchBound(this, this._onUp)),
			e.addEventListener('wheel', this._onWheel.bind(this)),
			e.addEventListener('mousewheel', this._onWheel.bind(this)),
			e.addEventListener('keydown', this._onKeydown.bind(this)),
			e.addEventListener('keypress', this._onKeypress.bind(this)),
			e.addEventListener('keyup', this._onKeyup.bind(this)),
			this.addEasedInput('default', 1.35, 0.5, 1.25),
			(this.dragScrollDynamic = this.addEasedInput('dragScroll', 2, 1, 1)),
			this.onUped.addOnce(() => {
				properties.onFirstClicked.dispatch();
			});
	}
	init() {}
	resize() {
		for (let e in this.easedMouseDynamics) this.easedMouseDynamics[e].reset();
	}
	update(e) {
		for (let t in this.easedMouseDynamics) {
			let i = this.easedMouseDynamics[t];
			i.target.copy(this.mouseXY), i.update(e);
		}
	}
	addEasedInput(e, t = 1.5, i = 0.8, n = 2) {
		return (this.easedMouseDynamics[e] = new SecondOrderDynamics(new Vector2(), t, i, n));
	}
	postUpdate(e) {
		(this.prevThroughElems.length = 0), this.prevThroughElems.concat(this.currThroughElems), (this.deltaWheel = 0), (this.deltaDragScrollX = 0), (this.deltaDragScrollY = 0), (this.deltaScrollX = 0), (this.deltaScrollY = 0), (this.dragScrollXMomentum = 0), (this.dragScrollYMomentum = 0), this.deltaXY.set(0, 0), this.deltaPixelXY.set(0, 0), this.prevMouseXY.copy(this.mouseXY), this.prevMousePixelXY.copy(this.mousePixelXY), (this.hadMoved = this.hasMoved), (this.wasDown = this.isDown), (this.justClicked = !1), (this.isWheelScrolling = !1);
	}
	_onKeydown(e) {
		e.repeat || ((this.startPressTime = new Date()), this.onKeyDowned.dispatch(e));
	}
	_onKeypress(e) {
		(this.deltaPressTime = new Date() - this.startPressTime), this.onKeyPressed.dispatch(e);
	}
	_onKeyup(e) {
		this.onKeyUpped.dispatch(e), (this.startPressTime = 0), (this.deltaPressTime = 0);
	}
	_onWheel(e) {
		let t = normalizeWheel$1(e).pixelY;
		(t = math.clamp(t, -200, 200)), (this.deltaWheel += t), (this.deltaScrollX = this.deltaDragScrollX + this.deltaWheel), (this.deltaScrollY = this.deltaDragScrollY + this.deltaWheel), (this.lastScrollXDirection = this.deltaWheel > 0 ? 1 : -1), (this.lastScrollYDirection = this.deltaWheel > 0 ? 1 : -1), (this.isWheelScrolling = !0), this.onWheeled.dispatch(e.target), this.onXScrolled.dispatch(e.target), this.onYScrolled.dispatch(e.target);
	}
	_onDown(e) {
		(this.isDown = !0), (this.downTime = +new Date()), (this.prevThroughElems.length = 0), this._setThroughElementsByEvent(e, this.downThroughElems), this._getInputXY(e, this.downXY), this._getInputPixelXY(e, this.downPixelXY), this._prevMouseXY.copy(this.downXY), this._prevMousePixelXY.copy(this.downPixelXY), this.deltaXY.set(0, 0), this.deltaPixelXY.set(0, 0), this._getInputXY(e, this.mouseXY), this.dragScrollDynamic.reset(this.mouseXY), (this.isDragScrollingX = !1), (this.isDragScrollingY = !1), (this.needsCheckDragScrollDirection = !1), this._onMove(e), this.onDowned.dispatch(e), (this.needsCheckDragScrollDirection = !0);
	}
	_onMove(e) {
		this._getInputXY(e, this.mouseXY),
			this._getInputPixelXY(e, this.mousePixelXY),
			this.deltaXY.copy(this.mouseXY).sub(this._prevMouseXY),
			this.deltaPixelXY.copy(this.mousePixelXY).sub(this._prevMousePixelXY),
			this._prevMouseXY.copy(this.mouseXY),
			this._prevMousePixelXY.copy(this.mousePixelXY),
			(this.hasMoved = this.deltaXY.length() > 0),
			this.isDown && (this.deltaDownXY.copy(this.mouseXY).sub(this.downXY), this.deltaDownPixelXY.copy(this.mousePixelXY).sub(this.downPixelXY), (this.deltaDownPixelDistance = this.deltaDownPixelXY.length()), (browser.isMobile || this.canDesktopDragScroll) && (this.needsCheckDragScrollDirection && ((this.isDragScrollingX = Math.abs(this.deltaPixelXY.x) > Math.abs(this.deltaPixelXY.y)), (this.isDragScrollingY = !this.isDragScrollingX), (this.needsCheckDragScrollDirection = !1)), this.isDragScrollingX && ((this.deltaDragScrollX += -this.deltaPixelXY.x), (this.deltaScrollX += -this.deltaPixelXY.x + this.deltaWheel), (this.lastScrollXDirection = this.deltaDragScrollX > 0 ? 1 : -1), this.onXScrolled.dispatch(e.target)), this.isDragScrollingY && ((this.deltaDragScrollY += -this.deltaPixelXY.y), (this.deltaScrollY += -this.deltaPixelXY.y + this.deltaWheel), (this.lastScrollYDirection = this.deltaDragScrollY > 0 ? 1 : -1), this.onYScrolled.dispatch(e.target)))),
			this._setThroughElementsByEvent(e, this.currThroughElems),
			this.onMoved.dispatch(e);
	}
	_onUp(e) {
		const t = e.clientX - this.downPixelXY.x,
			i = e.clientY - this.downPixelXY.y;
		Math.sqrt(t * t + i * i) < 40 && +new Date() - this.downTime < 300 && (this._setThroughElementsByEvent(e, this.clickThroughElems), this._getInputXY(e, this.mouseXY), (this.hasClicked = !0), (this.justClicked = !0), this.onClicked.dispatch(e)), this.deltaDownXY.set(0, 0), this.deltaDownPixelXY.set(0, 0), (this.deltaDownPixelDistance = 0), (this.dragScrollXMomentum = this.dragScrollDynamic.valueVel.y * properties.viewportWidth * this.dragScrollMomentumMultiplier * properties.deltaTime), (this.dragScrollYMomentum = this.dragScrollDynamic.valueVel.y * properties.viewportHeight * this.dragScrollMomentumMultiplier * properties.deltaTime), (this.isDown = !1), (this.needsCheckDragScrollDirection = !1), this.onUped.dispatch(e);
	}
	_getTouchBound(e, t, i) {
		return function (n) {
			i && n.preventDefault && n.preventDefault(), t.call(e, n.changedTouches[0] || n.touches[0]);
		};
	}
	_getInputXY(e, t) {
		return t.set((e.clientX / properties.viewportWidth) * 2 - 1, 1 - (e.clientY / properties.viewportHeight) * 2), t;
	}
	_getInputPixelXY(e, t) {
		t.set(e.clientX, e.clientY);
	}
	_setThroughElementsByEvent(e, t) {
		let i = e.target;
		for (t.length = 0; i.parentNode; ) t.push(i), (i = i.parentNode);
	}
	hasThroughElem(e, t) {
		let i = this[t + 'ThroughElems'] || this.currThroughElems,
			n = i.length;
		for (; n--; ) if (i[n] === e) return !0;
		return !1;
	}
	hasThroughElemWithClass(e, t) {
		let i = this[t + 'ThroughElems'] || this.currThroughElems,
			n = i.length;
		for (; n--; ) if (i[n].classList.contains(e)) return i[n];
		return null;
	}
}
const input = new Input(),
	frag$6 = `#define GLSLIFY 1
uniform sampler2D u_lowPaintTexture;uniform sampler2D u_prevPaintTexture;uniform vec2 u_paintTexelSize;uniform vec4 u_drawFrom;uniform vec4 u_drawTo;uniform float u_pushStrength;uniform vec3 u_dissipations;uniform vec2 u_vel;varying vec2 v_uv;vec2 sdSegment(in vec2 p,in vec2 a,in vec2 b){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return vec2(length(pa-ba*h),h);}
#ifdef USE_NOISE
uniform float u_curlScale;uniform float u_curlStrength;vec2 hash(vec2 p){vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));p3+=dot(p3,p3.yzx+33.33);return fract((p3.xx+p3.yz)*p3.zy)*2.0-1.0;}vec3 noised(in vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*f*(f*(f*6.0-15.0)+10.0);vec2 du=30.0*f*f*(f*(f-2.0)+1.0);vec2 ga=hash(i+vec2(0.0,0.0));vec2 gb=hash(i+vec2(1.0,0.0));vec2 gc=hash(i+vec2(0.0,1.0));vec2 gd=hash(i+vec2(1.0,1.0));float va=dot(ga,f-vec2(0.0,0.0));float vb=dot(gb,f-vec2(1.0,0.0));float vc=dot(gc,f-vec2(0.0,1.0));float vd=dot(gd,f-vec2(1.0,1.0));return vec3(va+u.x*(vb-va)+u.y*(vc-va)+u.x*u.y*(va-vb-vc+vd),ga+u.x*(gb-ga)+u.y*(gc-ga)+u.x*u.y*(ga-gb-gc+gd)+du*(u.yx*(va-vb-vc+vd)+vec2(vb,vc)-va));}
#endif
void main(){vec2 res=sdSegment(gl_FragCoord.xy,u_drawFrom.xy,u_drawTo.xy);vec2 radiusWeight=mix(u_drawFrom.zw,u_drawTo.zw,res.y);float d=1.0-smoothstep(-0.01,radiusWeight.x,res.x);vec4 lowData=texture2D(u_lowPaintTexture,v_uv);vec2 velInv=(0.5-lowData.xy)*u_pushStrength;
#ifdef USE_NOISE
vec3 noise3=noised(gl_FragCoord.xy*u_curlScale*(1.0-lowData.xy));vec2 noise=noised(gl_FragCoord.xy*u_curlScale*(2.0-lowData.xy*(0.5+noise3.x)+noise3.yz*0.1)).yz;velInv+=noise*(lowData.z+lowData.w)*u_curlStrength;
#endif
vec4 data=texture2D(u_prevPaintTexture,v_uv+velInv*u_paintTexelSize);data.xy-=0.5;vec4 delta=(u_dissipations.xxyz-1.0)*data;vec2 newVel=u_vel*d;delta+=vec4(newVel,radiusWeight.yy*d);delta.zw=sign(delta.zw)*max(vec2(0.004),abs(delta.zw));data+=delta;data.xy+=0.5;gl_FragColor=clamp(data,vec4(0.0),vec4(1.0));}`,
	blur9VaryingVertexShader = `#define GLSLIFY 1
attribute vec3 position;uniform vec2 u_delta;varying vec2 v_uv[9];void main(){vec2 uv=position.xy*0.5+0.5;v_uv[0]=uv;vec2 delta=u_delta;v_uv[1]=uv-delta;v_uv[2]=uv+delta;delta+=u_delta;v_uv[3]=uv-delta;v_uv[4]=uv+delta;delta+=u_delta;v_uv[5]=uv-delta;v_uv[6]=uv+delta;delta+=u_delta;v_uv[7]=uv-delta;v_uv[8]=uv+delta;gl_Position=vec4(position,1.0);}`,
	blur9VaryingFragmentShader = `#define GLSLIFY 1
uniform sampler2D u_texture;varying vec2 v_uv[9];void main(){vec4 color=texture2D(u_texture,v_uv[0])*0.1633;color+=texture2D(u_texture,v_uv[1])*0.1531;color+=texture2D(u_texture,v_uv[2])*0.1531;color+=texture2D(u_texture,v_uv[3])*0.12245;color+=texture2D(u_texture,v_uv[4])*0.12245;color+=texture2D(u_texture,v_uv[5])*0.0918;color+=texture2D(u_texture,v_uv[6])*0.0918;color+=texture2D(u_texture,v_uv[7])*0.051;color+=texture2D(u_texture,v_uv[8])*0.051;gl_FragColor=color;}`,
	blur9FragmentShader = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec2 u_delta;varying vec2 v_uv;void main(){vec4 color=texture2D(u_texture,v_uv)*0.1633;vec2 delta=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.1531;color+=texture2D(u_texture,v_uv+delta)*0.1531;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.12245;color+=texture2D(u_texture,v_uv+delta)*0.12245;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.0918;color+=texture2D(u_texture,v_uv+delta)*0.0918;delta+=u_delta;color+=texture2D(u_texture,v_uv-delta)*0.051;color+=texture2D(u_texture,v_uv+delta)*0.051;gl_FragColor=color;}`;
class Blur {
	material = null;
	getBlur9Material() {
		let e = fboHelper.MAX_VARYING_VECTORS > 8;
		return this.blur9Material || (this.blur9Material = new RawShaderMaterial({ uniforms: { u_texture: { value: null }, u_delta: { value: new Vector2() } }, vertexShader: e ? fboHelper.precisionPrefix + blur9VaryingVertexShader : fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + (e ? blur9VaryingFragmentShader : blur9FragmentShader), depthWrite: !1, depthTest: !1 })), this.blur9Material;
	}
	blur(e, t, i, n, r, o) {
		let a = 0.25,
			c = Math.ceil(i.width * t) || 0,
			l = Math.ceil(i.height * t) || 0;
		this.material || (this.material = this.getBlur9Material()), n || console.warn('You have to pass intermediateRenderTarget to blur'), (c !== n.width || l !== n.height) && n.setSize(c, l), r ? o || r.setSize(i.width, i.height) : (r = i), (this.material.uniforms.u_texture.value = i.texture || i), this.material.uniforms.u_delta.value.set((e / c) * a, 0), fboHelper.render(this.material, n), (this.material.uniforms.u_texture.value = n.texture || n), this.material.uniforms.u_delta.value.set(0, (e / l) * a), fboHelper.render(this.material, r);
	}
}
const blur = new Blur();
let _v$1 = new Vector2();
class ScreenPaint {
	_lowRenderTarget;
	_lowBlurRenderTarget;
	_prevPaintRenderTarget;
	_currPaintRenderTarget;
	_material;
	_distortionMaterial;
	_fromDrawData;
	_toDrawData;
	drawEnabled = !0;
	needsMouseDown = !1;
	enabled = !0;
	minRadius = 0;
	maxRadius = 100;
	radiusDistanceRange = 100;
	pushStrength = 25;
	accelerationDissipation = 0.8;
	velocityDissipation = 0.985;
	weight1Dissipation = 0.985;
	weight2Dissipation = 0.5;
	useNoise = !1;
	curlScale = 0.1;
	curlStrength = 5;
	_prevUseNoise = null;
	sharedUniforms = { u_paintTexelSize: { value: new Vector2() }, u_prevPaintTexture: { value: null }, u_currPaintTexture: { value: null }, u_lowPaintTexture: { value: null } };
	init() {
		(this._lowRenderTarget = fboHelper.createRenderTarget(1, 1)), (this._lowBlurRenderTarget = fboHelper.createRenderTarget(1, 1)), (this._prevPaintRenderTarget = fboHelper.createRenderTarget(1, 1)), (this._currPaintRenderTarget = fboHelper.createRenderTarget(1, 1)), (this.sharedUniforms.u_lowPaintTexture.value = this._lowRenderTarget.texture), (this._material = new RawShaderMaterial({ uniforms: { u_lowPaintTexture: { value: this._lowRenderTarget.texture }, u_prevPaintTexture: this.sharedUniforms.u_prevPaintTexture, u_paintTexelSize: this.sharedUniforms.u_paintTexelSize, u_drawFrom: { value: (this._fromDrawData = new Vector4(0, 0, 0, 0)) }, u_drawTo: { value: (this._toDrawData = new Vector4(0, 0, 0, 0)) }, u_pushStrength: { value: 0 }, u_curlScale: { value: 0 }, u_curlStrength: { value: 0 }, u_vel: { value: new Vector2() }, u_dissipations: { value: new Vector3() } }, vertexShader: fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + frag$6 }));
	}
	resize(e, t) {
		let i = e >> 2,
			n = t >> 2,
			r = e >> 4,
			o = t >> 4;
		(i !== this._currPaintRenderTarget.width || n !== this._currPaintRenderTarget.height) && (this._currPaintRenderTarget.setSize(i, n), this._prevPaintRenderTarget.setSize(i, n), this._lowRenderTarget.setSize(r, o), this._lowBlurRenderTarget.setSize(r, o), this.sharedUniforms.u_paintTexelSize.value.set(1 / i, 1 / n), this.clear());
	}
	clear = () => {
		fboHelper.clearColor(0.5, 0.5, 0, 0, this._lowRenderTarget), fboHelper.clearColor(0.5, 0.5, 0, 0, this._lowBlurRenderTarget), fboHelper.clearColor(0.5, 0.5, 0, 0, this._currPaintRenderTarget), this._material.uniforms.u_vel.value.set(0, 0);
	};
	update(e) {
		if (!this.enabled) return;
		this.useNoise !== this._prevUseNoise && ((this._material.defines.USE_NOISE = this.useNoise), (this._material.needsUpdate = !0), (this._prevUseNoise = this.useNoise));
		let t = this._currPaintRenderTarget.width,
			i = this._currPaintRenderTarget.height,
			n = this._prevPaintRenderTarget;
		(this._prevPaintRenderTarget = this._currPaintRenderTarget), (this._currPaintRenderTarget = n), (this.sharedUniforms.u_prevPaintTexture.value = this._prevPaintRenderTarget.texture), (this.sharedUniforms.u_currPaintTexture.value = this._currPaintRenderTarget.texture), (this._material.uniforms.u_drawFrom.value.z = this._material.uniforms.u_drawTo.value.z);
		let r = input.mousePixelXY.distanceTo(input.prevMousePixelXY),
			o = math.fit(r, 0, this.radiusDistanceRange, this.minRadius, this.maxRadius);
		(!input.hadMoved || !this.drawEnabled || ((this.needsMouseDown || browser.isMobile) && (!input.isDown || !input.wasDown))) && (o = 0),
			(o = (o / properties.viewportHeight) * i),
			(this._material.uniforms.u_pushStrength.value = this.pushStrength),
			(this._material.uniforms.u_curlScale.value = this.curlScale),
			(this._material.uniforms.u_curlStrength.value = this.curlStrength),
			this._material.uniforms.u_dissipations.value.set(this.velocityDissipation, this.weight1Dissipation, this.weight2Dissipation),
			this._fromDrawData.copy(this._toDrawData),
			this._toDrawData.set(((input.mouseXY.x + 1) * t) / 2, ((input.mouseXY.y + 1) * i) / 2, o, 1),
			_v$1.set(this._toDrawData.x - this._fromDrawData.x, this._toDrawData.y - this._fromDrawData.y).multiplyScalar(e * 0.8),
			this._material.uniforms.u_vel.value.multiplyScalar(this.accelerationDissipation).add(_v$1),
			fboHelper.render(this._material, this._currPaintRenderTarget),
			fboHelper.copy(this._currPaintRenderTarget.texture, this._lowRenderTarget),
			blur.blur(4, 1, this._lowRenderTarget, this._lowBlurRenderTarget);
	}
}
const screenPaint = new ScreenPaint();
class Simple1DNoise {
	static MAX_VERTICES = 256;
	static MAX_VERTICES_MASK = Simple1DNoise.MAX_VERTICES - 1;
	_scale = 1;
	_amplitude = 1;
	_r = [];
	constructor() {
		for (let e = 0; e < Simple1DNoise.MAX_VERTICES; ++e) this._r.push(Math.random() - 0.5);
	}
	getVal(e) {
		const t = e * this._scale,
			i = Math.floor(t),
			n = t - i,
			r = n * n * (3 - 2 * n),
			o = i & Simple1DNoise.MAX_VERTICES_MASK,
			a = (o + 1) & Simple1DNoise.MAX_VERTICES_MASK;
		return math.mix(this._r[o], this._r[a], r) * this._amplitude;
	}
	get amplitude() {
		return this._amplitude;
	}
	set amplitude(e) {
		this._amplitude = e;
	}
	get scale() {
		return this._scale;
	}
	set scale(e) {
		this._scale = e;
	}
}
const _e = new Euler(),
	_v = new Vector3();
class BrownianMotion {
	_position = new Vector3();
	_rotation = new Quaternion();
	_scale = new Vector3(1, 1, 1);
	_matrix = new Matrix4();
	_enablePositionNoise = !0;
	_enableRotationNoise = !0;
	_positionFrequency = 0.25;
	_rotationFrequency = 0.25;
	_positionAmplitude = 0.3;
	_rotationAmplitude = 0.003;
	_positionScale = new Vector3(1, 1, 1);
	_rotationScale = new Vector3(1, 1, 0);
	_positionFractalLevel = 3;
	_rotationFractalLevel = 3;
	_times = new Float32Array(6);
	_noise = new Simple1DNoise();
	static FBM_NORM = 1 / 0.75;
	constructor() {
		this.rehash();
	}
	rehash() {
		for (let e = 0; e < 6; e++) this._times[e] = Math.random() * -1e4;
	}
	_fbm(e, t) {
		let i = 0,
			n = 0.5;
		for (let r = 0; r < t; r++) (i += n * this._noise.getVal(e)), (e *= 2), (n *= 0.5);
		return i;
	}
	update(e) {
		const t = e === void 0 ? 16.666666666666668 : e;
		if (this._enablePositionNoise) {
			for (let i = 0; i < 3; i++) this._times[i] += this._positionFrequency * t;
			_v.set(this._fbm(this._times[0], this._positionFractalLevel), this._fbm(this._times[1], this._positionFractalLevel), this._fbm(this._times[2], this._positionFractalLevel)), _v.multiply(this._positionScale), _v.multiplyScalar(this._positionAmplitude * BrownianMotion.FBM_NORM), this._position.copy(_v);
		}
		if (this._enableRotationNoise) {
			for (let i = 0; i < 3; i++) this._times[i + 3] += this._rotationFrequency * t;
			_v.set(this._fbm(this._times[3], this._rotationFractalLevel), this._fbm(this._times[4], this._rotationFractalLevel), this._fbm(this._times[5], this._rotationFractalLevel)), _v.multiply(this._rotationScale), _v.multiplyScalar(this._rotationAmplitude * BrownianMotion.FBM_NORM), _e.set(_v.x, _v.y, _v.z), this._rotation.setFromEuler(_e);
		}
		this._matrix.compose(this._position, this._rotation, this._scale);
	}
	get positionAmplitude() {
		return this._positionAmplitude;
	}
	set positionAmplitude(e) {
		this._positionAmplitude = e;
	}
	get positionFrequency() {
		return this._positionFrequency;
	}
	set positionFrequency(e) {
		this._positionFrequency = e;
	}
	get rotationAmplitude() {
		return this._rotationAmplitude;
	}
	set rotationAmplitude(e) {
		this._rotationAmplitude = e;
	}
	get rotationFrequency() {
		return this._rotationFrequency;
	}
	set rotationFrequency(e) {
		this._rotationFrequency = e;
	}
	get matrix() {
		return this._matrix;
	}
	set matrix(e) {
		this._matrix = e;
	}
}
const _changeEvent = { type: 'change' },
	_startEvent = { type: 'start' },
	_endEvent = { type: 'end' };
class OrbitControls extends EventDispatcher {
	constructor(e, t) {
		super(),
			t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),
			t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),
			(this.object = e),
			(this.domElement = t),
			(this.domElement.style.touchAction = 'none'),
			(this.enabled = !0),
			(this.target = new Vector3()),
			(this.minDistance = 0),
			(this.maxDistance = 1 / 0),
			(this.minZoom = 0),
			(this.maxZoom = 1 / 0),
			(this.minPolarAngle = 0),
			(this.maxPolarAngle = Math.PI),
			(this.minAzimuthAngle = -1 / 0),
			(this.maxAzimuthAngle = 1 / 0),
			(this.enableDamping = !1),
			(this.dampingFactor = 0.15),
			(this.enableZoom = !1),
			(this.zoomSpeed = 1),
			(this.enableRotate = !0),
			(this.rotateSpeed = 1),
			(this.enablePan = !0),
			(this.panSpeed = 1),
			(this.screenSpacePanning = !0),
			(this.keyPanSpeed = 7),
			(this.autoRotate = !1),
			(this.autoRotateSpeed = 2),
			(this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' }),
			(this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN }),
			(this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }),
			(this.target0 = this.target.clone()),
			(this.position0 = this.object.position.clone()),
			(this.zoom0 = this.object.zoom),
			(this.scale = 1),
			(this._domElementKeyEvents = null),
			(this.getPolarAngle = function () {
				return a.phi;
			}),
			(this.getAzimuthalAngle = function () {
				return a.theta;
			}),
			(this.getDistance = function () {
				return this.object.position.distanceTo(this.target);
			}),
			(this.listenToKeyEvents = function (L) {
				L.addEventListener('keydown', je), (this._domElementKeyEvents = L);
			}),
			(this.saveState = function () {
				i.target0.copy(i.target), i.position0.copy(i.object.position), (i.zoom0 = i.object.zoom);
			}),
			(this.reset = function () {
				i.target.copy(i.target0), i.object.position.copy(i.position0), (i.object.zoom = i.zoom0), (i.scale = 1), i.object.updateProjectionMatrix(), i.dispatchEvent(_changeEvent), i.update(), (r = n.NONE);
			}),
			(this.update = (function () {
				const L = new Vector3(),
					W = new Quaternion().setFromUnitVectors(e.up, new Vector3(0, 1, 0)),
					U = W.clone().invert(),
					oe = new Vector3(),
					he = new Quaternion(),
					le = 2 * Math.PI;
				return function () {
					const de = i.object.position;
					L.copy(de).sub(i.target), L.applyQuaternion(W), a.setFromVector3(L), i.autoRotate && r === n.NONE && v(E()), i.enableDamping ? ((a.theta += c.theta * i.dampingFactor), (a.phi += c.phi * i.dampingFactor)) : ((a.theta += c.theta), (a.phi += c.phi));
					let Se = i.minAzimuthAngle,
						we = i.maxAzimuthAngle;
					isFinite(Se) && isFinite(we) && (Se < -Math.PI ? (Se += le) : Se > Math.PI && (Se -= le), we < -Math.PI ? (we += le) : we > Math.PI && (we -= le), Se <= we ? (a.theta = Math.max(Se, Math.min(we, a.theta))) : (a.theta = a.theta > (Se + we) / 2 ? Math.max(Se, a.theta) : Math.min(we, a.theta))), (a.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, a.phi))), a.makeSafe();
					let Oe = i.enableDamping ? (i.scale - 1) * i.dampingFactor + 1 : i.scale;
					return (a.radius *= Oe), (a.radius = Math.max(i.minDistance, Math.min(i.maxDistance, a.radius))), i.enableDamping === !0 ? i.target.addScaledVector(l, i.dampingFactor) : i.target.add(l), L.setFromSpherical(a), L.applyQuaternion(U), de.copy(i.target).add(L), i.object.lookAt(i.target), i.enableDamping === !0 ? ((c.theta *= 1 - i.dampingFactor), (c.phi *= 1 - i.dampingFactor), l.multiplyScalar(1 - i.dampingFactor)) : (c.set(0, 0, 0), l.set(0, 0, 0)), (i.scale = i.scale / Oe), u || oe.distanceToSquared(i.object.position) > o || 8 * (1 - he.dot(i.object.quaternion)) > o ? (i.dispatchEvent(_changeEvent), oe.copy(i.object.position), he.copy(i.object.quaternion), (u = !1), !0) : !1;
				};
			})()),
			(this.dispose = function () {
				i.domElement.removeEventListener('contextmenu', y), i.domElement.removeEventListener('pointerdown', ge), i.domElement.removeEventListener('pointercancel', ke), i.domElement.removeEventListener('wheel', Re), i.domElement.removeEventListener('pointermove', ze), i.domElement.removeEventListener('pointerup', Be), i._domElementKeyEvents !== null && i._domElementKeyEvents.removeEventListener('keydown', je);
			});
		const i = this,
			n = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
		let r = n.NONE;
		const o = 1e-6,
			a = new Spherical(),
			c = new Spherical(),
			l = new Vector3();
		let u = !1;
		const h = new Vector2(),
			d = new Vector2(),
			m = new Vector2(),
			g = new Vector2(),
			p = new Vector2(),
			f = new Vector2(),
			_ = new Vector2(),
			T = new Vector2(),
			x = new Vector2(),
			S = [],
			b = {};
		function E() {
			return ((2 * Math.PI) / 60 / 60) * i.autoRotateSpeed;
		}
		function A() {
			return Math.pow(0.95, i.zoomSpeed);
		}
		function v(L) {
			c.theta -= L;
		}
		function C(L) {
			c.phi -= L;
		}
		const P = (function () {
				const L = new Vector3();
				return function (U, oe) {
					L.setFromMatrixColumn(oe, 0), L.multiplyScalar(-U), l.add(L);
				};
			})(),
			z = (function () {
				const L = new Vector3();
				return function (U, oe) {
					i.screenSpacePanning === !0 ? L.setFromMatrixColumn(oe, 1) : (L.setFromMatrixColumn(oe, 0), L.crossVectors(i.object.up, L)), L.multiplyScalar(U), l.add(L);
				};
			})(),
			Y = (function () {
				const L = new Vector3();
				return function (U, oe) {
					const he = i.domElement;
					if (i.object.isPerspectiveCamera) {
						const le = i.object.position;
						L.copy(le).sub(i.target);
						let pe = L.length();
						(pe *= Math.tan(((i.object.fov / 2) * Math.PI) / 180)), P((2 * U * pe) / he.clientHeight, i.object.matrix), z((2 * oe * pe) / he.clientHeight, i.object.matrix);
					} else i.object.isOrthographicCamera ? (P((U * (i.object.right - i.object.left)) / i.object.zoom / he.clientWidth, i.object.matrix), z((oe * (i.object.top - i.object.bottom)) / i.object.zoom / he.clientHeight, i.object.matrix)) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'), (i.enablePan = !1));
				};
			})();
		function D(L) {
			i.object.isPerspectiveCamera ? (i.scale /= L) : i.object.isOrthographicCamera ? ((i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom * L))), i.object.updateProjectionMatrix(), (u = !0)) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), (i.enableZoom = !1));
		}
		function I(L) {
			i.object.isPerspectiveCamera ? (i.scale *= L) : i.object.isOrthographicCamera ? ((i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / L))), i.object.updateProjectionMatrix(), (u = !0)) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), (i.enableZoom = !1));
		}
		function N(L) {
			h.set(L.clientX, L.clientY);
		}
		function j(L) {
			_.set(L.clientX, L.clientY);
		}
		function K(L) {
			g.set(L.clientX, L.clientY);
		}
		function q(L) {
			d.set(L.clientX, L.clientY), m.subVectors(d, h).multiplyScalar(i.rotateSpeed);
			const W = i.domElement;
			v((2 * Math.PI * m.x) / W.clientHeight), C((2 * Math.PI * m.y) / W.clientHeight), h.copy(d), i.update();
		}
		function ie(L) {
			T.set(L.clientX, L.clientY), x.subVectors(T, _), x.y > 0 ? D(A()) : x.y < 0 && I(A()), _.copy(T), i.update();
		}
		function ee(L) {
			p.set(L.clientX, L.clientY), f.subVectors(p, g).multiplyScalar(i.panSpeed), Y(f.x, f.y), g.copy(p), i.update();
		}
		function B(L) {
			L.deltaY < 0 ? I(A()) : L.deltaY > 0 && D(A()), i.update();
		}
		function H(L) {
			let W = !1;
			switch (L.code) {
				case i.keys.UP:
					Y(0, i.keyPanSpeed), (W = !0);
					break;
				case i.keys.BOTTOM:
					Y(0, -i.keyPanSpeed), (W = !0);
					break;
				case i.keys.LEFT:
					Y(i.keyPanSpeed, 0), (W = !0);
					break;
				case i.keys.RIGHT:
					Y(-i.keyPanSpeed, 0), (W = !0);
					break;
			}
			W && (L.preventDefault(), i.update());
		}
		function Z() {
			if (S.length === 1) h.set(S[0].pageX, S[0].pageY);
			else {
				const L = 0.5 * (S[0].pageX + S[1].pageX),
					W = 0.5 * (S[0].pageY + S[1].pageY);
				h.set(L, W);
			}
		}
		function te() {
			if (S.length === 1) g.set(S[0].pageX, S[0].pageY);
			else {
				const L = 0.5 * (S[0].pageX + S[1].pageX),
					W = 0.5 * (S[0].pageY + S[1].pageY);
				g.set(L, W);
			}
		}
		function re() {
			const L = S[0].pageX - S[1].pageX,
				W = S[0].pageY - S[1].pageY,
				U = Math.sqrt(L * L + W * W);
			_.set(0, U);
		}
		function $() {
			i.enableZoom && re(), i.enablePan && te();
		}
		function Te() {
			i.enableZoom && re(), i.enableRotate && Z();
		}
		function ue(L) {
			if (S.length == 1) d.set(L.pageX, L.pageY);
			else {
				const U = se(L),
					oe = 0.5 * (L.pageX + U.x),
					he = 0.5 * (L.pageY + U.y);
				d.set(oe, he);
			}
			m.subVectors(d, h).multiplyScalar(i.rotateSpeed);
			const W = i.domElement;
			v((2 * Math.PI * m.x) / W.clientHeight), C((2 * Math.PI * m.y) / W.clientHeight), h.copy(d);
		}
		function ve(L) {
			if (S.length === 1) p.set(L.pageX, L.pageY);
			else {
				const W = se(L),
					U = 0.5 * (L.pageX + W.x),
					oe = 0.5 * (L.pageY + W.y);
				p.set(U, oe);
			}
			f.subVectors(p, g).multiplyScalar(i.panSpeed), Y(f.x, f.y), g.copy(p);
		}
		function ce(L) {
			const W = se(L),
				U = L.pageX - W.x,
				oe = L.pageY - W.y,
				he = Math.sqrt(U * U + oe * oe);
			T.set(0, he), x.set(0, Math.pow(T.y / _.y, i.zoomSpeed)), D(x.y), _.copy(T);
		}
		function Pe(L) {
			i.enableZoom && ce(L), i.enablePan && ve(L);
		}
		function ye(L) {
			i.enableZoom && ce(L), i.enableRotate && ue(L);
		}
		function ge(L) {
			i.enabled !== !1 && (S.length === 0 && (i.domElement.setPointerCapture(L.pointerId), i.domElement.addEventListener('pointermove', ze), i.domElement.addEventListener('pointerup', Be)), k(L), L.pointerType === 'touch' ? Xe(L) : $e(L));
		}
		function ze(L) {
			i.enabled !== !1 && (L.pointerType === 'touch' ? w(L) : Fe(L));
		}
		function Be(L) {
			Q(L), S.length === 0 && (i.domElement.releasePointerCapture(L.pointerId), i.domElement.removeEventListener('pointermove', ze), i.domElement.removeEventListener('pointerup', Be)), i.dispatchEvent(_endEvent), (r = n.NONE);
		}
		function ke(L) {
			Q(L);
		}
		function $e(L) {
			let W;
			switch (L.button) {
				case 0:
					W = i.mouseButtons.LEFT;
					break;
				case 1:
					W = i.mouseButtons.MIDDLE;
					break;
				case 2:
					W = i.mouseButtons.RIGHT;
					break;
				default:
					W = -1;
			}
			switch (W) {
				case MOUSE.DOLLY:
					if (i.enableZoom === !1) return;
					j(L), (r = n.DOLLY);
					break;
				case MOUSE.ROTATE:
					if (L.ctrlKey || L.metaKey || L.shiftKey) {
						if (i.enablePan === !1) return;
						K(L), (r = n.PAN);
					} else {
						if (i.enableRotate === !1) return;
						N(L), (r = n.ROTATE);
					}
					break;
				case MOUSE.PAN:
					if (L.ctrlKey || L.metaKey || L.shiftKey) {
						if (i.enableRotate === !1) return;
						N(L), (r = n.ROTATE);
					} else {
						if (i.enablePan === !1) return;
						K(L), (r = n.PAN);
					}
					break;
				default:
					r = n.NONE;
			}
			r !== n.NONE && i.dispatchEvent(_startEvent);
		}
		function Fe(L) {
			if (i.enabled !== !1)
				switch (r) {
					case n.ROTATE:
						if (i.enableRotate === !1) return;
						q(L);
						break;
					case n.DOLLY:
						if (i.enableZoom === !1) return;
						ie(L);
						break;
					case n.PAN:
						if (i.enablePan === !1) return;
						ee(L);
						break;
				}
		}
		function Re(L) {
			i.enabled === !1 || i.enableZoom === !1 || r !== n.NONE || (i.dispatchEvent(_startEvent), B(L), i.dispatchEvent(_endEvent));
		}
		function je(L) {
			i.enabled === !1 || i.enablePan === !1 || H(L);
		}
		function Xe(L) {
			switch ((ne(L), S.length)) {
				case 1:
					switch (i.touches.ONE) {
						case TOUCH.ROTATE:
							if (i.enableRotate === !1) return;
							Z(), (r = n.TOUCH_ROTATE);
							break;
						case TOUCH.PAN:
							if (i.enablePan === !1) return;
							te(), (r = n.TOUCH_PAN);
							break;
						default:
							r = n.NONE;
					}
					break;
				case 2:
					switch (i.touches.TWO) {
						case TOUCH.DOLLY_PAN:
							if (i.enableZoom === !1 && i.enablePan === !1) return;
							$(), (r = n.TOUCH_DOLLY_PAN);
							break;
						case TOUCH.DOLLY_ROTATE:
							if (i.enableZoom === !1 && i.enableRotate === !1) return;
							Te(), (r = n.TOUCH_DOLLY_ROTATE);
							break;
						default:
							r = n.NONE;
					}
					break;
				default:
					r = n.NONE;
			}
			r !== n.NONE && i.dispatchEvent(_startEvent);
		}
		function w(L) {
			switch ((ne(L), r)) {
				case n.TOUCH_ROTATE:
					if (i.enableRotate === !1) return;
					ue(L), i.update();
					break;
				case n.TOUCH_PAN:
					if (i.enablePan === !1) return;
					ve(L), i.update();
					break;
				case n.TOUCH_DOLLY_PAN:
					if (i.enableZoom === !1 && i.enablePan === !1) return;
					Pe(L), i.update();
					break;
				case n.TOUCH_DOLLY_ROTATE:
					if (i.enableZoom === !1 && i.enableRotate === !1) return;
					ye(L), i.update();
					break;
				default:
					r = n.NONE;
			}
		}
		function y(L) {
			i.enabled;
		}
		function k(L) {
			S.push(L);
		}
		function Q(L) {
			delete b[L.pointerId];
			for (let W = 0; W < S.length; W++)
				if (S[W].pointerId == L.pointerId) {
					S.splice(W, 1);
					return;
				}
		}
		function ne(L) {
			let W = b[L.pointerId];
			W === void 0 && ((W = new Vector2()), (b[L.pointerId] = W)), W.set(L.pageX, L.pageY);
		}
		function se(L) {
			const W = L.pointerId === S[0].pointerId ? S[1] : S[0];
			return b[W.pointerId];
		}
		i.domElement.addEventListener('contextmenu', y), i.domElement.addEventListener('pointerdown', ge), i.domElement.addEventListener('pointercancel', ke), i.domElement.addEventListener('wheel', Re, { passive: !1 }), this.update();
	}
}
class DeviceOrientationControls {
	object = null;
	enabled = !0;
	hasValue = !1;
	deviceOrientation = {};
	screenOrientation = 0;
	alphaOffset = 0;
	zee = new Vector3(0, 0, 1);
	euler = new Euler();
	q0 = new Quaternion();
	q1 = new Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
	_onBoundDeviceOrientationChangeEvent;
	_onBoundScreenOrientationChangeEvent;
	constructor(e) {
		(this.object = e), this.object.rotation.reorder('YXZ'), (this._onBoundDeviceOrientationChangeEvent = this._onDeviceOrientationChangeEvent.bind(this)), (this._onBoundScreenOrientationChangeEvent = this._onScreenOrientationChangeEvent.bind(this)), this.connect();
	}
	_onDeviceOrientationChangeEvent(e) {
		this.deviceOrientation = e;
	}
	_onScreenOrientationChangeEvent() {
		this.screenOrientation = window.orientation || 0;
	}
	setObjectQuaternion(e, t, i, n, r) {
		this.euler.set(i, t, -n, 'YXZ'), e.setFromEuler(this.euler), e.multiply(this.q1), e.multiply(this.q0.setFromAxisAngle(this.zee, -r));
	}
	connect() {
		this._onBoundScreenOrientationChangeEvent(),
			window.DeviceOrientationEvent !== void 0 && typeof window.DeviceOrientationEvent.requestPermission == 'function'
				? window.DeviceOrientationEvent.requestPermission()
						.then(function (e) {
							e == 'granted' && (window.addEventListener('orientationchange', this._onBoundScreenOrientationChangeEvent, !1), window.addEventListener('deviceorientation', this._onBoundDeviceOrientationChangeEvent, !1));
						})
						.catch(function (e) {})
				: (window.addEventListener('orientationchange', this._onBoundScreenOrientationChangeEvent, !1), window.addEventListener('deviceorientation', this._onBoundDeviceOrientationChangeEvent, !1)),
			(this.enabled = !0);
	}
	disconnect() {
		window.removeEventListener('orientationchange', this._onBoundScreenOrientationChangeEvent, !1), window.removeEventListener('deviceorientation', this._onBoundDeviceOrientationChangeEvent, !1), (this.enabled = !1);
	}
	update() {
		if (this.enabled === !1) return;
		let e = this.deviceOrientation;
		if (e) {
			let t = e.alpha ? MathUtils$1.degToRad(e.alpha) + this.alphaOffset : 0,
				i = e.beta ? MathUtils$1.degToRad(e.beta) : 0,
				n = e.gamma ? MathUtils$1.degToRad(e.gamma) : 0,
				r = this.screenOrientation ? MathUtils$1.degToRad(this.screenOrientation) : 0;
			this.setObjectQuaternion(this.object.quaternion, t, i, n, r), (this.hasValue = e.alpha && e.beta && e.gamma);
		}
	}
	dispose() {
		this.disconnect();
	}
}
class CameraControls {
	useOrbitControls = !1;
	preInit(e) {
		(this.DEFAULT_CAMERA_POSITION = new Vector3(0, 0.5, 5)),
			(this.DEFAULT_LOOKAT_POSITION = new Vector3(0, 0.5, 0)),
			(this._brownianMotion = null),
			(this._orbitControls = null),
			(this._orbitCamera = null),
			(this._camera = null),
			(this._deviceOrientationControls = null),
			(this._baseDeviceControlQuaternion = null),
			(this._targetDeviceControlQuaternion = null),
			(this._deviceOrientationCamera = null),
			(this._hasDeviceOrientationControlValues = !1),
			(this._q = new Quaternion()),
			(this._e = new Euler()),
			(this._v1 = new Vector3()),
			(this._v2 = new Vector3()),
			(this._camera = properties.camera),
			this._camera.position.copy(this.DEFAULT_CAMERA_POSITION),
			(this._brownianMotion = new BrownianMotion()),
			this.useOrbitControls === !0 && ((this._orbitCamera = this._camera.clone()), (this._orbitControls = new OrbitControls(this._orbitCamera, properties.canvas)), (this._orbitControls.enableDamping = !0), this._orbitControls.target0.copy(this.DEFAULT_LOOKAT_POSITION), this._orbitControls.reset()),
			browser.isMobile &&
				((this._deviceOrientationCamera = new Camera()),
				(this._baseDeviceControlQuaternion = new Quaternion()),
				(this._targetDeviceControlQuaternion = new Quaternion()),
				(this._deviceOrientationControls = new DeviceOrientationControls(this._deviceOrientationCamera)),
				properties.onFirstClicked.addOnce(() => {
					this._deviceOrientationControls.connect();
				}));
	}
	init() {}
	resize(e, t) {}
	update(e) {
		let t = this._camera;
		t.matrix.identity(), t.matrix.decompose(t.position, t.quaternion, t.scale), t.position.copy(this.DEFAULT_CAMERA_POSITION), t.lookAt(this.DEFAULT_LOOKAT_POSITION), browser.isMobile && this._deviceOrientationControls.update(), this.useOrbitControls === !0 && (this._orbitControls.update(), this._orbitCamera.updateMatrix(), this._orbitCamera.matrix.decompose(t.position, t.quaternion, t.scale)), this._v1.set(0, 0, -1).applyQuaternion(t.quaternion), this.useOrbitControls === !0 ? (this.cameraDistance = this._v2.copy(this._orbitControls.target).sub(t.position).dot(this._v1)) : (this.cameraDistance = this._v2.copy(this.DEFAULT_LOOKAT_POSITION).sub(t.position).dot(this._v1));
		let i = t.fov;
		t.fov = math.fit(this.cameraDistance, 2, 8, 75, 20);
		let n = this.cameraDistance;
		if (((n = (n * Math.tan(((i / 360) * Math.PI) / 2)) / Math.tan(((t.fov / 360) * Math.PI) / 2) - n), t.translateZ(n), t.updateProjectionMatrix(), (t.fov = i), (this.cameraDistance += n), browser.isMobile)) this._deviceOrientationControls.update(), this._deviceOrientationControls.hasValue && (this._hasDeviceOrientationControlValues || (this._targetDeviceControlQuaternion.copy(this._deviceOrientationCamera.quaternion), this._baseDeviceControlQuaternion.copy(this._deviceOrientationCamera.quaternion)), this._targetDeviceControlQuaternion.slerp(this._deviceOrientationCamera.quaternion, 0.08), this._baseDeviceControlQuaternion.slerp(this._targetDeviceControlQuaternion, 0.08), this._q.copy(this._baseDeviceControlQuaternion).invert().multiply(this._targetDeviceControlQuaternion), (this._hasDeviceOrientationControlValues = !0), t.quaternion.multiply(this._q));
		else {
			t.translateZ(this.cameraDistance * -1);
			let r = math.clamp(input.mouseXY.y, -1, 1) * properties.cameraLookStrength,
				o = math.clamp(-input.mouseXY.x, -1, 1) * properties.cameraLookStrength;
			(properties.cameraLookX += (r - properties.cameraLookX) * properties.cameraLookEaseDamp), (properties.cameraLookY += (o - properties.cameraLookY) * properties.cameraLookEaseDamp), this._e.set(properties.cameraLookX, properties.cameraLookY, 0), this._q.setFromEuler(this._e), t.quaternion.multiply(this._q), t.translateZ(this.cameraDistance);
		}
		t.matrix.compose(t.position, t.quaternion, t.scale), (this._brownianMotion.positionAmplitude = properties.cameraShakePositionStrength), (this._brownianMotion.positionFrequency = properties.cameraShakePositionSpeed), (this._brownianMotion.rotationAmplitude = properties.cameraShakeRotationStrength), (this._brownianMotion.rotationFrequency = properties.cameraShakeRotationSpeed), this._brownianMotion.update(e), t.matrix.multiply(this._brownianMotion.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale), this._v1.set(0, 0, -1).applyQuaternion(t.quaternion), this.useOrbitControls === !0 && (properties.cameraDistance = this._v2.copy(this._orbitControls.target).sub(t.position).dot(this._v1));
	}
}
const cameraControls = new CameraControls();
class Support {
	isSupported() {
		(properties._isSupportedDevice = !0), (properties._isSupportedBrowser = (browser.isChrome || browser.isSafari || browser.isEdge || browser.isFirefox || browser.isOpera) && !browser.isIE), (properties._isSupportedWebGL = this.checkSupportWebGL()), browser.isMobile && this.checkSupportMobileOrientation();
		let e = properties._isSupportedDevice && properties._isSupportedBrowser && properties._isSupportedWebGL;
		return e === !1 && this.notSupported(), e;
	}
	notSupported() {
		if (!properties._isSupportedDevice) {
			this._addNotSupported('device');
			return;
		}
		if (!properties._isSupportedBrowser) {
			this._addNotSupported('browser');
			return;
		}
		if (!properties._isSupportedWebGL) {
			this._addNotSupported('webgl');
			return;
		}
	}
	checkSupportWebGL() {
		if (!(properties.canvas instanceof HTMLCanvasElement)) return !1;
		if (settings.USE_WEBGL2 && window.WebGL2RenderingContext)
			try {
				return (properties.gl = properties.canvas.getContext('webgl2', properties.webglOpts)), (settings.RENDER_TARGET_FLOAT_TYPE = HalfFloatType), (settings.DATA_FLOAT_TYPE = FloatType), !0;
			} catch (e) {
				return console.error(e), !1;
			}
		if (((settings.USE_WEBGL2 = !1), window.WebGLRenderingContext))
			try {
				let e = (properties.gl = properties.canvas.getContext('webgl', properties.webglOpts) || properties.canvas.getContext('experimental-webgl', properties.webglOpts));
				if ((e.getExtension('OES_texture_float') || e.getExtension('OES_texture_half_float')) && e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) (settings.RENDER_TARGET_FLOAT_TYPE = browser.isIOS || e.getExtension('OES_texture_half_float') ? HalfFloatType : FloatType), (settings.DATA_FLOAT_TYPE = FloatType);
				else return (settings.USE_FLOAT_PACKING = !0), (settings.RENDER_TARGET_FLOAT_TYPE = settings.DATA_FLOAT_TYPE = UnsignedByteType), !1;
				return !0;
			} catch (e) {
				return console.error(e), !1;
			}
		return !1;
	}
	checkSupportMobileOrientation() {
		const e = window.matchMedia('(orientation: portrait)'),
			t = (i) => {
				const n = i.matches ? 'portrait' : 'landscape';
				n === 'portrait' ? (properties._isSupportedMobileOrientation = !0) : n === 'landscape' && (properties._isSupportedMobileOrientation = !1), properties._isSupported && !properties._isSupportedMobileOrientation ? this._addNotSupported('orientation') : this._removeNotSupported('orientation');
			};
		window.addEventListener('load', () => {
			t(e);
		}),
			e.addEventListener('change', (i) => {
				t(i);
			});
	}
	_removeNotSupported(e) {
		properties._isSupported && document.documentElement.classList.remove('not-supported'), e && document.documentElement.classList.remove(`not-supported--${e}`);
	}
	_addNotSupported(e) {
		document.documentElement.classList.add('not-supported'), e && document.documentElement.classList.add(`not-supported--${e}`);
	}
}
const support = new Support();
class ImageExporter {
	outRenderTarget = null;
	outMaterial = null;
	canvas = null;
	ctx = null;
	width = 0;
	height = 0;
	exporterProgress = 0;
	isExporting = !1;
	buffer = new Uint8Array();
	imageData = null;
	waitingForExport = !1;
	link = document.createElement('a');
	constructor() {}
	preInit() {
		(this.canvas = document.createElement('canvas')),
			(this.ctx = this.canvas.getContext('2d')),
			(this.outRenderTarget = fboHelper.createRenderTarget(1, 1, !0)),
			(this.outMaterial = new RawShaderMaterial({
				uniforms: { u_texture: { value: null } },
				vertexShader: `${fboHelper.precisionPrefix}
				attribute vec2 position;
				varying vec2 v_uv;

				void main() {
					v_uv = position * 0.5 + 0.5;
					v_uv.y = 1.0 - v_uv.y;
					gl_Position = vec4(position, 0.0, 1.0);
				}
			`,
				fragmentShader: `${fboHelper.precisionPrefix}${blitFrag}`,
				depthTest: !1,
				depthWrite: !1,
				blending: NoBlending,
			})),
			properties.exporterSignal.add(() => {
				this.waitingForExport = !0;
			});
	}
	init() {}
	exportImage() {
		(this.width = properties.width),
			(this.height = properties.height),
			this.outRenderTarget.setSize(properties.width, properties.height),
			(this.exporterProgress = 0),
			(this.isExporting = !0),
			this.isExporting && ((this.exporterProgress = 1), (this.outMaterial.uniforms.u_texture.value = properties.postprocessing.fromRenderTarget.texture), fboHelper.render(this.outMaterial, this.outRenderTarget), (this.canvas.width !== this.width || this.canvas.height !== this.height) && ((this.canvas.width = this.width), (this.canvas.height = this.height), (this.imageData = this.ctx.getImageData(0, 0, this.width, this.height)), (this.buffer = new Uint8Array(this.imageData.data.length))), fboHelper.renderer.readRenderTargetPixels(this.outRenderTarget, 0, 0, this.width, this.height, this.buffer), this.imageData.data.set(this.buffer), this.ctx.putImageData(this.imageData, 0, 0), (this.link.download = 'Lusion_exported_image.png'), (this.link.href = this.canvas.toDataURL()), this.link.click(), (this.isExporting = !1));
	}
	update(e) {
		this.waitingForExport && (this.exportImage(), (this.waitingForExport = !1));
	}
}
const imageExporter = new ImageExporter(),
	uvFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;varying vec2 v_uv;void main(){float alpha=texture2D(u_texture,v_uv).a;gl_FragColor=vec4(v_uv,1.,alpha);gl_FragColor.rgb*=(alpha>0. ? 1.: 0.);}`,
	jumpFloodFrag = `#define GLSLIFY 1
varying vec2 v_uv;uniform sampler2D u_texture;uniform vec2 u_stepSize;uniform vec2 u_lowResolution;uniform vec2 u_aspect;void main(){float minDist=10000.;vec2 minDistUv=vec2(0.,0.);vec2 stepSize=u_stepSize/u_lowResolution;for(int y=-1;y<=1;++y){for(int x=-1;x<=1;++x){vec2 pos=v_uv-vec2(x,y)*stepSize;vec2 targetUv=texture2D(u_texture,pos).rg;float dist=length((targetUv-v_uv)*u_aspect);if(dot(targetUv,targetUv)>0.&&dist<minDist){minDist=dist;minDistUv=targetUv;}}}vec2 ba=texture2D(u_texture,v_uv).ba;gl_FragColor=vec4(minDistUv,ba);}`,
	rayMarchFrag = `#define GLSLIFY 1
uniform sampler2D u_dfTexture;uniform sampler2D u_texture;
#define EPS 1.e-5
uniform vec2 u_lowResolution;uniform vec2 u_aspect;uniform float u_sdfBorder;uniform vec3 u_ambientColor;uniform float u_ambientMissHitOpacity;uniform float u_minStepSize;uniform float u_falloffStrength;uniform float u_emissiveStrength;varying vec2 v_uv;
#include <getBlueNoise>
vec3 rayMarch(vec2 uv,vec2 dir){float dd=0.;float d;for(int i=0;i<STEP_COUNT;i++){vec4 dfInfo=texture2D(u_dfTexture,uv);float d=dfInfo.a<1. ? distance(dfInfo.xy,uv): 0.;dd+=d;if(d<EPS){return mix(u_ambientColor*u_ambientMissHitOpacity,texture2D(u_texture,uv).rgb,dfInfo.a)*exp(-dd*u_falloffStrength)*u_emissiveStrength;}uv+=dir*max(u_minStepSize,d);if(uv.x<0.||uv.y<0.||uv.x>1.||uv.y>1.)break;}return u_ambientColor*u_ambientMissHitOpacity;}void main(){vec3 bnoise=getBlueNoise(gl_FragCoord.xy+vec2(10.,83.));float opacity=texture2D(u_dfTexture,v_uv).b;vec3 col=vec3(0.);float samplesInv=1./float(SAMPLES);float angleBit=6.283185*samplesInv;float t=bnoise.x*angleBit;float hitCount=0.;for(int i=0;i<SAMPLES;i++){col+=rayMarch(v_uv,vec2(cos(t),sin(t))/u_aspect);t+=angleBit;}col*=samplesInv;gl_FragColor=vec4(col,1.)*(1.-opacity);}`,
	paddingFrag = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform vec2 u_lowResolution;varying vec2 v_uv;void main(){vec3 stepSize=vec3(1./u_lowResolution,0.);vec4 sum=texture2D(u_texture,v_uv-stepSize.xy)+texture2D(u_texture,v_uv-stepSize.xz)+texture2D(u_texture,v_uv+vec2(-stepSize.x,stepSize.y))+texture2D(u_texture,v_uv-stepSize.zy)+texture2D(u_texture,v_uv)+texture2D(u_texture,v_uv+stepSize.zy)+texture2D(u_texture,v_uv+vec2(stepSize.x,-stepSize.y))+texture2D(u_texture,v_uv+stepSize.yz)+texture2D(u_texture,v_uv+stepSize.xy);gl_FragColor=sum.a>0. ? vec4(sum.rgb/sum.a,min(1.,sum.a)): vec4(0.);}`,
	frag$5 = `#define GLSLIFY 1
uniform sampler2D u_texture;uniform sampler2D u_cacheTexture;uniform vec3 u_ambientColor;uniform float u_ambientBaseOpacity;uniform float u_sceneColorIntensity;varying vec2 v_uv;void main(){vec2 uv=v_uv;vec4 color=texture2D(u_texture,v_uv);vec4 cache=texture2D(u_cacheTexture,uv)+vec4(u_ambientColor*u_ambientBaseOpacity,0.);gl_FragColor=vec4(u_sceneColorIntensity*color.rgb+cache.rgb*(1.-color.a),1.);}`;
class GI2D {
	mesh;
	USE_MSAA = !0;
	SAMPLE_COUNT = 8;
	STEP_COUNT = 28;
	DOWNSCALE = 2;
	paddingPassCount = 3;
	minStepSize = 3;
	ambientColorHex = '#222';
	ambientMissHitOpacity = 0;
	ambientBaseOpacity = 0.1;
	falloffStrength = 0.5;
	emissiveStrength = 1;
	width = 1;
	height = 1;
	lowWidth = 1;
	lowHeight = 1;
	uvMaterial;
	jumpFloodMaterial;
	rayMarchMaterial;
	paddingMaterial;
	material;
	inRT;
	dfRTFrom;
	dfRTTo;
	cacheFromRT;
	cacheToRT;
	outRT;
	scene = new Scene();
	camera = new OrthographicCamera(-1, 1, 1, -1, 1, 200);
	_iterationCount = 0;
	lowResolution = new Vector2(1, 1);
	aspect = new Vector2(1, 1);
	stepSize = new Vector2(1, 1);
	ambientColor = new Color(0);
	defaultColor = new Color('#000');
	tempColor = new Color(0);
	lightOnFactor = 0;
	sceneIntensity = 0;
	sharedUniforms = { u_inTexture: { value: null }, u_inLowTexture: { value: null }, u_dfTextureFrom: { value: null }, u_dfTextureTo: { value: null }, u_cacheFromTexture: { value: null }, u_cacheToTexture: { value: null }, u_outTexture: { value: null }, u_lowResolution: { value: this.lowResolution }, u_aspect: { value: this.aspect }, u_minStepSize: { value: 0 }, u_stepSize: { value: this.stepSize }, u_ambientColor: { value: this.ambientColor }, u_ambientMissHitOpacity: { value: 0 }, u_ambientBaseOpacity: { value: 0 }, u_falloffStrength: { value: 0 }, u_emissiveStrength: { value: 0 }, u_sceneColorIntensity: { value: 0 } };
	init() {
		(this.camera.position.z = 100),
			(this.inRT = fboHelper.createMultisampleRenderTarget(1, 1, !0, !1, this.USE_MSAA ? 4 : 1)),
			(this.inRT.depthBuffer = !0),
			(this.inLowRT = fboHelper.createRenderTarget(1, 1, !0)),
			(this.dfRTFrom = fboHelper.createRenderTarget(1, 1, !0)),
			(this.dfRTTo = fboHelper.createRenderTarget(1, 1, !0)),
			(this.cacheFromRT = fboHelper.createRenderTarget(1, 1, !0)),
			(this.cacheToRT = fboHelper.createRenderTarget(1, 1, !0)),
			(this.outRT = fboHelper.createRenderTarget(1, 1)),
			(this.sharedUniforms.u_inTexture.value = this.inRT.texture),
			(this.sharedUniforms.u_inLowTexture.value = this.inLowRT.texture),
			(this.sharedUniforms.u_outTexture.value = this.outRT.texture),
			(this.uvMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: this.sharedUniforms.u_inLowTexture }, fragmentShader: uvFrag })),
			(this.jumpFloodMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: this.sharedUniforms.u_dfTextureFrom, u_lowResolution: this.sharedUniforms.u_lowResolution, u_aspect: this.sharedUniforms.u_aspect, u_stepSize: this.sharedUniforms.u_stepSize }, fragmentShader: jumpFloodFrag })),
			(this.rayMarchMaterial = fboHelper.createRawShaderMaterial({ uniforms: Object.assign({ u_dfTexture: this.sharedUniforms.u_dfTextureFrom, u_lowResolution: this.sharedUniforms.u_lowResolution, u_texture: this.sharedUniforms.u_inLowTexture, u_aspect: this.sharedUniforms.u_aspect, u_minStepSize: this.sharedUniforms.u_minStepSize, u_ambientColor: this.sharedUniforms.u_ambientColor, u_ambientMissHitOpacity: this.sharedUniforms.u_ambientMissHitOpacity, u_falloffStrength: this.sharedUniforms.u_falloffStrength, u_emissiveStrength: this.sharedUniforms.u_emissiveStrength }, blueNoise.sharedUniforms), fragmentShader: rayMarchFrag })),
			(this.rayMarchMaterial.defines.SAMPLES = this.SAMPLE_COUNT),
			(this.rayMarchMaterial.defines.STEP_COUNT = this.STEP_COUNT),
			(this.paddingMaterial = fboHelper.createRawShaderMaterial({ uniforms: { u_texture: this.sharedUniforms.u_cacheFromTexture, u_lowResolution: this.sharedUniforms.u_lowResolution }, fragmentShader: paddingFrag })),
			(this.mesh = new Mesh(fboHelper.triGeom, fboHelper.createRawShaderMaterial({ uniforms: Object.assign({ u_texture: this.sharedUniforms.u_inTexture, u_cacheTexture: this.sharedUniforms.u_cacheFromTexture, u_ambientColor: this.sharedUniforms.u_ambientColor, u_ambientBaseOpacity: this.sharedUniforms.u_ambientBaseOpacity, u_sceneColorIntensity: this.sharedUniforms.u_sceneColorIntensity }, blueNoise.sharedUniforms), fragmentShader: frag$5 }))),
			(this.mesh.frustumCulled = !1);
	}
	resize(e, t) {
		let i = (this.lowWidth = Math.ceil(e / this.DOWNSCALE)),
			n = (this.lowHeight = Math.ceil(t / this.DOWNSCALE));
		this.lowResolution.set(i, n), i > n ? this.aspect.set(i / n, 1) : this.aspect.set(1, n / i), this.inRT.setSize(e, t), this.inLowRT.setSize(i, n), this.dfRTFrom.setSize(i, n), this.dfRTTo.setSize(i, n), this.cacheFromRT.setSize(i, n), this.cacheToRT.setSize(i, n), this.outRT.setSize(e, t), (this._iterationCount = Math.ceil(Math.log(i * n))), (this.camera.left = -e / 2), (this.camera.right = e / 2), (this.camera.top = t / 2), (this.camera.bottom = -t / 2), this.camera.updateProjectionMatrix();
	}
	_swapJumpFloodRTs() {
		let e = this.dfRTFrom;
		(this.dfRTFrom = this.dfRTTo), (this.dfRTTo = e), (this.sharedUniforms.u_dfTextureFrom.value = this.dfRTFrom.texture), (this.sharedUniforms.u_dfTextureTo.value = this.dfRTTo.texture);
	}
	_swapCacheRTs() {
		let e = this.cacheFromRT;
		(this.cacheFromRT = this.cacheToRT), (this.cacheToRT = e), (this.sharedUniforms.u_cacheFromTexture.value = this.cacheFromRT.texture), (this.sharedUniforms.u_cacheToTexture.value = this.cacheToRT.texture);
	}
	update(e) {
		properties.isLightOn ? ((this.sceneIntensity = math.saturate(this.sceneIntensity + 0.6 * e)), (this.lightOnFactor = math.saturate(this.lightOnFactor + e * (this.sceneIntensity > 0.5 ? 1 : -1)))) : ((this.lightOnFactor = math.saturate(this.lightOnFactor - 0.6 * e)), (this.sceneIntensity = math.saturate(this.sceneIntensity + e * (this.lightOnFactor > 0.5 ? 1 : -1)))),
			this.ambientColor.setStyle(this.ambientColorHex),
			this.ambientColor.lerp(this.defaultColor, this.lightOnFactor),
			(this.ambientBaseOpacity = 0.1 * this.lightOnFactor),
			(this.falloffStrength = 0.5 * this.lightOnFactor),
			(this.emissiveStrength = ease.quadIn(this.lightOnFactor)),
			(this.sharedUniforms.u_sceneColorIntensity.value = ease.quadIn(this.sceneIntensity)),
			(this.sharedUniforms.u_ambientBaseOpacity.value = this.ambientBaseOpacity),
			(this.sharedUniforms.u_ambientMissHitOpacity.value = this.ambientMissHitOpacity),
			(this.sharedUniforms.u_falloffStrength.value = this.falloffStrength),
			(this.sharedUniforms.u_emissiveStrength.value = this.emissiveStrength),
			(this.rayMarchMaterial.defines.SAMPLES !== this.SAMPLE_COUNT || this.rayMarchMaterial.defines.STEP_COUNT !== this.STEP_COUNT) && ((this.rayMarchMaterial.defines.SAMPLES = this.SAMPLE_COUNT), (this.rayMarchMaterial.defines.STEP_COUNT = this.STEP_COUNT), (this.rayMarchMaterial.needsUpdate = !0));
		let t = fboHelper.renderer,
			i = fboHelper.getColorState();
		t.setClearColor(0, 0), (t.autoClear = !0), t.setRenderTarget(this.inRT), t.render(this.scene, this.camera), fboHelper.copy(this.inRT.texture, this.inLowRT), fboHelper.render(this.uvMaterial, this.dfRTTo), this.stepSize.copy(this.lowResolution);
		for (let n = 0; n < this._iterationCount; n++) this.stepSize.divideScalar(2), this._swapJumpFloodRTs(), fboHelper.render(this.jumpFloodMaterial, this.dfRTTo);
		this._swapJumpFloodRTs(), (this.sharedUniforms.u_minStepSize.value = this.minStepSize / this.lowResolution.length()), fboHelper.render(this.rayMarchMaterial, this.cacheToRT);
		for (let n = 0; n < this.paddingPassCount; n++) this._swapCacheRTs(), fboHelper.render(this.paddingMaterial, this.cacheToRT);
		this._swapCacheRTs(), fboHelper.setColorState(i);
	}
}
const gi2d = new GI2D();
class HomeVisual {
	container = new Object3D();
	logoMesh;
	logoTexture = null;
	preInit() {
		this.meshes = [];
		const e = new CylinderGeometry(5, 5, 300, 64),
			t = ['#042940', '#005C53', '#9FC131', '#DBF227', '#D6D58E'];
		for (let i = 0; i < 32; i++) {
			const n = new Mesh(e, new MeshBasicMaterial({ color: new Color(t[i % t.length]) }));
			(n.scale.y = 0.3 + Math.random() * 1.5), (this.meshes[i] = n), this.container.add(n);
		}
		this.logoTexture = properties.loader.add(settings.TEXTURE_PATH + 'akari_logo.png', { type: 'texture' }).content;
	}
	init() {
		const { width: e, height: t } = this.logoTexture.source.data;
		(this.logoMesh = new Mesh(
			new PlaneGeometry(e * 75e-5, t * 75e-5),
			new ShaderMaterial({
				vertexShader: `
				varying vec2 v_uv;
				void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					v_uv = uv;
				}
			`,
				fragmentShader: `
				uniform sampler2D u_map;
				uniform vec3 u_color;
				varying vec2 v_uv;

				void main () {
					gl_FragColor = vec4(u_color, texture2D(u_map, v_uv).a);
				}
				`,
				uniforms: { u_map: { value: this.logoTexture }, u_color: { value: new Color('#0d0d0d') } },
				depthTest: !1,
				transparent: !0,
			}),
		)),
			(this.logoMesh.renderOrder = 1),
			this.container.add(this.logoMesh);
	}
	resize(e, t) {
		this.logoMesh && this.logoMesh.scale.set(e / 2, e / 2, 1);
	}
	update(e) {
		for (let t = 0; t < 32; t++) {
			let i = this.meshes[t];
			i._r1 || ((i._r1 = Math.random()), (i._r2 = Math.random()), (i._r3 = Math.random()), (i._r4 = Math.random())), (i.position.x = ((t % 32) / (32 - 1) - 0.5) * properties.width), (i.position.y = (math.fract(i._r2 - properties.time * (i._r3 * 0.1 + 0.1)) - 0.5) * properties.height * 1.5);
		}
	}
}
const home = new HomeVisual(),
	vert$4 = `#define GLSLIFY 1
uniform float u_hitFactor;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
#define PI2 6.283185307179586
#define PI 3.141592653589793
void main(){vec3 pos=position;pos.xy*=1.0+0.09*u_hitFactor;
#ifdef IS_COMPUTER
float repulsionDir=-1.0;
#else
float repulsionDir=1.0;
#endif
pos.x+=repulsionDir*0.07*u_hitFactor*cos(u_hitFactor*1.2*PI*(pos.y));vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;}`,
	frag$4 = `#define GLSLIFY 1
uniform vec3 u_color;uniform float u_hitFactor;uniform vec2 u_resolution;varying vec2 v_uv;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
float smoothedge(float v){return smoothstep(0.0,1.0/u_resolution.x,v);}float capsule(vec2 p,vec2 a,vec2 b,float r){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-ba*h)-r;}void main(){float mask=1.0-smoothedge(capsule(2.0*vec2(1.0,10.0)*(v_uv-0.5),vec2(0.0,9.0),vec2(0.0,-9.0),0.9));
#ifdef IS_COMPUTER
vec3 color=u_color+mix(0.0,0.4+0.4*u_hitFactor,pow(1.0-v_uv.x,2.0));
#else
vec3 color=u_color+mix(0.0,0.2+0.6*u_hitFactor,pow(v_uv.x,2.0));
#endif
if(mask<0.5)discard;gl_FragColor=vec4(color,1.0);}`,
	DIRECTION = { IDLE: 0, UP: 1, DOWN: 2 },
	KEY_CODES = { UP: ['ArrowUp', 'w', 'W'], DOWN: ['ArrowDown', 's', 'S'], LEFT: ['ArrowLeft', 'a', 'A'], RIGHT: ['ArrowRight', 'd', 'D'] },
	CONTROLLER_WIDTH = 30,
	CONTROLLER_HEIGHT = 300,
	HALF_CONTROLLER_HEIGHT = CONTROLLER_HEIGHT * 0.5,
	VELOCITY_DECAY$1 = 0.9,
	VELOCITY_SCALE$2 = 4e3;
let PlayerController$1 = class {
	container = new Object3D();
	geometry = null;
	material = null;
	mesh = null;
	direction = DIRECTION.IDLE;
	velocity = 0;
	currentPosition = new Vector2();
	hitFactor = 0;
	constructor() {}
	preInit() {}
	init() {
		document.addEventListener('keydown', (e) => {
			const { isVertical: t } = properties.pong;
			if (t) {
				if (KEY_CODES.RIGHT.includes(e.key)) {
					this.direction = DIRECTION.UP;
					return;
				}
				if (KEY_CODES.LEFT.includes(e.key)) {
					this.direction = DIRECTION.DOWN;
					return;
				}
			} else {
				if (KEY_CODES.UP.includes(e.key)) {
					this.direction = DIRECTION.UP;
					return;
				}
				if (KEY_CODES.DOWN.includes(e.key)) {
					this.direction = DIRECTION.DOWN;
					return;
				}
			}
			this.direction = DIRECTION.IDLE;
		}),
			document.addEventListener('keyup', () => {
				this.direction = DIRECTION.IDLE;
			}),
			(this.geometry = new PlaneGeometry(1, 1, 1, 16)),
			(this.material = new ShaderMaterial({ vertexShader: vert$4, fragmentShader: frag$4, uniforms: { u_time: properties.sharedUniforms.u_time, u_resolution: properties.sharedUniforms.u_resolution, u_color: { value: new Color() }, u_hitFactor: { value: 0 } } })),
			(this.mesh = new Mesh(this.geometry, this.material)),
			this.mesh.scale.set(CONTROLLER_WIDTH, CONTROLLER_HEIGHT, 1),
			this.container.add(this.mesh);
	}
	ballHitted() {
		this.hitFactor = 1;
	}
	resize() {}
	update(e) {
		if (!this.mesh) return;
		const { isVertical: t } = properties.pong,
			{ top: i, bottom: n, left: r, right: o } = properties.playableArea,
			a = t ? o : i,
			c = t ? r : n,
			l = this.direction === DIRECTION.IDLE;
		if (((this.currentPosition.x = (t ? n : r) + HALF_CONTROLLER_HEIGHT * (t ? 0.5 : 1)), (this.velocity *= VELOCITY_DECAY$1), settings.DISABLE_PLAYER_INPUT)) {
			const u = this.currentPosition.y < ball.currentPosition.y;
			this.velocity += VELOCITY_SCALE$2 * e * (u ? 1 : -1);
		} else {
			const u = this.direction === DIRECTION.UP;
			this.velocity += VELOCITY_SCALE$2 * e * (u ? 1 : -1) * (l ? 0 : 1);
		}
		(this.currentPosition.y += this.velocity * e), this.currentPosition.y + HALF_CONTROLLER_HEIGHT > a && ((this.currentPosition.y -= this.currentPosition.y + HALF_CONTROLLER_HEIGHT - a), (this.velocity *= -1)), this.currentPosition.y - HALF_CONTROLLER_HEIGHT < c && ((this.currentPosition.y -= this.currentPosition.y - HALF_CONTROLLER_HEIGHT - c), (this.velocity *= -1)), t ? ((this.mesh.position.x = this.currentPosition.y), (this.mesh.position.y = this.currentPosition.x), (this.mesh.rotation.z = 0.5 * Math.PI)) : ((this.mesh.position.x = this.currentPosition.x), (this.mesh.position.y = this.currentPosition.y), (this.mesh.rotation.z = 0)), (this.hitFactor = Math.max(0, this.hitFactor - e * 2)), (this.material.uniforms.u_hitFactor.value = ease.cubicInOut(this.hitFactor)), this.material.uniforms.u_color.value.set(properties.pong.PLAYER_COLOR);
	}
};
const playerController = new PlayerController$1(),
	VELOCITY_DECAY = 0.95,
	VELOCITY_SCALE$1 = 2e3;
class PlayerController {
	container = new Object3D();
	geometry = null;
	material = null;
	mesh = null;
	velocity = 0;
	reactivness = 1;
	currentPosition = new Vector2();
	hitFactor = 0;
	constructor() {}
	preInit() {}
	init() {
		(this.geometry = new PlaneGeometry(1, 1, 1, 16)), (this.material = new ShaderMaterial({ vertexShader: vert$4, fragmentShader: frag$4, uniforms: { u_time: properties.sharedUniforms.u_time, u_resolution: properties.sharedUniforms.u_resolution, u_color: { value: new Color() }, u_hitFactor: { value: 0 } } })), (this.material.defines.IS_COMPUTER = !0), (this.mesh = new Mesh(this.geometry, this.material)), this.mesh.scale.set(CONTROLLER_WIDTH, CONTROLLER_HEIGHT, 1), this.container.add(this.mesh);
	}
	resize() {}
	ballHitted() {
		(this.reactivness = 0), (this.hitFactor = 1);
	}
	update(e) {
		if (!this.mesh) return;
		this.reactivness = math.saturate(this.reactivness + e);
		const { isVertical: t } = properties.pong,
			{ top: i, bottom: n, left: r, right: o } = properties.playableArea,
			a = t ? o : i,
			c = t ? r : n;
		(this.currentPosition.x = (t ? i : o) - HALF_CONTROLLER_HEIGHT * (t ? 0.5 : 1)), (this.velocity *= VELOCITY_DECAY);
		const l = this.currentPosition.y < ball.currentPosition.y;
		this.velocity += this.reactivness * VELOCITY_SCALE$1 * e * (l ? 1 : -1);
		const u = properties.pong.isGameStarted && !properties.pong.isGameFinished;
		(this.velocity *= u ? 1 : 0), (this.currentPosition.y += this.velocity * e), this.currentPosition.y + HALF_CONTROLLER_HEIGHT > a && ((this.currentPosition.y -= this.currentPosition.y + HALF_CONTROLLER_HEIGHT - a), (this.velocity *= -1)), this.currentPosition.y - HALF_CONTROLLER_HEIGHT < c && ((this.currentPosition.y -= this.currentPosition.y - HALF_CONTROLLER_HEIGHT - c), (this.velocity *= -1)), t ? ((this.mesh.position.x = this.currentPosition.y), (this.mesh.position.y = this.currentPosition.x), (this.mesh.rotation.z = 0.5 * Math.PI)) : ((this.mesh.position.x = this.currentPosition.x), (this.mesh.position.y = this.currentPosition.y), (this.mesh.rotation.z = 0)), (this.hitFactor = Math.max(0, this.hitFactor - e)), (this.material.uniforms.u_hitFactor.value = ease.cubicInOut(this.hitFactor)), this.material.uniforms.u_color.value.set(properties.pong.COMPUTER_COLOR);
	}
}
const computerController = new PlayerController(),
	vert$3 = `#define GLSLIFY 1
uniform vec2 u_direction;uniform float u_velocityFactor;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
#define PI2 6.283185307179586
void main(){vec3 pos=position;vec2 toDir=normalize(position.xy)-u_direction;pos.x*=1.0+0.05*u_velocityFactor*max(-pos.x,0.0);vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;}`,
	frag$3 = `#define GLSLIFY 1
uniform vec3 u_color;varying vec2 v_uv;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
void main(){vec3 color=u_color+mix(0.2,0.,pow(length(2.0*(v_uv-0.5)),2.));gl_FragColor=vec4(color,1.0);}`;
class ScoresUI {
	opacity = 0;
	domContainer;
	domPlayerScore;
	domComputerScore;
	isActive = !1;
	hasStarted = !1;
	scoresNeedUpdate = !1;
	constructor() {}
	init() {
		(this.domContainer = document.getElementById('pong__scores')), (this.domPlayerScore = document.getElementById('pong__scores__player')), (this.domComputerScore = document.getElementById('pong__scores__computer')), (this.hasStarted = !0);
	}
	show() {
		this.isActive = !0;
	}
	hide() {
		this.isActive = !1;
	}
	resize(e, t) {
		if (!this.hasStarted) return;
		const { isVertical: i } = properties.pong;
		i ? this.domContainer.classList.add('vertical') : this.domContainer.classList.remove('vertical');
	}
	updateScores() {
		this.scoresNeedUpdate = !0;
	}
	update(e) {
		this.hasStarted && ((this.isActive = properties.pong.isGameStarted && !properties.pong.isGameFinished), (this.opacity = (1 - ball.activeRatio) * math.saturate(this.opacity + e * (this.isActive ? 1 : -1))), (this.domContainer.style.display = this.opacity > 0 ? 'flex' : 'none'), (this.domContainer.style.opacity = this.opacity), this.scoresNeedUpdate && ball.activeRatio > 0 && ((this.scoresNeedUpdate = !1), (this.domPlayerScore.innerHTML = properties.pong.playerScore), (this.domComputerScore.innerHTML = properties.pong.computerScore)));
	}
}
const scores$1 = new ScoresUI(),
	RADIUS = 30,
	VELOCITY_SCALE = 1e3,
	INITIAL_MATCH_WAIT_TIME = 2,
	IDLE_COLOR = '#FFFFFF',
	_vPlayer = new Vector2(),
	_vComputer = new Vector2(),
	_vBall = new Vector2();
class Ball {
	container = new Object3D();
	geometry = null;
	material = null;
	mesh = null;
	direction = new Vector2();
	velocity = new Vector2();
	currentPosition = new Vector2();
	waitTime = INITIAL_MATCH_WAIT_TIME;
	isStarted = !1;
	lastHitTime = 0;
	strength = 1;
	isIdle = !0;
	activeRatio = 0;
	constructor() {}
	preInit() {
		(this.geometry = new CircleGeometry(RADIUS, 32, 1)), (this.material = new ShaderMaterial({ vertexShader: vert$3, fragmentShader: frag$3, uniforms: { u_time: properties.sharedUniforms.u_time, u_color: { value: new Color() }, u_direction: { value: new Vector2() }, u_velocityFactor: { value: 0 } } })), (this.mesh = new Mesh(this.geometry, this.material)), this.container.add(this.mesh);
	}
	init() {
		this.reset();
	}
	resize() {}
	reset() {
		const { lastOneToScore: e, isVertical: t } = properties.pong,
			{ top: i, bottom: n } = properties.playableArea;
		this.currentPosition.set(0, 0.5 * (i + n)), e === -1 ? ((this.velocity.x = t ? 0 : Math.random() * 2 - 1), (this.velocity.y = t ? Math.random() * 2 - 1 : 0)) : e === 0 ? ((this.velocity.x = t ? 0 : 1), (this.velocity.y = t ? 1 : 0)) : e === 1 && ((this.velocity.x = t ? 0 : -1), (this.velocity.y = t ? -1 : 0)), this.velocity.normalize(), (this.waitTime = INITIAL_MATCH_WAIT_TIME), (this.lastHitTime = 0), (this.strength = 1), this.material.uniforms.u_color.value.set(IDLE_COLOR), (properties.pong.activePlayer = 0), (this.isIdle = !0);
	}
	checkHorizontalWalls() {
		const { isVertical: e } = properties.pong,
			{ top: t, bottom: i, left: n, right: r } = properties.playableArea;
		e ? (this.currentPosition.x + RADIUS > r && ((this.currentPosition.x -= this.currentPosition.x + RADIUS - r), (this.velocity.x *= -1)), this.currentPosition.x - RADIUS < n && ((this.currentPosition.x -= this.currentPosition.x - RADIUS - n), (this.velocity.x *= -1))) : (this.currentPosition.y + RADIUS > t && ((this.currentPosition.y -= this.currentPosition.y + RADIUS - t), (this.velocity.y *= -1)), this.currentPosition.y - RADIUS < i && ((this.currentPosition.y -= this.currentPosition.y - RADIUS - i), (this.velocity.y *= -1)));
	}
	checkGoalWalls() {
		const { isVertical: e } = properties.pong,
			{ top: t, bottom: i, left: n, right: r } = properties.playableArea;
		let o = this.currentPosition.x + RADIUS > r,
			a = this.currentPosition.x - RADIUS < n;
		if ((e && ((o = this.currentPosition.y + RADIUS > t), (a = this.currentPosition.y - RADIUS < i)), o || a)) {
			this.setGoalAnimationTime(), this.reset(), (properties.pong.playerScore += o ? 1 : 0), (properties.pong.computerScore += a ? 1 : 0), (properties.pong.lastOneToScore = o ? 0 : 1);
			const l = properties.pong.playerScore === 10,
				u = properties.pong.computerScore === 10;
			l || u ? ((properties.pong.winner = l ? 0 : 1), (properties.pong.isGameFinished = !0), (properties.pong.showResult = !0)) : scores$1.updateScores();
		}
	}
	setGoalAnimationTime() {
		properties.pong.goalAnimationTime = 2;
	}
	updateVelocityOnHit(e = 0) {
		const { isVertical: t } = properties.pong;
		t ? ((this.velocity.x += e), (this.velocity.y *= -1)) : ((this.velocity.x *= -1), (this.velocity.y += e)), this.velocity.normalize(), (this.strength += 0.05), (this.strength = Math.min(2, this.strength)), this.velocity.multiplyScalar(this.strength), (this.lastHitTime = 0);
	}
	checkPlayerCollision() {
		const { isVertical: e } = properties.pong;
		if ((_vPlayer.set(playerController.currentPosition.x, playerController.currentPosition.y), _vBall.set(this.currentPosition.x, this.currentPosition.y), e && _vBall.set(this.currentPosition.y, this.currentPosition.x), _vBall.x - RADIUS < _vPlayer.x && _vBall.y - RADIUS < _vPlayer.y + HALF_CONTROLLER_HEIGHT && _vBall.y - RADIUS > _vPlayer.y - HALF_CONTROLLER_HEIGHT)) {
			_vBall.x -= _vBall.x - RADIUS - _vPlayer.x;
			const t = (2 * (_vBall.y - _vPlayer.y)) / HALF_CONTROLLER_HEIGHT;
			this.updateVelocityOnHit(t), playerController.ballHitted(), this.material.uniforms.u_color.value.set(properties.pong.PLAYER_COLOR), (properties.pong.activePlayer = -1), (this.isIdle = !1);
		}
	}
	checkComputerCollision() {
		const { isVertical: e } = properties.pong;
		if ((_vComputer.set(computerController.currentPosition.x, computerController.currentPosition.y), _vBall.set(this.currentPosition.x, this.currentPosition.y), e && _vBall.set(this.currentPosition.y, this.currentPosition.x), _vBall.x + RADIUS > _vComputer.x && _vBall.y - RADIUS < _vComputer.y + HALF_CONTROLLER_HEIGHT && _vBall.y - RADIUS > _vComputer.y - HALF_CONTROLLER_HEIGHT)) {
			_vBall.x -= _vBall.x + RADIUS - _vComputer.x;
			const t = (2 * (_vBall.y - _vComputer.y)) / HALF_CONTROLLER_HEIGHT;
			this.updateVelocityOnHit(t), computerController.ballHitted(), this.material.uniforms.u_color.value.set(properties.pong.COMPUTER_COLOR), (properties.pong.activePlayer = 1), (this.isIdle = !1);
		}
	}
	update(e) {
		if (!this.mesh || (this.mesh.scale.setScalar(0), !properties.pong.isGameStarted) || properties.pong.isGameFinished) return;
		(this.lastHitTime += e), (this.waitTime -= e), (this.isStarted = this.waitTime <= 0), properties.pong.isFirstRound && this.isStarted && (properties.pong.isFirstRound = !1), (this.activeRatio = math.saturate(this.waitTime / INITIAL_MATCH_WAIT_TIME)), this.mesh.scale.setScalar(math.fit(this.activeRatio, 0.5, 0, 0, 1, ease.cubicInOut)), (properties.pong.goalAnimationTime = Math.max(0, properties.pong.goalAnimationTime - e * 2)), this.lastHitTime > 10 && this.isIdle && this.reset(), this.isStarted && (this.currentPosition.addScaledVector(this.velocity, VELOCITY_SCALE * e), this.checkHorizontalWalls(), this.checkGoalWalls(), this.checkPlayerCollision(), this.checkComputerCollision(), this.velocity.clampLength(0, 2)), this.direction.copy(this.currentPosition), this.direction.sub(this.mesh.position), this.direction.normalize();
		const t = this.direction.angle();
		(this.mesh.rotation.z = t), (this.mesh.position.x = this.currentPosition.x), (this.mesh.position.y = this.currentPosition.y), (this.mesh.material.uniforms.u_velocityFactor.value = Math.max(0, this.velocity.length() - 1)), this.mesh.material.uniforms.u_direction.value.copy(this.direction), (properties.pong.isBallInIdleState = this.isIdle);
	}
}
const ball = new Ball(),
	particlesSim$1 = `#define GLSLIFY 1
uniform sampler2D u_defaultPositionTexture;uniform sampler2D u_positionTexture;uniform float u_timeScale;uniform float u_time;uniform vec2 u_ballPosition;uniform float u_isBallReady;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}float permute(float x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#define F4 0.309016994374947451
vec4 simplexNoiseDerivatives(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 values0=vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2));vec2 values1=vec2(dot(p3,x3),dot(p4,x4));vec3 m0=max(0.5-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.5-vec2(dot(x3,x3),dot(x4,x4)),0.0);vec3 temp0=-6.0*m0*m0*values0;vec2 temp1=-6.0*m1*m1*values1;vec3 mmm0=m0*m0*m0;vec2 mmm1=m1*m1*m1;float dx=temp0[0]*x0.x+temp0[1]*x1.x+temp0[2]*x2.x+temp1[0]*x3.x+temp1[1]*x4.x+mmm0[0]*p0.x+mmm0[1]*p1.x+mmm0[2]*p2.x+mmm1[0]*p3.x+mmm1[1]*p4.x;float dy=temp0[0]*x0.y+temp0[1]*x1.y+temp0[2]*x2.y+temp1[0]*x3.y+temp1[1]*x4.y+mmm0[0]*p0.y+mmm0[1]*p1.y+mmm0[2]*p2.y+mmm1[0]*p3.y+mmm1[1]*p4.y;float dz=temp0[0]*x0.z+temp0[1]*x1.z+temp0[2]*x2.z+temp1[0]*x3.z+temp1[1]*x4.z+mmm0[0]*p0.z+mmm0[1]*p1.z+mmm0[2]*p2.z+mmm1[0]*p3.z+mmm1[1]*p4.z;float dw=temp0[0]*x0.w+temp0[1]*x1.w+temp0[2]*x2.w+temp1[0]*x3.w+temp1[1]*x4.w+mmm0[0]*p0.w+mmm0[1]*p1.w+mmm0[2]*p2.w+mmm1[0]*p3.w+mmm1[1]*p4.w;return vec4(dx,dy,dz,dw)*49.0;}vec3 curl(in vec3 p,in float noiseTime,in float persistence){vec4 xNoisePotentialDerivatives=vec4(0.0);vec4 yNoisePotentialDerivatives=vec4(0.0);vec4 zNoisePotentialDerivatives=vec4(0.0);for(int i=0;i<2;++i){float twoPowI=pow(2.0,float(i));float scale=0.5*twoPowI*pow(persistence,float(i));xNoisePotentialDerivatives+=simplexNoiseDerivatives(vec4(p*twoPowI,noiseTime))*scale;yNoisePotentialDerivatives+=simplexNoiseDerivatives(vec4((p+vec3(123.4,129845.6,-1239.1))*twoPowI,noiseTime))*scale;zNoisePotentialDerivatives+=simplexNoiseDerivatives(vec4((p+vec3(-9519.0,9051.0,-123.0))*twoPowI,noiseTime))*scale;}return vec3(zNoisePotentialDerivatives[1]-yNoisePotentialDerivatives[2],xNoisePotentialDerivatives[2]-zNoisePotentialDerivatives[0],yNoisePotentialDerivatives[0]-xNoisePotentialDerivatives[1]);}void main(){vec4 positionLife=texture2D(u_positionTexture,v_uv);positionLife.w-=u_timeScale*0.3;if(positionLife.w<0.0){positionLife.xy=texture2D(u_defaultPositionTexture,v_uv).xy;positionLife.w+=1.0;}else{positionLife.xy+=0.01*curl(positionLife.xyz*0.9,u_time,.001).xy*u_timeScale;}positionLife.z=0.0;vec2 toBallDir=normalize(u_ballPosition/2000.0-positionLife.xy);float distFromBall=pow(1.0-saturate(distance(positionLife.xy,u_ballPosition/2000.0+0.05*toBallDir)),32.0);positionLife.xy-=0.05*u_isBallReady*distFromBall*toBallDir;gl_FragColor=positionLife;}`,
	colorSim = `#define GLSLIFY 1
uniform sampler2D u_positionTexture;uniform sampler2D u_colorTexture;uniform vec2 u_ballPosition;uniform float u_activePlayerValue;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
void main(){vec4 positionLife=texture2D(u_positionTexture,v_uv);vec4 color=texture2D(u_colorTexture,v_uv);float distFromBall=pow(1.0-saturate(distance(positionLife.xy,u_ballPosition/2000.0)),50.0);color*=0.98;if(u_activePlayerValue<-0.5){color.x+=distFromBall;}else if(u_activePlayerValue>0.5){color.y+=distFromBall;}else{color.z+=distFromBall;}color.xy=clamp(color.xy,0.0,3.0);color.z=saturate(color.z);gl_FragColor=color;}`,
	PARTICLE_TEXTURE_WIDTH = 46,
	PARTICLE_TEXTURE_HEIGHT = 46,
	MAX_PARTICLE_COUNT = PARTICLE_TEXTURE_WIDTH * PARTICLE_TEXTURE_HEIGHT;
class ParticlesSim {
	curlStrength = 0.8;
	curlNoiseScale = 3;
	pushStrength = 3;
	pushCycle = 1;
	twistStrength = 4;
	twistCycle = 1;
	speed = 1;
	seed = 0;
	sharedUniforms = { u_prevPositionTexture: { value: null }, u_currPositionTexture: { value: null }, u_currColorTexture: { value: null }, u_prevColorTexture: { value: null }, u_simTexelSize: { value: new Vector2() }, u_timeScale: { value: 1 }, u_time: { value: 0 }, u_ballPosition: { value: new Vector2() }, u_isBallReady: { value: 0 }, u_activePlayerValue: { value: 0 } };
	prevPositionRenderTarget = null;
	currPositionRenderTarget = null;
	defaultPositionTexture = null;
	defaultPositions = null;
	positionMaterial = null;
	constructor() {}
	preInit() {}
	init() {
		(this.defaultPositions = new Float32Array(MAX_PARTICLE_COUNT * 4)),
			(this.defaultPositionTexture = new DataTexture(this.defaultPositions, PARTICLE_TEXTURE_WIDTH, PARTICLE_TEXTURE_HEIGHT, RGBAFormat, settings.DATA_FLOAT_TYPE, UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, NearestFilter, NearestFilter)),
			(this.positionMaterial = new RawShaderMaterial({ uniforms: { u_defaultPositionTexture: { value: this.defaultPositionTexture }, u_positionTexture: this.sharedUniforms.u_prevPositionTexture, u_timeScale: this.sharedUniforms.u_timeScale, u_time: this.sharedUniforms.u_time, u_ballPosition: this.sharedUniforms.u_ballPosition, u_isBallReady: this.sharedUniforms.u_isBallReady, u_activePlayerValue: this.sharedUniforms.u_activePlayerValue }, vertexShader: fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + particlesSim$1 })),
			(this.colorMaterial = new RawShaderMaterial({ uniforms: { u_positionTexture: this.sharedUniforms.u_prevPositionTexture, u_colorTexture: this.sharedUniforms.u_prevColorTexture, u_ballPosition: this.sharedUniforms.u_ballPosition, u_activePlayerValue: this.sharedUniforms.u_activePlayerValue }, vertexShader: fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + colorSim })),
			this.sharedUniforms.u_simTexelSize.value.set(1 / PARTICLE_TEXTURE_WIDTH, 1 / PARTICLE_TEXTURE_HEIGHT),
			(this.prevPositionRenderTarget = fboHelper.createRenderTarget(PARTICLE_TEXTURE_WIDTH, PARTICLE_TEXTURE_HEIGHT, !0, !0)),
			(this.currPositionRenderTarget = fboHelper.createRenderTarget(PARTICLE_TEXTURE_WIDTH, PARTICLE_TEXTURE_HEIGHT, !0, !0)),
			(this.prevColorRenderTarget = fboHelper.createRenderTarget(PARTICLE_TEXTURE_WIDTH, PARTICLE_TEXTURE_HEIGHT, !0, !0)),
			(this.currColorRenderTarget = fboHelper.createRenderTarget(PARTICLE_TEXTURE_WIDTH, PARTICLE_TEXTURE_HEIGHT, !0, !0)),
			this.setDefaultPosition(),
			fboHelper.copy(this.defaultPositionTexture, this.prevPositionRenderTarget),
			fboHelper.copy(this.defaultPositionTexture, this.currPositionRenderTarget);
	}
	resize(e, t) {
		this.setDefaultPosition();
	}
	setDefaultPosition() {
		const { width: e, height: t } = properties,
			{ isVertical: i } = properties.pong,
			n = e > t ? e / t : 1,
			r = e > t ? 1 : t / e;
		for (let o = 0, a = 0; o < MAX_PARTICLE_COUNT; o++) {
			const c = o % 2 === 0;
			i ? ((this.defaultPositions[a + 0] = 0.7 * r * (Math.random() - 0.5) - 0.025), (this.defaultPositions[a + 1] = 0.5 * n * (0.05 + 0.5 * Math.random()) * (c ? -1 : 1))) : ((this.defaultPositions[a + 0] = 0.5 * n * (0.05 + 0.5 * Math.random()) * (c ? -1 : 1)), (this.defaultPositions[a + 1] = 0.7 * r * (Math.random() - 0.5) - 0.025)), (this.defaultPositions[a + 2] = 0), (this.defaultPositions[a + 3] = o / MAX_PARTICLE_COUNT), (a += 4);
		}
		this.defaultPositionTexture.needsUpdate = !0;
	}
	update(e) {
		(this.sharedUniforms.u_timeScale.value = e), (this.sharedUniforms.u_time.value += e);
		let t;
		(t = this.prevPositionRenderTarget), (this.prevPositionRenderTarget = this.currPositionRenderTarget), (this.currPositionRenderTarget = t), (t = this.prevColorRenderTarget), (this.prevColorRenderTarget = this.currColorRenderTarget), (this.currColorRenderTarget = t), (this.sharedUniforms.u_prevPositionTexture.value = this.prevPositionRenderTarget.texture), (this.sharedUniforms.u_currPositionTexture.value = this.currPositionRenderTarget.texture), (this.sharedUniforms.u_prevColorTexture.value = this.prevColorRenderTarget.texture), (this.sharedUniforms.u_currColorTexture.value = this.currColorRenderTarget.texture), this.sharedUniforms.u_ballPosition.value.copy(ball.currentPosition), (this.sharedUniforms.u_isBallReady.value = ball.isStarted ? 1 : 0), (this.sharedUniforms.u_activePlayerValue.value = properties.pong.activePlayer), fboHelper.render(this.positionMaterial, this.currPositionRenderTarget), fboHelper.render(this.colorMaterial, this.currColorRenderTarget);
	}
}
const particlesSim = new ParticlesSim(),
	particlesVert = `#define GLSLIFY 1
attribute vec2 instanceUv;attribute vec4 instanceRandom;uniform sampler2D u_currPositionTexture;uniform sampler2D u_colorTexture;uniform float u_size;varying vec2 v_uv;varying vec3 v_colorFactors;varying vec3 v_worldPosition;
#define saturate( a ) clamp( a, 0.0, 1.0 )
void main(){vec4 positionLife=texture2D(u_currPositionTexture,instanceUv);float size=u_size*smoothstep(0.5,0.45,abs(positionLife.w-0.5));vec3 pos=position;pos*=size*(1.0+16.0*instanceRandom.x*instanceRandom.y);vec3 norm=normal;vec3 instancePosition=2000.0*positionLife.xyz;pos+=instancePosition;pos.z=0.0;vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;v_colorFactors=texture2D(u_colorTexture,instanceUv).xyz;vec4 worldPosition=modelMatrix*vec4(pos,1.0);v_worldPosition=worldPosition.xyz;}`,
	particlesFrag = `#define GLSLIFY 1
uniform vec2 u_resolution;uniform vec3 u_idleColor;uniform vec3 u_playerColor;uniform vec3 u_computerColor;uniform float u_time;uniform vec4 u_topBottomLeftRight;varying vec2 v_uv;varying vec3 v_colorFactors;varying vec3 v_worldPosition;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define ENV_LODS 6.0
#define LN2 0.6931472
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
float circle(in vec2 _st,in float _radius){vec2 dist=_st-vec2(0.5);return 1.-smoothstep(_radius-(_radius*0.01),_radius+(_radius*0.01),dot(dist,dist)*4.0);}void main(){if(circle(v_uv,1.0)<0.5)discard;vec3 color=vec3(0.03);color=mix(color,u_playerColor,v_colorFactors.x);color=mix(color,u_computerColor,v_colorFactors.y);color=mix(color,u_idleColor,v_colorFactors.z);float ringUv=v_worldPosition.y/(u_topBottomLeftRight.y-u_topBottomLeftRight.x);bool isVertical=u_resolution.x<u_resolution.y;if(isVertical){ringUv=v_worldPosition.x/(u_topBottomLeftRight.w-u_topBottomLeftRight.z);}float wave=cos(-PI*0.5*u_time*sign(ringUv)+(ringUv)*2.0);float centralLineEmitter=smoothstep(0.5,1.0,saturate(wave));float centralLineEmitterLight=centralLineEmitter/(1.0+0.00015*pow(isVertical ? v_worldPosition.y : v_worldPosition.x,2.0));gl_FragColor=vec4(color+1.0*smoothstep(0.,0.6,centralLineEmitterLight),1.0);}`;
class Particles {
	mesh;
	material;
	hasInitialised = !1;
	container = new Object3D();
	preInit() {
		particlesSim.preInit(), (this.material = new ShaderMaterial({ uniforms: { u_time: properties.sharedUniforms.u_time, u_deltaTime: properties.sharedUniforms.u_deltaTime, u_resolution: properties.sharedUniforms.u_resolution, u_size: { value: 2 }, u_prevPositionTexture: particlesSim.sharedUniforms.u_prevPositionTexture, u_currPositionTexture: particlesSim.sharedUniforms.u_currPositionTexture, u_colorTexture: particlesSim.sharedUniforms.u_currColorTexture, u_ballPosition: { value: new Vector2() }, u_idleColor: { value: new Color(IDLE_COLOR) }, u_playerColor: { value: new Color() }, u_computerColor: { value: new Color() }, u_topBottomLeftRight: { value: new Vector4() } }, depthWrite: !1, depthTest: !1, vertexShader: particlesVert, fragmentShader: particlesFrag })), particlesSim.init();
	}
	init() {
		const e = new Float32Array(MAX_PARTICLE_COUNT * 2);
		for (let r = 0, o = 0; r < MAX_PARTICLE_COUNT; r++) {
			let a = ((r % PARTICLE_TEXTURE_WIDTH) + 0.5) / PARTICLE_TEXTURE_WIDTH,
				c = (~~(r / PARTICLE_TEXTURE_WIDTH) + 0.5) / PARTICLE_TEXTURE_HEIGHT;
			(e[o + 0] = a), (e[o + 1] = c), (o += 2);
		}
		const t = new Float32Array(MAX_PARTICLE_COUNT * 4);
		for (let r = 0, o = 0; r < MAX_PARTICLE_COUNT; r++) (t[o + 0] = Math.random() * 2 - 1), (t[o + 1] = Math.random() * 2 - 1), (t[o + 2] = Math.random() * 2 - 1), (t[o + 3] = Math.random() * 2 - 1), (o += 4);
		const i = new InstancedBufferGeometry(),
			n = new PlaneGeometry(1, 1);
		for (const r in n.attributes) i.setAttribute(r, n.attributes[r]);
		i.setIndex(n.getIndex()), i.setAttribute('instanceUv', new InstancedBufferAttribute(e, 2)), i.setAttribute('instanceRandom', new InstancedBufferAttribute(t, 4)), (this.mesh = new Mesh(i, this.material)), this.container.add(this.mesh), (this.hasInitialised = !0);
	}
	resize(e, t) {
		particlesSim.resize(e, t);
	}
	show() {}
	hide() {}
	update(e) {
		this.hasInitialised && (particlesSim.update(e), this.material.uniforms.u_ballPosition.value.copy(ball.currentPosition), this.material.uniforms.u_playerColor.value.set(properties.pong.PLAYER_COLOR), this.material.uniforms.u_computerColor.value.set(properties.pong.COMPUTER_COLOR), this.material.uniforms.u_topBottomLeftRight.value.set(properties.playableArea.top, properties.playableArea.bottom, properties.playableArea.left, properties.playableArea.right));
	}
}
const particles = new Particles(),
	vert$2 = `#define GLSLIFY 1
uniform float u_hitFactor;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
#define PI2 6.283185307179586
void main(){vec3 pos=position;pos.x*=1.0+0.12*u_hitFactor;vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;}`,
	frag$2 = `#define GLSLIFY 1
uniform vec3 u_color;uniform float u_hitFactor;uniform float u_time;varying vec2 v_uv;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
void main(){
#ifdef IS_CENTER
float wave=cos(-PI*0.5*u_time*sign(v_uv.y-0.5)+(v_uv.y-0.5)*2.0);vec3 color=vec3(smoothstep(0.5,1.0,saturate(wave)));float opacity=0.0;
#else
vec3 color=0.4*u_hitFactor*u_color;float opacity=1.0;
#endif
gl_FragColor=vec4(color,opacity);}`,
	THICKNESS = 20;
class Wall {
	container = new Object3D();
	geometry = null;
	material = null;
	mesh = null;
	isLeft = !1;
	isRight = !1;
	isCenter = !1;
	hitFactor = 0;
	constructor({ isLeft: e, isRight: t, isCenter: i }) {
		(this.isLeft = e), (this.isRight = t), (this.isCenter = i);
	}
	preInit() {
		(this.geometry = new PlaneGeometry(1, 1)), (this.material = new ShaderMaterial({ vertexShader: vert$2, fragmentShader: frag$2, uniforms: { u_time: properties.sharedUniforms.u_time, u_color: { value: new Color('white') }, u_hitFactor: { value: 0 } } })), (this.mesh = new Mesh(this.geometry, this.material)), this.isCenter && ((this.material.defines.IS_CENTER = !0), (this.mesh.renderOrder = -1));
	}
	init() {
		this.container.add(this.mesh);
	}
	resize(e, t) {}
	update() {
		const { left: e, right: t, top: i, bottom: n } = properties.playableArea;
		properties.pong.isVertical ? ((this.mesh.position.x = 0.5 * (e + t)), this.isLeft && ((this.mesh.position.y = n), (this.mesh.scale.x = t - e), (this.mesh.scale.y = THICKNESS)), this.isRight && ((this.mesh.position.y = i), (this.mesh.scale.x = t - e), (this.mesh.scale.y = THICKNESS)), this.isCenter && ((this.mesh.position.y = 0.5 * (i + n)), (this.mesh.scale.x = t - e), (this.mesh.scale.y = 2))) : ((this.mesh.position.y = 0.5 * (i + n)), this.isLeft && ((this.mesh.position.x = e), (this.mesh.scale.x = THICKNESS), (this.mesh.scale.y = i - n)), this.isRight && ((this.mesh.position.x = t), (this.mesh.scale.x = THICKNESS), (this.mesh.scale.y = i - n)), this.isCenter && ((this.mesh.position.x = 0), (this.mesh.scale.x = 2), (this.mesh.scale.y = i - n))), (this.container.visible = this.isCenter || this.hitFactor > 0), (this.material.uniforms.u_hitFactor.value = ease.expoIn(this.hitFactor));
	}
}
class Ring {
	container = new Object3D();
	leftWall = null;
	rightWall = null;
	centerLine = null;
	domMidRingLine;
	constructor() {}
	preInit() {
		(this.leftWall = new Wall({ isLeft: !0 })), (this.rightWall = new Wall({ isRight: !0 })), (this.centerLine = new Wall({ isCenter: !0 })), this.leftWall.preInit(), this.rightWall.preInit(), this.centerLine.preInit(), (this.domMidRingLine = document.getElementById('pong__ring-line'));
	}
	init() {
		this.leftWall.init(), this.rightWall.init(), this.centerLine.init(), this.container.add(this.leftWall.container), this.container.add(this.rightWall.container), this.container.add(this.centerLine.container);
	}
	resize(e, t) {
		this.leftWall.resize(), this.rightWall.resize(), this.centerLine.resize(), properties.pong.isVertical ? this.domMidRingLine.classList.add('vertical') : this.domMidRingLine.classList.remove('vertical');
	}
	update(e) {
		(this.leftWall.hitFactor = playerController.hitFactor), (this.rightWall.hitFactor = computerController.hitFactor), this.leftWall.update(e), this.rightWall.update(e), this.centerLine.update(e);
	}
}
const ring = new Ring(),
	vert$1 = `#define GLSLIFY 1
uniform float u_activeRatio;void main(){vec3 pos=position*u_activeRatio;vec4 mvPosition=vec4(pos,1.0);mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;}`,
	frag$1 = `#define GLSLIFY 1
uniform float u_opacity;uniform float u_activeRatio;uniform vec3 u_color;void main(){gl_FragColor.rgb=u_activeRatio*u_color;gl_FragColor.a=1.0;}`;
new Vector3();
const SCALE_FACTOR = 3e3;
class Score {
	container = new Object3D();
	material;
	mesh;
	uniforms = {};
	isRight = !1;
	constructor(e) {
		this.isRight = e;
	}
	preInit() {}
	init() {
		(this.material = new ShaderMaterial({ vertexShader: vert$1, fragmentShader: frag$1, uniforms: Object.assign(this.uniforms, scores.sharedUniforms), side: 2 })), (this.mesh = new Mesh(scores.geometries[0], this.material)), (this.mesh.renderOrder = 2), this.container.add(this.mesh);
	}
	reset() {
		this.mesh.geometries = scores.geometries[0];
	}
	resize(e, t) {}
	update(e) {
		if (!this.mesh) return;
		(this.mesh.geometry = scores.geometries[this.isRight ? properties.pong.computerScore : properties.pong.playerScore]), (this.mesh.visible = !ball.isStarted && !properties.pong.isFirstRound);
		const { top: t, bottom: i, left: n, right: r } = properties.playableArea,
			{ isVertical: o } = properties.pong;
		o ? (this.isRight ? (this.mesh.position.y = 0.4 * t) : (this.mesh.position.y = 0.4 * i), (this.mesh.position.x = 0)) : (this.isRight ? (this.mesh.position.x = 0.4 * r) : (this.mesh.position.x = 0.4 * n), (this.mesh.position.y = 0)), this.mesh.scale.setScalar(SCALE_FACTOR), o && this.mesh.scale.multiplyScalar(0.7);
	}
}
class Scores {
	container = new Object3D();
	geometries = {};
	msdfTexture;
	msdfFont;
	sharedUniforms = { u_color: { value: new Color('#fff') }, u_activeRatio: { value: 0 }, u_opacity: { value: 0 } };
	playerScore = null;
	computerScore = null;
	constructor() {
		(this.playerScore = new Score()), (this.computerScore = new Score(!0));
	}
	preInit() {
		for (let e = 0; e < 10; e++)
			properties.loader.add(settings.MODEL_PATH + 'pong/' + e + '.buf', {
				onLoad: (t) => {
					this.geometries[e] = t;
				},
			});
		this.playerScore.preInit(), this.computerScore.preInit();
	}
	init() {
		this.playerScore.init(), this.computerScore.init(), this.container.add(this.playerScore.container), this.container.add(this.computerScore.container);
	}
	resize() {
		this.playerScore.resize(), this.computerScore.resize();
	}
	update(e) {
		(this.sharedUniforms.u_activeRatio.value = ease.expoInOut(ball.activeRatio)), this.playerScore.update(e), this.computerScore.update(e);
	}
}
const scores = new Scores();
class Commands {
	opacity = 1;
	domContainer;
	domStartButton;
	isActive = !1;
	hasStarted = !1;
	constructor() {}
	init() {
		(this.domContainer = document.getElementById('pong__commands')),
			(this.domKeysWrapper = document.getElementById('pong__commands__keys')),
			(this.domStartButton = document.getElementById('pong__commands__button')),
			this.domStartButton.addEventListener('click', () => {
				this.hide();
			}),
			(this.hasStarted = !0);
	}
	show() {
		this.isActive = properties.pong.showCommands = !0;
	}
	hide() {
		this.isActive = properties.pong.showCommands = !1;
	}
	resize(e, t) {
		if (!this.hasStarted) return;
		const { isVertical: i } = properties.pong;
		i ? this.domKeysWrapper.classList.add('vertical') : this.domKeysWrapper.classList.remove('vertical');
	}
	update(e) {
		this.hasStarted && ((this.opacity = math.saturate(this.opacity + e * (this.isActive ? 1 : -1))), (this.domContainer.style.display = this.opacity > 0 ? 'block' : 'none'), (this.domContainer.style.opacity = this.opacity), this.opacity === 0 && !properties.pong.isGameStarted && !properties.pong.isGameFinished && (properties.pong.isGameStarted = !0));
	}
}
const commands = new Commands();
class Pong {
	container = new Object3D();
	domPongRing = null;
	preInit() {
		(this.domPongRing = document.getElementById('pong')), this.reset(), particles.preInit(), playerController.preInit(), computerController.preInit(), ball.preInit(), ring.preInit(), scores.preInit();
	}
	init() {
		particles.init(), playerController.init(), computerController.init(), ball.init(), ring.init(), scores.init(), this.container.add(particles.container), this.container.add(playerController.container), this.container.add(computerController.container), this.container.add(ball.container), this.container.add(ring.container), this.container.add(scores.container);
	}
	reset() {
		(properties.pong.isGameStarted = !1), (properties.pong.isGameFinished = !1), (properties.pong.isFirstRound = !0), (properties.pong.lastOneToScore = -1), (properties.pong.winner = -1), (properties.pong.playerScore = 0), (properties.pong.computerScore = 0);
		const e = properties.pong.COLORS[Math.floor(Math.random() * properties.pong.COLORS.length)];
		(properties.pong.PLAYER_COLOR = e[0]), (properties.pong.COMPUTER_COLOR = e[1]);
	}
	resize(e, t) {
		const i = t > e;
		i !== properties.pong.isVertical && ((properties.pong.isVertical = i), this.reset(), ball.reset(), commands.show()), particles.resize(e, t), playerController.resize(e, t), computerController.resize(e, t), ball.resize(e, t), ring.resize(e, t), scores.resize(e, t);
	}
	update(e) {
		particles.update(e), playerController.update(e), computerController.update(e), ball.update(e), ring.update(e), scores.update(e);
	}
}
const pong = new Pong(),
	artLinesSim$1 = `#define GLSLIFY 1
uniform sampler2D u_defaultPositionTexture;uniform sampler2D u_positionTexture;uniform float u_timeScale;uniform float u_time;uniform vec2 u_mouse;uniform vec2 u_mouseVel;uniform vec2 u_resolution;varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
#define PI2 6.283185307179586
float mymod(float x,float y){return x-y*floor(x/y);}void main(){vec4 defaultPosition=texture2D(u_defaultPositionTexture,v_uv);vec4 infoTexture=texture2D(u_positionTexture,v_uv);vec2 aspect=vec2(u_resolution.x/u_resolution.y,1.0);vec2 mouseDir=normalize(u_mouseVel);float mouseStrength=length(u_mouseVel);vec2 toMouse=u_mouse-defaultPosition.xy/(0.5*u_resolution);float velocitySign=sign(dot(mouseDir,normalize(toMouse)));float distFromMouse=saturate(1.0-length(toMouse));distFromMouse=pow(distFromMouse,5.0);distFromMouse=smoothstep(0.,0.7,distFromMouse);float rotationVel=0.98*infoTexture.g+10.0*mouseStrength*velocitySign*distFromMouse;float rotation=infoTexture.r+rotationVel*u_timeScale;infoTexture.r=rotation;infoTexture.g=rotationVel;if(abs(rotationVel)>0.01){infoTexture.b=1.0;}else{infoTexture.b*=0.99;}infoTexture.w*=0.98;infoTexture.w+=2.0*mouseStrength*distFromMouse;gl_FragColor=infoTexture;}`,
	_v2 = new Vector2();
class ArtLinesSim {
	sharedUniforms = { u_prevPositionTexture: { value: null }, u_currPositionTexture: { value: null }, u_simTexelSize: { value: new Vector2() }, u_timeScale: { value: 1 }, u_time: { value: 0 }, u_mouse: { value: new Vector2() }, u_mouseVel: { value: new Vector2() }, u_resolution: { value: new Vector2() } };
	prevPositionRenderTarget = null;
	currPositionRenderTarget = null;
	defaultPositionTexture = null;
	defaultPositions = null;
	positionMaterial = null;
	constructor() {}
	preInit() {
		const { PARTICLE_TEXTURE_WIDTH: e, PARTICLE_TEXTURE_HEIGHT: t, MAX_PARTICLE_COUNT: i } = artLines;
		(this.defaultPositions = new Float32Array(i * 4)), (this.defaultPositionTexture = new DataTexture(this.defaultPositions, e, t, RGBAFormat, settings.DATA_FLOAT_TYPE, UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, NearestFilter, NearestFilter)), this.sharedUniforms.u_simTexelSize.value.set(1 / e, 1 / t), (this.prevPositionRenderTarget = fboHelper.createRenderTarget(e, t, !0, !0)), (this.currPositionRenderTarget = fboHelper.createRenderTarget(e, t, !0, !0)), this.setDefaultPosition();
	}
	init() {
		this.positionMaterial = new RawShaderMaterial({ uniforms: { u_defaultPositionTexture: { value: this.defaultPositionTexture }, u_positionTexture: this.sharedUniforms.u_prevPositionTexture, u_timeScale: this.sharedUniforms.u_timeScale, u_time: this.sharedUniforms.u_time, u_mouse: this.sharedUniforms.u_mouse, u_mouseVel: this.sharedUniforms.u_mouseVel, u_resolution: this.sharedUniforms.u_resolution }, vertexShader: fboHelper.vertexShader, fragmentShader: fboHelper.precisionPrefix + artLinesSim$1 });
	}
	setDefaultPosition() {
		const { PARTICLE_TEXTURE_WIDTH: e, PARTICLE_TEXTURE_HEIGHT: t, MAX_PARTICLE_COUNT: i, POSITION_SCALE: n } = artLines;
		for (let r = 0, o = 0; r < i; r++) (this.defaultPositions[o + 0] = n * ((r % e) + 0.5 - e / 2)), (this.defaultPositions[o + 1] = n * (~~(r / e) + 0.5 - t / 2)), (this.defaultPositions[o + 2] = Math.random()), (this.defaultPositions[o + 3] = Math.random() * 2 - 1), (o += 4);
		this.defaultPositionTexture.needsUpdate = !0;
	}
	update(e) {
		(this.sharedUniforms.u_timeScale.value = e), (this.sharedUniforms.u_time.value += e);
		let t;
		(t = this.prevPositionRenderTarget), (this.prevPositionRenderTarget = this.currPositionRenderTarget), (this.currPositionRenderTarget = t), (this.sharedUniforms.u_prevPositionTexture.value = this.prevPositionRenderTarget.texture), (this.sharedUniforms.u_currPositionTexture.value = this.currPositionRenderTarget.texture), _v2.copy(input.mouseXY).sub(input.prevMouseXY), this.sharedUniforms.u_mouseVel.value.copy(_v2), this.sharedUniforms.u_mouse.value.copy(input.mouseXY);
		const { left: i, right: n, top: r, bottom: o } = gi2d.camera;
		this.sharedUniforms.u_resolution.value.set(n - i, r - o), fboHelper.render(this.positionMaterial, this.currPositionRenderTarget);
	}
}
const artLinesSim = new ArtLinesSim(),
	artLinesVert = `#define GLSLIFY 1
attribute vec2 instanceUv;attribute vec4 instanceRandom;attribute vec3 instancePositionScale;uniform sampler2D u_testTexture;uniform sampler2D u_currPositionTexture;uniform float u_size;uniform float u_time;varying vec2 v_uv;varying vec2 v_uvRot;varying vec2 v_instanceUv;varying float v_test;varying vec4 v_instanceRandom;
#define saturate( a ) clamp( a, 0.0, 1.0 )
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
mat4 rotation3d(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle);float c=cos(angle);float oc=1.0-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.0,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.0,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.0,0.0,0.0,0.0,1.0);}vec2 rotate(vec2 v,float a){float s=sin(a);float c=cos(a);mat2 m=mat2(c,s,-s,c);return m*v;}void main(){vec4 infoTexture=texture2D(u_currPositionTexture,instanceUv);vec2 size=u_size*vec2(0.9,0.1);vec3 pos=position*instancePositionScale.z;pos.xy*=size;pos=(vec4(pos,1.0)*rotation3d(vec3(0.0,0.0,1.0),infoTexture.x*PI2)).xyz;vec3 norm=normal;pos.xy+=instancePositionScale.xy;pos.y-=40.0;pos.z=0.0;vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;v_uvRot=rotate(uv-0.5,infoTexture.x*PI2)+0.5;v_instanceUv=instanceUv;v_instanceRandom=instanceRandom;v_test=infoTexture.w;}`,
	artLinesFrag = `#define GLSLIFY 1
varying vec2 v_uv;varying vec2 v_instanceUv;varying vec4 v_instanceRandom;varying float v_test;varying vec2 v_uvRot;uniform sampler2D u_testTexture;uniform vec2 u_simTexelSize;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define ENV_LODS 6.0
#define LN2 0.6931472
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
void main(){vec3 color=texture2D(u_testTexture,v_instanceUv).rgb;float saturatedColorScale=saturate(v_test);float threshold=0.1+0.9*pow(saturatedColorScale,2.0);float maskFactor=(1.0-smoothstep(threshold,threshold+0.2,v_uv.x));maskFactor+=smoothstep(1.0-threshold-0.2,1.0-threshold,v_uv.x);maskFactor=saturate(maskFactor);color*=maskFactor;color*=1.0+saturatedColorScale;float power=3.0-2.0*saturatedColorScale;gl_FragColor=vec4(power*pow(color,vec3(power)),1.0);}`;
class ArtLines {
	mesh;
	material;
	hasInitialised = !1;
	container = new Object3D();
	instancePositionsScale;
	PARTICLE_TEXTURE_WIDTH = 16;
	PARTICLE_TEXTURE_HEIGHT = 16;
	MAX_PARTICLE_COUNT = 0;
	SIZE = 1;
	POSITION_SCALE = 1;
	preInit() {
		(this.MAX_PARTICLE_COUNT = this.PARTICLE_TEXTURE_WIDTH * this.PARTICLE_TEXTURE_HEIGHT), this.updateGrid(), artLinesSim.preInit(), (this.testTexture = properties.loader.add(settings.TEXTURE_PATH + 'artLinesTest.png', { type: 'texture' }).content);
	}
	init() {
		artLinesSim.init(), (this.material = new ShaderMaterial({ uniforms: { u_time: properties.sharedUniforms.u_time, u_deltaTime: properties.sharedUniforms.u_deltaTime, u_resolution: properties.sharedUniforms.u_resolution, u_size: { value: this.SIZE }, u_prevPositionTexture: artLinesSim.sharedUniforms.u_prevPositionTexture, u_currPositionTexture: artLinesSim.sharedUniforms.u_currPositionTexture, u_color: { value: new Color() }, u_testTexture: { value: this.testTexture }, u_simTexelSize: artLinesSim.sharedUniforms.u_simTexelSize }, side: 2, vertexShader: artLinesVert, fragmentShader: artLinesFrag }));
		const e = new Float32Array(this.MAX_PARTICLE_COUNT * 2);
		for (let r = 0, o = 0; r < this.MAX_PARTICLE_COUNT; r++) {
			let a = ((r % this.PARTICLE_TEXTURE_WIDTH) + 0.5) / this.PARTICLE_TEXTURE_WIDTH,
				c = (~~(r / this.PARTICLE_TEXTURE_WIDTH) + 0.5) / this.PARTICLE_TEXTURE_HEIGHT;
			(e[o + 0] = a), (e[o + 1] = c), (o += 2);
		}
		this.instancePositionsScale = new Float32Array(this.MAX_PARTICLE_COUNT * 3);
		const t = new Float32Array(this.MAX_PARTICLE_COUNT * 4);
		for (let r = 0, o = 0; r < this.MAX_PARTICLE_COUNT; r++) (t[o + 0] = Math.random() * 2 - 1), (t[o + 1] = Math.random() * 2 - 1), (t[o + 2] = Math.random() * 2 - 1), (t[o + 3] = Math.random() * 2 - 1), (o += 4);
		const i = new InstancedBufferGeometry(),
			n = new PlaneGeometry(1, 1);
		for (const r in n.attributes) i.setAttribute(r, n.attributes[r]);
		i.setIndex(n.getIndex()), i.setAttribute('instanceUv', new InstancedBufferAttribute(e, 2)), i.setAttribute('instancePositionScale', new InstancedBufferAttribute(this.instancePositionsScale, 3)), i.setAttribute('instanceRandom', new InstancedBufferAttribute(t, 4)), (this.mesh = new Mesh(i, this.material)), this.container.add(this.mesh), (this.hasInitialised = !0);
	}
	addWalls() {
		const e = new Mesh(new PlaneGeometry(1050, 10), new MeshBasicMaterial({ color: '#222', side: DoubleSide })),
			t = new Mesh(new PlaneGeometry(1050, 10), new MeshBasicMaterial({ color: '#222', side: DoubleSide })),
			i = new Mesh(new PlaneGeometry(10, 1050), new MeshBasicMaterial({ color: '#222', side: DoubleSide })),
			n = new Mesh(new PlaneGeometry(10, 1050), new MeshBasicMaterial({ color: '#222', side: DoubleSide })),
			r = new Object3D();
		(e.position.y = 520), (t.position.y = -520), (i.position.x = -520), (n.position.x = 520), (r.position.y = -50), r.add(e), r.add(t), r.add(i), r.add(n), this.container.add(r);
	}
	updateGrid() {
		const { width: e, height: t } = properties;
		(this.PARTICLE_TEXTURE_WIDTH = Math.floor(16 / Math.max(1, Math.pow(t / e, 0.5)))), (this.PARTICLE_TEXTURE_HEIGHT = Math.floor(this.MAX_PARTICLE_COUNT / this.PARTICLE_TEXTURE_WIDTH)), (this.SIZE = Math.floor((32 * 32) / this.PARTICLE_TEXTURE_HEIGHT)), (this.POSITION_SCALE = this.SIZE + 2);
	}
	resize(e, t) {
		if ((this.updateGrid(), this.instancePositionsScale)) {
			for (let i = 0, n = 0; i < this.MAX_PARTICLE_COUNT; i++) {
				(this.instancePositionsScale[n + 0] = this.POSITION_SCALE * ((i % this.PARTICLE_TEXTURE_WIDTH) + 0.5 - this.PARTICLE_TEXTURE_WIDTH / 2)), (this.instancePositionsScale[n + 1] = this.POSITION_SCALE * (~~(i / this.PARTICLE_TEXTURE_WIDTH) + 0.5 - this.PARTICLE_TEXTURE_HEIGHT / 2));
				let r = 1;
				this.PARTICLE_TEXTURE_HEIGHT > this.PARTICLE_TEXTURE_WIDTH && i >= (this.PARTICLE_TEXTURE_HEIGHT - 1) * this.PARTICLE_TEXTURE_WIDTH && (r = 0), (this.instancePositionsScale[n + 2] = r), (n += 3);
			}
			(this.instancePositionsScale.needsUpdate = !0), (this.mesh.geometry.attributes.instancePositionScale.needsUpdate = !0), artLinesSim.setDefaultPosition();
		}
	}
	show() {}
	hide() {}
	update(e) {
		this.hasInitialised && (artLinesSim.update(e), (this.material.uniforms.u_size.value = this.SIZE));
	}
}
const artLines = new ArtLines();
let random = math.getSeedRandomFn('sphereBody-25');
class SphereBody {
	position0 = new Vector2();
	velocity0 = new Vector2();
	position = new Vector2();
	velocity = new Vector2();
	radius = 1;
	mass = 1;
	volume = 1;
	density = 1;
	friction = 1;
	frictionTot = 0;
	restitution = 1;
	inertia = 0;
	constructor(e = 1, t = 1, i = 0.5, n = 0.5) {
		this.position0.set(random() - 0.5, random() - 0.5), this.position0.multiplyScalar(100), this.velocity0.copy(this.position0).multiplyScalar(-2), this.position.copy(this.position0), this.velocity.copy(this.velocity0), (this.radius = e), (this.density = t), (this.friction = i), (this.restitution = n), (this.volume = Math.PI * this.radius * 1.333333), (this.mass = this.volume * this.radius * this.radius * this.density), (this.inertia = this.mass * this.radius * this.radius * 0.25);
	}
	update(e) {
		this.position.addScaledVector(this.velocity, e), this.velocity.multiplyScalar(Math.pow(0.2, e));
	}
}
const _mouse = new Vector2(),
	_mousePrev = new Vector2(),
	_mousePushForce = new Vector2(),
	_vel = new Vector2(),
	_pos = new Vector2(),
	_v0 = new Vector2(),
	_v1 = new Vector2(),
	_p1 = new Vector2(),
	_normal = new Vector2();
class SpheresPhysics {
	MOUSE_RADIUS = 10;
	MOUSE_INFLUENCE = 0.01;
	MOUSE_PUSH_FORCE = 0.1;
	bodies = [];
	isActive = !0;
	initWorld() {
		for (let e = 0; e < SPHERES_COUNT; e++) {
			const t = spheres.spheres[e],
				{ radius: i, density: n, friction: r, restitution: o } = t,
				a = new SphereBody(i, n, r, o);
			this.bodies.push(a);
		}
	}
	update(e) {
		if (!this.isActive) return;
		const { left: t, right: i, top: n, bottom: r } = properties.playableArea;
		_mouse.set(input.mouseXY.x, input.mouseXY.y),
			(_mouse.x *= i - t),
			(_mouse.y *= n - r),
			_mousePushForce
				.copy(_mouse)
				.sub(_mousePrev)
				.multiplyScalar(this.MOUSE_PUSH_FORCE / e),
			_mousePrev.copy(_mouse);
		for (let o = 0; o < this.bodies.length; o++) {
			const a = this.bodies[o];
			_vel.copy(a.velocity), _pos.copy(a.position);
			for (let u = o + 1; u < this.bodies.length; u++) {
				const h = this.bodies[u];
				_v1.copy(h.velocity), _p1.copy(h.position), _normal.copy(_pos).sub(_p1);
				const d = _normal.length(),
					m = a.radius + h.radius;
				if (d < m) {
					const g = Math.sqrt(a.friction * h.friction, 2);
					(a.frictionTot += g), (h.frictionTot += g), _normal.normalize(), _normal.multiplyScalar(0.5 * (d - m)), _pos.sub(_normal), _p1.add(_normal), _normal.normalize();
					const p = _vel.dot(_normal),
						f = _v1.dot(_normal),
						_ = a.mass,
						T = h.mass,
						x = a.restitution,
						S = h.restitution,
						b = (_ * p + T * f - T * (p - f) * x) / (_ + T),
						E = (_ * p + T * f - _ * (f - p) * S) / (_ + T);
					_vel.addScaledVector(_normal, (b - p) / (1 + g)), _v1.addScaledVector(_normal, (E - f) / (1 + g)), h.position.copy(_p1), h.velocity.copy(_v1);
				}
			}
			_v0.copy(_pos);
			let c = _mouse.lengthSq(),
				l = _v0.dot(_mouse) / c;
			(l = _v0.sub(_v1.copy(_mouse).multiplyScalar(l)).length() - a.radius - this.MOUSE_RADIUS), 0 > l && ((spheres.spheres[o].material.uniforms.u_impulse.value = 1), _v0.copy(_pos), _v0.cross(_mouse), _v0.normalize(), _v1.copy(_mouse), _v1.cross(_v0), _v1.normalize(), _pos.sub(_v1.multiplyScalar(this.MOUSE_INFLUENCE)), _v1.multiplyScalar(-this.MOUSE_PUSH_FORCE / e), _vel.add(_v1), _vel.add(_mousePushForce)), _pos.x < t + a.radius && ((_pos.x = t + a.radius), (_vel.x *= -1)), _pos.x > i - a.radius && ((_pos.x = i - a.radius), (_vel.x *= -1)), _pos.y < r + a.radius && ((_pos.y = r + a.radius), (_vel.y *= -1)), _pos.y > n - a.radius && ((_pos.y = n - a.radius), (_vel.y *= -1)), a.position.copy(_pos), a.velocity.copy(_vel), a.update(e);
		}
	}
}
const spheresPhysics = new SpheresPhysics(),
	vert = `#define GLSLIFY 1
varying vec2 v_uv;
#define saturate( a ) clamp( a, 0.0, 1.0 )
void main(){vec3 pos=position;vec4 transformed=vec4(pos,1.0);vec4 mvPosition=modelViewMatrix*transformed;gl_Position=projectionMatrix*mvPosition;v_uv=uv;}`,
	frag = `#define GLSLIFY 1
uniform vec3 u_color;uniform float u_impulse;varying vec2 v_uv;
#define PI 3.141592653589793
#define PI2 6.283185307179586
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
void main(){vec3 color=pow(u_color,vec3(0.2+2.0*(1.0-u_impulse)));gl_FragColor=vec4(color,1.0);}`,
	SPHERES_COUNT = 200,
	COLOR_PALETTE = ['#000000', '#0F6292', '#16FF00', '#FFED00'];
class Spheres {
	hasInitialised = !1;
	container = new Object3D();
	spheres = [];
	constructor() {}
	preInit() {}
	init() {
		for (let e = 0; e < SPHERES_COUNT; e++) {
			const t = 30 * (0.2 + Math.random() * 0.8),
				i = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)],
				n = 10 * (0.2 + Math.random() * 0.8),
				r = 0.2 + Math.random() * 0.8,
				o = 0.5 + Math.random() * 0.5,
				a = new ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms: { u_color: { value: new Color(i) }, u_impulse: { value: 0 } } }),
				c = new Mesh(new CircleGeometry(t, 32, 32), a);
			this.spheres.push({ mesh: c, material: a, radius: t, density: n, friction: r, restitution: o, color: i }), this.container.add(c);
		}
		spheresPhysics.initWorld();
	}
	resize(e, t) {}
	update(e) {
		spheresPhysics.update(e);
		for (let t = 0; t < SPHERES_COUNT; t++) {
			const i = this.spheres[t],
				n = spheresPhysics.bodies[t];
			(i.mesh.position.x = n.position.x), (i.mesh.position.y = n.position.y), (i.material.uniforms.u_impulse.value *= 0.95);
		}
	}
}
const spheres = new Spheres();
class ABC {
	container = new Object3D();
	canvas = document.createElement('canvas');
	ctx = this.canvas.getContext('2d');
	texture;
	material;
	geom;
	mesh;
	COLOR_PALETTE = ['#E19898', '#A2678A', '#4D3C77', '#3F1D38'];
	SIZE = 100;
	PADDING = 100;
	HALF_SIZE = this.SIZE / 2;
	HALF_PADDING = this.PADDING / 2;
	_baseViewportWidth = 0;
	_baseViewportHeight = 0;
	time = 0;
	preInit() {
		(this._baseViewportWidth = properties.viewportWidth), (this._baseViewportHeight = properties.viewportHeight), (this.texture = new Texture(this.canvas)), (this.texture.needsUpdate = !0), (this.geom = new PlaneGeometry(properties.viewportWidth, properties.viewportHeight)), (this.material = new MeshBasicMaterial({ map: this.texture, transparent: !0 })), (this.mesh = new Mesh(this.geom, this.material)), this.container.add(this.mesh);
	}
	init() {}
	resize(e, t) {
		let i = this.canvas;
		(i.width = properties.viewportWidth * settings.DPR), (i.height = properties.viewportHeight * settings.DPR), this.texture && this.texture.dispose(), (this.texture = new Texture(this.canvas)), (this.material.map = this.texture), (this.mesh.scale.x = properties.viewportWidth / this._baseViewportWidth), (this.mesh.scale.y = properties.viewportHeight / this._baseViewportHeight), (this.texture.needsUpdate = !0);
	}
	update(e) {
		this.time += e;
		let t = this.canvas;
		this.ctx.clearRect(0, 0, t.width, t.height);
		let i = Math.floor(properties.viewportWidth / (this.SIZE + this.PADDING)),
			n = Math.floor(properties.viewportHeight / (this.SIZE + this.PADDING)),
			r = Math.floor((properties.viewportWidth - (i * this.SIZE + (i - 1) * this.PADDING)) / 2),
			o = Math.floor((properties.viewportHeight - (n * this.SIZE + (n - 1) * this.PADDING)) / 2);
		this.ctx.save(), this.ctx.scale(settings.DPR, settings.DPR);
		for (let a = 0; a < i; a++) for (let c = 0; c < n; c++) this._drawShape(a + c, a * (this.SIZE + this.PADDING) + r, c * (this.SIZE + this.PADDING) + o);
		this.ctx.restore(), (this.texture.needsUpdate = !0);
	}
	_drawShape(e, t, i) {
		let n = this.ctx;
		(n.fillStyle = this.COLOR_PALETTE[e % this.COLOR_PALETTE.length]), n.fillRect(t + Math.cos(this.time + i) * this.SIZE, i, this.SIZE, this.SIZE);
	}
}
const abc = new ABC(),
	PROJECTS = { HOME: 'home', PONG: 'pong', SQUARE_JUMP: 'squarejump', ABC: 'abc', ART_LINES: 'artlines', SPHERES: 'spheres' };
class Visuals {
	container = new Object3D();
	activeProjectID = PROJECTS.HOME;
	activeProject = home;
	cacheProject = null;
	domNavigation;
	projects = [
		{ id: PROJECTS.HOME, manager: home },
		{ id: PROJECTS.PONG, manager: pong },
		{ id: PROJECTS.ART_LINES, manager: artLines },
		{ id: PROJECTS.SPHERES, manager: spheres },
		{ id: PROJECTS.ABC, manager: abc },
	];
	preInit() {
		(this.domNavigation = document.getElementById('header')), gi2d.init(), this.projects.forEach((e) => e.manager.preInit()), properties.changeProject.add(this.updateProject.bind(this));
	}
	init() {
		this.container.add(gi2d.mesh), this.projects.forEach((e) => e.manager.init());
	}
	updateProject() {
		this.projects.forEach((e) => {
			this.container.remove(e.manager.container), gi2d.scene.remove(e.manager.container);
		}),
			(this.activeProject = this.projects.filter((e) => e.id === properties.activeProjectID)[0]?.manager),
			this.activeProject && (this.container.add(this.activeProject.container), gi2d.scene.add(this.activeProject.container));
	}
	resize(e, t) {
		gi2d.resize(e, t);
		const { left: i, right: n, top: r, bottom: o } = gi2d.camera;
		if (this.domNavigation) {
			const c = this.domNavigation.getBoundingClientRect();
			properties.playableArea.height = properties.viewportHeight - c.height;
		}
		const a = properties.playableArea.height / properties.viewportHeight;
		(properties.playableArea.left = i), (properties.playableArea.right = n), (properties.playableArea.top = r * a + o * (1 - a)), (properties.playableArea.bottom = o), this.projects.forEach((c) => c.manager.resize(e, t));
	}
	update(e) {
		this.activeProject && this.activeProject.update(e), gi2d.update(e);
	}
}
const visuals = new Visuals();
class App {
	initEngine() {
		(properties.canvas = document.getElementById('canvas')),
			(properties.isSupported = support.isSupported()),
			properties.isSupported &&
				(properties.loader.register(BufItem),
				properties.loader.register(TextureItem),
				properties.loader.register(ThreeLoaderItem),
				properties.loader.register(MSDFItem),
				(properties.renderer = new WebGLRenderer({ canvas: properties.canvas, context: properties.gl })),
				(properties.scene = new Scene()),
				(properties.camera = new PerspectiveCamera(60, 1, 0.1, 50)),
				properties.scene.add(properties.camera),
				fboHelper.init(properties.renderer, settings.RENDER_TARGET_FLOAT_TYPE),
				textureHelper.init(),
				(properties.postprocessing = new Postprocessing()),
				properties.postprocessing.init({ scene: properties.scene, camera: properties.camera }),
				blueNoise.preInit(),
				glPositionOffset.init(),
				screenPaint.init(),
				settings.USE_WEBGL2 || ((properties.smaa = new Smaa()), properties.smaa.init(), properties.smaa.setTextures(properties.loader.add(settings.TEXTURE_PATH + 'smaa-area.png', { weight: 32 }).content, properties.loader.add(settings.TEXTURE_PATH + 'smaa-search.png', { weight: 0.1 }).content), properties.postprocessing.queue.push(properties.smaa)),
				(properties.bokeh = new Bokeh()),
				properties.postprocessing.useDepthTexture && (properties.bokeh.init(), (properties.bokeh.quality = browser.isMobile ? 0 : 1), properties.postprocessing.queue.push(properties.bokeh)),
				(properties.bloom = new Bloom()),
				!properties.renderer.extensions.get('OES_texture_float_linear') && !properties.renderer.extensions.get('OES_texture_half_float_linear') && (properties.bloom.USE_HD = !1),
				properties.bloom.init(),
				properties.bloom.USE_LENS_DIRT && properties.bloom.setDirtTexture(properties.loader.add(settings.TEXTURE_PATH + 'lens_dirt.jpg', { weight: 32, type: 'texture' }).content),
				properties.postprocessing.queue.push(properties.bloom),
				(properties.screenPaintDistortion = new ScreenPaintDistortion()),
				properties.screenPaintDistortion.init({ screenPaint }),
				(properties.final = new Final()),
				properties.final.init(),
				properties.postprocessing.queue.push(properties.final),
				settings.UP_SCALE > 1 && ((properties.upscaler = new Fsr()), properties.upscaler.init(), properties.postprocessing.queue.push(properties.upscaler)));
	}
	preInit() {
		cameraControls.preInit(), visuals.preInit(), imageExporter.preInit();
	}
	init() {
		properties.smaa && properties.smaa.updateTextures(), cameraControls.init(), visuals.init(), imageExporter.init(), properties.scene.add(visuals.container), settings.IS_DEV === !1 && console.log('%c Created by Lusion: https://lusion.co', 'border:2px solid gray; padding:5px; font-family:monospace; font-size:11px;');
	}
	start() {}
	resize(e, t) {
		properties.renderer.setSize(e, t), (properties.canvas.style.width = `${properties.viewportWidth}px`), (properties.canvas.style.height = `${properties.viewportHeight}px`), (properties.camera.aspect = properties.width / properties.height), properties.camera.updateProjectionMatrix(), properties.postprocessing.setSize(properties.width, properties.height), screenPaint.resize(properties.width, properties.height), visuals.resize(properties.width, properties.height);
	}
	update(e = 0) {
		(properties.time = properties.sharedUniforms.u_time.value += e),
			(properties.deltaTime = properties.sharedUniforms.u_deltaTime.value = e),
			blueNoise.update(e),
			screenPaint.update(e),
			cameraControls.update(e),
			visuals.update(e),
			properties.renderer.setClearColor(properties.bgColor, 1),
			properties.bgColor.setStyle(properties.bgColorHex),
			(properties.bloom.amount = properties.bloomAmount),
			(properties.bloom.radius = properties.bloomRadius),
			(properties.bloom.threshold = properties.bloomThreshold),
			(properties.bloom.smoothWidth = properties.bloomSmoothWidth),
			(properties.bloom.haloWidth = properties.haloWidth),
			(properties.bloom.haloRGBShift = properties.haloRGBShift),
			(properties.bloom.haloStrength = properties.haloStrength),
			(properties.bloom.haloMaskInner = properties.haloMaskInner),
			(properties.bloom.haloMaskOuter = properties.haloMaskOuter),
			(properties.final.vignetteFrom = properties.vignetteFrom),
			(properties.final.vignetteTo = properties.vignetteTo),
			properties.final.vignetteColor.setStyle(properties.vignetteColorHex),
			(properties.final.saturation = properties.saturation),
			(properties.final.contrast = properties.contrast),
			(properties.final.brightness = properties.brightness),
			properties.final.tintColor.setStyle(properties.tintColorHex),
			(properties.final.tintOpacity = properties.tintOpacity),
			properties.final.bgColor.setStyle(properties.bgColorHex),
			(properties.final.opacity = properties.opacity),
			(properties.bokeh.amount = properties.bokehAmount),
			(properties.bokeh.fNumber = properties.bokehFNumber),
			(properties.bokeh.focusDistance = properties.cameraDistance),
			(properties.bokeh.focalLength = properties.bokehFocalLength),
			(properties.bokeh.kFilmHeight = properties.bokehKFilmHeight),
			(screenPaint.needsMouseDown = properties.screenPaintNeedsMouseDown),
			(screenPaint.minRadius = properties.screenPaintMinRadius),
			(screenPaint.maxRadius = properties.screenPaintMaxRadius),
			(screenPaint.radiusDistanceRange = properties.screenPaintRadiusDistanceRange),
			(screenPaint.pushStrength = properties.screenPaintPushStrength),
			(screenPaint.velocityDissipation = properties.screenPaintVelocityDissipation),
			(screenPaint.weight1Dissipation = properties.screenPaintWeight1Dissipation),
			(screenPaint.weight2Dissipation = properties.screenPaintWeight2Dissipation),
			(screenPaint.useNoise = properties.screenPaintUseNoise),
			(screenPaint.curlScale = properties.screenPaintCurlScale),
			(screenPaint.curlStrength = properties.screenPaintCurlStrength),
			(properties.screenPaintDistortion.amount = properties.screenPaintDistortionAmount),
			(properties.screenPaintDistortion.rgbShift = properties.screenPaintDistortionRGBShift),
			(properties.screenPaintDistortion.colorMultiplier = properties.screenPaintDistortionColorMultiplier),
			(properties.screenPaintDistortion.multiplier = properties.screenPaintDistortionMultiplier),
			properties.upscaler && (properties.upscaler.sharpness = properties.upscalerSharpness),
			properties.postprocessing.render(properties.scene, properties.camera, !0),
			imageExporter.update(),
			window.__debugTexture && fboHelper.debugTo(window.__debugTexture);
	}
}
const app = new App();
let _initCallFuncList = [],
	_totalInitCallFuncCount = 0;
class Preloader {
	isActive = !1;
	targetPercent = 0;
	percent = 0;
	initToStartPercent = 0;
	domContainer;
	domText;
	domBar;
	domBarInner;
	ctx;
	_tmpCamera = new Camera();
	MIN_PRELOAD_DURATION = 1;
	PERCENT_BETWEEN_INIT_AND_START = 0.15;
	MIN_DURATION_BETWEEN_INIT_AND_START = 0.25;
	HIDE_DURATION = 0.5;
	preInit() {
		(this.domContainer = document.getElementById('preloader')), (this.domBarWrapper = document.getElementById('preloader-bar-wrapper')), (this.domBar = document.getElementById('preloader-bar')), (this.domBarInner = document.getElementById('preloader-bar-inner')), (this.domText = document.getElementById('preloader-text')), (this.isActive = !0);
	}
	show(e, t) {
		(this._initCallback = e),
			(this._startCallback = t),
			(this.isActive = !0),
			properties.loader.start((i) => {
				this.targetPercent = i;
			});
	}
	hide() {
		settings.SKIP_ANIMATION && ((this.isActive = !1), (this.domContainer.style.display = 'none'));
	}
	resize(e, t) {
		this.isActive;
	}
	update(e) {
		if (!this.isActive) return;
		if (((this.percent = Math.min(this.targetPercent, this.percent + (settings.SKIP_ANIMATION ? 1 : this.targetPercent > this.percent ? e : 0) / this.MIN_PRELOAD_DURATION)), this.targetPercent == 1)) {
			properties.hasInitialized || (this._initCallback(), (_initCallFuncList = properties.initCallFuncList.splice(0, properties.initCallFuncList.length)), (_totalInitCallFuncCount = Math.max(1, _initCallFuncList.length)));
			let n = Math.max(0, _totalInitCallFuncCount - _initCallFuncList.length) / _totalInitCallFuncCount;
			if (((this.initToStartPercent = Math.min(n, this.initToStartPercent + (settings.SKIP_ANIMATION ? 1 : this.percent == 1 ? e : 0) / this.MIN_DURATION_BETWEEN_INIT_AND_START)), _initCallFuncList.length)) {
				let r = _initCallFuncList.shift();
				properties.renderer.compile(r, this._tmpCamera);
			}
			!properties.hasStarted && this.initToStartPercent == 1 && this._startCallback();
		}
		let t = this.initToStartPercent * this.PERCENT_BETWEEN_INIT_AND_START + this.percent * (1 - this.PERCENT_BETWEEN_INIT_AND_START),
			i = math.fit(properties.startTime, 0, 1, 0, 1, ease.cubicInOut);
		(this.domText.innerHTML = `${Number((t * 100).toFixed(0))}%`), (this.domBarInner.style.transform = `scale3d(${t.toFixed(4)}, 1, 1)`), (this.domContainer.style.opacity = 1 - i), i == 1 && ((this.isActive = !1), (this.domContainer.style.display = 'none'));
	}
}
const preloader = new Preloader();
class Ufx extends PostEffect {
	scene;
	camera = new PerspectiveCamera(60, 1);
	frameIdx = -1;
	sectionLayer = new Object3D();
	projectDetailsLayer = new Object3D();
	sharedUniforms = { u_fromTexture: { value: null } };
	init() {
		(this.scene = new Scene()), this.scene.add(this.sectionLayer), this.scene.add(this.projectDetailsLayer);
	}
	setPostprocessing(e) {
		let t = this.camera,
			i = properties.viewportWidth,
			n = properties.viewportHeight;
		t.position.set(i / 2, -n / 2, n / (2 * Math.tan((t.fov * Math.PI) / 360))), (t.aspect = i / n), (t.far = t.position.z * 2), (t.near = t.far / 1e3), t.updateProjectionMatrix();
	}
	render(e, t = !1) {
		let i = fboHelper.getColorState(),
			n = properties.renderer;
		fboHelper.copy(e.fromTexture, e.sceneRenderTarget), n.setRenderTarget(e.sceneRenderTarget), (fboHelper.renderer.autoClear = !1), (fboHelper.renderer.autoClearColor = !1), (fboHelper.renderer.autoClearStencil = !0), (fboHelper.renderer.autoClearDepth = !0), fboHelper.renderer.clear(!1, !0, !0), n.render(this.scene, this.camera), n.setRenderTarget(null);
		let r = t ? null : e.toRenderTarget;
		fboHelper.copy(e.sceneTexture, r), fboHelper.setColorState(i), e.swap();
	}
}
class PreUfx extends Ufx {
	renderOrder = 5;
}
const preUfx = new PreUfx();
class PostUfx extends Ufx {
	renderOrder = 20;
}
const postUfx = new PostUfx();
class Result {
	opacity = 0;
	domContainer;
	domStartButton;
	isActive = !1;
	hasStarted = !1;
	needsReset = !1;
	constructor() {}
	init() {
		(this.domContainer = document.getElementById('pong__result')),
			(this.domStartButton = document.getElementById('pong__result__button')),
			(this.domWin = document.getElementById('pong__result__win')),
			(this.domLose = document.getElementById('pong__result__lose')),
			this.domStartButton.addEventListener('click', () => {
				scores$1.updateScores(), (this.needsReset = !0), (properties.pong.showResult = !1);
			}),
			(this.hasStarted = !0);
	}
	show() {}
	hide() {}
	resize(e, t) {}
	update(e) {
		this.hasStarted && ((this.isActive = properties.pong.showResult), (this.opacity = math.saturate(this.opacity + e * (this.isActive ? 1 : -1))), (this.domContainer.style.display = this.opacity > 0 ? 'block' : 'none'), (this.domContainer.style.opacity = this.opacity), (this.domWin.style.display = properties.pong.winner === 0 ? 'flex' : 'none'), (this.domLose.style.display = properties.pong.winner === 1 ? 'flex' : 'none'), this.opacity === 0 && this.needsReset && ((this.needsReset = !1), pong.reset()));
	}
}
const result = new Result();
class PongUI {
	domContainer;
	isActive = !1;
	opacity = 0;
	hasStarted = !1;
	hasWebflowSupport = !1;
	constructor() {}
	preInit() {
		(this.domContainer = document.getElementById('pong')), (this.domContainer.style.display = 'none'), (this.domContainer.style.opacity = 0);
	}
	init() {
		(this.domContainer = document.getElementById('pong')), (this.hasWebflowSupport = !!this.domContainer), this.hasWebflowSupport && (scores$1.init(), commands.init(), result.init(), (this.hasStarted = !0));
	}
	show() {
		this.hasWebflowSupport && ((this.isActive = !0), scores$1.show(), commands.show(), result.show());
	}
	hide() {
		this.hasWebflowSupport && ((this.isActive = !1), scores$1.hide(), commands.hide(), result.hide());
	}
	resize(e, t) {
		this.hasWebflowSupport && (scores$1.resize(e, t), commands.resize(e, t), result.resize(e, t));
	}
	update(e) {
		this.hasWebflowSupport && this.hasStarted && ((this.opacity = math.saturate(this.opacity + e * (this.isActive ? 1 : -1))), (this.domContainer.style.display = this.opacity > 0 ? 'block' : 'none'), (this.domContainer.style.opacity = this.opacity), this.opacity > 0 && (scores$1.update(e), commands.update(e), result.update(e)));
	}
}
const pongUI = new PongUI();
class Menu {
	domContainer;
	domInner;
	domClose;
	domBackground;
	isOpenRatio = 0;
	_isOpen = !1;
	preInit() {
		(this.domContainer = document.getElementById('menu')), (this.domInner = this.domContainer.querySelector('.infos-menu-inner')), (this.domClose = this.domContainer.querySelector('.infos-menu-close')), (this.domBackground = this.domContainer.querySelector('.infos-menu-background'));
	}
	init() {
		this.domClose.addEventListener('click', this.hide.bind(this));
	}
	resize(e, t) {}
	update(e) {
		this.isOpenRatio = math.saturate(this.isOpenRatio + (this._isOpen ? e : -e));
		let t = math.fit(this.isOpenRatio, 0, 1, 0, 1, ease.cubicInOut);
		this.domBackground.style.opacity = t;
		let i = math.fit(this.isOpenRatio, 0, 0.9, 30, 0, ease.cubicInOut);
		(this.domInner.style.transform = `translate3d(${i}em, 0, 0)`), (i = math.fit(this.isOpenRatio, 0.1, 1, 35, 0, ease.cubicInOut)), (this.domClose.style.transform = `translate3d(${i}em, 0, 0)`);
	}
	show() {
		this._isOpen = !0;
	}
	hide() {
		this._isOpen = !1;
	}
	toggle() {
		this._isOpen = !this._isOpen;
	}
}
const menu = new Menu();
class Header {
	domContainer;
	domMiddle;
	domInfoButton;
	isOpenRatio = 0;
	_isOpen = !1;
	preInit() {
		(this.domContainer = document.getElementById('header')), (this.domMiddle = this.domContainer.querySelector('.navbar-middle')), (this.domMiddleButtons = this.domContainer.querySelectorAll('.navbar-middle-button')), (this.domInfoButton = this.domContainer.querySelector('.navbar-right-info .navbar-info-button')), (this.domMobileInfoButton = this.domContainer.querySelector('.navbar-middle-mobile-info-button .navbar-info-button')), (this.domMobileMenuButton = this.domContainer.querySelector('.navbar-right-mobile-menu-button'));
	}
	init() {
		this.domInfoButton.addEventListener('click', this._onDomInfoButtonClick.bind(this)), this.domMobileInfoButton.addEventListener('click', this._onDomInfoButtonClick.bind(this)), this.domMobileMenuButton.addEventListener('click', this._onDomMobileMenuButtonClick.bind(this));
		for (let e = 0; e < this.domMiddleButtons.length; e++) this.domMiddleButtons[e].addEventListener('click', this._onDomMiddleButtonClick.bind(this));
	}
	resize(e, t) {}
	update(e) {
		this.isOpenRatio = math.saturate(this.isOpenRatio + (this._isOpen ? e : -e));
		let t = properties.viewportWidth <= 991 ? ease.cubicInOut(this.isOpenRatio) : 1;
		(this.domMiddle.style.opacity = t), (this.domMiddle.style.pointerEvents = t > 0.5 ? 'auto' : 'none');
	}
	_onDomInfoButtonClick() {
		menu.toggle();
	}
	_onDomMobileMenuButtonClick() {
		(this._isOpen = !this._isOpen), this.domMobileMenuButton.classList.toggle('--is-active', this._isOpen);
	}
	_onDomMiddleButtonClick(e) {
		e.target.closest('.navbar-middle-button').id.split('button-experiment-')[1];
	}
}
const header = new Header();
class UI {
	activeProjectID = PROJECTS.HOME;
	activeProject = null;
	cacheProject = null;
	projects = [
		{ id: PROJECTS.HOME, manager: null },
		{ id: PROJECTS.PONG, manager: pongUI },
	];
	lightOnRatio = 1;
	isFirstLightOn = !0;
	domHome;
	domNavigation;
	domNavigationButtons;
	homeOpacity = 0;
	preInit() {
		document.documentElement.classList.add('is-ready'),
			(this.domHome = document.getElementById('home')),
			(this.domHome.style.opacity = 0),
			(this.domNavigation = document.getElementById('header')),
			(this.domNavigationButtons = this.domNavigation.querySelectorAll('a')),
			this.domNavigationButtons.forEach((e) => {
				e.addEventListener('click', () => {
					properties.startProjectChange.dispatch(e.getAttribute('data-project'));
				});
			}),
			preUfx.init(),
			properties.postprocessing.queue.push(preUfx),
			postUfx.init(),
			properties.postprocessing.queue.push(postUfx),
			preloader.preInit(),
			header.preInit(),
			menu.preInit(),
			this.projects.forEach((e) => e.manager && e.manager.preInit());
	}
	preload(e, t) {
		preloader.show(e, t);
	}
	init() {
		header.init(), menu.init(), this.projects.forEach((e) => e.manager && e.manager.init()), properties.startProjectChange.add(this.startProjectUpdate.bind(this));
	}
	start() {
		preloader.hide(), properties.startProjectChange.dispatch(settings.ACTIVE_PROJECT);
	}
	startProjectUpdate(e) {
		(this.cacheProject = e), (properties.isLightOn = !1);
	}
	updateProject() {
		(properties.activeProjectID = this.cacheProject), (properties.isLightOn = !0), properties.changeProject.dispatch(), this.projects.forEach((e) => e.manager && e.manager.hide()), (this.activeProject = this.projects.filter((e) => e.id === properties.activeProjectID)[0]?.manager), this.activeProject && this.activeProject.show();
	}
	resize(e, t) {
		header.resize(e, t), menu.resize(e, t), document.documentElement.style.setProperty('--vh', properties.viewportHeight * 0.01 + 'px'), preloader.resize(e, t), this.projects.forEach((i) => i.manager && i.manager.resize(e, t));
	}
	update(e) {
		(this.homeOpacity = math.saturate(this.homeOpacity + e * (properties.hasStarted ? 1 : -1))), (this.domHome.style.opacity = this.homeOpacity), header.update(e), menu.update(e), preloader.update(e), this.isFirstLightOn && properties.hasStarted ? (this.updateProject(), (this.isFirstLightOn = !1)) : ((this.lightOnRatio = math.saturate(this.lightOnRatio + 0.5 * e * (properties.isLightOn ? 1 : -1))), this.lightOnRatio === 0 && !properties.isLightOn && this.updateProject()), this.projects.forEach((t) => t.manager && t.manager.update(e));
	}
}
const ui = new UI();
class GUI {
	preInit() {
		window.dat && this._addTextureHelper();
	}
	init() {
		if (!window.dat) return;
		this._post();
		const e = new dat.GUI();
		e.addColor(gi2d, 'ambientColorHex').listen(), e.add(gi2d, 'ambientMissHitOpacity', 0, 2, 1e-4).listen(), e.add(gi2d, 'ambientBaseOpacity', 0, 2, 1e-4).listen(), e.add(gi2d, 'emissiveStrength', 0, 3, 1e-4).listen(), e.add(gi2d, 'falloffStrength', 0, 30, 1e-4).listen(), e.add(gi2d, 'minStepSize', 0, 10, 1).listen(), e.add(gi2d, 'paddingPassCount', 0, 5, 1).listen(), e.add(gi2d, 'SAMPLE_COUNT', 1, 64, 1).listen(), e.add(gi2d, 'STEP_COUNT', 1, 64, 1).listen();
	}
	_post() {
		const e = new dat.GUI();
		if (properties.bloom) {
			const n = e.addFolder('bloom');
			n.add(properties, 'bloomAmount', 0, 5, 1e-5).listen(), n.add(properties, 'bloomRadius', -1, 1, 1e-5).listen(), n.add(properties, 'bloomThreshold', 0, 1, 1e-5).listen(), n.add(properties, 'bloomSmoothWidth', 0, 2, 1e-5).listen(), n.add(properties, 'haloWidth', 0, 2, 1e-5).listen(), n.add(properties, 'haloRGBShift', 0, 0.2, 1e-5).listen(), n.add(properties, 'haloStrength', 0, 3, 1e-5).listen(), n.add(properties, 'haloMaskInner', 0, 1, 1e-5).listen(), n.add(properties, 'haloMaskOuter', 0, 1, 1e-5).listen();
		}
		if (properties.final) {
			const n = e.addFolder('color');
			n.add(properties, 'vignetteFrom', 0, 3, 1e-5).listen(), n.add(properties, 'vignetteTo', 0, 3, 1e-5).listen(), n.addColor(properties, 'vignetteColorHex').listen(), n.add(properties, 'saturation', 0, 3, 1e-5).listen(), n.add(properties, 'contrast', -1, 3, 1e-5).listen(), n.add(properties, 'brightness', 0, 2, 1e-5).listen(), n.addColor(properties, 'tintColorHex').listen(), n.add(properties, 'tintOpacity', 0, 1, 1e-5).listen();
		}
		if (properties.bokeh) {
			const n = e.addFolder('bokeh');
			n.add(properties, 'bokehAmount', 0, 1, 1e-5).listen(), n.add(properties, 'bokehFNumber', 1e-4, 1, 1e-5).listen(), n.add(properties, 'bokehFocusDistance', 0, 20, 1e-5).listen(), n.add(properties, 'bokehFocalLength', 0, 3, 1e-5).listen(), n.add(properties, 'bokehKFilmHeight', 1e-5, 90, 1e-5).listen(), n.add(properties.bokeh, 'quality', 0, 3, 1).listen();
		}
		properties.cameraMotionBlur && e.addFolder('cameraMotionBlur').add(properties, 'cameraMotionBlurAmount', 0, 3, 1e-5).listen();
		const t = e.addFolder('screenPaint');
		if ((t.add(properties, 'screenPaintNeedsMouseDown'), t.add(properties, 'screenPaintMinRadius', 0, 200, 1).listen(), t.add(properties, 'screenPaintMaxRadius', 0, 300, 1).listen(), t.add(properties, 'screenPaintRadiusDistanceRange', 0, 300, 1).listen(), t.add(properties, 'screenPaintPushStrength', 0, 100, 1e-5).listen(), t.add(properties, 'screenPaintVelocityDissipation', 0, 0.999, 1e-5).listen(), t.add(properties, 'screenPaintWeight1Dissipation', 0, 0.999, 1e-5).listen(), t.add(properties, 'screenPaintWeight2Dissipation', 0, 0.999, 1e-5).listen(), t.add(properties, 'screenPaintUseNoise'), t.add(properties, 'screenPaintCurlScale', 0, 0.5, 1e-5).listen(), t.add(properties, 'screenPaintCurlStrength', 0, 5, 1e-5).listen(), properties.screenPaintDistortion)) {
			const n = e.addFolder('screenPaintDistortion');
			n.add(properties, 'screenPaintDistortionAmount', 0, 100, 1e-5).listen(), n.add(properties, 'screenPaintDistortionRGBShift', 0, 3, 1e-5).listen(), n.add(properties, 'screenPaintDistortionColorMultiplier', 0, 50, 1e-5).listen(), n.add(properties, 'screenPaintDistortionMultiplier', 0, 20, 1e-5).listen();
		}
		e.addFolder('upscaler').add(properties, 'upscalerSharpness', 0, 1, 1e-5).listen(),
			e.add(
				{
					exportImage: function () {
						properties.exporterSignal.dispatch();
					},
				},
				'exportImage',
			);
	}
	_addTextureHelper() {
		let e = dat.GUI.prototype.add;
		dat.GUI.prototype.add = function (t, i) {
			let n = t[i];
			if (n && n.isTexture) {
				let d = function (p) {
						(c.onload = function () {
							(n.image = c), (n.needsUpdate = !0);
						}),
							(c.src = URL.createObjectURL(p));
					},
					m = function () {
						if (+new Date() - h < 100) return;
						h = +new Date();
						let p = document.createElement('input');
						(p.type = 'file'),
							(p.style.display = 'none'),
							(p.onchange = function () {
								document.body.removeChild(p);
								let f = p.files[0];
								d(f);
							}),
							document.body.appendChild(p),
							p.click();
					},
					g = function (p) {
						p.stopPropagation(), p.preventDefault();
					};
				var r = d,
					o = m,
					a = g;
				let c = new Image(),
					l,
					u = {},
					h = 0;
				return (
					(c.src = n.image.src),
					(u[i] = m),
					(l = e.call(this, u, i)),
					(l.domElement.innerHTML = ''),
					l.domElement.appendChild(c),
					(c.style.width = c.style.height = '26px'),
					(l.domElement.dragover = (p) => {
						p.preventDefault();
					}),
					(l.domElement.parentNode.parentNode.style.position = 'relative'),
					(l.domElement.parentNode.parentNode.ondragenter = l.domElement.parentNode.parentNode.ondragleave = l.domElement.parentNode.parentNode.ondragover = g),
					l.domElement.parentNode.parentNode.addEventListener('drop', function (p) {
						p.stopPropagation(), p.preventDefault();
						let f = p.dataTransfer.files[0];
						d(f);
					}),
					l
				);
			} else return e.apply(this, arguments);
		};
	}
}
const gui = new GUI(),
	AnyItem = properties.loader.ITEM_CLASSES.any;
class FontItem extends AnyItem {
	constructor(e, t) {
		FontItem.canvas || FontItem.initCanvas(), (t.loadFunc = () => {}), (t.hasLoading = t.hasLoading === void 0 ? !0 : t.hasLoading), (t.refText = 'refing something...'), (t.refFontSize = t.refFontSize || 120), (t.refFont = t.refFont || 'monospace:400:italic'), (t.interval = t.interval || 20), (t.refTextWidth = 0), super(e, t), (this.loadFunc = this._loadFunc.bind(this));
	}
	static canvas;
	static ctx;
	static initCanvas() {
		let e = document.createElement('canvas');
		(e.width = e.height = 1), (FontItem.canvas = e), (FontItem.ctx = e.getContext('2d'));
	}
	_loadFunc(e, t, i) {
		let n = e.split(','),
			r = [];
		for (let d = 0; d < n.length; d++) r.push(n[d].trim());
		n = this.refFont.split(':');
		let o = n[0],
			a = n[1] || 'normal',
			c = n[2] || 'normal',
			l = o;
		this.refTextWidth = this._getTextWidth(o, a, c);
		let u,
			h = r.length;
		u = setInterval(() => {
			(n = r[0].split(':')), (o = n[0]), (a = n[1] || 'normal'), (c = n[2] || 'normal'), this._getTextWidth(o, a, c, l) !== this.refTextWidth && (r.shift(), i.dispatch((h - r.length) / h), r.length === 0 && (clearInterval(u), t()));
		}, this.refInterval);
	}
	_getTextWidth = (e, t, i, n) => {
		let r = FontItem.ctx;
		return (r.font = i + ' ' + t + ' ' + this.refFontSize + 'px ' + e + (n ? ', ' + n : '')), r.measureText(this.refText).width;
	};
	_onLoaderLoad(e, t) {
		(this.content = t), e(t);
	}
	_onLoaderLoading(e, t) {
		e.dispatch(t.loaded / t.total);
	}
}
FontItem.type = 'font';
FontItem.extensions = [];
let dateTime = performance.now(),
	_needsResize = !1;
function preRun() {
	for (const [s, e] of Object.entries(settings.CROSS_ORIGINS)) properties.loader.setCrossOrigin(s, e);
	properties.loader.register(FontItem),
		properties.loader.start((s) => {
			s === 1 && run();
		});
}
function run() {
	let s = (properties.viewportWidth = window.innerWidth),
		e = (properties.viewportHeight = window.innerHeight);
	(properties.viewportResolution = new Vector2(s, e)), (properties.width = s), (properties.height = e), app.initEngine(), settings.LOOK_DEV_MODE && gui.preInit(), input.preInit(), ui.preInit(), app.preInit(), window.addEventListener('resize', onResize), _onResize(), loop(), ui.preload(init, start);
}
function init() {
	settings.LOOK_DEV_MODE && gui.init(), input.init(), ui.init(), app.init(), (properties.hasInitialized = !0);
}
function start() {
	ui.start(), app.start(), (properties.hasStarted = !0), _onResize(), settings.JUMP_SECTION;
}
function onResize() {
	_needsResize = !0;
}
function _onResize(s) {
	let e = (properties.viewportWidth = window.innerWidth),
		t = (properties.viewportHeight = window.innerHeight);
	properties.viewportResolution.set(e, window.innerHeight), document.documentElement.style.setProperty('--vh', t * 0.01 + 'px');
	let i = settings.UP_SCALE,
		n = e * settings.DPR,
		r = t * settings.DPR;
	if (settings.USE_PIXEL_LIMIT === !0 && n * r > settings.MAX_PIXEL_COUNT) {
		let o = n / r;
		(r = Math.sqrt(settings.MAX_PIXEL_COUNT / o)), (n = Math.ceil(r * o)), (r = Math.ceil(r));
	}
	(properties.width = Math.ceil(n / i)), (properties.height = Math.ceil(r / i)), properties.resolution.set(properties.width, properties.height), ui.resize(e, t), app.resize(n, r);
}
function update(s) {
	input.update(s), ui.update(s), app.update(s), input.postUpdate(s);
}
function loop() {
	window.requestAnimationFrame(loop);
	let s = performance.now(),
		e = (s - dateTime) / 1e3;
	(dateTime = s), (e = Math.min(e, 1 / 20)), _needsResize && _onResize(), properties.hasStarted && (properties.startTime += e), update(e), (_needsResize = !1);
}
function fontsInjection() {
	const s = [
		{
			name: 'PlayfairDisplay-Regular',
			files: [
				{ extension: 'woff2', fileName: 'PlayfairDisplay-Regular' },
				{ extension: 'woff', fileName: 'PlayfairDisplay-Regular' },
			],
			weight: 400,
			style: 'normal',
			display: 'block',
		},
		{
			name: 'Inter-Regular',
			files: [
				{ extension: 'woff2', fileName: 'Inter-Regular' },
				{ extension: 'woff', fileName: 'Inter-Regular' },
			],
			weight: 400,
			style: 'normal',
			display: 'block',
		},
		{ name: 'NeuePixelGrotesk-Regular', files: [{ extension: 'woff', fileName: 'NeuePixelGrotesk_Regular' }], weight: 400, style: 'normal', display: 'block' },
		{
			name: 'VT323-Regular',
			files: [
				{ extension: 'woff2', fileName: 'VT323-Regular' },
				{ extension: 'woff', fileName: 'VT323-Regular' },
			],
			weight: 500,
			style: 'normal',
			display: 'block',
		},
	];
	let e = '';
	for (let i = 0; i < s.length; i++) {
		const n = s[i],
			r = n.files.reduce((o, { fileName: a, extension: c }, l) => {
				const u = l === n.files.length - 1;
				return (o += `url('${settings.FONT_PATH}${a}.${c}') format('${c}') ${u ? '' : ','}`), o;
			}, '');
		e += `
		@font-face {
			font-family: '${n.name}';
			src: ${r};
			font-weight: ${n.weight};
			font-style: ${n.style};
			font-display: ${n.display};
		}
		`;
	}
	const t = document.createElement('style');
	t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
}
fontsInjection();
preRun();
Object.assign || document.documentElement.classList.add('not-supported not-supported--browser');
document.documentElement.classList.remove('no-js');
/(ipad|iphone|android)/i.test((navigator.userAgent || navigator.vendor).toLowerCase()) ? document.documentElement.classList.add('is-mobile') : document.documentElement.classList.add('is-desktop');
function preventZoom(s) {
	s.preventDefault(), (document.body.style.zoom = 1);
}
window.addEventListener('wheel', (s) => s.preventDefault(), { passive: !1 });
document.addEventListener('gesturestart', (s) => preventZoom(s));
document.addEventListener('gesturechange', (s) => preventZoom(s));
document.addEventListener('gestureend', (s) => preventZoom(s));
