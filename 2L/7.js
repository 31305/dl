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
	if(Number(location.hash.slice(1)))
	{
		const k=Number(location.hash.slice(1))
		ps.push(...ps.splice(0,k-1))
	}
	const pdvk=5;
	const ctn=(()=>
	{
		let n=0;
		let k=1;
		do{n+=k;k*=pdvk;}while(k<ps.length)
		n+=Math.min(k,ps.length)
		return n;
	})()
	const cp=document.createElement('canvas');
	cp.n=(ctn*ps.length).toString().length+1;
	if(!(cp.n%2))cp.n++;
	cp.v1=8*cp.n+4;
	cp.v2=20;
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
	pv.fillStyle='darkblue';
	pv.fillRect(0,0,cp.width,cp.height)
	const nlk=(n,dg=0)=>
	{
		pv.fillStyle='darkblue';
		pv.fillRect(0,2+dg*8,cp.width,8);
		pv.fillStyle='white';
		for(let k=0;k<n.length;k++)knl(pv,n[n.length-1-k],cp.width-10-k*8,2+dg*8)
	}
	nlk('0')
	if(1)nlk('/'+(ctn*ps.length).toString(),1)
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
		n.pv.fillStyle='darkblue'
		n.pv.fillRect(0,0,12,12)
	}
	const nsnl=(s,n,sv=1)=>
	{
		s.pv.fillStyle=sv?'yellow':'white'
		knl(s.pv,n,2,2)
	}
	const vvss=document.createElement('style');
	vvss.textContent=`
	.nv{
		border-color:black;
	}
	@media (hover:hover) and (pointer:fine){.nv{cursor: pointer;}}
	.nv:active{
		filter:invert(var(--nvvpv, 1));
		border-color:var(--nvpv, white);
	}
	`;
	document.head.appendChild(vvss);
	const bs=document.createElement('canvas');
	const npks=(k)=>()=>
	{
		if(v.bs)return;
		bs.style.filter='invert(1)'
		psd.style.setProperty('--nvpv','white')
		psd.style.setProperty('--nvvpv',0)
		k().then(()=>
		{
			bs.style.filter=''
			psd.style.removeProperty('--nvpv')
			psd.style.removeProperty('--nvvpv')
		})
	}
	let ng=0,cpn=0;
	const pdn=(p)=>Math.min(ctn-p.dn,p.vk)
	let vc=0
	const snsvv=(p,d)=>
	{
		const sns=Boolean(p)==Boolean(d)
		if(ps[0].vk==null)
		{
			ps[0].vk=1
			ps[0].dn=0;
		}
		if(sns)
		{
			if(pdn(ps[0]))
			{
				ng+=pdn(ps[0])
				if(ng==ctn*ps.length)vc=0
				ps[0].dn+=pdn(ps[0])
				cpn=0
			}
			else if(ng<ps.length*ctn)cpn++
			if(ps[0].vk<ps.length)ps[0].vk*=pdvk;
			const tp=ps.shift()
			ps.splice(location.hash.endsWith('.')?ps.length:Math.min(tp.vk-1,ps.length),0,tp)
		}
		else
		{
			ng-=ps[0].dn
			ps[0].dn=0;
			ps[0].vk=1
			cpn=0
		}
		nlk((ng+cpn).toString())
		return sns?[49,1,66,43,2,75]:[2,49,3,66,43,1,75]
	}
	const pkpv=[71,16,44,66,8,77];
	const pnk=npks(()=>{vc=1;return v.b(ps[0].p)})
	const nnk=npks(()=>v.b([70,2]).then(()=>vc?v.b(snsvv(0,ps[0].s)).then(()=>v.b(vc?ps[0].p:pkpv)):Promise.resolve()))
	const mnk=npks(()=>v.b([5,75]).then(()=>vc?v.b(snsvv(1,ps[0].s)).then(()=>v.b(vc?ps[0].p:pkpv)):Promise.resolve()))
	document.addEventListener('keydown',(p)=>
	{
		if(p.code=='Space'||p.key=='?'||p.code=='Slash'||p.code=='Enter')pnk()
		else if(p.code=='KeyX'||p.code=='ArrowUp')nnk()
		else if(p.code=='KeyO'||p.code=='ArrowDown')mnk()
	})
	nsk(bs);
	bs.className=''
	bs.style.borderColor='transparent'
	psd.appendChild(bs);
	nsnl(bs,'"',0)
	const pn=document.createElement('canvas');
	nsk(pn);
	psd.appendChild(pn);
	nsnl(pn,'?')
	pn.onclick=pnk
	const nn=document.createElement('canvas');
	nsk(nn);
	psd.appendChild(nn);
	nsnl(nn,'x')
	nn.onclick=nnk
	const mn=document.createElement('canvas');
	nsk(mn);
	psd.appendChild(mn);
	nsnl(mn,'o')
	mn.onclick=mnk
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
