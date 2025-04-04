import { Link } from "react-router";

const MyReservationsPage = () => {
  // In a real app, this would come from an API call
  const reservations = [
    {
      id: "EGR-12345",
      train: "Express 123",
      from: "Cairo",
      to: "Alexandria",
      date: "Wed, 26 Jan 2023",
      departureTime: "09:00",
      arrivalTime: "11:30",
      status: "upcoming",
      seat: "A1",
      class: "First",
    },
    {
      id: "EGR-12346",
      train: "Express 456",
      from: "Cairo",
      to: "Luxor",
      date: "Fri, 28 Jan 2023",
      departureTime: "10:00",
      arrivalTime: "17:30",
      status: "upcoming",
      seat: "B3",
      class: "Second",
    },
    {
      id: "EGR-12347",
      train: "Express 789",
      from: "Alexandria",
      to: "Cairo",
      date: "Mon, 10 Jan 2023",
      departureTime: "14:00",
      arrivalTime: "16:30",
      status: "completed",
      seat: "C4",
      class: "First",
    },
  ];

  const upcomingReservations = reservations.filter(
    (r) => r.status === "upcoming",
  );
  const pastReservations = reservations.filter((r) => r.status === "completed");

  const ReservationCard = ({ reservation }) => (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">
            {reservation.from} → {reservation.to}
          </h3>
          <p className="text-gray-600">{reservation.train}</p>
        </div>
        <div
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            reservation.status === "upcoming"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {reservation.status === "upcoming" ? "Upcoming" : "Completed"}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-gray-600">Date</p>
          <p className="font-medium">{reservation.date}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Time</p>
          <p className="font-medium">
            {reservation.departureTime} - {reservation.arrivalTime}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Seat</p>
          <p className="font-medium">
            {reservation.seat} ({reservation.class} Class)
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Booking ID</p>
          <p className="font-medium">{reservation.id}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <Link
          to={`/reservations/${reservation.id}`}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          View Details
        </Link>

        {reservation.status === "upcoming" && (
          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
            Cancel Booking
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">My Reservations</h1>

      {upcomingReservations.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Upcoming Trips</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {upcomingReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </div>
        </div>
      )}

      {pastReservations.length > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold">Past Trips</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {pastReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </div>
        </div>
      )}

      {reservations.length === 0 && (
        <div className="py-12 text-center">
          <div className="mb-4 text-gray-500">
            You don't have any reservations yet.
          </div>
          <Link
            to="/trains"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            Book a Train
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyReservationsPage;
