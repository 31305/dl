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
	vp=null
	dk()
	{
		return new Promise((p,d)=>
		{
			vm({dk:p,vppk:()=>{if(this.vp!=null)this.vp()}}).then(p=>this.p=p);
		});
	}
	b(v)
	{
		if(this.p!=undefined)this.p.ccall('jb',null,['array','number'],[new Uint8Array(v),v.length]);
	}
}
nrsg=
[
	[
		[🐒,[51,1,71,8,77]],
		[🦍,[53,13,44,14,68,39,77]],
		[🦧,[68,38,45,3,51,1,77]],
		[🐕,[47,46,5]],
		[🦮,[70,4,43,11]],
		[🐩,[53,13,56,57,11]],
		[🐈,[38,66,15,77]],
		[🐅,[46,43,4,54,44,2,77]],
		[🐆,[68,46,10,71,11]],
		[🫏,[53,1,44,68,1,74,2,77]],
		[🐎,[2,47,46,3,77]],
		[🦓,[44,4,58,7,45,2,77]],
		[🦌,[50,1,44,7,65,2,77]],
	]
];
ss('vm.js').then(p=>{
	const v=new vp();
	vp.dk().then(p=>{

	});
});
