#pragma once
#include<GLES2/gl2.h>
struct dv
{
	const char* snm = R"(
	attribute vec2 ksn;
	attribute vec4 kvn;
	attribute vec2 kvsn;
	varying vec4 dvn;
	varying vec2 dvsn;
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
		float s1, s2, v1, v2;
		float rm, hm, nm, dm;
		GLuint bvd = 0;
	};

	GLuint vsnm = 0, st = 0;
	GLint ksn, kvn, kvsn;
	GLint bvd, bvdp;

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

		glGenBuffers(1, &st);
	}

	inline void cl(const kvsl& p) {
		float s11 = p.s1, s21 = p.s2;
		float s12 = p.s1 + p.v1, s22 = p.s2 + p.v2;
		float snt[6 * 8] = {
			s11, s21, p.rm, p.hm, p.nm, p.dm, 0.0f, 0.0f,
			s12, s21, p.rm, p.hm, p.nm, p.dm, 1.0f, 0.0f,
			s12, s22, p.rm, p.hm, p.nm, p.dm, 1.0f, 1.0f,

			s12, s22, p.rm, p.hm, p.nm, p.dm, 1.0f, 1.0f,
			s11, s22, p.rm, p.hm, p.nm, p.dm, 0.0f, 1.0f,
			s11, s21, p.rm, p.hm, p.nm, p.dm, 0.0f, 0.0f,
		};

		glUseProgram(vsnm);
		glBindBuffer(GL_ARRAY_BUFFER, st);
		glBufferData(GL_ARRAY_BUFFER, sizeof(snt), snt, GL_STREAM_DRAW);

		glEnableVertexAttribArray(ksn);
		glEnableVertexAttribArray(kvn);
		glEnableVertexAttribArray(kvsn);
		glVertexAttribPointer(ksn, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);
		glVertexAttribPointer(kvn, 4, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(2 * sizeof(float)));
		glVertexAttribPointer(kvsn, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(6 * sizeof(float)));

		glUniform1i(bvdp, p.bvd != 0);
		if (p.bvd != 0) {
			glActiveTexture(GL_TEXTURE0);
			glBindTexture(GL_TEXTURE_2D, p.bvd);
			glUniform1i(bvd, 0);
		}

		glDrawArrays(GL_TRIANGLES, 0, 6);
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
