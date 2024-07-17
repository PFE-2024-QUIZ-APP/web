<script lang="ts">
  import { goto } from "$app/navigation";
  import { gameCreation } from "$lib/stores/gameCreation";
  import { get } from "svelte/store";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const roomCode = get(gameCreation).room;

  let code = ["", "", "", "", ""];

  $: canJoin = code.every((char) => char !== "");

  if (roomCode?.length === 5) {
    code = roomCode.split("");
  }

  const updateCode = (event: any, index: number) => {
    const input = event.target.value;
    code[index] = input[input.length - 1] || ""; // Remplace le caractère vide si aucun caractère n'est saisi

    if (event.inputType === "deleteContentBackward" && !input && index > 0) {
      event.target.previousElementSibling?.focus();
    } else if (input.length > 0 && index < 4) {
      event.target.nextElementSibling?.focus();
    }
  };

  const join = () => {
    console.log("code", code);

    gameCreation.update((state) => ({
      ...state,
      room: code.join("").toUpperCase(),
    }));

    dispatch("join");
  };

  const back = () => {
    dispatch("goToMainPage");
  };
</script>

<div class="content">
  <h2>Code de la partie</h2>

  <div class="code-input">
    {#each code as char, index}
      <input
        type="text"
        value={char}
        on:input={(e) => updateCode(e, index)}
        maxlength="1"
      />
    {/each}
  </div>

  <Button disabled={!canJoin} color="purple" icon="play" on:click={join}
    >Rejoindre</Button
  >
</div>
<div class="backButton">
  <Button color="white" icon="close" on:click={back}>Retour</Button>
</div>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    h2 {
      font-size: 35px;
      margin-bottom: 60px;
    }

    .code-input {
      margin-bottom: 50px;

      input {
        background: none;
        border: none;
        border-bottom: 2px solid white;
        width: 5vw;
        height: 5vw;
        font-size: 5vw;
        text-align: center;
        margin: 0 20px 2px;
        text-transform: uppercase;
        font-family: LuckiestGuy;
        outline: none;
        color: white;
      }

      input:focus {
        margin: 0 20px 0;
        border-bottom: 4px solid white;
      }
    }
  }

  .backButton {
    position: absolute;
    right: 0;
    top: calc(
      (75px + 137px / 2 + 25px) * -1
    ); // Margin top of main + height of header / 2 for half + half of the button
  }
</style>
