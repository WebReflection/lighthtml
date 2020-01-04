/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var t,n="-"+Math.random().toFixed(6)+"%",r=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+n+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==n)||(n="_dt: "+n.slice(1,-1)+";",r=!0)}catch(e){}var o="\x3c!--"+n+"--\x3e",a=/^(?:style|textarea)$/i,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function i(e){return e.join(o).replace(d,y).replace(p,g)}/*! (c) Andrea Giammarchi - ISC */var l=" \\f\\n\\r\\t",c="[^"+l+"\\/>\"'=]+",u="["+l+"]+"+c,f="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",h="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+c.replace("\\/","")+"))?)",p=new RegExp(f+u+h+"+)(["+l+"]*/?>)","g"),d=new RegExp(f+u+h+"*)(["+l+"]*/>)","g"),v=new RegExp("("+u+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function g(e,t,n,r){return"<"+t+n.replace(v,m)+r}function m(e,t,r){return t+(r||'"')+n+(r||'"')}function y(e,t,n){return s.test(t)?e:"<"+t+n+"></"+t+">"}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var b=function(e){var t=function(e){var t=n("template");return t.innerHTML=e,t.content};return function(e,n){return("svg"===n?r:t)(e)};function n(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var t=n("fragment"),r=n("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(t,r.firstChild.childNodes),t}}(document);const{indexOf:w}=[],x=(e,t,n,r,o,a)=>{const s="selectedIndex"in t;let i=s;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,a),s&&i&&o.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:w.call(t.querySelectorAll("option"),o)}r++}},N=(e,t)=>e==t,k=e=>e,C=(e,t,n,r,o,a,s)=>{const i=a-o;if(i<1)return-1;for(;n-t>=i;){let i=t,l=o;for(;i<n&&l<a&&s(e[i],r[l]);)i++,l++;if(l===a)return t;t=i+1}return-1},A=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,E=(e,t,n,r)=>{for(;n<r;)S(e(t[n++],-1))},L=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},j=(e,t,n,r,o,a,s,i,l,c,u,f,h)=>{((e,t,n,r,o,a,s,i,l)=>{const c=[],u=e.length;let f=s,h=0;for(;h<u;)switch(e[h++]){case 0:o++,f++;break;case 1:c.push(r[o]),x(t,n,r,o++,o,f<i?t(a[f],0):l);break;case-1:f++}for(h=0;h<u;)switch(e[h++]){case 0:s++;break;case-1:-1<c.indexOf(a[s])?s++:E(t,a,s++,s)}})(((e,t,n,r,o,a,s)=>{const i=n+a,l=[];let c,u,f,h,p,d,v;e:for(c=0;c<=i;c++){if(c>50)return null;for(v=c-1,p=c?l[c-1]:[0,0],d=l[c]=[],u=-c;u<=c;u+=2){for(h=u===-c||u!==c&&p[v+u-1]<p[v+u+1]?p[v+u+1]:p[v+u-1]+1,f=h-u;h<a&&f<n&&s(r[o+h],e[t+f]);)h++,f++;if(h===a&&f===n)break e;d[c+u]=h}}const g=Array(c/2+i/2);let m=g.length-1;for(c=l.length-1;c>=0;c--){for(;h>0&&f>0&&s(r[o+h-1],e[t+f-1]);)g[m--]=0,h--,f--;if(!c)break;v=c-1,p=c?l[c-1]:[0,0],u=h-f,u===-c||u!==c&&p[v+u-1]<p[v+u+1]?(f--,g[m--]=1):(h--,g[m--]=-1)}return g})(n,r,a,s,i,c,f)||((e,t,n,r,o,a,s,i)=>{let l=0,c=r<i?r:i;const u=Array(c++),f=Array(c);f[0]=-1;for(let e=1;e<c;e++)f[e]=s;const h=o.slice(a,s);for(let r=t;r<n;r++){const t=h.indexOf(e[r]);if(-1<t){const e=t+a;l=L(f,c,e),-1<l&&(f[l]=e,u[l]={newi:r,oldi:e,prev:u[l-1]})}}for(l=--c,--s;f[l]>s;)--l;c=i+r-l;const p=Array(c);let d=u[l];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)p[--c]=1,--n;for(;s>t;)p[--c]=-1,--s;p[--c]=0,--n,--s,d=d.prev}for(;n>=t;)p[--c]=1,--n;for(;s>=a;)p[--c]=-1,--s;return p})(n,r,o,a,s,i,l,c),e,t,n,r,s,i,u,h)},S=e=>(e.remove||T).call(e);function T(){const{parentNode:e}=this;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const O=(e,t,n,r)=>{r||(r={});const o=r.compare||N,a=r.node||k,s=null==r.before?null:a(r.before,0),i=t.length;let l=i,c=0,u=n.length,f=0;for(;c<l&&f<u&&o(t[c],n[f]);)c++,f++;for(;c<l&&f<u&&o(t[l-1],n[u-1]);)l--,u--;const h=c===l,p=f===u;if(h&&p)return n;if(h&&f<u)return x(a,e,n,f,u,A(a,t,c,i,s)),n;if(p&&c<l)return E(a,t,c,l),n;const d=l-c,v=u-f;let g=-1;if(d<v){if(g=C(n,f,u,t,c,l,o),-1<g)return x(a,e,n,f,g,a(t[c],0)),x(a,e,n,g+d,u,A(a,t,l,i,s)),n}else if(v<d&&(g=C(t,c,l,n,f,u,o),-1<g))return E(a,t,c,g),E(a,t,g+v,l),n;return d<2||v<2?(x(a,e,n,f,u,a(t[c],0)),E(a,t,c,l),n):d===v&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,c,l,o)?(x(a,e,n,f,u,A(a,t,l,i,s)),n):(j(a,e,n,f,u,v,t,c,l,d,i,o,s),n)};/*! (c) Andrea Giammarchi - ISC */var D=String.prototype.trim,M=r?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function $(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function _(e,t,a,s){for(var i=e.attributes,l=[],c=[],u=M(i,a),f=u.length,h=0;h<f;){var p,d=u[h++],v=d.value===n;if(v||1<(p=d.value.split(o)).length){var g=d.name;if(l.indexOf(g)<0){l.push(g);var m=a.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=i[m]||i[m.toLowerCase()];if(v)t.push(z(y,s,m,null));else{for(var b=p.length-2;b--;)a.shift();t.push(z(y,s,m,p))}}c.push(d)}}h=0;for(var w=(0<(f=c.length)&&r&&!("ownerSVGElement"in e));h<f;){var x=c[h++];w&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var k=document.createElement(N);for(f=i.length,h=0;h<f;)k.setAttributeNode(i[h++].cloneNode(!0));k.textContent=e.textContent,e.parentNode.replaceChild(k,e)}}function R(e,t){return{type:"any",node:e,path:t}}function z(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function H(e,t){return{type:"text",node:e,path:t}}var Z=document.importNode,F=String.prototype.trim,I=new WeakMap;function W(e,t){var r=(e.convert||i)(t),s=e.transform;s&&(r=s(r));var l=b(r,e.type);V(l);var c=[];!function e(t,r,s,i){for(var l=t.childNodes,c=l.length,u=0;u<c;){var f=l[u];switch(f.nodeType){case 1:var h=i.concat(u);_(f,r,s,h),e(f,r,s,h);break;case 8:var p=f.textContent;if(p===n)s.shift(),r.push(a.test(t.nodeName)?H(t,i):R(f,i.concat(u)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":t.removeChild(f),u--,c--}break;case 3:a.test(t.nodeName)&&D.call(f.textContent)===o&&(s.shift(),r.push(H(t,i)))}u++}}(l,c,t.slice(0),[]);var u={content:l,updates:function(n){for(var r=[],o=c.length,a=0,s=0;a<o;){var i=c[a++],l=$(n,i.path);switch(i.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var u=i.sparse,f=e.attribute(l,i.name,i.node);null===u?r.push({fn:f,sparse:!1}):(s+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return o+=s,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,s=1;a<e;){var i=r[a-s];if(i.sparse){var l=i.values,c=l[0],u=1,f=l.length;for(s+=f-2;u<f;)c+=arguments[a++]+l[u++];i.fn(c)}else i.fn(arguments[a++])}return n}}};return I.set(t,u),u}function B(e,t){var n=I.get(t)||W(e,t);return n.updates(Z.call(document,n.content,!0))}var G=[];function V(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===F.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,s;return function(i){var l,c,u,f;switch(typeof i){case"object":if(i){if("object"===a){if(!o&&s!==i)for(c in s)c in i||(r[c]="")}else o?r.value="":r.cssText="";for(c in l=o?{}:r,i)u="number"!=typeof(f=i[c])||e.test(c)?f:f+"px",!o&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(s=l):s=i;break}default:s!=i&&(a="string",s=i,o?r.value=i||"":r.cssText=i||"")}}}}(),P=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
/*! (c) Andrea Giammarchi - ISC */const{isArray:J}=Array,{create:K,freeze:Q,keys:U}=Object,X=P.prototype.nodeType,Y=(e,t)=>e.nodeType===X?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,ee=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},te=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},ne=/^(?:form|list)$/i,re=[].slice,oe=(e,t)=>e.ownerDocument.createTextNode(t);function ae(e){return this.type=e,t=this,n=G,r=V,function(e){return n!==e&&(r=B(t,n=e)),r.apply(null,arguments)};/*! (c) Andrea Giammarchi - ISC */var t,n,r}function se(e){return e(this)}ae.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return ee(e,n);t="className";case"data":case"props":return te(e,t);case"style":return q(e,n,r);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),r):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!r&&!ne.test(t)?te(e,t):ee(e,n)}},any(e,t){const n={node:Y,before:e},{type:r}=this;let o,a=!1;const s=i=>{switch(typeof i){case"string":case"number":case"boolean":a?o!==i&&(o=i,t[0].textContent=i):(a=!0,o=i,t=O(e.parentNode,t,[oe(e,i)],n));break;case"function":s(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=O(e.parentNode,t,[],n);break}default:if(a=!1,o=i,J(i))if(0===i.length)t.length&&(t=O(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":s(String(i));break;case"function":s(i.map(se,e));break;case"object":J(i[0])&&(i=i.concat.apply([],i));default:t=O(e.parentNode,t,i,n)}else(e=>"ELEMENT_NODE"in e)(i)?t=O(e.parentNode,t,11===i.nodeType?re.call(i.childNodes):[i],n):"text"in i?s(String(i.text)):"any"in i?s(i.any):"html"in i?t=O(e.parentNode,t,re.call(b([].concat(i.html).join(""),r).childNodes),n):"length"in i&&s(re.call(i))}};return s},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(re.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const ie=ae.prototype,le=new WeakMap,ce=e=>({html:ue("html",e),svg:ue("svg",e),render(t,n){const r="function"==typeof n?n():n,o=le.get(t)||he(t),a=r instanceof ge?fe(e,o,r):r;return a!==o.wire&&(o.wire=a,t.textContent="",t.appendChild(a.valueOf(!0))),t}}),ue=(e,t)=>{const n=new WeakMap;return r.for=(e,o)=>{const a=n.get(e)||(e=>{const t=K(null);return n.set(e,t),t})(e);return a[o]||(a[o]=(s={sub:[],stack:[],wire:null},function(){return fe(t,s,r.apply(null,arguments))}));var s},r.node=function(){return fe(t,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new ge(e,arguments)}},fe=(e,t,n)=>{const{sub:r,stack:o}=t,a={a:0,aLength:r.length,i:0,iLength:o.length},s=pe(e,t,n,a),{a:i,i:l,aLength:c,iLength:u}=a;return i<c&&r.splice(i),l<u&&o.splice(l),s},he=e=>{const t={sub:[],stack:[],wire:null};return le.set(e,t),t},pe=(e,t,n,r)=>{const{stack:o}=t,{i:a,iLength:s}=r,{type:i,args:l}=n,c=a===s;c&&(r.iLength=o.push({type:i,id:l[0],tag:null,wire:null})),r.i++,de(e,t,l,r);const u=o[a];return c||u.id!==l[0]||u.type!==i?(u.type=i,u.id=l[0],u.tag=new e(i),u.wire=ve(u.tag.apply(null,l))):u.tag.apply(null,l),u.wire},de=(e,t,n,r)=>{for(let o=1,{length:a}=n;o<a;o++){const a=n[o];if("object"==typeof a&&a)if(a instanceof ge)n[o]=pe(e,t,a,r);else if(J(a))for(let n=0,{length:o}=a;n<o;n++){const o=a[n];if("object"==typeof o&&o&&o instanceof ge){const{sub:s}=t,{a:i,aLength:l}=r;i===l&&(r.aLength=s.push({sub:[],stack:[],wire:null})),r.a++,a[n]=fe(e,s[i],o)}}}},ve=e=>{const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new P(t):e};function ge(e,t){this.type=e,this.args=t}Q(ge);const{render:me,html:ye,svg:be}=ce(ae);return e.Hole=ge,e.custom=e=>{const t=K(ie);return U(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?i:String))}),n.prototype=t,ce(n);function n(){return ae.apply(this,arguments)}},e.html=ye,e.render=me,e.svg=be,e}({});
