/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";var n={};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var r=n.WeakMap,o=function(){var t=!1,n=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var a={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)}}else t=!0;return r(o)};return r;function r(e){return t?e:n(e)}}();function a(e){for(var t=arguments.length,n=[o(e)],r=1;r<t;)n.push(arguments[r++]);return n}var i=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),u=Array.isArray,c=i.prototype.nodeType,l=("undefined"==typeof WeakSet?"undefined":typeof WeakSet)==""+void 0?function(){var e=new r;return e.add=s,e}:WeakSet;function s(e){return this.set(e,!0)}var f={};f.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return n.prototype=new n("").constructor.prototype,n;function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}}();var d=f.CustomEvent,v=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(u)}else a.innerHTML=e,i=a.childNodes;return r(n,i),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),h={};try{h.Map=Map}catch(e){h.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var p,g=h.Map,m=function(e,t,n,r,o,a){if(o-r<2)t.insertBefore(e(n[r],1),a);else{for(var i=t.ownerDocument.createDocumentFragment();r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},w=function(e,t){return e==t},b=function(e){return e},y=function(e,t,n,r,o,a,i){var u=a-o;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=o;c<n&&l<a&&i(e[c],r[l]);)c++,l++;if(l===a)return t;t=c+1}return-1},N=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},E=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},x=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},C=function(e,t,n,r,o,a,i,u,c,l,s,f,d){!function(e,t,n,r,o,a,i,u,c){for(var l=new g,s=e.length,f=i,d=0;d<s;)switch(e[d++]){case 0:o++,f++;break;case 1:l.set(r[o],1),m(t,n,r,o++,o,f<u?t(a[f],0):c);break;case-1:f++}for(d=0;d<s;)switch(e[d++]){case 0:i++;break;case-1:l.has(a[i])?i++:E(t,n,a,i++,i)}}(function(e,t,n,r,o,a,i){var u,c,l,s,f,d,v,h=n+a,p=[];e:for(u=0;u<=h;u++){if(u>50)return null;for(v=u-1,f=u?p[u-1]:[0,0],d=p[u]=[],c=-u;c<=u;c+=2){for(l=(s=c===-u||c!==u&&f[v+c-1]<f[v+c+1]?f[v+c+1]:f[v+c-1]+1)-c;s<a&&l<n&&i(r[o+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;d[u+c]=s}}var g=Array(u/2+h/2),m=g.length-1;for(u=p.length-1;u>=0;u--){for(;s>0&&l>0&&i(r[o+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!u)break;v=u-1,f=u?p[u-1]:[0,0],(c=s-l)==-u||c!==u&&f[v+c-1]<f[v+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,i,u,l,f)||function(e,t,n,r,o,a,i,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var d=1;d<l;d++)f[d]=i;for(var v=new g,h=a;h<i;h++)v.set(o[h],h);for(var p=t;p<n;p++){var m=v.get(e[p]);null!=m&&-1<(c=x(f,l,m))&&(f[c]=m,s[c]={newi:p,oldi:m,prev:s[c-1]})}for(c=--l,--i;f[c]>i;)--c;l=u+r-c;var w=Array(l),b=s[c];for(--n;b;){for(var y=b,N=y.newi,E=y.oldi;n>N;)w[--l]=1,--n;for(;i>E;)w[--l]=-1,--i;w[--l]=0,--n,--i,b=b.prev}for(;n>=t;)w[--l]=1,--n;for(;i>=a;)w[--l]=-1,--i;return w}(n,r,o,a,i,u,c,l),e,t,n,r,i,u,s,d)},k=function(e,t,n,r){r||(r={});for(var o=r.compare||w,a=r.node||b,i=null==r.before?null:a(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&o(t[c-1],n[s-1]);)c--,s--;var d=l===c,v=f===s;if(d&&v)return n;if(d&&f<s)return m(a,e,n,f,s,N(a,t,l,u,i)),n;if(v&&l<c)return E(a,e,t,l,c),n;var h=c-l,p=s-f,g=-1;if(h<p){if(-1<(g=y(n,f,s,t,l,c,o)))return m(a,e,n,f,g,a(t[l],0)),m(a,e,n,g+h,s,N(a,t,c,u,i)),n}else if(p<h&&-1<(g=y(t,l,c,n,f,s,o)))return E(a,e,t,l,g),E(a,e,t,g+p,c),n;return h<2||p<2?(m(a,e,n,f,s,a(t[l],0)),E(a,e,t,l,c),n):h===p&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,o)?(m(a,e,n,f,s,N(a,t,c,u,i)),n):(C(a,e,n,f,s,p,t,l,c,h,u,o,i),n)},A=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),M="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},S="-"+Math.random().toFixed(6)+"%";"content"in(p=e.createElement("template"))&&(p.innerHTML='<p tabindex="'+S+'"></p>',p.content.childNodes[0].getAttribute("tabindex")==S)||(S="_dt: "+S.slice(1,-1)+";");var T="\x3c!--"+S+"--\x3e",D=8,L=1,O=3,j=/^(?:style|textarea)$/i,_=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var $=" \\f\\n\\r\\t",V="[ "+$+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",F="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",W="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",R=new RegExp(F+V+W+"+)([ "+$+"]*/?>)","g"),G=new RegExp(F+V+W+"*)([ "+$+"]*/>)","g"),H=new RegExp("("+V+"\\s*=\\s*)(['\"]?)"+T+"\\2","gi");function z(e,t,n,r){return"<"+t+n.replace(H,B)+r}function B(e,t,n){return t+(n||'"')+S+(n||'"')}function Z(e,t,n){return _.test(t)?e:"<"+t+n+"></"+t+">"}function P(e,t,n,r){return{name:r,node:t,path:n,type:e}}function I(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function q(t,n,r,o){for(var a=new g,i=t.attributes,u=[],c=u.slice.call(i,0),l=c.length,s=0;s<l;){var f=c[s++];if(f.value===S){var d=f.name;if(!a.has(d)){var v=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),h=i[v]||i[v.toLowerCase()];a.set(d,h),n.push(P("attr",h,o,v))}u.push(f)}}for(l=u.length,s=0;s<l;){var p=u[s++];/^id$/i.test(p.name)?t.removeAttribute(p.name):t.removeAttributeNode(p)}var m=t.nodeName;if(/^script$/i.test(m)){var w=e.createElement(m);for(l=i.length,s=0;s<l;)w.setAttributeNode(i[s++].cloneNode(!0));w.textContent=t.textContent,t.parentNode.replaceChild(w,t)}}var J=new r,K=new r;function Q(e,t){var n=function(e){return e.join(T).replace(G,Z).replace(R,z)}(t),r=e.transform;r&&(n=r(n));var o=v(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===M.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,u=0;u<i;){var c=a[u];switch(c.nodeType){case L:var l=o.concat(u);q(c,n,r,l),e(c,n,r,l);break;case D:c.textContent===S&&(r.shift(),n.push(j.test(t.nodeName)?P("text",t,o):P("any",c,o.concat(u))));break;case O:j.test(t.nodeName)&&M.call(c.textContent)===T&&(r.shift(),n.push(P("text",t,o)))}u++}}(o,a,t.slice(0),[]);var i={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var u=a[i++],c=I(n,u.path);switch(u.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,u.name,u.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return J.set(t,i),i}function U(t){return function(n){var r=K.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=J.get(n)||Q(t,n),o=A.call(e,r.content,!0),a={content:o,template:n,updates:r.updates(o)};return K.set(t,a),a}(t,n)),r.updates.apply(null,arguments),r.content}}var X=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===a){if(!o&&i!==u)for(l in i)l in u||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=u;break}default:i!=u&&(a="string",i=u,o?r.value=u||"":r.cssText=u||"")}}}}();var Y={Event:d,WeakSet:l},ee=function(e){var t="connected",n="dis"+t,r=e.Event,o=e.WeakSet,a=!0,i=new o;return function(e){return a&&(a=!a,function(e){var a=null;try{new MutationObserver(s).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,c=[],l=function(e){c.push(e),clearTimeout(u),u=setTimeout(function(){s(c.splice(u=0,c.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){l({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){l({addedNodes:[e.target],removedNodes:[]})},!0)}function s(e){a=new function(){this[t]=new o,this[n]=new o};for(var r,i=e.length,u=0;u<i;u++)f((r=e[u]).removedNodes,n,t),f(r.addedNodes,t,n);a=null}function f(e,t,n){for(var o,a=new r(t),i=e.length,u=0;u<i;1===(o=e[u++]).nodeType&&d(o,a,t,n));}function d(e,t,n,r){i.has(e)&&!a[n].has(e)&&(a[r].delete(e),a[n].add(e),e.dispatchEvent(t));for(var o=e.children||[],u=o.length,c=0;c<u;d(o[c++],t,n,r));}}(e.ownerDocument)),i.add(e),e}}(Y),te=function(e){var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},i=t instanceof Array&&t.length;i&&(r.attributeFilter=t.slice(0));try{new MutationObserver(o).observe(e,r)}catch(t){r.handleEvent=i?a:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var o=new t("attributechanged");o.attributeName=n,o.oldValue=r,o.newValue=e.getAttribute(n),e.dispatchEvent(o)}function o(e){for(var t,n=0,o=e.length;n<o;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function a(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(Y),ne=function(e,t){return e.nodeType===c?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},re=function(e,t){var n,r=!1,o=t.cloneNode(!0);return function(t){n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},oe=function(e,t){var n,r=t.slice(2);return"connected"===r||"disconnected"===r?ee(e):"attributechanged"===r?te(e):t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}},ae=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(e[t]=r,null==r&&e.removeAttribute(t)))}},ie=/^(?:form|list)$/i,ue=[].slice;function ce(e){return this.type=e,U(this)}function le(e){return e(this)}ce.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return re(e,n);t="className";case"data":case"props":return ae(e,t);case"style":return X(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"on"===t.slice(0,2)?oe(e,t):t in e&&!("ownerSVGElement"in e||ie.test(t))?ae(e,t):re(e,n)}},any:function(e,t){var n,r={node:ne,before:e},o="ownerSVGElement"in e?"svg":"html",a=!1;return function i(c){switch(typeof c){case"string":case"number":case"boolean":a?n!==c&&(n=c,t[0].textContent=c):(a=!0,n=c,t=k(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,c)],r));break;case"function":i(c(e));break;case"object":case"undefined":if(null==c){a=!1,t=k(e.parentNode,t,[],r);break}default:if(a=!1,n=c,u(c))if(0===c.length)t.length&&(t=k(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":i(String(c));break;case"function":i(c.map(le,e));break;case"object":u(c[0])&&(c=c.concat.apply([],c));default:t=k(e.parentNode,t,c,r)}else!function(e){return"ELEMENT_NODE"in e}(c)?"text"in c?i(String(c.text)):"any"in c?i(c.any):"html"in c?t=k(e.parentNode,t,ue.call(v([].concat(c.html).join(""),o).childNodes),r):"length"in c&&i(ue.call(c)):t=k(e.parentNode,t,11===c.nodeType?ue.call(c.childNodes):[c],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(ue.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var se=new r,fe=new r,de=null;var ve=me("html"),he=me("svg");function pe(e,t){return e.nodeType===c?e.valueOf(t):e}function ge(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),pe(n.current.apply(null,arguments),!1)}}function me(e){var t=new r;return n.for=function(n,r){var o=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){var r=null,o=new ce(e);return t[n]=function(){var e=o.apply(null,a.apply(null,arguments));return r||(r=be(e))}}(o,r)},n;function n(){var t=a.apply(null,arguments);return de?new ye(e,t):new ce(e).apply(null,t)}}function we(e,t){var n=de,r=n.i,o=n.length,a=n.stack,i=e.type,c=e.args,l=r<o;de.i++,l||(de.length=a.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),function e(t,n,r){for(var o=t.length;n<o;n++){var a=t[n];"object"==typeof a&&a&&(a instanceof ye?t[n]=we(a,r-1):u(a)&&(t[n]=e(a,0,r++)))}return t}(c,1,t+1);var s=a[r];if(l){var f=s.l,d=s.kind,v=s.tag,h=s.tpl,p=s.wire;if(f===t&&i===d&&h===c[0])return v.apply(null,c),p}var g=new ce(i),m=be(g.apply(null,c));return s.l=t,s.kind=i,s.tag=g,s.tpl=c[0],s.wire=m,r<1&&(de.update=!0),m}function be(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new i(t):e}function ye(e,t){this.type=e,this.args=t}return t.hook=function(e){return{html:ge(e,ve),svg:ge(e,he)}},t.html=ve,t.render=function(e,t){var n=function(e,t){var n,r,o=de;(de=se.get(e)||(n=e,r={i:0,length:0,stack:[],update:!1},se.set(n,r),r)).i=0;var a,i=t.call(this);if(i instanceof ye){a=pe(we(i,0),de.update);var u=de,c=u.i,l=u.length,s=u.stack,f=u.update;c<l&&s.splice(de.length=c),f&&(de.update=!1)}else a=pe(i,!1);return de=o,a}.call(this,e,t);return fe.get(e)!==n&&(fe.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e},t.svg=he,t.transform=function(e){var t=ce.prototype.transform;ce.prototype.transform=t?function(n){return e(t(n))}:e},t}(document,{});
