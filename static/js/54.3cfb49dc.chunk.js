"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{8054:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,i,o,a,s,c,d,u,x,l,p,m=r(5705),f=r(168),h=r(7924),b=(0,h.ZP)(m.l0)(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 350px;\n  margin-top: 15px;\n"]))),g=(0,h.ZP)(m.gN)(i||(i=(0,f.Z)(["\n  padding: 10px;\n  line-height: 20px;\n  font-size: 14px;\n  color: rgb(40, 50, 80);\n  border-radius: 5px;\n  background: rgb(255, 255, 255);\n  border: 1px solid rgb(230, 240, 250);\n  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);\n"]))),j=h.ZP.label(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  line-height: 28px;\n  font-size: 16px;\n  color: rgb(40, 52, 138);\n  font-weight: 500;\n"]))),Z=(0,h.ZP)(m.Bc)(a||(a=(0,f.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),v=h.ZP.button(s||(s=(0,f.Z)(["\n  margin: 30px 0 30px 0;\n  padding: 10px 30px;\n  font-size: 14px;\n  line-height: 30px;\n  background: rgb(40, 52, 138);\n  border: 1px solid rgb(40, 52, 138);\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  font-weight: 500;\n  border-radius: 5px;\n  text-align: center;\n"]))),w=h.ZP.div(c||(c=(0,f.Z)(["\n  max-width: 400px;\n  margin: 20px 0 20px 0;\n"]))),P=h.ZP.input(d||(d=(0,f.Z)(["\n  padding: 10px;\n  line-height: 20px;\n  font-size: 14px;\n  color: rgb(40, 50, 80);\n  border-radius: 5px;\n  background: rgb(255, 255, 255);\n  border: 1px solid rgb(230, 240, 250);\n  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);\n"]))),y=r(8007),k=r(4420),C=r(4618),z=r(3553),L=function(n){return n.filters},_=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},q=function(n){return n.contacts.error},F=(0,z.P1)([_,L],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),S=r(184),N=y.Ry().shape({name:y.Z_().min(3,"Too Short!").required("Required"),number:y.Z_().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,"It must be min 5 numbers (1234567 or 123-45-67)").required("Required")}),R=function(){var n=(0,k.I0)(),e=(0,k.v9)(_);return(0,S.jsx)(m.J9,{initialValues:{name:"",number:""},validationSchema:N,onSubmit:function(r,t){!function(r){e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):n((0,C.el)(r))}(r),t.resetForm()},children:(0,S.jsxs)(b,{children:[(0,S.jsxs)(j,{children:["Name ",(0,S.jsx)(g,{name:"name"}),(0,S.jsx)(Z,{name:"name",component:"span"})]}),(0,S.jsxs)(j,{children:["Number ",(0,S.jsx)(g,{name:"number"}),(0,S.jsx)(Z,{name:"number",component:"span"})]}),(0,S.jsx)(v,{type:"submit",children:"Add contact"})]})})},W=h.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),E=h.ZP.button(x||(x=(0,f.Z)(["\n  font-size: 14px;\n  height: 32px;\n  line-height: 32px;\n  min-width: 150px;\n  padding: 0 10px;\n  text-transform: none;\n  color: #fff;\n  background-color: #2eb371;\n  border: none;\n  border-radius: 8px;\n"]))),A=h.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),B=function(n){var e=n.el,r=e.name,t=e.number,i=e.id,o=(0,k.I0)();return(0,S.jsxs)(A,{children:[(0,S.jsxs)(W,{children:[r,": ",(0,S.jsx)("span",{children:t})]}),(0,S.jsx)(E,{onClick:function(){return o((0,C.nO)(i))},type:"button",children:"Delete"})]})},D=h.ZP.ul(p||(p=(0,f.Z)(["\n  display: flex;\n  max-width: 500px;\n  flex-direction: column;\n  gap: 15px;\n"]))),J=function(){var n=(0,k.v9)(F);return(0,S.jsx)(D,{children:n.map((function(n){return(0,S.jsx)("li",{children:(0,S.jsx)(B,{el:n})},n.id)}))})},O=r(7418),T=function(){var n=(0,k.I0)(),e=(0,k.v9)(L);return(0,S.jsx)(w,{children:(0,S.jsxs)(j,{children:["Find contacts by name"," ",(0,S.jsx)(P,{type:"text",value:e,onChange:function(e){return n((0,O.W1)(e.target.value))}})]})})},V=r(2791),Y=r(4137),$=r(5472);function G(){var n=(0,k.I0)(),e=(0,k.v9)(_),r=(0,k.v9)(I),t=(0,k.v9)(q);return(0,V.useEffect)((function(){n((0,C.yF)())}),[n]),(0,S.jsx)($.W,{children:(0,S.jsxs)($.l,{children:[(0,S.jsx)("h2",{children:"Your contacts"}),(0,S.jsx)(R,{}),(0,S.jsx)(T,{}),r&&!t&&(0,S.jsx)(Y.sv,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#fff",backgroundColor:"#F4442E"}),e.length>0&&(0,S.jsx)(J,{}),t&&(0,S.jsx)("p",{children:t})]})})}},5472:function(n,e,r){r.d(e,{W:function(){return s},l:function(){return c}});var t,i,o=r(168),a=r(7924),s=a.ZP.div(t||(t=(0,o.Z)(["\n  position: relative;\n"]))),c=a.ZP.div(i||(i=(0,o.Z)(["\n  max-width: 400px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n"])))}}]);
//# sourceMappingURL=54.3cfb49dc.chunk.js.map