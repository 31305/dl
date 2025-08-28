#include<termios.h>
#include<unistd.h>
#include<cstdio>
#include<sys/ioctl.h>
#include<vk/vk.h>
int main(int pds,char* pd[])
{
	if(pds<2)return 0;
	vk::vks v;
	v.smg=1;
	struct termios p,n;
	tcgetattr(STDIN_FILENO,&p);
	n=p;
	n.c_lflag&=~(ECHO|ICANON|ISIG);
	n.c_iflag&=~(IXON|ICRNL);
	n.c_oflag&=~OPOST;
	n.c_cc[VMIN]=1;
	n.c_cc[VTIME]=0;
	tcsetattr(STDIN_FILENO,TCSANOW,&n);
	struct winsize vd;
	ioctl(STDOUT_FILENO,TIOCGWINSZ,&vd);
	int nd=0;
	while(1)
	{
		nd=getchar();
		if(nd=='0')break;
	}
	printf("\033[?1049l");
	printf("\033[0m");
	fflush(stdout);
	tcsetattr(STDIN_FILENO,TCSANOW,&p);
	return 0;
}
