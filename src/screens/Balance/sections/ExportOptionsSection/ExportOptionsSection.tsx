import { useAppData } from "../../../../context/AppDataContext";
import type { Transaction } from "../../../../types/api";
import { formatDateLabel } from "../../../../lib/format";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { cn } from "../../../../lib/utils";

function toStartCase(input: string): string {
  return input
    .replace(/_/g, " ")
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ")
    .trim();
}

function formatUSD(amount: number): string {
  const hasFraction = Math.round(amount * 100) % 100 !== 0;
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: hasFraction ? 2 : 0,
  });
  return `USD ${formatted}`;
}

function mapTransaction(tx: Transaction) {
  const isWithdrawal = tx.type === "withdrawal";

  const icon = isWithdrawal ? (
    <MoveUpRight color="#961100" className="w-5 h-5" strokeWidth={1} />
  ) : (
    <MoveDownLeft className="w-5 h-5" color="#075132" strokeWidth={1} />
  );

  const title = isWithdrawal
    ? "Cash withdrawal"
    : tx.metadata?.product_name
    ? tx.metadata.product_name
    : tx.metadata?.type === "coffee"
    ? "Buy me a coffee"
    : tx.metadata?.type
    ? toStartCase(tx.metadata.type)
    : "Payment";

  const customer = tx.metadata?.name ?? tx.metadata?.email ?? "Payment";

  return {
    icon,
    title,
    customer,
    amount: formatUSD(tx.amount),
    date: formatDateLabel(tx.date),
    type: isWithdrawal ? "withdrawal" : "deposit",
  };
}

export const ExportOptionsSection = (): JSX.Element => {
  const {
    data: { transactions },
  } = useAppData();
  const items = transactions.map(mapTransaction);
  console.log({ transactions, items });

  return (
    <section className="flex flex-col items-start gap-6 w-full mt-2">
      {items.map((transaction, index) => (
        <div key={index} className="flex items-start gap-4 w-full">
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-3xl flex items-center justify-center",
              transaction.type === "deposit" ? "bg-trashed-colorsjade100" : "bg-[#F9E3E0]"
            )}
          >       
            {transaction.icon}
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
