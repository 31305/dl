#pragma once
#include<vp.h>
#include<emscripten/emscripten.h>
#include<string>
inline std::function<void()> njsps(const std::string &nd)
{
	return [nd](){EM_ASM({window.location=(UTF8ToString($0));},nd.c_str());};
}
inline svvs vsg()
{
	const svvs ss{{{47,1,73,68,1,47,44,2,46,3,65,1,75}},
	{
		{{{75,4,44,58,4,44,2,49,43,3}},{},njsps("https://w.wiki/GVGm")},
		{{{49,1,75,13,68,44,2,49,43,3}},{},njsps("https://w.wiki/GVKq")},
		{{{75,1,50,4,70,1,49,2,49,43,3}},{},njsps("https://w.wiki/GVKj")},
		{{{71,7,51,2,49,43,3}},{},njsps("https://w.wiki/GVLF")},
	}};
	return {{{45,1,51,48,43,2,66,31,51,8,75}},
	{
		{{{45,37,51,2,77,51,2,47,56,9,66}},{},njsps("https://1007.in/3")}
	}};
}
