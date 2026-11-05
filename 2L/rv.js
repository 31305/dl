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
const pm=(s)=>`calc(var(--dv) * ${s})`;
const tpk=async(ng)=>
{
	const g=document.createElement('div');
	g.style.width=pm(20);
	g.style.height=g.style.width;
	g.style.borderRadius='50%';
	g.style.borderStyle='solid'
	g.style.borderWidth=pm(4)
	g.style.borderColor='orange'
    g.style.position='absolute';
    g.style.left='50%';
    g.style.top='50%';
    g.style.transform='translate(-50%, -50%)';
	document.body.appendChild(g);
	if(ng.dk)
	{
	    g.style.background='#a60';
		await new Promise(p=>
		{
			const pk=(ps)=>
			{
				if(!(ps.type=='click'||ps.code=='Space'||ps.code=='Enter'||ps.code.startsWith('Arrow')))return;
				document.onkeydown=null;
				document.onclick=null;
				p();
			}
			document.onclick=pk;
			document.onkeydown=pk;
		})
		g.style.background='';
	}
	const sg=document.createElement('div');
	sg.style.display='grid';
	sg.style.gridTemplateColumns='1fr auto 1fr'
	sg.style.gridTemplateRows='1fr auto 1fr'
	sg.style.width=pm(160);
	sg.style.height=sg.style.width;
	sg.style.gap=pm(0)
	const ms=document.createElement('div');
	ms.style.width=pm(80);
	ms.style.height=ms.style.width;
	ms.style.gridColumn=2;
	ms.style.gridRow=2;
	sg.appendChild(ms);
	const ss=[];
	for(let k=0;k<4;k++)
	{
		ss[k]=document.createElement('div');
		ss[k].style.display='block';
		ss[k].style.backgroundColor=k%2?'#800':'#080';
		ss[k].style.gridColumn=k%2?4-k:2;
		ss[k].style.gridRow=k%2?2:k+1;
		sg.appendChild(ss[k]);
	}
	document.body.appendChild(sg);
	let g1=0,g2=0;
	const gsn=(s1,s2)=>
	{
		g.style.left=`calc(50% + ${s1}px)`
		g.style.top=`calc(50% + ${s2}px)`
	}
	const gkn=(p)=>{g1=0;g2=0;gsn(0,0);}
	const tks=(p,d)=>
	{
		const pv=p.getBoundingClientRect();
		const dv=d.getBoundingClientRect();
		if(pv.top<dv.top)return 0;
		else if(pv.right>dv.right)return 1;
		else if(pv.bottom>dv.bottom)return 2;
		else if(pv.left<dv.left)return 3;
		else return -1;
	}
	const npk=(k)=>
	{
		g1=0;g2=0;
		gsn(0,0);
		if(ss[k].n)return;
		ss[k].n=1;
		ss[k].style.backgroundColor=k%2?'#f00':'#0f0';
		if(document.npk)document.npk(!(k%2));
		setTimeout(()=>{ss[k].n=0;ss[k].style.backgroundColor=k%2?'#800':'#080';},150)
	}
	const gk=(p)=>
	{
		if(!(p.buttons==1||p.pressure))return;
		g1+=p.movementX;
		g2+=p.movementY;
		gsn(g1,g2);
		const tk=tks(g,ms);
		if(tk!=-1)npk(tk);
	}
	document.onkeydown=(p)=>
	{
		if(p.code=='ArrowUp')npk(0);
		if(p.code=='ArrowRight')npk(1);
		if(p.code=='ArrowDown')npk(2);
		if(p.code=='ArrowLeft')npk(3);
	}
	document.onpointermove=gk;
	document.onpointerup=gkn;
	document.onpointercancel=gkn;
	if(ng.b)await ng.v.svb(ng.b);
}
const nl=
{
	k(l)
	{
		if(!this.lv)
			this.lv=nlv();
		const lv=this.lv;
		const cp=document.createElement('canvas');
		cp.width=l.length*8+4;
		cp.height=12;
		const pv=cp.getContext('2d');
		pv.fillStyle='white';
		pv.fillRect(0,0,cp.width,cp.height);
		const knl=(s,k,s1,s2)=>
		{
			k=k.charCodeAt(0)
			if(lv[k]==null)return;
			for(let pk=0;pk<8;pk++)
				for(let ppk=0;ppk<8;ppk++)
				{
					const v=lv[k][pk]&(1<<(7-ppk))
					if(v)s.fillRect(s1+ppk,s2+pk,1,1)
				}
		}
		pv.fillStyle='black';
		for(let k=0;k<l.length;k++)
			knl(pv,l[k],2+k*8,2);
		cp.style.position='absolute';
		cp.style.left='50%';
		cp.style.top='50%';
		cp.style.transform='translate(-50%, -50%)';
		cp.style.height=pm(32);
		return cp;
	}
}
const pmk=async()=>
{
	document.oncontextmenu=(p)=>p.preventDefault()
	document.body.style.display='grid'
	document.body.style.placeItems='center'
	document.body.style.height='100dvh'
	document.documentElement.style.userSelect="none";
	document.body.style.touchAction='none';
	const ng={}
	try
	{
		await Promise.all([ss('nlv.js'),ss('vm.js')]);
		const v=new vp();
		await v.dk();
		ng.v=v;
	}
	catch(p){setTimeout(()=>window.location.reload(),10000)}
	document.body.style.setProperty('--dv','1px');
	ng.b=[51,8,76,45,1,51,48,43,2,66,31,51,8,76,56,9,66];
	ng.dk=1;
	await tpk(ng);
}
pmk();
