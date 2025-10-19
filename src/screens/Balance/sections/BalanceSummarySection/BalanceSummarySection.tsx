import { useAppData } from "../../../../context/AppDataContext";

function formatUSD2dp(amount: number): string {
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `USD ${formatted}`;
}

export const BalanceSummarySection = (): JSX.Element => {
  const {
    data: { wallet },
  } = useAppData();

  const metrics = [
    {
      label: "Ledger Balance",
      value: formatUSD2dp(wallet?.ledger_balance ?? 0),
      icon: "/info.svg",
    },
    {
      label: "Total Payout",
      value: formatUSD2dp(wallet?.total_payout ?? 0),
      icon: "/info.svg",
    },
    {
      label: "Total Revenue",
      value: formatUSD2dp(wallet?.total_revenue ?? 0),
      icon: "/info.svg",
    },
    {
      label: "Pending Payout",
      value: formatUSD2dp(wallet?.pending_payout ?? 0),
      icon: "/info.svg",
    },
  ];

  return (
    <section className="flex flex-col gap-8 lg:w-[300px]">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-start gap-2.5">
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] [font-style:var(--degular-paragraph-XX-small-font-style)]">
              {metric.label}
            </div>
            <img className="w-5 h-5" alt="Info" src={metric.icon} />
          </div>
          <div className="text-[length:var(--degular-headers-XX-small-font-size)] tracking-[var(--degular-headers-XX-small-letter-spacing)] leading-[var(--degular-headers-XX-small-line-height)] font-degular-headers-XX-small font-[number:var(--degular-headers-XX-small-font-weight)] text-[#131316] [font-style:var(--degular-headers-XX-small-font-style)]">
            {metric.value}
          </div>
        </div>
      ))}
    </section>
  );
};
