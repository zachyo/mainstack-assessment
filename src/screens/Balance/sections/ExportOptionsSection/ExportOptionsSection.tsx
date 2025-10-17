import React from "react";

const transactions = [
  {
    icon: "/call-received-2.svg",
    title: "Psychology of Money and 2 other products",
    customer: "Dominic Dan",
    amount: "USD 600",
    date: "Apr 03,2022",
  },
  {
    icon: "/call-received-1.svg",
    title: "How to build an online brand",
    customer: "Delvan Ludacris",
    amount: "USD 100",
    date: "Apr 02,2022",
  },
  {
    icon: "/call-received.svg",
    title: "Learn how to pitch your idea and 4 other products",
    customer: "Dujon Jericho",
    amount: "USD 500",
    date: "Apr 02,2022",
  },
];

export const ExportOptionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 w-full">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-start gap-4 w-full">
          <div className="flex-shrink-0 w-12 h-12 bg-trashed-colorsjade100 rounded-3xl flex items-center justify-center">
            <img
              className="w-5 h-5"
              alt="Call received"
              src={transaction.icon}
            />
          </div>

          <div className="flex flex-col flex-1 gap-1 min-w-0">
            <div className="font-degular-paragraph-x-small font-[number:var(--degular-paragraph-x-small-font-weight)] text-[#131316] text-[length:var(--degular-paragraph-x-small-font-size)] tracking-[var(--degular-paragraph-x-small-letter-spacing)] leading-[var(--degular-paragraph-x-small-line-height)] [font-style:var(--degular-paragraph-x-small-font-style)]">
              {transaction.title}
            </div>

            <div className="font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] [font-style:var(--degular-paragraph-XX-small-font-style)]">
              {transaction.customer}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <div className="[font-family:'Degular-Bold',Helvetica] font-bold text-[#131316] text-base text-right tracking-[-0.40px] leading-6 whitespace-nowrap">
              {transaction.amount}
            </div>

            <div className="font-degular-paragraph-XX-small font-[number:var(--degular-paragraph-XX-small-font-weight)] text-[#56616b] text-[length:var(--degular-paragraph-XX-small-font-size)] text-right tracking-[var(--degular-paragraph-XX-small-letter-spacing)] leading-[var(--degular-paragraph-XX-small-line-height)] whitespace-nowrap [font-style:var(--degular-paragraph-XX-small-font-style)]">
              {transaction.date}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
