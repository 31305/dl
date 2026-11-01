const l=document.createElement('iframe');
l.style.width='100dvw';
l.style.height='100dvh';
l.src='ld/web/viewer.html?file=../../l.pdf'
l.style.border='none';
l.addEventListener("load",()=>{
	const ls=l.contentDocument;
	ls.addEventListener("click",p=>{
		const d=p.target.closest(
			".annotationLayer a"
		);
		if(d){console.log(":",d.href);}
	},true);
});
document.body.appendChild(l);
