import { type Writable, writable } from 'svelte/store';

export let game: Writable<GameModel> = writable({
	players: [],
	room: "",
	questions: [],
	me: "",
	host: false,
	selectedThemeId: ""
});
