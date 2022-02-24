<template>
    <div class="flex">
        <div id="dialogBox">Temp Text</div>
    </div>
    <main>
        <div id='keyboardContainer'>
        <div id="rowOne">
            <button @click='click' class='btn' id="q">Q</button>
            <button @click='click' class='btn' id="w">W</button>
            <button @click='click' class='btn' id="e">E</button>
            <button @click='click' class='btn' id="r">R</button>
            <button @click='click' class='btn' id="t">T</button>
            <button @click='click' class='btn' id="y">Y</button>
            <button @click='click' class='btn' id="u">U</button>
            <button @click='click' class='btn' id="i">I</button>
            <button @click='click' class='btn' id="o">O</button>
            <button @click='click' class='btn' id="p">P</button>
        </div>

        <div class="flex">
            <div id="rowTwo">
                <button @click='click' class='btn' id="a">A</button>
                <button @click='click' class='btn' id="s">S</button>
                <button @click='click' class='btn' id="d">D</button>
                <button @click='click' class='btn' id="f">F</button>
                <button @click='click' class='btn' id="g">G</button>
                <button @click='click' class='btn' id="h">H</button>
                <button @click='click' class='btn' id="j">J</button>
                <button @click='click' class='btn' id="k">K</button>
                <button @click='click' class='btn' id="l">L</button>
            </div>
        </div>

        <div id="rowThree">
            <button @click='enter' class='btn' id="enter">ENTER</button>
            <button @click='click' class='btn' id="z">Z</button>
            <button @click='click' class='btn' id="x">X</button>
            <button @click='click' class='btn' id="c">C</button>
            <button @click='click' class='btn' id="v">V</button>
            <button @click='click' class='btn' id="b">B</button>
            <button @click='click' class='btn' id="n">N</button>
            <button @click='click' class='btn' id="m">M</button>
            <button @click='deleteLetter' id="delete">
                <svg id='deleteButton' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                </svg>
            </button>
        </div>
    </div>
    </main>
</template>

<script>
const wordsList = require('./words.json'); 
const guessingWords = wordsList['guessingWords']; //Already sorted
const words = wordsList['words'].sort();
let targetRandomWord = words[parseInt(Math.random() * words.length)];
let rowNumber = 0; //Max row number is 5 because the board has 6 rows (6th row = 5th index)
let keyboard = [
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',]
        ];

const resetBoard = won => {
    targetRandomWord = words[parseInt(Math.random() * words.length)];
    keyboard = [
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',],
            [' ', ' ', ' ', ' ', ' ',]
    ];
    rowNumber = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const space = document.getElementById("box" + (i * 5 + j));
            space.innerHTML = ' '
            space.style.backgroundColor = "rgb(17, 17, 17)";
            space.style.borderColor = 'rgb(60, 60, 60)';
        }
    }

    const buttons = document.getElementsByClassName('btn');
    for (let h = 0; h < buttons.length; h++) {
        buttons[h].style.backgroundColor = "#818384";
        buttons[h].style.borderColor = "#818384";
    }
} 

const checkIfWordsMatch = word => {
    //Checks how close the word was to the actual word
    let execute = true;
    let count = 0; //If count == 5, then the player wins.
    for (let i = 0; i < 5; i++) {
        if (word[i] == targetRandomWord[i]) {
            count++;
            const boxRef = "box" + (rowNumber * 5 + i);
            const element = document.getElementById(boxRef);
            const letter = document.getElementById(word[i]);
            element.style.backgroundColor = '#6aaa64'; //Change color to green if it matches exactly
            element.style.borderColor = '#6aaa64';
            letter.style.backgroundColor = '#6aaa64'; 
            letter.style.borderColor = '#6aaa64'; 
        } 
    }

    //Linear search to see what's in the word but not in the correct position
    //Sets to yellow
    for (let j = 0; j < 5; j++) { // Target word
        for (let k = 0; k < 5; k++) { //Input word
            const boxRef = "box" + (rowNumber * 5 + k);
            const element = document.getElementById(boxRef);
            const letter = document.getElementById(word[k]);
            if ((element.style.backgroundColor == 'rgb(17, 17, 17)' || element.style.backgroundColor == '' || element.style.backgroundColor == "#fafafa") && targetRandomWord[j] == word[k]) {
                element.style.backgroundColor = '#c9b458';
                element.style.borderColor = '#c9b458';
                letter.style.backgroundColor = '#c9b458'; 
                letter.style.borderColor = '#c9b458'; 
            }
        }
    }

    //Linear search to add gray boxes if needed.
    for (let k = 0; k < 5; k++) {
        const boxRef = "box" + (rowNumber * 5 + k);
        const element = document.getElementById(boxRef);
        const letter = document.getElementById(word[k]);
        if (element.style.backgroundColor == 'rgb(17, 17, 17)' || element.style.backgroundColor == '' || element.style.backgroundColor == "#fafafa") {
            element.style.backgroundColor = '#3a3a3c';
            element.style.borderColor = '#3a3a3c';
            letter.style.backgroundColor = '#3a3a3c'; //Adding styles to the keyboard
            letter.style.borderColor = '#3a3a3c'; 
        }
    }

    const dialogBox = document.getElementById('dialogBox');
    if (count == 5 && execute) { //Turning on the dialog box with certain text
        dialogBox.style.display = 'flex';
        dialogBox.innerHTML = "You've won!"
        setTimeout(() => {
            dialogBox.style.display = 'none';
        }, 3000)
        execute = false;
        setTimeout(() => {resetBoard(true)}, 3000)
    } else if (count != 5 && rowNumber == 5) {
        dialogBox.style.display = 'flex';
        dialogBox.innerHTML = targetRandomWord.toUpperCase();
        setTimeout(() => {
            dialogBox.style.display = 'none';
        }, 3000)
        execute = false;
        setTimeout(() => {resetBoard(false)}, 3000)
    } else {
        rowNumber++;
    }    
}

