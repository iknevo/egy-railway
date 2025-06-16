import axiosInstance from "../lib/axios";

export async function sendBotMessage(message) {
  try {
    const response = await axiosInstance.post("query", message);
    console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
