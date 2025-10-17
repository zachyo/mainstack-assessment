import React from "react";

export const ChartSection = (): JSX.Element => {
  return (
    <section className="flex-1 bg-white rounded-xl p-6">
      <div className="relative w-full h-[300px]">
        <svg
          viewBox="0 0 600 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 150 Q 75 50 150 100 T 300 80 T 450 120 T 600 180"
            fill="none"
            stroke="#FF6B2C"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute bottom-0 left-0 text-xs text-[#56616b]">
          Apr 1, 2022
        </div>
        <div className="absolute bottom-0 right-0 text-xs text-[#56616b]">
          Apr 30, 2022
        </div>
      </div>
    </section>
  );
};
