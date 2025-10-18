import apiClient from "./apiClient";
import type { User, Wallet, Transaction } from "../types/api";

/**
 * Fetch user profile
 */
export async function getUser(): Promise<User> {
  const { data } = await apiClient.get<User>("/user");
  return data;
}

/**
 * Fetch wallet summary
 */
export async function getWallet(): Promise<Wallet> {
  const { data } = await apiClient.get<Wallet>("/wallet");
  return data;
}

/**
 * Fetch transactions list
 */
export async function getTransactions(): Promise<Transaction[]> {
  const { data } = await apiClient.get<Transaction[]>("/transactions");
  return data;
}