<script lang="ts">
  import CloseIcon from '../icons/Close.svelte';
  import Menu from './Menu.svelte';
  import { MenuHide } from '../lib/menu';
  import { E } from '../lib/statics';
  import { createEventDispatcher } from 'svelte';
  import { isMobile, useMobileMenu } from '../stores/app';

  const send = createEventDispatcher();

  // Make nicer class name
  $: visible = $useMobileMenu;
</script>

<style>
  .menu,
  .scrim {
    display: none;
    height: 0;
    left: 0;
    margin: 10vh 10vw;
    top: 0;
    transition: all 50ms ease-in-out;
    width: 0;
  }
  .scrim {
    margin: 0;
  }
  .menu.visible {
    display: block;
    height: 80vh;
    width: 80vw;
    z-index: 100;
  }
  .scrim.visible {
    display: block;
    height: 100vh;
    opacity: 0.67;
    width: 100vw;
    z-index: 50;
  }
</style>

{#if $isMobile}
  <div class="scrim fixed bg-gray-600" class:visible data-cy="scrim" />

  <div class="menu fixed bg-gray-800 rounded shadow-lg" class:visible data-cy="mobile-menu">
    <div class="flex justify-end">
      <div
        class="close-icon flex h-12 w-12 justify-end items-center cursor-pointer p-3 text-gray-700"
        data-cy="mobile-menu-close-icon"
        on:click={() => send(E, MenuHide)}
      >
        <CloseIcon fill="#ECECEC" />
      </div>
    </div>

    <Menu on:event />
  </div>
{/if}
