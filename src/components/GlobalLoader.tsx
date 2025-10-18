import React from "react";
import { useAppData } from "../context/AppDataContext";

/**
 * GlobalLoader shows a simple overlay while initial app data is loading.
 * It relies on AppDataContext's isLoading flag.
 */
export const GlobalLoader = (): JSX.Element | null => {
  const { isLoading } = useAppData();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/5 backdrop-blur-[1px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 p-4 rounded-xl">
        <div className="w-8 h-8 border-2 border-[#131316] border-t-transparent rounded-full animate-spin" />
        <div className="text-sm text-[#56616b]">Fetching data...</div>
      </div>
    </div>
  );
};

export default GlobalLoader;