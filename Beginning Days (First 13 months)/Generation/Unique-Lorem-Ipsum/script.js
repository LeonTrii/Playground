//All JSON texts are written by me - 30 random paragraphs.
window.onload = () => {
    const value = document.getElementById('number');
    const button = document.getElementById('btn');
    fetch('https://raw.githubusercontent.com/LeonTrii/Playground/main/Generation/Unique-Lorem-Ipsum/paragraphs.json')
    .then(Response => Response.json())
    .then(paragraphs => {
        const paragraphArray = Object.values(paragraphs); // Turns into an array for referring to the data.
        button.addEventListener("click", () => {
            if (value.value <= 0) {
                window.alert('Please enter a positive number.');
            } else {
                for (let i = 0; i < value.value; i++) {
                    let createDiv = document.createElement('div');
                    let createBr = document.createElement('br')
                    createDiv.innerHTML = paragraphArray[0][Math.floor((Math.random() * 29 + 1))];
                    document.getElementById('container').appendChild(createDiv);
                    document.getElementById('container').appendChild(createBr);
                    document.getElementById('container').appendChild(createBr);
                }
            }
    });
    });
}
