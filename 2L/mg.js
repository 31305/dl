import pt from './pt.js'
const p={};
const dss=class
{
	async v()
	{
		const vg=(p,d)=>
		{
			let t=[];
			if(p[0].length)t=p;
			else t.push(p);
			if(d[0].length)t.push(...d)
			else t.push(d);
			return t;
		}
		if(this.s[this.k].d)
		{
			if(!this.dk)this.p.vk(vg(this.s[this.k].s,this.ssg[this.s[this.k].d][0].s));
			else this.p.vk([46,1,44,65,43,2,66,6,76,51,8,75]);
		}
		else this.p.vk(this.s[this.k].s);
	}
	sk(s)
	{
		this.s=this.ssg[s];
		this.k=0;
		this.dk=0;
		this.p.mv=0;
		this.v();
	}
	npk()
	{
		if(!this.dk)this.s.k=0;
		else
		{
			this.dk=0;
			this.p.mv=0;
			this.k++;
			if(this.k==this.s.length)this.k=0;
			this.v();
		}
	}
	mpk()
	{
		console.log(this.k);
		window.ds=this
		if(!this.s[this.k].d)
		{
			this.k++;
			if(this.k==this.s.length)this.k=0;
			this.v();
		}
		else if(!this.dk)
		{
			this.dk=1;
			this.p.mv=1;
			this.v();
		}
		else this.sk(this.s[this.k].d);
	}
}
pt(p).then(()=>
{
	const ssg=
	{
		1:[
			{s:[53,19,50,2,49,43,3,68,46,4,44,1,68,31,47,2,77]},
			{s:[51,8,75,71,17,44,46,33],d:2},
		],
		2:[
			{s:[43,4,70,1,49,67,5,70,3,75]},
			{s:[51,8,76,71,1,47,56,5,66],d:1}
		]
	}
	const ds=new dss();
	ds.p=p;
	ds.ssg=ssg;
	p.mpk=()=>
	{
		ds.sk(1);
		p.mpk=()=>ds.mpk();
		p.npk=()=>ds.npk();
	}
})
