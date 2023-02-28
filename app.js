import {timeTable} from "./data.js";
const timetableSection = document.querySelector(".timetable");
let chosenDirection = document.getElementsByClassName("chosen");
let toMoscow = document.getElementsByClassName("toMoscow");
let toDubki = document.getElementsByClassName("toDubki");

let day;

function calculateDayOfWeek() {
    let dayOfWeekDate = new Date();
    let tempDayWeek = dayOfWeekDate.getDay();
    if (tempDayWeek == 5) {
        return (day = timeTable.saturday);
    } else if (tempDayWeek == 6) {
        return (day = timeTable.sunday);
    } else {
        return (day = timeTable.weekDays);
    }
}

toMoscow[0].addEventListener("click", () => {
    calculateDayOfWeek();
    day = day.filter((d) => {
        return d.whereTo == "toMoscow";
    });
    getTimetable2(day);
    if (toMoscow[0].classList.contains("chosen")) {
        return null;
    } else {
        toMoscow[0].classList.toggle("chosen");
        toDubki[0].classList.toggle("chosen");
    }
});
toDubki[0].addEventListener("click", () => {
    calculateDayOfWeek();
    day = day.filter((d) => {
        return d.whereTo == "toDubki";
    });
    console.log(day);
    getTimetable2(day);
    if (toDubki[0].classList.contains("chosen")) {
        return null;
    } else {
        toDubki[0].classList.toggle("chosen");
        toMoscow[0].classList.toggle("chosen");
    }
});

// Get timetable

function getTimetable1(dayOfWeek) {
    setTimeout(() => {
        let date = new Date();
        let dateHours = date.getHours();
        let dateMinutes = date.getMinutes();
        let output = "";
        // Filtration works
        dayOfWeek = dayOfWeek.filter((d) => {
            return d.whereTo == "toMoscow";
        });

        console.log(dayOfWeek);
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
                formatHours = Math.floor(tempDifference / 60) - 1;
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

            if (formatHours < 0) {
                output = "";
            } else {
                output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
            }
        });
        // Buttons

        timetableSection.innerHTML = output;
    }, 100);
}

function getTimetable2(dayOfWeek) {
    setTimeout(() => {
        let date = new Date();
        let dateHours = date.getHours();
        let dateMinutes = date.getMinutes();
        let output = "";

        console.log(dayOfWeek);
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
                formatHours = Math.floor(tempDifference / 60) - 1;
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

            if (formatHours < 0) {
                output = "";
            } else {
                output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
            }
        });
        // Buttons

        timetableSection.innerHTML = output;
    }, 100);
}

calculateDayOfWeek();
getTimetable1(day);

// setInterval(calculateDayOfWeek, 1);
// setInterval(() => getTimetable(day), 1000);
