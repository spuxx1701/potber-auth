import { appConfig } from '$lib/config/app.config.js';
import { json } from '@sveltejs/kit';

/**
 * Terminates the current session if there is one.
 * @type {import('./$types').RequestHandler}
 * */
export function POST({ cookies }) {
	cookies.delete(appConfig.sessionCookieName, { ...appConfig.sessionCookieOptions });
	return json(undefined, { status: 200 });
}
