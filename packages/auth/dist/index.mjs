import{useHistory as e}from"react-router-dom";import t,{useEffect as n,useState as r,useContext as o}from"react";"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var i,s="object"==typeof window,u=/[A-Z]/g,c=function(e,t,n){for(var r=[],o=0;o<n.length;o++){var i=n[o];t[i]||r.push(i)}if(r.length){for(var s='Addon "'+e+'" is missing the following dependencies:',u=0;u<r.length;u++)s+='\n require("nano-css/addon/'+r[u]+'").addon(nano);';throw new Error(s)}},a=function(e){var t=(e=e||{}).assign||Object.assign,n="object"==typeof window;"production"!==process.env.NODE_ENV&&n&&("object"==typeof document&&document.getElementsByTagName("HTML")||console.error('nano-css detected browser environment because of "window" global, but "document" global seems to be defective.'));var r=t({raw:"",pfx:"_",client:n,assign:t,stringify:JSON.stringify,kebab:function(e){return e.replace(u,"-$&").toLowerCase()},decl:function(e,t){return(e=r.kebab(e))+":"+t+";"},hash:function(e){return function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return"_"+(t>>>0).toString(36)}(r.stringify(e))},selector:function(e,t){return e+(":"===t[0]?"":" ")+t},putRaw:function(e){r.raw+=e}},e);return r.client&&(r.sh||document.head.appendChild(r.sh=document.createElement("style")),"production"!==process.env.NODE_ENV&&(r.sh.setAttribute("data-nano-css-dev",""),r.shTest=document.createElement("style"),r.shTest.setAttribute("data-nano-css-dev-tests",""),document.head.appendChild(r.shTest)),r.putRaw=function(t){if("production"===process.env.NODE_ENV){var n=r.sh.sheet;try{n.insertRule(t,n.cssRules.length)}catch(e){}}else{try{r.shTest.sheet.insertRule(t,r.shTest.sheet.cssRules.length)}catch(t){e.verbose&&console.error(t)}r.sh.appendChild(document.createTextNode(t))}}),r.put=function(e,t,n){var o,i,s="",u=[];for(o in t)(i=t[o])instanceof Object&&!(i instanceof Array)?u.push(o):"production"===process.env.NODE_ENV||r.sourcemaps?s+=r.decl(o,i,e,n):s+="    "+r.decl(o,i,e,n)+"\n";s&&(s="production"===process.env.NODE_ENV||r.sourcemaps?e+"{"+s+"}":"\n"+e+" {\n"+s+"}\n",r.putRaw(n?n+"{"+s+"}":s));for(var c=0;c<u.length;c++)"@"===(o=u[c])[0]&&"@font-face"!==o?r.putAt(e,t[o],o):r.put(r.selector(e,o),t[o],n)},r.putAt=r.put,r}();function l(e,t){return e(t={exports:{}},t.exports),t.exports}(i=a).client&&("production"!==process.env.NODE_ENV&&c("cssom",i,["sh"]),document.head.appendChild(i.msh=document.createElement("style")),i.createRule=function(e,t){var n=e+"{}";t&&(n=t+"{"+n+"}");var r=t?i.msh.sheet:i.sh.sheet,o=r.insertRule(n,r.cssRules.length),s=(r.cssRules||r.rules)[o];if(s.index=o,t){var u=(s.cssRules||s.rules)[0];s.style=u.style,s.styleMap=u.styleMap}return s}),function(e){if(e.client){"production"!==process.env.NODE_ENV&&c("cssom",e,["createRule"]);var t=e.kebab;n.prototype.diff=function(e){var n,r=this.decl,o=this.rule.style;for(n in r)void 0===e[n]&&o.removeProperty(n);for(n in e)e[n]!==r[n]&&o.setProperty(t(n),e[n]);this.decl=e},n.prototype.del=function(){!function(e){var t=e.index,n=e.parentStyleSheet,r=n.cssRules||n.rules;for(t=Math.max(t,r.length-1);t>=0;){if(r[t]===e){n.deleteRule(t);break}t--}}(this.rule)},r.prototype.diff=function(e){var t=this.tree;for(var r in t)if(void 0===e[r]){var o=t[r];for(var i in o)o[i].del()}for(var r in e)if(void 0===t[r])for(var i in e[r])(c=new n(i,r)).diff(e[r][i]),e[r][i]=c;else{var s=t[r],u=e[r];for(var i in s)u[i]||s[i].del();for(var i in u){var c;(c=s[i])?(c.diff(u[i]),u[i]=c):((c=new n(i,r)).diff(u[i]),u[i]=c)}}this.tree=e},e.VRule=n,e.VSheet=r}function n(t,n){this.rule=e.createRule(t,n),this.decl={}}function r(){this.tree={}}}(a),l(function(e){var t,n,r,o,i;t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,r=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,o=n.length,i={};r<o;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)i[n[0][r]]=e[r];return i}return!1}(),o={change:r.fullscreenchange,error:r.fullscreenerror},i={request:function(e){return new Promise(function(n,o){var i=function(){this.off("change",i),n()}.bind(this);this.on("change",i),e=e||t.documentElement,Promise.resolve(e[r.requestFullscreen]()).catch(o)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var o=function(){this.off("change",o),e()}.bind(this);this.on("change",o),Promise.resolve(t[r.exitFullscreen]()).catch(n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=o[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=o[e];r&&t.removeEventListener(r,n,!1)},raw:r},r?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[r.fullscreenEnabled])}}}),n?e.exports=i:window.screenfull=i):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}});var f,h=function(e){var t=history[e];history[e]=function(n){var r=t.apply(this,arguments),o=new Event(e.toLowerCase());return o.state=n,window.dispatchEvent(o),r}};s&&(h("pushState"),h("replaceState")),"object"==typeof window&&"object"==typeof window.speechSynthesis&&window.speechSynthesis.getVoices(),(f=l(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.easing={linear:function(e){return e},quadratic:function(e){return e*(-e*e*e+4*e*e-6*e+4)},cubic:function(e){return e*(4*e*e-9*e+6)},elastic:function(e){return e*(33*e*e*e*e-106*e*e*e+126*e*e-67*e+15)},inQuad:function(e){return e*e},outQuad:function(e){return e*(2-e)},inOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},inCubic:function(e){return e*e*e},outCubic:function(e){return--e*e*e+1},inOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},inQuart:function(e){return e*e*e*e},outQuart:function(e){return 1- --e*e*e*e},inOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},inQuint:function(e){return e*e*e*e*e},outQuint:function(e){return 1+--e*e*e*e*e},inOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},inSine:function(e){return 1-Math.cos(e*(Math.PI/2))},outSine:function(e){return Math.sin(e*(Math.PI/2))},inOutSine:function(e){return-(Math.cos(Math.PI*e)-1)/2},inExpo:function(e){return Math.pow(2,10*(e-1))},outExpo:function(e){return 1-Math.pow(2,-10*e)},inOutExpo:function(e){return(e/=.5)<1?Math.pow(2,10*(e-1))/2:(e--,(2-Math.pow(2,-10*e))/2)},inCirc:function(e){return 1-Math.sqrt(1-e*e)},outCirc:function(e){return Math.sqrt(1-(e-=1)*e)},inOutCirc:function(e){return(e/=.5)<1?-(Math.sqrt(1-e*e)-1)/2:(e-=2,(Math.sqrt(1-e*e)+1)/2)}}}))&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default");var d=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),p="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,v="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),b="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(v):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},m=2,_=20,y=["top","right","bottom","left","width","height","size","weight"],g="undefined"!=typeof MutationObserver,w=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&u()}function s(){b(i)}function u(){var e=Date.now();if(n){if(e-o<m)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=e}return u}(this.refresh.bind(this),_)}e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){p&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){p&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;y.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null}(),function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e}),E=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||v},O=F(0,0,0,0);function M(e){return parseFloat(e)||0}function S(e){for(var t=arguments,n=[],r=1;r<arguments.length;r++)n[r-1]=t[r];return n.reduce(function(t,n){return t+M(e["border-"+n+"-width"])},0)}var x="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof E(e).SVGGraphicsElement}:function(e){return e instanceof E(e).SVGElement&&"function"==typeof e.getBBox};function F(e,t,n,r){return{x:e,y:t,width:n,height:r}}var R=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=F(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e,t=(e=this.target,p?x(e)?function(e){var t=e.getBBox();return F(0,0,t.width,t.height)}(e):function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return O;var r=E(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n];t[o]=M(e["padding-"+o])}return t}(r),i=o.left+o.right,s=o.top+o.bottom,u=M(r.width),c=M(r.height);if("border-box"===r.boxSizing&&(Math.round(u+i)!==t&&(u-=S(r,"left","right")+i),Math.round(c+s)!==n&&(c-=S(r,"top","bottom")+s)),!function(e){return e===E(e).document.documentElement}(e)){var a=Math.round(u+i)-t,l=Math.round(c+s)-n;1!==Math.abs(a)&&(u-=a),1!==Math.abs(l)&&(c-=l)}return F(o.left,o.top,u,c)}(e):O);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),A=function(e,t){var n,r,o,i,s,u,c,a=(r=(n=t).x,o=n.y,i=n.width,s=n.height,u="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(u.prototype),w(c,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),c);w(this,{target:e,contentRect:a})};(function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new d,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof E(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new R(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof E(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new A(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0}})(),"undefined"!=typeof WeakMap?new WeakMap:new d,["observe","unobserve","disconnect"].forEach(function(e){});var P=t.createContext({}),k=function(o){var i=o.children,s=o.forbiddenPath;void 0===s&&(s="/forbidden");var u=o.loadingComponent;void 0===u&&(u=function(){return t.createElement("div",null,"Loading")});var c=o.client;void 0===c&&(c={login:function(e){return Promise.resolve()},register:function(e){return Promise.resolve()},getUserInfo:function(){return Promise.resolve({id:1,name:"Mock"})},logout:function(){return Promise.resolve()}});var a=r(),l=a[0],f=a[1],h=r(!0),d=h[0],p=h[1],v=e();if(n(function(){try{function e(){p(!1)}var t=function(e,t){try{var n=Promise.resolve(c.getUserInfo()).then(function(e){f(e)})}catch(e){return t()}return n&&n.then?n.then(void 0,t):n}(0,function(){console.log("Not authenticated")});return Promise.resolve(t&&t.then?t.then(e):e())}catch(e){return Promise.reject(e)}},[]),d)return u();var b=Object.assign({},{user:l,onForbidden:function(){return v.push(s)}},c,{login:function(e){try{return Promise.resolve(c.login(e)).then(function(){return Promise.resolve(c.getUserInfo()).then(function(e){f(e)})})}catch(e){return Promise.reject(e)}},logout:function(){try{return Promise.resolve(c.logout()).then(function(){f(null)})}catch(e){return Promise.reject(e)}}});return t.createElement(P.Provider,{value:b},i)},C=function(){var e=o(P);if(!e)throw new Error("useAuth should be use in side auth context");return e},j=function(e){var t=C(),n=t.onForbidden;t.user||(e?e():n())};export{k as AuthProvider,C as useAuth,j as useAuthenticated};
//# sourceMappingURL=index.mjs.map
