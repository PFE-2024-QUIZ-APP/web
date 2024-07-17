<script lang="ts">
  import { spring } from "svelte/motion";
  export let items: any[]; //required
  export let current: number = 0;
  export let cache: number = 1;
  export let show: number = 2;

  //Currently displayed item
  let i = spring(0, { precision: 0.001 });

  //Drag state
  let dragging: boolean = false;
  let i_start: number | null = null;
  let drag_start: [number, number] | null = null;

  //Container width
  let width: number | null = null;

  function mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }

  //When current changes, and if not dragging, spring to it
  function calc_new(v: number, current: number): number {
    v = Math.round(v);
    let diff = mod(current - v, items.length);
    if (diff < items.length / 2) {
      return v + diff;
    } else {
      return v + diff - items.length;
    }
  }
  $: {
    if (!dragging) {
      i.stiffness = 0.2;
      i.damping = 1;
      i.update((v) => calc_new(v, current), { soft: 0.3 });
    }
  }

  //On mousedown, capture mouse
  function mousedown(e: MouseEvent | TouchEvent) {
    const event = e instanceof TouchEvent ? e.changedTouches[0] : e;
    dragging = true;
    drag_start = [event.screenX, event.screenY];
    i_start = $i;
  }

  //On mousemove, force spring to move to new position (don't use {hard:true} or stiffness=1, otherwise we lose
  //velocity that we need for it moving nicely on release)
  function mousemove(e: MouseEvent | TouchEvent) {
    const event = e instanceof TouchEvent ? e.changedTouches[0] : e;
    if (!dragging || !drag_start || i_start === null || width === null) return;
    let drag_current = [event.screenX, event.screenY];
    i.stiffness = 0.999;
    i.set(i_start + (drag_start[0] - drag_current[0]) / (width / show));
  }

  //On mouseup, set new current (rounding up or down depending on drag direction)
  function mouseup(e: MouseEvent | TouchEvent) {
    const event = e instanceof TouchEvent ? e.changedTouches[0] : e;
    if (!dragging || !drag_start || width === null) return;
    dragging = false;
    let drag_current = [event.screenX, event.screenY];
    let diff = (drag_current[0] - drag_start[0]) / (width / show);
    if (diff > 0.1) {
      current = mod(Math.floor(current - diff), items.length);
    } else if (diff < -0.1) {
      current = mod(Math.ceil(current - diff), items.length);
    }
  }

  //Item is visible if it is at least partially on-screen
  function item_visible(diff: number, show: number): boolean {
    diff = mod(diff, items.length);
    return diff < show + cache || diff > items.length - (1 + cache);
  }

  //Item position wraps around if needed
  function item_pos(diff: number): number {
    diff = mod(diff, items.length);
    if (diff > items.length / 2) {
      diff -= items.length;
    }
    return diff;
  }

  function item_style(diff: number): string {
    diff = mod(diff, items.length);
    if (diff > items.length / 2) {
      diff -= items.length;
    }

    return `transform:translateX(${100 * diff * show}%);width:${100 / show}%;`; //normal
  }
</script>

<div
  class="container"
  on:mousedown={mousedown}
  on:touchstart={mousedown}
  bind:clientWidth={width}
>
  {#each items as item, i2}
    {#if item_visible(i2 - $i, show)}
      <div
        class="item"
        style={item_style(item_pos(i2 - $i) * (1 / show))}
        role="button"
      >
        <slot {item} selected={$i == current}></slot>
      </div>
    {/if}
  {/each}
</div>

<svelte:window
  on:mousemove={mousemove}
  on:touchmove={mousemove}
  on:mouseup={mouseup}
  on:touchend={mouseup}
/>

<style>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    perspective: 500px;
  }
  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    user-select: none;
  }
  :global(.item > *) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
