import { useState } from "react";
import { BalanceOverviewSection } from "./sections/BalanceOverviewSection";
import { ExportOptionsSection } from "./sections/ExportOptionsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { RevenueSummarySection } from "./sections/RevenueSummarySection";
import { ChartSection } from "./sections/ChartSection";
import { BalanceSummarySection } from "./sections/BalanceSummarySection";
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
    <div className="relative w-full bg-trashed-colorswhite80 flex flex-col">
      <aside className="flex flex-col items-start gap-1 p-1 fixed top-[310px] left-4 bg-white rounded-[100px] shadow-app-bar z-10">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          {navigationIcons.map((icon, index) => (
            <button
              key={index}
              className="inline-flex items-start gap-1 p-2 relative flex-[0_0_auto] rounded-[100px] hover:bg-trashed-colorsgray0 transition-all group"
            >
              <img
                className="relative w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
                alt={icon.alt}
                src={icon.src}
              />
            </button>
          ))}
        </div>
      </aside>
      <NavigationBarSection />

      <main className="flex-1 flex flex-col w-full container mt-10">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex gap-20">
            <div className="flex flex-col gap-3 w-10/12">
              <BalanceOverviewSection />
              <ChartSection />
            </div>
            <BalanceSummarySection />
          </div>

          <RevenueSummarySection
            onOpenFilter={() => setIsFilterModalOpen(true)}
          />
          <ExportOptionsSection />
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
