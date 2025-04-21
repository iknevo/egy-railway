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
  const { data, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const availableTrains = data.filter((train) => {
    const fromIndex = train.stations.findIndex(
      (station) => station.stationId === fromId,
    );
    console.log(data);
    console.log("fromId", fromId);
    console.log("from index: ", fromIndex);
    const toIndex = train.stations.indexOf(
      (station) => station.stationId === toId,
    );

    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });

  return availableTrains;
}

export function getTrainsBetweenStations(fromStationId, toStationId, data) {
  const { lines, schedules, train_types } = data;

  const validLines = lines.filter((line) => {
    const fromIndex = line.stations.indexOf(fromStationId);
    const toIndex = line.stations.indexOf(toStationId);
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });

  const results = [];

  for (const line of validLines) {
    const lineSchedules = schedules.filter(
      (schedule) => schedule.line_id === line.id,
    );

    for (const schedule of lineSchedules) {
      const times = schedule.departure_times;

      const fromTimeObj = times.find((t) => t.station_id === fromStationId);
      const toTimeObj = times.find((t) => t.station_id === toStationId);

      const fromIndex = times.findIndex((t) => t.station_id === fromStationId);
      const toIndex = times.findIndex((t) => t.station_id === toStationId);

      if (fromTimeObj && toTimeObj && fromIndex < toIndex) {
        const trainType = train_types.find(
          (t) => t.id === schedule.train_type_id,
        );

        results.push({
          train_id: schedule.train_id,
          train_type: trainType?.name || schedule.train_type_id,
          from: {
            station_id: fromStationId,
            departure_time: fromTimeObj.departure_time,
          },
          to: {
            station_id: toStationId,
            arrival_time: toTimeObj.departure_time, // assuming same field is used
          },
          line: line.name,
        });
      }
    }
  }

  return results;
}
