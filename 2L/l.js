const jdv=function()
{
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
    return false;
}
const vp=class
{
	constructor(pk=null)
	{
		vm({dk:()=>{if(pk!=null)pk()},vppk:()=>{}}).then(p=>this.p=p)
	}
	b(v)
	{
		if(this.p!=undefined)this.p.ccall('jb',null,['array','number'],[new Uint8Array(v),v.length]);
	}
}
const v=new vp(()=>{ssk();});
d=document.createElement('canvas')
document.body.style.margin='0';
document.body.style.touchAction='none';
d.style="position:absolute;display:block;width:100%;height:100%";
document.body.appendChild(d);
const c=new BABYLON.Engine(d,true);
const s=new BABYLON.Scene(c);
s.clearColor=new BABYLON.Color3(0,0,0);
const ls=1.75/2;
const l=new BABYLON.FreeCamera("l",new BABYLON.Vector3(0,ls*2,0),s);
l.ellipsoid=new BABYLON.Vector3(.3,ls,.3);
l.attachControl(d,true);
l.minZ=0.1;
const p=1?new BABYLON.PointLight("p",new BABYLON.Vector3(0,0,0),s):new BABYLON.SpotLight("p",new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,0,1),Math.PI/2,2);
p.intensity=2;
p.parent=l;
const ntvs=0.001;
const pv=(p,d,t)=>{return new BABYLON.Vector3(p,d,t);}
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
const ndnm=function(ss,vsm)
{
	const nd=BABYLON.MeshBuilder.CreatePlane("nd",{width:vsm,height:vsm},s);
	nd.position=ss;
	nd.material=new BABYLON.PBRMetallicRoughnessMaterial("v",s);
	const vs=128;
	const pdc=new BABYLON.DynamicTexture("l",vs,s);
	nd.material.baseTexture=pdc;
	pdc.updateSamplingMode(BABYLON.Constants.NEAREST_LINEAR_MIPNEAREST);
	nd.material.metallic=0;
	nd.material.roughness=1;
	const pv=pdc.getContext();
	pv.fillStyle='white';
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
				ln[k].data[8*4*pk+4*ppk]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+1]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+2]=v?0:255;
				ln[k].data[8*4*pk+4*ppk+3]=255;
			}
	}
	const lk=(l,s1,s2)=>
	{
		for(let k=0;k<l.length;k++)
			pv.putImageData(ln[l.charCodeAt(k)],k*8+s1,s2);
	}
	lk('1@1007.in',28,60);
	pdc.update();
	return nd;
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
const pvsnm=()=>
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
	gmnk(pv(-vs/2,0,-vs/2),pv(vs/2,tc1+tc2+sv,vs/2),p).isVisible=false;
	p.n=[5,49,3,70,1,75];
	return p;
};
const tpnm=()=>
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
	gmnk(pv(-vs1/2-sv,0,-vs3/2-sv),pv(vs1/2+sv,tc+sv,vs3/2+sv),p).isVisible=false;
	p.n=[14,66,71,12,62,1,75];
	return p;
};
const ppcnm=()=>
{
	const p=new BABYLON.TransformNode("tp");
	const c=.1,v1=.05,v2=.07,vk=0.003;
	const n1=new BABYLON.MeshBuilder.CreateCylinder("n",{height:c,diameterBottom:v1,diameterTop:v2});
	n1.position.set(0,c/2,0);
	const n2=new BABYLON.MeshBuilder.CreateCylinder("n",{height:c,diameterBottom:v1-vk,diameterTop:v2-vk});
	n2.position.set(0,c/2+vk,0);
	const n1p=BABYLON.CSG.FromMesh(n1);
	const n2p=BABYLON.CSG.FromMesh(n2);
	const pc=n1p.subtract(n2p).toMesh("c",null,s,true);
	pc.parent=p;
	if(1)
	{
		n1.dispose();
		n2.dispose();
	}
	pc.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	pc.material.baseColor=new BABYLON.Color3(.1,.1,.1);
	pc.material.metallic=.5;
	pc.material.roughness=.0;
	p.n=[56,2,48,3,51,1,77];
	return p;
};
const knsnm=()=>
{
	const p=new BABYLON.TransformNode("tp");
	const v1=.15,sv=.03;
	const bv=new BABYLON.Color3(.4,.25,.12);
	for(let k=0;k<4;k++)
	{
		const tp=gmnk(pv(-v1/2,-v1/2,0),pv(v1/2+sv,-v1/2-sv,-sv),p,bv,false);
		tp.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,0,1),Math.PI/2*k);
	}
	const gp=BABYLON.MeshBuilder.CreatePlane("gp",{width:v1,height:v1});
	gp.position.set(0,0,-sv/2);
	gp.parent=p;
	gp.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
	gp.material.baseColor=new BABYLON.Color3(1,1,.5);
	gp.material.metallic=0;
	gp.material.roughness=1;
	ntvs==0.001;
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
	window.nkv=s1;
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
		const vs=0.005;
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
	window.knss=knss;
	p.n=[54,1,61,11];
	return p;
};
const s2=ls*4,bvs=.2;
const lnm=()=>
{
	const s1=5,s3=5,ds=s3/2;
	l.position.addInPlaceFromFloats(-s1-bvs,0,0);
	l.rotation.set(0,Math.PI/2,0);
	const vs=1000;
	const mg=BABYLON.MeshBuilder.CreateBox('mg',{width:vs,height:vs,depth:vs});
	const tksg=[];
	let tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:s1,height:s2,depth:s3});
	tkb.position.set(0,s2/2,s3/2-ds);
	tksg.push(tkb);
	const ndp=ndnm(pv(0,ls*2,s3-ds-ntvs),1);
	ndp.n=[70,7,44,68,31,47,2,77];
	const gmc=2.5;
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:gmc,depth:1.2});
	tkb.position.set(-s1/2,gmc/2,0);
	tksg.push(tkb);
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:1,depth:1});
	tkb.position.set(0,ls*2,-ds);
	tksg.push(tkb);
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:s1,height:s2,depth:s3});
	tkb.position.set(0,s2/2,-ds-s3/2-bvs);
	tksg.push(tkb);
	tkb=gmnk(pv(-s1/2-bvs,0,-s3/2-bvs-s3),pv(-s1/2-bvs-5,s2,s3/2));
	tksg.push(tkb);
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:gmc,depth:1.2});
	tkb.position.set(-s1/2,gmc/2,-s3/2-bvs-s3/2);
	tksg.push(tkb);
	spd(pv(0,0,-s3-bvs));
	const mks=pvsnm();
	mks.position.set(2,0,-1.5);
	mks.rotation.set(0,-Math.PI/2,0);
	const mtp=tpnm();
	mtp.position.set(1.2,0,-1.5);
	mtp.rotation.set(0,-Math.PI/2,0);
	const pc=ppcnm();
	pc.position.set(1.9,0,-1.2);
	const kns=knsnm();
	kns.position.set(-s1/2,gmc+.3,0);
	kns.rotation.set(0,-Math.PI/2,0);
	window.kns=kns;
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
		sk.alpha.connectTo(ptp.a);
		tv.getBlockByName("WorldPos").output.connectTo(sk.worldPosition);
		const d=new BABYLON.InputBlock("d");
		d.setAsSystemValue(BABYLON.NodeMaterialSystemValues.View);
		d.output.connectTo(sk.view);
		tv.build();
		return tv;
	}
	if(0)
		b.material=vr();
	else
	{
		b.material=new BABYLON.PBRMetallicRoughnessMaterial("v");
		b.material.baseColor=bdnv;
		b.material.roughness=1;
		b.material.metallic=0;
	}
	b.n=[74,2,46,3,70,1,75];
	window.b=b;
	mg.dispose();
	for(let k=0;k<tksg.length;k++)tksg[k].dispose();
}
s.collisionsEnabled=true;
s.gravity=new BABYLON.Vector3(0,-0.1,0);
l.speed=1;
l.inertia=0;
l.checkCollisions=true;
l.applyGravity=true;
l.inputs.remove(l.inputs.attached.mouse);
l.keysUp.push(87);
l.keysDown.push(83);
l.keysRight.push(68);
l.keysLeft.push(65);
if(1)l.angularSensibility*=-1;
const ssk=function()
{
	d.addEventListener("click",(p)=>
	{
		if(!jdv()){if(document.pointerLockElement!=d){d.requestPointerLock();return;}}
		else if(document.fullscreenElement!=d||d.width<d.height){d.requestFullscreen();screen.orientation.lock("landscape-primary");return;}
		let sp=s.pick(d.width/2,d.height/2);
		console.log(sp.pickedPoint);
		let n=sp.pickedMesh;
		window.plv=n;
		if(n==undefined)v.b([1,70,66,2,44,9,51,48,1,75]);
		else if(n==b)
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
				else p=p.parent;
			}
		}
	});
	const vg=1;
	d.addEventListener("mousemove",(p)=>{if(document.pointerLockElement===d)
	{
		l.cameraRotation.y+=p.movementX/d.height*vg; 
		l.cameraRotation.x+=p.movementY/d.height*vg;
	}
	});
	const sss=new Map();
	const gs=new BABYLON.Vector3(0,0,0);
	d.addEventListener("touchstart",(p)=>
	{
		for(const s of p.changedTouches)
			if(!sss.has(s.identifier))
				sss.set(s.identifier,{s1:s.clientX,s2:s.clientY,m:s.clientX/d.offsetWidth>0.5});
	});
	const spk=(p)=>
	{
		for(const s of p.changedTouches)
		{
			if(!sss.get(s.identifier).m)
			{
				console.log('sp');
				gs.set(0,0,0);
			}
			sss.delete(s.identifier);
		}
	}
	d.addEventListener("touchend",spk);
	d.addEventListener("touchcancel",spk);
	s.onBeforeRenderObservable.add(()=>
	{
		const kn=s.getEngine().getDeltaTime()/1000;
		const g=l.speed*kn*3;
		const gg=gs.length();
		const t=gs.normalizeToNew().scale(Math.min(g,gg));
		l.cameraDirection.addInPlace(t);
		gs.set(0,0,0);
	});
	d.addEventListener("touchmove",(p)=>{if(document.fullscreenElement==d)
	{
		for(const s of p.changedTouches)
		{
			let g1=(s.clientX-sss.get(s.identifier).s1)/Math.min(d.width,d.height)*vg;
			let g2=(s.clientY-sss.get(s.identifier).s2)/Math.min(d.width,d.height)*vg;
			if(sss.get(s.identifier).m)
			{
				l.cameraRotation.y-=g1; 
				l.cameraRotation.x-=g2;
			}
			else
			{
				let g=BABYLON.Vector3.TransformCoordinates
					(new BABYLON.Vector3(-g1,0,g2),BABYLON.Matrix.RotationY(l.rotation.y)).scale(10);
				gs.addInPlace(g);
			}
			sss.get(s.identifier).s1=s.clientX;
			sss.get(s.identifier).s2=s.clientY;
		}
	}
	});
	c.runRenderLoop(()=>s.render());
	window.addEventListener("resize",()=>{c.resize();});
}
const ppd=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PPD",true,s);
const lds=function()
{
	const ldv=['2px','20px','4px','22px'];
	for(let k=3;k>=0;k--)
	{
		const ld=new BABYLON.GUI.Rectangle();
		ld.width=ldv[Math.floor(k/2)*2+k%2];
		ld.height=ldv[Math.floor(k/2)*2+(1-k%2)];
		ld.background=k>1?"black":"white";
		ld.thickness=0;
		ld.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
		ld.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
		ppd.addControl(ld);
	}
}
lds();
lnm();
