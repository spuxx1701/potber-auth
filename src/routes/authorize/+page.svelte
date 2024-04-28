<script>
	import Button from '$lib/components/button/button.svelte';
	import Input from '$lib/components/input/input.svelte';
	import Fa from 'svelte-fa';
	import { faRightToBracket, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { enhance } from '$app/forms';
	import SessionPanel from '$lib/features/session-panel/session-panel.svelte';
	import { redirect } from '$lib/utils/client.utils';
	import Select from '$lib/components/select/select.svelte';
	import { defaultLifetimeOption, lifetimeOptions } from '$lib/config/login.config';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {Login.State} */
	$: state = data.session && data.accessToken ? { status: 'active' } : { status: 'none' };

	/** @type {App.Session | undefined} */
	$: session = data.session;

	/** @type {string } */
	$: accessToken = data.accessToken ?? '';

	/** @type {boolean} */
	$: submitIsBusy = state.status === 'success' || state === 'pending';

	export function continueWithLogin() {
		redirect(accessToken, 1000);
	}
</script>

<span class={`backdrop ${state.status}`} />
<div class={`login-container`}>
	<div class="upper-section">
		{#if session && accessToken}
			<SessionPanel {session} {accessToken} />
		{:else}
			<form
				method="POST"
				action="?/login"
				use:enhance={() => {
					state = 'pending';
					return async ({ result }) => {
						if (result.type === 'success' && result.data) {
							state = { status: 'success', code: 200 };
							// @ts-ignore
							accessToken = result.data.accessToken;
							// @ts-ignore
							session = result.data.session;
							continueWithLogin();
						} else {
							state = { status: 'failed', code: result.status };
						}
					};
				}}
			>
				<Input label="Username" type="text" name="username" required={true} />
				<Input label="Passwort" type="password" name="password" required={true} />
				<Select
					name="lifetime"
					label="Sitzungsdauer"
					options={lifetimeOptions}
					defaultOption={defaultLifetimeOption}
				/>
				<Button
					variant="primary"
					type="submit"
					text={state.status === 'success' ? 'Du wirst gleich weitergeleitet...' : 'Anmelden'}
					busy={submitIsBusy}
				>
					<Fa slot="icon" icon={faRightToBracket} />
				</Button>
				<p class="info-text">
					{#if state.status === 'failed'}
						{#if state.code === 403}
							Dein Account ist permanent gesperrt. Permanent gesperrte Accounts können sich bei
							potber-auth nicht anmelden.
						{:else}
							Das hat leider nicht geklappt. Versuche es nochmal.
						{/if}
					{/if}
				</p>
			</form>
		{/if}
	</div>

	<a href="/about">
		<Fa slot="icon" icon={faInfoCircle} />
		Mehr Informationen
	</a>
</div>

<style>
	.login-container {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.backdrop {
		z-index: -1;
		position: fixed;
		width: 100vw;
		height: 100vh;
	}

	.none,
	.pending {
		background-color: transparent;
	}

	.success,
	.active {
		background-color: var(--color-success);
	}

	.failed {
		background-color: var(--color-error);
	}

	form {
		width: 100%;
		margin-bottom: 0.5rem;
	}

	form > :global(*) {
		width: 100%;
	}

	form > :global(*:not(:first-child)) {
		margin-top: 0.5rem;
	}

	.login-container > :global(button:last-child) {
		margin-bottom: 1rem;
	}

	.info-text {
		text-align: center;
	}

	.info-text:empty {
		color: transparent;
	}

	a {
		display: flex;
		text-decoration: none;
		height: var(--control-default-height);
		align-items: center;
		justify-content: center;
	}

	a :global(svg) {
		margin-right: 0.5rem;
	}

	a :global(path) {
		color: var(--color-text-subtle);
	}
</style>
