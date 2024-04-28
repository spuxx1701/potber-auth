// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Client {
			name: string;
			id: string;
			allowedRedirectUris: string[];
		}

		interface Session {
			userId: string;
			username: string;
			avatarUrl: string;
			cookie: string;
			iat: number;
			exp: number;
		}
	}

	namespace Login {
		type State = {
			status: 'active' | 'pending' | 'success' | 'failed' | 'none';
			code?: number;
		};
	}

	namespace Select {
		interface Option {
			label: string;
			value: any;
		}
	}
}

export {};
