<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { gameCreation } from '$lib/stores/gameCreation';
	import { onConnect } from '$lib/socket/listeners';
	import Player from '../../components/Player.svelte';
	import Countdown from '../../components/Countdown.svelte';

	const { userName, room, avatar, isCreation }: GameCreationModel = get(gameCreation);

	onMount(() => {
		onConnect(() => {
			console.log('connected');
		});
	});
</script>

<Player />