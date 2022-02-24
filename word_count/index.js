let textArea = document.querySelector(`#textarea`);
let wordCount = document.querySelector(`#words`);
let textCount = 0;
let wordsArr;
let divWord = document.querySelector(`.wordCount`);

textArea.addEventListener("input", function() {
    // let count = 0;
    wordsArr = textArea.value;
    let temp = wordsArr.split(" ");

    let count = temp.filter(function(ele) {
            return ele != "";

        })
        // for (let index = 0; index < temp.length; index++) {

    //     if (temp[index] != "") {
    //         count++;
    //         console.log(count);
    //     }

    // }


    // wordCount.innerHTML = `${count}`;
    wordCount.textContent = count.length;
    if (count >= 20) {

        divWord.style.color = `red`;

    } else {
        divWord.style.color = `blue`;

    }

})