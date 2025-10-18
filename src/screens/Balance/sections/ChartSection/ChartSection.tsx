import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { date: "Apr 1, 2022", value: 150000 },
  { date: "Apr 5", value: 120000 },
  { date: "Apr 10", value: 180000 },
  { date: "Apr 15", value: 140000 },
  { date: "Apr 20", value: 170000 },
  { date: "Apr 25", value: 160000 },
  { date: "Apr 30, 2022", value: 190000 },
];

export const ChartSection = (): JSX.Element => {
  return (
    <section className="flex-1 bg-white rounded-xl p-6">
      <div className="relative w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#56616b', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              hide 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: number) => [`USD ${value.toLocaleString()}`, 'Revenue']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#FF5403" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};