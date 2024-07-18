<script lang="ts">
  import trophyBronze from "$lib/images/trophy/trophy_bronze.png";
  import trophyGold from "$lib/images/trophy/trophy_gold.png";
  import trophySilver from "$lib/images/trophy/trophy_silver.png";
  import { get } from "svelte/store";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
  import { game } from "$lib/stores/game";
  import { getAvatar } from "$models/avatars-map";

  export let players: Player[];

  $: players = players.sort((a, b) => b.score - a.score);

  const { host } = get(game);

  const dispatcher = createEventDispatcher();

  const handleRePlay = () => {
    dispatcher("replay");
  };

  const handleHome = () => {
    dispatcher("goHome");
  };
</script>

<main>
  <h1>Résultat</h1>

  <div class="joueurs">
    <div class="liste-joueurs">
      {#each players as player, index}
        <div class="row-joueur">
          <div class="rank">
            {index + 1}
            <span>.</span>
          </div>
          <div class="avatar-container">
            <img
              src={getAvatar(player.avatar)}
              alt="avatar utilisateur"
              class="avatar-image"
            />
          </div>
          <div class="infos-joueur">
            <div class="pseudo">{player.name}</div>
            <div class="points">{player.score} pts</div>
          </div>
          <div class="trophy">
            {#if index === 0}
              <img src={trophyGold} alt="trophygold" />
            {:else if index === 1}
              <img src={trophySilver} alt="trophysilver" />
            {:else if index === 2}
              <img src={trophyBronze} alt="trophysilver" />
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="play-methods">
    {#if host}
      <Button color="purple" icon="replay" on:click={handleRePlay}>
        Rejouer
      </Button>
    {/if}
    <Button color="white" icon="home" on:click={handleHome}
      >Menu Principal</Button
    >
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 80px;
      margin-bottom: 60px;
      text-align: center;
    }

    .joueurs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 691px;
      height: 421px;
      background-color: #285f9f;
      border-radius: 10px;

      .liste-joueurs {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
          width: 5px;
          height: 10px;
          background-color: #84a6c8;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #fff;
          border-radius: 10px;
        }

        .row-joueur {
          display: grid;
          grid-template-columns: 90px 40px 1fr 70px;
          flex-direction: row;
          align-items: center;
          justify-content: left;
          width: 100%;
          height: 50px;
          background-color: #094d92;
          margin-bottom: 3px;

          &:first-child {
            margin-top: 0;
            border-radius: 10px 10px 0 0;
          }

          &:last-child {
            margin-bottom: 0;
            border-radius: 0 0 10px 10px;
          }

          .rank {
            color: #fff;
            font-size: 20px;
            margin-right: 25px;
            margin-left: 32px;
          }

          .avatar-container {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #fff;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .infos-joueur {
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            margin-left: 25px;
            font-size: 14px;
          }

          .trophy {
            margin-left: auto;
            margin-right: 30px;
          }
        }
      }
    }

    .play-methods {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 70px;
      width: 470px;
      margin-top: 50px;
    }
  }
</style>
