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
#include<mutex>
#include"dl.h"
#include<kk.h>
bool vksvl=0;
struct ksv:ptp
{
	std::vector<std::vector<vk::v>> k(int p)
	{
		if(p==-4)return {};
		auto ps=(p==-3?vk::vs({70,2}):p==-2?vk::vs({51,8,75}):vk::vs({5,75}));
		return {ps,vk::vs({46,5,56,3,51,1,75})};
	}
};
struct dlpv
{
	dl dlr;
	kk tk={.pm=0.0,.m=1.0,.g=1.0};
	jsdp &dp;
	void ck(double kn,bool)
	{
		float b=8;
		float vd=std::min(dp.vpv1/b,dp.vpv2/b);
		if(tk.ck(kn))dp.cnr();
		dlr.cl(dp.vpv1,dp.vpv2,vd,vd*1.2,tk.pm);
	}
};
struct cdpv
{
	cd cdr;
	kk ss={.pm=-M_PI/2.0,.m=M_PI/2.0,.g=M_PI*0.1};
	jsdp &dp;
	double k=0;
	void ck(double kn,bool)
	{
		float b=8;
		if(ss.ck(kn))dp.cnr();
		cdr.cl(dp.vpv1,dp.vpv2,std::min(dp.vpv1/b,dp.vpv2/b),ss.pm);
	}
};
struct jstp
{
	jsdp dp;
	dv dvs;
	sm::m mk;
	nd snd={.dp=dp,.dvs=dvs,.sn=0};
	vk::vks vk;
	dlpv dl={.dp=dp};
	vk::stslp stsl=vk::stslp(vk.mt.outputSampleRate());
	jvn jss=jvn(vk.mt.outputSampleRate(),stsl.pc,&(stsl.vy),[this](){dk();});
	ksv tdv;
	struct scp
	{
		ptp* spk=0;
		jstp& m;
		int np;
		int vs=0;
		std::mutex nm;
		const double snrn=1.0;
		double sjsk;
		void sjskl()
		{
			sjsk=emscripten_get_now()/1000.0;
			MAIN_THREAD_ASYNC_EM_ASM({setTimeout(()=>{Module.ccall('jssnr',null,['number'],[$0])},2.0*$1*1000.0)},&m,snrn);
		}
		void bk(int p)
		{
			if(spk==0)return;
			nm.lock();
			if(1||vs<2)
			{
				np=p;
				if(!vs)
				{
					m.jss.drk();
					std::thread s([this]()
					{
						while(1)
						{
							int p;
							nm.lock();
							p=np;
							bool tc=vs==2;
							vs--;
							if(!tc)sjskl();
							nm.unlock();
							if(!tc)break;
							auto s=spk->k(p);
							for(size_t k=0;k<s.size();k++)m.vk.pmb(s[k],m.stsl.p,&m.stsl);
						}
					});
					s.detach();
				}
				vs=2;
			}
			nm.unlock();
		}
	}sc{.spk=&tdv,.m=*this};
	void dk()
	{
		tdv.dbks([this](){sc.bk(-4);});
		snd.pk=[this](int p){sc.bk(p);};
		dp.pk=[this]()
		{
			[[maybe_unused]]auto md=[this](double,bool)
			{
				int vv=10*((std::min(dp.vpv1,dp.vpv2)/7)/10);
				dv::kvsl v={(dp.vpv1-vv)/2,(dp.vpv2-vv)/2,vv,vv,.25,0,.25,1};
				dv::kvsl dv={(dp.vpv1-vv)/2+vv/10,(dp.vpv2-vv)/2+vv/10,vv*4/5,vv*4/5,0,0,0,1.0};
				dvs.cl({v,dv},dp.vpv1,dp.vpv2);
			};
			dp.sck=
			{
				[this](double kn,bool vpv){dl.ck(kn,vpv);},
				[this](double kn,bool vpv){snd.ck(kn,vpv);},
			};
			{
				using namespace std::placeholders;
				dp.ndk=std::bind(&decltype(snd)::ndck,&snd,_1,_2,_3,_4);
			}
			EM_ASM
			({
				document.addEventListener('keydown',(p)=>
				{
					if(!p.repeat)
					{
						let pt=null;
						if(p.key==' '||p.key=='Enter')pt=-2;
						else if(p.key=='ArrowDown')pt=-1;
						else if(p.key=='ArrowUp')pt=-3;
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
	jst->sc.bk(p);
}
EMSCRIPTEN_KEEPALIVE void jssnr(void* s)
{
	jstp &jst=*(jstp*)s;
	jst.sc.nm.lock();
	if(jst.sc.vs==0&&(emscripten_get_now()/1000.0-jst.sc.sjsk)>jst.sc.snrn)jst.jss.drk(2);
	jst.sc.nm.unlock();
}
}
jstp jst;
