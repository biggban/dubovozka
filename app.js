import {weekDays} from "./data.js";
const timetableSection = document.querySelector(".timetable");

let date = new Date();
let dateHours = date.getHours();
let dateMinutes = date.getMinutes();
console.log(dateHours);
/*
function displayLeft() {
    for (let i = 0; i < weekDays.length; i++) {
        let tempDifference = 0;
        let difference;
        let tempHours = weekDays[i].hours;
        let tempMinutes = weekDays[i].minutes;
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
                difference = `${Math.floor(tempDifference / 60) - 1}ч ${tempDifference % 60}мин`;
                break;
            case formatHours == 0:
                difference = `${tempDifference % 60}мин`;
                break;
            case formatHours < 0:
                difference = `${Math.abs(Math.floor(tempDifference / 60) - 1)}ч ${Math.abs(
                    tempDifference % 60,
                )} мин. назад`;
                break;
            case formatHours == undefined:
                difference = "По прибытию";
                break;
        }
        console.log(difference);
    }
}
*/

function getTimetable() {
    setTimeout(() => {
        let output = "";
        weekDays.forEach((weekDay) => {
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
                    difference = `${Math.floor(tempDifference / 60) - 1}ч ${tempDifference % 60}мин`;
                    break;
                case formatHours == 0:
                    difference = `${tempDifference % 60}мин`;
                    break;
                case formatHours < 0:
                    difference = `${Math.abs(Math.floor(tempDifference / 60)) - 1}ч ${Math.abs(
                        tempDifference % 60,
                    )} мин. назад`;
                    break;
                case formatHours == undefined:
                    difference = "По прибытию";
                    break;
            }

            output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft">${difference}</div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
        });
        timetableSection.innerHTML = output;
    }, 1000);
}

getTimetable();
/*
function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
}
*/
