import { appConfig } from '$lib/config/app.config';
import { log } from '$lib/logging';
import { createRequestId } from './misc.utils';

/**
 * Triggers a `fetch` request to the API server.
 * @param endpoint The endpoint.
 * @param request (optional) The request object.
 * @returns The response.
 */
export async function fetchApi(
	endpoint: string,
	options?: { request?: RequestInit; accessToken?: string }
) {
	const { request, accessToken } = { ...options };
	const url = `${appConfig.apiUrl}${endpoint}`;
	const headers: Record<string, string> = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	};
	if (options?.accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
	const requestId = createRequestId();
	log(`Outgoing request [${requestId}]: ${request?.method ?? 'GET'} ${url}`, { context: 'Fetch' });
	const response = await fetch(url, { headers, ...request });
	log(`Incoming response [${requestId}]: ${response.status} ${response.statusText}`, {
		context: 'Fetch'
	});
	return response;
}

/**
 * Uses the given `accessToken` to retrieve the corresponding session. Throws an exception
 * if the session is invalid.
 * @param accessToken The access token.
 * @returns The session object.
 */
export async function getSession(accessToken: string) {
	const response = await fetchApi(appConfig.apiSessionEndpoint, {
		accessToken
	});
	if (response.ok) {
		const session: App.Session = await response.json();
		return session;
	} else {
		throw new Error('Unauthorized');
	}
}
