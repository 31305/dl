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
document.body.style='';
const sr=document.createElement("meta");
sr.name="color-scheme";
sr.content="light dark";
document.head.appendChild(sr);
Promise.all([ss('vm.js'),ss('ks.js')]).then(p=>{
	const v=new vp();
	v.dk().then(p=>
	{
		const ssk=(d)=>
		{
			document.body.innerHTML='';
			const pn=document.createElement('button')
			pn.innerText=(d.pg>1?d.pg.toString()+'×':'')+'↓';
			document.body.appendChild(pn);
			const ppn=document.createElement('button')
			ppn.innerText=(d.ppg>1?d.ppg.toString()+'×':'')+'↑';
			document.body.appendChild(ppn);
			const sv=document.createElement('input')
			sv.type='checkbox';
			sv.checked=d.dv;
			document.body.appendChild(sv);
			pn.onclick=()=>{const ns=d.k+d.pg;if(ns<ks.length)ssk({k:ns,dv:sv.checked,pg:(sv.checked?1:d.pg*2),ppg:1})}
			ppn.onclick=()=>{const ns=d.k-d.ppg;if(ns>0)ssk({k:ns,dv:0,ppg:d.ppg*2,pg:1})}
			const sn=document.createElement('button')
			sn.innerText='▶';
			document.body.appendChild(sn);
			const svb=async()=>
			{
				const s=ks[d.k].v;
				d.pg=1;d.ppg=1;
				if(v.bs||s==undefined)return;
				if(!s[0].length)await v.b(s)
				else for(const ps of s)await v.b(ps)
			}
			sn.onclick=svb;
			document.body.appendChild(document.createElement('p'))
			const ls=document.createElement('div')
			ls.style='overflow-x:auto;white-space:nowrap;'
			ls.innerHTML=ks[d.k].d;
			document.body.appendChild(ls)
			if(d.dv&&d.k)svb()
		}
		ssk({k:0,dv:1,pg:1,ppg:1})
	})
})
