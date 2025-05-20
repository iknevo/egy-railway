import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
