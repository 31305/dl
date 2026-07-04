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
Promise.all([ss('nlv.js'),ss('vm.js'),ss('ps.js')]).then(p=>{const v=new vp();v.dk().then(p=>
{
	const cp=document.createElement('canvas');
	cp.n=11;
	cp.v1=8*cp.n+4;
	cp.v2=12;
	const mnl=(m)=>'calc('+m.toString()+' *var(--m))';
	cp.style.objectFit='contain'
	cp.style.display='inline-block'
	cp.style.width=mnl(cp.v1);
	cp.style.height=mnl(cp.v2);
	cp.style.margin=mnl(1)
	cp.width=cp.v1;
	cp.height=cp.v2;
	cp.style.imageRendering='pixelated';
	const pv=cp.getContext('2d');
	const lv=nlv();
	const ln=new Array(lv.length);
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
	const nlk=(n)=>
	{
		pv.fillStyle='darkblue';
		pv.fillRect(0,0,cp.width,cp.height);
		pv.fillStyle='white';
		let k=0;
		while(k<cp.n)
		{
			knl(pv,(n%10).toString(),cp.width-10-k*8,2)
			n=Math.floor(n/10)
			k++;
		}
	}
	nlk(0)
	document.oncontextmenu=(p)=>p.preventDefault()
	document.body.style.display='grid';
	document.body.style.width='100dvw';
	document.body.style.height='100dvh';
	document.body.style.placeItems='center';
	const sd=document.createElement('div');
	sd.style.display='inline-block';
	sd.style.lineHeight=0
	sd.appendChild(cp);
	const psd=document.createElement('div');
	sd.appendChild(psd);
	sd.style.margin=0;
	sd.style.textAlign='center'
	const nsk=(n)=>
	{
		n.width=12;
		n.height=12;
		n.style.width=mnl(12);
		n.style.height=mnl(12);
		n.style.display='inline-block'
		n.style.borderWidth=mnl(1);
		n.style.margin=mnl(1)
		n.style.borderStyle='solid'
		n.className='nv';
		n.style.imageRendering='pixelated';
		n.pv=n.getContext('2d');
		n.pv.fillStyle='white'
		n.pv.fillRect(0,0,12,12)
	}
	const nsnl=(s,n)=>
	{
		s.pv.fillStyle='darkblue'
		knl(s.pv,n,2,2)
	}
	const vvss=document.createElement('style');
	vvss.textContent=`
	.nv{
		border-color:black;
	}
	.nv:active{
		border-color:white;
	}
	`;
	document.head.appendChild(vvss);
	const npks=(s,k)=>s.onclick=()=>
	{
		if(v.bs)return;
		s.style.filter='invert(1)'
		k().then(()=>s.style.filter='')
	}
	const pdvk=5;
	let ng=0,cpn=0;
	const ctn=(()=>
	{
		let n=0;
		let k=1;
		do{n+=k;k*=pdvk;}while(k<ps.length)
		n+=Math.min(k,ps.length)
		return n;
	})()
	const pdn=(p)=>p.pp?0:Math.min(ps.length,p.vk)
	const snsvv=(p,d)=>
	{
		const sns=Boolean(p)==Boolean(d)
		if(ps[0].vk==null)
		{
			ps[0].vk=1
			ps[0].pp=false;
		}
		if(sns)
		{
			if(pdn(ps[0]))
			{
				ng+=pdn(ps[0])-cpn
				cpn=0
			}
			else if(ng<ps.length*ctn)
			{
				ng++
				cpn++
			}
			if(ps[0].vk<ps.length)ps[0].vk*=pdvk;
			else ps[0].pp=true;
			const tp=ps.shift()
			ps.splice(Math.min(tp.vk-1,ps.length),0,tp)
		}
		else
		{
			ng-=(ps[0].vk-1)/(pdvk-1)+cpn
			if(ps[0].pp)
			{
				ng-=ps.length
				ps[0].pp=false
			}
			ps[0].vk=1
			cpn=0
		}
		nlk(ng)
		return sns?[49,1,66,43,2,75]:[2,49,3,66,43,1,75]
	}
	let vc=0
	const pn=document.createElement('canvas');
	nsk(pn);
	psd.appendChild(pn);
	nsnl(pn,'?')
	npks(pn,()=>{vc=1;return v.b(ps[0].p)})
	const nn=document.createElement('canvas');
	nsk(nn);
	psd.appendChild(nn);
	nsnl(nn,'x')
	npks(nn,()=>v.b([70,2]).then(()=>vc?v.b(snsvv(0,ps[0].s)).then(()=>v.b(ps[0].p)):Promise.resolve()))
	const mn=document.createElement('canvas');
	nsk(mn);
	psd.appendChild(mn);
	nsnl(mn,'o')
	npks(mn,()=>v.b([5,75]).then(()=>vc?v.b(snsvv(1,ps[0].s)).then(()=>v.b(ps[0].p)):Promise.resolve()))
	document.body.appendChild(sd);
	const pvsk=()=>
	{
		const mm=4;
		document.body.style.setProperty('--m',mm.toString()+'px');
		const vk=.9
		const nm=mm*Math.min(1,Math.min(window.innerHeight*vk/sd.offsetHeight,window.innerWidth*vk/sd.offsetWidth))
		if(nm!=mm)document.body.style.setProperty('--m',nm.toString()+'px');
	}
	pvsk();
	window.addEventListener("resize",pvsk);
})})
