#!/usr/bin/env python3
import sys
import os
from os import system
ls='./rs'
system('mkdir -p '+ls)
s=['2L.html','ss.js','2L.svg','sks','2L.json','2L.js','2L.wasm','3.js','l.js',
   'babylon.js','babylon.gui.min.js','babylonjs.materials.min.js','HavokPhysics_umd.js',
    'HavokPhysics.wasm','_headers','vm.js','vm.wasm','nlv.js','zxing_reader.js',
   'zxing_reader.wasm','4.js','5.js','6.js','j.js']
if not(os.path.isfile('babylon.js') and os.path.isfile('babylon.gui.min.js') and os.path.isfile('babylonjs.materials.min.js')):
    system('wget -O lk.zip "https://github.com/BabylonJS/Babylon.js/releases/download/8.40.1/cdnSnapshot.zip"')
    system('unzip lk.zip && rm lk.zip')
    system('cp .snapshot/babylon.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/gui/babylonjs.materials.min.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
    system('cp .snapshot/havok/* ./')
import sys
if len(sys.argv)>1 and sys.argv[1]=='j':
    for p in s:
        system('wget -O '+p+' 1007.in/'+p)
for p in s:
    system('cp '+p+' '+ls)
system('mv '+ls+'/2L.html '+ls+'/index.html')
system('mv '+ls+'/6.js '+ls+'/5.js')
