export interface INoticeEvent {
  topic: string;
  data?: string;
}

export enum NoticeThemes {
  Error = 'error',
  Information = 'info',
  Ok = 'ok',
  Warning = 'warning',
}
