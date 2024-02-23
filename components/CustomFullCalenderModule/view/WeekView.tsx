import { useCallback, useEffect } from "react";
import Calendar from "../lib/calendar";

const events = [
  { id: 0, eventName: "Event 0", dateFrom: 1684843676, dateTo: 1684850876 },
  {
    id: 1,
    eventName: "Event 1",
    dateFrom: 1654084000000,
    dateTo: 1654085435129
  },
  {
    id: 10,
    eventName: "Long event name 1",
    dateFrom: 1654705888000,
    dateTo: 1655051488000
  },
  {
    id: 2,
    eventName: "Event 2",
    dateFrom: 1654709488000,
    dateTo: 1654968688000
  },
  {
    id: 3,
    eventName: "Event 3",
    dateFrom: 1651667488000,
    dateTo: 1652027488000
  },
  {
    id: 4,
    eventName: "Event 4",
    dateFrom: 1651752000000,
    dateTo: 1651759200000
  },
  {
    id: 5,
    eventName: "Event 5",
    dateFrom: 1652269500000,
    dateTo: 1652270400000
  },
  {
    id: 6,
    eventName: "Event 6",
    dateFrom: 1649757688000,
    dateTo: 1656064888000
  },
  {
    id: 7,
    eventName: "Event 7",
    dateFrom: 1651399200000,
    dateTo: 1652092200000
  },
  {
    id: 8,
    eventName: "Event 8",
    dateFrom: 1651755600000,
    dateTo: 1651761000000
  },
  {
    id: 9,
    eventName: "Event 9",
    dateFrom: 1652092200000,
    dateTo: 1652099400000
  }
];

const WeekView = () => {
  useEffect(() => {
    const c = new Calendar(events);
  }, []);

  const _validateEvents = useCallback(() => {}, []);

  const _scrollListener = useCallback(() => {
    const calendarBody = document.getElementById("calendar-body");

    if (calendarBody !== null) {
      calendarBody.addEventListener("scroll", () => {
        const { scrollTop } = calendarBody;
        const allDayRow = document.querySelector(".calendar-all-day-row");

        if (allDayRow !== null) {
          const rows = allDayRow.getElementsByClassName("calendar-body-column");
          if (rows !== null) {
            // if (scrollTop < 7) {
            //   rows[rows.length - 1].style.paddingTop = "40px";
            //   rows[rows.length - 2].style.paddingTop = "40px";
            // } else {
            //   rows[rows.length - 1].style.paddingTop = "0";
            //   rows[rows.length - 2].style.paddingTop = "0";
            // }
          }
        }
      });
    }
  }, []);

  const _addHeaderButtonEventListeners = useCallback(() => {
    // const prevWeekButton = document.getElementById(
    //   "calendar-action-button-prev"
    // );
    // const nextWeekButton = document.getElementById(
    //   "calendar-action-button-next"
    // );
    // const todayButton = document.getElementById("calendar-action-button-today");

    // prevWeekButton.addEventListener("click", () => {
    //   this.setDate(this.currentDate.getDate() - 7);
    //   this.render();
    // });

    // nextWeekButton.addEventListener("click", () => {
    //   this.setDate(this.currentDate.getDate() + 7);
    //   this.render();
    // });

    // todayButton.addEventListener("click", () => {
    //   this.currentDate = new Date();
    //   this.render();
    // });
  }, []);

  const renderAllDayRow = useCallback(() => {}, []);
  const renderCalendarBody = useCallback(() => {}, []);
  const renderCalendarHours = useCallback(() => {}, []);
  const render = useCallback(() => {}, []);

  return (
    <div>
      <div className="calendar-container" id="calendar-container">
        <div className="calendar-header" id="calendar-header">
          <div className="calendar-title" id="calendar-title" />
          <div className="calendar-actions" id="calendar-actions">
            <button
              type="button"
              className="calendar-action-button"
              id="calendar-action-button-prev"
            >
              &lt;
            </button>
            <button
              type="button"
              className="calendar-action-button"
              id="calendar-action-button-today"
            >
              Today
            </button>
            <button
              type="button"
              className="calendar-action-button"
              id="calendar-action-button-next"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="calendar" id="calendar">
          <div className="calendar-days" id="calendar-days" />
          <div className="calendar-body" id="calendar-body" />
        </div>
      </div>
    </div>
  );
};

export default WeekView;
