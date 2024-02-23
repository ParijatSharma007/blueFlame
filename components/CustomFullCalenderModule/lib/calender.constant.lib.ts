import { getWeekNumber } from "./customcalender.lib";

export const monthDefault = [
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

// export const dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const dayDefault = [
  {
    fullName: "monday",
    short_name: "mon",
    short_code: "mo"
  },
  {
    fullName: "tuesday",
    short_name: "tue",
    short_code: "su"
  },
  {
    fullName: "wednesday",
    short_name: "wed",
    short_code: "w"
  },
  {
    fullName: "thursday",
    short_name: "thu",
    short_code: "th"
  },
  {
    fullName: "firday",
    short_name: "fri",
    short_code: "fri"
  },
  {
    fullName: "saturday",
    short_name: "sat",
    short_code: "sa"
  },
  {
    fullName: "sunday",
    short_name: "sun",
    short_code: "su"
  }
];

export const timeDefault = [
  {
    time: "",
    medirian: ""
  },
  {
    time: "00:00",
    medirian: "AM"
  },
  {
    time: "01:00",
    medirian: "AM"
  },
  {
    time: "02:00",
    medirian: "AM"
  },
  {
    time: "03:00",
    medirian: "AM"
  },
  {
    time: "04:00",
    medirian: "AM"
  },
  {
    time: "05:00",
    medirian: "AM"
  },
  {
    time: "06:00",
    medirian: "AM"
  },
  {
    time: "07:00",
    medirian: "AM"
  },
  {
    time: "08:00",
    medirian: "AM"
  },
  {
    time: "09:00",
    medirian: "AM"
  },
  {
    time: "10:00",
    medirian: "AM"
  },
  {
    time: "11:00",
    medirian: "AM"
  },
  {
    time: "12:00",
    medirian: "PM"
  },
  {
    time: "01:00",
    medirian: "PM"
  },
  {
    time: "02:00",
    medirian: "PM"
  },
  {
    time: "03:00",
    medirian: "PM"
  },
  {
    time: "04:00",
    medirian: "PM"
  },
  {
    time: "05:00",
    medirian: "PM"
  },
  {
    time: "06:00",
    medirian: "PM"
  },
  {
    time: "07:00",
    medirian: "PM"
  },
  {
    time: "08:00",
    medirian: "PM"
  },
  {
    time: "09:00",
    medirian: "PM"
  },
  {
    time: "10:00",
    medirian: "PM"
  },
  {
    time: "11:00",
    medirian: "PM"
  }
];

export const today = new Date();
export const currentMonth = today.getMonth();
export const currentYear = today.getFullYear();
export const currentWeekNumber = getWeekNumber(today)[1];
export const thisWeekStartDate = today.getDate() - today.getDay();
export const thisWeekStartDateObj = new Date(today.setDate(thisWeekStartDate));

// export const selectYear = document.getElementById("year");
// export const selectMonth = document.getElementById("month");
