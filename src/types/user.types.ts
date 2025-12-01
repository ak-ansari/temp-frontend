export interface IUser {
  pincodes: string[];
  pc_type: string[];
  _id: string;
  emails: string[];
  __v: number;
  addresses: string[];
  bookmarks: string[];
  contributions: string[];
  createdAt: string; // ISO date string
  createdBy: string;
  customParams: {
    key: string;
    value: string;
  }[];
  dateOfBirth: string | null;
  dislikes: string[];
  favourites: string[];
  fcmToken: string[];
  firstName: string;
  groups: string[];
  lastName: string;
  likes: string[];
  localFirstName: string;
  localLastName: string;
  localMiddleName: string;
  middleName: string;
  mobiles: string[];
  nickName: string;
  notes: string[];
  roles: string[];
  status: "Active" | "Inactive" | string;
  updatedAt: string; // ISO date string
  updatedBy: string;
  password: string;
  tempPassword: boolean;
}
