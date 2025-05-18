import { useQueryClient } from "@tanstack/react-query";
import { format, isAfter } from "date-fns";
import { Link } from "react-router";
import { useUser } from "../../features/Authentication/useUser";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Loader from "../../ui/Loader";
import Modal from "../../ui/Modal";
import { useTrain } from "../trains/useTrain";
import { useDeleteReservation } from "./useDeleteReservation";

export default function ReservationItem({ reservation }) {
  const queryClient = useQueryClient();
  const { user, isLoading: isLoadingUser } = useUser();
  const { data: train, isLoading: isLoadingTrain } = useTrain(
    reservation.trainId,
  );
  const { mutate: deleteReservation, isPending: isDeleting } =
    useDeleteReservation();

  const isUpcoming = isAfter(new Date(reservation.date), new Date());

  function handleDelete() {
    deleteReservation(reservation.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["reservations", user.id],
        });
      },
    });
  }

  return isLoadingUser || isLoadingTrain ? (
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
            isUpcoming
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {isUpcoming ? "Upcoming" : "Completed"}
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
          <p className="font-medium">{train.level}</p>
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

        {isUpcoming && (
          <Modal>
            <Modal.Open opens="confirm-delete">
              <button className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed">
                Cancel Booking
              </button>
            </Modal.Open>
            <Modal.Window name="confirm-delete">
              <ConfirmDelete
                resourceName="reservation"
                disabled={isDeleting}
                onConfirm={handleDelete}
              />
            </Modal.Window>
          </Modal>
        )}
      </div>
    </div>
  );
}
