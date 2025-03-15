import React, { useState } from 'react';
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  name: string;
  label: string;
  icon: JSX.Element;
  submenu?: { name: string; label: string }[];
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
   const [activeItem, setActiveItem] = useState<string>("dashboard");
   const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
     projects: false,
     customers: false,
     reports: false,
   });

  const handleMenuToggle = (menu: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

   const menuItems: MenuItem[] = [
     {
       name: "dashboard",
       label: "Dashboard",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
           ></path>
         </svg>
       ),
     },
     {
       name: "projects",
       label: "Projects",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
           ></path>
         </svg>
       ),
       submenu: [
         { name: "active-projects", label: "Active Projects" },
         { name: "completed-projects", label: "Completed Projects" },
         { name: "project-timeline", label: "Project Timeline" },
         { name: "add-project", label: "Add New Project" },
       ],
     },
     {
       name: "customers",
       label: "Customers",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
           ></path>
         </svg>
       ),
       submenu: [
         { name: "customer-list", label: "Customer List" },
         { name: "customer-inquiries", label: "Inquiries" },
         { name: "add-customer", label: "Add New Customer" },
       ],
     },
     {
       name: "inventory",
       label: "Inventory",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
           ></path>
         </svg>
       ),
     },
     {
       name: "staff",
       label: "Staff Management",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
           ></path>
         </svg>
       ),
     },
     {
       name: "finance",
       label: "Finance",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
           ></path>
         </svg>
       ),
     },
     {
       name: "reports",
       label: "Reports",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
           ></path>
         </svg>
       ),
       submenu: [
         { name: "financial-reports", label: "Financial Reports" },
         { name: "project-reports", label: "Project Reports" },
         { name: "staff-performance", label: "Staff Performance" },
         { name: "inventory-reports", label: "Inventory Reports" },
       ],
     },
     {
       name: "settings",
       label: "Settings",
       icon: (
         <svg
           className="w-5 h-5"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
           ></path>
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
           ></path>
         </svg>
       ),
     },
   ];

  return (
    <div
      className={`h-screen bg-blue-900 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } fixed left-0 top-0 z-40`}
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        {isOpen ? (
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">E</span>
            </div>
            <div className="font-bold text-white">Electroline</div>
          </div>
        ) : (
          <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-blue-900 font-bold text-sm">E</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            ></path>
          </svg>
        </button>
      </div>

      <div className="py-4 overflow-y-auto h-full">
        <div className="mt-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => {
                  setActiveItem(item.name);
                  if (item.submenu) {
                    handleMenuToggle(item.name);
                  }
                }}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeItem === item.name ? "bg-blue-800" : "hover:bg-blue-800"
                } transition-colors duration-200`}
              >
                <div className="flex items-center">
                  <span className="text-blue-200">{item.icon}</span>
                  {isOpen && <span className="ml-3">{item.label}</span>}
                </div>
                {isOpen && item.submenu && (
                  <span className="ml-auto">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMenus[item.name] ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>

              {isOpen && item.submenu && expandedMenus[item.name] && (
                <div className="bg-blue-950 py-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => setActiveItem(subItem.name)}
                      className={`flex items-center w-full pl-12 pr-4 py-2 text-left text-sm ${
                        activeItem === subItem.name
                          ? "bg-blue-800"
                          : "hover:bg-blue-800"
                      } transition-colors duration-200`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full border-t border-blue-800 p-4">
        {isOpen ? (
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
              AR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-blue-300">
                admin@electroline.rw
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xs">
              AR
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;

