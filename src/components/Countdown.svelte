<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let count: number = 5;
  export let stop: boolean = false;

  $: if (stop) {
    clearInterval(interval);
    count = 0;
  }

  const interval = setInterval(() => {
    count--;
    if (count === 0) {
      clearInterval(interval);
      dispatch("timerEnded");
    }
  }, 1000);
</script>

<div class="countdown">
  <h1>{count}</h1>
</div>

<style lang="scss">
  .countdown {
    position: relative;

    h1 {
      font-size: 3em;
      color: #fff;
      background-color: #8b85c1;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
