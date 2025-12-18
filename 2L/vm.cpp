#include<vk/vk.h>
#include<emscripten/emscripten.h>
#include<jss.h>
#include<mutex>
#include<emscripten/threading.h>
bool vksvl=0;
struct vm
{
	vk::vks vk;
	vk::stslp stsl=vk::stslp(vk.mt.outputSampleRate());
	jvn jss=jvn(vk.mt.outputSampleRate(),stsl.pc,&(stsl.vy),[](){EM_ASM({Module.dk()});});
	std::mutex nm;
	bool k=0;
	const double snrn=1;
	double sjsk;
	void b(std::span<const unsigned char> vn)
	{
		if(k)return;
		nm.lock();
		jss.drk();
		k=1;
		std::thread s([this,&vn]()
		{
			vk.smg=1;
			vk.pmb(vk::vsp(vn),stsl.p,&stsl);
			k=0;
			sjsk=emscripten_get_now()/1000.0;
			MAIN_THREAD_ASYNC_EM_ASM
			({
					Module.vppk();
					setTimeout(()=>{Module.ccall('jssnr',null,['number'],[$0])},2.0*$1*1000.0);
			},this,snrn);
		});
		s.detach();
		nm.unlock();
	}
};
vm v;
extern "C"
{
EMSCRIPTEN_KEEPALIVE void jb(unsigned char* vk,int vs)
{
	v.b(std::span<const unsigned char>((unsigned char*)vk,vs));
}
EMSCRIPTEN_KEEPALIVE void jssnr(void* s)
{
	vm &v=*(vm*)s;
	v.nm.lock();
	if(v.k==0&&(emscripten_get_now()/1000.0-v.sjsk)>v.snrn)v.jss.drk(2);
	v.nm.unlock();
}
}
