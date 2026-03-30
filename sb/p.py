import asyncio
import sys
import uuid
import json
from supabase import acreate_client

sn = "ps"
pn = str(uuid.uuid4())[:6]


async def k():
    sv= await acreate_client("https://wgjgbevxmdkhadvfnrco.supabase.co","sb_publishable_wkMomrBAGwVqd8pGb6hDDA_N5q2uUS7")

    def pk(p):
        s=p['data']['record']

        if s["sn"] == sn and s["pn"] != pn:
            print(f"\n[{s['pn']}] {s['l']}")
            print("> ", end="", flush=True)

    g= sv.channel("realtime:sg")

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

    while True:
        l = await sk.run_in_executor(None, sys.stdin.readline)
        pl = l.strip()

        if pl:
            await sv.table("sg").insert({
                "sn": sn,
                "pn": pn,
                "l": pl
            }).execute()


if __name__ == "__main__":
    asyncio.run(k())
