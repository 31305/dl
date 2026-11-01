const l=document.createElement('iframe');
document.body.appendChild(l);
l.src="web/viewer.html?file=l.pdf">
l.addEventListener("load",()=>{
	const ls=l.contentDocument;
	ls.addEventListener("click",p=>{
		const d=p.target.closest(
			".annotationLayer a"
		);
		if(d){console.log(":",d.href);}
	},true);
});
