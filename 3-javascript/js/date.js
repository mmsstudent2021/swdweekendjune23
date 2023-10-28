// const date = new Date;
// console.dir(date);

// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getFullYear());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// console.log(date.getTime());

// 22 07 1994

// const date = new Date(1994,6,22);

// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getFullYear());


const currentDate = new Date();

// current Hour + 300

// currentDate.setHours(currentDate.getHours() + 300)

// 4 လ တစ်ကြိမ် သွေးလှူ

// currentDate.setMonth(currentDate.getMonth() + 4)
const swdCourseDurationHr = 50;
const learningHourPerDay = 2;
const requireDayToFinish = swdCourseDurationHr / learningHourPerDay;

currentDate.setDate(currentDate.getDate() + requireDayToFinish)


console.log(currentDate);