<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { accountMenu } from '../stores/app';

  const send = createEventDispatcher();
</script>

<style>
  .account {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
    height: 20vh;
    min-width: 150px;
    top: 1.5rem;
    width: 15vw;
    z-index: 50;
  }
</style>

{#if $accountMenu}
  <div class="account absolute bg-white rounded-md right-6 top-6 p-4" transition:fade={{ duration: 200 }}>
    Account page
  </div>
{/if}
