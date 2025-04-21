import { Outlet, useLocation } from "react-router";
import useScrollToTop from "../../../green-shop/src/hooks/useScrollToTop";
import MotionWrapper from "../components/MotionWrapper";
import Sidebar from "../components/Sidebar";
import { Footer, Header } from "../ui";

const DefaultLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <Header />

      {isHomePage ? (
        <main className="bg-gray-50">
          <MotionWrapper key={location.pathname}>
            <Outlet />
          </MotionWrapper>
        </main>
      ) : (
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
