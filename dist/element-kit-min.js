!function t(e,n,i){function r(o,u){if(!n[o]){if(!e[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[o]={exports:{}};e[o][0].call(h.exports,function(t){var n=e[o][1][t];return r(n?n:t)},h,h.exports,t,e,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){e.exports=function(){var e=t("events"),n={};return n.createDomain=n.create=function(){function t(t){n.emit("error",t)}var n=new e.EventEmitter;return n.add=function(e){e.on("error",t)},n.remove=function(e){e.removeListener("error",t)},n.bind=function(e){return function(){var n=Array.prototype.slice.call(arguments);try{e.apply(null,n)}catch(i){t(i)}}},n.intercept=function(e){return function(n){if(n)t(n);else{var i=Array.prototype.slice.call(arguments,1);try{e.apply(null,i)}catch(n){t(n)}}}},n.run=function(e){try{e()}catch(n){t(n)}return this},n.dispose=function(){return this.removeAllListeners(),this},n.enter=n.exit=function(){return this},n},n}.call(this)},{events:2}],2:[function(t,e,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function s(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function u(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!s(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,s,a,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[t],u(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,s=new Array(i-1),a=1;i>a;a++)s[a-1]=arguments[a];n.apply(this,s)}else if(o(n)){for(i=arguments.length,s=new Array(i-1),a=1;i>a;a++)s[a-1]=arguments[a];for(c=n.slice(),i=c.length,a=0;i>a;a++)c[a].apply(this,s)}return!0},i.prototype.addListener=function(t,e){var n;if(!r(e))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned){var n;n=u(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this},i.prototype.removeListener=function(t,e){var n,i,s,u;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],s=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(u=s;u-->0;)if(n[u]===e||n[u].listener&&n[u].listener===e){i=u;break}if(0>i)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.listenerCount=function(t,e){var n;return n=t._events&&t._events[e]?r(t._events[e])?1:t._events[e].length:0}},{}],3:[function(t,e,n){function i(){if(!u){u=!0;for(var t,e=o.length;e;){t=o,o=[];for(var n=-1;++n<e;)t[n]();e=o.length}u=!1}}function r(){}var s=e.exports={},o=[],u=!1;s.nextTick=function(t){o.push(t),u||setTimeout(i,0)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],4:[function(t,e,n){"use strict";e.exports=t("./lib")},{"./lib":9}],5:[function(t,e,n){"use strict";function i(){}function r(t){try{return t.then}catch(e){return l=e,f}}function s(t,e){try{return t(e)}catch(n){return l=n,f}}function o(t,e,n){try{t(e,n)}catch(i){return l=i,f}}function u(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._71=0,this._18=null,this._61=[],t!==i&&c(t,this)}function a(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function c(t,e){var n=!1,i=o(t,function(t){n||(n=!0,e._82(t))},function(t){n||(n=!0,e._67(t))});n||i!==f||(n=!0,e._67(l))}var h=t("asap/raw"),l=null,f={};e.exports=u,u.prototype._10=function(t,e){var n=this;return new this.constructor(function(r,s){var o=new u(i);o.then(r,s),n._24(new a(t,e,o))})},u.prototype.then=function(t,e){if(this.constructor!==u)return this._10(t,e);var n=new u(i);return this._24(new a(t,e,n)),n},u.prototype._24=function(t){if(3===this._71)return void this._18._24(t);if(0===this._71)return void this._61.push(t);var e=this._71,n=this._18;h(function(){var i=1===e?t.onFulfilled:t.onRejected;if(null===i)return void(1===e?t.promise._82(n):t.promise._67(n));var r=s(i,n);r===f?t.promise._67(l):t.promise._82(r)})},u.prototype._82=function(t){if(t===this)return this._67(new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var e=r(t);if(e===f)return this._67(l);if(e===this.then&&t instanceof u&&t._24===this._24){this._71=3,this._18=t;for(var n=0;n<this._61.length;n++)t._24(this._61[n]);return}if("function"==typeof e)return void c(e.bind(t),this)}this._71=1,this._18=t,this._94()},u.prototype._67=function(t){this._71=2,this._18=t,this._94()},u.prototype._94=function(){for(var t=0;t<this._61.length;t++)this._24(this._61[t]);this._61=null}},{"asap/raw":13}],6:[function(t,e,n){"use strict";var i=t("./core.js");e.exports=i,i.prototype.done=function(t,e){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,function(t){setTimeout(function(){throw t},0)})}},{"./core.js":5}],7:[function(t,e,n){"use strict";function i(t){this.then=function(e){return"function"!=typeof e?this:new r(function(n,i){s(function(){try{n(e(t))}catch(r){i(r)}})})}}var r=t("./core.js"),s=t("asap/raw");e.exports=r,i.prototype=r.prototype;var o=new i(!0),u=new i(!1),a=new i(null),c=new i(void 0),h=new i(0),l=new i("");r.resolve=function(t){if(t instanceof r)return t;if(null===t)return a;if(void 0===t)return c;if(t===!0)return o;if(t===!1)return u;if(0===t)return h;if(""===t)return l;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new r(e.bind(t))}catch(n){return new r(function(t,e){e(n)})}return new i(t)},r.all=function(t){var e=Array.prototype.slice.call(t);return new r(function(t,n){function i(s,o){if(o&&("object"==typeof o||"function"==typeof o)){var u=o.then;if("function"==typeof u)return void u.call(o,function(t){i(s,t)},n)}e[s]=o,0===--r&&t(e)}if(0===e.length)return t([]);for(var r=e.length,s=0;s<e.length;s++)i(s,e[s])})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(e,n){t.forEach(function(t){r.resolve(t).then(e,n)})})},r.prototype["catch"]=function(t){return this.then(null,t)}},{"./core.js":5,"asap/raw":13}],8:[function(t,e,n){"use strict";var i=t("./core.js");e.exports=i,i.prototype["finally"]=function(t){return this.then(function(e){return i.resolve(t()).then(function(){return e})},function(e){return i.resolve(t()).then(function(){throw e})})}},{"./core.js":5}],9:[function(t,e,n){"use strict";e.exports=t("./core.js"),t("./done.js"),t("./finally.js"),t("./es6-extensions.js"),t("./node-extensions.js")},{"./core.js":5,"./done.js":6,"./es6-extensions.js":7,"./finally.js":8,"./node-extensions.js":10}],10:[function(t,e,n){"use strict";var i=t("./core.js"),r=t("asap");e.exports=i,i.denodeify=function(t,e){return e=e||1/0,function(){var n=this,r=Array.prototype.slice.call(arguments);return new i(function(i,s){for(;r.length&&r.length>e;)r.pop();r.push(function(t,e){t?s(t):i(e)});var o=t.apply(n,r);!o||"object"!=typeof o&&"function"!=typeof o||"function"!=typeof o.then||i(o)})}},i.nodeify=function(t){return function(){var e=Array.prototype.slice.call(arguments),n="function"==typeof e[e.length-1]?e.pop():null,s=this;try{return t.apply(this,arguments).nodeify(n,s)}catch(o){if(null===n||"undefined"==typeof n)return new i(function(t,e){e(o)});r(function(){n.call(s,o)})}}},i.prototype.nodeify=function(t,e){return"function"!=typeof t?this:void this.then(function(n){r(function(){t.call(e,null,n)})},function(n){r(function(){t.call(e,n)})})}},{"./core.js":5,asap:11}],11:[function(t,e,n){"use strict";function i(){if(a.length)throw a.shift()}function r(t){var e;e=u.length?u.pop():new s,e.task=t,o(e)}function s(){this.task=null}var o=t("./raw"),u=[],a=[],c=o.makeRequestCallFromTimer(i);e.exports=r,s.prototype.call=function(){try{this.task.call()}catch(t){r.onerror?r.onerror(t):(a.push(t),c())}finally{this.task=null,u[u.length]=this}}},{"./raw":12}],12:[function(t,e,n){(function(t){"use strict";function n(t){u.length||(o(),a=!0),u[u.length]=t}function i(){for(;c<u.length;){var t=c;if(c+=1,u[t].call(),c>h){for(var e=0;c>e;e++)u[e]=u[e+c];u.length-=c,c=0}}u.length=0,c=0,a=!1}function r(t){var e=1,n=new l(t),i=document.createTextNode("");return n.observe(i,{characterData:!0}),function(){e=-e,i.data=e}}function s(t){return function(){function e(){clearTimeout(n),clearInterval(i),t()}var n=setTimeout(e,0),i=setInterval(e,50)}}e.exports=n;var o,u=[],a=!1,c=0,h=1024,l=t.MutationObserver||t.WebKitMutationObserver;o="function"==typeof l?r(i):s(i),n.requestFlush=o,n.makeRequestCallFromTimer=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(t,e,n){(function(n){"use strict";function i(t){a.length||(s(),c=!0),a[a.length]=t}function r(){for(;h<a.length;){var t=h;if(h+=1,a[t].call(),h>l){for(var e=0;h>e;e++)a[e]=a[e+h];a.length-=h,h=0}}a.length=0,h=0,c=!1}function s(){var e=n.domain;e&&(o||(o=t("domain")),o.active=n.domain=null),c&&u?setImmediate(r):n.nextTick(r),e&&(o.active=n.domain=e)}var o,u="function"==typeof setImmediate;e.exports=i;var a=[],c=!1,h=0,l=1024;i.requestFlush=s}).call(this,t("_process"))},{_process:3,domain:1}],14:[function(t,e,n){"use strict";var i,r=t("./element"),s=t("./image-element"),o=0,u={};e.exports=function(){var t=function(t){this.initialize(t)};return t.prototype={initialize:function(){var t=this;i||document.body.kit||(i=Object.defineProperty(window.Element.prototype,"kit",{get:function(){return t.setup(this)}}))},setup:function(t){var e;return u[t._kitId]||(e=t instanceof window.HTMLImageElement?s:r,o++,t._kitId=o,u[t._kitId]=new e(t)),u[t._kitId]},destroy:function(){}},new t}()},{"./element":15,"./image-element":16}],15:[function(t,e,n){"use strict";var i=t("./utils"),r=(t("./element-kit"),function(t){this.initialize(t)});r.prototype={initialize:function(t){this.el=t,this.classList=this._getClassList(),this._eventListenerMap=this._eventListenerMap||[],Object.defineProperty(this,"dataset",{get:function(){return this.getData()}.bind(this)})},_traverseEachParent:function(t,e){for(var n,i=e||this.el;i&&"string"==typeof i.className&&(n=t(i),void 0===n||n);)i=i.parentNode},appendOuterHtml:function(t){var e=this.el.parentNode,n=i.createHtmlElement(t);return e?e.replaceChild(n,this.el):(e=document.createDocumentFragment(),e.appendChild(n)),n.appendChild(this.el),n},getUniqueId:function(){return this.el._kitId},getClosestAncestorElementByClassName:function(t){var e;return this._traverseEachParent(function(n){return n.kit._hasClass(t)?(e=n,!1):void 0},this.el.parentNode),e},addEventListener:function(t,e,n,i){var r=e;i=i||{},"function"!=typeof r&&(r=this._createEventListener(n[e],n)),this.el.addEventListener(t,r,i.useCapture),this._eventListenerMap.push({event:t,listener:r,listenerId:e,context:n})},_createEventListener:function(t,e){return function(n){e=e||this,t.apply(e,arguments)}},removeEventListener:function(t,e,n){var i,r,s=this._eventListenerMap||[];if(s.length)for(i=0;i<s.length;i++)if(r=s[i],r&&r.event===t&&r.listenerId===e&&r.context===n){this.el.removeEventListener(t,r.listener),this._eventListenerMap[i]=null;break}},waitForTransition:function(t){var e=this.getTransitionDuration();t&&(e>0?setTimeout(t.bind(this,this.el),e):t(this.el))},getTransitionDuration:function(){var t,e=this.getCssComputedProperty("transition-delay")||"0ms",n=this.getCssComputedProperty("transition-duration")||"0ms",i=Array.isArray(n)?n:[n],r=Array.isArray(e)?e:[e],s=0;return i.push.apply(i,r),i.forEach(function(e){e.split(",").forEach(function(e){e=this._convertCssTimeValueToMilliseconds(e),t=this._getCssPropUnitMap(e),t.num>s&&(s=t.num)}.bind(this))}.bind(this)),s},getCssComputedProperty:function(t){var e=window.getComputedStyle(this.el);return e.getPropertyValue(t)||this.el.style[this._getJsPropName(t)]},_getCssPropUnitMap:function(t){t.trim();var e=t.match("[0-9.]+"),n="ms";return e=e?e[0]:"",e&&(n=t.split(e)[1],e=Number(e)),{num:e,unit:n}},_convertCssTimeValueToMilliseconds:function(t){var e=this._getCssPropUnitMap(t).num,n=t.replace(e,"");return t="s"===n?1e3*e:e,t+"ms"},_getClassList:function(){return{add:this._addClass.bind(this),remove:this._removeClass.bind(this),contains:this._hasClass.bind(this),toggle:this._toggleClass.bind(this)}},_getCssClasses:function(){return this.el.className.split(" ")},_toggleClass:function(t){this._hasClass(t)?this._removeClass(t):this._addClass(t)},_addClass:function(){"classList"in document.createElement("_")?this._each(arguments,function(t){this.el.classList.add(t)}.bind(this)):this._each(arguments,function(t){this._hasClass(t)||(this.el.className=this.el.className?this.el.className+" "+t:t)}.bind(this))},_each:function(t,e){var n,i=t.length;for(n=0;i>n;n++)e(t[n])},_removeClass:function(){var t;"classList"in document.createElement("_")?this._each(arguments,function(t){this.el.classList.remove(t)}.bind(this)):this._each(arguments,function(e){this.el.className===e?this.el.className="":(t="[\\s]*"+e,t=new RegExp(t,"i"),this.el.className=this.el.className.replace(t,""))}.bind(this))},_hasClass:function(t){var e=this._getCssClasses();return-1!==e.indexOf(t)},_getJsPropName:function(t){return t=t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},getAttributes:function(){var t=this.el.attributes,e={};if(t.length)for(var n=0;n<t.length;n++)e[t[n].name]=t[n].value;return e},_getDomData:function(){var t,e,n=this.getAttributes(),i={};for(t in n)n.hasOwnProperty(t)&&(e=n[t],0===t.indexOf("data-")&&(t=t.substr(5),i[t]=e));return i},getData:function(){var t;this._data=i.extend({},this._data,this._getDomData());for(t in this._data)if(this._data.hasOwnProperty(t)){var e=this._data[t];Object.defineProperty(this._data,t,{writeable:!0,get:function(){return e}.bind(this),set:function(e){this.setData.bind(this,t,e)}.bind(this)})}return this._data},setData:function(t,e){this.el.setAttribute("data-"+t,e),this._data[t]=e},destroy:function(){}},e.exports=r},{"./element-kit":14,"./utils":17}],16:[function(t,e,n){"use strict";var i=t("./utils"),r=t("./element"),s=t("promise"),o=function(t){r.prototype.initialize.call(this,t)};o.prototype=i.extend({},r.prototype,{load:function(t){return(t=this.el.getAttribute(t)||t)?(-1!==t.indexOf(",")&&(t=this._getImageSourceSetPath(t)),this._loadImage(t)):(console.warn("ElementKit error: undefined was passed to load() call"),s.resolve())},_loadImage:function(t){var e=this.el;return new s(function(n){e.onload=function(){n(e)},e.src=t})},_getImageSourceSetPath:function(t){var e,n,i,r,s,o=window.innerWidth,u=window.innerHeight;return t.split(",").forEach(function(t){n=this._buildSourceMapWidthHeight(t),i=n.width||0,r=n.height||0,!s&&o>=i&&u>=r&&(e=t.split(" ")[0],s=!0)}.bind(this)),e},_buildSourceMapWidthHeight:function(t,e){var n,i=t.split(" "),r=function(t){return Number(t.substr(0,t.length-1))};return e=e||{},i.shift(),i.forEach(function(t){n=t.charAt(t.length-1),"w"===n?e.width=r(t):"h"===n&&(e.height=r(t))}),e}}),e.exports=o},{"./element":15,"./utils":17,promise:4}],17:[function(t,e,n){e.exports={createHtmlElement:function(t){var e,n;return t?(t=t.trim(t),e=document.createElement("div"),e.innerHTML=t,n=e.childNodes[0],e.removeChild(n)):void 0},extend:function(t){var e,n,i=t;for(n=1;n<arguments.length;n++){e=arguments[n];for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r])}return i},triggerHtmlCollectionMethod:function(t,e,n){var i,r,s=t.length;for(i=0;s>i;i++)r=t[i],r.kit[e].apply(r.kit,n)}}},{}]},{},[14,15,16,17]);