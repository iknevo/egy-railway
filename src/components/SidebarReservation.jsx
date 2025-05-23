import { format } from "date-fns";
import { Link } from "react-router";
import { useTrain } from "../features/trains/useTrain";
import Loader from "../ui/Loader";

export default function SidebarReservation({ reservation }) {
  const { data: train, isLoading } = useTrain(reservation.trainId);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="rounded-lg border border-cyan-100 bg-gradient-to-b from-cyan-50 to-white p-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-medium text-cyan-800">
            {train.trainFrom} → {train.trainTo}
          </div>
          <div className="text-xs text-gray-500">
            Reservation #{reservation.id}
          </div>
        </div>
        <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs text-cyan-800">
          {format(new Date(reservation.date), "dd/MM/yyyy")}
        </span>
      </div>

      <div className="mt-3 flex">
        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-medium">Departure: {train.go}</div>
          <div className="text-xs text-gray-500">
            Train #{train.number} {train.level}
          </div>
          <div className="text-xs text-gray-500">
            {train.time.replace(":00", "")} hours
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <Link
          to={`/reservations/${reservation.id}`}
          className="inline-block rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-cyan-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
