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

Promise.all([ss('bs.js'),ss('vm.js'),ss('maplibre-gl.js'),
	new Promise((p,d)=>
	{
		let s=document.createElement('link');
		s.rel='stylesheet';
		s.href='maplibre-gl.css';
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
		center:[75,20],
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
		const ss=[]
		const vtp=10;
		for(let s of bsn)
		{
			if(s.dd){s.d1=18;s.d2=24}else{s.d1=0;s.d2=24;}
			ss.push({type:'Feature',properties:s,geometry:{type:'Point',coordinates:s.s}})
		}
		b.addSource('s', {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features:ss
			},
			cluster: true,
			clusterRadius:vtp*3
		});
		const dvv=['all',['<=',['get','d1'],['zoom']],['>',['get','d2'],['zoom']]]
		b.addLayer({
			id: 'n',
			type: 'circle',
			source: 's',
			paint: {
				'circle-radius':3*vtp,
				'circle-opacity':0,
			}
		});
		b.addLayer({
			id: 'nd',
			type: 'circle',
			source: 's',
			paint: {
				'circle-radius':vtp,
				'circle-color':["case",["boolean",["get","cluster"],false],"#ff0000","#0000ff"],
				'circle-opacity':0.8,
			},
		});
	});
	b.on('click', p => {console.log(p.lngLat.lng, p.lngLat.lat);});
	b.on('click','n',async p=>
	{
		const g=10;
		if(p.features[0].properties.cluster)
		{
			const tp=p.features[0];
			const [n,gs]=await Promise.all([
				b.getSource('s').getClusterChildren(tp.properties.cluster_id),
				b.getSource('s').getClusterExpansionZoom(tp.properties.cluster_id)
			]);
			b.flyTo({center:tp.geometry.coordinates,zoom:Math.min(gs,b.getZoom()+10),speed:g});
		}
		else
		{
			if(b.getZoom()<19)b.flyTo({center:JSON.parse(p.features[0].properties.s),zoom:20,speed:g})
			if(!v.bs)v.b(JSON.parse(p.features[0].properties.n));
		}
	});
	b.on('mouseenter', 'n', () => {
        b.getCanvas().style.cursor = 'pointer';
    });
	b.on('mouseleave', 'n', () => {
        b.getCanvas().style.cursor = '';
    });
	b.dragRotate.disable();
	b.keyboard.disable();
	b.touchZoomRotate.disableRotation();
	window.tp=b;
})});
