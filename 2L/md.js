import vp from './vp.js'
import {sb} from './sb.js'
import vvg from './vvg.js'
import './sr.js'
const v=new vp();
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
Promise.all([vvg(),v.dk()]).then(dvpk)
document.body.style.cssText=`height:100dvh;display:flex;flex-direction:column;justify-content:center;align-items:center;
background:black;visibility:hidden;`
document.body.innerHTML=`
<p><input type="text" style="width:180px;" inputmode="numeric" maxLength=9/ id="ns"></p>
<p style='margin-top:10px;display:inline-flex;gap:10px;'>
<button id="nk">?</button>
<button id="vk">+</button>
<button id="vpk">-</button>
</p>`
const ns=document.getElementById('ns')
ns.addEventListener('input',p=>{p.target.value=p.target.value.replace(/[^0-9]/g,'')})
const nk=document.getElementById('nk')
const vk=document.getElementById('vk')
const vpk=document.getElementById('vpk')
ns.onkeydown=p=>{if(p.key=='Enter')nk.onclick();}
const pvk=()=>{const b=sb({s:Number(ns.value),sv:1,sc:1});console.log(b);v.svb(b);}
nk.onclick=()=>{if(v.bs)return;pvk();}
vk.onclick=()=>{ns.value=Number(ns.value)+1;pvk();}
vpk.onclick=()=>{ns.value=Math.max(0,Number(ns.value)-1);pvk();}
document.addEventListener('keydown',p=>
{
	if(p.code=='NumpadAdd'||p.key=='+'||(p.shiftKey&&p.code=='Equal'))vk.onclick();
	if(p.code=='NumpadSubtract'||p.key=='-')vpk.onclick();

})
function dvpk()
{
	document.body.style.visibility='visible';
	ns.focus();
}
