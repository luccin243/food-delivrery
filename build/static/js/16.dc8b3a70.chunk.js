(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[16],{605:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(81),c=t(84),s=t(82),r=t(1);function i(){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(s.a,{parent:"Home",content:"Features",title:"Edit Features Section",create:!1}),Object(r.jsx)(n.a,{})]})}},76:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,c=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(l){c=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(c)throw s}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return c}))},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return d}));var n=t(15),c=t.n(n),s=t(22),r=t(14),i=t(10),l=Object(i.b)().token,o=t(16).create({baseURL:"".concat(r.a,"/api"),timeout:1e3,headers:{Accept:"application/json",Authorization:"Bearer ".concat(l)}}),j=function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post(a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get(a);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},81:function(e,a,t){"use strict";t(0);var n=t(1);a.a=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}},82:function(e,a,t){"use strict";t(0);var n=t(1);a.a=function(e){var a=e.parent,t=e.title,c=e.content,s=e.create,r=e.handelClick,i=e.text;return Object(n.jsxs)("div",{className:"row page-header",children:[Object(n.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("ol",{className:"breadcrumb",children:[Object(n.jsx)("li",{className:"breadcrumb-item",children:Object(n.jsx)("a",{href:"/",children:a})}),Object(n.jsx)("li",{className:"breadcrumb-item active",children:c})]})]}),s&&Object(n.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(n.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:i,onClick:r,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(n.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},84:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(15),r=t.n(s),i=t(22),l=t(76),o=t(12),j=t(2),d=t(10),b=t(14),m=t(1),u=function(e,a){if(e.location.pathname===a)return"active"},h=Object(j.g)((function(e){var a=e.history,t=(e.window,Object(d.b)()),s=t.user,j=(t.token,c.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(l.a)(j,2),h=b[0],O=b[1];var f=function(e,a){var t=c.a.useState(localStorage.getItem(e)||a),s=Object(l.a)(t,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]}("dropDown","none"),p=Object(l.a)(f,2),x=p[0],v=p[1],N=function(){var e=Object(i.a)(r.a.mark((function e(){var a,t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.firstName,t=s.lastName,n=s.role,c=s.avatar,O({firstName:a,lastName:t,role:n,avatar:c});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);h.firstName,h.lastName;var g=h.role;h.avatar;return Object(m.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(m.jsx)("div",{className:"nano",children:Object(m.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(m.jsx)("div",{className:"card-body nav-profile",children:Object(m.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcset:"",width:190})}),Object(m.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/")),children:Object(m.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-home"}),Object(m.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Application Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/type")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-tasks"}),Object(m.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/ets")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-building"}),Object(m.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/menu")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-ticket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/meal")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-coffee"}),Object(m.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/order")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-shopping-basket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Website Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat("active"===x?"active":""),onClick:function(){v((function(){return"active"===x?"none":"active"}))},children:Object(m.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-th-large"}),Object(m.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(m.jsx)("span",{class:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(m.jsxs)("ul",{class:"nav-second-level nav flex-column",style:{display:"active"===x?"flex":"none"},children:[Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/banner")),children:Object(m.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/why-choose-us")),children:Object(m.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/features")),children:Object(m.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/download")),children:Object(m.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/app-screen")),children:Object(m.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/contact-us")),children:Object(m.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===g||1===g)&&Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"User management"})}),(0===g||1===g)&&Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/users")),children:Object(m.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-group"}),Object(m.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"SETTING"})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/setting")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-cogs"}),Object(m.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),O=t(23),f=t(8),p=t(78),x=Object(j.g)((function(e){var a,t=e.history,c=(e.window,Object(d.b)().user),s=Object(n.useState)({firstName:"",lastName:"",role:"",avatar:""}),j=Object(l.a)(s,2),u=j[0],h=j[1],x=function(){var e=Object(i.a)(r.a.mark((function e(){var a,t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.firstName,t=c.lastName,n=c.role,s=c.avatar,h({firstName:a,lastName:t,role:n,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(n.useState)({logo:"icon.png",icon:"icon.png"}),N=Object(l.a)(v,2),g=N[0],k=N[1],w=g.logo,y=g.icon;Object(n.useEffect)((function(){x(),Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)("/read/config/");case 2:a=e.sent,k(Object(f.a)(Object(f.a)({},g),{},{logo:a.logo,icon:a.icon}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var S=u.firstName,C=u.lastName;u.role,u.avatar;return Object(m.jsx)("div",{className:"top-bar primary-top-bar",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("a",{className:"admin-logo",href:"/",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(w),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(m.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(y),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(m.jsx)("div",{className:"left-nav-toggle",children:Object(m.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("div",{className:"left-nav-collapsed",children:Object(m.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("ul",{className:"list-inline top-right-nav",children:Object(m.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(m.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(m.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),S," ",C]}),Object(m.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,(a={className:"dropdown-item",to:"/setting"},Object(O.a)(a,"className","nav-link"),Object(O.a)(a,"children",[Object(m.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),a))}),Object(m.jsx)("li",{className:"dropdown-divider"}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(d.d)((function(){t.push("/login")}))},children:[Object(m.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));a.a=function(e){var a=e.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{}),Object(m.jsx)(h,{}),a]})}}}]);
//# sourceMappingURL=16.dc8b3a70.chunk.js.map