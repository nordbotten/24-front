"use server";

import { THotel } from "../types/Hotel";
import handleAPICall from "./handleAPICall";

const getHotelList = async () => {
  return await handleAPICall<THotel[]>("/hotels", "GET", null);
};

export default getHotelList;
