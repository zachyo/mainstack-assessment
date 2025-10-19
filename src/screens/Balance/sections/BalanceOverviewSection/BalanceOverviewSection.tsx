import { Button } from "../../../../components/ui/button";
import { useAppData } from "../../../../context/AppDataContext";
import { formatCurrencyUSD } from "../../../../lib/format";

export const BalanceOverviewSection = (): JSX.Element => {
  const {
    data: { wallet },
  } = useAppData();

  const balance = wallet?.balance ?? 0;
  const balanceText = formatCurrencyUSD(balance);

  return (
    <section className="flex items-center gap-16 w-full justify-between lg:justify-normal">
      <div className="flex flex-col items-start gap-2">
        <div className="font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] [font-style:var(--degular-paragraph-XX-small-font-style)]">
          Available Balance
        </div>

        <div className="text-[length:var(--degular-headers-small-font-size)] tracking-[var(--degular-headers-small-letter-spacing)] leading-[var(--degular-headers-small-line-height)] font-degular-headers-small font-[number:var(--degular-headers-small-font-weight)] text-[#131316] [font-style:var(--degular-headers-small-font-style)]">
          {balanceText}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Button className="h-auto px-[52px] py-3.5 bg-[#131316] rounded-[100px] hover:bg-[#131316]/90">
          <span className="font-degular-subtitle-6x-small font-[number:var(--degular-paragraph-xl-small-font-weight)] text-trashed-colorswhite100 text-[length:var(--degular-subtitle-6x-small-font-size)] tracking-[var(--degular-subtitle-6x-small-letter-spacing)] leading-[var(--degular-subtitle-6x-small-line-height)] [font-style:var(--degular-subtitle-6x-small-font-style)]">
            Withdraw
          </span>
        </Button>
      </div>
    </section>
  );
};
