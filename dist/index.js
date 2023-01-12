"use strict";
const hangedMan = () => {
    const word = String(window.prompt("Enter a word: "));
    const wordArray = word.split("");
    let answerArray = word.split("");
    answerArray.forEach((value, index) => {
        if (value != " ")
            answerArray[index] = "*";
    });
    let fails = 0;
    while (fails < 5) {
        const char = String(window.prompt("Enter char:     " + answerArray));
        if (word.includes(char)) {
            wordArray.forEach((value, index) => {
                if (value == char)
                    answerArray[index] = char;
            });
            console.log(wordArray + " , " + answerArray);
            if (wordArray === answerArray) {
                alert("you won");
                hangedMan();
            }
        }
        else {
            fails++;
            alert("char not in the word");
        }
    }
    alert("you lost");
    hangedMan();
};
hangedMan();
