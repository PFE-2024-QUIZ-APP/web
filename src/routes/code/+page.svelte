<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.svg';
	import avatar from '$lib/images/avatar_example.png';
	import { game } from '$lib/stores/game';
	import PlusBoxOutline from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Play from 'svelte-material-icons/Play.svelte';
	import Refresh from 'svelte-material-icons/Refresh.svelte';

	let userName: string = '';
	let room: string = '';
	let isInviteLink: boolean = false;

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

<div class="container">
	<div class="home-header">
		<img src={logo} alt="logo" />
		<h2>Le jeu de quiz à potentiel infini</h2>
		<button class="return white" on:click={join}>
			<Play width="1.5em" height="1.5em" />
			Retour
		</button>
	</div>

	<div class="content">
		<h2>Code de la partie</h2>
	
		<div class="code-input">
			{#each code as char, index}
					<input type="text" value={char} on:input={(e) => updateCode(e, index)} maxlength="1">
			{/each}
		</div>

		<button class="purple" on:click={join}>
			<Play width="1.5em" height="1.5em" />
			Rejoindre
		</button>
	
	</div>

	<div class="play-footer">
		<a class="footer-link-1" href="https://www.google.com">Conditions d'utilisation</a>
		<span>|</span>
		<a class="footer-link-2" href="https://www.google.com">Contact</a>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 70vw;
		margin: auto;

		// Header
		.home-header {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {
				width: 12vw;
			}
			h2 {
				font-size: 1.2vw;
				color: white;
			}
			.return {
				position: absolute;
				top: 3vw;
				right: -18vw;
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

		// Content
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



		// Footer
		.play-footer {
			position: absolute;
			bottom: 10vh;
			.footer-link-1 {
				margin-right: 20px;
			}
			.footer-link-2 {
				margin-left: 20px;
			}
		}
	}

</style>
