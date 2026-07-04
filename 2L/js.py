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
   '7.js','ps.js']
if 0:
    system('wget -O lk.zip "https://github.com/BabylonJS/Babylon.js/releases/download/8.40.1/cdnSnapshot.zip"')
    system('unzip lk.zip && rm lk.zip')
    system('cp .snapshot/babylon.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/gui/babylonjs.materials.min.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/havok/* ./')
if 0:
    system('wget https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.js')
    system('wget https://unpkg.com/maplibre-gl@^5.24.0/dist/maplibre-gl.css')
import sys
if len(sys.argv)>1 and sys.argv[1]=='j':
    for p in s:
        system('wget -O '+p+' 1007.in/'+p)
for p in s:
    system('cp '+p+' '+ls)
system('mv '+ls+'/2L.html '+ls+'/index.html')
