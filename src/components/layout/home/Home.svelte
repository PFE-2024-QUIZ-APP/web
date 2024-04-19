<script lang="ts">
	import avatar from '$lib/images/avatar_example.png';
	import Refresh from 'svelte-material-icons/Refresh.svelte';
	import Button from '../../Button.svelte';
	import InputText from '../../InputText.svelte';

	let isInvitedWithLink: boolean = false;
</script>

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
					<InputText />
				</form>
				{#if isInvitedWithLink}
					<Button color="purple" icon="play" title="Rejoindre" />
				{/if}
			</div>
		</div>
		{#if !isInvitedWithLink}
			<div class="play-methods">
				<Button color="white" icon="plus" title="Créer un salon" on:click={() => alert('sqsdsq')} />
				<Button color="purple" icon="play" title="Rejoindre" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.home-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 55vh;
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
</style>
