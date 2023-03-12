import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const buttonDate = document.querySelector("button[data-start]");

const ref = {
    days: document.querySelector(".value[data-days]"),
    hours: document.querySelector(".value[data-hours]"),
    minutes: document.querySelector(".value[data-minutes]"),
    seconds: document.querySelector(".value[data-seconds]"),
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() > Date.now()) {
            buttonDate.disabled = false;
        } else {
            Notify.failure("Please choose a date in the future");
        }
    },
};
const fp = flatpickr("input#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    console.log({
        days: addLeadingZero(days),
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes),
        seconds: addLeadingZero(seconds),
    });
    ref.days.textContent = days;
    ref.hours.textContent = hours;
    ref.minutes.textContent = minutes;
    ref.seconds.textContent = seconds;
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};

buttonDate.addEventListener("click", (e) => {
    convertMs(fp.selectedDates[0].getTime() - Date.now());
    setInterval(() => {
        const timeLeft = fp.selectedDates[0].getTime() - Date.now();
        convertMs(timeLeft);
    }, 1000);
});
buttonDate.disabled = true;