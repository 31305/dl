const vjs=()=>
{
	const sg=
	[
		{v:[1,43,2,76,46,43,4,54,44,2,77],dc:19939},
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
