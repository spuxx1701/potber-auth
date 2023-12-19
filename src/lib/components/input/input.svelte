<script>
	// import { randomUUID } from 'crypto';

	/**
	 * @type {string}
	 */
	export let label;

	const componentId = 'foo';
</script>

<div>
	<input
		id={`${componentId}-input`}
		placeholder=" "
		aria-placeholder={label}
		title={label}
		{...$$restProps}
	/>
	<label for={`${componentId}-input`}>{label}</label>
</div>

<style>
	div {
		position: relative;
		width: 100%;
	}

	input {
		width: 100%;
		box-sizing: border-box;
		min-height: var(--control-input-height);
		background-color: var(--color-control-inactive);
		border: 0px solid transparent;
		margin: 0;
		padding: 1.4rem 1rem 0 1rem;
		color: var(--color-text-default);
		font-size: 1em;
	}

	label {
		display: block;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 1rem;
		transform-origin: left top;
		user-select: none;
		pointer-events: none;
		color: var(--color-text-subtle);
	}

	input:focus {
		outline: none;
		background-color: var(--color-control-inactive);
		border-bottom: 2px solid var(--color-accent);
	}

	input:focus + label {
		color: var(--color-accent);
	}

	input:focus + label,
	input:not(:placeholder-shown) + label {
		transform: translateY(-100%);
		font-size: smaller;
	}

	/* Hide input carets */
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
