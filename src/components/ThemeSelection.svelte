<script lang="ts">
  import cinema from "$lib/images/theme/cinema.png";
  import { getThemes } from "$database/config";
  import { editRoomEmit } from "$lib/socket/emitters";

  export let host: boolean = false;
  export let selectedThemeId: string = "";

  interface Theme {
    id: string;
    name: string;
  }

  let themes: Theme[] = []; // Initialize empty array to hold themes

  const fetchData = async () => {
    // Function to fetch themes
    try {
      await getThemes().then((response) => (themes = response as Theme[]));
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  fetchData();

  const handleSelectTheme = (themeId: string) => {
    if (host) {
      editRoomEmit(themeId);
      selectedThemeId = themeId;
    }
  };
</script>

<div class="grid-container" class:host>
  {#each themes as theme, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      role="button"
      tabindex={index}
      class="grid-item"
      id={theme.id}
      class:selectedTheme={selectedThemeId === theme.id}
      on:click={() => handleSelectTheme(theme.id)}
    >
      <!-- à modifier une fois les images en db -->
      <img src={cinema} alt="cinéma" />
      <p>{theme.name}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 115px); // 4 colonnes égales
    grid-template-rows: min-content;
    gap: 10px;
    height: min-content;
    width: min-content;
    overflow-y: scroll;
    overflow-x: auto;
    padding: 5px;
    opacity: 0.7;

    &::-webkit-scrollbar-track {
      border-radius: 20px;
    }
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #84a6c8;
    }

    &.host {
      opacity: 1;

      .grid-item {
        transition: 0.2s all ease-in-out;

        &:hover {
          background-color: #755b86;
          color: white;
          transform: rotate(5deg);
        }
      }
    }

    .grid-item {
      background-color: white;
      padding: 6px;
      width: calc(115px - 8px - 12px);
      height: calc(93px - 8px - 12px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 4px solid white;
      border-radius: 10px;
      color: #8b85c1;
      cursor: pointer;

      &.selectedTheme {
        background-color: #755b86;
        color: white;
        transform: rotate(5deg);
      }

      img {
        width: 51px;
        height: 51px;
      }

      p {
        margin-top: 5px;
        font-size: 14px;
        user-select: none;
      }
    }
  }
</style>
