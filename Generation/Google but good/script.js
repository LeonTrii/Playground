const search = document.getElementById("search");
const input = document.getElementById("input");
console.log(1)
search.addEventListener("click", () => {
    let url = "https://www.google.com/search?q=" + input.value;
    window.open(url);
});