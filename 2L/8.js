const ss=(n)=>
{
	return new Promise((p,d)=>
	{
		let v=document.createElement('script');
		v.src=n;
		v.onload=p;
		v.onerror=d;
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
			vm({dk:()=>p(this),vppk:()=>{this.bs=false;if(this.vp!=null)this.vp()}}).then(p=>this.p=p).catch(d);
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
const bms=async(p)=>
{
	const cb=document.createElement('div')
	document.body.style.setProperty('--dv','1px');
	const bvs=200;
	cb.style.width='calc(var(--dv) * '+bvs.toString()+')'
	cb.style.height='calc(var(--dv) * 8)'
	cb.style.display='block';
	cb.style.backgroundColor='#134'
	document.body.appendChild(cb)
	const b=document.createElement('div')
	b.style.width='0%'
	b.style.height=cb.style.height;
	b.style.display='block';
	b.style.backgroundColor='#6ab'
	b.style.transition='width 1s ease-out'
	window.b=b;
	cb.appendChild(b)
	const pp=await fetch(p);
	if(!pp.ok){throw new Error(pp.status);}
	const pvs=Number(pp.headers.get("Content-Length"));
	let ps=0;
	const sgk=pp.body.getReader();
	const sgb=[];
	while(true)
	{
		const p=await sgk.read();
		if(p.done)break;
		sgb.push(p.value);
		ps+=p.value.byteLength;
		if(pvs){console.log(ps/pvs);}
		setTimeout(()=>{b.style.width=(ps/pvs*100).toString()+'%';},0);
	}
	const psg=new Uint8Array(ps);
	let tk=0;
	for(const bm of sgb){psg.set(bm,tk);tk+=bm.byteLength;}
}
const pmk=async()=>
{
	document.oncontextmenu=(p)=>p.preventDefault()
	document.body.style.display='grid'
	document.body.style.placeItems='center'
	document.body.style.height='100dvh'
	const sk=()=>window.stop();
	try{await ss('vm.js');}
	catch(p){sk();return;}
	const v=new vp();
	try{await v.dk();}
	catch(p){sk();return;}
}
pmk();
