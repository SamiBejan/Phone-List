const listArea = document.querySelector(".listArea");
const addButton = document.querySelector(".addButton");
const deleteButton = document.querySelector(".deleteButton");


const list = new Array();
const brandList = new Array();
const modelList = new Array();
 
function add() {
    if (!document.getElementById("Brand").value.includes(" ") && !document.getElementById("Model").value.includes(" ") &&
    document.getElementById("Brand").value != "" && document.getElementById("Model").value != "") {
        const row = document.createElement("li");
        row.innerText = document.getElementById("Brand").value + "   " +  document.getElementById("Model").value;
        list.unshift(row);
        for (let i = 0; i < list.length; ++i) {
            list[i].onclick = function () {select(i)};
            list[i].style.background = "transparent";
        }
        brandList.unshift(document.getElementById("Brand").value);
        modelList.unshift(document.getElementById("Model").value);
        listArea.prepend(row);
    }
}

function select(x) {
    list[x].setAttribute("class", "selected");
    list[x].style.background = "blue";
}

function remove() {
    const selected = document.querySelectorAll(".selected");
    for (let i = 0; i < selected.length; ++i) {
        selected[i].remove();
    }
}

addButton.addEventListener("click", add);
deleteButton.addEventListener("click", remove);

