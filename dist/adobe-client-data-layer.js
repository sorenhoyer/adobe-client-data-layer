(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="cloneDeep,cloneDeepWith,get,has,isEmpty,isEqual,isNull,isPlainObject,isObject,merge,mergeWith,omit,reject" -p -o custom-lodash.js`
 */
;(function(){function t(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function e(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&false!==e(t[n],n,t););}function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,c=[];++n<r;){var u=t[n];e(u,n,t)&&(c[o++]=u)}return c}function r(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function o(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];
return t}function c(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return true;return false}function u(t){return function(e){return null==e?Jt:e[t]}}function i(t){return function(e){return t(e)}}function a(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function f(t){var e=Object;return function(n){return t(e(n))}}function l(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function s(){}function b(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){
var r=t[e];this.set(r[0],r[1])}}function h(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function p(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function y(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new p;++e<n;)this.add(t[e])}function j(t){this.size=(this.__data__=new h(t)).size}function _(t,e){var n=bn(t),r=!n&&sn(t),o=!n&&!r&&hn(t),c=!n&&!r&&!o&&jn(t);if(n=n||r||o||c){for(var r=t.length,u=String,i=-1,a=Array(r);++i<r;)a[i]=u(i);
r=a}else r=[];var f,u=r.length;for(f in t)!e&&!de.call(t,f)||n&&("length"==f||o&&("offset"==f||"parent"==f)||c&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||jt(f,u))||r.push(f);return r}function g(t,e,n){(n===Jt||kt(t[e],n))&&(n!==Jt||e in t)||m(t,e,n)}function v(t,e,n){var r=t[e];de.call(t,e)&&kt(r,n)&&(n!==Jt||e in t)||m(t,e,n)}function d(t,e){for(var n=t.length;n--;)if(kt(t[n][0],e))return n;return-1}function A(t,e){return t&&Y(e,Tt(e),t)}function w(t,e){return t&&Y(e,Vt(e),t)}function m(t,e,n){
"__proto__"==e&&Be?Be(t,e,{configurable:true,enumerable:true,value:n,writable:true}):t[e]=n}function O(t,n,r,o,c,u){var i,a=1&n,f=2&n,l=4&n;if(r&&(i=c?r(t,o,c,u):r(t)),i!==Jt)return i;if(!It(t))return t;if(o=bn(t)){if(i=bt(t),!a)return X(t,i)}else{var s=an(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(hn(t))return J(t,a);if("[object Object]"==s||"[object Arguments]"==s||b&&!c){if(i=f||b?{}:ht(t),!a)return f?tt(t,w(i,t)):Z(t,A(i,t))}else{if(!oe[s])return c?t:{};i=pt(t,s,a)}}if(u||(u=new j),
c=u.get(t))return c;if(u.set(t,i),yn(t))return t.forEach(function(e){i.add(O(e,n,r,e,t,u))}),i;if(pn(t))return t.forEach(function(e,o){i.set(o,O(e,n,r,o,t,u))}),i;var f=l?f?ut:ct:f?Vt:Tt,h=o?Jt:f(t);return e(h||t,function(e,o){h&&(o=e,e=t[o]),v(i,o,O(e,n,r,o,t,u))}),i}function S(t,e){var n=[];return nn(t,function(t,r,o){e(t,r,o)&&n.push(t)}),n}function z(t,e,n,r,c){var u=-1,i=t.length;for(n||(n=yt),c||(c=[]);++u<i;){var a=t[u];0<e&&n(a)?1<e?z(a,e-1,n,r,c):o(c,a):r||(c[c.length]=a)}return c}function k(t,e){
e=H(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[At(e[n++])];return n&&n==r?t:Jt}function x(t,e,n){return e=e(t),bn(t)?e:o(e,n(t))}function E(t){if(null==t)t=t===Jt?"[object Undefined]":"[object Null]";else if(Ue&&Ue in Object(t)){var e=de.call(t,Ue),n=t[Ue];try{t[Ue]=Jt;var r=true}catch(t){}var o=we.call(t);r&&(e?t[Ue]=n:delete t[Ue]),t=o}else t=we.call(t);return t}function F(t,e){return null!=t&&de.call(t,e)}function M(t,e){return null!=t&&e in Object(t)}function I(t){return Dt(t)&&"[object Arguments]"==E(t);
}function D(t,e,n,r,o){if(t===e)e=true;else if(null==t||null==e||!Dt(t)&&!Dt(e))e=t!==t&&e!==e;else t:{var c=bn(t),u=bn(e),i=c?"[object Array]":an(t),a=u?"[object Array]":an(e),i="[object Arguments]"==i?"[object Object]":i,a="[object Arguments]"==a?"[object Object]":a,f="[object Object]"==i,u="[object Object]"==a;if((a=i==a)&&hn(t)){if(!hn(e)){e=false;break t}c=true,f=false}if(a&&!f)o||(o=new j),e=c||jn(t)?rt(t,e,n,r,D,o):ot(t,e,i,n,r,D,o);else{if(!(1&n)&&(c=f&&de.call(t,"__wrapped__"),i=u&&de.call(e,"__wrapped__"),
c||i)){t=c?t.value():t,e=i?e.value():e,o||(o=new j),e=D(t,e,n,r,o);break t}if(a)e:if(o||(o=new j),c=1&n,i=ct(t),u=i.length,a=ct(e).length,u==a||c){for(f=u;f--;){var l=i[f];if(!(c?l in e:de.call(e,l))){e=false;break e}}if((a=o.get(t))&&o.get(e))e=a==e;else{a=true,o.set(t,e),o.set(e,t);for(var s=c;++f<u;){var l=i[f],b=t[l],h=e[l];if(r)var p=c?r(h,b,l,e,t,o):r(b,h,l,t,e,o);if(p===Jt?b!==h&&!D(b,h,n,r,o):!p){a=false;break}s||(s="constructor"==l)}a&&!s&&(n=t.constructor,r=e.constructor,n!=r&&"constructor"in t&&"constructor"in e&&!(typeof n=="function"&&n instanceof n&&typeof r=="function"&&r instanceof r)&&(a=false)),
o.delete(t),o.delete(e),e=a}}else e=false;else e=false}}return e}function U(t){return Dt(t)&&"[object Map]"==an(t)}function B(t,e){var n=e.length,r=n;if(null==t)return!r;for(t=Object(t);n--;){var o=e[n];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false}for(;++n<r;){var o=e[n],c=o[0],u=t[c],i=o[1];if(o[2]){if(u===Jt&&!(c in t))return false}else if(o=new j,void 0===Jt?!D(i,u,3,void 0,o):1)return false}return true}function P(t){return Dt(t)&&"[object Set]"==an(t)}function L(t){return Dt(t)&&Mt(t.length)&&!!re[E(t)]}function $(t){
return typeof t=="function"?t:null==t?Rt:typeof t=="object"?bn(t)?V(t[0],t[1]):T(t):qt(t)}function C(t){if(!gt(t))return $e(t);var e,n=[];for(e in Object(t))de.call(t,e)&&"constructor"!=e&&n.push(e);return n}function T(t){var e=ft(t);return 1==e.length&&e[0][2]?vt(e[0][0],e[0][1]):function(n){return n===t||B(n,e)}}function V(t,e){return _t(t)&&e===e&&!It(e)?vt(At(t),e):function(n){var r=$t(n,t);return r===Jt&&r===e?Ct(n,t):D(e,r,3)}}function N(t,e,n,r,o){t!==e&&rn(e,function(c,u){if(It(c)){o||(o=new j);
var i=o,a="__proto__"==u?Jt:t[u],f="__proto__"==u?Jt:e[u],l=i.get(f);if(l)g(t,u,l);else{var l=r?r(a,f,u+"",t,e,i):Jt,s=l===Jt;if(s){var b=bn(f),h=!b&&hn(f),p=!b&&!h&&jn(f),l=f;b||h||p?bn(a)?l=a:Et(a)?l=X(a):h?(s=false,l=J(f,true)):p?(s=false,l=Q(f,true)):l=[]:Ut(f)||sn(f)?(l=a,sn(a)?l=Pt(a):(!It(a)||n&&Ft(a))&&(l=ht(f))):s=false}s&&(i.set(f,l),N(l,f,n,r,i),i.delete(f)),g(t,u,l)}}else i=r?r("__proto__"==u?Jt:t[u],c,u+"",t,e,o):Jt,i===Jt&&(i=c),g(t,u,i)},Vt)}function R(t){return function(e){return k(e,t)}}function W(t){
return fn(dt(t,void 0,Rt),t+"")}function q(t){if(typeof t=="string")return t;if(bn(t))return r(t,q)+"";if(Bt(t))return tn?tn.call(t):"";var e=t+"";return"0"==e&&1/t==-Kt?"-0":e}function G(t,e){e=H(e,t);var n;if(2>e.length)n=t;else{n=e;var r=0,o=-1,c=-1,u=n.length;for(0>r&&(r=-r>u?0:u+r),o=o>u?u:o,0>o&&(o+=u),u=r>o?0:o-r>>>0,r>>>=0,o=Array(u);++c<u;)o[c]=n[c+r];n=k(t,o)}t=n,null==t||delete t[At(Ot(e))]}function H(t,e){return bn(t)?t:_t(t,e)?[t]:ln(Lt(t))}function J(t,e){if(e)return t.slice();var n=t.length,n=xe?xe(n):new t.constructor(n);
return t.copy(n),n}function K(t){var e=new t.constructor(t.byteLength);return new ke(e).set(new ke(t)),e}function Q(t,e){return new t.constructor(e?K(t.buffer):t.buffer,t.byteOffset,t.length)}function X(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function Y(t,e,n){var r=!n;n||(n={});for(var o=-1,c=e.length;++o<c;){var u=e[o],i=Jt;i===Jt&&(i=t[u]),r?m(n,u,i):v(n,u,i)}return n}function Z(t,e){return Y(t,cn(t),e)}function tt(t,e){return Y(t,un(t),e)}function et(t){return W(function(e,n){
var r,o=-1,c=n.length,u=1<c?n[c-1]:Jt,i=2<c?n[2]:Jt,u=3<t.length&&typeof u=="function"?(c--,u):Jt;if(r=i){r=n[0];var a=n[1];if(It(i)){var f=typeof a;r=!!("number"==f?xt(i)&&jt(a,i.length):"string"==f&&a in i)&&kt(i[a],r)}else r=false}for(r&&(u=3>c?Jt:u,c=1),e=Object(e);++o<c;)(i=n[o])&&t(e,i,o,u);return e})}function nt(t){return Ut(t)?Jt:t}function rt(t,e,n,r,o,u){var i=1&n,a=t.length,f=e.length;if(a!=f&&!(i&&f>a))return false;if((f=u.get(t))&&u.get(e))return f==e;var f=-1,l=true,s=2&n?new y:Jt;for(u.set(t,e),
u.set(e,t);++f<a;){var b=t[f],h=e[f];if(r)var p=i?r(h,b,f,e,t,u):r(b,h,f,t,e,u);if(p!==Jt){if(p)continue;l=false;break}if(s){if(!c(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,n,r,u)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,n,r,u)){l=false;break}}return u.delete(t),u.delete(e),l}function ot(t,e,n,r,o,c,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!c(new ke(t),new ke(e)))break;
return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return kt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var i=a;case"[object Set]":if(i||(i=l),t.size!=e.size&&!(1&r))break;return(n=u.get(t))?n==e:(r|=2,u.set(t,e),e=rt(i(t),i(e),r,o,c,u),u.delete(t),e);case"[object Symbol]":if(Ze)return Ze.call(t)==Ze.call(e)}return false}function ct(t){return x(t,Tt,cn)}function ut(t){return x(t,Vt,un);
}function it(){var t=s.iteratee||Wt,t=t===Wt?$:t;return arguments.length?t(arguments[0],arguments[1]):t}function at(t,e){var n=t.__data__,r=typeof e;return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n[typeof e=="string"?"string":"hash"]:n.map}function ft(t){for(var e=Tt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,o===o&&!It(o)]}return e}function lt(t,e){var n=null==t?Jt:t[e];return(!It(n)||Ae&&Ae in n?0:(Ft(n)?Oe:ee).test(wt(n)))?n:Jt}function st(t,e,n){e=H(e,t);
for(var r=-1,o=e.length,c=false;++r<o;){var u=At(e[r]);if(!(c=null!=t&&n(t,u)))break;t=t[u]}return c||++r!=o?c:(o=null==t?0:t.length,!!o&&Mt(o)&&jt(u,o)&&(bn(t)||sn(t)))}function bt(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&de.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function ht(t){return typeof t.constructor!="function"||gt(t)?{}:en(Ee(t))}function pt(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return K(t);case"[object Boolean]":case"[object Date]":
return new r(+t);case"[object DataView]":return e=n?K(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Q(t,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return e=new t.constructor(t.source,te.exec(t)),
e.lastIndex=t.lastIndex,e;case"[object Set]":return new r;case"[object Symbol]":return Ze?Object(Ze.call(t)):{}}}function yt(t){return bn(t)||sn(t)||!!(De&&t&&t[De])}function jt(t,e){var n=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==n||"symbol"!=n&&ne.test(t))&&-1<t&&0==t%1&&t<e}function _t(t,e){if(bn(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Bt(t))||(Xt.test(t)||!Qt.test(t)||null!=e&&t in Object(e))}function gt(t){var e=t&&t.constructor;
return t===(typeof e=="function"&&e.prototype||_e)}function vt(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==Jt||t in Object(n)))}}function dt(e,n,r){return n=Ce(n===Jt?e.length-1:n,0),function(){for(var o=arguments,c=-1,u=Ce(o.length-n,0),i=Array(u);++c<u;)i[c]=o[n+c];for(c=-1,u=Array(n+1);++c<n;)u[c]=o[c];return u[n]=r(i),t(e,this,u)}}function At(t){if(typeof t=="string"||Bt(t))return t;var e=t+"";return"0"==e&&1/t==-Kt?"-0":e}function wt(t){if(null!=t){try{return ve.call(t)}catch(t){}
return t+""}return""}function mt(t){return(null==t?0:t.length)?z(t,1):[]}function Ot(t){var e=null==t?0:t.length;return e?t[e-1]:Jt}function St(t,e){function n(){var r=arguments,o=e?e.apply(this,r):r[0],c=n.cache;return c.has(o)?c.get(o):(r=t.apply(this,r),n.cache=c.set(o,r)||c,r)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return n.cache=new(St.Cache||p),n}function zt(t){if(typeof t!="function")throw new TypeError("Expected a function");return function(){
var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function kt(t,e){return t===e||t!==t&&e!==e}function xt(t){return null!=t&&Mt(t.length)&&!Ft(t)}function Et(t){return Dt(t)&&xt(t)}function Ft(t){return!!It(t)&&(t=E(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Mt(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t;
}function It(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Dt(t){return null!=t&&typeof t=="object"}function Ut(t){return!(!Dt(t)||"[object Object]"!=E(t))&&(t=Ee(t),null===t||(t=de.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&ve.call(t)==me))}function Bt(t){return typeof t=="symbol"||Dt(t)&&"[object Symbol]"==E(t)}function Pt(t){return Y(t,Vt(t))}function Lt(t){return null==t?"":q(t)}function $t(t,e,n){return t=null==t?Jt:k(t,e),t===Jt?n:t}function Ct(t,e){
return null!=t&&st(t,e,M)}function Tt(t){return xt(t)?_(t):C(t)}function Vt(t){if(xt(t))t=_(t,true);else if(It(t)){var e,n=gt(t),r=[];for(e in t)("constructor"!=e||!n&&de.call(t,e))&&r.push(e);t=r}else{if(e=[],null!=t)for(n in Object(t))e.push(n);t=e}return t}function Nt(t){return function(){return t}}function Rt(t){return t}function Wt(t){return $(typeof t=="function"?t:O(t,1))}function qt(t){return _t(t)?u(At(t)):R(t)}function Gt(){return[]}function Ht(){return false}var Jt,Kt=1/0,Qt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xt=/^\w*$/,Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zt=/\\(\\)?/g,te=/\w*$/,ee=/^\[object .+?Constructor\]$/,ne=/^(?:0|[1-9]\d*)$/,re={};
re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=true,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=false;
var oe={};oe["[object Arguments]"]=oe["[object Array]"]=oe["[object ArrayBuffer]"]=oe["[object DataView]"]=oe["[object Boolean]"]=oe["[object Date]"]=oe["[object Float32Array]"]=oe["[object Float64Array]"]=oe["[object Int8Array]"]=oe["[object Int16Array]"]=oe["[object Int32Array]"]=oe["[object Map]"]=oe["[object Number]"]=oe["[object Object]"]=oe["[object RegExp]"]=oe["[object Set]"]=oe["[object String]"]=oe["[object Symbol]"]=oe["[object Uint8Array]"]=oe["[object Uint8ClampedArray]"]=oe["[object Uint16Array]"]=oe["[object Uint32Array]"]=true,
oe["[object Error]"]=oe["[object Function]"]=oe["[object WeakMap]"]=false;var ce,ue=typeof global=="object"&&global&&global.Object===Object&&global,ie=typeof self=="object"&&self&&self.Object===Object&&self,ae=ue||ie||Function("return this")(),fe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,le=fe&&typeof module=="object"&&module&&!module.nodeType&&module,se=le&&le.exports===fe,be=se&&ue.process;t:{try{ce=be&&be.binding&&be.binding("util");break t}catch(t){}ce=void 0}var he=ce&&ce.isMap,pe=ce&&ce.isSet,ye=ce&&ce.isTypedArray,je=Array.prototype,_e=Object.prototype,ge=ae["__core-js_shared__"],ve=Function.prototype.toString,de=_e.hasOwnProperty,Ae=function(){
var t=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),we=_e.toString,me=ve.call(Object),Oe=RegExp("^"+ve.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Se=se?ae.Buffer:Jt,ze=ae.Symbol,ke=ae.Uint8Array,xe=Se?Se.a:Jt,Ee=f(Object.getPrototypeOf),Fe=Object.create,Me=_e.propertyIsEnumerable,Ie=je.splice,De=ze?ze.isConcatSpreadable:Jt,Ue=ze?ze.toStringTag:Jt,Be=function(){try{var t=lt(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),Pe=Object.getOwnPropertySymbols,Le=Se?Se.isBuffer:Jt,$e=f(Object.keys),Ce=Math.max,Te=Date.now,Ve=lt(ae,"DataView"),Ne=lt(ae,"Map"),Re=lt(ae,"Promise"),We=lt(ae,"Set"),qe=lt(ae,"WeakMap"),Ge=lt(Object,"create"),He=wt(Ve),Je=wt(Ne),Ke=wt(Re),Qe=wt(We),Xe=wt(qe),Ye=ze?ze.prototype:Jt,Ze=Ye?Ye.valueOf:Jt,tn=Ye?Ye.toString:Jt,en=function(){function t(){}return function(e){return It(e)?Fe?Fe(e):(t.prototype=e,e=new t,t.prototype=Jt,e):{}}}();b.prototype.clear=function(){
this.__data__=Ge?Ge(null):{},this.size=0},b.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},b.prototype.get=function(t){var e=this.__data__;return Ge?(t=e[t],"__lodash_hash_undefined__"===t?Jt:t):de.call(e,t)?e[t]:Jt},b.prototype.has=function(t){var e=this.__data__;return Ge?e[t]!==Jt:de.call(e,t)},b.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ge&&e===Jt?"__lodash_hash_undefined__":e,this},h.prototype.clear=function(){
this.__data__=[],this.size=0},h.prototype.delete=function(t){var e=this.__data__;return t=d(e,t),!(0>t)&&(t==e.length-1?e.pop():Ie.call(e,t,1),--this.size,true)},h.prototype.get=function(t){var e=this.__data__;return t=d(e,t),0>t?Jt:e[t][1]},h.prototype.has=function(t){return-1<d(this.__data__,t)},h.prototype.set=function(t,e){var n=this.__data__,r=d(n,t);return 0>r?(++this.size,n.push([t,e])):n[r][1]=e,this},p.prototype.clear=function(){this.size=0,this.__data__={hash:new b,map:new(Ne||h),string:new b
}},p.prototype.delete=function(t){return t=at(this,t).delete(t),this.size-=t?1:0,t},p.prototype.get=function(t){return at(this,t).get(t)},p.prototype.has=function(t){return at(this,t).has(t)},p.prototype.set=function(t,e){var n=at(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},y.prototype.add=y.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},y.prototype.has=function(t){return this.__data__.has(t)},j.prototype.clear=function(){this.__data__=new h,
this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},j.prototype.get=function(t){return this.__data__.get(t)},j.prototype.has=function(t){return this.__data__.has(t)},j.prototype.set=function(t,e){var n=this.__data__;if(n instanceof h){var r=n.__data__;if(!Ne||199>r.length)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new p(r)}return n.set(t,e),this.size=n.size,this};var nn=function(t,e){return function(n,r){if(null==n)return n;if(!xt(n))return t(n,r);
for(var o=n.length,c=e?o:-1,u=Object(n);(e?c--:++c<o)&&false!==r(u[c],c,u););return n}}(function(t,e){return t&&rn(t,e,Tt)}),rn=function(t){return function(e,n,r){var o=-1,c=Object(e);r=r(e);for(var u=r.length;u--;){var i=r[t?u:++o];if(false===n(c[i],i,c))break}return e}}(),on=Be?function(t,e){return Be(t,"toString",{configurable:true,enumerable:false,value:Nt(e),writable:true})}:Rt,cn=Pe?function(t){return null==t?[]:(t=Object(t),n(Pe(t),function(e){return Me.call(t,e)}))}:Gt,un=Pe?function(t){for(var e=[];t;)o(e,cn(t)),
t=Ee(t);return e}:Gt,an=E;(Ve&&"[object DataView]"!=an(new Ve(new ArrayBuffer(1)))||Ne&&"[object Map]"!=an(new Ne)||Re&&"[object Promise]"!=an(Re.resolve())||We&&"[object Set]"!=an(new We)||qe&&"[object WeakMap]"!=an(new qe))&&(an=function(t){var e=E(t);if(t=(t="[object Object]"==e?t.constructor:Jt)?wt(t):"")switch(t){case He:return"[object DataView]";case Je:return"[object Map]";case Ke:return"[object Promise]";case Qe:return"[object Set]";case Xe:return"[object WeakMap]"}return e});var fn=function(t){
var e=0,n=0;return function(){var r=Te(),o=16-(r-n);if(n=r,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(Jt,arguments)}}(on),ln=function(t){t=St(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,function(t,n,r,o){e.push(r?o.replace(Zt,"$1"):n||t)}),e});St.Cache=p;var sn=I(function(){return arguments}())?I:function(t){return Dt(t)&&de.call(t,"callee")&&!Me.call(t,"callee")},bn=Array.isArray,hn=Le||Ht,pn=he?i(he):U,yn=pe?i(pe):P,jn=ye?i(ye):L,_n=et(function(t,e,n){
N(t,e,n)}),gn=et(function(t,e,n,r){N(t,e,n,r)}),vn=function(t){return fn(dt(t,Jt,mt),t+"")}(function(t,e){var n={};if(null==t)return n;var o=false;e=r(e,function(e){return e=H(e,t),o||(o=1<e.length),e}),Y(t,ut(t),n),o&&(n=O(n,7,nt));for(var c=e.length;c--;)G(n,e[c]);return n});s.constant=Nt,s.flatten=mt,s.iteratee=Wt,s.keys=Tt,s.keysIn=Vt,s.memoize=St,s.merge=_n,s.mergeWith=gn,s.negate=zt,s.omit=vn,s.property=qt,s.reject=function(t,e){return(bn(t)?n:S)(t,zt(it(e,3)))},s.toPlainObject=Pt,s.cloneDeep=function(t){
return O(t,5)},s.cloneDeepWith=function(t,e){return e=typeof e=="function"?e:Jt,O(t,5,e)},s.eq=kt,s.get=$t,s.has=function(t,e){return null!=t&&st(t,e,F)},s.hasIn=Ct,s.identity=Rt,s.isArguments=sn,s.isArray=bn,s.isArrayLike=xt,s.isArrayLikeObject=Et,s.isBuffer=hn,s.isEmpty=function(t){if(null==t)return true;if(xt(t)&&(bn(t)||typeof t=="string"||typeof t.splice=="function"||hn(t)||jn(t)||sn(t)))return!t.length;var e=an(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(gt(t))return!C(t).length;
for(var n in t)if(de.call(t,n))return false;return true},s.isEqual=function(t,e){return D(t,e)},s.isFunction=Ft,s.isLength=Mt,s.isMap=pn,s.isNull=function(t){return null===t},s.isObject=It,s.isObjectLike=Dt,s.isPlainObject=Ut,s.isSet=yn,s.isSymbol=Bt,s.isTypedArray=jn,s.last=Ot,s.stubArray=Gt,s.stubFalse=Ht,s.toString=Lt,s.VERSION="4.17.5",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ae._=s, define(function(){return s})):le?((le.exports=s)._=s,fe._=s):ae._=s}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":23,"./_hashDelete":24,"./_hashGet":25,"./_hashHas":26,"./_hashSet":27}],3:[function(require,module,exports){
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":32,"./_listCacheDelete":33,"./_listCacheGet":34,"./_listCacheHas":35,"./_listCacheSet":36}],4:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":20,"./_root":45}],5:[function(require,module,exports){
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":37,"./_mapCacheDelete":38,"./_mapCacheGet":39,"./_mapCacheHas":40,"./_mapCacheSet":41}],6:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":45}],7:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],8:[function(require,module,exports){
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

},{"./_baseAssignValue":10,"./eq":49}],9:[function(require,module,exports){
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":49}],10:[function(require,module,exports){
var defineProperty = require('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":17}],11:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":6,"./_getRawTag":21,"./_objectToString":44}],12:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./_isMasked":31,"./_toSource":48,"./isFunction":51,"./isObject":52}],13:[function(require,module,exports){
var assignValue = require('./_assignValue'),
    castPath = require('./_castPath'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;

},{"./_assignValue":8,"./_castPath":15,"./_isIndex":28,"./_toKey":47,"./isObject":52}],14:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":6,"./_arrayMap":7,"./isArray":50,"./isSymbol":54}],15:[function(require,module,exports){
var isArray = require('./isArray'),
    isKey = require('./_isKey'),
    stringToPath = require('./_stringToPath'),
    toString = require('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

},{"./_isKey":29,"./_stringToPath":46,"./isArray":50,"./toString":57}],16:[function(require,module,exports){
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":45}],17:[function(require,module,exports){
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":20}],18:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],19:[function(require,module,exports){
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":30}],20:[function(require,module,exports){
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":12,"./_getValue":22}],21:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":6}],22:[function(require,module,exports){
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],23:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":43}],24:[function(require,module,exports){
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],25:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":43}],26:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":43}],27:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":43}],28:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],29:[function(require,module,exports){
var isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

},{"./isArray":50,"./isSymbol":54}],30:[function(require,module,exports){
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],31:[function(require,module,exports){
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":16}],32:[function(require,module,exports){
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],33:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":9}],34:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":9}],35:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":9}],36:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":9}],37:[function(require,module,exports){
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":2,"./_ListCache":3,"./_Map":4}],38:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":19}],39:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":19}],40:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":19}],41:[function(require,module,exports){
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":19}],42:[function(require,module,exports){
var memoize = require('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

},{"./memoize":55}],43:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":20}],44:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],45:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":18}],46:[function(require,module,exports){
var memoizeCapped = require('./_memoizeCapped');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

},{"./_memoizeCapped":42}],47:[function(require,module,exports){
var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

},{"./isSymbol":54}],48:[function(require,module,exports){
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],49:[function(require,module,exports){
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],50:[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],51:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":11,"./isObject":52}],52:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],53:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],54:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":11,"./isObjectLike":53}],55:[function(require,module,exports){
var MapCache = require('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"./_MapCache":5}],56:[function(require,module,exports){
var baseSet = require('./_baseSet');

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

},{"./_baseSet":13}],57:[function(require,module,exports){
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":14}],58:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const CONSTANTS = {
  /**
   * @typedef {String} ItemType
   **/

  /**
   * Enumeration of data layer item types.
   *
   * @enum {ItemType}
   * @readonly
   */
  itemType: {
    /** Represents an item of type data */
    DATA: 'data',
    /** Represents an item of type function */
    FCTN: 'fctn',
    /** Represents an item of type event */
    EVENT: 'event',
    /** Represents an item of type listener on */
    LISTENER_ON: 'listenerOn',
    /** Represents an item of type listener off */
    LISTENER_OFF: 'listenerOff'
  },

  /**
   * @typedef {String} DataLayerEvent
   **/

  /**
   * Enumeration of data layer events.
   *
   * @enum {DataLayerEvent}
   * @readonly
   */
  dataLayerEvent: {
    /** Represents an event triggered for any change in the data layer state */
    CHANGE: 'adobeDataLayer:change',
    /** Represents an event triggered for any event push to the data layer */
    EVENT: 'adobeDataLayer:event'
  },

  /**
   * @typedef {String} ListenerScope
   **/

  /**
   * Enumeration of listener scopes.
   *
   * @enum {ListenerScope}
   * @readonly
   */
  listenerScope: {
    /** Past events only */
    PAST: 'past',
    /** Future events only */
    FUTURE: 'future',
    /** All events, past and future */
    ALL: 'all'
  }
};

module.exports = CONSTANTS;

},{}],59:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const cloneDeep = _.cloneDeep;
const get = _.get;

const version = require('../version.json').version;
const Item = require('./item');
const Listener = require('./listener');
const ListenerManager = require('./listenerManager');
const CONSTANTS = require('./constants');
const customMerge = require('./utils/customMerge');
const set = require('lodash/set');

/**
 * Manager
 *
 * @class Manager
 * @classdesc Data Layer manager that augments the passed data layer array and handles eventing.
 * @param {Object} config The Data Layer manager configuration.
 */
module.exports = function(config) {
  const _config = config;
  let _dataLayer = [];
  let _state = {};
  let _previousStateCopy = {};
  let _listenerManager;

  const DataLayerManager = {
    getState: function() {
      return _state;
    },
    getDataLayer: function() {
      return _dataLayer;
    },
    getPreviousState: function() {
      return _previousStateCopy;
    }
  };

  _initialize();
  _augment();
  _processItems();

  /**
   * Initializes the data layer.
   *
   * @private
   */
  function _initialize() {
    if (!Array.isArray(_config.dataLayer)) {
      _config.dataLayer = [];
    }

    _dataLayer = _config.dataLayer;
    _dataLayer.version = version;
    _state = {};
    _previousStateCopy = {};
    _listenerManager = ListenerManager(DataLayerManager);
  };

  /**
   * Updates the state with the item.
   *
   * @param {Item} item The item.
   * @private
   */
  function _updateState(item) {
    _previousStateCopy = cloneDeep(_state);
    _state = customMerge(_state, item.data);
  };

  /**
   * Augments the data layer Array Object, overriding: push() and adding getState(), addEventListener and removeEventListener.
   *
   * @private
   */
  function _augment() {
    /**
     * Pushes one or more items to the data layer.
     *
     * @param {...ItemConfig} var_args The items to add to the data layer.
     * @returns {Number} The length of the data layer following push.
     */
    _dataLayer.push = function(var_args) { /* eslint-disable-line camelcase */
      const pushArguments = arguments;
      const filteredArguments = arguments;

      Object.keys(pushArguments).forEach(function(key) {
        const itemConfig = pushArguments[key];
        const item = Item(itemConfig);

        if (!item.valid) {
          delete filteredArguments[key];
        }
        switch (item.type) {
          case CONSTANTS.itemType.DATA:
          case CONSTANTS.itemType.EVENT: {
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.FCTN: {
            delete filteredArguments[key];
            _processItem(item);
            break;
          }
          case CONSTANTS.itemType.LISTENER_ON:
          case CONSTANTS.itemType.LISTENER_OFF: {
            delete filteredArguments[key];
          }
        }
      });

      if (filteredArguments[0]) {
        return Array.prototype.push.apply(this, filteredArguments);
      }
    };

    /**
     * Returns a deep copy of the data layer state or of the object defined by the path.
     *
     * @param {Array|String} path The path of the property to get.
     * @returns {*} Returns a deep copy of the resolved value if a path is passed, a deep copy of the data layer state otherwise.
     */
    _dataLayer.getState = function(path) {
      if (path) {
        return get(cloneDeep(_state), path);
      }
      return cloneDeep(_state);
    };

    /**
     * Event listener callback.
     *
     * @callback eventListenerCallback A function that is called when the event of the specified type occurs.
     * @this {DataLayer}
     * @param {Object} event The event object pushed to the data layer that triggered the callback.
     * @param {Object} [beforeState] The state before the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     * @param {Object} [afterState] The state after the change caused by the event. Available only when the event
     * object has data that modify the state. If a path filter option has been provided when registering the event,
     * the object will only contain the data at the defined path.
     */

    /**
     * Sets up a function that will be called whenever the specified event is triggered.
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {eventListenerCallback} callback A function that is called when the event of the specified type occurs.
     * @param {Object} [options] Optional characteristics of the event listener.
     * @param {String} [options.path] The path in the state object to filter the listening to.
     * @param {('past'|'future'|'all')} [options.scope] The timing to filter the listening to:
     *      - {String} past The listener is triggered for past events only.
     *      - {String} future The listener is triggered for future events only.
     *      - {String} all The listener is triggered for both past and future events (default value).
     */
    _dataLayer.addEventListener = function(type, callback, options) {
      const eventListenerItem = Item({
        on: type,
        handler: callback,
        scope: options && options.scope,
        path: options && options.path
      });

      _processItem(eventListenerItem);
    };

    /**
     * Removes an event listener previously registered with addEventListener().
     *
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {Function} [listener] Optional function that is to be removed.
     */
    _dataLayer.removeEventListener = function(type, listener) {
      const eventListenerItem = Item({
        off: type,
        handler: listener
      });

      _processItem(eventListenerItem);
    };

    /**
     * Resets the data layer.
     *
     * @param keepOptions Options include:
     * - paths: array of paths to keep
     * - events: array of events to keep
     * - history: true to keep the push history, false otherwise
     */
    _dataLayer.reset = function(keepOptions) {
      // Reset the push history
      const keepHistory = keepOptions && keepOptions.history;
      if (!keepHistory) {
        _dataLayer.length = 0;
      }

      // Reset the data layer state
      const filteredState = {};
      if (keepOptions && keepOptions.paths) {
        const paths = keepOptions.paths;
        paths.forEach(function(path) {
          const value = get(_state, path);
          if (value) {
            set(filteredState, path, value);
          }
        });
      }
      _state = filteredState;
      _previousStateCopy = {};

      // Reset the data layer listeners
      _listenerManager.resetListeners(keepOptions);
    };
  };

  /**
   * Processes all items that already exist on the stack.
   *
   * @private
   */
  function _processItems() {
    for (let i = 0; i < _dataLayer.length; i++) {
      const item = Item(_dataLayer[i], i);

      _processItem(item);

      // remove event listener or invalid item from the data layer array
      if (item.type === CONSTANTS.itemType.LISTENER_ON ||
        item.type === CONSTANTS.itemType.LISTENER_OFF ||
        item.type === CONSTANTS.itemType.FCTN ||
        !item.valid) {
        _dataLayer.splice(i, 1);
        i--;
      }
    }
  };

  /**
   * Processes an item pushed to the stack.
   *
   * @param {Item} item The item to process.
   * @private
   */
  function _processItem(item) {
    if (!item.valid) {
      const message = 'The following item cannot be handled by the data layer ' +
        'because it does not have a valid format: ' +
        JSON.stringify(item.config);
      console.error(message);
      return;
    }

    /**
     * Returns all items before the provided one.
     *
     * @param {Item} item The item.
     * @returns {Array<Item>} The items before.
     * @private
     */
    function _getBefore(item) {
      if (!(_dataLayer.length === 0 || item.index > _dataLayer.length - 1)) {
        return _dataLayer.slice(0, item.index).map(itemConfig => Item(itemConfig));
      }
      return [];
    }

    const typeProcessors = {
      data: function(item) {
        _updateState(item);
        _listenerManager.triggerListeners(item);
      },
      fctn: function(item) {
        item.config.call(_dataLayer, _dataLayer);
      },
      event: function(item) {
        if (item.data) {
          _updateState(item);
        }
        _listenerManager.triggerListeners(item);
      },
      listenerOn: function(item) {
        const listener = Listener(item);
        switch (listener.scope) {
          case CONSTANTS.listenerScope.PAST: {
            for (const registeredItem of _getBefore(item)) {
              _listenerManager.triggerListener(listener, registeredItem);
            }
            break;
          }
          case CONSTANTS.listenerScope.FUTURE: {
            _listenerManager.register(listener);
            break;
          }
          case CONSTANTS.listenerScope.ALL: {
            const registered = _listenerManager.register(listener);
            if (registered) {
              for (const registeredItem of _getBefore(item)) {
                _listenerManager.triggerListener(listener, registeredItem);
              }
            }
          }
        }
      },
      listenerOff: function(item) {
        _listenerManager.unregister(Listener(item));
      }
    };

    typeProcessors[item.type](item);
  };

  return DataLayerManager;
};

},{"../custom-lodash":1,"../version.json":70,"./constants":58,"./item":61,"./listener":63,"./listenerManager":64,"./utils/customMerge":66,"lodash/set":56}],60:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const DataLayerManager = require('./dataLayerManager');

/**
 * Data Layer.
 *
 * @type {Object}
 */
const DataLayer = {
  Manager: DataLayerManager
};

DataLayer.Manager({
  dataLayer: window.adobeDataLayer
});

/**
 * @typedef  {Object} ListenerOnConfig
 * @property {String} on Name of the event to bind to.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} handler Handler to execute when the bound event is triggered.
 */

/**
 * @typedef  {Object} ListenerOffConfig
 * @property {String} off Name of the event to unbind.
 * @property {String} [path] Object key in the state to bind to.
 * @property {ListenerScope} [scope] Scope of the listener.
 * @property {Function} [handler] Handler for a previously attached event to unbind.
 */

/**
 * @typedef {Object} DataConfig
 * @property {Object} data Data to be updated in the state.
 */

/**
 * @typedef {Object} EventConfig
 * @property {String} event Name of the event.
 * @property {Object} [eventInfo] Additional information to pass to the event handler.
 * @property {DataConfig.data} [data] Data to be updated in the state.
 */

/**
 * @typedef {DataConfig | EventConfig | ListenerOnConfig | ListenerOffConfig} ItemConfig
 */

/**
 * Triggered when there is change in the data layer state.
 *
 * @event DataLayerEvent.CHANGE
 * @type {Object}
 * @property {Object} data Data pushed that caused a change in the data layer state.
 */

/**
 * Triggered when an event is pushed to the data layer.
 *
 * @event DataLayerEvent.EVENT
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

/**
 * Triggered when an arbitrary event is pushed to the data layer.
 *
 * @event <custom>
 * @type {Object}
 * @property {String} name Name of the committed event.
 * @property {Object} eventInfo Additional information passed with the committed event.
 * @property {Object} data Data that was pushed alongside the event.
 */

module.exports = DataLayer;

},{"./dataLayerManager":59}],61:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const isPlainObject = _.isPlainObject;
const isEmpty = _.isEmpty;
const omit = _.omit;

const dataMatchesContraints = require('./utils/dataMatchesContraints');
const ITEM_CONSTRAINTS = require('./itemConstraints');
const CONSTANTS = require('./constants');

/**
 * Constructs a data layer item.
 *
 * @param {ItemConfig} itemConfig The data layer item configuration.
 * @param {Number} index The item index in the array of existing items.
 */

module.exports = function(itemConfig, index) {
  const _config = itemConfig;
  const _index = index;
  const _type = getType();
  const _data = getData();
  const _valid = !!_type;

  function getType() {
    return Object.keys(ITEM_CONSTRAINTS).find(key => dataMatchesContraints(_config, ITEM_CONSTRAINTS[key])) ||
      (typeof _config === 'function' && CONSTANTS.itemType.FCTN) ||
      (isPlainObject(_config) && CONSTANTS.itemType.DATA);
  }

  function getData() {
    const data = omit(_config, Object.keys(ITEM_CONSTRAINTS.event));
    if (!isEmpty(data)) {
      return data;
    }
  }

  return {
    /**
     * Returns the item configuration.
     *
     * @returns {ItemConfig} The item configuration.
     */
    config: _config,

    /**
     * Returns the item type.
     *
     * @returns {itemType} The item type.
     */
    type: _type,

    /**
     * Returns the item data.
     *
     * @returns {DataConfig} The item data.
     */
    data: _data,

    /**
     * Indicates whether the item is valid.
     *
     * @returns {Boolean} true if the item is valid, false otherwise.
     */
    valid: _valid,

    /**
     * Returns the index of the item in the array of existing items (added with the standard Array.prototype.push())
     *
     * @returns {Number} The index of the item in the array of existing items if it exists, -1 otherwise.
     */
    index: _index
  };
};

},{"../custom-lodash":1,"./constants":58,"./itemConstraints":62,"./utils/dataMatchesContraints":67}],62:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Constraints for each type of the item configuration.
 */

const itemConstraints = {
  event: {
    event: {
      type: 'string'
    },
    eventInfo: {
      optional: true
    }
  },
  listenerOn: {
    on: {
      type: 'string'
    },
    handler: {
      type: 'function'
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  },
  listenerOff: {
    off: {
      type: 'string'
    },
    handler: {
      type: 'function',
      optional: true
    },
    scope: {
      type: 'string',
      values: ['past', 'future', 'all'],
      optional: true
    },
    path: {
      type: 'string',
      optional: true
    }
  }
};

module.exports = itemConstraints;

},{}],63:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const CONSTANTS = require('./constants');

/**
 * Constructs a data layer listener.
 *
 * @param {Item} item The item from which to construct the listener.
 */

module.exports = function(item) {
  const _event = item.config.on || item.config.off;
  const _handler = item.config.handler || null;
  const _scope = item.config.scope || (item.config.on && CONSTANTS.listenerScope.ALL) || null;
  const _path = item.config.path || null;

  return {
    /**
     * Returns the listener event name.
     *
     * @returns {String} The listener event name.
     */
    event: _event,

    /**
     * Returns the listener handler.
     *
     * @returns {(Function|null)} The listener handler.
     */
    handler: _handler,

    /**
     * Returns the listener scope.
     *
     * @returns {(String|null)} The listener scope.
     */
    scope: _scope,

    /**
     * Returns the listener path.
     *
     * @returns {(String|null)} The listener path.
     */
    path: _path
  };
};

},{"./constants":58}],64:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../custom-lodash');
const cloneDeep = _.cloneDeep;
const get = _.get;

const constants = require('./constants');
const listenerMatch = require('./utils/listenerMatch');
const indexOfListener = require('./utils/indexOfListener');

/**
 * Creates a listener manager.
 *
 * @param {Manager} dataLayerManager The data layer manager.
 * @returns {ListenerManager} A listener manager.
 */
module.exports = function(dataLayerManager) {
  let _listeners = {};
  const _dataLayerManager = dataLayerManager;

  /**
   * Find index of listener in listeners object.
   */
  const _indexOfListener = indexOfListener.bind(null, _listeners);

  const ListenerManager = {
    /**
     * Registers a listener.
     *
     * @function
     * @param {Listener} listener The listener to register.
     * @returns {Boolean} true if the listener was registered, false otherwise.
     */
    register: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (_indexOfListener(listener) === -1) {
          _listeners[listener.event].push(listener);
          return true;
        }
      } else {
        _listeners[listener.event] = [listener];
        return true;
      }
      return false;
    },
    /**
     * Unregisters a listener.
     *
     * @function
     * @param {Listener} listener The listener to unregister.
     */
    unregister: function(listener) {
      const event = listener.event;

      if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
        if (!(listener.handler || listener.scope || listener.path)) {
          _listeners[event] = [];
        } else {
          const index = _indexOfListener(listener);
          if (index > -1) {
            _listeners[event].splice(index, 1);
          }
        }
      }
    },
    /**
     * Triggers listeners related to the passed item.
     *
     * @function
     * @param {Item} item Item to trigger listener for.
     */
    triggerListeners: function(item) {
      const triggeredEvents = _getTriggeredEvents(item);
      triggeredEvents.forEach(function(event) {
        if (Object.prototype.hasOwnProperty.call(_listeners, event)) {
          for (const listener of _listeners[event]) {
            _callHandler(listener, item, false);
          }
        }
      });
    },
    /**
     * Triggers a single listener on the passed item.
     *
     * @function
     * @param {Listener} listener Listener to call.
     * @param {Item} item Item to call the listener with.
     */
    triggerListener: function(listener, item) {
      _callHandler(listener, item, true);
    },
    // Resets the listeners based on the options of what to keep
    resetListeners: function(keepOptions) {
      const filteredListeners = {};
      if (keepOptions && keepOptions.events) {
        const events = keepOptions.events;
        events.forEach(function(event) {
          if (_listeners[event]) {
            filteredListeners[event] = _listeners[event];
          }
        });
      }
      _listeners = filteredListeners;
    }
  };

  /**
   * Calls the listener handler on the item if a match is found.
   *
   * @param {Listener} listener The listener.
   * @param {Item} item The item.
   * @param {Boolean} isPastItem Flag indicating whether the item was registered before the listener.
   * @private
   */
  function _callHandler(listener, item, isPastItem) {
    // Do not trigger event during initialization when event was pushed after adding listener and before DL initialization
    if (typeof item.index !== 'undefined') return;

    if (listenerMatch(listener, item)) {
      const callbackArgs = [cloneDeep(item.config)];

      if (item.data) {
        if (listener.path) {
          const oldValue = get(_dataLayerManager.getPreviousState(), listener.path);
          const newValue = get(cloneDeep(item.data), listener.path);
          callbackArgs.push(oldValue, newValue);
        } else if (!isPastItem) {
          const oldState = _dataLayerManager.getPreviousState();
          const newState = cloneDeep(_dataLayerManager.getState());
          callbackArgs.push(oldState, newState);
        }
      }

      listener.handler.apply(_dataLayerManager.getDataLayer(), callbackArgs);
    }
  }

  /**
   * Returns the names of the events that are triggered for this item.
   *
   * @param {Item} item The item.
   * @returns {Array<String>} The names of the events that are triggered for this item.
   * @private
   */
  function _getTriggeredEvents(item) {
    const triggeredEvents = [];

    switch (item.type) {
      case constants.itemType.DATA: {
        triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        break;
      }
      case constants.itemType.EVENT: {
        triggeredEvents.push(constants.dataLayerEvent.EVENT);
        if (item.data) triggeredEvents.push(constants.dataLayerEvent.CHANGE);
        if (item.config.event !== constants.dataLayerEvent.CHANGE) {
          triggeredEvents.push(item.config.event);
        }
        break;
      }
    }
    return triggeredEvents;
  }

  return ListenerManager;
};

},{"../custom-lodash":1,"./constants":58,"./utils/indexOfListener":68,"./utils/listenerMatch":69}],65:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;
const get = _.get;

/**
  * Checks if the object contains an ancestor that is set to null or undefined.
  *
  * @param {Object} object The object to check.
  * @param {String} path The path to check.
  * @returns {Boolean} true if the object contains an ancestor that is set to null or undefined, false otherwise.
  * @private
  */
module.exports = function(object, path) {
  let ancestorPath = path.substring(0, path.lastIndexOf('.'));
  while (ancestorPath) {
    if (has(object, ancestorPath)) {
      const ancestorValue = get(object, ancestorPath);
      if (ancestorValue === null || ancestorValue === undefined) {
        return true;
      }
    }
    ancestorPath = ancestorPath.substring(0, ancestorPath.lastIndexOf('.'));
  }

  return false;
};

},{"../../custom-lodash":1}],66:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const cloneDeepWith = _.cloneDeepWith;
const isObject = _.isObject;
const isArray = _.isArray;
const reject = _.reject;
const mergeWith = _.mergeWith;
const isNull = _.isNull;

/**
 * Merges the source into the object and sets objects as 'undefined' if they are 'undefined' in the source object.
 *
 * @param {Object} object The object into which to merge.
 * @param {Object} source The source to merge with.
 * @returns {Object} The object into which source was merged in.
 */
module.exports = function(object, source) {
  const makeOmittingCloneDeepCustomizer = function(predicate) {
    return function omittingCloneDeepCustomizer(value, key, object, stack) {
      if (isObject(value)) {
        if (isArray(value)) {
          return reject(value, predicate).map(item => cloneDeepWith(item, omittingCloneDeepCustomizer));
        }

        const clone = {};
        for (const subKey of Object.keys(value)) {
          if (!predicate(value[subKey])) {
            clone[subKey] = cloneDeepWith(value[subKey], omittingCloneDeepCustomizer);
          }
        }
        return clone;
      }
      return undefined;
    };
  };

  const customizer = function(objValue, srcValue, key, object) {
    if (typeof srcValue === 'undefined' || srcValue === null) {
      return null;
    }
  };

  const omitDeep = function(value, predicate = (val) => !val) {
    return cloneDeepWith(value, makeOmittingCloneDeepCustomizer(predicate));
  };

  mergeWith(object, source, customizer);

  // Remove null or undefined objects
  object = omitDeep(object, isNull);

  return object;
};

},{"../../custom-lodash":1}],67:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = function(data, constraints) {
  // Go through all constraints and find one which does not match the data
  const foundObjection = Object.keys(constraints).find(key => {
    const type = constraints[key].type;
    const supportedValues = constraints[key].values;
    const mandatory = !constraints[key].optional;
    const value = data[key];
    const valueType = typeof value;
    const incorrectType = type && valueType !== type;
    const noMatchForSupportedValues = supportedValues && !supportedValues.includes(value);
    if (mandatory) {
      return !value || incorrectType || noMatchForSupportedValues;
    } else {
      return value && (incorrectType || noMatchForSupportedValues);
    }
  });
  // If no objections found then data matches contraints
  return typeof foundObjection === 'undefined';
};

},{}],68:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const isEqual = _.isEqual;

module.exports = function(listeners, listener) {
  const event = listener.event;

  if (Object.prototype.hasOwnProperty.call(listeners, event)) {
    for (const [index, registeredListener] of listeners[event].entries()) {
      if (isEqual(registeredListener.handler, listener.handler)) {
        return index;
      }
    }
  }
  return -1;
};

},{"../../custom-lodash":1}],69:[function(require,module,exports){
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const _ = require('../../custom-lodash');
const has = _.has;

const CONSTANTS = require('../constants');
const ancestorRemoved = require('./ancestorRemoved');

/**
 * Checks if the listener matches the item.
 *
 * @param {Listener} listener The listener.
 * @param {Item} item The item.
 * @returns {Boolean} true if listener matches the item, false otherwise.
 */
function listenerMatch(listener, item) {
  const event = listener.event;
  const itemConfig = item.config;
  let matches = false;

  if (item.type === CONSTANTS.itemType.DATA) {
    if (event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  } else if (item.type === CONSTANTS.itemType.EVENT) {
    if (event === CONSTANTS.dataLayerEvent.EVENT || event === itemConfig.event) {
      matches = selectorMatches(listener, item);
    }
    if (item.data && event === CONSTANTS.dataLayerEvent.CHANGE) {
      matches = selectorMatches(listener, item);
    }
  }

  return matches;
}

/**
 * Checks if a listener has a selector that points to an object in the data payload of an item.
 *
 * @param {Listener} listener The listener to extract the selector from.
 * @param {Item} item The item.
 * @returns {Boolean} true if a selector is not provided or if the given selector is matching, false otherwise.
 * @private
 */
function selectorMatches(listener, item) {
  if (item.data && listener.path) {
    return has(item.data, listener.path) || ancestorRemoved(item.data, listener.path);
  }

  return true;
}

module.exports = listenerMatch;

},{"../../custom-lodash":1,"../constants":58,"./ancestorRemoved":65}],70:[function(require,module,exports){
module.exports={
  "version": "1.1.0"
}

},{}]},{},[60])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjdXN0b20tbG9kYXNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9zZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwic3JjL2NvbnN0YW50cy5qcyIsInNyYy9kYXRhTGF5ZXJNYW5hZ2VyLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL2l0ZW0uanMiLCJzcmMvaXRlbUNvbnN0cmFpbnRzLmpzIiwic3JjL2xpc3RlbmVyLmpzIiwic3JjL2xpc3RlbmVyTWFuYWdlci5qcyIsInNyYy91dGlscy9hbmNlc3RvclJlbW92ZWQuanMiLCJzcmMvdXRpbHMvY3VzdG9tTWVyZ2UuanMiLCJzcmMvdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzLmpzIiwic3JjL3V0aWxzL2luZGV4T2ZMaXN0ZW5lci5qcyIsInNyYy91dGlscy9saXN0ZW5lck1hdGNoLmpzIiwidmVyc2lvbi5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIGxvZGFzaC5jb20vbGljZW5zZSB8IFVuZGVyc2NvcmUuanMgMS44LjMgdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFXG4gKiBCdWlsZDogYGxvZGFzaCBpbmNsdWRlPVwiY2xvbmVEZWVwLGNsb25lRGVlcFdpdGgsZ2V0LGhhcyxpc0VtcHR5LGlzRXF1YWwsaXNOdWxsLGlzUGxhaW5PYmplY3QsaXNPYmplY3QsbWVyZ2UsbWVyZ2VXaXRoLG9taXQscmVqZWN0XCIgLXAgLW8gY3VzdG9tLWxvZGFzaC5qc2BcbiAqL1xuOyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxuWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxuWzBdLG5bMV0sblsyXSl9cmV0dXJuIHQuYXBwbHkoZSxuKX1mdW5jdGlvbiBlKHQsZSl7Zm9yKHZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoOysrbjxyJiZmYWxzZSE9PWUodFtuXSxuLHQpOyk7fWZ1bmN0aW9uIG4odCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGgsbz0wLGM9W107KytuPHI7KXt2YXIgdT10W25dO2UodSxuLHQpJiYoY1tvKytdPXUpfXJldHVybiBjfWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49LTEscj1udWxsPT10PzA6dC5sZW5ndGgsbz1BcnJheShyKTsrK248cjspb1tuXT1lKHRbbl0sbix0KTtyZXR1cm4gb31mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPS0xLHI9ZS5sZW5ndGgsbz10Lmxlbmd0aDsrK248cjspdFtvK25dPWVbbl07XG5yZXR1cm4gdH1mdW5jdGlvbiBjKHQsZSl7Zm9yKHZhciBuPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoOysrbjxyOylpZihlKHRbbl0sbix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gdSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/SnQ6ZVt0XX19ZnVuY3Rpb24gaSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQoZSl9fWZ1bmN0aW9uIGEodCl7dmFyIGU9LTEsbj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxyKXtuWysrZV09W3IsdF19KSxufWZ1bmN0aW9uIGYodCl7dmFyIGU9T2JqZWN0O3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChlKG4pKX19ZnVuY3Rpb24gbCh0KXt2YXIgZT0tMSxuPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtuWysrZV09dH0pLG59ZnVuY3Rpb24gcygpe31mdW5jdGlvbiBiKHQpe3ZhciBlPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPG47KXtcbnZhciByPXRbZV07dGhpcy5zZXQoclswXSxyWzFdKX19ZnVuY3Rpb24gaCh0KXt2YXIgZT0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxuOyl7dmFyIHI9dFtlXTt0aGlzLnNldChyWzBdLHJbMV0pfX1mdW5jdGlvbiBwKHQpe3ZhciBlPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPG47KXt2YXIgcj10W2VdO3RoaXMuc2V0KHJbMF0sclsxXSl9fWZ1bmN0aW9uIHkodCl7dmFyIGU9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IHA7KytlPG47KXRoaXMuYWRkKHRbZV0pfWZ1bmN0aW9uIGoodCl7dGhpcy5zaXplPSh0aGlzLl9fZGF0YV9fPW5ldyBoKHQpKS5zaXplfWZ1bmN0aW9uIF8odCxlKXt2YXIgbj1ibih0KSxyPSFuJiZzbih0KSxvPSFuJiYhciYmaG4odCksYz0hbiYmIXImJiFvJiZqbih0KTtpZihuPW58fHJ8fG98fGMpe2Zvcih2YXIgcj10Lmxlbmd0aCx1PVN0cmluZyxpPS0xLGE9QXJyYXkocik7KytpPHI7KWFbaV09dShpKTtcbnI9YX1lbHNlIHI9W107dmFyIGYsdT1yLmxlbmd0aDtmb3IoZiBpbiB0KSFlJiYhZGUuY2FsbCh0LGYpfHxuJiYoXCJsZW5ndGhcIj09Znx8byYmKFwib2Zmc2V0XCI9PWZ8fFwicGFyZW50XCI9PWYpfHxjJiYoXCJidWZmZXJcIj09Znx8XCJieXRlTGVuZ3RoXCI9PWZ8fFwiYnl0ZU9mZnNldFwiPT1mKXx8anQoZix1KSl8fHIucHVzaChmKTtyZXR1cm4gcn1mdW5jdGlvbiBnKHQsZSxuKXsobj09PUp0fHxrdCh0W2VdLG4pKSYmKG4hPT1KdHx8ZSBpbiB0KXx8bSh0LGUsbil9ZnVuY3Rpb24gdih0LGUsbil7dmFyIHI9dFtlXTtkZS5jYWxsKHQsZSkmJmt0KHIsbikmJihuIT09SnR8fGUgaW4gdCl8fG0odCxlLG4pfWZ1bmN0aW9uIGQodCxlKXtmb3IodmFyIG49dC5sZW5ndGg7bi0tOylpZihrdCh0W25dWzBdLGUpKXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIEEodCxlKXtyZXR1cm4gdCYmWShlLFR0KGUpLHQpfWZ1bmN0aW9uIHcodCxlKXtyZXR1cm4gdCYmWShlLFZ0KGUpLHQpfWZ1bmN0aW9uIG0odCxlLG4pe1xuXCJfX3Byb3RvX19cIj09ZSYmQmU/QmUodCxlLHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOnRydWUsdmFsdWU6bix3cml0YWJsZTp0cnVlfSk6dFtlXT1ufWZ1bmN0aW9uIE8odCxuLHIsbyxjLHUpe3ZhciBpLGE9MSZuLGY9MiZuLGw9NCZuO2lmKHImJihpPWM/cih0LG8sYyx1KTpyKHQpKSxpIT09SnQpcmV0dXJuIGk7aWYoIUl0KHQpKXJldHVybiB0O2lmKG89Ym4odCkpe2lmKGk9YnQodCksIWEpcmV0dXJuIFgodCxpKX1lbHNle3ZhciBzPWFuKHQpLGI9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1zfHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXM7aWYoaG4odCkpcmV0dXJuIEoodCxhKTtpZihcIltvYmplY3QgT2JqZWN0XVwiPT1zfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1zfHxiJiYhYyl7aWYoaT1mfHxiP3t9Omh0KHQpLCFhKXJldHVybiBmP3R0KHQsdyhpLHQpKTpaKHQsQShpLHQpKX1lbHNle2lmKCFvZVtzXSlyZXR1cm4gYz90Ont9O2k9cHQodCxzLGEpfX1pZih1fHwodT1uZXcgaiksXG5jPXUuZ2V0KHQpKXJldHVybiBjO2lmKHUuc2V0KHQsaSkseW4odCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXtpLmFkZChPKGUsbixyLGUsdCx1KSl9KSxpO2lmKHBuKHQpKXJldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSxvKXtpLnNldChvLE8oZSxuLHIsbyx0LHUpKX0pLGk7dmFyIGY9bD9mP3V0OmN0OmY/VnQ6VHQsaD1vP0p0OmYodCk7cmV0dXJuIGUoaHx8dCxmdW5jdGlvbihlLG8pe2gmJihvPWUsZT10W29dKSx2KGksbyxPKGUsbixyLG8sdCx1KSl9KSxpfWZ1bmN0aW9uIFModCxlKXt2YXIgbj1bXTtyZXR1cm4gbm4odCxmdW5jdGlvbih0LHIsbyl7ZSh0LHIsbykmJm4ucHVzaCh0KX0pLG59ZnVuY3Rpb24geih0LGUsbixyLGMpe3ZhciB1PS0xLGk9dC5sZW5ndGg7Zm9yKG58fChuPXl0KSxjfHwoYz1bXSk7Kyt1PGk7KXt2YXIgYT10W3VdOzA8ZSYmbihhKT8xPGU/eihhLGUtMSxuLHIsYyk6byhjLGEpOnJ8fChjW2MubGVuZ3RoXT1hKX1yZXR1cm4gY31mdW5jdGlvbiBrKHQsZSl7XG5lPUgoZSx0KTtmb3IodmFyIG49MCxyPWUubGVuZ3RoO251bGwhPXQmJm48cjspdD10W0F0KGVbbisrXSldO3JldHVybiBuJiZuPT1yP3Q6SnR9ZnVuY3Rpb24geCh0LGUsbil7cmV0dXJuIGU9ZSh0KSxibih0KT9lOm8oZSxuKHQpKX1mdW5jdGlvbiBFKHQpe2lmKG51bGw9PXQpdD10PT09SnQ/XCJbb2JqZWN0IFVuZGVmaW5lZF1cIjpcIltvYmplY3QgTnVsbF1cIjtlbHNlIGlmKFVlJiZVZSBpbiBPYmplY3QodCkpe3ZhciBlPWRlLmNhbGwodCxVZSksbj10W1VlXTt0cnl7dFtVZV09SnQ7dmFyIHI9dHJ1ZX1jYXRjaCh0KXt9dmFyIG89d2UuY2FsbCh0KTtyJiYoZT90W1VlXT1uOmRlbGV0ZSB0W1VlXSksdD1vfWVsc2UgdD13ZS5jYWxsKHQpO3JldHVybiB0fWZ1bmN0aW9uIEYodCxlKXtyZXR1cm4gbnVsbCE9dCYmZGUuY2FsbCh0LGUpfWZ1bmN0aW9uIE0odCxlKXtyZXR1cm4gbnVsbCE9dCYmZSBpbiBPYmplY3QodCl9ZnVuY3Rpb24gSSh0KXtyZXR1cm4gRHQodCkmJlwiW29iamVjdCBBcmd1bWVudHNdXCI9PUUodCk7XG59ZnVuY3Rpb24gRCh0LGUsbixyLG8pe2lmKHQ9PT1lKWU9dHJ1ZTtlbHNlIGlmKG51bGw9PXR8fG51bGw9PWV8fCFEdCh0KSYmIUR0KGUpKWU9dCE9PXQmJmUhPT1lO2Vsc2UgdDp7dmFyIGM9Ym4odCksdT1ibihlKSxpPWM/XCJbb2JqZWN0IEFycmF5XVwiOmFuKHQpLGE9dT9cIltvYmplY3QgQXJyYXldXCI6YW4oZSksaT1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1pP1wiW29iamVjdCBPYmplY3RdXCI6aSxhPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWE/XCJbb2JqZWN0IE9iamVjdF1cIjphLGY9XCJbb2JqZWN0IE9iamVjdF1cIj09aSx1PVwiW29iamVjdCBPYmplY3RdXCI9PWE7aWYoKGE9aT09YSkmJmhuKHQpKXtpZighaG4oZSkpe2U9ZmFsc2U7YnJlYWsgdH1jPXRydWUsZj1mYWxzZX1pZihhJiYhZilvfHwobz1uZXcgaiksZT1jfHxqbih0KT9ydCh0LGUsbixyLEQsbyk6b3QodCxlLGksbixyLEQsbyk7ZWxzZXtpZighKDEmbikmJihjPWYmJmRlLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLGk9dSYmZGUuY2FsbChlLFwiX193cmFwcGVkX19cIiksXG5jfHxpKSl7dD1jP3QudmFsdWUoKTp0LGU9aT9lLnZhbHVlKCk6ZSxvfHwobz1uZXcgaiksZT1EKHQsZSxuLHIsbyk7YnJlYWsgdH1pZihhKWU6aWYob3x8KG89bmV3IGopLGM9MSZuLGk9Y3QodCksdT1pLmxlbmd0aCxhPWN0KGUpLmxlbmd0aCx1PT1hfHxjKXtmb3IoZj11O2YtLTspe3ZhciBsPWlbZl07aWYoIShjP2wgaW4gZTpkZS5jYWxsKGUsbCkpKXtlPWZhbHNlO2JyZWFrIGV9fWlmKChhPW8uZ2V0KHQpKSYmby5nZXQoZSkpZT1hPT1lO2Vsc2V7YT10cnVlLG8uc2V0KHQsZSksby5zZXQoZSx0KTtmb3IodmFyIHM9YzsrK2Y8dTspe3ZhciBsPWlbZl0sYj10W2xdLGg9ZVtsXTtpZihyKXZhciBwPWM/cihoLGIsbCxlLHQsbyk6cihiLGgsbCx0LGUsbyk7aWYocD09PUp0P2IhPT1oJiYhRChiLGgsbixyLG8pOiFwKXthPWZhbHNlO2JyZWFrfXN8fChzPVwiY29uc3RydWN0b3JcIj09bCl9YSYmIXMmJihuPXQuY29uc3RydWN0b3Iscj1lLmNvbnN0cnVjdG9yLG4hPXImJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIGUmJiEodHlwZW9mIG49PVwiZnVuY3Rpb25cIiYmbiBpbnN0YW5jZW9mIG4mJnR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByKSYmKGE9ZmFsc2UpKSxcbm8uZGVsZXRlKHQpLG8uZGVsZXRlKGUpLGU9YX19ZWxzZSBlPWZhbHNlO2Vsc2UgZT1mYWxzZX19cmV0dXJuIGV9ZnVuY3Rpb24gVSh0KXtyZXR1cm4gRHQodCkmJlwiW29iamVjdCBNYXBdXCI9PWFuKHQpfWZ1bmN0aW9uIEIodCxlKXt2YXIgbj1lLmxlbmd0aCxyPW47aWYobnVsbD09dClyZXR1cm4hcjtmb3IodD1PYmplY3QodCk7bi0tOyl7dmFyIG89ZVtuXTtpZihvWzJdP29bMV0hPT10W29bMF1dOiEob1swXWluIHQpKXJldHVybiBmYWxzZX1mb3IoOysrbjxyOyl7dmFyIG89ZVtuXSxjPW9bMF0sdT10W2NdLGk9b1sxXTtpZihvWzJdKXtpZih1PT09SnQmJiEoYyBpbiB0KSlyZXR1cm4gZmFsc2V9ZWxzZSBpZihvPW5ldyBqLHZvaWQgMD09PUp0PyFEKGksdSwzLHZvaWQgMCxvKToxKXJldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBQKHQpe3JldHVybiBEdCh0KSYmXCJbb2JqZWN0IFNldF1cIj09YW4odCl9ZnVuY3Rpb24gTCh0KXtyZXR1cm4gRHQodCkmJk10KHQubGVuZ3RoKSYmISFyZVtFKHQpXX1mdW5jdGlvbiAkKHQpe1xucmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpudWxsPT10P1J0OnR5cGVvZiB0PT1cIm9iamVjdFwiP2JuKHQpP1YodFswXSx0WzFdKTpUKHQpOnF0KHQpfWZ1bmN0aW9uIEModCl7aWYoIWd0KHQpKXJldHVybiAkZSh0KTt2YXIgZSxuPVtdO2ZvcihlIGluIE9iamVjdCh0KSlkZS5jYWxsKHQsZSkmJlwiY29uc3RydWN0b3JcIiE9ZSYmbi5wdXNoKGUpO3JldHVybiBufWZ1bmN0aW9uIFQodCl7dmFyIGU9ZnQodCk7cmV0dXJuIDE9PWUubGVuZ3RoJiZlWzBdWzJdP3Z0KGVbMF1bMF0sZVswXVsxXSk6ZnVuY3Rpb24obil7cmV0dXJuIG49PT10fHxCKG4sZSl9fWZ1bmN0aW9uIFYodCxlKXtyZXR1cm4gX3QodCkmJmU9PT1lJiYhSXQoZSk/dnQoQXQodCksZSk6ZnVuY3Rpb24obil7dmFyIHI9JHQobix0KTtyZXR1cm4gcj09PUp0JiZyPT09ZT9DdChuLHQpOkQoZSxyLDMpfX1mdW5jdGlvbiBOKHQsZSxuLHIsbyl7dCE9PWUmJnJuKGUsZnVuY3Rpb24oYyx1KXtpZihJdChjKSl7b3x8KG89bmV3IGopO1xudmFyIGk9byxhPVwiX19wcm90b19fXCI9PXU/SnQ6dFt1XSxmPVwiX19wcm90b19fXCI9PXU/SnQ6ZVt1XSxsPWkuZ2V0KGYpO2lmKGwpZyh0LHUsbCk7ZWxzZXt2YXIgbD1yP3IoYSxmLHUrXCJcIix0LGUsaSk6SnQscz1sPT09SnQ7aWYocyl7dmFyIGI9Ym4oZiksaD0hYiYmaG4oZikscD0hYiYmIWgmJmpuKGYpLGw9ZjtifHxofHxwP2JuKGEpP2w9YTpFdChhKT9sPVgoYSk6aD8ocz1mYWxzZSxsPUooZix0cnVlKSk6cD8ocz1mYWxzZSxsPVEoZix0cnVlKSk6bD1bXTpVdChmKXx8c24oZik/KGw9YSxzbihhKT9sPVB0KGEpOighSXQoYSl8fG4mJkZ0KGEpKSYmKGw9aHQoZikpKTpzPWZhbHNlfXMmJihpLnNldChmLGwpLE4obCxmLG4scixpKSxpLmRlbGV0ZShmKSksZyh0LHUsbCl9fWVsc2UgaT1yP3IoXCJfX3Byb3RvX19cIj09dT9KdDp0W3VdLGMsdStcIlwiLHQsZSxvKTpKdCxpPT09SnQmJihpPWMpLGcodCx1LGkpfSxWdCl9ZnVuY3Rpb24gUih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSx0KX19ZnVuY3Rpb24gVyh0KXtcbnJldHVybiBmbihkdCh0LHZvaWQgMCxSdCksdCtcIlwiKX1mdW5jdGlvbiBxKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiB0O2lmKGJuKHQpKXJldHVybiByKHQscSkrXCJcIjtpZihCdCh0KSlyZXR1cm4gdG4/dG4uY2FsbCh0KTpcIlwiO3ZhciBlPXQrXCJcIjtyZXR1cm5cIjBcIj09ZSYmMS90PT0tS3Q/XCItMFwiOmV9ZnVuY3Rpb24gRyh0LGUpe2U9SChlLHQpO3ZhciBuO2lmKDI+ZS5sZW5ndGgpbj10O2Vsc2V7bj1lO3ZhciByPTAsbz0tMSxjPS0xLHU9bi5sZW5ndGg7Zm9yKDA+ciYmKHI9LXI+dT8wOnUrciksbz1vPnU/dTpvLDA+byYmKG8rPXUpLHU9cj5vPzA6by1yPj4+MCxyPj4+PTAsbz1BcnJheSh1KTsrK2M8dTspb1tjXT1uW2Mrcl07bj1rKHQsbyl9dD1uLG51bGw9PXR8fGRlbGV0ZSB0W0F0KE90KGUpKV19ZnVuY3Rpb24gSCh0LGUpe3JldHVybiBibih0KT90Ol90KHQsZSk/W3RdOmxuKEx0KHQpKX1mdW5jdGlvbiBKKHQsZSl7aWYoZSlyZXR1cm4gdC5zbGljZSgpO3ZhciBuPXQubGVuZ3RoLG49eGU/eGUobik6bmV3IHQuY29uc3RydWN0b3Iobik7XG5yZXR1cm4gdC5jb3B5KG4pLG59ZnVuY3Rpb24gSyh0KXt2YXIgZT1uZXcgdC5jb25zdHJ1Y3Rvcih0LmJ5dGVMZW5ndGgpO3JldHVybiBuZXcga2UoZSkuc2V0KG5ldyBrZSh0KSksZX1mdW5jdGlvbiBRKHQsZSl7cmV0dXJuIG5ldyB0LmNvbnN0cnVjdG9yKGU/Syh0LmJ1ZmZlcik6dC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQubGVuZ3RoKX1mdW5jdGlvbiBYKHQsZSl7dmFyIG49LTEscj10Lmxlbmd0aDtmb3IoZXx8KGU9QXJyYXkocikpOysrbjxyOyllW25dPXRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gWSh0LGUsbil7dmFyIHI9IW47bnx8KG49e30pO2Zvcih2YXIgbz0tMSxjPWUubGVuZ3RoOysrbzxjOyl7dmFyIHU9ZVtvXSxpPUp0O2k9PT1KdCYmKGk9dFt1XSkscj9tKG4sdSxpKTp2KG4sdSxpKX1yZXR1cm4gbn1mdW5jdGlvbiBaKHQsZSl7cmV0dXJuIFkodCxjbih0KSxlKX1mdW5jdGlvbiB0dCh0LGUpe3JldHVybiBZKHQsdW4odCksZSl9ZnVuY3Rpb24gZXQodCl7cmV0dXJuIFcoZnVuY3Rpb24oZSxuKXtcbnZhciByLG89LTEsYz1uLmxlbmd0aCx1PTE8Yz9uW2MtMV06SnQsaT0yPGM/blsyXTpKdCx1PTM8dC5sZW5ndGgmJnR5cGVvZiB1PT1cImZ1bmN0aW9uXCI/KGMtLSx1KTpKdDtpZihyPWkpe3I9blswXTt2YXIgYT1uWzFdO2lmKEl0KGkpKXt2YXIgZj10eXBlb2YgYTtyPSEhKFwibnVtYmVyXCI9PWY/eHQoaSkmJmp0KGEsaS5sZW5ndGgpOlwic3RyaW5nXCI9PWYmJmEgaW4gaSkmJmt0KGlbYV0scil9ZWxzZSByPWZhbHNlfWZvcihyJiYodT0zPmM/SnQ6dSxjPTEpLGU9T2JqZWN0KGUpOysrbzxjOykoaT1uW29dKSYmdChlLGksbyx1KTtyZXR1cm4gZX0pfWZ1bmN0aW9uIG50KHQpe3JldHVybiBVdCh0KT9KdDp0fWZ1bmN0aW9uIHJ0KHQsZSxuLHIsbyx1KXt2YXIgaT0xJm4sYT10Lmxlbmd0aCxmPWUubGVuZ3RoO2lmKGEhPWYmJiEoaSYmZj5hKSlyZXR1cm4gZmFsc2U7aWYoKGY9dS5nZXQodCkpJiZ1LmdldChlKSlyZXR1cm4gZj09ZTt2YXIgZj0tMSxsPXRydWUscz0yJm4/bmV3IHk6SnQ7Zm9yKHUuc2V0KHQsZSksXG51LnNldChlLHQpOysrZjxhOyl7dmFyIGI9dFtmXSxoPWVbZl07aWYocil2YXIgcD1pP3IoaCxiLGYsZSx0LHUpOnIoYixoLGYsdCxlLHUpO2lmKHAhPT1KdCl7aWYocCljb250aW51ZTtsPWZhbHNlO2JyZWFrfWlmKHMpe2lmKCFjKGUsZnVuY3Rpb24odCxlKXtpZighcy5oYXMoZSkmJihiPT09dHx8byhiLHQsbixyLHUpKSlyZXR1cm4gcy5wdXNoKGUpfSkpe2w9ZmFsc2U7YnJlYWt9fWVsc2UgaWYoYiE9PWgmJiFvKGIsaCxuLHIsdSkpe2w9ZmFsc2U7YnJlYWt9fXJldHVybiB1LmRlbGV0ZSh0KSx1LmRlbGV0ZShlKSxsfWZ1bmN0aW9uIG90KHQsZSxuLHIsbyxjLHUpe3N3aXRjaChuKXtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOmlmKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHx0LmJ5dGVPZmZzZXQhPWUuYnl0ZU9mZnNldClicmVhazt0PXQuYnVmZmVyLGU9ZS5idWZmZXI7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjppZih0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8IWMobmV3IGtlKHQpLG5ldyBrZShlKSkpYnJlYWs7XG5yZXR1cm4gdHJ1ZTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOmNhc2VcIltvYmplY3QgTnVtYmVyXVwiOnJldHVybiBrdCgrdCwrZSk7Y2FzZVwiW29iamVjdCBFcnJvcl1cIjpyZXR1cm4gdC5uYW1lPT1lLm5hbWUmJnQubWVzc2FnZT09ZS5tZXNzYWdlO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiB0PT1lK1wiXCI7Y2FzZVwiW29iamVjdCBNYXBdXCI6dmFyIGk9YTtjYXNlXCJbb2JqZWN0IFNldF1cIjppZihpfHwoaT1sKSx0LnNpemUhPWUuc2l6ZSYmISgxJnIpKWJyZWFrO3JldHVybihuPXUuZ2V0KHQpKT9uPT1lOihyfD0yLHUuc2V0KHQsZSksZT1ydChpKHQpLGkoZSkscixvLGMsdSksdS5kZWxldGUodCksZSk7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6aWYoWmUpcmV0dXJuIFplLmNhbGwodCk9PVplLmNhbGwoZSl9cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGN0KHQpe3JldHVybiB4KHQsVHQsY24pfWZ1bmN0aW9uIHV0KHQpe3JldHVybiB4KHQsVnQsdW4pO1xufWZ1bmN0aW9uIGl0KCl7dmFyIHQ9cy5pdGVyYXRlZXx8V3QsdD10PT09V3Q/JDp0O3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBhdCh0LGUpe3ZhciBuPXQuX19kYXRhX18scj10eXBlb2YgZTtyZXR1cm4oXCJzdHJpbmdcIj09cnx8XCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIj09cnx8XCJib29sZWFuXCI9PXI/XCJfX3Byb3RvX19cIiE9PWU6bnVsbD09PWUpP25bdHlwZW9mIGU9PVwic3RyaW5nXCI/XCJzdHJpbmdcIjpcImhhc2hcIl06bi5tYXB9ZnVuY3Rpb24gZnQodCl7Zm9yKHZhciBlPVR0KHQpLG49ZS5sZW5ndGg7bi0tOyl7dmFyIHI9ZVtuXSxvPXRbcl07ZVtuXT1bcixvLG89PT1vJiYhSXQobyldfXJldHVybiBlfWZ1bmN0aW9uIGx0KHQsZSl7dmFyIG49bnVsbD09dD9KdDp0W2VdO3JldHVybighSXQobil8fEFlJiZBZSBpbiBuPzA6KEZ0KG4pP09lOmVlKS50ZXN0KHd0KG4pKSk/bjpKdH1mdW5jdGlvbiBzdCh0LGUsbil7ZT1IKGUsdCk7XG5mb3IodmFyIHI9LTEsbz1lLmxlbmd0aCxjPWZhbHNlOysrcjxvOyl7dmFyIHU9QXQoZVtyXSk7aWYoIShjPW51bGwhPXQmJm4odCx1KSkpYnJlYWs7dD10W3VdfXJldHVybiBjfHwrK3IhPW8/Yzoobz1udWxsPT10PzA6dC5sZW5ndGgsISFvJiZNdChvKSYmanQodSxvKSYmKGJuKHQpfHxzbih0KSkpfWZ1bmN0aW9uIGJ0KHQpe3ZhciBlPXQubGVuZ3RoLG49bmV3IHQuY29uc3RydWN0b3IoZSk7cmV0dXJuIGUmJlwic3RyaW5nXCI9PXR5cGVvZiB0WzBdJiZkZS5jYWxsKHQsXCJpbmRleFwiKSYmKG4uaW5kZXg9dC5pbmRleCxuLmlucHV0PXQuaW5wdXQpLG59ZnVuY3Rpb24gaHQodCl7cmV0dXJuIHR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fGd0KHQpP3t9OmVuKEVlKHQpKX1mdW5jdGlvbiBwdCh0LGUsbil7dmFyIHI9dC5jb25zdHJ1Y3Rvcjtzd2l0Y2goZSl7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjpyZXR1cm4gSyh0KTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOlxucmV0dXJuIG5ldyByKCt0KTtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOnJldHVybiBlPW4/Syh0LmJ1ZmZlcik6dC5idWZmZXIsbmV3IHQuY29uc3RydWN0b3IoZSx0LmJ5dGVPZmZzZXQsdC5ieXRlTGVuZ3RoKTtjYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpyZXR1cm4gUSh0LG4pO2Nhc2VcIltvYmplY3QgTWFwXVwiOnJldHVybiBuZXcgcjtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gbmV3IHIodCk7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6cmV0dXJuIGU9bmV3IHQuY29uc3RydWN0b3IodC5zb3VyY2UsdGUuZXhlYyh0KSksXG5lLmxhc3RJbmRleD10Lmxhc3RJbmRleCxlO2Nhc2VcIltvYmplY3QgU2V0XVwiOnJldHVybiBuZXcgcjtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjpyZXR1cm4gWmU/T2JqZWN0KFplLmNhbGwodCkpOnt9fX1mdW5jdGlvbiB5dCh0KXtyZXR1cm4gYm4odCl8fHNuKHQpfHwhIShEZSYmdCYmdFtEZV0pfWZ1bmN0aW9uIGp0KHQsZSl7dmFyIG49dHlwZW9mIHQ7cmV0dXJuIGU9bnVsbD09ZT85MDA3MTk5MjU0NzQwOTkxOmUsISFlJiYoXCJudW1iZXJcIj09bnx8XCJzeW1ib2xcIiE9biYmbmUudGVzdCh0KSkmJi0xPHQmJjA9PXQlMSYmdDxlfWZ1bmN0aW9uIF90KHQsZSl7aWYoYm4odCkpcmV0dXJuIGZhbHNlO3ZhciBuPXR5cGVvZiB0O3JldHVybiEoXCJudW1iZXJcIiE9biYmXCJzeW1ib2xcIiE9biYmXCJib29sZWFuXCIhPW4mJm51bGwhPXQmJiFCdCh0KSl8fChYdC50ZXN0KHQpfHwhUXQudGVzdCh0KXx8bnVsbCE9ZSYmdCBpbiBPYmplY3QoZSkpfWZ1bmN0aW9uIGd0KHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3I7XG5yZXR1cm4gdD09PSh0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZlLnByb3RvdHlwZXx8X2UpfWZ1bmN0aW9uIHZ0KHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiYoblt0XT09PWUmJihlIT09SnR8fHQgaW4gT2JqZWN0KG4pKSl9fWZ1bmN0aW9uIGR0KGUsbixyKXtyZXR1cm4gbj1DZShuPT09SnQ/ZS5sZW5ndGgtMTpuLDApLGZ1bmN0aW9uKCl7Zm9yKHZhciBvPWFyZ3VtZW50cyxjPS0xLHU9Q2Uoby5sZW5ndGgtbiwwKSxpPUFycmF5KHUpOysrYzx1OylpW2NdPW9bbitjXTtmb3IoYz0tMSx1PUFycmF5KG4rMSk7KytjPG47KXVbY109b1tjXTtyZXR1cm4gdVtuXT1yKGkpLHQoZSx0aGlzLHUpfX1mdW5jdGlvbiBBdCh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcInx8QnQodCkpcmV0dXJuIHQ7dmFyIGU9dCtcIlwiO3JldHVyblwiMFwiPT1lJiYxL3Q9PS1LdD9cIi0wXCI6ZX1mdW5jdGlvbiB3dCh0KXtpZihudWxsIT10KXt0cnl7cmV0dXJuIHZlLmNhbGwodCl9Y2F0Y2godCl7fVxucmV0dXJuIHQrXCJcIn1yZXR1cm5cIlwifWZ1bmN0aW9uIG10KHQpe3JldHVybihudWxsPT10PzA6dC5sZW5ndGgpP3oodCwxKTpbXX1mdW5jdGlvbiBPdCh0KXt2YXIgZT1udWxsPT10PzA6dC5sZW5ndGg7cmV0dXJuIGU/dFtlLTFdOkp0fWZ1bmN0aW9uIFN0KHQsZSl7ZnVuY3Rpb24gbigpe3ZhciByPWFyZ3VtZW50cyxvPWU/ZS5hcHBseSh0aGlzLHIpOnJbMF0sYz1uLmNhY2hlO3JldHVybiBjLmhhcyhvKT9jLmdldChvKToocj10LmFwcGx5KHRoaXMsciksbi5jYWNoZT1jLnNldChvLHIpfHxjLHIpfWlmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fG51bGwhPWUmJnR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG4uY2FjaGU9bmV3KFN0LkNhY2hlfHxwKSxufWZ1bmN0aW9uIHp0KHQpe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIGZ1bmN0aW9uKCl7XG52YXIgZT1hcmd1bWVudHM7c3dpdGNoKGUubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIXQuY2FsbCh0aGlzKTtjYXNlIDE6cmV0dXJuIXQuY2FsbCh0aGlzLGVbMF0pO2Nhc2UgMjpyZXR1cm4hdC5jYWxsKHRoaXMsZVswXSxlWzFdKTtjYXNlIDM6cmV0dXJuIXQuY2FsbCh0aGlzLGVbMF0sZVsxXSxlWzJdKX1yZXR1cm4hdC5hcHBseSh0aGlzLGUpfX1mdW5jdGlvbiBrdCh0LGUpe3JldHVybiB0PT09ZXx8dCE9PXQmJmUhPT1lfWZ1bmN0aW9uIHh0KHQpe3JldHVybiBudWxsIT10JiZNdCh0Lmxlbmd0aCkmJiFGdCh0KX1mdW5jdGlvbiBFdCh0KXtyZXR1cm4gRHQodCkmJnh0KHQpfWZ1bmN0aW9uIEZ0KHQpe3JldHVybiEhSXQodCkmJih0PUUodCksXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgUHJveHldXCI9PXQpfWZ1bmN0aW9uIE10KHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmLTE8dCYmMD09dCUxJiY5MDA3MTk5MjU0NzQwOTkxPj10O1xufWZ1bmN0aW9uIEl0KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiBudWxsIT10JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX1mdW5jdGlvbiBEdCh0KXtyZXR1cm4gbnVsbCE9dCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ9ZnVuY3Rpb24gVXQodCl7cmV0dXJuISghRHQodCl8fFwiW29iamVjdCBPYmplY3RdXCIhPUUodCkpJiYodD1FZSh0KSxudWxsPT09dHx8KHQ9ZGUuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IsdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmdCBpbnN0YW5jZW9mIHQmJnZlLmNhbGwodCk9PW1lKSl9ZnVuY3Rpb24gQnQodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN5bWJvbFwifHxEdCh0KSYmXCJbb2JqZWN0IFN5bWJvbF1cIj09RSh0KX1mdW5jdGlvbiBQdCh0KXtyZXR1cm4gWSh0LFZ0KHQpKX1mdW5jdGlvbiBMdCh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOnEodCl9ZnVuY3Rpb24gJHQodCxlLG4pe3JldHVybiB0PW51bGw9PXQ/SnQ6ayh0LGUpLHQ9PT1KdD9uOnR9ZnVuY3Rpb24gQ3QodCxlKXtcbnJldHVybiBudWxsIT10JiZzdCh0LGUsTSl9ZnVuY3Rpb24gVHQodCl7cmV0dXJuIHh0KHQpP18odCk6Qyh0KX1mdW5jdGlvbiBWdCh0KXtpZih4dCh0KSl0PV8odCx0cnVlKTtlbHNlIGlmKEl0KHQpKXt2YXIgZSxuPWd0KHQpLHI9W107Zm9yKGUgaW4gdCkoXCJjb25zdHJ1Y3RvclwiIT1lfHwhbiYmZGUuY2FsbCh0LGUpKSYmci5wdXNoKGUpO3Q9cn1lbHNle2lmKGU9W10sbnVsbCE9dClmb3IobiBpbiBPYmplY3QodCkpZS5wdXNoKG4pO3Q9ZX1yZXR1cm4gdH1mdW5jdGlvbiBOdCh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19ZnVuY3Rpb24gUnQodCl7cmV0dXJuIHR9ZnVuY3Rpb24gV3QodCl7cmV0dXJuICQodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90Ok8odCwxKSl9ZnVuY3Rpb24gcXQodCl7cmV0dXJuIF90KHQpP3UoQXQodCkpOlIodCl9ZnVuY3Rpb24gR3QoKXtyZXR1cm5bXX1mdW5jdGlvbiBIdCgpe3JldHVybiBmYWxzZX12YXIgSnQsS3Q9MS8wLFF0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sWHQ9L15cXHcqJC8sWXQ9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLFp0PS9cXFxcKFxcXFwpPy9nLHRlPS9cXHcqJC8sZWU9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxuZT0vXig/OjB8WzEtOV1cXGQqKSQvLHJlPXt9O1xucmVbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09cmVbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09cmVbXCJbb2JqZWN0IEludDhBcnJheV1cIl09cmVbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPXJlW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1yZVtcIltvYmplY3QgVWludDhBcnJheV1cIl09cmVbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1yZVtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPXJlW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxyZVtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1yZVtcIltvYmplY3QgQXJyYXldXCJdPXJlW1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09cmVbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPXJlW1wiW29iamVjdCBEYXRhVmlld11cIl09cmVbXCJbb2JqZWN0IERhdGVdXCJdPXJlW1wiW29iamVjdCBFcnJvcl1cIl09cmVbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1yZVtcIltvYmplY3QgTWFwXVwiXT1yZVtcIltvYmplY3QgTnVtYmVyXVwiXT1yZVtcIltvYmplY3QgT2JqZWN0XVwiXT1yZVtcIltvYmplY3QgUmVnRXhwXVwiXT1yZVtcIltvYmplY3QgU2V0XVwiXT1yZVtcIltvYmplY3QgU3RyaW5nXVwiXT1yZVtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7XG52YXIgb2U9e307b2VbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09b2VbXCJbb2JqZWN0IEFycmF5XVwiXT1vZVtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPW9lW1wiW29iamVjdCBEYXRhVmlld11cIl09b2VbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPW9lW1wiW29iamVjdCBEYXRlXVwiXT1vZVtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1vZVtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1vZVtcIltvYmplY3QgSW50OEFycmF5XVwiXT1vZVtcIltvYmplY3QgSW50MTZBcnJheV1cIl09b2VbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPW9lW1wiW29iamVjdCBNYXBdXCJdPW9lW1wiW29iamVjdCBOdW1iZXJdXCJdPW9lW1wiW29iamVjdCBPYmplY3RdXCJdPW9lW1wiW29iamVjdCBSZWdFeHBdXCJdPW9lW1wiW29iamVjdCBTZXRdXCJdPW9lW1wiW29iamVjdCBTdHJpbmddXCJdPW9lW1wiW29iamVjdCBTeW1ib2xdXCJdPW9lW1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1vZVtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPW9lW1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09b2VbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLFxub2VbXCJbb2JqZWN0IEVycm9yXVwiXT1vZVtcIltvYmplY3QgRnVuY3Rpb25dXCJdPW9lW1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTt2YXIgY2UsdWU9dHlwZW9mIGdsb2JhbD09XCJvYmplY3RcIiYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsaWU9dHlwZW9mIHNlbGY9PVwib2JqZWN0XCImJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGFlPXVlfHxpZXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGZlPXR5cGVvZiBleHBvcnRzPT1cIm9iamVjdFwiJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyxsZT1mZSYmdHlwZW9mIG1vZHVsZT09XCJvYmplY3RcIiYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsc2U9bGUmJmxlLmV4cG9ydHM9PT1mZSxiZT1zZSYmdWUucHJvY2Vzczt0Ont0cnl7Y2U9YmUmJmJlLmJpbmRpbmcmJmJlLmJpbmRpbmcoXCJ1dGlsXCIpO2JyZWFrIHR9Y2F0Y2godCl7fWNlPXZvaWQgMH12YXIgaGU9Y2UmJmNlLmlzTWFwLHBlPWNlJiZjZS5pc1NldCx5ZT1jZSYmY2UuaXNUeXBlZEFycmF5LGplPUFycmF5LnByb3RvdHlwZSxfZT1PYmplY3QucHJvdG90eXBlLGdlPWFlW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLHZlPUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyxkZT1fZS5oYXNPd25Qcm9wZXJ0eSxBZT1mdW5jdGlvbigpe1xudmFyIHQ9L1teLl0rJC8uZXhlYyhnZSYmZ2Uua2V5cyYmZ2Uua2V5cy5JRV9QUk9UT3x8XCJcIik7cmV0dXJuIHQ/XCJTeW1ib2woc3JjKV8xLlwiK3Q6XCJcIn0oKSx3ZT1fZS50b1N0cmluZyxtZT12ZS5jYWxsKE9iamVjdCksT2U9UmVnRXhwKFwiXlwiK3ZlLmNhbGwoZGUpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksU2U9c2U/YWUuQnVmZmVyOkp0LHplPWFlLlN5bWJvbCxrZT1hZS5VaW50OEFycmF5LHhlPVNlP1NlLmE6SnQsRWU9ZihPYmplY3QuZ2V0UHJvdG90eXBlT2YpLEZlPU9iamVjdC5jcmVhdGUsTWU9X2UucHJvcGVydHlJc0VudW1lcmFibGUsSWU9amUuc3BsaWNlLERlPXplP3plLmlzQ29uY2F0U3ByZWFkYWJsZTpKdCxVZT16ZT96ZS50b1N0cmluZ1RhZzpKdCxCZT1mdW5jdGlvbigpe3RyeXt2YXIgdD1sdChPYmplY3QsXCJkZWZpbmVQcm9wZXJ0eVwiKTtcbnJldHVybiB0KHt9LFwiXCIse30pLHR9Y2F0Y2godCl7fX0oKSxQZT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLExlPVNlP1NlLmlzQnVmZmVyOkp0LCRlPWYoT2JqZWN0LmtleXMpLENlPU1hdGgubWF4LFRlPURhdGUubm93LFZlPWx0KGFlLFwiRGF0YVZpZXdcIiksTmU9bHQoYWUsXCJNYXBcIiksUmU9bHQoYWUsXCJQcm9taXNlXCIpLFdlPWx0KGFlLFwiU2V0XCIpLHFlPWx0KGFlLFwiV2Vha01hcFwiKSxHZT1sdChPYmplY3QsXCJjcmVhdGVcIiksSGU9d3QoVmUpLEplPXd0KE5lKSxLZT13dChSZSksUWU9d3QoV2UpLFhlPXd0KHFlKSxZZT16ZT96ZS5wcm90b3R5cGU6SnQsWmU9WWU/WWUudmFsdWVPZjpKdCx0bj1ZZT9ZZS50b1N0cmluZzpKdCxlbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBJdChlKT9GZT9GZShlKToodC5wcm90b3R5cGU9ZSxlPW5ldyB0LHQucHJvdG90eXBlPUp0LGUpOnt9fX0oKTtiLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe1xudGhpcy5fX2RhdGFfXz1HZT9HZShudWxsKTp7fSx0aGlzLnNpemU9MH0sYi5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0PXRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XSx0aGlzLnNpemUtPXQ/MTowLHR9LGIucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBHZT8odD1lW3RdLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09dD9KdDp0KTpkZS5jYWxsKGUsdCk/ZVt0XTpKdH0sYi5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIEdlP2VbdF0hPT1KdDpkZS5jYWxsKGUsdCl9LGIucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXModCk/MDoxLG5bdF09R2UmJmU9PT1KdD9cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjplLHRoaXN9LGgucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7XG50aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxoLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1kKGUsdCksISgwPnQpJiYodD09ZS5sZW5ndGgtMT9lLnBvcCgpOkllLmNhbGwoZSx0LDEpLC0tdGhpcy5zaXplLHRydWUpfSxoLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1kKGUsdCksMD50P0p0OmVbdF1bMV19LGgucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4tMTxkKHRoaXMuX19kYXRhX18sdCl9LGgucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX19kYXRhX18scj1kKG4sdCk7cmV0dXJuIDA+cj8oKyt0aGlzLnNpemUsbi5wdXNoKFt0LGVdKSk6bltyXVsxXT1lLHRoaXN9LHAucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgYixtYXA6bmV3KE5lfHxoKSxzdHJpbmc6bmV3IGJcbn19LHAucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdD1hdCh0aGlzLHQpLmRlbGV0ZSh0KSx0aGlzLnNpemUtPXQ/MTowLHR9LHAucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gYXQodGhpcyx0KS5nZXQodCl9LHAucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gYXQodGhpcyx0KS5oYXModCl9LHAucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuPWF0KHRoaXMsdCkscj1uLnNpemU7cmV0dXJuIG4uc2V0KHQsZSksdGhpcy5zaXplKz1uLnNpemU9PXI/MDoxLHRoaXN9LHkucHJvdG90eXBlLmFkZD15LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldCh0LFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiKSx0aGlzfSx5LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxqLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IGgsXG50aGlzLnNpemU9MH0sai5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9ZS5kZWxldGUodCksdGhpcy5zaXplPWUuc2l6ZSx0fSxqLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfSxqLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxqLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9fZGF0YV9fO2lmKG4gaW5zdGFuY2VvZiBoKXt2YXIgcj1uLl9fZGF0YV9fO2lmKCFOZXx8MTk5PnIubGVuZ3RoKXJldHVybiByLnB1c2goW3QsZV0pLHRoaXMuc2l6ZT0rK24uc2l6ZSx0aGlzO249dGhpcy5fX2RhdGFfXz1uZXcgcChyKX1yZXR1cm4gbi5zZXQodCxlKSx0aGlzLnNpemU9bi5zaXplLHRoaXN9O3ZhciBubj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLHIpe2lmKG51bGw9PW4pcmV0dXJuIG47aWYoIXh0KG4pKXJldHVybiB0KG4scik7XG5mb3IodmFyIG89bi5sZW5ndGgsYz1lP286LTEsdT1PYmplY3Qobik7KGU/Yy0tOisrYzxvKSYmZmFsc2UhPT1yKHVbY10sYyx1KTspO3JldHVybiBufX0oZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmcm4odCxlLFR0KX0pLHJuPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4scil7dmFyIG89LTEsYz1PYmplY3QoZSk7cj1yKGUpO2Zvcih2YXIgdT1yLmxlbmd0aDt1LS07KXt2YXIgaT1yW3Q/dTorK29dO2lmKGZhbHNlPT09bihjW2ldLGksYykpYnJlYWt9cmV0dXJuIGV9fSgpLG9uPUJlP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIEJlKHQsXCJ0b1N0cmluZ1wiLHtjb25maWd1cmFibGU6dHJ1ZSxlbnVtZXJhYmxlOmZhbHNlLHZhbHVlOk50KGUpLHdyaXRhYmxlOnRydWV9KX06UnQsY249UGU/ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106KHQ9T2JqZWN0KHQpLG4oUGUodCksZnVuY3Rpb24oZSl7cmV0dXJuIE1lLmNhbGwodCxlKX0pKX06R3QsdW49UGU/ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdO3Q7KW8oZSxjbih0KSksXG50PUVlKHQpO3JldHVybiBlfTpHdCxhbj1FOyhWZSYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1hbihuZXcgVmUobmV3IEFycmF5QnVmZmVyKDEpKSl8fE5lJiZcIltvYmplY3QgTWFwXVwiIT1hbihuZXcgTmUpfHxSZSYmXCJbb2JqZWN0IFByb21pc2VdXCIhPWFuKFJlLnJlc29sdmUoKSl8fFdlJiZcIltvYmplY3QgU2V0XVwiIT1hbihuZXcgV2UpfHxxZSYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPWFuKG5ldyBxZSkpJiYoYW49ZnVuY3Rpb24odCl7dmFyIGU9RSh0KTtpZih0PSh0PVwiW29iamVjdCBPYmplY3RdXCI9PWU/dC5jb25zdHJ1Y3RvcjpKdCk/d3QodCk6XCJcIilzd2l0Y2godCl7Y2FzZSBIZTpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSBKZTpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgS2U6cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBRZTpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgWGU6cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIGV9KTt2YXIgZm49ZnVuY3Rpb24odCl7XG52YXIgZT0wLG49MDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcj1UZSgpLG89MTYtKHItbik7aWYobj1yLDA8byl7aWYoODAwPD0rK2UpcmV0dXJuIGFyZ3VtZW50c1swXX1lbHNlIGU9MDtyZXR1cm4gdC5hcHBseShKdCxhcmd1bWVudHMpfX0ob24pLGxuPWZ1bmN0aW9uKHQpe3Q9U3QodCxmdW5jdGlvbih0KXtyZXR1cm4gNTAwPT09ZS5zaXplJiZlLmNsZWFyKCksdH0pO3ZhciBlPXQuY2FjaGU7cmV0dXJuIHR9KGZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiA0Nj09PXQuY2hhckNvZGVBdCgwKSYmZS5wdXNoKFwiXCIpLHQucmVwbGFjZShZdCxmdW5jdGlvbih0LG4scixvKXtlLnB1c2gocj9vLnJlcGxhY2UoWnQsXCIkMVwiKTpufHx0KX0pLGV9KTtTdC5DYWNoZT1wO3ZhciBzbj1JKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/STpmdW5jdGlvbih0KXtyZXR1cm4gRHQodCkmJmRlLmNhbGwodCxcImNhbGxlZVwiKSYmIU1lLmNhbGwodCxcImNhbGxlZVwiKX0sYm49QXJyYXkuaXNBcnJheSxobj1MZXx8SHQscG49aGU/aShoZSk6VSx5bj1wZT9pKHBlKTpQLGpuPXllP2koeWUpOkwsX249ZXQoZnVuY3Rpb24odCxlLG4pe1xuTih0LGUsbil9KSxnbj1ldChmdW5jdGlvbih0LGUsbixyKXtOKHQsZSxuLHIpfSksdm49ZnVuY3Rpb24odCl7cmV0dXJuIGZuKGR0KHQsSnQsbXQpLHQrXCJcIil9KGZ1bmN0aW9uKHQsZSl7dmFyIG49e307aWYobnVsbD09dClyZXR1cm4gbjt2YXIgbz1mYWxzZTtlPXIoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT1IKGUsdCksb3x8KG89MTxlLmxlbmd0aCksZX0pLFkodCx1dCh0KSxuKSxvJiYobj1PKG4sNyxudCkpO2Zvcih2YXIgYz1lLmxlbmd0aDtjLS07KUcobixlW2NdKTtyZXR1cm4gbn0pO3MuY29uc3RhbnQ9TnQscy5mbGF0dGVuPW10LHMuaXRlcmF0ZWU9V3Qscy5rZXlzPVR0LHMua2V5c0luPVZ0LHMubWVtb2l6ZT1TdCxzLm1lcmdlPV9uLHMubWVyZ2VXaXRoPWduLHMubmVnYXRlPXp0LHMub21pdD12bixzLnByb3BlcnR5PXF0LHMucmVqZWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGJuKHQpP246UykodCx6dChpdChlLDMpKSl9LHMudG9QbGFpbk9iamVjdD1QdCxzLmNsb25lRGVlcD1mdW5jdGlvbih0KXtcbnJldHVybiBPKHQsNSl9LHMuY2xvbmVEZWVwV2l0aD1mdW5jdGlvbih0LGUpe3JldHVybiBlPXR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/ZTpKdCxPKHQsNSxlKX0scy5lcT1rdCxzLmdldD0kdCxzLmhhcz1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT10JiZzdCh0LGUsRil9LHMuaGFzSW49Q3Qscy5pZGVudGl0eT1SdCxzLmlzQXJndW1lbnRzPXNuLHMuaXNBcnJheT1ibixzLmlzQXJyYXlMaWtlPXh0LHMuaXNBcnJheUxpa2VPYmplY3Q9RXQscy5pc0J1ZmZlcj1obixzLmlzRW1wdHk9ZnVuY3Rpb24odCl7aWYobnVsbD09dClyZXR1cm4gdHJ1ZTtpZih4dCh0KSYmKGJuKHQpfHx0eXBlb2YgdD09XCJzdHJpbmdcInx8dHlwZW9mIHQuc3BsaWNlPT1cImZ1bmN0aW9uXCJ8fGhuKHQpfHxqbih0KXx8c24odCkpKXJldHVybiF0Lmxlbmd0aDt2YXIgZT1hbih0KTtpZihcIltvYmplY3QgTWFwXVwiPT1lfHxcIltvYmplY3QgU2V0XVwiPT1lKXJldHVybiF0LnNpemU7aWYoZ3QodCkpcmV0dXJuIUModCkubGVuZ3RoO1xuZm9yKHZhciBuIGluIHQpaWYoZGUuY2FsbCh0LG4pKXJldHVybiBmYWxzZTtyZXR1cm4gdHJ1ZX0scy5pc0VxdWFsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEQodCxlKX0scy5pc0Z1bmN0aW9uPUZ0LHMuaXNMZW5ndGg9TXQscy5pc01hcD1wbixzLmlzTnVsbD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXR9LHMuaXNPYmplY3Q9SXQscy5pc09iamVjdExpa2U9RHQscy5pc1BsYWluT2JqZWN0PVV0LHMuaXNTZXQ9eW4scy5pc1N5bWJvbD1CdCxzLmlzVHlwZWRBcnJheT1qbixzLmxhc3Q9T3Qscy5zdHViQXJyYXk9R3Qscy5zdHViRmFsc2U9SHQscy50b1N0cmluZz1MdCxzLlZFUlNJT049XCI0LjE3LjVcIix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBkZWZpbmUuYW1kPT1cIm9iamVjdFwiJiZkZWZpbmUuYW1kPyhhZS5fPXMsIGRlZmluZShmdW5jdGlvbigpe3JldHVybiBzfSkpOmxlPygobGUuZXhwb3J0cz1zKS5fPXMsZmUuXz1zKTphZS5fPXN9KS5jYWxsKHRoaXMpOyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgcGF0aCBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcikge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKSxcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChpbmRleCAhPSBsYXN0SW5kZXgpIHtcbiAgICAgIHZhciBvYmpWYWx1ZSA9IG5lc3RlZFtrZXldO1xuICAgICAgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwga2V5LCBuZXN0ZWQpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpc09iamVjdChvYmpWYWx1ZSlcbiAgICAgICAgICA/IG9ialZhbHVlXG4gICAgICAgICAgOiAoaXNJbmRleChwYXRoW2luZGV4ICsgMV0pID8gW10gOiB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFzc2lnblZhbHVlKG5lc3RlZCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgbmVzdGVkID0gbmVzdGVkW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCJ2YXIgYmFzZVNldCA9IHJlcXVpcmUoJy4vX2Jhc2VTZXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIGEgcG9ydGlvbiBvZiBgcGF0aGAgZG9lc24ndCBleGlzdCxcbiAqIGl0J3MgY3JlYXRlZC4gQXJyYXlzIGFyZSBjcmVhdGVkIGZvciBtaXNzaW5nIGluZGV4IHByb3BlcnRpZXMgd2hpbGUgb2JqZWN0c1xuICogYXJlIGNyZWF0ZWQgZm9yIGFsbCBvdGhlciBtaXNzaW5nIHByb3BlcnRpZXMuIFVzZSBgXy5zZXRXaXRoYCB0byBjdXN0b21pemVcbiAqIGBwYXRoYCBjcmVhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5zZXQob2JqZWN0LCAnYVswXS5iLmMnLCA0KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC5hWzBdLmIuYyk7XG4gKiAvLyA9PiA0XG4gKlxuICogXy5zZXQob2JqZWN0LCBbJ3gnLCAnMCcsICd5JywgJ3onXSwgNSk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QueFswXS55LnopO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldDtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuY29uc3QgQ09OU1RBTlRTID0ge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtTdHJpbmd9IEl0ZW1UeXBlXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBFbnVtZXJhdGlvbiBvZiBkYXRhIGxheWVyIGl0ZW0gdHlwZXMuXHJcbiAgICpcclxuICAgKiBAZW51bSB7SXRlbVR5cGV9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgaXRlbVR5cGU6IHtcclxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBkYXRhICovXHJcbiAgICBEQVRBOiAnZGF0YScsXHJcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgZnVuY3Rpb24gKi9cclxuICAgIEZDVE46ICdmY3RuJyxcclxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGl0ZW0gb2YgdHlwZSBldmVudCAqL1xyXG4gICAgRVZFTlQ6ICdldmVudCcsXHJcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgbGlzdGVuZXIgb24gKi9cclxuICAgIExJU1RFTkVSX09OOiAnbGlzdGVuZXJPbicsXHJcbiAgICAvKiogUmVwcmVzZW50cyBhbiBpdGVtIG9mIHR5cGUgbGlzdGVuZXIgb2ZmICovXHJcbiAgICBMSVNURU5FUl9PRkY6ICdsaXN0ZW5lck9mZidcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7U3RyaW5nfSBEYXRhTGF5ZXJFdmVudFxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogRW51bWVyYXRpb24gb2YgZGF0YSBsYXllciBldmVudHMuXHJcbiAgICpcclxuICAgKiBAZW51bSB7RGF0YUxheWVyRXZlbnR9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgZGF0YUxheWVyRXZlbnQ6IHtcclxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGV2ZW50IHRyaWdnZXJlZCBmb3IgYW55IGNoYW5nZSBpbiB0aGUgZGF0YSBsYXllciBzdGF0ZSAqL1xyXG4gICAgQ0hBTkdFOiAnYWRvYmVEYXRhTGF5ZXI6Y2hhbmdlJyxcclxuICAgIC8qKiBSZXByZXNlbnRzIGFuIGV2ZW50IHRyaWdnZXJlZCBmb3IgYW55IGV2ZW50IHB1c2ggdG8gdGhlIGRhdGEgbGF5ZXIgKi9cclxuICAgIEVWRU5UOiAnYWRvYmVEYXRhTGF5ZXI6ZXZlbnQnXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge1N0cmluZ30gTGlzdGVuZXJTY29wZVxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogRW51bWVyYXRpb24gb2YgbGlzdGVuZXIgc2NvcGVzLlxyXG4gICAqXHJcbiAgICogQGVudW0ge0xpc3RlbmVyU2NvcGV9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgbGlzdGVuZXJTY29wZToge1xyXG4gICAgLyoqIFBhc3QgZXZlbnRzIG9ubHkgKi9cclxuICAgIFBBU1Q6ICdwYXN0JyxcclxuICAgIC8qKiBGdXR1cmUgZXZlbnRzIG9ubHkgKi9cclxuICAgIEZVVFVSRTogJ2Z1dHVyZScsXHJcbiAgICAvKiogQWxsIGV2ZW50cywgcGFzdCBhbmQgZnV0dXJlICovXHJcbiAgICBBTEw6ICdhbGwnXHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDT05TVEFOVFM7XHJcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vY3VzdG9tLWxvZGFzaCcpO1xuY29uc3QgY2xvbmVEZWVwID0gXy5jbG9uZURlZXA7XG5jb25zdCBnZXQgPSBfLmdldDtcblxuY29uc3QgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3ZlcnNpb24uanNvbicpLnZlcnNpb247XG5jb25zdCBJdGVtID0gcmVxdWlyZSgnLi9pdGVtJyk7XG5jb25zdCBMaXN0ZW5lciA9IHJlcXVpcmUoJy4vbGlzdGVuZXInKTtcbmNvbnN0IExpc3RlbmVyTWFuYWdlciA9IHJlcXVpcmUoJy4vbGlzdGVuZXJNYW5hZ2VyJyk7XG5jb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgY3VzdG9tTWVyZ2UgPSByZXF1aXJlKCcuL3V0aWxzL2N1c3RvbU1lcmdlJyk7XG5jb25zdCBzZXQgPSByZXF1aXJlKCdsb2Rhc2gvc2V0Jyk7XG5cbi8qKlxuICogTWFuYWdlclxuICpcbiAqIEBjbGFzcyBNYW5hZ2VyXG4gKiBAY2xhc3NkZXNjIERhdGEgTGF5ZXIgbWFuYWdlciB0aGF0IGF1Z21lbnRzIHRoZSBwYXNzZWQgZGF0YSBsYXllciBhcnJheSBhbmQgaGFuZGxlcyBldmVudGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIERhdGEgTGF5ZXIgbWFuYWdlciBjb25maWd1cmF0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBfY29uZmlnID0gY29uZmlnO1xuICBsZXQgX2RhdGFMYXllciA9IFtdO1xuICBsZXQgX3N0YXRlID0ge307XG4gIGxldCBfcHJldmlvdXNTdGF0ZUNvcHkgPSB7fTtcbiAgbGV0IF9saXN0ZW5lck1hbmFnZXI7XG5cbiAgY29uc3QgRGF0YUxheWVyTWFuYWdlciA9IHtcbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX3N0YXRlO1xuICAgIH0sXG4gICAgZ2V0RGF0YUxheWVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfZGF0YUxheWVyO1xuICAgIH0sXG4gICAgZ2V0UHJldmlvdXNTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX3ByZXZpb3VzU3RhdGVDb3B5O1xuICAgIH1cbiAgfTtcblxuICBfaW5pdGlhbGl6ZSgpO1xuICBfYXVnbWVudCgpO1xuICBfcHJvY2Vzc0l0ZW1zKCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBkYXRhIGxheWVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF9jb25maWcuZGF0YUxheWVyKSkge1xuICAgICAgX2NvbmZpZy5kYXRhTGF5ZXIgPSBbXTtcbiAgICB9XG5cbiAgICBfZGF0YUxheWVyID0gX2NvbmZpZy5kYXRhTGF5ZXI7XG4gICAgX2RhdGFMYXllci52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICBfc3RhdGUgPSB7fTtcbiAgICBfcHJldmlvdXNTdGF0ZUNvcHkgPSB7fTtcbiAgICBfbGlzdGVuZXJNYW5hZ2VyID0gTGlzdGVuZXJNYW5hZ2VyKERhdGFMYXllck1hbmFnZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGF0ZSB3aXRoIHRoZSBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfdXBkYXRlU3RhdGUoaXRlbSkge1xuICAgIF9wcmV2aW91c1N0YXRlQ29weSA9IGNsb25lRGVlcChfc3RhdGUpO1xuICAgIF9zdGF0ZSA9IGN1c3RvbU1lcmdlKF9zdGF0ZSwgaXRlbS5kYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogQXVnbWVudHMgdGhlIGRhdGEgbGF5ZXIgQXJyYXkgT2JqZWN0LCBvdmVycmlkaW5nOiBwdXNoKCkgYW5kIGFkZGluZyBnZXRTdGF0ZSgpLCBhZGRFdmVudExpc3RlbmVyIGFuZCByZW1vdmVFdmVudExpc3RlbmVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2F1Z21lbnQoKSB7XG4gICAgLyoqXG4gICAgICogUHVzaGVzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBkYXRhIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5JdGVtQ29uZmlnfSB2YXJfYXJncyBUaGUgaXRlbXMgdG8gYWRkIHRvIHRoZSBkYXRhIGxheWVyLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBsZW5ndGggb2YgdGhlIGRhdGEgbGF5ZXIgZm9sbG93aW5nIHB1c2guXG4gICAgICovXG4gICAgX2RhdGFMYXllci5wdXNoID0gZnVuY3Rpb24odmFyX2FyZ3MpIHsgLyogZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2UgKi9cbiAgICAgIGNvbnN0IHB1c2hBcmd1bWVudHMgPSBhcmd1bWVudHM7XG4gICAgICBjb25zdCBmaWx0ZXJlZEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICAgICAgT2JqZWN0LmtleXMocHVzaEFyZ3VtZW50cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbmZpZyA9IHB1c2hBcmd1bWVudHNba2V5XTtcbiAgICAgICAgY29uc3QgaXRlbSA9IEl0ZW0oaXRlbUNvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFpdGVtLnZhbGlkKSB7XG4gICAgICAgICAgZGVsZXRlIGZpbHRlcmVkQXJndW1lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5pdGVtVHlwZS5EQVRBOlxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLml0ZW1UeXBlLkVWRU5UOiB7XG4gICAgICAgICAgICBfcHJvY2Vzc0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTjoge1xuICAgICAgICAgICAgZGVsZXRlIGZpbHRlcmVkQXJndW1lbnRzW2tleV07XG4gICAgICAgICAgICBfcHJvY2Vzc0l0ZW0oaXRlbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuTElTVEVORVJfT046XG4gICAgICAgICAgY2FzZSBDT05TVEFOVFMuaXRlbVR5cGUuTElTVEVORVJfT0ZGOiB7XG4gICAgICAgICAgICBkZWxldGUgZmlsdGVyZWRBcmd1bWVudHNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmlsdGVyZWRBcmd1bWVudHNbMF0pIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMsIGZpbHRlcmVkQXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGRlZXAgY29weSBvZiB0aGUgZGF0YSBsYXllciBzdGF0ZSBvciBvZiB0aGUgb2JqZWN0IGRlZmluZWQgYnkgdGhlIHBhdGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICAgICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGEgZGVlcCBjb3B5IG9mIHRoZSByZXNvbHZlZCB2YWx1ZSBpZiBhIHBhdGggaXMgcGFzc2VkLCBhIGRlZXAgY29weSBvZiB0aGUgZGF0YSBsYXllciBzdGF0ZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgX2RhdGFMYXllci5nZXRTdGF0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHJldHVybiBnZXQoY2xvbmVEZWVwKF9zdGF0ZSksIHBhdGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lRGVlcChfc3RhdGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFjayBldmVudExpc3RlbmVyQ2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBldmVudCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgb2NjdXJzLlxuICAgICAqIEB0aGlzIHtEYXRhTGF5ZXJ9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBldmVudCBvYmplY3QgcHVzaGVkIHRvIHRoZSBkYXRhIGxheWVyIHRoYXQgdHJpZ2dlcmVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2JlZm9yZVN0YXRlXSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBjaGFuZ2UgY2F1c2VkIGJ5IHRoZSBldmVudC4gQXZhaWxhYmxlIG9ubHkgd2hlbiB0aGUgZXZlbnRcbiAgICAgKiBvYmplY3QgaGFzIGRhdGEgdGhhdCBtb2RpZnkgdGhlIHN0YXRlLiBJZiBhIHBhdGggZmlsdGVyIG9wdGlvbiBoYXMgYmVlbiBwcm92aWRlZCB3aGVuIHJlZ2lzdGVyaW5nIHRoZSBldmVudCxcbiAgICAgKiB0aGUgb2JqZWN0IHdpbGwgb25seSBjb250YWluIHRoZSBkYXRhIGF0IHRoZSBkZWZpbmVkIHBhdGguXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFthZnRlclN0YXRlXSBUaGUgc3RhdGUgYWZ0ZXIgdGhlIGNoYW5nZSBjYXVzZWQgYnkgdGhlIGV2ZW50LiBBdmFpbGFibGUgb25seSB3aGVuIHRoZSBldmVudFxuICAgICAqIG9iamVjdCBoYXMgZGF0YSB0aGF0IG1vZGlmeSB0aGUgc3RhdGUuIElmIGEgcGF0aCBmaWx0ZXIgb3B0aW9uIGhhcyBiZWVuIHByb3ZpZGVkIHdoZW4gcmVnaXN0ZXJpbmcgdGhlIGV2ZW50LFxuICAgICAqIHRoZSBvYmplY3Qgd2lsbCBvbmx5IGNvbnRhaW4gdGhlIGRhdGEgYXQgdGhlIGRlZmluZWQgcGF0aC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBzcGVjaWZpZWQgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBjYXNlLXNlbnNpdGl2ZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3IuXG4gICAgICogQHBhcmFtIHtldmVudExpc3RlbmVyQ2FsbGJhY2t9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgb2YgdGhlIHNwZWNpZmllZCB0eXBlIG9jY3Vycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbmFsIGNoYXJhY3RlcmlzdGljcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnBhdGhdIFRoZSBwYXRoIGluIHRoZSBzdGF0ZSBvYmplY3QgdG8gZmlsdGVyIHRoZSBsaXN0ZW5pbmcgdG8uXG4gICAgICogQHBhcmFtIHsoJ3Bhc3QnfCdmdXR1cmUnfCdhbGwnKX0gW29wdGlvbnMuc2NvcGVdIFRoZSB0aW1pbmcgdG8gZmlsdGVyIHRoZSBsaXN0ZW5pbmcgdG86XG4gICAgICogICAgICAtIHtTdHJpbmd9IHBhc3QgVGhlIGxpc3RlbmVyIGlzIHRyaWdnZXJlZCBmb3IgcGFzdCBldmVudHMgb25seS5cbiAgICAgKiAgICAgIC0ge1N0cmluZ30gZnV0dXJlIFRoZSBsaXN0ZW5lciBpcyB0cmlnZ2VyZWQgZm9yIGZ1dHVyZSBldmVudHMgb25seS5cbiAgICAgKiAgICAgIC0ge1N0cmluZ30gYWxsIFRoZSBsaXN0ZW5lciBpcyB0cmlnZ2VyZWQgZm9yIGJvdGggcGFzdCBhbmQgZnV0dXJlIGV2ZW50cyAoZGVmYXVsdCB2YWx1ZSkuXG4gICAgICovXG4gICAgX2RhdGFMYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJJdGVtID0gSXRlbSh7XG4gICAgICAgIG9uOiB0eXBlLFxuICAgICAgICBoYW5kbGVyOiBjYWxsYmFjayxcbiAgICAgICAgc2NvcGU6IG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZSxcbiAgICAgICAgcGF0aDogb3B0aW9ucyAmJiBvcHRpb25zLnBhdGhcbiAgICAgIH0pO1xuXG4gICAgICBfcHJvY2Vzc0l0ZW0oZXZlbnRMaXN0ZW5lckl0ZW0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIGFkZEV2ZW50TGlzdGVuZXIoKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgY2FzZS1zZW5zaXRpdmUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtsaXN0ZW5lcl0gT3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBpcyB0byBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIF9kYXRhTGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVySXRlbSA9IEl0ZW0oe1xuICAgICAgICBvZmY6IHR5cGUsXG4gICAgICAgIGhhbmRsZXI6IGxpc3RlbmVyXG4gICAgICB9KTtcblxuICAgICAgX3Byb2Nlc3NJdGVtKGV2ZW50TGlzdGVuZXJJdGVtKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBkYXRhIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtlZXBPcHRpb25zIE9wdGlvbnMgaW5jbHVkZTpcbiAgICAgKiAtIHBhdGhzOiBhcnJheSBvZiBwYXRocyB0byBrZWVwXG4gICAgICogLSBldmVudHM6IGFycmF5IG9mIGV2ZW50cyB0byBrZWVwXG4gICAgICogLSBoaXN0b3J5OiB0cnVlIHRvIGtlZXAgdGhlIHB1c2ggaGlzdG9yeSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgX2RhdGFMYXllci5yZXNldCA9IGZ1bmN0aW9uKGtlZXBPcHRpb25zKSB7XG4gICAgICAvLyBSZXNldCB0aGUgcHVzaCBoaXN0b3J5XG4gICAgICBjb25zdCBrZWVwSGlzdG9yeSA9IGtlZXBPcHRpb25zICYmIGtlZXBPcHRpb25zLmhpc3Rvcnk7XG4gICAgICBpZiAoIWtlZXBIaXN0b3J5KSB7XG4gICAgICAgIF9kYXRhTGF5ZXIubGVuZ3RoID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgdGhlIGRhdGEgbGF5ZXIgc3RhdGVcbiAgICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSB7fTtcbiAgICAgIGlmIChrZWVwT3B0aW9ucyAmJiBrZWVwT3B0aW9ucy5wYXRocykge1xuICAgICAgICBjb25zdCBwYXRocyA9IGtlZXBPcHRpb25zLnBhdGhzO1xuICAgICAgICBwYXRocy5mb3JFYWNoKGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldChfc3RhdGUsIHBhdGgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc2V0KGZpbHRlcmVkU3RhdGUsIHBhdGgsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgX3N0YXRlID0gZmlsdGVyZWRTdGF0ZTtcbiAgICAgIF9wcmV2aW91c1N0YXRlQ29weSA9IHt9O1xuXG4gICAgICAvLyBSZXNldCB0aGUgZGF0YSBsYXllciBsaXN0ZW5lcnNcbiAgICAgIF9saXN0ZW5lck1hbmFnZXIucmVzZXRMaXN0ZW5lcnMoa2VlcE9wdGlvbnMpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhbGwgaXRlbXMgdGhhdCBhbHJlYWR5IGV4aXN0IG9uIHRoZSBzdGFjay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9wcm9jZXNzSXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfZGF0YUxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSXRlbShfZGF0YUxheWVyW2ldLCBpKTtcblxuICAgICAgX3Byb2Nlc3NJdGVtKGl0ZW0pO1xuXG4gICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXIgb3IgaW52YWxpZCBpdGVtIGZyb20gdGhlIGRhdGEgbGF5ZXIgYXJyYXlcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PTiB8fFxuICAgICAgICBpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5MSVNURU5FUl9PRkYgfHxcbiAgICAgICAgaXRlbS50eXBlID09PSBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTiB8fFxuICAgICAgICAhaXRlbS52YWxpZCkge1xuICAgICAgICBfZGF0YUxheWVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGFuIGl0ZW0gcHVzaGVkIHRvIHRoZSBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHByb2Nlc3MuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcHJvY2Vzc0l0ZW0oaXRlbSkge1xuICAgIGlmICghaXRlbS52YWxpZCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdUaGUgZm9sbG93aW5nIGl0ZW0gY2Fubm90IGJlIGhhbmRsZWQgYnkgdGhlIGRhdGEgbGF5ZXIgJyArXG4gICAgICAgICdiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgYSB2YWxpZCBmb3JtYXQ6ICcgK1xuICAgICAgICBKU09OLnN0cmluZ2lmeShpdGVtLmNvbmZpZyk7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGl0ZW1zIGJlZm9yZSB0aGUgcHJvdmlkZWQgb25lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxJdGVtPn0gVGhlIGl0ZW1zIGJlZm9yZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRCZWZvcmUoaXRlbSkge1xuICAgICAgaWYgKCEoX2RhdGFMYXllci5sZW5ndGggPT09IDAgfHwgaXRlbS5pbmRleCA+IF9kYXRhTGF5ZXIubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgcmV0dXJuIF9kYXRhTGF5ZXIuc2xpY2UoMCwgaXRlbS5pbmRleCkubWFwKGl0ZW1Db25maWcgPT4gSXRlbShpdGVtQ29uZmlnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZVByb2Nlc3NvcnMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF91cGRhdGVTdGF0ZShpdGVtKTtcbiAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXJzKGl0ZW0pO1xuICAgICAgfSxcbiAgICAgIGZjdG46IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jb25maWcuY2FsbChfZGF0YUxheWVyLCBfZGF0YUxheWVyKTtcbiAgICAgIH0sXG4gICAgICBldmVudDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgICAgX3VwZGF0ZVN0YXRlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudHJpZ2dlckxpc3RlbmVycyhpdGVtKTtcbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lck9uOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gTGlzdGVuZXIoaXRlbSk7XG4gICAgICAgIHN3aXRjaCAobGlzdGVuZXIuc2NvcGUpIHtcbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLlBBU1Q6IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVnaXN0ZXJlZEl0ZW0gb2YgX2dldEJlZm9yZShpdGVtKSkge1xuICAgICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnRyaWdnZXJMaXN0ZW5lcihsaXN0ZW5lciwgcmVnaXN0ZXJlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLmxpc3RlbmVyU2NvcGUuRlVUVVJFOiB7XG4gICAgICAgICAgICBfbGlzdGVuZXJNYW5hZ2VyLnJlZ2lzdGVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENPTlNUQU5UUy5saXN0ZW5lclNjb3BlLkFMTDoge1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZCA9IF9saXN0ZW5lck1hbmFnZXIucmVnaXN0ZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZWdpc3RlcmVkSXRlbSBvZiBfZ2V0QmVmb3JlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgX2xpc3RlbmVyTWFuYWdlci50cmlnZ2VyTGlzdGVuZXIobGlzdGVuZXIsIHJlZ2lzdGVyZWRJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyT2ZmOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIF9saXN0ZW5lck1hbmFnZXIudW5yZWdpc3RlcihMaXN0ZW5lcihpdGVtKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHR5cGVQcm9jZXNzb3JzW2l0ZW0udHlwZV0oaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIERhdGFMYXllck1hbmFnZXI7XG59O1xuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmNvbnN0IERhdGFMYXllck1hbmFnZXIgPSByZXF1aXJlKCcuL2RhdGFMYXllck1hbmFnZXInKTtcclxuXHJcbi8qKlxyXG4gKiBEYXRhIExheWVyLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuY29uc3QgRGF0YUxheWVyID0ge1xyXG4gIE1hbmFnZXI6IERhdGFMYXllck1hbmFnZXJcclxufTtcclxuXHJcbkRhdGFMYXllci5NYW5hZ2VyKHtcclxuICBkYXRhTGF5ZXI6IHdpbmRvdy5hZG9iZURhdGFMYXllclxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiAge09iamVjdH0gTGlzdGVuZXJPbkNvbmZpZ1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gb24gTmFtZSBvZiB0aGUgZXZlbnQgdG8gYmluZCB0by5cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwYXRoXSBPYmplY3Qga2V5IGluIHRoZSBzdGF0ZSB0byBiaW5kIHRvLlxyXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyU2NvcGV9IFtzY29wZV0gU2NvcGUgb2YgdGhlIGxpc3RlbmVyLlxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgdG8gZXhlY3V0ZSB3aGVuIHRoZSBib3VuZCBldmVudCBpcyB0cmlnZ2VyZWQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBMaXN0ZW5lck9mZkNvbmZpZ1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gb2ZmIE5hbWUgb2YgdGhlIGV2ZW50IHRvIHVuYmluZC5cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwYXRoXSBPYmplY3Qga2V5IGluIHRoZSBzdGF0ZSB0byBiaW5kIHRvLlxyXG4gKiBAcHJvcGVydHkge0xpc3RlbmVyU2NvcGV9IFtzY29wZV0gU2NvcGUgb2YgdGhlIGxpc3RlbmVyLlxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbaGFuZGxlcl0gSGFuZGxlciBmb3IgYSBwcmV2aW91c2x5IGF0dGFjaGVkIGV2ZW50IHRvIHVuYmluZC5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gRGF0YUNvbmZpZ1xyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHVwZGF0ZWQgaW4gdGhlIHN0YXRlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudENvbmZpZ1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBbZXZlbnRJbmZvXSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIHBhc3MgdG8gdGhlIGV2ZW50IGhhbmRsZXIuXHJcbiAqIEBwcm9wZXJ0eSB7RGF0YUNvbmZpZy5kYXRhfSBbZGF0YV0gRGF0YSB0byBiZSB1cGRhdGVkIGluIHRoZSBzdGF0ZS5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge0RhdGFDb25maWcgfCBFdmVudENvbmZpZyB8IExpc3RlbmVyT25Db25maWcgfCBMaXN0ZW5lck9mZkNvbmZpZ30gSXRlbUNvbmZpZ1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUcmlnZ2VyZWQgd2hlbiB0aGVyZSBpcyBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUuXHJcbiAqXHJcbiAqIEBldmVudCBEYXRhTGF5ZXJFdmVudC5DSEFOR0VcclxuICogQHR5cGUge09iamVjdH1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEgRGF0YSBwdXNoZWQgdGhhdCBjYXVzZWQgYSBjaGFuZ2UgaW4gdGhlIGRhdGEgbGF5ZXIgc3RhdGUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXJlZCB3aGVuIGFuIGV2ZW50IGlzIHB1c2hlZCB0byB0aGUgZGF0YSBsYXllci5cclxuICpcclxuICogQGV2ZW50IERhdGFMYXllckV2ZW50LkVWRU5UXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIGNvbW1pdHRlZCBldmVudC5cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50SW5mbyBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHBhc3NlZCB3aXRoIHRoZSBjb21taXR0ZWQgZXZlbnQuXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhIERhdGEgdGhhdCB3YXMgcHVzaGVkIGFsb25nc2lkZSB0aGUgZXZlbnQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRyaWdnZXJlZCB3aGVuIGFuIGFyYml0cmFyeSBldmVudCBpcyBwdXNoZWQgdG8gdGhlIGRhdGEgbGF5ZXIuXHJcbiAqXHJcbiAqIEBldmVudCA8Y3VzdG9tPlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjb21taXR0ZWQgZXZlbnQuXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudEluZm8gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBwYXNzZWQgd2l0aCB0aGUgY29tbWl0dGVkIGV2ZW50LlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSBEYXRhIHRoYXQgd2FzIHB1c2hlZCBhbG9uZ3NpZGUgdGhlIGV2ZW50LlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF0YUxheWVyO1xyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxyXG5vZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcclxudGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXHJcbk9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxyXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuY29uc3QgXyA9IHJlcXVpcmUoJy4uL2N1c3RvbS1sb2Rhc2gnKTtcclxuY29uc3QgaXNQbGFpbk9iamVjdCA9IF8uaXNQbGFpbk9iamVjdDtcclxuY29uc3QgaXNFbXB0eSA9IF8uaXNFbXB0eTtcclxuY29uc3Qgb21pdCA9IF8ub21pdDtcclxuXHJcbmNvbnN0IGRhdGFNYXRjaGVzQ29udHJhaW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvZGF0YU1hdGNoZXNDb250cmFpbnRzJyk7XHJcbmNvbnN0IElURU1fQ09OU1RSQUlOVFMgPSByZXF1aXJlKCcuL2l0ZW1Db25zdHJhaW50cycpO1xyXG5jb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBkYXRhIGxheWVyIGl0ZW0uXHJcbiAqXHJcbiAqIEBwYXJhbSB7SXRlbUNvbmZpZ30gaXRlbUNvbmZpZyBUaGUgZGF0YSBsYXllciBpdGVtIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaXRlbSBpbmRleCBpbiB0aGUgYXJyYXkgb2YgZXhpc3RpbmcgaXRlbXMuXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVtQ29uZmlnLCBpbmRleCkge1xyXG4gIGNvbnN0IF9jb25maWcgPSBpdGVtQ29uZmlnO1xyXG4gIGNvbnN0IF9pbmRleCA9IGluZGV4O1xyXG4gIGNvbnN0IF90eXBlID0gZ2V0VHlwZSgpO1xyXG4gIGNvbnN0IF9kYXRhID0gZ2V0RGF0YSgpO1xyXG4gIGNvbnN0IF92YWxpZCA9ICEhX3R5cGU7XHJcblxyXG4gIGZ1bmN0aW9uIGdldFR5cGUoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoSVRFTV9DT05TVFJBSU5UUykuZmluZChrZXkgPT4gZGF0YU1hdGNoZXNDb250cmFpbnRzKF9jb25maWcsIElURU1fQ09OU1RSQUlOVFNba2V5XSkpIHx8XHJcbiAgICAgICh0eXBlb2YgX2NvbmZpZyA9PT0gJ2Z1bmN0aW9uJyAmJiBDT05TVEFOVFMuaXRlbVR5cGUuRkNUTikgfHxcclxuICAgICAgKGlzUGxhaW5PYmplY3QoX2NvbmZpZykgJiYgQ09OU1RBTlRTLml0ZW1UeXBlLkRBVEEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBvbWl0KF9jb25maWcsIE9iamVjdC5rZXlzKElURU1fQ09OU1RSQUlOVFMuZXZlbnQpKTtcclxuICAgIGlmICghaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGl0ZW0gY29uZmlndXJhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7SXRlbUNvbmZpZ30gVGhlIGl0ZW0gY29uZmlndXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgY29uZmlnOiBfY29uZmlnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtpdGVtVHlwZX0gVGhlIGl0ZW0gdHlwZS5cclxuICAgICAqL1xyXG4gICAgdHlwZTogX3R5cGUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGRhdGEuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0RhdGFDb25maWd9IFRoZSBpdGVtIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IF9kYXRhLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZW0gaXMgdmFsaWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgdmFsaWQ6IF92YWxpZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheSBvZiBleGlzdGluZyBpdGVtcyAoYWRkZWQgd2l0aCB0aGUgc3RhbmRhcmQgQXJyYXkucHJvdG90eXBlLnB1c2goKSlcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IG9mIGV4aXN0aW5nIGl0ZW1zIGlmIGl0IGV4aXN0cywgLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBpbmRleDogX2luZGV4XHJcbiAgfTtcclxufTtcclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJhaW50cyBmb3IgZWFjaCB0eXBlIG9mIHRoZSBpdGVtIGNvbmZpZ3VyYXRpb24uXHJcbiAqL1xyXG5cclxuY29uc3QgaXRlbUNvbnN0cmFpbnRzID0ge1xyXG4gIGV2ZW50OiB7XHJcbiAgICBldmVudDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJ1xyXG4gICAgfSxcclxuICAgIGV2ZW50SW5mbzoge1xyXG4gICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlzdGVuZXJPbjoge1xyXG4gICAgb246IHtcclxuICAgICAgdHlwZTogJ3N0cmluZydcclxuICAgIH0sXHJcbiAgICBoYW5kbGVyOiB7XHJcbiAgICAgIHR5cGU6ICdmdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICBzY29wZToge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgdmFsdWVzOiBbJ3Bhc3QnLCAnZnV0dXJlJywgJ2FsbCddLFxyXG4gICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhdGg6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaXN0ZW5lck9mZjoge1xyXG4gICAgb2ZmOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlcjoge1xyXG4gICAgICB0eXBlOiAnZnVuY3Rpb24nLFxyXG4gICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICB2YWx1ZXM6IFsncGFzdCcsICdmdXR1cmUnLCAnYWxsJ10sXHJcbiAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGF0aDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgb3B0aW9uYWw6IHRydWVcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZW1Db25zdHJhaW50cztcclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0cyBhIGRhdGEgbGF5ZXIgbGlzdGVuZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbSBmcm9tIHdoaWNoIHRvIGNvbnN0cnVjdCB0aGUgbGlzdGVuZXIuXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgY29uc3QgX2V2ZW50ID0gaXRlbS5jb25maWcub24gfHwgaXRlbS5jb25maWcub2ZmO1xyXG4gIGNvbnN0IF9oYW5kbGVyID0gaXRlbS5jb25maWcuaGFuZGxlciB8fCBudWxsO1xyXG4gIGNvbnN0IF9zY29wZSA9IGl0ZW0uY29uZmlnLnNjb3BlIHx8IChpdGVtLmNvbmZpZy5vbiAmJiBDT05TVEFOVFMubGlzdGVuZXJTY29wZS5BTEwpIHx8IG51bGw7XHJcbiAgY29uc3QgX3BhdGggPSBpdGVtLmNvbmZpZy5wYXRoIHx8IG51bGw7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIGV2ZW50IG5hbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxpc3RlbmVyIGV2ZW50IG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGV2ZW50OiBfZXZlbnQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHsoRnVuY3Rpb258bnVsbCl9IFRoZSBsaXN0ZW5lciBoYW5kbGVyLlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyOiBfaGFuZGxlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIHNjb3BlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHsoU3RyaW5nfG51bGwpfSBUaGUgbGlzdGVuZXIgc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHNjb3BlOiBfc2NvcGUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBwYXRoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHsoU3RyaW5nfG51bGwpfSBUaGUgbGlzdGVuZXIgcGF0aC5cclxuICAgICAqL1xyXG4gICAgcGF0aDogX3BhdGhcclxuICB9O1xyXG59O1xyXG4iLCIvKlxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5nb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgXyA9IHJlcXVpcmUoJy4uL2N1c3RvbS1sb2Rhc2gnKTtcbmNvbnN0IGNsb25lRGVlcCA9IF8uY2xvbmVEZWVwO1xuY29uc3QgZ2V0ID0gXy5nZXQ7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBsaXN0ZW5lck1hdGNoID0gcmVxdWlyZSgnLi91dGlscy9saXN0ZW5lck1hdGNoJyk7XG5jb25zdCBpbmRleE9mTGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL2luZGV4T2ZMaXN0ZW5lcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBsaXN0ZW5lciBtYW5hZ2VyLlxuICpcbiAqIEBwYXJhbSB7TWFuYWdlcn0gZGF0YUxheWVyTWFuYWdlciBUaGUgZGF0YSBsYXllciBtYW5hZ2VyLlxuICogQHJldHVybnMge0xpc3RlbmVyTWFuYWdlcn0gQSBsaXN0ZW5lciBtYW5hZ2VyLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRhdGFMYXllck1hbmFnZXIpIHtcbiAgbGV0IF9saXN0ZW5lcnMgPSB7fTtcbiAgY29uc3QgX2RhdGFMYXllck1hbmFnZXIgPSBkYXRhTGF5ZXJNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBGaW5kIGluZGV4IG9mIGxpc3RlbmVyIGluIGxpc3RlbmVycyBvYmplY3QuXG4gICAqL1xuICBjb25zdCBfaW5kZXhPZkxpc3RlbmVyID0gaW5kZXhPZkxpc3RlbmVyLmJpbmQobnVsbCwgX2xpc3RlbmVycyk7XG5cbiAgY29uc3QgTGlzdGVuZXJNYW5hZ2VyID0ge1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgY29uc3QgZXZlbnQgPSBsaXN0ZW5lci5ldmVudDtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfbGlzdGVuZXJzLCBldmVudCkpIHtcbiAgICAgICAgaWYgKF9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgICAgIF9saXN0ZW5lcnNbbGlzdGVuZXIuZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfbGlzdGVuZXJzW2xpc3RlbmVyLmV2ZW50XSA9IFtsaXN0ZW5lcl07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byB1bnJlZ2lzdGVyLlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXI6IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCBldmVudCA9IGxpc3RlbmVyLmV2ZW50O1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9saXN0ZW5lcnMsIGV2ZW50KSkge1xuICAgICAgICBpZiAoIShsaXN0ZW5lci5oYW5kbGVyIHx8IGxpc3RlbmVyLnNjb3BlIHx8IGxpc3RlbmVyLnBhdGgpKSB7XG4gICAgICAgICAgX2xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IF9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBfbGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgbGlzdGVuZXJzIHJlbGF0ZWQgdG8gdGhlIHBhc3NlZCBpdGVtLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEl0ZW0gdG8gdHJpZ2dlciBsaXN0ZW5lciBmb3IuXG4gICAgICovXG4gICAgdHJpZ2dlckxpc3RlbmVyczogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgY29uc3QgdHJpZ2dlcmVkRXZlbnRzID0gX2dldFRyaWdnZXJlZEV2ZW50cyhpdGVtKTtcbiAgICAgIHRyaWdnZXJlZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2xpc3RlbmVycywgZXZlbnQpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBfbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgc2luZ2xlIGxpc3RlbmVyIG9uIHRoZSBwYXNzZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtIHtJdGVtfSBpdGVtIEl0ZW0gdG8gY2FsbCB0aGUgbGlzdGVuZXIgd2l0aC5cbiAgICAgKi9cbiAgICB0cmlnZ2VyTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmVyLCBpdGVtKSB7XG4gICAgICBfY2FsbEhhbmRsZXIobGlzdGVuZXIsIGl0ZW0sIHRydWUpO1xuICAgIH0sXG4gICAgLy8gUmVzZXRzIHRoZSBsaXN0ZW5lcnMgYmFzZWQgb24gdGhlIG9wdGlvbnMgb2Ygd2hhdCB0byBrZWVwXG4gICAgcmVzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKGtlZXBPcHRpb25zKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZExpc3RlbmVycyA9IHt9O1xuICAgICAgaWYgKGtlZXBPcHRpb25zICYmIGtlZXBPcHRpb25zLmV2ZW50cykge1xuICAgICAgICBjb25zdCBldmVudHMgPSBrZWVwT3B0aW9ucy5ldmVudHM7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF9saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZExpc3RlbmVyc1tldmVudF0gPSBfbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgX2xpc3RlbmVycyA9IGZpbHRlcmVkTGlzdGVuZXJzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGxpc3RlbmVyIGhhbmRsZXIgb24gdGhlIGl0ZW0gaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW0gVGhlIGl0ZW0uXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNQYXN0SXRlbSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgaXRlbSB3YXMgcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGxpc3RlbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2NhbGxIYW5kbGVyKGxpc3RlbmVyLCBpdGVtLCBpc1Bhc3RJdGVtKSB7XG4gICAgLy8gRG8gbm90IHRyaWdnZXIgZXZlbnQgZHVyaW5nIGluaXRpYWxpemF0aW9uIHdoZW4gZXZlbnQgd2FzIHB1c2hlZCBhZnRlciBhZGRpbmcgbGlzdGVuZXIgYW5kIGJlZm9yZSBETCBpbml0aWFsaXphdGlvblxuICAgIGlmICh0eXBlb2YgaXRlbS5pbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIGlmIChsaXN0ZW5lck1hdGNoKGxpc3RlbmVyLCBpdGVtKSkge1xuICAgICAgY29uc3QgY2FsbGJhY2tBcmdzID0gW2Nsb25lRGVlcChpdGVtLmNvbmZpZyldO1xuXG4gICAgICBpZiAoaXRlbS5kYXRhKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lci5wYXRoKSB7XG4gICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQoX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpLCBsaXN0ZW5lci5wYXRoKTtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGdldChjbG9uZURlZXAoaXRlbS5kYXRhKSwgbGlzdGVuZXIucGF0aCk7XG4gICAgICAgICAgY2FsbGJhY2tBcmdzLnB1c2gob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNQYXN0SXRlbSkge1xuICAgICAgICAgIGNvbnN0IG9sZFN0YXRlID0gX2RhdGFMYXllck1hbmFnZXIuZ2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gY2xvbmVEZWVwKF9kYXRhTGF5ZXJNYW5hZ2VyLmdldFN0YXRlKCkpO1xuICAgICAgICAgIGNhbGxiYWNrQXJncy5wdXNoKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXIuaGFuZGxlci5hcHBseShfZGF0YUxheWVyTWFuYWdlci5nZXREYXRhTGF5ZXIoKSwgY2FsbGJhY2tBcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGV2ZW50cyB0aGF0IGFyZSB0cmlnZ2VyZWQgZm9yIHRoaXMgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U3RyaW5nPn0gVGhlIG5hbWVzIG9mIHRoZSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGZvciB0aGlzIGl0ZW0uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0VHJpZ2dlcmVkRXZlbnRzKGl0ZW0pIHtcbiAgICBjb25zdCB0cmlnZ2VyZWRFdmVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICBjYXNlIGNvbnN0YW50cy5pdGVtVHlwZS5EQVRBOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgY29uc3RhbnRzLml0ZW1UeXBlLkVWRU5UOiB7XG4gICAgICAgIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5FVkVOVCk7XG4gICAgICAgIGlmIChpdGVtLmRhdGEpIHRyaWdnZXJlZEV2ZW50cy5wdXNoKGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpO1xuICAgICAgICBpZiAoaXRlbS5jb25maWcuZXZlbnQgIT09IGNvbnN0YW50cy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpIHtcbiAgICAgICAgICB0cmlnZ2VyZWRFdmVudHMucHVzaChpdGVtLmNvbmZpZy5ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyZWRFdmVudHM7XG4gIH1cblxuICByZXR1cm4gTGlzdGVuZXJNYW5hZ2VyO1xufTtcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XHJcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcclxuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXHJcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xyXG5jb25zdCBoYXMgPSBfLmhhcztcclxuY29uc3QgZ2V0ID0gXy5nZXQ7XHJcblxyXG4vKipcclxuICAqIENoZWNrcyBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGFuIGFuY2VzdG9yIHRoYXQgaXMgc2V0IHRvIG51bGwgb3IgdW5kZWZpbmVkLlxyXG4gICpcclxuICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjaGVjay5cclxuICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxyXG4gICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBjb250YWlucyBhbiBhbmNlc3RvciB0aGF0IGlzIHNldCB0byBudWxsIG9yIHVuZGVmaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgcGF0aCkge1xyXG4gIGxldCBhbmNlc3RvclBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxhc3RJbmRleE9mKCcuJykpO1xyXG4gIHdoaWxlIChhbmNlc3RvclBhdGgpIHtcclxuICAgIGlmIChoYXMob2JqZWN0LCBhbmNlc3RvclBhdGgpKSB7XHJcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmFsdWUgPSBnZXQob2JqZWN0LCBhbmNlc3RvclBhdGgpO1xyXG4gICAgICBpZiAoYW5jZXN0b3JWYWx1ZSA9PT0gbnVsbCB8fCBhbmNlc3RvclZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5jZXN0b3JQYXRoID0gYW5jZXN0b3JQYXRoLnN1YnN0cmluZygwLCBhbmNlc3RvclBhdGgubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XHJcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcclxuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXHJcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xyXG5jb25zdCBjbG9uZURlZXBXaXRoID0gXy5jbG9uZURlZXBXaXRoO1xyXG5jb25zdCBpc09iamVjdCA9IF8uaXNPYmplY3Q7XHJcbmNvbnN0IGlzQXJyYXkgPSBfLmlzQXJyYXk7XHJcbmNvbnN0IHJlamVjdCA9IF8ucmVqZWN0O1xyXG5jb25zdCBtZXJnZVdpdGggPSBfLm1lcmdlV2l0aDtcclxuY29uc3QgaXNOdWxsID0gXy5pc051bGw7XHJcblxyXG4vKipcclxuICogTWVyZ2VzIHRoZSBzb3VyY2UgaW50byB0aGUgb2JqZWN0IGFuZCBzZXRzIG9iamVjdHMgYXMgJ3VuZGVmaW5lZCcgaWYgdGhleSBhcmUgJ3VuZGVmaW5lZCcgaW4gdGhlIHNvdXJjZSBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCBpbnRvIHdoaWNoIHRvIG1lcmdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2UgdG8gbWVyZ2Ugd2l0aC5cclxuICogQHJldHVybnMge09iamVjdH0gVGhlIG9iamVjdCBpbnRvIHdoaWNoIHNvdXJjZSB3YXMgbWVyZ2VkIGluLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xyXG4gIGNvbnN0IG1ha2VPbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvbWl0dGluZ0Nsb25lRGVlcEN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykge1xyXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHZhbHVlLCBwcmVkaWNhdGUpLm1hcChpdGVtID0+IGNsb25lRGVlcFdpdGgoaXRlbSwgb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9uZSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ViS2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgaWYgKCFwcmVkaWNhdGUodmFsdWVbc3ViS2V5XSkpIHtcclxuICAgICAgICAgICAgY2xvbmVbc3ViS2V5XSA9IGNsb25lRGVlcFdpdGgodmFsdWVbc3ViS2V5XSwgb21pdHRpbmdDbG9uZURlZXBDdXN0b21pemVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsb25lO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbWl6ZXIgPSBmdW5jdGlvbihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0KSB7XHJcbiAgICBpZiAodHlwZW9mIHNyY1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBzcmNWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbWl0RGVlcCA9IGZ1bmN0aW9uKHZhbHVlLCBwcmVkaWNhdGUgPSAodmFsKSA9PiAhdmFsKSB7XHJcbiAgICByZXR1cm4gY2xvbmVEZWVwV2l0aCh2YWx1ZSwgbWFrZU9taXR0aW5nQ2xvbmVEZWVwQ3VzdG9taXplcihwcmVkaWNhdGUpKTtcclxuICB9O1xyXG5cclxuICBtZXJnZVdpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpO1xyXG5cclxuICAvLyBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgb2JqZWN0c1xyXG4gIG9iamVjdCA9IG9taXREZWVwKG9iamVjdCwgaXNOdWxsKTtcclxuXHJcbiAgcmV0dXJuIG9iamVjdDtcclxufTtcclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YSwgY29uc3RyYWludHMpIHtcclxuICAvLyBHbyB0aHJvdWdoIGFsbCBjb25zdHJhaW50cyBhbmQgZmluZCBvbmUgd2hpY2ggZG9lcyBub3QgbWF0Y2ggdGhlIGRhdGFcclxuICBjb25zdCBmb3VuZE9iamVjdGlvbiA9IE9iamVjdC5rZXlzKGNvbnN0cmFpbnRzKS5maW5kKGtleSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gY29uc3RyYWludHNba2V5XS50eXBlO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkVmFsdWVzID0gY29uc3RyYWludHNba2V5XS52YWx1ZXM7XHJcbiAgICBjb25zdCBtYW5kYXRvcnkgPSAhY29uc3RyYWludHNba2V5XS5vcHRpb25hbDtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgY29uc3QgaW5jb3JyZWN0VHlwZSA9IHR5cGUgJiYgdmFsdWVUeXBlICE9PSB0eXBlO1xyXG4gICAgY29uc3Qgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcyA9IHN1cHBvcnRlZFZhbHVlcyAmJiAhc3VwcG9ydGVkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKTtcclxuICAgIGlmIChtYW5kYXRvcnkpIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZSB8fCBpbmNvcnJlY3RUeXBlIHx8IG5vTWF0Y2hGb3JTdXBwb3J0ZWRWYWx1ZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWUgJiYgKGluY29ycmVjdFR5cGUgfHwgbm9NYXRjaEZvclN1cHBvcnRlZFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gSWYgbm8gb2JqZWN0aW9ucyBmb3VuZCB0aGVuIGRhdGEgbWF0Y2hlcyBjb250cmFpbnRzXHJcbiAgcmV0dXJuIHR5cGVvZiBmb3VuZE9iamVjdGlvbiA9PT0gJ3VuZGVmaW5lZCc7XHJcbn07XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XHJcbm9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxyXG50aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcclxuT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXHJcbmdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5jb25zdCBfID0gcmVxdWlyZSgnLi4vLi4vY3VzdG9tLWxvZGFzaCcpO1xyXG5jb25zdCBpc0VxdWFsID0gXy5pc0VxdWFsO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0ZW5lcnMsIGxpc3RlbmVyKSB7XHJcbiAgY29uc3QgZXZlbnQgPSBsaXN0ZW5lci5ldmVudDtcclxuXHJcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsaXN0ZW5lcnMsIGV2ZW50KSkge1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHJlZ2lzdGVyZWRMaXN0ZW5lcl0gb2YgbGlzdGVuZXJzW2V2ZW50XS5lbnRyaWVzKCkpIHtcclxuICAgICAgaWYgKGlzRXF1YWwocmVnaXN0ZXJlZExpc3RlbmVyLmhhbmRsZXIsIGxpc3RlbmVyLmhhbmRsZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAtMTtcclxufTtcclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxub2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXHJcbnRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xyXG5PRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcclxuZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmNvbnN0IF8gPSByZXF1aXJlKCcuLi8uLi9jdXN0b20tbG9kYXNoJyk7XHJcbmNvbnN0IGhhcyA9IF8uaGFzO1xyXG5cclxuY29uc3QgQ09OU1RBTlRTID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XHJcbmNvbnN0IGFuY2VzdG9yUmVtb3ZlZCA9IHJlcXVpcmUoJy4vYW5jZXN0b3JSZW1vdmVkJyk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSBsaXN0ZW5lciBtYXRjaGVzIHRoZSBpdGVtLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIuXHJcbiAqIEBwYXJhbSB7SXRlbX0gaXRlbSBUaGUgaXRlbS5cclxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgbGlzdGVuZXIgbWF0Y2hlcyB0aGUgaXRlbSwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbGlzdGVuZXJNYXRjaChsaXN0ZW5lciwgaXRlbSkge1xyXG4gIGNvbnN0IGV2ZW50ID0gbGlzdGVuZXIuZXZlbnQ7XHJcbiAgY29uc3QgaXRlbUNvbmZpZyA9IGl0ZW0uY29uZmlnO1xyXG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XHJcblxyXG4gIGlmIChpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5EQVRBKSB7XHJcbiAgICBpZiAoZXZlbnQgPT09IENPTlNUQU5UUy5kYXRhTGF5ZXJFdmVudC5DSEFOR0UpIHtcclxuICAgICAgbWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09IENPTlNUQU5UUy5pdGVtVHlwZS5FVkVOVCkge1xyXG4gICAgaWYgKGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuRVZFTlQgfHwgZXZlbnQgPT09IGl0ZW1Db25maWcuZXZlbnQpIHtcclxuICAgICAgbWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbS5kYXRhICYmIGV2ZW50ID09PSBDT05TVEFOVFMuZGF0YUxheWVyRXZlbnQuQ0hBTkdFKSB7XHJcbiAgICAgIG1hdGNoZXMgPSBzZWxlY3Rvck1hdGNoZXMobGlzdGVuZXIsIGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdGNoZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBsaXN0ZW5lciBoYXMgYSBzZWxlY3RvciB0aGF0IHBvaW50cyB0byBhbiBvYmplY3QgaW4gdGhlIGRhdGEgcGF5bG9hZCBvZiBhbiBpdGVtLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0xpc3RlbmVyfSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgdG8gZXh0cmFjdCB0aGUgc2VsZWN0b3IgZnJvbS5cclxuICogQHBhcmFtIHtJdGVtfSBpdGVtIFRoZSBpdGVtLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIHNlbGVjdG9yIGlzIG5vdCBwcm92aWRlZCBvciBpZiB0aGUgZ2l2ZW4gc2VsZWN0b3IgaXMgbWF0Y2hpbmcsIGZhbHNlIG90aGVyd2lzZS5cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhsaXN0ZW5lciwgaXRlbSkge1xyXG4gIGlmIChpdGVtLmRhdGEgJiYgbGlzdGVuZXIucGF0aCkge1xyXG4gICAgcmV0dXJuIGhhcyhpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpIHx8IGFuY2VzdG9yUmVtb3ZlZChpdGVtLmRhdGEsIGxpc3RlbmVyLnBhdGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXJNYXRjaDtcclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwidmVyc2lvblwiOiBcIjEuMS4wXCJcclxufVxyXG4iXX0=
