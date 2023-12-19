import { appConfig } from '$lib/config/app.config.js';
import { json } from '@sveltejs/kit';

/**
 * Used by
 * @type {import('./$types').RequestHandler}
 * */
export function GET() {
	return json({ status: 'OK' }, { status: 200 });
}
