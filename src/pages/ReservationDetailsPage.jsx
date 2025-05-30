import { useQueryClient } from "@tanstack/react-query";
import { format, isAfter } from "date-fns";
import { Link, useNavigate, useParams } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import { useDeleteReservation } from "../features/reservations/useDeleteReservation";
import { useReservation } from "../features/reservations/useReservation";
import { useTrain } from "../features/trains/useTrain";
import ConfirmDelete from "../ui/ConfirmDelete";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";
import { formatToEGP } from "../utils/helpers";
import DownloadTicket from "../components/DownloadTicket";

export default function ReservationDetailsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { reservationId } = useParams();

  const { user, isLoading: isLoadingUser } = useUser();
  const { data: reservation = {}, isLoading: isLoadingReservation } =
    useReservation(reservationId);
  const { data: train = {}, isLoading: isLoadingTrain } = useTrain(
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
        navigate("/reservations");
      },
    });
  }

  return isLoadingReservation || isLoadingTrain || isLoadingUser ? (
    <Loader />
  ) : (
    <div className="mx-auto p-4">
      <Link
        to="/reservations"
        className="mb-4 flex items-center text-cyan-600 hover:text-cyan-800"
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
        Back to My Reservations
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
                  isUpcoming
                    ? "bg-green-100 text-green-800"
                    : !isUpcoming
                      ? "bg-gray-100 text-gray-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {isUpcoming ? "upcoming" : "completed"}
              </div>
            </div>

            <div className="text-right">
              <div className="mb-1 text-sm text-gray-600">Booked on</div>
              <div className="font-medium">
                {/* {reservation.created_at} */}

                {format(new Date(reservation.created_at), "EEE, MMM dd yyyy")}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Journey Details</h2>

            <div className="mb-4">
              <div className="mb-1 text-sm text-gray-600">Train</div>
              <div className="font-medium">
                {train.number} {train.level}
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
                <div className="mb-1 text-sm text-gray-600">From</div>
                <div className="font-medium">{train.trainFrom}</div>
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
                <div className="font-medium">{train.trainTo}</div>
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
                <div className="font-medium">
                  {format(new Date(reservation.date), "EEE, MMM dd yyyy")}
                </div>
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
                  {train.go} - {train.arrive}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {/* Duration: {train.time} */}
                  Duration: {train.time.replace(":00", "")} Hours
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Passenger Details</h2>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Name</div>
                <div className="font-medium">
                  {reservation.firstName} {reservation.lastName}
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Email</div>
                <div className="font-medium">{reservation.email}</div>
              </div>

              <div className="mb-4">
                <div className="mb-1 text-sm text-gray-600">Phone</div>
                <div className="font-medium">{reservation.phone}</div>
              </div>

              <div>
                <div className="mb-1 text-sm text-gray-600">
                  Number of passengers
                </div>
                <div className="font-medium">{reservation.numPassengers}</div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Ticket Details</h2>

              <div>
                <div className="mb-1 text-sm text-gray-600">Payment</div>
                <div className="font-medium">
                  {formatToEGP(reservation.totalPrice)}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Paid with Visa **** 2424
                </div>
              </div>
            </div>
          </div>
        </div>

        {isUpcoming && (
          <div className="flex justify-center space-x-4">
            <DownloadTicket reservation={reservation} train={train} />

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
          </div>
        )}
      </div>
    </div>
  );
}
