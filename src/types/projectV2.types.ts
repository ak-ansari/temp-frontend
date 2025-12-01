export interface IGroupedStatusData {
  groupedStatus: string;
  completionDate?: string; // outer date;
  delay: number; // delay in days;
  totalDays: number; // taken time in days
  statusData: IStatusData[];
  status: Status
  tat: number
}
export enum Status {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ONGOING = 'ongoing',
  UPCOMING = 'upcoming'
}
export interface IStatusData {
  status: Status;
  name: string;
  date: string;
}
