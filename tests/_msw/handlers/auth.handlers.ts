import { http, HttpResponse, type StrictRequest } from 'msw';

interface LoginBody {
	username: string;
	password: string;
	lifetime: number;
}

export const authHandlers = [
	http.post('/auth/login', async ({ request }: { request: StrictRequest<LoginBody> }) => {
		throw new Error('Yo!');
		debugger;
		const { username, password } = await request.json();
		// The 'correct' username and password during tests is "TestUser" and "TestPassword"
		if (username !== 'TestUser' || password !== 'TestPassword') {
			return new HttpResponse('Unauthorized', { status: 401 });
		} else return HttpResponse.json({ access_token: 'your-access-token' });
	})
];
