import React, { ReactNode, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-white p-4 border-t">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Electroline Rwanda Ltd. All rights
            reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
