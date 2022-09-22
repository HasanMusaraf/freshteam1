
// EvenNumbers

let numbers = [23, 44, 53, 66, 27, 8]

let evenNumbers = numbers.filter((val) => val % 2 == 0)

console.log("EvenNumber", evenNumbers)


// Sum of square of the numbers

let num = [1, 2, 3]

console.log("Square", num.reduce((a, b) => (a + b ** 2)))


// Closest multiple of Three

let values = [10, 11, 15];
let multiple = 3;

let result = values.map(function (a) {

    if (a < 0) {
        return multiple
    }
    else if (a > 0) {
        let ans = Math.round(a / multiple) * multiple
        if (ans == 0) {
            return multiple
        }
        else {
            return ans

        }

    }

})

console.log("Multiple of Three", result)



// Amazon image

let img1 = document.getElementById("img1");
let firstImg = document.getElementById("first-img");
let img2 = document.getElementById("img2");
let secondImg = document.getElementById("second-img");
let img3 = document.getElementById("img3");
let thirdImg = document.getElementById("third-img");
let img4 = document.getElementById("img4");
let fourthImg = document.getElementById("fourth-img");
let img5 = document.getElementById("img5");
let fifthImg = document.getElementById("fifth-img");

let zoom = document.getElementById("img-zoom");


function defaultImg() {
    zoom.src = firstImg.src

}
defaultImg()


img1.onclick = function () {
    zoom.src = firstImg.src
}


img2.onclick = function () {
    zoom.src = secondImg.src
}
img3.onclick = function () {
    zoom.src = thirdImg.src
}
img4.onclick = function () {
    zoom.src = fourthImg.src
}
img5.onclick = function () {
    zoom.src = fifthImg.src
}


// for button

let arrayImg = [firstImg, secondImg, thirdImg, fourthImg, fifthImg]

let i = 0;

function next() {
    i++;
    if (i > arrayImg.length - 1) {
        i = 0;
    }
    zoom.src = arrayImg[i].src
}

let j = arrayImg.length - 1;

function previous() {
    i--;
    if (i < 0) {
        i = arrayImg.length - 1;
    }
    zoom.src = arrayImg[i].src
}
