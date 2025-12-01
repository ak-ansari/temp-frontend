export interface IPcAttFilters {
  city: string[];
  date?: string;
  cellIds?: string[];
  // cluster?: string;
  speed_order?: boolean | undefined;
  state?: string[];
  roles?: string[];
  pc_type?: string[];
  fromDate?: string;
  toDate?: string;
}
export enum PC_ATT_STATUS {
  ACTIVE = 'active',
  CHECKED_OUT = 'checked_out',
  SYSTEM_CHECKED_OUT = 'system_checked_out',
  NO_SHOW = 'no_show',
  LEAVE = 'leave',
  OUT_OF_OFFICE = 'out_of_office',
}
export enum REQUEST_STATUS {
  APPROVED = 'approved',
  EXPIRED = 'expired',
  REJECTED = 'rejected',
  PENDING = 'pending',
}
export enum PC_AVAILABILITY {
  AVAILABLE = 'available',
  LEAVE = 'leave',
  OUT_OF_OFFICE = 'out_of_office',
  SLOT_DELETED = 'slot_deleted',
  WEEK_OFF = 'week_off',
}
export enum ROLES {
  PC = 'pc',
  PO = 'po',
}

export interface IWeekAvailability {
  date: string; // ISO date string (YYYY-MM-DD)
  status: PC_AVAILABILITY; // e.g., "available", "unavailable"
}

// Sub-interface for today's task summary
export interface ITodaysTask {
  completed: number;
  remaining: number;
  total: number;
}

// Main interface
export interface IPcAttSummaryTableData {
  userId: string;
  status: PC_ATT_STATUS;
  intime: string; // can be "-" or a time string
  outtime: string; // can be "-" or a time string
  cells: { _id: string; name: string }[]; // if you know the structure, replace `any`
  availablefor7days: IWeekAvailability[];
  todaysTask: ITodaysTask;
  selfies: string | null;
}
export interface ICalenderAvailability {
  date: string; // YYYY-MM-DD
  status: RequestType;
}
export interface IMonthlySummary {
  userId: string;
  workDays: number;
  daysPresent: number;
  calendar_availability: ICalenderAvailability[];
  leaves: number;
  outOfOfficeHours: number;
  tasks: {
    completed: number;
    total: number;
  };
}
export enum RequestType {
  LEAVE = 'leave',
  OUT_OF_OFFICE = 'out_of_office',
  WEEKLY_DAY_OFF = 'weekly_day_off',
  SLOT_DELETED = 'slot_deleted',
}

export enum TrackingType {
  LEAVE_TRACKING = 'leave_tracking',
}

export interface ILeaveTracking {
  _id: string;
  userId: string;
  request_type: RequestType;
  split_start: string; // ISO date string
  split_end: string; // ISO date string
  leave_start: string; // ISO date string
  leave_end: string; // ISO date string
  status: REQUEST_STATUS;
  start_time: string; // Time string in format "HH:MM"
  end_time: string; // Time string in format "HH:MM"
  remarks: string;
  isDelete: number;
  type: string;
  __v: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
export interface IPcTask {
  _id: string;
  processInstanceId: string;
  taskId: string;
  key: string;
  summary: string;
  assignee: string;
  watchers: string[];
  parameters: {
    projectId: string;
    leadId: string;
    sseid: string;
    lead_id: string;
  };
  slot_date: string;
  start_time: string;
  end_time: string;
}
export interface IRequest {
  fromDate: string | null;
  toDate: string | null;
  start_time: string | null;
  end_time: string | null;
  remarks: string;
  request_type: RequestType;
}
export interface IReassignmentPayload {
  processInstanceId: string;
  taskData: {
    taskId: string;
    assignee: string;
    watchers: string[];
  };
  pcReassignmentData: {
    userId: string; // new assignee
    oldAssignee: string; // obtained from taskData
    projectId?: string;
    leadId?: string;
    date: string; // YYYY-MM-DD format
    start_time: string; // HH:mm
    end_time: string; // HH:mm
    key: string;
    entityType: string; // e.g., "lead"
  };
}
export interface IPcLead {
  _id: string;
  lead_id: string;
  dev_details: {
    cell_id: string;
  };
  [key: string]: any;
}
export interface IPcProject {
  sseid: string;
  _id: string;
  cell_id: string;
  [key: string]: any;
}
export interface IPcCell {
  _id: string;
  users: string[];
}
export interface IPcUserSlot {
  userId: string;
  status: string; // e.g. "No Slot Available"
}

export interface IPcSlot {
  slot_date: string; // "17/06/2025"
  start_time: string; // "12:30"
  end_time: string; // "14:30"
  sseid: string; // "RSSEMH0473"
  distance: string; // "806.95 km"
  taskKey: string; // "013"
  taskName: string; // "DEV Schedule"
}

export interface INearbyUser {
  pc: string; // "nilesh madale"
  pc_id: string; // "669dfbcff566a43c55947b68"
  slots: IPcSlot[];
}

// Record with date string as key, array of NearbyUser as value
export interface INearbyUsers {
  [date: string]: INearbyUser[];
}

export interface ISlotApiResponse {
  userSlotsAvailable: IPcUserSlot[];
  nearbyUsers: INearbyUsers;
}
export interface IPcUserOption {
  id: string;
  disabled: boolean;
  isNearby: boolean;
  label: string;
  roles: string[];
  status: string;
}
export interface IEntity {
  _id: string;
  type: 'project' | 'lead';
  idType: 'projectId' | 'leadId';
  entityId: string;
  cellId: string;
}
export type ICellType = 'PROJECT_CELL' | 'SALES_CELL' | 'SERVICE_CELL';

export interface ICell {
  _id: string;
  type: 'cell';
  isActive: boolean;
  design_agency: string;
  parent_cell_id: string;
  name: string;
  state: string;
  city: string[];
  pincode: string[];
  users: string[];
  cell_type: ICellType;
  discom: string;
  pre_sales_dev: boolean;
  isDelete: 0 | 1;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}
export type IPcRefreshType =
  | 'attendanceSummary'
  | 'requests'
  | 'all'
  | 'monthlySummary'
  | null
  | undefined;

export type IModal =
  | 'editWeekOff'
  | 'viewRequestHistory'
  | 'editPcSlots'
  | 'addNewRequest'
  | 'calenderAvailability'
  | 'docModal'
  | undefined;
export interface IPcModalOpenData<T> {
  type: IModal;
  data: T;
  additional: Record<string, any>;
}
