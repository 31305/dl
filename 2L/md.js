import vp from './vp.js'
import {sb} from './sb.js'
const v=new vp();
await v.dk()
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
document.body.style.cssText='text-align:center;font-family:sans-serif;'
const d=document.body;
d.innerHTML=`
	<h1>1, 2, 3.</h1>
	<p><input type="text" style="font-family:monospace" size=9 inputmode="numeric" maxLength=9/ id="ns"></p>
	<p>
	<button id="nk">?</button>
	<button id="vk">?</button>
	<button id="vpk">?</button>
	</p>`
const ns=document.getElementById('ns')
ns.addEventListener('input',p=>{p.target.value=p.target.value.replace(/[^0-9]/g,'')})
const nk=document.getElementById('nk')
const vk=document.getElementById('vk')
const vpk=document.getElementById('vpk')
ns.onkeydown=p=>{if(p.key=='Enter')nk.onclick();}
nk.innerText='?'
const pvk=()=>{const b=sb({s:Number(ns.value),sv:1,sc:1});console.log(b);v.svb(b);}
nk.onclick=()=>{if(v.bs)return;pvk();}
vk.innerText='+';
vk.onclick=()=>{ns.value=Number(ns.value)+1;pvk();}
vpk.innerText='-';
vpk.onclick=()=>{ns.value=Math.max(0,Number(ns.value)-1);pvk();}
document.addEventListener('keydown',p=>
{
	if(p.code=='NumpadAdd'||p.key=='+'||(p.shiftKey&&p.code=='Equal'))vk.onclick();
	if(p.code=='NumpadSubtract'||p.key=='-')vpk.onclick();

})
const vvss=document.createElement('style');
vvss.textContent=`
button{
       font-family:monospace;
       font-size:20px;
}
`;
document.head.appendChild(vvss);
