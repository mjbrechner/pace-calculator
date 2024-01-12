'use strict';

let inputtedNumber;
let currentPace;

document.getElementById("number-input-area").addEventListener('input', (event) => {

    inputtedNumber = parseInt(document.getElementById("number-input-area").value);

    if (leapYear === false) {
        currentPace = (inputtedNumber / percentageElapsedRaw).toFixed(2);
    } else {
        currentPace = (inputtedNumber / percentageElapsedRaw).toFixed(2);
    }

    if (isNaN(currentPace)) {
        document.getElementById("pace-results").innerText = ` `;
    } else {
        document.getElementById("pace-results").innerText = `You are on pace for ${currentPace} for the year.`;
    }

});