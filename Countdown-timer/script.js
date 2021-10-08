function countdown(year, month, day) {

    let currentDate = new Date();
    let countdownTo = new Date(year, month - 1, day);
    let subtractDates = countdownTo - currentDate;
    let secondsTotal = Math.floor(subtractDates / 1000);

    let minutes = Math.floor(secondsTotal / 60) % 60;
    let hours = Math.floor(secondsTotal / 3600) % 24;
    let days = Math.floor(secondsTotal / 3600 / 24);
    let seconds = Math.floor(secondsTotal) % 60;

    let daysId = document.getElementById('days');
    let hoursId = document.getElementById('hours');
    let minutesId = document.getElementById('minutes');  
    let secondsId = document.getElementById('seconds');

    daysId.innerHTML = days;
    hoursId.innerHTML = hours;
    minutesId.innerHTML = minutes;
    secondsId.innerHTML = seconds;

}

    window.alert("Enter a date to countdown! (Use numbers. To reset, refresh the page.)");
    let yearPrompt = window.prompt("Enter the year.");
    let monthPrompt = window.prompt("Enter the month.")
    let dayPrompt = window.prompt("Enter the day.")
    setInterval(countdown, 1000, yearPrompt, monthPrompt, dayPrompt);
    countdown(yearPrompt, monthPrompt, dayPrompt);
