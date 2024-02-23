import assest from "@/json/assest";
import styles from "@/styles/components/customfullcalender.module.scss";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  currentMonth,
  currentWeekNumber,
  currentYear,
  dayDefault,
  monthDefault,
  thisWeekStartDateObj,
  timeDefault,
  today
} from "./lib/calender.constant.lib";
import {
  daysInMonth,
  generate_year_range,
  renderWeekDate
} from "./lib/customcalender.lib";
import WeekView from "./view/WeekView";

interface CustomFullCalenderProps {
  view: "month" | "week" | "day" | string;
}

const CustomFullCalender = (props: CustomFullCalenderProps) => {
  const { view } = props;
  const [selectYear, setSelectYear] = useState(currentYear);
  const [weekStartDate, setWeekStartDate] = useState(thisWeekStartDateObj);
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const [selectedWeek, setSelectedWeek] = useState(currentWeekNumber);
  const yearList: number[] = useMemo(() => {
    return generate_year_range(1990, 2050);
  }, []);

  // function next() {
  //   let currentYear = selectMonth === 11 ? selectYear + 1 : selectYear;
  //   let selectMonth = (currentMonth + 1) % 12;
  //   showCalendar(currentMonth, currentYear);
  // }

  // function previous() {
  //   currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  //   currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  //   showCalendar(currentMonth, currentYear);
  // }

  function previousWeek() {
    const previousWeek = new Date(
      weekStartDate.setDate(weekStartDate.getDate() - 7)
    );

    setWeekStartDate(previousWeek);
  }

  function nextWeek() {
    const nextWeek = new Date(
      weekStartDate.setDate(weekStartDate.getDate() + 7)
    );

    setWeekStartDate(nextWeek);
  }

  function handleSelectMonth(e: SelectChangeEvent<number>) {
    const _v = e.target.value as number;
    setSelectMonth(_v);
  }

  function handleSelectYear(e: SelectChangeEvent<number>) {
    const _v = e.target.value as number;
    setSelectYear(_v);
  }

  const showCalenderMonthView = useCallback(
    (month: number, year: number) => {
      const firstDay = new Date(year, month).getDay();
      setSelectYear(year);
      setSelectMonth(month);
      const tbl: HTMLElement | null = document.getElementById(
        `calendar_body_${view}`
      );

      if (tbl !== null) {
        tbl.innerHTML = "";

        // creating all cells
        let date = 1;
        let nextDate = 1;
        const daysInthisMonth = daysInMonth(month, year);
        const daysInPrevMonth = daysInMonth(month - 1, year);

        const _firstEmptyCellCount = firstDay % 7;

        for (let i = 0; i < 5; i++) {
          const row = document.createElement("tr");

          for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode("");

            if (i === 0 && j < firstDay) {
              // render Previous month last dates
              const prevMonth = month - 1;
              cell.appendChild(cellText);
              cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-month", prevMonth.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[prevMonth]);
              cell.className = "date-picker prev_month_date";
              cell.innerHTML = `<span>${
                daysInPrevMonth + (j - _firstEmptyCellCount + 1)
              }</span>`;
              row.appendChild(cell);
            } else if (date > daysInthisMonth) {
              // render next month first date
              const nextMonth = month + 1;
              cell.appendChild(cellText);
              cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-month", nextMonth.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[nextMonth]);
              cell.className = "date-picker next_month_date";
              cell.innerHTML = `<span>${nextDate}</span>`;
              row.appendChild(cell);
              nextDate++;
              // break;
            } else {
              // Render selected month date
              cell.setAttribute("data-date", date?.toString());
              const m = month + 1;
              cell.setAttribute("data-month", m.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[month]);
              cell.className = "date-picker";
              cell.innerHTML = `<span>${date}</span>`;

              // Highlight current date

              if (
                date === today.getDate() &&
                year === today.getFullYear() &&
                month === today.getMonth()
              ) {
                cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
            }
          }

          tbl.appendChild(row);
        }
      }
    },
    [selectMonth, selectYear]
  );

  const showCalenderWeekView = useCallback(
    (month: number, year: number) => {
      const firstDay = new Date(year, month).getDay();
      setSelectYear(year);
      setSelectMonth(month);
      const tbl: HTMLElement | null = document.getElementById(
        `calendar_body_${view}`
      );

      if (tbl !== null) {
        tbl.innerHTML = "";

        // creating all cells
        let date = 1;
        let nextDate = 1;
        const daysInthisMonth = daysInMonth(month, year);
        const daysInPrevMonth = daysInMonth(month - 1, year);
        const _date = new Date(year, month, 1);

        const currentWeekDays = renderWeekDate(weekStartDate);

        const _firstEmptyCellCount = firstDay % 7;

        for (let i = 0; i < timeDefault?.length; i++) {
          const row = document.createElement("tr");

          for (let j = 0; j < 8; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode("");

            if (j === 0 && i !== 0) {
              // render time grid
              cell.appendChild(cellText);
              // cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-time", timeDefault[i].time);
              const m = month + 1;
              cell.setAttribute("data-month", m.toString());
              cell.setAttribute("data-year", year?.toString());
              // if (i % 2 === 0) {
              //   cell.setAttribute("rowspan", "3");
              // }

              cell.setAttribute("data-month_name", monthDefault[month]);
              cell.className = "date-picker";
              cell.innerHTML = `<span>${timeDefault[i].time} ${timeDefault[i].medirian}  </span>`;
              row.appendChild(cell);
            }

            if (i === 0 && j < firstDay) {
              // render first cell with date
              const prevMonth = month - 1;
              cell.appendChild(cellText);
              cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-month", prevMonth.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[prevMonth]);
              cell.className = "date-picker prev_month_date";
              cell.innerHTML = `<span><b>Time </b></span>`;
              row.appendChild(cell);
            } else if (date > daysInthisMonth) {
              // render next month first date
              const nextMonth = month + 1;
              cell.appendChild(cellText);
              cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-month", nextMonth.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[nextMonth]);
              cell.className = "date-picker next_month_date";
              cell.innerHTML = `<span>${nextDate}</span>`;
              row.appendChild(cell);
              nextDate++;
              break;
            } else if (i === 0) {
              // Render selected month date
              cell.setAttribute("data-date", date?.toString());
              const m = month + 1;
              cell.setAttribute("data-month", m.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[month]);
              cell.className = "date-picker";
              cell.innerHTML = `<span> ${currentWeekDays[j]}</span>`;

              // Highlight current date

              if (
                date === today.getDate() &&
                year === today.getFullYear() &&
                month === today.getMonth()
              ) {
                cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
            } else if (i !== 0 && j !== 0) {
              //
              cell.appendChild(cellText);
              // cell.setAttribute("data-date", date?.toString());
              cell.setAttribute("data-time", timeDefault[i].time);
              const m = month + 1;
              cell.setAttribute("data-month", m.toString());
              cell.setAttribute("data-year", year?.toString());
              cell.setAttribute("data-month_name", monthDefault[month]);
              cell.className = "date-picker";
              cell.innerHTML = `
             <hr/>
            `;
              row.appendChild(cell);
            }
          }

          tbl.appendChild(row);
        }
      }
    },
    [selectMonth, selectYear]
  );

  const RenderView = useCallback(() => {
    if (view === "month") {
      showCalenderMonthView(selectMonth, selectYear);
    }
    if (view === "week") {
      showCalenderWeekView(selectMonth, selectYear);
    }
  }, [view]);

  useEffect(() => {
    RenderView();
  }, [selectMonth, selectYear, weekStartDate]);

  return (
    <Box>
    
      <Box className="wrapper">
        <Box className="container-calendar">
          <Paper className={styles.paper_cls}>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                className={`${
                  view === "week"
                    ? `${styles.cal_head} ${styles.cal_head_week}`
                    : styles.cal_head
                }`}
              >
                <Typography variant="h4">
                  {view === "week" ? (
                    <>Today’s schedule</>
                  ) : (
                    <>Select Your date</>
                  )}
                </Typography>
                <Box className={styles.prev_next_arr}>
                  {view === "week" ? (
                    <>
                      {" "}
                      <IconButton onClick={previousWeek}>
                        <Image
                          src={assest.prevImg}
                          alt="img"
                          width={16}
                          height={16}
                        />
                      </IconButton>
                      <IconButton onClick={nextWeek}>
                        {" "}
                        <Image
                          src={assest.nextImg}
                          alt="img"
                          width={16}
                          height={16}
                        />
                      </IconButton>
                    </>
                  ) : null}
                  <Stack
                    direction="row"
                    spacing={2}
                    className={styles.date_slider_btn}
                  >
                    <Select
                      id="month"
                      onChange={handleSelectMonth}
                      value={selectMonth}
                    >
                      {monthDefault?.map((item, index) => (
                        <MenuItem key={item} value={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>

                    <Select
                      value={selectYear}
                      id="year"
                      onChange={handleSelectYear}
                    >
                      {yearList?.map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Box>
              </Stack>
              <Box
                className={`${
                  view === "week"
                    ? styles.calender_table_week
                    : styles.calender_table
                }`}
              >
                {" "}
                <table
                  className={styles.table_calendar}
                  id="calendar"
                  data-lang="en"
                >
                  <thead id="thead-month">
                    <tr>
                      {view === "week" ? <th /> : null}
                      {dayDefault?.map((_day) => (
                        <th key={_day?.fullName} data-days={_day?.short_name}>
                          {_day?.short_code}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody id={`calendar_body_${view}`} data-view={view} />
                </table>
              </Box>
            </Box>
          </Paper>

          <div className="footer-container-calendar" />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomFullCalender;
