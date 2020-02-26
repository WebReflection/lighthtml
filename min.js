/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";var n={};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,i=a.prototype;return i.delete=function(e){return this.has(e)&&delete e[this._]},i.get=function(e){return this.has(e)?e[this._]:void 0},i.has=function(e){return r.call(e,this._)},i.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var r=n.WeakMap,i=!1,a=function(t){var n,u=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(n)),c=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(u||c){var l={},s=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return l[t]||(l[t]=e)};if(c)a=s;else{var f=new r;a=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,s(e))}}}else i=!0;return o(t)};function o(e){return i?e:a(e)}var u,c="-"+Math.random().toFixed(6)+"%",l=!1;try{"content"in(u=e.createElement("template"))&&(u.innerHTML='<p tabindex="'+c+'"></p>',u.content.childNodes[0].getAttribute("tabindex")==c)||(c="_dt: "+c.slice(1,-1)+";",l=!0)}catch(e){}var s="\x3c!--"+c+"--\x3e",f=8,h=1,v=3,p=/^(?:style|textarea)$/i,d=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function g(e){return e.join(s).replace(C,L).replace(x,A)}var m=" \\f\\n\\r\\t",y="[^"+m+"\\/>\"'=]+",b="["+m+"]+"+y,w="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",N="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+y.replace("\\/","")+"))?)",x=new RegExp(w+b+N+"+)(["+m+"]*/?>)","g"),C=new RegExp(w+b+N+"*)(["+m+"]*/>)","g"),k=new RegExp("("+b+"\\s*=\\s*)(['\"]?)"+s+"\\2","gi");function A(e,t,n,r){return"<"+t+n.replace(k,E)+r}function E(e,t,n){return t+(n||'"')+c+(n||'"')}function L(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"}var j=function(e){var t="fragment",n="content"in i("template")?function(e){var t=i("template");return t.innerHTML=e,t.content}:function(e){var n=i(t),a=i("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;a.innerHTML="<table>"+e+"</table>",o=a.querySelectorAll(u)}else a.innerHTML=e,o=a.childNodes;return r(n,o),n};return function(e,a){return("svg"===a?function(e){var n=i(t),a=i("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function i(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),O=[].indexOf,S=function(e,t,n,r,i,a){for(var o=("selectedIndex"in t),u=o;r<i;){var c=e(n[r],1);if(t.insertBefore(c,a),o&&u&&c.selected){u=!u;var l=t.selectedIndex;t.selectedIndex=l<0?r:O.call(t.querySelectorAll("option"),c)}r++}},T=function(e,t){return e==t},_=function(e){return e},M=function(e,t,n,r,i,a,o){var u=a-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<a&&o(e[c],r[l]);)c++,l++;if(l===a)return t;t=c+1}return-1},D=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},$=function(e,t,n,r){for(;n<r;)R(e(t[n++],-1))},F=function(e,t,n){for(var r=1,i=t;r<i;){var a=(r+i)/2>>>0;n<e[a]?i=a:r=a+1}return r},H=function(e,t,n,r,i,a,o,u,c,l,s,f,h){!function(e,t,n,r,i,a,o,u,c){for(var l=[],s=e.length,f=o,h=0;h<s;)switch(e[h++]){case 0:i++,f++;break;case 1:l.push(r[i]),S(t,n,r,i++,i,f<u?t(a[f],0):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:o++;break;case-1:-1<l.indexOf(a[o])?o++:$(t,a,o++,o)}}(function(e,t,n,r,i,a,o){var u,c,l,s,f,h,v,p=n+a,d=[];e:for(u=0;u<=p;u++){if(u>50)return null;for(v=u-1,f=u?d[u-1]:[0,0],h=d[u]=[],c=-u;c<=u;c+=2){for(l=(s=c===-u||c!==u&&f[v+c-1]<f[v+c+1]?f[v+c+1]:f[v+c-1]+1)-c;s<a&&l<n&&o(r[i+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;h[u+c]=s}}var g=Array(u/2+p/2),m=g.length-1;for(u=d.length-1;u>=0;u--){for(;s>0&&l>0&&o(r[i+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!u)break;v=u-1,f=u?d[u-1]:[0,0],(c=s-l)==-u||c!==u&&f[v+c-1]<f[v+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,o,u,l,f)||function(e,t,n,r,i,a,o,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=o;for(var v=i.slice(a,o),p=t;p<n;p++){var d=v.indexOf(e[p]);if(-1<d){var g=d+a;-1<(c=F(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}}for(c=--l,--o;f[c]>o;)--c;l=u+r-c;var m=Array(l),y=s[c];for(--n;y;){for(var b=y,w=b.newi,N=b.oldi;n>w;)m[--l]=1,--n;for(;o>N;)m[--l]=-1,--o;m[--l]=0,--n,--o,y=y.prev}for(;n>=t;)m[--l]=1,--n;for(;o>=a;)m[--l]=-1,--o;return m}(n,r,i,a,o,u,c,l),e,t,n,r,o,u,s,h)},R=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var z=function(e,t,n,r){r||(r={});for(var i=r.compare||T,a=r.node||_,o=null==r.before?null:a(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&i(t[c-1],n[s-1]);)c--,s--;var h=l===c,v=f===s;if(h&&v)return n;if(h&&f<s)return S(a,e,n,f,s,D(a,t,l,u,o)),n;if(v&&l<c)return $(a,t,l,c),n;var p=c-l,d=s-f,g=-1;if(p<d){if(-1<(g=M(n,f,s,t,l,c,i)))return S(a,e,n,f,g,a(t[l],0)),S(a,e,n,g+p,s,D(a,t,c,u,o)),n}else if(d<p&&-1<(g=M(t,l,c,n,f,s,i)))return $(a,t,l,g),$(a,t,g+d,c),n;return p<2||d<2?(S(a,e,n,f,s,a(t[l],0)),$(a,t,l,c),n):p===d&&function(e,t,n,r,i,a){for(;r<i&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,i)?(S(a,e,n,f,s,D(a,t,c,u,o)),n):(H(a,e,n,f,s,d,t,l,c,p,u,i,o),n)},I=function(e,t,n,r,i){var a="importNode"in e,o=e.createDocumentFragment();return o.appendChild(e.createTextNode("g")),o.appendChild(e.createTextNode("")),(a?e.importNode(o,!0):o.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),i=t.childNodes||[],a=i.length,o=0;n&&o<a;o++)r.appendChild(e(i[o],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),W="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},Z=l?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function P(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(t,n,r,i){for(var a=t.attributes,o=[],u=[],f=Z(a,r),h=f.length,v=0;v<h;){var p,d=f[v++],g=d.value===c;if(g||1<(p=d.value.split(s)).length){var m=d.name;if(o.indexOf(m)<0){o.push(m);var y=r.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+m+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),b=a[y]||a[y.toLowerCase()];if(g)n.push(B(b,i,y,null));else{for(var w=p.length-2;w--;)r.shift();n.push(B(b,i,y,p))}}u.push(d)}}v=0;for(var N=(0<(h=u.length)&&l&&!("ownerSVGElement"in t));v<h;){var x=u[v++];N&&(x.value=""),t.removeAttribute(x.name)}var C=t.nodeName;if(/^script$/i.test(C)){var k=e.createElement(C);for(h=a.length,v=0;v<h;)k.setAttributeNode(a[v++].cloneNode(!0));k.textContent=t.textContent,t.parentNode.replaceChild(k,t)}}function q(e,t){return{type:"any",node:e,path:t}}function B(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function G(e,t){return{type:"text",node:e,path:t}}var J=new r;function K(e,t){var n=(e.convert||g)(t),r=e.transform;r&&(n=r(n));var i=j(n,e.type);X(i);var a=[];!function e(t,n,r,i){for(var a=t.childNodes,o=a.length,u=0;u<o;){var l=a[u];switch(l.nodeType){case h:var d=i.concat(u);V(l,n,r,d),e(l,n,r,d);break;case f:var g=l.textContent;if(g===c)r.shift(),n.push(p.test(t.nodeName)?G(t,i):q(l,i.concat(u)));else switch(g.slice(0,2)){case"/*":if("*/"!==g.slice(-2))break;case"👻":t.removeChild(l),u--,o--}break;case v:p.test(t.nodeName)&&W.call(l.textContent)===s&&(r.shift(),n.push(G(t,i)))}u++}}(i,a,t.slice(0),[]);var o={content:i,updates:function(n){for(var r=[],i=a.length,o=0,u=0;o<i;){var c=a[o++],l=P(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(u+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return i+=u,function(){var e=arguments.length;if(i!==e-1)throw new Error(e-1+" values instead of "+i+"\n"+t.join("${value}"));for(var a=1,o=1;a<e;){var u=r[a-o];if(u.sparse){var c=u.values,l=c[0],s=1,f=c.length;for(o+=f-2;s<f;)l+=arguments[a++]+c[s++];u.fn(l)}else u.fn(arguments[a++])}return n}}};return J.set(t,o),o}var Q=[];function U(t){var n=Q,r=X;return function(i){return n!==i&&(r=function(t,n){var r=J.get(n)||K(t,n);return r.updates(I.call(e,r.content,!0))}(t,n=i)),r.apply(null,arguments)}}function X(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===W.call(r.textContent).length&&e.removeChild(r)}}var Y=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,i){var a,o;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===a){if(!i&&o!==u)for(l in o)l in u||(r[l]="")}else i?r.value="":r.cssText="";for(l in c=i?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!i&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;a="object",i?r.value=function(e){var r,i=[];for(r in e)i.push(r.replace(t,n),":",e[r],";");return i.join("")}(o=c):o=u;break}default:o!=u&&(a="string",o=u,i?r.value=u||"":r.cssText=u||"")}}}}(),ee=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(e?t[1]:n),i.setEndAfter(r),i.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,i=0,a=r.length;i<a;i++)t.appendChild(r[i]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),te=Array.isArray,ne=Object.create,re=Object.freeze,ie=Object.keys,ae=ee.prototype.nodeType,oe=function(e,t){return e.nodeType===ae?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},ue=function(e,t){var n,r=!1,i=t.cloneNode(!0);return function(t){n!==t&&(n=t,i.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(i)),i.value=t):(i.value=t,r||(r=!0,e.setAttributeNode(i)))))}},ce=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},le=/^(?:form|list)$/i,se=[].slice;function fe(e){return this.type=e,U(this)}function he(e){return e(this)}fe.prototype={attribute:function(e,t,n){var r="svg"===this.type;switch(t){case"class":if(r)return ue(e,n);t="className";case"data":case"props":return ce(e,t);case"style":return Y(e,n,r);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),r):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!r&&!le.test(t)?ce(e,t):ue(e,n)}},any:function(e,t){var n,r={node:oe,before:e},i=this.type,a=!1;return function o(u){switch(typeof u){case"string":case"number":case"boolean":a?n!==u&&(n=u,t[0].textContent=u):(a=!0,n=u,t=z(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":o(u(e));break;case"object":case"undefined":if(null==u){a=!1,t=z(e.parentNode,t,[],r);break}default:if(a=!1,n=u,te(u))if(0===u.length)t.length&&(t=z(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":o(String(u));break;case"function":o(u.map(he,e));break;case"object":te(u[0])&&(u=u.concat.apply([],u));default:t=z(e.parentNode,t,u,r)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?o(String(u.text)):"any"in u?o(u.any):"html"in u?t=z(e.parentNode,t,se.call(j([].concat(u.html).join(""),i).childNodes),r):"length"in u&&o(se.call(u)):t=z(e.parentNode,t,11===u.nodeType?se.call(u.childNodes):[u],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(se.call(r).join("")):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};var ve=fe.prototype,pe=new r,de=function(e){return{html:ge("html",e),svg:ge("svg",e),render:function(t,n){var r="function"==typeof n?n():n,i=pe.get(t)||ye(t),a=r instanceof xe?me(e,i,r):r;return a!==i.wire&&(i.wire=a,t.textContent="",t.appendChild(a.valueOf(!0))),t}}},ge=function(e,t){var n=new r;return i.for=function(e,r){var a,o=n.get(e)||function(e){var t=ne(null);return n.set(e,t),t}(e);return o[r]||(o[r]=(a={sub:[],stack:[],wire:null},function(){return me(t,a,i.apply(null,arguments))}))},i.node=function(){return me(t,{sub:[],stack:[],wire:null},i.apply(null,arguments)).valueOf(!0)},i;function i(){return new xe(e,function(e){for(var t=arguments.length,n=[o(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments))}},me=function(e,t,n){var r=t.sub,i=t.stack,a={a:0,aLength:r.length,i:0,iLength:i.length},o=be(e,t,n,a),u=a.a,c=a.i,l=a.iLength;return u<a.aLength&&r.splice(u),c<l&&i.splice(c),o},ye=function(e){var t={sub:[],stack:[],wire:null};return pe.set(e,t),t},be=function(e,t,n,r){var i=t.stack,a=r.i,o=r.iLength,u=n.type,c=n.args,l=a===o;l&&(r.iLength=i.push({type:u,id:c[0],tag:null,wire:null})),r.i++,we(e,t,c,r);var s=i[a];return l||s.id!==c[0]||s.type!==u?(s.type=u,s.id=c[0],s.tag=new e(u),s.wire=Ne(s.tag.apply(null,c))):s.tag.apply(null,c),s.wire},we=function(e,t,n,r){for(var i=1,a=n.length;i<a;i++){var o=n[i];if("object"==typeof o&&o)if(o instanceof xe)n[i]=be(e,t,o,r);else if(te(o))for(var u=0,c=o.length;u<c;u++){var l=o[u];if("object"==typeof l&&l&&l instanceof xe){var s=t.sub,f=r.a;f===r.aLength&&(r.aLength=s.push({sub:[],stack:[],wire:null})),r.a++,o[u]=me(e,s[f],l)}}}},Ne=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new ee(t):e};function xe(e,t){this.type=e,this.args=t}re(xe);var Ce=de(fe),ke=Ce.render,Ae=Ce.html,Ee=Ce.svg;return t.LighterHole=xe,t.custom=function(e){var t=ne(ve);return ie(e).forEach(function(n){t[n]=e[n](t[n]||("convert"===n?g:String))}),n.prototype=t,de(n);function n(){return fe.apply(this,arguments)}},t.html=Ae,t.render=ke,t.svg=Ee,t}(document,{});
