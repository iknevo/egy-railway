import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "../../services/supabase";
import Loader from "../../ui/Loader";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error getting session:", error.message);
        navigate("/home", { replace: true });
        return;
      }

      if (data?.session) {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (userError) {
          console.error("Error getting user:", userError.message);
          navigate("/home", { replace: true });
          return;
        }

        if (userData?.user) {
          queryClient.setQueryData(["user"], userData.user);

          navigate("/home", { replace: true });
        }
      } else {
        navigate("/home", { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate, queryClient]);

  return (
    <div className="flex h-dvh items-center justify-center bg-gray-50">
      <Loader />
    </div>
  );
}
