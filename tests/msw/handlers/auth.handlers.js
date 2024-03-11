import { http, HttpResponse } from 'msw';

export const authHandlers = [
	http.post('https://api.potber.de/auth/login', async ({ request }) => {
		const { username, password } = await request.json();
		// The 'correct' username and password during tests is "TestUser" and "TestPassword"
		if (username !== 'TestUser' || password !== 'TestPassword') {
			return new HttpResponse('Unauthorized', { status: 401 });
		} else return HttpResponse.json({ access_token: 'your-access-token' }, { status: 200 });
	}),

	http.get('https://api.potber.de/auth/session', async ({ request }) => {
		const authorizationHeader = request.headers.get('Authorization');
		if (authorizationHeader === 'Bearer your-access-token') {
			return new HttpResponse(JSON.stringify({ username: 'TestUser', exp: 1234 }), { status: 200 });
		} else {
			return new HttpResponse('Unauthorized', { status: 401 });
		}
	})
];
