#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<m.h>
#include<nd.h>
#include<GLES2/gl2.h>
#include<vp.h>
#include<jss.h>
#include<vk/vk.h>
#include<cd.h>
bool vksvl=0;
pvp pv;
std::vector<sm::svm> jsml();
struct jstp
{
	jsdp dp;
	dv dvs;
	cd cdr;
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
				glDisable(GL_DEPTH_TEST);
				dvs.cl({v,dv},dp.vpv1,dp.vpv2);
				glEnable(GL_DEPTH_TEST);
			};
			[[maybe_unused]]auto pkd=[this](double kn,bool vpv)
			{
				mk.mk(jsml(),dp.vpv1,dp.vpv2,std::max(90.0,2.0*180.0*std::atan((float)dp.vpv2/(float)dp.vpv1)/M_PI),0,0,-2);
			};
			dp.sck=
			{
				[this](double,bool)
				{
					cdr.cl(dp.vpv1,dp.vpv2,std::min(dp.vpv1/8,dp.vpv2/8),0);
				},
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
std::vector<sm::svm> jsml()
{
	sm::cs v={.6,.6,.3,1};
	sm::cs dv={.2,.3,.4,1};
	float m=.25,p=.25;
	return
	{
		{{-1,-1,0},v},
		{{1,-1,0},v},
		{{1,1,0},v},
		{{-1,-1,0},v},
		{{-1,1,0},v},
		{{1,1,0},v},
		{{-1,-m+.75f,0},dv},
		{{1,-m+.75f,0},dv},
		{{1,-m+.75f,p},dv},
		{{1,-m+.75f,p},dv},
		{{-1,-m+.75f,p},dv},
		{{-1,-m+.75f,0},dv},
		{{-1,m+.75f,0},dv},
		{{1,m+.75f,0},dv},
		{{1,m+.75f,p},dv},
		{{1,m+.75f,p},dv},
		{{-1,m+.75f,p},dv},
		{{-1,m+.75f,0},dv},
		{{-1,-m+.75f,p},dv},
		{{1,-m+.75f,p},dv},
		{{1,m+.75f,p},dv},
		{{-1,-m+.75f,p},dv},
		{{-1,m+.75f,p},dv},
		{{1,m+.75f,p},dv},
		{{-1,-m-.75f,0},dv},
		{{1,-m-.75f,0},dv},
		{{1,-m-.75f,p},dv},
		{{1,-m-.75f,p},dv},
		{{-1,-m-.75f,p},dv},
		{{-1,-m-.75f,0},dv},
		{{-1,m-.75f,0},dv},
		{{1,m-.75f,0},dv},
		{{1,m-.75f,p},dv},
		{{1,m-.75f,p},dv},
		{{-1,m-.75f,p},dv},
		{{-1,m-.75f,0},dv},
		{{-1,-m-.75f,p},dv},
		{{1,-m-.75f,p},dv},
		{{1,m-.75f,p},dv},
		{{-1,-m-.75f,p},dv},
		{{-1,m-.75f,p},dv},
		{{1,m-.75f,p},dv},
	};
}
