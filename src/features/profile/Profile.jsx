import { Avatar } from "@mui/material";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import Loader from "../../ui/Loader";
import LoaderMini from "../../ui/LoaderMini";
import { useLogout } from "../Authentication/useLogout";
import { useUser } from "../Authentication/useUser";

export default function Profile() {
  const {
    user: { user_metadata },
    isLoading,
  } = useUser();

  const avatarUrl = user_metadata?.avatar_url;
  const { logout, isPending: isLoggingOut } = useLogout();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="border-b border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Profile</h2>
          <p className="mt-2 text-lg text-cyan-100">
            Manage your account settings
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-8 flex items-center gap-6">
            <div className="h-16 w-16 overflow-hidden rounded-full md:h-24 md:w-24">
              <Avatar
                alt={user_metadata.full_name}
                src={avatarUrl}
                sx={{ width: `100%`, height: `100%` }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 md:text-2xl">
                {user_metadata.full_name}
              </h3>
              <p className="text-base text-gray-600 md:text-lg">
                {user_metadata?.email}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-4 text-lg font-medium text-gray-900">
                  Personal Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">First Name</p>
                    <p className="text-lg font-medium text-gray-900">
                      {user_metadata?.full_name.split(" ").at(0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Name</p>
                    <p className="text-lg font-medium text-gray-900">
                      {user_metadata?.full_name.split(" ").at(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium text-gray-900">
                      {user_metadata?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="text-lg font-medium text-gray-900">
                      {user_metadata?.phone || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-4 text-lg font-medium text-gray-900">
                  Account Settings
                </h4>
                <div className="space-y-4">
                  <button
                    onClick={() => navigate("/user/editProfile")}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                  >
                    <FaUserEdit className="text-xl" />
                    Edit Profile
                  </button>
                  <button
                    onClick={() => navigate("/user/password")}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                  >
                    {/* <FaKey className="text-xl" /> */}
                    <RiLockPasswordFill className="text-xl" />
                    Change Password
                  </button>
                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-6 py-3 text-base font-medium text-red-600 transition-colors hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoggingOut ? (
                      <LoaderMini />
                    ) : (
                      <>
                        <FaSignOutAlt className="text-xl" />
                        Logout
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
