#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<nd.h>
#include<GLES2/gl2.h>
#include<vp.h>
struct jstp
{
	jsdp dp;
	dv dvs;
	ndtp snd={.dp=&dp};
	vp* vps=0;
	void dk()
	{
		snd.pk=[this](int p)
		{
			if(vps)vps->bk(p);
		};
		dp.pk=[this]()
		{
			dvs.dk();
			dp.sck.push_back([this](double)
			{
				int vv=10*((std::min(dp.vpv1,dp.vpv2)/7)/10);
				dv::kvsl v={(dp.vpv1-vv)/2,(dp.vpv2-vv)/2,vv,vv,.25,0,.25,1};
				dv::kvsl dv={(dp.vpv1-vv)/2+vv/10,(dp.vpv2-vv)/2+vv/10,vv*4/5,vv*4/5,0,0,0,1.0};
				dvs.cl({v,dv},dp.vpv1,dp.vpv2);
			});
			snd.dk();
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
						if(pt!=null)Module.ccall('jstnk',null,[number,number],[$0,pt]);
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
int main()
{
	jst.dk();
	return 0;
}
