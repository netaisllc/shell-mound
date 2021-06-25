<script>
  import { onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';

  import { notice, noticeDuration } from '../stores/app';
  import { NoticeThemes } from '../types/notice';

  import CloseIcon from '../icons/Close.svelte';
  import InfoIcon from '../icons/Info.svelte';
  import OkIcon from '../icons/Ok.svelte';
  import ErrorIcon from '../icons/Error.svelte';
  import WarningIcon from '../icons/Warning.svelte';

  export let ms = noticeDuration;
  let visible;
  let timeout;

  const onMessageChange = (message, ms) => {
    // clear any existing timeout
    clearTimeout(timeout);

    // hide Notice if message is empty
    if (!message) {
      visible = false;
    } else {
      // reveal Notice
      visible = true;

      // Hide Notice after timeout
      if (ms > 0) timeout = setTimeout(() => (visible = false), ms);
    }
  };

  // Update on store or the ms prop change
  $: onMessageChange($notice, ms);

  // Clear on component removal
  onDestroy(() => clearTimeout(timeout));
</script>

<style>
  div {
    background-color: #484848;
    font-size: 0.9375rem;
    font-weight: 300;
    opacity: 95%;
    z-index: 100;
  }
  div p {
    color: #fff;
  }
</style>

{#if visible && $notice}
  <div
    class="absolute bottom-4 cursor-pointer flex items-center justify-between m-2 p-4 rounded-md shadow-lg right-4"
    role="alert"
    out:fly={{ y: 300, duration: 2000 }}
  >
    {#if $notice.theme === NoticeThemes.Error}
      <ErrorIcon />
    {/if}

    {#if $notice.theme === NoticeThemes.Information}
      <InfoIcon />
    {/if}

    {#if $notice.theme === NoticeThemes.Ok}
      <OkIcon />
    {/if}

    {#if $notice.theme === NoticeThemes.Warning}
      <WarningIcon />
    {/if}

    <p class="ml-2 mr-4">{$notice.message}</p>

    <div on:click={() => (visible = false)}>
      <CloseIcon fill="#9C9C9C" height="16" width="16" />
    </div>
  </div>
{/if}
