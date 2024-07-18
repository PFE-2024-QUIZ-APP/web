<script lang="ts">
  import ThemeSelection from "$components/ThemeSelection.svelte";
  import { game } from "$lib/stores/game";
  import { get } from "svelte/store";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let gameData: GameModel = get(game);

  game.subscribe((data: GameModel) => {
    gameData = data;
  });

  let showCopyMessage = false;

  const handleCopyLink = () => {
    const roomLink = "https://friizzz.vercel.app/" + gameData.room;
    navigator.clipboard
      .writeText(roomLink)
      .then(() => {
        showCopyMessage = true;
        setTimeout(() => {
          showCopyMessage = false;
        }, 5000);
      })
      .catch((err) => {
        console.error("Could not copy room link:", err);
      });
  };

  const handleStartGame = () => {
    if(gameData.host) {
      dispatch("startGame")
    }
  }
</script>

<section class="configuration">
  <div>
    <h1>Salon {gameData.room}</h1>
    <div class="themes">
      {#if gameData.host}
        <h2>Sélectionner un thème &nbsp;</h2>
      {/if}
      <ThemeSelection
        host={gameData.host}
        selectedThemeId={gameData.selectedThemeId}
      />
    </div>
  </div>
  {#if !gameData.host}
    <p class="waiting">
      En attente de l'hôte pour configurer et démarrer la partie
    </p>
  {/if}
  <div class="buttons" class:viewer={!gameData.host}>
    <div class="copy-container">
      <Button color="white" icon="link" on:click={handleCopyLink}
        >Inviter</Button
      >
      {#if showCopyMessage}
        <p class="copy-message">Lien copié !</p>
      {/if}
    </div>
    {#if gameData.host}<Button color="purple" icon="play" on:click={handleStartGame}>Lancer</Button>{/if}
  </div>
</section>

<style lang="scss">
  .configuration {
    width: calc(580px - 74px);
    height: auto;
    border-radius: 40px;
    background-color: #094d92;
    padding: 42px 74px 18px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 32px;
      margin-bottom: 38px;
    }

    .themes {
      h2 {
        margin-bottom: 17px;
        font-size: 16px;
      }
    }

    .waiting {
      margin-top: 40px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      margin-bottom: 42px;

      &.viewer {
        justify-content: center;
      }

      .copy-container {
        position: relative;

        .copy-message {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 5px 10px;
          font-size: 13px;
        }
      }
    }
  }
</style>
