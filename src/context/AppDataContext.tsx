import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getUser, getWallet, getTransactions } from "../services/api";
import type { AppData } from "../types/api";

type AppDataState = {
  data: AppData;
  isLoading: boolean;
  error?: string;
  refetch: () => Promise<void>;
};

const initialData: AppData = {
  user: null,
  wallet: null,
  transactions: [],
};

const AppDataContext = createContext<AppDataState>({
  data: initialData,
  isLoading: true,
  error: undefined,
  refetch: async () => {},
});

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchAll = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const [user, wallet, transactions] = await Promise.all([
        getUser(),
        getWallet(),
        getTransactions(),
      ]);
      setData({ user, wallet, transactions });
    } catch (e: any) {
      setError(e?.message ?? "Failed to fetch data");
      setData(initialData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchAll();
  }, []);

  const value: AppDataState = {
    data,
    isLoading,
    error,
    refetch: fetchAll,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData(): AppDataState {
  const ctx = useContext(AppDataContext);
  return ctx;
}