<script>
	import '$lib/styles/global.css';
	import { fade } from 'svelte/transition';
</script>

<main transition:fade>
	<div class="app-title">
		<h1>potber</h1>
		<h2>AUTH</h2>
	</div>
	<slot />
</main>

<style>
	.app-title {
		z-index: 1;
	}

	.app-title > h1 {
		font-family: Pacifico;
		font-size: 3rem;
		margin-top: 1rem;
		margin-bottom: 0;
	}

	.app-title > h2 {
		color: var(--color-text-subtle);
		margin-top: -1rem;
		margin-left: 2rem;
		letter-spacing: 0.5rem;
	}
</style>
