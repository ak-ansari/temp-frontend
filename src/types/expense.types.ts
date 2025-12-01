export interface ExpenseItem {
  _id?: string;
  name: string;
  expenseType: string;
  category: string;
  amount: number;
  requestedAgainst: string;
  createdBy?: string;
  paymentMode: string;
  remarks?: string;
  collectFromCustomer: boolean;
  file?: any;
  proof?: any[];
  [key:string]:any
}