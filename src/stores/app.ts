import { derived, writable } from 'svelte/store';

// CONSTANTS
export const mobileThreshold = 769;

// BASE STORES

// true when inner width is less than threshold
export const isMobile = writable(false);

// true when ui request to see menu
export const menu = writable(false);

// true when menu icon is visible
export const menuIcon = writable(true);

// toasty message box
export const notice = writable('Welcome to my Svelte app!');

// DERIVED STORES

// true when menu is requested at desktop width
export const useDrawerMenu = derived([isMobile, menu], ([$isMobile, $menu]) => {
  return $menu && !$isMobile;
});

// true when menu is requested at desktop width
export const useMobileMenu = derived([isMobile, menu], ([$isMobile, $menu]) => {
  return $isMobile && $menu;
});

export const useAdjustedDesktopWidth = derived([isMobile, menu], ([$isMobile, $menu]) => {
  return !$isMobile && $menu;
});

export const useFullDesktopWidth = derived([isMobile, menu], ([$isMobile, $menu]) => {
  if ($isMobile) return true;

  return (!$isMobile && !$menu) || $isMobile;
});
