const { clickElement, getText } = require("./commands.js");

module.exports = {
  selectDateTime: async function (page, day, time) {
    await clickElement(page, day);
    await clickElement(page, time);
  }
}