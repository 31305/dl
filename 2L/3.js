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
	@keyframes ck{
	0%{transform:scale(1);}
	50%{transform:scale(0.8);}
	100%{transform:scale(1);}
	}
`;
document.head.appendChild(vvss);
const cb=document.createElement('span')
cb.style.width='120px';
cb.style.height=cb.style.width;
cb.style.border='10px solid rgb(255,155,0)'
cb.style.borderRadius='50%'
cb.style.display='block'
cb.style.boxSizing='border-box'
cb.style.animation='ck 1s ease-in-out infinite'
cb.style.zIndex=999999
cb.className='cb'
document.body.style.display='grid'
document.body.style.placeItems='center'
document.body.style.height='100dvh'
document.body.appendChild(cb)
window.cb=cb;
