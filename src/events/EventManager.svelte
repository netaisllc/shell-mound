<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { IApplicationEvent } from '../types/events';
  import { ApplicationEvents } from '../events/events';

  import { E } from '../lib/statics';
  import { MenuHide } from '../lib/menu';
  import { accountMenu, announcements, isMobile, menu, menuIcon, mobileThreshold, notice } from '../stores/app';

  const send = createEventDispatcher();

  export let event: IApplicationEvent;

  let innerWidth: number = 0;
  $: setIsMobile(innerWidth);

  // Event handlers ---
  const account = () => {
    announcementHide();
    $accountMenu = !$accountMenu;
  };

  const accountHide = () => {
    $accountMenu = false;
  };

  const announcement = () => {
    accountHide();
    $announcements = !$announcements;
  };

  const announcementHide = () => {
    $announcements = false;
  };

  const menuAction = () => {
    // In mobile context, executing a menu action closes the menu.
    if ($isMobile) {
      send(E, MenuHide);
    }
  };

  const menuHide = () => {
    // Hide other open surfaces
    accountHide();
    announcementHide();

    $menuIcon = true;
    $menu = false;
  };

  const menuShow = () => {
    // Hide other open surfaces
    accountHide();
    announcementHide();

    $menuIcon = false;
    $menu = true;
  };

  const noticeHide = () => {};

  const noticeShow = () => {
    // TODO Theming of notices
    $notice = event && event.detail ? event.detail.data : '';
  };

  const setIsMobile = (iw: number) => {
    // Should debounce or limit this somewhat
    $isMobile = iw < mobileThreshold;
  };

  // Map events to handlers ---
  const actions: Record<string, any> = {
    [ApplicationEvents.AccountToggle]: account,
    [ApplicationEvents.AnnouncementToggle]: announcement,
    [ApplicationEvents.MenuAction]: menuAction,
    [ApplicationEvents.MenuHide]: menuHide,
    [ApplicationEvents.MenuShow]: menuShow,
    [ApplicationEvents.NoticeHide]: noticeHide,
    [ApplicationEvents.NoticeShow]: noticeShow,
  };

  // Dispatch event handlers ---
  const dispatch = (e: IApplicationEvent) => {
    // No evbent to dispatch
    if (!e) return;

    // Call event handler via event map
    if (e.detail && e.detail.topic) {
      actions[e.detail.topic].call();
    }
  };

  $: dispatch(event);
</script>

<svelte:window bind:innerWidth />
