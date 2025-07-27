#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<nd.h>
#include<GLES2/gl2.h>
struct jstp
{
	jsdp dp;
	nd snd;
	dv dvs;
	void dk()
	{
		dp.pk=[this]()
		{
			dvs.dk();
			printf("pk\n");
		};
		dp.d();
	}
};
jstp jst;
int main()
{
	jst.dk();
	return 0;
}
