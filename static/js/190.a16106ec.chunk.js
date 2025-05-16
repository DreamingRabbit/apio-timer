"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[190],{190:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(5043),a=n(8887),i=n(1319);const l=a.Ay.section`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,o=(0,a.Ay)(i.A)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,s=(0,a.Ay)("div")`
  font-size: 8vw;
  font-weight: bold;
  text-align: center;
  color: #111827; // Elegant deep black-blue
  text-shadow: none; 
`,c=(0,a.Ay)("div")`
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  color: #6b7280; // Soft gray
  text-shadow: none; 
`;var g=n(5521),d=n(579);const u=()=>{const{loggedIn:t}=(0,g.v)(),[e,n]=(0,r.useState)(new Date),[a,i]=(0,r.useState)((()=>{const t=localStorage.getItem("targetTime");return t?new Date(t):null}));(0,r.useEffect)((()=>{const t=setInterval((()=>n(new Date)),1e3);return()=>clearInterval(t)}),[]);const u=t=>{const[e,n]=t.target.value.split(":").map(Number),r=new Date;r.setHours(e),r.setMinutes(n),r.setSeconds(0),r.setMilliseconds(0),r<new Date&&r.setDate(r.getDate()+1),i(r),localStorage.setItem("targetTime",r.toISOString())};if(t)return(0,d.jsx)(l,{children:(0,d.jsx)(o,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)("label",{htmlFor:"target-time",children:"\u8bbe\u7f6e\u6bd4\u8d5b\u7ed3\u675f\u65f6\u95f4 (HH:MM):"}),(0,d.jsx)("input",{type:"time",id:"target-time",style:{fontSize:"1rem",marginTop:"1rem"},onChange:u,value:a?`${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`:""})]})})});if(!a)return null;const h=Math.max(0,Math.floor((a.getTime()-e.getTime())/1e3));return(0,d.jsx)(l,{children:(0,d.jsxs)(o,{children:[(0,d.jsx)(s,{children:e.toLocaleTimeString()}),(0,d.jsxs)(c,{children:["\u8ddd\u79bb\u6bd4\u8d5b\u7ed3\u675f: ",(m=h,`${Math.floor(m/3600).toString().padStart(2,"0")}:${Math.floor(m%3600/60).toString().padStart(2,"0")}:${Math.floor(m%60).toString().padStart(2,"0")}`)]})]})});var m}}}]);
//# sourceMappingURL=190.a16106ec.chunk.js.map