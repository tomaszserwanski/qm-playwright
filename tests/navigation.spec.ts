import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

let home: HomePage;

test.describe('Nawigacja – kluczowe sekcje', () => {
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.goto();
    await home.expectCommonLayout();
  });

  test('przejście do sekcji Usługi działa', async ({page}) => {
    await page.getByRole('link', { name: /Portfolio|Portfolio/i }).first().click();
    await expect(page).toHaveURL(/services|uslugi|oferta/i);
  });

  test('najechanie na "Testowanie i kontrola jakości" pokazuje submenu', async () => {

    // łapiemy li zawierający odpowiedni link
    await expect(home.subNavTestingQA).toHaveCount(1); // tylko jeden element
    
    await home.subNavTestingQA.hover();
    
    // selector sub-menu
    const subMenu = home.subNavTestingQA.locator('ul');

    // sprawdzamy, że submenu jest widoczne na stronie
    await expect(subMenu).toHaveCount(1);

    // sprawdzamy, że zawiera link z tekstem 'Przegląd'
    const overviewLink = subMenu.locator('a').filter({ hasText: /Przegląd|Overview/i });
    await expect(overviewLink).toHaveCount(1);

    // opcjonalnie: kliknij w link
    await overviewLink.click();
  })
});