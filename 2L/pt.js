import vp from './vp.js';
const v=new vp();
const pt=(p)=>v.dk().then(()=>
{
	document.documentElement.style.userSelect="none";
	document.body.style.touchAction='none';
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
	let pv=null;
	const vk=(p)=>{pv=p;return v.svb(p);}
	p.vk=vk;
	const kpk=async()=>{if(pv){await v.b([51,8,75]);v.svb(pv)}};
	const mpk=async()=>{if(p.mv)await v.b([5,75]);if(p.mpk)p.mpk();};
	const npk=async()=>{await v.b([70,2]);if(p.npk)p.npk();};
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
	p.sp=()=>
	{
		document.onpointerdown=null;
		document.onpointerup=null;
		document.onpointerout=null;
		document.onpointermove=null;
		document.onkeydown=null;
	}
});
export default pt;
