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
			sl({{vk::vs({75,13,68,44,1,65,11,43,3,75,7,68,2,75})}}),
			sl({{vk::vs({46,4,66,5,43,3,70,1,75})},{vk::vs({7,66,38,68,44,15,75,4,53,44,5,65,9,68,19,47,43,1,70,66,31})}}),
			sl({
					{vk::vs({75,1,48,10,74,5,58,3,70,1,75})},
					{vk::vs({31,66,1,68,46,7,48,1,43,32,51,8,75})},
					{vk::vs({51,8,76,56,9,70,66,7,66,2,75})},
					{vk::vs({75,2,70,75,6,70,7,45,31,52,7,48,43,4,75,11,66,9})}
			}),
			sl({{vk::vs({5,49,3,70,1,75})}}),
			sl({{vk::vs({71,11,62,9,51,4})}}),
			sl({{vk::vs({71,14,49,66,3,51,1,75})}}),
		};
	}
}
