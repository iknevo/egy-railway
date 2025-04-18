import { Outlet, useLocation } from "react-router";
import MotionWrapper from "../components/MotionWrapper";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import { Footer, Header } from "../ui";

const DefaultLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />

      {isHomePage ? (
        // For home page - full width layout
        <main className="bg-gray-50">
          <MotionWrapper key={location.pathname}>
            <Outlet />
          </MotionWrapper>
        </main>
      ) : (
        // For non-home pages - two-column layout with sidebar
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 bg-gray-50 p-4 md:p-6">
            <MotionWrapper key={location.pathname}>
              <Outlet />
            </MotionWrapper>
          </main>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DefaultLayout;
