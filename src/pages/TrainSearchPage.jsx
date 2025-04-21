import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useStations } from "../features/stations/useStations";
import TrainItem from "../features/trains/TrainItem";
import { useAvailableTrains } from "../features/trains/useAvailableTrains";
import { useTrains } from "../features/trains/useTrains";
import Loader from "../ui/Loader";

export default function TrainSearchPage() {
  const [fromStation, setFromStation] = useState(null);
  const [toStation, setToStation] = useState(null);
  const [fromId, setFromId] = useState(null);
  const [toId, setToId] = useState(null);

  const { data: stations, isLoading: isLoadingStations } = useStations();
  const { data: trains, isLoading: isLoadingTrains } = useTrains();
  // const { data: availableTrains, isLoading: isLoadingAvailabel } =
  // useAvailableTrains({ fromId, toId });
  // console.log(availableTrains);
  const isLoading = isLoadingStations || isLoadingTrains;
  // console.log(`from:${fromId}`, `to:${toId}`);

  useEffect(() => {
    if (!fromStation || !stations) return;
    setFromId(stations.find((station) => station.name === fromStation).id);
  }, [stations, fromStation]);

  useEffect(() => {
    if (!toStation || !stations) return;
    setToId(stations.find((station) => station.name === toStation).id);
  }, [stations, toStation]);

  // console.log(stations);
  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20">
        <Loader />
      </div>
    );

  const availableTrains = trains.filter((train) => {
    const fromIndex = train.stations.findIndex(
      (station) => station.stationId === fromId,
    );
    // console.log("fromId", fromId);
    // console.log("from index: ", fromIndex);
    const toIndex = train.stations.findIndex(
      (station) => station.stationId === toId,
    );

    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });
  // console.log(availableTrains);
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
                options={stations.map((item) => item.name)}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
            </div>
            <div>
              <Autocomplete
                disablePortal
                value={toStation}
                onChange={(_, newValue) => setToStation(newValue)}
                options={stations.map((item) => item.name)}
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
            type="submit"
            className="w-full rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

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
          {/* <div className="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
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
              <p className="font-bold text-cyan-600">$45.00</p>
              <button className="rounded bg-cyan-600 px-4 py-1 text-white hover:bg-cyan-700">
                Select
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
