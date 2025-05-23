import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import LoaderMini from "../../ui/LoaderMini.jsx";

import { useState } from "react";
import toast from "react-hot-toast";
import { useLogin } from "./useLogin";
import { useResetPassword } from "./useResetPassword.js";

export default function LoginForm({ onCloseModal }) {
  const { login, isPending: isPendingLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { resetPassword, isPending: isResettingPassword } = useResetPassword();

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleResetPassword(e) {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    resetPassword(email);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }
  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleLogin}>
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="email"
          sx={{
            fontSize: "16px",
            "&.Mui-focused": { color: "#7189FF" },
          }}
        >
          Email
        </InputLabel>
        <OutlinedInput
          required
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          sx={{
            fontSize: "16px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7189FF",
            },
          }}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="password"
          sx={{
            fontSize: "16px",
            "&.Mui-focused": { color: "#7189FF" },
          }}
        >
          Password
        </InputLabel>
        <OutlinedInput
          required
          id="password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            fontSize: "16px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7189FF",
            },
          }}
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "1rem" }}>
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <FaRegEye className="text-2xl" />
                ) : (
                  <FaRegEyeSlash className="text-2xl" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <button
        onClick={handleResetPassword}
        disabled={isResettingPassword}
        className="flex cursor-pointer items-center justify-end gap-2 text-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isResettingPassword ? (
          <>
            <LoaderMini />
            Sending reset email...
          </>
        ) : (
          "Forgot Password?"
        )}
      </button>

      <button className="flex cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 font-semibold text-white">
        {isPendingLogin ? <LoaderMini /> : "Login"}
      </button>
    </form>
  );
}
