import{S as i,f as t}from"./index.96dfa614.js";function h(l,o,s){const{client:c}=i(),e=t(!0),r=t(!1),n=t(),u=t([]);return{fetching:e,error:r,data:n,dataAsList:u,fetchData:async()=>{e.value=!0;const a=await c.query(l,{...o}).toPromise();if(a.error){r.value=!0,e.value=!1;return}if(s){const f=s(a.data);u.value.push(...f)}else n.value=a.data;e.value=!1}}}export{h as u};
