<script lang="ts">
  import Router from 'svelte-spa-router';

  import { routes } from '../routes/app';
  import { useAdjustedDesktopWidth, useFullDesktopWidth } from '../stores/app';

  // Make nicer class name
  $: adjusted = $useAdjustedDesktopWidth;
  $: full = $useFullDesktopWidth;
</script>

<style>
  .workspace {
    font-size: 44pt;
    height: calc(100vh - 48px);
    transition: width 150ms ease-in-out;
  }
  .adjusted {
    width: calc(100vw - 320px);
  }
  .full {
    width: 100vw;
  }
</style>

<div class="workspace bg-green-200 flex justify-center items-center" class:full class:adjusted>
  <Router {routes} />
</div>
