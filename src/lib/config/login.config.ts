/** @type {Select.Option[]} */
export const lifetimeOptions = [
	{
		label: 'Ein Jahr',
		value: 31536000
	},
	{
		label: 'Ein Monat',
		value: 604800
	},
	{
		label: 'Ein Tag',
		value: 86400
	},
	{
		label: 'Eine Stunde',
		value: 3600
	}
];

export const defaultLifetimeOption = lifetimeOptions[0];
