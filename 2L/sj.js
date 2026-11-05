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
	const kpk=()=>{console.log('k')};
	const mpk=()=>{console.log('m')};
	const npk=()=>{console.log('n')};
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
