import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import Loader from "../ui/Loader";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}
