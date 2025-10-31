var ul=document.getElementById("ul")
function add(){
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value+"<button onclick='deleteitems(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteitems(event){
    event.target.parentElement.remove()
}