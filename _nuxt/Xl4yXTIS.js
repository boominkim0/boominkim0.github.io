import{g,h as C,al as v,am as D,a9 as w,a0 as o}from"./Cr2XUZEp.js";import _ from"./CFjIma6k.js";import S from"./BK_fDwtu.js";import{u as d}from"./C0J-18lc.js";import"./D2I4VtCT.js";import"./Dnd51l0P.js";import"./DHcHtRmO.js";const q=g({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=C().public.content,e=v(),{tag:m,excerpt:i,path:l,query:a,head:r}=f,u=r===void 0?c:r,s={...a||{},path:l||(a==null?void 0:a.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,s,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:i,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),O=q;export{O as default};