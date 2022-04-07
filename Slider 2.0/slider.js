let count = 1;
let slides = 0;
let img = document.querySelectorAll(`.img`);
let bright = document.querySelector(`.right`)
let bleft = document.querySelector(`.left`);
let ul = document.querySelector(`.dot_cont`);
let bar = document.querySelector(".loadingBar");
console.log(bar)
let seconds = 4;

bar.style.animation = `bar ${seconds}s ease-in-out 0s infinite forwards`
    //---------------------------------------
img.forEach(function(ele, index) {
    slides++;
})

//---------------------------------------

setInterval(() => {
    count++;
    showSlides()
}, seconds * 1000)

//Showslides function
function showSlides() {
    if (count > img.length) {
        count = 1;
    }
    if (count < 1) {
        count = img.length;
    }

    for (let i = 0; i < slides; i++) {
        img[i].style.opacity = `0`;
    }

    img[count - 1].style.opacity = `1`;



}
showSlides();
//Right Button
bright.addEventListener('click', function() {
        count++;
        showSlides()
    })
    //Left Button
bleft.addEventListener('click', function() {

    count--;
    showSlides();
})

document.addEventListener("mouseover", (e) => {
    console.log(e.clientX, "X");
    console.log(e.clientY, "Y");
})