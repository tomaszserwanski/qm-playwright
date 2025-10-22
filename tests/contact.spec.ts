import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { ContactPage } from '../src/pages/contact.page';

test.only('Kontakt – formularz widoczny / walidacje', async ({ page }) => {
  const home = new HomePage(page);
  const contact = new ContactPage(page);
  await home.goto();
  await page.getByRole('link', { name: /kontakt|contact/i }).first().click();
  await expect(page).toHaveURL(/kontakt|contact/i);

  const messageInput = page.locator('textarea[name="message"]');

  await expect(contact.nameInput).toBeVisible();
  await contact.fillInput(contact.nameInput, 'Tomasz');
  await expect(contact.emailInput).toBeVisible();
  await contact.fillInput(contact.emailInput, 'tomasz@example.com');
  await expect(messageInput.first()).toBeVisible();

  await page.waitForLoadState('networkidle');

  await contact.selectPrivacyPolicy();
  await page.pause();

});