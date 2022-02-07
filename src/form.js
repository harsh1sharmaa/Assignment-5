function fun() {
    let result;
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let wt = document.getElementById("Weight").value;
    console.log(typeof (age));
    if (checkvalue(age, name, wt)) {
        result = Work(age, wt);
    } else {
        result = "enter valid input field";
    }
    // display result
    display(result, name);
}
function Work(age, Weight) {
    age = parseInt(age);
    let ans;
    console.log("in work");
    console.log(typeof (age));
    if (age >= 5 && age <= 7) {
        console.log("15-20");
        if (Weight >= 15 && Weight <= 20) {
            //perfect
            ans = "perfect";
            console.log("perfect");
        } else if (Weight < 15) {
            //under weight
            ans = "less then Recommended value of 15 at age " + age;
            console.log("inder");
        } else {
            //over weigth
            ans = "grater then recommended value of 20 at age " + age;
            console.log("over");
        }


    } else if (age >= 8 && age <= 10) {
        console.log("21-25");

        if (Weight >= 21 && Weight <= 25) {
            //perfect
            ans = "perfect";
        } else if (Weight < 21) {
            //under weight
            ans = "less then Recommended value of 21 at age " + age;
        } else {
            //over weigth
            ans = "grater then Recommended value of 25 at age " + age;
        }

    } else if (age >= 11 && age <= 15) {
        console.log("26-30");
        if (Weight >= 26 && Weight <= 30) {
            //perfect
            ans = "perfect";
        } else if (Weight < 26) {
            //under weight
            ans = "less then Recommended value of 26 at age " + age;
        } else {
            //over weigth
            ans = "grater then Recommended value of 30 at age " + age;
        }

    } else if (age >= 16 && age <= 20) {
        console.log("31-40");
        if (Weight >= 31 && Weight <= 40) {
            //perfect
            ans = "perfect";
        } else if (Weight < 31) {
            //under weight
            ans = "less then Recommended value of 31 at age " + age;
        } else {
            //over weigth
            ans = "grater then Recommended value of 40 at age " + age;
        }

    }
    return ans;

}
function checkvalue(age, name, wt) {
    console.log("31-40");
    if (age == "" || name == "" || wt == "") {
        console.log("f");
        return false;
    } else if (age < 5 || age > 20) {
        return false;
        console.log("f");
    } else {
        return true;
        console.log("t");
    }
}
function display(result, name) {

    let para = document.getElementById("para");
    if (result == "enter valid input field") {
        para.innerText = result;
    } else {
        para.innerText = "hello !! " + name + "  your weight is  " + result;
    }
}
