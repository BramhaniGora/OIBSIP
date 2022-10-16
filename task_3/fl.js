let r=document.getElementById("to");
let s=document.getElementById("do");
function fun()
{
const tit=document.getElementById("t");
const des=document.getElementById("d");
var x=tit.value;
var y=des.value;
r.value+=x+"\n";
s.value+=y+"\n";
}
function tdel()
{
   r.value=r.value.slice(0,-1);
   
}
function ddel()
{
   s.value=s.value.slice(0,-1);
}