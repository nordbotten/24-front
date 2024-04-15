"use server";

import { TRoomType } from "@/types/RoomType";
import handleAPICall from "./handleAPICall";
import { cache } from "react";
import { formatDate } from "@/lib/utils";

const getAvailableRoomTypes = cache(
  async (
    hotelId: string,
    fromDate?: Date,
    toDate?: Date
  ): Promise<TAPIResponse<TRoomType[]>> => {
    if (!fromDate || !toDate)
      return {
        status: "error",
        message: "Dates are not provided",
      };
    return await handleAPICall<TRoomType[]>(
      `/hotels/${hotelId}/room-types/availability?fromDate=${formatDate(
        fromDate
      )}&toDate=${formatDate(toDate)}`,
      "GET"
    );
  }
);

export default getAvailableRoomTypes;
