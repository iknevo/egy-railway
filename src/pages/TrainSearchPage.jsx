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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Find Your Train
        </h1>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
          <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Search Trains
            </h2>
          </div>
          <div className="p-6">
            <form className="space-y-6" onSubmit={handleSearch}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="From Station"
                        className="w-full"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#e5e7eb",
                            },
                            "&:hover fieldset": {
                              borderColor: "#0891b2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#0891b2",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#0891b2",
                          },
                        }}
                      />
                    )}
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
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="To Station"
                        className="w-full"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#e5e7eb",
                            },
                            "&:hover fieldset": {
                              borderColor: "#0891b2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#0891b2",
                            },
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#0891b2",
                          },
                        }}
                      />
                    )}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
              >
                Search Trains
              </button>
            </form>
          </div>
        </div>

        <TrainsList
          fromStation={fromStation}
          toStation={toStation}
          search={search}
        />
      </div>
    </div>
  );
}
