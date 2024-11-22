function Jn(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qn(e,n,t){return n&&Jn(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var en="(prefers-reduced-motion: reduce)",Ce=1,er=2,pe=3,xe=4,qe=5,it=6,st=7,tr={CREATED:Ce,MOUNTED:er,IDLE:pe,MOVING:xe,SCROLLING:qe,DRAGGING:it,DESTROYED:st};function de(e){e.length=0}function _e(e,n,t){return Array.prototype.slice.call(e,n,t)}function U(e){return e.bind.apply(e,[null].concat(_e(arguments,1)))}var gn=setTimeout,bt=function(){};function tn(e){return requestAnimationFrame(e)}function lt(e,n){return typeof n===e}function Be(e){return!Vt(e)&&lt("object",e)}var Mt=Array.isArray,En=U(lt,"function"),me=U(lt,"string"),je=U(lt,"undefined");function Vt(e){return e===null}function hn(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ze(e){return Mt(e)?e:[e]}function ne(e,n){Ze(e).forEach(n)}function xt(e,n){return e.indexOf(n)>-1}function at(e,n){return e.push.apply(e,Ze(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,me(n)?n.split(" "):n,!0)}function Je(e,n){ne(n,e.appendChild.bind(e))}function Ft(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function We(e,n){return hn(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function mn(e,n){var t=e?_e(e.children):[];return n?t.filter(function(r){return We(r,n)}):t}function Qe(e,n){return n?mn(e,n)[0]:e.firstElementChild}var He=Object.keys;function Ie(e,n,t){return e&&(t?He(e).reverse():He(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function Ye(e){return _e(arguments,1).forEach(function(n){Ie(n,function(t,r){e[r]=n[r]})}),e}function he(e){return _e(arguments,1).forEach(function(n){Ie(n,function(t,r){Mt(t)?e[r]=t.slice():Be(t)?e[r]=he({},Be(e[r])?e[r]:{},t):e[r]=t})}),e}function nn(e,n){ne(n||He(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){Be(n)?Ie(n,function(r,o){x(e,o,r)}):ne(e,function(r){Vt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function Pe(e,n,t){var r=document.createElement(e);return n&&(me(n)?oe(r,n):x(r,n)),t&&Je(t,r),r}function re(e,n,t){if(je(t))return getComputedStyle(e)[n];Vt(t)||(e.style[n]=""+t)}function Xe(e,n){re(e,"display",n)}function An(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function rn(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ne(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function _n(e){return Qe(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function yn(e,n){return e&&e.querySelector(n)}function kt(e,n){return n?_e(e.querySelectorAll(n)):[]}function ve(e,n){fe(e,n,!1)}function Ot(e){return e.timeStamp}function Le(e){return me(e)?e:e?e+"px":""}var et="splide",zt="data-"+et;function Ge(e,n){if(!e)throw new Error("["+et+"] "+(n||""))}var Ae=Math.min,ct=Math.max,ft=Math.floor,Ke=Math.ceil,Q=Math.abs;function Sn(e,n,t){return Q(e-n)<t}function ot(e,n,t,r){var o=Ae(n,t),l=ct(n,t);return r?o<e&&e<l:o<=e&&e<=l}function Oe(e,n,t){var r=Ae(n,t),o=ct(n,t);return Ae(ct(r,e),o)}function Dt(e){return+(e>0)-+(e<0)}function Ct(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Gt(e){return e<10?"0"+e:""+e}var an={};function nr(e){return""+e+Gt(an[e]=(an[e]||0)+1)}function Tn(){var e=[];function n(i,u,s,f){o(i,u,function(a,m,d){var g="addEventListener"in a,c=g?a.removeEventListener.bind(a,m,s,f):a.removeListener.bind(a,s);g?a.addEventListener(m,s,f):a.addListener(s),e.push([a,m,d,s,c])})}function t(i,u,s){o(i,u,function(f,a,m){e=e.filter(function(d){return d[0]===f&&d[1]===a&&d[2]===m&&(!s||d[3]===s)?(d[4](),!1):!0})})}function r(i,u,s){var f,a=!0;return typeof CustomEvent=="function"?f=new CustomEvent(u,{bubbles:a,detail:s}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(u,a,!1,s)),i.dispatchEvent(f),f}function o(i,u,s){ne(i,function(f){f&&ne(u,function(a){a.split(" ").forEach(function(m){var d=m.split(".");s(f,d[0],d[1])})})})}function l(){e.forEach(function(i){i[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:l}}var ye="mounted",Pt="ready",ge="move",Fe="moved",Ut="click",Ln="active",In="inactive",Nn="visible",Rn="hidden",K="refresh",Z="updated",Me="resize",dt="resized",bn="drag",On="dragging",Dn="dragged",gt="scroll",be="scrolled",rr="overflow",Bt="destroy",Cn="arrows:mounted",Pn="arrows:updated",wn="pagination:mounted",pn="pagination:updated",Wt="navigation:mounted",Ht="autoplay:play",Mn="autoplay:playing",Yt="autoplay:pause",Xt="lazyload:loaded",Vn="sk",xn="sh",vt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=Tn();function r(l,i){t.bind(n,Ze(l).join(" "),function(u){i.apply(i,Mt(u.detail)?u.detail:[])})}function o(l){t.dispatch(n,l,_e(arguments,1))}return e&&e.event.on(Bt,t.destroy),Ye(t,{bus:n,on:r,off:U(t.unbind,n),emit:o})}function Et(e,n,t,r){var o=Date.now,l,i=0,u,s=!0,f=0;function a(){if(!s){if(i=e?Ae((o()-l)/e,1):1,t&&t(i),i>=1&&(n(),l=o(),r&&++f>=r))return d();u=tn(a)}}function m(A){A||c(),l=o()-(A?i*e:0),s=!1,u=tn(a)}function d(){s=!0}function g(){l=o(),i=0,t&&t(i)}function c(){u&&cancelAnimationFrame(u),i=0,u=0,s=!0}function v(A){e=A}function _(){return s}return{start:m,rewind:g,pause:d,cancel:c,set:v,isPaused:_}}function ir(e){var n=e;function t(o){n=o}function r(o){return xt(Ze(o),n)}return{set:t,is:r}}function ar(e,n){var t=Et(0,e,null,1);return function(){t.isPaused()&&t.start()}}function or(e,n,t){var r=e.state,o=t.breakpoints||{},l=t.reducedMotion||{},i=Tn(),u=[];function s(){var c=t.mediaQuery==="min";He(o).sort(function(v,_){return c?+v-+_:+_-+v}).forEach(function(v){a(o[v],"("+(c?"min":"max")+"-width:"+v+"px)")}),a(l,en),m()}function f(c){c&&i.destroy()}function a(c,v){var _=matchMedia(v);i.bind(_,"change",m),u.push([c,_])}function m(){var c=r.is(st),v=t.direction,_=u.reduce(function(A,h){return he(A,h[1].matches?h[0]:{})},{});nn(t),g(_),t.destroy?e.destroy(t.destroy==="completely"):c?(f(!0),e.mount()):v!==t.direction&&e.refresh()}function d(c){matchMedia(en).matches&&(c?he(t,l):nn(t,He(l)))}function g(c,v,_){he(t,c),v&&he(Object.getPrototypeOf(t),c),(_||!r.is(Ce))&&e.emit(Z,t)}return{setup:s,destroy:f,reduce:d,set:g}}var ht="Arrow",mt=ht+"Left",At=ht+"Right",Fn=ht+"Up",kn=ht+"Down",on="rtl",_t="ttb",Lt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Fn,At],ArrowRight:[kn,mt]};function ur(e,n,t){function r(l,i,u){u=u||t.direction;var s=u===on&&!i?1:u===_t?0:-1;return Lt[l]&&Lt[l][s]||l.replace(/width|left|right/i,function(f,a){var m=Lt[f.toLowerCase()][s]||f;return a>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function o(l){return l*(t.direction===on?1:-1)}return{resolve:r,orient:o}}var le="role",we="tabindex",sr="disabled",ae="aria-",tt=ae+"controls",zn=ae+"current",un=ae+"selected",te=ae+"label",Kt=ae+"labelledby",Gn=ae+"hidden",$t=ae+"orientation",$e=ae+"roledescription",sn=ae+"live",cn=ae+"busy",fn=ae+"atomic",qt=[le,we,sr,tt,zn,te,Kt,Gn,$t,$e],se=et+"__",Se="is-",It=et,vn=se+"track",cr=se+"list",yt=se+"slide",Un=yt+"--clone",fr=yt+"__container",jt=se+"arrows",St=se+"arrow",Bn=St+"--prev",Wn=St+"--next",Tt=se+"pagination",Hn=Tt+"__page",vr=se+"progress",lr=vr+"__bar",dr=se+"toggle",gr=se+"spinner",Er=se+"sr",hr=Se+"initialized",Re=Se+"active",Yn=Se+"prev",Xn=Se+"next",wt=Se+"visible",pt=Se+"loading",Kn=Se+"focus-in",$n=Se+"overflow",mr=[Re,wt,Yn,Xn,pt,Kn,$n],Ar={slide:yt,clone:Un,arrows:jt,arrow:St,prev:Bn,next:Wn,pagination:Tt,page:Hn,spinner:gr};function _r(e,n){if(En(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!We(t,n);)t=t.parentElement;return t}var yr=5,ln=200,qn="touchstart mousedown",Nt="touchmove mousemove",Rt="touchend touchcancel mouseup click";function Sr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=e.root,u=t.i18n,s={},f=[],a=[],m=[],d,g,c;function v(){E(),w(),h()}function _(){o(K,A),o(K,v),o(Z,h),l(document,qn+" keydown",function(S){c=S.type==="keydown"},{capture:!0}),l(i,"focusin",function(){fe(i,Kn,!!c)})}function A(S){var O=qt.concat("style");de(f),ve(i,a),ve(d,m),ue([d,g],O),ue(i,S?O:["style",$e])}function h(){ve(i,a),ve(d,m),a=M(It),m=M(vn),oe(i,a),oe(d,m),x(i,te,t.label),x(i,Kt,t.labelledby)}function E(){d=b("."+vn),g=Qe(d,"."+cr),Ge(d&&g,"A track/list element is missing."),at(f,mn(g,"."+yt+":not(."+Un+")")),Ie({arrows:jt,pagination:Tt,prev:Bn,next:Wn,bar:lr,toggle:dr},function(S,O){s[O]=b("."+S)}),Ye(s,{root:i,track:d,list:g,slides:f})}function w(){var S=i.id||nr(et),O=t.role;i.id=S,d.id=d.id||S+"-track",g.id=g.id||S+"-list",!ie(i,le)&&i.tagName!=="SECTION"&&O&&x(i,le,O),x(i,$e,u.carousel),x(g,le,"presentation")}function b(S){var O=yn(i,S);return O&&_r(O,"."+It)===i?O:void 0}function M(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===It&&Re]}return Ye(s,{setup:v,mount:_,destroy:A})}var Ve="slide",ke="loop",nt="fade";function Tr(e,n,t,r){var o=H(e),l=o.on,i=o.emit,u=o.bind,s=e.Components,f=e.root,a=e.options,m=a.isNavigation,d=a.updateOnMove,g=a.i18n,c=a.pagination,v=a.slideFocus,_=s.Direction.resolve,A=ie(r,"style"),h=ie(r,te),E=t>-1,w=Qe(r,"."+fr),b;function M(){E||(r.id=f.id+"-slide"+Gt(n+1),x(r,le,c?"tabpanel":"group"),x(r,$e,g.slide),x(r,te,h||Ct(g.slideLabel,[n+1,e.length]))),S()}function S(){u(r,"click",U(i,Ut,p)),u(r,"keydown",U(i,Vn,p)),l([Fe,xn,be],L),l(Wt,k),d&&l(ge,P)}function O(){b=!0,o.destroy(),ve(r,mr),ue(r,qt),x(r,"style",A),x(r,te,h||"")}function k(){var C=e.splides.map(function(T){var D=T.splide.Components.Slides.getAt(n);return D?D.slide.id:""}).join(" ");x(r,te,Ct(g.slideX,(E?t:n)+1)),x(r,tt,C),x(r,le,v?"button":""),v&&ue(r,$e)}function P(){b||L()}function L(){if(!b){var C=e.index;I(),N(),fe(r,Yn,n===C-1),fe(r,Xn,n===C+1)}}function I(){var C=F();C!==rn(r,Re)&&(fe(r,Re,C),x(r,zn,m&&C||""),i(C?Ln:In,p))}function N(){var C=Y(),T=!C&&(!F()||E);if(e.state.is([xe,qe])||x(r,Gn,T||""),x(kt(r,a.focusableNodes||""),we,T?-1:""),v&&x(r,we,T?-1:0),C!==rn(r,wt)&&(fe(r,wt,C),i(C?Nn:Rn,p)),!C&&document.activeElement===r){var D=s.Slides.getAt(e.index);D&&An(D.slide)}}function V(C,T,D){re(D&&w||r,C,T)}function F(){var C=e.index;return C===n||a.cloneStatus&&C===t}function Y(){if(e.is(nt))return F();var C=ee(s.Elements.track),T=ee(r),D=_("left",!0),z=_("right",!0);return ft(C[D])<=Ke(T[D])&&ft(T[z])<=Ke(C[z])}function W(C,T){var D=Q(C-n);return!E&&(a.rewind||e.is(ke))&&(D=Ae(D,e.length-D)),D<=T}var p={index:n,slideIndex:t,slide:r,container:w,isClone:E,mount:M,destroy:O,update:L,style:V,isWithin:W};return p}function Lr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,u=n.Elements,s=u.slides,f=u.list,a=[];function m(){d(),o(K,g),o(K,d)}function d(){s.forEach(function(L,I){v(L,I,-1)})}function g(){b(function(L){L.destroy()}),de(a)}function c(){b(function(L){L.update()})}function v(L,I,N){var V=Tr(e,I,N,L);V.mount(),a.push(V),a.sort(function(F,Y){return F.index-Y.index})}function _(L){return L?M(function(I){return!I.isClone}):a}function A(L){var I=n.Controller,N=I.toIndex(L),V=I.hasFocus()?1:t.perPage;return M(function(F){return ot(F.index,N,N+V-1)})}function h(L){return M(L)[0]}function E(L,I){ne(L,function(N){if(me(N)&&(N=_n(N)),hn(N)){var V=s[I];V?Ft(N,V):Je(f,N),oe(N,t.classes.slide),O(N,U(l,Me))}}),l(K)}function w(L){Ne(M(L).map(function(I){return I.slide})),l(K)}function b(L,I){_(I).forEach(L)}function M(L){return a.filter(En(L)?L:function(I){return me(L)?We(I.slide,L):xt(Ze(L),I.index)})}function S(L,I,N){b(function(V){V.style(L,I,N)})}function O(L,I){var N=kt(L,"img"),V=N.length;V?N.forEach(function(F){i(F,"load error",function(){--V||I()})}):I()}function k(L){return L?s.length:a.length}function P(){return a.length>t.perPage}return{mount:m,destroy:g,update:c,register:v,get:_,getIn:A,getAt:h,add:E,remove:w,forEach:b,filter:M,style:S,getLength:k,isEnough:P}}function Ir(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,u=n.Slides,s=n.Direction.resolve,f=n.Elements,a=f.root,m=f.track,d=f.list,g=u.getAt,c=u.style,v,_,A;function h(){E(),l(window,"resize load",ar(U(i,Me))),o([Z,K],E),o(Me,w)}function E(){v=t.direction===_t,re(a,"maxWidth",Le(t.width)),re(m,s("paddingLeft"),b(!1)),re(m,s("paddingRight"),b(!0)),w(!0)}function w(p){var C=ee(a);(p||_.width!==C.width||_.height!==C.height)&&(re(m,"height",M()),c(s("marginRight"),Le(t.gap)),c("width",O()),c("height",k(),!0),_=C,i(dt),A!==(A=W())&&(fe(a,$n,A),i(rr,A)))}function b(p){var C=t.padding,T=s(p?"right":"left");return C&&Le(C[T]||(Be(C)?0:C))||"0px"}function M(){var p="";return v&&(p=S(),Ge(p,"height or heightRatio is missing."),p="calc("+p+" - "+b(!1)+" - "+b(!0)+")"),p}function S(){return Le(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Le(t.fixedWidth)||(v?"":P())}function k(){return Le(t.fixedHeight)||(v?t.autoHeight?null:P():S())}function P(){var p=Le(t.gap);return"calc((100%"+(p&&" + "+p)+")/"+(t.perPage||1)+(p&&" - "+p)+")"}function L(){return ee(d)[s("width")]}function I(p,C){var T=g(p||0);return T?ee(T.slide)[s("width")]+(C?0:F()):0}function N(p,C){var T=g(p);if(T){var D=ee(T.slide)[s("right")],z=ee(d)[s("left")];return Q(D-z)+(C?0:F())}return 0}function V(p){return N(e.length-1)-N(0)+I(0,p)}function F(){var p=g(0);return p&&parseFloat(re(p.slide,s("marginRight")))||0}function Y(p){return parseFloat(re(m,s("padding"+(p?"Right":"Left"))))||0}function W(){return e.is(nt)||V(!0)>L()}return{mount:h,resize:w,listSize:L,slideSize:I,sliderSize:V,totalSize:N,getPadding:Y,isOverflow:W}}var Nr=2;function Rr(e,n,t){var r=H(e),o=r.on,l=n.Elements,i=n.Slides,u=n.Direction.resolve,s=[],f;function a(){o(K,m),o([Z,Me],g),(f=_())&&(c(f),n.Layout.resize(!0))}function m(){d(),a()}function d(){Ne(s),de(s),r.destroy()}function g(){var A=_();f!==A&&(f<A||!A)&&r.emit(K)}function c(A){var h=i.get().slice(),E=h.length;if(E){for(;h.length<A;)at(h,h);at(h.slice(-A),h.slice(0,A)).forEach(function(w,b){var M=b<A,S=v(w.slide,b);M?Ft(S,h[0].slide):Je(l.list,S),at(s,S),i.register(S,b-A+(M?0:E),w.index)})}}function v(A,h){var E=A.cloneNode(!0);return oe(E,t.classes.clone),E.id=e.root.id+"-clone"+Gt(h+1),E}function _(){var A=t.clones;if(!e.is(ke))A=0;else if(je(A)){var h=t[u("fixedWidth")]&&n.Layout.slideSize(0),E=h&&Ke(ee(l.track)[u("width")]/h);A=E||t[u("autoWidth")]&&e.length||t.perPage*Nr}return A}return{mount:a,destroy:d}}function br(e,n,t){var r=H(e),o=r.on,l=r.emit,i=e.state.set,u=n.Layout,s=u.slideSize,f=u.getPadding,a=u.totalSize,m=u.listSize,d=u.sliderSize,g=n.Direction,c=g.resolve,v=g.orient,_=n.Elements,A=_.list,h=_.track,E;function w(){E=n.Transition,o([ye,dt,Z,K],b)}function b(){n.Controller.isBusy()||(n.Scroll.cancel(),S(e.index),n.Slides.update())}function M(T,D,z,q){T!==D&&p(T>z)&&(L(),O(P(V(),T>z),!0)),i(xe),l(ge,D,z,T),E.start(D,function(){i(pe),l(Fe,D,z,T),q&&q()})}function S(T){O(N(T,!0))}function O(T,D){if(!e.is(nt)){var z=D?T:k(T);re(A,"transform","translate"+c("X")+"("+z+"px)"),T!==z&&l(xn)}}function k(T){if(e.is(ke)){var D=I(T),z=D>n.Controller.getEnd(),q=D<0;(q||z)&&(T=P(T,z))}return T}function P(T,D){var z=T-W(D),q=d();return T-=v(q*(Ke(Q(z)/q)||1))*(D?1:-1),T}function L(){O(V(),!0),E.cancel()}function I(T){for(var D=n.Slides.get(),z=0,q=1/0,$=0;$<D.length;$++){var Ee=D[$].index,y=Q(N(Ee,!0)-T);if(y<=q)q=y,z=Ee;else break}return z}function N(T,D){var z=v(a(T-1)-Y(T));return D?F(z):z}function V(){var T=c("left");return ee(A)[T]-ee(h)[T]+v(f(!1))}function F(T){return t.trimSpace&&e.is(Ve)&&(T=Oe(T,0,v(d(!0)-m()))),T}function Y(T){var D=t.focus;return D==="center"?(m()-s(T,!0))/2:+D*s(T)||0}function W(T){return N(T?n.Controller.getEnd():0,!!t.trimSpace)}function p(T){var D=v(P(V(),T));return T?D>=0:D<=A[c("scrollWidth")]-ee(h)[c("width")]}function C(T,D){D=je(D)?V():D;var z=T!==!0&&v(D)<v(W(!1)),q=T!==!1&&v(D)>v(W(!0));return z||q}return{mount:w,move:M,jump:S,translate:O,shift:P,cancel:L,toIndex:I,toPosition:N,getPosition:V,getLimit:W,exceededLimit:C,reposition:b}}function Or(e,n,t){var r=H(e),o=r.on,l=r.emit,i=n.Move,u=i.getPosition,s=i.getLimit,f=i.toPosition,a=n.Slides,m=a.isEnough,d=a.getLength,g=t.omitEnd,c=e.is(ke),v=e.is(Ve),_=U(V,!1),A=U(V,!0),h=t.start||0,E,w=h,b,M,S;function O(){k(),o([Z,K,vt],k),o(dt,P)}function k(){b=d(!0),M=t.perMove,S=t.perPage,E=p();var y=Oe(h,0,g?E:b-1);y!==h&&(h=y,i.reposition())}function P(){E!==p()&&l(vt)}function L(y,G,J){if(!Ee()){var X=N(y),j=W(X);j>-1&&(G||j!==h)&&(z(j),i.move(X,j,w,J))}}function I(y,G,J,X){n.Scroll.scroll(y,G,J,function(){var j=W(i.toIndex(u()));z(g?Ae(j,E):j),X&&X()})}function N(y){var G=h;if(me(y)){var J=y.match(/([+\-<>])(\d+)?/)||[],X=J[1],j=J[2];X==="+"||X==="-"?G=F(h+ +(""+X+(+j||1)),h):X===">"?G=j?C(+j):_(!0):X==="<"&&(G=A(!0))}else G=c?y:Oe(y,0,E);return G}function V(y,G){var J=M||($()?1:S),X=F(h+J*(y?-1:1),h,!(M||$()));return X===-1&&v&&!Sn(u(),s(!y),1)?y?0:E:G?X:W(X)}function F(y,G,J){if(m()||$()){var X=Y(y);X!==y&&(G=y,y=X,J=!1),y<0||y>E?!M&&(ot(0,y,G,!0)||ot(E,G,y,!0))?y=C(T(y)):c?y=J?y<0?-(b%S||S):b:y:t.rewind?y=y<0?E:0:y=-1:J&&y!==G&&(y=C(T(G)+(y<G?-1:1)))}else y=-1;return y}function Y(y){if(v&&t.trimSpace==="move"&&y!==h)for(var G=u();G===f(y,!0)&&ot(y,0,e.length-1,!t.rewind);)y<h?--y:++y;return y}function W(y){return c?(y+b)%b||0:y}function p(){for(var y=b-($()||c&&M?1:S);g&&y-- >0;)if(f(b-1,!0)!==f(y,!0)){y++;break}return Oe(y,0,b-1)}function C(y){return Oe($()?y:S*y,0,E)}function T(y){return $()?Ae(y,E):ft((y>=E?b-1:y)/S)}function D(y){var G=i.toIndex(y);return v?Oe(G,0,E):G}function z(y){y!==h&&(w=h,h=y)}function q(y){return y?w:h}function $(){return!je(t.focus)||t.isNavigation}function Ee(){return e.state.is([xe,qe])&&!!t.waitForTransition}return{mount:O,go:L,scroll:I,getNext:_,getPrev:A,getAdjacent:V,getEnd:p,setIndex:z,getIndex:q,toIndex:C,toPage:T,toDest:D,hasFocus:$,isBusy:Ee}}var Dr="http://www.w3.org/2000/svg",Cr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",rt=40;function Pr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,u=t.classes,s=t.i18n,f=n.Elements,a=n.Controller,m=f.arrows,d=f.track,g=m,c=f.prev,v=f.next,_,A,h={};function E(){b(),o(Z,w)}function w(){M(),E()}function b(){var I=t.arrows;I&&!(c&&v)&&k(),c&&v&&(Ye(h,{prev:c,next:v}),Xe(g,I?"":"none"),oe(g,A=jt+"--"+t.direction),I&&(S(),L(),x([c,v],tt,d.id),i(Cn,c,v)))}function M(){r.destroy(),ve(g,A),_?(Ne(m?[c,v]:g),c=v=null):ue([c,v],qt)}function S(){o([ye,Fe,K,be,vt],L),l(v,"click",U(O,">")),l(c,"click",U(O,"<"))}function O(I){a.go(I,!0)}function k(){g=m||Pe("div",u.arrows),c=P(!0),v=P(!1),_=!0,Je(g,[c,v]),!m&&Ft(g,d)}function P(I){var N='<button class="'+u.arrow+" "+(I?u.prev:u.next)+'" type="button"><svg xmlns="'+Dr+'" viewBox="0 0 '+rt+" "+rt+'" width="'+rt+'" height="'+rt+'" focusable="false"><path d="'+(t.arrowPath||Cr)+'" />';return _n(N)}function L(){if(c&&v){var I=e.index,N=a.getPrev(),V=a.getNext(),F=N>-1&&I<N?s.last:s.prev,Y=V>-1&&I>V?s.first:s.next;c.disabled=N<0,v.disabled=V<0,x(c,te,F),x(v,te,Y),i(Pn,c,v,N,V)}}return{arrows:h,mount:E,destroy:M,update:L}}var wr=zt+"-interval";function pr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.emit,u=Et(t.interval,e.go.bind(e,">"),S),s=u.isPaused,f=n.Elements,a=n.Elements,m=a.root,d=a.toggle,g=t.autoplay,c,v,_=g==="pause";function A(){g&&(h(),d&&x(d,tt,f.track.id),_||E(),M())}function h(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(k){c=k.type==="mouseenter",b()}),t.pauseOnFocus&&l(m,"focusin focusout",function(k){v=k.type==="focusin",b()}),d&&l(d,"click",function(){_?E():w(!0)}),o([ge,gt,K],u.rewind),o(ge,O)}function E(){s()&&n.Slides.isEnough()&&(u.start(!t.resetProgress),v=c=_=!1,M(),i(Ht))}function w(k){k===void 0&&(k=!0),_=!!k,M(),s()||(u.pause(),i(Yt))}function b(){_||(c||v?w(!1):E())}function M(){d&&(fe(d,Re,!_),x(d,te,t.i18n[_?"play":"pause"]))}function S(k){var P=f.bar;P&&re(P,"width",k*100+"%"),i(Mn,k)}function O(k){var P=n.Slides.getAt(k);u.set(P&&+ie(P.slide,wr)||t.interval)}return{mount:A,destroy:u.cancel,play:E,pause:w,isPaused:s}}function Mr(e,n,t){var r=H(e),o=r.on;function l(){t.cover&&(o(Xt,U(u,!0)),o([ye,Z,K],U(i,!0)))}function i(s){n.Slides.forEach(function(f){var a=Qe(f.container||f.slide,"img");a&&a.src&&u(s,a,f)})}function u(s,f,a){a.style("background",s?'center/cover no-repeat url("'+f.src+'")':"",!0),Xe(f,s?"none":"")}return{mount:l,destroy:U(i,!1)}}var Vr=10,xr=600,Fr=.6,kr=1.5,zr=800;function Gr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=e.state.set,u=n.Move,s=u.getPosition,f=u.getLimit,a=u.exceededLimit,m=u.translate,d=e.is(Ve),g,c,v=1;function _(){o(ge,w),o([Z,K],b)}function A(S,O,k,P,L){var I=s();if(w(),k&&(!d||!a())){var N=n.Layout.sliderSize(),V=Dt(S)*N*ft(Q(S)/N)||0;S=u.toPosition(n.Controller.toDest(S%N))+V}var F=Sn(I,S,1);v=1,O=F?0:O||ct(Q(S-I)/kr,zr),c=P,g=Et(O,h,U(E,I,S,L),1),i(qe),l(gt),g.start()}function h(){i(pe),c&&c(),l(be)}function E(S,O,k,P){var L=s(),I=S+(O-S)*M(P),N=(I-L)*v;m(L+N),d&&!k&&a()&&(v*=Fr,Q(N)<Vr&&A(f(a(!0)),xr,!1,c,!0))}function w(){g&&g.cancel()}function b(){g&&!g.isPaused()&&(w(),h())}function M(S){var O=t.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:_,destroy:w,scroll:A,cancel:b}}var De={passive:!1,capture:!0};function Ur(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,u=r.unbind,s=e.state,f=n.Move,a=n.Scroll,m=n.Controller,d=n.Elements.track,g=n.Media.reduce,c=n.Direction,v=c.resolve,_=c.orient,A=f.getPosition,h=f.exceededLimit,E,w,b,M,S,O=!1,k,P,L;function I(){i(d,Nt,bt,De),i(d,Rt,bt,De),i(d,qn,V,De),i(d,"click",W,{capture:!0}),i(d,"dragstart",ce),o([ye,Z],N)}function N(){var R=t.drag;Qt(!R),M=R==="free"}function V(R){if(k=!1,!P){var B=j(R);X(R.target)&&(B||!R.button)&&(m.isBusy()?ce(R,!0):(L=B?d:window,S=s.is([xe,qe]),b=null,i(L,Nt,F,De),i(L,Rt,Y,De),f.cancel(),a.cancel(),p(R)))}}function F(R){if(s.is(it)||(s.set(it),l(bn)),R.cancelable)if(S){f.translate(E+J($(R)));var B=Ee(R)>ln,Te=O!==(O=h());(B||Te)&&p(R),k=!0,l(On),ce(R)}else D(R)&&(S=T(R),ce(R))}function Y(R){s.is(it)&&(s.set(pe),l(Dn)),S&&(C(R),ce(R)),u(L,Nt,F),u(L,Rt,Y),S=!1}function W(R){!P&&k&&ce(R,!0)}function p(R){b=w,w=R,E=A()}function C(R){var B=z(R),Te=q(B),ze=t.rewind&&t.rewindByDrag;g(!1),M?m.scroll(Te,0,t.snap):e.is(nt)?m.go(_(Dt(B))<0?ze?"<":"-":ze?">":"+"):e.is(Ve)&&O&&ze?m.go(h(!0)?">":"<"):m.go(m.toDest(Te),!0),g(!0)}function T(R){var B=t.dragMinThreshold,Te=Be(B),ze=Te&&B.mouse||0,Zn=(Te?B.touch:+B)||10;return Q($(R))>(j(R)?Zn:ze)}function D(R){return Q($(R))>Q($(R,!0))}function z(R){if(e.is(ke)||!O){var B=Ee(R);if(B&&B<ln)return $(R)/B}return 0}function q(R){return A()+Dt(R)*Ae(Q(R)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function $(R,B){return G(R,B)-G(y(R),B)}function Ee(R){return Ot(R)-Ot(y(R))}function y(R){return w===R&&b||w}function G(R,B){return(j(R)?R.changedTouches[0]:R)["page"+v(B?"Y":"X")]}function J(R){return R/(O&&e.is(Ve)?yr:1)}function X(R){var B=t.noDrag;return!We(R,"."+Hn+", ."+St)&&(!B||!We(R,B))}function j(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function jn(){return S}function Qt(R){P=R}return{mount:I,disable:Qt,isDragging:jn}}var Br={Spacebar:" ",Right:At,Left:mt,Up:Fn,Down:kn};function Zt(e){return e=me(e)?e:e.key,Br[e]||e}var dn="keydown";function Wr(e,n,t){var r=H(e),o=r.on,l=r.bind,i=r.unbind,u=e.root,s=n.Direction.resolve,f,a;function m(){d(),o(Z,g),o(Z,d),o(ge,v)}function d(){var A=t.keyboard;A&&(f=A==="global"?window:u,l(f,dn,_))}function g(){i(f,dn)}function c(A){a=A}function v(){var A=a;a=!0,gn(function(){a=A})}function _(A){if(!a){var h=Zt(A);h===s(mt)?e.go("<"):h===s(At)&&e.go(">")}}return{mount:m,destroy:g,disable:c}}var Ue=zt+"-lazy",ut=Ue+"-srcset",Hr="["+Ue+"], ["+ut+"]";function Yr(e,n,t){var r=H(e),o=r.on,l=r.off,i=r.bind,u=r.emit,s=t.lazyLoad==="sequential",f=[Fe,be],a=[];function m(){t.lazyLoad&&(d(),o(K,d))}function d(){de(a),g(),s?A():(l(f),o(f,c),c())}function g(){n.Slides.forEach(function(h){kt(h.slide,Hr).forEach(function(E){var w=ie(E,Ue),b=ie(E,ut);if(w!==E.src||b!==E.srcset){var M=t.classes.spinner,S=E.parentElement,O=Qe(S,"."+M)||Pe("span",M,S);a.push([E,h,O]),E.src||Xe(E,"none")}})})}function c(){a=a.filter(function(h){var E=t.perPage*((t.preloadPages||1)+1)-1;return h[1].isWithin(e.index,E)?v(h):!0}),a.length||l(f)}function v(h){var E=h[0];oe(h[1].slide,pt),i(E,"load error",U(_,h)),x(E,"src",ie(E,Ue)),x(E,"srcset",ie(E,ut)),ue(E,Ue),ue(E,ut)}function _(h,E){var w=h[0],b=h[1];ve(b.slide,pt),E.type!=="error"&&(Ne(h[2]),Xe(w,""),u(Xt,w,b),u(Me)),s&&A()}function A(){a.length&&v(a.shift())}return{mount:m,destroy:U(de,a),check:c}}function Xr(e,n,t){var r=H(e),o=r.on,l=r.emit,i=r.bind,u=n.Slides,s=n.Elements,f=n.Controller,a=f.hasFocus,m=f.getIndex,d=f.go,g=n.Direction.resolve,c=s.pagination,v=[],_,A;function h(){E(),o([Z,K,vt],h);var P=t.pagination;c&&Xe(c,P?"":"none"),P&&(o([ge,gt,be],k),w(),k(),l(wn,{list:_,items:v},O(e.index)))}function E(){_&&(Ne(c?_e(_.children):_),ve(_,A),de(v),_=null),r.destroy()}function w(){var P=e.length,L=t.classes,I=t.i18n,N=t.perPage,V=a()?f.getEnd()+1:Ke(P/N);_=c||Pe("ul",L.pagination,s.track.parentElement),oe(_,A=Tt+"--"+S()),x(_,le,"tablist"),x(_,te,I.select),x(_,$t,S()===_t?"vertical":"");for(var F=0;F<V;F++){var Y=Pe("li",null,_),W=Pe("button",{class:L.page,type:"button"},Y),p=u.getIn(F).map(function(T){return T.slide.id}),C=!a()&&N>1?I.pageX:I.slideX;i(W,"click",U(b,F)),t.paginationKeyboard&&i(W,"keydown",U(M,F)),x(Y,le,"presentation"),x(W,le,"tab"),x(W,tt,p.join(" ")),x(W,te,Ct(C,F+1)),x(W,we,-1),v.push({li:Y,button:W,page:F})}}function b(P){d(">"+P,!0)}function M(P,L){var I=v.length,N=Zt(L),V=S(),F=-1;N===g(At,!1,V)?F=++P%I:N===g(mt,!1,V)?F=(--P+I)%I:N==="Home"?F=0:N==="End"&&(F=I-1);var Y=v[F];Y&&(An(Y.button),d(">"+F),ce(L,!0))}function S(){return t.paginationDirection||t.direction}function O(P){return v[f.toPage(P)]}function k(){var P=O(m(!0)),L=O(m());if(P){var I=P.button;ve(I,Re),ue(I,un),x(I,we,-1)}if(L){var N=L.button;oe(N,Re),x(N,un,!0),x(N,we,"")}l(pn,{list:_,items:v},P,L)}return{items:v,mount:h,destroy:E,getAt:O,update:k}}var Kr=[" ","Enter"];function $r(e,n,t){var r=t.isNavigation,o=t.slideFocus,l=[];function i(){e.splides.forEach(function(c){c.isParent||(f(e,c.splide),f(c.splide,e))}),r&&a()}function u(){l.forEach(function(c){c.destroy()}),de(l)}function s(){u(),i()}function f(c,v){var _=H(c);_.on(ge,function(A,h,E){v.go(v.is(ke)?E:A)}),l.push(_)}function a(){var c=H(e),v=c.on;v(Ut,d),v(Vn,g),v([ye,Z],m),l.push(c),c.emit(Wt,e.splides)}function m(){x(n.Elements.list,$t,t.direction===_t?"vertical":"")}function d(c){e.go(c.index)}function g(c,v){xt(Kr,Zt(v))&&(d(c),ce(v))}return{setup:U(n.Media.set,{slideFocus:je(o)?r:o},!0),mount:i,destroy:u,remount:s}}function qr(e,n,t){var r=H(e),o=r.bind,l=0;function i(){t.wheel&&o(n.Elements.track,"wheel",u,De)}function u(f){if(f.cancelable){var a=f.deltaY,m=a<0,d=Ot(f),g=t.wheelMinThreshold||0,c=t.wheelSleep||0;Q(a)>g&&d-l>c&&(e.go(m?"<":">"),l=d),s(m)&&ce(f)}}function s(f){return!t.releaseWheel||e.state.is(xe)||n.Controller.getAdjacent(f)!==-1}return{mount:i}}var jr=90;function Zr(e,n,t){var r=H(e),o=r.on,l=n.Elements.track,i=t.live&&!t.isNavigation,u=Pe("span",Er),s=Et(jr,U(a,!1));function f(){i&&(d(!n.Autoplay.isPaused()),x(l,fn,!0),u.textContent="…",o(Ht,U(d,!0)),o(Yt,U(d,!1)),o([Fe,be],U(a,!0)))}function a(g){x(l,cn,g),g?(Je(l,u),s.start()):(Ne(u),s.cancel())}function m(){ue(l,[sn,fn,cn]),Ne(u)}function d(g){i&&x(l,sn,g?"off":"polite")}return{mount:f,disable:d,destroy:m}}var Jr=Object.freeze({__proto__:null,Media:or,Direction:ur,Elements:Sr,Slides:Lr,Layout:Ir,Clones:Rr,Move:br,Controller:Or,Arrows:Pr,Autoplay:pr,Cover:Mr,Scroll:Gr,Drag:Ur,Keyboard:Wr,LazyLoad:Yr,Pagination:Xr,Sync:$r,Wheel:qr,Live:Zr}),Qr={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ei={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ar,i18n:Qr,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ti(e,n,t){var r=n.Slides;function o(){H(e).on([ye,K],l)}function l(){r.forEach(function(u){u.style("transform","translateX(-"+100*u.index+"%)")})}function i(u,s){r.style("transition","opacity "+t.speed+"ms "+t.easing),gn(s)}return{mount:o,start:i,cancel:bt}}function ni(e,n,t){var r=n.Move,o=n.Controller,l=n.Scroll,i=n.Elements.list,u=U(re,i,"transition"),s;function f(){H(e).bind(i,"transitionend",function(g){g.target===i&&s&&(m(),s())})}function a(g,c){var v=r.toPosition(g,!0),_=r.getPosition(),A=d(g);Q(v-_)>=1&&A>=1?t.useScroll?l.scroll(v,A,!1,c):(u("transform "+A+"ms "+t.easing),r.translate(v,!0),s=c):(r.jump(g),c())}function m(){u(""),l.cancel()}function d(g){var c=t.rewindSpeed;if(e.is(Ve)&&c){var v=o.getIndex(!0),_=o.getEnd();if(v===0&&g>=_||v>=_&&g===0)return c}return t.speed}return{mount:f,start:a,cancel:m}}var ri=function(){function e(t,r){this.event=H(),this.Components={},this.state=ir(Ce),this.splides=[],this._o={},this._E={};var o=me(t)?yn(document,t):t;Ge(o,o+" is invalid."),this.root=o,r=he({label:ie(o,te)||"",labelledby:ie(o,Kt)||""},ei,e.defaults,r||{});try{he(r,JSON.parse(ie(o,zt)))}catch{Ge(!1,"Invalid JSON")}this._o=Object.create(he({},r))}var n=e.prototype;return n.mount=function(r,o){var l=this,i=this.state,u=this.Components;Ge(i.is([Ce,st]),"Already mounted!"),i.set(Ce),this._C=u,this._T=o||this._T||(this.is(nt)?ti:ni),this._E=r||this._E;var s=Ye({},Jr,this._E,{Transition:this._T});return Ie(s,function(f,a){var m=f(l,u,l._o);u[a]=m,m.setup&&m.setup()}),Ie(u,function(f){f.mount&&f.mount()}),this.emit(ye),oe(this.root,hr),i.set(pe),this.emit(Pt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(pe)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,o){return this.event.on(r,o),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var o;return(o=this.event).emit.apply(o,[r].concat(_e(arguments,1))),this},n.add=function(r,o){return this._C.Slides.add(r,o),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(K),this},n.destroy=function(r){r===void 0&&(r=!0);var o=this.event,l=this.state;return l.is(Ce)?H(this).on(Pt,this.destroy.bind(this,r)):(Ie(this._C,function(i){i.destroy&&i.destroy(r)},!0),o.emit(Bt),o.destroy(),r&&de(this.splides),l.set(st)),this},Qn(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),Jt=ri;Jt.defaults={};Jt.STATES=tr;const ii=[[ye,"onMounted"],[Pt,"onReady"],[ge,"onMove"],[Fe,"onMoved"],[Ut,"onClick"],[Ln,"onActive"],[In,"onInactive"],[Nn,"onVisible"],[Rn,"onHidden"],[K,"onRefresh"],[Z,"onUpdated"],[Me,"onResize"],[dt,"onResized"],[bn,"onDrag"],[On,"onDragging"],[Dn,"onDragged"],[gt,"onScroll"],[be,"onScrolled"],[Bt,"onDestroy"],[Cn,"onArrowsMounted"],[Pn,"onArrowsUpdated"],[wn,"onPaginationMounted"],[pn,"onPaginationUpdated"],[Wt,"onNavigationMounted"],[Ht,"onAutoplayPlay"],[Mn,"onAutoplayPlaying"],[Yt,"onAutoplayPause"],[Xt,"onLazyLoadLoaded"]];class ai extends HTMLElement{connectedCallback(){const n=this.dataset.splideid||"",t=JSON.parse(this.dataset.options||"");let r=new Jt("#"+n,t);const o=r.root.attributes;ii.forEach(([l,i])=>{const u=o[i];if(u){const s=u.nodeValue,f=Function("return "+s);r.on(l,(...a)=>f()(r,...a))}}),r.mount()}}customElements.define("astro-splide",ai);