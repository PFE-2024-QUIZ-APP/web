<script lang="ts">
	import Edit from 'svelte-material-icons/PencilOutline.svelte';
	import Settings from 'svelte-material-icons/Tools.svelte';
	import Button from '../../Button.svelte';
	let isInvitedWithLink: boolean = false;
	import { fade } from 'svelte/transition';
	import GridContainer from '../gridContainer/GridContainer.svelte';
	import ChooseModeContainer from '../chooseModeContainer/ChooseModeContainer.svelte';

	let showCopyLink = false;
	let copyLinkTransition = false;
	let isDisplayChooseMode = true;
	let isDisplayChooseTheme = false;
	let isDisplayWaitForHost = false;

	// To do
	let isDisplayQuizGame = false;

	function copyLink() {
		// Code pour copier le lien
		// Pour l'instant, nous affichons simplement le message "Lien copié"
		showCopyLink = true;
		copyLinkTransition = true;
		setTimeout(() => {
			showCopyLink = false;
			copyLinkTransition = false;
		}, 3000);
	}
</script>

<div class="mode-container">
	<div class="content">
		<div class="header">
			<h2>Salon 1BKPK</h2>
			<h3>
				{#if isDisplayChooseTheme}
					Selectionne un theme
				{:else}
					Selectionne un mode
				{/if}
			</h3>
		</div>
		{#if isDisplayChooseTheme}
			<GridContainer />
		{/if}
		{#if isDisplayChooseTheme}
			<div class="actions-button">
				<div class="copy-link">
					<!-- Ca marche pas, a corriger -->
					<Button color="white" icon="plus" title="Inviter" on:click={copyLink} />
					{#if showCopyLink}
						<span transition:fade={{ duration: 500 }}>
							{#if copyLinkTransition}
								Lien copié
							{/if}
						</span>
					{/if}
				</div>

				<Button color="purple" icon="play" title="Lancer" />
			</div>
		{/if}
		{#if isDisplayChooseMode}
			<ChooseModeContainer />
		{/if}
	</div>

	<!-- Boutons latéraux droite -->
	<div class="parameters">
		<div class="edit">
			<Edit width="1.3em" height="1.3em" />
		</div>
		<!-- A ajouter lorsque les différents paramètres + IA seront implémenter -->
		<!-- <div class="settings">
			<Settings width="1.3em" height="1.3em" />
		</div> -->
	</div>
</div>

<style lang="scss">
	.mode-container {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		width: 65%;
		border-radius: 40px;
		margin-top: -7vw;

		.content {
			position: relative;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: #094d92;
			width: 100%;
			height: 33vw;
			padding: 50px 75px;
			border-radius: 40px 0 40px 40px;

			.header {
				position: absolute;
				top: 3vw;
				h2 {
					font-size: 2.2vw;
				}

				h3 {
					margin: 2vw 0 1.5vw 0;
					font-size: 1.2vw;
				}
			}

			.actions-button {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.copy-link {
					position: relative;
					display: flex;
					justify-content: center;

					span {
						position: absolute;
						bottom: -2.5vw;
						font-size: 1vw;
						opacity: 0;
					}

					span.fade {
						transition: opacity 0.5s;
					}

					span.fade.done {
						opacity: 1;
					}
				}
			}
		}

		.parameters {
			display: flex;
			flex-direction: column;
			width: 3vw;

			.edit,
			.settings {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #094d92;
				height: 5vw;
				border-radius: 0 8px 8px 0;
				cursor: pointer;
			}

			.settings {
				background-color: #255b9d;
				margin-top: 5px;
			}
		}
	}
</style>
