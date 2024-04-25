<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { gameCreation } from '$lib/stores/gameCreation';
	import { game } from '$lib/stores/game';
	import { onConnect, onRoomData } from '$lib/socket/listeners';
	import { createRoomEmit, joinRoomEmit } from '$lib/socket/emitters';
	import Player from '../../components/Player.svelte';
	import Countdown from '../../components/Countdown.svelte';
	import { goto } from '$app/navigation';

	const { userName, room, avatar, isCreation }: GameCreationModel = get(gameCreation);

	onMount(() => {
		onConnect(() => {
			if (userName && avatar) {
				if (isCreation) {
					createRoomEmit({ userName, avatar });
				} else if (room) {
					joinRoomEmit({ userName, avatar, room });
				} else {
					console.error('room is required');
				}
			} else {
				console.error('userName and avatar are required');
				goto('/');
			}
		});
	});

	onRoomData((data) => {
		game.set({ ...data, room: data.roomId });
	});
</script>

<Player />
