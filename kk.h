#include<cmath>
struct kk
{
	float pm;
	float m;
	double k=0;
	double g=1.0;
	bool ck(double kn)
	{
		bool p;
		p=pm!=m;
		if(p)
		{
			if(k!=0)
			{
				double v=g*(kn-k)/1000.0;
				if(abs(m-pm)<v){pm=m;p=0;}
				else if(pm<m)pm+=v;
				else pm-=v;
			}
		}
		k=kn;
		return p;
	}
};
