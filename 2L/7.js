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
	cp.v1=8*10;
	cp.v2=12;
	const mnl=(m)=>'calc('+m.toString()+' *var(--m))';
	cp.style.objectFit='contain'
	cp.style.display='inline-block'
	cp.style.width=mnl(cp.v1);
	cp.style.height=mnl(cp.v2);
	cp.width=cp.v1;
	cp.height=cp.v2;
	cp.style.imageRendering='pixelated';
	const pv=cp.getContext('2d');
	pv.fillStyle='white';
	pv.fillRect(0,0,cp.width,cp.height);
	const lv=nlv();
	const ln=new Array(lv.length);
	for(let k=0;k<lv.length;k++)
	{
		if(lv[k]==null)continue;
		ln[k]=pv.createImageData(8,8);
		for(let pk=0;pk<8;pk++)
			for(let ppk=0;ppk<8;ppk++)
			{
				const v=lv[k][pk]&(1<<(8-ppk))
				ln[k].data[8*4*pk+4*ppk]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+1]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+2]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+3]=255;
			}
	}
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
	const pn=document.createElement('div');
	const nsk=(n)=>
	{
		n.width=12;
		n.height=12;
		n.style.width=mnl(12);
		n.style.height=mnl(12);
		n.style.display='inline-block'
		n.style.borderWidth=mnl(1);
		n.style.borderStyle='solid'
		n.className='nv';
	}
	const vvss=document.createElement('style');
	vvss.textContent=`
	.nv{
		border-color:red;
	}
	.nv:active{
		border-color:#DDF;
	}
	`;
	document.head.appendChild(vvss);
	nsk(pn);
	psd.appendChild(pn);
	const mn=document.createElement('canvas');
	nsk(mn);
	psd.appendChild(mn);
	const nn=document.createElement('canvas');
	nsk(nn);
	psd.appendChild(nn);
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
