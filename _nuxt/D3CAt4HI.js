var m=Object.defineProperty;var p=(h,e,t)=>e in h?m(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var a=(h,e,t)=>p(h,typeof e!="symbol"?e+"":e,t);import{u as g}from"./DgNmaihL.js";import{f as u,k as f,l as y,o as x,c as w,e as v,u as b,m as M,j as _,w as k,n as L,i as B,a as l,b as T,_ as E}from"./cTWRZPaM.js";import{_ as z}from"./CeZhYLrE.js";let X=0;class d{constructor(e,t,o,s,i,n,r){a(this,"id",X++);a(this,"char");a(this,"initX");a(this,"initY");a(this,"x");a(this,"y");a(this,"alpha");a(this,"fontSize");a(this,"color","rgb(96, 165, 250)");a(this,"context");a(this,"angle",0);a(this,"speed",0);a(this,"anmationType","none");this.char=e,this.initX=t,this.initY=o,this.x=t,this.y=o,this.alpha=s,this.fontSize=i,this.color=n,this.context=r}draw(){this.context.fillStyle=this.color,this.context.globalAlpha=this.alpha,this.context.font=`${this.fontSize}px Arial`,this.context.fillText(this.char,this.x,this.y),this.context.textAlign="center"}update(){this.anmationType==="fadeout"?(this.fadeout(),this.alpha===0&&(this.none(),this.alpha=1,this.char=c.getRandomCharacter())):this.anmationType==="throw"?(this.throw(this.angle,this.speed),(this.x<9||this.x>this.context.canvas.width-this.fontSize||this.y<15||this.y>this.context.canvas.height-5)&&this.none()):this.anmationType==="backPosition"&&(this.throw(this.angle,this.speed),Math.abs(this.initX-this.x)<1&&Math.abs(this.initY-this.y)<1&&(this.none(),this.x=this.initX,this.y=this.initY))}none(){this.anmationType="none"}startBackPosition(){this.anmationType="backPosition";const e=this.initX-this.x,t=this.initY-this.y,o=Math.sqrt(e*e+t*t),s=Math.atan2(t,e)*(180/Math.PI),i=o*.1;this.angle=s,this.speed=i}startThrow(e,t){this.anmationType="throw",this.angle=e,this.speed=t}throw(e,t){const o=e*(Math.PI/180),s=Math.cos(o)*t,i=Math.sin(o)*t;this.x+=s,this.y+=i}fadeout(){this.alpha=Math.max(0,this.alpha-.001)}}class c{constructor(e,t){a(this,"context");a(this,"charList",[]);a(this,"textColour","black");a(this,"backgroundColour","transparent");a(this,"isBoom",!1);this.context=e,t?this.darkMode():this.lightMode();const o=Math.floor(this.context.canvas.width/20),s=Math.floor(this.context.canvas.height/20);for(let i=0;i<o;i++)for(let n=0;n<s;n++){const r=new d(c.getRandomCharacter(),i*20+9,n*20+15,1,20,this.textColour,this.context);this.charList.push(r)}this.context.canvas.addEventListener("mousedown",this.mousedown.bind(this)),this.context.canvas.addEventListener("touchstart",this.mousedown.bind(this)),this.context.canvas.addEventListener("mousemove",this.boom.bind(this)),this.context.canvas.addEventListener("touchmove",this.boom.bind(this)),this.context.canvas.addEventListener("mouseup",this.mouseup.bind(this)),this.context.canvas.addEventListener("touchend",this.mouseup.bind(this))}static getRandomCharacter(){const e="0123456789BoominKim",t=Math.floor(Math.random()*e.length);return e[t]}getXY(e){let t=0,o=0;const s=this.context.canvas.getBoundingClientRect();return e instanceof MouseEvent?(t=e.clientX-s.left,o=e.clientY-s.top):e instanceof TouchEvent&&(t=e.touches[0].clientX-s.left,o=e.touches[0].clientY-s.top),{x:t,y:o}}darkMode(){this.textColour="rgb(156, 163, 175)"}lightMode(){this.textColour="rgb(107, 114, 128)"}mousedown(){this.isBoom=!0}mouseup(){this.isBoom=!1,this.backPosition()}backPosition(){this.charList.forEach(e=>{e.startBackPosition()})}boom(e){if(!this.isBoom)return;const{x:t,y:o}=this.getXY(e);this.charList.forEach(s=>{const i=t-s.x,n=o-s.y;Math.sqrt(i*i+n*n)<50&&(s.anmationType="throw",s.startThrow(Math.random()*360,Math.random()*5))})}draw(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.charList.forEach(e=>{e.draw(),e.update(),e.anmationType==="none"&&Math.random()>.995&&(e.anmationType="fadeout")})}clear(){this.context.fillStyle=this.backgroundColour,this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height),this.charList=[]}resize(){const e=Math.floor(this.context.canvas.width/20),t=Math.floor(this.context.canvas.height/20);this.charList=[];for(let o=0;o<e;o++)for(let s=0;s<t;s++){const i=new d(c.getRandomCharacter(),o*20+9,s*20+15,1,20,this.textColour,this.context);this.charList.push(i)}}}const Y={id:"canvas",class:"w-full h-full"},P=u({__name:"MatrixCanvas",setup(h){const e=g();let t=null;f(()=>{const s=document.getElementById("canvas"),i=s.getContext("2d"),n=1;s.width=s.clientWidth*n,s.height=s.clientHeight*n,i.scale(n,n),t=new c(i,e.value==="dark"),o(),window.addEventListener("resize",()=>{t==null||t.clear(),setTimeout(()=>{s.width=s.clientWidth*n,s.height=s.clientHeight*n,i.scale(n,n),t==null||t.resize()},1e3)})}),y(()=>e.value,()=>{e.value==="dark"?t==null||t.darkMode():t==null||t.lightMode(),t==null||t.clear(),t==null||t.resize()});function o(){t&&(t.draw(),requestAnimationFrame(o))}return(s,i)=>(x(),w("canvas",Y))}}),R=()=>v().$device,C={class:"w-full my-5 relative flex-1"},S=u({__name:"index",setup(h){const{isMobile:e}=R(),t=e?"calc(100vh - 100px)":"100vh";return b({title:"Boomin Kim"}),e&&(f(()=>{document.body.style.overflow="hidden"}),M(()=>{document.body.style.overflow=""})),(o,s)=>{const i=P,n=z;return x(),_(n,{class:"flex flex-col overflow-hidden",style:L({height:B(t)})},{default:k(()=>[l("div",C,[T(i),s[0]||(s[0]=l("div",{class:"absolute blur-box w-fit",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},[l("h1",{class:"text-4xl font-bold text-center text-gray-800 dark:text-gray-200"}," Boomin Kim "),l("h2",{class:"text-2xl text-center text-gray-600 dark:text-gray-400"}," 만드는걸 좋아하는 개발자 입니다. ")],-1))])]),_:1},8,["style"])}}}),j=E(S,[["__scopeId","data-v-68fd5e6b"]]);export{j as default};