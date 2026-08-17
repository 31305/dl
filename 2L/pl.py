#!/usr/bin/env python3
import sys
import os
p=open(sys.argv[1],'rb')
d=open(sys.argv[2],'ab+')
while True:
    pl=p.read(1)
    if len(pl):pl=pl[0]
    else:pl=-1
    dl=d.read(1)
    if len(dl):dl=dl[0]
    else:dl=-1
    if pl!=dl:
        pass


