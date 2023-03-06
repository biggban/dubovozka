import {timeTable} from "./data.js";
const timetableSection = document.getElementById("timetable");
// let chosenDirection = document.getElementsByClassName("chosen");
let toMoscow = document.getElementsByClassName("toMoscow");
let toDubki = document.getElementsByClassName("toDubki");

let day;
let intrv1;
let intrv2;
let intrv3;
let intrv4;
let intrv5;

window.onload = clearAllIntervals();

function calculateDayOfWeek() {
    let dayOfWeekDate = new Date();
    let tempDayWeek = dayOfWeekDate.getDay();
    if (tempDayWeek == 5) {
        return (day = timeTable.saturday);
    } else if (tempDayWeek == 0) {
        return (day = timeTable.sunday);
    } else {
        return (day = timeTable.weekDays);
    }
}

toMoscow[0].addEventListener("click", () => {
    calculateDayOfWeek();
    clearInterval(intrv1);
    clearInterval(intrv2);
    clearInterval(intrv3);
    clearInterval(intrv4);
    clearInterval(intrv5);
    calcDayMoscow();
    UpdateWithoutFilter();

    // day = day.filter((d) => {
    //     return d.whereTo == "toMoscow";
    // });

    if (toMoscow[0].classList.contains("chosen")) {
        return null;
    } else {
        toMoscow[0].classList.toggle("chosen");
        toDubki[0].classList.toggle("chosen");
    }
});
toDubki[0].addEventListener("click", () => {
    calculateDayOfWeek();
    clearInterval(intrv1);
    clearInterval(intrv2);
    clearInterval(intrv3);
    clearInterval(intrv4);
    clearInterval(intrv5);
    calcDayDubki();
    UpdateWithoutFilter();
    day = day.filter((d) => {
        return d.whereTo == "toDubki";
    });

    if (toDubki[0].classList.contains("chosen")) {
        return null;
    } else {
        toDubki[0].classList.toggle("chosen");
        toMoscow[0].classList.toggle("chosen");
    }
});

// Get timetable with filter first
/*
function getTimetable1(dayOfWeek) {
    let date = new Date();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let output;
    // Filtration works
    dayOfWeek = dayOfWeek.filter((d) => {
        return d.whereTo == "toMoscow";
    });
    dayOfWeek.forEach((weekDay) => {
        let tempDifference = 0;
        let difference;
        let tempHours = weekDay.hours;
        let tempMinutes = weekDay.minutes;
        if (tempHours != "") {
            tempDifference = tempHours * 60 + tempMinutes - dateHours * 60 - dateMinutes;
        } else {
            tempDifference = undefined;
        }

        let formatHours;

        if (tempDifference != undefined) {
            formatHours = Math.floor(tempDifference / 60);
        } else {
            formatHours = undefined;
        }
        switch (true) {
            case formatHours > 0:
                difference = `${Math.floor(tempDifference / 60)}ч ${tempDifference % 60}мин`;
                break;
            case formatHours == 0:
                difference = `${tempDifference % 60} мин`;
                break;
            case formatHours < 0:
                difference = `${Math.abs(Math.floor(tempDifference / 60))}ч ${Math.abs(
                    tempDifference % 60,
                )} мин. назад`;
                break;
            case formatHours == undefined:
                difference = "По прибытию";
                break;
        }

        if (formatHours >= 0) {
            output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
        } else {
            output = "";
        }
    });

    timetableSection.innerHTML = output;
}
*/

