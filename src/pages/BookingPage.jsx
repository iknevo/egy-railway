import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import { useUser } from "../features/Authentication/useUser";

export default function BookingPage() {
  const {
    user: {
      user_metadata: { full_name, email },
    },
  } = useUser();
  const [firstName, lastName] = full_name.split(" ");

  const bookingSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email !")
      .required("This field is required !"),
    firstName: Yup.string().required("This field is required !"),
    lastName: Yup.string().required("This field is required !"),
    phone: Yup.string().matches(
      /^\+?[1-9][0-9]{7,14}$/,
      "Enter a valid phone number !",
    ),
  });

  const formik = useFormik({
    initialValues: {
      email,
      firstName,
      lastName,
    },
    validationSchema: bookingSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Passenger Details
                </h2>
              </div>
              <div className="p-6">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                        <input
                          type="text"
                          name="firstName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-sm font-medium text-red-600">
                          {formik.errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                        <input
                          type="text"
                          name="lastName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-sm font-medium text-red-600">
                          {formik.errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                      <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                      />
                    </label>
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-sm font-medium text-red-600">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                      />
                    </label>
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-sm font-medium text-red-600">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Information
                </h2>
              </div>
              <div className="p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                      placeholder="XXXX XXXX XXXX XXXX"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Booking Summary
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-6 space-y-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Express 123</p>
                      <p className="text-sm text-gray-600">
                        Cairo → Alexandria
                      </p>
                    </div>
                    <div className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">
                      First Class
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Wed, 26 Jan 2023</p>
                    <p>09:00 - 11:30 (2h 30m)</p>
                    <p className="font-medium text-gray-900">Seat A1</p>
                  </div>
                </div>

                <div className="mb-6 space-y-3 border-b border-gray-100 pb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ticket Price</span>
                    <span className="font-medium text-gray-900">$45.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Booking Fee</span>
                    <span className="font-medium text-gray-900">$2.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes</span>
                    <span className="font-medium text-gray-900">$3.75</span>
                  </div>
                </div>

                <div className="mb-6 flex justify-between text-lg">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">$51.25</span>
                </div>

                <Link
                  to="/booking/confirmation"
                  className="block w-full rounded-lg bg-cyan-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
                >
                  Complete Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
