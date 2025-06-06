var mo=Object.defineProperty;var bo=(t,e,i)=>e in t?mo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var A=(t,e,i)=>bo(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,Ye=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),di=new WeakMap;let Ri=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Ye&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=di.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&di.set(i,e))}return e}toString(){return this.cssText}};const go=t=>new Ri(typeof t=="string"?t:t+"",void 0,Xe),P=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Ri(i,t,Xe)},vo=(t,e)=>{if(Ye)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const o=document.createElement("style"),r=ne.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}},ui=Ye?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return go(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yo,defineProperty:wo,getOwnPropertyDescriptor:_o,getOwnPropertyNames:xo,getOwnPropertySymbols:ko,getPrototypeOf:$o}=Object,gt=globalThis,hi=gt.trustedTypes,Co=hi?hi.emptyScript:"",Ae=gt.reactiveElementPolyfillSupport,Xt=(t,e)=>t,Mt={toAttribute(t,e){switch(e){case Boolean:t=t?Co:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ze=(t,e)=>!yo(t,e),pi={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:Ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gt.litPropertyMetadata??(gt.litPropertyMetadata=new WeakMap);let Lt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=pi){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,i);r!==void 0&&wo(this.prototype,e,r)}}static getPropertyDescriptor(e,i,o){const{get:r,set:s}=_o(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){const c=r==null?void 0:r.call(this);s==null||s.call(this,n),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pi}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;const e=$o(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){const i=this.properties,o=[...xo(i),...ko(i)];for(const r of o)this.createProperty(r,i[r])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)i.unshift(ui(r))}else e!==void 0&&i.push(ui(e));return i}static _$Eu(e,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$ET(e,i){var s;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:Mt).toAttribute(i,o.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,i){var s,n;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const c=o.getPropertyOptions(r),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((s=c.converter)==null?void 0:s.fromAttribute)!==void 0?c.converter:Mt;this._$Em=r,this[r]=d.fromAttribute(i,c.type)??((n=this._$Ej)==null?void 0:n.get(r))??null,this._$Em=null}}requestUpdate(e,i,o){var r;if(e!==void 0){const s=this.constructor,n=this[e];if(o??(o=s.getPropertyOptions(e)),!((o.hasChanged??Ze)(n,i)||o.useDefault&&o.reflect&&n===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??i??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r){const{wrapped:c}=n,d=this[s];c!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,n,d)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};Lt.elementStyles=[],Lt.shadowRootOptions={mode:"open"},Lt[Xt("elementProperties")]=new Map,Lt[Xt("finalized")]=new Map,Ae==null||Ae({ReactiveElement:Lt}),(gt.reactiveElementVersions??(gt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=globalThis,de=Zt.trustedTypes,fi=de?de.createPolicy("lit-html",{createHTML:t=>t}):void 0,Bi="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,Mi="?"+bt,So=`<${Mi}>`,zt=document,Gt=()=>zt.createComment(""),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",Ge=Array.isArray,Ao=t=>Ge(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ee=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,bi=/>/g,$t=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,vi=/"/g,Di=/^(?:script|style|textarea|title)$/i,Eo=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),$=Eo(1),K=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),yi=new WeakMap,At=zt.createTreeWalker(zt,129);function Ii(t,e){if(!Ge(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return fi!==void 0?fi.createHTML(e):e}const zo=(t,e)=>{const i=t.length-1,o=[];let r,s=e===2?"<svg>":e===3?"<math>":"",n=Ut;for(let c=0;c<i;c++){const d=t[c];let l,u,p=-1,m=0;for(;m<d.length&&(n.lastIndex=m,u=n.exec(d),u!==null);)m=n.lastIndex,n===Ut?u[1]==="!--"?n=mi:u[1]!==void 0?n=bi:u[2]!==void 0?(Di.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=$t):u[3]!==void 0&&(n=$t):n===$t?u[0]===">"?(n=r??Ut,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?$t:u[3]==='"'?vi:gi):n===vi||n===gi?n=$t:n===mi||n===bi?n=Ut:(n=$t,r=void 0);const f=n===$t&&t[c+1].startsWith("/>")?" ":"";s+=n===Ut?d+So:p>=0?(o.push(l),d.slice(0,p)+Bi+d.slice(p)+bt+f):d+bt+(p===-2?c:f)}return[Ii(t,s+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Qt{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const c=e.length-1,d=this.parts,[l,u]=zo(e,i);if(this.el=Qt.createElement(l,o),At.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=At.nextNode())!==null&&d.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Bi)){const m=u[n++],f=r.getAttribute(p).split(bt),b=/([.?@])?(.*)/.exec(m);d.push({type:1,index:s,name:b[2],strings:f,ctor:b[1]==="."?Oo:b[1]==="?"?Po:b[1]==="@"?Lo:ye}),r.removeAttribute(p)}else p.startsWith(bt)&&(d.push({type:6,index:s}),r.removeAttribute(p));if(Di.test(r.tagName)){const p=r.textContent.split(bt),m=p.length-1;if(m>0){r.textContent=de?de.emptyScript:"";for(let f=0;f<m;f++)r.append(p[f],Gt()),At.nextNode(),d.push({type:2,index:++s});r.append(p[m],Gt())}}}else if(r.nodeType===8)if(r.data===Mi)d.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(bt,p+1))!==-1;)d.push({type:7,index:s}),p+=bt.length-1}s++}}static createElement(e,i){const o=zt.createElement("template");return o.innerHTML=e,o}}function Dt(t,e,i=t,o){var n,c;if(e===K)return e;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=Jt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(e=Dt(t,r._$AS(t,e.values),r,o)),e}class To{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??zt).importNode(i,!0);At.currentNode=r;let s=At.nextNode(),n=0,c=0,d=o[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new ee(s,s.nextSibling,this,e):d.type===1?l=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(l=new Ro(s,this,e)),this._$AV.push(l),d=o[++c]}n!==(d==null?void 0:d.index)&&(s=At.nextNode(),n++)}return At.currentNode=zt,r}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}class ee{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,o,r){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Dt(this,e,i),Jt(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ao(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(zt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Qt.createElement(Ii(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new To(r,this),c=n.u(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(e){let i=yi.get(e.strings);return i===void 0&&yi.set(e.strings,i=new Qt(e)),i}k(e){Ge(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of e)r===i.length?i.push(o=new ee(this.O(Gt()),this.O(Gt()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,r,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(e,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)e=Dt(this,e,i,0),n=!Jt(e)||e!==this._$AH&&e!==K,n&&(this._$AH=e);else{const c=e;let d,l;for(e=s[0],d=0;d<s.length-1;d++)l=Dt(this,c[o+d],i,d),l===K&&(l=this._$AH[d]),n||(n=!Jt(l)||l!==this._$AH[d]),l===O?e=O:e!==O&&(e+=(l??"")+s[d+1]),this._$AH[d]=l}n&&!r&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Oo extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class Po extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class Lo extends ye{constructor(e,i,o,r,s){super(e,i,o,r,s),this.type=5}_$AI(e,i=this){if((e=Dt(this,e,i,0)??O)===K)return;const o=this._$AH,r=e===O&&o!==O||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==O&&(o===O||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Ro{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Dt(this,e)}}const ze=Zt.litHtmlPolyfillSupport;ze==null||ze(Qt,ee),(Zt.litHtmlVersions??(Zt.litHtmlVersions=[])).push("3.3.0");const Bo=(t,e,i)=>{const o=(i==null?void 0:i.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new ee(e.insertBefore(Gt(),s),s,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=globalThis;let rt=class extends Lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bo(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return K}};var Li;rt._$litElement$=!0,rt.finalized=!0,(Li=Et.litElementHydrateSupport)==null||Li.call(Et,{LitElement:rt});const Te=Et.litElementPolyfillSupport;Te==null||Te({LitElement:rt});(Et.litElementVersions??(Et.litElementVersions=[])).push("4.2.0");try{self["workbox:window:7.2.0"]&&_()}catch{}function Ie(t,e){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},t.postMessage(e,[o.port2])})}function Mo(t){var e=function(i,o){if(typeof i!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var s=r.call(i,o);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(t,"string");return typeof e=="symbol"?e:e+""}function Do(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Mo(o.key),o)}}function Ve(t,e){return Ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ve(t,e)}function wi(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Io(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(r,s){if(r){if(typeof r=="string")return wi(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wi(r,s):void 0}}(t))||e){i&&(t=i);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}try{self["workbox:core:7.2.0"]&&_()}catch{}var Oe=function(){var t=this;this.promise=new Promise(function(e,i){t.resolve=e,t.reject=i})};function Pe(t,e){var i=location.href;return new URL(t,i).href===new URL(e,i).href}var jt=function(t,e){this.type=t,Object.assign(this,e)};function ft(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Vo(){}var Fo={type:"SKIP_WAITING"};function _i(t,e){return t&&t.then?t.then(Vo):Promise.resolve()}var Ho=function(t){function e(c,d){var l,u;return d===void 0&&(d={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Oe,l.en=new Oe,l.on=new Oe,l.un=0,l.an=new Set,l.cn=function(){var p=l.fn,m=p.installing;l.tn>0||!Pe(m.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=m,p.removeEventListener("updatefound",l.cn)):(l.hn=m,l.an.add(m),l.rn.resolve(m)),++l.tn,m.addEventListener("statechange",l.ln)},l.ln=function(p){var m=l.fn,f=p.target,b=f.state,g=f===l.vn,y={sw:f,isExternal:g,originalEvent:p};!g&&l.mn&&(y.isUpdate=!0),l.dispatchEvent(new jt(b,y)),b==="installed"?l.wn=self.setTimeout(function(){b==="installed"&&m.waiting===f&&l.dispatchEvent(new jt("waiting",y))},200):b==="activating"&&(clearTimeout(l.wn),g||l.en.resolve(f))},l.yn=function(p){var m=l.hn,f=m!==navigator.serviceWorker.controller;l.dispatchEvent(new jt("controlling",{isExternal:f,originalEvent:p,sw:m,isUpdate:l.mn})),f||l.on.resolve(m)},l.gn=(u=function(p){var m=p.data,f=p.ports,b=p.source;return ft(l.getSW(),function(){l.an.has(b)&&l.dispatchEvent(new jt("message",{data:m,originalEvent:p,ports:f,sw:b}))})},function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{return Promise.resolve(u.apply(this,p))}catch(f){return Promise.reject(f)}}),l.sn=c,l.nn=d,navigator.serviceWorker.addEventListener("message",l.gn),l}var i,o;o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,Ve(i,o);var r,s,n=e.prototype;return n.register=function(c){var d=(c===void 0?{}:c).immediate,l=d!==void 0&&d;try{var u=this;return ft(function(p,m){var f=p();return f&&f.then?f.then(m):m(f)}(function(){if(!l&&document.readyState!=="complete")return _i(new Promise(function(p){return window.addEventListener("load",p)}))},function(){return u.mn=!!navigator.serviceWorker.controller,u.dn=u.pn(),ft(u.bn(),function(p){u.fn=p,u.dn&&(u.hn=u.dn,u.en.resolve(u.dn),u.on.resolve(u.dn),u.dn.addEventListener("statechange",u.ln,{once:!0}));var m=u.fn.waiting;return m&&Pe(m.scriptURL,u.sn.toString())&&(u.hn=m,Promise.resolve().then(function(){u.dispatchEvent(new jt("waiting",{sw:m,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.yn),u.fn})}))}catch(p){return Promise.reject(p)}},n.update=function(){try{return this.fn?ft(_i(this.fn.update())):ft()}catch(c){return Promise.reject(c)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(c){try{return ft(this.getSW(),function(d){return Ie(d,c)})}catch(d){return Promise.reject(d)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ie(this.fn.waiting,Fo)},n.pn=function(){var c=navigator.serviceWorker.controller;return c&&Pe(c.scriptURL,this.sn.toString())?c:void 0},n.bn=function(){try{var c=this;return ft(function(d,l){try{var u=d()}catch(p){return l(p)}return u&&u.then?u.then(void 0,l):u}(function(){return ft(navigator.serviceWorker.register(c.sn,c.nn),function(d){return c.un=performance.now(),d})},function(d){throw d}))}catch(d){return Promise.reject(d)}},r=e,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Do(r.prototype,s),Object.defineProperty(r,"prototype",{writable:!1}),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(i,o){this.jn(i).add(o)},e.removeEventListener=function(i,o){this.jn(i).delete(o)},e.dispatchEvent=function(i){i.target=this;for(var o,r=Io(this.jn(i.type));!(o=r()).done;)(0,o.value)(i)},e.jn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},t}()),No=P`
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
`,Vt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Y=P`
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
`,Vi=Object.defineProperty,Uo=Object.defineProperties,jo=Object.getOwnPropertyDescriptor,qo=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,Wo=Object.prototype.hasOwnProperty,Ko=Object.prototype.propertyIsEnumerable,Fi=t=>{throw TypeError(t)},ki=(t,e,i)=>e in t?Vi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ot=(t,e)=>{for(var i in e||(e={}))Wo.call(e,i)&&ki(t,i,e[i]);if(xi)for(var i of xi(e))Ko.call(e,i)&&ki(t,i,e[i]);return t},we=(t,e)=>Uo(t,qo(e)),a=(t,e,i,o)=>{for(var r=o>1?void 0:o?jo(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Vi(e,i,r),r},Hi=(t,e,i)=>e.has(t)||Fi("Cannot "+i),Yo=(t,e,i)=>(Hi(t,e,"read from private field"),e.get(t)),Xo=(t,e,i)=>e.has(t)?Fi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Zo=(t,e,i,o)=>(Hi(t,e,"write to private field"),e.set(t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:Ze},Jo=(t=Go,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),o==="accessor"){const{name:n}=i;return{set(c){const d=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,d,t)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(o==="setter"){const{name:n}=i;return function(c){const d=this[n];e.call(this,c),this.requestUpdate(n,d,t)}}throw Error("Unsupported decorator location: "+o)};function h(t){return(e,i)=>typeof i=="object"?Jo(t,e,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t,e){return(i,o,r)=>{const s=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(t))??null};return Qo(i,o,{get(){return s(this)}})}}var le,M=class extends rt{constructor(){super(),Xo(this,le,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Ot({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,i){Yo(this,le)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Zo(this,le,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};le=new WeakMap;M.version="2.20.1";M.dependencies={};a([h()],M.prototype,"dir",2);a([h()],M.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Je=t=>(...e)=>({_$litDirective$:t,values:e});let Qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=Je(class extends Qe{constructor(t){var e;if(super(t),t.type!==mt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return K}});var Ni=class extends M{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${V({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ni.styles=[Y,No];Ni.define("sl-card");var Fe="";function He(t){Fe=t}function tr(t=""){if(!Fe){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)He(i.getAttribute("data-shoelace"));else{const o=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),He(r.split("/").slice(0,-1).join("/"))}}return Fe.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var er={name:"default",resolver:t=>tr(`assets/icons/${t}.svg`)},ir=er,$i={caret:`
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
  `},or={name:"system",resolver:t=>t in $i?`data:image/svg+xml,${encodeURIComponent($i[t])}`:""},rr=or,sr=[ir,rr],Ne=[];function nr(t){Ne.push(t)}function lr(t){Ne=Ne.filter(e=>e!==t)}function Ci(t){return sr.find(e=>e.name===t)}var ar=P`
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
`;function D(t,e){const i=Ot({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(c){n.forEach(d=>{const l=d;if(c.has(l)){const u=c.get(l),p=this[l];u!==p&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),s.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,dr=t=>t.strings===void 0,ur={},hr=(t,e=ur)=>t._$AH=e;var qt=Symbol(),oe=Symbol(),Le,Re=new Map,N=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?qt:oe}catch{return oe}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return qt;Le||(Le=new DOMParser);const c=Le.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):qt}catch{return qt}}connectedCallback(){super.connectedCallback(),nr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),lr(this)}getIconSource(){const t=Ci(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?Ci(this.library):void 0;if(!e){this.svg=null;return}let r=Re.get(e);if(r||(r=this.resolveIcon(e,o),Re.set(e,r)),!this.initialRender)return;const s=await r;if(s===oe&&Re.delete(e),e===this.getIconSource().url){if(cr(s)){if(this.svg=s,o){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&n&&o.mutator(n)}return}switch(s){case oe:case qt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[Y,ar];a([B()],N.prototype,"svg",2);a([h({reflect:!0})],N.prototype,"name",2);a([h()],N.prototype,"src",2);a([h()],N.prototype,"label",2);a([h({reflect:!0})],N.prototype,"library",2);a([D("label")],N.prototype,"handleLabelChange",1);a([D(["name","src","library"])],N.prototype,"setIcon",1);N.define("sl-icon");var pr=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())},fr=P`
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
 */const Ui=Symbol.for(""),mr=t=>{if((t==null?void 0:t.r)===Ui)return t==null?void 0:t._$litStatic$},ue=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:Ui}),Si=new Map,br=t=>(e,...i)=>{const o=i.length;let r,s;const n=[],c=[];let d,l=0,u=!1;for(;l<o;){for(d=e[l];l<o&&(s=i[l],(r=mr(s))!==void 0);)d+=r+e[++l],u=!0;l!==o&&c.push(s),n.push(d),l++}if(l===o&&n.push(e[o]),u){const p=n.join("$$lit$$");(e=Si.get(p))===void 0&&(n.raw=n,Si.set(p,e=n)),i=c}return t(e,...i)},ae=br($);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=t=>t??O;var F=class extends M{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?ue`a`:ue`button`;return ae`
      <${e}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${k(t?void 0:this.disabled)}
        type=${k(t?void 0:"button")}
        href=${k(t?this.href:void 0)}
        target=${k(t?this.target:void 0)}
        download=${k(t?this.download:void 0)}
        rel=${k(t&&this.target?"noreferrer noopener":void 0)}
        role=${k(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${k(this.name)}
          library=${k(this.library)}
          src=${k(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[Y,fr];F.dependencies={"sl-icon":N};a([H(".icon-button")],F.prototype,"button",2);a([B()],F.prototype,"hasFocus",2);a([h()],F.prototype,"name",2);a([h()],F.prototype,"library",2);a([h()],F.prototype,"src",2);a([h()],F.prototype,"href",2);a([h()],F.prototype,"target",2);a([h()],F.prototype,"download",2);a([h()],F.prototype,"label",2);a([h({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var ji=new Map,gr=new WeakMap;function vr(t){return t??{keyframes:[],options:{duration:0}}}function Ai(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function _e(t,e){ji.set(t,vr(e))}function he(t,e,i){const o=gr.get(t);if(o!=null&&o[e])return Ai(o[e],i.dir);const r=ji.get(e);return r?Ai(r,i.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function fe(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,we(Ot({},i),{duration:yr()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function yr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function me(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const Ue=new Set,Rt=new Map;let St,ti="ltr",ei="en";const qi=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qi){const t=new MutationObserver(Ki);ti=document.documentElement.dir||"ltr",ei=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Wi(...t){t.map(e=>{const i=e.$code.toLowerCase();Rt.has(i)?Rt.set(i,Object.assign(Object.assign({},Rt.get(i)),e)):Rt.set(i,e),St||(St=e)}),Ki()}function Ki(){qi&&(ti=document.documentElement.dir||"ltr",ei=document.documentElement.lang||navigator.language),[...Ue.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let wr=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ue.add(this.host)}hostDisconnected(){Ue.delete(this.host)}dir(){return`${this.host.dir||ti}`.toLowerCase()}lang(){return`${this.host.lang||ei}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",c=Rt.get(`${s}-${n}`),d=Rt.get(s);return{locale:r,language:s,region:n,primary:c,secondary:d}}exists(e,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||s&&s[e]||i.includeFallback&&St&&St[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else if(St&&St[e])s=St[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...i):s}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Yi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Wi(Yi);var _r=Yi,xt=class extends wr{};Wi(_r);var xr=P`
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
`,q=class Ct extends M{constructor(){super(...arguments),this.hasSlotController=new Vt(this,"icon","suffix"),this.localize=new xt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",o="0";this.countdownAnimation=e.animate([{width:i},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await me(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=he(this,"alert.show",{dir:this.localize.dir()});await fe(this.base,e,i),this.emit("sl-after-show")}else{pr(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await me(this.base);const{keyframes:e,options:i}=he(this,"alert.hide",{dir:this.localize.dir()});await fe(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pe(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Ct.toastStack.parentElement===null&&document.body.append(Ct.toastStack),Ct.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ct.toastStack.removeChild(this),e(),Ct.toastStack.querySelector("sl-alert")===null&&Ct.toastStack.remove()},{once:!0})})}render(){return $`
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

        ${this.closable?$`
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

        ${this.countdown?$`
              <div
                class=${V({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};q.styles=[Y,xr];q.dependencies={"sl-icon-button":F};a([H('[part~="base"]')],q.prototype,"base",2);a([H(".alert__countdown-elapsed")],q.prototype,"countdownElement",2);a([h({type:Boolean,reflect:!0})],q.prototype,"open",2);a([h({type:Boolean,reflect:!0})],q.prototype,"closable",2);a([h({reflect:!0})],q.prototype,"variant",2);a([h({type:Number})],q.prototype,"duration",2);a([h({type:String,reflect:!0})],q.prototype,"countdown",2);a([B()],q.prototype,"remainingTime",2);a([D("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);a([D("duration")],q.prototype,"handleDurationChange",1);var kr=q;_e("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});_e("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});kr.define("sl-alert");var $r=P`
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
`,Xi=class extends M{constructor(){super(...arguments),this.localize=new xt(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Xi.styles=[Y,$r];var Wt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,Be=new WeakSet,re=new WeakMap,xe=class{constructor(t,e){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(c=>{i.formData.append(r,c.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Wt.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),re.set(this.host,[])},this.handleInteraction=i=>{const o=re.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ot({form:i=>{const o=i.form;if(o){const s=i.getRootNode().querySelector(`#${o}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),re.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),re.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Wt.has(this.form)?Wt.get(this.form).add(this.host):Wt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Yt.has(this.form)||(Yt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Wt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form)),Yt.has(this.form)&&(this.form.checkValidity=Yt.get(this.form),Yt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Be.add(t):Be.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Be.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},ii=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(we(Ot({},ii),{valid:!1,valueMissing:!0}));Object.freeze(we(Ot({},ii),{valid:!1,customError:!0}));var Cr=P`
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
`,S=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Vt(this,"[default]","prefix","suffix"),this.localize=new xt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ii}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?ue`a`:ue`button`;return ae`
      <${e}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${k(t?void 0:this.disabled)}
        type=${k(t?void 0:this.type)}
        title=${this.title}
        name=${k(t?void 0:this.name)}
        value=${k(t?void 0:this.value)}
        href=${k(t&&!this.disabled?this.href:void 0)}
        target=${k(t?this.target:void 0)}
        download=${k(t?this.download:void 0)}
        rel=${k(t?this.rel:void 0)}
        role=${k(t?void 0:"button")}
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
    `}};S.styles=[Y,Cr];S.dependencies={"sl-icon":N,"sl-spinner":Xi};a([H(".button")],S.prototype,"button",2);a([B()],S.prototype,"hasFocus",2);a([B()],S.prototype,"invalid",2);a([h()],S.prototype,"title",2);a([h({reflect:!0})],S.prototype,"variant",2);a([h({reflect:!0})],S.prototype,"size",2);a([h({type:Boolean,reflect:!0})],S.prototype,"caret",2);a([h({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],S.prototype,"loading",2);a([h({type:Boolean,reflect:!0})],S.prototype,"outline",2);a([h({type:Boolean,reflect:!0})],S.prototype,"pill",2);a([h({type:Boolean,reflect:!0})],S.prototype,"circle",2);a([h()],S.prototype,"type",2);a([h()],S.prototype,"name",2);a([h()],S.prototype,"value",2);a([h()],S.prototype,"href",2);a([h()],S.prototype,"target",2);a([h()],S.prototype,"rel",2);a([h()],S.prototype,"download",2);a([h()],S.prototype,"form",2);a([h({attribute:"formaction"})],S.prototype,"formAction",2);a([h({attribute:"formenctype"})],S.prototype,"formEnctype",2);a([h({attribute:"formmethod"})],S.prototype,"formMethod",2);a([h({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);a([h({attribute:"formtarget"})],S.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");var Sr=P`
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
`,Zi=(t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,c){var d;const l=o.getPropertyOptions(t),u=typeof l.attribute=="string"?l.attribute:t;if(s===u){const p=l.converter||Mt,f=(typeof p=="function"?p:(d=p==null?void 0:p.fromAttribute)!=null?d:Mt.fromAttribute)(c,l.type);this[t]!==f&&(this[i]=f)}r.call(this,s,n,c)}},oi=P`
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
 */const Gi=Je(class extends Qe{constructor(t){if(super(t),t.type!==mt.PROPERTY&&t.type!==mt.ATTRIBUTE&&t.type!==mt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===K||e===O)return e;const i=t.element,o=t.name;if(t.type===mt.PROPERTY){if(e===i[o])return K}else if(t.type===mt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return K}else if(t.type===mt.ATTRIBUTE&&i.getAttribute(o)===e+"")return K;return hr(t),e}});var I=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return $`
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
            value=${k(this.value)}
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
    `}};I.styles=[Y,oi,Sr];a([H('input[type="checkbox"]')],I.prototype,"input",2);a([B()],I.prototype,"hasFocus",2);a([h()],I.prototype,"title",2);a([h()],I.prototype,"name",2);a([h()],I.prototype,"value",2);a([h({reflect:!0})],I.prototype,"size",2);a([h({type:Boolean,reflect:!0})],I.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],I.prototype,"checked",2);a([Zi("checked")],I.prototype,"defaultChecked",2);a([h({reflect:!0})],I.prototype,"form",2);a([h({type:Boolean,reflect:!0})],I.prototype,"required",2);a([h({attribute:"help-text"})],I.prototype,"helpText",2);a([D("checked",{waitUntilFirstUpdate:!0})],I.prototype,"handleCheckedChange",1);a([D("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);I.define("sl-switch");var Ar=P`
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
`,Pt=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${V({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
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
    `}};Pt.styles=[Y,Ar];Pt.dependencies={"sl-icon-button":F};a([h({reflect:!0})],Pt.prototype,"variant",2);a([h({reflect:!0})],Pt.prototype,"size",2);a([h({type:Boolean,reflect:!0})],Pt.prototype,"pill",2);a([h({type:Boolean})],Pt.prototype,"removable",2);var Er=P`
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
`;function zr(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Tr(t,e,i="vertical",o="smooth"){const r=zr(t,e),s=r.top+e.scrollTop,n=r.left+e.scrollLeft,c=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,l=e.scrollTop,u=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<c?e.scrollTo({left:n,behavior:o}):n+t.clientWidth>d&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(s<l?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>u&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var Or=P`
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
`;const yt=Math.min,U=Math.max,be=Math.round,se=Math.floor,st=t=>({x:t,y:t}),Pr={left:"right",right:"left",bottom:"top",top:"bottom"},Lr={start:"end",end:"start"};function je(t,e,i){return U(t,yt(e,i))}function Ft(t,e){return typeof t=="function"?t(e):t}function wt(t){return t.split("-")[0]}function Ht(t){return t.split("-")[1]}function Ji(t){return t==="x"?"y":"x"}function ri(t){return t==="y"?"height":"width"}function vt(t){return["top","bottom"].includes(wt(t))?"y":"x"}function si(t){return Ji(vt(t))}function Rr(t,e,i){i===void 0&&(i=!1);const o=Ht(t),r=si(t),s=ri(r);let n=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=ge(n)),[n,ge(n)]}function Br(t){const e=ge(t);return[qe(t),e,qe(e)]}function qe(t){return t.replace(/start|end/g,e=>Lr[e])}function Mr(t,e,i){const o=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?s:n;default:return[]}}function Dr(t,e,i,o){const r=Ht(t);let s=Mr(wt(t),i==="start",o);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map(qe)))),s}function ge(t){return t.replace(/left|right|bottom|top/g,e=>Pr[e])}function Ir(t){return{top:0,right:0,bottom:0,left:0,...t}}function Qi(t){return typeof t!="number"?Ir(t):{top:t,right:t,bottom:t,left:t}}function ve(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function Ei(t,e,i){let{reference:o,floating:r}=t;const s=vt(e),n=si(e),c=ri(n),d=wt(e),l=s==="y",u=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2,m=o[c]/2-r[c]/2;let f;switch(d){case"top":f={x:u,y:o.y-r.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:p};break;case"left":f={x:o.x-r.width,y:p};break;default:f={x:o.x,y:o.y}}switch(Ht(e)){case"start":f[n]-=m*(i&&l?-1:1);break;case"end":f[n]+=m*(i&&l?-1:1);break}return f}const Vr=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:n}=i,c=s.filter(Boolean),d=await(n.isRTL==null?void 0:n.isRTL(e));let l=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Ei(l,o,d),m=o,f={},b=0;for(let g=0;g<c.length;g++){const{name:y,fn:w}=c[g],{x:C,y:E,data:L,reset:T}=await w({x:u,y:p,initialPlacement:o,placement:m,strategy:r,middlewareData:f,rects:l,platform:n,elements:{reference:t,floating:e}});u=C??u,p=E??p,f={...f,[y]:{...f[y],...L}},T&&b<=50&&(b++,typeof T=="object"&&(T.placement&&(m=T.placement),T.rects&&(l=T.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):T.rects),{x:u,y:p}=Ei(l,m,d)),g=-1)}return{x:u,y:p,placement:m,strategy:r,middlewareData:f}};async function ni(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:n,elements:c,strategy:d}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:m=!1,padding:f=0}=Ft(e,t),b=Qi(f),y=c[m?p==="floating"?"reference":"floating":p],w=ve(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(y)))==null||i?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:d})),C=p==="floating"?{x:o,y:r,width:n.floating.width,height:n.floating.height}:n.reference,E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),L=await(s.isElement==null?void 0:s.isElement(E))?await(s.getScale==null?void 0:s.getScale(E))||{x:1,y:1}:{x:1,y:1},T=ve(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:E,strategy:d}):C);return{top:(w.top-T.top+b.top)/L.y,bottom:(T.bottom-w.bottom+b.bottom)/L.y,left:(w.left-T.left+b.left)/L.x,right:(T.right-w.right+b.right)/L.x}}const Fr=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:s,platform:n,elements:c,middlewareData:d}=e,{element:l,padding:u=0}=Ft(t,e)||{};if(l==null)return{};const p=Qi(u),m={x:i,y:o},f=si(r),b=ri(f),g=await n.getDimensions(l),y=f==="y",w=y?"top":"left",C=y?"bottom":"right",E=y?"clientHeight":"clientWidth",L=s.reference[b]+s.reference[f]-m[f]-s.floating[b],T=m[f]-s.reference[f],Z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l));let R=Z?Z[E]:0;(!R||!await(n.isElement==null?void 0:n.isElement(Z)))&&(R=c.floating[E]||s.floating[b]);const at=L/2-T/2,tt=R/2-g[b]/2-1,W=yt(p[w],tt),dt=yt(p[C],tt),et=W,ut=R-g[b]-dt,it=R/2-g[b]/2+at,G=je(et,it,ut),kt=!d.arrow&&Ht(r)!=null&&it!==G&&s.reference[b]/2-(it<et?W:dt)-g[b]/2<0,ct=kt?it<et?it-et:it-ut:0;return{[f]:m[f]+ct,data:{[f]:G,centerOffset:it-G-ct,...kt&&{alignmentOffset:ct}},reset:kt}}}),Hr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:s,rects:n,initialPlacement:c,platform:d,elements:l}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...y}=Ft(t,e);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const w=wt(r),C=vt(c),E=wt(c)===c,L=await(d.isRTL==null?void 0:d.isRTL(l.floating)),T=m||(E||!g?[ge(c)]:Br(c)),Z=b!=="none";!m&&Z&&T.push(...Dr(c,g,b,L));const R=[c,...T],at=await ni(e,y),tt=[];let W=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&tt.push(at[w]),p){const G=Rr(r,n,L);tt.push(at[G[0]],at[G[1]])}if(W=[...W,{placement:r,overflows:tt}],!tt.every(G=>G<=0)){var dt,et;const G=(((dt=s.flip)==null?void 0:dt.index)||0)+1,kt=R[G];if(kt){var ut;const ht=p==="alignment"?C!==vt(kt):!1,ot=((ut=W[0])==null?void 0:ut.overflows[0])>0;if(!ht||ot)return{data:{index:G,overflows:W},reset:{placement:kt}}}let ct=(et=W.filter(ht=>ht.overflows[0]<=0).sort((ht,ot)=>ht.overflows[1]-ot.overflows[1])[0])==null?void 0:et.placement;if(!ct)switch(f){case"bestFit":{var it;const ht=(it=W.filter(ot=>{if(Z){const pt=vt(ot.placement);return pt===C||pt==="y"}return!0}).map(ot=>[ot.placement,ot.overflows.filter(pt=>pt>0).reduce((pt,fo)=>pt+fo,0)]).sort((ot,pt)=>ot[1]-pt[1])[0])==null?void 0:it[0];ht&&(ct=ht);break}case"initialPlacement":ct=c;break}if(r!==ct)return{reset:{placement:ct}}}return{}}}};async function Nr(t,e){const{placement:i,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),n=wt(i),c=Ht(i),d=vt(i)==="y",l=["left","top"].includes(n)?-1:1,u=s&&d?-1:1,p=Ft(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof b=="number"&&(f=c==="end"?b*-1:b),d?{x:f*u,y:m*l}:{x:m*l,y:f*u}}const Ur=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:s,placement:n,middlewareData:c}=e,d=await Nr(e,t);return n===((i=c.offset)==null?void 0:i.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+d.x,y:s+d.y,data:{...d,placement:n}}}}},jr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:c={fn:y=>{let{x:w,y:C}=y;return{x:w,y:C}}},...d}=Ft(t,e),l={x:i,y:o},u=await ni(e,d),p=vt(wt(r)),m=Ji(p);let f=l[m],b=l[p];if(s){const y=m==="y"?"top":"left",w=m==="y"?"bottom":"right",C=f+u[y],E=f-u[w];f=je(C,f,E)}if(n){const y=p==="y"?"top":"left",w=p==="y"?"bottom":"right",C=b+u[y],E=b-u[w];b=je(C,b,E)}const g=c.fn({...e,[m]:f,[p]:b});return{...g,data:{x:g.x-i,y:g.y-o,enabled:{[m]:s,[p]:n}}}}}},qr=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:s,platform:n,elements:c}=e,{apply:d=()=>{},...l}=Ft(t,e),u=await ni(e,l),p=wt(r),m=Ht(r),f=vt(r)==="y",{width:b,height:g}=s.floating;let y,w;p==="top"||p==="bottom"?(y=p,w=m===(await(n.isRTL==null?void 0:n.isRTL(c.floating))?"start":"end")?"left":"right"):(w=p,y=m==="end"?"top":"bottom");const C=g-u.top-u.bottom,E=b-u.left-u.right,L=yt(g-u[y],C),T=yt(b-u[w],E),Z=!e.middlewareData.shift;let R=L,at=T;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(at=E),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(R=C),Z&&!m){const W=U(u.left,0),dt=U(u.right,0),et=U(u.top,0),ut=U(u.bottom,0);f?at=b-2*(W!==0||dt!==0?W+dt:U(u.left,u.right)):R=g-2*(et!==0||ut!==0?et+ut:U(u.top,u.bottom))}await d({...e,availableWidth:at,availableHeight:R});const tt=await n.getDimensions(c.floating);return b!==tt.width||g!==tt.height?{reset:{rects:!0}}:{}}}};function ke(){return typeof window<"u"}function Nt(t){return to(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function lt(t){var e;return(e=(to(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function to(t){return ke()?t instanceof Node||t instanceof j(t).Node:!1}function J(t){return ke()?t instanceof Element||t instanceof j(t).Element:!1}function nt(t){return ke()?t instanceof HTMLElement||t instanceof j(t).HTMLElement:!1}function zi(t){return!ke()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function ie(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=Q(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Wr(t){return["table","td","th"].includes(Nt(t))}function $e(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ce(t){const e=li(),i=J(t)?Q(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Kr(t){let e=_t(t);for(;nt(e)&&!It(e);){if(Ce(e))return e;if($e(e))return null;e=_t(e)}return null}function li(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function It(t){return["html","body","#document"].includes(Nt(t))}function Q(t){return j(t).getComputedStyle(t)}function Se(t){return J(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _t(t){if(Nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zi(t)&&t.host||lt(t);return zi(e)?e.host:e}function eo(t){const e=_t(t);return It(e)?t.ownerDocument?t.ownerDocument.body:t.body:nt(e)&&ie(e)?e:eo(e)}function te(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=eo(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),n=j(r);if(s){const c=We(n);return e.concat(n,n.visualViewport||[],ie(r)?r:[],c&&i?te(c):[])}return e.concat(r,te(r,[],i))}function We(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function io(t){const e=Q(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=nt(t),s=r?t.offsetWidth:i,n=r?t.offsetHeight:o,c=be(i)!==s||be(o)!==n;return c&&(i=s,o=n),{width:i,height:o,$:c}}function ai(t){return J(t)?t:t.contextElement}function Bt(t){const e=ai(t);if(!nt(e))return st(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:s}=io(e);let n=(s?be(i.width):i.width)/o,c=(s?be(i.height):i.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const Yr=st(0);function oo(t){const e=j(t);return!li()||!e.visualViewport?Yr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xr(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==j(t)?!1:e}function Tt(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),s=ai(t);let n=st(1);e&&(o?J(o)&&(n=Bt(o)):n=Bt(t));const c=Xr(s,i,o)?oo(s):st(0);let d=(r.left+c.x)/n.x,l=(r.top+c.y)/n.y,u=r.width/n.x,p=r.height/n.y;if(s){const m=j(s),f=o&&J(o)?j(o):o;let b=m,g=We(b);for(;g&&o&&f!==b;){const y=Bt(g),w=g.getBoundingClientRect(),C=Q(g),E=w.left+(g.clientLeft+parseFloat(C.paddingLeft))*y.x,L=w.top+(g.clientTop+parseFloat(C.paddingTop))*y.y;d*=y.x,l*=y.y,u*=y.x,p*=y.y,d+=E,l+=L,b=j(g),g=We(b)}}return ve({width:u,height:p,x:d,y:l})}function ci(t,e){const i=Se(t).scrollLeft;return e?e.left+i:Tt(lt(t)).left+i}function ro(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(i?0:ci(t,o)),s=o.top+e.scrollTop;return{x:r,y:s}}function Zr(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const s=r==="fixed",n=lt(o),c=e?$e(e.floating):!1;if(o===n||c&&s)return i;let d={scrollLeft:0,scrollTop:0},l=st(1);const u=st(0),p=nt(o);if((p||!p&&!s)&&((Nt(o)!=="body"||ie(n))&&(d=Se(o)),nt(o))){const f=Tt(o);l=Bt(o),u.x=f.x+o.clientLeft,u.y=f.y+o.clientTop}const m=n&&!p&&!s?ro(n,d,!0):st(0);return{width:i.width*l.x,height:i.height*l.y,x:i.x*l.x-d.scrollLeft*l.x+u.x+m.x,y:i.y*l.y-d.scrollTop*l.y+u.y+m.y}}function Gr(t){return Array.from(t.getClientRects())}function Jr(t){const e=lt(t),i=Se(t),o=t.ownerDocument.body,r=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-i.scrollLeft+ci(t);const c=-i.scrollTop;return Q(o).direction==="rtl"&&(n+=U(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:n,y:c}}function Qr(t,e){const i=j(t),o=lt(t),r=i.visualViewport;let s=o.clientWidth,n=o.clientHeight,c=0,d=0;if(r){s=r.width,n=r.height;const l=li();(!l||l&&e==="fixed")&&(c=r.offsetLeft,d=r.offsetTop)}return{width:s,height:n,x:c,y:d}}function ts(t,e){const i=Tt(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=nt(t)?Bt(t):st(1),n=t.clientWidth*s.x,c=t.clientHeight*s.y,d=r*s.x,l=o*s.y;return{width:n,height:c,x:d,y:l}}function Ti(t,e,i){let o;if(e==="viewport")o=Qr(t,i);else if(e==="document")o=Jr(lt(t));else if(J(e))o=ts(e,i);else{const r=oo(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return ve(o)}function so(t,e){const i=_t(t);return i===e||!J(i)||It(i)?!1:Q(i).position==="fixed"||so(i,e)}function es(t,e){const i=e.get(t);if(i)return i;let o=te(t,[],!1).filter(c=>J(c)&&Nt(c)!=="body"),r=null;const s=Q(t).position==="fixed";let n=s?_t(t):t;for(;J(n)&&!It(n);){const c=Q(n),d=Ce(n);!d&&c.position==="fixed"&&(r=null),(s?!d&&!r:!d&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ie(n)&&!d&&so(t,n))?o=o.filter(u=>u!==n):r=c,n=_t(n)}return e.set(t,o),o}function is(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const n=[...i==="clippingAncestors"?$e(e)?[]:es(e,this._c):[].concat(i),o],c=n[0],d=n.reduce((l,u)=>{const p=Ti(e,u,r);return l.top=U(p.top,l.top),l.right=yt(p.right,l.right),l.bottom=yt(p.bottom,l.bottom),l.left=U(p.left,l.left),l},Ti(e,c,r));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function os(t){const{width:e,height:i}=io(t);return{width:e,height:i}}function rs(t,e,i){const o=nt(e),r=lt(e),s=i==="fixed",n=Tt(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const d=st(0);function l(){d.x=ci(r)}if(o||!o&&!s)if((Nt(e)!=="body"||ie(r))&&(c=Se(e)),o){const f=Tt(e,!0,s,e);d.x=f.x+e.clientLeft,d.y=f.y+e.clientTop}else r&&l();s&&!o&&r&&l();const u=r&&!o&&!s?ro(r,c):st(0),p=n.left+c.scrollLeft-d.x-u.x,m=n.top+c.scrollTop-d.y-u.y;return{x:p,y:m,width:n.width,height:n.height}}function Me(t){return Q(t).position==="static"}function Oi(t,e){if(!nt(t)||Q(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return lt(t)===i&&(i=i.ownerDocument.body),i}function no(t,e){const i=j(t);if($e(t))return i;if(!nt(t)){let r=_t(t);for(;r&&!It(r);){if(J(r)&&!Me(r))return r;r=_t(r)}return i}let o=Oi(t,e);for(;o&&Wr(o)&&Me(o);)o=Oi(o,e);return o&&It(o)&&Me(o)&&!Ce(o)?i:o||Kr(t)||i}const ss=async function(t){const e=this.getOffsetParent||no,i=this.getDimensions,o=await i(t.floating);return{reference:rs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ns(t){return Q(t).direction==="rtl"}const ce={convertOffsetParentRelativeRectToViewportRelativeRect:Zr,getDocumentElement:lt,getClippingRect:is,getOffsetParent:no,getElementRects:ss,getClientRects:Gr,getDimensions:os,getScale:Bt,isElement:J,isRTL:ns};function lo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ls(t,e){let i=null,o;const r=lt(t);function s(){var c;clearTimeout(o),(c=i)==null||c.disconnect(),i=null}function n(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),s();const l=t.getBoundingClientRect(),{left:u,top:p,width:m,height:f}=l;if(c||e(),!m||!f)return;const b=se(p),g=se(r.clientWidth-(u+m)),y=se(r.clientHeight-(p+f)),w=se(u),E={rootMargin:-b+"px "+-g+"px "+-y+"px "+-w+"px",threshold:U(0,yt(1,d))||1};let L=!0;function T(Z){const R=Z[0].intersectionRatio;if(R!==d){if(!L)return n();R?n(!1,R):o=setTimeout(()=>{n(!1,1e-7)},1e3)}R===1&&!lo(l,t.getBoundingClientRect())&&n(),L=!1}try{i=new IntersectionObserver(T,{...E,root:r.ownerDocument})}catch{i=new IntersectionObserver(T,E)}i.observe(t)}return n(!0),s}function as(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,l=ai(t),u=r||s?[...l?te(l):[],...te(e)]:[];u.forEach(w=>{r&&w.addEventListener("scroll",i,{passive:!0}),s&&w.addEventListener("resize",i)});const p=l&&c?ls(l,i):null;let m=-1,f=null;n&&(f=new ResizeObserver(w=>{let[C]=w;C&&C.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var E;(E=f)==null||E.observe(e)})),i()}),l&&!d&&f.observe(l),f.observe(e));let b,g=d?Tt(t):null;d&&y();function y(){const w=Tt(t);g&&!lo(g,w)&&i(),g=w,b=requestAnimationFrame(y)}return i(),()=>{var w;u.forEach(C=>{r&&C.removeEventListener("scroll",i),s&&C.removeEventListener("resize",i)}),p==null||p(),(w=f)==null||w.disconnect(),f=null,d&&cancelAnimationFrame(b)}}const cs=Ur,ds=jr,us=Hr,Pi=qr,hs=Fr,ps=(t,e,i)=>{const o=new Map,r={platform:ce,...i},s={...r.platform,_c:o};return Vr(t,e,{...r,platform:s})};function fs(t){return ms(t)}function De(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ms(t){for(let e=t;e;e=De(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=De(t);e;e=De(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Ce(i)||e.tagName==="BODY"))return e}return null}function bs(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var z=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,s=0,n=0,c=0,d=0,l=0,u=0;i?t.top<e.top?(o=t.left,r=t.bottom,s=t.right,n=t.bottom,c=e.left,d=e.top,l=e.right,u=e.top):(o=e.left,r=e.bottom,s=e.right,n=e.bottom,c=t.left,d=t.top,l=t.right,u=t.top):t.left<e.left?(o=t.right,r=t.top,s=e.left,n=e.top,c=t.right,d=t.bottom,l=e.left,u=e.bottom):(o=e.right,r=e.top,s=t.left,n=t.top,c=e.right,d=e.bottom,l=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||bs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=as(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[cs({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Pi({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(us({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ds({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Pi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(hs({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>ce.getOffsetParent(i,fs):ce.getOffsetParent;ps(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:we(Ot({},ce),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:s})=>{const n=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const d=r.arrow.x,l=r.arrow.y;let u="",p="",m="",f="";if(this.arrowPlacement==="start"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?b:"",f=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":b,f=n?b:"",m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof d=="number"?`${d}px`:"",u=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:u,right:p,bottom:m,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
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
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};z.styles=[Y,Or];a([H(".popup")],z.prototype,"popup",2);a([H(".popup__arrow")],z.prototype,"arrowEl",2);a([h()],z.prototype,"anchor",2);a([h({type:Boolean,reflect:!0})],z.prototype,"active",2);a([h({reflect:!0})],z.prototype,"placement",2);a([h({reflect:!0})],z.prototype,"strategy",2);a([h({type:Number})],z.prototype,"distance",2);a([h({type:Number})],z.prototype,"skidding",2);a([h({type:Boolean})],z.prototype,"arrow",2);a([h({attribute:"arrow-placement"})],z.prototype,"arrowPlacement",2);a([h({attribute:"arrow-padding",type:Number})],z.prototype,"arrowPadding",2);a([h({type:Boolean})],z.prototype,"flip",2);a([h({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],z.prototype,"flipFallbackPlacements",2);a([h({attribute:"flip-fallback-strategy"})],z.prototype,"flipFallbackStrategy",2);a([h({type:Object})],z.prototype,"flipBoundary",2);a([h({attribute:"flip-padding",type:Number})],z.prototype,"flipPadding",2);a([h({type:Boolean})],z.prototype,"shift",2);a([h({type:Object})],z.prototype,"shiftBoundary",2);a([h({attribute:"shift-padding",type:Number})],z.prototype,"shiftPadding",2);a([h({attribute:"auto-size"})],z.prototype,"autoSize",2);a([h()],z.prototype,"sync",2);a([h({type:Object})],z.prototype,"autoSizeBoundary",2);a([h({attribute:"auto-size-padding",type:Number})],z.prototype,"autoSizePadding",2);a([h({attribute:"hover-bridge",type:Boolean})],z.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ke extends Qe{constructor(e){if(super(e),this.it=O,e.type!==mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===O||e==null)return this._t=void 0,this.it=e;if(e===K)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Ke.directiveName="unsafeHTML",Ke.resultType=1;const gs=Je(Ke);var x=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Vt(this,"help-text","label"),this.localize=new xt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>$`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,o=e.closest("sl-icon-button")!==null;if(!(i||o)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),o=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(r=>o.push(r.value)),this.setSelectedOptions(t.filter(r=>i.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(o=>o.selected=!1),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const o=this.getAllOptions();this.selectedOptions=o.filter(s=>s.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=(t=s==null?void 0:s.value)!=null?t:"",this.displayLabel=(i=(e=s==null?void 0:s.getTextLabel)==null?void 0:e.call(s))!=null?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return $`<div @sl-remove=${o=>this.handleTagRemove(o,t)}>
          ${typeof i=="string"?gs(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return $``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await me(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=he(this,"select.show",{dir:this.localize.dir()});await fe(this.popup.popup,t,e),this.currentOption&&Tr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await me(this);const{keyframes:t,options:e}=he(this,"select.hide",{dir:this.localize.dir()});await fe(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,pe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,pe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return $`
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
            class=${V({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${r?$`
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
    `}};x.styles=[Y,oi,Er];x.dependencies={"sl-icon":N,"sl-popup":z,"sl-tag":Pt};a([H(".select")],x.prototype,"popup",2);a([H(".select__combobox")],x.prototype,"combobox",2);a([H(".select__display-input")],x.prototype,"displayInput",2);a([H(".select__value-input")],x.prototype,"valueInput",2);a([H(".select__listbox")],x.prototype,"listbox",2);a([B()],x.prototype,"hasFocus",2);a([B()],x.prototype,"displayLabel",2);a([B()],x.prototype,"currentOption",2);a([B()],x.prototype,"selectedOptions",2);a([B()],x.prototype,"valueHasChanged",2);a([h()],x.prototype,"name",2);a([B()],x.prototype,"value",1);a([h({attribute:"value"})],x.prototype,"defaultValue",2);a([h({reflect:!0})],x.prototype,"size",2);a([h()],x.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],x.prototype,"multiple",2);a([h({attribute:"max-options-visible",type:Number})],x.prototype,"maxOptionsVisible",2);a([h({type:Boolean,reflect:!0})],x.prototype,"disabled",2);a([h({type:Boolean})],x.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],x.prototype,"open",2);a([h({type:Boolean})],x.prototype,"hoist",2);a([h({type:Boolean,reflect:!0})],x.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],x.prototype,"pill",2);a([h()],x.prototype,"label",2);a([h({reflect:!0})],x.prototype,"placement",2);a([h({attribute:"help-text"})],x.prototype,"helpText",2);a([h({reflect:!0})],x.prototype,"form",2);a([h({type:Boolean,reflect:!0})],x.prototype,"required",2);a([h()],x.prototype,"getTag",2);a([D("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);a([D(["defaultValue","value"],{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1);a([D("open",{waitUntilFirstUpdate:!0})],x.prototype,"handleOpenChange",1);_e("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});_e("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});x.define("sl-select");var vs=P`
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
`,X=class extends M{constructor(){super(...arguments),this.localize=new xt(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return $`
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
    `}};X.styles=[Y,vs];X.dependencies={"sl-icon":N};a([H(".option__label")],X.prototype,"defaultSlot",2);a([B()],X.prototype,"current",2);a([B()],X.prototype,"selected",2);a([B()],X.prototype,"hasHover",2);a([h({reflect:!0})],X.prototype,"value",2);a([h({type:Boolean,reflect:!0})],X.prototype,"disabled",2);a([D("disabled")],X.prototype,"handleDisabledChange",1);a([D("selected")],X.prototype,"handleSelectedChange",1);a([D("value")],X.prototype,"handleValueChange",1);X.define("sl-option");var ys=P`
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
`,v=class extends M{constructor(){super(...arguments),this.formControlController=new xe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Vt(this,"help-text","label"),this.localize=new xt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=e??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
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
              name=${k(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              min=${k(this.min)}
              max=${k(this.max)}
              step=${k(this.step)}
              .value=${Gi(this.value)}
              autocapitalize=${k(this.autocapitalize)}
              autocomplete=${k(this.autocomplete)}
              autocorrect=${k(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${k(this.pattern)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?$`
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
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
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
    `}};v.styles=[Y,oi,ys];v.dependencies={"sl-icon":N};a([H(".input__control")],v.prototype,"input",2);a([B()],v.prototype,"hasFocus",2);a([h()],v.prototype,"title",2);a([h({reflect:!0})],v.prototype,"type",2);a([h()],v.prototype,"name",2);a([h()],v.prototype,"value",2);a([Zi()],v.prototype,"defaultValue",2);a([h({reflect:!0})],v.prototype,"size",2);a([h({type:Boolean,reflect:!0})],v.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],v.prototype,"pill",2);a([h()],v.prototype,"label",2);a([h({attribute:"help-text"})],v.prototype,"helpText",2);a([h({type:Boolean})],v.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],v.prototype,"disabled",2);a([h()],v.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],v.prototype,"readonly",2);a([h({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);a([h({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);a([h({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);a([h({reflect:!0})],v.prototype,"form",2);a([h({type:Boolean,reflect:!0})],v.prototype,"required",2);a([h()],v.prototype,"pattern",2);a([h({type:Number})],v.prototype,"minlength",2);a([h({type:Number})],v.prototype,"maxlength",2);a([h()],v.prototype,"min",2);a([h()],v.prototype,"max",2);a([h()],v.prototype,"step",2);a([h()],v.prototype,"autocapitalize",2);a([h()],v.prototype,"autocorrect",2);a([h()],v.prototype,"autocomplete",2);a([h({type:Boolean})],v.prototype,"autofocus",2);a([h()],v.prototype,"enterkeyhint",2);a([h({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],v.prototype,"spellcheck",2);a([h()],v.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v.define("sl-input");class ao extends rt{constructor(){super();A(this,"_nextButton");this._distance=0,this._pr=0}static get properties(){return{distance:{type:Number,reflectToAttribute:!0,attribute:!0},pr:{type:Number,reflectToAttribute:!0,attribute:!0}}}set distance(i){let o=this._distance;this._distance=i,this.requestUpdate("distance",o)}get distance(){return this._distance}set pr(i){let o=this._pr;this._pr=i,this.requestUpdate("pr",o)}get pr(){return this._pr}firstUpdated(){this._nextButton=this.shadowRoot.querySelector("sl-button"),this._hoursPR=this.shadowRoot.querySelector("#hours-pr"),this._minutesPR=this.shadowRoot.querySelector("#minutes-pr"),this._secondsPR=this.shadowRoot.querySelector("#seconds-pr"),this._distanceSelect=this.shadowRoot.querySelector("#distance")}connectedCallback(){super.connectedCallback()}_moveToRace(){if(this._minutesPR.value>60||this._secondsPR.value>60||this._distanceSelect.value==="")return;this.shadowRoot.host.style.display="none",this.distance=this._distanceSelect.value,this.pr=this._calculatePRinMilliseconds(this._hoursPR.value,this._minutesPR.value,this._secondsPR.value);let i=new CustomEvent("distance-changed",{detail:{message:"distance changed",distance:this.distance},bubbles:!0,composed:!0});this.dispatchEvent(i),i=new CustomEvent("pr-changed",{detail:{message:"pr changed",pr:this.pr},bubbles:!0,composed:!0}),this.dispatchEvent(i)}_calculatePRinMilliseconds(i,o,r){return(Number(i)*3600+Number(o)*60+Number(r))*1e3}render(){return $`
            <div class="root">
                <div class="content">
                    <div class="content-item">
                        <div class="pr-panel-title">Select Distance:</div>
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
        `}}A(ao,"styles",P`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            background-color: black;
            width: 100%;
            height: 100%;
            --sl-color-primary-50: var(--sl-color-green-50);
            --sl-color-primary-100: var(--sl-color-green-100);
            --sl-color-primary-200: var(--sl-color-green-200);
            --sl-color-primary-300: var(--sl-color-green-300);
            --sl-color-primary-400: var(--sl-color-green-400);
            --sl-color-primary-500: var(--sl-color-green-500);
            --sl-color-primary-600: var(--sl-color-green-600);
            --sl-color-primary-700: var(--sl-color-green-700);
            --sl-color-primary-800: var(--sl-color-green-800);
            --sl-color-primary-900: var(--sl-color-green-900);
            --sl-color-primary-950: var(--sl-color-green-950);
            --sl-input-focus-ring-color: hsl(141.1 64.9% 43% / 40%);
            --sl-input-border-color-focus: var(--sl-color-green-600);
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
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
            width: 90%;
        }

        .pr-panel-title {
            font-size: 1.5rem;
            width: 90%;
        }

        #distance {
            width: 90%;
        }

        sl-input {
            width: 30%;
            margin: 2px;
        }

        sl-button {
            margin-left: 5px;
            margin-right: 5px;
        }
    `);customElements.define("setup-panel",ao);F.define("sl-icon-button");class co extends rt{constructor(){super();A(this,"_distance");A(this,"_pr");A(this,"_numberOfLapsLeft");A(this,"_timer");A(this,"_elapsedTimer");A(this,"_startButton");A(this,"_pauseButton");A(this,"_resetButton");A(this,"_lapButton");A(this,"_splits",[]);A(this,"_absoluteSplits",[]);A(this,"_elapsedTime");A(this,"_wakeLock");this._distance=0,this._pr=0,this._numberOfLapsLeft=0,this._timer=null,this._elapsedTime=0,this._absoluteSplits=[],this._wakeLock=null}static get properties(){return{distance:{type:Number,reflectToAttribute:!0,attribute:!0},pr:{type:Number,reflectToAttribute:!0,attribute:!0},splits:{type:Array,reflectToAttribute:!1,attribute:!0}}}set distance(i){let o=this._distance;this._distance=i,this._calculateNumberOfLaps(),this.requestUpdate("distance",o)}get distance(){return this._distance}set pr(i){let o=this._pr;this._pr=i,this.requestUpdate("pr",o)}get pr(){return this._pr}set splits(i){let o=this._splits;this._splits=i,this.requestUpdate("splits",o)}get splits(){return this._splits}firstUpdated(){this._elapsedTimer=this.shadowRoot.querySelector("#elapsedTimer"),this._startButton=this.shadowRoot.querySelector("#startButton"),this._pauseButton=this.shadowRoot.querySelector("#pauseButton"),this._resetButton=this.shadowRoot.querySelector("#resetButton"),this._lapButton=this.shadowRoot.querySelector("#lapButton"),this._projectedTime=this.shadowRoot.querySelector("#projected-time"),this._overallAhead=this.shadowRoot.querySelector("#overall-ahead")}connectedCallback(){super.connectedCallback()}_calculateNumberOfLaps(){this._numberOfLapsLeft=Math.round(this.distance/400)}async _startRace(){if(this._timer!=null){clearInterval(this._timer),this._timer=null,this._startButton.name="play-circle",this._startButton.label="start",this._lapButton.disabled=!0,this._wakeLock&&this._wakeLock.release().then(()=>{this._wakeLock=null});return}if(this._timer=setInterval(()=>this._updateTimerDisplay(),10),this._startButton.name="pause-circle",this._startButton.label="pause",this._resetButton.disabled=!1,this._lapButton.disabled=!1,"wakeLock"in navigator&&(console.log("wakeLock is supported"),this._wakeLock===null))try{this._wakeLock=await navigator.wakeLock.request("screen"),console.log("Wake Lock is active")}catch(i){console.log("Error while trying to request Wake Lock : "+i)}}resetRace(){clearInterval(this._timer),this._elapsedTime=0,this.splits=[],this._absoluteSplits=[],this._numberOfLapsLeft=Math.round(this.distance/400),this._elapsedTimer.innerHTML=" 00 : 00 : 00 : 00",this._lapButton.disabled=!0,this._projectedTime.innerHTML=" 00 : 00 : 00 : 00",this._overallAhead.innerHTML="Ahead: 00 : 00 : 00 : 00",this._startButton.name="play-circle",this._startButton.label="start",this._wakeLock&&this._wakeLock.release().then(()=>{this._wakeLock=null})}_updateTimerDisplay(){this._elapsedTime+=10,this._elapsedTimer.innerHTML=this._formatTime(this._elapsedTime)}_lap(){if(this._splits.length>=1){let i=this._elapsedTime-this._absoluteSplits[this._absoluteSplits.length-1];this.splits.push(i),this._absoluteSplits.push(this._elapsedTime)}else this.splits.push(this._elapsedTime),this._absoluteSplits.push(this._elapsedTime);this._numberOfLapsLeft--,this.requestUpdate(),this._calculateProjectedFinishTime(),this._numberOfLapsLeft===0&&(this._lapButton.disabled=!0,this._startRace())}_calculateProjectedFinishTime(){let i=0;this._splits.length===1&&this._distance==="1500"?i=this._elapsedTime+this._splits[0]*1.25*this._numberOfLapsLeft:this._splits.length===1&&this._distance==="3000"?i=this._elapsedTime+this._splits[0]*2*this._numberOfLapsLeft:i=this._elapsedTime+this._splits[this._splits.length-1]*this._numberOfLapsLeft;let o=this._formatTime(i);this._projectedTime.innerHTML=o;const r=i-this.pr;r<0?(this._overallAhead.style.color="#069a17",this._overallAhead.innerHTML="Ahead: "+this._formatTime(-r)):(this._overallAhead.style.color="#9a0606",this._overallAhead.innerHTML="Behind: "+this._formatTime(r))}_computePaceinKm(i){const o=this._splits[i];let r=.4;this._distance==="1500"&&i===0?r=.3:this._distance==="3000"&&i===0&&(r=.2);const n=o/(1e3*60)/r,c=Math.floor(n),d=(n-c)*60,l=Math.round(d),u=l<10?`0${l}`:`${l}`;return`${c}:${u} min/km`}_computePaceinMiles(i){const o=this._splits[i];let r;this._distance==="1500"&&i===0?r=300/1609.344:this._distance==="3000"&&i===0?r=200/1609.344:r=400/1609.344;const n=o/(1e3*60)/r,c=Math.floor(n),d=(n-c)*60,l=Math.round(d),u=l<10?`0${l}`:`${l}`;return`${c}:${u} min/mile`}_computePaceinMilesFromDistance(i,o){if(i===0||o===0)return"00:00 min/mile";const r=Number(i)/1609.344,n=o/(1e3*60)/r.toFixed(1),c=Math.floor(n),d=(n-c)*60,l=Math.round(d),u=l<10?`0${l}`:`${l}`;return`${c}:${u} min/mile`}_formatTime(i){let o=Math.floor(i/36e5),r=Math.floor(i%36e5/6e4),s=Math.floor(i%6e4/1e3),n=i%1e3;return n=n/10,`${o<10?"0"+o:o} : ${r<10?"0"+r:r} : ${s<10?"0"+s:s} : ${n<10?"0"+n:n<100?""+n:n}`}render(){return $`
            <div class="root">
                <div class="header">
                    Distance: ${this.distance}
                    <div class="current-pr">Current PR: ${this._formatTime(this.pr)}</div>
                    <div class="projected-pace">Average pace: ${this._computePaceinMilesFromDistance(this.distance,this.pr)}</div>
                </div>
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
                        <div class="overall-ahead" id="overall-ahead">Ahead: 00 : 00 : 00 : 00</div>
                    </div>
                </div>
                <div class="splits">
                    <div class="split-header">Splits</div>
                    <div class="split-list">
                        ${this.splits.map((i,o)=>$`
                            <div class="split">${++o} - ${this._formatTime(i)} - ${this._computePaceinMiles(--o)}</div>
                        `)}
                    </div>
                </div>
            </div>
        `}}A(co,"styles",P`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            width: 100vw;
            font-size: 1.5rem;
            height: 10vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }

        .split {
            margin-top: 5px;
            flex-basis: min-content;
        }

        .splits {
            width: 100vw;
            min-height: 20vh;
            border-top: solid 2px white;
            padding-left: 5px;
            padding-right: 5px;
            overflow-y: scroll;
        }

        .timer {
            width: 100%;
            font-size: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 45vh;
        }

        .rounded-time {
            border: solid 4px var(--sl-color-green-500);
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
            touch-action: manipulation;
            background-color: var(--sl-color-green-500);
            border: solid 1px var(--sl-color-green-200);
            color: white;
            border-radius: 10px;
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        #lapButton {
            touch-action: manipulation;
            background-color: var(--sl-color-teal-500);
            border: solid 1px var(--sl-color-teal-200);
            color: white;
            border-radius: 10px;
            width: 25%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            margin-right: 5px;
        }

        #resetButton {
            touch-action: manipulation;
            background-color: var(--sl-color-red-500);
            border: solid 1px var(--sl-color-red-200);
            color: white;
            border-radius: 10px;
            width: 25%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            margin-left: 5px;
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
            font-size: 1.3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 10vh;
            border-top: solid 2px white;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .current-pr {
            color: var(--sl-color-red-400);
            font-size: 1.2rem;
        }

        .projected-pace {
            color: var(--sl-color-green-600);
            font-size: 1.2rem;
        }

        .overall-ahead {
            width: 100%;
            font-size: 1.2rem;
            text-align: center;
        }

        .projected-header {
            margin-top: 5px;
        }

        .projected-legend {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            margin-top: 10px;
        }

        .split-header {
            font-size: 1.5rem;
            margin-top: 10px;
            margin-bottom: 10px;
            height: 10%;
        }

        .split-list {
            width: 100%;
            height: 20vh;
            display: flex;
            flex-direction: column;
        }
    `);customElements.define("race-panel",co);class uo extends rt{constructor(){super();A(this,"_isMainScreen");this._isMainScreen=!0}static get properties(){return{isMainScreen:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set isMainScreen(i){let o=this._isMainScreen;this._isMainScreen=i,this.requestUpdate("isMainScreen",o)}get isMainScreen(){return this._isMainScreen}_backClicked(){this.dispatchEvent(new CustomEvent("back-clicked",{bubbles:!0,composed:!0})),this.isMainScreen=!0}firstUpdated(){}render(){return $`
    <div class="root">
        <sl-icon-button name="arrow-left-square" label="Back" ?disabled=${this.isMainScreen}
            @click="${this._backClicked}"></sl-icon-button>
        <div class="header">Will I PR?</div>
    </div>
    `}}A(uo,"styles",P`
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
        background-color: var(--sl-color-green-400);
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
`);customElements.define("main-header",uo);class ho extends rt{render(){return $`
        <div id="fullscreen-rotate">
            Please rotate your device to portrait.
        </div>
    `}}A(ho,"styles",P`
        :host {
            width: 100%;
            height: 100%;
            z-index: 99;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            display: flex;
            text-align: center;
            align-items: center;
            background-color: black;
            color: white;
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        @media all and (orientation:landscape) {
            :host {
                visibility: visible;
            }
        }

        @media all and (orientation:portrait) {
            :host {
                visibility: hidden;
            }
        }

        #fullscreen-rotate {
            font-size: 2rem;
            width: 100%;
        }
    `);customElements.define("rotate-box",ho);He("/will-i-pr/");class po extends rt{constructor(){super();A(this,"_swAlert");A(this,"_wb");A(this,"_wbRegistration");A(this,"_mainHeader");A(this,"_setupPanel");A(this,"_racePanel")}static get properties(){return{viewportWidth:{type:String},viewportHeight:{type:String}}}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Ho("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._setupPanel=this.shadowRoot.querySelector("setup-panel"),this._racePanel=this.shadowRoot.querySelector("race-panel"),this._mainHeader=this.shadowRoot.querySelector("main-header")}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ie(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_distanceChanged(i){this._racePanel.distance=i.detail.distance,this._mainHeader.isMainScreen=!1}_prChanged(i){this._racePanel.pr=i.detail.pr}_backClicked(){this._setupPanel.style.display="block",this._racePanel.resetRace()}render(){return $`
      <main-header @back-clicked="${this._backClicked}"></main-header>
      <rotate-box id="fullscreen-rotate"></rotate-box>
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
    `}}A(po,"styles",P`
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
  `);customElements.define("main-application",po);
