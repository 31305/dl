const jdv=function()
{
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
	return false;
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
const dnsnd=class
{
	constructor()
	{
		this.sg=new Map();
		this.dg=new Map();
	}
	bkv=50;
	ns(s){return [Math.floor(s[0]/this.bkv),Math.floor(s[1]/this.bkv),Math.floor(s[2]/this.bkv)];}
	kg(s)
	{
		return `${s[0]},${s[1]},${s[2]}`
	}
	s(s,pk)
	{
		const k=this.kg(this.ns(s));
		if(!this.sg.get(k))this.sg.set(k,[]);
		this.sg.get(k).push(pk);
	}
	ms=[]
	sk=null
	k(sn)
	{
		const n=this.ns(sn);
		if(this.ms.length&&n.every((p,k)=>p==this.ms[k]))return;
		this.ms=n;
		const v=2;
		const nsg=new Map();
		for(let k1=-v;k1<=v;k1++)
			for(let k2=-v;k2<=v;k2++)
				for(let k3=-v;k3<=v;k3++)
				{
					const p=[n[0]+k1,n[1]+k2,n[2]+k3];
					nsg.set(this.kg(p),p);
				}
		for(const k of (new Set(this.dg.keys())).difference(new Set(nsg.keys())))
		{
			if(Math.max(...this.dg.get(k).s.map((s,k)=>Math.abs(s-n[k])))>v*2)
			{
				for(const p of this.dg.get(k).b)p.dispose(false,false)
				this.dg.delete(k)
			}
		}
		for(const v of s.materials.slice()){if(v.getBindedMeshes().length===0){v.dispose();}}
		for(const k of (new Set(nsg.keys())).difference(new Set(this.dg.keys())))
		{
			const p=this.sg.get(k)
			this.dg.set(k,{b:[],s:nsg.get(k)})
			if(p)this.dg.get(k).b.push(...p.map(pk=>pk()))
			else if(this.sk)this.dg.get(k).b.push(this.sk(nsg.get(k)))
		}
	}
}
const dns=new dnsnd();
const v=new vp();
const cbtk=()=>
{
	if(lnc){s.enablePhysics(new BABYLON.Vector3(0,-9.8,0),new BABYLON.HavokPlugin(true,p[1]));}
	if(0)lnm();
	ssk();
	const vvss=document.createElement('style');
	vvss.textContent=`
	@media (hover:hover) and (pointer:fine){body{cursor: pointer;}}
	`;
	document.head.appendChild(vvss);
}
Promise.all([v.dk()]+(lnc?[HavokPhysics()]:[])).then((p)=>
{
	cb.style.animationIterationCount=1
	cb.addEventListener("animationend",()=>{cbtk()},{once:true});
});
const d=document.createElement('canvas')
document.body.style.margin='0';
document.body.style.touchAction='none';
d.style="outline:none;position:absolute;display:block;width:min(100dvw, 234dvh);height:100dvh";
document.body.appendChild(d);
const c=new BABYLON.Engine(d,true);
const s=new BABYLON.Scene(c);
const pv=(p,d,t)=>{return new BABYLON.Vector3(p,d,t);}
s.clearColor=new BABYLON.Color3(0,0,0);
const ls=1.75/2;
const l=new BABYLON.FreeCamera("l",new BABYLON.Vector3(0,ls*2,0),s);
const lpc=new BABYLON.Mesh('lpc');
lpc.position.copyFrom(l.position);
(()=>
{
	const vk=.2;
	const pg=.28
	lpc.ellipsoid=new BABYLON.Vector3(pg,ls+vk/2,pg);
	l.minZ=0.1;
	lpc.ellipsoidOffset=pv(0,vk/2-ls,0);
})();
l.attachControl(d,true);
const p=1?new BABYLON.PointLight("p",new BABYLON.Vector3(0,0,0),s):new BABYLON.SpotLight("p",new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,0,1),Math.PI/4,2);
p.intensity=10;
p.parent=l;
const ntvs=0.001;
const bdnv=new BABYLON.Color3(1,1,1);
const gmnk=function(s1,s2,dk=null,sv=bdnv,vr=true)
{
	let t=s1.subtract(s2);
	let g=BABYLON.MeshBuilder.CreateBox("gkc",{width:Math.abs(t.x),height:Math.abs(t.y),depth:Math.abs(t.z)});
	if(dk)g.parent=dk;
	g.position=s1.add(s2).scale(0.5);
	g.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
	g.material.baseColor=sv;
	g.material.metallic=0;
	g.material.roughness=1;
	g.checkCollisions=vr;
	return g;
}
const sgbnm=function(s1,s2,g,d=0)
{
	let p=[]
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s1.y-g,s1.z-g),new BABYLON.Vector3(s2.x+g,s1.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s2.y,s1.z-g),new BABYLON.Vector3(s2.x+g,s2.y+g,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s1.y,s1.z-g),new BABYLON.Vector3(s1.x,s2.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s2.x,s1.y,s1.z-g),new BABYLON.Vector3(s2.x+g,s2.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x,s1.y,s1.z-g),new BABYLON.Vector3(s2.x,s2.y,s1.z)));
	p.push(gmnk(new BABYLON.Vector3(s1.x+d,s1.y,s2.z),new BABYLON.Vector3(s2.x-d,s2.y,s2.z+g)));
	return p;
}
const lsnm=function(d)
{
	const v1=d.l[0].length,v2=d.l.length;
	const tp=BABYLON.MeshBuilder.CreatePlane("lm",{width:d.v,height:d.v*v2/v1});
	tp.material=new BABYLON.PBRCustomMaterial("v");
	const pdc=new BABYLON.DynamicTexture("l",{width:v1,height:v2});
	tp.material.albedoTexture=pdc;
	tp.material.metallic=0;
	tp.material.roughness=1;
	tp.material.Fragment_Custom_Albedo(`
		vec2 vs=vAlbedoUV;
		vec2 v=vec2(${v1}.0,${v2}.0);
		vs*=v;
		vec2 nkc= floor(vs+0.5);
		vs=nkc+clamp((vs-nkc)/fwidth(vs),-0.5,0.5); 
		surfaceAlbedo=texture2D(albedoSampler,(vs/v)+uvOffset).rgb;
		#ifdef GAMMAALBEDO
		surfaceAlbedo=toLinearSpace(surfaceAlbedo);
		#endif
	`);
	const pv=pdc.getContext();
	pv.fillStyle=d.pv||'white';
	pv.fillRect(0,0,v1,v2);
	pv.fillStyle=d.dv||'black';
	for(let k=0;k<v2;k++)
		for(let pk=0;pk<v1;pk++)
			if(d.l[k][pk])pv.fillRect(pk,k,1,1)
	pdc.update()
	return tp;
}
const ndnm=function(ss,vsm)
{
	const tp=new BABYLON.TransformNode("p")
	tp.position=ss;
	const dnd=BABYLON.MeshBuilder.CreatePlane("gp",{width:vsm,height:vsm});
	dnd.parent=tp;
	dnd.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	dnd.material.baseColor=new BABYLON.Color3(1,1,1);
	dnd.material.metallic=0;
	dnd.material.roughness=1;
	dnd.rotation.set(0,Math.PI,0)
	const nd=BABYLON.MeshBuilder.CreatePlane("nd",{width:vsm,height:vsm},s);
	nd.parent=tp;
	nd.material=new BABYLON.PBRCustomMaterial("v",s);
	const vs=128;
	const pdc=new BABYLON.DynamicTexture("l",vs,s);
	nd.material.albedoTexture=pdc;
	nd.material.metallic=0;
	nd.material.roughness=1;
	if(1)nd.material.Fragment_Custom_Albedo(`
		vec2 vs=vAlbedoUV;
		float v=128.0;
		vs*=v;
		vec2 nkc= floor(vs+0.5);
		vs=nkc+clamp((vs-nkc)/fwidth(vs),-0.5,0.5); 
		surfaceAlbedo=toLinearSpace(texture2D(albedoSampler,(vs/v)+uvOffset).rgb);
	`);
	const pv=pdc.getContext();
	pv.fillStyle='black';
	pv.fillRect(0,0,vs,vs);
	pv.fillStyle='#F54927';
	const vk=2;
	pv.fillRect(0,0,vs,vk);
	pv.fillRect(0,vs-vk,vs,vk);
	pv.fillRect(0,0,vk,vs);
	pv.fillRect(vs-vk,0,vk,vs);
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
				ln[k].data[8*4*pk+4*ppk]=v?255:0;
				ln[k].data[8*4*pk+4*ppk+1]=v?255:0;
				ln[k].data[8*4*pk+4*ppk+2]=v?255:0;
				ln[k].data[8*4*pk+4*ppk+3]=255;
			}
	}
	const lk=(l,s1,s2)=>
	{
		for(let k=0;k<l.length;k++)
			pv.putImageData(ln[l.charCodeAt(k)],k*8+s1,s2);
	}
	lk('      \\o/      ',4,4);
	lk('---------------',4,12);
	lk('1. UITS',4,20);
	lk('2. SKD',4,28);
	lk('3. DDD',4,36);
	pdc.update();
	tp.n=[70,7,44,68,31,47,2,77];
	dnd.isPickable=false
	nd.isPickable=false
	return tp;
};
const spd=function(s)
{
	const p=new BABYLON.TransformNode("pd");
	const vs=3,sv=0.1,tc1=.5,tc2=2;
	const pgv=new BABYLON.Color3(0,0,0);
	const tp=gmnk(pv(-vs/2+sv,0,-vs/2+sv),pv(vs/2-sv,tc1,vs/2-sv),p,new BABYLON.Color3(1,1,1),false);
	for(let k=0;k<4;k++)
	{
		const s1=-vs/2;
		const s3=-vs/2;
		const tp=gmnk(pv(s1,0,s3),pv(s1+sv,tc1+tc2-sv,s3+sv),p,new BABYLON.Color3(0,0,0),false);
		tp.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,1,0),Math.PI/2*k);
		const dtp=gmnk(pv(s1+sv,0,s3),pv(vs/2-sv,tc1,s3+sv),p,new BABYLON.Color3(0,0,0),false);
		dtp.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,1,0),Math.PI/2*k);
	}
	const ttp=gmnk(pv(-vs/2,tc1+tc2-sv,-vs/2),pv(vs/2,tc1+tc2,vs/2),p,new BABYLON.Color3(0,0,0),false);
	const pksc=0.02;
	const pkvs=(vs-2*sv)/(tc2-sv+pksc);
	const pks=BABYLON.MeshBuilder.CreateCylinder("pk",{height:pksc,diameter:pkvs*pksc});
	pks.position.set(0,tc1+tc2-sv+pksc/2-ntvs,0);
	pks.parent=p;
	pks.material=new BABYLON.PBRMaterial("pd");
	pks.material.emissiveColor=new BABYLON.Color3(1,1,1);
	pks.n=[68,10,71,2,77];
	const pk=new BABYLON.SpotLight("pk",new BABYLON.Vector3(0,tc1+tc2-sv+pksc,0),new BABYLON.Vector3(0,-1,0),2*Math.atan(pkvs/2),2);
	pk.parent=p;
	pk.intensity=10;
	pk.includedOnlyMeshes=p.getChildren();
	const ctp=gmnk(pv(-vs/2,0,-vs/2),pv(vs/2,tc1+tc2,vs/2),p);
	ctp.isVisible=false;
	p.position=s;
	p.n=[71,44,1,68,2,44,47,3,70,10];
	return p;
}
const bcd=function(s)
{
	const p=new BABYLON.TransformNode("bcd");
	const bcds=sgbnm(pv(0,0,0),pv(4,2,3),0.2,1.2);
	bcds.forEach((s)=>s.parent=p);
	bcds[0].dispose();
	bcds[1].n=[57,1,68,8,77];
	for(let k=2;k<6;k++)
		bcds[k].n=[74,8,66,66,9,77];
	p.position=s;
	return p;
}
const kmvv=new BABYLON.Color3(.6,.4,.2);
const pvsnm=(vr=0)=>
{
	const p=new BABYLON.TransformNode("pd");
	const vs=0.5,sv=.05,tc1=.5,tc2=.5,tc3=.15,v=kmvv;
	for(let k=0;k<4;k++)
	{
		const s1=-vs/2;
		const s3=-vs/2;
		const tp=gmnk(pv(s1,0,s3),pv(s1+sv,tc1+sv+(k==0||k==3?tc2:tc3),s3+sv),p,v,false);
		tp.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,1,0),Math.PI/2*k);
	}
	for(let k=0;k<2;k++)
	{
		gmnk(pv(k*(vs-sv)-vs/2,tc1+sv+tc3,-vs/2+sv),pv(k*(vs-sv)-vs/2+sv,tc1+sv+tc3+sv,vs/2),p,v,false);
		gmnk(pv((2*k-1)*((vs-4*sv)/6+sv),tc1+sv,-vs/2),pv((2*k-1)*(vs-4*sv)/6,tc1+tc2,-vs/2+sv),p,v,false);
	}
	gmnk(pv(-vs/2+sv,tc1+tc2,-vs/2),pv(vs/2-sv,tc1+tc2+sv,-vs/2+sv),p,v,false);
	gmnk(pv(-vs/2,tc1,-vs/2),pv(vs/2,tc1+sv,vs/2),p,v,false);
	if(vr)gmnk(pv(-vs/2,0,-vs/2),pv(vs/2,tc1+tc2+sv,vs/2),p).isVisible=false;
	const tp=BABYLON.Mesh.MergeMeshes(p.getChildMeshes(),true,true,undefined,true,true);
	p.dispose();
	tp.n=[5,49,3,70,1,75];
	return tp;
};
const tpnm=(vr=0)=>
{
	const p=new BABYLON.TransformNode("tp");
	const vs1=1.5,vs3=1,tc=.75,sv=.1,v=kmvv;
	for(let k=0;k<4;k++)
	{
		const s1=(2*Math.floor(k/2)-1)*(vs1-sv)/2;
		const s3=(2*(k%2)-1)*(vs3-sv)/2;
		const tp=gmnk(pv(s1-sv/2,0,s3-sv/2),pv(s1+sv/2,tc,s3+sv/2),p,v,false);
	}
	gmnk(pv(-vs1/2-sv,tc,-vs3/2-sv),pv(vs1/2+sv,tc+sv,vs3/2+sv),p,v,false);
	if(vr)gmnk(pv(-vs1/2-sv,0,-vs3/2-sv),pv(vs1/2+sv,tc+sv,vs3/2+sv),p).isVisible=false;
	const tp=BABYLON.Mesh.MergeMeshes(p.getChildMeshes(),true,true,undefined,true,true);
	p.dispose();
	tp.n=[14,66,71,12,62,1,75];
	return tp;
};
const ppcnm=()=>
{
	const c=.1,v1=.05,v2=.07,vk=0.003;
	const n1=new BABYLON.MeshBuilder.CreateCylinder("n",{height:c,diameterBottom:v1,diameterTop:v2});
	n1.position.set(0,c/2,0);
	const n2=new BABYLON.MeshBuilder.CreateCylinder("n",{height:c,diameterBottom:v1-vk,diameterTop:v2-vk});
	n2.position.set(0,c/2+vk,0);
	const n1p=BABYLON.CSG.FromMesh(n1);
	const n2p=BABYLON.CSG.FromMesh(n2);
	const pc=n1p.subtract(n2p).toMesh("c",null,s,true);
	if(1)
	{
		n1.dispose();
		n2.dispose();
	}
	pc.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	pc.material.baseColor=new BABYLON.Color3(.1,.1,.1);
	pc.material.metallic=.5;
	pc.material.roughness=.0;
	pc.n=[56,2,48,3,51,1,77];
	return pc;
};
const knsnm=()=>
{
	const p=new BABYLON.TransformNode("tp");
	const v1=.2,sv=v1/5;
	const bv=new BABYLON.Color3(.4,.25,.12).toLinearSpace();
	for(let k=0;k<4;k++)
	{
		const tp=gmnk(pv(-v1/2,-v1/2,0),pv(v1/2+sv,-v1/2-sv,-sv),p,bv,false);
		tp.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,0,1),Math.PI/2*k);
	}
	const gp=BABYLON.MeshBuilder.CreatePlane("gp",{width:v1,height:v1});
	gp.position.set(0,0,-sv/2);
	gp.parent=p;
	gp.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	gp.material.baseColor=new BABYLON.Color3(.6,.6,.5).toLinearSpace();
	gp.material.metallic=0;
	gp.material.roughness=1;
	const dgp=BABYLON.MeshBuilder.CreatePlane("gp",{width:v1,height:v1});
	dgp.parent=p;
	dgp.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	dgp.material.baseColor=bv;
	dgp.material.metallic=0;
	dgp.material.roughness=1;
	dgp.rotation.set(0,Math.PI,0)
	const vs=v1/30;
	const s1c=v1*.4;
	const s1=BABYLON.MeshBuilder.CreatePlane("s",{width:v1/100,height:s1c});
	s1.parent=p;
	s1.position.set(0,s1c/2-vs,-sv/2-ntvs);
	s1.setPivotPoint(new BABYLON.Vector3(0,vs-s1c/2,0));
	s1.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	s1.material.baseColor=new BABYLON.Color3(0,0,0);
	s1.material.metallic=0;
	s1.material.roughness=1;
	const s2c=v1*.35;
	const s2=BABYLON.MeshBuilder.CreatePlane("s",{width:v1/50,height:s2c});
	s2.parent=p;
	s2.position.set(0,s2c/2-vs,-sv/2-ntvs*2);
	s2.setPivotPoint(new BABYLON.Vector3(0,vs-s2c/2,0));
	s2.material=s1.material;
	const s3c=v1*.2;
	const s3=BABYLON.MeshBuilder.CreatePlane("s",{width:v1/25,height:s3c});
	s3.parent=p;
	s3.position.set(0,s3c/2-vs,-sv/2-ntvs*3);
	s3.setPivotPoint(new BABYLON.Vector3(0,vs-s3c/2,0));
	s3.material=s1.material;
	for(let k=0;k<12;k++)
	{
		const vs=v1/30;
		const t=BABYLON.MeshBuilder.CreateBox("t",{width:vs,height:vs,depth:ntvs});
		const kn=k*Math.PI*2/12;
		let s1=Math.cos(kn),s2=Math.sin(kn);
		const s=v1*.45;
		if(Math.abs(s1)>Math.abs(s2))
		{
			s2*=s/Math.abs(s1);
			s1=s1>0?s:-s;
		}
		else
		{
			s1*=s/Math.abs(s2);
			s2=s2>0?s:-s;
		}
		t.parent=p;
		t.position.set(s1,s2,-sv/2-ntvs);
		t.material=s3.material;
	}
	const knss=()=>
	{
		const k=new Date();
		const k3=k.getSeconds()/60;
		const k2=(k.getMinutes()+k3)/60;
		const k1=(k.getHours()%12+k2)/12;
		s3.rotation.set(0,0,-k1*Math.PI*2);
		s2.rotation.set(0,0,-k2*Math.PI*2);
		s1.rotation.set(0,0,-k3*Math.PI*2);
		setTimeout(knss,(1000-k.getMilliseconds()));
	};
	knss();
	p.n=[54,1,61,11];
	return p;
};
let rk=(p,v)=>
{
	p.material=new BABYLON.PBRMetallicRoughnessMaterial("v")
	p.material.baseColor=new BABYLON.Color3(v[0],v[1],v[2]);
	p.material.metallic=0;
	p.material.roughness=1;
}
const jnmp=class
{
	l=3
	v=0.02
	pn=.25
	jsg=new Map()
	constructor()
	{
		const v=this.v,pn=this.pn,l=this.l
		this.pg=new BABYLON.MeshBuilder.CreateBox('pg',{width:v,depth:v,height:1});
		this.pg.setEnabled(false)
		const dv=.4;
		rk(this.pg,[dv,dv,dv]);
		this.pgv=new BABYLON.PBRMetallicRoughnessMaterial("v")
		const vm=0;
		this.pgv.baseColor=new BABYLON.Color3(vm,vm,vm);
		this.pgv.metallic=0;
		this.pgv.roughness=1;
	}
	sn(d)
	{
		const pv=d.pv,m=d.m
		const pm=[Math.round(pv[0]/this.pn),Math.round(pv[1]/this.pn)].toSorted((p,d)=>d-p)
		const jk=`${pm[0]},${pm[1]}`
		let nd=this.jsg.get(jk)
		if(nd==undefined)
		{
			const sg=[]
			for(let k=0;k<=pm[0];k++)
			{
				const tp=this.pg.clone('t')
				tp.scaling.set(1,pm[1]*this.pn+this.v,1)
				tp.position.set(k*this.pn-pm[0]*this.pn*.5,0,0)
				sg.push(tp)
			}
			for(let k=0;k<=pm[1];k++)
			{
				const dtp=this.pg.clone('t')
				dtp.scaling.set(1,pm[0]*this.pn+this.v,1)
				dtp.position.set(0,k*this.pn-pm[1]*this.pn*.5,0)
				dtp.rotation.set(0,0,Math.PI/2)
				sg.push(dtp)
			}
			nd=BABYLON.Mesh.MergeMeshes(sg,true)
			nd.setEnabled(false)
			this.jsg.set(jk,nd)
		}
		const tp=new BABYLON.TransformNode('jp')
		const p=nd.createInstance('p')
		p.isPickable=false
		p.parent=tp
		const nt=0.002
		const vd=BABYLON.MeshBuilder.CreateBox('pm',
			{width:pm[0]*this.pn+this.v-nt,height:pm[1]*this.pn+this.v-nt,depth:this.v-nt})
		vd.isVisible=d.pg;
		if(d.pg)vd.material=this.pgv;
		vd.checkCollisions=true;
		vd.isPickable=false;
		vd.parent=tp
		tp.n=[58,4,45,2,75]
		if(m)tp.parent=m
		if(d.s)tp.position.set(d.s[0],d.s[1],d.s[2])
		return tp
	}
	n(s,d,m=null,pg)
	{
		const p=this.sn({pv:[this.l,this.l],m:m,pg:pg||d==2})
		if(d==1)p.rotation.set(0,Math.PI/2,0)
		else if(d==2)p.rotation.set(Math.PI/2,0,0)
		p.position.set(s[0]*this.l*.5,s[1]*this.l*.5,s[2]*this.l*.5)
		return p
	}
	b(s,d,m=null)
	{
		this.n(s,2,m,true)
		if(d.search('1')!=-1)this.n([s[0],s[1]+1,s[2]+1],3,m)
		if(d.search('2')!=-1)this.n([s[0]+1,s[1]+1,s[2]],1,m)
		if(d.search('3')!=-1)this.n([s[0],s[1]+1,s[2]-1],3,m)
		if(d.search('4')!=-1)this.n([s[0]-1,s[1]+1,s[2]],1,m)
	}
	spn(s,d,m=null)
	{
		const tp=new BABYLON.TransformNode('sp')
		let k=1;
		const vrnm=(p)=>
		{
			const vk=p.position.y-(s[1]-2)*this.l*.5
			if(vk<l.ellipsoid.y*2)
			{
				const vr=BABYLON.MeshBuilder.CreateBox('vr',{width:this.pn*2,depth:this.pn*2,height:vk})
				vr.position=p.position.add(pv(0,-vk/2,0))
				vr.checkCollisions=true
				vr.isVisible=false;
				vr.isPickable=false;
				if(m)vr.parent=m;
			}
		}
		for(;k<=this.l*.5/this.pn;k++)
		{
			const p=this.sn({pv:[this.pn*2,this.pn*2],m:m,pg:1})
			p.position.set((s[0]-1)*this.l*.5+this.pn,s[1]*this.l*.5-this.pn*k,(s[2]+1)*this.l*.5-this.pn*(k*2-1))
			p.rotation.set(Math.PI/2,0,0)
			vrnm(p)
		}
		for(;k<this.l/this.pn;k++)
		{
			const p=this.sn({pv:[this.pn*2,this.pn*2],m:m,pg:1})
			p.position.set((s[0]-3)*this.l*.5+(1+k*2)*this.pn,s[1]*this.l*.5-this.pn*k,(s[2]-1)*this.l*.5+this.pn)
			p.rotation.set(Math.PI/2,0,0)
			vrnm(p)
		}
	}
}
const vngnp=class
{
	constructor()
	{
		this.g=BABYLON.MeshBuilder.CreateBox('vng',{});
		this.g.setEnabled(false)
		this.g.material=new BABYLON.PBRMetallicRoughnessMaterial("v")
		this.g.material.baseColor=new BABYLON.Color3(0,0,0);
		this.g.material.metallic=0;
		this.g.material.roughness=1;
	}
	n(d)
	{
		const p=this.g.createInstance('g')
		const tp=new BABYLON.TransformNode('gp')
		p.scaling.set(d.v[0],d.v[1],d.v[2]);
		p.position.y=d.v[1]/2
		p.parent=tp;
		if(d.m)tp.parent=d.m;
		if(d.n)tp.n=d.n;
		if(d.s)tp.position.set(d.s[0],d.s[1],d.s[2])
		return tp;
	}
}
const vngn=new vngnp();
const jnm=new jnmp()
const dvsgp=class
{
	n(d,v=1)
	{	
		if(!this[d.name])
		{
			this[d.name]=d()
			this[d.name].setEnabled(false)
		}
		const tp=new BABYLON.TransformNode('tp')
		const p=this[d.name].createInstance('p')
		p.parent=tp;
		if(v)
		{
			const vs=p.getBoundingInfo().boundingBox.extendSize.scale(2)
			const v=BABYLON.MeshBuilder.CreateBox('v',{width:vs.x,height:vs.y,depth:vs.z})
			v.position.copyFrom(p.getBoundingInfo().boundingBox.center.add(p.position))
			v.checkCollisions=true;
			v.isVisible=false;
			v.parent=tp;
		}
		else p.checkCollisions=1
		return tp;
	}
}
const pss=(d)=>
{
	if(d.m)d.p.parent=d.m
	if(d.s)d.p.position.set(d.s[0],d.s[1],d.s[2])
	if(d.b)d.p.rotation.set(Math.PI*d.b[0],Math.PI*d.b[1],Math.PI*d.b[2])
	if(d.t)d.p.scaling.set(t[0],t[1],t[2])
	return d.p
}
const gbnm=()=>
{
	const v=2,bv=.1,c=jnm.l-jnm.v,dc=2.1,dv=1.2;
	const p0=BABYLON.MeshBuilder.CreateCylinder('p',{height:c,diameter:v});
	p0.position.y=c/2
	const p1=BABYLON.MeshBuilder.CreateCylinder('p',{height:c-bv*2,diameter:v-bv*2});
	p1.position.y=c/2
	const p2=BABYLON.MeshBuilder.CreateBox('mg',{width:dv,height:dc,depth:1});
	p2.position.y=dc/2+bv
	p2.position.z=v/2
	const t=BABYLON.MeshBuilder.CreateDisc('t',{radius:v/2-bv})
	t.position.y=bv+.002
	t.rotation.x=Math.PI/2
	const p3=BABYLON.MeshBuilder.CreateCylinder('p',{height:bv,diameter:v+bv*2});
	p3.position.y=c-bv/2+0.001
	rk(p0,[.1,.1,.2])
	rk(p1,[.01,.01,.05])
	rk(p2,[.01,.01,.05])
	rk(p3,[.01,.01,.05])
	rk(t,[.1,.1,.2])
	const nv=new BABYLON.MultiMaterial('nv',s)
	nv.subMaterials.push(p0.material)
	nv.subMaterials.push(p1.material)
	nv.subMaterials.push(p2.material)
	const gb=BABYLON.CSG.FromMesh(p0).subtract(BABYLON.CSG.FromMesh(p1).union(BABYLON.CSG.FromMesh(p2))).toMesh("b",nv,s,true);
	p0.dispose()
	p1.dispose()
	p2.dispose()
	const dt=t.clone()
	dt.position.y=c-bv-.001
	dt.rotation.x=-Math.PI/2
	const dp3=p3.clone()
	dp3.position.y=bv/2+0.001
	return BABYLON.Mesh.MergeMeshes([gb,t,dt,p3,dp3],true,true,undefined,true,true)
}
const ssmnm=()=>
{
	const dd=.2
	const v=.3;
	const c=1.5;
	const dsm=BABYLON.MeshBuilder.CreateBox('g',{height:v,width:v,depth:v})
	dsm.position.set(0,c+v/2,-(dd-v)/2);
	const gl=.2;
	const g=BABYLON.MeshBuilder.CreateBox('g',{height:c-gl,width:.45,depth:dd})
	g.position.set(0,(c-gl)/2,0);
	const gd=.15
	const gm=BABYLON.MeshBuilder.CreateBox('g',{height:gl,width:.15,depth:gd})
	gm.position.set(0,c-gl/2,-(dd-gd)/2)
	rk(g,[0,0,0])
	dsm.material=g.material;
	gm.material=g.material;
	const kv=.06
	const kn=.06
	const pk=BABYLON.MeshBuilder.CreatePlane('g',{height:kv,width:kv,depth:kv})
	pk.position.set(-kn,c+.2,dsm.position.z+v/2+.001)
	pk.rotation.y=Math.PI
	rk(pk,[1,1,1])
	const dk=pk.clone()
	dk.position.x+=kn*2;
	return BABYLON.Mesh.MergeMeshes([dsm,g,gm,pk,dk],true,true,undefined,true,true)
}
let psl=null;
const svvn=class
{
	pv(m)
	{
		return new Promise((pk,nk)=>
		{
			const cpk=60;
			const pv=new BABYLON.Animation(
				"pv",
				"rotation.y",
				cpk,
				BABYLON.Animation.ANIMATIONTYPE_FLOAT,
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			);
			pv.setKeys([
				{frame:0,value:this.p.rotation.y},
				{frame:Math.abs(m)*cpk/2,value:this.p.rotation.y+m*Math.PI}
			]);
			this.p.animations=[pv];
			s.beginAnimation(this.p,0,Math.abs(m)*cpk/2,false,1,pk)
		})
	}
	gk(m)
	{	
		return new Promise((pk,dk)=>
		{
			const cpk=60;
			const ds=this.p.position.clone();
			const gs=ds.add(this.p.forward.scale(m));
			const pg=new BABYLON.Animation(
				"pg",
				"position",
				cpk,
				BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			);
			pg.setKeys([
				{frame:0,value:ds},
				{frame:m*cpk/2,value:gs}
			]);
			this.p.animations=[pg];
			const g=s.beginAnimation(this.p,0,m*cpk/2,false,1,()=>{this.pk.actionManager.dispose();pk();});
			const vrk=()=>{g.pause();if(!v.bs)v.b([2,71,3,49,1,44,1])}
			if(this.pk.intersectsMesh(lpc)&&lpc.position.subtract(this.pk.getAbsolutePosition()).dot(this.p.forward)>0)vrk();
			this.pk.actionManager=new BABYLON.ActionManager();
			this.pk.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:lpc},vrk));
			this.pk.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionExitTrigger,parameter:lpc},()=>g.restart()));
		});
	}
	sg(s)
	{
		const pvm=BABYLON.Vector3.GetAngleBetweenVectors(s.subtract(this.p.position),this.p.forward,pv(0,1,0))
		return this.pv(pvm/Math.PI).then(()=>this.gk(s.subtract(this.p.position).length()))
	}
	nk()
	{
		const pk=this.pk;
		pk.actionManager=new BABYLON.ActionManager();
		pk.actionManager.registerAction(
		new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:lpc},
			()=>
			{
				const vp=[51,8,76,49,3,76,56,4,44,2,75,9,56,57,1,49,7];
				const s={k:null}
				const ppk=()=>{if(s.k)clearTimeout(s.k);v.b(vp).then(()=>{s.k=setTimeout(()=>{s.k=null},3000);})}
				if(!v.bs)ppk();
				psl=(t)=>
				{
					if(v.bs)return;
					if(t==-1)ppk();
					else if(s.k)
					{
						if(t==0)v.b([70,2])
						else if(t==1)v.b([5,75]).then(()=>
						{
							psl=null;
							pk.actionManager.dispose();
							const ms=this.p.position.clone();
							this.sg(this.p.position.add(pv(0,0,-1.5))).then(()=>this.sg(ms)).then(()=>this.nk())
						})
					}
				}
			}
		));
		pk.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionExitTrigger,parameter:lpc},()=>{psl=null;}));
	}
	constructor(d)
	{
		const p=new BABYLON.TransformNode('sk')
		const mm=d.dvs.n(ssmnm);
		mm.parent=p;
		mm.getChildMeshes()[1].scaling.set(1.2,1,2.2)
		const pkc=2;
		const pk=BABYLON.MeshBuilder.CreateBox('v',{width:2,height:pkc,depth:2})
		pk.position.y=pkc/2;
		pk.parent=p;
		pk.isVisible=false;
		this.pk=pk;
		if(d.vv==1)this.nk();
		else if(d.vv==2)
		{
			pk.actionManager=new BABYLON.ActionManager();
			pk.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionEnterTrigger,parameter:lpc},
				()=>
				{
					if(!s.isActiveMesh(this.pk)return;
					if(!v.bs)v.b(d.vp);
					psl=(t)=>
					{
						if(!v.bs&&t==-1)v.b(d.vp);
					}
				}
			));
			pk.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnIntersectionExitTrigger,parameter:lpc},()=>{psl=null;}));
		}
		this.p=p;
	}
}
const cvnm=()=>
{
	const p=new BABYLON.PBRCustomMaterial("cv");
	p.roughness=1;
	p.metallic=0;
	p.Fragment_Definitions(`
		float cv(vec3 p)
		{
			p=fract(p*0.1031);
			p+=dot(p,p.yzx+33.33);
			return fract((p.x+p.y)*p.z);
		}
	`);
	p.Fragment_Custom_Albedo(`
		float tp=10.0*cv(floor(vPositionW*16.0));
		tp=tp*.5+cv(floor(vPositionW*32.0))*.5;
		tp=tp*.5+cv(floor(vPositionW*64.0))*.5;
		tp=tp*.5+cv(floor(vPositionW*128.0))*.5;
		tp=tp*.5+cv(floor(vPositionW*256.0))*.5;
		tp=tp*.5+cv(floor(vPositionW*512.0))*.5;
		surfaceAlbedo=vec3(.1,.1,.05)+vec3(.8,.8,.6)*tp;
		#ifdef GAMMAALBEDO
		surfaceAlbedo=toLinearSpace(surfaceAlbedo);
		#endif
	`);
	return p;
}
const cnmk=()=>
{
	s.meshes.forEach(p=>
	{
		p.receiveShadows=true
		if(p.isEnabled()&&p.isVisible)
			cnm.getShadowMap().renderList.push(p)
	})
}
if(1)
{
	lpc.position.copyFrom(l.position);
	if(0)
	{
		p.parent=null
		p.position.y=3
		p.intensity=50
		const cnm=new BABYLON.ShadowGenerator(1024,p);
		window.cnm=cnm;
	}
	l.rotation.set(Math.PI/2,0,0)
	const dvs=new dvsgp();
	const cvr=cvnm();
	if(0)dns.sk=(s)=>
	{
		const p=new BABYLON.TransformNode('sk')
		if(s[1]!=0)return p;
		p.position.x=(s[0]+.5)*dns.bkv;
		p.position.z=(s[2]+.5)*dns.bkv;
		const b=BABYLON.MeshBuilder.CreatePlane('b',{width:dns.bkv,height:dns.bkv});
		b.rotation.x=Math.PI/2;
		b.checkCollisions=true;
		b.material=cvr;
		b.parent=p;
		return p;
	}
	if(0)dns.s([0,0,0],()=>dns.sk([0,0,0]))
	dns.s([0,0,0],()=>
	{
		const p=new BABYLON.TransformNode('jp')
		p.position.y=jnm.l
		p.position.x=-jnm.l/2
		const tc=pss({p:BABYLON.MeshBuilder.CreatePlane('b',{width:jnm.l*2-jnm.v,height:jnm.l-jnm.v}),
			m:p,b:[.5,0,0],s:[jnm.l/2,-jnm.l+jnm.v/2+.001,0]});
		tc.material=cvr;
		tc.clone().position.y+=jnm.l;
		jnm.sn({m:p,s:[jnm.pn*4,-jnm.l/2,-jnm.l/2],pv:[jnm.l,jnm.pn*4]}).rotation.z=Math.PI/2
		jnm.sn({m:p,s:[-jnm.pn*4,-jnm.l/2,-jnm.l/2],pv:[jnm.l,jnm.pn*4]}).rotation.z=Math.PI/2
		jnm.sn({m:p,s:[0,-jnm.pn*3/2,-jnm.l/2],pv:[jnm.pn*3,jnm.pn*4]})
		jnm.b([0,0,0],'14',p)
		jnm.b([2,0,0],'123',p)
		jnm.b([0,-2,-2],'34',p)
		jnm.n([-1,1,-2],1,p)
		jnm.b([0,-2,0],'14',p)
		jnm.b([2,-2,0],'123',p)
		jnm.b([2,-2,-2],'23',p)
		jnm.sn({m:p,s:[-3*jnm.pn,jnm.l/2,-1.5*jnm.l],pv:[jnm.l,jnm.pn*6]}).rotation.z=Math.PI/2
		jnm.spn([0,0,-2],0,p)
		jnm.n([0,1,-2],1,p)
		jnm.sn({m:p,s:[.75,jnm.l/2,-jnm.l/2],pv:[jnm.l,1.5]}).rotation.set(0,0,Math.PI/2)
		jnm.sn({m:p,s:[.75,0,-jnm.l],pv:[jnm.l,jnm.l/2]}).rotation.set(Math.PI/2,Math.PI/2,0)
		if(1)
		{
			const nd=ndnm(pv(0,ls*2,jnm.l*.5-jnm.v*.5-ntvs),1)
			nd.parent=p
		}
		const gb=pss({p:dvs.n(gbnm,0),m:p,s:[jnm.l+.35,-jnm.l+jnm.v*.5,-jnm.l-.35],b:[0,-.25,0]})
		pss({p:knsnm(),m:gb,s:[0,2.4,.9]})
		pss({p:(new svvn({dvs:dvs,vv:1})).p,m:p,s:[0,-jnm.l+jnm.v/2,-jnm.l/2]})
		pss({p:(new svvn({dvs:dvs,vv:2,vp:[74,1,51,48,43,3,76,60,2,47,31,48,2,75]})).p,m:p,s:[1.5,jnm.v/2,1.15],b:[0,1,0]})
		pss({p:(new svvn({dvs:dvs,vv:2,vp:[54,1,66,11,76,71,3,47,43,4,75,7]})).p,m:gb,s:[0,.1,-.3]})
		const tpss=pss({p:dvs.n(tpnm),m:p,s:[3.2,jnm.v/2,0.55],b:[0,.51,0]})
		pss({p:dvs.n(pvsnm),m:p,s:[4.1,jnm.v/2,0.1],b:[0,-0.52,0]})
		pss({p:dvs.n(pvsnm),m:p,s:[4.1,jnm.v/2,0.9],b:[0,-0.48,0]})
		pss({p:dvs.n(pvsnm),m:p,s:[2.3,jnm.v/2,0.1],b:[0,0.52,0]})
		pss({p:dvs.n(pvsnm),m:p,s:[2.2,jnm.v/2,0.9],b:[0,0.48,0]})
		pss({p:dvs.n(ppcnm),m:tpss,s:[.3,.85,-.2]})
		return p;
		jnm.b([2,-2+1/6,0],'24',p)
		jnm.b([2,-2+2/6,2],'14',p)
		jnm.b([4,-2+3/6,2],'13',p)
		jnm.b([6,-2+4/6,2],'12',p)
		jnm.b([6,-2+5/6,0],'23',p)
		jnm.b([4,-1,0],'14',p)
		jnm.b([4,-1+1/6,-2],'34',p)
		jnm.b([6,-1+2/6,-2],'12',p)
		jnm.b([6,-1+3/6,-4],'23',p)
		jnm.b([4,-1+4/6,-4],'13',p)
		jnm.b([2,-1+5/6,-4],'34',p)
		jnm.b([2,0,-2],'24',p)
		jnm.b([2,1/6,0],'124',p)
	})
//   234
//  m165
//  s078
//   kd9
}
else
{
	s.clearColor=new BABYLON.Color3(.6,.5,.5);
	p.dispose()
	rk=(p,v)=>
	{
		p.material=new BABYLON.StandardMaterial("v")
		p.material.emissiveColor=new BABYLON.Color3(v[0],v[1],v[2]);
	}
	const bknmp=class
	{
		bg=1
		v=5
		constructor()
		{
			this.b=BABYLON.MeshBuilder.CreateBox('b',{width:this.v,height:this.bg,depth:this.v});
			this.b.setEnabled(false)
			rk(this.b,[.6,.6,.4]);
			const psc=4;
			const psv=.1;
			this.ps=BABYLON.MeshBuilder.CreateBox('ps',{width:this.v+psv,height:psc,depth:psv});
			this.ps.setEnabled(false)
			rk(this.ps,[.2,.2,.1])
		}
		nm(d)
		{
			const tp=new BABYLON.TransformNode('jp')
			const b=this.b.createInstance('bp')
			b.position.y=-this.bg/2
			b.parent=tp;
			b.checkCollisions=true;
			for(let k=0;k<4;k++)
				if(d.ps[k]=='1')
				{
					const ps=this.ps.createInstance('ps')
					ps.checkCollisions=true;
					ps.position.set(0,0,this.v/2)
					ps.rotateAround(pv(0,0,0),pv(0,1,0),k*Math.PI/2)
					ps.parent=tp
				}
			return tp
		}
	}
	const bknm=new bknmp();
	const dvs=new dvsgp();
	const cgsnm=()=>
	{
		const v=.3
		const c=3
		const p=BABYLON.MeshBuilder.CreateBox('mg',{width:v,height:c,depth:v})
		p.position.y=c/2
		rk(p,[.7,.4,0])
		return p;
	}
	dns.s([0,0,0],()=>
	{
		const p=new BABYLON.TransformNode('jp')
		pss({p:bknm.nm({ps:'1111'}),m:p})
		pss({p:dvs.n(cgsnm),m:p,s:[1,0,2]})
		pss({p:dvs.n(gbnm,0),m:p,s:[1,0,-1.5]})
		return p;
	})
}
const dnsk=()=>{const s=[];l.position.toArray(s);dns.k(s)}
dnsk()
const s2=ls*4,bvs=.5;
const lnm=()=>
{
	const tpbnm=false;
	const s1=5,s3=5,ds=s3/2;
	const vs=1000;
	const mg=BABYLON.MeshBuilder.CreateBox('mg',{width:vs,height:vs,depth:vs});
	if(0)
	{
		const prb=BABYLON.MeshBuilder.CreatePlane('prb',{width:vs,height:vs});
		prb.rotation.set(Math.PI/2,0,0);
		prb.position.set(0,ntvs,0);
		prb.n=[74,17,75,9,77];
		prb.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
		prb.material.baseColor=new BABYLON.Color3(.6,.5,.5);
		prb.material.metallic=0;
		prb.material.roughness=1;
	}
	const tksg=[];
	let tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:s1,height:s2,depth:s3});
	tkb.position.set(0,s2/2,s3/2-ds);
	tksg.push(tkb);
	const ndp=ndnm(pv(0,ls*2,s3-ds-ntvs),1);
	const gmc=2.5;
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:gmc,depth:1});
	tkb.position.set(-s1/2,gmc/2,0);
	tksg.push(tkb);
	if(tpbnm)
	{
		tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:1,depth:1});
		tkb.position.set(0,1.5,-ds);
		tksg.push(tkb);
		tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:s1,height:s2,depth:s3});
		tkb.position.set(0,s2/2,-ds-s3/2-bvs);
		tksg.push(tkb);
	}
	tkb=gmnk(pv(-s1/2-bvs,0,-s3/2-(tpbnm?bvs-s3:0)),pv(-s1/2-bvs-s1,s2,s3/2));
	tksg.push(tkb);
	if(tpbnm)
	{
		tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:gmc,depth:1});
		tkb.position.set(-s1/2,gmc/2,-s3/2-bvs-s3/2);
		tksg.push(tkb);
		spd(pv(0,0,-s3-bvs));
		const mks=pvsnm(1);
		mks.position.set(2,0,-1.5);
		mks.rotation.set(0,-Math.PI/2,0);
		const mtp=tpnm();
		mtp.position.set(1.2,0,-1.5);
		mtp.rotation.set(0,-Math.PI/2,0);
		const pc=ppcnm();
		pc.position.set(1.9,0,-1.2);
	}
	const kns=knsnm();
	kns.position.set(-s1/2,gmc+.3,0);
	kns.rotation.set(0,-Math.PI/2,0);
	(()=>
	{
		const d=3;
		const vk=0.05;
		const ns1=-s1*1.5-bvs-d/2+vk,ns2=ls*2,pd=.7;
		tkb=BABYLON.MeshBuilder.CreateCylinder('ng',{height:d,diameter:pd});
		tkb.position.set(ns1,ns2,0);
		tkb.rotation.set(0,0,Math.PI/2);
		tksg.push(tkb);
		let dg=null;
		dg=BABYLON.MeshBuilder.CreateCylinder('ng',{height:d,diameter:pd+vk});
		let ddg=BABYLON.MeshBuilder.CreateCylinder('ng',{height:d,diameter:pd-vk});
		ddg.position.addInPlaceFromFloats(0,-vk,0);
		const ndg=BABYLON.CSG.FromMesh(dg).subtract(BABYLON.CSG.FromMesh(ddg)).toMesh("dg",null,s,true);
		dg.dispose();
		ddg.dispose();
		ndg.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
		ndg.material.baseColor=new BABYLON.Color3(0.1,0.1,0.1);
		ndg.material.metallic=0;
		ndg.material.roughness=1;
		ndg.position.set(ns1-vk+0.01,ns2,0);
		ndg.rotation.set(0,0,Math.PI/2);
		ndg.n=[44,2,70,69,44,3,75];
		const g=BABYLON.MeshBuilder.CreateSphere('ng',{diameter:0.4});
		g.position.set(-s1*3/2-bvs-d/2,ls*2,0);
		g.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
		g.material.emissiveColor=new BABYLON.Color3(1,0.1,0.1);
		g.material.baseColor=new BABYLON.Color3(0,0,0);
		g.material.metallic=0;
		g.material.roughness=1;
		const pk=new BABYLON.PointLight("pk",g.position);
		pk.diffuse=g.material.emissiveColor;
		pk.includedOnlyMeshes.push(ndg);
	})();
	const mgs=BABYLON.CSG.FromMesh(mg);
	let tks=BABYLON.CSG.FromMesh(tksg[0]);
	for(let k=1;k<tksg.length;k++)
		tks=tks.union(BABYLON.CSG.FromMesh(tksg[k]));
	const b=mgs.subtract(tks).toMesh("b",null,s,true);
	b.checkCollisions=true;
	const vr=()=>
	{
		const tv=new BABYLON.NodeMaterial("v");
		window.tv=tv;
		tv.setToDefault();
		tv.build();
		const sk=new BABYLON.PBRMetallicRoughnessBlock("v");
		window.sk=sk;
		const pk=new BABYLON.InputBlock("pk");
		pk.value=0;
		pk.output.connectTo(sk.metallic);
		const k=new BABYLON.InputBlock("pk");
		k.value=1;
		k.output.connectTo(sk.roughness);
		const v=new BABYLON.InputBlock("v");
		v.value=bdnv;
		v.output.connectTo(sk.baseColor);
		const ptp=tv.getBlockByName('FragmentOutput');
		window.ptp=ptp;
		sk.lighting.connectTo(ptp.rgb);
		if(0)sk.alpha.connectTo(ptp.a);
		tv.getBlockByName("WorldPos").output.connectTo(sk.worldPosition);
		const d=new BABYLON.InputBlock("d");
		d.setAsSystemValue(BABYLON.NodeMaterialSystemValues.View);
		d.output.connectTo(sk.view);
		const ls=new BABYLON.InputBlock("ls");
		ls.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);
		ls.output.connectTo(sk.cameraPosition);
		const dg=new BABYLON.InputBlock("ls");
		dg.setAsAttribute("normal");
		const vdg=new BABYLON.TransformBlock("vdg");
		dg.output.connectTo(vdg.vector);
		tv.getBlockByName("World").output.connectTo(vdg.transform);
		vdg.output.connectTo(sk.worldNormal);
		tv.getBlockByName('color').output.disconnectFrom(ptp.rgba);
		tv.build();
		return tv;
	}
	window.vr=vr;
	if(0)
		b.material=vr();
	else
	{
		b.material=new BABYLON.PBRCustomMaterial("v");
		b.material.baseColor=bdnv;
		b.material.roughness=1;
		b.material.metallic=0;
		if(1)b.material.Fragment_Custom_Albedo(`
			float g=2.0;
			float v=0.0;
			float n1=abs(fract(vPositionW.x*g)-0.5);
			float n2=abs(fract(vPositionW.y*g)-0.5);
			float n3=abs(fract(vPositionW.z*g)-0.5);
			if(abs(normalW.x)>0.5)n1=0.0;
			if(abs(normalW.y)>0.5)
			{
				v=1.0;
				n2=0.0;
			}
			if(abs(normalW.z)>0.5)n3=0.0;
			float p=max(max(n1,n2),n3);
			float tp=smoothstep(0.45-fwidth(p),0.45,p);
			surfaceAlbedo=vec3(1.0,1.0,1.0)*abs(v-tp);
			if(false)surfaceAlbedo=vec3(1.0,1.0,1.0)*((fract(vPositionW.x*g)>0.5?1.0:-1.0)*(fract(vPositionW.y*g)>0.5?1.0:-1.0)*(fract(vPositionW.z*g)>0.5?1.0:-1.0)+1.0)*0.5;
		`);
		else if(0)b.material.Fragment_Before_FragColor(`
			finalColor.rgb=fract(vPositionW/2.5);
		`);
	}
	b.n=[74,2,46,3,70,1,75];
	window.b=b;
	mg.dispose();
	for(let k=0;k<tksg.length;k++)tksg[k].dispose();
}
s.collisionsEnabled=true;
l.inertia=0;
lpc.checkCollisions=true;
lpc.isPickable=false;
l.inputs.remove(l.inputs.attached.mouse);
l.inputs.remove(l.inputs.attached.keyboard);
if(1)l.angularSensibility*=-1;
const nkp=()=>
{
	let sp=s.pick(d.width/2,d.height/2);
	console.log(sp.pickedPoint);
	let n=sp.pickedMesh;
	window.plv=n;
	if(n==undefined){return;v.b([1,70,66,2,44,9,51,48,1,75]);}
	else if(typeof(b)!=='undefined'&&n==b)
	{
		const ss=sp.pickedPoint.y%(s2+bvs);
		const vks=ntvs;
		if(Math.abs(ss)<vks)v.b([74,17,75,9,77]);
		else if(Math.abs(ss-s2)<vks)v.b([57,1,68,8,77]);
		else v.b([74,8,66,66,9,77]);
	}
	else
	{
		let p=n;
		while(p!=undefined)
		{
			if(p.n!=undefined){v.b(p.n);return;}
			else if(p.parent!=null)p=p.parent;
			else return;
		}
	}
}
const nps={};
const ssk=function()
{
	const mbk=
	{
		k(b)
		{
			if(this.mb==undefined)
			{
				this.mb=[0,0];
				this.ps=[0,0];
				this.pk=[0,0];
				this.pg=[0,0]
			}
			const sk=Date.now();
			const kn=300;
			const ng=.05;
			for(const k of [0,1])
			{
				if(sk-this.pk[k]>kn)
				{
					this.ps[k]=0;
					this.mb[k]=0;
					this.pk[k]=sk;
					this.pg[k]=0;
				}
				if(b[k]*this.pg[k]<=0)this.ps[k]+=b[k];
				if(Math.abs(this.ps[k])>ng)
				{
					this.pk[k]=sk;
					this.ps[k]=0;
					this.mb[k]++;
					this.mb[1-k]=0;
					this.pg[1-k]=0;
					this.pk[1-k]=0;
					this.ps[1-k]=0;
					this.pg[k]=Math.sign(b[k])
				}
				if(this.mb[k]==3)
				{
					this.mb[k]=0;
					this.pg[k]=0;
					this.pk[k]=0;
					psl(k)
				}
			}

		}
	}
	document.addEventListener("mousemove",(p)=>{if(document.pointerLockElement===d)
	{
		const vg=1;
		const b1=vg*p.movementX/d.offsetHeight;
		const b2=vg*p.movementY/d.offsetHeight;
		l.cameraRotation.y+=b1;
		l.cameraRotation.x+=b2;
		if(psl)mbk.k([b1,b2])
	}
	});
	const sss=new Map();
	document.addEventListener("touchstart",(p)=>
	{
		for(const s of p.changedTouches)
			if(!sss.has(s.identifier))
				sss.set(s.identifier,{s1:s.clientX,s2:s.clientY,m:s.clientX/d.offsetWidth>0.5});
	});
	const gds=new BABYLON.Vector2(0,0);
	const spk=(p)=>
	{
		for(const s of p.changedTouches)
		{
			if(!sss.get(s.identifier).m)
			{
				gds.set(0,0);
			}
			sss.delete(s.identifier);
		}
	}
	document.addEventListener("touchend",spk);
	document.addEventListener("touchcancel",spk);
	let dg=0,pvsn=3,gpvs=[pvsn+1,pvsn+1];
	window.nps=nps;
	window.addEventListener('keydown',(p)=>{
		if(!nps[p.code])nps[p.code]=true;
	});
	window.addEventListener('keyup',(p)=>{
		nps[p.code]=false; 
	});
	window.addEventListener('blur',()=>{
		for(let k in nps)nps[k]=false;
	});
	let sc=0;
	s.onBeforeRenderObservable.add(()=>
	{
		const kn=Math.min(s.getEngine().getDeltaTime()/1000,.016);
		const g=4.5;
		const gs=new BABYLON.Vector3(0,0,0);
		if(gds.length())
			gs.copyFrom(BABYLON.Vector3.TransformCoordinates
				(new BABYLON.Vector3(-gds.x,0,gds.y).scale(g*(gds.length()>1?(1/gds.length()):1))
					,BABYLON.Matrix.RotationY(l.rotation.y)));
		if(dk.isVisible)
		{
			const g2=Number(nps['ArrowUp']==true||nps['KeyW']==true)-Number(nps['ArrowDown']==true||nps['KeyS']==true);
			const g1=Number(nps['ArrowRight']==true||nps['KeyD']==true)-Number(nps['ArrowLeft']==true||nps['KeyA']==true);
			if(g1!=0||g2!=0)
			{
				gs.copyFrom(BABYLON.Vector3.TransformCoordinates
					(new BABYLON.Vector3(g1,0,g2),BABYLON.Matrix.RotationY(l.rotation.y)));
				gs.normalize().scaleInPlace(g);
			}
		}
		const t=gs.scale(kn);
		if(gs.length())sc=1
		const ps=lpc.position.clone()
		if(sc)lpc.moveWithCollisions(t.add(pv(0,-kn*6,0)));
		const gpv=[lpc.position.subtract(ps).dot(t),lpc.position.y-ps.y];
		for(let k=0;k<2;k++)
		{
			if(Math.sign(gpv[k])*Math.sign(gpvs[k])<0)gpvs[k]=0;
			if(Math.abs(gpvs[k])<1000)gpvs[k]+=gpv[k]>=0?1:-1;
		}
		const dtvk=.05
		if(Math.abs(gpvs[0])>pvsn||lpc.position.subtract(l.position).multiply(pv(1,0,1)).length()>dtvk)
		{
			l.position.x=lpc.position.x
			l.position.z=lpc.position.z
		}
		if(Math.abs(gpvs[1])>pvsn||Math.abs(lpc.position.y-l.position.y)>dtvk)
			l.position.y=lpc.position.y
		if(0)p.position.copyFrom(l.position.add(pv(0,.18,0)))
		if(dk.isVisible&&nps["Space"]&&dg<=0&&Math.abs(lpc.position.y-ps.y)<0.001)
		{
			sc=1
			dg=15;
		}
		if(dg>0)
		{
			nps['Space']=false;
			lpc.moveWithCollisions(pv(0,dg*kn,0));
			dg-=kn*50;
		}
		dnsk();
	});
	document.addEventListener("touchmove",(p)=>{if(0||document.fullscreenElement==document.body)
	{
		for(const s of p.changedTouches)
		{
			let g1=(s.clientX-sss.get(s.identifier).s1)/Math.min(d.offsetWidth,d.offsetHeight);
			let g2=(s.clientY-sss.get(s.identifier).s2)/Math.min(d.offsetWidth,d.offsetHeight);
			if(sss.get(s.identifier).m)
			{
				const vg=3;
				const b1=-g1*vg,b2=-g2*vg
				l.cameraRotation.y+=b1; 
				l.cameraRotation.x+=b2;
				if(psl)mbk.k([b1,b2])
			}
			else
			{
				gds.addInPlace((new BABYLON.Vector2(g1,g2)).scale(5))
				const tk=1.5;
				if(gds.length()>tk)gds.scaleInPlace(tk/gds.length());
			}
			sss.get(s.identifier).s1=s.clientX;
			sss.get(s.identifier).s2=s.clientY;
		}
	}
	});
	s.executeWhenReady(()=>c.runRenderLoop(()=>s.render()));
	const dss=new ResizeObserver((gs)=>
	{
		const g=gs.find((g)=>g.target===d);
		let vpv1=g.devicePixelContentBoxSize[0].inlineSize;
		let vpv2=g.devicePixelContentBoxSize[0].blockSize;
		c.setSize(vpv1,vpv2);
	});
	dss.observe(d,{box:"device-pixel-content-box"});
	lds();
}
const ppd=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PPD",true,s);
const lds=function()
{
	ppd.idealHeight=640;
	ppd.renderAtIdealSize=true;
	const dk=new BABYLON.GUI.Rectangle();
	window.dk=dk
	const pmpv=(p)=>p.toString()+'px';
	dk.width=pmpv(30);
	dk.height=dk.width;
	dk.background='transparent';
	dk.thickness=0;
	dk.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	dk.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
	ppd.addControl(dk);
	dk.isVisible=false;
	const pc=new BABYLON.GUI.Rectangle();
	pc.width=1;
	pc.height=1;
	pc.background="rgba(0,0,0,0.6)";
	pc.thickness=0;
	ppd.addControl(pc);
	const nndvs=(p)=>{cb.style.scale=p};
	const dndpv=(p)=>
	{
		dk.isVisible=p;
		pc.isVisible=!p;
		if(pc.isVisible){nndvs(1);cb.style.visibility=''}
		else cb.style.visibility='hidden'
	}
	if(!jdv())document.addEventListener("pointerlockchange",()=>dndpv(document.pointerLockElement==d));
	else document.addEventListener("fullscreenchange",()=>dndpv(document.fullscreenElement==document.body))
	const pk=()=>{for(let k=0;k<pvs.length;k++)pvs[k].background=k<2?"black":"white";};
	const ldv=[2,20,4,22].map(pmpv);
	let pvs=[];
	for(let k=3;k>=0;k--)
	{
		const ld=new BABYLON.GUI.Rectangle();
		pvs.push(ld);
		ld.width=ldv[Math.floor(k/2)*2+k%2];
		ld.height=ldv[Math.floor(k/2)*2+(1-k%2)];
		ld.background=k>1?"black":"white";
		ld.thickness=0;
		ld.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		ld.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		dk.addControl(ld);
	}
	document.addEventListener("click",(p)=>
	{
		if(!dk.isVisible)
		{
			if(!jdv()){d.requestPointerLock();document.body.requestFullscreen();}
			else {document.body.requestFullscreen();screen.orientation.lock("landscape-primary");dk.isVisible=true;}
		}
		else if(1||dk.alpha==1)
		{
			for(let k=0;k<pvs.length;k++)
				pvs[k].background=k>1?"black":"white";
			if(p.button==2)nkp();
			else if(psl)psl(-1)
			setTimeout(pk,200);
		}
	});
	let gk=0
	dk.alpha=0
	const vpvk=(p=false)=>
	{
		return;
		const kn=200;
		if(gk==0||p)gk=Date.now()
		if(Date.now()-gk>kn-30)
		{
			gk=0;
			dk.alpha=1;
		}
		else setTimeout(vpvk,kn-Date.now()+gk)
	}
	if(0)document.addEventListener('pointermove',(p)=>
	{
		dk.alpha=.5
		if(!p.buttons)vpvk(1)
	})
	document.addEventListener("pointerdown",()=>{nndvs(1.2)});
	document.addEventListener("pointerup",()=>{vpvk(1);nndvs(1)});
	document.addEventListener("pointerout",()=>{vpvk(1);nndvs(1);});
	document.addEventListener("pointercancel",()=>{vpvk(1);nndvs(1);});
}
