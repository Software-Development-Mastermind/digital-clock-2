let isMilitaryTime = false;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function displayClock() {
  const today = new Date();

  const day = getDayByIndex(today.getDay());
  const month = getMonthByIndex(today.getMonth());
  const date = addDateSuffix(today.getDate());
  const year = today.getFullYear();

  const dateDisplay = document.getElementById('date-display');
  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;

  const militaryHours = addLeadingZero(today.getHours());
  const standardHours = getStandardHours(militaryHours);
  const minutes = addLeadingZero(today.getMinutes());
  const seconds = addLeadingZero(today.getSeconds());

  const timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = isMilitaryTime 
    ? `${militaryHours}:${minutes}:${seconds}`
    : `${standardHours}:${minutes}:${seconds} ${militaryHours >= 12 ? 'PM' : 'AM'}`;
}

function addLeadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

function getStandardHours(militaryHours) {
  if (militaryHours === 0) {
    return 12;
  }

  return militaryHours > 12
   ? militaryHours - 12
   : militaryHours;
}

function addDateSuffix(date) {
  const stDates = [1, 21, 31];
  if (stDates.includes(date)) {
    return `${date}st`;
  }

  const ndDates = [2, 22];
  if (ndDates.includes(date)) {
    return `${date}nd`;
  }

  const rdDates = [3, 23];
  if (rdDates.includes(date)) {
    return `${date}rd`;
  }

  return `${date}th`;
}

function getDayByIndex(index) {
  return days[index];
}

function getMonthByIndex(index) {
  return months[index];
}

const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function(e) {
  isMilitaryTime = !isMilitaryTime;

  this.textContent = isMilitaryTime 
    ? 'Switch to Standard Time Format'
    : 'Switch to Military Time Format'
  
  
  displayClock();
});

setInterval(displayClock, 100);
displayClock();