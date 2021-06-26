<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { E } from '../lib/statics';
  import { MenuAction } from '../lib/menu';
  import { isMobile } from '../stores/app';

  const send = createEventDispatcher();

  $: mobile = $isMobile;
</script>

<style>
  .choice {
    transition: all 275ms ease-in-out;
  }
  .menu {
    font-size: 1.15rem;
  }
  .menu.mobile {
    color: #f0f0f0;
    font-size: 1.67rem;
  }
</style>

<div class="menu flex flex-col" class:mobile on:click={() => send(E, MenuAction)}>
  <a class="choice mx-0 my-2 px-4 py-2 hover:bg-gray-400" data-cy="dashboard-link" href="#/dashboard">Dashboard</a>
  <a class="choice mx-0 my-2 px-4 py-2 hover:bg-gray-400" data-cy="table-link" href="#/table">Table</a>
  <a class="choice mx-0 my-2 px-4 py-2 hover:bg-gray-400" data-cy="form-link" href="#/form">Form</a>
  <a class="choice mx-0 my-2 px-4 py-2 hover:bg-gray-400" data-cy="map-link" href="#/map">Map</a>
  <a class="choice mx-0 my-2 px-4 py-2 hover:bg-gray-400" data-cy="video-link" href="#/video">Video</a>
</div>
