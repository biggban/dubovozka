import {weekDays} from "./data.js";
const timetableSection = document.querySelector(".timetable");
const timeLeft = document.getElementsByClassName("timeLeft");

function getTimetable() {
    setTimeout(() => {
        let output = "";
        weekDays.forEach((weekDay) => {
            output += `<div style="background-color:${weekDay.color}" class="card">
            <div class="directionAndTimeLeft">
                <div class="direction">${weekDay.direction}</div>
                <div class="timeLeft"></div>
            </div>
            <div class="time">${weekDay.time}</div>
        </div>`;
        });
        timetableSection.innerHTML = output;
    }, 1000);
}

getTimetable();

/*
function updateTime() {
    let tempDiff = 0;
    let date = new Date();
    weekDays.forEach((weekDay) => {
        let date = new Date();
        let difference = "";
        difference =
            date.getHours() * 60 +
            date.getMinutes() -
            weekDay.hours * 60 +
            weekDay.minutes;
        switch (difference) {
            case difference == difference.toString():
                return `-`;
            case difference < 0:
                difference = Math.abs(difference);
                difference = `${Math.floor(difference % 60)}ч + ${
                    difference % 60
                }м`;
                return difference;
            case difference > 0:
                difference = `${Math.floor(difference % 60)}ч + ${
                    difference % 60
                }м назад`;
        }
    });
}
*/

/*
function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
}
*/
