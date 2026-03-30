#!/usr/bin/env python3
import asyncio
import sys
import uuid
import json
from os import system
from supabase import acreate_client

sn = "ps"
pn = str(uuid.uuid4())[:6]
def vk(s):
    system('echo '+s+'| '+sksl+' | '+ss+' -t au - -d 2>/dev/null')
async def k():
    sv= await acreate_client("https://wgjgbevxmdkhadvfnrco.supabase.co","sb_publishable_wkMomrBAGwVqd8pGb6hDDA_N5q2uUS7")
    
    global pkl
    pkl=None
    def pk(p):
        global pkl
        s=p['data']['record']

        if s["sn"] == sn and s["pn"] != pn:
            pkl=s['l']
            vk(pkl)

    g=sv.channel("realtime:sg")

    g.on_postgres_changes(
    event="INSERT",
    schema="public",
    table="sg",
    callback=pk,
    ) 

    await g.subscribe()

    print(f"sn: {sn}")
    print(f"pn: {pn}")
    print("> ", end="", flush=True)

    sk= asyncio.get_event_loop()
    
    import os
    import sys
    global lsk
    lsks=os.path.dirname(lsk)
    sys.path.append(lsks)
    import lsk
    while True:
        l = await sk.run_in_executor(None, sys.stdin.readline)
        pl = l.strip()
        if pl:
            await sv.table("sg").insert({
                "sn": sn,
                "pn": pn,
                "l":' '.join([str(s) for s in lsk.snl(pl)])
            }).execute()
        elif pkl!=None:
            vk(pkl)


if __name__ == "__main__":
    global sksl,lsk,ss
    import shutil
    sksl=shutil.which('sksl')
    lsk=shutil.which('lsk.py')
    ss=shutil.which('sox')
    if sksl==None:
        print('sksl?')
    elif lsk==None:
        print('lsk.py?')
    elif ss==None:
        print('sox?')
    else:
        asyncio.run(k())
