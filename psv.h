#pragma once
#include<vp.h>
#include<vector>
namespace psv
{
	struct psv:ptp
	{
		const std::vector<std::vector<std::vector<vk::v>>> ps;
		psv(const decltype(ps) &p):ps(p){};
		size_t s=0;
		std::vector<std::vector<vk::v>> k(int p)override
		{
			if(p==-4)return {};
			auto ps=(p==-3?vk::vs({70,2}):p==-2?vk::vs({51,8,75}):vk::vs({5,75}));
			return {ps,vk::vs({46,5,56,3,51,1,75})};
		}
	};
	inline std::vector<std::vector<std::vector<std::vector<vk::v>>>> pss()
	{
		return {};
	}
}
