import { writable, type Writable } from "svelte/store";


export let gameCreation: Writable<GameCreationModel> = writable({
	userName: null,
	avatar: null,
	room: null,
	isCreation: false
})