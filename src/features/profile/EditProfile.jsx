import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import LoaderMini from "../../ui/LoaderMini";
import { useUser } from "../Authentication/useUser";
import { useUpdateUser } from "./useUpdateUser";

const profileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
});

export default function EditProfile() {
  const navigate = useNavigate();
  const { updateUser, isUpdating } = useUpdateUser();
  const {
    user: { email, user_metadata: { full_name: currentFullName, phone } = {} },
  } = useUser();

  const initialValues = {
    firstName: currentFullName?.split(" ").at(0) || "",
    lastName: currentFullName?.split(" ").at(1) || "",
    email: email || "",
    phone: phone || "",
    avatar: null,
  };

  function handleSubmit(values) {
    const full_name = `${values.firstName} ${values.lastName}`;
    updateUser(
      { full_name, avatar: values.avatar, phone: values.phone },
      {
        onSuccess: () => {
          navigate("/user/profile");
        },
      },
    );
  }

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="border-b border-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Edit Profile
          </h2>
          <p className="mt-2 text-lg text-cyan-100">
            Update your personal information
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={profileSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="space-y-10 p-8 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <FormControl variant="outlined" className="w-full">
                  <InputLabel
                    htmlFor="firstName"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused": { color: "#0ea5e9" },
                    }}
                  >
                    First Name
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                    }}
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </FormControl>

                <FormControl variant="outlined" className="w-full">
                  <InputLabel
                    htmlFor="lastName"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused": { color: "#0ea5e9" },
                    }}
                  >
                    Last Name
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                    }}
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </FormControl>

                <FormControl variant="outlined" className="w-full">
                  <InputLabel
                    htmlFor="email"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused": { color: "#0ea5e9" },
                    }}
                  >
                    Email Address
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    disabled={true}
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "#f8fafc",
                      },
                    }}
                  />
                </FormControl>

                <FormControl variant="outlined" className="w-full">
                  <InputLabel
                    htmlFor="phone"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused": { color: "#0ea5e9" },
                    }}
                  >
                    Phone Number
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="phone"
                    name="phone"
                    type="text"
                    label="Phone Number"
                    sx={{
                      fontSize: "18px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0ea5e9",
                      },
                    }}
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </FormControl>
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className="relative">
                  <input
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 transition-colors hover:border-cyan-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFieldValue("avatar", e.target.files[0])}
                  />
                  <p className="mt-2 text-base text-gray-500">
                    PNG, JPG or JPEG
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/user/profile")}
                  className="cursor-pointer rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-medium text-white transition-all hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isUpdating ? <LoaderMini /> : "Save Changes"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
