import { useEffect } from "react";
import { useLocation } from "react-router";

// This component automatically scrolls to the top when the route changes
const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
