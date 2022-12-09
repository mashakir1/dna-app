import { test, expect } from '@playwright/test';
import { HomePage } from '../models/Home.page';
import { LoginPage } from '../models/Login.page';
import dotenv from 'dotenv';

// load dotenv
dotenv.config();

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {});

  test('Login teacher', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await loginPage.login(process.env.USER!, process.env.PASSWORD!);

    await expect(page).not.toHaveURL(/.*login.microsoftonline.com.*/);
    await expect(page).toHaveURL(/.*nordanglia.com*/);
  });
});
