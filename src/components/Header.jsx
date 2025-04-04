import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { logo } from "../assets";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "text-indigo-600 font-medium"
      : "text-gray-700 hover:text-indigo-600";
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/home" className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <img src={logo} alt="egy railway logo" />
              </div>
              <span className="ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                EgyRailway
              </span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.nav
            className="hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex space-x-1">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/home"
                  className={`rounded-md px-3 py-2 transition-colors duration-200 ${isActive("/home")}`}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/trains"
                  className={`rounded-md px-3 py-2 transition-colors duration-200 ${isActive("/trains")}`}
                >
                  Find Trains
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/reservations"
                  className={`rounded-md px-3 py-2 transition-colors duration-200 ${isActive("/reservations")}`}
                >
                  My Bookings
                </Link>
              </motion.li>
            </ul>
          </motion.nav>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/profile"
              className="group hidden h-10 w-10 overflow-hidden rounded-full bg-indigo-100 p-0.5 text-indigo-600 transition-all duration-300 hover:bg-indigo-200 md:block"
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full p-1.5 text-indigo-600 transition-all duration-300 group-hover:scale-110"
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
              </div>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatedMobileMenu
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          isActive={isActive}
        />
      </div>
    </motion.header>
  );
};

// Animated mobile menu component
const AnimatedMobileMenu = ({ isOpen, setIsOpen, isActive }) => {
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="overflow-hidden md:hidden"
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="space-y-1 pt-2 pb-5">
        <motion.div variants={itemVariants}>
          <Link
            to="/home"
            className={`block rounded-md px-3 py-2 ${isActive("/home")}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            to="/trains"
            className={`block rounded-md px-3 py-2 ${isActive("/trains")}`}
            onClick={() => setIsOpen(false)}
          >
            Find Trains
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            to="/reservations"
            className={`block rounded-md px-3 py-2 ${isActive("/reservations")}`}
            onClick={() => setIsOpen(false)}
          >
            My Bookings
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            to="/profile"
            className={`block rounded-md px-3 py-2 ${isActive("/profile")}`}
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
