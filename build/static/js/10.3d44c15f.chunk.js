(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[10],{108:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return u}));var c=a(15),s=a.n(c),n=a(22),r=a(14),i=a(16).create({baseURL:r.a}),l=function(e){"undefined"!==typeof window&&localStorage.setItem("user",JSON.stringify(e))},o=function(){var e=Object(n.a)(s.a.mark((function e(t,a,c){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.put("".concat(r.a,"/api/user/").concat(t),c,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("".concat(r.a,"/api/signup"),a,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.put("".concat(r.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/user/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.get("".concat(r.a,"/api/logo/read"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},126:function(e,t,a){"use strict";a(0);var c=a(1);t.a=function(e){var t=e.icon,a=e.placeholder,s=e.value,n=e.type,r=e.action;return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("div",{className:"input-group m-b",children:[Object(c.jsx)("span",{className:"input-group-addon",children:Object(c.jsx)("i",{className:t})}),Object(c.jsx)("input",{type:n,value:s,onChange:r,placeholder:a,className:"form-control"})]})})}},176:function(e,t,a){"use strict";a(0);var c=a(14),s=a(10),n=a(1);t.a=function(e){var t=e.data,a=e.onDisable,r=(e.onEdit,e.onLoad),i=Object(s.b)().user,l=t.firstName,o=t.lastName,d=t.avatar,j=t.disable,b=t.stat;return Object(n.jsx)("div",{className:"col-md-4 col-xs-12",children:Object(n.jsx)("div",{class:"card",children:Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("img",{alt:"profile",className:"rounded-circle margin-b-10",src:"".concat(c.a,"/").concat(d),style:{opacity:"".concat(j?.5:1)},width:80}),Object(n.jsxs)("p",{className:"lead margin-b-0 p-3",style:{opacity:"".concat(j?.5:1),textDecoration:"".concat(j?"line-through":"none")},children:[l," ",o]}),0===i.role&&Object(n.jsxs)("button",{type:"button",disabled:r,onClick:a,class:"btn btn-".concat(j?"success":"danger"," btn-icon"),children:[Object(n.jsx)("i",{class:"fa ".concat(j?"fa-check-circle":"fa-times")}),j?"Active":"Disable"]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("ul",{className:"list-unstyled margin-b-0 text-center row",children:[Object(n.jsxs)("li",{className:"col-4",children:[Object(n.jsx)("span",{className:"font-600 text-success",children:b.un}),Object(n.jsx)("p",{className:"text-success text-sm margin-b-0",children:"Order paid"})]}),Object(n.jsxs)("li",{className:"col-4",children:[Object(n.jsx)("span",{className:"font-600 ",children:b.deux}),Object(n.jsx)("p",{className:"text-muted text-sm margin-b-0",children:"Order denied"})]}),Object(n.jsxs)("li",{className:"col-4",children:[Object(n.jsx)("span",{className:"font-600 text-danger",children:b.trois}),Object(n.jsx)("p",{className:"text-danger text-sm margin-b-0",children:"Order canceled"})]})]})]})})})}},177:function(e,t,a){"use strict";a(0);var c=a(1);t.a=function(e){var t=e.cancel,a=e.save,s=e.loader;return Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsxs)("button",{type:"button","data-dismiss":"modal",onClick:t,disabled:s,style:{cursor:"".concat(s?"wait":"pointer")},className:"btn btn-danger btn-icon",children:[Object(c.jsx)("i",{className:"fa fa-reply"}),"Retour"]}),Object(c.jsxs)("button",{type:"button",onClick:t,disabled:s,style:{cursor:"".concat(s?"wait":"pointer")},className:"btn btn-warning btn-icon",children:[Object(c.jsx)("i",{className:"fa fa-times-circle"}),"Annuler"]}),Object(c.jsxs)("button",{type:"button",disabled:s,onClick:a,style:{cursor:"".concat(s?"wait":"pointer")},className:"btn btn-success btn-icon",children:[Object(c.jsx)("i",{className:"fa ".concat(s?"fa-spinner":"fa-floppy-o "),style:{background:"".concat(s&&"transparent")}}),s?"En cours":"Sauvegarder"]})]})}},626:function(e,t,a){"use strict";a.r(t);var c=a(15),s=a.n(c),n=a(22),r=a(23),i=a(8),l=a(75),o=a(0),d=a(14),j=a(10),b=a(108),u=a(1),m=function(e){var t=e.data,a=e.onDisable,c=(e.onEdit,e.onLoad),s=Object(j.b)(),n=s.user,r=(s.token,t.firstName),i=t.lastName,l=(t.role,t.avatar),o=t.disable,b=t.stat;return Object(u.jsx)("div",{className:"col-md-4 col-xs-12",children:Object(u.jsx)("div",{class:"card",children:Object(u.jsxs)("div",{className:"card-body text-center",children:[Object(u.jsx)("img",{alt:"profile",className:"rounded-circle margin-b-10",src:"".concat(d.a,"/").concat(l),style:{opacity:"".concat(o?.5:1)},width:80}),Object(u.jsxs)("p",{className:"lead margin-b-0 p-3",style:{opacity:"".concat(o?.5:1),textDecoration:"".concat(o?"line-through":"none")},children:[r," ",i]}),0===n.role&&Object(u.jsxs)("button",{type:"button",disabled:c,onClick:a,class:"btn btn-".concat(o?"success":"danger"," btn-icon"),children:[Object(u.jsx)("i",{class:"fa ".concat(o?"fa-check-circle":"fa-times")}),o?"Active":"Disable"]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("ul",{className:"list-unstyled margin-b-0 text-center row",children:[Object(u.jsxs)("li",{className:"col-4",children:[Object(u.jsx)("span",{className:"font-600 text-indigo",children:b&&b.un}),Object(u.jsx)("p",{className:"text-indigo text-sm margin-b-0",children:"Orders closed"})]}),Object(u.jsxs)("li",{className:"col-4",children:[Object(u.jsx)("span",{className:"font-600 text-waring",children:b&&b.deux}),Object(u.jsx)("p",{className:"text-waring text-sm margin-b-0",children:"Pending orders"})]}),Object(u.jsxs)("li",{className:"col-4",children:[Object(u.jsx)("span",{className:"font-600 text-success",children:b&&b.trois}),Object(u.jsx)("p",{className:"text-success text-sm margin-b-0",children:"Orders delivered"})]})]})]})})})},p=a(176),O=function(e){var t=e.data,a=e.onDisable,c=e.onEdit,s=e.onLoad,n=Object(j.b)(),r=(n.user,n.token,t.firstName),i=t.lastName,l=(t.role,t.avatar),o=t.disable;return Object(u.jsx)("div",{className:"col-md-4 col-xs-12",children:Object(u.jsxs)("div",{className:"widget white-bg text-center",children:[Object(u.jsx)("img",{alt:"profile",className:"rounded-circle margin-b-10",src:"".concat(d.a,"/").concat(l),style:{opacity:"".concat(o?.5:1)},width:80}),Object(u.jsxs)("p",{className:"lead margin-b-0 p-3",style:{opacity:"".concat(o?.5:1),textDecoration:"".concat(o?"line-through":"none")},children:[r," ",i]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("a",{href:"#","data-toggle":"modal","data-target":"".concat(o||".myModalUpdate"),onClick:c,style:{margin:"0 5px",cursor:"".concat(o?"not-allowed":"pointer"),opacity:"".concat(o?.5:1)},class:"btn btn-info btn-icon",children:[Object(u.jsx)("i",{class:"fa fa-edit "}),"\xc9diter"]}),Object(u.jsxs)("button",{type:"button",disabled:s,onClick:a,class:"btn btn-".concat(o?"success":"danger"," btn-icon"),children:[Object(u.jsx)("i",{class:"fa ".concat(o?"fa-check-circle":"fa-times")}),o?"Active":"Disable"]})]})]})})},x=a(81),h=a(83),f=a(82),v=a(177),g=a(126),N=a(612),y=a(78),k=a(628),w=a(326);t.default=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),a=(t[0],t[1],Object(o.useState)("")),c=Object(l.a)(a,2),d=c[0],C=c[1],D=Object(o.useState)(""),S=Object(l.a)(D,2),A=S[0],L=S[1],_=Object(o.useState)(""),E=Object(l.a)(_,2),M=E[0],B=E[1],R=Object(o.useState)({updateFirstName:"",updateLastName:"",updateRole:"",id:""}),P=Object(l.a)(R,2),T=P[0],U=P[1],z=Object(o.useState)({firstName:"",lastName:"",email:"",password:"",role:""}),F=Object(l.a)(z,2),I=F[0],H=F[1],J=Object(o.useState)({error:"",success:"",loading:!1}),V=Object(l.a)(J,2),W=V[0],G=V[1],Y=Object(o.useState)({total:0,page:0,pages:0,limit:10}),q=Object(l.a)(Y,2),K=q[0],Q=q[1],X=Object(o.useState)(!1),Z=Object(l.a)(X,2),$=Z[0],ee=(Z[1],Object(o.useState)(!1)),te=Object(l.a)(ee,2),ae=(te[0],te[1],Object(o.useState)(!1)),ce=Object(l.a)(ae,2),se=(ce[0],ce[1],K.total,K.page),ne=(K.pages,K.limit),re=W.loading,ie=W.loader,le=W.success,oe=W.error,de=I.firstName,je=I.lastName,be=I.role,ue=I.password,me=I.email,pe=T.updateFirstName,Oe=T.updateLastName,xe=T.updateRole,he=T.id,fe=Object(j.b)(),ve=fe.user,ge=fe.token,Ne=function(e){return function(t){G({error:!1,success:!1,loader:!1}),H(Object(i.a)(Object(i.a)({},I),{},Object(r.a)({},e,t.target.value)))}},ye=function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(t);case 2:if(!(a=e.sent).error){e.next=5;break}return e.abrupt("return",G({error:a.error,loader:!1,success:!1}));case 5:U({updateFirstName:a.firstName,updateLastName:a.lastName,updateRole:a.role,id:a._id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(e){return function(t){G({error:!1,success:!1,loader:!1}),U(Object(i.a)(Object(i.a)({},T),{},Object(r.a)({},e,t.target.value)))}},we=function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),G({error:!1,success:!1,loader:!0}),e.next=4,Object(b.a)(ge,I);case 4:if(!(a=e.sent).error){e.next=7;break}return e.abrupt("return",G({error:a.error,loader:!1}));case 7:G({error:!1,success:a.message,loader:!1}),H({firstName:"",lastName:"",role:"",password:"",email:""});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),G({error:!1,success:!1,loader:!0}),t.next=4,Object(b.e)(e,ge,{firstName:pe,lastName:Oe,role:xe});case 4:if(!(c=t.sent).error){t.next=7;break}return t.abrupt("return",G(Object(i.a)(Object(i.a)({},W),{},{error:c.error,loader:!1})));case 7:G(Object(i.a)(Object(i.a)({},W),{},{loader:!1,success:c.message})),U(Object(i.a)(Object(i.a)({},T),{},{updateFirstName:c.firstName,updateLastName:c.lastName,updateRole:c.role}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},De=function(){H({firstName:"",lastName:"",role:"",password:"",email:""}),G({error:!1,success:!1,loader:!1})},Se=function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G({error:!1,success:!1,loader:!0}),e.next=3,Object(b.d)(t,ge);case 3:if(!(a=e.sent).error){e.next=6;break}return e.abrupt("return",G({error:a.error,success:!1,loader:!1}));case 6:G({error:!1,success:!1,loader:!1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(Object(i.a)(Object(i.a)({},W),{},{loading:!0})),e.next=3,Object(y.b)("/read/all/client/".concat(ve._id,"?limit=").concat(ne,"&page=").concat(se));case 3:if(!(t=e.sent)||!t.error){e.next=6;break}return e.abrupt("return",G(Object(i.a)(Object(i.a)({},W),{},{loading:!1,error:t.error})));case 6:C(t&&t.data),Q(Object(i.a)(Object(i.a)({},K),{},{total:t.total,page:t.page})),G(Object(i.a)(Object(i.a)({},W),{},{loading:!1}));case 9:case"end":return e.stop()}}),e)})))()}),[ne,$,se]),Object(o.useEffect)((function(){Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(Object(i.a)(Object(i.a)({},W),{},{loading:!0})),e.next=3,Object(y.b)("/read/all/livreur/".concat(ve._id,"?limit=").concat(ne,"&page=").concat(se));case 3:if(!(t=e.sent)||!t.error){e.next=6;break}return e.abrupt("return",G(Object(i.a)(Object(i.a)({},W),{},{loading:!1,error:t.error})));case 6:B(t&&t.data),Q(Object(i.a)(Object(i.a)({},K),{},{total:t.total,page:t.page})),G(Object(i.a)(Object(i.a)({},W),{},{loading:!1}));case 9:case"end":return e.stop()}}),e)})))()}),[ne,$,se]),Object(o.useEffect)((function(){Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(Object(i.a)(Object(i.a)({},W),{},{loading:!0})),e.next=3,Object(y.b)("/read/all/admin/".concat(ve._id,"?limit=").concat(ne,"&page=").concat(se));case 3:if(!(t=e.sent)||!t.error){e.next=6;break}return e.abrupt("return",G(Object(i.a)(Object(i.a)({},W),{},{loading:!1,error:t.error})));case 6:L(t&&t.data),Q(Object(i.a)(Object(i.a)({},K),{},{total:t.total,page:t.page})),G(Object(i.a)(Object(i.a)({},W),{},{loading:!1}));case 9:case"end":return e.stop()}}),e)})))()}),[ne,$,se]),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(f.a,{parent:"Accueil",content:"Utilisateurs",title:"Liste de utitlisateurs",create:!0}),Object(u.jsx)("div",{class:"modal fade myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myDefaultModalLabel",children:Object(u.jsx)("div",{class:"modal-dialog",role:"document",children:Object(u.jsxs)("div",{class:"modal-content",children:[Object(u.jsxs)("div",{class:"modal-header",children:[Object(u.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:De,children:Object(u.jsx)("span",{"aria-hidden":"true",class:"fa fa-times"})}),Object(u.jsx)("h5",{class:"modal-title",id:"myDefaultModalLabel",children:"Nouvel utilisateur"})]}),ie&&Object(u.jsx)(N.a,{color:"secondary",style:{width:"100%"}}),Object(u.jsxs)("div",{class:"modal-body",children:[(oe||le)&&Object(u.jsxs)("div",{class:"alert bg-".concat(oe?"danger":"success"," alert-dismissible fade show"),role:"alert",children:[Object(u.jsxs)("strong",{children:[oe?"Erreur":"Succ\xe8s","!"]})," ",oe||le]}),Object(u.jsx)(g.a,{icon:"fa fa-user",action:Ne("firstName"),value:de,type:"text",placeholder:"Nom"}),Object(u.jsx)(g.a,{icon:"fa fa-user",action:Ne("lastName"),value:je,type:"text",placeholder:"Postnom"}),Object(u.jsx)(g.a,{icon:"fa fa-at",action:Ne("email"),value:me,type:"text",placeholder:"Email"}),Object(u.jsx)(g.a,{icon:"fa fa-unlock",action:Ne("password"),value:ue,type:"password",placeholder:"Mot de passe"}),0===ve.role&&Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("select",{onChange:Ne("role"),class:"form-control",value:be,children:[Object(u.jsx)("option",{value:"",children:"R\xf4le"}),Object(u.jsx)("option",{value:0,children:"Administrateur"}),Object(u.jsx)("option",{value:1,children:"Distributeur"}),Object(u.jsx)("option",{value:2,children:"Vendeur"})]})})]}),Object(u.jsx)(v.a,{save:we,loader:ie,cancel:De})]})})}),Object(u.jsx)("div",{class:"modal fade myModalUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"myDefaultModalLabel",children:Object(u.jsx)("div",{class:"modal-dialog",role:"document",children:Object(u.jsxs)("div",{class:"modal-content",children:[Object(u.jsxs)("div",{class:"modal-header",children:[Object(u.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:De,children:Object(u.jsx)("span",{"aria-hidden":"true",class:"fa fa-times"})}),Object(u.jsx)("h5",{class:"modal-title",id:"myDefaultModalLabel",children:"Modifier l'utilisateur"})]}),ie&&Object(u.jsx)(N.a,{color:"secondary",style:{width:"100%"}}),Object(u.jsxs)("div",{class:"modal-body",children:[(oe||le)&&Object(u.jsxs)("div",{class:"alert bg-".concat(oe?"danger":"success"," alert-dismissible fade show"),role:"alert",children:[Object(u.jsxs)("strong",{children:[oe?"Erreur":"Succ\xe8s","!"]})," ",oe||le]}),Object(u.jsx)(g.a,{icon:"fa fa-user",action:ke("updateFirstName"),value:pe,type:"text",placeholder:"Nom"}),Object(u.jsx)(g.a,{icon:"fa fa-user",action:ke("updateLastName"),value:Oe,type:"text",placeholder:"Postnom"}),ve._id!==he&&Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("select",{onChange:ke("updateRole"),class:"form-control",value:xe,children:[Object(u.jsx)("option",{value:"",children:"R\xf4le"}),Object(u.jsx)("option",{value:0,children:"Administrateur"}),Object(u.jsx)("option",{value:1,children:"Distributeur"}),Object(u.jsx)("option",{value:2,children:"Vendeur"})]})})]}),Object(u.jsx)(v.a,{save:Ce(he),loader:ie,cancel:De})]})})}),Object(u.jsxs)("section",{className:"main-content",children:[Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("div",{className:"tabs",children:[Object(u.jsxs)("ul",{className:"nav nav-tabs justify-content-around",children:[Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("a",{className:"nav-link text-tab active",href:"#home","aria-controls":"home",role:"tab","data-toggle":"tab","aria-selected":"true",children:"Clients"})}),Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("a",{className:"nav-link text-tab",href:"#profile","aria-controls":"profile",role:"tab","data-toggle":"tab","aria-selected":"false",children:"Delivery persons"})}),Object(u.jsx)("li",{className:"nav-item",role:"presentation",children:Object(u.jsx)("a",{className:"nav-link text-tab",href:"#messages","aria-controls":"messages",role:"tab","data-toggle":"tab","aria-selected":"false",children:"Admin"})})]}),Object(u.jsxs)("div",{className:"tab-content",children:[re&&Object(u.jsx)(k.a,{backdrop:!0,content:"loading...",style:{zIndex:2}}),Object(u.jsxs)("div",{role:"tabpanel",className:"tab-pane active",id:"home",children:[Object(u.jsx)("div",{className:"row",style:{position:"relative",minHeight:400},children:d&&d.map((function(e,t){if(e._id!==ve._id)return Object(u.jsx)(p.a,{data:e,onLoad:ie,onEdit:function(){return ye(e._id)},onDisable:function(){return Se(e._id)}},e._id)}))}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(w.a,{prev:!0,next:!0,first:!0,last:!0,ellipsis:!0,boundaryLinks:!0,activePage:1,pages:30,maxButtons:5})})]}),Object(u.jsxs)("div",{role:"tabpanel",className:"tab-pane",id:"profile",children:[Object(u.jsx)("div",{className:"row",style:{position:"relative",minHeight:400},children:M&&M.map((function(e,t){if(e._id!==ve._id)return Object(u.jsx)(m,{data:e,onLoad:ie,onEdit:function(){return ye(e._id)},onDisable:function(){return Se(e._id)}},e._id)}))}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(w.a,{prev:!0,next:!0,first:!0,last:!0,ellipsis:!0,boundaryLinks:!0,activePage:1,pages:30,maxButtons:5})})]}),Object(u.jsxs)("div",{role:"tabpanel",className:"tab-pane",id:"messages",children:[Object(u.jsx)("div",{className:"row",style:{position:"relative",minHeight:400},children:A&&A.map((function(e,t){if(e._id!==ve._id)return Object(u.jsx)(O,{data:e,onLoad:ie,onEdit:function(){return ye(e._id)},onDisable:function(){return Se(e._id)}},e._id)}))}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(w.a,{prev:!0,next:!0,first:!0,last:!0,ellipsis:!0,boundaryLinks:!0,activePage:1,pages:30,maxButtons:5})})]})]})]})})}),Object(u.jsx)(x.a,{})]})]})}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var c=a(15),s=a.n(c),n=a(22),r=a(14),i=a(10),l=Object(i.b)().token,o=a(16).create({baseURL:"".concat(r.a,"/api"),timeout:1e3,headers:{Accept:"application/json",Authorization:"Bearer ".concat(l)}}),d=function(){var e=Object(n.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post(t,a);case 3:return c=e.sent,e.abrupt("return",c.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},81:function(e,t,a){"use strict";a(0);var c=a(1);t.a=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(c.jsx)("span",{children:Object(c.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}},82:function(e,t,a){"use strict";a(0);var c=a(1);t.a=function(e){var t=e.parent,a=e.title,s=e.content,n=e.create,r=e.handelClick,i=e.text;return Object(c.jsxs)("div",{className:"row page-header",children:[Object(c.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(c.jsx)("h2",{children:a}),Object(c.jsxs)("ol",{className:"breadcrumb",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)("a",{href:"/",children:t})}),Object(c.jsx)("li",{className:"breadcrumb-item active",children:s})]})]}),n&&Object(c.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(c.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:i,onClick:r,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(c.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},83:function(e,t,a){"use strict";var c=a(0),s=a.n(c),n=a(15),r=a.n(n),i=a(22),l=a(75),o=a(12),d=a(2),j=a(10),b=a(14),u=a(1),m=function(e,t){if(e.location.pathname===t)return"active"},p=Object(d.g)((function(e){var t=e.history,a=(e.window,Object(j.b)()),n=a.user,d=(a.token,s.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(l.a)(d,2),p=b[0],O=b[1];var x=function(e,t){var a=s.a.useState(localStorage.getItem(e)||t),n=Object(l.a)(a,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]}("dropDown","none"),h=Object(l.a)(x,2),f=h[0],v=h[1],g=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.firstName,a=n.lastName,c=n.role,s=n.avatar,O({firstName:t,lastName:a,role:c,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g()}),[]);p.firstName,p.lastName;var N=p.role;p.avatar;return Object(u.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(u.jsx)("div",{className:"nano",children:Object(u.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(u.jsx)("div",{className:"card-body nav-profile",children:Object(u.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcset:"",width:190})}),Object(u.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/")),children:Object(u.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-home"}),Object(u.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Application Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/type")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-tasks"}),Object(u.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/ets")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-building"}),Object(u.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/menu")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-ticket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/meal")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-coffee"}),Object(u.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/order")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-shopping-basket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Website Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat("active"===f?"active":""),onClick:function(){v((function(){return"active"===f?"none":"active"}))},children:Object(u.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-th-large"}),Object(u.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(u.jsx)("span",{class:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(u.jsxs)("ul",{class:"nav-second-level nav flex-column",style:{display:"active"===f?"flex":"none"},children:[Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/banner")),children:Object(u.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/why-choose-us")),children:Object(u.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/features")),children:Object(u.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/download")),children:Object(u.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/app-screen")),children:Object(u.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/contact-us")),children:Object(u.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===N||1===N)&&Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"User management"})}),(0===N||1===N)&&Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/users")),children:Object(u.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-group"}),Object(u.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"SETTING"})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/setting")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-cogs"}),Object(u.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),O=a(23),x=a(8),h=a(78),f=Object(d.g)((function(e){var t,a=e.history,s=(e.window,Object(j.b)().user),n=Object(c.useState)({firstName:"",lastName:"",role:"",avatar:""}),d=Object(l.a)(n,2),m=d[0],p=d[1],f=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.firstName,a=s.lastName,c=s.role,n=s.avatar,p({firstName:t,lastName:a,role:c,avatar:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(c.useState)({logo:"icon.png",icon:"icon.png"}),g=Object(l.a)(v,2),N=g[0],y=g[1],k=N.logo,w=N.icon;Object(c.useEffect)((function(){f(),Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)("/read/config/");case 2:t=e.sent,y(Object(x.a)(Object(x.a)({},N),{},{logo:t.logo,icon:t.icon}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var C=m.firstName,D=m.lastName;m.role,m.avatar;return Object(u.jsx)("div",{className:"top-bar primary-top-bar",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("a",{className:"admin-logo",href:"/",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(k),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(u.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(w),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(u.jsx)("div",{className:"left-nav-toggle",children:Object(u.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("div",{className:"left-nav-collapsed",children:Object(u.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("ul",{className:"list-inline top-right-nav",children:Object(u.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(u.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(u.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),C," ",D]}),Object(u.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,(t={className:"dropdown-item",to:"/setting"},Object(O.a)(t,"className","nav-link"),Object(O.a)(t,"children",[Object(u.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),t))}),Object(u.jsx)("li",{className:"dropdown-divider"}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(j.d)((function(){a.push("/login")}))},children:[Object(u.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));t.a=function(e){var t=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsx)(p,{}),t]})}}}]);
//# sourceMappingURL=10.3d44c15f.chunk.js.map