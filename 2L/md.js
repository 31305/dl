import vp from './vp.js'
import {sb} from './sb.js'
const v=new vp();
await v.dk()
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
document.body.style.cssText='text-align:center;font:serif;margin:auto;'
const d=document.body;
d.innerHTML='<h2>1, 2, 3, ...</h2>'
const ns=document.createElement('input')
ns.style='flex:1;min-width:0'
ns.setAttribute('type','text');
ns.setAttribute('inputmode','numeric');
ns.maxLength=9;
ns.addEventListener('input',p=>{p.target.value=p.target.value.replace(/[^0-9]/g,'')})
d.appendChild(ns)
const nk=document.createElement('button')
ns.onkeydown=p=>{if(p.key=='Enter')nk.onclick();}
d.appendChild(document.createElement('br'))
d.appendChild(nk)
nk.innerText='?'
const pvk=()=>{const b=sb({s:Number(ns.value),sv:1});console.log(b);v.svb(b);}
nk.onclick=()=>{if(v.bs)return;pvk();}
const vk=document.createElement('button');
vk.innerText='+';
d.appendChild(vk);
vk.onclick=()=>{ns.value=Number(ns.value)+1;}
const vpk=document.createElement('button');
vpk.innerText='-';
d.appendChild(vpk);
vpk.onclick=()=>{ns.value=Math.max(0,Number(ns.value)-1);}
const vvss=document.createElement('style');
vvss.textContent=`
button{
	margin-top:4px;
	margin-inline:2px;
	font-family:monospace;
	font-size:20px;
}
`;
document.head.appendChild(vvss);
