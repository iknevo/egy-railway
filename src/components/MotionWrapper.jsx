import { motion } from "framer-motion";
import { useLocation } from "react-router";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered children animations
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const MotionWrapper = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className={isHomePage ? "" : "p-2"}
    >
      {children}
    </motion.div>
  );
};

// Export named components for more animation options
export const StaggerContainer = ({ children, delay = 0, className = "" }) => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    className={className}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Item for stagger animations
export const StaggerItem = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade in animation component
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default MotionWrapper;
