import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null;
const startBtn = document.querySelector("[data-start]");
const dataPicker = document.querySelector("#datetime-picker");
const timerFields = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: "Y-m-d H:i",
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDate);

if (selectedDate <= new Date()) {
  iziToast.show({
   title: "Error!",
    message: "Please choose a date in the future",
     titleColor: "#ffffff",
    messageColor: "#ffffff",
    backgroundColor: "#ef4040",
});
  startBtn.disabled = true;
}
else {
  userSelectedDate = selectedDate;
  startBtn.disabled = false;
}
},
};

flatpickr(dataPicker, options);

function onClick() {
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      updateTimer(0);
      startBtn.disabled = true;
      dataPicker.disabled = false;
      return;
    }
    updateTimer(deltaTime);
    
  }, 1000);
  
  startBtn.disabled = true;
  dataPicker.disabled = true;
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}


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
  
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


startBtn.addEventListener("click", onClick);