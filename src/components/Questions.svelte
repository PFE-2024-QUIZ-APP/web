<script lang="ts">
  import Button from "./Button.svelte";
  import Countdown from "./Countdown.svelte";
  import { nextQuestionEmit, responsePlayerEmit } from "$lib/socket/emitters";
  import { onAllResponse, onTimerEnded } from "$lib/socket/listeners";
  import { get } from "svelte/store";
  import { game } from "$lib/stores/game";

  const { host } = get(game);

  export let question: QuestionInfo;
  export let index: number;
  let myResponse: string = "";
  let allResponses: string[] = [];
  let timerEnded: boolean = false;

  const handleTimerEnder = () => {
    timerEnded = true;
  };

  const handleSelectResponse = (response: string) => {
    if (myResponse === "") {
      myResponse = response;
      responsePlayerEmit({ response, indexQuestion: index });
    }
  };

  const handleNextQuestion = () => {
    myResponse = "";
    timerEnded = false;
    allResponses = [];

    nextQuestionEmit();
  };

  onAllResponse((data) => {
    allResponses = data.responsesPlayers;
  });

  onTimerEnded(() => {
    timerEnded = true;
  });
</script>

<section class="game">
  <div class="timer">
    <Countdown stop={timerEnded} count={15} on:timerEnded={handleTimerEnder} />
  </div>
  <div class="card last"></div>
  <div class="card middle"></div>
  <div class="card">
    {#if question}
      <h1>{question.questionText}</h1>
      <div class="responses">
        {#each question.responses as response}
          <Button
            color={timerEnded
              ? question.rightAnswer === response
                ? "green"
                : myResponse === response
                  ? "red"
                  : "purple"
              : "purple"}
            disabledHover={timerEnded || myResponse !== ""}
            question={true}
            active={myResponse === response}
            percentage={myResponse !== "" &&
            (allResponses.filter((r) => r === response).length /
              allResponses.length) *
              100 !==
              0
              ? (allResponses.filter((r) => r === response).length /
                  allResponses.length) *
                100
              : undefined}
            on:click={() => handleSelectResponse(response)}>{response}</Button
          >
        {/each}
      </div>
    {/if}
  </div>
  {#if timerEnded}
    <div class="container">
      {#if host}
        <Button color="purple" icon="play" on:click={handleNextQuestion}
          >Suivant</Button
        >
      {:else}
        <p>En attente de l'hôte pour démarrer la prochaine question</p>
      {/if}
    </div>
  {/if}
</section>

<style lang="scss">
  .game {
    position: relative;

    .timer {
      display: flex;
      justify-content: center;
      margin-top: -50px;
      margin-bottom: 105px;
    }

    .card {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      background-color: #356ba5;
      border-radius: 40px;
      height: calc(361px - 40px * 2);
      width: calc(100% - 67px * 2);
      z-index: 1;
      padding: 40px 67px;

      &.last {
        position: absolute;
        background-color: #547cb1;
        top: 43px;
        scale: 55%;
        z-index: 0;
      }

      &.middle {
        position: absolute;
        background-color: #4170a9;
        top: 100px;
        scale: 78%;
        z-index: 0;
      }

      h1 {
        font-size: 24px;
        max-width: 550px;
        text-align: center;
        margin-bottom: 45px;
      }

      .responses {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, 273px);
        grid-template-rows: repeat(2, 60px);
      }
    }

    .container {
      margin-top: 40px;
      display: flex;
      justify-content: center;

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>
