const btn = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");

let a = 1;
let b = 1;
let c = 0;

const factor = () => {
    try {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        let xFactorTotal = a * c;
        //Finding common factors 
    
        let factors = Array.from(Array(xFactorTotal + 1).keys()).slice(2);
        factors = factors.filter(i => xFactorTotal % i == 0);
    
        let bValues = Array.from(Array(b + 1).keys()).slice(2); 
        let commonDigits = factors.filter(element => bValues.includes(element));
    
        //Sorting out all unnecesscary values
        let answers = [];
        for (let i = 0; i < commonDigits.length; i++) {
            current = commonDigits[i];
            for (let j = 0; j < commonDigits.length; j++) {
                if (current + commonDigits[j] == b && current * commonDigits[j] == xFactorTotal && answers.length == 0) {
                    answers.push(current);
                    answers.push(commonDigits[j]);
                }
            }
        }
    
        //Dividing by a value
        answers = answers.map(element => element % a == 0 ? element / a : element + `/${a}`);
        
        //Adding signs to display
        answers = answers.map(element => element.toString().indexOf("-") == -1 ? "+" + element: element);
    
        if (answers.length != 2) {
            alert("Not factorable");
        } else {
            output.innerHTML = `(x${answers[0]})(x${answers[1]})`;
        }
    } catch (error) {
        alert("Not a correct input")
    }

}

btn.addEventListener("click", () => {
    let value = input.value.split(' ').join('');
    if (value.charAt(0) != "x") {
        a = value.substring(0, value.indexOf("x"));
    }

    //removing ax^2+
    value = value.substring(value.indexOf("x") + 4);

    if (value.charAt(0) != "x") {
        b = value.substring(0, value.indexOf("x"));
    }

    //removing bx+
    value = value.substring(value.indexOf("x") + 2);

    if (value == "") {
        alert("No value for c.");
    } else {
        c = value;
        factor();
    }
});