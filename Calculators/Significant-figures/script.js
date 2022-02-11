window.onload = () => {
    const button = document.getElementById('btn');
    const input = document.getElementById('input');
    const output = document.getElementById('result');

    button.addEventListener("click", () => {
        let value = input.value;
        let execute = false;
        let count = 0;
        if (value.indexOf('.') == -1) {
            for (let i = value.length - 1; i >= 0; i--) {
            if (value[i] != 0) {
                execute = true;
            }
            if (execute && value[i] != '-') {
                count++;
            }
            }
            output.innerHTML = count + " sig figs";
        }

        if (value.indexOf('.') != -1) {
            for (let i = 0; i < value.length; i++) {
            if (value[i] != 0 && value[i] != '-' && value[i] != '.') {
                execute = true;
            }

            if (execute && value[i] != '-' && value[i] != '.') {
                count++;
            }
            }
            output.innerHTML = count + " sig figs";
        }

    });
};