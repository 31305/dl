#!/usr/bin/env python3
import sys
import os
from os import system
ls='./rs'
system('mkdir -p '+ls)
system('cp 2L.html '+ls+'/index.html')
system('cp ss.js '+ls)
system('cp 2L.svg '+ls)
system('cp sks '+ls)
system('cp 2L.json '+ls)
system('cp 2L.js '+ls)
system('cp 2L.wasm '+ls)
system('cp 3.js '+ls)
system('cp l.js '+ls)
if not(os.path.isfile('babylon.js') and os.path.isfile('babylon.gui.min.js')):
    system('wget -O lk.zip "https://github.com/BabylonJS/Babylon.js/releases/download/8.40.1/cdnSnapshot.zip"')
    system('unzip lk.zip && rm lk.zip')
    system('cp .snapshot/babylon.js ./')
    system('cp .snapshot/gui/babylon.gui.min.js ./')
system('cp babylon.js '+ls)
system('cp babylon.gui.min.js '+ls)
system('cp _headers '+ls)
system('cp vm.js '+ls)
system('cp vm.wasm '+ls)
system('cp nlv.js '+ls)
system('cp zxing_reader.js '+ls)
system('cp zxing_reader.wasm '+ls)
system('cp 4.js '+ls)
