#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
from email.parser import BytesParser
from email.policy import default
import os
ms="0.0.0.0"
ps=8004
ng="""<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<input id="ps" type="file" accept="image/*" capture="environment">
<script>
const ps=document.getElementById("ps");
ps.onchange=async()=>
{
    const p= ps.files[0];
    if(!p)return;
    const n=new FormData();
    n.append("s",p);
    const g=await fetch("/ps",{method:"POST",body:n});
    alert(await g.text());
};
</script>
</body>
</html>
"""
class pk(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path!="/":
            self.send_error(404)
            return
        pp=ng.encode()
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.send_header("Content-Length", str(len(pp)))
        self.end_headers()
        self.wfile.write(pp)
    def do_POST(self):
        if self.path!="/ps":
            self.send_error(404)
            return
        spk=self.headers.get("Content-Type", "")
        if not spk.startswith("multipart/form-data"):
            self.send_error(400,"nsp")
            return
        vs=int(self.headers["Content-Length"])
        sm=self.rfile.read(vs)
        mpk=(b"Content-Type: "+spk.encode()+b"\r\nMIME-Version: 1.0\r\n\r\n"+sm)
        sd=BytesParser(policy=default).parsebytes(mpk)
        for bm in sd.iter_parts():
            if bm.get_content_disposition()!="form-data":
                continue
            if bm.get_param("name",header="Content-Disposition")!="s":
                continue
            sn = bm.get_filename()
            if not sn:
                continue
            with open(sn,"wb")as sgs:
                sgs.write(bm.get_payload(decode=True))
            ppsd=f":{sn}\n".encode()
            self.send_response(200)
            self.send_header("Content-Type","text/plain")
            self.send_header("Content-Length",str(len(ppsd)))
            self.end_headers()
            self.wfile.write(ppsd)
            return
        self.send_error(400,"np")
pks=HTTPServer((ms,ps),pk)
pks.serve_forever()
