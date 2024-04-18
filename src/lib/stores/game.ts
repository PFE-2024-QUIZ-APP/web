import { type Writable, writable } from 'svelte/store';

export let game: Writable<{ userName: string | null, room: null | string }> = writable({
	userName: null,
	room: null,
})