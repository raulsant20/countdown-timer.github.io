const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = '31 October 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const Seconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(Seconds/3600/24);
    const hours = Math.floor((Seconds/3600)%24);
    const mins = Math.floor((Seconds/60)%60);
    const seconds = Math.floor(Seconds%60);
    //console.log(days, hours, mins, seconds)
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//initial call
countdown()

setInterval(countdown, 1000)