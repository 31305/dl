#include<emscripten/fetch.h>
#include<emscripten/emscripten.h>
#include<emscripten/threading.h>
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
#include<kk.h>
#include<psv.h>
#include<ns.h>
#include"dl.h"
#include"vsg.h"
bool vksvl=0;
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
	jvn jss=jvn(vk.mt.outputSampleRate(),stsl.pc,&(stsl.vy),[this](){vss();});
	struct scp
	{
		std::unique_ptr<ptp> spk=0;
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
							m.vk.smg=1;
							for(size_t k=0;k<s.size();k++)m.vk.pmb(s[k],m.stsl.p,&m.stsl);
							auto pkk=[](void* p){((ptp*)p)->vtpk();};
							emscripten_sync_run_in_main_runtime_thread(EM_FUNC_SIG_VI,(void(*)(void*))pkk,spk.get());
						}
					});
					s.detach();
				}
				vs=2;
			}
			nm.unlock();
		}
	}sc{.m=*this};
	void jvss(const char* s)
	{
		emscripten_fetch_attr_t l;
		emscripten_fetch_attr_init(&l);
		l.userData=this;
		strcpy(l.requestMethod,"GET");
		l.attributes=EMSCRIPTEN_FETCH_LOAD_TO_MEMORY;
		auto pk=[](emscripten_fetch_t* p)
		{
			std::vector<std::vector<std::vector<vk::v>>> ps;
			if(p->status==200)ps={{vk::vs({71,44,5,71,66,3,75})}};
			else ps={{vk::vs({70,2,71,44,5,71,66,3,75})}};
			((jstp*)(p->userData))->sc.spk=std::make_unique<psv::psv>(ps);
			emscripten_fetch_close(p);
		};
		l.onsuccess=pk;
		l.onerror=pk;
		emscripten_fetch(&l,s);
	}
	void vss()
	{
		auto n=jsn();
		auto ksvv=[this](){sc.spk=std::make_unique<bvv>(vsg());};
		size_t ms=n.find('?');
		if(ms==-1)ms=n.find('#');
		bool ksk=1;
		if(ms!=-1&&ms<n.size()-3&&n[ms+1]=='1'&&n[ms+2]==':')
		{
			bool nv=1;
			for(size_t k=ms+3;k<n.size();k++)if(!(n[k]>='0'&&n[k]<='9')){nv=0;break;}
			if(nv)
			{
				int k=std::stoi(n.substr(ms+3));
				auto p=psv::pss();
				if(k>0)
				{
					if(k<=p.size())
					{
						sc.spk=p[k-1]();
						ksk=0;
					}
				}
			}
		}
		else if(ms!=-1&&ms<n.size()-3&&n[ms+1]=='2'&&n[ms+2]==':')
		{
			emscripten_fetch_attr_t l;
			emscripten_fetch_attr_init(&l);
			l.userData=this;
			strcpy(l.requestMethod,"GET");
			l.attributes=EMSCRIPTEN_FETCH_LOAD_TO_MEMORY;
			auto pk=[](emscripten_fetch_t* p)
			{
				std::vector<std::vector<std::vector<vk::v>>> ps;
				if(p->status==200)
				{
					unsigned int vn=0;
					std::vector<vk::v> vm;
					std::vector<std::vector<vk::v>> vsm;
					for(size_t k=0;k<p->numBytes;k++)
					{
						char t=p->data[k];
						if(t=='\n')
						{
							ps.push_back(vsm);
							vsm={};
						}
						else if(t>='0'&&t<='9')vn=vn*10+(t-'0');
						else if(t==','||t==';')
						{
							if(vn>0)vm.push_back(vk::vkvl(vn));
							vn=0;
							if(t==';'&&vm.size()>0)
							{
								vsm.push_back(vm);
								vm={};
							}
						}
					}
				}
				else ps={{vk::vs({70,2,71,44,5,71,66,3,75})}};
				((jstp*)(p->userData))->sc.spk=std::make_unique<psv::psv>(ps);
				((jstp*)(p->userData))->dk();
				emscripten_fetch_close(p);
			};
			l.onsuccess=pk;
			l.onerror=pk;
			emscripten_fetch(&l,(std::string("https://raw.githubusercontent.com/31305/dl/refs/heads/master/2L/vs/")+n.substr(ms+3)).c_str());
			return;
		}
		if(ksk)ksvv();
		dk();
	}
	void dk()
	{
		sc.spk->dbks([this](){sc.bk(-4);});
		snd.pk=[this](int p){sc.bk(p);};
		dp.pk=[this]()
		{
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
