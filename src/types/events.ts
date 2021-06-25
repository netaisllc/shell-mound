export interface IApplicationEvent {
  type: string;
  detail?: IApplicationEventDetail;
}

export interface IApplicationEventDetail {
  topic: string;
  data?: any;
}
