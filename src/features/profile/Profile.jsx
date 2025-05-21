import { useState } from "react";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router";
import { defaultUser } from "../../assets";
import Loader from "../../ui/Loader";
import { useLogout } from "../Authentication/useLogout";
import { useUser } from "../Authentication/useUser";

export default function Profile() {
  const { user: { user_metadata } = {}, isLoading } = useUser();
  const avatarUrl = user_metadata?.avatar_url || defaultUser;
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleLogout() {
    navigate("/home");
    logout();
  }

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+20 123 456 7890",
    nationalId: "12345678901234",
    address: "123 Main St, Cairo, Egypt",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the password
    console.log("Password update:", passwordData);
    setIsChangingPassword(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Profile
          </h1>
        </div>
        <button
          onClick={handleLogout}
          disabled={isPending}
          className="mr-12 ml-auto flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:mr-0 sm:text-base"
        >
          <span>Logout</span>
          <ImExit className="text-lg" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Profile Header */}
        <div className="border-b border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg sm:h-32 sm:w-32">
                <img
                  className="h-full w-full object-cover"
                  src={avatarUrl}
                  alt="user's avatar"
                />
              </div>
              {!isEditing && !isChangingPassword && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white p-2 text-cyan-600 shadow-md transition-all hover:bg-gray-50 hover:text-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              )}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {user_metadata.full_name}
              </h2>
              <p className="mt-1 text-cyan-100">{user_metadata.email}</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 sm:p-8">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  National ID
                </label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData(user);
                  }}
                  className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 text-sm font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : isChangingPassword ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm transition-colors focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsChangingPassword(false);
                    setPasswordData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                  }}
                  className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 text-sm font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none sm:text-base"
                >
                  Update Password
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="mt-1 font-medium text-gray-900">{user.phone}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">National ID</p>
                  <p className="mt-1 font-medium text-gray-900">
                    {user.nationalId}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-600">Address</p>
                <p className="mt-1 font-medium text-gray-900">{user.address}</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Account Security
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-600">
                    Keep your account secure by regularly updating your password
                  </p>
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
