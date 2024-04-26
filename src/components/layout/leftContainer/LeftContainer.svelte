<script lang="ts">
	import avatar from '$lib/images/avatar_example.png';
	import Button from '../../Button.svelte';
	import InputText from '../../InputText.svelte';
	let isInvitedWithLink: boolean = false;
	import logo from '$lib/images/logo.svg';
</script>

<div class="left-container">
	<img src={logo} alt="logo" />
	<h2>Manche : 1 / 10</h2>
	<div class="players-list">
		<h2>Joueurs: 12</h2>
		<ul>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
			<li>Element</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.left-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 30%;
		padding: 20px;
		margin-top: -30vw;
		position: relative;
		img {
			margin-bottom: 1.7vw;
			width: 15vw;
		}
		h2 {
			font-size: 1.7vw;
			color: white;
			text-align: center;
		}
		.players-list {
			width: 75%;
			background-color: #255b9d;
			border-radius: 10px;
			margin-top: 30vw;
			position: absolute;

			h2 {
				margin-top: 20px;
			}

			ul {
				margin-top: 1vw;
				background-color: #094d92;
				border-radius: 10px;
			}
		}
	}
</style>
