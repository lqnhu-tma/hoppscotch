import{S as x,f as u,F as N}from"./index.96dfa614.js";function T(v,g,h,P,l){const{client:y}=x(),n=u(!0),o=u(!1),e=u([]),c=u(0),t=u(!0),r=async a=>{let s={...P};if(n.value=!0,l){const w=e.value.length>0?l(e.value.at(-1)):void 0;s={...s,cursor:w}}else a&&(s={...s,...a});const f=await y.query(v,s).toPromise();if(f.error){o.value=!0,n.value=!1;return}const i=g(f.data);i.length<h&&(t.value=!1),e.value.push(...i),c.value++,n.value=!1};return N(async()=>{await r()}),{fetching:n,error:o,goToNextPage:async()=>{t.value&&await r()},refetch:async a=>{c.value=0,t.value=!0,e.value=[],t.value&&(a?await r(a):await r())},list:e,hasNextPage:t}}export{T as u};
