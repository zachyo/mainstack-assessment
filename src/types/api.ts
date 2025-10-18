export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export interface Wallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface TransactionMetadata {
  name?: string;
  type?: string;
  email?: string;
  quantity?: number;
  country?: string;
  product_name?: string;
}

export type TransactionStatus = "successful" | "pending" | "failed" | string;
export type TransactionType = "deposit" | "withdrawal" | string;

export interface Transaction {
  amount: number;
  metadata?: TransactionMetadata;
  payment_reference?: string;
  status: TransactionStatus;
  type: TransactionType;
  date: string;
}

export interface AppData {
  user: User | null;
  wallet: Wallet | null;
  transactions: Transaction[];
}

export type TransactionDisplayType = "success" | "withdrawal" | "pending";

export interface TransactionDisplay {
  title: string;
  subtitle: string;
  amountFormatted: string;
  dateFormatted: string;
  type: TransactionDisplayType;
  icon: string;
  raw: Transaction;
}