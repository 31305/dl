#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<nd.h>
#include<GLES2/gl2.h>
struct jstp
{
	jsdp dp;
	dv dvs;
	nd snd={.dp=&dp,.dvs=&dvs};
	void dk()
	{
		dp.pk=[this]()
		{
			dvs.dk();
			dp.sck.push_back([this](double)
			{
				dv::kvsl v={0,0,dp.vpv1,dp.vpv2,0.2578125,0.00390625,0.19140625,1.0};
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
