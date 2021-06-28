import { ApplicationEvents } from '../events/events';
import type { ISimpleEvent } from '../types/header';

export const AnnouncementToggle: ISimpleEvent = {
  topic: ApplicationEvents.AnnouncementToggle,
};
