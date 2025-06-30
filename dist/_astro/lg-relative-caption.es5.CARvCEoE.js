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
***************************************************************************** */var a=function(){return a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)},r={containerResize:"lgContainerResize",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide"},d={relativeCaption:!1},g=function(){function s(e){this.core=e;var t={addClass:this.core.settings.addClass+" lg-relative-caption"};return this.core.settings=a(a({},this.core.settings),t),this.settings=a(a(a({},d),this.core.settings),t),this}return s.prototype.init=function(){var e=this;this.settings.relativeCaption&&(this.core.LGel.on(r.slideItemLoad+".caption",function(t){var i=t.detail,n=i.index,o=i.delay;setTimeout(function(){n===e.core.index&&e.setRelativeCaption(n)},o)}),this.core.LGel.on(r.afterSlide+".caption",function(t){var i=t.detail.index;setTimeout(function(){var n=e.core.getSlideItem(i);n.hasClass("lg-complete")&&e.setRelativeCaption(i)})}),this.core.LGel.on(r.beforeSlide+".caption",function(t){var i=t.detail.index;setTimeout(function(){var n=e.core.getSlideItem(i);n.removeClass("lg-show-caption")})}),this.core.LGel.on(r.containerResize+".caption",function(t){e.setRelativeCaption(e.core.index)}))},s.prototype.setCaptionStyle=function(e,t,i){var n=this.core.getSlideItem(e).find(".lg-relative-caption-item"),o=this.core.getSlideItem(e).find(".lg-sub-html");o.css("width",t.width+"px").css("left",t.left+"px");var l=n.get().getBoundingClientRect(),c=i.bottom-t.bottom-l.height;o.css("top","auto").css("bottom",Math.max(c,0)+"px")},s.prototype.setRelativeCaption=function(e){var t=this.core.getSlideItem(e);if(t.hasClass("lg-current")){var i=this.core.getSlideItem(e).find(".lg-object").get().getBoundingClientRect(),n=this.core.getSlideItem(e).get().getBoundingClientRect();this.setCaptionStyle(e,i,n),t.addClass("lg-show-caption")}},s.prototype.destroy=function(){this.core.LGel.off(".caption")},s}();export{g as default};
