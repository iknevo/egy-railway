import { motion } from "motion/react";
import { NavLink } from "react-router";

const navLinks = [
  { title: "Home", to: "/home" },
  { title: "Find Trains", to: "/trains" },
  { title: "My Bookings", to: "/reservations" },
];

export default function DesktopNav({ isActive }) {
  return (
    <motion.nav
      className="hidden self-stretch md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="flex items-stretch space-x-1">
        {navLinks.map((item) => (
          <motion.li
            key={item.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="flex items-center"
          >
            <NavLink
              to={item.to}
              className={`rounded-md px-3 py-2 transition-all duration-200 ${isActive(item.to)}`}
            >
              {item.title}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
