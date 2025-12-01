import { IFileDetails } from "./file.types";

export interface GstDetail {
  state: string;
  gstNumber: string;
}

export interface SlabRate {
  cluster: string[];
  slab: string;
  minCapacity: string;
  maxCapacity: string;
  rateType: string;
  rate: string;
  additional?: string;
}

export interface DocumentFile {
  file_id: string;
  extension: string;
  document_name: string;
  document_type: string;
  approval_status?: string;
  rejection_reason?: string;
  approved_by?: string;
  approval_date?: string;
}

export interface Documents {
  pan_card: DocumentFile[];
  gst_certificate: DocumentFile[];
  mou: DocumentFile[];
  cancelled_cheque: DocumentFile[];
  non_compliance_document: DocumentFile[];
}

export interface Training {
  trainingModule: string;
  addedOn: string; // ISO Date string
  addedBy: string;
}

export interface ToolKitSummary {
  toolkitDetails: string;
  requiredBy: string; // ISO Date string
  uom: string;
  quantity: number;
}

export interface StatusHistory {
  status: string;
  updatedAt: string;
  updaedBy: string; // ISO Date string
}


export interface VendorDetail {
  businessStates: any;
  businessName: string;
  partnerName: string;
  businessOwnerName: string;
  phoneNumber: string;
  emailId: string;
  address: string;
  pinCode: string;
  city: string;
  state: string;

  yearsInSolarBusiness: number;
  businessAnnualTurnover: string;
  totalInstallationTeams: number;
  businessPanNumber: string;
  isGstRegistered: boolean;
  isMultiStateFunctional: boolean;

  gstDetails: GstDetail[];
  businessStatesWithSSE: string[];

  bankAccountNumber: string;
  accountHolderName: string;
  bankName: string;
  ifscCode: string;

  scopeOfBusiness: string[];
  slabRates: SlabRate[];

  documents: Documents;
  cluster: string;
  members: number;
  status: string;
  vendorId: string;

  trainings: Training[];
  websiteLink: string;
  toolKitSummary: ToolKitSummary[];
  statusHistory: StatusHistory[];
}

export interface CityData {
  city: string;
  createdAt: string;
  createdBy: string;
  isDelete: number;
  state: string;
  type: string;
  updatedAt: string;
  updatedBy: string;
  _id: string;
}
export interface IPoBreakDown {
  sseid: string;
  scope_of_work: string;
  project_capacity: string;
  slab_rate: number;
  cost: number;
  additional_cost?: number;
  tax_rate?: number;
  gst: number;
  total: number;
}
export interface IPoDetail {
  _id: string;
  poName: string;
  poId: string;
  vendor: string; // vendor is just an ID now
  scopeOFWork: string;
  sseid: string[];
  poType: string;
  poDate: string; // ISO date string
  total: number;
  totalCapacity: string;
  status: string;
  approval_log: ApprovalLog[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  l1_approval_required: boolean;
  l1_approved: boolean;
  cancelled_after_completion: boolean;
  cancelled_by: string;
}

export interface ApprovalLog {
  status: string;
  approved_by?: string | null;
  approved_at?: string | null;
  rejected_by?: string | null;
  rejected_at?: string | null;
}
export interface IPaginationParams {
  page: number;
  size: number;
  sort?: Record<string, any>;
  filters?: Record<string, any>;
  search?: string;
}
