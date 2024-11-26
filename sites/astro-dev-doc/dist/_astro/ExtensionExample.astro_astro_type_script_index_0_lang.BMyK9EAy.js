import{i as vn}from"./splideExtensionUtils.DK1kLC1f.js";/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function En(n){n.length=0}function F(n,t,e){return Array.prototype.slice.call(n,t,e)}function D(n){return n.bind.apply(n,[null].concat(F(arguments,1)))}function C(n){return requestAnimationFrame(n)}function R(n,t){return typeof t===n}var k=Array.isArray;D(R,"function");D(R,"string");D(R,"undefined");function j(n){return k(n)?n:[n]}function H(n,t){j(n).forEach(t)}var mn=Object.keys;function pn(n,t,e){if(n){var r=mn(n);r=r;for(var u=0;u<r.length;u++){var o=r[u];if(o!=="__proto__"&&t(n[o],o)===!1)break}}return n}function yn(n){return F(arguments,1).forEach(function(t){pn(t,function(e,r){n[r]=t[r]})}),n}var gn=Math.min;function hn(){var n=[];function t(a,c,f,l){u(a,c,function(s,v,d){var h="addEventListener"in s,E=h?s.removeEventListener.bind(s,v,f,l):s.removeListener.bind(s,f);h?s.addEventListener(v,f,l):s.addListener(f),n.push([s,v,d,f,E])})}function e(a,c,f){u(a,c,function(l,s,v){n=n.filter(function(d){return d[0]===l&&d[1]===s&&d[2]===v&&(!f||d[3]===f)?(d[4](),!1):!0})})}function r(a,c,f){var l,s=!0;return typeof CustomEvent=="function"?l=new CustomEvent(c,{bubbles:s,detail:f}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(c,s,!1,f)),a.dispatchEvent(l),l}function u(a,c,f){H(a,function(l){l&&H(c,function(s){s.split(" ").forEach(function(v){var d=v.split(".");f(l,d[0],d[1])})})})}function o(){n.forEach(function(a){a[4]()}),En(n)}return{bind:t,unbind:e,dispatch:r,destroy:o}}var K="move",U="moved",An="updated",Y="drag",bn="dragged",J="scroll",Q="scrolled",Ln="destroy";function On(n){var t=n?n.event.bus:document.createDocumentFragment(),e=hn();function r(o,a){e.bind(t,j(o).join(" "),function(c){a.apply(a,k(c.detail)?c.detail:[])})}function u(o){e.dispatch(t,o,F(arguments,1))}return n&&n.event.on(Ln,e.destroy),yn(e,{bus:t,on:r,off:D(e.unbind,t),emit:u})}function nn(n,t,e,r){var u=Date.now,o,a=0,c,f=!0,l=0;function s(){if(!f){if(a=n?gn((u()-o)/n,1):1,e&&e(a),a>=1&&(t(),o=u(),r&&++l>=r))return d();C(s)}}function v(A){!A&&E(),o=u()-(A?a*n:0),f=!1,C(s)}function d(){f=!0}function h(){o=u(),a=0,e&&e(a)}function E(){c&&cancelAnimationFrame(c),a=0,c=0,f=!0}function T(A){n=A}function b(){return f}return{start:v,rewind:h,pause:d,cancel:E,set:T,isPaused:b}}function Tn(n,t){var e;function r(){e||(e=nn(t,function(){n(),e=null},null,1),e.start())}return r}var _n="is-active",Sn="slide",Dn="fade";function tn(n,t,e){return Array.prototype.slice.call(n,t,e)}function M(n){return n.bind(null,...tn(arguments,1))}function w(n,t){return typeof t===n}function x(n){return!en(n)&&w("object",n)}const wn=Array.isArray;M(w,"function");M(w,"string");const Vn=M(w,"undefined");function en(n){return n===null}function Nn(n){return wn(n)?n:[n]}function S(n,t){Nn(n).forEach(t)}function $n(n,t,e){n&&S(t,r=>{r&&n.classList[e?"add":"remove"](r)})}const In=Object.keys;function rn(n,t,e){if(n){let r=In(n);r=r;for(let u=0;u<r.length;u++){const o=r[u];if(o!=="__proto__"&&t(n[o],o)===!1)break}}return n}function W(n){return tn(arguments,1).forEach(t=>{rn(t,(e,r)=>{n[r]=t[r]})}),n}function Pn(n,t){S(n,e=>{S(t,r=>{e&&e.removeAttribute(r)})})}function un(n,t,e){x(t)?rn(t,(r,u)=>{un(n,u,r)}):S(n,r=>{en(e)||e===""?Pn(r,t):r.setAttribute(t,String(e))})}const{min:X,max:Z,floor:Gn,ceil:qn,abs:zn}=Math;function xn(n,t,e){const r=X(t,e),u=Z(t,e);return X(Z(r,n),u)}const Fn={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Rn={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Mn(n,t,e){const{on:r,off:u,bind:o,unbind:a}=On(n),{translate:c,getPosition:f,toIndex:l,getLimit:s}=t.Move,{setIndex:v,getIndex:d}=t.Controller,{orient:h}=t.Direction,{toggle:E}=t.Elements,{Live:T}=t,{root:b}=n,A=Tn(t.Arrows.update,500);let m={},p,y,V,N,$,_;function on(){const{autoScroll:i}=e;m=W({},Fn,x(i)?i:{})}function B(){n.is(Dn)||!p&&e.autoScroll!==!1&&(p=nn(0,cn),an(),sn())}function G(){p&&(p.cancel(),p=null,_=void 0,u([K,Y,J,U,Q]),a(b,"mouseenter mouseleave focusin focusout"),a(E,"click"))}function an(){m.pauseOnHover&&o(b,"mouseenter mouseleave",i=>{V=i.type==="mouseenter",I()}),m.pauseOnFocus&&o(b,"focusin focusout",i=>{N=i.type==="focusin",I()}),m.useToggleButton&&o(E,"click",()=>{y?L():O()}),r(An,fn),r([K,Y,J],()=>{$=!0,O(!1)}),r([U,bn,Q],()=>{$=!1,I()})}function fn(){const{autoScroll:i}=e;i!==!1?(m=W({},m,x(i)?i:{}),B()):G(),p&&!Vn(_)&&c(_)}function sn(){m.autoStart&&(document.readyState==="complete"?L():o(window,"load",L))}function L(){P()&&(p.start(!0),T.disable(!0),N=V=y=!1,q())}function O(i=!0){y||(y=i,q(),P()||(p.pause(),T.disable(!1)))}function I(){y||(V||N||$?O(!1):L())}function cn(){const i=f(),g=ln(i);i!==g?(c(g),dn(_=f())):(O(!1),m.rewind&&n.go(m.speed>0?0:t.Controller.getEnd())),A()}function ln(i){const g=m.speed||1;return i+=h(g),n.is(Sn)&&(i=xn(i,s(!1),s(!0))),i}function dn(i){const{length:g}=n,z=(l(i)+g)%g;z!==d()&&(v(z),t.Slides.update(),t.Pagination.update(),e.lazyLoad==="nearby"&&t.LazyLoad.check())}function q(){if(E){const i=y?"startScroll":"pauseScroll";$n(E,_n,!y),un(E,"aria-label",e.i18n[i]||Rn[i])}}function P(){return!p||p.isPaused()}return{setup:on,mount:B,destroy:G,play:L,pause:O,isPaused:P}}vn({AutoScroll:Mn});
