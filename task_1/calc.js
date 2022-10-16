let r=document.getElementById("inputtext");
function calcu(num)
{
  r.value+=num; 
}
function Result()
{
    try{
    r.value=eval(r.value);
    }
    catch(error)
    {
        window.alert("enter valid digit");
    }
}
function clr(){
    r.value=" ";
}
function del()
{
   r.value=r.value.slice(0,-1);
}