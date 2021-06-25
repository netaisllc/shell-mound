<script>
  import Drawer from './Drawer.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import Workspace from './Workspace.svelte';
</script>

<div class="flex w-screen">
  <Drawer on:event />
  <Workspace on:event />
</div>

<MobileMenu on:event />
