let menus = document.getElementsByClassName("items");
let dropDown = document.getElementsByClassName("dropDown");

//Open the drop Down Menu
for (let index = 0; index < menus.length; index++) {

    menus[index].addEventListener("mouseover", function() {
        dropDown[index].style.display = "block";
    })

}

//Collapse The dropdwon Menu
for (let index = 0; index < menus.length; index++) {

    menus[index].addEventListener("mouseout", function() {
        dropDown[index].style.display = "none";
    })

}



let brand = document.querySelector(`nav h1`);
window.onscroll = function() { navbar() };
let div = document.querySelectorAll(`.div`);

function navbar() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        brand.style.fontSize = "1.6rem";
        brand.style.paddingLeft = "3rem";
        brand.style.margin = "0.9rem 0";

    } else {
        brand.style.fontSize = "2.2rem";
        brand.style.paddingLeft = "7rem";
        brand.style.margin = "1.8rem 0";


    }
    for (let index = 0; index < div.length; index++) {
        if ((div[index].offsetTop) < window.pageYOffset + 500) {
            div[index].style.opacity = "1";
            div[index].style.transform = "scale(1)";
        } else {
            div[index].style.opacity = "0";
            div[index].style.transform = "scale(0)";
        }

    }


}