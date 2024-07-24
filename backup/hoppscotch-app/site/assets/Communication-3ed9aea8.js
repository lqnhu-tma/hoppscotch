import{o as d,d as _,e as n,f as Z,M as U,h as c,aP as Q,g as L,aQ as X,aR as Y,aS as G,r as ee,i as te,E as x,a as s,n as r,ao as ne,j as e,m as T,Z as O,w as b,k as oe,F as se,l as le,c as $,$ as ae,aT as ie,aU as ce,p as re,aV as de,I as E,aW as ue,v as pe,S as me,aX as ve,aY as fe,aZ as _e,aC as ye,a_ as he,ap as ke,H as ge,_ as xe}from"./index-7d8b347c.js";import{I as be,r as we}from"./files-905044f3.js";import{l as Ce,I as Se}from"./json-91191aeb.js";import{c as $e,f as Ie}from"./TaskOption-e7d917a4.js";const Be={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ne=n("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[n("path",{d:"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"}),n("circle",{cx:"5",cy:"19",r:"1"})],-1),He=[Ne];function je(u,w){return d(),_("svg",Be,[...He])}const Fe={name:"lucide-rss",render:je},Le={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Te=n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"},null,-1),Oe=[Te];function Ee(u,w){return d(),_("svg",Le,[...Oe])}const Me={name:"lucide-send",render:Ee},Je=["placeholder"],Ve={class:"flex items-center"},We={class:"truncate font-semibold text-secondaryLight"},qe=["onKeyup"],Ae={class:"flex"},De={for:"payload"},Ke={class:"h-full"},Pe=Z({__name:"Communication",props:{showEventField:{type:Boolean,default:!1},eventFieldStyles:{type:String,default:""},stickyHeaderStyles:{type:String,default:""},isConnected:{type:Boolean,default:!1}},emits:["send-message"],setup(u,{emit:w}){const M=w,t=U(),C=ke(),I=c(null),y=c(!0),B=c(),N=c(),S=Q(be,1e3),h=c(!1),H={JSON:"application/ld+json",Raw:"text/plain"},J=Object.keys(H),l=c("JSON"),k=c(""),a=c(""),V=L(()=>H[l.value]),W=L(()=>ce(l.value)?Ce:null);X(B,a,Y({extendedEditorConfig:{lineWrapping:y,mode:V,placeholder:t("websocket.message").toString()},linter:W,completer:null,environmentHighlights:!0}));const j=()=>{h.value&&(a.value="",k.value="")},F=()=>{a.value&&(M("send-message",{eventName:k.value,message:a.value}),j())},q=async v=>{var g;const o=await re((g=v.target.files)==null?void 0:g[0],Ie,$e(we))();de(o)?(a.value=o.value,C.success(`${t("state.file_imported")}`)):C.error(`${t("action.choose_file")}`)},A=()=>{try{const v=JSON.parse(a.value);a.value=JSON.stringify(v,null,2),S.value=E}catch(v){console.error(v),S.value=ue,C.error(`${t("error.json_prettify_invalid_body")}`)}};return G("request.send-cancel",F),(v,o)=>{const g=Fe,p=pe,D=me,K=ge,P=ee("tippy"),R=ve,m=te("tippy");return d(),_("div",{class:x(["flex flex-1 flex-col",{eventFeildShown:u.showEventField}])},[u.showEventField?(d(),_("div",{key:0,class:x(["sticky z-10 flex flex-shrink-0 items-center justify-center overflow-x-auto border-b border-dividerLight bg-primary",u.eventFieldStyles])},[s(g,{class:"svg-icons mx-4 text-accentLight"}),r(n("input",{id:"event_name","onUpdate:modelValue":o[0]||(o[0]=i=>k.value=i),class:"w-full truncate bg-primary py-2 pr-4",name:"event_name",placeholder:`${e(t)("socketio.event_name")}`,type:"text",autocomplete:"off"},null,8,Je),[[ne,k.value]])],2)):T("",!0),n("div",{class:x(["sticky z-10 flex flex-shrink-0 items-center justify-between overflow-x-auto border-b border-dividerLight bg-primary pl-4",u.stickyHeaderStyles])},[n("span",Ve,[n("label",We,O(e(t)("websocket.message")),1),s(P,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>I.value.focus()},{content:b(({hide:i})=>[n("div",{ref_key:"tippyActions",ref:I,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:oe(f=>i(),["escape"])},[(d(!0),_(se,null,le(e(J),(f,z)=>(d(),$(K,{key:`contentTypeItem-${z}`,label:f,"info-icon":f===l.value?e(E):void 0,"active-info-icon":f===l.value,onClick:()=>{l.value=f,i()}},null,8,["label","info-icon","active-info-icon","onClick"]))),128))],40,qe)]),default:b(()=>[s(D,null,{default:b(()=>[s(p,{label:l.value||e(t)("state.none").toLowerCase(),class:"ml-2 rounded-none pr-8"},null,8,["label"])]),_:1})]),_:1},8,["on-shown"])]),n("div",Ae,[r(s(p,{title:`${e(t)("request.run")} <kbd>${e(fe)()}</kbd><kbd>↩</kbd>`,label:`${e(t)("action.send")}`,disabled:!a.value||!u.isConnected,icon:e(Me),class:"!hover:text-accentDark rounded-none !text-accent",onClick:o[1]||(o[1]=i=>F())},null,8,["title","label","disabled","icon"]),[[m,{theme:"tooltip",delay:[500,20],allowHTML:!0}]]),r((d(),$(R,{on:h.value,class:"px-2",title:`${e(t)("mqtt.clear_input_on_send")}`,onChange:o[2]||(o[2]=i=>h.value=!h.value)},{default:b(()=>[ae(O(e(t)("mqtt.clear_input")),1)]),_:1},8,["on","title"])),[[m,{theme:"tooltip"}]]),r(s(p,{to:"https://docs.hoppscotch.io/documentation/features/realtime-api-testing",blank:"",title:e(t)("app.wiki"),icon:e(_e)},null,8,["title","icon"]),[[m,{theme:"tooltip"}]]),r(s(p,{title:e(t)("action.clear"),icon:e(ye),onClick:j},null,8,["title","icon"]),[[m,{theme:"tooltip"}]]),r(s(p,{title:e(t)("state.linewrap"),class:x({"!text-accent":y.value}),icon:e(he),onClick:o[3]||(o[3]=ie(i=>y.value=!y.value,["prevent"]))},null,8,["title","class","icon"]),[[m,{theme:"tooltip"}]]),l.value&&l.value=="JSON"?r((d(),$(p,{key:0,title:e(t)("action.prettify"),icon:e(S),onClick:A},null,8,["title","icon"])),[[m,{theme:"tooltip"}]]):T("",!0),n("label",De,[r(s(p,{title:e(t)("import.title"),icon:e(Se),onClick:o[4]||(o[4]=i=>N.value.click())},null,8,["title","icon"]),[[m,{theme:"tooltip"}]])]),n("input",{ref_key:"payload",ref:N,class:"input",name:"payload",type:"file",onChange:q},null,544)])],2),n("div",Ke,[n("div",{ref_key:"wsCommunicationBody",ref:B,class:"flex flex-1 flex-col"},null,512)])],2)}}});const Qe=xe(Pe,[["__scopeId","data-v-89f010b0"]]);export{Qe as _,Fe as a};
//# sourceMappingURL=Communication-3ed9aea8.js.map
