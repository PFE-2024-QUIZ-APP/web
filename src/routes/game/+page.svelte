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

	// Main layouts
	import LeftContainer from '../../components/layout/leftContainer/LeftContainer.svelte';
	import ModeContainer from '../../components/layout/modeContainer/ModeContainer.svelte';
	import Code from '../../components/layout/code/Code.svelte';
	import Header from '../../components/layout/header/Header.svelte';
	import Footer from '../../components/layout/footer/Footer.svelte';

	let isDisplayHomePage: boolean = true;

	let isDisplayLeftContainer: boolean = true;
	let isDisplayRightModeContainer: boolean = true;
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
