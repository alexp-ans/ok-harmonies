(()=>{var ms=Object.defineProperty;var ps=(t,e,r)=>e in t?ms(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var b=(t,e,r)=>ps(t,typeof e!="symbol"?e+"":e,r);var it=globalThis,lt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nr=Symbol(),Br=new WeakMap,at=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Nr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(lt&&e===void 0){let n=r!==void 0&&r.length===1;n&&(e=Br.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Br.set(r,e))}return e}toString(){return this.cssText}},jr=t=>new at(typeof t=="string"?t:t+"",void 0,Nr);var Zt=(t,e)=>{if(lt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let n=document.createElement("style"),o=it.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)}},ct=lt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let n of e.cssRules)r+=n.cssText;return jr(r)})(t):t;var{is:fs,defineProperty:gs,getOwnPropertyDescriptor:bs,getOwnPropertyNames:ys,getOwnPropertySymbols:Cs,getPrototypeOf:vs}=Object,re=globalThis,Hr=re.trustedTypes,xs=Hr?Hr.emptyScript:"",ws=re.reactiveElementPolyfillSupport,He=(t,e)=>t,Xt={toAttribute(t,e){switch(e){case Boolean:t=t?xs:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ir=(t,e)=>!fs(t,e),Tr={attribute:!0,type:String,converter:Xt,reflect:!1,hasChanged:Ir};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),re.litPropertyMetadata??(re.litPropertyMetadata=new WeakMap);var Q=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Tr){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,r);o!==void 0&&gs(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){let{get:o,set:s}=bs(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get(){return o?.call(this)},set(i){let l=o?.call(this);s.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tr}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let e=vs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let r=this.properties,n=[...ys(r),...Cs(r)];for(let o of n)this.createProperty(o,r[o])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)r.unshift(ct(o))}else e!==void 0&&r.push(ct(e));return r}static _$Eu(e,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Xt).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Xt;this._$Em=o,this[o]=i.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ir)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[He("elementProperties")]=new Map,Q[He("finalized")]=new Map,ws?.({ReactiveElement:Q}),(re.reactiveElementVersions??(re.reactiveElementVersions=[])).push("2.0.4");var Ie=globalThis,ut=Ie.trustedTypes,Or=ut?ut.createPolicy("lit-html",{createHTML:t=>t}):void 0,Jt="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+K,Ms=`<${Qt}>`,pe=document,Oe=()=>pe.createComment(""),De=t=>t===null||typeof t!="object"&&typeof t!="function",Gr=Array.isArray,Yr=t=>Gr(t)||typeof t?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dr=/-->/g,zr=/>/g,de=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qr=/'/g,Ur=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Zr=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),f=Zr(1),il=Zr(2),V=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Fr=new WeakMap,me=pe.createTreeWalker(pe,129);function Xr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Or!==void 0?Or.createHTML(e):e}var Wr=(t,e)=>{let r=t.length-1,n=[],o,s=e===2?"<svg>":"",i=Te;for(let l=0;l<r;l++){let a=t[l],u,h,c=-1,d=0;for(;d<a.length&&(i.lastIndex=d,h=i.exec(a),h!==null);)d=i.lastIndex,i===Te?h[1]==="!--"?i=Dr:h[1]!==void 0?i=zr:h[2]!==void 0?(Vr.test(h[2])&&(o=RegExp("</"+h[2],"g")),i=de):h[3]!==void 0&&(i=de):i===de?h[0]===">"?(i=o??Te,c=-1):h[1]===void 0?c=-2:(c=i.lastIndex-h[2].length,u=h[1],i=h[3]===void 0?de:h[3]==='"'?Ur:qr):i===Ur||i===qr?i=de:i===Dr||i===zr?i=Te:(i=de,o=void 0);let p=i===de&&t[l+1].startsWith("/>")?" ":"";s+=i===Te?a+Ms:c>=0?(n.push(u),a.slice(0,c)+Jt+a.slice(c)+K+p):a+K+(c===-2?l:p)}return[Xr(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),n]},ze=class t{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0,l=e.length-1,a=this.parts,[u,h]=Wr(e,r);if(this.el=t.createElement(u,n),me.currentNode=this.el.content,r===2){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=me.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let c of o.getAttributeNames())if(c.endsWith(Jt)){let d=h[i++],p=o.getAttribute(c).split(K),m=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?dt:m[1]==="?"?mt:m[1]==="@"?pt:ge}),o.removeAttribute(c)}else c.startsWith(K)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(Vr.test(o.tagName)){let c=o.textContent.split(K),d=c.length-1;if(d>0){o.textContent=ut?ut.emptyScript:"";for(let p=0;p<d;p++)o.append(c[p],Oe()),me.nextNode(),a.push({type:2,index:++s});o.append(c[d],Oe())}}}else if(o.nodeType===8)if(o.data===Qt)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(K,c+1))!==-1;)a.push({type:7,index:s}),c+=K.length-1}s++}}static createElement(e,r){let n=pe.createElement("template");return n.innerHTML=e,n}};function fe(t,e,r=t,n){if(e===V)return e;let o=n!==void 0?r._$Co?.[n]:r._$Cl,s=De(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(e=fe(t,o._$AS(t,e.values),o,n)),e}var ht=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:n}=this._$AD,o=(e?.creationScope??pe).importNode(r,!0);me.currentNode=o;let s=me.nextNode(),i=0,l=0,a=n[0];for(;a!==void 0;){if(i===a.index){let u;a.type===2?u=new xe(s,s.nextSibling,this,e):a.type===1?u=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(u=new ft(s,this,e)),this._$AV.push(u),a=n[++l]}i!==a?.index&&(s=me.nextNode(),i++)}return me.currentNode=pe,o}p(e){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},xe=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,o){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=fe(this,e,r),De(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==M&&De(this._$AH)?this._$AA.nextSibling.data=e:this.T(pe.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ze.createElement(Xr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{let s=new ht(o,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(e){let r=Fr.get(e.strings);return r===void 0&&Fr.set(e.strings,r=new ze(e)),r}k(e){Gr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,o=0;for(let s of e)o===r.length?r.push(n=new t(this.S(Oe()),this.S(Oe()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,r=this,n,o){let s=this.strings,i=!1;if(s===void 0)e=fe(this,e,r,0),i=!De(e)||e!==this._$AH&&e!==V,i&&(this._$AH=e);else{let l=e,a,u;for(e=s[0],a=0;a<s.length-1;a++)u=fe(this,l[n+a],r,a),u===V&&(u=this._$AH[a]),i||(i=!De(u)||u!==this._$AH[a]),u===M?e=M:e!==M&&(e+=(u??"")+s[a+1]),this._$AH[a]=u}i&&!o&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},dt=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},mt=class extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},pt=class extends ge{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){if((e=fe(this,e,r,0)??M)===V)return;let n=this._$AH,o=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==M&&(n===M||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ft=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}},Jr={P:Jt,A:K,C:Qt,M:1,L:Wr,R:ht,D:Yr,V:fe,I:xe,H:ge,N:mt,U:pt,B:dt,F:ft},$s=Ie.litHtmlPolyfillSupport;$s?.(ze,xe),(Ie.litHtmlVersions??(Ie.litHtmlVersions=[])).push("3.1.4");var Qr=(t,e,r)=>{let n=r?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=r?.renderBefore??null;n._$litPart$=o=new xe(e.insertBefore(Oe(),s),s,void 0,r??{})}return o._$AI(t),o};var v=class extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;let e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};v._$litElement$=!0,v.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:v});var ks=globalThis.litElementPolyfillSupport;ks?.({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");var we=f`<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="isolation:isolate"
  viewBox="24.086 18.5 225.289 198.375"
  width="225.289"
  height="198.375">
  <path
    d=" M 111.875 109.5 C 107.379 99.42 81.407 27.648 78.375 18.5 C 60.833 35.333 59.833 52.667 63.125 72.75 C 55.5 65.333 50.167 60.333 42.625 52.5 C 29.167 74.333 35.167 100.667 47.125 116.75 C 37.833 114.333 32.5 113.333 24.125 111.75 C 23.167 142.333 39.833 163 68.667 172 C 50.333 212.333 109.333 227 135.875 204.875 C 138.375 211 142.518 215.111 148.875 216.875 C 147.625 198.875 159.125 203.875 165.875 204.625 C 163.125 197.125 158.625 193.25 154.875 189.125 C 205.667 180.333 243.667 149 249.375 110.25 C 243 112 238 113.333 231.625 114.75 C 240.667 98.667 247.131 81.15 235.125 51.25 C 230.375 57.133 186.412 111.428 177.875 121 C 165.25 101.5 135.375 92.125 111.875 109.5 Z  M 161 120.75 C 139.5 99 122.069 113.223 117.5 132 C 113.732 147.483 124.25 161.25 141.5 163.5 C 158.75 165.75 170.375 155 173.375 147.25 C 176.375 139.5 180.375 119.5 161 120.75 Z "
    fill-rule="evenodd"
    fill="currentColor" />
