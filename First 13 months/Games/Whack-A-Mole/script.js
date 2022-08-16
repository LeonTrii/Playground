const timer = document.getElementById('seconds');
const total = document.getElementById('points');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

let time = 60;
let execute = true;
let executeMole = true;
let executeButton = true;
let result = 0;

$('#start').click(function() {
    executeButton = true;
    executeMole = true;
    $('#one').on('click');
    $('#two').on('click');
    $('#three').on('click');
    $('#four').on('click');
    $('#five').on('click');
    $('#six').on('click');
    $('#seven').on('click');
    $('#eight').on('click');
    $('#nine').on('click');
    $('#ten').on('click');
    if (execute) {
        execute = false;
        const interval = setInterval(function() {
            time--;
            timer.innerHTML = time;
            if (executeMole) {
                executeMole = false;
                let randomMole = Math.floor(Math.random() * 9);
                if (randomMole == 0) {
                    $('#one').addClass('mole');
                } else if (randomMole == 1) {
                    $('#two').addClass('mole');
                } else if (randomMole == 2) {
                    $('#three').addClass('mole');
                } else if (randomMole == 3) {
                    $('#four').addClass('mole');
                } else if (randomMole == 4) {
                    $('#five').addClass('mole');
                } else if (randomMole == 5) {
                    $('#six').addClass('mole');
                } else if (randomMole == 6) {
                    $('#seven').addClass('mole');
                } else if (randomMole == 7) {
                    $('#eight').addClass('mole');
                } else if (randomMole == 8) {
                    $('#nine').addClass('mole');
                }
        }
            if (time === -1) {
                time = 60;
                timer.innerHTML = 60;
                execute = true;
                executeButton = true;
                executeMole = true;
                clearInterval(interval);
                alert('Time is up! Your score is ' + result + ' points!');
                one.classList.remove("mole");
                two.classList.remove("mole");
                three.classList.remove("mole");
                four.classList.remove("mole");
                five.classList.remove("mole");
                six.classList.remove("mole");
                seven.classList.remove("mole");
                eight.classList.remove("mole");
                nine.classList.remove("mole");
                result = 0;
                total.innerHTML = 0;
                $('#one').off('click');
                $('#two').off('click');
                $('#three').off('click');
                $('#four').off('click');
                $('#five').off('click');
                $('#six').off('click');
                $('#seven').off('click');
                $('#eight').off('click');
                $('#nine').off('click');
                $('#ten').off('click');
            }
        }, 1000);

        $('#reset').click(function() {
            time = 60;
            timer.innerHTML = 60;
            execute = true;
            executeButton = true;
            executeMole = true;
            clearInterval(interval);
            one.classList.remove("mole");
            two.classList.remove("mole");
            three.classList.remove("mole");
            four.classList.remove("mole");
            five.classList.remove("mole");
            six.classList.remove("mole");
            seven.classList.remove("mole");
            eight.classList.remove("mole");
            nine.classList.remove("mole");
            result = 0;
            total.innerHTML = 0;
            $('#one').off('click');
            $('#two').off('click');
            $('#three').off('click');
            $('#four').off('click');
            $('#five').off('click');
            $('#six').off('click');
            $('#seven').off('click');
            $('#eight').off('click');
            $('#nine').off('click');
            $('#ten').off('click'); 
        });

        $('#one').on('click', function() {
            if ($('#one').hasClass("mole")) {
                one.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#two').on('click', function() {
            if ($('#two').hasClass("mole")) {
                two.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#three').on('click', function() {
            if ($('#three').hasClass("mole")) {
                three.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#four').on('click', function() {
            if ($('#four').hasClass("mole")) {
                four.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#five').on('click', function() {
            if ($('#five').hasClass("mole")) {
                five.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#six').on('click', function() {
            if ($('#six').hasClass("mole")) {
                six.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#seven').on('click', function() {
            if ($('#seven').hasClass("mole")) {
                seven.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#eight').on('click', function() {
            if ($('#eight').hasClass("mole")) {
                eight.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });

        $('#nine').on('click', function() {
            if ($('#nine').hasClass("mole")) {
                nine.classList.remove("mole");
                executeMole = true;
                result++;
                total.innerHTML = result;
            } else {
                result--;
                total.innerHTML = result;
            }
        });
    }
});