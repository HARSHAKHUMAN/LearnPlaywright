import { test, expect } from '@playwright/test';

import loginData from "../../test-data/login.json";

test('Show Reports', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('loginData.username');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('loginData.password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Reports' }).click();
});