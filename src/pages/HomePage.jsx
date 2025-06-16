import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import PopularTrains from "../features/trains/PopularTrains";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const featuresRef = useRef(null);
  const routesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-700 to-cyan-700 py-32 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Egyptian train"
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/60"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                Experience Egypt Like Never Before
              </span>
            </motion.div>
            <motion.h1
              className="mt-8 mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              Travel Egypt by Train{" "}
              <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                with Ease
              </span>
            </motion.h1>
            <motion.p
              className="mb-10 text-xl text-white/90"
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
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-medium text-blue-600 shadow-lg transition duration-300 ease-out hover:scale-105"
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
                className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition duration-300 ease-out hover:bg-white/20"
              >
                <span className="relative flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800">
              WHY CHOOSE US
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose EgyRailway?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              We're committed to making your train travel experience in Egypt as
              smooth and enjoyable as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Time-Saving
              </h3>
              <p className="text-gray-600">
                Book your tickets online and avoid long queues at the station,
                saving you valuable time for your journey.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Secure Booking
              </h3>
              <p className="text-gray-600">
                Your payment and personal information are protected with our
                advanced encryption and secure payment systems.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Easy Payment
              </h3>
              <p className="text-gray-600">
                Multiple payment options for your convenience, including credit
                cards, mobile wallets, and more.
              </p>
            </motion.div>

            <motion.div
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Customer support available at all times to assist with your
                travel needs and answer any questions.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => scrollToSection(routesRef)}
              className="group inline-flex cursor-pointer items-center gap-2 text-cyan-600 transition-all duration-300 hover:text-cyan-800"
            >
              <span className="text-lg font-medium">View popular trains</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 transition-all duration-300 group-hover:bg-cyan-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
      <section ref={routesRef} className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800">
              TRAVEL WITH EASE
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Popular Trains
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Discover Egypt's most traveled train routes and top destinations.
              Explore ancient cities and breathtaking landscapes.
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={route.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="relative h-56 overflow-hidden">
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
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {route.from} → {route.to}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        From ${route.price}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/trains"
                    className="group inline-flex items-center gap-2 text-cyan-600 transition-colors hover:text-cyan-800"
                  >
                    View Schedule
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </motion.div>
            ))}
          </div> */}
          <PopularTrains />

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/trains"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-50 px-8 py-4 text-lg font-medium text-cyan-600 transition-all duration-300 hover:bg-cyan-100"
            >
              <span>Book other trains</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-blue-700 py-32 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589551514088-5338efeed04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Egyptian landscape"
            className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/80 to-blue-800/80"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                Egypt by Train?
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
              Book your tickets now and journey through the land of the
              Pharaohs. Experience stunning landscapes and ancient wonders by
              rail.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/trains"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-medium text-cyan-600 shadow-lg transition duration-300 ease-out hover:scale-105"
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
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/30 bg-transparent px-8 py-4 font-medium text-white backdrop-blur-sm transition duration-300 ease-out hover:bg-white/10"
              >
                <span className="relative flex items-center gap-2">
                  View My Bookings
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      </section>
    </div>
  );
}
