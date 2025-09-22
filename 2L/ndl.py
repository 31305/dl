#!/usr/bin/env python3
def ndl(ss):
    from os import system
    import math
    import sys
    system('rm -fr nd && mkdir -p nd')
    v1=7
    v2=10
    pl=''
    for pk in range(0,int(math.ceil(len(ss)/(v1*v2)))):
        sl='<html><body>'
        for k in range(pk*v1*v2,min((pk+1)*v1*v2,len(ss))):
            ndn=str(k)+'.svg'
            system('qrencode -t svg --svg-path "https://1007.in?1:'+str(ss[k])+'" -o nd/'+ndn)
            sl+='<img src="'+ndn+'"></img>'
        sl+='</body></html>'
        open('nd/'+str(pk)+'p.html','w').write(sl)
        system('wkhtmltopdf --enable-local-file-access nd/'+str(pk)+'p.html nd/'+str(pk)+'p.pdf')
        pl+='nd/'+str(pk)+'p.pdf '
        open('nd/'+str(pk)+'d.html','w').write(sl.replace('<body>','<body style="direction:RTL">'))
        system('wkhtmltopdf --enable-local-file-access nd/'+str(pk)+'d.html nd/'+str(pk)+'d.pdf')
        pl+='nd/'+str(pk)+'d.pdf '
    system('pdfunite '+pl+' nd/tp.pdf')
