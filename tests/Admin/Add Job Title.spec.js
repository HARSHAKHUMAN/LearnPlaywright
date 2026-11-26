import { test, expect } from '@playwright/test';
import logindata from "../../test-data/login.json";
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  const jobTitle = faker.person.jobTitle();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(logindata.username);
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('span').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill(jobTitle);
  await page.getByPlaceholder('Type description here').click();
  await page.getByPlaceholder('Type description here').fill(faker.person.jobDescriptor());
  await page.getByPlaceholder('Add note').click();
  await page.getByPlaceholder('Add note').fill(faker.lorem.paragraph());
  await page.getByRole('button', { name: 'Save' }).click();
  //await expect(page.getByText('Successfully Saved')).toBeVisible();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
 // await expect(page.getByText(jobTitle, { exact: true })).toBeVisible({ timeout: 15000 });
});