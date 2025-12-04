#pragma once
#include<vp.h>
#include<emscripten/emscripten.h>
#include<string>
inline std::function<void()> njsps(const std::string &nd)
{
	return [nd](){EM_ASM({window.open(UTF8ToString($0));},nd.c_str());};
}
inline svvs vsg()
{
	const svvs ss{{{47,1,73,68,1,47,44,2,46,3,65,1,75}},
	{
		{{{75,5,44,58,6,44,1,49,43,1}},{},njsps("https://w.wiki/GVGm")},
	}};
	return {{{45,1,51,48,43,2,66,31,51,8,75}},
	{
		ss,
	}};
}
