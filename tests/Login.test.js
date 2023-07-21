import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/Login');
  await page.getByPlaceholder('email').click();
  await page.getByPlaceholder('email').fill('admin@user.com');
  await page.getByPlaceholder('*********').click();
  await page.getByPlaceholder('*********').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
});
test('test2', async ({ page }) => {
  await page.goto('http://localhost:3000/Login');
  await page.getByPlaceholder('email').click();
  await page.getByPlaceholder('email').fill('admin@user.com');
  await page.getByPlaceholder('*********').click();
  await page.getByPlaceholder('*********').fill('3004');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Invalid Email Or Password').click();
});