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
let nrsg=
[
	[
		['🐒',[51,1,71,8,77]],
		['🦍',[53,13,44,14,68,39,77]],
		['🦧',[68,38,45,3,51,1,77]],
		['🐕',[47,46,5]],
		['🦮',[70,4,43,11]],
		['🐩',[53,13,56,57,11]],
		['🐈',[38,66,15,77]]
	],
	[
		['🐅',[46,43,4,54,44,2,77]],
		['🐆',[68,46,10,71,11]],
		['🐎',[2,47,46,3,77]],
		['🦓',[44,4,58,7,45,2,77]],
		['🦌',[50,1,44,7,65,2,77]],
	],
	[
		['🐄',[53,41,77]],
		['🐂',[46,19,48,2,77]],
		['🐃',[75,1,50,7,48,2,77]],
		['🐏',[75,31,48,2,77]],
		['🐑',[75,31,48,11]],
		['🐐',[1,58,2,77]],
		['🐖',[47,16,51,1,44,2,77]],
		['🐪',[14,48,61,44,3,77]],
		['🐫',[68,46,8,51,3,51,13,66]],
		['🦒',[53,44,10,46,11]],
		['🐘',[53,1,58,2,77]],
		['🦣',[71,44,1,66,70,1,53,1,58,2,77]],
		['🦏',[52,1,63,53,11]],
		['🐁',[75,16,48,2,77]],
		['🐇',[47,1,47,2,77]],
		['🦇',[56,2,44,75,1,71,1,66,66,44,1,77]],
		['🦦',[13,68,44,2,77]],
		['🐓',[51,13,51,51,13,61,2,77]],
		['🐧',[49,1,75,13,68,44,1,53,2,77]],
		['🦆',[51,4,44,1,65,63,1,46,2,77]],
		['🦢',[50,1,76,49,2,77]],
		['🦉',[14,45,18,51,1,77]],
		['🦩',[75,1,44,4,45,2,77]],
		['🦚',[75,2,43,18,44,1,77]],
		['🦜',[47,13,51,2,77]],
		['🐊',[75,2,51,3,44,1,77]],
		['🐢',[51,16,44,75,2,77]],
		['🦎',[51,19,51,1,45,4,49,2,77]],
		['🐍',[49,1,44,71,2,77]],
		['🐋',[66,7,75,7,55,53,7,45,2,77]],
		['🐟',[75,2,66,49,43,3,77]],
		['🐙',[1,48,61,5,71,3,68,1,77]],
		['🐚',[47,1,55,52,2,77]],
		['🐌',[47,1,75,73,16,51,2,77]],
		['🦋',[56,8,66,44,1,71,1,66,44,1,77]],
		['🐜',[71,7,71,11,45,3,51,1,77]],
		['🐝',[71,1,69,13,75,1,51,48,2,77]],
		['🦗',[59,7,60,59,11]],
		['🕷️',[16,44,65,1,46,5,74,9,77]],
		['🕸️',[17,44,65,6]],
		['🦂',[46,20,47,56,9,51,1,77]],
		['🦟',[75,2,47,3,51,1,77]],
	]
];
const ppdk=false;
if(!ppdk)nrsg=[nrsg.flat()];
document.body.style.overflow='auto'
ss('vm.js').then(p=>{
	const v=new vp();
	v.dk().then(p=>{
		const vvss=document.createElement('style');
		vvss.textContent=`
		.nv{
			border:.2em solid transparent;
			padding:.3em;
			margin:.1em;
			display:inline-block;
		}
		.nv:active{
			border-color:white;
		}
		`;
		document.head.appendChild(vvss);
		const s=document.createElement('div');
		s.style.color='white'
		s.style.fontFamily='monospace';
		s.style.margin='1em'
		s.style.userSelect='none'
		s.style.fontSize='20px'
		if(!ppdk)s.style.textAlign='center'
		document.body.appendChild(s);
		let pkk=null;
		const sk=(k)=>{
			if(ppdk)s.innerHTML='<strong>'+(k+1).toString()+'/'+nrsg.length.toString()+'</strong> ';
			const nk=document.createElement('span');
			nk.innerHTML='<strong>⏭</strong>';
			nk.className='nv';
			nk.style.userSelect='none';
			nk.style.fontSize='32px';
			nk.svs=(k)=>{nk.svk=k;nk.style.backgroundColor=k==0?'red':k==1?'#cca200':'green'};
			nk.svs(0);
			const knl=document.createElement('span');
			const knlv=(n)=>{knl.innerText=n.toFixed(2).toString().padStart(5,'0')}
			knlv(0);
			nk.kns=true;
			const pss=[]
			const pssv=(p,k)=>{pss[k].style.backgroundColor=p?'#555580':'black'}
			nk.onclick=()=>{
				if(nk.svk==2){sk(k+1);return;}
				else if(nk.svk!=0||v.bs)return;
				nk.svs(1);
				const ps=new Set();
				while(ps.size<Math.min(5,nrsg[k].length))
					ps.add(Math.floor(Math.random()*nrsg[k].length))
				const pk=()=>
				{
					const tk=ps.values().next().value;
					const b=nrsg[k][tk][1];
					let ns=0;
					for(let k=b.length-1;k>=0;k--)
						if(b[k]<43){ns=b[k];break;}
					const sv=(ns-1)%3==1;
					const vk=3;
					knlv(vk);
					v.b(b.concat([49,16+2*Number(sv),56,43,1,66,4,75])).then(()=>{
						nk.kn=Date.now();
						nk.kns=true;
						const nkk=()=>
						{
							nk.svs(0);
							knlv(0);
							pkk=null;
						}
						pkk=(tkk)=>
						{
							nk.kns=false;
							if(tkk==tk&&Date.now()-nk.kn<vk*1000)
							{
								ps.delete(tk);
								pssv(1,tk);
								v.b(nrsg[k][tk][1]).then(()=>{
									pssv(0,tk);
									if(ps.size>0)pk();
									else
									{
										nk.svs(2);
										knlv(0);
										pkk=null;
									}
								})
							}
							else
							{
								nkk();
								pssv(1,tkk);
								v.b(nrsg[k][tkk][1]).then(()=>pssv(0,tkk))
							}
						}
						const knlk=()=>
						{
							if(!nk.kns)return;
							const n=Math.max(0,vk-(Date.now()-nk.kn)/1000);
							knlv(n);
							if(n!=0)
								requestAnimationFrame(knlk);
							else nkk();
						}
						knlk();
					});
				}
				pk();
			}
			if(ppdk)if(k<nrsg.length-1)
			{
				s.appendChild(nk);
				s.append(' ');
				s.appendChild(knl);
			}
			if(ppdk)s.appendChild(document.createElement('p'));
			if(!ppdk)s.style.margin='0px';
			for(let pk=0;pk<nrsg[k].length;pk++)
			{
				const p=nrsg[k][pk];
				const ps=document.createElement('span');
				pss.push(ps);
				ps.innerText=p[0];
				ps.onclick=()=>{
					if(v.bs)return;
					else if(pkk!=null)pkk(pk);
					else
					{
						pssv(1,pk);
						navigator.clipboard.writeText(p[0])
						v.b(p[1]).then(()=>{pssv(0,pk)})
					}
				};
				ps.style.userSelect='none';
				ps.style.fontSize=ppdk?'40px':'60px';
				if(!ppdk)
				{
					ps.style.borderWidth='.05em';
					ps.style.padding='.1em';
				}
				ps.className='nv';
				s.appendChild(ps);
			}
		}
		sk(0);
	});
});
