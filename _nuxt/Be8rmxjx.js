import{z as j,A as h,_ as L,g as C,M as $,aa as A,B as I,C as y,ab as M,$ as N,a0 as S,o as s,c as n,a as D,F as k,y as J,E as l,b as m,w as U,G as p,k as d,J as c,t as v,I as _,ac as O,ad as P,u as V,j as z,ae as E}from"./CuZXbYzB.js";import F from"./CgX0T0z0.js";import{_ as H}from"./bHwyYn3Z.js";import{u as R}from"./tEZsjMo1.js";import{u as q}from"./DqewVgSd.js";import"./BVKunuc-.js";import"./BUGkfQNS.js";import"./Dnd51l0P.js";import"./BDA284Wd.js";const G={wrapper:"relative min-w-0",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5 rtl:rotate-180"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid"}},w=j(h.ui.strategy,h.ui.breadcrumb,G),W=C({components:{UIcon:$,ULink:A},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>w.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:o}=I("breadcrumb",y(e,"ui"),w,y(e,"class"));return{ui:r,attrs:o,getULinkProps:M,twMerge:N,twJoin:S}}}),K={key:1,role:"presentation"};function Q(e,r,o,i,f,g){const u=$,b=A;return s(),n("nav",_({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[D("ol",{class:l(e.ui.ol)},[(s(!0),n(k,null,J(e.links,(a,t)=>(s(),n("li",{key:t,class:l(e.ui.li)},[m(b,_({as:"span",class:[e.ui.base,t===e.links.length-1?e.ui.active:a.to?e.ui.inactive:""],"aria-current":t===e.links.length-1?"page":void 0,ref_for:!0},e.getULinkProps(a),{onClick:a.click}),{default:U(()=>[p(e.$slots,"icon",{link:a,index:t,isActive:t===e.links.length-1},()=>[a.icon?(s(),d(u,{key:0,name:a.icon,class:l(e.twMerge(e.twJoin(e.ui.icon.base,t===e.links.length-1?e.ui.icon.active:a.to?e.ui.icon.inactive:""),a.iconClass))},null,8,["name","class"])):c("",!0)]),p(e.$slots,"default",{link:a,index:t,isActive:t===e.links.length-1},()=>[a.label?(s(),n("span",{key:0,class:l(e.twMerge(e.ui.label,a.labelClass))},v(a.label),3)):c("",!0)])]),_:2},1040,["class","aria-current","onClick"]),t<e.links.length-1?p(e.$slots,"divider",{key:0},()=>[e.divider?(s(),n(k,{key:0},[e.divider.startsWith("i-")?(s(),d(u,{key:0,name:e.divider,class:l(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(s(),n("span",K,v(e.divider),1))],64)):c("",!0)]):c("",!0)],2))),128))],2)],16)}const T=L(W,[["render",Q]]),ne=C({__name:"[id]",async setup(e){let r,o;const i=O(),f=([r,o]=P(()=>R(`docs-${i.path}`,()=>E(i.path).findOne())),r=await r,o(),r);q(f),V({link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"/lib/github-markdown.css"}]});const g=[{label:"projects",to:"/projects"},{label:i.params.id+""}];return(u,b)=>{const a=T,t=F,B=H;return s(),d(B,{class:"pb-5"},{default:U(()=>[m(a,{links:g,class:"mb-3"}),m(t,{path:`/projects/${z(i).params.id}`,class:"markdown-body bg-transparent mb-5"},null,8,["path"])]),_:1})}}});export{ne as default};
