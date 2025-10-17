import React from "react";

const transactions = [
  {
    title: "Psychology of Money",
    subtitle: "Roy Cash",
    amount: "USD 600",
    date: "Apr 03,2022",
    type: "success",
    icon: "/call-received.svg",
  },
  {
    title: "Buy me a coffee",
    subtitle: "Jonathan Smart",
    amount: "USD 100",
    date: "Apr 02,2022",
    type: "success",
    icon: "/call-received.svg",
  },
  {
    title: "How to build an online brand",
    subtitle: "Delvan Ludacris",
    amount: "USD 100",
    date: "Apr 02,2022",
    type: "success",
    icon: "/call-received.svg",
  },
  {
    title: "Cash withdrawal",
    subtitle: "Successful",
    amount: "USD 3000.33",
    date: "Apr 01,2022",
    type: "withdrawal",
    icon: "/call-received-1.svg",
  },
  {
    title: "Support my outreach",
    subtitle: "Shawn Kane",
    amount: "USD 400",
    date: "Apr 02,2022",
    type: "success",
    icon: "/call-received.svg",
  },
  {
    title: "Cash withdrawal",
    subtitle: "Pending",
    amount: "USD 1004.44",
    date: "Apr 01,2022",
    type: "pending",
    icon: "/call-received-2.svg",
  },
  {
    title: "Learn how to pitch your idea",
    subtitle: "Dujon Jericho",
    amount: "USD 500",
    date: "Apr 02,2022",
    type: "success",
    icon: "/call-received.svg",
  },
];

export const TransactionListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-4 w-full">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 px-4 bg-white rounded-lg hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                transaction.type === "success"
                  ? "bg-[#E6F6F4]"
                  : transaction.type === "withdrawal"
                  ? "bg-[#FFF0ED]"
                  : "bg-[#FFF0ED]"
              }`}
            >
              <img
                src={transaction.icon}
                alt=""
                className="w-5 h-5"
              />
            </div>

            <div className="flex flex-col">
              <div className="font-medium text-sm text-[#131316]">
                {transaction.title}
              </div>
              <div
                className={`text-xs ${
                  transaction.subtitle === "Successful"
                    ? "text-green-600"
                    : transaction.subtitle === "Pending"
                    ? "text-yellow-600"
                    : "text-[#56616b]"
                }`}
              >
                {transaction.subtitle}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="font-medium text-sm text-[#131316]">
              {transaction.amount}
            </div>
            <div className="text-xs text-[#56616b]">{transaction.date}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
