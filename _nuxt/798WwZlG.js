import{a5 as u,f as c,g as r,G as l,ag as d,X as g,ah as h,o as m,j as f,i,ai as p}from"./cTWRZPaM.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const S={setup:()=>x("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?S:"img",e=t,o=l(()=>{var a;if((a=e.src)!=null&&a.startsWith("/")&&!e.src.startsWith("//")){const s=d(g(r().app.baseURL));if(s!=="/"&&!e.src.startsWith(s))return h(s,e.src)}return e.src});return(a,s)=>(m(),f(p(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};