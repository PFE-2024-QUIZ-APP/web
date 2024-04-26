<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { gameCreation } from '$lib/stores/gameCreation';
	import { game } from '$lib/stores/game';
	import { onConnect, onRoomData } from '$lib/socket/listeners';
	import { createRoomEmit, joinRoomEmit } from '$lib/socket/emitters';
	import { goto } from '$app/navigation';
	import Leaderboard from '../../components/Leaderboard.svelte';
	import QuestionBlock from '../../components/layout/questionBlock/QuestionBlock.svelte';

	// Main layouts
	import LeftContainer from '../../components/layout/leftContainer/LeftContainer.svelte';
	import ModeContainer from '../../components/layout/modeContainer/ModeContainer.svelte';

  const { userName, room, avatar, isCreation }: GameCreationModel = get(gameCreation);
  
	let isDisplayHomePage: boolean = true;
	let isDisplayLeftContainer: boolean = true;
	let isDisplayRightModeContainer: boolean = true;
  
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

<div class="container">
	<div class="home-content">
		{#if isDisplayLeftContainer}
			<LeftContainer />
		{/if}
		{#if isDisplayRightModeContainer}
			<ModeContainer />
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 77vw;
		margin: 8vw auto 0 auto;

		.home-content {
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100%;
			height: 55vh;
			margin-top: 5vh;
		}
	}
</style>