import vp from './vp.js'
const v=new vp();
await v.dk()
const vv=document.createElement('meta')
vv.name='color-scheme'
vv.content='dark'
document.head.appendChild(vv);
document.body.style.cssText='text-align:center;font:serif'
const d=document.createElement('div')
d.style.width='100px'
d.style.marginInline='auto'
document.body.appendChild(d);
const pd=document.createElementNS('http://www.w3.org/2000/svg','svg')
pd.setAttribute('width','100px')
pd.setAttribute('viewBox','0 0 100 100')
pd.innerHTML=
`
<rect width="100%" height="100%" fill="#f9dc5c" />

`
d.appendChild(pd)
const ld=document.createElement('div')
ld.style='display:flex;gap:.25em;'
d.appendChild(ld)
const ns=document.createElement('input')
ns.style='flex:1;min-width:0'
ld.appendChild(ns)
const nk=document.createElement('button')
ld.appendChild(nk)
nk.innerText='?'
