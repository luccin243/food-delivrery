(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[3],{114:function(e,t,a){"use strict";a.d(t,"h",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"g",(function(){return j})),a.d(t,"a",(function(){return d})),a.d(t,"f",(function(){return p})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(14),c=a.n(n),s=a(22),r=a(15),i=a(16).create({baseURL:r.a}),o=function(e){"undefined"!==typeof window&&localStorage.setItem("user",JSON.stringify(e))},l=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/user/all/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(c.a.mark((function e(t,a,n){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/user/stats/").concat(t,"?userId=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(c.a.mark((function e(t,a,n){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.put("".concat(r.a,"/api/user/").concat(t),n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("".concat(r.a,"/api/signup"),a,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.put("".concat(r.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/logo/read"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},145:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.icon,a=e.placeholder,c=e.value,s=e.type,r=e.action;return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"input-group m-b",children:[Object(n.jsx)("span",{className:"input-group-addon",children:Object(n.jsx)("i",{className:t})}),Object(n.jsx)("input",{type:s,value:c,onChange:r,placeholder:a,className:"form-control"})]})})}},234:function(e,t,a){"use strict";var n=a(14),c=a.n(n),s=a(22),r=a(75),i=a(0),o=(a(15),a(10)),l=a(114),u=a(1);t.a=function(e){var t=e.data,a=e.onDisable,n=e.onEdit,j=e.onLoad,d=Object(o.b)(),p=d.user,b=d.token,m=t.firstName,h=t.lastName,f=t.role,x=(t.avatar,t.disable),O=Object(i.useState)({sales:0,total:0,stock:0}),v=Object(r.a)(O,2),g=v[0],N=v[1];g.sales,g.total,g.stock;function k(){return(k=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(p._id,b,t._id);case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",console.log("Error on get user stats"));case 5:N({sales:a.sales,total:a.total,stock:a.stock});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"col-md-4 col-xs-12",children:Object(u.jsx)("div",{class:"card",style:{padding:"60px 0px"},children:Object(u.jsxs)("div",{className:"card-body text-center",children:[Object(u.jsx)("img",{alt:"profile",className:"rounded-circle margin-b-10",src:"/assets/img/avtar-4.png",style:{opacity:"".concat(x?.5:1)},width:80}),Object(u.jsxs)("p",{className:"lead margin-b-0",style:{opacity:"".concat(x?.5:1),textDecoration:"".concat(x?"line-through":"none")},children:[m," ",h]}),Object(u.jsx)("p",{className:"text-muted",children:0===f?"administrator":"User"}),0===p.role&&Object(u.jsxs)("a",{href:"#","data-toggle":"modal","data-target":"".concat(x||".myModalUpdate"),onClick:n,style:{margin:"0 5px",cursor:"".concat(x?"not-allowed":"pointer"),opacity:"".concat(x?.5:1)},class:"btn btn-info btn-icon",children:[Object(u.jsx)("i",{class:"fa fa-edit "}),"\xc9diter"]}),0===p.role&&Object(u.jsxs)("button",{type:"button",disabled:j,onClick:a,class:"btn btn-".concat(x?"success":"danger"," btn-icon"),children:[Object(u.jsx)("i",{class:"fa ".concat(x?"fa-check-circle":"fa-times")}),x?"R\xe9activer":"D\xe9sactiver"]})]})})})}},235:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.cancel,a=e.save,c=e.loader;return Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsxs)("button",{type:"button","data-dismiss":"modal",onClick:t,disabled:c,style:{cursor:"".concat(c?"wait":"pointer")},className:"btn btn-danger btn-icon",children:[Object(n.jsx)("i",{className:"fa fa-reply"}),"Retour"]}),Object(n.jsxs)("button",{type:"button",onClick:t,disabled:c,style:{cursor:"".concat(c?"wait":"pointer")},className:"btn btn-warning btn-icon",children:[Object(n.jsx)("i",{className:"fa fa-times-circle"}),"Annuler"]}),Object(n.jsxs)("button",{type:"button",disabled:c,onClick:a,style:{cursor:"".concat(c?"wait":"pointer")},className:"btn btn-success btn-icon",children:[Object(n.jsx)("i",{className:"fa ".concat(c?"fa-spinner":"fa-floppy-o "),style:{background:"".concat(c&&"transparent")}}),c?"En cours":"Sauvegarder"]})]})}},79:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(14),c=a.n(n),s=a(22),r=a(15),i=a(10),o=Object(i.b)().token,l=a(16).create({baseURL:"".concat(r.a,"/api"),timeout:1e3,headers:{Accept:"application/json",Authorization:"Bearer ".concat(o)}}),u=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.post(t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},81:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}},82:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.parent,a=e.title,c=e.content,s=e.create,r=e.handelClick;return Object(n.jsxs)("div",{className:"row page-header",children:[Object(n.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(n.jsx)("h2",{children:a}),Object(n.jsxs)("ol",{className:"breadcrumb",children:[Object(n.jsx)("li",{className:"breadcrumb-item",children:Object(n.jsx)("a",{href:"/",children:t})}),Object(n.jsx)("li",{className:"breadcrumb-item active",children:c})]})]}),s&&Object(n.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(n.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",onClick:r,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(n.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},84:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(14),r=a.n(s),i=a(22),o=a(75),l=a(12),u=a(2),j=a(10),d=a(15),p=a(1),b=function(e,t){if(e.location.pathname===t)return"active"},m=Object(u.g)((function(e){var t=e.history,a=(e.window,Object(j.b)()),s=a.user,u=(a.token,c.a.useState({firstName:"",lastName:"",role:"",avatar:""})),d=Object(o.a)(u,2),m=d[0],h=d[1];var f=function(e,t){var a=c.a.useState(localStorage.getItem(e)||t),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]}("dropDown","none"),x=Object(o.a)(f,2),O=x[0],v=x[1],g=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.firstName,a=s.lastName,n=s.role,c=s.avatar,h({firstName:t,lastName:a,role:n,avatar:c});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g()}),[]);m.firstName,m.lastName;var N=m.role;m.avatar;return Object(p.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(p.jsx)("div",{className:"nano",children:Object(p.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(p.jsx)("div",{className:"card-body nav-profile",children:Object(p.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcset:"",width:190})}),Object(p.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/")),children:Object(p.jsxs)(l.b,{to:"/",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-home"}),Object(p.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(p.jsx)("li",{className:"nav-heading",children:Object(p.jsx)("span",{children:"Application Management"})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/type")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/type",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-tasks"}),Object(p.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/ets")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/ets",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-building"}),Object(p.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/menu")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/menu",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-ticket"}),Object(p.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/meal")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/meal",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-coffee"}),Object(p.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/order")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/order",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-shopping-basket"}),Object(p.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(p.jsx)("li",{className:"nav-heading",children:Object(p.jsx)("span",{children:"Website Management"})}),Object(p.jsx)("li",{className:"nav-item ".concat("active"===O?"active":""),onClick:function(){v((function(){return"active"===O?"none":"active"}))},children:Object(p.jsxs)(l.b,{to:"#",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-th-large"}),Object(p.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(p.jsx)("span",{class:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(p.jsxs)("ul",{class:"nav-second-level nav flex-column",style:{display:"active"===O?"flex":"none"},children:[Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/banner")),children:Object(p.jsx)(l.b,{to:"/banner",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/why-choose-us")),children:Object(p.jsx)(l.b,{to:"/why-choose-us",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/features")),children:Object(p.jsx)(l.b,{to:"/features",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/download")),children:Object(p.jsx)(l.b,{to:"/download",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/app-screen")),children:Object(p.jsx)(l.b,{to:"/app-screen",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/contact-us")),children:Object(p.jsx)(l.b,{to:"/contact-us",className:"nav-link",children:Object(p.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===N||1===N)&&Object(p.jsx)("li",{className:"nav-heading",children:Object(p.jsx)("span",{children:"User management"})}),(0===N||1===N)&&Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/users")),children:Object(p.jsxs)(l.b,{to:"/users",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-group"}),Object(p.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(p.jsx)("li",{className:"nav-heading",children:Object(p.jsx)("span",{children:"SETTING"})}),Object(p.jsx)("li",{className:"nav-item ".concat(b(t,"/setting")),onClick:function(){return v("none")},children:Object(p.jsxs)(l.b,{to:"/setting",className:"nav-link",children:[Object(p.jsx)("i",{className:"fa fa-cogs"}),Object(p.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),h=a(23),f=a(8),x=a(79),O=Object(u.g)((function(e){var t,a=e.history,c=(e.window,Object(j.b)().user),s=Object(n.useState)({firstName:"",lastName:"",role:"",avatar:""}),u=Object(o.a)(s,2),b=u[0],m=u[1],O=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.firstName,a=c.lastName,n=c.role,s=c.avatar,m({firstName:t,lastName:a,role:n,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(n.useState)({logo:"icon.png",icon:"icon.png"}),g=Object(o.a)(v,2),N=g[0],k=g[1],w=N.logo,y=N.icon;Object(n.useEffect)((function(){O(),Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)("/read/config/");case 2:t=e.sent,k(Object(f.a)(Object(f.a)({},N),{},{logo:t.logo,icon:t.icon}));case 4:case"end":return e.stop()}}),e)})))()}),[]),console.log("Config",N);var C=b.firstName,A=b.lastName;b.role,b.avatar;return Object(p.jsx)("div",{className:"top-bar primary-top-bar",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)("a",{className:"admin-logo",href:"/",children:Object(p.jsxs)("h1",{children:[Object(p.jsx)("img",{alt:"Avatar",src:"".concat(d.a,"/").concat(w),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(p.jsx)("img",{alt:"icon",src:"".concat(d.a,"/").concat(y),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(p.jsx)("div",{className:"left-nav-toggle",children:Object(p.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(p.jsx)("i",{className:"fa fa-bars"})})}),Object(p.jsx)("div",{className:"left-nav-collapsed",children:Object(p.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(p.jsx)("i",{className:"fa fa-bars"})})}),Object(p.jsx)("ul",{className:"list-inline top-right-nav",children:Object(p.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(p.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(p.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),C," ",A]}),Object(p.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(p.jsx)("li",{children:Object(p.jsxs)(l.b,(t={className:"dropdown-item",to:"/setting"},Object(h.a)(t,"className","nav-link"),Object(h.a)(t,"children",[Object(p.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),t))}),Object(p.jsx)("li",{className:"dropdown-divider"}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(j.d)((function(){a.push("/login")}))},children:[Object(p.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));t.a=function(e){var t=e.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsx)(m,{}),t]})}}}]);
//# sourceMappingURL=3.7e2a75dc.chunk.js.map