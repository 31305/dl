#pragma once
#include<vk/vk.h>
#include<jss.h>
struct ptp
{
	virtual std::vector<vk::v> operator()(int p)=0;
};
struct sj
{
	std::vector<vk::v> s;
	std::vector<sj> pj;
	std::function<void()>pk;
};
inline sj sjk()
{
	return {.pj={}};
}
