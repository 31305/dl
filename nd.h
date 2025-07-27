#pragma once
#include<jsdp.h>
#include<dv.h>
struct nd
{
	jsdp *dp;
	bool n=0;
	int ms1,ms2,ns1,ns2;
	size_t ckk,ndkk;
	std::vector<dv::kvsl> vs;
	bool sd,kd;
	int s=0;
	void dk()
	{
		vs.reserve(9);
		ckk=dp->sck.size();
		dp->sck.push_back([this](double kn){ck(kn);});
		ndkk=dp->ndk.size();
		dp->ndk.push_back([this](int kn,bool s,double s1,double s2){ndck(kn,s,s1,s2);});
	}
	void ck(double kn)
	{
	}
	~nd()
	{
		dp->sck[ckk]=0;
		dp->ndk[ndkk]=0;
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
			}
		}
	}
};
