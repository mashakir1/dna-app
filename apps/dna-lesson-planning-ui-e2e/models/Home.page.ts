import { Page } from "@playwright/test";
import { BasePage } from "./Base.page";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);

    //locators
  }

  async navigate() {
    await super.navigate("");
  }
}