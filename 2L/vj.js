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
	ns.onkeydown=p=>{if(p.key=='Enter'){gk.onclick(p);}}
	return new Promise((p,d)=>{gk.onclick=(pp)=>{pp.stopPropagation();p(Number(ns.value))}})
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
	window.dcksk=k;
	const ps=document.body;
	dsnm(k,200).then(p=>
	{
		const d=document.createElement('img')
		d.style.width='200px';
		d.style.border='1px solid #778';
		d.style.padding='3px';
		d.style.userSelect='none';
		d.draggable=false
		d.src=p;
		d.onload=()=>
		{
			URL.revokeObjectURL(p);
			if(dcksk==k)ps.replaceChild(d,ps.children[0]);
		}
	}).catch((p)=>{if(dcksk==k)ps.removeChild(ps.children[0]);throw(p);})
}
const vmk=(s)=>
{
	return new Promise((p,d)=>
	{
		document.body.style.touchAction='none';
		document.oncontextmenu=(p)=>p.preventDefault()
		let s1=null,s2=null;
		let kpk=null;
		let c=1;
		const pk=(k)=>
		{
			c=0;
			if(kpk)clearTimeout(kpk);
			document.body.style.touchAction='';
			document.oncontextmenu=null;
			document.onclick=null;
			document.onpointermove=null;
			document.onkeydown=null;
			p(k);
		}
		const svk=async()=>
		{
			await v.svb(s.v);
			s.db=1;
			if(c)kpk=setTimeout(()=>{v.svb([51,8,75]);kpk=null},1000);
		}
		document.onclick=()=>
		{
			if(v.bs)return;
			if(!kpk)svk();
			else pk(1);
		}
		document.onpointerdown=()=>{if(v.bs)return;s1=0;s2=0;}
		document.onpointermove=(pp)=>{if(s1!=null)
		{
			s1+=pp.movementX;s2+=pp.movementY;
			if(s1*s1+s2*s2>400)pk((!kpk&&s.db)?1:0);
		}}
		document.onkeydown=(p)=>
		{
			if(p.code=='Escape')pk((!kpk&&s.db)?1:0);
			else if(p.code=='Enter'||p.code=='Space')document.onclick();
		}
		document.onpointerup=()=>{s1=null;s2=null;}
		document.onpointerout=()=>{s1=null;s2=null;}
		if(s.db&&!v.bs)svk();
	})
}
let k=sg.dk,pt=-1;
while(1)
{
	if(pt==0)
	{
		window.dcksk=null;
		k=(await kpv(k+1))-1;
		pt=2;
	}
	else
	{
		if(k<0||k>=sg.length)k=0;
		for(let pk=k+1;pk<k+10&&pk<sg.length;pk++)dsnm(sg[pk].dc,200,0);
		if(!window.dcksk||dcksk!=sg[k].dc)ks(sg[k].dc);
		pt=await vmk({v:sg[k].v,db:pt==1})
		if(pt==1)k++;
	}
}
