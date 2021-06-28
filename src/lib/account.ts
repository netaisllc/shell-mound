import { ApplicationEvents } from '../events/events';
import type { ISimpleEvent } from '../types/header';

export const AccountToggle: ISimpleEvent = {
  topic: ApplicationEvents.AccountToggle,
};
