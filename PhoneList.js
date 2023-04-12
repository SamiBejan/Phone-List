const listArea = document.querySelector(".listArea");
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".delete");
const addToCartButton = document.querySelector(".addToCart");
const filterButton = document.querySelector(".filter");
const filterForm = document.querySelector(".filterForm");
const unfilterButton = document.querySelector(".unfilter");

const list = new Array();
const brandList = new Array();
const modelList = new Array();
 
function add() {
    if (!document.getElementById("Brand").value.includes(" ") && !document.getElementById("Model").value.includes(" ") &&
    document.getElementById("Brand").value != "" && document.getElementById("Model").value != "") {
        const row = document.createElement("li");
        row.innerText = document.getElementById("Brand").value + "   " +  document.getElementById("Model").value;
        row.addEventListener("click", select);
        list.unshift(row);
        for (let i = 0; i < list.length; ++i) {
            list[i].classList.remove("selected");
        }
        brandList.unshift(document.getElementById("Brand").value);
        modelList.unshift(document.getElementById("Model").value);
        listArea.prepend(row);
    } else if (document.getElementById("Brand").value === "" || document.getElementById("Model").value === "") {
        window.alert("One or more fields are empty!");
    } else {
        window.alert("One or more fields contain spaces!");
    }
}

function select(e) {
    e.target.classList.add("selected");
}

function remove() {
    for (let i = 0; i < list.length; ++i) {
        if (list[i].classList.contains("selected")) {
            list[i].remove();
            list.splice(i, 1);
            brandList.splice(i, 1);
            modelList.splice(i, 1);
            --i;
        }
    }
}

function addToCart() {
    var selected = document.querySelectorAll(".selected");
    for (let i = 0; i < selected.length; ++i) {
        selected[i].classList.add("favourite");
        selected[i].classList.remove("selected");
    }
}

function addfilterForm() {
    filterForm.style.visibility = "visible";
    const searchButton = document.querySelector(".search");
    searchButton.onclick = function () {filter(document.getElementById("searchInput").value)};
    unfilterButton.addEventListener("click", unfilter);
}

function filter(x) {
    if (brandList.includes(x)) {
        for (let i = 0; i < brandList.length; ++i) {
            if (x != brandList[i]) {
                list[i].remove();
            }
        }
    } else {
        window.alert("The brand searched doesn't exist in the list");
    }

}

function unfilter() {
    filterForm.style.visibility = "hidden";
    for (let i = 0; i < list.length; ++i) {
        listArea.append(list[i]);
        list[i].classList.remove("selected");
    }
}

addButton.addEventListener("click", add);
deleteButton.addEventListener("click", remove);
addToCartButton.addEventListener("click", addToCart);
filterButton.addEventListener("click", addfilterForm);

