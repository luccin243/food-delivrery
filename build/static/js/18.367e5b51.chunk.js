(this.webpackJsonpBienfafood=this.webpackJsonpBienfafood||[]).push([[18],{100:function(e,a,c){"use strict";c(0);var s=c(1);a.a=function(e){var a=e.parent,c=e.title,n=e.content,t=e.create,l=e.handelClick,i=e.text;return Object(s.jsxs)("div",{className:"row page-header",children:[Object(s.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(s.jsx)("h2",{children:c}),Object(s.jsxs)("ol",{className:"breadcrumb",children:[Object(s.jsx)("li",{className:"breadcrumb-item",children:Object(s.jsx)("a",{href:"/",children:a})}),Object(s.jsx)("li",{className:"breadcrumb-item active",children:n})]})]}),t&&Object(s.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(s.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:i,onClick:l,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(s.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},101:function(e,a,c){"use strict";var s=c(0),n=c.n(s),t=c(5),l=c.n(t),i=c(10),r=c(24),o=c(15),j=c(2),d=c(12),b=c(14),m=c(1),h=function(e,a){if(e.location.pathname===a)return"active"},O=Object(j.g)((function(e){var a=e.history,c=(e.window,Object(d.b)()),t=c.user,j=(c.token,n.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(r.a)(j,2),O=b[0],x=b[1];var N=function(e,a){var c=n.a.useState(localStorage.getItem(e)||a),t=Object(r.a)(c,2),l=t[0],i=t[1];return Object(s.useEffect)((function(){localStorage.setItem(e,l)}),[e,l]),[l,i]}("dropDown","none"),u=Object(r.a)(N,2),f=u[0],v=u[1],g=function(){var e=Object(i.a)(l.a.mark((function e(){var a,c,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.firstName,c=t.lastName,s=t.role,n=t.avatar,x({firstName:a,lastName:c,role:s,avatar:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){g()}),[]);O.firstName,O.lastName;var p=O.role;O.avatar;return Object(m.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(m.jsx)("div",{className:"nano",children:Object(m.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(m.jsx)("div",{className:"card-body nav-profile",children:Object(m.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcSet:"",width:190})}),Object(m.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/")),children:Object(m.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-home"}),Object(m.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Application Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/type")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-tasks"}),Object(m.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/ets")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-building"}),Object(m.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/menu")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-ticket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/meal")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-coffee"}),Object(m.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/order")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-shopping-basket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Website Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat("active"===f?"active":""),onClick:function(){v((function(){return"active"===f?"none":"active"}))},children:Object(m.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-th-large"}),Object(m.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(m.jsx)("span",{className:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(m.jsxs)("ul",{className:"nav-second-level nav flex-column",style:{display:"active"===f?"flex":"none"},children:[Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/banner")),children:Object(m.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/why-choose-us")),children:Object(m.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/features")),children:Object(m.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/download")),children:Object(m.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/app-screen")),children:Object(m.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/contact-us")),children:Object(m.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===p||1===p)&&Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"User management"})}),(0===p||1===p)&&Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/users")),children:Object(m.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-group"}),Object(m.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"SETTING"})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/setting")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-cogs"}),Object(m.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),x=c(26),N=c(27),u=c(25),f=Object(j.g)((function(e){var a,c=e.history,n=(e.window,Object(d.b)()),t=n.user,j=n.token,h=Object(s.useContext)(N.a),O=Object(s.useState)({firstName:"",lastName:"",role:"",avatar:""}),f=Object(r.a)(O,2),v=f[0],g=f[1],p=h.logo,k=h.icon,w=v.firstName,y=v.lastName,C=(v.role,v.avatar);return Object(s.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var a,c,s,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)("/user/".concat(t._id),j);case 2:a=e.sent,c=a.firstName,s=a.lastName,n=a.role,i=a.avatar,g({firstName:c,lastName:s,role:n,avatar:i});case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(m.jsx)("div",{className:"top-bar primary-top-bar",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("a",{className:"admin-logo",href:"/",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(p),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(m.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(k),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(m.jsx)("div",{className:"left-nav-toggle",children:Object(m.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("div",{className:"left-nav-collapsed",children:Object(m.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("ul",{className:"list-inline top-right-nav",children:Object(m.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(m.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(m.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"".concat(b.a,"/").concat(C),width:30}),w," ",y]}),Object(m.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,(a={className:"dropdown-item",to:"/setting"},Object(x.a)(a,"className","nav-link"),Object(x.a)(a,"children",[Object(m.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),a))}),Object(m.jsx)("li",{className:"dropdown-divider"}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(d.d)((function(){c.push("/login")}))},children:[Object(m.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));a.a=function(e){var a=e.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(O,{}),a]})}},621:function(e,a,c){"use strict";c.r(a),c.d(a,"default",(function(){return i}));var s=c(99),n=c(101),t=c(100),l=c(1);function i(){return Object(l.jsxs)(n.a,{children:[Object(l.jsx)(t.a,{parent:"Home",content:"ContactUs",title:"Edit ContactUs Section",create:!1}),Object(l.jsx)(s.a,{})]})}},99:function(e,a,c){"use strict";c(0);var s=c(1);a.a=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(s.jsx)("span",{children:Object(s.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}}}]);
//# sourceMappingURL=18.367e5b51.chunk.js.map