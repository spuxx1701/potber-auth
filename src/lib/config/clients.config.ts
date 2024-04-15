export const clients: App.Client[] = [
	{
		name: 'potber',
		id: '45a14ddc-e3d3-4b5b-a45a-a04946974adc',
		allowedRedirectUris: [
			'http://localhost:4200/auth/callback',
			'http://schleppi.fritz.box:4200/auth/callback',
			'https://test.potber.de/auth/callback',
			'https://potber.de/auth/callback',
			'https://www.potber.de/auth/callback'
		]
	},
	{
		name: 'mpe',
		id: '2e216203-936a-4a75-94ea-307ab1ceb5f6',
		allowedRedirectUris: [
			'http://localhost:5000/auth',
			'https://www.mods-mpe.de/auth',
			'https://mods-mpe.de/auth'
		]
	}
];
