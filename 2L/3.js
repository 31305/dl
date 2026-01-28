const ss=(n)=>
{
	let v=document.createElement('script');
	v.src=n;
	v.async=false;
	document.body.appendChild(v);
}
ss("babylon.js")
ss("babylon.gui.min.js")
ss("nlv.js")
ss('vm.js')
ss("l.js")
