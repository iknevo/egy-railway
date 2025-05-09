import { Outlet } from "react-router";
import MotionWrapper from "../components/MotionWrapper";
import useScrollToTop from "../hooks/useScrollToTop";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 shrink-0 bg-gray-50">
        <MotionWrapper key={location.pathname}>
          <Outlet />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
