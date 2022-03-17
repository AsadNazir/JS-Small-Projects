let millisecCount = 0;
let secCount = 0;
let minuteCount = 0;
let hourCount = 0;
let IntervalStopper;
let timeArr = [];


// Getting Html Elements Over over here
const start = document.getElementById("start_stop_btn");
const clear = document.getElementById("clear");
const record = document.getElementById("record");

const milliSec = document.getElementById("milliSec");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

const recordList = document.querySelector(".recordedTime");
//Adding Event Listener

//Start Stop Button
start.addEventListener("click", function() {

    // Start Button Functionality Over here

    if (this.classList == `btn start`) {
        this.classList.replace("start", "stop");
        this.textContent = "Stop  ";

        record.classList.add("active");
        clear.classList.remove("active");

        IntervalStopper = setInterval(() => {
            // Milli Seconds Over here

            show();
            millisecCount++;

            if (millisecCount == 100) {
                secCount++;
                millisecCount = 0;
                show();

                //Seconds Over Here
                if (secCount == 60) {
                    minuteCount++;
                    secCount = 0;
                    show();

                    //Hours Over Here

                    if (minuteCount == 60) {
                        hourCount++;
                        minuteCount = 0;
                        show();
                    }
                }

            }
        }, 10);


    }



    //Stop Button Functionality Over Here
    else {
        this.classList.replace("stop", "start");
        this.textContent = "Start";
        clearInterval(IntervalStopper);

        //Actiavting Clear over here
        clear.classList.add("active");
    }
})

//Record Button
record.addEventListener("click", function() {


    timeObj = {
        hour: hours.textContent,
        minute: minutes.textContent,
        second: seconds.textContent,
        millisec: milliSec.textContent
    }

    timeArr.push(timeObj);

    showList();

})

//Clear Button
clear.addEventListener("click", function() {
    secCount = millisecCount = hourCount = minuteCount = 0;
    show();
    record.classList.remove("active");
    this.classList.remove("active");
})

//Functions

function AddingZero(value, ele) {
    if (value < 10) {
        ele.textContent = "0" + value;
    } else {
        ele.textContent = value;
    }
}


function show() {

    AddingZero(hourCount, hours);
    AddingZero(minuteCount, minutes);
    AddingZero(secCount, seconds);
    AddingZero(millisecCount, milliSec);
}

function showList() {
    recordList.innerHTML = "";


    for (let i = 0; i < timeArr.length; i++) {
        recordList.innerHTML += `<div class="list_item">
            <div class="left_list_side"><span class="no">${i+1}</span> ${timeArr[i].hour}:${timeArr[i].minute}:${timeArr[i].second}:${timeArr[i].millisec} </div><span id="${i+1}" class="close" onclick="Delete(this.id)"> <i class="fas fa-times "></i></span>
        </div>`


    }
}