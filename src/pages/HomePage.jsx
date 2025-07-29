import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export default function HomePage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar*/}
        <Sidebar />

        {/* Main content*/}
        <div className="flex-1 overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
