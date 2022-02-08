

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
    console.log("id" + checkId(id));
    if (checkData(id, name, price) && checkId(id)) {
        para.innerHTML = "";
        console.log("addcll");
        addValue(id, name, price);
        console.log("doplycll");
        displayTble();
    } else if (checkId(id) == false) {
        para.innerText = "Enter unique Id";
        para.style.color = "red";

    } else {
        console.log("e else")
        para.innerText = "enter valid field";
        para.style.color = "red";
    }
}

function checkData(id, name, price) {
    if (id == "" || name == "" || price == "") {
        return false;
    } else {
        return true;
    }
}

function checkId(id) {
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        if (obj.id == id) {
            return false;
        }
    }
    return true;
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

function displayTble() {
    console.log("indiply");
    let html = "<table><tr><th>product id</th><th>product name</th><th>product price</th></tr>";
    for (let i = 0; i < data.length; i++) {
        console.log(i);
        html += "<tr><td>"
            + data[i].id +
            "</td><td>"
            + data[i].name +
            "</td><td>"
            + data[i].price +
            "</td></tr>"
    }
    console.log(html);
    document.getElementById('table').innerHTML = html + "</table>";;
    resetInput();
}




function resetInput() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    console.log(data);
}
console.log(data);

function fun2() {
    let id = document.getElementById("newid").value;
    let name = document.getElementById("newname").value;
    let price = document.getElementById("newprice").value;
    updateProduct(id, name, price);

}