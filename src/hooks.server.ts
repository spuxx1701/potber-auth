import { log } from '$lib/logging';
import type { Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	log(`Incoming request: ${event.request.method} ${event.url.pathname}${event.url.search}`, {
		context: 'RequestHandler'
	});

	const response = await resolve(event);
	return response;
}
