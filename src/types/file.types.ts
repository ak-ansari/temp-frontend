export interface IFileDetails {
  file_id: string;
  document_name: string;
  extension: string;
  document_type: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  _id?: string;
}
export interface IFileUploadRes {
  access_type: string;
  extension: string;
  file_directory: string;
  file_id: string;
  file_path: string;
  name: string;
  size: string;
  type: string;
  createdAt: string; // isoDate string
  updatedAt: string;
  version_id: string;
  __v: number;
  _id: string;
}
