#pragma once
#include<vk/vk.h>
#include<thread>
struct vp
{
	stslp* stsl;
	vks* vk;
	virtual void bk(int){};
};
struct pvp:vp
{
	std::thread s;
	void bk(int p)
	{
		s=std::thread([this](){vk->pmb(vs({51,8,75}),stsl->p,stsl);});
	}
};
