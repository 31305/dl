const ss=(n)=>
{
	return new Promise((p,d)=>
	{
			
		let v=document.createElement('script');
		v.src=n;
		v.async=false;
		v.onload=p;
		document.body.appendChild(v);
	});
}
const vp=class
{
	bs=false;
	vp=null;
	dk()
	{
		return new Promise((p,d)=>
		{
			vm({dk:p,vppk:()=>{this.bs=false;if(this.vp!=null)this.vp()}}).then(p=>this.p=p);
		});
	}
	b(v)
	{
		return new Promise((pd,d)=>
		{
			if(this.bs||this.p==undefined)d();
			this.bs=true;
			this.vp=()=>{this.vp=null;pd();}
			this.p.ccall('jb',null,['array','number'],[new Uint8Array(v),v.length]);
		});
	}
}
class jp
{
	constructor(){this.sbs=new Map();}
	vs(v){if(!this.sbs.has(v))this.sbs.set(v,new Set())}
	sbn(v1,v2)
	{
		this.vs(v1);
		this.vs(v2);
		this.sbs.get(v1).add(v2);
		this.sbs.get(v2).add(v1);
	}
	sb(v){return this.sbs.get(v)||new Set();}
}
const vsgk=(s,v1,v2,vk)=>
{
	let v=0;
	for(let k=1;k<=s;k++)
	{
		const k2=Math.ceil(s/k);
		const nv=Math.min(v1/(k+vk*k+vk),v2/(k2+vk*k2+vk));
		if(nv>v)v=nv;
	}
	return v;
}
const vsp=(s)=>
{
	const plm=0.02;
	const vkm=0.2;
	const v=vsgk(s,window.innerWidth,window.innerHeight,vkm);
	console.log(v);
	const vv=v/(1+plm*2);
	document.body.style.setProperty('--pl',(plm*vv).toString()+'px');
	document.body.style.setProperty('--vk',(v*vkm).toString()+'px');
	document.body.style.setProperty('--v',vv.toString()+'px');
}
const sg=document.createElement('div');
document.body.appendChild(sg);
const ssk=(s)=>
{
	for(let k=0;k<s;k++)
	{
		const p=document.createElement('div');
		p.className='nv';
		sg.appendChild(p);
	}
	vsp(s);
}
window.tp=ssk
ss('vm.js').then(p=>{
	const v=new vp();
	v.dk().then(p=>{
		const vvss=document.createElement('style');
		vvss.textContent=`
		.nv{
			border:var(--pl) solid var(--nvv,black);
			margin-left:var(--vk);
			margin-top:var(--vk);
			display:inline-block;
			width:var(--v);
			height:var(--v);
		}
		.nv:active{
			border-color:white;
		}
		`;
		document.head.appendChild(vvss);
	})
});
