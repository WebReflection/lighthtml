/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var t,n="-"+Math.random().toFixed(6)+"%",r=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+n+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==n)||(n="_dt: "+n.slice(1,-1)+";",r=!0)}catch(e){}var o="\x3c!--"+n+"--\x3e",a=/^(?:style|textarea)$/i,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function i(e){return e.join(o).replace(h,y).replace(d,g)}/*! (c) Andrea Giammarchi - ISC */var c=" \\f\\n\\r\\t",l="[^"+c+"\\/>\"'=]+",u="["+c+"]+"+l,f="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+l.replace("\\/","")+"))?)",d=new RegExp(f+u+p+"+)(["+c+"]*/?>)","g"),h=new RegExp(f+u+p+"*)(["+c+"]*/>)","g"),v=new RegExp("("+u+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function g(e,t,n,r){return"<"+t+n.replace(v,m)+r}function m(e,t,r){return t+(r||'"')+n+(r||'"')}function y(e,t,n){return s.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:w}=Array,{indexOf:b,slice:x}=[];var N=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const C=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,k=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=x.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi - ISC */var A=function(e){var t=function(e){var t=n("template");return t.innerHTML=e,t.content};return function(e,n){return("svg"===n?r:t)(e)};function n(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var t=n("fragment"),r=n("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(t,r.firstChild.childNodes),t}}(document);const E=(e,t,n,r,o,a)=>{const s="selectedIndex"in t;let i=s;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,a),s&&i&&o.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:b.call(t.querySelectorAll("option"),o)}r++}},S=(e,t)=>e==t,T=e=>e,j=(e,t,n,r,o,a,s)=>{const i=a-o;if(i<1)return-1;for(;n-t>=i;){let i=t,c=o;for(;i<n&&c<a&&s(e[i],r[c]);)i++,c++;if(c===a)return t;t=i+1}return-1},L=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,O=(e,t,n,r)=>{for(;n<r;)H(e(t[n++],-1))},M=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},$=(e,t,n,r,o,a,s,i,c,l,u,f,p)=>{((e,t,n,r,o,a,s,i,c)=>{const l=[],u=e.length;let f=s,p=0;for(;p<u;)switch(e[p++]){case 0:o++,f++;break;case 1:l.push(r[o]),E(t,n,r,o++,o,f<i?t(a[f],0):c);break;case-1:f++}for(p=0;p<u;)switch(e[p++]){case 0:s++;break;case-1:-1<l.indexOf(a[s])?s++:O(t,a,s++,s)}})(((e,t,n,r,o,a,s)=>{const i=n+a,c=[];let l,u,f,p,d,h,v;e:for(l=0;l<=i;l++){if(l>50)return null;for(v=l-1,d=l?c[l-1]:[0,0],h=c[l]=[],u=-l;u<=l;u+=2){for(p=u===-l||u!==l&&d[v+u-1]<d[v+u+1]?d[v+u+1]:d[v+u-1]+1,f=p-u;p<a&&f<n&&s(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;h[l+u]=p}}const g=Array(l/2+i/2);let m=g.length-1;for(l=c.length-1;l>=0;l--){for(;p>0&&f>0&&s(r[o+p-1],e[t+f-1]);)g[m--]=0,p--,f--;if(!l)break;v=l-1,d=l?c[l-1]:[0,0],u=p-f,u===-l||u!==l&&d[v+u-1]<d[v+u+1]?(f--,g[m--]=1):(p--,g[m--]=-1)}return g})(n,r,a,s,i,l,f)||((e,t,n,r,o,a,s,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=s;const p=o.slice(a,s);for(let r=t;r<n;r++){const t=p.indexOf(e[r]);if(-1<t){const e=t+a;c=M(f,l,e),-1<c&&(f[c]=e,u[c]={newi:r,oldi:e,prev:u[c-1]})}}for(c=--l,--s;f[c]>s;)--c;l=i+r-c;const d=Array(l);let h=u[c];for(--n;h;){const{newi:e,oldi:t}=h;for(;n>e;)d[--l]=1,--n;for(;s>t;)d[--l]=-1,--s;d[--l]=0,--n,--s,h=h.prev}for(;n>=t;)d[--l]=1,--n;for(;s>=a;)d[--l]=-1,--s;return d})(n,r,o,a,s,i,c,l),e,t,n,r,s,i,u,p)},H=e=>(e.remove||D).call(e);function D(){const{parentNode:e}=this;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const R=(e,t,n,r)=>{r||(r={});const o=r.compare||S,a=r.node||T,s=null==r.before?null:a(r.before,0),i=t.length;let c=i,l=0,u=n.length,f=0;for(;l<c&&f<u&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&o(t[c-1],n[u-1]);)c--,u--;const p=l===c,d=f===u;if(p&&d)return n;if(p&&f<u)return E(a,e,n,f,u,L(a,t,l,i,s)),n;if(d&&l<c)return O(a,t,l,c),n;const h=c-l,v=u-f;let g=-1;if(h<v){if(g=j(n,f,u,t,l,c,o),-1<g)return E(a,e,n,f,g,a(t[l],0)),E(a,e,n,g+h,u,L(a,t,c,i,s)),n}else if(v<h&&(g=j(t,l,c,n,f,u,o),-1<g))return O(a,t,l,g),O(a,t,g+v,c),n;return h<2||v<2?(E(a,e,n,f,u,a(t[l],0)),O(a,t,l,c),n):h===v&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,o)?(E(a,e,n,f,u,L(a,t,c,i,s)),n):($(a,e,n,f,u,v,t,l,c,h,i,o,s),n)};
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var z=function(e){var t=function(e){var t=n("template");return t.innerHTML=e,t.content};return function(e,n){return("svg"===n?r:t)(e)};function n(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var t=n("fragment"),r=n("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(t,r.firstChild.childNodes),t}}(document),Z=String.prototype.trim,_=r?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function F(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function I(e,t,a,s){for(var i=e.attributes,c=[],l=[],u=_(i,a),f=u.length,p=0;p<f;){var d,h=u[p++],v=h.value===n;if(v||1<(d=h.value.split(o)).length){var g=h.name;if(c.indexOf(g)<0){c.push(g);var m=a.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=i[m]||i[m.toLowerCase()];if(v)t.push(G(y,s,m,null));else{for(var w=d.length-2;w--;)a.shift();t.push(G(y,s,m,d))}}l.push(h)}}p=0;for(var b=(0<(f=l.length)&&r&&!("ownerSVGElement"in e));p<f;){var x=l[p++];b&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var C=document.createElement(N);for(f=i.length,p=0;p<f;)C.setAttributeNode(i[p++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function W(e,t){return{type:"any",node:e,path:t}}function G(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function V(e,t){return{type:"text",node:e,path:t}}var q=document.importNode,B=String.prototype.trim,P=N(new WeakMap);function J(e,t){var r=(e.convert||i)(t),s=e.transform;s&&(r=s(r));var c=z(r,e.type);U(c);var l=[];return function e(t,r,s,i){for(var c=t.childNodes,l=c.length,u=0;u<l;){var f=c[u];switch(f.nodeType){case 1:var p=i.concat(u);I(f,r,s,p),e(f,r,s,p);break;case 8:var d=f.textContent;if(d===n)s.shift(),r.push(a.test(t.nodeName)?V(t,i):W(f,i.concat(u)));else switch(d.slice(0,2)){case"/*":if("*/"!==d.slice(-2))break;case"👻":t.removeChild(f),u--,l--}break;case 3:a.test(t.nodeName)&&Z.call(f.textContent)===o&&(s.shift(),r.push(V(t,i)))}u++}}(c,l,t.slice(0),[]),{content:c,updates:function(n){for(var r=[],o=l.length,a=0,s=0;a<o;){var i=l[a++],c=F(n,i.path);switch(i.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=i.sparse,f=e.attribute(c,i.name,i.node);null===u?r.push({fn:f,sparse:!1}):(s+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return o+=s,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,s=1;a<e;){var i=r[a-s];if(i.sparse){var c=i.values,l=c[0],u=1,f=c.length;for(s+=f-2;u<f;)l+=arguments[a++]+c[u++];i.fn(l)}else i.fn(arguments[a++])}return n}}}}function K(e,t){var n=P.get(t)||P.set(t,J(e,t));return n.updates(q.call(document,n.content,!0))}var Q=[];function U(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===B.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var X=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,s;return function(i){var c,l,u,f;switch(typeof i){case"object":if(i){if("object"===a){if(!o&&s!==i)for(l in s)l in i||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,i)u="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(s=c):s=i;break}default:s!=i&&(a="string",s=i,o?r.value=i||"":r.cssText=i||"")}}}}();const Y=(e,t)=>{let n,r=!0;const o=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}},ee=(e,t)=>n=>{e[t]=n},te=/^(?:form|list)$/i,ne=(e,t)=>e.ownerDocument.createTextNode(t);function re(e){return this.type=e,t=this,n=Q,r=U,function(e){return n!==e&&(r=K(t,n=e)),r.apply(null,arguments)};var t,n,r}function oe(e){return e(this)}re.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return Y(e,t);t="className";case"props":return ee(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"data":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);case"style":return X(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);default:return"."===t.slice(0,1)?ee(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const o=w(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}})(e,t):!(t in e)||r||te.test(t)?Y(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const n={node:C,before:e},{type:r}=this;let o,a=!1;const s=i=>{switch(typeof i){case"string":case"number":case"boolean":a?o!==i&&(o=i,t[0].textContent=i):(a=!0,o=i,t=R(e.parentNode,t,[ne(e,i)],n));break;case"function":s(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=R(e.parentNode,t,[],n);break}default:if(a=!1,o=i,w(i))if(0===i.length)t.length&&(t=R(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":s(String(i));break;case"function":s(i.map(oe,e));break;case"object":w(i[0])&&(i=i.concat.apply([],i));default:t=R(e.parentNode,t,i,n)}else"ELEMENT_NODE"in i?t=R(e.parentNode,t,11===i.nodeType?x.call(i.childNodes):[i],n):"text"in i?s(String(i.text)):"any"in i?s(i.any):"html"in i?t=R(e.parentNode,t,x.call(A([].concat(i.html).join(""),r).childNodes),n):"length"in i&&s(x.call(i))}};return s},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(x.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ae,freeze:se,keys:ie}=Object,ce=re.prototype,le=N(new WeakMap),ue=e=>({html:pe("html",e),svg:pe("svg",e),render(t,n){const r="function"==typeof n?n():n,o=le.get(t)||le.set(t,fe()),a=r instanceof ve?de(e,o,r):r;return a!==o.wire&&(o.wire=a,t.textContent="",t.appendChild(a.valueOf())),t}}),fe=()=>({stack:[],entry:null,wire:null}),pe=(e,t)=>{const n=N(new WeakMap);return r.for=(e,o)=>{const a=n.get(e)||n.set(e,ae(null));return a[o]||(a[o]=(s=fe(),function(){return de(t,s,r.apply(null,arguments))}));var s},r.node=function(){return de(t,fe(),r.apply(null,arguments)).valueOf()},r;function r(){return new ve(e,arguments)}},de=(e,t,{type:n,template:r,values:o})=>{const{length:a}=o;he(e,t,o,a);let{entry:s}=t;if(s&&s.template===r&&s.type===n)s.tag(r,...o);else{const a=new e(n);t.entry=s={type:n,template:r,tag:a,wire:k(a(r,...o))}}return s.wire},he=(e,{stack:t},n,r)=>{for(let o=0;o<r;o++){const r=n[o];r instanceof ge?n[o]=de(e,t[o]||(t[o]=fe()),r):w(r)?he(e,t[o]||(t[o]=fe()),r,r.length):t[o]=null}r<t.length&&t.splice(r)};function ve(e,t){this.type=e,this.template=t.shift(),this.values=t}se(ve);const ge=ve,{render:me,html:ye,svg:we}=ue(re);return e.Hole=ge,e.custom=e=>{const t=ae(ce);return ie(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?i:String))}),n.prototype=t,ue(n);function n(){return re.apply(this,arguments)}},e.html=ye,e.render=me,e.svg=we,e}({});
