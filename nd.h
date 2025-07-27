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
	void dk()
	{
		vs.reserve(9);
		ckk=dp->sck.size();
		dp->sck.push_back([this](double kn){ck(kn);});
	}
	void ck(double kn)
	{
	}
	~nd()
	{
		dp->sck[ckk]=0;
	}
};

