#pragma once
#include<GLES2/gl2.h>
#include<cstdlib>
struct cd
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
	uniform float sk;
	uniform float vd;
	uniform vec2 v;
	void main()
	{
		vec2 dvn=(gl_FragCoord.xy-0.5*v)/vd;
		float d=dot(dvn,dvn);
		float ts=sqrt(1.0-dot(dvn,dvn));
		vec3 ds=normalize(vec3(dvn.x,dvn.y,ts));
		vec3 ss=vec3(0,cos(sk),sin(sk));
		float cv=1.0;
		gl_FragColor=vec4((1.0-smoothstep(1.0-0.05,1.0,sqrt(d)))*dot(ss,ds)*vec3(cv),1.0);
	}
	)";


	GLuint vsnm=0,st=0;
	GLint ksn;
	GLint bvd;
	GLint bv;
	GLint skp;

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

		ksn=glGetAttribLocation(vsnm, "ksn");
		bvd=glGetUniformLocation(vsnm, "vd");
		bv=glGetUniformLocation(vsnm, "v");
		skp=glGetUniformLocation(vsnm,"sk");

		glGenBuffers(1, &st);
	}
	inline float smpv1(int s,int v)
	{
		return 2.0f*(float)s/(float)v-1.0f;
	}
	inline float smpv2(int s,int v)
	{
		return 1.0-2.0f*(float)s/(float)v;
	}
	bool dkk=0;
	inline void cl(int vpv1,int vpv2,int vd,float ss=0)
	{
		if(!dkk)
		{
			dkk=1;
			dk();
		}
		int s1=vpv1/2,s2=vpv2/2;
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

		glUniform1f(bvd,vd);
		glUniform1f(skp,ss);
		glUniform2f(bv,vpv1,vpv2);

		glDisable(GL_DEPTH_TEST);
		glDrawArrays(GL_TRIANGLES,0,6);
		glEnable(GL_DEPTH_TEST);
	}
};
