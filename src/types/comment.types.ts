import { IFileDetails } from './file.types';

export interface IComment {
  entity_id: string;
  comment: string;
  parent_thread_id: string;
  subject_line: string;
  mentions: IMention[];
  files: IFileDetails[];
  sseid: string;
  leadId: string;
}

export interface IMention {
  name: string;
  emails: string[];
  user_id: string;
}

export interface IApiRes<T> {
  result: T;
  statusCode: number;
  message: string;
  error?: any
}