"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[837],{837:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var a=e(791),r=e(434),i=e(270),c=e(634),s=function(t){return t.contacts.loading},o=function(t){return t.contacts.filter},u=function(t){return t.contacts.items},l="ContactList_centeredContainer__UB6ct",d="ContactList_contact_list_element__4NXi4",m="ContactList_contact_list_p__iFe2V",f="ContactList_contact_list_button__9IBu-",h=e(329),p=function(){var t=function(t,n){return n?t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})):t}((0,r.v9)(u),(0,r.v9)(o)),n=(0,r.I0)();return(0,h.jsx)("div",{className:l,children:(0,h.jsx)("ul",{children:t.map((function(t){return(0,h.jsxs)("li",{className:d,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:m,children:t.name}),(0,h.jsx)("p",{children:t.number})]}),(0,h.jsx)("button",{onClick:function(){return e=t.id,void n((0,c.GK)(e));var e},className:f,children:"Delete"})]},t.id)}))})})},v=e(439),x="ContactForm_btn__wll+u",_=(0,e(382).oM)({name:"contacts",initialState:{contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},reducers:{addContact:function(t,n){var e=n.payload;t.contacts.push(e)},deleteContact:function(t,n){var e=n.payload;t.contacts=t.contacts.filter((function(t){return t.id!==e}))},filterContact:function(t,n){var e=n.payload;t.filter=e}}}),j=_.actions,C=(j.addContact,j.deleteContact,j.filterContact,_.reducer,function(t){return t.contacts.items}),b=function(){var t=(0,r.I0)(),n=(0,a.useState)(""),e=(0,v.Z)(n,2),i=e[0],s=e[1],o=(0,a.useState)(""),u=(0,v.Z)(o,2),l=u[0],d=u[1],m=(0,r.v9)(C);return(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),m.find((function(t){return t.number===l}))?alert("\u0426\u0435\u0439 \u043d\u043e\u043c\u0435\u0440 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456."):(t((0,c.uK)({name:i,number:l})),s(""),d(""))},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{children:"Name:"}),(0,h.jsx)("input",{type:"text",name:"name",value:i,onChange:function(t){return s(t.target.value)},pattern:"^[a-zA-Z]+([' \\-]?[a-zA-Z ])*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{children:"Number:"}),(0,h.jsx)("input",{type:"tel",name:"number",value:l,onChange:function(t){return d(t.target.value)},pattern:"[+]?[0-9\\-()\\\\s]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:x,type:"submit",children:"Add Contact"})]})},g=e(840),y="Filter_centeredContainer__5HgED",N=function(){var t=(0,r.I0)(),n=(0,r.v9)((function(t){return t.contacts.filter}));return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("label",{htmlFor:"filter",children:"Find contacts by name:"}),(0,h.jsx)("input",{type:"text",id:"filter",name:"filter",value:n,onChange:function(n){t((0,g.T)(n.target.value))}})]})};function k(){var t=(0,r.I0)(),n=(0,r.v9)(s);return(0,a.useEffect)((function(){t((0,c.yF)())}),[t]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(b,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)("div",{children:n&&"We're thinking about it..."}),(0,h.jsx)(N,{}),(0,h.jsx)(p,{})]})}}}]);
//# sourceMappingURL=837.2103b26a.chunk.js.map