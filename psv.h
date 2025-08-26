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
		bool kp=0;
		std::vector<std::vector<vk::v>> k(int p)override
		{
			if(p==-3)
			{
				return {vk::vs({70,2})};
			}
			else if(p==-2)
			{
				kp=1;
				std::vector<std::vector<vk::v>> tp={vk::vs({51,8,75})};
				tp.insert(tp.end(),ps[s].begin(),ps[s].end());
				return tp;
			}
			else if(p==-1)
			{
				std::vector<std::vector<vk::v>> tp={vk::vs({5,75})};
				if(kp)
				{
					s+=1;
					if(s==ps.size()){s=0;kp=0;}
					else tp.insert(tp.end(),ps[s].begin(),ps[s].end());
				}
				return tp;
			}
			return {};
		}
	};
	inline std::function<std::unique_ptr<ptp>()> sl(const std::vector<std::vector<std::vector<vk::v>>> &p)
	{
		return [p](){return std::make_unique<psv>(psv(p));};
	}
	inline std::vector<std::function<std::unique_ptr<ptp>()>> pss()
	{
		return
		{
			sl({{vk::vs({46,43,4,54,44,38,50,3,70,66,7}),vk::vs({51,8,75})},{vk::vs({75,19,53,5,70})}}),
			sl({{vk::vs({71,14,49,66,3,51,1,76,51,14,66,39,45,1,74,43,1,66,31})}}),
		};
	}
}
