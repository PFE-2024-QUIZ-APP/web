<script>
  import { io } from "$lib/webSocketConnection.js";
  import { onMount } from "svelte";

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
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
