import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactPage extends BasePage {
  readonly privacyPolicy: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;

  constructor(page: Page) {
    super(page);
    this.privacyPolicy = page.locator('input[name="use_label_element"]');
    this.nameInput = page.locator('input[name="vorname"]');
    this.emailInput = page.locator('input[name="e-mail"]').first();
  }

  async selectPrivacyPolicy() {
    this.privacyPolicy.click();
  }

  async fillInput(element: Locator, text: string) {
    element.fill(text);
  }

}