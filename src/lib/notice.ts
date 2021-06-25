import { ApplicationEvents } from '../events/events';
import type { INoticeEvent } from '../types/notice';

export const NoticeShow: INoticeEvent = {
  topic: ApplicationEvents.NoticeShow,
  data: '',
};

export const NoticeHide: INoticeEvent = {
  topic: ApplicationEvents.NoticeHide,
  data: '',
};
