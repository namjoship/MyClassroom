var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
// var btn = ul.querySelector("button");

function inputLength() {
    return input.value.length;
}

function enterInList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
}

function addToList() {
    if(inputLength() > 0) {
        enterInList();
    }
}

function addToList1(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        enterInList();
    }
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

input.addEventListener("keypress", addToList1);
button.addEventListener("click", addToList);