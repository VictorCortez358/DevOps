const { chromium } = require('playwright');

describe('Frontend tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should display products when clicking the View button', async () => {
        await page.goto('http://localhost:3000'); 
        await page.click('button'); 
        const products = await page.$$('ul#products .product');
        expect(products.length).toBeGreaterThan(0);
    });
});
