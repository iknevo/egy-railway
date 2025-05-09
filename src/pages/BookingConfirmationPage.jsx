import React from "react";
import { Link } from "react-router";

const BookingConfirmationPage = () => {
  // In a real app, this would come from a successful booking API response
  const bookingDetails = {
    bookingId: "EGR-12345",
    train: "Express 123",
    from: "Cairo",
    to: "Alexandria",
    date: "Wed, 26 Jan 2023",
    departureTime: "09:00",
    arrivalTime: "11:30",
    duration: "2h 30m",
    passenger: "John Doe",
    seat: "A1",
    class: "First",
    total: "$51.25",
  };

  return (
    <div className="mx-auto p-4">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Your train ticket has been booked successfully
          </p>
        </div>

        <div className="mb-6 border-t border-b py-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-semibold">{bookingDetails.bookingId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Passenger:</span>
            <span className="font-semibold">{bookingDetails.passenger}</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold">Journey Details</h2>

          <div className="mb-4 flex items-start">
            <div className="mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">{bookingDetails.date}</p>
            </div>
          </div>

          <div className="mb-4 flex items-start">
            <div className="mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">
                {bookingDetails.departureTime} - {bookingDetails.arrivalTime}
              </p>
              <p className="text-sm text-gray-600">
                Duration: {bookingDetails.duration}
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-start">
            <div className="mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">
                {bookingDetails.from} → {bookingDetails.to}
              </p>
              <p className="text-sm text-gray-600">{bookingDetails.train}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">
                Seat {bookingDetails.seat} ({bookingDetails.class} Class)
              </p>
              <p className="text-sm text-gray-600">
                Total Amount: {bookingDetails.total}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/reservations"
            className="rounded-md bg-cyan-600 px-6 py-2 text-center text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
          >
            View My Reservations
          </Link>
          <Link
            to="/home"
            className="rounded-md border border-gray-300 px-6 py-2 text-center text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
