import vp from './vp.js'
import {sb} from './sb.js'
const v=new vp();
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
const d=document.body;
const dvs=Object.assign(document.createElement('link'),
	{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'})
Promise.all([(new Promise((p,d)=>{dvs.onload=p;dvs.onerror=d;document.head.appendChild(dvs);})).then
	(()=>document.fonts.ready),v.dk()]).then(dvpk)
document.body.style.cssText=`height:100dvh;display:flex;flex-direction:column;justify-content:center;align-items:center;
background:black;visibility:hidden;`
d.innerHTML=`
<p><input type="text" style="width:135px;" inputmode="numeric" maxLength=9/ id="ns"></p>
<p style='margin-top:10px;display:inline-flex;gap:10px;'>
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
*,*::before,*::after{
	box-sizing:border-box;
	margin:0;
	padding:0;
	border:0;
	border-radius:0;
	font:normal 30px "Ubuntu Mono";
	color:white;
	line-height:1;
	background:none;
	appearance:none;
	outline:none;
}
button{
	user-select:none;
	border:2px solid white;
	width:42px;
	font-size:40px;
}
@media(hover:hover)
{
button{cursor:pointer}
button:hover{transform:scale(1.1);}
}
button:active{
	transform:scale(1.1);
	background:white;
	color:black;
}
input{
	text-align:right;
	border-bottom:2px solid white;
}
`;
document.head.appendChild(vvss);
function dvpk()
{
	d.style.visibility='visible';
	ns.focus();
}
