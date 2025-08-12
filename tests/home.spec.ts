import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test.describe('Strona główna QualityMinds (PL)', () => {
  test('ładuje się i ma kluczowe elementy', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.expectCommonLayout();
    await home.expectPolishVariant();
    await expect(page).toHaveTitle(/QualityMinds|Quality Minds/i);
    await expect(home.heroHeading.first()).toBeVisible();
  });
});