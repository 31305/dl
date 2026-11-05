#!/usr/bin/env python3
import sys
import os
from os import system
ls='./rs'
system('mkdir -p '+ls)
s=['2L.html','ss.js','2L.svg','sks','2L.json','2L.js','2L.wasm','3.js','l.js',
   'babylon.js','babylon.gui.min.js','babylonjs.materials.min.js','HavokPhysics_umd.js',
    'HavokPhysics.wasm','_headers','vm.js','vm.wasm','nlv.js','zxing_reader.js',
   'zxing_reader.wasm','4.js','5.js','6.js','j.js','bs.js','maplibre-gl.js','maplibre-gl.css',
   '7.js','ps.js','vp.js']
if len(sys.argv)<2:
    for p in s:
        system('cp '+p+' '+ls)
    system('cp -r ld '+ls+'/')
    system('mv '+ls+'/2L.html '+ls+'/index.html')
elif sys.argv[1]=='ml':
    system('wget -O lk.zip "https://github.com/BabylonJS/Babylon.js/releases/download/8.40.1/cdnSnapshot.zip"')
    system('unzip lk.zip && rm lk.zip')
    system('cp .snapshot/babylon.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/gui/babylonjs.materials.min.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/havok/* ./')
elif sys.argv[1]=='bl':
    system('wget https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.js')
    system('wget https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.css')
elif sys.argv[1]=='ld':
    system('wget -O ld.zip "https://github.com/mozilla/pdf.js/releases/download/v6.4.299/pdfjs-6.4.299-dist.zip"')
    system('unzip ld.zip -d ld && rm ld.zip')
elif sys.argv[1]=='j':
    for p in s:
        system('wget -O '+p+' 1007.in/'+p)
