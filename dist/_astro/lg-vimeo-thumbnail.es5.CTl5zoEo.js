/*!
 * lightgallery | 2.9.0-beta.1 | June 15th 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return c=Object.assign||function(s){for(var e,i=1,r=arguments.length;i<r;i++){e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])}return s},c.apply(this,arguments)};function m(l,s,e,i){function r(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function o(a){try{n(i.next(a))}catch(h){u(h)}}function f(a){try{n(i.throw(a))}catch(h){u(h)}}function n(a){a.done?t(a.value):r(a.value).then(o,f)}n((i=i.apply(l,[])).next())})}function b(l,s){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},i,r,t,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(n){return function(a){return f([n,a])}}function f(n){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,r&&(t=n[0]&2?r.return:n[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,n[1])).done)return t;switch(r=0,t&&(n=[n[0]&2,t.value]),n[0]){case 0:case 1:t=n;break;case 4:return e.label++,{value:n[1],done:!1};case 5:e.label++,r=n[1],n=[0];continue;case 7:n=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!t||n[1]>t[0]&&n[1]<t[3])){e.label=n[1];break}if(n[0]===6&&e.label<t[1]){e.label=t[1],t=n;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(n);break}t[2]&&e.ops.pop(),e.trys.pop();continue}n=s.call(l,e)}catch(a){n=[6,a],r=0}finally{i=t=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}var v={init:"lgInit"},g={showVimeoThumbnails:!0,showThumbnailWithPlayButton:!1},y=function(){function l(s){return this.core=s,this.settings=c(c({},g),this.core.settings),this}return l.prototype.init=function(){var s=this;this.settings.showVimeoThumbnails&&this.core.LGel.on(v.init+".vimeothumbnails",function(e){var i=e.detail.instance,r=i.$container.find(".lg-thumb-outer").get();r&&s.setVimeoThumbnails(i)})},l.prototype.setVimeoThumbnails=function(s){return m(this,void 0,void 0,function(){var e,i,r,t,u;return b(this,function(o){switch(o.label){case 0:e=0,o.label=1;case 1:return e<s.galleryItems.length?(i=s.galleryItems[e],r=i.__slideVideoInfo||{},r.vimeo?[4,fetch("https://vimeo.com/api/oembed.json?url="+encodeURIComponent(i.src))]:[3,4]):[3,5];case 2:return t=o.sent(),[4,t.json()];case 3:u=o.sent(),s.$container.find(".lg-thumb-item").eq(e).find("img").attr("src",this.settings.showThumbnailWithPlayButton?u.thumbnail_url_with_play_button:u.thumbnail_url),o.label=4;case 4:return e++,[3,1];case 5:return[2]}})})},l.prototype.destroy=function(){this.core.LGel.off(".lg.vimeothumbnails"),this.core.LGel.off(".vimeothumbnails")},l}();export{y as default};
