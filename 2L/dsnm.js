const dsk=new Date('2026-06-18');
const ndss=(n,v)=>
{
	return new Promise((ps,ds)=>
	{
		const sk=Date.now();
		fetch('https://www.wikidata.org/w/api.php?action=query&titles=Q'+n.toString()+
			'&prop=revisions&rvprop=ids|timestamp&rvstart='+dsk.toISOString()
			+'&rvlimit=1&format=json&formatversion=2&origin=*')
		.then(p=>p.json()).then(p=>fetch('https://www.wikidata.org/wiki/Special:EntityData/Q'
			+n.toString()+'.json?revision='+p.query.pages[0].revisions[0].revid.toString()))
		.then(p=>p.json()).then(p=>fetch('https://commons.m.wikimedia.org/w/api.php?action=query&titles=File:'
			+p.entities['Q'+n.toString()].claims.P18[0].mainsnak.datavalue.value.replace(' ', '_')
			+'&prop=imageinfo&iiprop=timestamp|url&iiurlwidth='
			+Math.floor(Math.min(v*window.devicePixelRatio,200)).toString()
			+'&format=json&iistart='+dsk.toISOString()+'&formatversion=2&origin=*'))
		.then(p=>p.json()).then(p=>fetch(p.query.pages[0].imageinfo[0].thumburl))
		.then(p=>
			{
				if(sk-(new Date(p.headers.get('Last-Modified')))>1000)ps(p);
				else ds();
			}).catch(ds)
	})
}
const j=new Map();
const dsnm=async(n,v,ss=1)=>
{
	const s=await caches.open('vcsg');
	let p=await s.match(n);
	if(!p)
	{
		if(!j.has(n))j.set(n,ndss(n,v).then(p=>s.put(p.clone())).catch(()=>{j.delete(n);throw(p)}));
		await j.get(n);
		p=await s.match(n);
	}
	if(!ss)return;
	const tp=await p.blob();
	const l=URL.createObjectURL(tp);
	return l;
}
export default dsnm;
