import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { useAppData } from "../../../../context/AppDataContext";

type FilterOptionsSectionProps = {
  onOpenFilter: () => void;
};

export const RevenueSummarySection = ({ onOpenFilter }: FilterOptionsSectionProps): JSX.Element => {
  const {
    data: { transactions },
  } = useAppData();

  const count = transactions.length;

  return (
    <section className="flex flex-col lg:flex-row w-full lg:items-center gap-6 pb-6 border-b border-[#eff1f6] mt-12">
      <div className="flex flex-col items-start flex-1">
        <h2 className="font-degular-headers-3x-small font-[number:var(--degular-headers-3x-small-font-weight)] text-[#131316] text-[length:var(--degular-headers-3x-small-font-size)] tracking-[var(--degular-headers-3x-small-letter-spacing)] leading-[var(--degular-headers-3x-small-line-height)] [font-style:var(--degular-headers-3x-small-font-style)]">
          {count} Transactions
        </h2>

        <p className="font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] [font-style:var(--degular-paragraph-XX-small-font-style)]">
          Your transactions for All Time
        </p>
      </div>

      <div className="inline-flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={onOpenFilter}
          className="inline-flex items-center gap-3 pl-[30px] pr-5 py-3 h-auto bg-[#eff1f6] rounded-[100px] hover:bg-[#eff1f6]/80"
        >
          <div className="inline-flex items-center gap-1">
            <span className="font-degular-subtitle-6x-small font-[number:var(--degular-subtitle-6x-small-font-weight)] text-[#131316] text-[length:var(--degular-subtitle-6x-small-font-size)] tracking-[var(--degular-subtitle-6x-small-letter-spacing)] leading-[var(--degular-subtitle-6x-small-line-height)] [font-style:var(--degular-subtitle-6x-small-font-style)]">
              Filter
            </span>

            <Badge className="w-5 h-5 bg-[#131316] rounded-full flex items-center justify-center p-0 hover:bg-[#131316]">
              <span className="[font-family:'Degular-Medium',Helvetica] font-medium text-trashed-colorswhite100 text-xs tracking-[-0.40px] leading-3">
                {count}
              </span>
            </Badge>

            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </Button>

        <Button
          variant="secondary"
          className="inline-flex items-center gap-3 pl-[30px] pr-5 py-3 h-auto bg-[#eff1f6] rounded-[100px] hover:bg-[#eff1f6]/80"
        >
          <div className="inline-flex items-center gap-1">
            <span className="font-degular-subtitle-6x-small font-[number:var(--degular-subtitle-6x-small-font-weight)] text-[#131316] text-[length:var(--degular-subtitle-6x-small-font-size)] tracking-[var(--degular-subtitle-6x-small-letter-spacing)] leading-[var(--degular-subtitle-6x-small-line-height)] [font-style:var(--degular-subtitle-6x-small-font-style)]">
              Export list
            </span>

            <DownloadIcon className="w-5 h-5" />
          </div>
        </Button>
      </div>
    </section>
  );
};
