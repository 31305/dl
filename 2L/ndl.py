#!/usr/bin/env python3
def ndl(ss):
    from os import system
    import math
    import sys
    system('rm -fr nd && mkdir -p nd')
    nvl=True
    v1=6 if nvl else 7
    v2=8 if nvl else 10
    pl=''
    for pk in range(0,int(math.ceil(len(ss)/(v1*v2)))):
        sl='<html><head><style>@media print{@page{size:A4;margin:0}}</style></head><body style="margin:0;padding:0">'
        for k in range(pk*v1*v2,min((pk+1)*v1*v2,len(ss))):
            ndn=str(k)+'.svg'
            system('qrencode -t svg --svg-path "https://1007.in?1:'+str(ss[k])+'" -o nd/'+ndn)
            sl+='<img style="margin:0;padding:0;border:0px solid #000000" src="'+ndn+'"></img>'
        sl+='</body></html>'
        open('nd/'+str(pk)+'p.html','w').write(sl)
        if not nvl:system('wkhtmltopdf -L 0 -T 0 -B 0 -R 0 --enable-local-file-access nd/'+str(pk)+'p.html nd/'+str(pk)+'p.pdf')
        else:system('google-chrome --headless --disable-gpu --print-to-pdf=nd/'+str(pk)+'p.pdf nd/'+str(pk)+'p.html')
        pl+='nd/'+str(pk)+'p.pdf '
        open('nd/'+str(pk)+'d.html','w').write(sl.replace('style="','style="direction:RTL;'))
        if not nvl:system('wkhtmltopdf -L 0 -T 0 -B 0 -R 0 --enable-local-file-access nd/'+str(pk)+'d.html nd/'+str(pk)+'d.pdf')
        else:system('google-chrome --headless --disable-gpu --print-to-pdf=nd/'+str(pk)+'d.pdf nd/'+str(pk)+'d.html')
        pl+='nd/'+str(pk)+'d.pdf '
    system('pdfunite '+pl+' nd/tp.pdf')
