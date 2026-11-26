import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import data from "../../test-data/Add EMP.json"
import loginData from "../../test-data/login.json"

test('Add Employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(loginData.username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(loginData.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill(data.firstname);
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill(data.lastname);
  await page.locator('form').getByRole('textbox').nth(4).click();
  await page.locator('form').getByRole('textbox').nth(4).click();
  await page.locator('form').getByRole('textbox').nth(4).fill(faker.string.numeric(10));
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Configuration Employee').click();
 // await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});

test('Add Emp Wrong Confirm Password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(loginData.username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(loginData.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill(data.firstname);
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill(data.lastname);
  await page.locator('form span').click();
  await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
  await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('helaa');
  await page.locator('input[type="password"]').first().click();
  await page.locator('input[type="password"]').first().fill('helaa');
  await page.locator('input[type="password"]').nth(1).click();
  await page.locator('input[type="password"]').nth(1).fill('helal');
  await page.getByRole('button', { name: 'Save' }).click();
});