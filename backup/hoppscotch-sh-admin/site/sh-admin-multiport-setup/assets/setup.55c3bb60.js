import{o as m,c as x,j as e,d as S,u as C,Z as $,f as v,h as j,t as i,k as s,a as u,w,N as b,$ as H,a0 as I,K as R,a1 as L,y as M,b as V,D as z,l as E,a2 as y}from"./index.38a058b6.js";import{g as Y,S as k}from"./graphql.96e353c8.js";const F="/assets/hoppscotch-title.0338b96d.svg",K={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},O=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7zM6 8h2m-2 4h2m8-4h2m-2 4h2"},null,-1),P=[O];function U(f,c){return m(),x("svg",K,[...P])}const Z={name:"lucide-book-open-text",render:U},q={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4l5-5l-5-5m5 5H3"},null,-1),J=[G];function Q(f,c){return m(),x("svg",q,[...J])}const W={name:"lucide-log-in",render:Q},X={class:"flex flex-col items-center justify-center min-h-screen space-y-10"},tt={class:"flex items-center justify-center flex-col space-y-2"},et={class:"text-lg"},st=e("img",{src:F,alt:"hoppscotch-title",class:"w-52"},null,-1),ot={class:"bg-primaryLight p-10 border-2 border-dividerLight rounded-lg flex flex-col space-y-8"},at={class:"flex flex-col space-y-5 items-start"},nt={class:"text-lg font-bold text-white"},lt={class:"font-light"},it={class:"flex flex-col items-start space-y-5"},ct={class:"text-lg font-bold text-white"},rt={class:"font-light"},ut={class:"flex flex-col items-center space-y-5"},dt=S({__name:"DataSharingAndNewsletter",emits:["setupComplete"],setup(f,{emit:c}){const t=C(),d=M(),a=$.getCurrentUser(),p=c,o=v(!0),n=v(!0),g=j(Y),N=async()=>{const r=o.value?k.Enable:k.Disable;return(await g.executeMutation({status:r})).error?(d.error(t("state.data_sharing_failure")),!1):!0},D=async()=>{try{return await L.post("/subscription",{email:a==null?void 0:a.email,name:a==null?void 0:a.displayName,list_uuids:["f5f0b457-44d0-4aa1-b6f9-165dc1efa56a"]}),!0}catch(r){return console.error(r),d.error(t("state.newsletter_failure")),!1}},T=async()=>{const r=o.value&&await N(),l=n.value&&await D(),_=!o.value||r,h=!n.value||l;p("setupComplete",_&&h)};return(r,l)=>{const _=H,h=I,A=R;return m(),x("div",X,[e("div",tt,[e("h2",et,i(s(t)("data_sharing.welcome")),1),st]),e("div",ot,[e("div",at,[e("div",null,[e("p",nt,i(s(t)("data_sharing.title")),1),e("p",lt,i(s(t)("data_sharing.description")),1)]),u(_,{on:o.value,onChange:l[0]||(l[0]=B=>o.value=!o.value)},{default:w(()=>[b(i(s(t)("data_sharing.toggle_description")),1)]),_:1},8,["on"]),u(h,{blank:"",to:"https://docs.hoppscotch.io/documentation/self-host/community-edition/telemetry",label:s(t)("data_sharing.see_shared"),class:"underline"},null,8,["label"])]),e("div",it,[e("div",null,[e("p",ct,i(s(t)("newsletter.title")),1),e("p",rt,i(s(t)("newsletter.description")),1)]),u(_,{on:n.value,onChange:l[1]||(l[1]=B=>n.value=!n.value)},{default:w(()=>[b(i(s(t)("newsletter.toggle_description")),1)]),_:1},8,["on"])]),e("div",ut,[u(A,{icon:s(W),label:s(t)("app.continue_to_dashboard"),class:"mx-10",onClick:T},null,8,["icon","label"]),u(h,{blank:"",to:"http://docs.hoppscotch.io",icon:s(Z),label:s(t)("app.read_documentation")},null,8,["icon","label"])])])])}}}),pt=S({__name:"setup",setup(f){const c=C(),t=M(),d=V(),a=v(!1);return z(()=>a.value,async p=>{p&&(await $.updateFirstTimeInfraSetupStatus()?(t.success(c("state.setup_success")),d.push("/dashboard")):t.error(c("state.setup_failure")))}),(p,o)=>{const n=dt;return m(),E(n,{onSetupComplete:o[0]||(o[0]=g=>a.value=g)})}}});typeof y=="function"&&y(pt);export{pt as default};
