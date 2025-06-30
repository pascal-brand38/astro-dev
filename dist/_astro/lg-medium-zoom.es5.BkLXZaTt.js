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
***************************************************************************** */var o=function(){return o=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++){t=arguments[s];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)},a={beforeOpen:"lgBeforeOpen"},l={margin:40,mediumZoom:!0,backgroundColor:"#000"},g=function(){function r(e,t){var s=this;this.core=e,this.$LG=t,this.core.getMediaContainerPosition=function(){return{top:s.settings.margin,bottom:s.settings.margin}};var n={controls:!1,download:!1,counter:!1,showCloseIcon:!1,extraProps:["lgBackgroundColor"],closeOnTap:!1,enableSwipe:!1,enableDrag:!1,swipeToClose:!1,addClass:this.core.settings.addClass+" lg-medium-zoom"};return this.core.settings=o(o({},this.core.settings),n),this.settings=o(o(o({},l),this.core.settings),n),this}return r.prototype.toggleItemClass=function(){for(var e=0;e<this.core.items.length;e++){var t=this.$LG(this.core.items[e]);t.toggleClass("lg-medium-zoom-item")}},r.prototype.init=function(){var e=this;this.settings.mediumZoom&&(this.core.LGel.on(a.beforeOpen+".medium",function(){e.core.$backdrop.css("background-color",e.core.galleryItems[e.core.index].lgBackgroundColor||e.settings.backgroundColor)}),this.toggleItemClass(),this.core.outer.on("click.lg.medium",function(){e.core.closeGallery()}))},r.prototype.destroy=function(){this.toggleItemClass()},r}();export{g as default};
