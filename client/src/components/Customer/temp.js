const date = new Date("2022-09-26T03:10:07.671Z");

const weekStart = new Date();

const firstDay =
    weekStart.getDate() -
    weekStart.getDay() +
    (weekStart.getDay() === 0 ? -6 : 1);

weekStart.setDate(firstDay);

weekStart.setHours(0, 0, 0, 0);

const weekEnd = new Date();

const lastDay = weekEnd.getDate() - (weekEnd.getDay() - 1) + 6;

weekEnd.setDate(lastDay);

weekEnd.setHours(0, 0, 0, 0);

if (date >= weekStart && date <= weekEnd) {
    const monday = date.getDay();

    if (monday === 1) {
    }
}
