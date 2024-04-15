"use server";

import { THotel } from "../types/Hotel";
import handleAPICall from "./handleAPICall";

const getHotel = async (id: string) => {
  return await handleAPICall<THotel>(`/hotels/${id}`, "GET", null);
};

export default getHotel;
