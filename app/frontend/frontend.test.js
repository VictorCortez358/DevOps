import { test, expect } from '@playwright/test';

test('should display products when clicking the View button', async ({ page }) => {
    // Interceptar la llamada al backend y devolver una respuesta simulada
    await page.route('**/get-products', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                { id: 1, name: 'Product 1' },
                { id: 2, name: 'Product 2' },
                { id: 3, name: 'Product 3' },
            ]),
        });
    });

    await page.goto('http://localhost:3000');

    // Esperar a que el botón esté visible y disponible para hacer clic
    await page.waitForSelector('button', { timeout: 10000 }); // Espera hasta 10 segundos

    await page.click('button');  // Esto debería disparar la llamada a /get-products

    // Verificar que los productos se muestran
    const products = await page.$$eval('ul#products .product', (elements) => elements.map(el => el.textContent));
    expect(products).toContain('Product 1');
    expect(products).toContain('Product 2');
    expect(products).toContain('Product 3');
}, 60000); // Aumentar el tiempo máximo de espera para el test a 60 segundos
