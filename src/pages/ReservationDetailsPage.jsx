import { Link, useParams } from "react-router";

const ReservationDetailsPage = () => {
  const { reservationId } = useParams();

  // In a real app, this would come from an API call using the reservationId
  const reservation = {
    id: reservationId,
    train: "Express 123",
    from: "Cairo",
    to: "Alexandria",
    date: "Wed, 26 Jan 2023",
    departureTime: "09:00",
    arrivalTime: "11:30",
    duration: "2h 30m",
    status: "upcoming",
    seat: "A1",
    class: "First",
    platform: "3",
    passenger: {
      name: "John Doe",
      nationalId: "12345678901234",
      email: "john.doe@example.com",
      phone: "+20 123 456 7890",
    },
    payment: {
      amount: "$51.25",
      method: "Visa **** 1234",
      date: "22 Jan 2023",
    },
  };

  return (
    <div className="mx-auto p-4">
      <Link
        to="/reservations"
        className="mb-4 inline-block text-cyan-600 hover:text-cyan-800"
      >
        &larr; Back to My Reservations
      </Link>

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-1 text-2xl font-bold">
                Booking #{reservation.id}
              </h1>
              <div
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  reservation.status === "upcoming"
                    ? "bg-green-100 text-green-800"
                    : reservation.status === "completed"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {reservation.status.charAt(0).toUpperCase() +
                  reservation.status.slice(1)}
              </div>
            </div>

            <div className="text-right">
              <div className="mb-1 text-sm text-gray-600">Booked on</div>
              <div className="font-medium">{reservation.payment.date}</div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Journey Details</h2>

            <div className="mb-4">
              <div className="mb-1 text-sm text-gray-600">Train</div>
              <div className="font-medium">{reservation.train}</div>
            </div>

            <div className="mb-4 flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
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
                <div className="mb-1 text-sm text-gray-600">From</div>
                <div className="font-medium">{reservation.from}</div>
                <div className="mt-1 text-sm text-gray-600">
                  Platform {reservation.platform}
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
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
                <div className="mb-1 text-sm text-gray-600">To</div>
                <div className="font-medium">{reservation.to}</div>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
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
                <div className="mb-1 text-sm text-gray-600">Date</div>
                <div className="font-medium">{reservation.date}</div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
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
                <div className="mb-1 text-sm text-gray-600">Time</div>
                <div className="font-medium">
                  {reservation.departureTime} - {reservation.arrivalTime}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Duration: {reservation.duration}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Passenger Details</h2>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Name</div>
                <div className="font-medium">{reservation.passenger.name}</div>
              </div>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">National ID</div>
                <div className="font-medium">
                  {reservation.passenger.nationalId}
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Email</div>
                <div className="font-medium">{reservation.passenger.email}</div>
              </div>

              <div>
                <div className="mb-1 text-sm text-gray-600">Phone</div>
                <div className="font-medium">{reservation.passenger.phone}</div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Ticket Details</h2>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Class</div>
                <div className="font-medium">{reservation.class} Class</div>
              </div>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Seat</div>
                <div className="font-medium">{reservation.seat}</div>
              </div>

              <div>
                <div className="mb-1 text-sm text-gray-600">Payment</div>
                <div className="font-medium">{reservation.payment.amount}</div>
                <div className="mt-1 text-sm text-gray-600">
                  Paid with {reservation.payment.method}
                </div>
              </div>
            </div>
          </div>
        </div>

        {reservation.status === "upcoming" && (
          <div className="flex justify-center space-x-4">
            <button className="cursor-pointer rounded-md bg-cyan-600 px-6 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none">
              Download Ticket
            </button>
            <button className="cursor-pointer rounded-md border border-red-300 px-6 py-2 text-red-700 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
              Cancel Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationDetailsPage;
