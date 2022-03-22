// Set Timer Menu JS Over here
const arrowUps = document.querySelectorAll(".upArrows");
const arrowDowns = document.querySelectorAll(".downArrows");
const timerInputs = document.querySelectorAll(".timerDigitDivInputs");
const SetTimeBtn = document.querySelector("#setTime");
const clock = document.querySelector(".clock");
const timerMenu = document.querySelector(".setTimerMenu");
const cancelBtn = document.querySelector("#cancel");
let reset = document.querySelector("#reset");
let clockFace = document.querySelector(".circle")
let setBtn = document.querySelector("#set")
let digits = document.querySelectorAll(".digits");
let innerCont = document.querySelector(".innerContainer")
let playPause = document.querySelector("#play");
let timesUp = document.querySelector(".timesUp button");
let timesUpMenu = document.querySelector(".timesUp");

let hourCount = 0;
let minCount = 0;
let secCount = 0;
let currTime = new Date().getTime();
let stopInterval;

let interval;

let audio = new Audio("clock.wav");
audio.loop = "loop";

// Set Time Menu Animation and popping
SetTimeBtn.addEventListener("click", function() {
    clock.style.filter = `blur(10px)`;
    timerMenu.style.transform = `translateY(-50%)`;
})

//Cancel Btn
cancelBtn.addEventListener("click", function() {
    clock.style.filter = `blur(0px)`;
    timerMenu.style.transform = `translateY(-1000%)`;
})

//Reset Btn
reset.addEventListener("click", function() {
    clockFace.style.transform = `rotateY(360deg)`;
    innerCont.style.opacity = 0;



    setTimeout(function() {
        clockFace.style.transform = `rotateY(0deg)`;
        innerCont.style.opacity = 1;

        for (let index = 0; index < digits.length; index++) {
            digits[index].textContent = "00";

        }
    }, 600);


    //Putting Them to Zero
    hourCount = 0;
    minCount = 0;
    secCount = 0;

    playPause.innerHTML = `<span><i class="fa-solid fa-play"></i></span>`;
    //Setting pointer Events none for clock button
    SetTimeBtn.style.pointerEvents = "inherit";
    SetTimeBtn.style.opacity = "1";
    clearInterval(stopInterval);

})

//set button
setBtn.addEventListener("click", function() {
    if (!(timerInputs[0].value < 0 || timerInputs[0].value > 23 || timerInputs[1].value < 0 || timerInputs[1].value > 59 || timerInputs[2].value < 0 || timerInputs[2].value > 59)) {
        addZeroToCLock(digits[0], hourCount);
        addZeroToCLock(digits[1], minCount);
        addZeroToCLock(digits[2], secCount);

        //closing menu

        clock.style.filter = `blur(0px)`;
        timerMenu.style.transform = `translateY(-1000%)`;
    }


})


//Play and Pause Btn
playPause.addEventListener("click", function() {
    if (playPause.id == "play" && (hourCount > 0 || minCount > 0 || secCount > 0)) {
        playPause.id = 'pause';
        playPause.innerHTML = `<span><i class="fa-solid fa-pause"></i></span>`;

        //Setting pointer Events none for clock button
        SetTimeBtn.style.pointerEvents = "none";
        SetTimeBtn.style.opacity = "0.5";

        //setting Interval Over here
        interval = currTime;
        interval += (hourCount * 3600000) + (minCount * 60000) + (secCount * 1000);


        interval -= 1000;
        show();
        stopInterval = setInterval(function() {

            hourCount = Math.floor((interval - currTime) / 3600000);
            minCount = Math.floor((interval - currTime) % 3600000 / 60000);
            secCount = Math.floor((interval - currTime) % 60000 / 1000);


            if (interval - currTime == 0) {

                //As soon as the timer hits zero Times up should come up
                clock.style.filter = `blur(10px)`;
                timesUpMenu.style.transform = `translateY(-50%)`;



                audio.play();
                clearInterval(stopInterval);
            }
            interval -= 1000;
            show();
        }, 1000)
    } else {
        playPause.id = "play";
        playPause.innerHTML = `<span><i class="fa-solid fa-play"></i></span>`;
        //Setting pointer Events none for clock button
        SetTimeBtn.style.pointerEvents = "inherit";
        SetTimeBtn.style.opacity = "1";
        clearInterval(stopInterval);
    }
})


