#pragma once
#include<GLES2/gl2.h>
#include<cstdlib>
#include<vector>
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
	uniform vec2 vd;
	void main()
	{
		vec2 dvn=2.0*(gl_FragCoord.xy/vd-vec2(.5,.5));
		float d=dot(dvn,dvn);
		if(d>1.0)discard;
		float ts=sqrt(1.0-dot(dvn,dvn));
		vec3 ds=normalize(vec3(dvn.x,dvn.y,ts));
		vec3 ss=vec3(0,cos(sk),sin(sk));
		gl_FragColor=dot(ss,vs)*vec3(1.0,1.0,1.0);
	}
	)";


	GLuint vsnm=0,st=0;
	GLint ksn;
	GLint bvd;
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
	inline void cl(int vpv1,int vpv2,GLuint bvd=0)
	{
		
		std::vector<float> snts;
		glUseProgram(vsnm);
		glBindBuffer(GL_ARRAY_BUFFER, st);
		glBufferData(GL_ARRAY_BUFFER,snts.size()*sizeof(float), snts.data(), GL_STREAM_DRAW);

		glEnableVertexAttribArray(ksn);
		glVertexAttribPointer(ksn, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);

		glUniform1i(bvd,1.0);
		if (bvd != 0) {
			glActiveTexture(GL_TEXTURE0);
			glBindTexture(GL_TEXTURE_2D,bvd);
			glUniform1i(bvd, 0);
		}

		glDrawArrays(GL_TRIANGLES,0,6);
	}
};
