'use strict';

// Get information on current date
const today = new(Date);
const day = today.getDate();
const dayNameList = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
const dayName = dayNameList[day - 1];
const month = today.getMonth() + 1;
const monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MonthName = monthNameList[today.getMonth()];
const year = today.getFullYear();
const formattedDate = `${MonthName} ${dayName}, ${year}`;

// Leap year?
let leapYear;
if ((year % 4 === 0) && (year % 100 !== 0)) {
    leapYear = true;
} else if (year % 400 === 0) {
    leapYear = true;
} else {
    leapYear = false;
}
console.log(`Is it a leap year? Survey says... ${Boolean(leapYear)}!`);

// Calculate information based on the current date in relation to the rest of the year.

let nthDayOfTheYear;

if (month === 1) {
    nthDayOfTheYear = day;
} else if (month === 2) {
    nthDayOfTheYear = day + 31;
} else if (month === 3) {
    nthDayOfTheYear = day + 59;
} else if (month === 4) {
    nthDayOfTheYear = day + 90;
} else if (month === 5) {
    nthDayOfTheYear = day + 120;
} else if (month === 6) {
    nthDayOfTheYear = day + 151;
} else if (month === 7) {
    nthDayOfTheYear = day + 181;
} else if (month === 8) {
    nthDayOfTheYear = day + 212;
} else if (month === 9) {
    nthDayOfTheYear = day + 243;
} else if (month === 10) {
    nthDayOfTheYear = day + 273;
} else if (month === 11) {
    nthDayOfTheYear = day + 304;
} else if (month === 12) {
    nthDayOfTheYear = day + 334;
}

if ((leapYear === true) && (month > 2)) {
    nthDayOfTheYear = nthDayOfTheYear + 1;
}

let nthDayOfTheYearString = nthDayOfTheYear.toString();

const numberStringEndings = ['st', 'nd', 'rd', 'th'];

if (nthDayOfTheYearString.charAt(nthDayOfTheYearString.length - 1) === 1) {
    nthDayOfTheYearString = `${nthDayOfTheYearString}${numberStringEndings[0]}`;
} else if (nthDayOfTheYearString.charAt(nthDayOfTheYearString.length - 1) === 2) {
    nthDayOfTheYearString = `${nthDayOfTheYearString}${numberStringEndings[1]}`;
} else if (nthDayOfTheYearString.charAt(nthDayOfTheYearString.length - 1) === 3) {
    nthDayOfTheYearString = `${nthDayOfTheYearString}${numberStringEndings[2]}`;
} else {
    nthDayOfTheYearString = `${nthDayOfTheYearString}${numberStringEndings[3]}`;
}
console.log(nthDayOfTheYearString);

// Calculate days remaining of the year

let daysRemaining;
if (leapYear === false) {
    daysRemaining = 365 - nthDayOfTheYear;
} else {
    daysRemaining = 366 - nthDayOfTheYear;
}
console.log(`There are ${daysRemaining} days remaining of the year after today.`)

// What percentage of the year has elasped and has yet to elapse?
let percentageElapsedRaw;
let percentageElapsed;
let percentageRemaining;

if (leapYear === false) {
    percentageElapsedRaw = nthDayOfTheYear / 365;
    percentageElapsed = new Intl.NumberFormat('default', {style: 'percent', maximumFractionDigits: 2,}).format(nthDayOfTheYear / 365);
    percentageRemaining = new Intl.NumberFormat('default', {style: 'percent', maximumFractionDigits: 2,}).format(daysRemaining / 365);
    // percentageRemaining = daysRemaining / 365;
} else {
    percentageElapsedRaw = nthDayOfTheYear / 366;
    percentageElapsed = new Intl.NumberFormat('default', {style: 'percent', maximumFractionDigits: 2,}).format(nthDayOfTheYear / 366);
    percentageRemaining = new Intl.NumberFormat('default', {style: 'percent', maximumFractionDigits: 2,}).format(daysRemaining / 366);
}