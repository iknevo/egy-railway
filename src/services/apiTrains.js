import { RESULTS_PER_PAGE } from "../utils/constants";
import supabase from "./supabase";

export async function getAllTrains() {
  const { data, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getPopularTrains() {
  const { data, error } = await supabase.from("popularTrains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrains({ trainFrom, trainTo, page, filter }) {
  let query = supabase
    .from("trains")
    .select("*", { count: "exact" })
    .eq("trainFrom", trainFrom)
    .eq("trainTo", trainTo);
  if (filter) query = query.eq(filter.field, filter.value);
  if (page) {
    const from = (page - 1) * RESULTS_PER_PAGE;
    const to = from + RESULTS_PER_PAGE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return { data, count };
}

export async function getTrainById(id) {
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
