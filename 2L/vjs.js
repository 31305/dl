const vjs=()=>
{
	const sg=
	[
		{v:[51,2,47,56,9,45,45,37,71,4,47,2,45,3,51,48,1,65,1,77],dc:698},
	];
	sg.dk=0;
	let dc=sg[0].dc;
	for(let k=0;k<sg.length;k++)
	{
		if(!sg[k].dc)sg[k].dc=dc;
		else dc=sg[k].dc;
		if(sg[k].dk)sg.dk=k;
	}
	return sg;
}
export default vjs;
