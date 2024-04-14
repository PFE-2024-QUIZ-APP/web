<script lang="ts">
	import { game } from '$lib/stores/game';
	import { get } from 'svelte/store';

	const { pseudo, room } = get(game);

	console.log(pseudo, room);
</script>