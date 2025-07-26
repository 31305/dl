#pragma once
#include<emscripten/html5.h>
#include<GLES2/gl2.h>
#include<functional>
struct jsdp
{
	EMSCRIPTEN_WEBGL_CONTEXT_HANDLE ps;
	std::function<void()> pk=[](){};
	size_t tkc=(size_t)this;
	bool db=0;
	void d()
	{
		EM_ASM
		({
			let jsdp=document.createElement('canvas');
			jsdp.id='jsdp'+($0).toString();
			jsdp.style="position:absolute;display:block;width:100%;height:100%";
			jsdp.oncontextmenu="event.preventDefault()";
			jsdp.width=0;
			jsdp.height=0;
			document.body.appendChild(jsdp);
			const l=new ResizeObserver((gs)=>
			{
				const g=gs.find((g)=>g.target===jsdp);
				let vpv1=g.devicePixelContentBoxSize[0].inlineSize;
				let vpv2=g.devicePixelContentBoxSize[0].blockSize;
				console.log(vpv1,vpv2);
				jsdp.width=vpv1;
				jsdp.height=vpv2;
				Module.ccall('jsdpvp',null,['number','number','number'],[$1,vpv1,vpv2]);
			});
			l.observe(jsdp,{box:"device-pixel-content-box"});
		},tkc,this);
	}
};
extern "C"
{
EMSCRIPTEN_KEEPALIVE void jsdpvp(size_t p,int v1,int v2)
{

	auto s=(jsdp*)p;
	if(!s->db)
	{
		s->db=1;
		EmscriptenWebGLContextAttributes dpps;
		emscripten_webgl_init_context_attributes(&dpps);
		dpps.alpha=EM_FALSE;
		dpps.depth=EM_FALSE;
		dpps.stencil=EM_FALSE;
		dpps.antialias=EM_TRUE;
		dpps.majorVersion=1;
		dpps.minorVersion=0;
		s->ps=emscripten_webgl_create_context((std::string("#jsdp")+std::to_string(s->tkc)).c_str(),&dpps);
		emscripten_webgl_make_context_current(s->ps);
		glEnable(GL_BLEND);
		glBlendFunc(GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA);
		s->pk();
	}
	else glViewport(0,0,v1,v2);
}
}
