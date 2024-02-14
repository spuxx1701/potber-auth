import { expect, test } from '@playwright/test';
// import { testWithMsw } from '../_msw';

const validRoutePath =
	'/authorize?client_id=45a14ddc-e3d3-4b5b-a45a-a04946974adc&response_type=token&redirect_uri=https://potber.de/auth/callback';

test('should properly validate the form', async ({ page }) => {
	await page.goto(validRoutePath);
	const usernameField = page.getByLabel('Username');
	let isValid = await usernameField.evaluate((node: HTMLInputElement) => node.validity.valid);
	expect(isValid).toBe(false);
	await usernameField.fill('Foo');
	isValid = await usernameField.evaluate((node: HTMLInputElement) => node.validity.valid);
	expect(isValid).toBe(true);

	const passwordField = page.getByLabel('Passwort');
	isValid = await passwordField.evaluate((node: HTMLInputElement) => node.validity.valid);
	expect(isValid).toBe(false);
	await passwordField.fill('Bar');
	isValid = await passwordField.evaluate((node: HTMLInputElement) => node.validity.valid);
	expect(isValid).toBe(true);
});

// TODO: Still looking for a way to test the entire application e2e while mocking outgoing
// requests from the server-side part
// testWithMsw('should trigger the expected request', async ({ page }) => {
// 	await page.goto(validRoutePath);
// 	await page.getByLabel('Username').fill('Foo');
// 	await page.getByLabel('Passwort').fill('Bar');
// 	await page.getByLabel('Sitzungsdauer').selectOption({ label: 'Ein Tag' });
// 	await page.getByText('Anmelden').click();
// 	await page.
// 	const response = await page.waitForResponse((res) => {
// 		return res.url().includes('authorize?/login');
// 	});
// 	const json = await response.json();
// 	expect(json).toEqual({ type: 'failure', status: 401 });
// });
