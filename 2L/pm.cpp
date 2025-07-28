#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<nd.h>
#include<GLES2/gl2.h>
struct jstp
{
	jsdp dp;
	dv dvs;
	ndtp snd={.dp=&dp};
	void dk()
	{
		snd.pk=[](int p){printf("%d\n",p);};
		dp.pk=[this]()
		{
			dvs.dk();
			dp.sck.push_back([this](double)
			{
				int vv=10*((std::min(dp.vpv1,dp.vpv2)/9)/10);
				dv::kvsl v={(dp.vpv1-vv)/2,(dp.vpv2-vv)/2,vv,vv,0.2578125,0.00390625,0.19140625,1.0};
				dvs.cl({v},dp.vpv1,dp.vpv2);
			});
			snd.dk();
		};
		dp.dk();
	}
};
jstp jst;
int main()
{
	jst.dk();
	return 0;
}
