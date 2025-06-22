import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import supabase from "../../services/supabase";
import Loader from "../../ui/Loader";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { search } = location;
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      const params = new URLSearchParams(search);
      const redirectTo = params.get("redirectTo");

      if (error) {
        console.error("Error getting session:", error.message);
        navigate(redirectTo || "/home", { replace: true });
        return;
      }

      if (session) {
        queryClient.setQueryData(["user"], session.user);
        navigate(redirectTo || "/home", { replace: true });
      } else {
        navigate(redirectTo || "/home", { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate, queryClient, location]);

  return (
    <div className="flex h-dvh items-center justify-center bg-gray-50">
      <Loader />
    </div>
  );
}
