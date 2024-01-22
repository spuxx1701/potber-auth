import { env } from '$env/dynamic/private';

export const appConfig = {
	apiUrl: env.VITE_API_URL ?? 'https://api.potber.de',
	apiLoginEndpoint: env.VITE_API_LOGIN_ENDPOINT ?? '/auth/login',
	apiSessionEndpoint: env.VITE_API_SESSION_ENDPOINT ?? '/auth/session',
	sessionCookieName: `potber-auth-session`,
	sessionCookieOptions: {
		path: '/',
		sameSite: 'strict' as 'strict'
	}
};
