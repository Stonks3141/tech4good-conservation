import { test } from '@playwright/test';

test('hi', async ({ page }) => {
  await page.goto('/');
});
