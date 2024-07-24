import{f as me,M as fe,dp as be,h as W,r as Ie,o as g,d as C,e as v,a as r,j as e,Z as J,w as x,k as ve,G,J as Q,F as se,v as Te,S as Ce,H as we,h2 as dt,Y as re,d1 as pt,cP as Ge,a5 as Je,h3 as vt,cF as te,cR as w,cT as U,cS as ne,ap as ke,h4 as ht,W as he,cO as mt,aK as ft,b$ as Ye,g as F,l as ye,c as oe,m as ee,h5 as _t,gH as yt,cJ as gt,aX as Ze,U as et,aj as bt,i as tt,$ as Tt,n as M,aZ as ot,aC as nt,E as de,an as Ae,z as at,a1 as kt,h6 as At,p as le,dh as Se,e8 as pe,dm as Et,aQ as St,aR as It,a6 as Re,gR as xe,gS as De,bk as ge,d9 as Ve,et as Le,gT as Oe,eg as Ct,gU as wt,ai as Pt,di as Rt,b_ as xt,h7 as Dt,h8 as Vt,eA as Lt,a_ as Ot,aT as Ht,dn as Nt,dN as Ut,aD as He,aE as Ne,aF as $t,h9 as Ue,bf as Ft,aW as zt,b3 as $e,bh as Fe,b5 as Kt,gV as Mt,gW as Wt,_ as Bt}from"./index-7d8b347c.js";import{_ as _e,I as ze,b as Ke}from"./EnvInput-6bb7a0e0.js";import{c as lt,d as st,O as it,a as Me,i as We,g as qt,b as rt,e as Qt}from"./oauth.service-b346be9c.js";import{I as Be,a as jt}from"./utils-7c6dc436.js";import{I as Xt,d as Ee}from"./index.es-0a8c9ae4.js";const Gt={class:"flex flex-1 border-b border-dividerLight"},Jt={class:"flex flex-1 border-b border-dividerLight"},Yt={class:"flex items-center border-b border-dividerLight"},Zt={class:"flex items-center"},eo={class:"ml-4 text-secondaryLight"},to=["onKeyup"],oo=me({__name:"ApiKey",props:{modelValue:{},envs:{}},emits:["update:modelValue"],setup(u,{emit:i}){const a=fe(),f=be(u,"modelValue",i),s=W(null);return(t,T)=>{const y=_e,D=Te,$=Ce,A=we,j=Ie("tippy");return g(),C(se,null,[v("div",Gt,[r(y,{modelValue:e(f).key,"onUpdate:modelValue":T[0]||(T[0]=I=>e(f).key=I),"auto-complete-env":!0,placeholder:"Key",envs:t.envs},null,8,["modelValue","envs"])]),v("div",Jt,[r(y,{modelValue:e(f).value,"onUpdate:modelValue":T[1]||(T[1]=I=>e(f).value=I),"auto-complete-env":!0,placeholder:"Value",envs:t.envs},null,8,["modelValue","envs"])]),v("div",Yt,[v("span",Zt,[v("label",eo,J(e(a)("authorization.pass_key_by")),1),r(j,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>s.value.focus()},{content:x(({hide:I})=>[v("div",{ref_key:"authTippyActions",ref:s,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(m=>I(),["escape"])},[r(A,{icon:e(f).addTo==="HEADERS"?e(G):e(Q),active:e(f).addTo==="HEADERS",label:e(a)("authorization.pass_by_headers_label"),onClick:()=>{e(f).addTo="HEADERS",I()}},null,8,["icon","active","label","onClick"]),r(A,{icon:e(f).addTo==="QUERY_PARAMS"?e(G):e(Q),active:e(f).addTo==="QUERY_PARAMS",label:e(a)("authorization.pass_by_query_params_label"),onClick:()=>{e(f).addTo="QUERY_PARAMS",I()}},null,8,["icon","active","label","onClick"])],40,to)]),default:x(()=>[r($,null,{default:x(()=>[r(D,{label:e(f).addTo?e(f).addTo==="HEADERS"?e(a)("authorization.pass_by_headers_label"):e(a)("authorization.pass_by_query_params_label"):e(a)("state.none"),class:"ml-2 rounded-none pr-8"},null,8,["label"])]),_:1})]),_:1},8,["on-shown"])])])],64)}}});function qe(u,i){return dt((a,S)=>{const N=re(u,(f,s)=>{f[i]!==s[i]&&S()});return pt(()=>{N()}),{get(){return a(),u.value[i]},set(f){S(),u.value=Object.assign(u.value,{[i]:f})}}})}const H=(u,i)=>{const a=W(u);return re(a,S=>{i(S)}),a},ct=Ge(Je),no=vt.pick({authEndpoint:!0,clientID:!0,clientSecret:!0,scopes:!0}).refine(u=>u.authEndpoint.length>=1&&u.clientID.length>=1&&u.clientSecret.length>=1&&(!u.scopes||u.scopes.length>=1),{message:"Minimum length requirement not met for one or more parameters"}),ao=()=>({authEndpoint:"",clientID:"",clientSecret:"",scopes:void 0}),lo=async({clientID:u,clientSecret:i,scopes:a,authEndpoint:S})=>{const N=ke(),f=new URLSearchParams;f.append("grant_type","client_credentials"),f.append("client_id",u),f.append("client_secret",i),a&&f.append("scope",a);const{response:s}=ct.runRequest({url:S,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},data:f.toString()}),t=await s;if(te(t))return w("AUTH_TOKEN_REQUEST_FAILED");const T=st(t.right);if(te(T))return w("AUTH_TOKEN_REQUEST_FAILED");const D=U.object({access_token:U.string()}).safeParse(T.right);return D.success||N.error("AUTH_TOKEN_REQUEST_INVALID_RESPONSE"),D.success?ne(D.data):w("AUTH_TOKEN_REQUEST_INVALID_RESPONSE")},so=async u=>{const i=new URLSearchParams(window.location.search),a=i.get("code"),S=i.get("state");if(i.get("error"))return w("AUTH_SERVER_RETURNED_ERROR");if(!a)return w("AUTH_TOKEN_REQUEST_FAILED");const s=U.object({state:U.string(),tokenEndpoint:U.string(),clientSecret:U.string(),clientID:U.string()}).safeParse(JSON.parse(u));if(!s.success)return w("INVALID_LOCAL_CONFIG");if(s.data.state!==S)return w("INVALID_STATE");const t=new URLSearchParams;t.append("code",a),t.append("client_id",s.data.clientID),t.append("client_secret",s.data.clientSecret),t.append("redirect_uri",it.redirectURI);const{response:T}=ct.runRequest({url:s.data.tokenEndpoint,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},data:t.toString()}),y=await T;if(te(y))return w("AUTH_TOKEN_REQUEST_FAILED");const D=new TextDecoder("utf-8").decode(y.right.data).replaceAll("\0",""),A=U.object({access_token:U.string()}).safeParse(JSON.parse(D));return A.success?ne(A.data):w("AUTH_TOKEN_REQUEST_INVALID_RESPONSE")},Qe=lt("CLIENT_CREDENTIALS",no,lo,so),ut=Ge(Je),io=ht.pick({authEndpoint:!0,clientID:!0,clientSecret:!0,scopes:!0,username:!0,password:!0}).refine(u=>u.authEndpoint.length>=1&&u.clientID.length>=1&&u.clientSecret.length>=1&&u.username.length>=1&&u.password.length>=1&&(!u.scopes||u.scopes.length>=1),{message:"Minimum length requirement not met for one or more parameters"}),ro=()=>({authEndpoint:"",clientID:"",clientSecret:"",scopes:void 0,username:"",password:""}),co=async({password:u,username:i,clientID:a,clientSecret:S,scopes:N,authEndpoint:f})=>{const s=ke(),t=new URLSearchParams;t.append("grant_type","password"),t.append("client_id",a),t.append("client_secret",S),t.append("username",i),t.append("password",u),N&&t.append("scope",N);const{response:T}=ut.runRequest({url:f,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},data:t.toString()}),y=await T;if(te(y)||y.right.status!==200)return s.error("AUTH_TOKEN_REQUEST_FAILED"),w("AUTH_TOKEN_REQUEST_FAILED");const D=new TextDecoder("utf-8").decode(y.right.data).replaceAll("\0",""),A=U.object({access_token:U.string()}).safeParse(JSON.parse(D));return A.success||s.error("AUTH_TOKEN_REQUEST_INVALID_RESPONSE"),A.success?ne(A.data):w("AUTH_TOKEN_REQUEST_INVALID_RESPONSE")},uo=async u=>{const i=new URLSearchParams(window.location.search),a=i.get("code"),S=i.get("state");if(i.get("error"))return w("AUTH_SERVER_RETURNED_ERROR");if(!a)return w("AUTH_TOKEN_REQUEST_FAILED");const s=U.object({state:U.string(),tokenEndpoint:U.string(),clientSecret:U.string(),clientID:U.string()}).safeParse(JSON.parse(u));if(!s.success)return w("INVALID_LOCAL_CONFIG");if(s.data.state!==S)return w("INVALID_STATE");const t=new URLSearchParams;t.append("code",a),t.append("client_id",s.data.clientID),t.append("client_secret",s.data.clientSecret),t.append("redirect_uri",it.redirectURI);const{response:T}=ut.runRequest({url:s.data.tokenEndpoint,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},data:t.toString()}),y=await T;if(te(y))return w("AUTH_TOKEN_REQUEST_FAILED");const D=st(y.right);if(te(D))return w("AUTH_TOKEN_REQUEST_FAILED");const A=U.object({access_token:U.string()}).safeParse(D.right);return A.success?ne(A.data):w("AUTH_TOKEN_REQUEST_INVALID_RESPONSE")},je=lt("PASSWORD",io,co,uo),po={class:"flex items-center px-4 border-b border-dividerLight"},vo={class:"truncate font-semibold text-secondaryLight"},ho=["onKeyup"],mo={class:"flex flex-col"},fo={key:1,class:"px-4 py-2 flex items-center"},_o={class:"text-secondaryLight font-semibold mr-6"},yo={key:2,class:"flex items-center px-4"},go={class:"truncate text-secondaryLight"},bo=["onKeyup"],To={class:"flex items-center border-b border-dividerLight"},ko={class:"flex items-center"},Ao={class:"ml-4 text-secondaryLight"},Eo=["onKeyup"],So={class:"p-2"},Io=me({__name:"OAuth2Authorization",props:{modelValue:{},isCollectionProperty:{type:Boolean},envs:{},source:{}},setup(u){const i=fe(),a=ke(),S=he(mt),N=he(ft),f=he(Ye),s=u,t=W(s.modelValue),T=[{id:"HEADERS",label:"Headers"},{id:"QUERY_PARAMS",label:"Query Params"}],y=F(()=>{var n;return((n=T.find(_=>_.id===t.value.addTo))==null?void 0:n.label)||i("state.none")}),D=[{id:"authCode",label:i("authorization.oauth.label_auth_code"),formElements:F(()=>{if(t.value.grantTypeInfo.grantType!=="AUTHORIZATION_CODE")return;const n=t.value.grantTypeInfo,_=H(n==null?void 0:n.authEndpoint,h=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,authEndpoint:h}}),b=H(n==null?void 0:n.tokenEndpoint,h=>{"tokenEndpoint"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,tokenEndpoint:h})}),E=H(n==null?void 0:n.clientID,h=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,clientID:h}}),R=H(n==null?void 0:n.clientSecret,h=>{"clientSecret"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,clientSecret:h??""})}),L=H(n!=null&&n.scopes?n.scopes:void 0,h=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,scopes:h}}),k=H(t.value.grantTypeInfo.isPKCE,h=>{"isPKCE"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,isPKCE:h})}),d=H(t.value.grantTypeInfo.codeVerifierMethod?{id:t.value.grantTypeInfo.codeVerifierMethod,label:t.value.grantTypeInfo.codeVerifierMethod==="plain"?"Plain":"SHA-256"}:null,h=>{!("codeVerifierMethod"in t.value.grantTypeInfo)||!h||(t.value.grantTypeInfo={...t.value.grantTypeInfo,codeVerifierMethod:h.id})}),o=()=>{var c;const h={authEndpoint:_.value,tokenEndpoint:b.value,clientID:E.value,clientSecret:R.value,scopes:L.value,isPKCE:k.value,codeVerifierMethod:(c=d.value)==null?void 0:c.id},X=Z(h),O=Me.params.safeParse(X);return O.success?(Me.init(O.data),ne(void 0)):w("VALIDATION_FAILED")},l=F(()=>{const h={id:"isPKCE",label:i("authorization.oauth.label_use_pkce"),type:"checkbox",ref:k,onChange:X=>{const O=X.target;k.value=O.checked}};return k.value?[h,{id:"codeChallenge",label:i("authorization.oauth.label_code_challenge"),type:"dropdown",ref:d,tippyRefName:"pkceTippyActions",tippyRef:ie,options:[{id:"plain",label:"Plain"},{id:"S256",label:"SHA-256"}]}]:[h]}),p=F(()=>[...l.value,{id:"authEndpoint",label:i("authorization.oauth.label_authorization_endpoint"),type:"text",ref:_},{id:"tokenEndpoint",label:i("authorization.oauth.label_token_endpoint"),type:"text",ref:b},{id:"clientId",label:i("authorization.oauth.label_client_id"),type:"text",ref:E},{id:"clientSecret",label:i("authorization.oauth.label_client_secret"),type:"text",ref:R},{id:"scopes",label:i("authorization.oauth.label_scopes"),type:"text",ref:L}]);return{runAction:o,elements:p}})},{id:"clientCredentials",label:i("authorization.oauth.label_client_credentials"),formElements:F(()=>{if(t.value.grantTypeInfo.grantType!=="CLIENT_CREDENTIALS")return;const n=t.value.grantTypeInfo,_=H(n==null?void 0:n.authEndpoint,d=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,authEndpoint:d}}),b=H(n==null?void 0:n.clientID,d=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,clientID:d}}),E=H(n==null?void 0:n.clientSecret,d=>{"clientSecret"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,clientSecret:d})}),R=H(n!=null&&n.scopes?n.scopes:void 0,d=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,scopes:d}}),L=async()=>{var p;const d=Z({authEndpoint:_.value,clientID:b.value,clientSecret:E.value,scopes:R.value}),o=Qe.params.safeParse(d);if(!o.success)return w("VALIDATION_FAILED");const l=await Qe.init(o.data);return te(l)?w("OAUTH_TOKEN_FETCH_FAILED"):(m((p=l.right)==null?void 0:p.access_token),a.success(i("authorization.oauth.token_fetched_successfully")),ne(void 0))},k=F(()=>[{id:"authEndpoint",label:"Authorization Endpoint",type:"text",ref:_},{id:"clientId",label:"Client ID",type:"text",ref:b},{id:"clientSecret",label:"Client Secret",type:"text",ref:E},{id:"scopes",label:"Scopes",type:"text",ref:R}]);return{runAction:L,elements:k}})},{id:"password",label:"Password",formElements:F(()=>{if(t.value.grantTypeInfo.grantType!=="PASSWORD")return;const n=t.value.grantTypeInfo,_=H(n==null?void 0:n.authEndpoint,l=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,authEndpoint:l}}),b=H(n==null?void 0:n.clientID,l=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,clientID:l}}),E=H(n==null?void 0:n.clientSecret,l=>{"clientSecret"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,clientSecret:l})}),R=H(n!=null&&n.scopes?n.scopes:void 0,l=>{t.value.grantTypeInfo.scopes=l}),L=H(n==null?void 0:n.username,l=>{"username"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,username:l})}),k=H(n==null?void 0:n.password,l=>{"password"in t.value.grantTypeInfo&&(t.value.grantTypeInfo={...t.value.grantTypeInfo,password:l})}),d=async()=>{var X;const l=Z({authEndpoint:_.value,clientID:b.value,clientSecret:E.value,scopes:R.value,username:L.value,password:k.value}),p=je.params.safeParse(l);if(!p.success)return w("VALIDATION_FAILED");const h=await je.init(p.data);return te(h)?w("OAUTH_TOKEN_FETCH_FAILED"):(m((X=h.right)==null?void 0:X.access_token),a.success(i("authorization.oauth.token_fetched_successfully")),ne(void 0))},o=F(()=>[{id:"authEndpoint",label:i("authorization.oauth.label_authorization_endpoint"),type:"text",ref:_},{id:"clientId",label:i("authorization.oauth.label_client_id"),type:"text",ref:b},{id:"clientSecret",label:i("authorization.oauth.label_client_secret"),type:"text",ref:E},{id:"username",label:i("authorization.oauth.label_username"),type:"text",ref:L},{id:"password",label:i("authorization.oauth.label_password"),type:"text",ref:k},{id:"scopes",label:i("authorization.oauth.label_scopes"),type:"text",ref:R}]);return{runAction:d,elements:o}})},{id:"implicit",label:i("authorization.oauth.label_implicit"),formElements:F(()=>{const n=t.value.grantTypeInfo,_=H(n==null?void 0:n.authEndpoint,k=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,authEndpoint:k}}),b=H(n==null?void 0:n.clientID,k=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,clientID:k}}),E=H(n!=null&&n.scopes?n.scopes:void 0,k=>{t.value.grantTypeInfo={...t.value.grantTypeInfo,scopes:k}}),R=()=>{const k=Z({authEndpoint:_.value,clientID:b.value,scopes:E.value}),d=Z(k),o=We.params.safeParse(d);return o.success?(We.init(o.data),ne(void 0)):w("VALIDATION_FAILED")},L=F(()=>[{id:"authEndpoint",label:i("authorization.oauth.label_authorization_endpoint"),type:"text",ref:_},{id:"clientId",label:i("authorization.oauth.label_client_id"),type:"text",ref:b},{id:"scopes",label:i("authorization.oauth.label_scopes"),type:"text",ref:E}]);return{runAction:R,elements:L}})}],$={AUTHORIZATION_CODE:"authCode",CLIENT_CREDENTIALS:"clientCredentials",IMPLICIT:"implicit",PASSWORD:"password"},A={AUTHORIZATION_CODE:rt,CLIENT_CREDENTIALS:ao,IMPLICIT:Qt,PASSWORD:ro},j=F(()=>{const n=t.value.grantTypeInfo.grantType;return $[n]}),I=F(()=>D.find(n=>n.id===j.value)),m=n=>{if(s.isCollectionProperty&&n){t.value.grantTypeInfo={...t.value.grantTypeInfo,token:n};return}const _=s.source==="REST"?f:S;_.currentActiveTab.value.document.request.auth.authType==="oauth-2"&&n&&(_.currentActiveTab.value.document.request.auth.grantTypeInfo.token=n)},V=n=>{const b=Object.keys($).find(E=>$[E]===n);if(b){t.value.grantTypeInfo.grantType=b;const E=A[b];E&&(t.value.grantTypeInfo={...E(),...t.value.grantTypeInfo})}},K=F(()=>{var n,_;return(_=(n=I.value)==null?void 0:n.formElements.value)==null?void 0:_.runAction}),ce=F(()=>{var n,_;return(_=(n=I.value)==null?void 0:n.formElements.value)==null?void 0:_.elements.value}),Y=async()=>{var _;if(qt.includes(t.value.grantTypeInfo.grantType)){const b={source:s.source,context:s.isCollectionProperty?{type:"collection-properties",metadata:{}}:{type:"request-tab",metadata:{}},grant_type:t.value.grantTypeInfo.grantType};N.setLocalConfig("oauth_temp_config",JSON.stringify(b))}const n=await((_=K.value)==null?void 0:_.call(K));if(n&&te(n)){const b={VALIDATION_FAILED:i("authorization.oauth.validation_failed"),OAUTH_TOKEN_FETCH_FAILED:i("authorization.oauth.token_fetch_failed")};a.error(b[n.left]);return}},Z=n=>{const _=_t(),b=s.source==="REST"?f.currentActiveTab.value.document.request.requestVariables.map(({key:d,value:o})=>({key:d,value:o,secret:!1})):[],E=_.selected.filter(({key:d})=>!b.some(({key:o})=>o===d)),R=_.global.filter(({key:d})=>!b.some(({key:o})=>o===d)),L=[...E,...R,...b],k={};for(const d in n){const o=n[d];if(typeof o=="string"){const l=yt(o,L);k[d]=gt(l)?l.right:o}else k[d]=o}return k},ae=W(null),ie=W(null),B=W(null);return(n,_)=>{const b=Te,E=Ce,R=we,L=Ie("tippy"),k=_e,d=Ze;return g(),C(se,null,[v("div",po,[v("label",vo,J(e(i)("authorization.oauth.grant_type")),1),r(L,{placement:"bottom",interactive:"",trigger:"click",theme:"popover","on-shown":()=>{var o;return(o=ae.value)==null?void 0:o.focus()},class:"!flex-initial"},{content:x(({hide:o})=>[v("div",{ref_key:"grantTypeTippyActions",ref:ae,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(l=>o(),["escape"])},[(g(),C(se,null,ye(D,l=>r(R,{key:l.id,label:l.label,icon:j.value===l.id?e(G):e(Q),active:j.value===l.id,onClick:()=>{V(l.id),o()}},null,8,["label","icon","active","onClick"])),64))],40,ho)]),default:x(()=>[r(E,null,{default:x(()=>{var o;return[r(b,{class:"ml-2 rounded-none pr-8",label:(o=I.value)==null?void 0:o.label},null,8,["label"])]}),_:1})]),_:1},8,["on-shown"])]),v("div",mo,[(g(!0),C(se,null,ye(ce.value,o=>(g(),C("div",{key:o.id,class:"flex flex-1 border-b border-dividerLight"},[o.type==="text"?(g(),oe(k,{key:0,modelValue:o.ref.value,"onUpdate:modelValue":l=>o.ref.value=l,placeholder:o.label,envs:n.envs,"auto-complete-env":!0},null,8,["modelValue","onUpdate:modelValue","placeholder","envs"])):o.type==="checkbox"?(g(),C("div",fo,[v("span",_o,J(o.label),1),r(d,{class:"text-secondaryLight flex",on:o.ref.value,onChange:l=>o.ref.value=!o.ref.value},null,8,["on","onChange"])])):o.type==="dropdown"?(g(),C("div",yo,[v("label",go,J(o.label),1),o.ref.value?(g(),oe(L,{key:0,interactive:"",trigger:"click",theme:"popover",class:"!flex-initial"},{content:x(({hide:l})=>[v("div",{ref_for:!0,ref:o.tippyRefName,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(p=>l(),["escape"])},[(g(!0),C(se,null,ye(o.options,p=>(g(),oe(R,{key:p.id,label:p.label,icon:o.ref.value.id===p.id?e(G):e(Q),active:o.ref.value.id===p.id,onClick:()=>{o.ref.value=p,l()}},null,8,["label","icon","active","onClick"]))),128))],40,bo)]),default:x(()=>[r(E,null,{default:x(()=>[r(b,{class:"ml-2 rounded-none pr-8",label:o.ref.value.label},null,8,["label"])]),_:2},1024)]),_:2},1024)):ee("",!0)])):ee("",!0)]))),128)),v("div",To,[v("span",ko,[v("label",Ao,J(e(i)("authorization.pass_key_by")),1),r(L,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>{var o;return(o=B.value)==null?void 0:o.focus()}},{content:x(({hide:o})=>[v("div",{ref_key:"authTippyActions",ref:B,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(l=>o(),["escape"])},[(g(),C(se,null,ye(T,l=>r(R,{key:l.id,label:l.label,icon:t.value.addTo===l.id?e(G):e(Q),active:t.value.addTo===l.id,onClick:()=>{t.value.addTo=l.id,o()}},null,8,["label","icon","active","onClick"])),64))],40,Eo)]),default:x(()=>[r(E,null,{default:x(()=>[r(b,{label:y.value,class:"ml-2 rounded-none pr-8"},null,8,["label"])]),_:1})]),_:1},8,["on-shown"])])]),v("div",So,[r(b,{filled:"",label:`${e(i)("authorization.generate_token")}`,onClick:_[0]||(_[0]=o=>Y())},null,8,["label"])])])],64)}}}),Co={class:"flex flex-1 border-b border-dividerLight"},wo={class:"flex flex-1 border-b border-dividerLight"},Po=me({__name:"Basic",props:{modelValue:{},envs:{}},emits:["update:modelValue"],setup(u,{emit:i}){const a=fe(),f=be(u,"modelValue",i);return(s,t)=>{const T=_e;return g(),C(se,null,[v("div",Co,[r(T,{modelValue:e(f).username,"onUpdate:modelValue":t[0]||(t[0]=y=>e(f).username=y),placeholder:e(a)("authorization.username"),"auto-complete-env":!0,envs:s.envs},null,8,["modelValue","placeholder","envs"])]),v("div",wo,[r(T,{modelValue:e(f).password,"onUpdate:modelValue":t[1]||(t[1]=y=>e(f).password=y),placeholder:e(a)("authorization.password"),"auto-complete-env":!0,envs:s.envs},null,8,["modelValue","placeholder","envs"])])],64)}}}),Ro={class:"flex flex-1 flex-col"},xo={class:"flex items-center"},Do={class:"truncate font-semibold text-secondaryLight"},Vo=["onKeyup"],Lo={class:"flex"},Oo={key:1,class:"flex flex-1 border-b border-dividerLight"},Ho={class:"w-2/3 border-r border-dividerLight"},No={key:0},Uo={key:1,class:"p-4"},$o={key:0},Fo={key:1},zo={key:2},Ko={class:"flex flex-1 border-b border-dividerLight"},Mo={key:3,class:"w-full"},Wo={class:"flex flex-1 border-b border-dividerLight"},Bo={key:4},qo={class:"z-[9] sticky top-upperTertiaryStickyFold h-full min-w-[12rem] max-w-1/3 flex-shrink-0 overflow-auto overflow-x-auto bg-primary p-4"},Qo={class:"pb-2 text-secondaryLight"},vn=me({__name:"Authorization",props:{modelValue:{},isCollectionProperty:{type:Boolean},isRootCollection:{type:Boolean},inheritedProperties:{default:void 0},envs:{default:void 0},source:{default:"REST"}},emits:["update:modelValue"],setup(u,{emit:i}){const a=fe(),S=et(),N=u,s=be(N,"modelValue",i);bt(()=>{N.isRootCollection&&s.value.authType==="inherit"&&(s.value={authType:"none",authActive:!0})});const t={basic:"Basic Auth",bearer:"Bearer","oauth-2":"OAuth 2.0","api-key":"API key",none:"None",inherit:"Inherit"},T=qe(s,"authType"),y=F(()=>t[T.value]?t[T.value]:"None"),D=m=>m&&t[m]?t[m]:"None",$=()=>{const m={...rt(),grantType:"AUTHORIZATION_CODE",token:""},V=s.value.grantTypeInfo,K=V||m;s.value={...s.value,authType:"oauth-2",addTo:"HEADERS",grantTypeInfo:K}},A=qe(s,"authActive"),j=()=>{s.value={authType:"inherit",authActive:!0}},I=W(null);return(m,V)=>{var L,k;const K=Te,ce=Ce,Y=we,Z=Ie("tippy"),ae=Ze,ie=at,B=Po,n=_e,_=Io,b=oo,E=kt,R=tt("tippy");return g(),C("div",Ro,[v("div",{class:de(["sticky z-10 flex flex-shrink-0 items-center justify-between overflow-x-auto border-b border-dividerLight bg-primary pl-4",[m.isCollectionProperty?"top-propertiesPrimaryStickyFold":"top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"]])},[v("span",xo,[v("label",Do,J(e(a)("authorization.type")),1),r(Z,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>I.value.focus()},{content:x(({hide:d})=>[v("div",{ref_key:"tippyActions",ref:I,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:ve(o=>d(),["escape"])},[m.isRootCollection?ee("",!0):(g(),oe(Y,{key:0,label:"Inherit",icon:y.value==="Inherit"?e(G):e(Q),active:y.value==="Inherit",onClick:()=>{e(s).authType="inherit",d()}},null,8,["icon","active","onClick"])),r(Y,{label:"None",icon:y.value==="None"?e(G):e(Q),active:y.value==="None",onClick:()=>{e(s).authType="none",d()}},null,8,["icon","active","onClick"]),r(Y,{label:"Basic Auth",icon:y.value==="Basic Auth"?e(G):e(Q),active:y.value==="Basic Auth",onClick:()=>{e(s).authType="basic",d()}},null,8,["icon","active","onClick"]),r(Y,{label:"Bearer Token",icon:y.value==="Bearer"?e(G):e(Q),active:y.value==="Bearer",onClick:()=>{e(s).authType="bearer",d()}},null,8,["icon","active","onClick"]),r(Y,{label:"OAuth 2.0",icon:y.value==="OAuth 2.0"?e(G):e(Q),active:y.value==="OAuth 2.0",onClick:()=>{$(),d()}},null,8,["icon","active","onClick"]),r(Y,{label:"API key",icon:y.value==="API key"?e(G):e(Q),active:y.value==="API key",onClick:()=>{e(s).authType="api-key",d()}},null,8,["icon","active","onClick"])],40,Vo)]),default:x(()=>[r(ce,null,{default:x(()=>[r(K,{class:"ml-2 rounded-none pr-8",label:y.value},null,8,["label"])]),_:1})]),_:1},8,["on-shown"])]),v("div",Lo,[r(ae,{on:e(A),class:"px-2",onChange:V[0]||(V[0]=d=>A.value=!e(A))},{default:x(()=>[Tt(J(e(a)("state.enabled")),1)]),_:1},8,["on"]),M(r(K,{to:"https://docs.hoppscotch.io/documentation/features/authorization",blank:"",title:e(a)("app.wiki"),icon:e(ot)},null,8,["title","icon"]),[[R,{theme:"tooltip"}]]),M(r(K,{title:e(a)("action.clear"),icon:e(nt),onClick:j},null,8,["title","icon"]),[[R,{theme:"tooltip"}]])])],2),e(s).authType==="none"?(g(),oe(ie,{key:0,src:`/images/states/${e(S).value}/login.svg`,alt:`${e(a)("empty.authorization")}`,text:e(a)("empty.authorization")},{body:x(()=>[r(K,{outline:"",label:e(a)("app.documentation"),to:"https://docs.hoppscotch.io/documentation/features/authorization",blank:"",icon:e(Be),reverse:""},null,8,["label","icon"])]),_:1},8,["src","alt","text"])):(g(),C("div",Oo,[v("div",Ho,[e(s).authType==="basic"?(g(),C("div",No,[r(B,{modelValue:e(s),"onUpdate:modelValue":V[1]||(V[1]=d=>Ae(s)?s.value=d:null),envs:m.envs},null,8,["modelValue","envs"])])):ee("",!0),e(s).authType==="inherit"?(g(),C("div",Uo,[(L=m.inheritedProperties)!=null&&L.auth?(g(),C("span",$o,J(e(a)("authorization.inherited_from",{auth:D(m.inheritedProperties.auth.inheritedAuth.authType),collection:(k=m.inheritedProperties)==null?void 0:k.auth.parentName})),1)):(g(),C("span",Fo,J(e(a)("authorization.save_to_inherit")),1))])):ee("",!0),e(s).authType==="bearer"?(g(),C("div",zo,[v("div",Ko,[r(n,{modelValue:e(s).token,"onUpdate:modelValue":V[2]||(V[2]=d=>e(s).token=d),placeholder:"Token","auto-complete-env":!0,envs:m.envs},null,8,["modelValue","envs"])])])):ee("",!0),e(s).authType==="oauth-2"?(g(),C("div",Mo,[v("div",Wo,[r(n,{"model-value":e(s).grantTypeInfo.token,placeholder:"Token",envs:m.envs,"onUpdate:modelValue":V[3]||(V[3]=d=>e(s).grantTypeInfo={...e(s).grantTypeInfo,token:d})},null,8,["model-value","envs"])]),r(_,{modelValue:e(s),"onUpdate:modelValue":V[4]||(V[4]=d=>Ae(s)?s.value=d:null),"is-collection-property":m.isCollectionProperty,envs:m.envs,source:m.source},null,8,["modelValue","is-collection-property","envs","source"])])):ee("",!0),e(s).authType==="api-key"?(g(),C("div",Bo,[r(b,{modelValue:e(s),"onUpdate:modelValue":V[5]||(V[5]=d=>Ae(s)?s.value=d:null),envs:m.envs},null,8,["modelValue","envs"])])):ee("",!0)]),v("div",qo,[v("div",Qo,J(e(a)("helpers.authorization")),1),r(E,{class:"link",label:e(a)("authorization.learn"),icon:e(Be),to:"https://docs.hoppscotch.io/documentation/features/authorization",blank:"",reverse:""},null,8,["label","icon"])])]))])}}}),jo=["WWW-Authenticate","Authorization","Proxy-Authenticate","Proxy-Authorization","Age","Cache-Control","Clear-Site-Data","Expires","Pragma","Warning","Accept-CH","Accept-CH-Lifetime","Early-Data","Content-DPR","DPR","Device-Memory","Save-Data","Viewport-Width","Width","Last-Modified","ETag","If-Match","If-None-Match","If-Modified-Since","If-Unmodified-Since","Vary","Connection","Keep-Alive","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Expect","Max-Forwards","Cookie","Set-Cookie","Cookie2","Set-Cookie2","Access-Control-Allow-Origin","Access-Control-Allow-Credentials","Access-Control-Allow-Headers","Access-Control-Allow-Methods","Access-Control-Expose-Headers","Access-Control-Max-Age","Access-Control-Request-Headers","Access-Control-Request-Method","Origin","Service-Worker-Allowed","Timing-Allow-Origin","X-Permitted-Cross-Domain-Policies","DNT","Tk","Content-Disposition","Content-Length","Content-Type","Content-Encoding","Content-Language","Content-Location","Forwarded","X-Forwarded-For","X-Forwarded-Host","X-Forwarded-Proto","Via","Location","From","Host","Referer","Referrer-Policy","User-Agent","Allow","Server","Accept-Ranges","Range","If-Range","Content-Range","Cross-Origin-Opener-Policy","Cross-Origin-Resource-Policy","Content-Security-Policy","Content-Security-Policy-Report-Only","Expect-CT","Feature-Policy","Public-Key-Pins","Public-Key-Pins-Report-Only","Strict-Transport-Security","Upgrade-Insecure-Requests","X-Content-Type-Options","X-Download-Options","X-Frame-Options","X-Powered-By","X-XSS-Protection","Last-Event-ID","NEL","Ping-From","Ping-To","Report-To","Transfer-Encoding","TE","Trailer","Sec-WebSocket-Key","Sec-WebSocket-Extensions","Sec-WebSocket-Accept","Sec-WebSocket-Protocol","Sec-WebSocket-Version","Accept-Push-Policy","Accept-Signature","Alt-Svc","Date","Large-Allocation","Link","Push-Policy","Retry-After","Signature","Signed-Headers","Server-Timing","SourceMap","Upgrade","X-DNS-Prefetch-Control","X-Firefox-Spdy","X-Pingback","X-Requested-With","X-Robots-Tag","X-UA-Compatible"],Xo=u=>{const i=At(u);if(te(i)){const a=jt(u,i.left.pos);return Promise.resolve([{from:a,to:a,message:i.left.message,severity:"error"}])}return Promise.resolve([])},Xe=u=>i=>le(Se(i),a=>(delete a[u],a)),hn=(u,i)=>a=>i.findIndex(S=>pe(a[u],S))!==-1,mn=(u,i)=>a=>u in a&&(i===void 0||typeof a[u]===i),fn=(u,i)=>a=>u in a&&Array.isArray(a[u])&&a[u].every(S=>typeof S===i),Go={class:"flex flex-1 flex-col"},Jo={class:"truncate font-semibold text-secondaryLight"},Yo={class:"flex"},Zo={key:0,class:"h-full relative w-full"},en={key:1},tn={class:"draggable-content group flex divide-x divide-dividerLight border-b border-dividerLight"},on={class:"draggable-content group flex divide-x divide-dividerLight border-b border-dividerLight"},nn={key:1,class:"aspect-square w-8"},an={class:"draggable-content group flex divide-x divide-dividerLight border-b border-dividerLight"},ln={key:1,class:"aspect-square w-[2.05rem]"},sn=me({__name:"Headers",props:{modelValue:{},isCollectionProperty:{type:Boolean},inheritedProperties:{},envs:{}},emits:["change-tab","update:modelValue"],setup(u,{emit:i}){const a=fe(),S=ke(),N=he(Ye),f=et(),s=W(0),t=W(!1),T=W(""),y=W(null),D=Et("WRAP_LINES","httpHeaders"),$=W(null),A=u,j=i,I=be(A,"modelValue",j);St(y,T,It({extendedEditorConfig:{mode:"text/x-yaml",placeholder:`${a("state.bulk_mode_placeholder")}`,lineWrapping:D},linter:Xo,completer:null,environmentHighlights:!0}));const m=W([{id:s.value++,key:"",value:"",active:!0}]);re(m,o=>{o.length>0&&o[o.length-1].key!==""&&m.value.push({id:s.value++,key:"",value:"",active:!0})}),re(()=>I.value.headers,o=>{const l=le(m.value,Re(ge(Fe(h=>h.key!==""),$e(Xe("id"))))),p=le(Oe(T.value),De(ge(Le(h=>h.key!==""),Ve)),xe(()=>[]));pe(o,l)||(m.value=le(o,Ct(h=>({id:s.value++,...h})))),pe(o,p)||(T.value=wt(o))},{immediate:!0}),re(m,o=>{const l=le(o,Re(ge(Fe(p=>p.key!==""),$e(Xe("id")))));pe(I.value.headers,l)||(I.value.headers=Se(l))}),re(T,o=>{const l=le(Oe(o),De(ge(Le(p=>p.key!==""),Ve)),xe(()=>[]));pe(A.modelValue,l)||(I.value.headers=l)});const V=()=>{m.value.push({id:s.value++,key:"",value:"",active:!0})},K=(o,l)=>{m.value=m.value.map((p,h)=>h===o?l:p)},ce=o=>{const l=Se(m.value);l.length>0&&o===l.length-1||($.value&&($.value.goAway(0),$.value=null),$.value=S.success(`${a("state.deleted")}`,{action:[{text:`${a("action.undo")}`,onClick:(p,h)=>{m.value=l,h.goAway(0),$.value=null}}],onComplete:()=>{$.value=null}})),m.value=le(m.value,Wt(o),Kt(()=>Mt("Working Headers Deletion Out of Bounds")))},Y=()=>{m.value=[{id:s.value++,key:"",value:"",active:!0}],T.value=""},Z=Pt(xt,Rt()),ae=F(()=>Dt(I.value,Z.value,!1).map((o,l)=>({id:`header-${l}`,...o}))),ie=F(()=>{var X,O;if(!((X=A.inheritedProperties)!=null&&X.auth)||!A.inheritedProperties.headers)return[];const l=A.inheritedProperties.headers.filter(c=>!I.value.headers.some(P=>{var z;return P.key===((z=c.inheritedHeader)==null?void 0:z.key)})).filter(c=>c.inheritedHeader!==null&&c.inheritedHeader!==void 0&&c.inheritedHeader.active).map((c,P)=>{var z,ue,q,Pe;return{inheritedFrom:(z=A.inheritedProperties)==null?void 0:z.headers[P].parentName,source:"headers",id:`header-${P}`,header:{key:(ue=c.inheritedHeader)==null?void 0:ue.key,value:(q=c.inheritedHeader)==null?void 0:q.value,active:(Pe=c.inheritedHeader)==null?void 0:Pe.active}}});let p=[];const h=Vt(Z.value,I.value,A.inheritedProperties.auth.inheritedAuth,!1)[0];return h&&I.value.auth.authType==="inherit"&&I.value.auth.authActive&&(p=[{inheritedFrom:(O=A.inheritedProperties)==null?void 0:O.auth.parentName,source:"auth",id:"header-auth",header:h}]),[...l,...p]}),B=W(!0),n=()=>{B.value=!B.value},_=o=>o.source==="auth"&&B.value?o.header.value.replace(/\S/gi,"*"):o.header.value,b=o=>{switch(o){case"auth":return a("request.go_to_authorization_tab");case"body":return a("request.go_to_body_tab")}},E=o=>{o==="auth"?j("change-tab","authorization"):j("change-tab","bodyParams")},R=he(Lt),L=R.getResultViewFor(N.currentTabID.value,o=>o.locations.type==="header"&&o.locations.position==="key"),k=R.getResultViewFor(N.currentTabID.value,o=>o.locations.type==="header"&&o.locations.position==="value"),d=(o,l)=>o.filter(p=>{if(!(p.locations.type==="url"||p.locations.type==="response"))return p.locations.index===l});return(o,l)=>{const p=Te,h=_e,X=at,O=tt("tippy");return g(),C("div",Go,[v("div",{class:de(["sticky z-10 flex flex-shrink-0 items-center justify-between overflow-x-auto border-b border-dividerLight bg-primary pl-4",[o.isCollectionProperty?"top-propertiesPrimaryStickyFold":"top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"]])},[v("label",Jo,J(e(a)("request.header_list")),1),v("div",Yo,[M(r(p,{to:"https://docs.hoppscotch.io/documentation/features/rest-api-testing",blank:"",title:e(a)("app.wiki"),icon:e(ot)},null,8,["title","icon"]),[[O,{theme:"tooltip"}]]),M(r(p,{title:e(a)("action.clear_all"),icon:e(nt),onClick:l[0]||(l[0]=c=>Y())},null,8,["title","icon"]),[[O,{theme:"tooltip"}]]),T.value?M((g(),oe(p,{key:0,title:e(a)("state.linewrap"),class:de({"!text-accent":e(D)}),icon:e(Ot),onClick:l[1]||(l[1]=Ht(c=>e(Nt)("WRAP_LINES","httpHeaders"),["prevent"]))},null,8,["title","class","icon"])),[[O,{theme:"tooltip"}]]):ee("",!0),M(r(p,{title:e(a)("state.bulk_mode"),icon:e(Ut),class:de({"!text-accent":t.value}),onClick:l[2]||(l[2]=c=>t.value=!t.value)},null,8,["title","icon","class"]),[[O,{theme:"tooltip"}]]),M(r(p,{title:e(a)("add.new"),icon:e(He),disabled:t.value,onClick:V},null,8,["title","icon","disabled"]),[[O,{theme:"tooltip"}]])])],2),t.value?(g(),C("div",Zo,[v("div",{ref_key:"bulkEditor",ref:y,class:"absolute inset-0"},null,512)])):(g(),C("div",en,[r(e(Ee),{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=c=>m.value=c),"item-key":c=>`header-${c.id}`,animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},{item:x(({element:c,index:P})=>{var z,ue;return[v("div",tn,[v("span",null,[M(r(p,{icon:e(Xt),class:de(["opacity-0",{"draggable-handle cursor-grab group-hover:opacity-100":P!==((z=m.value)==null?void 0:z.length)-1}]),tabindex:"-1"},null,8,["icon","class"]),[[O,{theme:"tooltip",delay:[500,20],content:P!==((ue=m.value)==null?void 0:ue.length)-1?e(a)("action.drag_to_reorder"):null}]])]),r(h,{modelValue:c.key,"onUpdate:modelValue":q=>c.key=q,placeholder:`${e(a)("count.header",{count:P+1})}`,"auto-complete-source":e(jo),"env-index":P,"inspection-results":d(e(L),P),"auto-complete-env":!0,envs:o.envs,onChange:q=>K(P,{id:c.id,key:q,value:c.value,active:c.active})},null,8,["modelValue","onUpdate:modelValue","placeholder","auto-complete-source","env-index","inspection-results","envs","onChange"]),r(h,{modelValue:c.value,"onUpdate:modelValue":q=>c.value=q,placeholder:`${e(a)("count.value",{count:P+1})}`,"inspection-results":d(e(k),P),"env-index":P,"auto-complete-env":!0,envs:o.envs,onChange:q=>K(P,{id:c.id,key:c.key,value:q,active:c.active})},null,8,["modelValue","onUpdate:modelValue","placeholder","inspection-results","env-index","envs","onChange"]),v("span",null,[M(r(p,{title:c.hasOwnProperty("active")?c.active?e(a)("action.turn_off"):e(a)("action.turn_on"):e(a)("action.turn_off"),icon:c.hasOwnProperty("active")?c.active?e(Ne):e(Q):e(Ne),color:"green",onClick:q=>K(P,{id:c.id,key:c.key,value:c.value,active:!c.active})},null,8,["title","icon","onClick"]),[[O,{theme:"tooltip"}]])]),v("span",null,[M(r(p,{title:e(a)("action.remove"),icon:e($t),color:"red",onClick:q=>ce(P)},null,8,["title","icon","onClick"]),[[O,{theme:"tooltip"}]])])])]}),_:1},8,["modelValue","item-key"]),r(e(Ee),{modelValue:ae.value,"onUpdate:modelValue":l[5]||(l[5]=c=>ae.value=c),"item-key":"id",animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},{item:x(({element:c,index:P})=>[v("div",on,[v("span",null,[r(p,{icon:e(Ue),class:"cursor-auto bg-divider text-secondaryLight opacity-25",tabindex:"-1"},null,8,["icon"])]),r(h,{modelValue:c.header.key,"onUpdate:modelValue":z=>c.header.key=z,placeholder:`${e(a)("count.value",{count:P+1})}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","placeholder"]),r(h,{"model-value":_(c),placeholder:`${e(a)("count.value",{count:P+1})}`,readonly:""},null,8,["model-value","placeholder"]),v("span",null,[c.source==="auth"?M((g(),oe(p,{key:0,title:e(a)(B.value?"state.show":"state.hide"),icon:B.value?e(ze):e(Ke),onClick:l[4]||(l[4]=z=>n())},null,8,["title","icon"])),[[O,{theme:"tooltip"}]]):(g(),C("div",nn))]),v("span",null,[M(r(p,{icon:e(Ft),title:b(c.source),onClick:z=>E(c.source)},null,8,["icon","title","onClick"]),[[O,{theme:"tooltip"}]])])])]),_:1},8,["modelValue"]),r(e(Ee),{modelValue:ie.value,"onUpdate:modelValue":l[7]||(l[7]=c=>ie.value=c),"item-key":"id",animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},{item:x(({element:c,index:P})=>[v("div",an,[v("span",null,[r(p,{icon:e(Ue),class:"cursor-auto bg-divider text-secondaryLight opacity-25",tabindex:"-1"},null,8,["icon"])]),r(h,{modelValue:c.header.key,"onUpdate:modelValue":z=>c.header.key=z,placeholder:`${e(a)("count.value",{count:P+1})}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","placeholder"]),r(h,{"model-value":c.source==="auth"?_(c):c.header.value,placeholder:`${e(a)("count.value",{count:P+1})}`,readonly:""},null,8,["model-value","placeholder"]),c.source==="auth"?M((g(),oe(p,{key:0,title:e(a)(B.value?"state.show":"state.hide"),icon:B.value&&c.source==="auth"?e(ze):e(Ke),onClick:l[6]||(l[6]=z=>n())},null,8,["title","icon"])),[[O,{theme:"tooltip"}]]):(g(),C("span",ln)),v("span",null,[M(r(p,{icon:e(zt),title:`This header is inherited from Parent Collection ${c.inheritedFrom??""}`},null,8,["icon","title"]),[[O,{theme:"tooltip"}]])])])]),_:1},8,["modelValue"]),m.value.length===0?(g(),oe(X,{key:0,src:`/images/states/${e(f).value}/add_category.svg`,alt:`${e(a)("empty.headers")}`,text:e(a)("empty.headers")},{body:x(()=>[r(p,{filled:"",label:`${e(a)("add.new")}`,icon:e(He),onClick:V},null,8,["label","icon"])]),_:1},8,["src","alt","text"])):ee("",!0)]))])}}});const _n=Bt(sn,[["__scopeId","data-v-0dc382b4"]]);export{_n as _,fn as a,vn as b,Xe as c,Io as d,oo as e,jo as f,hn as g,Xo as l,mn as o,qe as p};
//# sourceMappingURL=Headers-96f03a77.js.map
