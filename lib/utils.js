module.exports = {
  getNextDay: async function () {
    let today = new Date();
    let tomorrow = new Date (today.getTime() + (24 * 60 * 60 * 1000));
    let tomorrowDay = tomorrow.getDay();
    let days = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    let ruDay = days[tomorrowDay];
    return `"${ruDay}"`;
  }
}