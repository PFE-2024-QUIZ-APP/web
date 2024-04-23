<script lang="ts">
	// Import icons
	import Play from 'svelte-material-icons/Play.svelte';
	import PlusBoxOutline from 'svelte-material-icons/PlusBoxOutline.svelte';
	import Close from 'svelte-material-icons/CloseBoxOutline.svelte';
	import { goto } from '$app/navigation';

	// Props
	export let color: string; // Available classes : purple and white, from parent style.css
	export let icon: string;
	export let title: string;
</script>

<button class={color}>
	{#if icon == 'play'}
		<Play width="1.5em" height="1.5em" />
	{/if}

	{#if icon == 'plus'}
		<PlusBoxOutline width="1.5em" height="1.5em" />
	{/if}

	{#if icon == 'close'}
		<Close width="1.5em" height="1.5em" />
	{/if}
	{title}
</button>

<style lang="scss">
	button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
		width: 220px;
		font-size: 1vw;
		svg {
			margin-right: 10px;
		}
	}
</style>
