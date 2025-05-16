"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[200],{2200:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var s=t(5043),n=t(579);const o=e=>{let{src:i,width:t,height:s}=e;return(0,n.jsx)("img",{src:`/img/svg/${i}`,alt:i,width:t,height:s})};const r=(0,t(8887).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`,l=()=>{const[e,i]=(0,s.useState)(!1),t=(0,s.useCallback)((()=>{const t=window.scrollY;!e&&t>350?i(!0):t<=350&&i(!1)}),[e]);(0,s.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[t]);return(0,n.jsx)(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,n.jsx)(o,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=200.442baf69.chunk.js.map