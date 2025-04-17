import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggle } from "../../state/slices/headerSlice";

const mobileMenuLinks = [
  { title: "Home", to: "/home" },
  { title: "Find Trains", to: "/trains" },
  { title: "My Bookings", to: "/reservations" },
  { title: "My Profile", to: "/profile" },
];

export default function MobileMenu({ isActive }) {
  const mobileMenuOpen = useSelector((state) => state.header.mobileMenuOpen);
  const dispatch = useDispatch();

  function handleCloseMenu() {
    dispatch(toggle());
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
      animate={mobileMenuOpen ? "open" : "closed"}
    >
      <motion.div className="space-y-1 pt-2 pb-5">
        {mobileMenuLinks.map((item) => (
          <motion.div variants={itemVariants}>
            <Link
              to={item.to}
              className={`block rounded-md px-3 py-2 ${isActive(item.to)}`}
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
