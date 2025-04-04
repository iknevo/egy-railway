import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import router from "./Routes";
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
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
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

  return <RouterProvider router={router} />;
}

export default App;
