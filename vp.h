#pragma once
#include<vk/vk.h>
struct ptp
{
	virtual std::vector<std::vector<vk::v>> k(int)=0;
};
struct ksv:ptp
{
	std::vector<std::vector<vk::v>> k(int p)
	{
		auto ps=(p==-3?vk::vs({70,2}):p==-2?vk::vs({51,8,75}):vk::vs({5,75}));
		return {ps,vk::vs({46,5,56,3,51,1,75})};
	}
};
struct sj
{
	std::vector<vk::v> s;
	std::vector<sj> pj;
	std::function<void()>pk;
};