//Times up over here
timesUp.addEventListener("click", function() {
    audio.pause();
    // Changing Blur for background
    clock.style.filter = `blur(0px)`;
    //Moving the menu out of site
    timesUpMenu.style.transform = `translateY(-1000%)`;
    //Enablling click on clock
    SetTimeBtn.style.pointerEvents = "inherit";
    SetTimeBtn.style.opacity = "1";
    //setting play pause btn
    playPause.id = "play";
    playPause.innerHTML = `<span><i class="fa-solid fa-play"></i></span>`;
})


//Arow Ups Handle Over here
for (let index = 0; index < arrowUps.length; index++) {

    arrowUps[index].addEventListener("click", function() {
        //Hours Over Here
        if (index == 0) {
            hourCount++;
            if (index == 0) {
                if (hourCount > 23) {
                    hourCount = 0;
                }
            }
            addZero(index, hourCount);

        }

        //Minutes 
        else if (index == 1) {
            minCount++;
            if (minCount > 59) {
                minCount = 0;
            }
            addZero(index, minCount);
        }

        // Seconds
        else {
            secCount++;
            if (secCount > 59) {
                secCount = 0;
            }
            addZero(index, secCount);
        }

    })

}

//Arrow downs Event Handling

for (let index = 0; index < arrowUps.length; index++) {
    arrowDowns[index].addEventListener("click", function() {

        //Hours Over Here
        if (index == 0) {
            hourCount--;
            if (hourCount < 0) {
                hourCount = 23;
            }
            addZero(index, hourCount);
        }

        //Minutes 
        else if (index == 1) {
            minCount--;
            if (minCount < 0) {
                minCount = 59;
            }
            addZero(index, minCount);
        }

        // Seconds
        else {
            secCount--;
            if (secCount < 0) {
                secCount = 59;
            }
            addZero(index, secCount);
        }

    })

}

//Input Event Handling 

for (let index = 0; index < timerInputs.length; index++) {

    timerInputs[index].addEventListener("input", function() {
        if (index == 0) {
            if (timerInputs[index].value > 23 || timerInputs[index].value < 0) {
                timerInputs[index].style.border = `2px solid red`;

            }
            //-----------
            else {
                timerInputs[index].style.border = `2px solid grey`;;
            }

            // Updating Counts From Inputs
            hourCount = timerInputs[index].value;
        }


        //For Minutes and seconds
        else {
            if (timerInputs[index].value > 59 || timerInputs[index].value < 0) {
                timerInputs[index].style.border = `2px solid red`;;

            } else {
                timerInputs[index].style.border = `2px solid grey`;;
            }

            // Updating Counts From Inputs
            if (index == 1) {
                minCount = timerInputs[index].value;
            }
            //----------------------
            else {
                secCount = timerInputs[index].value;
            }
        }

    })

}

//Functions over here


//Addding Zero over Here

function addZero(index, count) {
    if (count < 10) { timerInputs[index].value = `0${count}`; }
    //------------
    else { timerInputs[index].value = `${count}`; }
    ErrorInInputs(index);
}

function addZeroToCLock(ele, count) {
    if (count < 10 && count > 0) { ele.textContent = `0${count}`; }
    //--
    else if (count <= 0) {
        ele.textContent = `00`;
    }
    //------------
    else { ele.textContent = `${count}`; }
}

//Error Function Over here
function ErrorInInputs(index) {
    if (index == 0) {
        if (timerInputs[index].value > 23 || timerInputs[index].value < 0) {
            timerInputs[index].style.border = `2px solid red`;

            ;

        } else {
            timerInputs[index].style.border = `2px solid grey`;;
        }
    }

    //For Minutes and seconds
    else {
        if (timerInputs[index].value > 59 || timerInputs[index].value < 0) {
            timerInputs[index].style.border = `2px solid red`;;
        } else {
            timerInputs[index].style.border = `2px solid grey`;;
        }
    }
}

//show functions over here
function show() {
    addZeroToCLock(digits[0], hourCount);
    addZeroToCLock(digits[1], minCount);
    addZeroToCLock(digits[2], secCount);
}