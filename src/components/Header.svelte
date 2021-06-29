<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import AccountIcon from '../icons/Account.svelte';
  import AccountMenu from '../components/AccountMenu.svelte';
  import AnnouncementIcon from '../icons/Announcement.svelte';
  import Announcements from '../components/Announcements.svelte';
  import MenuIcon from '../icons/Menu.svelte';
  import { AccountToggle } from '../lib/account';
  import { AnnouncementToggle } from '../lib/announcement';
  import { E } from '../lib/statics';
  import { MenuShow } from '../lib/menu';

  import { menuIcon } from '../stores/app';

  const send = createEventDispatcher();
</script>

<style>
  .menu-icon {
    transition: background-color 250ms ease-in-out;
  }
</style>

<div class="bg-black flex flex-row justify-between items-center h-12 relative w-screen" data-cy="header">
  {#if $menuIcon}
    <div
      class="menu-icon h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-gray-600"
      data-cy="menu-icon"
      on:click={() => send(E, MenuShow)}
    >
      <MenuIcon />
    </div>
  {:else}
    <div class="menu-icon-placeholder h-12 w-12" />
  {/if}

  <div class="flex flex-row text-white">
    <div
      class="menu-icon h-12 w-12 flex justify-center items-center cursor-pointer mr-1 hover:bg-gray-600"
      data-cy="menu-icon"
      on:click={() => send(E, AnnouncementToggle)}
    >
      <AnnouncementIcon />
    </div>
    <div
      class="menu-icon h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-gray-600"
      data-cy="menu-icon"
      on:click={() => send(E, AccountToggle)}
    >
      <AccountIcon />
    </div>
  </div>

  <Announcements on:event />

  <AccountMenu on:event />
</div>
