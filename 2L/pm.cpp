#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<m.h>
#include<nd.h>
#include<GLES2/gl2.h>
#include<vp.h>
#include<jss.h>
#include<vk/vk.h>
bool vksvl=0;
pvp pv;
struct jstp
{
	jsdp dp;
	dv dvs;
	sm::m mk;
	ndtp snd={.dp=dp};
	vp* vps=&pv;
	vk::vks vk;
	vk::stslp stsl=vk::stslp(vk.mt.outputSampleRate());
	jvn jss=jvn(vk.mt.outputSampleRate(),stsl.pc,&(stsl.vy),[this](){dk();});
	void dk()
	{
		vps->stsl=&stsl;
		vps->vkm=&vk;
		vps->jss=&jss;
		snd.pk=[this](int p)
		{
			if(vps)vps->bk(p);
		};
		dp.pk=[this]()
		{
			dvs.dk();
			mk.dk();
			[[maybe_unused]]auto md=[this](double,bool)
			{
				int vv=10*((std::min(dp.vpv1,dp.vpv2)/7)/10);
				dv::kvsl v={(dp.vpv1-vv)/2,(dp.vpv2-vv)/2,vv,vv,.25,0,.25,1};
				dv::kvsl dv={(dp.vpv1-vv)/2+vv/10,(dp.vpv2-vv)/2+vv/10,vv*4/5,vv*4/5,0,0,0,1.0};
				dvs.cl({v,dv},dp.vpv1,dp.vpv2);
			};
			auto pkd=[this](double kn,bool vpv)
			{
				std::vector<sm::svm> p=
				{
					{{-1,-1,-1},{1,0,0,1}},
					{{1,-1,-1},{0,1,0,1}},
					{{0,1,-1},{0,0,1,1}},
					{.sn={0,0,1},.vn={1,0,0,1}},
					{.sn={1,0,1},.vn={1,0,0,1}},
					{.sn={0,1,1},.vn={1,0,0,1}},
				};
				mk.mk(p,dp.vpv1,dp.vpv2,70,0,0,-5);
			};
			dp.sck=
			{
				md,
				pkd,
				[this](double kn,bool vpv)
				{
					snd.ck(kn,vpv);
				}
			};
			{
				using namespace std::placeholders;
				dp.ndk=std::bind(&ndtp::ndck,&snd,_1,_2,_3,_4);
			}
			EM_ASM
			({
				document.addEventListener('keydown',(p)=>
				{
					if(!p.repeat)
					{
						let pt=null;
						if(p.key=='ArrowUp'||p.key=='ArrowDown')pt=0;
						else if(p.key=='ArrowRight')pt=1;
						else if(p.key=='ArrowLeft')pt=-1;
						if(pt!=null)Module.ccall('jstnk',null,['number','number'],[$0,pt]);
					}
				});
			},this);
		};
		dp.dk();
	}
};
extern "C"
{
EMSCRIPTEN_KEEPALIVE void jstnk(void *s,int p)
{
	auto jst=(jstp*)s;
	if(jst->vps)jst->vps->bk(p);
}
}
jstp jst;
