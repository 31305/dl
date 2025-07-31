#pragma once
#include<GLES2/gl2.h>
#include<cstdlib>
#include<vector>
struct dv
{
	const char* snm = R"(
	attribute vec2 ksn;
	attribute vec4 kvn;
	attribute vec2 kvsn;
	varying vec4 dvn;
	varying vec2 dvsn;
	uniform mat4 skp;
	void main() {
		gl_Position = vec4(ksn, 0.0, 1.0);
		dvn = kvn;
		dvsn = kvsn;
	}
	)";

	const char* vnm = R"(
	precision mediump float;
	varying vec4 dvn;
	varying vec2 dvsn;
	uniform sampler2D bvd;
	uniform bool bvdp;
	void main() {
		vec4 bvdv = texture2D(bvd, dvsn);
		gl_FragColor = bvdp ? bvdv * dvn : dvn;
	}
	)";

	struct kvsl {
		int s1, s2, v1, v2;
		float rm, hm, nm, dm;
	};

	GLuint vsnm = 0, st = 0;
	GLint ksn, kvn, kvsn;
	GLint bvd, bvdp;
	GLint skp;

	bool dkk=0;

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

		ksn = glGetAttribLocation(vsnm, "ksn");
		kvn = glGetAttribLocation(vsnm, "kvn");
		kvsn = glGetAttribLocation(vsnm, "kvsn");
		bvd = glGetUniformLocation(vsnm, "bvd");
		bvdp = glGetUniformLocation(vsnm, "bvdp");
		skp=glGetUniformLocation(vsnm,"skp");

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
	inline void cl(const std::vector<kvsl> &pd,int vpv1,int vpv2,GLuint bvd=0)
	{
		if(!dkk)
		{
			dkk=1;
			dk();
		}
		
		std::vector<float> snts;
		snts.resize(pd.size()*6*8);
		for(size_t k=0;k<pd.size();k++)
		{
			kvsl p=pd[k];
			float s11 = smpv1(p.s1,vpv1), s21 = smpv2(p.s2,vpv2);
			float s12 = smpv1(p.s1 + p.v1,vpv1), s22 = smpv2(p.s2 + p.v2,vpv2);
			float snt[6*8]=
			{
			s11, s21, p.rm, p.hm, p.nm, p.dm, 0.0f, 0.0f,
			s12, s21, p.rm, p.hm, p.nm, p.dm, 1.0f, 0.0f,
			s12, s22, p.rm, p.hm, p.nm, p.dm, 1.0f, 1.0f,

			s12, s22, p.rm, p.hm, p.nm, p.dm, 1.0f, 1.0f,
			s11, s22, p.rm, p.hm, p.nm, p.dm, 0.0f, 1.0f,
			s11, s21, p.rm, p.hm, p.nm, p.dm, 0.0f, 0.0f,
			};
			std::copy(snt,&snt[6*8],snts.begin()+k*6*8);
		}

		glUseProgram(vsnm);
		glBindBuffer(GL_ARRAY_BUFFER, st);
		glBufferData(GL_ARRAY_BUFFER,pd.size()*6*8*sizeof(float), snts.data(), GL_STREAM_DRAW);

		glEnableVertexAttribArray(ksn);
		glEnableVertexAttribArray(kvn);
		glEnableVertexAttribArray(kvsn);
		glVertexAttribPointer(ksn, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);
		glVertexAttribPointer(kvn, 4, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(2 * sizeof(float)));
		glVertexAttribPointer(kvsn, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(6 * sizeof(float)));

		glUniform1i(bvdp,bvd != 0);
		if (bvd != 0) {
			glActiveTexture(GL_TEXTURE0);
			glBindTexture(GL_TEXTURE_2D,bvd);
			glUniform1i(bvd, 0);
		}
		glDisable(GL_DEPTH_TEST);
		glDrawArrays(GL_TRIANGLES, 0, 6*pd.size());
		glEnable(GL_DEPTH_TEST);
	}

	inline GLuint bvds(int v1, int v2, const unsigned char* vl) {
		GLuint bvd;
		glGenTextures(1, &bvd);
		glBindTexture(GL_TEXTURE_2D, bvd);
		glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, v1, v2, 0, GL_RGBA, GL_UNSIGNED_BYTE, vl);
		glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
		glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
		return bvd;
	}
};
