<script>
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { notice } from '../stores/app';

  export let ms = 5000;
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
    align-items: center;
    background-color: #565656;
    border-radius: 0.2rem;
    bottom: 1.5rem;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 0.875rem;
    font-size: 0.9rem;
    font-weight: 300;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 1rem;
    opacity: 95%;
    padding: 0.5rem 1.4rem;
    position: absolute;
    right: 0;
    z-index: 100;
  }
  div p {
    color: #fff;
  }
  div svg {
    fill: currentColor;
    height: 1rem;
    margin-right: 0.5rem;
    width: 1rem;
  }
</style>

{#if visible && $notice}
  <div role="alert" on:click={() => (visible = false)} transition:fade>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p>{$notice}</p>
  </div>
{/if}