function getTimetable1(dayOfWeek) {
    let date = new Date();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let output = "";
    // Filtration works
    dayOfWeek = dayOfWeek.filter((d) => {
        return d.whereTo == "toMoscow";
    });

    dayOfWeek.forEach((weekDay) => {
        let tempDifference = 0;
        let difference;
        let tempHours = weekDay.hours;
        let tempMinutes = weekDay.minutes;
        if (tempHours !== "") {
            tempDifference = tempHours * 60 + tempMinutes - dateHours * 60 - dateMinutes;
        } else {
            tempDifference = undefined;
        }

        let formatHours;

        if (tempDifference != undefined) {
            formatHours = Math.floor(tempDifference / 60);
        } else {
            formatHours = undefined;
        }
        switch (true) {
            case formatHours > 0:
                difference = `${Math.floor(tempDifference / 60)}ч ${tempDifference % 60}мин`;
                break;
            case formatHours == 0:
                difference = `${tempDifference % 60} мин`;
                break;
            case formatHours < 0:
                difference = `${Math.abs(Math.floor(tempDifference / 60))}ч ${Math.abs(
                    tempDifference % 60,
                )} мин. назад`;
                break;
            case formatHours == undefined:
                difference = "По прибытию";
                break;
        }

        if (formatHours >= 0 || formatHours == undefined) {
            output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
        } else {
            output = "";
        }
    });
    timetableSection.innerHTML = output;
}

// Get timetable without the filter
function getTimetable2(dayOfWeek) {
    let date = new Date();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let output = "";

    dayOfWeek.forEach((weekDay) => {
        let tempDifference = 0;
        let difference;
        let tempHours = weekDay.hours;
        let tempMinutes = weekDay.minutes;
        if (tempHours !== "") {
            tempDifference = tempHours * 60 + tempMinutes - dateHours * 60 - dateMinutes;
        } else {
            tempDifference = undefined;
        }

        let formatHours;

        if (tempDifference != undefined) {
            formatHours = Math.floor(tempDifference / 60);
        } else {
            formatHours = undefined;
        }
        switch (true) {
            case formatHours > 0:
                difference = `${Math.floor(tempDifference / 60)}ч ${tempDifference % 60}мин`;
                break;
            case formatHours == 0:
                difference = `${tempDifference % 60} мин`;
                break;
            case formatHours < 0:
                difference = `${Math.abs(Math.floor(tempDifference / 60))}ч ${Math.abs(
                    tempDifference % 60,
                )} мин. назад`;
                break;
            case formatHours == undefined:
                difference = "По прибытию";
                let tempH = weekDay.tempH;
                let tempM = weekDay.tempM;
                let tempD = tempH * 60 + tempM - dateHours * 60 - dateMinutes;
                formatHours = Math.floor(tempD / 60);
                break;
        }

        if (formatHours >= 0 || formatHours == undefined) {
            output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
        } else {
            output = "";
        }
    });
    timetableSection.innerHTML = output;
}

function updateWithFilter() {
    intrv1 = setInterval(() => {
        getTimetable1(day);
    }, 1000);
}
function UpdateWithoutFilter() {
    intrv2 = setInterval(() => {
        getTimetable2(day);
    }, 1000);
}

// Calculate Day of week
function calcDay() {
    clearInterval(intrv3);
    intrv3 = setInterval(() => {
        calculateDayOfWeek();
    }, 5000);
}
function calcDayMoscow() {
    clearInterval(intrv3);
    clearInterval(intrv5);
    intrv4 = setInterval(() => {
        calculateDayOfWeek();
        day = day.filter((d) => {
            return d.whereTo == "toMoscow";
        });
    }, 1000);
}
function calcDayDubki() {
    clearInterval(intrv3);
    clearInterval(intrv4);
    intrv5 = setInterval(() => {
        calculateDayOfWeek();
        day = day.filter((d) => {
            return d.whereTo == "toDubki";
        });
    }, 1000);
}

function clearAllIntervals() {
    clearInterval(intrv1);
    clearInterval(intrv2);
    clearInterval(intrv3);
    clearInterval(intrv4);
    clearInterval(intrv5);
}

calculateDayOfWeek();
calcDay();
updateWithFilter();

// setInterval(() => getTimetable1(day), 1000);

// setInterval(calculateDayOfWeek2, 86400000);

// set an ids to intervals
