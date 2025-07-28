#pragma once
#include<jsdp.h>
#include<dv.h>
struct ndtp
{
	jsdp *dp;
	bool n=0;
	int ms1,ns1;
	size_t ndkk,vpkk;
	int vv;
	std::function<void(int)>pk=0;
	void vvk()
	{
		vv=10*((std::min(dp->vpv1,dp->vpv2)/9)/10);
	}
	void dk()
	{
		ndkk=dp->ndk.size();
		dp->ndk.push_back([this](int kn,bool s,double s1,double s2){ndck(kn,s,s1,s2);});
		vpkk=dp->vppk.size();
		dp->vppk.push_back([this](){vvk();n=0;});
		vvk();
	}
	~ndtp()
	{
		dp->ndk[ndkk]=0;
		dp->vppk[vpkk]=0;
	};
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
		dp->vppk.push_back([this](){vvk();n=0;});
		vvk();
	}
	void ck(double kn)
	{
		vs.resize(s);
		int s1=ms1,s2=ms2;
		if(sd)
		{
			s2-=vv/2;
			if(!kd)s1-=vv;
		}
		else
		{
			s1-=vv/2;
			if(!kd)s2-=vv;
		}
		for(size_t k=0;k<s;k++)
		{
			vs[k]={s1+vv/10,s2+vv/10,vv*4/5,vv*4/5,1.0f,1.0f,1.0f,.5f};
			if(sd)s1+=kd?vv:-vv;
			else s2+=kd?vv:-vv;
		}
		if(n&&s)dvs->cl(vs,dp->vpv1,dp->vpv2);
	}
	~nd()
	{
		dp->sck[ckk]=0;
		dp->ndk[ndkk]=0;
		dp->vppk[vpkk]=0;
	};
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
				if(s)
				{
					s=0;
					dp->cnr();
				}
			}
			else
			{
				ns1=s1;
				ns2=s2;
				int vk1=ns1-ms1,vk2=ns2-ms2;
				int ns=std::max(abs(vk1),abs(vk2))/vv*(int)(1||abs(vk1)>=2*abs(vk2)||abs(vk2)>=2*abs(vk1));
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
