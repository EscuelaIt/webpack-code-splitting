(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,r){"use strict";r.d(e,"d",function(){return n}),r.d(e,"g",function(){return i}),r.d(e,"b",function(){return s}),r.d(e,"c",function(){return o}),r.d(e,"i",function(){return a}),r.d(e,"e",function(){return l}),r.d(e,"f",function(){return c}),r.d(e,"a",function(){return h}),r.d(e,"h",function(){return p});r(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function i(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function s(t,e){return 0===t.indexOf(e+".")}function o(t,e){return 0===e.indexOf(t+".")}function a(t,e,r){return e+r.slice(t.length)}function l(t,e){return t===e||s(t,e)||o(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let n=t[r].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function h(t,e,r){let n=t,i=d(e);for(let t=0;t<i.length;t++){if(!n)return;n=n[i[t]]}return r&&(r.path=i.join(".")),n}function p(t,e,r){let n=t,i=d(e),s=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++){if(!(n=n[i[t]]))return}n[s]=r}else n[e]=r;return i.join(".")}},function(t,e,r){"use strict";var n=r(3),i=r(8),s=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const o=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function a(t,e){const r=t.element.content,n=t.parts,i=document.createTreeWalker(r,o,null,!1);let s=c(n),a=n[s],l=-1,d=0;const h=[];let p=null;for(;i.nextNode();){l++;const t=i.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(h.push(t),null===p&&(p=t)),null!==p&&d++;void 0!==a&&a.index===l;)a.index=null!==p?-1:a.index-d,a=n[s=c(n,s)]}h.forEach(t=>t.parentNode.removeChild(t))}const l=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const r=document.createTreeWalker(t,o,null,!1);for(;r.nextNode();)e++;return e},c=function(t){for(let e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){const r=t[e];if(Object(s.d)(r))return e}return-1};var d=r(16),h=r(14),p=r(17),u=r(13);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const _=(t,e)=>`${t}--${e}`;let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),f=!1);const m=t=>e=>{const r=_(e.type,t);let n=h.a.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},h.a.set(r,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(s.f);if(void 0===(i=n.keyString.get(o))){const r=e.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(r,t),i=new s.a(e,r),n.keyString.set(o,i)}return n.stringsArray.set(e.strings,i),i},y=["html","svg"],g=new Set,b=(t,e,r)=>{g.add(r);const n=t.querySelectorAll("style");if(0===n.length)return;const i=document.createElement("style");for(let t=0;t<n.length;t++){const e=n[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{y.forEach(e=>{const r=h.a.get(_(e,t));void 0!==r&&r.keyString.forEach(t=>{const e=t.element.content,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),a(t,r)})})})(r),function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=t.element.content,i=t.parts;if(null==r)return void n.appendChild(e);const s=document.createTreeWalker(n,o,null,!1);let a=c(i),d=0,h=-1;for(;s.nextNode();)for(h++,s.currentNode===r&&(d=l(e),r.parentNode.insertBefore(e,r));-1!==a&&i[a].index===h;){if(d>0){for(;-1!==a;)i[a].index+=d,a=c(i,a);return}a=c(i,a)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,r),window.ShadyCSS.nativeShadow){const r=e.element.content.querySelector("style");t.insertBefore(r.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),a(e,t)}};function P(t,e){return function(t){if(Array.isArray(t))return t}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(t)||function(t,e){var r=[],n=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const v=t=>null!==t,O=t=>t?"":null,w=(t,e)=>e!==t&&(e==e||t==t),C={attribute:!0,type:String,reflect:!1,hasChanged:w},T=new Promise(t=>t(!0)),E=1,N=4,S=8;class x extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=T,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const r of this._classProperties){var e=P(r,2);const n=e[0],i=e[1],s=this._attributeNameForProperty(n,i);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}return t}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(n){const i=this[t];this[r]=n,this._requestPropertyUpdate(t,i,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,r=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of r)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const r=void 0!==e&&e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:w)(t,e)}static _propertyValueFromAttribute(t,e){const r=e&&e.type;if(void 0===r)return t;const n=r===Boolean?v:"function"==typeof r?r:r.fromAttribute;return n?n(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?O:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const t of this.constructor._classProperties){const e=P(t,1)[0];if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}}_applyInstanceProperties(){for(const e of this._instanceProperties){var t=P(e,2);const r=t[0],n=t[1];this[r]=n}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&E?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;const n=this.constructor,i=n._propertyValueToAttribute(e,r);if(void 0!==i){const e=n._attributeNameForProperty(t,r);void 0!==e&&(this._updateState=this._updateState|S,null===i?this.removeAttribute(e):this.setAttribute(e,i),this._updateState=this._updateState&~S)}}_attributeToProperty(t,e){if(!(this._updateState&S)){const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r._classProperties.get(n);this[n]=r._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const r=this.constructor._classProperties.get(t)||C;return this._requestPropertyUpdate(t,e,r)}return this._invalidate()}_requestPropertyUpdate(t,e,r){return this.constructor._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===r.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|N;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&N}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&E||(this._updateState=this._updateState|E,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~N}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const t of this._reflectingProperties){var e=P(t,2);const r=e[0],n=e[1];this._propertyToAttribute(r,this[r],n)}this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}x._attributeToPropertyMap=new Map,x._finalized=!0,x._classProperties=new Map,x.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const A=t=>e=>(window.customElements.define(t,e),e),j=t=>(e,r)=>{e.constructor.createProperty(r,t)},I=k((t,e)=>t.querySelector(e));k((t,e)=>t.querySelectorAll(e));function k(t){return e=>(r,n)=>{Object.defineProperty(r,n,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}r.d(e,"a",function(){return L}),r.d(e,"b",function(){return A}),r.d(e,"d",function(){return j}),r.d(e,"e",function(){return I}),r.d(e,"c",function(){return n.f});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class L extends x{update(t){super.update(t);const e=this.render();e instanceof n.d&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}L.render=((t,e,r)=>{const n=r.scopeName,s=d.a.has(e),o=e instanceof ShadowRoot&&f&&t instanceof u.b,a=o&&!g.has(n),l=a?document.createDocumentFragment():e;if(Object(d.b)(t,l,Object.assign({templateFactory:m(n)},r)),a){const t=d.a.get(l);d.a.delete(l),t.value instanceof p.a&&b(l,t.value.template,n),Object(i.b)(e,e.firstChild),e.appendChild(l),d.a.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)})},function(t,e,r){"use strict";r.d(e,"f",function(){return n}),r.d(e,"g",function(){return i}),r.d(e,"b",function(){return o}),r.d(e,"a",function(){return a}),r.d(e,"d",function(){return l}),r.d(e,"c",function(){return c}),r.d(e,"e",function(){return d});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,s=new RegExp(`${n}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;let r=-1,i=0;const a=[],l=e=>{const h=e.content,p=document.createTreeWalker(h,133,null,!1);let u,_;for(;p.nextNode();){r++,u=_;const e=_=p.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(n)>=0&&l++;for(;l-- >0;){const n=t.strings[i],a=d.exec(n)[2],l=a.toLowerCase()+o,c=e.getAttribute(l).split(s);this.parts.push({type:"attribute",index:r,name:a,strings:c}),e.removeAttribute(l),i+=c.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(n)<0)continue;const o=e.parentNode,l=t.split(s),d=l.length-1;i+=d;for(let t=0;t<d;t++)o.insertBefore(""===l[t]?c():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:r++});o.insertBefore(""===l[d]?c():document.createTextNode(l[d]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===n){const t=e.parentNode,n=e.previousSibling;null===n||n!==u||n.nodeType!==Node.TEXT_NODE?t.insertBefore(c(),e):r--,this.parts.push({type:"node",index:r++}),a.push(e),null===e.nextSibling?t.insertBefore(c(),e):r--,_=u,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(n,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,r){"use strict";var n=r(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(t,e,r,i){const s=e[0];return"."===s?new n.f(t,e.slice(1),r).parts:"@"===s?[new n.d(t,e.slice(1),i.eventContext)]:"?"===s?[new n.c(t,e.slice(1),r)]:new n.a(t,e,r).parts}handleTextExpression(t){return new n.e(t)}};var s=r(13),o=r(15),a=(r(8),r(11)),l=(r(16),r(14));r(17),r(2);r.d(e,"f",function(){return c}),r.d(e,"e",function(){return o.a}),r.d(e,"g",function(){return a.a}),r.d(e,"a",function(){return n.b}),r.d(e,"b",function(){return n.e}),r.d(e,"c",function(){return n.g}),r.d(e,"h",function(){return l.b}),r.d(e,"d",function(){return s.b});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const c=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return new s.b(t,r,"html",i)}},function(t,e,r){"use strict";r(5);var n=r(9),i=r(7),s=r(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},a={};function l(t,e){o[t]=a[t.toLowerCase()]=e}function c(t){return o[t]||a[t.toLowerCase()]}class d extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=c(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,n){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(s.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(s.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(n.d&&void 0!==c(t))throw l(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,l(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}d.prototype.modules=o,customElements.define("dom-module",d);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h="link[rel=import][type~=css]",p="include",u="shady-unscoped";function _(t){return d.import(t)}function f(t){let e=t.body?t.body:t;const r=Object(s.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=r,n}function m(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...y(e[t]));return r}function y(t){const e=_(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...b(e));const r=e.querySelector("template");r&&t.push(...g(r,e.assetpath)),e._styles=t}return e._styles}function g(t,e){if(!t._styles){const r=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let i=n[t],o=i.getAttribute(p);o&&r.push(...m(o).filter(function(t,e,r){return r.indexOf(t)===e})),e&&(i.textContent=Object(s.b)(i.textContent,e)),r.push(i)}t._styles=r}return t._styles}function b(t){const e=[],r=t.querySelectorAll(h);for(let t=0;t<r.length;t++){let n=r[t];if(n.import){const t=n.import,r=n.hasAttribute(u);if(r&&!t._unscopedStyle){const e=f(t);e.setAttribute(u,""),t._unscopedStyle=e}else t._style||(t._style=f(t));e.push(r?t._unscopedStyle:t._style)}}return e}var P=r(19),v=r(21);const O=Object(i.a)(t=>{const e=Object(v.a)(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let r in t){const n=t[r];e[r]="function"==typeof n?{type:n}:n}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){const t=this._properties;return t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),w="3.0.5",C=Object(i.a)(t=>{const e=O(Object(P.a)(t));function r(t,e,r,n){const i=e.content.querySelectorAll("style"),s=g(e),o=function(t){let e=_(t);return e?b(e):[]}(r),a=e.content.firstElementChild;for(let r=0;r<o.length;r++){let i=o[r];i.textContent=t._processStyleText(i.textContent,n),e.content.insertBefore(i,a)}let l=0;for(let e=0;e<s.length;e++){let r=s[e],o=i[l];o!==r?(r=r.cloneNode(!0),o.parentNode.insertBefore(r,o)):l++,r.textContent=t._processStyleText(r.textContent,n)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r)}return class extends e{static get polymerElementVersion(){return w}static _finalizeClass(){var t;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(t=this.prototype,T.push(t));const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties);let n=this.template;n&&("string"==typeof n?(console.error("template getter must return HTMLTemplateElement"),n=null):n=n.cloneNode(!0)),this.prototype._template=n}static createProperties(t){for(let s in t)e=this.prototype,r=s,n=t[s],i=t,n.computed&&(n.readOnly=!0),n.computed&&!e._hasReadOnlyEffect(r)&&e._createComputedProperty(r,n.computed,i),n.readOnly&&!e._hasReadOnlyEffect(r)&&e._createReadOnlyProperty(r,!n.computed),n.reflectToAttribute&&!e._hasReflectEffect(r)&&e._createReflectedProperty(r),n.notify&&!e._hasNotifyEffect(r)&&e._createNotifyingProperty(r),n.observer&&e._createPropertyObserver(r,n.observer,i[n.observer]),e._addPropertyToAttributeMap(r);var e,r,n,i}static createObservers(t,e){const r=this.prototype;for(let n=0;n<t.length;n++)r._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!n.d||n.a)&&(e=d.import(t,"template"),n.d&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=d.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){0,this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.b,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let n=e[r];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;r(this,e,t,n?Object(s.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){if(this.attachShadow)return t?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,e,r){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,r)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const T=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class E{constructor(t){this.value=t.toString()}toString(){return this.value}}function N(t){if(t instanceof E)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const S=function(t){const e=document.createElement("template");for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return e.innerHTML=n.reduce((e,r,n)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof E)return N(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(r)+t[n+1],t[0]),e};r.d(e,"a",function(){return x}),r.d(e,"b",function(){return S});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const x=C(HTMLElement)},function(t,e,r){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,r){"use strict";r.d(e,"a",function(){return d}),r.d(e,"b",function(){return h}),r.d(e,"e",function(){return p}),r.d(e,"c",function(){return u}),r.d(e,"f",function(){return _}),r.d(e,"g",function(){return f}),r.d(e,"d",function(){return y});var n=r(15),i=r(8),s=r(11),o=r(17),a=r(13),l=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const c=t=>null===t||!("object"==typeof t||"function"==typeof t);class d{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new h(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let n=0;n<e;n++){r+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)r+="string"==typeof e?e:String(e);else r+="string"==typeof t?t:String(t)}}return r+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===s.a||c(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=s.a,t(this)}this.value!==s.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(l.c)()),this.endNode=t.appendChild(Object(l.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(l.c)()),t._insert(this.endNode=Object(l.c)())}insertAfterPart(t){t._insert(this.startNode=Object(l.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}const t=this._pendingValue;t!==s.a&&(c(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const r=new o.a(e,t.processor,this.options),n=r._clone();r.update(t.values),this._commitNode(n),this.value=r}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const i of t)void 0===(r=e[n])&&(r=new p(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(i),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class u{constructor(t,e,r){if(this.value=void 0,this._pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=s.a}}class _ extends d{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends h{}let m=!1;try{const t={get capture(){return m=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class y{constructor(t,e,r){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;Object(n.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=this._pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=g(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=s.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const g=t=>t&&(m?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,r){"use strict";r.d(e,"a",function(){return s});r(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const s=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=n++;function i(n){let i=n.__mixinSet;if(i&&i[r])return n;let s=e,o=s.get(n);o||(o=t(n),s.set(n,o));let a=Object.create(o.__mixinSet||i||null);return a[r]=!0,o.__mixinSet=a,o}return i}},function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"c",function(){return i}),r.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e;for(;i!==r;){const e=i.nextSibling;t.insertBefore(i,n),i=e}},s=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e;for(;n!==r;){const e=n.nextSibling;t.removeChild(n),n=e}}},function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return o}),r.d(e,"a",function(){return a});r(5);var n=r(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let i=Object(n.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let o=!1;let a=!1},function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"b",function(){return l}),r.d(e,"a",function(){return c});r(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,i,s=/(url\()([^)]*)(\))/g,o=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&o.test(t))return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),n?new URL(t,e).href:(i||((i=document.implementation.createHTMLDocument("temp")).base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=e,i.anchor.href=t,i.anchor.href||t)}function l(t,e){return t.replace(s,function(t,r,n,i){return r+"'"+a(n.replace(/["']/g,""),e)+"'"+i})}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,r){"use strict";r.d(e,"a",function(){return n});
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
const n={}},,function(t,e,r){"use strict";r.d(e,"b",function(){return s}),r.d(e,"a",function(){return o});var n=r(8),i=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class s{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="";for(let r=0;r<t;r++){const t=this.strings[r];let n=!1;e+=t.replace(i.e,(t,e,r,s)=>(n=!0,e+r+i.b+s+i.f)),n||(e+=i.g)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,r=e.firstChild;return e.removeChild(r),Object(n.c)(e,r.firstChild),t}}},function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return s});var n=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=s.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},s.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(n.f);return void 0===(r=e.keyString.get(i))&&(r=new n.a(t,t.getTemplateElement()),e.keyString.set(i,r)),e.stringsArray.set(t.strings,r),r}const s=new Map},function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=new WeakMap,i=t=>(function(){const e=t(...arguments);return n.set(e,!0),e}),s=t=>"function"==typeof t&&n.has(t)},function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return a});var n=r(8),i=r(6),s=r(14);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const o=new WeakMap,a=(t,e,r)=>{let a=o.get(e);void 0===a&&(Object(n.b)(e,e.firstChild),o.set(e,a=new i.e(Object.assign({templateFactory:s.b},r))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(8),i=r(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class s{constructor(t,e,r){this._parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this._parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let r=0,s=0;const o=t=>{const n=document.createTreeWalker(t,133,null,!1);let a=n.nextNode();for(;r<e.length&&null!==a;){const t=e[r];if(Object(i.d)(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));r++}else s++,"TEMPLATE"===a.nodeName&&o(a.content),a=n.nextNode();else this._parts.push(void 0),r++}};return o(t),n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,r){"use strict";r.d(e,"b",function(){return l}),r.d(e,"a",function(){return c});r(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,i=0,s=[],o=0,a=document.createTextNode("");new window.MutationObserver(function(){const t=s.length;for(let e=0;e<t;e++){let t=s[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}s.splice(0,t),i+=t}).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>(a.textContent=o++,s.push(t),n++),cancel(t){const e=t-i;if(e>=0){if(!s[e])throw new Error("invalid async handle: "+t);s[e]=null}}}},function(t,e,r){"use strict";r(5);var n=r(7),i=r(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={},o=/-[a-z]/g,a=/([A-Z])/g;function l(t){return s[t]||(s[t]=t.indexOf("-")<0?t:t.replace(o,t=>t[1].toUpperCase()))}function c(t){return s[t]||(s[t]=t.replace(a,"-$1").toLowerCase())}var d=r(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h={};let p=HTMLElement.prototype;for(;p;){let t=Object.getOwnPropertyNames(p);for(let e=0;e<t.length;e++)h[t[e]]=!0;p=Object.getPrototypeOf(p)}const u=Object(n.a)(t=>{const e=Object(d.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(l(t[e]))}static attributeNameForProperty(t){return c(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const r=this;r.hasAttribute(t)||this._valueToNodeAttribute(r,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!h[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),_={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function f(t){let e=t.getAttribute("is");if(e&&_[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;)t.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return t}function m(t,e){let r=e.parentInfo&&m(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function y(t,e,r,n){n.id&&(e[n.id]=r)}function g(t,e,r){if(r.events&&r.events.length)for(let n,i=0,s=r.events;i<s.length&&(n=s[i]);i++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function b(t,e,r){r.templateInfo&&(e._templateInfo=r.templateInfo)}const P=Object(n.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let n,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(i,e,r)||n,i.firstChild&&(n=this._parseTemplateChildNodes(i,e,r)||n),i.hasAttributes&&i.hasAttributes()&&(n=this._parseTemplateNodeAttributes(i,e,r)||n),n}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let n,i=t.firstChild,s=0;i;i=n){if("template"==i.localName&&(i=f(i)),n=i.nextSibling,i.nodeType===Node.TEXT_NODE){let r=n;for(;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,n=r.nextSibling,t.removeChild(r),r=n;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let o={parentIndex:s,parentInfo:r};this._parseTemplateNode(i,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),i.parentNode&&s++}}static _parseTemplateNestedTemplate(t,e,r){let n=this._parseTemplate(t,e);return(n.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,r){let n=!1,i=Array.from(t.attributes);for(let s,o=i.length-1;s=i[o];o--)n=this._parseTemplateNodeAttribute(t,e,r,s.name,s.value)||n;return n}static _parseTemplateNodeAttribute(t,e,r,n,i){return"on-"===n.slice(0,3)?(t.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:i}),!0):"id"===n&&(r.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),r=e.nodeInfoList,n=e.content||t.content,i=document.importNode(n,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let s=i.nodeList=new Array(r.length);i.$={};for(let t,e=0,n=r.length;e<n&&(t=r[e]);e++){let r=s[e]=m(i,t);y(0,i.$,r,t),b(0,r,t),g(this,r,t)}return i=i}_addMethodEventListenerToNode(t,e,r,n){let i=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(n=n||t,0,r);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}}});var v=r(9);r.d(e,"a",function(){return Z});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let O=0;const w={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},C=/[A-Z]/;let T;function E(t,e){let r=t[e];if(r){if(!t.hasOwnProperty(e)){r=t[e]=Object.create(t[e]);for(let t in r){let e=r[t],n=r[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else r=t[e]={};return r}function N(t,e,r,n,i,s){if(e){let o=!1,a=O++;for(let l in r)S(t,e,a,l,r,n,i,s)&&(o=!0);return o}return!1}function S(t,e,r,n,s,o,a,l){let c=!1,d=e[a?Object(i.g)(n):n];if(d)for(let e,i=0,h=d.length;i<h&&(e=d[i]);i++)e.info&&e.info.lastRun===r||a&&!x(n,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,n,s,o,e.info,a,l),c=!0);return c}function x(t,e){if(e){let r=e.name;return r==t||e.structured&&Object(i.b)(r,t)||e.wildcard&&Object(i.c)(r,t)}return!0}function A(t,e,r,n,i){let s="string"==typeof i.method?t[i.method]:i.method,o=i.property;s?s.call(t,t.__data[o],n[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function j(t,e,r){let n=Object(i.g)(e);if(n!==e){return I(t,c(n)+"-changed",r[e],e),!0}return!1}function I(t,e,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),t.dispatchEvent(new CustomEvent(e,{detail:i}))}function k(t,e,r,n,s,o){let a=(o?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=r[e]),I(t,s.eventName,l,a)}function L(t,e,r,n,i){let s=t.__data[e];v.c&&(s=Object(v.c)(s,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,s)}function R(t,e,r,n,i){let s=B(t,e,r,n,i),o=i.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,s,!0):t[o]=s}function M(t,e,r,n,i,s,o){r.bindings=r.bindings||[];let a={kind:n,target:i,parts:s,literal:o,isCompound:1!==s.length};if(r.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let t=a.parts[0],e=t.event,r=t.negate;a.listenerEvent=e||c(i)+"-changed",a.listenerNegate=r}let l=e.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let n=a.parts[r];n.compoundIndex=r,z(t,e,a,n,l)}}function z(t,e,r,n,i){if(!n.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:i,binding:r,part:n,evaluator:t};for(let r=0;r<s.length;r++){let n=s[r];"string"==typeof n&&((n=J(n)).wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:H,info:o,trigger:n})}}}function H(t,e,r,n,s,o,a){let l=a[s.index],c=s.binding,d=s.part;if(o&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let n=r[e];e=Object(i.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,r,n,i){i=function(t,e,r,n){if(r.isCompound){let i=t.__dataCompoundStorage[r.target];i[n.compoundIndex]=e,e=i.join("")}return"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,i,r,n),v.c&&(i=Object(v.c)(i,r.target,r.kind,e));if("attribute"==r.kind)t._valueToNodeAttribute(e,i,r.target);else{let n=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[w.READ_ONLY]&&e[w.READ_ONLY][n]||e._setPendingProperty(n,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,i)}}(t,l,c,d,s.evaluator._evaluateBinding(t,d,e,r,n,o))}}function F(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let t=0;t<n.length;t++)i[t]=n[t].literal;let s=e.target;r[s]=i,e.literal&&"property"==e.kind&&(t[s]=e.literal)}}function V(t,e,r){if(r.listenerEvent){let n=r.parts[0];t.addEventListener(r.listenerEvent,function(t){!function(t,e,r,n,s){let o,a=t.detail,l=a&&a.path;l?(n=Object(i.i)(r,n,l),o=a&&a.value):o=t.currentTarget[r],o=s?!o:o,e[w.READ_ONLY]&&e[w.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,o,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,r.target,n.source,n.negate)})}}function D(t,e,r,n,i,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:s};for(let i,s=0;s<e.args.length&&(i=e.args[s]);s++)i.literal||t._addPropertyEffect(i.rootProperty,r,{fn:n,info:o,trigger:i});s&&t._addPropertyEffect(e.methodName,r,{fn:n,info:o})}function B(t,e,r,n,i){let s=t._methodHost||t,o=s[i.methodName];if(o){let n=t._marshalArgs(i.args,e,r);return o.apply(s,n)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const $=[],U=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function q(t){let e="";for(let r=0;r<t.length;r++){e+=t[r].literal||""}return e}function Y(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:$};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let r=J(t);return r.literal||(e.static=!1),r},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function J(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=Object(i.g)(e),r.structured=Object(i.d)(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function W(t,e,r,n){let i=r+".splices";t.notifyPath(i,{indexSplices:n}),t.notifyPath(r+".length",e.length),t.__data[i]={indexSplices:null}}function X(t,e,r,n,i,s){W(t,e,r,[{index:n,addedCount:i,removed:s,object:e,type:"splice"}])}const Z=Object(n.a)(t=>{const e=P(u(t));class r extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return w}_initializeProperties(){super._initializeProperties(),G.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[w.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==w.READ_ONLY);let n=E(this,e)[t];n||(n=this[e][t]=[]),n.push(r)}_removePropertyEffect(t,e,r){let n=E(this,e)[t],i=n.indexOf(r);i>=0&&n.splice(i,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,w.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,w.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,w.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,w.COMPUTE)}_setPendingPropertyOrPath(t,e,r,n){if(n||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let r=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let n=t.__dataLinkedPaths;if(n){let s;for(let o in n){let a=n[o];Object(i.c)(o,e)?(s=Object(i.i)(o,a,e),t._setPendingPropertyOrPath(s,r,!0,!0)):Object(i.c)(a,e)&&(s=Object(i.i)(a,o,e),t._setPendingPropertyOrPath(s,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||(t[e]=r)}_setPendingProperty(t,e,r){let n=this.__dataHasPaths&&Object(i.d)(t),s=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[w.NOTIFY]&&this[w.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[w.READ_ONLY]&&this[w.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,r,n){let i=t[w.COMPUTE];if(i){let s=e;for(;N(t,i,s,r,n);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}(this,e,r,n);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,r,n),this._flushClients(),N(this,this[w.REFLECT],e,r,n),N(this,this[w.OBSERVE],e,r,n),i&&function(t,e,r,n,i){let s,o,a=t[w.NOTIFY],l=O++;for(let o in e)e[o]&&(a&&S(t,a,l,o,r,n,i)?s=!0:i&&j(t,o,r)&&(s=!0));s&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,e,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[w.PROPAGATE]&&N(this,this[w.PROPAGATE],t,e,r);let n=this.__templateInfo;for(;n;)N(this,n.propertyEffects,t,e,r,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};W(this,Object(i.a)(this,t,r),r.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,r){r?Object(i.h)(r,t,e):this[w.READ_ONLY]&&this[w.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t){let e={path:""},r=Object(i.a)(this,t,e),n=r.length;for(var s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];let l=r.push(...o);return o.length&&X(this,r,e.path,n,o.length,[]),l}pop(t){let e={path:""},r=Object(i.a)(this,t,e),n=Boolean(r.length),s=r.pop();return n&&X(this,r,e.path,r.length,0,[s]),s}splice(t,e,r){for(var n=arguments.length,s=new Array(n>3?n-3:0),o=3;o<n;o++)s[o-3]=arguments[o];let a,l={path:""},c=Object(i.a)(this,t,l);return e<0?e=c.length-Math.floor(-e):e&&(e=Math.floor(e)),a=2===arguments.length?c.splice(e):c.splice(e,r,...s),(s.length||a.length)&&X(this,c,l.path,e,s.length,a),a}shift(t){let e={path:""},r=Object(i.a)(this,t,e),n=Boolean(r.length),s=r.shift();return n&&X(this,r,e.path,0,0,[s]),s}unshift(t){let e={path:""},r=Object(i.a)(this,t,e);for(var n=arguments.length,s=new Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o];let a=r.unshift(...s);return s.length&&X(this,r,e.path,0,s.length,[]),a}notifyPath(t,e){let r;if(1==arguments.length){let n={path:""};e=Object(i.a)(this,t,n),r=n.path}else r=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,w.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let n={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,w.OBSERVE,{fn:A,info:n,trigger:{name:t}}),r&&this._addPropertyEffect(e,w.OBSERVE,{fn:A,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let r=Y(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");D(this,r,w.OBSERVE,B,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,w.NOTIFY,{fn:k,info:{eventName:c(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,w.REFLECT,{fn:L,info:{attrName:e}})}_createComputedProperty(t,e,r){let n=Y(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");D(this,n,w.COMPUTE,R,t,r)}_marshalArgs(t,e,r){const n=this.__data;let s=[];for(let o=0,a=t.length;o<a;o++){let a,l=t[o],c=l.name;if(l.literal?a=l.value:l.structured?void 0===(a=Object(i.a)(n,c))&&(a=r[c]):a=n[c],l.wildcard){let t=0===c.indexOf(e+"."),n=0===e.indexOf(c)&&!t;s[o]={path:n?e:c,value:n?r[e]:a,base:a}}else s[o]=a}return s}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),n=this.__templateInfo==r;if(!n)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e&&((r=Object.create(r)).wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=r,r.previousTemplateInfo=t,r}return this.__templateInfo=r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(r)}_stampTemplate(t){G.beginHosting(this);let e=super._stampTemplate(t);G.endHosting(this);let r=this._bindTemplate(t,!0);if(r.nodeList=e.nodeList,!r.wasPreBound){let t=r.childNodes=[];for(let r=e.firstChild;r;r=r.nextSibling)t.push(r)}return e.templateInfo=r,function(t,e){let r=e.nodeList,n=e.nodeInfoList;if(n.length)for(let e=0;e<n.length;e++){let i=n[e],s=r[e],o=i.bindings;if(o)for(let e=0;e<o.length;e++){let r=o[e];F(s,r),V(s,t,r)}s.__dataHost=t}}(this,r),this.__dataReady&&N(this,r.propertyEffects,this.__data,null,!1,r.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let r=e.childNodes;for(let t=0;t<r.length;t++){let e=r[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,r){let n=super._parseTemplateNode(t,e,r);if(t.nodeType===Node.TEXT_NODE){let i=this._parseBindings(t.textContent,e);i&&(t.textContent=q(i)||" ",M(this,e,r,"text","textContent",i),n=!0)}return n}static _parseTemplateNodeAttribute(t,e,r,n,i){let s=this._parseBindings(i,e);if(s){let i=n,o="property";C.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let a=q(s);return a&&"attribute"==o&&t.setAttribute(n,a),"input"===t.localName&&"value"===i&&t.setAttribute(i,""),t.removeAttribute(i),"property"===o&&(n=l(n)),M(this,e,r,o,n,s,a),!0}return super._parseTemplateNodeAttribute(t,e,r,n,i)}static _parseTemplateNestedTemplate(t,e,r){let n=super._parseTemplateNestedTemplate(t,e,r),i=r.templateInfo.hostProps;for(let t in i){M(this,e,r,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return n}static _parseBindings(t,e){let r,n=[],i=0;for(;null!==(r=U.exec(t));){r.index>i&&n.push({literal:t.slice(i,r.index)});let s=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,c="",d=-1;"{"==s&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=Y(a),p=[];if(h){let t=h.args,r=h.methodName;for(let e=0;e<t.length;e++){let r=t[e];r.literal||p.push(r)}let n=e.dynamicFns;(n&&n[r]||h.static)&&(p.push(r),h.dynamicFn=!0)}else p.push(a);n.push({source:a,mode:s,negate:o,customEvent:l,signature:h,dependencies:p,event:c}),i=U.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,r,n,s,o){let a;return a=e.signature?B(t,r,n,0,e.signature):r!=e.source?Object(i.a)(t,e.source):o&&Object(i.d)(r)?Object(i.a)(t,r):t.__data[r],e.negate&&(a=!a),a}}return T=r,r});const G=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,r){"use strict";var n=r(4);customElements.define("my-avatar",class extends n.a{static get properties(){return{src:{type:String,observer:"_asignImage"},alt:{type:String,value:""},size:{type:Number,observer:"_asignSize"}}}static get template(){return n.b`
    <style>
      :host {
        display: inline-block;
      }
      div {
        display: inline-block;        
        width: var(--my-avatar-size, 50px);
        height: var(--my-avatar-size, 50px);
        border-radius: 25px;
        background-size: var(--my-avatar-size, 50px);
        background-repeat: no-repeat;
        background-position: center;
        background-color: #fff;
      }
    </style>
    
    <div
      id="img"
      role="img"
      aria-label$="[[alt]]"
    ></div>
    `}_asignImage(t){this.$.img.style.backgroundImage=`url(${t})`}_asignSize(t){if(t){let e=this.$.img.style;e.backgroundSize=`${t}px`,e.width=`${t}px`,e.height=`${t}px`,e.borderRadius=`${t}px`}}})},function(t,e,r){"use strict";r.d(e,"a",function(){return s});r(5);var n=r(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=r(18).a,s=Object(n.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let n=this.__data[t],i=this._shouldPropertyChange(t,e,n);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,i.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r))}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,n){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,n)}_attributeToProperty(t,e,r){if(!this.__serializing){const n=this.__dataAttributes,i=n&&n[t]||t;this[i]=this._deserializeValue(e,r||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const n=this._serializeValue(e);void 0===n?t.removeAttribute(r):t.setAttribute(r,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,r){"use strict";var n=r(4);customElements.define("my-nav",class extends n.a{static get properties(){return{opened:{type:Boolean,value:!1},icon:{type:String,computed:"getIcon(opened)"}}}static get template(){return n.b`
      <style>
      :host {
        display: block;
        padding: 10px 18px 10px 14px;
        background-color: var(--primary-color, #888);
        color: #fff;
      }
      section {
        display: flex;
      }
      div {
        flex-grow: 1;
        margin-top: 2px;
      }
      .more {
        margin: 10px 0 0;
        font-size: 0.9em;
        color: #ffd;
      }
      mwc-icon{
        cursor: pointer;
      }
      </style>
      <section>
        <div>
          <slot></slot>
        </div>
        <mwc-icon on-click="toggle">[[icon]]</mwc-icon>
      </section>
      <div class="more" hidden="[[!opened]]">
        Esta es una información extra para el navegador...
      </div>
      `}getIcon(t){return t?"arrow_drop_up":"arrow_drop_down"}toggle(){this.opened=!this.opened}})},,function(t,e,r){"use strict";var n=r(1);
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
*/const i=n.c`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}</style>`;r(25);
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
let s=class extends n.a{renderStyle(){return i}render(){return n.c`${this.renderStyle()}<slot></slot>`}};s=function(t,e,r,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,r,o):i(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o}([Object(n.b)("mwc-icon")],s)},function(t,e,r){"use strict";
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
*/const n=document.createElement("link");n.rel="stylesheet",n.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(n)}]]);