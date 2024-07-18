<script lang="ts">
  import Button from "$components/Button.svelte";
  import Refresh from "svelte-material-icons/Refresh.svelte";
  import InputText from "$components/InputText.svelte";
  import { gameCreation } from "$lib/stores/gameCreation";
  import { get } from "svelte/store";
  import { goto } from "$app/navigation";
  import { createEventDispatcher } from "svelte";
  import { getAvatar } from "$models/avatars-map";

  const dispatch = createEventDispatcher();

  let joiningRoom: boolean = false;

  let pseudo: string = "";

  const { userName } = get(gameCreation);

  if (userName) {
    pseudo = userName;
  }

  $: canPressButtons = pseudo !== "";

  $: gameCreation.update((state) => ({
    ...state,
    userName: pseudo,
    avatar: currentAvatarIndex + 1,
  }));

  const goToGamePage = () => {
    gameCreation.update((state) => ({
      ...state,
      isCreation: true,
    }));

    goto("/game");
  };

  const goToCodePage = () => {
    dispatch("goToCodePage");
  };

  let currentAvatarIndex = 0;

  const refreshAvatar = () => {
    if (currentAvatarIndex < 7) {
      currentAvatarIndex++;
    } else {
      currentAvatarIndex = 0;
    }
  };
</script>

<section>
  <div class="container">
    <h1>
      {#if joiningRoom}Vous avez été invité à rejoindre un salon{/if}&nbsp;
    </h1>
    <div class="play-container-top">
      <div class="user-avatar">
        <div class="avatar-container">
          <img
            src={getAvatar(currentAvatarIndex + 1)}
            alt="avatar utilisateur"
            class="avatar-image"
          />
          <button on:click={refreshAvatar}>
            <Refresh width="2em" height="2em" />
          </button>
        </div>
      </div>
      <div class="username">
        <h2>Choisis un avatar et ton pseudo</h2>
        <InputText bind:text={pseudo} />
      </div>
    </div>
    <div class="buttons">
      <Button
        disabled={!canPressButtons}
        icon="plus"
        color="white"
        on:click={goToGamePage}>Créer un salon</Button
      >
      <Button
        disabled={!canPressButtons}
        icon="play"
        color="purple"
        on:click={goToCodePage}>Rejoindre</Button
      >
    </div>
  </div>
</section>

<style lang="scss">
  section {
    width: 570px;
    height: 411px;
    background-color: #094d92;
    border-radius: 40px;
    text-align: center;

    .container {
      width: 430px;
      margin: 0 auto;
      margin-top: 35px;

      h1 {
        margin-bottom: 30px;
      }

      .play-container-top {
        display: grid;
        grid-template-columns: 150px 1fr;
        margin-bottom: 65px;
        gap: 50px;

        .user-avatar {
          .avatar-container {
            position: relative;

            img {
              width: 140px;
              height: 140px;
              border: 4px solid white;
              border-radius: 300px;
            }

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              bottom: 10px;
              right: 10px;
              width: 40px;
              height: 40px;
              background: white;
              border: none;
              border-radius: 50px;
              text-align: center;
              color: #8b85c1;
              cursor: pointer;
            }
          }
        }

        .username {
          padding: 25px 0 11px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          h2 {
            font-size: 20px;
            text-align: center;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
