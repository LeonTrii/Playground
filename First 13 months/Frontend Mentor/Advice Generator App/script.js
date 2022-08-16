const url = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("advice");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

let advice = null;

const getAdvice = () => {
    fetch(url) 
    .then(res => res.json())
    .then(out => {
    advice = out.slip;
    adviceNumber.innerHTML = "A D V I C E &nbsp; # " + advice.id;
    quote.innerHTML = "\"" + advice.advice + "\"";
}).catch(e => {throw e});
}

getAdvice();

btn.addEventListener("click", () => {
    getAdvice();
});