!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}({"./config/polyfills.js":function(e,t,n){"undefined"==typeof Promise&&(n("./node_modules/promise/lib/rejection-tracking.js").enable(),window.Promise=n("./node_modules/promise/lib/es6-extensions.js")),n("./node_modules/whatwg-fetch/fetch.js"),Object.assign=n("./node_modules/object-assign/index.js")},"./node_modules/asap/browser-raw.js":function(p,e,t){"use strict";(function(e){function t(e){r.length||(n(),!0),r[r.length]=e}p.exports=t;var n,r=[],o=0;function i(){for(;o<r.length;){var e=o;if(o+=1,r[e].call(),1024<o){for(var t=0,n=r.length-o;t<n;t++)r[t]=r[t+o];r.length-=o,o=0}}r.length=0,o=0,!1}var a,s,u,l=void 0!==e?e:self,c=l.MutationObserver||l.WebKitMutationObserver;function f(r){return function(){var e=setTimeout(n,0),t=setInterval(n,50);function n(){clearTimeout(e),clearInterval(t),r()}}}n="function"==typeof c?(a=1,s=new c(i),u=document.createTextNode(""),s.observe(u,{characterData:!0}),function(){a=-a,u.data=a}):f(i),t.requestFlush=n,t.makeRequestCallFromTimer=f}).call(this,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/object-assign/index.js":function(e,t,n){"use strict";var u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))l.call(n,a)&&(o[a]=n[a]);if(u){r=u(n);for(var s=0;s<r.length;s++)c.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o}},"./node_modules/promise/lib/core.js":function(e,t,n){"use strict";var o=n("./node_modules/asap/browser-raw.js");function a(){}var i=null,s={};function u(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("Promise constructor's argument is not a function");this._h=0,this._i=0,this._j=null,this._k=null,e!==a&&d(e,this)}function l(e,t){for(;3===e._i;)e=e._j;if(u._l&&u._l(e),0===e._i)return 0===e._h?(e._h=1,void(e._k=t)):1===e._h?(e._h=2,void(e._k=[e._k,t])):void e._k.push(t);var n,r;n=e,r=t,o(function(){var e=1===n._i?r.onFulfilled:r.onRejected;if(null!==e){var t=function(e,t){try{return e(t)}catch(e){return i=e,s}}(e,n._j);t===s?f(r.promise,i):c(r.promise,t)}else 1===n._i?c(r.promise,n._j):f(r.promise,n._j)})}function c(e,t){if(t===e)return f(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=function(e){try{return e.then}catch(e){return i=e,s}}(t);if(n===s)return f(e,i);if(n===e.then&&t instanceof u)return e._i=3,e._j=t,void r(e);if("function"==typeof n)return void d(n.bind(t),e)}e._i=1,e._j=t,r(e)}function f(e,t){e._i=2,e._j=t,u._m&&u._m(e,t),r(e)}function r(e){if(1===e._h&&(l(e,e._k),e._k=null),2===e._h){for(var t=0;t<e._k.length;t++)l(e,e._k[t]);e._k=null}}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1,r=function(e,t,n){try{e(t,n)}catch(e){return i=e,s}}(e,function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,f(t,e))});n||r!==s||(n=!0,f(t,i))}(e.exports=u)._l=null,u._m=null,u._n=a,u.prototype.then=function(e,t){if(this.constructor!==u)return o=e,i=t,new(r=this).constructor(function(e,t){var n=new u(a);n.then(e,t),l(r,new p(o,i,n))});var r,o,i,n=new u(a);return l(this,new p(e,t,n)),n}},"./node_modules/promise/lib/es6-extensions.js":function(e,t,n){"use strict";var u=n("./node_modules/promise/lib/core.js");e.exports=u;var r=c(!0),o=c(!1),i=c(null),a=c(void 0),s=c(0),l=c("");function c(e){var t=new u(u._n);return t._i=1,t._j=e,t}u.resolve=function(e){if(e instanceof u)return e;if(null===e)return i;if(void 0===e)return a;if(!0===e)return r;if(!1===e)return o;if(0===e)return s;if(""===e)return l;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new u(t.bind(e))}catch(n){return new u(function(e,t){t(n)})}return c(e)},u.all=function(e){var s=Array.prototype.slice.call(e);return new u(function(r,o){if(0===s.length)return r([]);var i=s.length;function a(t,e){if(e&&("object"==typeof e||"function"==typeof e)){if(e instanceof u&&e.then===u.prototype.then){for(;3===e._i;)e=e._j;return 1===e._i?a(t,e._j):(2===e._i&&o(e._j),void e.then(function(e){a(t,e)},o))}var n=e.then;if("function"==typeof n)return void new u(n.bind(e)).then(function(e){a(t,e)},o)}s[t]=e,0==--i&&r(s)}for(var e=0;e<s.length;e++)a(e,s[e])})},u.reject=function(n){return new u(function(e,t){t(n)})},u.race=function(e){return new u(function(t,n){e.forEach(function(e){u.resolve(e).then(t,n)})})},u.prototype.catch=function(e){return this.then(null,e)}},"./node_modules/promise/lib/rejection-tracking.js":function(e,t,n){"use strict";var s=n("./node_modules/promise/lib/core.js"),u=[ReferenceError,TypeError,RangeError],l=!1;function c(){l=!1,s._l=null,s._m=null}function f(t,e){return e.some(function(e){return t instanceof e})}t.disable=c,t.enable=function(r){r=r||{},l&&c();l=!0;var n=0,o=0,i={};function a(e){var t,n;(r.allRejections||f(i[e].error,r.whitelist||u))&&(i[e].displayId=o++,r.onUnhandled?(i[e].logged=!0,r.onUnhandled(i[e].displayId,i[e].error)):(i[e].logged=!0,t=i[e].displayId,n=i[e].error,console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((n&&(n.stack||n))+"").split("\n").forEach(function(e){console.warn("  "+e)})))}s._l=function(e){var t;2===e._i&&i[e._o]&&(i[e._o].logged?(t=e._o,i[t].logged&&(r.onHandled?r.onHandled(i[t].displayId,i[t].error):i[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+i[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+i[t].displayId+".")))):clearTimeout(i[e._o].timeout),delete i[e._o])},s._m=function(e,t){0===e._h&&(e._o=n++,i[e._o]={displayId:null,error:t,timeout:setTimeout(a.bind(null,e._o),f(t,u)?100:2e3),logged:!1})}}},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./node_modules/whatwg-fetch/fetch.js":function(e,t,n){"use strict";n.r(t),n.d(t,"Headers",function(){return l}),n.d(t,"Request",function(){return m}),n.d(t,"Response",function(){return v}),n.d(t,"DOMException",function(){return g}),n.d(t,"fetch",function(){return w});var s={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(s.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(e){return e&&-1<r.indexOf(Object.prototype.toString.call(e))};function i(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s.iterable&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function c(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(n){return new Promise(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function p(e){var t=new FileReader,n=f(t);return t.readAsArrayBuffer(e),n}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var t;(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:s.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s.arrayBuffer&&s.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=d(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var e=c(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,n,r=c(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=f(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(e,t){e=i(e),t=a(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},l.prototype.delete=function(e){delete this.map[i(e)]},l.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},l.prototype.set=function(e,t){this.map[i(e)]=a(t)},l.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},l.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),u(n)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},l.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),u(n)},s.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){var n,r,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<y.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){if(e){var t=e.split("="),n=t.shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," ");o.append(decodeURIComponent(n),decodeURIComponent(r))}}),o}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},h.call(m.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];v.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})};var g=self.DOMException;try{new g}catch(e){(g=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function w(o,a){return new Promise(function(r,e){var t=new m(o,a);if(t.signal&&t.signal.aborted)return e(new g("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new l,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t=e.split(":"),n=t.shift().trim();if(n){var r=t.join(":").trim();o.append(n,r)}}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new v(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.onabort=function(){e(new g("Aborted","AbortError"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&s.blob&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=l,self.Request=m,self.Response=v)},"./src/index.js":function(e,t,n){"use strict";n.r(t);var u=function(){},O={},l=[],c=[];function i(e,t){var n,r,o,i,a=c;for(i=arguments.length;2<i--;)l.push(arguments[i]);for(t&&null!=t.children&&(l.length||l.push(t.children),delete t.children);l.length;)if((r=l.pop())&&void 0!==r.pop)for(i=r.length;i--;)l.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?a[a.length-1]+=r:a===c?a=[r]:a.push(r),n=o;var s=new u;return s.nodeName=e,s.children=a,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==O.vnode&&O.vnode(s),s}function T(e,t){for(var n in t)e[n]=t[n];return e}function f(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var r="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,o=[];function a(e){!e._dirty&&(e._dirty=!0)&&1==o.push(e)&&(O.debounceRendering||r)(s)}function s(){for(var e;e=o.pop();)e._dirty&&L(e)}function P(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function k(e){var t=T({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function E(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)f(n,null),f(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,d,a):e.removeEventListener(t,d,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e){return this._listeners[e.type](O.event&&O.event(e)||e)}var C=[],B=0,m=!1,b=!1;function N(){for(var e;e=C.shift();)O.afterMount&&O.afterMount(e),e.componentDidMount&&e.componentDidMount()}function A(e,t,n,r,o,i){B++||(m=null!=o&&void 0!==o.ownerSVGElement,b=null!=e&&!("__preactattr_"in e));var a=U(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--B||(b=!1,i||N()),a}function U(e,t,n,r,o){var i=e,a=m;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),I(e,!0))),i.__preactattr_=!0,i;var s,u,l=t.nodeName;if("function"==typeof l)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,l=k(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(D(o,l,3,n,r),e=o.base):(i&&!s&&(F(i),e=a=null),o=R(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,a=null),D(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,I(a,!1)));return e}(e,t,n,r);if(m="svg"===l||"foreignObject"!==l&&m,l=String(l),(!e||!P(e,l))&&(s=l,(u=m?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=u,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),I(e,!0)}var c=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!b&&p&&1===p.length&&"string"==typeof p[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=p[0]&&(c.nodeValue=p[0]):(p&&p.length||null!=c)&&function(e,t,n,r,o){var i,a,s,u,l,c=e.childNodes,f=[],p={},d=0,h=0,y=c.length,m=0,b=t?t.length:0;if(0!==y)for(var v=0;v<y;v++){var _=c[v],g=_.__preactattr_,w=b&&g?_._component?_._component.__key:g.key:null;null!=w?(d++,p[w]=_):(g||(void 0!==_.splitText?!o||_.nodeValue.trim():o))&&(f[m++]=_)}if(0!==b)for(var v=0;v<b;v++){u=t[v],l=null;var w=u.key;if(null!=w)d&&void 0!==p[w]&&(l=p[w],p[w]=void 0,d--);else if(h<m)for(i=h;i<m;i++)if(void 0!==f[i]&&(x=a=f[i],S=o,"string"==typeof(j=u)||"number"==typeof j?void 0!==x.splitText:"string"==typeof j.nodeName?!x._componentConstructor&&P(x,j.nodeName):S||x._componentConstructor===j.nodeName)){l=a,f[i]=void 0,i===m-1&&m--,i===h&&h++;break}l=U(l,u,n,r),s=c[v],l&&l!==e&&l!==s&&(null==s?e.appendChild(l):l===s.nextSibling?E(s):e.insertBefore(l,s))}var x,j,S;if(d)for(var v in p)void 0!==p[v]&&I(p[v],!1);for(;h<=m;)void 0!==(l=f[m--])&&I(l,!1)}(i,p,n,r,b||null!=f.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,m);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],m)}(i,t.attributes,f),m=a,i}function I(e,t){var n=e._component;n?F(n):(null!=e.__preactattr_&&f(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||E(e),h(e))}function h(e){for(e=e.lastChild;e;){var t=e.previousSibling;I(e,!0),e=t}}var v=[];function R(e,t,n){var r,o=v.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),g.call(r,t,n)):((r=new g(t,n)).constructor=e,r.render=_);o--;)if(v[o].constructor===e)return r.nextBase=v[o].nextBase,v.splice(o,1),r;return r}function _(e,t,n){return this.constructor(e,n)}function D(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===O.syncComponentUpdates&&e.base?a(e):L(e,1,o)),f(e.__ref,e))}function L(e,t,n,r){if(!e._disable){var o,i,a,s=e.props,u=e.state,l=e.context,c=e.prevProps||s,f=e.prevState||u,p=e.prevContext||l,d=e.base,h=e.nextBase,y=d||h,m=e._component,b=!1,v=p;if(e.constructor.getDerivedStateFromProps&&(u=T(T({},u),e.constructor.getDerivedStateFromProps(s,u)),e.state=u),d&&(e.props=c,e.state=f,e.context=p,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,u,l)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(s,u,l),e.props=s,e.state=u,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){o=e.render(s,u,l),e.getChildContext&&(l=T(T({},l),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(v=e.getSnapshotBeforeUpdate(c,f));var _,g,w=o&&o.nodeName;if("function"==typeof w){var x=k(o);(i=m)&&i.constructor===w&&x.key==i.__key?D(i,x,1,l,!1):(_=i,e._component=i=R(w,x,l),i.nextBase=i.nextBase||h,i._parentComponent=e,D(i,x,0,l,!1),L(i,1,n,!0)),g=i.base}else a=y,(_=m)&&(a=e._component=null),(y||1===t)&&(a&&(a._component=null),g=A(a,o,l,n||!d,y&&y.parentNode,!0));if(y&&g!==y&&i!==m){var j=y.parentNode;j&&g!==j&&(j.replaceChild(g,y),_||(y._component=null,I(y,!1)))}if(_&&F(_),(e.base=g)&&!r){for(var S=e,P=e;P=P._parentComponent;)(S=P).base=g;g._component=S,g._componentConstructor=S.constructor}}for(!d||n?C.push(e):b||(e.componentDidUpdate&&e.componentDidUpdate(c,f,v),O.afterUpdate&&O.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);B||r||N()}}function F(e){O.beforeUnmount&&O.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?F(n):t&&(null!=t.__preactattr_&&f(t.__preactattr_.ref,null),E(e.nextBase=t),v.push(e),h(t)),f(e.__ref,null)}function g(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function w(e,t,n){return A(n,e,{},!1,t,!1)}T(g.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=T(T({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),a(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),L(this,2)},render:function(){}});var x=i("a",{href:"https://github.com/zacanger",target:"_blank",rel:"noopener noreferrer"},"zacanger on github"),j=function(){return i("header",null,i("style",{dangerouslySetInnerHTML:{__html:"\nheader {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  box-shadow: 1px 1px 2px #999;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  position: fixed;\n  padding: 8px;\n  background: white;\n  z-index: 3;\n}\nheader a, header a:visited {\n  color: #079941;\n  text-decoration: none;\n}\n"}}),x)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=i("span",{className:"stars"}," \u2605"),H=i(function(){return M},null),q=function(e){return i("span",null,e.stars," ",H)},z=function(e){return i("article",{className:"repowrapper",key:e.name},i("style",{dangerouslySetInnerHTML:{__html:"\nsection {\n  margin-top: 16px;\n  margin-right: auto;\n  background: white;\n  padding: 24px 16px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1500px;\n  margin-left: auto;\n}\n.stars {\n  color: gold;\n  content: star;\n}\n.nowrap {\n  fontSize: 14px;\n  marginBottom: 16px;\n}\n.reponame {\n  text-decoration: none;\n  margin-bottom: 8px;\n  color: #079941;\n}\n.reponame:hover {\n  text-decoration: underline;\n}\n.description {\n  color: #444;\n  font-size: 14px;\n}\n.repowrapper {\n  margin: 8px;\n  max-height: 400px;\n  overflow: hidden;\n  box-shadow: 2px 2px 4px #999;\n  transition: .2s ease-in-out transform, .2s ease-in-out box-shadow;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 300px;\n  height: 150px;\n  max-width: 300px;\n  min-width: 200px;\n}\n.repowrapper:hover, .repowrapper:focus {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);\n  transform: translate(1px, -1px)\n}\n"}}),i("a",{className:"reponame",href:e.url,target:"blank",rel:"noopener noreferrer"},e.name),i("span",{className:"nowrap"},i(q,{stars:e.stars}),e.language&&i("span",null," ","\xb7 ",i("span",null,e.language))),i("div",{className:"description"},e.description))},W=function(e){return i("section",null,e.repos.map(function(e){return i(z,S({},e,{key:e.name}))}))};function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X="angrytech",Q=i(j,null);w(i(function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=J(this,$(n).call(this,e))).state={repos:[]},t}var t,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(n,g),t=n,(r=[{key:"getFromStorage",value:function(){try{var e=JSON.parse(localStorage.getItem(X));return(new Date-new Date(e.date))/36e5<=24?Promise.resolve(e.repos):Promise.resolve([])}catch(e){return Promise.resolve([])}}},{key:"setInStorage",value:function(e){try{localStorage.setItem(X,JSON.stringify({repos:e,date:new Date}))}catch(e){}}},{key:"componentDidMount",value:function(){var n=this,e=document.createElement("style");e.innerHTML='\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: "Montserrat", "Helvetica Neue", "Noto Sans", sans-serif;\n  box-sizing: border-box;\n}\n',document.head.appendChild(e),this.getFromStorage().then(function(e){e&&e.length?n.setState({repos:e}):fetch("https://api.github.com/users/zacanger/repos?sort=updated").then(function(e){return e.json()}).then(function(e){var t=e.filter(function(e){return!e.fork&&!e.archived}).map(function(e){var t=e.description,n=e.html_url;return{description:t,language:e.language,name:e.name,stars:e.stargazers_count,url:n}}).sort(function(e,t){return t.stars-e.stars});n.setInStorage(t),n.setState({repos:t})})})}},{key:"render",value:function(){return i("div",null,Q,i(W,{repos:this.state.repos}))}}])&&G(t.prototype,r),o&&G(t,o),n}(),null),document.querySelector("main"))},0:function(e,t,n){n("./config/polyfills.js"),e.exports=n("./src/index.js")}});