<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { gameCreation } from '$lib/stores/gameCreation';
	import { onConnect } from '$lib/socket/listeners';

	const { userName, room, avatar, isCreation }: GameCreationModel = get(gameCreation);

	onMount(() => {
		onConnect(() => {
			console.log('connected');
		});
	});
</script>
