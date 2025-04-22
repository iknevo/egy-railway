import { Link, useParams, useSearchParams } from "react-router";
import { useStations } from "../features/stations/useStations";
import { useTrain } from "../features/trains/useTrain";
import Loader from "../ui/Loader";

export default function TrainDetailsPage() {
  const { trainId } = useParams();
  const [searchParams] = useSearchParams();
  const fromId = searchParams.get("from");
  const toId = searchParams.get("to");
  const { data, isLoading: isLoadingTrain } = useTrain(trainId);
  const { data: stations, isLoading: isLoadingStations } = useStations();
  const isLoading = isLoadingTrain || isLoadingStations;
  const train = {
    id: trainId,
    number: "Express 123",
    from: "Cairo",
    to: "Alexandria",
    departureTime: "09:00",
    arrivalTime: "11:30",
    duration: "2h 30m",
    price: 45.0,
    seats: [
      { id: 1, number: "A1", available: true, class: "First" },
      { id: 2, number: "A2", available: true, class: "First" },
      { id: 3, number: "A3", available: false, class: "First" },
      { id: 4, number: "B1", available: true, class: "Second" },
      { id: 5, number: "B2", available: true, class: "Second" },
    ],
  };
  if (isLoading) return <Loader />;
  console.log(stations.find((st) => st.id == fromId));
  return (
    <div className="container mx-auto p-4">
      <Link
        to="/trains"
        className="mb-4 inline-block text-cyan-600 hover:text-cyan-800"
      >
        &larr; Back to search results
      </Link>

      <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-2 text-2xl font-bold">{train.number}</h1>
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="text-lg">
              <span className="font-bold">{train.from}</span> &rarr;{" "}
              <span className="font-bold">{train.to}</span>
            </p>
            <p className="text-gray-600">
              {train.departureTime} - {train.arrivalTime} ({train.duration})
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xl font-bold text-cyan-600">
              ${train.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Select Your Seat</h2>

        <div className="mb-6">
          <div className="mb-2 flex items-center space-x-4">
            <div className="h-6 w-6 rounded border border-green-500 bg-green-100"></div>
            <span>Available</span>
            <div className="ml-4 h-6 w-6 rounded border border-red-500 bg-red-100"></div>
            <span>Occupied</span>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {train.seats.map((seat) => (
            <button
              key={seat.id}
              disabled={!seat.available}
              className={`rounded-md p-3 text-center ${
                seat.available
                  ? "cursor-pointer border border-green-500 bg-green-100 hover:bg-green-200"
                  : "cursor-not-allowed border border-red-500 bg-red-100"
              }`}
            >
              <div className="font-bold">{seat.number}</div>
              <div className="text-xs">{seat.class}</div>
            </button>
          ))}
        </div>

        <Link
          to="/booking"
          className="block w-full rounded-md bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          Continue to Booking
        </Link>
      </div>
    </div>
  );
}
