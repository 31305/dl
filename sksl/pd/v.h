#include<stdlib.h>
#include<stdio.h>
static inline void v(const char *s)
{
	FILE* l=fopen("/tmp/l","w");
	fprintf(l,"%s",s);
	fclose(l);
	system("cat /tmp/l|sksl|sox -t au - -d > /dev/null 2>&1");
}
