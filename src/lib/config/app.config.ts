export const appConfig = {
	apiUrl: process.env.API_URL ?? import.meta.env.VITE_API_URL,
	apiLoginEndpoint: process.env.API_LOGIN_ENDPOINT ?? import.meta.env.VITE_API_LOGIN_ENDPOINT
};
