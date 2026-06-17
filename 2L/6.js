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
const vsgk=(s,v1,v2,vk)=>
{
	let v=0,k1=0,k2=0;
	for(let k=1;k<=s;k++)
	{
		const dk=Math.ceil(s/k);
		const nv=Math.min(v1/(k+vk*k+vk),v2/(dk+vk*dk+vk));
		if(nv>v)
		{
			v=nv;
			k1=k;
			k2=dk;
		}
	}
	return [v,k1,k2];
}
const vsp=(s)=>
{
	const plm=0.02;
	const vkm=0.2;
	let [v,k1,k2]=vsgk(s,window.innerWidth,window.innerHeight,vkm);
	v=Math.min(v,200);
	sg.style.width=(v*(k1+vkm*k1-vkm)).toString()+'px';
	sg.style.height=(v*(k2+vkm*k2-vkm)).toString()+'px';
    sg.style.display='grid';
    sg.style.gridTemplateColumns='repeat('+k1.toString()+', '+v.toString()+'px';
    sg.style.gridTemplateRows='repeat('+k2.toString()+', '+v.toString()+'px';
    sg.style.gap=(v*vkm).toString()+'px';
    sg.style.padding=(v*vkm).toString()+'px';
	const vv=v/(1+plm*2);
	document.body.style.setProperty('--pl',(plm*vv).toString()+'px');
	document.body.style.setProperty('--v',vv.toString()+'px');
	document.body.style.setProperty('--dv',(vv*0.95).toString()+'px');
	return vv;
}
const sg=document.createElement('div');
document.body.appendChild(sg);
var s=1;
document.body.style.display='grid';
document.body.style.width='100dvw';
document.body.style.height='100dvh';
document.body.style.placeItems='center';
var vsv=null;
const ssk=(k)=>
{
	sg.innerHTML='';
	s=1+j.p(k).sb.size
	const v=vsp(s);
	const ss=(k)=>
	{
		const ps=document.createElement('div');
		ps.className='nv';
		sg.appendChild(ps);
		const plv='#225';
		ps.style.setProperty('--nvv',plv);
		ps.b=false;
		ps.onclick=()=>
		{
			if(ps.b)location.hash=k;
			else if(!vsv.bs)
			{
				ps.b=true;
				ps.style.setProperty('--nvv','#88B');
				vsv.b(j.p(k).n).then(()=>{ps.b=false;ps.style.setProperty('--nvv',plv)})
			}
		}
		const dnm=(n)=>
		{
			const d=document.createElement('img')
			d.style.width='var(--dv)';
			d.style.height='var(--dv)';
			d.crossOrigin="anonymous";
			d.style.objectFit='contain';
			d.draggable=false
			d.src=n;
			ps.appendChild(d);
		}
		const dn=localStorage.getItem('Q'+k.toString())
		if(dn)dnm(dn);
		else fetch('https://www.wikidata.org/wiki/Special:EntityData/Q'+k.toString()+'.json').then(p=>p.json()).then(p=>
		{
			const n=p.entities['Q'+k.toString()].claims.P18[0].mainsnak.datavalue.value.replace(' ', '_')
			fetch('https://commons.m.wikimedia.org/w/api.php?action=query&titles=File:'+n
				+'&prop=imageinfo&iiprop=url&iiurlwidth='
				+Math.floor(v*window.devicePixelRatio).toString()+
				'&format=json&formatversion=2&origin=*').then(p=>p.json()).then(p=>
					{
						const n=p.query.pages[0].imageinfo[0].thumburl;
						localStorage.setItem('Q'+k.toString(),n)
						dnm(n)
					})
		})
	}
	ss(k)
	for(const pk of j.p(k).sb)
		ss(pk)
}
window.onresize=()=>{vsp(s)}
const nk=()=>{ssk(Number(location.hash.substr(1)))}
window.onhashchange=nk
ss('vm.js').then(p=>{
	const v=new vp();
	vsv=v;
	v.dk().then(p=>{
		const vvss=document.createElement('style');
		vvss.textContent=`
		.nv{
			border:var(--pl) solid var(--nvv);
			margin:0;
			display:inline-grid;
			place-items:center;
			width:var(--v);
			height:var(--v);
		}
		.nv:active{
			border-color:#DDF;
		}
		`;
		document.head.appendChild(vvss);
		if(location.hash.length<2)
			location.hash=893;
		else nk();
	})
});
const jnm=()=>
{
	j.n(893,[70,7,75,73,16,44,1,49,2,77])
	j.n(1093742,[70,7,75,73,16,72,1,45,2,75])
	j.s(893,1093742)
	j.n(488463,[50,7,75,1,52,1,65,63,2,75])
	j.s(893,488463)
	j.n(7561,[50,7,75,1,46,1,44,48,5])
	j.s(7561,488463)
	j.n(13191,[70,4,44,1,55,53,2,75]);
	j.s(1093742,13191);
}
jnm();
