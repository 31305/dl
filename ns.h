#pragma once
#include<emscripten.h>
#include<string>
#include<functional>
struct ns
{
	std::string pnd;
	std::function<void(const char*)> pk;
	ns(const char* nd,const char* p,decltype(pk) ppk=0):pk(ppk)
	{
		EM_ASM
		({
		 	const nrk=()=>
			{
				let s=new XMLHttpRequest();
				s.open("GET",UTF8ToString($0));
				s.responseType="arraybuffer";
				s.onload=(p)=>
				{
					let ps=URL.createObjectURL(new Blob([p.target.response],{type:UTF8ToString($1)}));
					Module.ccall('nsss',null,['number','string'],[$2,ps]);
				};
				s.onprogress=(p)=>{};
				s.onerror=()=>{setTimeout(()=>{console.log('ccpp');nrk();},2000)};
				s.send();
			};
			nrk();
		},nd,p,this);
	}
	~ns(){if(pnd.size())EM_ASM({URL.revokeObjectURL(UTF8ToString($0));},pnd.c_str());}
};
extern"C"
{
EMSCRIPTEN_KEEPALIVE inline void nsss(void *m,const char* l)
{
	auto ms=((ns*)m);
	ms->pnd=std::string(l);
	if(ms->pk)ms->pk(l);
}
}
