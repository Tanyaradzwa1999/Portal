document.addEventListener("DOMContentLoaded", () => {
  updateCalendar();
});

const monthYearElement = document.getElementById("month-year");
const calendarDaysElement = document.querySelector(".calendar-days");
const dateElement = document.querySelector(".calendar-date .date");
const monthYearDateElement = document.querySelector(
  ".calendar-date .month-year"
);
const resetButton = document.getElementById("reset");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const today = new Date();
let currentMonth = today.getMonth(); // May (0-indexed)
let currentYear = today.getFullYear();
let selectedDate = new Date(currentYear, currentMonth, today.getDate());
let isUserSelected = false; // To check if the user has selected a date

function updateCalendar() {
  monthYearElement.textContent = `${months[currentMonth]} - ${currentYear}`;

  monthYearDateElement.textContent = `${
    months[selectedDate.getMonth()]
  } - ${selectedDate.getFullYear()}`;
  dateElement.textContent = selectedDate.getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  calendarDaysElement.innerHTML = "";
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDaysElement.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = i;
    if (
      !isUserSelected &&
      i === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      dayElement.classList.add("selected");
    } else if (
      i === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    ) {
      dayElement.classList.add("selected");
    }
    dayElement.addEventListener("click", () => {
      isUserSelected = true;
      selectedDate.setDate(i);
      selectedDate.setMonth(currentMonth);
      selectedDate.setFullYear(currentYear);
      updateCalendar();
    });
    calendarDaysElement.appendChild(dayElement);
  }

  // Check if the reset button should be displayed
  toggleResetButton();
}

function toggleResetButton() {
  if (
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear()
  ) {
    resetButton.style.display = "none";
  } else {
    resetButton.style.display = "block";
  }
}

prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  isUserSelected = false; // Reset user selection when changing month
  updateCalendar();
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  isUserSelected = false; // Reset user selection when changing month
  updateCalendar();
});

resetButton.addEventListener("click", () => {
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  selectedDate = new Date(currentYear, currentMonth, today.getDate());
  isUserSelected = false;
  updateCalendar();
});
