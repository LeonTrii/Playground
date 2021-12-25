const breakValue = document.getElementById('breakValue');
const sessionValue = document.getElementById('sessionValue');
const startAndStop = document.getElementById('start_stop');
const timeLeft = document.getElementById('time-left');
const timerLabel = document.getElementById('timer-label');

let breakTime = 5;
let sessionTime = 25;
let orginalBreak = 5;
let orginalSession = 25;
let seconds = 1;
let execute = false;
let executeTimer = true;

let intervalSession;
let intervalBreak;

$('#break-increment').click(() => {
    if (breakTime < 60 && executeTimer) {
        breakTime++;
        orginalBreak++
        breakValue.innerHTML = breakTime;
    }
});

$('#break-decrement').click(()=> {
    if (breakTime > 1 && executeTimer) {
        breakTime--;
        orginalBreak--;
        breakValue.innerHTML = breakTime;
    }
});

$('#session-increment').click(() => {
    if (sessionTime < 60 && executeTimer) {
        sessionTime++;
        orginalSession++;
        sessionValue.innerHTML = sessionTime;
        timeLeft.innerHTML = `${sessionTime}:00`;
    }
});

$('#session-decrement').click(()=> {
    if (sessionTime > 1 && executeTimer) {
        sessionTime--;
        orginalSession--;
        sessionValue.innerHTML = sessionTime;
        timeLeft.innerHTML = `${sessionTime}:00`;
    }
});

$('#start_stop').click(() => {
    if (executeTimer) {
        startSession();
    }
});

const startSession = (() => {
    executeTimer = false;
    intervalSession = setInterval(() => {
        seconds--;
        for (let i = 0; i < sessionTime + 1; i++) {
            timerLabel.innerHTML = "Session";
                for (let j = 0; j < 60; j++) {
                    seconds = seconds.toString();
                    if (seconds.length == 1) {
                        timeLeft.innerHTML = `${sessionTime}:0${seconds}`;
                    } else {
                        timeLeft.innerHTML = `${sessionTime}:${seconds}`;
                    }
                    seconds = parseInt(seconds);
                    if (seconds == -1) {
                        timeLeft.innerHTML = `${sessionTime}:00`;
                        seconds = 59;
                        sessionTime--;
                    }
                    
                }
        }
        if (sessionTime == 0 && seconds == 0) {
            breakTime = orginalBreak;
            startBreak();
            clearInterval(intervalSession);
            const audio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav');
            audio.play();
        }
    }, 1000);
});

const startBreak = (() => {
    execute = true;
    intervalBreak = setInterval(() => {
        seconds--;
        for (let i = 0; i < breakTime + 1; i++) {
            timerLabel.innerHTML = "Break";
                for (let j = 0; j < 60; j++) {
                    seconds = seconds.toString();
                    if (seconds.length == 1) {
                        timeLeft.innerHTML = `${breakTime}:0${seconds}`;
                    } else {
                        timeLeft.innerHTML = `${breakTime}:${seconds}`;
                    }
                    seconds = parseInt(seconds);
                    if (seconds == -1) {
                        console.log(breakTime);
                        timeLeft.innerHTML = `${breakTime}:00`;
                        seconds = 59;
                        breakTime--;
                    }
                }
                if (breakTime == 0 && seconds == 0) {
                    sessionTime = orginalSession;
                    console.log(sessionTime)
                    const audio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav');
                    audio.play();
                    startSession();
                    clearInterval(intervalBreak);
                }
        }
    }, 1000);
});

$('#reset').click(() => {
    clearInterval(intervalBreak);
    clearInterval(intervalSession);
    breakTime = 5;
    sessionTime = 25;
    orginalBreak = 5;
    orginalSession = 25;
    seconds = 1;
    execute = false;
    executeTimer = true;
    timeLeft.innerHTML = '25:00'
});