import { motion } from "framer-motion";
import { useLocation } from "react-router";
import User from "../../features/Authentication/User";
import Logo from "../../ui/Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path)
      ? "text-blue-600 font-medium"
      : "text-gray-700 hover:text-blue-600";
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-2xl transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav isActive={isActive} />
          <User />
        </div>

        {/* mobile nav menu */}
        <MobileMenu isActive={isActive} />
      </div>
    </motion.header>
  );
}
