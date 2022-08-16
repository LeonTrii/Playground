<template>
<input id='value' maxlength="1" type="text" pattern="[a-zA-Z]*" oninput="this.value = this.value.toUpperCase()">
<button @click="click" id='btn'><strong>Enter</strong></button>
    <div id="letters">
            <div class="letter" v-for='_ in lengthOfWord'></div>
    </div>
    <div id="lines"> 
        <!--I have no idea why this error shows up, but if it works, it works!-->
        <div class="line" v-for='_ in lengthOfWord'></div>
    </div>
</template>

<script>
//Words are over five letters long
const letters = document.getElementsByClassName('letter');
const wordsList = require('./words.json'); 
const words = wordsList['words'];
let randomWord = words[parseInt(Math.random() * words.length)].toUpperCase();
let array = []; 


for (let i = 0; i < randomWord.length; i++) {
    array.push([randomWord[i]]); //To use Vue for loop
}

const reset = (win) => {
    const head = document.getElementById('head');
    const body = document.getElementById('body');
    const leftArm = document.getElementById('leftArm');
    const rightArm = document.getElementById('rightArm');
    const leftLeg = document.getElementById('leftLeg');
    const rightLeg = document.getElementById('rightLeg');
        if (win) {
            alert("You've won! Refresh to play again.");
        } else {
            alert("You've lost! The word was " + randomWord + ". Refresh to play again.");
        }

        head.style.display = 'none';
        body.style.display = 'none';
        leftArm.style.display = 'none';
        rightArm.style.display = 'none';
        leftLeg.style.display = 'none';
        rightLeg.style.display = 'none';
        for (let i = 0; i < randomWord.length; i++) {
            letters[i].innerHTML = '';
        }
        
        randomWord = words[parseInt(Math.random() * words.length)].toUpperCase();
    }

const editMan = () => {
    let count = 0;
    const head = document.getElementById('head');
    const body = document.getElementById('body');
    const leftArm = document.getElementById('leftArm');
    const rightArm = document.getElementById('rightArm');
    const leftLeg = document.getElementById('leftLeg');
    const rightLeg = document.getElementById('rightLeg');

    if (head.style.display == '') {
        head.style.display = 'block';
    } else if (body.style.display == '') {
        body.style.display = 'block';
    } else if (leftArm.style.display == '') {
        leftArm.style.display = 'block';
    } else if (rightArm.style.display == '') {
        rightArm.style.display = 'block';
    } else if (leftLeg.style.display == '') {
        leftLeg.style.display = 'block';
    } else if (rightLeg.style.display == '') {
        rightLeg.style.display = 'block';
        setTimeout(() => {
            reset(false);
        }, 400);
    } 
}

const checkWord = (char) => {
    let count = 0;
    for (let i = 0; i < randomWord.length; i++) {
        if (char == randomWord[i]) {
            letters[i].innerHTML = char;
        } 

        if (letters[i].innerHTML != '') {
            count++;
        }
    }

    if (count == 0) {
        editMan();
    }

    if (count == randomWord.length) {
        setTimeout(() => {
            reset(true);
        }, 400)
    }
}

export default {
    data() {
        return {
            lengthOfWord: array
        }
    },
    methods: {
        click() {
            const input = document.getElementById('value'); 
            let char = input.value;
            if (char == "") {
                alert("No input");
            } else if (char == 'A' || char == 'B' || char == 'C' || char == 'D' || char == 'E' || char == 'F' || char == 'G' || char == 'H' || char == 'I' || char == 'J' || char == 'K' || char == 'L' || char == 'M' || char == 'N' || char == 'O' || char == 'P' || char == 'Q' || char == 'R' || char == 'S' || char == 'T' || char == 'U' || char == 'V' || char == 'W' || char == 'X' || char == 'Y' || char == 'Z') {
                checkWord(char);
                input.value = "";
            } else {
                alert("Please enter a letter");
            }
        }
    }
}


</script>

<style lang="scss">
    button {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        position: absolute;
        width: 170px;
        height: 50px;
        margin-top: 32px;
        margin-left: 100px;
        font-size: 2em;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 30px;
        transition: .4s;
        box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        background: rgb(238, 238, 238);
    }

    input {
        box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
        font-family: 'Roboto Mono', monospace;
        position: absolute;
        margin-top: 20px;
        width: 70px;
        height: 70px;
        font-size: 3em;
    }

    #lines, #letters {
        position: absolute;
        width: 700px;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 670px;
        margin-top: 300px;
    }

    #letters {
        margin-top: 230px;
    }

    .letter {
        width: 50px;
        height: 4px;
        font-size: 3.5em;
    }

    .line {
        font-size: 2em;
        width: 50px;
        height: 4px;
        background: #fff;
    }

</style>