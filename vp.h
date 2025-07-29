#pragma once
#include<vk/vk.h>
#include<thread>
#include<jss.h>
struct vp
{
	vk::stslp* stsl;
	vk::vks* vkm;
	jvn* jss;
	virtual void bk(int){};
};
struct pvp:vp
{
	void bk(int p)
	{
		printf("bk\n");
		jss->drk();
		stsl->vy.v=1;
		std::thread s([this](){vkm->pmb(vk::vs({51,8,75}),stsl->p,stsl);});
		s.detach();
	}
};
