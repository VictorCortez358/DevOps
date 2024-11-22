import { test, expect } from '@playwright/test';

test('should load the page and find the View button', async ({ page }) => {
    // Navegar a la página de inicio
    await page.goto('http://localhost:3000');

    // Verificar que la página no tenga errores visibles
    const errorText = await page.innerText('body');
    expect(errorText).not.toContain('Error');  // Asegurarse de que no haya errores en el cuerpo de la página

    // Verificar que el botón esté presente
    const button = await page.$('button');
    expect(button).not.toBeNull();  // El botón debe existir en la página
});
