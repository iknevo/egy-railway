import { useState } from "react";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import { useLogout } from "../features/Authentication/useLogout";
import { useUser } from "../features/Authentication/useUser";
import Loader from "../ui/Loader";

export default function ProfilePage() {
  const { user: { user_metadata } = {}, isLoading } = useUser();
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
    // In a real app, you would send this data to your backend
  };

  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 md:p-6">
        <h1 className="mb-6 text-2xl font-bold">My Profile</h1>

        <div className="mx-auto rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-cyan-100 text-xl font-bold text-cyan-600">
                {!user_metadata.avatar_url ? (
                  <span>
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </span>
                ) : (
                  <img
                    className="h-full w-full"
                    src={user_metadata.avatar_url}
                    alt="user's avatar"
                  />
                )}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">
                  {user_metadata.full_name}
                </h2>
                <p className="text-gray-600">{user_metadata.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                >
                  Edit Profile
                </button>
              )}

              <button
                onClick={handleLogout}
                disabled={isPending}
                className="flex cursor-pointer items-center gap-4 rounded-md bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 font-semibold text-white"
              >
                <span className="font-semibold">Logout</span>
                <ImExit className="text-2xl" />
              </button>
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
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
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
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
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData(user);
                  }}
                  className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">National ID</p>
                  <p className="font-medium">{user.nationalId}</p>
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="mb-2 text-lg font-semibold">Account Security</h3>
                <div className="flex items-center justify-between">
                  <button className="text-cyan-600 hover:text-cyan-800">
                    Change Password
                  </button>
                  {/* <button
                    onClick={handleLogout}
                    disabled={isPending}
                    className="flex cursor-pointer items-center gap-4 rounded-md bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 font-semibold text-white"
                  >
                    <span className="font-semibold">Logout</span>
                    <ImExit className="text-2xl" />
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
