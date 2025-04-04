/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { LuSettings } from "react-icons/lu";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("-translate-x-full");
    }
  };

  const isActive = (path) => location.pathname.startsWith(path);
  const isHomePath = location.pathname === "/" || location.pathname === "/home";

  // Animation variants
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // Add CSS for sidebar links
  useEffect(() => {
    // Add CSS for sidebar links if not already in stylesheet
    const style = document.createElement("style");
    style.textContent = `
      .sidebar-link {
        display: flex;
        align-items: center;
        padding: 0.75rem 0.75rem;
        border-radius: 0.375rem;
        color: #4b5563;
        font-size: 0.875rem;
        transition: all 0.2s;
      }

      .sidebar-link svg {
        margin-right: 0.75rem;
      }

      .sidebar-link:hover {
        background-color: #f3f4f6;
        color: #4f46e5;
      }

      .sidebar-link.active {
        background-color: #eef2ff;
        color: #4f46e5;
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Early return if on home page
  if (isHomePath) {
    return null;
  }

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      name: "Find Trains",
      path: "/trains",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "My Bookings",
      path: "/reservations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path
            fillRule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      path: "/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Help & Support",
      path: "/help",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 right-4 z-40 block rounded-full bg-indigo-600 p-2 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 md:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        )}
      </button>

      {/* Sidebar Backdrop (Mobile) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-gray-900/50 backdrop-blur-sm md:hidden"
        ></div>
      )}

      {/* Sidebar as Aside - hidden on mobile, visible on desktop */}
      <aside className="sidebar fixed top-0 bottom-0 left-0 z-40 mt-5 flex w-64 -translate-x-full transform flex-col overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out md:static md:mt-0 md:min-h-screen md:translate-x-0 md:shadow-md">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-gray-200">
          {/* <Link to="/home" className="flex items-center">
            <div className="mr-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">EgyRailway</span>
          </Link> */}
          <button
            onClick={toggleSidebar}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* User Profile Section */}
        <div className="border-b border-gray-200 px-4 py-5 md:py-0">
          <div className="flex items-center">
            <div className="relative mr-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-indigo-400 to-purple-500">
                <div className="h-full w-full p-1">
                  <div className="h-full w-full rounded-full bg-white p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800">
                Ahmed Hassan
              </h4>
            </div>
            <div className="ml-auto">
              <Link to="/profile" className="rounded-full p-1.5 text-gray-600">
                <LuSettings />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-b border-gray-200 px-4 py-4">
          <h4 className="mb-3 text-xs font-semibold text-gray-500 uppercase">
            Travel Statistics
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-blue-50 p-2.5 text-center">
              <div className="text-lg font-bold text-blue-700">12</div>
              <div className="text-xs text-blue-600">Trips Completed</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-2.5 text-center">
              <div className="text-lg font-bold text-purple-700">1,845</div>
              <div className="text-xs text-purple-600">Km Traveled</div>
            </div>
            <div className="rounded-lg bg-green-50 p-2.5 text-center">
              <div className="text-lg font-bold text-green-700">4</div>
              <div className="text-xs text-green-600">Cities Visited</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-2.5 text-center">
              <div className="text-lg font-bold text-amber-700">15%</div>
              <div className="text-xs text-amber-600">Avg. Discount</div>
            </div>
          </div>
        </div>

        {/* Upcoming Trip */}
        <div className="border-b border-gray-200 px-4 py-4">
          <h4 className="mb-3 text-xs font-semibold text-gray-500 uppercase">
            Upcoming Trip
          </h4>
          <div className="rounded-lg border border-indigo-100 bg-gradient-to-b from-indigo-50 to-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-medium text-indigo-800">
                  Cairo → Alexandria
                </div>
                <div className="text-xs text-gray-500">Booking #EGR-12345</div>
              </div>
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-800">
                Tomorrow
              </span>
            </div>

            <div className="mt-3 flex">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-medium">Departure: 09:00 AM</div>
                <div className="text-xs text-gray-500">
                  Platform 3, Car 5, Seat 42A
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <Link
                to="/reservations/EGR-12345"
                className="inline-block rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-grow p-4">
          <h4 className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            Main Menu
          </h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-link ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.path === "/reservations" && (
                    <span className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">
                      2
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="rounded-lg bg-indigo-50 p-4">
            <div className="mb-2 flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-2 font-medium text-indigo-800">
                Need Help?
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Contact our support team for assistance with your travel needs.
            </p>
            <button className="mt-2 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
