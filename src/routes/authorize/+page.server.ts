import { appConfig } from '$lib/config/app.config';
import { clients } from '$lib/config/clients.config';
import { fetchApi } from '$lib/utils/server.utils.js';
import { createExpiryDate } from '$lib/utils/misc.utils.js';
import { getSession } from '$lib/utils/server.utils.js';
import { error, fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, url, request }) => {
	const clientid = url.searchParams.get('client_id');
	const client = clients.find((client) => client.id === clientid);
	if (!clientid) error(400, 'Missing client_id. Did you forget to include it?');
	if (!client)
		error(
			400,
			"Invalid client_id. Did you forget to include your client into 'src/lib/config/clients.config.ts'?"
		);
	const responseType = url.searchParams.get('response_type');
	if (!responseType) error(400, 'Missing response_type. Did you forget to include it?');
	if (responseType !== 'token') error(400, "Invalid response_type. response_type must be 'token'.");
	const redirectUri = url.searchParams.get('redirect_uri');
	if (!redirectUri) error(400, 'Missing redirect_uri. Did you forget to include it?');
	const redirectUriMatch = client.allowedRedirectUris.find(
		(uri) => uri === decodeURIComponent(redirectUri)
	);
	if (!redirectUriMatch)
		error(
			400,
			"Invalid redirect_uri. Did you forget to specify that URI in 'src/lib/config/clients.config.ts'?"
		);

	// In case the user is currently signed in, there's no need for them to sign in again
	const accessToken = cookies.get(appConfig.sessionCookieName);
	if (accessToken) {
		const session = await getSession(accessToken);
		return { session: session, accessToken: accessToken };
	} else return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const lifetime = data.get('lifetime');

		if (!username || !password || !lifetime) {
			error(500);
		}

		const response = await fetchApi(appConfig.apiLoginEndpoint, {
			request: {
				method: 'POST',
				body: JSON.stringify({
					username,
					password,
					lifetime
				})
			}
		});
		if (!response.ok) {
			return fail(401);
		}
		const responseData = await response.json();
		const { access_token } = responseData;
		try {
			const session = await getSession(access_token);
			// Store the token in a cookie and return
			cookies.set(appConfig.sessionCookieName, access_token, {
				...appConfig.sessionCookieOptions,
				expires: createExpiryDate(session.exp)
			});
			return { accessToken: access_token };
		} catch (error) {
			return fail(401);
		}
	}
};
