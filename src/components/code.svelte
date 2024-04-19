<script lang="ts">
	import Play from 'svelte-material-icons/Play.svelte';

	let code = ['', '', '', '', '']; // Initialise le code avec 5 traits vides

	function updateCode(event: any, index: number) {
		const input = event.target.value;

		// Met à jour le code avec le caractère saisi
		code[index] = input[input.length - 1] || ''; // Remplace le caractère vide si aucun caractère n'est saisi

		// Si la touche "Retour arrière" est enfoncée et que le champ de saisie est vide, déplace le focus vers le champ de saisie précédent
		if (event.inputType === 'deleteContentBackward' && !input && index > 0) {
			const prevInput = event.target.previousElementSibling as HTMLInputElement;
			if (prevInput) {
				prevInput.focus();
				code[index] = ''; // Supprime le dernier caractère saisi dans le champ de saisie actuel
			}
		} else if (input.length > 0 && index < 4) {
			// Si un caractère est saisi et qu'il reste des champs de saisie disponibles, déplace le focus vers le champ de saisie suivant
			const nextInput = event.target.nextElementSibling as HTMLInputElement;
			if (nextInput) {
				nextInput.focus();
			}
		}
	}

	// Déclarer la fonction pour rejoindre
	function join() {
		const codeUpperCased = code.join('').toUpperCase();
		// Afficher le code dans la console
		console.log(codeUpperCased);
	}
</script>

<div class="content">
	<h2>Code de la partie</h2>

	<div class="code-input">
		{#each code as char, index}
			<input type="text" value={char} on:input={(e) => updateCode(e, index)} maxlength="1" />
		{/each}
	</div>

	<button class="purple" on:click={join}>
		<Play width="1.5em" height="1.5em" />
		Rejoindre
	</button>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5vw;

		h2 {
			font-size: 2.5vw;
		}

		.code-input {
			margin-bottom: 5px;
			input {
				background: none;
				border: none;
				border-bottom: 2px solid white;
				width: 5vw;
				height: 5vw;
				padding-top: 10px;
				font-size: 5vw;
				text-align: center;
				margin: 0 20px;
				text-transform: uppercase;
				font-family: LuckiestGuy;
				outline: none;
				color: white;
			}

			input:focus {
				border-bottom: 4px solid white;
			}
		}
		button {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-top: 30px;
			width: 220px;
			font-size: 1vw;
			svg {
				margin-right: 10px;
			}
		}
	}
</style>
