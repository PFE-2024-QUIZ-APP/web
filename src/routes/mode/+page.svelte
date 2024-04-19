<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.svg';
	import generateQuiz from '$lib/images/image-generate-quiz.png';
	import themeQuiz from '$lib/images/image-theme-quiz.png';
	import avatar from '$lib/images/avatar_example.png';
	import { game } from '$lib/stores/game';
	import PlusBoxOutline from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Play from 'svelte-material-icons/Play.svelte';
	import Refresh from 'svelte-material-icons/Refresh.svelte';

	let userName: string = '';
	let room: string = '';
	let isInviteLink: boolean = false;

	let selectedTab: string = 'mode'; // Variable pour suivre l'état actuel du contenu
	// Fonction pour changer l'état du contenu lorsque l'utilisateur appuie sur le bouton
	function selectTab(tab: string) {
			selectedTab = tab;
	}

	let selectedMode: string = 'generate-quiz'; // Variable pour suivre le mode sélectionné
	// Modes disponibles
	const modes = ['generate-quiz', 'theme-quiz'];

	// Fonction pour sélectionner un mode
	function selectMode(mode: string) {
			selectedMode = mode;
	}

</script>

<div class="container">
	<div class="home-header">
		<img src={logo} alt="logo" />
	</div>
	<div class="content">
		<div class="list-buttons">
			<button class:selected={selectedTab === 'mode'} on:click={() => selectTab('mode')}>Mode de jeu</button>
			<button class:selected={selectedTab === 'settings'} on:click={() => selectTab('settings')}>Paramètre</button>
	</div>
	{#if selectedTab === 'mode'}
		<div class="list-modes">
			<button class:selected={selectedMode === 'generate-quiz'} on:click={() => selectMode('generate-quiz')}>
					<img src={generateQuiz} alt="Image de Quiz Généré" />
					Quiz généré
			</button>
			<button class:selected={selectedMode === 'theme-quiz'} on:click={() => selectMode('theme-quiz')}>
					<img src={themeQuiz} alt="Image de Quiz à Thème" />
					Quiz à thème
			</button>
	</div>
	
		{:else}
		<h1>to complete</h1>
		{/if}
		<button class="start purple">
			<Play width="1.5em" height="1.5em" />
			Rejoindre
		</button>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;

		.home-header {
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
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			width: 40vw;
			height: 50vh;
			margin-top: 3vw;
			padding: 3vw;
			background-color: #094d92;
			border-radius: 40px;

			.list-buttons {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 28vw;

				button {
					background-color: transparent;
					display: flex;
					flex-direction: row;
					justify-content: center;
					padding-top: 1vw;
					font-size: 1.3vw;
					color: white;
					border-radius: 1vw;
				}

				button:hover{
					border: 3px solid white;
				}

				.selected {
					border: 3px solid white;
					background-color: #755B86;
				}
			}

			.list-modes {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 28vw;

				button {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center	;
					background: #8B85C1;
					width: 12vw;
					height: 12vw;
					border-radius: 2vw;
					color: white;
					font-size: 1.3vw;
					transition: .2s all ease-in-out;

					img {
						margin-bottom: 2vw;
					}

				}

				button:hover {
					background: #755B86;
				}

				button.selected {
					background: #755B86;
					border: 3px solid white;
				}
			}
		}

		button.start {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 220px;
				font-size: 1vw;
			svg {
				margin-right: 10px;
			}
		}
	}
</style>
