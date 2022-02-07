

let data = [];
console.log("hello");
function fun() {
    console.log("infun");
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let para = document.getElementById("para");
    console.log(para);
    console.log(checkData(id, name, price));
    if (checkData(id, name, price)) {
        para.innerHTML = "";
        console.log("addcll");
        addValue(id, name, price);
        console.log("doplycll");
        displayTble(id, name, price);
    } else {
        console.log("e else")
        para.innerText = "enter valid field";
    }
}

function checkData(id, name, price) {
    if (id == "" || name == "" || price == "") {
        return false;
    } else {
        return true;
    }
}

function addValue(id, name, price) {
    console.log("in adddata")
    let newdata = {
        id: id,
        name: name,
        price: price
    }
    data.push(newdata);
}

function displayTble(id, name, price) {
    console.log("indiply");
    let obj = data[data.length - 1];
    let tbl = document.getElementById("tbl");
    let len = data.length;
    let row = tbl.insertRow(len);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = obj.id;
    cell2.innerHTML = obj.name;
    cell3.innerHTML = obj.price;


    myFunction();
}

function myFunction() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    console.log(data);
}
console.log(data);