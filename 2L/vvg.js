const vvg=()=>
{
	return (new Promise((p,d)=>
	{
		const dvs=Object.assign(document.createElement('link'),
			{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'})
		dvs.onload=p;dvs.onerror=d;
		document.head.appendChild(dvs);
	})).then(()=>document.fonts.load('20px "Ubuntu Mono"','0123456789+-?#'));
}
export default vvg;
