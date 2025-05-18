import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import Loader from "../ui/Loader";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!user?.role === "authenticated" && !isLoading) {
      setSearchParams({ modal: "auth" });
    }
  }, [user, isLoading, setSearchParams]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (user?.role === "authenticated") return children;
}
