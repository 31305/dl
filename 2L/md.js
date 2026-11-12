import vp from './vp.js'
import {sb} from './sb.js'
const v=new vp();
await v.dk()
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
document.body.style.cssText='text-align:center;font:serif;margin:auto;'
const d=document.createElement('div')
if(0)d.style.width='200px'
d.style.marginInline='auto'
document.body.appendChild(d);
const pd=document.createElementNS('http://www.w3.org/2000/svg','svg')
pd.setAttribute('width','100px')
pd.setAttribute('viewBox','0 0 100 100')
pd.innerHTML=
`
<rect width="100%" height="100%" fill="#f9dc5c" />

`
if(0)d.appendChild(pd)
else d.innerHTML='<h2>1, 2, 3, ...</h2>'
const ld=document.createElement('div')
ld.style='display:flex;margin:.25em;gap:.25em;width:150px;margin-inline:auto;'
d.appendChild(ld)
const ns=document.createElement('input')
ns.style='flex:1;min-width:0'
ns.setAttribute('type','text');
ns.setAttribute('inputmode','numeric');
ns.addEventListener('input',p=>{p.target.value=p.target.value.replace(/[^0-9]/g,'')})
ld.appendChild(ns)
const nk=document.createElement('button')
ns.onkeydown=p=>{if(p.key=='Enter')nk.onclick();}
ld.appendChild(nk)
nk.innerText='?'
nk.onclick=()=>{if(v.bs)return;const b=sb(Number(ns.value));console.log(b);v.svb(b);}
const vk=document.createElement('button');
vk.innerText='+';
d.append(vk);
vk.onclick=()=>{ns.value=Number(ns.value)+1;nk.onclick();}
const vpk=document.createElement('button');
vpk.innerText='-';
vpk.style.margin='.25em'
d.append(vpk);
vpk.onclick=()=>{ns.value=Math.max(0,Number(ns.value)-1);nk.onclick();}
