function addLi()
{

    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

     liNode.appendChild(txtNode);
     listNode.appendChild(liNode);

}
function count()
{
    var count=document.getElementById("list").getElementsByTagName("li").length;
    document.getElementById("demo").innerHTML =  count;
}

let display=document.getElementById('display');
let list=document.getElementById('list');


function displayList(){
    list.classList.toggle('remove');
        
}

display.addEventListener("click",displayList);



