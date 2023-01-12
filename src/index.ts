const hangedMan = (): void => {

    const word: string =  String(prompt("Enter a word: "));
    const wordArray: string[] = word.split("");
    let answerArray: string[] = word.split("");

    answerArray.forEach((value,index) => {
        if(value != " ") answerArray[index] = "*";
    });


    let fails: number = 0; 

    while(fails < 5){
        const char: string = String(prompt("Enter char:     "+answerArray));
        if(word.includes(char)){
            wordArray.forEach((value,index) => {
                if(value==char) answerArray[index] = char;
            });
            if(wordArray.join('') == answerArray.join('')){
                alert("you won");
            }
        }
        else{
            fails++;
            alert("char not in the word");
        }
    }
    alert("you lost");
}

hangedMan();