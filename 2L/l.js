d=document.createElement('canvas')
document.body.style.margin='0';
document.body.style.touchAction='none';
d.style="position:absolute;display:block;width:100%;height:100%";
document.body.appendChild(d);
var c=new BABYLON.Engine(d,true);
var s=new BABYLON.Scene(c);
var l=new BABYLON.FreeCamera("l",new BABYLON.Vector3(0,5,-10),s);
l.setTarget(BABYLON.Vector3.Zero());
l.attachControl(d,true);
var p=new BABYLON.HemisphericLight("p",new BABYLON.Vector3(0,1,0),s);
const bv=1000;
var b=BABYLON.MeshBuilder.CreateGround("b",{size:bv},s);
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
l.ellipsoid=new BABYLON.Vector3(1,1,1);
l.ellipsoidOffset=new BABYLON.Vector3(0,.5,0);
l.inputs.remove(l.inputs.attached.mouse);
l.keysUp.push(87);
l.keysDown.push(83);
l.keysRight.push(68);
l.keysLeft.push(65);
l.keysUpward.push(32);
l.angularSensibility*=-1;
d.addEventListener("click",()=>{(d.requestPointerLock||d.msRequestPointerLock).call(d);});
d.addEventListener("mousemove",(e)=>{if(document.pointerLockElement===d)
{
	let g=0.002;
	l.rotation.y-=e.movementX*g; 
	l.rotation.x-=e.movementY*g;
}
});
c.runRenderLoop(()=>s.render());
window.addEventListener("resize",()=>{c.resize();});
