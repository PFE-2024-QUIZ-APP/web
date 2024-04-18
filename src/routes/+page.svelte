<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.svg';
	import { game } from '$lib/stores/game';

	let userName: string = '';
	let room: string = '';
	let canDisplayRoom: boolean = false;

	const handleJoinRoom = () => {
		game.set({ userName, room });
		goto('/game');
	};

	const handleCreateRoom = () => {
		game.set({ userName, room: '9999' });
		goto('/game');
	};
</script>

<header>
	<img alt="Friizz" src={logo} />
	<h2>Le jeu de quiz à potentiel infini</h2>
</header>
<main>
	<section class="rules"></section>
	<section class="game">
		<div class="customization">
			<div class="avatar"></div>
			<div class="pseudo">
				<h3>Choisis un avatar et ton pseudo</h3>
				<input type="text" bind:value={userName} placeholder="Pseudo" />
			</div>
		</div>
		<div class="actions">
			{#if canDisplayRoom}
				<div class="join">
					<h4>Code du salon</h4>
					<input type="text" bind:value={room} placeholder="Code" />
				</div>
			{/if}
			<div class="buttons">
				{#if canDisplayRoom}
					<button on:click={handleJoinRoom}>Jouer</button>
				{:else}
					<button on:click={handleCreateRoom}>Créer un salon</button>
					<button on:click={() => (canDisplayRoom = true)}>Rejoindre</button>
				{/if}
			</div>
		</div>
	</section>
</main>
