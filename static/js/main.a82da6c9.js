!function(){var e={8305:function(e,n,t){Promise.all([t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("src_bootstrap_js")]).then(t.bind(t,9412))},2410:function(e,n,t){"use strict";var r=new Error;e.exports=new Promise((function(e,n){if("undefined"!==typeof app1)return e();t.l("http://172.17.60.51:3000/remoteEntry.js",(function(t){if("undefined"!==typeof app1)return e();var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+o+": "+u+")",r.name="ScriptExternalLoadError",r.type=o,r.request=u,n(r)}),"app1")})).then((function(){return app1}))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r](u,u.exports,t),u.exports}t.m=e,t.c=n,t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);t.r(u);var i={};e=e||[null,n({}),n([]),n(n)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},t.d(u,i),u}}(),t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))},t.u=function(e){return"static/js/"+e+"."+{webpack_sharing_consume_default_react_react:"90965edf","webpack_sharing_consume_default_react-dom_react-dom":"6542d391",src_bootstrap_js:"cbcfd4f2","vendors-node_modules_tanstack_react-query_build_lib_index_mjs":"9fbe48f0","node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_helpers_e-1a87fa":"8e498297","vendors-node_modules_flowbite-react_lib_esm_index_js":"8717f6d2","node_modules_react_jsx-runtime_js-node_modules_babel_runtime_helpers_esm_objectSpread2_js-nod-d47852":"aac2427b","vendors-node_modules_react-dom_index_js":"90993874","vendors-node_modules_react-router-dom_dist_index_js":"1d3f8cba","node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_helpers_e-89cd4c":"a2dff907","node_modules_react-toastify_dist_react-toastify_esm_mjs-_cdd20":"0772a8be",node_modules_react_index_js:"e30289b8","node_modules_web-vitals_dist_web-vitals_js":"f8d58a78","node_modules_react-toastify_dist_react-toastify_esm_mjs-_cdd21":"345ccae4",webpack_container_remote_app1_Bot:"73b3a24c","webpack_sharing_consume_default_web-vitals_web-vitals":"a47078f4"}[e]+".chunk.js"},t.miniCssF=function(e){return"static/css/"+e+".c0eae318.chunk.css"},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={},n="synechron:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var _=s[f];if(_.getAttribute("src")==r||_.getAttribute("data-webpack")==n+u){a=_;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(l);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={webpack_container_remote_app1_Bot:[4569]},n={4569:["default","./Bot",2410]};t.f.remotes=function(r,o){t.o(e,r)&&e[r].forEach((function(e){var r=t.R;r||(r=[]);var u=n[e];if(!(r.indexOf(u)>=0)){if(r.push(u),u.p)return o.push(u.p);var i=function(n){n||(n=new Error("Container missing")),"string"===typeof n.message&&(n.message+='\nwhile loading "'+u[1]+'" from '+u[2]),t.m[e]=function(){throw n},u.p=0},a=function(e,n,t,r,a,c){try{var s=e(n,t);if(!s||!s.then)return a(s,r,c);var f=s.then((function(e){return a(e,r)}),i);if(!c)return f;o.push(u.p=f)}catch(_){i(_)}},c=function(e,n,t){return a(n.get,u[1],r,0,s,t)},s=function(n){u.p=1,t.m[e]=function(e){e.exports=n()}};a(t,u[2],0,0,(function(e,n,r){return e?a(t.I,u[0],0,e,c,r):i()}),1)}}))}}(),function(){t.S={};var e={},n={};t.I=function(r,o){o||(o=[]);var u=n[r];if(u||(u=n[r]={}),!(o.indexOf(u)>=0)){if(o.push(u),e[r])return e[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],a="synechron",c=function(e,n,t,r){var o=i[e]=i[e]||{},u=o[n];(!u||!u.loaded&&(!r!=!u.eager?r:a>u.from))&&(o[n]={get:t,from:a,eager:!!r})},s=[];if("default"===r)c("@tanstack/react-query","4.29.19",(function(){return Promise.all([t.e("vendors-node_modules_tanstack_react-query_build_lib_index_mjs"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_helpers_e-1a87fa")]).then((function(){return function(){return t(5065)}}))})),c("flowbite-react","0.4.7",(function(){return Promise.all([t.e("vendors-node_modules_flowbite-react_lib_esm_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("node_modules_react_jsx-runtime_js-node_modules_babel_runtime_helpers_esm_objectSpread2_js-nod-d47852")]).then((function(){return function(){return t(5205)}}))})),c("react-dom","18.2.0",(function(){return Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((function(){return function(){return t(4164)}}))})),c("react-router-dom","6.12.0",(function(){return Promise.all([t.e("vendors-node_modules_react-router-dom_dist_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_helpers_e-89cd4c")]).then((function(){return function(){return t(7278)}}))})),c("react-toastify","9.1.3",(function(){return Promise.all([t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_react-toastify_dist_react-toastify_esm_mjs-_cdd20")]).then((function(){return function(){return t(9085)}}))})),c("react","18.2.0",(function(){return t.e("node_modules_react_index_js").then((function(){return function(){return t(2791)}}))})),c("web-vitals","3.3.2",(function(){return t.e("node_modules_web-vitals_dist_web-vitals_js").then((function(){return function(){return t(1496)}}))})),function(e){var n=function(e){var n;n="Initialization of sharing external failed: "+e,"undefined"!==typeof console&&console.warn&&console.warn(n)};try{var u=t(e);if(!u)return;var i=function(e){return e&&e.init&&e.init(t.S[r],o)};if(u.then)return s.push(u.then(i,n));var a=i(u);if(a&&a.then)return s.push(a.catch(n))}catch(c){n(c)}}(2410);return s.length?e[r]=Promise.all(s).then((function(){return e[r]=1})):e[r]=1}}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../"}(),function(){var e=function(e){var n=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?n(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,n(t[2]))),t[3]&&(r.push([]),r.push.apply(r,n(t[3]))),r},n=function(n,t){n=e(n),t=e(t);for(var r=0;;){if(r>=n.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=n[r],u=(typeof o)[0];if(r>=t.length)return"u"==u;var i=t[r],a=(typeof i)[0];if(u!=a)return"o"==u&&"n"==a||"s"==a||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},r=function(e){var n=e[0],t="";if(1===e.length)return"*";if(n+.5){t+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var o=1,u=1;u<e.length;u++)o--,t+="u"==(typeof(a=e[u]))[0]?"-":(o>0?".":"")+(o=2,a);return t}var i=[];for(u=1;u<e.length;u++){var a=e[u];i.push(0===a?"not("+c()+")":1===a?"("+c()+" || "+c()+")":2===a?i.pop()+" "+i.pop():r(a))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=function(n,t){if(0 in n){t=e(t);var r=n[0],u=r<0;u&&(r=-r-1);for(var i=0,a=1,c=!0;;a++,i++){var s,f,_=a<n.length?(typeof n[a])[0]:"";if(i>=t.length||"o"==(f=(typeof(s=t[i]))[0]))return!c||("u"==_?a>r&&!u:""==_!=u);if("u"==f){if(!c||"u"!=_)return!1}else if(c)if(_==f)if(a<=r){if(s!=n[a])return!1}else{if(u?s>n[a]:s<n[a])return!1;s!=n[a]&&(c=!1)}else if("s"!=_&&"n"!=_){if(u||a<=r)return!1;c=!1,a--}else{if(a<=r||f<_!=u)return!1;c=!1}else"s"!=_&&"n"!=_&&(c=!1,a--)}}var d=[],l=d.pop.bind(d);for(i=1;i<n.length;i++){var m=n[i];d.push(1==m?l()|l():2==m?l()&l():m?o(m,t):!l())}return!!l()},u=function(e,t){var r=e[t];return Object.keys(r).reduce((function(e,t){return!e||!r[e].loaded&&n(e,t)?t:e}),0)},i=function(e,n,t,o){return"Unsatisfied version "+t+" from "+(t&&e[n][t].from)+" of shared singleton module "+n+" (required "+r(o)+")"},a=function(e,n,t,r){var a=u(e,t);return o(r,a)||s(i(e,t,a,r)),f(e[t][a])},c=function(e,t,r){var u=e[t];return(t=Object.keys(u).reduce((function(e,t){return o(r,t)&&(!e||n(e,t))?t:e}),0))&&u[t]},s=function(e){"undefined"!==typeof console&&console.warn&&console.warn(e)},f=function(e){return e.loaded=1,e.get()},_=function(e){return function(n,r,o,u){var i=t.I(n);return i&&i.then?i.then(e.bind(e,n,t.S[n],r,o,u)):e(n,t.S[n],r,o,u)}},d=_((function(e,n,r,o,u){return n&&t.o(n,r)?a(n,0,r,o):u()})),l=_((function(e,n,r,o,u){var i=n&&t.o(n,r)&&c(n,r,o);return i?f(i):u()})),m={},p={8416:function(){return d("default","react",[1,18,2,0],(function(){return t.e("node_modules_react_index_js").then((function(){return function(){return t(2791)}}))}))},1051:function(){return d("default","react-dom",[1,18,2,0],(function(){return t.e("vendors-node_modules_react-dom_index_js").then((function(){return function(){return t(4164)}}))}))},128:function(){return l("default","react-toastify",[1,9,1,3],(function(){return t.e("node_modules_react-toastify_dist_react-toastify_esm_mjs-_cdd21").then((function(){return function(){return t(9085)}}))}))},4302:function(){return d("default","react-router-dom",[1,6,12,0],(function(){return t.e("vendors-node_modules_react-router-dom_dist_index_js").then((function(){return function(){return t(7278)}}))}))},3152:function(){return l("default","flowbite-react",[2,0,4,7],(function(){return t.e("vendors-node_modules_flowbite-react_lib_esm_index_js").then((function(){return function(){return t(5205)}}))}))},5850:function(){return l("default","@tanstack/react-query",[1,4,29,19],(function(){return t.e("vendors-node_modules_tanstack_react-query_build_lib_index_mjs").then((function(){return function(){return t(5065)}}))}))},1411:function(){return l("default","web-vitals",[1,3,3,2],(function(){return t.e("node_modules_web-vitals_dist_web-vitals_js").then((function(){return function(){return t(1496)}}))}))}},h={webpack_sharing_consume_default_react_react:[8416],"webpack_sharing_consume_default_react-dom_react-dom":[1051],src_bootstrap_js:[128,4302,3152,5850],"webpack_sharing_consume_default_web-vitals_web-vitals":[1411]};t.f.consumes=function(e,n){t.o(h,e)&&h[e].forEach((function(e){if(t.o(m,e))return n.push(m[e]);var r=function(n){m[e]=0,t.m[e]=function(r){delete t.c[e],r.exports=n()}},o=function(n){delete m[e],t.m[e]=function(r){throw delete t.c[e],n}};try{var u=p[e]();u.then?n.push(m[e]=u.then(r).catch(o)):r(u)}catch(i){o(i)}}))}}(),function(){if("undefined"!==typeof document){var e=function(e){return new Promise((function(n,r){var o=t.miniCssF(e),u=t.p+o;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(i=t[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===n))return i}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){var i;if((o=(i=u[r]).getAttribute("data-href"))===e||o===n)return i}}(o,u))return n();!function(e,n,t,r,o){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onerror=u.onload=function(t){if(u.onerror=u.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,u.parentNode&&u.parentNode.removeChild(u),o(c)}},u.href=n,t?t.parentNode.insertBefore(u,t.nextSibling):document.head.appendChild(u)}(e,u,null,n,r)}))},n={main:0};t.f.miniCss=function(t,r){n[t]?r.push(n[t]):0!==n[t]&&{src_bootstrap_js:1}[t]&&r.push(n[t]=e(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var e={main:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^webpack_(sharing_consume_default_(react(\-dom_react\-dom|_react)|web\-vitals_web\-vitals)|container_remote_app1_Bot)$/.test(n))e[n]=0;else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),a=new Error;t.l(i,(function(r){if(t.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}}),"chunk-"+n,n)}};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)c(t)}for(n&&n(r);s<i.length;s++)u=i[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0},r=self.webpackChunksynechron=self.webpackChunksynechron||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();t(8305)}();
//# sourceMappingURL=main.a82da6c9.js.map