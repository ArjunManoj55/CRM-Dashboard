import React, { useState } from "react";
import {
  Home,
  BarChart3,
  Clock,
  Users,
  Settings,
  MessageSquare,
  Cog,
  Moon,
  Sun,
  Sparkles,
  PieChart,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  const sidebarItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "chart", icon: PieChart, label: "chart" },
    { id: "users", icon: Users, label: "Users" },
    { id: "ai", icon: Sparkles, label: "ai" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "HelpCircle", icon: HelpCircle, label: "HelpCircle" },
    { id: "settings", icon: Cog, label: "Settings" },
  ];

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // Optionally toggle theme in your app
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Scrollable Icon List */}
      <div className="flex-1 flex flex-col items-center py-4 space-y-2">
        {sidebarItems.map((item) => (
          <React.Fragment key={item.id}>
            <button
  onClick={() => setActiveItem(item.id)}
  className={`relative w-full flex justify-center items-center h-12 transition-all duration-200 group ${
    activeItem === item.id
      ? 'bg-gray-100'
      : 'hover:bg-gray-100'
  }`}
>
  {/* Vertical bar on extreme left */}
  {activeItem === item.id && (
    <span className="absolute left-0 top-0 h-full w-[4px] bg-[#7838EB] rounded-r-md" />
  )}

  {/* Icon with conditional color */}
  <item.icon
    className={`w-5 h-5 transition-all duration-200 ${
      activeItem === item.id ? 'text-[#7838EB]' : 'text-gray-500 group-hover:text-gray-700'
    }`}
  />

  {/* Tooltip */}
  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
    {item.label}
  </div>
</button>


            {/* Divider after Users */}
            {item.id === "users" && (
              <div className="w-6 border-t border-gray-300 my-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Section (Dark Mode + AI) */}
      <div className="flex flex-col items-center space-y-2 py-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 group relative"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
