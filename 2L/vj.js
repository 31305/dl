import dsnm from './dsnm.js';
import vp from './vp.js';
import vvg from './vvg.js'
import './sr.js'
const v=new vp();
await Promise.all([vvg(),v.dk()])
const kpv=(k)=>
{
	document.body.style.cssText=`height:100dvh;display:flex;flex-direction:column;
		justify-content:center;align-items:center;background:black;`
	document.body.innerHTML=`
<p style='display:inline-flex;gap:10px;'>
<input type="text" style="width:180px;" inputmode="numeric" maxLength=9/ id="ns">
<button id="gk">#</button>
</p>
	`
	const ns=document.getElementById('ns');
	ns.value=k;
	ns.focus();
	const gk=document.getElementById('gk');
	ns.onkeydown=p=>{if(p.key=='Enter')gk.onclick();}
	return new Promise((p,d)=>{gk.onclick=()=>{p(Number(ns.value))}})
}
console.log(await kpv(12));
