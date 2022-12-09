import { Page } from '@playwright/test';
import { BasePage } from './Base.page';

export class LoginPage extends BasePage {
  userNameTxt: string;
  passwordTxt: string;
  submitBtn: string;
  noBtn: string;
  constructor(page: Page) {
    super(page);
    this.userNameTxt = 'input[type=email]';
    this.passwordTxt = 'input[type=password]';
    this.submitBtn = 'input[type=submit]';
    this.noBtn = 'input#idBtn_Back';
  }

  async navigate() {
    await super.navigate('');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.userNameTxt, username);
    await this.page.click(this.submitBtn);
    await this.page.fill(this.passwordTxt, password);
    await this.page.click(this.submitBtn);
    await this.page.click(this.noBtn);
  }
}
