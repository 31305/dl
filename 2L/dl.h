#pragma once
#include<GLES2/gl2.h>
#include<cstdlib>
struct dl
{
	const char* snm = R"(
	attribute vec2 ksn;
	void main()
	{
		gl_Position=vec4(ksn, 0.0, 1.0);
	}
	)";

	const char* vnm = R"(
	precision mediump float;
	uniform float pvd;
	uniform float dvd;
	uniform float kb;
	uniform vec2 v;
	void main()
	{
		vec2 dvn=(gl_FragCoord.xy-0.5*v);
		float d=length(dvn);
		float vk=sqrt(0.5);
		float g=min(1.0,(dvd-d)/(dvd-pvd)-1.0+kb);
		gl_FragColor=vec4(1.0,1.0,1.0,g*min(1.0-smoothstep(dvd-2.0*vk,dvd,d),smoothstep(pvd-2.0*vk,pvd,d)));
	}
	)";


	GLuint vsnm=0,st=0;
	GLint ksn;
	GLint bv;
	GLint dvdp,pvdp,kbp;

	void dk() {
		auto k = [](GLenum pk, const char* l) -> GLuint {
			GLuint ps = glCreateShader(pk);
			glShaderSource(ps, 1, &l, nullptr);
			glCompileShader(ps);
			return ps;
		};

		GLuint psnm = k(GL_VERTEX_SHADER, snm);
		GLuint pvnm = k(GL_FRAGMENT_SHADER, vnm);

		vsnm = glCreateProgram();
		glAttachShader(vsnm, psnm);
		glAttachShader(vsnm, pvnm);
		glLinkProgram(vsnm);
		glUseProgram(vsnm);

		ksn=glGetAttribLocation(vsnm,"ksn");
		pvdp=glGetUniformLocation(vsnm,"pvd");
		dvdp=glGetUniformLocation(vsnm,"dvd");
		kbp=glGetUniformLocation(vsnm,"kb");
		bv=glGetUniformLocation(vsnm,"v");

		glGenBuffers(1, &st);
	}
	inline float smpv1(float s,int v)
	{
		return 2.0f*(float)s/(float)v-1.0f;
	}
	inline float smpv2(float s,int v)
	{
		return 1.0-2.0f*(float)s/(float)v;
	}
	bool dkk=0;
	inline void cl(int vpv1,int vpv2,float pvd,float dvd,float kb)
	{
		if(!dkk)
		{
			dkk=1;
			dk();
		}
		float s1=vpv1/2.0,s2=vpv2/2.0;
		float vd=dvd;
		float sn[6*2]=
		{
			smpv1(s1-vd,vpv1),smpv2(s2-vd,vpv2),
			smpv1(s1+vd,vpv1),smpv2(s2-vd,vpv2),
			smpv1(s1+vd,vpv1),smpv2(s2+vd,vpv2),
			smpv1(s1-vd,vpv1),smpv2(s2-vd,vpv2),
			smpv1(s1-vd,vpv1),smpv2(s2+vd,vpv2),
			smpv1(s1+vd,vpv1),smpv2(s2+vd,vpv2),
		};
		glUseProgram(vsnm);
		glBindBuffer(GL_ARRAY_BUFFER, st);
		glBufferData(GL_ARRAY_BUFFER,12*sizeof(float),sn,GL_STREAM_DRAW);

		glEnableVertexAttribArray(ksn);
		glVertexAttribPointer(ksn, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);

		glUniform1f(pvdp,pvd);
		glUniform1f(dvdp,dvd);
		glUniform1f(kbp,kb);
		glUniform2f(bv,vpv1,vpv2);

		glDisable(GL_DEPTH_TEST);
		glDrawArrays(GL_TRIANGLES,0,6);
		glEnable(GL_DEPTH_TEST);
	}
};