const checkWords = array => {
    const targetWord = array.join('');
    let execute = true; //Preventing infinite loops and check if it needs to check the other list of words
    //Binary search to see if the word is found in guessingWords

    let min = 0;
    let max = guessingWords.length - 1;
    while (min <= max && execute) {
        let middle = ~~((min + max) / 2); //Integer math
        if (guessingWords[middle].localeCompare(targetWord) < 0) {
            min = middle + 1; 
        } else if (guessingWords[middle].localeCompare(targetWord) > 0) {
            max = middle - 1;
        } else { //If it is found, increment to the next row 
            //And check off the colors
            execute = false;
            checkIfWordsMatch(targetWord);
        }
    } 

    if (execute) { //If it is not found (not in guessingWords)
        //Then it might be in the other word list.
        min = 0;
        max = words.length - 1;
        while (min <= max && execute) {
        let middle = ~~((min + max) / 2);
        if (words[middle].localeCompare(targetWord) < 0) {
            min = middle + 1; 
        } else if (words[middle].localeCompare(targetWord) > 0) {
            max = middle - 1;
        } else { 
            checkIfWordsMatch(targetWord);
            execute = false;
        }
        } 

        if (execute) { // If it is not in both word lists..
            const dialogBox = document.getElementById('dialogBox');
            dialogBox.style.display = 'flex';
            dialogBox.innerHTML = "Not in word list";
            setTimeout(() => {
                dialogBox.style.display = 'none';
            }, 1000)
        }
    }

}

export default {
    name: 'Keyboard',
    methods: {
        click(e) {
            const letter = e.currentTarget.id; 
            for (let i = 0; i < keyboard[rowNumber].length; i++) {
                if (keyboard[rowNumber][i] == ' ') {
                    keyboard[rowNumber][i] = letter;
                    const boxRef = "box" + (rowNumber * 5 + i);
                    const boxNumber = document.getElementById(boxRef);
                    boxNumber.innerHTML = letter.toUpperCase();
                    break; //Stops after one empty space of the array
                }
            }
        },
        enter() {
            let execute = true;
            keyboard[rowNumber].forEach(element => {
                if (element == ' ' && execute) {
                    const dialogBox = document.getElementById('dialogBox');
                    dialogBox.style.display = 'flex';
                    dialogBox.innerHTML = "Not enough letters";
                    setTimeout(() => {
                        dialogBox.style.display = 'none';
                    }, 1000)
                    execute = false; //For it to stop alerting multiple times
                }
            });

            if (execute) {
                checkWords(keyboard[rowNumber]);
            } 
        },
        deleteLetter() {
            for (let i = 0; i < keyboard[rowNumber].length - 1; i++) {
                if ((keyboard[rowNumber][i + 1] == ' ' && keyboard[rowNumber][0] != ' ')) {
                    keyboard[rowNumber][i] = ' ';
                    const boxRef = "box" + (rowNumber * 5 + i);
                    const boxNumber = document.getElementById(boxRef);
                    boxNumber.innerHTML = ' ';
                    break;
                }
            }
            //Gets the last element because the for loop only goes to the 4 item. The 5th item will not have a space after it to check
            if (keyboard[rowNumber][4] != ' ' && keyboard[rowNumber][0] != ' ') {
                keyboard[rowNumber][4] = ' ';
                const boxRef = "box" + (rowNumber * 5 + 4);
                const boxNumber = document.getElementById(boxRef);
                boxNumber.innerHTML = ' ';
            }
        }
    }
}

// These functions are for keyboard input
let keyboardInput = document.addEventListener('keydown', (e) => {
    const char = e.key.toUpperCase();
    if (char == 'A' || char == 'B' || char == 'C' || char == 'D' || char == 'E' || char == 'F' || char == 'G' || char == 'H' || char == 'I' || char == 'J' || char == 'K' || char == 'L' || char == 'M' || char == 'N' || char == 'O' || char == 'P' || char == 'Q' || char == 'R' || char == 'S' || char == 'T' || char == 'U' || char == 'V' || char == 'W' || char == 'X' || char == 'Y' || char == 'Z') {
        addLetter(e.key);
    } else if (e.key == 'Enter') {
        enter();
    } else if (e.key == 'Backspace') {
        deleteLetter();
    }
});

