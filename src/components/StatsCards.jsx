import React, { useState } from 'react';
import { DollarSign, Flag, BarChart3 } from 'lucide-react';

const StatsCards = () => {
  const [selectedCardId, setSelectedCardId] = useState(1);

  const stats = [
    {
      id: 1,
      title: 'Total Return',
      value: '$4,672.20',
      change: '+27%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      id: 2,
      title: 'Total Flagged Calls',
      value: '204,765',
      change: '+32%',
      changeType: 'positive',
      icon: Flag,
    },
    {
      id: 3,
      title: 'Total Interaction',
      value: '12,045',
      change: '-16%',
      changeType: 'negative',
      icon: BarChart3,
    },
  ];

  return (
    <>
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isSelected = stat.id === selectedCardId;

        const bgColor = isSelected
          ? 'bg-gradient-to-br from-purple-600 to-purple-700'
          : 'bg-white';

        const textColor = isSelected ? 'text-white' : 'text-gray-900';

        return (
          <div
            key={stat.id}
            onClick={() => setSelectedCardId(stat.id)}
            className={`${bgColor} rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                  <p className={`text-sm font-medium ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
                    {stat.title}
                  </p>
                </div>

                <div className="flex items-end gap-3">
                  <h3 className={`text-3xl font-bold ${textColor}`}>{stat.value}</h3>
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      stat.changeType === 'positive'
                        ? isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-green-100 text-green-700'
                        : isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StatsCards;
