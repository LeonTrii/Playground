let percentArray = [];
let weightArray = [];

const addAssignment = () => {
    const div = document.createElement("div");
    div.classList.add("inputs")
    div.id = "assignment";
    div.innerHTML = `<div id="percent">
    <h3>Enter grade (%):</h3>
    <input class="percent" type="number">
</div>
<div id="weight">
    <h3>Enter weight (%):</h3>
    <input class="weight" type="number">
</div>`;
    container.appendChild(div);
}

const calculate = () => {
    const percent = document.getElementsByClassName('percent');
    const weight = document.getElementsByClassName("weight");
    let grade = 0;
    let total = 0;
    let totalWeight = 0;
    let pass = true;

    for (let i = 0; i < percent.length; i++) {
        percentArray.push(parseFloat(percent[i].value));
        weightArray.push(parseFloat(weight[i].value));
    }

    percentArray = percentArray.filter(value => !Number.isNaN(value));
    weightArray = weightArray.filter(value => !Number.isNaN(value));
    

    percentArray.forEach(element => {
        if (element < 0) {
            alert("No negatives!");
            pass = false;
        }
    });

    weightArray.forEach(element => {
        if (element < 0) {
            alert("No negatives!");
            pass = false;
        }
    });

    if (percentArray.length != weightArray.length) {
        alert("Must have equal grade inputs and weight inputs");
    } else if (pass) {
        for (let i = 0; i < percentArray.length; i++) {
            total += percentArray[i] * weightArray[i];
        }

        weightArray.forEach(element => {
            totalWeight += element;
        });

        grade = total / totalWeight;
    }
    alert(`Your grade is: ${grade}%`);
}



