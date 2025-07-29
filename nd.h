#pragma once
#include<jsdp.h>
#include<dv.h>
struct ndtp
{
	jsdp *dp;
	bool n=0;
	int ms1,ns1;
	size_t ndkk,vpkk;
	std::function<void(int)>pk=0;
	void dk()
	{
		ndkk=dp->ndk.size();
		dp->ndk.push_back([this](int kn,bool s,double s1,double s2){ndck(kn,s,s1,s2);});
		vpkk=dp->vppk.size();
		dp->vppk.push_back([this](){n=0;});
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
	size_t ckk,ndkk,vpkk;
	std::vector<dv::kvsl> vs;
	int s=0;
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
	std::vector<dv::kvsl> vs;
		vs.resize(s);
		int s1=ms1,s2=ms2;
		s1-=vv/2;
		if(s<0)s2-=vv;
		for(size_t k=0;k<abs(s);k++)
		{
			vs[k]={s1+vv/10,s2+vv/10,vv*4/5,vv*4/5,1.0f,1.0f,1.0f,.5f};
			s2+=s>0?vv:-vv;
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
