import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Tooltip } from "recharts";

const InteractionChart = () => {
  const data = [
    { month: "Feb", Chat: 150, Call: 100 },
    { month: "Mar", Chat: 70, Call: 45 },
    { month: "Apr", Chat: 160, Call: 220 },
    { month: "May", Chat: 40, Call: 70 },
    { month: "Jun", Chat: 190, Call: 45 },
    { month: "Jul", Chat: 65, Call: 85 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Total Interaction
          </h3>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 square-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-600">Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 square-full bg-purple-500"></div>
              <span className="text-sm font-medium text-gray-600">Call</span>
            </div>
          </div>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Team A</option>
            <option>Team B</option>
            <option>Team C</option>
          </select>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, 300]}
              ticks={[0, 50, 100, 200, 300]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
              contentStyle={{
                borderRadius: "8px",
                borderColor: "#E5E7EB",
                fontSize: "14px",
              }}
              labelStyle={{ color: "#6B7280" }}
            />
            <ReferenceLine y={50} stroke="#E5E7EB" />
            <ReferenceLine y={100} stroke="#E5E7EB" />
            <ReferenceLine y={200} stroke="#E5E7EB" />
            <ReferenceLine y={300} stroke="#E5E7EB" />

            <Bar
              dataKey="Chat"
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              dataKey="Call"
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InteractionChart;
