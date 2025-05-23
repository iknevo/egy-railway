import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import LoaderMini from "../../ui/LoaderMini";
import { useUpdateUser } from "./useUpdateUser";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function UpdatePassword() {
  const { updateUser, isUpdating } = useUpdateUser();
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  const initialValues = {
    password: "",
    passwordConfirm: "",
  };

  function handleSubmit(values, { resetForm }) {
    updateUser(
      { password: values.password },
      {
        onSuccess: () => {
          resetForm();
        },
      },
    );
  }

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="border-b border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Change Password
          </h2>
          <p className="mt-2 text-lg text-cyan-100">
            Update your account password
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={passwordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form className="space-y-10 p-8 sm:p-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <FormControl variant="outlined" className="w-full">
                    <InputLabel
                      htmlFor="password"
                      sx={{
                        fontSize: "18px",
                        "&.Mui-focused": { color: "#0ea5e9" },
                      }}
                    >
                      New Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      autoComplete="new-password"
                      disabled={isUpdating}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      sx={{
                        fontSize: "18px",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0ea5e9",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0ea5e9",
                        },
                      }}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          sx={{ marginRight: "1rem" }}
                        >
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
                              <FaRegEye className="text-2xl text-gray-500" />
                            ) : (
                              <FaRegEyeSlash className="text-2xl text-gray-500" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="New Password"
                    />
                  </FormControl>
                  {errors.password && touched.password && (
                    <p className="text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <FormControl variant="outlined" className="w-full">
                    <InputLabel
                      htmlFor="passwordConfirm"
                      sx={{
                        fontSize: "18px",
                        "&.Mui-focused": { color: "#0ea5e9" },
                      }}
                    >
                      Confirm New Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      disabled={isUpdating}
                      id="passwordConfirm"
                      name="passwordConfirm"
                      type={showPassword ? "text" : "password"}
                      sx={{
                        fontSize: "18px",
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0ea5e9",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0ea5e9",
                        },
                      }}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          sx={{ marginRight: "1rem" }}
                        >
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
                              <FaRegEye className="text-2xl text-gray-500" />
                            ) : (
                              <FaRegEyeSlash className="text-2xl text-gray-500" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm New Password"
                    />
                  </FormControl>
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <p className="text-sm text-red-600">
                      {errors.passwordConfirm}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="cursor-pointer rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isUpdating ? <LoaderMini /> : "Update Password"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
