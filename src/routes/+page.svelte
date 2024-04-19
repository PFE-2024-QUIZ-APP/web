<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.svg';
	import avatar from '$lib/images/avatar_example.png';
	import { game } from '$lib/stores/game';
	import PlusBoxOutline from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Play from 'svelte-material-icons/Play.svelte';
	import Refresh from 'svelte-material-icons/Refresh.svelte';
	import Code from '../components/Code.svelte';

	let userName: string = '';
	let room: string = '';
	let isInviteLink: boolean = false;
	let displayCode: boolean = false;
</script>

<div class="container">
	<div class="home-header">
		<img src={logo} alt="logo" />
		<h2>Le jeu de quiz à potentiel infini</h2>
	</div>

	{#if displayCode}
		<Code />
	{:else}
		<div class="home-content">
			<div class="how-to-play-container">
				<h2 class="font-stroke">Comment jouer au jeu ?</h2>
				<div>LE SLIDER</div>
			</div>

			<div class="play-container">
				<div class="play-container-top">
					<div class="user-avatar">
						<div class="avatar-container">
							<img src={avatar} alt="avatar utilisateur" class="avatar-image" />
							<button>
								<Refresh width="2em" height="2em" />
							</button>
						</div>
					</div>
					<div class="username">
						<h2>Choisis un avatar et ton pseudo</h2>
						<form>
							<input type="text" class="input" />
						</form>
						{#if !isInviteLink}
							<button class="purple" on:click={() => (displayCode = true)}>
								<Play width="1.5em" height="1.5em" />
								Rejoindre
							</button>
						{/if}
					</div>
				</div>
				{#if isInviteLink}
					<div class="play-methods">
						<button class="white">
							<PlusBoxOutline width="1.5em" height="1.5em" />
							Créer un salon
						</button>
						<button class="purple">
							<Play width="1.5em" height="1.5em" />
							Rejoindre
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}

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
		.home-content {
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
			height: 45vh;
			margin-top: 5vh;
			.how-to-play-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 30%;
				padding: 20px;
				border: 4px solid #094e92a1;
				border-radius: 40px;
				h2 {
					font-size: 1.4vw;
					color: white;
					text-align: center;
				}
			}
			.play-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 40%;
				padding: 60px 75px;
				background-color: #094d92;
				border: 4px solid #094e92a1;
				border-radius: 40px;
				margin-left: 20px;
				.play-container-top {
					display: flex;
					flex-direction: row;
					.user-avatar {
						display: flex;
						flex-direction: column;
						.avatar-container {
							position: relative;
							img {
								width: 140px;
								height: 140px;
								border: 4px solid white;
								border-radius: 300px;
							}
							button {
								display: flex;
								justify-content: center;
								align-items: center;
								position: absolute;
								bottom: 10px;
								right: 10px;
								width: 40px;
								height: 40px;
								background: white;
								border: none;
								border-radius: 50px;
								text-align: center;
								color: #8b85c1;
							}
						}
					}
					.username {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-left: 50px;
						h2 {
							font-size: 1.4vw;
							text-align: center;
						}
						form > input {
							margin-top: 10px;
							padding: 10px;
							font-size: 1.4vw;
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
				}
				.play-methods {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					width: 470px;
					margin-top: 60px;
					button {
						display: flex;
						flex-direction: row;
						justify-content: center;
						width: 220px;
						font-size: 1vw;
						svg {
							margin-right: 10px;
						}
					}
				}
			}
		}
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
