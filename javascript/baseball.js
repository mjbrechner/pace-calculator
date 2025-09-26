'use strict';

let inputtedStat;
let inputtedGamesPlayed;
let inputtedGamesWon;
let inputtedGamesLost;
let inputtedGamesWonAndLost;
let currentSeasonPace;
let remainingGames;

const statArea = document.getElementById("stat-input-area");
const gamesArea = document.getElementById("games-input-area");
const winsArea = document.getElementById("wins-input-area");
const lossesArea = document.getElementById("losses-input-area");

const baseballButton = document.getElementById("baseball-button");
const baseballSection = document.getElementById("baseball");


statArea.addEventListener('input', (event) => {
    baseballCalculate();
});

gamesArea.addEventListener('input', (event) => {
    baseballCalculate();
});

winsArea.addEventListener('input', (event) => {
    baseballCalculate();
});

lossesArea.addEventListener('input', (event) => {
    baseballCalculate();
});

function baseballCalculate() {

    inputtedStat = document.getElementById("stat-input-area").value; // Grab the text added by the user.

    inputtedStat = inputtedStat.replace(/,/g, `.`); // Change any commas to periods in case the comma is being used as a decimal separator.

    inputtedStat = parseFloat(inputtedStat).toFixed(3); // Change to a string as a decimal number literal, keeping the result to two decimal places.

    inputtedGamesPlayed = gamesArea.value;
    inputtedGamesWon = winsArea.value;
    inputtedGamesLost = lossesArea.value;

    // Clean up numbers

    inputtedGamesPlayed = inputtedGamesPlayed.replace(/,/g, `.`);
    inputtedGamesPlayed = parseFloat(inputtedGamesPlayed).toFixed(0);

    inputtedGamesWon = inputtedGamesWon.replace(/,/g, `.`);
    inputtedGamesWon = parseFloat(inputtedGamesWon).toFixed(0);

    inputtedGamesLost = inputtedGamesLost.replace(/,/g, `.`);
    inputtedGamesLost = parseFloat(inputtedGamesLost).toFixed(0);

    if (isNaN(inputtedGamesWon)) {
        inputtedGamesWon = 0;
    }

    if (isNaN(inputtedGamesLost)) {
        inputtedGamesLost = 0;
    }

    inputtedGamesWonAndLost = (parseInt(inputtedGamesWon) + parseInt(inputtedGamesLost));

    console.log("inputtedGamesWonAndLost: " + inputtedGamesWonAndLost);
    // Choose value for Games Played depending on whether the user enters a total number or Wins + Losses    
    if (inputtedGamesPlayed > 0) {
        // A positive number has been entered into Games Played, so that number should supersede anything in the Wins and Losses sections
        remainingGames = 162 - inputtedGamesPlayed;
    } else {
        // Nothing useful has been entered into Games Played, so whatever has been added to Wins + Losses is used instead.
        inputtedGamesPlayed = inputtedGamesWonAndLost;
        remainingGames = 162 - inputtedGamesPlayed;
        gamesArea.placeholder = inputtedGamesPlayed;
    }

    currentSeasonPace = ((inputtedStat / inputtedGamesPlayed) * 162).toFixed(3);

    if (isNaN(currentSeasonPace) || (currentSeasonPace > 1000000000)) { // Since using "=== Infinity" doesn't work in strict mode, requiring more than a billion is sufficient for the purposes of pace numbers for a baseball season.
        document.getElementById("baseball-results").innerText = ` `;
    } else {
        console.log("REMAIMING GAMES IS " + remainingGames);

        if (remainingGames > 1) {
            document.getElementById("baseball-results").innerText = `Pace is ${currentSeasonPace} for the season. There are ${remainingGames} games left in the season.`;
        } else if (remainingGames === 1) {
            document.getElementById("baseball-results").innerText = `Pace is ${currentSeasonPace} for the season. There is ${remainingGames} game left in the season.`;
        } else if (remainingGames === 0) {
            document.getElementById("baseball-results").innerText = `Pace is ${currentSeasonPace}, with no more games remaining in a 162-game MLB season.`;
        } else {
            document.getElementById("baseball-results").innerText = `Games played exceeds a standard MLB season. Pace would be ${currentSeasonPace} over 162 games.`;
        }

    }
    // console.log(`Calculation says the stat is ${inputtedStat} and the Games Played is ${inputtedGamesPlayed}, so the pace is ${currentSeasonPace}.`);

};

function baseballToggleOn() {
    baseballButton.style.visibility = "hidden";
    baseballSection.style.display = "flex";
}

function baseballToggleOff() {
    baseballButton.style.visibility = "visible";
    baseballSection.style.display = "none";
}