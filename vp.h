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
	bool vs=0;
	void bk(int p)
	{
		if(!vs)
		{
			jss->drk();
			vs=1;
			std::thread s([this](){vkm->pmb(vk::vs({51,8,75}),stsl->p,stsl);vs=0;});
			s.detach();
		}
	}
};
