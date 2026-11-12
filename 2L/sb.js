export function vg(p,d)
{
	let t=[];
	if(p[0].length)t=p;
	else t.push(p);
	if(d[0].length)t.push(...d)
	else t.push(d);
	return t;
}
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
		if(dd==2&&dg<4)p.splice(-1,1,5);
		if(dd==3&&dg<4)p=[66,44,2,43,1,49]
		if(dd==6&&dg==1){p=[48,38];d=[63,1,47,1];}
		return ss(sd(p,vsk(d)));
	}
	return [73,1,50,14];
}
function vsk(s)
{
	return s.map((v)=>v<43&&(v%3==2)?(v-1):v)
}
export function sd(p,d)
{
	const n=(s,k)=>s[s.length-k];
	console.log(n(d,1))
	const sg=(v)=>v<76&&v>50&&v%5!=1&&v%5!=2
	const ng=(v)=>v<76&&v>50&&(v%5==1||v%5==2)
	const nt=(v)=>v>=43&&v<=46
	if(n(p,1)==49&&(sg(d[0])||nt(d[0])))
		p.splice(-2,2,37+(n(p,2)-1)%3)
	if(ng(n(p,1))&&(d[0]<43||nt(d[0])||sg(d[0])))
		p.splice(-1,1,n(p,1)+2)
	if(n(p,1)==44&&ng(d[0])&&d[0]>55&&d[0]<70)
		p.splice(-1,1,47+Math.trunc(d[0]/5)-11)
	if(n(p,1)==44&&ng(d[0])&&(d[0]<55||d[0]>70))
		p.splice(-1,1,77)
	if(n(p,1)==44&&d[0]>=47&&d[0]<49)
		p.splice(-1,1,d[0])
	if(n(p,1)<=30&&d[0]<=30&&Math.trunc((n(p,1)-1)/6)==Math.trunc((d[0]-1)/6))
	{
		p.splice(-1,1,6*(Math.trunc((d[0]-1)/6))+4+(n(p,1)%3==2||d[0]%3==2))
		d.shift();
	}
	if(n(p,1)==8&&d[0]==1)
	{
		p.splice(-1,1,43);
		d[0]=3;
	}
	if(n(p,1)==63&&d[0]==70)
	{
		p.splice(-1,1,65);
		d[0]=65;
	}
	return p.concat(d);
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
