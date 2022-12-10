const {getMainPageUrl, 
    booking, 
    getBookingCode, 
    chooseFilmAndTime
} = require ("./lib/commands");

let page;


describe("BookingTests", () => {
    beforeEach(async () => {
       page = await browser.newPage();
       await page.goto("http://qamid.tmweb.ru/client/index.php");
    });

    afterEach(async () => {
        await page.close();
    });

    test("First happy path test", async () => {
        await chooseFilmAndTime(page, "Логан", "19:00");
        await booking(page, 1, 4);
    });
});