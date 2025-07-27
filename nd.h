#pragma once
#include<jsdp.h>
#include<dv.h>
struct nd
{
	jsdp *dp;
	bool n=0;
	int ms1,ms2,ns1,ns2;
	size_t ckk;
	std::vector<dv::kvsl> vs;
	bool sd,kd;
	int s=0;
	void dk()
	{
		vs.reserve(9);
		ckk=dp->sck.size();
		dp->sck.push_back([this](double kn){ck(kn);});
		EM_ASM({
			function k(p,kn)
			{
				let s=document.body.getBoundingClientRect();
				Module.ccall('ndck',null,['number','number','number','number','number'],
					[$0,],kn,(p.pressure||(p.buttons==1))?true:false,p.clientX/s.width,p.clientY/s.height);
				console.log(p.buttons);
			}
			document.body.addEventListener("pointermove",(p)=>k(p,1));
			document.body.addEventListener("pointerdown",(p)=>k(p,2));
			document.body.addEventListener("pointerout",(p)=>k(p,3));
			document.body.addEventListener("pointerup",(p)=>k(p,4));
		},this);
	}
	void ck(double kn)
	{
	}
	~nd()
	{
		dp->sck[ckk]=0;
	}
};
extern "C"
{
EMSCRIPTEN_KEEPALIVE inline void ndck(void *p,int kn,bool s,double s1,double s2)
{
	nd* n=(nd*)p;
	if(!n->n)
	{
		if(kn==2)
		{
			n->n=1;
			n->ms1=s1*(double)n->dp->vpv1;
			n->ms2=s2*(double)n->dp->vpv2;
			n->ns1=n->ms1;
			n->ns2=n->ms2;
		}
	}
	else
	{
		if(kn==3||kn==4||!s)
		{
			n->n=0;
			if(n->s)n->dp->cnr();
		}
		else
		{
			n->ns1=s1*(double)n->dp->vpv1;
			n->ns2=s2*(double)n->dp->vpv2;
		}
	}
}
}
