import { test, expect } from '@playwright/test';

import data from "../test-data/login.json"

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('data.username');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('data.password');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Time at Work')).toBeVisible();
});

test('Login with Valid username and invalid password ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('data.username');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('data.wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Time at Work')).toBeVisible();
});

test('Login with InValid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('data.wrongusername');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('data.password');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Time at Work')).toBeVisible();
});

test('Login with inValid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('data.wrongusername');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('data.wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Time at Work')).toBeVisible();
});

test('try to login with blanks fields', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByText('Time at Work')).toBeVisible();
});

