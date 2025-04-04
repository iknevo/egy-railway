import React, { useRef } from "react";
import { Link } from "react-router";

const HomePage = () => {
  const featuresRef = useRef(null);
  const routesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
    }
  };

  // Sample popular routes data
  const popularRoutes = [
    {
      id: 1,
      from: "Cairo",
      to: "Alexandria",
      price: 45,
      duration: "2h 30m",
      image:
        "https://images.unsplash.com/photo-1544815521-80841127c00f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      from: "Cairo",
      to: "Luxor",
      price: 120,
      duration: "8h 45m",
      image:
        "https://images.unsplash.com/photo-1589809250893-b5a7b7a5a397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      from: "Alexandria",
      to: "Aswan",
      price: 150,
      duration: "10h 15m",
      image:
        "https://images.unsplash.com/photo-1568322953432-0d581db3474f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      from: "Hurghada",
      to: "Cairo",
      price: 85,
      duration: "6h 10m",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Egyptian train"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
              Travel Egypt by Train with Ease
            </h1>
            <p className="mb-8 text-xl">
              Book train tickets online, skip the lines, and enjoy your journey.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/trains"
                className="inline-block rounded-md bg-white px-6 py-3 font-medium text-indigo-700 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 focus:outline-none"
              >
                Find Trains
              </Link>
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="inline-block rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 focus:outline-none"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-indigo-50 p-6 shadow-md lg:p-8">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Find Your Train
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    From
                  </label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none">
                    <option>Select departure station</option>
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Luxor</option>
                    <option>Aswan</option>
                    <option>Hurghada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    To
                  </label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none">
                    <option>Select arrival station</option>
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Luxor</option>
                    <option>Aswan</option>
                    <option>Hurghada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Passengers
                  </label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-6 py-2 text-center text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="scroll-mt-20 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold">
            Why Choose EgyRailway?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            We're committed to making your train travel experience in Egypt as
            smooth as possible.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Time-Saving</h3>
              <p className="text-gray-600">
                Book your tickets online and avoid long queues at the station.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure Booking</h3>
              <p className="text-gray-600">
                Your payment and personal information are protected with our
                secure system.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Payment</h3>
              <p className="text-gray-600">
                Multiple payment options for your convenience, including credit
                cards and mobile wallets.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">
                Customer support available at all times to assist with your
                travel needs.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => scrollToSection(routesRef)}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              View popular routes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section ref={routesRef} className="scroll-mt-20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold">
            Popular Routes
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Discover Egypt's most traveled train routes and top destinations.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularRoutes.map((route) => (
              <div
                key={route.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {route.from} → {route.to}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                    <span>${route.price}</span>
                    <span>{route.duration}</span>
                  </div>
                  <Link
                    to="/trains"
                    className="mt-4 block rounded bg-indigo-600 px-4 py-2 text-center text-sm text-white hover:bg-indigo-700"
                  >
                    View Schedules
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/trains"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              View all routes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Ready to Travel Egypt by Train?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Book your tickets now and experience the beauty of Egypt through its
            railways.
          </p>
          <Link
            to="/trains"
            className="inline-block rounded-md bg-white px-6 py-3 font-medium text-indigo-700 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 focus:outline-none"
          >
            Find Your Train
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
