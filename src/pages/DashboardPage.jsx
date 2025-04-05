// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router";
import { StaggerContainer, StaggerItem } from "../components/MotionWrapper";

const DashboardPage = () => {
  // Add logging to check if component is rendering
  useEffect(() => {
    console.log("DashboardPage rendered");
  }, []);

  // Mock data for dashboard
  const upcomingTrips = [
    {
      id: "EGR-12345",
      from: "Cairo",
      to: "Alexandria",
      date: "Tomorrow, 26 Jan",
      time: "09:00 AM",
      status: "Confirmed",
      platform: "3",
      car: "5",
      seat: "42A",
    },
    {
      id: "EGR-12346",
      from: "Alexandria",
      to: "Cairo",
      date: "29 Jan 2023",
      time: "04:30 PM",
      status: "Confirmed",
      platform: "2",
      car: "3",
      seat: "15B",
    },
  ];

  const quickStats = [
    {
      label: "Trips Completed",
      value: "12",
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      label: "Loyalty Points",
      value: "1,250",
      icon: (
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-amber-500",
    },
    {
      label: "Distance",
      value: "1,845 km",
      icon: (
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      label: "Savings",
      value: "₹1,250",
      icon: (
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
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <StaggerContainer className="mb-8">
        <StaggerItem>
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Dashboard</h1>
        </StaggerItem>

        <StaggerItem>
          <div className="mb-8 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium opacity-75">Welcome back</p>
                <h2 className="text-2xl font-bold">Ahmed Hassan</h2>
                <p className="mt-1">Premium Member · Gold Status</p>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-75">Membership Number</div>
                <div className="font-mono text-xl">EGR-58495</div>
              </div>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex items-center rounded-lg bg-white p-6 shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`rounded-lg p-4 ${stat.color} mr-4 text-white`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Upcoming Trips
              </h2>
              <Link
                to="/reservations"
                className="text-sm font-medium text-cyan-600 hover:text-cyan-800"
              >
                View All
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow">
              {upcomingTrips.map((trip, index) => (
                <div
                  key={trip.id}
                  className={`p-6 ${
                    index !== upcomingTrips.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-800">
                          {trip.from} → {trip.to}
                        </div>
                        <div className="text-sm text-gray-600">
                          {trip.date} · {trip.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="mr-6 text-right">
                        <div className="text-sm text-gray-500">Booking ID</div>
                        <div className="font-medium text-gray-800">
                          {trip.id}
                        </div>
                      </div>
                      <Link
                        to={`/reservations/${trip.id}`}
                        className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
                      >
                        Details
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-sm">
                    <div className="mr-6 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Platform {trip.platform}
                      </span>
                    </div>
                    <div className="mr-6 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">Car {trip.car}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7z" />
                        <path d="M4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      <span className="text-gray-600">Seat {trip.seat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/trains"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Book New Trip
              </Link>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mb-8 rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Recent Activity
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Booking Confirmed</p>
                  <p className="text-sm text-gray-600">
                    Your booking from Alexandria to Cairo has been confirmed.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">3 days ago</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Loyalty Points Added
                  </p>
                  <p className="text-sm text-gray-600">
                    You've earned 150 loyalty points from your last trip.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">1 week ago</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Trip Completed</p>
                  <p className="text-sm text-gray-600">
                    Your trip from Cairo to Alexandria has been completed
                    successfully.
                  </p>
                  <p className="mt-1 text-xs text-gray-500">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};

export default DashboardPage;
