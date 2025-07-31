#pragma once
#include <vector>
#include <array>
#include <cmath>
#include <cassert>
#include <GLES2/gl2.h>
namespace sm
{

using ts = std::array<float, 3>;
using cs = std::array<float, 4>;

struct svm {
	ts sn;
	cs vn;
};

struct sdn {
	float s[16];
	float& operator[](int k) { return s[k]; }
	const float& operator[](int k) const { return s[k]; }
};

inline sdn kr() {
	sdn p = {};
	p[0] = p[5] = p[10] = p[15] = 1.0f;
	return p;
}

inline sdn dkd(float dv, float vnp, float nt, float dt) {
	float ld = 1.0f / std::tan(dv * 0.5f * M_PI / 180.0f);
	sdn p = {};
	p[0] = ld / vnp;
	p[5] = ld;
	p[10] = (dt + nt) / (nt - dt);
	p[11] = -1.0f;
	p[14] = (2 * dt * nt) / (nt - dt);
	return p;
}

inline sdn vs(float s1, float s2, float s3) {
	sdn p = kr();
	p[12] = s1;
	p[13] = s2;
	p[14] = s3;
	return p;
}
inline sdn pb1(float k) {
	sdn p = kr();
	float pm = cosf(k), dm = sinf(k);
	p.s[0] = pm; p.s[1] = dm;
	p.s[4] = -dm; p.s[5] = pm;
	return p;
}

inline sdn gp(const sdn& pd, const sdn& dd) {
	sdn p = {};
	for (int k = 0; k < 4; ++k)
		for (int pk = 0; pk < 4; ++pk)
			for (int ppk = 0; ppk < 4; ++ppk)
				p[k + pk * 4] += pd[k + ppk * 4] * dd[ppk + pk * 4];
	return p;
}

inline GLuint pssk(GLenum pk, const char* l)
{
	GLuint ps = glCreateShader(pk);
	glShaderSource(ps, 1, &l, nullptr);
	glCompileShader(ps);
	return ps;
}

struct m {
	GLuint st = 0, vsnm = 0;
	GLint vskn;

	bool dkk=0;
	void dk() {
		const char* snm = R"(
		attribute vec3 sn;
		attribute vec4 vn;
		uniform mat4 vsn;
		varying vec4 dvn;
		void main() {
			dvn = vn;
			gl_Position = vsn * vec4(sn, 1.0);
		})";
		const char* vnm = R"(
		precision mediump float;
		varying vec4 dvn;
		void main() {
			gl_FragColor = dvn;
		})";

		GLuint psnm = pssk(GL_VERTEX_SHADER, snm);
		GLuint pvnm = pssk(GL_FRAGMENT_SHADER, vnm);
		vsnm = glCreateProgram();
		glAttachShader(vsnm, psnm);
		glAttachShader(vsnm, pvnm);
		glBindAttribLocation(vsnm, 0, "sn");
		glBindAttribLocation(vsnm, 1, "vn");
		glLinkProgram(vsnm);
		glUseProgram(vsnm);

		vskn = glGetUniformLocation(vsnm, "vsn");
		glGenBuffers(1, &st);

		glBindBuffer(GL_ARRAY_BUFFER, st);
		glEnableVertexAttribArray(0);
		glEnableVertexAttribArray(1);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(svm), (void*)0);
		glVertexAttribPointer(1, 4, GL_FLOAT, GL_FALSE, sizeof(svm), (void*)(sizeof(ts)));
	}

	void mk(const std::vector<svm>& sn,int v1,int v2,float dv, float s1, float s2, float s3) {
		if(!dkk)
		{
			dkk=1;
			dk();
		}
		glUseProgram(vsnm);

		sdn pg = dkd(dv, v1 / (float)v2, 0.1f, 100.0f);
		sdn dg = vs(s1, s2, s3);
		sdn dgp = gp(pg, dg);
		glUniformMatrix4fv(vskn, 1, GL_FALSE, dgp.s);
		glBindBuffer(GL_ARRAY_BUFFER, st);
		glEnableVertexAttribArray(0);
		glEnableVertexAttribArray(1);
		glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(svm), (void*)0);
		glVertexAttribPointer(1, 4, GL_FLOAT, GL_FALSE, sizeof(svm), (void*)(sizeof(ts)));
		glBufferData(GL_ARRAY_BUFFER, sn.size() * sizeof(svm), sn.data(), GL_DYNAMIC_DRAW);
		glDrawArrays(GL_TRIANGLES, 0, sn.size());
	}
};
}
