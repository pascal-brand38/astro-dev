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
***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},t.apply(this,arguments)},u={fullScreen:!0,fullscreenPluginStrings:{toggleFullscreen:"Toggle Fullscreen"}},o=function(){function l(e,n){return this.core=e,this.$LG=n,this.settings=t(t({},u),this.core.settings),this}return l.prototype.init=function(){var e="";if(this.settings.fullScreen){if(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled&&!document.mozFullScreenEnabled&&!document.msFullscreenEnabled)return;e='<button type="button" aria-label="'+this.settings.fullscreenPluginStrings.toggleFullscreen+'" class="lg-fullscreen lg-icon"></button>',this.core.$toolbar.append(e),this.fullScreen()}},l.prototype.isFullScreen=function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},l.prototype.requestFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},l.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},l.prototype.fullScreen=function(){var e=this;this.$LG(document).on("fullscreenchange.lg.global"+this.core.lgId+` 
            webkitfullscreenchange.lg.global`+this.core.lgId+` 
            mozfullscreenchange.lg.global`+this.core.lgId+` 
            MSFullscreenChange.lg.global`+this.core.lgId,function(){e.core.lgOpened&&e.core.outer.toggleClass("lg-fullscreen-on")}),this.core.outer.find(".lg-fullscreen").first().on("click.lg",function(){e.isFullScreen()?e.exitFullscreen():e.requestFullscreen()})},l.prototype.closeGallery=function(){this.isFullScreen()&&this.exitFullscreen()},l.prototype.destroy=function(){this.$LG(document).off("fullscreenchange.lg.global"+this.core.lgId+` 
            webkitfullscreenchange.lg.global`+this.core.lgId+` 
            mozfullscreenchange.lg.global`+this.core.lgId+` 
            MSFullscreenChange.lg.global`+this.core.lgId)},l}();export{o as default};
