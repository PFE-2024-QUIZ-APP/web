<script lang="ts">
  import { goto } from "$app/navigation";
  import { gameCreation } from "$lib/stores/gameCreation";
  import { get } from "svelte/store";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Close from "svelte-material-icons/Close.svelte";

  const dispatch = createEventDispatcher();

  const roomCode = get(gameCreation).room;

  let code = ["", "", "", "", ""];

  $: canJoin = code.every((char) => char !== "");

  $: isEmpty = code.some((char) => char !== "");

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

  function handlePaste(event: any) {
    event.preventDefault();
    const pastedText = (event.clipboardData.getData('text').toUpperCase()).substring(0,5);
    const pastedTextSplitted = pastedText.split('');

    let indexCode = 0;

    for (let i = 0; i < code.length; i++) {
      if (code[i] === "" && indexCode < pastedTextSplitted.length) {
        // Remplir l'élément vide avec un élément de code2
        code[i] = pastedTextSplitted[indexCode];
        indexCode++;
      }
    }
  }

  function clearCode() {
    code = new Array(5).fill("");
  }

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
        on:paste={(e) => handlePaste(e)}
        maxlength="1"
      />
    {/each}
    {#if isEmpty}
    <div class="clear-code">
      <button on:click={clearCode}>
        <Close width="3em" height="3em" color="white" />
      </button>
    </div>
    {/if}
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
      position: relative;
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

      .clear-code {
        position: absolute;
        right: -5em;
        bottom: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 100px;

        button {
          margin-top: 3px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
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
