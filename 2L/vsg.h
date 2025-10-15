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
	const svvs kvs{{{51,44,31,43,1,49,1,55,53,44,1,50,2,77}},
	{
		{{{49,1,76,53,2,65,3,51,1,75}},{},njsps("https://amzn.to/3UDsTDX")},
		{{{51,2,70,68,15,51,1,75}},{},njsps("https://amzn.to/4mYRj7b")},
	}};
	return {{{45,1,51,48,43,2,66,31,51,8,75}}};
}
