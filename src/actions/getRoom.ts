"use server";

import { TRoomType } from "@/types/RoomType";
import handleAPICall from "./handleAPICall";
import { cache } from "react";
import { formatDate } from "@/lib/utils";

const getRoom = cache(
  async (
    hotelId: string,
    roomId: string,
    fromDate?: Date,
    toDate?: Date
  ): Promise<TAPIResponse<TRoomType>> => {
    if (!fromDate || !toDate)
      return {
        status: "error",
        message: "Dates are not provided",
      };
    return await handleAPICall<TRoomType>(
      `/hotels/${hotelId}/room-types/${roomId}?fromDate=${formatDate(
        fromDate
      )}&toDate=${formatDate(toDate)}`,
      "GET"
    );
  }
);

export default getRoom;
