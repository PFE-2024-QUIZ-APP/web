<script>
  import "./styles.css";
  import { Howler, Howl } from "howler";
  import VolumeSource from "svelte-material-icons/VolumeSource.svelte";
  import VolumeMute from "svelte-material-icons/VolumeMute.svelte";
  import Play from "svelte-material-icons/Play.svelte";
  import Pause from "svelte-material-icons/Pause.svelte";
  import BackgroundMusic from "$lib/audio/background_music.mp3";
  import Favicon from "$lib/images/favicon.ico";

  let isMuted = false;
  let isPlay = false;

  // Variable pour gérer le volume
  let defaultVolume = 0.2;
  let minVolume = 0;
  let maxVolume = 100;
  let currentVolume = 20;
  let previousVolume = currentVolume;

  // Cast de la musique
  const sound = new Howl({
    src: BackgroundMusic,
    autoplay: false, // autoplay désactivé pour respecter les politiques des navigateurs
    loop: true,
    html5: true,
  });

  // Volume par default de la musique
  Howler.volume(defaultVolume);

  // Fonction pour lancer la musique
  function toggleMusic() {
    isPlay = !isPlay;
    if (isPlay) {
      sound.play();
    } else {
      sound.pause();
    }
  }

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
  // @ts-ignore
  function handleChange(event) {
    currentVolume = parseInt(event.target.value);
    let convertVolume = currentVolume / 100;
    Howler.volume(convertVolume);
    if (currentVolume == 0) {
      isMuted = true;
    } else {
      isMuted = false;
    }
  }
</script>

<svelte:head>
  <title>Friizzz - Le quiz à potentiel infinie</title>
  <link rel="icon" href={Favicon} />
</svelte:head>

<div class="app">
  <slot />

  <div class="volume-controls">
    <input
      type="range"
      min={minVolume}
      max={maxVolume}
      value={currentVolume}
      on:input={handleChange}
    />
    <div class="play-button">
      <button on:click={toggleMusic}>
        {#if isPlay}
          <Pause width="2em" height="2em" color="white" />
        {:else}
          <Play width="2.5em" height="2.5em" color="white" />
        {/if}
      </button>
    </div>
    <div class="mute-button">
      <button on:click={toggleMute}>
        {#if isMuted}
          <VolumeMute width="2em" height="2em" color="white" />
        {:else}
          <VolumeSource width="2em" height="2em" color="white" />
        {/if}
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .app {
    min-width: 1040px;
    max-width: 1040px;
    min-height: 832px;
    max-height: 832px;
    margin: auto;

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

      .mute-button,
      .play-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 100px;

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }

      .play-button {
        margin-right: 1em;
      }
    }
  }
</style>
