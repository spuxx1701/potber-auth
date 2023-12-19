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
 * Redirects the user agent to the `redirect_uri` encoded in the URL and hands over the `access_token`.
 * @param accessToken The access token.
 * @param delay The delay after which the redirect will be performed.
 */
export async function redirect(accessToken: string, delay: number) {
	const redirectUri = getRedirectUri();
	await sleep(delay);
	const url = `${redirectUri}#access_token=${accessToken}&token_type=bearer`;
	location.href = url;
}
