<script lang="ts">
  import { onMount } from "svelte";
  import { gameCreation } from "$lib/stores/gameCreation";
  import { get } from "svelte/store";
  import { game } from "$lib/stores/game";
  import {
    onConnect,
    onRoomData,
    onSocketId,
    onEditRoom,
    onNextQuestion,
    onEndGame,
  } from "$lib/socket/listeners";
  import {
    createRoomEmit,
    joinRoomEmit,
    nextQuestionEmit,
    restartGameEmit,
  } from "$lib/socket/emitters";
  import { goto } from "$app/navigation";
  import Logo from "$lib/images/logo.svg";
  import Button from "$components/Button.svelte";
  import PlayersList from "$components/PlayersList.svelte";
  import Configuration from "$components/Configuration.svelte";
  import Countdown from "$components/Countdown.svelte";
  import Questions from "$components/Questions.svelte";
  import Leaderboard from "$components/Leaderboard.svelte";

  const { userName, room, avatar, isCreation } = get(gameCreation);
  let startingTimer: boolean = false;
  let gameStarted: boolean = false;
  let gameEnded: boolean = false;
  let questionInfo: QuestionInfo;
  let questionIndex: number;
  let players: Player[] = [];

  onMount(() => {
    onConnect(() => {
      if (userName && avatar) {
        if (isCreation) {
          createRoomEmit({ userName, avatar });
        } else if (room) {
          console.log("room", room);
          joinRoomEmit({ userName, avatar, room });
        } else {
          console.error("room is required");
        }
      } else {
        console.error("userName and avatar are required");
        goto("/");
      }
    });
  });

  onRoomData((data) => {
    // If no questions, the game has restarted
    if (!data.questions?.length && gameEnded) {
      /** FIXME */
      gameEnded = false;
      gameStarted = false;
      startingTimer = false;
      questionIndex = 0;
    }

    game.update((state) => {
      return {
        ...state,
        ...data,
        room: data.roomId,
        host: data.players[0]?.id === state.me,
      };
    });
  });

  onSocketId((socketId) => {
    game.update((state) => {
      return {
        ...state,
        me: socketId,
        host: state.players[0]?.id === socketId,
      };
    });
  });

  onEditRoom((data) => {
    game.update((state) => {
      return {
        ...state,
        selectedThemeId: data.uidQuizz,
      };
    });
  });

  onNextQuestion((data) => {
    startingTimer = true;
    gameStarted = false;

    questionInfo = data.question;
    questionIndex = data.currentQuestion;
  });

  onEndGame((data) => {
    gameEnded = true;
    gameStarted = false;
    startingTimer = false;
    questionIndex = 0;
    players = data.players;
  });

  const handleGoHome = () => {
    game.set({
      players: [],
      room: "",
      questions: [],
      me: "",
      host: false,
      selectedThemeId: "",
    });

    gameCreation.update((state) => ({
      ...state,
      isCreation: false,
      room: "",
    }));

    goto("/");
  };

  const handeStartTimerEnded = () => {
    startingTimer = false;
    gameStarted = true;
  };

  const handleStartGame = () => {
    nextQuestionEmit();
  };

  const handleReplay = () => {
    restartGameEmit();
  };
</script>

{#if !gameEnded}
  <header>
    <img src={Logo} alt="logo" />
    {#if !gameStarted && !startingTimer}<Button
        on:click={handleGoHome}
        color="white"
        icon="close">Quitter</Button
      >{/if}
  </header>
{/if}

{#if startingTimer && !gameStarted}
  <div class="counter">
    <Countdown count={3} on:timerEnded={handeStartTimerEnded} />
  </div>
{:else if gameEnded}
  <Leaderboard {players} on:goHome={handleGoHome} on:replay={handleReplay} />
{:else}
  <main>
    <div class="left">
      {#if questionIndex !== undefined && gameStarted}<h2>
          Manche {questionIndex + 1}/10
        </h2>{/if}
      <PlayersList />
    </div>
    {#if !startingTimer && gameStarted}
      <Questions question={questionInfo} index={questionIndex} />
    {:else}
      <Configuration on:startGame={handleStartGame} />
    {/if}
  </main>
{/if}

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }

  main {
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 65px;

    .left {
      position: relative;

      h2 {
        font-size: 32px;
        position: absolute;
        top: 30px;
        width: 100%;
        text-align: center;
      }
    }
  }

  .counter {
    display: flex;
    width: 100%;
    height: calc(832px - 127px);
    margin: auto 0;
    align-items: center;
    justify-content: center;
    margin-top: calc(127px / 2 * -1);
  }
</style>
