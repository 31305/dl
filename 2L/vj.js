import dsnm from './dsnm.js';
import vp from './vp.js';
import vvg from './vvg.js'
import './sr.js'
import vjs from './vjs.js'
const v=new vp();
await Promise.all([vvg(),v.dk()])
document.body.style.cssText=`height:100dvh;display:flex;flex-direction:column;
	justify-content:center;align-items:center;background:black;`
const kpv=(k)=>
{
	document.body.innerHTML=`
<p style='display:inline-flex;gap:10px;'>
<input type="text" style="width:180px;" inputmode="numeric" autocomplete="off" maxLength=9/ id="ns">
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
const vvss=document.createElement('style');
vvss.textContent=`
.cb{
	width:50px;
	height:50px;
	border:10px solid #FFF;
	border-bottom-color:transparent;
	border-radius:50%;
	display:inline-block;
	box-sizing:border-box;
	animation:ck 1s linear infinite;
	}
	@keyframes ck{
	0%{
		transform:rotate(0deg);
	}
	100%{
		transform:rotate(360deg);
	}
	}
`;
document.head.appendChild(vvss);
const sg=vjs();
const ks=(k)=>
{
	document.body.innerHTML='<span class="cb"></span>';
	let dk=k;
	const ps=document.body;
	dsnm(dk,200).then(p=>
	{
		const d=document.createElement('img')
		d.style.width='200px';
		d.style.height='200px';
		d.style.objectFit='contain';
		d.draggable=false
		d.src=p;
		d.onload=()=>
		{
			URL.revokeObjectURL(p);
			ps.replaceChild(d,ps.children[0]);
		}
	}).catch((p)=>{ps.removeChild(ps.children[0]);throw(p);})
}
ks(await kpv(1));
