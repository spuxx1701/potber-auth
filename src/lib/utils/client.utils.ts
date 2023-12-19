import { sleep } from './misc.utils';

/**
 * Retrieves `redirect_uri` from the URL.
 */
export function getRedirectUri() {
	const url = new URL(location.href);
	const { searchParams } = url;
	return searchParams.get('redirect_uri') ?? '';
}

/**
 * Parses the access token.
 * @param accessToken The access token.
 * @returns The session object.
 */
export function parseAccessToken(accessToken: string) {
	var base64Url = accessToken.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);
	return JSON.parse(jsonPayload);
}

/**
 * Returns the number of seconds until the session expires.
 */
export function getExpiresInSeconds(accessToken: string) {
	const { exp } = parseAccessToken(accessToken);
	const now = new Date().getTime();
	const expiresIn = (exp * 1000 - now) / 1000;
	console.log(expiresIn);
}

/**
 * Redirects the user agent to the `redirect_uri` encoded in the URL and hands over the `access_token`.
 * @param accessToken The access token.
 * @param delay The delay after which the redirect will be performed.
 */
export async function redirect(accessToken: string, delay: number) {
	const redirectUri = getRedirectUri();
	const expiresIn = getExpiresInSeconds(accessToken);
	await sleep(delay);
	const url = `${redirectUri}#access_token=${accessToken}&token_type=bearer&expires_in=${expiresIn}`;
	location.href = url;
}
