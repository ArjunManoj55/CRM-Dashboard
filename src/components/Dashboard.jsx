import React from "react";
import StatsCards from "./StatsCards";
import Leaderboard from "./Leaderboard";
import InteractionChart from "./Chart";
import PingedKeywords from "./PingedKeyword";
import KeywordCategories from "./CategoryChart";
import { Calendar, Filter } from "lucide-react";

const Dashboard = () => {
  return (
    <main className="p-6 bg-gray-50 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h3 className="text-lg font-semibold text-gray-900">DASHBOARD</h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-100">
            <Calendar className="w-4 h-4" />
            Date Range
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-100">
            <Filter className="w-4 h-4" />
            Filter by Team
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
        {/* 3 cards + Chart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:col-span-3">
          <StatsCards />
          <div className="xl:col-span-3 mt-4">
            <InteractionChart />
          </div>
        </div>

        {/* Leaderboard */}
        <div className="xl:col-span-1">
          <div className="h-[575px] overflow-y-auto rounded-xl shadow-sm bg-white p-4">
            <Leaderboard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <PingedKeywords />
        <KeywordCategories />
      </div>
    </main>
  );
};

export default Dashboard;
