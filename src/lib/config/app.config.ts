export const appConfig = {
	apiUrl: import.meta.env.VITE_API_URL,
	apiLoginEndpoint: import.meta.env.VITE_API_LOGIN_ENDPOINT,
	apiSessionEndpoint: import.meta.env.VITE_API_SESSION_ENDPOINT,
	sessionCookieName: `potber-auth-session`,
	sessionCookieOptions: {
		path: '/',
		sameSite: 'strict' as 'strict'
	}
};
