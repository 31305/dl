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
document.oncontextmenu=(p)=>p.preventDefault()
const sg=document.createElement('div');
document.body.appendChild(sg);
var s=1;
document.body.style.display='grid';
document.body.style.width='100dvw';
document.body.style.height='100dvh';
document.body.style.placeItems='center';
document.body.style.imageRendering='auto';
var vsv=null;
const dsk=new Date('2026-06-18');
const ndss=(n,v)=>
{
	return new Promise((ps,ds)=>
	{
		const sk=Date.now();
		fetch('https://www.wikidata.org/w/api.php?action=query&titles=Q'+n.toString()+
			'&prop=revisions&rvprop=ids|timestamp&rvstart='+dsk.toISOString()
			+'&rvlimit=1&format=json&formatversion=2&origin=*')
		.then(p=>p.json()).then(p=>fetch('https://www.wikidata.org/wiki/Special:EntityData/Q'
			+n.toString()+'.json?revision='+p.query.pages[0].revisions[0].revid.toString()))
		.then(p=>p.json()).then(p=>fetch('https://commons.m.wikimedia.org/w/api.php?action=query&titles=File:'
			+p.entities['Q'+n.toString()].claims.P18[0].mainsnak.datavalue.value.replace(' ', '_')
			+'&prop=imageinfo&iiprop=timestamp|url&iiurlwidth='
			+Math.floor(Math.min(v*window.devicePixelRatio,200)).toString()
			+'&format=json&iistart='+dsk.toISOString()+'&formatversion=2&origin=*'))
		.then(p=>p.json()).then(p=>fetch(p.query.pages[0].imageinfo[0].thumburl))
		.then(p=>
			{
				if(sk-(new Date(p.headers.get('Last-Modified')))>1000)ps(p);
				else ds();
			}).catch(ds)
	})
}
const dsnm=async(n,v)=>
{
	const s=await caches.open('vcsg');
	let p=await s.match(n);
	if(!p)
	{
		p=await ndss(n,v);
		s.put(n,p.clone());
	}
	const tp=await p.blob();
	const l=URL.createObjectURL(tp);
	return l;
}
window.tp=j;
const ssk=(mk)=>
{
	sg.innerHTML='';
	s=1+j.p(mk).sb.size
	const v=vsp(s);
	const ss=(k)=>
	{
		const ps=document.createElement('div');
		ps.className='nv';
		sg.appendChild(ps);
		const plv=k==mk?'#88B':'#225';
		ps.style.setProperty('--nvv',plv);
		ps.b=false;
		const cb=document.createElement('span')
		cb.className='cb'
		ps.appendChild(cb);
		const srk=()=>
		{
			dsnm(k,v).then(p=>
			{
				const d=document.createElement('img')
				d.style.width='var(--dv)';
				d.style.height='var(--dv)';
				d.style.objectFit='contain';
				d.draggable=false
				d.src=p;
				d.onload=()=>
				{
					URL.revokeObjectURL(p);
					ps.replaceChild(d,ps.children[0]);
				}
			}).catch(()=>{ps.removeChild(ps.children[0])})
		}
		ps.onclick=()=>
		{
			if(!ps.children.length)srk();
			else if(ps.children[0].tagName=='IMG')
			{
				if(k==mk)vsv.b(j.p(k).n)
				else location.hash=k;
			}
		}
		srk();
	}
	ss(mk)
	for(const pk of j.p(mk).sb)
		ss(pk)
}
window.onresize=()=>{vsp(s)}
const nk=()=>
{
	if(location.hash.length<2)location.hash=1;
	else ssk(Number(location.hash.substr(1)))
}
window.onhashchange=nk
Promise.all([ss('vm.js'),ss('j.js')]).then(p=>{
	jnm(j);
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
		.cb{
			width:calc(var(--dv) * 0.25);
			height:calc(var(--dv) * 0.25);
			border:calc(var(--dv) * 0.05) solid #FFF;
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
		nk();
	})
});
