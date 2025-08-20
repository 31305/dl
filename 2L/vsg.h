#pragma once
#include<vp.h>
#include<emscripten/emscripten.h>
#include<string>
inline std::function<void()> njsps(const std::string &nd)
{
	return [nd](){EM_ASM({window.location.href=UTF8ToString($0);},nd.c_str());};
}
inline svvs vsg()
{
	return {{{51,8,76,45,3,51,48,43,1,66,31}},{{{{49,1,76,53,2,65,3,51,1,75}},{},njsps("https://amzn.to/470ggKD")}}};
}
