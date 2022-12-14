module.exports = {

    getMainPageUrl: async function(page, expectedUrl) {
        await page.waitForTimeout(2000);
        const url = await page.url();
        expect(url).toEqual(`${expectedUrl}`);
    },

    booking: async function(page, row, chair) {
        await page.waitForSelector(".buying-scheme__wrapper");
        const chosenFilm = await page.$x('//p[contains(text(), "Начало сеанса: 19:00")]');
        await page.waitForSelector(chosenFilm);
        const rowEl = await page.$(`.buying-scheme__row:nth-child(${row})`);
        const chairEl = await rowEl.$(`.buying-scheme__chair:nth-child(${chair})`);
        await chairEl.click();
        await page.waitForTimeout(2000);
        const [bookingButton] = await page.$x('//button[contains(text(),"Забронировать")]');
        await bookingButton.click();
    },

    getBookingCode: async function (page) {
        await page.waitForSelector('.acceptin-button', {timeout: 60000});
        const [codeButton] = await page.$x('//button[contains(text(),"Получить код бронирования")]');
        await codeButton.click();
        await page.waitForNavigation();
        await page.waitForSelector('.ticket__info-qr', {timeout: 60000});
    },

    selectDay: async function(page, day) {
        await page.waitForSelector('.page-header__title', {timeout: 60000});
        const [weekDay] = await page.$x(`//span[contains(text(), ${day})]`);
        await weekDay.click();
    },

    chooseFilmAndTime: async function(page, film, time) {
        const [needed] = await page.$x(`//li[child::a[contains(text(), ${time})]][ancestor::div[preceding-sibling::div//*[contains(text(), ${film})]][contains(@class, 'movie-seances__hall')]]`);
        await needed.click();
    }

}