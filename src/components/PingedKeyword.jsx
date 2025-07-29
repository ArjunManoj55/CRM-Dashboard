import React from "react";

const PingedKeywords = () => {
  const keywordData = [
    {
      keyword: "QTL A",
      Feb: { value: 63, intensity: "medium" },
      Mar: { value: 48, intensity: "medium" },
      Apr: { value: 16, intensity: "very-low" },
      May: { value: 56, intensity: "medium" },
      Jun: { value: 59, intensity: "high" },
      Jul: { value: 59, intensity: "medium" },
    },
    {
      keyword: "QTL B",
      Feb: { value: 38, intensity: "low" },
      Mar: { value: 22, intensity: "very-low" },
      Apr: { value: 44, intensity: "medium" },
      May: { value: 62, intensity: "medium" },
      Jun: { value: 18, intensity: "very-low" },
      Jul: { value: 60, intensity: "medium" },
    },
    {
      keyword: "QTL C",
      Feb: { value: 58, intensity: "medium" },
      Mar: { value: 65, intensity: "high" },
      Apr: { value: 80, intensity: "high" },
      May: { value: 55, intensity: "medium" },
      Jun: { value: 60, intensity: "medium" },
      Jul: { value: 20, intensity: "very-low" },
    },
    {
      keyword: "QTL D",
      Feb: { value: 89, intensity: "very-high" },
      Mar: { value: 62, intensity: "medium" },
      Apr: { value: 88, intensity: "very-high" },
      May: { value: 88, intensity: "very-high" },
      Jun: { value: 40, intensity: "low" },
      Jul: { value: 40, intensity: "low" },
    },
    {
      keyword: "QTL E",
      Feb: { value: 38, intensity: "low" },
      Mar: { value: 22, intensity: "very-low" },
      Apr: { value: 44, intensity: "medium" },
      May: { value: 62, intensity: "medium" },
      Jun: { value: 18, intensity: "very-low" },
      Jul: { value: 60, intensity: "medium" },
    },
  ];

  const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case "very-low":
        return "bg-green-200";
      case "low":
        return "bg-green-300";
      case "medium":
        return "bg-green-400";
      case "high":
        return "bg-green-500";
      case "very-high":
        return "bg-green-600";
      default:
        return "bg-green-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Pinged Keywords
      </h3>
      
      <div className="space-y-3">
        {/* Data rows */}
        {keywordData.map((row) => (
          <div key={row.keyword} className="grid grid-cols-7 gap-3 items-center">
            {/* Keyword label */}
            <div className="text-sm font-medium text-gray-700">
              {row.keyword}
            </div>
            
            {/* Value cells */}
            {months.map((month) => (
              <div
                key={month}
                className={`flex items-center justify-center h-12 rounded-lg text-white text-sm font-semibold ${getIntensityColor(
                  row[month].intensity
                )}`}
              >
                {row[month].value}%
              </div>
            ))}
          </div>
        ))}
        
        {/* Month labels at bottom */}
        <div className="grid grid-cols-7 gap-3 items-center pt-3">
          <div></div> {/* Empty cell for keyword column */}
          {months.map((month) => (
            <div
              key={month}
              className="text-center text-sm text-gray-500 font-medium"
            >
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PingedKeywords;