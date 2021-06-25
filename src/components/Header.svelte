<script lang="ts">
  import MenuIcon from '../icons/Menu.svelte';
  import { E } from '../lib/statics';
  import { MenuShow } from '../lib/menu';
  import { createEventDispatcher } from 'svelte';
  import { menuIcon } from '../stores/app';

  const send = createEventDispatcher();
</script>

<style>
  .menu-icon {
    transition: background-color 250ms ease-in-out;
  }
</style>

<div class="bg-black h-12 w-screen" data-cy="header">
  {#if $menuIcon}
    <div
      class="menu-icon h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-gray-600"
      data-cy="menu-icon"
      on:click={() => send(E, MenuShow)}
    >
      <MenuIcon />
    </div>
  {/if}
</div>
