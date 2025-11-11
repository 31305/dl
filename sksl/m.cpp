#include<vk/vk.h>
#include<sndfile.h>
#include<iostream>
bool vksvl=0;
void lk(void* nv,float l)
{
	if(nv)sf_write_float((SNDFILE*)nv,&l,1);
	else
	{
		fwrite(&l,sizeof(l),1,stdout);
		fflush(stdout);
	}
}
int main(int nds,char* nd[])
{
	vk::vks m;
	m.smg=1;
	SF_INFO vv;
	vv.samplerate=m.mt.outputSampleRate();
	vv.channels=1;
	vv.format=SF_FORMAT_WAV|SF_FORMAT_FLOAT;
	SNDFILE* tp=0;
	if(nds<1)tp=sf_open(nd[1],SFM_WRITE,&vv);
	if(!tp)
	{
		uint32_t dl[7]={0x2e736e64,28,0xffffffff,6,(uint32_t)m.mt.outputSampleRate(),1};
		fwrite(dl,4,7,stdout);
	}
	while(!std::cin.eof())
	{
		std::string l;
		getline(std::cin,l);
		if(l.size())
		{
			int v;
			std::istringstream g(l);
			std::vector<vk::v> p;
			while(g>>v)
				p.push_back(vk::vkvl(v));
			m.pmb(p,lk,tp);
		}
	}
	if(tp)sf_close(tp);
	return 0;
}
