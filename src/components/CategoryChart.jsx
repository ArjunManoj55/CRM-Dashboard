import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
 

const KeywordCategories = () => {
  const data = [
    { name: 'Bakery', value: 32, color: '#8B5CF6' },
    { name: 'Medical', value: 28, color: '#10B981' },
    { name: 'Sport', value: 19, color: '#F59E0B' },
    { name: 'Electronics', value: 12, color: '#EF4444' },
    { name: 'Other', value: 9, color: '#9CA3AF' }
  ];

  const leftCategories = [
    { name: 'Bakery', percentage: 32, color: '#8B5CF6' },
    { name: 'Gift', percentage: 22, color: '#A855F7' },
    { name: 'Fashion', percentage: 18, color: '#C084FC' },
    { name: 'Games', percentage: 16, color: '#DDD6FE' }
  ];

  const rightCategories = [
    { name: 'Medical', percentage: 28, color: '#10B981' },
    { name: 'Sport', percentage: 19, color: '#34D399' },
    { name: 'Electronics', percentage: 12, color: '#6EE7B7' },
    { name: 'Other', percentage: 8, color: '#9CA3AF' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-gray-900">Keyword Categories</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
          <option>Team A</option>
          <option>Team B</option>
          <option>Team C</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-8 items-center">
        {/* Left div */}
        <div className="space-y-6 mt-8">
          {leftCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
                <span className="text-sm font-semibold text-gray-900">{category.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300" 
                  style={{ 
                    backgroundColor: category.color,
                    width: `${(category.percentage / 35) * 100}%` // Normalize to make bars look proportional
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Center - Pie Chart */}
        <div className="flex justify-center mt-12">
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xs text-gray-500 mb-1">Total</div>
              <div className="text-3xl font-bold text-gray-900">97%</div>
            </div>
          </div>
        </div>

        {/* Right Column - div */}
        <div className="space-y-6 mt-8">
          {rightCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
                <span className="text-sm font-semibold text-gray-900">{category.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300" 
                  style={{ 
                    backgroundColor: category.color,
                    width: `${(category.percentage / 30) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeywordCategories;