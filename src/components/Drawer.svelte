<script lang="ts">
  import BackIcon from '../icons/Back.svelte';
  import { MenuHide } from '../lib/menu';
  import { E } from '../lib/statics';
  import { createEventDispatcher } from 'svelte';
  import { isMobile, useDrawerMenu } from '../stores/app';

  const send = createEventDispatcher();

  // Make nicer class name
  $: visible = $useDrawerMenu;
</script>

<style>
  .drawer {
    height: calc(100vh - 48px);
    top: 48;
    transition: width 200ms ease-in-out;
    width: 0px;
  }
  .drawer.visible {
    width: 320px;
  }
  .close-icon {
    transition: all 200ms ease-in-out;
  }
</style>

{#if !$isMobile}
  <div class="drawer bg-gray-50" class:visible data-cy="drawer">
    <div class="flex justify-end">
      <div
        class="close-icon flex h-12 w-12 justify-end items-center cursor-pointer p-3 text-gray-400 hover:text-black hover:bg-gray-300"
        data-cy="drawer-close-icon"
        on:click={() => send(E, MenuHide)}
      >
        <BackIcon fill="currentColor" />
      </div>
    </div>
  </div>
{/if}
