<script>
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import Fa from 'svelte-fa';
</script>

<p>
	<b>potber-auth</b> ist ein auf
	<a href="https://datatracker.ietf.org/doc/html/rfc6749" target="_blank">OAuth 2.0</a> basierender
	zentraler Authentifizierungsdienst für
	<a href="https://forum.mods.de" target="_blank">forum.mods.de</a>.

	<br />
	<br />

	Er verwendet <a href="https://github.com/spuxx1701/potber-api" target="_blank">potber-api</a>, um
	Nutzer:innen gegenüber einer begrenzten Liste vertrauenswürdiger Anwendungen (z.B.
	<a href="https://github.com/spuxx1701/potber-client" target="_blank">potber-client</a> und
	<a href="https://www.mods-mpe.de/" target="_blank">MPE</a>) zu authentifizieren.

	<br />
	<br />

	Eine Anwendung, die potber-auth verwendet, erfährt dabei <b>niemals</b> Dein Passwort.

	<br />
	<br />

	<a class="button-link" href="https://github.com/spuxx1701/potber-auth" target="_blank">
		<Fa slot="icon" icon={faGithub} />
		GitHub
	</a>
</p>

<style>
	p {
		text-align: center;
	}

	.button-link {
		display: flex;
		text-decoration: none;
		height: var(--control-default-height);
		align-items: center;
		justify-content: center;
	}

	.button-link :global(svg) {
		margin-right: 0.5rem;
	}

	.button-link :global(path) {
		color: var(--color-text-subtle);
	}
</style>
