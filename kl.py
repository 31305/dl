#!/usr/bin/env python3
def k():
    import curses
    curses.initscr()
    import sys
    from os import system
    j={0:()}
    js=0
    s=[]
    while True:
        p=sys.stdin.read(1)
        if p=='n':
            break
        if p==' ':
            for l in [[51,8,75]]+s:
                system('echo '+' '.join([str(n) for n in l])+'|sksl|sox -t au - -d 2>/dev/null')
    curses.endwin()
if __name__=='__main__':
    k()
