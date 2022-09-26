
// EvenNumbers

// const { append } = require("express/lib/response")

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

// let img1 = document.getElementById("img1");
// let firstImg = document.getElementById("first-img");
// let img2 = document.getElementById("img2");
// let secondImg = document.getElementById("second-img");
// let img3 = document.getElementById("img3");
// let thirdImg = document.getElementById("third-img");
// let img4 = document.getElementById("img4");
// let fourthImg = document.getElementById("fourth-img");
// let img5 = document.getElementById("img5");
// let fifthImg = document.getElementById("fifth-img");

// let zoom = document.getElementById("img-zoom");


// function defaultImg() {
//     zoom.src = firstImg.src

// }
// defaultImg()


// img1.onclick = function () {
//     zoom.src = firstImg.src
// }


// img2.onclick = function () {
//     zoom.src = secondImg.src
// }
// img3.onclick = function () {
//     zoom.src = thirdImg.src
// }
// img4.onclick = function () {
//     zoom.src = fourthImg.src
// }
// img5.onclick = function () {
//     zoom.src = fifthImg.src
// }


// // for button

// let arrayImg = [firstImg, secondImg, thirdImg, fourthImg, fifthImg]

// let i = 0;

// function next() {
//     i++;
//     if (i > arrayImg.length - 1) {
//         i = 0;
//     }
//     zoom.src = arrayImg[i].src
// }

// let j = arrayImg.length - 1;

// function previous() {
//     i--;
//     if (i < 0) {
//         i = arrayImg.length - 1;
//     }
//     zoom.src = arrayImg[i].src
// }



// dynamic images

let img1 = "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/z/2/c/-original-imagetjyhhtrtkdg.jpeg?q=70";
let img2 = "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/d/k/v/-original-imagetjfrpj6ycfm.jpeg?q=70";
let img3 = "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/m/6/l/-original-imagetjfb3vtfyky.jpeg?q=70";
let img4 = "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/c/g/9/-original-imagetjyrd3mk7ys.jpeg?q=70";
let img5 = "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/a/d/k/-original-imagetjyppebgbk7.jpeg?q=70";
let dyn_img = [img3, img4, img5]




let ul_img = document.querySelector(".dynamic-img");
let zoom = document.getElementById("img-zoom");

ul_img.addEventListener("click", function (event) {
    if (event.target.classList.contains('img-size')) {
        zoom.src = event.target.src
    }
})


let container = document.querySelector(".container");

function loadMore() {
    dyn_img.forEach(element => {
        let appendLi = document.createElement("li");
        let appendimg = document.createElement("img");
        appendimg.className = "image-wrapper";
        appendimg.src = element;
        appendLi.appendChild(appendimg)
        container.appendChild(appendLi)

    });

    container.addEventListener("click", function (event) {
        if (event.target.classList.contains('image-wrapper')) {
            zoom.src = event.target.src
        }
    })

    document.querySelector(".loadMore").style.display = "none";

}




container.addEventListener("click", function (event) {
    if (event.target.classList.contains('image-wrapper')) {
        zoom.src = event.target.src
    }
})


// for button

let arrayImg = [img1,img2,img3, img4, img5]

let i = 0;

function next() {
    i++;
    if (i > arrayImg.length - 1) {
        i = 0;
    }
    zoom.src = arrayImg[i]
}

let j = arrayImg.length - 1;

function previous() {
    i--;
    if (i < 0) {
        i = arrayImg.length - 1;
    }
    zoom.src = arrayImg[i]
}
