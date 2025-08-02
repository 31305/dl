#pragma once
#include<emscripten/webaudio.h>
#include<cstdio>
#include<functional>
struct jvn
{
	uint8_t vs[4096];
	std::function<void()> pk;
	struct ngp
	{
		void(*pc)(void*,unsigned char*,int);
		void* vy;
	};
	ngp ng;
	static void ppk(EMSCRIPTEN_WEBAUDIO_T pv,EM_BOOL ss,void* sg)
	{
		if(!ss)
		{
			fprintf(stderr,"0 ppk\n");
			return;
		}
		WebAudioWorkletProcessorCreateOptions vk={.name="svjs",};
		emscripten_create_wasm_audio_worklet_processor_async(pv,&vk,dpk,sg);
	}
	EMSCRIPTEN_WEBAUDIO_T pv;
	EMSCRIPTEN_AUDIO_WORKLET_NODE_T vkk;
	void drk(int kv=0)
	{
		EM_ASM({let pv=emscriptenGetAudioObject($0);
			let vkk=emscriptenGetAudioObject($1);
			if(pv.state!='running'||$2==1)
			{
				pv.resume();
				vkk.connect(pv.destination);
			}
			else if($2==2)pv.suspend();
			},pv,vkk,kv);
	}
	static void dpk(EMSCRIPTEN_WEBAUDIO_T pv,EM_BOOL ss,void* sg)
	{
		if(!ss)
		{
			fprintf(stderr,"0 dpk\n");
			return;
		}
		int ns[1]={1};
		EmscriptenAudioWorkletNodeCreateOptions vk={.numberOfInputs=1,.numberOfOutputs=1,.outputChannelCounts=ns};
		EMSCRIPTEN_AUDIO_WORKLET_NODE_T vkk=emscripten_create_wasm_audio_worklet_node(pv,"svjs",&vk,&tpk,sg);
		((jvn*)sg)->pv=pv;
		((jvn*)sg)->vkk=vkk;
		((jvn*)sg)->drk(1);
		if(((jvn*)sg)->pk)((jvn*)sg)->pk();
	}
	static EM_BOOL tpk(int,const AudioSampleFrame*,int nds,AudioSampleFrame* nd,int,const AudioParamFrame*,void* sg)
	{
		auto pg=((jvn*)sg)->ng;
		float d[128];
		pg.pc(pg.vy,(uint8_t*)d,sizeof(d));
		for(int k=0;k<nds;k++)
			for(int ppk=0;ppk<nd[k].numberOfChannels;ppk++)
				memcpy(&nd[k].data[ppk*128],d,sizeof(d));
		return EM_TRUE;
	}
	jvn(int dns,void(*dpc)(void*,unsigned char*,int),void* dvy,std::function<void()> dpk)
	:pk(dpk),ng({dpc,dvy})
	{
		EmscriptenWebAudioCreateAttributes vv={.latencyHint="interactive",.sampleRate=(uint32_t)dns};
		EMSCRIPTEN_WEBAUDIO_T pv=emscripten_create_audio_context(&vv);
		emscripten_start_wasm_audio_worklet_thread_async(pv,vs,sizeof(vs),ppk,this);
		if(0)printf("jvn\n");
	}
};
