function addOne(){
    var task=document.getElementById("inputitem").value;

    document.getElementById("todo_box").innerHTML +="<div class='box'></div>"+task+"</div><div onclick ='rem(this);'>X</div></div>";
    document.getElementById("inputitem").value="";
    
}
function rem(elem){
    var task2=elem.parentElement.innerText.split("\n")[0];
    document.getElementById("complete").innerHTML +=
    "<div class ='box'><div>"+task2+"</div><div onclick='con(this);'>X</div></div>";
    elem.parentElement.remove();
}
function con(el){
    el.parentElement.remove();
}