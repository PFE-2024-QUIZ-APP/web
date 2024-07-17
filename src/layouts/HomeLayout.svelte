<script lang="ts">
  import Logo from "$lib/images/logo.svg";
  import HelpSlider from "$components/HelpSlider.svelte";
  import Lobby from "$components/Lobby.svelte";
  import Code from "$components/Code.svelte";
  import { goto } from "$app/navigation";

  let displayCodePage: boolean = false;

  const goToCodePage = () => {
    displayCodePage = true;
  };

  const goToMainPage = () => {
    displayCodePage = false;
  };

  const join = () => {
    goto("/game");
  };
</script>

<header>
  <img src={Logo} alt="logo" />
  <h1>Le jeu de quiz à potentiel infini</h1>
</header>

<main>
  {#if displayCodePage}
    <Code on:goToMainPage={goToMainPage} on:join={join} />
  {:else}
    <HelpSlider />
    <Lobby on:goToCodePage={goToCodePage} />
  {/if}
</main>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 25px;

    h1 {
      font-size: 20px;
    }
  }

  main {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 37px;
    max-height: 411px;
    min-height: 411px;
    margin-top: 75px;
  }
</style>
