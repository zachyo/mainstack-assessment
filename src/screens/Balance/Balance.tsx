import React, { useState } from "react";
import { BalanceOverviewSection } from "./sections/BalanceOverviewSection";
import { ExportOptionsSection } from "./sections/ExportOptionsSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { RevenueSummarySection } from "./sections/RevenueSummarySection";
import { TransactionListSection } from "./sections/TransactionListSection";
import { FilterModal } from "../../components/FilterModal";

const navigationIcons = [
  {
    src: "/product-icons-2.svg",
    alt: "Product icons",
  },
  {
    src: "/product-icons-3.svg",
    alt: "Product icons",
  },
  {
    src: "/product-icons.svg",
    alt: "Product icons",
  },
  {
    src: "/product-icons-1.svg",
    alt: "Product icons",
  },
];

export const Balance = (): JSX.Element => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilterApply = (filters: any) => {
    console.log("Applied filters:", filters);
  };

  return (
    <div className="relative w-full bg-trashed-colorswhite80 flex">
      <aside className="flex flex-col items-start gap-1 p-1 fixed top-[310px] left-4 bg-white rounded-[100px] shadow-app-bar z-10">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          {navigationIcons.map((icon, index) => (
            <button
              key={index}
              className="inline-flex items-start gap-1 p-2 relative flex-[0_0_auto] rounded-[100px] hover:bg-trashed-colorsgray0 transition-colors"
            >
              <img className="relative w-6 h-6" alt={icon.alt} src={icon.src} />
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col w-full">
        <NavigationBarSection />

        <div className="flex flex-1 gap-4 p-4">
          <div className="flex flex-col gap-4 flex-1">
            <BalanceOverviewSection />
            <FilterOptionsSection onOpenFilter={() => setIsFilterModalOpen(true)} />
            <RevenueSummarySection />
            <ExportOptionsSection />
          </div>

          <div className="flex-shrink-0">
            <TransactionListSection />
          </div>
        </div>
      </main>

      <FilterModal
        open={isFilterModalOpen}
        onOpenChange={setIsFilterModalOpen}
        onApply={handleFilterApply}
      />
    </div>
  );
};
