/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";var n={};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var r=n.WeakMap,o=!1,a=function(t){var n,u=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom|Android)\/(\d+)/.test(n)),c=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(u||c){var l={},s=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return l[t]||(l[t]=e)};if(c)a=s;else{var f=new r;a=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,s(e))}}}else o=!0;return i(t)};function i(e){return o?e:a(e)}function u(e){for(var t=arguments.length,n=[i(e)],r=1;r<t;)n.push(arguments[r++]);return n}var c=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),l=Array.isArray,s=c.prototype.nodeType,f=("undefined"==typeof WeakSet?"undefined":typeof WeakSet)==""+void 0?function(){var e=new r;return e.add=d,e}:WeakSet;function d(e){return this.set(e,!0)}var v={};v.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return n.prototype=new n("").constructor.prototype,n;function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}}();var h=v.CustomEvent,p=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(u)}else a.innerHTML=e,i=a.childNodes;return r(n,i),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),g={};try{g.Map=Map}catch(e){g.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var m,b=g.Map,w=function(e,t,n,r,o,a){for(;r<o;)t.insertBefore(e(n[r++],1),a)},y=function(e,t){return e==t},N=function(e){return e},E=function(e,t,n,r,o,a,i){var u=a-o;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=o;c<n&&l<a&&i(e[c],r[l]);)c++,l++;if(l===a)return t;t=c+1}return-1},x=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},C=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},k=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},A=function(e,t,n,r,o,a,i,u,c,l,s,f,d){!function(e,t,n,r,o,a,i,u,c){for(var l=new b,s=e.length,f=i,d=0;d<s;)switch(e[d++]){case 0:o++,f++;break;case 1:l.set(r[o],1),w(t,n,r,o++,o,f<u?t(a[f],0):c);break;case-1:f++}for(d=0;d<s;)switch(e[d++]){case 0:i++;break;case-1:l.has(a[i])?i++:C(t,n,a,i++,i)}}(function(e,t,n,r,o,a,i){var u,c,l,s,f,d,v,h=n+a,p=[];e:for(u=0;u<=h;u++){if(u>50)return null;for(v=u-1,f=u?p[u-1]:[0,0],d=p[u]=[],c=-u;c<=u;c+=2){for(l=(s=c===-u||c!==u&&f[v+c-1]<f[v+c+1]?f[v+c+1]:f[v+c-1]+1)-c;s<a&&l<n&&i(r[o+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;d[u+c]=s}}var g=Array(u/2+h/2),m=g.length-1;for(u=p.length-1;u>=0;u--){for(;s>0&&l>0&&i(r[o+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!u)break;v=u-1,f=u?p[u-1]:[0,0],(c=s-l)==-u||c!==u&&f[v+c-1]<f[v+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,i,u,l,f)||function(e,t,n,r,o,a,i,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var d=1;d<l;d++)f[d]=i;for(var v=new b,h=a;h<i;h++)v.set(o[h],h);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=k(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}for(c=--l,--i;f[c]>i;)--c;l=u+r-c;var m=Array(l),w=s[c];for(--n;w;){for(var y=w,N=y.newi,E=y.oldi;n>N;)m[--l]=1,--n;for(;i>E;)m[--l]=-1,--i;m[--l]=0,--n,--i,w=w.prev}for(;n>=t;)m[--l]=1,--n;for(;i>=a;)m[--l]=-1,--i;return m}(n,r,o,a,i,u,c,l),e,t,n,r,i,u,s,d)},M=function(e,t,n,r){r||(r={});for(var o=r.compare||y,a=r.node||N,i=null==r.before?null:a(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&o(t[c-1],n[s-1]);)c--,s--;var d=l===c,v=f===s;if(d&&v)return n;if(d&&f<s)return w(a,e,n,f,s,x(a,t,l,u,i)),n;if(v&&l<c)return C(a,e,t,l,c),n;var h=c-l,p=s-f,g=-1;if(h<p){if(-1<(g=E(n,f,s,t,l,c,o)))return w(a,e,n,f,g,a(t[l],0)),w(a,e,n,g+h,s,x(a,t,c,u,i)),n}else if(p<h&&-1<(g=E(t,l,c,n,f,s,o)))return C(a,e,t,l,g),C(a,e,t,g+p,c),n;return h<2||p<2?(w(a,e,n,f,s,a(t[l],0)),C(a,e,t,l,c),n):h===p&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,o)?(w(a,e,n,f,s,x(a,t,c,u,i)),n):(A(a,e,n,f,s,p,t,l,c,h,u,o,i),n)},S=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),T="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},L="-"+Math.random().toFixed(6)+"%";try{"content"in(m=e.createElement("template"))&&(m.innerHTML='<p tabindex="'+L+'"></p>',m.content.childNodes[0].getAttribute("tabindex")==L)||(L="_dt: "+L.slice(1,-1)+";")}catch(e){}var O="\x3c!--"+L+"--\x3e",j=8,D=1,_=3,V=/^(?:style|textarea)$/i,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var W=" \\f\\n\\r\\t",F="[^"+W+"\\/>\"'=]+",R="["+W+"]+"+F,H="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",z="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+F.replace("\\/","")+"))?)",G=new RegExp(H+R+z+"+)(["+W+"]*/?>)","g"),Z=new RegExp(H+R+z+"*)(["+W+"]*/>)","g"),B=new RegExp("("+R+"\\s*=\\s*)(['\"]?)"+O+"\\2","gi");function P(e,t,n,r){return"<"+t+n.replace(B,I)+r}function I(e,t,n){return t+(n||'"')+L+(n||'"')}function q(e,t,n){return $.test(t)?e:"<"+t+n+"></"+t+">"}function J(e,t,n,r){return{name:r,node:t,path:n,type:e}}function K(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function Q(t,n,r,o){for(var a=new b,i=t.attributes,u=[],c=u.slice.call(i,0),l=c.length,s=0;s<l;){var f=c[s++];if(f.value===L){var d=f.name;if(!a.has(d)){var v=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=i[v]||i[v.toLowerCase()];a.set(d,h),n.push(J("attr",h,o,v))}u.push(f)}}for(l=u.length,s=0;s<l;){var p=u[s++];/^id$/i.test(p.name)?t.removeAttribute(p.name):t.removeAttributeNode(p)}var g=t.nodeName;if(/^script$/i.test(g)){var m=e.createElement(g);for(l=i.length,s=0;s<l;)m.setAttributeNode(i[s++].cloneNode(!0));m.textContent=t.textContent,t.parentNode.replaceChild(m,t)}}var U=new r,X=new r;function Y(e,t){var n=function(e){return e.join(O).replace(Z,q).replace(G,P)}(t),r=e.transform;r&&(n=r(n));var o=p(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===T.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,u=0;u<i;){var c=a[u];switch(c.nodeType){case D:var l=o.concat(u);Q(c,n,r,l),e(c,n,r,l);break;case j:var s=c.textContent;if(s===L)r.shift(),n.push(V.test(t.nodeName)?J("text",t,o):J("any",c,o.concat(u)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),u--,i--}break;case _:V.test(t.nodeName)&&T.call(c.textContent)===O&&(r.shift(),n.push(J("text",t,o)))}u++}}(o,a,t.slice(0),[]);var i={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var u=a[i++],c=K(n,u.path);switch(u.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,u.name,u.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return U.set(t,i),i}function ee(t){return function(n){var r=X.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=U.get(n)||Y(t,n),o=S.call(e,r.content,!0),a={content:o,template:n,updates:r.updates(o)};return X.set(t,a),a}(t,n)),r.updates.apply(null,arguments),r.content}}var te=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===a){if(!o&&i!==u)for(l in i)l in u||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=u;break}default:i!=u&&(a="string",i=u,o?r.value=u||"":r.cssText=u||"")}}}}();var ne={Event:h,WeakSet:f},re=function(e){var t=e.Event,n=e.WeakSet,r=!0,o=null;return function(e){return r&&(r=!r,o=new n,function(e){var r=new n,a=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var i=0,u=[],c=function(e){u.push(e),clearTimeout(i),i=setTimeout(function(){l(u.splice(i=0,u.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,o=0;o<n;o++)s((t=e[o]).removedNodes,"disconnected",a,r),s(t.addedNodes,"connected",r,a)}function s(e,n,r,o){for(var a,i=new t(n),u=e.length,c=0;c<u;1===(a=e[c++]).nodeType&&f(a,i,n,r,o));}function f(e,t,n,r,a){o.has(e)&&!r.has(e)&&(a.delete(e),r.add(e),e.dispatchEvent(t));for(var i=e.children||[],u=i.length,c=0;c<u;f(i[c++],t,n,r,a));}}(e.ownerDocument)),o.add(e),e}}(ne),oe=function(e){var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},i=t instanceof Array&&t.length;i&&(r.attributeFilter=t.slice(0));try{new MutationObserver(o).observe(e,r)}catch(t){r.handleEvent=i?a:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var o=new t("attributechanged");o.attributeName=n,o.oldValue=r,o.newValue=e.getAttribute(n),e.dispatchEvent(o)}function o(e){for(var t,n=0,o=e.length;n<o;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function a(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(ne),ae=function(e,t){return e.nodeType===s?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},ie=function(e,t){var n,r=!1,o=t.cloneNode(!0);return function(t){n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},ue=function(e,t){var n,r=t.slice(2);return"connected"===r||"disconnected"===r?re(e):"attributechanged"===r?oe(e):t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}},ce=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},le=/^(?:form|list)$/i,se=[].slice;function fe(e){return this.type=e,ee(this)}function de(e){return e(this)}fe.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return ie(e,n);t="className";case"data":case"props":return ce(e,t);case"style":return te(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?ue(e,t):t in e&&!("ownerSVGElement"in e||le.test(t))?ce(e,t):ie(e,n)}},any:function(e,t){var n,r={node:ae,before:e},o="ownerSVGElement"in e?"svg":"html",a=!1;return function i(u){switch(typeof u){case"string":case"number":case"boolean":a?n!==u&&(n=u,t[0].textContent=u):(a=!0,n=u,t=M(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":i(u(e));break;case"object":case"undefined":if(null==u){a=!1,t=M(e.parentNode,t,[],r);break}default:if(a=!1,n=u,l(u))if(0===u.length)t.length&&(t=M(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":i(String(u));break;case"function":i(u.map(de,e));break;case"object":l(u[0])&&(u=u.concat.apply([],u));default:t=M(e.parentNode,t,u,r)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?i(String(u.text)):"any"in u?i(u.any):"html"in u?t=M(e.parentNode,t,se.call(p([].concat(u.html).join(""),o).childNodes),r):"length"in u&&i(se.call(u)):t=M(e.parentNode,t,11===u.nodeType?se.call(u.childNodes):[u],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(se.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var ve=new r,he=new r,pe=null;var ge=ye("html"),me=ye("svg");function be(e,t){return e.nodeType===s?e.valueOf(t):e}function we(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),be(n.current.apply(null,arguments),!1)}}function ye(e){var t=new r;return n.for=function(n,r){var o=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){var r=[],o=null,a=new fe(e),i=function(){return a.apply(null,xe(r,1,1))};return t[n]=function(){r=u.apply(null,arguments);var e=Ne(a,i);return o||(o=Ce(e))}}(o,r)},n;function n(){var t=u.apply(null,arguments);return pe?new ke(e,t):new fe(e).apply(null,t)}}function Ne(e,t){var n,r,o=pe;(pe=ve.get(e)||(n=e,r={i:0,length:0,stack:[],update:!1},ve.set(n,r),r)).i=0;var a,i=t.call(this);if(i instanceof ke){a=be(Ee(i,0),pe.update);var u=pe,c=u.i,l=u.length,s=u.stack,f=u.update;c<l&&s.splice(pe.length=c),f&&(pe.update=!1)}else a=be(i,!1);return pe=o,a}function Ee(e,t){var n=pe,r=n.i,o=n.length,a=n.stack,i=e.type,u=e.args,c=r<o;pe.i++,c||(pe.length=a.push({l:t,kind:i,tag:null,tpl:u[0],wire:null})),xe(u,1,t+1);var l=a[r];if(c){var s=l.l,f=l.kind,d=l.tag,v=l.tpl,h=l.wire;if(s===t&&i===f&&v===u[0])return d.apply(null,u),h}var p=new fe(i),g=Ce(p.apply(null,u));return l.l=t,l.kind=i,l.tag=p,l.tpl=u[0],l.wire=g,r<1&&(pe.update=!0),g}function xe(e,t,n){for(var r=e.length;t<r;t++){var o=e[t];"object"==typeof o&&o&&(o instanceof ke?e[t]=Ee(o,n-1):l(o)&&(e[t]=xe(o,0,n++)))}return e}function Ce(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new c(t):e}function ke(e,t){this.type=e,this.args=t}return Object.freeze(ke),t.Hole=ke,t.hook=function(e){return{html:we(e,ge),svg:we(e,me)}},t.html=ge,t.render=function(e,t){var n=Ne.call(this,e,t);return he.get(e)!==n&&(he.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e},t.svg=me,t.transform=function(e){var t=fe.prototype.transform;fe.prototype.transform=t?function(n){return e(t(n))}:e},t}(document,{});
