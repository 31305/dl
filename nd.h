#pragma once
#include<jsdp.h>
#include<dv.h>
struct nd
{
	jsdp *dp;
	bool n=0;
	int ms1,ms2,ns1,ns2;
	size_t ckk,ndkk,vpkk;
	std::vector<dv::kvsl> vs;
	int s=0;
	bool sd,kd;
	int vv;
	void vvk()
	{
		vv=10*((std::min(dp->vpv1,dp->vpv2)/9)/10);
	}
	void dk()
	{
		vs.reserve(9);
		ckk=dp->sck.size();
		dp->sck.push_back([this](double kn){ck(kn);});
		ndkk=dp->ndk.size();
		dp->ndk.push_back([this](int kn,bool s,double s1,double s2){ndck(kn,s,s1,s2);});
		vpkk=dp->vppk.size();
		dp->vppk.push_back([this](){vvk();});
	}
	void ck(double kn)
	{
		printf("s %d sd %d kd %d\n",s,sd,kd);
	}
	~nd()
	{
		dp->sck[ckk]=0;
		dp->ndk[ndkk]=0;
		dp->vppk[vpkk]=0;
	};
	void ndck(int kn,bool s,double s1,double s2)
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
			if(kn==3||kn==4||!s)
			{
				n=0;
				if(s)dp->cnr();
			}
			else
			{
				ns1=s1;
				ns2=s2;
				int vk1=ns1-ms1,vk2=ns2-ms2;
				printf("vk1 %d vk2 %d\n",vk1,vk2);
				int ns=std::max(vk1,vk2)>=vv&&(abs(vk1)>=2*abs(vk2)||abs(vk2)>=2*abs(vk1));
				if(ns!=s)
				{
					dp->cnr();
					s=ns;
				}
				if(ns)
				{
					bool nsd=abs(vk1)>abs(vk2);
					bool nkd=nsd?vk1>0:vk2>0;
					if(nsd!=sd||nkd!=kd)
					{
						sd=nsd;
						kd=nkd;
						dp->cnr();
					}
				}
			}
		}
	}
};
