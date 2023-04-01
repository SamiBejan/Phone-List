const listArea = document.querySelector(".listArea");
const addButton = document.querySelector(".addButton");

const list = new Array();
const brandList = new Array();
const modelList = new Array();
 
function add() {
    if (!document.getElementById("Brand").value.includes(" ") && !document.getElementById("Model").value.includes(" ") &&
    document.getElementById("Brand").value != "" && document.getElementById("Model").value != "") {
        const row = document.createElement("li");
        row.innerText = document.getElementById("Brand").value + "   " +  document.getElementById("Model").value;
        for (let i = 0; i < list.length; ++i) {
            ++list[i].id;
        }
        list.unshift(row);
        list[0].id = 1;
        brandList.unshift(document.getElementById("Brand").value);
        modelList.unshift(document.getElementById("Model").value);
        listArea.prepend(row);
    }
}


addButton.addEventListener("click", add);

