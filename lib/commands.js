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

    booking: async function(page) {
        try {
            const [bookingButton] = await page.$x('//button[contains(text(),"Забронировать")]');
            await bookingButton.click();
        } catch (error) {
            throw new Error('Booking is failed');
        }
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

}