/**
 * Returns a promise that resolves after the given amount of miliseconds.
 * @param ms The amount of miliseconds.
 */
export async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Creates the proper expiry date from the given `JWT.exp` value.
 * @param exp The expiry value (seconds since Epoch).
 * @returns The corresponding `Date`.
 */
export function createExpiryDate(exp: number) {
	return new Date(exp * 1000);
}
