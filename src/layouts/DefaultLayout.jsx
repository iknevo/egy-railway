import React from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import MotionWrapper from "../components/MotionWrapper";
import Sidebar from "../components/Sidebar";
import useScrollToTop from "../hooks/useScrollToTop";

const DefaultLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      {/* <ScrollTop /> */}
      <Header />

      {isHomePage ? (
        // For home page - full width layout
        <main className="flex-1 bg-gray-50">
          <MotionWrapper key={location.pathname}>
            <Outlet />
          </MotionWrapper>
        </main>
      ) : (
        // For non-home pages - two-column layout with sidebar
        <div className="flex flex-1 flex-col md:flex-row">
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
