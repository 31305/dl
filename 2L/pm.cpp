#include<emscripten/emscripten.h>
#include<jsdp.h>
#include<dv.h>
#include<GLES2/gl2.h>
dv dvs;
bool pd(double,void*)
{
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
	dv::kvsl k1={ -0.8f, -0.5f, 0.9f, 0.9f, 1.0f, 0.0f, 0.0f, 0.5f };
	dvs.cl(k1);
	return 0;
}
int main()
{
	jsdp dp;
	dp.d();
	dvs.dk();
    emscripten_request_animation_frame(pd,0);
	return 0;
}
