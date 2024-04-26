<script lang="ts">
	import cinema from '$lib/images/theme/cinema.png';
	import { getThemes } from "../../../database/config";

	interface Theme {
		id: string;
		name: string;
  	}

	let themes: Theme[] = []; // Initialize empty array to hold themes
	  
  	const fetchData = async () => { // Function to fetch themes
		try {
			await getThemes().then((response ) => themes = response as Theme[]);
		} catch (error) {
			console.error('Error fetching themes:', error);
		}
  	};

  	fetchData(); 

</script>

<div class="grid-container">
	{#each themes as theme, index}
		<div class="grid-item" id="{theme.id}">
			<!-- à modifier une fois les images en db -->
			<img src="{cinema}" alt="cinéma">
			<p>{theme.name}</p>
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
