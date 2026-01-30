"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", opd: 52, ipd: 22 },
  { day: "Tue", opd: 61, ipd: 28 },
  { day: "Wed", opd: 58, ipd: 34 },
  { day: "Thu", opd: 70, ipd: 42 },
  { day: "Fri", opd: 66, ipd: 30 },
];

export default function OpdVipdChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full h-[350px] sm:mt-0 mt-4">
      <div className="mb-4">
        <h6 className="font-bold text-slate-900">OPD vs IPD (Week)</h6>
        <p className="text-gray-500 text-sm">
          Comparison of outpatient vs inpatient volume.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="day"
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

          {/* This provides the hover functionality */}
          <Tooltip
            cursor={{ fill: "#f9fafb" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          />

          <Legend
            iconType="circle"
            verticalAlign="bottom"
            align="left"
            wrapperStyle={{ paddingTop: "20px" }}
          />

          {/* Primary Bar (OPD) */}
          <Bar
            dataKey="opd"
            name="OPD"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />

          {/* Secondary Bar (IPD) */}
          <Bar
            dataKey="ipd"
            name="IPD"
            fill="#bfdbfe"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
