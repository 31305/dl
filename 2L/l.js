function jdv()
{
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
    return false;
}
d=document.createElement('canvas')
document.body.style.margin='0';
document.body.style.touchAction='none';
d.style="position:absolute;display:block;width:100%;height:100%";
document.body.appendChild(d);
var c=new BABYLON.Engine(d,true);
var s=new BABYLON.Scene(c);
const ls=1;
var l=new BABYLON.FreeCamera("l",new BABYLON.Vector3(0,ls*1.2,-10),s);
l.setTarget(BABYLON.Vector3.Zero());
l.attachControl(d,true);
l.minZ=0.5;
var p=new BABYLON.HemisphericLight("p",new BABYLON.Vector3(0,10,-5),s);
const bv=1000;
var b=BABYLON.MeshBuilder.CreateGround("b",{size:bv},s);
b.n=[74,17,75,9,77];
b.checkCollisions=true;
var g=BABYLON.MeshBuilder.CreateBox("g",{size:2},s);
g.material=new BABYLON.StandardMaterial("pd",s);
g.material.diffuseColor=new BABYLON.Color3(1,0,0);
g.position=new BABYLON.Vector3(0,1,0);
g.checkCollisions=true;
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
var pndv=null;
d.addEventListener("click",(p)=>
{
	if(!jdv()){if(document.pointerLockElement!=d)d.requestPointerLock();}
	else if(0){d.requestFullscreen();}
	let n=s.pick(d.width/2,d.height/2).pickedMesh;
	pndv=n;
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
const ppd=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PPD",true,s);
const ld = new BABYLON.GUI.Rectangle();
ld.width="30px";
ld.height="30px";
ld.background="transparent";
ld.thickness=0;
ld.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
ld.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
ppd.addControl(ld);
const ldp=new BABYLON.GUI.Rectangle();
ldp.width="2px";
ldp.height="20px";
ldp.background="black"
ldp.thickness=0;
ld.addControl(ldp);
const ldd=new BABYLON.GUI.Rectangle();
ldd.width="20px";
ldd.height="2px";
ldd.background="black";
ldd.thickness=0;
ld.addControl(ldd);
c.runRenderLoop(()=>s.render());
window.addEventListener("resize",()=>{c.resize();});
