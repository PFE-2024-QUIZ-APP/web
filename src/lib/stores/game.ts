import { type Writable, writable } from 'svelte/store';

export let game: Writable<{ pseudo: string | null, room: null | string }> = writable({
	pseudo: null,
	room: null,
})