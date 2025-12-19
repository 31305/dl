function jdv()
{
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
    return false;
}
class vp
{
	constructor(pk=null)
	{
		vm({dk:()=>{if(pk!=null)pk()},vppk:()=>{}}).then(p=>this.p=p)
	}
	b(v)
	{
		this.p.ccall('jb',null,['array','number'],[new Uint8Array(v),v.length]);
	}
}
const v=new vp();
d=document.createElement('canvas')
document.body.style.margin='0';
document.body.style.touchAction='none';
d.style="position:absolute;display:block;width:100%;height:100%";
document.body.appendChild(d);
const c=new BABYLON.Engine(d,true);
const s=new BABYLON.Scene(c);
s.clearColor=new BABYLON.Color3(0,0,0);
const ls=1;
const l=new BABYLON.FreeCamera("l",new BABYLON.Vector3(0,ls*1.5,0),s);
l.attachControl(d,true);
l.minZ=0.5;
const p=new BABYLON.PointLight("p",new BABYLON.Vector3(0,0,0),s);
p.parent=l;
const dp=new BABYLON.SpotLight("dp",new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(0,0,1),0.02,2,s);
dp.diffuse=new BABYLON.Color3(1,0.5,0.5);
dp.intensity=10;
dp.parent=l;
function bnm()
{
	const bv=10;
	const b=BABYLON.MeshBuilder.CreateGround("b",{size:bv});
	b.n=[74,17,75,9,77];
	b.checkCollisions=true;
	b.material=new BABYLON.PBRMetallicRoughnessMaterial("pd",s);
	b.material.baseColor=new BABYLON.Color3(.8,.8,.5);
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
	}
}
bnm();
s.collisionsEnabled=true;
s.gravity=new BABYLON.Vector3(0,-0.1,0);
l.speed=0.4;
l.checkCollisions=true;
l.applyGravity=true;
l.ellipsoid=new BABYLON.Vector3(1,ls,1);
l.ellipsoidOffset=new BABYLON.Vector3(0,.5,0);
l.inputs.remove(l.inputs.attached.mouse);
l.keysUp.push(87);
l.keysDown.push(83);
l.keysRight.push(68);
l.keysLeft.push(65);
if(1)l.angularSensibility*=-1;
d.addEventListener("click",(p)=>
{
	if(!jdv()){if(document.pointerLockElement!=d){d.requestPointerLock();return;}}
	else if(0){d.requestFullscreen();}
	let n=s.pick(d.width/2,d.height/2).pickedMesh;
	if(n==undefined)v.b([1,70,66,2,44,9,51,48,1,77]);
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
	l.rotation.y+=p.movementX/d.height*vg; 
	l.rotation.x+=p.movementY/d.height*vg;
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
d.addEventListener("touchmove",(p)=>{if(1||document.fullscreenElement==d)
{
	for(const s of p.changedTouches)
	{
		let g1=(s.clientX-sss.get(s.identifier).s1)/d.height*vg;
		let g2=(s.clientY-sss.get(s.identifier).s2)/d.height*vg;
		if(sss.get(s.identifier).m)
		{
			l.rotation.y-=g1; 
			l.rotation.x-=g2;
		}
		else
			l.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates
				(new BABYLON.Vector3(-g1,0,g2),BABYLON.Matrix.RotationY(l.rotation.y)));
		sss.get(s.identifier).s1=s.clientX;
		sss.get(s.identifier).s2=s.clientY;
	}
}
});
c.runRenderLoop(()=>s.render());
window.addEventListener("resize",()=>{c.resize();});
