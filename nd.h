#pragma once
#include<jsdp.h>
#include<dv.h>
struct ndtp
{
	jsdp *dp;
	bool n=0;
	int ms1,ns1;
	std::function<void(int)>pk=0;
	void ck(double,bool vpv)
	{
		if(vpv)n=0;
	}
	void ndck(int kn,bool ps,double s1,double s2)
	{
		if(!n)
		{
			if(kn==2)
			{
				n=1;
				ms1=s1;
				ns1=s1;
			}
		}
		else
		{
			if(kn==3||kn==4||!ps)
			{
				n=0;
				if(kn==4&&pk)pk(0);
			}
			else
			{
				ns1=s1;
				int vk1=ns1-ms1;
				int vv=10*((std::min(dp->vpv1,dp->vpv2)/9)/10);
				if(abs(vk1)>=vv)
				{
					n=0;
					if(pk)pk(vk1>0?1:-1);
				}
			}
		}
	}
};
struct nd
{
	jsdp *dp;
	dv* dvs;
	std::function<void(int)>pk=0;
	bool n=0;
	int ms1,ms2,ns2;
	std::vector<dv::kvsl> vs;
	int s=0;
	int vvk()
	{
		return 10*((std::min(dp->vpv1,dp->vpv2)/9)/10);
	}
	void ck(double kn,bool vpv)
	{
		if(vpv){n=0;s=0;}
		if(!n)return;
		int vv=vvk();
		vs.resize(s);
		int s1=ms1,s2=ms2;
		s1-=vv/2;
		if(s<0)s2-=vv;
		for(size_t k=0;k<abs(s);k++)
		{
			vs[k]={s1+vv/10,s2+vv/10,vv*4/5,vv*4/5,1.0f,1.0f,1.0f,.5f};
			s2+=s>0?vv:-vv;
		}
		if(s!=0)dvs->cl(vs,dp->vpv1,dp->vpv2);
	}
	void ndck(int kn,bool ps,double s1,double s2)
	{
		if(!n)
		{
			if(kn==2)
			{
				n=1;
				ms1=s1;
				ms2=s2;
				ns2=s2;
				s=0;
			}
		}
		else
		{
			if(kn==3||kn==4||!ps)
			{
				n=0;
				if(s)
				{
					s=0;
					dp->cnr();
				}
				if(kn==4&&pk)pk(abs(s));
			}
			else
			{
				int vv=vvk();
				ns2=s2;
				int vk2=ns2-ms2;
				int ns=vk2/vv;
				if(ns!=s)
				{
					dp->cnr();
					s=ns;
				}
			}
		}
	}
};
