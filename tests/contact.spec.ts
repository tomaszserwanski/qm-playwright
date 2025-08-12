import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('Kontakt – formularz widoczny / walidacje', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await page.getByRole('link', { name: /kontakt|contact/i }).first().click();
  await expect(page).toHaveURL(/kontakt|contact/i);
  const nameInput = page.getByLabel(/imię|name/i);
  const emailInput = page.getByLabel(/e-?mail/i);
  const messageInput = page.getByLabel(/wiadomość|message/i);
  await expect(nameInput.first()).toBeVisible();
  await expect(emailInput.first()).toBeVisible();
  await expect(messageInput.first()).toBeVisible();
});