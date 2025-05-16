"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[815],{6815:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var n=o(5043),l=o(8887),r=o(1319);const a=l.Ay.section`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,i=(0,l.Ay)(r.A)`
  justify-content: center;
`,s=l.Ay.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`,c=l.Ay.input`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  max-width: 800px;
  border: none;
  border-bottom: 2px solid #60a5fa;
  outline: none;
  background: transparent;
  color: #1e293b;
`;var u=o(5521),d=o(579);const h=()=>{const{loggedIn:e}=(0,u.v)(),[t,o]=(0,n.useState)((()=>localStorage.getItem("title")||"APIO 2025 \u8bd5\u673a")),[l,r]=(0,n.useState)(!1);(0,n.useEffect)((()=>{localStorage.setItem("title",t)}),[t]);return(0,d.jsx)(a,{children:(0,d.jsx)(i,{children:e&&l?(0,d.jsx)(c,{value:t,onChange:e=>o(e.target.value),onBlur:()=>{r(!1),localStorage.setItem("title",t)},autoFocus:!0}):(0,d.jsx)(s,{onClick:()=>e&&r(!0),title:e?"Click to edit":"",children:t})})})}}}]);
//# sourceMappingURL=815.78a04317.chunk.js.map