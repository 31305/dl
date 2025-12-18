#include<vk/vk.h>
#include<emscripten.h>
struct vm
{
	vk::vks vk;
	vk::stslp stsl=vk::stslp(vk.mt.outputSampleRate());
	jvn jss=jvn(vk.mt.outputSampleRate(),stsl.pc,&(stsl.vy),[this](){vss();});
	std::mutex nm;
	bool k=0;
	bool b(std::span<unsigned char> vn,void(*pk)(void*),void* nv)
	{
		nm.lock();
		k=1;

		nm.unlock();
	}
}
