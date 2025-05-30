import { FaLock } from "react-icons/fa";
import { HiOutlineHome, HiOutlineLogin } from "react-icons/hi";
import { Link } from "react-router";
import Auth from "../features/Authentication/Auth";
import { useUser } from "../features/Authentication/useUser";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";

function UnauthorizedMessage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 sm:py-12">
      <div className="w-[95%] max-w-4xl overflow-hidden rounded-2xl bg-white p-4 shadow-xl sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col items-center sm:mb-8">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white sm:h-20 sm:w-20">
            <FaLock className="text-2xl sm:text-3xl" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:mb-3 sm:text-3xl md:text-4xl">
            Access Restricted
          </h2>
          <p className="text-center text-base text-gray-600 sm:text-lg">
            This content is only available to registered users. Please log in to
            continue.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex justify-center gap-3">
            <Link
              to="/home"
              className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-700 transition-all hover:bg-gray-50 sm:px-4 sm:py-2"
            >
              <span className="font-semibold">Home</span>
              <HiOutlineHome className="text-xl sm:text-2xl" />
            </Link>
            <Modal>
              <Modal.Open opens="protected-auth">
                <button className="flex cursor-pointer items-center gap-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1.5 font-semibold text-white transition-all hover:from-cyan-700 hover:to-blue-700 sm:px-4 sm:py-2">
                  <span className="font-semibold">Login</span>
                  <HiOutlineLogin className="rotate-180 text-xl sm:text-2xl" />
                </button>
              </Modal.Open>
              <Modal.Window name="protected-auth">
                <div className="pt-6 sm:pt-8 md:pt-10">
                  <Auth />
                </div>
              </Modal.Window>
            </Modal>
          </div>
        </div>

        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="text-center text-xs text-gray-500 sm:text-sm">
            <p className="text-sm sm:text-base">
              By signing in, you agree to our
            </p>
            <div className="mt-2 space-x-2">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Terms of Service
              </a>
              <span>and</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (!user) return <UnauthorizedMessage />;

  return children;
}
