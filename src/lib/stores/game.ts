import { type Writable, writable } from 'svelte/store';

export let game: Writable<GameModel> = writable({
	players: [],
	room: "",
});
