import { test, expect } from '@playwright/test';

test('should display products when clicking the View button', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('button');
    const products = await page.$$('ul#products .product');
    expect(products.length).toBeGreaterThan(0);
});
