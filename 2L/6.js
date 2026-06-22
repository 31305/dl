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
const vp=class
{
	bs=false;
	vp=null;
	dk()
	{
		return new Promise((p,d)=>
		{
			vm({dk:p,vppk:()=>{this.bs=false;if(this.vp!=null)this.vp()}}).then(p=>this.p=p);
		});
	}
	b(v)
	{
		return new Promise((pd,d)=>
		{
			if(this.bs||this.p==undefined)d();
			this.bs=true;
			this.vp=()=>{this.vp=null;pd();}
			this.p.ccall('jb',null,['array','number'],[new Uint8Array(v),v.length]);
		});
	}
}

Promise.all([ss('vm.js'),ss('https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.js'),
	new Promise((p,d)=>
	{
		let s=document.createElement('link');
		s.rel='stylesheet';
		s.href='https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.css';
		s.onload=p();
		document.head.appendChild(s);
	})
]).then(p=>{const v=new vp();v.dk().then(p=>
{
	const d=document.createElement('div');
	document.body.appendChild(d);
	d.id='d';
	d.style.width='100dvw';
	d.style.height='100dvh';
	const b=new maplibregl.Map({
		attributionControl:false,
		minZoom:2,
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
	b.on('load',()=>{
		b.addSource('s', {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties:{n:[49,67,5,70,3,75]},
						geometry: {
							type: 'Point',
							coordinates: [75, 20]
						},
					},
				]
			}
		});
		b.addLayer({
			id: 'n',
			type: 'circle',
			source: 's',
			paint: {
				'circle-radius': 10,
				'circle-color': '#ff0000'
			}
		});
	});
	b.on('click', p => {console.log(p.lngLat.lng, p.lngLat.lat);});
	b.on('click','n',p=>
	{
		if(!v.bs)v.b(JSON.parse(p.features[0].properties.n));
	});
	b.dragRotate.disable();
	b.keyboard.disable();
	b.touchZoomRotate.disableRotation();
	window.tp=b;
})});
