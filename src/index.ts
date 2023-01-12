const hangedMan = (): void => {
    
    const word: string =  String(window.prompt("Enter a word: "));
    const wordArray: string[] = word.split("");
    let answerArray: string[] = word.split("");
    
    answerArray.forEach((value,index) => {
        if(value != " ") answerArray[index] = "*";
    });

    
    let fails: number = 0; 
   
    while(fails < 5){
        const char: string = String(window.prompt("Enter char:     "+answerArray));
        if(word.includes(char)){
            wordArray.forEach((value,index) => {
                if(value==char) answerArray[index] = char;
            });
            console.log(wordArray+" , "+answerArray);
            if(wordArray === answerArray){
                alert("you won");
                hangedMan();
            }
        }
        else{
            fails++;
            alert("char not in the word");
        }
    }
    alert("you lost");
    hangedMan();
}

hangedMan();