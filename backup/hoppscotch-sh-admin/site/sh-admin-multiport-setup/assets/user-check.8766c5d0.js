import{T as k,U as u,Q as d,V as _,y as M,o as h,c as m,j as c}from"./index.38a058b6.js";const r=k(),p=M(),g=(s,t)=>{const{message:o,state:a}=s[t];p[a](o,{duration:2e3,onComplete:()=>{t<s.length-1&&g(s,t+1)}})},I=s=>{const t=new Set(s.map(({errorMessage:e})=>e).filter(Boolean)),o=s.length>1,a=s.filter(e=>e.isDeleted).map(e=>e.userUID);if(t.size===0){p.success(r(o?"state.delete_users_success":"state.delete_user_success"));return}const i={[u]:r(d(u,o)),[_]:r(d(_,o))},f=Object.keys(i),n=[];if(o){const e=a.length;o&&e>0&&n.push({message:r("state.delete_some_users_success",{count:e}),state:"success"});const l=s.length-e;l>0&&n.push({message:r("state.delete_some_users_failure",{count:l}),state:"error"})}if(t.forEach(e=>{f.includes(e)&&n.push({message:i[e],state:"error"})}),Array.from(t).some(e=>!(e in i))){const e=r(o?"state.delete_users_failure":"state.delete_user_failure");n.push({message:e,state:"error"})}g(n,0)},E={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},C=c("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 6L9 17l-5-5"},null,-1),v=[C];function B(s,t){return h(),m("svg",E,[...v])}const N={name:"lucide-check",render:B},D={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=c("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[c("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),c("circle",{cx:"9",cy:"7",r:"4"}),c("path",{d:"m16 11l2 2l4-4"})],-1),x=[w];function y(s,t){return h(),m("svg",D,[...x])}const T={name:"lucide-user-check",render:y};export{T as I,N as a,I as h};
