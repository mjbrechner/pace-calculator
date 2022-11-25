'use strict';

document.getElementById("current-date").innerText = `Today is ${formattedDate}.`;
document.getElementById("place-in-year").innerText = `It is the ${nthDayOfTheYearString} day of the year, so ${percentageElapsed} has elapsed.`;
document.getElementById("remaining-in-year").innerText = `There are ${daysRemaining} days, or ${percentageRemaining}, remaining in ${year}.`;


// After today, there are ${daysRemaining} days remaining of the year.