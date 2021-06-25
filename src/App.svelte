<script lang="ts">
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Notice from './components/Notice.svelte';
  import Tailwind from './Tailwind.svelte';
  import EventManager from './events/EventManager.svelte';
  import type { IApplicationEvent } from './types/events';

  let _event: any = {};
  const convey = (e: IApplicationEvent) => (_event = e);

  $: event = _event;
</script>

<style>
  :global(body) {
    font-family: 'Roboto Condensed', sans-serif;
    overflow: hidden;
  }
</style>

<EventManager {event} on:event={convey} />
<Notice />
<Tailwind />

<main class="flex flex-col bg-gray-200 h-screen w-screen">
  <!-- Header -->
  <Header on:event={convey} />
  <!-- Body -->
  <Main on:event={convey} />
</main>
