import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./Routes";
import "./styles/global.css";
import "./styles/index.css";
import "./styles/lenis.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function SmoothScrollingConfig() {
  const lenis = useLenis();

  useEffect(() => {
    function handleResize() {
      if (lenis) {
        lenis.stop();
      }
      setTimeout(() => {
        if (lenis) lenis.start();
      }, 100);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [lenis]);
  return null;
}

function App() {
  // !for development only
  // useEffect(() => {
  // async function upload() {
  //   await supabase.from("trains").insert(trains);
  // }
  // upload();
  // console.log(trains.length);
  // }, []);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smooth: true,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     wheelMultiplier: 1.2,
  //     normalizeWheel: true,
  //     infinite: false,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothTouch: false,
          touchMultiplier: 2,
          wheelMultiplier: 1.2,
          infinite: false,
        }}
      >
        <SmoothScrollingConfig />
        <RouterProvider router={router} />;
        <Toaster
          position="bottom-left"
          gutter={12}
          containerStyle={{ marginLeft: "10px" }}
          toastOptions={{
            success: {
              duration: 3 * 1000,
            },
            error: {
              duration: 5 * 1000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "700px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-100)",
              color: "var(--color-grey-800)",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
