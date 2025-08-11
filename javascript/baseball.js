'use strict';

let inputtedStat;
let inputtedGamesPlayed;
let currentSeasonPace;

const statArea = document.getElementById("stat-input-area");
const gamesArea = document.getElementById("games-input-area");


statArea.addEventListener('input', (event) => {
    baseballCalculate();
});

gamesArea.addEventListener('input', (event) => {
    baseballCalculate();
});

function baseballCalculate() {

    inputtedStat = document.getElementById("stat-input-area").value; // Grab the text added by the user.

    inputtedStat = inputtedStat.replace(/,/g, `.`); // Change any commas to periods in case the comma is being used as a decimal separator.

    inputtedStat = parseFloat(inputtedStat).toFixed(3); // Change to a string as a decimal number literal, keeping the result to two decimal places.

    inputtedGamesPlayed = document.getElementById("games-input-area").value;
    inputtedGamesPlayed = inputtedGamesPlayed.replace(/,/g, `.`);
    inputtedGamesPlayed = parseFloat(inputtedGamesPlayed).toFixed(0);

    currentSeasonPace = ((inputtedStat / inputtedGamesPlayed) * 162).toFixed(3);


    if (isNaN(currentSeasonPace)) {
        document.getElementById("baseball-results").innerText = ` `;
    } else {
        document.getElementById("baseball-results").innerText = `Pace is ${currentSeasonPace} for the season.`;
    }
    console.log(`Calculation says the stat is ${inputtedStat} and the Games Played is ${inputtedGamesPlayed}, so the pace is ${currentSeasonPace}.`);
};