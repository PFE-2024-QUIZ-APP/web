<script lang="ts">
	import { game } from '$lib/stores/game';
	import { io } from '$lib/webSocketConnection';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	const { userName, room } = get(game);

	onMount(() => {
		io.on('connect', () => {
			io.emit('join', room, userName, 'avatar_1');

			io.on('roomData', (data) => {
				console.log(data);
			});
		});
		io.on('disconnect', () => {
			console.log('disconnected');
		});
	});
</script>
