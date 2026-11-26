import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').fill(faker.lorem.paragraph());
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await expect(page.locator('.oxd-grid-item').first()).toBeVisible();
});