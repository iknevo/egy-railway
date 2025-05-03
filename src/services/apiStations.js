import supabase from "./supabase";

export async function getAllStations() {
  const { data, error } = await supabase.from("stations").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getStationById(id) {
  const { data, error } = await supabase
    .from("stations")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
