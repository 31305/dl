#pragma once
#include<jsdp.h>
#include<dv.h>
struct nd
{
	jsdp &dp;
	dv& dvs;
	std::function<void(int)>pk=0;
	bool n=0;
	int ms1,ms2,ns1,ns2;
	std::vector<dv::kvsl> vs;
	int s=0;
	bool sn=0;
	int vvk()
	{
		return 10*((std::min(dp.vpv1,dp.vpv2)/9)/10);
	}
	void ck(double kn,bool vpv)
	{
		if(vpv){n=0;s=0;}
		if(!n||!sn||!s)return;
		int vv=vvk();
		vs.resize(abs(s));
		int s1=ms1,s2=ms2;
		s1-=vv/2;
		if(s<0)s2-=vv;
		for(size_t k=0;k<abs(s);k++)
		{
			vs[k]={s1+vv/10,s2+vv/10,vv*4/5,vv*4/5,1.0f,1.0f,.0f,.3f};
			s2+=s>0?vv:-vv;
		}
		dvs.cl(vs,dp.vpv1,dp.vpv2);
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
				ns1=s1;
				ns2=s2;
				s=0;
			}
		}
		else
		{
			if(kn==3||kn==4||!ps)
			{
				n=0;
				if(sn)
				{
					if(kn==4&&pk)pk(abs(s));
					if(s)
					{
						s=0;
						dp.cnr();
					}
				}
				else if(kn==4&&pk)
				{
					ns1=s1;
					int vk1=ns1-ms1;
					ns2=s2;
					int vk2=ns2-ms2;
					int vv=10*((std::min(dp.vpv1,dp.vpv2)/9)/10);
					if(abs(vk2)>=vv&&abs(vk2)>abs(vk1))
						pk(vk2<0?-1:-3);
					else if(abs(vk1)<vv&&abs(vk2)<vv)pk(-2);
				}
			}
			else if(kn==2)
			{
				n=1;
				ms1=s1;
				ns1=s1;
				ms2=s2;
				ns2=s2;
			}
			else if(sn)
			{
				int vv=vvk();
				ns2=s2;
				int vk2=ns2-ms2;
				int ns=vk2/vv;
				if(ns!=s)
				{
					dp.cnr();
					s=ns;
				}
			}
		}
	}
};
