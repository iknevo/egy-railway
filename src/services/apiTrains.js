import supabase from "./supabase";

export async function getAllTrains() {
  const { data, error } = await supabase.from("newTrains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrains({ trainFrom, trainTo }) {
  const { data, error } = await supabase
    .from("newTrains")
    .select("*")
    .eq("trainFrom", trainFrom)
    .eq("trainTo", trainTo);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrainById(id) {
  const { data, error } = await supabase
    .from("newTrains")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrainType(id) {
  const { data, error } = await supabase
    .from("trainTypes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
