#!/usr/bin/env python3
def v(s):
    from os import system
    for l in s:
        system('echo '+' '.join([str(n) for n in l])+'|sksl|sox -t au - -d 2>/dev/null')
def k():
    import curses
    curses.initscr()
    import sys
    s=[]
    while True:
        p=sys.stdin.read(1)
        if p=='n':
            break
        if p=='k':
            v([[51,8,75]]+s);
    curses.endwin()
if __name__=='__main__':
    k()
