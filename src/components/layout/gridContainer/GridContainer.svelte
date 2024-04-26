<script lang="ts">
	import cinema from '$lib/images/theme/cinema.png';

	const items = [
		{ id: 1, image: cinema, title: 'Geographie' },
		{ id: 2, image: cinema, title: 'Musique' },
		{ id: 3, image: cinema, title: 'Histoire' },
		{ id: 4, image: cinema, title: 'Sport' },
		{ id: 5, image: cinema, title: 'Animaux' },
		{ id: 6, image: cinema, title: 'Science' },
		{ id: 7, image: cinema, title: 'Cinéma' },
		{ id: 8, image: cinema, title: 'Jeux-vidéos' },
		{ id: 9, image: cinema, title: 'Ecole' },
		{ id: 10, image: cinema, title: 'Culture G' },
		{ id: 11, image: cinema, title: "Gen' 80-90" },
		{ id: 12, image: cinema, title: 'Manga' },
		{ id: 13, image: cinema, title: 'Nourriture' }
	];
</script>

<div class="grid-container">
	{#each items as item, index}
		<div class="grid-item">
			<img src={item.image} alt={'Image ' + (index + 1)} />
			<p>{item.title}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr); // 4 colonnes égales
		gap: 10px;
		margin: auto;
		max-height: 20vw;
		overflow-y: scroll;
		overflow-x: none;
		padding: 10px;

		&::-webkit-scrollbar-track {
			border-radius: 20px;
		}
		&::-webkit-scrollbar {
			width: 8px;
			border-radius: 20px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 20px;
			background-color: #84a6c8;
		}
	}

	.grid-item {
		background-color: white;
		padding: 0.5vw;
		width: 6.5vw;
		height: 5.5vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 4px solid white;
		border-radius: 10px;
		color: #8b85c1;
		cursor: pointer;
		transition: 0.2s all ease-in-out;

		img {
			width: 4vw;
			height: 4vw;
		}

		p {
			margin-top: 0.5vw;
			font-size: 1vw;
		}
	}

	.grid-item:hover {
		background-color: #755b86;
		color: white;
		transform: rotate(5deg);
	}
</style>
