import { Link } from "react-router";

const TrainSearchPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Find Your Train</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="Departure station"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="Arrival station"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passengers
              </label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Available Trains</h2>
        <div className="space-y-4">
          {/* Train search results would be mapped here */}
          <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Express 123</p>
                <p className="text-sm text-gray-600">Cairo → Alexandria</p>
              </div>
              <div className="text-right">
                <p className="font-bold">09:00 - 11:30</p>
                <p className="text-sm text-gray-600">2h 30m</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="font-bold text-indigo-600">$45.00</p>
              <button className="rounded bg-indigo-600 px-4 py-1 text-white hover:bg-indigo-700">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainSearchPage;
