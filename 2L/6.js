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
	vs(v){if(!this.sbs.has(v))this.sbs.set(v,{sb:new Set()})}
	s(v1,v2)
	{
		this.vs(v1);
		this.vs(v2);
		this.sbs.get(v1).sb.add(v2);
		this.sbs.get(v2).sb.add(v1);
	}
	n(v,p)
	{
		this.vs(v);
		this.sbs.get(v).n=p;
	}
	p(v){return this.sbs.get(v);}
}
const j=new jp();
const jnm=()=>
{
	j.n(7206969,[70,7,75,73,16,44,1,49,2,77])
	j.n(1093742,[70,7,75,73,16,72,1,45,2,75])
	j.s(7206969,1093742)
}
jnm();
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
	return vv;
}
const sg=document.createElement('div');
document.body.appendChild(sg);
var s=1;
const ssk=(k)=>
{
	s=1+j.p(k).sb.size
	const v=vsp(s);
	const ss=(k)=>
	{
		const ps=document.createElement('div');
		ps.className='nv';
		sg.appendChild(ps);
		fetch('https://www.wikidata.org/wiki/Special:EntityData/Q'+k.toString()+'.json').then(p=>p.json()).then(p=>
		{
			const n=p.entities['Q'+k.toString()].claims.P18[0].mainsnak.datavalue.value.replace(' ', '_')
			fetch('https://commons.m.wikimedia.org/w/api.php?action=query&titles=File:'+n
				+'&prop=imageinfo&iiprop=url&iiurlwidth='
				+Math.floor(v*window.devicePixelRatio).toString()+
				'&format=json&formatversion=2&origin=*').then(p=>p.json()).then(p=>
				{
					const d=document.createElement('img')
					const m=(0.95*v).toString()+'px';
					d.style.width=m;
					d.style.height=m;
					d.crossOrigin="anonymous";
					d.src=p.query.pages[0].imageinfo[0].thumburl;
					ps.appendChild(d);
				})
		})
	}
	ss(k)
}
window.onresize=()=>{vsp(s)}
window.tp=ssk;
ss('vm.js').then(p=>{
	const v=new vp();
	v.dk().then(p=>{
		const vvss=document.createElement('style');
		vvss.textContent=`
		.nv{
			border:var(--pl) solid var(--nvv,black);
			margin-left:var(--vk);
			margin-top:var(--vk);
			display:grid;
			place-items:center;
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
