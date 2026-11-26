import vp from './vp.js'
import vvg from './vvg.js'
import './sr.js'
const v=new vp();
window.v=v;
await Promise.all([v.dk(),vvg()]);
document.body.style.cssText=`height:100dvh;display:flex;flex-direction:column;
	justify-content:center;align-items:center;background:black;`
document.body.innerHTML=`
<p style='user-select:none;margin-bottom:10px;' onclick='v.svb([49,1,50,2,49,44,3,76,49,1,71,66,2,56,3],1)'>
	1007.in
</p>
<p style='font-size:20px;'>
	<span style='user-select:none' onclick='v.svb([74,5,48,3,65,1,75],1)'>:-o </span>
	<a href="mailto:1@1007.in">1@1007.in</a>
<p>`
