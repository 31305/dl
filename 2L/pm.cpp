#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<GLES2/gl2.h>
dv dvs;
bool pd(double,void*)
{
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
	dv::kvsl k2={ -0.8f, -0.5f, 0.9f, 0.9f, 1.0f, 0.0f, 0.0f, 0.5f };
	dv::kvsl k1={ 0, -0.5f, 0.9f, 0.9f, 1.0f, 1.0f, 0.0f, 0.5f };
	dvs.cl({k1,k2});
	return 1;
}
jsdp dp;
int main()
{
	dp.pk=[]()
	{
		dvs.dk();
		printf("pk\n");
	    emscripten_request_animation_frame_loop(pd,0);
	};
	dp.d();
	return 0;
}
