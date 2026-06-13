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
const nrsg=
[
	[
		['🐒',[51,1,71,8,77]],
		['🦍',[53,13,44,14,68,39,77]],
		['🦧',[68,38,45,3,51,1,77]],
		['🐕',[47,46,5]],
		['🦮',[70,4,43,11]],
		['🐩',[53,13,56,57,11]],
		['🐈',[38,66,15,77]],
		['🐅',[46,43,4,54,44,2,77]],
		['🐆',[68,46,10,71,11]],
		['🫏',[53,1,44,68,1,74,2,77]],
		['🐎',[2,47,46,3,77]],
		['🦓',[44,4,58,7,45,2,77]],
		['🦌',[50,1,44,7,65,2,77]],
	]
];
window.tp=nrsg;
ss('vm.js').then(p=>{
	const v=new vp();
	v.dk().then(p=>{
		const s=document.createElement('div');
		document.body.appendChild(s);
		const pkk=()=>{};
		const sk=(k)=>{
			s.innerHTML='';
			for(let pk=0;pk<nrsg[k].length;pk++)
			{
				const p=nrsg[k][pk];
				const ps=document.createElement('span');
				ps.innerText=p[0];
				console.log(p);
				ps.onclick=()=>{v.b(p[1]).then(pkk(pk)).catch(()=>{});};
				ps.style.userSelect='none';
				s.appendChild(ps);
			}
		}
		sk(0);
	});
});
