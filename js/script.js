'use strict'

const time = document.querySelector('.time');
const color = document.querySelector('.color-code');

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = normalizeNum(hours);
    minutes = normalizeNum(minutes);
    seconds = normalizeNum(seconds);

    time.innerHTML = hours + ':' + minutes + ':' + seconds;
    
    let colorCode = '#' + hours + minutes + seconds;
    document.body.style.background = colorCode;
    color.innerHTML = colorCode;
}

function normalizeNum(num) {
    if (num <= 9) {
        return '0' + num;
    }

    return num;
}

setInterval(showTime, 1000);