</svg>`;var gt=class extends v{render(){return we}createRenderRoot(){return this}};customElements.define("owl-logo",gt);var ne=class extends Event{constructor(e,r,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=n??!1}};var L=class{constructor(e,r,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,i)=>{this.unsubscribe&&(this.unsubscribe!==i&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,i)),this.unsubscribe=i},this.host=e,r.context!==void 0){let s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ne(this.context,this.t,this.subscribe))}};var bt=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){let n=r||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[r,{disposer:n}]of this.subscriptions)r(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,r,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};var Kt=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},oe=class extends bt{constructor(e,r,n){super(r.context!==void 0?r.initialValue:n),this.onContextRequest=o=>{let s=o.composedPath()[0];o.context===this.context&&s!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,s,o.subscribe))},this.onProviderRequest=o=>{let s=o.composedPath()[0];if(o.context!==this.context||s===this.host)return;let i=new Set;for(let[l,{consumerHost:a}]of this.subscriptions)i.has(l)||(i.add(l),a.dispatchEvent(new ne(this.context,l,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Kt(this.context))}};var en=(s=>(s.SetPrimaryColor="setprimarycolor",s.ColorMove="colormove",s.ColorModeChange="colormodechange",s.ChromaChange="chromachange",s.LightnessChange="lightnesschange",s))(en||{}),N=en;var Es=Symbol("color-picker"),Y=Es;var tn=(i=>(i.Monochromatic="monochromatic",i.Complementary="complementary",i.SplitComplementary="split-complementary",i.Analagous="analogous",i.Tetradic="tetradic",i.Freestyle="freestyle",i))(tn||{}),x=tn;function _s(t,e){return{primary:e.angle}}function Ss(t,e){switch(e.key){case"primary":return{primary:e.angle,complementary:I(e.angle)};case"complementary":return{primary:I(e.angle),complementary:e.angle};default:return t}}function As(t,e){let r=150;switch(e.key){case"primary":return"complementaryA"in t&&(r=be(t.complementaryA,t.primary)),{primary:e.angle,complementaryA:j(e.angle,r),complementaryB:j(e.angle,r*-1)};case"complementaryA":return r=be(e.angle,t.primary),{primary:t.primary,complementaryA:j(t.primary,r),complementaryB:j(t.primary,r*-1)};case"complementaryB":return r=be(t.primary,e.angle),{primary:t.primary,complementaryA:j(t.primary,r),complementaryB:j(t.primary,r*-1)};default:return t}}function Ls(t,e){let r=30;switch(e.key){case"primary":return"adjacentA"in t&&(r=be(t.adjacentA,t.primary)),{adjacentA:j(e.angle,r),primary:e.angle,adjacentB:j(e.angle,r*-1),complementary:I(e.angle)};case"adjacentA":return r=be(e.angle,t.primary),{adjacentA:j(t.primary,r),primary:t.primary,adjacentB:j(t.primary,r*-1),complementary:I(t.primary)};case"adjacentB":return r=be(t.primary,e.angle),{adjacentA:j(t.primary,r),primary:t.primary,adjacentB:j(t.primary,r*-1),complementary:I(t.primary)};case"complementary":"adjacentA"in t&&(r=be(t.adjacentA,t.primary));let n=I(e.angle);return{adjacentA:j(n,r),primary:n,adjacentB:j(n,r*-1),complementary:e.angle};default:return t}}function Ps(t,e){if("secondComplementary"in t)var{primary:r,secondary:n,complementary:o,secondComplementary:s}=t;else var{primary:r}=t,o=I(r),n=t.secondary||j(r,30),s=I(n);switch(e.key){case"primary":return{primary:e.angle,secondary:n,complementary:I(e.angle),secondComplementary:s};case"secondary":return{primary:r,secondary:e.angle,complementary:o,secondComplementary:I(e.angle)};case"complementary":return{primary:I(e.angle),secondary:n,complementary:e.angle,secondComplementary:s};case"secondComplementary":return{primary:r,secondary:I(e.angle),complementary:o,secondComplementary:e.angle};default:return t}}function Rs(t,e){let r=t.primary,n,o,s;if("tertiary"in Object.keys(t))({secondary:n,tertiary:o,quartiary:s}=t);else{let i=Object.values(t);n=i[1]||I(r),o=i[2]||j(r,90),s=i[3]||I(o)}switch(e.key){case"primary":return{primary:e.angle,secondary:n,tertiary:o,quartiary:s};case"secondary":return{primary:r,secondary:e.angle,tertiary:o,quartiary:s};case"tertiary":return{primary:r,secondary:n,tertiary:e.angle,quartiary:s};case"quartiary":return{primary:r,secondary:n,tertiary:o,quartiary:e.angle};default:return t}}function I(t){return(t+180)%360}function j(t,e){return(t+e+360)%360}function be(t,e){return t+360-(e+360)}var yt={[x.Monochromatic]:_s,[x.Complementary]:Ss,[x.SplitComplementary]:As,[x.Analagous]:Ls,[x.Tetradic]:Ps,[x.Freestyle]:Rs};function nn(t){let e=new URLSearchParams;e.append("mode",t.mode.substring(0,1)),e.append("l",(t.lightness*100).toString().substring(0,7)),e.append("c",(t.chroma*100).toString().substring(0,7)),e.append("h",Object.values(t.colors).join("|")),window.history.replaceState({},"",`${document.location.pathname}?${e}`)}var Bs={m:x.Monochromatic,c:x.Complementary,s:x.SplitComplementary,a:x.Analagous,t:x.Tetradic,f:x.Freestyle};function on(){let t=new URLSearchParams(document.location.search),e=t.get("mode"),r=t.get("l"),n=t.get("c"),o=t.get("h");if(!e||!r||!n||!o)return Ns();let s=Bs[t.get("mode")]||x.Complementary;return{mode:s,lightness:Number(t.get("l"))/100,chroma:Number(t.get("c"))/100,colors:js(s,o.split("|").map(i=>Number(i)))}}function Ns(){let t=Math.floor(Math.random()*360),e=rn(5,14)/100,r=rn(30,90)/100;return{mode:x.Complementary,colors:{primary:t,complementary:(t+180)%360},chroma:e,lightness:r}}function rn(t,e){return Math.round(Math.random()*(e-t)+t)}function js(t,e){switch(t){case x.Monochromatic:return{primary:e[0]};case x.SplitComplementary:return{primary:e[0],complementaryA:e[1],complementaryB:e[2]};case x.Analagous:return{adjacentA:e[0],primary:e[1],adjacentB:e[2],complementary:(e[1]+180)%360};case x.Tetradic:return{primary:e[0],secondary:e[1],complementary:(e[0]+180)%360,secondComplementary:(e[1]+180)%360};case x.Freestyle:return{primary:e[0],secondary:e[1],tertiary:e[2],quartiary:e[3]};case x.Complementary:default:return{primary:e[0]||0,complementary:(e[0]+180)%360}}}var Ct=class extends v{constructor(){super(...arguments);b(this,"provider",new oe(this,{context:Y,initialValue:on()}));b(this,"handleSetPrimaryColor",r=>{let{value:n}=this.provider,o=yt[n.mode];this.updateContext({lightness:r.detail.lightness,chroma:r.detail.chroma,colors:o(n.colors,{key:"primary",angle:r.detail.hue})})});b(this,"handleColorModeChange",r=>{let{value:n}=this.provider,o=yt[r.detail.mode];this.updateContext({mode:r.detail.mode,colors:o(n.colors,{key:"primary",angle:n.colors.primary})})});b(this,"handleColorMove",r=>{let n=this.provider.value,o=yt[n.mode],s=o(n.colors,{key:r.detail.key,angle:r.detail.hue});this.updateContext({colors:s}),this.setCustomProps(n.lightness,n.chroma,s.primary)});b(this,"handleChromaChange",r=>{let{value:n}=this.provider;this.updateContext({chroma:r.detail.value}),this.setCustomProps(n.lightness,r.detail.value,n.colors.primary)});b(this,"handleLightnessChange",r=>{let{value:n}=this.provider;this.updateContext({lightness:r.detail.value}),this.setCustomProps(r.detail.value,n.chroma,n.colors.primary)})}connectedCallback(){super.connectedCallback();let{value:r}=this.provider;this.setCustomProps(r.lightness,r.chroma,r.colors.primary);let n={[N.SetPrimaryColor]:this.handleSetPrimaryColor,[N.ColorMove]:this.handleColorMove,[N.ColorModeChange]:this.handleColorModeChange,[N.ChromaChange]:this.handleChromaChange,[N.LightnessChange]:this.handleLightnessChange};Object.keys(n).forEach(o=>{let s=n[o];this.addEventListener(o,s)})}render(){return f` <div class="l-color-picker">
      <header class="main-header">
        <h1>Theme Machine</h1>
        <h2>Color Picker</h2>
        <p>
          Select primary branding colors with harmonious color. Vividness
          (chroma) and lightness are kept in sync, but these can individually be
          fine-tuned after porting selected colors to the Palette Builder.
        </p>
        <div class="main-header__logo">${we}</div>
      </header>
      <div class="l-color-picker__input tile">
        <primary-color-input></primary-color-input>
      </div>
      <div class="l-color-picker__sidebar tile">
        <color-mode-selector> </color-mode-selector>
      </div>
      <main class="tile main-tile">
        <div class="wheel-container">
          <color-wheel></color-wheel>
        </div>
        <adjustment-sliders></adjustment-sliders>
      </main>
      <div class="l-color-picker__output tile">
        <scheme-preview> </scheme-preview>
      </div>
    </div>`}updateContext(r){let{value:n}=this.provider,o={...n,...r};this.provider.setValue(o),nn(o)}setCustomProps(r,n,o){this.style.setProperty("--primary-color",`oklch(${r*100}% ${n} ${o}deg)`),this.style.setProperty("--app-l",`${r*100}%`),this.style.setProperty("--app-c",n.toString()),this.style.setProperty("--app-h",`${o}deg`),r>.5?this.style.setProperty("--font-color","#333"):this.style.setProperty("--font-color","#ccc")}createRenderRoot(){return this}};customElements.define("color-picker-app",Ct);var qe=class extends v{constructor(){super();b(this,"context",new L(this,{context:Y,subscribe:!0}));this.chroma=.1,this.lightness=.5}render(){let r=this.context.value;return Object.keys(r.colors).map(o=>f`<color-handle
          key=${o}
          title=${o}
          angle=${r.colors[o].toString()}></color-handle>`)}createRenderRoot(){return this}};b(qe,"properties",{chroma:{},lightness:{}});customElements.define("color-wheel",qe);var Ue=class extends v{constructor(){super();b(this,"isDragging",!1);b(this,"center",[0,0]);b(this,"handleMouseDown",()=>{this._findCenterPoint(),this.isDragging=!0,this.setAttribute("aria-dragging","true")});b(this,"handleMouseUp",()=>{this.isDragging=!1,this.setAttribute("aria-dragging","false")});b(this,"handleTouchMove",r=>{if(!this.isDragging)return;r.preventDefault();let n=r.touches[0];this.move(n.clientX,n.clientY)});b(this,"handleMouseMove",r=>{!this.isDragging||r.buttons!==1||this.move(r.clientX,r.clientY,r.shiftKey?15:void 0)});b(this,"handleKeyDown",r=>{let n=parseInt(this.angle,10),o=r.shiftKey?10:1;switch(r.key){case"ArrowRight":n=(n+o)%360;break;case"ArrowLeft":n=(n-o)%360;break;default:return}this.dispatchEvent(new CustomEvent(N.ColorMove,{bubbles:!0,detail:{key:this.key,angle:n}}))});this.key="",this.angle="0"}connectedCallback(){super.connectedCallback(),this.style.setProperty("--angle",`${this.angle}deg`),this.setAttribute("tabindex","0"),this._findCenterPoint(),this.addEventListener("mousedown",this.handleMouseDown),this.addEventListener("touchstart",this.handleMouseDown),this.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("touchmove",this.handleTouchMove)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleMouseUp),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchmove",this.handleTouchMove)}requestUpdate(r,n){this.style.setProperty("--angle",`${this.angle}deg`),super.requestUpdate(r,n)}move(r,n,o){let s=Hs(this.center,[r,n]);o&&(s=Math.round(s/o)*o),this.dispatchEvent(new CustomEvent(N.ColorMove,{bubbles:!0,detail:{key:this.key,hue:s}}))}_findCenterPoint(){let r=this.parentNode;if(!r||r.tagName!=="COLOR-WHEEL")return;let n=r.getBoundingClientRect();this.center=[n.x+n.width/2,n.y+n.height/2]}createRenderRoot(){return this}};b(Ue,"properties",{key:{},angle:{reflect:!0}});customElements.define("color-handle",Ue);function Hs(t,e){let r=t[0]-e[0],n=t[1]-e[1],o=Math.atan2(n,r)*180/Math.PI;return Math.round((o+270)%360)}var Ts=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.33px;" />
  <path
    d="M400 280L400 400"
    opacity="0.6"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Is=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle cx="400" cy="550" r="33.33" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.33px;" />
  <path
    d="M400 250L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M400 550L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Os=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle cx="300" cy="530" r="33.33" fill="currentColor" />
  <circle cx="500" cy="530" r="33.33" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.33px;" />
  <path
    d="M400 280L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M330 500L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M500 530L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Ds=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle cx="300" cy="270" r="33.33" fill="currentColor" />
  <circle cx="500" cy="270" r="33.3" fill="currentColor" />
  <circle cx="400" cy="550" r="33.33" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.3px;" />
  <path
    d="M400 250L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M300 270L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M500 270L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M400 550L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,zs=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle cx="400" cy="550" r="33.33" fill="currentColor" />
  <circle cx="250" cy="400" r="33.33" fill="currentColor" />
  <circle cx="550" cy="400" r="33.3" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.3px;" />
  <path
    d="M400 250L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M400 550L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M250 400L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M550 400L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,qs=f`<svg
  width="40px"
  height="40px"
  viewBox="0 0 800 800"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
  <circle cx="400" cy="250" r="33.33" fill="currentColor" />
  <circle cx="250" cy="400" r="33.33" fill="currentColor" />
  <circle cx="300" cy="530" r="33.33" fill="currentColor" />
  <circle cx="500" cy="530" r="33.33" fill="currentColor" />
  <circle
    cx="400"
    cy="400"
    r="300"
    style="fill:none;stroke:currentColor;stroke-width:33.3px;" />
  <path
    d="M400 250L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M250 400L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M300 530L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M500 530L400 400"
    opacity="0.4"
    stroke="currentColor"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,ye={monochromatic:Ts,complementary:Is,splitComplementary:Os,analagous:Ds,tetradic:zs,freestyle:qs};var vt=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:Y,subscribe:!0}))}render(){let r=this.context.value,{mode:n}=r;return f`
      <button
        type="button"
        value="${x.Monochromatic}"
        aria-pressed="${n===x.Monochromatic?"true":M}"
        @click="${this.setMode}">
        ${ye.monochromatic}
        <span>Monochromatic</span>
      </button>
      <button
        type="button"
        value="${x.Complementary}"
        aria-pressed="${n===x.Complementary?"true":M}"
        @click="${this.setMode}">
        ${ye.complementary}
        <span>Complementary</span>
      </button>
      <button
        type="button"
        value="${x.SplitComplementary}"
        aria-pressed="${n===x.SplitComplementary?"true":M}"
        @click="${this.setMode}">
        ${ye.splitComplementary}
        <span>Split Complementary</span>
      </button>
      <button
        type="button"
        value="${x.Analagous}"
        aria-pressed="${n===x.Analagous?"true":M}"
        @click="${this.setMode}">
        ${ye.analagous}
        <span>Analagous</span>
      </button>
      <button
        type="button"
        value="${x.Tetradic}"
        aria-pressed="${n===x.Tetradic?"true":M}"
        @click="${this.setMode}">
        ${ye.tetradic}
        <span>Tetradic</span>
      </button>
      <button
        type="button"
        value="${x.Freestyle}"
        aria-pressed="${n===x.Freestyle?"true":M}"
        @click="${this.setMode}">
        ${ye.freestyle}
        <span>Freestyle</span>
      </button>
    `}setMode(r){let n=r.currentTarget;if(!n)return;let o=new CustomEvent(N.ColorModeChange,{bubbles:!0,detail:{mode:n.value}});this.dispatchEvent(o)}createRenderRoot(){return this}};customElements.define("color-mode-selector",vt);function k(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(i=>[i]));let n=e[0].length,o=e[0].map((i,l)=>e.map(a=>a[l])),s=t.map(i=>o.map(l=>{let a=0;if(!Array.isArray(i)){for(let u of l)a+=i*u;return a}for(let u=0;u<i.length;u++)a+=i[u]*(l[u]||0);return a}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function Xe(t){return se(t)==="string"}function se(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Lt(t,{precision:e,unit:r}){return ie(t)?"none":no(t,e)+(r??"")}function ie(t){return Number.isNaN(t)||t instanceof Number&&t?.none}function P(t){return ie(t)?0:t}function no(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);let o=10**(e-n);return Math.floor(t*o+.5)/o}var Us={deg:1,grad:.9,rad:180/Math.PI,turn:360};function oo(t){if(!t)return;t=t.trim();let e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,o=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g,s=t.match(e);if(s){let i=[];return s[2].replace(o,(l,a)=>{let u=a.match(n),h=a;if(u){let c=u[0],d=h.slice(0,-c.length);c==="%"?(h=new Number(d/100),h.type="<percentage>"):(h=new Number(d*Us[c]),h.type="<angle>",h.unit=c)}else r.test(h)?(h=new Number(h),h.type="<number>"):h==="none"&&(h=new Number(NaN),h.none=!0);l.startsWith("/")&&(h=h instanceof Number?h:new Number(h),h.alpha=!0),typeof h=="object"&&h instanceof Number&&(h.raw=a),i.push(h)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:i}}}function so(t){return t[t.length-1]}function Ye(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function io(t,e,r){return(r-t)/(e-t)}function Cr(t,e,r){return Ye(e[0],e[1],io(t[0],t[1],r))}function ao(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}function lo(t,e,r){return Math.max(Math.min(r,e),t)}function Nt(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function X(t,e){return Nt(Math.abs(t)**e,t)}function vr(t,e){return e===0?0:t/e}function co(t,e,r=0,n=t.length){for(;r<n;){let o=r+n>>1;t[o]<e?r=o+1:n=o}return r}var Fs=Object.freeze({__proto__:null,bisectLeft:co,clamp:lo,copySign:Nt,interpolate:Ye,interpolateInv:io,isNone:ie,isString:Xe,last:so,mapRange:Cr,multiplyMatrices:k,parseCoordGrammar:ao,parseFunction:oo,serializeNumber:Lt,skipNone:P,spow:X,toPrecision:no,type:se,zdiv:vr}),ur=class{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},ae=new ur,F={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},T={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function hr(t){return Array.isArray(t)?t:T[t]}function Pt(t,e,r,n={}){if(t=hr(t),e=hr(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let o={W1:t,W2:e,XYZ:r,options:n};if(ae.run("chromatic-adaptation-start",o),o.M||(o.W1===T.D65&&o.W2===T.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===T.D50&&o.W2===T.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ae.run("chromatic-adaptation-end",o),o.M)return k(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var Gs=new Set(["<number>","<percentage>","<angle>"]);function sn(t,e,r,n){return Object.entries(t.coords).map(([s,i],l)=>{let a=e.coordGrammar[l],u=n[l],h=u?.type,c;if(u.none?c=a.find(m=>Gs.has(m)):c=a.find(m=>m==h),!c){let m=i.name||s;throw new TypeError(`${h??u.raw} not allowed for ${m} in ${r}()`)}let d=c.range;h==="<percentage>"&&(d||(d=[0,1]));let p=i.range||i.refRange;return d&&p&&(n[l]=Cr(d,p,n[l])),c})}function uo(t,{meta:e}={}){let r={str:String(t)?.trim()};if(ae.run("parse-start",r),r.color)return r.color;if(r.parsed=oo(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let o=r.parsed.args.shift(),s=o.startsWith("--")?o.substring(2):`--${o}`,i=[o,s],l=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of g.all){let c=h.getFormat("color");if(c&&(i.includes(c.id)||c.ids?.filter(d=>i.includes(d)).length)){let d=Object.keys(h.coords).map((m,y)=>r.parsed.args[y]||0),p;return c.coordGrammar&&(p=sn(h,c,"color",d)),e&&Object.assign(e,{formatId:"color",types:p}),c.id.startsWith("--")&&!o.startsWith("--")&&F.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${o}).`),o.startsWith("--")&&!c.id.startsWith("--")&&F.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${o}).`),{spaceId:h.id,coords:d,alpha:l}}}let a="",u=o in g.registry?o:s;if(u in g.registry){let h=g.registry[u].formats?.color?.id;h&&(a=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${o}). `+(a||"Missing a plugin?"))}else for(let o of g.all){let s=o.getFormat(n);if(s&&s.type==="function"){let i=1;(s.lastAlpha||so(r.parsed.args).alpha)&&(i=r.parsed.args.pop());let l=r.parsed.args,a;return s.coordGrammar&&(a=sn(o,s,n,l)),e&&Object.assign(e,{formatId:s.name,types:a}),{spaceId:o.id,coords:l,alpha:i}}}}else for(let n of g.all)for(let o in n.formats){let s=n.formats[o];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let i=s.parse(r.str);if(i)return i.alpha??(i.alpha=1),e&&(e.formatId=o),i}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function C(t){if(Array.isArray(t))return t.map(C);if(!t)throw new TypeError("Empty color reference");Xe(t)&&(t=uo(t));let e=t.space||t.spaceId;return e instanceof g||(t.space=g.get(e)),t.alpha===void 0&&(t.alpha=1),t}var Ys=75e-6,O=class O{constructor(e){this.id=e.id,this.name=e.name,this.base=e.base?O.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r;let n=e.white??this.base.white??"D65";this.white=hr(n),this.formats=e.formats??{};for(let o in this.formats){let s=this.formats[o];s.type||(s.type="function"),s.name||(s.name=o)}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:O.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,s)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Vs(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ae.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Ys}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((o,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[l,a]=i.range;return(l===void 0||o>=l-r)&&(a===void 0||o<=a+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=an(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=an(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){let l=C(e);[e,r]=[l.space,l.coords]}if(e=O.get(e),this.equals(e))return r;r=r.map(l=>Number.isNaN(l)?0:l);let n=this.path,o=e.path,s,i;for(let l=0;l<n.length&&n[l].equals(o[l]);l++)s=n[l],i=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let l=n.length-1;l>i;l--)r=n[l].toBase(r);for(let l=i+1;l<o.length;l++)r=o[l].fromBase(r);return r}from(e,r){if(arguments.length===1){let n=C(e);[e,r]=[n.space,n.coords]}return e=O.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;e.push(o?.min??0)}return e}static get all(){return[...new Set(Object.values(O.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof O)return e;if(se(e)==="string"){let o=O.registry[e.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${e}"`);return o}if(r.length)return O.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){let n=se(e),o,s;if(n==="string"?e.includes(".")?[o,s]=e.split("."):[o,s]=[,e]:Array.isArray(e)?[o,s]=e:(o=e.space,s=e.coordId),o=O.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=se(s),n==="number"||n==="string"&&s>=0){let a=Object.entries(o.coords)[s];if(a)return{space:o,id:a[0],index:s,...a[1]}}o=O.get(o);let i=s.toLowerCase(),l=0;for(let a in o.coords){let u=o.coords[a];if(a.toLowerCase()===i||u.name?.toLowerCase()===i)return{space:o,id:a,index:l,...u};l++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};b(O,"registry",{}),b(O,"DEFAULT_FORMAT",{type:"functions",name:"color"});var g=O;function Vs(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function an(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=ao(t.coords);let r=Object.entries(e).map(([n,o],s)=>{let i=t.coordGrammar[s][0],l=o.range||o.refRange,a=i.range,u="";return i=="<percentage>"?(a=[0,100],u="%"):i=="<angle>"&&(u="deg"),{fromRange:l,toRange:a,suffix:u}});t.serializeCoords=(n,o)=>n.map((s,i)=>{let{fromRange:l,toRange:a,suffix:u}=r[i];return l&&a&&(s=Cr(l,a,s)),s=Lt(s,{precision:o,unit:u}),s})}return t}var B=new g({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),H=class extends g{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=B),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=k(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Pt(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Pt(this.base.white,this.white,r),k(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}};function We(t,e){return t=C(t),!e||t.space.equals(e)?t.coords.slice():(e=g.get(e),e.from(t))}function q(t,e){t=C(t);let{space:r,index:n}=g.resolveCoord(e,t.space);return We(t,r)[n]}function xr(t,e,r){return t=C(t),e=g.get(e),t.coords=e.to(t.space,r),t}xr.returns="color";function ee(t,e,r){if(t=C(t),arguments.length===2&&se(arguments[1])==="object"){let n=arguments[1];for(let o in n)ee(t,o,n[o])}else{typeof r=="function"&&(r=r(q(t,e)));let{space:n,index:o}=g.resolveCoord(e,t.space),s=We(t,n);s[o]=r,xr(t,n,s)}return t}ee.returns="color";var wr=new g({id:"xyz-d50",name:"XYZ D50",white:"D50",base:B,fromBase:t=>Pt(B.white,"D50",t),toBase:t=>Pt("D50",B.white,t)}),Zs=216/24389,ln=24/116,xt=24389/27,er=T.D50,U=new g({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:er,base:wr,fromBase(t){let r=t.map((n,o)=>n/er[o]).map(n=>n>Zs?Math.cbrt(n):(xt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>ln?Math.pow(e[0],3):(116*e[0]-16)/xt,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/xt,e[2]>ln?Math.pow(e[2],3):(116*e[2]-16)/xt].map((n,o)=>n*er[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function W(t){return(t%360+360)%360}function Xs(t,e){if(t==="raw")return e;let[r,n]=e.map(W),o=n-r;return t==="increasing"?o<0&&(n+=360):t==="decreasing"?o>0&&(r+=360):t==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):t==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ve=new g({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:U,fromBase(t){let[e,r,n]=t,o,s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),W(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),cn=25**7,Rt=Math.PI,un=180/Rt,Me=Rt/180;function hn(t){let e=t*t;return e*e*e*t}function ho(t,e,{kL:r=1,kC:n=1,kH:o=1}={}){[t,e]=C([t,e]);let[s,i,l]=U.from(t),a=Ve.from(U,[s,i,l])[1],[u,h,c]=U.from(e),d=Ve.from(U,[u,h,c])[1];a<0&&(a=0),d<0&&(d=0);let p=(a+d)/2,m=hn(p),y=.5*(1-Math.sqrt(m/(m+cn))),w=(1+y)*i,_=(1+y)*h,S=Math.sqrt(w**2+l**2),A=Math.sqrt(_**2+c**2),z=w===0&&l===0?0:Math.atan2(l,w),te=_===0&&c===0?0:Math.atan2(c,_);z<0&&(z+=2*Rt),te<0&&(te+=2*Rt),z*=un,te*=un;let nt=u-s,ot=A-S,Z=te-z,Be=z+te,_r=Math.abs(Z),Ne;S*A===0?Ne=0:_r<=180?Ne=Z:Z>180?Ne=Z-360:Z<-180?Ne=Z+360:F.warn("the unthinkable has happened");let Sr=2*Math.sqrt(A*S)*Math.sin(Ne*Me/2),ls=(s+u)/2,Vt=(S+A)/2,Ar=hn(Vt),J;S*A===0?J=Be:_r<=180?J=Be/2:Be<360?J=(Be+360)/2:J=(Be-360)/2;let Lr=(ls-50)**2,cs=1+.015*Lr/Math.sqrt(20+Lr),Pr=1+.045*Vt,je=1;je-=.17*Math.cos((J-30)*Me),je+=.24*Math.cos(2*J*Me),je+=.32*Math.cos((3*J+6)*Me),je-=.2*Math.cos((4*J-63)*Me);let Rr=1+.015*Vt*je,us=30*Math.exp(-1*((J-275)/25)**2),hs=2*Math.sqrt(Ar/(Ar+cn)),ds=-1*Math.sin(2*us*Me)*hs,st=(nt/(r*cs))**2;return st+=(ot/(n*Pr))**2,st+=(Sr/(o*Rr))**2,st+=ds*(ot/(n*Pr))*(Sr/(o*Rr)),Math.sqrt(st)}var Ws=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Js=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Qs=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ks=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],_e=new g({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:B,fromBase(t){let r=k(Ws,t).map(n=>Math.cbrt(n));return k(Qs,r)},toBase(t){let r=k(Ks,t).map(n=>n**3);return k(Js,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function dr(t,e){[t,e]=C([t,e]);let[r,n,o]=_e.from(t),[s,i,l]=_e.from(e),a=r-s,u=n-i,h=o-l;return Math.sqrt(a**2+u**2+h**2)}var ei=75e-6;function ve(t,e,{epsilon:r=ei}={}){t=C(t),e||(e=t.space),e=g.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function Se(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function mo(t,e,r="lab"){r=g.get(r);let n=r.from(t),o=r.from(e);return Math.sqrt(n.reduce((s,i,l)=>{let a=o[l];return isNaN(i)||isNaN(a)?s:s+(a-i)**2},0))}function ti(t,e){return mo(t,e,"lab")}var ri=Math.PI,dn=ri/180;function ni(t,e,{l:r=2,c:n=1}={}){[t,e]=C([t,e]);let[o,s,i]=U.from(t),[,l,a]=Ve.from(U,[o,s,i]),[u,h,c]=U.from(e),d=Ve.from(U,[u,h,c])[1];l<0&&(l=0),d<0&&(d=0);let p=o-u,m=l-d,y=s-h,w=i-c,_=y**2+w**2-m**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let A=.0638*l/(1+.0131*l)+.638,z;Number.isNaN(a)&&(a=0),a>=164&&a<=345?z=.56+Math.abs(.2*Math.cos((a+168)*dn)):z=.36+Math.abs(.4*Math.cos((a+35)*dn));let te=Math.pow(l,4),nt=Math.sqrt(te/(te+1900)),ot=A*(nt*z+1-nt),Z=(p/(r*S))**2;return Z+=(m/(n*A))**2,Z+=_/ot**2,Math.sqrt(Z)}var mn=203,Mr=new g({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:B,fromBase(t){return t.map(e=>Math.max(e*mn,0))},toBase(t){return t.map(e=>Math.max(e/mn,0))}}),wt=1.15,Mt=.66,pn=2610/2**14,oi=2**14/2610,fn=3424/2**12,gn=2413/2**7,bn=2392/2**7,si=1.7*2523/2**5,yn=2**5/(1.7*2523),$t=-.56,tr=16295499532821565e-27,ii=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ai=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],li=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ci=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],po=new g({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Mr,fromBase(t){let[e,r,n]=t,o=wt*e-(wt-1)*n,s=Mt*r-(Mt-1)*e,l=k(ii,[o,s,n]).map(function(d){let p=fn+gn*(d/1e4)**pn,m=1+bn*(d/1e4)**pn;return(p/m)**si}),[a,u,h]=k(li,l);return[(1+$t)*a/(1+$t*a)-tr,u,h]},toBase(t){let[e,r,n]=t,o=(e+tr)/(1+$t-$t*(e+tr)),i=k(ci,[o,r,n]).map(function(d){let p=fn-d**yn,m=bn*d**yn-gn;return 1e4*(p/m)**oi}),[l,a,u]=k(ai,i),h=(l+(wt-1)*u)/wt,c=(a+(Mt-1)*h)/Mt;return[h,c,u]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),mr=new g({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:po,fromBase(t){let[e,r,n]=t,o,s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),W(o)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function ui(t,e){[t,e]=C([t,e]);let[r,n,o]=mr.from(t),[s,i,l]=mr.from(e),a=r-s,u=n-i;Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o);let h=o-l,c=2*Math.sqrt(n*i)*Math.sin(h/2*(Math.PI/180));return Math.sqrt(a**2+u**2+c**2)}var fo=3424/4096,go=2413/128,bo=2392/128,Cn=2610/16384,hi=2523/32,di=16384/2610,vn=32/2523,mi=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],pi=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],fi=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],gi=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],pr=new g({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Mr,fromBase(t){let e=k(mi,t);return bi(e)},toBase(t){let e=yi(t);return k(gi,e)}});function bi(t){let e=t.map(function(r){let n=fo+go*(r/1e4)**Cn,o=1+bo*(r/1e4)**Cn;return(n/o)**hi});return k(pi,e)}function yi(t){return k(fi,t).map(function(n){let o=Math.max(n**vn-fo,0),s=go-bo*n**vn;return 1e4*(o/s)**di})}function Ci(t,e){[t,e]=C([t,e]);let[r,n,o]=pr.from(t),[s,i,l]=pr.from(e);return 720*Math.sqrt((r-s)**2+.25*(n-i)**2+(o-l)**2)}var vi=T.D65,yo=.42,xn=1/yo,rr=2*Math.PI,Co=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],xi=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],wi=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Mi={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Ce={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$i=180/Math.PI,wn=Math.PI/180;function vo(t,e){return t.map(n=>{let o=X(e*Math.abs(n)*.01,yo);return 400*Nt(o,n)/(o+27.13)})}function ki(t,e){let r=100/e*27.13**xn;return t.map(n=>{let o=Math.abs(n);return Nt(r*X(o/(400-o),xn),n)})}function Ei(t){let e=W(t);e<=Ce.h[0]&&(e+=360);let r=co(Ce.h,e)-1,[n,o]=Ce.h.slice(r,r+2),[s,i]=Ce.e.slice(r,r+2),l=Ce.H[r],a=(e-n)/s;return l+100*a/(a+(o-e)/i)}function _i(t){let e=(t%400+400)%400,r=Math.floor(.01*e);e=e%100;let[n,o]=Ce.h.slice(r,r+2),[s,i]=Ce.e.slice(r,r+2);return W((e*(i*n-s*o)-100*n*i)/(e*(i-s)-100*i))}function xo(t,e,r,n,o){let s={};s.discounting=o,s.refWhite=t,s.surround=n;let i=t.map(y=>y*100);s.la=e,s.yb=r;let l=i[1],a=k(Co,i);n=Mi[s.surround];let u=n[0];s.c=n[1],s.nc=n[2];let c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;let d=o?1:Math.max(Math.min(u*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=a.map(y=>Ye(1,l/y,d)),s.dRgbInv=s.dRgb.map(y=>1/y);let p=a.map((y,w)=>y*s.dRgb[w]),m=vo(p,s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var Mn=xo(vi,64/Math.PI*.2,20,"average",!1);function fr(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=W(t.h)*wn:r=_i(t.H)*wn;let n=Math.cos(r),o=Math.sin(r),s=0;t.J!==void 0?s=X(t.J,1/2)*.1:t.Q!==void 0&&(s=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let i=0;t.C!==void 0?i=t.C/s:t.M!==void 0?i=t.M/e.flRoot/s:t.s!==void 0&&(i=4e-4*t.s**2*(e.aW+4)/e.c);let l=X(i*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),a=.25*(Math.cos(r+2)+3.8),u=e.aW*X(s,2/e.c/e.z),h=5e4/13*e.nc*e.ncb*a,c=u/e.nbb,d=23*(c+.305)*vr(l,23*h+l*(11*n+108*o)),p=d*n,m=d*o,y=ki(k(wi,[c,p,m]).map(w=>w*1/1403),e.fl);return k(xi,y.map((w,_)=>w*e.dRgbInv[_])).map(w=>w/100)}function wo(t,e){let r=t.map(A=>A*100),n=vo(k(Co,r).map((A,z)=>A*e.dRgb[z]),e.fl),o=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,i=(Math.atan2(s,o)%rr+rr)%rr,l=.25*(Math.cos(i+2)+3.8),a=5e4/13*e.nc*e.ncb*vr(l*Math.sqrt(o**2+s**2),n[0]+n[1]+1.05*n[2]+.305),u=X(a,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),h=e.nbb*(2*n[0]+n[1]+.05*n[2]),c=X(h/e.aW,.5*e.c*e.z),d=100*X(c,2),p=4/e.c*c*(e.aW+4)*e.flRoot,m=u*c,y=m*e.flRoot,w=W(i*$i),_=Ei(w),S=50*X(e.c*u/(e.aW+4),1/2);return{J:d,C:m,h:w,s:S,Q:p,M:y,H:_}}var Si=new g({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:B,fromBase(t){let e=wo(t,Mn);return[e.J,e.M,e.h]},toBase(t){return fr({J:t[0],M:t[1],h:t[2]},Mn)}}),Ai=T.D65,Li=216/24389,Mo=24389/27;function Pi(t){return 116*(t>Li?Math.cbrt(t):(Mo*t+16)/116)-16}function gr(t){return t>8?Math.pow((t+16)/116,3):t/Mo}function Ri(t,e){let[r,n,o]=t,s=[],i=0;if(o===0)return[0,0,0];let l=gr(o);o>0?i=.00379058511492914*o**2+.608983189401032*o+.9155088574762233:i=9514440756550361e-21*o**2+.08693057439788597*o-21.928975842194614;let a=2e-12,u=15,h=0,c=1/0;for(;h<=u;){s=fr({J:i,C:n,h:r},e);let d=Math.abs(s[1]-l);if(d<c){if(d<=a)return s;c=d}i=i-(s[1]-l)*i/(2*s[1]),h+=1}return fr({J:i,C:n,h:r},e)}function Bi(t,e){let r=Pi(t[1]);if(r===0)return[0,0,0];let n=wo(t,$r);return[W(n.h),n.C,r]}var $r=xo(Ai,200/Math.PI*gr(50),gr(50)*100,"average",!1),Ze=new g({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:B,fromBase(t){return Bi(t)},toBase(t){return Ri(t,$r)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ni=Math.PI/180,$n=[1,.007,.0228];function kn(t){t[1]<0&&(t=Ze.fromBase(Ze.toBase(t)));let e=Math.log(Math.max(1+$n[2]*t[1]*$r.flRoot,1))/$n[2],r=t[0]*Ni,n=e*Math.cos(r),o=e*Math.sin(r);return[t[2],n,o]}function ji(t,e){[t,e]=C([t,e]);let[r,n,o]=kn(Ze.from(t)),[s,i,l]=kn(Ze.from(e));return Math.sqrt((r-s)**2+(n-i)**2+(o-l)**2)}var Ae={deltaE76:ti,deltaECMC:ni,deltaE2000:ho,deltaEJz:ui,deltaEITP:Ci,deltaEOK:dr,deltaEHCT:ji};function Hi(t){let e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}var En={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function le(t,{method:e=F.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:o=2,blackWhiteClamp:s={}}={}){if(t=C(t),Xe(arguments[1])?r=arguments[1]:r||(r=t.space),r=g.get(r),ve(t,r,{epsilon:0}))return t;let i;if(e==="css")i=Ti(t,{space:r});else{if(e!=="clip"&&!ve(t,r)){Object.prototype.hasOwnProperty.call(En,e)&&({method:e,jnd:o,deltaEMethod:n,blackWhiteClamp:s}=En[e]);let l=ho;if(n!==""){for(let u in Ae)if("deltae"+n.toLowerCase()===u.toLowerCase()){l=Ae[u];break}}let a=le($(t,r),{method:"clip",space:r});if(l(t,a)>o){if(Object.keys(s).length===3){let S=g.resolveCoord(s.channel),A=q($(t,S.space),S.id);if(ie(A)&&(A=0),A>=s.max)return $({space:"xyz-d65",coords:T.D65},t.space);if(A<=s.min)return $({space:"xyz-d65",coords:[0,0,0]},t.space)}let u=g.resolveCoord(e),h=u.space,c=u.id,d=$(t,h);d.coords.forEach((S,A)=>{ie(S)&&(d.coords[A]=0)});let m=(u.range||u.refRange)[0],y=Hi(o),w=m,_=q(d,c);for(;_-w>y;){let S=Se(d);S=le(S,{space:r,method:"clip"}),l(d,S)-o<y?w=q(d,c):_=q(d,c),ee(d,c,(w+_)/2)}i=$(d,r)}else i=a}else i=$(t,r);if(e==="clip"||!ve(i,r,{epsilon:0})){let l=Object.values(r.coords).map(a=>a.range||[]);i.coords=i.coords.map((a,u)=>{let[h,c]=l[u];return h!==void 0&&(a=Math.max(h,a)),c!==void 0&&(a=Math.min(a,c)),a})}}return r!==t.space&&(i=$(i,t.space)),t.coords=i.coords,t}le.returns="color";var _n={WHITE:{space:_e,coords:[1,0,0]},BLACK:{space:_e,coords:[0,0,0]}};function Ti(t,{space:e}={}){t=C(t),e||(e=t.space),e=g.get(e);let o=g.get("oklch");if(e.isUnbounded)return $(t,e);let s=$(t,o),i=s.coords[0];if(i>=1){let m=$(_n.WHITE,e);return m.alpha=t.alpha,$(m,e)}if(i<=0){let m=$(_n.BLACK,e);return m.alpha=t.alpha,$(m,e)}if(ve(s,e,{epsilon:0}))return $(s,e);function l(m){let y=$(m,e),w=Object.values(e.coords);return y.coords=y.coords.map((_,S)=>{if("range"in w[S]){let[A,z]=w[S].range;return lo(A,_,z)}return _}),y}let a=0,u=s.coords[1],h=!0,c=Se(s),d=l(c),p=dr(d,c);if(p<.02)return d;for(;u-a>1e-4;){let m=(a+u)/2;if(c.coords[1]=m,h&&ve(c,e,{epsilon:0}))a=m;else if(d=l(c),p=dr(d,c),p<.02){if(.02-p<1e-4)break;h=!1,a=m}else u=m}return d}function $(t,e,{inGamut:r}={}){t=C(t),e=g.get(e);let n=e.from(t),o={space:e,coords:n,alpha:t.alpha};return r&&(o=le(o,r===!0?void 0:r)),o}$.returns="color";function Ge(t,{precision:e=F.precision,format:r="default",inGamut:n=!0,...o}={}){let s;t=C(t);let i=r;r=t.space.getFormat(r)??t.space.getFormat("default")??g.DEFAULT_FORMAT;let l=t.coords.slice();if(n||(n=r.toGamut),n&&!ve(t)&&(l=le(Se(t),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=e,r.serialize)s=r.serialize(l,t.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let a=r.name||"color";r.serializeCoords?l=r.serializeCoords(l,e):e!==null&&(l=l.map(d=>Lt(d,{precision:e})));let u=[...l];if(a==="color"){let d=r.id||r.ids?.[0]||t.space.id;u.unshift(d)}let h=t.alpha;e!==null&&(h=Lt(h,{precision:e}));let c=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${h}`;s=`${a}(${u.join(r.commas?", ":" ")}${c})`}return s}var Ii=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Oi=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],jt=new H({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Ii,fromXYZ_M:Oi}),kt=1.09929682680944,Sn=.018053968510807,$o=new H({id:"rec2020",name:"REC.2020",base:jt,toBase(t){return t.map(function(e){return e<Sn*4.5?e/4.5:Math.pow((e+kt-1)/kt,1/.45)})},fromBase(t){return t.map(function(e){return e>=Sn?kt*Math.pow(e,.45)-(kt-1):4.5*e})}}),Di=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],zi=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],ko=new H({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Di,fromXYZ_M:zi}),qi=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],R=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Eo=new H({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:qi,fromXYZ_M:R}),An={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Ln=Array(3).fill("<percentage> | <number>[0, 255]"),Pn=Array(3).fill("<number>[0, 255]"),Le=new H({id:"srgb",name:"sRGB",base:Eo,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Ln},rgb_number:{name:"rgb",commas:!0,coords:Pn,noAlpha:!0},color:{},rgba:{coords:Ln,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Pn},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=An.black,e.alpha=0):e.coords=An[t],e.coords)return e}}}}),_o=new H({id:"p3",cssId:"display-p3",name:"P3",base:ko,fromBase:Le.fromBase,toBase:Le.toBase});F.display_space=Le;var Ui;if(typeof CSS<"u"&&CSS.supports)for(let t of[U,$o,_o]){let e=t.getMinCoords(),n=Ge({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){F.display_space=t;break}}function Fi(t,{space:e=F.display_space,...r}={}){let n=Ge(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!F.display_space)n=new String(n),n.color=t;else{let o=t;if((t.coords.some(ie)||ie(t.alpha))&&!(Ui??(Ui=CSS.supports("color","hsl(none 50% 50%)")))&&(o=Se(t),o.coords=o.coords.map(P),o.alpha=P(o.alpha),n=Ge(o,r),CSS.supports("color",n)))return n=new String(n),n.color=o,n;o=$(o,e),n=new String(Ge(o,r)),n.color=o}return n}function Gi(t,e){return t=C(t),e=C(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function ce(t){return q(t,[B,"y"])}function So(t,e){ee(t,[B,"y"],e)}function Yi(t){Object.defineProperty(t.prototype,"luminance",{get(){return ce(this)},set(e){So(this,e)}})}var Vi=Object.freeze({__proto__:null,getLuminance:ce,register:Yi,setLuminance:So});function Zi(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}var Xi=.56,Wi=.57,Ji=.62,Qi=.65,Rn=.022,Ki=1.414,ea=.1,ta=5e-4,ra=1.14,Bn=.027,na=1.14;function Nn(t){return t>=Rn?t:t+(Rn-t)**Ki}function $e(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function oa(t,e){e=C(e),t=C(t);let r,n,o,s,i,l;e=$(e,"srgb"),[s,i,l]=e.coords;let a=$e(s)*.2126729+$e(i)*.7151522+$e(l)*.072175;t=$(t,"srgb"),[s,i,l]=t.coords;let u=$e(s)*.2126729+$e(i)*.7151522+$e(l)*.072175,h=Nn(a),c=Nn(u),d=c>h;return Math.abs(c-h)<ta?n=0:d?(r=c**Xi-h**Wi,n=r*ra):(r=c**Qi-h**Ji,n=r*na),Math.abs(n)<ea?o=0:n>0?o=n-Bn:o=n+Bn,o*100}function sa(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}var ia=5e4;function aa(t,e){t=C(t),e=C(e);let r=Math.max(ce(t),0),n=Math.max(ce(e),0);return n>r&&([r,n]=[n,r]),n===0?ia:(r-n)/n}function la(t,e){t=C(t),e=C(e);let r=q(t,[U,"l"]),n=q(e,[U,"l"]);return Math.abs(r-n)}var ca=216/24389,jn=24/116,Et=24389/27,nr=T.D65,br=new g({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:nr,base:B,fromBase(t){let r=t.map((n,o)=>n/nr[o]).map(n=>n>ca?Math.cbrt(n):(Et*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>jn?Math.pow(e[0],3):(116*e[0]-16)/Et,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Et,e[2]>jn?Math.pow(e[2],3):(116*e[2]-16)/Et].map((n,o)=>n*nr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),or=Math.pow(5,.5)*.5+.5;function ua(t,e){t=C(t),e=C(e);let r=q(t,[br,"l"]),n=q(e,[br,"l"]),o=Math.abs(Math.pow(r,or)-Math.pow(n,or)),s=Math.pow(o,1/or)*Math.SQRT2-40;return s<7.5?0:s}var At=Object.freeze({__proto__:null,contrastAPCA:oa,contrastDeltaPhi:ua,contrastLstar:la,contrastMichelson:sa,contrastWCAG21:Zi,contrastWeber:aa});function ha(t,e,r={}){Xe(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(At).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}t=C(t),e=C(e);for(let s in At)if("contrast"+n.toLowerCase()===s.toLowerCase())return At[s](t,e,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Ht(t){let[e,r,n]=We(t,B),o=e+15*r+3*n;return[4*e/o,9*r/o]}function Ao(t){let[e,r,n]=We(t,B),o=e+r+n;return[e/o,r/o]}function da(t){Object.defineProperty(t.prototype,"uv",{get(){return Ht(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Ao(this)}})}var ma=Object.freeze({__proto__:null,register:da,uv:Ht,xy:Ao});function Fe(t,e,r={}){Xe(r)&&(r={method:r});let{method:n=F.deltaE,...o}=r;for(let s in Ae)if("deltae"+n.toLowerCase()===s.toLowerCase())return Ae[s](t,e,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function pa(t,e=.25){let n=[g.get("oklch","lch"),"l"];return ee(t,n,o=>o*(1+e))}function fa(t,e=.25){let n=[g.get("oklch","lch"),"l"];return ee(t,n,o=>o*(1-e))}var ga=Object.freeze({__proto__:null,darken:fa,lighten:pa});function Lo(t,e,r=.5,n={}){return[t,e]=[C(t),C(e)],se(r)==="object"&&([r,n]=[.5,r]),Je(t,e,n)(r)}function Po(t,e,r={}){let n;kr(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:i=2,maxSteps:l=1e3,...a}=r;n||([t,e]=[C(t),C(e)],n=Je(t,e,a));let u=Fe(t,e),h=o>0?Math.max(i,Math.ceil(u/o)+1):i,c=[];if(l!==void 0&&(h=Math.min(h,l)),h===1)c=[{p:.5,color:n(.5)}];else{let d=1/(h-1);c=Array.from({length:h},(p,m)=>{let y=m*d;return{p:y,color:n(y)}})}if(o>0){let d=c.reduce((p,m,y)=>{if(y===0)return 0;let w=Fe(m.color,c[y-1].color,s);return Math.max(p,w)},0);for(;d>o;){d=0;for(let p=1;p<c.length&&c.length<l;p++){let m=c[p-1],y=c[p],w=(y.p+m.p)/2,_=n(w);d=Math.max(d,Fe(_,m.color),Fe(_,y.color)),c.splice(p,0,{p:w,color:n(w)}),p++}}}return c=c.map(d=>d.color),c}function Je(t,e,r={}){if(kr(t)){let[a,u]=[t,e];return Je(...a.rangeArgs.colors,{...a.rangeArgs.options,...u})}let{space:n,outputSpace:o,progression:s,premultiplied:i}=r;t=C(t),e=C(e),t=Se(t),e=Se(e);let l={colors:[t,e],options:r};if(n?n=g.get(n):n=g.registry[F.interpolationSpace]||t.space,o=o?g.get(o):n,t=$(t,n),e=$(e,n),t=le(t),e=le(e),n.coords.h&&n.coords.h.type==="angle"){let a=r.hue=r.hue||"shorter",u=[n,"h"],[h,c]=[q(t,u),q(e,u)];isNaN(h)&&!isNaN(c)?h=c:isNaN(c)&&!isNaN(h)&&(c=h),[h,c]=Xs(a,[h,c]),ee(t,u,h),ee(e,u,c)}return i&&(t.coords=t.coords.map(a=>a*t.alpha),e.coords=e.coords.map(a=>a*e.alpha)),Object.assign(a=>{a=s?s(a):a;let u=t.coords.map((d,p)=>{let m=e.coords[p];return Ye(d,m,a)}),h=Ye(t.alpha,e.alpha,a),c={space:n,coords:u,alpha:h};return i&&(c.coords=c.coords.map(d=>d/h)),o!==n&&(c=$(c,o)),c},{rangeArgs:l})}function kr(t){return se(t)==="function"&&!!t.rangeArgs}F.interpolationSpace="lab";function ba(t){t.defineFunction("mix",Lo,{returns:"color"}),t.defineFunction("range",Je,{returns:"function<color>"}),t.defineFunction("steps",Po,{returns:"array<color>"})}var ya=Object.freeze({__proto__:null,isRange:kr,mix:Lo,range:Je,register:ba,steps:Po}),Ro=new g({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Le,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,o,s]=t,[i,l,a]=[NaN,0,(r+e)/2],u=e-r;if(u!==0){switch(l=a===0||a===1?0:(e-a)/Math.min(a,1-a),e){case n:i=(o-s)/u+(o<s?6:0);break;case o:i=(s-n)/u+2;break;case s:i=(n-o)/u+4}i=i*60}return l<0&&(i+=180,l=Math.abs(l)),i>=360&&(i-=360),[i,l*100,a*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function o(s){let i=(s+e/30)%12,l=r*Math.min(n,1-n);return n-l*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Bo=new g({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ro,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[e,o===0?0:200*(1-n/o),100*o]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n*(1-r/2);return[e,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ca=new g({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Bo,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=r+n;if(o>=1){let l=r/o;return[e,0,l*100]}let s=1-n,i=s===0?0:1-r/s;return[e,i*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),va=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],xa=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]],No=new H({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe\xAE 98 RGB compatible",white:"D65",toXYZ_M:va,fromXYZ_M:xa}),wa=new H({id:"a98rgb",cssId:"a98-rgb",name:"Adobe\xAE 98 RGB compatible",base:No,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))}),Ma=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],$a=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]],jo=new H({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:wr,toXYZ_M:Ma,fromXYZ_M:$a}),ka=1/512,Ea=16/512,_a=new H({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:jo,toBase(t){return t.map(e=>e<Ea?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=ka?e**(1/1.8):16*e)}}),Sa=new g({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:_e,fromBase(t){let[e,r,n]=t,o,s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),W(o)]},toBase(t){let[e,r,n]=t,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,o,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),Ho=T.D65,Aa=216/24389,Hn=24389/27,[Tn,In]=Ht({space:B,coords:Ho}),To=new g({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ho,base:B,fromBase(t){let e=[P(t[0]),P(t[1]),P(t[2])],r=e[1],[n,o]=Ht({space:B,coords:e});if(!Number.isFinite(n)||!Number.isFinite(o))return[0,0,0];let s=r<=Aa?Hn*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Tn),13*s*(o-In)]},toBase(t){let[e,r,n]=t;if(e===0||ie(e))return[0,0,0];r=P(r),n=P(n);let o=r/(13*e)+Tn,s=n/(13*e)+In,i=e<=8?e/Hn:Math.pow((e+16)/116,3);return[i*(9*o/(4*s)),i,i*((12-3*o-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Er=new g({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:To,fromBase(t){let[e,r,n]=t,o,s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),W(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),La=216/24389,Pa=24389/27,On=R[0][0],Dn=R[0][1],sr=R[0][2],zn=R[1][0],qn=R[1][1],ir=R[1][2],Un=R[2][0],Fn=R[2][1],ar=R[2][2];function ke(t,e,r){let n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function Bt(t){let e=Math.pow(t+16,3)/1560896,r=e>La?e:t/Pa,n=r*(284517*On-94839*sr),o=r*(838422*sr+769860*Dn+731718*On),s=r*(632260*sr-126452*Dn),i=r*(284517*zn-94839*ir),l=r*(838422*ir+769860*qn+731718*zn),a=r*(632260*ir-126452*qn),u=r*(284517*Un-94839*ar),h=r*(838422*ar+769860*Fn+731718*Un),c=r*(632260*ar-126452*Fn);return{r0s:n/s,r0i:o*t/s,r1s:n/(s+126452),r1i:(o-769860)*t/(s+126452),g0s:i/a,g0i:l*t/a,g1s:i/(a+126452),g1i:(l-769860)*t/(a+126452),b0s:u/c,b0i:h*t/c,b1s:u/(c+126452),b1i:(h-769860)*t/(c+126452)}}function Gn(t,e){let r=e/360*Math.PI*2,n=ke(t.r0s,t.r0i,r),o=ke(t.r1s,t.r1i,r),s=ke(t.g0s,t.g0i,r),i=ke(t.g1s,t.g1i,r),l=ke(t.b0s,t.b0i,r),a=ke(t.b1s,t.b1i,r);return Math.min(n,o,s,i,l,a)}var Ra=new g({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Er,gamutSpace:Le,fromBase(t){let[e,r,n]=[P(t[0]),P(t[1]),P(t[2])],o;if(e>99.9999999)o=0,e=100;else if(e<1e-8)o=0,e=0;else{let s=Bt(e),i=Gn(s,n);o=r/i*100}return[n,o,e]},toBase(t){let[e,r,n]=[P(t[0]),P(t[1]),P(t[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=Bt(n);o=Gn(s,e)/100*r}return[n,o,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});R[0][0];R[0][1];R[0][2];R[1][0];R[1][1];R[1][2];R[2][0];R[2][1];R[2][2];function Ee(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function Yn(t){let e=Ee(t.r0s,t.r0i),r=Ee(t.r1s,t.r1i),n=Ee(t.g0s,t.g0i),o=Ee(t.g1s,t.g1i),s=Ee(t.b0s,t.b0i),i=Ee(t.b1s,t.b1i);return Math.min(e,r,n,o,s,i)}var Ba=new g({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Er,gamutSpace:"self",fromBase(t){let[e,r,n]=[P(t[0]),P(t[1]),P(t[2])],o;if(e>99.9999999)o=0,e=100;else if(e<1e-8)o=0,e=0;else{let s=Bt(e),i=Yn(s);o=r/i*100}return[n,o,e]},toBase(t){let[e,r,n]=[P(t[0]),P(t[1]),P(t[2])],o;if(n>99.9999999)n=100,o=0;else if(n<1e-8)n=0,o=0;else{let s=Bt(n);o=Yn(s)/100*r}return[n,o,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Vn=203,Zn=2610/2**14,Na=2**14/2610,ja=2523/2**5,Xn=2**5/2523,Wn=3424/2**12,Jn=2413/2**7,Qn=2392/2**7,Ha=new H({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:jt,toBase(t){return t.map(function(e){return(Math.max(e**Xn-Wn,0)/(Jn-Qn*e**Xn))**Na*1e4/Vn})},fromBase(t){return t.map(function(e){let r=Math.max(e*Vn/1e4,0),n=Wn+Jn*r**Zn,o=1+Qn*r**Zn;return(n/o)**ja})}}),Kn=.17883277,eo=.28466892,to=.55991073,lr=3.7743,Ta=new H({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:jt,toBase(t){return t.map(function(e){return e<=.5?e**2/3*lr:(Math.exp((e-to)/Kn)+eo)/12*lr})},fromBase(t){return t.map(function(e){return e/=lr,e<=1/12?Math.sqrt(3*e):Kn*Math.log(12*e-eo)+to})}}),Io={};ae.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=Oo(t.W1,t.W2,t.options.method))});ae.add("chromatic-adaptation-end",t=>{t.M||(t.M=Oo(t.W1,t.W2,t.options.method))});function Tt({id:t,toCone_M:e,fromCone_M:r}){Io[t]=arguments[0]}function Oo(t,e,r="Bradford"){let n=Io[r],[o,s,i]=k(n.toCone_M,t),[l,a,u]=k(n.toCone_M,e),h=[[l/o,0,0],[0,a/s,0],[0,0,u/i]],c=k(h,n.toCone_M);return k(n.fromCone_M,c)}Tt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Tt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Tt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Tt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(T,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});T.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];var Ia=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Oa=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],Do=new H({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:T.ACES,toXYZ_M:Ia,fromXYZ_M:Oa}),_t=2**-16,cr=-.35828683,St=(Math.log2(65504)+9.72)/17.52,Da=new H({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[cr,St],name:"Red"},g:{range:[cr,St],name:"Green"},b:{range:[cr,St],name:"Blue"}},referred:"scene",base:Do,toBase(t){let e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-_t)*2:r<St?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(_t)+9.72)/17.52:e<_t?(Math.log2(_t+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),ro=Object.freeze({__proto__:null,A98RGB:wa,A98RGB_Linear:No,ACEScc:Da,ACEScg:Do,CAM16_JMh:Si,HCT:Ze,HPLuv:Ba,HSL:Ro,HSLuv:Ra,HSV:Bo,HWB:Ca,ICTCP:pr,JzCzHz:mr,Jzazbz:po,LCH:Ve,LCHuv:Er,Lab:U,Lab_D65:br,Luv:To,OKLCH:Sa,OKLab:_e,P3:_o,P3_Linear:ko,ProPhoto:_a,ProPhoto_Linear:jo,REC_2020:$o,REC_2020_Linear:jt,REC_2100_HLG:Ta,REC_2100_PQ:Ha,XYZ_ABS_D65:Mr,XYZ_D50:wr,XYZ_D65:B,sRGB:Le,sRGB_Linear:Eo}),E=class t{constructor(...e){let r;e.length===1&&(r=C(e[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=e,Object.defineProperty(this,"space",{value:g.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:l=>this.set(i,l)})}get spaceId(){return this.space.id}clone(){return new t(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=Fi(this,...e);return r.color=new t(r.color),r}static get(e,...r){return e instanceof t?e:new t(e,...r)}static defineFunction(e,r,n=r){let{instance:o=!0,returns:s}=n,i=function(...l){let a=r(...l);if(s==="color")a=t.get(a);else if(s==="function<color>"){let u=a;a=function(...h){let c=u(...h);return t.get(c)},Object.assign(a,u)}else s==="array<color>"&&(a=a.map(u=>t.get(u)));return a};e in t||(t[e]=i),o&&(t.prototype[e]=function(...l){return i(this,...l)})}static defineFunctions(e){for(let r in e)t.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(t);else for(let r in e)t.defineFunction(r,e[r])}};E.defineFunctions({get:q,getAll:We,set:ee,setAll:xr,to:$,equals:Gi,inGamut:ve,toGamut:le,distance:mo,toString:Ge});Object.assign(E,{util:Fs,hooks:ae,WHITES:T,Space:g,spaces:g.registry,parse:uo,defaults:F});for(let t of Object.keys(ro))g.register(ro[t]);for(let t in g.registry)yr(t,g.registry[t]);ae.add("colorspace-init-end",t=>{yr(t.id,t),t.aliases?.forEach(e=>{yr(e,t)})});function yr(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(E.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return g.resolveCoord([e,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,i)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:l}=g.resolveCoord([e,s]);if(l>=0)return o[l]}return Reflect.get(o,s,i)},set:(o,s,i,l)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:a}=g.resolveCoord([e,s]);if(a>=0)return o[a]=i,this.setAll(t,o),!0}return Reflect.set(o,s,i,l)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}E.extend(Ae);E.extend({deltaE:Fe});Object.assign(E,{deltaEMethods:Ae});E.extend(ga);E.extend({contrast:ha});E.extend(ma);E.extend(Vi);E.extend(ya);E.extend(At);var It=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:Y,subscribe:!0}))}render(){let r=this.context.value,n=Object.values(r.colors),o=`${Math.round(r.lightness*100)}%`,s=Math.round(r.chroma*1e3)/1e3,i=n.map(l=>{let a=Math.round(l*10)/10;return`oklch(${o} ${s} ${a}deg)`});return f`<div class="palette">
        ${i.map(l=>{let a=za(l);return f`<div style="--color: ${l}">
            ${l}
            ${a?f`<div class="palette__warning">${a}</div>`:null}
          </div>`})}
      </div>
      <div class="export-palette">
        <a href="/theme-machine/palette/?${this.buildQuery()}" class="button"
          >Export to Palette Builder &raquo;</a
        >
      </div>`}buildQuery(){let r=this.context.value,n=Object.keys(r.colors),o=`${r.lightness*100}%`,s=r.chroma,i=n.map(a=>{let u="";return["primary","complementary"].includes(a)&&s>=.12&&(u="!"),`h=${r.colors[a]}${u}`});return`l=${r.lightness}&c=${s}&${i.join("&")}`}createRenderRoot(){return this}};customElements.define("scheme-preview",It);function za(t){let e=new E(t);return e.inGamut("srgb")?null:e.inGamut("p3")?"Out of sRGB color gamut":e.inGamut("rec2020")?"Out of p3 wide color gamut":"This color is not available on any device"}var Ot=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:Y,subscribe:!0}))}render(){let r=this.context.value;return f`<input
        type="range"
        name="chroma"
        min="0"
        max="30"
        step="1"
        value="${r.chroma*100}"
        @input="${this.handleChromaChange}" />
      <input
        type="range"
        name="lightness"
        min="0"
        max="100"
        step="1"
        value="${r.lightness*100}"
        @input="${this.handleLightnessChange}" />`}handleChromaChange(r){if(!r.target)return;let n=r.target.value;this.dispatchEvent(new CustomEvent(N.ChromaChange,{bubbles:!0,detail:{value:parseInt(n,10)/100}}))}handleLightnessChange(r){if(!r.target)return;let n=r.target.value;this.dispatchEvent(new CustomEvent(N.LightnessChange,{bubbles:!0,detail:{value:parseInt(n,10)/100}}))}createRenderRoot(){return this}};customElements.define("adjustment-sliders",Ot);var Qe=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:Y,subscribe:!0}))}render(){let r=this.context.value,n=`${r.lightness*100}%`,o=r.chroma,s=r.colors.primary;return f`<form @submit=${this.handleSubmit}>
      <input
        id="primary-color-input"
        type="text"
        value="oklch(${n} ${o} ${s}deg)"
        @input="${this.handleInput}" />
      ${this.error?f`<span class="input-error">${this.error}</span>`:null}
      <button type="submit">Go</button>
    </form>`}handleInput(){this.error=null}handleSubmit(r){r.preventDefault();let n=this.querySelector("input");if(!n)return;let o=n.value;try{let s=new E(o);this.dispatchEvent(new CustomEvent(N.SetPrimaryColor,{bubbles:!0,detail:{lightness:s.oklch.l,chroma:s.oklch.c,hue:s.oklch.h}})),this.error=null}catch{this.error="Error parsing color value"}}createRenderRoot(){return this}};b(Qe,"properties",{error:{}});customElements.define("primary-color-input",Qe);function qo(){let t=new URLSearchParams(document.location.search),e=Number(t.get("l"))||.5,r=Number(t.get("c"))||.1,n=t.getAll("h").filter(s=>s.endsWith("!")),o=[];return t.getAll("h").length&&!n.length&&(o=[{name:"gray",l:e,c:.02,h:Number(t.get("h"))}]),Ga([...o,...n.map(zo(e,.04)),...t.getAll("h").map(zo(e,r))])}function zo(t,e){return r=>{let n=(parseInt(r,10)+360)%360;return{name:Fa(t,e,n),l:t,c:e,h:n}}}var qa={0:"raspberry",15:"cherry",30:"red",45:"sienna",60:"orange",75:"gold",90:"lemon",105:"yellow",120:"avocado",135:"jungle",150:"green",165:"mint",180:"seafoam",195:"teal",210:"cyan",225:"sapphire",240:"azure",255:"blue",270:"indigo",285:"violet",300:"lilac",315:"purple",330:"grape",345:"pink",360:"raspberry"},Ua={0:"dust",60:"sand",120:"stone",180:"sage",240:"slate",300:"ash",360:"dust"};function Fa(t,e,r){let n,o;return e>=.1?(o=qa,n=Math.round(r/15)*15):(o=Ua,n=Math.round(r/60)*60),o[n]||"unnamed"}function Ga(t){let e=[];return t.forEach(r=>{e.push(r.name);let n=e.filter(o=>o===r.name).length;n>1&&(r.name=`${r.name}${n}`)}),t}var Uo=(a=>(a.oklch="OKLCH",a.oklab="OKLAB",a.lch="LCH",a.lab="LAB",a.hsl="HSL",a.hwb="HWB",a.rgb="sRGB",a.hex="hex",a))(Uo||{}),G=Uo;var Ya=Symbol("palette-builder"),ue=Ya;function Fo(){return{colors:qo(),format:G.oklch}}var Go=(o=>(o.FormatChange="formatchange",o.ColorSave="colorsave",o.ColorDelete="colordelete",o.BeginEditColor="begineditcolor",o))(Go||{}),D=Go;var Dt=class extends v{constructor(){super(...arguments);b(this,"provider",new oe(this,{context:ue,initialValue:Fo()}));b(this,"handleFormatChange",r=>{let{value:n}=this.provider;this.provider.setValue({...n,format:r.detail.format})});b(this,"handleColorSave",r=>{let{value:n}=this.provider,o=r.detail,{colors:s}=n;typeof o.index>"u"||!s[o.index]?s.push({name:o.name,l:o.l,c:o.c,h:o.h}):s[o.index]={name:o.name,l:o.l,c:o.c,h:o.h},o.index===0&&document.documentElement.style.setProperty("--app-h",o.h.toString()),this.provider.setValue({...n,colors:s})});b(this,"handleColorDelete",r=>{let{value:n}=this.provider,o=n.colors.findIndex(i=>i.name===r.detail.name);if(o===-1)return;let s=[...n.colors.slice(0,o),...n.colors.slice(o+1)];s.length&&document.documentElement.style.setProperty("--app-h",s[0].h.toString()),this.provider.setValue({...n,colors:s})})}connectedCallback(){super.connectedCallback();let r={[D.FormatChange]:this.handleFormatChange,[D.ColorSave]:this.handleColorSave,[D.ColorDelete]:this.handleColorDelete};Object.keys(r).forEach(n=>{let o=r[n];this.addEventListener(n,o)})}render(){let{value:r}=this.provider;return f` <div class="l-palette-builder">
      <header class="main-header">
        <h1>Theme Machine</h1>
        <h2>Palette Builder</h2>
        <p>
          Fine-tune your color palette and generate CSS custom properties. Click
          a palette’s edit button to change its name or adjust the color.
        </p>
        <div class="main-header__logo">${we}</div>
      </header>
      <div class="l-palette-builder__input tile">
        <output-format-picker></output-format-picker>
      </div>
      <main class="tile palette-tile">
        <palette-list></palette-list>
      </main>
      <div class="l-palette-builder__styles tile">
        <styles-output></styles-output>
      </div>
      <div class="l-palette-builder__demo">
        <!-- TODO -->
      </div>
    </div>`}createRenderRoot(){return this}};customElements.define("palette-builder-app",Dt);var zt=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:ue,subscribe:!0}))}render(){return f`
      <label for="format-select">Output color format</label>
      <select id="format-select" name="format" @change="${this.handleChange}">
        <optgroup label="p3 wide gamut">
          <option value="${G.oklch}">OKLCH</option>
          <option value="${G.oklab}">OKLAB</option>
          <option value="${G.lch}">LCH</option>
          <option value="${G.lab}">LAB</option>
        </optgroup>
        <optgroup label="sRGB gamut">
          <option value="${G.hsl}">HSL</option>
          <option value="${G.hex}">hex</option>
          <option value="${G.rgb}">RGB</option>
          <option value="${G.hwb}">HWB</option>
        </optgroup>
      </select>
    `}handleChange(r){let{value:n}=r.target;this.dispatchEvent(new CustomEvent(D.FormatChange,{bubbles:!0,detail:{format:n}}))}createRenderRoot(){return this}};customElements.define("output-format-picker",zt);var qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=t=>(...e)=>({_$litDirective$:t,values:e}),Pe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var{I:Va}=Jr;var Yo=()=>document.createComment(""),Re=(t,e,r)=>{let n=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(r===void 0){let s=n.insertBefore(Yo(),o),i=n.insertBefore(Yo(),o);r=new Va(s,i,t,t.options)}else{let s=r._$AB.nextSibling,i=r._$AM,l=i!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==i._$AU&&r._$AP(a)}if(s!==o||l){let a=r._$AA;for(;a!==s;){let u=a.nextSibling;n.insertBefore(a,o),a=u}}}return r},he=(t,e,r=t)=>(t._$AI(e,r),t),Za={},Vo=(t,e=Za)=>t._$AH=e,Zo=t=>t._$AH,Ft=t=>{t._$AP?.(!1,!0);let e=t._$AA,r=t._$AB.nextSibling;for(;e!==r;){let n=e.nextSibling;e.remove(),e=n}};var Xo=(t,e,r)=>{let n=new Map;for(let o=e;o<=r;o++)n.set(t[o],o);return n},Wo=Ut(class extends Pe{constructor(t){if(super(t),t.type!==qt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);let o=[],s=[],i=0;for(let l of t)o[i]=n?n(l,i):i,s[i]=r(l,i),i++;return{values:s,keys:o}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){let o=Zo(t),{values:s,keys:i}=this.dt(e,r,n);if(!Array.isArray(o))return this.ut=i,s;let l=this.ut??(this.ut=[]),a=[],u,h,c=0,d=o.length-1,p=0,m=s.length-1;for(;c<=d&&p<=m;)if(o[c]===null)c++;else if(o[d]===null)d--;else if(l[c]===i[p])a[p]=he(o[c],s[p]),c++,p++;else if(l[d]===i[m])a[m]=he(o[d],s[m]),d--,m--;else if(l[c]===i[m])a[m]=he(o[c],s[m]),Re(t,a[m+1],o[c]),c++,m--;else if(l[d]===i[p])a[p]=he(o[d],s[p]),Re(t,o[c],o[d]),d--,p++;else if(u===void 0&&(u=Xo(i,p,m),h=Xo(l,c,d)),u.has(l[c]))if(u.has(l[d])){let y=h.get(i[p]),w=y!==void 0?o[y]:null;if(w===null){let _=Re(t,o[c]);he(_,s[p]),a[p]=_}else a[p]=he(w,s[p]),Re(t,o[c],w),o[y]=null;p++}else Ft(o[d]),d--;else Ft(o[c]),c++;for(;p<=m;){let y=Re(t,a[m+1]);he(y,s[p]),a[p++]=y}for(;c<=d;){let y=o[c++];y!==null&&Ft(y)}return this.ut=i,Vo(t,a),V}});var Jo=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <circle
    cx="12"
    cy="12"
    r="9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var Gt=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:ue,subscribe:!0}))}render(){let r=this.context.value;if(r)return f` ${r.colors.length===0?this.renderEmpty():null}
      ${Wo(r.colors,n=>n.name,(n,o)=>f`<palette-preview
          key="${o}"
          name="${n.name}"
          l="${n.l}"
          c="${n.c}"
          h="${n.h}"></palette-preview>`)}
      <div class="palette-list__add">
        <button type="button" @click="${this.addPalette}">${Jo} Add</button>
      </div>`}renderEmpty(){return f`<div style="padding-inline-start: 15px">
      <p>No colors defined.</p>
      <p>
        Choose some in the <a href="/theme-machine/wheel">Color Picker</a> or
        use the Add button below to build palettes by hand.
      </p>
    </div>`}addPalette(r){r.preventDefault(),this.dispatchEvent(new CustomEvent(D.ColorSave,{bubbles:!0,detail:this.generateNewColor()}))}generateNewColor(){let{value:r}=this.context;return{...r?.colors[0]||{l:.5,c:.1,h:264},name:this.generateName()}}generateName(){let r="new",n=2,{value:o}=this.context;for(;o&&o.colors.find(s=>s.name===r);)r=`new-${n}`,n++;return r}createRenderRoot(){return this}};customElements.define("palette-list",Gt);var Qo=Ut(class extends Pe{constructor(t){if(super(t),t.type!==qt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let r=t.element.classList;for(let n of this.st)n in e||(r.remove(n),this.st.delete(n));for(let n in e){let o=!!e[n];o===this.st.has(n)||this.nt?.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return V}});var Ko=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M18.3785 8.44975L8.9636 17.8648C8.6844 18.144 8.3288 18.3343 7.94161 18.4117L4.99988 19.0001L5.58823 16.0583C5.66566 15.6711 5.85597 15.3155 6.13517 15.0363L15.5501 5.62132M18.3785 8.44975L19.7927 7.03553C20.1832 6.64501 20.1832 6.01184 19.7927 5.62132L18.3785 4.20711C17.988 3.81658 17.3548 3.81658 16.9643 4.20711L15.5501 5.62132M18.3785 8.44975L15.5501 5.62132"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var es=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 9L15 15"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M15 9L9 15"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <circle
    cx="12"
    cy="12"
    r="9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var ts=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10 12V17"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M14 12V17"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M4 7H20"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var Xa=["98%","97%","93%","84%","80%","71%","66%","58%","53%","49%","42%","35%","27%","20%","16%","10%"],Wa=[.06,.12,.2,.24,.32,.38,.4,.42,.4,.38,.34,.3,.24,.18,.14,.1];function Yt(t,e=G.oklch){let{name:r,l:n,c:o,h:s}=t,i=new E(`oklch(${n} ${o}, ${s})`);return`${Ja(o,s,e).map((a,u)=>{let h=u<=15?u+1:"accent";return`  --${r}-${h}: ${a};`}).join(`
`)}
  --${r}-accent: ${rs(i,e)};`}function Ja(t,e,r){return Xa.map((n,o)=>rs(new E(`oklch(${n} ${Ka(Wa[o]*t)} ${e})`),r))}var Qa=["hex","rgb","hsl","hwb"];function rs(t,e){let r=Qa.includes(e)?"srgb":"p3";return e==="hex"?t.toGamut({space:r}).to("srgb").toString({format:"hex"}):t.toGamut({space:r}).to(e).toString({precision:3})}function Ka(t,e=4){e===void 0&&(e=0);var r=Math.pow(10,e);t=parseFloat((t*r).toFixed(11));var n=Math.round(t)/r;return+n.toFixed(e)}var Ke=class extends v{constructor(){super();b(this,"closeOnEdit",r=>{r.detail.name!==this.name&&this.isEditMode&&this.toggleEditMode()});this.isEditMode=!1,this.isFading=!1}connectedCallback(){super.connectedCallback(),this.form={name:this.name,l:this.l,c:this.c,h:this.h};let r=this.querySelector("form");r&&(r.style.height="0px"),(this.name==="new"||this.name.startsWith("new-"))&&(this.isEditMode=!0,this.dispatchEditEvent()),document.body.addEventListener(D.BeginEditColor,this.closeOnEdit)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener(D.BeginEditColor,this.closeOnEdit)}render(){let{isFading:r,isEditMode:n}=this,{name:o}=this.form;return f`<div
      class="swatch-row fade ${Qo({out:r,"is-expanded":n})}">
      <div class="swatch-row__main">
        <palette-swatch
          colorName=${o}
          outOfGamut="${this.isOutOfGamut()?"true":M}"></palette-swatch>
        ${n?this.renderEditForm():null}
      </div>
      <button
        type="button"
        class="icon-button"
        @click="${this.toggleEditMode}"
        disabled="${r?"true":M}">
        ${n?es:Ko}<span class="visually-hidden"
          >${n?"Cancel":"Edit"}</span
        >
      </button>
      <button
        type="button"
        class="icon-button"
        @click="${this.delete}"
        disabled="${r?"true":M}">
        ${ts}<span class="visually-hidden">Delete</span>
      </button>
    </div>`}renderEditForm(){let{key:r}=this,{name:n,l:o,c:s,h:i}=this.form,l=Yt(this.form),h=![...document.querySelectorAll("palette-preview")].filter(c=>c.key!==r).map(c=>c.name).includes(n);return f`<form class="color-edit-form" @submit="${this.save}">
        <label for="name-${r}">Name</label>
        <input
          id="name-${r}"
          type="text"
          name="name"
          value="${n}"
          required
          pattern="${h?M:`__${n}__`}"
          title="Palette name must be unique"
          @input="${this.updateForm("name")}" />
        <label for="lightness-${r}"
          >Lightness <tool-tip content="Affects accent color only"></tool-tip
        ></label>
        <input
          id="lightness-${r}"
          type="number"
          min="0"
          max="1"
          step="0.01"
          name="l"
          required
          value="${o}"
          @input="${this.updateForm("l")}" />
        <label for="chroma-${r}">Chroma</label>
        <input
          id="chroma-${r}"
          type="number"
          min="0"
          max="0.37"
          step="0.01"
          name="c"
          required
          value="${s}"
          @input="${this.updateForm("c")}" />
        <label for="hue-${r}">Hue</label>
        <input
          id="hue-${r}"
          type="number"
          name="h"
          required
          value="${i}"
          @input="${this.updateHue}" />
        <button type="submit">Save</button>
      </form>
      <style>
        palette-preview[key="${this.key}"] palette-swatch { ${l}}
      </style> `}isOutOfGamut(){let{l:r,c:n,h:o}=this.form;return!new E(`oklch(${r} ${n} ${o})`).inGamut("p3")}toggleEditMode(){this.isEditMode=!this.isEditMode,this.form={name:this.name,l:this.l,c:this.c,h:this.h},this.isEditMode&&this.dispatchEditEvent()}dispatchEditEvent(){this.dispatchEvent(new CustomEvent(D.BeginEditColor,{bubbles:!0,detail:{name:this.name}}))}save(r){r.preventDefault(),this.dispatchEvent(new CustomEvent(D.ColorSave,{bubbles:!0,detail:{index:Number(this.key),name:this.form.name,l:Number(this.form.l),c:Number(this.form.c),h:Number(this.form.h)}})),this.isEditMode=!1}updateForm(r){return n=>{n.target&&(this.form={...this.form,[r]:n.target.value})}}updateHue(r){if(!r.target)return;let n=r.target,o=Number(n.value);console.log(o),o>360?(o=o%360,n.value=o.toString()):o<0&&(o=(o+360)%360,n.value=o.toString()),this.form={...this.form,h:o}}delete(){this.isEditMode=!1,this.isFading=!0,this.style.height=`${this.scrollHeight}px`,setTimeout(()=>{this.style.height="0px"},0),setTimeout(()=>{this.isFading=!1,this.dispatchEvent(new CustomEvent(D.ColorDelete,{bubbles:!0,detail:{name:this.name}}))},300)}createRenderRoot(){return this}};b(Ke,"properties",{isEditMode:{},isFading:{},key:{},name:{reflect:!0},l:{},c:{},h:{},form:{reflect:!0}});customElements.define("palette-preview",Ke);var et=class extends v{render(){let e=this.colorName;return f`<div class="swatch" data-label="${e}">
      <div class="visually-hidden">${e}</div>
      <div style="--c: var(--${e}-1)"></div>
      <div style="--c: var(--${e}-2)"></div>
      <div style="--c: var(--${e}-3)"></div>
      <div style="--c: var(--${e}-4)"></div>
      <div style="--c: var(--${e}-5)"></div>
      <div style="--c: var(--${e}-6)"></div>
      <div style="--c: var(--${e}-7)"></div>
      <div style="--c: var(--${e}-8)"></div>
      <div style="--c: var(--${e}-9)"></div>
      <div style="--c: var(--${e}-10)"></div>
      <div style="--c: var(--${e}-11)"></div>
      <div style="--c: var(--${e}-12)"></div>
      <div style="--c: var(--${e}-13)"></div>
      <div style="--c: var(--${e}-14)"></div>
      <div style="--c: var(--${e}-15)"></div>
      <div style="--c: var(--${e}-16)"></div>
      <div
        style="--c: var(--${e}-accent);"
        class="swatch__accent"></div>
      ${this.outOfGamut?f`<div class="swatch__gamut-warning">
            <tool-tip
              content="Some colors are out of p3 gamut. Reduce chroma or adjust lightness to fix."
              icon="warning"></tool-tip>
          </div> `:null}
    </div>`}createRenderRoot(){return this}};b(et,"properties",{colorName:{},outOfGamut:{}});customElements.define("palette-swatch",et);var ns=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M9 12H15"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M9 16H12"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var os=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var tt=class extends v{constructor(){super(...arguments);b(this,"context",new L(this,{context:ue,subscribe:!0}))}render(){let r=this.getStyles();return f`<style>
        palette-swatch { ${r} }
      </style>
      <textarea rows="30" readonly>
:root {
${r}
}</textarea
      >
      <div class="output-buttons">
        <button type="button" title="Copy CSS" @click="${this.handleCopy}">
          ${ns}
          <span class="visually-hidden">Copy CSS</span>
        </button>
        <button
          type="button"
          title="Download CSS"
          @click="${this.handleDownload}">
          ${os}
          <span class="visually-hidden">Download CSS</span>
        </button>
      </div>`}handleCopy(r){r.preventDefault();try{navigator.clipboard.writeText(`:root {
${this.getStyles()}
}`)}catch{alert("Failed to copy")}}handleDownload(r){r.preventDefault();var n=document.createElement("a"),o=new Blob([`:root {
${this.getStyles()}
}`],{type:"text/css"});n.href=window.URL.createObjectURL(o),n.download="palette.css",n.click()}getStyles(){let{colors:r}=this.context.value,n=this.context.value?.format;return r.map(s=>Yt(s,n)).join(`

`)}createRenderRoot(){return this}};b(tt,"properties",{allColors:{}});customElements.define("styles-output",tt);var ss=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 10C9 9.40666 9.17595 8.82664 9.50559 8.33329C9.83524 7.83994 10.3038 7.45543 10.852 7.22836C11.4001 7.0013 12.0033 6.94189 12.5853 7.05765C13.1672 7.1734 13.7018 7.45912 14.1213 7.87868C14.5409 8.29824 14.8266 8.83279 14.9424 9.41473C15.0581 9.99667 14.9987 10.5999 14.7716 11.1481C14.5446 11.6962 14.1601 12.1648 13.6667 12.4944C13.1734 12.8241 12.5933 13 12 13V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <circle cx="12" cy="17" r="1" fill="currentColor" />
</svg>`;var is=f`<svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="17" r="1" fill="currentColor" />
  <path
    d="M12 10L12 14"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`;var as=1,rt=class extends v{constructor(){super(),this.tooltipId=`tooltip-${as}`,as++}render(){return f`<button
        type="button"
        @click="${this.preventDefault}"
        aria-describedby="${this.tooltipId}">
        ${this.getIcon()}
      </button>
      <div role="tooltip" id=${this.tooltipId}>${this.content}</div>`}getIcon(){return this.icon==="warning"?is:ss}preventDefault(e){e.preventDefault()}createRenderRoot(){return this}};b(rt,"properties",{content:{},icon:{}});customElements.define("tool-tip",rt);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=theme-machine.js.map
