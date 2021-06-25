import { ApplicationEvents } from '../events/events';
import type { IMenuEvent } from '../types/header';

export const MenuHide: IMenuEvent = {
  topic: ApplicationEvents.MenuHide,
};

export const MenuShow: IMenuEvent = {
  topic: ApplicationEvents.MenuShow,
};
