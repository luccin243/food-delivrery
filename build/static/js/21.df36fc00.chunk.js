(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[21],{100:function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(15),a=r.n(n),c=r(22),s=r(14),o=r(16).create({baseURL:s.a}),i=function(e){"undefined"!==typeof window&&localStorage.setItem("user",JSON.stringify(e))},u=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.put("".concat(s.a,"/api/user/").concat(t),n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("".concat(s.a,"/api/signup"),r,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.put("".concat(s.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get("".concat(s.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get("".concat(s.a,"/api/logo/read"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()},594:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r.n(n),c=r(22),s=r(23),o=r(8),i=r(76),u=(r(37),r(0)),l=r(10),p=(r(14),r(2)),d=r(100),b=r(1);t.default=function(){var e=Object(u.useState)({error:"",email:"",password:"",loader:!1,redirect:!1}),t=Object(i.a)(e,2),r=t[0],n=t[1],j=Object(u.useState)(""),f=Object(i.a)(j,2),m=(f[0],f[1]),h=r.error,v=r.email,x=r.password,O=r.redirect,g=r.loader,y=function(e){return function(t){n(Object(o.a)(Object(o.a)({},r),{},Object(s.a)({error:!1},e,t.target.value)))}},w=function(){var e=Object(c.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(Object(o.a)(Object(o.a)({},r),{},{error:!1,loader:!0})),e.next=4,Object(l.c)({email:v,password:x});case 4:(c=e.sent).error?n(Object(o.a)(Object(o.a)({},r),{},{error:c.error,redirect:!1,loader:!1})):Object(l.a)(c,(function(){var e=c.user,t=e.firstName,a=e.lastName,s=e.email,i=e.role,u=e.avatar,l=e.password;Object(d.f)({firstName:t,lastName:a,email:s,role:i,avatar:u,password:l}),n(Object(o.a)(Object(o.a)({},r),{},{loader:!1,redirect:!0}))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)();case 2:t=e.sent,m(t.logo);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(b.jsxs)("div",{className:"wrapper d-flex align-items-center justify-content-center",style:{width:"100vw",height:"100vh",position:"absolute",boxSizing:"border-box",top:0},children:[function(e){return e||Object(l.b)()?Object(b.jsx)(p.a,{to:"/"}):void 0}(O),Object(b.jsxs)("div",{className:"row w-100 h-100",children:[Object(b.jsxs)("div",{className:"col-md-6 bg-primary",style:{background:"url(/assets/img/bg.jpg) no-repeat",backgroundSize:"cover"},children:[Object(b.jsx)("div",{style:{width:"100%",height:"100%",background:"#000",position:"absolute",left:0,opacity:" 0.5"}}),Object(b.jsx)("div",{className:"row h-100 d-flex align-items-center justify-content-center",children:Object(b.jsxs)("div",{className:"col-md-8 text-center",children:[Object(b.jsxs)("h2",{style:{lineHeight:"1.6"},children:["Welcom to ",Object(b.jsx)("br",{})," Bienfafood Admin Panel"]}),Object(b.jsx)("h5",{className:"p-3",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]})})]}),Object(b.jsx)("div",{className:"col-md-6 d-flex align-items-center justify-content-center",children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsx)("div",{className:"text-center m-4",children:Object(b.jsx)("img",{alt:"icon",src:"/assets/img/logo.png",className:"img-fluid p-4"})}),h&&Object(b.jsxs)("div",{class:"alert bg-danger alert-dismissible fade show",role:"alert",children:[h,Object(b.jsx)("button",{type:"button",class:"close",onClick:function(){n(Object(o.a)(Object(o.a)({},r),{},{error:"",email:"",password:"",loader:!1}))},"data-dismiss":"alert","aria-label":"Close"})]}),Object(b.jsxs)("form",{onSubmit:w,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleuser1",children:"Email"}),Object(b.jsxs)("div",{className:"group-icon",children:[Object(b.jsx)("input",{id:"exampleuser1",type:"text",placeholder:"Email",className:"form-control ".concat(h&&"is-invalid"),onChange:y("email"),required:"",name:"email"}),Object(b.jsx)("span",{className:"icon-user text-muted icon-input"})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",children:"Mot de passe"}),Object(b.jsxs)("div",{className:"group-icon",children:[Object(b.jsx)("input",{id:"exampleInputPassword1",type:"password",name:"password",className:"form-control ".concat(h&&"is-invalid"),onChange:y("password"),placeholder:"Mot de passe"}),Object(b.jsx)("span",{className:"icon-lock text-muted icon-input"})]})]}),Object(b.jsxs)("button",{type:"submit",disabled:g,style:{cursor:"pointer"},className:"btn btn-block btn-primary btn-rounded box-shadow mt-3",children:[Object(b.jsx)("span",{class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),g?"Loading...":"Connexion"]})]}),Object(b.jsx)("div",{className:"text-center m-4",children:Object(b.jsxs)("p",{className:"copyright",children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood App and Designed by"," ",Object(b.jsx)("span",{children:Object(b.jsx)("a",{id:"copyright-link",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})]})})})]})]})}},76:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(i){a=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=21.df36fc00.chunk.js.map