export function sb(s)
{
	const dns=
	[
		[47,16,70,43,2,75],
		[32,51,3,75],
		[68,46,32],
		[66,44,11,65,9],
		[56,1,66,46,5,44,9],
		[71,2,60,56,3],
		[48,2,61],
		[49,1,71,66,2],
		[1,48,61,41],
		[70,2,46,3],
		[68,2,47,3]
	];
	if(s<10)return dns[s];
	const pp=
	[
		[32,51,1],
		[68,46,8],
		[66,44,8],
		[56,2,66,13,44],
		[71,2,60,56,1],
		[48,2,61],
		[49,1,71,66,2],
		[1,48,61,5],
		[70,2,46,1],
		[68,2,47,1]
	];
	const tp=
	[
		[68,2,47,1],
		[46,7,76,47,1,66,8,77],
		[66,44,7,76,47,2,66],
		[56,1,66,46,4,44,7,76,47,2,66],
		[71,1,60,56,4,47,2,66],
		[48,1,48,61,8,77],
		[49,1,71,66,1,66,8,77],
		[1,47,10,66,8,77],
		[70,1,46,1,66,8,77],
	];
	if(s<100)
	{
		const dd=s%10;
		const dg=Math.trunc(s/10);
		if(!dd)return ss(tp[dg-1]);
		let p=pp[dd-1];
		let d=tp[dg-1];
		if(dd==1&&dg==1)p.splice(-1,1,4);
		return ss(sd(pp[dd-1],vsk(tp[dg-1])));
	}
	return [73,1,50,14];
}
function vsk(s)
{
	return s.map((v)=>v<43&&(v%3==2)?(v-1):v)
}
export function sd(p,d)
{
	const v1=p.pop();
	const v2=d.shift();
	let mb=[v1,v2];
	return p.concat(mb,d);
}
export function ss(v)
{
	let s=0,psk=null;
	for(let k=0;k<v.length;k++)
	{
		if(v[k]>42)continue;
		const ts=(v[k]-1)%3;
		if(psk!=null&&ts==0)
			v[psk]+=2;
		psk=null;
		if(s==1&&ts==0)psk=k;
		s=ts;
	}
	if(psk!=null)v[psk]+=2;
	return v;
}
