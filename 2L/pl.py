#!/usr/bin/env python3
import sys
p=open(sys.argv[1],'rb')
d=open(sys.argv[2],'ab+')
d.seek(0)
while True:
    pl=p.read(1)
    if len(pl):pl=pl[0]
    else:break
    dl=d.read(1)
    if len(dl):dl=dl[0]
    else:dl=-1
    if dl==-1:
        print(pl)
        try:
            l=input()
        except:break
        try:
            ndl=int(l)
        except:ndl=0
        d.write(bytes([ndl]))
        d.seek(-1,1)
        p.seek(-1,1)
    elif pl!=dl:
        s=p.tell()-1
        d.seek(0,2)
        ds=d.tell()
        for k in range(0,ds-s):
            print('')
            l='0'
            while l!='':
                l=input()
        d.truncate(s)
        p.seek(-1,1)
        d.seek(p.tell())
