#pragma once
#include<emscripten/html5.h>
#include<GLES2/gl2.h>
struct jsdp
{
	EMSCRIPTEN_WEBGL_CONTEXT_HANDLE ps;
	void d()
	{
		EM_ASM
		({
			let jsdp=document.createElement('canvas');
			jsdp.id='jsdp';
			jsdp.style="position:absolute;display:block;width:100%;height:100%";
			jsdp.oncontextmenu="event.preventDefault()"
			jsdp.width=0;
			jsdp.height=0;
			document.body.appendChild(jsdp);
		});
		EmscriptenWebGLContextAttributes dpps;
		emscripten_webgl_init_context_attributes(&dpps);
		dpps.alpha=EM_FALSE;
		dpps.depth=EM_FALSE;
		dpps.stencil=EM_FALSE;
		dpps.antialias=EM_TRUE;
		dpps.majorVersion=1;
		dpps.minorVersion=0;
		ps=emscripten_webgl_create_context("jsdp",&dpps);
		emscripten_webgl_make_context_current(ps);
		glEnable(GL_BLEND);
		glBlendFunc(GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA);
	}
};
