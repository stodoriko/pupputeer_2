const {getMainPageUrl, booking, getBookingCode} = require ("./lib/commands");

let page;


describe("BookingTests", () => {
    beforeEach(async () => {
       page = await browser.newPage();
       await page.goto("http://qamid.tmweb.ru/client/hall.php");
    });

    afterEach(async () => {
        await page.close();
    });
});