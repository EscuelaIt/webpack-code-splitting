!function(e){function t(t){for(var i,o,n=t[0],d=t[1],s=t[2],l=0,p=[];l<n.length;l++)o=n[l],r[o]&&p.push(r[o][0]),r[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(m&&m(t);p.length;)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],i=!0,n=1;n<a.length;n++){var d=a[n];0!==r[d]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},r={3:0},c=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var n=window.webpackJsonp=window.webpackJsonp||[],d=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var m=d;c.push([51,0]),a()}({51:function(e,t,a){"use strict";a.r(t);a(22),a(20),a(24);var i=a(1),r=a(3);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(e,t){return void 0===t||t?this.add(e):this.remove(e),void 0===t||t});const c=new WeakMap,o=new WeakMap,n=Object(r.e)(e=>t=>{if(!(t instanceof r.a)||t instanceof r.c||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");o.has(t)||(t.committer.element.className=t.committer.strings.join(" "),o.set(t,!0));const a=c.get(t);for(const i in a)i in e||t.committer.element.classList.remove(i);for(const i in e)a&&a[i]===e[i]||t.committer.element.classList.toggle(i,Boolean(e[i]));c.set(t,e)}),d=i.c`<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}.mdc-button{flex:1}</style>`;var s=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.adapter_=e}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const m={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},l={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},p={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let h,u;function b(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=h;if("boolean"==typeof h&&!t)return a;if(!(e.CSS&&"function"==typeof e.CSS.supports))return;const i=e.CSS.supports("--css-vars","yes"),r=e.CSS.supports("(--css-vars: yes)")&&e.CSS.supports("color","#00000000");return a=!(!i&&!r)&&!function(e){const t=e.document,a=t.createElement("div");a.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(a);const i=e.getComputedStyle(a),r=null!==i&&"solid"===i.borderTopStyle;return a.remove(),r}(e),t||(h=a),a}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===u||t){let t=!1;try{e.document.addEventListener("test",null,{get passive(){return t=!0}})}catch(e){}u=t}return!!u&&{passive:!0}}function f(e){const t=["matches","webkitMatchesSelector","msMatchesSelector"];let a="matches";for(let i=0;i<t.length;i++){const r=t[i];if(r in e){a=r;break}}return a}const g=["touchstart","pointerdown","mousedown","keydown"],k=["touchend","pointerup","mouseup"];let v=[];class x extends s{static get cssClasses(){return m}static get strings(){return l}static get numbers(){return p}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(e){super(Object.assign(x.defaultAdapter,e)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(e=>this.activate_(e)),this.deactivateHandler_=(()=>this.deactivate_()),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}init(){const e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){const e=x.cssClasses,t=e.ROOT,a=e.UNBOUNDED;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(a),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(x.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(x.cssClasses.FG_DEACTIVATION));const e=x.cssClasses,t=e.ROOT,a=e.UNBOUNDED;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(a),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(e){e&&(g.forEach(e=>{this.adapter_.registerInteractionHandler(e,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(e){"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):k.forEach(e=>{this.adapter_.registerDocumentInteractionHandler(e,this.deactivateHandler_)})}deregisterRootHandlers_(){g.forEach(e=>{this.adapter_.deregisterInteractionHandler(e,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),k.forEach(e=>{this.adapter_.deregisterDocumentInteractionHandler(e,this.deactivateHandler_)})}removeCssVars_(){const e=x.strings;Object.keys(e).forEach(t=>{0===t.indexOf("VAR_")&&this.adapter_.updateCssVariable(e[t],null)})}activate_(e){if(this.adapter_.isSurfaceDisabled())return;const t=this.activationState_;if(t.isActivated)return;const a=this.previousActivationEvent_;a&&void 0!==e&&a.type!==e.type||(t.isActivated=!0,t.isProgrammatic=void 0===e,t.activationEvent=e,t.wasActivatedByPointer=!t.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&v.length>0&&v.some(e=>this.adapter_.containsEventTarget(e))?this.resetActivationState_():(void 0!==e&&(v.push(e.target),this.registerDeactivationHandlers_(e)),t.wasElementMadeActive=this.checkElementMadeActive_(e),t.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{v=[],t.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(t.wasElementMadeActive=this.checkElementMadeActive_(e),t.wasElementMadeActive&&this.animateActivation_()),t.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()}activate(e){this.activate_(e)}animateActivation_(){const e=x.strings,t=e.VAR_FG_TRANSLATE_START,a=e.VAR_FG_TRANSLATE_END,i=x.cssClasses,r=i.FG_DEACTIVATION,c=i.FG_ACTIVATION,o=x.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();let n="",d="";if(!this.adapter_.isUnbounded()){const e=this.getFgTranslationCoordinates_(),t=e.startPoint,a=e.endPoint;n=`${t.x}px, ${t.y}px`,d=`${a.x}px, ${a.y}px`}this.adapter_.updateCssVariable(t,n),this.adapter_.updateCssVariable(a,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(c),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),o)}getFgTranslationCoordinates_(){const e=this.activationState_,t=e.activationEvent;let a;return{startPoint:a={x:(a=e.wasActivatedByPointer?function(e,t,a){const i=t.x,r=t.y,c=i+a.left,o=r+a.top;let n,d;return"touchstart"===e.type?(n=(e=e).changedTouches[0].pageX-c,d=e.changedTouches[0].pageY-o):(n=(e=e).pageX-c,d=e.pageY-o),{x:n,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:a.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const e=x.cssClasses.FG_DEACTIVATION,t=this.activationState_,a=t.hasDeactivationUXRun,i=t.isActivated;(a||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(e)},p.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const e=x.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=void 0,x.numbers.TAP_DELAY_MS)}deactivate_(){const e=this.activationState_;if(!e.isActivated)return;const t=Object.assign({},e);e.isProgrammatic?(requestAnimationFrame(()=>this.animateDeactivation_(t)),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t),this.resetActivationState_()}))}deactivate(){this.deactivate_()}animateDeactivation_(e){let t=e.wasActivatedByPointer,a=e.wasElementMadeActive;(t||a)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+x.numbers.PADDING})(),this.initialSize_=Math.floor(e*x.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const e=x.strings,t=e.VAR_FG_SIZE,a=e.VAR_LEFT,i=e.VAR_TOP,r=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(a,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(e){const t=x.cssClasses.UNBOUNDED;e?this.adapter_.addClass(t):this.adapter_.removeClass(t)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(x.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(x.cssClasses.BG_FOCUSED))}}var y=x;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const A=i.c`<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}</style>`,E=f(HTMLElement.prototype),C=b(window),T=navigator.userAgent.match(/Safari/);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let I=!1;const N=e=>{T&&!I&&(()=>{I=!0;const e=new r.b({templateFactory:r.h});e.appendInto(document.head),e.setValue(A),e.commit()})();const t=e.surfaceNode,a=e.interactionNode||t;a.getRootNode()!==t.getRootNode()&&""===a.style.position&&(a.style.position="relative");const i=new y({browserSupportsCssVars:()=>C,isUnbounded:()=>void 0===e.unbounded||e.unbounded,isSurfaceActive:()=>a[E](":active"),isSurfaceDisabled:()=>Boolean(e.disabled),addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),containsEventTarget:e=>a.contains(e),registerInteractionHandler:(e,t)=>a.addEventListener(e,t,_()),deregisterInteractionHandler:(e,t)=>a.removeEventListener(e,t,_()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,_()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,_()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(e,a)=>t.style.setProperty(e,a),computeBoundingRect:()=>a.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return i.init(),i},S=new WeakMap,D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.e)(t=>{const a=t.committer.element,i=e.interactionNode||a;let c=t.value;const o=S.get(c);void 0!==o&&o!==i&&(c.destroy(),c=r.g),c===r.g?(c=N(Object.assign({},e,{surfaceNode:a})),S.set(c,i),t.setValue(c)):(void 0!==e.unbounded&&c.setUnbounded(e.unbounded),void 0!==e.disabled&&c.setUnbounded(e.disabled)),!0===e.active?c.activate():!1===e.active&&c.deactivate()})};a(25);var w=function(e,t,a,i){var r,c=arguments.length,o=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(c<3?r(o):c>3?r(t,a,o):r(t,a))||o);return c>3&&o&&Object.defineProperty(t,a,o),o};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let R=class extends i.a{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}renderStyle(){return d}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return i.c`
      ${this.renderStyle()}
      <button
          .ripple="${D({unbounded:!1})}"
          class="mdc-button ${n(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${this.icon?i.c`<span class="material-icons mdc-button__icon">${this.icon}</span>`:""}
        ${this.label}
        <slot></slot>
      </button>`}};w([Object(i.d)({type:Boolean})],R.prototype,"raised",void 0),w([Object(i.d)({type:Boolean})],R.prototype,"unelevated",void 0),w([Object(i.d)({type:Boolean})],R.prototype,"outlined",void 0),w([Object(i.d)({type:Boolean})],R.prototype,"dense",void 0),w([Object(i.d)({type:Boolean})],R.prototype,"disabled",void 0),w([Object(i.d)()],R.prototype,"icon",void 0),w([Object(i.d)()],R.prototype,"label",void 0),R=w([Object(i.b)("mwc-button")],R);class O extends i.a{createAdapter(){return{addClass:e=>{this.mdcRoot.classList.add(e)},removeClass:e=>{this.mdcRoot.classList.remove(e)},hasClass:e=>this.mdcRoot.classList.contains(e)}}createFoundation(){this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class H extends O{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const M=i.c`<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:11px;right:initial;display:inline-flex;position:absolute;top:11px;bottom:0;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color}.mdc-checkbox[dir=rtl] .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-width:1px;border-style:solid;opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;transition:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before{transform:scale(2.75, 2.75);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.12}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}:host{outline:none}</style>`;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class z{}z.prototype.root_,z.prototype.unbounded,z.prototype.disabled;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const F={UPGRADED:"mdc-checkbox--upgraded",CHECKED:"mdc-checkbox--checked",INDETERMINATE:"mdc-checkbox--indeterminate",DISABLED:"mdc-checkbox--disabled",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked"},L={NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_UNCHECKED:"unchecked",TRANSITION_STATE_INDETERMINATE:"indeterminate",ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed"},P={ANIM_END_LATCH_MS:250},j=["checked","indeterminate"];class U extends s{static get cssClasses(){return F}static get strings(){return L}static get numbers(){return P}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setNativeControlAttr:()=>{},removeNativeControlAttr:()=>{},getNativeControl:()=>{},forceLayout:()=>{},isAttachedToDOM:()=>{},isIndeterminate:()=>{},isChecked:()=>{},hasNativeControl:()=>{},setNativeControlDisabled:()=>{}}}constructor(e){super(Object.assign(U.defaultAdapter,e)),this.currentCheckState_=L.TRANSITION_STATE_INIT,this.currentAnimationClass_="",this.animEndLatchTimer_=0,this.enableAnimationEndHandler_=!1}init(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(F.UPGRADED),this.installPropertyChangeHooks_()}destroy(){this.uninstallPropertyChangeHooks_(),clearTimeout(this.animEndLatchTimer_)}setDisabled(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(F.DISABLED):this.adapter_.removeClass(F.DISABLED)}handleAnimationEnd(){this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(()=>{this.adapter_.removeClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!1},P.ANIM_END_LATCH_MS))}handleChange(){this.transitionCheckState_()}installPropertyChangeHooks_(){const e=this.getNativeControl_(),t=Object.getPrototypeOf(e);j.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);if(V(i)){const t={get:i.get,set:t=>{i.set.call(e,t),this.transitionCheckState_()},configurable:i.configurable,enumerable:i.enumerable};Object.defineProperty(e,a,t)}})}uninstallPropertyChangeHooks_(){const e=this.getNativeControl_(),t=Object.getPrototypeOf(e);j.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);V(i)&&Object.defineProperty(e,a,i)})}transitionCheckState_(){if(!this.adapter_.hasNativeControl())return;const e=this.currentCheckState_,t=this.determineCheckState_();e!==t&&(this.updateAriaChecked_(),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,t),this.currentCheckState_=t,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0))}determineCheckState_(){const e=L.TRANSITION_STATE_INDETERMINATE,t=L.TRANSITION_STATE_CHECKED,a=L.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?e:this.adapter_.isChecked()?t:a}getTransitionAnimationClass_(e,t){const a=L.TRANSITION_STATE_INIT,i=L.TRANSITION_STATE_CHECKED,r=L.TRANSITION_STATE_UNCHECKED,c=U.cssClasses,o=c.ANIM_UNCHECKED_CHECKED,n=c.ANIM_UNCHECKED_INDETERMINATE,d=c.ANIM_CHECKED_UNCHECKED,s=c.ANIM_CHECKED_INDETERMINATE,m=c.ANIM_INDETERMINATE_CHECKED,l=c.ANIM_INDETERMINATE_UNCHECKED;switch(e){case a:if(t===r)return"";case r:return t===i?o:n;case i:return t===r?d:s;default:return t===i?m:l}}updateAriaChecked_(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(L.ARIA_CHECKED_ATTR,L.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(L.ARIA_CHECKED_ATTR)}getNativeControl_(){return this.adapter_.getNativeControl()||{checked:!1,indeterminate:!1,disabled:!1,value:null}}}function V(e){return!!e&&"function"==typeof e.set}var B=U,K=function(e,t,a,i){var r,c=arguments.length,o=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(c<3?r(o):c>3?r(t,a,o):r(t,a))||o);return c>3&&o&&Object.defineProperty(t,a,o),o};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let G=class extends H{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.mdcFoundationClass=B}renderStyle(){return M}get ripple(){return this.mdcRoot.ripple}createAdapter(){return Object.assign({},super.createAdapter(),{getNativeControl:()=>this.formElement,forceLayout:()=>{this.mdcRoot.offsetWidth},isAttachedToDOM:()=>this.isConnected,isIndeterminate:()=>this.indeterminate,isChecked:()=>this.checked,hasNativeControl:()=>Boolean(this.formElement),setNativeControlDisabled:e=>{this.formElement.disabled=e}})}render(){return i.c`
      ${this.renderStyle()}
      <div class="mdc-checkbox" @animationend="${this._animationEndHandler}" .ripple="${D()}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>`}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate,this.mdcFoundation.handleChange()}_animationEndHandler(){this.mdcFoundation.handleAnimationEnd()}};K([Object(i.e)(".mdc-checkbox")],G.prototype,"mdcRoot",void 0),K([Object(i.e)("input")],G.prototype,"formElement",void 0),K([Object(i.d)({type:Boolean})],G.prototype,"checked",void 0),K([Object(i.d)({type:Boolean})],G.prototype,"indeterminate",void 0),K([Object(i.d)({type:Boolean})],G.prototype,"disabled",void 0),K([Object(i.d)({type:String})],G.prototype,"value",void 0),G=K([Object(i.b)("mwc-checkbox")],G)}});