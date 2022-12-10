module.exports = {

    getMainPageUrl: async function(page, expectedUrl) {
        try {
            await page.waitForTimeout(2000);
            const url = await page.url(); 
            expect(url).toEqual(`${expectedUrl}`);
        } catch (error) {
            throw new Error('URL is not received');
        }
    },

    booking: async function(page, row, chair) {
        const chosenFilm = await page.$x('//p[contains(text(), "Начало сеанса: 19:00")]');
        const rowEl = await page.$(`.buying-scheme__row:nth-child(${row})`);
        const chairEl = await rowEl.$(`.buying-scheme__chair:nth-child(${chair})`);
        await chairEl.click();
        await page.waitForTimeout(2000);
        const [bookingButton] = await page.$x('//button[contains(text(),"Забронировать")]');
        await bookingButton.click();
    },

    getBookingCode: async function (page) {
        try {
            await page.waitForSelector('.acceptin-button', {timeout: 60000});
            const [codeButton] = await page.$x('//button[contains(text(),"Получить код бронирования")]');
            await codeButton.click();
            await page.waitForNavigation();
            await page.waitForSelector('.ticket__info-qr', {timeout: 60000});
        } catch (error) {
            throw new Error('Get code failed');
        }
    },

    chooseFilmAndTime: async function(page, film, time) {
        const [needed] = await page.$x(`//a[contains(text(), '${time}')][ancestor::div[preceding-sibling::div//*[contains(text(), '${film}')]][contains(@class, 'movie-seances__hall')]]`);
        await needed.click();
    }

}