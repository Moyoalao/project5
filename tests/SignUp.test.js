import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/SignUp');
  await page.getByPlaceholder('admin@gmail.com').click();
  await page.getByPlaceholder('admin@gmail.com').fill('admin6@user.com');
  await page.getByPlaceholder('*********').click();
  await page.getByPlaceholder('*********').fill('123456');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.goto('http://localhost:3000/');
});

test('test2', async ({ page }) => {
  await page.goto('http://localhost:3000/SignUp');
  await page.getByPlaceholder('admin@gmail.com').click();
  await page.getByPlaceholder('admin@gmail.com').fill('admin@user.com');
  await page.getByPlaceholder('*********').click();
  await page.getByPlaceholder('*********').fill('1234567');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByText('Email or Password in use').click();
});