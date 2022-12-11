const {getMainPageUrl, 
    booking, 
    getBookingCode, 
    chooseFilmAndTime,
    waitMainPageLoaded,
    chooseDay, selectDay
} = require ("./lib/commands");
const {getNextDay} = require("./lib/utils");

let page;
const day = getNextDay();

describe("BookingTests", () => {
    beforeEach(async () => {
       page = await browser.newPage();
       await page.goto("http://qamid.tmweb.ru/client/index.php");
       console.log(await page.title());
    });

    afterEach(async () => {
        await page.close();
    });

    test.only("First happy path test", async () => {
        const day = getNextDay();

        await selectDay(page, day);
        await chooseFilmAndTime(page, '"Логан"', '"19:00"');
        await booking(page, 1, 4);
    });
});