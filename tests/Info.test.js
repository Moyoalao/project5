import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/Info');
  await page.getByRole('button', { name: 'ReadMore' }).nth(3).click();
});

test('test2', async ({ page }) => {
    await page.goto('http://localhost:3001/');
  });


