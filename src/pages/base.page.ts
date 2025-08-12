import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly nav: Locator;
  readonly footer: Locator;
  readonly cookieBanner: Locator;
  readonly acceptCookiesBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = page.locator('nav');
    this.footer = page.locator('footer');
    this.cookieBanner = page.locator('[id*="cookie" i], [class*="cookie" i], #cookie-banner');
    this.acceptCookiesBtn = page.getByRole('button', { name: /akcept|zgadzam|accept|ok/i });
  }

  async open(path: string = '/') {
    await this.page.goto(path);
  }

  async acceptCookiesIfPresent() {
    if (await this.cookieBanner.first().isVisible().catch(() => false)) {
      if (await this.acceptCookiesBtn.first().isVisible().catch(() => false)) {
        await this.acceptCookiesBtn.first().click();
      }
    }
  }

  async expectCommonLayout() {
    await expect(this.nav).toBeVisible();
    await expect(this.footer).toBeVisible();
  }
}