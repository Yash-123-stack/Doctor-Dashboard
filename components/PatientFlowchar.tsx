"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:00", patients: 12 },
  { time: "09:00", patients: 22 },
  { time: "12:00", patients: 25 },
  { time: "15:00", patients: 22 },
  { time: "18:00", patients: 34 },
  { time: "21:00", patients: 18 },
];

export default function PatientFlowChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full h-[350px]">
      <div className="mb-4">
        <h6 className="font-bold text-slate-900">Patient Flow (Hourly)</h6>
        <p className="text-gray-500 text-sm">
          Patient inflow trend across the day.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            cursor={{ stroke: "#e5e7eb", strokeWidth: 2 }}
          />

          <Line
            type="monotone"
            dataKey="patients"
            stroke="#3b82f6"
            strokeWidth={4}
            dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
