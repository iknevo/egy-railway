import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggle } from "../../state/slices/headerSlice";
import LoaderMini from "../../ui/LoaderMini";
import LoginButton from "./LoginButton";
import { useUser } from "./useUser";

export default function User() {
  const mobileMenuOpen = useSelector((state) => state.header.mobileMenuOpen);
  const dispatch = useDispatch();
  const { user, isLoading } = useUser();

  function handleToggle() {
    dispatch(toggle());
  }

  return (
    <motion.div
      className="flex items-center gap-1.5 sm:gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {isLoading && <LoaderMini />}
      {!user && !isLoading && <LoginButton />}

      {user && (
        <Link
          to="/user"
          className="group hidden h-8 w-8 overflow-hidden rounded-full bg-blue-100 p-0.5 text-cyan-600 transition-all duration-300 hover:bg-blue-200 sm:h-9 sm:w-9 md:block md:h-10 md:w-10"
        >
          <div className="h-full w-full overflow-hidden rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full p-1.5 text-blue-600 transition-all duration-300 group-hover:scale-110"
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
      )}

      {/* Mobile menu button */}
      <motion.button
        onClick={handleToggle}
        className="ml-1.5 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 sm:ml-2 sm:p-2 md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
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
  );
}
