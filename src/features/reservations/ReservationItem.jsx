import { format, formatDistance } from "date-fns";
import { Link } from "react-router";
import Loader from "../../ui/Loader";
import { useTrain } from "../trains/useTrain";

export default function ReservationItem({ reservation }) {
  console.log(reservation);
  const { data: train, isLoading } = useTrain(reservation.trainId);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">
            {train.trainFrom} → {train.trainTo}
          </h3>
          <p>
            Train {train.number} {train.level}
          </p>
        </div>
        <div
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            reservation.status === "upcoming"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {/* {reservation.status === "upcoming" ? "Upcoming" : "Completed"} */}
          {
            formatDistance(new Date(reservation.date), new Date(), {
              addSuffix: false,
            })
            // .replace("about ", "")
            // .replace("in", "In")
            // .replace("days", "")
            // .replace("day", "")
            // .replace("hours", "")
            // .replace("hour", "")
            // .replace("minutes", "")
            // .replace("minute", "")
            // .replace("seconds", "")
            // .replace("second", "")
          }
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-gray-600">Date</p>
          <p className="font-medium">
            {format(new Date(reservation.date), "EEE, MMM dd yyyy")}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Time</p>
          <p className="font-medium">
            {train.go} - {train.arrive}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Class</p>
          <p className="font-medium">
            {/* {reservation.seat} ({reservation.class} Class) */}
            {train.level}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Reservation ID</p>
          <p className="font-medium">{reservation.id}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <Link
          to={`/reservations/${reservation.id}`}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          View Details
        </Link>

        {reservation.status === "upcoming" && (
          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none">
            Cancel Booking
          </button>
        )}
      </div>
    </div>
  );
}
