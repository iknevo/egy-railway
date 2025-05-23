import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import LoaderMini from "../../ui/LoaderMini";
import { useUpdateUser } from "../profile/useUpdateUser";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function ResetPassword() {
  const navigate = useNavigate();
  const { updateUser, isUpdating } = useUpdateUser();
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="border-b border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Reset Password
          </h2>
          <p className="mt-2 text-lg text-cyan-100">
            Enter your new password below
          </p>
        </div>

        <Formik
          initialValues={{ password: "", passwordConfirm: "" }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting }) => {
            updateUser(
              { password: values.password },
              {
                onSuccess: () => {
                  navigate("/home", { replace: true });
                },
                onError: (error) => {
                  toast.error(error.message);
                },
                onSettled: () => {
                  setSubmitting(false);
                },
              },
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-6 p-8 sm:p-10">
              <FormControl
                variant="outlined"
                className="w-full"
                error={touched.password && Boolean(errors.password)}
              >
                <InputLabel
                  htmlFor="password"
                  sx={{
                    fontSize: "16px",
                    "&.Mui-focused": { color: "#7189FF" },
                  }}
                >
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                          showPassword
                            ? "hide the password"
                            : "display the password"
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
                  label="New Password"
                />
                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </FormControl>

              <FormControl
                variant="outlined"
                className="w-full"
                error={
                  touched.passwordConfirm && Boolean(errors.passwordConfirm)
                }
              >
                <InputLabel
                  htmlFor="passwordConfirm"
                  sx={{
                    fontSize: "16px",
                    "&.Mui-focused": { color: "#7189FF" },
                  }}
                >
                  Confirm New Password
                </InputLabel>
                <OutlinedInput
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPassword ? "text" : "password"}
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                          showPassword
                            ? "hide the password"
                            : "display the password"
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
                  label="Confirm New Password"
                />
                {touched.passwordConfirm && errors.passwordConfirm && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.passwordConfirm}
                  </p>
                )}
              </FormControl>

              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-sm font-medium text-blue-800">
                  Password Requirements:
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-blue-700">
                  <li>At least 8 characters long</li>
                  <li>Contains at least one uppercase letter</li>
                  <li>Contains at least one lowercase letter</li>
                  <li>Contains at least one number</li>
                  <li>Contains at least one special character</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isUpdating}
                className="flex w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 font-semibold text-white transition-all hover:from-cyan-700 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting || isUpdating ? <LoaderMini /> : "Reset Password"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
