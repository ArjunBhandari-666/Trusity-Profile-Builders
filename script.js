document.getElementById("Heading").addEventListener("click",function(){
    document.getElementById("Heading").innerHTML="My name is Georgio Hans";
    document.getElementById("Heading").style.color="red";
})
var p=document.createElement("p")
p.innerHTML="CLICK Above"
document.getElementById("Heading").appendChild(p);

