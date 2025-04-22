import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { useStations } from "../features/stations/useStations";
import TrainItem from "../features/trains/TrainItem";
import { useTrains } from "../features/trains/useTrains";
import Loader from "../ui/Loader";

export default function TrainSearchPage() {
  const { data: stations, isLoading: isLoadingStations } = useStations();
  const { data: trains, isLoading: isLoadingTrains } = useTrains();
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const fromId = +searchParams.get("fromId");
  const toId = +searchParams.get("toId");
  const isLoading = isLoadingStations || isLoadingTrains;

  function handleSearch(e) {
    e.preventDefault();
    if (!fromStation || !toStation || !stations) return;
    searchParams.set(
      "fromId",
      stations.find((station) => station.name === fromStation).id,
    );
    searchParams.set(
      "toId",
      stations.find((station) => station.name === toStation).id,
    );
    setSearchParams(searchParams);
  }

  if (isLoading) return <Loader />;

  const availableTrains = trains.filter((train) => {
    const fromIndex = train.stations.findIndex(
      (station) => station.stationId === fromId,
    );
    const toIndex = train.stations.findIndex(
      (station) => station.stationId === toId,
    );
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });

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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2"></div>
          <button
            onClick={(e) => handleSearch(e)}
            type="submit"
            className="w-full cursor-pointer rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      {availableTrains?.length > 0 && (
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
      {!availableTrains?.length && (
        <div className="py-8">
          <h2 className="text-center text-3xl font-semibold">
            There's No available trains for your search
          </h2>
        </div>
      )}
    </div>
  );
}
