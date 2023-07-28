let now = new Date();
let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let ms = now.getMilliseconds();
let today = now.getDay();
let date = now.getDate();
let year = now.getFullYear();
let month = now.getMonth();
const hour = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const milliseconds = document.getElementById("ms");
const day = document.getElementById("day");
let currentDate = document.getElementById("date");
let currentYear = document.getElementById("year");
let currentMonth = document.getElementById("month");

let formatOne = document.getElementById("12-hour");
let formatTwo = document.getElementById("24-hour");
const body = document.getElementById("body");
const amPm = document.getElementById("am-pm");

currentDate.innerText = date;
currentYear.innerText = year;
day.innerText = getDay(today);
currentMonth.innerText = getMonth(month);

twelveHourFormat();
// digitalClock();
function digitalClock() {
  setInterval(() => {
    seconds.innerText = checkForSingleDigit(String(sec++));
    if (sec === 60) {
      minutes.innerText = `${checkForSingleDigit(String(min++))}:`;
      sec = 1;
    } else minutes.innerText = `${checkForSingleDigit(String(min))}:`;

    if (hr < 25 && min === 60) {
      hour.innerText = ` ${checkForSingleDigit(String(hr++))}`;
      min = 1;
    } else hour.innerText = ` ${checkForSingleDigit(String(hr))}:`;
    if (hr === 25) {
      hr = 1;
      today++;
    }
  }, 1000);
}

function getDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday ";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    default:
      return "Saturday";
      break;
  }
}

function getMonth(month) {
  switch (month) {
    case 0:
      return "January";
      break;
    case 1:
      return "Febuary";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    default:
      return "December";
      break;
  }
}

function twelveHourFormat() {
  let result = checkHour(hr);
  if (result !== undefined) {
    amPm.innerText = result[1];
  } else {
    amPm.innerText = `am`;
  }
  setInterval(() => {
    seconds.innerText = checkForSingleDigit(String(sec++));
    if (sec === 60) {
      minutes.innerText = `${checkForSingleDigit(String(min++))}`;
      sec = 1;
    } else minutes.innerText = `${checkForSingleDigit(String(min))}`;

    if (hr < 13 && min === 60) {
      hour.innerText = ` ${checkForSingleDigit(String(checkHour(hr++)))}`;
      min = 1;
    } else hour.innerText = `${checkForSingleDigit(String(result[0]))}`;
    if (hr === 13) {
      hr = 1;
      today++;
    }
  }, 1000);
}

function checkHour(hr) {
  switch (hr) {
    case 1:
      return [1, "am"];
      break;
    case 2:
      return [2, "am"];
      break;
    case 3:
      return [3, "am"];
      break;
    case 4:
      return [4, "am"];
      break;
    case 5:
      return [5, "am"];
      break;
    case 6:
      return [6, "am"];
      break;
    case 7:
      return [7, "am"];
      break;
    case 8:
      return [8, "am"];
      break;
    case 9:
      return [9, "am"];
      break;
    case 10:
      return [10, "am"];
      break;
    case 11:
      return [11, "am"];
      break;
    case 12:
      return [12, "am"];
      break;
    case 13:
      return [1, "pm"];
      break;
    case 14:
      return [2, "pm"];
      break;
    case 15:
      return [3, "pm"];
      break;
    case 16:
      return [4, "pm"];
      break;
    case 17:
      return [5, "pm"];
      break;
    case 18:
      return [6, "pm"];
      break;
    case 19:
      return [7, "pm"];
      break;
    case 20:
      return [8, "pm"];
      break;
    case 21:
      return [9, "pm"];
      break;
    case 22:
      return [10, "pm"];
      break;
    case 23:
      return [11, "pm"];
      break;
    case 24:
      return [12, "pm"];
      break;
  }
}

function checkForSingleDigit(num) {
  let result = false;
  if (!num[1]) {
    num = "0" + num;
    return num;
  } else return num;
}

let n = {
  name: "nima",
};
