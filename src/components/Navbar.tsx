import  { useState } from "react";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <nav className="bg-white border-b px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-blue-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Search bar */}
          <div className="ml-4 relative w-64 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          {/* Notifications */}
          <div className="relative mr-4">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="text-gray-500 hover:text-blue-900 focus:outline-none relative"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-10 border">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                  Notifications
                </h3>
                <div className="max-h-64 overflow-y-auto">
                  <a
                    href="#"
                    className="block px-4 py-3 hover:bg-gray-100 border-b"
                  >
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          New service request submitted
                        </p>
                        <p className="text-xs text-gray-500">
                          Kigali Heights - 10 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 hover:bg-gray-100 border-b"
                  >
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Project completed
                        </p>
                        <p className="text-xs text-gray-500">
                          Nyagatare Solar Farm - 2 hours ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Maintenance reminder
                        </p>
                        <p className="text-xs text-gray-500">
                          Bank of Kigali - Tomorrow
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block text-center text-sm text-blue-700 font-medium px-4 py-2 hover:bg-gray-100 border-t"
                >
                  View all notifications
                </a>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-sm font-medium">
                JD
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                John Doe
              </span>
              <svg
                className="ml-1 h-4 w-4 text-gray-400 hidden md:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* User dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
