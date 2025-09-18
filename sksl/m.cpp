#include<vk/vk.h>
#include<sndfile.h>
#include<iostream>
bool vksvl=0;
void lk(void* nv,float l)
{
	sf_write_float((SNDFILE*)nv,&l,1);
}
int main(int nds,char* nd[])
{
	if(nds<2)return 0;
	vk::vks m;
	m.smg=1;
	SF_INFO vv;
	vv.samplerate=m.mt.outputSampleRate();
	vv.channels=1;
	vv.format=SF_FORMAT_WAV|SF_FORMAT_FLOAT;
	SNDFILE* tp=sf_open(nd[1],SFM_WRITE,&vv);
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
	sf_close(tp);
	return 0;
}
