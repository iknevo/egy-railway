import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./Auth.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useFacebookLogin } from "./useFacebookLogin";
import { useGoogleLogin } from "./useGoogleLogin";

export default function Auth({ onCloseModal }) {
  const { googleLogin } = useGoogleLogin();
  const { facebookLogin } = useFacebookLogin();
  const [form, setForm] = useState("login");

  return (
    <div className="relative flex w-full flex-col items-center py-10 md:w-[400px]">
      <div className="mb-10 flex gap-4 text-2xl font-semibold">
        <button
          className="cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed disabled:text-blue-400"
          disabled={form === "login"}
          onClick={() => setForm("login")}
        >
          Login
        </button>
        <span>|</span>
        <button
          className="cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed disabled:text-blue-400"
          disabled={form === "signup"}
          onClick={() => setForm("signup")}
        >
          Register
        </button>
      </div>
      {form === "login" && <LoginForm onCloseModal={onCloseModal} />}
      {form === "signup" && <SignUpForm onCloseModal={onCloseModal} />}

      <div className="self-stretch pt-10 text-center">
        <span className="relative block font-semibold text-gray-500 uppercase">
          <span className="absolute top-1/2 left-0 h-[1px] w-[30%] -translate-y-1/2 bg-gray-300" />
          Or {form === "login" ? "Login" : "Signup"} With
          <span className="absolute top-1/2 right-0 h-[1px] w-[30%] -translate-y-1/2 bg-gray-300" />
        </span>
        <div className="flex flex-col gap-4 pt-5">
          <button
            onClick={googleLogin}
            className="flex cursor-pointer items-center gap-4 rounded-md border-1 border-gray-300 p-4 font-semibold"
          >
            <FcGoogle className="text-3xl" />
            <span>Continue With Google</span>
          </button>
          <button
            onClick={facebookLogin}
            className="flex cursor-pointer items-center gap-4 rounded-md border-1 border-gray-300 p-4 font-semibold"
          >
            <FaFacebookF className="text-3xl text-[#1877f2]" />
            <span>Continue With Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
