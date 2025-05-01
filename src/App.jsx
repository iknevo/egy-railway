import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactLenis } from "lenis/react";
// import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
// import { newData } from "./data/newData.js";
import router from "./Routes";
// import supabase from "./services/supabase.js";
import "./styles/index.css";
import "./styles/lenis.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  // !for development only

  // const x = newData.map((item) => item.trainFrom);
  // const y = newData.map((item) => item.trainTo);
  // const set = [...new Set(x), ...new Set(y)];
  // const xx = set.map((item) => {
  //   return { name: item };
  // });
  // console.log(xx);
  // useEffect(() => {
  //   async function upload() {
  //     await supabase.from("newStations").insert(xx);
  //   }
  //   upload();
  // }, []);
  // console.log(newData.length);

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
        <RouterProvider router={router} />
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
              backgroundColor: "var(--color-gray-100)",
              color: "var(--color-gray-800)",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} data-lenis-prevent="true" />
      </ReactLenis>
    </QueryClientProvider>
  );
}
