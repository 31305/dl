#pragma once
#include<vk/vk.h>
struct ptp
{
	virtual std::vector<std::vector<vk::v>> k(int)=0;
	virtual void dbks(std::function<void()>){}
	virtual void vtpk(){}
	virtual ~ptp()=default;
};
struct svvs
{
	std::vector<svvs> pv;
	std::vector<std::vector<vk::v>> s;
	std::function<void()> nk=0;
	svvs(std::initializer_list<std::initializer_list<unsigned char>> ps,std::initializer_list<svvs> pvs={},const std::function<void()> &pnk=0)
		:pv(pvs),nk(pnk){for(auto&& k:ps)s.push_back(vk::vs(k));}
};
struct bvv:ptp
{
	std::vector<svvs*> pvk;
	svvs m;
	bvv(const svvs& pm):m(pm){}
	std::function<void()> nk=0;
	void vtpk()override
	{
		if(nk)nk();
		nk=0;
	}
	void ksm()
	{
		auto t=pvk.back();
		pvk.pop_back();
		while(pvk.size())
		{
			auto p=pvk.back();
			if(t-&p->pv[0]<p->pv.size()-1)
			{
				pvk.push_back(t+1);
				break;
			}
			t=p;
			pvk.pop_back();
		}
	}
	std::vector<std::vector<vk::v>> k(int p)override
	{
		if(p==-3)
		{
			std::vector<std::vector<vk::v>> tp={vk::vs({70,2})};
			if(pvk.size())
			{
				if(pvk.back()->pv.size()||pvk.back()->nk)ksm();
				else pvk.pop_back();
			}
			if(pvk.size())tp.insert(tp.end(),pvk.back()->s.begin(),pvk.back()->s.end());
			return tp;
		}
		else if(p==-2)
		{
			std::vector<std::vector<vk::v>> tp={vk::vs({51,8,75})};
			if(!pvk.size())pvk.push_back(&m);
			tp.insert(tp.end(),pvk.back()->s.begin(),pvk.back()->s.end());
			return tp;
		}
		else if(p==-1)
		{
			std::vector<std::vector<vk::v>> tp={vk::vs({5,75})};
			if(pvk.size())
			{
				if(pvk.back()->pv.size())
				{
					pvk.push_back(&pvk.back()->pv[0]);
					tp.insert(tp.end(),pvk.back()->s.begin(),pvk.back()->s.end());
				}
				else if(pvk.back()->nk)nk=pvk.back()->nk;
				else
				{
					ksm();
					if(pvk.size())tp.insert(tp.end(),pvk.back()->s.begin(),pvk.back()->s.end());
				}
			}
			return tp;
		}
		return {};
	}
};
