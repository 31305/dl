#include<vk/vk.h>
#ifdef PVL
#include<sndfile.h>
#endif
#include<iostream>
bool vksvl=0;
void lk(void* nv,float l)
{
	if(nv)
	{
#ifdef PVL
		sf_write_float((SNDFILE*)nv,&l,1);
#endif
	}
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
	void *tp=0;
#ifdef PVL
	SF_INFO vv;
	vv.samplerate=m.mt.outputSampleRate();
	vv.channels=1;
	vv.format=SF_FORMAT_WAV|SF_FORMAT_FLOAT;
	if(nds>1)tp=sf_open(nd[1],SFM_WRITE,&vv);
#endif
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
#ifdef PVL
	if(tp)sf_close((SNDFILE*)tp);
#endif
	return 0;
}
