
let name1 = document.getElementById("text");

name1.addEventListener("keyup", function () {
    myname = document.querySelector(".name-val");
    myname.innerHTML = name1.value;
})

// Radio button

function myGender(values) {
    myname = document.querySelector(".male-val");
    myname.innerHTML = values;
    if (values == "male") {
        document.getElementById("female").checked = false;
    } else {
        document.getElementById("male").checked = false;

    }
}

// Checkbox


function checkbox(values) {
    myname = document.querySelector(".check-val");
    check = document.getElementById("check");
    myname.innerHTML = values;
    if (check.checked == false) {
        myname.innerHTML = "";
    }
}


// Selection 

function city() {
    cityName = document.querySelector("#select").value;
    selection = document.querySelector(".city-val");
    selection.innerHTML = cityName;
}


// TextArea

let address = document.getElementById("address");

address.addEventListener("keyup", function () {
    myAddress = document.querySelector(".address-val");
    myAddress.innerHTML = address.value;
})


// Number


let number = document.getElementById("number");

number.addEventListener("keyup", function () {
    myNumber = document.querySelector(".number-val");
    myNumber.innerHTML = number.value;
})


function fileUpload() {
    let getFile = document.getElementById("file");
    document.getElementById("img").src = URL.createObjectURL(getFile.files[0]);
}