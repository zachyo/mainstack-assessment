import React from "react";

const balanceMetrics = [
  {
    label: "Ledger Balance",
    value: "USD 0.00",
    icon: "/info.svg",
  },
  {
    label: "Total Payout",
    value: "USD 55,080.00",
    icon: "/info-3.svg",
  },
  {
    label: "Total Revenue",
    value: "USD 175,580.00",
    icon: "/info-2.svg",
  },
  {
    label: "Pending Payout",
    value: "USD 0.00",
    icon: "/info-1.svg",
  },
];

export const BalanceSummarySection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-8 w-[300px]">
      {balanceMetrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-start gap-2">
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
