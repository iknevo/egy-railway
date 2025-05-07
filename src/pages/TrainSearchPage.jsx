import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useStations } from "../features/stations/useStations";
import TrainsList from "../features/trains/TrainsList";
import Loader from "../ui/Loader";

export default function TrainSearchPage() {
  const { data: stations, isLoading: isLoadingStations } = useStations();

  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [search, setSearch] = useState(false);
  const isLoading = isLoadingStations;

  function handleSearch(e) {
    e.preventDefault();
    if (!fromStation || !toStation || !stations) return;
    setSearch((search) => !search);
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
                options={[
                  ...new Set(
                    stations
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => item.name),
                  ),
                ]}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
            </div>
            <div>
              <Autocomplete
                data-lenis-prevent="true"
                disablePortal
                value={toStation}
                onChange={(_, newValue) => setToStation(newValue)}
                options={[
                  ...new Set(
                    stations
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => item.name),
                  ),
                ]}
                renderInput={(params) => <TextField {...params} label="To" />}
              />
            </div>

            {/* <div className="relative">
              <input type="text" name="to" id="to" placeholder="xxx" />
              <div className="absolute top-full left-0 w-full">asdfsadf</div>
            </div> */}
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
      <TrainsList
        fromStation={fromStation}
        toStation={toStation}
        search={search}
      />
    </div>
  );
}
