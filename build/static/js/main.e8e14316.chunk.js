(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[5],{10:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return O}));var o=n(8),c=n(15),a=n.n(c),r=n(22),i=n(16),l=n.n(i),s=n(14),u=n(36),b=n.n(u),j=n(18),f=n.n(j);f.a.extend(b.a);var d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(s.a,"/api/signin"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(Object(o.a)(Object(o.a)({},e),{},{date:new Date}))),t())},h=function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),l.a.get("".concat(s.a,"/api/signout")).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))},O=function(){if("undefined"==typeof window)return!1;if(localStorage.getItem("jwt")){var e=JSON.parse(localStorage.getItem("jwt")).date;return f()(e).isToday()?JSON.parse(localStorage.getItem("jwt")):(localStorage.removeItem("jwt"),!1)}return!1}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o="https://api.bienfafood.com"},66:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(25),r=n.n(a),i=n(12),l=n(2),s=n.p+"static/media/loader.d3fbaf2b.gif",u=n(8),b=n(13),j=n(10),f=n(1),d=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return Object(f.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return Object(j.b)()?Object(f.jsx)(t,Object(u.a)({},e)):Object(f.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},p=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return Object(f.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return Object(j.b)()&&2!==Object(j.b)().user.role?Object(f.jsx)(t,Object(u.a)({},e)):Object(j.b)()?Object(f.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}}):Object(f.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},h=(n(66),Object(o.lazy)((function(){return n.e(21).then(n.bind(null,594))}))),O=Object(o.lazy)((function(){return Promise.all([n.e(4),n.e(22)]).then(n.bind(null,595))})),m=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(19)]).then(n.bind(null,624))})),g=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,614))})),x=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,621))})),w=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,625))})),v=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,617))})),y=Object(o.lazy)((function(){return n.e(18).then(n.bind(null,604))})),k=Object(o.lazy)((function(){return n.e(16).then(n.bind(null,605))})),z=Object(o.lazy)((function(){return n.e(14).then(n.bind(null,606))})),S=Object(o.lazy)((function(){return n.e(12).then(n.bind(null,607))})),P=Object(o.lazy)((function(){return n.e(15).then(n.bind(null,608))})),I=Object(o.lazy)((function(){return n.e(13).then(n.bind(null,609))})),W=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(20),n.e(4),n.e(24)]).then(n.bind(null,626))})),C=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,620))})),J=Object(o.lazy)((function(){return n.e(23).then(n.bind(null,610))}));var L=function(){return Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(f.jsx)("img",{alt:"Loader",src:s})}),children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(d,{path:"/",exact:!0,component:O}),Object(f.jsx)(d,{path:"/type",exact:!0,component:m}),Object(f.jsx)(d,{path:"/ets",exact:!0,component:g}),Object(f.jsx)(d,{path:"/menu",exact:!0,component:x}),Object(f.jsx)(d,{path:"/meal",exact:!0,component:v}),Object(f.jsx)(d,{path:"/order",exact:!0,component:w}),Object(f.jsx)(d,{path:"/why-choose-us",exact:!0,component:y}),Object(f.jsx)(d,{path:"/banner",exact:!0,component:I}),Object(f.jsx)(d,{path:"/features",exact:!0,component:k}),Object(f.jsx)(d,{path:"/contact-us",exact:!0,component:z}),Object(f.jsx)(d,{path:"/download",exact:!0,component:P}),Object(f.jsx)(d,{path:"/app-screen",exact:!0,component:S}),Object(f.jsx)(p,{path:"/users",exact:!0,component:W}),Object(f.jsx)(d,{path:"/setting",exact:!0,component:C}),Object(f.jsx)(l.b,{path:"/login",exact:!0,component:h}),Object(f.jsx)(l.b,{path:"*",exact:!0,component:J})]})})})},N=(n(37),n(67),n(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(25).then(n.bind(null,611)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}(),F()}},[[71,6,7]]]);
//# sourceMappingURL=main.e8e14316.chunk.js.map