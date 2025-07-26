"use client";

import { formatNumber } from "@/lib/number-formatter";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Monthly Transactions",
  },
  desktop: {
    label: "Monthly Transactions ",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", value: 45_000 },
  { month: "February", value: 63_500 },
  { month: "March", value: 58_200 },
  { month: "April", value: 72_800 },
  { month: "May", value: 85_600 },
  { month: "June", value: 92_400 },
  { month: "July", value: 105_200 },
  { month: "August", value: 91_000 },
  { month: "September", value: 97_500 },
  { month: "October", value: 110_800 },
  { month: "November", value: 142_500 },
  { month: "December", value: 168_000 },
];

const DashboardChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="value"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => {
                    const formattedValue = Array.isArray(value)
                      ? value.map((v) => `Rp ${formatNumber(v)}`).join(", ")
                      : `Rp ${formatNumber(value)}`;
                    return ["Ammount: ", formattedValue];
                  }}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
              }
            />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardChart;
