import { isAfter } from "date-fns";
import { Link } from "react-router";
import Sidebar from "../components/Sidebar";
import { useUser } from "../features/Authentication/useUser";
import ReservationItem from "../features/reservations/ReservationItem";
import { useUserReservations } from "../features/reservations/useUserReservations";
import Loader from "../ui/Loader";

export default function MyReservationsPage() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { data: reservations = [], isLoading: isLoadingReservations } =
    useUserReservations(user?.id);

  const upcomingReservations = reservations.filter((reservation) =>
    isAfter(new Date(reservation.date), new Date()),
  );

  const pastReservations = reservations.filter(
    (reservation) => !isAfter(new Date(reservation.date), new Date()),
  );

  return isLoadingReservations || isLoadingUser ? (
    <Loader />
  ) : (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 md:p-6">
        <h1 className="mb-4 text-2xl font-bold">My Reservations</h1>

        {upcomingReservations.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              Upcoming Trips ({upcomingReservations.length})
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {upcomingReservations.map((reservation) => (
                <ReservationItem
                  key={reservation.id}
                  reservation={reservation}
                />
              ))}
            </div>
          </div>
        )}

        {pastReservations.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Past Trips ({pastReservations.length})
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {pastReservations.map((reservation) => (
                <ReservationItem
                  key={reservation.id}
                  reservation={reservation}
                />
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
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
            >
              Book a Train
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
