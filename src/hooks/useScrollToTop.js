import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const preventScroll = searchParams.get("preventScroll");

    if (pathname !== window.lastPathname && !preventScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    window.lastPathname = pathname;
  }, [pathname, search]);
}
