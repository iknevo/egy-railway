import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useStations } from "../features/stations/useStations";
import TrainItem from "../features/trains/TrainItem";
import { useAvailableTrains } from "../features/trains/useAvailableTrains";
import Loader from "../ui/Loader";

export default function TrainSearchPage() {
  const [fromStation, setFromStation] = useState(null);
  const [toStation, setToStation] = useState(null);
  const [fromId, setFromId] = useState(null);
  const [toId, setToId] = useState(null);

  const { data: stations, isLoading: isLoading } = useStations();
  const { data: availableTrains, isLoading: isLoadingAvailable } =
    useAvailableTrains({ fromId, toId });

  function handleSearch(e) {
    e.preventDefault();
    if (!fromStation || !toStation || !stations) return;
    setFromId(stations.find((station) => station.name === fromStation).id);

    setToId(stations.find((station) => station.name === toStation).id);
  }

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Find Your Train</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Autocomplete
                disablePortal
                value={fromStation}
                onChange={(_, newValue) => setFromStation(newValue)}
                options={stations
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => item.name)}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
            </div>
            <div>
              <Autocomplete
                disablePortal
                value={toStation}
                onChange={(_, newValue) => setToStation(newValue)}
                options={stations
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => item.name)}
                renderInput={(params) => <TextField {...params} label="To" />}
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passengers
              </label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>
          <button
            onClick={(e) => handleSearch(e)}
            type="submit"
            className="w-full rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      {isLoadingAvailable && <Loader />}
      {availableTrains?.length > 0 && !isLoadingAvailable && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Available Trains</h2>
          <div className="space-y-4">
            {/* Train search results would be mapped here */}
            {availableTrains.map((train) => (
              <TrainItem
                train={train}
                fromId={fromId}
                toId={toId}
                key={train.id}
              />
            ))}
          </div>
        </div>
      )}
      {!availableTrains?.length && !isLoadingAvailable && (
        <div className="py-8">
          <h2 className="text-center text-3xl font-semibold">
            There's No available trains for your search
          </h2>
        </div>
      )}
    </div>
  );
}
