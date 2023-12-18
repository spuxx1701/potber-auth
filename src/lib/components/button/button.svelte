<script>
	import Fa from 'svelte-fa';
	import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

	/**
	 * @type {'primary' | 'primary-transparent' | 'secondary'}
	 */
	export let variant;

	/**
	 * @type {boolean}
	 */
	export let busy = false;

	/**
	 * @type {string}
	 */
	export let text;
</script>

<button title={text} class={`variant-${variant}`} disabled={busy} {...$$restProps}>
	{#if busy}
		<Fa icon={faCircleNotch} spin={true} />
	{:else}
		<slot name="icon" />
	{/if}
	<p>{text}</p>
</button>

<style>
	button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: var(--control-default-height);
		min-height: var(--control-default-height);
		border: none;
		border-radius: var(--global-border-radius);
		font-size: 1em;
	}

	button:not(:disabled) {
		cursor: pointer;
	}

	button > :global(svg) {
		margin-right: 0.5rem;
	}

	.variant-primary {
		background-color: var(--color-control-inactive);
		color: var(--color-text-default);
	}

	.variant-primary:disabled {
		filter: grayscale(0.9) brightness(1.5) opacity(0.5);
	}

	.variant-primary * {
		color: var(--color-text-default);
	}

	.variant-primary-transparent,
	.variant-primary-transparent * {
		background-color: transparent;
		color: var(--color-text-default);
	}

	.variant-secondary,
	.variant-secondary * {
		background-color: transparent;
		color: var(--color-text-subtle);
	}
</style>
