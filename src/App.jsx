import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import router from "./Routes";
import "./styles/global.css";
import "./styles/index.css";
import "./styles/lenis.css";

function App() {
  // !for development only
  // useEffect(() => {
  // async function upload() {
  //   await supabase.from("trains").insert(trains);
  // }
  // upload();
  // console.log(trains.length);
  // }, []);

  useEffect(() => {
    // Initialize Lenis smooth scrolling with enhanced settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1.2,
      normalizeWheel: true, // Normalize wheel speeds
      infinite: false,
    });

    // Handle links with hash for smooth scrolling to anchors
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          lenis.scrollTo(target, { offset: -80 });
        }
      });
    });

    // Create a RAF loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame
    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis when component unmounts
      lenis.destroy();
    };
  }, []);

  console.log("Router:", router);

  return <RouterProvider router={router} />;
}

export default App;
