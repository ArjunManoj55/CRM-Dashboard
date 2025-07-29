import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export default function HomePage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Navbar - stays at top */}
      <Navbar />

      {/* Main layout: sidebar + dashboard content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - fixed height with scroll if needed */}
        <Sidebar />

        {/* Main content area with scrollable dashboard */}
        <div className="flex-1 overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
