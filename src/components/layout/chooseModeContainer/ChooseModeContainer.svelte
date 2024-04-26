<script>
	import avatar from '$lib/images/avatar_example.png';
	import generateQuiz from '$lib/images/image-generate-quiz.png';
	import themeQuiz from '$lib/images/image-theme-quiz.png';
	import Button from '../../Button.svelte';
	import Checked from 'svelte-material-icons/Check.svelte';

	let isThemeChecked = false;
	let isIAChecked = false;

	function toggleTheme() {
		if (isThemeChecked) {
			isThemeChecked = false;
			isIAChecked = false; // Désélectionner le mode IA si le mode thème est sélectionné
		} else {
			isThemeChecked = true;
			isIAChecked = false;
		}
	}

	function toggleIA() {
		if (isIAChecked) {
			isIAChecked = false;
			isThemeChecked = false; // Désélectionner le mode thème si le mode IA est sélectionné
		} else {
			isIAChecked = true;
			isThemeChecked = false;
		}
	}
</script>

<div class="choose-mode">
	<div class="mode-theme" class:checked={isThemeChecked} on:click={toggleTheme}>
		<div class="checked-mode">
			{#if isThemeChecked}
				<Checked width="1.5em" height="1.5em" />
			{/if}
		</div>
		<img src={generateQuiz} alt="Image mode" />
		<span>Quiz à thème</span>
	</div>
	<div class="mode-ia">
		<div class="checked-mode">
			{#if isIAChecked}
				<Checked width="1.5em" height="1.5em" />
			{/if}
		</div>
		<img src={themeQuiz} alt="Image mode" />
		<span>AI coming soon</span>
	</div>
</div>

<Button color="purple" icon="play" title="Continuer" />

<style lang="scss">
	.choose-mode {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		margin-top: 5vw;

		.mode-theme,
		.mode-ia {
			.checked-mode {
				position: absolute;
				top: -1vw;
				right: -1vw;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2.5vw;
				height: 2.5vw;
				background-color: #755b86;
				border: 4px solid white;
				border-radius: 10vw;
				opacity: 0; // Assure que le checked-mode est caché par défaut
				transition: opacity 0.3s ease-in-out; // Transition pour l'effet fade-in et fade-out
			}
		}

		.mode-theme,
		.mode-ia {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: #8b85c1;
			width: 13vw;
			height: 13vw;
			border: 4px solid #8b85c1;
			border-radius: 32px;
			transition: 0.2s all ease-in-out;
			cursor: pointer;
			img {
				height: 4vw;
			}
			span {
				margin-top: 1.2vw;
				font-size: 1.5vw;
			}
		}

		.mode-theme.checked,
		.mode-ia.checked {
			background-color: #755b86;
			border: 4px solid white;
		}

		.mode-theme.checked .checked-mode,
		.mode-ia.checked .checked-mode {
			opacity: 1; // Affiche le checked-mode lorsque le mode est sélectionné
		}

		.mode-theme:hover:not(.checked),
		.mode-ia:hover:not(.checked) {
			background-color: #755b86;
			border: 4px solid white;
		}

		// A enlever quand l'ia sera intégré
		.mode-ia {
			background: lightgray;
			cursor: not-allowed;
			border: none;
		}
		.mode-ia:hover:not(.checked) {
			background: lightgray;
			cursor: not-allowed;
			border: none;
		}
	}
</style>
