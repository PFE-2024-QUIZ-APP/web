<script>
  import { io } from "$lib/webSocketConnection.js";
  import logo from '$lib/images/Friizzz-logo.png';
  import avatar from '$lib/images/avatar_example.png';
  import { onMount } from "svelte";
  import PlusBoxOutline from "svelte-material-icons/PlusBoxOutline.svelte";
  import Play from "svelte-material-icons/Play.svelte";
  import Refresh from "svelte-material-icons/Refresh.svelte"
  // import Carousel from 'svelte-carousel';
  
  onMount(() => {
    io.on("connect", () => {
      console.log("connected");
    });
    io.on("disconnect", () => {
      console.log("disconnected");
    });
  });
</script>

<svelte:head>
  <title>Invite</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
  <div class="home-header">
    <img src="{logo}" alt="logo">
    <h2>Le jeu de quiz à potentiel infini</h2>
  </div>

  <div class="home-content">
    <div class="how-to-play-container">
      <h2 class="font-stroke">Comment jouer au jeu ?</h2>
      <div>
        LE SLIDER
      </div>
    </div>

    <div class="play-container">
      <div class="play-container-top">
        <div class="user-avatar">
          <div class="avatar-container">
            <img src="{avatar}" alt="avatar utilisateur" class="avatar-image">
            <button>
              <Refresh width="2em" height="2em" />
            </button>
          </div>
        </div>
        <div class="username">
          <h2>Choisis un avatar et ton pseudo</h2>
          <form>
            <input type="text" class="input">
          </form>
          <button class="join-game purple">
            <Play width="1.5em" height="1.5em"/>
            Rejoindre
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="play-footer">
    <a class="footer-link-1" href="https://www.google.com">Conditions d'utilisation</a>
    <span>|</span>
    <a class="footer-link-2" href="https://www.google.com">Contact</a>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 12vw;
      }

      h2 {
        font-size: 1.2vw;
        color: white;
      }
    }

    .home-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 60vh;

      .how-to-play-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        padding: 20px;
        border: 4px solid #094e92a1;
        border-radius: 40px;

        h2 {
          color: white;
          text-align: center;
        }
      }

      .play-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        padding: 60px 75px;
        background-color: #094D92;
        border: 4px solid #094e92a1;
        border-radius: 40px;
        margin-left: 20px;

      .play-container-top {
        display: flex;
        flex-direction: row;

        .user-avatar {
          display: flex;
          flex-direction: column;

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
            }
          }
        }

        .username {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 50px;
          h2 {
            text-align: center;
          }
          form > input {
            margin-top: 10px;
          }
          button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 50px;
          width: 220px;

        svg {
          margin-right: 10px;
        }
        }
      }}
      }

    }

.play-footer {
  margin-top: 50px;

  .footer-link-1 {
    margin-right: 20px;
  }

  .footer-link-2 {
    margin-left: 20px;
  }
}

  }
</style>