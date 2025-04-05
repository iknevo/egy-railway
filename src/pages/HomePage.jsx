/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useRef } from "react";
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
        "https://images.unsplash.com/photo-1544815521-80841127c00f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      from: "Alexandria",
      to: "Aswan",
      price: 150,
      duration: "10h 15m",
      image:
        "https://images.unsplash.com/photo-1544815521-80841127c00f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      from: "Hurghada",
      to: "Cairo",
      price: 85,
      duration: "6h 10m",
      image:
        "https://images.unsplash.com/photo-1544815521-80841127c00f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-700 to-cyan-700 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Egyptian train"
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/60"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                Experience Egypt Like Never Before
              </span>
            </motion.div>
            <motion.h1
              className="mt-6 mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              Travel Egypt by Train{" "}
              <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                with Ease
              </span>
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              variants={fadeInUp}
            >
              Book train tickets online, skip the lines, and enjoy your journey
              across the land of the Pharaohs.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Link
                to="/trains"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-8 py-4 font-medium text-blue-600 shadow-lg transition duration-300 ease-out hover:scale-105"
              >
                <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Find Your Train
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md border border-white/40 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition duration-300 ease-out hover:bg-white/20"
              >
                <span className="relative">Learn More</span>
                <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Search Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative -mt-16 rounded-xl bg-white p-8 shadow-2xl lg:p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
              Find Your Train
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="group relative">
                  <label className="absolute -top-2 left-3 inline-block bg-white px-1 text-xs font-medium text-gray-600">
                    From
                  </label>
                  <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 pl-4 shadow-sm transition-all group-hover:border-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
                    <option value="">Select departure station</option>
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Luxor</option>
                    <option>Aswan</option>
                    <option>Hurghada</option>
                  </select>
                </div>
                <div className="group relative">
                  <label className="absolute -top-2 left-3 inline-block bg-white px-1 text-xs font-medium text-gray-600">
                    To
                  </label>
                  <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 pl-4 shadow-sm transition-all group-hover:border-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
                    <option value="">Select arrival station</option>
                    <option>Cairo</option>
                    <option>Alexandria</option>
                    <option>Luxor</option>
                    <option>Aswan</option>
                    <option>Hurghada</option>
                  </select>
                </div>
                <div className="group relative">
                  <label className="absolute -top-2 left-3 inline-block bg-white px-1 text-xs font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 shadow-sm transition-all group-hover:border-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
                <div className="group relative">
                  <label className="absolute -top-2 left-3 inline-block bg-white px-1 text-xs font-medium text-gray-600">
                    Passengers
                  </label>
                  <select className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 pl-4 shadow-sm transition-all group-hover:border-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
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
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-medium text-white shadow-lg transition duration-300 ease-out hover:scale-105"
                >
                  <span className="absolute top-0 left-0 h-full w-full scale-0 rounded-md bg-white/20 transition-all duration-300 group-hover:scale-100"></span>
                  <span className="relative flex items-center">
                    Search
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="scroll-mt-20 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800">
              WHY CHOOSE US
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose EgyRailway?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We're committed to making your train travel experience in Egypt as
              smooth as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
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
              <h3 className="mb-3 text-xl font-bold">Time-Saving</h3>
              <p className="text-gray-600">
                Book your tickets online and avoid long queues at the station,
                saving you valuable time for your journey.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
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
              <h3 className="mb-3 text-xl font-bold">Secure Booking</h3>
              <p className="text-gray-600">
                Your payment and personal information are protected with our
                advanced encryption and secure payment systems.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
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
              <h3 className="mb-3 text-xl font-bold">Easy Payment</h3>
              <p className="text-gray-600">
                Multiple payment options for your convenience, including credit
                cards, mobile wallets, and more.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
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
              <h3 className="mb-3 text-xl font-bold">24/7 Support</h3>
              <p className="text-gray-600">
                Customer support available at all times to assist with your
                travel needs and answer any questions.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => scrollToSection(routesRef)}
              className="group inline-flex items-center gap-2 text-cyan-600 transition-all duration-300 hover:text-cyan-800"
            >
              <span>View popular routes</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 transition-all duration-300 group-hover:bg-cyan-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section ref={routesRef} className="scroll-mt-20 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800">
              TRAVEL WITH EASE
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Popular Routes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover Egypt's most traveled train routes and top destinations.
              Explore ancient cities and breathtaking landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                      </svg>
                      {route.duration} journey
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {route.from} <span className="text-gray-400">→</span>{" "}
                      {route.to}
                    </h3>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">
                      ${route.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4 text-gray-400"
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
                      {route.duration}
                    </div>
                    <Link
                      to="/trains"
                      className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                    >
                      View Schedule
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/trains"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-50 px-6 py-3 text-cyan-600 transition-all duration-300 hover:bg-cyan-100"
            >
              <span>View all routes</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 transition-all duration-300 group-hover:bg-cyan-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-blue-700 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589551514088-5338efeed04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Egyptian landscape"
            className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/80 to-blue-800/80"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                Egypt by Train?
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Book your tickets now and journey through the land of the
              Pharaohs. Experience stunning landscapes and ancient wonders by
              rail.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/trains"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-8 py-4 font-medium text-cyan-600 shadow-lg transition duration-300 ease-out hover:scale-105"
              >
                <span className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Find Your Train
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/reservations"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/30 bg-transparent px-8 py-4 font-medium text-white backdrop-blur-sm transition duration-300 ease-out hover:bg-white/10"
              >
                <span className="relative flex items-center gap-2">
                  View My Bookings
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 left-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
      </section>
    </div>
  );
};

export default HomePage;
