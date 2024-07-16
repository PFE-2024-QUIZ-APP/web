<script>
	import './styles.css';
	import backgroundMusic from './../lib/audio/background_music.mp3';
	import { Howl } from 'howler';
	import VolumeSource from 'svelte-material-icons/VolumeSource.svelte';
	import VolumeMute from 'svelte-material-icons/VolumeMute.svelte';

  let isMuted = false;

	// Variable pour gérer le volume
	let defaultVolume = 0.2;
	let minVolume = 0;
  let maxVolume = 100;
  let currentVolume = 20;
	let previousVolume = currentVolume;

	// Cast de la musique
	const sound = new Howl({
  	src: backgroundMusic,
		autoplay: true,
		loop: true,
		html5: true
	});

	// Volume par default de la musique
	Howler.volume(defaultVolume);

	// Cast de la musique au chargement de la page
	sound.once('load', function(){
		sound.play();
	});

	// Fonction pour mute le son
	function toggleMute() {

		if (isMuted) {
			currentVolume = previousVolume;
    } else {
			previousVolume = currentVolume;
      currentVolume = 0;
    }

    isMuted = !isMuted;
		sound.mute(isMuted);
  }

	// Fonction pour gérer le son
  function handleChange(event) {
		currentVolume = parseInt(event.target.value);
		let convertVolume = currentVolume / 100;
		Howler.volume(convertVolume);
  }

</script>

<div class="app">
	<main>
		<slot />
	</main>
	
	<div class="volume-controls">
		<input type="range" min={minVolume} max={maxVolume} value={currentVolume} on:input={handleChange} />
		<div class="mute-button">
			<button on:click={toggleMute}>
				{#if isMuted}
					<VolumeMute width="2em" height="2em" color="white"/>
				{:else}
					<VolumeSource width="2em" height="2em" color="white"/>
				{/if}
			</button>
		</div>
	</div>

</div>

<style lang='scss'>

.volume-controls {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 2em;
	right: 2em;

  input[type="range"] {
		-webkit-appearance: none;
   	appearance: none;
    width: 180px;
		margin-right: 2em;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 10px;
		height: 10px;
	}

	input[type="range"]::-moz-range-thumb {
		background-color: #094d92;
		height: 20px;
		width: 20px;
		border: 3px solid white;
		border-radius: 50px;
		cursor: pointer;
	}

  .mute-button {
    display: flex;
    align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border: 3px solid white;
		border-radius: 100px;

		button {
			background-color: transparent;
		}
  }

}

</style>

