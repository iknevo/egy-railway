import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router";
import * as Yup from "yup";
import { useUser } from "../features/Authentication/useUser";
import { useAddReservation } from "../features/reservations/useAddReservation";
import { useTrain } from "../features/trains/useTrain";
import Loader from "../ui/Loader";
import { FEE, STATION_PRICE } from "../utils/constants";
import { formatToEGP } from "../utils/helpers";

export default function BookingPage() {
  const navigate = useNavigate();
  const { trainId } = useParams();
  const { data: train, isLoading: isLoadingTrain } = useTrain(trainId);
  const { mutate: addReservation, isPending } = useAddReservation();
  const {
    user: {
      user_metadata: { full_name, email },
    },
    user,
  } = useUser();
  const [firstName, lastName] = full_name.split(" ");

  const bookingSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email !")
      .required("This field is required !"),
    firstName: Yup.string().required("This field is required !"),
    date: Yup.string().required("This field is required !"),
    lastName: Yup.string().required("This field is required !"),
    numPassengers: Yup.number().required("This field is required !"),
    phone: Yup.string().required("This field is required !"),
    cardNumber: Yup.string().required("Card number is required"),
    expiryDate: Yup.string().required("Expiry date is required"),
    cvv: Yup.string().required("CVV is required"),
    cardholderName: Yup.string().required("Cardholder name is required"),
  });

  const formik = useFormik({
    initialValues: {
      email,
      firstName,
      lastName,
      numPassengers: 1,
      phone: "",
      date: "",
      cardNumber: "4242 4242 4242 4242",
      expiryDate: "12/25",
      cvv: "123",
      cardholderName: `${firstName} ${lastName}`,
    },
    validationSchema: bookingSchema,
    onSubmit: (data) => {
      console.log(data);
      const reservation = {
        firstName: data.firstName,
        lastName: data.lastName,
        numPassengers: data.numPassengers,
        email: data.email,
        totalPrice:
          train.stopin > 0
            ? (train.stopin * STATION_PRICE +
                train.stopin * STATION_PRICE * FEE) *
              data.numPassengers
            : STATION_PRICE + STATION_PRICE * FEE * data.numPassengers,
        date: new Date(data.date).toISOString(),
        trainId,
        userId: user.id,
        phone: data.phone,
      };
      console.log(reservation);
      addReservation(reservation, {
        onSuccess: () => {
          navigate("/reservations");
        },
      });
    },
  });

  if (isLoadingTrain) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Complete Your Booking
            </h1>
            <p className="mt-2 text-gray-600">
              Please fill in your details to complete the booking
            </p>
          </div>
          <Link
            to="/trains"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-cyan-600 shadow-sm transition-all hover:bg-gray-50 hover:text-cyan-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to search
          </Link>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div className="space-y-8 lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  Passenger Details
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Enter your personal information
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
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
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
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
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-sm font-medium text-red-600">
                          {formik.errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Number Of Passengers
                        <input
                          type="number"
                          name="numPassengers"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.numPassengers}
                          min="1"
                          max="6"
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.numPassengers &&
                        formik.errors.numPassengers && (
                          <p className="text-sm font-medium text-red-600">
                            {formik.errors.numPassengers}
                          </p>
                        )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Date
                        <input
                          type="date"
                          name="date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.date}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.date && formik.errors.date && (
                        <p className="text-sm font-medium text-red-600">
                          {formik.errors.date}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                        <input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
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
                          value={formik.values.phone}
                          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        />
                      </label>
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-sm font-medium text-red-600">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Enter your card details securely
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Card Number
                    </label>
                    <div className="relative mt-1">
                      <input
                        type="text"
                        name="cardNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                        className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 pl-12 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {formik.touched.cardNumber && formik.errors.cardNumber && (
                      <p className="mt-1 text-sm font-medium text-red-600">
                        {formik.errors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expiryDate}
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        placeholder="MM/YY"
                      />
                      {formik.touched.expiryDate &&
                        formik.errors.expiryDate && (
                          <p className="mt-1 text-sm font-medium text-red-600">
                            {formik.errors.expiryDate}
                          </p>
                        )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cvv}
                        className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                        placeholder="123"
                      />
                      {formik.touched.cvv && formik.errors.cvv && (
                        <p className="mt-1 text-sm font-medium text-red-600">
                          {formik.errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardholderName}
                      className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                    />
                    {formik.touched.cardholderName &&
                      formik.errors.cardholderName && (
                        <p className="mt-1 text-sm font-medium text-red-600">
                          {formik.errors.cardholderName}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="border-b border-gray-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  Booking Summary
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Review your booking details
                </p>
              </div>
              <div className="p-6">
                <div>
                  {isLoadingTrain ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="mb-6 space-y-4 border-b border-gray-100 pb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">
                              Train {train.trainNumber}
                            </p>
                            <p className="text-sm text-gray-600">
                              {train.trainFrom} → {train.trainTo}
                            </p>
                          </div>
                          <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-medium text-white">
                            {train.level}
                          </div>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>{formik.values.date}</p>
                          <p>
                            {train.go} - {train.arrive} (
                            {train.time.replace(":00", "")} Hours)
                          </p>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                          <p></p>
                          <p>{formik.values.numPassengers} passenger</p>
                        </div>
                      </div>

                      <div className="mb-6 space-y-3 border-b border-gray-100 pb-6">
                        <p className="font-semibold">
                          Price{" "}
                          <span className="text-cyan-500">for 1 passenger</span>
                        </p>
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-gray-600">
                            Ticket Price
                          </span>
                          <span className="font-medium text-gray-900">
                            {formatToEGP(
                              train.stopin > 0
                                ? train.stopin * STATION_PRICE
                                : STATION_PRICE,
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-gray-600">
                            Taxes
                          </span>
                          <span className="font-medium text-gray-900">
                            {formatToEGP(
                              train.stopin > 0
                                ? train.stopin * STATION_PRICE * FEE
                                : STATION_PRICE * FEE,
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6 flex justify-between text-lg">
                        <span className="font-semibold text-gray-900">
                          Total
                        </span>
                        <span className="font-bold text-gray-900">
                          {formatToEGP(
                            train.stopin > 0
                              ? (train.stopin * STATION_PRICE +
                                  train.stopin * STATION_PRICE * FEE) *
                                  formik.values.numPassengers
                              : STATION_PRICE +
                                  STATION_PRICE *
                                    FEE *
                                    formik.values.numPassengers,
                          )}
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={isPending}
                        className="block w-full cursor-pointer rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3.5 text-center font-medium text-white transition-all duration-200 hover:from-cyan-700 hover:to-blue-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isPending ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="mr-2 h-5 w-5 animate-spin"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Complete Booking"
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
