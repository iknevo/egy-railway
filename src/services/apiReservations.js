import supabase from "./supabase";

export async function addReseravation(reseravtion) {
  const { data, error } = await supabase
    .from("reservations")
    .insert(reseravtion)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getReservations(userId) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }
  return data;
}

export async function getReservation(id) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }
  return data;
}

export async function deleteReservation(id) {
  const { data, error } = await supabase
    .from("reservations")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be deleted");
  }
  return data;
}
