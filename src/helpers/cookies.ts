import { Page } from '@playwright/test';

export async function acceptCookies(page: Page) {
  const banner = page.locator('[id*="cookie" i], [class*="cookie" i], #cookie-banner');
  const btn = page.getByRole('button', { name: /akcept|zgadzam|accept|ok/i });
  if (await banner.first().isVisible().catch(() => false)) {
    if (await btn.first().isVisible().catch(() => false)) {
      await btn.first().click();
    }
  }
}