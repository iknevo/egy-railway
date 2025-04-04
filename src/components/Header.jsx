import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "text-indigo-600 font-medium"
      : "text-gray-700 hover:text-indigo-600";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/50 py-4 shadow-md backdrop-blur-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-indigo-600">
                EgyRailway
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link to="/home" className={`${isActive("/home")}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trains" className={`${isActive("/trains")}`}>
                  Find Trains
                </Link>
              </li>
              <li>
                <Link
                  to="/reservations"
                  className={`${isActive("/reservations")}`}
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              to="/profile"
              className="hidden rounded-full bg-indigo-100 p-2 text-indigo-600 hover:bg-indigo-200 md:block"
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Link
                to="/home"
                className={`block px-3 py-2 ${isActive("/home")}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/trains"
                className={`block px-3 py-2 ${isActive("/trains")}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Trains
              </Link>
              <Link
                to="/reservations"
                className={`block px-3 py-2 ${isActive("/reservations")}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Bookings
              </Link>
              <Link
                to="/profile"
                className={`block px-3 py-2 ${isActive("/profile")}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
