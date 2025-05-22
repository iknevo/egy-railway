import { useState } from "react";
import { FaCalendarCheck, FaUser, FaUserEdit } from "react-icons/fa";
import { FaCircleQuestion, FaLocationDot } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation } from "react-router";
import { defaultUser } from "../assets";
import { useUser } from "../features/Authentication/useUser";
import { useUserReservations } from "../features/reservations/useUserReservations";
import Loader from "../ui/Loader";
import LoaderMini from "../ui/LoaderMini";

const navItems = [
  {
    name: "My Profile",
    path: "/user/profile",
    icon: <FaUser className="text-lg" />,
  },
  {
    name: "Edit Profile",
    path: "/user/editProfile",
    icon: <FaUserEdit className="text-lg" />,
  },
  {
    name: "Update Password",
    path: "/user/password",
    icon: <RiLockPasswordFill className="text-lg" />,
  },
  {
    name: "My Bookings",
    path: "/reservations",
    icon: <FaCalendarCheck className="text-lg" />,
  },
  {
    name: "Find Trains",
    path: "/trains",
    icon: <FaLocationDot className="text-lg" />,
  },
  {
    name: "Help & Support",
    path: "/help",
    icon: <FaCircleQuestion className="text-lg" />,
  },
];
export default function Sidebar() {
  const {
    user,
    user: { user_metadata },
    isLoading: isLoadingUser,
  } = useUser();
  const avatarUrl = user_metadata?.avatar_url || defaultUser;
  const { data: reservations, isLoading: isLoadingReservations } =
    useUserReservations(user.id);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("-translate-x-full");
    }
  };
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-20 right-4 z-40 block rounded-full bg-cyan-600 p-2 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-cyan-700 md:hidden"
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
              <div className="h-10 w-10">
                <div className="h-full w-full overflow-hidden rounded-full bg-white">
                  <img
                    className="h-full w-full"
                    src={avatarUrl}
                    alt="user's avatar"
                  />
                </div>
              </div>

              <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800">
                {user.user_metadata.full_name}
              </h4>
            </div>
            <div className="ml-auto">
              <Link
                to="/user/profile"
                className="rounded-full p-1.5 text-gray-600"
              >
                <LuSettings />
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Trip */}
        <div className="border-b border-gray-200 px-4 py-4">
          <h4 className="mb-3 text-xs font-semibold text-gray-500 uppercase">
            Upcoming Trip
          </h4>
          <div className="rounded-lg border border-cyan-100 bg-gradient-to-b from-cyan-50 to-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-medium text-cyan-800">
                  Cairo → Alexandria
                </div>
                <div className="text-xs text-gray-500">Booking #EGR-12345</div>
              </div>
              <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-800">
                Tomorrow
              </span>
            </div>

            <div className="mt-3 flex">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
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
                className="inline-block rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-cyan-700"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4">
          <h4 className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            Main Menu
          </h4>
          <ul className="space-y-2">
            {isLoadingReservations ? (
              <Loader />
            ) : (
              navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`sidebar-link ${isActive(item.path) ? "active" : ""}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.path === "/reservations" &&
                      reservations.length > 0 && (
                        <span className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-xs font-medium text-white">
                          {isLoadingReservations || isLoadingUser ? (
                            <LoaderMini />
                          ) : (
                            reservations.length
                          )}
                        </span>
                      )}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="rounded-lg bg-cyan-50 p-4">
            <div className="mb-2 flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
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
              <span className="ml-2 font-medium text-cyan-800">Need Help?</span>
            </div>
            <p className="text-sm text-gray-600">
              Contact our support team for assistance with your travel needs.
            </p>
            <button className="mt-2 w-full rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-700">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
