let arrow = document.getElementsByClassName("arrow");
let p = document.querySelectorAll(`.cont p`);
let brand = document.querySelector(`nav h1`);
window.onscroll = function() { navbar() };

// console.log(arrow);
//let bool = [true, true, true];

for (let index = 0; index < arrow.length; index++) {
    arrow[index].addEventListener("click", function() {
        let temp = p[index].className;

        if (temp == "close") {

            p[index].className = "open";
            arrow[index].style.transform = `rotate(180deg)`;

        } else {
            p[index].className = "close";
            arrow[index].style.transform = `rotate(0deg)`;

        }

    })

}

function navbar() {
    if (document.body.scrollTop > 100) {
        brand.style.fontSize = "1rem";
        brand.style.fontSize = "1rem";
    }
}