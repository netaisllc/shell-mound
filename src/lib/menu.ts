import { ApplicationEvents } from '../events/events';
import type { ISimpleEvent } from '../types/header';

export const MenuAction: ISimpleEvent = {
  topic: ApplicationEvents.MenuAction,
};

export const MenuHide: ISimpleEvent = {
  topic: ApplicationEvents.MenuHide,
};

export const MenuShow: ISimpleEvent = {
  topic: ApplicationEvents.MenuShow,
};
