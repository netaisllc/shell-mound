import Dashboard from '../components/Dashboard.svelte';
import Form from '../components/Form.svelte';
import Map from '../components/Map.svelte';
import NotFound from '../components/NotFound.svelte';
import Table from '../components/Table.svelte';
import Video from '../components/Video.svelte';

export const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/table': Table,
  '/form': Form,
  '/map': Map,
  '/video': Video,
  // Catch-all; optional, but if present it must be the last
  '*': NotFound,
};
