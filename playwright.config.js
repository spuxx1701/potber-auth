import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run serve-tests',
		port: 4173
	},
	projects: [
		// { name: 'setup', testMatch: 'tests/setup.ts' },
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
			// dependencies: ['setup']
		}
	],
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/i
};

export default config;
