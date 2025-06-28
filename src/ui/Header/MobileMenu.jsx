import { motion } from "motion/react";
import { Link } from "react-router";
import { useMenu } from "../../context/useMenu";

const mobileMenuLinks = [
  { title: "Home", to: "/home" },
  { title: "Find Trains", to: "/trains" },
  { title: "My Bookings", to: "/reservations" },
  { title: "My Profile", to: "/user/profile" },
];

export default function MobileMenu({ isActive }) {
  const { menuOpen, toggleMenu } = useMenu();
  function handleCloseMenu() {
    toggleMenu();
  }

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
      animate={menuOpen ? "open" : "closed"}
    >
      <motion.div className="space-y-0.5 border-t border-gray-100 pt-2 pb-4 sm:space-y-1 sm:pt-3 sm:pb-5">
        {mobileMenuLinks.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Link
              to={item.to}
              className={`block rounded-md px-3 py-2 text-sm sm:text-base ${isActive(item.to)}`}
              onClick={handleCloseMenu}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
