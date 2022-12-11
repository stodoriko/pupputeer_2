const {getMainPageUrl, 
    booking, 
    getBookingCode, 
    chooseFilmAndTime,
    waitMainPageLoaded
} = require ("./lib/commands");

let page;

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
        // await waitMainPageLoaded(page);
        await chooseFilmAndTime(page, '"Логан"', '"19:00"');
        await booking(page, 1, 4);
    });
});