<script lang="ts">
  import CloseIcon from '../icons/Close.svelte';
  import { MenuHide } from '../lib/menu';
  import { E } from '../lib/statics';
  import { createEventDispatcher } from 'svelte';
  import { useMobileMenu } from '../stores/app';

  const send = createEventDispatcher();

  // Make nicer class name
  $: visible = $useMobileMenu;
</script>

<style>
  .menu {
    display: none;
    height: 0;
    left: 0;
    margin: 10vh 10vw;
    top: 0;
    transition: all 50ms ease-in-out;
    width: 0;
  }
  .menu.visible {
    display: block;
    height: 80vh;
    width: 80vw;
  }
</style>

<div class="menu fixed bg-gray-800 rounded shadow-lg" class:visible>
  <div class="flex justify-end">
    <div
      class="close-icon flex h-12 w-12 justify-end items-center cursor-pointer p-3 text-gray-700"
      on:click={() => send(E, MenuHide)}
    >
      <CloseIcon fill="#ECECEC" />
    </div>
  </div>
</div>
