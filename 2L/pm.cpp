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
			snd.dk();
			printf("pk\n");
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
