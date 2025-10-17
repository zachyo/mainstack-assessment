import React from "react";
import { Separator } from "../../../../components/ui/separator";

type FilterOptionsSectionProps = {
  onOpenFilter: () => void;
};

export const FilterOptionsSection = ({ onOpenFilter }: FilterOptionsSectionProps): JSX.Element => {
  return (
    <section className="w-full relative">
      <Separator className="w-full" />

      <button
        onClick={onOpenFilter}
        className="w-full flex items-center justify-between pt-[15px] pb-[20px] hover:bg-slate-50 transition-colors px-2 rounded-md"
      >
        <div className="h-4 flex items-center justify-center font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] whitespace-nowrap [font-style:var(--degular-paragraph-XX-small-font-style)]">
          Apr 1 ,&nbsp;&nbsp;2022
        </div>

        <div className="h-6 flex items-center justify-center font-degular-paragraph-x-small font-[number:var(--degular-paragraph-x-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-x-small-font-size)] text-right tracking-[var(--degular-paragraph-x-small-letter-spacing)] leading-[var(--degular-paragraph-x-small-line-height)] whitespace-nowrap [font-style:var(--degular-paragraph-x-small-font-style)]">
          Apr 30 ,&nbsp;&nbsp;2022
        </div>
      </button>

      <Separator className="w-full" />
    </section>
  );
};
