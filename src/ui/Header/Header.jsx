import { useLocation } from "react-router";
import User from "../../features/Authentication/User";
import { Logo } from "../../ui";
import DesktopNav from "./DeskTopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path)
      ? "text-blue-600 font-medium"
      : "text-gray-700 hover:text-blue-600";
  }
  return (
    <header
      className={`sticky top-0 z-9999 w-full bg-white/80 shadow-md backdrop-blur-2xl transition-all duration-300`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Logo />
          <DesktopNav isActive={isActive} />
          <User />
        </div>

        <MobileMenu isActive={isActive} />
      </div>
    </header>
  );
}
