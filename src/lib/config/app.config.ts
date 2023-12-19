import { env } from '$env/dynamic/private';

export const appConfig = {
	apiUrl: env.API_URL ?? env.VITE_API_URL,
	apiLoginEndpoint: env.API_LOGIN_ENDPOINT ?? env.VITE_API_LOGIN_ENDPOINT,
	apiSessionEndpoint: env.API_SESSION_ENDPOINT ?? env.VITE_API_SESSION_ENDPOINT,
	sessionCookieName: `potber-auth-session`,
	sessionCookieOptions: {
		path: '/',
		sameSite: 'strict' as 'strict'
	}
};
