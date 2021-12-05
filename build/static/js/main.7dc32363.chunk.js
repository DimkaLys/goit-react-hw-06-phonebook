(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),i=n.n(r),b=n(3),o=n(15),j=(n(29),n(30),n(31),n(1));function s(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})}var d=function(e){return e.contacts},u=function(e){return e.filter},l=n(4),O=Object(l.b)("contacts/add"),m=Object(l.b)("contacts/delete"),h=Object(l.b)("contacts/filter");function f(e){var t=e.id,n=e.name,c=e.number,a=Object(b.b)();return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{children:[n,":"]}),Object(j.jsx)("span",{children:c}),Object(j.jsx)("button",{type:"button",id:t,onClick:function(){!function(e){a(m(e))}({id:t})},children:"Delete"})]})}function x(){var e=Object(b.c)(d),t=Object(b.c)(u),n=Object(c.useMemo)((function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),[t,e]);return Object(j.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(j.jsx)(f,{id:t,name:n,number:c},t)}))})}var p=n(13),v=n(37);function C(){var e=Object(b.c)(d),t=Object(b.b)(),n=Object(c.useState)(""),a=Object(p.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(p.a)(o,2),u=s[0],l=s[1],m=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":l(c);break;default:return}},h=function(n){var c=n.name.toLowerCase();e.find((function(e){return e.name.toLowerCase()===c}))?alert("".concat(n.name," is already in contacts")):t(O(n))},f=Object(v.a)(),x=Object(v.a)();return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({name:r,number:u,id:Object(v.a)()}),i(""),l("")},children:[Object(j.jsx)("label",{htmlFor:f,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:f,onChange:m}),Object(j.jsx)("label",{htmlFor:x,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:x,onChange:m}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}function g(){var e=Object(b.c)(u),t=Object(b.b)(),n=Object(c.useCallback)((function(e){t(h(e.target.value))}),[t]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:Object(v.a)(),children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",value:e,id:Object(v.a)(),onChange:n})]})}function k(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(s,{title:"Phonebook",children:Object(j.jsx)(C,{})}),Object(j.jsxs)(s,{title:"Contacts",children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{})]})]})}var y,w=n(9),A=n(10),z=n(2),L=Object(l.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(y={},Object(A.a)(y,O,(function(e,t){return[].concat(Object(w.a)(e),[t.payload])})),Object(A.a)(y,m,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),y)),S=Object(l.c)("",Object(A.a)({},h,(function(e,t){return t.payload}))),F=Object(z.b)({contacts:L,filter:S}),J=n(5),M=n(16),Z=n.n(M),q=n(17),B={key:"contacts",storage:n.n(q).a,blacklist:["filter"]},D=[].concat(Object(w.a)(Object(l.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[Z.a]),E=Object(J.g)(B,F),N=Object(l.a)({reducer:E,middleware:D,devTools:!1}),H=Object(J.h)(N);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b.a,{store:N,children:Object(j.jsx)(o.a,{loading:"Loading...",persistor:H,children:Object(j.jsx)(k,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7dc32363.chunk.js.map