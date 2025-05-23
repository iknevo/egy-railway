import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import LoaderMini from "./../../ui/LoaderMini.jsx";
import { useSignup } from "./useSignUp.jsx";

export default function SignUpForm({ onCloseModal }) {
  const { signUp, isPending } = useSignup();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleSignup(e) {
    e.preventDefault();
    signUp(
      {
        full_name: name,
        email,
        password,
      },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSignup}>
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="fullName"
          sx={{
            fontSize: "16px",
            "&.Mui-focused": { color: "#7189FF" },
          }}
        >
          Full Name
        </InputLabel>
        <OutlinedInput
          required
          id="fullName"
          type="text"
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
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
      <button className="flex cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 font-semibold text-white">
        {isPending ? <LoaderMini /> : "Signup"}
      </button>
    </form>
  );
}
