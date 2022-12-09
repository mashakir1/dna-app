import { chromium, FullConfig, request } from '@playwright/test';
import conf from '../playwright.config';
import dotenv from 'dotenv';
import { LoginPage } from '../models/Login.page';

// load dotenv
dotenv.config();

const teacherStorage = './playwright/teacherStorageState.json';
const studentStorage = './playwright/studentStorageState.json';

// via ui
async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const teacherPage = await browser.newPage();
  const studentPage = await browser.newPage();
  const teacherLoginPage = new LoginPage(teacherPage);
  const studentLoginPage = new LoginPage(studentPage);
  const baseURL = conf?.use?.baseURL!;

  await teacherPage.goto(baseURL);
  await teacherLoginPage.login(process.env.USER!, process.env.PASSWORD!);
  await teacherPage.context().storageState({ path: teacherStorage });

  /* implement once student login is available */
  // await studentPage.goto(baseURL);
  // await studentLoginPage.login("student", "pass");
  // await studentPage.context().storageState({ path: studentStorage });

  await browser.close();
}

// via api
async function globalSetupApi(config: FullConfig) {
  const url = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`;
  const requestContext1 = await request.newContext();
  const requestContext2 = await request.newContext();

  await requestContext1.post(url, {
    form: {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
    },
  });

  await requestContext2.post(url, {
    form: {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
    },
  });

  // Save signed-in state
  await requestContext1.storageState({ path: teacherStorage });
  await requestContext1.dispose();
  await requestContext2.storageState({ path: studentStorage });
  await requestContext2.dispose();
}

export default globalSetup;
