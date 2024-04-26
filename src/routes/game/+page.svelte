<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { gameCreation } from '$lib/stores/gameCreation';
	import { game } from '$lib/stores/game';
	import { onConnect, onRoomData, onNextQuestion } from '$lib/socket/listeners';
	import {
		createRoomEmit,
		joinRoomEmit,
		editRoomEmit,
		nextQuestionEmit
	} from '$lib/socket/emitters';
	import Player from '../../components/Player.svelte';
	import { goto } from '$app/navigation';
	import Button from '../../components/Button.svelte';

	const { userName, room, avatar, isCreation }: GameCreationModel = get(gameCreation);

	onMount(() => {
		onConnect(() => {
			if (userName && avatar) {
				if (isCreation) {
					createRoomEmit({ userName, avatar });
				} else if (room) {
					joinRoomEmit({ userName, avatar, room }, (data: JoinRoomCallBackInput) => {
						if (data.status === 'error') {
							console.error('failed to join room');
							goto('/');
						}
					});
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
		console.log(data);

		game.set({
			players: data.players,
			room: data.roomId
		});
	});

	onNextQuestion((data) => {
		console.log(data);
	});

	const handleSelectQuestion = () => {
		editRoomEmit({ uidQuizz: '7aLNfxnIVzkjxIWcqaWq' });
	};

	const handleNextQuestion = () => {
		console.log('next question');
		nextQuestionEmit();
	};
</script>

<Player />

<Button color="purple" icon="play" title="Select question" on:click={handleSelectQuestion} />

<Button color="purple" icon="play" title="Suivant" on:click={handleNextQuestion} />
