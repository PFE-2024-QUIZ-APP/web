<script>
  import HomeLayout from "$layouts/HomeLayout.svelte";
import { gameCreation } from "$lib/stores/gameCreation";

  export let data;

  $: gameCreation.update((state) => ({
    ...state,
    room: data.code,
  }));
</script>

<HomeLayout />


