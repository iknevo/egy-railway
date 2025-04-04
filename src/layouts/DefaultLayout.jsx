import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MotionWrapper from "../components/MotionWrapper";
import ScrollTop from "../components/ScrollTop";

const DefaultLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollTop />
      <Header />
      <main className="flex-1 bg-gray-50">
        <AnimatePresence mode="wait">
          <MotionWrapper key={location.pathname}>
            <Outlet />
          </MotionWrapper>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
