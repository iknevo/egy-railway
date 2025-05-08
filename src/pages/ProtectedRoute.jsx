import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import Loader from "../ui/Loader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      setSearchParams({ modal: "auth" });
    }
  }, [isAuthenticated, isLoading, setSearchParams]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}
