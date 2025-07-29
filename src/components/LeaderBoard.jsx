import React, { useEffect, useState } from 'react';
import { Crown, Trophy, Award } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: 'Alaska Young',
      percentage: 95,
      icon: Crown,
      iconColor: 'text-yellow-500',
      progressColor: 'bg-green-500',
    },
    {
      rank: 2,
      name: 'Alex Shotay',
      percentage: 90,
      icon: Trophy,
      iconColor: 'text-gray-500',
      progressColor: 'bg-green-500',
    },
    {
      rank: 3,
      name: 'Mina Lee',
      percentage: 76,
      icon: Award,
      iconColor: 'text-orange-500',
      progressColor: 'bg-orange-500',
    },
    {
      rank: 4,
      name: 'Mesut Ozil',
      percentage: 65,
      progressColor: 'bg-orange-500',
    },
    {
      rank: 5,
      name: 'Kai Havertz',
      percentage: 45,
      progressColor: 'bg-orange-500',
    },
    {
      rank: 6,
      name: 'Emily Rivera',
      percentage: 42,
      progressColor: 'bg-yellow-500',
    },
    {
      rank: 7,
      name: 'Daniel Cruz',
      percentage: 39,
      progressColor: 'bg-yellow-500',
    },
    {
      rank: 8,
      name: 'Sophia Lin',
      percentage: 35,
      progressColor: 'bg-red-500',
    },
    {
      rank: 9,
      name: 'Liam Patel',
      percentage: 28,
      progressColor: 'bg-red-500',
    },
    {
      rank: 10,
      name: 'Noah Kim',
      percentage: 20,
      progressColor: 'bg-red-600',
    },
  ];

  // Hook to trigger animation
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Leaderboard</h3>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-1">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wide pb-3 border-b border-gray-100">
          <div className="col-span-2">RANK</div>
          <div className="col-span-6">NAME</div>
          <div className="col-span-4 text-right">PERCENTAGE</div>
        </div>

        {/* Leaderboard Items */}
        {leaderboardData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.rank} className="grid grid-cols-12 gap-4 items-center py-4">
              {/* Rank with Icon */}
              <div className="col-span-2 flex items-center">
                {item.rank <= 3 && Icon ? (
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                ) : (
                  <span className="text-sm font-medium text-gray-400">#{item.rank}</span>
                )}
              </div>

              {/* Name */}
              <div className="col-span-6">
                <span className="text-sm font-medium text-gray-900">{item.name}</span>
              </div>

              {/* Percentage with Progress Bar */}
              <div className="col-span-4">
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <span className="text-sm font-semibold text-gray-900">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.progressColor} transition-all duration-700 ease-out`}
                      style={{ width: mounted ? `${item.percentage}%` : `0%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
