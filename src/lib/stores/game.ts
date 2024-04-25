import { type Writable, writable } from 'svelte/store';
import type { GameModel } from '../../models/game-model';

export let game: Writable<GameModel> = writable({
	players: [],
	room: "",
	questions: []
});
