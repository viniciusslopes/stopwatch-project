let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let millisecondsElemente = document.getElementById("milliseconds");

let buttonStart = document.getElementById("start");
let buttonPause = document.getElementById("pause");
let buttonReset = document.getElementById("reset");
let buttonResume = document.getElementById("resume");


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPause = false;

buttonStart.onclick = () => {
    isPause = true;
    buttonPause.style.display = "flex";
    buttonStart.style.display = "none";
    buttonReset.style.display = "flex";

    interval = setInterval(() => {
        if (isPause) {
            milliseconds += 10;
        };
        if (milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        };
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        };
        minutesElement.innerHTML = formatTime(minutes);
        secondsElement.innerHTML = formatTime(seconds);
        millisecondsElemente.innerHTML = formatMilliseconds(milliseconds);
    }, 10);
};



buttonPause.onclick = () => {
    isPause = false;
    buttonStart.style.display = "flex";
    buttonPause.style.display = "none";
    buttonReset.style.display = "none";
};

buttonReset.onclick = () => {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
};


buttonResume.onclick = () => {
    buttonPause.style.display = "none";
    buttonReset.style.display = "none";
    buttonStart.style.display = "flex";
    isPause = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
};



const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};


const formatMilliseconds = (time) => {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
};

