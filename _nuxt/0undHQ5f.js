import{g as d,aq as l,D as f,ar as v,i as p,as as m,at as g,ao as h,S as r,e as y}from"./CCCYE9a4.js";import{u as _}from"./CueErtdE.js";const q=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await _(`content-navigation-${g(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>r(y,{to:e._path},()=>e.title),a=(e,u)=>r("ul",u?{"data-level":u}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,u+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),S=q;export{S as default};
