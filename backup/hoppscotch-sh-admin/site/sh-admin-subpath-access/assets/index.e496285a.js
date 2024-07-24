import{d as Q,u as q,f as y,H as ne,o as p,l as z,w as x,j as a,t as n,k as e,a as r,n as F,W as re,J as ie,K as G,q as J,L as ce,y as W,e as me,g as j,h as K,b as ue,r as de,i as pe,c as k,X as _e,O as fe,P as ve,m as he,Y as ye,s as xe,R as ge,v as be,x as ke}from"./index.96dfa614.js";import{_ as we}from"./chevron-down.7be1c234.js";import{u as O}from"./usePagedQuery.bb9cde27.js";import{I as Ce}from"./more-horizontal.42660b3e.js";import{I as Te}from"./plus.b6ebe7f3.js";import{I as $e}from"./trash.f5ccfce4.js";import{M as He,e as Me,T as Se,C as De,f as Ie}from"./graphql.96e353c8.js";const Pe={class:"flex flex-col space-y-4 relative"},Be={class:"flex flex-col relaive"},Ue={for:"teamName",class:"py-2"},Ee={for:"teamName"},Ne={class:"flex space-x-2"},Le=Q({__name:"Add",props:{show:{type:Boolean,default:!1},loadingState:{type:Boolean,default:!1},allUsersEmail:{}},emits:["hide-modal","create-team"],setup(L,{emit:t}){const o=q(),w=W(),C=L,_=t,u=y(""),d=y("");ne(()=>{C.show||(u.value="",d.value="")});const S=i=>d.value=i,T=()=>{if(u.value.trim()===""){w.error(o("teams.valid_name"));return}if(d.value.trim()===""){w.error(o("teams.valid_owner_email"));return}_("create-team",u.value,d.value)},D=()=>{_("hide-modal")};return(i,m)=>{const I=re,f=ie,v=G,P=J,B=ce;return i.show?(p(),z(B,{key:0,dialog:"",title:e(o)("teams.create_team"),onClose:m[2]||(m[2]=h=>_("hide-modal"))},{body:x(()=>[a("div",Pe,[a("div",Be,[a("label",Ue,n(e(o)("teams.email")),1),r(I,{type:"email",value:d.value,styles:"w-full p-2 bg-transparent border border-divider rounded-md",class:"flex-1 !flex",source:i.allUsersEmail,spellcheck:!0,placeholder:e(o)("teams.email"),onInput:m[0]||(m[0]=h=>S(h))},null,8,["value","source","placeholder"])]),a("label",Ee,n(e(o)("teams.name")),1),r(f,{modelValue:u.value,"onUpdate:modelValue":m[1]||(m[1]=h=>u.value=h),placeholder:e(o)("teams.name"),class:"!my-2"},null,8,["modelValue","placeholder"])])]),footer:x(()=>[a("span",Ne,[r(v,{label:e(o)("teams.create_team"),loading:i.loadingState,onClick:T},null,8,["label","loading"]),r(P,{label:e(o)("teams.cancel"),outline:"",filled:"",onClick:D},null,8,["label"])])]),_:1},8,["title"])):F("",!0)}}}),Ve={class:"flex flex-col"},Ae={class:"text-lg font-bold text-secondaryDark"},Re={class:"flex flex-col"},je={class:"flex py-10"},Ke={class:"overflow-x-auto"},Oe={key:0,class:"flex justify-center"},Qe={key:1},qe={class:"px-6 py-2"},ze={class:"px-6 py-2"},Fe={class:"px-6 py-2"},Ge=a("th",{class:"px-6 py-2"},null,-1),Je={class:"flex py-4 px-7 max-w-[16rem]"},We={class:"truncate"},Xe={class:"py-4 px-7 min-w-[20rem]"},Ye={class:"py-4 px-8"},Ze={class:"relative"},et=["onKeyup"],tt={key:3,class:"px-2"},N=20,mt=Q({__name:"index",setup(L){const t=q(),o=W(),{data:w}=me({query:He}),C=j(()=>{var s;return((s=w.value)==null?void 0:s.infra.usersCount)||1e4}),{list:_}=O(Me,s=>s.infra.allUsers,C.value,{cursor:void 0,take:C.value},s=>s.uid),u=j(()=>_.value.map(s=>s.email)),{fetching:d,error:S,goToNextPage:T,refetch:D,list:i,hasNextPage:m}=O(Se,s=>s.infra.allTeams,N,{cursor:void 0,take:N},s=>s.id),I=[{key:"id",label:t("teams.id")},{key:"name",label:t("teams.name")},{key:"members",label:t("teams.members")},{key:"actions",label:""}],f=y(!1),v=y(!1),P=K(De),B=async(s,l)=>{var M;if(s.length<6){o.error(t("state.team_name_too_short"));return}if(l.length===0){o.error(t("state.enter_team_email"));return}v.value=!0;const $=((M=_.value.find(E=>E.email===l))==null?void 0:M.uid)||"",b={name:s.trim(),userUid:$},H=await P.executeMutation(b);H.error?(H.error.toString()=="[GraphQL] user/not_found"?o.error(t("state.user_not_found")):o.error(t("state.create_team_failure")),v.value=!1):(o.success(t("state.create_team_success")),f.value=!1,v.value=!1,D())},h=ue(),X=s=>h.push("/teams/"+s.id),g=y(!1),U=y(null),Y=K(Ie),Z=s=>{g.value=!0,U.value=s},ee=async s=>{if(!s){g.value=!1,o.error(t("state.delete_team_failure"));return}const l={uid:s};(await Y.executeMutation(l)).error?o.error(t("state.delete_team_failure")):(i.value=i.value.filter(b=>b.id!==s),o.success(t("state.delete_team_success"))),g.value=!1,U.value=null};return(s,l)=>{const $=G,b=xe,H=J,M=ge,E=de("tippy"),te=be,se=we,ae=Le,oe=ke,le=pe("tippy");return p(),k(ye,null,[a("div",Ve,[a("h1",Ae,n(e(t)("teams.teams")),1),a("div",Re,[a("div",je,[r($,{icon:e(Te),label:e(t)("teams.create_team"),onClick:l[0]||(l[0]=c=>f.value=!0)},null,8,["icon","label"])]),a("div",Ke,[e(d)?(p(),k("div",Oe,[r(b)])):e(S)?(p(),k("div",Qe,n(e(t)("teams.load_list_error")),1)):e(i).length?(p(),z(te,{key:2,headings:I,list:e(i),onOnRowClicked:X},{head:x(()=>[a("th",qe,n(e(t)("teams.id")),1),a("th",ze,n(e(t)("teams.name")),1),a("th",Fe,n(e(t)("teams.members")),1),Ge]),body:x(({row:c})=>{var V,A;return[a("td",Je,[a("span",We,n(c.id),1)]),a("td",Xe,[a("span",{class:_e(["flex items-center truncate",{truncate:c.name}])},n((V=c.name)!=null?V:e(t)("teams.unnamed")),3)]),a("td",Ye,n((A=c.members)==null?void 0:A.length),1),a("td",{onClick:l[1]||(l[1]=fe(()=>{},["stop"])),class:"flex justify-end mr-10"},[a("div",Ze,[r(E,{interactive:"",trigger:"click",theme:"popover"},{content:x(({hide:R})=>[a("div",{ref:"tippyActions",class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(st=>R(),["escape"])},[r(M,{icon:e($e),label:e(t)("teams.delete_team"),class:"!hover:bg-red-600 w-full",onClick:()=>{Z(c.id),R()}},null,8,["icon","label","onClick"])],40,et)]),default:x(()=>[he(r(H,{icon:e(Ce)},null,8,["icon"]),[[le,{theme:"tooltip"}]])]),_:2},1024)])])]}),_:1},8,["list"])):(p(),k("div",tt,n(e(t)("teams.no_teams")),1)),e(m)&&e(i).length>=N?(p(),k("div",{key:4,class:"flex items-center w-28 px-3 py-2 mt-5 mx-auto font-semibold text-secondaryDark bg-divider hover:bg-dividerDark rounded-3xl cursor-pointer",onClick:l[2]||(l[2]=(...c)=>e(T)&&e(T)(...c))},[a("span",null,n(e(t)("teams.show_more")),1),r(se,{class:"ml-2"})])):F("",!0)])])]),r(ae,{show:f.value,allUsersEmail:u.value,"loading-state":v.value,onHideModal:l[3]||(l[3]=c=>f.value=!1),onCreateTeam:B},null,8,["show","allUsersEmail","loading-state"]),r(oe,{show:g.value,title:e(t)("teams.confirm_team_deletion"),onHideModal:l[4]||(l[4]=c=>g.value=!1),onResolve:l[5]||(l[5]=c=>ee(U.value))},null,8,["show","title"])],64)}}});export{mt as default};
