import React from "react";

const balanceMetrics = [
  {
    label: "Ledger Balance",
    value: "USD 5,000.00",
    icon: "/info.svg",
  },
  {
    label: "Total Payout",
    value: "USD 5,000.00",
    icon: "/info-3.svg",
  },
  {
    label: "Total Revenue",
    value: "USD 5,000.00",
    icon: "/info-2.svg",
  },
  {
    label: "Pending Payout",
    value: "USD 5,000.00",
    icon: "/info-1.svg",
  },
];

export const TransactionListSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start gap-8">
      {balanceMetrics.map((metric, index) => (
        <div key={index} className="flex flex-col w-[271px] items-start gap-2">
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center justify-center flex-1 font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] [font-style:var(--degular-paragraph-XX-small-font-style)]">
              {metric.label}
            </div>
            <img className="w-5 h-5" alt="Info" src={metric.icon} />
          </div>
          <div className="self-stretch text-[length:var(--degular-headers-XX-small-font-size)] tracking-[var(--degular-headers-XX-small-letter-spacing)] leading-[var(--degular-headers-XX-small-line-height)] flex items-center justify-center font-degular-headers-XX-small font-[number:var(--degular-headers-XX-small-font-weight)] text-[#131316] [font-style:var(--degular-headers-XX-small-font-style)]">
            {metric.value}
          </div>
        </div>
      ))}
    </section>
  );
};
