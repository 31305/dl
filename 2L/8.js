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
		let k=0;
		const ssk=(k)=>
		{
			document.body.innerHTML='';
			const pn=document.createElement('button')
			pn.innerText='→';
			document.body.appendChild(pn);
			const sn=document.createElement('button')
			sn.innerText='▶';
			document.body.appendChild(sn);
			const svb=async()=>
			{
				const s=ks[k].v;
				if(v.bs)return;
				if(!s[0].length)await v.b(s)
				else for(const ps of s)await v.b(ps)
			}
			sn.onclick=svb;
			document.body.appendChild(document.createElement('p'))
			const ls=document.createElement('div')
			ls.style='overflow-x:auto;white-space:nowrap;'
			ls.innerText=ks[k].d;
			document.body.appendChild(ls)
		}
		ssk(0)
	})
})
