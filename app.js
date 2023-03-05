import {timeTable} from "./data.js";
const timetableSection = document.getElementById("timetable");
// let chosenDirection = document.getElementsByClassName("chosen");
let toMoscow = document.getElementsByClassName("toMoscow");
let toDubki = document.getElementsByClassName("toDubki");

let day;
let intrv1;
let intrv2;
let intrv3;

function calculateDayOfWeek() {
    let dayOfWeekDate = new Date();
    let tempDayWeek = dayOfWeekDate.getDay();
    console.log(tempDayWeek);
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
    calcDay();
    UpdateWithoutFilter();

    day = day.filter((d) => {
        return d.whereTo == "toMoscow";
    });

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
    calcDay();
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
    intrv2 = setInterval(() => {
        calculateDayOfWeek();
    }, 86400000);
}

calculateDayOfWeek();
calcDay();
updateWithFilter(day);

// setInterval(() => getTimetable1(day), 1000);

// setInterval(calculateDayOfWeek2, 86400000);

// set an ids to intervals
