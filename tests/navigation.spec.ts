import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test.describe('Nawigacja – kluczowe sekcje', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.expectCommonLayout();
  });

  test('przejście do sekcji Usługi działa', async ({ page }) => {
    await page.getByRole('link', { name: /Portfolio|Portfolio/i }).first().click();
    await expect(page).toHaveURL(/services|uslugi|oferta/i);
  });
});