import supabase from "./supabase";

export async function getAllTrains() {
  const { data, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getAvailabelTrains({ fromId, toId }) {
  const { data: trains, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const availableTrains = trains.filter((train) => {
    const fromIndex = train.stations.findIndex(
      (station) => station.stationId === fromId,
    );
    const toIndex = train.stations.findIndex(
      (station) => station.stationId === toId,
    );

    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });

  return availableTrains;
}
