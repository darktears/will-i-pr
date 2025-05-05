var fo=Object.defineProperty;var mo=(t,e,i)=>e in t?fo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var T=(t,e,i)=>mo(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,Ye=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),ui=new WeakMap;let Ri=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Ye&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=ui.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ui.set(i,e))}return e}toString(){return this.cssText}};const bo=t=>new Ri(typeof t=="string"?t:t+"",void 0,Xe),L=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new Ri(i,t,Xe)},go=(t,e)=>{if(Ye)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const o=document.createElement("style"),s=ne.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}},di=Ye?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return bo(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vo,defineProperty:yo,getOwnPropertyDescriptor:_o,getOwnPropertyNames:wo,getOwnPropertySymbols:xo,getPrototypeOf:$o}=Object,gt=globalThis,hi=gt.trustedTypes,ko=hi?hi.emptyScript:"",Ae=gt.reactiveElementPolyfillSupport,Xt=(t,e)=>t,Mt={toAttribute(t,e){switch(e){case Boolean:t=t?ko:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ze=(t,e)=>!vo(t,e),pi={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:Ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gt.litPropertyMetadata??(gt.litPropertyMetadata=new WeakMap);let Lt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=pi){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,i);s!==void 0&&yo(this.prototype,e,s)}}static getPropertyDescriptor(e,i,o){const{get:s,set:r}=_o(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:s,set(n){const c=s==null?void 0:s.call(this);r==null||r.call(this,n),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pi}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;const e=$o(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){const i=this.properties,o=[...wo(i),...xo(i)];for(const s of o)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)i.unshift(di(s))}else e!==void 0&&i.push(di(e));return i}static _$Eu(e,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return go(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$ET(e,i){var r;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:Mt).toAttribute(i,o.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,i){var r,n;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const c=o.getPropertyOptions(s),u=typeof c.converter=="function"?{fromAttribute:c.converter}:((r=c.converter)==null?void 0:r.fromAttribute)!==void 0?c.converter:Mt;this._$Em=s,this[s]=u.fromAttribute(i,c.type)??((n=this._$Ej)==null?void 0:n.get(s))??null,this._$Em=null}}requestUpdate(e,i,o){var s;if(e!==void 0){const r=this.constructor,n=this[e];if(o??(o=r.getPropertyOptions(e)),!((o.hasChanged??Ze)(n,i)||o.useDefault&&o.reflect&&n===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:o,reflect:s,wrapped:r},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??i??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(i=void 0),this._$AL.set(e,i)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s){const{wrapped:c}=n,u=this[r];c!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,n,u)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};Lt.elementStyles=[],Lt.shadowRootOptions={mode:"open"},Lt[Xt("elementProperties")]=new Map,Lt[Xt("finalized")]=new Map,Ae==null||Ae({ReactiveElement:Lt}),(gt.reactiveElementVersions??(gt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=globalThis,ue=Zt.trustedTypes,fi=ue?ue.createPolicy("lit-html",{createHTML:t=>t}):void 0,Bi="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,Mi="?"+bt,Co=`<${Mi}>`,Tt=document,Gt=()=>Tt.createComment(""),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",Ge=Array.isArray,So=t=>Ge(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ee=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,bi=/>/g,kt=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,vi=/"/g,Di=/^(?:script|style|textarea|title)$/i,Ao=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),k=Ao(1),K=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),yi=new WeakMap,At=Tt.createTreeWalker(Tt,129);function Ii(t,e){if(!Ge(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return fi!==void 0?fi.createHTML(e):e}const Eo=(t,e)=>{const i=t.length-1,o=[];let s,r=e===2?"<svg>":e===3?"<math>":"",n=Ut;for(let c=0;c<i;c++){const u=t[c];let a,d,p=-1,m=0;for(;m<u.length&&(n.lastIndex=m,d=n.exec(u),d!==null);)m=n.lastIndex,n===Ut?d[1]==="!--"?n=mi:d[1]!==void 0?n=bi:d[2]!==void 0?(Di.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=kt):d[3]!==void 0&&(n=kt):n===kt?d[0]===">"?(n=s??Ut,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,a=d[1],n=d[3]===void 0?kt:d[3]==='"'?vi:gi):n===vi||n===gi?n=kt:n===mi||n===bi?n=Ut:(n=kt,s=void 0);const f=n===kt&&t[c+1].startsWith("/>")?" ":"";r+=n===Ut?u+Co:p>=0?(o.push(a),u.slice(0,p)+Bi+u.slice(p)+bt+f):u+bt+(p===-2?c:f)}return[Ii(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Qt{constructor({strings:e,_$litType$:i},o){let s;this.parts=[];let r=0,n=0;const c=e.length-1,u=this.parts,[a,d]=Eo(e,i);if(this.el=Qt.createElement(a,o),At.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=At.nextNode())!==null&&u.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Bi)){const m=d[n++],f=s.getAttribute(p).split(bt),b=/([.?@])?(.*)/.exec(m);u.push({type:1,index:r,name:b[2],strings:f,ctor:b[1]==="."?zo:b[1]==="?"?Oo:b[1]==="@"?Po:ye}),s.removeAttribute(p)}else p.startsWith(bt)&&(u.push({type:6,index:r}),s.removeAttribute(p));if(Di.test(s.tagName)){const p=s.textContent.split(bt),m=p.length-1;if(m>0){s.textContent=ue?ue.emptyScript:"";for(let f=0;f<m;f++)s.append(p[f],Gt()),At.nextNode(),u.push({type:2,index:++r});s.append(p[m],Gt())}}}else if(s.nodeType===8)if(s.data===Mi)u.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(bt,p+1))!==-1;)u.push({type:7,index:r}),p+=bt.length-1}r++}}static createElement(e,i){const o=Tt.createElement("template");return o.innerHTML=e,o}}function Dt(t,e,i=t,o){var n,c;if(e===K)return e;let s=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const r=Jt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=s:i._$Cl=s),s!==void 0&&(e=Dt(t,s._$AS(t,e.values),s,o)),e}class To{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??Tt).importNode(i,!0);At.currentNode=s;let r=At.nextNode(),n=0,c=0,u=o[0];for(;u!==void 0;){if(n===u.index){let a;u.type===2?a=new ee(r,r.nextSibling,this,e):u.type===1?a=new u.ctor(r,u.name,u.strings,this,e):u.type===6&&(a=new Lo(r,this,e)),this._$AV.push(a),u=o[++c]}n!==(u==null?void 0:u.index)&&(r=At.nextNode(),n++)}return At.currentNode=Tt,s}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}class ee{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,o,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Dt(this,e,i),Jt(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):So(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Tt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Qt.createElement(Ii(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(i);else{const n=new To(s,this),c=n.u(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(e){let i=yi.get(e.strings);return i===void 0&&yi.set(e.strings,i=new Qt(e)),i}k(e){Ge(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const r of e)s===i.length?i.push(o=new ee(this.O(Gt()),this.O(Gt()),this,this.options)):o=i[s],o._$AI(r),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(e,i=this,o,s){const r=this.strings;let n=!1;if(r===void 0)e=Dt(this,e,i,0),n=!Jt(e)||e!==this._$AH&&e!==K,n&&(this._$AH=e);else{const c=e;let u,a;for(e=r[0],u=0;u<r.length-1;u++)a=Dt(this,c[o+u],i,u),a===K&&(a=this._$AH[u]),n||(n=!Jt(a)||a!==this._$AH[u]),a===O?e=O:e!==O&&(e+=(a??"")+r[u+1]),this._$AH[u]=a}n&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zo extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class Oo extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class Po extends ye{constructor(e,i,o,s,r){super(e,i,o,s,r),this.type=5}_$AI(e,i=this){if((e=Dt(this,e,i,0)??O)===K)return;const o=this._$AH,s=e===O&&o!==O||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Lo{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Dt(this,e)}}const Te=Zt.litHtmlPolyfillSupport;Te==null||Te(Qt,ee),(Zt.litHtmlVersions??(Zt.litHtmlVersions=[])).push("3.3.0");const Ro=(t,e,i)=>{const o=(i==null?void 0:i.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const r=(i==null?void 0:i.renderBefore)??null;o._$litPart$=s=new ee(e.insertBefore(Gt(),r),r,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=globalThis;let ct=class extends Lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ro(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}};var Li;ct._$litElement$=!0,ct.finalized=!0,(Li=Et.litElementHydrateSupport)==null||Li.call(Et,{LitElement:ct});const ze=Et.litElementPolyfillSupport;ze==null||ze({LitElement:ct});(Et.litElementVersions??(Et.litElementVersions=[])).push("4.2.0");try{self["workbox:window:7.2.0"]&&_()}catch{}function Ie(t,e){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(s){i(s.data)},t.postMessage(e,[o.port2])})}function Bo(t){var e=function(i,o){if(typeof i!="object"||!i)return i;var s=i[Symbol.toPrimitive];if(s!==void 0){var r=s.call(i,o);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(t,"string");return typeof e=="symbol"?e:e+""}function Mo(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Bo(o.key),o)}}function Ve(t,e){return Ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ve(t,e)}function _i(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Do(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(s,r){if(s){if(typeof s=="string")return _i(s,r);var n=Object.prototype.toString.call(s).slice(8,-1);return n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set"?Array.from(s):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_i(s,r):void 0}}(t))||e){i&&(t=i);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}try{self["workbox:core:7.2.0"]&&_()}catch{}var Oe=function(){var t=this;this.promise=new Promise(function(e,i){t.resolve=e,t.reject=i})};function Pe(t,e){var i=location.href;return new URL(t,i).href===new URL(e,i).href}var jt=function(t,e){this.type=t,Object.assign(this,e)};function ft(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Io(){}var Vo={type:"SKIP_WAITING"};function wi(t,e){return t&&t.then?t.then(Io):Promise.resolve()}var Fo=function(t){function e(c,u){var a,d;return u===void 0&&(u={}),(a=t.call(this)||this).nn={},a.tn=0,a.rn=new Oe,a.en=new Oe,a.on=new Oe,a.un=0,a.an=new Set,a.cn=function(){var p=a.fn,m=p.installing;a.tn>0||!Pe(m.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=m,p.removeEventListener("updatefound",a.cn)):(a.hn=m,a.an.add(m),a.rn.resolve(m)),++a.tn,m.addEventListener("statechange",a.ln)},a.ln=function(p){var m=a.fn,f=p.target,b=f.state,g=f===a.vn,y={sw:f,isExternal:g,originalEvent:p};!g&&a.mn&&(y.isUpdate=!0),a.dispatchEvent(new jt(b,y)),b==="installed"?a.wn=self.setTimeout(function(){b==="installed"&&m.waiting===f&&a.dispatchEvent(new jt("waiting",y))},200):b==="activating"&&(clearTimeout(a.wn),g||a.en.resolve(f))},a.yn=function(p){var m=a.hn,f=m!==navigator.serviceWorker.controller;a.dispatchEvent(new jt("controlling",{isExternal:f,originalEvent:p,sw:m,isUpdate:a.mn})),f||a.on.resolve(m)},a.gn=(d=function(p){var m=p.data,f=p.ports,b=p.source;return ft(a.getSW(),function(){a.an.has(b)&&a.dispatchEvent(new jt("message",{data:m,originalEvent:p,ports:f,sw:b}))})},function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{return Promise.resolve(d.apply(this,p))}catch(f){return Promise.reject(f)}}),a.sn=c,a.nn=u,navigator.serviceWorker.addEventListener("message",a.gn),a}var i,o;o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,Ve(i,o);var s,r,n=e.prototype;return n.register=function(c){var u=(c===void 0?{}:c).immediate,a=u!==void 0&&u;try{var d=this;return ft(function(p,m){var f=p();return f&&f.then?f.then(m):m(f)}(function(){if(!a&&document.readyState!=="complete")return wi(new Promise(function(p){return window.addEventListener("load",p)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.dn=d.pn(),ft(d.bn(),function(p){d.fn=p,d.dn&&(d.hn=d.dn,d.en.resolve(d.dn),d.on.resolve(d.dn),d.dn.addEventListener("statechange",d.ln,{once:!0}));var m=d.fn.waiting;return m&&Pe(m.scriptURL,d.sn.toString())&&(d.hn=m,Promise.resolve().then(function(){d.dispatchEvent(new jt("waiting",{sw:m,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.yn),d.fn})}))}catch(p){return Promise.reject(p)}},n.update=function(){try{return this.fn?ft(wi(this.fn.update())):ft()}catch(c){return Promise.reject(c)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(c){try{return ft(this.getSW(),function(u){return Ie(u,c)})}catch(u){return Promise.reject(u)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ie(this.fn.waiting,Vo)},n.pn=function(){var c=navigator.serviceWorker.controller;return c&&Pe(c.scriptURL,this.sn.toString())?c:void 0},n.bn=function(){try{var c=this;return ft(function(u,a){try{var d=u()}catch(p){return a(p)}return d&&d.then?d.then(void 0,a):d}(function(){return ft(navigator.serviceWorker.register(c.sn,c.nn),function(u){return c.un=performance.now(),u})},function(u){throw u}))}catch(u){return Promise.reject(u)}},s=e,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Mo(s.prototype,r),Object.defineProperty(s,"prototype",{writable:!1}),s}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(i,o){this.jn(i).add(o)},e.removeEventListener=function(i,o){this.jn(i).delete(o)},e.dispatchEvent=function(i){i.target=this;for(var o,s=Do(this.jn(i.type));!(o=s()).done;)(0,o.value)(i)},e.jn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},t}()),Ho=L`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Vt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Y=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Vi=Object.defineProperty,No=Object.defineProperties,Uo=Object.getOwnPropertyDescriptor,jo=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,qo=Object.prototype.hasOwnProperty,Wo=Object.prototype.propertyIsEnumerable,Fi=t=>{throw TypeError(t)},$i=(t,e,i)=>e in t?Vi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ot=(t,e)=>{for(var i in e||(e={}))qo.call(e,i)&&$i(t,i,e[i]);if(xi)for(var i of xi(e))Wo.call(e,i)&&$i(t,i,e[i]);return t},_e=(t,e)=>No(t,jo(e)),l=(t,e,i,o)=>{for(var s=o>1?void 0:o?Uo(e,i):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(o?n(e,i,s):n(s))||s);return o&&s&&Vi(e,i,s),s},Hi=(t,e,i)=>e.has(t)||Fi("Cannot "+i),Ko=(t,e,i)=>(Hi(t,e,"read from private field"),e.get(t)),Yo=(t,e,i)=>e.has(t)?Fi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Xo=(t,e,i,o)=>(Hi(t,e,"write to private field"),e.set(t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Ze},Go=(t=Zo,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),o==="accessor"){const{name:n}=i;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,u,t)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(o==="setter"){const{name:n}=i;return function(c){const u=this[n];e.call(this,c),this.requestUpdate(n,u,t)}}throw Error("Unsupported decorator location: "+o)};function h(t){return(e,i)=>typeof i=="object"?Go(t,e,i):((o,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,o),n?Object.getOwnPropertyDescriptor(s,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t,e){return(i,o,s)=>{const r=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(t))??null};return Jo(i,o,{get(){return r(this)}})}}var le,M=class extends ct{constructor(){super(),Yo(this,le,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Ot({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in o&&o.version&&(r=" v"+o.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){Ko(this,le)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),Xo(this,le,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};le=new WeakMap;M.version="2.20.1";M.dependencies={};l([h()],M.prototype,"dir",2);l([h()],M.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Je=t=>(...e)=>({_$litDirective$:t,values:e});let Qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=Je(class extends Qe{constructor(t){var e;if(super(t),t.type!==mt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return K}});var Ni=class extends M{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"footer","header","image")}render(){return k`
      <div
        part="base"
        class=${V({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ni.styles=[Y,Ho];Ni.define("sl-card");var Fe="";function He(t){Fe=t}function Qo(t=""){if(!Fe){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)He(i.getAttribute("data-shoelace"));else{const o=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";o&&(s=o.getAttribute("src")),He(s.split("/").slice(0,-1).join("/"))}}return Fe.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ts={name:"default",resolver:t=>Qo(`assets/icons/${t}.svg`)},es=ts,ki={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},is={name:"system",resolver:t=>t in ki?`data:image/svg+xml,${encodeURIComponent(ki[t])}`:""},os=is,ss=[es,os],Ne=[];function rs(t){Ne.push(t)}function ns(t){Ne=Ne.filter(e=>e!==t)}function Ci(t){return ss.find(e=>e.name===t)}var ls=L`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function D(t,e){const i=Ot({waitUntilFirstUpdate:!1},e);return(o,s)=>{const{update:r}=o,n=Array.isArray(t)?t:[t];o.update=function(c){n.forEach(u=>{const a=u;if(c.has(a)){const d=c.get(a),p=this[a];d!==p&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[s](d,p)}}),r.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,cs=t=>t.strings===void 0,us={},ds=(t,e=us)=>t._$AH=e;var qt=Symbol(),oe=Symbol(),Le,Re=new Map,N=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=k`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?qt:oe}catch{return oe}try{const s=document.createElement("div");s.innerHTML=await o.text();const r=s.firstElementChild;if(((i=r==null?void 0:r.tagName)==null?void 0:i.toLowerCase())!=="svg")return qt;Le||(Le=new DOMParser);const c=Le.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):qt}catch{return qt}}connectedCallback(){super.connectedCallback(),rs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ns(this)}getIconSource(){const t=Ci(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?Ci(this.library):void 0;if(!e){this.svg=null;return}let s=Re.get(e);if(s||(s=this.resolveIcon(e,o),Re.set(e,s)),!this.initialRender)return;const r=await s;if(r===oe&&Re.delete(e),e===this.getIconSource().url){if(as(r)){if(this.svg=r,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(r){case oe:case qt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[Y,ls];l([B()],N.prototype,"svg",2);l([h({reflect:!0})],N.prototype,"name",2);l([h()],N.prototype,"src",2);l([h()],N.prototype,"label",2);l([h({reflect:!0})],N.prototype,"library",2);l([D("label")],N.prototype,"handleLabelChange",1);l([D(["name","src","library"])],N.prototype,"setIcon",1);N.define("sl-icon");var hs=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())},ps=L`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=Symbol.for(""),fs=t=>{if((t==null?void 0:t.r)===Ui)return t==null?void 0:t._$litStatic$},de=(t,...e)=>({_$litStatic$:e.reduce((i,o,s)=>i+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[s+1],t[0]),r:Ui}),Si=new Map,ms=t=>(e,...i)=>{const o=i.length;let s,r;const n=[],c=[];let u,a=0,d=!1;for(;a<o;){for(u=e[a];a<o&&(r=i[a],(s=fs(r))!==void 0);)u+=s+e[++a],d=!0;a!==o&&c.push(r),n.push(u),a++}if(a===o&&n.push(e[o]),d){const p=n.join("$$lit$$");(e=Si.get(p))===void 0&&(n.raw=n,Si.set(p,e=n)),i=c}return t(e,...i)},ae=ms(k);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=t=>t??O;var F=class extends M{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?de`a`:de`button`;return ae`
      <${e}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:"button")}
        href=${$(t?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t&&this.target?"noreferrer noopener":void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${$(this.name)}
          library=${$(this.library)}
          src=${$(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[Y,ps];F.dependencies={"sl-icon":N};l([H(".icon-button")],F.prototype,"button",2);l([B()],F.prototype,"hasFocus",2);l([h()],F.prototype,"name",2);l([h()],F.prototype,"library",2);l([h()],F.prototype,"src",2);l([h()],F.prototype,"href",2);l([h()],F.prototype,"target",2);l([h()],F.prototype,"download",2);l([h()],F.prototype,"label",2);l([h({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var ji=new Map,bs=new WeakMap;function gs(t){return t??{keyframes:[],options:{duration:0}}}function Ai(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function we(t,e){ji.set(t,gs(e))}function he(t,e,i){const o=bs.get(t);if(o!=null&&o[e])return Ai(o[e],i.dir);const s=ji.get(e);return s?Ai(s,i.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise(i=>{function o(s){s.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function fe(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,_e(Ot({},i),{duration:vs()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function vs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function me(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const Ue=new Set,Rt=new Map;let St,ti="ltr",ei="en";const qi=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qi){const t=new MutationObserver(Ki);ti=document.documentElement.dir||"ltr",ei=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Wi(...t){t.map(e=>{const i=e.$code.toLowerCase();Rt.has(i)?Rt.set(i,Object.assign(Object.assign({},Rt.get(i)),e)):Rt.set(i,e),St||(St=e)}),Ki()}function Ki(){qi&&(ti=document.documentElement.dir||"ltr",ei=document.documentElement.lang||navigator.language),[...Ue.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let ys=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ue.add(this.host)}hostDisconnected(){Ue.delete(this.host)}dir(){return`${this.host.dir||ti}`.toLowerCase()}lang(){return`${this.host.lang||ei}`.toLowerCase()}getTranslationData(e){var i,o;const s=new Intl.Locale(e.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(o=(i=s==null?void 0:s.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",c=Rt.get(`${r}-${n}`),u=Rt.get(r);return{locale:s,language:r,region:n,primary:c,secondary:u}}exists(e,i){var o;const{primary:s,secondary:r}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(s&&s[e]||r&&r[e]||i.includeFallback&&St&&St[e])}term(e,...i){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(s&&s[e])r=s[e];else if(St&&St[e])r=St[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...i):r}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Yi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Wi(Yi);var _s=Yi,xt=class extends ys{};Wi(_s);var ws=L`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,q=class Ct extends M{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"icon","suffix"),this.localize=new xt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",o="0";this.countdownAnimation=e.animate([{width:i},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await me(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=he(this,"alert.show",{dir:this.localize.dir()});await fe(this.base,e,i),this.emit("sl-after-show")}else{hs(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await me(this.base);const{keyframes:e,options:i}=he(this,"alert.hide",{dir:this.localize.dir()});await fe(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pe(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Ct.toastStack.parentElement===null&&document.body.append(Ct.toastStack),Ct.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ct.toastStack.removeChild(this),e(),Ct.toastStack.querySelector("sl-alert")===null&&Ct.toastStack.remove()},{once:!0})})}render(){return k`
      <div
        part="base"
        class=${V({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?k`
              <div
                class=${V({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};q.styles=[Y,ws];q.dependencies={"sl-icon-button":F};l([H('[part~="base"]')],q.prototype,"base",2);l([H(".alert__countdown-elapsed")],q.prototype,"countdownElement",2);l([h({type:Boolean,reflect:!0})],q.prototype,"open",2);l([h({type:Boolean,reflect:!0})],q.prototype,"closable",2);l([h({reflect:!0})],q.prototype,"variant",2);l([h({type:Number})],q.prototype,"duration",2);l([h({type:String,reflect:!0})],q.prototype,"countdown",2);l([B()],q.prototype,"remainingTime",2);l([D("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);l([D("duration")],q.prototype,"handleDurationChange",1);var xs=q;we("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});we("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});xs.define("sl-alert");var $s=L`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Xi=class extends M{constructor(){super(...arguments),this.localize=new xt(this)}render(){return k`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Xi.styles=[Y,$s];var Wt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,Be=new WeakSet,se=new WeakMap,xe=class{constructor(t,e){this.handleFormData=i=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{i.formData.append(s,c.toString())}):i.formData.append(s,r.toString()))},this.handleFormSubmit=i=>{var o;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Wt.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),se.set(this.host,[])},this.handleInteraction=i=>{const o=se.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ot({form:i=>{const o=i.form;if(o){const r=i.getRootNode().querySelector(`#${o}`);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),se.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),se.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Wt.has(this.form)?Wt.get(this.form).add(this.host):Wt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Yt.has(this.form)||(Yt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Wt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form)),Yt.has(this.form)&&(this.form.checkValidity=Yt.get(this.form),Yt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Be.add(t):Be.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Be.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},ii=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(_e(Ot({},ii),{valid:!1,valueMissing:!0}));Object.freeze(_e(Ot({},ii),{valid:!1,customError:!0}));var ks=L`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,S=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Vt(this,"[default]","prefix","suffix"),this.localize=new xt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ii}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?de`a`:de`button`;return ae`
      <${e}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:this.type)}
        title=${this.title}
        name=${$(t?void 0:this.name)}
        value=${$(t?void 0:this.value)}
        href=${$(t&&!this.disabled?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t?this.rel:void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ae` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ae`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};S.styles=[Y,ks];S.dependencies={"sl-icon":N,"sl-spinner":Xi};l([H(".button")],S.prototype,"button",2);l([B()],S.prototype,"hasFocus",2);l([B()],S.prototype,"invalid",2);l([h()],S.prototype,"title",2);l([h({reflect:!0})],S.prototype,"variant",2);l([h({reflect:!0})],S.prototype,"size",2);l([h({type:Boolean,reflect:!0})],S.prototype,"caret",2);l([h({type:Boolean,reflect:!0})],S.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],S.prototype,"loading",2);l([h({type:Boolean,reflect:!0})],S.prototype,"outline",2);l([h({type:Boolean,reflect:!0})],S.prototype,"pill",2);l([h({type:Boolean,reflect:!0})],S.prototype,"circle",2);l([h()],S.prototype,"type",2);l([h()],S.prototype,"name",2);l([h()],S.prototype,"value",2);l([h()],S.prototype,"href",2);l([h()],S.prototype,"target",2);l([h()],S.prototype,"rel",2);l([h()],S.prototype,"download",2);l([h()],S.prototype,"form",2);l([h({attribute:"formaction"})],S.prototype,"formAction",2);l([h({attribute:"formenctype"})],S.prototype,"formEnctype",2);l([h({attribute:"formmethod"})],S.prototype,"formMethod",2);l([h({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);l([h({attribute:"formtarget"})],S.prototype,"formTarget",2);l([D("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");var Cs=L`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Zi=(t="value")=>(e,i)=>{const o=e.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,c){var u;const a=o.getPropertyOptions(t),d=typeof a.attribute=="string"?a.attribute:t;if(r===d){const p=a.converter||Mt,f=(typeof p=="function"?p:(u=p==null?void 0:p.fromAttribute)!=null?u:Mt.fromAttribute)(c,a.type);this[t]!==f&&(this[i]=f)}s.call(this,r,n,c)}},oi=L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=Je(class extends Qe{constructor(t){if(super(t),t.type!==mt.PROPERTY&&t.type!==mt.ATTRIBUTE&&t.type!==mt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!cs(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===K||e===O)return e;const i=t.element,o=t.name;if(t.type===mt.PROPERTY){if(e===i[o])return K}else if(t.type===mt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return K}else if(t.type===mt.ATTRIBUTE&&i.getAttribute(o)===e+"")return K;return ds(t),e}});var I=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return k`
      <div
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${V({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this.value)}
            .checked=${Gi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};I.styles=[Y,oi,Cs];l([H('input[type="checkbox"]')],I.prototype,"input",2);l([B()],I.prototype,"hasFocus",2);l([h()],I.prototype,"title",2);l([h()],I.prototype,"name",2);l([h()],I.prototype,"value",2);l([h({reflect:!0})],I.prototype,"size",2);l([h({type:Boolean,reflect:!0})],I.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],I.prototype,"checked",2);l([Zi("checked")],I.prototype,"defaultChecked",2);l([h({reflect:!0})],I.prototype,"form",2);l([h({type:Boolean,reflect:!0})],I.prototype,"required",2);l([h({attribute:"help-text"})],I.prototype,"helpText",2);l([D("checked",{waitUntilFirstUpdate:!0})],I.prototype,"handleCheckedChange",1);l([D("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);I.define("sl-switch");var Ss=L`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Pt=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return k`
      <span
        part="base"
        class=${V({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?k`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Pt.styles=[Y,Ss];Pt.dependencies={"sl-icon-button":F};l([h({reflect:!0})],Pt.prototype,"variant",2);l([h({reflect:!0})],Pt.prototype,"size",2);l([h({type:Boolean,reflect:!0})],Pt.prototype,"pill",2);l([h({type:Boolean})],Pt.prototype,"removable",2);var As=L`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Es(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Ts(t,e,i="vertical",o="smooth"){const s=Es(t,e),r=s.top+e.scrollTop,n=s.left+e.scrollLeft,c=e.scrollLeft,u=e.scrollLeft+e.offsetWidth,a=e.scrollTop,d=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<c?e.scrollTo({left:n,behavior:o}):n+t.clientWidth>u&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(r<a?e.scrollTo({top:r,behavior:o}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:o}))}var zs=L`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const yt=Math.min,U=Math.max,be=Math.round,re=Math.floor,st=t=>({x:t,y:t}),Os={left:"right",right:"left",bottom:"top",top:"bottom"},Ps={start:"end",end:"start"};function je(t,e,i){return U(t,yt(e,i))}function Ft(t,e){return typeof t=="function"?t(e):t}function _t(t){return t.split("-")[0]}function Ht(t){return t.split("-")[1]}function Ji(t){return t==="x"?"y":"x"}function si(t){return t==="y"?"height":"width"}function vt(t){return["top","bottom"].includes(_t(t))?"y":"x"}function ri(t){return Ji(vt(t))}function Ls(t,e,i){i===void 0&&(i=!1);const o=Ht(t),s=ri(t),r=si(s);let n=s==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=ge(n)),[n,ge(n)]}function Rs(t){const e=ge(t);return[qe(t),e,qe(e)]}function qe(t){return t.replace(/start|end/g,e=>Ps[e])}function Bs(t,e,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?s:o:e?o:s;case"left":case"right":return e?r:n;default:return[]}}function Ms(t,e,i,o){const s=Ht(t);let r=Bs(_t(t),i==="start",o);return s&&(r=r.map(n=>n+"-"+s),e&&(r=r.concat(r.map(qe)))),r}function ge(t){return t.replace(/left|right|bottom|top/g,e=>Os[e])}function Ds(t){return{top:0,right:0,bottom:0,left:0,...t}}function Qi(t){return typeof t!="number"?Ds(t):{top:t,right:t,bottom:t,left:t}}function ve(t){const{x:e,y:i,width:o,height:s}=t;return{width:o,height:s,top:i,left:e,right:e+o,bottom:i+s,x:e,y:i}}function Ei(t,e,i){let{reference:o,floating:s}=t;const r=vt(e),n=ri(e),c=si(n),u=_t(e),a=r==="y",d=o.x+o.width/2-s.width/2,p=o.y+o.height/2-s.height/2,m=o[c]/2-s[c]/2;let f;switch(u){case"top":f={x:d,y:o.y-s.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:p};break;case"left":f={x:o.x-s.width,y:p};break;default:f={x:o.x,y:o.y}}switch(Ht(e)){case"start":f[n]-=m*(i&&a?-1:1);break;case"end":f[n]+=m*(i&&a?-1:1);break}return f}const Is=async(t,e,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:n}=i,c=r.filter(Boolean),u=await(n.isRTL==null?void 0:n.isRTL(e));let a=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:p}=Ei(a,o,u),m=o,f={},b=0;for(let g=0;g<c.length;g++){const{name:y,fn:w}=c[g],{x:C,y:A,data:P,reset:z}=await w({x:d,y:p,initialPlacement:o,placement:m,strategy:s,middlewareData:f,rects:a,platform:n,elements:{reference:t,floating:e}});d=C??d,p=A??p,f={...f,[y]:{...f[y],...P}},z&&b<=50&&(b++,typeof z=="object"&&(z.placement&&(m=z.placement),z.rects&&(a=z.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:s}):z.rects),{x:d,y:p}=Ei(a,m,u)),g=-1)}return{x:d,y:p,placement:m,strategy:s,middlewareData:f}};async function ni(t,e){var i;e===void 0&&(e={});const{x:o,y:s,platform:r,rects:n,elements:c,strategy:u}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:f=0}=Ft(e,t),b=Qi(f),y=c[m?p==="floating"?"reference":"floating":p],w=ve(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(y)))==null||i?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:u})),C=p==="floating"?{x:o,y:s,width:n.floating.width,height:n.floating.height}:n.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),P=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},z=ve(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:A,strategy:u}):C);return{top:(w.top-z.top+b.top)/P.y,bottom:(z.bottom-w.bottom+b.bottom)/P.y,left:(w.left-z.left+b.left)/P.x,right:(z.right-w.right+b.right)/P.x}}const Vs=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:s,rects:r,platform:n,elements:c,middlewareData:u}=e,{element:a,padding:d=0}=Ft(t,e)||{};if(a==null)return{};const p=Qi(d),m={x:i,y:o},f=ri(s),b=si(f),g=await n.getDimensions(a),y=f==="y",w=y?"top":"left",C=y?"bottom":"right",A=y?"clientHeight":"clientWidth",P=r.reference[b]+r.reference[f]-m[f]-r.floating[b],z=m[f]-r.reference[f],Z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a));let R=Z?Z[A]:0;(!R||!await(n.isElement==null?void 0:n.isElement(Z)))&&(R=c.floating[A]||r.floating[b]);const lt=P/2-z/2,tt=R/2-g[b]/2-1,W=yt(p[w],tt),ut=yt(p[C],tt),et=W,dt=R-g[b]-ut,it=R/2-g[b]/2+lt,G=je(et,it,dt),$t=!u.arrow&&Ht(s)!=null&&it!==G&&r.reference[b]/2-(it<et?W:ut)-g[b]/2<0,at=$t?it<et?it-et:it-dt:0;return{[f]:m[f]+at,data:{[f]:G,centerOffset:it-G-at,...$t&&{alignmentOffset:at}},reset:$t}}}),Fs=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:s,middlewareData:r,rects:n,initialPlacement:c,platform:u,elements:a}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...y}=Ft(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const w=_t(s),C=vt(c),A=_t(c)===c,P=await(u.isRTL==null?void 0:u.isRTL(a.floating)),z=m||(A||!g?[ge(c)]:Rs(c)),Z=b!=="none";!m&&Z&&z.push(...Ms(c,g,b,P));const R=[c,...z],lt=await ni(e,y),tt=[];let W=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&tt.push(lt[w]),p){const G=Ls(s,n,P);tt.push(lt[G[0]],lt[G[1]])}if(W=[...W,{placement:s,overflows:tt}],!tt.every(G=>G<=0)){var ut,et;const G=(((ut=r.flip)==null?void 0:ut.index)||0)+1,$t=R[G];if($t){var dt;const ht=p==="alignment"?C!==vt($t):!1,ot=((dt=W[0])==null?void 0:dt.overflows[0])>0;if(!ht||ot)return{data:{index:G,overflows:W},reset:{placement:$t}}}let at=(et=W.filter(ht=>ht.overflows[0]<=0).sort((ht,ot)=>ht.overflows[1]-ot.overflows[1])[0])==null?void 0:et.placement;if(!at)switch(f){case"bestFit":{var it;const ht=(it=W.filter(ot=>{if(Z){const pt=vt(ot.placement);return pt===C||pt==="y"}return!0}).map(ot=>[ot.placement,ot.overflows.filter(pt=>pt>0).reduce((pt,po)=>pt+po,0)]).sort((ot,pt)=>ot[1]-pt[1])[0])==null?void 0:it[0];ht&&(at=ht);break}case"initialPlacement":at=c;break}if(s!==at)return{reset:{placement:at}}}return{}}}};async function Hs(t,e){const{placement:i,platform:o,elements:s}=t,r=await(o.isRTL==null?void 0:o.isRTL(s.floating)),n=_t(i),c=Ht(i),u=vt(i)==="y",a=["left","top"].includes(n)?-1:1,d=r&&u?-1:1,p=Ft(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof b=="number"&&(f=c==="end"?b*-1:b),u?{x:f*d,y:m*a}:{x:m*a,y:f*d}}const Ns=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:s,y:r,placement:n,middlewareData:c}=e,u=await Hs(e,t);return n===((i=c.offset)==null?void 0:i.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:s+u.x,y:r+u.y,data:{...u,placement:n}}}}},Us=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:s}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:c={fn:y=>{let{x:w,y:C}=y;return{x:w,y:C}}},...u}=Ft(t,e),a={x:i,y:o},d=await ni(e,u),p=vt(_t(s)),m=Ji(p);let f=a[m],b=a[p];if(r){const y=m==="y"?"top":"left",w=m==="y"?"bottom":"right",C=f+d[y],A=f-d[w];f=je(C,f,A)}if(n){const y=p==="y"?"top":"left",w=p==="y"?"bottom":"right",C=b+d[y],A=b-d[w];b=je(C,b,A)}const g=c.fn({...e,[m]:f,[p]:b});return{...g,data:{x:g.x-i,y:g.y-o,enabled:{[m]:r,[p]:n}}}}}},js=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:s,rects:r,platform:n,elements:c}=e,{apply:u=()=>{},...a}=Ft(t,e),d=await ni(e,a),p=_t(s),m=Ht(s),f=vt(s)==="y",{width:b,height:g}=r.floating;let y,w;p==="top"||p==="bottom"?(y=p,w=m===(await(n.isRTL==null?void 0:n.isRTL(c.floating))?"start":"end")?"left":"right"):(w=p,y=m==="end"?"top":"bottom");const C=g-d.top-d.bottom,A=b-d.left-d.right,P=yt(g-d[y],C),z=yt(b-d[w],A),Z=!e.middlewareData.shift;let R=P,lt=z;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(lt=A),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(R=C),Z&&!m){const W=U(d.left,0),ut=U(d.right,0),et=U(d.top,0),dt=U(d.bottom,0);f?lt=b-2*(W!==0||ut!==0?W+ut:U(d.left,d.right)):R=g-2*(et!==0||dt!==0?et+dt:U(d.top,d.bottom))}await u({...e,availableWidth:lt,availableHeight:R});const tt=await n.getDimensions(c.floating);return b!==tt.width||g!==tt.height?{reset:{rects:!0}}:{}}}};function $e(){return typeof window<"u"}function Nt(t){return to(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function nt(t){var e;return(e=(to(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function to(t){return $e()?t instanceof Node||t instanceof j(t).Node:!1}function J(t){return $e()?t instanceof Element||t instanceof j(t).Element:!1}function rt(t){return $e()?t instanceof HTMLElement||t instanceof j(t).HTMLElement:!1}function Ti(t){return!$e()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function ie(t){const{overflow:e,overflowX:i,overflowY:o,display:s}=Q(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(s)}function qs(t){return["table","td","th"].includes(Nt(t))}function ke(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ce(t){const e=li(),i=J(t)?Q(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Ws(t){let e=wt(t);for(;rt(e)&&!It(e);){if(Ce(e))return e;if(ke(e))return null;e=wt(e)}return null}function li(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function It(t){return["html","body","#document"].includes(Nt(t))}function Q(t){return j(t).getComputedStyle(t)}function Se(t){return J(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ti(t)&&t.host||nt(t);return Ti(e)?e.host:e}function eo(t){const e=wt(t);return It(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ie(e)?e:eo(e)}function te(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const s=eo(t),r=s===((o=t.ownerDocument)==null?void 0:o.body),n=j(s);if(r){const c=We(n);return e.concat(n,n.visualViewport||[],ie(s)?s:[],c&&i?te(c):[])}return e.concat(s,te(s,[],i))}function We(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function io(t){const e=Q(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=rt(t),r=s?t.offsetWidth:i,n=s?t.offsetHeight:o,c=be(i)!==r||be(o)!==n;return c&&(i=r,o=n),{width:i,height:o,$:c}}function ai(t){return J(t)?t:t.contextElement}function Bt(t){const e=ai(t);if(!rt(e))return st(1);const i=e.getBoundingClientRect(),{width:o,height:s,$:r}=io(e);let n=(r?be(i.width):i.width)/o,c=(r?be(i.height):i.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const Ks=st(0);function oo(t){const e=j(t);return!li()||!e.visualViewport?Ks:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ys(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==j(t)?!1:e}function zt(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const s=t.getBoundingClientRect(),r=ai(t);let n=st(1);e&&(o?J(o)&&(n=Bt(o)):n=Bt(t));const c=Ys(r,i,o)?oo(r):st(0);let u=(s.left+c.x)/n.x,a=(s.top+c.y)/n.y,d=s.width/n.x,p=s.height/n.y;if(r){const m=j(r),f=o&&J(o)?j(o):o;let b=m,g=We(b);for(;g&&o&&f!==b;){const y=Bt(g),w=g.getBoundingClientRect(),C=Q(g),A=w.left+(g.clientLeft+parseFloat(C.paddingLeft))*y.x,P=w.top+(g.clientTop+parseFloat(C.paddingTop))*y.y;u*=y.x,a*=y.y,d*=y.x,p*=y.y,u+=A,a+=P,b=j(g),g=We(b)}}return ve({width:d,height:p,x:u,y:a})}function ci(t,e){const i=Se(t).scrollLeft;return e?e.left+i:zt(nt(t)).left+i}function so(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),s=o.left+e.scrollLeft-(i?0:ci(t,o)),r=o.top+e.scrollTop;return{x:s,y:r}}function Xs(t){let{elements:e,rect:i,offsetParent:o,strategy:s}=t;const r=s==="fixed",n=nt(o),c=e?ke(e.floating):!1;if(o===n||c&&r)return i;let u={scrollLeft:0,scrollTop:0},a=st(1);const d=st(0),p=rt(o);if((p||!p&&!r)&&((Nt(o)!=="body"||ie(n))&&(u=Se(o)),rt(o))){const f=zt(o);a=Bt(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}const m=n&&!p&&!r?so(n,u,!0):st(0);return{width:i.width*a.x,height:i.height*a.y,x:i.x*a.x-u.scrollLeft*a.x+d.x+m.x,y:i.y*a.y-u.scrollTop*a.y+d.y+m.y}}function Zs(t){return Array.from(t.getClientRects())}function Gs(t){const e=nt(t),i=Se(t),o=t.ownerDocument.body,s=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-i.scrollLeft+ci(t);const c=-i.scrollTop;return Q(o).direction==="rtl"&&(n+=U(e.clientWidth,o.clientWidth)-s),{width:s,height:r,x:n,y:c}}function Js(t,e){const i=j(t),o=nt(t),s=i.visualViewport;let r=o.clientWidth,n=o.clientHeight,c=0,u=0;if(s){r=s.width,n=s.height;const a=li();(!a||a&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:r,height:n,x:c,y:u}}function Qs(t,e){const i=zt(t,!0,e==="fixed"),o=i.top+t.clientTop,s=i.left+t.clientLeft,r=rt(t)?Bt(t):st(1),n=t.clientWidth*r.x,c=t.clientHeight*r.y,u=s*r.x,a=o*r.y;return{width:n,height:c,x:u,y:a}}function zi(t,e,i){let o;if(e==="viewport")o=Js(t,i);else if(e==="document")o=Gs(nt(t));else if(J(e))o=Qs(e,i);else{const s=oo(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return ve(o)}function ro(t,e){const i=wt(t);return i===e||!J(i)||It(i)?!1:Q(i).position==="fixed"||ro(i,e)}function tr(t,e){const i=e.get(t);if(i)return i;let o=te(t,[],!1).filter(c=>J(c)&&Nt(c)!=="body"),s=null;const r=Q(t).position==="fixed";let n=r?wt(t):t;for(;J(n)&&!It(n);){const c=Q(n),u=Ce(n);!u&&c.position==="fixed"&&(s=null),(r?!u&&!s:!u&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ie(n)&&!u&&ro(t,n))?o=o.filter(d=>d!==n):s=c,n=wt(n)}return e.set(t,o),o}function er(t){let{element:e,boundary:i,rootBoundary:o,strategy:s}=t;const n=[...i==="clippingAncestors"?ke(e)?[]:tr(e,this._c):[].concat(i),o],c=n[0],u=n.reduce((a,d)=>{const p=zi(e,d,s);return a.top=U(p.top,a.top),a.right=yt(p.right,a.right),a.bottom=yt(p.bottom,a.bottom),a.left=U(p.left,a.left),a},zi(e,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ir(t){const{width:e,height:i}=io(t);return{width:e,height:i}}function or(t,e,i){const o=rt(e),s=nt(e),r=i==="fixed",n=zt(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const u=st(0);function a(){u.x=ci(s)}if(o||!o&&!r)if((Nt(e)!=="body"||ie(s))&&(c=Se(e)),o){const f=zt(e,!0,r,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else s&&a();r&&!o&&s&&a();const d=s&&!o&&!r?so(s,c):st(0),p=n.left+c.scrollLeft-u.x-d.x,m=n.top+c.scrollTop-u.y-d.y;return{x:p,y:m,width:n.width,height:n.height}}function Me(t){return Q(t).position==="static"}function Oi(t,e){if(!rt(t)||Q(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return nt(t)===i&&(i=i.ownerDocument.body),i}function no(t,e){const i=j(t);if(ke(t))return i;if(!rt(t)){let s=wt(t);for(;s&&!It(s);){if(J(s)&&!Me(s))return s;s=wt(s)}return i}let o=Oi(t,e);for(;o&&qs(o)&&Me(o);)o=Oi(o,e);return o&&It(o)&&Me(o)&&!Ce(o)?i:o||Ws(t)||i}const sr=async function(t){const e=this.getOffsetParent||no,i=this.getDimensions,o=await i(t.floating);return{reference:or(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function rr(t){return Q(t).direction==="rtl"}const ce={convertOffsetParentRelativeRectToViewportRelativeRect:Xs,getDocumentElement:nt,getClippingRect:er,getOffsetParent:no,getElementRects:sr,getClientRects:Zs,getDimensions:ir,getScale:Bt,isElement:J,isRTL:rr};function lo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function nr(t,e){let i=null,o;const s=nt(t);function r(){var c;clearTimeout(o),(c=i)==null||c.disconnect(),i=null}function n(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),r();const a=t.getBoundingClientRect(),{left:d,top:p,width:m,height:f}=a;if(c||e(),!m||!f)return;const b=re(p),g=re(s.clientWidth-(d+m)),y=re(s.clientHeight-(p+f)),w=re(d),A={rootMargin:-b+"px "+-g+"px "+-y+"px "+-w+"px",threshold:U(0,yt(1,u))||1};let P=!0;function z(Z){const R=Z[0].intersectionRatio;if(R!==u){if(!P)return n();R?n(!1,R):o=setTimeout(()=>{n(!1,1e-7)},1e3)}R===1&&!lo(a,t.getBoundingClientRect())&&n(),P=!1}try{i=new IntersectionObserver(z,{...A,root:s.ownerDocument})}catch{i=new IntersectionObserver(z,A)}i.observe(t)}return n(!0),r}function lr(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,a=ai(t),d=s||r?[...a?te(a):[],...te(e)]:[];d.forEach(w=>{s&&w.addEventListener("scroll",i,{passive:!0}),r&&w.addEventListener("resize",i)});const p=a&&c?nr(a,i):null;let m=-1,f=null;n&&(f=new ResizeObserver(w=>{let[C]=w;C&&C.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var A;(A=f)==null||A.observe(e)})),i()}),a&&!u&&f.observe(a),f.observe(e));let b,g=u?zt(t):null;u&&y();function y(){const w=zt(t);g&&!lo(g,w)&&i(),g=w,b=requestAnimationFrame(y)}return i(),()=>{var w;d.forEach(C=>{s&&C.removeEventListener("scroll",i),r&&C.removeEventListener("resize",i)}),p==null||p(),(w=f)==null||w.disconnect(),f=null,u&&cancelAnimationFrame(b)}}const ar=Ns,cr=Us,ur=Fs,Pi=js,dr=Vs,hr=(t,e,i)=>{const o=new Map,s={platform:ce,...i},r={...s.platform,_c:o};return Is(t,e,{...s,platform:r})};function pr(t){return fr(t)}function De(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function fr(t){for(let e=t;e;e=De(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=De(t);e;e=De(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Ce(i)||e.tagName==="BODY"))return e}return null}function mr(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var E=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,s=0,r=0,n=0,c=0,u=0,a=0,d=0;i?t.top<e.top?(o=t.left,s=t.bottom,r=t.right,n=t.bottom,c=e.left,u=e.top,a=e.right,d=e.top):(o=e.left,s=e.bottom,r=e.right,n=e.bottom,c=t.left,u=t.top,a=t.right,d=t.top):t.left<e.left?(o=t.right,s=t.top,r=e.left,n=e.top,c=t.right,u=t.bottom,a=e.left,d=e.bottom):(o=e.right,s=e.top,r=t.left,n=t.top,c=e.right,u=e.bottom,a=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||mr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=lr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ar({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Pi({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ur({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(cr({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Pi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(dr({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>ce.getOffsetParent(i,pr):ce.getOffsetParent;hr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:_e(Ot({},ce),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:s,placement:r})=>{const n=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const u=s.arrow.x,a=s.arrow.y;let d="",p="",m="",f="";if(this.arrowPlacement==="start"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?b:"",f=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":b,f=n?b:"",m=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof u=="number"?`${u}px`:"",d=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:d,right:p,bottom:m,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return k`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${V({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?k`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};E.styles=[Y,zs];l([H(".popup")],E.prototype,"popup",2);l([H(".popup__arrow")],E.prototype,"arrowEl",2);l([h()],E.prototype,"anchor",2);l([h({type:Boolean,reflect:!0})],E.prototype,"active",2);l([h({reflect:!0})],E.prototype,"placement",2);l([h({reflect:!0})],E.prototype,"strategy",2);l([h({type:Number})],E.prototype,"distance",2);l([h({type:Number})],E.prototype,"skidding",2);l([h({type:Boolean})],E.prototype,"arrow",2);l([h({attribute:"arrow-placement"})],E.prototype,"arrowPlacement",2);l([h({attribute:"arrow-padding",type:Number})],E.prototype,"arrowPadding",2);l([h({type:Boolean})],E.prototype,"flip",2);l([h({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],E.prototype,"flipFallbackPlacements",2);l([h({attribute:"flip-fallback-strategy"})],E.prototype,"flipFallbackStrategy",2);l([h({type:Object})],E.prototype,"flipBoundary",2);l([h({attribute:"flip-padding",type:Number})],E.prototype,"flipPadding",2);l([h({type:Boolean})],E.prototype,"shift",2);l([h({type:Object})],E.prototype,"shiftBoundary",2);l([h({attribute:"shift-padding",type:Number})],E.prototype,"shiftPadding",2);l([h({attribute:"auto-size"})],E.prototype,"autoSize",2);l([h()],E.prototype,"sync",2);l([h({type:Object})],E.prototype,"autoSizeBoundary",2);l([h({attribute:"auto-size-padding",type:Number})],E.prototype,"autoSizePadding",2);l([h({attribute:"hover-bridge",type:Boolean})],E.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ke extends Qe{constructor(e){if(super(e),this.it=O,e.type!==mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===O||e==null)return this._t=void 0,this.it=e;if(e===K)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Ke.directiveName="unsafeHTML",Ke.resultType=1;const br=Je(Ke);var x=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Vt(this,"help-text","label"),this.localize=new xt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>k`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,o=e.closest("sl-icon-button")!==null;if(!(i||o)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const s=this.getAllOptions(),r=s.indexOf(this.currentOption);let n=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=r+1,n>s.length-1&&(n=0)):t.key==="ArrowUp"?(n=r-1,n<0&&(n=s.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=s.length-1),this.setCurrentOption(s[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of s)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),o=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(s=>o.push(s.value)),this.setSelectedOptions(t.filter(s=>i.includes(s.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(o=>o.selected=!1),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const o=this.getAllOptions();this.selectedOptions=o.filter(r=>r.selected);const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const r=this.selectedOptions[0];this.value=(t=r==null?void 0:r.value)!=null?t:"",this.displayLabel=(i=(e=r==null?void 0:r.getTextLabel)==null?void 0:e.call(r))!=null?i:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return k`<div @sl-remove=${o=>this.handleTagRemove(o,t)}>
          ${typeof i=="string"?br(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return k`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return k``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await me(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=he(this,"select.show",{dir:this.localize.dir()});await fe(this.popup.popup,t,e),this.currentOption&&Ts(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await me(this);const{keyframes:t,options:e}=he(this,"select.hide",{dir:this.localize.dir()});await fe(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,pe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,pe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return k`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${V({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?k`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?k`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};x.styles=[Y,oi,As];x.dependencies={"sl-icon":N,"sl-popup":E,"sl-tag":Pt};l([H(".select")],x.prototype,"popup",2);l([H(".select__combobox")],x.prototype,"combobox",2);l([H(".select__display-input")],x.prototype,"displayInput",2);l([H(".select__value-input")],x.prototype,"valueInput",2);l([H(".select__listbox")],x.prototype,"listbox",2);l([B()],x.prototype,"hasFocus",2);l([B()],x.prototype,"displayLabel",2);l([B()],x.prototype,"currentOption",2);l([B()],x.prototype,"selectedOptions",2);l([B()],x.prototype,"valueHasChanged",2);l([h()],x.prototype,"name",2);l([B()],x.prototype,"value",1);l([h({attribute:"value"})],x.prototype,"defaultValue",2);l([h({reflect:!0})],x.prototype,"size",2);l([h()],x.prototype,"placeholder",2);l([h({type:Boolean,reflect:!0})],x.prototype,"multiple",2);l([h({attribute:"max-options-visible",type:Number})],x.prototype,"maxOptionsVisible",2);l([h({type:Boolean,reflect:!0})],x.prototype,"disabled",2);l([h({type:Boolean})],x.prototype,"clearable",2);l([h({type:Boolean,reflect:!0})],x.prototype,"open",2);l([h({type:Boolean})],x.prototype,"hoist",2);l([h({type:Boolean,reflect:!0})],x.prototype,"filled",2);l([h({type:Boolean,reflect:!0})],x.prototype,"pill",2);l([h()],x.prototype,"label",2);l([h({reflect:!0})],x.prototype,"placement",2);l([h({attribute:"help-text"})],x.prototype,"helpText",2);l([h({reflect:!0})],x.prototype,"form",2);l([h({type:Boolean,reflect:!0})],x.prototype,"required",2);l([h()],x.prototype,"getTag",2);l([D("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);l([D(["defaultValue","value"],{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1);l([D("open",{waitUntilFirstUpdate:!0})],x.prototype,"handleOpenChange",1);we("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});we("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});x.define("sl-select");var gr=L`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,X=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return k`
      <div
        part="base"
        class=${V({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};X.styles=[Y,gr];X.dependencies={"sl-icon":N};l([H(".option__label")],X.prototype,"defaultSlot",2);l([B()],X.prototype,"current",2);l([B()],X.prototype,"selected",2);l([B()],X.prototype,"hasHover",2);l([h({reflect:!0})],X.prototype,"value",2);l([h({type:Boolean,reflect:!0})],X.prototype,"disabled",2);l([D("disabled")],X.prototype,"handleDisabledChange",1);l([D("selected")],X.prototype,"handleSelectedChange",1);l([D("value")],X.prototype,"handleValueChange",1);X.define("sl-option");var vr=L`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,v=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Vt(this,"help-text","label"),this.localize=new xt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const s=e??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,s,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return k`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${$(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              min=${$(this.min)}
              max=${$(this.max)}
              step=${$(this.step)}
              .value=${Gi(this.value)}
              autocapitalize=${$(this.autocapitalize)}
              autocomplete=${$(this.autocomplete)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${$(this.pattern)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?k`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};v.styles=[Y,oi,vr];v.dependencies={"sl-icon":N};l([H(".input__control")],v.prototype,"input",2);l([B()],v.prototype,"hasFocus",2);l([h()],v.prototype,"title",2);l([h({reflect:!0})],v.prototype,"type",2);l([h()],v.prototype,"name",2);l([h()],v.prototype,"value",2);l([Zi()],v.prototype,"defaultValue",2);l([h({reflect:!0})],v.prototype,"size",2);l([h({type:Boolean,reflect:!0})],v.prototype,"filled",2);l([h({type:Boolean,reflect:!0})],v.prototype,"pill",2);l([h()],v.prototype,"label",2);l([h({attribute:"help-text"})],v.prototype,"helpText",2);l([h({type:Boolean})],v.prototype,"clearable",2);l([h({type:Boolean,reflect:!0})],v.prototype,"disabled",2);l([h()],v.prototype,"placeholder",2);l([h({type:Boolean,reflect:!0})],v.prototype,"readonly",2);l([h({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);l([h({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);l([h({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);l([h({reflect:!0})],v.prototype,"form",2);l([h({type:Boolean,reflect:!0})],v.prototype,"required",2);l([h()],v.prototype,"pattern",2);l([h({type:Number})],v.prototype,"minlength",2);l([h({type:Number})],v.prototype,"maxlength",2);l([h()],v.prototype,"min",2);l([h()],v.prototype,"max",2);l([h()],v.prototype,"step",2);l([h()],v.prototype,"autocapitalize",2);l([h()],v.prototype,"autocorrect",2);l([h()],v.prototype,"autocomplete",2);l([h({type:Boolean})],v.prototype,"autofocus",2);l([h()],v.prototype,"enterkeyhint",2);l([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],v.prototype,"spellcheck",2);l([h()],v.prototype,"inputmode",2);l([D("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);l([D("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);l([D("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v.define("sl-input");class ao extends ct{constructor(){super();T(this,"_nextButton");this._distance=0,this._pr=0}static get properties(){return{distance:{type:Number,reflectToAttribute:!0,attribute:!0},pr:{type:Number,reflectToAttribute:!0,attribute:!0}}}set distance(i){let o=this._distance;this._distance=i,this.requestUpdate("distance",o)}get distance(){return this._distance}set pr(i){let o=this._pr;this._pr=i,this.requestUpdate("pr",o)}get pr(){return this._pr}firstUpdated(){this._nextButton=this.shadowRoot.querySelector("sl-button"),this._hoursPR=this.shadowRoot.querySelector("#hours-pr"),this._minutesPR=this.shadowRoot.querySelector("#minutes-pr"),this._secondsPR=this.shadowRoot.querySelector("#seconds-pr"),this._distanceSelect=this.shadowRoot.querySelector("#distance")}connectedCallback(){super.connectedCallback()}_moveToRace(){if(this._minutesPR.value>60||this._secondsPR.value>60||this._distanceSelect.value==="")return;this.shadowRoot.host.style.display="none",this.distance=this._distanceSelect.value,this.pr=this._calculatePRinMilliseconds(this._hoursPR.value,this._minutesPR.value,this._secondsPR.value);let i=new CustomEvent("distance-changed",{detail:{message:"distance changed",distance:this.distance},bubbles:!0,composed:!0});this.dispatchEvent(i),i=new CustomEvent("pr-changed",{detail:{message:"pr changed",pr:this.pr},bubbles:!0,composed:!0}),this.dispatchEvent(i)}_calculatePRinMilliseconds(i,o,s){return(Number(i)*3600+Number(o)*60+Number(s))*1e3}render(){return k`
            <div class="root">
                <div class="content">
                    <div class="content-item">
                        <div class="pr-panel-title">Select Distance:</div>
                    </div>
                    <div class="content-item">
                        <sl-select id="distance" placeholder="Select one" size="large" value="1600">
                            <sl-option value="800">800m</sl-option>
                            <sl-option value="1500">1500m</sl-option>
                            <sl-option value="1600">1600m</sl-option>
                            <sl-option value="3000">3000m</sl-option>
                            <sl-option value="3200">3200m</sl-option>
                        </sl-select>
                    </div>
                    <div class="content-item">
                        <div class="pr-panel-title"> What's your PR target?</div>
                    </div>
                    <div class="content-item">
                        <sl-input id="hours-pr" type="number" label="Hours" value="0"></sl-input>
                        <sl-input id="minutes-pr" type="number" label="Minutes" value="5"></sl-input>
                        <sl-input id="seconds-pr" type="number" label="Seconds"value="29"></sl-input>
                    </div>
                    <sl-button variant="primary" @click="${this._moveToRace}">Next</sl-button>
                </div>
            </div>
        `}}T(ao,"styles",L`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            background-color: black;
            width: 100%;
            height: 100%;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }

        .content-item {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .pr-panel-title {
            font-size: 1.5rem;
            width: 90%;
        }

        sl-input {
            width: 30%;
        }

        sl-button::part(base) {
            background-color: #07b31b;
            border-color: #069a17;
        }
    `);customElements.define("setup-panel",ao);F.define("sl-icon-button");class co extends ct{constructor(){super();T(this,"_distance");T(this,"_pr");T(this,"_numberOfLapsLeft");T(this,"_timer");T(this,"_elapsedTimer");T(this,"_startButton");T(this,"_pauseButton");T(this,"_resetButton");T(this,"_lapButton");T(this,"_splits",[]);T(this,"_absoluteSplits",[]);T(this,"_elapsedTime");this._distance=0,this._pr=0,this._numberOfLapsLeft=0,this._timer=null,this._elapsedTime=0,this._absoluteSplits=[]}static get properties(){return{distance:{type:Number,reflectToAttribute:!0,attribute:!0},pr:{type:Number,reflectToAttribute:!0,attribute:!0},splits:{type:Array,reflectToAttribute:!1,attribute:!0}}}set distance(i){let o=this._distance;this._distance=i,this._calculateNumberOfLaps(),this.requestUpdate("distance",o)}get distance(){return this._distance}set pr(i){let o=this._pr;this._pr=i,this.requestUpdate("pr",o)}get pr(){return this._pr}set splits(i){let o=this._splits;this._splits=i,this.requestUpdate("splits",o)}get splits(){return this._splits}firstUpdated(){this._elapsedTimer=this.shadowRoot.querySelector("#elapsedTimer"),this._startButton=this.shadowRoot.querySelector("#startButton"),this._pauseButton=this.shadowRoot.querySelector("#pauseButton"),this._resetButton=this.shadowRoot.querySelector("#resetButton"),this._lapButton=this.shadowRoot.querySelector("#lapButton"),this._projectedTime=this.shadowRoot.querySelector("#projected-time"),this._overallAhead=this.shadowRoot.querySelector("#overall-ahead")}connectedCallback(){super.connectedCallback()}_calculateNumberOfLaps(){this._numberOfLapsLeft=Math.round(this.distance/400)}_startRace(){if(this._timer!=null){clearInterval(this._timer),this._timer=null,this._startButton.name="play-circle",this._startButton.label="start",this._lapButton.disabled=!0;return}this._timer=setInterval(()=>this._updateTimerDisplay(),10),this._startButton.name="pause-circle",this._startButton.label="pause",this._resetButton.disabled=!1,this._lapButton.disabled=!1}resetRace(){clearInterval(this._timer),this._elapsedTime=0,this.splits=[],this._aboluteSplits=[],this._numberOfLapsLeft=Math.round(this.distance/400),this._elapsedTimer.innerHTML=" 00 : 00 : 00 : 00",this._lapButton.disabled=!0,this._projectedTime.innerHTML=" 00 : 00 : 00 : 00",this._startButton.name="play-circle",this._startButton.label="start"}_updateTimerDisplay(){this._elapsedTime+=10,this._elapsedTimer.innerHTML=this._formatTime(this._elapsedTime)}_lap(){if(this._splits.length>=1){let i=this._elapsedTime-this._absoluteSplits[this._absoluteSplits.length-1];this.splits.push(i),this._absoluteSplits.push(this._elapsedTime)}else this.splits.push(this._elapsedTime),this._absoluteSplits.push(this._elapsedTime);this._numberOfLapsLeft--,this.requestUpdate(),this._calculateProjectedFinishTime(),this._numberOfLapsLeft===0&&(this._lapButton.disabled=!0,this._startRace())}_calculateProjectedFinishTime(){let i=0;this._splits.length===1&&this._distance==="1500"?i=this._elapsedTime+this._splits[0]*1.25*this._numberOfLapsLeft:this._splits.length===1&&this._distance==="3000"?i=this._elapsedTime+this._splits[0]*2*this._numberOfLapsLeft:i=this._elapsedTime+this._splits[this._splits.length-1]*this._numberOfLapsLeft;let o=this._formatTime(i);this._projectedTime.innerHTML=o;const s=i-this.pr;s<0?(this._overallAhead.style.color="#069a17",this._overallAhead.innerHTML="Ahead: "+this._formatTime(-s)):(this._overallAhead.style.color="#9a0606",this._overallAhead.innerHTML="Behind: "+this._formatTime(s))}_computePaceinKm(i){const o=this._splits[i];console.log(o);let s=.4;this._distance==="1500"&&i===0?s=.3:this._distance==="3000"&&i===0&&(s=.2);const n=o/(1e3*60)/s,c=Math.floor(n),u=(n-c)*60,a=Math.round(u),d=a<10?`0${a}`:`${a}`;return`${c}:${d} min/km`}_computePaceinMiles(i){const o=this._splits[i];let s;this._distance==="1500"&&i===0?(console.log("1500"),s=300/1609.34):this._distance==="3000"&&i===0?s=200/1609.34:s=400/1609.34;const n=o/(1e3*60)/s,c=Math.floor(n),u=(n-c)*60,a=Math.round(u),d=a<10?`0${a}`:`${a}`;return`${c}:${d} min/mile`}_formatTime(i){let o=Math.floor(i/36e5),s=Math.floor(i%36e5/6e4),r=Math.floor(i%6e4/1e3),n=i%1e3;return n=n/10,`${o<10?"0"+o:o} : ${s<10?"0"+s:s} : ${r<10?"0"+r:r} : ${n<10?"0"+n:n<100?""+n:n}`}render(){return k`
            <div class="root">
                <div class="content">
                    <div class="header">Distance: ${this.distance}</div>
                    <div class="timer">
                        <div class="rounded-time" id="elapsedTimer">00 : 00 : 00 : 00</div>
                        <div class="timer-buttons">
                            <sl-icon-button name="arrow-clockwise" @click="${this.resetRace}" disabled id="resetButton" label="reset"></sl-icon-button>
                            <sl-icon-button name="play-circle" @click="${this._startRace}" id="startButton" label="start"></sl-icon-button>
                            <sl-icon-button name="stopwatch" @click="${this._lap}" id="lapButton" label="lap"></sl-icon-button>
                        </div>
                    </div>
                    <div class="projected-time">
                        <div class="projected-header">Projected Finish Time</div>
                        <div id="projected-time" class="time">00 : 00 : 00 : 00</div>
                        <div class="projected-legend">
                            <div class="overall-ahead" id="overall-ahead"></div>
                            <div class="current-pr">Current PR: ${this._formatTime(this.pr)}</div>
                        </div>
                    </div>
                    <div class="splits">
                    <div class="split-header">Splits</div>
                    ${this.splits.map((i,o)=>k`
                        <div class="split">${++o} - ${this._formatTime(i)} - ${this._computePaceinMiles(--o)}</div>
                    `)}
                    </div>
                </div>
            </div>
        `}}T(co,"styles",L`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            width: 100%;
            height: 100%;
        }

        .content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .header {
            width: 100%;
            font-size: 1.5rem;
            height: 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .split {
            margin-top: 5px;
        }

        .splits {
            width: 100%;
            height: 35%;
            border-top: solid 2px white;
        }

        .timer {
            width: 100%;
            font-size: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 55%;
        }

        .rounded-time {
            border: solid 4px #07b31b;
            border-radius: 50%;
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .timer-buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            width: 100%;
        }

        #startButton {
            background-color: #07b31b;
            border: solid 1px #069a17;
            color: white;
            border-radius: 10px;
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .timer-buttons sl-icon-button::part(base):hover,
        .timer-buttons sl-icon-button::part(base):focus {
            color: white;
        }

        .timer-buttons sl-icon-button::part(base):active {
            color: white;
        }

        .projected-time {
            width: 100%;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 15%;
            border-top: solid 2px white;
        }

        .current-pr {
            width: 50%;
            color: #99a49b;
        }

        .overall-ahead {
            width: 50%;
        }

        .projected-header {
            margin-top: 10px;
        }

        .projected-legend {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            margin-top: 20px;
        }

        .split-header {
            font-size: 1.5rem;
            margin-top: 10px;
            margin-bottom: 20px;
        }
    `);customElements.define("race-panel",co);class uo extends ct{constructor(){super();T(this,"_isMainScreen");this._isMainScreen=!0}static get properties(){return{isMainScreen:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set isMainScreen(i){let o=this._isMainScreen;this._isMainScreen=i,this.requestUpdate("isMainScreen",o)}get isMainScreen(){return this._isMainScreen}_backClicked(){this.dispatchEvent(new CustomEvent("back-clicked",{bubbles:!0,composed:!0})),this.isMainScreen=!0}firstUpdated(){}render(){return k`
    <div class="root">
        <sl-icon-button name="arrow-left-square" label="Back" ?disabled=${this.isMainScreen}
            @click="${this._backClicked}"></sl-icon-button>
        <div class="header">Will I PR?</div>
    </div>
    `}}T(uo,"styles",L`
    :host {
        width: 100%;
        height: 100%;
        color: white;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    .root {
        background-color: #069a17;
        font-size: 1.5rem;
        text-align: center;
        font-style: italic;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
    }

    .header {
        width: 80%;
    }

    sl-icon-button {
        color: white;
    }

    sl-icon-button::part(base):hover,
    sl-icon-button::part(base):focus {
        color: white;
    }

    sl-icon-button::part(base):active {
        color: white;
    }
`);customElements.define("main-header",uo);He("/will-i-pr/");class ho extends ct{constructor(){super();T(this,"_swAlert");T(this,"_wb");T(this,"_wbRegistration");T(this,"_mainHeader");T(this,"_setupPanel");T(this,"_racePanel")}static get properties(){return{viewportWidth:{type:String},viewportHeight:{type:String}}}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Fo("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._setupPanel=this.shadowRoot.querySelector("setup-panel"),this._racePanel=this.shadowRoot.querySelector("race-panel"),this._mainHeader=this.shadowRoot.querySelector("main-header")}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ie(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_distanceChanged(i){this._racePanel.distance=i.detail.distance,this._mainHeader.isMainScreen=!1}_prChanged(i){this._racePanel.pr=i.detail.pr}_backClicked(){this._setupPanel.style.display="block",this._racePanel.resetRace()}render(){return k`
      <main-header @back-clicked="${this._backClicked}"></main-header> 
      <setup-panel @distance-changed="${this._distanceChanged}" @pr-changed="${this._prChanged}"></setup-panel>
      <race-panel></race-panel>
      <div class="alert-sw">
        <sl-alert id="sw-alert" variant="primary" closable duration="10000">
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <div class="text-sw">
            <strong>A newer version of the application is available</strong>
          </div>
          Please reload to update: 
          <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
        </sl-alert>
      </div>
    `}}T(ho,"styles",L`
    :host {
      width: 100vw;
      height: 100vh;
      color: white;
      background-color: black;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      right: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }

    main-header {
      height: 5vh;
    }
  `);customElements.define("main-application",ho);
