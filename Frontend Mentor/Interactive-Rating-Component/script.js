const buttons = document.getElementsByClassName("number");
const submit = document.getElementById("btn");
const container = document.getElementById("inside");
const thank = document.getElementById("thankContainer");
const ratings = document.getElementById("ratings");
let rating = 1;

buttons[0].addEventListener("click", () => {
    if (buttons[0].style.backgroundColor != "rgb(251, 116, 19)") {
        buttons[0].style.backgroundColor = "hsl(25, 97%, 53%)";
        buttons[0].style.borderColor = "hsl(25, 97%, 53%)";
        buttons[0].style.color = "#fff";

        buttons[1].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[1].style.color = "hsl(217, 12%, 63%)";
        buttons[1].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[2].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[2].style.color = "hsl(217, 12%, 63%)";
        buttons[2].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[3].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[3].style.color = "#hsl(217, 12%, 63%)";
        buttons[3].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[4].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[4].style.color = "hsl(217, 12%, 63%)";
        buttons[4].style.borderColor = "rgba(124, 135, 152, 0.2)";
    } else {
        buttons[0].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[0].style.color = "hsl(217, 12%, 63%)";
        buttons[0].style.borderColor = "rgba(124, 135, 152, 0.2)";
    }
});

buttons[1].addEventListener("click", () => {
    if (buttons[1].style.backgroundColor != "rgb(251, 116, 19)") {
        buttons[1].style.backgroundColor = "hsl(25, 97%, 53%)";
        buttons[1].style.borderColor = "hsl(25, 97%, 53%)";
        buttons[1].style.color = "#fff";

        buttons[0].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[0].style.color = "hsl(217, 12%, 63%)";
        buttons[0].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[2].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[2].style.color = "hsl(217, 12%, 63%)";
        buttons[2].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[3].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[3].style.color = "#hsl(217, 12%, 63%)";
        buttons[3].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[4].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[4].style.color = "hsl(217, 12%, 63%)";
        buttons[4].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 2;
    } else {
        buttons[1].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[1].style.color = "hsl(217, 12%, 63%)";
        buttons[1].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 1;
    }
});

buttons[2].addEventListener("click", () => {
    if (buttons[2].style.backgroundColor != "rgb(251, 116, 19)") {
        buttons[2].style.backgroundColor = "hsl(25, 97%, 53%)";
        buttons[2].style.borderColor = "hsl(25, 97%, 53%)";
        buttons[2].style.color = "#fff";

        buttons[0].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[0].style.color = "hsl(217, 12%, 63%)";
        buttons[0].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[1].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[1].style.color = "hsl(217, 12%, 63%)";
        buttons[1].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[3].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[3].style.color = "#hsl(217, 12%, 63%)";
        buttons[3].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[4].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[4].style.color = "hsl(217, 12%, 63%)";
        buttons[4].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 3;
    } else {
        buttons[2].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[2].style.color = "hsl(217, 12%, 63%)";
        buttons[2].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 1;
    }
});

buttons[3].addEventListener("click", () => {
    if (buttons[3].style.backgroundColor != "rgb(251, 116, 19)") {
        buttons[3].style.backgroundColor = "hsl(25, 97%, 53%)";
        buttons[3].style.borderColor = "hsl(25, 97%, 53%)";
        buttons[3].style.color = "#fff";

        buttons[0].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[0].style.color = "hsl(217, 12%, 63%)";
        buttons[0].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[1].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[1].style.color = "hsl(217, 12%, 63%)";
        buttons[1].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[2].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[2].style.color = "#hsl(217, 12%, 63%)";
        buttons[2].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[4].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[4].style.color = "hsl(217, 12%, 63%)";
        buttons[4].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 4;
    } else {
        buttons[3].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[3].style.color = "hsl(217, 12%, 63%)";
        buttons[3].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 1;
    }
});

buttons[4].addEventListener("click", () => {
    if (buttons[4].style.backgroundColor != "rgb(251, 116, 19)") {
        buttons[4].style.backgroundColor = "hsl(25, 97%, 53%)";
        buttons[4].style.borderColor = "hsl(25, 97%, 53%)";
        buttons[4].style.color = "#fff";

        buttons[0].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[0].style.color = "hsl(217, 12%, 63%)";
        buttons[0].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[1].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[1].style.color = "hsl(217, 12%, 63%)";
        buttons[1].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[2].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[2].style.color = "#hsl(217, 12%, 63%)";
        buttons[2].style.borderColor = "rgba(124, 135, 152, 0.2)";

        buttons[3].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[3].style.color = "hsl(217, 12%, 63%)";
        buttons[3].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 5;
    } else {
        buttons[4].style.backgroundColor = "rgba(124, 135, 152, 0.2)";
        buttons[4].style.color = "hsl(217, 12%, 63%)";
        buttons[4].style.borderColor = "rgba(124, 135, 152, 0.2)";
        rating = 1;
    }
});

submit.addEventListener("click", () => {
    container.style.display = "none";
    thank.style.display = "block";
    ratings.innerHTML = "You selected " + rating + " out of 5";
}); 