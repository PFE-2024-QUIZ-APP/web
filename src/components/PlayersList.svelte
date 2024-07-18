<script lang="ts">
  import { receive } from "$lib/animation/playerTransition";
  import crown from "$lib/images/crown.png";
  import { game } from "$lib/stores/game";
  import { getAvatar } from "$models/avatars-map";
  import { flip } from "svelte/animate";

  let players: Player[] = [];

  game.subscribe((data: GameModel) => {
    players = data.players;
  });
</script>

<div class="joueurs">
  <div class="nb-joueurs">
    Joueurs : {players.length}
  </div>
  <!-- Row Joueur that contain an imported avatar, a pseudo with a number of points and a crown -->
  <div class="liste-joueurs">
    {#each players as player, index (player.id)}
      <div class="row-joueur" in:receive={{ key: player.id}}>
        <div class="user-avatar">
          <div class="avatar-container">
            <img
              src={getAvatar(player.avatar)}
              alt="avatar utilisateur"
              class="avatar-image"
            />
          </div>
        </div>
        <div class="infos-joueur">
          <div class="pseudo">{player.name}</div>
          <div class="points">{player.score} pts</div>
        </div>
        {#if index === 0}
          <div class="crown">
            <img src={crown} alt="crown" />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  /* joueurs */
  .joueurs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 476px;
    background-color: #285f9f;
    border-radius: 10px;
    margin-top: 95px;
  }

  /* nb-joueurs */
  .nb-joueurs {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    font-size: 20px;
    width: 100%;
    color: #fff;
  }

  .liste-joueurs {
    height: 421px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #84a6c8;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 10px;
    }
  }

  /* row-joueur  */
  .row-joueur {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: calc(100% - 20px);
    padding: 10px;
    background-color: #094d92;
    margin-bottom: 3px;
    border-radius: 8px;
    /* border-bottom: #285f9f solid 3px; */
  }

  .row-joueur:first-child {
    margin-top: 0;
  }
  .row-joueur:last-child {
    margin-bottom: 0;
  }

  .infos-joueur {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-left: 20px;
  }

  .liste-joueurs .liste-joueurs .crown {
    margin-left: auto;
  }

  .avatar-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
  }
  .row-joueur-vide .avatar-container {
    border: 1px solid #84a6c8;
  }
  .row-joueur-vide .infos-joueur {
    color: #84a6c8;
  }

  .avatar-container img {
    width: 100%;
    height: 100%;
  }
  .points {
    font-size: 1em;
    color: #fff;
  }
  .crown {
    display: flex;
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-right: 16px;
  }
</style>
