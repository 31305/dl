const vvss=document.createElement('style');
vvss.textContent=`
*,*::before,*::after{
	text-decoration:none;
	box-sizing:border-box;
	margin:0;
	padding:0;
	border:0;
	border-radius:0;
	font-weight:normal;
	font-family:"Ubuntu Mono";
	font-size:inherit;
	color:white;
	line-height:1;
	background:none;
	appearance:none;
	outline:none;
}
body{font-size:40px;}
button{
	user-select:none;
	border:2px solid white;
	padding-inline:10px;
	font-size:40px;
}
@media(hover:hover)
{
button{cursor:pointer}
button:hover
{
	background:white;
	color:black;
}
}
button:active{
	border-color:black;
	background:white;
	color:black;
}
input{
	text-align:right;
	border-bottom:2px solid white;
}
`;
document.head.appendChild(vvss);
