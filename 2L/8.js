const ss=(n)=>
{
	return new Promise((p,d)=>
	{
		let v=document.createElement('script');
		v.src=n;
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
const vvss=document.createElement('style');
vvss.textContent=`
	@keyframes ck{
	0%{transform:scale(1);}
	50%{transform:scale(0.8);}
	100%{transform:scale(1);}
	}
`;
document.head.appendChild(vvss);
const cb=document.createElement('span')
cb.style.width='14dvh';
cb.style.height=cb.style.width;
cb.style.border='1.2dvh solid #6ab'
cb.style.borderRadius='50%'
cb.style.display='block'
cb.style.boxSizing='border-box'
cb.style.animation='ck 1s ease-in-out infinite'
cb.style.zIndex=999999
cb.className='cb'
document.oncontextmenu=(p)=>p.preventDefault()
document.body.style.display='grid'
document.body.style.placeItems='center'
document.body.style.height='100dvh'
document.body.appendChild(cb)
window.cb=cb;
const cbtk=()=>
{
	cb.style.backgroundColor='#134'
	const vvss=document.createElement('style');
	cb.onclick=()=>document.body.removeChild(cb);
	vvss.textContent=`
	@media (hover:hover) and (pointer:fine){.cb{cursor:pointer;}}
	.cb:active{transform:scale(1.2);}
	`;
	document.head.appendChild(vvss);
}
ss('vm.js').then(()=>(new vp()).dk()).then(p=>
{
	cb.style.animationIterationCount=1
	cb.addEventListener("animationend",()=>{cbtk(p)},{once:true});
	window.v=p
})
