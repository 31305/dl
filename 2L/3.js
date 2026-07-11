const ss=(n)=>
{
	let v=document.createElement('script');
	v.src=n;
	v.async=false;
	document.body.appendChild(v);
}
ss("babylon.js")
ss("babylonjs.materials.min.js")
ss("babylon.gui.min.js")
window.lnc=false;
if(lnc)ss("HavokPhysics_umd.js")
ss("nlv.js")
ss('vm.js')
ss("l.js")
const vvss=document.createElement('style');
vvss.textContent=`
.cb{
	--dv:200px;
	width:calc(var(--dv) * 0.25);
	height:calc(var(--dv) * 0.25);
	border:calc(var(--dv) * 0.05) solid #FFF;
	border-bottom-color:transparent;
	border-radius:50%;
	display:block;
	box-sizing:border-box;
	animation:ck 1s linear infinite;
	}
	@keyframes ck{
	0%{
		transform:rotate(0deg);
	}
	100%{
		transform:rotate(360deg);
	}
	}
`;
document.head.appendChild(vvss);
const cb=document.createElement('span')
cb.style='z-index:999999;'
cb.className='cb'
document.body.style.display='grid'
document.body.style.placeItems='center'
document.body.style.height='100dvh'
document.body.appendChild(cb)
window.cb=cb;
