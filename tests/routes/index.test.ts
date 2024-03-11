import { expect, test } from '@playwright/test';

test('index page has expected header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'potber' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'AUTH' })).toBeVisible();
});