const addLetter = letter => {
    for (let i = 0; i < keyboard[rowNumber].length; i++) {
        if (keyboard[rowNumber][i] == ' ') {
            keyboard[rowNumber][i] = letter;
            const boxRef = "box" + (rowNumber * 5 + i);
            const boxNumber = document.getElementById(boxRef);
            boxNumber.innerHTML = letter.toUpperCase();
            break; //Stops after one empty space of the array
        }
    }
}

const enter = () => {
    let execute = true;
    keyboard[rowNumber].forEach(element => {
        if (element == ' ' && execute) {
            const dialogBox = document.getElementById('dialogBox');
            dialogBox.style.display = 'flex';
            dialogBox.innerHTML = "Not enough letters";
            setTimeout(() => {
                dialogBox.style.display = 'none';
            }, 1000)
            execute = false; //For it to stop alerting multiple times
        }
    });

    if (execute) {
        checkWords(keyboard[rowNumber]);
    } 
}

let deleteLetter = () => {
    for (let i = 0; i < keyboard[rowNumber].length - 1; i++) {
        if ((keyboard[rowNumber][i + 1] == ' ' && keyboard[rowNumber][0] != ' ')) {
            keyboard[rowNumber][i] = ' ';
            const boxRef = "box" + (rowNumber * 5 + i);
            const boxNumber = document.getElementById(boxRef);
            boxNumber.innerHTML = ' ';
            break;
        }
    }
    //Gets the last element because the for loop only goes to the 4 item. The 5th item will not have a space after it to check
    if (keyboard[rowNumber][4] != ' ' && keyboard[rowNumber][0] != ' ') {
        keyboard[rowNumber][4] = ' ';
        const boxRef = "box" + (rowNumber * 5 + 4);
        const boxNumber = document.getElementById(boxRef);
        boxNumber.innerHTML = ' ';
    }
}
// Keyboard input end
</script>

<style lang="scss" scoped>
    #keyboardContainer {
        width: 460px;
        height: 200px;
        margin-top: 20px;
    }

    main {
        display: flex;
        justify-content: center;
    }

    button {
        background: #818384;
        border: #818384 1px solid;
        height: 60px;
        width: 40px;
        margin: 3px;
        color: #fafafa;
        font-weight: bold;
        border-radius: 4px;
        transition: .4s;
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    #enter {
        width: 65px;
    }

    #delete {
        position: absolute;
        margin-top: 3px;
        width: 65px;
    }

    button:focus {
        outline: none;
    }

    #dialogBox {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 1.2em;
        width: 200px;
        height: 50px;
        background: #fafafa;
        position: absolute;
        margin-top: -380px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 4px;
        transition: .4s;
        display: none;
    }

    @media (max-width: 500px) {
    #keyboardContainer {
        width: 360px; 
    }

    button {
        width: 31.5px;
        height: 53px;
        font-size: .65em;
        user-select: none;
        margin: 2px;
    }

    #enter {
        width: 50px;
        font-size: .5em;
    }

    #delete {
        width: 43px;
        margin-top: 2px;
    }

    #deleteButton {
        width: 20px;
        height: 20px;
    }

    #dialogBox {
        font-size: 1.3em;
        margin-top: -340px;
    }
}

@media (max-width: 355px) {
    #keyboardContainer {
        width: 290px;
    }

    button {
        width: 24px;
        height: 45px;
        font-size: 8px;
    }

    #enter {
        width: 40px;
        font-size: 6px;
    }

    #delete {
        width: 38px;
    }

    #deleteButton {
        width: 15px;
        height: 15px;
    }

    #dialogBox {
        font-size: 1.2em;
        margin-top: -340px;
    }
}

@media (max-width: 315px) {
    #keyboardContainer {
        width: 230px;
    }

    button {
        width: 19px;
        height: 30px;
        font-size: 6px;
    }

    #enter {
        width: 32px;
        font-size: 5px;
    }

    #delete {
        width: 33px;
    }

    #deleteButton {
        width: 15px;
        height: 15px;
    }

    #dialogBox {
        font-size: 1.2em;
        margin-top: -340px;
    }
}

@media (max-width: 270px) {
    #keyboardContainer {
        width: 180px;
    }

    button {
        margin: 1px;
        width: 16px;
        height: 28px;
        font-size: 4.5px;
    }

    #enter {
        width: 26px;
        font-size: 4px;
    }

    #delete {
        width: 28px;
        margin-top: 1.5px;
    }

    #deleteButton {
        width: 13px;
        height: 13px;
    }

    #dialogBox {
        font-size: 1.2em;
        margin-top: -340px;
    }
}
</style>