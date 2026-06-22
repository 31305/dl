const ss=(n)=>
{
	return new Promise((p,d)=>
	{
			
		let v=document.createElement('script');
		v.src=n;
		v.async=false;
		v.onload=p;
		document.body.appendChild(v);
	});
}
Promise.all([ss('https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.js'),
	new Promise((p,d)=>
	{
		let s=document.createElement('link');
		s.rel='stylesheet';
		s.href='https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.css';
		s.onload=p();
		document.head.appendChild(s);
	})
]).then(p=>
{
	const d=document.createElement('div');
	document.body.appendChild(d);
	d.id='d';
	d.style.width='100dvw';
	d.style.height='100dvh';
	const b=new maplibregl.Map({
		container: "d",
		style: {
			version: 8,
				projection:{'type':'globe'},
			sources: {
				"raster-tiles": {
					type: "raster",
					tiles: [
						"https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
						"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
						"https://mt2.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
						"https://mt3.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
					],
					tileSize: 256,
				},
			},
			layers: [{ id: "raster-layer", type: "raster", source: "raster-tiles" }],
		},
	});
});
