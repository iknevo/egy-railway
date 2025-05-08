import { Outlet } from "react-router";
import MotionWrapper from "../components/MotionWrapper";
import useScrollToTop from "../hooks/useScrollToTop";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        <MotionWrapper key={location.pathname}>
          <Outlet />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
