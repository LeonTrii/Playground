const btn = document.getElementById("btn");
const trigFunctions = document.getElementsByClassName("trig");
const perfectSquares = [169, 144, 121, 100, 81, 64, 49, 36, 25, 16, 9, 4];

let result = 0;

const simplifyRadical = () => {
    let radical = 0;
    for (let i = 0; i < perfectSquares.length; i++) {
        if (result % perfectSquares[i] == 0 && result != 0) {
            radical += Math.sqrt(perfectSquares[i]);
            result /= perfectSquares[i];
        }
    }
    if (result != 0 && result != 1) {
        if (radical == 0) {
            radical = "";
        }
        radical += "√" + result;
    } 
    return radical;
}

btn.addEventListener("click", () => {
    const inputX = document.getElementById("x").value.replace(/^0+/, '');
    const inputY = document.getElementById("y").value.replace(/^0+/, '');
    //Pythagorean Theorem
    result = Math.pow(parseFloat(inputX), 2) + Math.pow(parseFloat(inputY), 2);
    
    if (result % 1 != 0) {
        result = Math.sqrt(result);
    } else {
        result = simplifyRadical();
    }

    let trigValue = [`${inputY} / ${result}`, 
    `${inputX} / ${result}`,
    `${inputY} / ${inputX}`,
    `${result} / ${inputY}`,
    `${result} / ${inputX}`,
    `${inputX} / ${inputY}`];

    //Rationalizing

    for (let j = 0; j < trigValue.length; j++) {
        
        //Searches past the division sign, looking for square roots.
        let leftSide = trigValue[j].substring(0, trigValue[j].indexOf('/') - 1);
        let rightSide = trigValue[j].substring(trigValue[j].indexOf('/') + 2);
        const indexOfRoot = rightSide.indexOf("√");
        if (indexOfRoot != -1) {
            rightSide = rightSide.replace("√", ' ');
            leftSide += "√" + rightSide.substring(indexOfRoot + 1);
            let indexOfSpace = rightSide.indexOf(" ");

            rightSide = parseFloat(rightSide.substring(0, indexOfSpace)) * parseFloat(rightSide.substring(indexOfSpace + 1));
        }


        trigValue[j] = leftSide + " / " + rightSide;
    }

    trigFunctions[0].innerHTML = `Sin θ = ${trigValue[0]}`;
    trigFunctions[1].innerHTML = `Cos θ = ${trigValue[1]}`;
    trigFunctions[2].innerHTML = `Tan θ = ${trigValue[2]}`;
    trigFunctions[3].innerHTML = `Csc θ = ${trigValue[3]}`;
    trigFunctions[4].innerHTML = `Sec θ = ${trigValue[4]}`;
    trigFunctions[5].innerHTML = `Cot θ = ${trigValue[5]}`;


});
