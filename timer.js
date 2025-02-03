"use strict";

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let now;
let newYear = new Date(
    Date.UTC(
        new Date().getUTCFullYear() + 1,
        0,
        1,
        0,
        0,
        0)
);

function updateTimer() {
    now = new Date();
    let diffCount = newYear - now;

    let d = Math.floor(diffCount / 1000 / 60 / 60 / 24);
    let h = Math.floor((diffCount / 1000 / 60 / 60) % 24);
    let m = Math.floor((diffCount / 1000 / 60) % 60);
    let s = Math.floor((diffCount / 1000) % 60);

    days.innerText = `${d}`;
    hours.innerText = `${h}`;
    minutes.innerText = `${m}`;
    seconds.innerText = `${s}`;
}

setInterval(updateTimer, 1000);
