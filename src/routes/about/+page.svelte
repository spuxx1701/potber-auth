<script>
	import Button from '$lib/components/button/button.svelte';
	import About from '$lib/features/about/about.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';

	export function back() {
		history.back();
	}
</script>

<div>
	<About />
	<Button variant="secondary" text="Zurück" onClick={back}>
		<Fa slot="icon" icon={faArrowLeft} />
	</Button>
</div>

<style>
	div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	div :global(button) {
		width: 100%;
		margin: 0;
	}
</style>
