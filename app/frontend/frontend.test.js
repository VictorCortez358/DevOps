import { test, expect } from '@playwright/test';

test('should load the page and find the View button', async ({ page }) => {
    // Navegar a la página de inicio
    await page.goto('http://localhost:3000');

    // Verificar que el título de la página sea correcto
    const title = await page.title();
    expect(title).toBe('DevOps 2024');  // El título debería coincidir con el esperado

    // Verificar que el botón "View" esté presente en la página
    const button = await page.$('button');
    expect(button).not.toBeNull();  // El botón debe existir

    // Opcional: Verificar que el contenedor de productos está vacío al principio
    const productsList = await page.$$('#products .product');
    expect(productsList.length).toBe(0);  // Al inicio no deberían haber productos
});
