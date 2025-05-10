"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/ui/chart";

const data = [
  {
    name: "Ýanwar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Fewral",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mart",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aprel",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Maý",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Iýun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Iýul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Awgust",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sentaýbr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oktýabr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Noýabr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dekabr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  return (
    <ChartContainer
      config={{
        total: {
          label: "Total",
          color: "#22c55e",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `M${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="total"
            fill="var(--color-total)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
