export function generate_year_range(start: number, end: number) {
  const years: number[] = [];
  for (let year = start; year <= end; year++) {
    years.push(year);
  }

  return years;
}

export function daysInMonth(iMonth: number, iYear: number) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

export function getWeekNumber(date: Date | string) {
  // Copy the date object to avoid modifying the original
  const d = new Date(date);
  // Set the date to the first Thursday of the year
  // (4 + 7 * weekNumber) is the nth Thursday (n = weekNumber)
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get the first day of the year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate the difference in milliseconds
  const diff = Number(d) - Number(yearStart);
  // Convert to days and divide by 7
  const weekNumber = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
  // Return the week number and the year
  return [d.getUTCFullYear(), weekNumber];
}

export function renderDate(firstDate: Date, lastDate: Date) {
  // Create an array to store the dates
  const dates = [];
  // Loop from the first date to the last date, adding one day each time
  const currentDate = new Date(firstDate);
  while (currentDate <= lastDate) {
    // Push a copy of the current date to the array
    dates.push(new Date(currentDate));
    // Increment the current date by one day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export function renderWeekDate(curr: Date) {
  const week: number[] = [];
  // const curr = new Date();
  const weekFirstDate = curr.getDate() - curr.getDay();
  const weekLastDate = weekFirstDate + 7;

  const firstday = new Date(curr.setDate(weekFirstDate));
  const lastday = new Date(curr.setDate(weekLastDate));

  const dates = renderDate(firstday, lastday);

  dates?.map((_item) => week.push(_item.getDate()));

  return week;
}
