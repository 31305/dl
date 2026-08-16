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
const ssd=(p)=>
{
	return new Promise(async(pk,dk)=>
	{
		try
		{
			const d=await fetch(p);
			const ct=await d.text();
			const t=new Blob([ct],{type:'text/javascript'});
			const c=URL.createObjectURL(t);
			const s=document.createElement('script');
			s.src=c;
			s.onload=()=>{URL.revokeObjectURL(c);pk()}
			s.onerror=()=>{URL.revokeObjectURL(c);dk()}
			document.body.appendChild(s);
		}
		catch(p){dk(p)}
	})
}
const vp=class
{
	bs=false;
	vp=null;
	svb=async(s)=>
	{
		if(!s[0].length)await this.b(s)
		else for(const ps of s)await this.b(ps)
	}
	dk()
	{
		return new Promise((p,d)=>
		{
			vm({dk:()=>p(this),vppk:()=>{this.bs=false;if(this.vp!=null)this.vp()}}).then(p=>this.p=p);
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
ss('vm.js').then(()=>(new vp()).dk()).then(p=>window.v=p)
