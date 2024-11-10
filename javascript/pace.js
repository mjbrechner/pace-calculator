'use strict';

let inputtedNumber;
let currentPace;

document.getElementById("number-input-area").addEventListener('input', (event) => {


    inputtedNumber = document.getElementById("number-input-area").value; // Grab the text added by the user.

    inputtedNumber = inputtedNumber.replace(/,/g, `.`); // Change any commas to periods in case the comma is being used as a decimal separator.

    inputtedNumber = parseFloat(inputtedNumber).toFixed(2); // Change to a string as a decimal number literal, keeping the result to two decimal places.

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