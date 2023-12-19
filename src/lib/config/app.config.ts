import { env } from '$env/dynamic/private';

export const appConfig = {
	apiUrl: env.VITE_API_URL ?? '',
	apiLoginEndpoint: env.VITE_API_LOGIN_ENDPOINT ?? '',
	apiSessionEndpoint: env.VITE_API_SESSION_ENDPOINT ?? '',
	sessionCookieName: `potber-auth-session`,
	sessionCookieOptions: {
		path: '/',
		sameSite: 'strict' as 'strict'
	}
};
