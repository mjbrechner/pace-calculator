'use strict';

document.getElementById("current-date").innerText = `Today is ${formattedDate}.`;

if (leapYear === false) {
document.getElementById("place-in-year").innerText = `It is the ${nthDayOfTheYearString} day of the year. ${percentageElapsed} has elapsed.`;
} else {
    document.getElementById("place-in-year").innerText = `It is the ${nthDayOfTheYearString} day of the leap year. ${percentageElapsed} has elapsed.`;
}

document.getElementById("remaining-in-year").innerText = `There are ${daysRemaining} days, or ${percentageRemaining}, remaining in ${year}.`;