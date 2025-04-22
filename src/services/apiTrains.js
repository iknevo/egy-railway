import supabase from "./supabase";

export async function getAllTrains() {
  const { data, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrain(id) {
  const { data, error } = await supabase
    .from("trains")
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
