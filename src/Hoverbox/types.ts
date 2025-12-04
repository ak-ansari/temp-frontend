export interface DelayRow {
  id: number;
  delay: number;
  stage: string;
  comment: string;
}

export interface IDelayHistory {
  initialDate: string;
  updatedDate: string;
  delayData: DelayRow[];
}
