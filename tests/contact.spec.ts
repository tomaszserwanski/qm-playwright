import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('Kontakt – formularz widoczny / walidacje', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await page.getByRole('link', { name: /kontakt|contact/i }).first().click();
  await expect(page).toHaveURL(/kontakt|contact/i);
  const nameInput = page.locator('input[name="vorname"]');
  const emailInput = page.locator('input[name="e-mail"]');
  const messageInput = page.locator('textarea[name="message"]');
  await expect(nameInput.first()).toBeVisible();
  await expect(emailInput.first()).toBeVisible();
  await expect(messageInput.first()).toBeVisible();
});