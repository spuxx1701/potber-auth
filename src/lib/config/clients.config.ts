/**
 * @type {{ name: string, id: string, allowedRedirectUrs: string[] }[]}
 */
export const clients = [
	{
		name: 'potber',
		id: '45a14ddc-e3d3-4b5b-a45a-a04946974adc',
		allowedRedirectUris: [
			'http://localhost:4200/auth/redirect',
			'https://test.potber.de/auth/redirect',
			'https://potber.de/auth/redirect',
			'https://www.potber.de/auth/redirect'
		]
	}
];
