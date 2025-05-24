import { motion } from "framer-motion";
import { Link } from "react-router";
import { logoSvg } from "../assets";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link to="/home">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img
            className="h-8 w-8 rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12"
            src={logoSvg}
            alt="egy railway logo"
          />
          <span className="mb-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
            EgyRailway
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
