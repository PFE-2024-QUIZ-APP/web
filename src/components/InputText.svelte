<script>
  export let text = "";
</script>

<input type="text" bind:value={text} />

<style lang="scss">
  input {
    padding: 10px;
    height: 16px;
    font-size: 20px;
    width: calc(100% - 20px - 8px);
    border: 4px solid white;
    background: #84a6c8;
    border-radius: 10px;
    font-family: LuckiestGuy;
    text-transform: uppercase;
    color: white;
    outline: none;
  }
</style>
