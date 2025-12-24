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
l.attachControl(d,true);
l.minZ=0.1;
const p=new BABYLON.PointLight("p",new BABYLON.Vector3(0,0,0),s);
p.intensity=2;
p.parent=l;
const bnm=function()
{
	const bv=10;
	const b=BABYLON.MeshBuilder.CreateGround("b",{size:bv});
	b.n=[74,17,75,9,77];
	b.checkCollisions=true;
	b.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
	b.material.baseColor=new BABYLON.Color3(1,1,.3);
	b.material.metallic=0;
	b.material.roughness=1;
	const pst=2;
	for(let k=0;k<4;k++)
	{
		const ps=BABYLON.MeshBuilder.CreatePlane("ps"+k.toString(),{height:pst,width:bv},s);
		ps.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
		ps.material.baseColor=new BABYLON.Color3(.8,.8,.8);
		ps.material.metallic=0;
		ps.material.roughness=1;
		ps.position=new BABYLON.Vector3(0,pst/2,bv/2);
		ps.rotateAround(new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,1,0),k*Math.PI/2);
		ps.checkCollisions=true;
		ps.n=[74,8,66,66,9,77];
	}
}
const pv=(p,d,t)=>{return new BABYLON.Vector3(p,d,t);}
const gmnk=function(s1,s2,dk=null)
{
	let t=s1.subtract(s2);
	let g=BABYLON.MeshBuilder.CreateBox("gkc",{width:Math.abs(t.x),height:Math.abs(t.y),depth:Math.abs(t.z)});
	if(dk)g.parent=dk;
	g.position=s1.add(s2).scale(0.5);
	g.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
	g.material.baseColor=new BABYLON.Color3(.8,.8,.8);
	g.material.metallic=0;
	g.material.roughness=1;
	g.checkCollisions=true;
	return g;
}
const sgbnm=function(s1,s2,g)
{
	let p=[]
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s1.y-g,s1.z-g),new BABYLON.Vector3(s2.x+g,s1.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s2.y,s1.z-g),new BABYLON.Vector3(s2.x+g,s2.y+g,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x-g,s1.y,s1.z-g),new BABYLON.Vector3(s1.x,s2.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s2.x,s1.y,s1.z-g),new BABYLON.Vector3(s2.x+g,s2.y,s2.z+g)));
	p.push(gmnk(new BABYLON.Vector3(s1.x,s1.y,s1.z-g),new BABYLON.Vector3(s2.x,s2.y,s1.z)));
	p.push(gmnk(new BABYLON.Vector3(s1.x,s1.y,s2.z),new BABYLON.Vector3(s2.x,s2.y,s2.z+g)));
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
if(1)
{
	const s1=5,s2=ls*4,s3=5,ds=1;
	const vs=1000;
	const mg=BABYLON.MeshBuilder.CreateBox('mg',{width:vs,height:vs,depth:vs});
	const tksg=[]
	let tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:s1,height:s2,depth:s3});
	tkb.position.set(0,s2/2,s3/2-ds);
	tksg.push(tkb);
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:1,height:1,depth:0.2});
	tkb.position.set(0,ls*2,s3-ds);
	tksg.push(tkb);
	const ndp=ndnm(pv(0,ls*2,s3-ds),1);
	ndp.n=[70,7,44,68,31,47,2,77];
	const gmc=2.5;
	tkb=BABYLON.MeshBuilder.CreateBox('tk',{width:50,height:gmc,depth:1.2});
	tkb.position.set(0,gmc/2,1);
	tksg.push(tkb);
	const mgs=BABYLON.CSG.FromMesh(mg);
	let tks=BABYLON.CSG.FromMesh(tksg[0]);
	for(let k=1;k<tksg.length;k++)
		tks=tks.union(BABYLON.CSG.FromMesh(tksg[k]));
	const b=mgs.subtract(tks).toMesh("b",null,s,true);
	b.checkCollisions=true;
	b.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
	b.material.baseColor=new BABYLON.Color3(.5,.5,.5);
	b.material.metallic=0;
	b.material.roughness=1;
	b.n=[74,2,46,3,70,1,75];
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
		else if(document.fullscreenElement!=d){d.requestFullscreen();screen.orientation.lock("landscape-primary");return;}
		let sp=s.pick(d.width/2,d.height/2);
		console.log(sp.pickedPoint);
		let n=sp.pickedMesh;
		if(n==undefined)v.b([1,70,66,2,44,9,51,48,1,75]);
		else
		{
			let p=n;
			while(p!=undefined)
			{
				if(p.n!=undefined){v.b(n.n);return;}
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
	d.addEventListener("touchstart",(p)=>
	{
		for(const s of p.changedTouches)
			if(!sss.has(s.identifier))
				sss.set(s.identifier,{s1:s.clientX,s2:s.clientY,m:s.clientX/d.offsetWidth>0.5});
	});
	d.addEventListener("touchend",(p)=>
	{
		for(const s of p.changedTouches)
			sss.delete(s.identifier);
	});
	d.addEventListener("touchcancel",(p)=>
	{
		for(const s of p.changedTouches)
			sss.delete(s.identifier);
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
				l.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates
					(new BABYLON.Vector3(-g1,0,g2),BABYLON.Matrix.RotationY(l.rotation.y)).scale(10));
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
