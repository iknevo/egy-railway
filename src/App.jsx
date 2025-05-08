import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./Routes";
import "./styles/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
