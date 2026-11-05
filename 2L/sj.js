import vp from './vp.js';
const v=new vp();
v.dk().then(()=>
{
	document.body.style.display='grid';
	document.body.style.placeItems='center';
	document.body.style.height='100dvh';
	document.oncontextmenu=(p)=>p.preventDefault()
	document.body.innerHTML=`
<svg width="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	<circle cx="50" cy="50" r="50" fill="white"/>
</svg>
	`;
	let s1=0,s2=0,kk=null;
	var pv=null;
	var vk=(p)=>{pv=p;v.svb(p);}
	var kpk=()=>{console.log('k');if(pv)vk(pv)};
	var mpk=()=>{console.log('m');vk([7,43,2,76,43,3,70,66,44,1,46,5,51]);};
	var npk=()=>{console.log('n')};
	document.onpointerdown=()=>{if(v.bs)return;s1=0;s2=0;kk=setTimeout(()=>{kk=null;kpk();},500);}
	document.onpointermove=(p)=>{if(kk)
	{
		s1+=p.movementX;s2+=p.movementY;
		if(s1*s1+s2*s2>400)
		{
			clearTimeout(kk);
			kk=null;
			npk();
		}
	}}
	document.onpointerup=()=>{if(kk){clearTimeout(kk);kk=null;mpk();}}
	document.onpointerout=()=>{if(kk){clearTimeout(kk);kk=null;}}
	document.onkeydown=(p)=>
	{
		if(v.bs||kk)return;
		if(p.code==='KeyM')mpk();
		else if(p.code==='KeyN')npk();
		else if(p.code==='KeyK')kpk();
	}
});
