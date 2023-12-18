<script>
	import Button from '$lib/components/button/button.svelte';
	import Input from '$lib/components/input/input.svelte';
	import Fa from 'svelte-fa';
	import { faRightToBracket, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { enhance } from '$app/forms';
	import { sleep } from '$lib/utils/misc.utils';

	/**
	 * @type {'failure' | 'success' |  'redirect' | 'error' | 'pending' | 'none'}
	 */
	$: state = 'none';
	/**
	 * @type {string | undefined}
	 */
	$: accessToken = undefined;
	/**
	 *@type {boolean}
	 */
	$: submitIsBusy = state === 'success' || state === 'pending';
</script>

<div class="login-container">
	<div class="upper-section">
		<form
			method="POST"
			action="/login"
			use:enhance={() => {
				state = 'pending';
				return async ({ result }) => {
					state = result.type;
					if (state === 'failure') {
						document.documentElement.style.setProperty('--color-body', 'var(--color-error)');
					} else if (state === 'success') {
						document.documentElement.style.setProperty('--color-body', 'var(--color-success)');
					} else {
						document.documentElement.style.setProperty('--color-body', 'unset');
					}
				};
			}}
		>
			<Input label="Username" type="text" name="username" required={true} />
			<Input label="Passwort" type="password" name="password" required={true} />
			<Button variant="primary" type="submit" text="Anmelden" busy={submitIsBusy}>
				<Fa slot="icon" icon={faRightToBracket} />
			</Button>
		</form>
		<p class="info-text">
			{#if state === 'failure'}
				Das hat leider nicht geklappt. Versuche es nochmal.
			{:else if state === 'success'}
				Du bist nun angemeldet. Du wirst in wenigen Momenten weitergeleitet...
			{/if}
		</p>
	</div>

	<Button variant="secondary" type="button" text="Mehr Informationen">
		<Fa slot="icon" icon={faInfoCircle} />
	</Button>
</div>

<style>
	.login-container {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
</style>
