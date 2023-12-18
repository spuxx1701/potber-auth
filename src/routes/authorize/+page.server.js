import { appConfig } from '$lib/config/app.config';
import { error, fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const lifetime = data.get('lifetime') ?? 3600;

		if (!username || !password || !lifetime) {
			error(500);
		}

		const url = `${appConfig.apiUrl}${appConfig.apiLoginEndpoint}`;
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};

		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				username,
				password,
				lifetime
			})
		});
		if (!response.ok) {
			return fail(401);
		}
		const responseData = await response.json();
		return responseData;
	}
};
