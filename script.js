var eq=document.querySelector(".eq");
var c=document.querySelector(".C");
var i=document.querySelector("#inp");
var b=document.querySelectorAll(".btn");
var B=document.querySelector(".B");
b.forEach(function(button){
button.addEventListener("click",function(e){
    i.value+=e.target.dataset.num;
})
})
eq.addEventListener("click",function(){
    let ans=eval(i.value);
    i.value=ans;
    });
c.addEventListener("click",function()
{
    i.value="";
})
B.addEventListener("click",function()
{
    i.value=i.value.substr(0,i.value.length-1);
})